import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Ratios turn raw statements into comparable numbers: how profitable, how efficient, how indebted and how liquid a company is. Each formula below is worked for **Kopi & Co** (from [the three statements](@finance/fundamental/statements)). Ratios mean most when compared over time and against similar companies.',
  nutshell: [
    '**Profitability**: margins, ROA, ROE, ROIC.',
    '**Liquidity**: can it pay bills due within a year? Current and quick ratios.',
    '**Leverage**: how much debt, and can it afford the interest?',
    '**Efficiency**: how hard do the assets work? Turnover ratios.',
    'No ratio is good or bad in isolation; a supermarket and a software company have very different "normal" margins.',
  ],
  sections: [
    {
      id: 'profit',
      title: 'Profitability',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Gross margin} = \frac{\text{Gross profit}}{\text{Revenue}} = \frac{300}{500} = 60\%,\qquad \text{Operating margin} = \frac{\text{EBIT}}{\text{Revenue}} = \frac{100}{500} = 20\%`,
          syntax: [
            { sym: String.raw`60\%`, say: 'Read "sixty per cent": the percent sign means "per hundred", so 60% is 0.60. To get a percentage, divide and multiply by 100.' },
            { sym: String.raw`\frac{\text{Gross profit}}{\text{Revenue}}`, say: 'Read "gross profit over revenue": gross profit divided by revenue.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: revenue $2,000m, cost of goods sold $1,200m, operating expenses $540m, D&A $60m.`,
              String.raw`Gross profit: \(2000 - 1200 = 800\). Gross margin: \(800/2000 = 0.40 = 40\%\).`,
              String.raw`EBIT: \(800 - 540 - 60 = 200\). Operating margin: \(200/2000 = 0.10 = 10\%\).`,
              String.raw`Gap between them: \(40\% - 10\% = 30\) points, the share of each sales dollar eaten by overheads.`,
            ],
            answer: 'Harbour keeps 40 cents of each dollar after the goods themselves, but only 10 cents after running the shops.',
          },
          caption: 'Gross margin shows how much pricing power or cost advantage a product itself has, before overheads; operating margin shows what is left after running the whole business day to day. The gap between the two (here 60% − 20% = 40 points, eaten by rent, staff and marketing) is a quick read on how heavy a company’s overheads are relative to its product economics.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Net margin} = \frac{\text{Net income}}{\text{Revenue}} = \frac{72}{500} = 14.4\%`,
          syntax: [
            { sym: String.raw`\frac{\text{Net income}}{\text{Revenue}}`, say: 'Read "net income over revenue". "Net" means after every cost, so this is the bottom line divided by the top line.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: revenue $2,000m, EBIT $200m, interest $20m, tax rate 25%.`,
              String.raw`Pre-tax profit: \(200 - 20 = 180\). Tax: \(0.25 \times 180 = 45\). Net income: \(180 - 45 = 135\).`,
              String.raw`Net margin: \(135/2000 = 0.0675 = 6.75\%\).`,
            ],
            answer: 'Harbour keeps about 6.75 cents of profit from each dollar of sales, against 14.4 cents for Kopi.',
          },
        },
        {
          t: 'metric',
          name: 'net profit margin',
          shows: 'Out of every dollar of sales, how many cents actually end up as profit after every cost, goods sold, salaries, rent, interest, taxes, everything. It is the final, bottom-line answer to "is this business actually making money, after all its bills?", as opposed to gross margin, which only accounts for the direct cost of making the product.',
          eli5: 'If a food stall takes in $500 a week and, after paying for ingredients, the stallholder\'s wages, the rent for the stall, and taxes, has $72 left over, its net margin is 72/500 ≈ 14.4%. For every $1 a customer hands over, about 14 cents is real profit; the rest went to pay for everything it takes to run the stall.',
          higher: 'More of each sales dollar is kept as profit after all costs. A business can grow this either by raising prices, cutting costs, or both, but a margin that is unusually high for its industry can also be fragile if it invites new competitors to undercut on price.',
          lower: 'Less of each sales dollar survives as profit, the business is spending heavily relative to what it earns, whether on costs, competition forcing low prices, heavy investment, or interest on debt. A thin or negative net margin is not automatically bad (many fast-growing startups run negative margins on purpose, reinvesting everything), but it leaves very little cushion if sales slip.',
          typical: 'Varies enormously by industry: supermarkets often run 1–3% (high volume, thin margin), software companies 15–30%+ (low cost to serve each extra customer), restaurants typically 3–9%. Compare a company to its own history and its direct peers, never to unrelated industries.',
        },
        {
          t: 'math',
          tex: String.raw`ROA = \frac{\text{Net income}}{\text{Total assets}} = \frac{72}{500} = 14.4\%,\qquad ROE = \frac{\text{Net income}}{\text{Equity}} = \frac{72}{300} = 24\%`,
          syntax: [
            { sym: String.raw`ROA, ROE`, say: 'Read "R-O-A" and "R-O-E": return on assets, return on equity. Both are profit over a size measure; only the denominator differs.' },
            { sym: String.raw`\qquad`, say: 'A wide gap in the typesetting that separates two formulas on one line; it asks you to do nothing.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: net income $135m, total assets $1,500m, equity $600m.`,
              String.raw`ROA: \(135/1500 = 0.09 = 9\%\).`,
              String.raw`ROE: \(135/600 = 0.225 = 22.5\%\).`,
              String.raw`Leverage link: assets \(\div\) equity \(= 1500/600 = 2.5\), and \(9\% \times 2.5 = 22.5\%\).`,
            ],
            answer: 'ROE of 22.5% against ROA of 9%: the 2.5 times leverage multiplies the return that the assets earn.',
          },
          caption: 'ROA measures profit against everything the company controls, however it was financed; ROE measures profit only against the owners’ slice. Kopi’s ROE (24%) is higher than its ROA (14.4%) purely because some of its assets are funded by debt, not equity, the gap between the two is a quick tell for how much leverage is doing the lifting, which the metric below and [DuPont analysis](@finance/fundamental/dupont) unpack further.',
        },
        {
          t: 'metric',
          name: 'return on equity (ROE)',
          shows: 'The annual profit a company generates for every dollar the owners (shareholders) have invested in it, the single number that answers "how good is this business at using my money to make more money?" Warren Buffett has named ROE as one of his favourite measures of business quality.',
          eli5: 'If you put $300 of your own savings into a lemonade stand and it made $72 profit this year, your return on equity is 24%, your $300 effectively "earned" 24% this year, the same way a savings account earns interest, except the lemonade stand took real work and real risk.',
          higher: 'The company generates more profit per dollar shareholders have tied up in it, generally a sign of a strong, efficient, well-run business with some edge over competitors (a strong brand, low costs, pricing power). But very high ROE can also come purely from heavy borrowing rather than genuine business quality, see [DuPont analysis](@finance/fundamental/dupont) for how to tell the two apart.',
          lower: 'The company earns less profit per dollar of shareholder capital, it may be in a highly competitive, capital-intensive industry, going through a rough patch, or simply poorly run. A sustained ROE below what shareholders could earn elsewhere (like a stock index) means the business may be destroying value by existing in its current form.',
          typical: 'ROE above about 15% is generally considered good, above 20% very good; under 10% is often considered weak, though capital-intensive industries like utilities or heavy manufacturing normally run lower ROEs than asset-light ones like software or consulting.',
        },
        {
          t: 'math',
          tex: String.raw`ROIC = \frac{NOPAT}{\text{Invested capital}} = \frac{EBIT(1 - t)}{\text{Debt} + \text{Equity} - \text{Cash}} = \frac{100 \times 0.8}{160 + 300 - 60} = \frac{80}{400} = 20\%`,
          syntax: [
            { sym: String.raw`NOPAT`, say: String.raw`Read "no-pat": net operating profit after tax. It is EBIT with tax removed as if there were no debt, i.e. \(EBIT \times (1 - t)\).` },
            { sym: String.raw`\text{Debt} + \text{Equity} - \text{Cash}`, say: 'Add the two funding sources, then subtract cash, because surplus cash is not working in the operations, so it does not count as capital invested in them.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: EBIT $200m, tax rate 25%, debt $400m, equity $600m, cash $100m.`,
              String.raw`NOPAT: \(200 \times (1 - 0.25) = 150\).`,
              String.raw`Invested capital: \(400 + 600 - 100 = 900\).`,
              String.raw`ROIC: \(150/900 = 0.1667 = 16.7\%\).`,
              String.raw`Compare with an assumed cost of capital of 9%: the spread is \(16.7\% - 9\% = 7.7\) points.`,
            ],
            answer: 'ROIC of 16.7% against a 9% cost of capital: each extra dollar invested earns well above its cost, so growth creates value.',
          },
          where: [
            { sym: 'NOPAT', def: 'Net operating profit after tax: operating profit as if the company had no debt' },
            { sym: 't', def: 'Tax rate (20%)' },
          ],
          caption: 'ROIC above the cost of capital means growth creates value; below it, growth destroys value.',
        },
      ],
    },
    {
      id: 'liquidity',
      title: 'Liquidity',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Current ratio} = \frac{\text{Current assets}}{\text{Current liabilities}} = \frac{150}{70} = 2.14,\qquad \text{Quick ratio} = \frac{\text{Current assets} - \text{Inventory}}{\text{Current liabilities}} = \frac{100}{70} = 1.43`,
          syntax: [
            { sym: String.raw`\frac{\text{Current assets}}{\text{Current liabilities}}`, say: 'Read "current assets over current liabilities". Above 1 means more than enough short-term assets for short-term bills.' },
            { sym: String.raw`\text{Current assets} - \text{Inventory}`, say: 'Subtract the inventory first, then divide: you are asking whether the bills can be met without selling any stock.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: cash $100m, receivables $150m, inventory $250m, current liabilities $300m.`,
              String.raw`Current assets: \(100 + 150 + 250 = 500\).`,
              String.raw`Current ratio: \(500/300 = 1.67\).`,
              String.raw`Quick ratio: \((500 - 250)/300 = 250/300 = 0.83\).`,
            ],
            answer: 'Current ratio 1.67 but quick ratio 0.83: Harbour can cover its bills only if its stock sells, which suits a supermarket that turns stock over quickly.',
          },
          caption: 'Above 1 means short-term assets cover short-term bills. The quick ratio excludes inventory, which may be hard to sell fast.',
        },
        {
          t: 'metric',
          name: 'the current ratio',
          shows: 'Whether a company has enough cash and near-cash assets to pay the bills due within the next year, without needing to borrow or sell long-term assets. It is a basic check on short-term survival, separate from whether the business is profitable in the long run.',
          eli5: 'It is like checking whether you have enough in your chequing account and this month\'s paycheque to cover this month\'s rent and bills, regardless of how much your house or retirement fund (long-term assets) is worth, since you cannot pay the electricity bill with those.',
          higher: 'More short-term assets relative to short-term bills, more comfortable, less risk of a cash crunch. But a current ratio that is very high (say, above 3) can also mean the company is sitting on too much idle cash or unsold inventory instead of investing it productively, which can itself be a mild red flag for efficiency.',
          lower: 'Fewer short-term assets relative to short-term bills, if it drops below 1, the company technically cannot cover its next year of due bills from current assets alone, and may need to borrow, sell assets, or renegotiate with creditors. This is a serious warning sign, especially combined with weak profits.',
          typical: 'A current ratio of 1.5–3 is generally seen as healthy; below 1 raises real liquidity concerns; some fast-moving retail or restaurant businesses run comfortably below 1 because they sell inventory for cash very quickly, so industry context matters.',
        },
      ],
    },
    {
      id: 'leverage',
      title: 'Leverage and solvency',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\text{Debt}}{\text{Equity}} = \frac{30 + 130}{300} = 0.53,\qquad \frac{\text{Net debt}}{\text{EBITDA}} = \frac{160 - 60}{100 + 20} = 0.83\times`,
          syntax: [
            { sym: String.raw`\frac{\text{Net debt}}{\text{EBITDA}}`, say: 'Read "net debt over EBITDA". Net debt is debt minus cash; dividing by annual EBITDA gives a number of years.' },
            { sym: String.raw`0.83\times`, say: 'Read "zero point eight three times": a multiple, meaning 0.83 years of EBITDA would repay the net debt.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: debt $400m, equity $600m, cash $100m, EBITDA $260m (EBIT 200 plus D&A 60).`,
              String.raw`Debt to equity: \(400/600 = 0.67\).`,
              String.raw`Net debt: \(400 - 100 = 300\).`,
              String.raw`Net debt to EBITDA: \(300/260 = 1.15\times\).`,
            ],
            answer: 'About 1.15 years of EBITDA would repay all net debt, a modest load well below the 3-4 times that worries lenders.',
          },
          caption: 'Net debt ÷ EBITDA answers a more practical question than debt/equity alone: roughly how many years of operating cash flow it would take to pay off all debt after using up the company’s cash. Kopi’s 0.83× is comfortably low; lenders and credit-rating agencies start to worry above about 3–4×, and leveraged buyouts often start life at 5–7×.',
        },
        {
          t: 'metric',
          name: 'the debt-to-equity ratio',
          shows: 'How much of the company is financed by borrowed money versus owners\' money, for every dollar shareholders have put in, how many dollars has the company also borrowed. It is the headline measure of **financial leverage**: borrowing to amplify returns, which also amplifies risk.',
          eli5: 'Buying a $300,000 house with a $270,000 mortgage and $30,000 of your own money (debt-to-equity = 9) is far riskier than buying it with a $60,000 mortgage and $240,000 of your own cash (debt-to-equity = 0.25), a small drop in the house\'s value could wipe out all your equity in the first case, but barely dent it in the second.',
          higher: 'More of the business is funded by debt relative to owners\' capital. This can boost ROE when the business earns more on its assets than the interest rate on its debt (good leverage), but it also means fixed interest payments must be made whether or not business is good, and a downturn can wipe out equity much faster, a key reason highly leveraged companies get hit hardest in recessions.',
          lower: 'More of the business is funded by owners\' capital rather than debt, generally safer and more resilient to a downturn, but potentially leaving some "free" extra return on the table if the company could profitably borrow more cheaply than its own cost of equity.',
          typical: 'Varies hugely by industry: asset-heavy, stable-cashflow businesses like utilities or real estate often run debt/equity well above 1; asset-light, volatile businesses like early-stage tech typically run near 0; a ratio above about 2 is often flagged as high leverage worth investigating further.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Interest coverage} = \frac{\text{EBIT}}{\text{Interest expense}} = \frac{100}{10} = 10\times`,
          syntax: [
            { sym: String.raw`10\times`, say: 'Read "ten times": EBIT is ten times larger than the interest bill.' },
          ],
          worked: {
            title: 'A thinly covered borrower',
            steps: [
              String.raw`Given: EBIT $90m, interest expense $36m.`,
              String.raw`Coverage: \(90/36 = 2.5\times\).`,
              String.raw`Stress test: EBIT falls 30% to \(90 \times 0.7 = 63\), so coverage becomes \(63/36 = 1.75\times\).`,
            ],
            answer: 'Coverage drops from 2.5 times to 1.75 times after a 30% profit fall, below the 2-3 times warning level, so a modest downturn puts the interest payments at risk.',
          },
          caption: 'Kopi earns its interest bill ten times over: comfortable. Below about 2–3× is a warning sign.',
        },
        { t: 'callout', tone: 'note', title: 'Leverage magnifies', text: 'Debt raises ROE when the business earns more than the interest rate, and hurts badly when it does not. See [DuPont analysis](@finance/fundamental/dupont).' },
      ],
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Asset turnover} = \frac{\text{Revenue}}{\text{Total assets}} = \frac{500}{500} = 1.0,\qquad \text{Inventory turnover} = \frac{\text{COGS}}{\text{Inventory}} = \frac{200}{50} = 4`,
          syntax: [
            { sym: String.raw`\frac{\text{COGS}}{\text{Inventory}}`, say: 'Read "cost of goods sold over inventory". It uses COGS (cost), not revenue, so that inventory is compared with what it cost.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: revenue $2,000m, total assets $1,500m, COGS $1,200m, inventory $250m.`,
              String.raw`Asset turnover: \(2000/1500 = 1.33\).`,
              String.raw`Inventory turnover: \(1200/250 = 4.8\).`,
            ],
            answer: String.raw`Each dollar of assets generates $1.33 of sales a year, and stock is sold and replaced 4.8 times a year.`,
          },
          caption: 'Both measure how hard a dollar tied up in the business works: asset turnover of 1.0 means Kopi generates $1 of sales for every $1 of assets each year; inventory turnover of 4 means it sells and replaces its entire stock about four times a year. Higher is generally more efficient, a supermarket with turnover of 10+ makes up for thin margins with speed, while a shipyard with turnover near 0.3 needs fat margins instead, since its assets sit still for years.',
        },
        {
          t: 'math',
          tex: String.raw`\text{Days inventory} = \frac{365}{4} \approx 91,\qquad \text{Days receivable} = \frac{\text{Receivables}}{\text{Revenue}}\times 365 = \frac{40}{500}\times 365 \approx 29`,
          syntax: [
            { sym: String.raw`\times 365`, say: String.raw`Read "times 365": turns a fraction of a year into days. The ratio of receivables to revenue is the fraction of the year’s sales still unpaid.` },
            { sym: String.raw`\frac{365}{4}`, say: 'Read "365 over 4": the days in the year divided by inventory turnover.' },
          ],
          worked: {
            title: 'Harbour Foods',
            steps: [
              String.raw`Given: inventory turnover 4.8, receivables $150m, revenue $2,000m.`,
              String.raw`Days inventory: \(365/4.8 = 76\).`,
              String.raw`Days receivable: \((150/2000) \times 365 = 0.075 \times 365 = 27.4\).`,
            ],
            answer: 'Harbour holds about 76 days of stock and waits about 27 days to be paid.',
          },
          caption: 'The same turnover numbers, just read as a number of days rather than a multiple, often the more intuitive scale. Kopi holds about three months of stock and is paid about a month after selling (perhaps from corporate catering accounts). Rising days-inventory or days-receivable over time, even with stable revenue, is a classic early warning that stock is piling up unsold or customers are paying more slowly.',
        },
      ],
    },
    {
      id: 'summary',
      title: 'Kopi & Co at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Ratio', 'Kopi & Co', 'Typical reading'],
          rows: [
            ['Gross margin', '60%', 'Strong pricing; typical for coffee shops'],
            ['Operating margin', '20%', 'Healthy'],
            ['ROE', '24%', 'High; above about 15% is considered good'],
            ['ROIC', '20%', 'Well above a ~9% cost of capital: value-creating'],
            ['Current ratio', '2.14', 'Comfortable'],
            ['Debt / equity', '0.53', 'Moderate'],
            ['Interest cover', '10×', 'Very safe'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Industry matters', text: 'Supermarkets often run net margins of 1–3% but turn their assets over quickly; software firms can have gross margins above 80%. Always compare like with like.' },
      ],
    },
  ],
  sources: ['Penman, S. H. (2013). *Financial Statement Analysis and Security Valuation* (5th ed.). McGraw-Hill.', 'CFA Institute. (2020). *Financial Reporting and Analysis* (CFA Program Curriculum). Wiley.'],
  related: ['finance/fundamental/dupont', 'finance/fundamental/multiples', 'finance/fundamental/statements'],
}

export default guide
