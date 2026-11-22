import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'How an index weights its members decides what it measures. A price-weighted index lets expensive shares dominate; a cap-weighted index lets big companies dominate; an equal-weighted index gives each company the same say. This guide works through each method with the same three-stock example, plus the divisor that keeps an index continuous through stock splits and membership changes.',
  nutshell: [
    '**Price-weighted** (Dow, Nikkei 225): index = sum of prices ÷ divisor.',
    '**Market-cap-weighted** (most indexes): weights proportional to price × shares outstanding.',
    '**Free-float adjusted**: counts only shares available to public investors.',
    '**Equal-weighted**: every member gets the same weight; must be rebalanced to stay equal.',
    'The **divisor** is adjusted at corporate events so the index level does not jump.',
  ],
  sections: [
    {
      id: 'price',
      title: 'Price-weighted indexes',
      blocks: [
        {
          t: 'math',
          tex: String.raw`I = \frac{\sum_{i} P_i}{D}, \qquad D_{\text{new}} = \frac{\sum_i P_i^{\text{after}}}{I_{\text{before}}}`,
          caption: 'A price-weighted index and the divisor adjustment after a split.',
          plain: 'Add up the share prices of all members and divide by a number called the divisor. When a company splits its shares (say 2-for-1), its price halves without anything real happening, so the divisor is recalculated to keep the index level unchanged.',
          where: [
            { sym: 'I', def: 'index level' },
            { sym: String.raw`P_i`, def: 'price of stock i' },
            { sym: 'D', def: 'divisor' },
          ],
          syntax: [
            { sym: String.raw`\sum_i P_i`, say: '“the sum of the prices”' },
          ],
          worked: {
            title: 'Three stocks: A $100, B $50, C $30',
            steps: [
              String.raw`Start: sum = 180, \(D = 3\), \(I = 60\).`,
              String.raw`A splits 2-for-1: A = \$50, sum = 130. New divisor \(D = 130/60 = 2.1667\), so \(I\) stays 60.`,
              String.raw`Now A rises 10% (\$50 → \$55): sum 135, \(I = 135/2.1667 = 62.31\) (+3.85%).`,
              String.raw`Instead C rises 10% (\$30 → \$33): sum 133, \(I = 61.38\) (+2.3%).`,
            ],
            why: [
              'the initial divisor is just the number of stocks',
              'adjust the divisor so the split does not move the index',
              'a 10% move in the higher-priced stock',
              'the same 10% move in the cheapest stock moves the index less',
            ],
            answer: 'In a price-weighted index, a stock’s influence depends on its share price, not on the company’s size: an arbitrary feature, which is why most modern indexes use market cap.',
          },
        },
      ],
    },
    {
      id: 'cap',
      title: 'Market-cap and free-float weighting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`I_t = I_0 \times \frac{\sum_i P_{i,t}\,Q_i\,f_i}{\sum_i P_{i,0}\,Q_i\,f_i}, \qquad w_i = \frac{P_i Q_i f_i}{\sum_j P_j Q_j f_j}`,
          caption: 'A free-float market-cap index relative to a base date, and each stock’s weight.',
          plain: 'Market cap is price times shares outstanding. Free-float adjustment multiplies by the fraction of shares that ordinary investors can actually buy (excluding, say, a government or founder stake). The index is the total float-adjusted value now relative to the base date, scaled to a chosen base level such as 1,000. Each stock’s weight is its share of the total.',
          where: [
            { sym: String.raw`Q_i`, def: 'shares outstanding' },
            { sym: String.raw`f_i`, def: 'free-float factor (0 to 1)' },
            { sym: String.raw`I_0`, def: 'base index level' },
            { sym: String.raw`w_i`, def: 'weight of stock i' },
          ],
          syntax: [
            { sym: String.raw`P_{i,t}`, say: '“price of stock i at time t”' },
          ],
          worked: {
            title: 'A: $100 × 10m, B: $50 × 40m, C: $30 × 100m shares',
            steps: [
              String.raw`Caps: A \$1,000m, B \$2,000m, C \$3,000m; total \$6,000m. Weights 16.7%, 33.3%, 50%.`,
              String.raw`Base level 1,000. C rises 10%: C cap \$3,300m, total \$6,300m. \(I = 1{,}000 \times 6{,}300/6{,}000 = 1{,}050\) (+5%).`,
              String.raw`Free float: C has only 40% float (\(f = 0.4\)): float caps 1,000, 2,000, 1,200; weights 23.8%, 47.6%, 28.6%.`,
              String.raw`With free float, C’s 10% rise adds \(0.286 \times 10\% = 2.86\%\).`,
            ],
            why: [
              'price times shares, then shares of the total',
              'total value up 5%, so the index is up 5%',
              'only investable shares count',
              'a stock’s effect equals weight × its return',
            ],
            answer: 'Cap weighting tracks the total value of the market; free-float adjustment stops large locked-up stakes from distorting weights. A split changes neither price × shares nor the index, so no divisor change is needed.',
          },
        },
      ],
    },
    {
      id: 'equal',
      title: 'Equal weighting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R_{\text{EW}} = \frac{1}{n}\sum_{i=1}^{n} R_i`,
          caption: 'The return of an equal-weighted index over one rebalancing period.',
          plain: 'Each of the n stocks gets weight 1/n, so the index return is the simple average of the stocks’ returns. As prices move, weights drift, so the index rebalances (typically quarterly) back to equal, selling winners and buying losers.',
          where: [
            { sym: String.raw`R_i`, def: 'return of stock i over the period' },
            { sym: 'n', def: 'number of stocks' },
          ],
          syntax: [
            { sym: String.raw`\frac{1}{n}\sum`, say: '“the average of”' },
          ],
          worked: {
            title: 'Same three stocks, one quarter',
            steps: [
              'Returns: A +10%, B −5%, C +2%.',
              String.raw`Equal-weighted: \((10 - 5 + 2)/3 = 2.33\%\).`,
              String.raw`Cap-weighted: \(0.167 \times 10 + 0.333 \times (-5) + 0.5 \times 2 = 1.67 - 1.67 + 1.0 = 1.0\%\).`,
            ],
            why: [
              'quarterly returns',
              'simple average',
              'weighted by cap',
            ],
            answer: 'Equal weight gives 2.33%, cap weight 1.0%: they differ because the small stock did best. Over the long run equal-weighted indexes tilt towards smaller companies and cost more to run because of rebalancing turnover.',
          },
        },
      ],
    },
  ],
  sources: [
    'S&P Dow Jones Indices. Index Mathematics Methodology.',
    'MSCI. Index Calculation Methodology.',
    'Nikkei Inc. Nikkei Stock Average Index Guidebook.',
  ],
  related: ['finance/indexes/major-indexes', 'finance/indexes/smart-beta', 'finance/foundations/markets'],
}

export default guide
