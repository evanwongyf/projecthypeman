import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A shot map draws every shot of a match or season at the place it was taken, sized by its xG. It shows at a glance where a team creates its chances and from where it settles for long shots. The natural next question is whether a striker is a better finisher than average: goals scored minus xG. But finishing is noisy: even a striker who scores exactly as expected will be several goals above or below in a season. This guide shows how to read a shot map, how to compute the luck band for goals minus xG, what post-shot xG adds, and how regression to the mean should temper any conclusion.',
  nutshell: [
    'A **shot map** shows where shots came from, sized or coloured by **xG**; teams with good chance creation take more shots near the goal.',
    '**Goals − xG** is a crude measure of finishing; its standard error is about \\(\\sqrt{\\sum p(1-p)}\\), which is large for a single season.',
    '**Post-shot xG (PSxG)** uses where the shot was heading (placement and speed), so it separates good finishers from good chance-takers.',
    'Finishing skill exists but is **small compared with luck** over a season; large over- or under-performance usually **regresses toward zero**.',
    'Shot-map **volume** matters: lots of low-xG shots show a team shooting from poor positions.',
  ],
  sections: [
    {
      id: 'map',
      title: 'Reading a shot map',
      lead: 'Where, how often and how good.',
      blocks: [
        { t: 'ftbl-viz', viz: 'shot-map' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Clusters near the six-yard box', tag: 'good', body: 'A team whose shots cluster close to goal has created high-quality chances: tap-ins, cutbacks and through balls.' },
            { title: 'Many long shots', tag: 'warning', body: 'A map full of small circles outside the box suggests a team that is being forced out, or one that shoots too early.' },
            { title: 'One big circle', tag: 'context', body: 'A single high-xG chance can dominate a match’s total; it is the chance, not the match, that is exceptional.' },
            { title: 'Differences between teams', tag: 'style', body: 'Counter-attacking teams produce fewer shots of higher xG; possession teams produce many shots of lower xG against deep defences.' },
          ],
        },
      ],
    },
    {
      id: 'finishing',
      title: 'Finishing: goals minus xG, and how noisy it is',
      lead: 'How much of a season is luck?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\mathbb{E}[G]=\sum_i p_i,\qquad \operatorname{Var}(G)=\sum_i p_i(1-p_i),\qquad z=\frac{G-\sum p_i}{\sqrt{\sum p_i(1-p_i)}}`,
          caption: 'Goals from independent shots are a sum of Bernoulli outcomes: the mean is the total xG and the variance is Σp(1−p).',
          where: [{ sym: 'p_i', def: 'the xG of shot i' }, { sym: 'G', def: 'goals scored' }, { sym: 'z', def: 'how many standard deviations above or below xG the player is' }],
          syntax: [{ sym: '\\sum_i p_i(1-p_i)', say: 'the variance of the number of goals. Effect: more shots reduce the relative noise only slowly. Why: the standard deviation grows with the square root of the number of shots.' }],
          worked: {
            title: 'A striker with 100 shots, average xG 0.12',
            steps: ['Expected goals: 100 × 0.12 = 12.', 'Variance ≈ 100 × 0.12 × 0.88 = 10.6; standard deviation ≈ 3.2 goals.', 'If he scores 16, that is +4 goals: z ≈ 1.2, within normal variation. He would need around 19 to be 2 standard deviations above.'],
            answer: 'A striker who scores four goals more than his xG over a season may simply be lucky; the difference can only be separated from luck over several seasons. A team with 500 shots at average xG 0.11 has a standard deviation of about 7 goals.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\hat{\delta}=\frac{n}{n+k}\,\big(G-\textstyle\sum p_i\big)`,
          caption: 'A shrinkage estimate of true finishing skill: observed over-performance is pulled toward zero, more strongly when the sample n is small.',
          where: [{ sym: 'n', def: 'number of shots (the sample size)' }, { sym: 'k', def: 'the shot count at which luck and skill contribute equally (large, several hundred shots)' }],
          syntax: [{ sym: '\\tfrac{n}{n+k}', say: 'the weight given to the observed result. Effect: with few shots, almost all the over-performance is treated as luck. Why: noise swamps skill in small samples.' }],
          worked: {
            title: 'Shrinking a hot streak',
            steps: ['Suppose k = 400 shots and a player has +4 goals above xG on 100 shots.', 'Shrunk estimate: 100/(100 + 400) × 4 = +0.8 goals per 100 shots.', 'After 600 shots the same rate gives 600/1,000 × 24 = +14 goals.'],
            answer: 'The more shots, the more the data can be trusted: after one season the estimate is mostly a regression to the mean; after several, genuine finishing skill can be seen.',
          },
        },
      ],
    },
    {
      id: 'psxg',
      title: 'Post-shot xG and the goalkeeper',
      lead: 'Adding the shot’s placement.',
      blocks: [
        {
          t: 'p',
          text: 'Ordinary xG is computed before the shot is struck. **Post-shot xG** (PSxG) is computed after it: it knows where the ball is heading in the goal and how fast, so a shot into the top corner has a high PSxG even if it was struck from a position of low xG. Two comparisons follow. For a **shooter**, PSxG minus xG measures **shot placement skill** (how much better the placement was than average for that chance). For a **goalkeeper**, PSxG faced minus goals conceded measures **goals prevented** (see the goalkeepers guide).',
        },
        {
          t: 'table',
          head: ['Measure', 'Computed when', 'Answers'],
          rows: [
            ['xG', 'At the moment of the shot', 'How good was the chance?'],
            ['PSxG', 'After the shot is struck', 'How hard was the shot to save?'],
            ['PSxG − xG', 'For a shooter', 'How much better than average was the placement?'],
            ['PSxG − goals conceded', 'For a goalkeeper', 'How many goals did the keeper prevent?'],
          ],
        },
        { t: 'dodont', do: ['Use several seasons of data before calling a player a "clinical finisher"', 'Look at shot volume and xG per shot together', 'Compare goals with xG for a whole team over many matches'], dont: ['Say a striker is in "red-hot form" because of five matches of over-performance', 'Judge a keeper over a handful of games', 'Compare xG values from different providers as if they were the same scale'] },
      ],
    },
  ],
  sources: [
    'Caley, M. and others on finishing skill and regression to the mean in shot data (Cartilage Free Captain; Statsbomb).',
    'Davis, J. & Robberechts, P. (2024). Biases in expected goals models confound finishing ability. *Machine Learning* / arXiv.',
    'FBref and StatsBomb: PSxG and goalkeeping metrics (fbref.com; statsbomb.com).',
    'Anderson, C. & Sally, D. (2013). *The Numbers Game*. Penguin.',
  ],
  related: ['sports/football/xg/xg-basics', 'sports/football/positions/goalkeepers', 'sports/football/xg/using-stats-wisely'],
}

export default guide
