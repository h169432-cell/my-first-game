(() => {
  const sheetUrl = window.__cardImageUrls?.suspects;
  if (!sheetUrl) {
    console.error('Suspect artwork sheet is unavailable');
    return;
  }

  const REF_W = 900;
  const REF_H = 675;
  const CROP = {
    1: [8, 8, 211, 327],
    2: [233, 8, 210, 327],
    3: [457, 8, 211, 327],
    4: [681, 8, 212, 327],
    5: [111, 347, 217, 317],
    6: [346, 347, 213, 317],
    7: [575, 347, 210, 317],
  };
  const names = {
    1: 'ファン・ゴッホ',
    2: 'レオナルド・ダ・ヴィンチ',
    3: 'フェルメール',
    4: '織田信長',
    5: 'ラファエロ',
    6: 'モネ',
    7: 'ヤン・ファン・エイク',
  };

  const style = document.createElement('style');
  style.textContent = `
    .card.suspect-image-card{padding:0;overflow:hidden;background:#090b0f;border-color:#806633}
    .card.suspect-image-card:hover{border-color:#d1ad59}
    .suspect-crop{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#090b0f}
    .private-card.has-suspect-art{padding:14px;background:#111722;color:#f4f0e7;max-width:340px}
    .private-card.has-suspect-art>.icon{display:none}
    .private-suspect-crop{display:block;width:min(290px,100%);height:auto;margin:0 auto 12px;border-radius:12px;border:1px solid #8e7446;box-shadow:0 8px 24px #0008;background:#090b0f}
    .accuse-grid button.suspect-choice{padding:5px;display:grid;gap:5px;background:#171d28;border:1px solid #39465c}
    .accuse-thumb-crop{display:block;width:100%;height:auto;border-radius:7px;background:#090b0f}
    .accuse-name{font-size:.62rem;line-height:1.15;color:#e6d4a4}
  `;
  document.head.appendChild(style);

  const sheet = new Image();
  let ready = false;

  function cropCanvas(number, className) {
    const box = CROP[number];
    if (!ready || !box) return null;

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

  function addPawnMarker(btn, index) {
    const pawns = pawnOwnersAt(index);
    if (!pawns.length) return;
    const marker = document.createElement('span');
    marker.style.cssText = 'position:absolute;right:5px;top:5px;z-index:5;padding:3px 6px;border-radius:999px;background:#f1d58a;color:#111;font-size:11px;font-weight:800;box-shadow:0 2px 5px #0008';
    marker.textContent = pawns.map((p) => `P${p + 1}`).join(' ');
    btn.appendChild(marker);
  }

  function decorateBoard() {
    if (!ready) return;
    const buttons = document.querySelectorAll('#board .card');
    state.board.forEach((card, index) => {
      if (!card.revealed || card.type !== 'suspect') return;
      const btn = buttons[index];
      const art = cropCanvas(card.suspectNumber, 'suspect-crop');
      if (!btn || !art) return;
      btn.classList.add('suspect-image-card');
      btn.innerHTML = '';
      art.setAttribute('aria-label', `容疑者 ${card.suspectNumber} ${names[card.suspectNumber]}`);
      btn.appendChild(art);
      addPawnMarker(btn, index);
    });
  }

  const baseRenderBoard = renderBoard;
  renderBoard = function renderBoardWithSuspectArtwork() {
    baseRenderBoard();
    decorateBoard();
  };

  function enhanceModal() {
    if (!ready) return;

    const privateCard = document.querySelector('.private-card:not([data-suspect-art])');
    if (privateCard && state.selectedIndex !== null) {
      const card = state.board[state.selectedIndex];
      if (card?.type === 'suspect') {
        const art = cropCanvas(card.suspectNumber, 'private-suspect-crop');
        if (art) {
          privateCard.dataset.suspectArt = '1';
          privateCard.classList.add('has-suspect-art');
          art.setAttribute('aria-label', `容疑者 ${card.suspectNumber} ${names[card.suspectNumber]}`);
          privateCard.prepend(art);
        }
      }
    }

    document.querySelectorAll('[data-accuse]').forEach((button) => {
      const n = Number(button.dataset.accuse);
      if (!Number.isInteger(n) || n < 1 || n > 7 || button.dataset.suspectArt) return;
      const art = cropCanvas(n, 'accuse-thumb-crop');
      if (!art) return;
      button.dataset.suspectArt = '1';
      button.classList.add('suspect-choice');
      button.innerHTML = '';
      const label = document.createElement('span');
      label.textContent = `容疑者 ${n}`;
      const name = document.createElement('span');
      name.className = 'accuse-name';
      name.textContent = names[n];
      button.append(art, label, name);
    });
  }

  new MutationObserver(enhanceModal).observe($('modalContent'), { childList: true, subtree: true });

  sheet.onload = () => {
    ready = true;
    renderBoard();
    enhanceModal();
  };
  sheet.onerror = () => console.error('Failed to load suspect artwork sheet');
  sheet.src = sheetUrl;
})();