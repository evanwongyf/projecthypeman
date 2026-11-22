import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Defending deep is as old as the game and as old as the criticism of it. A team in a low block keeps all ten outfield players behind the ball, close together, and gives the opponent the ball and the width but not the space in the middle. The block is judged by two numbers: how compact it is (the distance between lines, and between the front and back players) and how it shifts when the ball moves. This guide shows how a low block is organised, why it can work, how teams attack it, and how the choice of block affects the kind of chances conceded.',
  nutshell: [
    'A **low block** defends in or near the penalty area, usually in two banks of four or three lines (4-4-2, 5-4-1, 4-5-1).',
    '**Compactness** means short distances: lines about 10 metres apart, the whole team in about 30 to 35 metres of depth, and width of about 40 metres.',
    'The block **shifts as a unit** towards the ball; the weak side stays tucked in and trusts the full-back to cover the switch.',
    'The cost is **territory and possession**: the opponent shoots more, but from poorer positions, and the team lives on counter-attacks and set pieces.',
    'To break a low block: **switch play quickly**, overload one side, **combine** in the half-spaces, **shoot** from distance and win **set pieces**.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'The shape of a low block',
      lead: 'Two banks of four, close together.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 4-4-2 low block shifting to the ball',
          view: 'defence',
          players: [gk(5, 50), a(16, 14, 'LB'), a(16, 38, 'CB'), a(16, 62, 'CB'), a(16, 86, 'RB'), a(26, 18, 'LM'), a(26, 40, 'CM'), a(26, 62, 'CM'), a(26, 82, 'RM'), a(36, 40, 'F'), a(36, 60, 'F'), b(42, 26, ''), b(48, 50), b(34, 80), b(28, 8)],
          zones: [{ x: 10, y: 8, w: 32, h: 84, label: 'compact block: ~30 m deep', tone: 'cool' }],
          caption: 'Ten outfield players occupy a space about 30 metres deep. The strikers force the opposing centre-backs wide and screen the pivot; the banks shift towards the ball.',
        },
        {
          t: 'math',
          tex: String.raw`g=\frac{W}{n}`,
          caption: 'The average gap between neighbouring defenders across the width W when n defenders share the line.',
          where: [{ sym: 'W', def: 'the width of the block (metres)' }, { sym: 'n', def: 'the number of players in the line' }, { sym: 'g', def: 'the average space per defender in the line (metres)' }],
          syntax: [{ sym: 'W/n', say: 'the width each defender must cover. Effect: five defenders instead of four cut the width per player by a fifth. Why: the same width is shared among more players.' }],
          worked: {
            title: 'A block 44 metres wide',
            steps: ['Back four: 44/4 = 11 m per defender.', 'Back five: 44/5 = 8.8 m per defender.', 'Reducing the width to 36 m (the block narrows towards the centre, trusting the full-backs to cover the flank) gives 9 m per defender in a back four.'],
            answer: 'A back five covers the width better, which is why teams drop to five when they are protecting a lead. But the cost is one fewer player in midfield or attack.',
          },
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it works, and what it costs',
      lead: 'Trading territory for space.',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'Effect'],
          rows: [
            ['Dense central zone', 'Few passes through the middle; opponents circulate around the block'],
            ['Opponent’s possession high, chances low', 'More shots but from further out and at worse angles; lower xG per shot'],
            ['More crosses conceded', 'The block invites the ball wide, where the defence has height and numbers in the box'],
            ['Counter-attacking threat', 'When the ball is won, there is space behind the opponent’s advanced full-backs'],
            ['Set pieces', 'Deep defending concedes more corners and free kicks near the box: set-piece defending must be strong'],
          ],
        },
        {
          t: 'pitch',
          title: 'What a low block invites: the ball goes wide',
          view: 'attack',
          players: [b(66, 8, 'W'), b(64, 30, '10'), b(60, 50, '6'), a(82, 30, 'CB'), a(84, 50, 'CB'), a(82, 70, 'CB'), a(76, 12, 'LB'), a(74, 86, 'RB'), a(74, 36, 'M'), a(74, 62, 'M'), gk(97, 50)],
          arrows: [{ from: [66, 8], to: [88, 40], kind: 'cross' }],
          caption: 'The opponent has width but little room in the middle. A cross into a box with more defenders than attackers wins the header more often for the defence.',
        },
      ],
    },
    {
      id: 'break',
      title: 'How to break a low block',
      lead: 'Five ideas.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Switch the play quickly', body: 'A fast switch to the weak side finds the winger one-on-one with a full-back who is still shifting.' },
            { title: 'Overload one side', body: 'Bring several players to one flank, then use the free player on the other.' },
            { title: 'Combine in the half-spaces', body: 'Quick one-twos and third-man runs between the banks, rather than crosses into a packed box.' },
            { title: 'Shoot from distance', body: 'A threat from range forces the block to step out; it gives the attackers space behind.' },
            { title: 'Use set pieces', body: 'A team that wins many corners and free kicks can score without breaking the block.' },
          ],
        },
        { t: 'pitch', title: 'Opponent against a low block: shape it forces', view: 'full', players: [...shape([3, 2, 5], { team: 'a' }).map((p) => ({ ...p, x: p.x + 8 })), ...shape([4, 4, 2], { team: 'b', mirror: true, gk: false }).map((p) => ({ ...p, x: p.x + 6 }))], caption: 'A team attacking a deep block commits many players forward in a 3-2-5 so that there are always attackers on each lane, with two spare defenders ready for the counter.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Coaches’ Voice and Spielverlagerung articles on low-block defending (coachesvoice.com; spielverlagerung.com).',
  ],
  related: ['sports/football/tactics/offside-trap-and-defensive-lines', 'sports/football/schools/simeone-and-pragmatic-defending', 'sports/football/tactics/transitions-and-counter-attacks'],
}

export default guide
