import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Phones now carry more evidence than any other device: messages, locations, photos, health data, app activity. They are also the hardest to examine, because they are encrypted by default and much of their data actually lives in the cloud. This page covers how phones are acquired, the SQLite databases most apps store data in, and the email, browser and cloud artefacts that complete the picture.',
  nutshell: [
    'Phone acquisition ranges from **manual** (photographing the screen) through **logical** and **full file system** extractions to **physical** and chip-level methods.',
    'Modern iOS and Android encrypt user data with keys tied to the passcode; whether a phone has been unlocked since boot (**AFU**) or not (**BFU**) greatly changes what is accessible.',
    'Most app data lives in **SQLite** databases; deleted records can survive in the **write-ahead log (WAL)** and free pages.',
    'Each platform counts time from its own epoch, Unix 1970, Apple 2001, Windows/Chrome 1601, and converting correctly is basic hygiene.',
    '**Email headers** show the path a message took; **cloud** data is usually obtained from the provider through legal process.',
  ],
  sections: [
    {
      id: 'acquisition',
      title: 'Mobile acquisition levels',
      blocks: [
        {
          t: 'levels',
          caption: 'Each step up recovers more data but needs more access, more specialised tools and more risk to the device.',
          items: [
            { name: 'Manual', body: 'Scrolling through the unlocked phone and photographing the screen. Fast, needs no tools, captures only what is visible.' },
            { name: 'Logical', body: 'Data the operating system will export, much like a backup: contacts, messages, photos, some app data.' },
            { name: 'Full file system', body: 'The whole user file system including app databases and system logs, usually needs the phone unlocked or a software vulnerability.' },
            { name: 'Physical', body: 'A bit-for-bit copy of flash memory. On modern encrypted phones it is of limited use without keys.' },
            { name: 'Chip-off / JTAG / ISP', body: 'Reading memory directly from the circuit board, used mainly for damaged or older devices.' },
          ],
        },
        { t: 'p', text: 'Commercial tools such as Cellebrite UFED, Magnet AXIOM and GrayKey are used by law enforcement; open-source options like ALEAPP and iLEAPP parse Android and iOS extractions. Whatever the tool, the phone is first isolated from networks (airplane mode or a Faraday bag) so it cannot be wiped remotely or receive new data.' },
        { t: 'callout', tone: 'note', title: 'Encryption and lock screens', text: 'iOS Data Protection and Android file-based encryption keep most user data encrypted until the passcode is entered after boot. A phone seized while unlocked-since-boot (AFU) has more data accessible than one that has been powered off (BFU). Compelling suspects to unlock devices is a contested legal question that varies by country.' },
      ],
    },
    {
      id: 'sqlite',
      title: 'SQLite databases and timestamps',
      blocks: [
        {
          t: 'table',
          head: ['Artefact', 'Platform', 'Time format'],
          rows: [
            ['sms.db (Messages)', 'iOS', 'Apple / Cocoa time: seconds (or nanoseconds) since 2001-01-01 UTC'],
            ['mmssms.db', 'Android', 'Unix time in milliseconds since 1970-01-01 UTC'],
            ['Chrome History (urls, visits tables)', 'Windows, macOS, Android', 'WebKit time: microseconds since 1601-01-01 UTC'],
            ['Firefox places.sqlite', 'All', 'Microseconds since 1970-01-01 UTC'],
            ['KnowledgeC.db / Biome', 'iOS / macOS', 'Cocoa time; records app use and device state'],
          ],
        },
        {
          t: 'code',
          lang: 'text',
          title: 'Reading a copy of a Chrome History database (SQLite)',
          code: `SELECT urls.url,
       urls.title,
       datetime(visits.visit_time / 1000000 - 11644473600, 'unixepoch') AS visited_utc
FROM visits JOIN urls ON visits.url = urls.id
ORDER BY visits.visit_time DESC
LIMIT 20;`,
          caption: 'Always work on a copy, and copy the -wal and -shm files with it, the WAL may hold recent or deleted records not yet in the main file. 11,644,473,600 is the number of seconds between 1601 and 1970.',
        },
        { t: 'example', title: 'Converting three timestamps to the same instant', lines: [
          { label: 'Chrome (µs since 1601)', text: '13,350,000,000,000,000 ÷ 10⁶ − 11,644,473,600 = 1,705,526,400 s Unix → 2024-01-17 21:20:00 UTC' },
          { label: 'Android (ms since 1970)', text: '1,705,526,400,000 ÷ 1,000 = 1,705,526,400 → the same moment' },
          { label: 'Apple (s since 2001)', text: '1,705,526,400 − 978,307,200 = 727,219,200 → the same moment again' },
        ] },
      ],
    },
    {
      id: 'email-web-cloud',
      title: 'Email, browser and cloud artefacts',
      blocks: [
        {
          t: 'code',
          lang: 'text',
          title: 'Email headers (simplified, documentation domains)',
          code: `Received: from mail.example.org (mail.example.org [198.51.100.7])
        by mx.example.com; Wed, 17 Jan 2024 21:20:05 +0000
Received: from [192.0.2.44] by mail.example.org; Wed, 17 Jan 2024 21:20:01 +0000
Authentication-Results: mx.example.com; spf=pass; dkim=pass; dmarc=pass
From: Alex <alex@example.org>
Message-ID: <a1b2c3@mail.example.org>`,
          caption: 'Read Received lines from the bottom up: each server adds its line to the top. Only the lines added by servers you trust are reliable; earlier ones can be forged by the sender.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'SPF, DKIM, DMARC', body: 'Checks that the sending server is authorised for the domain (SPF), that the message is signed by it (DKIM), and the domain owner’s policy (DMARC). A pass is strong evidence against simple spoofing.', tag: 'email' },
            { title: 'Browser artefacts', body: 'History, downloads, cookies, cache, autofill and sessions. Private browsing leaves far less on disk, though memory, DNS and network logs may still record activity.', tag: 'web' },
            { title: 'Cloud logs', body: 'Providers keep sign-in and audit logs (for example Microsoft 365 audit logs, AWS CloudTrail). Organisations can export their own; others need legal process.', tag: 'cloud' },
            { title: 'Getting provider data', body: 'Typically via warrants, production orders or mutual legal assistance across borders; the US CLOUD Act (2018) created additional routes for some agreements.', tag: 'legal' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Synchronisation cuts both ways', text: 'Because data syncs, a message deleted on one device may survive on a laptop, a tablet or in a cloud backup, and deleting on one device can also delete everywhere. Seize and preserve related sources quickly.' },
      ],
    },
  ],
  sources: [
    'Tamma, R., Skulkin, O., Mahalik, H., & Bommisetty, S. (2020). *Practical Mobile Forensics* (4th ed.). Packt.',
    'Ayers, R., Brothers, S., & Jansen, W. (2014). *Guidelines on Mobile Device Forensics* (NIST SP 800-101 Rev. 1).',
    'SQLite. *Database File Format* and *Write-Ahead Logging* documentation (sqlite.org).',
    'Brignoni, A., et al. ALEAPP and iLEAPP open-source parser projects (documentation).',
  ],
  related: ['forensics/digital-evidence/file-systems-and-timelines', 'forensics/digital-investigation/law-ethics-and-reporting', 'forensics/digital-evidence/foundations-and-acquisition'],
}

export default guide
