import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Interleaving means mixing different kinds of problems or topics in one practice session, instead of doing all of one kind before moving to the next. It feels harder and messier, and it leads to better learning, especially at choosing the right method.',
  nutshell: [
    '**Blocked practice**: AAAA BBBB CCCC. **Interleaved practice**: ABCB CACB ACBA.',
    'In blocked practice you know which method to use before you read the question. In real tests you do not.',
    'Interleaving trains you to **discriminate** between problem types and pick the right strategy.',
    'Works best with related material that is easy to confuse. Learn each type first, then mix.',
  ],
  sections: [
    {
      id: 'what',
      title: 'Blocked versus interleaved',
      lead: 'The same problems in a different order.',
      blocks: [
        {
          t: 'p',
          text: 'Most textbooks group practice by topic: a page of volume-of-a-cylinder questions after the lesson on cylinders. Every question uses the same formula, so learners can succeed without ever deciding which formula applies. Interleaving shuffles problems from several topics together.',
        },
        {
          t: 'example',
          title: 'A maths homework, two ways',
          lines: [
            { label: 'Blocked', text: 'Q1–5: area of triangles. Q6–10: area of circles. Q11–15: area of trapeziums.' },
            { label: 'Interleaved', text: 'Q1: circle. Q2: trapezium. Q3: triangle. Q4: circle. Q5: triangle. Q6: trapezium… Each question first requires working out what kind of shape it is.' },
          ],
        },
        {
          t: 'p',
          text: 'In a study by Rohrer and Taylor (2007), students who practised volume problems interleaved did worse during practice but scored far higher on a test a week later: 63% versus 20%. A large classroom trial with seventh graders found similar benefits (Rohrer et al., 2020).',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it works',
      lead: 'Learning to choose, not just to do.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Discrimination', body: 'Seeing different types side by side highlights what makes them different, like comparing paintings by two artists helps you tell their styles apart (Kornell & Bjork, 2008).' },
            { title: 'Strategy selection', body: 'Every problem forces the decision "which method is this?", which is exactly what exams require.' },
            { title: 'Built-in spacing', body: 'Mixing topics naturally spreads out practice of each one, adding the benefits of [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).' },
            { title: 'Desirable difficulty', body: 'It feels harder and slower, which learners often mistake for learning less. It is the effort that helps.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Learners will prefer blocking',
          text: 'In studies, most learners believe blocked practice worked better even when their own results show the opposite. Explain the evidence and expect some grumbling.',
        },
      ],
    },
    {
      id: 'how',
      title: 'How to interleave',
      lead: 'Practical guidelines.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Learn the basics first', body: 'Introduce each new method with some focused practice. Interleave once learners can do each type on its own.' },
            { title: 'Mix related, confusable types', body: 'Interleaving helps most with things that look alike but need different approaches: similar formulas, similar grammar tenses, similar diseases. Mixing unrelated topics (French verbs and photosynthesis) has less clear benefit.' },
            { title: 'Mix old with new', body: 'Include earlier topics in each practice set, not just this week’s.' },
            { title: 'Ask "how do you know?"', body: 'Get learners to name the problem type and why before solving it.' },
          ],
        },
        {
          t: 'list',
          items: [
            '**Languages**: mix past, present and future tense sentences to translate.',
            '**Science**: mix calculations for speed, density and pressure.',
            '**History**: mix sources from different periods and ask which period each is from.',
            '**Music**: practise sections of different pieces in rotation rather than one piece at a time.',
            '**Sport**: mix different shots or passes in one drill.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science, 35*(6), 481–498.',
    'Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: Is spacing the "enemy of induction"? *Psychological Science, 19*(6), 585–592.',
    'Rohrer, D., Dedrick, R. F., Hartwig, M. K., & Cheung, C.-N. (2020). A randomized controlled trial of interleaved mathematics practice. *Journal of Educational Psychology, 112*(1), 40–52.',
  ],
  related: ['teaching/techniques/learning-strategies/spaced-practice', 'teaching/techniques/learning-strategies/retrieval-practice'],
}

export default guide
