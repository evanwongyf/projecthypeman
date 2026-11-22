import type { Guide } from '../../guide'
import { EX } from '../../../finance/examples'

const guide: Guide = {
  intro:
    'This shelf teaches how money, markets and the economy work, then goes deep on the three ways investors and traders analyse markets: **fundamental analysis**, **technical analysis** and **candlestick charting**. Each guide explains the why and the how, shows the maths properly typeset, works examples with real numbers, and is packed with annotated charts and interactive tools.',
  nutshell: [
    'Formulas are typeset, each followed by what every symbol means.',
    'Charts are annotated: boxes mark periods and patterns, arrows mark heights and targets, and labels point out key candles.',
    'Interactive tools let you change the numbers yourself: calculators, an indicator lab, a candle explorer and a pattern lab.',
    'Nothing here is financial advice. It is education; investing involves the risk of losing money.',
  ],
  sections: [
    {
      id: 'preview',
      title: 'A taste of what is inside',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_0 = \frac{D_1}{r - g}`,
          syntax: [
            { sym: String.raw`P_0`, say: String.raw`Read "P sub zero": the price today (time zero).` },
            { sym: String.raw`D_1`, say: String.raw`Read "D sub one": the dividend expected one year from now.` },
            { sym: String.raw`\frac{D_1}{r-g}`, say: String.raw`Divide next year’s dividend by the gap between required return and growth. It only works when r is bigger than g; the smaller the gap, the larger the value.` },
          ],
          worked: {
            steps: [
              String.raw`Given: last dividend \(D_0 = \$2.00\), growing at \(g = 5\%\); required return \(r = 9\%\).`,
              String.raw`Next dividend: \(D_1 = 2.00 \times 1.05 = \$2.10\).`,
              String.raw`Gap: \(r - g = 0.09 - 0.05 = 0.04\).`,
              String.raw`Value: \(P_0 = 2.10 / 0.04 = \$52.50\).`,
              String.raw`If growth were only 3% (\(D_1 = \$2.06\)), the gap becomes 0.06 and the value falls to about $34.33.`,
            ],
            answer: String.raw`The share is worth $52.50 today; a lower growth outlook cuts it sharply.`,
          },
          where: [
            { sym: 'P_0', def: 'A share’s value today' },
            { sym: 'D_1', def: 'Next year’s dividend' },
            { sym: 'r, g', def: 'Required return and dividend growth rate' },
          ],
          caption: 'The Gordon growth model, derived step by step in the dividend models guide.',
        },
        {
          t: 'candles',
          rows: EX.morningStar,
          title: 'A morning star, annotated',
          boxes: [
            { from: 0, to: 3, label: 'Downtrend', color: 'var(--pink)' },
            { from: 4, to: 6, label: 'Morning star', color: 'var(--mint)' },
          ],
          points: [{ i: 5, label: 'The star', at: 'low' }],
        },
      ],
    },
    {
      id: 'path',
      title: 'Suggested paths',
      blocks: [
        { t: 'p', text: '**New to finance?** Start with the foundations.' },
        {
          t: 'links',
          items: [
            { path: 'finance/foundations/time-value', note: 'Compounding and discounting: the basis of everything.' },
            { path: 'finance/foundations/risk-return' },
            { path: 'finance/foundations/markets' },
            { path: 'finance/foundations/efficient-markets', note: 'Why beating the market is hard.' },
          ],
        },
        { t: 'p', text: '**Fundamental analysis**: valuing businesses.' },
        {
          t: 'links',
          items: [
            { path: 'finance/fundamental/statements' },
            { path: 'finance/fundamental/ratios' },
            { path: 'finance/fundamental/multiples' },
            { path: 'finance/fundamental/dcf' },
          ],
        },
        { t: 'p', text: '**Technical analysis and candlesticks**: reading charts.' },
        {
          t: 'links',
          items: [
            { path: 'finance/technical/what-is-ta' },
            { path: 'finance/candlesticks/anatomy' },
            { path: 'finance/candlesticks/single' },
            { path: 'finance/technical/momentum', note: 'RSI, stochastic and MACD, with the maths worked.' },
            { path: 'finance/technical/risk-management' },
            { path: 'finance/technical/evidence', note: 'What the research really says.' },
          ],
        },
      ],
    },
    {
      id: 'tracks',
      title: 'Two tracks: investing and trading',
      blocks: [
        { t: 'p', text: 'The shelf is organised in groups. **Investing** is about owning assets for their long-term returns: you decide what to hold, how much and for how long, and you value what you buy. **Trading** is about profiting from shorter price moves: you decide when to enter and exit, how much to risk on each position and how to manage the odds. The skills overlap (risk, costs, psychology) but the questions differ. A sensible route is to learn the foundations and the investing track first, because it is the one most people need; learn trading to understand markets and risk, not as a shortcut to income.' },
        {
          t: 'table',
          head: ['Question', 'Investing track', 'Trading track'],
          rows: [
            ['Time horizon', 'Years to decades', 'Minutes to months'],
            ['Main edge claimed', 'Valuation, quality, patience, low cost', 'Timing, risk control, execution, a repeatable setup'],
            ['What you study', 'Goals and allocation, the investing process, company and market analysis, philosophies, crypto as an asset', 'Charts and candlesticks, entries and exits, position sizing, forex and its leverage, quantitative testing'],
            ['Typical mistake', 'Chasing returns, paying high costs, abandoning the plan in a crash', 'Over-leverage, overtrading, moving stops, trusting back-tests'],
            ['Evidence', 'Low-cost diversification works; factors earn small premia', 'Most active traders underperform after costs; a few systematic strategies earn premia'],
          ],
        },
        { t: 'p', text: '**The investing track:** set goals, then build and run a portfolio, then analyse and choose.' },
        {
          t: 'links',
          items: [
            { path: 'finance/investing-process/goals-and-risk-profile', note: 'Goals, horizon, risk tolerance and capacity, the policy statement.' },
            { path: 'finance/investing-process/asset-allocation-in-practice', note: 'A live growth-band lab and Singapore building blocks.' },
            { path: 'finance/investing-process/stock-screening', note: 'A live screener, and why screens mislead.' },
            { path: 'finance/investing-process/research-process-and-checklists' },
            { path: 'finance/investing-analysis/company-analysis-workflow' },
            { path: 'finance/investing-analysis/singapore-market-and-reits', note: 'The STI, banks and REITs.' },
            { path: 'finance/crypto-investing/crypto-for-investors', note: 'Crypto as an asset: types, valuation, on-chain data, DeFi and custody.' },
          ],
        },
        { t: 'p', text: '**The trading track:** charts, the mechanics of entries and exits, and the currency market.' },
        {
          t: 'links',
          items: [
            { path: 'finance/trading/how-orders-work' },
            { path: 'finance/trading/risk-reward-and-expectancy' },
            { path: 'finance/forex/how-the-fx-market-works', note: 'The largest market: pairs, pips, leverage, carry and hedging.' },
            { path: 'finance/forex/pips-lots-and-leverage', note: 'A position-size calculator.' },
            { path: 'finance/forex/interest-rate-parity-and-carry', note: 'A carry-trade lab.' },
            { path: 'finance/forex/fx-trading-process-and-psychology' },
          ],
        },
      ],
    },
    {
      id: 'warning',
      title: 'A word of caution',
      blocks: [
        { t: 'callout', tone: 'warn', title: 'Education, not advice', text: 'These guides explain how analysts and traders think. They are not recommendations to buy or sell anything. Most people who trade actively underperform simple, low-cost index funds after costs. If you invest, diversify, keep costs low, and never risk money you cannot afford to lose.' },
        { t: 'callout', tone: 'fact', title: 'The examples are made up', text: 'Kopi & Co, the coffee chain used throughout the fundamental analysis guides, is fictional, and the price charts in the labs are random walks generated on your device, so no real security is being recommended or analysed.' },
      ],
    },
  ],
  related: ['finance/foundations/time-value', 'finance/fundamental/what-is-fa', 'finance/technical/what-is-ta'],
}

export default guide
