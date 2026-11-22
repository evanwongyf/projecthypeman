import type { Guide } from '../../../guide'

const v = (x: number) => (x >= 0 ? x ** 0.88 : -2.25 * (-x) ** 0.88)
const w = (p: number) => (p <= 0 ? 0 : p >= 1 ? 1 : p ** 0.61 / (p ** 0.61 + (1 - p) ** 0.61) ** (1 / 0.61))

const guide: Guide = {
  intro:
    'Standard economics assumes people weigh risky choices by their expected utility: the probability of each outcome times how much they value it. Daniel Kahneman and Amos Tversky spent the 1970s collecting choices that break this rule in predictable ways. People judge outcomes as gains and losses from a reference point, losses hurt about twice as much as equal gains please, and small probabilities loom too large. Their prospect theory (1979), which won Kahneman the 2002 Nobel Prize, explains why people buy both lottery tickets and insurance, hold losing shares too long and refuse fair bets. This guide starts from expected utility and its paradoxes, builds the value function and probability weights with the published parameters, and works through framing, the endowment effect and their uses.',
  nutshell: [
    '**Expected utility**: weight each outcome’s utility by its probability. A concave utility function produces risk aversion.',
    'The **Allais paradox** and the **reflection effect** show choices that no single utility function can explain.',
    'Prospect theory: outcomes are **gains or losses from a reference point**; the value function is **concave for gains, convex for losses**, and **steeper for losses** (loss aversion **λ ≈ 2.25**).',
    'Probabilities are **weighted**: small chances are **overweighted**, near-certainties **underweighted**, giving the **fourfold pattern** of risk attitudes.',
    '**Framing** (the same choice described as gains or losses) and the **endowment effect** (valuing what you own more) follow directly.',
  ],
  sections: [
    {
      id: 'eu',
      title: 'Expected utility and why it bends',
      lead: 'The benchmark.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EU = \sum_i p_i\, u(w + x_i), \qquad u(w) = \sqrt{w} \;\text{(concave: risk averse)}`,
          plain: 'Expected utility values a gamble by the average utility of final wealth across its outcomes. If extra money adds less and less utility (a concave utility function), a sure amount is preferred to a gamble with the same expected value, which explains insurance and diversification.',
          syntax: [
            { sym: String.raw`u(\cdot)`, say: 'The utility function: how much satisfaction a level of wealth gives.' },
            { sym: String.raw`w + x_i`, say: 'Final wealth: starting wealth plus the outcome.' },
          ],
          worked: {
            title: 'A risk-averse person and a coin flip',
            steps: [
              String.raw`Wealth $10,000; utility \(u = \sqrt{w}\). Offer: 50% chance of +$2,000, 50% of −$2,000.`,
              String.raw`\(EU = 0.5\sqrt{12000} + 0.5\sqrt{8000} = 0.5(109.54) + 0.5(89.44) = 99.49\).`,
              String.raw`Not playing: \(\sqrt{10000} = 100\). Reject the bet.`,
              String.raw`Certainty equivalent: \(99.49^2 \approx \$9{,}899\). The person would pay up to about $101 to avoid the gamble.`,
            ],
            why: ['the setting', 'average the utilities', 'the sure thing has higher utility', 'the risk premium'],
            answer: 'Risk aversion here comes from the curvature of utility over total wealth. A $101 premium on a ±$2,000 bet is reasonable. The trouble, shown next, is that people turn down small bets that this kind of curvature cannot explain.',
          },
        },
        {
          t: 'table',
          head: ['Problem', 'Option A', 'Option B', 'Typical choice'],
          rows: [
            ['1', '$1 million for sure', '10%: $5 million; 89%: $1 million; 1%: nothing', 'A (most people)'],
            ['2', '11%: $1 million; 89%: nothing', '10%: $5 million; 90%: nothing', 'B (most people)'],
          ],
          caption: 'The Allais paradox (1953). Both problems differ only by a common 89% chance of $1 million (problem 1) or of nothing (problem 2). Expected utility says the common part should not matter, so anyone who picks A in problem 1 should pick A in problem 2. Most people pick A then B: certainty has a special pull (the certainty effect).',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Rabin’s calibration',
          text: 'Matthew Rabin (2000) proved that if someone turns down a 50:50 bet to lose $100 or gain $110 at every wealth level, expected utility implies they would also turn down a 50:50 bet to lose $1,000 or gain any amount at all, even millions. Since people do not, aversion to small risks cannot come from curvature of utility over wealth. It comes from how losses feel relative to a reference point.',
        },
      ],
    },
    {
      id: 'value',
      title: 'The value function: reference points and loss aversion',
      lead: 'Gains and losses, not wealth.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`v(x) = \begin{cases} x^{\alpha} & x \ge 0 \\ -\lambda\,(-x)^{\beta} & x < 0 \end{cases} \qquad \alpha = \beta = 0.88,\; \lambda = 2.25`,
          plain: 'People value changes, not levels. Gains are valued with diminishing sensitivity (the second $100 matters less than the first), and so are losses (the curve is convex below zero). Losses are scaled up by λ: losing $100 feels about 2.25 times as bad as winning $100 feels good. The parameters are Tversky and Kahneman’s 1992 median estimates.',
          syntax: [
            { sym: String.raw`x`, say: 'The gain (positive) or loss (negative) relative to the reference point.' },
            { sym: String.raw`\lambda`, say: 'Read "lambda": the loss-aversion coefficient.' },
            { sym: String.raw`\alpha, \beta`, say: 'Curvature for gains and for losses; below 1 means diminishing sensitivity.' },
          ],
          worked: {
            title: 'A 50:50 bet: lose $100 or win $X',
            steps: [
              String.raw`\(v(100) = 100^{0.88} \approx 57.5\); \(v(-100) = -2.25 \times 57.5 \approx -129.5\).`,
              String.raw`With equal weights, accept if \(X^{0.88} \ge 2.25 \times 100^{0.88}\).`,
              String.raw`\(X \ge 2.25^{1/0.88} \times 100 \approx 2.51 \times 100 = \$251\).`,
            ],
            why: ['value of a gain and a loss of the same size', 'the bet is worth taking only if the felt gain beats the felt loss', 'solve for X'],
            answer: 'A typical person needs to win about $250 to accept a coin flip that risks $100, close to what experiments find (people usually demand about $200). Loss aversion, not wealth curvature, explains refusing small fair bets.',
          },
        },
        {
          t: 'plot',
          title: 'The prospect theory value function',
          x: [-100, 100],
          y: [-135, 70],
          xLabel: 'gain or loss ($)',
          yLabel: 'felt value',
          curves: [
            { f: v, label: 'v(x), λ = 2.25, α = 0.88' },
            { f: (x: number) => x * 0.575, label: 'a straight line through v(100)', dashed: true },
          ],
          points: [
            { x: 100, y: 57.5, label: '+$100 → 57.5' },
            { x: -100, y: -129.5, label: '−$100 → −129.5' },
          ],
          caption: 'Kinked at zero, steeper on the loss side, concave above and convex below. Where the reference point sits decides which part of the curve applies.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The reflection effect', tag: 'risk-seeking for losses', body: 'Choose: a sure $3,000, or an 80% chance of $4,000. Most take the sure gain. Choose: a sure loss of $3,000, or an 80% chance of losing $4,000. Most gamble. The convex loss side makes people risk-seeking to avoid a certain loss.' },
            { title: 'The disposition effect', tag: 'investors', body: 'Investors sell winning shares too early (locking in a gain) and hold losers too long (hoping to avoid realising a loss). Terrance Odean (1998) found this in thousands of brokerage accounts. See [behavioural finance](@finance/foundations/behavioural).' },
            { title: 'Break-even effect', tag: 'gamblers', body: 'Bettors who are down for the day take long-shot bets on the last races to get back to even, the reference point.' },
            { title: 'Reference points move', tag: 'expectations', body: 'The reference point can be the status quo, an expectation or a goal. A pay rise smaller than colleagues’ can feel like a loss.' },
          ],
        },
      ],
    },
    {
      id: 'weights',
      title: 'Probability weighting and the fourfold pattern',
      lead: 'Small chances feel big.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`w(p) = \frac{p^{\gamma}}{\left(p^{\gamma} + (1 - p)^{\gamma}\right)^{1/\gamma}}, \qquad \gamma \approx 0.61 \text{ (gains)}, \; 0.69 \text{ (losses)}`,
          plain: 'People do not treat probabilities linearly. The weighting function turns a stated probability into a decision weight: small probabilities get more weight than they deserve, moderate-to-large ones less. The curve crosses the diagonal at about one-third.',
          syntax: [
            { sym: String.raw`w(p)`, say: 'The decision weight attached to probability p.' },
            { sym: String.raw`\gamma`, say: 'Read "gamma": the curvature of the weighting function; 1 means no distortion.' },
          ],
          worked: {
            steps: [
              String.raw`\(w(0.01) = 0.01^{0.61} / (0.01^{0.61} + 0.99^{0.61})^{1/0.61} \approx 0.055\): a 1% chance feels like 5.5%.`,
              String.raw`\(w(0.5) \approx 0.42\): an even chance feels like 42%.`,
              String.raw`\(w(0.99) \approx 0.91\): near-certainty feels like 91%.`,
            ],
            why: ['tiny probabilities are inflated', 'moderate ones are shrunk', 'certainty is special: the step from 99% to 100% feels huge'],
            answer: 'Overweighting small probabilities explains why lotteries sell (a one-in-a-million chance feels far larger) and why people pay heavily to insure against rare disasters.',
          },
        },
        {
          t: 'plot',
          title: 'The probability weighting function (γ = 0.61)',
          x: [0, 1],
          y: [0, 1],
          xLabel: 'stated probability p',
          yLabel: 'decision weight w(p)',
          curves: [
            { f: (p: number) => p, label: 'no distortion', dashed: true },
            { f: w, label: 'w(p)' },
          ],
          points: [
            { x: 0.05, y: w(0.05), label: '5% feels like 13%' },
            { x: 0.9, y: w(0.9), label: '90% feels like 71%' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Gains', 'Losses'],
          rows: [
            ['High probability', 'Risk averse: take a sure $9,500 over a 95% chance of $10,000 (fear of disappointment)', 'Risk seeking: gamble on a 95% chance of losing $10,000 rather than lose $9,500 for sure (hope to avoid the loss)'],
            ['Low probability', 'Risk seeking: buy lottery tickets (hope of a large gain)', 'Risk averse: buy insurance against a 5% chance of losing $10,000 (fear of a large loss)'],
          ],
          caption: 'The fourfold pattern of risk attitudes. Expected utility with one utility function cannot produce all four; the value function and probability weighting together can.',
        },
        { t: 'econ-viz', viz: 'prospect' },
      ],
    },
    {
      id: 'framing',
      title: 'Framing and the endowment effect',
      lead: 'The same choice, described differently.',
      blocks: [
        {
          t: 'example',
          title: 'The Asian disease problem (Tversky and Kahneman, 1981)',
          lines: [
            { label: 'Setting', text: 'An outbreak is expected to kill 600 people. Two programmes are proposed.' },
            { label: 'Gain frame', text: 'A: 200 people will be saved. B: a one-third chance all 600 are saved, two-thirds chance none are. 72% chose A.' },
            { label: 'Loss frame', text: 'C: 400 people will die. D: a one-third chance nobody dies, two-thirds chance all 600 die. 78% chose D.' },
            { label: 'The catch', text: 'A and C are identical, as are B and D. Describing outcomes as lives saved (gains) produces risk aversion; as deaths (losses), risk seeking.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{WTA}{WTP} \approx \lambda \approx 2`,
          plain: 'The endowment effect: people demand more to give up something they own (willingness to accept, WTA) than they would pay to get it (willingness to pay, WTP). Giving it up is coded as a loss, buying it as a gain, so loss aversion predicts the ratio should be roughly λ.',
          syntax: [
            { sym: String.raw`WTA`, say: 'Willingness to accept: the lowest price at which an owner would sell.' },
            { sym: String.raw`WTP`, say: 'Willingness to pay: the highest price a non-owner would pay.' },
          ],
          worked: {
            title: 'The mug experiment',
            steps: [
              String.raw`Kahneman, Knetsch and Thaler (1990) gave half a class coffee mugs and let them trade with the other half.`,
              String.raw`Standard theory predicts about half the mugs should change hands, since they were handed out at random.`,
              String.raw`Far fewer traded. Owners’ median asking price was about $7; non-owners’ median offer about $3.`,
              String.raw`Ratio: \(7/3 \approx 2.3\), close to the loss-aversion coefficient.`,
            ],
            why: ['the experiment', 'random allocation should leave mugs with whoever values them most', 'owning changes the valuation', 'the ratio'],
            answer: 'Merely owning a mug for a few minutes doubled its value to the owner. The effect is smaller for goods held for trade (dealers do not feel selling as a loss) and for money itself.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Status quo bias', body: 'People stick with the default option, partly because moving away from it is felt as a loss of what they have. This is why defaults are such powerful policy tools: see [nudges](@economics/behavioural/fairness-and-nudges).' },
            { title: 'Surcharges and discounts', body: 'Card companies once insisted shops call the cash price a "discount" rather than calling the card price a "surcharge": the same price gap, but a surcharge is a loss.' },
            { title: 'Labour and sport', body: 'Golfers putt more accurately for par than for birdie (Pope and Schweitzer, 2011): missing par is a loss relative to the reference point.' },
            { title: 'Marketing', body: '"Don’t miss out" and free trials that convert to paid plans both exploit loss aversion: cancelling feels like losing something you have.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Ask what reference point a choice is being judged against', 'Reframe a decision both as gains and as losses to check your preference is stable', 'Evaluate investments by their prospects, not by your purchase price'],
          dont: ['Refuse every small favourable bet: over many such bets, loss aversion costs money', 'Hold a losing share only to avoid "realising" the loss', 'Overpay for insurance against tiny risks, such as extended warranties on cheap goods'],
        },
      ],
    },
  ],
  sources: [
    'Kahneman, D., and Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–291.',
    'Tversky, A., and Kahneman, D. (1992). Advances in prospect theory: Cumulative representation of uncertainty. *Journal of Risk and Uncertainty*, 5(4), 297–323.',
    'Tversky, A., and Kahneman, D. (1981). The framing of decisions and the psychology of choice. *Science*, 211(4481), 453–458.',
    'Kahneman, D., Knetsch, J. L., and Thaler, R. H. (1990). Experimental tests of the endowment effect and the Coase theorem. *Journal of Political Economy*, 98(6), 1325–1348.',
    'Allais, M. (1953). Le comportement de l’homme rationnel devant le risque. *Econometrica*, 21(4), 503–546.',
    'Rabin, M. (2000). Risk aversion and expected-utility theory: A calibration theorem. *Econometrica*, 68(5), 1281–1292.',
    'Odean, T. (1998). Are investors reluctant to realize their losses? *Journal of Finance*, 53(5), 1775–1798.',
    'Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.',
  ],
  related: ['economics/behavioural/present-bias', 'economics/behavioural/fairness-and-nudges', 'finance/foundations/behavioural'],
}

export default guide
