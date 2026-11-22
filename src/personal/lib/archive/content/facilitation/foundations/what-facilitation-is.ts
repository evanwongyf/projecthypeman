import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The word comes from the Latin *facilis*, easy. A facilitator makes a group’s work easier: they design and guide the process so the group can think, learn and decide well. The group owns the content and the outcome; the facilitator owns the process.',
  nutshell: [
    '**Content** is what the group is talking about. **Process** is how they are talking: who speaks, in what order, with what structure, towards what decision.',
    'A pure facilitator is **content-neutral**. Many real roles (teacher, manager, coach) mix facilitation with expertise, and the skill is to say which hat you are wearing.',
    'Good facilitation is mostly invisible: clear purpose, good questions, fair airtime and well-timed structure.',
  ],
  sections: [
    {
      id: 'content-process',
      title: 'Content and process',
      blocks: [
        { t: 'p', text: 'Picture a team arguing about which venue to book for a camp. The **content** is the venues, costs and dates. The **process** is that two people are doing all the talking, nobody has said what the decision rule is, and the meeting is twenty minutes over. A facilitator might not have an opinion about venues at all, but they can transform the meeting by fixing the process: “Let’s first agree the three criteria, then hear from everyone in a round, then score each venue.”' },
        { t: 'table', head: ['Process lever', 'Example'], rows: [
          ['Purpose and outcome', '“By 4 pm we will have chosen one venue and a backup.”'],
          ['Structure', 'Silent writing, then pairs, then the whole group.'],
          ['Participation', 'Rounds, timers, talking pieces, inviting quieter voices.'],
          ['Decision rule', 'Consensus, consent, majority vote, or the leader decides after consultation.'],
          ['Time and energy', 'Timeboxes, breaks, energisers, standing up and moving.'],
          ['Memory', 'A visible record: flipcharts, a shared document, a parking lot.'],
        ] },
      ],
    },
    {
      id: 'neighbours',
      title: 'Facilitator, teacher, trainer, chair, coach',
      blocks: [
        { t: 'table', head: ['Role', 'Owns content?', 'Owns outcome?', 'Main job'], rows: [
          ['Facilitator', 'No (neutral)', 'No: the group does', 'Design and guide the process'],
          ['Teacher', 'Yes', 'Shared: learning goals are set', 'Teach knowledge and skills, often by facilitating'],
          ['Trainer', 'Yes', 'Yes: defined skills', 'Build specific competencies'],
          ['Chair', 'Sometimes', 'Partly: runs to an agenda', 'Run a formal meeting to rules'],
          ['Coach', 'No', 'No: the client does', 'Help one person think and act'],
          ['Mediator', 'No', 'No: the parties do', 'Help people in dispute reach agreement'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Switching hats', text: 'When a teacher or manager facilitates, say out loud when you step out of the neutral role: “I’m going to take off my facilitator hat for a minute and give you my view as the head of department.” Then put it back on. Unannounced switches are how groups learn that “facilitated” sessions are really decisions already made.' },
      ],
    },
    {
      id: 'competencies',
      title: 'Core competencies',
      lead: 'Adapted from the International Association of Facilitators’ competency framework.',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Create collaborative client relationships', body: 'Clarify what the sponsor really wants, agree the scope and be honest about what a session can and cannot achieve.' },
          { title: 'Plan appropriate group processes', body: 'Choose methods that fit the purpose, the group size, the time and the culture.' },
          { title: 'Create and sustain a participatory environment', body: 'Draw out every voice, honour diversity, manage conflict and keep energy up.' },
          { title: 'Guide the group to useful outcomes', body: 'Help the group converge, decide and commit, and keep a clear record.' },
          { title: 'Build and maintain professional knowledge', body: 'Know a range of methods, and keep learning from every session.' },
          { title: 'Model a positive professional attitude', body: 'Self-awareness, neutrality, integrity and trust in the group’s capacity.' },
        ] },
      ],
    },
    {
      id: 'beliefs',
      title: 'Beliefs that make facilitation work',
      blocks: [
        { t: 'list', items: [
          'The group, together, knows more than any one member, including the facilitator.',
          'People commit to what they help create.',
          'Disagreement is information, not a failure.',
          'Every voice matters, and the quietest voice often holds what is missing.',
          'Structure frees people: a well-designed process lets more people contribute more safely.',
        ] },
        { t: 'dodont', do: [
          'Agree the purpose and the decision rule before discussion starts',
          'Keep a visible record everyone can see',
          'Ask more than you tell',
          'Name what you notice in the group (“I notice we keep coming back to cost”)',
        ], dont: [
          'Steer the group to your preferred answer while pretending to be neutral',
          'Let the loudest two people stand in for the room',
          'Run over time without asking the group',
          'Confuse a lively session with a useful one',
        ] },
      ],
    },
  ],
  sources: [
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making (3rd ed.). Jossey-Bass.',
    'Schwarz, R. (2017). The Skilled Facilitator (3rd ed.). Jossey-Bass.',
    'International Association of Facilitators. Core Facilitator Competencies.',
    'Hunter, D. (2009). The Art of Facilitation. Jossey-Bass.',
  ],
  related: ['facilitation/foundations/stances-and-styles', 'facilitation/frameworks/session-design', 'facilitation/toolkit/techniques'],
}

export default guide
