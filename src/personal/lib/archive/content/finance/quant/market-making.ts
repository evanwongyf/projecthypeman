import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Market makers stand ready to buy at the bid and sell at the ask, earning the spread and providing liquidity. Their two enemies are adverse selection (trading with someone who knows more) and inventory risk (being stuck with a position as prices move). Quantitative market makers set quotes with models that balance these.',
  nutshell: [
    'Revenue ≈ **half-spread × volume**; costs = **adverse selection** + **inventory losses** + fees.',
    'When long inventory, a market maker **shades quotes down** to sell more and buy less.',
    'The **Avellaneda–Stoikov** model (2008) gives a reservation price and an optimal spread from risk aversion, volatility and order-flow intensity.',
    'Spreads widen when volatility or information risk rises.',
  ],
  sections: [
    {
      id: 'economics',
      title: 'The economics',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Pi \approx Q\,\frac{s}{2} - Q\,\text{AS} - \text{inventory P\&L} - \text{fees}`,
          caption: 'Market-making profit over a period: spread earned minus adverse selection and other costs.',
          plain: 'Each trade earns half the spread, compared with the mid-price. But informed traders tend to buy before prices rise and sell before they fall, so after many trades the mid-price moves against the market maker by some amount on average (adverse selection). Inventory held as prices move adds gains or losses, and exchanges charge or rebate fees.',
          where: [
            { sym: 'Q', def: 'shares traded' },
            { sym: 's', def: 'quoted spread' },
            { sym: 'AS', def: 'average adverse price move per share after a trade' },
          ],
          syntax: [
            { sym: String.raw`\Pi`, say: '“pi”: profit' },
          ],
          worked: {
            title: 'A day in one stock',
            steps: [
              'Quoted spread 2 cents; 1,000,000 shares traded.',
              String.raw`Spread revenue: \(1{,}000{,}000 \times 0.01 = \$10{,}000\).`,
              String.raw`Adverse selection 0.6 cents a share: \(\$6{,}000\). Fees net of rebates \$1,500. Inventory P&L −\$1,000.`,
              String.raw`Profit: \(10{,}000 - 6{,}000 - 1{,}500 - 1{,}000 = \$1{,}500\).`,
            ],
            why: [
              'half a 2-cent spread per share',
              'gross revenue',
              'the costs of trading against informed flow and holding stock',
              'what is left',
            ],
            answer: 'A thin $1,500, or 0.15 cents a share. Small changes in adverse selection decide whether market making is profitable.',
          },
        },
      ],
    },
    {
      id: 'as',
      title: 'Avellaneda–Stoikov quotes',
      blocks: [
        {
          t: 'math',
          tex: String.raw`r = s - q\,\gamma\,\sigma^2 (T - t), \qquad \delta^a + \delta^b = \gamma\,\sigma^2 (T - t) + \frac{2}{\gamma}\ln\!\Big(1 + \frac{\gamma}{k}\Big)`,
          caption: 'The reservation price r and total optimal spread around it.',
          plain: 'The reservation price is the price at which the market maker is indifferent to holding one more share. With positive inventory q it sits below the mid-price, so quotes shift down to encourage selling. The optimal spread has a risk part (wider when volatile or risk-averse) and an order-flow part (wider when fewer orders arrive for a given distance from mid).',
          where: [
            { sym: 's', def: 'mid-price' },
            { sym: 'q', def: 'inventory (positive = long)' },
            { sym: String.raw`\gamma`, def: 'risk aversion' },
            { sym: String.raw`\sigma`, def: 'price volatility per unit time' },
            { sym: 'T − t', def: 'time left in the trading horizon' },
            { sym: 'k', def: 'how quickly order arrivals fall off with distance from mid' },
          ],
          syntax: [
            { sym: String.raw`\delta^a, \delta^b`, say: '“delta a, delta b”: distances of ask and bid from r' },
          ],
          worked: {
            title: 'Long 10 shares late in the day',
            steps: [
              String.raw`\(s = 100\), \(q = 10\), \(\gamma = 0.1\), \(\sigma^2 (T - t) = 2\), \(k = 1.5\).`,
              String.raw`\(r = 100 - 10 \times 0.1 \times 2 = 98\).`,
              String.raw`Spread: \(0.1 \times 2 + 20 \ln(1 + 0.1/1.5) = 0.2 + 20 \times 0.0645 = 1.49\).`,
              String.raw`Quotes: bid \(98 - 0.745 = 97.26\), ask \(98 + 0.745 = 98.75\).`,
            ],
            why: [
              'parameters (illustrative units)',
              'inventory pushes the reservation price below mid',
              'risk part plus order-flow part',
              'split evenly around r',
            ],
            answer: 'Both quotes sit below the mid of 100, so the market maker is more likely to sell than buy, shedding inventory.',
          },
        },
      ],
    },
  ],
  sources: [
    'Avellaneda, M., & Stoikov, S. (2008). High-frequency trading in a limit order book. Quantitative Finance, 8(3), 217–224.',
    'Glosten, L. R., & Milgrom, P. R. (1985). Bid, ask and transaction prices in a specialist market with heterogeneously informed traders. Journal of Financial Economics, 14(1), 71–100.',
    'Cartea, Á., Jaimungal, S., & Penalva, J. (2015). Algorithmic and High-Frequency Trading. Cambridge University Press.',
  ],
  related: ['finance/quant/execution-and-microstructure', 'finance/trading/how-orders-work', 'game-theory/start-here'],
}

export default guide
