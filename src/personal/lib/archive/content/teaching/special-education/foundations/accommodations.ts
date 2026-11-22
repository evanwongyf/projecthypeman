import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An **accommodation** changes *how* a learner learns or shows what they know, without changing what they are expected to learn. A **modification** changes *what* they are expected to learn. The difference matters for fairness, for assessment and for a learner’s future options.',
  nutshell: [
    'Accommodations remove barriers; the standard stays the same. Extra time, audio texts, a scribe.',
    'Modifications change the standard or content. Fewer, simpler questions; a different curriculum goal.',
    'Use the least change that gives access. Accommodate before you modify.',
    'Accommodations should match what the learner uses every day, not appear only in exams.',
  ],
  sections: [
    {
      id: 'difference',
      title: 'The difference',
      blocks: [
        {
          t: 'table',
          head: ['', 'Accommodation', 'Modification'],
          rows: [
            ['Changes', 'How the learner accesses or demonstrates learning', 'What the learner is expected to learn or demonstrate'],
            ['Standard', 'Same as peers', 'Different from peers'],
            ['Example (reading)', 'The history text is read aloud by text-to-speech; the learner answers the same questions.', 'The learner reads a shorter, simpler text and answers fewer, easier questions.'],
            ['Example (maths)', 'Use of a multiplication grid on a problem-solving test, where the goal is reasoning.', 'The learner works on addition while the class works on multiplication.'],
            ['Effect on grades', 'Usually none; the result means the same thing', 'The result shows progress on a different goal'],
          ],
        },
      ],
    },
    {
      id: 'types',
      title: 'Four kinds of accommodation',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Presentation', body: 'How information is given: large print, braille, audio, text-to-speech, sign language, simplified layout, instructions read aloud, visual supports.' },
            { title: 'Response', body: 'How the learner answers: typing, dictation or speech-to-text, a scribe, oral answers, answering in the test booklet, using a calculator or spell-checker where appropriate.' },
            { title: 'Setting', body: 'Where learning or testing happens: a quiet room, preferential seating, small group, adapted lighting, reduced distractions.' },
            { title: 'Timing and scheduling', body: 'When and how long: extra time, rest breaks, testing over several sessions, a particular time of day.' },
          ],
        },
        {
          t: 'p',
          text: 'In UK exams these are called **access arrangements**, agreed in advance with the exam board. The Equality Act 2010 refers more broadly to **reasonable adjustments**.',
        },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing well',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify the barrier', body: 'What exactly stops this learner showing what they know? Decoding text? Handwriting speed? Anxiety in large rooms?' },
            { title: 'Check the goal', body: 'What is the task really assessing? If a science test is assessing science, reading support does not change the goal. If it is a reading test, reading aloud would.' },
            { title: 'Pick the least change', body: 'Choose the accommodation that removes the barrier while changing the task the least.' },
            { title: 'Use it every day', body: 'A learner who types in exams should type in lessons. Accommodations that appear only on test day do not help.' },
            { title: 'Review', body: 'Is it being used? Is it working? Is it still needed? Involve the learner in the decision.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Modifications have consequences',
          text: 'Modifying the curriculum can mean a learner never meets the content needed for later courses or qualifications. Decide on modifications carefully, with the family and specialists, and keep expectations as high as possible.',
        },
      ],
    },
  ],
  sources: [
    'Thurlow, M. L., Elliott, J. L., & Ysseldyke, J. E. (2003). *Testing students with disabilities: Practical strategies for complying with district and state requirements* (2nd ed.). Corwin.',
    'Joint Council for Qualifications. *Access arrangements and reasonable adjustments* (updated annually).',
  ],
  related: ['teaching/special-education/foundations/plans', 'teaching/special-education/foundations/inclusion', 'teaching/special-education/strategies/assistive-tech'],
}

export default guide
