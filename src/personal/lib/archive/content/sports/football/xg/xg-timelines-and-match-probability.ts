import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Two teams can finish 1–0 and yet one had eight good chances and the other had one: the scoreboard is a poor summary of a football match, because goals are rare. The xG timeline plots each team’s cumulative xG against the minute, showing when chances came and how the match flowed. Combine the chances with a probability model and you can ask: given those shots, how often would each team win? This guide explains the timeline, derives the win probabilities from the shot list (a Poisson-binomial calculation) and from a simple Poisson model, and shows where these tools mislead, notably through game state.',
  nutshell: [
    'The **xG timeline** plots cumulative xG by minute for each team; steps show chances, dots show goals.',
    'Treat the shots as independent trials with probability **xG** and the distribution of goals is a **Poisson-binomial**; the match probabilities follow by summing over scorelines.',
    'A simpler model treats goals as **Poisson** with mean equal to the team’s total xG.',
    'A team with **1.8 xG against 0.9** wins about 59% of the time, draws 23% and loses 19% in the Poisson model: “deserved” does not mean “certain”.',
    '**Game state** biases the numbers: a team that leads often sits back, so its xG falls while the opponent’s rises.',
  ],
  sections: [
    {
      id: 'timeline',
      title: 'The xG timeline',
      lead: 'The flow of a match in one chart.',
      blocks: [
        { t: 'ftbl-viz', viz: 'xg-timeline' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Steep early climb', tag: 'a fast start', body: 'A team that creates good chances early; if it does not score, the match may swing as it tires or the opponent adapts.' },
            { title: 'Flat stretches', tag: 'game control', body: 'Periods with no chances mean the match is being controlled, or both teams are cautious.' },
            { title: 'Dots below the line', tag: 'finishing luck', body: 'A goal scored from a very small chance lifts the score without changing xG much: the dot sits well above the line.' },
            { title: 'Late steps', tag: 'chasing the game', body: 'The trailing team’s late chances often come against opponents who have dropped deep.' },
          ],
        },
      ],
    },
    {
      id: 'prob',
      title: 'From shots to win probabilities',
      lead: 'Two models.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(G_A=k)=\sum_{S\subseteq\{1..n\},\,|S|=k}\ \prod_{i\in S}p_i\prod_{i\notin S}(1-p_i),\qquad P(A\text{ wins})=\sum_{i>j}P(G_A=i)\,P(G_B=j)`,
          caption: 'The Poisson-binomial distribution of goals from a list of shots and the resulting win probability.',
          where: [{ sym: 'p_i', def: 'the xG of shot i' }, { sym: 'G_A,\\ G_B', def: 'the goals scored by the two teams (treated as independent)' }],
          syntax: [{ sym: '\\prod_{i\\in S}p_i\\prod_{i\\notin S}(1-p_i)', say: 'the probability that exactly the shots in S score. Effect: the product multiplies the chance of each scoring and each missing. Why: shots are treated as independent.' }],
          worked: {
            title: 'Three shots: xG 0.5, 0.3 and 0.1',
            steps: ['P(0 goals) = 0.5 × 0.7 × 0.9 = 0.315.', 'P(1 goal) = 0.485 (the sum of the three single-scorer cases), P(2 goals) = 0.185 and P(3 goals) = 0.015.', 'The mean number of goals is 0.485 + 2×0.185 + 3×0.015 = 0.9, equal to the total xG.'],
            answer: 'The calculation is done by dynamic programming over shots in the lab: start with a distribution of goals and add one shot at a time. The same procedure gives the full match probabilities.',
          },
        },
        {
          t: 'table',
          head: ['xG: A v B', 'P(A wins)', 'P(draw)', 'P(B wins)'],
          rows: [
            ['1.8 v 0.9', '58.6%', '22.9%', '18.5%'],
            ['1.0 v 1.0', '34.6%', '30.9%', '34.6%'],
            ['2.5 v 0.5', '81.1%', '13.4%', '5.5%'],
            ['1.3 v 1.3', '36.8%', '26.4%', '36.8%'],
            ['0.8 v 2.1', '13.1%', '19.4%', '67.4%'],
          ],
          caption: 'Independent Poisson goals with the given means. Even a team that creates 2.5 xG against 0.5 fails to win roughly one match in five.',
        },
      ],
    },
    {
      id: 'limits',
      title: 'Limits: game state, shot dependence and "deserved"',
      lead: 'Why the probabilities are approximations.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Game state', tag: 'strongest bias', body: 'Leading teams change how they play: they sit deeper and take fewer shots. The trailing team’s xG rises. An xG total is partly a product of the score.' },
            { title: 'Shot dependence', tag: 'rebounds and chains', body: 'A rebound after a save is not independent of the first shot; models that treat them separately overstate the chance of at least one goal.' },
            { title: 'Quality of the model', tag: 'inputs', body: 'The probabilities are only as good as the xG model; different providers produce different match totals.' },
            { title: '"Deserved" is a value judgement', tag: 'language', body: 'xG describes the chances created, not the moral right to win; a team that defends well and takes few shots can have a good plan.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A good habit', text: 'Use the xG timeline to ask what the match looked like rather than who should have won. Look for the moments when the flow changed (a red card, a substitution, a goal) and compare with the minutes of the shot.' },
      ],
    },
  ],
  sources: [
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
    'Dixon, M. J. & Coles, S. G. (1997). Modelling association football scores and inefficiencies in the football betting market. *Applied Statistics*, 46(2), 265–280.',
    'Statsbomb, Understat and FBref: xG timelines and match models (statsbomb.com; understat.com; fbref.com).',
  ],
  related: ['sports/football/xg/xg-basics', 'sports/football/xg/shot-maps-and-finishing', 'sports/football/xg/beyond-xg'],
}

export default guide
