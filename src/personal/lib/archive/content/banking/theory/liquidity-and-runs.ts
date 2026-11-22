import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A solvent bank can still fail. If enough depositors want their money at once, the bank, whose loans cannot be called in, runs out of cash and must sell assets in a hurry at a loss. This is a bank run, and fear alone can cause it. This guide explains the Diamond–Dybvig model of why runs happen, how deposit insurance and central-bank lending stop them, the modern liquidity rules (the Liquidity Coverage Ratio and Net Stable Funding Ratio), what happened at Silicon Valley Bank in March 2023, and how Singapore’s deposit insurance works, with a run simulator.',
  nutshell: [
    '**Banks are illiquid by design**: demandable deposits fund long loans, so there is always a coordination problem: if others withdraw, you want to withdraw too.',
    '**Diamond and Dybvig (1983)** show that banks have two equilibria: a good one (nobody runs) and a bad one (everyone runs, self-fulfilling), and that **deposit insurance** can eliminate the bad one.',
    '**Liquidity Coverage Ratio (LCR)** = high-quality liquid assets ÷ net cash outflows over 30 days of stress, ≥ 100%; **Net Stable Funding Ratio (NSFR)** = available stable funding ÷ required stable funding, ≥ 100%.',
    '**SVB (March 2023)**: concentrated, mostly **uninsured** depositors withdrew about US$42 billion in a day through digital channels; the bank had interest-rate losses on its bond holdings and failed within 48 hours.',
    '**Singapore:** the SDIC insures eligible Singapore-dollar deposits up to **S$100,000** per depositor per bank; MAS provides liquidity facilities.',
  ],
  sections: [
    {
      id: 'dd',
      title: 'Why runs happen: Diamond–Dybvig',
      lead: 'Self-fulfilling panics.',
      blocks: [
        { t: 'p', text: 'Imagine a bank with deposits of 100, financed 10 in liquid assets and 90 in loans that are worth 90 if held to maturity but only 60 if sold today (a fire-sale price). Each depositor is promised a dollar on demand. If few withdraw, the bank pays from cash and is fine. If 30 want their money, the bank can pay 10 from cash, then must sell loans: to raise 20 it must sell loans with a book value of \\(20/0.667=30\\). That erodes the value left for those who wait, and suddenly waiting looks unwise. If a depositor thinks others will run, running is the best response: the belief is self-fulfilling.' },
        {
          t: 'math',
          tex: String.raw`\text{Pay-out if run share }w:\ \ \text{required asset sales}=\frac{\max(0,\,w-\ell)}{1-d},\qquad \text{cover ratio}=\frac{A-\ell\!_{\text{used}}-\text{sales}}{1-w}`,
          caption: 'Fire-sale arithmetic: to pay a fraction w of deposits, a bank uses its liquid assets ℓ, then sells other assets at a discount d.',
          where: [{ sym: 'w', def: 'the fraction of deposits withdrawn' }, { sym: '\\ell', def: 'liquid assets as a fraction of deposits' }, { sym: 'd', def: 'the fire-sale discount on illiquid assets' }, { sym: 'A', def: 'total assets as a fraction of deposits (1 plus capital)' }],
          syntax: [{ sym: '(w-\\ell)/(1-d)', say: 'the book value of assets that must be sold. Effect: a discount of 25% means 1.33 of book value is sold for each 1 of cash. Why: assets are marked down in a fire sale.' }, { sym: '\\text{cover ratio}', say: 'assets per dollar owed to remaining depositors. Effect: it falls as a run grows; below 1, those who wait are not fully paid, which encourages more to run. Why: sales at a discount destroy value that belongs to those who stay.' }],
          worked: {
            title: 'The numbers in the model',
            steps: ['Deposits 100, liquid 10, other assets 98 (capital 8), fire-sale price 75% (d = 25%).', 'A run of 30%: pay 30, use 10 cash, sell 20/0.75 = 26.7 of book assets. Remaining assets 98 − 26.7 = 71.3 for deposits of 70: cover 1.02.', 'A run of 50%: pay 50, sell 40/0.75 = 53.3: remaining assets 44.7 for deposits of 50: cover 0.89 (the bank cannot repay fully).'],
            answer: 'The bank can pay all depositors in full only up to a run of about 34% of deposits; beyond that those who wait are not fully covered. Raising liquid assets, capital, or the central bank’s willingness to lend against the loans (so they need not be sold at a discount) shifts the threshold upward.',
          },
        },
        { t: 'bank-viz', viz: 'bank-run' },
      ],
    },
    {
      id: 'tools',
      title: 'The defences against runs',
      lead: 'Insurance, liquidity rules, lender of last resort.',
      blocks: [
        {
          t: 'table',
          head: ['Defence', 'How it works', 'Limitation'],
          rows: [
            ['Deposit insurance', 'Insured depositors know they are paid whatever happens, so they have no reason to run', 'Covers only small deposits; creates moral hazard (banks take more risk); large depositors can still run'],
            ['Lender of last resort', 'The central bank lends to solvent banks against good collateral (Bagehot’s rule: lend freely at a penalty rate)', 'Hard to tell solvent from insolvent in a panic; stigma of borrowing'],
            ['Liquidity requirements (LCR, NSFR)', 'Banks hold enough liquid assets for 30 days of stress and stable funding for a year', 'Depend on assumptions about run rates; liquid assets can be sold at a loss if interest rates have risen'],
            ['Capital', 'A solvency cushion reassures depositors', 'Does not provide cash'],
            ['Suspension and resolution tools', 'Authorities can freeze or restructure a failing bank to protect the system', 'Costly and politically hard'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{LCR}=\frac{\text{HQLA}}{\text{net cash outflows over 30 days}}\ge100\%,\qquad \text{NSFR}=\frac{\text{available stable funding}}{\text{required stable funding}}\ge100\%`,
          caption: 'The Basel III liquidity ratios.',
          where: [{ sym: '\\text{HQLA}', def: 'high-quality liquid assets: cash, central-bank reserves, government bonds' }],
          syntax: [{ sym: '\\text{LCR}\\ge100\\%', say: 'the bank can survive 30 days of stress without outside help. Effect: outflow assumptions (for example 3 to 10% of retail deposits, 25 to 100% of wholesale funding) decide the required buffer. Why: the rule is a stress test of cash.' }, { sym: '\\text{NSFR}', say: 'long-term assets must be funded by long-term stable sources. Effect: limits reliance on short-term wholesale funding. Why: it addresses the mismatch that causes runs.' }],
          worked: {
            title: 'An LCR calculation',
            steps: ['HQLA 12 (cash and government bonds). Retail deposits 60 with a 5% run-off assumption → 3 outflow; wholesale deposits 14 with a 40% run-off → 5.6; other 2 → 2; total outflows 10.6; inflows 2.0 (capped).', 'Net outflows = 10.6 − 2.0 = 8.6. LCR = 12/8.6 = 140%.'],
            answer: 'The bank passes comfortably. A high retail deposit share and a stock of government bonds improve the ratio; funding with short-term wholesale deposits worsens it.',
          },
        },
      ],
    },
    {
      id: 'svb',
      title: 'Case study: Silicon Valley Bank, March 2023',
      lead: 'A modern run, in a day.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'The setting', body: 'SVB served start-ups and venture funds. Deposits tripled in two years (to about US$190 billion at the 2022 peak), mostly large, uninsured balances (about 94% above the US$250,000 insurance limit). It invested heavily in long-dated bonds when interest rates were low.' },
            { title: 'The loss', body: 'As rates rose sharply in 2022, the bonds fell in value: unrealised losses of about US$15 billion on securities held to maturity, approaching its equity. Customers began to draw down deposits as start-up funding slowed.' },
            { title: 'The trigger', body: 'On 8 March 2023 SVB announced a loss on bond sales and a plan to raise capital. Venture investors told portfolio companies to withdraw. On 9 March customers tried to withdraw about US$42 billion, one quarter of deposits, in a day, with the app and social media accelerating the run.' },
            { title: 'The failure', body: 'Regulators closed SVB on 10 March. Authorities then guaranteed all deposits to prevent contagion.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Lessons', text: 'Interest-rate risk and liquidity risk are linked: held-to-maturity accounting hid losses; uninsured, concentrated, networked depositors can run in hours rather than days; and digital banking speeds runs. Regulators since have revisited liquidity assumptions, stress tests and deposit-insurance coverage.' },
      ],
    },
    {
      id: 'sg',
      title: 'Deposit insurance in Singapore',
      lead: 'SDIC.',
      blocks: [
        { t: 'p', text: 'The **Singapore Deposit Insurance Corporation** administers the Deposit Insurance Scheme, which protects eligible Singapore-dollar deposits (savings, current, fixed deposits, and some other products) up to **S$100,000 per depositor per Scheme member** (the limit was raised from S$75,000 in April 2024); Singapore-dollar deposits placed under the CPF Investment Scheme and the Supplementary Retirement Scheme are insured separately up to S$100,000. Foreign-currency deposits, structured deposits, investment products and insurance policies are not covered. The scheme is funded by premiums from member banks and finance companies. The Monetary Authority of Singapore also has powers to provide liquidity and to resolve failing banks.' },
        {
          t: 'math',
          tex: String.raw`\text{insured}=\min(B,\ 100{,}000),\qquad \text{uninsured}=\max(0,\ B-100{,}000)\ \ (\text{per depositor, per member bank})`,
          caption: 'How the Singapore deposit insurance limit applies to a depositor’s balance B at one bank.',
          where: [{ sym: 'B', def: 'the depositor’s total insured-type balance at one Scheme member' }],
          syntax: [{ sym: '\\min(B,100{,}000)', say: 'the covered amount. Effect: a balance of S$60,000 is fully protected; a balance of S$250,000 has S$100,000 protected and S$150,000 exposed to bank failure risk. Why: the limit is per depositor per member, not per account.' }, { sym: 'B-100{,}000', say: 'the uninsured part. Effect: this part ranks as an ordinary unsecured claim in a failure and may be partly lost. Why: insurance is a limited safety net, designed to protect small savers.' }],
          worked: {
            title: 'Spreading balances',
            steps: ['A saver has S$180,000 in cash. All in one bank: S$100,000 insured, S$80,000 not.', 'Split across two Scheme members, S$90,000 each: all S$180,000 insured.', 'Joint accounts are insured separately, up to the limit for each depositor’s share (see SDIC rules).'],
            answer: 'Because the limit is per bank, savers with more than S$100,000 can spread deposits across members. Banks in the same group may count as a single member, so check SDIC’s list of members.',
          },
        },
        { t: 'callout', tone: 'tip', title: 'What the limit does not mean', text: 'Insurance protects against the failure of a bank, not against inflation, currency moves or investment losses. Most Singapore savers’ balances are below the limit; businesses and wealthy individuals rely on the strength of the bank itself.' },
      ],
    },
  ],
  sources: [
    'Diamond, D. W. & Dybvig, P. H. (1983). Bank runs, deposit insurance, and liquidity. *Journal of Political Economy*, 91(3), 401–419.',
    'Bagehot, W. (1873). *Lombard Street: A Description of the Money Market*.',
    'Basel Committee on Banking Supervision (2013). *Basel III: The Liquidity Coverage Ratio and liquidity risk monitoring tools*; (2014) *The Net Stable Funding Ratio*.',
    'Federal Reserve Board (2023). *Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank* (Barr report), April 2023.',
    'Singapore Deposit Insurance Corporation (sdic.org.sg): coverage, limits and members.',
    'Gorton, G. (2010). *Slapped by the Invisible Hand: The Panic of 2007*. Oxford University Press.',
  ],
  related: ['banking/theory/capital-and-leverage', 'banking/theory/regulation-and-basel', 'banking/consumer/deposits-and-interest', 'banking/theory/interest-rate-and-market-risk', 'cybersecurity/maths-and-reasoning/attacker-economics'],
}

export default guide
