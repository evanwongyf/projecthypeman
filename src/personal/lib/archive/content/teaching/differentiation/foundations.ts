import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every class is a mix of learners who know different things, work at different speeds and care about different things. Differentiation means planning so that all of them can reach important learning goals, instead of teaching to an imaginary middle.',
  nutshell: [
    'Carol Ann Tomlinson’s model: teachers can adapt **content, process, product and learning environment**.',
    'They adapt in response to learners’ **readiness, interests and learning profiles**.',
    'The goal stays the same for everyone wherever possible; the route and the support vary.',
    'Differentiation starts with ongoing assessment: you cannot adapt to what you have not found out.',
    'It does not mean a different lesson plan for every learner.',
  ],
  sections: [
    {
      id: 'model',
      title: 'Tomlinson’s model',
      lead: 'What you adapt, and what you adapt it to.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: 'what learners learn', title: 'Content', body: 'The knowledge and skills, and how learners get access to them: texts at different reading levels, audio versions, pre-taught vocabulary, extra examples. The core learning goal usually stays the same.' },
            { tag: 'how they make sense of it', title: 'Process', body: 'The activities learners use to understand: tiered tasks, varied support, different amounts of time, choice of working alone or with others.' },
            { tag: 'how they show it', title: 'Product', body: 'How learners demonstrate learning: an essay, a presentation, a model, a podcast. Clear criteria keep the standard the same across formats.' },
            { tag: 'where it happens', title: 'Learning environment', body: 'The classroom’s feel and layout: quiet areas, collaborative spaces, clear routines, a culture where different tasks are normal.' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Readiness', def: 'A learner’s current knowledge and skill in relation to the goal. Not fixed ability: readiness changes topic to topic and week to week.' },
            { term: 'Interest', def: 'What a learner is curious about or cares about. Linking to interests raises engagement.' },
            { term: 'Learning profile', def: 'How a learner works best: alone or with others, quiet or busy, with more or less structure. Note: this is not the same as fixed "learning styles", which lack evidence ([learning myths](@teaching/theories/myths)).' },
          ],
        },
      ],
    },
    {
      id: 'principles',
      title: 'Principles',
      lead: 'What good differentiation looks like.',
      blocks: [
        {
          t: 'list',
          items: [
            '**Clear goals**: know exactly what every learner should understand and be able to do.',
            '**Ongoing assessment**: use pre-assessment and [checks for understanding](@teaching/techniques/questioning/checking-understanding) to find out where learners are.',
            '**Respectful tasks**: every learner gets work that is engaging and important, not busywork for some and interesting work for others.',
            '**Teach up**: plan for the most able, then build supports so others can reach it, rather than planning for the middle and adding extensions.',
            '**Flexible grouping**: groups change with the task and the evidence. See [flexible grouping](@teaching/differentiation/grouping).',
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Myth: differentiation means three worksheets',
          text: '"Easy, medium, hard" worksheets chosen by fixed ability can lower expectations and lock learners into groups. Much effective differentiation happens live: a hint for one learner, a harder question for another, an extra example for a group, adjusting as you see responses.',
        },
      ],
    },
    {
      id: 'moves',
      title: 'Everyday moves',
      lead: 'Low-preparation ways to differentiate.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Scaffolds on request', body: 'Hint cards, worked examples and word banks available for anyone who wants them. See [scaffolding](@teaching/differentiation/scaffolding).' },
            { title: 'Challenge by choice', body: 'A mild, hot and spicy set of questions; learners choose where to start and move up.' },
            { title: 'Targeted questioning', body: 'Adjust the difficulty of questions to the learner, then push each one a step further.' },
            { title: 'Teacher table', body: 'While others work, pull a small group for reteaching or extension based on the last check.' },
            { title: 'Flexible time', body: 'Allow extra time on core tasks, with extension tasks ready for those who finish.' },
            { title: 'Varied texts', body: 'The same content at different reading levels, or with audio support.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'p',
          text: 'Differentiation is widely recommended but has been hard to study, because it means different things in different schools. Reviews find positive effects for well-defined practices within it, like adapting instruction based on formative assessment and small-group teaching (Deunk et al., 2018), and weaker or negative effects for fixed ability grouping that lowers expectations. The safest approach is the one that stays closest to its core: know where learners are, keep goals high, and adjust support.',
        },
      ],
    },
  ],
  sources: [
    'Tomlinson, C. A. (2014). *The differentiated classroom: Responding to the needs of all learners* (2nd ed.). ASCD.',
    'Tomlinson, C. A. (2017). *How to differentiate instruction in academically diverse classrooms* (3rd ed.). ASCD.',
    'Deunk, M. I., Smale-Jacobse, A. E., de Boer, H., Doolaard, S., & Bosker, R. J. (2018). Effective differentiation practices: A systematic review and meta-analysis. *Educational Research Review, 24*, 31–54.',
  ],
  related: ['teaching/differentiation/scaffolding', 'teaching/differentiation/tiered', 'teaching/differentiation/udl', 'teaching/differentiation/in-practice', 'teaching/differentiation/pre-assessment'],
}

export default guide
