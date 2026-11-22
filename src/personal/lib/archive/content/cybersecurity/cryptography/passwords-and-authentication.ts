import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Passwords remain the main way people prove who they are, and most breaches involve stolen or reused credentials. The mathematics is short: strength is the size of the space an attacker has to search, measured in bits of entropy, and what matters is how that space is searched and how fast. This guide covers entropy, how sites should store passwords (salted, slow hashes), credential stuffing, multi-factor authentication and passkeys.',
  nutshell: [
    '**Entropy** \\(H=L\\log_2 N\\) bits for a random password of length \\(L\\) from an alphabet of \\(N\\) symbols. Each extra bit doubles the search.',
    'Human-chosen passwords have far less entropy than their length suggests; attackers try **likely** guesses first (leaked lists, patterns).',
    'Sites should store a **salted, slow hash** (Argon2id, scrypt, bcrypt), so a stolen database is expensive to crack, and never plaintext or a fast hash.',
    '**Multi-factor authentication** and **passkeys** (FIDO2/WebAuthn) defeat most credential theft; phishing-resistant methods defeat phishing too.',
  ],
  sections: [
    {
      id: 'entropy',
      title: 'Entropy and guessing time',
      lead: 'Counting the haystack.',
      blocks: [
        { t: 'sec-viz', viz: 'password-entropy' },
        {
          t: 'math',
          tex: String.raw`H=L\log_2 N,\qquad \text{average guesses}=\tfrac12\,2^{H}=2^{H-1},\qquad t=\frac{2^{H-1}}{r}`,
          caption: 'Entropy of a randomly generated password, the average number of guesses to find it, and the time at a guessing rate r.',
          where: [{ sym: 'L', def: 'length in characters (or words, for a passphrase)' }, { sym: 'N', def: 'size of the alphabet each character is drawn from' }, { sym: 'r', def: 'guesses per second the attacker can make' }],
          syntax: [
            { sym: 'L\\log_2 N', say: 'each symbol contributes log₂N bits; independent symbols add. Effect: length beats complexity: adding one character multiplies the space by N, whereas adding "special characters" to the alphabet only changes N slightly. Why: counting (N choices)^L.' },
            { sym: '2^{H-1}', say: 'on average the attacker finds it halfway through the space. Effect: each additional bit doubles the time.' },
            { sym: 'r', say: 'depends on how the password is stored: about 10¹⁰ per second per GPU-class machine against a fast hash like MD5 or unsalted SHA-1, about 10 to 10⁴ per second against a well-tuned Argon2id. Effect: storage choice changes the time by a factor of a million or more.' },
          ],
          worked: {
            title: 'Four random words versus a clever 8-character password',
            steps: ['Four words from a 7,776-word list (diceware): \\(H=4\\log_2 7776=4\\times 12.92=51.7\\) bits.', 'Random 8 characters from 94 printable: \\(H=8\\times6.55=52.4\\) bits.', 'A human 8-character "Password1!" is in every cracking list: effectively under 20 bits.', 'At \\(r=10^{10}\\)/s: 51.7 bits takes \\(2^{50.7}/10^{10}\\approx 1.8\\times10^{5}\\) s ≈ 2.1 days against a fast hash, but millennia against Argon2id at 10³/s.'],
            answer: 'Four random words are as strong as eight random characters and easier to remember. Randomness matters more than the character classes; and the site’s hashing decides whether strength is measured in days or in millennia.',
          },
        },
      ],
    },
    {
      id: 'storage',
      title: 'How passwords should be stored',
      lead: 'Assume the database will leak.',
      blocks: [
        {
          t: 'table',
          head: ['Storage', 'What a thief gets', 'Verdict'],
          rows: [
            ['Plaintext', 'Every password, immediately', 'Never'],
            ['Fast hash (MD5, SHA-1, SHA-256)', 'Billions of guesses per second; identical passwords look identical; rainbow tables work', 'Unsafe for passwords'],
            ['Salted fast hash', 'Defeats rainbow tables and cross-user matching, but each guess is still cheap', 'Better, not enough'],
            ['Salted slow hash (Argon2id, scrypt, bcrypt, PBKDF2 with high iterations)', 'Each guess costs milliseconds and memory; weak passwords still fall, strong ones do not', 'Recommended'],
          ],
        },
        { t: 'p', text: 'A **salt** is a random value stored beside each hash and mixed in. It makes the same password hash differently for each user, so a precomputed table is useless and an attacker must attack each account separately. A **pepper** is a secret key kept outside the database (for example in a hardware module) so that a database-only leak is not enough.' },
        { t: 'callout', tone: 'warn', title: 'Credential stuffing', text: 'About half of people reuse passwords. Attackers take pairs leaked from one breach and try them on other sites, automated at scale; the password strength is irrelevant if it is already leaked. Defences: unique passwords from a password manager, checking new passwords against breach lists (Have I Been Pwned’s k-anonymity API), rate limiting, and MFA.' },
      ],
    },
    {
      id: 'mfa',
      title: 'Multi-factor authentication and passkeys',
      lead: 'Something you know, have, are.',
      blocks: [
        {
          t: 'levels',
          caption: 'Roughly from weakest to strongest against phishing and takeover (CISA and NIST guidance).',
          items: [
            { name: 'Password only', body: 'One factor. Fails to reuse, phishing, stuffing and guessing.' },
            { name: 'SMS or voice codes', body: 'Better than nothing; vulnerable to SIM-swap and interception and can be phished in real time.' },
            { name: 'Authenticator app (TOTP) or push', body: 'Stops stuffing and most guessing. A phishing page can relay the code in real time; push "fatigue" attacks exploit approval prompts.' },
            { name: 'Hardware security key or passkey (FIDO2 / WebAuthn)', body: 'The browser binds the credential to the real site, so a look-alike domain gets nothing. Phishing-resistant by design.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{TOTP}(K,t)=\operatorname{Trunc}\big(\operatorname{HMAC\text{-}SHA1}(K,\lfloor t/30\rfloor)\big)\bmod 10^{6}`,
          caption: 'How an authenticator app generates a six-digit code (RFC 6238).',
          where: [{ sym: 'K', def: 'the secret shared when you scanned the QR code' }, { sym: 't', def: 'the Unix time in seconds' }],
          syntax: [
            { sym: '\\lfloor t/30\\rfloor', say: 'the number of the current 30-second window. Effect: server and phone agree on the counter without talking, provided clocks match.' },
            { sym: '\\operatorname{HMAC}(K,\\cdot)', say: 'a keyed hash of the counter. Effect: only someone holding K can compute the code. Why: a MAC output is unpredictable without the key.' },
            { sym: '\\bmod 10^6', say: 'keeps six digits. Effect: a guesser has a 1 in 10⁶ chance per try, which is why attempts must be rate-limited.' },
          ],
          worked: {
            title: 'Guessing a code',
            steps: ['Six digits: \\(10^6\\) possibilities; a code is valid for about 30 seconds (often 60 allowing for clock drift).', 'An attacker who can try 10 codes per window succeeds with probability \\(10/10^6 = 0.001\\%\\) per window.', 'With no rate limit, at 1,000 attempts per second they would succeed within seconds.'],
            answer: 'TOTP is safe against guessing only because the server limits attempts; the bigger risk is real-time phishing, which passkeys prevent.',
          },
        },
      ],
    },
  ],
  sources: [
    'NIST (2017, updated 2024). *SP 800-63B: Digital Identity Guidelines, Authentication and Lifecycle Management*.',
    'OWASP. *Password Storage Cheat Sheet* and *Authentication Cheat Sheet*.',
    'Bonneau, J. et al. (2012). The quest to replace passwords. *IEEE Symposium on Security and Privacy*.',
    'M’Raihi, D. et al. (2011). *RFC 6238: TOTP*. IETF.',
    'Biryukov, A., Dinu, D. & Khovratovich, D. (2016). Argon2: the memory-hard function for password hashing. *EuroS&P*.',
  ],
  related: ['cybersecurity/cryptography/crypto-foundations', 'cybersecurity/attack-surface/social-engineering', 'cybersecurity/maths-and-reasoning/security-maths', 'cloud/cloud-security/iam-and-zero-trust'],
}

export default guide
