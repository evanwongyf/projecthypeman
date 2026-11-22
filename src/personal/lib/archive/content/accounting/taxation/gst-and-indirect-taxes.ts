import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A goods and services tax is a tax on consumption collected in small pieces along the supply chain. Each business charges tax on its sales and subtracts the tax it paid on its purchases, so the tax on the value it added is what it actually remits; the final consumer, who cannot subtract anything, bears the entire amount. Singapore introduced GST in 1994 at 3%; the rate has risen in steps to 9% since 1 January 2024. This guide explains the mechanism with a worked chain and a live lab, who must register, the difference between standard-rated, zero-rated and exempt supplies, imports and digital services from overseas, and the effect on households and the offsetting transfers. Rates and thresholds change; check IRAS.',
  nutshell: [
    '**Output tax** (on sales) minus **input tax** (on purchases) is paid to IRAS; the **net burden on the business is zero**, the **consumer** bears the tax.',
    'Registration is **compulsory** when taxable turnover exceeds **S$1 million** (in a year, or expected in the next 12 months); voluntary registration is possible.',
    '**Standard-rated** supplies carry 9%; **zero-rated** supplies (exports, international services) carry 0% **and** the business can recover input tax; **exempt** supplies (financial services, residential property) carry no GST but **input tax cannot be claimed**.',
    '**Imports** are subject to GST at the border; **overseas digital services** to consumers are covered by the overseas vendor registration regime.',
    'GST is **regressive** in effect, offset by the **GST Voucher** and **Assurance Package** payments to lower-income households (details change).',
  ],
  sections: [
    {
      id: 'chain',
      title: 'How GST works along a supply chain',
      lead: 'Tax on value added.',
      blocks: [
        {
          t: 'math',
          plain: 'GST is collected in pieces along the supply chain, but only on the value each business adds. Each business charges GST on its sales and subtracts the GST it paid on its purchases, so it hands IRAS only the difference. The business is merely a collector; the final consumer, who cannot subtract anything, pays the full tax.',
          tex: String.raw`\text{GST payable}=\text{Output tax}-\text{Input tax}=g\,(S-P),\qquad \sum_{\text{stages}}g\,(S_i-P_i)=g\,S_{\text{final}}`,
          caption: 'Each business pays GST on its value added; the stages sum to the rate times the final price.',
          where: [{ sym: 'g', def: 'the GST rate' }, { sym: 'S', def: 'the business’s sales (before GST)' }, { sym: 'P', def: 'its purchases (before GST)' }],
          syntax: [{ sym: 'g\\,(S-P)', say: 'Take the rate \\(g\\) times the difference between a business\'s sales \\(S\\) and purchases \\(P\\), the value it added. The retailer: \\(0.09\\times(100-60)=\\text{S\\$}3.60\\). The wholesaler, with no purchases: \\(0.09\\times(60-0)=\\text{S\\$}5.40\\). A bigger mark-up between purchases and sales means more GST remitted; if a business adds no value its GST due is zero.' }, { sym: '\\sum_{\\text{stages}}g\\,(S_i-P_i)=g\\,S_{\\text{final}}', say: 'Adding the GST paid at every stage gives \\(5.40+3.60=\\text{S\\$}9.00\\), exactly \\(0.09\\times100\\), the rate times the final price. The purchases cancel out of the sum because each business\'s sale is the next one\'s purchase. So the total tax does not depend on how many businesses are in the chain.' }],
          worked: {
            title: 'Wholesaler to retailer to consumer',
            steps: ['Wholesaler sells goods to the retailer for S$60 plus 9% GST (S$5.40) and pays S$5.40 to IRAS (assume no inputs).', 'Retailer sells to the consumer for S$100 plus 9% GST (S$9.00); it deducts the S$5.40 it paid and remits S$3.60.', 'Total GST collected: 5.40 + 3.60 = S$9.00 = 9% × S$100; the consumer paid S$109.'],
            answer: 'The tax collected equals the rate times the final price, however many stages are in the chain. Retailers and wholesalers pass the tax on; they bear a compliance cost, not the tax.',
          },
        },
        { t: 'acct-viz', viz: 'gst' },
      ],
    },
    {
      id: 'types',
      title: 'Standard-rated, zero-rated and exempt',
      lead: 'Three treatments, very different consequences.',
      blocks: [
        {
          t: 'table',
          head: ['Treatment', 'GST charged', 'Input tax recovered?', 'Examples'],
          rows: [
            ['Standard-rated', '9%', 'Yes', 'Most goods and services supplied in Singapore'],
            ['Zero-rated', '0%', 'Yes', 'Exports of goods; international services such as international transport'],
            ['Exempt', 'None', 'No (generally)', 'Sale or lease of residential property; most financial services (such as loan interest, but not fees treated as standard-rated); investment precious metals; digital payment tokens (specified)'],
            ['Out of scope', 'None', 'No', 'Supplies made outside Singapore, wages'],
          ],
        },
        {
          t: 'example',
          title: 'Why zero-rating differs from exemption',
          lines: [
            { label: 'Exporter (zero-rated)', text: 'Buys materials for S$100 plus S$9 GST and sells abroad for S$200 at 0%. It claims the S$9 back: it ends up with no GST cost in its price.' },
            { label: 'Bank (exempt loan interest)', text: 'Earns interest that is exempt. S$9 of GST on its office costs is not claimable and becomes a real cost to be built into its prices.' },
            { label: 'Consequence', text: 'Exports leave Singapore tax-free so that tax is levied where the goods are consumed (destination principle); exempt suppliers bear some embedded tax and have incentives to cut input costs.' },
          ],
        },
      ],
    },
    {
      id: 'reg',
      title: 'Registration, imports and fairness',
      lead: 'Who files, and who benefits.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Registration', tag: 'S$1 million', body: 'Compulsory when taxable turnover (standard-rated and zero-rated supplies) exceeds S$1 million. Registered businesses file returns, usually quarterly, charge GST, and may claim input tax on valid tax invoices.' },
            { title: 'Imports', tag: 'at the border', body: 'GST is collected on goods imported into Singapore (with exceptions). From 2023, GST applies to low-value goods imported by air or post under the overseas vendor registration regime.' },
            { title: 'Overseas digital services', tag: 'B2C', body: 'Overseas suppliers of digital services to Singapore consumers above thresholds register and charge GST. Business customers who are GST-registered account for GST by reverse charge when they import services.' },
            { title: 'Distributional effect', tag: 'households', body: 'Low-income households spend a larger share of income, so GST takes a larger share from them. The government offsets this with GST Voucher cash and other support; the Assurance Package accompanied the 2024 increase.' },
          ],
        },
        { t: 'dodont', do: ['Keep valid tax invoices to claim input tax', 'File on time even if no tax is due', 'Check the zero-rating rules and documentation for exports and international services'], dont: ['Charge GST when below the registration threshold unless registered', 'Assume that exempt means you can recover input tax', 'Ignore reverse-charge and overseas-vendor rules when buying from abroad'] },
      ],
    },
  ],
  sources: [
    'Inland Revenue Authority of Singapore. GST: General Guide for Businesses; Registration; Zero-rating and Exempt Supplies (iras.gov.sg).',
    'Goods and Services Tax Act 1993 (Singapore), Singapore Statutes Online (sso.agc.gov.sg).',
    'Ministry of Finance Singapore. Budget 2022 statement: GST rate increases and the Assurance Package (mof.gov.sg).',
    'OECD. International VAT/GST Guidelines (oecd.org).',
  ],
  related: ['accounting/taxation/tax-principles', 'accounting/taxation/singapore-corporate-tax', 'accounting/financial-accounting/accruals-and-adjustments'],
}

export default guide
