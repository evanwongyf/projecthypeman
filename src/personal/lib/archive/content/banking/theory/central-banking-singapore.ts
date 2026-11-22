import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most central banks set an interest rate to manage inflation. The Monetary Authority of Singapore does something different. Singapore is a small, extremely open economy where imports and exports are several times the size of GDP, so the exchange rate affects prices far more directly than the interest rate does. MAS therefore manages the Singapore dollar against a basket of its trading partners’ currencies (the S$NEER) within a policy band, and lets interest rates be set by the market. This guide explains what central banks do, how the S$NEER policy band works, why Singapore chose it, how the numbers move (a worked basket calculation), what the policy trilemma says about why Singapore cannot also set an interest rate, and how SORA and local interest rates follow.',
  nutshell: [
    'Central banks issue currency, run the payment system, act as **lender of last resort**, supervise banks (in Singapore, MAS does all of this) and conduct **monetary policy**.',
    'MAS’s objective is **price stability** as the basis for sustained economic growth. It manages the **S$NEER** (trade-weighted nominal effective exchange rate) within a band described by its **slope, centre and width**, and reviews it **twice a year** (April and October).',
    'A **tighter** policy means a steeper slope of appreciation (stronger S$ against the basket), reducing imported inflation; **easing** reduces the slope or re-centres the band lower.',
    'The **trilemma**: a country cannot have a fixed exchange rate, free capital flows and independent monetary policy at once. Singapore keeps capital mobile and manages the exchange rate, so **interest rates are set by markets** (SORA follows US rates and expectations).',
    'MAS’s inflation measure is **MAS Core Inflation** (excluding accommodation and private transport costs).',
  ],
  sections: [
    {
      id: 'what',
      title: 'What central banks do',
      lead: 'Five jobs.',
      blocks: [
        {
          t: 'table',
          head: ['Function', 'What it means', 'MAS'],
          rows: [
            ['Issue currency', 'Banknotes and coins, and settlement money for banks (reserves)', 'MAS issues Singapore’s currency (notes through the Board of Commissioners of Currency, Singapore)'],
            ['Monetary policy', 'Control inflation and stabilise the economy through interest rates or the exchange rate', 'Exchange-rate-centred policy using the S$NEER band'],
            ['Banker to banks and government', 'Settle payments, hold reserves, manage government accounts', 'Operates MEPS+ and the interbank settlement system; manages the official reserves'],
            ['Lender of last resort', 'Lend to solvent banks that cannot get funds in a panic', 'Standing liquidity facilities and emergency powers'],
            ['Financial supervision', 'Supervise banks, insurers and markets for safety and conduct', 'Integrated supervisor of the financial sector'],
          ],
        },
        { t: 'p', text: 'Most central banks, such as the US Federal Reserve and the European Central Bank, set a short-term policy interest rate and let the exchange rate float. They aim to hit an inflation target (often 2%), using rate rises to cool the economy and cuts to stimulate it. The transmission works through bank lending rates, asset prices, expectations and the exchange rate.' },
      ],
    },
    {
      id: 'neer',
      title: 'The S$NEER policy band',
      lead: 'Managing the Singapore dollar against a basket.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{S\$NEER}_t=100\times\prod_{i=1}^{n}\Big(\frac{e_{i,t}}{e_{i,0}}\Big)^{w_i},\qquad \sum_i w_i=1`,
          caption: 'A trade-weighted nominal effective exchange rate: the geometric weighted average of exchange rates against each trading partner, relative to a base period. (An increase means the S$ is stronger.)',
          where: [{ sym: 'e_{i,t}', def: 'the value of the Singapore dollar against currency i at time t (units of foreign currency per S$)' }, { sym: 'w_i', def: 'the weight of partner i, based on trade shares (the basket and weights are not published by MAS)' }],
          syntax: [{ sym: '(e_{i,t}/e_{i,0})^{w_i}', say: 'the S$’s change against one partner, raised to its trade weight. Effect: a 10% rise against a partner with weight 0.2 contributes about 2% to the NEER. Why: the geometric mean combines proportional changes consistently.' }, { sym: '\\prod', say: 'multiplying the weighted changes together. Effect: the index is an average of the S$’s strength against many currencies, not just the US dollar. Why: the exchange-rate policy aims at the trade-weighted value, since inflation depends on prices of imports from many countries.' }],
          worked: {
            title: 'A three-partner basket',
            steps: ['Weights: US 40%, Malaysia 30%, China 30%. Base period = 100. Over a year, the S$ rises 4% against the US dollar, falls 2% against the ringgit and rises 6% against the yuan.', 'NEER = 100 × 1.04^0.4 × 0.98^0.3 × 1.06^0.3 = 100 × 1.0158 × 0.9940 × 1.0176 = 102.75.', 'A rise of about 2.75% in the S$ trade-weighted value.'],
            answer: 'The S$ can strengthen against some currencies and weaken against others while the NEER rises moderately; MAS focuses on this single trade-weighted number.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Slope', tag: 'rate of appreciation', body: 'The band’s centre rises at a chosen pace per year ("modest and gradual appreciation"). A steeper slope tightens policy; a flatter slope eases.' },
            { title: 'Width', tag: 'tolerance', body: 'The band’s width allows the S$NEER to fluctuate around the centre, giving flexibility. MAS widens or narrows it at times of uncertainty.' },
            { title: 'Centre', tag: 'the level', body: 'A one-off re-centring of the band up or down changes the level of the policy path at once, used for larger adjustments.' },
            { title: 'Reviews', tag: 'twice a year', body: 'MAS announces its policy statement in April and October, and occasionally between (as in 2020 and 2022). It does not disclose the exact slope, width and centre, only the direction of changes.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'MAS sets the target path for the S$NEER', body: 'It specifies a policy band: a gently rising path with a width.' },
            { title: 'It intervenes in the foreign exchange market', body: 'To keep the S$NEER within the band, MAS buys or sells foreign currency from its large reserves, in the spot FX market.' },
            { title: 'Money-market liquidity adjusts', body: 'MAS sterilises or lets the banking system’s liquidity change: interest rates and money supply adjust as a consequence.' },
            { title: 'Prices respond', body: 'A stronger S$ lowers the cost of imports (a large share of what Singapore consumes and uses in production is imported), dampening inflation, with a lag of several quarters.' },
          ],
        },
      ],
    },
    {
      id: 'why',
      title: 'Why an exchange rate, and why not an interest rate',
      lead: 'The case and the trilemma.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`i_{\text{SGD}}\approx i_{\text{USD}}-\frac{\Delta s^{e}}{s}\quad(\text{uncovered interest parity}),\qquad \text{trilemma: choose two of}\ \{\text{fixed rate},\ \text{free capital},\ \text{independent }i\}`,
          caption: 'Uncovered interest parity: with free capital flows, interest rate differentials reflect expected exchange-rate changes; hence a country managing its exchange rate cannot also set its own interest rate.',
          where: [{ sym: '\\Delta s^e/s', def: 'the expected percentage appreciation of the S$ against the US dollar over the period' }],
          syntax: [{ sym: 'i_{\\text{SGD}}\\approx i_{\\text{USD}}-\\Delta s^e/s', say: 'the Singapore interest rate equals the US rate less the expected S$ appreciation. Effect: because MAS guides the S$ to appreciate gradually, S$ interest rates tend to sit below US rates by about the expected appreciation. Why: if S$ rates were not so, investors would move money until returns were equal.' }, { sym: '\\text{trilemma}', say: 'only two of three objectives can be achieved. Effect: Singapore chooses an open capital account and a managed exchange rate, and gives up setting interest rates. Why: if MAS tried to set a rate different from that implied by the exchange-rate path, capital would flow until the path broke.' }],
          worked: {
            title: 'An interest-rate gap',
            steps: ['US 3-month rate 5.3%; if the S$ is expected to appreciate by 2% a year against the US dollar, UIP implies a 3-month S$ rate of about 3.3%.', 'If MAS signals a steeper appreciation (say 3% a year), S$ rates would tend to fall relative to US rates, other things equal: the opposite of a rate cut by a conventional central bank; yet the policy is tighter because the S$ strengthens.'],
            answer: 'This explains why Singapore’s interest rates can move with global (US) rates and why the thing to watch for Singapore policy is the exchange-rate path, not an interest-rate announcement.',
          },
        },
        {
          t: 'table',
          head: ['Reason for the exchange-rate regime', 'Explanation'],
          rows: [
            ['Openness', 'Trade is about 3 times GDP; imports make up a large share of consumption and production costs, so the exchange rate transmits quickly to prices.'],
            ['Interest-rate channel is weak', 'The domestic banking system is small relative to the economy and the capital account is open; interest rates are largely determined internationally.'],
            ['Credibility', 'A strong, stable currency anchors expectations and supports Singapore’s status as a financial centre.'],
            ['Flexibility', 'The band can be adjusted twice a year to the shocks the economy faces; the exchange rate can absorb shocks to external demand.'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Interest rates in Singapore', text: 'SORA (Singapore Overnight Rate Average), published by MAS, reflects overnight interbank borrowing; fixed-deposit, mortgage and loan rates in Singapore follow SORA and market rates, which move with US rates and expectations. When you read "interest rates are up", it is mostly the effect of US rates, while the MAS policy statement concerns the exchange-rate slope.' },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore (2015). *Singapore’s Monetary Policy Framework* (Macroeconomic Review and monetary policy statements, April and October each year) (mas.gov.sg).',
    'Chow, H. K. (2012). *Monetary Policy and Exchange Rate Management in Singapore*. See also Parrado, E. (2004). Singapore’s unique monetary policy: how does it work? *IMF Working Paper WP/04/10*.',
    'Obstfeld, M., Shambaugh, J. C. & Taylor, A. M. (2005). The trilemma in history: tradeoffs among exchange rates, monetary policies, and capital mobility. *Review of Economics and Statistics*, 87(3).',
    'Mundell, R. A. (1963). Capital mobility and stabilization policy under fixed and flexible exchange rates. *Canadian Journal of Economics and Political Science*, 29(4).',
    'Monetary Authority of Singapore: SORA and money market operations (mas.gov.sg/monetary-policy).',
  ],
  related: ['banking/theory/money-creation', 'banking/theory/interest-rate-and-market-risk', 'finance/economics/central-banks', 'finance/economics/inflation-rates', 'banking/consumer/mortgages-in-singapore'],
}

export default guide
