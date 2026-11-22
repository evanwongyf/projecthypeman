import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Experiential learning is learning from doing and then thinking about the doing. It is the backbone of outdoor education, camps, simulations and team-building. The key insight is that the activity is only half the method: the learning happens in what the facilitator helps the group do with the experience afterwards.',
  nutshell: [
    '**Kolb (1984)**: concrete experience → reflective observation → abstract conceptualisation → active experimentation.',
    '**Pfeiffer and Jones (1975)**: experiencing, publishing (sharing), processing, generalising, applying.',
    'The adventure-education sequence: **brief → activity → debrief → transfer**.',
    'Skipping the reflective steps produces fun, not learning.',
  ],
  sections: [
    {
      id: 'kolb',
      title: 'Kolb’s cycle',
      blocks: [
        { t: 'cycle', caption: 'Kolb’s experiential learning cycle.', items: [
          { name: 'Concrete experience', body: 'Doing something: building a raft, a role-play, a group challenge.' },
          { name: 'Reflective observation', body: 'Looking back: what happened, what did people notice and feel?' },
          { name: 'Abstract conceptualisation', body: 'Making sense: why did it happen; what general idea explains it?' },
          { name: 'Active experimentation', body: 'Trying it out: planning to do something differently next time.' },
        ] },
        { t: 'callout', tone: 'myth', title: 'Learning styles are not the point', text: 'Kolb also proposed learning styles based on the cycle. The evidence does not support matching teaching to a learner’s style. The cycle itself is still a useful planning tool: make sure every learner goes all the way round.' },
      ],
    },
    {
      id: 'pfeiffer',
      title: 'Pfeiffer and Jones’ five stages',
      lead: 'The structured-experience model from the trainer’s handbooks of the 1970s, still common in corporate and youth work.',
      blocks: [
        { t: 'steps', items: [
          { title: 'Experiencing', body: 'The activity itself.' },
          { title: 'Publishing', body: 'Sharing reactions and observations: what did you see, do, feel?' },
          { title: 'Processing', body: 'Discussing patterns and dynamics: what happened between us, and why?' },
          { title: 'Generalising', body: 'Drawing principles: what does this teach about groups, leadership, ourselves?' },
          { title: 'Applying', body: 'Planning use: how will we use this at school, at work, at home?' },
        ] },
        { t: 'callout', tone: 'tip', title: 'The stage most often skipped', text: 'Facilitators often jump from publishing (“That was fun!”) straight to applying (“So teamwork is important at work”). Processing and generalising are where real insight lives: stay there longer than feels comfortable.' },
      ],
    },
    {
      id: 'adventure',
      title: 'The adventure-education sequence',
      blocks: [
        { t: 'table', head: ['Stage', 'Purpose', 'Example (a blindfolded rope-shape challenge)'], rows: [
          ['Brief (frontloading)', 'Set the challenge, safety rules and perhaps a learning focus', '“Make a square with this rope, blindfolded. Watch for how decisions get made.”'],
          ['Activity', 'A real challenge with real choices', 'The group works for 15 minutes; the facilitator observes and notes quotes'],
          ['Debrief', 'Turn experience into insight', 'What happened? Who led? What helped and hindered?'],
          ['Transfer', 'Connect to life outside', '“Where at school do decisions get made like this?”'],
        ] },
        { t: 'p', text: 'Michael Gass and Simon Priest described generations of facilitation in adventure programming, from “letting the mountains speak for themselves” (no debrief) through facilitator-led debriefing, to **frontloading** (raising the learning focus before the activity) and **isomorphic framing** (designing the activity as a metaphor that mirrors the group’s real situation).' },
        { t: 'levels', caption: 'Priest and Gass’ generations of adventure facilitation (simplified).', items: [
          { name: 'Let the experience speak', body: 'Do the activity; trust it to teach.' },
          { name: 'Speak on behalf of the experience', body: 'The facilitator tells the group what it learned.' },
          { name: 'Debrief the experience', body: 'The group reflects with the facilitator’s questions.' },
          { name: 'Direct the experience (frontload)', body: 'Name the focus before the activity.' },
          { name: 'Frame the experience (isomorphic)', body: 'Build the activity as a metaphor of the group’s real situation.' },
          { name: 'Indirect frontloading', body: 'Paradoxical or subtle framing for groups resistant to direct approaches.' },
        ] },
      ],
    },
  ],
  sources: [
    'Kolb, D. A. (1984). Experiential Learning. Prentice Hall.',
    'Pfeiffer, J. W., & Jones, J. E. (1975). Introduction to the structured experiences section. Annual Handbook for Group Facilitators.',
    'Priest, S., & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics.',
  ],
  related: ['facilitation/debriefing/debrief-models', 'facilitation/growth/transfer', 'teaching/theories/experiential'],
}

export default guide
