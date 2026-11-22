import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A file system is the bookkeeping that turns a disk full of numbered sectors into named files and folders. Forensic examiners care about the bookkeeping itself: it records when things happened, it often keeps track of files after they are deleted, and the gaps between files can hold fragments of old data. Reading it well is the core skill of disk forensics.',
  nutshell: [
    'Disks are divided into **partitions** (described by an MBR or GPT), each holding a file system such as **NTFS**, **FAT/exFAT**, **ext4** or **APFS**.',
    'In NTFS every file has an entry in the **Master File Table (MFT)**; deleting a file usually just marks the entry and its clusters as free.',
    '**File carving** recovers files from unallocated space by recognising their headers and footers, even when the file system has forgotten them.',
    '**Slack space**, the unused end of a file’s last cluster, can hold remnants of earlier data.',
    '**MACB timestamps** (modified, accessed, changed, born) from many sources are merged into a **timeline**, the single most useful view of what happened when.',
  ],
  sections: [
    {
      id: 'layout',
      title: 'Partitions, sectors and clusters',
      blocks: [
        { t: 'p', text: 'A disk is addressed in **sectors** (traditionally 512 bytes; many modern drives use 4,096 internally). A **Master Boot Record** in sector 0 holds a four-entry partition table; the newer **GUID Partition Table (GPT)** allows many more partitions and keeps a backup copy at the end of the disk. File systems allocate space in **clusters** (blocks) of several sectors each.' },
        {
          t: 'math',
          tex: String.raw`\text{byte offset} = \big(S_{\text{part}} + c \times k\big) \times 512`,
          caption: 'Converting a file-system cluster number into an absolute byte position in a raw disk image, what tools do every time they jump to a file’s data. (NTFS clusters are numbered from the start of the partition.)',
          where: [
            { sym: 'S_{\\text{part}}', def: 'Sector where the partition starts (from the partition table)' },
            { sym: 'c', def: 'Cluster number inside the file system' },
            { sym: 'k', def: 'Sectors per cluster (8 for a typical 4 KiB NTFS cluster)' },
          ],
          syntax: [
            { sym: 'S_{\\text{part}}', say: '“S sub part”: one named quantity, the partition’s starting sector' },
            { sym: 'c \\times k', say: 'cluster number times sectors per cluster gives a sector count inside the partition' },
            { sym: '\\big(\\ldots\\big) \\times 512', say: 'add up the sectors first, then multiply by 512 bytes per sector' },
          ],
          worked: {
            title: 'Cluster 786,432 in a partition starting at sector 2,048',
            steps: [
              String.raw`Sector within the partition: \(786{,}432 \times 8 = 6{,}291{,}456\)`,
              String.raw`Absolute sector: \(2{,}048 + 6{,}291{,}456 = 6{,}293{,}504\)`,
              String.raw`Byte offset: \(6{,}293{,}504 \times 512 = 3{,}222{,}274{,}048\)`,
            ],
            answer: String.raw`The cluster begins 3,222,274,048 bytes (about 3.0 GiB) into the image. The partition itself starts at \(2{,}048 \times 512 = 1{,}048{,}576\) bytes, exactly 1 MiB, the usual modern alignment.`,
          },
        },
      ],
    },
    {
      id: 'filesystems',
      title: 'The main file systems',
      blocks: [
        {
          t: 'table',
          head: ['File system', 'Where', 'Key structures', 'Deleted files'],
          rows: [
            ['NTFS', 'Windows', 'MFT (1,024-byte records starting “FILE”), $LogFile, $UsnJrnl change journal', 'MFT entry flagged unused; data often intact until overwritten'],
            ['FAT32 / exFAT', 'USB sticks, SD cards, cameras', 'File allocation table, directory entries', 'First byte of directory entry set to 0xE5 (FAT); cluster chain cleared'],
            ['ext4', 'Linux, Android (historically)', 'Inodes, extents, journal', 'Extent information often zeroed, making recovery harder; carving still works'],
            ['APFS', 'macOS, iOS', 'Copy-on-write, snapshots, native encryption', 'Snapshots may hold older versions of files'],
          ],
        },
        {
          t: 'terms',
          items: [
            { term: '$STANDARD_INFORMATION', def: 'NTFS attribute holding the timestamps Windows shows users; easy for programs to change.' },
            { term: '$FILE_NAME', def: 'NTFS attribute with a second set of timestamps, updated mainly by the kernel. Mismatches with $SI can reveal **timestomping**.' },
            { term: 'Unallocated space', def: 'Clusters the file system considers free, which may still contain old data.' },
            { term: 'File slack', def: 'Space between the end of a file and the end of its last cluster.' },
          ],
        },
        { t: 'example', title: 'How much slack?', lines: [
          { label: 'File', text: '10,000 bytes, on a file system with 4,096-byte clusters' },
          { label: 'Clusters used', text: '3 clusters = 12,288 bytes (two are not enough: 8,192 < 10,000)' },
          { label: 'Slack', text: '12,288 − 10,000 = 2,288 bytes that may hold remnants of whatever used those clusters before' },
        ] },
      ],
    },
    {
      id: 'recovery',
      title: 'Recovering deleted data',
      blocks: [
        {
          t: 'table',
          head: ['File type', 'Header (hex)', 'Footer'],
          rows: [
            ['JPEG', 'FF D8 FF', 'FF D9'],
            ['PNG', '89 50 4E 47 0D 0A 1A 0A', '49 45 4E 44 AE 42 60 82 (IEND chunk)'],
            ['PDF', '25 50 44 46 (“%PDF”)', '25 25 45 4F 46 (“%%EOF”)'],
            ['ZIP / DOCX / XLSX', '50 4B 03 04 (“PK”)', 'End-of-central-directory record'],
          ],
          caption: 'Carving tools (PhotoRec, Scalpel, Foremost, and those built into Autopsy) scan raw data for these signatures.',
        },
        { t: 'callout', tone: 'warn', title: 'SSDs change the picture', text: 'On solid-state drives the operating system sends **TRIM** commands for deleted blocks, and the drive may erase them in the background. Deleted data on an SSD can vanish within minutes, which makes recovery far less predictable than on spinning disks.' },
      ],
    },
    {
      id: 'timelines',
      title: 'Timestamps and timelines',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'M, modified', body: 'File content last changed.', tag: 'content' },
            { title: 'A, accessed', body: 'Last read; Windows often does not update it by default, so it is weak evidence.', tag: 'read' },
            { title: 'C, changed', body: 'Metadata (MFT record or inode) last changed, not the same as content.', tag: 'metadata' },
            { title: 'B, born', body: 'Creation time on this volume; copying a file usually gives the copy a new birth time.', tag: 'created' },
          ],
        },
        {
          t: 'code',
          lang: 'python',
          title: 'Converting a Windows FILETIME',
          code: `from datetime import datetime, timedelta, timezone

# FILETIME = 100-nanosecond intervals since 1601-01-01 UTC
ft = 133500000000000000
print(datetime(1601, 1, 1, tzinfo=timezone.utc) + timedelta(microseconds=ft // 10))
# 2024-01-17 21:20:00+00:00`,
          caption: 'Every artefact family has its own epoch, Unix (1970), Windows FILETIME and Chrome (1601), Apple Cocoa (2001), and getting it or the time zone wrong is a classic error.',
        },
        {
          t: 'flow',
          title: 'A super-timeline',
          nodes: [
            { label: 'Disk image', tone: 'data' },
            { label: 'Extract', sub: 'file system, registry, logs, browser, prefetch…', tone: 'process' },
            { label: 'Normalise', sub: 'one time zone, one format', tone: 'process' },
            { label: 'Sort and filter', sub: 'around key events', tone: 'model' },
            { label: 'Interpret', sub: 'test hypotheses', tone: 'human' },
          ],
          caption: 'Tools such as Plaso (log2timeline) and The Sleuth Kit’s mactime automate the extraction; interpretation is still the examiner’s job.',
        },
      ],
    },
  ],
  sources: [
    'Carrier, B. (2005). *File System Forensic Analysis*. Addison-Wesley.',
    'Casey, E. (2011). *Digital Evidence and Computer Crime* (3rd ed.). Academic Press.',
    'Garfinkel, S. L. (2007). Carving contiguous and fragmented files with fast object validation. *Digital Investigation*, 4S, S2–S12.',
  ],
  related: ['forensics/digital-evidence/foundations-and-acquisition', 'forensics/digital-investigation/anti-forensics-and-encryption', 'forensics/digital-investigation/tools-and-labs'],
}

export default guide
