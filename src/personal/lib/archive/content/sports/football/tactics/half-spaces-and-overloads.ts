import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Most attacks are an attempt to create a free player: a situation where the attacker has more options than the defenders have answers. The tools are numerical superiority (an overload), which brings more attackers to an area than defenders can cover, and positional superiority, which finds a player in a position the defence cannot mark. Overloads often serve a second purpose: to draw the defence to one side so that the ball can be switched to a free player on the other. This guide explains the overload-and-isolate idea, the third-man run that makes a combination work, rotations and the triangles that underlie positional play.',
  nutshell: [
    'An **overload** puts more attackers than defenders in an area, such as 4 against 3 on the left.',
    '**Overload to isolate**: attract defenders to one flank, then switch to the opposite winger one-on-one.',
    'The **third-man** combination: A passes to B, who lays it off to C, who is running into the space the defence has vacated.',
    '**Rotations** swap positions (a winger and a full-back, an eight and a ten) to drag markers out of position.',
    '**Triangles** give each player at least two passing options and are the building block of positional play.',
  ],
  sections: [
    {
      id: 'overload',
      title: 'Overload to isolate',
      lead: 'Attract, then switch.',
      blocks: [
        {
          t: 'pitch',
          title: '4 v 3 on the left, then a switch to the free winger',
          view: 'attack',
          players: [a(66, 12, 'LB'), a(72, 26, '8'), a(76, 38, '10'), a(72, 16, 'W'), b(70, 14), b(74, 28), b(76, 40), b(78, 64), b(80, 82), a(80, 90, 'W'), gk(97, 50)],
          arrows: [{ from: [72, 26], to: [66, 12], kind: 'pass' }, { from: [66, 12], to: [76, 38], kind: 'pass' }, { from: [76, 38], to: [80, 88], kind: 'cross' }],
          zones: [{ x: 60, y: 6, w: 26, h: 42, label: 'overload 4 v 3', tone: 'hot' }],
          caption: 'The team crowds the left to draw the defence over; a long diagonal pass then finds the right winger against only one opponent, with time and space.',
        },
        { t: 'callout', tone: 'tip', title: 'The overload has a price', text: 'Every extra player on one side is one fewer elsewhere. The team accepts it because the ball is far from the weak side and the diagonal pass takes a second or more to arrive; the opponent’s weak-side players, if too narrow, are then too late.' },
      ],
    },
    {
      id: 'third',
      title: 'The third man and rotations',
      lead: 'Combinations that open lines.',
      blocks: [
        {
          t: 'pitch',
          title: 'The third-man run',
          view: 'attack',
          players: [a(60, 30, 'A'), a(70, 42, 'B'), a(64, 62, 'C'), b(66, 38), b(66, 52), b(74, 30), b(76, 64)],
          arrows: [{ from: [60, 30], to: [70, 42], kind: 'pass' }, { from: [70, 42], to: [74, 54], kind: 'pass' }, { from: [64, 62], to: [76, 54], kind: 'run' }],
          caption: 'A plays forward to B; the defenders step toward B; B lays the ball off into the space left, where C (the third man) arrives at speed. The defender marking C could not see the pass coming.',
        },
        {
          t: 'pitch',
          title: 'A rotation: winger and full-back swap',
          view: 'attack',
          players: [a(70, 12, 'W'), a(62, 6, 'RB'), b(72, 14, 'LB'), b(74, 36), b(78, 54)],
          arrows: [{ from: [70, 12], to: [66, 26], kind: 'run' }, { from: [62, 6], to: [78, 8], kind: 'run' }],
          caption: 'The winger drifts inside and the full-back overlaps: the opposing full-back has to decide whether to follow the winger or the runner. Either choice opens something.',
        },
        {
          t: 'table',
          head: ['Pattern', 'What it needs', 'What it does to the defence'],
          rows: [
            ['Third-man run', 'A layoff player and a runner who starts from deeper', 'The defender sees the first pass and not the second'],
            ['Rotation', 'Two players who can play each other’s roles', 'The marker follows the wrong player, leaving a gap'],
            ['Overload to isolate', 'Good switch passing and a winger who wins duels', 'The defence is stretched across the pitch'],
            ['Combination around the box', 'Quick one-touch passing', 'Defenders cannot step out without being bypassed'],
          ],
        },
      ],
    },
    {
      id: 'triangles',
      title: 'Triangles and support angles',
      lead: 'The building block.',
      blocks: [
        {
          t: 'pitch',
          title: 'Triangles across the pitch',
          view: 'full',
          players: [a(24, 30, 'CB'), a(30, 60, 'CB'), a(40, 44, '6'), a(52, 20, 'W'), a(54, 62, '8'), a(66, 44, '9')],
          arrows: [{ from: [24, 30], to: [40, 44], kind: 'pass' }, { from: [30, 60], to: [40, 44], kind: 'pass' }, { from: [40, 44], to: [54, 62], kind: 'pass' }, { from: [40, 44], to: [52, 22], kind: 'pass' }],
          caption: 'Every player has at least two passing options at different angles; the opponent cannot mark all of them without leaving gaps. This is why teams aim for triangles with sides of 10 to 20 metres.',
        },
        { t: 'cards', cols: 2, items: [
          { title: 'Superiority', tag: 'numerical, positional, qualitative', body: 'Guardiola’s school distinguishes numerical superiority (more players), positional (a better position) and qualitative (a better player in a duel).' },
          { title: 'The free man', tag: 'the aim', body: 'Positional play tries to create a free player in every zone, and to find him with the next pass.' },
          { title: 'Support', tag: 'the angle', body: 'A teammate at a diagonal behind or beside the ball carrier is more useful than one in a straight line, which a single defender can block.' },
          { title: 'Depth and width', tag: 'the shape', body: 'One player stays deep to offer a safe option while another stretches the defence; both are needed to move the defence.' },
        ] },
      ],
    },
  ],
  sources: [
    'Perarnau, M. (2014). *Pep Confidential*. Arena Sport.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Spielverlagerung.com and The Coaches’ Voice articles on overloads, the third man and rotations (spielverlagerung.com; coachesvoice.com).',
  ],
  related: ['sports/football/game/pitch-zones-and-half-spaces', 'sports/football/passing/combinations-and-third-man', 'sports/football/schools/cruyff-guardiola-and-positional-play'],
}

export default guide
