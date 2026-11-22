import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'In August 2015 bookmakers offered 5,000–1 against Leicester City winning the Premier League. They had avoided relegation the previous season only by winning seven of their last nine matches, and they had just appointed Claudio Ranieri, who had been dismissed by the Greek national team the year before. Nine months later they were champions with 81 points. The story is often told as a fairy tale, but it had a tactical shape: a compact 4-4-2 (often drawn as 4-4-1-1) that defended deep, a pair of midfielders in N’Golo Kanté and Danny Drinkwater who won the ball, and a front line of Jamie Vardy, Riyad Mahrez and Shinji Okazaki that counter-attacked at speed. This guide analyses the team, the numbers and the role of luck.',
  nutshell: [
    '**2015–16**: Leicester won the Premier League with **81 points** (23 wins, 12 draws, 3 defeats), a goal difference of **+32**, at pre-season odds of **5,000–1**.',
    'The shape: a **4-4-1-1** with **Kanté and Drinkwater** in the centre, **Mahrez and Albrighton** wide, **Okazaki** behind **Vardy**, and **Wes Morgan and Robert Huth** at centre-back.',
    '**Low possession** for a champion (often around 40–45 per cent), many **counter-attacks**, **few injuries** (a settled team of about 14 players) and an excellent **home record**.',
    '**Vardy** scored 24 goals, including goals in 11 consecutive league matches (a Premier League record); **Mahrez** won the PFA Player of the Year.',
    'Part of the story was **luck**: a stable team, a weak year for the traditional top clubs and favourable results; xG-based models rated Leicester highly but not as the best team.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'The shape and style',
      lead: 'A compact block and a fast counter.',
      blocks: [
        {
          t: 'pitch',
          title: 'Leicester’s 4-4-1-1 without the ball',
          view: 'full',
          players: [gk(6, 50), a(22, 12, 'S'), a(20, 38, 'H'), a(20, 62, 'M'), a(22, 88, 'F'), a(34, 20, 'M'), a(34, 42, 'K'), a(34, 58, 'D'), a(34, 80, 'A'), a(50, 50, 'O'), a(58, 50, 'V'), b(56, 30), b(56, 70), b(44, 50)],
          zones: [{ x: 16, y: 6, w: 38, h: 88, label: 'compact block, close lines', tone: 'cool' }],
          caption: 'Two banks of four stayed close together; Kanté and Drinkwater covered the central space; Okazaki pressed and dropped; Vardy waited for the ball to be won.',
        },
        {
          t: 'pitch',
          title: 'A Leicester counter-attack: the ball won, Vardy runs in behind',
          view: 'full',
          players: [a(40, 40, 'K'), a(58, 20, 'M'), a(66, 50, 'V'), a(54, 66, 'O'), b(72, 30), b(72, 70), b(64, 50), gk(94, 50)],
          arrows: [{ from: [40, 40], to: [58, 22], kind: 'pass' }, { from: [58, 20], to: [74, 44], kind: 'pass' }, { from: [66, 50], to: [86, 46], kind: 'run' }],
          caption: 'Kanté wins the ball; a quick pass to Mahrez on the wing; a through ball into the space for Vardy. The attack took seconds, against opponents who had pushed forward.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Kanté', tag: 'the engine', body: 'Led the league for tackles and interceptions in the season; his range allowed Drinkwater to pass.' },
            { title: 'Vardy', tag: 'the runner', body: 'Speed behind the line; 24 league goals and a record of goals in 11 consecutive matches.' },
            { title: 'Mahrez', tag: 'the creator', body: 'A dribbler who cut inside from the right: 17 goals and 11 assists; PFA Player of the Year.' },
            { title: 'Stability', tag: 'fitness', body: 'A settled team with few injuries: about 14 players made most of the appearances.' },
          ],
        },
      ],
    },
    {
      id: 'numbers',
      title: 'The numbers and the luck',
      lead: 'What the statistics said.',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'Leicester 2015–16', 'Comment'],
          rows: [
            ['Points', '81 (23W 12D 3L)', 'Ten points ahead of second-placed Arsenal'],
            ['Goals for and against', '68 for, 36 against', 'The league’s third-highest scorers'],
            ['Average possession', 'about 42%', 'Among the lowest in the league for a top team'],
            ['Counter-attack goals', 'many', 'One of the league’s highest numbers of goals from counters'],
            ['Pre-season odds', '5,000–1', 'Reflected the previous season and the squad’s modest wages'],
          ],
          caption: 'Approximate figures as commonly reported; see the sources for exact numbers.',
        },
        { t: 'p', text: 'Expected-goals models of the season rated Leicester’s performances as strong but below their points total: they were a good team that also had good fortune, with a settled lineup and few injuries. The league was open that year: Chelsea, the previous champions, collapsed under Mourinho; Manchester City and Manchester United were in transition, and the traditional top clubs were unusually inconsistent. The conditions were unusual, and the team’s success was no less real.' },
        { t: 'callout', tone: 'tip', title: 'A lesson in styles', text: 'Leicester showed that a team without the ball can win the league if it defends compactly, finishes its chances and is fit. It also showed the limits: the following year the team conceded more, Kanté was sold and the title was not defended.' },
      ],
    },
  ],
  sources: [
    'Premier League. 2015–16 season records (premierleague.com).',
    'Wilson, J. (2008, updated). *Inverting the Pyramid*. Orion; Cox, M. (2019). *Zonal Marking*. Nation Books.',
    'Statsbomb, Opta and The Athletic: analyses of Leicester’s title (statsbomb.com; theathletic.com).',
    'Ranieri, C. and Vardy, J.: interviews (BBC Sport, Sky Sports).',
  ],
  related: ['sports/football/schools/english-football-ferguson-wenger-and-after', 'sports/football/tactics/transitions-and-counter-attacks', 'sports/football/tactics/low-block-and-compactness'],
}

export default guide
