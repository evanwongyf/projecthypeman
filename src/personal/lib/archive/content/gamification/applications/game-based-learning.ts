import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game-based learning uses whole games, not just game elements. A well-chosen game can let learners experiment with systems (economies, ecosystems, physics), practise skills with instant feedback, or collaborate on complex problems. The evidence is positive on average, especially when games are paired with teacher-led discussion.',
  nutshell: [
    'Digital games beat non-game instruction on average (about g = 0.33; Clark et al., 2016).',
    'Wouters et al. (2013): serious games improved learning and retention, but were **not more motivating** than conventional instruction on average.',
    'Games work better with **instructional support**: explanations, reflection and debriefing (Wouters and van Oostendorp, 2013).',
    'Analogue games (board games, escape rooms, role-play) count too, and are cheap.',
  ],
  sections: [
    {
      id: 'examples',
      title: 'Examples',
      blocks: [
        { t: 'table', head: ['Game', 'Type', 'What it teaches', 'Notes'], rows: [
          ['Minecraft Education', 'Sandbox', 'Geometry, coding, history recreations, collaboration', 'Needs clear tasks; open worlds can drift'],
          ['DragonBox Algebra', 'Puzzle', 'Algebraic manipulation through card puzzles', 'Strong engagement; transfer to symbolic algebra needs teacher bridging'],
          ['Foldit', 'Citizen science puzzle', 'Protein folding', 'Players helped solve a retroviral protease structure (Khatib et al., 2011)'],
          ['PhET simulations', 'Simulation', 'Physics, chemistry, maths', 'Game-like exploration with guided questions'],
          ['Civilization / city builders', 'Strategy', 'Systems thinking, history, economics', 'Discuss what the game simplifies or gets wrong'],
          ['Escape rooms', 'Puzzle (analogue or digital)', 'Any content as locked puzzles', 'Strong engagement; design puzzles that need the content'],
          ['Board games (e.g. Pandemic, Catan)', 'Analogue', 'Co-operation, probability, trading', 'Cheap, social, rich for debriefing'],
          ['Role-play simulations', 'Analogue', 'Model UN, mock trials, negotiations', 'See simulation-based learning'],
        ] },
      ],
    },
    {
      id: 'using',
      title: 'Using a game in class',
      blocks: [
        { t: 'steps', items: [
          { title: 'Choose for the goal', body: 'What should learners understand or practise? Does the game’s core loop require that?' },
          { title: 'Brief', body: 'Explain the goal of play and what to notice. Give a question to investigate.' },
          { title: 'Play', body: 'Time-boxed, with roles or pairs; the teacher circulates and asks questions.' },
          { title: 'Debrief', body: 'What happened? What strategies worked? How does this connect to the real concept? What does the game get wrong?' },
          { title: 'Bridge', body: 'Make the formal concept explicit and practise it outside the game.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'The debrief is the lesson', text: 'Games build experience and intuition; explicit teaching and debriefing turn them into transferable knowledge. Without it, learners may get good at the game and no better at the subject.' },
      ],
    },
  ],
  sources: [
    'Clark, D. B., Tanner-Smith, E. E., & Killingsworth, S. S. (2016). Digital games, design, and learning. Review of Educational Research, 86(1), 79–122.',
    'Wouters, P. et al. (2013). A meta-analysis of the cognitive and motivational effects of serious games. Journal of Educational Psychology, 105(2), 249–265.',
    'Wouters, P., & van Oostendorp, H. (2013). A meta-analytic review of the role of instructional support in game-based learning. Computers & Education, 60(1), 412–425.',
    'Khatib, F. et al. (2011). Crystal structure of a monomeric retroviral protease solved by protein folding game players. Nature Structural & Molecular Biology, 18, 1175–1177.',
  ],
  related: ['e-pedagogy/simulation/why-simulation', 'facilitation/debriefing/debrief-models', 'gamification/applications/classroom-tools'],
}

export default guide
