import { JIS } from "./JIS.js";

console.log(JIS.encode("あ"));
console.log(JIS.decode(new Uint8Array([27, 36, 66, 36, 34, 27, 40, 66])));
