import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Digital evidence is fragile in a way a knife is not: simply switching a computer on changes thousands of files, and anything in memory vanishes when the power goes. Digital forensics therefore starts with a short list of principles, do not change the original, capture the most volatile data first, work on verified copies, and record everything, and a piece of mathematics, the cryptographic hash, that lets you prove a copy is exact.',
  nutshell: [
    'The UK **ACPO** principles, **NIST SP 800-86** and **ISO/IEC 27037** all say the same core things: preserve the original, be competent, keep an audit trail, and make your work repeatable.',
    'Collect in the **order of volatility** (RFC 3227): CPU and memory before disk, disk before archived backups.',
    'Storage is copied bit-for-bit into a **forensic image** through a **write blocker**, so the original is never written to.',
    'A **hash** (SHA-256, often alongside MD5 or SHA-1) is computed for the original and the image; matching values show the copy is exact.',
    'A one-bit change scrambles the whole hash (the **avalanche effect**), and accidental SHA-256 collisions are so unlikely they can be ignored.',
  ],
  sections: [
    {
      id: 'principles',
      title: 'The principles',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'ACPO 1, do not change the data', body: 'No action should change data that may later be relied on in court.' },
            { title: 'ACPO 2, competence', body: 'If original data must be accessed (for example on a live system), the person must be competent and able to explain the effect of their actions.' },
            { title: 'ACPO 3, audit trail', body: 'Record every process applied, so an independent examiner could repeat it and get the same result.' },
            { title: 'ACPO 4, responsibility', body: 'The officer in charge is responsible for ensuring the law and these principles are followed.' },
          ],
        },
        {
          t: 'table',
          head: ['Framework', 'Phases or focus'],
          rows: [
            ['ACPO Good Practice Guide (UK, v5, 2012)', 'Four principles above; widely cited internationally'],
            ['NIST SP 800-86 (US, 2006)', 'Collection → examination → analysis → reporting'],
            ['ISO/IEC 27037 (2012)', 'Identification, collection, acquisition, preservation; auditability, repeatability, reproducibility, justifiability'],
            ['RFC 3227 (2002)', 'Guidelines for evidence collection, including the order of volatility'],
          ],
        },
      ],
    },
    {
      id: 'volatility',
      title: 'Order of volatility',
      blocks: [
        {
          t: 'levels',
          caption: 'From RFC 3227, most volatile first is collected first, shown here as a ladder from least to most volatile.',
          items: [
            { name: 'Archival media', body: 'Backups and offline storage, stable for years.' },
            { name: 'Physical configuration, network topology', body: 'How systems are connected.' },
            { name: 'Remote logs and monitoring data', body: 'Retained for days to months, then rotated.' },
            { name: 'Disk', body: 'Persistent, but overwritten by ongoing use.' },
            { name: 'Temporary file systems', body: 'Cleared on reboot.' },
            { name: 'Routing and ARP tables, process table, kernel statistics, memory', body: 'Lost at power-off.' },
            { name: 'Registers and cache', body: 'Change every nanosecond.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Pulling the plug is a decision', text: 'Powering off a running computer preserves the disk but destroys memory, including encryption keys for a disk that may be unreadable once locked. Responders now often capture memory first (see [memory forensics](@forensics/digital-evidence/memory-forensics)) and document each action. Phones are isolated from networks, for example in a Faraday bag, to stop remote wiping.' },
      ],
    },
    {
      id: 'imaging',
      title: 'Imaging behind a write blocker',
      blocks: [
        { t: 'p', text: 'A **write blocker** sits between the evidence drive and the examiner’s computer, passing read commands and blocking anything that would write. The drive is then copied sector by sector, including unallocated space and deleted data, into a raw image (often called a “dd” image) or a container format such as **E01** that stores the data compressed alongside case notes and hashes.' },
        {
          t: 'code',
          lang: 'bash',
          title: 'Verifying an image (illustrative, on a training image)',
          code: `# hash the image file after acquisition
sha256sum case042.dd
# compare against the value recorded by the imaging tool at acquisition;
# matching hashes = bit-for-bit identical copy

# the avalanche effect: change one letter
printf 'chain of custody' | sha256sum
5a77bdc97e1a5cdb8b99a3f6163306eb890f6b0c9b660c71b62fa9a176e75297  -
printf 'Chain of custody' | sha256sum
6bdbbca0d11a3eb2759f80bc2638f785f5118e23b8d4086485b6b5a2e0912d9c  -`,
          caption: 'Changing a single character (c → C) changes the hash completely; there is no way to tell from the hashes how similar the inputs were.',
        },
        { t: 'callout', tone: 'fact', title: 'Broken does not always mean useless', text: 'MD5 (collisions demonstrated 2004) and SHA-1 (the 2017 “SHAttered” collision) are broken for security: someone can deliberately craft two different files with the same hash. For integrity checks against accidental change they still work, but labs now record SHA-256 so no one can argue the evidence was swapped for a crafted twin.' },
      ],
    },
    {
      id: 'collisions',
      title: 'How unlikely is an accidental collision?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(\text{collision}) \approx 1 - e^{-n^2/2^{b+1}} \approx \frac{n^2}{2^{\,b+1}}`,
          caption: 'The birthday bound: the probability that any two of n random files share a b-bit hash. The approximation on the right holds when the probability is small. It covers chance collisions only, not deliberate attacks.',
          where: [
            { sym: 'n', def: 'Number of distinct files hashed' },
            { sym: 'b', def: 'Hash length in bits: 128 for MD5, 160 for SHA-1, 256 for SHA-256' },
          ],
          syntax: [
            { sym: '\\approx', say: '“is approximately equal to”' },
            { sym: '2^{b+1}', say: '“two to the power b plus one”: the number of possible hash values, doubled' },
            { sym: 'e^{-x}', say: '“e to the minus x”: for tiny x it is about 1 − x, which gives the simpler right-hand form' },
          ],
          worked: {
            title: 'A trillion files',
            steps: [
              String.raw`\(n = 10^{12}\), so \(n^2 = 10^{24}\)`,
              String.raw`SHA-256: \(2^{257} \approx 2.32 \times 10^{77}\), so \(P \approx 10^{24} / 2.32 \times 10^{77} \approx 4.3 \times 10^{-54}\)`,
              String.raw`MD5 for comparison: \(2^{129} \approx 6.81 \times 10^{38}\), so \(P \approx 1.5 \times 10^{-15}\)`,
            ],
            answer: String.raw`Even across a trillion files, an accidental SHA-256 collision has a probability around \(10^{-54}\), far less likely than any other source of error. MD5’s weakness is deliberate collisions, not chance ones.`,
          },
        },
      ],
    },
  ],
  sources: [
    'Association of Chief Police Officers (2012). *ACPO Good Practice Guide for Digital Evidence* (v5).',
    'Kent, K., Chevalier, S., Grance, T., & Dang, H. (2006). *Guide to Integrating Forensic Techniques into Incident Response* (NIST SP 800-86).',
    'ISO/IEC 27037:2012. *Guidelines for identification, collection, acquisition and preservation of digital evidence*.',
    'Brezinski, D., & Killalea, T. (2002). *Guidelines for Evidence Collection and Archiving* (RFC 3227).',
    'Stevens, M., et al. (2017). The first collision for full SHA-1. *CRYPTO 2017*.',
  ],
  related: ['forensics/digital-evidence/file-systems-and-timelines', 'forensics/digital-evidence/memory-forensics', 'forensics/crime-scene/scene-and-evidence'],
}

export default guide
