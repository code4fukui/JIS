import { JIS } from "https://code4fukui.github.io/JIS/JIS.js";

console.log(JIS.encode("あ"));
console.log(JIS.decode(new Uint8Array([27, 36, 66, 36, 34, 27, 40, 66])));
