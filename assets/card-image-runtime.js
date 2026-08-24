(() => {
  function buildWebpUrl(parts, label) {
    if (!Array.isArray(parts) || parts.length !== 4) {
      throw new Error(`${label}: image parts are incomplete (${parts?.length ?? 0}/4)`);
    }

    const base64 = parts.join('').replace(/\s+/g, '');
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);

    const riff = String.fromCharCode(...bytes.slice(0, 4));
    const webp = String.fromCharCode(...bytes.slice(8, 12));
    const declared = (bytes[4] | (bytes[5] << 8) | (bytes[6] << 16) | (bytes[7] << 24)) >>> 0;
    const expectedLength = declared + 8;

    if (riff !== 'RIFF' || webp !== 'WEBP') throw new Error(`${label}: invalid WebP header`);
    if (expectedLength !== bytes.length) throw new Error(`${label}: truncated WebP (${bytes.length}/${expectedLength})`);

    return URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
  }

  try {
    const suspects = buildWebpUrl(window.__newSuspectGridParts, 'suspects');
    const evidence = buildWebpUrl(window.__newEvidenceGridParts, 'evidence');
    window.__cardImageUrls = { suspects, evidence };

    [suspects, evidence].forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  } catch (error) {
    console.error('Card artwork initialization failed:', error);
    window.__cardImageUrls = null;
  }
})();
