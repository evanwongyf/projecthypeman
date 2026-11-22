import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Criminology is the scientific study of crime: what counts as crime, why some people offend, who gets harmed, and how societies respond. This shelf leans into the most-asked question, what goes on in the mind of someone who offends, while keeping one foot firmly in the evidence, because this is a subject where TV drama and real research disagree constantly.',
  nutshell: [
    'Crime is **socially defined**: what is illegal varies across places and eras, so criminology studies both behaviour and the rules that label it.',
    'There is **no single cause** of crime. Good explanations combine the person (personality, development, self-control), the situation (opportunity, guardianship) and society (inequality, peers, institutions).',
    'Most people who offend are **not monsters or masterminds**, offending is common in adolescence and most people grow out of it.',
    'Popular ideas such as the lone genius profiler or the “born criminal” are largely **myths**; this shelf flags them as it goes.',
    'Everything here is **educational**: understanding offending in order to prevent it, investigate it fairly and rehabilitate, never a guide to doing it.',
  ],
  sections: [
    {
      id: 'map',
      title: 'How the shelf is organised',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Foundations', body: 'History of the discipline, how crime is measured, and the crime triangle.', tag: 'start' },
            { title: 'Why people offend', body: 'Strain, learning, control, labelling, rational choice, biology and the life course.', tag: 'theory' },
            { title: 'Inside the criminal mind', body: 'Psychopathy, neutralisation, self-control, trauma, aggression and addiction.', tag: 'psychology' },
            { title: 'Offenders and profiling', body: 'Kinds of offending, radicalisation, and what profiling really achieves.', tag: 'investigation' },
            { title: 'Victims and prevention', body: 'Victimology, situational prevention, CPTED and deterrence.', tag: 'prevention' },
            { title: 'Justice and methods', body: 'Sentencing, rehabilitation, restorative justice, and reading crime statistics critically.', tag: 'response' },
          ],
        },
        {
          t: 'flow',
          title: 'The questions criminology asks, in order',
          nodes: [
            { label: 'What is crime?', sub: 'definitions, law, harm', tone: 'data' },
            { label: 'How much is there?', sub: 'measurement', tone: 'data' },
            { label: 'Why does it happen?', sub: 'theories, psychology', tone: 'model' },
            { label: 'How do we respond?', sub: 'policing, courts, prevention', tone: 'process' },
            { label: 'Does it work?', sub: 'evaluation', tone: 'output' },
          ],
          loop: 'evidence feeds back into policy',
        },
      ],
    },
    {
      id: 'habits',
      title: 'Habits of mind for this subject',
      blocks: [
        {
          t: 'list',
          items: [
            '**Ask for the base rate.** A frightening statistic means little until you know how common the thing is to begin with.',
            '**Separate explaining from excusing.** Understanding why someone offended is not the same as saying it was acceptable; prevention depends on understanding.',
            '**Distrust single-cause stories.** “It was the video games”, “it was the upbringing” and “he was born evil” are all too simple.',
            '**Watch for survivorship in cases.** Famous cases are famous because they are unusual, they are poor guides to typical crime.',
            '**Respect people involved.** Victims are real people; so are those accused but not convicted. This shelf avoids naming anyone not convicted.',
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: criminals are a distinct type of person', text: 'Self-report studies consistently find that a large share of ordinary people admit to some offence at some point (shoplifting, drug use, fighting, fare-dodging), especially in their teens. A small group offends persistently and causes a disproportionate share of harm, but the line between “criminals” and “everyone else” is much blurrier than it looks.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'criminology/foundations/what-is-criminology', note: 'Begin with the history and the classical-versus-positivist split' },
            { path: 'criminology/foundations/measuring-crime', note: 'Learn why recorded crime is only the tip of the iceberg' },
            { path: 'criminology/criminal-mind/psychopathy-and-personality', note: 'The most misunderstood idea in criminal psychology' },
            { path: 'criminology/offenders/offender-profiling', note: 'What profiling can really do, with the maths of geographic profiling' },
            { path: 'criminology/justice/sentencing-and-rehabilitation', note: 'What actually reduces reoffending' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Newburn, T. (2017). *Criminology* (3rd ed.). Routledge.',
    'Liebling, A., Maruna, S., & McAra, L. (Eds.). (2023). *The Oxford Handbook of Criminology* (7th ed.). Oxford University Press.',
  ],
  related: ['criminology/foundations/what-is-criminology', 'criminology/methods/reading-crime-research', 'thinking/critical-thinking'],
}

export default guide
