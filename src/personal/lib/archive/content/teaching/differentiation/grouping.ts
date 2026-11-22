import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How learners are grouped shapes what they are expected to do and who they learn from. Flexible grouping means groups are formed for a purpose and a short time, based on current evidence, and change often.',
  nutshell: [
    'Groups can be based on **readiness, interest, mixed attainment or random**, depending on the task.',
    '**Fixed** ability groups, and setting or streaming, tend to help higher attainers a little and harm lower attainers.',
    'Short-term groups for specific needs, then regrouped, avoid the labels and low expectations.',
    'Mix whole-class, small-group, pair and individual work across a week.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Kinds of grouping',
      blocks: [
        {
          t: 'table',
          head: ['Grouping', 'When to use it'],
          rows: [
            ['Whole class', 'Introducing new content, modelling, discussion, retrieval.'],
            ['Readiness (similar needs)', 'Short reteaching or extension based on a recent check, for example a teacher-table group of learners who missed yesterday’s key idea.'],
            ['Mixed attainment', 'Discussion and problems where varied perspectives help, with structures so everyone contributes.'],
            ['Interest', 'Projects or choices where learners pick a topic or product.'],
            ['Random', 'Building relationships across the class; quick pair tasks.'],
            ['Individual', 'Independent practice and assessment.'],
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says about ability grouping',
      blocks: [
        {
          t: 'p',
          text: 'The Education Endowment Foundation’s review finds that **setting and streaming** (separate classes by attainment) have a small negative effect on average, with the harm concentrated among lower attainers and disadvantaged learners, and small gains for higher attainers. Lower groups often get less experienced teachers, slower pace and lower expectations. Placement can also be inaccurate and hard to move out of.',
        },
        {
          t: 'p',
          text: 'Flexible **within-class** grouping for specific, short-term purposes shows more positive results, as long as groups change as learners progress. The research on gifted learners is a partial exception: grouping them together for accelerated or enriched work shows clear benefits for them (see [stretching advanced learners](@teaching/differentiation/advanced)).',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Making grouping flexible',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Form groups from recent evidence (an exit ticket, a hinge question), not last term’s grades.',
            'Keep readiness groups short-lived and regroup often.',
            'Name groups by task, not by level ("the fractions group", not "the low table").',
            'Give every group rich, respectful work.',
            'Structure mixed groups so all members contribute (see [cooperative learning](@teaching/techniques/active-learning/cooperative)).',
          ],
          dont: [
            'Seat learners by ability for the whole year.',
            'Always pair a struggling learner with a strong one as an unpaid tutor.',
            'Let groups signal fixed labels that learners carry into how they see themselves.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Education Endowment Foundation. *Teaching and Learning Toolkit: Setting and streaming; Within-class attainment grouping*.',
    'Francis, B., et al. (2017). Exploring the relative lack of impact of research on "ability grouping" in England. *Oxford Review of Education, 43*(1), 1–17.',
    'Steenbergen-Hu, S., Makel, M. C., & Olszewski-Kubilius, P. (2016). What one hundred years of research says about the effects of ability grouping and acceleration on K–12 students’ academic achievement. *Review of Educational Research, 86*(4), 849–899.',
  ],
  related: ['teaching/differentiation/foundations', 'teaching/techniques/active-learning/cooperative', 'teaching/differentiation/advanced'],
}

export default guide
