import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most failed sessions fail at the design stage: the purpose was vague, the agenda was a list of topics rather than a sequence of activities, and nobody did the arithmetic on time. This guide gives a design method you can use for a 45-minute class or a three-day retreat.',
  nutshell: [
    'Start from **purpose** (why are we meeting?) and **outcomes** (what will exist at the end that did not exist before?).',
    'Design an **arc**: open, explore, converge, close.',
    'Plan in **activities**, each with a method, a time, a product and a facilitator move.',
    'Do the **time maths**: airtime per person, transitions and a buffer of 10–20%.',
  ],
  sections: [
    {
      id: 'purpose',
      title: 'Purpose, outcomes and the people in the room',
      blocks: [
        { t: 'table', head: ['Question', 'Weak answer', 'Strong answer'], rows: [
          ['Purpose: why meet?', '“Discuss the camp.”', '“Agree the camp programme so bookings can be made on Monday.”'],
          ['Outcomes: what exists at the end?', '“Ideas.”', '“A draft three-day timetable, three activity leads named, a list of open questions with owners.”'],
          ['Who is coming?', '“The committee.”', '“Eight student leaders, two new; one teacher who must approve spending.”'],
          ['What do they need first?', 'Not asked', '“The new members need the background; the teacher needs the budget limit stated.”'],
        ] },
        { t: 'callout', tone: 'tip', title: 'The P-O-P opener', text: 'Many facilitators open by stating **Purpose, Outcomes and Process**: why we are here, what we will leave with, and how we will get there. It takes two minutes and prevents most confusion.' },
      ],
    },
    {
      id: 'arc',
      title: 'The arc',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Open', sub: 'welcome, purpose, check-in, norms', tone: 'human' },
          { label: 'Explore', sub: 'information, many ideas, perspectives', tone: 'data' },
          { label: 'Converge', sub: 'criteria, prioritise, decide', tone: 'model' },
          { label: 'Close', sub: 'commitments, reflection, check-out', tone: 'output' },
        ] },
        { t: 'table', head: ['Phase', 'Share of time (typical)', 'Example methods'], rows: [
          ['Open', '10–15%', 'Check-in round, P-O-P, norms, impromptu networking'],
          ['Explore', '35–45%', '1-2-4-All, World Café, gallery walk, input talk with buzz groups'],
          ['Converge', '25–35%', 'Criteria and scoring, dot voting, gradients of agreement'],
          ['Close', '10–15%', 'Action list, one-word check-out, What/So What/Now What'],
        ] },
      ],
    },
    {
      id: 'time',
      title: 'The time maths',
      blocks: [
        {
          t: 'math',
          tex: String.raw`T_{\text{plan}} = \sum_{i=1}^{k} a_i + (k-1)\,s \le (1 - b)\,T`,
          caption: 'The activities plus the switches between them must fit inside the session time minus a buffer.',
          plain: 'Add up the planned minutes for every activity, then add a little for every switch between activities (moving chairs, giving instructions, getting back from breakouts). That total should be no more than the session length with a safety buffer taken off, because everything takes longer than planned.',
          where: [
            { sym: String.raw`T_{\text{plan}}`, def: 'the total time your plan really needs, in minutes' },
            { sym: String.raw`a_i`, def: 'the minutes planned for activity number i' },
            { sym: 'k', def: 'the number of activities' },
            { sym: 's', def: 'minutes lost at each switch between activities (often 2–5)' },
            { sym: 'b', def: 'the buffer, as a fraction of the session (0.1 to 0.2)' },
            { sym: 'T', def: 'the length of the session, in minutes' },
          ],
          syntax: [
            { sym: String.raw`\sum_{i=1}^{k} a_i`, say: '“the sum of a-i for i from 1 to k”: add a₁ + a₂ + … + a_k' },
            { sym: '(k − 1)', say: 'k activities have k − 1 gaps between them' },
            { sym: String.raw`\le`, say: '“is less than or equal to”' },
            { sym: '(1 − b)T', say: 'the session time with the buffer share removed' },
          ],
          worked: {
            title: 'A 90-minute planning meeting',
            steps: [
              'Activities: check-in 10, input 15, 1-2-4-All 20, criteria 10, dot vote 10, actions 10. So k = 6.',
              String.raw`\(\sum a_i = 10 + 15 + 20 + 10 + 10 + 10 = 75\) minutes.`,
              String.raw`Switches: \((k-1)\,s = 5 \times 3 = 15\) minutes, so \(T_{\text{plan}} = 75 + 15 = 90\).`,
              String.raw`Allowed: \((1 - 0.15) \times 90 = 76.5\) minutes.`,
              String.raw`\(90 > 76.5\): the plan is about 14 minutes too long. Cut the input to 10 and the 1-2-4-All to 15, and drop one switch by doing criteria and the dot vote as one activity: \(70 + 4 \times 3 = 82\), still over; also trim check-in to 5: \(65 + 12 = 77 \approx 76.5\).`,
            ],
            why: [
              'list every activity with its minutes so nothing is forgotten',
              'add the activity minutes',
              'six activities have five transitions, at about three minutes each',
              'keep 15% of the session spare for overruns and late starts',
              'the plan must fit the allowance, so cut and merge until it does',
            ],
            answer: 'The first draft needs 90 minutes of a 90-minute slot, which leaves no buffer. A trimmed plan of about 77 minutes fits with a 15% buffer.',
          },
        },
        {
          t: 'math',
          tex: String.raw`t_{\text{each}} = \frac{T_{\text{round}}}{n}`,
          caption: 'Airtime per person in a round.',
          plain: 'If everyone speaks once in a round, each person gets the round’s time divided by the number of people. This is the quickest way to see that a whole-group round in a big group is either very long or very shallow.',
          where: [
            { sym: String.raw`t_{\text{each}}`, def: 'minutes each person can speak' },
            { sym: String.raw`T_{\text{round}}`, def: 'minutes set aside for the round' },
            { sym: 'n', def: 'number of people in the round' },
          ],
          syntax: [
            { sym: String.raw`\frac{a}{b}`, say: '“a over b”: a divided by b' },
          ],
          worked: {
            title: 'Whole group versus small groups',
            steps: [
              String.raw`Whole group: 30 people, 15 minutes. \(t = 15/30 = 0.5\) minutes (30 seconds) each.`,
              String.raw`Five groups of 6, the same 15 minutes, running in parallel: \(t = 15/6 = 2.5\) minutes each.`,
              String.raw`Ratio: \(2.5 / 0.5 = 5\).`,
            ],
            why: [
              'one shared round splits the time among everyone',
              'groups talk at the same time, so each round only splits among 6',
              'compare the two airtimes',
            ],
            answer: 'Small parallel groups give each person five times the airtime in the same 15 minutes. This is the arithmetic behind 1-2-4-All and breakout groups.',
          },
        },
      ],
    },
    {
      id: 'template',
      title: 'An activity-level plan',
      blocks: [
        { t: 'table', head: ['Time', 'Activity', 'Method', 'Product', 'Facilitator move'], rows: [
          ['0:00', 'Open', 'P-O-P, one-word check-in', 'Shared purpose', 'Model the check-in first'],
          ['0:08', 'Background', '10-minute input, 2-minute buzz in pairs', 'Questions on cards', 'Collect cards, answer three'],
          ['0:22', 'Generate options', '1-2-4-All', 'Ideas on sticky notes', 'Time each step strictly'],
          ['0:42', 'Criteria', 'Group lists, then agrees top three', 'Three criteria', 'Paraphrase, test agreement'],
          ['0:52', 'Choose', 'Dot vote against criteria', 'Ranked shortlist', 'Explain multi-vote rule'],
          ['1:05', 'Actions', 'Who, what, by when', 'Action list', 'Check every action has one owner'],
          ['1:15', 'Close', 'One thing I will do', 'Commitments', 'Thank; say what happens next'],
        ] },
        { t: 'checklist', items: [
          'Purpose and outcomes written in one sentence each',
          'Every activity has a product',
          'Time maths done with a buffer',
          'Materials: markers, sticky notes, timer, flipchart, name tags',
          'A plan B if energy drops or time runs short',
          'Accessibility: seating, print size, captions, breaks',
        ] },
      ],
    },
  ],
  sources: [
    'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making. Jossey-Bass.',
    'Lipmanowicz, H., & McCandless, K. (2014). The Surprising Power of Liberating Structures. Liberating Structures Press.',
  ],
  related: ['facilitation/frameworks/liberating-structures', 'facilitation/frameworks/decision-making', 'facilitation/toolkit/techniques'],
}

export default guide
