import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There are perhaps ten ways to attack an argument, and every piece of rebuttal you will ever give is one of them. Knowing the list by name matters because under time pressure you do not invent a response — you recognise which of ten shapes fits, and that recognition is what fast rebuttal actually is.',
  nutshell: [
    '**Deny** the premise, **break** the link, or **reverse** the conclusion: the three families everything else sits in.',
    '**Mitigation** shrinks an argument instead of killing it, and is usually more honest and more credible than denial.',
    'A **turn** uses their own mechanism against them. It is the highest-value move and the riskiest.',
    '**Even-if** structures make your win robust: you do not have to beat the argument to beat the round.',
    'A **dilemma** attacks both branches of a position, so no answer is safe.',
    '**Strategic concession** buys time and credibility: give them the true thing, then show it does not reach their conclusion.',
  ],
  sections: [
    {
      id: 'toolkit',
      title: 'The toolkit',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Denial', def: 'The premise is false. Needs evidence or a mechanism; bare contradiction is worth nothing.' },
            { term: 'De-link', def: 'The premise is true but does not produce the conclusion. The most under-used attack and often the strongest.' },
            { term: 'Mitigation', def: 'The effect is real but much smaller, rarer, or narrower than claimed.' },
            { term: 'Turn', def: 'Their mechanism, correctly followed, produces the opposite of their conclusion.' },
            { term: 'Alternative cause', def: 'Something else explains the evidence; their policy is not doing the work.' },
            { term: 'Counterexample', def: 'A case where the mechanism should have run and did not.' },
            { term: 'Dilemma', def: 'Both available versions of their position fail, for different reasons.' },
            { term: 'Reductio', def: 'Their principle, applied consistently, produces a conclusion they will not accept.' },
            { term: 'Non-unique', def: 'The harm or benefit happens in both worlds, so it does not distinguish the sides.' },
            { term: 'Even-if', def: 'Grant the argument and show you still win. Not an attack: a containment.' },
            { term: 'Concession', def: 'Accept it openly, then show what it does not get them.' },
            { term: 'Comparative', def: 'Accept both cases and argue yours is weightier. See [weighing](@debate/structure/weighing).' },
          ],
        },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing the tool',
      blocks: [
        {
          t: 'table',
          head: ['If their argument is …', 'Use', 'Because'],
          rows: [
            ['Empirically contested', 'Alternative cause, counterexample', 'You cannot settle the data in the room; you can offer a rival story.'],
            ['Logically overreaching', 'De-link, mitigation', 'The step they skipped is visible, and shrinking it is easier than denying it.'],
            ['True and strong', 'Even-if, comparative', 'Do not fight what you cannot win. Contain it and win elsewhere.'],
            ['Principled and absolute', 'Reductio, dilemma', 'Absolutes have edge cases; find the one they will not defend.'],
            ['Dependent on enforcement', 'Dilemma', 'Strict enforcement over-reaches, loose enforcement does nothing.'],
            ['Happening anyway', 'Non-unique', 'If it occurs in both worlds it cannot decide between them.'],
            ['Structurally self-defeating', 'Turn', 'The biggest payoff available — and if it fails you have amplified their case.'],
          ],
        },
        { t: 'debate-lab', viz: 'argument' },
      ],
    },
    {
      id: 'turn',
      title: 'The turn',
      blocks: [
        { t: 'p', text: 'A turn says: your own mechanism, taken seriously, produces my conclusion. It is worth more than any other single move because it converts their speech time into yours, and it is dangerous for the same reason — a failed turn is five minutes spent restating their case.' },
        {
          t: 'example',
          title: 'A turn, built in three sentences',
          lines: [
            { label: 'Their argument', text: '"Decriminalisation signals that the behaviour is acceptable, so use rises."' },
            { label: 'Accept the mechanism', text: '"We accept that legal status sends a signal and that signals change behaviour."' },
            { label: 'Follow it further', text: '"But the signal criminalisation sends is that users are criminals, which is precisely why they avoid treatment — so the deterrent they describe operates on help-seeking, not on use."' },
            { label: 'Collect', text: '"Their own account of signalling is the reason our policy reduces harm faster than theirs."' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'When not to turn', text: 'Only turn when you can complete the second step in one sentence. A turn that needs three speculative links is a new argument with their framing attached, and judges see it as a concession dressed up.' },
      ],
    },
    {
      id: 'evenif',
      title: 'Even-if, and layered defence',
      blocks: [
        { t: 'p', text: 'Experienced debaters build rebuttal in layers so that no single loss costs the round. The structure is always the same: deny, then mitigate, then contain.' },
        {
          t: 'steps',
          items: [
            { title: 'Layer 1: it is not true', body: '"The behavioural response they describe is not what the evidence shows."' },
            { title: 'Layer 2: even if it is, it is small', body: '"Even if it exists, it applies to the fraction of users who are price-sensitive."' },
            { title: 'Layer 3: even if it is large, it does not matter here', body: '"And even at their highest number, it is a cost in money while ours is a cost in access."' },
            { title: 'Layer 4: even if it matters, we still win', body: '"Even weighing it fully, our harm is irreversible and theirs is not."' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Say the words out loud', text: 'Judges listen for "even if". It signals that you have understood their case well enough to concede it and survive, which is read as strength rather than weakness — the opposite of how it feels to a novice.' },
      ],
    },
    {
      id: 'concede',
      title: 'Strategic concession',
      blocks: [
        { t: 'p', text: 'Defending everything is a losing strategy: it spreads your time across points you cannot win and costs credibility on points nobody believes. Concede early, visibly, and in your own words — then say what the concession does not buy them.' },
        {
          t: 'dodont',
          do: [
            'Concede facts that are obviously true: "yes, some commuters will be worse off".',
            'Concede the small version of their argument to take the large version off the table.',
            'Say what the concession costs you, so the judge does not assume it costs more.',
            'Concede once, clearly, rather than half-conceding in three speeches.',
          ],
          dont: [
            'Concede the mechanism of your own case.',
            'Concede something your partner is still defending — agree your concessions in prep.',
            'Concede and then re-argue it later; inconsistency is worse than either position.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Drilling it',
      blocks: [
        { t: 'p', text: 'Rebuttal speed is pattern recognition, so drill the patterns rather than the topics.' },
        {
          t: 'checklist',
          items: [
            'The ten-shapes drill: one argument, ten responses, one from each tool on the list above. Four minutes, out loud.',
            'The de-link drill: for ten claims in a newspaper, state only the missing step. No denial allowed.',
            'The even-if drill: concede the whole argument, then win the round in two sentences.',
            'The dilemma drill: for any policy, name the strict and loose versions and the failure of each.',
            'The turn hunt: read a case and find the one argument whose mechanism cuts both ways.',
          ],
        },
        { t: 'p', text: 'Full drill set, with how to mark each one, in [drills](@debate/practice/drills). The named fallacies that these responses most often target are in [fallacies](@debate/systems/fallacies).' },
      ],
    },
  ],
  sources: [
    'Walton, D. (2008) Argumentation Schemes. Cambridge University Press, on critical questions as a rebuttal generator.',
    'Johnson, R. and Blair, J. A. (1977) Logical Self-Defense, on the standards of relevance, sufficiency and acceptability.',
  ],
  related: ['debate/structure/rebuttal-and-clash', 'debate/systems/argumentation-schemes', 'debate/winning/winning-tricks', 'debate/systems/fallacies'],
}

export default guide
