import type { Guide } from '../../../guide'

const A = 1 / 3
const S = 0.25
const ND = 0.06
const kStar = (S / ND) ** (1 / (1 - A))

const guide: Guide = {
  intro:
    'Small differences in growth rates, compounded over decades, produce the vast gaps between rich and poor countries. An economy growing 2% a year doubles its income per person in 35 years; one growing 7% doubles it in 10. Why do some economies grow fast and then slow down, and why do others stay poor? Robert Solow’s 1956 model, for which he won the 1987 Nobel Prize, is the starting point for every answer. This guide builds it from a production function, derives the steady state and the golden-rule saving rate, shows why poor countries can catch up (convergence) and why saving alone cannot sustain growth, and uses growth accounting to ask how much of East Asia’s miracle, including Singapore’s, came from accumulation and how much from productivity.',
  nutshell: [
    'The **rule of 70**: income doubles in about **70 ÷ growth rate** years.',
    'Output per worker **y = k^α** has **diminishing returns** to capital, so accumulating capital alone eventually stops raising growth.',
    'Capital per worker settles at the **steady state** where saving just covers depreciation and new workers: **s·k^α = (n + δ)k**.',
    'A higher saving rate raises the **level** of income, not its long-run **growth**; the **golden rule** (s = α) maximises consumption.',
    'Poor economies grow faster as they approach their steady states (**convergence**); long-run growth needs **technology**, measured as **total factor productivity**.',
  ],
  sections: [
    {
      id: 'compound',
      title: 'Why growth rates matter: the rule of 70',
      lead: 'Compounding over a lifetime.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`(1 + g)^T = 2 \;\Rightarrow\; T = \frac{\ln 2}{\ln(1 + g)} \approx \frac{0.693}{g} \approx \frac{70}{100g}`,
          plain: 'To find how long something growing at g a year takes to double, solve (1 + g)^T = 2. For small g, ln(1 + g) is about g, so the answer is about 70 divided by the growth rate in percent.',
          syntax: [
            { sym: String.raw`\ln`, say: 'The natural logarithm. ln 2 ≈ 0.693.' },
            { sym: String.raw`\ln(1 + g) \approx g`, say: 'A good approximation for growth rates of a few percent.' },
          ],
          worked: {
            steps: [
              String.raw`At 2% a year: \(70/2 = 35\) years. Exact: \(\ln 2 / \ln 1.02 \approx 35.0\).`,
              String.raw`At 7%: \(70/7 = 10\) years. Exact: \(\ln 2/\ln 1.07 \approx 10.2\).`,
              String.raw`Over 50 years: 2% growth multiplies income by \(1.02^{50} \approx 2.7\); 7% by \(1.07^{50} \approx 29\).`,
            ],
            why: ['a typical rich-country rate', 'East Asian miracle rates', 'a lifetime of compounding'],
            answer: 'Fifty years at 7% instead of 2% is the difference between a country becoming somewhat richer and becoming unrecognisably richer. This is how Singapore, South Korea and Taiwan went from poor to rich within two generations.',
          },
        },
        {
          t: 'table',
          head: ['Growth rate per person', 'Years to double', 'Multiple after 25 years', 'Multiple after 50 years'],
          rows: [
            ['1%', '70', '1.28×', '1.64×'],
            ['2%', '35', '1.64×', '2.69×'],
            ['3%', '23', '2.09×', '4.38×'],
            ['5%', '14', '3.39×', '11.5×'],
            ['7%', '10', '5.43×', '29.5×'],
          ],
        },
      ],
    },
    {
      id: 'model',
      title: 'The model: production and capital accumulation',
      lead: 'Machines, workers and depreciation.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`Y = K^{\alpha}(AL)^{1 - \alpha} \;\;\Rightarrow\;\; y = \frac{Y}{AL} = k^{\alpha}, \qquad 0 < \alpha < 1`,
          plain: 'Output comes from capital K (machines, buildings) and labour L made more effective by technology A. Written per effective worker, output depends only on capital per effective worker, k. Because α is below 1, each extra unit of capital adds less output than the last: diminishing returns.',
          syntax: [
            { sym: String.raw`K^{\alpha}(AL)^{1-\alpha}`, say: 'A Cobb–Douglas production function. The exponents add to 1, so doubling both K and AL doubles output (constant returns to scale).' },
            { sym: String.raw`\alpha`, say: 'Read "alpha": capital’s share of income, about 1/3 in most economies.' },
          ],
          where: [
            { sym: 'K', def: 'The capital stock' },
            { sym: 'L', def: 'The number of workers' },
            { sym: 'A', def: 'Technology (labour-augmenting)' },
            { sym: 'k, y', def: 'Capital and output per effective worker' },
          ],
          worked: {
            steps: [
              String.raw`With \(\alpha = 1/3\): \(k = 1\) gives \(y = 1\); \(k = 8\) gives \(y = 2\); \(k = 27\) gives \(y = 3\).`,
              String.raw`Going from 1 to 8 units of capital (seven more) adds 1 unit of output; from 8 to 27 (nineteen more) adds only 1 more.`,
            ],
            why: ['cube roots', 'diminishing returns'],
            answer: 'Each additional unit of output needs ever more capital. That is why capital accumulation alone cannot keep growth going.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\Delta k = \underbrace{s\,k^{\alpha}}_{\text{investment}} - \underbrace{(n + g + \delta)\,k}_{\text{break-even investment}}`,
          plain: 'Each year a share s of output is saved and invested as new capital. Some investment is needed just to stand still: replacing worn-out capital (δ) and equipping new workers (n) and the extra effective workers that technology creates (g). If investment exceeds break-even, capital per worker rises; if not, it falls.',
          syntax: [
            { sym: String.raw`s`, say: 'The saving (investment) rate.' },
            { sym: String.raw`n, g, \delta`, say: 'Population growth, technology growth and the depreciation rate.' },
          ],
          worked: {
            title: 'The steady state',
            steps: [
              String.raw`Set \(\Delta k = 0\): \(s k^{\alpha} = (n + g + \delta)k\).`,
              String.raw`Divide by k: \(s k^{\alpha - 1} = n + g + \delta\), so \(k^* = \left(\dfrac{s}{n + g + \delta}\right)^{1/(1 - \alpha)}\).`,
              String.raw`With \(s = 0.25\), \(n + g + \delta = 0.06\), \(\alpha = 1/3\): \(k^* = (4.167)^{1.5} \approx 8.51\).`,
              String.raw`\(y^* = 8.51^{1/3} \approx 2.04\); consumption \(c^* = 0.75 \times 2.04 \approx 1.53\).`,
            ],
            why: ['capital per worker stops changing', 'solve for k', 'plug in', 'output and consumption per effective worker'],
            answer: 'Capital per effective worker converges to about 8.5 and output to about 2.04, whatever the starting point. In the steady state, income per worker grows only at the rate of technological progress g.',
          },
        },
        {
          t: 'plot',
          title: 'The Solow diagram',
          x: [0, 20],
          y: [0, 3],
          xLabel: 'capital per effective worker k',
          yLabel: 'per effective worker',
          curves: [
            { f: (k: number) => k ** A, label: 'output y = k^α' },
            { f: (k: number) => S * k ** A, label: 'investment s·y' },
            { f: (k: number) => ND * k, label: 'break-even (n + g + δ)k', dashed: true },
          ],
          points: [{ x: kStar, y: S * kStar ** A, label: 'steady state k* ≈ 8.5' }],
          vlines: [{ x: kStar }],
          caption: 'Left of k*, investment exceeds break-even and k rises; right of it, k falls. The gap between the output curve and the investment curve at k* is consumption.',
        },
        { t: 'econ-viz', viz: 'solow' },
      ],
    },
    {
      id: 'saving',
      title: 'Saving: levels versus growth, and the golden rule',
      lead: 'How much should an economy save?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{y^*_{\,2s}}{y^*_{\,s}} = 2^{\alpha/(1 - \alpha)} = 2^{0.5} \approx 1.41 \quad (\alpha = \tfrac13)`,
          plain: 'Doubling the saving rate raises steady-state output per worker by 2 to the power α/(1 − α). With a capital share of a third, that is about 41%: a big rise in the level of income, but a one-off. Once the economy reaches its new steady state, growth returns to the rate of technological progress.',
          syntax: [{ sym: String.raw`y^*_{\,2s}`, say: 'Steady-state output with twice the saving rate.' }],
          worked: {
            steps: [
              String.raw`\(y^* = k^{*\alpha} = \left(\dfrac{s}{n + g + \delta}\right)^{\alpha/(1-\alpha)}\).`,
              String.raw`Doubling s multiplies \(y^*\) by \(2^{\alpha/(1-\alpha)}\). With \(\alpha = 1/3\): \(2^{1/2} \approx 1.41\).`,
              String.raw`If α were 0.5: \(2^{1} = 2\). If 0.2: \(2^{0.25} \approx 1.19\).`,
            ],
            why: ['the steady-state formula', 'apply it', 'the result depends heavily on α'],
            answer: 'Saving more makes a country richer but does not make it grow faster forever. The diminishing returns to capital set the limit.',
          },
        },
        {
          t: 'math',
          tex: String.raw`c^* = (1 - s)\,k^{*\alpha}, \quad \max_s c^* \;\Rightarrow\; MPK = \alpha k^{\alpha - 1} = n + g + \delta \;\Rightarrow\; s_{gold} = \alpha`,
          plain: 'Too little saving leaves the economy poor; too much means sacrificing consumption to maintain a huge capital stock. Consumption per worker in the steady state is highest when the marginal product of capital equals the break-even rate, which with Cobb–Douglas production means saving exactly capital’s share of income: the golden rule (Phelps, 1961).',
          syntax: [{ sym: String.raw`MPK`, say: 'The marginal product of capital: the extra output from one more unit of capital.' }],
          worked: {
            steps: [
              String.raw`Golden rule: \(s = 1/3\). \(k_{gold} = (0.333/0.06)^{1.5} \approx 13.1\), \(y \approx 2.36\), \(c = \tfrac23 \times 2.36 \approx 1.57\).`,
              String.raw`At \(s = 0.25\): \(c^* \approx 1.53\), a little lower.`,
              String.raw`At \(s = 0.5\): \(k^* = (8.33)^{1.5} \approx 24.1\), \(y \approx 2.89\), \(c \approx 1.44\). Lower still: over-saving.`,
            ],
            why: ['save capital’s share', 'under-saving', 'over-saving: more output, less to consume'],
            answer: 'Consumption peaks at the golden rule. An economy saving more than this (dynamic inefficiency) could make every generation better off by consuming more.',
          },
        },
      ],
    },
    {
      id: 'convergence',
      title: 'Convergence: why poor economies can grow fast',
      lead: 'Catching up, and its limits.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{d \ln y}{dt} \approx -\lambda\,(\ln y - \ln y^*), \qquad \lambda = (1 - \alpha)(n + g + \delta)`,
          plain: 'An economy far below its steady state has little capital, so each machine is very productive and growth is fast. As it approaches the steady state, growth slows. The gap closes at roughly a constant rate λ a year, so it halves in about ln 2 / λ years.',
          syntax: [
            { sym: String.raw`\frac{d \ln y}{dt}`, say: 'The growth rate of output per effective worker.' },
            { sym: String.raw`\lambda`, say: 'Read "lambda": the speed of convergence.' },
          ],
          worked: {
            steps: [
              String.raw`\(\lambda = \tfrac23 \times 0.06 = 0.04\): the gap closes about 4% a year.`,
              String.raw`Half-life: \(0.693 / 0.04 \approx 17\) years.`,
              String.raw`Empirical estimates (Barro, Mankiw–Romer–Weil) are closer to 2% a year, a half-life of about 35 years, consistent with a broader capital share including human capital.`,
            ],
            why: ['the model’s speed', 'time to close half the gap', 'what the data say'],
            answer: 'Convergence is conditional: economies converge to their own steady states, set by their saving rates, population growth and technology. A poor country with low saving or poor institutions converges to a low steady state, which is why many poor countries do not catch up.',
          },
        },
        {
          t: 'plot',
          title: 'Two economies converging to the same steady state',
          x: [0, 80],
          y: [0, 2.3],
          xLabel: 'years',
          yLabel: 'output per effective worker',
          curves: [
            { f: (t: number) => Math.exp(Math.log(2.04) + (Math.log(0.6) - Math.log(2.04)) * Math.exp(-0.04 * t)), label: 'starts poor: fast early growth' },
            { f: (t: number) => Math.exp(Math.log(2.04) + (Math.log(1.6) - Math.log(2.04)) * Math.exp(-0.04 * t)), label: 'starts near steady state: slow growth' },
            { f: () => 2.04, label: 'steady state', dashed: true },
          ],
          caption: 'Using the log-linear approximation with λ = 4%. The poorer economy grows much faster at first, and its growth slows as it closes the gap.',
        },
      ],
    },
    {
      id: 'accounting',
      title: 'Growth accounting and the East Asian debate',
      lead: 'Accumulation or productivity?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`g_Y = \alpha\, g_K + (1 - \alpha)\, g_L + g_{TFP}`,
          plain: 'Output growth can be split into a part from more capital, a part from more (and better-educated) labour, and a residual: total factor productivity (TFP) growth, the part of growth not explained by more inputs. Solow called it "a measure of our ignorance", since it lumps together technology, efficiency and anything mismeasured.',
          syntax: [
            { sym: String.raw`g_Y, g_K, g_L`, say: 'Growth rates of output, capital and labour input.' },
            { sym: String.raw`g_{TFP}`, say: 'Total factor productivity growth: the Solow residual.' },
          ],
          worked: {
            steps: [
              String.raw`An economy grows 8% a year; capital grows 10%, labour input 4%; capital’s share \(\alpha = 0.4\).`,
              String.raw`Capital’s contribution: \(0.4 \times 10 = 4\) points. Labour’s: \(0.6 \times 4 = 2.4\) points.`,
              String.raw`TFP growth: \(8 - 4 - 2.4 = 1.6\%\) a year.`,
            ],
            why: ['a fast-growing economy', 'weight input growth by income shares', 'the residual'],
            answer: 'Four-fifths of the growth comes from more inputs. Input growth that fast cannot continue forever: saving rates and participation cannot keep rising.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Young’s finding', tag: '1995', body: 'Alwyn Young’s careful accounting found that rapid East Asian growth from the 1960s to 1990 came mostly from rising investment, labour-force participation and education, with modest productivity growth, and for Singapore TFP growth close to zero over that period.' },
            { title: 'Krugman’s warning', tag: '"The Myth of Asia’s Miracle", 1994', body: 'Paul Krugman compared this to the Soviet Union’s input-driven growth and predicted slowing growth. Growth did slow, but the economies kept rising to rich-country incomes.' },
            { title: 'The rebuttals', tag: 'measurement', body: 'Others found higher TFP using different capital measures, and argued that adopting foreign technology is itself embodied in new machines, so accumulation and productivity are hard to separate.' },
            { title: 'Singapore’s response', tag: 'productivity drives', body: 'Singapore has run repeated productivity campaigns, from the 1980s productivity movement to SkillsFuture and industry transformation maps, aimed at raising TFP as the scope for adding inputs narrowed.' },
          ],
        },
        { t: 'p', text: 'The Solow model takes technology as given. Explaining where it comes from (research, ideas, institutions) is the subject of [institutions and development](@economics/growth/institutions-and-development).' },
      ],
    },
  ],
  sources: [
    'Solow, R. M. (1956). A contribution to the theory of economic growth. *Quarterly Journal of Economics*, 70(1), 65–94.',
    'Mankiw, N. G., Romer, D., and Weil, D. N. (1992). A contribution to the empirics of economic growth. *Quarterly Journal of Economics*, 107(2), 407–437.',
    'Phelps, E. (1961). The golden rule of accumulation. *American Economic Review*, 51(4), 638–643.',
    'Young, A. (1995). The tyranny of numbers: Confronting the statistical realities of the East Asian growth experience. *Quarterly Journal of Economics*, 110(3), 641–680.',
    'Krugman, P. (1994). The myth of Asia’s miracle. *Foreign Affairs*, 73(6), 62–78.',
    'Jones, C. I., and Vollrath, D. (2013). *Introduction to Economic Growth* (3rd ed.). W. W. Norton.',
  ],
  related: ['economics/growth/institutions-and-development', 'economics/growth/inequality', 'finance/foundations/time-value'],
}

export default guide
