import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Constructivism says learners do not receive knowledge ready-made; they **build** it, by fitting new experiences into what they already understand and rebuilding that understanding when it no longer fits.',
  nutshell: [
    'Every learner arrives with ideas already in place, including wrong ones. New learning is built on top of them.',
    'Piaget: learners **assimilate** new experiences into existing schemas, or **accommodate** by changing the schemas.',
    'Conflict between what a learner expects and what happens (disequilibrium) drives learning.',
    'Constructivism is a theory of *learning*, not a teaching method. Learners construct knowledge from good explanations too, not only from discovery.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'Learners build meaning',
      lead: 'Understanding is made, not transmitted.',
      blocks: [
        {
          t: 'p',
          text: 'Two learners can hear the same explanation and walk away with different understandings, because each interprets it through what they already know. Constructivism takes this seriously. Knowledge is not poured into an empty vessel; it is assembled by the learner, piece by piece, from experience and instruction.',
        },
        {
          t: 'p',
          text: 'Jean Piaget, a Swiss biologist turned psychologist, developed the most influential version of this idea by watching children solve problems and noticing that their mistakes followed patterns. Children were not just less informed than adults; they thought in systematically different ways.',
        },
      ],
    },
    {
      id: 'mechanism',
      title: 'How understanding changes',
      lead: 'Assimilation, accommodation and equilibration.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Schema', def: 'A mental structure for organising knowledge about something.' },
            { term: 'Assimilation', def: 'Fitting a new experience into an existing schema. A toddler who knows "dog" calls a cow a dog.' },
            { term: 'Accommodation', def: 'Changing a schema, or making a new one, because the experience will not fit. The toddler learns that cows are a different kind of animal.' },
            { term: 'Disequilibrium', def: 'The uncomfortable state when experience contradicts expectation.' },
            { term: 'Equilibration', def: 'The drive to resolve disequilibrium, which pushes understanding forward.' },
          ],
        },
        {
          t: 'example',
          title: 'A science misconception',
          lines: [
            { label: 'Prior idea', text: 'Heavier things fall faster.' },
            { label: 'Assimilation', text: 'A rock drops faster than a feather. "See, heavier is faster."' },
            { label: 'Conflict', text: 'Drop a closed book and a sheet of paper laid flat on top of it. They land together. Then scrunch the paper into a ball and drop it beside a flat sheet.' },
            { label: 'Accommodation', text: '"It is not weight. Air resistance is slowing the flat paper." The schema is rebuilt.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Use **cognitive conflict** deliberately: ask learners to predict, then show a result that contradicts the common wrong prediction. Surprise makes them ready to rebuild. Always follow the surprise with a clear explanation, or they may simply explain the result away.',
        },
      ],
    },
    {
      id: 'stages',
      title: 'Piaget’s four stages',
      lead: 'How thinking changes through childhood.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Sensorimotor (about 0–2)', body: 'Learning through the senses and movement. Develops **object permanence**: things still exist when out of sight.' },
            { name: 'Preoperational (about 2–7)', body: 'Language and pretend play grow fast. Thinking is **egocentric** and learners struggle with **conservation**: they think a tall thin glass holds more than a short wide one with the same water.' },
            { name: 'Concrete operational (about 7–11)', body: 'Logical thinking about real, concrete things. Masters conservation, classification and ordering, but finds abstract and hypothetical reasoning hard.' },
            { name: 'Formal operational (about 11+)', body: 'Abstract, hypothetical and systematic reasoning: "what if", algebra, designing fair tests.' },
          ],
          caption: 'Ages are rough. Later research found children often reach these abilities earlier with familiar tasks, and many adults do not use formal reasoning in every domain.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Stages are not ceilings',
          text: 'Margaret Donaldson (1978) showed that young children succeed at "impossible" tasks when the tasks make human sense to them. Treat the stages as a reminder that concrete comes before abstract, not as a rule about what a given age can learn.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'In the classroom',
      lead: 'What constructivism suggests, and what it does not.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Find out what they think first', body: 'Probe prior ideas with a prediction, a diagnostic question or a concept cartoon before teaching.' },
            { title: 'Concrete before abstract', body: 'Blocks before place value notation; a real pendulum before the formula. See concrete-pictorial-abstract in [dyscalculia](@teaching/special-education/needs/dyscalculia).' },
            { title: 'Make thinking visible', body: 'Ask learners to explain *why*. Their explanations reveal the schema they are building.' },
            { title: 'Plan for misconceptions', body: 'List the common wrong ideas in a topic before you teach it, and plan how to confront each one.' },
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Myth: constructivism means discovery learning',
          text: 'A learner constructs knowledge whether they discover it or hear it explained well. Studies of minimally guided discovery show beginners often learn less than from explicit teaching (Kirschner, Sweller & Clark, 2006; Mayer, 2004). Constructivism is best read as advice to find out and work with what learners already think, not as a ban on explaining.',
        },
      ],
    },
  ],
  sources: [
    'Piaget, J. (1952). *The origins of intelligence in children*. International Universities Press.',
    'Donaldson, M. (1978). *Children’s minds*. Fontana.',
    'Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work. *Educational Psychologist, 41*(2), 75–86.',
    'Mayer, R. E. (2004). Should there be a three-strikes rule against pure discovery learning? *American Psychologist, 59*(1), 14–19.',
  ],
  related: ['teaching/theories/social-constructivism', 'teaching/theories/cognitivism', 'teaching/techniques/active-learning/inquiry'],
}

export default guide
