import type { Guide } from '../../../../guide'
import { a, b } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A pass is a decision made in about a second, and good passers make it before the ball arrives. What they are reading is geometry: whether a teammate is reachable, whether an opponent can cut the line, and which of several teammates will leave the receiver facing forward. This guide explains the geometry that underlies positional play: the triangle as the unit of support, the angle and distance at which teammates should stand, and the simple arithmetic of when a pass can be intercepted. It shows why players stand where they do, and why a team that keeps its shape creates options without any one player doing anything special.',
  nutshell: [
    'The **triangle** is the basic unit: a player with the ball needs at least **two options** at different angles.',
    'A good **support distance** is about 10 to 20 metres: close enough for an easy pass, far enough that one defender cannot cover both.',
    'A pass can be **intercepted** if a defender can reach a point on the lane before the ball does; compare times, not distances.',
    '**Angles of support**: a teammate diagonally behind or beside the ball is easier to find than one in a straight line behind a defender.',
    'The best passers **scan** before receiving, so the next pass is already chosen.',
  ],
  sections: [
    {
      id: 'triangle',
      title: 'Triangles and angles of support',
      lead: 'Why teammates stand where they do.',
      blocks: [
        {
          t: 'pitch',
          title: 'Good support: two options at different angles',
          view: 'full',
          players: [a(40, 50, 'B'), a(30, 36, '1'), a(32, 66, '2'), a(52, 30, '3'), b(44, 44)],
          arrows: [{ from: [40, 50], to: [30, 38], kind: 'pass' }, { from: [40, 50], to: [32, 64], kind: 'pass' }, { from: [40, 50], to: [51, 32], kind: 'pass' }],
          caption: 'The ball carrier has three options at different angles: back-left, back-right and forward-left. One defender cannot block all three.',
        },
        {
          t: 'pitch',
          title: 'Poor support: teammates in a line behind the defender',
          view: 'full',
          players: [a(40, 50, 'B'), a(30, 50, '1'), a(24, 50, '2'), b(35, 50)],
          arrows: [{ from: [40, 50], to: [31, 50], kind: 'pass' }],
          caption: 'A defender standing between the ball carrier and two teammates in a line blocks both with one position. The carrier has no safe option.',
        },
        {
          t: 'table',
          head: ['Principle', 'What it means', 'Typical distance'],
          rows: [
            ['Two options minimum', 'The carrier has at least two passing lanes open', 'n/a'],
            ['Different angles', 'The options are at least 30–45° apart so that no one defender blocks both', 'n/a'],
            ['Support distance', 'Close enough to receive safely, far enough to stretch the defence', '10–20 m'],
            ['Depth and width', 'One player deeper, one wider, one ahead', 'The "triangle" with the ball'],
            ['Moving triangles', 'As the ball moves, the triangle moves with it', 'Rotating shape'],
          ],
        },
      ],
    },
    {
      id: 'lane',
      title: 'When can a pass be intercepted?',
      lead: 'Compare the times.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`t_{\text{ball}}=\frac{L}{v_b},\qquad t_{\text{def}}=\frac{d}{v_d},\qquad \text{intercepted if } t_{\text{def}}<t_{\text{ball}}`,
          caption: 'A defender intercepts if he can reach a point on the pass lane before the ball gets there.',
          where: [{ sym: 'L', def: 'the distance the ball travels to that point (m)' }, { sym: 'v_b', def: 'the ball speed (typically 15 to 25 m/s for a driven pass)' }, { sym: 'd', def: 'the defender’s distance to that point (m)' }, { sym: 'v_d', def: 'the defender’s speed (about 5 to 7 m/s)' }],
          syntax: [{ sym: 't_{\\text{def}}<t_{\\text{ball}}', say: 'the defender arrives first. Effect: a faster pass, or one passing farther from the defender, is safer. Why: the ball covers more ground than the defender in the same time.' }],
          worked: {
            title: 'A 20-metre pass at 18 m/s',
            steps: ['Ball time to the point 20 m away: 20/18 = 1.11 s.', 'A defender 6 m from the lane running at 6 m/s: 1.0 s. He arrives first and intercepts.', 'A defender 8 m from the lane needs 1.33 s: the pass gets through.'],
            answer: 'A defender about 6 m or less from the lane can reach it in time. A harder, quicker pass shrinks the window; this is why teams use driven passes in tight spaces and softer ones in the open.',
          },
        },
        {
          t: 'pitch',
          title: 'The interception zone',
          view: 'full',
          players: [a(30, 50, 'P'), a(54, 50, 'R'), b(42, 38, 'D'), b(42, 62, 'D')],
          zones: [{ x: 32, y: 40, w: 22, h: 20, label: 'defenders can reach', tone: 'b' }],
          arrows: [{ from: [30, 50], to: [54, 50], kind: 'pass' }],
          caption: 'The shaded area marks where the defenders’ arrival time is shorter than the ball’s: a pass that crosses it can be intercepted. A pass around the zone, or one hit faster, goes through.',
        },
        { t: 'callout', tone: 'tip', title: 'Scanning', text: 'Elite midfielders look over their shoulder several times in the seconds before receiving. Studies using eye-tracking and video find that players who scan more often make more successful forward passes under pressure, because they know where the free player is before the ball arrives.' },
      ],
    },
  ],
  sources: [
    'Jordet, G., Bloomfield, J. & Heijmerikx, J. (2013). The hidden foundation of field vision in English Premier League (EPL) soccer players. *MIT Sloan Sports Analytics Conference*.',
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
  ],
  related: ['sports/football/passing/types-of-pass', 'sports/football/passing/combinations-and-third-man', 'sports/football/game/pitch-zones-and-half-spaces'],
}

export default guide
