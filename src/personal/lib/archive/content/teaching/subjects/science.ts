import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Learners come to science with their own ideas about how the world works, many of them wrong but sensible. Good science teaching works with those ideas, uses practical work with a clear purpose, and teaches the ways scientists think as well as what they know.',
  nutshell: [
    'Find out and **confront learners’ preconceptions**; they are stubborn.',
    'Practical work must be **"minds-on" as well as hands-on**: be clear what learners should learn from it.',
    'Teach the **language of science** and scientific **models** explicitly.',
    'Teach **working scientifically**: variables, fair tests, uncertainty, evidence.',
  ],
  sections: [
    {
      id: 'preconceptions',
      title: 'Preconceptions',
      blocks: [
        {
          t: 'p',
          text: 'Rosalind Driver and others documented how learners’ everyday ideas shape how they interpret science lessons. These ideas often survive teaching, because learners fit new information into their existing beliefs (see [constructivism](@teaching/theories/constructivism)).',
        },
        {
          t: 'table',
          head: ['Common idea', 'Scientific view'],
          rows: [
            ['Heavier objects fall faster.', 'Without air resistance, all objects fall at the same rate.'],
            ['Plants get their food from the soil.', 'Plants make glucose by photosynthesis; most of their mass comes from carbon dioxide in the air.'],
            ['Cold comes in through an open window.', 'Heat is transferred out; "cold" is the absence of thermal energy.'],
            ['A moving object needs a force to keep moving.', 'An object keeps moving at constant velocity unless a resultant force acts.'],
            ['Seasons happen because Earth is closer to the Sun in summer.', 'Seasons are caused by the tilt of Earth’s axis.'],
          ],
        },
        {
          t: 'list',
          items: [
            'Ask learners to **predict** before demonstrations, making their ideas visible.',
            'Use **concept cartoons**: characters voicing different ideas for discussion.',
            'Show **discrepant events** that contradict the misconception, then explain.',
            'Revisit misconceptions over time; one lesson rarely shifts them.',
          ],
        },
      ],
    },
    {
      id: 'practical',
      title: 'Practical work that teaches',
      blocks: [
        {
          t: 'p',
          text: 'Abrahams and Millar (2008) observed many practical lessons and found they were often "hands-on but not minds-on": learners followed instructions and produced results, but did not think about the ideas the practical was meant to illustrate.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Decide the purpose', body: 'Is it to see a phenomenon, understand a concept, or develop enquiry skills? Each needs a different design.' },
            { title: 'Prepare minds', body: 'Before the practical, make sure learners know what to look for and why.' },
            { title: 'Reduce cognitive load', body: 'Clear, short instructions and demonstrated techniques, so thinking goes to the science, not the procedure.' },
            { title: 'Link to ideas', body: 'During and after, ask how the results connect to the scientific model.' },
            { title: 'Consolidate', body: 'Explain, discuss and apply after the practical. This is where most of the learning happens.' },
          ],
        },
      ],
    },
    {
      id: 'thinking',
      title: 'Scientific thinking and language',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Variables and fair tests', body: 'Independent, dependent and control variables; changing one thing at a time. See [lab reports](@writing/forms/lab-report).' },
            { title: 'Uncertainty and evidence', body: 'Repeat measurements, anomalies, precision versus accuracy, how confident we can be.' },
            { title: 'Models', body: 'Particle models, circuit analogies, the Bohr atom. Teach them as models: useful, with limits.' },
            { title: 'Vocabulary', body: 'Words like "energy", "work" and "theory" mean something different in science. Teach the scientific meanings explicitly.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Driver, R., Squires, A., Rushworth, P., & Wood-Robinson, V. (1994). *Making sense of secondary science: Research into children’s ideas*. Routledge.',
    'Abrahams, I., & Millar, R. (2008). Does practical work really work? *International Journal of Science Education, 30*(14), 1945–1969.',
    'Education Endowment Foundation. (2018). *Improving secondary science: Guidance report*.',
  ],
  related: ['teaching/theories/constructivism', 'teaching/techniques/active-learning/inquiry', 'writing/forms/lab-report'],
}

export default guide
