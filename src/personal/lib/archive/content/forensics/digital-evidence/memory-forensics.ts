import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Everything a computer is doing right now lives in RAM: running programs, open network connections, typed commands, decrypted documents and encryption keys. Much of it never touches the disk. Memory forensics captures that state before it disappears and reconstructs it afterwards, and it is especially powerful against malware designed to leave nothing on disk.',
  nutshell: [
    'RAM is **volatile**: lost at power-off, and changing every moment while the machine runs.',
    'Acquisition uses tools such as **WinPmem**, **DumpIt** or **Magnet RAM Capture** on Windows and **LiME** or **AVML** on Linux; the tool itself changes a little memory, which is documented.',
    'Windows also leaves memory on disk in **hiberfil.sys**, **pagefile.sys** and crash dumps.',
    'Frameworks like **Volatility 3** parse the operating system’s internal structures to list processes, network connections, loaded modules and more.',
    'Comparing what the operating system *reports* with what is *actually in memory* exposes hidden or injected code.',
  ],
  sections: [
    {
      id: 'why',
      title: 'What lives only in memory',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Processes and threads', body: 'What is running, its parent, its command line and when it started.', tag: 'execution' },
            { title: 'Network state', body: 'Open sockets and connections, including ones that close seconds later.', tag: 'network' },
            { title: 'Injected and fileless code', body: 'Malicious code loaded straight into another process with no file on disk.', tag: 'malware' },
            { title: 'Keys and credentials', body: 'Disk-encryption keys, cached passwords and tokens in use.', tag: 'secrets' },
            { title: 'Decrypted content', body: 'Documents, chats and web pages in their readable form.', tag: 'content' },
            { title: 'Command history', body: 'Recent console commands, clipboard contents.', tag: 'activity' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Locard, digitally', text: 'Running any acquisition tool loads it into memory and overwrites a little of what was there. This is acceptable under ACPO principle 2 if the examiner is competent, chooses a small trusted tool, records exactly what was run and when, and can explain the impact.' },
      ],
    },
    {
      id: 'acquire',
      title: 'Acquiring memory',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Decide and document', body: 'Note the system state, time (against a reliable clock), screen contents and who is present.' },
            { title: 'Run a trusted tool from external media', body: 'Write the dump to an external drive or network share, never to the evidence system’s own disk.' },
            { title: 'Hash the dump', body: 'Record the hash immediately, as for a disk image.' },
            { title: 'Collect supporting data', body: 'Note the exact OS version (needed to interpret structures); collect the pagefile and hibernation file later from the disk image.' },
            { title: 'Then the disk', body: 'Shut down or image live according to the plan, memory first, because it cannot be recovered afterwards.' },
          ],
        },
        { t: 'p', text: 'For virtual machines and cloud servers, memory can often be captured from outside by snapshotting the VM, which avoids running anything inside the suspect system.' },
      ],
    },
    {
      id: 'analysis',
      title: 'Analysis with Volatility',
      blocks: [
        {
          t: 'code',
          lang: 'bash',
          title: 'Typical first Volatility 3 commands on a Windows memory image',
          code: `vol -f memdump.raw windows.info       # OS version and capture time
vol -f memdump.raw windows.pslist     # processes via the OS's linked list
vol -f memdump.raw windows.psscan     # processes found by scanning raw memory
vol -f memdump.raw windows.pstree     # parent-child relationships
vol -f memdump.raw windows.cmdline    # command line of each process
vol -f memdump.raw windows.netscan    # network connections and sockets
vol -f memdump.raw windows.malfind    # memory regions that look like injected code`,
          caption: 'Practise on public training images (listed on the tools and labs page); plugin names follow Volatility 3.',
        },
        {
          t: 'table',
          head: ['Observation', 'Why it is suspicious'],
          rows: [
            ['Process appears in psscan but not pslist', 'It may have been unlinked from the OS’s process list to hide it'],
            ['svchost.exe whose parent is not services.exe', 'Legitimate svchost is started by services.exe; others are often impostors'],
            ['A process named like a system file but running from a user folder', 'Masquerading, real system binaries live in system directories'],
            ['Executable, writable memory with no file behind it', 'Typical of injected code (what malfind looks for); some legitimate software does this too'],
            ['Office application spawning a command shell', 'A classic sign of a malicious document executing code'],
          ],
          caption: 'Each is a lead to investigate, not proof, legitimate software produces some of these patterns.',
        },
        { t: 'callout', tone: 'tip', title: 'Know normal first', text: 'Most of memory analysis is spotting what does not fit. Learning what a clean system’s process tree looks like (the SANS “Hunt Evil” poster is a popular reference) makes anomalies jump out.' },
      ],
    },
  ],
  sources: [
    'Ligh, M. H., Case, A., Levy, J., & Walters, A. (2014). *The Art of Memory Forensics*. Wiley.',
    'Volatility Foundation. *Volatility 3 documentation*.',
    'Kent, K., et al. (2006). NIST SP 800-86, section 5 (data from operating systems).',
  ],
  related: ['forensics/digital-evidence/foundations-and-acquisition', 'forensics/digital-investigation/incident-response-and-malware', 'forensics/digital-investigation/tools-and-labs'],
}

export default guide
