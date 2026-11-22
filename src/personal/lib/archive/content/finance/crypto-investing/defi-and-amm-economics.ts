import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Decentralised finance (DeFi) rebuilds financial services such as trading, lending and borrowing as software that runs on a blockchain, without a bank or an exchange in the middle. Two inventions do most of the work. The automated market maker lets anyone trade against a pool of assets whose price is set by a formula, instead of a book of orders; the lending pool lets depositors earn interest from borrowers who post collateral that is liquidated automatically if its value falls. They are ingenious and they work, but their economics have costs and risks that the advertised yield hides: slippage for traders, impermanent loss for liquidity providers, liquidation for borrowers and, for everyone, the risk of a bug in the code. This guide explains the constant-product market maker with a live lab, the interest-rate model of a lending pool, where yield comes from and the major failures.',
  nutshell: [
    'A **constant-product AMM** keeps \\(x\\cdot y=k\\): price = y/x; large trades move the price along a curve (**slippage**).',
    '**Impermanent loss** for a liquidity provider when the price changes by a factor r: \\(\\dfrac{2\\sqrt r}{1+r}-1\\); at ×2 it is **−5.7%**, at ×5 **−25.5%**.',
    'A **lending pool** sets the borrow rate from the **utilisation** of the pool; borrowers must keep a **health factor** above 1 or their collateral is **liquidated**.',
    '**Yield** comes from trading fees, borrower interest, or **token emissions**: emissions are dilution, not free money.',
    'Risks: **smart-contract bugs**, oracle manipulation, stablecoin depegs, governance attacks and **rug pulls**; billions have been lost to hacks.',
  ],
  sections: [
    {
      id: 'amm',
      title: 'The automated market maker',
      lead: 'A formula instead of an order book.',
      blocks: [
        { t: 'fin-lab', viz: 'amm' },
        {
          t: 'math',
          tex: String.raw`x\,y=k,\qquad \Delta y=y-\frac{k}{x+\Delta x(1-f)},\qquad \text{IL}(r)=\frac{2\sqrt{r}}{1+r}-1`,
          caption: 'The constant-product rule, the output of a trade of size Δx with fee f, and the impermanent loss for a price ratio r.',
          where: [{ sym: 'x,\\ y', def: 'the reserves of the two assets in the pool' }, { sym: 'k', def: 'the constant product' }, { sym: 'f', def: 'the pool fee (for example 0.3%)' }, { sym: 'r', def: 'the ratio of the new price to the old price' }],
          syntax: [{ sym: 'k/(x+\\Delta x(1-f))', say: 'the new dollar reserve after the trade. Effect: the bigger the trade relative to the pool, the less you receive per unit. Why: each unit you sell pushes the price down along the curve.' }, { sym: '2\\sqrt r/(1+r)-1', say: 'the shortfall of the pool against holding. Effect: it is always negative and symmetric in r and 1/r. Why: arbitrageurs rebalance the pool to the new price by buying the asset that rose.' }],
          worked: {
            title: 'A pool with 1,000 ETH at US$3,000',
            steps: ['y = 3,000,000; k = 3 billion. Sell 50 ETH with a 0.3% fee: 49.85 effective ETH; new x = 1,049.85; new y = 3,000,000,000/1,049.85 = 2,857,552; out = US$142,448.', 'Average price = 142,448/50 = US$2,849: slippage of 5.0% against US$3,000 for a trade of 5% of the pool.', 'If ETH doubles (r = 2), IL = 2√2/3 − 1 = −5.7%; at r = 5, −25.5%.'],
            answer: 'Liquidity providers must earn enough in fees to offset impermanent loss: for a ×2 price move, fees of 5.7% of the pool value. Pools in assets that move together (two stablecoins) have small impermanent loss; pools in volatile pairs depend on volume and fees to compensate.',
          },
        },
      ],
    },
    {
      id: 'lending',
      title: 'Lending pools and liquidation',
      lead: 'Utilisation sets the price of money.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_b(U)=\begin{cases}R_0+\dfrac{U}{U^*}\,s_1 & U\le U^*\\[4pt] R_0+s_1+\dfrac{U-U^*}{1-U^*}\,s_2 & U>U^*\end{cases},\qquad HF=\frac{C\times LT}{D}`,
          caption: 'A kinked interest-rate model (borrow rate rises with utilisation U) and the health factor HF of a borrower with collateral C, liquidation threshold LT and debt D.',
          where: [{ sym: 'U', def: 'utilisation: the share of the pool that is lent out' }, { sym: 'U^{*}', def: 'the optimal utilisation where the slope steepens (for example 80%)' }, { sym: 'C,\\ LT,\\ D', def: 'collateral value, the liquidation threshold (for example 80%) and the debt' }],
          syntax: [{ sym: 'HF<1', say: 'the position can be liquidated. Effect: a fall in collateral value or a rise in debt pushes HF down. Why: the lender is protected by selling the collateral before it falls below the debt.' }],
          worked: {
            title: 'Borrowing US$6,000 against US$10,000 of ETH',
            steps: ['Liquidation threshold 80%: HF = 10,000 × 0.8/6,000 = 1.33.', 'HF reaches 1 when the collateral is worth 6,000/0.8 = US$7,500: a fall of 25%.', 'A liquidator repays part of the debt and takes the collateral at a discount (a penalty of about 5–10%), so the borrower loses more than the fall in price.'],
            answer: 'A borrower in a fast fall may be liquidated before they can act: markets move at all hours and gas fees spike. Borrow far below the limit (HF above 2) if you use such protocols at all.',
          },
        },
        {
          t: 'table',
          head: ['Source of "yield"', 'Where the money comes from', 'Sustainable?'],
          rows: [
            ['Trading fees', 'Traders in the pool', 'Yes, if volume is high; must cover impermanent loss'],
            ['Borrower interest', 'Borrowers paying for leverage', 'Yes, but falls when demand for borrowing falls'],
            ['Token emissions (liquidity mining)', 'New tokens issued by the protocol', 'No: it is dilution; yields collapse when emissions stop'],
            ['Staking rewards', 'New issuance and fees', 'Partly: see the tokenomics guide'],
            ['Leveraged loops and rehypothecation', 'Recursive borrowing', 'Fragile: losses cascade in a downturn'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A rule of thumb on high yields', text: 'If a pool pays 40% a year in a token, ask who is paying: if the answer is "new tokens printed by the protocol" the yield is not income but a transfer that lasts as long as the token price holds. Several 2021–22 yield schemes (including Terra’s Anchor protocol at about 20% on stablecoins) collapsed when the source of yield was exhausted.' },
      ],
    },
    {
      id: 'risks',
      title: 'Failures and risks',
      lead: 'What went wrong.',
      blocks: [
        {
          t: 'table',
          head: ['Event', 'What happened', 'Lesson'],
          rows: [
            ['The DAO (2016)', 'A flaw in a smart contract allowed about US$60 million of ether to be drained; Ethereum forked to reverse it', 'Code is law only until it is not; bugs can be fatal'],
            ['Ronin bridge (2022)', 'Attackers took about US$600 million by compromising validator keys', 'Cross-chain bridges concentrate risk'],
            ['Wormhole (2022)', 'A bridge exploit of about US$320 million, covered by the sponsor', 'A backstop by a rich sponsor is not guaranteed'],
            ['Terra / UST (May 2022)', 'An algorithmic stablecoin lost its peg and its sister token collapsed, erasing tens of billions', 'Reflexive designs can have death spirals'],
            ['Oracle manipulation (various)', 'Attackers distorted a price feed and drained lending pools', 'Price oracles are a critical dependency'],
            ['Rug pulls', 'Developers withdraw liquidity or mint tokens and disappear', 'Check ownership of contracts and liquidity locks'],
          ],
          caption: 'Amounts are approximate, as widely reported.',
        },
        { t: 'dodont', do: ['Use protocols with long records, public audits and bug bounties', 'Keep health factors high and watch collateral prices', 'Understand impermanent loss before providing liquidity', 'Diversify across protocols and cap the amount in any one contract'], dont: ['Chase the highest advertised yield', 'Approve unlimited token spending to unknown contracts', 'Assume an audit means a contract is safe', 'Use leverage you cannot monitor around the clock'] },
      ],
    },
  ],
  sources: [
    'Adams, H., Zinsmeister, N., Salem, M., Keefer, R. & Robinson, D. (2021). *Uniswap v3 Core*. Uniswap Labs.',
    'Angeris, G., Kao, H.-T., Chiang, R., Noyes, C. & Chitra, T. (2019). An analysis of Uniswap markets. *Cryptoeconomic Systems*.',
    'Schär, F. (2021). Decentralized finance: on blockchain- and smart contract-based financial markets. *Federal Reserve Bank of St. Louis Review*, 103(2), 153–174.',
    'Bank for International Settlements (2022). *The future monetary system* and annual report chapters on DeFi (bis.org).',
  ],
  related: ['finance/crypto-investing/tokenomics-and-supply', 'finance/crypto-investing/custody-security-and-regulation', 'banking/theory/money-creation'],
}

export default guide
