import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Crossing is the most traditional way to create a chance: get the ball to the flank, beat the full-back and put it in the box. It is also, statistically, one of the least efficient: most crosses are blocked, cleared or run through to the goalkeeper, and a single cross is worth only a few hundredths of an expected goal. The best chances from wide areas come not from the ball that is whipped in from deep but from the cutback along the ground from the byline. This guide describes the kinds of wide delivery, why some are better than others, and how overlaps, underlaps and the winger’s choices create them.',
  nutshell: [
    'The main wide deliveries: the **early cross** (from deep), the **byline cutback** and the **driven cross to the near post**.',
    'A typical cross has an xG of only a **few hundredths**; the **cutback** is often worth several times more, because the shooter faces the goal and the keeper is moving.',
    'Crossing works best with **runners arriving** at different depths (near post, penalty spot, far post, edge of the box).',
    'Wingers can **go outside** (cross) or **inside** (shoot or combine); full-backs overlap or underlap to give the choice.',
    'Against a low block, crossing is a way to create **second balls**; against a high line, **early balls over the top** are more effective.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Kinds of wide delivery',
      lead: 'Where and how the ball is put into the box.',
      blocks: [
        {
          t: 'pitch',
          title: 'Three deliveries from the left: early cross, driven cross and cutback',
          view: 'attack',
          players: [a(72, 8, 'W'), a(92, 6, 'W'), a(84, 44, '9'), a(80, 60, '8'), a(82, 28, '10'), b(88, 36), b(88, 52), b(92, 42), gk(97, 50)],
          arrows: [{ from: [72, 8], to: [92, 54], kind: 'cross', label: 'early' }, { from: [92, 6], to: [90, 32], kind: 'pass', label: 'cutback' }, { from: [84, 20], to: [100, 40], kind: 'cross', label: 'driven' }],
          caption: 'The early cross is hit from deeper; the cutback goes backwards from the byline to a player arriving at the edge of the six-yard box; the driven cross is hit hard and low to the near post.',
        },
        {
          t: 'table',
          head: ['Delivery', 'How', 'Strength', 'Weakness'],
          rows: [
            ['Early cross', 'Hit from deep with pace, before the defence is set', 'Catches defenders turning; attackers run onto it', 'Long flight time; easy to claim'],
            ['Lofted cross to the far post', 'High, hang-time, to a tall attacker', 'Good for a target man', 'Low conversion rate'],
            ['Whipped inswinger', 'Curves toward the goal', 'Hard for a keeper to claim', 'Needs a runner at the near post'],
            ['Cutback', 'From the byline, backwards along the ground', 'High xG: the shooter faces the goal and the keeper is out of position', 'Needs a player to reach the byline'],
            ['Driven low cross', 'Hit hard at the near post', 'Flick-ons and deflections', 'Needs a precise run'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'A statistical hint', text: 'Published analyses of crossing find a success rate (reaching a team-mate) around a quarter of attempts or lower, and an xG per cross in the low single digits of hundredths; cutbacks from the byline have been found to be worth considerably more. Treat the numbers as orders of magnitude and check the source and the league.' },
      ],
    },
    {
      id: 'runs',
      title: 'Runners and positions in the box',
      lead: 'A cross needs a target.',
      blocks: [
        {
          t: 'pitch',
          title: 'The classic box occupation',
          view: 'attack',
          players: [a(78, 8, 'W'), a(94, 40, 'NP'), a(92, 52, 'PS'), a(94, 64, 'FP'), a(82, 50, 'E'), b(94, 38), b(94, 50), b(94, 62), b(88, 44), gk(98, 50)],
          arrows: [{ from: [78, 8], to: [94, 38], kind: 'cross' }],
          marks: [{ x: 94, y: 40, r: 3, label: 'near post' }, { x: 92, y: 52, r: 3, label: 'penalty spot' }, { x: 94, y: 64, r: 3, label: 'far post' }, { x: 82, y: 50, r: 3, label: 'edge: second ball' }],
          caption: 'Attackers arrive at the near post, the penalty spot and the far post at different times; one stays at the edge of the box for a shot from a cleared ball.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Beat the full-back', body: 'Overlap, underlap or dribble; the delivery is easier when the full-back has been moved.' },
            { title: 'Scan the box', body: 'The crosser looks for the target before delivering: a blind cross has a lower chance.' },
            { title: 'Time the runs', body: 'Attackers start their run when the ball is struck; an early run is picked up by defenders.' },
            { title: 'Cover the second ball', body: 'Players on the edge of the box and the opposite full-back are placed to deal with clearances.' },
          ],
        },
        { t: 'dodont', do: ['Prefer cutbacks and low driven balls where the shape allows', 'Send runners to different depths', 'Keep a player ready for the second ball'], dont: ['Cross from deep with nobody in the box', 'Cross into a crowded area with a tall defence', 'Ignore the opposition’s weakness in the air'] },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Reep, C. and Benjamin, B. (1968). Skill and chance in association football. *Journal of the Royal Statistical Society A*, 131(4), 581–585.',
    'Statsbomb and Opta analysts on crossing and cutback value (statsbomb.com; theanalyst.com).',
  ],
  related: ['sports/football/positions/full-backs-and-wing-backs', 'sports/football/positions/forwards-and-wide-roles', 'sports/football/xg/xg-basics'],
}

export default guide
