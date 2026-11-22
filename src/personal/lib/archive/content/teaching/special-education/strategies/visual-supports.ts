import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Spoken words vanish as soon as they are said. Visual supports, such as pictures, symbols, written words and objects, stay put, so learners can check them as often as they need. They are one of the best-evidenced supports for autistic learners and help many others.',
  nutshell: [
    'Visual timetables show the day. **Now and next** boards show just the next step.',
    'Task strips break an activity into pictured steps.',
    'Choice boards let learners communicate what they want.',
    'Keep them consistent, refer to them often, and fade them when no longer needed.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Types of visual support',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Visual timetable', body: 'The day’s activities in order, with symbols or photos. Remove or turn over each item when finished, so the learner sees progress.' },
            { title: 'Now and next / first, then', body: 'Two panels: what is happening now, and what comes next. "First maths, then computer." Useful when a whole timetable is too much.' },
            { title: 'Task strip', body: 'The steps of a task in order: get book, write date, do questions 1–5, put book in tray.' },
            { title: 'Choice board', body: 'A set of pictured options for the learner to point to or hand over.' },
            { title: 'Visual timer', body: 'A timer that shows time running out as a shrinking coloured area.' },
            { title: 'Cue cards', body: 'Small cards showing expected behaviours (quiet voice, hands down, ask for help) that an adult can show silently.' },
            { title: 'Labels', body: 'Pictures and words on drawers, trays and areas so learners can find and return things independently.' },
            { title: 'Social stories', body: 'Short, personalised stories that describe a situation and what to expect, developed by Carol Gray. For example, what will happen on a school trip.' },
          ],
        },
      ],
    },
    {
      id: 'making',
      title: 'Making them work',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Match the format to the learner: objects, photos, symbols or words.',
            'Use the same symbols across settings and staff.',
            'Keep them at the learner’s eye level and within reach.',
            'Point to the visual while you speak, and refer back to it.',
            'Update the timetable when there is a change, and show the change in advance.',
            'Involve the learner in using them: moving items, ticking off steps.',
          ],
          dont: [
            'Put them up once and never use them.',
            'Overload one board with too much information.',
            'Use them only as a behaviour tool; they are for understanding.',
          ],
        },
        {
          t: 'example',
          title: 'A task strip for starting independent writing',
          lines: [
            { label: '1', text: '📘 Get your writing book.' },
            { label: '2', text: '✏️ Write the date and title.' },
            { label: '3', text: '🗺️ Look at your plan.' },
            { label: '4', text: '✍️ Write 3 sentences.' },
            { label: '5', text: '✋ Show an adult.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence',
      blocks: [
        {
          t: 'p',
          text: 'A major US review of interventions for autistic children and young people lists **visual supports** among its evidence-based practices (Hume et al., 2021). They reduce reliance on spoken language and working memory, increase predictability and support independence. The same logic makes them helpful for learners with language difficulties, intellectual disability and ADHD.',
        },
      ],
    },
  ],
  sources: [
    'Hume, K., et al. (2021). Evidence-based practices for children, youth, and young adults with autism: Third generation review. *Journal of Autism and Developmental Disorders, 51*, 4013–4032.',
    'Gray, C. (2015). *The new social story book* (15th anniversary ed.). Future Horizons.',
    'Rao, S. M., & Gagie, B. (2006). Learning through seeing and doing: Visual supports for children with autism. *Teaching Exceptional Children, 38*(6), 26–33.',
  ],
  related: ['teaching/special-education/needs/autism', 'teaching/special-education/strategies/executive-function', 'teaching/special-education/needs/intellectual'],
}

export default guide
