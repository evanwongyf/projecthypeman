import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'John Heron, a pioneer of facilitator training, noticed that good facilitators move between three ways of holding power over a group’s learning, and between six kinds of intervention. Knowing the options lets you choose deliberately instead of defaulting to whatever feels natural.',
  nutshell: [
    '**Hierarchical mode**: the facilitator decides for the group. **Co-operative mode**: the facilitator decides with the group. **Autonomous mode**: the group decides for itself.',
    'Groups usually need more hierarchy at the start and more autonomy as they mature.',
    'Heron’s six intervention categories split into **authoritative** (prescriptive, informative, confronting) and **facilitative** (cathartic, catalytic, supportive).',
  ],
  sections: [
    {
      id: 'modes',
      title: 'Three modes',
      blocks: [
        { t: 'levels', caption: 'From most to least facilitator control; a group often moves up this ladder as it matures.', items: [
          { name: 'Hierarchical', body: 'You design the programme, set the rules, interpret what happened and decide. Useful with a new group, under time pressure or when safety is at stake.', verbs: ['direct', 'explain', 'decide'] },
          { name: 'Co-operative', body: 'You share the decisions: you propose, the group modifies; you prompt, they interpret. Builds ownership while you still steer.', verbs: ['propose', 'negotiate', 'share'] },
          { name: 'Autonomous', body: 'You create the conditions and hand over: the group sets its agenda, runs its own process and reviews itself. Your job is to protect the space.', verbs: ['delegate', 'trust', 'hold space'] },
        ] },
        { t: 'callout', tone: 'note', title: 'Six dimensions', text: 'Heron applied the three modes across six dimensions of a session: planning (goals), meaning (how experiences are interpreted), confronting (how resistance is raised), feeling (how emotions are handled), structuring (how activities are run) and valuing (the climate of respect). You can be hierarchical on safety and autonomous on meaning in the same session.' },
      ],
    },
    {
      id: 'six-categories',
      title: 'Six categories of intervention',
      blocks: [
        { t: 'table', head: ['Category', 'Type', 'What it does', 'Example line'], rows: [
          ['Prescriptive', 'Authoritative', 'Directs behaviour', '“Take five minutes alone and write down three ideas.”'],
          ['Informative', 'Authoritative', 'Gives knowledge or information', '“Research on debriefs finds they improve performance by about 25%.”'],
          ['Confronting', 'Authoritative', 'Raises awareness of something the person or group is avoiding', '“I notice that every time cost comes up, we change topic.”'],
          ['Cathartic', 'Facilitative', 'Helps release emotion', '“That sounds like it was frightening up there. Do you want to say more?”'],
          ['Catalytic', 'Facilitative', 'Draws out self-discovery and problem-solving', '“What would you do differently next time?”'],
          ['Supportive', 'Facilitative', 'Affirms worth and effort', '“You stayed with it even when the group doubted the plan.”'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Degenerate versions', text: 'Each category has a failure mode. Prescriptive becomes bossiness, informative becomes lecturing, confronting becomes attack (or is dodged altogether: “pussyfooting”, in Heron’s word), cathartic becomes forcing feelings, catalytic becomes interrogation, and supportive becomes flattery. Most facilitators over-use one or two categories; ask a colleague which ones you use.' },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing a stance',
      blocks: [
        { t: 'diagram', title: 'A quick decision aid', nodes: [
          { id: 'a', label: 'Is safety at stake?', shape: 'diamond', col: 0, row: 0, tone: 'pink' },
          { id: 'h', label: 'Hierarchical', sub: 'decide and explain', col: 1, row: 0, shape: 'pill', tone: 'orange' },
          { id: 'b', label: 'Does the group have the skill and trust to run this?', shape: 'diamond', col: 0, row: 1, tone: 'teal', w: 1.4 },
          { id: 'au', label: 'Autonomous', sub: 'hand it over', col: 1, row: 1, shape: 'pill', tone: 'mint' },
          { id: 'co', label: 'Co-operative', sub: 'propose, then shape together', col: 0, row: 2, shape: 'pill', tone: 'lavender' },
        ], edges: [
          { from: 'a', to: 'h', label: 'yes' }, { from: 'a', to: 'b', label: 'no' },
          { from: 'b', to: 'au', label: 'yes' }, { from: 'b', to: 'co', label: 'not yet' },
        ] },
        { t: 'example', title: 'One activity, three stances', lines: [
          { label: 'Hierarchical', text: '“Here is the challenge, here are the rules, you have 20 minutes. Afterwards I will tell you what I saw.”' },
          { label: 'Co-operative', text: '“Here is the challenge. What rules do you want to add to keep each other safe? Afterwards we will look at what happened together.”' },
          { label: 'Autonomous', text: '“You have the afternoon and this equipment. Plan your own challenge, run it and review it. I’m here if you need me.”' },
        ] },
      ],
    },
  ],
  sources: [
    'Heron, J. (1999). The Complete Facilitator’s Handbook. Kogan Page.',
    'Heron, J. (2001). Helping the Client: A Creative Practical Guide (5th ed.). Sage.',
  ],
  related: ['facilitation/foundations/what-facilitation-is', 'facilitation/foundations/group-development', 'facilitation/debriefing/debrief-techniques'],
}

export default guide
