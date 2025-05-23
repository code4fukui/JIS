# JIS

A [JIS Kanji Code](https://ja.wikipedia.org/wiki/JIS%E6%BC%A2%E5%AD%97%E3%82%B3%E3%83%BC%E3%83%89) encoder and decoder in JavaScript (ES modules)

```js
import { JIS } from "https://code4fukui.github.io/JIS/JIS.js";

console.log(JIS.encode("あ"));
console.log(JIS.decode(new Uint8Array([27, 36, 66, 36, 34, 27, 40, 66])));
```

## privilege

- --allow-import

for [Deno](https://deno.com/)
```sh
deno --allow-import JIS.example.js
```

## test

```sh
deno test --allow-import
```

## reference

- [encoding.js](https://github.com/polygonplanet/encoding.js/)
- [SJIS](https://github.com/code4fukui/SJIS/)
- [EUC](https://github.com/code4fukui/EUC/)
