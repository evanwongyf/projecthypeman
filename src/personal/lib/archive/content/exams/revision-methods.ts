import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Not all revision is equal. In 2013, a team of psychologists led by John Dunlosky reviewed hundreds of studies on ten popular study techniques and rated each for how well it works. The most popular methods came out near the bottom.',
  nutshell: [
    '**High utility**: practice testing (self-quizzing) and distributed practice (spacing).',
    '**Moderate utility**: elaborative interrogation, self-explanation, interleaved practice.',
    '**Low utility**: summarising, highlighting, the keyword mnemonic, imagery for text, and rereading.',
    'Swap rereading and highlighting for self-testing, spread out over time.',
  ],
  sections: [
    {
      id: 'ranking',
      title: 'The ratings',
      lead: 'Dunlosky, Rawson, Marsh, Nathan and Willingham (2013).',
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'Rating', 'What it is'],
          rows: [
            ['Practice testing', 'High', 'Self-testing with flashcards, practice questions, past papers. See [active recall](@memory/active-recall).'],
            ['Distributed practice', 'High', 'Spreading study out over time. See [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).'],
            ['Elaborative interrogation', 'Moderate', 'Asking "why is this true?" and answering.'],
            ['Self-explanation', 'Moderate', 'Explaining each step to yourself as you study.'],
            ['Interleaved practice', 'Moderate', 'Mixing different problem types in one session.'],
            ['Summarisation', 'Low', 'Writing summaries. Helps if you are trained to do it well; many learners are not.'],
            ['Highlighting', 'Low', 'Marking text. Feels productive; does little on its own.'],
            ['Keyword mnemonic', 'Low', 'Sound-alike images for vocabulary. Works for some material, but benefits can fade.'],
            ['Imagery for text', 'Low', 'Picturing text content while reading. Limited evidence beyond easy-to-picture texts.'],
            ['Rereading', 'Low', 'Reading material again. Weak compared with self-testing.'],
          ],
          caption: '"Low" does not mean useless; it means weak, or effective only in limited situations, compared with the alternatives.',
        },
      ],
    },
    {
      id: 'swaps',
      title: 'Easy swaps',
      blocks: [
        {
          t: 'table',
          head: ['Instead of…', 'Try…'],
          rows: [
            ['Rereading your notes', 'Covering them and answering questions from memory'],
            ['Highlighting the textbook', 'Writing questions in the margin and testing yourself'],
            ['Making beautiful notes', 'Blurting what you remember, then filling gaps'],
            ['Cramming one topic all day', 'Rotating several topics across the week'],
            ['Doing 20 of the same problem', 'Mixing problems from different topics'],
            ['Watching a video again', 'Pausing and predicting or explaining before each step'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why do weak methods feel good?',
          text: 'Rereading and highlighting are easy and make material feel familiar, which feels like learning. Effortful methods feel harder, so they feel less effective. They are not. See [metacognition](@teaching/techniques/learning-strategies/metacognition).',
        },
      ],
    },
  ],
  sources: [
    'Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. *Psychological Science in the Public Interest, 14*(1), 4–58.',
  ],
  related: ['memory/active-recall', 'exams/revision-plan', 'teaching/techniques/learning-strategies/retrieval-practice'],
}

export default guide
