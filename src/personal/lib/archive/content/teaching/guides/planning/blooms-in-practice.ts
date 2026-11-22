import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'This worked example takes one topic, food chains and food webs, and shows how Bloom’s taxonomy shapes the objectives, the questions, the activities and the assessment. It is pitched at learners around 10 to 12 years old, but the method works for any topic and age.',
  nutshell: [
    'Write objectives at several levels, making sure the lower levels are secure before the higher ones.',
    'Prepare a bank of questions at every level before teaching.',
    'Design activities that require the thinking named in each objective.',
    'Assess at the levels you taught; a test of only recall would miss most of the unit.',
  ],
  sections: [
    {
      id: 'objectives',
      title: 'Objectives at each level',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Remember', body: 'Define producer, consumer, predator, prey and decomposer.' },
            { name: 'Understand', body: 'Explain what the arrows in a food chain show.' },
            { name: 'Apply', body: 'Construct a food chain from a list of organisms in a habitat.' },
            { name: 'Analyse', body: 'Predict and explain how a change to one population affects others in a food web.' },
            { name: 'Evaluate', body: 'Judge whether removing an invasive species would be good for an ecosystem, using evidence.' },
            { name: 'Create', body: 'Design a food web for an imaginary habitat that stays balanced, and justify it.' },
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'A question bank',
      blocks: [
        {
          t: 'table',
          head: ['Level', 'Questions'],
          rows: [
            ['Remember', 'What is a producer? Name a decomposer.'],
            ['Understand', 'Why does the arrow point from the grass to the rabbit, not the other way? Why do almost all food chains start with a plant?'],
            ['Apply', 'Here are an oak tree, a caterpillar, a blue tit and a sparrowhawk. Build the food chain.'],
            ['Analyse', 'In this food web, what would happen to the owls if a disease killed most of the mice? What else might change?'],
            ['Evaluate', 'Grey squirrels were introduced to Britain. Should they be removed? What evidence would you need?'],
            ['Create', 'Invent a habitat with at least eight organisms. Draw its food web and explain how it stays in balance.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Notice the "why" in the Understand questions. "Which way does the arrow point?" is recall; "why does it point that way?" requires understanding what the arrow means (energy flows to the eater).',
        },
      ],
    },
    {
      id: 'sequence',
      title: 'A four-lesson sequence',
      blocks: [
        {
          t: 'table',
          head: ['Lesson', 'Focus', 'Main activity', 'Levels'],
          rows: [
            ['1', 'Vocabulary and simple chains', 'Sorting cards of organisms into producers and consumers; building chains; explaining the arrows.', 'Remember, Understand, Apply'],
            ['2', 'Food webs', 'Combine chains into a web for a pond; trace every path from sun to top predator.', 'Apply, Analyse'],
            ['3', 'Changes in a web', 'Scenario cards ("a drought kills half the plants") in groups; predict and justify the knock-on effects.', 'Analyse'],
            ['4', 'Real-world decisions and design', 'Evaluate the grey squirrel case with sources; then design a balanced habitat.', 'Evaluate, Create'],
          ],
          caption: 'Each lesson starts with retrieval of the previous one, so the lower levels stay secure.',
        },
      ],
    },
    {
      id: 'assessment',
      title: 'The assessment',
      blocks: [
        {
          t: 'example',
          title: 'End-of-unit task (30 minutes)',
          lines: [
            { label: 'Part A', text: 'Five short questions on key terms and reading a food chain. (Remember, Understand)' },
            { label: 'Part B', text: 'Build a food web from a description of a rock pool. (Apply)' },
            { label: 'Part C', text: 'The crabs in the rock pool are overfished. Explain three effects on other organisms. (Analyse)' },
            { label: 'Part D', text: 'A council wants to introduce more crabs from elsewhere. Is this a good idea? Give reasons for and against, and a final judgement. (Evaluate)' },
          ],
        },
        {
          t: 'p',
          text: 'Use a [SOLO](@teaching/taxonomies/solo)-based rubric for Parts C and D: does the answer name one effect, list several, or show how the effects connect through the web?',
        },
      ],
    },
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/solo', 'teaching/assessment/objectives', 'teaching/guides/planning/unit-plan'],
}

export default guide
