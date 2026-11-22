import type { Guide } from '../../../../guide'
import { a, b, gk } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'Positional play (juego de posición) is the most developed system for attacking a defence with the ball. Its roots are in Cruyff’s Barcelona and the Dutch school, and its modern form was perfected by Pep Guardiola at Barcelona (2008–12), Bayern Munich and Manchester City. The principles are simple to state: occupy the five lanes, keep players spread so that every pass has an option, create a free man through the movement of the ball, and keep a structure behind it. The popular term for the style, tiki-taka, was a name Guardiola and Xavi disliked, since the idea is not passing for its own sake but passing to move the opponent. This guide explains the principles, the team shape (2-3-5 and 3-2-4-1), the great Barcelona and Spain sides, Bayern and City.',
  nutshell: [
    '**Positional play**: players occupy fixed zones of the pitch; the ball moves so that the opponent’s shape is pulled apart and a **free man** appears.',
    '**Principles**: occupy the five lanes; never have two players in the same lane and line; offer **depth and width**; create **triangles**; play **between the lines**.',
    '**Barcelona 2008–12** (Guardiola) won 14 trophies in four years, including two Champions Leagues (2009, 2011); **Spain** won Euro 2008, the 2010 World Cup and Euro 2012.',
    '**Bayern (2013–16)** and **Manchester City (2016–)** adapted it with inverted full-backs and a **3-2-4-1** structure; City won the **2023 treble**.',
    '**Tiki-taka** is a nickname; the real idea is **using the ball to move the opposition**, not to keep it.',
  ],
  sections: [
    {
      id: 'principles',
      title: 'The principles',
      lead: 'Lanes, lines and the free man.',
      blocks: [
        {
          t: 'pitch',
          title: 'A 2-3-5: five players across the five lanes in the final line',
          view: 'full',
          players: [gk(6, 50), a(26, 36, 'CB'), a(26, 64, 'CB'), a(44, 24, 'M'), a(44, 50, '6'), a(44, 76, 'M'), a(66, 10, 'W'), a(68, 30, '10'), a(70, 50, '9'), a(68, 70, '10'), a(66, 90, 'W')],
          caption: 'The front line has five players spread across the five lanes: two wide, two in the half-spaces and one central. The defence of the opponent must either cover all five or leave one free.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Occupy the lanes', body: 'Five players in the front line, one in each vertical lane, so that the defence is stretched to its full width.' },
            { title: 'No two players on the same line and lane', body: 'Players on the same horizontal line and in the same lane can be marked by one defender; stagger them.' },
            { title: 'Move the ball to move the opponent', body: 'Circulate to draw pressers, then pass into the space they leave.' },
            { title: 'Create triangles', body: 'Every player has at least two options at different angles.' },
            { title: 'Keep the rest defence', body: 'Behind the ball a 2-3 or 3-2 structure stops the counter.' },
          ],
        },
        {
          t: 'pitch',
          title: 'The 3-2-4-1 of Guardiola’s City',
          view: 'full',
          players: [gk(6, 50), a(26, 24, 'FB'), a(24, 50, 'CB'), a(26, 76, 'CB'), a(40, 38, '6'), a(40, 62, 'FB'), a(62, 8, 'W'), a(62, 38, '8'), a(62, 62, '8'), a(62, 92, 'W'), a(78, 50, '9')],
          caption: 'In possession a full-back and a centre-back move into midfield, giving a back three, a double pivot, four players behind the opposing midfield line and a striker.',
        },
      ],
    },
    {
      id: 'barca',
      title: 'Barcelona and Spain, 2008–12',
      lead: 'The model of the style.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Barcelona 2008–09', tag: 'Guardiola’s first year', body: 'Six trophies in one calendar year (La Liga, Copa del Rey, Champions League, Super Cup, UEFA Super Cup, Club World Cup). Messi was used as a false nine in the 2–6 win at the Bernabéu in May 2009.' },
            { title: 'Xavi, Iniesta and Busquets', tag: 'the midfield', body: 'The pivot (Busquets) and two interiors (Xavi, Iniesta) controlled tempo; Messi dropped from the front to receive between the lines.' },
            { title: 'Spain 2008–12', tag: 'three tournaments', body: 'Euro 2008, World Cup 2010 and Euro 2012: Spain used the Barcelona core with Casillas, Ramos, Xabi Alonso, Silva and Villa; the 2012 final was won 4–0 against Italy.' },
            { title: 'The press', tag: 'the defensive side', body: 'Barcelona pressed for six seconds after losing the ball; this counter-press, which Guardiola called the first line of defence, is less known than the passing.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'What "tiki-taka" gets wrong', text: 'Guardiola said he hated the term: "tiki-taka is a passing for the sake of passing, without any aim." The aim is to attract the opponent, find the free man and attack the space behind; the number of passes is a by-product. A side that circulates the ball with no penetration is playing a different game.' },
      ],
    },
    {
      id: 'bayern',
      title: 'Bayern, City and what changed',
      lead: 'Adapting the idea.',
      blocks: [
        {
          t: 'table',
          head: ['Period', 'Club', 'Developments'],
          rows: [
            ['2008–12', 'Barcelona', 'False nine, high pressing, Messi, Xavi, Iniesta'],
            ['2013–16', 'Bayern Munich', 'Lahm and others as inverted full-backs, Alaba as a hybrid, wide forwards (Robben, Ribéry), Lewandowski'],
            ['2016–', 'Manchester City', 'Wingers wide, De Bruyne as a creator, then Haaland: the 3-2-4-1; Premier League titles 2018, 2019, 2021–24 and the 2023 Champions League'],
            ['Influence elsewhere', 'Arteta (Arsenal), De Zerbi (Brighton), Xavi, Enzo Maresca', 'Guardiola’s former players and assistants adapt the system'],
          ],
        },
        { t: 'pitch', title: 'The free man: pulling the press and finding the player behind it', view: 'full', players: [a(30, 50, '6'), a(24, 30, 'CB'), a(24, 70, 'CB'), a(50, 50, '8'), b(36, 36), b(36, 64), b(44, 50)], arrows: [{ from: [24, 30], to: [30, 50], kind: 'pass' }, { from: [30, 50], to: [24, 70], kind: 'pass' }, { from: [24, 70], to: [50, 50], kind: 'pass' }], caption: 'The ball is circulated to pull the opponents to one side, then switched to the free player behind them.' },
      ],
    },
  ],
  sources: [
    'Perarnau, M. (2014). *Pep Confidential: The Inside Story of Pep Guardiola’s First Season at Bayern Munich*. Arena Sport.',
    'Balagué, G. (2012). *Pep Guardiola: Another Way of Winning*. Orion.',
    'Cruyff, J. (2016). *My Turn: The Autobiography*. Macmillan.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
  ],
  related: ['sports/football/schools/total-football-and-ajax', 'sports/football/game/pitch-zones-and-half-spaces', 'sports/football/tactics/half-spaces-and-overloads'],
}

export default guide
