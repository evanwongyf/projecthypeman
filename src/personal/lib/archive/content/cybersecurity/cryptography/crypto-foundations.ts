import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cryptography turns the problem of keeping a message secret into the problem of keeping a short key secret. Four building blocks cover most uses: symmetric ciphers for confidentiality, hash functions for fingerprints, message authentication codes and signatures for integrity, and public-key methods for agreeing keys with strangers. This guide explains each, the single most important rule (never invent your own), and lets you see a hash avalanche live.',
  nutshell: [
    '**Symmetric encryption** (AES) uses one shared key; it is fast. **Public-key** encryption and signatures use a key pair; they are slower and solve key distribution.',
    'A **hash** (SHA-256) maps anything to a fixed-size fingerprint; changing one input bit changes about half the output bits (**avalanche**).',
    'A **MAC** (HMAC) or an **authenticated cipher** (AES-GCM) proves a message was not altered; encryption alone does not.',
    '**Never design your own cryptography.** Use well-reviewed libraries and protocols; most real failures are in how primitives are used, not in the maths.',
  ],
  sections: [
    {
      id: 'blocks',
      title: 'The building blocks',
      lead: 'Four tools and what each gives you.',
      blocks: [
        {
          t: 'table',
          head: ['Primitive', 'Key?', 'Gives', 'Example', 'Pitfall'],
          rows: [
            ['Symmetric cipher', 'One shared secret key', 'Confidentiality', 'AES-256 in GCM mode', 'Reusing a nonce with the same key can be catastrophic; unauthenticated modes (ECB, CBC alone) are unsafe'],
            ['Hash function', 'No key', 'A fingerprint; one-way; collision-resistant', 'SHA-256, SHA-3', 'Fast hashes are wrong for passwords; MD5 and SHA-1 are broken for collisions'],
            ['MAC', 'Shared secret', 'Integrity and authenticity', 'HMAC-SHA-256', 'Comparing tags with a non-constant-time equality can leak timing'],
            ['Public-key encryption / key exchange', 'Key pair', 'Agree or send secrets with strangers', 'RSA-OAEP, ECDH (X25519)', 'Small keys; no authentication of the other side'],
            ['Digital signature', 'Key pair', 'Authenticity and non-repudiation', 'Ed25519, RSA-PSS, ECDSA', 'Reused nonces in ECDSA leak the private key'],
          ],
        },
        { t: 'p', text: 'In practice they are combined. HTTPS uses public-key methods to agree a fresh symmetric key and to authenticate the server, then uses a fast symmetric cipher for the data (the TLS guide shows how).' },
      ],
    },
    {
      id: 'hash',
      title: 'Hash functions and the avalanche effect',
      lead: 'See it change.',
      blocks: [
        { t: 'sec-viz', viz: 'hash-avalanche' },
        { t: 'p', text: 'A cryptographic hash must be **preimage-resistant** (given \\(h\\), hard to find any \\(x\\) with \\(H(x)=h\\)), **second-preimage-resistant** and **collision-resistant** (hard to find any \\(x\\ne y\\) with \\(H(x)=H(y)\\)). For an \\(n\\)-bit hash, brute-forcing a preimage takes about \\(2^{n}\\) tries but finding a collision takes only about \\(2^{n/2}\\) by the birthday bound, which is why SHA-256 gives 128-bit collision security, not 256.' },
        {
          t: 'math',
          tex: String.raw`\Pr[\text{bit flips}]\approx\tfrac12,\qquad \text{expected differing bits}=\tfrac n2,\qquad \text{collision work}\approx 2^{n/2}`,
          caption: 'The avalanche criterion and the birthday cost of a collision.',
          where: [{ sym: 'n', def: 'output size in bits (256 for SHA-256)' }],
          syntax: [
            { sym: '\\tfrac n2', say: 'on average half the output bits change when one input bit changes. Effect: the output of two similar inputs looks unrelated. Why: a good hash behaves like a random function, so there is no way to get closer to a target by making small changes.' },
            { sym: '2^{n/2}', say: 'the number of hashes you must compute before a collision becomes likely. Effect: halves the security in bits relative to preimage search. Why: the birthday problem (see the maths guide): with \\(k\\) values there are \\(k^2/2\\) pairs.' },
          ],
          worked: {
            title: 'Why 128-bit hashes are retired',
            steps: ['An n = 128-bit hash (MD5) needs about \\(2^{64}\\approx 1.8\\times10^{19}\\) operations for a collision.', 'Real attacks on MD5 need only about \\(2^{18}\\) operations because of structural weaknesses.', 'SHA-256: \\(2^{128}\\approx3.4\\times10^{38}\\) operations; no known attack is close.'],
            answer: 'Both the size and the design matter. MD5 and SHA-1 collisions have been demonstrated (SHA-1 in 2017), so do not use them where collisions matter, such as signatures.',
          },
        },
      ],
    },
    {
      id: 'rules',
      title: 'Rules that prevent most failures',
      lead: 'Do and do not.',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use a high-level library (libsodium, the platform’s TLS and crypto APIs) and its authenticated-encryption defaults.',
            'Get random numbers from the operating system’s cryptographic generator.',
            'Use a fresh, unique nonce for every encryption with the same key, as the mode requires.',
            'Treat keys as the secret: store them in a key-management system or hardware, never in source code.',
            'Plan for rotation and algorithm change ("crypto agility").',
          ],
          dont: [
            'Invent a cipher or protocol, or "improve" a standard one.',
            'Use ECB mode, MD5/SHA-1 for security, or encryption without authentication.',
            'Use a general-purpose random function (rand, Math.random) for keys or tokens.',
            'Hard-code keys or reuse one key for unrelated purposes.',
            'Rely on obscurity: Kerckhoffs’s principle says the system must be secure when everything but the key is known.',
          ],
        },
        { t: 'sec-viz', viz: 'freq-analysis' },
        { t: 'p', text: 'The lab above breaks a simple Caesar shift by comparing letter frequencies. It shows why a cipher that leaves the statistics of the language visible is hopeless, and why modern ciphers are designed to make ciphertext look like uniform random noise.' },
      ],
    },
  ],
  sources: [
    'Ferguson, N., Schneier, B. & Kohno, T. (2010). *Cryptography Engineering*. Wiley.',
    'Katz, J. & Lindell, Y. (2020). *Introduction to Modern Cryptography* (3rd ed.). CRC Press.',
    'Stevens, M. et al. (2017). The first collision for full SHA-1. *CRYPTO 2017*.',
    'Aumasson, J.-P. (2017). *Serious Cryptography*. No Starch Press.',
  ],
  related: ['cybersecurity/cryptography/public-key-maths', 'cybersecurity/cryptography/passwords-and-authentication', 'cybersecurity/cryptography/tls-and-pki', 'cybersecurity/maths-and-reasoning/security-maths'],
}

export default guide
