import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A motion is not a topic, it is an instruction. Its grammar tells you what kind of claim is being made, and therefore what each side has to prove and where the clash will be whether you choose it or not. Reading the motion properly is the highest-return two minutes in any prep.',
  nutshell: [
    'Five families: **policy** ("would"), **value** ("believes that"), **fact or prediction** ("will"), **actor** ("as X"), **counterfactual** ("regrets", "would rather").',
    'The motion’s verb sets the burden. "Would" requires a mechanism; "believes" requires a standard.',
    'An **info slide** is part of the motion and is binding on both sides.',
    'Proposition owns the **definition** and, on policy motions, the **model**.',
    'Burdens are frequently **asymmetric**, and saying so out loud is a legitimate and often decisive move.',
    'Most lost prep is spent arguing a different motion from the one on the paper.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The five families',
      blocks: [
        { t: 'debate-lab', viz: 'motion' },
        { t: 'p', text: 'Switch between the five types in the tool above and read the burden boxes. The pattern worth internalising: the verb of the motion determines whether you owe a mechanism, a standard, a causal story, or a plausible alternative world.' },
        {
          t: 'table',
          head: ['Marker', 'Family', 'Owes a …'],
          rows: [
            ['This House would …', 'Policy', 'Model: actor, mechanism, funding, enforcement, timeline.'],
            ['This House believes that …', 'Value', 'Standard of judgement, then the balance on it.'],
            ['This House believes that X will …', 'Prediction', 'Causal chain plus a reason the counter-trend loses.'],
            ['This House, as X, would …', 'Actor', 'Account of that actor’s own interests and constraints.'],
            ['This House regrets / would rather …', 'Counterfactual', 'A specified alternative world that is better.'],
            ['This House supports / opposes …', 'Mixed', 'Usually a policy in value clothing: build the model anyway.'],
          ],
        },
      ],
    },
    {
      id: 'reading',
      title: 'Reading a motion in two minutes',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Find the verb', body: '"Would", "believes", "regrets", "will". It sets the family and the burden.' },
            { title: 'Find the actor', body: 'Who is "This House"? A liberal democracy by default; something specific if the motion says so.' },
            { title: 'Find the scope', body: 'All of them, or some? "Ban X" and "ban X for under-16s" are different debates.' },
            { title: 'State the comparison', body: '"Our world has …; their world has …" If you cannot write this line, you have not read the motion yet.' },
            { title: 'Identify the obvious clash', body: 'The one both sides will reach regardless. Prepare for it before preparing your own cleverness.' },
            { title: 'Note what is conceded by the wording', body: 'A motion that says "despite the costs" has conceded the costs. Judges hold you to that.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The word "should" is doing work', text: '"This House should ban X" invites both a practical and a principled route to victory, and you may run either. "This House would ban X" asks you to defend the act as a policy, which makes the model unavoidable. Small wording differences change what you owe.' },
      ],
    },
    {
      id: 'infoslides',
      title: 'Info slides and definitions',
      blocks: [
        { t: 'p', text: 'An info slide is a short factual statement released with the motion. It is **binding on both sides**: you may not deny it, and you may not need to prove it. Teams routinely waste time arguing against their own info slide, which reads as not having read the motion.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'What a slide does', tag: 'Levels the field', body: 'Supplies context that would otherwise reward whoever happened to know it: a figure, a legal position, the existence of a scheme.' },
            { title: 'What it does not do', tag: 'Not an argument', body: 'Stating a fact does not make it decisive. You still have to explain why it matters.' },
            { title: 'Definitions', tag: 'Proposition’s job', body: 'The reasonable reading an informed person would expect. Define only genuinely ambiguous terms.' },
            { title: 'Challenges', tag: 'Rare', body: 'Only for definitions that are unreasonable, not merely inconvenient. See [dirty tricks](@debate/winning/dirty-tricks).' },
          ],
        },
      ],
    },
    {
      id: 'asymmetry',
      title: 'Asymmetric burdens',
      blocks: [
        { t: 'p', text: 'Not every motion gives both sides the same job, and the side that notices the asymmetry can win on burden allocation alone.' },
        {
          t: 'table',
          head: ['Motion shape', 'The asymmetry'],
          rows: [
            ['"On balance, more harm than good"', 'Opposition need only break the balance; they need not defend the opposite extreme.'],
            ['"Should ban"', 'Proposition must justify coercion, which is a higher bar than justifying discouragement.'],
            ['"Regrets"', 'Nobody can act, so proposition must build the counterfactual; opposition can attack it as speculation.'],
            ['"As a developing state"', 'Both sides are bound by the actor’s interests, which excludes most general ethical argument.'],
            ['"Will" (prediction)', 'Neither side can verify; whoever has the shorter causal chain wins the probability contest.'],
            ['Irreversible change proposed', 'Presumption shifts toward opposition: errors cannot be corrected.'],
          ],
        },
        { t: 'p', text: 'How to argue about burdens without sounding procedural is in [framing and burdens](@debate/techniques/framing-and-burdens).' },
      ],
    },
    {
      id: 'worked',
      title: 'Worked motions',
      blocks: [
        { t: 'p', text: 'Five motions across the families, each with the first thing to notice and three lines of case for both sides. Switch the tool to "Worked motions".' },
        { t: 'debate-lab', viz: 'motion' },
        { t: 'callout', tone: 'note', title: 'Three lines is not three arguments', text: 'Each sketch line is a claim with a direction. It still needs a mechanism, an impact and a comparison before it is worth two minutes of speech: see [argument anatomy](@debate/structure/argument-anatomy).' },
      ],
    },
  ],
  sources: [
    'World Universities Debating Championship Debating and Judging Manual, on motions, info slides and reasonable definitions.',
    'World Schools Debating Championships Rules and Judging Guide, on models and burdens.',
  ],
  related: ['debate/structure/case-building', 'debate/techniques/framing-and-burdens', 'debate/practice/motion-bank'],
}

export default guide
