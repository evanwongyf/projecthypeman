import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Television follows the ball, but tactics happen elsewhere. The best way to see a coach’s plan is to look at the players who do not have the ball: how far apart the lines are, who moves when a defender steps out, which player the opponent leaves unmarked. This guide offers a checklist for watching a match with a tactical eye: shapes with and without the ball, distances between lines, pressing triggers, how teams change when the score changes, and what a substitution tells you.',
  nutshell: [
    'Watch **shapes without the ball**: lines and distances between them, and who steps out to press.',
    'Look for **pressing triggers** such as a pass to the full-back, a back-pass, a poor first touch.',
    'Notice **who is free**: the unmarked player shows which way the opponent has chosen to defend.',
    'Read **substitutions** as signals: a change of shape, of tempo or of risk.',
    'Judge **where the ball is won and lost** more than the amount of possession.',
  ],
  sections: [
    {
      id: 'look',
      title: 'What to look at',
      lead: 'Five habits.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Take one frame without the ball', body: 'Pause or watch the wide shot: count players in each line and note the shape. Is it a 4-4-2 out of possession and a 3-2-5 in it?' },
            { title: 'Measure the distances', body: 'In a compact team, the distance from the back line to the front line is about 30 to 35 metres. If the gap grows, there is space between the lines.' },
            { title: 'Find the free player', body: 'The player who is left alone repeatedly shows what the opponent is giving up (a full-back, a pivot, the goalkeeper).' },
            { title: 'Look at the press', body: 'Who starts it, which passes are blocked, and what happens when the first line is bypassed?' },
            { title: 'Watch the reaction to the score', body: 'A team leading drops its line; a team behind sends full-backs forward, which opens space for counters.' },
          ],
        },
        {
          t: 'pitch',
          title: 'A pressing trigger: the back-pass',
          view: 'full',
          players: [gk(8, 50), b(22, 38, 'CB'), b(22, 62, 'CB'), a(34, 38, 'F'), a(34, 62, 'F'), a(40, 50, '10'), ball(22, 62)],
          arrows: [{ from: [34, 62], to: [24, 62], kind: 'press' }, { from: [40, 50], to: [30, 40], kind: 'press' }, { from: [34, 38], to: [26, 46], kind: 'press' }],
          caption: 'When the centre-back receives a pass facing his own goal, the striker presses and his teammates cut the passing lanes to the other centre-back and the goalkeeper.',
        },
      ],
    },
    {
      id: 'signals',
      title: 'Reading the game’s signals',
      lead: 'Substitutions, fouls and tempo.',
      blocks: [
        {
          t: 'table',
          head: ['Signal', 'What it can mean'],
          rows: [
            ['A defensive midfielder replaces a winger', 'Protect a lead; add a body in the middle; change to a back five'],
            ['A striker replaces a midfielder', 'Add risk, play with two strikers or push the block higher'],
            ['The full-backs stay high', 'The team is committed to attack; watch for counters into the vacated flanks'],
            ['A tactical foul after losing the ball', 'The coach is protecting against a counter by stopping it early (and accepting a card)'],
            ['The goalkeeper takes longer over goal kicks', 'Waiting for the team to take up its build-up shape, or wasting time with a lead'],
            ['Both teams stop pressing', 'Fatigue or an agreement of mutual caution; the game state is often the reason'],
          ],
        },
        {
          t: 'dodont',
          do: ['Compare the shape in the first ten minutes with the last ten', 'Look at where fouls are committed: they show where a team is being stretched', 'Take notes on goals: which phase created them (set piece, transition, build-up)'],
          dont: ['Judge a team by possession percentage alone', 'Assume the formation on the team sheet is how the team plays', 'Blame one player for a collapse that started with a poor press'],
        },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
    'UEFA Technical Reports: tactical analysis of Champions League and EURO tournaments (uefa.com).',
  ],
  related: ['sports/football/tactics/pressing-and-gegenpressing', 'sports/football/game/phases-of-play', 'sports/football/xg/using-stats-wisely'],
}

export default guide
