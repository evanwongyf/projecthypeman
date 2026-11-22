import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Clubs find players and prepare for opponents with three tools: people (scouts and analysts watching matches), video (clips and full-match tagging) and data (event data, tracking data and models). The balance between them has shifted over twenty years: Billy Beane’s baseball experiments inspired some football clubs, and Brentford, Brighton and Liverpool built recruitment around data without abandoning scouts. This guide describes the recruitment process (long list, shortlist, scouting visits, due diligence), match analysis for opponents, and the role and limits of data in the decision.',
  nutshell: [
    '**Recruitment funnel**: data and video create a **long list**, analysts and scouts reduce it to a **shortlist**, then live scouting and **due diligence** (character, injury history, fit) decide.',
    '**Opposition analysis** uses video and data to find patterns: build-up, pressing triggers, set pieces, weak players and matchups.',
    'Common tools: **event data** (Opta, StatsBomb, Wyscout), **tracking data**, **video platforms**, and **internal models** that estimate player value.',
    'Clubs such as **Brentford** and **Brighton** found that data can find undervalued players; **Liverpool** used a research team to support the manager’s model.',
    'Data **narrow the search** but do not replace scouts: culture, character and fit are hard to measure.',
  ],
  sections: [
    {
      id: 'recruit',
      title: 'The recruitment funnel',
      lead: 'From thousands of players to one.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Profile', body: 'The head coach and the sporting director define the role: the position, the style and the characteristics needed.' },
            { title: 'Long list', body: 'Filters on data (age, minutes, performance in the role) and video produce a list of dozens of candidates.' },
            { title: 'Shortlist', body: 'Analysts watch video and live matches and rank players on role fit, level, price and availability.' },
            { title: 'Due diligence', body: 'Medical records, injury history, character references, contract and agent terms.' },
            { title: 'Decision and integration', body: 'The club decides, and a plan for integration (language, housing, role) follows.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Data', tag: 'finds candidates', body: 'Event and tracking data identify players who match a profile in leagues the club cannot scout in person.' },
            { title: 'Video', tag: 'checks the pattern', body: 'Video shows context: what the player does without the ball, how he behaves under pressure, how he fits a tactic.' },
            { title: 'Scouts', tag: 'see the person', body: 'Live scouting shows attitude, body language and reaction to mistakes.' },
            { title: 'Model', tag: 'values the player', body: 'Internal models estimate the player’s contribution and price, flagging deals that offer value.' },
          ],
        },
      ],
    },
    {
      id: 'opp',
      title: 'Opposition analysis',
      lead: 'Preparing for a single match.',
      blocks: [
        {
          t: 'table',
          head: ['Question', 'Source', 'Use'],
          rows: [
            ['How do they build from the back?', 'Video of goal kicks and build-up phases', 'Set the press to take away their outlet'],
            ['Which player do they use under pressure?', 'Pass networks and video', 'Mark or press that player'],
            ['Where are their weaknesses?', 'Shot and chance maps against them', 'Target a weak full-back or a slow centre-back'],
            ['How do they defend corners?', 'Video of set pieces', 'Design routines'],
            ['What changes when they are behind?', 'Match-state analysis', 'Plan for the second half'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Moneyball in football', text: 'Billy Beane’s approach in baseball (finding undervalued skills) inspired football clubs, but football is harder to analyse: fewer discrete events, more interaction between players and a global market in which prices adjust quickly. The clubs that benefited most combined data with clear football models and long-term planning.' },
        { t: 'dodont', do: ['Define the role before searching', 'Use several data sources and check against video', 'Include character and fit in the decision'], dont: ['Buy on a single statistic', 'Ignore league and role differences when comparing', 'Skip due diligence on injuries'] },
      ],
    },
  ],
  sources: [
    'Lewis, M. (2003). *Moneyball*. W. W. Norton (the baseball origin of the approach).',
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
    'Kuper, S. & Szymanski, S. (2009). *Soccernomics*. Nation Books.',
    'Statsbomb and The Athletic: recruitment and analytics case studies (statsbomb.com; theathletic.com).',
  ],
  related: ['sports/football/xg/using-stats-wisely', 'sports/analytics/sabermetrics-moneyball', 'sports/football/schools/modern-trends-2020s'],
}

export default guide
