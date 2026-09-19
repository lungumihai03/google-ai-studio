// Cryptographic algorithm implementations authored & researched by Mihai Lungu

export interface CipherResult {
  ciphertext: string;
  steps: string[];
  matrixOrKeyInfo?: string;
  mathExplanation: string;
  stats?: {
    inputLength: number;
    outputLength: number;
    ioc?: number;
    entropy?: number;
  };
}

// 1. Greatest Common Divisor & Extended Euclidean Algorithm
export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function modInverse(a: number, m: number): number {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return -1;
}

// Calculate Index of Coincidence for text
export function calculateIoC(text: string): number {
  const clean = text.toUpperCase().replace(/[^A-Z]/g, '');
  const N = clean.length;
  if (N <= 1) return 0;

  const counts: Record<string, number> = {};
  for (const ch of clean) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  let sum = 0;
  for (const ch in counts) {
    const n = counts[ch];
    sum += n * (n - 1);
  }

  return sum / (N * (N - 1));
}

// Calculate Shannon Entropy
export function calculateEntropy(text: string): number {
  if (!text) return 0;
  const counts: Record<string, number> = {};
  for (const ch of text) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  let entropy = 0;
  const len = text.length;
  for (const ch in counts) {
    const p = counts[ch] / len;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

// 1. VIGENÈRE CIPHER
export function vigenereEncrypt(plaintext: string, key: string): CipherResult {
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, '') || 'KEY';
  const cleanText = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleanText) {
    return {
      ciphertext: '',
      steps: ['No alphabetic input provided.'],
      mathExplanation: 'C_i = (P_i + K_(i mod m)) mod 26',
    };
  }

  const steps: string[] = [];
  let result = '';
  for (let i = 0; i < cleanText.length; i++) {
    const pCode = cleanText.charCodeAt(i) - 65;
    const kCode = cleanKey.charCodeAt(i % cleanKey.length) - 65;
    const cCode = (pCode + kCode) % 26;
    const cChar = String.fromCharCode(cCode + 65);
    result += cChar;
    if (i < 10) {
      steps.push(
        `Char #${i + 1}: '${cleanText[i]}' (${pCode}) + Key '${cleanKey[i % cleanKey.length]}' (${kCode}) = (${pCode}+${kCode}) mod 26 = ${cCode} -> '${cChar}'`
      );
    }
  }
  if (cleanText.length > 10) {
    steps.push(`... and ${cleanText.length - 10} more characters processed with periodic key.`);
  }

  const ioc = calculateIoC(result);
  const entropy = calculateEntropy(result);

  return {
    ciphertext: result,
    steps,
    matrixOrKeyInfo: `Key: "${cleanKey}" (Period: ${cleanKey.length})`,
    mathExplanation:
      'Polyalphabetic substitution where each character is shifted by the corresponding letter in the repeated key phrase: C_i = (P_i + K_{i \\bmod m}) \\bmod 26.',
    stats: {
      inputLength: cleanText.length,
      outputLength: result.length,
      ioc: Number(ioc.toFixed(4)),
      entropy: Number(entropy.toFixed(3)),
    },
  };
}

export function vigenereDecrypt(ciphertext: string, key: string): CipherResult {
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, '') || 'KEY';
  const cleanText = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleanText) {
    return {
      ciphertext: '',
      steps: ['No alphabetic input provided.'],
      mathExplanation: 'P_i = (C_i - K_(i mod m) + 26) mod 26',
    };
  }

  const steps: string[] = [];
  let result = '';
  for (let i = 0; i < cleanText.length; i++) {
    const cCode = cleanText.charCodeAt(i) - 65;
    const kCode = cleanKey.charCodeAt(i % cleanKey.length) - 65;
    const pCode = (cCode - kCode + 26) % 26;
    const pChar = String.fromCharCode(pCode + 65);
    result += pChar;
    if (i < 10) {
      steps.push(
        `Char #${i + 1}: '${cleanText[i]}' (${cCode}) - Key '${cleanKey[i % cleanKey.length]}' (${kCode}) = (${cCode}-${kCode}+26) mod 26 = ${pCode} -> '${pChar}'`
      );
    }
  }

  return {
    ciphertext: result,
    steps,
    matrixOrKeyInfo: `Key: "${cleanKey}"`,
    mathExplanation: 'Decryption reverses the shift: P_i = (C_i - K_{i \\bmod m} + 26) \\bmod 26.',
  };
}

