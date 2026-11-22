import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Forensic toxicology asks whether a drug, alcohol or poison was present, how much, and what effect it may have had. It serves death investigation, drink- and drug-driving cases and workplace testing. The core discipline is a two-step one: a cheap, fast screen to find candidates, then a slower, highly specific confirmation before anything is reported.',
  nutshell: [
    '**Screening** (usually immunoassay) is sensitive and fast but can cross-react with similar molecules; a positive screen is only *presumptive*.',
    '**Confirmation** by chromatography with mass spectrometry (**GC-MS** or **LC-MS/MS**) identifies the molecule by retention time and mass spectrum, and measures how much is there.',
    'Concentrations need careful interpretation: tolerance, time since use, the sample type and post-mortem changes all matter.',
    'The **Widmark formula** estimates blood alcohol from the amount drunk, body weight and time, useful for checking accounts, but with wide uncertainty.',
    'Singapore’s drink-driving limit is **80 mg of alcohol per 100 mL of blood** or **35 µg per 100 mL of breath**.',
  ],
  sections: [
    {
      id: 'screen-confirm',
      title: 'Screening versus confirmation',
      blocks: [
        {
          t: 'table',
          head: ['', 'Screening (immunoassay)', 'Confirmation (GC-MS / LC-MS/MS)'],
          rows: [
            ['How it works', 'Antibodies bind a drug class; a signal changes when the drug is present', 'Separates every compound, then identifies each by its mass fragments'],
            ['Speed and cost', 'Minutes, cheap, automatable', 'Hours, expensive, needs skilled staff'],
            ['Specificity', 'Class-level; can cross-react (some cold medicines with amphetamine screens)', 'Identifies the exact molecule and its metabolites'],
            ['Output', 'Positive / negative against a cutoff', 'Concentration, e.g. ng/mL'],
          ],
        },
        { t: 'p', text: 'Cutoffs are set to balance false positives and false negatives. US federal workplace testing, for instance, screens urine for a cannabis metabolite at 50 ng/mL and confirms at 15 ng/mL, the confirmation cutoff is lower because the confirmatory method is specific enough to be trusted at lower levels.' },
        { t: 'callout', tone: 'myth', title: 'Myth: a positive urine test means impairment', text: 'Urine shows past use, sometimes days or (for heavy cannabis use) weeks earlier. Impairment at a given moment is far better assessed from blood concentrations, and even then tolerance makes the link loose for many drugs.' },
      ],
    },
    {
      id: 'gcms',
      title: 'How GC-MS identifies a compound',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Extract', sub: 'pull drugs from blood or urine', tone: 'data' },
            { label: 'Gas chromatograph', sub: 'compounds separate in a long heated column', tone: 'process' },
            { label: 'Retention time', sub: 'when each compound emerges', tone: 'model' },
            { label: 'Mass spectrometer', sub: 'molecules fragment into a pattern of masses', tone: 'model' },
            { label: 'Identify & quantify', sub: 'match to standards and library', tone: 'output' },
          ],
        },
        { t: 'p', text: 'Identification rests on **two independent properties agreeing** with a certified reference standard run on the same instrument: the time a compound takes to pass through the column, and its fragmentation “fingerprint”. Quantification compares the signal against calibration standards and an **internal standard**, often a deuterium-labelled version of the drug, added to every sample to correct for losses.' },
        { t: 'terms', items: [
          { term: 'Metabolite', def: 'A product of the body breaking the drug down. Finding a metabolite shows the drug was taken into the body rather than just contaminating a sample.' },
          { term: 'Limit of detection', def: 'The lowest amount reliably distinguished from zero.' },
          { term: 'Post-mortem redistribution', def: 'Drug concentrations changing after death as drugs diffuse from tissues into blood.' },
          { term: 'Vitreous humour', def: 'Fluid from the eye, relatively protected from contamination and useful for post-mortem alcohol.' },
        ] },
      ],
    },
    {
      id: 'alcohol',
      title: 'Blood alcohol and the Widmark formula',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C_t = \frac{A}{r \cdot W} \times 100 \;-\; \beta\, t`,
          caption: 'Erik Widmark’s 1932 model: alcohol spreads through body water, then is removed at a roughly constant rate. It assumes all the alcohol has been absorbed, so it overestimates during the absorption phase soon after drinking.',
          where: [
            { sym: 'C_t', def: 'Estimated blood alcohol concentration at time t, in g per 100 mL (multiply by 1000 for mg/100 mL)' },
            { sym: 'A', def: 'Grams of alcohol consumed' },
            { sym: 'W', def: 'Body weight in grams' },
            { sym: 'r', def: 'Widmark factor: share of the body alcohol distributes into, about 0.68 for men and 0.55 for women on average' },
            { sym: '\\beta', def: 'Elimination rate, about 0.015 g/100 mL per hour on average (roughly 0.010–0.025)' },
            { sym: 't', def: 'Hours since drinking began' },
          ],
          syntax: [
            { sym: '\\frac{A}{r \\cdot W}', say: '“A over r times W”: divide the alcohol by the effective volume it dissolves into' },
            { sym: '\\beta\\, t', say: '“beta t”: beta multiplied by t, the amount removed so far, growing in a straight line' },
            { sym: 'C_t', say: '“C sub t”: concentration at time t' },
          ],
          worked: {
            title: 'A 70 kg man, four Singapore standard drinks (10 g each), measured 3 hours later',
            steps: [
              String.raw`\(A = 4 \times 10 = 40\) g; \(W = 70{,}000\) g; \(r = 0.68\)`,
              String.raw`\(r \cdot W = 0.68 \times 70{,}000 = 47{,}600\)`,
              String.raw`Peak: \(40 / 47{,}600 \times 100 \approx 0.0840\) g/100 mL, i.e. 84 mg/100 mL`,
              String.raw`Eliminated: \(\beta t = 0.015 \times 3 = 0.045\) g/100 mL`,
              String.raw`\(C_3 \approx 0.0840 - 0.045 = 0.0390\) g/100 mL`,
            ],
            answer: String.raw`About 39 mg/100 mL after three hours, but using \(\beta = 0.010\) or \(0.025\) gives roughly 54 or 9 mg/100 mL. That spread is why courts treat back-calculations with care.`,
          },
        },
        {
          t: 'plot',
          title: 'Estimated BAC after 40 g of alcohol (70 kg man), elimination only',
          x: [0, 7],
          y: [0, 100],
          xLabel: 'hours after absorption',
          yLabel: 'mg per 100 mL blood',
          curves: [
            { f: (t: number) => Math.max(0, 84 - 15 * t), label: 'β = 15 mg/100 mL/h' },
            { f: (t: number) => Math.max(0, 84 - 10 * t), label: 'β = 10 (slow)', dashed: true },
            { f: (t: number) => Math.max(0, 84 - 25 * t), label: 'β = 25 (fast)', dashed: true },
          ],
          hlines: [{ y: 80, label: 'Singapore limit (80)' }],
          caption: 'Simplified: real curves rise first during absorption, and food slows and lowers the peak.',
        },
        { t: 'callout', tone: 'warn', title: 'Not a tool for deciding whether to drive', text: 'Individual absorption and elimination vary too much for any formula to tell you that you are under a limit. The only safe plan is not to drive after drinking.' },
      ],
    },
  ],
  sources: [
    'Widmark, E. M. P. (1932). *Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung*. Urban & Schwarzenberg.',
    'Jones, A. W. (2010). Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. *Forensic Science International*, 200(1–3), 1–20.',
    'Levine, B. (Ed.) (2020). *Principles of Forensic Toxicology* (5th ed.). Springer.',
    'Singapore Road Traffic Act 1961 (prescribed limits of alcohol for drink-driving offences).',
  ],
  related: ['forensics/death-investigation/cause-and-manner', 'forensics/toxicology/fire-and-explosives', 'medicine/basics/how-drugs-work-pharmacology'],
}

export default guide
