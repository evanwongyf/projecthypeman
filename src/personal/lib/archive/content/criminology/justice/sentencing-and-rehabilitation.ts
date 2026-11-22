import type { Guide } from '../../../guide'

// Illustrative cumulative reoffending curve: rises steeply in the first months after
// release and flattens out, the shape seen in many cohort studies, not real figures.
const cumulative = (t: number) => 45 * (1 - Math.exp(-t / 10))

const guide: Guide = {
  intro:
    'Once someone is convicted, what should happen next, and does any of it actually reduce future crime? Sentencing balances several aims that can pull in different directions. Rehabilitation research, after a period in the 1970s when “nothing works” became a slogan, now has a fairly clear answer about what does work: programmes that match intensity to risk, target the factors that drive offending, and use methods people can engage with.',
  nutshell: [
    'Sentencing aims include **retribution, deterrence, incapacitation, rehabilitation, reparation and denunciation**.',
    'The **risk-need-responsivity (RNR)** model is the most influential framework for offender rehabilitation.',
    'Focus resources on **higher-risk** people; over-treating low-risk people can *increase* their reoffending.',
    'Target **criminogenic needs**, antisocial attitudes, peers, substance misuse, employment, not factors unrelated to offending.',
    '**Recidivism rates** depend on definitions: re-arrest, reconviction or re-imprisonment, over one, two or five years.',
    'Some intuitive programmes, like **“Scared Straight”** prison visits, make reoffending worse.',
  ],
  sections: [
    {
      id: 'aims',
      title: 'What sentencing is for',
      blocks: [
        {
          t: 'table',
          head: ['Aim', 'Looks…', 'Core idea'],
          rows: [
            ['Retribution', 'Back', 'The offender deserves punishment proportionate to the wrong (“just deserts”)'],
            ['Denunciation', 'Back', 'Society publicly expresses its condemnation of the act'],
            ['Deterrence', 'Forward', 'Discourage this person (specific) or others (general) from offending'],
            ['Incapacitation', 'Forward', 'Prevent offending by restricting the person, e.g. imprisonment'],
            ['Rehabilitation', 'Forward', 'Change the person so they no longer offend'],
            ['Reparation / restoration', 'Both', 'Repair harm to victims and community'],
          ],
        },
        { t: 'p', text: 'These aims conflict. A long sentence may satisfy retribution and incapacitation but undermine rehabilitation if it breaks family ties and employment. Most legal systems ask judges to weigh them, guided by statute and sentencing guidelines.' },
      ],
    },
    {
      id: 'rnr',
      title: 'The risk-need-responsivity model',
      blocks: [
        { t: 'p', text: 'In 1974 Robert Martinson’s review was popularly summed up as “nothing works”. Later meta-analyses, especially by Canadian psychologists Don Andrews and James Bonta, showed that was wrong: programmes vary enormously, and the effective ones share three principles.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Risk', body: 'Match the intensity of intervention to the person’s assessed risk of reoffending. Intensive programmes for low-risk people can harm by mixing them with higher-risk peers and disrupting protective routines.', tag: 'who' },
            { title: 'Need', body: 'Target criminogenic needs, the dynamic factors that predict offending and can change.', tag: 'what' },
            { title: 'Responsivity', body: 'Use methods that work in general (cognitive-behavioural, skills-based) and adapt them to the individual, learning style, motivation, culture, mental health.', tag: 'how' },
          ],
        },
        {
          t: 'list',
          items: [
            'The “**Central Eight**” risk/need factors: history of antisocial behaviour, antisocial personality pattern, antisocial attitudes, antisocial associates, family/marital problems, school/work problems, lack of prosocial leisure, and substance misuse.',
            'The first is static (it cannot change); the other seven are **dynamic** and are the targets for intervention.',
            'Programmes adhering to all three principles show the largest average reductions in reoffending in meta-analyses; those adhering to none show little or none.',
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Good Lives Model', text: 'Tony Ward’s Good Lives Model complements RNR by focusing on strengths and on helping people meet basic human needs (relationships, mastery, purpose) in legal ways. Many services now combine both approaches.' },
      ],
    },
    {
      id: 'recidivism',
      title: 'Measuring recidivism',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{recidivism rate} = \frac{\text{people in the cohort who reoffend within } t}{\text{people released (or sentenced) in the cohort}} \times 100\%`,
          caption: 'A recidivism rate always belongs to a defined cohort, a defined event (re-arrest, reconviction or re-imprisonment) and a defined follow-up period t. Change any of those and the number changes, which is why comparisons across countries are so hard.',
          where: [
            { sym: 't', def: 'Follow-up period, commonly 1, 2, 3 or 5 years' },
            { sym: String.raw`\text{cohort}`, def: 'The group tracked, e.g. everyone released from prison in a given year' },
          ],
          syntax: [
            { sym: String.raw`\frac{\text{part}}{\text{whole}}`, say: '“part over whole”: the fraction of the group that had the outcome' },
            { sym: String.raw`\text{within } t`, say: '“within t”: only events in the follow-up window count' },
          ],
          worked: {
            title: '1,840 people were released in a year; 405 were back in prison within two years',
            steps: [
              String.raw`Divide: \(405 \div 1{,}840 \approx 0.2201\)`,
              String.raw`Convert: \(0.2201 \times 100\% \approx 22.0\%\)`,
              String.raw`Re-arrest would usually be higher than re-imprisonment for the same cohort, because not every arrest leads to a prison sentence`,
            ],
            answer: 'A two-year re-imprisonment rate of about 22%',
          },
        },
        {
          t: 'plot',
          title: 'When reoffending happens (illustrative)',
          x: [0, 36],
          y: [0, 50],
          xLabel: 'Months since release',
          yLabel: 'Cumulative % reoffended',
          curves: [{ f: cumulative, label: 'Cumulative reoffending', color: 'var(--teal)' }],
          points: [
            { x: 12, y: cumulative(12), label: '≈31% by 12 months' },
            { x: 24, y: cumulative(24), label: '≈41% by 24 months' },
          ],
          shade: [{ from: 0, to: 6, label: 'highest risk', color: 'var(--pink)' }],
          caption: 'Schematic shape, not real data: in many cohort studies, reoffending is concentrated soon after release, which is why support with housing, work and treatment in the first months matters so much.',
        },
      ],
    },
    {
      id: 'what-works',
      title: 'What works, what doesn’t',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Cognitive-behavioural programmes targeting thinking and problem-solving.',
            'Drug treatment, including opioid substitution, in prison and after release.',
            'Education and employment programmes, especially when linked to real jobs.',
            'Multisystemic therapy and family-based programmes for young people.',
            'Structured support at release (“through the gate”).',
          ],
          dont: [
            '“Scared Straight” prison visits, a Campbell review found they increase youth offending.',
            'Boot camps relying on discipline alone, no reliable reduction in reoffending.',
            'Intensive supervision focused only on surveillance, tends to catch breaches without reducing new crime.',
            'Placing low-risk people in high-intensity programmes.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Bonta, J., & Andrews, D. A. (2017). *The Psychology of Criminal Conduct* (6th ed.). Routledge.',
    'Martinson, R. (1974). What works? Questions and answers about prison reform. *The Public Interest*, 35, 22–54.',
    'Ward, T., & Maruna, S. (2007). *Rehabilitation: Beyond the Risk Paradigm*. Routledge.',
    'Petrosino, A., Turpin-Petrosino, C., Hollis-Peel, M. E., & Lavenberg, J. G. (2013). “Scared Straight” and other juvenile awareness programs for preventing juvenile delinquency. *Campbell Systematic Reviews*, 9(1).',
    'Lipsey, M. W., & Cullen, F. T. (2007). The effectiveness of correctional rehabilitation: A review of systematic reviews. *Annual Review of Law and Social Science*, 3, 297–320.',
    'Fazel, S., & Wolf, A. (2015). A systematic review of criminal recidivism rates worldwide. *PLOS ONE*, 10(6), e0130390.',
  ],
  related: ['criminology/justice/restorative-and-singapore', 'criminology/criminal-mind/neutralisation-and-disengagement', 'criminology/prevention/victims-and-prevention'],
}

export default guide
