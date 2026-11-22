import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Eight composite case studies, drawn from common situations in schools, youth programmes and workplaces. Each describes what happened, what went well or badly, and what the facilitator could learn. Names and details are invented.',
  nutshell: [
    'Most failures trace back to **design** (unclear purpose, no time maths, no debrief) or **safety** (psychological or physical).',
    'Most successes share **clear purpose**, **structured participation**, **real challenge** and **good debriefs**.',
  ],
  sections: [
    {
      id: 'cases',
      title: 'The cases',
      blocks: [
        { t: 'example', title: '1. The Secondary 1 orientation camp that worked', lines: [
          { label: 'Situation', text: '120 new students, 12 trained student facilitators, three days.' },
          { label: 'What happened', text: 'Day 1 used name games and low-risk initiatives in mixed-primary-school groups; day 2 an expedition with rotating roles; day 3 a strengths circle and letters to self.' },
          { label: 'What worked', text: 'Sequenced risk, every activity debriefed (What? So what? Now what?), and form teachers joined the final debrief, so lessons transferred to class.' },
          { label: 'Evidence', text: '“I belong here” rose from 3.1 to 3.8 (d ≈ 0.9 on self-report); form teachers reported fewer isolated students in term 1.' },
        ] },
        { t: 'example', title: '2. The raft that sank', lines: [
          { label: 'Situation', text: 'A raft-building challenge with a confident group of Secondary 3 boys.' },
          { label: 'What happened', text: 'Two boys took over, ignored a quiet girl who said the knots were wrong, and the raft fell apart. Blame started in the debrief.' },
          { label: 'Facilitator move', text: 'Moved blame to the system: “What made it hard for the group to hear the warning?” Used a spectrum on “How much were your ideas used?” The girl stood at the end; others saw it.' },
          { label: 'Learning', text: 'A failed task gave a better debrief than a success would have. The group made a rule: “Before we act, everyone says one concern.”' },
        ] },
        { t: 'example', title: '3. The staff retreat that was a lecture', lines: [
          { label: 'Situation', text: 'A school leadership team wanted “buy-in” for a new homework policy.' },
          { label: 'What happened', text: 'The “workshop” was a 60-minute presentation and 10 minutes of questions. The decision was already made. Staff left cynical.' },
          { label: 'What went wrong', text: 'The decision rule was hidden. Facilitation was used as decoration.' },
          { label: 'Better', text: 'Be honest: “The policy is decided. We want your help with implementation.” Then run 1-2-4-All on implementation problems and TRIZ on what could make it fail.' },
        ] },
        { t: 'example', title: '4. A merger workshop with two cultures', lines: [
          { label: 'Situation', text: 'Two departments merging; mutual suspicion.' },
          { label: 'Design', text: 'Appreciative interviews in mixed pairs about each department at its best; Impromptu Networking; a superordinate goal (a joint showcase in six weeks).' },
          { label: 'Outcome', text: 'Initial resistance in the groan zone; by the end the joint showcase had volunteers from both sides.' },
          { label: 'Learning', text: 'Start with stories, not structure charts; give the group a shared win quickly.' },
        ] },
        { t: 'example', title: '5. The online workshop nobody spoke in', lines: [
          { label: 'Situation', text: '40 participants on video, cameras off, an hour of slides.' },
          { label: 'What went wrong', text: 'No interaction for 25 minutes; the open “Any questions?” met silence.' },
          { label: 'Fix next time', text: 'Chat waterfall in the first 3 minutes; a poll every 10 minutes; breakouts of four with a shared doc; slides cut by half.' },
        ] },
        { t: 'example', title: '6. A CCA committee that never finished anything', lines: [
          { label: 'Situation', text: 'A student council with 30 open tasks and weekly meetings that were status reports.' },
          { label: 'Fix', text: 'A kanban board with a work-in-progress limit of 6, a 10-minute stand-up instead of status reports, and a retrospective every two weeks.' },
          { label: 'Result', text: 'Lead time per task dropped from about five weeks to two, as Little’s law predicts.' },
        ] },
        { t: 'example', title: '7. Tears on the high ropes', lines: [
          { label: 'Situation', text: 'A student froze halfway across a high element, in tears; peers shouted encouragement.' },
          { label: 'What went well', text: 'The instructor calmed the group, spoke quietly to the student, offered choices (go back, go on, rest), and the student chose to come down.' },
          { label: 'Debrief', text: 'The student later said what helped was being given a choice. The group discussed the difference between support and pressure.' },
          { label: 'Learning', text: 'Challenge by choice must be real, including in front of peers.' },
        ] },
        { t: 'example', title: '8. A decision that unravelled', lines: [
          { label: 'Situation', text: 'A parent group voted 9–7 on a fundraising plan in a heated meeting.' },
          { label: 'What went wrong', text: 'No discussion of the decision rule; the losing side felt steamrolled and quietly withdrew help.' },
          { label: 'Better', text: 'Agree the decision rule first; use gradients of agreement to find what the seven could live with; record concerns; review in a month.' },
        ] },
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns across the cases',
      blocks: [
        { t: 'table', head: ['Pattern', 'Cases'], rows: [
          ['Honest purpose and decision rules', '3, 8'],
          ['Structure that spreads airtime', '2, 5'],
          ['Debriefing a failure', '2, 7'],
          ['Superordinate goals', '4'],
          ['Project tools in youth settings', '6'],
          ['Transfer by involving people from home', '1'],
        ] },
      ],
    },
  ],
  related: ['facilitation/debriefing/hard-debriefs', 'facilitation/frameworks/decision-making', 'facilitation/project-management/agile-and-retros'],
}

export default guide
