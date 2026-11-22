import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'People are better at comparing two things than at judging one thing against an abstract standard. Comparative judgement uses this: instead of marking each essay with a rubric, judges repeatedly look at two pieces of work and decide which is better. A statistical model turns many such decisions into a reliable ranking and scale.',
  nutshell: [
    'Based on Thurstone’s "law of comparative judgement" (1927).',
    'Judges make quick, holistic "which is better?" decisions on pairs of work.',
    'With enough judgements, the results are often **more reliable** than rubric marking for extended writing.',
    'It gives a rank and a scale, but less detailed, criterion-by-criterion feedback.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How it works',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Collect the work', body: 'Scan or upload all pieces of work on the same task.' },
            { title: 'Compare pairs', body: 'Judges see two pieces side by side and choose the better one, usually in under a minute.' },
            { title: 'Repeat', body: 'Each piece is compared many times with different partners, by different judges.' },
            { title: 'Model the results', body: 'Software fits a statistical model to all the decisions to place every piece on a scale.' },
            { title: 'Anchor and use', body: 'Optionally, include pieces with known grades to convert the scale to grades. Use the ranking to discuss what makes work better.' },
          ],
        },
      ],
    },
    {
      id: 'pros-cons',
      title: 'Strengths and limits',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use for extended, open tasks like essays or creative writing where rubrics struggle.',
            'Use it to moderate across a department or several schools.',
            'Use the ordered work as examples to show learners what quality looks like.',
          ],
          dont: [
            'Expect detailed feedback on each criterion; add a feedback step afterwards.',
            'Use for short-answer tests with clear right answers; ordinary marking works well there.',
            'Run it with too few judgements per piece; reliability depends on enough comparisons.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Even without software, comparing two anonymous pieces and discussing "which is better and why?" is a powerful way to build shared standards with colleagues or learners.',
        },
      ],
    },
  ],
  sources: [
    'Thurstone, L. L. (1927). A law of comparative judgment. *Psychological Review, 34*(4), 273–286.',
    'Pollitt, A. (2012). The method of adaptive comparative judgement. *Assessment in Education: Principles, Policy & Practice, 19*(3), 281–300.',
    'Christodoulou, D. (2017). *Making good progress?* Oxford University Press.',
  ],
  related: ['teaching/assessment/rubrics', 'teaching/assessment/grading', 'teaching/assessment/self-peer'],
}

export default guide
