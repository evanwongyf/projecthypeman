import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Costs are the one part of fund returns you can predict. They come in layers: sales charges when you buy, an annual expense ratio deducted from the fund, platform or wrap fees, and trading costs inside the fund. Small annual percentages compound into large sums over decades.',
  nutshell: [
    '**Sales charge** (front-end load), **redemption charge**, **expense ratio / TER** (management fee plus operating costs), **platform fee**, **performance fee**.',
    '**Trailer fees** are paid by the fund manager to distributors out of the management fee; “clean” share classes exclude them.',
    'Share classes differ in currency, **hedged or unhedged**, **accumulating or distributing**, and fee level.',
    'A 1.5-point annual fee difference over 20 years can cost about a quarter of the final value.',
  ],
  sections: [
    {
      id: 'drag',
      title: 'The compounding cost of fees',
      blocks: [
        {
          t: 'math',
          tex: String.raw`V_n = V_0\,(1 + r - c)^n`,
          caption: 'Value after n years with gross return r and total annual cost c.',
          plain: 'Fees are taken every year from the whole balance, so they compound just like returns. Subtract the annual cost from the gross return and compound. Compare two funds by running the formula with each fund’s cost.',
          where: [
            { sym: String.raw`V_0`, def: 'initial investment' },
            { sym: 'r', def: 'gross annual return before costs' },
            { sym: 'c', def: 'total annual cost (expense ratio plus platform fees)' },
            { sym: 'n', def: 'years' },
          ],
          syntax: [
            { sym: String.raw`(1 + r - c)^n`, say: 'the net growth factor compounded n times' },
          ],
          worked: {
            title: '$100,000 for 20 years at 6% gross',
            steps: [
              String.raw`Active fund, \(c = 1.75\%\): \(1.0425^{20} = e^{20 \ln 1.0425} = e^{0.8325} \approx 2.299\), so \$229,900.`,
              String.raw`Index fund, \(c = 0.20\%\): \(1.058^{20} = e^{20 \ln 1.058} = e^{1.1276} \approx 3.088\), so \$308,800.`,
              String.raw`Difference: \$78,900, about 26% of the index-fund outcome.`,
            ],
            why: [
              'compound the net return for the expensive fund',
              'and for the cheap one',
              'the gap is the cost of fees (unless the active fund outperforms by more)',
            ],
            answer: 'Fees of 1.75% a year cost about $79,000 over 20 years on $100,000. The active fund must beat the index by over 1.5 points a year after costs just to break even.',
          },
        },
      ],
    },
    {
      id: 'classes',
      title: 'Share classes',
      blocks: [
        { t: 'table', head: ['Feature', 'Options', 'What to consider'], rows: [
          ['Currency', 'SGD, USD, EUR…', 'Matches your spending currency?'],
          ['Hedging', 'Hedged or unhedged', 'Hedging removes most currency swings but costs roughly the interest-rate gap between currencies'],
          ['Income', 'Accumulating (reinvests) or distributing (pays out)', 'Accumulating suits growth; distributing suits income needs'],
          ['Fee level', 'Retail, clean (no trailer), institutional', 'Choose the cheapest class available to you'],
          ['Domicile', 'Singapore, Luxembourg, Ireland, US', 'Affects withholding tax and estate tax exposure'],
        ] },
        { t: 'callout', tone: 'note', title: 'US estate tax', text: 'Non-US persons holding US-domiciled funds above US$60,000 may face US estate tax. Many Singapore investors use Ireland-domiciled funds for US exposure partly for this reason. Get professional advice for your situation.' },
      ],
    },
  ],
  sources: [
    'Morningstar (2024). Global Investor Experience Study: Fees and Expenses.',
    'Monetary Authority of Singapore. MoneySense: fees and charges of investment products.',
    'Bogle, J. C. (2017). The Little Book of Common Sense Investing. Wiley.',
  ],
  related: ['finance/investing-process/costs-taxes-and-platforms', 'finance/mutual-funds/active-vs-passive', 'finance/indexes/total-return-and-dividends'],
}

export default guide
