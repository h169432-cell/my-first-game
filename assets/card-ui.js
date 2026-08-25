// Centralized card artwork mapping for the direct-file card UI migration.
// The image files themselves will live under assets/cards/.

const CARD_IMAGES = Object.freeze({
  'suspect-1': 'assets/cards/suspect-1.jpg',
  'suspect-2': 'assets/cards/suspect-2.jpg',
  'suspect-3': 'assets/cards/suspect-3.jpg',
  'suspect-4': 'assets/cards/suspect-4.jpg',
  'suspect-5': 'assets/cards/suspect-5.jpg',
  'suspect-6': 'assets/cards/suspect-6.jpg',
  'suspect-7': 'assets/cards/suspect-7.jpg',
  motive: 'assets/cards/motive.jpg',
  clue: 'assets/cards/clue.jpg',
  weapon: 'assets/cards/weapon.jpg',
  'false-testimony': 'assets/cards/false-testimony.jpg',
  'alibi-vertical': 'assets/cards/alibi-vertical.jpg',
  'alibi-horizontal': 'assets/cards/alibi-horizontal.jpg',
  twist: 'assets/cards/twist.jpg',
});

const SUSPECT_NAMES = Object.freeze({
  1: 'ファン・ゴッホ',
  2: 'レオナルド・ダ・ヴィンチ',
  3: 'フェルメール',
  4: '織田信長',
  5: 'ラファエロ',
  6: 'モネ',
  7: 'ヤン・ファン・エイク',
});

function cardImageKey(card) {
  if (!card) return null;
  if (card.type === 'suspect') return `suspect-${card.suspectNumber}`;
  if (card.type === 'falseTestimony') return 'false-testimony';
  if (card.type === 'alibi') return card.variant;
  return card.type;
}

function cardImageUrl(card) {
  return CARD_IMAGES[cardImageKey(card)] || null;
}

function cardImageAlt(card) {
  if (!card) return '';
  if (card.type === 'suspect') {
    const name = SUSPECT_NAMES[card.suspectNumber];
    return name ? `容疑者 ${card.suspectNumber} ${name}` : `容疑者 ${card.suspectNumber}`;
  }
  return typeof labelFor === 'function' ? labelFor(card) : cardImageKey(card) || '';
}

function createCardImage(card, className = '') {
  const src = cardImageUrl(card);
  if (!src) return null;

  const image = document.createElement('img');
  image.src = src;
  image.alt = cardImageAlt(card);
  if (className) image.className = className;
  image.loading = 'eager';
  image.decoding = 'async';
  image.addEventListener('error', () => image.remove(), { once: true });
  return image;
}

function prependCardImage(container, card, className = '') {
  if (!container) return false;
  const image = createCardImage(card, className);
  if (!image) return false;
  container.prepend(image);
  return true;
}

function preloadCardImages() {
  Object.values(CARD_IMAGES).forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}

window.CardUI = Object.freeze({
  CARD_IMAGES,
  SUSPECT_NAMES,
  cardImageKey,
  cardImageUrl,
  cardImageAlt,
  createCardImage,
  prependCardImage,
  preloadCardImages,
});
