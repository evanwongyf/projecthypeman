import type { Guide } from '../../../../guide'
import { a, b, ball, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'On 21 June 1970 in the Estadio Azteca, Mexico City, Brazil beat Italy 4–1 to win their third World Cup. Many regard Mário Zagallo’s team as the finest to have played in a World Cup: Pelé, Tostão, Jairzinho, Rivelino, Gérson and Carlos Alberto, with a defence that was less secure but an attack that scored in every match. The match is remembered most for Carlos Alberto’s fourth goal, the finish of a move involving most of the outfield players. This guide looks at Brazil’s shape, how Italy’s catenaccio-influenced approach met a fluid attack, the turning point at half-time and the famous final goal.',
  nutshell: [
    '**21 June 1970**: **Brazil 4–1 Italy** (Pelé, Gérson, Jairzinho, Carlos Alberto; Boninsegna for Italy); Brazil won all six matches and the Jules Rimet trophy outright.',
    'Brazil played a **4-3-3** with Pelé, Tostão and Jairzinho up front and playmakers in midfield (Gérson, Rivelino).',
    'Italy, under Valcareggi, had a **libero** (Cera) and a man-marking system, and used the **staffetta** rotation of Mazzola and Rivera.',
    'The game was **1–1 at half-time**; Brazil took control in the second half, as Italy tired after their 4–3 semi-final against West Germany.',
    'The **fourth goal** by Carlos Alberto, a move of nine passes through the team, is among the most celebrated goals in World Cup history.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'Brazil’s shape and Italy’s plan',
      lead: 'A flexible 4-3-3 against a marking system.',
      blocks: [
        {
          t: 'pitch',
          title: 'Brazil 1970 (blue) and Italy (red)',
          view: 'full',
          players: [gk(6, 50, 'F'), a(24, 14, 'CA'), a(22, 38, 'B'), a(22, 62, 'PA'), a(26, 86, 'MM'), a(42, 40, 'C'), a(46, 60, 'G'), a(56, 24, 'J'), a(62, 50, 'T'), a(58, 76, 'R'), a(68, 50, 'P'), b(28, 28), b(28, 50), b(28, 72), b(18, 50, 'L'), b(44, 36), b(44, 64), b(52, 50)],
          caption: 'Brazil: Félix; Carlos Alberto, Brito, Piazza, Everaldo; Clodoaldo, Gérson; Jairzinho, Tostão, Pelé, Rivelino. Italy used man-marking with a libero. Pelé and Tostão rotated to confuse the markers.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Gérson and Clodoaldo', tag: 'the midfield', body: 'Clodoaldo shielded the defence while Gérson, with a long left foot, played the passes that opened the game.' },
            { title: 'Pelé and Tostão', tag: 'the attack', body: 'Tostão played as a false nine and dropped deep; Pelé created and scored; Jairzinho, on the right, scored in every match of the tournament.' },
            { title: 'Rivelino', tag: 'the left', body: 'A dribbler and free-kick taker with a powerful shot who cut inside from the left.' },
            { title: 'The defence', tag: 'the weakness', body: 'Brazil conceded in most matches (7 in 6 games), but their attack scored 19.' },
          ],
        },
      ],
    },
    {
      id: 'goals',
      title: 'The goals',
      lead: 'The fourth, a team move.',
      blocks: [
        {
          t: 'pitch',
          title: 'Carlos Alberto’s goal: the move from the left to the right-back',
          view: 'full',
          players: [a(36, 20, 'C'), a(44, 30, 'T'), a(52, 18, 'R'), a(64, 50, 'P'), a(70, 82, 'J'), a(84, 86, 'CA'), b(60, 40), b(62, 58), b(72, 66), gk(94, 50), ball(36, 20)],
          arrows: [{ from: [36, 20], to: [44, 30], kind: 'dribble' }, { from: [44, 30], to: [52, 20], kind: 'pass' }, { from: [52, 20], to: [64, 48], kind: 'pass' }, { from: [64, 50], to: [82, 86], kind: 'pass' }, { from: [84, 86], to: [105, 48], kind: 'shot' }],
          caption: 'Clodoaldo dribbled past four Italians in his own half; the ball went through Rivelino and Jairzinho to Pelé, who, looking to his right, rolled it into the path of Carlos Alberto, who struck it first time into the corner.',
        },
        {
          t: 'table',
          head: ['Minute', 'Goal', 'Detail'],
          rows: [
            ['18', 'Pelé 1–0', 'A header at the far post from a cross by Rivelino'],
            ['37', 'Boninsegna 1–1', 'An error by Brito allowed Boninsegna to score for Italy'],
            ['66', 'Gérson 2–1', 'A long-range left-footed shot'],
            ['71', 'Jairzinho 3–1', 'Scored in every match of the tournament, from a free kick by Gérson'],
            ['86', 'Carlos Alberto 4–1', 'The finish of the team move'],
          ],
        },
      ],
    },
    {
      id: 'why',
      title: 'Why 1970 is remembered',
      lead: 'Skill, freedom and structure.',
      blocks: [
        { t: 'p', text: 'The 1970 World Cup was the first broadcast in colour around the world, which gave Brazil’s yellow shirts and Pelé’s skill a global audience. The team’s style (the fluid rotation of Pelé, Tostão, Jairzinho and Rivelino) set a standard for attacking football. The defence, less secure, was covered by a strong midfield. Zagallo, who had played in the 1958 and 1962 teams, became the first person to win the World Cup as player and coach.' },
        { t: 'callout', tone: 'note', title: 'Context', text: 'Italy had played 120 minutes in the semi-final against West Germany (4–3) four days earlier, at altitude in Mexico City; the heat and altitude helped a Brazil team that had prepared specifically for them. Both facts should temper any view of the final as a simple triumph of style.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid*. Orion.',
    'Goldblatt, D. (2006). *The Ball Is Round: A Global History of Football*. Penguin.',
    'FIFA. 1970 FIFA World Cup official report and match records (fifa.com).',
  ],
  related: ['sports/football/schools/brazil-and-south-america', 'sports/football/positions/forwards-and-wide-roles', 'sports/football/schools/catenaccio-and-the-italian-school'],
}

export default guide
