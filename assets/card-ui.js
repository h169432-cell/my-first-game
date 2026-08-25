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

function ensureDirectCardStyles() {
  if (document.getElementById('direct-card-ui-styles')) return;
  const style = document.createElement('style');
  style.id = 'direct-card-ui-styles';
  style.textContent = `
    .card.direct-card-art-host{overflow:hidden}
    .direct-card-art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:2;background:#090b0f}
    .private-direct-card-art{display:block;width:min(320px,100%);height:auto;margin:0 auto 12px;border-radius:12px}
    .accuse-direct-card-art{display:block;width:100%;height:auto;aspect-ratio:3/4;object-fit:cover;border-radius:7px}
    .accuse-grid button.direct-suspect-choice{display:grid;gap:5px;align-content:start}
    .direct-suspect-name{font-size:.62rem;line-height:1.15}
  `;
  document.head.appendChild(style);
}

function decorateBoard() {
  if (typeof state === 'undefined' || !Array.isArray(state.board)) return;
  const buttons = document.querySelectorAll('#board .card');
  state.board.forEach((card, index) => {
    if (!card.revealed) return;
    const button = buttons[index];
    if (!button || button.dataset.directCardArt === '1') return;
    button.dataset.directCardArt = '1';
    button.classList.add('direct-card-art-host');
    prependCardImage(button, card, 'direct-card-art');
  });
}

function decoratePrivateCard() {
  if (typeof state === 'undefined' || state.selectedIndex === null) return;
  const container = document.querySelector('.private-card');
  if (!container || container.dataset.directCardArt === '1') return;
  const card = state.board?.[state.selectedIndex];
  if (!card) return;
  container.dataset.directCardArt = '1';
  prependCardImage(container, card, 'private-direct-card-art');
}

function decorateAccusationChoices() {
  document.querySelectorAll('[data-accuse]').forEach((button) => {
    const suspectNumber = Number(button.dataset.accuse);
    if (!Number.isInteger(suspectNumber) || suspectNumber < 1 || suspectNumber > 7) return;
    if (button.dataset.directCardArt === '1') return;

    button.dataset.directCardArt = '1';
    button.classList.add('direct-suspect-choice');
    const image = createCardImage({ type: 'suspect', suspectNumber }, 'accuse-direct-card-art');
    if (image) button.prepend(image);

    const name = SUSPECT_NAMES[suspectNumber];
    if (name && !button.querySelector('.direct-suspect-name')) {
      const label = document.createElement('span');
      label.className = 'direct-suspect-name';
      label.textContent = name;
      button.appendChild(label);
    }
  });
}

function decorateCurrentUI() {
  decorateBoard();
  decoratePrivateCard();
  decorateAccusationChoices();
}

function installDirectCardUI() {
  ensureDirectCardStyles();
  preloadCardImages();
  decorateCurrentUI();

  const board = document.getElementById('board');
  if (board) new MutationObserver(decorateBoard).observe(board, { childList: true });

  const modalContent = document.getElementById('modalContent');
  if (modalContent) {
    new MutationObserver(() => {
      decoratePrivateCard();
      decorateAccusationChoices();
    }).observe(modalContent, { childList: true, subtree: true });
  }
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
  decorateBoard,
  decoratePrivateCard,
  decorateAccusationChoices,
  decorateCurrentUI,
  installDirectCardUI,
});
