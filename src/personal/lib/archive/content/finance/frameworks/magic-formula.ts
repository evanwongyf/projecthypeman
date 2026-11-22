import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Joel Greenblatt’s "magic formula", from *The Little Book That Beats the Market* (2005), turns "buy good companies at cheap prices" into two numbers and a ranking. It is simple enough to run on a spreadsheet and sound enough to be taken seriously.',
  nutshell: [
    '**Earnings yield** = EBIT ÷ enterprise value: how cheap.',
    '**Return on capital** = EBIT ÷ (net working capital + net fixed assets): how good.',
    'Rank all stocks on each, add the ranks, buy the top 20–30, hold a year, repeat.',
    'It can underperform for years at a time, which is exactly why it may keep working.',
  ],
  sections: [
    {
      id: 'formula',
      title: 'The two measures',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EY = \frac{EBIT}{EV} \qquad ROC = \frac{EBIT}{NWC + NFA}`,
          where: [
            { sym: 'EBIT', def: 'Earnings before interest and tax: operating profit, before financing and tax decisions distort it' },
            { sym: 'EV', def: 'Enterprise value: market cap + debt − excess cash' },
            { sym: 'NWC', def: 'Net working capital: the tangible capital tied up in day-to-day operations' },
            { sym: 'NFA', def: 'Net fixed assets: property, plant and equipment after depreciation' },
          ],
          syntax: [
            { sym: String.raw`\frac{EBIT}{EV}`, say: 'Read "E-bit over E-V". Operating profit divided by the price of the whole business (equity plus net debt); read it as a yield, like interest on a deposit.' },
            { sym: String.raw`NWC + NFA`, say: 'Read "N W C plus N F A". The sum of the capital in working capital and in plant and equipment: the money the business has to tie up to run.' },
          ],
          worked: {
            title: 'A company with 200 of operating profit (millions)',
            steps: [
              'Given: EBIT 200; market cap 1,500; debt 400; excess cash 100; net working capital 300; net fixed assets 700.',
              String.raw`Enterprise value: \(EV = 1{,}500 + 400 - 100 = 1{,}800\).`,
              String.raw`Earnings yield: \(EY = 200/1{,}800 \approx 11.1\%\).`,
              String.raw`Capital employed: \(NWC + NFA = 300 + 700 = 1{,}000\).`,
              String.raw`Return on capital: \(ROC = 200/1{,}000 = 20\%\).`,
            ],
            answer: 'The business offers an 11.1% earnings yield and a 20% return on capital, which a ranking would score as both cheap and good.',
          },
          caption: 'Using EBIT and EV makes companies with different debt and tax levels comparable: a cash-rich, debt-free company and a heavily leveraged one are judged on the same basis, since EV adjusts for both. ROC uses only the tangible capital a business actually needs to operate day to day, so a capital-light business with modest profit can still show an excellent ROC. Read EY like an inverted P/E (higher is cheaper) and ROC like a quality score (higher is a better business per dollar employed), the formula ranks every stock on both and wants a good score on each, not just one.',
        },
        {
          t: 'metric',
          name: 'earnings yield (EY)',
          shows: 'how much operating profit a business generates per dollar it would cost to buy the whole thing outright, debt included. It is the "how cheap" half of the formula, essentially a P/E ratio turned upside down and cleaned up so leverage and tax do not distort the comparison between companies.',
          eli5: 'If you bought the entire company today, paying off its debts and keeping its cash, earnings yield is the percentage return its operating profit alone would hand you every year, before anything else happens to the business.',
          higher: 'A high EY means you are paying little for each dollar of operating profit, the market is pricing the business cheaply relative to what it currently earns. That is the "cheap" signal the formula is hunting for, but a very high EY can also mean the market expects those earnings to fall, so it is always paired with ROC rather than used alone.',
          lower: 'A low EY means you are paying a lot for each dollar of current operating profit, the market has priced in strength that has not shown up in EBIT yet, or the stock is simply expensive. Magic Formula screens skip these regardless of how good the underlying business looks.',
          typical: 'Greenblatt’s own screens typically pulled from stocks with EY comfortably above the market average (often double digits in percentage terms), while glamour growth stocks commonly sit in the low single digits.',
        },
        {
          t: 'metric',
          name: 'return on capital (ROC)',
          shows: 'how much operating profit a business squeezes out of the tangible capital it actually needs to run, its working capital plus its fixed assets. It is the "how good" half of the formula: a business with high ROC needs relatively little capital to keep generating profit, which is what lets it reinvest at high rates or return cash to shareholders.',
          eli5: 'Two lemonade stands both make $10,000 a year. One needed a $5,000 stand and fridge; the other needed $50,000 of equipment. The first has a far higher ROC, it is squeezing far more profit out of every dollar tied up in the business.',
          higher: 'A high ROC means the business has some real edge, a brand, a patent, network effects, a low-cost process, that lets it earn outsized profit without needing to pour in capital. These are the businesses Buffett and Munger call "wonderful": money keeps coming out without needing much to go back in.',
          lower: 'A low ROC means the business is capital-hungry relative to what it earns: heavy machinery, large inventories or receivables tied up for every dollar of profit. It can still be a perfectly fine business, just a structurally tougher one to compound wealth in, since growth requires proportionally more capital.',
          typical: 'Greenblatt’s screens often required ROC well above typical costs of capital, frequently 25% or more, to separate genuinely advantaged businesses from merely average ones; an ROC near or below a company’s cost of capital signals a business barely earning its keep.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Score}_i = \operatorname{rank}(EY_i) + \operatorname{rank}(ROC_i),\quad \text{buy the lowest scores}`,
          where: [
            { sym: String.raw`\operatorname{rank}(EY_i)`, def: 'Stock i’s position when every stock in the universe is sorted by earnings yield, 1 = cheapest' },
            { sym: String.raw`\operatorname{rank}(ROC_i)`, def: 'Stock i’s position when sorted by return on capital, 1 = best' },
          ],
          syntax: [
            { sym: String.raw`\operatorname{rank}(x)`, say: 'Read "the rank of x". Sort every stock from best to worst on a measure; the best gets 1, the next 2, and so on.' },
            { sym: String.raw`\text{Score}_i`, say: String.raw`Read "score of stock i". The subscript \(i\) is a placeholder for any one company in the list.` },
          ],
          worked: {
            title: 'Ranking a universe of 1,000 stocks',
            steps: [
              String.raw`Stock A: EY rank 40, ROC rank 85. Score \(= 40 + 85 = 125\).`,
              String.raw`Stock B: the cheapest of all (EY rank 1) but a poor business (ROC rank 600). Score \(= 1 + 600 = 601\).`,
              String.raw`Stock C: EY rank 150, ROC rank 120. Score \(= 270\).`,
              'Sort by score from the lowest up: A (125), C (270), B (601).',
            ],
            answer: 'A tops the list with a score of 125; the single cheapest stock, B, ranks last of the three at 601 because it is poor on quality.',
          },
          caption: 'Lower combined scores are better, since rank 1 is the best possible placement on each measure, a stock scoring 4 (as in the table below) sits near the top on both cheapness and quality at once, which is the whole point: a stock that is merely the single cheapest or single best-run company, but mediocre on the other measure, will usually score worse than one that is simply good on both.',
        },
        {
          t: 'table',
          head: ['Company', 'EY', 'EY rank', 'ROC', 'ROC rank', 'Score'],
          rows: [
            ['A', '12%', '1', '25%', '3', '**4**'],
            ['B', '8%', '3', '60%', '1', '**4**'],
            ['C', '10%', '2', '15%', '4', '6'],
            ['D', '5%', '4', '40%', '2', '6'],
          ],
          caption: 'A and B tie at the top: one is cheaper, the other better. The formula prefers balance over extremes.',
        },
        {
          t: 'example',
          title: 'Kopi & Co (from the fundamental analysis guides)',
          lines: [
            { label: 'EY', text: '\\(100 / 1{,}300 = 7.7\\%\\)' },
            { label: 'ROC', text: 'net working capital \\(150 - 70 = 80\\) (simplified), net fixed assets 350: \\(100/430 = 23\\%\\)' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'Results and caveats',
      blocks: [
        { t: 'p', text: 'In the book, Greenblatt reported about 30.8% a year for the strategy from 1988 to 2004 among larger US stocks, against about 12.4% for the S&P 500. Independent tests find a smaller but positive edge in many markets, with long stretches of underperformance and big swings.' },
        { t: 'callout', tone: 'fact', title: 'Written for his children', text: 'Greenblatt wrote the book so that his children, then in school, could understand how to invest. He excludes utilities and financial stocks, whose balance sheets do not fit the formula.' },
      ],
    },
  ],
  sources: ['Greenblatt, J. (2010). *The Little Book That Still Beats the Market*. Wiley.', 'Gray, W. R., & Carlisle, T. E. (2012). *Quantitative Value*. Wiley.'],
  related: ['finance/frameworks/graham', 'finance/fundamental/multiples', 'finance/fundamental/ratios'],
}

export default guide
