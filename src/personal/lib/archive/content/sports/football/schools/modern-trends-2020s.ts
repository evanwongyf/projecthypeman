import type { Guide } from '../../../../guide'
import { a, b, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'By the 2020s the great tactical camps had blended. Pressing teams learned to keep the ball; possession teams learned to press; nearly every top side uses an in-possession shape that differs from its out-of-possession one. Four trends define the period: full-backs who move into midfield, midfielders who drop into the defence to create a "box", an emphasis on set pieces as a source of goals, and data-informed recruitment at clubs such as Brighton, Brentford and Liverpool. Mikel Arteta’s Arsenal, Xabi Alonso’s Bayer Leverkusen (an unbeaten 2023–24 Bundesliga season), Simone Inzaghi’s Inter and Roberto De Zerbi’s Brighton each added something. This guide describes the trends and the teams.',
  nutshell: [
    '**Hybrid shapes**: a 4-3-3 becomes a 3-2-5 or 2-3-5 in possession; the inverted full-back and the "box midfield" are standard.',
    '**Arteta’s Arsenal**: Zinchenko, Timber or White as inverted full-backs, Rice as the pivot and a front line of Saka, Ødegaard and Martinelli; a high press and a strong set-piece plan.',
    '**Alonso’s Leverkusen (2023–24)**: a 3-4-2-1 that won the Bundesliga unbeaten and the DFB-Pokal, with a 51-match unbeaten run ended by Atalanta in the Europa League final.',
    '**Set pieces** are coached as a separate discipline: Brentford, Arsenal and Liverpool employ specialists; throw-ins are routines.',
    '**Data and recruitment**: Brighton and Brentford buy young, undervalued players and sell them at a profit.',
  ],
  sections: [
    {
      id: 'shapes',
      title: 'Hybrid shapes and the box midfield',
      lead: 'The team has a different shape in each phase.',
      blocks: [
        {
          t: 'pitch',
          title: 'A box midfield: both full-backs move inside',
          view: 'full',
          players: [gk(6, 50), a(24, 30, 'CB'), a(24, 70, 'CB'), a(40, 38, 'FB'), a(40, 62, 'FB'), a(48, 50, '6'), a(56, 50, '8'), a(66, 8, 'W'), a(66, 92, 'W'), a(70, 50, '10'), a(80, 50, '9')],
          caption: 'The two full-backs move into midfield beside the pivot to form a box of four. The box controls the centre, protects against the counter and frees the wingers to hold the width.',
        },
        {
          t: 'pitch',
          title: 'A 3-4-2-1 (Leverkusen) in possession and a 5-4-1 out of it',
          view: 'full',
          players: shape([3, 4, 2, 1], { team: 'a' }),
          caption: 'The shape provides numbers in the middle and wing-backs for width; the two attacking midfielders between the lines combine with the striker and the wing-backs.',
        },
        {
          t: 'table',
          head: ['Team', 'Coach', 'Shape', 'Notes'],
          rows: [
            ['Arsenal', 'Arteta', '4-3-3 / 3-2-5', 'Inverted full-back, high press, set-piece routines, a title challenge 2022–25'],
            ['Bayer Leverkusen', 'Xabi Alonso', '3-4-2-1', 'Unbeaten Bundesliga title 2023–24; 51 matches unbeaten in all competitions'],
            ['Inter', 'Simone Inzaghi', '3-5-2', 'Champions League finals 2023 and 2025; wing-backs Dimarco and Darmian, a fluid front two'],
            ['Brighton', 'Graham Potter, De Zerbi', '4-2-3-1 / 3-2-5', 'A possession and build-up style; recruitment model'],
            ['Brentford', 'Thomas Frank', '4-3-3 / 3-5-2', 'Set pieces and data-based recruitment'],
            ['Real Madrid', 'Ancelotti', '4-3-1-2 / 4-4-2 diamond', 'A flexible system built around stars: Champions League 2022 and 2024'],
          ],
        },
      ],
    },
    {
      id: 'sp',
      title: 'Set pieces, throw-ins and data',
      lead: 'Marginal gains made routine.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Set-piece coaches', tag: 'specialists', body: 'Nicolas Jover at Arsenal and specialists at Brentford, Liverpool and elsewhere; routines, blockers and unusual delivery patterns produce a measurable share of goals.' },
            { title: 'Long throws and quick restarts', tag: 'throw-ins', body: 'Liverpool’s Thomas Grønnemark (2018–), Brentford and others treat throw-ins as a set piece.' },
            { title: 'Recruitment models', tag: 'data', body: 'Clubs use data to shortlist players, then scouts and video to check them; Brighton’s and Brentford’s sales of young players have funded their growth.' },
            { title: 'Load management', tag: 'sports science', body: 'GPS tracking and recovery protocols manage the physical cost of high-intensity systems (see the load-management guide).' },
          ],
        },
        { t: 'pitch', title: 'A free-kick or throw-in routine with a screen', view: 'attack', players: [a(96, 34, 'B'), a(96, 46, 'B'), a(92, 40, 'R'), a(90, 50, 'T'), b(95, 38), b(95, 44), b(94, 52), gk(98, 50)], arrows: [{ from: [104, 6], to: [93, 41], kind: 'cross' }], caption: 'Two blockers stand beside the defenders so that the runner can attack the ball without being marked: the legal screening that modern set-piece coaches design.' },
        { t: 'callout', tone: 'note', title: 'A shared language', text: 'The modern game’s tactical vocabulary (half-space, rest defence, third man, box midfield) is used across leagues, in part because coaches share ideas through courses, books and video. The result is that the top teams look more alike than their predecessors did; differences are in detail, quality and intensity.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008, updated ed.). *Inverting the Pyramid*. Orion.',
    'The Coaches’ Voice, The Athletic, Spielverlagerung.com: tactical analyses of Arsenal, Leverkusen, Inter and Brighton (coachesvoice.com; spielverlagerung.com).',
    'Bundesliga, UEFA and Premier League official records (bundesliga.com; uefa.com; premierleague.com).',
  ],
  related: ['sports/football/tactics/set-pieces', 'sports/football/tactics/back-three-and-wing-backs', 'sports/football/methods/scouting-and-analysis'],
}

export default guide
