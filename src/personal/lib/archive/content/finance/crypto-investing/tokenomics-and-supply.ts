import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Tokenomics is the study of how a token’s supply is created, distributed and removed, and it is the closest thing crypto has to a balance sheet. A coin with a fixed supply and a falling issuance rate (Bitcoin) behaves differently from one that pays staking rewards and burns part of its fees (Ethereum) and from a newly launched token with 10% of its supply in circulation and the rest locked for the team and early investors. Three things matter to an investor: the schedule of new supply, the share of supply that is circulating against the share that is locked, and who holds the rest. This guide explains Bitcoin’s halvings with a lab, the arithmetic of staking and dilution, the difference between market capitalisation and fully diluted valuation, and how token unlocks create selling pressure, with a second lab.',
  nutshell: [
    'Bitcoin’s reward halves every **210,000 blocks** (about four years): **50 → 25 → 12.5 → 6.25 → 3.125** (April 2024); the supply approaches **21 million**.',
    '**Supply inflation** equals new coins per year ÷ existing supply: about **0.8–0.9%** after the 2024 halving, falling toward zero.',
    '**Staking**: rewards are newly issued tokens; a **nominal yield** of 5.8% with 3.5% total issuance and 60% staked is only **2.3% above dilution** for stakers, and **non-stakers lose 3.5%** to dilution.',
    '**Market cap** = price × circulating supply; **FDV** = price × total supply: a token with a 10% float has an FDV **ten times** its market cap.',
    '**Unlocks**: when locked tokens vest (after a cliff), new supply reaches the market; investors with large gains may sell.',
  ],
  sections: [
    {
      id: 'issuance',
      title: 'Issuance schedules and halvings',
      lead: 'How new supply is created.',
      blocks: [
        { t: 'fin-lab', viz: 'supply' },
        {
          t: 'math',
          tex: String.raw`S_n=210{,}000\times50\times\Big(2-\frac{1}{2^{\,n-1}}\Big)\ \text{(after }n\text{ eras)},\qquad \pi=\frac{\text{reward}\times 52{,}560}{S}`,
          caption: 'Bitcoin’s cumulative supply after n halving eras, approaching 21 million, and the annual supply inflation π.',
          where: [{ sym: 'n', def: 'the number of completed four-year eras' }, { sym: '52{,}560', def: 'blocks per year (one every ten minutes)' }, { sym: 'S', def: 'the current supply of coins' }],
          syntax: [{ sym: '2-1/2^{n-1}', say: 'the geometric series 1 + 1/2 + 1/4 + …. Effect: the sum approaches 2 × 10.5 million = 21 million. Why: each era issues half as much as the one before.' }],
          worked: {
            title: 'Inflation after the 2024 halving',
            steps: ['Reward 3.125 coins × 52,560 blocks = 164,250 new coins a year.', 'Supply about 19.7 million: π = 164,250/19,700,000 = 0.83%.', 'After the next halving (around 2028) the reward is 1.5625: π ≈ 0.4%.'],
            answer: 'Bitcoin’s supply inflation is now below the long-run inflation target of most central banks, and falling. This is the basis of the scarcity argument; it does not say anything about demand.',
          },
        },
      ],
    },
    {
      id: 'staking',
      title: 'Staking, burns and dilution',
      lead: 'Who pays for the yield?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`y_{\text{staker}}=\frac{\iota}{\phi},\qquad y_{\text{real, staker}}=\frac{\iota}{\phi}-\iota,\qquad y_{\text{non-staker}}=-\iota`,
          caption: 'With total issuance ι and a share φ of the supply staked, stakers earn ι/φ; compared with dilution, their real yield is ι/φ − ι; holders who do not stake lose ι of their share.',
          where: [{ sym: '\\iota', def: 'new tokens issued per year as a share of supply' }, { sym: '\\phi', def: 'the share of supply that is staked' }],
          syntax: [{ sym: '\\iota/\\phi', say: 'the staking yield. Effect: the fewer tokens staked, the higher the yield for those who do. Why: a fixed reward is shared among fewer participants.' }],
          worked: {
            title: 'Issuance 3.5%, 60% staked',
            steps: ['Staker nominal yield = 3.5%/0.6 = 5.8%.', 'Real yield after dilution = 5.8% − 3.5% = 2.3%.', 'A holder who does not stake sees their share of the network fall by 3.5% a year.'],
            answer: 'A staking yield looks like interest but is partly a transfer from non-stakers. If the network also burns some fees (as Ethereum does under EIP-1559), net issuance can be lower or even negative in busy periods; check the net rate, not the headline yield.',
          },
        },
        {
          t: 'table',
          head: ['Design', 'Example', 'Effect on supply', 'What to watch'],
          rows: [
            ['Fixed cap with halvings', 'Bitcoin', 'Predictable, falling issuance; capped at 21 million', 'Security budget as the reward falls and fees must replace it'],
            ['Proof-of-stake issuance', 'Ethereum (since the 2022 Merge)', 'Modest issuance to stakers; partly offset by fee burning', 'Net issuance; the share staked'],
            ['Burn mechanisms', 'Fee burns, token buybacks', 'Reduce supply as usage grows', 'Whether burning is large enough to matter'],
            ['Uncapped inflation', 'Many smaller networks', 'Continuous dilution of holders', 'Yield that is only a return of your own tokens'],
            ['Elastic or algorithmic', 'Rebase tokens, algorithmic stablecoins', 'Supply changes with the price', 'Death spirals (Terra, 2022)'],
          ],
        },
      ],
    },
    {
      id: 'unlock',
      title: 'Market cap, FDV and unlocks',
      lead: 'The part of the supply you cannot see.',
      blocks: [
        { t: 'fin-lab', viz: 'vesting' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Low-float, high-FDV launches', tag: 'a pattern', body: 'A token that launches with a small float can rise on thin supply; as unlocks arrive, the supply grows and the price often declines unless demand grows as fast.' },
            { title: 'Who holds the locked tokens', tag: 'distribution', body: 'Teams, early investors and foundations typically hold 30% to 60%; investors who bought at much lower prices have strong incentives to sell on unlocks.' },
            { title: 'Cliffs and linear vesting', tag: 'schedule', body: 'A cliff (for example 12 months) means nothing unlocks until then, after which tokens vest linearly (for example over 36 months): the largest step is the first unlock.' },
            { title: 'Check the schedule', tag: 'tools', body: 'Token-unlock trackers and the project’s documentation list the schedule; compare the monthly unlock with the daily trading volume to gauge the pressure.' },
          ],
        },
        { t: 'dodont', do: ['Compare FDV with market cap and with comparable assets', 'Read the allocation table: team, investors, treasury, community', 'Plan around major unlock dates'], dont: ['Value a token on circulating market cap alone', 'Assume locked tokens will never be sold', 'Confuse staking yield with income from a business'] },
      ],
    },
  ],
  sources: [
    'Nakamoto, S. (2008). *Bitcoin: A Peer-to-Peer Electronic Cash System*.',
    'Ethereum Foundation: EIP-1559 and the Merge (ethereum.org).',
    'Catalini, C. & Gans, J. S. (2020). Some simple economics of the blockchain. *Communications of the ACM*, 63(7), 80–90.',
    'Token-unlock data providers and project documentation (various).',
  ],
  related: ['finance/crypto-investing/valuing-crypto-assets', 'finance/crypto-investing/defi-and-amm-economics', 'finance/crypto-investing/crypto-portfolio-and-risk'],
}

export default guide
