const $ = (id) => document.getElementById(id);

const DIRS = {
  up: { dr: -1, dc: 0, mark: '↑' },
  right: { dr: 0, dc: 1, mark: '→' },
  down: { dr: 1, dc: 0, mark: '↓' },
  left: { dr: 0, dc: -1, mark: '←' },
};

const ICONS = {
  suspect: '👤', motive: '🔥', alibi: '🛡️', weapon: '🔪',
  clue: '🔎', falseTestimony: '🎭', twist: '↩️'
};

const state = {
  playerCount: 1,
  round: 1,
  currentPlayer: 0,
  scores: [],
  answers: [],
  board: [],
  selectedIndex: null,
  culprit: null,
  culpritDetails: null,
  closeAction: null,
  gameWinner: null,
};

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomDirections() {
  const keys = shuffle(Object.keys(DIRS));
  const count = Math.random() < 0.55 ? 2 : 1;
  return keys.slice(0, count);
}

function makeCard(type, extra = {}) {
  const needsDirections = ['motive', 'alibi', 'weapon'].includes(type);
  return {
    type,
    icon: ICONS[type],
    directions: needsDirections ? randomDirections() : [],
    revealed: false,
    ...extra,
  };
}

function buildDeck() {
  const deck = [];
  for (let n = 1; n <= 6; n++) deck.push(makeCard('suspect', { suspectNumber: n }));
  deck.push(makeCard('weapon'), makeCard('weapon'));
  deck.push(makeCard('clue'), makeCard('clue'));
  deck.push(makeCard('motive'), makeCard('motive'));
  deck.push(makeCard('alibi'), makeCard('alibi'));
  deck.push(makeCard('falseTestimony'));

  const special = Math.floor(Math.random() * 3);
  if (special === 0) deck.push(makeCard('suspect', { suspectNumber: 7, special: true }));
  if (special === 1) deck.push(makeCard('falseTestimony', { special: true }));
  if (special === 2) deck.push(makeCard('twist', { special: true }));

  return shuffle(deck).map((card, index) => ({ ...card, index, row: Math.floor(index / 4), col: index % 4 }));
}

function isAdjacent(a, b) {
  return Math.max(Math.abs(a.row - b.row), Math.abs(a.col - b.col)) === 1;
}

function rayHits(source, target, direction) {
  const d = DIRS[direction];
  let r = source.row + d.dr;
  let c = source.col + d.dc;
  while (r >= 0 && r < 4 && c >= 0 && c < 4) {
    if (r === target.row && c === target.col) return true;
    r += d.dr;
    c += d.dc;
  }
  return false;
}

function cardHitsSuspect(card, suspect) {
  return card.directions.some((d) => rayHits(card, suspect, d));
}

function isDisabledByFalseTestimony(card, board) {
  if (!['motive', 'alibi'].includes(card.type)) return false;
  return board.some((other) => other.type === 'falseTestimony' && isAdjacent(card, other));
}

function isWeaponActive(weapon, board) {
  return board.some((card) => card.type === 'clue' && isAdjacent(weapon, card));
}

function solveCase(board) {
  const suspects = board.filter((c) => c.type === 'suspect');
  const motives = board.filter((c) => c.type === 'motive' && !isDisabledByFalseTestimony(c, board));
  const alibis = board.filter((c) => c.type === 'alibi' && !isDisabledByFalseTestimony(c, board));
  const activeWeapons = board.filter((c) => c.type === 'weapon' && isWeaponActive(c, board));
  const twist = board.some((c) => c.type === 'twist');

  const evaluated = suspects.map((suspect) => {
    const hasMotive = motives.some((card) => cardHitsSuspect(card, suspect));
    const hasAlibi = alibis.some((card) => cardHitsSuspect(card, suspect));
    const weaponPoints = activeWeapons.some((card) => cardHitsSuspect(card, suspect));
    return { suspect: suspect.suspectNumber, hasMotive, hasAlibi, weaponPoints };
  });

  const candidates = evaluated
    .filter((x) => x.hasMotive && !x.hasAlibi && x.weaponPoints)
    .map((x) => x.suspect);

  const culprit = candidates.length === 0
    ? 'escape'
    : twist ? Math.min(...candidates) : Math.max(...candidates);

  return { culprit, candidates, evaluated, twist, activeWeaponCount: activeWeapons.length };
}

function labelFor(card) {
  if (card.type === 'suspect') return `容疑者 ${card.suspectNumber}`;
  if (card.type === 'motive') return '動機';
  if (card.type === 'alibi') return 'アリバイ';
  if (card.type === 'weapon') return '凶器';
  if (card.type === 'clue') return '手掛かり';
  if (card.type === 'falseTestimony') return '偽証';
  if (card.type === 'twist') return 'どんでん返し';
  return card.type;
}

function arrowsFor(card) {
  return card.directions.map((d) => DIRS[d].mark).join(' ');
}

