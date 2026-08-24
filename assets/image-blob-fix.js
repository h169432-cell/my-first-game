(() => {
  function partsToBlobUrl(parts, label) {
    if (!Array.isArray(parts) || parts.length !== 4) {
      console.warn(`${label} artwork is incomplete:`, parts?.length ?? 0);
      return null;
    }
    try {
      const binary = atob(parts.join(''));
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
    } catch (error) {
      console.error(`Failed to build ${label} artwork blob`, error);
      return null;
    }
  }

  const suspectUrl = partsToBlobUrl(window.__newSuspectGridParts, 'suspect');
  const evidenceUrl = partsToBlobUrl(window.__newEvidenceGridParts, 'evidence');

  if (suspectUrl) {
    document.documentElement.style.setProperty('--suspect-grid', `url("${suspectUrl}")`);
  }
  if (evidenceUrl) {
    document.documentElement.style.setProperty('--evidence-grid', `url("${evidenceUrl}")`);
  }

  window.addEventListener('beforeunload', () => {
    if (suspectUrl) URL.revokeObjectURL(suspectUrl);
    if (evidenceUrl) URL.revokeObjectURL(evidenceUrl);
  }, { once: true });
})();
