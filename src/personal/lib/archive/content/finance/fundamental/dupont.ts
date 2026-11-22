import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two companies can both earn a 24% return on equity for completely different reasons: one through fat margins, another through heavy debt. DuPont analysis splits ROE into its parts so you can see which. It was developed at the DuPont chemical company in the 1920s.',
  nutshell: [
    '**ROE = net margin × asset turnover × equity multiplier.**',
    'High ROE from margins and turnover is healthier than high ROE from leverage.',
    'The five-step version also separates the effects of tax and interest.',
  ],
  sections: [
    {
      id: 'three',
      title: 'The three-step DuPont identity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`ROE = \frac{NI}{E} = \underbrace{\frac{NI}{\text{Sales}}}_{\text{net margin}} \times \underbrace{\frac{\text{Sales}}{A}}_{\text{asset turnover}} \times \underbrace{\frac{A}{E}}_{\text{equity multiplier}}`,
          syntax: [
            { sym: String.raw`\underbrace{\ldots}_{\text{label}}`, say: 'The curly brace under an expression is only a caption: it labels what that fraction measures. It asks you to do nothing.' },
            { sym: String.raw`\frac{NI}{\text{Sales}}\times\frac{\text{Sales}}{A}`, say: 'Read "NI over Sales, times Sales over A". Sales appears once above and once below the line, so it cancels and leaves NI over A.' },
            { sym: String.raw`\times`, say: 'Read "times". The three ratios are multiplied together; the order does not matter.' },
          ],
          worked: {
            title: 'A discount supermarket',
            steps: [
              String.raw`Given: net income = $60m, sales = $3,000m, total assets = $1,000m, equity = $250m.`,
              String.raw`Net margin: \(60/3000 = 0.02 = 2\%\).`,
              String.raw`Asset turnover: \(3000/1000 = 3.0\).`,
              String.raw`Equity multiplier: \(1000/250 = 4.0\).`,
              String.raw`Multiply: \(0.02 \times 3.0 \times 4.0 = 0.24\).`,
              String.raw`Check directly: \(60/250 = 0.24\). The product equals ROE exactly.`,
            ],
            answer: String.raw`\(ROE = 24\%\), earned on a wafer-thin 2% margin by turning assets over three times a year and funding them with four times as much assets as equity.`,
          },
          where: [
            { sym: 'NI', def: 'Net income' },
            { sym: 'E', def: 'Shareholders’ equity' },
            { sym: 'A', def: 'Total assets' },
          ],
          caption: 'Sales and assets cancel out, so the product is exactly ROE. It is an identity, not an approximation, which is the whole point: it does not just tell you ROE is 24%, it tells you *why*.',
        },
        {
          t: 'math',
          tex: String.raw`ROE_{\text{Kopi}} = \frac{72}{500}\times\frac{500}{500}\times\frac{500}{300} = 0.144 \times 1.0 \times 1.667 = 0.24`,
          syntax: [
            { sym: String.raw`\frac{72}{500}\times\frac{500}{500}\times\frac{500}{300}`, say: 'Read as a chain of three fractions multiplied together: "72 over 500, times 500 over 500, times 500 over 300". Cross out the 500s that appear above and below and you are left with 72 over 300.' },
            { sym: String.raw`0.144 \times 1.0 \times 1.667`, say: 'The decimal version of the same three fractions. Each factor is one lever: margin, speed of asset use, and leverage.' },
          ],
          worked: {
            title: 'What if Kopi borrowed less?',
            steps: [
              String.raw`Start with the real figures: net margin 14.4%, asset turnover 1.0, equity multiplier \(500/300 = 1.667\), so ROE = 24%.`,
              String.raw`Suppose Kopi funded itself with $400m of equity instead of $300m, with the same $500m of assets and the same profit.`,
              String.raw`New equity multiplier: \(500/400 = 1.25\). Margin and turnover are unchanged.`,
              String.raw`New ROE: \(0.144 \times 1.0 \times 1.25 = 0.18\).`,
              String.raw`Check: \(72/400 = 0.18\).`,
            ],
            answer: 'ROE falls from 24% to 18% with no change in how well the shops perform: six of the 24 points came purely from borrowing.',
          },
        },
        {
          t: 'metric',
          name: 'return on equity (ROE)',
          shows: 'How many cents of profit a company generates each year for every dollar shareholders have invested in it. It is the single number most often used to judge how well management is using shareholders’ money, but as the table below shows, the same ROE can come from a great business or a fragile, over-borrowed one, which is exactly why DuPont breaks it into pieces.',
          eli5: 'If you put $100 into a small business and it hands you $24 of profit for the year, that business has a 24% ROE on your money. On its own, that sounds great, but you would want to know whether it earned that by selling a great product at a fat margin, or by borrowing heavily and hoping nothing goes wrong.',
          higher: 'More profit generated per dollar of shareholder capital, flattering at a glance, but check the breakdown first. High ROE driven by margin and turnover (a genuinely efficient, profitable business) is healthy; high ROE driven mainly by the equity multiplier (heavy borrowing) is riskier than it looks, since leverage magnifies losses as readily as it magnifies gains.',
          lower: 'Less profit generated per dollar of shareholder capital, could mean thin margins, slow asset turnover, or simply a conservatively financed business choosing not to lever up. A low ROE is not automatically bad if it comes with low risk and steady, reliable returns.',
          typical: 'Across US non-financial companies, ROE has long averaged roughly 10–15%; above about 20% is generally considered strong, above 30% excellent (and worth checking for heavy leverage); below about 5–10% is weak unless the industry is simply low-margin or asset-light by nature.',
        },
        {
          t: 'table',
          head: ['', 'Kopi & Co (coffee)', 'Discount supermarket', 'Leveraged bank'],
          rows: [
            ['Net margin', '14.4%', '2%', '25%'],
            ['Asset turnover', '1.0', '3.0', '0.08'],
            ['Equity multiplier', '1.67', '4.0', '12'],
            ['**ROE**', '**24%**', '**24%**', '**24%**'],
          ],
          caption: 'Three routes to the same ROE: margins, speed, or borrowing. The bank’s ROE depends on debt and would collapse with modest losses.',
        },
        {
          t: 'metric',
          name: 'the equity multiplier (assets ÷ equity)',
          shows: 'How many dollars of assets a company controls for every dollar shareholders actually put in, in other words, how much leverage is doing the work. An equity multiplier of 1 means the company is 100% equity-financed (no debt); above 1, some of its assets are financed by debt instead.',
          eli5: 'If you buy a $500,000 house with $100,000 of your own cash and a $400,000 mortgage, you control $500,000 of assets with only $100,000 of your own money, an equity multiplier of 5. The bank\'s money is doing most of the "work" of owning the house, which magnifies your gains if the house rises in value, and your losses if it falls.',
          higher: 'The business is using more borrowed money to fund its assets relative to shareholder capital, this mechanically boosts ROE (as the table shows, all three columns reach the same 24% ROE through very different equity multipliers) without necessarily reflecting a better underlying business. A bank\'s equity multiplier of 12, for example, means a loss of just a few percent on its assets could wipe out its entire equity.',
          lower: 'The business relies less on debt to fund its assets, ROE here reflects genuine operating performance (margins and efficiency) rather than financial engineering, and the business is more resilient to a downturn since there is more equity cushion absorbing any losses before creditors are at risk.',
          typical: 'Equity multipliers of 1.5–2.5 are common for ordinary non-financial companies; banks and other financial institutions, which borrow (via deposits) to lend, typically run multipliers of 8–15 or higher as a normal part of their business model, which is exactly why banking crises can be so severe.',
        },
      ],
    },
    {
      id: 'five',
      title: 'The five-step version',
      blocks: [
        {
          t: 'math',
          tex: String.raw`ROE = \underbrace{\frac{NI}{EBT}}_{\text{tax burden}} \times \underbrace{\frac{EBT}{EBIT}}_{\text{interest burden}} \times \underbrace{\frac{EBIT}{\text{Sales}}}_{\text{operating margin}} \times \underbrace{\frac{\text{Sales}}{A}}_{\text{turnover}} \times \underbrace{\frac{A}{E}}_{\text{leverage}}`,
          syntax: [
            { sym: String.raw`EBT`, say: 'Read "E-B-T", earnings before tax: the profit left after interest but before the tax bill. NI over EBT is therefore the share of pre-tax profit you keep.' },
            { sym: String.raw`\frac{NI}{EBT}\times\frac{EBT}{EBIT}\times\frac{EBIT}{\text{Sales}}`, say: 'Read as a ladder: each denominator is cancelled by the next numerator (EBT, then EBIT, then Sales), so the first three factors multiply out to NI over Sales.' },
            { sym: String.raw`\times`, say: 'Five fractions are multiplied. Burdens below 1 (tax, interest) reduce ROE; the other three drive it up.' },
          ],
          worked: {
            title: 'A mid-sized manufacturer',
            steps: [
              String.raw`Given: sales $800m, EBIT $96m, interest $16m, tax rate 25%, total assets $600m, equity $300m.`,
              String.raw`EBT \(= 96 - 16 = 80\); tax \(= 25\% \times 80 = 20\); net income \(= 60\).`,
              String.raw`Tax burden: \(60/80 = 0.75\). Interest burden: \(80/96 = 0.833\).`,
              String.raw`Operating margin: \(96/800 = 0.12\). Asset turnover: \(800/600 = 1.333\). Leverage: \(600/300 = 2.0\).`,
              String.raw`Multiply: \(0.75 \times 0.833 = 0.625\); \(\times 0.12 = 0.075\); \(\times 1.333 = 0.10\); \(\times 2.0 = 0.20\).`,
              String.raw`Check: \(60/300 = 0.20\).`,
            ],
            answer: String.raw`\(ROE = 20\%\). A 12% operating margin shrinks to 7.5% net after interest and tax, is lifted to a 10% return on assets by turnover, and doubled by leverage.`,
          },
          where: [
            { sym: 'NI', def: 'Net income' },
            { sym: 'EBT', def: 'Earnings before tax' },
            { sym: 'EBIT', def: 'Earnings before interest and tax' },
            { sym: 'A', def: 'Total assets' },
            { sym: 'E', def: 'Shareholders’ equity' },
          ],
          caption: 'Splits the three-step identity’s "net margin" further into tax burden, interest burden and operating margin, so a fall in ROE can be traced to a specific cause: a bigger tax bill, more interest expense, or weaker operations, rather than one blended number hiding all three.',
        },
        {
          t: 'math',
          tex: String.raw`ROE_{\text{Kopi}} = \frac{72}{90}\times\frac{90}{100}\times\frac{100}{500}\times\frac{500}{500}\times\frac{500}{300} = 0.8 \times 0.9 \times 0.2 \times 1.0 \times 1.667 = 0.24`,
          syntax: [
            { sym: String.raw`\frac{72}{90}\times\frac{90}{100}\times\frac{100}{500}\times\frac{500}{500}\times\frac{500}{300}`, say: String.raw`Five fractions in a ladder: 90, 100 and 500 each appear once above and once below, so they cancel and only \(72/300\) is left.` },
            { sym: String.raw`0.8 \times 0.9 \times 0.2 \times 1.0 \times 1.667`, say: 'The decimal form of each rung. Changing any one factor changes ROE proportionally.' },
          ],
          worked: {
            title: String.raw`What if Kopi's tax rate rose to 30%?`,
            steps: [
              String.raw`Start: EBIT = 100, interest = 10, so EBT = 90. At 20% tax, net income = 72 and tax burden = \(72/90 = 0.8\).`,
              String.raw`At 30% tax: net income \(= 90 \times 0.7 = 63\), so tax burden \(= 63/90 = 0.7\).`,
              String.raw`Every other factor is unchanged: \(0.9 \times 0.2 \times 1.0 \times 1.667\).`,
              String.raw`New ROE: \(0.7 \times 0.9 \times 0.2 \times 1.0 \times 1.667 = 0.21\).`,
              String.raw`Check: \(63/300 = 0.21\).`,
            ],
            answer: 'ROE drops from 24% to 21%: because only the tax-burden rung moved, the five-step form pins the whole three-point fall on tax.',
          },
          caption: 'Kopi keeps 80% of pre-tax profit after tax and 90% of operating profit after interest.',
        },
        {
          t: 'plot',
          title: 'How leverage changes ROE when returns on assets vary',
          x: [-0.05, 0.15],
          y: [-0.3, 0.6],
          xLabel: 'Return on assets (after tax)',
          yLabel: 'Return on equity',
          curves: [
            { f: (roa: number) => roa, label: 'No debt (A/E = 1)' },
            { f: (roa: number) => roa * 1.67, label: 'A/E = 1.67 (Kopi)' },
            { f: (roa: number) => roa * 4, label: 'A/E = 4' },
          ],
          caption: 'A simplification ignoring interest costs: leverage multiplies both good and bad years.',
        },
      ],
    },
  ],
  sources: ['Soliman, M. T. (2008). The use of DuPont analysis by market participants. *The Accounting Review*, 83(3), 823–853.', 'Penman, S. H. (2013). *Financial Statement Analysis and Security Valuation* (5th ed.). McGraw-Hill.'],
  related: ['finance/fundamental/ratios', 'finance/fundamental/quality'],
}

export default guide
