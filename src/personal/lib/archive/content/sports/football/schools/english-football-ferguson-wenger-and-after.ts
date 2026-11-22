import type { Guide } from '../../../../guide'
import { a, b, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'English football in the 1990s and 2000s was a rivalry between traditions. Alex Ferguson’s Manchester United refined the English 4-4-2 with wingers who attacked and midfielders who dominated; Arsène Wenger brought French methods and a passing game to Arsenal; José Mourinho arrived at Chelsea in 2004 and built a champion on a compact 4-3-3; Rafael Benítez’s Liverpool combined Spanish zonal marking with a resilient spirit; and in 2016 Claudio Ranieri’s Leicester won the title at odds of 5,000–1 with a compact 4-4-2 and counter-attacks. This guide covers the main English-based systems of the Premier League era and what each added.',
  nutshell: [
    '**Ferguson (1986–2013)**: 13 Premier League titles; the 4-4-2 with wide attackers (Giggs, Beckham); the **1999 treble**; later 4-3-3 and 4-2-3-1 (Ronaldo, Rooney) and the **2008 Champions League**.',
    '**Wenger (1996–2018)**: nutrition, French and Dutch players, and fluid passing; the **2003–04 Invincibles** (26 wins, 12 draws, no defeats).',
    '**Mourinho’s Chelsea (2004–05)**: a 4-3-3 with Makélélé as the anchor; 95 points and only 15 league goals conceded.',
    '**Benítez’s Liverpool**: zonal marking and a European-night mentality; the **2005 Champions League** (Istanbul).',
    '**Leicester 2015–16**: a 4-4-1-1 that won the title with about **81 points** and counter-attacks (see the case study).',
  ],
  sections: [
    {
      id: 'ferguson',
      title: 'Ferguson and the English 4-4-2',
      lead: 'Wings, pace and mentality.',
      blocks: [
        {
          t: 'pitch',
          title: 'Manchester United 1999: 4-4-2 with wide attackers',
          view: 'full',
          players: shape([4, 4, 2], { team: 'a', numbers: true }),
          caption: 'Schmeichel; Neville, Johnsen, Stam, Irwin; Beckham, Keane, Scholes, Giggs; Cole, Yorke (typical). The wide players attacked from the flanks and the central midfield combined strength and passing.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The treble', tag: '1999', body: 'The Premier League, FA Cup and Champions League in one season; the Champions League final was won with two goals in injury time against Bayern.' },
            { title: 'Evolving the system', tag: '2000s', body: 'Ferguson moved to 4-3-3 and 4-2-3-1 as continental sides dominated midfield; the 2008 team (Ronaldo, Rooney, Tevez) won the Champions League.' },
            { title: 'Mentality', tag: 'a signature', body: 'Teams that kept playing to the last minute: "Fergie time" became a phrase in English football.' },
            { title: 'Squad management', tag: 'longevity', body: 'Ferguson rebuilt the team several times over 27 years, keeping a core of players while introducing new ones.' },
          ],
        },
      ],
    },
    {
      id: 'wenger',
      title: 'Wenger, Mourinho and Benítez',
      lead: 'Three foreign coaches changed English football.',
      blocks: [
        {
          t: 'table',
          head: ['Coach', 'Club', 'Peak', 'Idea'],
          rows: [
            ['Arsène Wenger', 'Arsenal', 'Double 1998 and 2002; Invincibles 2003–04', 'Passing, movement, fitness and diet; Henry and Bergkamp combining'],
            ['José Mourinho', 'Chelsea', 'Titles 2005, 2006, 2015', 'Compact 4-3-3 with a holding midfielder; strong defence and quick counters'],
            ['Rafael Benítez', 'Liverpool', 'Champions League 2005', 'Zonal marking, organised defence, European tie preparation'],
            ['Claudio Ranieri', 'Leicester', 'Title 2015–16', 'Compact 4-4-1-1, counter-attacks, a strong spirit'],
            ['Pep Guardiola', 'Manchester City', 'Titles from 2018; the 2023 treble', 'Positional play (see its guide)'],
            ['Jürgen Klopp', 'Liverpool', 'Champions League 2019; Premier League 2020', 'Gegenpressing (see its guide)'],
          ],
        },
        {
          t: 'pitch',
          title: 'Mourinho’s Chelsea: 4-3-3 with an anchor',
          view: 'full',
          players: [{ x: 6, y: 50, team: 'gk' }, a(22, 12, 'RB'), a(20, 38, 'CB'), a(20, 62, 'CB'), a(22, 88, 'LB'), a(36, 50, 'M'), a(46, 30, 'L'), a(46, 70, 'D'), a(64, 10, 'W'), a(74, 50, '9'), a(64, 90, 'W'), b(56, 40), b(56, 60)],
          caption: 'Makélélé as the anchor protected the back four, Lampard ran into the box, and wide forwards (Robben, Duff) stretched the pitch. The team conceded only 15 league goals in 2004–05.',
        },
        { t: 'callout', tone: 'note', title: 'Benítez at Istanbul', text: 'Liverpool’s 2005 Champions League final, in which they came back from 3–0 down at half-time against Milan, is the most famous night of Benítez’s Liverpool; the match guide shows how the change to a back three and the pressing of Hamann and Gerrard worked.' },
      ],
    },
    {
      id: 'leicester',
      title: 'The 5000–1 champions',
      lead: 'Leicester 2015–16.',
      blocks: [
        {
          t: 'pitch',
          title: 'Leicester: a compact 4-4-1-1 that counter-attacked',
          view: 'full',
          players: shape([4, 4, 1, 1], { team: 'a', shift: -8 }),
          caption: 'Kanté and Drinkwater protected the back four; Mahrez and Albrighton provided width; Vardy ran in behind and Okazaki dropped to link. The team often had less possession than its opponents.',
        },
        { t: 'p', text: 'Leicester’s title came with about 81 points, a goal difference of +32 and a first-ever league title. The team had few injuries, a settled lineup and an unusual style: low possession for a champion, fast counter-attacks and a defence that conceded few chances. The case study guide gives the details.' },
      ],
    },
  ],
  sources: [
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Ferguson, A. (2013). *My Autobiography*. Hodder & Stoughton.',
    'Wenger, A. (2020). *My Life and Lessons in Red and White*. HarperCollins.',
    'Premier League official records (premierleague.com).',
  ],
  related: ['sports/football/matches/leicester-2015-16', 'sports/football/matches/liverpool-milan-2005', 'sports/football/schools/cruyff-guardiola-and-positional-play'],
}

export default guide
