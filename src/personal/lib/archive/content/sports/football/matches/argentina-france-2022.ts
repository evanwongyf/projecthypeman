import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'The 2022 World Cup final in Lusail on 18 December is regarded by many as the best ever played: Argentina led 2–0 after 36 minutes and appeared to be winning easily, France then scored twice in 97 seconds through Kylian Mbappé (80’ and 81’), Lionel Messi put Argentina ahead again in extra time (108’), Mbappé equalised from a penalty (118’) to complete his hat-trick, and Argentina won the shoot-out 4–2. This guide looks at the tactical shape of the match: Scaloni’s fluid 4-4-2, the left-wing role of Ángel Di María, Deschamps’s change at the 41st minute and the decisive effect of substitutes and fatigue.',
  nutshell: [
    '**18 December 2022**: **Argentina 3–3 France** after extra time; Argentina won **4–2 on penalties**.',
    'Goals: Messi (pen) 23’, Di María 36’; Mbappé (pen) 80’, 81’; Messi 108’; Mbappé (pen) 118’. **Mbappé** scored the first hat-trick in a World Cup final since 1966.',
    'Scaloni used a **fluid 4-4-2** with Di María on the left, De Paul, Fernández and Mac Allister in midfield and Messi and Álvarez up front.',
    'Deschamps made **two substitutions at 41 minutes** (Dembélé and Giroud off), an unusual admission that the plan was not working.',
    '**Fatigue and substitutes** changed the match: Argentina’s tiring players allowed France’s fresh forwards to take over the game in the last 10 minutes.',
  ],
  sections: [
    {
      id: 'shapes',
      title: 'The shapes',
      lead: 'A flexible 4-4-2 against a France in transition.',
      blocks: [
        {
          t: 'pitch',
          title: 'Argentina’s 4-4-2 (blue) against France (red)',
          view: 'full',
          players: [gk(6, 50, 'M'), a(22, 14, 'M'), a(20, 38, 'R'), a(20, 62, 'O'), a(22, 86, 'T'), a(44, 20, 'D'), a(40, 42, 'F'), a(40, 58, 'P'), a(44, 82, 'M'), a(66, 40, 'A'), a(66, 64, 'M'), b(36, 36), b(36, 64), b(50, 50), b(60, 30), b(60, 70), b(70, 50), b(24, 18), b(24, 82), b(20, 40), b(20, 60)],
          caption: 'Argentina’s system was built around a compact block and a dynamic front pair, with Messi free to drop. Di María on the left stretched France’s right side while Molina pushed up from right-back on the other flank.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Scaloni’s balance', tag: 'a mix', body: 'The 2022 team was compact and organised, relying on a strong midfield, quick transitions and the freedom of Messi to create and score.' },
            { title: 'Di María’s role', tag: 'the left wing', body: 'The winger’s speed and movement caused France’s right-back Koundé problems; he won the penalty and scored the second goal.' },
            { title: 'France’s early problems', tag: 'Dembélé and Giroud', body: 'Deschamps replaced Dembélé and Giroud after 41 minutes because France had not created chances and Dembélé had struggled defensively.' },
            { title: 'The second half', tag: 'France’s response', body: 'With Thuram and Kolo Muani on, France pressed higher; Mbappé’s two goals in 97 seconds exploited Argentina’s fatigue.' },
          ],
        },
      ],
    },
    {
      id: 'story',
      title: 'The match in phases',
      lead: 'Control, collapse and a shoot-out.',
      blocks: [
        {
          t: 'levels',
          caption: 'The sequence of events.',
          items: [
            { name: '0–36’', body: 'Argentina dominate: Messi scores a penalty (23’) after a foul by Dembélé on Di María; Di María finishes a fast counter (36’).' },
            { name: '41’', body: 'Deschamps replaces Dembélé and Giroud with Thuram and Kolo Muani.' },
            { name: '80–81’', body: 'Otamendi fouls Kolo Muani: Mbappé scores a penalty; then volleys a second after a pass from Thuram: 2–2.' },
            { name: '90–120’', body: 'Extra time: Messi scores (108’), Mbappé equalises with a penalty (118’) after a handball by Montiel.' },
            { name: 'Shoot-out', body: 'Messi, Dybala, Paredes and Montiel score for Argentina; Mbappé and Kolo Muani score for France, but Coman (saved) and Tchouaméni (wide) miss: 4–2.' },
          ],
        },
        {
          t: 'pitch',
          title: 'Di María’s goal: a fast counter-attack through the middle',
          view: 'full',
          players: [a(44, 50, 'M'), a(60, 50, 'A'), a(76, 18, 'D'), b(60, 36), b(60, 64), b(78, 50), gk(94, 50)],
          arrows: [{ from: [44, 50], to: [62, 48], kind: 'pass' }, { from: [60, 50], to: [76, 20], kind: 'pass' }, { from: [76, 18], to: [88, 34], kind: 'dribble' }, { from: [88, 34], to: [105, 46], kind: 'shot' }],
          caption: 'A sequence of passes carried Argentina from midfield to the final third in a few seconds; Di María, on the left, finished after a move involving Mac Allister and Álvarez.',
        },
        { t: 'callout', tone: 'note', title: 'The tactical lessons', text: 'The match showed the importance of substitutions (France’s changes at half-time and later), of fatigue management (Argentina’s legs went in the closing minutes) and of individual players who can change a game. The match swung twice in each direction, which is why an xG timeline of the game is a useful companion to the scoreline.' },
      ],
    },
  ],
  sources: [
    'FIFA. 2022 FIFA World Cup final match report (fifa.com).',
    'The Coaches’ Voice and The Athletic analyses of the final (coachesvoice.com; theathletic.com).',
    'Scaloni, L. and Deschamps, D.: post-match press conferences (FIFA and national federations).',
  ],
  related: ['sports/football/schools/brazil-and-south-america', 'sports/football/xg/xg-timelines-and-match-probability', 'sports/football/positions/forwards-and-wide-roles'],
}

export default guide
