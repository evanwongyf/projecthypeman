import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Whatever one thinks of crypto as an asset, the portfolio question is a question about size. An asset that has fallen by 77% to 93% several times, with volatility around four times that of the stock market, can improve a portfolio’s return, harm it or end an investor’s plan, depending almost entirely on how much is held. This guide gives the arithmetic: the gain needed to recover from a drawdown (a loss of 80% needs a gain of 400%), how a small allocation changes the portfolio’s volatility and what share of the portfolio’s risk it contributes (a 5% allocation with 70% volatility can account for 18% of total risk), how correlation with stocks has changed, how to rebalance and size a position, how Singapore treats gains for tax purposes and what a written plan for the next large fall should contain. It is an educational discussion, not a recommendation to hold any amount of crypto.',
  nutshell: [
    '**Recovery arithmetic**: after a loss of d you need a gain of \\(1/(1-d)-1\\): **−50% needs +100%**, **−80% needs +400%**, **−90% needs +900%**.',
    '**Risk contribution** of a small position is far larger than its weight: a **5%** allocation at **70%** volatility and correlation 0.3 with a 60/40 portfolio raises volatility from **10.1% to 11.2%** and makes up about **18%** of total risk.',
    'Correlation with stocks was low early on and **rose to 0.5–0.7** in 2020–2022 risk-off episodes: it is not a reliable diversifier in a crisis.',
    'Sizing approaches: a **fixed small percentage** (commonly 1–5%), **risk-budgeting**, and **rebalancing bands**, with money you can afford to lose entirely.',
    'Write a **plan for an 80% fall** before it happens; many investors sold at the lows.',
  ],
  sections: [
    {
      id: 'maths',
      title: 'The arithmetic of drawdowns and risk contribution',
      lead: 'What a small position does to a portfolio.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`g=\frac{1}{1-d}-1,\qquad \sigma_p^{2}=(1-w)^2\sigma_0^2+w^2\sigma_c^2+2w(1-w)\rho\,\sigma_0\sigma_c,\qquad RC_c=\frac{w^2\sigma_c^2+w(1-w)\rho\sigma_0\sigma_c}{\sigma_p^2}`,
          caption: 'The gain needed to recover from a loss d, the volatility of a portfolio with a crypto weight w, and the share of its risk that comes from crypto.',
          where: [{ sym: 'd', def: 'the drawdown (loss) as a fraction' }, { sym: 'w', def: 'the crypto weight' }, { sym: '\\sigma_0,\\ \\sigma_c', def: 'volatilities of the rest of the portfolio and of crypto' }, { sym: '\\rho', def: 'the correlation between them' }, { sym: 'RC_c', def: 'the share of portfolio variance contributed by crypto' }],
          syntax: [{ sym: '1/(1-d)-1', say: 'the gain that restores the original value. Effect: it explodes as d approaches 100%. Why: a loss shrinks the base on which the recovery gain is earned.' }, { sym: 'w^2\\sigma_c^2', say: 'the stand-alone variance contribution. Effect: it is large for a volatile asset even at a small weight. Why: variance grows with the square of volatility.' }],
          worked: {
            title: 'Adding crypto to a 60/40 portfolio (σ₀ = 10.1%)',
            steps: ['Crypto volatility 70% and correlation 0.3. At w = 2%: σ_p = 10.4%, crypto contributes 5.6% of risk.', 'At w = 5%: σ_p = 11.2% and crypto contributes 17.9% of the risk; at w = 10%: σ_p = 13.1% and 40% of the risk.', 'An 80% fall in the crypto holding costs 4% of the portfolio at w = 5%, and 8% at w = 10%.'],
            answer: 'A 5% weight is a small portion of the money but a sizeable portion of the risk; at 10% the crypto dominates. The size decides whether a crash is an inconvenience or a damage to the plan: choose it from the loss you could absorb, not the return you hope for.',
          },
        },
        {
          t: 'bars',
          title: 'Share of total portfolio risk contributed by crypto (σ = 70%, ρ = 0.3, base portfolio σ = 10.1%)',
          items: [{ label: '2% allocation', value: 5.6 }, { label: '5% allocation', value: 17.9 }, { label: '10% allocation', value: 40 }],
          unit: '%',
          min: 0,
          max: 50,
          decimals: 1,
        },
        {
          t: 'table',
          head: ['Loss', 'Gain needed to recover'],
          rows: [['−20%', '+25%'], ['−50%', '+100%'], ['−70%', '+233%'], ['−80%', '+400%'], ['−90%', '+900%']],
          caption: 'Bitcoin’s past falls of 77% to 93% would have needed gains of 335% to 1,300% to recover.',
        },
      ],
    },
    {
      id: 'sizing',
      title: 'Sizing, rebalancing and correlation',
      lead: 'Rules written in advance.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'A fixed small percentage', tag: 'the simple rule', body: 'Many advisers who accept crypto in a portfolio suggest 1% to 5%; the rule bounds the damage. Choose the size from what you could lose entirely without changing your life.' },
            { title: 'Risk budgeting', tag: 'by contribution', body: 'Decide how much of the portfolio’s risk you are willing to take from crypto (for example 10%) and solve for the weight; this scales down the weight if volatility rises.' },
            { title: 'Rebalancing bands', tag: 'sell some of the winners', body: 'If the position doubles and exceeds a band (for example 7.5%), trim it back to target: this locks in some gains and keeps the risk constant.' },
            { title: 'Correlation changes', tag: 'diversifier or not?', body: 'Bitcoin’s correlation with US technology stocks rose in 2020–22 (to about 0.5–0.7 at times) and dropped at others; it behaves like a risk asset in a crisis.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Decide the maximum loss', body: 'State the largest loss in money terms you will accept from this part of the portfolio.' },
            { title: 'Set the size', body: 'Divide by an assumed worst-case fall (80% is a prudent figure) to find the position size.' },
            { title: 'Choose how to buy', body: 'Regular purchases over time reduce the effect of timing, but do not reduce the volatility of the position.' },
            { title: 'Set rules for trimming and for adding', body: 'Write bands and review dates; avoid adding after large rises because of excitement.' },
            { title: 'Write the crash plan', body: 'What will you do if the price falls 50%, 70%, 80%? Include what you will not do (borrow more, panic-sell).' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Leverage and the retail rules', text: 'Leveraged crypto trading, in which positions are many times the account size, can wipe out an account in a single day: Bitcoin has fallen 20% in a day several times. In Singapore, retail customers are restricted from being offered credit or leverage to buy digital payment tokens; positions on offshore platforms outside this protection carry the full risk.' },
        { t: 'dodont', do: ['Invest only what you can afford to lose entirely', 'Write the position limit and the rebalancing band', 'Keep records of purchases and sales for tax', 'Review once or twice a year, not daily'], dont: ['Increase the position to recover losses', 'Borrow or use margin to buy', 'Put an emergency fund or money needed within five years into crypto', 'Follow social-media signals instead of your plan'] },
      ],
    },
  ],
  sources: [
    'Markowitz, H. (1952). Portfolio selection. *Journal of Finance*, 7(1), 77–91.',
    'Liu, Y. & Tsyvinski, A. (2021). Risks and returns of cryptocurrency. *Review of Financial Studies*, 34(6), 2689–2727.',
    'Makarov, I. & Schoar, A. (2020). Trading and arbitrage in cryptocurrency markets. *Journal of Financial Economics*, 135(2), 293–319.',
    'Monetary Authority of Singapore: consumer protection measures for digital payment tokens (mas.gov.sg).',
  ],
  related: ['finance/investing-process/asset-allocation-in-practice', 'finance/trading/sizing-and-ruin', 'finance/crypto-investing/crypto-for-investors'],
}

export default guide
