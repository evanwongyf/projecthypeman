import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Event-driven strategies trade predictable situations (earnings announcements, mergers, index changes); seasonal strategies trade calendar patterns. Some have strong evidence and economic logic; others are mostly data-mining artefacts or have faded after publication.',
  nutshell: [
    '**Post-earnings-announcement drift** (Bernard and Thomas, 1989): prices keep moving in the direction of an earnings surprise for weeks; weaker in recent years.',
    '**Merger arbitrage**: buy the target after a deal is announced to capture the spread to the offer price; risk is the deal breaking.',
    '**Index inclusion**: see the index effects guide; shrinking.',
    '**Seasonal**: turn-of-the-month and “sell in May” effects have mixed and weakening evidence.',
  ],
  sections: [
    {
      id: 'merger',
      title: 'Merger arbitrage maths',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Spread} = \frac{O - P}{P}, \qquad P = p\,O + (1 - p)\,F \;\Rightarrow\; p = \frac{P - F}{O - F}`,
          caption: 'The deal spread, and the deal-completion probability implied by the price.',
          plain: 'After a cash takeover offer at price O, the target trades below O because the deal might fail, in which case the price would fall back towards F. If the market price is a fair weighted average of the two outcomes, you can solve for the probability the market assigns to completion.',
          where: [
            { sym: 'O', def: 'offer price' },
            { sym: 'P', def: 'current market price' },
            { sym: 'F', def: 'estimated price if the deal fails' },
            { sym: 'p', def: 'implied probability of completion' },
          ],
          syntax: [
            { sym: String.raw`\Rightarrow`, say: '“which gives”' },
          ],
          worked: {
            title: 'A $50 cash offer',
            steps: [
              String.raw`Price \$47, expected close in 6 months: spread \(= 3/47 = 6.38\%\); annualised \(1.0638^2 - 1 = 13.2\%\).`,
              String.raw`Fall-back price if the deal breaks: \$38.`,
              String.raw`Implied probability: \(p = (47 - 38)/(50 - 38) = 9/12 = 75\%\).`,
              'If you believe completion is 90% likely: expected value \(0.9 \times 50 + 0.1 \times 38 = 48.8\), above the \$47 price.',
            ],
            why: [
              'gross return if the deal closes, compounded to a year',
              'where the stock would trade without the deal',
              'solve for the market’s probability',
              'trade only if your estimate differs, with reason',
            ],
            answer: 'The market prices about a 75% chance of completion. The payoff is many small gains and occasional large losses (−19% here if the deal breaks); diversify across deals.',
          },
        },
      ],
    },
    {
      id: 'seasonal',
      title: 'Seasonal effects: a sceptical look',
      blocks: [
        { t: 'table', head: ['Effect', 'Claim', 'Evidence'], rows: [
          ['January effect', 'Small caps outperform in January', 'Strong historically, much weaker since the 1990s'],
          ['Turn of the month', 'Returns concentrate in the last and first few days', 'Persistent in some studies; small and cost-sensitive'],
          ['Sell in May', 'November–April beats May–October', 'Found in many countries (Bouman and Jacobsen, 2002); large variance; staying invested usually still wins'],
          ['Day-of-week', 'Monday returns weaker', 'Largely disappeared'],
        ] },
        { t: 'callout', tone: 'warn', title: 'Data mining', text: 'With enough calendar slices, some will look significant by chance. Prefer effects with a mechanism (pay-day flows, tax-loss selling), and require them to survive costs and out-of-sample periods.' },
      ],
    },
  ],
  sources: [
    'Bernard, V. L., & Thomas, J. K. (1989). Post-earnings-announcement drift: Delayed price response or risk premium? Journal of Accounting Research, 27, 1–36.',
    'Mitchell, M., & Pulvino, T. (2001). Characteristics of risk and return in risk arbitrage. Journal of Finance, 56(6), 2135–2175.',
    'Bouman, S., & Jacobsen, B. (2002). The Halloween indicator, “sell in May and go away”. American Economic Review, 92(5), 1618–1635.',
  ],
  related: ['finance/indexes/rebalancing-and-index-effects', 'finance/foundations/efficient-markets', 'finance/quant/backtesting-and-overfitting'],
}

export default guide
