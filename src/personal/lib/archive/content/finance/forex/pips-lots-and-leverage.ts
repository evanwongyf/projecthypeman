import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The vocabulary of foreign exchange trading is small and exact. A pair is quoted as the price of one currency (the base) in terms of another (the quote). The smallest customary move is the pip, a lot is the standard contract size, and leverage lets a trader control a position many times the size of the money in the account, with a margin deposit as security. These ideas produce one important result that beginners often miss: the size of a trade should be set by the risk the trader is willing to take, and the stop-loss distance, not by the account’s buying power. This guide explains quotes, pips, lots, margin, leverage and margin calls, derives the position-size formula, works through an example and gives a live calculator, and shows why leverage multiplies losses as well as gains.',
  nutshell: [
    'A pair **EUR/USD = 1.0850** means 1 euro costs 1.0850 dollars; EUR is the **base**, USD the **quote**.',
    'A **pip** is 0.0001 for most pairs (0.01 for yen pairs): on 100,000 units of EUR/USD, one pip is **US$10**.',
    'A **standard lot** is 100,000 units of the base currency (mini 10,000; micro 1,000).',
    '**Leverage** of 20:1 means **margin** of 5% of the position: the account is wiped out by a **5% adverse move** (less because of costs).',
    '**Position size = risk in money ÷ (stop distance in pips × pip value per unit)**; leverage only decides how much margin is used.',
  ],
  sections: [
    {
      id: 'lab',
      title: 'The position-size calculator',
      lead: 'Risk first, size second.',
      blocks: [
        { t: 'fin-lab', viz: 'pip-calc' },
        {
          t: 'math',
          tex: String.raw`\text{Units}=\frac{B\times r}{\text{SL}\times v},\qquad \text{Margin}=\frac{\text{Units}\times P}{\ell},\qquad \text{Loss to wipe out the account}\approx\frac{1}{\ell}`,
          caption: 'The position size from the account balance B, the risk fraction r, the stop-loss distance SL in pips and the value of a pip per unit v; the margin required at leverage ℓ.',
          where: [{ sym: 'B', def: 'account balance' }, { sym: 'r', def: 'the fraction of the balance you are willing to lose on the trade' }, { sym: '\\text{SL}', def: 'the distance from entry to the stop-loss, in pips' }, { sym: 'v', def: 'the value of one pip for one unit, in the account currency' }, { sym: '\\ell', def: 'leverage (for example 20 for 20:1)' }],
          syntax: [{ sym: 'B\\times r', say: 'the money at risk. Effect: fixing r at 1% means every trade loses at most 1% if the stop is hit. Why: position size is chosen to keep the loss to the plan.' }],
          worked: {
            title: 'A US$10,000 account risking 1% on EUR/USD with a 30-pip stop',
            steps: ['Money at risk = 10,000 × 1% = US$100. Pip value per unit = 0.0001 USD.', 'Units = 100/(30 × 0.0001) = 33,333 units = 0.33 standard lots.', 'Notional at 1.0850 = US$36,167; margin at 20:1 = US$1,808 (18% of the account).'],
            answer: 'The trade can lose US$100 (1%) if the 30-pip stop is hit, even though the notional position is 3.6 times the account. A tighter stop allows a larger position for the same risk; a wider stop requires a smaller one. If the stop is slipped or the market gaps, the loss can be larger than planned.',
          },
        },
      ],
    },
    {
      id: 'vocab',
      title: 'Quotes, pips and lots',
      lead: 'The vocabulary.',
      blocks: [
        {
          t: 'table',
          head: ['Term', 'Meaning', 'Example'],
          rows: [
            ['Base and quote', 'The first currency in the pair is the base; the second the quote', 'USD/JPY = 150.00: 1 dollar costs 150 yen'],
            ['Pip', 'The standard unit of price change: the fourth decimal (0.0001), or the second for yen pairs', 'EUR/USD from 1.0850 to 1.0851 is one pip'],
            ['Pipette', 'A tenth of a pip (the fifth decimal)', '1.08505'],
            ['Lot', 'A standard contract: 100,000 units of the base currency; mini lot 10,000; micro lot 1,000', '0.33 lots = 33,000 units'],
            ['Pip value', 'The money value of one pip on the position', '100,000 EUR/USD: US$10; 100,000 USD/JPY: 1,000 yen (about US$6.7 at 150)'],
            ['Spread', 'The gap between bid and ask', '1.5 pips'],
            ['Margin', 'The deposit held against an open position', '5% at 20:1 leverage'],
            ['Margin call and stop-out', 'A warning, then the forced closing of positions when equity falls below a threshold', 'Brokers set their own levels (for example 100% and 50% of margin)'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why yen pairs differ', tag: 'the second decimal', body: 'The yen is worth so little per unit that prices are quoted to two decimals; a pip is 0.01 yen.' },
            { title: 'Pip value for other pairs', tag: 'conversion', body: 'If the quote currency is not your account currency, the pip value is converted: on USD/CAD a pip is 0.0001 Canadian dollars, converted to US dollars at the current rate.' },
            { title: 'Leverage limits', tag: 'by regulator', body: 'Regulators cap retail leverage: for example 30:1 on major pairs in the EU and UK and 50:1 in the US. Rules for Singapore customers depend on the broker and product; check the licensing and the terms.' },
            { title: 'Slippage and gaps', tag: 'the stop is not a guarantee', body: 'In a fast market or over a weekend a stop may be executed far from its level. The Swiss franc move in January 2015 (the SNB removed its cap) moved EUR/CHF about 20% in minutes and bankrupted several brokers and many accounts.' },
          ],
        },
      ],
    },
    {
      id: 'leverage',
      title: 'Leverage: the same coin, two sides',
      lead: 'It multiplies the outcome, not the edge.',
      blocks: [
        {
          t: 'table',
          head: ['Leverage', 'Margin', 'Adverse move that exhausts the margin', 'Daily move of 1% changes the account by'],
          rows: [
            ['5:1', '20%', '20%', '5%'],
            ['20:1', '5%', '5%', '20%'],
            ['50:1', '2%', '2%', '50%'],
            ['100:1', '1%', '1%', '100%'],
          ],
          caption: 'A typical major pair moves 0.5% to 1% on an average day and several per cent in a week of news, so high leverage can end an account within hours.',
        },
        { t: 'callout', tone: 'warn', title: 'The most important sentence in this guide', text: 'Leverage does not change the odds of a trade; it changes how much you stand to lose when you are wrong. A 1% risk per trade can be taken with any leverage if the position is sized from the stop distance, but using the maximum leverage available is almost always a way of risking far more than 1%.' },
        { t: 'dodont', do: ['Decide the risk in money before the trade', 'Place the stop first and compute the size from it', 'Keep margin used well below the account (for example under 10%)'], dont: ['Size positions by the leverage the broker offers', 'Move the stop away to avoid being stopped out', 'Add to a losing position to average down on margin'] },
      ],
    },
  ],
  sources: [
    'Archer, M. D. (2010). *Getting Started in Currency Trading* (3rd ed.). Wiley.',
    'European Securities and Markets Authority (2018). *ESMA agrees product intervention measures on CFDs and binary options* (leverage limits) (esma.europa.eu).',
    'US Commodity Futures Trading Commission and National Futures Association: retail forex leverage rules (nfa.futures.org).',
    'Monetary Authority of Singapore: licensing of capital markets services and retail investor protection (mas.gov.sg).',
  ],
  related: ['finance/trading/sizing-and-ruin', 'finance/technical/risk-management', 'finance/forex/fx-trading-process-and-psychology'],
}

export default guide
