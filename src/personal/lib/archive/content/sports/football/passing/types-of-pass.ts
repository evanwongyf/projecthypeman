import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A pass is not just "short" or "long". Each type solves a different problem: a driven pass beats a press, a through ball splits a defence, a switch changes the side of attack, a cutback finds a runner. Each has a typical speed, flight time and risk, and each needs a different technique and a different supporting run. This guide lists the main types with a diagram for each, shows how long a lofted pass takes to arrive and why it matters, and gives a table of when a team should choose which.',
  nutshell: [
    '**Short and ground passes** keep the ball and build; **driven passes** are hit hard and low to beat pressure.',
    '**Through balls** split the defence and need a runner timed to the moment of the pass.',
    '**Lofted passes** and **switches** go over the defence or across the pitch; they take more than two seconds to arrive, so the receiver needs space.',
    '**Cutbacks** go backwards from the byline and have some of the highest xG per pass.',
    'The choice is between **risk and reward**: a pass that breaks lines also loses the ball more often.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The main types, with a diagram for each',
      lead: 'Six passes.',
      blocks: [
        {
          t: 'pitch',
          title: 'Through ball, switch and cutback in one attack',
          view: 'attack',
          players: [a(66, 40, '10'), a(78, 12, 'W'), a(92, 6, 'W'), a(82, 56, '9'), b(72, 30), b(72, 50), b(76, 66), gk(97, 50), a(80, 88, 'W')],
          arrows: [{ from: [66, 40], to: [82, 52], kind: 'pass', label: 'through' }, { from: [66, 40], to: [78, 88], kind: 'cross', label: 'switch' }, { from: [92, 6], to: [88, 36], kind: 'pass', label: 'cutback' }],
          caption: 'A through ball into the space behind the defence, a switch to the opposite winger and a cutback from the byline.',
        },
        {
          t: 'table',
          head: ['Pass', 'Description', 'Speed and time', 'When to use it'],
          rows: [
            ['Short ground pass', 'Played along the ground to a nearby teammate', '10–15 m/s, under a second', 'Building and keeping the ball'],
            ['Driven pass', 'Hit hard and low, often through a gap', '20–25 m/s', 'To beat a press or reach a player facing forward'],
            ['Through ball', 'Played into space behind the defence for a runner', '15–20 m/s; the run starts as the pass is played', 'Splitting a back line'],
            ['Lofted pass', 'Played in the air over opponents', 'About 2.5 to 3 s for 40 m', 'To bypass a press or reach a winger in space'],
            ['Switch of play', 'A long pass across the pitch to the opposite flank', 'Flight 2 to 3 s', 'After overloading one side'],
            ['Cutback', 'A pass backwards from the byline into the box', '10–15 m/s', 'To find a player arriving at the edge of the six-yard box'],
            ['One-touch wall pass', 'A first-time pass returned to the passer', 'Under a second', 'To beat a marker in a tight space'],
          ],
        },
      ],
    },
    {
      id: 'loft',
      title: 'The time a lofted pass takes',
      lead: 'Why the receiver needs space.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R=\frac{v^2\sin 2\theta}{g},\qquad T=\frac{2v\sin\theta}{g}`,
          caption: 'Range and flight time of a ball launched at speed v and angle θ, ignoring drag.',
          where: [{ sym: 'R', def: 'the range (m)' }, { sym: 'T', def: 'the flight time (s)' }, { sym: '\\theta', def: 'launch angle' }, { sym: 'g', def: '9.81 m/s²' }],
          syntax: [{ sym: '\\sin 2\\theta', say: 'maximal at 45°. Effect: a 45° pass goes farthest for a given speed. Why: the angle balances the horizontal and vertical velocity.' }],
          worked: {
            title: 'A 40-metre lofted pass at 45°',
            steps: ['To reach 40 m: v = √(R g/sin 2θ) = √(40 × 9.81) = 19.8 m/s.', 'Flight time T = 2 × 19.8 × 0.707/9.81 = 2.86 s.', 'In that time a sprinter at 8 m/s runs 23 m, and a defender can reposition.'],
            answer: 'A long pass is slow: the defence has nearly three seconds to react. Lofted passes work when the receiver has a clear space, or when the run starts before the pass so that the defender is already beaten.',
          },
        },
        {
          t: 'dodont',
          do: ['Choose the pass by the space the receiver has, not by the distance', 'Hit through balls with pace and a delay that matches the run', 'Use a switch only after drawing the defence over'],
          dont: ['Play a lofted pass into a crowded area without a plan for the second ball', 'Hit a through ball before the runner has started', 'Play a risky pass in your own half when a safe one is available'],
        },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Goff, J. E. (2013). *Gold Medal Physics*. Johns Hopkins University Press (projectile motion).',
    'Spielverlagerung.com: passing types and effect on the game (spielverlagerung.com).',
  ],
  related: ['sports/football/passing/passing-geometry', 'sports/football/passing/combinations-and-third-man', 'sports/physics/projectile-motion'],
}

export default guide
