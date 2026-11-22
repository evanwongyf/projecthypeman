import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Growth makes the average person richer, but averages hide a great deal. How is income shared? Is the gap between rich and poor widening, and does it matter for growth, fairness or politics? Can children of poor parents expect to do better? This guide builds the tools for measuring inequality (the Lorenz curve and the Gini coefficient, derived step by step), shows exactly how taxes and transfers change them, looks at Singapore’s figures before and after government transfers, and reviews the big ideas about where inequality comes from: Kuznets’s curve, the global "elephant curve", Piketty’s r > g, and the link between inequality and social mobility.',
  nutshell: [
    'The **Lorenz curve** plots the share of income received by the poorest p of people; the diagonal is perfect equality.',
    'The **Gini coefficient** is twice the area between the diagonal and the Lorenz curve: **G = 1 − 2∫L(p)dp**, from 0 (equal) to 1.',
    'A flat tax shared out equally cuts the Gini **in proportion to the tax rate**: G′ = (1 − τ)G.',
    'Singapore’s Gini for household income from work is about **0.43 before** and about **0.37 after** government transfers and taxes (2023).',
    'Inequality and **mobility** are linked: more unequal countries tend to have less mobility between generations (the **Great Gatsby curve**).',
  ],
  sections: [
    {
      id: 'lorenz',
      title: 'The Lorenz curve and the Gini coefficient',
      lead: 'One curve, one number.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`G = \frac{\text{area between diagonal and Lorenz curve}}{\text{area under diagonal}} = 1 - 2\int_0^1 L(p)\,dp`,
          plain: 'Line everyone up from poorest to richest. L(p) is the share of all income going to the poorest p of people. If income were equal, the bottom 20% would get 20%, so L(p) = p, the diagonal. The further the curve sags below the diagonal, the more unequal the distribution. The Gini is the area of the sag divided by the whole triangle under the diagonal, which has area one half.',
          syntax: [
            { sym: String.raw`L(p)`, say: 'The Lorenz curve: the cumulative share of income held by the poorest fraction p.' },
            { sym: String.raw`\int_0^1 L(p)\,dp`, say: 'The area under the Lorenz curve.' },
          ],
          worked: {
            title: 'A Gini from quintile shares',
            steps: [
              String.raw`Income shares from poorest to richest fifth: 5%, 10%, 15%, 25%, 45%.`,
              String.raw`Cumulative shares at 0.2, 0.4, 0.6, 0.8, 1.0: 0.05, 0.15, 0.30, 0.55, 1.00.`,
              String.raw`Area under the curve by trapezoids: \(0.2 \times \tfrac12\left[(0 + 0.05) + (0.05 + 0.15) + (0.15 + 0.30) + (0.30 + 0.55) + (0.55 + 1)\right] = 0.1 \times 3.10 = 0.31\).`,
              String.raw`\(G = 1 - 2 \times 0.31 = 0.38\).`,
            ],
            why: ['the distribution', 'add the shares up', 'each slice is a trapezoid of width 0.2', 'apply the formula'],
            answer: 'A Gini of 0.38, typical of many rich countries after taxes and transfers. (Trapezoids slightly underestimate the true Gini because real Lorenz curves are curved within each fifth.)',
          },
        },
        {
          t: 'plot',
          title: 'A Lorenz curve from quintile shares',
          x: [0, 1],
          y: [0, 1],
          xLabel: 'share of people, poorest first',
          yLabel: 'share of income',
          curves: [{ f: (p: number) => p, label: 'perfect equality', dashed: true }],
          data: [{ pts: [[0, 0], [0.2, 0.05], [0.4, 0.15], [0.6, 0.3], [0.8, 0.55], [1, 1]], label: 'Lorenz curve (5, 10, 15, 25, 45)', dots: true }],
          areas: [{ pts: [[0, 0], [0.2, 0.05], [0.4, 0.15], [0.6, 0.3], [0.8, 0.55], [1, 1]], label: 'Gini area ÷ 0.5 = 0.38', color: '#d9534f', at: [0.6, 0.45] }],
        },
        {
          t: 'proof',
          claim: String.raw`For the Lorenz curve \(L(p) = p^k\) with \(k \ge 1\), the Gini coefficient is \(G = \dfrac{k - 1}{k + 1}\).`,
          method: 'direct',
          steps: [
            { statement: String.raw`\(\int_0^1 p^k\,dp = \dfrac{1}{k + 1}\).`, reason: 'The power rule for integrals.' },
            { statement: String.raw`\(G = 1 - \dfrac{2}{k + 1} = \dfrac{k + 1 - 2}{k + 1} = \dfrac{k - 1}{k + 1}\).`, reason: 'Substitute into G = 1 − 2∫L.' },
            { statement: String.raw`\(k = 1\) gives \(G = 0\) (equality); \(k = 3\) gives \(G = 0.5\); as \(k \to \infty\), \(G \to 1\).`, reason: 'Check the limits.' },
          ],
          note: 'This one-parameter family is used in the lab below. Real distributions are better fitted by more flexible forms, but the logic is the same.',
        },
        {
          t: 'table',
          head: ['Measure', 'Definition', 'Strength', 'Weakness'],
          rows: [
            ['Gini coefficient', 'Twice the area between the diagonal and the Lorenz curve', 'Uses the whole distribution; widely published', 'Most sensitive to the middle; different shapes can give the same Gini'],
            ['Top 1% share', 'Share of income going to the richest 1%', 'Captures the very top, where much change has happened', 'Needs tax data; ignores the bottom'],
            ['Palma ratio', 'Income share of the top 10% ÷ share of the bottom 40%', 'Focuses on the tails, where most differences between countries lie', 'Ignores the middle half'],
            ['P90/P10', 'Income at the 90th percentile ÷ income at the 10th', 'Intuitive; robust to extremes', 'Ignores the very top and bottom'],
          ],
        },
      ],
    },
    {
      id: 'redistribution',
      title: 'Taxes, transfers and the Gini',
      lead: 'How redistribution moves the curve.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`y_i' = (1 - \tau)\,y_i + \tau\,\bar{y} \;\;\Rightarrow\;\; L'(p) = (1 - \tau)L(p) + \tau p \;\;\Rightarrow\;\; G' = (1 - \tau)\,G`,
          plain: 'Tax everyone’s income at a flat rate τ and give the revenue back as an equal payment to all. Each person keeps (1 − τ) of their own income plus an equal share τ of average income. The new Lorenz curve is a weighted average of the old curve and the diagonal, so the Gini shrinks in proportion: a 20% flat tax with an equal transfer cuts the Gini by 20%.',
          syntax: [
            { sym: String.raw`\bar{y}`, say: 'Read "y bar": average income.' },
            { sym: String.raw`\tau`, say: 'Read "tau": the flat tax rate.' },
          ],
          worked: {
            steps: [
              String.raw`Gini before: 0.45. A 20% flat tax, revenue shared equally: \(G' = 0.8 \times 0.45 = 0.36\).`,
              String.raw`A person earning half the average: \(0.8 \times 0.5 + 0.2 \times 1 = 0.6\) of the average, up from 0.5.`,
              String.raw`A person earning three times the average: \(0.8 \times 3 + 0.2 = 2.6\), down from 3.`,
            ],
            why: ['apply the formula', 'the poor gain from the equal transfer', 'the rich pay more than they get back'],
            answer: 'Even a flat tax redistributes when the revenue is shared equally: it is the transfer side that does most of the work. Progressive taxes and targeted transfers redistribute more per dollar raised.',
          },
        },
        { t: 'econ-viz', viz: 'lorenz' },
        {
          t: 'bars',
          title: 'Singapore: Gini coefficient of household income from work per member',
          items: [
            { label: 'Before government transfers and taxes', value: 0.433 },
            { label: 'After government transfers and taxes', value: 0.371 },
          ],
          min: 0,
          max: 0.5,
          decimals: 3,
          caption: 'Department of Statistics Singapore, *Key Household Income Trends 2023*, resident employed households. The figures change slightly each year; check SingStat for the latest.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Singapore’s approach', tag: 'targeted, work-linked', body: 'Rather than broad unemployment or universal benefits, support is targeted and often tied to work or assets: Workfare top-ups for lower-wage workers, GST Vouchers, housing grants for lower-income buyers, ComCare for households in need, and CPF top-ups.' },
            { title: 'Okun’s leaky bucket', tag: 'the trade-off', body: 'Arthur Okun (1975) likened redistribution to carrying water from rich to poor in a leaky bucket: some is lost to weaker incentives and administration. The question is how much leakage is acceptable for how much equality.' },
            { title: 'Wealth and income', tag: 'different gaps', body: 'Wealth is far more unequal than income almost everywhere, with Gini coefficients often above 0.6 or 0.7, because it accumulates over lifetimes and is inherited.' },
            { title: 'Market and disposable income', tag: 'which Gini?', body: 'Compare like with like: Gini coefficients before taxes and transfers (market income) are much higher than after (disposable income), especially in countries with large welfare states.' },
          ],
        },
      ],
    },
    {
      id: 'causes',
      title: 'Where inequality comes from',
      lead: 'Three big ideas.',
      blocks: [
        { t: 'p', text: 'Simon Kuznets (1955) suggested that inequality first rises as an economy industrialises, because some workers move into high-paying modern jobs while others stay in agriculture, and then falls as the modern sector absorbs everyone and education spreads: an inverted U. Rich countries’ inequality did fall from the early 1900s to the 1970s, but it rose again in many after 1980, so the Kuznets curve is at best part of the story.' },
        {
          t: 'plot',
          title: 'Global income growth by percentile, 1988–2008 (the "elephant curve", stylised)',
          x: [0, 100],
          y: [0, 80],
          xLabel: 'percentile of the global income distribution',
          yLabel: 'real income growth (%)',
          data: [{ pts: [[5, 40], [10, 45], [20, 50], [30, 58], [40, 70], [50, 74], [60, 66], [70, 40], [80, 10], [85, 3], [90, 15], [95, 25], [99, 65]], label: 'cumulative growth', dots: true }],
          caption: 'Stylised from Lakner and Milanovic (2016). The fastest gains went to the global middle (largely in China and other emerging Asian economies) and to the global top 1%; the slowest, near the 80th percentile, to lower-middle-class workers in rich countries. Global inequality between countries fell while inequality within many rich countries rose.',
        },
        {
          t: 'math',
          tex: String.raw`\beta = \frac{s}{g}, \qquad \alpha = r \times \beta`,
          plain: 'Thomas Piketty’s two "laws". In the long run the ratio of wealth to income β approaches the saving rate divided by the growth rate. Capital’s share of income α is the return on wealth times that ratio. If the return on capital r exceeds growth g, wealth accumulated in the past grows faster than incomes, and because wealth is concentrated, inequality tends to rise.',
          syntax: [
            { sym: String.raw`\beta`, say: 'Read "beta": the wealth-to-income ratio, as a multiple of a year’s national income.' },
            { sym: String.raw`r > g`, say: 'Piketty’s inequality: the return on capital above the growth rate of the economy.' },
          ],
          worked: {
            steps: [
              String.raw`Saving 10% of income, growth 2%: \(\beta = 0.10/0.02 = 5\), wealth worth five years of national income.`,
              String.raw`Return on capital 5%: capital’s share \(\alpha = 0.05 \times 5 = 25\%\) of national income.`,
              String.raw`If growth slows to 1%: \(\beta = 10\), and with r still 5%, \(\alpha = 50\%\).`,
            ],
            why: ['the first law in steady state', 'the second law', 'slower growth raises the weight of inherited wealth'],
            answer: 'Slower growth with a steady return on capital makes inherited wealth matter more. Critics note that r tends to fall as capital accumulates, and that much of the rise in inequality since 1980 has come from labour income at the top, not capital.',
          },
        },
        {
          t: 'mindmap',
          center: 'Drivers of rising inequality within countries',
          branches: [
            { label: 'Technology', tone: 'teal', items: ['skill-biased change', 'automation of routine jobs'] },
            { label: 'Globalisation', tone: 'orange', items: ['import competition for less-skilled work', 'offshoring'] },
            { label: 'Superstar firms', tone: 'lavender', items: ['winner-take-most markets', 'rising markups'] },
            { label: 'Institutions', tone: 'mustard', items: ['falling union membership', 'lower top tax rates'] },
            { label: 'Wealth', tone: 'pink', items: ['asset price booms', 'inheritance'] },
            { label: 'Households', tone: 'mint', items: ['assortative marriage', 'more two-earner households'] },
          ],
        },
      ],
    },
    {
      id: 'mobility',
      title: 'Mobility between generations',
      lead: 'Does where you start decide where you end?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\ln y_{child} = a + \beta\,\ln y_{parent} + \varepsilon`,
          plain: 'The intergenerational earnings elasticity β measures how much of a parent’s income advantage, in percentage terms, is passed to their child. A β of 0 means children’s incomes are unrelated to their parents’; a β of 1 means advantages are passed on in full.',
          syntax: [
            { sym: String.raw`\beta`, say: 'The intergenerational elasticity: the persistence of income across generations.' },
            { sym: String.raw`\varepsilon`, say: 'Everything else: luck, effort, talent not linked to parents.' },
          ],
          worked: {
            steps: [
              String.raw`A parent earns 60% above average (\(\ln 1.6 \approx 0.47\) above the mean in logs). With \(\beta = 0.5\), the child is expected to be \(0.5 \times 0.47 = 0.235\) above in logs, about 27% above average.`,
              String.raw`Grandchild: \(0.5^2 \times 0.47 \approx 0.12\), about 12% above.`,
              String.raw`With \(\beta = 0.2\), the child is expected about 10% above, the grandchild about 2%.`,
            ],
            why: ['first generation', 'advantages fade geometrically', 'a more mobile society'],
            answer: 'Estimates of β range from around 0.15–0.2 in Denmark and Norway to around 0.4–0.5 in the US and UK. In high-β societies, family background echoes for several generations.',
          },
        },
        {
          t: 'plot',
          title: 'The Great Gatsby curve (stylised)',
          x: [0.2, 0.5],
          y: [0, 0.65],
          xLabel: 'income inequality (Gini, a generation ago)',
          yLabel: 'intergenerational earnings elasticity',
          data: [{ pts: [[0.23, 0.15], [0.25, 0.17], [0.26, 0.26], [0.28, 0.29], [0.31, 0.32], [0.33, 0.4], [0.35, 0.47], [0.36, 0.5], [0.4, 0.5], [0.45, 0.58]], label: 'countries', dots: true }],
          caption: 'Stylised after Corak (2013), named by Alan Krueger in 2012. More unequal countries tend to have less mobility: when the rungs of the ladder are far apart, it is harder to climb. Correlation, not proof of cause: both may reflect differences in education systems, labour markets and policy.',
        },
        {
          t: 'dodont',
          do: ['Ask which income concept a Gini uses (market or disposable, household or individual, per member or equivalised)', 'Look at both inequality and mobility', 'Compare inequality within and between countries separately'],
          dont: ['Compare a pre-tax Gini in one country with a post-tax Gini in another', 'Treat a falling global Gini as proof inequality fell within your country', 'Assume any redistribution is free: weigh the leakage'],
        },
      ],
    },
  ],
  sources: [
    'Gini, C. (1912). *Variabilità e mutabilità*. Tipografia di Paolo Cuppini.',
    'Kuznets, S. (1955). Economic growth and income inequality. *American Economic Review*, 45(1), 1–28.',
    'Piketty, T. (2014). *Capital in the Twenty-First Century*. Harvard University Press.',
    'Lakner, C., and Milanovic, B. (2016). Global income distribution: From the fall of the Berlin Wall to the Great Recession. *World Bank Economic Review*, 30(2), 203–232.',
    'Corak, M. (2013). Income inequality, equality of opportunity, and intergenerational mobility. *Journal of Economic Perspectives*, 27(3), 79–102.',
    'Okun, A. M. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.',
    'Department of Statistics Singapore (2024). *Key Household Income Trends, 2023*. singstat.gov.sg.',
  ],
  related: ['economics/growth/institutions-and-development', 'economics/welfare/surplus-and-efficiency', 'economics/fiscal/singapore-fiscal-model'],
}

export default guide
