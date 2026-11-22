import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Most research projects that go wrong go wrong at the start, with a question that is too big, too vague or impossible to answer. A good research question is narrow enough to answer well and interesting enough to be worth answering.',
  nutshell: [
    'Move from a **topic** ("social media") to a **focused question** ("How does daily time on TikTok relate to sleep among 14–16-year-olds?").',
    'A good question is **focused, answerable, arguable and worth asking**.',
    'Narrow by who, where, when, what aspect and what relationship.',
    'Do some background reading first: you cannot ask a sharp question about something you know nothing about.',
  ],
  sections: [
    {
      id: 'narrowing',
      title: 'From topic to question',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Topic', body: 'Climate change.' },
            { name: 'Narrower topic', body: 'Climate change and farming.' },
            { name: 'Focused topic', body: 'Drought and rice farming in Vietnam’s Mekong Delta.' },
            { name: 'Research question', body: 'How have rice farmers in the Mekong Delta adapted their planting to more frequent droughts since 2015?' },
          ],
          caption: 'Each step adds focus: a place, a group, a time period, a specific relationship.',
        },
        {
          t: 'table',
          head: ['Narrow by…', 'Example'],
          rows: [
            ['Who', 'Teenagers, first-year students, small businesses'],
            ['Where', 'A country, a city, your school'],
            ['When', 'Since 2010, during the 1930s, over a school year'],
            ['Which aspect', 'Economic effects, not all effects'],
            ['Which relationship', 'How does X affect Y? What is the difference between X and Y?'],
          ],
        },
      ],
    },
    {
      id: 'good',
      title: 'What makes a good question',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Focused', body: 'It can be answered within your word count and time. "What caused World War Two?" fills libraries; "Why did Britain abandon appeasement in 1939?" fits an essay.' },
            { title: 'Answerable', body: 'Evidence exists and you can get to it. A question about secret government documents may be unanswerable.' },
            { title: 'Arguable', body: 'Reasonable people could disagree, so you have something to argue. "When did the war start?" has a factual answer; "Was appeasement a mistake?" invites an argument.' },
            { title: 'Worth asking', body: 'The answer matters to someone, and ideally to you. Interest keeps you going through the hard parts.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The FINER check',
          text: 'Researchers often test questions against FINER: **F**easible, **I**nteresting, **N**ovel, **E**thical, **R**elevant (Hulley et al.). For school projects, "novel" just means you are not simply repeating a textbook.',
        },
      ],
    },
    {
      id: 'examples',
      title: 'Weak and strong questions',
      blocks: [
        {
          t: 'table',
          head: ['Weak', 'Problem', 'Stronger'],
          rows: [
            ['What is obesity?', 'Descriptive, one-word answer from any encyclopedia.', 'How effective have sugar taxes been at reducing teenage soft drink consumption in the UK?'],
            ['Is social media bad?', 'Too broad and vague.', 'How does using phones in bed relate to sleep duration in 14–16-year-olds?'],
            ['Why is Shakespeare important?', 'Too broad; hard to argue.', 'How does Shakespeare use the storm in *King Lear* to reflect Lear’s state of mind?'],
          ],
        },
      ],
    },
    {
      id: 'steps',
      title: 'A process',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pick a topic that interests you', body: 'You will spend a long time with it.' },
            { title: 'Read around it', body: 'Encyclopedias, overviews and review articles. Note debates, gaps and surprises.' },
            { title: 'Brainstorm questions', body: 'Write ten questions starting with how, why, to what extent, what is the relationship between.' },
            { title: 'Narrow and test', body: 'Pick the most promising and check it against focused, answerable, arguable and worth asking.' },
            { title: 'Check sources exist', body: 'Do a quick search. If you find nothing, narrow differently; if you find thousands, narrow more.' },
            { title: 'Get feedback', body: 'Show it to your teacher or supervisor early.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald, W. T. (2016). *The craft of research* (4th ed.). University of Chicago Press.',
    'Hulley, S. B., Cummings, S. R., Browner, W. S., Grady, D. G., & Newman, T. B. (2013). *Designing clinical research* (4th ed.). Lippincott Williams & Wilkins.',
  ],
  related: ['research/finding-sources', 'writing/essentials/thesis', 'research/literature-review'],
}

export default guide
