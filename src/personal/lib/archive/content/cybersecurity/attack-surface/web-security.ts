import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most of what people use on the internet is a web application, and most web vulnerabilities fall into a small number of recurring classes, catalogued by OWASP. Nearly all reduce to one mistake: the application treats data from outside as if it were trustworthy, or as if it were code. This guide explains each major class, why it exists, and, as important, the standard fix. It is for building and reviewing applications you are responsible for.',
  nutshell: [
    'The **OWASP Top 10** (2021) ranks: broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable components, authentication failures, integrity failures, logging failures, SSRF.',
    '**Injection** happens when untrusted input is mixed into a command or query; the fix is to keep data and code separate (**parameterised queries**).',
    '**Broken access control** is the most common: the server forgets to check whether *this user* may do *this action on this object*.',
    '**XSS** runs attacker script in a victim’s browser; the fix is **output encoding** and a **Content Security Policy**. **CSRF** rides on a logged-in browser; the fix is **SameSite cookies** and anti-forgery tokens.',
  ],
  sections: [
    {
      id: 'principle',
      title: 'The root cause: data treated as code',
      lead: 'One idea behind many bugs.',
      blocks: [
        { t: 'p', text: 'A program has a *control plane* (the instructions it follows) and a *data plane* (the values it handles). Injection-type bugs happen when input from a user ends up interpreted in the control plane: a database query, an operating-system command, a page of HTML or a template. Every fix is a variation on separating the two: use interfaces where data is passed as a *parameter*, never concatenated into the command string; encode data for the context where it is placed; and validate input against what is expected, as defence in depth rather than the only defence.' },
        {
          t: 'dodont',
          do: [
            'Use **parameterised queries / prepared statements**: `db.query("SELECT * FROM users WHERE id = $1", [id])`.',
            'Use an ORM or query builder that parameterises by default.',
            'Encode output for its context (HTML body, attribute, JavaScript, URL).',
            'Validate on the server against an allow-list of expected formats.',
          ],
          dont: [
            'Build queries or shell commands by joining strings that contain user input.',
            'Trust client-side validation, hidden fields, or request headers for security decisions.',
            'Pass user input to an interpreter (shell, `eval`, a template engine) at all, if avoidable.',
          ],
        },
      ],
    },
    {
      id: 'classes',
      title: 'The main classes, one by one',
      lead: 'What each is and how it is prevented.',
      blocks: [
        {
          t: 'table',
          head: ['Class', 'What goes wrong', 'Primary prevention'],
          rows: [
            ['Broken access control (A01)', 'Server does not check authorisation: changing an ID in a URL shows another user’s record (IDOR); ordinary users reach admin pages', 'Deny by default; check ownership and role on the server for every request; log failures; test with two accounts'],
            ['Cryptographic failures (A02)', 'Sensitive data unencrypted, weak algorithms, hard-coded keys, bad password storage', 'TLS everywhere; encrypt sensitive data at rest; Argon2id for passwords; manage keys properly'],
            ['Injection (A03)', 'SQL, NoSQL, OS command, LDAP, template injection: input becomes part of a command', 'Parameterised queries; avoid interpreters; least-privilege database accounts'],
            ['Insecure design (A04)', 'Flaws in the logic, not the code: no limit on password attempts, no check on price in a checkout flow', 'Threat modelling; abuse cases; design reviews; limits and rate controls'],
            ['Security misconfiguration (A05)', 'Default passwords, debug mode on, open cloud storage, verbose errors, unneeded services', 'Hardened baselines; infrastructure as code; automated configuration scanning'],
            ['Vulnerable components (A06)', 'Out-of-date libraries with public vulnerabilities (the Log4Shell lesson)', 'Inventory (SBOM); dependency scanning; patch quickly'],
            ['Authentication failures (A07)', 'Weak passwords allowed, credential stuffing works, sessions do not expire', 'MFA; breach-list checks; rate limits; secure session handling'],
            ['Integrity failures (A08)', 'Unsigned updates, insecure deserialisation, untrusted CI/CD pipelines', 'Signed artifacts; verify dependencies; protect build systems'],
            ['Logging failures (A09)', 'No record of logins or access, so attacks go unnoticed for months', 'Log security events centrally; alert on anomalies (see detection)'],
            ['SSRF (A10)', 'Server fetches a URL supplied by the user and is tricked into reaching internal services or cloud metadata', 'Allow-list destinations; block internal ranges; require tokens on the metadata service (IMDSv2)'],
          ],
          caption: 'OWASP Top 10:2021. Rankings change between editions; the underlying classes are stable.',
        },
      ],
    },
    {
      id: 'browser',
      title: 'The browser side: XSS, CSRF and cookies',
      lead: 'Same-origin policy and its limits.',
      blocks: [
        { t: 'p', text: 'Browsers isolate sites with the **same-origin policy**: a page from one origin (scheme + host + port) cannot read another’s data. Two classes of bug get around it. **Cross-site scripting (XSS)**: the application puts untrusted text into a page without encoding, so it runs as script *in your origin* with your session. **Cross-site request forgery (CSRF)**: a different site makes the victim’s browser send a request to yours, and the browser attaches the victim’s cookies automatically.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Against XSS', tag: 'output', body: 'Encode output by context; use frameworks that escape by default; set a **Content-Security-Policy** that blocks inline scripts; mark session cookies `HttpOnly` so script cannot read them.' },
            { title: 'Against CSRF', tag: 'requests', body: 'Set cookies `SameSite=Lax` or `Strict`; require an anti-forgery token or a custom header on state-changing requests; never change state on GET.' },
            { title: 'Cookies', tag: 'sessions', body: '`Secure` (HTTPS only), `HttpOnly` (no script access), `SameSite`. Rotate the session ID at login and invalidate it at logout.' },
            { title: 'Headers worth setting', tag: 'hardening', body: '`Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, frame protections (`frame-ancestors`).' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Learn on purpose-built targets', text: 'OWASP Juice Shop, WebGoat and PortSwigger’s Web Security Academy are intentionally vulnerable applications designed to be attacked legally, with explanations. Run them locally or use the hosted labs; do not practise on real sites.' },
      ],
    },
  ],
  sources: [
    'OWASP Foundation (2021). *OWASP Top 10:2021* (owasp.org/Top10).',
    'OWASP. *Cheat Sheet Series* (cheatsheetseries.owasp.org): SQL Injection Prevention, XSS Prevention, CSRF Prevention.',
    'Stuttard, D. & Pinto, M. (2011). *The Web Application Hacker’s Handbook* (2nd ed.). Wiley.',
    'PortSwigger. *Web Security Academy* (portswigger.net/web-security).',
  ],
  related: ['cybersecurity/foundations/threat-modelling', 'cybersecurity/red-and-blue/pentest-theory', 'cybersecurity/red-and-blue/vulnerability-management', 'cybersecurity/cryptography/passwords-and-authentication'],
}

export default guide
