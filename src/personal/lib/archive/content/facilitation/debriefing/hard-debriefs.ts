import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Debriefs are easy when the task went well and everyone is happy. They matter most, and are hardest, when it went badly: the group failed, someone was blamed, someone cried, someone got hurt, or the group simply will not talk. This guide gives responses and scripts for the common hard moments.',
  nutshell: [
    'Your first job in a hard debrief is **safety**, then **feelings**, then **learning**.',
    'Separate **people from actions**: talk about what happened, not who someone is.',
    'A failed task is often the **richest** debrief, if the group feels safe enough to look at it.',
    'Know when to stop the group debrief and talk to someone privately or refer them on.',
  ],
  sections: [
    {
      id: 'scenarios',
      title: 'Scenarios and responses',
      blocks: [
        { t: 'table', head: ['Situation', 'Try', 'Avoid'], rows: [
          ['Silence', 'Wait; switch to pairs or writing; use a spectrum or cards; ask a lower-risk question (“What was the first thing you did?”)', 'Filling the silence with a lecture'],
          ['Blame (“It was all Ali’s fault”)', 'Reframe to the system: “What made it hard for the group to catch that?”; ask each person what they contributed', 'Letting the group pile on; making Ali defend himself in public'],
          ['Tears or distress', 'Acknowledge calmly; offer a choice (stay, step out with a co-facilitator); continue the group gently; check in privately later', 'Probing in front of everyone; ignoring it'],
          ['The task failed', 'Normalise (“The interesting debriefs come from tasks that did not work”); look for moments that went right; ask what they would change', 'Rescuing with “It was really close!” if it was not'],
          ['One voice dominates', 'Rounds; “Let’s hear from someone who hasn’t spoken”; give the dominant person a role (scribe, timekeeper)', 'Shaming them'],
          ['Cynicism (“This is pointless”)', 'Take it seriously: “What would make it worth your time?”; connect to their own goals', 'Arguing about the value of debriefing'],
          ['A safety incident', 'Stop the programme activity; deal with first aid and reporting; debrief facts calmly later, separately from learning goals', 'Turning an injury into a “teachable moment” on the spot'],
          ['Laughter and deflection', 'Join briefly, then return: “Funny, and also, what really happened there?”', 'Becoming stern and losing rapport'],
        ] },
      ],
    },
    {
      id: 'scripts',
      title: 'Scripts',
      blocks: [
        { t: 'example', title: 'When blame starts', lines: [
          { label: 'Facilitator', text: '“I’m hearing that the plank was dropped at the end. Before we talk about who, let’s look at what the group was doing in the two minutes before it fell. What was everyone’s job?”' },
          { label: 'Later', text: '“If we did it again, what would the group do so that one person isn’t carrying that risk alone?”' },
        ] },
        { t: 'example', title: 'When the group failed', lines: [
          { label: 'Facilitator', text: '“So, the tower fell. I’m actually glad, because now we have something real to learn from. Let’s rewind: when did you first think it might not work?”' },
          { label: 'Then', text: '“What did you do with that thought? Who said it out loud?”' },
          { label: 'Then', text: '“Where else do we notice problems but not say them?”' },
        ] },
        { t: 'example', title: 'When someone is upset', lines: [
          { label: 'Facilitator', text: '“Thank you for being honest. That clearly mattered to you. You can stay with us or take a breather with Ms Tan, whichever you’d like.”' },
          { label: 'To the group', text: '“Let’s keep going, carefully. Everyone’s experience of the activity is valid.”' },
          { label: 'Afterwards, privately', text: '“How are you doing now? Is there anything you want me to know?”' },
        ] },
      ],
    },
    {
      id: 'duty',
      title: 'Duty of care',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'When a debrief uncovers more', text: 'Debriefs sometimes surface bullying, self-harm, abuse or serious distress. Do not investigate in the group. Close the group conversation gently, speak to the person privately, and follow your organisation’s safeguarding procedure (in Singapore schools, inform the form teacher, counsellor or designated staff member the same day).' },
        { t: 'checklist', items: [
          'Know your organisation’s safeguarding and incident procedures before the programme',
          'Have a co-facilitator who can step out with someone',
          'Never promise confidentiality you cannot keep',
          'Record incidents factually and promptly',
          'Debrief yourself afterwards with a colleague',
        ] },
      ],
    },
  ],
  sources: [
    'Greenaway, R. Active Reviewing Guide (reviewing.co.uk).',
    'Rudolph, J. W. et al. (2014). Establishing a safe container for learning in simulation. Simulation in Healthcare, 9(6), 339–349.',
  ],
  related: ['facilitation/foundations/psychological-safety', 'facilitation/toolkit/difficult-dynamics', 'facilitation/unity/conflict'],
}

export default guide
