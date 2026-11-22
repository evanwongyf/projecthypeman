import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most quoted index levels are price indexes: they ignore dividends. Over long periods dividends make a large share of total returns, so comparing a fund with a price index flatters the fund. Total return indexes reinvest dividends; net return indexes reinvest them after withholding tax.',
  nutshell: [
    '**Price return**: price changes only. **Total return (gross)**: dividends reinvested. **Net total return**: dividends reinvested after withholding tax.',
    'At a 2% dividend yield, total return grows about 2 percentage points a year faster, which compounds to a large gap over decades.',
    'For Singapore-based investors in US stocks, US dividends face **30% withholding tax** (no US–Singapore tax treaty); Irish-domiciled funds typically suffer 15% at the fund level.',
  ],
  sections: [
    {
      id: 'period',
      title: 'One period',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_{\text{price}} = \frac{P_1}{P_0} - 1, \qquad R_{\text{total}} = \frac{P_1 + D}{P_0} - 1, \qquad R_{\text{net}} = \frac{P_1 + D(1 - \tau)}{P_0} - 1`,
          caption: 'Price, total and net return over one period with dividend D and withholding tax rate τ.',
          plain: 'Price return looks only at how the price moved. Total return adds the dividends received. Net return adds the dividends after the tax deducted at source.',
          where: [
            { sym: String.raw`P_0, P_1`, def: 'price at the start and end' },
            { sym: 'D', def: 'dividends paid during the period' },
            { sym: String.raw`\tau`, def: 'withholding tax rate' },
          ],
          syntax: [
            { sym: String.raw`\tau`, say: '“tau”' },
          ],
          worked: {
            title: 'An index at 5,000 rising to 5,250, paying 75 in dividends',
            steps: [
              String.raw`Price: \(5{,}250/5{,}000 - 1 = 5.0\%\).`,
              String.raw`Total: \((5{,}250 + 75)/5{,}000 - 1 = 6.5\%\).`,
              String.raw`Net at 30% withholding: \((5{,}250 + 52.5)/5{,}000 - 1 = 6.05\%\).`,
              String.raw`Net at 15%: \((5{,}250 + 63.75)/5{,}000 - 1 = 6.275\%\).`,
            ],
            why: [
              'price only',
              'add the dividends',
              'only 70% of the dividend is received',
              'a lower rate, as for many Irish-domiciled funds holding US stocks',
            ],
            answer: 'Dividends add 1.5 points; withholding tax at 30% takes 0.45 of that back, at 15% about 0.23.',
          },
        },
      ],
    },
    {
      id: 'long-run',
      title: 'Over decades',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{(1 + g + y)^n}{(1 + g)^n}`,
          caption: 'How much larger the total return index becomes than the price index after n years, with price growth g and dividend yield y.',
          plain: 'Each year, the total return index grows by price growth plus the dividend yield; the price index grows only by price growth. Compounding the difference over many years gives a ratio that can be surprisingly large.',
          where: [
            { sym: 'g', def: 'annual price growth' },
            { sym: 'y', def: 'annual dividend yield' },
            { sym: 'n', def: 'years' },
          ],
          syntax: [
            { sym: String.raw`(\cdot)^n`, say: '“to the power n”: compounded over n years' },
          ],
          worked: {
            title: '30 years, 5% price growth, 2% yield',
            steps: [
              String.raw`Total: \(1.07^{30} = e^{30 \ln 1.07} = e^{2.030} \approx 7.61\).`,
              String.raw`Price: \(1.05^{30} = e^{30 \ln 1.05} = e^{1.464} \approx 4.32\).`,
              String.raw`Ratio: \(7.61/4.32 \approx 1.76\).`,
            ],
            why: [
              'grow at 7% a year',
              'grow at 5% a year',
              'compare',
            ],
            answer: 'After 30 years the total return index is 76% higher than the price index. Always compare funds with total (or net) return benchmarks.',
          },
        },
      ],
    },
  ],
  sources: [
    'Dimson, E., Marsh, P., & Staunton, M. (2002). Triumph of the Optimists. Princeton University Press.',
    'MSCI. Index Calculation Methodology: price, gross and net returns.',
    'IRAS Singapore; US Internal Revenue Service: withholding on dividends to non-resident aliens.',
  ],
  related: ['finance/philosophies/dividends', 'finance/investing-process/costs-taxes-and-platforms', 'finance/mutual-funds/performance-measurement'],
}

export default guide
