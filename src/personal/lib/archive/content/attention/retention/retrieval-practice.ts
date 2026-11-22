import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every time you pull a memory out, you change it: it becomes stronger and easier to find next time. This testing effect (or retrieval practice effect) is one of the most robust findings in learning research. Testing is not just a way to measure learning; it is a way to cause it.',
  nutshell: [
    'Roediger and Karpicke (2006): rereading won after 5 minutes, but **testing won by a wide margin after a week**.',
    'Meta-analyses find average effects of about **g = 0.5–0.6** compared with restudying (Rowland, 2014; Adesope et al., 2017).',
    'It works best with **feedback**, **effortful recall** (free recall, short answer) and **spacing**.',
    'It feels harder and less effective than rereading: an **illusion of fluency** misleads learners.',
  ],
  sections: [
    {
      id: 'experiment',
      title: 'The classic experiment',
      blocks: [
        { t: 'bars', title: 'Recall of a prose passage (Roediger and Karpicke, 2006, experiment 2)', unit: '%', decimals: 0, max: 100, items: [
          { label: 'Study ×4, test after 5 min', value: 83, group: 'After 5 minutes' },
          { label: 'Study + test ×3, test after 5 min', value: 71 },
          { label: 'Study ×4, test after 1 week', value: 40, group: 'After 1 week' },
          { label: 'Study + test ×3, test after 1 week', value: 61 },
        ], caption: 'Repeated studying (SSSS) beat repeated testing (STTT) at 5 minutes, but repeated testing won after a week, with half again as much recalled.' },
        {
          t: 'math',
          tex: String.raw`\text{Relative benefit} = \frac{\text{test} - \text{restudy}}{\text{restudy}}`,
          caption: 'How much more is remembered with testing, as a share of the restudy result.',
          plain: 'Compare the two groups at the delayed test. The difference as a percentage of the restudy group’s score shows how much more testing produced.',
          where: [
            { sym: 'test', def: 'recall in the testing condition' },
            { sym: 'restudy', def: 'recall in the restudy condition' },
          ],
          syntax: [
            { sym: String.raw`\frac{a-b}{b}`, say: 'the change as a fraction of the starting value' },
          ],
          worked: {
            title: 'Roediger and Karpicke, one week later',
            steps: [
              'Testing: 61%. Restudy: 40%.',
              String.raw`Difference: \(61 - 40 = 21\) percentage points.`,
              String.raw`Relative benefit: \(21/40 = 0.525 \approx 53\%\).`,
            ],
            why: [
              'the two results at one week',
              'the absolute gap',
              'as a share of the restudy result',
            ],
            answer: 'Testing produced about half again as much recall after a week, while students in the study-only group predicted they would remember more.',
          },
        },
      ],
    },
    {
      id: 'formats',
      title: 'Formats that work',
      blocks: [
        { t: 'table', head: ['Format', 'Effort', 'Notes'], rows: [
          ['Free recall (“write all you remember”)', 'High', 'Excellent for building connected knowledge'],
          ['Short-answer questions', 'High', 'Good for facts and concepts'],
          ['Flashcards (say the answer before flipping)', 'Medium–high', 'Only works if you actually retrieve before looking'],
          ['Multiple choice', 'Medium', 'Works well with plausible wrong answers and feedback'],
          ['Explain to someone (or the Feynman technique)', 'High', 'Combines retrieval and elaboration'],
          ['Practice exams', 'High', 'Also builds familiarity with exam format'],
          ['Brain dump at the start of a lesson', 'High', '“Write everything you remember about last lesson”'],
        ] },
        { t: 'dodont', do: [
          'Check answers and correct errors (feedback)',
          'Retrieve again later, spaced',
          'Keep stakes low: practice, not grades',
          'Mix topics in a quiz (interleaving)',
        ], dont: [
          'Peek at the answer before trying',
          'Stop when it feels easy; drop cards only after several correct, spaced recalls',
          'Use only recognition when you will need recall',
        ] },
      ],
    },
  ],
  sources: [
    'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249–255.',
    'Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. Science, 331(6018), 772–775.',
    'Rowland, C. A. (2014). The effect of testing versus restudy on retention. Psychological Bulletin, 140(6), 1432–1463.',
    'Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. Review of Educational Research, 87(3), 659–701.',
  ],
  related: ['teaching/techniques/learning-strategies/retrieval-practice', 'memory/active-recall', 'attention/retention/spacing'],
}

export default guide
