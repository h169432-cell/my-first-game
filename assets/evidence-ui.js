(() => {
  const evidenceGridUrl = window.__cardImageUrls?.evidence;
  if (!evidenceGridUrl) {
    console.error('Evidence artwork URL is unavailable');
    return;
  }

  const style = document.createElement('style');
  style.textContent = `
    .card.evidence-image-card{padding:0;overflow:hidden;background:#08090d;border-color:#806633}
    .card.evidence-image-card:hover{border-color:#d1ad59}
    .evidence-art,.private-evidence-art{
      background-image:url("${evidenceGridUrl}");
      background-repeat:no-repeat;
      background-size:300% 200%;
      background-color:#08090d;
    }
    .evidence-art{position:absolute;inset:0}
    .ev-motive{background-position:0% 0%}
    .ev-clue{background-position:50% 0%}
    .ev-weapon{background-position:100% 0%}
    .ev-false{background-position:0% 100%}
    .ev-alibi{background-position:50% 100%}
    .ev-twist{background-position:100% 100%}
    .private-card.has-evidence-art{padding:14px;background:#111722;color:#f4f0e7;max-width:330px}
    .private-card.has-evidence-art>.icon{display:none}
    .private-evidence-art{width:min(285px,100%);aspect-ratio:482/555;margin:0 auto 12px;border-radius:12px;border:1px solid #8e7446;box-shadow:0 8px 24px #0008}
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

  function addPawnMarker(btn, index) {
    const pawns = pawnOwnersAt(index);
    if (!pawns.length) return;
    const marker = document.createElement('span');
    marker.style.cssText = 'position:absolute;right:5px;top:5px;z-index:5;padding:3px 6px;border-radius:999px;background:#f1d58a;color:#111;font-size:11px;font-weight:800;box-shadow:0 2px 5px #0008';
    marker.textContent = pawns.map(p => `P${p + 1}`).join(' ');
    btn.appendChild(marker);
  }

  function decorateBoard() {
    const buttons = document.querySelectorAll('#board .card');
    state.board.forEach((card, index) => {
      const cls = artClass(card);
      const btn = buttons[index];
      if (!btn || !card.revealed || !cls || card.type === 'suspect') return;
      btn.classList.add('evidence-image-card');
      btn.innerHTML = `<div class="evidence-art ${cls}" aria-label="${labelFor(card)}"></div>`;
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
    const cls = artClass(card);
    if (!cls || card.type === 'suspect') return;
    privateCard.dataset.evidenceArt = '1';
    privateCard.classList.add('has-evidence-art');
    const art = document.createElement('div');
    art.className = `private-evidence-art ${cls}`;
    privateCard.prepend(art);
  }

  new MutationObserver(enhanceModal).observe($('modalContent'), { childList: true, subtree: true });
})();
