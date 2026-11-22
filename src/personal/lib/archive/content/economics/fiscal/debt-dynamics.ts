import type { Guide } from '../../../guide'

const path = (b0: number, r: number, g: number, pb: number, n = 40): [number, number][] => {
  const out: [number, number][] = [[0, b0]]
  let b = b0
  for (let t = 1; t <= n; t++) {
    b = (b * (1 + r)) / (1 + g) - pb
    out.push([t, b])
  }
  return out
}

const guide: Guide = {
  intro:
    'Is a government debt of 100% of GDP dangerous? Japan has carried far more for years at low interest rates, while Greece hit crisis at a similar ratio in 2010. The answer depends less on the level than on its dynamics: the interest rate the government pays, how fast the economy grows, and whether the budget before interest is in surplus or deficit. This guide derives the debt accumulation equation one line at a time, finds the primary balance that holds debt steady, shows how a gap between the interest rate and the growth rate makes debt snowball or melt away, and explains the four ways debts have historically been brought down: surpluses, growth, inflation and default.',
  nutshell: [
    'Debt as a share of GDP evolves as **b′ = b(1 + r)/(1 + g) − pb**: interest pushes it up, growth shrinks it, primary surpluses pay it down.',
    'The **r − g** gap is the key number. If **r < g**, debt ratios fall on their own unless primary deficits are large.',
    'The **debt-stabilising primary balance** is **(r − g)/(1 + g) × b**.',
    'A rising **risk premium** can turn a manageable debt into a crisis: higher r raises debt, which raises the premium again.',
    'Debts have been reduced by **primary surpluses, growth, surprise inflation, financial repression and default**. Who holds the debt and in what currency matters as much as its size.',
  ],
  sections: [
    {
      id: 'derive',
      title: 'The debt accumulation equation',
      lead: 'Four lines of algebra.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`b_{t+1} = \frac{1 + r}{1 + g}\,b_t - pb_{t+1} \qquad\approx\qquad \Delta b \approx (r - g)\,b - pb`,
          plain: 'Next year’s debt ratio is this year’s, grown by the interest rate and shrunk by GDP growth, minus whatever primary surplus is run. When r and g are small, the change in the ratio is roughly the interest–growth gap times the debt, minus the primary balance.',
          syntax: [
            { sym: String.raw`b_t`, say: 'The debt-to-GDP ratio in year t.' },
            { sym: String.raw`r, g`, say: 'The interest rate on the debt and the growth rate of GDP, both nominal (or both real: the gap is the same).' },
            { sym: String.raw`pb`, say: 'The primary balance as a share of GDP: positive is a surplus.' },
          ],
          worked: {
            title: 'Deriving it',
            steps: [
              String.raw`Debt grows with interest and shrinks with the primary surplus: \(D_{t+1} = (1 + r)D_t - PB_{t+1}\).`,
              String.raw`Divide by next year’s GDP, \(Y_{t+1} = (1 + g)Y_t\): \(\dfrac{D_{t+1}}{Y_{t+1}} = \dfrac{(1 + r)D_t}{(1 + g)Y_t} - \dfrac{PB_{t+1}}{Y_{t+1}}\).`,
              String.raw`So \(b_{t+1} = \dfrac{1 + r}{1 + g}\,b_t - pb_{t+1}\).`,
              String.raw`Subtract \(b_t\): \(\Delta b = \dfrac{r - g}{1 + g}\,b_t - pb \approx (r - g)b - pb\).`,
            ],
            why: ['the stock of debt grows with the flow', 'express as ratios', 'the exact equation', 'the approximate one, for small rates'],
            answer: 'Two forces act on the ratio: the snowball effect (r − g) × b, and the primary balance. Everything else in this guide follows from this one equation.',
          },
        },
        {
          t: 'math',
          tex: String.raw`pb^* = \frac{r - g}{1 + g}\,b`,
          plain: 'To keep the debt ratio exactly where it is, the government must run a primary surplus just big enough to offset the snowball. If r is below g, the "surplus" needed is negative: the government can run a primary deficit and still hold the ratio steady.',
          syntax: [{ sym: String.raw`pb^*`, say: 'The debt-stabilising primary balance.' }],
          worked: {
            steps: [
              String.raw`Debt 100% of GDP, \(r = 5\%\), \(g = 3\%\): \(pb^* = 0.02/1.03 \times 100 \approx 1.94\%\) of GDP.`,
              String.raw`Debt 100%, \(r = 3\%\), \(g = 4\%\): \(pb^* = -0.01/1.04 \times 100 \approx -0.96\%\). A primary deficit of about 1% of GDP keeps the ratio steady.`,
              String.raw`Debt 200%, \(r = 5\%\), \(g = 3\%\): \(pb^* \approx 3.9\%\), a primary surplus few governments have sustained for long.`,
            ],
            why: ['an unfavourable gap', 'a favourable gap', 'the same gap on a bigger debt'],
            answer: 'The same interest–growth gap demands twice the effort at twice the debt. High debt is not automatically a crisis, but it leaves less room if r rises.',
          },
        },
        { t: 'econ-viz', viz: 'debt-path' },
      ],
    },
    {
      id: 'snowball',
      title: 'Snowballs and melting debt',
      lead: 'What r − g does over 40 years.',
      blocks: [
        {
          t: 'plot',
          title: 'Debt ratio paths from 100% of GDP',
          x: [0, 40],
          y: [50, 230],
          xLabel: 'years',
          yLabel: 'debt (% of GDP)',
          data: [
            { pts: path(100, 0.05, 0.03, 0), label: 'r 5%, g 3%, balanced primary' },
            { pts: path(100, 0.05, 0.03, 2), label: 'r 5%, g 3%, primary surplus 2%' },
            { pts: path(100, 0.03, 0.04, 0), label: 'r 3%, g 4%, balanced primary' },
            { pts: path(100, 0.03, 0.04, -2), label: 'r 3%, g 4%, primary deficit 2%', dashed: true },
          ],
          caption: 'With r above g and no primary surplus, debt more than doubles in 40 years. A 2% primary surplus roughly holds it. With r below g, a balanced primary budget lets the ratio fall by a third; even a 2% primary deficit only drifts it up slowly towards about 208%.',
        },
        {
          t: 'table',
          head: ['Scenario', 'Debt after 10 years', 'After 20', 'After 40'],
          rows: [
            ['r 5%, g 3%, pb 0', '121%', '147%', '216%'],
            ['r 5%, g 3%, pb +2%', '99%', '99%', '97%'],
            ['r 3%, g 4%, pb 0', '91%', '82%', '68%'],
            ['r 3%, g 4%, pb −2%', '110%', '119%', '135%'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`r < g: \quad b_t \;\longrightarrow\; b_\infty = \frac{-pb\,(1 + g)}{g - r}`,
          plain: 'When the interest rate is below the growth rate, a constant primary deficit does not make debt explode: the ratio converges to a finite level. The smaller the gap between g and r, the higher that level.',
          syntax: [{ sym: String.raw`b_\infty`, say: 'The long-run debt ratio the path converges to.' }],
          worked: {
            steps: [
              String.raw`Set \(b_{t+1} = b_t = b\): \(b = \tfrac{1 + r}{1 + g}b - pb\), so \(b\left(1 - \tfrac{1 + r}{1 + g}\right) = -pb\).`,
              String.raw`\(1 - \tfrac{1 + r}{1 + g} = \tfrac{g - r}{1 + g}\), so \(b = \dfrac{-pb(1 + g)}{g - r}\).`,
              String.raw`With \(pb = -2\%\), \(g = 4\%\), \(r = 3\%\): \(b_\infty = 2 \times 1.04 / 0.01 = 208\%\).`,
            ],
            why: ['a steady state', 'simplify', 'plug in'],
            answer: 'Olivier Blanchard’s 2019 presidential address to the American Economic Association pointed out that r has been below g in the US for most of its history, which makes public debt less costly than it looks, but warned that the gap can reverse.',
          },
        },
      ],
    },
    {
      id: 'premium',
      title: 'When markets lose confidence',
      lead: 'The risk-premium spiral.',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Investors doubt repayment', body: 'They demand a higher interest rate to hold the debt.' },
            { name: 'r rises', body: 'Interest costs increase and the snowball term (r − g)b grows.' },
            { name: 'Debt rises faster', body: 'The government needs larger primary surpluses, which may not be politically possible.' },
            { name: 'Doubts grow', body: 'A higher debt path justifies an even higher premium.' },
          ],
          caption: 'A self-fulfilling crisis: the same country can be solvent at a low interest rate and insolvent at a high one. Guillermo Calvo (1988) showed there can be two equilibria. A central bank willing to buy the debt can rule out the bad one, as the ECB’s 2012 pledge to do "whatever it takes" did for the euro area.',
        },
        {
          t: 'math',
          tex: String.raw`r = r_{safe} + \phi\,(b - \bar{b}) \;\Rightarrow\; pb^* = \frac{r_{safe} + \phi(b - \bar{b}) - g}{1 + g}\,b`,
          plain: 'If the risk premium rises with the debt ratio above some comfortable level, the primary surplus needed to stabilise debt rises faster than the debt itself, because both the rate and the base grow.',
          syntax: [
            { sym: String.raw`\phi`, say: 'Read "phi": how much the risk premium rises per point of debt above the threshold.' },
            { sym: String.raw`\bar{b}`, say: 'The debt level above which investors start demanding a premium.' },
          ],
          worked: {
            steps: [
              String.raw`\(r_{safe} = 3\%\), \(g = 3\%\), threshold 90%, \(\phi = 0.05\) (5 basis points per point of debt above 90%).`,
              String.raw`At \(b = 100\%\): \(r = 3 + 0.5 = 3.5\%\), \(pb^* = 0.005/1.03 \times 100 \approx 0.49\%\).`,
              String.raw`At \(b = 150\%\): \(r = 3 + 3 = 6\%\), \(pb^* = 0.03/1.03 \times 150 \approx 4.4\%\).`,
            ],
            why: ['an assumed premium schedule', 'modest at 100%', 'nine times as much at 150%'],
            answer: 'Half again as much debt needs nine times the primary surplus. This nonlinearity is why debt crises tend to arrive suddenly.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Greece, 2010', tag: 'crisis', body: 'Revised figures revealed a much larger deficit than reported; with debt well above 120% of GDP and borrowing in a currency it could not print, Greece lost market access, received EU and IMF loans and restructured private debt in 2012, the largest sovereign restructuring on record at the time.' },
            { title: 'Japan', tag: 'high debt, no crisis', body: 'Gross public debt above 200% of GDP, yet very low interest rates for decades: the debt is in yen, held mostly at home and by the Bank of Japan, and the country has large foreign assets.' },
            { title: 'Debt in your own currency', tag: 'why it matters', body: 'A government that borrows in its own currency cannot be forced to default for lack of cash, since its central bank can create the money, though doing so risks inflation. Debt in foreign currency, as in many emerging-market crises, carries no such backstop.' },
            { title: 'Gross and net debt', tag: 'look at assets too', body: 'Some governments borrow to buy assets. Singapore’s gross debt is high, but its assets exceed its debts: its net position is strongly positive. See [Singapore’s fiscal model](@economics/fiscal/singapore-fiscal-model).' },
          ],
        },
      ],
    },
    {
      id: 'reduce',
      title: 'How debts come down',
      lead: 'Five routes, used in combination.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`b_{after} = \frac{b}{1 + \pi^{surprise}} \quad\text{(nominal, fixed-rate debt)}`,
          plain: 'Debt is mostly fixed in money terms. If prices and nominal GDP jump unexpectedly, the debt does not, so the ratio falls. Expected inflation does not work the same way, because lenders build it into interest rates.',
          syntax: [{ sym: String.raw`\pi^{surprise}`, say: 'Inflation above what was expected when the debt was issued.' }],
          worked: {
            steps: [
              String.raw`Debt 100% of GDP. Prices jump 10% more than expected, so nominal GDP is 10% higher than planned.`,
              String.raw`\(b = 100/1.10 \approx 91\%\).`,
              String.raw`The bondholders lose: their bonds buy about 9% less. Next time, they will demand higher rates or inflation-linked bonds.`,
            ],
            why: ['an inflation surprise', 'the ratio falls by about 9 points', 'it works only by surprise, and only once'],
            answer: 'Surprise inflation is a hidden tax on bondholders, which is why independent central banks and inflation-linked bonds exist.',
          },
        },
        {
          t: 'table',
          head: ['Route', 'How it works', 'Example'],
          rows: [
            ['Primary surpluses', 'Tax more than you spend, excluding interest', 'Belgium, Denmark and Canada in the 1990s'],
            ['Growth', 'Raise g so the denominator grows faster', 'Post-war booms everywhere'],
            ['Surprise inflation', 'Erode the real value of fixed nominal debt', 'US and UK after 1945, together with growth'],
            ['Financial repression', 'Keep interest rates below inflation by regulation (caps on rates, forcing banks and pension funds to hold government bonds)', 'Many rich countries, 1945–1970s'],
            ['Default or restructuring', 'Pay less than promised', 'Argentina (several times), Greece 2012, Sri Lanka 2022'],
          ],
          caption: 'US federal debt held by the public peaked at about 106% of GDP in 1946 and fell below 25% by the mid-1970s, almost entirely through growth, inflation and negative real interest rates rather than repayment.',
        },
        {
          t: 'metric',
          name: 'the interest–growth differential (r − g)',
          shows: 'Whether time is working for or against a government’s debt. It compares the average interest rate the government pays with the growth rate of nominal GDP.',
          eli5: 'If your income grows faster than the interest on your credit card, the card gets smaller relative to your income even if you only pay the interest. If interest grows faster than your income, it eats you alive unless you pay down principal.',
          higher: 'A positive and rising r − g means debt grows on its own; primary surpluses are needed just to stand still. This usually happens when rates rise sharply, risk premiums jump, or growth stalls.',
          lower: 'A negative r − g means the ratio falls without effort, giving fiscal space. Rich economies enjoyed this for most of 2010–2021.',
          typical: 'For many advanced economies r − g was around −1 to −3 points in the 2010s; it rose towards zero or above as interest rates climbed in 2022–24. Because most debt is long-term, the average r paid moves slowly.',
        },
      ],
    },
  ],
  sources: [
    'Blanchard, O. (2019). Public debt and low interest rates. *American Economic Review*, 109(4), 1197–1229.',
    'Calvo, G. A. (1988). Servicing the public debt: The role of expectations. *American Economic Review*, 78(4), 647–661.',
    'Reinhart, C. M., and Sbrancia, M. B. (2015). The liquidation of government debt. *Economic Policy*, 30(82), 291–333.',
    'Hall, G. J., and Sargent, T. J. (2011). Interest rate risk and other determinants of post-WWII US government debt/GDP dynamics. *American Economic Journal: Macroeconomics*, 3(3), 192–214.',
    'International Monetary Fund. *Fiscal Monitor* (various issues).',
  ],
  related: ['economics/fiscal/budgets-and-stabilisers', 'economics/fiscal/singapore-fiscal-model', 'finance/assets/bonds'],
}

export default guide
