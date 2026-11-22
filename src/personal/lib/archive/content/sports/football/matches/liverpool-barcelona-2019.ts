import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Liverpool’s 4–0 win over Barcelona at Anfield on 7 May 2019 overturned a 3–0 first-leg defeat and sent them to the Champions League final, which they won against Tottenham. They did it without two of their front three, Mohamed Salah and Roberto Firmino, both injured; Divock Origi scored twice and substitute Georginio Wijnaldum twice in two minutes after Jordan Henderson and Trent Alexander-Arnold ran hard in midfield. The match is a lesson in pressing intensity, in the use of the crowd and in one of the most famous set-piece moments of recent years: a corner taken quickly by Alexander-Arnold to catch Barcelona’s defence turned away. This guide looks at the tactics and the details.',
  nutshell: [
    '**7 May 2019**, Anfield: **Liverpool 4–0 Barcelona** (Origi 7’ and 79’, Wijnaldum 54’ and 56’); first leg at Camp Nou, Barcelona won 3–0, so **4–3 on aggregate**.',
    'Without **Salah and Firmino**, Klopp played **Origi, Shaqiri and Mané** in attack; **Wijnaldum** came on for the injured Robertson at half-time.',
    'Liverpool **pressed high and hard**, forced Barcelona into errors and **won the second balls**.',
    'The fourth goal came from a **quick corner** by Alexander-Arnold to Origi while Barcelona’s defenders were looking away.',
    'Barcelona were **passive** after the goals; Messi, Suárez and Coutinho could not impose themselves.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'Klopp’s plan',
      lead: 'Press, intensity and the crowd.',
      blocks: [
        {
          t: 'pitch',
          title: 'Liverpool’s 4-3-3 press (blue) against Barcelona’s build-up (red)',
          view: 'full',
          players: [a(58, 14, 'S'), a(64, 50, 'O'), a(58, 86, 'M'), a(44, 50, 'H'), a(48, 30, 'F'), a(48, 70, 'M'), a(30, 12, 'R'), a(28, 38), a(28, 62), a(30, 88, 'A'), b(32, 30), b(32, 70), b(40, 50, 'B'), b(52, 38), b(52, 62), gk(6, 50), b(66, 30), b(66, 50), b(66, 70)],
          arrows: [{ from: [64, 50], to: [48, 44], kind: 'press' }, { from: [58, 14], to: [38, 22], kind: 'press' }, { from: [58, 86], to: [38, 78], kind: 'press' }],
          caption: 'The front three pressed Barcelona’s centre-backs and cut off Busquets; Henderson and Fabinho (or Wijnaldum) closed the midfield, and the full-backs pushed up. Barcelona were forced to play long.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Selection', tag: 'Salah, Firmino out', body: 'Klopp changed the front three: Origi through the middle, Shaqiri and Mané wide; Wijnaldum replaced Robertson at the break.' },
            { title: 'Intensity', tag: 'the high press', body: 'The pressing statistics showed Liverpool forcing a high number of turnovers; the crowd added pressure.' },
            { title: 'Henderson and Fabinho', tag: 'the midfield', body: 'The midfield won the second balls and slowed Barcelona’s attacks.' },
            { title: 'Barcelona’s state', tag: 'complacency', body: 'Barcelona, leading 3–0, looked uncertain: they failed to hold the ball and conceded the first goal after seven minutes.' },
          ],
        },
      ],
    },
    {
      id: 'goals',
      title: 'The goals',
      lead: 'Four goals, one famous corner.',
      blocks: [
        {
          t: 'table',
          head: ['Minute', 'Goal', 'Detail'],
          rows: [
            ['7', 'Origi (1–0)', 'A shot after a Henderson shot was saved and the rebound came to Origi'],
            ['54', 'Wijnaldum (2–0)', 'A shot after a move involving Shaqiri’s cross'],
            ['56', 'Wijnaldum (3–0)', 'A header from Shaqiri’s cross, two minutes later'],
            ['79', 'Origi (4–0)', 'From a quick corner by Alexander-Arnold'],
          ],
          caption: 'A summary of the commonly reported sequence; check match footage for details.',
        },
        {
          t: 'pitch',
          title: 'The corner: Alexander-Arnold plays it short and quickly',
          view: 'attack',
          players: [a(104, 2, 'A'), a(96, 36, 'O'), b(92, 40), b(94, 48), b(96, 56), gk(99, 50)],
          arrows: [{ from: [104, 2], to: [97, 34], kind: 'pass' }, { from: [96, 36], to: [105, 48], kind: 'shot' }],
          caption: 'While Barcelona’s defenders were still organising, Alexander-Arnold played the ball into the box and Origi, free, scored.',
        },
        { t: 'callout', tone: 'note', title: 'What it showed', text: 'The match is often cited as proof of the importance of mentality, but the tactics were also clear: intense pressing, quick second balls, and alertness at set pieces. Barcelona’s failure was as much a lesson in how not to manage a lead as Liverpool’s was in how to attack.' },
      ],
    },
  ],
  sources: [
    'UEFA. Champions League 2018/19 semi-final second leg match report (uefa.com).',
    'The Coaches’ Voice and The Athletic: analyses of the Anfield comeback (coachesvoice.com; theathletic.com).',
    'Klopp, J. interviews after the match (Liverpool FC official channels).',
  ],
  related: ['sports/football/schools/klopp-rangnick-and-the-german-school', 'sports/football/tactics/pressing-and-gegenpressing', 'sports/football/tactics/set-pieces'],
}

export default guide
