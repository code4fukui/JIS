# JIS

JISカタカナコードをエンコードおよびデコードするJavaScriptライブラリ(ES modules)です。

## デモ
[jis.html](https://code4fukui.github.io/JIS/jis.html)でJISエンコーディングされたHTMLを確認できます。

## 機能
- JISからShift_JISへのエンコード/デコード
- Shift_JISからJISへのエンコード/デコード

## 必要環境
[Deno](https://deno.com/)を使用する場合は、`--allow-import=code4fukui.github.io`オプションが必要です。

## 使い方
Denoでの使用例:

```sh
deno --allow-import=code4fukui.github.io JIS.example.js
```

## ライセンス
このライブラリは[MIT License](LICENSE)の下で提供されています。