import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A defensive line is a team’s most important geometry. Hold it high and the team plays in the opponent’s half, compresses the pitch and can catch attackers offside; hold it deep and there is space for the keeper and defenders to deal with balls over the top. The offside trap is the tool that makes a high line possible: the defenders step up together as the pass is played, leaving the attacker in front of the last defender. Sacchi’s Milan made it famous; Arrigo Sacchi, Ange Postecoglou and Hansi Flick’s teams have used it. This guide explains how the trap works, the timing and the risks, and the ways attackers beat it.',
  nutshell: [
    'The **offside trap** is a coordinated step forward by the whole back line as the ball is played, putting an advanced attacker in an offside position.',
    'A **high line** compresses the pitch (the gap between defence and attack shrinks) and supports the press, but leaves space behind it.',
    'The trap needs **communication**, a **leader** to call the step and **pressure on the ball** so the pass cannot be played in behind.',
    'Attackers beat it with **timing** (starting the run late), **dropping** to receive, **switches** and **passes played early** while the line steps.',
    'The **sweeper-keeper** and quick centre-backs make a high line safer; VAR’s lines make marginal offsides much more visible.',
  ],
  sections: [
    {
      id: 'trap',
      title: 'How the trap works',
      lead: 'Step up together, at the moment of the pass.',
      blocks: [
        {
          t: 'pitch',
          title: 'The line steps up as the ball is played',
          view: 'full',
          players: [a(58, 20, 'LB'), a(58, 40, 'CB'), a(58, 60, 'CB'), a(58, 80, 'RB'), b(64, 50, 'F'), b(64, 30), b(52, 54, 'M'), gk(48, 50)],
          arrows: [{ from: [58, 20], to: [66, 20], kind: 'run' }, { from: [58, 40], to: [66, 40], kind: 'run' }, { from: [58, 60], to: [66, 60], kind: 'run' }, { from: [58, 80], to: [66, 80], kind: 'run' }, { from: [52, 54], to: [64, 50], kind: 'pass' }],
          caption: 'Opponent in red passes to the forward who started level with the line; the line steps up a few metres at the moment of the pass, leaving him offside when he receives.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Pressure the ball', body: 'The pass in behind can only be played if the passer has time: a player close to the ball is the first condition for the trap.' },
            { title: 'The leader calls the step', body: 'Usually a centre-back signals; the line moves on the word, not the pass, so it is level when the ball is played.' },
            { title: 'Step on the pass, not after', body: 'The step is timed to the foot swinging, so the line is already moving when the ball is released.' },
            { title: 'Hold the line', body: 'After the whistle, reset quickly: a late step is the commonest reason the trap fails.' },
          ],
        },
        { t: 'ftbl-viz', viz: 'offside-lab' },
      ],
    },
    {
      id: 'risk',
      title: 'Why it is risky, and how attackers beat it',
      lead: 'One mistimed step and the striker is clear.',
      blocks: [
        {
          t: 'pitch',
          title: 'Beating the trap: the delayed run',
          view: 'full',
          players: [a(58, 20), a(58, 40), a(58, 60, 'CB'), a(58, 80), b(62, 50, 'F'), b(52, 54, 'M'), gk(48, 50)],
          arrows: [{ from: [62, 50], to: [60, 62], kind: 'run' }, { from: [60, 62], to: [78, 56], kind: 'run' }, { from: [52, 54], to: [74, 56], kind: 'pass' }],
          caption: 'The forward begins level or slightly behind the line, then bursts forward only when the pass is played. A defender who steps up late is beaten.',
        },
        {
          t: 'table',
          head: ['Counter-measure', 'Idea'],
          rows: [
            ['Delayed run', 'Start the run after the pass, not before; the line has already stepped up'],
            ['Dropping to receive', 'Receive to feet between the lines; the line cannot step up on a pass to feet'],
            ['Switching the play', 'The line shifts across, and a far-side attacker can arrive on the blind side'],
            ['Dribbling at the line', 'Carry the ball towards the line; the trap does not work against a player on the ball'],
            ['Pass early', 'Play the ball before the defence is organised'],
            ['A lob or chip over the keeper', 'If the keeper is also high, the shot can come from a longer pass'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Sweeper-keeper', tag: 'a safety net', body: 'A keeper positioned 20 to 25 metres from goal clears balls over the line before the striker reaches them.' },
            { title: 'Recovery pace', tag: 'a second safety net', body: 'Quick centre-backs can chase a runner who gets through; slow ones need a deeper line.' },
            { title: 'VAR and marginal calls', tag: 'detail', body: 'With semi-automated offside technology, decisions are made to centimetres, so a half-step either way matters.' },
            { title: 'Rule changes', tag: 'laws', body: 'Since 1990 a player level with the second-last defender is onside, which gave attackers the benefit of the doubt and made the trap harder to time.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'IFAB. *Laws of the Game*, Law 11 (offside) (theifab.com).',
  ],
  related: ['sports/football/schools/sacchi-and-the-modern-press', 'sports/football/tactics/low-block-and-compactness', 'sports/football/positions/goalkeepers'],
}

export default guide
