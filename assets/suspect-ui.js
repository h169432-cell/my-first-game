(() => {
  const parts = window.__suspectSheetParts || [];
  if (parts.length !== 6) {
    console.warn('Suspect artwork is incomplete:', parts.length);
    return;
  }

  const suspectSheetUrl = `data:image/webp;base64,${parts.join('')}`;
  const suspectNames = {
    1: 'Leon S. Kennedy',
    2: 'クレア・レッドフィールド',
    3: 'ジル・バレンタイン',
    4: 'クリス・レッドフィールド',
    5: 'エイダ・ウォン',
    6: 'アルバート・ウェスカー',
  };

  document.documentElement.style.setProperty('--suspect-sheet', `url("${suspectSheetUrl}")`);

  const style = document.createElement('style');
  style.textContent = `
    .card.suspect-image-card{padding:0;overflow:hidden;background:#080b0f;border-color:#75603b;color:#fff}
    .card.suspect-image-card:hover{border-color:#b99a5f}
    .suspect-art{position:absolute;inset:0;background-image:var(--suspect-sheet);background-repeat:no-repeat;background-size:300% 200%;filter:saturate(.98) contrast(1.04)}
    .suspect-art-1{background-position:0% 0%}.suspect-art-2{background-position:50% 0%}.suspect-art-3{background-position:100% 0%}
    .suspect-art-4{background-position:0% 100%}.suspect-art-5{background-position:50% 100%}.suspect-art-6{background-position:100% 100%}
    .suspect-art::after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,transparent 55%,rgba(0,0,0,.14) 72%,rgba(0,0,0,.78) 100%);pointer-events:none}
    .suspect-overlay{position:absolute;left:7px;right:7px;bottom:6px;z-index:2;text-align:left;text-shadow:0 2px 4px #000;line-height:1.08}
    .suspect-overlay strong{display:block;font-size:clamp(.68rem,1.3vw,.92rem);color:#fff}
    .suspect-overlay small{display:block;margin-top:3px;font-size:clamp(.48rem,.9vw,.68rem);color:#f0dca8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .private-suspect-art{width:min(230px,100%);aspect-ratio:8/9;margin:0 auto 14px;border-radius:12px;border:1px solid #8e7446;background-image:var(--suspect-sheet);background-repeat:no-repeat;background-size:300% 200%;box-shadow:0 8px 24px rgba(0,0,0,.35)}
    .private-card.has-suspect-art{padding:14px;background:#111722;color:#f4f0e7}
    .private-card.has-suspect-art>.icon{display:none}
    .private-card.has-suspect-art h2{margin:.35rem 0}
    .accuse-grid button.suspect-choice{padding:5px;display:grid;gap:5px;background:#171d28;border:1px solid #39465c}
    .accuse-thumb{width:100%;aspect-ratio:8/9;border-radius:7px;background-image:var(--suspect-sheet);background-repeat:no-repeat;background-size:300% 200%}
    .accuse-name{font-size:.64rem;line-height:1.15;color:#e6d4a4;min-height:1.5em}
    @media(max-width:640px){.suspect-overlay{left:4px;right:4px;bottom:4px}.suspect-overlay small{display:none}.accuse-name{font-size:.58rem}}
  `;
  document.head.appendChild(style);

  const imagePositionClass = (n) => `suspect-art-${n}`;

  const originalRenderBoard = renderBoard;
  renderBoard = function renderBoardWithSuspectArt() {
    const board = $('board');
    board.innerHTML = '';
    state.board.forEach((card, index) => {
      const btn = document.createElement('button');
      btn.className = `card ${card.revealed ? 'revealed' : ''} ${state.selectedIndex === index ? 'selected' : ''}`;
      btn.type = 'button';

      if (card.revealed && card.type === 'suspect' && card.suspectNumber >= 1 && card.suspectNumber <= 6) {
        const n = card.suspectNumber;
        btn.classList.add('suspect-image-card');
        btn.innerHTML = `
          <div class="suspect-art ${imagePositionClass(n)}"></div>
          <div class="suspect-overlay">
            <strong>容疑者 ${n}</strong>
            <small>${suspectNames[n]}</small>
          </div>`;
      } else if (card.revealed) {
        btn.innerHTML = `<div><span class="icon">${card.icon}</span><span class="title">${labelFor(card)}</span><span class="small">${descriptionFor(card)}</span></div>`;
      } else {
        btn.innerHTML = `<span class="face-down">?</span>`;
      }

      btn.addEventListener('click', () => selectCard(index));
      board.appendChild(btn);
    });
    updateActionButtons();
  };

  const enhanceModal = () => {
    const privateCard = document.querySelector('.private-card:not([data-suspect-enhanced])');
    if (privateCard && state.selectedIndex !== null) {
      const card = state.board[state.selectedIndex];
      if (card && card.type === 'suspect' && card.suspectNumber >= 1 && card.suspectNumber <= 6) {
        const n = card.suspectNumber;
        privateCard.dataset.suspectEnhanced = 'true';
        privateCard.classList.add('has-suspect-art');
        const art = document.createElement('div');
        art.className = `private-suspect-art ${imagePositionClass(n)}`;
        privateCard.prepend(art);
        const heading = privateCard.querySelector('h2');
        if (heading) heading.textContent = `容疑者 ${n}｜${suspectNames[n]}`;
      }
    }

    document.querySelectorAll('[data-accuse]').forEach((button) => {
      const n = Number(button.dataset.accuse);
      if (!Number.isInteger(n) || n < 1 || n > 6 || button.dataset.suspectEnhanced) return;
      button.dataset.suspectEnhanced = 'true';
      button.classList.add('suspect-choice');
      button.innerHTML = `<span class="accuse-thumb ${imagePositionClass(n)}"></span><span>容疑者 ${n}</span><span class="accuse-name">${suspectNames[n]}</span>`;
    });
  };

  const observer = new MutationObserver(enhanceModal);
  observer.observe($('modalContent'), { childList: true, subtree: true });

  if ($('board').children.length) renderBoard();
})();
