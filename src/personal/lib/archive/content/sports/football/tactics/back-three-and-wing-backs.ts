import type { Guide } from '../../../../guide'
import { a, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Back threes have returned repeatedly: Argentina’s 1986 side under Bilardo, Brazil’s 2002 World Cup winners under Scolari, Cruyff’s Barcelona, Conte’s Juventus and Chelsea, and Inzaghi’s Inter. A back three puts three centre-backs in a line with wing-backs providing the width, which makes the team narrow and strong in the centre but demanding on the wing-backs. In possession it can become a 3-2-5 with wing-backs as wingers; out of possession it becomes a 5-3-2 or 5-4-1. This guide shows the shapes, the matchups against four-at-the-back teams and the typical weaknesses.',
  nutshell: [
    'The **3-5-2**, **3-4-3** and **3-4-2-1** all use three centre-backs and wing-backs; out of possession the wing-backs drop to make a **back five**.',
    'The advantage: **an extra central defender** against a lone or paired strikers, and **wing-backs** to give width in attack.',
    'The weakness: the **wide channels** behind the wing-backs, and the heavy running demanded of them.',
    'Matchups: a **3-4-3 mirrors** a 4-3-3 differently, with wing-backs against full-backs and a back three against the front three.',
    'Famous users: **Conte** (Juventus 2011–14, Chelsea 2016–17, Inter 2019–21), **Inzaghi**, **Gasperini**, **Alonso** (Leverkusen 2023–24).',
  ],
  sections: [
    {
      id: 'shapes',
      title: 'The shapes',
      lead: 'In and out of possession.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 3-4-3: attacking shape',
          view: 'full',
          players: shape([3, 4, 3], { team: 'a' }),
          caption: 'Three centre-backs, four across the middle (two wing-backs and two central midfielders) and three forwards. The wing-backs push high and wide, giving the front three space to play inside.',
        },
        {
          t: 'pitch',
          title: 'The same team defending as a 5-4-1',
          view: 'full',
          players: [{ x: 6, y: 50, team: 'gk' }, a(20, 8, 'LWB'), a(20, 28, 'CB'), a(20, 50, 'CB'), a(20, 72, 'CB'), a(20, 92, 'RWB'), a(32, 24, 'M'), a(32, 42, 'M'), a(32, 58, 'M'), a(32, 76, 'M'), a(44, 50, '9')],
          caption: 'The wing-backs drop into the back line to make a back five, with a compact four of midfielders in front. The central channel is well covered and the wide areas have a full-back and a midfielder.',
        },
        {
          t: 'table',
          head: ['Formation', 'Idea', 'Famous use'],
          rows: [
            ['3-5-2', 'Two strikers, a packed midfield and wing-backs', 'Conte’s Juventus, Bilardo’s Argentina 1986, Inzaghi’s Inter'],
            ['3-4-3', 'Three forwards, wing-backs and two central midfielders', 'Conte’s Chelsea 2016–17 (title), Cruyff’s Barcelona'],
            ['3-4-2-1', 'Two attacking midfielders behind a striker', 'Alonso’s Leverkusen 2023–24, many modern sides'],
            ['5-3-2', 'A defensive shape with five at the back', 'Italy, Greece 2004, defensive underdogs'],
          ],
        },
      ],
    },
    {
      id: 'matchups',
      title: 'Why it works and where it is weak',
      lead: 'Numbers in the centre; stretched on the flanks.',
      blocks: [
        {
          t: 'pitch',
          title: '3-5-2 against 4-4-2: the numbers',
          view: 'full',
          players: [...shape([3, 5, 2], { team: 'a', wb: true }), ...shape([4, 4, 2], { team: 'b', mirror: true, gk: false })],
          zones: [{ x: 30, y: 20, w: 34, h: 60, label: 'centre: 3 v 2', tone: 'hot' }],
          caption: 'The 3-5-2 has three midfielders against two in the centre and three defenders against two strikers; the 4-4-2 has wingers who must track the wing-backs.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Wing-back fitness', tag: 'the key', body: 'A wing-back runs more than almost any other player: selection is based on stamina as well as skill.' },
            { title: 'The channel behind', tag: 'the weakness', body: 'When a wing-back is high, the space between him and the wide centre-back is open to counters; the wide centre-back must cover it.' },
            { title: 'Pressing from the front', tag: 'attack', body: 'A back three against a lone striker is an easy build-up; against two or three pressers it must use the pivot and goalkeeper.' },
            { title: 'Mirror matchups', tag: 'man-oriented', body: 'Against another back three, teams often man-mark across the pitch (as in Gasperini’s Atalanta), turning the match into a series of duels.' },
          ],
        },
        { t: 'dodont', do: ['Use the wide centre-backs to step out and cover the wing-back', 'Keep two central midfielders compact to shield the back three', 'Rotate wing-backs: the position is physically very demanding'], dont: ['Ask both wing-backs to attack together against a team that counters', 'Leave the lone striker without support from a second forward', 'Assume a back three is automatically defensive'] },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking: From Ajax to Zidane, the Making of Modern Soccer*. Nation Books.',
    'The Coaches’ Voice and The Athletic: analyses of Conte’s Chelsea, Inzaghi’s Inter and Alonso’s Leverkusen (coachesvoice.com).',
  ],
  related: ['sports/football/positions/full-backs-and-wing-backs', 'sports/football/positions/centre-backs', 'sports/football/schools/modern-trends-2020s'],
}

export default guide
