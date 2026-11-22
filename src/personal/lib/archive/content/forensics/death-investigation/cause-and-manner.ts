import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When a death is sudden, unexpected or unexplained, the law requires someone independent to find out why. Forensic pathologists, coroners and medical examiners answer three distinct questions, cause, mechanism and manner, and keeping them separate is the key to reading any death investigation. This page describes the process in general terms and avoids graphic detail.',
  nutshell: [
    '**Cause** of death: the disease or injury that started the fatal chain of events.',
    '**Mechanism**: the physiological change by which that cause led to death (for example, an abnormal heart rhythm).',
    '**Manner**: the circumstances, natural, accident, suicide, homicide or undetermined. It is a legal and social classification informed by medicine, not a purely medical finding.',
    'Deaths are investigated by **coroners** (legal officers, as in Singapore and England and Wales) or **medical examiners** (physicians, as in many US states).',
    'An autopsy combines external and internal examination with laboratory tests; many systems now add CT scanning, and some cases are resolved without a full internal examination.',
  ],
  sections: [
    {
      id: 'three-questions',
      title: 'Cause, mechanism and manner',
      blocks: [
        {
          t: 'flow',
          title: 'The causal sequence on a death certificate',
          nodes: [
            { label: 'Underlying cause', sub: 'e.g. coronary artery disease', tone: 'data' },
            { label: 'Intermediate condition', sub: 'e.g. heart attack (myocardial infarction)', tone: 'process' },
            { label: 'Mechanism', sub: 'e.g. ventricular fibrillation', tone: 'model' },
            { label: 'Death', sub: 'manner: natural', tone: 'output' },
          ],
          caption: 'WHO-style certificates list the chain in Part I, from the immediate condition back to the underlying cause, with other contributing conditions in Part II.',
        },
        {
          t: 'table',
          head: ['Same cause', 'Possible manners', 'What decides between them'],
          rows: [
            ['Drug toxicity', 'Accident, suicide, homicide, undetermined', 'Circumstances, history, notes, scene and police findings'],
            ['Head injury', 'Accident (a fall), homicide (an assault)', 'Injury pattern plus scene reconstruction and witness evidence'],
            ['Drowning', 'Accident, suicide, homicide', 'Mostly context; findings themselves are often non-specific'],
          ],
          caption: 'One medical cause can sit under several manners, which is why manner is often the most disputed part of a finding.',
        },
        { t: 'callout', tone: 'note', title: 'Mechanism is not a cause', text: '“Cardiac arrest” describes how every death ends, not why it happened. Certificates that give only a mechanism are considered poorly completed.' },
      ],
    },
    {
      id: 'systems',
      title: 'Who investigates',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Coroner systems', body: 'A judicial officer decides whether an inquiry or inquest is needed and directs autopsies. In **Singapore**, deaths are reported to the State Coroner under the Coroners Act 2010, and forensic pathologists at the Health Sciences Authority carry out post-mortem examinations. England and Wales use a similar system with locally appointed coroners.', tag: 'legal officer' },
            { title: 'Medical examiner systems', body: 'A physician, usually a board-certified forensic pathologist, leads the investigation, supported by investigators who attend scenes. Common in larger US jurisdictions; some US counties still have elected lay coroners.', tag: 'physician' },
          ],
        },
        { t: 'list', items: [
          'Deaths usually reported include those that are sudden or unexpected, violent or unnatural, in custody, linked to medical procedures, or where no doctor can certify a natural cause.',
          'Most reported deaths turn out to be natural, the system exists to catch the minority that are not.',
        ] },
      ],
    },
    {
      id: 'autopsy',
      title: 'What an autopsy involves (overview)',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'History and scene information', body: 'Medical records, police reports and scene photographs shape which questions are asked.' },
            { title: 'Identification', body: 'Visual, fingerprints, dental records or DNA, depending on circumstances.' },
            { title: 'External examination', body: 'Clothing, height and weight, signs of medical treatment, injuries and their pattern, trace evidence collected before washing.' },
            { title: 'Imaging', body: 'X-ray and increasingly post-mortem CT (“virtual autopsy”), useful for fractures, foreign objects and as a permanent record.' },
            { title: 'Internal examination', body: 'Organs are examined and weighed; small tissue samples are kept for microscopy.' },
            { title: 'Laboratory tests', body: 'Toxicology samples (often blood from a peripheral vein and the vitreous fluid of the eye), microbiology and histology.' },
            { title: 'Report', body: 'Findings, the pathologist’s opinion on cause of death, and limitations. Manner is decided by the coroner or medical examiner.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Post-mortem redistribution', text: 'After death some drugs diffuse from organs into nearby blood, so a sample from near the heart can show a higher concentration than was present in life. That is one reason toxicologists prefer peripheral blood and interpret post-mortem levels cautiously (see [drug testing](@forensics/toxicology/drugs-and-alcohol)).' },
      ],
    },
    {
      id: 'limits',
      title: 'Uncertainty in death investigation',
      blocks: [
        { t: 'p', text: 'Some deaths remain unexplained even after a complete examination, for example some sudden deaths in infancy or deaths from heart rhythm disorders that leave no structural trace. Genetic testing (a “molecular autopsy”) sometimes finds an inherited cause, which matters for surviving relatives.' },
        { t: 'callout', tone: 'tip', title: 'Reading a report', text: 'Look for the difference between what was observed, what was concluded, and how confident the pathologist is. Phrases like “consistent with” or “cannot be excluded” are deliberate statements of uncertainty, not evasions.' },
      ],
    },
  ],
  sources: [
    'Saukko, P., & Knight, B. (2015). *Knight’s Forensic Pathology* (4th ed.). CRC Press.',
    'Dolinak, D., Matshes, E., & Lew, E. (2005). *Forensic Pathology: Principles and Practice*. Academic Press.',
    'World Health Organization. *International Statistical Classification of Diseases (ICD)*, medical certificate of cause of death.',
    'Singapore Coroners Act 2010.',
  ],
  related: ['forensics/death-investigation/time-since-death', 'forensics/toxicology/drugs-and-alcohol', 'medicine/basics/how-drugs-work-pharmacology'],
}

export default guide
