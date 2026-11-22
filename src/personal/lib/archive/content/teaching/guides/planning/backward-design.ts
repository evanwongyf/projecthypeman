import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Backward design means planning from the end. First decide what learners should understand and be able to do; then decide how you will know they have got there; only then plan the lessons. Grant Wiggins and Jay McTighe set this out as Understanding by Design (UbD).',
  nutshell: [
    '**Stage 1**: identify desired results. **Stage 2**: determine acceptable evidence. **Stage 3**: plan learning experiences.',
    'It avoids the "twin sins" of planning: activities with no clear purpose, and rushing through coverage.',
    '**Essential questions** frame a unit around big, open ideas that are worth thinking about.',
    'Decide on the assessment before planning the activities, so every activity prepares for it.',
  ],
  sections: [
    {
      id: 'sins',
      title: 'Why plan backward',
      lead: 'The twin sins of planning.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Activity-focused planning', body: 'Choosing engaging activities first ("let’s make a volcano!") and hoping learning happens. Learners are busy, but the intellectual goal is unclear.' },
            { title: 'Coverage-focused planning', body: 'Marching through the textbook page by page to "cover" everything. Content is mentioned, but understanding is not built.' },
          ],
        },
        {
          t: 'p',
          text: 'Backward design puts the goals first so that every activity and every page of the textbook earns its place. It connects directly to [constructive alignment](@teaching/assessment/alignment).',
        },
      ],
    },
    {
      id: 'stages',
      title: 'Three stages',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Stage 1: Identify desired results', body: 'What should learners understand, know and be able to do? Include the curriculum goals, the **enduring understandings** (big ideas worth remembering after the details fade), **essential questions**, and the key knowledge and skills.' },
            { title: 'Stage 2: Determine acceptable evidence', body: 'How will you know they have achieved Stage 1? Design the **performance task** where learners apply understanding in a realistic context, plus other evidence: quizzes, tests, observations, self-assessment.' },
            { title: 'Stage 3: Plan learning experiences and instruction', body: 'Now plan the sequence of lessons, teaching and practice that will prepare learners to succeed in Stage 2.' },
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Essential questions',
      blocks: [
        {
          t: 'p',
          text: 'An essential question is open-ended, thought-provoking, points to big ideas, needs justification rather than a single answer, and recurs over time. It frames the unit and gives learners a reason to learn the details.',
        },
        {
          t: 'table',
          head: ['Topic', 'Essential question'],
          rows: [
            ['The water cycle', 'How does water shape life on Earth, and how do we shape water?'],
            ['World War One', 'Could the war have been avoided?'],
            ['Fractions', 'When is a part bigger than a whole?'],
            ['Persuasive writing', 'What makes people change their minds?'],
            ['Ecosystems', 'What happens when one part of a system changes?'],
          ],
        },
      ],
    },
    {
      id: 'grasps',
      title: 'Designing the performance task',
      lead: 'The GRASPS framework.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Goal', def: 'The problem or challenge to solve.' },
            { term: 'Role', def: 'Who the learner is in the scenario.' },
            { term: 'Audience', def: 'Who the work is for.' },
            { term: 'Situation', def: 'The context or scenario.' },
            { term: 'Product or performance', def: 'What the learner will create.' },
            { term: 'Standards', def: 'The criteria it will be judged against.' },
          ],
        },
        {
          t: 'example',
          title: 'A GRASPS task for an ecosystems unit',
          lines: [
            { label: 'Goal', text: 'Recommend whether to reintroduce wolves to a national park.' },
            { label: 'Role', text: 'You are an ecologist advising the park authority.' },
            { label: 'Audience', text: 'The park board and local farmers.' },
            { label: 'Situation', text: 'Deer numbers have exploded and are damaging trees along rivers.' },
            { label: 'Product', text: 'A two-page briefing with a food web diagram and a recommendation.' },
            { label: 'Standards', text: 'Accurate use of food web concepts; evidence from real reintroductions; addresses farmers’ concerns.' },
          ],
        },
      ],
    },
    {
      id: 'facets',
      title: 'Six facets of understanding',
      blocks: [
        {
          t: 'p',
          text: 'Wiggins and McTighe argue that learners show real understanding when they can:',
        },
        {
          t: 'list',
          items: [
            '**Explain**: give accurate, justified accounts of how and why.',
            '**Interpret**: find meaning, tell stories, make sense of data.',
            '**Apply**: use knowledge in new situations.',
            '**Have perspective**: see different points of view.',
            '**Empathise**: get inside another person’s experience.',
            '**Have self-knowledge**: know the limits of their own understanding.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Wiggins, G., & McTighe, J. (2005). *Understanding by design* (expanded 2nd ed.). ASCD.',
    'McTighe, J., & Wiggins, G. (2013). *Essential questions: Opening doors to student understanding*. ASCD.',
  ],
  related: ['teaching/assessment/alignment', 'teaching/guides/planning/unit-plan', 'teaching/guides/planning/lesson-plan', 'teaching/techniques/active-learning/project-based'],
}

export default guide
