import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Basketball is a game of space and angles: five players a side, one hoop to attack, and a clock that never lets the ball stand still. This page is the map of the shelf: how the game works, the court and its lines, and which science pages elsewhere in Sports explain a shot, a screen and the three-point revolution.',
  nutshell: [
    'Five a side; a basket is worth 1 (free throw), 2 or 3 points (from beyond the three-point line). The hoop is 3.05 m (10 ft) above the floor.',
    'An NBA game is four 12-minute quarters; FIBA (international) games are four 10-minute quarters. The shot clock is 24 seconds.',
    'The court is about 28 × 15 m (NBA 94 × 50 ft; FIBA 28 × 15 m). The three-point line is 7.24 m from the basket at the top in the NBA, 6.75 m in FIBA.',
    'A shot is a projectile with backspin: a higher arc gives a bigger target to drop through, which is why good shooters use more arc than you would expect.',
    'This shelf is being built: the pages below are planned. The science of the game is already on the Sports shelf and is linked here.',
  ],
  sections: [
    {
      id: 'game',
      title: 'How the game works',
      blocks: [
        {
          t: 'table',
          head: ['Element', 'NBA', 'FIBA (international)'],
          rows: [
            ['Court', '94 × 50 ft (28.65 × 15.24 m)', '28 × 15 m'],
            ['Three-point line', '23 ft 9 in (7.24 m) at the top, 22 ft (6.71 m) in the corners', '6.75 m'],
            ['Free-throw line', '15 ft (4.57 m) from the backboard plane', '4.60 m'],
            ['Game length', 'Four 12-minute quarters', 'Four 10-minute quarters'],
            ['Shot clock', '24 seconds (14 after an offensive rebound)', '24 seconds (14 after an offensive rebound)'],
            ['Ball', 'Size 7: about 75 cm round, about 620 g', 'Size 7 (men), size 6 (women)'],
          ],
          caption: 'Measurements are the standard ones and are rounded; the lines are laid out slightly differently in the two rule sets.',
        },
        {
          t: 'list',
          items: [
            '**Moving with the ball.** A player must dribble to move: taking too many steps without dribbling is *travelling*, and dribbling, stopping and starting again is a *double dribble*.',
            '**The clock.** The shot clock forces a shot attempt every 24 seconds; a team must also get the ball across halfway within eight seconds.',
            '**Fouls.** Contact that disadvantages a player gives free throws (if in the act of shooting, or once the team is over the foul limit) or the ball. A player is out after six fouls in the NBA (five in FIBA).',
          ],
        },
      ],
    },
    {
      id: 'positions',
      title: 'The five positions',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Point guard', tag: 'position 1', body: 'The ball-handler and organiser who starts the offence and finds open teammates.' },
            { title: 'Shooting guard and small forward', tag: 'positions 2 and 3', body: 'The wing players: scorers who shoot from range, attack the rim and defend the perimeter.' },
            { title: 'Power forward and centre', tag: 'positions 4 and 5', body: 'The big players: rebounders and rim protectors who score close to the basket, increasingly with shooting range too.' },
          ],
        },
        { t: 'p', text: 'The positions are loose labels. Modern teams value *positionless* players who can handle, pass and shoot whatever their size, and they care more about the five players\' combined skills, the **spacing**, than their numbers.' },
      ],
    },
    {
      id: 'science',
      title: 'The science of basketball, already on the shelf',
      blocks: [
        { t: 'p', text: 'A jump shot is a projectile. Change the launch angle and the speed below: the best angle for the longest range is 45° on level ground, but a shooter releases from above the hoop and needs the ball to drop through the rim, which favours a steeper entry.' },
        { t: 'sports-viz', viz: 'projectile' },
        {
          t: 'links',
          items: [
            { path: 'sports/physics/projectile-motion', note: 'Arc, release angle and range.' },
            { path: 'sports/physics/spin-rotation', note: 'Backspin and why it softens a shot.' },
            { path: 'sports/physics/collisions-energy', note: 'Why a ball bounces and a rim is forgiving.' },
            { path: 'sports/physiology/reaction-time', note: 'The split second behind every steal and block.' },
            { path: 'sports/physiology/strength-power-curve', note: 'Jumping and the force-velocity curve.' },
            { path: 'sports/analytics/sabermetrics-moneyball', note: 'The data revolution that came to basketball too.' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The three-point revolution',
          text: 'The NBA introduced the three-point line in 1979, and for decades teams barely used it: fewer than three attempts per team per game in 1980. Analytics showed that a 35% three-pointer is worth more points per shot (1.05) than a 50% two-pointer (1.00), and teams now take more than thirty a game. The shape of the sport, with its spacing and its floor-stretching big men, follows from one line of arithmetic.',
        },
      ],
    },
  ],
  sources: ['National Basketball Association. *Official Rules of the NBA* (current season).', 'FIBA. *Official Basketball Rules* (current edition).'],
  related: ['sports/start-here', 'sports/physics/projectile-motion', 'sports/analytics/sabermetrics-moneyball', 'sports/football/start-here'],
}

export default guide
