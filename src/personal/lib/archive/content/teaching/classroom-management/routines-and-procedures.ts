import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A routine is a task done the same way every time until it needs no thought. A class with good routines runs itself: students know how to enter, how to ask for help, how to hand in work, and what to do when they finish, and the teacher’s attention is free for teaching. This page shows how to design a routine, how to teach it like any other skill, which routines matter most and how to spend the first twenty days.',
  nutshell: [
    'A **rule** says what to do (“Respect others”); a **procedure** says how (“Raise a quiet hand and wait”). Rules without procedures are slogans.',
    '**Teach routines explicitly**: explain, model, practise, give feedback, and re-teach when it slips.',
    'Keep rules **few (three to five), positive and observable**; keep procedures **simple and consistent**.',
    'The **first two to three weeks** set the pattern for the year: spend them building routines before content.',
    'A routine that is not **reinforced** decays: revisit after holidays and when behaviour slides.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'Rules versus procedures',
      blocks: [
        {
          t: 'table',
          head: ['', 'Rule', 'Procedure'],
          rows: [
            ['What it is', 'A general expectation for behaviour', 'A specific, step-by-step way to do a task'],
            ['Number', 'Three to five', 'As many as the class needs'],
            ['Example', '“Listen when others speak.”', '“When I raise my hand and count down from three, stop, look at me and be silent.”'],
            ['Wording', 'Positive, observable, short', 'A list of steps, sometimes with a signal'],
            ['Taught by', 'Discussion and examples', 'Model, practise, repeat'],
          ],
        },
        {
          t: 'dodont',
          do: ['State rules positively: “Walk in the corridor”.', 'Make each rule observable: you can see whether it is being followed.', 'Link each rule to a reason students understand.', 'Display a small set where all can see.'],
          dont: ['Do not list fifteen rules.', 'Do not use vague rules (“Be good”).', 'Do not write rules you will not enforce.', 'Do not create a new rule for every incident.'],
        },
      ],
    },
    {
      id: 'teach',
      title: 'Teaching a routine',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Explain', body: 'Say what the routine is, why it matters and what it looks and sounds like. Keep it short.' },
            { title: 'Model', body: 'Show it done right, and sometimes done wrong, so students see the difference.' },
            { title: 'Practise', body: 'Have the class do it, with you watching and coaching. Practise it several times, until it is smooth.' },
            { title: 'Give feedback', body: 'Praise what was right, specifically, and correct what was not. Do it again.' },
            { title: 'Reinforce', body: 'Use the routine every day. Notice when it is done well. If it slips, re-teach it, do not just complain.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Rehearse for real', text: 'Spend real lesson time rehearsing: “We will practise coming in and starting the starter task. Let us go out and do it again, a little quieter.” It feels slow, and it pays back many times over.' },
      ],
    },
    {
      id: 'twenty',
      title: 'Twenty routines worth building',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Entering and starting', body: 'Greeting at the door, seats, bags, an immediate starter task on the board. Settles the class in the first minute.' },
            { title: 'Attention signal', body: 'A raised hand, a countdown or a sound that means stop and look. Practise it until it works in three seconds.' },
            { title: 'Giving instructions', body: 'Get attention, say it once, check understanding, say what happens next. Display written steps.' },
            { title: 'Asking and answering', body: 'Hands up, cold call, think-pair-share, no calling out. Set it early.' },
            { title: 'Getting help', body: 'How to ask when stuck: try, ask a neighbour, then raise a hand or use a signal, so you are not swamped.' },
            { title: 'Finishing early', body: 'A standing task so fast finishers are never idle and never disturb others.' },
            { title: 'Handing in and out', body: 'Who gives out materials, where work goes, how it is collected.' },
            { title: 'Toilet, water, leaving the room', body: 'Clear rules and a record for safety.' },
            { title: 'Transitions', body: 'Move between activities with a countdown and a clear sequence.' },
            { title: 'Group work', body: 'Roles, voices, what to do if the group is stuck, and how to rejoin the class.' },
            { title: 'Tidying and leaving', body: 'Stop on a signal, pack away, seats tidy, dismissed by you not by the bell.' },
            { title: 'Phones and devices', body: 'Where devices go, and when they may be used.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Do the common ones first', text: 'Start with entering, the attention signal, giving instructions and transitions. These four account for most lost time and most low-level disruption.' },
      ],
    },
    {
      id: 'first',
      title: 'The first twenty days',
      lead: 'The pattern is set early. A plan, with routines taught before content, saves months.',
      blocks: [
        {
          t: 'levels',
          caption: 'A rough sequence, from the first lesson to the end of the first month.',
          items: [
            { name: 'Day 1: Welcome and expectations', body: 'Greet each student, explain how the class works, teach entering, the signal and two or three rules. Learn names.' },
            { name: 'Days 2 to 5: Teach and practise', body: 'Rehearse entering, instructions, transitions and getting help, with some light content. Keep praising the routine.' },
            { name: 'Days 6 to 10: Add the rest', body: 'Group work, finishing early, handing in. Start applying consequences calmly and consistently.' },
            { name: 'Days 11 to 20: Maintain', body: 'Notice slippage and re-teach quickly. Start to build relationships beyond routines: conversations, praise, phone calls.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'I have three to five positive, observable rules.',
            'I have taught and rehearsed entering, the signal, instructions and transitions.',
            'Students know what happens if a rule is broken and have seen me apply it fairly.',
            'I know every student’s name and have said something positive to each.',
            'I have told parents who to contact and how.',
          ],
        },
      ],
    },
    {
      id: 'maintain',
      title: 'When routines slip',
      blocks: [
        {
          t: 'list',
          items: [
            'Name it without blame: “Our entering has got a bit noisy. Let us practise.”',
            'Re-teach in a short, light rehearsal.',
            'Check whether the routine is too complicated, and simplify it.',
            'After holidays and on Mondays, expect to re-teach.',
            'Use positive narration: “Table three is ready. Thank you.”',
            'Make sure you are consistent. The most common reason a routine fails is that the teacher stops enforcing it.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Wong, H. K., and Wong, R. T. (2018). The First Days of School: How to Be an Effective Teacher (5th ed.).',
    'Lemov, D. (2021). Teach Like a Champion 3.0. Jossey-Bass. (Routines and procedures.)',
    'Education Endowment Foundation (2019). Improving behaviour in schools.',
  ],
  related: ['teaching/classroom-management/foundations', 'teaching/classroom-management/proactive-strategies', 'teaching/guides/classroom/first-lessons'],
}

export default guide
