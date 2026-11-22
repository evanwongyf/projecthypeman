import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The best way to understand simulation-based learning is to learn from a simulation. Below are three of this site’s interactive models. For each one, use the predict–observe–explain (POE) routine (White and Gunstone, 1992): write a prediction before you touch anything, run the model, then explain any difference between what you expected and what happened.',
  nutshell: [
    '**Predict**: commit to an expectation and a reason, in writing.',
    '**Observe**: change one thing at a time and record what happens.',
    '**Explain**: reconcile your prediction with the result; what was wrong in your mental model?',
    'Remember these are **models**: simplified on purpose, labelled with their assumptions.',
  ],
  sections: [
    {
      id: 'forgetting',
      title: 'Simulation 1: spacing and forgetting',
      blocks: [
        { t: 'example', title: 'Predict before you play', lines: [
          { label: 'P1', text: 'With four reviews, will cramming them all on day 0 or spreading them out give better recall on day 30? By how much?' },
          { label: 'P2', text: 'If you could only do two reviews, would you do them on days 1 and 2, or days 3 and 14?' },
        ] },
        { t: 'learn-lab', viz: 'forgetting-curve' },
        { t: 'callout', tone: 'note', title: 'Explain', text: 'Why did cramming feel effective (100% recall on day 0) but fail later? Connect your answer to [spaced practice](@teaching/techniques/learning-strategies/spaced-practice) and [Attention and retention](@attention/start-here).' },
      ],
    },
    {
      id: 'attention',
      title: 'Simulation 2: attention in a lesson',
      blocks: [
        { t: 'example', title: 'Predict before you play', lines: [
          { label: 'P1', text: 'In a 60-minute lesson, how much does adding an active break every 15 minutes raise average attention?' },
          { label: 'P2', text: 'Is it better to have many short breaks or a few strong ones?' },
        ] },
        { t: 'learn-lab', viz: 'attention-lesson' },
        { t: 'callout', tone: 'note', title: 'Explain', text: 'Which assumption in the model is weakest? (Hint: real attention is not a smooth curve, and breaks can be badly designed.) How would you test the model with a real class?' },
      ],
    },
    {
      id: 'reliability',
      title: 'Simulation 3: an agent doing a long task',
      blocks: [
        { t: 'example', title: 'Predict before you play', lines: [
          { label: 'P1', text: 'An AI agent is right 95% of the time on each step. What is its chance of finishing a 20-step task?' },
          { label: 'P2', text: 'Which helps more: raising per-step accuracy to 98%, or allowing three attempts with 80% of failures noticed?' },
        ] },
        { t: 'learn-lab', viz: 'agent-reliability' },
        { t: 'callout', tone: 'note', title: 'Explain', text: 'Most people overestimate the first answer. Why does intuition fail with repeated multiplication? See [Reliability over many steps](@agentic-ai/maths/reliability).' },
      ],
    },
    {
      id: 'reflect',
      title: 'Reflect on simulation as a method',
      blocks: [
        { t: 'list', ordered: true, items: [
          'Where did your prediction go wrong, and what did that reveal?',
          'What could the model show you that a textbook paragraph could not?',
          'What does the model leave out that would matter in reality?',
          'How would you design a debrief for a class using one of these models?',
        ] },
      ],
    },
  ],
  sources: [
    'White, R., & Gunstone, R. (1992). Probing Understanding. Falmer Press.',
    'de Jong, T., & van Joolingen, W. R. (1998). Scientific discovery learning with computer simulations of conceptual domains. Review of Educational Research, 68(2), 179–201.',
  ],
  related: ['e-pedagogy/simulation/why-simulation', 'attention/retention/spacing', 'agentic-ai/maths/reliability'],
}

export default guide
