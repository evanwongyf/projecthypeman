import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'A match looks continuous, but coaches break it into phases because each needs a different shape and different rules of thumb. The usual split is five: building up from the back, progressing the ball through midfield, creating and finishing in the final third, and then the two transitions: what to do at the moment you lose the ball and at the moment you win it, with a defensive phase and set pieces in between. Seeing a match as phases explains why a team can look very different in different moments and why the same formation can mean opposite things.',
  nutshell: [
    '**Build-up** gets the ball from the goalkeeper and defenders towards midfield; **progression** moves it through the lines; **final third** play creates and finishes chances.',
    '**Transitions** are the seconds after possession changes hands: the **counter-press** after losing it, the **counter-attack** after winning it.',
    '**Defending** has its own phases: pressing high, defending in a mid-block, or defending in a low block, and the choice sets where the team wins the ball.',
    '**Rest defence** is the shape a team keeps behind the ball while attacking so that a lost ball does not become a counter.',
    'Phases overlap: a good team’s attacking shape is designed from the transition backwards.',
  ],
  sections: [
    {
      id: 'attack',
      title: 'Attacking phases',
      lead: 'From the goal kick to the shot.',
      blocks: [
        {
          t: 'pitch',
          title: 'Build-up: the goalkeeper and defenders create the first pass',
          view: 'full',
          players: [gk(8, 50), a(18, 30, 'CB'), a(18, 70, 'CB'), a(24, 6, 'LB'), a(24, 94, 'RB'), a(34, 50, '6'), a(48, 34, '8'), a(48, 66, '8'), b(40, 36), b(40, 64), b(50, 50), ball(10, 52)],
          arrows: [{ from: [10, 52], to: [18, 32], kind: 'pass' }, { from: [18, 32], to: [34, 50], kind: 'pass' }, { from: [34, 50], to: [48, 36], kind: 'pass' }],
          caption: 'Against a front press of three, the team pulls opponents out of position with short passes, then finds the free midfielder behind them.',
        },
        {
          t: 'pitch',
          title: 'Final third: overloading the half-space and finishing',
          view: 'attack',
          players: [a(73, 40, '10'), a(72, 62, '8'), a(80, 10, 'W'), a(82, 50, '9'), a(86, 86, 'W'), b(70, 25), b(70, 45), b(70, 65), b(72, 82), b(88, 38), b(88, 62), gk(97, 50)],
          arrows: [{ from: [73, 40], to: [86, 44], kind: 'pass' }, { from: [82, 50], to: [89, 44], kind: 'run' }, { from: [80, 10], to: [90, 28], kind: 'cross' }],
          caption: 'In the final third the team has spent patience in the build-up to get numbers around the box; the work now is positioning (runs into the box and the area outside it) and the quality of the last pass.',
        },
        {
          t: 'levels',
          items: [
            { name: 'Build-up', body: 'The goalkeeper and defenders keep the ball and invite the press, to create space behind it.' },
            { name: 'Progression', body: 'Through the lines by passes between opponents, carries and switches of play into the free zone.' },
            { name: 'Creation', body: 'Combinations, crosses, cutbacks and through balls to find a shooter in a good position.' },
            { name: 'Finishing', body: 'Shot selection, movement in the box and the second ball.' },
          ],
        },
      ],
    },
    {
      id: 'transition',
      title: 'Transitions',
      lead: 'The five seconds that decide matches.',
      blocks: [
        {
          t: 'pitch',
          title: 'Counter-press after losing the ball in the final third',
          view: 'attack',
          players: [b(76, 50, 'X'), a(74, 44, '8'), a(78, 62, '10'), a(70, 30, '6'), a(86, 70, 'W'), b(66, 56), b(66, 40), b(60, 70)],
          arrows: [{ from: [74, 44], to: [76, 50], kind: 'press' }, { from: [78, 62], to: [76, 52], kind: 'press' }, { from: [70, 30], to: [68, 48], kind: 'press' }],
          marks: [{ x: 76, y: 50, r: 6, label: 'ball lost' }],
          caption: 'Several players press the ball and cut the passes to the nearest opponents within a few seconds. The idea is that the opponent is least organised just after winning the ball.',
        },
        {
          t: 'pitch',
          title: 'Counter-attack after winning the ball',
          view: 'full',
          players: [a(44, 40, '8'), a(60, 12, 'W'), a(62, 88, 'W'), a(66, 50, '9'), b(72, 28), b(72, 50), b(76, 72), gk(94, 50), ball(44, 40)],
          arrows: [{ from: [44, 40], to: [60, 14], kind: 'pass' }, { from: [66, 50], to: [82, 50], kind: 'run' }, { from: [62, 88], to: [80, 70], kind: 'run' }],
          caption: 'After winning the ball, the first pass goes forward to a runner in space and others run beyond; with fewer touches, the defence has fewer seconds to recover.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Rest defence', tag: 'preparing for loss', body: 'A set of players (often two centre-backs and a pivot) kept deep and spaced to stop a counter if the ball is lost.' },
            { title: 'The counter-press', tag: 'the first five seconds', body: 'Pressing immediately, near the ball, to win it back where the opponent is stretched and the goal is close.' },
            { title: 'Recovering shape', tag: 'if the counter-press fails', body: 'Falling back quickly, delaying with the nearest player and protecting the central channel until the team is compact.' },
            { title: 'The first pass', tag: 'after winning it', body: 'Choose between a quick forward ball to a runner and a safe pass that keeps the ball and lets the team rebuild.' },
          ],
        },
      ],
    },
    {
      id: 'defend',
      title: 'Defending phases',
      lead: 'Where the team chooses to win the ball.',
      blocks: [
        {
          t: 'table',
          head: ['Block', 'Where the team defends', 'Idea', 'Risk'],
          rows: [
            ['High press', 'Opponent’s defensive third and midfield', 'Win the ball close to goal; deny a clean build-up', 'Space behind the defence if the press is bypassed'],
            ['Mid-block', 'Around the halfway line', 'Compact lines, block the middle, press at triggers', 'Concedes territory; needs good transitions'],
            ['Low block', 'In or near the penalty area', 'Deny space behind and in the box; counter on the break', 'Gives the opponent the ball, crosses and shots'],
          ],
        },
        { t: 'p', text: 'Teams change blocks in the match: pressing high when leading or when the opponent is weak in possession, dropping when protecting a lead or after a red card. The choice of block determines which players need to be fast, which need to be tall and where the team’s transitions start.' },
        {
          t: 'pitch',
          title: 'Three defensive blocks',
          view: 'full',
          zones: [
            { x: 52, y: 0, w: 48, h: 100, label: 'high press zone', tone: 'hot' },
            { x: 30, y: 0, w: 22, h: 100, label: 'mid-block', tone: 'neutral' },
            { x: 0, y: 0, w: 30, h: 100, label: 'low block', tone: 'cool' },
          ],
          caption: 'The zones show where a team defending the left-hand goal tries to win the ball: the higher the block, the closer to the opponent’s goal the ball is won.',
        },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Bangsbo, J. & Peitersen, B. (2000). *Soccer Systems and Strategies*. Human Kinetics.',
    'Coerver, W. and DFB coaching materials on phases of play; UEFA Technical Reports on the Champions League and European Championships (uefa.com).',
  ],
  related: ['sports/football/game/pitch-zones-and-half-spaces', 'sports/football/tactics/pressing-and-gegenpressing', 'sports/football/tactics/transitions-and-counter-attacks'],
}

export default guide
