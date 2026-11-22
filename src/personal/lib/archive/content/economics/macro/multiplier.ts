import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'When a government spends an extra dollar on a new hospital, the builders who are paid spend part of their wages at shops, the shopkeepers spend part of that, and so on. Total income can rise by more than the original dollar. That chain is the multiplier, the central idea of John Maynard Keynes’s 1936 General Theory and still at the heart of every debate about fiscal stimulus. This guide derives the multiplier from the consumption function and the Keynesian cross, sums the rounds of spending as a geometric series, shows how taxes, saving and imports leak spending out of the chain, explains the paradox of thrift, and reviews what the evidence says multipliers really are, including why they are small in a very open economy like Singapore.',
  nutshell: [
    'Households spend a fraction **c** of extra disposable income: the **marginal propensity to consume** (MPC).',
    'In equilibrium output equals planned spending. A rise in spending ΔG raises output by **ΔG / (1 − c)** in the simplest model.',
    'The multiplier is a **geometric series**: 1 + c + c² + … = 1/(1 − c).',
    '**Leakages** (saving, taxes and imports) shrink it: with tax rate t and import share m, **k = 1 / (1 − c(1 − t)(1 − m))**.',
    'If everyone tries to save more at once, income falls and total saving may not rise: the **paradox of thrift**. Real-world multipliers range from about **0 to 2**, highest in deep recessions.',
  ],
  sections: [
    {
      id: 'cross',
      title: 'The consumption function and the Keynesian cross',
      lead: 'Spending creates income.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C = a + c\,(Y - T), \qquad E = C + I + G, \qquad \text{equilibrium: } Y = E`,
          plain: 'Consumption has a fixed part a (what people spend even with no income, from savings or borrowing) and a part that rises with disposable income. Planned expenditure E is consumption plus investment plus government spending. Output adjusts until what is produced equals what people plan to buy: if firms produce more than is bought, unsold stock piles up and they cut back.',
          syntax: [
            { sym: String.raw`c`, say: 'The marginal propensity to consume: the share of an extra dollar of disposable income that is spent.' },
            { sym: String.raw`Y - T`, say: 'Disposable income: income minus taxes.' },
          ],
          where: [
            { sym: 'a', def: 'Autonomous consumption' },
            { sym: 'I, G', def: 'Planned investment and government purchases, taken as given' },
            { sym: 'T', def: 'Taxes, here a lump sum' },
          ],
          worked: {
            steps: [
              String.raw`\(a = 40\), \(c = 0.8\), \(I = 60\), \(G = 50\), \(T = 0\).`,
              String.raw`\(Y = 40 + 0.8Y + 60 + 50\), so \(0.2Y = 150\) and \(Y = 750\).`,
              String.raw`Government spending rises by 10: \(0.2Y = 160\), so \(Y = 800\).`,
              String.raw`\(\Delta Y = 50 = 10 \times \tfrac{1}{1 - 0.8}\).`,
            ],
            why: ['the economy', 'solve Y = E', 'add 10 to G', 'the multiplier is 5'],
            answer: 'A $10 billion rise in government spending raises output by $50 billion when households spend 80 cents of every extra dollar.',
          },
        },
        {
          t: 'plot',
          title: 'The Keynesian cross',
          x: [0, 1000],
          y: [0, 1000],
          xLabel: 'output and income Y',
          yLabel: 'planned expenditure E',
          curves: [
            { f: (y: number) => y, label: '45° line: Y = E', dashed: true },
            { f: (y: number) => 150 + 0.8 * y, label: 'planned spending' },
            { f: (y: number) => 160 + 0.8 * y, label: 'after G rises by 10' },
          ],
          points: [
            { x: 750, y: 750, label: 'Y = 750' },
            { x: 800, y: 800, label: 'Y = 800' },
          ],
          caption: 'Equilibrium is where planned spending crosses the 45° line. Because the spending line is flatter than 45° (c < 1), a small upward shift moves the crossing a long way to the right: five times as far here.',
        },
      ],
    },
    {
      id: 'series',
      title: 'The multiplier as a geometric series',
      lead: 'Rounds of spending.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta Y = \Delta G\,(1 + c + c^2 + c^3 + \cdots) = \frac{\Delta G}{1 - c} \quad (0 < c < 1)`,
          plain: 'The first round is the government’s own spending. The people paid spend a fraction c of it (second round), the people they pay spend c of that (third round), and so on. Each round is c times the last, so the total is a geometric series, which adds up to 1/(1 − c) times the first round.',
          syntax: [
            { sym: String.raw`1 + c + c^2 + \cdots`, say: 'A geometric series: each term is c times the one before.' },
            { sym: String.raw`\frac{1}{1 - c}`, say: 'Its sum when c is between 0 and 1.' },
          ],
          worked: {
            title: 'Why the series sums to 1/(1 − c)',
            steps: [
              String.raw`Let \(S = 1 + c + c^2 + c^3 + \cdots\).`,
              String.raw`Multiply by c: \(cS = c + c^2 + c^3 + \cdots\).`,
              String.raw`Subtract: \(S - cS = 1\), every other term cancels.`,
              String.raw`So \(S = 1/(1 - c)\). With \(c = 0.8\), \(S = 5\).`,
              String.raw`Rounds of a $10 billion stimulus: 10, 8, 6.4, 5.12, 4.10… After 5 rounds $33.6 billion; the limit is $50 billion.`,
            ],
            why: ['name the sum', 'shift it by one term', 'the infinite tails match', 'solve', 'add the rounds'],
            answer: 'The multiplier is the sum of an infinite but shrinking chain. Most of the effect arrives in the first few rounds: two-thirds of the total within five rounds here.',
          },
        },
        {
          t: 'table',
          head: ['Round', 'Spending this round ($bn)', 'Cumulative ($bn)', 'Share of final total'],
          rows: [
            ['1 (government)', '10.00', '10.00', '20%'],
            ['2', '8.00', '18.00', '36%'],
            ['3', '6.40', '24.40', '49%'],
            ['4', '5.12', '29.52', '59%'],
            ['5', '4.10', '33.62', '67%'],
            ['10', '1.34', '44.63', '89%'],
            ['∞', '0', '50.00', '100%'],
          ],
          caption: 'c = 0.8. In reality rounds take months, so the full effect is spread over a year or two.',
        },
      ],
    },
    {
      id: 'leaks',
      title: 'Leakages: taxes, imports and the open economy',
      lead: 'Where the spending goes.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`k = \frac{1}{1 - c\,(1 - t)(1 - m)}`,
          plain: 'Each round, part of the income is taxed (a share t), part is saved (1 − c of what is left), and part of what is spent goes on imports (a share m), which is income for another country. Only c(1 − t)(1 − m) of each dollar is re-spent at home, so that, not c, is the ratio of the geometric series.',
          syntax: [
            { sym: String.raw`t`, say: 'The marginal tax rate on income.' },
            { sym: String.raw`m`, say: 'The share of each dollar of spending that buys imports.' },
          ],
          where: [{ sym: 'k', def: 'The spending multiplier' }],
          worked: {
            title: 'A large economy against a small open one',
            steps: [
              String.raw`Closed economy, no taxes: \(c = 0.8\): \(k = 1/0.2 = 5\).`,
              String.raw`Large economy: \(c = 0.9\), \(t = 0.25\), \(m = 0.15\). Re-spent share \(= 0.9 \times 0.75 \times 0.85 \approx 0.574\), so \(k \approx 2.35\).`,
              String.raw`Small, very open economy: \(c = 0.6\), \(t = 0.15\), \(m = 0.6\). Re-spent share \(= 0.6 \times 0.85 \times 0.4 = 0.204\), so \(k \approx 1.26\).`,
            ],
            why: ['the textbook case', 'taxes and modest import leakage', 'high saving and most spending going on imports'],
            answer: 'In a Singapore-like economy, most extra spending leaks abroad within a round or two, so domestic fiscal stimulus has a small multiplier, while a boom in trading partners (raising exports) has a large effect. Illustrative parameters, not official estimates.',
          },
        },
        { t: 'econ-viz', viz: 'multiplier' },
        {
          t: 'math',
          tex: String.raw`\frac{\Delta Y}{\Delta T} = -\frac{c}{1 - c}, \qquad \frac{\Delta Y}{\Delta G} + \frac{\Delta Y}{\Delta T} = \frac{1 - c}{1 - c} = 1`,
          plain: 'A tax cut has a smaller multiplier than the same amount of spending, because the first round is only the part of the tax cut that households spend. Raising spending and taxes by the same amount (a balanced budget) still raises output, one for one: the balanced-budget multiplier is exactly 1 in this simple model.',
          syntax: [{ sym: String.raw`\frac{\Delta Y}{\Delta T}`, say: 'The tax multiplier: the change in output per dollar change in (lump-sum) taxes.' }],
          worked: {
            steps: [
              String.raw`With \(c = 0.8\): spending multiplier 5, tax multiplier \(-0.8/0.2 = -4\).`,
              String.raw`Cut taxes by 10: output rises by 40, less than the 50 from spending 10.`,
              String.raw`Raise G and T by 10 each: \(+50 - 40 = +10\). Output rises by exactly the 10 spent.`,
            ],
            why: ['the two multipliers', 'households save 20% of the tax cut first', 'the balanced-budget result'],
            answer: 'In this model, how a stimulus is delivered matters: spending on goods and services does more per dollar than tax cuts, and transfers to households likely to spend (lower-income, credit-constrained) do more than transfers to savers.',
          },
        },
      ],
    },
    {
      id: 'thrift',
      title: 'The paradox of thrift',
      lead: 'Prudence for one, recession for all.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`S = Y - C - T = -a + (1 - c)Y - (1-c)T, \qquad \text{in equilibrium } S = I + G - T`,
          plain: 'If every household decides to save more, they spend less, so output and income fall. In this simple closed economy, total saving must equal investment plus the government deficit, which have not changed. So income falls until saving is back where it was: everyone tried to save more, and nobody did.',
          syntax: [{ sym: String.raw`S = I + G - T`, say: 'Private saving equals investment plus the budget deficit, the leakages-equal-injections identity.' }],
          worked: {
            steps: [
              String.raw`Back to \(a = 40\), \(c = 0.8\), \(I = 60\), \(G = 50\), \(T = 0\): \(Y = 750\), saving \(S = 750 - (40 + 600) = 110 = I + G\).`,
              String.raw`Households cut autonomous spending by 10 to save more: \(a = 30\). Now \(0.2Y = 140\), \(Y = 700\).`,
              String.raw`Saving at the new income: \(700 - (30 + 560) = 110\). Unchanged.`,
            ],
            why: ['the starting point', 'the attempt to save more lowers output by 50', 'total saving cannot rise if investment does not'],
            answer: 'Output falls by $50 billion and total saving does not rise at all. What is prudent for one household can be harmful when everyone does it at once in a slump, which is why governments often borrow when households and firms are cutting back.',
          },
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'When the paradox does not bite',
          text: 'If extra saving lowers interest rates and so raises investment, or if the economy is at full employment, saving does turn into more investment and faster growth. The paradox is a short-run result for an economy with idle resources and investment that does not respond to saving: Keynes’s world of 1936, and arguably 2009.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'How big are multipliers really?',
      lead: 'Crowding out, offsets and the evidence.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Crowding out', tag: 'smaller', body: 'Government borrowing can push up interest rates, reducing private investment and offsetting part of the stimulus. Strongest when the economy is near full capacity.' },
            { title: 'Monetary offset', tag: 'smaller', body: 'If the central bank thinks the stimulus will raise inflation, it raises rates, cancelling much of the effect. At the zero lower bound, it will not, so multipliers are bigger.' },
            { title: 'Ricardian equivalence', tag: 'smaller', body: 'If households expect higher future taxes to repay the debt, they may save a tax cut rather than spend it. See [budgets](@economics/fiscal/budgets-and-stabilisers).' },
            { title: 'Slack and confidence', tag: 'bigger', body: 'In a deep recession with idle workers and machines, extra demand raises output rather than prices, and support can prevent a downward spiral of layoffs and cutbacks.' },
          ],
        },
        {
          t: 'bars',
          title: 'Range of estimated government spending multipliers',
          items: [
            { label: 'Normal times (US)', value: 0.6, lo: 0.3, hi: 1.0, group: 'By state of the economy' },
            { label: 'Deep recession (US)', value: 1.8, lo: 1.0, hi: 2.5 },
            { label: 'Fixed exchange rate', value: 1.2, lo: 0.6, hi: 1.6, group: 'By exchange-rate regime' },
            { label: 'Flexible exchange rate', value: 0.1, lo: 0, hi: 0.5 },
            { label: 'Closed economies', value: 1.0, lo: 0.5, hi: 1.5, group: 'By openness' },
            { label: 'Very open economies', value: 0.2, lo: 0, hi: 0.6 },
          ],
          unit: 'output per $ of spending',
          min: 0,
          max: 2.6,
          decimals: 1,
          caption: 'Rough central values and ranges summarising Auerbach and Gorodnichenko (2012), Ramey (2019) and Ilzetzki, Mendoza and Végh (2013). Estimates vary widely with method and sample: treat these as orders of magnitude, not precise numbers.',
        },
        { t: 'p', text: 'Two lessons stand out. First, there is no single multiplier: it depends on the state of the economy, the monetary response and openness. Second, the simple formula overstates real-world multipliers, often by a lot, but in severe slumps with interest rates stuck at zero, well-targeted spending can raise output by more than it costs.' },
      ],
    },
  ],
  sources: [
    'Keynes, J. M. (1936). *The General Theory of Employment, Interest and Money*. Macmillan.',
    'Auerbach, A. J., and Gorodnichenko, Y. (2012). Measuring the output responses to fiscal policy. *American Economic Journal: Economic Policy*, 4(2), 1–27.',
    'Ilzetzki, E., Mendoza, E. G., and Végh, C. A. (2013). How big (small?) are fiscal multipliers? *Journal of Monetary Economics*, 60(2), 239–254.',
    'Ramey, V. A. (2019). Ten years after the financial crisis: What have we learned from the renaissance in fiscal research? *Journal of Economic Perspectives*, 33(2), 89–114.',
    'Blanchard, O. (2021). *Macroeconomics* (8th ed.), chapter 3. Pearson.',
  ],
  related: ['economics/macro/ad-as', 'economics/fiscal/budgets-and-stabilisers', 'economics/trade/balance-of-payments-and-trilemma'],
}

export default guide
