import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Encryption in the cloud is easy to switch on and easy to misunderstand. Turning it on for storage protects against theft of a disk, not against a stolen credential that is allowed to read the data. What matters is who controls the keys, how they are used and who may call them. This guide covers encryption at rest and in transit, the envelope-encryption pattern used by every major key-management service, key rotation, secret handling, and the limits of random nonces in authenticated encryption.',
  nutshell: [
    '**At rest**: data on disk or in object storage is encrypted (AES-256). **In transit**: TLS between client and service and between services. **In use**: confidential computing protects data in memory (emerging).',
    '**Envelope encryption:** a unique **data key** encrypts each object; a **key-encryption key** (KEK) in a **KMS/HSM** encrypts the data keys. Only the small data key ever goes to the KMS.',
    '**Key policy decides access**: anyone allowed to call `Decrypt` on the key can read the data, so encryption shifts the question to IAM on the key.',
    '**Secrets** (passwords, API keys, tokens) belong in a secrets manager with rotation, never in code, images or environment files in a repo.',
  ],
  sections: [
    {
      id: 'layers',
      title: 'What encryption does and does not do',
      lead: 'Threats it addresses.',
      blocks: [
        {
          t: 'table',
          head: ['Control', 'Protects against', 'Does not protect against'],
          rows: [
            ['Encryption at rest, provider-managed keys', 'Lost or stolen disks; improper disposal of hardware; some insider access at the provider', 'A stolen credential or misconfigured policy that is allowed to read the data (decryption is transparent)'],
            ['Customer-managed keys (CMK)', 'Same, plus: you control key policy, rotation, audit, and can revoke access ("crypto-shredding")', 'Compromise of identities allowed to use the key'],
            ['Client-side encryption', 'The provider itself or anyone with storage access seeing plaintext', 'A compromised application that holds the key; loss of key means loss of data'],
            ['TLS in transit', 'Eavesdropping and tampering on the network', 'A compromised endpoint'],
            ['Confidential computing (enclaves / confidential VMs)', 'Reading memory of running workloads, even by the host operator', 'Application bugs; side-channel attacks remain an active research area'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Where the real risk is', text: 'In breach reports, data is rarely stolen by breaking AES. It is read by a legitimate-looking identity that had access. Encryption is necessary, but identity, network paths and monitoring protect the data in practice.' },
      ],
    },
    {
      id: 'envelope',
      title: 'Envelope encryption',
      lead: 'How KMS works.',
      blocks: [
        {
          t: 'flow',
          title: 'Encrypting and decrypting an object',
          nodes: [
            { label: 'App asks KMS', sub: 'GenerateDataKey(KEK id)', tone: 'human' },
            { label: 'KMS returns', sub: 'plaintext data key + the same key encrypted under the KEK', tone: 'process' },
            { label: 'App encrypts data', sub: 'AES-GCM with the data key; then discards the plaintext key', tone: 'model' },
            { label: 'Store together', sub: 'ciphertext + encrypted data key', tone: 'data' },
            { label: 'To read: ask KMS to Decrypt', sub: 'the data key; IAM and key policy checked; audited', tone: 'output' },
          ],
          caption: 'The KEK never leaves the KMS/HSM. The bulk data never travels to the KMS.',
        },
        { t: 'p', text: 'Why not encrypt everything directly with the KMS key? Because KMS calls are slow and size-limited (typically 4 KB per call), and using one key for all data would put all of it at risk from one compromise and make rotation require re-encrypting everything. With envelope encryption each object has its own data key, a compromise exposes one object, and **rotating the KEK** only needs the small data keys re-wrapped, not the data.' },
        {
          t: 'math',
          tex: String.raw`C=\mathrm{AEAD}_{K_d}(N,\,M,\,\text{aad}),\qquad W=\mathrm{Enc}_{KEK}(K_d),\qquad \Pr[\text{nonce collision}]\approx\frac{q^{2}}{2^{97}}\ \ (\text{96-bit random nonces})`,
          caption: 'An authenticated encryption of a message M under a data key K_d with nonce N; the wrapped data key; and the birthday bound on random 96-bit nonces after q messages under one key.',
          where: [{ sym: 'N', def: 'a nonce (number used once): must never repeat under the same key' }, { sym: '\\text{aad}', def: 'additional authenticated data, such as object ID, bound to the ciphertext but not encrypted' }, { sym: 'q', def: 'the number of messages encrypted under the same key' }],
          syntax: [
            { sym: '\\mathrm{AEAD}', say: 'authenticated encryption with associated data (AES-GCM, ChaCha20-Poly1305): confidentiality plus an integrity tag. Effect: tampering with the ciphertext or the aad is detected. Why: encryption alone does not stop modification.' },
            { sym: 'q^2/2^{97}', say: 'the birthday bound for 96-bit random nonces: the chance two of q messages share a nonce is about \\(q^2/(2\\cdot2^{96})\\). Effect: nonce reuse in GCM is catastrophic (it reveals the authentication key and lets plaintexts be XORed). Why: the bound is why guidance limits any one key to about \\(2^{32}\\) random-nonce messages.' },
          ],
          worked: {
            title: 'How many messages per key?',
            steps: ['q = 2³² ≈ 4.3 billion messages: collision probability \\(\\approx2^{64}/2^{97}=2^{-33}\\approx1.2\\times10^{-10}\\).', 'q = 2⁴⁰: \\(2^{80}/2^{97}=2^{-17}\\approx 7.6\\times10^{-6}\\). Much too risky for a safety margin.', 'Per-object data keys sidestep the question: each key encrypts only a few messages.'],
            answer: 'Envelope encryption with a fresh key per object makes nonce management trivial, and bounds the effect of any key compromise.',
          },
        },
      ],
    },
    {
      id: 'keys',
      title: 'Key lifecycle and secrets',
      lead: 'Where leaks happen.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Rotation', tag: 'limit exposure', body: 'Rotate KEKs automatically (annually or sooner); old versions stay able to decrypt old data. Rotate secrets after staff changes or suspected exposure.' },
            { title: 'HSM-backed', tag: 'hardware root', body: 'Keys generated and used inside tamper-resistant hardware (FIPS 140-3) that never exports them. Dedicated HSMs add single-tenant control; external key stores keep keys outside the provider.' },
            { title: 'Separation', tag: 'who can do what', body: 'Different principals administer a key (rotate, delete, edit policy) and use it (encrypt, decrypt). No one should be both without oversight; deleting a key destroys all its data, so use deletion waiting periods.' },
            { title: 'Audit', tag: 'every use logged', body: 'Every `Decrypt` call appears in the audit log (CloudTrail, Cloud Audit Logs). Alert on unusual callers, volumes or regions.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Store secrets in a secrets manager (AWS Secrets Manager, Azure Key Vault, Google Secret Manager, HashiCorp Vault) and fetch them at runtime with the workload’s identity.', 'Prefer short-lived tokens and dynamic credentials over static passwords.', 'Scan repositories and images for secrets in CI, and revoke any that leak immediately: assume a pushed secret is public.'],
          dont: ['Commit keys to Git, even in a private repository or "deleted" history.', 'Bake credentials into container images or AMIs.', 'Share one key between environments or let developers copy production secrets locally.'],
        },
      ],
    },
  ],
  sources: [
    'NIST (2020). *SP 800-57 Part 1 Rev. 5: Recommendation for Key Management*.',
    'AWS. *KMS Cryptographic Details* whitepaper; Google Cloud *Encryption at rest*; Azure *Key Vault* documentation.',
    'McGrew, D. & Viega, J. (2004). *The Galois/Counter Mode of Operation (GCM)*; Dworkin, M. (2007), *NIST SP 800-38D*.',
    'OWASP. *Secrets Management Cheat Sheet*.',
  ],
  related: ['cybersecurity/cryptography/crypto-foundations', 'cybersecurity/cryptography/tls-and-pki', 'cloud/cloud-security/iam-and-zero-trust', 'cloud/cloud-security/cloud-red-and-blue'],
}

export default guide
