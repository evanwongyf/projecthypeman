import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The Amsterdam school asked a different question from Toulmin. Not "what are the parts of an argument" but "what would a discussion have to look like for disagreement to be resolved on the merits". The answer is a procedure with four stages and ten rules — and a definition of fallacy that is far more useful in a debate than any list of Latin names: a fallacy is a move that breaks a rule of the discussion.',
  nutshell: [
    'A **critical discussion** is the ideal model: two parties resolving a difference of opinion on the merits.',
    'Four stages: **confrontation**, **opening**, **argumentation**, **concluding**. Skipping the opening stage causes most real-world deadlock.',
    'Ten rules. A **fallacy** is defined as a violation of one of them, which explains *why* each fallacy is wrong.',
    'The **burden of proof** belongs to whoever advanced the standpoint, and may not be shifted.',
    '**Strategic manoeuvring**: real arguers pursue both resolution and victory at once, and the theory describes when the second corrupts the first.',
    'Useful in debate because it names, precisely, what the other side has just done when something feels unfair.',
  ],
  sections: [
    {
      id: 'stages',
      title: 'The four stages',
      blocks: [
        {
          t: 'cycle',
          caption: 'A resolution-oriented discussion. Most failed arguments — in debate and out of it — skipped stage two.',
          items: [
            { name: 'Confrontation', body: 'The difference of opinion is identified. One party advances a standpoint; the other doubts or denies it.' },
            { name: 'Opening', body: 'The parties agree the starting points and the rules: what counts as evidence, who must prove what, which premises are shared.' },
            { name: 'Argumentation', body: 'Arguments and critical responses are exchanged. The bulk of a debate round.' },
            { name: 'Concluding', body: 'The outcome is established: whose standpoint survived, on the agreed starting points.' },
          ],
        },
        { t: 'p', text: 'The opening stage is the one competitive debate handles through definitions, models and framing. When teams argue past each other for six speeches, it is almost always because the opening stage was never completed: nobody established what would settle the question. That is the same observation as [stasis theory](@debate/schools/classical-rhetoric), arrived at from the other direction.' },
      ],
    },
    {
      id: 'rules',
      title: 'The ten rules',
      blocks: [
        { t: 'p', text: 'Paraphrased for brevity; each one names a familiar bad move, and the right-hand column is what it is called when it happens to you in a round.' },
        {
          t: 'table',
          head: ['#', 'Rule', 'Violated by'],
          rows: [
            ['1', 'Freedom: parties must not prevent each other from advancing or questioning standpoints.', 'Silencing, intimidation, "you cannot say that here".'],
            ['2', 'Burden of proof: whoever advances a standpoint must defend it if asked.', 'Evading the burden; demanding they disprove you.'],
            ['3', 'Standpoint: attacks must address the standpoint actually advanced.', 'Straw man.'],
            ['4', 'Relevance: standpoints must be defended with relevant argumentation.', 'Irrelevant appeals, pure pathos in place of argument.'],
            ['5', 'Unexpressed premise: you may not falsely attribute an implicit premise, nor deny your own.', 'Inventing their assumptions; disowning yours when attacked.'],
            ['6', 'Starting point: agreed premises may not be denied, nor unagreed ones presented as agreed.', 'Begging the question; denying the info slide.'],
            ['7', 'Argument scheme: arguments must use schemes applied correctly.', 'Bad analogy, misused expert, unsupported slippery slope.'],
            ['8', 'Validity: reasoning presented as formally valid must be valid.', 'Non sequitur dressed as deduction.'],
            ['9', 'Closure: a failed defence means withdrawing the standpoint; a successful one means withdrawing the doubt.', 'Refusing to concede a dead point; claiming total victory from one win.'],
            ['10', 'Usage: formulations must be clear and not deliberately ambiguous.', 'Equivocation, strategic vagueness about the model.'],
          ],
          caption: 'van Eemeren and Grootendorst’s ten commandments for a critical discussion, in shortened form.',
        },
        { t: 'callout', tone: 'fact', title: 'Why this list is better than a fallacy list', text: 'It explains the wrongness. A straw man is not bad because it is on a list; it is bad because it attacks a standpoint nobody advanced, so whatever you prove cannot resolve the actual difference of opinion. Said that way, it is an argument a judge can act on.' },
      ],
    },
    {
      id: 'burden',
      title: 'Burden of proof, done properly',
      blocks: [
        { t: 'p', text: 'Rule 2 is the one with the most direct competitive use. Whoever advances a standpoint owes its defence, and the obligation does not transfer by being ignored.' },
        {
          t: 'example',
          title: 'Answering a burden shift',
          lines: [
            { label: 'Them', text: '"They have not shown that the ban will not create a black market."' },
            { label: 'Weak answer', text: 'An improvised argument about black markets, which accepts the shift.' },
            { label: 'Proper answer', text: '"That is their claim, not ours. They have asserted a black market and given no mechanism for it; there is nothing yet to answer. If they supply one, we will — and here is why the obvious version fails."' },
            { label: 'What it does', text: 'Names the violation, declines the burden, and still answers the strongest version. All three, in four sentences.' },
          ],
        },
        { t: 'p', text: 'The competitive mechanics of who owes what, by motion type, are in [motion types](@debate/systems/motions-and-burdens) and [framing and burdens](@debate/techniques/framing-and-burdens).' },
      ],
    },
    {
      id: 'manoeuvring',
      title: 'Strategic manoeuvring',
      blocks: [
        { t: 'p', text: 'The later extension of the theory is its most honest part. Real arguers are not only trying to resolve the difference; they are also trying to win. van Eemeren calls the simultaneous pursuit **strategic manoeuvring**, and it operates on three dimensions.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Topical potential', tag: 'What you discuss', body: 'Choosing which issues to raise and which to leave alone. In debate: collapsing to your best clash.' },
            { title: 'Audience demand', tag: 'Who you address', body: 'Adapting to what this audience will accept. In debate: [judge adaptation](@debate/winning/judge-adaptation).' },
            { title: 'Presentational devices', tag: 'How you put it', body: 'The words and figures used. In debate: framing and delivery.' },
          ],
        },
        { t: 'p', text: 'The theory’s claim is that manoeuvring is legitimate until it **derails** — until the pursuit of victory breaks one of the ten rules. That is a sharper line than "dirty tricks", and it is the one worth holding: collapsing to your strongest issue is fine; misrepresenting their standpoint to do so is not. The competitive version of this line is in [dirty tricks](@debate/winning/dirty-tricks).' },
        { t: 'debate-lab', viz: 'fallacy' },
      ],
    },
  ],
  sources: [
    'van Eemeren, F. H. and Grootendorst, R. (2004) A Systematic Theory of Argumentation: The Pragma-Dialectical Approach. Cambridge University Press.',
    'van Eemeren, F. H. (2010) Strategic Maneuvering in Argumentative Discourse. John Benjamins.',
    'van Eemeren, F. H. and Grootendorst, R. (1992) Argumentation, Communication and Fallacies.',
  ],
  related: ['debate/schools/toulmin-and-informal-logic', 'debate/systems/fallacies', 'debate/techniques/framing-and-burdens'],
}

export default guide
