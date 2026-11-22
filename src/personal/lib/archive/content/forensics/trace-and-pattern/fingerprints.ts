import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Fingerprints have been used to identify people for more than a century, and for most of that time examiners claimed zero error. Research since 2009 has replaced that claim with measured error rates, low, but not zero, and high-profile mistakes have reshaped how examinations are done and reported.',
  nutshell: [
    'Friction ridge skin forms before birth and stays stable for life apart from injury; even identical twins have different prints.',
    'Detail is read at three levels: **pattern** (loop, whorl, arch), **minutiae** (ridge endings, bifurcations, dots) and fine **ridge shape and pores**.',
    'Latent (invisible) prints are developed with powders or chemicals matched to the surface: **ninhydrin** on paper, **cyanoacrylate fuming** on plastics and metals.',
    'Examiners use **ACE-V**: Analysis, Comparison, Evaluation, Verification.',
    'A 2011 FBI-funded black-box study measured a **false positive rate of about 0.1%** and a false negative rate of about 7.5%, the Mayfield case showed what a single false positive can cost.',
  ],
  sections: [
    {
      id: 'ridges',
      title: 'Reading a print',
      blocks: [
        {
          t: 'levels',
          caption: 'Each level adds detail; clear Level 2 detail carries most of the weight of a comparison.',
          items: [
            { name: 'Level 1, pattern', body: 'Overall ridge flow. Loops (roughly 60–65% of fingers), whorls (about 30–35%) and arches (about 5%). Class-level only: millions of people share each pattern.', verbs: ['loop', 'whorl', 'arch'] },
            { name: 'Level 2, minutiae', body: 'Where individual ridges end, split or form short islands and dots, and their positions relative to each other.', verbs: ['ridge ending', 'bifurcation', 'dot', 'enclosure'] },
            { name: 'Level 3, fine detail', body: 'Ridge edge shapes, widths and sweat pore positions. Often not reproduced in a smudged latent print.', verbs: ['pores', 'edges'] },
          ],
        },
        {
          t: 'table',
          head: ['Surface', 'Common development method', 'What it reacts with'],
          rows: [
            ['Non-porous (glass, plastic, painted metal)', 'Powders; cyanoacrylate (superglue) fuming', 'Moisture and oily residue; fumes polymerise on the ridges'],
            ['Porous (paper, cardboard, raw wood)', 'Ninhydrin; DFO; 1,2-indanedione', 'Amino acids absorbed into the surface'],
            ['Sticky side of tape', 'Specialist powders or stains', 'Residue on adhesive'],
            ['Blood-contaminated', 'Protein stains (e.g. amido black)', 'Proteins in the blood'],
          ],
        },
      ],
    },
    {
      id: 'acev',
      title: 'The ACE-V method',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Analysis', body: 'Study the latent print alone first: its quality, distortion, which features are reliable. Decide whether it is of value for comparison at all.' },
            { title: 'Comparison', body: 'Compare side by side with a known print, feature by feature, noting agreement and differences.' },
            { title: 'Evaluation', body: 'Reach one of three conclusions: **identification** (same source), **exclusion**, or **inconclusive**.' },
            { title: 'Verification', body: 'A second examiner repeats the examination, ideally **blind**, without knowing the first conclusion.' },
          ],
        },
        { t: 'p', text: 'There is no fixed number of matching points. England and Wales dropped its 16-point standard in 2001, and the International Association for Identification rejected numerical standards in 1973. Critics note this leaves the decision threshold inside the examiner’s head; newer statistical models aim to attach a weight to the evidence instead.' },
        { t: 'callout', tone: 'note', title: 'Databases give candidates, not answers', text: 'Automated fingerprint identification systems (AFIS) search millions of records and return a ranked list of close candidates. Because they search so many prints, they are good at finding **look-alikes**, an examiner still has to decide, and a close non-match is exactly what produced the Mayfield error.' },
      ],
    },
    {
      id: 'errors',
      title: 'Measured error rates',
      blocks: [
        {
          t: 'table',
          head: ['Measure (Ulery et al., 2011)', 'Result', 'Meaning'],
          rows: [
            ['False positive rate', 'About 0.1% of non-mated comparisons', 'Five of 169 examiners made at least one erroneous identification'],
            ['False negative rate', 'About 7.5% of mated comparisons', 'Most examiners missed some true matches'],
            ['Verification', 'Blind verification would have caught most errors', 'False positives were rarely repeated by a second examiner'],
          ],
          caption: 'Error rates in test conditions may differ from casework, where prints are often poorer and context can bias judgement.',
        },
        { t: 'p', text: 'PCAST (2016) concluded latent print analysis was **foundationally valid** but that the false positive rate could be as high as about 1 in 306 in one study and 1 in 18 in another (upper confidence bounds), and that jurors should be told so rather than hear claims of certainty.' },
      ],
    },
    {
      id: 'cases',
      title: 'What went wrong: two cases',
      blocks: [
        {
          t: 'example',
          title: 'Brandon Mayfield, 2004',
          lines: [
            { label: 'Event', text: 'After the Madrid train bombings, a partial print on a bag of detonators was searched against the FBI’s database.' },
            { label: 'Error', text: 'Three FBI examiners and an independent expert identified it as belonging to Brandon Mayfield, an Oregon lawyer who had never been to Spain. He was detained for about two weeks.' },
            { label: 'Correction', text: 'Spanish National Police identified the print as belonging to an Algerian national. The FBI apologised; Mayfield later received a settlement.' },
            { label: 'Findings', text: 'The 2006 Justice Department Inspector General report blamed an unusually close non-match, circular reasoning (re-reading the latent to fit the suspect’s print) and verifiers who knew the initial conclusion.' },
          ],
        },
        { t: 'p', text: 'In Scotland, police officer **Shirley McKie** was accused in 1997 of leaving a print at a murder scene and then lying about it. She was acquitted of perjury in 1999, and the 2011 Fingerprint Inquiry concluded the identification was wrong and called for examiners to report opinions, not claims of certainty.' },
        { t: 'links', items: [
          { path: 'forensics/reliability/cognitive-bias', note: 'How context influences examiners' },
          { path: 'forensics/reliability/wrongful-convictions', note: 'The bigger picture' },
        ] },
      ],
    },
  ],
  sources: [
    'Ulery, B. T., Hicklin, R. A., Buscaglia, J., & Roberts, M. A. (2011). Accuracy and reliability of forensic latent fingerprint decisions. *PNAS*, 108(19), 7733–7738.',
    'US Department of Justice, Office of the Inspector General (2006). *A Review of the FBI’s Handling of the Brandon Mayfield Case*.',
    'Campbell, A. (2011). *The Fingerprint Inquiry Report*. Scottish Government.',
    'PCAST (2016). *Forensic Science in Criminal Courts: Ensuring Scientific Validity of Feature-Comparison Methods*.',
  ],
  related: ['forensics/reliability/cognitive-bias', 'forensics/trace-and-pattern/firearms-and-toolmarks', 'forensics/reliability/evidence-statistics'],
}

export default guide
