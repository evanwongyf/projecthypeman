import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Learners with significant special needs often have an individual plan: an IEP in the United States, an EHCP or SEN support plan in England, and similar documents elsewhere. A good plan describes where the learner is now, what they will work toward, and exactly what support will help. A great one is actually used in lessons.',
  nutshell: [
    'Plans start from a clear picture of the learner’s **current strengths and needs**.',
    'Goals are **SMART**: specific, measurable, achievable, relevant and time-bound.',
    'Every teacher who works with the learner should know the plan and use it.',
    'Plans are reviewed regularly with the learner and family.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Types of plan',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'IEP (US)', def: 'Individualized Education Program under IDEA. A legal document for learners eligible for special education, including present levels of performance, measurable annual goals, services, accommodations and how progress will be measured.' },
            { term: '504 plan (US)', def: 'Under Section 504 of the Rehabilitation Act (1973). Provides accommodations for learners with a disability that limits a major life activity, who may not need specialised instruction.' },
            { term: 'EHCP (England)', def: 'Education, Health and Care Plan. A legal document for children and young people up to 25 with more complex needs, covering education, health and social care.' },
            { term: 'SEN support plan (England)', def: 'For learners on SEN support without an EHCP. Follows the graduated approach: assess, plan, do, review.' },
          ],
        },
      ],
    },
    {
      id: 'parts',
      title: 'What goes in a good plan',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'A profile of the learner', body: 'Strengths, interests and what the learner and family say helps. Start with who they are, not only what they find hard.' },
            { title: 'Current levels', body: 'Specific evidence about where they are now: "Reads 45 words correct per minute on Year 3 texts" rather than "weak reader".' },
            { title: 'Goals', body: 'A small number of SMART goals for the most important areas.' },
            { title: 'Provision', body: 'What will be done, by whom, how often: "Structured phonics intervention, 3 × 20 minutes per week, with trained TA."' },
            { title: 'Accommodations', body: 'The everyday adjustments in class and exams. See [accommodations and modifications](@teaching/special-education/foundations/accommodations).' },
            { title: 'Monitoring and review', body: 'How and when progress is checked, and when the plan is reviewed.' },
          ],
        },
      ],
    },
    {
      id: 'goals',
      title: 'Writing SMART goals',
      blocks: [
        {
          t: 'table',
          head: ['Weak goal', 'SMART goal'],
          rows: [
            ['Will improve reading.', 'By March, Ali will read a Year 3 level passage aloud at 70 words correct per minute with 95% accuracy, measured by fortnightly one-minute reading probes.'],
            ['Will behave better in class.', 'By the end of term, Jo will use her break card to request a 3-minute break instead of leaving the room, in 4 out of 5 observed instances, recorded on a daily tracker.'],
            ['Will know times tables.', 'By June, Sam will recall 2, 5 and 10 times table facts within 3 seconds with 90% accuracy on a mixed 20-fact check.'],
            ['Will be more independent.', 'By the end of the unit, Mia will complete a four-step written task using her visual checklist with no more than one adult prompt, in 3 consecutive lessons.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The stranger test',
          text: 'Could someone who has never met the learner read the goal, watch them for ten minutes and say whether it has been met? If not, it is not measurable yet.',
        },
      ],
    },
    {
      id: 'using',
      title: 'From paper to practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Read the plans for every learner you teach, and keep a one-page summary to hand.',
            'Build the accommodations into your lesson planning.',
            'Collect evidence against goals as part of normal teaching.',
            'Include the learner’s own views in reviews.',
            'Ask the SENCO or special education team when a strategy is not working.',
          ],
          dont: [
            'Treat the plan as the special education team’s job only.',
            'Write goals so vague that progress cannot be judged.',
            'Pack a plan with twenty goals; focus on what matters most.',
            'Leave a plan unchanged when it is clearly not working.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Individuals with Disabilities Education Act, 20 U.S.C. § 1414(d) (IEP requirements).',
    'Department for Education & Department of Health. (2015). *SEND code of practice: 0 to 25 years*.',
    'Bateman, B. D., & Linden, M. A. (2012). *Better IEPs: How to develop legally correct and educationally useful programs* (5th ed.). Attainment Company.',
  ],
  related: ['teaching/special-education/foundations/accommodations', 'teaching/special-education/foundations/tiered-support', 'teaching/assessment/objectives'],
}

export default guide