function descriptionFor(card) {
  if (card.type === 'suspect') return `犯人候補となる人物（No.${card.suspectNumber}）`;
  if (card.type === 'motive') return `${arrowsFor(card)} 方向の容疑者に動機を与える`;
  if (card.type === 'alibi') return `${arrowsFor(card)} 方向の容疑者にアリバイを与える`;
  if (card.type === 'weapon') return `手掛かりに隣接すると有効。${arrowsFor(card)} 方向を指す`;
  if (card.type === 'clue') return '隣接する凶器を有効にする';
  if (card.type === 'falseTestimony') return '隣接する動機・アリバイを無効にする';
  if (card.type === 'twist') return '犯人候補が複数なら最小番号が真犯人になる';
  return '';
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  $(id).classList.add('active');
}

function renderBoard() {
  const board = $('board');
  board.innerHTML = '';
  state.board.forEach((card, index) => {
    const btn = document.createElement('button');
    btn.className = `card ${card.revealed ? 'revealed' : ''} ${state.selectedIndex === index ? 'selected' : ''}`;
    btn.type = 'button';
    if (card.revealed) {
      btn.innerHTML = `<div><span class="icon">${card.icon}</span><span class="title">${labelFor(card)}</span><span class="small">${descriptionFor(card)}</span></div>`;
    } else {
      btn.innerHTML = `<span class="face-down">?</span>`;
    }
    btn.addEventListener('click', () => selectCard(index));
    board.appendChild(btn);
  });
  updateActionButtons();
}

function renderScores() {
  $('scores').innerHTML = state.scores.map((score, i) =>
    `<div class="score-row"><span>Player ${i + 1}${state.answers[i] !== null ? ' ✓回答済' : ''}</span><strong>${score}勝</strong></div>`
  ).join('');
}

function updateHeader() {
  $('roundLabel').textContent = `Round ${state.round}`;
  $('turnLabel').textContent = `Player ${state.currentPlayer + 1}`;
  $('notice').textContent = state.answers[state.currentPlayer] !== null
    ? 'このプレイヤーは回答済みです。次の未回答プレイヤーへ進みます。'
    : '伏せカードを選び、「自分だけ確認」または「全員に公開」を実行できます。';
  renderScores();
}

function selectCard(index) {
  if (state.answers[state.currentPlayer] !== null) return;
  if (state.board[index].revealed) {
    state.selectedIndex = null;
  } else {
    state.selectedIndex = state.selectedIndex === index ? null : index;
  }
  renderBoard();
}

function updateActionButtons() {
  const valid = state.selectedIndex !== null && !state.board[state.selectedIndex].revealed;
  $('inspectBtn').disabled = !valid;
  $('revealBtn').disabled = !valid;
}

function openModal(html, closeAction = null) {
  $('modalContent').innerHTML = html;
  $('modal').classList.remove('hidden');
  state.closeAction = closeAction;
}

function closeModal() {
  $('modal').classList.add('hidden');
  const action = state.closeAction;
  state.closeAction = null;
  if (action) action();
}

function inspectSelected() {
  if (state.selectedIndex === null) return;
  const card = state.board[state.selectedIndex];
  openModal(`
    <h3>Player ${state.currentPlayer + 1} だけ確認</h3>
    <p class="muted">他のプレイヤーに見えないようにしてください。</p>
    <div class="private-card">
      <div class="icon">${card.icon}</div>
      <h2>${labelFor(card)}</h2>
      <p>${descriptionFor(card)}</p>
    </div>
    <p class="muted">確認したら閉じて次のプレイヤーに渡してください。</p>
  `, () => {
    state.selectedIndex = null;
    advanceTurn();
  });
}

function revealSelected() {
  if (state.selectedIndex === null) return;
  state.board[state.selectedIndex].revealed = true;
  state.selectedIndex = null;
  renderBoard();
  advanceTurn();
}

function showAccusation() {
  if (state.answers[state.currentPlayer] !== null) return;
  const choices = [1,2,3,4,5,6,7].map((n) => `<button data-accuse="${n}">容疑者 ${n}</button>`).join('');
  openModal(`
    <h3>犯人確保</h3>
    <p>真犯人だと思う人物を選んでください。一度回答すると変更できません。</p>
    <div class="accuse-grid">${choices}<button data-accuse="escape">国外逃亡</button></div>
  `);
  document.querySelectorAll('[data-accuse]').forEach((btn) => {
    btn.addEventListener('click', () => submitAccusation(btn.dataset.accuse));
  });
}

function submitAccusation(value) {
  const answer = value === 'escape' ? 'escape' : Number(value);
  state.answers[state.currentPlayer] = answer;
  $('modal').classList.add('hidden');
  state.closeAction = null;
  state.selectedIndex = null;
  if (state.answers.every((a) => a !== null)) {
    finishRound();
  } else {
    advanceTurn();
  }
}

