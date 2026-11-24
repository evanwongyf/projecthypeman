import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Rebuttal is not disagreement said loudly. It is the identification of the step in someone’s argument that does not hold, and the demonstration that without it the argument does not reach its conclusion. Clash is what happens when both sides do this to each other on the same issue, and clash is what judges actually decide.',
  nutshell: [
    'Four steps: **they said / this is wrong because / here is why it matters / so this argument gives them nothing**.',
    'Attack the **mechanism**, not the example. Killing an example costs them a sentence; killing the mechanism costs them the argument.',
    'Group rebuttal into **issues** before you deliver it. Twelve small answers lose to three won clashes.',
    'Answering is not winning: after rebutting you must say what the argument is now worth.',
    '**Frontlining** — defending your own case against their attacks — is as important as attacking theirs, and more often skipped.',
    'A **dropped** argument is conceded. In American formats this is a rule; in parliamentary formats it is a strong default.',
  ],
  sections: [
    {
      id: 'fourstep',
      title: 'The four-step refutation',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'They said', body: 'State their argument fairly, in one line, in their own terms. If your restatement is weaker than their version, the judge notices and discounts everything that follows.' },
            { title: 'But this is wrong because', body: 'The actual attack: a broken step, a missing link, a false premise, a counterexample, a competing cause.' },
            { title: 'Which means', body: 'What follows from the attack. Does the argument die, shrink, or reverse? Say which.' },
            { title: 'So on this issue', body: 'The comparison. "Their best case here is a small, uncertain benefit; ours is a certain harm to a larger group."' },
          ],
        },
        {
          t: 'example',
          title: 'The same rebuttal, with and without steps three and four',
          lines: [
            { label: 'Incomplete', text: '"They say the ban reduces congestion, but displaced traffic just moves to the ring road."' },
            { label: 'Complete', text: '"They say the ban reduces congestion. Displaced traffic moves to the ring road, so the benefit is not removal but relocation — which means their gain shrinks to whatever difference remains between the two roads. And that difference falls on commuters with alternatives, while the harm they create falls on traders who have none. On this issue they have, at best, a transfer; we have a loss."' },
            { label: 'The difference', text: 'The second version tells the judge what to write next to the argument. The first leaves them to work it out, and judges who work it out tend to work it out generously for whoever spoke last.' },
          ],
        },
      ],
    },
    {
      id: 'where',
      title: 'Where to attack an argument',
      blocks: [
        {
          t: 'table',
          head: ['Attack', 'What you deny', 'Sounds like'],
          rows: [
            ['Premise', 'The starting fact is wrong or outdated.', '"This assumes the market is competitive. It is not — three firms hold 80%."'],
            ['Link', 'The step from premise to conclusion does not follow.', '"Even granting the cost rise, nothing shows employers respond by cutting jobs rather than hours."'],
            ['Alternative cause', 'Something else explains the evidence.', '"The fall began two years before the law passed."'],
            ['Counterexample', 'A case where their mechanism did not run.', '"Three cities did exactly this and saw no change."'],
            ['Mitigation', 'The effect is real but much smaller.', '"This is true of the 4% of journeys that are discretionary."'],
            ['Turn', 'Their mechanism produces the opposite result.', '"That same incentive is why the policy increases the behaviour they want to stop."'],
            ['Irrelevance', 'True but it does not bear on the motion.', '"Nothing here distinguishes our world from theirs."'],
            ['Dilemma', 'Both branches of their position fail.', '"Either enforcement is strict, and it sweeps in the hard cases, or it is loose, and the harm continues."'],
          ],
          caption: 'The full toolkit, with when each is the right tool, is in [refutation techniques](@debate/techniques/refutation-techniques).',
        },
        { t: 'callout', tone: 'tip', title: 'Aim high in the argument', text: 'An attack on the premise or the link kills everything above it. An attack on the example kills one sentence. Before you speak, ask which part of their argument the rest depends on, and start there.' },
      ],
    },
    {
      id: 'clash',
      title: 'Grouping the debate into clashes',
      blocks: [
        { t: 'p', text: 'By the fourth speech a round contains too much material for anyone to hold in mind. The speaker who reorganises it wins, because the judge’s decision has to be organised somehow and it may as well be your organisation.' },
        {
          t: 'diagram',
          title: 'Twenty arguments, three clashes',
          nodes: [
            { id: 'a', label: 'Prop 1', sub: 'cost falls', col: 0, row: 0, tone: 'teal' },
            { id: 'b', label: 'Prop 2', sub: 'access rises', col: 0, row: 1, tone: 'teal' },
            { id: 'c', label: 'Opp 1', sub: 'quality falls', col: 0, row: 2, tone: 'orange' },
            { id: 'd', label: 'Opp 2', sub: 'who pays', col: 0, row: 3, tone: 'orange' },
            { id: 'e', label: 'Opp 3', sub: 'state overreach', col: 0, row: 4, tone: 'orange' },
            { id: 'c1', label: 'Clash 1', sub: 'Does it work?', col: 2, row: 0.5, shape: 'pill', tone: 'ink' },
            { id: 'c2', label: 'Clash 2', sub: 'Who bears the cost?', col: 2, row: 2.5, shape: 'pill', tone: 'ink' },
            { id: 'c3', label: 'Clash 3', sub: 'May the state do it?', col: 2, row: 4, shape: 'pill', tone: 'ink' },
            { id: 'dec', label: 'Decision', sub: 'ranked by weight', col: 4, row: 2.5, shape: 'diamond', tone: 'mustard' },
          ],
          edges: [
            { from: 'a', to: 'c1' },
            { from: 'c', to: 'c1' },
            { from: 'b', to: 'c2' },
            { from: 'd', to: 'c2' },
            { from: 'e', to: 'c3' },
            { from: 'c1', to: 'dec' },
            { from: 'c2', to: 'dec' },
            { from: 'c3', to: 'dec' },
          ],
          caption: 'Arguments from both sides collapse into shared questions. The last speech names the questions and orders them by weight.',
        },
        {
          t: 'checklist',
          items: [
            'Two to four clashes, no more. Five is a list again.',
            'Name each in neutral words the judge would use, not in your own loaded phrasing.',
            'Order them: the one you win most decisively goes first or last, never buried.',
            'Within each, state their case, your answer, your material, the comparison.',
            'Say explicitly which clash decides the round if you lose another one.',
          ],
        },
      ],
    },
    {
      id: 'frontline',
      title: 'Frontlining: defending your own case',
      blocks: [
        { t: 'p', text: 'Rebuttal has a second half that beginners skip entirely: answering what they said about *you*. An argument of yours that was attacked and never defended is dead even if the attack was bad, because the judge has one answer on the flow and it is theirs.' },
        {
          t: 'dodont',
          do: [
            'Answer by name: "they said our mechanism assumes perfect enforcement — it does not, because …".',
            'Rebuild with new analysis or a new example; that is not new matter.',
            'Concede the genuinely true part, then show the argument survives without it.',
            'Re-extend the argument after defending it, so the judge sees it is still live.',
          ],
          dont: [
            'Repeat the original argument louder. Repetition is not a response.',
            'Defend every attacked point if time is short; defend the ones you need.',
            'Leave your best argument undefended because you were busy attacking theirs.',
          ],
        },
        { t: 'debate-lab', viz: 'flow' },
      ],
    },
    {
      id: 'mistakes',
      title: 'The five rebuttal mistakes everyone makes',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Rebutting the example', tag: 'Too low', body: 'You disprove their one case study; the mechanism stands and they find another example in the next speech.' },
            { title: 'Rebutting a case they did not run', tag: 'Prep bias', body: 'You prepared against the obvious model and they ran another. Flow what was said, not what you expected.' },
            { title: 'Answering without weighing', tag: 'Half a job', body: 'You dented the argument but never said what it is now worth, so the judge keeps it at full value.' },
            { title: 'Strawmanning', tag: 'Costly', body: 'Beating a weaker version is visible to any judge who flowed the original, and it taints your other rebuttal.' },
            { title: 'Even-handedness', tag: 'No priorities', body: 'Ninety seconds on every point tells the judge you cannot tell which matters. Spend four minutes on the clash that decides it.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Walton, D. (2006) Fundamentals of Critical Argumentation. Cambridge University Press.',
    'World Universities Debating Championship Debating and Judging Manual, on engagement and clash-based assessment.',
  ],
  related: ['debate/techniques/refutation-techniques', 'debate/structure/weighing', 'debate/techniques/flowing-and-notes', 'debate/systems/fallacies'],
}

export default guide
