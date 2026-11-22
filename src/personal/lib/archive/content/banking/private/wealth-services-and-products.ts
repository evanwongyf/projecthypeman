import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Private banks offer a menu: advisory or discretionary management of portfolios, lending against those portfolios, structured products, funds and alternatives, and trust and estate services. Each has a logic, a cost and a way it can go wrong. This guide explains the difference between advisory and discretionary mandates, how portfolios are constructed across asset classes, how a Lombard loan works and when a margin call hits (with arithmetic), how a capital-protected structured note is built from a bond and an option, what alternatives such as private equity and hedge funds add and what they hide, how Singapore’s suitability and accredited-investor rules shape what is offered, and how to read the fees.',
  nutshell: [
    '**Advisory**: the bank recommends, you decide each trade. **Discretionary**: you set objectives and risk limits, and the manager trades without asking. **Execution-only**: no advice.',
    'A **Lombard loan** is a credit line secured by your portfolio: lending value = market value × **advance rate** (for example 60% for equities, 80% for investment-grade bonds). A fall in value triggers a **margin call**.',
    '**Structured products** bundle a bond and derivatives. A 3-year capital-protected note = zero-coupon bond (about 89 at a 4% rate) + options with the remaining 11, minus fees: you give up interest and dividends for the protection, and bear **issuer credit risk**.',
    '**Alternatives** (private equity, hedge funds, real estate, infrastructure) offer diversification and return potential but with **illiquidity, high fees, leverage and opacity**.',
    'In Singapore, product access depends on **accredited-investor** status and **suitability** requirements; complex products require a **Customer Knowledge Assessment** and regulatory safeguards.',
  ],
  sections: [
    {
      id: 'mandates',
      title: 'Advisory, discretionary and execution-only',
      lead: 'Who makes the decision.',
      blocks: [
        {
          t: 'table',
          head: ['Mandate', 'Who decides', 'Fee', 'Best for', 'Risk'],
          rows: [
            ['Execution-only', 'You', 'Commission or spread on each trade', 'Experienced investors who know what they want', 'No advice; your errors'],
            ['Advisory', 'You decide on the bank’s recommendation', 'AUM fee or transaction fees', 'Clients who want involvement; time to engage', 'Slow decisions; product bias; behavioural mistakes'],
            ['Discretionary', 'The manager within your agreed mandate', 'AUM fee (often 0.5 to 1.2%, more for bespoke)', 'Busy clients who want professional management', 'Manager error; need to monitor; fees paid regardless of performance'],
            ['Fund of funds or model portfolio', 'The bank or an external manager selects funds', 'Fund-level plus platform fees', 'Diversified exposure with less work', 'Double layer of fees'],
          ],
        },
        { t: 'p', text: 'Whichever is chosen, the client sets the **investment policy**: objectives (growth, income, preservation), time horizon, risk tolerance and capacity, liquidity needs, constraints and preferences (for example sustainable investing or Shariah compliance). The policy is the benchmark by which the portfolio is judged, not the latest market views.' },
        {
          t: 'math',
          tex: String.raw`\text{Total cost of ownership}=f_{\text{mgmt}}+f_{\text{funds}}+f_{\text{trading}}+f_{\text{custody}}+\text{spread on products}`,
          caption: 'The all-in annual cost of a managed portfolio.',
          where: [{ sym: 'f_{\\text{funds}}', def: 'the expense ratios of funds held inside the portfolio' }, { sym: 'f_{\\text{trading}}', def: 'commissions, bid–ask spreads and FX margins' }],
          syntax: [{ sym: 'f_{\\text{mgmt}}+f_{\\text{funds}}+\\ldots', say: 'add every layer of cost. Effect: a 0.9% management fee on a portfolio of funds with 0.7% expense ratios and 0.3% trading costs costs 1.9% a year. Why: costs sit at several levels and appear in different statements.' }],
          worked: {
            title: 'Is the active mix worth it?',
            steps: ['Passive alternative: index funds at 0.2% all-in. Managed portfolio at 1.9%. Difference 1.7% a year.', 'To break even the managed portfolio must outperform the index by about 1.7 percentage points a year before tax, consistently.', 'Long-run studies find most active managers fail to beat their benchmarks after fees over 10 to 15 years (SPIVA).'],
            answer: 'Ask what you get for the extra cost: access to private markets and credit, advice on planning, risk management, behaviour. Costs are certain; outperformance is not.',
          },
        },
      ],
    },
    {
      id: 'lombard',
      title: 'Lombard lending: borrowing against a portfolio',
      lead: 'Leverage and the margin call.',
      blocks: [
        { t: 'p', text: 'A **Lombard loan** (or margin or portfolio loan) lets clients borrow against securities without selling them, keeping the market exposure and deferring any tax on a sale. The bank lends a fraction of each asset’s market value (the **advance rate**, higher for stable, liquid assets such as government bonds or blue-chip equities, lower for single stocks, funds, structured products and concentrated positions). If the portfolio falls enough that the loan exceeds the lending value, the bank issues a **margin call** and, if it is not met, sells assets.' },
        {
          t: 'math',
          tex: String.raw`\text{Lending value}=\sum_k a_k\,V_k,\qquad \text{margin call if }L>\text{Lending value},\qquad \text{call price}=P_0\frac{L}{a\,V_0}`,
          caption: 'The lending value of a portfolio, the margin-call condition and the portfolio value at which a call occurs when the whole portfolio has a single advance rate.',
          where: [{ sym: 'a_k,\\ V_k', def: 'the advance rate and market value of asset k' }, { sym: 'L', def: 'the loan outstanding (including accrued interest)' }],
          syntax: [{ sym: '\\sum a_kV_k', say: 'each holding is weighted by how much the bank will lend against it. Effect: a portfolio of S$10m in equities with an advance rate of 60% has lending value S$6m. Why: the haircut protects the bank against falls and forced sales.' }, { sym: 'L>\\text{Lending value}', say: 'the trigger. Effect: the more of the line you draw, the less fall the portfolio can take before a call. Why: the buffer is the unused part of the lending value.' }],
          worked: {
            title: 'A S$10 million equity portfolio',
            steps: ['Advance rate 60%: lending value S$6.0m. The client borrows S$5.0m (83% of the line), investing the proceeds in a property deal.', 'Margin call when the portfolio value V satisfies 0.6 V = 5.0 → V = S$8.33m: a fall of only 16.7%.', 'If the client had borrowed S$3m: call at V = 5.0m, a fall of 50%.', 'In a sell-off of 25%, a leveraged account faces a call of S$5m − 0.6 × 7.5m = S$0.5m of extra collateral or repayment, within a day or two.'],
            answer: 'Leverage raises returns and ruin risk together. Banks stress-test portfolios and may reduce advance rates in volatile markets; clients should borrow well below the limit and hold liquid assets to meet calls.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Typical advance rates', tag: 'indicative', body: 'Cash and government bonds 90 to 95%; investment-grade bonds 70 to 85%; large-cap equities 50 to 70%; funds 50 to 70%; hedge funds and structured products 0 to 50%; concentrated positions much lower.' },
            { title: 'Uses', tag: 'why clients borrow', body: 'Liquidity without selling; property purchases; business investment; bridging; leverage for investing. Not a substitute for an emergency fund.' },
            { title: 'Interest', tag: 'cost', body: 'Floating rate, often benchmarked on SORA or a USD rate plus a spread; the cost of borrowing needs to be lower than the after-tax return on the investments.' },
            { title: 'Risk of forced sale', tag: 'worst case', body: 'The bank can liquidate holdings at the worst moment if a call is not met, crystallising losses.' },
          ],
        },
      ],
    },
    {
      id: 'sp',
      title: 'Structured products',
      lead: 'A bond plus an option.',
      blocks: [
        { t: 'p', text: 'A structured product is a package of a bond (a debt note issued by a bank) and one or more derivatives, designed to deliver a particular payoff: capital protection with some upside, enhanced income in return for risk on the downside, or leveraged exposure within limits. The payoff depends on the bank’s promise, so the investor also takes **issuer credit risk**; a Lehman Brothers Minibonds case in 2008 showed what that can mean.' },
        {
          t: 'math',
          tex: String.raw`\text{ZCB}=\frac{100}{(1+y)^{T}},\qquad \text{option budget}=100-\text{ZCB}-\text{fees},\qquad \text{participation}=\frac{\text{option budget}}{\text{price of a 100-notional call}}`,
          caption: 'Building a capital-protected note: a zero-coupon bond that grows to 100 at maturity, with the rest of the money spent on call options for upside.',
          where: [{ sym: 'y', def: 'the issuer’s funding yield for maturity T' }, { sym: 'T', def: 'the term in years' }],
          syntax: [{ sym: '100/(1+y)^T', say: 'the price today of a bond that pays 100 at maturity. Effect: at y = 4% and T = 3 it is 88.90. Why: discounting at the yield; this guarantees the capital (if the issuer survives).' }, { sym: '100-\\text{ZCB}-\\text{fees}', say: 'what is left to buy upside. Effect: 11.10 less a margin of about 2 leaves about 9.1. Why: capital protection is financed by giving up the interest the money could have earned.' }, { sym: '\\text{budget}/\\text{call price}', say: 'the share of the index gain you receive. Effect: if a 3-year at-the-money call costs 18 per 100, you get about 50% of the index gain. Why: you buy as many options as the budget allows.' }],
          worked: {
            title: 'A 3-year 100% capital-protected note on an index',
            steps: ['ZCB at 4%: 100/1.04³ = 88.90. Option budget 100 − 88.90 = 11.10; issuer margin 2.0: 9.10 for options.', 'Call price 18: participation = 9.10/18 = 51%. If the index rises 40% over 3 years, the note pays 100 + 0.51 × 40 = 120.2 (a 6.3% annual return) vs 40% (11.9% a year) in the index.', 'If the index falls, you get back 100: a 0% return over three years while inflation of 2.5% a year erodes about 7% of its value.'],
            answer: 'Protection has a price: the lost interest (about 12.5% over 3 years at 4%) and the partial participation. If rates fall, the zero-coupon bond costs more and participation shrinks. Structured products rarely beat simply holding a bond and an equity fund in the same proportions, once margins are counted.',
          },
        },
        {
          t: 'dodont',
          do: ['Ask for the term sheet and the issuer’s credit rating.', 'Ask what happens if you want to sell early (the secondary price may be well below par).', 'Compare the product with a simple mix of a bond and an equity fund.', 'Understand the worst-case payoff in plain words.'],
          dont: ['Buy a product with a payoff you cannot explain.', 'Assume "capital protected" means "no risk": it relies on the issuer and the full term.', 'Let a single issuer or product dominate your portfolio.'],
        },
      ],
    },
    {
      id: 'alt',
      title: 'Alternatives and the Singapore rules',
      lead: 'Access has conditions.',
      blocks: [
        {
          t: 'table',
          head: ['Alternative', 'What it is', 'Potential benefits', 'Costs and risks'],
          rows: [
            ['Private equity', 'Funds that buy and improve private companies, with 7 to 12 year lock-ups', 'Higher expected returns, access to unlisted firms', 'Illiquid; "2 and 20" fees; wide dispersion between managers; valuations are smoothed'],
            ['Hedge funds', 'Funds with flexibility to short, use leverage and trade derivatives', 'Diversification; absolute-return strategies', 'Fees (1.5 to 2% plus 20% of profits); opacity; some funds fail to beat cheaper alternatives'],
            ['Private credit', 'Direct lending to firms outside banks', 'Higher yield', 'Illiquid; credit losses in downturns; leverage'],
            ['Real estate and infrastructure', 'Property and long-lived assets, directly or through funds', 'Income, inflation linkage', 'Illiquid, concentrated, valuation uncertain'],
            ['Commodities and gold', 'Physical or futures-based exposure', 'Inflation and crisis hedge', 'No cash flow; price swings'],
            ['Digital assets', 'Crypto-assets and tokens', 'Diversification (debated)', 'Very high volatility; regulatory and custody risk; many private banks restrict access'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Accredited investors', tag: 'Singapore', body: 'An individual qualifies as an accredited investor with net personal assets above S$2 million (with the value of the primary residence counted up to S$1 million), or financial assets above S$1 million, or income of at least S$300,000 in the past 12 months. Accredited investors can access more complex products but receive fewer regulatory protections, and may opt out.' },
            { title: 'Suitability', tag: 'Financial Advisers Act', body: 'Advisers must have a reasonable basis for recommending a product to a client, based on their objectives, situation and needs. Complex "specified investment products" need a Customer Knowledge Assessment for retail clients.' },
            { title: 'Fair dealing', tag: 'MAS guidelines', body: 'Outcomes for customers: clients should be able to expect competent advice, fair treatment and clear information. MAS also reviews private banks’ conduct and controls.' },
            { title: 'Disclosure of conflicts', tag: 'transparency', body: 'Ask how the bank and the RM are paid on each product, and whether the product is manufactured by an affiliate.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'This is education, not advice', text: 'Product rules, thresholds and tax treatment change; check MAS, your bank’s documents and an independent adviser for your own circumstances.' },
      ],
    },
  ],
  sources: [
    'Monetary Authority of Singapore. *Financial Advisers Act*; *Securities and Futures Act* (accredited investor definition); *Guidelines on Fair Dealing* (mas.gov.sg).',
    'S&P Dow Jones Indices. *SPIVA Scorecard* (percentage of active funds that underperform their benchmarks).',
    'Hull, J. C. (2022). *Options, Futures, and Other Derivatives* (11th ed.), ch. 18 (structured products). Pearson.',
    'Kaplan, S. N. & Strömberg, P. (2009). Leveraged buyouts and private equity. *Journal of Economic Perspectives*, 23(1).',
    'Henderson, B. J. & Pearson, N. D. (2011). The dark side of financial innovation: a case study of the pricing of a retail financial product. *Journal of Financial Economics*, 100(2).',
  ],
  related: ['banking/private/private-banking-overview', 'banking/private/compliance-kyc-and-tax-transparency', 'finance/assets/options/basics', 'finance/quant/portfolio-theory', 'finance/philosophies/passive'],
}

export default guide
