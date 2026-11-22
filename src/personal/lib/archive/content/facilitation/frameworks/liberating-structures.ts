import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Liberating Structures are 33 simple methods, collected by Henri Lipmanowicz and Keith McCandless, that replace the five conventional structures (presentations, managed discussions, open discussions, status reports and brainstorms) with formats that include everyone. Each has a fixed invitation, timing and group configuration, so they are easy to learn and hard to hijack.',
  nutshell: [
    'Every structure specifies five things: the **invitation** (question), **space**, **participation**, **groups** and **sequence of steps with times**.',
    'The most-used is **1-2-4-All**: think alone, then pairs, then fours, then the whole group.',
    'Structures can be **strung together** into a full session.',
    'They work because they distribute airtime and give quiet thinkers time before they have to speak.',
  ],
  sections: [
    {
      id: 'core',
      title: 'Ten structures worth knowing first',
      blocks: [
        { t: 'table', head: ['Structure', 'Steps and timing', 'Use it to'], rows: [
          ['**1-2-4-All**', '1 min alone; 2 min pairs; 4 min fours; 5 min whole group shares one standout idea per four', 'Generate ideas or answers from everyone in 12 minutes'],
          ['**Impromptu Networking**', '3 rounds of 4–5 min with a new partner each time, two questions per round', 'Open a session; warm up a room of strangers'],
          ['**TRIZ**', 'List how to guarantee the worst result (10 min); list what we already do that resembles it (10 min); pick one to stop (10 min)', 'Stop counterproductive habits with humour and honesty'],
          ['**15% Solutions**', 'Alone: what can you do now, without more resources or permission? (5 min); share in groups (10 min)', 'Turn a big problem into immediate personal action'],
          ['**Troika Consulting**', 'Groups of 3: one client explains a challenge, then turns their back while two consultants discuss it (10 min per person)', 'Practical peer help on individual challenges'],
          ['**What, So What, Now What?**', 'Collect facts, then implications, then actions, in small groups (around 45 min)', 'Debrief an experience or a set of data'],
          ['**Wicked Questions**', 'Pairs write questions in the form “How can we be both X and Y?”', 'Surface tensions that must be managed, not solved'],
          ['**Min Specs**', 'List all the rules; cut to the minimum that must be kept', 'Clarify the few non-negotiables'],
          ['**25/10 Crowd Sourcing**', 'Each writes a bold idea on a card; cards swap five times; each card is scored 1–5 each time; top ten shared', 'Rank many ideas fast, anonymously'],
          ['**Conversation Café**', 'Circles of 5–7 with a talking object; rounds of listening, then open talk', 'Talk about difficult or emotional topics'],
        ] },
      ],
    },
    {
      id: '1-2-4-all',
      title: '1-2-4-All in detail',
      blocks: [
        { t: 'steps', items: [
          { title: 'Invitation (said and shown)', body: 'Write one clear question: “What ideas do you have for making our club more welcoming for new members?”' },
          { title: '1 minute alone', body: 'Silent: write your own ideas. This protects the introverts and stops the first speaker anchoring everyone.' },
          { title: '2 minutes in pairs', body: 'Share and build on each other’s ideas.' },
          { title: '4 minutes in fours', body: 'Two pairs join. Notice similarities and differences; pick the most important idea.' },
          { title: '5 minutes whole group', body: '“What is one idea that stood out in your conversation?” Each four shares one; record them.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'Repeat the cycle', text: 'Run 1-2-4-All twice: first on “What is the problem?” and then on “What could we do?” Groups that start with solutions often solve the wrong problem.' },
      ],
    },
    {
      id: 'strings',
      title: 'Stringing structures together',
      blocks: [
        { t: 'flow', title: 'A 90-minute string for a team that wants to improve', nodes: [
          { label: 'Impromptu Networking', sub: '15 min: “What challenge do you bring? What do you hope for?”', tone: 'human' },
          { label: 'TRIZ', sub: '30 min: what would guarantee failure?', tone: 'process' },
          { label: '1-2-4-All', sub: '15 min: what could we try instead?', tone: 'data' },
          { label: '15% Solutions', sub: '15 min: what can I do on Monday?', tone: 'model' },
          { label: 'Check-out', sub: '10 min: one-word round', tone: 'output' },
        ] },
      ],
    },
  ],
  sources: [
    'Lipmanowicz, H., & McCandless, K. (2014). The Surprising Power of Liberating Structures. Liberating Structures Press.',
    'liberatingstructures.com (the free online catalogue of all 33 structures).',
  ],
  related: ['facilitation/frameworks/session-design', 'facilitation/frameworks/large-group-methods', 'facilitation/toolkit/techniques'],
}

export default guide
