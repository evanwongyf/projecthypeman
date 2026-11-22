import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Football’s tactics began with a single idea: attack. The first organised teams in the 1860s and 1870s ran with the ball and passed little; by the 1880s the pyramid (2-3-5) gave the game its first lasting formation. The offside law changed in 1925, and Herbert Chapman’s Arsenal answered with the WM. In the 1950s Hungary’s Golden Team, led by Gusztáv Sebes with Nándor Hidegkuti as a deep centre-forward, showed in two matches against England that a team that moved and interchanged could beat a team that stayed in its shape. This guide traces the line from the pyramid to the Magical Magyars and explains why each change happened.',
  nutshell: [
    'The **2-3-5 pyramid** (two backs, three half-backs, five forwards) dominated from the 1880s to the 1920s.',
    'In **1925** the offside law changed from three opponents to two between the attacker and the goal; goals increased sharply and teams had to respond.',
    'Chapman’s Arsenal adopted the **WM (3-2-2-3)**: a centre-half dropped to become a third back, and two inside forwards dropped back to link.',
    'The **Hungarian Golden Team** of 1950–56 used a **withdrawn centre-forward** (Hidegkuti) and fluid interchange; they beat England 6–3 at Wembley in 1953 and 7–1 in Budapest in 1954.',
    'Hungary lost the **1954 World Cup final** to West Germany (3–2), but their ideas fed Brazil, the Netherlands and later schools.',
  ],
  sections: [
    {
      id: 'pyramid',
      title: 'The pyramid and the 1925 law change',
      lead: 'From 2-3-5 to the WM.',
      blocks: [
        {
          t: 'pitch',
          title: 'The pyramid: 2-3-5',
          view: 'full',
          players: shape([2, 3, 5], { team: 'a' }),
          caption: 'Two full-backs, three half-backs and five forwards. With only two defenders and an offside law that needed three opponents, a quick pass into the space behind them was hard to defend.',
        },
        {
          t: 'pitch',
          title: 'The WM: 3-2-2-3',
          view: 'full',
          players: [gk(6, 50), a(22, 20, 'B'), a(20, 50, 'CH'), a(22, 80, 'B'), a(40, 34, 'HB'), a(40, 66, 'HB'), a(56, 24, 'IF'), a(56, 76, 'IF'), a(74, 12, 'W'), a(76, 50, 'CF'), a(74, 88, 'W')],
          caption: 'Chapman’s WM: a centre-half became a third back; two half-backs formed the base of the "W" and two inside forwards the top of the "M". It was balanced, and for twenty years the standard in England.',
        },
        {
          t: 'levels',
          caption: 'The line of development.',
          items: [
            { name: '1860s–1880s', body: 'Dribbling games; passing grows in Scotland, with the Queen’s Park style.' },
            { name: '1880s–1925', body: 'The pyramid (2-3-5): Cambridge University and Corinthians, then Preston and Aston Villa.' },
            { name: '1925', body: 'IFAB changes the offside law (two opponents instead of three). Goals rise; Newcastle’s offside trap is neutralised.' },
            { name: '1925–1930s', body: 'Chapman and Charlie Buchan at Arsenal turn the centre-half into a stopper: the WM.' },
            { name: '1930s', body: 'In Italy, Vittorio Pozzo’s method and Austria’s Wunderteam (Hugo Meisl, Matthias Sindelar) play a more passing, fluid game.' },
          ],
        },
      ],
    },
    {
      id: 'hungary',
      title: 'Hungary’s Golden Team',
      lead: 'The deep-lying centre-forward.',
      blocks: [
        {
          t: 'pitch',
          title: 'Hungary 1953: a withdrawn centre-forward against a WM',
          view: 'full',
          players: [a(30, 30, 'HB'), a(30, 70, 'HB'), a(50, 50, 'H'), a(60, 30, 'K'), a(60, 70, 'P'), a(72, 12, 'W'), a(72, 88, 'W'), b(56, 50, 'CH'), b(50, 28, 'B'), b(50, 72, 'B'), b(70, 50, 'B')],
          arrows: [{ from: [50, 50], to: [70, 44], kind: 'dribble' }, { from: [60, 30], to: [78, 38], kind: 'run' }],
          caption: 'Hidegkuti (H) dropped into the space in front of England’s centre-half, who had no one to mark; if the centre-half followed him, Puskás and Kocsis ran into the space behind. England’s man-marking WM had no answer.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The 6–3 at Wembley', tag: '25 November 1953', body: 'Hungary became the first continental team to beat England at home; Hidegkuti scored a hat-trick and Puskás two. See the match guide.' },
            { title: 'The 7–1 in Budapest', tag: '23 May 1954', body: 'The rematch confirmed it was no accident. England’s tactics changed little for years afterward.' },
            { title: 'Interchange', tag: 'principle', body: 'Forwards swapped positions and dropped deep; defenders were not sure whom to mark: an idea taken up by Total Football.' },
            { title: 'The 1954 final', tag: 'Miracle of Bern', body: 'Hungary led West Germany 2–0 early but lost 3–2; the team did not win a World Cup.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why it mattered', text: 'The Golden Team demonstrated that an organised, mobile side with technical players could dominate a physically strong, positionally rigid team. English football began to look abroad; its coaches and clubs took longer to change than those of the Netherlands, Brazil and Italy.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Hesse-Lichtenberger, U. (2003). *Tor! The Story of German Football*; Hesse, U. on the Wunderteam and the Danube School.',
    'IFAB. Law changes of 1925 (offside) (theifab.com history).',
    'Hungarian Football Federation and FIFA archives on the 1953 and 1954 matches (fifa.com).',
  ],
  related: ['sports/football/matches/hungary-england-1953', 'sports/football/schools/total-football-and-ajax', 'sports/football/schools/brazil-and-south-america'],
}

export default guide
