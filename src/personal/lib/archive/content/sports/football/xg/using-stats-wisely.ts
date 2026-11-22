import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Football has become one of the most measured of sports, and the numbers are useful, but they are easy to misuse. A table of statistics shown on television can suggest a certainty that the data do not have: the sample is small, the context is missing, and the figures come from human taggers or cameras with their own quirks. This guide offers a set of rules for reading football statistics: respect sample size, ask for context, understand where the data come from and what they miss, and match the metric to the question you are asking, whether you are watching a match, scouting a player or testing a tactic.',
  nutshell: [
    '**Sample size**: a handful of matches tells you very little about a player’s shooting, passing accuracy or xG over/under-performance.',
    '**Context**: a defender’s tackles depend on the team’s style and how much the team defends; a winger’s dribbles depend on the opponent’s full-back.',
    '**Data sources**: event data are tagged by people or algorithms and differ between providers; tracking data are more precise but are not widely shared.',
    'Match the **metric to the question**: xG for chance quality, PPDA for pressing, xT for progression, goals for what actually happened.',
    'Use stats to **ask better questions** and to check impressions; do not use them to end an argument.',
  ],
  sections: [
    {
      id: 'sample',
      title: 'Sample size and noise',
      lead: 'How many matches before a number means something?',
      blocks: [
        {
          t: 'table',
          head: ['Metric', 'Rough number needed before it is stable', 'Why'],
          rows: [
            ['Goals scored per 90 (striker)', 'Several seasons', 'Goals are rare events; luck dominates'],
            ['xG per 90', 'A few dozen matches', 'Shot position is more stable than shot outcome'],
            ['Pass completion', 'Around 10–15 matches', 'Many events per match, but depends on role and opponent'],
            ['Pressing intensity (PPDA)', 'A season for team-level comparison', 'Varies with the opponent’s style and game state'],
            ['Goalkeeper save percentage', 'Several seasons', 'Shots are few and vary widely in difficulty'],
          ],
          caption: 'Illustrative orders of magnitude, drawn from published analyses of the stability of football metrics: exact numbers depend on the metric and the league.',
        },
        {
          t: 'math',
          tex: String.raw`\text{SE}=\sqrt{\frac{p(1-p)}{n}}`,
          caption: 'The standard error of a rate: halving the uncertainty needs four times the sample.',
          where: [{ sym: 'p', def: 'the underlying rate (such as a conversion rate)' }, { sym: 'n', def: 'the number of trials (shots, passes)' }],
          syntax: [{ sym: '\\sqrt{n}', say: 'noise falls with the square root of the sample. Effect: four times the shots only halves the error. Why: independent random variation partly cancels.' }],
          worked: {
            title: 'A 12% conversion rate on 50 shots',
            steps: ['p = 0.12, n = 50: SE = √(0.12 × 0.88/50) = 0.046 (4.6 percentage points).', 'An observed 18% on 50 shots is only 1.3 standard errors above 12%.', 'With 200 shots the standard error is 2.3 points; the same observed gap would be 2.6 standard errors.'],
            answer: 'A single season of shots is not enough to call a striker clinical or wasteful. Compare with a prior (the league average) and shrink toward it.',
          },
        },
      ],
    },
    {
      id: 'context',
      title: 'Context and data quality',
      lead: 'Where the numbers come from, and what they miss.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Event data', tag: 'what happened', body: 'Passes, shots, tackles with location and time. Tagged by people (with training) or algorithms; definitions differ between providers (what counts as a "key pass" or a "duel").' },
            { title: 'Tracking data', tag: 'where everyone was', body: 'Positions of all players and the ball, typically at 25 frames a second. Allows pitch-control and off-ball metrics but is expensive and not widely shared.' },
            { title: 'Role and system', tag: 'context', body: 'Numbers depend on the tactical role: a full-back’s crosses mean something different in a back four and in a wing-back system.' },
            { title: 'Game state', tag: 'context', body: 'Teams change behaviour when leading or trailing; metrics collected only when a team trails are not comparable.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Ask what the metric was designed to measure', 'Compare players with others in the same role and league', 'Check a number against the video before acting on it'],
          dont: ['Compare statistics across leagues or providers without a calibration', 'Treat a league-leading figure over five matches as a trend', 'Use a stat as an argument without saying how it is computed'],
        },
        { t: 'callout', tone: 'note', title: 'Statistics in recruitment', text: 'Clubs such as Brentford, Brighton and Liverpool have used data to find undervalued players, but they combine it with scouting and video: the model narrows the search; people check the fit with the team and the person. See the scouting guide for the process.' },
      ],
    },
  ],
  sources: [
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
    'StatsBomb and FBref articles on the stability of football metrics and sample size (statsbomb.com; fbref.com).',
    'Statsbomb and Opta: data specification documents (statsbomb.com; theanalyst.com).',
    'Kuper, S. & Szymanski, S. (2009). *Soccernomics*. Nation Books.',
  ],
  related: ['sports/football/xg/shot-maps-and-finishing', 'sports/football/methods/scouting-and-analysis', 'sports/football/xg/beyond-xg'],
}

export default guide
