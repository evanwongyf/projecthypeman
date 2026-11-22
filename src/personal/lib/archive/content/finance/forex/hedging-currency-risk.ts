import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A Singapore company that sells goods in US dollars but pays its costs in Singapore dollars is exposed to the exchange rate: a weaker dollar cuts its profit even if nothing else changes. Hedging is the set of tools that reduces that exposure: forward contracts that fix a rate today, options that provide a floor while leaving the upside, and natural hedges that match the currency of costs and revenues. A good hedging policy is boring: it aims to make cash flows predictable, not to make money on currency views. This guide separates the types of exposure (transaction, translation and economic), explains the forward and option hedges with numbers, and runs a live lab in which a Singapore exporter hedges a US-dollar receivable at different ratios, and covers how individuals hedge foreign investments and what the hedge costs.',
  nutshell: [
    'Exposure types: **transaction** (a known payment in a foreign currency), **translation** (foreign subsidiaries’ accounts) and **economic** (the long-run effect on competitiveness).',
    'A **forward** fixes the rate for a future date: the forward rate reflects the interest-rate difference (see parity), so hedging is not free or costless in expected terms.',
    'An **option** (a put on the dollar) sets a floor on the rate for an upfront **premium**: it keeps the upside of a favourable move.',
    '**Natural hedges**: invoice in your own currency, match costs and revenues in the same currency, borrow in the currency of your revenues.',
    'A common policy is to hedge **50% to 100% of the next 6 to 12 months** of exposure in layers, and to hedge less for uncertain or distant flows.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The hedging lab: a US-dollar receivable',
      lead: 'Forward cover and the hedge ratio.',
      blocks: [
        { t: 'fin-lab', viz: 'fx-hedge' },
        {
          t: 'math',
          tex: String.raw`\text{Proceeds}=X\big[h\,F+(1-h)\,S_T\big],\qquad \sigma_{\text{proceeds}}=X\,S_0\,\sigma\sqrt{T}\,(1-h),\qquad F=S_0\,\frac{1+i_{\text{SGD}}T}{1+i_{\text{USD}}T}`,
          caption: 'The Singapore-dollar proceeds of a US-dollar receivable X when a fraction h is sold forward at F and the rest is converted at the future spot S_T; the standard deviation of the proceeds, and the forward rate from parity.',
          where: [{ sym: 'X', def: 'the US-dollar amount to be received' }, { sym: 'h', def: 'the hedge ratio (share sold forward)' }, { sym: 'F,\\ S_T', def: 'the forward rate and the spot rate on the day the money arrives' }, { sym: '\\sigma,\\ T', def: 'the annual volatility of USD/SGD and the time to payment' }],
          syntax: [{ sym: '(1-h)', say: 'the unhedged share. Effect: it scales the risk linearly: a 50% hedge halves the standard deviation of the proceeds. Why: only the unhedged part is exposed to the exchange rate.' }],
          worked: {
            title: 'US$1 million in six months, USD/SGD 1.34, volatility 9%',
            steps: ['If the USD interest rate is 1.5 points above the SGD rate, the forward is 1.34 × (1 − 0.015 × 0.5) = 1.3300: the dollar is at a forward discount.', 'Unhedged proceeds have a standard deviation of 1,000,000 × 1.34 × 0.09 × √0.5 = S$85,300 around an expected S$1,340,000 (if spot is expected to stay at 1.34), and a 5th percentile near S$1,200,000.', 'Fully hedged proceeds are fixed at S$1,330,000: a cost of S$10,000 against today’s spot, the interest difference, but no variation.'],
            answer: 'The hedge removes the risk and costs the interest difference; an unhedged exporter keeps both the risk and the chance of gain. Which is right depends on whether the company can bear a S$140,000 shortfall (the bad outcome) and whether pricing can be adjusted later.',
          },
        },
      ],
    },
    {
      id: 'tools',
      title: 'The tools',
      lead: 'Forwards, options and natural hedges.',
      blocks: [
        {
          t: 'table',
          head: ['Tool', 'How it works', 'Cost', 'Best for'],
          rows: [
            ['Forward contract', 'Agree today a rate for exchange on a date', 'No premium; the forward rate embeds the interest difference', 'Known payments and receipts'],
            ['Option (put or call)', 'The right but not the duty to exchange at a strike rate', 'A premium paid upfront', 'Uncertain flows (a tender, a forecast) or to keep upside'],
            ['Collar (zero-cost option structure)', 'Buy a protective option and sell another to pay for it', 'No premium, but gives up part of the upside', 'Companies that want a range'],
            ['Currency swap', 'Exchange principal and interest in two currencies', 'The interest difference and a basis', 'Long-term foreign debt'],
            ['Natural hedge', 'Match currencies of costs and revenues; borrow in the revenue currency; invoice in SGD', 'No direct cost; may affect pricing', 'The foundation of any policy'],
            ['Netting', 'Offset receivables and payables in the same currency before hedging the net', 'Low', 'Groups with many subsidiaries'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Transaction exposure', tag: 'the easiest to hedge', body: 'A specific amount, date and currency: use forwards or options.' },
            { title: 'Translation exposure', tag: 'accounting', body: 'The value of foreign subsidiaries’ assets and profits when consolidated: hedged by matching debt or net-investment hedges, though many firms leave it unhedged.' },
            { title: 'Economic exposure', tag: 'the hardest', body: 'A strong home currency makes exports less competitive over years; hedging cannot fully offset a structural change: pricing, sourcing and location decisions do.' },
            { title: 'Layered hedging', tag: 'a policy', body: 'Hedge a decreasing share of forecast flows further out (for example 90% for the next quarter, 60% for the next two, 30% for the year), so that the average hedge rate follows the market gradually.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Hedging as an individual investor', text: 'A Singapore investor holding US stocks or a global fund has dollar exposure. Currency-hedged share classes sell the foreign currency forward; their cost is about the interest-rate difference (when US rates exceed Singapore’s, hedging the dollar costs about the difference each year). Many long-term investors leave equity currency exposure unhedged, because the effect is a source of diversification and the hedge is costly; bond investors more often hedge, because the currency moves are large relative to bond returns.' },
      ],
    },
    {
      id: 'policy',
      title: 'A hedging policy in five steps',
      lead: 'Write it down.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify exposures', body: 'List currencies, amounts and dates of receipts and payments, and how certain each is.' },
            { title: 'Set objectives', body: 'Is the aim to protect the budget rate, margins or covenants? State the maximum acceptable loss.' },
            { title: 'Choose the hedge ratio and tenor', body: 'For example 75% of the next 6 months, 50% of months 7–12, with options for uncertain flows.' },
            { title: 'Select instruments and counterparties', body: 'Forwards for firm flows, options for tenders; use banks with approved credit limits.' },
            { title: 'Monitor and report', body: 'Compare outcomes with the policy, not with hindsight; accounting for hedges (IFRS 9 hedge accounting) needs documentation from the start.' },
          ],
        },
        { t: 'dodont', do: ['Hedge to reduce uncertainty, not to speculate', 'Match the hedge to the exposure in size and date', 'Document the policy and get board approval'], dont: ['Hedge more than the exposure (an over-hedge is a speculative position)', 'Close hedges because the market moved against them', 'Use complex products you cannot value or explain'] },
      ],
    },
  ],
  sources: [
    'Hull, J. C. (2022). *Options, Futures, and Other Derivatives*. Pearson (forward contracts, hedging).',
    'Eun, C. S. & Resnick, B. G. (2021). *International Financial Management*. McGraw-Hill.',
    'IASB. IFRS 9 Financial Instruments: hedge accounting (ifrs.org).',
    'Association of Corporate Treasurers and Enterprise Singapore guides on managing foreign-exchange risk (treasurers.org; enterprisesg.gov.sg).',
  ],
  related: ['finance/forex/interest-rate-parity-and-carry', 'finance/assets/futures/hedging', 'banking/theory/central-banking-singapore'],
}

export default guide
