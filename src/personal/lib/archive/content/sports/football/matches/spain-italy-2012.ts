import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Spain’s 4–0 win over Italy in the Euro 2012 final in Kiev was the largest margin in a European Championship final, and Spain became the first team to win three successive major tournaments (Euro 2008, World Cup 2010, Euro 2012). The game was also a tactical statement: Vicente del Bosque lined up with no recognised striker, using Cesc Fàbregas as a false nine in a 4-3-3 (or a 4-6-0), and the Italian 3-5-2 was pulled apart by the movement and passing of Xavi, Iniesta and Silva. This guide explains the shapes, why the Italian system struggled and the effect of Italy’s injury.',
  nutshell: [
    '**1 July 2012**, Kiev: **Spain 4–0 Italy**. Goals: Silva 14’, Alba 41’, Torres 84’, Mata 88’.',
    'Spain used **Fàbregas as a false nine** with Silva and Iniesta around him, an approach nicknamed **"4-6-0"** by commentators.',
    'Italy (Prandelli) played **3-5-2** with Pirlo as the regista; Spain’s passing pulled the three centre-backs and the wing-backs out of position.',
    'Italy’s **Motta** went off injured after their three substitutions were used, so Italy played the last half-hour with ten men.',
    'The goals came from **moves through the middle and down the left**, where Jordi Alba overlapped.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'Spain’s false nine and Italy’s 3-5-2',
      lead: 'Who marks whom?',
      blocks: [
        {
          t: 'pitch',
          title: 'Spain’s 4-3-3 with a false nine (blue) against Italy’s 3-5-2 (red)',
          view: 'full',
          players: [gk(6, 50, 'C'), a(24, 12, 'A'), a(22, 36, 'P'), a(22, 64, 'R'), a(24, 88, 'A'), a(40, 50, 'B'), a(54, 34, 'X'), a(54, 66, 'I'), a(70, 20, 'S'), a(66, 50, 'F'), a(70, 80, 'S'), b(30, 30), b(26, 50), b(30, 70), b(48, 10), b(48, 90), b(50, 38), b(50, 50), b(50, 62), b(62, 40), b(62, 60)],
          caption: 'Spain: Casillas; Arbeloa, Piqué, Ramos, Alba; Busquets; Xabi Alonso, Xavi, Iniesta, Silva; Fàbregas (false nine). Italy had three centre-backs and two wing-backs but no clear player to mark when Fàbregas dropped.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The false nine', tag: 'Fàbregas', body: 'When he dropped into midfield, the Italian centre-backs either followed (leaving space) or stayed and left him free to turn.' },
            { title: 'Midfield superiority', tag: 'Xavi, Xabi Alonso, Busquets', body: 'Spain’s five midfielders outnumbered Italy’s three in the centre; Italy could not press them.' },
            { title: 'Overlaps from the left', tag: 'Alba', body: 'Jordi Alba’s runs from left-back stretched the Italian right wing-back and created the second goal.' },
            { title: 'Italy’s limits', tag: 'Pirlo marked out', body: 'Spain’s press stopped Pirlo from setting the tempo, as he had in the group match against Spain.' },
          ],
        },
      ],
    },
    {
      id: 'goals',
      title: 'The goals',
      lead: 'Moves through the middle.',
      blocks: [
        {
          t: 'pitch',
          title: 'The first goal: Fàbregas to Silva',
          view: 'attack',
          players: [a(66, 50, 'F'), a(80, 32, 'S'), b(74, 38), b(74, 62), b(78, 50), gk(97, 50)],
          arrows: [{ from: [60, 50], to: [66, 50], kind: 'pass' }, { from: [66, 50], to: [82, 34], kind: 'pass' }, { from: [82, 34], to: [105, 48], kind: 'shot' }],
          caption: 'Fàbregas received the ball in the space in front of the Italian defence and threaded a pass to Silva, who headed in from close range.',
        },
        {
          t: 'table',
          head: ['Minute', 'Goal', 'Detail'],
          rows: [
            ['14', 'Silva (1–0)', 'A header from a Fàbregas cross from the right'],
            ['41', 'Alba (2–0)', 'A run beyond the defence after a pass from Xavi'],
            ['60', 'Motta injured', 'Italy had used all three substitutes and played with ten men'],
            ['84', 'Torres (3–0)', 'A substitute who had come on for Fàbregas, scored after a pass from Xavi'],
            ['88', 'Mata (4–0)', 'Another substitute, set up by Torres'],
          ],
          caption: 'Sources differ on small details of each build-up; the table gives the commonly reported sequence.',
        },
        { t: 'callout', tone: 'note', title: 'A caution on the "4-6-0"', text: 'The nickname made good headlines, but Spain’s shape was a conventional 4-3-3 in which the "nine" dropped deep. The true change was a degree of freedom: the system worked because of the technical quality of the players around the false nine, and because Spain pressed well after losing the ball.' },
      ],
    },
  ],
  sources: [
    'UEFA. EURO 2012 final match report (uefa.com).',
    'Wilson, J. (2008, updated). *Inverting the Pyramid*. Orion; Cox, M. (2019). *Zonal Marking*. Nation Books.',
    'Del Bosque, V. interviews on the 2012 team; The Guardian match report, 1–2 July 2012.',
  ],
  related: ['sports/football/schools/cruyff-guardiola-and-positional-play', 'sports/football/positions/forwards-and-wide-roles', 'sports/football/tactics/back-three-and-wing-backs'],
}

export default guide
