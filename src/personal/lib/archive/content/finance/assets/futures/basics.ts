import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A futures contract is an agreement to buy or sell a set amount of something (oil, wheat, a stock index, a currency) at a price fixed today, for delivery on a future date. Unlike options, both sides are **obliged** to complete the deal. Futures trade on exchanges, are settled daily, and require only a small deposit: so they carry a lot of leverage.',
  nutshell: [
    'The buyer is **long** (gains if the price rises); the seller is **short**.',
    'You post **initial margin** (often 3–12% of the contract value), not the full price.',
    'Gains and losses are settled every day (**marking to market**); if your account falls below **maintenance margin**, you get a **margin call**.',
    'Most futures are closed out before expiry; some settle in cash, others by physical delivery.',
    '**Forwards** are similar but private, customised and settled at the end.',
  ],
  sections: [
    {
      id: 'mtm',
      title: 'Margin and marking to market',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Daily P\&L} = (F_t - F_{t-1}) \times \text{multiplier} \times \text{number of contracts}`,
          where: [
            { sym: String.raw`F_t, F_{t-1}`, def: 'Today’s and yesterday’s settlement (futures) prices' },
            { sym: 'multiplier', def: 'Dollar value of a 1-point move for one contract' },
          ],
          syntax: [
            { sym: String.raw`F_t,\ F_{t-1}`, say: String.raw`Read “F sub t” and “F sub t minus one”: today’s and yesterday’s settlement prices. The difference is the price change for the day.` },
            { sym: String.raw`\text{Daily P\&L}`, say: String.raw`Read “daily P and L”: profit and loss for the day. The backslash-ampersand is just a printed ampersand, as in P&L.` },
          ],
          worked: {
            title: 'Two days on three E-mini contracts',
            steps: [
              String.raw`Given: long 3 index futures, multiplier $50 a point, yesterday’s settlement 5,000.`,
              String.raw`Day 1: settles at 5,040, a change of \(+40\) points. P&L \(= 40 \times 50 \times 3 = +\$6{,}000\).`,
              String.raw`Day 2: settles at 4,985, a change of \(-55\) points. P&L \(= -55 \times 50 \times 3 = -\$8{,}250\).`,
              String.raw`Net: \(6{,}000 - 8{,}250 = -\$2{,}250\), which matches \((4985 - 5000) \times 50 \times 3\).`,
            ],
            answer: String.raw`The account is down $2,250 even though the index ended only 15 points lower, and each day’s gain or loss was paid in cash that same day.`,
          },
          caption: 'Each day, the exchange’s clearing house moves cash from losers’ accounts to winners’ accounts, unlike a stock, you realise gains and losses every single day rather than only when you sell, which is what makes margin calls arrive fast when the market moves against you, as the table below shows.',
        },
        {
          t: 'table',
          head: ['Day', 'Futures price', 'Daily gain/loss', 'Account', 'Note'],
          rows: [
            ['0', '5,000', '–', '$15,000', 'Buy 1 index future (×$50) = $250,000; initial margin $15,000'],
            ['1', '4,960', '−$2,000', '$13,000', ''],
            ['2', '4,900', '−$3,000', '$10,000', 'Below maintenance margin of $12,000: margin call'],
            ['2', '', '+$5,000 deposit', '$15,000', 'Topped back up to initial margin'],
            ['3', '4,980', '+$4,000', '$19,000', 'Excess above initial can be withdrawn'],
          ],
          caption: 'A 2% fall in the index (5,000 → 4,900) wiped out a third of the margin. That is leverage.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Leverage} = \frac{\text{Contract value}}{\text{Margin}} = \frac{250{,}000}{15{,}000} \approx 16.7\times`,
          syntax: [
            { sym: String.raw`\text{Leverage} = \frac{\text{Contract value}}{\text{Margin}}`, say: String.raw`Read “leverage equals contract value over margin”: how many dollars of exposure each dollar of your own cash controls.` },
            { sym: String.raw`16.7\times`, say: String.raw`Read “16.7 times”. The cross here means multiplied by: your results are about 16.7 times bigger, in percentage terms, than the index’s own move.` },
          ],
          worked: {
            title: 'Leverage at 5,200',
            steps: [
              String.raw`Given: index future at 5,200, multiplier $50, initial margin $13,000.`,
              String.raw`Contract value: \(5{,}200 \times 50 = \$260{,}000\).`,
              String.raw`Leverage: \(260{,}000/13{,}000 = 20\times\).`,
              String.raw`A 1% index move is \(52\) points, worth \(52 \times 50 = \$2{,}600\).`,
              String.raw`As a share of margin: \(2{,}600/13{,}000 = 20\%\).`,
            ],
            answer: String.raw`A 1% fall costs 20% of the margin, so a fall of just 5% would wipe it out entirely.`,
          },
          caption: 'Leverage here means your percentage gains and losses are multiplied by this number relative to the underlying asset’s own move, a 1% move in the index becomes a 16.7% move in your margin account, in either direction.',
        },
        {
          t: 'metric',
          name: 'leverage (contract value ÷ margin)',
          shows: 'How many times bigger your gains and losses are, as a percentage of the cash you actually put up, compared with the percentage move of the underlying asset itself. It is the single number that explains why futures can turn a small, boring price move into a large, exciting (or painful) account swing.',
          eli5: 'Putting down a $15,000 deposit to control $250,000 of index exposure is like putting a small down payment on a house: a modest change in the house’s value is a huge change relative to your deposit. Leverage of 16.7× means every 1% the index moves is felt as roughly 16.7% against your margin.',
          higher: 'Your account swings harder for the same move in the underlying, bigger potential profits, but also bigger potential losses, and a greater chance of a margin call forcing you to add cash or get closed out, as in the 2% index fall in the table above that wiped out a third of the margin.',
          lower: 'Your account is steadier for the same underlying move, you are putting up more margin relative to the exposure, which leaves more room to absorb losses before a margin call. Posting more than the minimum initial margin is a common, simple way to deliberately lower your effective leverage.',
          typical: 'Exchange-set initial margins often imply leverage of roughly 10–20× on major stock-index futures, but a trader’s true leverage can be far higher if they post only the bare minimum and far lower if they hold extra cash in the account, the exchange sets a floor on margin, not on how much leverage you choose to run.',
        },
        { t: 'fin-tool', tool: 'futures' },
      ],
    },
    {
      id: 'who',
      title: 'Who uses futures',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Hedgers', body: 'A farmer sells wheat futures to lock in a price before harvest; an airline buys fuel futures to fix its costs.' },
            { title: 'Speculators', body: 'Traders betting on price moves, providing liquidity to hedgers.' },
            { title: 'Arbitrageurs', body: 'Keep futures prices in line with spot prices through cash-and-carry trades.' },
            { title: 'Investors', body: 'Use index futures to adjust market exposure quickly and cheaply.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'From butter and eggs', text: 'The Chicago Mercantile Exchange began in 1898 as the Chicago Butter and Egg Board. Today it trades futures on everything from interest rates to weather, and its E-mini S&P 500 contract is one of the most traded financial contracts in the world.' },
      ],
    },
  ],
  sources: ['Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.). Pearson.', 'CME Group. (n.d.). *Introduction to Futures*. cmegroup.com.'],
  related: ['finance/assets/futures/pricing', 'finance/assets/futures/hedging', 'finance/assets/commodities'],
}

export default guide
