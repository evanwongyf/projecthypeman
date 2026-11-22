import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Capital is the cushion that absorbs a bank’s losses before depositors and the public are hurt. It is also the scarcest resource in banking: every dollar of lending needs some capital behind it, and capital is expensive. This guide explains what bank capital is (and is not), how risk-weighted assets scale capital to risk, the Basel capital ratios (CET1, Tier 1, total capital, the leverage ratio and the buffers), why regulators set minimum levels, how much loss a bank can bear, and how capital limits lending, with a worked calculation and the leverage lab.',
  nutshell: [
    '**Capital** is the bank’s equity and similar loss-absorbing instruments: **Common Equity Tier 1 (CET1)** (shares and retained earnings) is the highest quality; **Additional Tier 1** and **Tier 2** (some bonds) are lower quality.',
    '**Risk-weighted assets (RWA)** scale each exposure by its riskiness (for example 0% for government bonds, 35% for prime residential mortgages, 100% for corporate loans under the standardised approach). Capital ratio = capital ÷ RWA.',
    'Basel III minimums: **CET1 4.5%, Tier 1 6%, total 8%** of RWA, plus a **2.5% capital conservation buffer** and other buffers; plus a **leverage ratio** of at least 3% of total exposure, regardless of risk weights.',
    'MAS sets requirements for Singapore banks that are **above the Basel minimums**, and the three local banks hold CET1 ratios of well over 13%.',
    '**Capital is a constraint on lending**: for a given capital, the maximum assets = capital ÷ (risk weight × required ratio).',
  ],
  sections: [
    {
      id: 'what',
      title: 'What capital is',
      lead: 'The loss-absorbing layer.',
      blocks: [
        { t: 'p', text: 'Capital is not cash held in the vault; it is the part of the bank’s funding that does not have to be repaid and that absorbs losses first. A loan loss reduces profit; if profit is insufficient, it reduces retained earnings and equity. When equity is exhausted, losses fall on those lending to the bank: first holders of subordinated debt, then senior creditors, then uninsured depositors, and finally the deposit insurer or the government. Capital rules aim to make the first layers thick enough that this chain rarely reaches the end.' },
        {
          t: 'levels',
          caption: 'The loss-absorption waterfall, from first to bear losses to last.',
          items: [
            { name: 'Profits', body: 'Current earnings (pre-provision profit) are the first line of defence.' },
            { name: 'CET1 capital', body: 'Common shares, retained earnings; absorbs losses on a going-concern basis, can cancel dividends.' },
            { name: 'Additional Tier 1', body: 'Perpetual bonds that convert to equity or are written down at a trigger.' },
            { name: 'Tier 2', body: 'Subordinated debt that absorbs losses at failure (gone-concern).' },
            { name: 'Senior creditors and uninsured depositors', body: 'Bear losses in resolution (bail-in) if capital is exhausted.' },
            { name: 'Deposit insurance and government', body: 'The last resort; intended to be rarely reached.' },
          ],
        },
      ],
    },
    {
      id: 'rwa',
      title: 'Risk-weighted assets and capital ratios',
      lead: 'Scaling capital to risk.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{RWA}=\sum_i w_i\,E_i,\qquad \text{CET1 ratio}=\frac{\text{CET1 capital}}{\text{RWA}},\qquad \text{leverage ratio}=\frac{\text{Tier 1 capital}}{\text{total exposure}}`,
          caption: 'Risk-weighted assets as the sum of exposures times their risk weights, the CET1 ratio and the leverage ratio.',
          where: [{ sym: 'E_i', def: 'the exposure at default of asset class i' }, { sym: 'w_i', def: 'the risk weight (for example 0, 0.2, 0.35, 0.5, 1.0, 1.5 under the standardised approach)' }],
          syntax: [{ sym: 'w_iE_i', say: 'the exposure scaled by risk. Effect: S$100 of government bonds count for nothing; S$100 of corporate loans count as 100. Why: riskier assets need more capital behind them.' }, { sym: '\\text{CET1}/\\text{RWA}', say: 'capital as a fraction of risk-adjusted exposure. Effect: a bank can raise its ratio by adding capital or by shifting into lower-weighted assets. Why: both numerator and denominator can be managed; this is why a leverage ratio, which ignores risk weights, is a backstop.' }],
          worked: {
            title: 'A bank’s CET1 ratio',
            steps: ['Exposures: government bonds 20 (weight 0%), interbank 12 (20%), residential mortgages 25 (35%), corporate loans 30 (100%), other assets 13 (100%): total assets 100.', 'RWA = 0 + 2.4 + 8.75 + 30 + 13 = 54.15.', 'CET1 capital 7.0: CET1 ratio = 7.0/54.15 = 12.9%.', 'Leverage ratio (Tier 1 8.0 / assets 100) = 8%.'],
            answer: 'The bank has 100 of assets but only 54 of risk-weighted assets, so a CET1 ratio of 12.9% comfortably exceeds the Basel minimum plus buffers (7%). The simple leverage ratio is 8%, above the 3% floor.',
          },
        },
        {
          t: 'table',
          head: ['Requirement (Basel III)', 'Minimum', 'Notes'],
          rows: [
            ['CET1 ratio', '4.5% of RWA', 'Highest-quality capital'],
            ['Tier 1 ratio', '6% of RWA', 'CET1 plus Additional Tier 1'],
            ['Total capital ratio', '8% of RWA', 'Tier 1 plus Tier 2'],
            ['Capital conservation buffer', '+2.5% CET1', 'Restricts dividends and bonuses if breached'],
            ['Countercyclical buffer', '0 to 2.5% CET1', 'Raised when credit grows too fast'],
            ['G-SIB / D-SIB surcharge', '1 to 3.5% CET1 (varies)', 'For systemically important banks'],
            ['Leverage ratio', '3% of exposure (higher for G-SIBs)', 'Non-risk-based backstop'],
          ],
          caption: 'Basel Committee framework. Singapore’s requirements for locally incorporated banks are set by MAS (Notice 637) and are higher than these minimums; the D-SIBs also face extra requirements. Check MAS for the current figures.',
        },
      ],
    },
    {
      id: 'limits',
      title: 'Capital as a limit on lending',
      lead: 'How much can a bank lend?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`A_{\max}=\frac{K}{\bar w\,\rho},\qquad \Delta A_{\max}=\frac{\Delta K}{\bar w\,\rho}`,
          caption: 'The maximum balance sheet a bank can support given its capital K, the average risk weight and the required capital ratio ρ.',
          where: [{ sym: 'K', def: 'available CET1 capital' }, { sym: '\\bar w', def: 'the average risk weight of the assets' }, { sym: '\\rho', def: 'the capital ratio the bank must hold, including buffers and management cushion' }],
          syntax: [{ sym: 'K/(\\bar w\\rho)', say: 'capital divided by the capital needed per dollar of assets. Effect: with K = 10, average weight 0.55 and required 12%, the bank can hold 10/(0.55×0.12) = 151 of assets. Why: each dollar of assets needs \\(0.55\\times0.12=0.066\\) of capital.' }],
          worked: {
            title: 'A tightening of the requirement',
            steps: ['Capital 10, average weight 0.55, required ratio 12%: maximum assets 151.5.', 'If the required ratio rises to 14%: 10/(0.55 × 0.14) = 129.9, a cut of 21.6 (14%).', 'The bank can restore lending by raising about 1.7 of new capital, retaining earnings, or shifting to lower-weight assets such as mortgages or government bonds.'],
            answer: 'Higher capital requirements restrain lending in the short term unless banks have a buffer, which is why regulators phase in new rules and release countercyclical buffers in a downturn.',
          },
        },
        { t: 'bank-viz', viz: 'leverage' },
        {
          t: 'dodont',
          do: ['Judge a bank by CET1 ratio, leverage ratio, loan quality and profitability together.', 'Read capital ratios with the risk-weight methodology: internal models can lower RWA.', 'Look at stress-test results, which show how the capital ratio might fall in a downturn.'],
          dont: ['Treat a high ratio as proof of safety without checking assets and funding.', 'Assume bank capital equals cash held: it is funding that absorbs losses.', 'Confuse capital requirements with reserve requirements.'],
        },
      ],
    },
  ],
  sources: [
    'Basel Committee on Banking Supervision (2011, revised 2017). *Basel III: A global regulatory framework for more resilient banks and banking systems*.',
    'Monetary Authority of Singapore. *Notice 637: Notice on Risk Based Capital Adequacy Requirements for Banks Incorporated in Singapore*.',
    'Admati, A. & Hellwig, M. (2013). *The Bankers’ New Clothes*. Princeton University Press.',
    'Gorton, G. & Winton, A. (2017). Liquidity provision, bank capital, and the macroeconomy. *Journal of Money, Credit and Banking*, 49(1).',
    'DBS Group, OCBC and UOB Pillar 3 disclosures (capital ratios and risk-weighted assets).',
  ],
  related: ['banking/theory/what-banks-do', 'banking/theory/regulation-and-basel', 'banking/theory/credit-risk', 'banking/theory/liquidity-and-runs', 'finance/fundamental/dupont'],
}

export default guide
