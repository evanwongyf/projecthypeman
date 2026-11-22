import type { ArchiveNode } from '../topics'

// Forensic science: the traditional criminal laboratory disciplines (scene work, DNA,
// fingerprints, firearms, trace, pathology, toxicology) and digital forensics (disk,
// memory, network, mobile, incident response). Written to explain how the methods work,
// how reliable each one actually is, and how evidence is handled, educational and
// defensive throughout, with contested science hedged honestly and nothing graphic.

export const FORENSICS: ArchiveNode = {
  slug: 'forensics',
  title: 'Forensic science',
  blurb: 'How evidence is found, preserved, analysed and argued over, from crime scenes, DNA and fingerprints to disk images, memory dumps and network logs, with an honest look at which methods hold up.',
  glyph: '⌕',
  color: 'color-mix(in srgb, var(--sky) 35%, var(--teal))',
  tags: ['forensics', 'forensic science', 'csi', 'crime scene', 'evidence', 'dna', 'fingerprints', 'digital forensics', 'dfir', 'cyber', 'chain of custody'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'The forensic process, Locard’s exchange principle, chain of custody, how courts judge reliability, the CSI effect, and contamination.',
      minutes: 8,
      glyph: '★',
      tags: ['beginner', 'overview', 'locard', 'daubert', 'frye', 'csi effect', 'contamination'],
    },
    {
      slug: 'crime-scene',
      title: 'Crime scene and evidence',
      blurb: 'Securing, documenting and searching a scene, and packaging what is found so it survives to court.',
      glyph: '▣',
      tags: ['crime scene', 'evidence', 'packaging', 'chain of custody'],
      children: [
        { slug: 'scene-and-evidence', title: 'Scene processing, evidence types and chain of custody', blurb: 'Cordons, common approach paths, photography and sketching, search patterns, evidence categories, packaging rules and the custody record that ties it all together.', minutes: 10, tags: ['scene processing', 'cordon', 'photography', 'search patterns', 'packaging', 'chain of custody'] },
      ],
    },
    {
      slug: 'biological',
      title: 'Biological evidence',
      blurb: 'DNA profiling and the interpretation of blood at a scene.',
      glyph: '⧖',
      tags: ['dna', 'blood', 'biology', 'serology'],
      children: [
        { slug: 'dna-profiling', title: 'DNA profiling: STRs, PCR and match statistics', blurb: 'How a profile is built from short tandem repeats, why PCR makes trace DNA usable, the product rule worked through, mixtures, forensic genetic genealogy and the limits of it all.', minutes: 13, tags: ['dna', 'str', 'pcr', 'electrophoresis', 'random match probability', 'mixtures', 'genetic genealogy', 'codis'] },
        { slug: 'bloodstain-patterns', title: 'Blood, body fluids and bloodstain pattern analysis', blurb: 'Presumptive and confirmatory tests, stain types, impact angles from the width-to-length ratio, area of origin, and why the discipline is treated with caution.', minutes: 11, tags: ['bloodstain pattern analysis', 'bpa', 'luminol', 'presumptive test', 'impact angle', 'serology'] },
      ],
    },
    {
      slug: 'trace-and-pattern',
      title: 'Trace and pattern evidence',
      blurb: 'Comparing marks and materials: fingerprints, firearms, fibres, glass, paint, soil, shoes, tyres and handwriting.',
      glyph: '◎',
      tags: ['pattern evidence', 'trace evidence', 'comparison', 'impression'],
      children: [
        { slug: 'fingerprints', title: 'Fingerprints: ridges, ACE-V and error rates', blurb: 'Pattern types and minutiae, how latent prints are developed, the ACE-V method, measured error rates, and what the Mayfield and McKie cases taught the field.', minutes: 12, tags: ['fingerprints', 'latent prints', 'minutiae', 'ace-v', 'mayfield', 'friction ridge'] },
        { slug: 'firearms-and-toolmarks', title: 'Firearms and toolmarks', blurb: 'Rifling, class versus individual characteristics, comparison microscopy, cartridge case databases, gunshot residue, and the debate over validity.', minutes: 10, tags: ['ballistics', 'firearms', 'toolmarks', 'rifling', 'gunshot residue', 'nibin', 'afte'] },
        { slug: 'trace-evidence', title: 'Trace evidence: fibres, glass, paint and soil', blurb: 'What transfers, what persists, how each material is compared in the lab, and why “consistent with” is a weaker claim than it sounds.', minutes: 10, tags: ['trace evidence', 'fibres', 'glass', 'refractive index', 'paint', 'soil', 'transfer'] },
        { slug: 'impressions-and-documents', title: 'Footwear, tyres and questioned documents', blurb: 'Class and randomly acquired characteristics in shoe and tyre marks, and how documents, inks and handwriting are examined.', minutes: 9, tags: ['footwear', 'tyre marks', 'questioned documents', 'handwriting', 'esda', 'ink'] },
      ],
    },
    {
      slug: 'death-investigation',
      title: 'Pathology and death investigation',
      blurb: 'How cause, mechanism and manner of death are determined, and how the time since death is estimated.',
      glyph: '✚',
      tags: ['pathology', 'autopsy', 'coroner', 'post-mortem interval'],
      children: [
        { slug: 'cause-and-manner', title: 'Cause, mechanism and manner of death', blurb: 'The three questions a death investigation answers, coroner and medical examiner systems, and what an autopsy involves, described without graphic detail.', minutes: 9, tags: ['cause of death', 'manner of death', 'mechanism', 'autopsy', 'coroner', 'medical examiner'] },
        { slug: 'time-since-death', title: 'Time since death: cooling, rigor, livor and insects', blurb: 'Algor, livor and rigor mortis, a Henssge-style cooling estimate worked through, and how forensic entomology uses insect development and degree days.', minutes: 12, tags: ['time since death', 'pmi', 'algor mortis', 'rigor mortis', 'livor mortis', 'henssge', 'entomology', 'degree days'] },
      ],
    },
    {
      slug: 'toxicology',
      title: 'Toxicology and chemistry',
      blurb: 'Testing for drugs and alcohol, and the chemistry of fire and explosion scenes at a conceptual level.',
      glyph: '⚗',
      tags: ['toxicology', 'chemistry', 'drugs', 'alcohol', 'fire'],
      children: [
        { slug: 'drugs-and-alcohol', title: 'Drug testing, GC-MS and blood alcohol', blurb: 'Screening versus confirmation, how gas chromatography–mass spectrometry identifies a compound, and the Widmark formula for blood alcohol worked with real numbers.', minutes: 12, tags: ['toxicology', 'immunoassay', 'gc-ms', 'blood alcohol', 'widmark', 'drink driving'] },
        { slug: 'fire-and-explosives', title: 'Fire investigation and explosives (overview)', blurb: 'The fire tetrahedron, the scientific method in NFPA 921, arson myths that sent people to prison, ignitable liquid analysis, and post-blast work at a very high level.', minutes: 9, tags: ['arson', 'fire investigation', 'nfpa 921', 'ignitable liquids', 'post-blast', 'willingham'] },
      ],
    },
    {
      slug: 'reliability',
      title: 'Reliability and reasoning',
      blurb: 'Where forensic science has gone wrong, how to reason about evidence statistically, and how examiner bias creeps in.',
      glyph: '⚖',
      tags: ['reliability', 'wrongful convictions', 'statistics', 'bias', 'validity'],
      children: [
        { slug: 'wrongful-convictions', title: 'Wrongful convictions and discredited methods', blurb: 'Bite marks, microscopic hair comparison, the NAS 2009 and PCAST 2016 reports, and what “foundational validity” asks of a method.', minutes: 11, tags: ['wrongful convictions', 'bite marks', 'hair analysis', 'nas 2009', 'pcast', 'innocence project'] },
        { slug: 'evidence-statistics', title: 'Likelihood ratios, base rates and Bayes', blurb: 'How to weigh a match: likelihood ratios, the prosecutor’s fallacy, the Sally Clark case, and Bayes’ rule in odds form with worked numbers.', minutes: 12, tags: ['likelihood ratio', 'bayes', 'base rate', 'prosecutor’s fallacy', 'sally clark', 'statistics'] },
        { slug: 'cognitive-bias', title: 'Cognitive bias in forensic examiners', blurb: 'Contextual and confirmation bias, the experiments that showed them, and safeguards like linear sequential unmasking and blind verification.', minutes: 9, tags: ['cognitive bias', 'confirmation bias', 'contextual bias', 'linear sequential unmasking', 'blind verification', 'dror'] },
      ],
    },
    {
      slug: 'digital-evidence',
      title: 'Digital forensics: evidence sources',
      blurb: 'The process and the places digital evidence lives: disks, file systems, memory, networks, phones and the cloud.',
      glyph: '⌗',
      color: 'color-mix(in srgb, var(--lavender) 45%, var(--teal))',
      tags: ['digital forensics', 'computer forensics', 'disk', 'memory', 'network', 'mobile'],
      children: [
        { slug: 'foundations-and-acquisition', title: 'Foundations: principles, volatility, imaging and hashing', blurb: 'ACPO, NIST and ISO 27037 principles, the order of volatility, imaging behind a write blocker, and why hashes prove an image has not changed.', minutes: 12, tags: ['acpo', 'iso 27037', 'nist 800-86', 'order of volatility', 'write blocker', 'imaging', 'md5', 'sha-256', 'hash'] },
        { slug: 'file-systems-and-timelines', title: 'File systems, deleted files and timelines', blurb: 'Partitions, NTFS and the MFT, FAT, ext4, deleted-file recovery and carving, slack space, MACB timestamps and building a timeline.', minutes: 13, tags: ['ntfs', 'mft', 'fat', 'ext4', 'file carving', 'slack space', 'macb', 'timeline', 'sleuth kit'] },
        { slug: 'memory-forensics', title: 'Memory forensics', blurb: 'Why RAM matters, how it is captured, what lives in it, and how frameworks like Volatility reconstruct processes and connections.', minutes: 10, tags: ['memory forensics', 'ram', 'volatility', 'process list', 'winpmem', 'lime'] },
        { slug: 'network-forensics', title: 'Network forensics', blurb: 'Full packet capture versus flows, reading pcaps, DNS and HTTP logs, what TLS hides and what it still reveals.', minutes: 10, tags: ['network forensics', 'pcap', 'wireshark', 'netflow', 'zeek', 'dns', 'tls'] },
        { slug: 'mobile-and-cloud', title: 'Mobile, browser, email and cloud artefacts', blurb: 'Phone acquisition levels, SQLite databases and their timestamps, encryption and lock screens, email headers, browser history and evidence held by cloud providers.', minutes: 12, tags: ['mobile forensics', 'sqlite', 'ios', 'android', 'email headers', 'browser history', 'cloud forensics'] },
        { slug: 'iot-and-device-forensics', title: 'IoT, wearable and vehicle forensics', blurb: 'Evidence from smart speakers, wearables, cameras, vehicles and implanted devices: what they record, how to preserve and extract it, legal authority, reliability pitfalls and reported cases.', minutes: 12, tags: ['iot', 'wearable', 'smart home', 'vehicle', 'cctv', 'fitbit', 'embedded', 'chip-off', 'jtag'] },
      ],
    },
    {
      slug: 'digital-investigation',
      title: 'Digital forensics: investigation and practice',
      blurb: 'Detecting anti-forensics, responding to incidents, the law around digital evidence, and where to practise legally.',
      glyph: '⌬',
      color: 'color-mix(in srgb, var(--lavender) 60%, var(--pink))',
      tags: ['dfir', 'incident response', 'anti-forensics', 'cyber law', 'ctf'],
      children: [
        { slug: 'anti-forensics-and-encryption', title: 'Anti-forensics, encryption and steganography', blurb: 'How examiners recognise wiping, timestomping, log clearing, encryption and hidden data, including Shannon entropy worked by hand.', minutes: 11, tags: ['anti-forensics', 'encryption', 'steganography', 'entropy', 'wiping', 'timestomping', 'steganalysis'] },
        { slug: 'incident-response-and-malware', title: 'Incident response and malware analysis basics', blurb: 'The DFIR lifecycle, indicators of compromise, the Pyramid of Pain, MITRE ATT&CK, Windows log analysis and safe malware triage.', minutes: 12, tags: ['incident response', 'dfir', 'ioc', 'mitre att&ck', 'pyramid of pain', 'event logs', 'yara', 'malware analysis'] },
        { slug: 'law-ethics-and-reporting', title: 'Cybercrime law, ethics and reporting', blurb: 'Admissibility of digital evidence, Singapore’s Computer Misuse Act and Evidence Act, other key laws, examiner ethics and how to write a forensic report.', minutes: 10, tags: ['admissibility', 'computer misuse act', 'singapore', 'evidence act', 'cfaa', 'budapest convention', 'expert report', 'ethics'] },
        { slug: 'tools-and-labs', title: 'Tools and labs for practising legally', blurb: 'Free tools (Autopsy, FTK Imager, Wireshark, Volatility), public training images from NIST CFReDS and Digital Corpora, CTFs and a study path.', minutes: 8, tags: ['autopsy', 'ftk imager', 'wireshark', 'volatility', 'cfreds', 'digital corpora', 'ctf', 'practice', 'certifications'] },
      ],
    },
  ],
}
