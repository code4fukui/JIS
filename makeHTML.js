import { JIS } from "./JIS.js";

const s = `<!DOCTYPE html>
<html>
<head>
  <meta charset="JIS">
  <title>テストページ</title>
</head>
<body>
  <h1>こんにちは、世界！</h1>
  <p>これはJISで書かれたHTMLです。</p>
</body>
</html>
`;
await Deno.writeFile("jis.html", JIS.encode(s));
