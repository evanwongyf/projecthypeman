import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Teaching can expand to fill every available hour. Much of that time goes on tasks that do little for learning. Cutting them, and protecting time for rest, is not laziness; it makes you a better, more sustainable teacher.',
  nutshell: [
    'Ask of every task: **does this help learners learn?** If not, reduce or drop it.',
    'The biggest time sinks are often **marking**, **planning from scratch** and **data entry**.',
    'Use **whole-class feedback**, **shared planning** and **routines** to save hours.',
    'Watch for signs of burnout, and seek support early.',
  ],
  sections: [
    {
      id: 'marking',
      title: 'Marking',
      blocks: [
        {
          t: 'p',
          text: 'Detailed written marking takes enormous time and has limited evidence of impact, especially when learners do not act on it (see [effective feedback](@teaching/assessment/feedback)). A UK government workload review (2016) recommended marking be "meaningful, manageable and motivating".',
        },
        {
          t: 'table',
          head: ['Instead of…', 'Try…'],
          rows: [
            ['Writing individual comments on every book', 'Whole-class feedback: read the work, note common errors and strengths, address them next lesson.'],
            ['Correcting every error', 'Marking a few key points and asking learners to find and fix the rest.'],
            ['Taking marking home', 'Marking in class while learners work, with live verbal feedback.'],
            ['Grading every piece of practice', 'Self-marking of quizzes; saving detailed marking for key assessments.'],
          ],
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning',
      blocks: [
        {
          t: 'list',
          items: [
            'Share and reuse unit plans and resources across a team.',
            'Plan units, not just single lessons (see [planning a unit](@teaching/guides/planning/unit-plan)).',
            'Use consistent lesson routines so each lesson needs less new design.',
            'Improve good resources over time rather than making new ones every year.',
            'Script only the parts that matter most: explanations and key questions.',
          ],
        },
      ],
    },
    {
      id: 'boundaries',
      title: 'Boundaries and wellbeing',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Set times when you stop working and when you check email.',
            'Protect sleep, exercise and time with people.',
            'Batch similar tasks together.',
            'Say no, or not now, to tasks that do not help learners.',
            'Talk to colleagues, a mentor or a union if workload is unmanageable.',
          ],
          dont: [
            'Reply to emails late at night as a habit.',
            'Compare your hours with the most overworked colleague.',
            'Ignore signs of exhaustion, dread or cynicism that last weeks.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Burnout shows as exhaustion, cynicism and a sense of ineffectiveness (Maslach & Leiter, 2016). If you recognise these, talk to someone you trust and consider professional support; many countries have teacher support helplines. See also [rest and wellbeing](@habits/wellbeing).',
        },
      ],
    },
  ],
  sources: [
    'Independent Teacher Workload Review Group. (2016). *Eliminating unnecessary workload around marking*. Department for Education.',
    'Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience. *World Psychiatry, 15*(2), 103–111.',
    'Education Endowment Foundation. (2016). *A marked improvement? A review of the evidence on written marking*.',
  ],
  related: ['teaching/assessment/feedback', 'teaching/guides/planning/unit-plan', 'habits/wellbeing'],
}

export default guide
