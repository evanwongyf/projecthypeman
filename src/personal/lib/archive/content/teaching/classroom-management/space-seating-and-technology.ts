import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The room itself is a management tool. Where students sit, how they move, how groups form and where devices go shape behaviour before a word is spoken. This page covers the physical and digital design of a manageable classroom: layout and seating, movement, group-work routines and the phone and device policies that have become a flashpoint in schools around the world.',
  nutshell: [
    '**Seat students by plan**, not by choice; a seating plan reduces conflict and gives you control of the room.',
    '**Rows** suit independent work and direct teaching; **groups** suit discussion and collaboration. Match layout to task.',
    'Plan **movement**: clear routes, materials in known places, a calm way to enter and leave.',
    '**Group work** needs roles, rules, a task that requires everyone and an exit if it fails.',
    '**Phones** are a distraction: a clear, school-wide policy applied consistently is far more effective than lesson-by-lesson battles.',
  ],
  sections: [
    {
      id: 'layout',
      title: 'Layout and seating',
      blocks: [
        {
          t: 'table',
          head: ['Layout', 'Best for', 'Drawbacks'],
          rows: [
            ['Rows facing the front', 'Direct teaching, silent work, tests; fewer off-task conversations', 'Limits discussion and collaboration'],
            ['Groups of four', 'Collaboration, discussion, practical tasks', 'More off-task chat; some students face away from the board'],
            ['U-shape or horseshoe', 'Whole-class discussion; seeing each other', 'Needs space; back-row students further away'],
            ['Pairs', 'Think-pair-share; mixed support', 'Needs careful pairing'],
            ['Flexible zones', 'Mixed activities', 'Needs strong routines'],
          ],
          caption: 'Research on layout suggests that rows improve on-task behaviour for individual work, and groups help collaborative tasks when routines are strong. Choose the layout for the task.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Use a seating plan', body: 'You decide, and change it when needed. It speeds learning names, separates conflict and spreads support.' },
            { title: 'Seat for learning', body: 'Put students who need help nearer to you, and distribute strong students and role models. Avoid seating all the strugglers together.' },
            { title: 'Keep sight lines open', body: 'You must be able to see every student and every screen from where you teach.' },
            { title: 'Explain it as routine', body: 'Say “this is how we do it in this class”, not “you have been naughty”.' },
            { title: 'Review regularly', body: 'Change seats when needed, and move students who work well together to new places as a reward.' },
            { title: 'Watch the hotspots', body: 'Doors, windows, the back row and the corner near the bin are where trouble often starts.' },
          ],
        },
      ],
    },
    {
      id: 'movement',
      title: 'Movement and materials',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Clear walkways between desks, wide enough to circulate.',
            'Materials in known, labelled places, handed out by monitors.',
            'A routine for entering, leaving and moving to groups.',
            'A place for bags and a place for devices.',
            'A defined “teaching zone” and a safe place to stand when calming a situation.',
            'A calm, quick routine for tidying.',
          ],
        },
      ],
    },
    {
      id: 'groups',
      title: 'Group work that works',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Have a reason for the group', body: 'Use groups when the task needs them: discussion, division of work, comparison, not for work that is better done alone.' },
            { title: 'Teach the routine', body: 'How to move, how loud, how to share roles, what to do when stuck, how to finish.' },
            { title: 'Assign the groups and the roles', body: 'You choose. Mixed ability, small groups of three or four, roles such as chair, scribe, timekeeper and reporter.' },
            { title: 'Make everyone accountable', body: 'Each student has a job or product. Individual accountability prevents “free riders”.' },
            { title: 'Circulate and monitor', body: 'Listen in, ask questions, redirect, praise.' },
            { title: 'End with a product and reflection', body: 'A short report back and a review of how the group worked.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/active-learning/cooperative', note: 'Five elements of real cooperation' }, { path: 'teaching/techniques/active-learning/jigsaw', note: 'Jigsaw: a structured group task' }, { path: 'teaching/differentiation/grouping', note: 'Flexible grouping' }] },
      ],
    },
    {
      id: 'phones',
      title: 'Phones, devices and screens',
      blocks: [
        { t: 'p', text: 'Smartphones in class have become one of the biggest management issues. Evidence suggests that the mere presence of a phone can reduce attention and that restricting phones in school has benefits, especially for lower-attaining students. In 2023 UNESCO’s Global Education Monitoring Report recommended that smartphones be kept out of schools unless needed for learning, and many education systems have moved to restrict them. In Singapore, MOE has issued guidance limiting phone use during lessons, and schools set their own detailed rules; check the current policy.' },
        {
          t: 'table',
          head: ['Policy', 'How it works', 'Notes'],
          rows: [
            ['Phones away all day (stored or in bags, off)', 'Simple, consistent, easy to enforce', 'Strongest evidence for benefit; needs buy-in and a storage plan'],
            ['Phones away in lessons, allowed at break', 'Balanced, still common', 'Needs clear lesson routines'],
            ['Used when a teacher says', 'Flexible for learning', 'Hardest to manage; inconsistent between teachers'],
          ],
          caption: 'A school-wide policy is more effective than each teacher making their own rules.',
        },
        {
          t: 'dodont',
          do: ['Agree a clear routine at the start (phones in bags or a caddy, on silent).', 'Apply the school policy consistently, calmly and the same way every time.', 'Give a reason students understand: attention, privacy and learning.', 'Use devices on purpose when they help learning.'],
          dont: ['Do not grab a phone out of a student’s hand or search a student’s phone.', 'Do not argue in front of the class.', 'Do not read or share the contents of a phone.', 'Do not accept a different rule for different students.'],
        },
        { t: 'callout', tone: 'warn', title: 'Do not search phones yourself', text: 'A student’s phone is private. If you think a phone holds evidence of bullying, a crime or something harmful, follow the school’s procedure and involve school leaders. Do not read messages or search the phone on your own.' },
      ],
    },
  ],
  sources: [
    'Wannarka, R., and Ruhl, K. (2008). Seating arrangements that promote positive academic and behavioural outcomes. Support for Learning.',
    'UNESCO (2023). Global Education Monitoring Report 2023: Technology in education: a tool on whose terms?',
    'Beland, L.-P., and Murphy, R. (2016). Ill communication: technology, distraction and student performance. Labour Economics.',
    'Ministry of Education Singapore. Guidelines on the use of personal devices in schools (check current).',
  ],
  related: ['teaching/classroom-management/proactive-strategies', 'teaching/classroom-management/routines-and-procedures', 'teaching/differentiation/grouping'],
}

export default guide
