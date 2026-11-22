import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Routines and consequences give a class its structure, but relationships give it its energy. Students work for teachers they believe care about them and know them, and they accept correction from them. This page explains why relationship is the engine of management, gives practical ways to build it (including the two-by-ten strategy and positive phone calls), shows how to praise well, and looks at rewards: when they help, when they backfire and how to use them wisely.',
  nutshell: [
    'A strong teacher-student relationship is one of the **strongest predictors** of good behaviour and engagement.',
    '**Warm and demanding** is the winning combination: high expectations plus genuine care.',
    'Use **specific, sincere praise** and keep correction brief; aim for **many positive interactions for each correction**.',
    'The **two-by-ten strategy**: talk to a challenging student for two minutes a day for ten days, about anything but behaviour.',
    '**Rewards** can help establish a new behaviour, but overuse can reduce intrinsic motivation. Use them sparingly, for specific behaviour, and fade them.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why relationships matter',
      blocks: [
        { t: 'p', text: 'Meta-analyses find strong links between the quality of teacher-student relationships and student behaviour, engagement and achievement. Relationships do not replace routines: they make routines work. A student who feels known and respected is more likely to follow an instruction, accept a consequence and forgive a bad day. The reverse also holds: a student who feels disliked or unseen will resist almost any request.' },
        { t: 'callout', tone: 'note', title: 'Warm demanders', text: 'Studies of teachers who succeed with students that others find hard describe “warm demanders”: they insist on high standards and do not accept excuses, and they make clear that they believe in the students. Strict and caring are not opposites.' },
      ],
    },
    {
      id: 'build',
      title: 'Building relationships in practice',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Learn names fast', body: 'Use them in the first lesson and often. Pronounce them correctly.' },
            { title: 'Greet at the door', body: 'A smile, a name and a short word: “Good to see you, Hui Min.”' },
            { title: 'Show interest', body: 'Ask about the football match, the hobby, the weekend. Remember and follow up.' },
            { title: 'Two-by-ten', body: 'Two minutes of friendly, non-academic talk, every day for ten days, with the student you find hardest. It often changes the relationship.' },
            { title: 'Positive contact home', body: 'Send a quick message or make a call about something good before you ever need to raise a problem.' },
            { title: 'Be consistent and fair', body: 'Students judge fairness closely. Apply the same rules to everyone and admit your own mistakes.' },
            { title: 'Show you trust them', body: 'Give responsibility. Believe in their ability to improve.' },
            { title: 'Repair quickly', body: 'After a conflict, restart: “Today is a new day.” Do not hold grudges.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Boundaries still matter', text: 'Be warm, but professional. You are not their friend. Keep communications within the school’s channels, avoid favouritism and be careful about personal disclosure.' },
      ],
    },
    {
      id: 'praise',
      title: 'Praise that works',
      blocks: [
        {
          t: 'table',
          head: ['Weak praise', 'Stronger praise', 'Why it works'],
          rows: [
            ['“Good boy.”', '“You waited for the group and checked everyone had finished. That was considerate.”', 'Names the behaviour, so it can be repeated'],
            ['“You are so clever.”', '“You tried three ways before it worked. That persistence is what got you there.”', 'Praises effort and strategy, not fixed ability'],
            ['“Great work, everyone.”', '“Table two have used evidence in every paragraph. Look at how Ming has referred to the text.”', 'Specific, and models quality for others'],
            ['Public, over the top', 'Quiet, private, sincere', 'Many students prefer private praise; teenagers especially'],
          ],
        },
        {
          t: 'dodont',
          do: ['Praise the specific behaviour and the effort.', 'Be sincere and match the praise to the achievement.', 'Praise privately when a student dislikes attention.', 'Aim for several positive interactions for each correction.'],
          dont: ['Do not praise ability alone (“you are so smart”).', 'Do not use praise to manipulate.', 'Do not praise the same few students only.', 'Do not follow praise with “but”.'],
        },
      ],
    },
    {
      id: 'rewards',
      title: 'Rewards: when they help and when they backfire',
      blocks: [
        { t: 'p', text: 'Behavioural research shows that reinforcement works: behaviour that is followed by something the person values tends to be repeated. But rewards for something a student already enjoys can reduce their interest (the overjustification effect), and rewards can shift attention from learning to the reward. The practical rule: use rewards sparingly, for specific behaviours (arriving on time, completing homework), make them small and meaningful, and fade them as the behaviour becomes habit.' },
        {
          t: 'table',
          head: ['Reward type', 'Good for', 'Cautions'],
          rows: [
            ['Specific praise and recognition', 'Almost anything', 'Needs to be sincere'],
            ['Positive message home', 'Effort and improvement', 'Make sure every student receives one over time'],
            ['Privileges and responsibility', 'Reliable behaviour', 'Make them earned and fair'],
            ['Points or tokens', 'Establishing a new routine in younger classes; hard-to-reach students', 'Can undermine intrinsic interest; need fading'],
            ['Tangible prizes', 'Short-term, specific goals', 'Risk of the reward becoming the goal; fairness issues'],
          ],
        },
        { t: 'links', items: [{ path: 'teaching/motivation/rewards-and-overjustification', note: 'The data on rewards and overjustification' }, { path: 'teaching/equity/behavioural-frameworks', note: 'PBIS, token economies and equity' }] },
      ],
    },
  ],
  sources: [
    'Cornelius-White, J. (2007). Learner-centered teacher-student relationships are effective: a meta-analysis. Review of Educational Research.',
    'Roorda, D. L., et al. (2011). The influence of affective teacher-student relationships on students’ school engagement and achievement. Review of Educational Research.',
    'Mendler, A. (2000). Motivating Students Who Don’t Care. Solution Tree. (The two-by-ten strategy.)',
    'Lepper, M. R., Greene, D., and Nisbett, R. E. (1973). Undermining children’s intrinsic interest with extrinsic reward. Journal of Personality and Social Psychology.',
  ],
  related: ['teaching/guides/classroom/relationships', 'teaching/motivation/rewards-and-overjustification', 'teaching/classroom-management/proactive-strategies'],
}

export default guide
