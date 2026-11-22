import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every claim that “crime is rising” or “this city is dangerous” rests on a measurement, and each way of measuring crime sees a different slice of it. Police records show what is reported and recorded; victimisation surveys catch much of what is not; self-report studies ask offenders directly. Knowing what each misses is the first skill of criminology.',
  nutshell: [
    '**Recorded crime** is only what victims report and police record; the rest is the **dark figure of crime**.',
    '**Victimisation surveys** (e.g. the Crime Survey for England and Wales, the US National Crime Victimization Survey) ask the public directly and usually find far more crime than police records.',
    'Compare places with **rates per 100,000 people**, not raw counts.',
    'A **clearance rate** shows the share of recorded crimes solved, but “solved” is defined differently in different systems.',
    'Changes in recording rules, reporting habits or police priorities can move the numbers **without crime itself changing**.',
  ],
  sections: [
    {
      id: 'funnel',
      title: 'The crime funnel',
      lead: 'At every step from an offence happening to a conviction, cases drop out.',
      blocks: [
        {
          t: 'levels',
          caption: 'Read from the bottom up: each level is smaller than the one below it.',
          items: [
            { name: 'Offences committed', body: 'Everything that actually happened, unknowable in full.' },
            { name: 'Noticed by a victim', body: 'Some crimes have no aware victim (fraud not yet discovered, drug possession).' },
            { name: 'Reported to police', body: 'Victims weigh seriousness, trust in police, insurance needs, fear of retaliation, and shame.' },
            { name: 'Recorded as a crime', body: 'Police must decide it meets the definition and log it under counting rules.' },
            { name: 'Cleared / solved', body: 'A suspect is identified and charged or otherwise dealt with.' },
            { name: 'Convicted', body: 'A court finds guilt, a small fraction of all offences.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The dark figure is not evenly spread', text: 'Reporting rates vary hugely by crime type. Vehicle theft is usually reported (insurance requires it); domestic abuse, sexual offences, crimes against marginalised groups and many online frauds are heavily under-reported. So recorded crime is not just smaller than reality, it is a *distorted* picture of it.' },
      ],
    },
    {
      id: 'sources',
      title: 'Three ways of counting',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'What it captures well', 'What it misses'],
          rows: [
            ['Police-recorded crime', 'Serious, reported offences; local detail; homicide (fairly reliable)', 'Unreported crime; changes with recording practice and police focus'],
            ['Victimisation surveys', 'Unreported household and personal crime; trends over time', 'Crimes without a household victim (corporate crime, drug offences); homicide; people not at home addresses (homeless, prisoners)'],
            ['Self-report surveys', 'Minor and hidden offending, especially by young people', 'Serious offending (people under-report it); reliant on honesty and memory'],
          ],
        },
        { t: 'p', text: 'Because each source has different blind spots, criminologists trust a trend most when **several sources agree**. For example, the large fall in crime across many Western countries from the mid-1990s showed up in both police records and victimisation surveys, which is why researchers treat it as real.' },
      ],
    },
    {
      id: 'rates',
      title: 'Rates, not counts',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{rate per }100{,}000 = \frac{\text{number of offences}}{\text{population}} \times 100{,}000`,
          caption: 'A city of two million will record more crime than a town of fifty thousand simply because more people live there. Dividing by population puts places of different sizes on the same scale.',
          where: [
            { sym: String.raw`\text{number of offences}`, def: 'Offences recorded in a period, usually one year' },
            { sym: String.raw`\text{population}`, def: 'Residents of the area in the same period (mid-year estimate)' },
          ],
          syntax: [
            { sym: String.raw`\frac{a}{b}`, say: '“a over b”: divide the top number by the bottom number' },
            { sym: String.raw`\times 100{,}000`, say: '“times one hundred thousand”: rescale a tiny per-person fraction into a readable number' },
          ],
          worked: {
            title: 'A city with 4,250 recorded burglaries and 1.7 million residents',
            steps: [
              String.raw`Divide offences by population: \(4{,}250 \div 1{,}700{,}000 = 0.0025\)`,
              String.raw`That is 0.25% of residents, or 1 burglary for every 400 people`,
              String.raw`Multiply by 100,000: \(0.0025 \times 100{,}000 = 250\)`,
            ],
            answer: '250 recorded burglaries per 100,000 residents per year',
          },
        },
        {
          t: 'example',
          title: 'Estimating the dark figure',
          lines: [
            { label: 'Recorded', text: '4,250 burglaries in police records.' },
            { label: 'Survey', text: 'The local victimisation survey suggests about 40% of burglaries are reported.' },
            { label: 'Estimate', text: '4,250 ÷ 0.40 ≈ 10,600 burglaries actually experienced.' },
            { label: 'Caution', text: 'The survey figure has its own margin of error, so this is a rough range, not a precise count.' },
          ],
        },
      ],
    },
    {
      id: 'clearance',
      title: 'Clearance rates',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{clearance rate} = \frac{\text{offences cleared}}{\text{offences recorded}} \times 100\%`,
          caption: 'The share of recorded crimes that police “clear”, usually by charging someone. It is a rough measure of how often offences are solved, and it is generally much higher for homicide than for burglary or vehicle crime.',
          where: [
            { sym: String.raw`\text{offences cleared}`, def: 'Recorded offences with an outcome such as a charge, caution or (in some systems) a formal “exceptional clearance”' },
            { sym: String.raw`\text{offences recorded}`, def: 'All offences of that type recorded in the same period' },
          ],
          syntax: [
            { sym: String.raw`\times 100\%`, say: '“times one hundred per cent”: turn a fraction into a percentage' },
          ],
          worked: {
            title: '1,020 of the 4,250 burglaries were cleared',
            steps: [
              String.raw`Divide: \(1{,}020 \div 4{,}250 = 0.24\)`,
              String.raw`Convert to a percentage: \(0.24 \times 100\% = 24\%\)`,
              String.raw`Against the estimated ~10,600 burglaries that actually happened, only about \(1{,}020 \div 10{,}600 \approx 9.6\%\) led to a clearance`,
            ],
            answer: 'A 24% clearance rate of recorded burglaries, under 10% of all burglaries once the dark figure is included',
          },
        },
        {
          t: 'checklist',
          items: [
            'Is this recorded crime or a survey estimate?',
            'Is it a count or a rate per population?',
            'Did the recording rules or definitions change during the period?',
            'Could reporting have changed (a campaign, a new online form, a high-profile case)?',
            'Is the change bigger than normal year-to-year noise?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Maguire, M., & McVie, S. (2017). Crime data and criminal statistics: A critical reflection. In *The Oxford Handbook of Criminology* (6th ed.). Oxford University Press.',
    'Office for National Statistics. *Crime in England and Wales* (annual bulletins and user guide).',
    'Bureau of Justice Statistics. *National Crime Victimization Survey* methodology.',
    'Biderman, A. D., & Reiss, A. J. (1967). On exploring the “dark figure” of crime. *The Annals of the American Academy of Political and Social Science*, 374(1), 1–15.',
  ],
  related: ['criminology/methods/reading-crime-research', 'research/surveys', 'thinking/numbers'],
}

export default guide
