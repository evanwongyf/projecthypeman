import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In the early 2000s, the Oakland Athletics, one of baseball\'s smallest-budget teams, started consistently winning against teams spending two or three times as much, by trusting statistics that scouts had largely ignored for a century. The story, later told in Michael Lewis\'s book and film *Moneyball*, is the clearest real-world case study of data analysis overturning conventional wisdom in sport.',
  nutshell: [
    '**Sabermetrics** (from SABR, the Society for American Baseball Research) is the statistical analysis of baseball, pioneered largely by Bill James from the late 1970s onward.',
    'Traditional scouting overvalued **batting average** and undervalued **on-base percentage**, a statistical finding that let undervalued, "unglamorous" players be acquired cheaply.',
    'The core Moneyball insight was not "stats are good" in general, but finding specific **market inefficiencies**: skills that mattered for winning but were underpriced by the rest of the league.',
    'The approach has since spread to nearly every major sport, football (soccer) has expected goals, basketball has advanced shot-location analytics, and American football has win-probability models.',
  ],
  sections: [
    {
      id: 'the-insight',
      title: 'The core statistical insight',
      blocks: [
        {
          t: 'math',
          tex: String.raw`AVG = \frac{H}{AB} \qquad OBP = \frac{H + BB + HBP}{AB + BB + HBP + SF}`,
          where: [
            { sym: 'H', def: 'Hits' },
            { sym: 'AB', def: 'At-bats' },
            { sym: 'BB', def: 'Walks (bases on balls)' },
            { sym: 'HBP', def: 'Times hit by pitch' },
            { sym: 'SF', def: 'Sacrifice flies' },
          ],
          caption: 'Batting average (AVG) only counts hits, treating a walk (getting on base without a hit) as worthless. On-base percentage (OBP) counts every way a batter avoids making an out, and avoiding outs, statistical analysis found, correlates much more strongly with actually scoring runs than batting average alone does.',
        },
        {
          t: 'p',
          text: 'Bill James and other early sabermetricians, analysing decades of play-by-play data, found that a team\'s run-scoring (and so its win total) was statistically better predicted by on-base percentage and slugging percentage than by the batting average that dominated traditional scouting evaluation and media commentary at the time.',
        },
        { t: 'callout', tone: 'tip', title: 'Why this created an opportunity', text: 'Because most of baseball\'s scouts, media and even front offices still primarily valued batting average, players with a high on-base percentage but modest batting average (often from drawing a lot of walks rather than getting a lot of hits) were systematically undervalued and cheaper to acquire, exactly the kind of market inefficiency the Oakland A\'s, under general manager Billy Beane, set out to exploit with a limited payroll.' },
      ],
    },
    {
      id: 'moneyball',
      title: 'Oakland\'s 2002 season',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'Oakland Athletics, 2002 season', 'Context'],
          rows: [
            ['Regular-season wins', '103 (tied for the American League\'s best)', 'Among the best records in baseball that season'],
            ['Team payroll', 'Roughly in the bottom third of Major League Baseball', 'A fraction of the highest-spending teams\' payrolls that same season'],
            ['Approach', 'Systematically targeted undervalued statistics (on-base percentage especially) in player acquisition and the amateur draft', 'A deliberate, data-driven strategy rather than traditional scouting intuition alone'],
          ],
          caption: 'The exact payroll-to-wins efficiency claimed in the book and film has been debated by some analysts (Oakland also had strong starting pitching that season, for instance), but the broader strategic story, targeting a specific, statistically-identified market inefficiency, is well documented and widely credited with changing how the sport evaluates players.',
        },
      ],
    },
    {
      id: 'spread',
      title: 'How the approach spread across sport',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Basketball', body: 'Advanced analytics on shot location and efficiency (finding that long two-point shots were statistically the worst shot in basketball, worse than both closer twos and three-pointers) measurably changed NBA shot selection league-wide over the 2010s, a shift widely credited partly to analytics departments.' },
            { title: 'Football (soccer)', body: 'Expected goals (xG) and related data analysis spread from early analytics-focused clubs into mainstream broadcasting and club recruitment departments, see [expected goals and shot quality](@sports/analytics/expected-goals).' },
            { title: 'American football', body: 'Win-probability and expected-points models have shifted fourth-down decision-making at both college and NFL levels toward "going for it" more often than traditional coaching convention favoured, as models increasingly showed conservative punting often cost more win probability than it saved.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The book and the backlash', text: 'Michael Lewis\'s 2003 book *Moneyball: The Art of Winning an Unfair Game*, and the 2011 film adaptation starring Brad Pitt, brought sabermetrics into mainstream popular culture. The approach was also met with real resistance at the time from traditional scouts and commentators, some of whom argued it ignored intangible qualities of players that stats could not capture, a genuine, ongoing tension in sports analytics between what can be measured and what coaches and scouts believe matters but is harder to quantify.' },
      ],
    },
  ],
  sources: ['Lewis, M. (2003). *Moneyball: The Art of Winning an Unfair Game*. W. W. Norton.', 'James, B. (1982–88). *The Bill James Baseball Abstract* (annual).', 'Albert, J., & Bennett, J. (2003). *Curve Ball: Baseball, Statistics, and the Role of Chance in the Game*. Springer.'],
  related: ['sports/analytics/expected-goals', 'sports/analytics/elo-ratings', 'mathematics/probability/inference'],
}

export default guide
