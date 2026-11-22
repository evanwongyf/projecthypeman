import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Digital forensics is learned by doing, and you never need to touch anyone else’s data to do it. Professional-grade tools are free, and researchers and government agencies publish disk images, memory dumps and packet captures built specifically for training, with realistic scenarios and known answers. This page lists them and suggests a route through.',
  nutshell: [
    'Free tools cover the whole workflow: **FTK Imager** (imaging), **Autopsy / The Sleuth Kit** (disk analysis), **Volatility 3** (memory), **Wireshark** and **Zeek** (network), **Plaso** (timelines).',
    'Practise on published datasets: **NIST CFReDS**, **Digital Corpora**, and DFRWS challenge images.',
    '**Capture-the-flag (CTF)** events and blue-team lab platforms give scored, scenario-based practice.',
    'Work inside a **virtual machine** you can reset, and treat any malware sample as live and dangerous.',
    'Only examine devices and data that are **yours** or that you are explicitly authorised to examine.',
  ],
  sections: [
    {
      id: 'tools',
      title: 'Free and open tools',
      blocks: [
        {
          t: 'table',
          head: ['Tool', 'Use', 'Notes'],
          rows: [
            ['FTK Imager', 'Create and verify disk images, preview evidence, capture memory', 'Free from Exterro; Windows'],
            ['Autopsy / The Sleuth Kit', 'File system analysis, deleted files, keyword search, timelines, carving', 'Open source; a graphical front end over command-line TSK tools'],
            ['Volatility 3', 'Memory analysis', 'Open source, Python'],
            ['Wireshark / tshark', 'Packet capture analysis', 'Open source; huge library of protocol decoders'],
            ['Zeek', 'Turns traffic into structured logs', 'Open source network monitor'],
            ['Plaso (log2timeline)', 'Super-timeline creation', 'Open source; pairs with Timesketch for collaborative review'],
            ['Eric Zimmerman’s tools', 'Parsers for Windows artefacts (MFT, registry, prefetch, event logs)', 'Free; widely used in DFIR'],
            ['CyberChef', 'Decoding, encoding, hashing, data transforms in the browser', 'Open source, from GCHQ'],
            ['ALEAPP / iLEAPP', 'Parse Android and iOS extractions', 'Open source'],
            ['SIFT Workstation', 'A ready-built Linux VM with many of the above', 'Free from SANS'],
          ],
        },
      ],
    },
    {
      id: 'datasets',
      title: 'Legal practice data',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'NIST CFReDS', body: 'The Computer Forensic Reference Data Sets: disk images, mobile images and scenario-based cases with documented contents, made for testing tools and training examiners.', tag: 'government' },
            { title: 'Digital Corpora', body: 'A research collection started by Simson Garfinkel, including realistic scenarios such as the M57-Patents company case with disk images, memory and network captures for a whole fictional office.', tag: 'research' },
            { title: 'DFRWS challenges', body: 'The Digital Forensic Research Workshop’s yearly challenges, many with published solutions.', tag: 'challenges' },
            { title: 'Sample captures', body: 'The Wireshark wiki’s sample captures for learning protocols; malware-traffic training sites publish infected pcaps, handle these only in an isolated VM.', tag: 'network' },
          ],
        },
        { t: 'links', items: [
          { path: 'forensics/digital-evidence/foundations-and-acquisition', note: 'Practise hashing and verifying an image' },
          { path: 'forensics/digital-evidence/file-systems-and-timelines', note: 'Build your first timeline' },
          { path: 'forensics/digital-evidence/memory-forensics', note: 'Run Volatility on a sample dump' },
        ] },
      ],
    },
    {
      id: 'path',
      title: 'A study path',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set up a lab', body: 'A virtual machine (or SIFT) with snapshots, an isolated network and a separate folder for evidence images.' },
            { title: 'Hash and image', body: 'Make a small USB stick image with FTK Imager, record its hash, verify it, write a mini custody log.' },
            { title: 'File system basics', body: 'Load a CFReDS image into Autopsy. Find deleted files, browse the MFT, carve unallocated space.' },
            { title: 'Timeline a scenario', body: 'Use a Digital Corpora scenario; build a Plaso timeline; write a one-page summary of what happened.' },
            { title: 'Memory and network', body: 'Analyse a sample memory image with Volatility and a pcap with Wireshark; link them to the disk timeline.' },
            { title: 'Compete', body: 'Enter CTFs and blue-team labs (for example the annual Magnet Forensics CTF, CyberDefenders, Blue Team Labs Online, Hack The Box Sherlocks).' },
            { title: 'Write it up', body: 'Treat each exercise as a case: a short report with methods, findings and limitations is the best portfolio piece.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Certifications', text: 'Common ones include GIAC’s GCFE and GCFA, OpenText’s EnCE, and the ISFCE’s CCE. They are useful for jobs but expensive; a public portfolio of CTF write-ups and lab reports demonstrates skill too.' },
      ],
    },
    {
      id: 'rules',
      title: 'Ground rules',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use your own devices, published datasets and CTF material.',
            'Keep malware samples zipped with a password and only unpack them in an isolated VM.',
            'Read each dataset’s licence and any CTF rules.',
          ],
          dont: [
            'Image or analyse a friend’s, partner’s, employer’s or school’s device without clear authorisation.',
            'Run captures on networks you do not own or administer.',
            'Try techniques against real systems, that can be an offence under laws like Singapore’s Computer Misuse Act.',
          ],
        },
      ],
    },
  ],
  sources: [
    'NIST. *Computer Forensic Reference Data Sets (CFReDS) portal* (cfreds.nist.gov).',
    'Garfinkel, S., Farrell, P., Roussev, V., & Dinolt, G. (2009). Bringing science to digital forensics with standardized forensic corpora. *Digital Investigation*, 6, S2–S11.',
    'Carrier, B. *The Sleuth Kit and Autopsy documentation* (sleuthkit.org).',
    'SANS Institute. *SIFT Workstation* and DFIR posters.',
  ],
  related: ['forensics/digital-evidence/foundations-and-acquisition', 'forensics/digital-investigation/law-ethics-and-reporting', 'forensics/digital-investigation/incident-response-and-malware'],
}

export default guide
