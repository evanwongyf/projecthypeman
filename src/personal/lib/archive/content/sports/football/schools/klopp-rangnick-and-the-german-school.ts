import type { Guide } from '../../../../guide'
import { a, b, ball, gk, shape } from '../../../../football-shapes'

const guide: Guide = {
  intro:
    'German football’s modern identity is built on pressing. Its roots lie in Soviet Ukraine, where Valeriy Lobanovskyi’s Dynamo Kyiv pressed as a unit in the 1970s and 1980s with a scientific approach; in Ralf Rangnick’s 1998 television appearance explaining zonal marking and the ball-oriented back four; and in the reform of the German youth system after the poor Euro 2000. Jürgen Klopp then made gegenpressing famous at Dortmund (Bundesliga titles in 2011 and 2012) and Liverpool (Champions League 2019, Premier League 2020), while Rangnick’s Red Bull system produced Nagelsmann, Tuchel, Marsch and others. This guide describes the school, the main ideas, the clubs and coaches, and the cost of playing this way.',
  nutshell: [
    '**Lobanovskyi’s Dynamo Kyiv** (Cup Winners’ Cup 1975 and 1986) pressed collectively and used data; **Sacchi** made it famous in the West.',
    '**Rangnick** (Ulm, Hoffenheim, Salzburg, Leipzig) built a **ball-oriented zonal press** with a flat back four and a clear set of rules.',
    '**Gegenpressing** (Klopp): pressing immediately after losing the ball; "the best moment to win the ball is right after your opponent wins it".',
    'After **Euro 2000**, Germany reformed its **youth academies**; the 2014 World Cup winners were the result.',
    'The cost: **fitness**, **injuries** and a squad built around runners; Klopp’s Liverpool and Dortmund both faded after intense periods.',
  ],
  sections: [
    {
      id: 'roots',
      title: 'Roots: Kyiv, Ulm and the reform',
      lead: 'From Lobanovskyi to Rangnick.',
      blocks: [
        {
          t: 'levels',
          caption: 'The lineage of the German school.',
          items: [
            { name: '1970s–80s', body: 'Lobanovskyi, with analyst Anatoliy Zelentsov, builds Dynamo Kyiv into a pressing, data-driven side; the Soviet Union reaches the 1988 Euro final.' },
            { name: '1998', body: 'Rangnick, coach of Ulm, appears on German television to explain zonal marking and the four-man ball-oriented defence.' },
            { name: '2000', body: 'Germany’s poor Euro 2000 prompts a reform: academies at every professional club and a new emphasis on technique and tactics.' },
            { name: '2008–', body: 'Klopp at Mainz and then Dortmund: pressing and counter-attacks; Rangnick at Hoffenheim and Red Bull; Heynckes’s Bayern wins the 2013 treble.' },
            { name: '2014', body: 'Germany win the World Cup, with a generation (Neuer, Lahm, Müller, Kroos, Götze) shaped by the reform.' },
          ],
        },
        {
          t: 'pitch',
          title: 'Rangnick’s ball-oriented back four: the line moves with the ball',
          view: 'full',
          players: [...shape([4, 4, 2], { team: 'a', shift: 6 }), ball(60, 24)],
          caption: 'The four defenders and the four midfielders slide as units toward the ball, keeping the distances small; the weak side is left to the keeper’s and full-back’s positioning.',
        },
      ],
    },
    {
      id: 'gegen',
      title: 'Gegenpressing at Dortmund and Liverpool',
      lead: 'The best playmaker.',
      blocks: [
        {
          t: 'pitch',
          title: 'Counter-pressing: five players surround the ball after it is lost',
          view: 'attack',
          players: [b(74, 50, 'X'), a(72, 40, '8'), a(76, 62, '10'), a(68, 54, '6'), a(82, 34, 'W'), a(82, 68, 'W'), b(66, 30), b(66, 70), b(60, 50), gk(97, 50)],
          arrows: [{ from: [72, 40], to: [74, 48], kind: 'press' }, { from: [76, 62], to: [75, 52], kind: 'press' }, { from: [68, 54], to: [72, 52], kind: 'press' }, { from: [82, 34], to: [78, 42], kind: 'press' }],
          caption: 'At the moment of the turnover five players close the ball and the passing lanes; the opponent has no easy pass and, if the ball is won, the goal is near.',
        },
        {
          t: 'table',
          head: ['Team', 'Period', 'Highlights', 'Style'],
          rows: [
            ['Dortmund (Klopp)', '2008–15', 'Bundesliga 2011, 2012; Champions League final 2013', 'High press, vertical counters, Götze, Lewandowski, Reus'],
            ['Liverpool (Klopp)', '2015–24', 'Champions League 2019; Premier League 2020 (99 points in 2019)', 'Front three, high-line press, full-backs as creators (Alexander-Arnold, Robertson)'],
            ['Red Bull Salzburg / Leipzig (Rangnick)', '2012–', 'Austrian and German success; a pipeline of young players', 'Systematic pressing and rapid transitions'],
            ['Bayern (Flick)', '2019–21', 'Sextuple in 2020', 'A very high line and aggressive press'],
            ['Chelsea (Tuchel)', '2021', 'Champions League 2021', 'Back three, pressing and organised defence'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Klopp’s phrase', text: 'Klopp is often quoted as saying that no playmaker in the world can be as good as a good counter-pressing situation: just after a turnover the opponent is disorganised, and you are close to the goal. The idea is not that you must not hold the ball, but that the moment after a turnover is the best time to create a chance.' },
      ],
    },
    {
      id: 'cost',
      title: 'The cost of the system',
      lead: 'Energy and injuries.',
      blocks: [
        { t: 'dodont', do: ['Build a squad of players who can press repeatedly and recover', 'Use rest and rotation to manage load', 'Have a plan for matches where the opponent bypasses the press'], dont: ['Press with a tired squad', 'Rely on a few key players without cover', 'Forget the space behind a high line'] },
        { t: 'p', text: 'Intense pressing demands repeated sprints, and teams that play this way often see injuries and fatigue after a few seasons, as Klopp’s Dortmund in 2014–15 and Liverpool in 2020–21 and 2022–23 found. Coaches therefore vary the intensity during a match and across a season; the best use pressing as a weapon at specific moments rather than as a constant effort.' },
      ],
    },
  ],
  sources: [
    'Honigstein, R. (2015). *Das Reboot: How German Soccer Reinvented Itself and Conquered the World*. Yellow Jersey Press.',
    'Wilson, J. (2008). *Inverting the Pyramid: The History of Football Tactics*. Orion.',
    'Cox, M. (2019). *Zonal Marking*. Nation Books.',
    'Rangnick, R., Klopp, J. interviews (The Coaches’ Voice, coachesvoice.com).',
  ],
  related: ['sports/football/tactics/pressing-and-gegenpressing', 'sports/football/matches/liverpool-barcelona-2019', 'sports/football/schools/sacchi-and-the-modern-press'],
}

export default guide
