import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Multiples compare a company’s price with one measure of its business: earnings, book value, sales or cash flow. They are quick, intuitive and everywhere in financial news, but each hides assumptions about growth and risk. Kopi & Co’s shares trade at **$12**.',
  nutshell: [
    '**P/E**: price per dollar of earnings. Kopi: 12 / 0.72 ≈ 16.7.',
    '**Earnings yield** is the inverse of P/E: 6%.',
    '**PEG** divides P/E by growth, a rough adjustment for growth.',
    '**EV/EBITDA** values the whole business (debt included), so it compares companies with different debt levels fairly.',
    '**CAPE** uses ten years of inflation-adjusted earnings to smooth out the business cycle.',
  ],
  sections: [
    {
      id: 'pe',
      title: 'Price-to-earnings',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P/E = \frac{\text{Share price}}{\text{EPS}} = \frac{12}{0.72} \approx 16.7,\qquad \text{Earnings yield} = \frac{\text{EPS}}{\text{Price}} = \frac{0.72}{12} = 6\%`,
          syntax: [
            { sym: String.raw`P/E`, say: 'Read "P over E" or "the P-E ratio". The slash is division: price divided by earnings per share.' },
            { sym: String.raw`\approx`, say: 'Read "is approximately": 16.67 has been rounded to 16.7.' },
            { sym: String.raw`\text{Earnings yield}`, say: 'This is the same pair of numbers turned upside down: earnings over price instead of price over earnings, so it is a percentage return rather than a multiple.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: share price $45; net income $250m; 100m shares, so EPS \(= 250/100 = \$2.50\).`,
              String.raw`P/E: \(45 / 2.50 = 18.0\).`,
              String.raw`Earnings yield: \(2.50 / 45 = 0.0556 = 5.56\%\), which is also \(1/18\).`,
              String.raw`Compare with a safe 4% bond: the stock’s earnings yield of 5.56% is 1.56 points higher, but unlike the bond’s coupon, those earnings can grow or fall.`,
            ],
            answer: String.raw`Investors pay $18 for each $1 of yearly profit, equivalent to a 5.56% earnings return on the price.`,
          },
          caption: 'A P/E of 16.7 means investors pay $16.70 for each $1 of yearly profit. If profits stayed flat, it would take 16.7 years of earnings to "pay back" the price.',
        },
        {
          t: 'metric',
          name: 'the price-to-earnings (P/E) ratio',
          shows: 'How many dollars investors are willing to pay today for each dollar of a company\'s current annual profit, the market\'s shorthand for how expensive a stock is relative to what it actually earns right now. Because it packs so much into one number, it is probably the most quoted statistic in investing, and also one of the most misused when used alone.',
          eli5: 'If a lemonade stand is for sale for $1,670 and makes $100 profit a year, its P/E is 16.7, you are paying almost 17 years\' worth of today\'s profit to own it. You would only do that if you expected the stand to make more money in future years than it does now.',
          higher: 'The market is paying more per dollar of current profit, usually because it expects earnings to grow a lot in the future, or because it sees the business as unusually safe (low required return). A high P/E can also simply mean a stock is expensive or hyped relative to its fundamentals, which is only clear in hindsight.',
          lower: 'The market is paying less per dollar of current profit, usually because it expects earnings to stay flat or shrink, or sees real risk in the business. A low P/E can be a genuine bargain overlooked by other investors ("value"), or a fair price for a business in real trouble, the hard part of fundamental analysis is telling these two apart.',
          typical: 'The long-run average for the US S&P 500 is roughly 15–20; under about 10 is often called "cheap" and over about 30 "expensive", but fast-growing tech companies routinely trade at P/E 40–80+ while mature utilities often sit at P/E 12–16, always compare within the same industry.',
        },
        {
          t: 'p',
          text: '**What a P/E implies.** From the Gordon growth model (see [dividend models](@finance/fundamental/dividend-models)), with payout ratio \\(b\\), required return \\(r\\) and growth \\(g\\):',
        },
        {
          t: 'math',
          tex: String.raw`\frac{P_0}{E_1} = \frac{b}{r - g}`,
          syntax: [
            { sym: String.raw`\frac{P_0}{E_1}`, say: String.raw`Read "P zero over E one": today’s price divided by next year’s earnings. This is a forward P/E.` },
            { sym: String.raw`\frac{b}{r - g}`, say: 'Read "b over r minus g". Subtract g from r first, then divide b by the result. As g creeps up towards r, the bottom shrinks and the P/E balloons.' },
          ],
          worked: {
            title: 'A justified P/E',
            steps: [
              String.raw`Given: payout ratio \(b = 50\%\), required return \(r = 9\%\), long-run growth \(g = 5\%\), next year’s EPS \(E_1 = \$2.00\).`,
              String.raw`Denominator: \(r - g = 0.09 - 0.05 = 0.04\).`,
              String.raw`Justified forward P/E: \(0.5/0.04 = 12.5\).`,
              String.raw`Implied price: \(P_0 = 12.5 \times 2.00 = \$25\). As a check, the dividend is \(0.5 \times 2.00 = 1.00\) and \(1.00/0.04 = 25\).`,
              String.raw`Change growth to 3%: \(0.5/0.06 = 8.33\), a fall of a third from a 2-point change.`,
            ],
            answer: 'A P/E of 12.5 is "fair" for this profile; paying 20 times would need either much higher growth or a lower required return.',
          },
          where: [
            { sym: 'b', def: 'Payout ratio: the share of earnings paid out as dividends' },
            { sym: 'r', def: 'Required return' },
            { sym: 'g', def: 'Long-run earnings growth rate' },
          ],
          caption: 'High P/E ratios mean the market expects high growth or low risk (low r). A low P/E is cheap only if growth and risk are similar, so before calling a low P/E a bargain, ask whether b, r or g is the reason, not just the ratio itself.',
        },
        {
          t: 'plot',
          title: 'Justified forward P/E for a 50% payout and 9% required return',
          x: [0, 0.08],
          y: [0, 60],
          xLabel: 'Long-run growth g',
          yLabel: 'P/E',
          curves: [{ f: (g: number) => 0.5 / (0.09 - g), label: 'P/E = 0.5 / (0.09 − g)' }],
          points: [
            { x: 0.03, y: 0.5 / 0.06, label: 'g = 3%: P/E 8.3' },
            { x: 0.06, y: 0.5 / 0.03, label: 'g = 6%: P/E 16.7' },
          ],
          caption: 'As expected growth approaches the required return, the "fair" P/E shoots up: small changes in growth assumptions mean big changes in value.',
        },
        {
          t: 'math',
          tex: String.raw`PEG = \frac{P/E}{\text{EPS growth (\%)}} = \frac{16.7}{12} \approx 1.4`,
          syntax: [
            { sym: String.raw`\text{EPS growth (\%)}`, say: 'The growth is entered as a whole number, so 12% is 12, not 0.12. Divide the P/E by that number.' },
            { sym: String.raw`PEG`, say: 'Read "peg" (it is the P/E ratio divided by growth). A value near 1 means you pay about one P/E point per point of growth.' },
          ],
          worked: {
            title: 'Comparing two companies',
            steps: [
              String.raw`Company A: P/E \(= 25\), expected EPS growth 20% a year: \(PEG = 25/20 = 1.25\).`,
              String.raw`Company B: P/E \(= 12\), expected EPS growth 6% a year: \(PEG = 12/6 = 2.0\).`,
              String.raw`Kopi for reference: \(16.7/12 = 1.39\).`,
            ],
            answer: 'Although A has the higher P/E, it has the lower PEG (1.25 against 2.0), so per point of growth it is the cheaper of the two.',
          },
          caption: 'Peter Lynch popularised the PEG; around 1 or below was his rough guide to fair or cheap growth.',
        },
      ],
    },
    {
      id: 'ev',
      title: 'Enterprise value and EV/EBITDA',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EV = \text{Market cap} + \text{Debt} - \text{Cash} = (12 \times 100) + 160 - 60 = 1{,}300`,
          syntax: [
            { sym: String.raw`+ \text{Debt} - \text{Cash}`, say: 'Read left to right: start from the market cap, add the debt (what you would inherit), then take away the cash (what you could use to pay it down).' },
            { sym: String.raw`1{,}300`, say: 'The braces around the comma are just typesetting: read it as one thousand three hundred.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: share price $45, 100m shares, debt $1,200m, cash $300m.`,
              String.raw`Market cap: \(45 \times 100 = 4{,}500\) ($m).`,
              String.raw`Add debt: \(4{,}500 + 1{,}200 = 5{,}700\).`,
              String.raw`Subtract cash: \(5{,}700 - 300 = 5{,}400\).`,
            ],
            answer: String.raw`\(EV = \$5{,}400\)m: that is what it would cost to buy the whole operating business, even though the equity alone is worth $4,500m.`,
          },
          caption: 'The price to buy the whole business: you pay the shareholders, take on the debt, and keep the cash.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{EV}{EBITDA} = \frac{1{,}300}{100 + 20} \approx 10.8\times`,
          syntax: [
            { sym: String.raw`EBITDA`, say: 'Read "E-B-I-T-D-A" or "ebb-it-dah": earnings before interest, tax, depreciation and amortisation. In practice, EBIT plus D&A.' },
            { sym: String.raw`10.8\times`, say: 'Read "ten point eight times". The multiplication sign is just a unit meaning "that many years of EBITDA".' },
          ],
          worked: {
            title: 'Harbour Foods against a peer',
            steps: [
              String.raw`Harbour: EBIT $400m plus D&A $150m gives EBITDA \(= 550\). With EV \(= 5{,}400\) from above: \(5{,}400/550 = 9.8\times\).`,
              String.raw`Peer with no debt: EV $6,000m, EBITDA $500m: \(6{,}000/500 = 12.0\times\).`,
              'Compare with P/E: because EV includes debt and EBITDA ignores interest, a different debt load does not distort this ratio.',
            ],
            answer: 'Harbour trades at 9.8 times EBITDA against 12.0 times for the peer, so the whole business is cheaper by that measure.',
          },
          caption: 'EBITDA = earnings before interest, tax, depreciation and amortisation. Because both EV and EBITDA ignore how the company is financed, the ratio compares businesses with different debt levels.',
        },
        {
          t: 'metric',
          name: 'EV/EBITDA',
          shows: 'The price to buy the *entire* operating business, equity and debt together, measured against the cash-like profit it generates before financing and accounting choices (interest, tax, depreciation) get involved. Because it strips out how a company chose to finance itself, it is the standard tool for comparing a heavily indebted company with a debt-free one, or for comparing companies across countries with different tax rates.',
          eli5: 'P/E only looks at what\'s left for shareholders after the bank has been paid its interest. EV/EBITDA asks a different question: "if I bought this whole business outright, paid off its debt, kept its cash, how many years of its raw operating cash-like profit would it take to pay that back?" It is a fairer comparison between a company that borrowed heavily and one that didn\'t.',
          higher: 'The market is paying more for the whole business relative to its operating profit, again usually reflecting expected growth or quality, same logic as a high P/E, but comparable even across companies with very different debt loads.',
          lower: 'The whole business is cheap relative to its operating profit, could be a bargain, or could reflect real problems (declining industry, poor management, high risk) that the market has already priced in.',
          typical: 'A broad market average is often around 10–12×; capital-intensive, slow-growing industries (utilities, telecoms) often trade at 6–9×; high-growth software and tech companies can trade at 15–25× or more.',
        },
      ],
    },
    {
      id: 'others',
      title: 'Other multiples',
      blocks: [
        {
          t: 'table',
          head: ['Multiple', 'Formula', 'Kopi & Co', 'Useful for'],
          rows: [
            ['P/B', 'Price / book value per share', '12 / 3 = 4.0', 'Banks, insurers, asset-heavy firms'],
            ['P/S', 'Market cap / revenue', '1,200 / 500 = 2.4', 'Young, unprofitable companies'],
            ['P/FCF', 'Market cap / free cash flow', '1,200 / 45 ≈ 26.7', 'Cash-generating businesses'],
            ['Dividend yield', 'Dividend per share / price', '0.20 / 12 ≈ 1.7%', 'Income investors'],
            ['Payout ratio', 'Dividends / net income', '20 / 72 ≈ 28%', 'Dividend safety'],
          ],
        },
        {
          t: 'metric',
          name: 'dividend yield',
          shows: 'The cash income a share pays out each year, as a percentage of what you pay for it today, the direct, visible return to an income investor, separate from any gain or loss in the share price itself.',
          eli5: 'If you buy a rental flat for $500,000 and it brings in $20,000 a year in rent, that is a 4% yield. A dividend yield is the same idea applied to a share: the cash that lands in your account each year, as a share of what the stock cost you.',
          higher: 'More cash income relative to the price paid, attractive to investors who want regular income (retirees, income funds). But an unusually high yield can also be a warning sign: it may mean the share price has fallen hard on bad news, and the dividend is at risk of being cut (a "yield trap"), so check the payout ratio and the business\'s health, not just the yield.',
          lower: 'Less cash income relative to price, common for younger, fast-growing companies that pay small or no dividends because they reinvest profits into growth instead. A low or zero yield is not a bad sign on its own; investors in such companies are betting on the share price rising rather than cash income.',
          typical: 'Mature, stable dividend payers (utilities, consumer staples, REITs) often yield 3–6%; the broad US stock market has averaged roughly 1.5–2% in recent years as growth stocks have grown to dominate it; fast-growing tech companies frequently yield 0%.',
        },
        {
          t: 'math',
          tex: String.raw`CAPE = \frac{\text{Real price}}{\frac{1}{10}\sum_{k=1}^{10}\text{Real EPS}_{t-k}}`,
          syntax: [
            { sym: String.raw`\frac{1}{10}\sum_{k=1}^{10}`, say: 'Read "one tenth of the sum from k equals 1 to 10": add up ten numbers and divide by 10, which is just an average.' },
            { sym: String.raw`\text{Real EPS}_{t-k}`, say: 'Read "real EPS at time t minus k". If t is this year, k = 1 is last year, k = 2 the year before, and so on back to ten years ago. "Real" means adjusted for inflation.' },
          ],
          worked: {
            title: 'An index with a volatile earnings history',
            steps: [
              String.raw`Given: index level (inflation-adjusted) \(= 4{,}500\). Real EPS over the last ten years: 140, 150, 120, 160, 170, 180, 175, 190, 200, 215.`,
              String.raw`Sum: \(140 + 150 + 120 + 160 + 170 + 180 + 175 + 190 + 200 + 215 = 1{,}700\).`,
              String.raw`Ten-year average: \(1{,}700/10 = 170\).`,
              String.raw`CAPE: \(4{,}500/170 = 26.5\).`,
              String.raw`Ordinary P/E using only last year’s 215: \(4{,}500/215 = 20.9\).`,
            ],
            answer: 'CAPE is 26.5 against an ordinary P/E of 20.9, because the average smooths out the recent peak in earnings and says the market is dearer than it first looks.',
          },
          caption: 'Robert Shiller’s cyclically adjusted P/E averages ten years of inflation-adjusted earnings. High CAPE readings have been followed by lower 10-year returns on average, though with wide variation and poor short-term timing.',
        },
        { t: 'callout', tone: 'fact', title: 'The record CAPE', text: 'The US market’s CAPE peaked above 44 in December 1999, at the height of the dot-com bubble. Over the following decade, US stocks returned roughly nothing after inflation.' },
      ],
    },
  ],
  sources: [
    'Damodaran, A. (2012). *Investment Valuation* (3rd ed.). Wiley.',
    'Campbell, J. Y., & Shiller, R. J. (1998). Valuation ratios and the long-run stock market outlook. *The Journal of Portfolio Management*, 24(2), 11–26.',
    'Lynch, P. (1989). *One Up on Wall Street*. Simon & Schuster.',
  ],
  related: ['finance/fundamental/dcf', 'finance/fundamental/dividend-models', 'finance/fundamental/value-investing'],
}

export default guide
