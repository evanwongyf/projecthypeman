import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A company analysis that begins with a valuation spreadsheet has started in the wrong place. The numbers are only as good as the understanding of the business that produces them, so the sequence matters: first understand what the company sells and why customers pay, then how it earns money on each sale, then whether the financial statements confirm the story, then how management uses the cash, and only then what the business is worth. This guide sets out that sequence as a repeatable one-page workflow, with the key measures (return on invested capital, free-cash-flow conversion and the growth that a business can fund itself) and a worked valuation from the value-driver formula that shows how sensitive the result is to the assumptions.',
  nutshell: [
    'The **workflow**: business and market → unit economics → financial quality → management and capital allocation → valuation → risks and what would change your mind.',
    '**ROIC = NOPAT ÷ invested capital**; a business creates value when ROIC exceeds its cost of capital (WACC).',
    '**Sustainable growth** is about **ROIC × reinvestment rate**: a business cannot grow faster than it can fund without raising capital.',
    'The **value-driver formula** \\(V=\\dfrac{\\text{NOPAT}\\,(1-g/\\text{ROIC})}{\\text{WACC}-g}\\) shows how value depends on growth only when ROIC exceeds WACC.',
    '**Check cash**: free cash flow over several years should track net income; a persistent gap is a warning.',
  ],
  sections: [
    {
      id: 'flow',
      title: 'The one-page workflow',
      lead: 'Six sections, in order.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. The business in one paragraph', body: 'What it sells, to whom, why they pay, how it reaches them and who the competitors are. If you cannot explain it simply, you do not understand it yet.' },
            { title: '2. Unit economics', body: 'Revenue and cost per customer, store, subscriber or unit: gross margin, customer acquisition cost against lifetime value, utilisation, same-store growth.' },
            { title: '3. Financial quality', body: 'Five years of revenue, margins, ROIC, free cash flow, debt and share count; does cash flow follow profit?' },
            { title: '4. Management and capital allocation', body: 'Ownership, pay, past decisions on acquisitions, dividends and buybacks; honesty in the reports.' },
            { title: '5. Valuation', body: 'A range of values from several methods (DCF, multiples against history and peers, the reverse DCF) and the margin of safety.' },
            { title: '6. Risks and the thesis-breakers', body: 'The three risks that matter most and the observable signs that the thesis is failing.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{ROIC}=\frac{\text{NOPAT}}{\text{Invested capital}},\quad g=\text{ROIC}\times\text{reinvestment rate},\quad V=\frac{\text{NOPAT}\,(1-g/\text{ROIC})}{\text{WACC}-g}`,
          caption: 'Return on invested capital, the growth it can fund, and the steady-state value-driver formula for enterprise value.',
          where: [{ sym: '\\text{NOPAT}', def: 'net operating profit after tax: EBIT × (1 − tax rate)' }, { sym: '\\text{Invested capital}', def: 'operating assets financed by debt and equity (working capital plus fixed assets)' }, { sym: 'g', def: 'the steady growth rate of NOPAT' }, { sym: '\\text{WACC}', def: 'the weighted average cost of capital' }],
          syntax: [{ sym: '1-g/\\text{ROIC}', say: 'the share of NOPAT that can be paid out after funding growth. Effect: at a given growth rate, a higher ROIC leaves more to distribute. Why: growth requires reinvestment, and the investment needed per unit of growth falls as returns on capital rise.' }],
          worked: {
            title: 'A company with S$1,000 million of revenue',
            steps: ['EBIT margin 15%: EBIT = S$150m; tax 17%: NOPAT = S$124.5m. Invested capital S$800m: ROIC = 15.6%.', 'The company reinvests 40% of NOPAT: g = 15.6% × 0.4 = 6.2%. WACC = 8%.', 'V = 124.5 × (1 − 0.4)/(0.08 − 0.0622) = 74.7/0.0178 = S$4,208m. At g = 5%, V = S$2,817m; at g = 3%, V = S$2,010m.'],
            answer: 'The value moves by a factor of two with a 3-point change in the assumed growth rate, because the denominator (WACC − g) is small. This sensitivity is why a valuation should be a range, and why the reverse DCF (see its guide) asks what growth the price already assumes.',
          },
        },
      ],
    },
    {
      id: 'quality',
      title: 'Financial quality: the tests',
      lead: 'Does the cash confirm the profit?',
      blocks: [
        {
          t: 'table',
          head: ['Test', 'Formula', 'Healthy sign', 'Warning sign'],
          rows: [
            ['Return on invested capital', 'NOPAT ÷ invested capital', 'Above WACC by several points, stable', 'Below WACC; falling'],
            ['Free-cash-flow conversion', 'Free cash flow ÷ net income', 'Near or above 80–100% over several years', 'Repeatedly well below 50%'],
            ['Gross margin stability', 'Gross profit ÷ revenue over time', 'Stable or rising: pricing power', 'Steady decline: price competition or cost inflation'],
            ['Net debt to EBITDA', '(Debt − cash) ÷ EBITDA', 'Below 2–3× for most industries', 'Above 4× or rising'],
            ['Interest cover', 'EBIT ÷ interest expense', 'Above 5×', 'Below 2×'],
            ['Share count', 'Shares outstanding over time', 'Stable or falling', 'Persistent dilution'],
            ['Receivables and inventory growth', 'Compare with revenue growth', 'In line with sales', 'Faster than sales'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Unit economics', tag: 'the engine', body: 'For a subscription business, customer lifetime value over acquisition cost above 3 is often considered healthy; for a retailer, sales per square metre and same-store growth; for a bank, net interest margin and credit costs.' },
            { title: 'Reinvestment runway', tag: 'compounding', body: 'The best businesses can reinvest large amounts at high ROIC for many years; a business with high ROIC but nowhere to reinvest returns cash (a good dividend payer, not a compounder).' },
            { title: 'Capital allocation', tag: 'what management does with cash', body: 'Buybacks above intrinsic value, acquisitions that destroy value and dividends cut in bad years show poor allocation; reinvestment at high ROIC and sensible buybacks show good.' },
            { title: 'Quality of earnings', tag: 'cash against profit', body: 'Operating cash flow persistently below net income, large capitalised costs and frequent "one-off" charges indicate low-quality earnings.' },
          ],
        },
        { t: 'dodont', do: ['Write the thesis in one paragraph first', 'Use several years of data, not one', 'Compare ratios with peers in the same industry'], dont: ['Start with the valuation spreadsheet', 'Rely on reported EBITDA without checking cash flow', 'Assume a high-growth forecast without a funding source'] },
      ],
    },
  ],
  sources: [
    'Koller, T., Goedhart, M. & Wessels, D. (2020). *Valuation: Measuring and Managing the Value of Companies* (7th ed.). Wiley (the value-driver formula, ROIC).',
    'Greenwald, B., Kahn, J., Sonkin, P. & van Biema, M. (2001). *Value Investing: From Graham to Buffett and Beyond*. Wiley.',
    'Mauboussin, M. J. & Callahan, D. (2015). *Calculating Return on Invested Capital*. Credit Suisse / Morgan Stanley Counterpoint Global.',
    'Damodaran, A. (2012). *Investment Valuation*. Wiley.',
  ],
  related: ['finance/fundamental/what-is-fa', 'finance/fundamental/dcf', 'finance/investing-analysis/reverse-dcf-and-expectations'],
}

export default guide
