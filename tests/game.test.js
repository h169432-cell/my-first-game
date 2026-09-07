import test from 'node:test';
import assert from 'node:assert/strict';
import { makeDeck, newMatch, newRound, solve, reaches, adjacent, investigate, advance, accuse } from '../game.js';
import { CARDS, imagePath } from '../assets/card-ui.js';
import { readFileSync, existsSync } from 'node:fs';
const blank = () => Array(16).fill('twist');

test('1000 shuffled decks contain exactly the specified 15+1 cards', () => {
  const extras = new Set();
  for (let n = 0; n < 1000; n++) {
    const deck = makeDeck(); const count = key => deck.filter(k => k === key).length;
    assert.equal(deck.length, 16);
    for (let i = 1; i <= 6; i++) assert.equal(count(`suspect-${i}`), 1);
    for (const key of ['motive', 'clue', 'weapon']) assert.equal(count(key), 2);
    assert.equal(count('alibi-vertical'), 1); assert.equal(count('alibi-horizontal'), 1);
    assert.equal(count('false-testimony') - 1 + count('suspect-7') + count('twist'), 1);
    extras.add(count('twist') ? 'twist' : count('suspect-7') ? 'suspect-7' : 'false-testimony');
  }
  assert.equal(extras.size, 3);
});
test('direction rays include distant cells, diagonals only for weapons, never wrap rows', () => {
  assert.equal(reaches(0, 3, 'motive'), true);
  assert.equal(reaches(0, 12, 'motive'), true);
  assert.equal(reaches(0, 15, 'motive'), false);
  assert.equal(reaches(0, 15, 'weapon'), true);
  assert.equal(reaches(0, 14, 'weapon'), false);
  assert.equal(reaches(3, 4, 'motive'), false);
  assert.equal(reaches(0, 0, 'weapon'), false);
  assert.equal(reaches(0, 12, 'alibi-vertical'), true);
  assert.equal(reaches(0, 3, 'alibi-vertical'), false);
  assert.equal(reaches(0, 12, 'alibi-horizontal'), false);
  assert.equal(reaches(0, 3, 'alibi-horizontal'), true);
  assert.equal(adjacent(3, 4), false);
  assert.equal(adjacent(0, 5), false);
  assert.equal(adjacent(0, 5, true), true);
});
test('all three culprit conditions, diagonal clue activation and escape', () => {
  const b = blank(); b[0] = 'suspect-4'; b[3] = 'motive'; b[12] = 'weapon'; b[9] = 'clue';
  assert.equal(solve(b).culprit, 'suspect-4');
  b[9] = 'twist'; assert.equal(solve(b).culprit, 'escape');
  b[9] = 'clue'; b[1] = 'alibi-horizontal'; assert.equal(solve(b).culprit, 'escape');
  b[1] = 'alibi-vertical'; assert.equal(solve(b).culprit, 'suspect-4');
  b[4] = 'alibi-vertical'; assert.equal(solve(b).culprit, 'escape');
});
test('false testimony disables only orthogonally adjacent motive or alibi', () => {
  const b = blank(); b[0] = 'suspect-4'; b[3] = 'motive'; b[12] = 'weapon'; b[9] = 'clue';
  b[6] = 'false-testimony'; assert.equal(solve(b).culprit, 'suspect-4');
  b[7] = 'false-testimony'; assert.equal(solve(b).culprit, 'escape');
  b[7] = 'twist'; b[4] = 'alibi-vertical'; b[5] = 'false-testimony';
  assert.equal(solve(b).culprit, 'suspect-4');
  assert.deepEqual(solve(b).disabled, [4]);
});
test('multiple candidates choose maximum normally and minimum with twist', () => {
  const b = Array(16).fill('clue'); b[0] = 'suspect-1'; b[1] = 'suspect-6'; b[3] = 'motive'; b[2] = 'weapon';
  assert.equal(solve(b).culprit, 'suspect-6');
  b[15] = 'twist'; assert.equal(solve(b).culprit, 'suspect-1');
});
test('all 1–4 player modes initialize, rotate, resolve and win in two rounds', () => {
  for (let count = 1; count <= 4; count++) {
    let s = newMatch(count);
    assert.equal(s.revealed.size, 10 - 2 * count);
    for (let round = 1; round <= 2; round++) {
      const answer = solve(s.board).culprit;
      for (let p = 0; p < count; p++) {
        assert.equal(s.current, p); accuse(s, answer);
        if (p < count - 1) { assert.equal(s.result, null); assert.equal(s.phase, 'investigation'); }
      }
      assert.equal(s.revealed.size, 16);
      assert.ok(s.players.every(p => p.wins === round));
      assert.equal(s.phase, round === 1 ? 'result' : 'finished');
      if (round === 1) { s = newRound(s); assert.equal(s.round, 2); }
    }
    assert.throws(() => newRound(s));
    assert.throws(() => accuse(s, 'escape'));
  }
});
test('secret card stays hidden, moving reveals previous card, public action leaves pawn', () => {
  const s = newMatch(2); s.revealed.clear();
  assert.equal(investigate(s, 0, 'private'), s.board[0]);
  assert.equal(s.revealed.has(0), false); assert.equal(s.players[0].pawn, 0);
  assert.throws(() => investigate(s, 0, 'private'));
  advance(s); investigate(s, 4, 'private'); advance(s);
  investigate(s, 1, 'private'); assert.equal(s.revealed.has(0), true); assert.equal(s.revealed.has(1), false);
  advance(s); investigate(s, 3, 'public'); assert.equal(s.players[1].pawn, 4); assert.equal(s.revealed.has(3), true);
  assert.throws(() => investigate(s, 3, 'private'));
});
test('accused players are skipped, wrong accusations do not receive a win', () => {
  const s = newMatch(3); const answer = solve(s.board).culprit;
  const wrong = answer === 'escape' ? 'suspect-1' : 'escape';
  accuse(s, wrong); assert.equal(s.current, 1);
  advance(s); assert.equal(s.current, 2); advance(s); assert.equal(s.current, 1);
  accuse(s, answer); accuse(s, answer);
  assert.deepEqual(s.players.map(p => p.wins), [0, 1, 1]);
});
test('14 ordinary files map to all card faces; alibis differ', () => {
  assert.equal(Object.keys(CARDS).length, 14);
  for (const key of Object.keys(CARDS)) assert.ok(existsSync(new URL(`../${imagePath(key)}`, import.meta.url)));
  assert.notDeepEqual(readFileSync(new URL('../assets/cards/alibi-vertical.jpg', import.meta.url)), readFileSync(new URL('../assets/cards/alibi-horizontal.jpg', import.meta.url)));
});
