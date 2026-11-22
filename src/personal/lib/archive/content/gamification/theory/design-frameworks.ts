import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game designers have frameworks for thinking about why a game feels the way it does. Several are useful for designing gamified learning: MDA links rules to experience, Octalysis lists the drives a design can tap, and player-type models remind us that different people are motivated by different things.',
  nutshell: [
    '**MDA** (Hunicke, LeBlanc and Zubek, 2004): designers create **mechanics**, which produce **dynamics** in play, which create **aesthetics** (emotional experiences).',
    '**Octalysis** (Chou, 2015): eight core drives, split into “white hat” (meaning, accomplishment, creativity) and “black hat” (scarcity, unpredictability, loss avoidance).',
    '**Bartle’s player types** (1996): achievers, explorers, socialisers, killers.',
    '**Hexad** (Marczewski, 2015): philanthropists, socialisers, free spirits, achievers, disruptors, players; with a validated questionnaire (Tondello et al., 2016).',
  ],
  sections: [
    {
      id: 'mda',
      title: 'MDA: mechanics, dynamics, aesthetics',
      blocks: [
        { t: 'flow', nodes: [
          { label: 'Mechanics', sub: 'rules, points, timers, choices', tone: 'process' },
          { label: 'Dynamics', sub: 'how players behave with them', tone: 'model' },
          { label: 'Aesthetics', sub: 'the feelings: challenge, fellowship, discovery', tone: 'output' },
        ] },
        { t: 'example', title: 'MDA for a timed vocabulary quiz', lines: [
          { label: 'Mechanic', text: '10 seconds per question; points for speed.' },
          { label: 'Dynamic', text: 'Students guess fast instead of thinking; slower readers give up.' },
          { label: 'Aesthetic', text: 'Excitement for the fast, anxiety for the slow.' },
          { label: 'Redesign', text: 'No speed points; points for accuracy; a second chance on missed items. Dynamic becomes careful recall; aesthetic becomes challenge and accomplishment.' },
        ] },
      ],
    },
    {
      id: 'octalysis',
      title: 'Octalysis: eight core drives',
      blocks: [
        { t: 'table', head: ['Drive', 'Example mechanics', 'Learning use', 'Risk'], rows: [
          ['1. Epic meaning and calling', 'A story where learners matter', 'Project for a real audience', 'Contrived stories'],
          ['2. Development and accomplishment', 'Progress bars, levels, badges', 'Mastery paths', 'Badge inflation'],
          ['3. Empowerment of creativity and feedback', 'Sandbox, choices, combos', 'Open-ended tasks, design challenges', 'Too little structure'],
          ['4. Ownership and possession', 'Collections, avatars, virtual goods', 'Portfolios, personal word banks', 'Hoarding without learning'],
          ['5. Social influence and relatedness', 'Teams, mentoring, comparison', 'Team quests, peer feedback', 'Shaming comparison'],
          ['6. Scarcity and impatience', 'Limited-time items, cooldowns', 'Weekly challenges', 'Stress; exclusion'],
          ['7. Unpredictability and curiosity', 'Random rewards, mystery boxes', 'Mystery problems, surprise twists', 'Gambling-like loops'],
          ['8. Loss and avoidance', 'Streaks, losing progress', 'Streaks for daily practice', 'Anxiety; giving up after a broken streak'],
        ] },
        { t: 'callout', tone: 'tip', title: 'White hat first', text: 'Drives 1–3 (top of the octagon) feel good and sustain motivation; drives 6–8 create urgency but feel bad over time. Educational designs should lean on the white-hat drives and use black-hat ones sparingly.' },
      ],
    },
    {
      id: 'types',
      title: 'Player and user types',
      blocks: [
        { t: 'table', head: ['Hexad type', 'Motivated by', 'Design for them with'], rows: [
          ['Achiever', 'Competence, mastery', 'Levels, challenges, certificates'],
          ['Free spirit', 'Autonomy, exploration', 'Choice, side quests, unlockable content'],
          ['Socialiser', 'Relatedness', 'Teams, discussion, co-operation'],
          ['Philanthropist', 'Purpose, helping', 'Peer tutoring, contributing to a shared resource'],
          ['Player', 'Rewards', 'Points, badges, prizes (use sparingly)'],
          ['Disruptor', 'Change, testing limits', 'Let them suggest rules, find loopholes, design challenges'],
        ] },
        { t: 'callout', tone: 'note', title: 'Use as a reminder, not a label', text: 'Player types describe tendencies, not fixed categories. Their practical lesson is variety: a design that only rewards achievers (rankings, points) leaves most learners unmoved.' },
      ],
    },
  ],
  sources: [
    'Hunicke, R., LeBlanc, M., & Zubek, R. (2004). MDA: A formal approach to game design and game research. AAAI Workshop on Challenges in Game AI.',
    'Chou, Y. (2015). Actionable Gamification: Beyond Points, Badges, and Leaderboards. Octalysis Media.',
    'Bartle, R. (1996). Hearts, clubs, diamonds, spades: Players who suit MUDs. Journal of MUD Research, 1(1).',
    'Tondello, G. F. et al. (2016). The gamification user types Hexad scale. CHI PLAY ’16.',
  ],
  related: ['gamification/theory/game-elements', 'gamification/design/design-process', 'personality/start-here'],
}

export default guide
