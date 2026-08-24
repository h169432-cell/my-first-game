(() => {
  const suspectGridUrl = './assets/suspects-latest.webp?v=20260824-2348';
  const style = document.createElement('style');
  style.textContent = `
    .card.suspect-image-card{padding:0;overflow:hidden;background:#090b0f;border-color:#806633}
    .card.suspect-image-card:hover{border-color:#d1ad59}
    .suspect-art,.private-suspect-art,.accuse-thumb{background-image:url("${suspectGridUrl}");background-repeat:no-repeat;background-size:400% 200%}
    .suspect-art{position:absolute;inset:0}
    .suspect-art-1{background-position:0% 0%}.suspect-art-2{background-position:32.1% 0%}.suspect-art-3{background-position:64.3% 0%}.suspect-art-4{background-position:96.6% 0%}
    .suspect-art-5{background-position:14.9% 95.6%}.suspect-art-6{background-position:48.2% 95.6%}.suspect-art-7{background-position:81.3% 95.6%}
    .private-card.has-suspect-art{padding:14px;background:#111722;color:#f4f0e7;max-width:330px}
    .private-card.has-suspect-art>.icon{display:none}
    .private-suspect-art{width:min(270px,100%);aspect-ratio:3/4;margin:0 auto 12px;border-radius:12px;border:1px solid #8e7446;box-shadow:0 8px 24px #0008}
    .accuse-grid button.suspect-choice{padding:5px;display:grid;gap:5px;background:#171d28;border:1px solid #39465c}
    .accuse-thumb{width:100%;aspect-ratio:3/4;border-radius:7px;display:block}
    .accuse-name{font-size:.62rem;line-height:1.15;color:#e6d4a4}
  `;
  document.head.appendChild(style);

  const cls = n => `suspect-art-${n}`;
  const names = {1:'ファン・ゴッホ',2:'レオナルド・ダ・ヴィンチ',3:'フェルメール',4:'織田信長',5:'ラファエロ',6:'モネ',7:'ヤン・ファン・エイク'};

  function decorateBoard(){
    const buttons=document.querySelectorAll('#board .card');
    state.board.forEach((card,index)=>{
      const btn=buttons[index];
      if(!btn||!card.revealed||card.type!=='suspect'||card.suspectNumber<1||card.suspectNumber>7)return;
      btn.classList.add('suspect-image-card');
      btn.innerHTML=`<div class="suspect-art ${cls(card.suspectNumber)}" aria-label="容疑者 ${card.suspectNumber} ${names[card.suspectNumber]}"></div>`;
      const pawns=pawnOwnersAt(index);
      if(pawns.length){const marker=document.createElement('span');marker.style.cssText='position:absolute;right:5px;top:5px;z-index:5;padding:3px 6px;border-radius:999px;background:#f1d58a;color:#111;font-size:11px;font-weight:800;box-shadow:0 2px 5px #0008';marker.textContent=pawns.map(p=>`P${p+1}`).join(' ');btn.appendChild(marker);}
    });
  }
  const baseRenderBoard=renderBoard;
  renderBoard=function(){baseRenderBoard();decorateBoard();};

  function enhanceModal(){
    const privateCard=document.querySelector('.private-card:not([data-suspect-art])');
    if(privateCard&&state.selectedIndex!==null){const card=state.board[state.selectedIndex];if(card?.type==='suspect'&&card.suspectNumber>=1&&card.suspectNumber<=7){privateCard.dataset.suspectArt='1';privateCard.classList.add('has-suspect-art');const art=document.createElement('div');art.className=`private-suspect-art ${cls(card.suspectNumber)}`;privateCard.prepend(art);}}
    document.querySelectorAll('[data-accuse]').forEach(button=>{const n=Number(button.dataset.accuse);if(!Number.isInteger(n)||n<1||n>7||button.dataset.suspectArt)return;button.dataset.suspectArt='1';button.classList.add('suspect-choice');button.innerHTML=`<span class="accuse-thumb ${cls(n)}"></span><span>容疑者 ${n}</span><span class="accuse-name">${names[n]}</span>`;});
  }
  new MutationObserver(enhanceModal).observe($('modalContent'),{childList:true,subtree:true});
})();