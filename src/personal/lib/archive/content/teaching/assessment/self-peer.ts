import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When learners judge their own and each other’s work against clear criteria, they come to understand what quality looks like, and they need the teacher less. Peer and self-assessment have to be taught, and they work best for improvement, not for grades.',
  nutshell: [
    'Start with clear criteria and examples, so learners know what they are looking for.',
    'Peer feedback should be **kind, specific and helpful** (Ron Berger).',
    'Use it for feedback on drafts, not to award final marks.',
    'Self-assessment builds [metacognition](@teaching/techniques/learning-strategies/metacognition): learners notice what they know and what they do not.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why it works',
      blocks: [
        {
          t: 'p',
          text: 'Assessing someone else’s work makes the criteria concrete: you have to decide whether a paragraph "explains the effect" or only "describes it". Doing this sharpens a learner’s own sense of quality. Reviews of peer assessment report positive effects on achievement, especially when learners are trained and the process is structured (Topping, 1998; Double, McGrane & Hopfenbeck, 2020).',
        },
      ],
    },
    {
      id: 'butterfly',
      title: 'Austin’s butterfly',
      lead: 'A famous example of peer critique.',
      blocks: [
        {
          t: 'p',
          text: 'Ron Berger shares the story of Austin, a first-grader who drew a butterfly six times. After each draft, classmates gave specific, kind feedback: "the wings need to be more pointed", "add the pattern on the top wing". Each draft improved dramatically. The final drawing is scientifically accurate and startlingly good. The lesson: with specific feedback and chances to revise, young learners can produce work far beyond what anyone expected.',
        },
      ],
    },
    {
      id: 'structures',
      title: 'Structures',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Two stars and a wish', body: 'Two specific strengths and one specific improvement, each linked to the success criteria.' },
            { title: 'Gallery critique', body: 'Work is displayed; learners walk around leaving sticky-note feedback against one or two criteria.' },
            { title: 'Criteria highlighting', body: 'Learners highlight where each success criterion is met in a partner’s work, in different colours. Gaps become obvious.' },
            { title: 'Feedback protocol', body: 'Author explains what they want feedback on; reviewer notices, then asks questions, then suggests; author responds.' },
            { title: 'Self-assessment against criteria', body: 'Before handing in, learners tick each criterion they believe they have met and mark where in the work.' },
            { title: 'Traffic lights', body: 'Learners rate their confidence on each objective as green, amber or red, then act on the reds.' },
          ],
        },
      ],
    },
    {
      id: 'teaching-it',
      title: 'Teaching it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Model it', body: 'Assess an anonymous piece of work aloud against the criteria, showing how you decide.' },
            { title: 'Practise on anonymous work', body: 'Learners assess examples from previous years before they assess each other.' },
            { title: 'Give sentence stems', body: '"You have met ___ because ___." "To improve ___, you could try ___."' },
            { title: 'Check the feedback', body: 'Read some peer comments and give feedback on the feedback.' },
            { title: 'Require action', body: 'Learners respond to feedback by revising, and note what they changed.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Keep it anonymous at first.', 'Focus on one or two criteria at a time.', 'Build a culture where critique is about the work, not the person.'],
          dont: ['Use peer marking for grades that count.', 'Accept "it’s good" as feedback.', 'Assume learners know how to give feedback without being taught.'],
        },
      ],
    },
  ],
  sources: [
    'Berger, R. (2003). *An ethic of excellence: Building a culture of craftsmanship with students*. Heinemann.',
    'Topping, K. (1998). Peer assessment between students in colleges and universities. *Review of Educational Research, 68*(3), 249–276.',
    'Double, K. S., McGrane, J. A., & Hopfenbeck, T. N. (2020). The impact of peer assessment on academic performance: A meta-analysis of control group studies. *Educational Psychology Review, 32*, 481–509.',
    'Andrade, H. L. (2019). A critical review of research on student self-assessment. *Frontiers in Education, 4*, 87.',
  ],
  related: ['teaching/assessment/feedback', 'teaching/assessment/rubrics', 'teaching/techniques/learning-strategies/metacognition'],
}

export default guide
