import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Singapore’s stock market is small by global standards but unusual in structure: a handful of large banks and a large number of REITs and business trusts, a market dominated by local and regional companies, a culture of dividends and a lack of capital-gains tax. Understanding it means learning its main instruments: the Straits Times Index and its components, the three local banks, and the REITs that are one of the exchange’s distinctive features. This guide describes the structure of the Singapore Exchange (SGX), how to analyse the local banks with a handful of ratios, and how to analyse a REIT: distribution per unit and yield, net asset value, gearing, interest cover, lease expiry and the effect of interest rates, with a worked example. Figures and rules are approximate and change, so use them as a method rather than as data.',
  nutshell: [
    'The **STI** tracks the 30 largest companies on the SGX; it is **heavy in banks** (DBS, OCBC, UOB) and includes REITs, telcos, conglomerates and industrials.',
    '**Banks**: analyse **ROE**, **net interest margin**, **cost-to-income**, **non-performing loan ratio**, **CET1 capital** and the **dividend payout**.',
    '**REITs** pay out most income: analyse **DPU**, **yield = DPU ÷ price**, **P/NAV**, **gearing** (debt ÷ assets), **interest cover**, **WALE** and **occupancy**.',
    'A REIT with a **6.7% yield** on a price of S$1.20 and **P/NAV of 0.92** is cheaper than its book value but must be checked for gearing and refinancing.',
    '**Rate sensitivity**: a 1-point rise in rates on unhedged floating debt cuts DPU: in the example, by about **2.8%**.',
  ],
  sections: [
    {
      id: 'market',
      title: 'The structure of the market',
      lead: 'Banks, REITs and a dividend culture.',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'Description', 'What it means for an investor'],
          rows: [
            ['Straits Times Index (STI)', 'The 30 largest and most liquid SGX companies, weighted by free-float market capitalisation', 'A benchmark and the basis of index funds; concentrated in the banks'],
            ['Banks', 'DBS, OCBC and UOB are among the largest components and are among the strongest banks in Asia', 'The index is largely a bet on Singapore and regional banking, interest rates and credit costs'],
            ['REITs and business trusts', 'A large number of listed real-estate trusts own offices, retail, industrial, data centres and hospitality in Singapore, Asia, Europe and the US', 'High payouts (they must distribute most income to receive tax transparency), sensitive to interest rates'],
            ['Dividend culture', 'Many companies pay regular dividends; no capital-gains tax and exempt one-tier dividends for individuals', 'Total return is often dividend-led; yields are a central part of the discussion'],
            ['Trading', 'Board lot of 100 shares; trading hours roughly 9 am to 5 pm; settlement after two business days; minimum price steps depend on price', 'Check the board lot and tick size before trading small stocks'],
            ['Liquidity', 'Large caps trade actively; many small caps trade thinly', 'Wide spreads and low volume in small stocks: size positions accordingly'],
            ['Foreign influence', 'Many listed companies are regional (Malaysia, Indonesia, China); foreign investors hold a large share', 'Currency and regional risks'],
          ],
          caption: 'Descriptions are general and approximate; check SGX for current trading rules and index data.',
        },
      ],
    },
    {
      id: 'banks',
      title: 'Analysing the banks',
      lead: 'Seven numbers.',
      blocks: [
        {
          t: 'table',
          head: ['Measure', 'What it shows', 'Healthy'],
          rows: [
            ['Return on equity (ROE)', 'Profit per dollar of shareholder capital', 'About 10–15% for a well-run bank'],
            ['Net interest margin (NIM)', 'Net interest income ÷ interest-earning assets', 'Higher when rates rise and funding is cheap; compare with peers'],
            ['Cost-to-income ratio', 'Operating expenses ÷ income', 'Low (about 40–45%) means efficiency'],
            ['Non-performing loan (NPL) ratio', 'Share of loans in default', 'Low and stable; watch the trend and provisions'],
            ['CET1 ratio', 'Common equity tier 1 capital ÷ risk-weighted assets', 'Comfortably above the regulatory minimum (see the Basel guide)'],
            ['Loan-to-deposit ratio and liquidity coverage', 'Funding stability and liquidity', 'Below 100% and above the minimum'],
            ['Dividend payout', 'Dividends ÷ profit', 'Sustainable with capital growth; check the policy'],
          ],
          caption: 'The banking shelf explains each ratio in detail (capital, liquidity, credit risk, margins).',
        },
        { t: 'callout', tone: 'note', title: 'The banking cycle and the index', text: 'Bank profits rise when interest rates rise (wider margins) and fall when credit losses surge; the three banks therefore move the index. Singapore’s banks have kept high capital and low NPL ratios, but the local property market, regional exposures (China, Hong Kong, Indonesia) and any weakness in trade can affect results.' },
      ],
    },
    {
      id: 'reits',
      title: 'Analysing a REIT',
      lead: 'Yield, leverage, leases and rates.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Yield}=\frac{\text{DPU}}{P},\qquad \frac{P}{\text{NAV}},\qquad \text{Gearing}=\frac{\text{Debt}}{\text{Total assets}},\qquad \Delta\text{DPU}\approx-\frac{\Delta r\times D_{\text{float}}}{\text{Units}}`,
          caption: 'The main REIT measures and the sensitivity of the distribution to a rise in interest rates.',
          where: [{ sym: '\\text{DPU}', def: 'distribution per unit: the income paid per unit over a year' }, { sym: 'P,\\ \\text{NAV}', def: 'the unit price and net asset value per unit' }, { sym: 'D_{\\text{float}}', def: 'floating-rate (unhedged) debt' }, { sym: '\\Delta r', def: 'the rise in interest rates' }],
          syntax: [{ sym: '\\Delta r\\times D_{\\text{float}}', say: 'the extra interest bill. Effect: it comes straight out of distributable income. Why: a REIT pays out most of its income, so extra interest reduces the DPU almost one for one.' }],
          worked: {
            title: 'A REIT at S$1.20 with DPU of 8.0 cents',
            steps: ['Yield = 8.0/120 = 6.7%. NAV per unit S$1.30: P/NAV = 120/130 = 0.92.', 'Debt S$1.5 billion, 70% hedged: floating debt = S$450m. Distributable income S$160m over 2,000m units gives the DPU of 8.0 cents.', 'A 1-point rise in rates: extra interest = S$4.5m; ΔDPU = 4.5/2,000 = 0.225 cents (−2.8%).'],
            answer: 'A 6.7% yield and a discount to NAV look attractive, but the yield compares with a risk-free rate (Singapore government bonds) and the REIT has leverage, refinancing and property-value risks. The yield spread over the 10-year government bond is the margin for those risks.',
          },
        },
        {
          t: 'table',
          head: ['Measure', 'Why it matters', 'Watch for'],
          rows: [
            ['DPU trend', 'Is income growing, flat or falling?', 'A rising DPU funded by borrowing or by capital'],
            ['P/NAV', 'Price against book value of the properties', 'Discounts may reflect valuation risk, falling rents or leverage'],
            ['Gearing ratio', 'Debt ÷ total assets; regulators set a cap (50% at the time of writing)', 'Gearing close to the cap limits acquisitions and flexibility'],
            ['Interest cover', 'EBIT ÷ interest', 'Below about 2.5× is thin; regulators have minimum levels'],
            ['Debt maturity and hedging', 'When debt must be refinanced and what share is fixed', 'Large maturities in a high-rate period'],
            ['WALE (weighted average lease expiry)', 'How long the existing leases run', 'Short WALE means more rental risk; long WALE means locked-in income'],
            ['Occupancy and rental reversion', 'How full the buildings are, and whether new rents are above or below old', 'Negative reversions in a weak market'],
            ['Sponsor and acquisition pipeline', 'The parent’s strength and its ability to inject assets', 'Conflicts of interest and fees'],
          ],
        },
        { t: 'dodont', do: ['Compare the yield with government bond yields and with other REITs of the same sector', 'Check the gearing, interest cover and the maturity profile together', 'Read the REIT’s tax and distribution statements'], dont: ['Buy only for the highest yield', 'Ignore currency risk on foreign properties', 'Forget that distributions can include a return of capital'] },
      ],
    },
  ],
  sources: [
    'Singapore Exchange: market statistics, STI methodology and company filings (sgx.com).',
    'Monetary Authority of Singapore. *Code on Collective Investment Schemes*, Appendix 6: Property Funds (leverage limit and interest-coverage requirements) (mas.gov.sg).',
    'Geltner, D. et al. (2013). *Commercial Real Estate Analysis and Investments*. OnCourse Learning.',
    'DBS, OCBC and UOB annual reports and Basel III Pillar 3 disclosures (company websites).',
  ],
  related: ['banking/theory/regulation-and-basel', 'finance/assets/funds', 'finance/investing-process/costs-taxes-and-platforms'],
}

export default guide
