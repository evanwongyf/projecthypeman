import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A dollar today is worth more than a dollar next year, because today’s dollar can be invested and earn a return. This single idea, the **time value of money**, underlies interest, loans, pensions, bond prices and every valuation model in finance.',
  nutshell: [
    '**Future value**: \\(FV = PV(1 + r)^n\\). **Present value**: \\(PV = FV/(1 + r)^n\\).',
    'Compounding more often grows money slightly faster; continuous compounding gives \\(e^{rn}\\).',
    'An **annuity** is a stream of equal payments; its value comes from summing a geometric series.',
    'The **rule of 72**: money doubles in about \\(72 / (\\text{rate in }\\%)\\) years.',
    'Time is the most powerful ingredient: starting early beats contributing more later.',
  ],
  sections: [
    {
      id: 'compound',
      title: 'Compounding',
      blocks: [
        {
          t: 'math',
          tex: String.raw`FV = PV\,(1 + r)^n`,
          syntax: [
            { sym: String.raw`(1 + r)^n`, say: String.raw`Read "one plus r, to the power n": multiply (1 + r) by itself n times. Each factor is one period of growth.` },
            { sym: String.raw`FV, PV`, say: String.raw`Read "F V" and "P V" as letters. The same thing happens to the money in both; only the date differs.` },
          ],
          worked: {
            steps: [
              String.raw`Given: \(PV = \$2{,}500\), \(r = 5\% = 0.05\) per year, \(n = 8\) years.`,
              String.raw`Growth factor for one year: \(1 + r = 1.05\).`,
              String.raw`Over eight years: \(1.05^8 \approx 1.4775\).`,
              String.raw`Multiply: \(FV = 2{,}500 \times 1.4775 \approx \$3{,}693.64\).`,
            ],
            answer: String.raw`The $2,500 grows to about $3,694, of which $1,194 is interest (simple interest would give only $3,500).`,
          },
          where: [
            { sym: 'PV', def: 'Present value: the amount today' },
            { sym: 'r', def: 'Interest rate per period (as a decimal: 6% = 0.06)' },
            { sym: 'n', def: 'Number of periods' },
          ],
          caption: 'Each year, interest is earned on the original amount and on all the interest already earned.',
        },
        {
          t: 'example',
          title: '$1,000 at 6% for 10 years',
          lines: [
            { label: 'Simple interest', text: '\\(1000 + 10 \\times 60 = \\$1{,}600\\)' },
            { label: 'Compound', text: '\\(1000 \\times 1.06^{10} = \\$1{,}790.85\\)' },
            { label: 'Difference', text: '$190.85 of "interest on interest"' },
          ],
        },
        {
          t: 'plot',
          title: '$1,000 at 6%: simple versus compound interest',
          x: [0, 40],
          y: [0, 11000],
          xLabel: 'Years',
          yLabel: 'Value ($)',
          curves: [
            { f: (t: number) => 1000 * (1 + 0.06 * t), label: 'Simple interest', dashed: true },
            { f: (t: number) => 1000 * 1.06 ** t, label: 'Compound interest' },
          ],
          points: [{ x: 40, y: 1000 * 1.06 ** 40, label: '$10,286' }],
          caption: 'After 40 years, compounding gives more than three times as much as simple interest ($3,400).',
        },
      ],
    },
    {
      id: 'frequency',
      title: 'Compounding frequency and e',
      blocks: [
        {
          t: 'math',
          tex: String.raw`FV = PV\left(1 + \frac{r}{m}\right)^{mn},\qquad EAR = \left(1 + \frac{r}{m}\right)^{m} - 1`,
          syntax: [
            { sym: String.raw`\frac{r}{m}`, say: String.raw`Split the annual rate evenly across m periods in the year: the rate applied each period.` },
            { sym: String.raw`^{mn}`, say: String.raw`The exponent is m times n: the total number of compounding periods over n years.` },
            { sym: String.raw`\text{EAR}`, say: String.raw`Read "E A R": the effective annual rate, the single yearly rate that would give the same result as compounding m times. The "minus 1" strips out the original principal.` },
          ],
          worked: {
            steps: [
              String.raw`Given: $10,000 at a quoted 6% a year, compounded quarterly (\(m = 4\)), for \(n = 3\) years.`,
              String.raw`Rate per quarter: \(r/m = 0.06/4 = 0.015\). Number of quarters: \(mn = 12\).`,
              String.raw`\(FV = 10{,}000 \times 1.015^{12} \approx 10{,}000 \times 1.19562 = \$11{,}956.18\).`,
              String.raw`EAR: \(1.015^4 - 1 \approx 0.06136\).`,
            ],
            answer: String.raw`The account ends at about $11,956, and the effective yearly rate is 6.14%, slightly above the quoted 6% because interest earns interest within the year.`,
          },
          where: [
            { sym: 'm', def: 'Compounding periods per year (12 = monthly)' },
            { sym: 'EAR', def: 'Effective annual rate: what you actually earn in a year' },
          ],
          caption: 'A credit card charging 24% a year, compounded monthly, has an EAR of (1.02)¹² − 1 ≈ 26.8%.',
        },
        {
          t: 'math',
          tex: String.raw`\lim_{m\to\infty}\left(1 + \frac{r}{m}\right)^{m} = e^{r}\qquad\Longrightarrow\qquad FV = PV\,e^{rn}`,
          syntax: [
            { sym: String.raw`\lim_{m\to\infty}`, say: String.raw`Read "the limit as m tends to infinity": see what value the expression settles towards as m grows without bound (compounding more and more often).` },
            { sym: String.raw`e^{r}`, say: String.raw`Read "e to the r": e is the constant 2.71828... and \(e^r\) is the growth factor for one year with continuous compounding.` },
            { sym: String.raw`\Longrightarrow`, say: String.raw`Read "therefore" or "implies": the right-hand statement follows from the left.` },
          ],
          worked: {
            steps: [
              String.raw`Given: $1,000, quoted rate 6%, 10 years.`,
              String.raw`Annual compounding: \(1{,}000 \times 1.06^{10} \approx \$1{,}790.85\).`,
              String.raw`Monthly compounding: \(1{,}000 \times (1 + 0.06/12)^{120} \approx \$1{,}819.40\).`,
              String.raw`Continuous: \(FV = 1{,}000 \times e^{0.06 \times 10} = 1{,}000 \times e^{0.6} \approx \$1{,}822.12\).`,
            ],
            answer: String.raw`Compounding more often helps only a little: the continuous limit ($1,822) is just $31 above annual compounding over a decade.`,
          },
          caption: 'Continuous compounding. Jacob Bernoulli discovered the constant e ≈ 2.71828 in 1683 by asking exactly this question about interest.',
        },
        { t: 'callout', tone: 'fact', title: 'e was found through interest', text: 'Bernoulli asked: if a bank paid 100% interest compounded more and more often, how much would $1 grow to in a year? Yearly gives $2, monthly $2.613, daily $2.7146, and the limit is e. One of the most important numbers in mathematics came from a question about money.' },
      ],
    },
    {
      id: 'pv',
      title: 'Present value and discounting',
      blocks: [
        {
          t: 'math',
          tex: String.raw`PV = \frac{FV}{(1 + r)^n}`,
          syntax: [
            { sym: String.raw`\frac{FV}{(1+r)^n}`, say: String.raw`Divide the future amount by the growth factor: this is compounding run in reverse.` },
            { sym: String.raw`(1 + r)^n`, say: String.raw`Read "one plus r to the n": the n periods of growth that the money would have needed to reach FV.` },
          ],
          worked: {
            steps: [
              String.raw`Given: you are promised \(FV = \$10{,}000\) in \(n = 5\) years and your discount rate is \(r = 8\%\).`,
              String.raw`Growth factor: \(1.08^5 \approx 1.46933\).`,
              String.raw`Divide: \(PV = \frac{10{,}000}{1.46933} \approx \$6{,}805.83\).`,
              String.raw`Check by compounding forwards: \(6{,}805.83 \times 1.08^5 \approx 10{,}000\).`,
            ],
            answer: String.raw`The promise is worth about $6,806 today: you would be indifferent between that sum now and $10,000 in five years at an 8% required return.`,
          },
          where: [
            { sym: 'FV', def: 'Future value: the amount at a future date' },
            { sym: 'r', def: 'Discount rate per period' },
            { sym: 'n', def: 'Number of periods until FV arrives' },
          ],
          caption: 'Discounting runs compounding backwards: $1,790.85 in 10 years, at 6%, is worth $1,000 today. The bigger r or n gets, the smaller PV becomes relative to FV, a dollar promised decades away at a high discount rate can be worth almost nothing today, which is exactly why the choice of r (below) can make or break a valuation.',
        },
        {
          t: 'metric',
          name: 'the discount rate (r)',
          shows: 'How much the market charges to wait: the return you give up, or the risk you take on, by not having cash in hand today. It is not one universal number, a government bond uses a low r (money is nearly certain to arrive), a risky startup investment uses a high r (the cash might never arrive at all). Every DCF valuation, bond price and loan payment on this shelf is built on choosing r correctly.',
          eli5: 'It is the "waiting fee" the future has to pay to be worth as much as money in your hand right now. A promise of \\(\\$100\\) next year is only worth \\(\\$100\\) today if waiting costs nothing, but waiting is never free, so that promise is worth a bit less today.',
          higher: 'Future money is discounted harder, so it is worth much less today. A higher r is used for riskier, less certain or longer-away cash flows (a risky startup, a 30-year bond), the same promised $1,000 in 10 years is worth only $386 at r = 10%, versus $744 at r = 3%.',
          lower: 'Future money keeps more of its value today. A lower r reflects safer, more certain or sooner cash flows (cash in a savings account, a government bond), patient, low-risk money is "charged" less for waiting.',
          typical: 'For a single stock or project, r is often built from the risk-free rate (government bonds, ~3–5%) plus a risk premium for how uncertain the cash flow is, see [CAPM](@finance/foundations/risk-return) for how that premium is set.',
        },
        {
          t: 'plot',
          title: 'Present value of $1,000 received in n years',
          x: [0, 40],
          y: [0, 1000],
          xLabel: 'Years until received',
          yLabel: 'Worth today ($)',
          curves: [
            { f: (n: number) => 1000 / 1.03 ** n, label: 'r = 3%' },
            { f: (n: number) => 1000 / 1.07 ** n, label: 'r = 7%' },
            { f: (n: number) => 1000 / 1.12 ** n, label: 'r = 12%' },
          ],
        },
      ],
    },
    {
      id: 'annuities',
      title: 'Annuities: regular payments',
      blocks: [
        {
          t: 'math',
          tex: String.raw`FV = PMT\left[1 + (1+r) + (1+r)^2 + \cdots + (1+r)^{n-1}\right] = PMT\cdot\frac{(1+r)^n - 1}{r}`,
          syntax: [
            { sym: String.raw`1 + (1+r) + (1+r)^2 + \cdots + (1+r)^{n-1}`, say: String.raw`The three dots mean "and so on": keep adding terms, each one more factor of (1+r), until the last. The first payment made earns for the longest, the last earns nothing.` },
            { sym: String.raw`\frac{(1+r)^n - 1}{r}`, say: String.raw`The closed form of that series: work out \((1+r)^n\), subtract 1, divide by r. It saves adding all n terms by hand.` },
          ],
          worked: {
            steps: [
              String.raw`Given: save \(PMT = \$300\) a month at 6% a year, i.e. \(r = 0.06/12 = 0.005\) per month, for 20 years (\(n = 240\)).`,
              String.raw`Growth factor: \((1.005)^{240} \approx 3.31020\).`,
              String.raw`Numerator: \(3.31020 - 1 = 2.31020\); divide by r: \(2.31020 / 0.005 \approx 462.04\).`,
              String.raw`Multiply: \(FV = 300 \times 462.04 \approx \$138{,}612\).`,
            ],
            answer: String.raw`Paying in $72,000 (\(300 \times 240\)) grows to about $138,600, so roughly $66,600 of the pot is interest earned on interest.`,
          },
          where: [
            { sym: 'PMT', def: 'The equal payment made each period' },
            { sym: 'r', def: 'Interest rate per period' },
            { sym: 'n', def: 'Number of payments' },
          ],
          caption: 'Saving PMT at the end of each period. The bracket is a geometric series with ratio (1 + r): read the result as "what a steady savings habit grows into", and notice it grows faster than just PMT × n because each earlier payment keeps earning on itself, the same compounding at work in the very first formula on this page.',
        },
        {
          t: 'math',
          tex: String.raw`PV = PMT\cdot\frac{1 - (1+r)^{-n}}{r}`,
          syntax: [
            { sym: String.raw`(1+r)^{-n}`, say: String.raw`A negative exponent means "one over": \((1+r)^{-n} = 1/(1+r)^n\), the discount factor for n periods.` },
            { sym: String.raw`1 - (1+r)^{-n}`, say: String.raw`One minus the discount factor. Dividing by r then adds up all the individual discount factors in a single step.` },
          ],
          worked: {
            steps: [
              String.raw`Given: a car loan repaid at \(PMT = \$400\) a month for 5 years (\(n = 60\)) at 6% a year, so \(r = 0.005\) per month.`,
              String.raw`Discount factor: \(1.005^{-60} = 1/1.34885 \approx 0.74137\).`,
              String.raw`Numerator: \(1 - 0.74137 = 0.25863\).`,
              String.raw`Divide by r: \(0.25863 / 0.005 \approx 51.7256\).`,
              String.raw`Multiply: \(PV = 400 \times 51.7256 \approx \$20{,}690\).`,
            ],
            answer: String.raw`The lender would advance about $20,690 against 60 payments of $400 (a total of $24,000), the difference being interest.`,
          },
          where: [
            { sym: 'PMT', def: 'The equal payment received or paid each period' },
            { sym: 'r', def: 'Discount (interest) rate per period' },
            { sym: 'n', def: 'Number of payments' },
          ],
          caption: 'The value today of n future payments. Used to price loans, mortgages and pensions: it is the lump sum today that is exactly as good as receiving PMT every period for n periods, so a bank uses this PV, not the raw sum of all payments, to decide how much it will lend you.',
        },
        {
          t: 'math',
          tex: String.raw`PMT = PV\cdot\frac{r}{1 - (1+r)^{-n}}`,
          syntax: [
            { sym: String.raw`\frac{r}{1 - (1+r)^{-n}}`, say: String.raw`The annuity formula turned upside down: instead of asking "what is a payment stream worth?" it asks "what payment repays this amount?".` },
            { sym: String.raw`PMT`, say: String.raw`Read "P M T" or "payment": the fixed amount paid each period.` },
          ],
          worked: {
            steps: [
              String.raw`Given: borrow \(PV = \$20{,}000\) at 6% a year (\(r = 0.005\) per month) over 4 years (\(n = 48\)).`,
              String.raw`Discount factor: \(1.005^{-48} \approx 0.78710\), so the denominator is \(1 - 0.78710 = 0.21290\).`,
              String.raw`Ratio: \(0.005 / 0.21290 \approx 0.023485\).`,
              String.raw`Multiply: \(PMT = 20{,}000 \times 0.023485 \approx \$469.70\).`,
              String.raw`Total repaid: \(469.70 \times 48 \approx \$22{,}546\).`,
            ],
            answer: String.raw`The loan costs about $469.70 a month, and about $2,546 in total interest.`,
          },
          where: [
            { sym: 'PV', def: 'The amount borrowed (or the pension pot funded) today' },
            { sym: 'r', def: 'Interest rate per period' },
            { sym: 'n', def: 'Number of payments' },
          ],
          caption: 'The mortgage formula, rearranged: fix PV, r and n, and PMT is the payment that exactly repays the loan with interest by the final period, no more and no less. A $500,000 loan at 4% a year (r = 0.04/12 a month) over 25 years (n = 300) costs about $2,639 a month, stretch n to 30 years and the monthly payment drops, but r compounds over more periods, so the total interest paid rises.',
        },
        { t: 'fin-tool', tool: 'compound' },
      ],
    },
    {
      id: 'rule72',
      title: 'The rule of 72',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(1 + r)^n = 2 \;\Longrightarrow\; n = \frac{\ln 2}{\ln(1 + r)} \approx \frac{0.693}{r}`,
          syntax: [
            { sym: String.raw`\Longrightarrow`, say: String.raw`Read "implies": the right-hand side is what you get by solving the left.` },
            { sym: String.raw`\ln 2`, say: String.raw`Read "natural log of 2" (0.693): the log undoes the exponent, bringing n down so you can solve for it.` },
            { sym: String.raw`\approx`, say: String.raw`Read "approximately equals": for small r, \(\ln(1+r)\) is close to r, so the formula simplifies.` },
          ],
          worked: {
            steps: [
              String.raw`Given: an investment growing at \(r = 9\% = 0.09\) a year.`,
              String.raw`Exact: \(n = \frac{\ln 2}{\ln 1.09} = \frac{0.6931}{0.08618} \approx 8.04\) years.`,
              String.raw`Approximation: \(n \approx \frac{0.693}{0.09} \approx 7.70\) years.`,
              String.raw`Rule of 72: \(72 / 9 = 8\) years.`,
            ],
            answer: String.raw`Money doubles in about 8.04 years at 9%; the rule of 72 gives 8, closer than 69.3 does at this rate.`,
          },
          where: [
            { sym: 'r', def: 'Interest rate per period, as a decimal (6% = 0.06)' },
            { sym: 'n', def: 'Number of periods for the amount to double' },
          ],
          caption: 'Using ln(1 + r) ≈ r for small r. So the exact constant for small rates is 69.3; 72 is used because ln(1 + r) is a little less than r (pushing the answer up) and because 72 divides neatly by 2, 3, 4, 6, 8, 9 and 12. Read n as a quick gut-check, not a final answer: at 6% a year your money roughly doubles every 12 years, so $10,000 becomes about $160,000 over 48 years (four doublings) with no further contributions, the kind of mental shortcut that is useful at a glance but worth replacing with the exact formula above for anything that matters.',
        },
        {
          t: 'plot',
          title: 'Years to double: exact versus the rule of 72',
          x: [1, 20],
          y: [0, 75],
          xLabel: 'Interest rate (%)',
          yLabel: 'Years to double',
          curves: [
            { f: (p: number) => Math.log(2) / Math.log(1 + p / 100), label: 'Exact: ln 2 / ln(1 + r)' },
            { f: (p: number) => 72 / p, label: 'Rule of 72', dashed: true },
          ],
          points: [{ x: 8, y: 9, label: 'Spot on near 8%' }],
          caption: 'The rule is almost exact around 8%, and off by less than a year for typical rates.',
        },
        { t: 'callout', tone: 'fact', title: 'A 500-year-old rule', text: 'Luca Pacioli included the rule of 72 in his 1494 *Summa de arithmetica* without explanation, suggesting it was already well known.' },
        { t: 'callout', tone: 'myth', title: '"Einstein called compound interest the eighth wonder of the world"', text: 'There is no evidence Einstein ever said this. The quote first appears decades after his death, attributed to various people.' },
      ],
    },
  ],
  sources: [
    'Brealey, R. A., Myers, S. C., & Allen, F. (2020). *Principles of Corporate Finance* (13th ed.). McGraw-Hill.',
    'Maor, E. (1994). *e: The Story of a Number*. Princeton University Press.',
    'Pacioli, L. (1494). *Summa de arithmetica, geometria, proportioni et proportionalita*. Venice.',
  ],
  related: ['finance/fundamental/dcf', 'finance/foundations/risk-return', 'finance/economics/inflation-rates'],
}

export default guide
