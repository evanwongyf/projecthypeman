import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A discounted cash flow (DCF) valuation estimates the cash a business will generate in future and converts it to today’s money. It is the most fundamental valuation method, and the most sensitive to its assumptions. We will build one for **Kopi & Co** step by step, then you can run your own.',
  nutshell: [
    'Forecast **free cash flow** for 5–10 years.',
    'Discount it at the **weighted average cost of capital (WACC)**.',
    'Add a **terminal value** for everything after the forecast, usually with the Gordon growth formula.',
    'Subtract net debt and divide by shares to get value per share.',
    'The terminal value is often 60–80% of the total, so its assumptions matter enormously.',
  ],
  sections: [
    {
      id: 'fcf',
      title: 'Step 1: free cash flow to the firm',
      blocks: [
        {
          t: 'math',
          tex: String.raw`FCFF = EBIT(1 - t) + D\&A - \text{CapEx} - \Delta NWC`,
          syntax: [
            { sym: String.raw`EBIT(1 - t)`, say: String.raw`Read "EBIT times one minus t". Work out \(1 - t\) first (the share of profit left after tax), then multiply it by EBIT. This is operating profit after tax.` },
            { sym: String.raw`\Delta NWC`, say: String.raw`Read "delta N-W-C". The triangle \(\Delta\) means "change in", so this is this year’s net working capital minus last year’s. Subtract it when working capital grows, because that cash is tied up.` },
            { sym: String.raw`+ D\&A - \text{CapEx}`, say: 'Read left to right as add, then subtract: add back depreciation (a cost that was not a cash payment), then take away the cash actually spent on equipment and buildings.' },
          ],
          worked: {
            title: 'Harbour Foods, a supermarket chain',
            steps: [
              String.raw`Given: EBIT = $240m, tax rate \(t = 25\%\), D&A = $60m, CapEx = $90m, increase in net working capital = $20m.`,
              String.raw`Tax-adjusted profit: \(240 \times (1 - 0.25) = 240 \times 0.75 = 180\).`,
              String.raw`Add back depreciation: \(180 + 60 = 240\).`,
              String.raw`Subtract the cash spent on shops and equipment: \(240 - 90 = 150\).`,
              String.raw`Subtract the cash tied up in extra stock and receivables: \(150 - 20 = 130\).`,
            ],
            answer: String.raw`\(FCFF = \$130\)m: after tax and reinvestment, the business frees up $130m a year for its lenders and shareholders together, against only $180m of after-tax operating profit.`,
          },
          where: [
            { sym: 'EBIT(1 − t)', def: 'Operating profit after tax (NOPAT)' },
            { sym: String.raw`D\&A`, def: 'Depreciation and amortisation, added back because it is not a cash cost' },
            { sym: String.raw`\text{CapEx}`, def: 'Capital expenditure: cash spent on buildings, equipment and other long-lived assets' },
            { sym: String.raw`\Delta NWC`, def: 'Increase in net working capital (cash tied up in stock and receivables)' },
          ],
          caption: 'The cash left over after the business pays to keep itself running and growing, before anyone decides how to split it between lenders and shareholders. It is this number, not accounting profit, that every DCF discounts, a business can report a healthy profit and still burn cash if CapEx or working-capital needs are high, which is exactly why FCFF can look very different from the net income on the income statement.',
        },
        {
          t: 'math',
          tex: String.raw`FCFF_{\text{Kopi}} = 100(1 - 0.2) + 20 - 35 - 12 = 53`,
          syntax: [
            { sym: String.raw`FCFF_{\text{Kopi}}`, say: 'The subscript just labels which company the figure belongs to; it is not a calculation. Read "FCFF of Kopi".' },
            { sym: String.raw`100(1 - 0.2)`, say: 'A number next to a bracket means multiply: "100 times (1 minus 0.2)", which is 100 times 0.8.' },
          ],
          worked: {
            title: 'Kopi & Co, built from its statements',
            steps: [
              'Given (income statement and cash flow statement): EBIT = 100, tax rate 20%, D&A = 20, CapEx = 35, increase in working capital = 12.',
              String.raw`After-tax operating profit: \(100 \times 0.8 = 80\).`,
              String.raw`Add back depreciation: \(80 + 20 = 100\).`,
              String.raw`Subtract CapEx and the working-capital build: \(100 - 35 - 12 = 53\).`,
              String.raw`Cross-check from the cash flow statement: CFO is 80, but it is after \(10 \times 0.8 = 8\) of after-tax interest, so add that back: \(80 + 8 - 35 = 53\). Both routes agree.`,
            ],
            answer: String.raw`\(FCFF = 53\): about $53m a year is available to everyone who funds Kopi, before any interest is paid.`,
          },
          caption: 'Cash available to all providers of capital, lenders and shareholders, before interest.',
        },
      ],
    },
    {
      id: 'wacc',
      title: 'Step 2: the discount rate (WACC)',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\begin{aligned} r_E &= r_f + \beta\,(E[R_m] - r_f) \\ &= 3\% + 1.1 \times 5.5\% = 9.05\% \end{aligned}`,
          syntax: [
            { sym: String.raw`E[R_m]`, say: 'Read "the expected return on the market". The square brackets with E mean "the long-run average of", so this is the average annual return you expect from the whole stock market.' },
            { sym: String.raw`\beta\,(E[R_m] - r_f)`, say: 'Read "beta times the market risk premium". First subtract the risk-free rate from the market return, then scale the result by beta.' },
            { sym: String.raw`\&=`, say: 'The ampersand only lines the equals signs up in a column; it is layout, not maths. Read each line as "which equals".' },
          ],
          worked: {
            title: 'A cyclical retailer with a high beta',
            steps: [
              String.raw`Given: risk-free rate \(r_f = 4.2\%\), expected market return \(E[R_m] = 9.2\%\), beta \(\beta = 1.4\).`,
              String.raw`Market risk premium: \(9.2\% - 4.2\% = 5.0\%\).`,
              String.raw`Scale by beta: \(1.4 \times 5.0\% = 7.0\%\).`,
              String.raw`Add the risk-free rate: \(r_E = 4.2\% + 7.0\% = 11.2\%\).`,
            ],
            answer: String.raw`\(r_E = 11.2\%\): because the stock swings 40% more than the market, shareholders demand 11.2% a year, well above the 9.2% they would accept from a market-average stock.`,
          },
          where: [
            { sym: 'r_E', def: 'Cost of equity: the return shareholders require' },
            { sym: 'r_f', def: 'Risk-free rate (e.g. a government bond yield)' },
            { sym: String.raw`\beta`, def: 'How much the stock amplifies market moves' },
          ],
          caption: 'Cost of equity from the capital asset pricing model (CAPM): a risk-free rate plus beta times the market risk premium. See [risk and return](@finance/foundations/risk-return). The higher this number comes out, the more shareholders demand to be paid for the risk, and the more it pulls WACC up below.',
        },
        {
          t: 'math',
          tex: String.raw`\begin{aligned} WACC &= \frac{E}{E + D}\,r_E + \frac{D}{E + D}\,r_D\,(1 - t) \\ &= \frac{1200}{1360}(9.05\%) + \frac{160}{1360}(5\%)(0.8) \approx 8.46\% \end{aligned}`,
          syntax: [
            { sym: String.raw`\frac{E}{E + D}`, say: 'Read "E over E plus D": equity as a fraction of all funding. Add the two first, then divide. The equity weight and the debt weight always add to 1.' },
            { sym: String.raw`r_D\,(1 - t)`, say: String.raw`Read "cost of debt times one minus t". The \((1 - t)\) shrinks the interest rate because interest is tax-deductible, so the true cost to the company is lower.` },
            { sym: String.raw`\approx`, say: 'Read "is approximately". The answer has been rounded.' },
          ],
          worked: {
            title: 'A company funded 60% by equity and 40% by debt',
            steps: [
              String.raw`Given: equity \(E = 600\), debt \(D = 400\), cost of equity \(r_E = 10\%\), cost of debt \(r_D = 6\%\), tax rate \(t = 25\%\).`,
              String.raw`Weights: \(E/(E + D) = 600/1000 = 0.6\) and \(D/(E + D) = 400/1000 = 0.4\).`,
              String.raw`Equity part: \(0.6 \times 10\% = 6.0\%\).`,
              String.raw`After-tax cost of debt: \(6\% \times (1 - 0.25) = 4.5\%\), so the debt part is \(0.4 \times 4.5\% = 1.8\%\).`,
              String.raw`Add: \(6.0\% + 1.8\% = 7.8\%\).`,
            ],
            answer: String.raw`\(WACC = 7.8\%\): every investment the company makes must earn more than 7.8% to create value. Notice it is below the 10% cost of equity because cheaper, tax-advantaged debt makes up 40% of the funding.`,
          },
          where: [
            { sym: 'E, D', def: 'Market values of equity (1,200) and debt (160)' },
            { sym: 'r_D', def: 'Cost of debt (5%); interest is tax-deductible, hence (1 − t)' },
          ],
          caption: 'A blend of what equity and debt holders each demand, weighted by how much of the business each funds. See the metric below for how to read the number this produces.',
        },
        {
          t: 'metric',
          name: 'the weighted average cost of capital (WACC)',
          shows: 'The minimum return a company must earn on its investments to satisfy everyone who has given it money, both shareholders (who want a return commensurate with the risk they take) and lenders (who want their interest). It is the single number that converts every future dollar a business might earn into what that dollar is worth today, which is why it is the most consequential, and most argued-over, assumption in a DCF.',
          eli5: 'Imagine a business is funded partly by your own savings and partly by a loan from the bank. The bank wants its 5% interest no matter what; you, having taken on more risk by investing your own cash, want a bigger payoff if things go well. WACC blends what both of you demand, weighted by how much each of you put in, it\'s the "hurdle" the business\'s investments need to clear to be worth doing at all.',
          higher: 'Future cash flows are discounted more heavily, so they are worth less today, every valuation built on this WACC comes out lower. A higher WACC usually reflects a riskier business (a high beta, see [risk and return](@finance/foundations/risk-return)), more expensive debt, or simply higher interest rates across the whole economy. It also raises the bar for which projects are worth investing in: a project must clear this rate of return to create value.',
          lower: 'Future cash flows keep more of their value today, so valuations come out higher. A lower WACC reflects a safer, more stable business, cheaper debt, or a lower interest-rate environment generally, and it also means the company can profitably pursue investments with lower expected returns, since the hurdle is lower.',
          typical: 'Large, stable blue-chip companies often have a WACC around 6–9%; smaller, riskier, more leveraged or more cyclical companies can run 10–15% or higher; a change of just one percentage point in WACC can easily swing a DCF valuation by 15–30%, which is why sensitivity testing (the do/don\'t list below) matters so much.',
        },
      ],
    },
    {
      id: 'tv',
      title: 'Step 3: discounting and terminal value',
      blocks: [
        {
          t: 'math',
          tex: String.raw`EV = \sum_{t=1}^{N}\frac{FCFF_t}{(1 + WACC)^t} + \frac{TV_N}{(1 + WACC)^N},\qquad TV_N = \frac{FCFF_{N+1}}{WACC - g}`,
          syntax: [
            { sym: String.raw`\sum_{t=1}^{N}`, say: 'Read "the sum from t equals 1 to N": do the thing after it for t = 1, t = 2 ... t = N and add the results. Here t is just a counter for the year.' },
            { sym: String.raw`(1 + WACC)^t`, say: String.raw`Read "one plus WACC, to the power t". The little raised t means multiply \((1 + WACC)\) by itself t times. The bigger t is, the bigger the divisor, so distant cash is shrunk more.` },
            { sym: String.raw`FCFF_t`, say: String.raw`Read "FCFF in year t". The subscript picks which year’s cash flow to use.` },
            { sym: String.raw`TV_N = \frac{FCFF_{N+1}}{WACC - g}`, say: String.raw`Read "terminal value at year N equals next year’s FCFF divided by WACC minus g". Subtract g from WACC first, then divide. Note it uses the cash flow of year N + 1, the first year after the forecast.` },
          ],
          worked: {
            title: 'A three-year forecast and a terminal value',
            steps: [
              String.raw`Given: FCFF of 100, 110 and 120 in years 1 to 3 ($m), WACC = 9%, long-run growth \(g = 2\%\).`,
              String.raw`Discount each year: \(100/1.09 = 91.74\), \(110/1.09^2 = 92.58\), \(120/1.09^3 = 92.66\). Sum of the three: \(276.99\).`,
              String.raw`Cash flow of year 4: \(FCFF_4 = 120 \times 1.02 = 122.4\).`,
              String.raw`Terminal value at year 3: \(TV_3 = 122.4 / (0.09 - 0.02) = 122.4 / 0.07 = 1{,}748.57\).`,
              String.raw`Bring it back three years: \(1{,}748.57 / 1.09^3 = 1{,}748.57 / 1.2950 = 1{,}350.22\).`,
              String.raw`Add the two parts: \(EV = 276.99 + 1{,}350.22 = 1{,}627.21\).`,
            ],
            answer: String.raw`\(EV \approx \$1{,}627\)m, and \(1{,}350 / 1{,}627 \approx 83\%\) of it comes from the terminal value, so this valuation is mostly a bet on WACC and g.`,
          },
          where: [
            { sym: 'EV', def: 'Enterprise value: the value of the whole business today' },
            { sym: 'N', def: 'Years in the explicit forecast' },
            { sym: 'TV_N', def: 'Terminal value: everything after year N, collapsed into one lump sum at year N' },
            { sym: 'g', def: 'Long-run growth forever after year N; must be below WACC and should not exceed long-run economic growth' },
          ],
          caption: 'EV is simply every future dollar of cash the business is expected to generate, each discounted back to today. Because TV_N is itself a Gordon-growth value stretching to infinity, it usually dwarfs the explicit forecast, often 60–80% of EV, as in the worked example below, so a DCF is really a bet on the terminal assumptions (WACC and g) much more than on the next five years of forecasts.',
        },
        {
          t: 'plot',
          title: 'What $100 received in year t is worth today',
          x: [0, 30],
          y: [0, 100],
          xLabel: 'Year received (t)',
          yLabel: 'Present value of $100',
          curves: [
            { f: (t: number) => 100 / 1.05 ** t, label: 'Discounted at 5%' },
            { f: (t: number) => 100 / 1.085 ** t, label: 'At 8.5%' },
            { f: (t: number) => 100 / 1.12 ** t, label: 'At 12%' },
          ],
          caption: 'Distant cash is worth much less, and the higher the discount rate, the faster it fades. This is why high-growth companies, whose cash comes later, fall hardest when interest rates rise.',
        },
        {
          t: 'example',
          title: 'Kopi & Co: a five-year DCF',
          lines: [
            { label: 'Assume', text: 'FCFF grows 8% a year for 5 years from 53, then 2.5% forever; WACC 8.5%' },
            { label: 'Years 1–5', text: 'FCFF 57.2, 61.8, 66.8, 72.1, 77.9; present values 52.8, 52.5, 52.3, 52.0, 51.8; sum ≈ 261' },
            { label: 'Terminal', text: '\\(TV_5 = 77.9 \\times 1.025 / (0.085 - 0.025) \\approx 1{,}331\\); today \\(1{,}331 / 1.085^5 \\approx 885\\)' },
            { label: 'EV', text: '\\(261 + 885 \\approx 1{,}146\\) (the terminal value is 77% of it)' },
            { label: 'Equity', text: '\\(1{,}146 - \\text{net debt } 100 = 1{,}046\\), or about **$10.46** a share' },
            { label: 'Verdict', text: 'Below the $12 price: on these assumptions Kopi looks fully valued, not cheap' },
          ],
        },
      ],
    },
    {
      id: 'calc',
      title: 'Run your own',
      blocks: [
        { t: 'fin-tool', tool: 'dcf' },
        {
          t: 'dodont',
          do: ['Build a range: pessimistic, base and optimistic cases.', 'Check the implied terminal multiple (TV ÷ final-year EBITDA) for sense.', 'Use the sensitivity table to see which assumption matters most.'],
          dont: ['Use a terminal growth rate above long-run GDP growth.', 'Trust a single precise number to the cent.', 'Forget that the forecast is the hard part, not the arithmetic.'],
        },
        { t: 'callout', tone: 'fact', title: 'Garbage in, garbage out', text: 'Aswath Damodaran, the NYU professor known as the "dean of valuation", says every valuation is biased and every valuation is wrong; the question is only how wrong. Its value is in making your assumptions visible.' },
      ],
    },
  ],
  sources: [
    'Damodaran, A. (2012). *Investment Valuation* (3rd ed.). Wiley.',
    'Koller, T., Goedhart, M., & Wessels, D. (2020). *Valuation* (7th ed.). Wiley.',
    'Sharpe, W. F. (1964). Capital asset prices: A theory of market equilibrium under conditions of risk. *The Journal of Finance*, 19(3), 425–442.',
  ],
  related: ['finance/fundamental/dividend-models', 'finance/foundations/time-value', 'finance/fundamental/multiples'],
}

export default guide
