import { SJIS } from "https://code4fukui.github.io/SJIS/SJIS.js";

// from https://github.com/polygonplanet/encoding.js/blob/master/encoding.js#L161

export const JISToSJIS = (data) => {
  const results = [];
  const len = data && data.length;

  for (let i = 0; i < len; i++) {
    let index = 0;
    // escape sequence
    while (data[i] === 0x1B) {
      if ((data[i + 1] === 0x24 && data[i + 2] === 0x42) ||
          (data[i + 1] === 0x24 && data[i + 2] === 0x40)) {
        index = 1;
      } else if ((data[i + 1] === 0x28 && data[i + 2] === 0x49)) {
        index = 2;
      } else if (data[i + 1] === 0x24 && data[i + 2] === 0x28 &&
                 data[i + 3] === 0x44) {
        index = 3;
        i++;
      } else {
        index = 0;
      }

      i += 3;
      if (data[i] === void 0) {
        return results;
      }
    }

    if (index === 1) {
      let b1 = data[i];
      let b2 = data[++i];
      if (b1 & 0x01) {
        b1 >>= 1;
        if (b1 < 0x2F) {
          b1 += 0x71;
        } else {
          b1 -= 0x4F;
        }
        if (b2 > 0x5F) {
          b2 += 0x20;
        } else {
          b2 += 0x1F;
        }
      } else {
        b1 >>= 1;
        if (b1 <= 0x2F) {
          b1 += 0x70;
        } else {
          b1 -= 0x50;
        }
        b2 += 0x7E;
      }
      results[results.length] = b1 & 0xFF;
      results[results.length] = b2 & 0xFF;
    } else if (index === 2) {
      results[results.length] = data[i] + 0x80 & 0xFF;
    } else if (index === 3) {
      // Shift_JIS cannot convert JIS X 0212:1990.
      results[results.length] = config.FALLBACK_CHARACTER;
    } else {
      results[results.length] = data[i] & 0xFF;
    }
  }

  return results;
}

// from https://github.com/polygonplanet/encoding.js/blob/master/encoding.js#L284
/**
 * SJIS to JIS
 */
export const SJISToJIS = (data) => {
  const results = [];
  const len = data && data.length;

  const esc = [
    0x1B, 0x28, 0x42,
    0x1B, 0x24, 0x42,
    0x1B, 0x28, 0x49
  ];

  let index = 0;
  for (let i = 0; i < len; i++) {
    let b1 = data[i];
    if (b1 >= 0xA1 && b1 <= 0xDF) {
      if (index !== 2) {
        index = 2;
        results[results.length] = esc[6];
        results[results.length] = esc[7];
        results[results.length] = esc[8];
      }
      results[results.length] = b1 - 0x80 & 0xFF;
    } else if (b1 >= 0x80) {
      if (index !== 1) {
        index = 1;
        results[results.length] = esc[3];
        results[results.length] = esc[4];
        results[results.length] = esc[5];
      }

      b1 <<= 1;
      let b2 = data[++i];
      if (b2 < 0x9F) {
        if (b1 < 0x13F) {
          b1 -= 0xE1;
        } else {
          b1 -= 0x61;
        }
        if (b2 > 0x7E) {
          b2 -= 0x20;
        } else {
          b2 -= 0x1F;
        }
      } else {
        if (b1 < 0x13F) {
          b1 -= 0xE0;
        } else {
          b1 -= 0x60;
        }
        b2 -= 0x7E;
      }
      results[results.length] = b1 & 0xFF;
      results[results.length] = b2 & 0xFF;
    } else {
      if (index !== 0) {
        index = 0;
        results[results.length] = esc[0];
        results[results.length] = esc[1];
        results[results.length] = esc[2];
      }
      results[results.length] = b1 & 0xFF;
    }
  }

  if (index !== 0) {
    results[results.length] = esc[0];
    results[results.length] = esc[1];
    results[results.length] = esc[2];
  }

  return results;
};

export const decode = (jis) => {
  const sjis = JISToSJIS(jis);
  const s = SJIS.decode(new Uint8Array(sjis));
  return s;
};

export const encode = (s) => {
  const sjis = SJIS.encode(s);
  const jis = SJISToJIS(sjis);
  return new Uint8Array(jis);
};

export const JIS = { encode, decode };