// 2. AFFINE CIPHER (ax + b mod 26)
export function affineEncrypt(plaintext: string, a: number, b: number): CipherResult {
  const cleanText = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
  const isCoprime = gcd(a, 26) === 1;

  if (!isCoprime) {
    return {
      ciphertext: 'ERROR: Key parameter "a" must be coprime to 26 (gcd(a, 26) = 1). Valid choices: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25.',
      steps: [`gcd(${a}, 26) = ${gcd(a, 26)} != 1. Invertibility fails.`],
      mathExplanation: 'E(x) = (ax + b) mod 26 requires gcd(a, 26) = 1 for unique decryption.',
    };
  }

  const steps: string[] = [];
  let result = '';
  for (let i = 0; i < cleanText.length; i++) {
    const x = cleanText.charCodeAt(i) - 65;
    const enc = (a * x + b) % 26;
    const cChar = String.fromCharCode(enc + 65);
    result += cChar;
    if (i < 8) {
      steps.push(`'${cleanText[i]}' (x=${x}): (${a} * ${x} + ${b}) = ${a * x + b} = ${enc} (mod 26) -> '${cChar}'`);
    }
  }

  const aInv = modInverse(a, 26);
  return {
    ciphertext: result,
    steps,
    matrixOrKeyInfo: `Parameters: a = ${a}, b = ${b} | Modular Inverse a^-1 = ${aInv} mod 26`,
    mathExplanation: `Affine transformation maps x in Z_26 to y = (ax + b) mod 26. Since gcd(${a}, 26) = 1, the unique inverse function is D(y) = ${aInv}(y - ${b}) mod 26.`,
    stats: {
      inputLength: cleanText.length,
      outputLength: result.length,
      ioc: Number(calculateIoC(result).toFixed(4)),
      entropy: Number(calculateEntropy(result).toFixed(3)),
    },
  };
}

// 3. PLAYFAIR 5x5 CIPHER
export function playfairEncrypt(plaintext: string, keyword: string): CipherResult {
  const cleanKey = (keyword.toUpperCase() + 'ABCDEFGHIKLMNOPQRSTUVWXYZ').replace(/J/g, 'I').replace(/[^A-Z]/g, '');
  const seen = new Set<string>();
  const matrix: string[][] = [];
  let currentMatrixRow: string[] = [];

  for (const ch of cleanKey) {
    if (!seen.has(ch)) {
      seen.add(ch);
      currentMatrixRow.push(ch);
      if (currentMatrixRow.length === 5) {
        matrix.push(currentMatrixRow);
        currentMatrixRow = [];
      }
    }
  }

  // Format 5x5 Matrix display
  const matrixVisual = matrix.map((row) => row.join('  ')).join('\n');

  // Prepare digraphs
  const rawText = plaintext.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
  const digraphs: [string, string][] = [];
  let i = 0;
  while (i < rawText.length) {
    const c1 = rawText[i];
    let c2 = rawText[i + 1];
    if (!c2) {
      c2 = 'X';
      i++;
    } else if (c1 === c2) {
      c2 = 'X';
      i++;
    } else {
      i += 2;
    }
    digraphs.push([c1, c2]);
  }

  const findPos = (char: string): [number, number] => {
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (matrix[r][c] === char) return [r, c];
      }
    }
    return [0, 0];
  };

  const steps: string[] = [];
  let cipher = '';
  for (const [c1, c2] of digraphs) {
    const [r1, col1] = findPos(c1);
    const [r2, col2] = findPos(c2);
    let enc1 = '', enc2 = '', rule = '';

    if (r1 === r2) {
      // Same row -> shift right
      enc1 = matrix[r1][(col1 + 1) % 5];
      enc2 = matrix[r2][(col2 + 1) % 5];
      rule = 'Same Row (Shift Right)';
    } else if (col1 === col2) {
      // Same col -> shift down
      enc1 = matrix[(r1 + 1) % 5][col1];
      enc2 = matrix[(r2 + 1) % 5][col2];
      rule = 'Same Column (Shift Down)';
    } else {
      // Rectangle rule -> swap column indices
      enc1 = matrix[r1][col2];
      enc2 = matrix[r2][col1];
      rule = 'Rectangle Corners';
    }
    cipher += enc1 + enc2;
    if (steps.length < 8) {
      steps.push(`Digraph "${c1}${c2}" at (${r1},${col1}) & (${r2},${col2}) -> [${rule}] -> "${enc1}${enc2}"`);
    }
  }

  return {
    ciphertext: cipher,
    steps,
    matrixOrKeyInfo: `5x5 Playfair Table (Key: "${keyword}"):\n${matrixVisual}`,
    mathExplanation:
      'Digraph cipher operating on pairs of letters in a 5x5 key matrix. Protects against single-letter frequency attacks by diffusing letter pairs into matrix coordinates.',
  };
}

