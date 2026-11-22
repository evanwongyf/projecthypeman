import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Value investing means buying businesses for less than they are worth and waiting for the market to notice. Founded by Benjamin Graham in the 1930s and made famous by Warren Buffett, it rests on three ideas: a share is part of a business, the market is moody, and you need a margin of safety.',
  nutshell: [
    '**Margin of safety**: buy only when the price is well below your estimate of value, to allow for mistakes.',
    '**Mr Market**: a moody business partner who offers to buy or sell every day at prices driven by emotion.',
    'Graham’s rough screens: P/E under 15, P/B under 1.5, giving the **Graham number** \\(\\sqrt{22.5 \\times EPS \\times BVPS}\\).',
    'Buffett shifted the focus to **wonderful businesses at fair prices** rather than fair businesses at wonderful prices.',
    'The "value premium" has been strong historically but weak for long stretches, notably the 2010s.',
  ],
  sections: [
    {
      id: 'mos',
      title: 'Margin of safety',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Margin of safety} = 1 - \frac{\text{Price}}{\text{Intrinsic value}}`,
          syntax: [
            { sym: String.raw`1 - \frac{\text{Price}}{\text{Intrinsic value}}`, say: 'Divide price by value first to find what fraction of value you are paying, then subtract from 1 to get the discount.' },
          ],
          worked: {
            title: String.raw`A stock with an estimated value of $50`,
            steps: [
              String.raw`Given: intrinsic value estimate $50, market price $32.`,
              String.raw`Fraction of value paid: \(32/50 = 0.64\).`,
              String.raw`Margin of safety: \(1 - 0.64 = 0.36 = 36\%\).`,
              String.raw`Stress test: if the true value is only $40, you still paid $32, a discount of \(1 - 32/40 = 20\%\). It takes a fall to $32 to erase the cushion.`,
            ],
            answer: String.raw`A 36% margin of safety: your $50 estimate can be too high by up to 36% before you overpay.`,
          },
          caption: 'A stock worth $20 bought at $14 has a 30% margin of safety: your value estimate can be 30% too high and you still do not overpay.',
        },
        {
          t: 'metric',
          name: 'the margin of safety',
          shows: 'How much cushion you have between the price you pay and your estimate of what the business is actually worth, a buffer against being wrong, since no valuation estimate is ever exactly right. It is less a formula to compute precisely and more a discipline: never pay full price for your own best guess.',
          eli5: 'An engineer building a bridge designed to hold 10 tonnes does not build it to hold exactly 10 tonnes, they build it to hold 15 or 20, because materials vary, loads are unpredictable, and mistakes happen. A margin of safety in investing is the same idea: build in room for your value estimate to be wrong.',
          higher: 'More room for your valuation to be wrong and still come out fine, if your fair-value estimate was too optimistic, or the business hits a rough patch, a large margin of safety means you likely still avoid a loss. Graham\'s defensive investors typically looked for 30%+ discounts to estimated value.',
          lower: 'Little or no cushion, if your estimate of value is even slightly too high, or something goes wrong with the business, you can lose money even though your analysis was broadly "right" about the business\'s quality. Buying with little or no margin of safety is closer to speculation than classic value investing, however good the business looks.',
          typical: 'Graham-style deep-value investors often demanded 30–50%+ discounts to estimated value, reflecting how uncertain those estimates (and the underlying businesses) can be; Buffett-style investors in higher-quality, more predictable businesses have sometimes accepted smaller margins, reasoning that a "wonderful business" carries less estimation risk.',
        },
        {
          t: 'plot',
          title: 'Buying with a margin of safety',
          x: [0, 30],
          y: [5, 30],
          xLabel: 'Time',
          yLabel: 'Price',
          curves: [
            { f: () => 20, label: 'Estimated value', dashed: true },
            { f: () => 14, label: 'Buy below (30% margin)', dashed: true, color: '#2f9e6e' },
            { f: (t: number) => 18 + 5 * Math.sin(t / 2.5) + 2 * Math.sin(t / 0.9), label: 'Price' },
          ],
          shade: [{ from: 10.5, to: 13.5, label: 'Buy zone', color: 'var(--mint)' }],
        },
      ],
    },
    {
      id: 'graham-number',
      title: 'The Graham number',
      blocks: [
        {
          t: 'p',
          text: 'In *The Intelligent Investor*, Graham suggested a defensive investor should pay no more than 15 times earnings and 1.5 times book value, but allowed a trade-off: a higher P/E is acceptable with a lower P/B, as long as their product stays below \\(15 \\times 1.5 = 22.5\\).',
        },
        {
          t: 'math',
          tex: String.raw`\frac{P}{EPS}\times\frac{P}{BVPS} \le 22.5\quad\Longrightarrow\quad P \le \sqrt{22.5 \times EPS \times BVPS}`,
          syntax: [
            { sym: String.raw`\le`, say: 'Read "is less than or equal to": a ceiling. The product of P/E and P/B may touch 22.5 but not exceed it.' },
            { sym: String.raw`\Longrightarrow`, say: 'Read "which means". Rearrange the left-hand test to get a maximum price.' },
            { sym: String.raw`\sqrt{22.5 \times EPS \times BVPS}`, say: 'Read "the square root of 22.5 times EPS times BVPS": multiply the three numbers, then take the square root of the result.' },
            { sym: String.raw`BVPS`, say: 'Read "B-V-P-S": book value per share, equity divided by shares.' },
          ],
          worked: {
            title: 'Two stocks against the Graham number',
            steps: [
              String.raw`Given: EPS $2.00, BVPS $18.00.`,
              String.raw`Graham number: \(\sqrt{22.5 \times 2.00 \times 18.00} = \sqrt{810} = 28.46\).`,
              String.raw`Stock at $25: P/E \(= 12.5\), P/B \(= 25/18 = 1.39\), product \(= 17.4 \le 22.5\). It passes, and \(25 \le 28.46\).`,
              String.raw`Stock at $30: P/E \(= 15.0\), P/B \(= 1.67\), product \(= 25.0 > 22.5\). It fails, and \(30 > 28.46\).`,
            ],
            answer: String.raw`The two tests agree: the maximum price Graham’s screen would pay is about $28.46.`,
          },
          where: [
            { sym: 'EPS', def: 'Earnings per share' },
            { sym: 'BVPS', def: 'Book value (equity) per share' },
          ],
          caption: 'A ceiling price, not a target: if a stock trades above the Graham number, Graham’s defensive screen would pass on it, regardless of how good the story sounds. The trade-off built into the 22.5 cap means a stock can earn a slightly higher "allowed" P/E if its P/B is low enough, and vice versa.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Graham number}_{\text{Kopi}} = \sqrt{22.5 \times 0.72 \times 3.00} = \sqrt{48.6} \approx 6.97`,
          syntax: [
            { sym: String.raw`\sqrt{48.6}`, say: 'Read "the square root of 48.6": the number which, multiplied by itself, gives 48.6.' },
            { sym: String.raw`\approx`, say: 'Read "is approximately". The square root is rounded.' },
          ],
          worked: {
            title: 'Kopi & Co against its Graham number',
            steps: [
              String.raw`Given: net income $72m, equity $300m, 100m shares.`,
              String.raw`EPS \(= 72/100 = 0.72\); BVPS \(= 300/100 = 3.00\).`,
              String.raw`Product: \(22.5 \times 0.72 \times 3.00 = 48.6\).`,
              String.raw`Square root: \(\sqrt{48.6} = 6.97\).`,
              String.raw`Compare with the $12 price: \(12/6.97 = 1.72\), i.e. 72% above the ceiling. Equivalently P/E \(\times\) P/B \(= 16.7 \times 4.0 = 66.7\), far above 22.5.`,
            ],
            answer: String.raw`The Graham number is $6.97, so Kopi at $12 fails the screen by a wide margin.`,
          },
          caption: 'Kopi trades at $12, far above its Graham number. Graham would have passed; Buffett might ask whether its 20% ROIC justifies a premium.',
        },
        {
          t: 'math',
          tex: String.raw`V = EPS \times (8.5 + 2g)`,
          syntax: [
            { sym: String.raw`2g`, say: 'Read "two g", i.e. 2 times g. With g entered as a whole number (8 for 8%), a growth rate of 8% adds 16 points to the P/E.' },
            { sym: String.raw`(8.5 + 2g)`, say: 'Work inside the brackets first: this is the P/E Graham thought justified, which is then multiplied by EPS.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: net income $135m, 100m shares, so EPS \(= \$1.35\); expected growth \(g = 8\) (% a year).`,
              String.raw`Fair P/E: \(8.5 + 2 \times 8 = 24.5\).`,
              String.raw`Value: \(V = 1.35 \times 24.5 = \$33.08\).`,
              String.raw`Compare with a market price of $28: \(1 - 28/33.08 = 15\%\) below V.`,
            ],
            answer: String.raw`\(V \approx \$33\): at $28 the shares trade 15% under Graham’s growth value, a modest margin of safety.`,
          },
          where: [
            { sym: 'EPS', def: 'Earnings per share' },
            { sym: 'g', def: 'Expected annual earnings growth, in percent, over the next 7–10 years' },
          ],
          caption: 'Graham’s rough growth formula (1962): 8.5 is the P/E he thought fair for a company with no growth, and g is expected annual growth in percent over 7–10 years. Treat V as a sanity-check ceiling, not a precise valuation, compare it with the market price the same way as the Graham number above, and remember the whole result rests on how confident you really are in your growth guess.',
        },
      ],
    },
    {
      id: 'mr-market',
      title: 'Mr Market',
      blocks: [
        { t: 'quote', text: 'Mr. Market’s job is to provide you with prices; your job is to decide whether it is to your advantage to act on them.', by: 'Benjamin Graham, The Intelligent Investor (1949)' },
        {
          t: 'p',
          text: 'Imagine a business partner who every day offers to buy your share or sell you his, at a price that swings with his mood: euphoric one day, despairing the next. You are free to ignore him. His moods are an opportunity, not a guide to value.',
        },
      ],
    },
    {
      id: 'buffett',
      title: 'From Graham to Buffett',
      blocks: [
        {
          t: 'table',
          head: ['', 'Graham-style "deep value"', 'Buffett-style "quality at a fair price"'],
          rows: [
            ['Looks for', 'Statistically cheap stocks: low P/E, P/B, net-net', 'Great businesses with durable moats and good managers'],
            ['Holding period', 'Until price reaches value (a few years)', 'Ideally forever'],
            ['Diversification', 'Many stocks, each a small bet', 'Concentrated in best ideas'],
            ['Famous line', '"Margin of safety"', '"It’s far better to buy a wonderful company at a fair price than a fair company at a wonderful price."'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Buffett’s first stock', text: 'Warren Buffett bought his first shares, three of Cities Service preferred, at age 11 in 1942. They fell, then recovered, and he sold for a tiny profit, before watching them rise far higher: an early lesson in patience.' },
        { t: 'callout', tone: 'fact', title: 'Net-nets', text: 'Graham’s favourite bargains were "net-nets": companies trading below their current assets minus all liabilities, so you were in effect getting the factories for free. They are rare today in large markets but still turn up among small companies.' },
      ],
    },
  ],
  sources: [
    'Graham, B. (1949). *The Intelligent Investor*. Harper & Brothers.',
    'Buffett, W. E. (1989). Chairman’s letter. *Berkshire Hathaway Annual Report*.',
    'Fama, E. F., & French, K. R. (1992). The cross-section of expected stock returns. *The Journal of Finance*, 47(2), 427–465.',
    'Schroeder, A. (2008). *The Snowball: Warren Buffett and the Business of Life*. Bantam.',
  ],
  related: ['finance/fundamental/quality', 'finance/fundamental/multiples', 'finance/foundations/behavioural'],
}

export default guide
