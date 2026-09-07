export const CARDS = Object.freeze({
  'suspect-1': { name: '容疑者1：ファン・ゴッホ', icon: '1', number: 1 },
  'suspect-2': { name: '容疑者2：レオナルド・ダ・ヴィンチ', icon: '2', number: 2 },
  'suspect-3': { name: '容疑者3：フェルメール', icon: '3', number: 3 },
  'suspect-4': { name: '容疑者4：織田信長', icon: '4', number: 4 },
  'suspect-5': { name: '容疑者5：ラファエロ', icon: '5', number: 5 },
  'suspect-6': { name: '容疑者6：モネ', icon: '6', number: 6 },
  'suspect-7': { name: '容疑者7：ヤン・ファン・エイク', icon: '7', number: 7 },
  motive: { name: '動機', icon: '✦', effect: '上下左右・盤面端まで' },
  clue: { name: '手がかり', icon: '⌕', effect: '周囲8マスの凶器を有効化' },
  weapon: { name: '凶器', icon: '⚔', effect: '8方向・盤面端まで' },
  'false-testimony': { name: '偽証', icon: '×', effect: '上下左右に隣接する動機・アリバイを無効化' },
  'alibi-vertical': { name: 'アリバイ（上下）', icon: '↕', effect: '上下・盤面端まで' },
  'alibi-horizontal': { name: 'アリバイ（左右）', icon: '↔', effect: '左右・盤面端まで' },
  twist: { name: 'どんでん返し', icon: '↶', effect: '複数候補なら最小番号' },
});

// The supplied suspect 2 artwork is a PNG; all other cards remain JPEG files.
export const imagePath = key => `assets/cards/${key === 'suspect-2' ? 'suspect-2.png' : `${key}.jpg`}`;

export function cardFace(key) {
  const data = CARDS[key];
  const face = document.createElement('span');
  face.className = 'card-face';
  const fallback = document.createElement('span');
  fallback.className = 'fallback';
  const icon = document.createElement('span');
  icon.className = 'card-icon'; icon.textContent = data.icon;
  const name = document.createElement('span'); name.textContent = data.number ? `容疑者${data.number}` : data.name;
  const effect = document.createElement('small'); effect.textContent = data.effect || data.name.split('：')[1];
  face.setAttribute('role', 'img'); face.setAttribute('aria-label', data.name);
  fallback.append(icon, name, effect); face.append(fallback);
  const img = document.createElement('img');
  img.alt = data.name; img.src = imagePath(key); img.draggable = false;
  img.addEventListener('load', () => { fallback.hidden = true; img.hidden = false; });
  img.addEventListener('error', () => { img.remove(); fallback.hidden = false; });
  img.hidden = true; face.append(img);
  return face;
}