function advanceTurn() {
  let next = state.currentPlayer;
  for (let i = 0; i < state.playerCount; i++) {
    next = (next + 1) % state.playerCount;
    if (state.answers[next] === null) break;
  }
  state.currentPlayer = next;
  renderBoard();
  updateHeader();
}

function initialReveal() {
  const revealCount = ({1:4, 2:3, 3:2, 4:1})[state.playerCount];
  shuffle(state.board.map((_, i) => i)).slice(0, revealCount).forEach((i) => {
    state.board[i].revealed = true;
  });
}

function startRound() {
  state.currentPlayer = 0;
  state.answers = Array(state.playerCount).fill(null);
  state.selectedIndex = null;
  state.board = buildDeck();
  state.culpritDetails = solveCase(state.board);
  state.culprit = state.culpritDetails.culprit;
  initialReveal();
  showScreen('gameScreen');
  renderBoard();
  updateHeader();
}

function startGame() {
  state.playerCount = Number($('playerCount').value);
  state.round = 1;
  state.scores = Array(state.playerCount).fill(0);
  state.gameWinner = null;
  startRound();
}

function answerText(answer) {
  return answer === 'escape' ? '国外逃亡' : `容疑者 ${answer}`;
}

function finishRound() {
  state.board.forEach((c) => c.revealed = true);
  const correctPlayers = [];
  state.answers.forEach((answer, i) => {
    if (answer === state.culprit) {
      state.scores[i] += 1;
      correctPlayers.push(i);
    }
  });
  state.gameWinner = state.scores.findIndex((s) => s >= 2);

  $('resultTitle').textContent = state.gameWinner >= 0 ? `Player ${state.gameWinner + 1} の勝利！` : '捜査結果';
  $('resultText').innerHTML = `真犯人は <span class="winner">${answerText(state.culprit)}</span> でした。${correctPlayers.length ? ` 正解：${correctPlayers.map((i) => `Player ${i + 1}`).join('、')}` : ' 今回は正解者なしです。'}`;

  const d = state.culpritDetails;
  const candidateText = d.candidates.length ? d.candidates.map((n) => `容疑者${n}`).join('、') : 'なし';
  const playerAnswers = state.answers.map((a, i) => `<div class="breakdown-item">Player ${i+1}：${answerText(a)} ${a === state.culprit ? '✅' : '❌'}</div>`).join('');
  $('answerBreakdown').innerHTML = `
    <div class="breakdown-item"><strong>犯人候補：</strong>${candidateText}</div>
    <div class="breakdown-item"><strong>有効な凶器：</strong>${d.activeWeaponCount}枚</div>
    <div class="breakdown-item"><strong>どんでん返し：</strong>${d.twist ? 'あり（最小番号を採用）' : 'なし（最大番号を採用）'}</div>
    ${playerAnswers}
  `;
  $('nextRoundBtn').textContent = state.gameWinner >= 0 ? '新しいゲーム' : '次の事件へ';
  showScreen('resultScreen');
}

function nextRound() {
  if (state.gameWinner >= 0) {
    showScreen('setupScreen');
    return;
  }
  state.round += 1;
  startRound();
}

function showRules() {
  openModal(`
    <div class="rules">
      <h3>試作版ルール</h3>
      <ul>
        <li>16枚のカードが4×4にランダム配置されます。</li>
        <li>動機カードが指す容疑者には「動機」があります。</li>
        <li>アリバイカードが指す容疑者には「アリバイ」があります。</li>
        <li>手掛かりに隣接した凶器だけが有効になります。</li>
        <li>偽証に隣接した動機・アリバイは無効になります。</li>
        <li>「動機あり・アリバイなし・有効な凶器に指されている」をすべて満たす人物が犯人候補です。</li>
        <li>候補が複数なら通常は最大番号。「どんでん返し」があれば最小番号です。</li>
        <li>候補が0人なら「国外逃亡」です。</li>
        <li>手番では伏せカードを1枚だけ自分で見るか、全員に公開するか、犯人確保を行います。</li>
        <li>正解すると1勝。先に2勝したプレイヤーがゲーム全体の勝者です。</li>
      </ul>
      <p class="muted">※ 現時点で未確認のカード固有矢印と初期公開位置は、試作版ではランダム生成しています。</p>
    </div>
  `);
}

$('startGameBtn').addEventListener('click', startGame);
$('showRulesBtn').addEventListener('click', showRules);
$('inspectBtn').addEventListener('click', inspectSelected);
$('revealBtn').addEventListener('click', revealSelected);
$('accuseBtn').addEventListener('click', showAccusation);
$('closeModalBtn').addEventListener('click', closeModal);
$('nextRoundBtn').addEventListener('click', nextRound);
$('backToTitleBtn').addEventListener('click', () => showScreen('setupScreen'));
$('modal').addEventListener('click', (e) => { if (e.target === $('modal')) closeModal(); });
