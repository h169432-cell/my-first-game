(() => {
  // Clueverge base-game card effects, reconstructed from the creator's
  // published explanation plus photographs of the physical components.
  const ALL_8_DIRS = ['up','upRight','right','downRight','down','downLeft','left','upLeft'];
  const CARDINAL_DIRS = ['up','right','down','left'];

  // The original prototype only knew the four cardinal directions.
  // Weapon cards in the physical game also point diagonally.
  Object.assign(DIRS, {
    upRight: { dr: -1, dc: 1, mark: '↗' },
    downRight: { dr: 1, dc: 1, mark: '↘' },
    downLeft: { dr: 1, dc: -1, mark: '↙' },
    upLeft: { dr: -1, dc: -1, mark: '↖' },
  });

  function fixedCard(type, directions = [], extra = {}) {
    return {
      type,
      icon: ICONS[type],
      directions: [...directions],
      revealed: false,
      ...extra,
    };
  }

  // Physical base-game component pattern:
  // - Motive x2: ↑→↓←
  // - Weapon x2: eight directions, including diagonals
  // - Alibi x1 vertical, x1 horizontal
  // - Clue x2: eight surrounding spaces (red dots)
  // - False testimony x1: four orthogonally adjacent spaces (green dots)
  buildDeck = function buildAuthenticDeck() {
    const deck = [];
    for (let n = 1; n <= 6; n++) {
      deck.push(fixedCard('suspect', [], { suspectNumber: n }));
    }

    deck.push(
      fixedCard('weapon', ALL_8_DIRS, { variant: 'weapon-1' }),
      fixedCard('weapon', ALL_8_DIRS, { variant: 'weapon-2' }),
      fixedCard('clue', [], { variant: 'clue-1' }),
      fixedCard('clue', [], { variant: 'clue-2' }),
      fixedCard('motive', CARDINAL_DIRS, { variant: 'motive-1' }),
      fixedCard('motive', CARDINAL_DIRS, { variant: 'motive-2' }),
      fixedCard('alibi', ['up', 'down'], { variant: 'alibi-vertical' }),
      fixedCard('alibi', ['left', 'right'], { variant: 'alibi-horizontal' }),
      fixedCard('falseTestimony', [], { variant: 'false-base' }),
    );

    const special = Math.floor(Math.random() * 3);
    if (special === 0) deck.push(fixedCard('suspect', [], { suspectNumber: 7, special: true }));
    if (special === 1) deck.push(fixedCard('falseTestimony', [], { special: true, variant: 'false-special' }));
    if (special === 2) deck.push(fixedCard('twist', [], { special: true }));

    return shuffle(deck).map((card, index) => ({
      ...card,
      index,
      row: Math.floor(index / 4),
      col: index % 4,
    }));
  };

  const isOrthogonallyAdjacent = (a, b) =>
    Math.abs(a.row - b.row) + Math.abs(a.col - b.col) === 1;

  // The false-testimony card has four green range dots: up/down/left/right.
  isDisabledByFalseTestimony = function authenticFalseTestimonyRange(card, board) {
    if (!['motive', 'alibi'].includes(card.type)) return false;
    return board.some(
      (other) => other.type === 'falseTestimony' && isOrthogonallyAdjacent(card, other)
    );
  };

  // Clue keeps the original 8-neighbour range. The physical card has 8 red dots.
  isWeaponActive = function authenticClueRange(weapon, board) {
    return board.some(
      (card) => card.type === 'clue' && isAdjacent(weapon, card)
    );
  };

  labelFor = function authenticLabel(card) {
    if (card.type === 'suspect') return `容疑者 ${card.suspectNumber}`;
    if (card.type === 'motive') return '動機';
    if (card.type === 'alibi') {
      if (card.variant === 'alibi-vertical') return 'アリバイ（縦）';
      if (card.variant === 'alibi-horizontal') return 'アリバイ（横）';
      return 'アリバイ';
    }
    if (card.type === 'weapon') return '凶器';
    if (card.type === 'clue') return '手掛かり';
    if (card.type === 'falseTestimony') return '偽証';
    if (card.type === 'twist') return 'どんでん返し';
    return card.type;
  };

  descriptionFor = function authenticDescription(card) {
    if (card.type === 'suspect') return `犯人候補となる人物（No.${card.suspectNumber}）`;
    if (card.type === 'motive') return '↑ → ↓ ← の直線上にいる全ての容疑者に「動機」がある';
    if (card.type === 'alibi') {
      return `${arrowsFor(card)} の直線上にいる全ての容疑者には「アリバイ」がある`;
    }
    if (card.type === 'weapon') return '手掛かりの周囲1マスにある時だけ有効。8方向の直線上を指す';
    if (card.type === 'clue') return '周囲8マスにある凶器を「犯行に使われた凶器」にする';
    if (card.type === 'falseTestimony') return '上下左右1マスにある「動機」「アリバイ」を無効化する';
    if (card.type === 'twist') return '犯人候補が複数なら、最も番号が小さい容疑者が真犯人になる';
    return '';
  };

  const suspectNames = {
    1: 'Leon S. Kennedy',
    2: 'クレア・レッドフィールド',
    3: 'ジル・バレンタイン',
    4: 'クリス・レッドフィールド',
    5: 'エイダ・ウォン',
    6: 'アルバート・ウェスカー',
  };

  const evidenceSpritePosition = {
    'motive-1': '0% 0%',
    'motive-2': '50% 0%',
    'alibi-vertical': '100% 0%',
    'alibi-horizontal': '0% 50%',
    'weapon-1': '50% 50%',
    'weapon-2': '100% 50%',
    'clue-1': '0% 100%',
    'clue-2': '50% 100%',
    'false-base': '100% 100%',
    'false-special': '100% 100%',
  };

  const typeTheme = {
    motive: 'motive-theme',
    alibi: 'alibi-theme',
    weapon: 'weapon-theme',
    clue: 'clue-theme',
    falseTestimony: 'false-theme',
  };

  function effectShort(card) {
    if (card.type === 'motive') return '矢印方向の容疑者に動機を与える';
    if (card.type === 'alibi') return '矢印方向の容疑者にアリバイを与える';
    if (card.type === 'weapon') return '手掛かりに隣接時、8方向の容疑者を指す';
    if (card.type === 'clue') return '周囲8マスの凶器を有効化';
    if (card.type === 'falseTestimony') return '上下左右1マスの動機・アリバイを無効化';
    return descriptionFor(card);
  }

  function arrowMarkup(card) {
    if (!card.directions || !card.directions.length) return '';
    return `<div class="evidence-arrows">${card.directions.map((dir) =>
      `<span class="e-arrow e-${dir}" aria-hidden="true">${DIRS[dir].mark}</span>`
    ).join('')}</div>`;
  }

  function markerMarkup(card) {
    if (card.type === 'clue') {
      return `<div class="range-markers clue-markers">${ALL_8_DIRS.map((d) => `<i class="m-${d}"></i>`).join('')}</div>`;
    }
    if (card.type === 'falseTestimony') {
      return `<div class="range-markers false-markers">${CARDINAL_DIRS.map((d) => `<i class="m-${d}"></i>`).join('')}</div>`;
    }
    return '';
  }

  function evidenceMarkup(card, large = false) {
    const pos = evidenceSpritePosition[card.variant] || evidenceSpritePosition['false-base'];
    return `
      <div class="evidence-visual ${typeTheme[card.type] || ''} ${large ? 'evidence-large' : ''}" style="--evidence-pos:${pos}">
        <div class="evidence-art-bg"></div>
        ${arrowMarkup(card)}
        ${markerMarkup(card)}
        <div class="evidence-effect">
          <strong>${labelFor(card)}</strong>
          <span>${effectShort(card)}</span>
        </div>
      </div>`;
  }

  const style = document.createElement('style');
  style.textContent = `
    .card.evidence-image-card{padding:0;overflow:hidden;background:#080a0d;border-color:#725d38;color:#fff}
    .evidence-visual{position:absolute;inset:0;overflow:hidden;background:#090b0f;color:#fff}
    .evidence-art-bg{position:absolute;left:0;right:0;top:0;height:68%;background-image:url("assets/evidence-art-sprite.webp");background-size:300% 300%;background-position:var(--evidence-pos);background-repeat:no-repeat;filter:saturate(1.02) contrast(1.05);}
    .evidence-art-bg:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,transparent 45%,rgba(0,0,0,.13) 70%,rgba(0,0,0,.85) 100%)}
    .evidence-effect{position:absolute;z-index:4;left:5px;right:5px;bottom:5px;min-height:30%;border:1px solid rgba(215,190,138,.35);border-radius:7px;background:rgba(7,8,10,.90);padding:5px 6px;display:flex;flex-direction:column;justify-content:center;gap:3px;text-align:center;line-height:1.17}
    .evidence-effect strong{font-size:clamp(.69rem,1.25vw,.92rem);color:#f4e2b5}.evidence-effect span{font-size:clamp(.48rem,.82vw,.65rem);color:#f4f4ef}
    .motive-theme{--accent:#d65a4a}.alibi-theme{--accent:#6caaf2}.weapon-theme{--accent:#e58c4a}.clue-theme{--accent:#d85adf}.false-theme{--accent:#72b88b}
    .card.evidence-image-card{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent,#a68b56) 45%,transparent)}
    .evidence-arrows{position:absolute;z-index:3;inset:4% 5% 31%;pointer-events:none;text-shadow:0 2px 8px #000,0 0 9px var(--accent,#fff)}
    .e-arrow{position:absolute;font-weight:1000;font-size:clamp(1.05rem,2.7vw,2rem);line-height:1;color:#fff;-webkit-text-stroke:1px rgba(0,0,0,.65)}
    .e-up{left:50%;top:3%;transform:translateX(-50%)}.e-down{left:50%;bottom:1%;transform:translateX(-50%)}.e-left{left:3%;top:50%;transform:translateY(-50%)}.e-right{right:3%;top:50%;transform:translateY(-50%)}
    .e-upLeft{left:5%;top:7%}.e-upRight{right:5%;top:7%}.e-downLeft{left:5%;bottom:4%}.e-downRight{right:5%;bottom:4%}
    .range-markers{position:absolute;z-index:3;inset:5% 5% 31%;pointer-events:none}.range-markers i{position:absolute;width:10px;height:10px;border-radius:50%;background:#fff;border:2px solid var(--accent,#fff);box-shadow:0 0 8px var(--accent,#fff)}
    .m-up{left:50%;top:2%;transform:translateX(-50%)}.m-down{left:50%;bottom:2%;transform:translateX(-50%)}.m-left{left:2%;top:50%;transform:translateY(-50%)}.m-right{right:2%;top:50%;transform:translateY(-50%)}
    .m-upLeft{left:3%;top:4%}.m-upRight{right:3%;top:4%}.m-downLeft{left:3%;bottom:4%}.m-downRight{right:3%;bottom:4%}
    .clue-markers i{--accent:#e06363}.false-markers i{--accent:#78c98f}
    .private-card.evidence-private{max-width:390px;padding:14px;background:#11151d;color:#f5f1e7}.private-card.evidence-private>.icon{display:none}.private-card.evidence-private h2{margin:.7rem 0 .35rem}.private-card.evidence-private p{line-height:1.55}
    .evidence-large{position:relative;inset:auto;width:min(310px,100%);aspect-ratio:3/4;margin:0 auto;border-radius:14px;border:1px solid #806a43;box-shadow:0 10px 30px rgba(0,0,0,.4)}
    .evidence-large .evidence-effect{min-height:27%;padding:9px}.evidence-large .evidence-effect strong{font-size:1.15rem}.evidence-large .evidence-effect span{font-size:.78rem}.evidence-large .e-arrow{font-size:2.2rem}.evidence-large .range-markers i{width:14px;height:14px}
    @media(max-width:640px){.evidence-effect{left:3px;right:3px;bottom:3px;padding:3px}.evidence-effect span{font-size:.46rem}.evidence-effect strong{font-size:.66rem}.range-markers i{width:7px;height:7px;border-width:1px}}
  `;
  document.head.appendChild(style);

  renderBoard = function renderBoardAuthentic() {
    const board = $('board');
    board.innerHTML = '';
    state.board.forEach((card, index) => {
      const btn = document.createElement('button');
      btn.className = `card ${card.revealed ? 'revealed' : ''} ${state.selectedIndex === index ? 'selected' : ''}`;
      btn.type = 'button';

      if (!card.revealed) {
        btn.innerHTML = `<span class="face-down">?</span>`;
      } else if (card.type === 'suspect' && card.suspectNumber >= 1 && card.suspectNumber <= 6) {
        const n = card.suspectNumber;
        btn.classList.add('suspect-image-card');
        btn.innerHTML = `
          <div class="suspect-art suspect-art-${n}"></div>
          <div class="suspect-overlay"><strong>容疑者 ${n}</strong><small>${suspectNames[n]}</small></div>`;
      } else if (['motive','alibi','weapon','clue','falseTestimony'].includes(card.type)) {
        btn.classList.add('evidence-image-card');
        btn.innerHTML = evidenceMarkup(card);
      } else {
        btn.innerHTML = `<div><span class="icon">${card.icon}</span><span class="title">${labelFor(card)}</span><span class="small">${descriptionFor(card)}</span></div>`;
      }

      btn.addEventListener('click', () => selectCard(index));
      board.appendChild(btn);
    });
    updateActionButtons();
  };

  const previousInspectSelected = inspectSelected;
  inspectSelected = function inspectSelectedAuthentic() {
    if (state.selectedIndex === null) return;
    const card = state.board[state.selectedIndex];
    if (!['motive','alibi','weapon','clue','falseTestimony'].includes(card.type)) {
      return previousInspectSelected();
    }

    openModal(`
      <h3>Player ${state.currentPlayer + 1} だけ確認</h3>
      <p class="muted">他のプレイヤーに見えないようにしてください。</p>
      <div class="private-card evidence-private">
        ${evidenceMarkup(card, true)}
        <h2>${labelFor(card)}</h2>
        <p>${descriptionFor(card)}</p>
      </div>
      <p class="muted">確認したら閉じて次のプレイヤーに渡してください。</p>
    `, () => {
      state.selectedIndex = null;
      advanceTurn();
    });
  };

  // Solo setup in the published rule uses the 2-player case-card setup: 8 cards face-up.
  // Multiplayer still uses a case-card pattern; until all five case patterns are digitised,
  // this prototype keeps random positions but uses a closer face-up count.
  initialReveal = function initialRevealCloserToOriginal() {
    const revealCount = ({ 1: 8, 2: 8, 3: 6, 4: 4 })[state.playerCount] || 4;
    const specialIndex = state.board.findIndex((card) => card.special);
    let candidates = state.board.map((_, i) => i).filter((i) => i !== specialIndex);
    candidates = shuffle(candidates);
    candidates.slice(0, revealCount).forEach((i) => { state.board[i].revealed = true; });
  };

  showRules = function showAuthenticRules() {
    openModal(`
      <div class="rules">
        <h3>クルーバージュ：現在確認できた基本ルール</h3>
        <ul>
          <li><strong>動機：</strong>↑ → ↓ ← の直線上にいる全容疑者に動機。距離制限なし。</li>
          <li><strong>アリバイ：</strong>「縦」と「横」の2枚。矢印の直線上にいる容疑者は犯人になれない。</li>
          <li><strong>凶器：</strong>↖ ↑ ↗ ← → ↙ ↓ ↘ の8方向。手掛かりの周囲1マスにある凶器だけが「犯行に使われた凶器」になる。</li>
          <li><strong>手掛かり：</strong>周囲8マスが効果範囲。</li>
          <li><strong>偽証：</strong>上下左右1マスの動機・アリバイを無効化。</li>
          <li><strong>真犯人：</strong>「動機あり」「アリバイなし」「有効な凶器に指される」の3条件を満たす。</li>
          <li>候補が複数なら通常は最大番号。「どんでん返し」があれば最小番号。</li>
          <li>候補が0人なら「国外逃亡」。</li>
        </ul>
        <p class="muted">カードの矢印・丸マーカーは実物コンポーネント写真に合わせて修正済みです。事件カード5枚の初期公開位置パターンは、まだ完全データ化できていないため現在は近似しています。</p>
      </div>
    `);
  };

  // The original event listener calls the old function object, so rewire it.
  const rulesButton = $('showRulesBtn');
  const replacement = rulesButton.cloneNode(true);
  rulesButton.replaceWith(replacement);
  replacement.addEventListener('click', showRules);

  // inspectBtn has the same issue: replace its listener so the enhanced private card is used.
  const inspectButton = $('inspectBtn');
  const inspectReplacement = inspectButton.cloneNode(true);
  inspectButton.replaceWith(inspectReplacement);
  inspectReplacement.addEventListener('click', inspectSelected);

  // If a game is already visible when this script is hot-loaded, redraw it.
  if ($('board').children.length) renderBoard();
})();
