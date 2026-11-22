import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Arrigo Sacchi never played professional football; he sold shoes before coaching. Appointed by Silvio Berlusconi at Milan in 1987, he built a team of Dutch and Italian stars (Gullit, Van Basten, Rijkaard, Baresi, Maldini, Costacurta, Ancelotti) into the best side in Europe by changing how they defended: the whole team moved as a unit, in a block no more than 25 metres from front to back, pressing and stepping up together to catch opponents offside. Milan won the European Cup in 1989 and 1990. Fabio Capello, who succeeded him, kept the structure and added more flexibility; his Milan won three Serie A titles in a row and the 1994 Champions League. This guide explains the system and why it changed the game.',
  nutshell: [
    '**Sacchi’s Milan (1987–91)**: a 4-4-2 that moved as a unit, with zonal marking, a high line and the **offside trap**.',
    '**Compactness**: about **25 metres** (the distance between the last defender and the first attacker) when defending; the aim was to make the space small and the opponent’s time short.',
    '**Pressing** the ball with several players at once, in a coordinated way; **zonal marking** replaced man-marking.',
    'Milan won the **European Cup in 1989 (4–0 v Steaua) and 1990 (1–0 v Benfica)**.',
    '**Capello** (1991–96) won three Serie A titles in a row and the **1994 Champions League** (4–0 v Barcelona).',
  ],
  sections: [
    {
      id: 'system',
      title: 'The system',
      lead: 'A block that moves as one.',
      blocks: [
        {
          t: 'pitch',
          title: 'Sacchi’s block: the whole team within about 25 metres',
          view: 'full',
          players: [gk(40, 50), a(48, 12, 'RB'), a(46, 38, 'CB'), a(46, 62, 'CB'), a(48, 88, 'LB'), a(58, 14, 'M'), a(58, 40, 'M'), a(58, 62, 'M'), a(58, 86, 'M'), a(68, 34, 'F'), a(68, 66, 'F'), b(70, 50, 'B'), b(66, 28), b(66, 72)],
          zones: [{ x: 44, y: 4, w: 28, h: 92, label: 'about 25 m from back to front', tone: 'cool' }],
          caption: 'The team stood in a block between the keeper’s sweeping area and the front line, so that the opponent had little space between the lines. Milan’s keeper played as a sweeper at the back of the block.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Move as a unit', body: 'The ball determined the position of every player: the block shifted sideways and stepped forward together.' },
            { title: 'Press the ball', body: 'When the ball reached a certain zone, the nearest players closed it down while the others tightened the space around.' },
            { title: 'Hold a high line', body: 'The defenders stepped up to catch attackers offside, led by Baresi.' },
            { title: 'Attack with spacing', body: 'On winning the ball the team spread wide and deep, using Van Basten’s movement and Gullit’s power.' },
          ],
        },
        {
          t: 'pitch',
          title: 'The pressing zone: the block pushes up as the ball moves',
          view: 'full',
          players: shape([4, 4, 2], { team: 'a', shift: 14 }),
          caption: 'The whole block pushes up to press in the opponent’s half; the sweeper-keeper covers behind. Sacchi trained the movements without the ball, in what he called "shadow play" with no opponents.',
        },
      ],
    },
    {
      id: 'capello',
      title: 'Capello and the legacy',
      lead: 'From the system to the evolution.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Capello’s Milan', tag: '1991–96', body: 'Kept the system but gave more room to the individual: three consecutive Serie A titles (1992–94), the 1994 Champions League final win over Barcelona (4–0) and an unbeaten run of 58 league matches (1991–93).' },
            { title: 'The influence', tag: 'on the modern game', body: 'Zonal marking and the press spread through Europe; Guardiola, Klopp, Rangnick and Mourinho acknowledge Sacchi’s effect.' },
            { title: 'Shadow play', tag: 'training method', body: 'Practising the movement of the team in 11 v 0 exercises, so the shape becomes automatic.' },
            { title: 'Lobanovskyi’s Dynamo Kyiv', tag: 'the parallel', body: 'A similar system had been developed in the Soviet Union by Valeriy Lobanovskyi, with a scientific approach to pressing; Sacchi’s version reached western Europe.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Sacchi quote', text: 'Sacchi’s often-quoted reply to the criticism that he had never been a professional player: "A jockey doesn’t need to have been a horse." The point is that coaching depends on ideas and organisation rather than playing ability.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Sacchi, A. interviews and Milan official histories (acmilan.com); Capello, F. biography accounts.',
    'UEFA European Cup finals archive 1989, 1990, 1994 (uefa.com).',
  ],
  related: ['sports/football/tactics/pressing-and-gegenpressing', 'sports/football/tactics/offside-trap-and-defensive-lines', 'sports/football/matches/milan-barcelona-1994'],
}

export default guide
