import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Assessment of serious conduct problems and CU traits is done by trained professionals (psychologists, psychiatrists, specialist counsellors), using several sources of information. Teachers contribute observations, records and questionnaires, and they start the referral. This guide explains the tools professionals use and the pathway in a Singapore school.',
  nutshell: [
    'Good assessment is **multi-informant** (parents, teachers, the child), **multi-method** (interviews, questionnaires, observation) and **developmental**.',
    'Common questionnaires: the **SDQ** (broad screening) and, for CU traits specifically, the **Inventory of Callous-Unemotional Traits (ICU)**; these support but do not replace clinical judgement.',
    'In Singapore schools, start with the **form teacher, year head and school counsellor**; external support includes **REACH** (Institute of Mental Health’s community team) and the **Child Guidance Clinic**.',
    'Any concern about **harm or abuse** follows the school’s safeguarding procedure immediately.',
  ],
  sections: [
    {
      id: 'tools',
      title: 'Tools professionals use',
      blocks: [
        { t: 'table', head: ['Tool', 'What it covers', 'Notes'], rows: [
          ['Strengths and Difficulties Questionnaire (SDQ)', '25 items: emotional symptoms, conduct problems, hyperactivity, peer problems, prosocial behaviour', 'Free; parent, teacher and self-report versions; a screen, not a diagnosis'],
          ['Inventory of Callous-Unemotional Traits (ICU)', '24 items on callousness, uncaring and unemotional dimensions', 'Research and clinical tool; interpreted by professionals'],
          ['Antisocial Process Screening Device (APSD)', 'CU, narcissism and impulsivity', 'Research and clinical use'],
          ['Clinical interviews (e.g. K-SADS)', 'Diagnostic criteria for ODD, CD and other conditions', 'By clinicians'],
          ['Functional behaviour assessment', 'What triggers and maintains behaviour', 'Often done with school staff'],
          ['Developmental and family history', 'Early development, trauma, parenting, family stress', 'Essential context'],
        ] },
      ],
    },
    {
      id: 'pathway',
      title: 'A referral pathway (Singapore schools)',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Observe and record', sub: 'teacher', tone: 'human' },
          { label: 'Discuss', sub: 'form teacher, year head, SEN officer', tone: 'process' },
          { label: 'School counsellor', sub: 'meets child and family', tone: 'model' },
          { label: 'External referral', sub: 'REACH, polyclinic, Child Guidance Clinic (IMH)', tone: 'data' },
          { label: 'Plan together', sub: 'school, family, clinicians', tone: 'output' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Safeguarding first', text: 'If a child may be harmed, may harm others, or discloses abuse, follow your school’s child protection procedure the same day (in Singapore this may involve MSF’s Child Protective Service or the police). Do not investigate yourself, and do not promise confidentiality.' },
      ],
    },
    {
      id: 'parents',
      title: 'Talking to parents',
      blocks: [
        { t: 'dodont', do: [
          'Start with the child’s strengths and your shared goal',
          'Describe specific behaviours with dates',
          'Ask what they see at home and what helps',
          'Explain the next step and that assessment is about understanding and support',
        ], dont: [
          'Use diagnostic labels or speculate about personality',
          'Blame the parents',
          'Share other children’s details',
        ] },
      ],
    },
  ],
  sources: [
    'Goodman, R. (1997). The Strengths and Difficulties Questionnaire: A research note. Journal of Child Psychology and Psychiatry, 38(5), 581–586.',
    'Kimonis, E. R. et al. (2008). Assessing callous-unemotional traits in adolescent offenders: Validation of the Inventory of Callous-Unemotional Traits. International Journal of Law and Psychiatry, 31(3), 241–252.',
    'Institute of Mental Health Singapore. REACH (Response, Early Intervention and Assessment in Community Mental Health).',
  ],
  related: ['teaching/special-education/conduct-and-cu/what-works', 'teaching/special-education/foundations/tiered-support', 'teaching/special-education/conduct-and-cu/safety-and-safeguarding'],
}

export default guide
