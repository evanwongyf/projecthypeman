import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'There is good news in this research: conduct problems are among the most treatable childhood difficulties, especially when help starts early, and children with CU traits do improve with the right approaches. The best-evidenced treatments work through parents and carers, with schools playing a supporting role.',
  nutshell: [
    '**Parent management training** (e.g. Incredible Years, Triple P, PCIT) is the best-evidenced treatment for childhood conduct problems.',
    'Children with high CU traits start with more severe problems and may improve less on average, but **they do improve**, especially with **reward-focused** and **warmth-focused** components (Hawes, Price and Dadds, 2014).',
    'Adapted programmes such as **PCIT-CU** add coaching in parental warmth and emotion skills (Kimonis et al., 2019).',
    'For adolescents, **multisystemic therapy** and **functional family therapy** address family, school and peer factors together.',
  ],
  sections: [
    {
      id: 'programmes',
      title: 'Evidence-based programmes',
      blocks: [
        { t: 'table', head: ['Approach', 'Age', 'Core components'], rows: [
          ['Parent–Child Interaction Therapy (PCIT)', '2–7', 'Live coaching of parents: child-directed play with praise, then consistent effective commands and consequences'],
          ['PCIT-CU', '3–6', 'PCIT plus coaching in warmth, emotional connection and an emotion-skills module'],
          ['Incredible Years', '0–12', 'Parent, teacher and child programmes: play, praise, rewards, limit-setting, problem-solving'],
          ['Triple P', '0–16', 'Tiered parenting support from information to intensive programmes'],
          ['Emotion recognition training', 'Children', 'Teaching attention to eyes and faces to improve recognition of fear and distress (Dadds et al.)'],
          ['Multisystemic therapy (MST)', '12–17', 'Intensive home-based work across family, school, peers and community'],
          ['Functional family therapy', '11–18', 'Family communication, motivation and behaviour change'],
          ['Cognitive-behavioural skills training', 'School age', 'Anger management, problem-solving, social skills'],
        ] },
      ],
    },
    {
      id: 'cu',
      title: 'What is different for CU traits',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Rewards over punishment', body: 'Children with high CU traits respond less to punishment and more to reward. Programmes emphasise praise, privileges and positive consequences.' },
          { title: 'Warmth', body: 'Parental and teacher warmth predicts decreases in CU traits. Programmes coach warmth deliberately, even when it does not seem to be reciprocated.' },
          { title: 'Emotion skills', body: 'Training attention to others’ eyes and facial expressions, and naming emotions, can improve recognition of distress.' },
          { title: 'Early start', body: 'Earlier is better: preschool and early primary interventions show the largest changes.' },
        ] },
        { t: 'callout', tone: 'note', title: 'Medication', text: 'There is no medication for CU traits. Medication may help co-occurring conditions (for example ADHD), which can reduce impulsive aggression. Decisions belong to the child’s doctor.' },
      ],
    },
  ],
  sources: [
    'Hawes, D. J., Price, M. J., & Dadds, M. R. (2014). Callous-unemotional traits and the treatment of conduct problems in childhood and adolescence. Clinical Child and Family Psychology Review, 17(3), 248–267.',
    'Kimonis, E. R. et al. (2019). Parent-Child Interaction Therapy adapted for preschoolers with callous-unemotional traits: An open trial pilot study. Journal of Clinical Child & Adolescent Psychology, 48(sup1), S347–S361.',
    'Dadds, M. R. et al. (2012). Love, eye contact and the developmental origins of empathy v. psychopathy. British Journal of Psychiatry, 200(3), 191–196.',
    'National Institute for Health and Care Excellence (2013, updated 2017). Antisocial behaviour and conduct disorders in children and young people (CG158).',
    'Henggeler, S. W., & Schaeffer, C. M. (2016). Multisystemic therapy: Clinical overview, outcomes, and implementation research. Family Process, 55(3), 514–528.',
  ],
  related: ['teaching/special-education/conduct-and-cu/classroom-strategies', 'parenting/gifted/nurturing-by-age', 'teaching/equity/behavioural-frameworks'],
}

export default guide
