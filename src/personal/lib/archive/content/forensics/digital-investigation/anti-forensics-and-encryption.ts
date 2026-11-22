import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anti-forensics means attempts to destroy, hide or falsify digital evidence, wiping files, editing timestamps, clearing logs, encrypting data or hiding it inside other files. Some of these are also ordinary privacy and security practices: encryption protects nearly everyone. This page is written from the examiner’s side: how each technique works in principle, and the traces that usually reveal it.',
  nutshell: [
    'Most anti-forensic actions **leave their own traces**: the wiping tool’s execution history, an unexpected log-cleared event, timestamps that disagree with each other.',
    '**Timestomping** changes the timestamps users see, but NTFS keeps a second set and a change journal that often do not match.',
    '**Encryption** cannot usually be broken; investigators look for keys in memory, backups, recovery keys or lawful compulsion.',
    '**Steganography** hides data inside images or audio; **steganalysis** looks for statistical fingerprints of that hiding.',
    '**Shannon entropy** measures how random data looks: encrypted and compressed data score close to 8 bits per byte, which helps flag hidden containers.',
  ],
  sections: [
    {
      id: 'techniques',
      title: 'Techniques and their tell-tale signs',
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'What it does', 'What examiners look for'],
          rows: [
            ['Wiping / secure deletion', 'Overwrites file contents or free space', 'Execution traces of wiping tools (prefetch, registry, shortcut files); large zero-filled or patterned regions; MFT entries with no matching data'],
            ['Timestomping', 'Alters file timestamps to blend in', '$STANDARD_INFORMATION and $FILE_NAME times that disagree; times with zeroed sub-second precision; change-journal ($UsnJrnl) entries out of sequence'],
            ['Log clearing', 'Deletes event logs to remove a record', 'The clearing itself is logged (Windows Security event 1102, System event 104); gaps in log sequence numbers; copies in a central log server'],
            ['Encryption', 'Makes data unreadable without a key', 'Encryption software artefacts; high-entropy files or partitions; keys in memory or recovery keys stored elsewhere'],
            ['Steganography', 'Hides data inside a carrier file', 'Stego tool artefacts; carrier files with statistical anomalies; duplicate images with different hashes'],
            ['Artefact minimisation', 'Private browsing, live operating systems, deleting histories', 'Network and DNS logs, cloud records, other devices, memory'],
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: you need 35 passes to wipe a drive', text: 'The “Gutmann method” targeted encoding schemes of 1990s drives. NIST SP 800-88 notes that for modern hard drives a single overwrite is sufficient to defeat practical recovery; for SSDs, the drive’s built-in sanitise or cryptographic erase is more reliable than overwriting.' },
      ],
    },
    {
      id: 'entropy',
      title: 'Entropy: measuring randomness',
      blocks: [
        {
          t: 'math',
          tex: String.raw`H = -\sum_{i} p_i \log_2 p_i`,
          caption: 'Shannon entropy: the average number of bits of information per symbol. For bytes, the maximum is 8 bits (all 256 values equally likely). Tools compute it in sliding windows over a disk image to find regions that look random.',
          where: [
            { sym: 'p_i', def: 'The fraction of symbols (or bytes) that take the i-th value' },
            { sym: 'H', def: 'Entropy in bits per symbol' },
          ],
          syntax: [
            { sym: '\\sum_{i}', say: '“the sum over i”: one term for each distinct value that appears' },
            { sym: '\\log_2 p_i', say: '“log base 2 of p sub i”: the power you raise 2 to in order to get p, negative for any p below 1, hence the minus sign in front' },
            { sym: 'p_i \\log_2 p_i', say: 'weight each value’s “surprise” by how often it occurs' },
          ],
          worked: {
            title: 'The 8-character string AAAABBCD',
            steps: [
              String.raw`Counts: A = 4, B = 2, C = 1, D = 1, so \(p = 0.5, 0.25, 0.125, 0.125\)`,
              String.raw`\(\log_2\): \(-1, -2, -3, -3\)`,
              String.raw`Products \(p_i \log_2 p_i\): \(-0.5, -0.5, -0.375, -0.375\)`,
              String.raw`\(H = -(-0.5 - 0.5 - 0.375 - 0.375) = 1.75\) bits per character`,
            ],
            answer: String.raw`1.75 bits per character, against a maximum of 2 bits for four equally likely symbols. A file of random bytes measures about 7.9998 bits per byte; ordinary English text roughly 4–5.`,
          },
        },
        {
          t: 'plot',
          title: 'Entropy of a two-symbol source',
          x: [0, 1],
          y: [0, 1.1],
          xLabel: 'probability of the first symbol',
          yLabel: 'bits per symbol',
          curves: [{ f: (p: number) => (p <= 0 || p >= 1 ? 0 : -(p * Math.log2(p) + (1 - p) * Math.log2(1 - p))), label: 'H(p)' }],
          points: [{ x: 0.5, y: 1, label: 'maximum: a fair coin' }],
          caption: 'Entropy peaks when outcomes are equally likely and falls to zero when one outcome is certain.',
        },
        { t: 'callout', tone: 'warn', title: 'High entropy is not proof of encryption', text: 'Compressed files (ZIP, JPEG, MP4) also score near 8 bits per byte. A large high-entropy file with no recognisable header, a round-number size and no matching application is a lead, for example a possible encrypted container, not a conclusion.' },
      ],
    },
    {
      id: 'stego',
      title: 'Steganography and steganalysis',
      blocks: [
        { t: 'p', text: 'The simplest image steganography replaces the **least significant bit** of each pixel value with a bit of the hidden message. The picture looks identical, but the statistics of those low bits change: pairs of values that are normally unequal in frequency become suspiciously equal.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Chi-square attack', body: 'Westfeld and Pfitzmann (1999): tests whether pairs of colour values have been equalised by embedding.', tag: 'statistical' },
            { title: 'RS analysis', body: 'Fridrich and colleagues (2001): estimates how much of an image has been embedded by measuring how flipping bits changes smoothness.', tag: 'statistical' },
            { title: 'Known-cover comparison', body: 'If the original image can be found online, comparing hashes and pixels reveals any change at once.', tag: 'practical' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The legal angle on encryption', text: 'Some jurisdictions can require a person to provide a key or password, for example under Part III of the UK’s Regulation of Investigatory Powers Act 2000, while others treat this as self-incrimination. Investigators also look for recovery keys stored in accounts or printed out.' },
      ],
    },
  ],
  sources: [
    'Kissel, R., et al. (2014). *Guidelines for Media Sanitization* (NIST SP 800-88 Rev. 1).',
    'Westfeld, A., & Pfitzmann, A. (1999). Attacks on steganographic systems. *Information Hiding*, LNCS 1768, 61–76.',
    'Fridrich, J., Goljan, M., & Du, R. (2001). Reliable detection of LSB steganography in color and grayscale images. *Proc. ACM Workshop on Multimedia and Security*.',
    'Shannon, C. E. (1948). A mathematical theory of communication. *Bell System Technical Journal*, 27, 379–423.',
  ],
  related: ['forensics/digital-evidence/file-systems-and-timelines', 'forensics/digital-evidence/memory-forensics', 'forensics/digital-investigation/incident-response-and-malware'],
}

export default guide
