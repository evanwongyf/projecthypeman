import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'These are the moves that decide rounds between teams of equal knowledge. None of them is a substitute for an argument; every one is a multiplier on an argument you already have. They are listed with the risk attached, because each of them fails in a specific way, and failing at a trick costs more than never attempting it.',
  nutshell: [
    'Own the **comparison**. The team that tells the judge how to decide usually wins what the judge decides.',
    '**Even-if** makes your position robust: you no longer need to win the argument, only the round.',
    '**Pre-empt** their best point in your own case, and it arrives as an answered objection rather than news.',
    '**Collapse** early: two issues argued well beat five mentioned.',
    'The **turn** is the highest-value single move available, and the most dangerous.',
    'Say the **concession** out loud. It buys credibility for everything you refuse to concede.',
  ],
  sections: [
    {
      id: 'twelve',
      title: 'The twelve moves',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: '1. Own the comparison', tag: 'Highest value', body: 'Name the axis the round should be decided on and win it loudly. Risk: an axis chosen only because you are losing elsewhere is transparent.' },
            { title: '2. The even-if', tag: 'Robustness', body: '"Even granting all of that, we win because …". Risk: used four times it reads as having conceded everything.' },
            { title: '3. The pre-empt', tag: 'Inoculation', body: 'Raise their best objection in your own case and answer it. Risk: pre-empting an argument they were not going to run gifts it to them.' },
            { title: '4. Collapse', tag: 'Focus', body: 'Choose the two issues you win and spend the back half there. Risk: collapsing onto the wrong issue, or collapsing before the other side has committed.' },
            { title: '5. The turn', tag: 'Biggest payoff', body: 'Their mechanism produces your conclusion. Risk: a failed turn is five minutes of restating their case.' },
            { title: '6. The strategic concession', tag: 'Credibility', body: 'Give them the true thing, loudly, then show what it does not buy. Risk: conceding something your own mechanism needs.' },
            { title: '7. The quoted concession', tag: 'Questioning', body: 'Extract an admission in cross-examination and repeat their words in your speech. Risk: overstating what they said; judges flowed it too.' },
            { title: '8. Characterisation', tag: 'Framing', body: 'Define who the actors really are before they do. Risk: a characterisation nobody recognises is worse than none.' },
            { title: '9. The pre-requisite', tag: 'Ordering', body: '"Their benefit cannot exist unless our issue is settled first." Risk: works only if the dependency is genuine.' },
            { title: '10. The dilemma', tag: 'Pressure', body: 'Both versions of their model fail. Risk: they name a third version you had not considered.' },
            { title: '11. Crystallisation', tag: 'Last speech', body: 'Reduce the round to two named issues with a verdict on each. Risk: none, which is why every last speech should do it.' },
            { title: '12. The explicit ballot', tag: 'Closing', body: 'Give the judge the sentence you want them to write. Risk: none, if it is accurate; serious, if it misdescribes the round.' },
          ],
        },
      ],
    },
    {
      id: 'comparison',
      title: 'Why the comparison is worth more than an argument',
      blocks: [
        { t: 'p', text: 'A new argument at the end of a close round adds one thing the judge must weigh. A comparison tells them how to weigh everything already there. One is addition; the other is multiplication.' },
        { t: 'debate-lab', viz: 'weighing' },
        {
          t: 'example',
          title: 'The same position, with and without the comparison',
          lines: [
            { label: 'Without', text: '"We have shown that bus passengers gain and that the policy is enforceable."' },
            { label: 'With', text: '"Both sides have a harm. Theirs falls on drivers who have a slower alternative; ours falls on people with no alternative at all. Nothing in their case answers that asymmetry, and it is the only axis on which the two harms can be compared at all."' },
            { label: 'Why it wins', text: 'The judge was going to have to perform that comparison privately. You performed it publicly, in terms they can adopt, and the other team never contested the terms.' },
          ],
        },
      ],
    },
    {
      id: 'preempt',
      title: 'Pre-empting properly',
      blocks: [
        { t: 'p', text: 'A pre-empt converts their strongest attack into a point you have already dealt with. It works because of an effect with experimental support: an audience that has heard a weakened version of an attack, with a refutation, discounts the strong version when it arrives. See [persuasion science](@debate/schools/persuasion-science).' },
        {
          t: 'steps',
          items: [
            { title: 'Pick exactly one', body: 'Their single most likely strong objection. Two pre-empts is a defensive case; three is a concession speech.' },
            { title: 'State it at full strength', body: 'A weak version is a straw man, and the inoculation does not take.' },
            { title: 'Answer it in two sentences', body: 'Not the whole rebuttal — enough that when it arrives, the judge has already filed an answer next to it.' },
            { title: 'Name it when it comes', body: '"This is the point we addressed in our first speech, and they have added nothing to it."' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The pre-empt that backfires', text: 'Raising an objection the other side had not thought of, and answering it badly. You have now introduced their best argument and shown you are worried about it. If your answer is weak, stay quiet and prepare the rebuttal instead.' },
      ],
    },
    {
      id: 'collapse',
      title: 'Collapsing',
      blocks: [
        { t: 'p', text: 'Collapsing means abandoning arguments you could defend in order to win the ones that decide. It feels like loss and it is almost always right, because judges weigh depth and no judge rewards coverage for its own sake.' },
        {
          t: 'table',
          head: ['When', 'Collapse onto'],
          rows: [
            ['They have conceded or barely answered an issue', 'That one. An uncontested issue is free.'],
            ['Your mechanism is strong and theirs is speculative', 'Probability: make the round about which story is likely.'],
            ['You are losing the practical debate', 'The principle, if you ran one — but only if you ran one.'],
            ['Both sides have symmetric harms', 'Scope, or irreversibility: the axes that break symmetry.'],
            ['You cannot tell which you are winning', 'Whichever you can explain in two sentences without notes.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Collapse after they commit', text: 'In formats with a summary, collapse in the summary rather than the rebuttal. Collapse too early and they reallocate their time to the issue you kept; collapse after their last substantive and they cannot.' },
      ],
    },
    {
      id: 'ballot',
      title: 'Writing the ballot for them',
      blocks: [
        { t: 'p', text: 'Finish by giving the judge a sentence. Judges write reasons for decision under time pressure, and a clean, accurate sentence that fits what happened in the round is very likely to become the one they use.' },
        {
          t: 'example',
          title: 'Closing lines that get copied',
          lines: [
            { label: 'Policy motion', text: '"This debate came down to who bears an unavoidable cost, and only one side named a group with no alternative."' },
            { label: 'Value motion', text: '"They never contested our standard, and on their own numbers they lose under it."' },
            { label: 'Prediction motion', text: '"Their impact needs four steps and ours needs one. That is the whole round."' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'It has to be true', text: 'A closing sentence that misdescribes the round is the fastest way to lose a judge who flowed it. If they did contest your standard, do not say they did not: say why their contest failed. Credibility is the resource every one of these moves spends.' },
      ],
    },
  ],
  sources: [
    'McGuire, W. (1964) Inducing Resistance to Persuasion, on inoculation.',
    'Allen, M. (1991) one-sided versus two-sided message meta-analysis.',
    'World Universities Debating Championship Debating and Judging Manual, on comparative assessment.',
  ],
  related: ['debate/structure/weighing', 'debate/winning/strategy-and-time', 'debate/techniques/refutation-techniques', 'debate/winning/dirty-tricks'],
}

export default guide
