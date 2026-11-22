import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A set piece is a restart in which the ball is dead and the attacking team has time to arrange its players: corners, free kicks, throw-ins and penalties. Because nothing is moving, they can be rehearsed, and because a defence must stand and wait, they can be attacked. In many leagues around a quarter to a third of goals come from set pieces, which is why clubs now employ specialist set-piece coaches. This guide covers corners (delivery, routines, blocks), free kicks (the wall and the swerve), throw-ins (the long throw and the quick throw) and penalties, with the expected-goals arithmetic of each.',
  nutshell: [
    '**Corners**: only about 3 in 100 lead to a goal on average, but a team takes five or six a match, so they add up to around 0.15 to 0.2 xG per team per game.',
    'Routines use **blockers** who screen defenders, **runners** who arrive late, and **deliveries** (inswinger, outswinger, short corner).',
    '**Free kicks**: direct shots from 20 to 25 metres score a small proportion (typically below one in ten); the **wall** and the **swerve** decide.',
    '**Throw-ins** are now a tactic: long throws into the box (Stoke’s Rory Delap), quick throws and specialist throw-in coaches.',
    '**Penalties** are scored roughly three times in four; the shooter chooses a side, the keeper guesses or reads the run-up.',
  ],
  sections: [
    {
      id: 'corners',
      title: 'Corners',
      lead: 'Delivery, runners and blockers.',
      blocks: [
        {
          t: 'pitch',
          title: 'An inswinging corner with a near-post flick and late runners',
          view: 'attack',
          players: [a(104, 2, 'T'), a(96, 36, 'N'), a(92, 46, 'S'), a(88, 56, 'R'), a(90, 66, 'R'), b(97, 40), b(95, 48), b(92, 54), b(92, 62), b(97, 56), gk(99, 50)],
          arrows: [{ from: [104, 2], to: [94, 38], kind: 'cross', label: 'inswinger' }, { from: [96, 36], to: [98, 50], kind: 'pass', label: 'flick' }, { from: [88, 56], to: [96, 52], kind: 'run' }, { from: [90, 66], to: [95, 60], kind: 'run' }],
          caption: 'The taker delivers toward the near post; the near-post runner flicks the ball across the goal; the late runners attack the space behind. The defence is often outnumbered at the moment of contact.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Inswinger', tag: 'curls toward the goal', body: 'Hard for the goalkeeper to claim; a deflection can go in. Delivered by a right-footer from the left side, or vice versa.' },
            { title: 'Outswinger', tag: 'curls away', body: 'Easier for attackers to attack running toward the ball and heading it at goal.' },
            { title: 'Short corner', tag: 'changes the angle', body: 'A pass to a teammate to create a better angle for a cross or to pull defenders out of position.' },
            { title: 'Blockers and screens', tag: 'legal obstruction', body: 'Attackers stand so that a marker cannot reach the runner; the rules allow standing in a place but not holding.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\mathbb{E}[xG_{\text{corners}}] = N\,\bar{x}`,
          caption: 'Corners add up: the expected goals from corners is the number taken times the average xG per corner.',
          where: [{ sym: 'N', def: 'the number of corners per match' }, { sym: '\\bar{x}', def: 'the average xG per corner (around 0.03 in published analyses; varies by team and league)' }],
          syntax: [{ sym: 'N\\,\\bar{x}', say: 'corners multiplied by the average chance created. Effect: a team that wins 8 corners a game with 0.04 xG per corner expects 0.32 xG from them. Why: small probabilities multiply by the number of chances.' }],
          worked: {
            title: 'A team that takes 6 corners a match at 0.03',
            steps: ['Per match: 6 × 0.03 = 0.18 xG.', 'Over 38 matches: about 6.8 goals from corners.', 'Raising the average to 0.05 through better routines adds 4.6 goals a season, worth perhaps 4 to 5 league points.'],
            answer: 'A small improvement in a routine, repeated across a season, is worth points: this is why set-piece coaching has grown. The number of goals is small, so the evidence of improvement needs many corners.',
          },
        },
      ],
    },
    {
      id: 'fk',
      title: 'Free kicks',
      lead: 'The wall and the swerve.',
      blocks: [
        {
          t: 'pitch',
          title: 'A direct free kick from 22 metres: the wall and the shooter',
          view: 'attack',
          players: [a(83, 40, 'S'), b(94, 38), b(94, 42), b(94, 46), b(94, 50), gk(98, 50), a(92, 34), a(91, 58)],
          arrows: [{ from: [83, 40], to: [105, 55], kind: 'shot' }],
          caption: 'The wall stands 9.15 m from the ball and covers one side of the goal; the keeper covers the other. The shooter bends the ball around the wall toward the far side or over it and dips it under the bar.',
        },
        { t: 'p', text: 'Direct free kicks from shooting range are scored at roughly 5 to 8 per cent in many data sets: much lower than most people believe. The great free-kick takers (Juninho, Beckham, Pirlo, Messi, Mihajlović) are remarkable precisely because the average is so low. The physics of the swerve is explained in the guide to the flight of the ball.' },
      ],
    },
    {
      id: 'throw',
      title: 'Throw-ins and penalties',
      lead: 'Two restarts that are now plans.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The long throw', tag: 'a second corner', body: 'A player who throws the ball 30 metres or more can deliver it into the box like a corner; Stoke City under Tony Pulis used Rory Delap in this way.' },
            { title: 'The quick throw', tag: 'surprise', body: 'Taking the restart before the defence is organised: Alexander-Arnold’s quickly taken corner for Origi’s fourth goal against Barcelona in 2019 is the famous example (see the match guide).' },
            { title: 'Throw-in routines', tag: 'specialist coaches', body: 'Clubs have appointed throw-in coaches: Liverpool hired Thomas Grønnemark in 2018.' },
            { title: 'Penalties', tag: 'a duel of nerves', body: 'Around three in four are scored; the keeper’s best chance is to read the run-up or to pick a side before the kick; the shooter’s is to pick a corner and strike it hard.' },
          ],
        },
        { t: 'dodont', do: ['Rehearse routines and assign roles', 'Vary the delivery so the defence cannot predict', 'Have a plan for the second ball and the counter'], dont: ['Send many players forward for corners without a rest defence', 'Rely on one routine all season', 'Ignore defensive set-piece organisation'] },
      ],
    },
  ],
  sources: [
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
    'Statsbomb and Opta analyses of corners, free kicks and set-piece conversion (statsbomb.com; theanalyst.com).',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'IFAB. *Laws of the Game*, Laws 13 to 17 (free kicks, penalty kick, throw-in, goal kick, corner kick) (theifab.com).',
  ],
  related: ['sports/football/tactics/marking-systems', 'sports/football/tactics/ball-flight-and-swerve', 'sports/football/schools/modern-trends-2020s'],
}

export default guide
