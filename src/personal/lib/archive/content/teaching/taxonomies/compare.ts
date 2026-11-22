import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every taxonomy is a lens for looking at learning, and each shows some things more clearly than others. This page puts them side by side so you can choose the right one for the job.',
  nutshell: [
    'Planning objectives and question types: **Bloom’s**.',
    'Judging the quality of answers and giving feedback: **SOLO**.',
    'Checking the complexity of tasks and tests: **Webb’s DOK**.',
    'Designing a whole course that matters: **Fink**.',
    'Attitudes and values: **Krathwohl’s affective domain**. Physical skills: **Dave or Simpson**.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Side by side',
      lead: 'What each one is for.',
      blocks: [
        {
          t: 'table',
          head: ['Taxonomy', 'Describes', 'Levels', 'Best for'],
          rows: [
            ['[Bloom’s (revised)](@teaching/taxonomies/blooms)', 'Kinds of cognitive process', 'Remember, Understand, Apply, Analyse, Evaluate, Create', 'Writing objectives and planning a range of questions'],
            ['[Knowledge dimension](@teaching/taxonomies/blooms-knowledge)', 'Kinds of knowledge', 'Factual, Conceptual, Procedural, Metacognitive', 'Mapping a unit on a grid to find gaps'],
            ['[SOLO](@teaching/taxonomies/solo)', 'Structure of understanding in a response', 'Prestructural to Extended abstract', 'Rubrics, marking and feedback'],
            ['[Webb’s DOK](@teaching/taxonomies/dok)', 'Complexity of a task', 'Recall, Skills/concepts, Strategic, Extended', 'Aligning tests with standards; checking rigour'],
            ['[Fink](@teaching/taxonomies/fink)', 'Kinds of significant learning', 'Six interacting kinds (not a hierarchy)', 'Designing whole courses'],
            ['[Marzano](@teaching/taxonomies/marzano)', 'Levels of mental control', 'Retrieval to Self-system thinking', 'Bringing metacognition and motivation into objectives'],
            ['[Affective](@teaching/taxonomies/affective)', 'Internalisation of values', 'Receiving to Characterisation', 'Goals about attitudes and values'],
            ['[Psychomotor](@teaching/taxonomies/psychomotor)', 'Development of physical skills', 'Imitation to Naturalisation (Dave)', 'Practical, lab, arts and PE skills'],
            ['[Gagné’s outcomes](@teaching/taxonomies/gagne-outcomes)', 'Kinds of learning outcome', 'Verbal information, intellectual skills, cognitive strategies, attitudes, motor skills', 'Matching teaching methods to the kind of learning'],
            ['[Dreyfus](@teaching/taxonomies/dreyfus)', 'Stages of expertise', 'Novice to Expert', 'Professional training; deciding how much structure to give'],
            ['[Kirkpatrick](@teaching/taxonomies/kirkpatrick)', 'Levels of training evaluation', 'Reaction, Learning, Behaviour, Results', 'Judging whether a course or programme worked'],
            ['[Instructional hierarchy](@teaching/taxonomies/instructional-hierarchy)', 'Stages of mastering a skill', 'Acquisition, Fluency, Generalisation, Adaptation', 'Choosing interventions, especially in special education'],
            ['[ICAP](@teaching/taxonomies/icap)', 'Modes of visible engagement', 'Passive, Active, Constructive, Interactive', 'Checking that activities make learners think'],
            ['[Engagement Profile](@teaching/taxonomies/engagement-profile)', 'Depth of engagement', 'Seven indicators scored 0–4', 'Learners with complex or profound needs'],
            ['[Hess matrix](@teaching/taxonomies/cognitive-rigor-matrix)', 'Process × complexity', 'Bloom’s × DOK grid', 'Auditing the rigour of a unit'],
            ['[Six facets](@teaching/taxonomies/six-facets)', 'Ways of showing understanding', 'Six facets (not a hierarchy)', 'Designing performance tasks'],
            ['[Barrett](@teaching/taxonomies/barrett)', 'Reading comprehension', 'Literal to Appreciation', 'Reading questions'],
            ['[Costa](@teaching/taxonomies/costa)', 'Question levels', 'Gathering, Processing, Applying', 'Teaching learners to ask questions'],
            ['[Williams](@teaching/taxonomies/williams-creativity)', 'Creative behaviours', 'Eight thinking and feeling behaviours', 'Creative and gifted tasks'],
            ['[Depth and complexity](@teaching/taxonomies/depth-complexity)', 'Lenses for depth', 'Eleven prompts', 'Enrichment without acceleration'],
            ['[Digital Bloom’s](@teaching/taxonomies/digital-blooms) and [SAMR](@teaching/taxonomies/samr)', 'Technology use', 'Bloom’s levels / Substitution to Redefinition', 'Planning with technology'],
            ['[Merrill](@teaching/taxonomies/merrill)', 'Content × performance; design principles', 'Remember/Use/Find; five principles', 'Instructional design'],
            ['[Perry](@teaching/taxonomies/perry)', 'Beliefs about knowledge', 'Dualism to Commitment', 'Older learners and adults'],
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Which one do I need?',
      lead: 'Start from the question you are asking.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: '"What should learners be able to do?"', body: 'Use **Bloom’s** to pick a verb for each objective, and the knowledge dimension to be precise about what they do it with.' },
            { title: '"How good is this answer?"', body: 'Use **SOLO**. It judges how well ideas are connected, and it tells you what feedback to give next.' },
            { title: '"Is this test demanding enough?"', body: 'Use **DOK** to tag each item by complexity, and compare with what the standard requires.' },
            { title: '"Will this course change anyone?"', body: 'Use **Fink** to set goals for application, integration, caring and learning how to learn, not just knowledge.' },
            { title: '"Why won’t they start?"', body: 'Use **Marzano’s** self system: importance, efficacy and emotion come before thinking.' },
            { title: '"How do I teach this skill?"', body: 'Use **Dave** to plan the steps from copying a model to fluent, automatic performance.' },
          ],
        },
      ],
    },
    {
      id: 'combine',
      title: 'Using them together',
      lead: 'A workflow for one unit.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set goals with Bloom’s', body: 'Write three to five objectives, placing each on the knowledge grid.' },
            { title: 'Check rigour with DOK', body: 'Make sure at least one task requires strategic thinking (DOK 3).' },
            { title: 'Design the rubric with SOLO', body: 'Describe what unistructural, multistructural, relational and extended abstract answers look like for your main task.' },
            { title: 'Add a Fink goal or two', body: 'What should learners care about, or learn about how they learn, by the end?' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Taxonomies are tools',
          text: 'None of these is a law of the mind. They are vocabularies that help teachers notice what they are and are not asking learners to do. Use whichever helps you see more clearly.',
        },
      ],
    },
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/solo', 'teaching/taxonomies/dok', 'teaching/guides/planning/blooms-in-practice'],
}

export default guide
