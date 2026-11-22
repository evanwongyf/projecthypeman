import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Supporting a child with serious conduct problems must go together with protecting the other children and staff. Schools need clear procedures for risk assessment, supervision, documentation and escalation, applied fairly and calmly.',
  nutshell: [
    'Treat **cruelty to animals**, **sexualised harm**, **threats with weapons** and **planned harm to others** as immediate escalation matters.',
    'Write a **risk and support plan** with the family and professionals for children with a pattern of harm.',
    'Protect **targets of bullying** first: separate, support and monitor.',
    'Document everything; share on a **need-to-know** basis under your school’s policies and Singapore’s PDPA.',
  ],
  sections: [
    {
      id: 'escalation',
      title: 'When to escalate immediately',
      blocks: [
        { t: 'checklist', items: [
          'Serious physical harm, or credible threats of it',
          'Deliberate cruelty to animals',
          'Sexual harm or harassment of other children',
          'Possession of weapons or plans to use them',
          'Fire-setting',
          'A disclosure suggesting the child is being abused or neglected',
          'Self-harm or suicidal statements',
        ] },
        { t: 'callout', tone: 'warn', title: 'Follow procedure', text: 'Inform the designated school leader the same day. Where there is immediate danger, call emergency services. Do not try to handle serious risk alone.' },
      ],
    },
    {
      id: 'plan',
      title: 'A risk and support plan',
      blocks: [
        { t: 'table', head: ['Section', 'Content'], rows: [
          ['Known risks', 'Specific behaviours, triggers, times and places'],
          ['Supervision', 'Where and when an adult must be nearby; recess and transition arrangements'],
          ['Protective steps', 'Seating, separation from specific peers, supervised toilet breaks if needed'],
          ['Positive support', 'Reward system, relationship adult, strengths-based roles'],
          ['Response plan', 'What staff do if an incident starts; who to call'],
          ['Communication', 'Who knows what; how parents are updated'],
          ['Review', 'Date and who reviews the plan'],
        ] },
      ],
    },
    {
      id: 'bullying',
      title: 'Protecting peers',
      blocks: [
        { t: 'p', text: 'Children with CU traits are over-represented among those who bully in planned, instrumental ways. Victims need protection and support regardless of the perpetrator’s needs: believe their reports, separate them where needed, check in regularly, and involve their parents. Restorative conversations can help with reactive conflicts but should be used cautiously where one child deliberately exploits others, as they can be used to further manipulate the victim.' },
      ],
    },
  ],
  sources: [
    'Ministry of Education Singapore. Guidance on bullying and student safety (school policies and circulars).',
    'Personal Data Protection Commission Singapore. Advisory Guidelines for the Education Sector.',
    'Fanti, K. A., & Kimonis, E. R. (2012). Bullying and victimization: The role of conduct problems and psychopathic traits. Journal of Research on Adolescence, 22(4), 617–631.',
  ],
  related: ['teaching/special-education/conduct-and-cu/assessment-and-referral', 'teaching/special-education/conduct-and-cu/case-studies', 'teaching/start-here'],
}

export default guide
