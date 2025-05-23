import * as t from "https://deno.land/std/testing/asserts.ts";
import { JIS } from "./JIS.js";

Deno.test("simple", () => {
  const bina = new Uint8Array([
    27,
    36,
    66,
    36,
    34,
    27,
    40,
    66,
  ]);
  t.assertEquals(JIS.encode("あ"), bina);
  t.assertEquals(JIS.decode(bina), "あ");
});
