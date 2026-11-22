import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Football (soccer) is a low-scoring game, which makes it unusually hard to judge performance from the scoreline alone, a team can utterly dominate and lose 0-1, or barely threaten and win 2-0. Expected goals (xG) was built specifically to answer a better question than "who scored": given the shots each team actually took, how many goals should we have expected?',
  nutshell: [
    '**Expected goals (xG)** assigns every shot a probability of being a goal, based on historical data from thousands of similar shots (location, angle, body part, pressure).',
    'Summing a team\'s shot xG values over a match gives a measure of chance quality created, independent of whether the shots actually went in.',
    'A team that creates more xG than their opponent, game after game, but loses more often than their xG suggests, is often said to be "underperforming" their underlying numbers, a signal that can predict future results reverting toward the mean.',
    'xG is now mainstream: used in broadcast graphics, club recruitment, and post-match analysis across most major leagues.',
  ],
  sections: [
    {
      id: 'the-model',
      title: 'How an xG value is calculated',
      blocks: [
        {
          t: 'math',
          tex: String.raw`xG_s = P(\text{goal} \mid x_1, x_2, \ldots, x_n)`,
          where: [
            { sym: 'xG_s', def: 'The expected-goals value for one shot' },
            { sym: 'x_1, \\ldots, x_n', def: 'That shot\'s features: distance, angle, body part, assist type, defensive pressure, and more' },
          ],
          caption: 'An xG model is trained on a very large historical dataset of shots (hundreds of thousands, from professional leagues over many seasons) where the outcome (goal or no goal) is already known. Statistical and machine-learning methods, see [logistic regression](@ai/algorithms/logistic-regression), then estimate the probability of a goal for any new shot, based on its characteristics.',
        },
        {
          t: 'table',
          head: ['Shot characteristic', 'Effect on xG (general direction)'],
          rows: [
            ['Closer to goal', 'Higher xG'],
            ['Wider angle to the goal (more of the goal "visible")', 'Higher xG'],
            ['Header, versus a shot with the foot', 'Generally lower xG, all else equal'],
            ['One-on-one with the goalkeeper', 'Much higher xG'],
            ['Under defensive pressure / off-balance', 'Lower xG'],
            ['From a cut-back pass across the box, versus a cross', 'Higher xG, cut-backs are consistently among the most dangerous assist types in the data'],
          ],
        },
        {
          t: 'example',
          title: 'Reading a match xG summary',
          lines: [
            { label: 'Final score', text: 'Team A 1 – 0 Team B' },
            { label: 'Match xG', text: 'Team A: 0.6 xG from a single good chance; Team B: 2.4 xG from several good chances that did not go in' },
            { label: 'Reading', text: 'Team B created substantially more and better chances; the result is a plausible single-match outcome (football has real variance), but if this pattern repeats over many matches, Team B would be expected to start winning more often' },
          ],
        },
      ],
    },
    {
      id: 'why-useful',
      title: 'Why xG is more useful than the scoreline alone',
      blocks: [
        {
          t: 'p',
          text: 'A single match\'s goals are a small sample, a deflection, a great individual moment, or a goalkeeping error can decide a result independent of overall play quality. xG, summed over many shots and many matches, is a much larger, more stable sample of "how good were the chances this team created and conceded", which research has found correlates more strongly with underlying team quality and future results than goals scored alone, especially over short samples.',
        },
        {
          t: 'callout', tone: 'tip', title: '"Regression to the mean" in football terms', text: 'A team consistently scoring well above their xG (finishing chances better than the model expects, match after match) or conceding well below their opponents\' xG (their goalkeeper repeatedly making saves the model rates as unlikely) is statistically less likely to sustain that gap over a full season, this is simply [regression to the mean](@mathematics/probability/inference) applied to football, and is a standard tool pundits and analysts now use to flag teams whose results may not be sustainable.',
        },
      ],
    },
    {
      id: 'limits',
      title: 'What xG does not capture',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use xG as one input among several, alongside watching the actual football',
            'Look at xG trends over many matches, not a single game',
            'Remember a specific player\'s finishing skill can genuinely, sustainably beat the average expected by the model, xG models the average shot, not every individual taker',
          ],
          dont: [
            'Treat a single match\'s xG as a precise verdict on "who deserved to win"',
            'Ignore game state (a team already leading by two goals late on often plays more passively, lowering their own remaining xG, which basic match totals do not fully capture)',
            'Assume all xG models agree exactly, different providers use different training data and features, so published xG numbers for the same match can vary somewhat between sources',
          ],
        },
      ],
    },
  ],
  sources: ['Rathke, A. (2017). An examination of expected goals and shot efficiency in soccer. *Journal of Human Sport and Exercise*, 12(2), 514–529.', 'Eggels, H., van Elk, R., & Pechenizkiy, M. (2016). Explaining soccer match outcomes with goal scoring opportunities predictive analytics. *MLSA Workshop, ECML/PKDD*.'],
  related: ['sports/analytics/sabermetrics-moneyball', 'ai/algorithms/logistic-regression', 'mathematics/probability/inference'],
}

export default guide
