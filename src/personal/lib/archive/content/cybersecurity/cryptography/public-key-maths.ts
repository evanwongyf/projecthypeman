import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Public-key cryptography lets two strangers agree on a secret over a channel an eavesdropper can read. It rests on problems that are easy in one direction and believed to be hard in the other: multiplying two primes versus factoring the product (RSA), and raising a number to a power modulo p versus recovering the exponent (Diffie–Hellman). This guide works both through with numbers small enough to follow by hand, explains why they are secure at real sizes, and what a quantum computer would change.',
  nutshell: [
    '**Modular arithmetic** is clock arithmetic: \\(a \\bmod n\\) is the remainder after dividing by \\(n\\).',
    '**Diffie–Hellman:** publicly agree on \\(p\\) and \\(g\\); Alice sends \\(g^a\\bmod p\\), Bob sends \\(g^b\\bmod p\\); both compute \\(g^{ab}\\bmod p\\).',
    '**RSA:** pick primes \\(p,q\\); \\(n=pq\\); public exponent \\(e\\); private exponent \\(d=e^{-1}\\bmod\\varphi(n)\\). Encrypt \\(c=m^e\\bmod n\\); decrypt \\(m=c^d\\bmod n\\).',
    'Security rests on **hardness**: factoring a 2048-bit \\(n\\) or finding a discrete log is infeasible with classical computers; Shor’s algorithm would break both on a large quantum computer, hence post-quantum standards (ML-KEM, ML-DSA).',
  ],
  sections: [
    {
      id: 'mod',
      title: 'Modular arithmetic',
      lead: 'The playground.',
      blocks: [
        { t: 'p', text: 'We write \\(a\\equiv b\\pmod n\\) if \\(n\\) divides \\(a-b\\). Addition and multiplication work as usual and then reduce: \\((7\\times 8)\\bmod 11 = 56\\bmod 11 = 1\\), so 8 is the **multiplicative inverse** of 7 modulo 11. Exponentiation by repeated squaring makes \\(g^x\\bmod p\\) fast even for huge numbers (about \\(\\log_2 x\\) steps), while the reverse, finding \\(x\\) from \\(g^x\\bmod p\\), has no known fast method.' },
        {
          t: 'math',
          tex: String.raw`a^{\varphi(n)}\equiv 1\pmod n\ \ (\gcd(a,n)=1),\qquad \varphi(pq)=(p-1)(q-1),\qquad a^{p-1}\equiv1\pmod p`,
          caption: 'Euler’s theorem, the totient of a product of two primes, and Fermat’s little theorem.',
          where: [{ sym: '\\varphi(n)', def: 'Euler’s totient: the count of integers from 1 to n that share no factor with n' }],
          syntax: [
            { sym: '\\varphi(pq)=(p-1)(q-1)', say: 'for primes p, q. Effect: anyone who knows the factors can compute it instantly; anyone who knows only n cannot. This asymmetry is RSA’s trapdoor.' },
            { sym: 'a^{\\varphi(n)}\\equiv 1', say: 'raising to the totient power returns 1. Effect: exponents can be reduced modulo φ(n), which is why \\(m^{ed}=m\\) when \\(ed\\equiv1\\pmod{\\varphi(n)}\\).' },
          ],
          worked: {
            title: 'Fast exponentiation',
            steps: ['Compute \\(3^{13}\\bmod 17\\). \\(13 = 1101_2\\).', '\\(3^1=3\\), \\(3^2=9\\), \\(3^4=81\\bmod17=13\\), \\(3^8=169\\bmod17=16\\).', '\\(3^{13}=3^8\\cdot3^4\\cdot3^1=16\\cdot13\\cdot3=624\\); \\(624\\bmod17=12\\).'],
            answer: '\\(3^{13}\\bmod 17=12\\), using 4 squarings and 2 multiplications instead of 12 multiplications.',
          },
        },
      ],
    },
    {
      id: 'dh',
      title: 'Diffie–Hellman key exchange',
      lead: 'A shared secret in public.',
      blocks: [
        { t: 'sec-viz', viz: 'diffie-hellman' },
        {
          t: 'math',
          tex: String.raw`A=g^{a}\bmod p,\quad B=g^{b}\bmod p,\quad K=B^{a}\bmod p=A^{b}\bmod p=g^{ab}\bmod p`,
          caption: 'Diffie–Hellman key exchange (1976).',
          where: [{ sym: 'p,\\ g', def: 'public prime modulus and generator' }, { sym: 'a,\\ b', def: 'Alice’s and Bob’s private exponents' }, { sym: 'A,\\ B', def: 'the public values they send' }],
          syntax: [
            { sym: 'g^{a}\\bmod p', say: 'a one-way function: easy to compute, believed hard to reverse (the discrete logarithm problem). Effect: sending A reveals nothing practical about a.' },
            { sym: '(g^b)^a=(g^a)^b', say: 'exponents commute. Effect: each side combines the other’s public value with its own secret and reaches the same number. Why: \\(g^{ab}=g^{ba}\\).' },
          ],
          worked: {
            title: 'Toy numbers',
            steps: ['p = 23, g = 5. Alice picks a = 6, Bob picks b = 15.', 'A = 5⁶ mod 23 = 15625 mod 23 = 8. B = 5¹⁵ mod 23 = 19.', 'Alice: K = 19⁶ mod 23 = 2. Bob: K = 8¹⁵ mod 23 = 2.'],
            answer: 'Both get 2. An eavesdropper sees 23, 5, 8, 19 and must solve \\(5^x\\equiv 8\\pmod{23}\\), trivial here but infeasible for a 2048-bit p. Diffie–Hellman alone does not authenticate: an active attacker can sit in the middle, so it is combined with signatures or certificates.',
          },
        },
      ],
    },
    {
      id: 'rsa',
      title: 'RSA',
      lead: 'The trapdoor in numbers.',
      blocks: [
        { t: 'sec-viz', viz: 'rsa-toy' },
        {
          t: 'math',
          tex: String.raw`n=pq,\quad ed\equiv1\pmod{\varphi(n)},\quad c=m^{e}\bmod n,\quad m=c^{d}\bmod n`,
          caption: 'Textbook RSA (Rivest, Shamir, Adleman, 1977).',
          where: [{ sym: '(n,e)', def: 'the public key' }, { sym: 'd', def: 'the private exponent' }, { sym: 'm,\\ c', def: 'plaintext and ciphertext, as numbers below n' }],
          syntax: [
            { sym: 'ed\\equiv1\\pmod{\\varphi(n)}', say: 'd is the inverse of e modulo φ(n). Effect: \\(c^d=m^{ed}=m\\). Why: Euler’s theorem. Computing d needs φ(n), which needs the factors of n.' },
            { sym: 'c=m^e\\bmod n', say: 'public encryption. Anyone can do it with the public key.' },
            { sym: 'c^d\\bmod n', say: 'private decryption, needing d. Effect: recovering m from c without d is believed as hard as factoring n.' },
          ],
          worked: {
            title: 'Toy RSA with p = 61, q = 53',
            steps: ['n = 61·53 = 3233; φ(n) = 60·52 = 3120. Choose e = 17 (coprime to 3120).', 'd = 17⁻¹ mod 3120 = 2753 (check: 17·2753 = 46801 = 15·3120 + 1).', 'Message m = 65: c = 65¹⁷ mod 3233 = 2790.', 'Decrypt: 2790²⁷⁵³ mod 3233 = 65.'],
            answer: 'A 12-bit n is factored by hand in a minute. Real RSA uses n of 2048 bits or more (617 digits), with padding (OAEP, PSS); textbook RSA without padding is insecure. The largest RSA number factored publicly has 829 bits (RSA-250, 2020), which took about 2,700 core-years.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Elliptic curves and the quantum threat', text: 'Elliptic-curve cryptography does Diffie–Hellman in a different group, with 256-bit keys offering security similar to 3072-bit RSA. Shor’s algorithm would solve factoring and discrete logs efficiently on a large fault-tolerant quantum computer, so NIST standardised lattice-based replacements (ML-KEM, ML-DSA) in 2024. Data encrypted today could be stored and decrypted later, so long-lived secrets are already planning the move.' },
      ],
    },
  ],
  sources: [
    'Diffie, W. & Hellman, M. (1976). New directions in cryptography. *IEEE Transactions on Information Theory*, 22(6).',
    'Rivest, R., Shamir, A. & Adleman, L. (1978). A method for obtaining digital signatures and public-key cryptosystems. *Communications of the ACM*, 21(2).',
    'Boudot, F. et al. (2020). Comparing the difficulty of factorization and discrete logarithm: a 240-digit experiment. *CRYPTO 2020*.',
    'NIST (2024). *FIPS 203 (ML-KEM), FIPS 204 (ML-DSA)*.',
  ],
  related: ['cybersecurity/cryptography/crypto-foundations', 'cybersecurity/cryptography/tls-and-pki', 'cybersecurity/maths-and-reasoning/security-maths'],
}

export default guide
