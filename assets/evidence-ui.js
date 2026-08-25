(() => {
  const sheetUrl = window.__cardImageUrls?.evidence;
  if (!sheetUrl) {
    console.error('Evidence artwork sheet is unavailable');
    return;
  }

  const HORIZONTAL_ALIBI = 'data:image/jpeg;base64,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';

  const REF_W = 900;
  const REF_H = 675;
  const CROP = {
    motive: [17, 6, 290, 357],
    clue: [317, 6, 290, 357],
    weapon: [617, 6, 282, 357],
    falseTestimony: [17, 367, 290, 308],
    alibiVertical: [317, 367, 290, 308],
    twist: [617, 367, 282, 308],
  };

  const style = document.createElement('style');
  style.textContent = `
    .card.evidence-image-card{padding:0;overflow:hidden;background:#08090d;border-color:#806633}
    .card.evidence-image-card:hover{border-color:#d1ad59}
    .evidence-crop,.evidence-direct{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#08090d}
    .private-card.has-evidence-art{padding:14px;background:#111722;color:#f4f0e7;max-width:340px}
    .private-card.has-evidence-art>.icon{display:none}
    .private-evidence-crop,.private-evidence-direct{display:block;width:min(300px,100%);height:auto;max-height:440px;margin:0 auto 12px;border-radius:12px;border:1px solid #8e7446;box-shadow:0 8px 24px #0008;object-fit:contain;background:#08090d}
  `;
  document.head.appendChild(style);

  const sheet = new Image();
  const horizontalAlibi = new Image();
  let sheetReady = false;
  let horizontalReady = false;

  function keyFor(card) {
    if (!card) return '';
    if (card.type === 'motive') return 'motive';
    if (card.type === 'clue') return 'clue';
    if (card.type === 'weapon') return 'weapon';
    if (card.type === 'falseTestimony') return 'falseTestimony';
    if (card.type === 'twist') return 'twist';
    if (card.type === 'alibi') {
      return card.variant === 'alibi-horizontal' ? 'alibiHorizontal' : 'alibiVertical';
    }
    return '';
  }

  function cropCanvas(key, className) {
    const box = CROP[key];
    if (!sheetReady || !box) return null;
    const [x, y, w, h] = box;
    const sx = x * sheet.naturalWidth / REF_W;
    const sy = y * sheet.naturalHeight / REF_H;
    const sw = w * sheet.naturalWidth / REF_W;
    const sh = h * sheet.naturalHeight / REF_H;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(sw));
    canvas.height = Math.max(1, Math.round(sh));
    canvas.className = className;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(sheet, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  function makeArtwork(card, boardMode) {
    const key = keyFor(card);
    if (!key) return null;

    if (key === 'alibiHorizontal') {
      if (!horizontalReady) return null;
      const img = document.createElement('img');
      img.src = HORIZONTAL_ALIBI;
      img.alt = labelFor(card);
      img.draggable = false;
      img.className = boardMode ? 'evidence-direct' : 'private-evidence-direct';
      return img;
    }

    const art = cropCanvas(key, boardMode ? 'evidence-crop' : 'private-evidence-crop');
    if (art) art.setAttribute('aria-label', labelFor(card));
    return art;
  }

  function addPawnMarker(btn, index) {
    const pawns = pawnOwnersAt(index);
    if (!pawns.length) return;
    const marker = document.createElement('span');
    marker.style.cssText = 'position:absolute;right:5px;top:5px;z-index:5;padding:3px 6px;border-radius:999px;background:#f1d58a;color:#111;font-size:11px;font-weight:800;box-shadow:0 2px 5px #0008';
    marker.textContent = pawns.map((p) => `P${p + 1}`).join(' ');
    btn.appendChild(marker);
  }

  function decorateBoard() {
    const buttons = document.querySelectorAll('#board .card');
    state.board.forEach((card, index) => {
      if (!card.revealed || card.type === 'suspect') return;
      const btn = buttons[index];
      const art = makeArtwork(card, true);
      if (!btn || !art) return;
      btn.classList.add('evidence-image-card');
      btn.innerHTML = '';
      btn.appendChild(art);
      addPawnMarker(btn, index);
    });
  }

  const baseRenderBoard = renderBoard;
  renderBoard = function renderBoardWithEvidenceArtwork() {
    baseRenderBoard();
    decorateBoard();
  };

  function enhanceModal() {
    const privateCard = document.querySelector('.private-card:not([data-evidence-art])');
    if (!privateCard || state.selectedIndex === null) return;
    const card = state.board[state.selectedIndex];
    if (!card || card.type === 'suspect') return;
    const art = makeArtwork(card, false);
    if (!art) return;
    privateCard.dataset.evidenceArt = '1';
    privateCard.classList.add('has-evidence-art');
    privateCard.prepend(art);
  }

  new MutationObserver(enhanceModal).observe($('modalContent'), { childList: true, subtree: true });

  sheet.onload = () => {
    sheetReady = true;
    renderBoard();
    enhanceModal();
  };
  sheet.onerror = () => console.error('Failed to load evidence artwork sheet');
  sheet.src = sheetUrl;

  horizontalAlibi.onload = () => {
    horizontalReady = true;
    renderBoard();
    enhanceModal();
  };
  horizontalAlibi.onerror = () => console.error('Failed to load horizontal alibi artwork');
  horizontalAlibi.src = HORIZONTAL_ALIBI;
})();