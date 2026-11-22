import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    '“Psychopath” is one of the most overused words in true crime. In research it means something specific: a cluster of personality traits, shallow emotion, lack of remorse and empathy, manipulativeness, impulsivity, most often measured with Robert Hare’s Psychopathy Checklist-Revised (PCL-R). It overlaps with, but is not the same as, antisocial personality disorder, and it is not a synonym for “killer”.',
  nutshell: [
    'The **PCL-R** is a 20-item rating scale scored by trained clinicians from an interview *and* file records; each item scores 0–2, for a total of 0–40.',
    'Psychopathy is **not a formal diagnosis** in DSM-5; **antisocial personality disorder (ASPD)** is. Most prisoners who score high on psychopathy meet ASPD criteria, but most with ASPD are not psychopathic.',
    'Psychopathy is a **dimension**, not a yes/no category; cut-offs (often 30 in North America) are conventions.',
    'High scores modestly **predict reoffending and violence**, but the tool is often **misused in court** and scores vary between raters.',
    'The **Dark Triad**, narcissism, Machiavellianism, psychopathy, describes subclinical traits found in the general population, measured by self-report.',
  ],
  sections: [
    {
      id: 'pclr',
      title: 'What the PCL-R measures',
      blocks: [
        { t: 'p', text: 'Hare built on Hervey Cleckley’s 1941 clinical portrait, *The Mask of Sanity*, and published the revised checklist in 1991 (2nd edition 2003). Statistical analyses group its items into two broad factors and four facets.' },
        {
          t: 'table',
          head: ['Factor', 'Facet', 'Example items (paraphrased)'],
          rows: [
            ['1, Interpersonal/affective', 'Interpersonal', 'Superficial charm, grandiose sense of self-worth, pathological lying, conning/manipulation'],
            ['1, Interpersonal/affective', 'Affective', 'Lack of remorse or guilt, shallow emotion, callousness/lack of empathy, failure to accept responsibility'],
            ['2, Lifestyle/antisocial', 'Lifestyle', 'Need for stimulation, parasitic lifestyle, lack of realistic long-term goals, impulsivity, irresponsibility'],
            ['2, Lifestyle/antisocial', 'Antisocial', 'Poor behavioural controls, early behaviour problems, juvenile delinquency, criminal versatility'],
          ],
          caption: 'Two items (e.g. many short-term relationships) do not load on any facet but count in the total.',
        },
        { t: 'callout', tone: 'warn', title: 'Not a quiz', text: 'Online “psychopath tests” are not the PCL-R and say nothing reliable about anyone. The real instrument requires training, a semi-structured interview and corroborating records, because people high in these traits are, by definition, often unreliable reporters about themselves.' },
      ],
    },
    {
      id: 'aspd',
      title: 'Psychopathy versus antisocial personality disorder',
      blocks: [
        {
          t: 'table',
          head: ['', 'Psychopathy (PCL-R)', 'Antisocial personality disorder (DSM-5)'],
          rows: [
            ['Status', 'Research and forensic construct', 'Formal psychiatric diagnosis'],
            ['Core focus', 'Personality: emotion and interpersonal style plus behaviour', 'Mainly behaviour: repeated rule-breaking, deceit, aggression, irresponsibility'],
            ['Age rule', 'Rated in adults (a youth version exists)', 'Age 18+, with evidence of conduct disorder before 15'],
            ['In prisons', 'Roughly 15–25% score high (estimates vary)', 'Around half of male prisoners in a large review'],
            ['General population', 'Around 1% on strict criteria (higher with looser measures)', 'Roughly 1–4%'],
          ],
          caption: 'Prevalence figures are approximate and depend heavily on the sample and cut-off used.',
        },
        { t: 'p', text: 'The asymmetry matters: almost everyone who scores high on psychopathy also meets ASPD criteria, but most people with ASPD lack the emotional core (callousness, shallow affect) that defines psychopathy. ICD-11 has moved towards a dimensional approach, describing personality disorder severity plus trait domains such as **dissociality**.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What it does and does not predict',
      blocks: [
        {
          t: 'dodont',
          do: [
            'PCL-R scores are associated with higher rates of general and violent reoffending, in meta-analyses, the prediction is real but **moderate**, similar to other risk tools.',
            'Much of the predictive power comes from the **lifestyle/antisocial** items (past behaviour predicts future behaviour), less from the personality items.',
            'Psychopathic traits are linked to more **instrumental** (planned, goal-directed) violence.',
          ],
          dont: [
            'Assume most psychopathic people are violent or that most violent people are psychopathic, neither is true.',
            'Treat a score as precise: studies of court cases found ratings by experts hired by the prosecution tended to be higher than those by defence experts (an “allegiance effect”).',
            'Assume “untreatable”: older studies were pessimistic, but some intensive programmes, especially for young people with callous-unemotional traits, show reduced violent reoffending. The question is open.',
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: the brilliant psychopathic CEO', text: 'Popular books suggest psychopaths thrive in boardrooms. The evidence is thin: small samples, self-report measures and lots of speculation. Higher scores on the *boldness* or fearless-dominance traits may help in some roles, but impulsivity and antisocial traits generally predict worse, not better, life outcomes.' },
      ],
    },
    {
      id: 'dark-triad',
      title: 'The Dark Triad (and Tetrad)',
      blocks: [
        { t: 'p', text: 'Delroy Paulhus and Kevin Williams (2002) described three overlapping “dark” personality traits that exist at everyday, non-clinical levels in the general population. They are measured with self-report questionnaires such as the Short Dark Triad (SD3).' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Narcissism', body: 'Grandiosity, entitlement, need for admiration. Linked to aggression mainly when ego is threatened.', tag: 'triad' },
            { title: 'Machiavellianism', body: 'Cynical, strategic manipulation; long-term scheming for advantage.', tag: 'triad' },
            { title: 'Psychopathy (subclinical)', body: 'Callousness and impulsivity; the strongest predictor of antisocial behaviour of the three.', tag: 'triad' },
            { title: 'Everyday sadism', body: 'Enjoyment of others’ suffering, added by later researchers to make the “Dark Tetrad”. Linked to online trolling in some studies.', tag: 'tetrad' },
          ],
        },
        { t: 'p', text: 'The common core of all four appears to be **callousness**, low empathy and willingness to exploit others. Effects on real-world crime are modest, and self-report measures carry the obvious problem that manipulative people may not answer honestly.' },
      ],
    },
  ],
  sources: [
    'Hare, R. D. (2003). *The Hare Psychopathy Checklist–Revised* (2nd ed.). Multi-Health Systems.',
    'Cleckley, H. (1941). *The Mask of Sanity*. Mosby.',
    'Fazel, S., & Danesh, J. (2002). Serious mental disorder in 23,000 prisoners: A systematic review of 62 surveys. *The Lancet*, 359(9306), 545–550.',
    'Yang, M., Wong, S. C. P., & Coid, J. (2010). The efficacy of violence prediction: A meta-analytic comparison of nine risk assessment tools. *Psychological Bulletin*, 136(5), 740–767.',
    'Murrie, D. C., et al. (2013). Are forensic experts biased by the side that retained them? *Psychological Science*, 24(10), 1889–1897.',
    'Paulhus, D. L., & Williams, K. M. (2002). The Dark Triad of personality. *Journal of Research in Personality*, 36(6), 556–563.',
    'Skeem, J. L., Polaschek, D. L. L., Patrick, C. J., & Lilienfeld, S. O. (2011). Psychopathic personality: Bridging the gap between scientific evidence and public policy. *Psychological Science in the Public Interest*, 12(3), 95–162.',
  ],
  related: ['criminology/criminal-mind/aggression-and-addiction', 'criminology/criminal-mind/neutralisation-and-disengagement', 'criminology/justice/sentencing-and-rehabilitation'],
}

export default guide
