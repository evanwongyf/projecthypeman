import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Property is the largest asset most households own, and in Singapore it is taxed in several ways: an annual property tax on the owner, stamp duties when it changes hands, and, since 2011, extra duties designed to cool the market and limit foreign and multiple-property buying. Equally notable is what Singapore does not tax: capital gains, inheritances, wealth and, for individuals, most investment income. This guide explains the property taxes with worked stamp-duty calculations, the rationale for the cooling measures, withholding taxes on payments to non-residents, and the main things that are not taxed and why. Every rate shown has been changed several times; use IRAS for current rates.',
  nutshell: [
    '**Property tax** is an annual tax on the **annual value** (estimated rental) with **progressive rates**: lower for owner-occupied homes and higher for others.',
    '**Buyer’s Stamp Duty (BSD)** is progressive on the price or value, whichever is higher, up to **6% above S$3 million** (from 2023); **Additional BSD (ABSD)** adds a surcharge for second homes, foreigners and entities.',
    '**Seller’s Stamp Duty (SSD)** applies if a residential property is sold within a few years of purchase, to deter short-term speculation.',
    'Singapore has **no capital gains tax**, **no estate duty** (abolished in 2008), **no wealth tax**, and exempts most **interest** and **one-tier dividends** for individuals.',
    '**Withholding tax** applies to certain payments to non-residents, such as interest, royalties and technical fees, often reduced by treaties.',
  ],
  sections: [
    {
      id: 'ptax',
      title: 'Property tax',
      lead: 'An annual tax on ownership.',
      blocks: [
        { t: 'p', text: 'Property tax is levied on the owner of a property, based on its **annual value** (AV), the estimated gross annual rent if let at market rate, set by IRAS. Rates are progressive. For owner-occupied residential property, the lowest AV bands attract very low or zero rates and the highest bands rates in the 20s to 30s of a percent; for non-owner-occupied residential property (rented-out or second homes) the rates start at 10% and rise to the high 30s. Non-residential property is taxed at a flat rate (10% for many years). The tiers and rates have been raised in recent Budgets, so check the current schedule.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Owner-occupied', tag: 'concessionary', body: 'A home you live in qualifies for lower progressive rates, applied to AV in bands; a recent increase raised rates on the highest-value homes.' },
            { title: 'Non-owner-occupied', tag: 'higher rates', body: 'Investment properties, second homes and vacant homes are taxed at higher progressive rates on AV.' },
            { title: 'Why AV, not price?', tag: 'principle', body: 'Using rental value ties tax to the yield from the property and spares the owner of a high-priced but low-income property; AV is revalued periodically.' },
            { title: 'Payment', tag: 'process', body: 'IRAS issues the bill each year (due in January or late in the year depending on the type), payable by GIRO instalments.' },
          ],
        },
      ],
    },
    {
      id: 'duty',
      title: 'Stamp duties and the cooling measures',
      lead: 'BSD, ABSD, SSD.',
      blocks: [
        {
          t: 'table',
          head: ['Portion of price (residential, BSD)', 'Rate'],
          rows: [
            ['First S$180,000', '1%'],
            ['Next S$180,000', '2%'],
            ['Next S$640,000', '3%'],
            ['Next S$500,000', '4%'],
            ['Next S$1,500,000', '5%'],
            ['Above S$3,000,000', '6%'],
          ],
        },
        {
          t: 'math',
          plain: 'Buyer\'s Stamp Duty is charged in slices, like income tax. The first slice of the price is taxed at 1%, the next at 2%, and so on up to 6% on the part above S$3 million. A higher price pushes only the extra amount into a higher rate; it does not raise the rate on everything.',
          tex: String.raw`\text{BSD}=\sum_k r_k\cdot\text{(slice of price in band }k\text{)}`,
          caption: 'Like income tax, BSD is charged band by band.',
          where: [{ sym: 'r_k', def: 'the rate on the slice in band k' }],
          syntax: [{ sym: 'r_k\\cdot\\text{slice}_k', say: 'Multiply each slice of the price by its own rate and add them. For a S$1.5 million home: \\(180{,}000\\times1\\%=1{,}800\\); \\(180{,}000\\times2\\%=3{,}600\\); \\(640{,}000\\times3\\%=19{,}200\\); and the last \\(500{,}000\\times4\\%=20{,}000\\); total S$44,600, about 3.0% of the price. Crossing a threshold raises the rate only on the part above it, so a price S$1 over a threshold costs only a few cents more in tax.' }, { sym: '\\sum_k', say: 'The sigma adds the tax from every band: \\(1{,}800+3{,}600+19{,}200+20{,}000=44{,}600\\). A higher price means more bands are used and a higher total, but the average rate (3.0% here) rises only slowly.' }],
          worked: {
            title: 'A S$1.5 million home, bought by a Singapore citizen as a first home',
            steps: ['180,000 × 1% = S$1,800; 180,000 × 2% = S$3,600; 640,000 × 3% = S$19,200; the remaining 500,000 × 4% = S$20,000.', 'BSD = 1,800 + 3,600 + 19,200 + 20,000 = S$44,600 (about 3.0% of the price).', 'At S$2 million: S$69,600; at S$3 million: S$119,600.'],
            answer: 'Stamp duty is a substantial upfront cost, payable with the legal fees, and cannot be financed by a CPF housing grant alone; budgeting for it matters (see the mortgages guide).',
          },
        },
        {
          t: 'table',
          head: ['Buyer', 'ABSD on first', 'on second', 'on third and later'],
          rows: [
            ['Singapore citizen', '0%', '20%', '30%'],
            ['Permanent resident', '5%', '30%', '35%'],
            ['Foreigner', '60%', '60%', '60%'],
            ['Entities and housing developers (certain)', '65% or other', '–', '–'],
          ],
        },
        { t: 'p', text: 'These ABSD rates date from the April 2023 round of cooling measures (check the current table before relying on it, as it has changed repeatedly). A citizen buying a second S$2 million property would pay ABSD of 20%, or S$400,000, on top of BSD. The rationale is to moderate demand from buyers who already own homes or from abroad, so that housing remains accessible to first-time buyers. Seller’s Stamp Duty applies to residential property sold within a short period after purchase (the holding periods and rates have been revised in recent years).' },
      ],
    },
    {
      id: 'none',
      title: 'What Singapore does not tax, and withholding tax',
      lead: 'The absences matter as much as the taxes.',
      blocks: [
        {
          t: 'table',
          head: ['Not taxed (for individuals)', 'Why and caveats'],
          rows: [
            ['Capital gains on shares, property (outside trading)', 'Policy choice; gains from a trade or business, or from habitual short-term dealing, can be taxed as income'],
            ['Estate duty / inheritance tax', 'Abolished for deaths on or after 15 February 2008; assets abroad may face foreign inheritance taxes'],
            ['Wealth tax', 'None; property tax is the nearest equivalent'],
            ['Dividends from Singapore companies', 'One-tier system: company-level tax is final'],
            ['Interest from Singapore banks and Singapore Government Securities', 'Exempt for individuals (conditions apply)'],
            ['Most foreign-sourced income received by resident individuals', 'Exempt unless received through a partnership in Singapore'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Withholding tax', tag: 'payments to non-residents', body: 'When a Singapore payer pays interest, royalties, technical or management fees or rent of movable property to a non-resident, it must withhold tax and pay it to IRAS. Domestic rates have been around 15% for interest and 10% for royalties, with higher rates for some other payments, and are often lower under tax treaties.' },
            { title: 'Excise and customs duties', tag: 'goods', body: 'Duties apply to alcohol, tobacco, petroleum and motor vehicles; there is no general customs duty on most goods.' },
            { title: 'Vehicle taxes and quotas', tag: 'congestion', body: 'Singapore uses the Certificate of Entitlement quota and the Additional Registration Fee to ration vehicle ownership; road use is charged through electronic road pricing.' },
            { title: 'Carbon tax', tag: 'environment', body: 'A carbon tax has applied since 2019 to large emitters, with a scheduled increase in the rate over time (check the current level).' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Gains versus income', text: 'Whether a profit is a tax-free capital gain or taxable income depends on facts: intention at purchase, frequency of dealing, holding period, financing and the way the asset was managed (the "badges of trade"). IRAS looks at these. A person who buys and sells properties repeatedly within a short time may be taxed as a trader.' },
      ],
    },
  ],
  sources: [
    'Inland Revenue Authority of Singapore. Property Tax; Stamp Duty for Property; Additional Buyer’s Stamp Duty; Seller’s Stamp Duty; Withholding Tax (iras.gov.sg).',
    'Stamp Duties Act 1929; Property Tax Act 1960; Income Tax Act 1947 (Singapore), Singapore Statutes Online (sso.agc.gov.sg).',
    'Ministry of Finance Singapore. Budget statements; Ministry of National Development property cooling measures announcements (mof.gov.sg; mnd.gov.sg).',
    'Estate Duty (Abolition) provisions: Estate Duty Act 1929, as amended; IRAS notice on estate duty abolition (iras.gov.sg).',
  ],
  related: ['accounting/taxation/singapore-personal-income-tax', 'banking/consumer/mortgages-in-singapore', 'banking/private/dimensions-of-wealth', 'accounting/taxation/international-and-planning'],
}

export default guide
