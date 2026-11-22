import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Robert Gagné argued that there are different kinds of learning, and each needs different conditions to be learned well. His five categories of learning outcome are a practical way to check that your teaching method matches what you want learners to learn.',
  nutshell: [
    'Five outcomes: **verbal information, intellectual skills, cognitive strategies, attitudes and motor skills**.',
    'Intellectual skills form their own ladder, from discriminations up to problem solving.',
    'Each outcome needs different teaching: facts need meaningful organisation; skills need practice with feedback; attitudes need models and choices.',
    'Gagné also proposed the "nine events of instruction" (see [lesson models](@teaching/guides/planning/models)).',
  ],
  sections: [
    {
      id: 'five',
      title: 'Five kinds of outcome',
      blocks: [
        {
          t: 'table',
          head: ['Outcome', 'What the learner can do', 'Example', 'Key conditions for learning'],
          rows: [
            ['Verbal information', 'State facts, names, principles', 'State the three branches of government', 'Meaningful context, organisation, connecting to what is known'],
            ['Intellectual skills', 'Use concepts and rules to do something', 'Classify triangles; calculate area', 'Prerequisite skills first; varied examples; practice with feedback'],
            ['Cognitive strategies', 'Manage their own learning and thinking', 'Choose a strategy to memorise vocabulary', 'Modelling, practice on new problems, reflection'],
            ['Attitudes', 'Choose to act in a certain way', 'Choose to recycle', 'Human models, reinforcement, experiencing consequences'],
            ['Motor skills', 'Perform physical actions', 'Use a microscope; serve in tennis', 'Demonstration, repeated practice with feedback'],
          ],
        },
      ],
    },
    {
      id: 'intellectual',
      title: 'The intellectual skills ladder',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Discriminations', body: 'Telling things apart: b vs d; two different notes.' },
            { name: 'Concrete concepts', body: 'Identifying examples of a class by their features: "this is a triangle".' },
            { name: 'Defined concepts', body: 'Classifying using a definition: "a mammal is…".' },
            { name: 'Rules', body: 'Applying a relationship: "to find the area of a rectangle, multiply length by width".' },
            { name: 'Higher-order rules (problem solving)', body: 'Combining rules to solve new problems.' },
          ],
          caption: 'Each level depends on the ones below, so check prerequisites before teaching.',
        },
      ],
    },
    {
      id: 'using',
      title: 'Using the categories',
      blocks: [
        {
          t: 'list',
          items: [
            'Classify each objective by outcome type before choosing a method.',
            'If an objective is an intellectual skill, check the prerequisite skills lower on the ladder.',
            'Remember that cognitive strategies and attitudes need to be taught deliberately; they do not come for free with content. See [metacognition](@teaching/techniques/learning-strategies/metacognition) and [the affective domain](@teaching/taxonomies/affective).',
          ],
        },
      ],
    },
  ],
  sources: ['Gagné, R. M. (1985). *The conditions of learning and theory of instruction* (4th ed.). Holt, Rinehart and Winston.', 'Gagné, R. M., Wager, W. W., Golas, K. C., & Keller, J. M. (2005). *Principles of instructional design* (5th ed.). Wadsworth.'],
  related: ['teaching/guides/planning/models', 'teaching/taxonomies/blooms', 'teaching/taxonomies/compare'],
}

export default guide
