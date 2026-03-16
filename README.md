# JIS

A JIS Kanji Code encoder and decoder in JavaScript (ES modules).

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

## Features
- Encode and decode JIS Kanji Code
- Support for Deno environment

## Requirements
For Deno:
- `--allow-import=code4fukui.github.io` permission

## Usage
```js
import { JIS } from "https://code4fukui.github.io/JIS/JIS.js";

console.log(JIS.encode("あ"));
console.log(JIS.decode(new Uint8Array([27, 36, 66, 36, 34, 27, 40, 66])));
```

For Deno:
```sh
deno --allow-import=code4fukui.github.io JIS.example.js
```

## Testing
```sh
deno test --allow-import=code4fukui.github.io
```

## License
MIT License — see [LICENSE](LICENSE).