(() => {
  function buildDataUrl(parts, label) {
    if (!Array.isArray(parts) || parts.length !== 4) {
      console.error(`${label} artwork parts are incomplete`, parts?.length ?? 0);
      return null;
    }
    const base64 = parts.join('').replace(/\s+/g, '');
    return `data:image/webp;base64,${base64}`;
  }

  const suspects = buildDataUrl(window.__newSuspectGridParts, 'suspects');
  const evidence = buildDataUrl(window.__newEvidenceGridParts, 'evidence');
  window.__cardImageUrls = { suspects, evidence };

  for (const src of [suspects, evidence]) {
    if (!src) continue;
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  }
})();
