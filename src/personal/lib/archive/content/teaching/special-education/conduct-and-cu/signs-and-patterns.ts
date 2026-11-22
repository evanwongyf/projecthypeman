import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'No single behaviour signals CU traits; most children lie, are unkind or seem indifferent sometimes. What warrants concern is a **persistent pattern**, across **time** and **settings**, especially in how a child responds emotionally to harming others. This guide lists what teachers may notice and how to record it objectively for the professionals who will assess.',
  nutshell: [
    'Look for **patterns over months**, in **several settings**, not single incidents.',
    'The key emotional signs: **little remorse or guilt**, **little concern for others’ feelings**, **little concern about performance**, and **shallow or used-as-a-tool emotions**.',
    'Behavioural signs are shared with other conduct problems: aggression (often planned), deceit, cruelty to peers or animals, rule-breaking.',
    'Record **what happened, when, who was there, what the child said and did, and how they responded afterwards**.',
  ],
  sections: [
    {
      id: 'signs',
      title: 'What teachers may notice',
      blocks: [
        { t: 'table', head: ['Area', 'Concerning pattern', 'Usually not concerning on its own'], rows: [
          ['Remorse', 'Shows no guilt after seriously hurting someone, even when caught and calm; blames the victim', 'Denial in the heat of the moment; guilt shown later'],
          ['Empathy', 'Seems unmoved or amused by others’ pain or fear, repeatedly', 'Occasional insensitivity; difficulty reading feelings (consider autism)'],
          ['Performance', 'Indifferent to doing poorly even on things they could do; consequences seem not to matter', 'Low motivation linked to difficulty, depression or low self-esteem'],
          ['Emotion', 'Emotions seem shallow, switched on to manipulate, or absent when expected', 'Flat affect from depression or trauma'],
          ['Aggression', 'Planned, instrumental aggression (to get something or dominate) rather than reactive outbursts', 'Reactive outbursts when frustrated or scared'],
          ['Deceit', 'Frequent, skilled lying to gain advantage, without apparent anxiety', 'Lying to avoid punishment, with visible nervousness'],
          ['Cruelty', 'Deliberate cruelty to animals or younger children', 'Rough play without intent to harm'],
          ['Response to discipline', 'Punishment has little effect; rewards still motivate', 'Mixed responses typical of the age'],
        ] },
        { t: 'callout', tone: 'note', title: 'Context and age', text: 'Expectations differ by age and development. A four-year-old’s understanding of others’ feelings is still forming; a fourteen-year-old’s should be well developed. Also consider culture, language and what is happening at home.' },
      ],
    },
    {
      id: 'recording',
      title: 'Recording objectively',
      blocks: [
        { t: 'example', title: 'An incident record', lines: [
          { label: 'Date, time, place', text: '12 March, 10:20, canteen queue.' },
          { label: 'What happened', text: 'J. tripped a Primary 2 pupil (K.), who fell and cut her knee.' },
          { label: 'Before', text: 'K. had been ahead of J. in the queue. No argument observed.' },
          { label: 'Child’s words', text: '“She should watch where she’s going.” Laughed when K. cried.' },
          { label: 'Afterwards', text: 'In a calm conversation 30 minutes later, said he did not care and asked when recess would end. No apology offered.' },
          { label: 'Others present', text: 'Two duty teachers; three pupils.' },
          { label: 'Action', text: 'K. treated by school nurse; parents of both informed; incident logged.' },
        ] },
        { t: 'dodont', do: [
          'Write facts and exact words, as soon as possible',
          'Note the child’s responses afterwards, and any signs of regret',
          'Record positive behaviours and good days too',
          'Gather observations from other teachers and settings',
        ], dont: [
          'Use diagnostic words (“psychopathic”, “sociopath”)',
          'Interpret motives as facts',
          'Share concerns informally or on social media',
        ] },
      ],
    },
  ],
  sources: [
    'Frick, P. J. (2004). Inventory of Callous-Unemotional Traits. University of New Orleans.',
    'Frick, P. J., & Kemp, E. C. (2021). Conduct disorders and empathy development. Annual Review of Clinical Psychology, 17, 391–416.',
    'American Psychiatric Association (2022). DSM-5-TR.',
  ],
  related: ['teaching/special-education/conduct-and-cu/look-alikes', 'teaching/special-education/conduct-and-cu/assessment-and-referral', 'teaching/special-education/strategies/behaviour-support'],
}

export default guide
