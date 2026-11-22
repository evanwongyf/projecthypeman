import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Backchat, eye-rolling, refusal and open disrespect wear teachers down more than almost anything else, because each incident is small and the pressure is constant. The answer is not volume or force. It is a calm, short, certain response applied the same way every time, a clear ladder of consequences that the whole class knows, and a relationship strong enough to survive the correction. This page gives you the ladder, the scripts, the limits of your authority and what to do when the pattern does not stop.',
  nutshell: [
    '**Calm, short, certain.** Say less, say it quietly, and do what you said you would do.',
    'Correct **privately** where you can, **publicly only when necessary**, and never humiliate.',
    'Use a **visible escalation ladder**: reminder, warning, consequence, removal or referral. Students should know the next step before it happens.',
    'Separate the **behaviour** from the **person** and from the **relationship**: “That was not acceptable” is not “You are a bad student”.',
    'A teacher’s authority has **legal limits**: no force, no humiliation, no punishment outside school policy.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Understanding what you are looking at',
      blocks: [
        {
          t: 'table',
          head: ['Behaviour', 'Often a sign of', 'Think first'],
          rows: [
            ['Backchat and rudeness', 'Testing limits; peer audience; habit', 'Is there an audience? Calm correction, privately later'],
            ['Refusing to work or follow an instruction', 'Task too hard; fear of failure; a power struggle', 'Can they do it? Offer a choice or a first step'],
            ['Silence, shrugging, sulking', 'Hurt, embarrassment, anger, withdrawal', 'Check in later; avoid public confrontation'],
            ['Mocking the teacher or others', 'Status-seeking; bullying; boredom', 'Name it, apply the consequence, address the audience'],
            ['Explosive anger', 'Frustration, trauma, a special need', 'Safety first; de-escalate; debrief when calm'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Firm is not cold', text: 'Research on “warm demanders” finds that the teachers who manage behaviour best combine high standards with real care for students. Students accept firm correction from a teacher who they believe is on their side.' },
      ],
    },
    {
      id: 'ladder',
      title: 'The escalation ladder for a class',
      lead: 'Display it, teach it in the first week, and use it every time.',
      blocks: [
        {
          t: 'levels',
          caption: 'Lowest rung first. Most behaviour is resolved on the first two rungs.',
          items: [
            { name: '1. Non-verbal or subtle reminder', body: 'Eye contact, proximity, a gesture, a student’s name said calmly.', verbs: ['Notice', 'Move'] },
            { name: '2. Private, clear instruction', body: '“I need you to put the phone away now.” Specific, quiet, and with thanks assumed.' },
            { name: '3. Warning with the consequence', body: '“If you do not stop, you will stay for five minutes at break.” One warning, no more.' },
            { name: '4. The consequence', body: 'Apply it calmly and without a lecture: “I am afraid that is a five-minute detention.” Record it.' },
            { name: '5. Removal or referral', body: 'Time out in a partner class, or the year head. Contact parents. Log it.' },
            { name: '6. Serious or repeated', body: 'The discipline framework: detention or suspension, conduct grade, counselling, and, where it is a crime, the police.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Give one warning, then act.', 'Keep your voice lower than the student’s.', 'Deal with it quietly and move on.', 'Restart with the student the next lesson, and mean it.'],
          dont: ['Do not argue about the rule in front of the class.', 'Do not keep warning without consequence.', 'Do not use sarcasm or humiliation.', 'Do not carry the grudge into the next lesson.'],
        },
      ],
    },
    {
      id: 'scripts',
      title: 'Scripts that work',
      blocks: [
        {
          t: 'example',
          title: 'Backchat in front of the class',
          lines: [
            { label: 'Student', text: '“This is so stupid. Why do we have to do it?”' },
            { label: 'Teacher (calm, low)', text: '“I hear that you do not want to do it. I need you to start the task now. We can talk at the end if you would like.”' },
            { label: 'If it continues', text: '“Please stay behind for two minutes at the bell.” (then move on at once)' },
            { label: 'At the end, privately', text: '“I did not like how you spoke to me in front of the class. What was going on? Next time I would like you to say it quietly and I will listen. Today you owe me five minutes at break.”' },
          ],
        },
        {
          t: 'example',
          title: 'A flat refusal (“I am not doing it”)',
          lines: [
            { label: 'Teacher', text: '“You have a choice. You can start with question one, or you can do the work at break with me. Which would you like?”' },
            { label: 'Wait', text: 'Give them time (ten seconds) and walk away, so there is no audience and no stand-off.' },
            { label: 'If they do not', text: '“I see. Then you will do it at break, and I will phone your mother this evening to tell her.” Do exactly that.' },
          ],
        },
        {
          t: 'example',
          title: 'Disrespect aimed at you personally',
          lines: [
            { label: 'Teacher', text: '“That is not how we speak to each other here. I will not argue about it now. We will talk with Mrs Lim after the lesson.” Refer it; do not retaliate.' },
          ],
        },
      ],
    },
    {
      id: 'broken-record',
      title: 'Tactics for the long haul',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The broken record', body: 'Repeat the same calm sentence without argument: “I need you to put it away.” Arguments feed on new material; repetition gives them none.' },
            { title: 'Partial agreement', body: '“You might be right that it is boring. I still need you to finish it.” It lowers the heat without giving in.' },
            { title: 'Choices, not ultimatums', body: 'Offer two acceptable options so the student can choose without losing face.' },
            { title: 'The reset conversation', body: 'A short private chat at the start of the next lesson: “Today is a fresh start.” It stops the dispute from becoming the relationship.' },
            { title: 'Catch them being good', body: 'Notice and name the behaviour you want, specifically and privately, at least as often as you correct.' },
            { title: 'Collect the data', body: 'A simple log of what happens before (antecedent), the behaviour and what follows (consequence). It often reveals the cause.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: 'The legal and professional limits',
      blocks: [
        {
          t: 'table',
          head: ['You may', 'You may not'],
          rows: [
            ['Give reasonable instructions and consequences within school policy', 'Use physical punishment, or force other than the minimum needed to prevent immediate danger, as trained'],
            ['Set a short detention or reflection task, and move a student', 'Humiliate, insult or label a student, or punish with marks'],
            ['Remove a banned item and hand it over by procedure', 'Search a student’s person or private phone yourself'],
            ['Refer to the year head or counsellor, and contact parents', 'Threaten consequences you are not authorised to give'],
            ['Call for help and, in emergency, the police', 'Retaliate against a student who has been abusive'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Document the pattern', text: 'When defiance persists, a dated log of what happened and what you did lets the year head and parents see the pattern, justifies escalation and protects you if a complaint is made.' },
      ],
    },
    {
      id: 'persist',
      title: 'When it does not stop',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Review the data', body: 'Look at what happens before and after. Is there a trigger (a lesson, a task, a time of day, a peer)?' },
            { title: 'Change something you control', body: 'Seating, task difficulty, time of the lesson, how you give the instruction.' },
            { title: 'Involve the parents with a plan', body: 'A meeting with specific shared actions, not just a complaint.' },
            { title: 'Involve the year head and counsellor', body: 'Check for a special need, an issue outside school or mental health.' },
            { title: 'Use the discipline framework', body: 'Serious or persistent defiance is handled under the framework, with supports alongside.' },
            { title: 'Review', body: 'Meet again. If the plan is not working, escalate with a clear record.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Education Endowment Foundation (2019). Improving behaviour in schools.',
    'Rogers, B. (2015). Classroom Behaviour (4th ed.). Sage.',
    'Kleinfeld, J. (1975). Effective teachers of Eskimo and Indian students; Ware, F. (2006). Warm demander pedagogy. Urban Education.',
  ],
  related: ['teaching/singapore/students-abusing-teachers', 'teaching/classroom-management/escalation-and-consequences', 'teaching/guides/classroom/management'],
}

export default guide
