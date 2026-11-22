import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most problem-solving starts with what is wrong. Appreciative inquiry, developed by David Cooperrider at Case Western Reserve University in the 1980s, starts with what is working and asks how to have more of it. Design thinking starts with the people affected and prototypes solutions quickly. Both are frameworks a facilitator can run with any group.',
  nutshell: [
    'Appreciative inquiry’s **4-D cycle**: Discovery, Dream, Design, Destiny, around an affirmative topic.',
    'The questions we ask shape what we find: inquiry is already an intervention.',
    'Design thinking’s **double diamond**: Discover, Define (the problem), Develop, Deliver (the solution).',
    'Use strengths-based framing when a group is demoralised; problem-based when there is a clear fault to fix.',
  ],
  sections: [
    {
      id: '4d',
      title: 'The 4-D cycle',
      blocks: [
        { t: 'cycle', caption: 'Around a central affirmative topic, for example “Exceptional welcome for new students”.', items: [
          { name: 'Discovery', body: 'What gives life? Paired interviews about peak experiences: “Tell me about a time you felt really welcomed somewhere.”' },
          { name: 'Dream', body: 'What might be? Imagine the future if those peak moments were normal.' },
          { name: 'Design', body: 'What should be? Write provocative propositions: concrete statements of the ideal, in the present tense.' },
          { name: 'Destiny (Deliver)', body: 'What will be? Commit to actions and experiments, and keep learning.' },
        ] },
        { t: 'example', title: 'An appreciative interview guide', lines: [
          { label: '1', text: 'Tell me about a time in this school when you felt most proud to be part of it. What was happening? Who was involved?' },
          { label: '2', text: 'What do you value most about yourself, your work and this community?' },
          { label: '3', text: 'What are the core factors that give life to this place when it is at its best?' },
          { label: '4', text: 'Imagine it is five years from now and everything you hoped for has happened. What do you see?' },
        ] },
        { t: 'callout', tone: 'warn', title: 'Not toxic positivity', text: 'Critics argue appreciative inquiry can suppress legitimate problems. Good practice welcomes problems but reframes them: behind every complaint is a wish. “The meetings are a waste of time” becomes “What would a meeting worth your time look like?”' },
      ],
    },
    {
      id: 'double-diamond',
      title: 'Design thinking and the double diamond',
      blocks: [
        { t: 'flow', title: 'The UK Design Council’s double diamond', nodes: [
          { label: 'Discover', sub: 'diverge: research the people and context', tone: 'data' },
          { label: 'Define', sub: 'converge: frame the right problem', tone: 'model' },
          { label: 'Develop', sub: 'diverge: generate and prototype solutions', tone: 'process' },
          { label: 'Deliver', sub: 'converge: test, refine, launch', tone: 'output' },
        ] },
        { t: 'table', head: ['Stage', 'Facilitation methods'], rows: [
          ['Discover', 'Empathy interviews, shadowing, journey maps'],
          ['Define', '“How might we…?” questions, problem statements, affinity clustering'],
          ['Develop', 'Crazy Eights (eight sketches in eight minutes), brainwriting, paper prototypes'],
          ['Deliver', 'User testing, feedback grids (likes, wishes, questions, ideas), pilots'],
        ] },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing a frame',
      blocks: [
        { t: 'table', head: ['Situation', 'Better frame'], rows: [
          ['A tired team that feels criticised', 'Appreciative inquiry'],
          ['A new service or product for users you don’t understand yet', 'Design thinking'],
          ['A clear technical fault (the bus keeps arriving late)', 'Problem-solving (root cause, five whys)'],
          ['A culture change across a whole organisation', 'Appreciative inquiry summit, Open Space'],
        ] },
      ],
    },
  ],
  sources: [
    'Cooperrider, D. L., & Whitney, D. (2005). Appreciative Inquiry: A Positive Revolution in Change. Berrett-Koehler.',
    'Design Council (2005, 2019). The Double Diamond.',
    'Brown, T. (2009). Change by Design. Harper Business.',
  ],
  related: ['facilitation/frameworks/large-group-methods', 'facilitation/frameworks/decision-making', 'facilitation/growth/character-education'],
}

export default guide
