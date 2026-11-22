import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore is one of the largest wealth-management centres in Asia, alongside Hong Kong and Switzerland. Its pull comes from political and legal stability, a regulator with a strong reputation, a currency and banking system that have a long record of stability, no capital gains or estate duty, a deep pool of professionals, and its position at the centre of fast-growing Asian economies. This guide describes why wealth gathers here, the family-office regime and what its tax incentives require, the new digital banks and the infrastructure that connects the system, and the risks and limits the sector faces. Details of schemes change often, so figures and conditions are described in general terms; check MAS and IRAS for the current rules.',
  nutshell: [
    'Reasons for the hub: **stability and rule of law**, a **credible regulator (MAS)**, **tax simplicity** (no capital gains tax, no estate duty), **talent**, and **proximity to Asian wealth**.',
    '**Single-family offices** can claim tax exemptions on qualifying income under **sections 13O and 13U** of the Income Tax Act, subject to conditions on fund size, local spending, professionals and investments.',
    'The **Global Investor Programme** and similar residence routes, and MAS **licensing** for family offices that serve others, have tightened.',
    '**Digital full banks**, **SGFinDex**, **Project Guardian** (asset tokenisation) and open APIs are modernising the system.',
    'Risks: **money-laundering cases** (the 2023 S$3 billion case led to a stronger framework), **concentration**, and **competition** from Hong Kong, Dubai and others.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why wealth gathers in Singapore',
      lead: 'The pull factors.',
      blocks: [
        {
          t: 'table',
          head: ['Factor', 'What it offers', 'Caveat'],
          rows: [
            ['Stability and law', 'Reliable courts, property rights and contract enforcement, a long record of political continuity', 'Small and open; depends on regional stability'],
            ['Regulator and banks', 'MAS integrated supervision; three large local banks rated among the strongest in Asia', 'High compliance costs after money-laundering cases'],
            ['Tax design', 'No capital gains tax, no estate duty, territorial taxation with specific exemptions for foreign-sourced income received', 'Taxes may still apply to Singapore-source income and to individuals through their home countries'],
            ['Financial ecosystem', 'Asset managers, lawyers, accountants, trustees and technology firms close together', 'Competition for talent; high living and office costs'],
            ['Location', 'Time zone and flights linking China, India, Southeast Asia, the Middle East and Europe', 'Wealth is mobile; clients can move if rules or tastes change'],
          ],
        },
        { t: 'p', text: 'Assets managed in Singapore, counting both locally sourced and foreign funds, have risen into the trillions of Singapore dollars in MAS surveys, with a large share coming from outside Singapore. Growth has come from Asian entrepreneurs, regional business families and international clients seeking diversification across jurisdictions.' },
      ],
    },
    {
      id: 'family',
      title: 'Family offices in Singapore',
      lead: 'Single and multi-family offices, and tax incentives.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Single-family office (SFO)', tag: 'one family', body: 'A private company or structure that manages one family’s investments, reporting, tax and philanthropy. A SFO that manages only its own family’s money is generally exempt from licensing in Singapore.' },
            { title: 'Multi-family office (MFO)', tag: 'several families', body: 'Serves more than one family and is regulated: it needs a capital markets services licence or exemption from MAS and meets requirements on capital, compliance and conduct.' },
            { title: 'Tax incentives (13O, 13U)', tag: 'conditions apply', body: 'Under the Income Tax Act sections 13O (onshore fund tax exemption) and 13U (enhanced-tier fund), income from designated investments held through a qualifying fund vehicle can be exempt if conditions are met: minimum assets under management, local business spending, a number of local investment professionals, and local investments. Rules and thresholds change; check the MAS and IRAS pages.' },
            { title: 'Alignment with compliance', tag: 'post-2023', body: 'After the 2023 money-laundering case, MAS tightened scrutiny of family offices, with more attention on due diligence, source of wealth and anti-money-laundering controls among banks and service providers.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Why a family might set up an office here', text: 'For a family with perhaps S$50 million or more to manage, an office can offer control, privacy, bespoke investments (direct deals, private equity, co-investments), consolidated reporting and a place for the next generation to learn. The cost, often several million dollars a year at the larger end, means smaller families usually use a private bank, an external multi-family office or a virtual office instead.' },
      ],
    },
    {
      id: 'infra',
      title: 'Banks, infrastructure and innovation',
      lead: 'What is changing.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Digital full banks', tag: 'new licences', body: 'MAS granted digital full-bank licences to firms including GXS Bank and MariBank (and others in wholesale), bringing app-first banking, new deposit products and alternative credit scoring.' },
            { title: 'SGFinDex', tag: 'data sharing', body: 'The Singapore Financial Data Exchange lets residents, with consent, retrieve their financial information from government agencies and banks in one place, supporting planning and advice.' },
            { title: 'Project Guardian', tag: 'tokenised assets', body: 'An MAS-led industry pilot on tokenised bonds, funds and deposits, aiming at 24/7 settlement and programmable assets while managing the risks.' },
            { title: 'Open banking and APIs', tag: 'connectivity', body: 'Banks expose data and payment functions to approved third parties, creating wealth dashboards, advice apps and aggregated views across banks.' },
            { title: 'Robo and hybrid advice', tag: 'scale', body: 'Digital advice platforms lower the cost of managing smaller portfolios, with human advisers handling complex cases.' },
            { title: 'Sustainable finance', tag: 'demand from clients', body: 'Demand for ESG and impact portfolios, green bonds and transition finance, with rules on disclosure to limit greenwashing.' },
          ],
        },
      ],
    },
    {
      id: 'risks',
      title: 'Risks and open questions',
      lead: 'What can go wrong.',
      blocks: [
        {
          t: 'levels',
          caption: 'The main pressures on the hub, from the nearest to the longest-term.',
          items: [
            { name: 'Financial crime', body: 'The 2023 case, in which authorities seized or froze assets worth more than S$3 billion in connection with a money-laundering investigation, led to higher standards for due diligence, scrutiny of family offices and corporate service providers, and tougher penalties.' },
            { name: 'Competition', body: 'Hong Kong, Dubai, Switzerland and others court the same clients with their own schemes and tax rules.' },
            { name: 'Talent and cost', body: 'Rents and salaries are high, and skilled staff are mobile across financial centres.' },
            { name: 'Geopolitics', body: 'Sanctions, great-power rivalry and capital-control changes can shift wealth quickly between hubs.' },
            { name: 'Technology and regulation', body: 'Tokenisation, AI-driven advice and new payment forms raise efficiency but also compliance and operational-risk questions.' },
          ],
        },
        { t: 'p', text: 'Questions to ask when you read any claim about the hub: Is the figure assets under management, or net new money? Is it locally booked or managed? Does it count assets managed for clients abroad? And what conditions attach to an incentive described in a headline?' },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. Singapore Asset Management Survey and Annual Report (mas.gov.sg).',
    'Income Tax Act 1947 (Singapore), sections 13O and 13U; IRAS e-Tax guides on fund tax incentive schemes (iras.gov.sg).',
    'MAS Guidelines on Licensing, Registration and Conduct of Business for Fund Management Companies; MAS information on family offices.',
    'MAS. Digital Bank Licence announcements (2020 and 2022); SGFinDex; Project Guardian (mas.gov.sg).',
    'Singapore Police Force and MAS statements on the 2023 money-laundering case and the subsequent regulatory response.',
    'Economic Development Board; Global Investor Programme information.',
  ],
  related: ['banking/private/private-banking-overview', 'banking/private/dimensions-of-wealth', 'banking/private/compliance-kyc-and-tax-transparency', 'banking/theory/central-banking-singapore', 'accounting/taxation/international-and-planning'],
}

export default guide
