import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Beyond big frameworks, facilitation is built from dozens of small moves made in the moment: a paraphrase, a timebox, a stack of speakers, a parking lot. This guide collects the everyday techniques experienced facilitators use without thinking, grouped by what they do.',
  nutshell: [
    '**Listening moves**: paraphrasing, mirroring, drawing people out, stacking, balancing.',
    '**Structure moves**: timeboxing, rounds, parking lot, agenda checks.',
    '**Idea moves**: brainwriting, nominal group technique, affinity mapping, “yes, and”.',
    '**Energy moves**: breaks, standing up, changing groups, energisers.',
  ],
  sections: [
    {
      id: 'listening',
      title: 'Listening moves (from Kaner)',
      blocks: [
        { t: 'table', head: ['Move', 'What you do', 'Example'], rows: [
          ['Paraphrasing', 'Say back what you heard in your own words, then check', '“So you’re saying the timing is the real problem, not the venue. Is that right?”'],
          ['Mirroring', 'Repeat their exact words, briefly', '“Too expensive.”'],
          ['Drawing people out', 'Invite more', '“Can you say more about that?” “What’s an example?”'],
          ['Stacking', 'Number the people who want to speak, then call them in order', '“Lin, then Raj, then Priya.”'],
          ['Balancing', 'Ask for other perspectives', '“We’ve heard three people for this. Does anyone see it differently?”'],
          ['Making space', 'Invite a quiet person without pressure', '“Sam, you looked like you were thinking about something.”'],
          ['Encouraging', 'Invite those who haven’t spoken', '“Who has a view we haven’t heard yet?”'],
          ['Acknowledging feelings', 'Name the emotion without judging', '“It sounds like that was really frustrating.”'],
          ['Validating', 'Legitimise a view without agreeing', '“That’s an important concern.”'],
          ['Linking', 'Connect the comment to the topic', '“How does that relate to the budget question?”'],
          ['Summarising', 'Pull together the main points so far', '“So far we’ve got three options and two concerns…”'],
        ] },
      ],
    },
    {
      id: 'structure',
      title: 'Structure moves',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Timebox', body: 'Give every activity a visible time limit and keep it, or ask the group to extend it explicitly.' },
          { title: 'Parking lot', body: 'A flipchart for important topics outside today’s purpose. Review it at the end and assign each item an owner or a date.' },
          { title: 'Rounds', body: 'Everyone in turn, with the right to pass. Use for check-ins, check-outs and quick opinion gathering.' },
          { title: 'Agenda check', body: '“We’re halfway through. Do we stay on this or move on?” Hands the process choice back to the group.' },
          { title: 'Talking piece', body: 'Only the person holding the object speaks. Slows a heated group down.' },
          { title: 'Group memory', body: 'Write points in the speaker’s words on visible paper. People stop repeating themselves when they see they have been recorded.' },
          { title: 'Ground rules check', body: 'Point to the agreed norms when they slip: “We agreed one conversation at a time.”' },
          { title: 'Silence', body: '“Take two minutes in silence to think before anyone speaks.” Underused and powerful.' },
        ] },
      ],
    },
    {
      id: 'ideas',
      title: 'Idea and prioritisation moves',
      blocks: [
        { t: 'table', head: ['Technique', 'How', 'Why'], rows: [
          ['Brainwriting (6-3-5)', '6 people each write 3 ideas in 5 minutes, then pass sheets on and build on others’', 'Avoids production blocking (waiting to speak) and anchoring'],
          ['Nominal group technique', 'Silent generation, round-robin sharing, clarification, private ranking, aggregate', 'Equal input; strong evidence it beats open brainstorming for idea quantity'],
          ['Affinity mapping', 'One idea per sticky note; group cluster them silently; name clusters', 'Finds themes in many ideas quickly'],
          ['Yes, and…', 'Every response must build on the last idea before adding a new one', 'Builds momentum; borrowed from improv'],
          ['Reverse brainstorm', '“How could we make this worse?” then flip', 'Unsticks a group; humour'],
          ['Impact/effort grid', 'Place options on a 2 × 2 of impact and effort', 'Find quick wins'],
          ['Six thinking hats', 'Everyone thinks in one mode at a time: facts, feelings, caution, benefits, creativity, process', 'Separates criticism from generation'],
          ['Five whys', 'Ask why a problem happens; then why that happens; five times', 'Root causes'],
        ] },
        { t: 'callout', tone: 'fact', title: 'Brainstorming in groups', text: 'Since Taylor, Berry and Block (1958), study after study has found that the same number of people working alone, then pooling ideas, produce more (and often better) ideas than an interacting brainstorm group. Mullen, Johnson and Salas’ 1991 meta-analysis confirmed it. Causes: waiting your turn, fear of judgement and coasting. Brainwriting and nominal group technique fix most of this.' },
      ],
    },
    {
      id: 'energy',
      title: 'Energy moves',
      blocks: [
        { t: 'list', items: [
          'Break every 60–90 minutes; online every 45–60.',
          'Change the configuration: alone, pairs, small groups, whole group.',
          'Get people standing: gallery walks, spectrum lines, standing discussions.',
          'After lunch, start with something active.',
          'Change the room: go outside for a walking pair conversation.',
          'Use a 2-minute energiser (stretch, a quick game) when eyes glaze.',
        ] },
      ],
    },
  ],
  sources: [
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making. Jossey-Bass.',
    'Delbecq, A. L., & Van de Ven, A. H. (1971). A group process model for problem identification and program planning. Journal of Applied Behavioral Science, 7(4), 466–492.',
    'Mullen, B., Johnson, C., & Salas, E. (1991). Productivity loss in brainstorming groups: A meta-analytic integration. Basic and Applied Social Psychology, 12(1), 3–23.',
    'De Bono, E. (1985). Six Thinking Hats. Little, Brown.',
  ],
  related: ['facilitation/frameworks/liberating-structures', 'facilitation/toolkit/difficult-dynamics', 'facilitation/frameworks/decision-making'],
}

export default guide
