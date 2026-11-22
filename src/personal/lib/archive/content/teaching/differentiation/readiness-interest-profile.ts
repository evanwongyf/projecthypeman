import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Carol Ann Tomlinson’s model says teachers differentiate in response to three learner characteristics: readiness, interest and learning profile. Each needs different information to find out, and each changes different parts of a lesson. Getting the evidence right matters, because the most popular version of “learning profile”, matching teaching to learning styles, does not work.',
  nutshell: [
    '**Readiness**: where a learner is relative to today’s goal. The strongest basis for adjusting challenge and support.',
    '**Interest**: what engages them. Raises motivation and effort; changes topics, examples and choices.',
    '**Learning profile**: preferences for how to work (alone or in groups, quiet or busy, time of day), and cultural and language background.',
    '**Learning styles** (visual, auditory, kinaesthetic) matching has **no good evidence** (Pashler et al., 2008); teach content in the mode it needs.',
  ],
  sections: [
    {
      id: 'three',
      title: 'Three traits, three kinds of response',
      blocks: [
        { t: 'table', head: ['Trait', 'How to find out', 'What it changes', 'Example'], rows: [
          ['Readiness', 'Pre-assessments, exit tickets, hinge questions, previous work', 'Level of challenge, amount of scaffolding, pace, complexity of text', 'Three tiers of fraction problems after a diagnostic quiz'],
          ['Interest', 'Interest surveys, conversations, choice patterns', 'Context of tasks, topics for projects, examples used', 'Writing a persuasive letter about football, fashion or the environment'],
          ['Learning profile', 'Observation, conversation, learner reflection', 'Grouping, work environment, ways to show learning', 'Option to work in a quiet corner or with a partner'],
        ] },
      ],
    },
    {
      id: 'readiness',
      title: 'Readiness is not ability',
      blocks: [
        { t: 'p', text: 'Readiness describes where a learner is **for this particular goal, today**. It changes from topic to topic and week to week. A student can be ahead in algebra and behind in geometry. Treating readiness as a fixed ability (“the low group”) is one of the main ways differentiation goes wrong. Vygotsky’s zone of proximal development captures the target: work a learner cannot yet do alone but can do with support.' },
        { t: 'dodont', do: [
          'Base readiness groups on recent evidence for this skill',
          'Regroup every unit, or more often',
          'Keep the same learning goal for everyone, varying the route and support',
        ], dont: [
          'Use last year’s grades to fix groups for the whole year',
          'Give some learners only easy work indefinitely',
          'Let readiness labels be visible or permanent (“the slow table”)',
        ] },
      ],
    },
    {
      id: 'interest',
      title: 'Interest',
      blocks: [
        { t: 'example', title: 'A one-minute interest survey', lines: [
          { label: '1', text: 'Three things you enjoy outside school.' },
          { label: '2', text: 'A topic you could talk about for ten minutes.' },
          { label: '3', text: 'Do you prefer working alone, with one partner, or in a group?' },
          { label: '4', text: 'One thing that helps you concentrate.' },
        ] },
        { t: 'p', text: 'Interest-based choices increase engagement and persistence (see self-determination theory). They work best as **different contexts for the same skill**: everyone practises percentages, some on sports statistics and some on shopping discounts.' },
      ],
    },
    {
      id: 'profile',
      title: 'Learning profile without learning styles',
      blocks: [
        { t: 'callout', tone: 'myth', title: 'The learning-styles myth', text: 'Many teachers believe students learn best when taught in their preferred style. Pashler, McDaniel, Rohrer and Bjork (2008) reviewed the evidence and found almost no studies with the design needed to test it, and those that did found no matching benefit. Everyone learns geography better from maps and music better by listening. Use multiple modes for everyone (dual coding), not style labels.' },
        { t: 'table', head: ['Useful learning-profile factors', 'Response'], rows: [
          ['Language background', 'Visuals, glossaries, sentence frames, home-language support'],
          ['Need for quiet or movement', 'Zones in the room; movement breaks'],
          ['Group or individual work preference', 'Some choice where the goal allows'],
          ['Cultural norms about speaking up', 'Think time, pairs before plenary, written responses'],
          ['Special educational needs', 'Accommodations from support plans'],
        ] },
      ],
    },
  ],
  sources: [
    'Tomlinson, C. A. (2017). How to Differentiate Instruction in Academically Diverse Classrooms (3rd ed.). ASCD.',
    'Pashler, H., McDaniel, M., Rohrer, D., & Bjork, R. (2008). Learning styles: Concepts and evidence. Psychological Science in the Public Interest, 9(3), 105–119.',
    'Vygotsky, L. S. (1978). Mind in Society. Harvard University Press.',
  ],
  related: ['teaching/differentiation/foundations', 'teaching/differentiation/pre-assessment', 'teaching/theories/myths'],
}

export default guide
