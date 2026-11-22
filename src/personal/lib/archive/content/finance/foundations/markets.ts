import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A stock market is a place where part-ownerships of companies (shares) change hands. Companies sell new shares to raise money in the **primary market**; investors then trade those shares with each other in the **secondary market**, on exchanges like the NYSE, Nasdaq or the Singapore Exchange (SGX).',
  nutshell: [
    'A **share** is a slice of ownership, with a claim on profits and usually a vote.',
    'Prices are set by orders: the **bid** is the best price a buyer will pay, the **ask** the best a seller will accept.',
    '**Market orders** trade immediately; **limit orders** only at your price or better.',
    '**Market capitalisation** = price × shares outstanding.',
    'Indices summarise markets; most are **cap-weighted** (S&P 500, STI), a few **price-weighted** (Dow).',
  ],
  sections: [
    {
      id: 'orders',
      title: 'How a trade happens: the order book',
      blocks: [
        {
          t: 'table',
          head: ['Bids (buyers)', 'Price', 'Asks (sellers)'],
          rows: [
            ['', '$10.04', '1,500 shares'],
            ['', '$10.03', '800 shares'],
            ['', '**$10.02**', '**400 shares: best ask**'],
            ['**600 shares: best bid**', '**$10.00**', ''],
            ['2,000 shares', '$9.99', ''],
            ['900 shares', '$9.98', ''],
          ],
          caption: 'The spread is $10.02 − $10.00 = $0.02. A market order to buy 500 shares would take the 400 at $10.02 and 100 at $10.03.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Spread} = \text{Ask} - \text{Bid},\qquad \text{Mid} = \frac{\text{Ask} + \text{Bid}}{2},\qquad \text{Relative spread} = \frac{\text{Spread}}{\text{Mid}} = \frac{0.02}{10.01} \approx 0.2\%`,
          syntax: [
            { sym: String.raw`\text{Spread}`, say: String.raw`Words inside \text{...} are labels, not variables: read "Spread equals Ask minus Bid". Subtract the best buy price from the best sell price.` },
            { sym: String.raw`\frac{\text{Ask} + \text{Bid}}{2}`, say: String.raw`Add the two quotes and divide by 2: the midpoint, i.e. the average of the two prices.` },
            { sym: String.raw`\frac{\text{Spread}}{\text{Mid}}`, say: String.raw`Read "spread over mid": divide the cost by the price to turn dollars into a percentage you can compare across stocks.` },
          ],
          worked: {
            steps: [
              String.raw`Given: a small-cap stock quotes Bid = $4.80 and Ask = $5.00.`,
              String.raw`Spread = \(5.00 - 4.80 = \$0.20\).`,
              String.raw`Mid = \(\frac{5.00 + 4.80}{2} = \$4.90\).`,
              String.raw`Relative spread = \(\frac{0.20}{4.90} \approx 0.0408 = 4.08\%\).`,
              String.raw`Round trip: buy 1,000 shares at the ask ($5,000) and sell straight back at the bid ($4,800), losing $200.`,
            ],
            answer: String.raw`The relative spread is about 4.1%, so the price must rise roughly 4% before you break even; compare the 0.2% of a liquid large-cap.`,
          },
          where: [
            { sym: 'Ask', def: 'The lowest price any seller is currently willing to accept' },
            { sym: 'Bid', def: 'The highest price any buyer is currently willing to pay' },
            { sym: 'Mid', def: 'The midpoint, often used as a stock’s quoted "price" between trades' },
          ],
          caption: 'The spread is a hidden cost of trading; busy large stocks have tiny spreads, small illiquid stocks wide ones. The relative (percentage) spread is the one worth comparing across stocks of different prices, see the metric below for what counts as tight or wide.',
        },
        {
          t: 'metric',
          name: 'the bid-ask spread',
          shows: 'The instant cost of changing your mind. Buy and immediately sell the same stock (with no price move) and the spread is what you lose, because you buy at the higher ask and sell at the lower bid. It is a direct measure of a stock\'s **liquidity**: how cheaply and easily it can be traded in size without moving the price.',
          eli5: 'A currency exchange booth at the airport will buy your dollars at one rate and sell dollars back to you at a slightly worse rate. The gap between those two rates is pure profit for the booth, and pure cost to you if you swap money back and forth. A stock\'s bid-ask spread works the same way.',
          higher: 'More expensive and often harder to trade without moving the price yourself. Wide spreads (sometimes several percent) show up in small, thinly traded "penny stocks", in obscure bonds, and in volatile or fearful markets (spreads blow out during a crash, exactly when people most want to trade).',
          lower: 'Cheaper and easier to get in and out of. Tight spreads (a fraction of a cent on a $10 stock) are the hallmark of large, heavily traded stocks like Apple or an S&P 500 index fund, where huge numbers of buyers and sellers compete to offer the best price.',
          typical: 'The largest US stocks and ETFs often trade at a relative spread under 0.05%; a typical mid-cap might run 0.1–0.3%; small, illiquid stocks can run 1–5% or more, a cost that eats directly into frequent trading strategies.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Market order', body: 'Buy or sell now at the best available price. Certain to trade, uncertain price.' },
            { title: 'Limit order', body: 'Buy at or below (sell at or above) your price. Certain price, may not trade.' },
            { title: 'Stop order', body: 'Becomes a market order once the price touches a level: used for stop-losses.' },
            { title: 'Settlement', body: 'The actual exchange of cash and shares follows the trade: one business day later in the US (T+1, since 2024), two in Singapore (T+2).' },
          ],
        },
      ],
    },
    {
      id: 'cap',
      title: 'Market capitalisation and indices',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Market cap} = P \times N,\qquad I_{\text{cap}} = \frac{\sum_i P_i N_i}{\text{Divisor}},\qquad I_{\text{price}} = \frac{\sum_i P_i}{\text{Divisor}}`,
          syntax: [
            { sym: String.raw`P_i, N_i`, say: String.raw`Read "P sub i, N sub i": the price and share count of the i-th company in the list; i is just a counter (1, 2, 3 ...).` },
            { sym: String.raw`\sum_i`, say: String.raw`Read "the sum over i": work out what follows for every company i and add the results.` },
            { sym: String.raw`\text{Divisor}`, say: String.raw`A scaling number chosen once so the index starts at a round level (such as 100); you divide the total by it.` },
          ],
          worked: {
            steps: [
              String.raw`Given: three companies. A: price $100, 10 shares. B: price $50, 40 shares. C: price $20, 100 shares. Divisors are set so both indices start at 100.`,
              String.raw`Market caps: A = \(100 \times 10 = 1{,}000\), B = \(50 \times 40 = 2{,}000\), C = \(20 \times 100 = 2{,}000\). Sum = 5,000, so the cap divisor is 50 (\(5{,}000/50 = 100\)).`,
              String.raw`Share prices sum to \(100 + 50 + 20 = 170\), so the price divisor is 1.7 (\(170/1.7 = 100\)).`,
              String.raw`Now C rises 10% to $22. Cap index: \(\frac{1{,}000 + 2{,}000 + 2{,}200}{50} = \frac{5{,}200}{50} = 104\).`,
              String.raw`Price index: \(\frac{100 + 50 + 22}{1.7} = \frac{172}{1.7} \approx 101.18\).`,
            ],
            answer: String.raw`The same 10% move in C lifts the cap-weighted index 4% but the price-weighted index only 1.2%, because C’s low share price gives it little weight there.`,
          },
          where: [
            { sym: 'P_i, N_i', def: 'Price and shares outstanding of company i' },
            { sym: 'Divisor', def: 'Adjusted for splits and changes in membership so the index does not jump' },
          ],
          caption: 'In a cap-weighted index, bigger companies count more. In the price-weighted Dow, a higher share price counts more, whatever the company’s size, a quirk of history, not a design anyone would choose today.',
        },
        {
          t: 'metric',
          name: 'market capitalisation',
          shows: 'The total price tag of a company if you bought every share: a simple, market-based measure of its size, as opposed to sales, profit or headcount. It is what analysts mean by "large-cap" or "small-cap", and it drives which index a stock belongs to and how much it moves that index.',
          eli5: 'If one slice of a pizza costs $2 and there are 8 slices, the whole pizza is "worth" $16, that is market cap: price per slice times number of slices. It says nothing about how tasty the pizza is (whether the company is actually a good investment), only how big the price tag is right now.',
          higher: 'A bigger company by market value, not necessarily a better one, just one the market currently prices higher in total. Large and mega-cap stocks (roughly above $10 billion) tend to be more stable, more liquid (tighter spreads, per above) and more heavily weighted in cap-weighted indices, so they move those indices more.',
          lower: 'A smaller company by market value. Small and micro-cap stocks (roughly under $2 billion) tend to be more volatile, less liquid and barely move a cap-weighted index on their own, but as a group they have historically offered a modest extra return for that extra risk (the "small-cap premium", though it comes and goes across decades).',
          typical: 'Rough US bands: mega-cap above $200 billion, large-cap $10–200 billion, mid-cap $2–10 billion, small-cap $300 million–$2 billion, micro-cap below that. The S&P 500 alone spans this whole range, which is why its largest handful of members can outweigh its smallest hundred combined.',
        },
        {
          t: 'table',
          head: ['Index', 'Market', 'Members', 'Weighting'],
          rows: [
            ['S&P 500', 'US large companies', '~500', 'Free-float market cap'],
            ['Dow Jones Industrial Average', 'US blue chips', '30', 'Price'],
            ['Nasdaq Composite', 'All Nasdaq-listed stocks', '3,000+', 'Market cap'],
            ['Straits Times Index (STI)', 'Singapore', '30', 'Free-float market cap'],
            ['FTSE Bursa Malaysia KLCI', 'Malaysia', '30', 'Free-float market cap'],
            ['MSCI World', 'Developed markets', '~1,400', 'Free-float market cap'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The first shares', text: 'The Dutch East India Company (VOC) issued the first widely traded shares in 1602, and Amsterdam became the first modern stock market. New York’s exchange traces back to the Buttonwood Agreement of 1792, signed by 24 brokers under a buttonwood tree on Wall Street.' },
      ],
    },
    {
      id: 'ipo',
      title: 'From IPO to everyday trading',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Private company', body: 'Owned by founders and private investors.' },
            { title: 'IPO (initial public offering)', body: 'The company sells new shares to the public, raising cash, with investment banks setting the price and finding buyers.' },
            { title: 'Listing', body: 'The shares start trading on an exchange. From now on, trades are between investors; the company gets no money from them.' },
            { title: 'Life as a public company', body: 'Regular reports, shareholder votes, dividends, buybacks, and possibly new share issues.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Harris, L. (2003). *Trading and Exchanges*. Oxford University Press.',
    'Petram, L. (2014). *The World’s First Stock Exchange*. Columbia University Press.',
    'Singapore Exchange. (n.d.). *Securities trading and clearing*. sgx.com.',
  ],
  related: ['finance/foundations/efficient-markets', 'finance/technical/charts', 'finance/fundamental/what-is-fa'],
}

export default guide
