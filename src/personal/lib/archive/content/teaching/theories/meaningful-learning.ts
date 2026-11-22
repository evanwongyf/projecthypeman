import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'David Ausubel began his major book on learning with a sentence that is still worth printing on the staffroom wall: the most important single factor influencing learning is what the learner already knows. Ascertain this and teach accordingly. From that principle he built a theory of meaningful learning and a classroom technique, the advance organiser, that remain among the most practical applications of cognitive psychology to teaching. This page explains meaningful and rote learning, subsumption, advance organisers, what the evidence says and how to use them.',
  nutshell: [
    '**Meaningful learning** happens when new information is **connected to what the learner already knows**; **rote learning** is memorising it as an arbitrary, isolated item.',
    'Meaningful learning needs three conditions: **meaningful material**, **relevant prior knowledge** and a **learner who chooses to connect**.',
    '**Subsumption**: new ideas are slotted under existing, more general ideas in the learner’s cognitive structure.',
    'An **advance organiser** is a short, abstract introduction *before* the lesson that gives learners a mental scaffold to attach details to.',
    'Meta-analyses find a **small to moderate positive effect** of advance organisers, strongest with **difficult material** and **lower-knowledge learners**.',
  ],
  sections: [
    {
      id: 'meaningful',
      title: 'Meaningful versus rote',
      blocks: [
        {
          t: 'table',
          head: ['', 'Rote learning', 'Meaningful learning'],
          rows: [
            ['How it is learned', 'Memorised word for word, without connection', 'Related to what you already know and understand'],
            ['How it is stored', 'Isolated, arbitrary', 'Linked into a network of ideas'],
            ['Retention', 'Fades fast', 'Lasts and can be built upon'],
            ['Transfer', 'Hard to apply to new situations', 'Can be applied and extended'],
            ['Example', 'Memorising “mitochondria are the powerhouse of the cell”', 'Seeing how mitochondria release energy and linking that to breathing and food'],
          ],
          caption: 'Ausubel did not say rote learning was always bad: some things (a phone number) are properly learned by rote. The point is that it should not be the only mode.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'Condition 1', title: 'Meaningful material', body: 'The material must be capable of being related to knowledge in a sensible way: organised and logical, not nonsense.' },
            { tag: 'Condition 2', title: 'Relevant prior knowledge', body: 'The learner must have something to connect it to. Without it, even good material is memorised by rote.' },
            { tag: 'Condition 3', title: 'A meaningful learning set', body: 'The learner has to intend to make connections, not merely to memorise.' },
          ],
        },
      ],
    },
    {
      id: 'subsumption',
      title: 'Subsumption and cognitive structure',
      blocks: [
        { t: 'p', text: 'Ausubel pictured knowledge as a hierarchy, with broad, general ideas at the top and specifics beneath. New material is learned by being subsumed, that is, fitted under a relevant existing idea. A child who has the idea “mammal” can learn about whales by seeing that they are mammals that live in the sea. A child who thinks of whales only as “big fish” will learn them badly until the idea is corrected.' },
        {
          t: 'terms',
          items: [
            { term: 'Derivative subsumption', def: 'The new idea is an example of an existing idea and simply extends it, such as learning that a new animal is a mammal.' },
            { term: 'Correlative subsumption', def: 'The new idea changes or extends the existing idea, such as learning that some mammals lay eggs.' },
            { term: 'Superordinate learning', def: 'Seeing that several known ideas fit a broader one, such as learning that carrots, spinach and beans are all “vegetables”.' },
            { term: 'Progressive differentiation', def: 'Teach the most general ideas first, then work down to details.' },
            { term: 'Integrative reconciliation', def: 'Explicitly show how ideas relate and where they seem to conflict, so that they fit together.' },
          ],
        },
      ],
    },
    {
      id: 'organisers',
      title: 'Advance organisers',
      blocks: [
        { t: 'p', text: 'An advance organiser is introductory material presented before the lesson at a higher level of generality and abstraction than the lesson itself. It is not an overview or a summary (those are at the same level as the lesson). Its job is to provide ideational scaffolding, a general idea that the learner can use to organise the details that follow.' },
        {
          t: 'table',
          head: ['Type', 'When to use', 'Example'],
          rows: [
            ['Expository organiser', 'The material is unfamiliar', 'Before a lesson on the French Revolution: “Revolutions happen when a group loses faith in the authority of its rulers and when expectations are raised and then thwarted.”'],
            ['Comparative organiser', 'The material is somewhat familiar', 'Before teaching the Buddhist and Hindu concepts of karma: “Both are accounts of how actions affect later outcomes. Compare them as we go.”'],
            ['Graphic or visual organiser', 'The structure is complex', 'A concept map of the water cycle before the details'],
          ],
        },
        {
          t: 'example',
          title: 'An advance organiser for a lesson on photosynthesis',
          lines: [
            { label: 'Say', text: '“Every living thing needs energy. Animals get theirs from food. Plants cannot eat, so they make their own food. Today we see how they do it: capturing light energy and storing it in sugar.”' },
            { label: 'Then', text: 'Teach the details (chlorophyll, carbon dioxide, water, glucose, oxygen) under that frame.' },
            { label: 'Revisit', text: 'End by asking students to link each detail back to the big idea.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        { t: 'p', text: 'Reviews of the research (Luiten, Ames and Ackerson, 1980; Stone, 1983; Corkill, 1992) found that advance organisers have a small to moderate positive effect on learning and retention, usually of the order of a quarter to a third of a standard deviation. Effects are stronger when the material is hard, when learners have low prior knowledge, when the organiser is well written and when learning is measured some time after the lesson. They are weaker for easy or familiar material.' },
        {
          t: 'dodont',
          do: ['Check what students already know before choosing the organiser.', 'Write organisers at a higher, more general level than the lesson.', 'Use them with difficult or unfamiliar material.', 'Return to the organiser at the end to tie things together.'],
          dont: ['Do not confuse an organiser with a summary or a list of objectives.', 'Do not make it so abstract that students cannot connect it to anything.', 'Do not rely on it alone: it supports, not replaces, good explanation.', 'Do not skip checking for misconceptions: faulty prior knowledge blocks meaningful learning.'],
        },
        { t: 'links', items: [{ path: 'teaching/differentiation/pre-assessment', note: 'Finding out what students know' }, { path: 'teaching/techniques/instruction/graphic-organisers', note: 'Graphic organisers' }, { path: 'teaching/theories/cognitivism', note: 'Schemas and memory' }] },
      ],
    },
  ],
  sources: [
    'Ausubel, D. P. (1968). Educational Psychology: A Cognitive View. Holt, Rinehart and Winston.',
    'Ausubel, D. P. (1960). The use of advance organizers in the learning and retention of meaningful verbal material. Journal of Educational Psychology.',
    'Luiten, J., Ames, W., and Ackerson, G. (1980). A meta-analysis of the effects of advance organizers on learning and retention. American Educational Research Journal.',
    'Corkill, A. J. (1992). Advance organizers: Facilitators of recall. Educational Psychology Review.',
  ],
  related: ['teaching/theories/cognitivism', 'teaching/theories/constructivism', 'teaching/techniques/instruction/graphic-organisers'],
}

export default guide
