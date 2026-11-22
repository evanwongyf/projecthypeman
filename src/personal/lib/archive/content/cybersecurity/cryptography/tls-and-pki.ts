import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The padlock in a browser stands for a protocol, TLS, that gives a conversation with a stranger three properties: nobody else can read it, nobody can alter it undetected, and you are talking to the real site. The third depends on the public-key infrastructure: a chain of certificates ending in a small set of trusted authorities. This guide walks the handshake, explains certificates and chains of trust, and states clearly what HTTPS does not promise.',
  nutshell: [
    'TLS 1.3 handshake: client and server do an **ephemeral key exchange** (ECDHE), the server proves its identity with a **certificate** and a signature, and both derive symmetric keys for the session.',
    'A **certificate** binds a domain name to a public key, signed by a **certificate authority (CA)**; browsers trust a built-in list of root CAs and follow the **chain**.',
    '**Forward secrecy:** because the session keys come from throwaway exchange keys, stealing the server’s long-term key later does not decrypt recorded traffic.',
    'HTTPS protects the **channel**, not the **site**: a phishing site can have a perfectly valid padlock.',
  ],
  sections: [
    {
      id: 'handshake',
      title: 'The TLS 1.3 handshake',
      lead: 'One round trip.',
      blocks: [
        {
          t: 'flow',
          title: 'What happens when you open an https:// page',
          nodes: [
            { label: 'ClientHello', sub: 'supported ciphers, key share (client’s DH public value)', tone: 'human' },
            { label: 'ServerHello', sub: 'chosen cipher, server’s DH public value', tone: 'model' },
            { label: 'Keys derived', sub: 'both compute the shared secret; handshake encrypted from here', tone: 'process' },
            { label: 'Certificate + signature', sub: 'server proves it holds the key for the name', tone: 'data' },
            { label: 'Finished', sub: 'both confirm the transcript; application data flows', tone: 'output' },
          ],
          caption: 'TLS 1.3 completes the handshake in one round trip (RFC 8446). Earlier versions needed two.',
        },
        { t: 'p', text: 'The key exchange is Diffie–Hellman (see the public-key guide) with fresh values each time, which gives **forward secrecy**. The server then signs the handshake transcript with the private key matching its certificate; the client verifies the signature and the certificate. The bulk data is protected with an authenticated cipher (AES-GCM or ChaCha20-Poly1305) using keys derived from the shared secret.' },
      ],
    },
    {
      id: 'pki',
      title: 'Certificates and the chain of trust',
      lead: 'Who vouches for whom.',
      blocks: [
        {
          t: 'cycle',
          caption: 'Chain validation, as the browser does it.',
          items: [
            { name: 'Leaf certificate', body: 'Issued for example.com: contains the public key, the name(s), validity dates, and the issuer’s signature.' },
            { name: 'Intermediate CA', body: 'Signs leaf certificates day to day; its certificate is sent with the leaf. Keeps the root key offline.' },
            { name: 'Root CA', body: 'A self-signed certificate already in the browser or operating-system trust store (about 150 roots).' },
            { name: 'Checks', body: 'Each signature verifies up to a trusted root; the name matches; dates are valid; the certificate is not revoked (OCSP stapling, CRL) and appears in Certificate Transparency logs.' },
          ],
        },
        { t: 'p', text: 'Any trusted CA can issue a certificate for any name, so one compromised or careless CA weakens everyone. Two mechanisms limit the damage: **Certificate Transparency** (all issued certificates are published in public append-only logs, so a mis-issued one can be detected by the domain owner) and short lifetimes (public certificates now last at most about 13 months, and the industry is moving toward 90 days or less, with automation by ACME clients like Let’s Encrypt).' },
        {
          t: 'math',
          tex: String.raw`\text{valid}\;\Longleftrightarrow\;\forall i:\ \operatorname{Verify}\big(pk_{i+1},\,\text{cert}_i,\,\sigma_i\big)=\text{true}\ \wedge\ pk_{\text{root}}\in\text{TrustStore}`,
          caption: 'Chain validation: each certificate’s signature verifies under the next certificate’s public key, ending at a trusted root.',
          where: [{ sym: 'pk_i', def: 'the public key in certificate i' }, { sym: '\\sigma_i', def: 'the signature on certificate i by its issuer' }],
          syntax: [
            { sym: '\\operatorname{Verify}(pk_{i+1},\\text{cert}_i,\\sigma_i)', say: 'checks that the issuer’s private key signed this certificate. Effect: a forged certificate fails because the attacker cannot produce a valid signature without the private key.' },
            { sym: 'pk_{\\text{root}}\\in\\text{TrustStore}', say: 'the anchor of trust. Effect: trust is not proven, it is configured: the system trusts those roots by decision. Why: some assumption has to start the chain.' },
          ],
          worked: {
            title: 'A mismatch is caught',
            steps: ['An attacker on a café network serves a page for bank.example with a certificate for attacker.example.', 'The chain may validate perfectly, but the browser checks the name in the certificate against the address you typed.', 'No match: a full-page warning.'],
            answer: 'The name check is as important as the signature check. The danger is the user clicking through the warning.',
          },
        },
      ],
    },
    {
      id: 'limits',
      title: 'What the padlock does not mean',
      lead: 'Channel security, not site honesty.',
      blocks: [
        {
          t: 'table',
          head: ['HTTPS protects against', 'HTTPS does not protect against'],
          rows: [
            ['Eavesdropping on the network (Wi-Fi, ISP)', 'A malicious or compromised website (phishing sites commonly have valid certificates)'],
            ['Tampering with pages in transit', 'Malware on your device, or on the server'],
            ['Impersonation of a name by a network attacker', 'The site’s operator misusing your data'],
            ['Leaking passwords on the wire', 'Which site you visit: the domain is visible in DNS and SNI unless Encrypted Client Hello and DNS-over-HTTPS are in use'],
          ],
        },
        { t: 'checklist', items: ['Serve only HTTPS; redirect HTTP and set HSTS so browsers refuse downgrades.', 'Use TLS 1.2 or 1.3 only, with modern ciphers (disable SSLv3, TLS 1.0 and 1.1, RC4, export suites).', 'Automate certificate renewal and monitor expiry; expired certificates cause outages.', 'Monitor Certificate Transparency for unexpected certificates for your domains.', 'Protect private keys in a hardware module or managed key service.'] },
      ],
    },
  ],
  sources: [
    'Rescorla, E. (2018). *RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3*. IETF.',
    'Laurie, B., Langley, A. & Kasper, E. (2013). *RFC 6962: Certificate Transparency*. IETF.',
    'Ristić, I. (2022). *Bulletproof TLS and PKI* (2nd ed.). Feisty Duck.',
    'Mozilla. *Server Side TLS* guidelines (wiki.mozilla.org/Security/Server_Side_TLS).',
  ],
  related: ['cybersecurity/cryptography/public-key-maths', 'cybersecurity/attack-surface/network-security', 'cybersecurity/attack-surface/social-engineering', 'cloud/cloud-security/cloud-encryption'],
}

export default guide
