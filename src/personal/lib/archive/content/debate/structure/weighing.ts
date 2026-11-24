import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In most rounds both sides prove something true. The judge is then holding two harms and has to decide which one decides. Weighing is the work of making that decision for them — and it is the single highest-value skill in competitive debate, because it wins rounds you are otherwise losing.',
  nutshell: [
    'Five axes: **magnitude**, **probability**, **scope**, **timeframe**, **reversibility**.',
    'Weighing is **comparative**, not superlative: not "our impact is huge" but "ours is bigger than theirs, on this axis, for this reason".',
    'Name the axis you win on, and say why that axis should decide. Judges rarely volunteer a tiebreak.',
    'Probability multiplies down a causal chain, so a three-link catastrophe usually loses to a one-link inconvenience.',
    '**Irreversibility** is the quiet winner: a mistake that cannot be undone beats a larger one that can.',
    'Weighing is never new matter, which is why the last speech can always do it.',
  ],
  sections: [
    {
      id: 'axes',
      title: 'The five axes',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Magnitude', tag: 'How bad', body: 'The size of the effect on one person it reaches. A death, a job, an inconvenience: these are not commensurable by assertion, so say what makes yours worse.' },
            { title: 'Probability', tag: 'How likely', body: 'How reliably the chain actually runs. Each extra link multiplies the uncertainty, which is why long chains are weak even when each step sounds plausible.' },
            { title: 'Scope', tag: 'How many', body: 'The number affected, and crucially who: an impact on the worst-off carries weight most judges will accept without argument.' },
            { title: 'Timeframe', tag: 'How soon, how long', body: 'Immediate harms are more certain; permanent ones are larger. Say which kind yours is and why that is the relevant one here.' },
            { title: 'Reversibility', tag: 'Can we fix it', body: 'If we are wrong, what can be undone? A reversible mistake is an experiment; an irreversible one is a gamble.' },
          ],
        },
        { t: 'debate-lab', viz: 'weighing' },
        { t: 'p', text: 'The number the lab produces is illustrative, not a formula any judge uses. What is real is what it exposes: move one slider and watch the comparison flip. The axis that moves it furthest is the axis your summary speech should be about.' },
      ],
    },
    {
      id: 'how',
      title: 'How to say it',
      blocks: [
        { t: 'p', text: 'Weighing has a grammar. Most of it is one of four sentence shapes.' },
        {
          t: 'table',
          head: ['Move', 'Shape', 'Example'],
          rows: [
            ['Direct comparison', 'Ours is larger than theirs on X because Y.', '"Our harm reaches every bus passenger in the city; theirs reaches drivers who have an alternative."'],
            ['Even if', 'Even granting their best case, we still win because …', '"Even if every number they gave is right, those costs are recoverable and ours are not."'],
            ['Axis priority', 'This axis should decide, because …', '"Where an error cannot be undone, the burden sits on the side proposing the change."'],
            ['Pre-requisite', 'Their impact cannot happen unless ours is false.', '"There is no efficiency gain to enjoy if the system has already lost public consent."'],
          ],
        },
        {
          t: 'example',
          title: 'A full weighing paragraph',
          lines: [
            { label: 'Concede', text: '"We accept there is a cost to suburban commuters; we are not pretending otherwise."' },
            { label: 'Compare on scope', text: '"But that cost falls on the minority of journeys made by car, while our benefit falls on every bus, van and ambulance in the centre."' },
            { label: 'Compare on substitution', text: '"And their group has a substitute — park and ride, a longer route — while ours has none."' },
            { label: 'Name the axis', text: '"So this is a debate about who bears an unavoidable cost, and the answer should be the group with options rather than the group without."' },
            { label: 'Even-if', text: '"Even if you think the inconvenience is larger per person, it is temporary and reversible; a journey nobody can make is a job nobody can take."' },
          ],
        },
      ],
    },
    {
      id: 'probability',
      title: 'Why long causal chains lose',
      blocks: [
        { t: 'p', text: 'Debaters escalate impacts because large numbers feel persuasive. The arithmetic says otherwise: a chain of independent steps carries the product of their probabilities, so each extra link costs you more than the extra magnitude buys.' },
        {
          t: 'math',
          tex: 'P(\\text{impact}) = \\prod_{i=1}^{n} p_i',
          plain: 'The chance the whole story happens is the chance of every step happening, multiplied together. Four steps you are 70% sure of are not 70% — they are about a quarter.',
          where: [
            { sym: 'p_i', def: 'how likely step \\(i\\) is, given the step before it' },
            { sym: 'n', def: 'the number of links between the policy and the impact' },
          ],
          worked: {
            title: 'A four-link impact',
            steps: ['Each link is 70% likely: \\(0.7\\)', 'Four links: \\(0.7^4\\)', '\\(= 0.24\\)'],
            why: ['generous for a speculative chain', 'independent steps multiply', 'about one chance in four'],
            answer: 'A "catastrophic" impact at 24% weighs less than a modest harm at 90%, unless it is more than four times as large.',
          },
          caption: 'This is also the honest answer to impact inflation: ask them to defend the weakest link, and the product collapses.',
        },
        { t: 'callout', tone: 'tip', title: 'The two-link rule of thumb', text: 'Prefer an impact two steps from your mechanism over one five steps away, even if the distant one is more dramatic. If you must run the long chain, spend your time on the single weakest link rather than on the size of the outcome.' },
      ],
    },
    {
      id: 'comparing',
      title: 'Comparing incommensurable things',
      blocks: [
        { t: 'p', text: 'The hard cases are not bigger-versus-smaller, they are rights-versus-welfare, certainty-versus-scale, now-versus-later. There is no formula. There are, however, standard moves that judges accept.' },
        {
          t: 'table',
          head: ['Clash', 'The move that usually works'],
          rows: [
            ['A right against a benefit', 'Argue the right is a side-constraint: it sets the rules under which benefits are pursued, so it is prior rather than larger.'],
            ['Certain small against uncertain large', 'Argue for expected value, or against it — but argue for one, explicitly, and apply it to both sides.'],
            ['Now against later', 'Who bears each, and can the later harm still be prevented? Present harms to identified people beat future harms to statistical ones for most judges.'],
            ['Many slightly against few severely', 'Argue either aggregate scope or priority to the worst-off. Say which principle you are using; do not switch between issues.'],
            ['Process against outcome', 'If legitimacy fails, outcomes do not survive either: make the process argument a pre-requisite rather than a competing good.'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Do not switch standards mid-round', text: 'Using aggregate welfare on the issue where you have the big number and priority-to-the-worst-off on the issue where you have the sympathetic case is the most commonly caught inconsistency in debate. A third speaker who notices costs you both issues.' },
      ],
    },
    {
      id: 'when',
      title: 'When to weigh',
      blocks: [
        {
          t: 'levels',
          caption: 'Weighing is not one speech’s job. It escalates.',
          items: [
            { name: 'First speech', body: 'Plant the standard: say, in one sentence, what the debate should be judged on.', verbs: ['frame'] },
            { name: 'Second speech', body: 'Weigh each argument as you finish it: "this matters more than their point about X because …".', verbs: ['compare'] },
            { name: 'Third speech', body: 'Weigh across clashes: order the issues and say which decides.', verbs: ['rank'] },
            { name: 'Reply / final focus', body: 'Weigh only. Two issues, the comparison, and the even-if.', verbs: ['decide'] },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'What judges say in feedback', text: '"Neither team told me how to compare these" is the most common line in adjudication notes for close rounds. The team that fills that gap wins the round without adding a single new argument.' },
      ],
    },
  ],
  sources: [
    'World Universities Debating Championship Debating and Judging Manual, on comparative assessment.',
    'Broome, J. (1991) Weighing Goods. Blackwell, on comparing incommensurable values.',
    'National Speech and Debate Association judge training materials, on impact calculus.',
  ],
  related: ['debate/structure/argument-anatomy', 'debate/winning/winning-tricks', 'debate/systems/judging', 'debate/techniques/framing-and-burdens'],
}

export default guide
