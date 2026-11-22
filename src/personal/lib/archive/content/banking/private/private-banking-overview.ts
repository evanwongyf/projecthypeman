import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Private banking is banking for people whose wealth makes their needs different from those of ordinary customers: not just a bigger savings account, but an advisor who coordinates investments, lending, estate planning, tax and family matters across several countries. This guide explains who private banking serves (the wealth segments and their thresholds), how a private bank is organised and how it makes money (with the arithmetic of fees and their long-run effect), what services and relationship model clients receive, how private banks differ from retail, wealth management, family offices and independent managers, the economics of the relationship manager, and the choices a client faces.',
  nutshell: [
    '**Segments** (by investable assets): **affluent** (about US$100k to US$1m), **high-net-worth (HNWI)** (US$1m to US$30m), **ultra-high-net-worth (UHNWI)** (over US$30m). Private banks usually start at about **US$1m to US$5m**.',
    'The core idea is a **single relationship manager (RM)** who coordinates specialists (investment, credit, estate and tax, trusts) around the client’s whole balance sheet, not just one account.',
    'Banks earn **fees on assets (about 0.5 to 1.5% a year)**, **transaction and product revenue**, and **lending margins** on loans against portfolios; the client pays the fee in good and bad years.',
    '**Fee drag compounds**: a 1% annual fee on a 6% gross return reduces a 20-year outcome by about 17%.',
    '**Alternatives** to a private bank: a retail wealth service, an independent asset manager, a multi-family office or a single-family office; each trades cost, independence and service differently.',
  ],
  sections: [
    {
      id: 'seg',
      title: 'Who private banks serve',
      lead: 'Wealth segments.',
      blocks: [
        {
          t: 'table',
          head: ['Segment', 'Investable assets (indicative)', 'Typical service'],
          rows: [
            ['Mass market', 'Under about US$100,000', 'Retail banking, robo-advice, digital tools'],
            ['Mass affluent', 'US$100,000 to US$1 million', 'Premier or priority banking, wealth advisers, funds'],
            ['High-net-worth (HNWI)', 'US$1 million to US$30 million', 'Private banking: RM, discretionary portfolios, lending, planning'],
            ['Ultra-high-net-worth (UHNWI)', 'Above US$30 million', 'Full private banking and family-office services; bespoke investments and structures'],
          ],
          caption: 'Thresholds vary by source (Capgemini, UBS, Knight Frank, Wealth-X) and by bank; each bank sets its own minimum. ',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Beyond the money', tag: 'what clients want', body: 'Wealthy clients want preservation first, growth second, and confidence that someone is looking at the whole picture: their business, property, family, taxes and legacy. Trust and discretion are the product.' },
            { title: 'Typical clients', tag: 'in Asia', body: 'Entrepreneurs and business owners (the majority of new wealth), executives and professionals with equity compensation, inheritors of family businesses, and families with multi-country interests.' },
            { title: 'Cross-border', tag: 'booking centres', body: 'Clients often hold assets in a centre such as Singapore, Switzerland or Hong Kong for stability, legal protection and access to products, while living and investing elsewhere.' },
            { title: 'The next generation', tag: 'succession', body: 'A large share of private banks’ future business lies in serving the heirs of today’s clients, who often have different expectations (digital access, sustainable investing, private markets).' },
          ],
        },
      ],
    },
    {
      id: 'model',
      title: 'How a private bank is organised and earns money',
      lead: 'The relationship manager at the centre.',
      blocks: [
        {
          t: 'flow',
          title: 'The private-banking model',
          nodes: [
            { label: 'Client and family', sub: 'goals, constraints, risk appetite', tone: 'human' },
            { label: 'Relationship manager (RM)', sub: 'single point of contact; owns the relationship', tone: 'model' },
            { label: 'Investment specialists', sub: 'advisory, discretionary portfolios, research, product selection', tone: 'process' },
            { label: 'Credit, trust, estate and tax specialists', sub: 'lending, structures, planning, insurance', tone: 'process' },
            { label: 'Compliance and risk', sub: 'KYC, suitability, monitoring, approvals', tone: 'data' },
          ],
          caption: 'The RM brings the bank’s capabilities to the client and the client’s needs to the bank, with compliance acting as an independent check.',
        },
        {
          t: 'table',
          head: ['Revenue source', 'How it works', 'Typical size'],
          rows: [
            ['Advisory or management fee', 'A percentage of assets under management (AUM), charged quarterly', '0.5% to 1.5% a year (lower for larger clients)'],
            ['Transaction and product revenue', 'Commissions or spreads on trades, structured products and funds (retrocessions from fund houses are being phased out in many markets)', 'Varies; 0.2% to 2% of notional on products'],
            ['Net interest income', 'Margin on deposits and on loans against investment portfolios (Lombard loans), mortgages and other credit', 'Often a large share of profit; 1 to 2% spread'],
            ['Other fees', 'Custody, trust and estate services, FX, banking services', 'Small to moderate'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`V_T=V_0\,(1+g-f)^{T},\qquad \text{fee drag}=1-\Big(\frac{1+g-f}{1+g}\Big)^{T}`,
          caption: 'The value of a portfolio after T years at gross return g and annual fee f, and the proportion of the fee-free outcome lost to fees.',
          where: [{ sym: 'g', def: 'gross annual return before fees' }, { sym: 'f', def: 'total annual fees (advisory, fund and transaction costs)' }, { sym: 'V_0', def: 'starting value' }],
          syntax: [{ sym: '(1+g-f)^T', say: 'compounding at the net return. Effect: fees reduce the compounding base every year. Why: fees are charged on assets, so they are taken before the growth on that money.' }, { sym: '\\text{fee drag}', say: 'the proportion lost relative to a no-fee portfolio. Effect: a 1% fee on a 6% return costs 17% of the final wealth over 20 years; a 2% fee costs 32%. Why: the loss compounds with the return.' }],
          worked: {
            title: 'S$5 million for 20 years at 6% gross',
            steps: ['No fees: 5 × 1.06²⁰ = S$16.04 million.', 'With a 1% all-in fee (net 5%): 5 × 1.05²⁰ = S$13.27 million: S$2.77 million less (−17%).', 'With 2% (net 4%): 5 × 1.04²⁰ = S$10.96 million (−32%).'],
            answer: 'The 1% difference compounds into millions. Whether the service is worth the fee depends on what it adds: access, advice, discretion, borrowing capacity, estate planning and behavioural coaching, which are hard to measure, against its cost.',
          },
        },
      ],
    },
    {
      id: 'alt',
      title: 'Private bank or something else?',
      lead: 'The options.',
      blocks: [
        {
          t: 'table',
          head: ['Option', 'What it is', 'Strengths', 'Weaknesses'],
          rows: [
            ['Private bank', 'A bank’s wealth unit with an RM, investment platform, credit and trust capabilities', 'Credit, custody, global network, one-stop service', 'Conflicts of interest (selling the bank’s products); minimums; fees'],
            ['Retail wealth or priority banking', 'Advice and funds from a retail bank for affluent clients', 'Lower minimums; convenient', 'Less customisation and fewer products'],
            ['Independent asset manager', 'A regulated manager who selects investments and uses banks as custodians', 'Independence; often lower product bias; specialised', 'Credit and some services must come from the custodian bank'],
            ['Multi-family office', 'A firm that serves several wealthy families with comprehensive services', 'Scale, integrated planning, independence', 'Fees; the need to choose carefully'],
            ['Single-family office', 'An entity set up by a family to manage its own wealth with its own staff', 'Control, privacy, bespoke; suits very large fortunes (often above US$100 million)', 'High cost, staffing, governance demands'],
            ['Robo-advisor or self-directed', 'Low-cost digital investing', 'Cheap, transparent', 'Limited planning and complex needs'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'What am I paying in total (advisory, fund, transaction, custody and credit costs)?',
            'How is the RM paid, and does that create conflicts?',
            'What happens to my account if my RM leaves?',
            'Is the bank advising me (with a duty of suitability) or only selling?',
            'How are my assets held (custody segregated from the bank’s balance sheet)?',
            'Are there minimum balances, lending conditions or lock-ins?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Capgemini (annual). *World Wealth Report*; UBS (annual). *Global Wealth Report*; Knight Frank. *The Wealth Report*.',
    'Monetary Authority of Singapore. *Asset Management Survey* and guidelines for private banks (mas.gov.sg).',
    'Maude, D. (2006). *Global Private Banking and Wealth Management: The New Realities*. Wiley.',
    'Sharpe, W. F. (1991). The arithmetic of active management. *Financial Analysts Journal*, 47(1).',
    'Association of Banks in Singapore, Wealth Management Institute (wmi.edu.sg) publications.',
  ],
  related: ['banking/private/wealth-services-and-products', 'banking/private/dimensions-of-wealth', 'banking/private/singapore-wealth-hub', 'finance/philosophies/passive', 'finance/quant/portfolio-theory'],
}

export default guide
