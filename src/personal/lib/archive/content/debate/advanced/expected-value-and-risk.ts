import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Once both sides have priced their impacts, a second argument starts: which decision rule should the judge use? Expected value, risk aversion, the precautionary principle and discounting are four different answers, and each of them is winnable. The mistake is to assume the judge shares yours — and the opportunity is that almost nobody argues for one explicitly.',
  nutshell: [
    '**Expected value** multiplies magnitude by probability. It is the default, and it is defensible for repeated decisions.',
    '**Risk aversion** says a certain small loss can beat an uncertain large gain. Defensible for one-shot and for ruin.',
    '**Irreversibility** is the strongest axis in practice: an error you cannot undo deserves a higher bar than one you can.',
    '**Discounting** prices future harms lower. Argue the rate, not the principle — the principle is nearly universal.',
    'The **precautionary principle** is a burden-shifting rule, not a magnitude claim, and should be argued as one.',
    'Every one of these is a framing move: state the rule, justify it, apply it to both sides, then win inside theirs too.',
  ],
  sections: [
    {
      id: 'ev',
      title: 'Expected value, and when it is the wrong rule',
      blocks: [
        {
          t: 'math',
          tex: '\\mathbb{E}[X] = \\sum_{i} p_i \\, x_i',
          plain: 'Add up each outcome multiplied by how likely it is. That average is what you would get if the decision were made many times.',
          where: [
            { sym: 'p_i', def: 'the probability of outcome \\(i\\)' },
            { sym: 'x_i', def: 'the value of outcome \\(i\\), in whatever currency the debate is using' },
          ],
          worked: {
            title: 'A policy with a small chance of a large failure',
            steps: ['90% chance of +100 (the gain works)', '10% chance of −600 (it backfires)', '\\(0.9 \\times 100 + 0.1 \\times (-600)\\)'],
            why: ['the likely case', 'the tail', 'weight each by its probability'],
            answer: '+90 − 60 = +30. Positive on expected value, and still a policy many people would refuse — which is the whole debate.',
          },
        },
        { t: 'p', text: 'Expected value is the right rule when the decision repeats, the stakes are survivable, and the currency is genuinely additive. It is the wrong rule — or at least an arguable one — when any of those fails, and naming which one fails is how you beat it.' },
        {
          t: 'table',
          head: ['Condition', 'Expected value is …', 'The argument against it'],
          rows: [
            ['A regulator making thousands of similar calls', 'Right', 'Almost none; the averaging actually happens.'],
            ['A one-off decision with no second chance', 'Arguable', 'There is no long run to average over; the realised outcome is the only one.'],
            ['An outcome that ends the decision-maker', 'Wrong', 'Ruin is absorbing: you cannot replay from zero. This is the Kelly argument.'],
            ['Currencies that are not commensurable', 'Wrong', 'Adding rights violations to pounds requires an exchange rate nobody has defended.'],
            ['Probabilities that are themselves unknown', 'Weak', 'Knightian uncertainty: you can price risk, not ambiguity. Argue for robustness instead.'],
          ],
        },
      ],
    },
    {
      id: 'aversion',
      title: 'Risk aversion, formally and in English',
      blocks: [
        { t: 'p', text: 'Risk aversion is not irrationality; it is what happens when the value of an outcome grows more slowly than its size. The second unit of money, safety or time is worth less than the first, so a gamble with the same expected value as a certainty is worth less than the certainty.' },
        {
          t: 'math',
          tex: 'U(x) = \\log(x) \;\\Rightarrow\; \\mathbb{E}[U] \\neq U(\\mathbb{E}[X])',
          plain: 'If value grows like a logarithm, the average of the values is not the value of the average: a coin flip between twice and nothing is worse than keeping what you have.',
          where: [
            { sym: 'U(x)', def: 'the value, or utility, of outcome \\(x\\)' },
            { sym: '\\mathbb{E}[U]', def: 'the average value across outcomes' },
          ],
          worked: {
            title: 'A fair double-or-nothing on a household budget',
            steps: ['Hold 100 with certainty: \\(U = \\log 100 = 4.61\\).', 'Gamble: half chance of 200, half of 0.', '\\(0.5 \\log 200 + 0.5 \\log(0.01) \\approx 0.5(5.30) + 0.5(-4.61)\\)'],
            why: ['the status quo', 'identical expected money: 100', 'log of near-zero is catastrophic'],
            answer: '≈ 0.34, far below 4.61. Same expected money, much worse outcome — which is why "the expected value is positive" is not the end of an argument about people who cannot absorb a loss.',
          },
          caption: 'The debating version needs no algebra: "the same average is not the same deal when one of the outcomes takes the floor out from under you."',
        },
        {
          t: 'example',
          title: 'Saying it without the maths',
          lines: [
            { label: 'Them', text: '"On average the reform makes households better off by £400 a year."' },
            { label: 'You', text: '"Averages are the wrong instrument here. The gain is spread across households who could absorb the loss anyway; the loss falls on the quarter who cannot absorb a month without heating. The same number, distributed like that, is not the same policy."' },
            { label: 'What you did', text: 'Argued diminishing marginal value and distribution without using either phrase — which is the register most judges prefer.' },
          ],
        },
      ],
    },
    {
      id: 'irreversible',
      title: 'Irreversibility and option value',
      blocks: [
        { t: 'p', text: 'This is the axis that wins the most close rounds, and the reason is structural: when both sides are uncertain, the side whose error can be corrected has an argument the other side cannot match. Economists call the thing being protected **option value** — the worth of keeping a choice available.' },
        {
          t: 'levels',
          caption: 'A ladder of reversibility, strongest argument at the top.',
          items: [
            { name: 'Extinction-level or absorbing', body: 'No recovery, no learning, no second attempt. Here even a small probability dominates, and the argument is about whether the probability is real rather than whether it is large.', verbs: ['ends'] },
            { name: 'Generational', body: 'Recoverable in principle, over decades: an institution destroyed, a species lost, a trust broken. The cost of error is the recovery time.', verbs: ['scars'] },
            { name: 'Expensive but reversible', body: 'A policy that can be repealed after money is spent. The argument is about sunk cost and political feasibility, not about permanence.', verbs: ['costs'] },
            { name: 'Trivially reversible', body: 'A pilot, a sunset clause, a trial in one city. Very hard to argue against on risk grounds — which is why proposing one is good strategy.', verbs: ['tests'] },
          ],
        },
        { t: 'debate-lab', viz: 'weighing' },
        { t: 'callout', tone: 'tip', title: 'The sunset clause move', text: 'If you are proposition and losing on risk, build reversibility into your model: a two-year pilot, a sunset clause, a review trigger. It costs you almost nothing in the mechanism and it takes the irreversibility axis away from opposition entirely. Conversely, as opposition, attack the model that has no exit: "they have no way of finding out they were wrong."' },
      ],
    },
    {
      id: 'precaution',
      title: 'The precautionary principle, argued properly',
      blocks: [
        { t: 'p', text: 'The principle is usually deployed as though it were a fact about magnitudes. It is not: it is a rule about **who carries the burden** when the evidence is incomplete. Argued as a burden rule it is strong; argued as "this might be catastrophic" it collapses into the chain-probability problem.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The strong form', tag: 'Hard to defend', body: '"No action may be taken until it is shown to be safe." Self-defeating, because inaction also has effects, and nothing is ever shown to be safe in full.' },
            { title: 'The burden form', tag: 'Defensible', body: '"Where a harm would be severe and irreversible, the proposer carries the burden of showing it is unlikely." A rule about proof, not about size.' },
            { title: 'The option form', tag: 'Strongest', body: '"Prefer the policy that keeps choices open, at equal expected value." Rarely contested, because it concedes the arithmetic.' },
            { title: 'The answer to it', tag: 'If you are proposition', body: 'Apply it symmetrically: "inaction is also an irreversible choice, and it is the one currently being made." Then offer a reversible model.' },
          ],
        },
      ],
    },
    {
      id: 'time',
      title: 'Discounting the future',
      blocks: [
        { t: 'p', text: 'Almost everyone discounts future harms, and the debate is about the rate rather than the principle. This is worth knowing precisely, because the rate decides climate, pensions, infrastructure and public-debt motions, and a difference of two percentage points changes the answer completely.' },
        {
          t: 'math',
          tex: 'PV = \\frac{H}{(1+r)^{t}}',
          plain: 'A harm that arrives later counts for less today, and how much less depends on the rate you choose and how far away it is.',
          where: [
            { sym: 'H', def: 'the harm when it arrives' },
            { sym: 'r', def: 'the discount rate per year' },
            { sym: 't', def: 'years until it arrives' },
          ],
          worked: {
            title: 'A harm of 1000 arriving in 50 years',
            steps: ['At \\(r = 0.01\\): \\(1000 / 1.01^{50}\\)', '\\(\\approx 608\\)', 'At \\(r = 0.05\\): \\(1000 / 1.05^{50}\\)', '\\(\\approx 87\\)'],
            why: ['the low rate used in the Stern Review', 'most of the harm still counts', 'a conventional market-ish rate', 'the same harm is now worth a seventh as much'],
            answer: '608 against 87. The entire disagreement between major climate economists is contained in that choice of rate, which is why "what rate are they using?" is a real cross-examination question.',
          },
        },
        {
          t: 'dodont',
          do: [
            'Name the rate implied by their argument: "they are discounting a harm fifty years out to almost nothing".',
            'Separate pure time preference from growth: future people being richer is a different argument from future people mattering less.',
            'Use hyperbolic discounting honestly when arguing about human behaviour rather than about policy.',
          ],
          dont: [
            'Claim the future should not be discounted at all; almost no framework agrees, and it invites an easy counterexample.',
            'Mix discounting with probability. A distant harm is both less certain and discounted, and double-counting is visible.',
          ],
        },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing your rule, and arguing for it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Work out which rule your case wins under', body: 'Price both sides on expected value first. If you lose, you need a different rule, and you need it to be principled rather than convenient.' },
            { title: 'Find the feature of this decision that justifies it', body: 'One-shot, ruinous, incommensurable, uncertain probabilities, or irreversible. One of the five almost always applies.' },
            { title: 'State the rule in one sentence, early', body: '"Where an error cannot be undone, the burden sits on the side proposing the change."' },
            { title: 'Apply it to both sides out loud', body: 'A rule applied only to them is transparent. Apply it to your own harm and show you still win.' },
            { title: 'Win inside their rule as well', body: '"And even on pure expected value, their four-link chain prices below our one-link harm." Never let the round rest on the framing alone.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Why this is worth the preparation', text: 'Judges are rarely given a decision rule and so supply one privately, usually expected value with a vague discomfort about tail risks. A team that supplies the rule explicitly, justifies it, and applies it honestly is handing the judge their own reasoning, which is the most reliable way to win a close round without a new argument.' },
      ],
    },
  ],
  sources: [
    'Bernoulli, D. (1738) Exposition of a New Theory on the Measurement of Risk, the origin of expected utility.',
    'Kelly, J. L. (1956) A New Interpretation of Information Rate, on ruin and growth-optimal betting.',
    'Arrow, K. and Fisher, A. (1974) Environmental Preservation, Uncertainty and Irreversibility, Quarterly Journal of Economics, on option value.',
    'Stern, N. (2007) The Economics of Climate Change, and Nordhaus, W. (2007) A Review of the Stern Review, on the discount-rate dispute.',
    'Sunstein, C. (2005) Laws of Fear: Beyond the Precautionary Principle. Cambridge University Press.',
  ],
  related: ['debate/advanced/probability-and-evidence', 'debate/structure/weighing', 'debate/winning/winning-tricks', 'economics/behavioural/prospect-theory'],
}

export default guide
