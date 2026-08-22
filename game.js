const $ = (id) => document.getElementById(id);

const DIRS = {
  up: { dr: -1, dc: 0, mark: '↑' },
  upRight: { dr: -1, dc: 1, mark: '↗' },
  right: { dr: 0, dc: 1, mark: '→' },
  downRight: { dr: 1, dc: 1, mark: '↘' },
  down: { dr: 1, dc: 0, mark: '↓' },
  downLeft: { dr: 1, dc: -1, mark: '↙' },
  left: { dr: 0, dc: -1, mark: '←' },
  upLeft: { dr: -1, dc: -1, mark: '↖' },
};

const ALL_8_DIRS = Object.keys(DIRS);
const CARDINAL_DIRS = ['up', 'right', 'down', 'left'];

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
  pawnIndex: [],
  selectedIndex: null,
  culprit: null,
  culpritDetails: null,
  closeAction: null,
  gameWinner: -1,
};

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeCard(type, directions = [], extra = {}) {
  return { type, icon: ICONS[type], directions: [...directions], revealed: false, ...extra };
}

function buildDeck() {
  const deck = [];
  for (let n = 1; n <= 6; n++) deck.push(makeCard('suspect', [], { suspectNumber: n }));
  deck.push(
    makeCard('weapon', ALL_8_DIRS, { variant: 'weapon-1' }),
    makeCard('weapon', ALL_8_DIRS, { variant: 'weapon-2' }),
    makeCard('clue', [], { variant: 'clue-1' }),
    makeCard('clue', [], { variant: 'clue-2' }),
    makeCard('motive', CARDINAL_DIRS, { variant: 'motive-1' }),
    makeCard('motive', CARDINAL_DIRS, { variant: 'motive-2' }),
    makeCard('alibi', ['up', 'down'], { variant: 'alibi-vertical' }),
    makeCard('alibi', ['left', 'right'], { variant: 'alibi-horizontal' }),
    makeCard('falseTestimony', [], { variant: 'false-base' }),
  );
  const specials = [
    makeCard('falseTestimony', [], { special: true, variant: 'false-special' }),
    makeCard('suspect', [], { suspectNumber: 7, special: true }),
    makeCard('twist', [], { special: true }),
  ];
  deck.push(shuffle(specials)[0]);
  return shuffle(deck).map((card, index) => ({ ...card, index, row: Math.floor(index / 4), col: index % 4 }));
}

function isAdjacent8(a, b) {
  return Math.max(Math.abs(a.row - b.row), Math.abs(a.col - b.col)) === 1;
}

function isOrthogonallyAdjacent(a, b) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col) === 1;
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
  return board.some((other) => other.type === 'falseTestimony' && isOrthogonallyAdjacent(card, other));
}

function isWeaponActive(weapon, board) {
  return board.some((card) => card.type === 'clue' && isAdjacent8(weapon, card));
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
  const candidates = evaluated.filter((x) => x.hasMotive && !x.hasAlibi && x.weaponPoints).map((x) => x.suspect);
  const culprit = candidates.length === 0 ? 'escape' : twist ? Math.min(...candidates) : Math.max(...candidates);
  return { culprit, candidates, evaluated, twist, activeWeapons };
}

function labelFor(card) {
  if (card.type === 'suspect') return `容疑者 ${card.suspectNumber}`;
  if (card.type === 'motive') return card.variant === 'motive-2' ? '動機 2' : '動機 1';
  if (card.type === 'alibi') return card.variant === 'alibi-horizontal' ? 'アリバイ 2' : 'アリバイ 1';
  if (card.type === 'weapon') return card.variant === 'weapon-2' ? '凶器 2' : '凶器 1';
  if (card.type === 'clue') return card.variant === 'clue-2' ? '手掛かり 2' : '手掛かり 1';
  if (card.type === 'falseTestimony') return '偽証';
  if (card.type === 'twist') return 'どんでん返し';
  return card.type;
}

function arrowsFor(card) { return card.directions.map((d) => DIRS[d].mark).join(' '); }

function descriptionFor(card) {
  if (card.type === 'suspect') return `真犯人候補（No.${card.suspectNumber}）`;
  if (card.type === 'motive') return `${arrowsFor(card)} 方向にいる容疑者に動機を与える`;
  if (card.type === 'alibi') return `${arrowsFor(card)} 方向にいる容疑者にアリバイを与える`;
  if (card.type === 'weapon') return `手掛かりが周囲8マスにあれば有効。${arrowsFor(card)} 方向の容疑者を指す`;
  if (card.type === 'clue') return '周囲8マスにある凶器を「犯行に使われた凶器」として有効にする';
  if (card.type === 'falseTestimony') return '上下左右1マスの動機・アリバイを無効化する';
  if (card.type === 'twist') return '犯人候補が複数なら、最も番号の小さい容疑者が真犯人になる';
  return '';
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  $(id).classList.add('active');
}

