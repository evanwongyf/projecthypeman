import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A grade is a message about a learner’s achievement. Many common grading habits, like averaging every score over a term or giving zeros for missing work, blur that message. Clearer grading separates what a learner knows and can do from how they behave.',
  nutshell: [
    'Grades should mainly report **achievement against goals**.',
    'Report **effort, behaviour and punctuality separately** rather than mixing them into the grade.',
    '**Averaging** over time punishes early mistakes; weight recent, consistent evidence.',
    'A **zero on a 100-point scale** has an outsized effect; consider alternatives for missing work.',
  ],
  sections: [
    {
      id: 'problems',
      title: 'Common distortions',
      blocks: [
        {
          t: 'table',
          head: ['Practice', 'Problem', 'Alternative'],
          rows: [
            ['Averaging all scores across a term', 'A learner who started badly and mastered the content by the end gets a low grade.', 'Use the most recent and consistent evidence of mastery.'],
            ['Zeros for missing work on a 0–100 scale', 'One zero can outweigh several good grades; the gap between 0 and 60 is larger than between all passing grades.', 'Mark as incomplete and require the work; or use a minimum score or a 0–4 scale.'],
            ['Grading homework and practice', 'Penalises learners for mistakes made while learning.', 'Treat practice as formative; grade summative evidence.'],
            ['Mixing in behaviour and effort', 'The grade no longer tells anyone what the learner knows.', 'Report learning habits separately.'],
            ['Extra credit for unrelated tasks', 'Bringing in tissues raises a maths grade.', 'Only credit evidence of learning.'],
          ],
        },
      ],
    },
    {
      id: 'standards',
      title: 'Standards-based grading',
      blocks: [
        {
          t: 'p',
          text: 'In standards-based grading, learners get a separate rating for each learning goal (for example, on a 1–4 scale from "beginning" to "exceeding"), rather than one overall percentage. Learners and families see exactly which goals are secure. It links naturally to [mastery learning](@teaching/techniques/instruction/mastery) and [rubrics](@teaching/assessment/rubrics).',
        },
      ],
    },
    {
      id: 'reliability',
      title: 'Consistency',
      blocks: [
        {
          t: 'p',
          text: 'Over a century ago, Starch and Elliott (1912) sent the same English essay to many teachers and got grades ranging from 50 to 98. Marking of extended work remains inconsistent unless teachers share criteria and examples and moderate together. [Comparative judgement](@teaching/assessment/comparative-judgement) is one way to improve reliability.',
        },
      ],
    },
  ],
  sources: [
    'Guskey, T. R., & Brookhart, S. M. (Eds.). (2019). *What we know about grading*. ASCD.',
    'Brookhart, S. M., et al. (2016). A century of grading research: Meaning and value in the most common educational measure. *Review of Educational Research, 86*(4), 803–848.',
    'Starch, D., & Elliott, E. C. (1912). Reliability of the grading of high-school work in English. *The School Review, 20*(7), 442–457.',
  ],
  related: ['teaching/assessment/rubrics', 'teaching/assessment/comparative-judgement', 'teaching/assessment/formative-summative'],
}

export default guide
