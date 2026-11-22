import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Forex trades around the clock from Monday morning in Sydney to Friday evening in New York. Retail traders usually trade through brokers offering high leverage, which magnifies both gains and losses. Most retail forex accounts lose money; here is how the mechanics work and how to keep the risk under control.',
  nutshell: [
    'Four main sessions: **Sydney, Tokyo, London, New York**; the London–New York overlap is the busiest.',
    'Leverage of 30:1 means a 1% adverse move costs 30% of the margin.',
    'Size positions in pips: **lots = risk ÷ (stop in pips × pip value per lot)**.',
    'Regulators require brokers to disclose the share of retail accounts that lose money; it is typically well over half.',
  ],
  sections: [
    {
      id: 'sessions',
      title: 'Trading sessions (Singapore time, approximate)',
      blocks: [
        {
          t: 'table',
          head: ['Session', 'Hours (SGT)', 'Character'],
          rows: [
            ['Sydney', '5:00 am – 2:00 pm', 'Quietest; AUD and NZD active'],
            ['Tokyo / Singapore / Hong Kong', '8:00 am – 5:00 pm', 'JPY, SGD and Asian pairs active'],
            ['London', '3:00 pm – midnight', 'The largest centre; EUR and GBP active'],
            ['New York', '8:00 pm – 5:00 am', 'USD news; overlaps with London until about midnight'],
          ],
          caption: 'Hours shift by an hour with European and US daylight saving.',
        },
      ],
    },
    {
      id: 'sizing',
      title: 'Position sizing in pips',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Lots} = \frac{\text{Account} \times \text{risk \%}}{\text{Stop distance (pips)} \times \text{pip value per lot}}`,
          syntax: [
            { sym: String.raw`\text{risk \%}`, say: String.raw`Read “risk percent”: the share of the account you will lose if the stop is hit, written as a decimal in the calculation (1% is 0.01).` },
            { sym: String.raw`\text{Stop distance (pips)} \times \text{pip value per lot}`, say: String.raw`Read “stop distance in pips, times pip value per lot”: the dollars one lot loses if the stop is hit.` },
            { sym: String.raw`\frac{\text{Account} \times \text{risk \%}}{\ldots}`, say: String.raw`Read “the dollars you will risk, divided by the dollars one lot would lose”: this tells you how many lots fit inside your risk budget.` },
          ],
          worked: {
            title: 'Sizing a GBP/USD trade',
            steps: [
              String.raw`Given: account $20,000, risk 1%, stop 35 pips away, pip value $10 per standard lot.`,
              String.raw`Dollars at risk: \(20{,}000 \times 1\% = \$200\).`,
              String.raw`Loss per lot at the stop: \(35 \times 10 = \$350\).`,
              String.raw`Lots: \(200/350 = 0.571\), rounded down to 0.57 lots (57,000 pounds). Actual risk: \(0.57 \times 350 = \$199.50\).`,
              String.raw`Leverage used: \(57{,}000 \times 1.2650 / 20{,}000 = 3.6\times\).`,
            ],
            answer: String.raw`Trade 0.57 lots: if the stop is hit you lose about $200 (1% of the account), using only 3.6 times leverage.`,
          },
          caption: 'This formula works backwards from the dollar loss you are willing to accept, not from how big a position "feels" right. A wider stop (more pips of room before you are wrong) means a smaller position size for the same risk, trading a bigger stop for a smaller position keeps the dollar risk constant, which is the whole purpose of sizing this way instead of just picking a lot size that looks reasonable.',
        },
        {
          t: 'example',
          title: 'Sizing a EUR/USD trade',
          lines: [
            { label: 'Account', text: '$10,000, risking 1% = $100' },
            { label: 'Stop', text: '40 pips away' },
            { label: 'Pip value', text: '$10 per standard lot' },
            { label: 'Size', text: '\\(100/(40 \\times 10) = 0.25\\) lots (25,000 euros)' },
            { label: 'Leverage used', text: '\\(25{,}000 \\times 1.085 / 10{,}000 \\approx 2.7\\times\\): far below what the broker allows, as it should be' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{Loss on margin} = \text{leverage} \times \text{price move}:\qquad 30 \times 1\% = 30\%`,
          syntax: [
            { sym: String.raw`30 \times 1\%`, say: String.raw`Read “thirty times one percent”: multiply the leverage by the percentage price move to get the percentage change in your margin.` },
            { sym: String.raw`\text{Loss on margin}`, say: String.raw`Read “loss on margin”: the loss as a percentage of the cash you posted, not as a percentage of the position.` },
          ],
          worked: {
            title: 'A 30:1 position under stress',
            steps: [
              String.raw`Given: margin $1,000 at 30:1 leverage, so exposure \(= 1{,}000 \times 30 = \$30{,}000\) of EUR/USD at 1.0850.`,
              String.raw`A 1% adverse move costs \(30{,}000 \times 1\% = \$300\), which is \(300/1{,}000 = 30\%\) of the margin (a fall of about 108 pips).`,
              String.raw`A 2% adverse move costs \(\$600\), or 60% of the margin.`,
              String.raw`Total wipe-out needs a fall of \(1/30 = 3.33\%\), about 362 pips.`,
            ],
            answer: String.raw`At 30:1 a 3.33% move against you erases the whole margin, and a 1% move already costs 30% of it.`,
          },
          caption: 'Leverage multiplies both ways: at 30:1, a move of only 1% against you wipes out 30% of the margin you posted, and a run of a few bad days at that leverage can wipe out the account entirely. Read any quoted leverage ratio as "how many times bigger my gains and losses are than the underlying currency’s own percentage move", not as a measure of how much the broker trusts you.',
        },
        { t: 'fin-tool', tool: 'position' },
      ],
    },
    {
      id: 'risks',
      title: 'Risks specific to forex',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Gaps and shocks', body: 'Central bank surprises can move currencies through stops. In January 2015, the Swiss National Bank removed its euro cap and the franc jumped about 30% in minutes, wiping out several brokers.' },
            { title: 'Overnight financing', body: 'Holding positions overnight earns or costs the interest difference (swap or rollover).' },
            { title: 'Broker conflicts', body: 'Some retail brokers take the other side of client trades. Use regulated brokers.' },
            { title: 'Leverage limits', body: 'Many regulators cap retail leverage, for example 30:1 on major pairs in the EU and UK.' },
          ],
        },
      ],
    },
  ],
  sources: ['European Securities and Markets Authority. (2018). *Product intervention measures on CFDs*. ESMA.', 'Lyons, R. K. (2001). *The Microstructure Approach to Exchange Rates*. MIT Press.'],
  related: ['finance/assets/forex/drivers', 'finance/technical/risk-management', 'finance/frameworks/trading-plan'],
}

export default guide
