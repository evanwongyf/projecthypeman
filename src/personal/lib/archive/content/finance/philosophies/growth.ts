import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Growth investors buy companies whose sales and profits are expanding much faster than the economy, and are willing to pay high multiples for them, betting that growth will justify the price. The approach was shaped by **Philip Fisher** in the 1950s and powers much of modern technology investing.',
  nutshell: [
    'Look for large markets, durable advantages and reinvestment at high returns.',
    'Fisher’s **scuttlebutt**: talk to customers, suppliers, competitors and ex-employees.',
    'A high P/E can be cheap if growth lasts; the risk is that growth slows and the multiple collapses at the same time.',
    'Rules of thumb like the **Rule of 40** help compare fast-growing software firms.',
  ],
  sections: [
    {
      id: 'maths',
      title: 'Why growth deserves a higher multiple, and when it does not',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_0 = \frac{E_1\,(1 - b)}{r - g},\qquad g = b \times ROE`,
          where: [
            { sym: 'P_0', def: 'Fair value of the stock today' },
            { sym: 'E_1', def: 'Expected earnings next year' },
            { sym: 'r', def: 'Required rate of return (discount rate)' },
            { sym: 'g', def: 'Sustainable long-run earnings growth rate' },
            { sym: 'b', def: 'Share of earnings reinvested (1 − payout ratio)' },
            { sym: 'ROE', def: 'Return on the reinvested equity' },
          ],
          syntax: [
            { sym: 'E_1(1 - b)', say: String.raw`Read "E one times one minus b". Next year’s earnings multiplied by the share not reinvested, i.e. the dividend the owner can actually take.` },
            { sym: String.raw`\frac{\cdot}{r - g}`, say: String.raw`Read "over r minus g". Divide by the gap between the required return and growth; as \(g\) climbs toward \(r\), the gap, and so the value, blows up.` },
            { sym: String.raw`g = b \times ROE`, say: 'Read "g equals b times ROE". Growth is the share of profit you plough back multiplied by what that reinvested money earns.' },
          ],
          worked: {
            title: 'Reinvesting half of earnings',
            steps: [
              String.raw`Given: next year’s earnings \(E_1 = 4.00\) a share, reinvestment \(b = 0.5\), \(ROE = 20\%\), required return \(r = 12\%\).`,
              String.raw`Growth: \(g = 0.5 \times 20\% = 10\%\).`,
              String.raw`Dividend: \(E_1(1-b) = 4.00 \times 0.5 = 2.00\).`,
              String.raw`Value: \(P_0 = 2.00/(0.12 - 0.10) = 2.00/0.02 = 100\), a P/E of \(100/4 = 25\).`,
              String.raw`Same company with \(ROE = 12\%\) (equal to \(r\)): \(g = 6\%\) and \(P_0 = 2.00/0.06 \approx 33.3\), a P/E of only about 8.3.`,
            ],
            answer: 'Reinvesting at 20% justifies a price of 100 (P/E 25), but reinvesting at only 12% cuts it to about 33, so growth is worth paying for only when ROE beats r.',
          },
          caption: 'Growth only adds value when reinvested capital earns more than the required return (ROE > r); growth at low returns destroys value even as profits rise, because every dollar kept back from shareholders earns less than they could have earned putting it elsewhere. The formula also explains why the implied fair P/E can swing wildly: as g approaches r, the denominator shrinks toward zero and the justified price (and P/E) rockets upward, which is exactly how high-growth stocks can carry seemingly absurd multiples that are not irrational, provided the growth and the ROE behind it are real and durable.',
        },
        {
          t: 'example',
          title: 'Two companies, both reinvesting 60% of earnings, r = 10%',
          lines: [
            { label: 'High ROE', text: '\\(ROE = 15\\%\\): \\(g = 0.6 \\times 15\\% = 9\\%\\); P/E \\(= 0.4/(0.10 - 0.09) = 40\\)' },
            { label: 'Low ROE', text: '\\(ROE = 8\\%\\): \\(g = 4.8\\%\\); P/E \\(= 0.4/(0.10 - 0.048) \\approx 7.7\\), lower than paying it all out (P/E = 10)' },
          ],
        },
        {
          t: 'plot',
          title: 'The double whammy: earnings miss and multiple contraction',
          x: [0, 5],
          y: [0, 170],
          xLabel: 'Years',
          yLabel: 'Share price',
          curves: [
            { f: (t: number) => 100 * 1.25 ** t * (t < 2 ? 1 : 0) + (t >= 2 ? 156 * (0.4 + 0.6 * Math.exp(-(t - 2) * 3)) : 0), label: 'Growth stock that disappoints' },
          ],
          caption: 'Stylised: when growth slows, both earnings estimates and the P/E fall, so the price can halve even while the company still grows.',
        },
      ],
    },
    {
      id: 'fisher',
      title: 'Fisher’s approach',
      blocks: [
        {
          t: 'list',
          items: [
            'Products or services with enough market potential for years of sales growth.',
            'Management determined to keep developing new products as current ones mature.',
            'Effective research and development, relative to the company’s size.',
            'Above-average sales organisation and profit margins.',
            'Good labour and executive relations; depth of management.',
            'Integrity of management, and candour when things go wrong.',
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Rule of 40:}\quad \text{revenue growth \%} + \text{profit margin \%} \ge 40`,
          syntax: [
            { sym: String.raw`\ge 40`, say: 'Read "at least 40". Growth and margin are added as plain percentage numbers, so 30% growth plus 10% margin is 30 + 10 = 40.' },
            { sym: String.raw`\text{profit margin \%}`, say: 'Read "profit margin percent". Usually free-cash-flow or EBITDA margin; it can be negative, which subtracts from the total.' },
          ],
          worked: {
            title: 'Three software companies',
            steps: [
              String.raw`Company X: revenue growth 32%, profit margin 11%. Score \(= 32 + 11 = 43\): pass.`,
              String.raw`Company Y: growth 8%, margin 35%. Score \(= 8 + 35 = 43\): pass by a different route.`,
              String.raw`Company Z: growth 15%, margin −5% (burning cash). Score \(= 15 + (-5) = 10\): well short.`,
            ],
            answer: 'X and Y both score 43 despite very different profiles, while Z at 10 is neither growing fast nor paying its way.',
          },
          caption: 'A venture-capital rule of thumb for software companies balancing growth against profitability: the two numbers are treated as substitutes, so a company can clear the bar by growing fast and burning cash, or growing modestly while solidly profitable. Comfortably above 40 is read as a well-balanced business investors will reward with a higher multiple; sitting well below 40 with neither high growth nor real margin is a company that is neither compounding fast nor paying its own way, which is the combination that gets punished hardest in a downturn.',
        },
        {
          t: 'metric',
          name: 'the Rule of 40',
          shows: 'whether a software or subscription business is trading growth for profitability in a healthy way, by adding its revenue growth rate to its profit margin (often EBITDA or free-cash-flow margin) into a single number.',
          eli5: 'A company gets to spend its "40 points" however it likes: all on growth (40% growth, 0% margin), all on profit (0% growth, 40% margin), or split between them (20% and 20%). What matters is the total, not how it is split.',
          higher: 'A score well above 40, especially if margin is positive, not just growth, signals a business compounding efficiently: it is either growing fast without destroying cash, or growing steadily while generating real profit. Investors have historically paid higher revenue multiples for software companies that clear this bar comfortably.',
          lower: 'A score well below 40 signals a business burning cash to chase growth that is not fast enough to justify it, or one that has slowed down without becoming more profitable to compensate. Either way it is a warning that the growth-versus-profitability trade-off is not working in the company’s favour.',
          typical: 'Public software companies clustering well above 40 (growth plus margin near 60–80+) are typically rewarded with premium valuations; the threshold is softer for very early-stage companies deliberately prioritising growth, where investors may tolerate a lower score if growth alone is exceptional.',
        },
        { t: 'callout', tone: 'fact', title: 'Hold for decades', text: 'Philip Fisher bought Motorola in 1955 and held it until his death in 2004. His book *Common Stocks and Uncommon Profits* (1958) influenced Warren Buffett, who said he was "85% Graham and 15% Fisher".' },
      ],
    },
  ],
  sources: ['Fisher, P. A. (1958). *Common Stocks and Uncommon Profits*. Harper & Brothers.', 'Damodaran, A. (2012). *Investment Valuation* (3rd ed.). Wiley.'],
  related: ['finance/philosophies/garp', 'finance/frameworks/canslim', 'finance/fundamental/multiples'],
}

export default guide
