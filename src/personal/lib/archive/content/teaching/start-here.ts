import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'The teaching shelf has well over a hundred guides. You do not need them all at once. Pick the path below that fits what you are doing now, and read in order; each path takes an hour or two in total.',
  nutshell: [
    'Every guide stands alone, so you can also dip in anywhere.',
    'Guides you mark as read show a tick here, so you can see your progress through a path.',
    'Use the search box on any shelf to find a specific topic quickly.',
  ],
  sections: [
    {
      id: 'new-teacher',
      title: 'New to teaching',
      lead: 'The ten guides that will help most in your first year.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/guides/classroom/first-lessons', note: 'Routines and relationships in the first weeks.' },
            { path: 'teaching/guides/classroom/management', note: 'Prevention first, and calm, least-intrusive responses.' },
            { path: 'teaching/techniques/instruction/rosenshine', note: 'Ten principles that describe an effective lesson.' },
            { path: 'teaching/theories/cognitive-load', note: 'Why small steps and clear slides matter.' },
            { path: 'teaching/guides/planning/lesson-plan', note: 'A lesson structure and a fill-in template.' },
            { path: 'teaching/techniques/questioning/questioning', note: 'Get every learner thinking, not just the keen ones.' },
            { path: 'teaching/techniques/questioning/checking-understanding', note: 'Find out what they really understood.' },
            { path: 'teaching/techniques/learning-strategies/retrieval-practice', note: 'The easiest high-impact habit to build into lessons.' },
            { path: 'teaching/assessment/feedback', note: 'Feedback that moves learning forward.' },
            { path: 'teaching/guides/classroom/relationships', note: 'Warm and demanding at the same time.' },
          ],
        },
      ],
    },
    {
      id: 'new-shelves',
      title: 'Singapore, management, philosophies and case studies',
      lead: 'Newer shelves for going deeper.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/singapore/overview', note: 'MOE law, protocols and tools for bullying, defiance, smoking and conflict.' },
            { path: 'teaching/singapore/escalation-ladder', note: 'From a quiet word to formal action.' },
            { path: 'teaching/classroom-management/foundations', note: 'Models of behaviour management.' },
            { path: 'teaching/philosophies/progressivism', note: 'One of twelve philosophies of education.' },
            { path: 'teaching/case-studies/finland', note: 'Ten real systems and experiments, with the evidence.' },
          ],
        },
      ],
    },
    {
      id: 'how-learning-works',
      title: 'How learning works',
      lead: 'The science behind the techniques.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/theories/cognitivism' },
            { path: 'teaching/theories/cognitive-load' },
            { path: 'teaching/theories/constructivism' },
            { path: 'teaching/theories/social-constructivism' },
            { path: 'teaching/theories/motivation' },
            { path: 'teaching/theories/myths', note: 'What not to believe, and why.' },
          ],
        },
      ],
    },
    {
      id: 'inclusion',
      title: 'Special education and inclusion',
      lead: 'Foundations first, then the most common needs.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/special-education/foundations/inclusion' },
            { path: 'teaching/special-education/foundations/accommodations' },
            { path: 'teaching/differentiation/udl' },
            { path: 'teaching/special-education/foundations/tiered-support' },
            { path: 'teaching/special-education/foundations/plans' },
            { path: 'teaching/special-education/needs/dyslexia' },
            { path: 'teaching/special-education/needs/adhd' },
            { path: 'teaching/special-education/needs/autism' },
            { path: 'teaching/special-education/strategies/behaviour-support' },
          ],
        },
      ],
    },
    {
      id: 'every-learner',
      title: 'Every learner: support in depth',
      lead: 'For learners who are behind, from many backgrounds and languages, or with special educational needs.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/inclusive-practice/why-learners-fall-behind' },
            { path: 'teaching/inclusive-practice/catch-up-evidence' },
            { path: 'teaching/inclusive-practice/teaching-low-attainers' },
            { path: 'teaching/inclusive-practice/diagnosing-gaps' },
            { path: 'teaching/inclusive-practice/diverse-backgrounds' },
            { path: 'teaching/inclusive-practice/multilingual-learners' },
            { path: 'teaching/inclusive-practice/send-graduated-approach' },
            { path: 'teaching/inclusive-practice/adaptive-teaching-toolkit' },
            { path: 'teaching/inclusive-practice/inclusion-scenarios' },
          ],
        },
      ],
    },
    {
      id: 'mixed-classes',
      title: 'Teaching a mixed class',
      lead: 'Differentiation that keeps expectations high.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/differentiation/foundations' },
            { path: 'teaching/differentiation/pre-assessment' },
            { path: 'teaching/differentiation/scaffolding' },
            { path: 'teaching/differentiation/tiered' },
            { path: 'teaching/differentiation/language-learners' },
            { path: 'teaching/differentiation/advanced' },
            { path: 'teaching/differentiation/in-practice', note: 'A full lesson planned for a real mix of learners.' },
          ],
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning and assessment',
      lead: 'From goals to evidence to lessons.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/guides/planning/backward-design' },
            { path: 'teaching/assessment/objectives' },
            { path: 'teaching/taxonomies/blooms', note: 'Includes an interactive objective builder.' },
            { path: 'teaching/assessment/alignment' },
            { path: 'teaching/assessment/formative-summative' },
            { path: 'teaching/assessment/rubrics' },
            { path: 'teaching/guides/planning/blooms-in-practice' },
          ],
        },
      ],
    },
    {
      id: 'tutors',
      title: 'Tutors and one-to-one',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/guides/contexts/tutoring' },
            { path: 'teaching/differentiation/scaffolding' },
            { path: 'teaching/techniques/instruction/worked-examples' },
            { path: 'teaching/techniques/learning-strategies/feynman' },
            { path: 'teaching/techniques/learning-strategies/metacognition' },
          ],
        },
      ],
    },
    {
      id: 'trainers',
      title: 'Trainers and adult educators',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'teaching/guides/contexts/adults' },
            { path: 'teaching/theories/experiential' },
            { path: 'teaching/taxonomies/dreyfus' },
            { path: 'teaching/taxonomies/kirkpatrick' },
            { path: 'teaching/guides/contexts/online' },
          ],
        },
      ],
    },
  ],
  related: ['teaching/glossary'],
}

export default guide
