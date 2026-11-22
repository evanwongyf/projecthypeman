import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A bank’s assets and liabilities reprice at different speeds. Mortgages may be fixed for years while deposits can reprice within weeks, so a change in interest rates changes the bank’s margin, and the value of its fixed-rate holdings. Managing this interest-rate risk in the banking book is one of the central tasks of treasury, and its failure caused the savings-and-loan crisis of the 1980s and contributed to the failure of Silicon Valley Bank in 2023. This guide explains the repricing gap and the effect on net interest income, duration and the effect on economic value, hedging with swaps, how benchmark rates such as Singapore’s SORA work, and what happens to a bank in a rising-rate and a falling-rate world.',
  nutshell: [
    '**Repricing gap**: rate-sensitive assets minus rate-sensitive liabilities over a horizon; \\(\\Delta NII\\approx \\text{Gap}\\times\\Delta r\\). A positive gap gains when rates rise.',
    '**Duration gap**: \\(\\Delta EVE\\approx-(D_A-\\tfrac{L}{A}D_L)\\,A\\,\\Delta y\\). A bank with long assets funded by short liabilities loses economic value when rates rise.',
    'Banks hedge with **interest-rate swaps** (paying fixed, receiving floating), matching repricing, and by **pricing deposits and loans** to manage the gap.',
    '**SORA** (Singapore Overnight Rate Average), a transaction-based overnight rate, replaced SIBOR and SOR as the key benchmark: SOR ceased in June 2023 and SIBOR is being phased out.',
    'Rate rises help a bank with **cheap sticky deposits** and floating-rate loans; they hurt one with **fixed-rate assets funded by flighty deposits** (the SVB pattern).',
  ],
  sections: [
    {
      id: 'gap',
      title: 'The repricing gap and net interest income',
      lead: 'Who reprices first?',
      blocks: [
        {
          t: 'table',
          head: ['Time bucket', 'Rate-sensitive assets', 'Rate-sensitive liabilities', 'Gap'],
          rows: [
            ['Up to 3 months', '28 (floating-rate loans, short placements)', '45 (current and savings accounts, short deposits)', '−17'],
            ['3 to 12 months', '12', '14', '−2'],
            ['1 to 5 years', '22', '8', '+14'],
            ['Over 5 years', '25 (fixed mortgages, bonds)', '3', '+22'],
            ['Non-sensitive', '13', '30 (including equity)', '–'],
          ],
          caption: 'A stylised repricing schedule (S$ billions). The bank is liability-sensitive in the short term: it has more deposits repricing quickly than assets.',
        },
        {
          t: 'math',
          tex: String.raw`\Delta NII\approx\text{Gap}_{\le 12\text{m}}\times\Delta r,\qquad \text{Gap}=RSA-RSL`,
          caption: 'The change in net interest income over a year from a parallel change in rates, using the one-year cumulative repricing gap.',
          where: [{ sym: 'RSA,\\ RSL', def: 'rate-sensitive assets and liabilities that reprice within the horizon' }, { sym: '\\Delta r', def: 'the change in market interest rates' }],
          syntax: [{ sym: 'RSA-RSL', say: 'the net amount repricing. Effect: a negative gap of −19 means 19 more of liabilities than assets reprice within a year. Why: only the repricing items change their income and cost.' }, { sym: '\\text{Gap}\\times\\Delta r', say: 'the effect on income. Effect: with a −19bn gap and rates up 1 percentage point: −S$190 million. Why: extra cost on the liabilities that reprice is not matched by income on assets.' }],
          worked: {
            title: 'A 1 percentage point rise',
            steps: ['Cumulative one-year gap = −17 − 2 = −19 (S$ billion).', '\\(\\Delta NII\\approx-19\\times0.01=-0.19\\) bn: a fall of S$190 million.', 'With deposit "beta" of 0.4 (deposit rates rise only 40% as much as market rates), the cost increase is smaller: the effective gap is less negative.'],
            answer: 'The gap method is simple but ignores how strongly deposit rates follow market rates (the deposit beta) and customer behaviour such as moving to fixed deposits as rates rise; banks model these in detail.',
          },
        },
      ],
    },
    {
      id: 'duration',
      title: 'Duration, economic value and the SVB lesson',
      lead: 'The value of fixed-rate assets falls when rates rise.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{\Delta P}{P}\approx-D_{\text{mod}}\,\Delta y+\tfrac12 C\,(\Delta y)^2,\qquad \Delta EVE\approx-\Big(D_A-\frac{L}{A}D_L\Big)A\,\Delta y`,
          caption: 'The price sensitivity of a bond to yield changes (modified duration and convexity), and the change in a bank’s economic value of equity from a parallel shift in yields.',
          where: [{ sym: 'D_{\\text{mod}}', def: 'modified duration in years: the percentage price change for a 1% (100 bp) change in yield' }, { sym: 'C', def: 'convexity: the curvature of the price–yield relationship' }, { sym: 'D_A,\\ D_L', def: 'duration of assets and liabilities' }, { sym: 'A,\\ L', def: 'market values of assets and liabilities' }],
          syntax: [{ sym: '-D_{\\text{mod}}\\Delta y', say: 'a rise in yields lowers bond prices in proportion to duration. Effect: a bond with duration 6 loses about 6% when yields rise 1 percentage point. Why: future cash flows are discounted at a higher rate.' }, { sym: '(D_A-\\tfrac LA D_L)A', say: 'the dollar duration gap. Effect: if assets have duration 4 and liabilities 0.5 with L/A = 0.92: gap = 4 − 0.46 = 3.54 years on assets of 100 → a loss of 3.54 per 1 point rise in yields (3.5% of assets, 44% of equity if equity is 8). Why: long assets lose value; short liabilities hardly change.' }],
          worked: {
            title: 'A bank with a long bond portfolio',
            steps: ['Bonds of S$30 billion, modified duration 6, yields rise by 2 percentage points: \\(\\Delta P/P=-6\\times0.02=-12\\%\\) (convexity adds back about 0.5 × 60 × 0.0004 = +1.2%): −10.8%, a loss of S$3.2 billion.', 'Against equity of S$8 billion on a S$100 billion balance sheet, that is 40% of equity.', 'If the securities are marked to market, equity drops at once; if held at amortised cost, the loss stays hidden until they are sold or until depositors lose confidence.'],
            answer: 'SVB held a large share of long-dated securities with unrealised losses close to its equity. When deposits left, it would have had to sell the bonds and realise the losses. Duration risk and liquidity risk turn out to be the same risk.',
          },
        },
        {
          t: 'table',
          head: ['Rates', 'Effect on a bank with fixed-rate assets and sticky retail deposits', 'Effect on a bank with fixed-rate assets and flighty or wholesale funding'],
          rows: [
            ['Rise', 'Margin up if deposits reprice slowly; bond values fall (mark to market)', 'Margin squeezed; large unrealised losses; risk of runs'],
            ['Fall', 'Margin squeezed (deposit rates hit a floor); bond gains', 'Funding costs fall; gains on bonds; cushion rises'],
          ],
        },
      ],
    },
    {
      id: 'hedge',
      title: 'Hedging and benchmark rates',
      lead: 'Swaps and SORA.',
      blocks: [
        { t: 'p', text: 'A bank can reduce its gap by changing the mix of fixed and floating assets and liabilities, or by using **interest-rate swaps**. In a pay-fixed, receive-floating swap, the bank pays a fixed rate and receives the floating rate on a notional amount. If it holds fixed-rate mortgages (which lose value when rates rise) and funds them with floating deposits, a pay-fixed swap gains when rates rise and offsets the loss. The swap’s notional does not move: only the net payment is exchanged.' },
        {
          t: 'math',
          tex: String.raw`\text{net swap payment}=N\,(r_{\text{float}}-r_{\text{fixed}})\,\tau,\qquad \text{SORA}\ (\text{compounded})=\Big[\prod_{i=1}^{n}\big(1+\tfrac{r_i\,d_i}{365}\big)-1\Big]\frac{365}{D}`,
          caption: 'The net payment on a pay-fixed swap, and the compounded SORA over a period, the basis of floating-rate loans.',
          where: [{ sym: 'N', def: 'the notional amount' }, { sym: 'r_i,\\ d_i', def: 'the SORA rate on business day i and the number of calendar days it applies (3 over a weekend)' }, { sym: 'D', def: 'the total number of days in the period' }],
          syntax: [{ sym: 'N(r_{\\text{float}}-r_{\\text{fixed}})\\tau', say: 'the net amount for a period of length τ years. Effect: if floating exceeds fixed, the pay-fixed side receives money. Why: the swap exchanges a fixed rate for a floating one.' }, { sym: '\\prod(1+r_id_i/365)', say: 'compounding the daily overnight rate through the period. Effect: the borrower pays what the overnight rate was, in aggregate, rather than a forecast at the start. Why: SORA is a backward-looking rate; the amount is only known at the end of the period.' }],
          worked: {
            title: 'A S$100 million swap',
            steps: ['Pay fixed 3.0%, receive 3-month compounded SORA. In a quarter SORA compounds to 3.6% annualised: net receipt = 100m × (0.036 − 0.030) × 0.25 = S$150,000.', 'If SORA were 2.4%: net payment = 100m × 0.006 × 0.25 = S$150,000 paid.'],
            answer: 'The swap’s gains offset the bank’s losses on its fixed-rate loans when rates rise, and its losses are offset by gains on those loans when rates fall.',
          },
        },
        { t: 'callout', tone: 'note', title: 'The benchmark transition', text: 'After the LIBOR manipulation scandal, regulators moved to rates based on actual transactions. In Singapore, SORA (published by MAS) became the main benchmark; the Swap Offer Rate (SOR) ceased in 2023 and SIBOR is being retired. Singapore home loans and many corporate loans are now priced off compounded SORA plus a spread.' },
      ],
    },
  ],
  sources: [
    'Saunders, A. & Cornett, M. M. (2018). *Financial Institutions Management* (9th ed.), chs. 8–9. McGraw-Hill.',
    'Basel Committee on Banking Supervision (2016). *Interest rate risk in the banking book*, standards (IRRBB).',
    'Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.), ch. 7 (swaps). Pearson.',
    'Monetary Authority of Singapore: SORA and the benchmark transition (mas.gov.sg); Association of Banks in Singapore, Steering Committee for SOR & SIBOR Transition.',
    'Jiang, E. X., Matvos, G., Piskorski, T. & Seru, A. (2023). Monetary tightening and U.S. bank fragility in 2023: mark-to-market losses and uninsured depositor runs? *NBER Working Paper 31048*.',
  ],
  related: ['banking/theory/liquidity-and-runs', 'banking/consumer/mortgages-in-singapore', 'finance/assets/bonds', 'finance/assets/options/pricing', 'banking/theory/central-banking-singapore'],
}

export default guide
