(() => {
  const spriteUrl='./evidence-art-sprite.webp?v=20260824-2326';
  const twistUrl='./evidence-cards-sheet.webp?v=20260824-2326';
  const style=document.createElement('style');
  style.textContent=`
    .card.evidence-image-card{padding:0;overflow:hidden;background:#08090d;border-color:#806633}.card.evidence-image-card:hover{border-color:#d1ad59}
    .evidence-art,.private-evidence-art{background-repeat:no-repeat}
    .evidence-art{position:absolute;inset:0;background-image:url("${spriteUrl}");background-size:300% 300%}
    .ev-motive-1{background-position:0% 0%}.ev-motive-2{background-position:50% 0%}
    .ev-alibi-v{background-position:100% 0%}.ev-alibi-h{background-position:0% 50%}
    .ev-weapon-1{background-position:50% 50%}.ev-weapon-2{background-position:100% 50%}
    .ev-clue-1{background-position:0% 100%}.ev-clue-2{background-position:50% 100%}.ev-false{background-position:100% 100%}
    .ev-twist{background-image:url("${twistUrl}");background-size:500% 200%;background-position:100% 100%}
    .private-card.has-evidence-art{padding:14px;background:#111722;color:#f4f0e7;max-width:330px}.private-card.has-evidence-art>.icon{display:none}
    .private-evidence-art{width:min(270px,100%);aspect-ratio:3/4;margin:0 auto 12px;border-radius:12px;border:1px solid #8e7446;box-shadow:0 8px 24px #0008;background-image:url("${spriteUrl}");background-size:300% 300%}
    .private-evidence-art.ev-twist{background-image:url("${twistUrl}");background-size:500% 200%;background-position:100% 100%}
  `;
  document.head.appendChild(style);

  function artClass(card){
    if(!card)return'';
    if(card.variant==='motive-1')return'ev-motive-1';
    if(card.variant==='motive-2')return'ev-motive-2';
    if(card.variant==='alibi-vertical')return'ev-alibi-v';
    if(card.variant==='alibi-horizontal')return'ev-alibi-h';
    if(card.variant==='weapon-1')return'ev-weapon-1';
    if(card.variant==='weapon-2')return'ev-weapon-2';
    if(card.variant==='clue-1')return'ev-clue-1';
    if(card.variant==='clue-2')return'ev-clue-2';
    if(card.type==='falseTestimony')return'ev-false';
    if(card.type==='twist')return'ev-twist';
    return'';
  }
  function decorateBoard(){
    const buttons=document.querySelectorAll('#board .card');
    state.board.forEach((card,index)=>{const cls=artClass(card),btn=buttons[index];if(!btn||!card.revealed||!cls||card.type==='suspect')return;btn.classList.add('evidence-image-card');btn.innerHTML=`<div class="evidence-art ${cls}" aria-label="${labelFor(card)}"></div>`;const pawns=pawnOwnersAt(index);if(pawns.length){const marker=document.createElement('span');marker.style.cssText='position:absolute;right:5px;top:5px;z-index:5;padding:3px 6px;border-radius:999px;background:#f1d58a;color:#111;font-size:11px;font-weight:800;box-shadow:0 2px 5px #0008';marker.textContent=pawns.map(p=>`P${p+1}`).join(' ');btn.appendChild(marker);}});
  }
  const baseRenderBoard=renderBoard;renderBoard=function(){baseRenderBoard();decorateBoard();};
  function enhanceModal(){const privateCard=document.querySelector('.private-card:not([data-evidence-art])');if(!privateCard||state.selectedIndex===null)return;const card=state.board[state.selectedIndex],cls=artClass(card);if(!cls||card.type==='suspect')return;privateCard.dataset.evidenceArt='1';privateCard.classList.add('has-evidence-art');const art=document.createElement('div');art.className=`private-evidence-art ${cls}`;privateCard.prepend(art);}
  new MutationObserver(enhanceModal).observe($('modalContent'),{childList:true,subtree:true});
})();