function pawnOwnersAt(index) {
  const owners = [];
  state.pawnIndex.forEach((pos, player) => { if (pos === index && state.answers[player] === null) owners.push(player); });
  return owners;
}

function renderBoard() {
  const board = $('board');
  board.innerHTML = '';
  state.board.forEach((card, index) => {
    const btn = document.createElement('button');
    const pawns = pawnOwnersAt(index);
    btn.className = `card ${card.revealed ? 'revealed' : ''} ${state.selectedIndex === index ? 'selected' : ''}`;
    btn.type = 'button';
    btn.innerHTML = card.revealed
      ? `<div><span class="icon">${card.icon}</span><span class="title">${labelFor(card)}</span><span class="small">${descriptionFor(card)}</span></div>`
      : `<span class="face-down">?</span>`;
    if (pawns.length) {
      const marker = document.createElement('span');
      marker.style.cssText = 'position:absolute;right:5px;top:5px;z-index:5;padding:3px 6px;border-radius:999px;background:#f1d58a;color:#111;font-size:11px;font-weight:800;box-shadow:0 2px 5px #0008';
      marker.textContent = pawns.map((p) => `P${p + 1}`).join(' ');
      btn.appendChild(marker);
    }
    btn.addEventListener('click', () => selectCard(index));
    board.appendChild(btn);
  });
  updateActionButtons();
}

function renderScores() {
  $('scores').innerHTML = state.scores.map((score, i) => {
    const answered = state.answers[i] !== null ? ' ✓犯人確保済' : '';
    const pawn = state.pawnIndex[i] !== null && state.answers[i] === null ? ` / ポーン:${state.pawnIndex[i] + 1}` : '';
    return `<div class="score-row"><span>Player ${i + 1}${answered}${pawn}</span><strong>${score}勝</strong></div>`;
  }).join('');
}

function updateHeader() {
  $('roundLabel').textContent = `Round ${state.round}`;
  $('turnLabel').textContent = `Player ${state.currentPlayer + 1}`;
  const hasPawn = state.pawnIndex[state.currentPlayer] !== null;
  $('notice').textContent = hasPawn
    ? '伏せカードへポーンを移動して秘密裏に確認すると、元いたカードが全員に公開されます。ポーンを動かさず別カードを公開することもできます。'
    : '最初の捜査では、伏せカードを選び「ポーンを置いて確認」してください。';
  $('inspectBtn').textContent = hasPawn ? 'ポーン移動して確認' : 'ポーンを置いて確認';
  $('revealBtn').textContent = 'ポーンを動かさず公開';
  renderScores();
}

