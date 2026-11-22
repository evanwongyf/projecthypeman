import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cheap is not enough: a business also needs to be good, and to stay good. This guide covers competitive advantages ("moats"), signs of strong and weak management, and two famous scoring systems: the **Piotroski F-score** for improving financial health and the **Altman Z-score** for bankruptcy risk.',
  nutshell: [
    'A **moat** protects profits from competition: brands, switching costs, network effects, cost advantages, efficient scale.',
    '**Porter’s five forces** explain how much profit an industry can keep.',
    'The **Piotroski F-score** (0–9) adds one point for each sign of improving profitability, leverage and efficiency.',
    'The **Altman Z-score** combines five ratios to estimate the risk of bankruptcy.',
    'Red flags: profits rising while cash flow falls, frequent "one-off" charges, aggressive revenue recognition.',
  ],
  sections: [
    {
      id: 'moats',
      title: 'Economic moats',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Intangible assets', body: 'Brands, patents and licences that let a company charge more: luxury brands, drug patents.' },
            { title: 'Switching costs', body: 'Customers find it painful to leave: business software, bank accounts.' },
            { title: 'Network effects', body: 'The product gets better as more people use it: marketplaces, payment networks, social apps.' },
            { title: 'Cost advantage', body: 'Producing more cheaply than anyone else: scale, location, unique processes.' },
            { title: 'Efficient scale', body: 'A market only big enough for one or two firms: airports, pipelines.' },
          ],
        },
        {
          t: 'plot',
          title: 'Returns on capital with and without a moat',
          x: [0, 15],
          y: [0, 0.35],
          xLabel: 'Years',
          yLabel: 'Return on invested capital',
          curves: [
            { f: (t: number) => 0.09 + 0.2 * Math.exp(-t / 3), label: 'No moat: competition erodes returns' },
            { f: (t: number) => 0.24 + 0.05 * Math.exp(-t / 4), label: 'Wide moat: returns stay high' },
          ],
          hlines: [{ y: 0.09, label: 'Cost of capital ≈ 9%' }],
          caption: 'In competitive markets, high returns attract rivals and fade towards the cost of capital. A moat slows or stops that fade.',
        },
        { t: 'callout', tone: 'fact', title: 'The castle and the moat', text: 'Warren Buffett described the ideal business as "an economic castle protected by an unbreachable moat". Morningstar later built a moat rating for thousands of companies based on the five sources above.' },
      ],
    },
    {
      id: 'porter',
      title: 'Porter’s five forces',
      blocks: [
        {
          t: 'list',
          items: [
            '**Rivalry** among existing competitors',
            '**Threat of new entrants** (how high are the barriers?)',
            '**Bargaining power of suppliers**',
            '**Bargaining power of buyers**',
            '**Threat of substitutes**',
          ],
        },
        { t: 'p', text: 'The stronger these forces, the less profit the industry keeps. Airlines face all five; that is part of why, over their history, airlines as a group have struggled to earn their cost of capital.' },
      ],
    },
    {
      id: 'piotroski',
      title: 'The Piotroski F-score',
      blocks: [
        {
          t: 'math',
          tex: String.raw`F = \sum_{i=1}^{9} F_i,\qquad F_i \in \{0, 1\}`,
          syntax: [
            { sym: String.raw`\sum_{i=1}^{9} F_i`, say: 'Read "the sum from i equals 1 to 9 of F sub i": go through tests F-one, F-two ... F-nine and add up their scores.' },
            { sym: String.raw`F_i \in \{0, 1\}`, say: String.raw`Read "F sub i is in the set zero, one". The symbol \(\in\) means "is a member of", and the curly braces list the allowed values: every test scores either 0 or 1, nothing in between.` },
          ],
          worked: {
            title: 'Scoring a cheap industrial company',
            steps: [
              'Run the nine tests in the table below: ROA positive (1), operating cash flow positive (1), ROA improved (1), cash flow above net income (0), long-term debt to assets fell (1), current ratio improved (1), no new shares (1), gross margin improved (0), asset turnover improved (1).',
              String.raw`List the scores: \(F_1 \ldots F_9 = 1, 1, 1, 0, 1, 1, 1, 0, 1\).`,
              String.raw`Add: \(F = 1+1+1+0+1+1+1+0+1 = 7\).`,
            ],
            answer: String.raw`\(F = 7\) out of 9: a sound, improving company, just short of the 8-9 band that Piotroski found worked best.`,
          },
          where: [
            { sym: 'F_i', def: 'One of nine yes/no tests, scoring 1 if the company passes, 0 if not' },
            { sym: 'F', def: 'The total score, 0 to 9' },
          ],
          caption: 'Nine simple yes/no tests. Joseph Piotroski (2000) found that among cheap (high book-to-market) stocks, those scoring 8–9 beat those scoring 0–1 by a wide margin in his sample.',
        },
        {
          t: 'table',
          head: ['Area', 'Score 1 point if…'],
          rows: [
            ['Profitability', 'Return on assets is positive'],
            ['', 'Operating cash flow is positive'],
            ['', 'Return on assets improved on last year'],
            ['', 'Operating cash flow is greater than net income (good earnings quality)'],
            ['Leverage and liquidity', 'Long-term debt to assets fell'],
            ['', 'Current ratio improved'],
            ['', 'No new shares were issued'],
            ['Efficiency', 'Gross margin improved'],
            ['', 'Asset turnover improved'],
          ],
        },
        {
          t: 'metric',
          name: 'the Piotroski F-score',
          shows: 'A 0–9 checklist score measuring whether a company\'s financial health is *improving* year over year, not just whether it is good in an absolute sense. It was designed specifically to sort cheap, unloved "value" stocks into those quietly getting stronger (worth a closer look) and those getting weaker for a reason (likely value traps).',
          eli5: 'Imagine grading a student not on their current grade, but on nine separate signs that they are improving: did their test scores go up? Are they studying more efficiently? Did they take on less "debt" in the form of missed homework? Nine yes/no questions, nine possible points, more yeses means the trend is more clearly positive.',
          higher: 'More signs of improving profitability, strengthening balance sheet and rising efficiency, all compared with the prior year. Piotroski found that among statistically cheap stocks, those scoring 8 or 9 significantly outperformed those scoring 0 or 1 over the following years, the score helped separate "cheap and improving" from "cheap and getting worse".',
          lower: 'Fewer signs of improvement, or active deterioration, profitability sliding, leverage rising, efficiency slipping. A cheap stock (low P/B) with a low F-score is a classic "value trap" warning: it may be cheap precisely because its fundamentals are getting worse, not because the market is simply wrong.',
          typical: 'Scores of 8–9 are considered strong, 0–1 weak; the score is most meaningful as a *screen within a universe of already-cheap stocks* (Piotroski\'s original test), rather than as a general-purpose quality score applied to any company regardless of valuation.',
        },
      ],
    },
    {
      id: 'altman',
      title: 'The Altman Z-score',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Z = 1.2A + 1.4B + 3.3C + 0.6D + 1.0E`,
          syntax: [
            { sym: String.raw`1.2A`, say: 'No symbol between a number and a letter means multiply: "1.2 times A". Each ratio is multiplied by its fitted weight, then all five are added.' },
            { sym: String.raw`A, B, C, D, E`, say: 'These are five ratios that you compute first, each from the statements as defined in the legend. The letters are labels, not units.' },
          ],
          worked: {
            title: 'A struggling retailer',
            steps: [
              String.raw`Given: A \(= 0.02\), B \(= 0.05\), C \(= 0.03\), D \(= 0.40\), E \(= 0.90\).`,
              String.raw`Multiply each by its weight: \(1.2 \times 0.02 = 0.024\); \(1.4 \times 0.05 = 0.070\); \(3.3 \times 0.03 = 0.099\); \(0.6 \times 0.40 = 0.240\); \(1.0 \times 0.90 = 0.900\).`,
              String.raw`Add: \(0.024 + 0.070 + 0.099 + 0.240 + 0.900 = 1.333\).`,
              'Compare with the zones: below 1.81 is distress; 1.81 to 2.99 is grey; above 2.99 is safe.',
            ],
            answer: String.raw`\(Z = 1.33\), in the distress zone: thin profits and almost no retained earnings outweigh its respectable sales-to-assets ratio.`,
          },
          where: [
            { sym: 'A', def: 'Working capital ÷ total assets (liquidity)' },
            { sym: 'B', def: 'Retained earnings ÷ total assets (accumulated profitability)' },
            { sym: 'C', def: 'EBIT ÷ total assets (operating profitability)' },
            { sym: 'D', def: 'Market value of equity ÷ total liabilities (cushion before insolvency)' },
            { sym: 'E', def: 'Sales ÷ total assets (asset efficiency)' },
          ],
          caption: 'Edward Altman fitted the weights in 1968 using 66 manufacturing firms, half of which had gone bankrupt. Z above 2.99: safe; 1.81–2.99: grey zone; below 1.81: distress.',
        },
        {
          t: 'metric',
          name: 'the Altman Z-score',
          shows: 'A single number that blends five ratios covering liquidity, accumulated profitability, current profitability, market confidence and asset efficiency, into one estimate of how far a company is from bankruptcy. Altman built it by statistically finding the weights that best separated companies that actually went bankrupt from those that did not, using real failures as the test.',
          eli5: 'It\'s like a credit score, but for a whole company instead of a person. Just as a credit score blends your payment history, debts and income into one number lenders trust, the Z-score blends five pieces of a company\'s balance sheet and income statement into one number that says "how worried should I be about this company surviving?"',
          higher: 'The company looks financially sound by the historical pattern of companies that avoided bankruptcy, comfortable liquidity, solid accumulated profits, healthy current earnings relative to its assets, and a market that still has confidence in it (reflected in factor D, equity value versus liabilities). A score above 2.99 is in Altman\'s "safe" zone.',
          lower: 'The company resembles the pattern seen in companies that later went bankrupt, thin liquidity, weak or negative profitability, heavy debt relative to the market\'s valuation of its equity. Below 1.81 is Altman\'s "distress" zone, historically associated with a meaningfully elevated bankruptcy risk within the next year or two; 1.81–2.99 is a "grey zone" that calls for closer investigation rather than an automatic verdict.',
          typical: 'Remember the model was built and tested on manufacturing companies, so scores for banks, software firms or early-stage companies with few hard assets can be misleading, Altman published separate versions (Z′, Z″) with different weights for private companies and non-manufacturers for exactly this reason.',
        },
        {
          t: 'example',
          title: 'Kopi & Co (market value of equity 1,200)',
          lines: [
            { label: 'A', text: '\\((150 - 70)/500 = 0.16\\)' },
            { label: 'B', text: 'retained earnings say 200: \\(200/500 = 0.40\\)' },
            { label: 'C', text: '\\(100/500 = 0.20\\)' },
            { label: 'D', text: '\\(1200/200 = 6.0\\)' },
            { label: 'E', text: '\\(500/500 = 1.0\\)' },
            { label: 'Z', text: '\\(1.2(0.16) + 1.4(0.40) + 3.3(0.20) + 0.6(6.0) + 1.0(1.0) = 6.01\\): safely above 2.99' },
          ],
        },
        { t: 'fin-tool', tool: 'altman' },
        { t: 'callout', tone: 'note', title: 'Use the right version', text: 'The original Z-score is for listed manufacturers. Altman later published versions for private companies (Z′) and non-manufacturers and emerging markets (Z″) with different weights.' },
      ],
    },
    {
      id: 'flags',
      title: 'Accounting red flags',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Net income growing much faster than operating cash flow for several years',
            'Receivables growing much faster than sales (customers not paying, or sales pulled forward)',
            'Inventory piling up faster than sales',
            '"One-off" restructuring charges every year',
            'Frequent changes of auditor or chief financial officer',
            'Large, complicated related-party transactions',
            'Heavy reliance on adjusted ("non-GAAP") profit figures',
          ],
        },
      ],
    },
  ],
  sources: [
    'Piotroski, J. D. (2000). Value investing: The use of historical financial statement information to separate winners from losers. *Journal of Accounting Research*, 38, 1–41.',
    'Altman, E. I. (1968). Financial ratios, discriminant analysis and the prediction of corporate bankruptcy. *The Journal of Finance*, 23(4), 589–609.',
    'Porter, M. E. (1979). How competitive forces shape strategy. *Harvard Business Review*, 57(2), 137–145.',
    'Dorsey, P. (2008). *The Little Book That Builds Wealth*. Wiley.',
  ],
  related: ['finance/fundamental/value-investing', 'finance/fundamental/ratios', 'finance/fundamental/dupont'],
}

export default guide
