import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If a share is worth the cash it pays its owners, and dividends are that cash, then a share is worth the present value of all its future dividends. Assume dividends grow at a constant rate forever, and an infinite sum collapses into one of the most elegant formulas in finance: the **Gordon growth model**.',
  nutshell: [
    'Value = present value of all future dividends.',
    'With constant growth \\(g\\) and required return \\(r > g\\): \\(P_0 = D_1/(r - g)\\).',
    'Rearranged, the expected return is the **dividend yield plus growth**.',
    'Best for stable, mature dividend payers: utilities, REITs, banks.',
  ],
  sections: [
    {
      id: 'derive',
      title: 'Deriving the Gordon growth model',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_0 = \frac{D_1}{1+r} + \frac{D_1(1+g)}{(1+r)^2} + \frac{D_1(1+g)^2}{(1+r)^3} + \cdots = \frac{D_1}{1+r}\sum_{k=0}^{\infty} q^k,\quad q = \frac{1+g}{1+r}`,
          syntax: [
            { sym: String.raw`D_1`, say: String.raw`Read "D sub 1": the subscript is the year. \(D_1\) is next year’s dividend and \(D_0\) the one just paid.` },
            { sym: String.raw`\cdots`, say: 'Read "and so on, forever". The pattern of the last few terms continues without end.' },
            { sym: String.raw`\sum_{k=0}^{\infty} q^k`, say: String.raw`Read "the sum from k equals 0 to infinity of q to the k": add \(q^0 = 1\), then \(q^1\), then \(q^2\) ... never stopping.` },
            { sym: String.raw`q = \frac{1+g}{1+r}`, say: String.raw`Read "q is defined as one plus g over one plus r". It is the factor by which each dividend’s present value differs from the one before.` },
          ],
          worked: {
            title: 'A stock paying 3.00 next year',
            steps: [
              String.raw`Given: \(D_1 = \$3.00\), required return \(r = 9\%\), growth \(g = 4\%\).`,
              String.raw`First three terms: \(3.00/1.09 = 2.752\), \(3.00 \times 1.04 / 1.09^2 = 2.626\), \(3.00 \times 1.04^2 / 1.09^3 = 2.506\). Each is about 4.6% smaller than the last.`,
              String.raw`The ratio between terms is \(q = 1.04/1.09 = 0.9541\).`,
              String.raw`The infinite sum of powers of q is \(1/(1 - q) = 1/0.0459 = 21.80\).`,
              String.raw`Multiply: \(P_0 = 2.752 \times 21.80 = 60.00\).`,
            ],
            answer: String.raw`\(P_0 = \$60.00\): the endless stream of shrinking present values adds up to a finite price, which is exactly \(3.00/(0.09 - 0.04)\).`,
          },
          where: [
            { sym: 'D_1', def: 'The dividend expected next year' },
            { sym: 'r', def: 'Required return (discount rate)' },
            { sym: 'g', def: 'Constant growth rate of the dividend, forever' },
          ],
          caption: 'Each dividend is the last one grown by (1 + g), and discounted one more year.',
        },
        {
          t: 'math',
          tex: String.raw`\sum_{k=0}^{\infty} q^k = \frac{1}{1 - q}\quad (|q| < 1)\qquad\Longrightarrow\qquad P_0 = \frac{D_1}{1+r}\cdot\frac{1+r}{r-g} = \frac{D_1}{r - g}`,
          syntax: [
            { sym: String.raw`|q| < 1`, say: 'Read "the absolute value of q is less than 1", i.e. q lies between -1 and 1. The vertical bars strip the sign. If q is 1 or more, the terms never shrink and the sum is infinite.' },
            { sym: String.raw`\Longrightarrow`, say: 'Read "which implies" or "therefore". The right-hand statement follows from the left-hand one.' },
            { sym: String.raw`\frac{1+r}{r-g}`, say: String.raw`Read "one plus r over r minus g". This is \(1/(1-q)\) after substituting q and simplifying: \(1 - q = (r - g)/(1 + r)\).` },
          ],
          worked: {
            title: 'Why the series only works when g is below r',
            steps: [
              String.raw`Tiny case first: with \(q = 0.5\), the terms are \(1 + 0.5 + 0.25 + 0.125 + \cdots\). The formula gives \(1/(1 - 0.5) = 2\), and the running total (1, 1.5, 1.75, 1.875 ...) does creep towards 2.`,
              String.raw`Now a stock: \(D_1 = \$1.50\), \(r = 7\%\), \(g = 3\%\), so \(q = 1.03/1.07 = 0.9626\), which is less than 1.`,
              String.raw`The sum of powers of q is \(1/(1 - 0.9626) = 26.75\).`,
              String.raw`\(P_0 = \dfrac{1.50}{1.07} \times 26.75 = 1.4019 \times 26.75 = 37.50\).`,
              String.raw`Shortcut check: \(1.50/(0.07 - 0.03) = 1.50/0.04 = 37.50\). Same answer.`,
            ],
            answer: String.raw`\(P_0 = \$37.50\). If g were 7% or more, q would reach 1 or higher and no finite price would exist, which is why the model demands \(r > g\).`,
          },
          caption: 'The geometric series converges only if g < r. If growth were to exceed the discount rate forever, the value would be infinite, which is why the model needs r > g. Read \\(P_0\\) as the model’s estimate of fair value today: compare it with the actual market price to get a cheap/expensive signal, remembering the whole answer leans on just two guessed inputs, r and g.',
        },
        {
          t: 'math',
          tex: String.raw`r = \frac{D_1}{P_0} + g`,
          syntax: [
            { sym: String.raw`D_1 / P_0`, say: String.raw`Read "D one over P zero": next year’s dividend divided by today’s price. Divide first, then add g.` },
            { sym: String.raw`r`, say: 'Here r is the answer, not the input: you are solving for the return the current price implies.' },
          ],
          worked: {
            title: 'Backing out the return from a market price',
            steps: [
              String.raw`Given: share price \(P_0 = \$40\), next dividend \(D_1 = \$1.60\), expected dividend growth \(g = 3.5\%\).`,
              String.raw`Dividend yield: \(D_1/P_0 = 1.60/40 = 0.04 = 4.0\%\).`,
              String.raw`Add growth: \(r = 4.0\% + 3.5\% = 7.5\%\).`,
            ],
            answer: String.raw`\(r = 7.5\%\): at $40 you can expect about 7.5% a year, 4 points as cash and 3.5 points as growth, if the growth forecast holds.`,
          },
          where: [
            { sym: 'D_1 / P_0', def: 'The dividend yield at today’s price' },
            { sym: 'g', def: 'Expected dividend growth rate' },
          ],
          caption: 'Turned around: the return an investor can expect from buying at P₀ is the dividend yield plus the growth rate.',
        },
        {
          t: 'metric',
          name: 'the implied expected return (r = dividend yield + growth)',
          shows: 'What you are actually signing up to earn, on average, by buying a stable dividend payer at today’s price, split into the cash you collect now (yield) and the growth you are betting on later. It turns the Gordon model around: instead of guessing r to find a "fair" price, you take the market price as given and solve for the return it is pricing in.',
          eli5: 'Buying a rental flat for its 4% rental yield, expecting rents to rise 3% a year as the neighbourhood grows, means you are underwriting roughly a 7% total return. A dividend stock at a given price works the same way: today’s yield is the "rent", and the growth rate is how fast you expect the "rent" to rise.',
          higher: 'The stock is priced to deliver more total return, either because its dividend yield is generous relative to the price, or because the market (or you) expects strong dividend growth. A surprisingly high implied r can mean a genuine bargain, or it can mean the market is pricing in a dividend cut that has not been announced yet (the same "yield trap" risk as a high raw yield).',
          lower: 'The stock is priced to deliver less total return, typically because it is a richly valued, low-yield name where the market is paying up for safety or for growth that has not shown up yet. A low implied r is not automatically bad; it can simply mean the market sees the dividend as unusually safe and worth paying more for.',
          typical: 'For stable, mature dividend payers, implied r often clusters within a point or two of the broad market’s long-run equity return of roughly 7–9% nominal, a figure far outside that range is usually a sign one of the two inputs (yield or assumed growth) is unrealistic rather than a genuine opportunity.',
        },
        {
          t: 'example',
          title: 'A utility',
          lines: [
            { label: 'Facts', text: 'just paid \\(D_0 = \\$2\\); dividends grow 4% a year; you require 8%' },
            { label: 'Next dividend', text: '\\(D_1 = 2 \\times 1.04 = 2.08\\)' },
            { label: 'Value', text: '\\(P_0 = 2.08 / (0.08 - 0.04) = \\$52\\)' },
            { label: 'Sensitivity', text: 'if growth is 5% instead: \\(2.10/0.03 = \\$70\\), a 35% jump from a 1-point change' },
          ],
        },
      ],
    },
    {
      id: 'sensitivity',
      title: 'Why the model is so sensitive',
      blocks: [
        {
          t: 'plot',
          title: 'Value of a $2.08 dividend growing at g, with r = 8%',
          x: [0, 0.07],
          y: [0, 220],
          xLabel: 'Growth rate g',
          yLabel: 'Value per share',
          curves: [{ f: (g: number) => 2.08 / (0.08 - g), label: 'P = 2.08 / (0.08 − g)' }],
          vlines: [{ x: 0.08 - 0.0001, label: 'g → r' }],
          points: [
            { x: 0.04, y: 52, label: 'g = 4%: $52' },
            { x: 0.06, y: 104, label: 'g = 6%: $104' },
          ],
          caption: 'As g approaches r, value rockets towards infinity. Treat the model’s output as a rough guide.',
        },
        { t: 'fin-tool', tool: 'ddm' },
      ],
    },
    {
      id: 'stages',
      title: 'Two-stage models',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P_0 = \sum_{t=1}^{N}\frac{D_0(1+g_1)^t}{(1+r)^t} + \frac{1}{(1+r)^N}\cdot\frac{D_N(1+g_2)}{r - g_2}`,
          syntax: [
            { sym: String.raw`g_1, g_2`, say: 'Read "g one" and "g two": two different growth rates, labelled by stage. The subscript is a label, not a power.' },
            { sym: String.raw`D_0(1+g_1)^t`, say: 'Read "D zero times one plus g one, to the power t": the dividend just paid, grown t years at the fast rate.' },
            { sym: String.raw`\frac{1}{(1+r)^N}\cdot\frac{D_N(1+g_2)}{r - g_2}`, say: String.raw`Read the right-hand fraction as the Gordon value at year N (using the year N + 1 dividend), then multiply by \(1/(1+r)^N\) to bring it back to today.` },
          ],
          worked: {
            title: 'Three years of fast growth, then steady growth',
            steps: [
              String.raw`Given: \(D_0 = \$1.00\), \(g_1 = 10\%\) for \(N = 3\) years, \(g_2 = 4\%\) after that, \(r = 9\%\).`,
              String.raw`Dividends in the fast stage: \(1.10\), \(1.21\), \(1.331\) (each 10% above the last).`,
              String.raw`Discount them: \(1.10/1.09 = 1.009\), \(1.21/1.09^2 = 1.018\), \(1.331/1.09^3 = 1.028\). Sum: \(3.055\).`,
              String.raw`Year 4 dividend: \(D_3 \times 1.04 = 1.331 \times 1.04 = 1.384\). Gordon value at year 3: \(1.384/(0.09 - 0.04) = 27.68\).`,
              String.raw`Bring it back: \(27.68/1.09^3 = 27.68/1.2950 = 21.38\).`,
              String.raw`Add the stages: \(P_0 = 3.055 + 21.38 = 24.43\).`,
            ],
            answer: String.raw`\(P_0 \approx \$24.43\), with about 87% of it (21.38 of 24.43) coming from the slow-growth stage that only starts after year 3.`,
          },
          where: [
            { sym: 'D_0', def: 'The dividend just paid' },
            { sym: 'g_1, g_2', def: 'High growth for N years, then a lower growth rate forever after' },
            { sym: 'N', def: 'Length of the high-growth stage, in years' },
          ],
          caption: 'Fast growth g₁ for N years, then slower, permanent growth g₂. The same structure as a DCF with a terminal value, and it inherits the same lesson: because g₂ runs forever, that second term can still dominate the total even though it only kicks in after year N.',
        },
        { t: 'callout', tone: 'fact', title: 'Named after Myron Gordon', text: 'Myron Gordon and Eli Shapiro published the model in 1956, though John Burr Williams had laid out the idea of valuing a stock by discounting its dividends in *The Theory of Investment Value* in 1938.' },
      ],
    },
  ],
  sources: [
    'Gordon, M. J., & Shapiro, E. (1956). Capital equipment analysis: The required rate of profit. *Management Science*, 3(1), 102–110.',
    'Williams, J. B. (1938). *The Theory of Investment Value*. Harvard University Press.',
    'Damodaran, A. (2012). *Investment Valuation* (3rd ed.). Wiley.',
  ],
  related: ['finance/fundamental/dcf', 'finance/foundations/time-value', 'finance/fundamental/multiples'],
}

export default guide
