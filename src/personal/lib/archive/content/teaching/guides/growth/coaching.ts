import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Teachers improve fastest with focused, practical feedback and practice, just like learners. Instructional coaching, where a coach observes, agrees one small change and helps the teacher practise it, has some of the strongest evidence of any form of professional development.',
  nutshell: [
    'A meta-analysis found coaching improved teaching quality substantially and learner achievement noticeably (Kraft, Blazar & Hogan, 2018).',
    'Good coaching focuses on **one small, specific action step** at a time.',
    '**Practise** the step, ideally with the coach, before using it in class.',
    'Observations for development should be **low-stakes** and focus on learning, not a grade.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'A coaching cycle',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Observe', body: 'A short visit (10–20 minutes), focused on what learners are doing and learning.' },
            { name: 'Identify one step', body: 'Agree the highest-leverage, smallest change: "Give 5 seconds of wait time before cold calling."' },
            { name: 'Model and practise', body: 'The coach models the step; the teacher rehearses it, with feedback, until fluent.' },
            { name: 'Apply', body: 'The teacher uses it in lessons.' },
            { name: 'Follow up', body: 'The coach observes again: is the step secure? What is next?' },
          ],
          caption: 'Similar to Jim Knight’s "impact cycle" and Paul Bambrick-Santoyo’s "see it, name it, do it".',
        },
      ],
    },
    {
      id: 'observation',
      title: 'Useful observation',
      blocks: [
        {
          t: 'p',
          text: 'Robert Coe (2014) summarised research showing that graded lesson observations ("outstanding", "good"…) are much less reliable than people assume: two observers often disagree, and grades from single lessons say little about a teacher’s long-term impact. Observation is far more useful as a tool for development than for judgement.',
        },
        {
          t: 'dodont',
          do: [
            'Focus on what learners are doing, thinking and producing.',
            'Look at learners’ books and work, not only the teacher.',
            'Record specific evidence ("3 of 28 learners answered questions").',
            'Agree one action step, not a list of ten.',
          ],
          dont: [
            'Grade individual lessons.',
            'Give vague feedback ("pace could be better").',
            'Observe only when something is going wrong.',
          ],
        },
      ],
    },
    {
      id: 'other',
      title: 'Other approaches',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Lesson study', body: 'From Japan: teachers plan a lesson together, one teaches while others observe learners, then they refine it. Popular worldwide, though one large English trial found no clear effect on attainment (EEF, 2017).' },
            { title: 'Peer observation', body: 'Colleagues visit each other’s lessons to learn, not to judge.' },
            { title: 'Video', body: 'Filming your own lesson and watching for one thing is a cheap and powerful form of [reflection](@teaching/guides/growth/reflection).' },
            { title: 'Deliberate practice', body: 'Rehearsing specific moves (explanations, questioning sequences) outside lessons, with feedback.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Kraft, M. A., Blazar, D., & Hogan, D. (2018). The effect of teacher coaching on instruction and achievement: A meta-analysis of the causal evidence. *Review of Educational Research, 88*(4), 547–588.',
    'Coe, R. (2014). Classroom observation: It’s harder than you think. *CEM Blog*, Durham University.',
    'Knight, J. (2018). *The impact cycle*. Corwin.',
    'Bambrick-Santoyo, P. (2018). *Leverage leadership 2.0*. Jossey-Bass.',
  ],
  related: ['teaching/guides/growth/reflection', 'teaching/guides/growth/research', 'teaching/techniques/questioning/questioning'],
}

export default guide
