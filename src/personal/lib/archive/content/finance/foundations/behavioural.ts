import type { Guide } from '../../../guide'

const v = (x: number) => (x >= 0 ? x ** 0.88 : -2.25 * (-x) ** 0.88)

const guide: Guide = {
  intro:
    'Classical finance assumes rational investors. Behavioural finance studies how real people decide, and finds systematic, predictable biases: we hate losses more than we love gains, we are overconfident, we follow the crowd. These biases help explain market anomalies, and they are traps for every investor.',
  nutshell: [
    '**Prospect theory**: we judge outcomes as gains or losses from a reference point, and losses hurt about twice as much as equal gains.',
    '**Disposition effect**: selling winners too early and holding losers too long.',
    '**Overconfidence** leads to too much trading; **herding** fuels bubbles and crashes.',
    '**Anchoring** on past prices, **recency bias** and **confirmation bias** distort judgement.',
    'Rules written in advance are the best defence.',
  ],
  sections: [
    {
      id: 'prospect',
      title: 'Prospect theory',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v(x) = \begin{cases} x^{\alpha} & x \ge 0 \\ -\lambda\,(-x)^{\beta} & x < 0 \end{cases}\qquad \alpha = \beta \approx 0.88,\quad \lambda \approx 2.25`,
          syntax: [
            { sym: String.raw`v(x)`, say: String.raw`Read "v of x": the felt value of an outcome x. It is a function, so plug a gain or loss in and a number comes out.` },
            { sym: String.raw`\begin{cases} \dots \end{cases}`, say: String.raw`A piecewise rule: check which condition is true (\(x \ge 0\), a gain, or \(x < 0\), a loss) and use only that line.` },
            { sym: String.raw`x^{\alpha}`, say: String.raw`Read "x to the power alpha": raise x to a power just below 1 (0.88). Because the exponent is under 1, each extra dollar adds a little less felt value than the last.` },
            { sym: String.raw`-\lambda\,(-x)^{\beta}`, say: String.raw`Flip the loss to a positive number with \(-x\), raise it to the power beta, multiply by lambda (2.25), then put the minus sign back so the result is negative.` },
          ],
          worked: {
            steps: [
              String.raw`Given: \(\alpha = \beta = 0.88\), \(\lambda = 2.25\). Compare a $100 gain with a $100 loss.`,
              String.raw`Gain: \(x = 100 \ge 0\), so use the top line: \(v(100) = 100^{0.88}\).`,
              String.raw`\(100^{0.88} = e^{0.88 \ln 100} = e^{4.0527} \approx 57.54\).`,
              String.raw`Loss: \(x = -100 < 0\), so use the bottom line: \(v(-100) = -2.25 \times (100)^{0.88} = -2.25 \times 57.54\).`,
              String.raw`\(-2.25 \times 57.54 \approx -129.47\).`,
            ],
            answer: String.raw`\(v(100) \approx 57.5\) but \(v(-100) \approx -129.5\): losing $100 hurts about 2.25 times as much as gaining $100 pleases.`,
          },
          where: [
            { sym: 'x', def: 'A gain or loss relative to a reference point (often the purchase price)' },
            { sym: String.raw`\lambda`, def: 'Loss aversion: losses loom about 2.25 times larger than gains' },
            { sym: String.raw`\alpha, \beta`, def: 'Below 1: diminishing sensitivity (the difference between $100 and $200 feels bigger than between $1,100 and $1,200)' },
          ],
          caption: 'Parameter estimates from Tversky and Kahneman (1992).',
        },
        {
          t: 'plot',
          title: 'The prospect theory value function',
          x: [-100, 100],
          y: [-140, 70],
          xLabel: 'Gain or loss ($)',
          yLabel: 'Felt value',
          curves: [{ f: v, label: 'v(x)' }],
          points: [
            { x: 50, y: v(50), label: '+$50 feels like +31' },
            { x: -50, y: v(-50), label: '−$50 feels like −70' },
          ],
          caption: 'Concave for gains (we take sure gains), convex and steeper for losses (we gamble to avoid a sure loss).',
        },
        {
          t: 'metric',
          name: 'the loss-aversion coefficient (λ)',
          shows: 'How much more a dollar lost hurts than an identical dollar gained feels good. Classical economics assumes gains and losses are mirror images; prospect theory measured that they are not, people treat them very differently when deciding what to do.',
          eli5: 'Finding a $20 bill on the pavement gives you a nice little buzz. Losing a $20 bill from your pocket ruins your afternoon. Even though the dollar amount is identical, the loss feels roughly twice as bad as the gain feels good, that ratio is λ.',
          higher: 'A bigger gap between how losses and gains feel. Someone with high loss aversion will hold onto a falling stock far too long (to avoid "locking in" the loss) and sell a rising stock too early (to "lock in" the gain), exactly the disposition effect described below. It also makes people reject good bets: a 50/50 coin flip to win $110 or lose $100 has a positive expected value, but many people with λ ≈ 2 turn it down anyway.',
          lower: 'Gains and losses feel closer to equally weighted, closer to the "rational" economic assumption. A lower λ (or decisions made with pre-set rules rather than in-the-moment feeling) makes it easier to cut a losing position and let a winning one run, which is the opposite of what most untrained investors actually do.',
          typical: 'Tversky and Kahneman\'s original estimate from experiments was λ ≈ 2.25; later studies across many settings typically find a range of roughly 1.5 to 2.5, losses generally hurt one-and-a-half to two-and-a-half times as much as equivalent gains feel good.',
        },
        { t: 'callout', tone: 'fact', title: 'A psychologist’s economics prize', text: 'Daniel Kahneman, a psychologist who never took an economics course, won the 2002 Nobel prize in economics for prospect theory, developed with Amos Tversky (who had died in 1996; Nobel prizes are not awarded posthumously).' },
      ],
    },
    {
      id: 'biases',
      title: 'Common investing biases',
      blocks: [
        {
          t: 'table',
          head: ['Bias', 'What happens', 'Defence'],
          rows: [
            ['Disposition effect', 'Sell winners to "lock in" gains, keep losers hoping to get even', 'Decide exit rules before buying'],
            ['Overconfidence', 'Trade too often; in one study, the most active traders earned the least', 'Track your real results'],
            ['Anchoring', 'Judge a price by what you paid or a past high', 'Ask what it is worth now'],
            ['Herding', 'Buy what everyone is buying', 'Write down your reasons before you act'],
            ['Recency', 'Assume recent trends will continue', 'Look at long histories'],
            ['Confirmation', 'Seek only information that supports your view', 'Write the case against your idea'],
            ['Mental accounting', 'Treat "house money" differently from savings', 'All money is the same money'],
          ],
        },
        {
          t: 'plot',
          title: 'Bubbles: a stylised boom and bust',
          x: [0, 20],
          y: [0, 6],
          xLabel: 'Time',
          yLabel: 'Price',
          curves: [{ f: (t: number) => (t < 13 ? 1 + 0.02 * Math.exp(t / 2.4) : 1 + 0.02 * Math.exp(13 / 2.4) * Math.exp(-(t - 13) / 1.6)), label: 'Price' }],
          shade: [
            { from: 4, to: 9, label: 'Enthusiasm', color: 'var(--mint)' },
            { from: 9, to: 13, label: 'Euphoria', color: 'var(--mustard)' },
            { from: 13, to: 20, label: 'Panic', color: 'var(--pink)' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Newton lost a fortune', text: 'Isaac Newton made money early in the 1720 South Sea Bubble, sold, then bought back in near the top and lost heavily. He is said to have remarked that he could calculate the motions of the heavenly bodies, but not the madness of people.' },
      ],
    },
  ],
  sources: [
    'Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–291.',
    'Tversky, A., & Kahneman, D. (1992). Advances in prospect theory. *Journal of Risk and Uncertainty*, 5(4), 297–323.',
    'Shefrin, H., & Statman, M. (1985). The disposition to sell winners too early and ride losers too long. *The Journal of Finance*, 40(3), 777–790.',
    'Barber, B. M., & Odean, T. (2000). Trading is hazardous to your wealth. *The Journal of Finance*, 55(2), 773–806.',
    'Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.',
  ],
  related: ['finance/foundations/efficient-markets', 'finance/technical/risk-management', 'thinking/biases'],
}

export default guide
