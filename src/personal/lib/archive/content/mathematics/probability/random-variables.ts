import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A random variable turns the vague outcomes of chance, heads or tails, which card, how long until it breaks, into numbers you can add, average and analyse. Once an outcome is a number, two more numbers summarise its whole behaviour: the expected value (the long-run average) and the variance (how much it typically strays from that average).',
  nutshell: [
    'A random variable X assigns a number to every possible outcome of a random process.',
    'The **expected value**, \\(E[X]\\), is a probability-weighted average: multiply each outcome by its probability, and add up.',
    'The **variance**, \\(\\operatorname{Var}(X)\\), is the expected squared distance from the mean, a measure of spread.',
    'Expectation is linear: \\(E[aX+b] = aE[X]+b\\), always, however X is distributed.',
  ],
  sections: [
    {
      id: 'expectation',
      title: 'Expected value: a weighted average',
      blocks: [
        {
          t: 'math',
          tex: String.raw`E[X] = \sum_{x} x \, P(X=x)`,
          caption: 'Multiply every possible value by its probability, then sum. It is the average outcome you\'d see over a huge number of repeats, not necessarily a value X could ever actually take.',
        },
        {
          t: 'example',
          title: 'A fair six-sided die',
          lines: [
            { label: 'Values and probabilities', text: 'each of 1 through 6, with probability 1/6' },
            { label: 'Expected value', text: '\\(E[X] = \\tfrac16(1+2+3+4+5+6) = \\tfrac{21}{6} = 3.5\\)' },
            { label: 'Note', text: 'a die can never actually roll 3.5, the expected value is a long-run average, not a possible single outcome' },
          ],
        },
        {
          t: 'example',
          title: 'A biased bet',
          lines: [
            { label: 'Bet', text: 'win $10 with probability 0.3, lose $4 with probability 0.7' },
            { label: 'Expected value', text: '\\(E[X] = 10(0.3) + (-4)(0.7) = 3 - 2.8 = 0.2\\)' },
            { label: 'Reading', text: 'on average, this bet nets 20 cents per play, a positive-expectancy bet, in the language of [trading expectancy](@finance/technical/risk-management)' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`E[aX+b] = aE[X] + b \qquad E[X+Y] = E[X] + E[Y]`,
          caption: 'Linearity of expectation: it distributes over addition and scaling exactly like ordinary algebra, regardless of how X and Y are distributed, or even whether they are independent, a surprisingly powerful shortcut used constantly in statistics.',
        },
      ],
    },
    {
      id: 'variance',
      title: 'Variance and standard deviation',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\operatorname{Var}(X) = E\big[(X-E[X])^2\big] \qquad \sigma = \sqrt{\operatorname{Var}(X)}`,
          caption: 'Variance: the average squared distance from the mean. Squaring makes every deviation positive (so they don\'t cancel out) and penalises large deviations more. The standard deviation, σ, is the square root, back in the original units, which makes it easier to interpret.',
        },
        {
          t: 'example',
          title: 'Variance of the fair die',
          lines: [
            { label: 'Mean', text: '\\(E[X] = 3.5\\)' },
            { label: 'Squared deviations', text: '\\((1-3.5)^2, (2-3.5)^2, \\ldots = 6.25, 2.25, 0.25, 0.25, 2.25, 6.25\\)' },
            { label: 'Average them', text: '\\(\\operatorname{Var}(X) = \\tfrac16(6.25+2.25+0.25+0.25+2.25+6.25) = \\tfrac{17.5}{6} \\approx 2.92\\)' },
            { label: 'Standard deviation', text: '\\(\\sigma = \\sqrt{2.92} \\approx 1.71\\)' },
          ],
        },
        { t: 'p', text: 'This is exactly the σ from [volatility](@finance/foundations/risk-return) and the [standard deviation](@finance/technical/volatility) used in Bollinger Bands, the same formula, just applied to stock returns instead of die rolls.' },
        {
          t: 'metric',
          name: 'the expected value, E[X]',
          shows: 'The single number that best summarises a random variable\'s long-run average, what you\'d see, on average, if you could repeat the random process an enormous number of times and average every outcome.',
          eli5: 'If a carnival game costs $1 to play and pays $5 with a 1-in-10 chance (otherwise nothing), its expected value is \\(5(0.1) + 0(0.9) = 0.5\\), on average, 50 cents comes back per $1 spent. Play it once and you either win $5 or nothing; play it a thousand times and your average payout per play converges to very close to 50 cents.',
          higher: 'A higher expected payoff from a bet or decision means, on average, it pays off more over many repetitions, the basis of why insurance companies, casinos, and well-run trading strategies all design their odds around a favourable expected value, even though any single outcome is uncertain.',
          lower: 'A lower (or negative) expected value means the decision loses money on average over many repeats, even if individual outcomes occasionally win big, this is exactly why lottery tickets have a negative expected value for the player (and a positive one for the lottery operator) despite the occasional huge jackpot.',
          typical: 'Expected value alone never tells the whole story: two bets can have identical expected values but wildly different variances (see [volatility](@finance/foundations/risk-return) for why that spread matters just as much as the average).',
        },
      ],
    },
  ],
  sources: ['Ross, S. M. (2019). *A First Course in Probability* (10th ed.). Pearson.', 'Huygens, C. (1657). *De Ratiociniis in Ludo Aleae*.'],
  related: ['mathematics/probability/distributions', 'finance/foundations/risk-return', 'mathematics/calculus/integrals'],
}

export default guide
