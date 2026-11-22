import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Gamification is “the use of game design elements in non-game contexts” (Deterding et al., 2011): points, badges, levels, quests, stories and leaderboards added to lessons, homework or courses. It is related to, but different from, game-based learning (learning by playing a whole game) and serious games (games designed mainly to teach). Done well, it can make practice more engaging and progress more visible. Done badly, it adds noise, rewards the wrong things and can kill interest.',
  nutshell: [
    'Meta-analyses find **small-to-moderate positive average effects** on learning (around g = 0.4–0.5), with large variation between studies.',
    'What works is the **design**: feedback, clear goals, visible progress, meaningful choice and social connection, tied to learning.',
    'What fails is **points for compliance**, public rankings that shame, and rewards that replace interest.',
    'Novelty fades: effects often shrink over weeks unless the game elements serve real learning.',
  ],
  sections: [
    {
      id: 'terms',
      title: 'Three related ideas',
      blocks: [
        { t: 'table', head: ['Term', 'What it is', 'Example'], rows: [
          ['Gamification', 'Game elements added to a non-game activity', 'XP for homework; badges for mastery; a class quest map'],
          ['Game-based learning', 'Learning by playing a game (made for fun or for learning)', 'Playing a trading game to learn economics'],
          ['Serious game', 'A full game designed with learning (or another goal) as its main purpose', 'A flight simulator; DragonBox Algebra; Foldit'],
          ['Playful learning', 'Play-like activities without formal game structure', 'Role-play, building challenges, puzzles'],
        ] },
      ],
    },
    {
      id: 'map',
      title: 'What is on this shelf',
      blocks: [
        { t: 'mindmap', center: 'Gamification', branches: [
          { label: 'Theory', tone: 'teal', items: ['Why games motivate', 'MDA, Octalysis, Hexad', 'Game elements'] },
          { label: 'Evidence', tone: 'orange', items: ['Meta-analyses', 'When it backfires'] },
          { label: 'Design', tone: 'mint', items: ['Design process', 'XP and progression maths', 'Leaderboards and badges', 'Narrative and quests'] },
          { label: 'Applications', tone: 'lavender', items: ['Game-based learning', 'Tools', 'Evaluating', 'Case studies'] },
        ] },
        { t: 'cards', cols: 2, items: [
          { title: 'Lesson 1: start from learning goals', body: 'Decide what learners must practise, then ask which game mechanics make that practice more frequent, more focused or more social.' },
          { title: 'Lesson 2: reward mastery, not activity', body: 'Points for logging in or clicking teach logging in and clicking.' },
          { title: 'Lesson 3: feedback is the core', body: 'Most of a game’s power is immediate, clear feedback on progress. That is also one of the most powerful things in teaching.' },
          { title: 'Lesson 4: handle competition carefully', body: 'Public leaderboards motivate the top few and can discourage everyone else. Use personal bests and team goals.' },
          { title: 'Lesson 5: test it', body: 'Compare with a non-gamified version, measure learning (not just engagement), and watch for novelty fading.' },
        ] },
      ],
    },
  ],
  sources: [
    'Deterding, S., Dixon, D., Khaled, R., & Nacke, L. (2011). From game design elements to gamefulness: Defining “gamification”. MindTrek ’11.',
    'Landers, R. N. (2014). Developing a theory of gamified learning. Simulation & Gaming, 45(6), 752–768.',
  ],
  related: ['e-pedagogy/brain/rewards-and-habits', 'teaching/techniques/active-learning/games', 'teaching/motivation/rewards-and-overjustification'],
}

export default guide
