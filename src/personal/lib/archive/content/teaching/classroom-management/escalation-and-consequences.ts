import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Proactive habits prevent most problems, but not all. When a student chooses not to follow an instruction, a teacher needs a response that is proportionate, calm and certain. This page sets out the graded response from a look to a referral, the principles of a good consequence (and why certainty matters more than severity), how to deliver it without drama, and what to record, so that sanctions are both effective and fair.',
  nutshell: [
    'A good consequence is **small, certain, immediate and related** to the behaviour. **Certainty beats severity.**',
    'Use a **graded ladder** that students know in advance: reminder, warning, consequence, removal or referral.',
    '**Warn once.** Repeated warnings teach that nothing happens.',
    'Deliver consequences **calmly and privately**, without lecturing, and **restart** the relationship afterwards.',
    '**Log it.** A record protects the student, the teacher and the school, and shows patterns.',
  ],
  sections: [
    {
      id: 'ladder',
      title: 'A response ladder',
      blocks: [
        {
          t: 'levels',
          caption: 'Lowest rung first. Most behaviour is resolved on the first three rungs.',
          items: [
            { name: '1. Reminder', body: 'A brief, calm restatement of the expectation: “Eyes on the board, please.”' },
            { name: '2. Warning with the consequence', body: '“If I have to speak to you again, you will stay for five minutes at the end.” Specific, one chance.' },
            { name: '3. The consequence', body: 'Applied immediately and without argument: “That is a five-minute detention.”' },
            { name: '4. Removal or time out', body: 'A short period in a partner classroom or outside the door, in sight, for a reset, with a way back.' },
            { name: '5. Referral', body: 'To the year head or discipline team, with a log of what happened.' },
            { name: '6. School-level sanction', body: 'Detention or suspension and parental involvement, under the school and MOE framework.' },
          ],
        },
      ],
    },
    {
      id: 'principles',
      title: 'What makes a good consequence',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Certain', body: 'The student expects it to follow. A small consequence that always follows beats a large one that rarely does.' },
            { title: 'Immediate', body: 'Delivered close to the behaviour, so the link is clear.' },
            { title: 'Proportionate', body: 'Matched to the behaviour. Heavy sanctions for small things lose their force and fairness.' },
            { title: 'Related (logical)', body: 'Linked to the behaviour where possible: lost time for wasted time; repair for damage; moving for disruption.' },
            { title: 'Private and calm', body: 'Delivered quietly, without an audience, so the student does not have to save face.' },
            { title: 'Followed by a fresh start', body: 'Once served, it is over. The next lesson begins clean.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why certainty beats severity', text: 'Research on deterrence, from criminology to classrooms, finds that the likelihood of being caught and consequences following matters more than their size. Students ignore a heavy threat they have learned is rarely carried out, and respond to a mild consequence they know will come.' },
      ],
    },
    {
      id: 'deliver',
      title: 'Delivering a consequence',
      blocks: [
        {
          t: 'example',
          title: 'A calm consequence in practice',
          lines: [
            { label: 'Instruction', text: '“Please stop talking and start the task.”' },
            { label: 'Student', text: '(Carries on talking.)' },
            { label: 'Warning', text: '“I need you to stop talking now. If you carry on, you will stay for five minutes at break.”' },
            { label: 'Student', text: '(Carries on talking.)' },
            { label: 'Consequence', text: '“I am afraid that is a five-minute detention.” (and move on; no discussion)' },
            { label: 'Later, privately', text: '“I do not want to keep you in. Tomorrow I would like to see you start straight away. Can you do that?”' },
          ],
        },
        {
          t: 'dodont',
          do: ['Use the same tone for every student and every day.', 'Say what the student must do, not just what they must not.', 'Give take-up time: say it, then turn away for a few seconds.', 'Apply the consequence the same day, and record it.'],
          dont: ['Do not argue about the consequence in front of the class.', 'Do not add extra punishment because you are annoyed.', 'Do not threaten consequences you cannot apply.', 'Do not use academic work or marks as a punishment.'],
        },
      ],
    },
    {
      id: 'types',
      title: 'Common consequences and when to use them',
      blocks: [
        {
          t: 'table',
          head: ['Consequence', 'Use for', 'Cautions'],
          rows: [
            ['Seat change', 'Talking, distraction, friendship issues', 'Not a punishment for the student who is not at fault'],
            ['Short detention (5 to 10 minutes)', 'Wasting time, low-level disruption', 'Follow school policy; use the time for a reset conversation'],
            ['Reflection or restorative conversation', 'Rudeness, conflict', 'Must be calm and brief; not a lecture'],
            ['Repair', 'Damage, unkind behaviour', 'Make it meaningful, such as cleaning up or apologising sincerely'],
            ['Loss of privilege', 'Misuse of a privilege (phone, free time)', 'Make the link clear'],
            ['Parent contact', 'Repeated or serious behaviour', 'Also contact parents for good news'],
            ['Referral to year head', 'Serious or persistent behaviour', 'Bring your log'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Know the limits', text: 'In Singapore, consequences must stay within MOE policy and your school’s rules. Physical punishment, humiliation, punishing a whole class and using marks as a sanction are not acceptable. See the Singapore pages for the legal and policy limits.' },
      ],
    },
    {
      id: 'record',
      title: 'Recording and following up',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Date, time, lesson and the student’s name.',
            'What you saw and heard, in factual terms.',
            'What you said and did, and how the student responded.',
            'The consequence and whether it was served.',
            'Any contact with parents, and their response.',
            'A follow-up date to check whether it has improved.',
          ],
        },
        { t: 'links', items: [{ path: 'teaching/singapore/attitude-and-defiance', note: 'Scripts for backchat, refusal and disrespect' }, { path: 'teaching/singapore/discipline-framework', note: 'MOE’s standardised consequences' }, { path: 'teaching/classroom-management/de-escalation', note: 'When a situation is heating up' }] },
      ],
    },
  ],
  sources: [
    'Education Endowment Foundation (2019). Improving behaviour in schools.',
    'Rogers, B. (2015). Classroom Behaviour (4th ed.). Sage.',
    'Nagin, D. S. (2013). Deterrence in the twenty-first century. Crime and Justice. (On certainty versus severity.)',
  ],
  related: ['teaching/classroom-management/proactive-strategies', 'teaching/classroom-management/de-escalation', 'teaching/singapore/attitude-and-defiance'],
}

export default guide
