import type { Guide } from '../../../guide'
import { EX } from '../../../../finance/examples'

const guide: Guide = {
  intro:
    'Candlestick patterns are easy to spot and satisfying to name, but do they actually predict anything? The honest answer from research is: on their own, mostly not much, though context, confirmation and combination with other evidence can help. Test that for yourself with the pattern lab.',
  nutshell: [
    'Academic studies on large samples of stocks often find candlestick patterns, used alone, have **little or no predictive value** after costs.',
    'Some studies in particular markets and periods find some patterns profitable; results are inconsistent.',
    'Patterns work better as **context clues** (at support, after a long trend, with high volume) than as stand-alone signals.',
    'On random data, patterns still "appear", and their apparent success rates vary wildly with small samples.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The pattern lab',
      lead: 'This finds patterns in made-up random prices and shows what happened five candles later. Press "new random data" a few times.',
      blocks: [{ t: 'fin-tool', tool: 'patterns' }],
    },
    {
      id: 'stats',
      title: 'Why small samples fool us',
      blocks: [
        {
          t: 'p',
          text: 'If a pattern truly had no edge, the share of times price rose afterwards would still wander around the base rate. With \\(n\\) cases and a true rate \\(p\\), the standard error of the observed rate is:',
        },
        {
          t: 'math',
          tex: String.raw`SE(\hat p) = \sqrt{\frac{p(1-p)}{n}}`,
          where: [
            { sym: String.raw`\hat p`, def: 'The observed success rate' },
            { sym: 'p', def: 'The true, underlying success rate (unknown; p = 0.5 if the pattern has no real edge)' },
            { sym: 'n', def: 'Number of times the pattern appeared' },
          ],
          caption: 'With p = 0.5 and n = 25, SE = 0.1: a "70% success rate" is only two standard errors from pure chance. You need hundreds of cases to tell 55% from 50%.',
          syntax: [
            { sym: String.raw`SE(\hat p)`, say: String.raw`Read "the standard error of p-hat": the typical size of the sampling noise in the observed rate. The brackets mean "of", not multiplication.` },
            { sym: String.raw`\hat p`, say: String.raw`Read "p hat": the hat marks an estimate from data, as opposed to the true unknown \(p\).` },
            { sym: String.raw`\sqrt{\cdot}`, say: String.raw`Read "the square root of": calculate the fraction inside first, then take the root.` },
            { sym: String.raw`p(1-p)`, say: String.raw`Read "p times one minus p": multiply the chance of success by the chance of failure.` },
          ],
          worked: {
            title: String.raw`How much noise in a success rate`,
            steps: [
              String.raw`Given \(p = 0.5\) (no edge), so \(p(1-p) = 0.25\).`,
              String.raw`\(n = 25\): \(SE = \sqrt{0.25/25} = \sqrt{0.01} = 0.10\).`,
              String.raw`\(n = 100\): \(\sqrt{0.0025} = 0.05\). \(n = 400\): \(\sqrt{0.000625} = 0.025\).`,
              String.raw`Suppose the pattern scored 62%: that is \(0.12\) above 0.5, i.e. \(0.12/0.10 = 1.2\) SEs at \(n=25\), \(0.12/0.05 = 2.4\) at \(n=100\), and \(0.12/0.025 = 4.8\) at \(n=400\).`,
            ],
            answer: String.raw`The same 62% is indistinguishable from luck with 25 cases but convincing with 400; quadrupling the sample halves the noise.`,
          },
        },
        {
          t: 'plot',
          title: 'How the noise in a success rate shrinks with sample size',
          x: [5, 500],
          y: [0, 0.25],
          xLabel: 'Number of cases (n)',
          yLabel: 'Standard error',
          curves: [{ f: (n: number) => Math.sqrt(0.25 / n), label: 'SE when p = 0.5' }],
          points: [
            { x: 25, y: 0.1, label: 'n = 25: ±10%' },
            { x: 400, y: 0.025, label: 'n = 400: ±2.5%' },
          ],
        },
        {
          t: 'p',
          text: 'Test 20 patterns and one will look "significant" at the 5% level by luck alone: the chance at least one of 20 independent tests passes by accident is \\(1 - 0.95^{20} \\approx 64\\%\\).',
        },
      ],
    },
    {
      id: 'research',
      title: 'What researchers found',
      blocks: [
        {
          t: 'table',
          head: ['Study', 'Market', 'Finding'],
          rows: [
            ['Caginalp & Laurent (1998)', 'S&P 500 stocks, 1992–96', 'Some three-day reversal patterns showed predictive power'],
            ['Marshall, Young & Rose (2006)', 'Dow Jones stocks, 1992–2002', 'No useful information after accounting for chance'],
            ['Lu, Shiu & Liu (2012)', 'Taiwan stocks', 'Some patterns profitable after costs'],
            ['Bulkowski (2008)', 'Large sample of US stocks', 'Most patterns only slightly better than random; a few more reliable, in context'],
          ],
          caption: 'Mixed evidence: results depend on the market, the period, the exact rules and how carefully chance and costs are accounted for.',
        },
      ],
    },
    {
      id: 'better',
      title: 'Using patterns sensibly',
      blocks: [
        {
          t: 'candles',
          rows: EX.hammer,
          title: 'Context, then pattern, then confirmation',
          boxes: [
            { from: 0, to: 4, label: '1. Clear trend into support', color: 'var(--pink)' },
            { from: 5, to: 5, label: '2. Pattern', color: 'var(--mustard)' },
            { from: 6, to: 7, label: '3. Confirmation', color: 'var(--mint)' },
          ],
          lines: [{ y: 89.5, label: 'Stop below the hammer’s low' }],
        },
        {
          t: 'checklist',
          items: [
            'Is there a clear trend for the pattern to reverse?',
            'Is it at a meaningful level: support, resistance, a moving average?',
            'Did the next candle confirm it?',
            'Is volume unusually high?',
            'Where would you be wrong (your stop), and is the reward worth that risk?',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Your brain loves patterns', text: 'Humans see faces in clouds and patterns in noise (apophenia). Charts of pure random numbers show convincing head-and-shoulders, hammers and trends. That is why testing on data matters more than how a pattern looks.' },
      ],
    },
  ],
  sources: [
    'Caginalp, G., & Laurent, H. (1998). The predictive power of price patterns. *Applied Mathematical Finance*, 5(3–4), 181–205.',
    'Marshall, B. R., Young, M. R., & Rose, L. C. (2006). Candlestick technical trading strategies: Can they create value for investors? *Journal of Banking & Finance*, 30(8), 2303–2323.',
    'Lu, T.-H., Shiu, Y.-M., & Liu, T.-C. (2012). Profitable candlestick trading strategies: The evidence from a new perspective. *Review of Financial Economics*, 21(2), 63–68.',
    'Bulkowski, T. N. (2008). *Encyclopedia of Candlestick Charts*. Wiley.',
  ],
  related: ['finance/technical/evidence', 'finance/foundations/efficient-markets', 'finance/technical/risk-management'],
}

export default guide
