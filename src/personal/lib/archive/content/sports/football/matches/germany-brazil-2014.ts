import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'On 8 July 2014 in Belo Horizonte, Germany beat Brazil 7–1 in the World Cup semi-final. Germany scored five times in 29 minutes in the first half, a speed of collapse never seen at that stage of the tournament; Miroslav Klose’s goal made him the leading scorer in World Cup history (16). Brazil were without the injured Neymar and the suspended captain Thiago Silva, and played at home in front of a stunned crowd. Football people debated whether it was a tactical failure, a psychological one or both. This guide looks at the structure of the match: the loss of Brazil’s compactness, the way Germany exploited the spaces and the lessons about emotion and organisation.',
  nutshell: [
    '**8 July 2014**: **Germany 7–1 Brazil**. Goals: Müller 11’, Klose 23’, Kroos 24’ and 26’, Khedira 29’, Schürrle 69’ and 79’; Oscar 90’.',
    'Brazil lacked **Neymar** (injured) and **Thiago Silva** (suspended); Scolari used a **4-2-3-1** with Fernandinho and Luiz Gustavo as the pivot.',
    'Brazil’s lines **lost compactness** after the second goal; the distances between defence and midfield grew and Germany passed through the gaps.',
    'Germany scored **four goals in six minutes** (23’ to 29’) from quick passing through the middle.',
    'The match is a case study in how **psychology and structure** interact: once the structure broke, the team did not recover.',
  ],
  sections: [
    {
      id: 'setup',
      title: 'The structures',
      lead: 'A compact Germany; a stretched Brazil.',
      blocks: [
        {
          t: 'pitch',
          title: 'Germany (blue) and Brazil (red): the gaps in Brazil’s lines',
          view: 'full',
          players: [gk(6, 50), a(22, 12, 'L'), a(20, 38, 'B'), a(20, 62, 'H'), a(24, 88, 'H'), a(40, 40, 'K'), a(40, 60, 'S'), a(54, 50, 'K'), a(66, 24, 'Ö'), a(66, 76, 'M'), a(76, 50, 'K'), b(40, 40), b(40, 60), b(50, 20), b(50, 50), b(50, 80), b(30, 28), b(28, 50), b(30, 72), b(20, 14), b(20, 86)],
          zones: [{ x: 36, y: 20, w: 18, h: 60, label: 'space between Brazil’s lines', tone: 'hot' }],
          caption: 'Germany’s compact lines against Brazil’s stretched ones: when Brazil’s midfielders went forward, the gap in front of the defence widened and Müller, Kroos and Özil found room.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Brazil’s absences', tag: 'Neymar and Silva', body: 'The injured Neymar was Brazil’s main creator; Thiago Silva was the defensive leader. David Luiz, the stand-in captain, played more adventurously.' },
            { title: 'Germany’s approach', tag: 'organised pressing', body: 'Germany pressed Brazil’s build-up and played quickly through the middle; Kroos and Khedira were the key.' },
            { title: 'The emotional context', tag: 'a nation’s pressure', body: 'The pre-match emotion (a tearful anthem, the absence of Neymar) was widely thought to have affected Brazil’s concentration.' },
            { title: 'Klose’s record', tag: '16 World Cup goals', body: 'Klose’s goal, his 16th, passed Ronaldo’s 15 as the all-time World Cup top scorer.' },
          ],
        },
      ],
    },
    {
      id: 'collapse',
      title: 'Five goals in 29 minutes',
      lead: 'How the structure broke.',
      blocks: [
        {
          t: 'levels',
          caption: 'The first half in steps.',
          items: [
            { name: '11’ Müller 1–0', body: 'A corner from Kroos; Müller was left unmarked at the far post.' },
            { name: '23’ Klose 2–0', body: 'Klose scored on the follow-up after his first effort was saved.' },
            { name: '24’ Kroos 3–0', body: 'A fast move through the middle that Brazil’s midfield did not close down; Kroos finished a minute later.' },
            { name: '26’ Kroos 4–0', body: 'Another quick exchange between Germany’s midfielders; Brazil’s midfield did not pick up the runners.' },
            { name: '29’ Khedira 5–0', body: 'A pass from Özil and a finish into the net; the first-half collapse was complete.' },
          ],
        },
        {
          t: 'pitch',
          title: 'A Germany attack through the gap in Brazil’s midfield',
          view: 'full',
          players: [a(46, 50, 'K'), a(58, 36, 'Kh'), a(64, 56, 'Ö'), b(52, 40), b(52, 60), b(68, 30), b(68, 70), b(74, 50), gk(94, 50)],
          arrows: [{ from: [46, 50], to: [58, 38], kind: 'pass' }, { from: [58, 36], to: [72, 42], kind: 'run' }, { from: [64, 56], to: [72, 42], kind: 'pass' }],
          caption: 'Quick passes between Kroos, Khedira and Özil drew Brazil’s midfielders out of position, creating a one-on-one with the defence.',
        },
        { t: 'callout', tone: 'note', title: 'Tactics or psychology?', text: 'Both. Germany’s quick passing, rehearsed pressing and set-piece planning were excellent; Brazil’s defensive organisation failed when its leaders were missing and the early goals created panic. The match shows that structure is fragile when emotion overwhelms it.' },
      ],
    },
  ],
  sources: [
    'FIFA. 2014 FIFA World Cup semi-final match report (fifa.com).',
    'Honigstein, R. (2015). *Das Reboot*. Yellow Jersey Press (on Germany’s approach).',
    'The Guardian and The Coaches’ Voice analyses of the 7–1 (theguardian.com; coachesvoice.com).',
  ],
  related: ['sports/football/schools/klopp-rangnick-and-the-german-school', 'sports/football/tactics/low-block-and-compactness', 'sports/football/game/phases-of-play'],
}

export default guide
