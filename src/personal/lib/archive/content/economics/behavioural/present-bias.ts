import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'On Sunday night you plan to start exercising on Monday; on Monday morning, the plan can wait until Tuesday. Economists call this present bias: we discount the near future much more steeply than the distant future, so plans made in advance keep being overturned when the moment arrives. Standard models assume people discount the future at a steady rate, which makes their plans consistent over time. This guide sets out exponential discounting and why it is time-consistent, measures how steeply people actually discount, builds the β–δ model that captures present bias, works through procrastination and preference reversals with numbers, and shows how commitment devices, from gym contracts to Save More Tomorrow and CPF, help people do what they themselves intend.',
  nutshell: [
    '**Exponential discounting** (each period counts δ times the one before) is **time-consistent**: a choice between two dates never flips as they approach.',
    'Real people show **hyperbolic** discounting: very steep over the near term, flatter over the far term, giving **preference reversals**.',
    'The **β–δ (quasi-hyperbolic) model**: everything not available now takes an extra cut **β < 1**.',
    '**Naive** present-biased people procrastinate repeatedly, believing they will act tomorrow; **sophisticated** ones seek **commitment**.',
    'Commitment devices and defaults (**Save More Tomorrow**, auto-enrolment, mandatory schemes like **CPF**) raise saving dramatically.',
  ],
  sections: [
    {
      id: 'exponential',
      title: 'Exponential discounting and time consistency',
      lead: 'The standard model.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`U = u_0 + \delta u_1 + \delta^2 u_2 + \cdots = \sum_{t=0}^{\infty} \delta^t u_t, \qquad 0 < \delta < 1`,
          plain: 'In the standard model a reward t periods away is worth δᵗ of the same reward today. Each period of delay costs the same proportion, however far away it is. That makes plans consistent: if you prefer $110 in 53 weeks to $100 in 52 weeks, you will still prefer it when the 52 weeks have passed.',
          syntax: [
            { sym: String.raw`\delta`, say: 'Read "delta": the per-period discount factor.' },
            { sym: String.raw`u_t`, say: 'Utility (or the reward) received in period t.' },
          ],
          worked: {
            steps: [
              String.raw`Weekly \(\delta = 0.99\). Compare $100 at week t with $110 at week t + 1.`,
              String.raw`Today (t = 0): \(100\) against \(0.99 \times 110 = 108.9\): wait.`,
              String.raw`A year ahead (t = 52): \(0.99^{52} \times 100\) against \(0.99^{53} \times 110\). Dividing by \(0.99^{52}\) gives the same comparison: wait.`,
            ],
            why: ['a steady weekly discount', 'the near choice', 'the common factor cancels, so the choice never changes'],
            answer: 'Under exponential discounting, delay of one week costs the same 1% whether it starts today or next year, so preferences never reverse. The trouble is that people do not behave like this.',
          },
        },
        {
          t: 'table',
          head: ['Amount people would need in…', 'to match $15 now', 'Implied annual discount rate'],
          rows: [
            ['1 month', '$20', 'about 345%'],
            ['1 year', '$50', 'about 120%'],
            ['10 years', '$100', 'about 19%'],
          ],
          caption: 'Median answers in Richard Thaler’s 1981 survey. Implied rates fall sharply with the horizon: people are very impatient about short delays and much less about long ones, the signature of hyperbolic discounting.',
        },
        {
          t: 'math',
          tex: String.raw`D_{exp}(t) = \delta^t, \qquad D_{hyp}(t) = \frac{1}{1 + kt}, \qquad D_{\beta\delta}(t) = \begin{cases} 1 & t = 0 \\ \beta\,\delta^t & t \ge 1 \end{cases}`,
          plain: 'Three discount functions. Exponential falls by a constant proportion per period. Hyperbolic falls fast at first and slowly later. The quasi-hyperbolic (β–δ) form, introduced by David Laibson (1997), is a simple approximation: an immediate drop by β for anything that is not now, then steady exponential discounting.',
          syntax: [
            { sym: String.raw`k`, say: 'The hyperbolic discount parameter.' },
            { sym: String.raw`\beta`, say: 'Read "beta": present bias. β = 1 is no bias; typical estimates are around 0.7.' },
          ],
          worked: {
            steps: [
              String.raw`Exponential, \(\delta = 0.9\) a year: a year away is worth 0.9, ten years 0.35.`,
              String.raw`Hyperbolic, \(k = 0.5\): a year away 0.67, ten years 0.17.`,
              String.raw`\(\beta\delta\), \(\beta = 0.7\), \(\delta = 0.97\): a year away \(0.7 \times 0.97 = 0.68\), ten years \(0.7 \times 0.97^{10} \approx 0.52\).`,
            ],
            why: ['the steady curve', 'a steep start', 'a one-off drop, then gentle decline'],
            answer: 'The β–δ form keeps the maths simple while capturing the key fact: the jump from "now" to "soon" matters far more than the jump from "soon" to "a bit later".',
          },
        },
        {
          t: 'plot',
          title: 'Three discount functions',
          x: [0, 20],
          y: [0, 1.05],
          xLabel: 'years from now',
          yLabel: 'weight on a reward',
          curves: [
            { f: (t: number) => 0.9 ** t, label: 'exponential δ = 0.9' },
            { f: (t: number) => 1 / (1 + 0.5 * t), label: 'hyperbolic k = 0.5' },
            { f: (t: number) => (t < 0.05 ? 1 : 0.7 * 0.97 ** t), label: 'β–δ: β = 0.7, δ = 0.97', from: 0.05 },
          ],
          points: [{ x: 0, y: 1, label: 'now' }],
        },
      ],
    },
    {
      id: 'reversal',
      title: 'Preference reversals',
      lead: 'Patient about the future, impatient about now.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\underbrace{100 > \beta\delta \cdot 110}_{\text{choice today}} \quad\text{but}\quad \underbrace{\beta\delta^{10} \cdot 100 < \beta\delta^{11} \cdot 110}_{\text{choice made 10 weeks ahead}} \;\iff\; \delta > \tfrac{100}{110}`,
          plain: 'Today, the β cut applies only to the later reward, so the sooner one wins. Ten weeks in advance, both rewards take the β cut, it cancels, and only δ is left, so the larger, later reward wins. The same person makes opposite choices depending on when they decide.',
          syntax: [{ sym: String.raw`\iff`, say: 'Read "if and only if".' }],
          worked: {
            steps: [
              String.raw`\(\beta = 0.7\), weekly \(\delta = 0.999\). Option S: $100 at week t. Option L: $110 at week t + 1.`,
              String.raw`Deciding now (t = 0): S is worth 100; L is worth \(0.7 \times 0.999 \times 110 \approx 76.9\). Take S.`,
              String.raw`Deciding 10 weeks ahead: S is worth \(0.7 \times 0.999^{10} \times 100 \approx 69.3\); L is worth \(0.7 \times 0.999^{11} \times 110 \approx 76.1\). Choose L.`,
              String.raw`When week 10 arrives, the person faces the "now" choice again and switches to S.`,
            ],
            why: ['the setting', 'present bias favours the immediate reward', 'from a distance, both are discounted alike', 'the plan is abandoned'],
            answer: 'The person plans to wait and then grabs the money when the moment comes. This is the logic behind failed diets, abandoned savings plans and unused gym memberships.',
          },
        },
        { t: 'econ-viz', viz: 'discounting' },
      ],
    },
    {
      id: 'procrastination',
      title: 'Procrastination: naive and sophisticated',
      lead: 'How "tomorrow" becomes "too late".',
      blocks: [
        { t: 'p', text: 'Ted O’Donoghue and Matthew Rabin (1999) distinguished two kinds of present-biased person. A **naive** person does not realise they are present-biased and believes their future self will follow today’s plan. A **sophisticated** person knows their future self will also be tempted, and plans around it.' },
        {
          t: 'table',
          head: ['Week', 'Cost of doing the task that week', 'Naive person compares now with β × next week', 'Decision'],
          rows: [
            ['1', '3', '3 against 0.5 × 5 = 2.5', 'Delay (next week looks cheaper)'],
            ['2', '5', '5 against 0.5 × 8 = 4', 'Delay'],
            ['3', '8', '8 against 0.5 × 13 = 6.5', 'Delay'],
            ['4 (deadline)', '13', 'No more weeks', 'Must do it: cost 13'],
          ],
          caption: 'A task must be done once within four weeks, and it gets more costly to do the later it is left (a report that grows harder as the deadline nears). β = 0.5, δ = 1. Each week the naive person thinks "I will do it next week, it will only feel like half the cost", and ends up paying the maximum.',
        },
        {
          t: 'math',
          tex: String.raw`\text{naive cost} = 13 \quad\text{vs}\quad \text{time-consistent cost} = 3`,
          plain: 'Someone without present bias does the task in week 1 at cost 3. The naive procrastinator delays every week and pays 13, more than four times as much. A sophisticated person works backwards from the deadline, comparing acting now not with what they hope to do next week but with what their future selves will actually do.',
          syntax: [{ sym: String.raw`\text{naive}`, say: 'Unaware of their own future present bias.' }],
          worked: {
            title: 'The sophisticated person’s backward reasoning',
            steps: [
              String.raw`Week 3: they would compare 8 with \(0.5 \times 13 = 6.5\) and delay, so if they reach week 3 the task costs 13.`,
              String.raw`Week 2: knowing that, they compare 5 now with \(0.5 \times 13 = 6.5\) later: do it now. So if they reach week 2, the cost is 5.`,
              String.raw`Week 1: compare 3 now with \(0.5 \times 5 = 2.5\) for doing it in week 2: delay to week 2.`,
              String.raw`They do it in week 2 at cost 5.`,
            ],
            why: ['the last real decision', 'anticipating the week-3 self', 'anticipating the week-2 self', 'the outcome'],
            answer: 'Knowing your own weakness helps: the sophisticated person pays 5 instead of 13. Even better, they would pay for a commitment that forces them to act in week 1.',
          },
        },
      ],
    },
    {
      id: 'commitment',
      title: 'Commitment devices and retirement saving',
      lead: 'Tying yourself to the mast.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Paying not to go to the gym', tag: 'DellaVigna and Malmendier, 2006', body: 'Members on monthly contracts of about $70 attended about 4 times a month, paying over $17 a visit when a pay-per-visit pass cost $10. They overestimated how often they would go: naive present bias.' },
            { title: 'Commitment savings accounts', tag: 'Ashraf, Karlan and Yin, 2006', body: 'In the Philippines, a bank offered accounts that locked savings until a date or goal chosen by the saver. About a quarter of those offered took it up, and after a year their savings had risen substantially more than a comparison group’s.' },
            { title: 'Deadlines', tag: 'Ariely and Wertenbroch, 2002', body: 'Students allowed to set their own deadlines for papers chose earlier, binding deadlines, and performed better than those with one end-of-term deadline (though not as well as those given evenly spaced deadlines).' },
            { title: 'Ulysses and the sirens', tag: 'the original', body: 'Ulysses had himself tied to the mast so he could hear the sirens without steering onto the rocks: the classic commitment device.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{contribution rate}_{t+1} = \text{contribution rate}_t + \Delta \;\;\text{at each pay rise}`,
          plain: 'Save More Tomorrow, designed by Richard Thaler and Shlomo Benartzi, asks employees to commit now to raising their retirement contribution rate at each future pay rise. It uses three behavioural insights: people are more willing to commit to future saving (present bias), the increases come with a pay rise so take-home pay never falls (loss aversion), and once enrolled people tend to stay (inertia).',
          syntax: [{ sym: String.raw`\Delta`, say: 'The step-up in the contribution rate, for example 3 percentage points.' }],
          worked: {
            steps: [
              String.raw`At the first firm to adopt it, participants started with an average saving rate of about 3.5%.`,
              String.raw`After four pay rises over about 40 months, their average rate was about 13.6%.`,
              String.raw`Those who instead took the advice of a financial consultant to raise saving at once reached about 8.8%.`,
            ],
            why: ['the starting point', 'automatic escalation', 'the comparison group'],
            answer: 'Committing future pay rises nearly quadrupled the saving rate, without anyone feeling a cut in take-home pay.',
          },
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'CPF as a commitment device',
          text: 'Singapore’s Central Provident Fund makes saving mandatory: up to 37% of wages go into accounts that cannot be freely withdrawn before retirement age, and at 65 retirement savings flow into CPF LIFE, a lifelong annuity. Whatever its other effects, it removes present bias from the saving decision entirely. Countries with voluntary pensions use defaults and auto-enrolment to get some of the same effect: see [nudges](@economics/behavioural/fairness-and-nudges).',
        },
        {
          t: 'dodont',
          do: ['Make good choices automatic: standing orders on payday, auto-escalating contributions', 'Use binding commitments for things you know you put off', 'Plan for your future self’s weakness, not your current good intentions'],
          dont: ['Assume that because you plan to do something next week, you will', 'Buy flat-rate memberships for things you rarely use on the strength of future intentions', 'Treat "I will start tomorrow" as a plan'],
        },
      ],
    },
  ],
  sources: [
    'Laibson, D. (1997). Golden eggs and hyperbolic discounting. *Quarterly Journal of Economics*, 112(2), 443–477.',
    'Thaler, R. (1981). Some empirical evidence on dynamic inconsistency. *Economics Letters*, 8(3), 201–207.',
    'O’Donoghue, T., and Rabin, M. (1999). Doing it now or later. *American Economic Review*, 89(1), 103–124.',
    'DellaVigna, S., and Malmendier, U. (2006). Paying not to go to the gym. *American Economic Review*, 96(3), 694–719.',
    'Ashraf, N., Karlan, D., and Yin, W. (2006). Tying Odysseus to the mast: Evidence from a commitment savings product in the Philippines. *Quarterly Journal of Economics*, 121(2), 635–672.',
    'Thaler, R. H., and Benartzi, S. (2004). Save More Tomorrow: Using behavioral economics to increase employee saving. *Journal of Political Economy*, 112(S1), S164–S187.',
    'Ariely, D., and Wertenbroch, K. (2002). Procrastination, deadlines, and performance. *Psychological Science*, 13(3), 219–224.',
  ],
  related: ['economics/behavioural/prospect-theory', 'economics/behavioural/fairness-and-nudges', 'habits/procrastination'],
}

export default guide
