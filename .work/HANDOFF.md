# 引き継ぎ

作業開始時に `.work/WORK_PLAN.md`、`.work/PROGRESS.md`、本ファイルを読む。

公開リポジトリは `h169432-cell/my-first-game`。GitHub Pagesはmainのルートを使用する。
置き換え前のmainは `backup-before-clean-rebuild-20260908` に保存済み。

実装は `index.html`、`style.css`、`game.js`、`assets/card-ui.js` の4ファイルを中心とする。
画像は `assets/cards/` の通常画像ファイル（容疑者2はPNG、その他はJPEG）を参照する。画像データの埋め込みや復元処理を追加しない。

犯人判定とゲーム進行は `npm test` で確認する。
残件は実ブラウザでの全操作・端末幅検証と、同時2勝時の単独勝者ルールの確定。
