import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most serious incidents do not come from nowhere: they build in stages, and each stage calls for a different response. Geoff Colvin’s behaviour cycle describes seven phases an escalating incident goes through, from calm to recovery. Knowing where a student is in the cycle tells you what to say, what not to say, and when to say nothing at all. This page walks through the cycle, the response at each phase, how to keep yourself safe, and how to debrief so the cycle does not repeat.',
  nutshell: [
    'An incident moves through **seven phases**: calm, trigger, agitation, acceleration, peak, de-escalation, recovery.',
    '**Early** (trigger, agitation) is when words and choices work; at the **peak** a student cannot process reasoning, so safety and silence matter.',
    'Your own **tone and body language** can lower or raise the temperature. Stay low, slow, side-on and calm.',
    '**Never argue, threaten or touch** a student at the peak, except to prevent immediate danger as trained.',
    '**Debrief** only when the student is calm: restore the relationship, work out what happened, and plan what to do next time.',
  ],
  sections: [
    {
      id: 'cycle',
      title: 'The seven phases',
      blocks: [
        {
          t: 'cycle',
          caption: 'Colvin’s cycle of acting-out behaviour. An incident can enter and leave at any phase, and many resolve at the first two.',
          items: [
            { name: 'Calm', body: 'The student is cooperative and on task. Build relationships, teach expectations and reinforce good behaviour here.' },
            { name: 'Trigger', body: 'Something sets the student off: a task, a peer, a correction, a bad morning. Spot triggers and remove or soften them.' },
            { name: 'Agitation', body: 'Restlessness, muttering, tapping, withdrawal, off-task behaviour. The best time to intervene lightly.' },
            { name: 'Acceleration', body: 'Provocative behaviour: arguing, refusing, swearing. The student is trying to engage you in a fight.' },
            { name: 'Peak', body: 'Out-of-control behaviour: shouting, aggression, running out. Safety is the only aim.' },
            { name: 'De-escalation', body: 'Confusion and withdrawal; the student is tired and not yet ready to talk.' },
            { name: 'Recovery', body: 'Slowly returning to normal; the student may be eager to please or avoid. Time to rebuild.' },
          ],
        },
      ],
    },
    {
      id: 'response',
      title: 'What to do at each phase',
      blocks: [
        {
          t: 'table',
          head: ['Phase', 'What the student is doing', 'What to do', 'What to avoid'],
          rows: [
            ['Calm', 'On task', 'Praise, teach, build trust', 'Ignoring good behaviour'],
            ['Trigger', 'Reacts to something', 'Remove or soften the trigger; offer help; give choice', 'Public correction, sarcasm, a sharp tone'],
            ['Agitation', 'Fidgeting, muttering, off task', 'Proximity, a calm check-in, a task break, a choice', 'Ignoring it and hoping it passes; demanding eye contact'],
            ['Acceleration', 'Arguing, testing, provoking', 'Stay calm, use short directions and choices, do not take the bait, move others away if needed', 'Arguing back, threats, raising your voice, last words'],
            ['Peak', 'Out of control', 'Keep everyone safe: give space, stay calm, get help, use minimum, trained intervention if needed', 'Reasoning, touching, cornering, crowding'],
            ['De-escalation', 'Withdrawn, tired', 'Give time, space and quiet; a drink; a simple task', 'Forcing a conversation or an apology'],
            ['Recovery', 'Returning to normal', 'Welcome back; restore routine; short, calm debrief later', 'Piling on consequences; saying “I told you so”'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'If safety is at risk', text: 'Move other students away, call for help, and keep yourself between the student and the exit. In an emergency call 999 and the school’s emergency number. Physical intervention is a last resort, and only the minimum needed to prevent immediate danger, as trained, followed by an immediate report.' },
      ],
    },
    {
      id: 'language',
      title: 'Language and body language',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Voice', body: 'Lower and slower than the student. Short sentences. Do not shout, however loud they are.' },
            { title: 'Body', body: 'Stand slightly side-on, hands visible and relaxed, with space between you. Avoid pointing, folded arms, or standing over.' },
            { title: 'Eyes', body: 'Soft, intermittent eye contact; staring can feel like a challenge.' },
            { title: 'Words', body: 'Use the student’s name, give a clear choice, say what you will do. Avoid “you always” and “you never”.' },
            { title: 'Silence', body: 'Pauses are powerful. Say less, and wait.' },
            { title: 'Audience', body: 'Remove or reduce the audience: move the class, or move the student, quietly.' },
          ],
        },
        {
          t: 'example',
          title: 'Agitation to acceleration',
          lines: [
            { label: 'Student', text: '(Slams the book shut.) “I am not doing this stupid work!”' },
            { label: 'Teacher (calm, low)', text: '“I can see you are angry. I am going to give you a minute. When you are ready, I will help you with the first question.”' },
            { label: 'Student', text: '“Leave me alone!”' },
            { label: 'Teacher', text: '“Okay. I will be at the board. You can sit there, or get a drink and come back in two minutes. Your choice.” (walks away)' },
            { label: 'Later, when calm', text: '“Thank you for taking the time. Let us look at the first question together.”' },
          ],
        },
      ],
    },
    {
      id: 'debrief',
      title: 'The debrief',
      blocks: [
        { t: 'p', text: 'The debrief matters as much as the response. Its aims are to restore the relationship, to help the student see what happened, and to plan for next time. Never attempt it at the peak, or before the student has recovered. It may be the same day, or the next, and may be led by someone other than the teacher.' },
        {
          t: 'steps',
          items: [
            { title: 'Welcome back', body: 'Greet the student and restore routine without bringing the incident up straight away.' },
            { title: 'Listen first', body: 'Ask what happened, from their view, and listen without defending.' },
            { title: 'Name the impact', body: 'Say calmly how the behaviour affected you and others, and what the rule is.' },
            { title: 'Find the trigger', body: 'What set it off? Is it a task, a person, a feeling, something outside school?' },
            { title: 'Plan', body: 'What will the student do next time, what will you do, and who will help?' },
            { title: 'Record and follow up', body: 'Log the incident and the plan, and check in after a day and a week.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'For staff too', text: 'An incident leaves staff shaken. Talk to a colleague or your year head, use the school’s support, and take a few minutes to recover before the next class.' },
      ],
    },
  ],
  sources: [
    'Colvin, G. (2004). Managing the Cycle of Acting-Out Behavior in the Classroom. Behavior Associates.',
    'Education Endowment Foundation (2019). Improving behaviour in schools.',
    'Crisis Prevention Institute. Nonviolent Crisis Intervention training materials (general principles).',
  ],
  related: ['teaching/classroom-management/escalation-and-consequences', 'teaching/singapore/students-abusing-teachers', 'teaching/special-education/strategies/behaviour-support'],
}

export default guide
