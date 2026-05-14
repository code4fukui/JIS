# JIS

JavaScript (ESモジュール) による JIS 漢字コードのエンコーダおよびデコーダ。

## 機能
- JIS 漢字コードのエンコードとデコード
- Deno環境のサポート

## 要件
Denoの場合:
- `--allow-import=code4fukui.github.io` 権限

## 使い方
```js
import { JIS } from "https://code4fukui.github.io/JIS/JIS.js";

console.log(JIS.encode("あ"));
console.log(JIS.decode(new Uint8Array([27, 36, 66, 36, 34, 27, 40, 66])));
```

Denoの場合:
```sh
deno --allow-import=code4fukui.github.io JIS.example.js
```

## テスト
```sh
deno test --allow-import=code4fukui.github.io
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
