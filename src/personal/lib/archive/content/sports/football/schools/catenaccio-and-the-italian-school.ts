import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Italian football is the school of defence, and the word catenaccio (the "chain" or "bolt") is both its badge and its caricature. It was not invented in Italy: the Swiss coach Karl Rappan introduced the verrou ("bolt") with a sweeper behind man-markers in the 1930s, and Nereo Rocco (Milan) and Helenio Herrera (Inter) developed it in the 1950s and 1960s. Herrera’s Grande Inter won the European Cup in 1964 and 1965 with man-marking, a libero and lightning counter-attacks. Italian coaches later invented zonal marking and the diamond, and from Sacchi onwards produced the modern pressing game. This guide separates the myth of Italian football from the tactical record.',
  nutshell: [
    '**Catenaccio**: man-marking defenders, a **libero** (sweeper) behind them, a compact midfield and quick counter-attacks.',
    'Herrera’s Inter won the **European Cup in 1964 and 1965**; Rocco’s Milan won it in **1963**.',
    'Key figures: **Rappan** (verrou), **Rocco**, **Herrera**, **Trapattoni**, **Sacchi** and **Capello**, **Ancelotti**, **Lippi**, **Conte**, **Allegri**.',
    'Italian football has produced many tactical ideas besides defence: **zonal marking** (Sacchi), the **diamond**, the **trequartista**, the **regista** and the **3-5-2**.',
    'The stereotype misses the **fluidity** of the best Italian sides, but the emphasis on **defensive organisation** and **tactical discipline** is real.',
  ],
  sections: [
    {
      id: 'chain',
      title: 'The catenaccio system',
      lead: 'A libero behind a line of markers.',
      blocks: [
        {
          t: 'pitch',
          title: 'Herrera’s Inter: man-markers, a libero and a counter-attacking full-back',
          view: 'full',
          players: [gk(6, 50), a(14, 50, 'L'), a(22, 24, 'M'), a(22, 50, 'M'), a(22, 76, 'M'), a(34, 16, 'FB'), a(36, 40, 'H'), a(40, 64, 'H'), a(34, 86, 'FB'), a(60, 30, 'F'), a(66, 60, 'F'), b(28, 24), b(28, 50), b(28, 76)],
          arrows: [{ from: [34, 16], to: [58, 14], kind: 'run' }, { from: [36, 40], to: [60, 30], kind: 'pass' }],
          caption: 'Three man-markers, a libero, and two defensive midfielders: when the ball was won, a long pass or a quick combination sent the forwards and attacking full-backs (Facchetti) into space. Inter’s system was more fluid than its reputation.',
        },
        {
          t: 'levels',
          caption: 'A timeline of the Italian tradition.',
          items: [
            { name: '1930s', body: 'Rappan’s verrou in Switzerland; Pozzo’s method wins the 1934 and 1938 World Cups for Italy.' },
            { name: '1950s–60s', body: 'Rocco at Padova and Milan, Herrera at Inter develop catenaccio; Milan win the 1963 European Cup, Inter in 1964 and 1965.' },
            { name: '1970s–80s', body: 'Trapattoni’s Juventus combines man-marking with a libero (Scirea) and a flexible midfield; Italy win the 1982 World Cup.' },
            { name: '1987–1990s', body: 'Sacchi’s Milan revolutionises Italian football with zonal marking and the press (see the Sacchi guide).' },
            { name: '2000s–2020s', body: 'Lippi, Ancelotti, Conte and Allegri adapt: back threes, diamonds and the wing-back game.' },
          ],
        },
      ],
    },
    {
      id: 'legacy',
      title: 'What Italy gave the game',
      lead: 'Beyond defending.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The libero', tag: 'sweeper', body: 'The free defender behind the line: Picchi at Inter, Scirea at Juventus, Baresi at Milan (who played in a zonal back four).' },
            { title: 'Zonal marking', tag: 'Sacchi', body: 'Italian coaches changed from man-marking to zonal systems in the late 1980s: the basis of modern defending.' },
            { title: 'The regista', tag: 'playmaker', body: 'A deep-lying playmaker: Pirlo’s role at Milan and Juventus; Italian football’s answer to the number 10.' },
            { title: 'Defensive education', tag: 'the school of Coverciano', body: 'Italy’s coaching school at Coverciano produced generations of tactically sophisticated coaches.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'A fair summary', text: 'Italy has the world’s most thoughtful defending tradition; to reduce it to "parking the bus" is as unfair as to reduce Brazil to flair. Italian sides have won four World Cups and many European Cups with sophisticated tactics that included attacking football. The best Italian coaches have always adapted to their players.' },
        { t: 'table', head: ['Coach', 'Club or team', 'Contribution'], rows: [['Nereo Rocco', 'Milan', 'First Italian European Cup (1963); man-marking and counter-attack'], ['Helenio Herrera', 'Inter', 'Two European Cups (1964, 1965); professionalised preparation'], ['Giovanni Trapattoni', 'Juventus, Inter, Bayern', 'Six Serie A titles with Juventus; European trophies in three countries'], ['Arrigo Sacchi', 'Milan', 'Zonal pressing (see his guide)'], ['Marcello Lippi', 'Juventus, Italy', 'Champions League 1996; World Cup 2006'], ['Antonio Conte', 'Juventus, Chelsea, Inter', 'Back three and wing-back systems']] },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'Foot, J. (2006). *Calcio: A History of Italian Football*. Fourth Estate.',
    'Herrera, H. and Rocco, N.: records of the European Cup (uefa.com).',
  ],
  related: ['sports/football/schools/sacchi-and-the-modern-press', 'sports/football/tactics/marking-systems', 'sports/football/tactics/low-block-and-compactness'],
}

export default guide
