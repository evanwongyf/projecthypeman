import type { Guide } from '../../../guide'

// Invented monthly counts for one neighbourhood: noise around an average of about 20, a
// one-off spike, then a return to normal, whether or not anything was done.
const monthly: [number, number][] = [
  [1, 19], [2, 22], [3, 18], [4, 21], [5, 20], [6, 34], [7, 23], [8, 19], [9, 21], [10, 18], [11, 20], [12, 22],
]

const guide: Guide = {
  intro:
    'Crime is one of the most statistically abused subjects in public life. Headlines report percentages without the base, link two trends that merely move together, and credit whichever policy was announced last for a fall that would have happened anyway. A handful of habits, asking for absolute numbers, checking for confounders, expecting regression to the mean, protect you from most of it.',
  nutshell: [
    'Always ask for the **base rate** and the **absolute** change, not just the relative change.',
    '**Correlation is not causation**: confounders, reverse causation and coincidence are everywhere in crime data.',
    'Unusual spikes tend to fall back on their own, **regression to the mean**, which makes many interventions look better than they are.',
    '**Randomised trials** are the strongest evidence, and even they need replication.',
    'Media coverage over-represents rare, violent, stranger crime, so the public usually believes crime is **rising** even when it is **falling**.',
  ],
  sections: [
    {
      id: 'relative-absolute',
      title: 'Relative versus absolute risk',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{RR} = \frac{p_1}{p_0} \qquad \text{absolute difference} = p_1 - p_0`,
          caption: 'Relative risk (RR) says how many times bigger one risk is than another; the absolute difference says how many extra people are affected. A headline that reports only the relative figure can make a tiny change sound dramatic.',
          where: [
            { sym: 'p_1', def: 'The risk in the group or period of interest (e.g. this year)' },
            { sym: 'p_0', def: 'The comparison risk (e.g. last year)' },
            { sym: String.raw`\text{RR}`, def: 'Relative risk: 1 means no change; 1.5 means 50% higher' },
          ],
          syntax: [
            { sym: String.raw`p_1`, say: '“p one”: the subscript is just a label telling two probabilities apart' },
            { sym: String.raw`\frac{p_1}{p_0}`, say: '“p one over p nought”: divide one risk by the other to get a ratio' },
            { sym: String.raw`p_1 - p_0`, say: '“p one minus p nought”: subtract to get the extra risk in absolute terms' },
          ],
          worked: {
            title: '“Street robbery up 50%!”, the risk went from 2 to 3 per 1,000 residents',
            steps: [
              String.raw`Write as proportions: \(p_0 = 2/1{,}000 = 0.002\), \(p_1 = 3/1{,}000 = 0.003\)`,
              String.raw`Relative risk: \(0.003 \div 0.002 = 1.5\), i.e. 50% higher`,
              String.raw`Absolute difference: \(0.003 - 0.002 = 0.001\), i.e. 1 extra victim per 1,000 people per year`,
              String.raw`Per person: the chance of being robbed in a year rose from 0.2% to 0.3%`,
            ],
            answer: 'A real 50% relative rise that means one extra robbery per 1,000 residents a year, worth acting on, but not a reason to panic',
          },
        },
        { t: 'callout', tone: 'tip', title: 'Small numbers swing wildly', text: 'In a small town, homicides going from 2 to 4 is a “100% increase”, and may be pure chance. Look at several years, and at rates rather than counts. More on this in [reading numbers and statistics](@thinking/numbers).' },
      ],
    },
    {
      id: 'causation',
      title: 'Correlation, causation and confounders',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Confounding', body: 'Ice-cream sales and assaults both rise in summer. Heat, longer days and people being outdoors drive both; ice cream causes neither.', tag: 'third factor' },
            { title: 'Reverse causation', body: 'Areas with more police often have more crime. That is mostly because police are sent where crime is high, not because police cause crime.', tag: 'which way?' },
            { title: 'Selection', body: 'People who complete a rehabilitation programme reoffend less, but those who complete may have been more motivated from the start.', tag: 'who’s in?' },
          ],
        },
        {
          t: 'levels',
          caption: 'A rough hierarchy of evidence for “does X reduce crime?”, weakest first.',
          items: [
            { name: 'Anecdote or case study', body: '“Since we installed cameras, it feels safer.”' },
            { name: 'Before-and-after', body: 'Compare crime before and after; vulnerable to regression to the mean and wider trends.' },
            { name: 'Comparison group', body: 'Compare with similar areas or people that did not get the intervention.' },
            { name: 'Natural experiment', body: 'A change imposed by chance or outside rules creates a fair comparison.' },
            { name: 'Randomised controlled trial', body: 'Random assignment makes groups comparable on everything, measured or not.' },
            { name: 'Systematic review / meta-analysis', body: 'Pools all good-quality studies; the Campbell Collaboration publishes many for crime.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'One trial is not the end', text: 'The 1981–82 Minneapolis Domestic Violence Experiment found arrest reduced repeat violence, and many US jurisdictions adopted mandatory-arrest policies. Replications in other cities produced mixed results, in some, arrest seemed to *increase* later violence for certain groups. Policy had moved faster than the evidence.' },
      ],
    },
    {
      id: 'regression',
      title: 'Regression to the mean',
      blocks: [
        {
          t: 'plot',
          title: 'A spike, an intervention, and a fall that would have happened anyway',
          x: [1, 12],
          y: [0, 40],
          xLabel: 'Month',
          yLabel: 'Burglaries',
          data: [{ pts: monthly, label: 'Monthly burglaries (invented)', color: 'var(--teal)', dots: true }],
          hlines: [{ y: 20, label: 'long-run average' }],
          vlines: [{ x: 6.5, label: 'new scheme launched' }],
          caption: 'Interventions are often launched right after a bad month. Because unusually high counts usually fall back towards the average on their own, a naive before-and-after comparison credits the scheme with a drop it did not cause. A comparison area or longer history guards against this.',
        },
      ],
    },
    {
      id: 'media',
      title: 'Media, perception and fear of crime',
      blocks: [
        {
          t: 'list',
          items: [
            '**Newsworthiness** favours the rare and violent: homicides, stranger attacks, child victims. Everyday crime, fraud, vehicle crime, minor theft, is under-covered relative to how common it is.',
            '**The perception gap**: in US Gallup polls, most years since the early 1990s a majority of respondents said crime was rising nationally, through long periods when it was falling. Similar gaps appear in other countries.',
            '**Local optimism**: people tend to rate crime in their *own* area as lower than “out there”, which suggests national perceptions are shaped by media rather than experience.',
            '**Crime dramas and true crime** over-represent serial killers, genius offenders and forensic certainty; some researchers link heavy viewing to unrealistic expectations of forensic evidence in court, though the size of that effect is debated.',
          ],
        },
        {
          t: 'checklist',
          items: [
            'What is the source, police data, a survey, or a single case?',
            'Is the change relative or absolute? What is the base?',
            'Is it a count or a rate? Over how long?',
            'Could recording or reporting have changed instead of crime?',
            'Is there a comparison group, or just before and after?',
            'Does the conclusion go further than the data?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Sherman, L. W., & Berk, R. A. (1984). The specific deterrent effects of arrest for domestic assault. *American Sociological Review*, 49(2), 261–272.',
    'Sherman, L. W., et al. (1998). *Preventing Crime: What Works, What Doesn’t, What’s Promising*. National Institute of Justice.',
    'Gigerenzer, G. (2002). *Calculated Risks: How to Know When Numbers Deceive You*. Simon & Schuster.',
    'Gallup. Crime (annual polling series on perceptions of crime).',
    'Reiner, R. (2007). Media made criminality. In *The Oxford Handbook of Criminology* (4th ed.). Oxford University Press.',
  ],
  related: ['criminology/foundations/measuring-crime', 'thinking/numbers', 'thinking/scientific-thinking'],
}

export default guide
