(() => {
  function partsToBlobUrl(parts, label) {
    if (!Array.isArray(parts) || parts.length === 0) {
      console.warn(`${label} artwork is missing`);
      return null;
    }

    try {
      const base64 = parts.join('').replace(/\s+/g, '');
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

      const riff = String.fromCharCode(...bytes.slice(0, 4));
      const webp = String.fromCharCode(...bytes.slice(8, 12));
      if (riff !== 'RIFF' || webp !== 'WEBP') {
        console.warn(`${label} data is not a valid WebP header`, riff, webp);
      }

      return URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
    } catch (error) {
      console.error(`Failed to build ${label} artwork`, error);
      return null;
    }
  }

  const suspectUrl = partsToBlobUrl(window.__newSuspectGridParts, 'suspect');
  const evidenceUrl = partsToBlobUrl(window.__newEvidenceGridParts, 'evidence');

  function applyCardImages(root = document) {
    if (suspectUrl) {
      root.querySelectorAll?.('.suspect-art, .private-suspect-art, .accuse-thumb').forEach((el) => {
        el.style.backgroundImage = `url("${suspectUrl}")`;
      });
    }

    if (evidenceUrl) {
      root.querySelectorAll?.('.evidence-art, .private-evidence-art').forEach((el) => {
        el.style.backgroundImage = `url("${evidenceUrl}")`;
      });
    }
  }

  if (suspectUrl) {
    document.documentElement.style.setProperty('--suspect-grid', `url("${suspectUrl}")`);
  }
  if (evidenceUrl) {
    document.documentElement.style.setProperty('--evidence-grid', `url("${evidenceUrl}")`);
  }

  // Re-render once after the Blob URLs exist, then force the image URL directly
  // onto every card element. This avoids long data-URL/CSS-variable issues on Safari/iOS.
  try {
    if (typeof renderBoard === 'function' && window.state?.board?.length) renderBoard();
  } catch (error) {
    console.warn('Card rerender failed; applying artwork to current DOM instead', error);
  }
  applyCardImages(document);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.matches?.('.suspect-art, .private-suspect-art, .accuse-thumb, .evidence-art, .private-evidence-art')) {
          applyCardImages(node.parentElement || node);
        } else {
          applyCardImages(node);
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('pageshow', () => applyCardImages(document));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) applyCardImages(document);
  });

  window.addEventListener('beforeunload', () => {
    observer.disconnect();
    if (suspectUrl) URL.revokeObjectURL(suspectUrl);
    if (evidenceUrl) URL.revokeObjectURL(evidenceUrl);
  }, { once: true });
})();
