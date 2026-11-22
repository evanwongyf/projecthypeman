import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Exam technique is the skill of turning what you know into marks. Two learners with the same knowledge can get very different grades depending on how carefully they read questions, manage time and structure answers.',
  nutshell: [
    '**Read every question carefully**: command word, topic, number of marks.',
    '**Marks guide length**: roughly one clear point per mark, and time in proportion.',
    '**Plan your time** before you start, and keep to it.',
    '**Never leave a blank**: a partial answer can still earn marks.',
    'Leave time to check.',
  ],
  sections: [
    {
      id: 'start',
      title: 'The first five minutes',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the instructions', body: 'How many questions? Any choices? Which sections are compulsory?' },
            { title: 'Skim the whole paper', body: 'Get a sense of what is coming. Your brain starts working on later questions in the background.' },
            { title: 'Plan your time', body: 'Divide the time by the marks. Note target times next to each section.' },
            { title: 'Start with a confident question', body: 'If allowed, starting with a question you can do builds momentum.' },
          ],
        },
      ],
    },
    {
      id: 'reading',
      title: 'Reading questions',
      blocks: [
        {
          t: 'list',
          items: [
            'Underline the **command word** (describe, explain, evaluate). See [understanding the question](@writing/essentials/the-question).',
            'Circle key terms and limits ("two reasons", "since 1945", "using the graph").',
            'Check the **marks**: a 2-mark question wants a short answer; a 12-mark question wants depth and a judgement.',
            'If it refers to a source, graph or data, use it explicitly in your answer.',
            'Answer the question asked, not the one you revised for.',
          ],
        },
      ],
    },
    {
      id: 'time',
      title: 'Managing time',
      blocks: [
        {
          t: 'example',
          title: 'A 90-minute paper worth 80 marks',
          lines: [
            { label: 'Rate', text: '90 ÷ 80 ≈ 1.1 minutes per mark.' },
            { label: '4 marks', text: 'About 4–5 minutes.' },
            { label: '12 marks', text: 'About 13 minutes, including a short plan.' },
            { label: 'Reserve', text: 'Keep 5 minutes at the end for checking.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Stuck? Move on',
          text: 'If a question stalls you, write what you can, mark it, and come back later. Spending ten minutes on 2 marks costs you the easier marks elsewhere.',
        },
      ],
    },
    {
      id: 'answers',
      title: 'Writing answers',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Show working in calculations; method marks are often available even if the answer is wrong.',
            'Include units.',
            'Use subject vocabulary precisely.',
            'For long answers, write a quick plan first.',
            'Make a judgement when asked to evaluate.',
          ],
          dont: [
            'Write everything you know on the topic.',
            'Repeat the question back as your answer.',
            'Leave blanks; an attempt can earn marks.',
            'Rush the last question because you over-ran earlier.',
          ],
        },
      ],
    },
  ],
  related: ['exams/past-papers', 'writing/forms/timed', 'exams/multiple-choice'],
}

export default guide
