import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'People will spend hundreds of hours mastering a difficult game, failing again and again, with no grade or pay. Understanding why tells us what to borrow for learning. The short answer: good games satisfy basic psychological needs, keep challenge matched to skill, and give constant, clear feedback towards goals the player cares about.',
  nutshell: [
    '**Self-determination theory** (Deci and Ryan): games satisfy needs for **competence**, **autonomy** and **relatedness** (Ryan, Rigby and Przybylski, 2006).',
    '**Flow** (Csikszentmihalyi): deep absorption when challenge matches skill and goals and feedback are clear.',
    '**Goal-setting theory** (Locke and Latham): specific, challenging goals with feedback raise performance.',
    'Gamification works mainly by changing **behaviour** (more practice, more time) and **attitudes**; the learning comes from the practice itself (Landers, 2014).',
  ],
  sections: [
    {
      id: 'sdt',
      title: 'Self-determination theory and games',
      blocks: [
        { t: 'table', head: ['Need', 'How games meet it', 'Classroom translation'], rows: [
          ['Competence', 'Levels, visible progress, challenges that scale, immediate feedback', 'Mastery paths, skill trees, quizzes with instant feedback'],
          ['Autonomy', 'Choice of quests, routes, avatars, strategies', 'Choice of tasks or order; optional side quests'],
          ['Relatedness', 'Teams, guilds, co-operation, shared stories', 'Team quests, peer help, class goals'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Controlling versus informational rewards', text: 'Cognitive evaluation theory predicts that rewards experienced as controlling (“do this to get points”) can reduce intrinsic motivation, while rewards that inform (“you have mastered fractions”) can support it. The same badge can be either, depending on framing.' },
      ],
    },
    {
      id: 'flow',
      title: 'Flow and the challenge–skill balance',
      blocks: [
        { t: 'teach-viz', viz: 'flow-map' },
        { t: 'p', text: 'Games keep players in flow by adjusting difficulty (dynamic difficulty, optional harder modes) and by giving the next goal the moment one is finished. Learning activities can do the same: levelled question sets, adaptive practice and “boss” problems that combine skills.' },
      ],
    },
    {
      id: 'loop',
      title: 'The core feedback loop',
      blocks: [
        { t: 'cycle', items: [
          { name: 'Goal', body: 'A clear, near target (finish this level, earn this badge).' },
          { name: 'Action', body: 'The player tries something.' },
          { name: 'Feedback', body: 'Immediate, visible result: success, failure, points, progress bar.' },
          { name: 'Progress', body: 'The result accumulates towards bigger goals; the next challenge unlocks.' },
        ] },
        { t: 'p', text: 'This loop is the same as good formative assessment. Much of gamification’s benefit may come from making feedback more frequent and visible, rather than from points or badges themselves.' },
      ],
    },
    {
      id: 'landers',
      title: 'How gamification affects learning',
      blocks: [
        { t: 'flow', title: 'Landers’ theory of gamified learning', nodes: [
          { label: 'Game elements', tone: 'process' },
          { label: 'Behaviour and attitudes', sub: 'more practice, more time, more effort', tone: 'human' },
          { label: 'Learning', sub: 'only if the instruction is good', tone: 'output' },
        ] },
        { t: 'p', text: 'Landers (2014) argued that gamification rarely teaches by itself. It changes how much and how learners engage with instruction. If the underlying instruction is poor, more engagement with it will not help much; if the game elements push attention away from the content, it can hurt.' },
      ],
    },
  ],
  sources: [
    'Ryan, R. M., Rigby, C. S., & Przybylski, A. (2006). The motivational pull of video games: A self-determination theory approach. Motivation and Emotion, 30(4), 344–360.',
    'Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper & Row.',
    'Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. American Psychologist, 57(9), 705–717.',
    'Landers, R. N. (2014). Developing a theory of gamified learning. Simulation & Gaming, 45(6), 752–768.',
    'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. Psychological Bulletin, 125(6), 627–668.',
  ],
  related: ['teaching/motivation/intrinsic-motivation', 'gamification/theory/design-frameworks', 'gamification/evidence/when-it-backfires'],
}

export default guide
