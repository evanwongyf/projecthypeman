import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'In maths, physics, chemistry and similar subjects, exams mostly test whether you can solve problems, not whether you can recite facts. Rereading notes or even flashcards alone will not prepare you. You need to practise doing problems, especially mixed ones, under realistic conditions.',
  nutshell: [
    '**Do problems**, lots of them, without looking at worked solutions first.',
    '**Mix** problem types so you practise choosing the method.',
    'When stuck, study a **worked example**, then try a similar problem **without** it.',
    'Keep a **mistake log** and redo the problems you got wrong.',
    'Learn key formulas and facts with flashcards, but understand where they come from.',
  ],
  sections: [
    {
      id: 'method',
      title: 'A revision method',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Know the essentials', body: 'Formulas, definitions and key facts on flashcards. Test yourself until fluent. See [memorising formulas](@memory/memorising-text).' },
            { title: 'Study a worked example', body: 'For each problem type, read one worked solution and explain every step to yourself.' },
            { title: 'Try a similar problem alone', body: 'Cover the example and solve one like it. Check.' },
            { title: 'Practise mixed problems', body: 'Shuffle problem types together (see [interleaving](@teaching/techniques/learning-strategies/interleaving)). The hardest part in exams is recognising which method to use.' },
            { title: 'Do timed past papers', body: 'Closer to the exam, full papers under exam conditions. See [past papers](@exams/past-papers).' },
          ],
        },
      ],
    },
    {
      id: 'stuck',
      title: 'When you get stuck',
      blocks: [
        {
          t: 'list',
          items: [
            'Reread the question and write down what you know and what you need to find.',
            'Draw a diagram.',
            'Ask: have I seen a problem like this? What method did it use?',
            'Try a simpler version with easier numbers.',
            'Give it a real effort (10 minutes or so) before looking at the solution. Struggle is useful; endless struggle is not.',
            'After looking at a solution, close it and solve the problem again yourself. See [solving problems](@thinking/problem-solving).',
          ],
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Learning from mistakes',
      blocks: [
        {
          t: 'table',
          head: ['Mistake type', 'Fix'],
          rows: [
            ['Did not know the method', 'Worked example, then similar problems.'],
            ['Chose the wrong method', 'More mixed practice; write down how to recognise each problem type.'],
            ['Algebra or arithmetic slip', 'Slow down, show every step, check by estimating or substituting back.'],
            ['Misread the question', 'Underline what is asked; check units and what form the answer should take.'],
            ['Forgot a formula', 'Flashcards, and practise deriving it.'],
          ],
        },
      ],
    },
  ],
  related: ['teaching/techniques/learning-strategies/interleaving', 'thinking/problem-solving', 'exams/past-papers', 'teaching/subjects/maths'],
}

export default guide
