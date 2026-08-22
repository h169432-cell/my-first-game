(() => {
  document.documentElement.style.setProperty('--evidence-sheet', 'url("./assets/evidence-cards-sheet.webp")');

  const style = document.createElement('style');
  style.textContent = `
    .card.evidence-image-card,
    .card.evidence-image-card.revealed{
      padding:0;
      overflow:hidden;
      background:#080b0f;
      border-color:#75603b;
      color:#fff;
    }
    .card.evidence-image-card:hover{border-color:#b99a5f}
    .evidence-art{
      position:absolute;
      inset:0;
      background-image:var(--evidence-sheet);
      background-repeat:no-repeat;
      background-size:500% 200%;
      filter:saturate(.98) contrast(1.04);
    }
    .evidence-art.ev-1{background-position:0% 0%}
    .evidence-art.ev-2{background-position:25% 0%}
    .evidence-art.ev-3{background-position:50% 0%}
    .evidence-art.ev-4{background-position:75% 0%}
    .evidence-art.ev-5{background-position:100% 0%}
    .evidence-art.ev-6{background-position:0% 100%}
    .evidence-art.ev-7{background-position:25% 100%}
    .evidence-art.ev-8{background-position:50% 100%}
    .evidence-art.ev-9{background-position:75% 100%}
    .evidence-art.ev-10{background-position:100% 100%}
    .private-card.has-evidence-art{padding:14px;background:#111722;color:#f4f0e7}
    .private-card.has-evidence-art>.icon{display:none}
    .private-card.has-evidence-art h2{margin:.35rem 0}
    .private-evidence-art{
      width:min(260px,100%);
      aspect-ratio:5/2;
      margin:0 auto 14px;
      border-radius:12px;
      border:1px solid #8e7446;
      background-image:var(--evidence-sheet);
      background-repeat:no-repeat;
      background-size:500% 200%;
      box-shadow:0 8px 24px rgba(0,0,0,.35);
    }
  `;
  document.head.appendChild(style);

  function evidenceClassFor(card) {
    if (!card) return '';
    switch (card.variant) {
      case 'motive-1': return 'ev-1';
      case 'motive-2': return 'ev-2';
      case 'alibi-vertical': return 'ev-3';
      case 'alibi-horizontal': return 'ev-4';
      case 'weapon-1': return 'ev-5';
      case 'weapon-2': return 'ev-6';
      case 'clue-1': return 'ev-7';
      case 'clue-2': return 'ev-8';
      case 'false-base':
      case 'false-special': return 'ev-9';
      default:
        if (card.type === 'twist') return 'ev-10';
        return '';
    }
  }

  function applyEvidenceArtToBoard() {
    const buttons = document.querySelectorAll('#board .card');
    state.board.forEach((card, index) => {
      const cls = evidenceClassFor(card);
      const btn = buttons[index];
      if (!btn || !card.revealed || !cls || card.type === 'suspect') return;
      btn.classList.add('evidence-image-card');
      btn.innerHTML = `<div class="evidence-art ${cls}" aria-label="${labelFor(card)}"></div>`;
    });
  }

  const originalRenderBoard = renderBoard;
  renderBoard = function renderBoardWithEvidenceArt() {
    originalRenderBoard();
    applyEvidenceArtToBoard();
  };

  function enhanceModal() {
    const privateCard = document.querySelector('.private-card:not([data-evidence-enhanced])');
    if (privateCard && state.selectedIndex !== null) {
      const card = state.board[state.selectedIndex];
      const cls = evidenceClassFor(card);
      if (card && cls && card.type !== 'suspect') {
        privateCard.dataset.evidenceEnhanced = 'true';
        privateCard.classList.add('has-evidence-art');
        const art = document.createElement('div');
        art.className = `private-evidence-art evidence-art ${cls}`;
        privateCard.prepend(art);
      }
    }
  }

  const observer = new MutationObserver(enhanceModal);
  observer.observe($('modalContent'), { childList: true, subtree: true });

  if ($('board').children.length) renderBoard();
})();