import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Crypto assets are a new and unusual asset class: they have no earnings, no coupons and no claim on a business, yet together they are worth trillions of dollars and have produced some of the largest gains and some of the deepest losses of any asset in the last fifteen years. An investor’s first task is to separate the kinds of asset, because "crypto" covers things as different as a scarce digital commodity (Bitcoin), a platform that earns fees (Ethereum and other smart-contract networks), a claim on a dollar (a stablecoin), the token of an exchange and an internet joke (a memecoin). Each has a different possible source of value and a different way of going to zero. This guide lays out the main types, where their value could come from, their history of drawdowns, and the questions an investor should ask before buying any of them. It is educational, not advice, and crypto assets can lose all of their value.',
  nutshell: [
    '**Bitcoin**: a fixed-supply (21 million), decentralised digital asset with a store-of-value and "digital gold" narrative; **no cash flows**.',
    '**Smart-contract platforms** (Ethereum, Solana and others): networks whose tokens pay for computing and are staked to secure them; value may come from **fees and usage**.',
    '**Stablecoins**: tokens that aim to track a currency (USDT, USDC); value depends on **reserves and redemption**; the 2022 collapse of **TerraUSD** showed the risk of algorithmic designs.',
    '**Memecoins and most small tokens** have no cash flows, little utility and a high chance of losing nearly all value.',
    'Bitcoin has had four drawdowns of **−77% to −93%**; annual volatility has typically been **60–80%**.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The main types and where value could come from',
      lead: 'Five kinds of asset.',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Examples', 'Possible source of value', 'Main risk'],
          rows: [
            ['Digital store of value', 'Bitcoin', 'Scarcity, security, a monetary premium: people hold it as a hedge or savings asset', 'Narrative risk: value depends on continued belief; regulation; no cash flows'],
            ['Smart-contract platforms', 'Ethereum, Solana, Avalanche', 'Fees paid by users for computing and storage; staking yield; use by applications', 'Competition between chains; technical failure; fee decline'],
            ['Stablecoins', 'USDT, USDC, DAI', 'A claim on reserves: a convenient dollar on a blockchain', 'Reserve quality, redemption and regulation; depegging'],
            ['Exchange and application tokens', 'BNB, governance tokens of DeFi protocols', 'Fee discounts, buybacks or governance rights over a protocol', 'Concentrated control; legal status; protocol failure'],
            ['Memecoins and collectibles', 'Dogecoin, NFTs', 'Community and attention only', 'No fundamental floor: prices can collapse by 90% or more'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Why Bitcoin differs', tag: 'a commodity-like asset', body: 'It has no issuer, no earnings and a predictable supply. Its price reflects demand for a scarce digital asset, so it is analysed with scarcity and flow models rather than discounted cash flow.' },
            { title: 'Why platforms differ', tag: 'closer to a business', body: 'A network whose users pay fees has revenue; some of it is burned or paid to stakers. A fee-based valuation, with large uncertainty, is possible.' },
            { title: 'Why stablecoins differ', tag: 'a payment product', body: 'A fiat-backed stablecoin should hold its price; an investor holds it for liquidity and payments, not for appreciation. The analysis is of reserves, audits and redemption rights.' },
            { title: 'What they share', tag: 'high volatility', body: 'All trade 24 hours a day, are lightly regulated by traditional standards and are prone to sharp falls, hacks and fraud.' },
          ],
        },
      ],
    },
    {
      id: 'history',
      title: 'A short history of the drawdowns',
      lead: 'The best and the worst.',
      blocks: [
        {
          t: 'bars',
          title: 'Bitcoin’s large peak-to-trough falls (approximate)',
          items: [{ label: '2011 (to 2011)', value: -93 }, { label: '2013–2015', value: -86 }, { label: '2017–2018', value: -84 }, { label: '2021–2022', value: -77 }],
          unit: '%',
          zero: true,
          min: -100,
          max: 0,
          decimals: 0,
          caption: 'Approximate declines from each cycle’s high to its low in the following year or so; each time the price later exceeded the previous high, but the next fall could have been the last.',
        },
        {
          t: 'levels',
          caption: 'Milestones that matter to an investor.',
          items: [
            { name: '2009–2013', body: 'Bitcoin launched (January 2009); early exchanges; Mt. Gox, once the largest exchange, collapsed in 2014 with about 850,000 bitcoins missing.' },
            { name: '2017', body: 'An initial coin offering (ICO) boom and a run to nearly US$20,000, then an 84% fall in 2018.' },
            { name: '2020–2021', body: 'Institutional and retail inflows; DeFi and NFT booms; a high of about US$69,000 in November 2021.' },
            { name: '2022', body: 'The collapse of Terra (May), Celsius and Three Arrows Capital (June–July) and FTX (November); Bitcoin fell about 77% from its peak.' },
            { name: '2024', body: 'US spot Bitcoin exchange-traded funds were approved in January; Bitcoin made new highs, and the fourth halving took place in April.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Survivorship in the story', text: 'The record of Bitcoin and Ethereum is of survivors. Thousands of tokens launched in earlier booms have fallen to nearly nothing. When people say "crypto has gone up", they usually mean the handful of assets that survived. Many investors who bought near the peaks lost much of their money and sold at the bottom.' },
      ],
    },
    {
      id: 'questions',
      title: 'Questions before buying',
      lead: 'A short checklist.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'What is this asset, and what gives it value that does not depend on someone else paying more for it?',
            'Who controls the supply, the code and the treasury? Is the control concentrated?',
            'What do users pay for, and how much fee revenue is there? Is it growing?',
            'What is the circulating supply compared with the total supply, and when do locked tokens unlock?',
            'Where would I hold it (custody), and what could go wrong: the exchange, the wallet, the smart contract?',
            'How much can I afford to lose entirely, and how large is this position relative to my portfolio?',
            'What is my plan if the price falls by 80%?',
            'Is the seller licensed and regulated in Singapore, and does the product fall under MAS rules?',
          ],
        },
        { t: 'dodont', do: ['Treat crypto as a small, speculative part of a portfolio', 'Learn the basics of custody before investing meaningful sums', 'Read the project’s documentation, token distribution and audits', 'Use licensed platforms and check the MAS Investor Alert List'], dont: ['Invest money you will need within the next five years', 'Borrow to buy crypto', 'Buy a token because of social-media hype or a promise of guaranteed returns', 'Leave large amounts on an exchange you cannot assess'] },
      ],
    },
  ],
  sources: [
    'Nakamoto, S. (2008). *Bitcoin: A Peer-to-Peer Electronic Cash System*.',
    'Narayanan, A., Bonneau, J., Felten, E., Miller, A. & Goldfeder, S. (2016). *Bitcoin and Cryptocurrency Technologies*. Princeton University Press.',
    'Bank for International Settlements (2022, 2023). Annual Economic Report chapters on crypto and decentralised finance (bis.org).',
    'Monetary Authority of Singapore: consumer advisories on digital payment tokens and the Investor Alert List (mas.gov.sg).',
  ],
  related: ['finance/assets/crypto', 'finance/crypto-investing/valuing-crypto-assets', 'finance/crypto-investing/crypto-portfolio-and-risk'],
}

export default guide
