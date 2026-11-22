import type { ArchiveNode } from '../topics'

// Gamification in education: the theory (motivation, flow, game design frameworks), what
// the research shows, how to design game elements that support learning rather than
// distract from it, game-based learning and serious games, classroom applications, the
// pitfalls, how to evaluate a gamified course, and case studies.

export const GAMIFICATION: ArchiveNode = {
  slug: 'gamification',
  title: 'Gamification in education',
  blurb: 'Using game design to help people learn: motivation theory, what meta-analyses find, points, badges, leaderboards and quests done well and badly, game-based learning and serious games, the maths of XP curves and evaluation, and case studies.',
  glyph: '♜',
  color: 'color-mix(in srgb, var(--mustard) 60%, var(--pink))',
  tags: ['gamification', 'game-based learning', 'serious games', 'points badges leaderboards', 'pbl', 'motivation', 'kahoot', 'classcraft', 'duolingo', 'minecraft education', 'quests', 'xp'],
  children: [
    { slug: 'start-here', title: 'Start here: what gamification is (and is not)', glyph: '★', blurb: 'Gamification, game-based learning and serious games distinguished, the shelf map and the five big lessons from research.', minutes: 9, tags: ['overview', 'definitions', 'roadmap'] },
    {
      slug: 'theory',
      title: 'Theory',
      glyph: '◇',
      group: 'Foundations',
      blurb: 'Why games motivate: self-determination, flow, goals and feedback, and the design frameworks game makers use.',
      children: [
        { slug: 'why-games-motivate', title: 'Why games motivate', blurb: 'Self-determination theory, flow, goal-setting, feedback loops and the difference between intrinsic and extrinsic hooks.', minutes: 13, tags: ['self-determination theory', 'flow', 'intrinsic motivation', 'feedback loop', 'goal setting'] },
        { slug: 'design-frameworks', title: 'Game design frameworks', blurb: 'MDA (mechanics, dynamics, aesthetics), Octalysis’ eight core drives, Bartle’s player types and the Hexad user types.', minutes: 12, tags: ['mda', 'octalysis', 'bartle', 'hexad', 'player types', 'game design'] },
        { slug: 'game-elements', title: 'The game element toolbox', blurb: 'Points, badges, leaderboards, levels, quests, narrative, avatars, teams, unlocks and timers: what each does psychologically.', minutes: 13, tags: ['points', 'badges', 'leaderboards', 'levels', 'quests', 'narrative', 'avatars'] },
      ],
    },
    {
      slug: 'evidence',
      title: 'What the research shows',
      glyph: '▤',
      group: 'Foundations',
      blurb: 'Meta-analyses of gamification and game-based learning, which elements matter, and the studies where gamification backfired.',
      children: [
        { slug: 'meta-analyses', title: 'The meta-analyses', blurb: 'Sailer and Homner, Bai et al., Huang et al. and others: average effects, moderators and how to read them, with effect-size maths.', minutes: 13, tags: ['meta-analysis', 'effect size', 'evidence', 'sailer homner', 'moderators'] },
        { slug: 'when-it-backfires', title: 'When gamification backfires', blurb: 'Overjustification, leaderboard anxiety, gaming the system, novelty effects that fade, and inequity, with the studies.', minutes: 12, tags: ['overjustification', 'leaderboard', 'cheating', 'novelty effect', 'negative effects'] },
      ],
    },
    {
      slug: 'design',
      title: 'Designing gamified learning',
      glyph: '✎',
      group: 'Practice',
      blurb: 'A step-by-step design process, progression and XP maths, fair leaderboards and badges, narrative and quests.',
      children: [
        { slug: 'design-process', title: 'A design process for gamified learning', blurb: 'From learning goals to player journeys: goals, learners, activities, mechanics, playtesting and iteration, with a worked unit.', minutes: 14, tags: ['design process', 'player journey', 'playtesting', 'unit design'] },
        { slug: 'progression-maths', title: 'Progression and XP maths', blurb: 'Linear, polynomial and exponential level curves, pacing, reward schedules and expected values, all worked step by step.', minutes: 15, tags: ['xp curve', 'levels', 'progression', 'reward schedule', 'expected value', 'maths'] },
        { slug: 'leaderboards-and-badges', title: 'Leaderboards, badges and points done well', blurb: 'Relative and absolute leaderboards, team boards, personal bests, meaningful badges and points tied to mastery.', minutes: 12, tags: ['leaderboards', 'badges', 'points', 'personal best', 'team competition'] },
        { slug: 'narrative-and-quests', title: 'Narrative, quests and choice', blurb: 'Story frames, quest chains, branching choices and the hero’s journey as a structure for units and projects.', minutes: 11, tags: ['narrative', 'quests', 'story', 'choice', 'hero’s journey'] },
      ],
    },
    {
      slug: 'applications',
      title: 'Applications',
      glyph: '▣',
      group: 'Practice',
      blurb: 'Game-based learning and serious games, classroom tools and platforms, and evaluating a gamified course.',
      children: [
        { slug: 'game-based-learning', title: 'Game-based learning and serious games', blurb: 'Learning through whole games: simulations, Minecraft, Foldit, Dragonbox, escape rooms and board games, with evidence.', minutes: 13, tags: ['game-based learning', 'serious games', 'minecraft', 'escape rooms', 'board games', 'foldit'] },
        { slug: 'classroom-tools', title: 'Tools and classroom routines', blurb: 'Kahoot, Quizizz, Blooket, Classcraft, Duolingo-style streaks, ClassDojo and no-tech games, with when each fits.', minutes: 11, tags: ['kahoot', 'quizizz', 'classcraft', 'classdojo', 'streaks', 'no-tech games'] },
        { slug: 'evaluating', title: 'Evaluating a gamified course', blurb: 'A/B designs, measuring learning versus engagement, effect sizes, retention curves and novelty decay, with worked maths.', minutes: 13, tags: ['evaluation', 'a/b test', 'effect size', 'engagement metrics', 'novelty decay'] },
        { slug: 'case-studies', title: 'Case studies', blurb: 'Eight cases from primary maths quests to university gamified courses and corporate training, good and bad.', minutes: 14, tags: ['case studies', 'examples'] },
      ],
    },
  ],
}
