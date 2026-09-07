import { CARDS, cardFace } from './assets/card-ui.js?v=20260907-suspect2';

const BASE = [1, 2, 3, 4, 5, 6].map(n => `suspect-${n}`).concat(
  'motive', 'motive', 'clue', 'clue', 'weapon', 'weapon',
  'alibi-vertical', 'alibi-horizontal', 'false-testimony');
const EXTRAS = ['false-testimony', 'suspect-7', 'twist'];
export function shuffle(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
export function makeDeck(random = Math.random) {
  return shuffle([...BASE, EXTRAS[Math.floor(random() * 3)]], random);
}
const row = i => Math.floor(i / 4);
const col = i => i % 4;
export function adjacent(a, b, diagonal = false) {
  const dr = Math.abs(row(a) - row(b)), dc = Math.abs(col(a) - col(b));
  return a !== b && (diagonal ? Math.max(dr, dc) === 1 : dr + dc === 1);
}
export function reaches(a, b, kind) {
  if (a === b) return false;
  const dr = Math.abs(row(a) - row(b)), dc = Math.abs(col(a) - col(b));
  if (kind === 'alibi-vertical') return dc === 0;
  if (kind === 'alibi-horizontal') return dr === 0;
  return dr === 0 || dc === 0 || (kind === 'weapon' && dr === dc);
}
export function solve(board) {
  const positions = kind => board.flatMap((key, i) => key === kind ? [i] : []);
  const falsehoods = positions('false-testimony');
  const disabled = board.flatMap((key, i) =>
    (key === 'motive' || key.startsWith('alibi-')) && falsehoods.some(j => adjacent(i, j)) ? [i] : []);
  const motives = positions('motive').filter(i => !disabled.includes(i));
  const alibis = [...positions('alibi-vertical'), ...positions('alibi-horizontal')].filter(i => !disabled.includes(i));
  const clues = positions('clue');
  const weapons = positions('weapon').filter(i => clues.some(j => adjacent(i, j, true)));
  const suspects = board.flatMap((key, i) => {
    if (!CARDS[key]?.number) return [];
    const motive = motives.filter(j => reaches(j, i, 'motive'));
    const alibi = alibis.filter(j => reaches(j, i, board[j]));
    const weapon = weapons.filter(j => reaches(j, i, 'weapon'));
    return [{ key, position: i, number: CARDS[key].number, motive, alibi, weapon,
      candidate: !!motive.length && !alibi.length && !!weapon.length }];
  }).sort((a, b) => a.number - b.number);
  const candidates = suspects.filter(s => s.candidate);
  const twist = board.includes('twist');
  const culprit = candidates.length ? (twist ? candidates[0] : candidates.at(-1)).key : 'escape';
  return { culprit, candidates, suspects, disabled, weapons, twist };
}
export function newMatch(count, random = Math.random) {
  if (!Number.isInteger(count) || count < 1 || count > 4) throw Error('人数は1〜4人です');
  return newRound({ round: 0, players: Array.from({ length: count }, (_, i) => ({ id: i, wins: 0 })) }, random);
}
export function newRound(previous, random = Math.random) {
  if (previous.players.some(p => p.wins >= 2)) throw Error('ゲームは終了しました');
  return { round: previous.round + 1, board: makeDeck(random),
    revealed: new Set(shuffle(Array.from({ length: 16 }, (_, i) => i), random).slice(0, 10 - previous.players.length * 2)),
    players: previous.players.map(p => ({ id: p.id, wins: p.wins, pawn: null, accusation: null })),
    current: 0, phase: 'investigation', result: null };
}
export function advance(state) {
  for (let n = 1; n <= state.players.length; n++) {
    const next = (state.current + n) % state.players.length;
    if (state.players[next].accusation === null) { state.current = next; return; }
  }
}
function activePlayer(state) {
  if (state.phase !== 'investigation') throw Error('捜査は終了しています');
  const player = state.players[state.current];
  if (player.accusation !== null) throw Error('確保済みです');
  return player;
}
export function investigate(state, position, mode) {
  const player = activePlayer(state);
  if (!Number.isInteger(position) || position < 0 || position > 15 || state.revealed.has(position)) throw Error('伏せカードを選んでください');
  if (mode === 'private') {
    if (player.pawn === position) throw Error('別の伏せカードを選んでください');
    if (player.pawn !== null) state.revealed.add(player.pawn);
    player.pawn = position;
    // The UI advances only after the secret card has been hidden.
    return state.board[position];
  }
  if (mode !== 'public') throw Error('不明な操作です');
  state.revealed.add(position); advance(state);
}
export function accuse(state, key) {
  const player = activePlayer(state);
  if (key !== 'escape' && !CARDS[key]?.number) throw Error('容疑者を選んでください');
  player.accusation = key;
  if (state.players.every(p => p.accusation !== null)) {
    state.result = solve(state.board);
    for (const p of state.players) if (p.accusation === state.result.culprit) p.wins++;
    state.revealed = new Set(Array.from({ length: 16 }, (_, i) => i));
    state.phase = state.players.some(p => p.wins >= 2) ? 'finished' : 'result';
  } else advance(state);
}

// Browser controller: the model above is DOM-free and is also used by the tests.
if (typeof document !== 'undefined') {
  const $ = id => document.getElementById(id);
  const colors = ['#e6af55', '#66bce6', '#d686b7', '#87c99a'];
  const labels = ['琥珀', '青', '紫', '緑'];
  document.querySelector('.title-portraits').replaceChildren(...['suspect-1', 'suspect-4', 'suspect-3'].map(cardFace));
  let state = null, selected = null, choice = null, onClose = null;
  const playerName = p => `プレイヤー${p.id + 1}`;
  const cardName = key => key === 'escape' ? '国外逃亡' : CARDS[key].name;
  const cellName = i => `${row(i) + 1}行${col(i) + 1}列`;
  function show(screen) {
    for (const id of ['title-screen', 'game-screen']) $(id).hidden = id !== screen;
  }
  function dialog(title, content, closeText = '閉じる', callback = null) {
    $('dialog-title').textContent = title; $('dialog-content').replaceChildren(content);
    $('dialog-close').textContent = closeText; onClose = callback; $('modal').showModal();
  }
  function closeDialog() {
    const callback = onClose; onClose = null;
    $('modal').close(); $('dialog-content').replaceChildren();
    if (callback) callback();
  }
  $('dialog-close').onclick = closeDialog;
  $('modal').addEventListener('cancel', e => { e.preventDefault(); closeDialog(); });
  function textNode(tag, text, className = '') {
    const node = document.createElement(tag); node.textContent = text; node.className = className; return node;
  }
  function button(text, action, className = '') {
    const node = textNode('button', text, className); node.type = 'button'; node.onclick = action; return node;
  }
  function render() {
    const done = state.phase !== 'investigation';
    $('round').textContent = `事件 ${String(state.round).padStart(2, '0')}`;
    $('turn').textContent = done ? (state.phase === 'finished' ? 'ゲーム終了' : '事件解決') : `${playerName(state.players[state.current])}の捜査`;
    $('turn').style.color = done ? '' : colors[state.current];
    $('reveal-count').textContent = `公開 ${state.revealed.size} / 16`;
    $('board').replaceChildren();
    state.board.forEach((key, i) => {
      const revealed = state.revealed.has(i);
      const card = button('', () => { selected = i; render(); }, 'board-card');
      card.setAttribute('aria-label', `${cellName(i)}・${revealed ? cardName(key) : '伏せカード'}`);
      card.setAttribute('aria-pressed', String(selected === i));
      card.classList.toggle('selected', selected === i); card.disabled = done;
      if (revealed) card.append(cardFace(key));
      else { card.classList.add('face-down'); card.append(textNode('span', '？', 'back-mark'), textNode('span', `${row(i) + 1}−${col(i) + 1}`, 'coordinate')); }
      const pawns = document.createElement('span'); pawns.className = 'pawns';
      for (const p of state.players.filter(p => p.pawn === i)) {
        const pawn = textNode('span', `♟${p.id + 1}`, 'pawn'); pawn.style.background = colors[p.id];
        pawn.setAttribute('aria-label', `${playerName(p)}のポーン`); pawns.append(pawn);
      }
      card.append(pawns); $('board').append(card);
    });
    $('scores').replaceChildren();
    for (const p of state.players) {
      const line = textNode('li', `${playerName(p)}（${labels[p.id]}）`, 'score');
      line.style.borderLeftColor = colors[p.id];
      line.append(textNode('span', `${p.wins}勝${p.accusation !== null && !done ? ' · 確保済み' : ''}`)); $('scores').append(line);
    }
    $('actions').hidden = done; $('results').hidden = !done;
    $('selection').textContent = selected === null ? '伏せカードを選んでください' : `${cellName(selected)}を選択中`;
    const hidden = selected !== null && !state.revealed.has(selected);
    $('inspect').disabled = !hidden || selected === state.players[state.current].pawn;
    $('reveal').disabled = !hidden;
    if (done) renderResult();
  }
  function startRound() { selected = null; show('game-screen'); render(); }
  $('start').onclick = () => { state = newMatch(Number($('players').value)); startRound(); };
  $('inspect').onclick = () => {
    const who = playerName(state.players[state.current]);
    const key = investigate(state, selected, 'private');
    selected = null; render();
    const content = document.createElement('div');
    content.append(textNode('p', `${who}だけが画面を見てください。`));
    const reveal = button('カードを見る', () => {
      content.replaceChildren(cardFace(key)); content.className = 'secret-card';
    }, 'primary');
    content.append(reveal);
    dialog(`${who}の秘密確認`, content, '閉じる・次の手番へ', () => { advance(state); render(); });
  };
  $('reveal').onclick = () => { investigate(state, selected, 'public'); selected = null; render(); };
  $('accuse').onclick = () => {
    choice = null;
    const content = document.createElement('div');
    const grid = document.createElement('div'); grid.className = 'suspect-grid';
    const confirm = button('選択して確保', () => { if (choice === null) return; accuse(state, choice); closeDialog(); selected = null; render(); }, 'primary');
    confirm.disabled = true;
    // Fixed roster avoids leaking whether the hidden extra card is suspect 7.
    for (const key of [...Object.keys(CARDS).filter(key => CARDS[key].number), 'escape']) {
      const item = button('', () => {
        choice = key; confirm.disabled = false;
        for (const child of grid.children) { child.classList.toggle('selected', child === item); child.setAttribute('aria-pressed', String(child === item)); }
      }, 'suspect-choice');
      item.setAttribute('aria-label', cardName(key)); item.setAttribute('aria-pressed', 'false');
      if (key !== 'escape') item.append(cardFace(key));
      item.append(textNode('span', cardName(key))); grid.append(item);
    }
    content.append(textNode('p', '回答は全員が確保した後に発表します。この事件の捜査は終了します。'), grid, confirm);
    dialog(`${playerName(state.players[state.current])}の犯人確保`, content, '捜査に戻る');
  };
  function renderResult() {
    const result = state.result;
    $('actual').textContent = cardName(result.culprit);
    $('actual-card').replaceChildren();
    if (result.culprit !== 'escape') $('actual-card').append(cardFace(result.culprit));
    $('answers').replaceChildren(...state.players.map(p => textNode('li',
      `${playerName(p)}：${p.accusation === result.culprit ? '正解 ＋1勝' : '不正解'}（${cardName(p.accusation)}）`)));
    $('reason').textContent = !result.candidates.length ? '動機あり・アリバイなし・有効な凶器の3条件をすべて満たす容疑者がいないため、国外逃亡です。'
      : result.candidates.length === 1 ? '3条件をすべて満たす容疑者は、この1人だけです。'
      : `候補は${result.candidates.map(s => s.number).join('・')}番。${result.twist ? 'どんでん返しがあるため最小' : '通常ルールにより最大'}番号が犯人です。`;
    $('evidence').replaceChildren(...result.suspects.map(s => textNode('li',
      `${s.number}番：動機${s.motive.length ? 'あり' : 'なし'}／アリバイ${s.alibi.length ? 'あり' : 'なし'}／有効な凶器${s.weapon.length ? 'あり' : 'なし'}${s.candidate ? ' → 候補' : ''}`)));
    $('disabled-evidence').textContent = `偽証で無効：${result.disabled.length ? result.disabled.map(i => `${cellName(i)}の${cardName(state.board[i])}`).join('、') : 'なし'}。有効な凶器：${result.weapons.length ? result.weapons.map(cellName).join('、') : 'なし'}。`;
    const winners = state.players.filter(p => p.wins >= 2);
    $('winner').textContent = winners.length === 1 ? `${playerName(winners[0])}の優勝` : winners.length > 1 ? `${winners.map(playerName).join('・')}が同時に2勝達成` : '';
    $('next').hidden = state.phase === 'finished';
  }
  $('next').onclick = () => { state = newRound(state); startRound(); };
  $('to-title').onclick = () => { state = null; show('title-screen'); };
  for (const control of document.querySelectorAll('[data-rules]')) control.onclick = () => {
    dialog('捜査の手引き', $('rules-content').content.cloneNode(true));
  };
}
