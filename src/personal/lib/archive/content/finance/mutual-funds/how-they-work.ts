import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A mutual fund (called a unit trust in Singapore, the UK and elsewhere) pools money from many investors and invests it according to a stated objective, managed by a professional fund manager. Investors own units whose value moves with the fund’s holdings. Funds give small investors diversification and professional management, at a cost.',
  nutshell: [
    '**Open-ended** funds create and cancel units daily at **net asset value (NAV)**; **closed-end** funds have a fixed number of shares that trade on an exchange, often at a premium or discount to NAV.',
    'NAV = (assets − liabilities) ÷ units outstanding, usually calculated once a day after markets close.',
    '**Forward pricing**: orders placed today are filled at the next NAV calculated, so you do not know the exact price when you order.',
    'Assets are held by an independent **custodian or trustee**; in Singapore funds offered to the public are regulated by **MAS** under the Securities and Futures Act and the Code on Collective Investment Schemes.',
  ],
  sections: [
    {
      id: 'nav',
      title: 'Net asset value and buying units',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{NAV} = \frac{A - L}{U}, \qquad \text{Units bought} = \frac{\text{Amount} \times (1 - s)}{\text{NAV}}`,
          caption: 'Net asset value per unit, and units received after a sales charge s.',
          plain: 'Add up everything the fund owns at today’s prices, subtract what it owes (fees accrued, money due), and divide by the number of units. When you invest, any sales charge is taken off first, and the rest buys units at NAV.',
          where: [
            { sym: 'A', def: 'market value of the fund’s assets' },
            { sym: 'L', def: 'liabilities' },
            { sym: 'U', def: 'units outstanding' },
            { sym: 's', def: 'sales charge (front-end load), as a fraction' },
          ],
          syntax: [
            { sym: '(1 − s)', say: 'the share of your money left after the sales charge' },
          ],
          worked: {
            title: 'Investing $10,000',
            steps: [
              String.raw`Fund: assets \$105m, liabilities \$5m, units 40m. \(\text{NAV} = 100/40 = \$2.50\).`,
              String.raw`Sales charge 3%: invested \(10{,}000 \times 0.97 = \$9{,}700\).`,
              String.raw`Units: \(9{,}700/2.50 = 3{,}880\).`,
              String.raw`If NAV rises 10% to \$2.75: value \(= 3{,}880 \times 2.75 = \$10{,}670\), a 6.7% gain on the \$10,000 paid.`,
            ],
            why: [
              'net assets per unit',
              'the charge comes off first',
              'buy units at NAV',
              'the sales charge eats part of the first gains',
            ],
            answer: '3,880 units. The 3% charge means the fund must rise about 3.1% just to break even. Many platforms in Singapore now offer funds with no sales charge.',
          },
        },
      ],
    },
    {
      id: 'structures',
      title: 'Fund structures',
      blocks: [
        { t: 'table', head: ['Structure', 'Trading', 'Price', 'Example'], rows: [
          ['Open-ended mutual fund / unit trust', 'Buy from and sell back to the fund', 'NAV (forward pricing)', 'Most retail funds'],
          ['Exchange-traded fund (ETF)', 'On an exchange during the day', 'Market price, kept close to NAV by arbitrage', 'STI ETF, S&P 500 ETFs'],
          ['Closed-end fund / investment trust', 'On an exchange', 'Market price, can be at a discount or premium', 'UK investment trusts'],
          ['Feeder fund', 'Invests in a master fund', 'NAV', 'Singapore-registered feeder into a Luxembourg fund'],
          ['Money market fund', 'Daily', 'NAV near stable', 'Cash management'],
        ] },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. Code on Collective Investment Schemes.',
    'Investment Company Institute (2024). Investment Company Fact Book.',
  ],
  related: ['finance/assets/funds', 'finance/mutual-funds/costs-and-share-classes', 'finance/mutual-funds/fund-types'],
}

export default guide
