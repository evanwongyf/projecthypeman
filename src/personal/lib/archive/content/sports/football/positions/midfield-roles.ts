import type { Guide } from '../../../../guide'
import { a, b } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Midfield is where a team’s idea is realised, and its vocabulary is the richest in football. The anchor shields the defence; the regista dictates tempo from deep; the box-to-box midfielder covers the grass between the boxes; the mezzala (half-winger) attacks the half-space from the side; and the number 10 receives between the lines. Different systems combine them: a 4-3-3 has a pivot and two eights, a 4-2-3-1 a double pivot and a ten, a diamond a point and a playmaker. This guide describes each role, who played it and what it asks for.',
  nutshell: [
    'The **anchor** (holding midfielder) protects the centre-backs and wins the ball; the **regista** is a deep playmaker who sets tempo.',
    'A **box-to-box** midfielder defends and attacks, covering large distances; a **mezzala** attacks the half-space from a wide central position.',
    'The **number 10** (trequartista) receives between the lines and creates; the **double pivot** pairs a defender and a passer.',
    'Systems use different combinations: **4-3-3** (one pivot, two eights), **4-2-3-1** (two pivots, one ten), **diamond** (point, two interiors, ten).',
    'Modern midfielders need both **pressing and positional** skills; specialists are rare.',
  ],
  sections: [
    {
      id: 'deep',
      title: 'The deep midfielders',
      lead: 'Anchor, regista and double pivot.',
      blocks: [
        {
          t: 'pitch',
          title: 'The anchor: shielding the centre-backs',
          view: 'defence',
          players: [a(14, 38, 'CB'), a(14, 62, 'CB'), a(30, 50, '6'), b(34, 50, '10'), b(40, 30), b(40, 70)],
          arrows: [{ from: [30, 50], to: [33, 50], kind: 'press' }],
          caption: 'The anchor stays between the opposing playmaker and the centre-backs, blocking the central pass and winning second balls. The "Makélélé role" at Chelsea in 2003–05 gave the position its modern name.',
        },
        {
          t: 'pitch',
          title: 'The regista: a deep playmaker dictates play',
          view: 'full',
          players: [a(20, 36, 'CB'), a(20, 64, 'CB'), a(36, 50, 'R'), a(52, 30, '8'), a(52, 70, '8'), a(72, 50, '9'), b(46, 40), b(46, 60)],
          arrows: [{ from: [36, 50], to: [72, 52], kind: 'pass' }, { from: [36, 50], to: [52, 30], kind: 'pass' }],
          caption: 'Pirlo for Milan and Juventus, and Xabi Alonso for Liverpool and Real Madrid, played as deep playmakers: they received from the defenders with time and passed over or through the opposing press.',
        },
        {
          t: 'table',
          head: ['Role', 'Examples', 'Key skills'],
          rows: [
            ['Anchor / holding midfielder', 'Claude Makélélé, Sergio Busquets, Rodri, N’Golo Kanté (in some roles)', 'Positioning, interceptions, simple passing'],
            ['Regista / deep playmaker', 'Andrea Pirlo, Xabi Alonso, Jorginho', 'Range of passing, vision, composure'],
            ['Double pivot partners', 'Xabi Alonso and Khedira, Kroos and Casemiro', 'Complementary: one covers, one builds'],
          ],
        },
      ],
    },
    {
      id: 'central',
      title: 'The central and attacking midfielders',
      lead: 'Eights and tens.',
      blocks: [
        {
          t: 'pitch',
          title: 'Box-to-box and mezzala runs',
          view: 'full',
          players: [a(34, 50, '6'), a(50, 36, 'M'), a(50, 64, 'B'), a(76, 50, '9'), b(46, 50), b(70, 30), b(70, 70)],
          arrows: [{ from: [50, 36], to: [72, 28], kind: 'run' }, { from: [50, 64], to: [38, 64], kind: 'run' }],
          caption: 'The mezzala (M) drifts into the half-space and attacks it; the box-to-box (B) supports at both ends. Gerrard, Lampard, Vidal and Barella are examples of the type.',
        },
        {
          t: 'pitch',
          title: 'The number 10 between the lines',
          view: 'attack',
          players: [b(64, 20), b(64, 40), b(64, 60), b(64, 80), b(78, 40), b(78, 62), a(72, 50, '10'), a(86, 50, '9'), a(60, 50, '6')],
          zones: [{ x: 66, y: 12, w: 12, h: 76, label: 'the pocket', tone: 'hot' }],
          arrows: [{ from: [60, 50], to: [72, 50], kind: 'pass' }, { from: [72, 50], to: [84, 52], kind: 'pass' }],
          caption: 'The ten receives in the pocket between the opponent’s midfield and defence, turns and plays the pass in behind. Zidane, Riquelme, Özil and De Bruyne played this role at different levels.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Number 8', tag: 'interior', body: 'Links defence and attack, makes late runs into the box and presses the opposing pivot.' },
            { title: 'Number 10', tag: 'creator', body: 'Often an extra forward; frequently asked to press the opposing holder too, which changes the type of player selected.' },
            { title: 'Mezzala', tag: 'half-winger', body: 'An Italian term for a central midfielder who plays from the half-space and attacks wide positions.' },
            { title: 'Interior', tag: 'Spanish term', body: 'A central midfielder in a positional-play side who moves between the lines and half-spaces.' },
          ],
        },
      ],
    },
    {
      id: 'systems',
      title: 'Midfields in different systems',
      lead: 'The same names, different jobs.',
      blocks: [
        {
          t: 'table',
          head: ['System', 'Midfield', 'Idea'],
          rows: [
            ['4-3-3', 'Pivot + two eights', 'A triangle, easy to rotate; pressing sides push the eights up'],
            ['4-2-3-1', 'Double pivot + ten', 'Defensive security with a creator; the pivot passes and covers'],
            ['4-4-2', 'Two centrals + two wide', 'Balance and width; two centrals can be outnumbered'],
            ['Diamond (4-3-1-2)', 'Point + two interiors + ten', 'Central dominance; no width from midfield'],
            ['3-5-2', 'Three centrals + wing-backs', 'Numbers in the middle; wing-backs for width'],
          ],
        },
        { t: 'dodont', do: ['Match the midfield to the team’s idea: a pressing side needs eights who run, a possession side needs passers', 'Use rotation so that the pivot is never alone', 'Look at a midfielder’s work off the ball as much as his passes'], dont: ['Assume the number on the shirt shows the role', 'Judge a holding midfielder by goals or assists', 'Forget that fitness decides whether box-to-box is realistic'] },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Pirlo, A. (2013). *I Think Therefore I Play*. BackPage Press.',
    'The Coaches’ Voice and Spielverlagerung: midfield role analyses (coachesvoice.com; spielverlagerung.com).',
  ],
  related: ['sports/football/positions/forwards-and-wide-roles', 'sports/football/tactics/half-spaces-and-overloads', 'sports/football/schools/cruyff-guardiola-and-positional-play'],
}

export default guide
