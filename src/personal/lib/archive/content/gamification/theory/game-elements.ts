import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Game elements are the building blocks of gamification. Each has a psychological job. Choosing elements by their job, rather than by habit (“add badges”), is what separates thoughtful gamification from decoration.',
  nutshell: [
    '**Points** give quick feedback; **levels** show long-term progress; **badges** mark achievements; **leaderboards** add comparison.',
    '**Quests**, **narrative** and **avatars** add meaning and identity; **teams** add relatedness; **timers** and **streaks** add urgency.',
    'Sailer et al. (2017) found different elements satisfy different needs: badges, leaderboards and performance graphs supported competence; avatars, story and teammates supported relatedness.',
  ],
  sections: [
    {
      id: 'toolbox',
      title: 'The toolbox',
      blocks: [
        { t: 'table', head: ['Element', 'Psychological job', 'Good learning use', 'Common misuse'], rows: [
          ['Points / XP', 'Immediate feedback; currency of progress', 'XP for completed practice and mastered skills', 'Points for attendance or clicking'],
          ['Levels', 'Long-term progress and competence', 'Levels mapped to curriculum milestones', 'Levels that mean nothing about skill'],
          ['Badges', 'Recognition of specific achievements', 'Badges for skills, creativity, helping others', 'Dozens of trivial badges'],
          ['Leaderboards', 'Social comparison', 'Team boards, personal bests, weekly resets', 'All-time public ranking of individuals'],
          ['Progress bars', 'Goal gradient: effort rises near a goal', 'Unit progress, skill tree completion', 'Bars that never seem to move'],
          ['Quests / missions', 'Structure and purpose', 'Units framed as quests with clear objectives', 'Busywork renamed “quest”'],
          ['Narrative', 'Meaning, curiosity, emotion', 'A story frame linking tasks', 'Story unrelated to content'],
          ['Avatars', 'Identity, ownership', 'Avatars that grow with skills', 'Time spent customising instead of learning'],
          ['Teams', 'Relatedness, co-operation', 'Team quests requiring everyone', 'Free riders; exclusion'],
          ['Unlocks', 'Curiosity, sequencing', 'Unlock advanced tasks after mastery', 'Locking students out of help'],
          ['Timers', 'Urgency, focus', 'Short timed retrieval rounds', 'Speed over thinking; anxiety'],
          ['Streaks', 'Habit formation', 'Daily practice streaks with “freeze” days', 'Shame when streaks break'],
          ['Random rewards', 'Curiosity, anticipation', 'Mystery bonus problems', 'Gambling-like loops'],
        ] },
      ],
    },
    {
      id: 'goal-gradient',
      title: 'The goal-gradient effect',
      blocks: [
        { t: 'p', text: 'People speed up as they approach a goal. In Kivetz, Urminsky and Zheng’s 2006 coffee-card study, customers bought coffee more frequently the closer they got to a free drink, and a 12-stamp card with 2 stamps already filled was completed faster than a 10-stamp card with none, though both needed 10 purchases. Progress bars that show how close learners are, and that start with some progress already credited, use this effect.' },
      ],
    },
  ],
  sources: [
    'Sailer, M., Hense, J. U., Mayr, S. K., & Mandl, H. (2017). How gamification motivates: An experimental study of the effects of specific game design elements on psychological need satisfaction. Computers in Human Behavior, 69, 371–380.',
    'Kivetz, R., Urminsky, O., & Zheng, Y. (2006). The goal-gradient hypothesis resurrected. Journal of Marketing Research, 43(1), 39–58.',
    'Werbach, K., & Hunter, D. (2012). For the Win. Wharton Digital Press.',
  ],
  related: ['gamification/design/leaderboards-and-badges', 'gamification/design/narrative-and-quests', 'gamification/design/progression-maths'],
}

export default guide
