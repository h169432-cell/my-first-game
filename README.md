# クルーバージュ

16枚のカードから真犯人を推理する、1台の端末で遊ぶ1〜4人用Webゲーム。

## 公開ページ

https://h169432-cell.github.io/my-first-game/

## 構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | 画面構造 |
| `style.css` | PC・iPad・スマホ向け表示 |
| `game.js` | デッキ、手番、犯人判定、得点 |
| `assets/card-ui.js` | カード画像対応と共通描画 |
| `assets/cards/*.jpg` | 14枚のカード画像 |
| `tests/game.test.js` | ルールの自動テスト |
| `.work/` | 計画、進捗、引き継ぎ |

画像は通常のJPEGファイルを `<img src>` で読み込む。画像復元処理、Base64埋め込み、Blob URL、CSSスプライト、後付けのルール上書きは使用しない。

## テスト

```bash
npm test
```

Node.js標準テストだけを使用するため、依存パッケージのインストールは不要。
