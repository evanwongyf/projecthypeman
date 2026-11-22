import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'On 25 November 1953 England, who had never lost at home to a team from outside the British Isles, met Hungary at Wembley. Hungary, Olympic champions the previous year and unbeaten for nearly three years, won 6–3. The English newspapers called it the "match of the century", and the aftermath led English football to question its methods: the following May, in Budapest, Hungary won 7–1. The decisive tactical idea was Nándor Hidegkuti, a centre-forward who played deep, in the space in front of England’s centre-half, and whom the English defence did not know how to mark.',
  nutshell: [
    '**25 November 1953**, Wembley: **Hungary 6–3 England**; the first home defeat for England against a team from outside the British Isles and Ireland.',
    '**Hidegkuti scored a hat-trick** (the first goal after about 45 seconds); **Puskás** scored two, including the famous drag-back goal; **Bozsik** scored the sixth.',
    'England played the **WM**, with a man-marking centre-half (Harry Johnston) who followed Hidegkuti and left space behind him.',
    'The **rematch** in Budapest on 23 May 1954 ended **7–1** to Hungary.',
    'The matches showed the limits of rigid man-marking and the power of **interchange** and **technique**.',
  ],
  sections: [
    {
      id: 'setup',
      title: 'The two systems',
      lead: 'A WM against a fluid 4-2-4.',
      blocks: [
        {
          t: 'pitch',
          title: 'England’s WM and Hungary’s shape',
          view: 'full',
          players: [gk(6, 50, '1'), a(22, 22), a(20, 50, 'CH'), a(22, 78), a(40, 34), a(40, 66), a(56, 26), a(56, 74), a(72, 12), a(74, 50), a(72, 88), b(70, 50, 'H'), b(60, 30), b(60, 70), b(42, 50), b(34, 38), b(34, 62), b(24, 22), b(24, 78), b(20, 50)],
          caption: 'England (blue) in the WM; Hungary (red) with Hidegkuti (H) as a withdrawn centre-forward, two inside forwards ahead and fluid half-backs. The English centre-half had no opposing centre-forward to mark in the usual place.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Hidegkuti’s role', tag: 'the key', body: 'Playing as a deep-lying centre-forward, he received the ball in the gap in front of the defence. If the centre-half followed him, Puskás and Kocsis ran into the space behind; if not, Hidegkuti had time to shoot or pass.' },
            { title: 'England’s response', tag: 'man-marking', body: 'The centre-half Johnston followed Hidegkuti around the pitch, leaving the full-backs exposed and the defence disorganised.' },
            { title: 'Hungarian technique', tag: 'ball control', body: 'The Hungarians controlled the ball with precision and passed quickly, playing in a way the English players had not seen on a big stage.' },
            { title: 'The result', tag: 'significance', body: 'The score was 6–3 (Hidegkuti 3, Puskás 2, Bozsik 1; Mortensen, Sewell and Ramsey scored for England).' },
          ],
        },
      ],
    },
    {
      id: 'goal',
      title: 'Key moments',
      lead: 'The first goal and the drag-back.',
      blocks: [
        {
          t: 'pitch',
          title: 'Hidegkuti’s first goal after 45 seconds',
          view: 'attack',
          players: [b(66, 50, 'H'), a(76, 50, 'CH'), a(80, 36), a(80, 66), gk(97, 50)],
          arrows: [{ from: [66, 50], to: [84, 50], kind: 'dribble' }, { from: [84, 50], to: [105, 46], kind: 'shot' }],
          caption: 'Hidegkuti received the ball, advanced and shot from outside the area; the centre-half did not follow him in time and the goalkeeper had no chance.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Puskás’s drag-back', tag: 'the third goal', body: 'Pulling the ball back with the sole of his boot, Puskás turned Billy Wright and shot into the net, one of the most famous goals in the history of Wembley.' },
            { title: 'England’s reaction', tag: 'aftermath', body: 'The English press demanded reform; the Football Association’s coaching programme under Walter Winterbottom grew, but the English game changed slowly.' },
          ],
        },
      ],
    },
    {
      id: 'legacy',
      title: 'Consequences',
      lead: 'The rematch and the World Cup.',
      blocks: [
        {
          t: 'levels',
          caption: 'The sequence of events.',
          items: [
            { name: '1952', body: 'Hungary win Olympic gold in Helsinki.' },
            { name: '25 November 1953', body: 'Hungary 6–3 England at Wembley.' },
            { name: '23 May 1954', body: 'Hungary 7–1 England in Budapest.' },
            { name: 'July 1954', body: 'Hungary lose the World Cup final 3–2 to West Germany in Bern, after leading 2–0.' },
            { name: '1956', body: 'After the Hungarian uprising, many of the players leave; the team breaks up.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why it still matters', text: 'The 6–3 is often described as the match that ended English tactical isolation. Hungary’s ideas, a deep-lying forward, fluid positions and technical play, influenced Brazil, the Dutch school and the modern false nine.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Lewis, J. (2007). *Hungary 6–3 England* and Wilson’s chapter on the Magical Magyars; The Guardian and BBC archive reports of 26 November 1953.',
    'FIFA and Hungarian Football Federation records of the 1953 and 1954 matches (fifa.com).',
  ],
  related: ['sports/football/schools/early-systems', 'sports/football/positions/forwards-and-wide-roles', 'sports/football/matches/brazil-italy-1970'],
}

export default guide
