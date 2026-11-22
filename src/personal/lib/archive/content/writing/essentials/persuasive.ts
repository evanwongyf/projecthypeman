import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Persuasive writing tries to change what a reader thinks or does. Aristotle identified three ways to persuade over two thousand years ago, and they still describe how good speeches, adverts, letters and opinion pieces work.',
  nutshell: [
    '**Ethos**: credibility. Why should the reader trust you?',
    '**Pathos**: emotion. Why should the reader care?',
    '**Logos**: logic and evidence. Why is it true?',
    'Know your **audience** and **purpose**, and choose techniques to suit them.',
  ],
  sections: [
    {
      id: 'appeals',
      title: 'Three appeals',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Ethos', body: 'Show expertise, fairness and shared values. Cite experts, acknowledge other views, speak with authority. *"As a nurse for twenty years, I have seen…"*' },
            { title: 'Pathos', body: 'Connect with feelings through stories, vivid images and values. *"Imagine waiting four hours in pain with your child."*' },
            { title: 'Logos', body: 'Give reasons, evidence and clear logic. *"Waiting times have risen 40% in five years while staff numbers fell."*' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'The strongest persuasion combines all three. Pathos without logos feels manipulative; logos without pathos feels cold; both without ethos may not be believed.',
        },
      ],
    },
    {
      id: 'techniques',
      title: 'Techniques',
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'Example'],
          rows: [
            ['Rhetorical question', 'Is this really the future we want for our children?'],
            ['Rule of three', 'It is cheaper, faster and fairer.'],
            ['Direct address', 'You can make a difference today.'],
            ['Statistics and facts', 'One in five young people…'],
            ['Anecdote', 'Last winter, my neighbour…'],
            ['Counterargument and rebuttal', 'Some say it costs too much. In fact, it saves money within two years.'],
            ['Emotive language', 'devastating, heartbreaking, vital'],
            ['Repetition', 'We will not wait. We will not be silent. We will not give up.'],
            ['Call to action', 'Write to your MP this week.'],
          ],
          caption: 'Often remembered with acronyms like AFOREST (Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triples).',
        },
      ],
    },
    {
      id: 'structure',
      title: 'A structure for persuasive pieces',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Hook', body: 'A striking fact, question or story.' },
            { title: 'Position', body: 'State clearly what you believe and want.' },
            { title: 'Reasons', body: 'Two or three strong reasons, each with evidence. Save the strongest for last or first.' },
            { title: 'Counterargument', body: 'Acknowledge the other side fairly, then rebut it. See [building an argument](@writing/essentials/argument).' },
            { title: 'Call to action', body: 'Tell the reader exactly what to do next, and why now.' },
          ],
        },
      ],
    },
  ],
  sources: ['Aristotle. *Rhetoric* (W. Rhys Roberts, Trans.). (Original work c. 4th century BCE)', 'Leith, S. (2011). *You talkin’ to me? Rhetoric from Aristotle to Obama*. Profile Books.'],
  related: ['writing/essentials/argument', 'thinking/fallacies', 'writing/style/clarity'],
}

export default guide
