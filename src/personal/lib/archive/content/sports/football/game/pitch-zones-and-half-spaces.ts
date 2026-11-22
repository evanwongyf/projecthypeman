import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Coaches divide the pitch into zones because decisions depend on where the ball is: the same pass is routine in one zone and dangerous in another. Two systems are common. The simplest splits the pitch into thirds and into five vertical lanes. A finer one, from positional play, splits it into twenty zones. Between the central lane and the wide lanes lie the half-spaces, the channels where a player is hardest to mark and has the best angle for a pass or shot. This guide shows each division and explains why the half-space became a central idea of modern tactics.',
  nutshell: [
    'The pitch splits into **three thirds** (defensive, middle, attacking) and **five lanes** (two wide, two half-spaces, one central).',
    'The **half-space** lies between the wing and the centre: from there a player can pass inside or outside, shoot at a good angle and is between two defenders’ zones.',
    'Positional play uses about **20 zones** and rules about which players may occupy which.',
    'Zones help to read a match: **where possession is won and lost** matters more than how much of it there is.',
    'Space is also **vertical**: the gap between the defence and midfield lines (“between the lines”) is where creators receive.',
  ],
  sections: [
    {
      id: 'thirds',
      title: 'Thirds and lanes',
      lead: 'The simple grid.',
      blocks: [
        {
          t: 'pitch',
          title: 'Three thirds and five lanes',
          view: 'full',
          zones: [
            { x: 0, y: 0, w: 33.3, h: 100, label: 'defensive third', tone: 'cool' },
            { x: 66.7, y: 0, w: 33.3, h: 100, label: 'attacking third', tone: 'hot' },
            { x: 0, y: 0, w: 100, h: 14, label: 'wide lane', tone: 'neutral' },
            { x: 0, y: 14, w: 100, h: 22, label: 'half-space', tone: 'a' },
            { x: 0, y: 64, w: 100, h: 22, label: 'half-space', tone: 'a' },
            { x: 0, y: 86, w: 100, h: 14, label: 'wide lane', tone: 'neutral' },
          ],
          caption: 'In the five-lane model each lane is about 13.6 m wide on a 68 m pitch. The central corridor is the most protected; the wide lanes are the most open; the half-spaces lie between.',
        },
        { t: 'p', text: 'Lanes are used to spread attackers: a rule of positional play is that no two players of the same team should be in the same vertical lane and horizontal line at once, so that each pass has an option and the defence must choose whom to mark.' },
      ],
    },
    {
      id: 'half',
      title: 'Why the half-space matters',
      lead: 'The best place to receive.',
      blocks: [
        {
          t: 'pitch',
          title: 'A player in the half-space is between two defenders’ zones',
          view: 'attack',
          players: [a(74, 34, '10'), b(72, 18, 'LB'), b(70, 38, 'CB'), b(64, 45), b(76, 62), a(80, 14, 'W'), a(82, 50, '9'), gk(97, 50)],
          zones: [{ x: 68, y: 22, w: 22, h: 22, label: 'half-space', tone: 'a' }],
          arrows: [{ from: [74, 34], to: [86, 44], kind: 'pass' }, { from: [74, 34], to: [88, 26], kind: 'shot' }, { from: [80, 14], to: [88, 28], kind: 'run' }],
          caption: 'The full-back sees the winger, the centre-back sees the striker: neither fully owns the half-space. From there the player can shoot across the goalkeeper, pass to the striker or release the winger.',
        },
        {
          t: 'table',
          head: ['Why', 'Explanation'],
          rows: [
            ['Angle', 'From the half-space the angle of the goal is wide (see the xG lab) but the player is not on the touchline, so passes can go in both directions'],
            ['Marking dilemma', 'The centre-back and the full-back each have a claim on the player; whoever steps out leaves a gap'],
            ['Vision', 'Players can see the whole pitch and both flanks, unlike a winger on the line'],
            ['Combination hub', 'It links the wide player, the striker and the midfielders in a triangle'],
          ],
        },
      ],
    },
    {
      id: 'twenty',
      title: 'Positional play zones and between the lines',
      lead: 'Finer maps and the gap between lines.',
      blocks: [
        {
          t: 'pitch',
          title: 'Twenty zones: five lanes by four bands',
          view: 'full',
          zones: [
            ...[0, 1, 2, 3].flatMap((band) => [0, 1, 2, 3, 4].map((lane) => ({ x: band * 25, y: lane * 20, w: 25, h: 20, tone: ((band + lane) % 2 ? 'neutral' : 'a') as 'neutral' | 'a' }))),
          ],
          caption: 'Positional-play coaches number the zones and set rules for them, such as the maximum number of players in a zone and the aim to occupy the zone between the opponent’s lines.',
        },
        {
          t: 'pitch',
          title: 'Receiving between the lines',
          view: 'attack',
          players: [b(66, 20), b(66, 40), b(66, 60), b(66, 80), b(80, 28), b(80, 50), b(80, 72), a(73, 50, '10'), a(58, 50, '6')],
          zones: [{ x: 68, y: 10, w: 11, h: 80, label: 'between the lines', tone: 'hot' }],
          arrows: [{ from: [58, 50], to: [73, 50], kind: 'pass' }],
          caption: 'A creative player receives in the gap between the opponent’s midfield and defence. If the midfield steps up, the gap behind it grows; if the defence drops, the gap in front of it grows.',
        },
        { t: 'callout', tone: 'tip', title: 'A viewing habit', text: 'Next time you watch a match, note which lane the ball is in and how many opponents are within ten metres of it. Teams that keep the ball in crowded zones lose it; teams that circulate it until a lane opens create the free player. This is the idea behind the "free man" in positional play.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport (the concept of the half-space in Guardiola’s Bayern).',
    'Juan Manuel Lillo and Juego de Posición coaching literature; Cruyff Institute materials.',
  ],
  related: ['sports/football/tactics/half-spaces-and-overloads', 'sports/football/schools/cruyff-guardiola-and-positional-play', 'sports/football/xg/xg-basics'],
}

export default guide
