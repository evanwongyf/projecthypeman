import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Claims about security strength are claims about numbers: how many possibilities, how many guesses, how many events, how likely a coincidence is. This guide collects the arithmetic that appears again and again: counting and keyspaces, entropy, the birthday bound, Bayes’ rule, expected loss and the probability of surviving many independent attempts. Each tool is derived, worked and used to check a real claim.',
  nutshell: [
    '**Keyspace** \\(N^L\\) and **entropy** \\(L\\log_2 N\\) turn "how strong?" into a number of bits; each bit doubles the work.',
    'The **birthday bound**: among \\(k\\) random values from a space of size \\(M\\), a collision becomes likely when \\(k\\approx\\sqrt{M}\\) (about \\(1.18\\sqrt M\\) for 50%).',
    '**Bayes’ rule** turns accuracy into usefulness; with rare events most positives are false.',
    '**Independent attempts compound:** surviving \\(n\\) trials, each with failure probability \\(p\\), has probability \\((1-p)^n\\).',
  ],
  sections: [
    {
      id: 'count',
      title: 'Counting and entropy',
      lead: 'The size of the haystack.',
      blocks: [
        { t: 'sec-viz', viz: 'password-entropy' },
        {
          t: 'math',
          tex: String.raw`|{\mathcal K}|=N^{L},\qquad H=\log_2|{\mathcal K}|=L\log_2N,\qquad H=-\sum_i p_i\log_2 p_i`,
          caption: 'Keyspace size, its entropy in bits, and Shannon entropy for a non-uniform distribution.',
          where: [{ sym: 'p_i', def: 'the probability of outcome i (for a uniform choice, 1/|K|)' }],
          syntax: [
            { sym: 'N^{L}', say: 'the product rule: N independent choices at each of L positions. Effect: grows exponentially in length, polynomially in alphabet size.' },
            { sym: '\\log_2', say: 'converts the huge count into bits. Effect: 1 bit = a factor of 2; 10 bits ≈ ×1,000; 20 bits ≈ ×1 million; 40 bits ≈ ×10¹². Why: logs make multiplication into addition, so strengths combine by adding bits.' },
            { sym: '-\\sum p_i\\log_2 p_i', say: 'Shannon entropy: the average surprise. Effect: it is maximal when all outcomes are equally likely and smaller when some are favoured. Why: an attacker who knows the favourites searches them first, so non-uniform choices (human passwords) are weaker than their length suggests.' },
          ],
          worked: {
            title: 'A human-chosen PIN',
            steps: ['Uniform 4-digit PIN: \\(10^4\\) values, 13.3 bits.', 'But 1234, 0000, 1111, 2580 and birth years make up a large share of real PINs; suppose the 20 most common cover 25% of users.', 'An attacker who tries those 20 first succeeds against 1 in 4 users in 20 guesses.'],
            answer: 'The effective entropy is far below 13.3 bits for a quarter of users. The numbers are only as good as the assumption of uniform choice.',
          },
        },
      ],
    },
    {
      id: 'birthday',
      title: 'The birthday bound',
      lead: 'Why collisions come early.',
      blocks: [
        { t: 'sec-viz', viz: 'birthday' },
        {
          t: 'math',
          tex: String.raw`P(\text{collision})=1-\prod_{i=0}^{k-1}\Big(1-\frac iM\Big)\;\approx\;1-e^{-k(k-1)/2M},\qquad k_{50\%}\approx1.1774\sqrt M`,
          caption: 'The probability that at least two of k random draws from M equally likely values coincide.',
          where: [{ sym: 'M', def: 'the number of possible values (365 days; \\(2^{n}\\) hash outputs)' }, { sym: 'k', def: 'the number of draws' }],
          syntax: [
            { sym: '\\prod(1-i/M)', say: 'the chance that every new draw avoids all earlier ones. Effect: the i-th draw misses i earlier values with probability 1−i/M. Why: the product rule for no collision.' },
            { sym: 'e^{-k(k-1)/2M}', say: 'the same thing for small i/M, using \\(1-x\\approx e^{-x}\\). Effect: k(k−1)/2 is the number of pairs; each pair collides with probability 1/M. Why: the exponent is the expected number of colliding pairs.' },
            { sym: '\\sqrt M', say: 'the scale at which collisions become likely. Effect: for a 128-bit space, \\(2^{64}\\) draws, not \\(2^{128}\\).' },
          ],
          worked: {
            title: 'The classic and the cryptographic',
            steps: ['Birthdays: \\(M=365\\), \\(k_{50\\%}\\approx1.1774\\times19.1=22.5\\), so 23 people.', 'A 64-bit random identifier: \\(k_{50\\%}\\approx1.1774\\times2^{32}\\approx5\\times10^{9}\\). A system generating a billion random 64-bit IDs has a chance of \\(1-e^{-10^{18}/(2\\times1.8\\times10^{19})}\\approx 2.7\\%\\) of a duplicate.', 'SHA-256 collisions: \\(2^{128}\\) work. Safe.'],
            answer: 'Use at least 128 bits for random identifiers that must never repeat, and remember that collision resistance is half the bit length of the hash.',
          },
        },
      ],
    },
    {
      id: 'bayes',
      title: 'Bayes, expected loss and compounding attempts',
      lead: 'Three rules for reasoning under uncertainty.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Pr[A\mid B]=\frac{\Pr[B\mid A]\Pr[A]}{\Pr[B]},\qquad \mathbb E[\text{loss}]=\sum_i p_i\,\ell_i,\qquad \Pr[\text{survive }n]=(1-p)^{n}`,
          caption: 'Bayes’ rule, expected loss, and the probability of surviving n independent attempts.',
          where: [{ sym: 'p_i,\\ \\ell_i', def: 'the probability and loss of scenario i' }],
          syntax: [
            { sym: '\\Pr[A\\mid B]', say: '"the probability of A given B". Effect: reverses a conditional: from "the alert fires if there is an attack" to "there is an attack if the alert fires". The two are very different when A is rare.' },
            { sym: '\\sum_i p_i\\ell_i', say: 'the probability-weighted average loss. Effect: rare, large losses and frequent, small ones compare directly. Caveat: the average hides the tail; a company can survive an expected $100k a year but not a $50M year.' },
            { sym: '(1-p)^{n}', say: 'surviving n independent tries. Effect: small risks per attempt compound: a 1% per-year chance of a breach is 63% over 100 years and 9.6% over 10.' },
          ],
          worked: {
            title: 'A defender’s two views',
            steps: ['An attacker tries a login protected by a 1-in-10,000 chance per guess of success. Allowed 5 guesses before lockout: \\(1-(1-10^{-4})^5\\approx0.05\\%\\).', 'The same attacker, spread over 100,000 accounts, expects \\(100{,}000\\times0.0005=50\\) compromised accounts.', 'Per-account lockouts do not stop a campaign that takes one guess per account: defenders must also watch for the pattern across accounts.'],
            answer: 'Per-attempt and per-population views give very different conclusions. A control that is excellent for one user can be useless against a population-wide attack.',
          },
        },
        { t: 'sec-viz', viz: 'base-rate' },
        { t: 'callout', tone: 'tip', title: 'Fermi estimates for security', text: 'A rough number beats no number. How many devices? How many employees click? How many alerts per day, at how many minutes each? Multiply the estimates, check the units and decide if the answer is plausible before spending money.' },
      ],
    },
  ],
  sources: [
    'Shannon, C. E. (1948). A mathematical theory of communication. *Bell System Technical Journal*, 27.',
    'Katz, J. & Lindell, Y. (2020). *Introduction to Modern Cryptography* (3rd ed.), ch. 5 (birthday attacks). CRC Press.',
    'Anderson, R. (2020). *Security Engineering* (3rd ed.), chs. 3 and 8. Wiley.',
    'Hubbard, D. & Seiersen, R. (2016). *How to Measure Anything in Cybersecurity Risk*. Wiley.',
  ],
  related: ['cybersecurity/cryptography/crypto-foundations', 'cybersecurity/cryptography/passwords-and-authentication', 'cybersecurity/foundations/cia-and-risk', 'cybersecurity/maths-and-reasoning/attacker-economics'],
}

export default guide
