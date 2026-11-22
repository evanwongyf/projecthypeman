import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Adverse selection is about hidden types before a deal; moral hazard is about hidden actions after it. Once you are insured you may drive less carefully; once an employee is hired, the employer cannot watch every hour; once a bank’s deposits are guaranteed, it may gamble with them. Whenever one person (the principal) relies on another (the agent) whose effort or care cannot be fully observed, the agent’s incentives matter. This guide shows how insurance changes behaviour and why deductibles exist, derives the classic trade-off between incentives and risk in pay contracts, explains why some firms pay above the going wage, and shows how limited liability and guarantees tempt banks into gambles.',
  nutshell: [
    '**Moral hazard**: when someone is protected from the consequences of their actions, they take less care.',
    '**Deductibles and co-payments** leave people with some of the cost so they keep taking care, at the price of less complete insurance.',
    'In a **principal–agent** relationship, stronger pay-for-performance raises effort but loads risk onto the agent: the optimal bonus rate is **β* = 1/(1 + rσ²)**.',
    'Incentives on **measurable** tasks pull effort away from unmeasured ones: **what gets measured gets gamed**.',
    '**Efficiency wages** make a job worth keeping; **limited liability** and **guarantees** make gambling attractive to banks, which capital rules counter.',
  ],
  sections: [
    {
      id: 'insurance',
      title: 'Moral hazard in insurance',
      lead: 'Why your policy has a deductible.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{take care} \iff \Delta p \times \text{(loss you bear)} \;\ge\; \text{cost of care}`,
          plain: 'You take a precaution when it lowers your expected loss by more than it costs you. Insurance shrinks the loss you personally bear, so it shrinks the benefit of taking care. With full insurance the benefit is zero.',
          syntax: [{ sym: String.raw`\Delta p`, say: 'The fall in the probability of a loss that the precaution achieves.' }],
          where: [
            { sym: 'loss you bear', def: 'The part of the loss not covered by insurance: all of it uninsured, the deductible if insured' },
            { sym: 'cost of care', def: 'The money, time or effort the precaution takes' },
          ],
          worked: {
            title: 'A driver choosing whether to take care',
            steps: [
              String.raw`Careless driving: 10% chance of a $10,000 accident a year. Careful driving: 5%. Being careful costs the driver the equivalent of $300 a year.`,
              String.raw`Uninsured: care saves \(0.05 \times 10{,}000 = \$500\) of expected loss, more than $300. The driver is careful.`,
              String.raw`Fully insured: care saves the driver nothing, so they drive carelessly. The insurer’s expected payout doubles from $500 to $1,000.`,
              String.raw`With a deductible D, care saves \(0.05 \times D\). It is worth it if \(0.05D \ge 300\), i.e. \(D \ge \$6{,}000\).`,
            ],
            why: ['the setting', 'self-interest produces care', 'insurance removes the incentive', 'the deductible restores it'],
            answer: 'A $6,000 deductible keeps the driver careful, but it means they bear a large risk themselves. Insurers must balance protection against incentives, which is why deductibles, co-payments and no-claims discounts exist.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Deductibles', body: 'You pay the first $X of each claim. Small losses stay with you, so you still try to avoid them.' },
            { title: 'Co-insurance and co-payments', body: 'You pay a share of every claim. Singapore’s MediShield Life uses both a deductible and co-insurance, so patients still feel part of the cost of treatment.' },
            { title: 'No-claims discounts', body: 'Premiums fall the longer you go without claiming, so a claim costs you in future premiums.' },
            { title: 'Monitoring', body: 'Telematics boxes that record driving, or wearables that track activity, let insurers reward careful behaviour directly.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The RAND Health Insurance Experiment', text: 'From 1974 to 1982, the RAND Corporation randomly assigned about 2,000 US families to health plans that ranged from free care to plans where families paid 95% of costs up to a cap. Families with free care used substantially more medical care (on the order of a third more spending than the highest cost-sharing plan) with little measurable difference in health for the average participant, though poorer and sicker people did benefit. It remains the classic evidence that people respond to the price of care.' },
      ],
    },
    {
      id: 'agency',
      title: 'The principal–agent problem',
      lead: 'Incentives against insurance.',
      blocks: [
        { t: 'p', text: 'A shop owner hires a manager. Sales depend on the manager’s effort, which the owner cannot see, and on luck (weather, the economy), which neither controls. A fixed salary insures the manager against luck but gives no reason to work hard. Pure commission gives strong incentives but makes the manager’s income swing with luck, which a risk-averse manager dislikes and must be paid extra to accept. The best contract is in between.' },
        {
          t: 'math',
          tex: String.raw`w = \alpha + \beta y, \quad y = e + \varepsilon, \; \varepsilon \sim N(0, \sigma^2), \quad \text{cost of effort } \tfrac12 e^2 \qquad\Rightarrow\qquad \beta^* = \frac{1}{1 + r\sigma^2}`,
          plain: 'Pay a fixed salary α plus a share β of measured output y. Output is effort plus noise. The agent chooses effort equal to the bonus rate (e = β). A higher β means more effort but more income risk, which costs the agent rσ²β²/2 in "risk premium". Balancing the two gives the optimal bonus rate, which falls as the agent is more risk-averse (r) or the output measure noisier (σ²).',
          syntax: [
            { sym: String.raw`\beta`, say: 'Read "beta": the bonus rate, the share of each extra dollar of output paid to the agent.' },
            { sym: String.raw`\varepsilon \sim N(0, \sigma^2)`, say: 'Read "epsilon is normal with mean zero and variance sigma squared": random luck.' },
            { sym: String.raw`r`, say: 'The agent’s coefficient of risk aversion.' },
          ],
          where: [
            { sym: 'α', def: 'Fixed salary' },
            { sym: 'e', def: 'The agent’s effort, which the principal cannot observe' },
            { sym: 'σ²', def: 'How noisy measured output is as a signal of effort' },
          ],
          worked: {
            title: 'Deriving the optimal bonus rate',
            steps: [
              String.raw`The agent maximises \(\mathbb{E}[w] - \tfrac12 e^2 - \tfrac12 r\beta^2\sigma^2 = \alpha + \beta e - \tfrac12 e^2 - \tfrac12 r\beta^2\sigma^2\). Setting the derivative in e to zero gives \(e = \beta\).`,
              String.raw`Total surplus (output minus effort cost minus risk cost) is \(S(\beta) = \beta - \tfrac12\beta^2 - \tfrac12 r\sigma^2\beta^2\), since the salary is just a transfer.`,
              String.raw`\(S'(\beta) = 1 - \beta(1 + r\sigma^2) = 0\), so \(\beta^* = 1/(1 + r\sigma^2)\).`,
              String.raw`If \(r\sigma^2 = 1\): \(\beta^* = 0.5\), a 50% commission. If sales are very noisy, \(r\sigma^2 = 4\): \(\beta^* = 0.2\).`,
            ],
            why: ['the agent’s best response to the contract', 'the salary moves money between the two but does not create value', 'maximise surplus over β', 'put in numbers'],
            answer: 'Strong incentives make sense when performance is measured precisely and the agent can bear risk; when results are mostly luck, pay should be mostly salary. This is the Holmström–Milgrom model; Bengt Holmström shared the 2016 Nobel Prize for contract theory.',
          },
        },
        {
          t: 'plot',
          title: 'Optimal bonus rate against measurement noise',
          x: [0, 6],
          y: [0, 1.05],
          xLabel: 'r × σ² (risk aversion × noise)',
          yLabel: 'optimal bonus rate β*',
          curves: [{ f: (x: number) => 1 / (1 + x), label: 'β* = 1/(1 + rσ²)' }],
          points: [
            { x: 0, y: 1, label: 'no noise: pure commission' },
            { x: 1, y: 0.5, label: '50%' },
            { x: 4, y: 0.2, label: '20%' },
          ],
          caption: 'A salesperson whose results closely track effort (low noise) gets a big commission; a researcher whose breakthroughs depend on luck gets mostly salary.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Multitasking', tag: 'Holmström and Milgrom, 1991', body: 'If a job has measurable and unmeasurable parts, strong incentives on the measurable part pull effort away from the rest. Paying teachers on test scores can produce teaching to the test; paying call centres on call length produces rushed calls.' },
            { title: 'Goodhart’s law', tag: 'targets stop measuring', body: '"When a measure becomes a target, it ceases to be a good measure." In 2016 Wells Fargo was found to have opened millions of accounts customers had not asked for, after staff were set aggressive sales targets.' },
            { title: 'Relative performance pay', tag: 'filtering out luck', body: 'Paying an agent relative to peers facing the same luck (fund managers against a benchmark, salespeople against the region) removes common noise and allows stronger incentives.' },
            { title: 'CEO pay and stock options', tag: 'aligning owners and managers', body: 'Shares and options tie executives’ wealth to the share price, but options also reward risk-taking and short-term price boosts, which led to clawbacks and longer vesting periods.' },
          ],
        },
      ],
    },
    {
      id: 'efficiency-wages',
      title: 'Efficiency wages',
      lead: 'Why some firms pay more than they must.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{no shirking} \iff \underbrace{q\,(w - \bar{w})}_{\text{expected loss if caught}} \;\ge\; g \quad\Longleftrightarrow\quad w \ge \bar{w} + \frac{g}{q}`,
          plain: 'If a worker who shirks is caught with probability q and fired, they lose the gap between this job’s wage and what they could get elsewhere. They will work hard only if that expected loss exceeds what they gain by shirking. So the firm pays a premium above the outside wage, bigger when shirking is hard to detect.',
          syntax: [
            { sym: String.raw`\bar{w}`, say: 'Read "w bar": the wage the worker could get elsewhere.' },
            { sym: String.raw`q`, say: 'The chance a shirker is caught in a period.' },
            { sym: String.raw`g`, say: 'The value to the worker of shirking for a period (effort saved).' },
          ],
          worked: {
            steps: [
              String.raw`Outside wage $3,000 a month. Shirking saves the worker effort worth $200 a month. Chance of being caught each month: 25%.`,
              String.raw`Premium needed: \(g/q = 200/0.25 = \$800\).`,
              String.raw`The firm pays $3,800. If it could raise detection to 50%, it would need only $3,400.`,
            ],
            why: ['the setting', 'the no-shirking condition', 'monitoring and wages are substitutes'],
            answer: 'Firms that cannot easily monitor effort pay above the market wage so that losing the job really hurts. Shapiro and Stiglitz (1984) showed this can leave some unemployment even in equilibrium: the threat of not finding another job quickly is part of what makes the premium bite.',
          },
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Less shirking', body: 'The job is worth keeping, so workers protect it.' },
            { title: 'Lower turnover', body: 'In 1914 Henry Ford roughly doubled pay to $5 a day; turnover and absenteeism fell sharply and productivity rose.' },
            { title: 'Better applicants and morale', body: 'Higher pay attracts a larger pool to choose from, and workers who feel fairly treated reciprocate with effort (the gift-exchange idea).' },
          ],
        },
      ],
    },
    {
      id: 'banks',
      title: 'Moral hazard in finance',
      lead: 'Heads I win, tails the taxpayer loses.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{equity payoff} = \max(A - D, \, 0)`,
          plain: 'Shareholders of a firm with limited liability get whatever is left after debts are paid, but never less than zero. Their payoff looks like a call option on the firm’s assets: they gain all of the upside and lose at most their stake. If debts are guaranteed (insured deposits, an expected bailout), lenders do not charge for risk either, so taking risk becomes a one-way bet.',
          syntax: [
            { sym: String.raw`\max(A - D, 0)`, say: 'The larger of assets minus debts, or zero.' },
          ],
          where: [
            { sym: 'A', def: 'The value of the bank’s assets' },
            { sym: 'D', def: 'What the bank owes depositors' },
          ],
          worked: {
            title: 'A safe loan book or a gamble?',
            steps: [
              String.raw`A bank has $100 of assets, funded by $90 of insured deposits (paying nothing) and $10 of equity.`,
              String.raw`Safe strategy: assets grow to $105 for sure. Equity becomes \(105 - 90 = \$15\).`,
              String.raw`Gamble: 50% chance assets reach $150, 50% chance they fall to $50. Expected assets $100, worse than the safe $105.`,
              String.raw`Equity in the gamble: \(150 - 90 = 60\) or \(\max(50 - 90, 0) = 0\). Expected equity: $30, double the safe $15.`,
              String.raw`In the bad case the deposit insurer (and behind it the taxpayer) covers the $40 shortfall: an expected cost of $20.`,
            ],
            why: ['a thinly capitalised bank', 'the value-creating choice', 'the gamble destroys value on average', 'limited liability caps the shareholders’ loss', 'the downside is shifted'],
            answer: 'Shareholders prefer a gamble that destroys $5 of value on average, because the insurer bears the downside. With $30 of equity instead of $10, the gamble would pay equity holders less on average than the safe strategy: higher capital makes owners bear their own risks.',
          },
        },
        {
          t: 'table',
          head: ['Source of moral hazard', 'Remedy'],
          rows: [
            ['Deposit insurance lets banks borrow cheaply whatever their risk', 'Capital requirements; risk-based insurance premiums; supervision. See [capital and leverage](@banking/theory/capital-and-leverage)'],
            ['"Too big to fail": creditors expect a bailout', 'Extra capital for systemic banks; resolution regimes and bail-in so creditors, not taxpayers, absorb losses'],
            ['Bonuses paid on short-term profits from long-term risks', 'Deferred bonuses, clawbacks, paying part of bonuses in debt that loses value if the bank fails'],
            ['Central bank support in crises', 'Lend only against good collateral at a penalty rate (Bagehot’s rule)'],
          ],
        },
        {
          t: 'mindmap',
          center: 'Principal and agent, everywhere',
          branches: [
            { label: 'Shareholders and CEO', tone: 'orange', items: ['empire building', 'options and vesting'] },
            { label: 'Voters and politicians', tone: 'teal', items: ['short horizons', 'elections as the contract'] },
            { label: 'Patient and doctor', tone: 'mint', items: ['over-treatment when paid per service'] },
            { label: 'Client and fund manager', tone: 'lavender', items: ['closet indexing', 'fees on assets'] },
            { label: 'Homeowner and agent', tone: 'pink', items: ['sell fast, not high', 'commission is a small share'] },
            { label: 'Taxpayer and bank', tone: 'mustard', items: ['bailout expectations', 'capital rules'] },
          ],
        },
      ],
    },
  ],
  sources: [
    'Arrow, K. J. (1963). Uncertainty and the welfare economics of medical care. *American Economic Review*, 53(5), 941–973.',
    'Holmström, B., and Milgrom, P. (1987). Aggregation and linearity in the provision of intertemporal incentives. *Econometrica*, 55(2), 303–328.',
    'Holmström, B., and Milgrom, P. (1991). Multitask principal–agent analyses. *Journal of Law, Economics, and Organization*, 7, 24–52.',
    'Shapiro, C., and Stiglitz, J. E. (1984). Equilibrium unemployment as a worker discipline device. *American Economic Review*, 74(3), 433–444.',
    'Manning, W. G., et al. (1987). Health insurance and the demand for medical care: Evidence from a randomized experiment. *American Economic Review*, 77(3), 251–277.',
    'Raff, D. M. G., and Summers, L. H. (1987). Did Henry Ford pay efficiency wages? *Journal of Labor Economics*, 5(4), S57–S86.',
  ],
  related: ['economics/information/lemons-and-signalling', 'banking/theory/capital-and-leverage', 'economics/labour/wages-and-human-capital'],
}

export default guide
