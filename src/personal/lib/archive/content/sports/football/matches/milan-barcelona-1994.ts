import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The 1994 Champions League final in Athens was a contrast of ideas: Cruyff’s Barcelona, winners of four consecutive La Liga titles and European champions in 1992, against Fabio Capello’s Milan, champions of Italy three years in a row. Barcelona were favourites. Milan won 4–0. The match showed what a compact, well-drilled team could do to a more fluid one that left space between its lines: Milan took the lead through Daniele Massaro (twice), Dejan Savićević and Marcel Desailly, and Barcelona never recovered. This guide looks at the two systems, how Milan found the spaces and what the match meant for each side.',
  nutshell: [
    '**18 May 1994**, Olympic Stadium, Athens: **Milan 4–0 Barcelona**. Goals: Massaro 22’ and 45’, Savićević 47’, Desailly 58’.',
    'Barcelona (Cruyff) played an attacking **3-4-3** with Romário and Stoichkov; Milan (Capello) a compact **4-4-2** in two banks.',
    'The Barcelona **back three** was exposed by Milan’s runs and by space between defence and midfield.',
    'Milan defended **compactly** and counter-attacked quickly; Barcelona’s possession did not produce clear chances.',
    'The result ended Cruyff’s **Dream Team** era of dominance and confirmed Milan as the best team in Europe.',
  ],
  sections: [
    {
      id: 'shapes',
      title: 'The two systems',
      lead: 'A 3-4-3 against a 4-4-2.',
      blocks: [
        {
          t: 'pitch',
          title: 'Milan (blue, 4-4-2) against Barcelona (red, 3-4-3)',
          view: 'full',
          players: [...shape([4, 4, 2], { team: 'a', shift: -2 }), ...shape([3, 4, 3], { team: 'b', mirror: true, gk: false })],
          zones: [{ x: 40, y: 20, w: 16, h: 60, label: 'space between Barcelona’s lines', tone: 'hot' }],
          caption: 'Barcelona’s three defenders and four midfielders left a gap between the lines when the ball was lost; Milan’s forwards and wide midfielders ran into it. Milan’s two compact banks left Barcelona little room to combine.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Capello’s Milan', tag: 'compact', body: 'A back four that held a high line with the offside trap, a midfield that pressed together and a forward line of speed and movement.' },
            { title: 'Cruyff’s Barcelona', tag: 'attacking', body: 'A 3-4-3 with the keeper and defenders building from the back; the front line of Stoichkov, Romário and Amor.' },
            { title: 'The pressing contrast', tag: 'tempo', body: 'Milan pressed in the right moments and did not let Barcelona play through them.' },
            { title: 'Space', tag: 'the key', body: 'The match was decided by space: Milan had it in the final third; Barcelona did not.' },
          ],
        },
      ],
    },
    {
      id: 'goals',
      title: 'The goals',
      lead: 'Four goals, four lessons.',
      blocks: [
        {
          t: 'table',
          head: ['Minute', 'Scorer', 'What happened'],
          rows: [
            ['22', 'Massaro (1–0)', 'A move down the left; Massaro finished from close range'],
            ['45', 'Massaro (2–0)', 'A second goal just before half-time from a Milan counter-attack'],
            ['47', 'Savićević (3–0)', 'A lob over the goalkeeper Zubizarreta from the edge of the area, after a pass from Donadoni'],
            ['58', 'Desailly (4–0)', 'A shot from a corner routine, finished by a midfielder playing as a centre-back that night'],
          ],
          caption: 'A concise account; sources differ on small details of the build-up.',
        },
        {
          t: 'pitch',
          title: 'The counter-attack: Milan break at speed into the space behind Barcelona’s midfield',
          view: 'full',
          players: [a(48, 50, 'D'), a(66, 34, 'M'), a(66, 66, 'S'), a(52, 18, 'W'), b(54, 40), b(54, 60), b(70, 50), b(76, 30), b(76, 70), gk(94, 50)],
          arrows: [{ from: [48, 50], to: [66, 36], kind: 'pass' }, { from: [66, 66], to: [84, 54], kind: 'run' }, { from: [66, 34], to: [84, 46], kind: 'run' }],
          caption: 'On winning the ball in midfield, Milan played forward immediately; their runners arrived in the space left by Barcelona’s advanced defenders.',
        },
        { t: 'callout', tone: 'note', title: 'The aftermath', text: 'Cruyff had said before the match that Barcelona would win; Milan’s result is often seen as the end of the Dream Team’s peak. Both coaches left their clubs in 1995–96: Capello went to Real Madrid, Cruyff was dismissed in 1996.' },
      ],
    },
  ],
  sources: [
    'UEFA. Champions League 1993/94 final match report (uefa.com).',
    'Wilson, J. (2008). *Inverting the Pyramid*. Orion.',
    'Cruyff, J. (2016). *My Turn*. Macmillan; Capello, F. interviews in The Coaches’ Voice.',
  ],
  related: ['sports/football/schools/sacchi-and-the-modern-press', 'sports/football/schools/total-football-and-ajax', 'sports/football/tactics/offside-trap-and-defensive-lines'],
}

export default guide
