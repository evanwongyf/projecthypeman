import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Valuing a share starts with the cash it will produce. Most crypto assets produce none, so analysts have borrowed or invented other methods: network-value models that borrow from Metcalfe’s law, the network-value-to-transactions (NVT) ratio that plays the role of the price–earnings ratio, scarcity models such as stock-to-flow, the cost of producing the coin, fee-based valuation for platform tokens, the equation of exchange for tokens used as a medium of payment, and a market-size comparison with assets such as gold. None is as well grounded as a discounted cash flow; several have failed their tests. This guide explains each, works through the arithmetic of the most common ones and says honestly how much weight each can bear, with a network-value lab.',
  nutshell: [
    '**Metcalfe**: network value grows with the **square of users** (n²); **Odlyzko** argues for **n log n**; the choice changes the answer enormously.',
    '**NVT** = market cap ÷ daily on-chain transaction value: a high NVT suggests the price is high relative to usage (like a high P/E).',
    '**Stock-to-flow** (supply ÷ annual new supply) predicted a post-2024 price that did not materialise: a warning about models fitted to a few data points.',
    'For **platform tokens**, value per fee: revenue multiples, staking yield and the burn of fees; **equation of exchange** MV = PQ for payment tokens.',
    'Treat all of them as **scenario tools**: a range from "worth little" to "worth a lot" is the honest output.',
  ],
  sections: [
    {
      id: 'metcalfe',
      title: 'Network value: Metcalfe and the NVT ratio',
      lead: 'Usage as an anchor.',
      blocks: [
        { t: 'fin-lab', viz: 'metcalfe' },
        {
          t: 'math',
          tex: String.raw`\text{NVT}=\frac{\text{Market capitalisation}}{\text{Daily on-chain transaction value (USD)}},\qquad V\propto n^{2}\ \text{(Metcalfe)}`,
          caption: 'The NVT ratio, the crypto analogue of the P/E ratio, and Metcalfe’s law for network value.',
          where: [{ sym: '\\text{NVT}', def: 'network value to transactions ratio (Willy Woo, 2017)' }, { sym: 'n', def: 'the number of active users or addresses' }],
          syntax: [{ sym: '\\text{NVT}', say: 'a high ratio means a high price relative to the value moved on the network. Effect: it flags periods when speculation exceeds usage. Why: it compares the market’s valuation with the economic activity the network supports.' }],
          worked: {
            title: 'A network worth US$1,000 billion moving US$20 billion a day',
            steps: ['NVT = 1,000/20 = 50 (with daily transaction value).', 'If a rally takes the market cap to 2,000 with transaction value unchanged, NVT = 100.', 'Interpretation: value doubled without more usage; it is more speculative than before.'],
            answer: 'NVT is a relative indicator: compare a network with its own history and with others. It has limits: on-chain volume includes exchange movements and mixing, and much activity happens off-chain (on exchanges or layer-2 networks) where it is not counted.',
          },
        },
      ],
    },
    {
      id: 'scarcity',
      title: 'Scarcity, cost and market-size models',
      lead: 'Three ways to a price, and their limits.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{S2F}=\frac{\text{stock}}{\text{annual flow}},\qquad P_{\text{TAM}}=\frac{s\,M_{\text{gold}}}{N_{\text{coins}}},\qquad MV=PQ\ \Rightarrow\ M=\frac{PQ}{V}`,
          caption: 'Stock-to-flow, a market-size (total addressable market) price and the equation of exchange for a payment token.',
          where: [{ sym: 's', def: 'the share of the reference market (for example gold) the asset captures' }, { sym: 'M_{\\text{gold}}', def: 'the value of the reference market' }, { sym: 'V', def: 'velocity: how many times a unit of the token is spent in a year' }, { sym: 'PQ', def: 'the annual value of transactions the token must support' }],
          syntax: [{ sym: 'M=PQ/V', say: 'the monetary base needed to support a transaction volume. Effect: higher velocity means a smaller required value for the token. Why: a token spent often supports more transactions per unit.' }],
          worked: {
            title: 'Three back-of-envelope valuations',
            steps: ['Stock-to-flow after April 2024: stock 19.7 million coins; new coins per year = 3.125 × 52,560 = 164,250: S2F = 120. The model’s extrapolation of a very high price per coin did not materialise.', 'Market-size method: gold market ≈ US$14 trillion; a 10% share is US$1.4 trillion; divided by 19.7 million coins gives about US$71,000 per coin.', 'Equation of exchange: a network supports US$500 billion of payments a year at a velocity of 25: required token market value = 500/25 = US$20 billion.'],
            answer: 'These produce numbers, but each rests on a story: that the asset captures a share of gold’s role, or that it will be used for payments at a velocity that is itself unknowable. Use them to see what a price implies (for example, what share of gold’s market the price assumes), not as targets.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Cost of production', tag: 'a floor?', body: 'The energy and hardware cost of mining a coin is sometimes treated as a floor for the price; in practice, miners’ costs follow the price (they stop when it falls below cost) rather than set it.' },
            { title: 'Fee and revenue multiples', tag: 'for platforms', body: 'For a network such as Ethereum, annual fees (or the share burned or paid to stakers) and a multiple can be compared with other networks and with companies; revenue is volatile and the multiples are speculative.' },
            { title: 'Staking yield', tag: 'a cash-flow-like return', body: 'Proof-of-stake networks pay holders who stake: the yield is a return on the token but is paid in newly issued tokens (dilution) as well as fees.' },
            { title: 'Scenario analysis', tag: 'honest outputs', body: 'Build bear, base and bull cases from adoption assumptions and attach probabilities (see the research-process guide); the range is wider than for any equity.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Why the models failed or fit badly', text: 'Stock-to-flow had a good fit through 2021 on four halvings, which is a tiny sample, and then failed. Models fitted to a short, trending history can look convincing and have no predictive value; the same warning applies to the equity screens in the investing process shelf.' },
      ],
    },
  ],
  sources: [
    'Woo, W. (2017). Using NVT ratio to value Bitcoin. *Medium* / Woobull.',
    'Alabi, K. (2017). Digital blockchain networks appear to be following Metcalfe’s law. *Electronic Commerce Research and Applications*, 24, 23–29.',
    'Odlyzko, A. & Tilly, B. (2005). *A refutation of Metcalfe’s law and a better estimate for the value of networks and network interconnections*. University of Minnesota.',
    'Burniske, C. & Tatar, J. (2017). *Cryptoassets: The Innovative Investor’s Guide to Bitcoin and Beyond*. McGraw-Hill.',
  ],
  related: ['finance/crypto-investing/on-chain-analysis', 'finance/investing-analysis/reverse-dcf-and-expectations', 'finance/crypto-investing/tokenomics-and-supply'],
}

export default guide
