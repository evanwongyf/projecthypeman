import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    '“He is just lazy” is the most common explanation teachers give for a student who does not work, and it is usually the least useful. Laziness is a description, not a cause. Behind it sits a skills gap, an anxious student, a student who does not see the point, a student who is tired, caring for family or bullied, or sometimes a student who is just testing how much they can get away with. This page shows how to find which, and how to combine a firm structure of expectations and accountability with the support that makes the structure workable.',
  nutshell: [
    '**Diagnose before you label.** Look for skill gaps, executive-function difficulties, mental health and sleep problems, special needs, home pressures and bullying before assuming an attitude problem.',
    'Motivation has two roots: **“Can I do it?”** (expectancy) and **“Is it worth it?”** (value). Most disengagement is a problem with one or both.',
    'Firm and kind go together: **clear expectations, small deadlines, certain consequences, and visible help** to meet them.',
    'Involve parents **early and in writing**: a short contract with specific actions on both sides works better than a general complaint.',
    '**Attendance is the base.** In Singapore, the Compulsory Education Act makes parents responsible for primary-age attendance; truancy and school refusal need different responses.',
  ],
  sections: [
    {
      id: 'reframe',
      title: 'Why “lazy” is a poor diagnosis',
      blocks: [
        { t: 'p', text: 'A student who does not hand in work is behaving, and every behaviour has a function: to avoid something, to get something, or because a skill is missing. “Lazy” describes the behaviour and stops the inquiry. A better starting question is “what is getting in the way?” That is not a soft question: it is the one that leads to the response that works, which may still be firm.' },
        {
          t: 'table',
          head: ['What it looks like', 'Possible cause', 'First move'],
          rows: [
            ['Starts but does not finish; panics at deadlines', 'Executive-function difficulty (planning, organising, task initiation)', 'Chunk tasks, set mini-deadlines, a planner, a check-in'],
            ['Avoids hard tasks; “I do not care”', 'Fear of failure or low expectancy; protects self-esteem', 'Start with a task they can succeed at; praise effort and strategy'],
            ['Seems bored; finishes easy things fast', 'Under-challenged; gifted or understimulated', 'Raise the challenge; offer depth'],
            ['Tired, falls asleep, late', 'Poor sleep, late-night phone or gaming, caring for siblings, a job', 'Talk about routines; involve parents and counsellor'],
            ['Withdrawn, tearful, drop in grades', 'Anxiety, depression, bullying, bereavement', 'Counsellor referral; safety check'],
            ['Behind in basics; guesses', 'Learning gap or difficulty such as dyslexia, ADHD', 'Diagnose the gap; learning support; assessment'],
            ['Works for some teachers, not others', 'Relationship, consistency, classroom climate', 'Compare conditions; work on rapport and consistency'],
            ['Does not see the point', 'Low value: the work seems irrelevant', 'Link to goals; give choice and purpose'],
            ['Deliberately does nothing, tests limits', 'Weak boundaries, attention-seeking, power struggle', 'Clear consequence, calm and consistent'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Both can be true', text: 'A student can have a real difficulty and also be taking advantage of a soft response. The aim is high expectations and high support together, not a choice between them.' },
      ],
    },
    {
      id: 'diagnose',
      title: 'How to find the cause',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Look at the pattern', body: 'When does it happen: which subjects, times of day, days of the week, after which events? Check with other teachers. A pattern points to a cause.' },
            { title: 'Check the basics', body: 'Attendance, punctuality, sleep, food, health, vision and hearing, and whether the student has a known learning need.' },
            { title: 'Check the skill', body: 'Can they do the task if you do it with them? A quick one-to-one check separates “cannot” from “will not”.' },
            { title: 'Ask the student', body: 'A private, non-judgemental talk: “I have noticed that this is hard to start. What gets in the way?” Listen first, and expect “I do not know”.' },
            { title: 'Talk to the parents', body: 'Ask what they see at home, what happens after school, and what they think the cause is. Share what you have seen and what you propose.' },
            { title: 'Involve the counsellor or learning support when needed', body: 'If you suspect a learning need, mental health issue or a safety concern, refer rather than guess.' },
          ],
        },
      ],
    },
    {
      id: 'structure',
      title: 'Firm structure: expectations, accountability, support',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Expectations', body: 'State what is required, by when, and in what form, in writing. Vague expectations (“work harder”) cannot be met or checked.' },
            { title: 'Small steps', body: 'Break large tasks into steps with checkpoints. Success at small steps builds the belief that big ones are possible.' },
            { title: 'Accountability', body: 'A consequence that always follows a missed deadline: finish it in a supervised session, lose a break, a parent is told. Make the consequence small and certain.' },
            { title: 'Support', body: 'A homework club, a study buddy, a planner, extra explanation. Accountability without support is just pressure.' },
            { title: 'Recognition', body: 'Notice and name progress. Specific, honest praise for effort and strategy, not for being clever.' },
            { title: 'Review', body: 'A fixed check-in (weekly at first) with the student and, where needed, a parent. Adjust the plan when it is not working.' },
          ],
        },
        {
          t: 'example',
          title: 'A short written agreement (student, parent, school)',
          lines: [
            { label: 'Goal', text: 'Hand in all homework on time for the next four weeks.' },
            { label: 'Student will', text: 'Write homework in the planner every day; start homework by 6 pm; show it to a parent before packing the bag.' },
            { label: 'Parent will', text: 'Check the planner each evening; keep phones out of the room until homework is done; sign the planner.' },
            { label: 'School will', text: 'Check the planner every morning; offer a supervised homework session on Tuesdays and Thursdays; email a weekly update to the parents.' },
            { label: 'If it is not kept', text: 'The student does the work in a supervised session; parents are told the same day; we review the plan after two weeks with the year head.' },
            { label: 'Review', text: 'Friday of week two and week four.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Use the school’s consequences, not threats', text: 'Warnings that are never followed through teach students that nothing happens. Say what the consequence is, make sure it is one you can deliver, and then deliver it, calmly.' },
      ],
    },
    {
      id: 'truancy',
      title: 'Attendance, truancy and school refusal',
      blocks: [
        { t: 'p', text: 'In Singapore the Compulsory Education Act 2000 makes attending national primary school compulsory for eligible children above 6 and under 15, with exemptions. A parent who does not ensure regular attendance, without an exemption or an accepted reason, commits an offence, with a maximum fine of S$5,000, 12 months’ jail or both; prosecution needs a complaint by the Director-General, and the offence may be compounded for up to S$2,000. In practice, MOE works with families first, and prosecution is a last resort.' },
        {
          t: 'table',
          head: ['', 'Truancy', 'School refusal'],
          rows: [
            ['Pattern', 'Misses school without the parents knowing, or with them knowing; often goes elsewhere', 'Wants to attend but is overwhelmed by fear; stays home, often with distress'],
            ['Typical feelings', 'Boredom, rebellion, peer influence', 'Anxiety, panic, dread'],
            ['Response', 'Clear expectations, consequences, parent partnership, re-engagement', 'Support for the anxiety, gradual return plan, mental-health involvement'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Look for the cause before you punish', text: 'Persistent absence can mean bullying, caring duties, mental health problems or neglect. If a child may be at risk, follow the school’s child-protection protocol. Punishing a student who is afraid to come to school is not just ineffective, it can make things worse.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What the research says',
      blocks: [
        {
          t: 'list',
          items: [
            '**Self-determination theory.** Students are more engaged when they feel competence, autonomy and relatedness. Firm structure with choice inside it works better than control alone.',
            '**Expectancy-value theory.** Effort follows from “I can” times “it matters”. Raise either the belief in success or the value, and effort rises.',
            '**Homework.** Evidence suggests moderate, well-designed homework helps older students more than younger ones; more is not better.',
            '**Feedback and small steps.** Specific feedback on how to improve has a larger effect than grades alone.',
            '**Sleep.** Insufficient sleep in adolescence is linked to lower attention and achievement. A conversation about sleep is often more useful than a lecture about effort.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Compulsory Education Act 2000, Singapore Statutes Online; Ministry of Education. Compulsory education overview.',
    'Ryan, R. M., and Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation. American Psychologist.',
    'Eccles, J. S., and Wigfield, A. (2002). Motivational beliefs, values, and goals. Annual Review of Psychology.',
    'Education Endowment Foundation. Improving behaviour in schools (guidance report).',
  ],
  related: ['teaching/theories/motivation', 'teaching/special-education/strategies/executive-function', 'teaching/inclusive-practice/poverty-and-attendance'],
}

export default guide
