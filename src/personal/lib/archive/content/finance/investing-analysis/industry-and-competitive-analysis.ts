import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A company’s profits are shaped as much by the industry it competes in as by its own management. Airlines and pharmaceuticals can be run equally well and still earn very different returns because their industries differ in structure: in how many rivals there are, how easily new entrants can arrive, what power customers and suppliers hold and whether substitutes exist. Michael Porter’s five forces organise these questions, and the idea of the economic moat asks which of the advantages that protect profits are durable. This guide explains the five forces, the five sources of moat, how to test with numbers whether a moat is real (persistently high returns on capital, stable market share and pricing power), and how to measure concentration with the Herfindahl–Hirschman index, with Singapore examples of concentrated markets.',
  nutshell: [
    '**Porter’s five forces**: rivalry among competitors, threat of new entrants, bargaining power of suppliers, of buyers and threat of substitutes.',
    '**Moat sources**: **intangible assets** (brands, patents, licences), **switching costs**, **network effects**, **cost advantage** and **efficient scale**.',
    'Test a moat with **numbers**: ROIC above WACC for a decade, stable or rising market share, stable gross margins and pricing power in inflation.',
    '**Concentration**: the Herfindahl–Hirschman index \\(HHI=\\sum s_i^2\\) is 10,000 for a monopoly; four firms with 40/30/20/10 shares give **3,000**.',
    'High concentration does not guarantee high returns: **regulation**, **customer power** and **technology** can erode it.',
  ],
  sections: [
    {
      id: 'forces',
      title: 'The five forces',
      lead: 'Where industry profit goes.',
      blocks: [
        {
          t: 'table',
          head: ['Force', 'Strong when…', 'Effect on industry profit', 'Example questions'],
          rows: [
            ['Rivalry among competitors', 'Many similar rivals, slow growth, high fixed costs, low differentiation', 'Price wars lower profits', 'How many firms? Is competition on price or on features?'],
            ['Threat of entry', 'Low capital needs, no brand or licence barrier, easy distribution', 'Entry brings prices down', 'What stops a new entrant? How long would it take?'],
            ['Supplier power', 'Few suppliers, specialised inputs, high switching cost for the buyer', 'Suppliers capture the profit', 'Can the company change supplier? Does it depend on one?'],
            ['Buyer power', 'Few large buyers, standard products, low switching costs', 'Buyers push prices down', 'How concentrated are the customers? Can they switch?'],
            ['Threat of substitutes', 'A different product satisfies the same need at a similar or lower price', 'Caps the prices the industry can charge', 'What else meets the need? How is its price-performance changing?'],
          ],
          caption: 'Porter, M. E. (1979, 2008). The five competitive forces that shape strategy. *Harvard Business Review*.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Attractive industries', tag: 'few strong forces', body: 'Software platforms, exchanges and some consumer brands face weak buyers and substitutes and high entry barriers: they can sustain high margins.' },
            { title: 'Unattractive industries', tag: 'many strong forces', body: 'Airlines and commodity producers face strong rivalry, strong buyers and few barriers: average returns are low even for the best companies.' },
            { title: 'Within-industry differences', tag: 'position matters', body: 'Within an industry, a company with the lowest cost or the strongest brand can earn well above its rivals.' },
            { title: 'Change over time', tag: 'forces move', body: 'Technology, regulation and consolidation change the forces: yesterday’s moat can narrow.' },
          ],
        },
      ],
    },
    {
      id: 'moat',
      title: 'Moats and how to test them',
      lead: 'Advantages that last, and the evidence.',
      blocks: [
        {
          t: 'table',
          head: ['Source of moat', 'How it works', 'Example (illustrative)', 'Evidence in the numbers'],
          rows: [
            ['Intangible assets', 'Brands, patents, licences or regulatory approvals that others cannot copy easily', 'A leading consumer brand; a bank licence; a pharmaceutical patent', 'Pricing power: high gross margin, price increases without volume loss'],
            ['Switching costs', 'Customers find it costly to change', 'Enterprise software; core banking; a payroll provider', 'High retention, low churn, steady recurring revenue'],
            ['Network effects', 'Each user makes the service more valuable to others', 'Exchanges, payment networks, marketplaces', 'Rising share and rising margins with scale'],
            ['Cost advantage', 'A lower cost per unit from scale, process or access to resources', 'A low-cost airline; a large retailer', 'Stable gross margin as prices fall; low unit costs'],
            ['Efficient scale', 'A small market that supports few competitors profitably', 'A port, a pipeline or an airport serving one region', 'Few rivals and high returns on capital'],
          ],
          caption: 'The framework follows Morningstar’s economic-moat approach and Pat Dorsey’s *The Little Book That Builds Wealth*.',
        },
        {
          t: 'math',
          tex: String.raw`HHI=\sum_{i=1}^{N}s_i^{2},\qquad s_i=\text{market share in percent}`,
          caption: 'The Herfindahl–Hirschman index of market concentration.',
          where: [{ sym: 's_i', def: 'the market share of firm i, in percentage points' }, { sym: 'N', def: 'the number of firms' }],
          syntax: [{ sym: 's_i^{2}', say: 'squaring gives more weight to large firms. Effect: a market with one dominant firm scores much higher than one with many equal small ones. Why: the index measures how much of the market sits in few hands.' }],
          worked: {
            title: 'Four firms with 40%, 30%, 20% and 10%',
            steps: ['HHI = 40² + 30² + 20² + 10² = 1,600 + 900 + 400 + 100 = 3,000.', 'Ten firms with 10% each: HHI = 10 × 100 = 1,000.', 'A monopoly: 100² = 10,000.'],
            answer: 'Regulators have used thresholds of about 1,500 (moderately concentrated) and 2,500 (highly concentrated): 3,000 signals a concentrated market. Concentration helps profits only if entry is hard and customers cannot force price cuts; it also attracts regulation.',
          },
        },
        {
          t: 'bars',
          title: 'Four firms with 40, 30, 20 and 10% of a market (HHI = 3,000)',
          items: [{ label: 'Leader', value: 40 }, { label: 'Second', value: 30 }, { label: 'Third', value: 20 }, { label: 'Fourth', value: 10 }],
          unit: '%',
          min: 0,
          max: 50,
          decimals: 0,
        },
        {
          t: 'checklist',
          items: ['ROIC above WACC in most of the last 10 years', 'Market share stable or rising over 5 to 10 years', 'Gross margin stable through the cycle and through inflation', 'Low customer churn or high repeat business', 'A clear reason a rival with capital could not replicate the advantage', 'No technology or regulation threatening the position within the horizon'],
        },
        { t: 'callout', tone: 'note', title: 'Singapore examples to think about', text: 'Several Singapore industries are concentrated: retail banking (three local banks), telecommunications (a small number of operators), the stock exchange (one listing venue) and port operations. Concentration brings pricing power but also regulation and, in some cases, government shareholdings that affect incentives. Apply the five forces to each before assuming that a high market share means high returns.' },
      ],
    },
  ],
  sources: [
    'Porter, M. E. (2008). The five competitive forces that shape strategy. *Harvard Business Review*, 86(1), 78–93.',
    'Dorsey, P. (2008). *The Little Book That Builds Wealth: The Knockout Formula for Finding Great Investments*. Wiley.',
    'Greenwald, B. & Kahn, J. (2005). *Competition Demystified*. Portfolio.',
    'US Department of Justice and FTC: Horizontal Merger Guidelines (HHI thresholds) (justice.gov).',
  ],
  related: ['finance/fundamental/quality', 'finance/investing-analysis/company-analysis-workflow', 'finance/frameworks/buffett'],
}

export default guide
