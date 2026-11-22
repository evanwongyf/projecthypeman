import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Pressing is defending by attacking: instead of waiting in a block, a team goes to meet the ball to win it back close to the opponent’s goal. The idea is old (Lobanovskyi’s Dynamo Kyiv, Sacchi’s Milan, Cruyff’s Barcelona) but it became the defining idea of the 2010s under Klopp, Guardiola, Tuchel, Nagelsmann and others. Gegenpressing (counter-pressing) applies it in the seconds after losing the ball. This guide explains the types of press, the traps and triggers that make it work, the logic of when it pays, its costs, and how its intensity is measured.',
  nutshell: [
    'A press has three ingredients: **the pressing player** (goes to the ball), **cover shadows** (block the passes) and **compactness** behind (so no space opens between the lines).',
    'A **pressing trap** invites a pass into an area (such as the touchline) where the ball carrier can be surrounded: the touchline acts as an extra defender.',
    '**Triggers** start the press: a pass to a full-back, a back-pass, a poor touch, the receiver facing his own goal.',
    '**Gegenpressing** applies the press in the first seconds after losing the ball, when the opponent is least organised; Klopp called it the best playmaker.',
    'The costs: **fitness** (it needs many sprints), the **space behind** the line if the press is bypassed, and the **coordination** required.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Types of press',
      lead: 'Where, and who goes.',
      blocks: [
        {
          t: 'pitch',
          title: 'A high press forcing the ball wide into a trap',
          view: 'full',
          players: [gk(8, 50), b(16, 36, 'CB'), b(16, 64, 'CB'), b(24, 8, 'LB'), b(30, 80, 'RB'), a(30, 40, 'F'), a(30, 60, 'F'), a(36, 12, 'W'), a(44, 50, '8'), a(44, 28, '8'), ball(24, 8)],
          arrows: [{ from: [36, 12], to: [25, 10], kind: 'press' }, { from: [30, 40], to: [20, 34], kind: 'press' }, { from: [44, 28], to: [30, 14], kind: 'press' }],
          caption: 'The striker cuts the pass back to the centre-back; the winger closes the full-back; the midfielder takes the nearest passing option. The touchline removes one direction and the ball carrier is trapped.',
        },
        {
          t: 'table',
          head: ['Type', 'How it works', 'Associated with'],
          rows: [
            ['High (front-foot) press', 'The block starts in the opponent’s half; the front line presses the centre-backs and goalkeeper', 'Klopp’s Dortmund and Liverpool, Leipzig, Bielsa’s teams'],
            ['Mid-block press', 'Compact lines around halfway; press when the ball reaches a trigger zone', 'Many top teams, Guardiola’s City against strong opponents'],
            ['Man-oriented press', 'Each player follows an opponent around the pitch', 'Gasperini’s Atalanta, Bielsa, some German teams'],
            ['Zonal / ball-oriented press', 'Players press according to the ball’s position and cover zones', 'Sacchi’s Milan, Rangnick’s school, Guardiola’s teams'],
            ['Gegenpress', 'Immediate press after losing the ball', 'Klopp, Guardiola (five-second rule), Nagelsmann'],
          ],
        },
        { t: 'ftbl-viz', viz: 'pressing-lab' },
      ],
    },
    {
      id: 'mechanics',
      title: 'Triggers, shadows and traps',
      lead: 'The mechanics of a press.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Pressing triggers', tag: 'when to go', body: 'A pass to a player facing his own goal, a back-pass to the goalkeeper, a heavy touch, a pass to a weaker full-back: the team presses on a signal, not on every pass.' },
            { title: 'Cover shadow', tag: 'blocking the passes', body: 'The pressing player positions to block the line to the next opponent with his body, so that the ball carrier has fewer options.' },
            { title: 'Pressing trap', tag: 'a decoy', body: 'The team leaves an apparently open pass that leads to a crowded zone, then closes the space around the receiver.' },
            { title: 'The last line', tag: 'support', body: 'The back line pushes up behind the press so that the distance between lines stays small; without it, the opponent plays through the gap.' },
          ],
        },
        {
          t: 'pitch',
          title: 'Cover shadow',
          view: 'full',
          players: [b(24, 50, 'CB'), a(34, 50, 'F'), b(30, 30, 'CB'), b(40, 66, 'B')],
          arrows: [{ from: [24, 50], to: [40, 66], kind: 'pass' }, { from: [34, 50], to: [29, 40], kind: 'press' }],
          zones: [{ x: 34, y: 54, w: 8, h: 14, label: 'shadow', tone: 'cool' }],
          caption: 'The forward’s body blocks the pass from the centre-back to the midfielder behind him. The ball carrier must pass somewhere less dangerous or hold the ball while teammates close in.',
        },
      ],
    },
    {
      id: 'gegen',
      title: 'Gegenpressing and its economics',
      lead: 'The first five seconds.',
      blocks: [
        { t: 'p', text: 'When a team loses the ball, the opponent who wins it is often surrounded by the team’s own players, who are close to him and know where he is likely to pass. At the same time the opponent’s team is out of shape, because its players were moving to defend. **Gegenpressing** exploits this by making the nearest players press at once, for about five to eight seconds. If the ball is won, the team has the ball in a dangerous place and the opponent’s players are scattered; if not, it must drop back quickly.' },
        {
          t: 'math',
          tex: String.raw`\Delta V = p_w\,V_{\text{high}} - p_b\,C_{\text{counter}}`,
          caption: 'A press pays when the expected gain from winning the ball high exceeds the expected cost of being bypassed.',
          where: [{ sym: 'p_w', def: 'probability of winning the ball in the press' }, { sym: 'V_{\\text{high}}', def: 'value (in xG) of possession won high up the pitch' }, { sym: 'p_b', def: 'probability of being bypassed and conceding a counter' }, { sym: 'C_{\\text{counter}}', def: 'cost (in xG conceded) of the resulting counter-attack' }],
          syntax: [{ sym: 'p_w\\,V_{\\text{high}}', say: 'the benefit of a successful press. Effect: a high win near goal is worth much more than a win in midfield. Why: a shot is only a pass or two away.' }],
          worked: {
            title: 'An illustrative case',
            steps: ['A press wins the ball in 25% of attempts (p_w = 0.25); possession won high is worth 0.08 xG on average (V = 0.08).', 'It is bypassed in 10% of attempts (p_b = 0.10), and the counter then costs 0.15 xG.', 'ΔV = 0.25 × 0.08 − 0.10 × 0.15 = 0.020 − 0.015 = +0.005 xG per press.'],
            answer: 'A small positive value per press, repeated dozens of times a match, adds up; but if the press is bypassed more often (p_b = 0.15), the value becomes negative. The numbers are invented for illustration: the structure of the trade-off is the point.',
          },
        },
        {
          t: 'dodont',
          do: ['Press as a unit: the back line must step up with the front line', 'Use triggers and rest periods rather than pressing all the time', 'Train the counter-press so that players know their first action after losing the ball'],
          dont: ['Press with the front players alone: the gap behind them will be exploited', 'Ignore fatigue: high pressing needs rotation, deep squads and recovery', 'Assume the opponent will not play over the press with long passes'],
        },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Honigstein, R. (2015). *Das Reboot: How German Soccer Reinvented Itself*. Yellow Jersey Press.',
    'Rangnick, R. and Klopp, J.: interviews on pressing and gegenpressing, collected at The Coaches’ Voice (coachesvoice.com).',
    'Spielverlagerung.com: pressing analyses (spielverlagerung.com); Trainor, C. (2014), PPDA.',
  ],
  related: ['sports/football/tactics/transitions-and-counter-attacks', 'sports/football/schools/klopp-rangnick-and-the-german-school', 'sports/football/xg/beyond-xg'],
}

export default guide
