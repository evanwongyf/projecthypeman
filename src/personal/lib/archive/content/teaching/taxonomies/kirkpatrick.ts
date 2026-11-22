import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How do you know whether a training course or teaching programme worked? Donald Kirkpatrick’s four levels, first published in 1959, are the most widely used framework for evaluating training, especially in workplaces.',
  nutshell: [
    'Four levels: **reaction, learning, behaviour, results**.',
    'Each level is harder to measure, and more important, than the one below.',
    'Satisfaction ("happy sheets") does not show learning; learning does not guarantee changed behaviour.',
    'Plan evaluation from the top down: start with the results you want.',
  ],
  sections: [
    {
      id: 'levels',
      title: 'The four levels',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Level 1: Reaction', body: 'Did participants find it engaging, relevant and useful? Measured with surveys at the end.' },
            { name: 'Level 2: Learning', body: 'Did they gain the intended knowledge, skills or attitudes? Measured with tests, demonstrations, before-and-after comparisons.' },
            { name: 'Level 3: Behaviour', body: 'Do they apply it on the job or in practice? Measured by observation, manager reports, work samples, weeks or months later.' },
            { name: 'Level 4: Results', body: 'Did it make a difference to the goals it was meant to serve: fewer errors, better learner outcomes, higher sales, fewer accidents?' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Happy sheets are not evidence of learning',
          text: 'Learners’ ratings of how much they enjoyed or learned from training are only weakly related to how much they actually learned. Research on student evaluations of teaching raises similar concerns. Measure learning directly.',
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning evaluation backwards',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Results', body: 'What organisational or learner outcome should change? How will you measure it?' },
            { title: 'Behaviour', body: 'What must people do differently to achieve that? What will support them on the job?' },
            { title: 'Learning', body: 'What knowledge and skills do they need to do that? How will you check they have them?' },
            { title: 'Reaction', body: 'What will make the training relevant and engaging enough to learn from?' },
          ],
        },
        {
          t: 'p',
          text: 'This mirrors [backward design](@teaching/guides/planning/backward-design) in schools. Behaviour change often fails not because people did not learn but because nothing in their environment supports using what they learned; follow-up, job aids and manager support matter.',
        },
      ],
    },
  ],
  sources: [
    'Kirkpatrick, D. L., & Kirkpatrick, J. D. (2006). *Evaluating training programs: The four levels* (3rd ed.). Berrett-Koehler.',
    'Alliger, G. M., Tannenbaum, S. I., Bennett, W., Traver, H., & Shotland, A. (1997). A meta-analysis of the relations among training criteria. *Personnel Psychology, 50*(2), 341–358.',
  ],
  related: ['teaching/guides/contexts/adults', 'teaching/guides/planning/backward-design', 'teaching/taxonomies/dreyfus'],
}

export default guide
