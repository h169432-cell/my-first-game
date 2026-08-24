(() => {
  const parts = window.__newEvidenceGridParts || [];
  if (parts.length !== 4) {
    console.warn('New evidence artwork is incomplete:', parts.length);
    return;
  }

  const gridUrl = `data:image/webp;base64,${parts.join('')}`;
  document.documentElement.style.setProperty('--evidence-grid', `url("${gridUrl}")`);

  const style = document.createElement('style');
  style.textContent = `
    .card.evidence-image-card{padding:0;overflow:hidden;background:#08090d;border-color:#806633}
    .card.evidence-image-card:hover{border-color:#d1ad59}
    .evidence-art,.private-evidence-art{background-image:var(--evidence-grid);background-repeat:no-repeat;background-size:300% 200%}
    .evidence-art{position:absolute;inset:0}
    .ev-motive{background-position:0% 0%}.ev-clue{background-position:50% 0%}.ev-weapon{background-position:100% 0%}
    .ev-false{background-position:0% 100%}.ev-alibi{background-position:50% 100%}.ev-twist{background-position:100% 100%}
    .private-card.has-evidence-art{padding:14px;background:#111722;color:#f4f0e7;max-width:330px}
    .private-card.has-evidence-art>.icon{display:none}
    .private-evidence-art{width:min(270px,100%);aspect-ratio:3/4;margin:0 auto 12px;border-radius:12px;border:1px solid #8e7446;box-shadow:0 8px 24px #0008}
  `;
  document.head.appendChild(style);

  function artClass(card) {
    if (!card) return '';
    if (card.type === 'motive') return 'ev-motive';
    if (card.type === 'clue') return 'ev-clue';
    if (card.type === 'weapon') return 'ev-weapon';
    if (card.type === 'falseTestimony') return 'ev-false';
    if (card.type === 'alibi') return 'ev-alibi';
    if (card.type === 'twist') return 'ev-twist';
    return '';
  }

  function decorateBoard() {
    const buttons = document.querySelectorAll('#board .card');
    state.board.forEach((card, index) => {
      const cls = artClass(card);
      const btn = buttons[index];
      if (!btn || !card.revealed || !cls) return;
      btn.classList.add('evidence-image-card');
      const old = Array.from(btn.children).find((el) => !el.matches('span[style]'));
      if (old) old.remove();
      const art = document.createElement('div');
      art.className = `evidence-art ${cls}`;
      art.setAttribute('aria-label', labelFor(card));
      btn.prepend(art);
    });
  }

  const baseRenderBoard = renderBoard;
  renderBoard = function renderBoardWithEvidenceCards() {
    baseRenderBoard();
    decorateBoard();
  };

  function enhanceModal() {
    const privateCard = document.querySelector('.private-card:not([data-evidence-art])');
    if (!privateCard || state.selectedIndex === null) return;
    const card = state.board[state.selectedIndex];
    const cls = artClass(card);
    if (!cls) return;
    privateCard.dataset.evidenceArt = '1';
    privateCard.classList.add('has-evidence-art');
    const art = document.createElement('div');
    art.className = `private-evidence-art ${cls}`;
    privateCard.prepend(art);
  }

  new MutationObserver(enhanceModal).observe($('modalContent'), {childList:true, subtree:true});
  if ($('board').children.length) renderBoard();
})();