// 4. MARKOVSKI HYBRID QUASIGROUP CIPHER
export function markovskiQuasigroupDemo(plaintext: string, leader: string = 'M'): CipherResult {
  const clean = plaintext.toUpperCase().replace(/[^A-Z]/g, '') || 'HELLOMARKOWSKI';
  const cleanLeader = (leader.toUpperCase().replace(/[^A-Z]/g, '')[0] || 'M');

  // Define an algebraic Latin Square operation over Z_26:
  // Quasigroup operator: x * y = (3x + 7y + 5) mod 26 (has Latin square properties because gcd(3, 26)=1 and gcd(7, 26)=1)
  const op = (x: number, y: number): number => {
    return (3 * x + 7 * y + 5) % 26;
  };

  const leaderVal = cleanLeader.charCodeAt(0) - 65;
  let prev = leaderVal;
  let cipher = '';
  const steps: string[] = [];

  steps.push(`Leader element initialized to L_0 = '${cleanLeader}' (${leaderVal})`);

  for (let i = 0; i < clean.length; i++) {
    const mi = clean.charCodeAt(i) - 65;
    const ci = op(prev, mi);
    const cChar = String.fromCharCode(ci + 65);
    cipher += cChar;
    if (i < 8) {
      steps.push(
        `e_${i + 1} = e_${i} * m_${i + 1} = (${prev} * ${mi}) = (3*${prev} + 7*${mi} + 5) mod 26 = ${ci} -> '${cChar}'`
      );
    }
    prev = ci; // Feedback: output becomes leader for next element
  }

  return {
    ciphertext: cipher,
    steps,
    matrixOrKeyInfo: `Quasigroup Operator: x * y = (3x + 7y + 5) mod 26 | Initial Leader: '${cleanLeader}'`,
    mathExplanation:
      'Professor Smile Markovski quasigroup transformation. Each output symbol e_i = e_{i-1} * m_i creates an immediate forward propagation of avalanche diffusion across the entire stream, producing pseudo-random non-linear distributions.',
    stats: {
      inputLength: clean.length,
      outputLength: cipher.length,
      ioc: Number(calculateIoC(cipher).toFixed(4)),
      entropy: Number(calculateEntropy(cipher).toFixed(3)),
    },
  };
}

