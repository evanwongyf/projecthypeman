import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'No position has changed more in thirty years than the full-back. Once a defender who marked the winger and cleared the ball, the full-back became the player who provides width in the attack (Cafu, Roberto Carlos, Dani Alves), then in the 2010s the one who moves inside to join the midfield (Lahm at Bayern, Zinchenko, Stones and Akanji at Manchester City), and in a back three the wing-back, who covers an entire flank. This guide explains overlaps and underlaps, the inverted full-back, the wing-back and the trade-off every full-back faces between attacking and recovering.',
  nutshell: [
    'An **overlap** is a run outside the winger; an **underlap** is a run inside, between the winger and the centre.',
    'The **inverted full-back** moves inside into midfield in possession, adding a body in the centre and giving the winger the flank.',
    'A **wing-back** plays in a back three or five, with the whole flank to cover: fitness is the key trait.',
    'Full-backs provide a large share of **crosses and chance creation** in many teams.',
    'The cost: space **behind** the full-back; teams cover it with a pivot, a centre-back or by keeping the opposite full-back deep.',
  ],
  sections: [
    {
      id: 'runs',
      title: 'Overlaps and underlaps',
      lead: 'Two ways to run past a winger.',
      blocks: [
        {
          t: 'pitch',
          title: 'The overlap',
          view: 'attack',
          players: [a(70, 12, 'W'), a(62, 8, 'RB'), b(72, 16, 'LB'), b(72, 36), b(70, 52), ball(70, 12)],
          arrows: [{ from: [62, 8], to: [84, 6], kind: 'run' }, { from: [70, 12], to: [84, 8], kind: 'pass' }],
          caption: 'The winger holds the full-back’s attention; the right-back runs around the outside and receives the pass near the byline for a cross or cutback.',
        },
        {
          t: 'pitch',
          title: 'The underlap',
          view: 'attack',
          players: [a(70, 12, 'W'), a(62, 18, 'RB'), b(72, 16, 'LB'), b(72, 34), b(70, 52), ball(70, 12)],
          arrows: [{ from: [62, 18], to: [82, 26], kind: 'run' }, { from: [70, 12], to: [82, 26], kind: 'pass' }],
          caption: 'The full-back runs inside the winger, into the half-space; the full-back marking the winger cannot follow without leaving him, and the central defenders are pulled wide.',
        },
        { t: 'p', text: 'The choice depends on the opponent’s defending: against a back four that stays narrow, an overlap gives width; against a team that defends the flanks tightly, an underlap finds the half-space. Many teams alternate to keep the defender guessing.' },
      ],
    },
    {
      id: 'inverted',
      title: 'The inverted full-back',
      lead: 'From the flank to the pivot.',
      blocks: [
        {
          t: 'pitch',
          title: 'Becoming a midfielder in possession',
          view: 'full',
          players: [gk(8, 50), a(24, 28, 'CB'), a(24, 72, 'CB'), a(36, 40, 'LB'), a(36, 62, 'RB'), a(44, 50, '6'), a(60, 10, 'W'), a(60, 90, 'W'), a(64, 50, '9')],
          caption: 'The two full-backs move into midfield beside or in front of the pivot, giving a "box" of four in the centre. Width is provided by the wingers. The team has a stable structure for passing and is protected if the ball is lost, because players are close to the ball.',
        },
        {
          t: 'levels',
          items: [
            { name: 'Late 1990s', body: 'Overlapping full-backs such as Cafu and Roberto Carlos provide all the width in Brazil’s attack.' },
            { name: '2013–14', body: 'Guardiola, at Bayern, uses Philipp Lahm in midfield; the idea of the full-back as a midfield player spreads.' },
            { name: '2016–2020s', body: 'Manchester City’s full-backs and Zinchenko, Stones or Akanji step into the pivot; Alexander-Arnold plays as a hybrid at Liverpool; Arsenal use Zinchenko and Timber inside.' },
            { name: 'Today', body: 'The full-back is selected according to the team’s structure: wide runner, inverted midfielder or hybrid.' },
          ],
        },
      ],
    },
    {
      id: 'wingback',
      title: 'The wing-back',
      lead: 'A whole flank to cover.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 3-5-2 attacking and defending as a 5-3-2',
          view: 'full',
          players: [gk(6, 50), a(24, 28, 'CB'), a(22, 50, 'CB'), a(24, 72, 'CB'), a(62, 6, 'LWB'), a(62, 94, 'RWB'), a(44, 50, '6'), a(52, 34, '8'), a(52, 66, '8'), a(76, 40, '9'), a(76, 60, '9')],
          arrows: [{ from: [62, 6], to: [84, 8], kind: 'run' }, { from: [62, 94], to: [84, 92], kind: 'run' }],
          caption: 'In possession the wing-backs push high and wide; out of possession they drop to form a back five, so the width of the attack has to be matched by their recovery.',
        },
        {
          t: 'dodont',
          do: ['Choose wing-backs with the stamina to run the full length of the flank repeatedly', 'Use the wide centre-back to cover when the wing-back is high', 'Practise the transitions: wing-backs must know when to hold and when to run'],
          dont: ['Ask both wing-backs to attack at the same time against a quick opponent', 'Forget that a wing-back who is cut off leaves a three-against-two in midfield', 'Assume a good full-back is automatically a good wing-back'],
        },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
    'Coaches’ Voice and The Athletic: tactical analyses of inverted full-backs and wing-backs (coachesvoice.com).',
  ],
  related: ['sports/football/tactics/back-three-and-wing-backs', 'sports/football/tactics/wide-play-and-crossing', 'sports/football/positions/midfield-roles'],
}

export default guide