function selectCard(index) {
  if (state.answers[state.currentPlayer] !== null) return;
  const card = state.board[index];
  if (card.revealed) state.selectedIndex = null;
  else {
    const occupiedByOther = state.pawnIndex.some((pos, p) => p !== state.currentPlayer && pos === index && state.answers[p] === null);
    if (occupiedByOther) return;
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
  const nextIndex = state.selectedIndex;
  const oldIndex = state.pawnIndex[state.currentPlayer];
  if (oldIndex === nextIndex) return;
  if (oldIndex !== null) state.board[oldIndex].revealed = true;
  state.pawnIndex[state.currentPlayer] = nextIndex;
  state.selectedIndex = nextIndex;
  renderBoard();
  const card = state.board[nextIndex];
  openModal(`
    <h3>Player ${state.currentPlayer + 1} だけ確認</h3>
    <p class="muted">他のプレイヤーに見えないようにしてください。</p>
    <div class="private-card"><div class="icon">${card.icon}</div><h2>${labelFor(card)}</h2><p>${descriptionFor(card)}</p></div>
    <p class="muted">確認したら閉じて次のプレイヤーへ渡してください。</p>
  `, () => { state.selectedIndex = null; advanceTurn(); });
}

function revealSelected() {
  if (state.selectedIndex === null) return;
  const index = state.selectedIndex;
  if (state.pawnIndex[state.currentPlayer] === index) return;
  state.board[index].revealed = true;
  state.selectedIndex = null;
  renderBoard();
  advanceTurn();
}

function showAccusation() {
  if (state.answers[state.currentPlayer] !== null) return;
  const choices = [1,2,3,4,5,6,7].map((n) => `<button data-accuse="${n}">容疑者 ${n}</button>`).join('');
  openModal(`<h3>犯人確保</h3><p>一度確保すると、そのラウンドの捜査には戻れません。</p><div class="accuse-grid">${choices}<button data-accuse="escape">国外逃亡</button></div>`);
  document.querySelectorAll('[data-accuse]').forEach((btn) => btn.addEventListener('click', () => submitAccusation(btn.dataset.accuse)));
}

function submitAccusation(value) {
  state.answers[state.currentPlayer] = value === 'escape' ? 'escape' : Number(value);
  state.pawnIndex[state.currentPlayer] = null;
  $('modal').classList.add('hidden');
  state.closeAction = null;
  state.selectedIndex = null;
  if (state.answers.every((a) => a !== null)) finishRound(); else advanceTurn();
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
  const revealCount = ({ 1: 8, 2: 6, 3: 4, 4: 2 })[state.playerCount];
  shuffle(state.board.map((_, i) => i)).slice(0, revealCount).forEach((i) => { state.board[i].revealed = true; });
}

function startRound() {
  state.currentPlayer = 0;
  state.answers = Array(state.playerCount).fill(null);
  state.pawnIndex = Array(state.playerCount).fill(null);
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
  state.gameWinner = -1;
  startRound();
}

function answerText(answer) { return answer === 'escape' ? '国外逃亡' : `容疑者 ${answer}`; }

function finishRound() {
  state.board.forEach((c) => c.revealed = true);
  const correctPlayers = [];
  state.answers.forEach((answer, i) => { if (answer === state.culprit) { state.scores[i] += 1; correctPlayers.push(i); } });
  state.gameWinner = state.scores.findIndex((s) => s >= 2);
  $('resultTitle').textContent = state.gameWinner >= 0 ? `Player ${state.gameWinner + 1} の勝利！` : '捜査結果';
  $('resultText').innerHTML = `真犯人は <span class="winner">${answerText(state.culprit)}</span> でした。${correctPlayers.length ? ` 正解：${correctPlayers.map((i) => `Player ${i + 1}`).join('、')}` : ' 今回は正解者なしです。'}`;
  const d = state.culpritDetails;
  const candidateText = d.candidates.length ? d.candidates.map((n) => `容疑者${n}`).join('、') : 'なし';
  const playerAnswers = state.answers.map((a, i) => `<div class="breakdown-item">Player ${i + 1}：${answerText(a)} ${a === state.culprit ? '✅' : '❌'}</div>`).join('');
  $('answerBreakdown').innerHTML = `<div class="breakdown-item"><strong>犯人候補：</strong>${candidateText}</div><div class="breakdown-item"><strong>有効な凶器：</strong>${d.activeWeapons.length}枚</div><div class="breakdown-item"><strong>どんでん返し：</strong>${d.twist ? 'あり（最小番号）' : 'なし（最大番号）'}</div>${playerAnswers}`;
  $('nextRoundBtn').textContent = state.gameWinner >= 0 ? '新しいゲーム' : '次の事件へ';
  showScreen('resultScreen');
}

function nextRound() {
  if (state.gameWinner >= 0) { showScreen('setupScreen'); return; }
  state.round += 1;
  startRound();
}

function showRules() {
  openModal(`
    <h3>ルール</h3>
    <div style="text-align:left;line-height:1.7">
      <p><strong>カード構成：</strong>基本15枚（容疑者6・凶器2・手掛かり2・動機2・アリバイ2・偽証1）に、偽証・容疑者7・どんでん返しの3枚からランダムで1枚を追加して16枚。</p>
      <p><strong>秘密捜査：</strong>伏せカードへポーンを置き、自分だけ確認。次に別の伏せカードへ移動したとき、元いたカードを全員に公開。</p>
      <p><strong>公開捜査：</strong>ポーンを動かさず、別の伏せカード1枚を全員に公開。</p>
      <p><strong>真犯人：</strong>動機あり・アリバイなし・有効な凶器に指される、の3条件。複数なら通常は最大番号、どんでん返しがあれば最小番号。該当者なしなら国外逃亡。</p>
      <p><strong>偽証：</strong>上下左右1マスの動機・アリバイを無効化。<strong>手掛かり：</strong>周囲8マスの凶器を有効化。</p>
      <p><strong>勝利：</strong>正解で1勝、2勝したプレイヤーがゲーム全体の勝者。</p>
    </div>`);
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