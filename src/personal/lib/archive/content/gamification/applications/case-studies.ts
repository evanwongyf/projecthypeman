import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Eight composite cases, from primary classrooms to universities and workplaces, showing gamification that worked and gamification that backfired. Names and details are invented; the patterns come from research and practice.',
  nutshell: [
    'Successes tie game elements to **mastery**, keep competition **collective or personal**, and keep the **learning at the centre**.',
    'Failures reward **activity**, rank individuals **publicly**, or let the game **eclipse the content**.',
  ],
  sections: [
    {
      id: 'cases',
      title: 'Cases',
      blocks: [
        { t: 'example', title: '1. Primary 4 times-tables quest (worked)', lines: [
          { label: 'Design', text: 'A “Dragon Tamer” map: each times table is a dragon to tame through short daily practice; class progress bar towards a shared reward.' },
          { label: 'Result', text: 'Daily practice rose; 85% mastered all tables by mid-year, up from about 60% the previous year with a similar cohort.' },
          { label: 'Why', text: 'Mastery-based progress, spaced daily practice, no individual ranking.' },
        ] },
        { t: 'example', title: '2. University course with a public leaderboard (backfired)', lines: [
          { label: 'Design', text: 'All-time leaderboard of points for quizzes, forum posts and attendance.' },
          { label: 'Result', text: 'Top five students engaged heavily; most others disengaged after week 3; forum filled with low-quality posts for points.' },
          { label: 'Fix', text: 'Team boards, points only for quiz mastery and peer-rated posts, weekly resets.' },
        ] },
        { t: 'example', title: '3. Secondary 3 chemistry escape room (worked)', lines: [
          { label: 'Design', text: 'Four locks opened by balancing equations, mole calculations and identifying reactions; teams of four.' },
          { label: 'Result', text: 'High engagement; the debrief revealed misconceptions about limiting reagents that the teacher then retaught.' },
          { label: 'Why', text: 'Puzzles required the content; the debrief turned play into learning.' },
        ] },
        { t: 'example', title: '4. Reading points for books (mixed)', lines: [
          { label: 'Design', text: 'Points and prizes for each book read and quizzed.' },
          { label: 'Result', text: 'Reading volume rose, but students chose short, easy books; keen readers reported reading “for points”.' },
          { label: 'Fix', text: 'Recognition for reading variety and reflections; book clubs; points phased out after the first term.' },
        ] },
        { t: 'example', title: '5. Language app streaks (mixed)', lines: [
          { label: 'Design', text: 'A class challenge to maintain 30-day streaks on a language app.' },
          { label: 'Result', text: 'Many kept streaks with minimal one-minute sessions; some quit entirely after breaking a streak.' },
          { label: 'Fix', text: 'Count total minutes and new words reviewed; allow streak freezes; celebrate returning after a break.' },
        ] },
        { t: 'example', title: '6. Corporate compliance training badges (backfired)', lines: [
          { label: 'Design', text: 'Badges for completing modules quickly.' },
          { label: 'Result', text: 'Staff clicked through as fast as possible; scenario test scores did not improve.' },
          { label: 'Fix', text: 'Branching scenarios where choices matter; badges only for passing scenario assessments.' },
        ] },
        { t: 'example', title: '7. Classcraft-style teams in lower secondary (worked, with care)', lines: [
          { label: 'Design', text: 'Mixed teams with roles; team members gain or lose points together; powers like “ask the teacher one hint”.' },
          { label: 'Result', text: 'Improved routines and peer support; one team ostracised a member who cost them points.' },
          { label: 'Fix', text: 'Removed point losses for individual behaviour; added team rewards for helping.' },
        ] },
        { t: 'example', title: '8. Maths mastery platform with XP (worked)', lines: [
          { label: 'Design', text: 'XP only for first-attempt correct answers and for returning to review after a week; levels mapped to curriculum strands.' },
          { label: 'Result', text: 'Spaced practice increased; end-of-year test results improved modestly compared with the previous cohort.' },
          { label: 'Why', text: 'Game mechanics rewarded known effective learning behaviours.' },
        ] },
      ],
    },
  ],
  related: ['gamification/evidence/when-it-backfires', 'gamification/design/design-process', 'gamification/applications/evaluating'],
}

export default guide