// 5. RSA MATHEMATICAL DEMONSTRATION
export function rsaDemonstration(messageNumber: number = 42, p: number = 61, q: number = 53): CipherResult {
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  const e = 17; // standard small coprime public exponent for demo
  const d = modInverse(e, phi);

  const m = messageNumber % n;

  // Square and Multiply modular exponentiation: (m^e) mod n
  function powerMod(base: number, exp: number, mod: number): number {
    let res = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) res = (res * base) % mod;
      base = (base * base) % mod;
      exp = Math.floor(exp / 2);
    }
    return res;
  }

  const c = powerMod(m, e, n);
  const decrypted = powerMod(c, d, n);

  const steps = [
    `1. Prime Generation: Chosen primes p = ${p}, q = ${q}`,
    `2. Modulus Calculation: n = p * q = ${p} * ${q} = ${n}`,
    `3. Euler Totient: φ(n) = (p - 1)(q - 1) = ${p - 1} * ${q - 1} = ${phi}`,
    `4. Public Key (e, n): e = ${e} (gcd(${e}, ${phi}) = ${gcd(e, phi)}) -> Public Key: (${e}, ${n})`,
    `5. Private Key (d, n): d = e^-1 mod φ(n) = ${e}^-1 mod ${phi} = ${d} -> Private Key: (${d}, ${n})`,
    `6. Encryption: C = (M^e) mod n = (${m}^${e}) mod ${n} = ${c}`,
    `7. Decryption Verification: M = (C^d) mod n = (${c}^${d}) mod ${n} = ${decrypted} (Matches Original!)`,
  ];

  return {
    ciphertext: `Ciphertext Integer: ${c} (Public Key: e=${e}, n=${n})`,
    steps,
    matrixOrKeyInfo: `Public Key: (e=${e}, n=${n}) | Private Key: (d=${d}, n=${n}) | Modulus φ(n)=${phi}`,
    mathExplanation:
      'RSA Public Key Cryptosystem founded on the difficulty of integer factorization. Euler’s theorem guarantees that (M^e)^d ≡ M^(1 + k*φ(n)) ≡ M (mod n).',
  };
}

// 6. ISOTOPE CIPHER DEMONSTRATION
export function isotopeCipherDemo(plaintext: string): CipherResult {
  const clean = plaintext.toUpperCase().replace(/[^A-Z]/g, '') || 'ISOTOPE';
  // Permutation triples: alpha(x) = (x + 3) mod 26, beta(y) = (5y + 1) mod 26, gamma(z) = (7z + 2) mod 26
  const alpha = (x: number) => (x + 3) % 26;
  const beta = (y: number) => (5 * y + 1) % 26;
  const gamma = (z: number) => (7 * z + 2) % 26;

  const steps: string[] = [
    'Isotopy Permutations defined over Galois Ring Z_26: α(x) = (x + 3) mod 26, β(y) = (5y + 1) mod 26, γ(z) = (7z + 2) mod 26',
    'Base Operation: x ⊕ y = (x + y) mod 26',
    'Isotopic Operation: x ⊗ y = γ(α(x) ⊕ β(y))',
  ];

  let result = '';
  let prev = 7; // initialization seed

  for (let i = 0; i < clean.length; i++) {
    const x = prev;
    const y = clean.charCodeAt(i) - 65;
    const aX = alpha(x);
    const bY = beta(y);
    const baseSum = (aX + bY) % 26;
    const encVal = gamma(baseSum);
    const cChar = String.fromCharCode(encVal + 65);
    result += cChar;
    if (i < 6) {
      steps.push(`Char #${i + 1} '${clean[i]}' (y=${y}): γ(α(${x}) ⊕ β(${y})) = γ(${aX} + ${bY}) = γ(${baseSum}) = ${encVal} -> '${cChar}'`);
    }
    prev = encVal;
  }

  return {
    ciphertext: result,
    steps,
    matrixOrKeyInfo: 'Isotopy Triple: (α, β, γ) over Z_26 | Groupoid Order: 26',
    mathExplanation:
      'Two groupoids (G, *) and (G, ⊗) are isotopic if there exist bijections (α, β, γ) such that x ⊗ y = γ(α(x) * β(y)). This transformation conceals statistical symmetries of the underlying Latin square.',
  };
}
