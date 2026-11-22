import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'International politics is a natural setting for game theory: states with conflicting interests, no world government to enforce agreements, and huge stakes. Game theory has shaped thinking on nuclear deterrence, arms control, alliances and the causes of war. It does not predict wars. But it clarifies why wars happen even when both sides would prefer a settlement, why arms races are hard to stop, and why signals and commitments matter. This guide covers deterrence, the security dilemma, bargaining and war, and the limits of the models. It deals with analysis and history, not with advice on conducting war.',
  nutshell: [
    '**Deterrence** works if a threat is **credible** and the stakes are understood. **Mutual assured destruction** made a nuclear first strike irrational.',
    'The **security dilemma** (Jervis): steps one state takes for defence look like a threat to others, who respond, leaving both less secure.',
    '**War is costly**, so a negotiated deal should be better for both. Fearon (1995) identified why bargaining fails: **private information**, **commitment problems** and **indivisible issues**.',
    '**Arms control** works when agreements can be **verified**; trust without inspection is fragile.',
    'Alliances raise the **credibility** of deterrence but can drag members into wars (**entrapment**) or leave them abandoned.',
  ],
  sections: [
    {
      id: 'deterrence',
      title: 'Deterrence and credibility',
      blocks: [
        { t: 'p', text: 'Deterrence is the art of preventing an action by threatening a response. It succeeds when the threatened party believes the response will happen and judges it worse than the gain from acting. Schelling’s insight was that credibility is the heart of the matter: a threat that would be irrational to carry out, because the response would hurt the threatener, is not believable.' },
        {
          t: 'table',
          head: ['Concept', 'Meaning', 'Example'],
          rows: [
            ['Deterrence', 'Preventing action by threat of retaliation', 'Nuclear arsenals meant to deter attack'],
            ['Compellence', 'Forcing a change by threat or limited force', 'Demanding a withdrawal'],
            ['Second-strike capability', 'The ability to retaliate after being attacked', 'Missiles in submarines and silos that cannot be destroyed in a first strike'],
            ['Mutual assured destruction (MAD)', 'Each side can destroy the other even after being hit first', 'US-Soviet standoff after the 1960s'],
            ['Extended deterrence', 'Protecting allies by threat', 'The “nuclear umbrella” of alliances'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The credibility problem',
          text: 'Would a leader really launch a nuclear strike in response to an attack on an ally, knowing it would lead to retaliation on their own country? Strategists built answers: stationing troops as tripwires, automatic procedures, or leaving “something to chance” so the threat cannot be dismissed. The logic is chilling, and the stability it gave is fragile, since accidents and misjudgement do not follow a game theorist’s model.',
        },
      ],
    },
    {
      id: 'arms',
      title: 'Arms races and the security dilemma',
      blocks: [
        { t: 'p', text: 'Each state would be safest if it had more weapons than its rival, but when both arm, neither gains and both pay. This is a prisoner’s dilemma. Robert Jervis (1978) added a psychological layer: a state cannot know whether another’s weapons are for defence or attack, and it must prepare for the worst, so its own preparations look threatening in turn. The result is a spiral.' },
        {
          t: 'table',
          head: ['Weapons are…', 'Easy to tell apart (defensive)', 'Hard to tell apart'],
          rows: [
            ['Offence has the advantage', 'More danger and a greater incentive to strike first', 'The most unstable case'],
            ['Defence has the advantage', 'Cooperation is easier since states can protect themselves without threatening others', 'Less dangerous, but intent is still unclear'],
          ],
          caption: 'Jervis’s argument: the security dilemma is worst when offence is favoured and offensive and defensive forces look alike.',
        },
        {
          t: 'list',
          items: [
            '**Verification** is what makes arms control possible. Treaties between the US and the USSR relied on inspections and satellite monitoring.',
            '**Reciprocal steps** (Osgood’s GRIT idea: graduated and reciprocated initiatives in tension reduction) echo tit for tat.',
            '**Signals of restraint**, such as choosing defensive postures, can reduce the spiral.',
          ],
        },
      ],
    },
    {
      id: 'fearon',
      title: 'Why do wars happen? Fearon’s rationalist explanations',
      blocks: [
        { t: 'p', text: 'War destroys lives and resources, so there is always a deal that both sides prefer to fighting, if they could agree it. So why do wars occur? James Fearon (1995) argued that the puzzle is solved by three mechanisms that stop a deal.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: '1', title: 'Private information and incentives to bluff', body: 'Each side knows its own strength and resolve but not the other’s, and has an incentive to exaggerate. They may fight to learn the truth. Weak states looking tough make deals harder.' },
            { tag: '2', title: 'Commitment problems', body: 'A side may be unable to promise not to exploit a future shift in power. A rising power cannot credibly promise restraint; a declining power may strike first (preventive war).' },
            { tag: '3', title: 'Indivisible issues', body: 'Some stakes cannot be split (a holy site, a throne). Fearon argues that most such cases can be bridged with side payments, so this is rarer than it seems.' },
            { tag: 'Other', title: 'Beyond rationalist theories', body: 'Misperception, domestic politics, leaders’ personal interests and emotion also play a part. Rationalist models are one lens.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The shadow of power shifts', text: 'The commitment-problem argument is related to Graham Allison’s “Thucydides trap”: the danger when a rising power challenges a ruling one. Scholars disagree on how often this led to war in history; the logic is a caution, not a law.' },
      ],
    },
    {
      id: 'alliances',
      title: 'Alliances, coordination and credibility',
      blocks: [
        {
          t: 'table',
          head: ['Issue', 'Game-theoretic reading'],
          rows: [
            ['Why join an alliance', 'Pooled strength raises deterrence; commitments signal resolve'],
            ['Burden sharing', 'A public good: small allies free ride on the largest (Olson and Zeckhauser, 1966)'],
            ['Entrapment', 'A commitment may drag a state into a conflict it would not have chosen'],
            ['Abandonment', 'A weaker partner fears being left alone; this affects how much it relies on the alliance'],
            ['Moral hazard', 'Protected states may take more risks than they otherwise would'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A note on use', text: 'These are analytical tools for understanding history and policy debates. They simplify enormously, and real decisions involve uncertainty, emotion, domestic politics and ethics. Treat them as lenses, not instruction.' },
        { t: 'links', items: [{ path: 'game-theory/classic-games/chicken-and-brinkmanship', note: 'Chicken and the Cuban missile crisis' }, { path: 'game-theory/dynamics/repeated-games', note: 'Repetition and reciprocity' }, { path: 'military/start-here', note: 'The military shelf' }] },
      ],
    },
  ],
  sources: [
    'Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press.',
    'Jervis, R. (1978). Cooperation under the security dilemma. World Politics.',
    'Fearon, J. D. (1995). Rationalist explanations for war. International Organization.',
    'Olson, M., and Zeckhauser, R. (1966). An economic theory of alliances. Review of Economics and Statistics.',
    'Kahn, H. (1960). On Thermonuclear War; and Brodie, B. (1959). Strategy in the Missile Age.',
    'Allison, G. (2017). Destined for War: Can America and China Escape Thucydides’s Trap? Houghton Mifflin Harcourt.',
  ],
  related: ['game-theory/classic-games/chicken-and-brinkmanship', 'game-theory/dynamics/repeated-games', 'military/start-here'],
}

export default guide
