import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Many gamified tools are free and quick to use. Each has a typical strength and a typical trap. This guide matches tools and no-tech routines to purposes, so you can choose deliberately.',
  nutshell: [
    '**Live quiz games** (Kahoot, Quizizz, Blooket) are best for low-stakes retrieval practice with discussion of wrong answers.',
    '**Classroom behaviour games** (Classcraft, ClassDojo) can structure routines but risk public points for compliance.',
    '**Streak-based apps** (Duolingo-style) build habits; protect against streak anxiety.',
    '**No-tech games** (quiz bowls, team challenges, bingo, escape boxes) need no devices and work well.',
  ],
  sections: [
    {
      id: 'tools',
      title: 'Tools compared',
      blocks: [
        { t: 'table', head: ['Tool type', 'Examples', 'Best for', 'Watch for'], rows: [
          ['Live quiz games', 'Kahoot, Quizizz, Blooket, Gimkit', 'Retrieval practice, checking understanding, energising', 'Speed scoring; the same students always win; little time for thinking'],
          ['Self-paced quiz modes', 'Quizizz homework mode, Blooket solo', 'Spaced practice outside class', 'Random-reward modes that dominate attention'],
          ['Classroom management games', 'Classcraft, ClassDojo', 'Team routines, positive recognition', 'Public points for behaviour; shaming'],
          ['Language and habit apps', 'Duolingo, Memrise', 'Daily practice, vocabulary', 'Streak anxiety; shallow practice'],
          ['Mastery platforms with XP', 'Khan Academy, adaptive maths platforms', 'Skill practice with progress tracking', 'Points for easy repetition'],
          ['Sandbox and coding', 'Minecraft Education, Scratch, Roblox Studio', 'Creative projects, coding', 'Needs structured goals'],
        ] },
        { t: 'p', text: 'A systematic review of Kahoot studies (Wang and Tahir, 2020) found generally positive effects on learning performance, classroom dynamics and attitudes, alongside complaints about time pressure and anxiety about being shown as wrong. Using “accuracy only” modes and discussing the hardest question after each round addresses both.' },
      ],
    },
    {
      id: 'no-tech',
      title: 'No-tech routines',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Team quiz bowl', body: 'Teams write answers on mini-whiteboards; every team scores every question; discuss the most-missed.' },
          { title: 'Escape box', body: 'A locked box opened by codes from solving content puzzles; groups compete against the clock, not each other.' },
          { title: 'Class XP chart', body: 'A whole-class progress bar towards a shared reward for collective mastery (e.g. 90% passing a quiz).' },
          { title: 'Review bingo', body: 'Answers on bingo cards; questions read aloud; everyone works every question.' },
          { title: 'Snakes and ladders review', body: 'Correct answers let teams roll; questions get harder up the board.' },
          { title: 'Boss battle', body: 'The class works together to defeat a “boss” by answering a chain of hard questions before the timer runs out.' },
        ] },
      ],
    },
  ],
  sources: [
    'Wang, A. I., & Tahir, R. (2020). The effect of using Kahoot! for learning: A literature review. Computers & Education, 149, 103818.',
    'Licorish, S. A. et al. (2018). Students’ perception of Kahoot!’s influence on teaching and learning. Research and Practice in Technology Enhanced Learning, 13, 9.',
  ],
  related: ['gamification/design/leaderboards-and-badges', 'e-pedagogy/applications/tools', 'teaching/techniques/questioning/starters-plenaries'],
}

export default guide
