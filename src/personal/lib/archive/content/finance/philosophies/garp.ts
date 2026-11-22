import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'GARP, growth at a reasonable price, sits between value and growth investing: buy companies growing faster than average, but do not overpay. Its best-known champion is **Peter Lynch**, who ran Fidelity’s Magellan fund from 1977 to 1990.',
  nutshell: [
    'The **PEG ratio** (P/E ÷ growth) is the GARP yardstick; around 1 or below is attractive.',
    'Lynch’s **six categories** set different expectations for different kinds of company.',
    '"Invest in what you know": spot good businesses in daily life, then do the homework.',
    'A **tenbagger** (a stock that rises tenfold) usually comes from a fast grower held for years.',
  ],
  sections: [
    {
      id: 'peg',
      title: 'The PEG ratio',
      blocks: [
        {
          t: 'math',
          tex: String.raw`PEG = \frac{P/E}{g\ (\%)},\qquad \text{Lynch’s dividend-adjusted version: } \frac{g + \text{dividend yield}}{P/E}\ \ge 2 \text{ is excellent}`,
          where: [
            { sym: 'P/E', def: 'Price-to-earnings ratio' },
            { sym: 'g', def: 'Expected earnings growth rate, as a plain number (25 for 25%, not 0.25)' },
          ],
          syntax: [
            { sym: String.raw`\frac{P/E}{g\ (\%)}`, say: 'Read "P/E divided by growth". Use the growth rate as a whole number of percent (25, not 0.25), so the answer is on the usual scale around 1.' },
            { sym: String.raw`\ge 2`, say: 'Read "is at least 2". In Lynch’s version, add growth and dividend yield (both as whole percentages) on top and divide by the P/E; a result of 2 or more is excellent.' },
          ],
          worked: {
            title: 'Two stocks',
            steps: [
              String.raw`Stock A: price 60, earnings per share 3.00, so \(P/E = 60/3 = 20\). Expected growth 25% a year.`,
              String.raw`\(PEG = 20/25 = 0.8\): below 1, a GARP candidate.`,
              String.raw`Stock B: same P/E of 20 but growth of only 8%. \(PEG = 20/8 = 2.5\): expensive for its growth.`,
              String.raw`Lynch’s version for a utility: P/E 9, growth 15%, yield 3%. \((15 + 3)/9 = 2.0\).`,
            ],
            answer: 'A is the better value (PEG 0.8 against 2.5 at the same P/E), and the utility scores exactly 2.0, the "excellent" threshold.',
          },
          caption: 'A stock on a P/E of 20 growing 25% a year has PEG 0.8; one on a P/E of 20 growing 8% has PEG 2.5. PEG around 1 or below is the GARP sweet spot: you are paying roughly one year of P/E for each percentage point of growth. A PEG well above 2 means you are paying a steep premium for growth that may not show up; a PEG well below 1 looks like a bargain but is also worth double-checking, since the market sometimes prices a stock cheap on this measure precisely because it doubts the growth rate will hold.',
        },
        {
          t: 'metric',
          name: 'the PEG ratio',
          shows: 'how expensive a stock is relative to its own growth rate, rather than relative to earnings alone. It answers the question a plain P/E cannot: is this P/E of 30 expensive, or cheap, given how fast the company is actually growing?',
          eli5: 'Two students both charge $30 an hour for tutoring. One is improving 25% a year, the other 5%. Judging only by the hourly rate, they look equally "expensive"but PEG accounts for the improvement, and says the fast learner is the better deal at the same price.',
          higher: 'A high PEG (well above 1, especially above 2) means the price has run ahead of the growth backing it up, you are paying for growth that has to show up just to justify today’s price, let alone deliver upside. This is how "expensive-looking" growth stocks (high P/E) can actually be fairly priced if g is high enough, and how "cheap-looking" ones (low P/E) can still be overpriced if g is low.',
          lower: 'A low PEG (around or below 1) suggests the price has not fully caught up with the growth rate, the classic GARP target. But a PEG near or below 0 (negative or near-zero growth) breaks down as a useful number entirely, and a very low PEG on a stock with an unstable growth history is often a value trap wearing a growth disguise.',
          typical: 'Peter Lynch generally treated PEG under 1 as attractive and over 2 as a warning sign, with a dividend-adjusted version requiring (g + yield)/PE above 2 to count as "excellent"PEG is only as reliable as the growth estimate feeding it, so it works best on companies with a consistent multi-year growth record, not a single good quarter.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Tenbagger: } (1 + g)^n = 10 \;\Rightarrow\; n = \frac{\ln 10}{\ln(1+g)}`,
          where: [
            { sym: 'g', def: 'Annual earnings growth rate (as a decimal, e.g. 0.20 for 20%)' },
            { sym: 'n', def: 'Number of years for earnings to multiply tenfold at that growth rate' },
          ],
          syntax: [
            { sym: String.raw`\ln`, say: 'Read "natural log of" (or "ell-en"). It asks: what power of the number e gives this? It turns repeated multiplication into something you can divide.' },
            { sym: String.raw`\Rightarrow`, say: 'Read "which implies". The right side follows from the left by rearranging the equation.' },
            { sym: String.raw`(1+g)^n`, say: 'Read "one plus g to the n". Growth of g a year for n years multiplies the starting value by this.' },
          ],
          worked: {
            title: 'How long for earnings to multiply by 10?',
            steps: [
              String.raw`At \(g = 0.20\): \(n = \ln 10 / \ln 1.2 = 2.3026/0.1823 \approx 12.6\) years.`,
              String.raw`Check: \(1.2^{12.63} \approx 10.0\).`,
              String.raw`At \(g = 0.30\): \(n = 2.3026/0.2624 \approx 8.8\) years.`,
              String.raw`At \(g = 0.25\): \(n = 2.3026/0.2231 \approx 10.3\) years.`,
              'In money terms, 10,000 of earnings growing at 25% a year becomes about 100,000 after roughly 10.3 years.',
            ],
            answer: 'At 20% growth a tenbagger takes about 12.6 years, at 25% about 10.3 and at 30% about 8.8: patience matters as much as growth.',
          },
          caption: 'At 20% a year, earnings rise tenfold in about 12.6 years; at 30%, in about 8.8. The point of the formula is less the arithmetic than the patience it implies: a genuine tenbagger is almost never a sudden event, it is ordinary-looking compounding at a high rate, held through a decade of interim ups and downs that would tempt most holders to sell long before the tenfold mark.',
        },
      ],
    },
    {
      id: 'categories',
      title: 'Lynch’s six categories',
      blocks: [
        {
          t: 'table',
          head: ['Category', 'Typical growth', 'What to expect'],
          rows: [
            ['Slow growers', '2–4%', 'Bought for dividends'],
            ['Stalwarts', '10–12%', 'Solid 30–50% gains; protection in recessions'],
            ['Fast growers', '20–25%+', 'Where tenbaggers come from; watch for slowing'],
            ['Cyclicals', 'Rise and fall with the economy', 'Timing matters: low P/E can mean the peak'],
            ['Turnarounds', 'Negative to recovering', 'Big gains if they survive'],
            ['Asset plays', 'Any', 'Hidden assets (property, cash) the market overlooks'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Magellan', text: 'Under Lynch, Magellan returned about 29% a year from 1977 to 1990, growing from about $18 million to $14 billion. Yet Fidelity found that many of its investors lost money, because they bought after good runs and sold after bad ones.' },
      ],
    },
  ],
  sources: ['Lynch, P. (1989). *One Up on Wall Street*. Simon & Schuster.', 'Lynch, P. (1993). *Beating the Street*. Simon & Schuster.'],
  related: ['finance/philosophies/growth', 'finance/fundamental/multiples', 'finance/fundamental/value-investing'],
}

export default guide
