import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Families are a learner’s first and longest-lasting teachers. The strongest evidence is not for getting parents into school events but for supporting learning at home: talking about school, reading together, helping with routines. Clear, positive communication from teachers makes this much easier.',
  nutshell: [
    'Focus on **learning at home**, not just attendance at events.',
    'Give **specific, practical** suggestions ("ask your child to explain one thing they learned about fractions").',
    'Start with **positive contact** before any problem arises.',
    'Make communication **accessible**: plain language, translations, flexible times.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'What the evidence says',
      lead: 'EEF guidance on working with parents (2018).',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Critically review how you work with parents', body: 'Which families engage and which do not? Why? What barriers exist?' },
            { title: 'Provide practical strategies to support learning at home', body: 'Such as shared reading, talking about learning, and establishing routines.' },
            { title: 'Tailor communications to encourage positive dialogue about learning', body: 'Short, regular, specific messages. Some trials of texting parents about upcoming tests and homework found small gains in attainment.' },
            { title: 'Offer more sustained and intensive support where needed', body: 'Targeted programmes for families who need more help.' },
          ],
        },
      ],
    },
    {
      id: 'communication',
      title: 'Communicating well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Contact every family early in the year with something positive.',
            'Use plain language; avoid jargon and acronyms.',
            'Offer translations or interpreters for families who need them.',
            'Tell families what learners are studying and one way they can help.',
            'Listen: families know their children well.',
          ],
          dont: [
            'Only get in touch when something is wrong.',
            'Assume families who do not come to events do not care; they may work shifts or face other barriers.',
            'Send long newsletters no one reads.',
            'Set tasks that assume parents can teach the content.',
          ],
        },
      ],
    },
    {
      id: 'difficult',
      title: 'Difficult conversations',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Prepare', body: 'Have specific evidence (examples, dates, work), not general impressions.' },
            { title: 'Start with shared goals', body: '"We both want Sam to do well and enjoy school."' },
            { title: 'Describe, don’t label', body: '"He has not handed in 4 of the last 6 homeworks" rather than "he is lazy".' },
            { title: 'Listen', body: 'Ask what they see at home. There may be context you do not know.' },
            { title: 'Agree next steps', body: 'One or two clear actions for school and home, and when you will check in.' },
            { title: 'Follow up', body: 'Contact them again, especially to share improvement.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Education Endowment Foundation. (2018). *Working with parents to support children’s learning: Guidance report*.',
    'Desforges, C., & Abouchaar, A. (2003). *The impact of parental involvement, parental support and family education on pupil achievement and adjustment*. DfES Research Report 433.',
  ],
  related: ['teaching/guides/classroom/homework', 'teaching/guides/classroom/relationships', 'teaching/special-education/foundations/plans'],
}

export default guide
