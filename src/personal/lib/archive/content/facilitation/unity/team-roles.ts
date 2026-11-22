import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Groups need more than people doing the task. Someone has to start things, someone has to check, someone has to make sure people are heard and someone has to keep spirits up. Role models help facilitators see which contributions are present, which are missing, and who is stuck in a role they did not choose.',
  nutshell: [
    '**Benne and Sheats (1948)**: task roles, maintenance (relationship) roles and individual (self-serving) roles.',
    '**Belbin (1981)**: nine team roles from a study of management teams at Henley.',
    'Roles are **behaviours, not personalities**: anyone can learn to play more of them.',
    'Rotating formal roles in youth groups spreads leadership and reveals hidden strengths.',
  ],
  sections: [
    {
      id: 'benne-sheats',
      title: 'Task, maintenance and individual roles',
      blocks: [
        { t: 'table', head: ['Type', 'Examples', 'What it does'], rows: [
          ['Task', 'Initiator, information seeker, opinion giver, elaborator, summariser, energiser', 'Moves the work forward'],
          ['Maintenance', 'Encourager, harmoniser, compromiser, gatekeeper (invites quiet voices), standard setter', 'Looks after relationships and participation'],
          ['Individual (unhelpful)', 'Blocker, dominator, recognition seeker, playboy (clowning), help seeker', 'Serves the person, not the group'],
        ] },
        { t: 'callout', tone: 'tip', title: 'Use it as an observation sheet', text: 'Give an observer the list of task and maintenance roles. During an activity they tally who does what. In the debrief, the group sees that, for instance, nobody summarised and only one person ever asked a quiet member for their view.' },
      ],
    },
    {
      id: 'belbin',
      title: 'Belbin’s team roles',
      blocks: [
        { t: 'table', head: ['Role', 'Contribution', 'Allowable weakness'], rows: [
          ['Plant', 'Creative, solves hard problems', 'Ignores details, poor communicator'],
          ['Resource investigator', 'Explores opportunities, makes contacts', 'Loses interest once enthusiasm fades'],
          ['Co-ordinator', 'Clarifies goals, delegates well', 'Can be seen as manipulative'],
          ['Shaper', 'Drives, thrives on pressure', 'Can provoke, hurts feelings'],
          ['Monitor evaluator', 'Judges options accurately', 'Lacks drive, can be overly critical'],
          ['Teamworker', 'Co-operative, diplomatic, listens', 'Indecisive in crunch situations'],
          ['Implementer', 'Turns ideas into action, disciplined', 'Inflexible'],
          ['Completer finisher', 'Finds errors, polishes, delivers on time', 'Worries, reluctant to delegate'],
          ['Specialist', 'Brings rare knowledge', 'Contributes on a narrow front'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Evidence', text: 'Belbin’s model is popular and useful as a vocabulary. Studies of its self-perception inventory have found weak psychometric properties, and evidence that “balanced” teams outperform others is mixed. Use it for conversation, not selection.' },
      ],
    },
    {
      id: 'rotating',
      title: 'Rotating roles in youth groups',
      blocks: [
        { t: 'table', head: ['Role card', 'Job in the activity'], rows: [
          ['Leader', 'Makes sure a plan is agreed and followed'],
          ['Timekeeper', 'Calls time checks; keeps the group to its plan'],
          ['Safety officer', 'Checks equipment and rules'],
          ['Gatekeeper', 'Makes sure every person has given an idea'],
          ['Scribe', 'Records the plan and key decisions'],
          ['Encourager', 'Notices and names good effort'],
        ] },
        { t: 'p', text: 'Rotate the cards every activity so each person holds each role at least once over a programme. In the debrief, ask: “Which role felt natural? Which was hard? Who surprised you?”' },
      ],
    },
  ],
  sources: [
    'Benne, K. D., & Sheats, P. (1948). Functional roles of group members. Journal of Social Issues, 4(2), 41–49.',
    'Belbin, R. M. (1981, 2010). Management Teams: Why They Succeed or Fail. Butterworth-Heinemann.',
    'Furnham, A., Steele, H., & Pendleton, D. (1993). A psychometric assessment of the Belbin Team-Role Self-Perception Inventory. Journal of Occupational and Organizational Psychology, 66, 245–257.',
  ],
  related: ['facilitation/unity/cohesion', 'facilitation/toolkit/difficult-dynamics', 'personality/start-here'],
}

export default guide
