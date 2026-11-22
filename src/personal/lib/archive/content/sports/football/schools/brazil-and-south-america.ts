import type { Guide } from '../../../../guide'
import { a, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'South America’s football grew from a different tradition. Brazil took the European game and added the samba of individual skill; Argentina divided between two philosophies, the romantic and the pragmatic; Uruguay won the first World Cup in 1930 with the fierce spirit called garra charrúa. Brazil’s 1958 World Cup win introduced the 4-2-4 to the world, and the 1970 team, probably the best in the history of the tournament, showed how skill and structure could combine. This guide covers jogo bonito, Brazil 1958 and 1970, the Menotti–Bilardo split in Argentina, Uruguayan garra and the contribution of futsal to the modern game.',
  nutshell: [
    '**Brazil 1958** (Sweden) won the World Cup with a **4-2-4** that Zagallo, playing on the left, dropped back to make a 4-3-3 when defending; Pelé was 17.',
    '**Brazil 1970** (Mexico) combined skill with structure: Pelé, Tostão, Jairzinho, Rivelino, Gérson and Carlos Alberto; they beat Italy 4–1 in the final.',
    'Argentina’s two schools: **Menotti** (La Nuestra, expressive; World Cup 1978) and **Bilardo** (results first, 3-5-2, man-marking; 1986 with Maradona).',
    '**Uruguay’s garra charrúa**: grit, competitiveness and tactical cunning, from the 1930 and 1950 World Cups.',
    '**Futsal** (indoor five-a-side) has produced many Brazilian stars: small spaces, quick passing and close control.',
  ],
  sections: [
    {
      id: 'brazil',
      title: 'Brazil: 4-2-4 and the beautiful game',
      lead: 'From 1958 to 1970.',
      blocks: [
        {
          t: 'pitch',
          title: 'Brazil 1958: the 4-2-4 that became a 4-3-3',
          view: 'full',
          players: shape([4, 2, 4], { team: 'a' }),
          caption: 'Four defenders, two midfielders (Didi and Zito) and four forwards. When defending, the left winger (Zagallo) dropped back into midfield to make a 4-3-3, giving the team balance.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: '1958', tag: 'Feola, Sweden', body: 'Brazil’s first World Cup; Pelé (17), Garrincha, Didi, Vavá and Zagallo; they beat Sweden 5–2 in the final.' },
            { title: '1962', tag: 'Chile', body: 'Brazil retained the title without the injured Pelé; Garrincha’s dribbling decided the tournament.' },
            { title: '1970', tag: 'Zagallo, Mexico', body: 'Six wins out of six; the 4–1 final against Italy includes Carlos Alberto’s goal, the finish of a team move involving most of the outfield players.' },
            { title: 'Jogo bonito', tag: 'the beautiful game', body: 'A phrase associated with Brazilian skill and flair; the structure behind it (full-backs as attackers, midfield balance) is less often noted.' },
          ],
        },
      ],
    },
    {
      id: 'argentina',
      title: 'Argentina: Menotti and Bilardo',
      lead: 'Two philosophies, two World Cups.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Menotti ("Menottismo")', 'Bilardo ("Bilardismo")'],
          rows: [
            ['World Cup', '1978 (hosts)', '1986 (Mexico) and runners-up in 1990'],
            ['Idea', 'Football as an art; possession and creativity; "La Nuestra"', 'Football as a competition; results first; discipline and preparation'],
            ['Shape', '4-3-3 with a free midfielder and Kempes up front', '3-5-2 or 4-4-2 with a libero and man-marking; Maradona as the free creator'],
            ['Key player', 'Mario Kempes, Osvaldo Ardiles', 'Diego Maradona'],
          ],
        },
        { t: 'p', text: 'The debate between the two schools, art versus results, still defines Argentine football. Later coaches have drawn from both: Marcelo Bielsa’s intense, man-oriented football is a development of the idea that preparation and ideology win; Lionel Scaloni’s 2022 World Cup winners combined a compact structure with the individual brilliance of Messi.' },
      ],
    },
    {
      id: 'futsal',
      title: 'Uruguay, futsal and the street',
      lead: 'Where the skill comes from.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Garra charrúa', tag: 'Uruguay', body: 'Uruguay won the first World Cup (1930) and again in 1950 against Brazil in the Maracanã; a national style based on competitiveness and resilience.' },
            { title: 'Futsal', tag: 'indoor five-a-side', body: 'Originated in Montevideo in the 1930s; in Brazil it became a training ground: a small, heavy ball and tight spaces build close control and quick decisions.' },
            { title: 'Street and beach football', tag: 'informal', body: 'Unstructured games in small spaces; many Brazilian and Argentine stars learned the game this way before joining academies.' },
            { title: 'Exports', tag: 'Europe', body: 'Brazilian and Argentine players became the models for European club sides in the 1990s and 2000s.' },
          ],
        },
        { t: 'pitch', title: 'A futsal-style interchange in tight space', view: 'attack', players: [a(78, 30), a(82, 44), a(78, 58), a(88, 50)], arrows: [{ from: [78, 30], to: [82, 44], kind: 'pass' }, { from: [82, 44], to: [78, 58], kind: 'pass' }, { from: [78, 58], to: [88, 50], kind: 'pass' }], caption: 'Futsal teaches players to rotate and pass quickly in small spaces: the same patterns appear in the final third of an eleven-a-side game.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Wilson, J. (2016). *Angels with Dirty Faces: The Footballing History of Argentina*. Orion.',
    'Goldblatt, D. (2006). *The Ball Is Round: A Global History of Football*. Penguin.',
    'FIFA World Cup official records (fifa.com).',
  ],
  related: ['sports/football/matches/brazil-italy-1970', 'sports/football/schools/bielsa-gasperini-and-man-oriented-football', 'sports/football/schools/early-systems'],
}

export default guide
