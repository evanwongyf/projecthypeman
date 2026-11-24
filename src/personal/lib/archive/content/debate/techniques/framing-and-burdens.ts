import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Framing is the attempt to decide the question before the answers are given. Every debate contains an unstated premise about what would settle it, and the team that supplies that premise — credibly, early, and in the judge’s language — usually wins issues it would otherwise have fought to a draw.',
  nutshell: [
    'A **frame** is a standard: the thing that, if true, decides the round.',
    'A **burden** is what a side must prove. Burdens are often asymmetric, and arguing about them is legitimate.',
    'Whoever **asserts** must prove: the side proposing change carries the presumption against it.',
    'Good framing is **justified**, not asserted. "Judge it on X" needs a reason why X and not Y.',
    'Characterisation — who the actors really are, what they are really doing — is framing applied to facts.',
    'Classical rhetoric calls this **stasis theory**: find the point where the disagreement actually rests.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What a frame is',
      blocks: [
        { t: 'p', text: 'Compare two openings on the same motion about surveillance cameras:' },
        {
          t: 'example',
          title: 'Two frames, one motion',
          lines: [
            { label: 'Frame A', text: '"This debate is about whether the cameras reduce crime. If they do, the state should use them."' },
            { label: 'Frame B', text: '"This debate is about what a citizen is entitled to assume when they walk down a street. Effectiveness is necessary but not sufficient: a measure that works and is not permitted is still not permitted."' },
            { label: 'Consequence', text: 'Under A, a crime statistic decides the round. Under B, the same statistic is admissible but cannot settle it. Neither frame is dishonest, and the argument between them is the real debate.' },
          ],
        },
        { t: 'p', text: 'This is why framing is not a trick. An unframed debate is one where the judge supplies the standard themselves, privately, and the teams never find out which one they were being marked against.' },
        { t: 'debate-lab', viz: 'motion' },
      ],
    },
    {
      id: 'burdens',
      title: 'Burdens',
      blocks: [
        { t: 'p', text: 'A burden is what you have to show. Most motions distribute them unequally, and recognising that is worth more than any argument.' },
        {
          t: 'table',
          head: ['Motion type', 'Proposition must show', 'Opposition must show'],
          rows: [
            ['Policy', 'A harm, a mechanism that addresses it, and that the cost is smaller.', 'The status quo is better, or a counter-model is.'],
            ['Value ("believes that")', 'The standard of judgement and that the balance meets it.', 'The standard is wrong, or the balance fails — not the opposite extreme.'],
            ['Fact / prediction', 'A causal story plus evidence, and why the counter-trend loses.', 'One broken link, or a stronger opposing force.'],
            ['Actor', 'The action serves that actor’s own interests.', 'A better option exists for the same actor.'],
            ['Counterfactual ("regrets")', 'A plausible alternative world that is better.', 'The alternative is implausible, or the actual world is better on the same measure.'],
          ],
          caption: 'Full detail, with the traps attached to each, in [motion types](@debate/systems/motions-and-burdens).',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Presumption',
          text: 'The side proposing change usually carries a slight presumption against it: inaction needs no justification in the way action does. This is a convention, not a law, and it is weakest where the status quo is itself the result of a recent choice. Say so out loud if you are opposing a motion that defends a fresh policy.',
        },
      ],
    },
    {
      id: 'moves',
      title: 'The framing moves',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The standard', tag: 'Most common', body: '"Judge this on who bears the risk." State it, justify it in one sentence, and apply it to both sides so it does not read as self-serving.' },
            { title: 'The pre-requisite', tag: 'Strong', body: '"Their benefits cannot be enjoyed unless legitimacy holds, so our issue is logically prior to theirs." Converts a competing good into a precondition.' },
            { title: 'The characterisation', tag: 'Underrated', body: 'Who the actors actually are. "These are not consumers making a choice; they are tenants with one option." Changes what every subsequent argument means.' },
            { title: 'The burden allocation', tag: 'Procedural', body: '"They are proposing an irreversible change, so the burden on them is higher than the burden on us." Legitimate, and often decisive.' },
            { title: 'The comparison setting', tag: 'Quiet', body: '"The right comparison is not with the ideal world but with what happens anyway." Kills a third of unprepared cases.' },
            { title: 'The exclusion', tag: 'Risky', body: '"Their impact is inadmissible under any defensible standard." Powerful if justified; read as evasion if not.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Framing without justification is worthless', text: 'Judges discount an unargued frame instantly, and a frame that obviously exists only to exclude the other side’s best material is worse than none: it tells the adjudicator you know where you are losing.' },
      ],
    },
    {
      id: 'contesting',
      title: 'Contesting a frame',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Name it', body: '"They have asked you to judge this only on effectiveness." Make the frame visible; many frames survive by being unstated.' },
            { title: 'Say what it excludes', body: '"That standard cannot register consent, which is the thing in dispute."' },
            { title: 'Offer yours, with a reason', body: 'Not merely a rival assertion: a reason this debate in particular should be judged your way.' },
            { title: 'Win inside theirs anyway', body: 'The strongest position: "even on their standard, we win, because …". Judges who reject your frame then still have you ahead.' },
          ],
        },
        { t: 'p', text: 'That last step is the one that separates experienced debaters. Never let the round depend solely on the framing contest: fight it, and also win underneath it.' },
      ],
    },
    {
      id: 'stasis',
      title: 'The classical version',
      blocks: [
        { t: 'p', text: 'Roman rhetoricians formalised this as **stasis theory**: before arguing, establish where the disagreement rests. The four stases are still a complete checklist for finding the real clash.' },
        {
          t: 'levels',
          caption: 'Work down the list: a disagreement at a lower level makes the higher ones moot.',
          items: [
            { name: 'Fact', body: 'Did it happen? Is the harm real? If the sides disagree here, no amount of value argument helps.', verbs: ['conjecture'] },
            { name: 'Definition', body: 'What is it? Is this censorship, or moderation? The word chosen often settles the dispute.', verbs: ['define'] },
            { name: 'Quality', body: 'How serious is it, and is it justified? This is where most debates actually live.', verbs: ['evaluate'] },
            { name: 'Procedure', body: 'Is this the right body, at the right time, by the right process? Jurisdiction rather than merits.', verbs: ['object'] },
          ],
        },
        { t: 'p', text: 'More on the tradition in [classical rhetoric](@debate/schools/classical-rhetoric); the modern formal treatment of who must prove what is in [pragma-dialectics](@debate/schools/pragma-dialectics).' },
      ],
    },
  ],
  sources: [
    'Cicero, De Inventione, and Quintilian, Institutio Oratoria, on stasis.',
    'van Eemeren, F. H. and Houtlosser, P. (2002) on strategic manoeuvring and framing.',
    'Entman, R. (1993) Framing: Toward Clarification of a Fractured Paradigm, Journal of Communication.',
  ],
  related: ['debate/systems/motions-and-burdens', 'debate/structure/weighing', 'debate/schools/classical-rhetoric', 'debate/winning/winning-tricks'],
}

export default guide
