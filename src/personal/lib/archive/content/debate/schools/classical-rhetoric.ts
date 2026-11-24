import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Everything competitive debate does was first written down in Greek and Latin, usually by people arguing about whether doing it was honest. The classical tradition is not decoration on a modern skill: ethos, the enthymeme, stasis and the canons are still the most compact description available of what a persuasive speech contains and in what order.',
  nutshell: [
    'Aristotle’s three appeals: **ethos** (character), **pathos** (emotion), **logos** (reasoning). All three are always operating.',
    'The **enthymeme** is argument with a premise left unstated, supplied by the audience. It is how real persuasion is compressed.',
    'The five **canons**: invention, arrangement, style, memory, delivery — a complete workflow for building a speech.',
    '**Stasis theory** locates where a disagreement actually rests: fact, definition, quality, or procedure.',
    'The **sophists** taught arguing both sides for a fee, and the charge against them is still the charge against competitive debate.',
    'Classical rhetoric is explicitly about the **available means of persuasion**, not about proof.',
  ],
  sections: [
    {
      id: 'appeals',
      title: 'The three appeals',
      blocks: [
        { t: 'p', text: 'Aristotle divides persuasion into three sources: the character of the speaker, the state of the audience, and the argument itself. A modern debater usually thinks only about the third, which is why judges so often write feedback that is really about the first.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Ethos', tag: 'Character', body: 'Why you should be believed: competence, honesty, goodwill. In debate it is built by conceding what is true, representing the other side fairly, and never overstating evidence.' },
            { title: 'Pathos', tag: 'The audience’s state', body: 'Not manipulation: Aristotle treats emotion as a judgement about the world. Making a harm *vivid and specific* is a legitimate part of showing it is a harm.' },
            { title: 'Logos', tag: 'The argument', body: 'The reasoning, including the examples and the probabilities. Necessary, and never sufficient — an unbelieved argument persuades nobody.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Where debaters lose ethos', text: 'Three habits, all cheap to fix: misrepresenting the other side’s argument, claiming more than your evidence shows, and refusing every point of information. Each one tells the judge to discount your next claim.' },
      ],
    },
    {
      id: 'enthymeme',
      title: 'The enthymeme',
      blocks: [
        { t: 'p', text: 'A syllogism states all its premises. An enthymeme leaves one for the audience to supply, and is therefore both shorter and more persuasive — the audience has participated in its own convincing. Almost every line in a debate speech is an enthymeme.' },
        {
          t: 'example',
          title: 'The same argument, stated and compressed',
          lines: [
            { label: 'Syllogism', text: 'All coercive measures require justification. This is a coercive measure. Therefore it requires justification.' },
            { label: 'Enthymeme', text: '"They are proposing to fine people. The burden is theirs."' },
            { label: 'What is left out', text: 'The major premise, which the audience supplies for free because they already believe it.' },
            { label: 'The risk', text: 'If the audience does not share the unstated premise, the argument silently fails and you never find out why. This is exactly what happens when a debater assumes a value the judge does not hold.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Find your own unstated premises', text: 'In prep, take each argument and ask what the judge has to already believe for it to work. If the answer is a contested value, state and defend it: that is the framing move in [framing and burdens](@debate/techniques/framing-and-burdens).' },
      ],
    },
    {
      id: 'canons',
      title: 'The five canons',
      blocks: [
        {
          t: 'levels',
          caption: 'The Roman curriculum, and still a usable order of operations for building any speech.',
          items: [
            { name: 'Inventio', body: 'Invention: finding the arguments. The classical *topoi* are a lens list, exactly like the generation matrix in [case building](@debate/structure/case-building).', verbs: ['discover'] },
            { name: 'Dispositio', body: 'Arrangement: the order. Classical advice — strongest argument last, concessions early — survives unchanged in modern practice.', verbs: ['order'] },
            { name: 'Elocutio', body: 'Style: the words and figures. Not ornament; the triad and the antithesis are memory aids for the listener.', verbs: ['phrase'] },
            { name: 'Memoria', body: 'Memory: speaking without a script. The modern version is a page of taglines and a trained structure.', verbs: ['internalise'] },
            { name: 'Pronuntiatio', body: 'Delivery: voice and body. See [delivery and style](@debate/techniques/delivery-and-style).', verbs: ['perform'] },
          ],
        },
      ],
    },
    {
      id: 'stasis',
      title: 'Stasis theory',
      blocks: [
        { t: 'p', text: 'Before arguing, locate the disagreement. The Romans named four places it can rest, and the list is still complete: it is the most useful two minutes of prep available, because arguing at the wrong stasis is arguing past your opponent.' },
        {
          t: 'diagram',
          title: 'The four stases',
          nodes: [
            { id: 'f', label: 'Fact', sub: 'did it happen?', col: 0, row: 0, shape: 'diamond', tone: 'teal' },
            { id: 'd', label: 'Definition', sub: 'what is it?', col: 1, row: 1, shape: 'diamond', tone: 'mint' },
            { id: 'q', label: 'Quality', sub: 'how serious, is it justified?', col: 2, row: 2, shape: 'diamond', tone: 'mustard' },
            { id: 'p', label: 'Procedure', sub: 'right body, right time?', col: 3, row: 3, shape: 'diamond', tone: 'orange' },
            { id: 'end', label: 'The real clash', col: 4, row: 2, shape: 'pill', tone: 'ink' },
          ],
          edges: [
            { from: 'f', to: 'd', label: 'agreed' },
            { from: 'd', to: 'q', label: 'agreed' },
            { from: 'q', to: 'p', label: 'agreed' },
            { from: 'f', to: 'end', label: 'disputed', dashed: true },
            { from: 'd', to: 'end', label: 'disputed', dashed: true },
            { from: 'q', to: 'end', label: 'disputed', dashed: true },
            { from: 'p', to: 'end', label: 'disputed', dashed: true },
          ],
          caption: 'Work down until the sides disagree. That is where the debate is, and everything above it is wasted speech time.',
        },
      ],
    },
    {
      id: 'sophists',
      title: 'The sophists, and the oldest objection to debating',
      blocks: [
        { t: 'p', text: 'The sophists were itinerant teachers who, for a fee, taught people to argue any side of any question. Plato attacked them for exactly the reason people today attack competitive debate: a skill indifferent to truth will be bought by whoever has the money and used for whatever they want.' },
        { t: 'quote', text: 'Making the weaker argument appear the stronger.', by: 'The charge against Protagoras, as reported in antiquity' },
        { t: 'p', text: 'The defence has also not changed much, and it comes in three parts. First, the ability to argue both sides is how you discover which side is actually stronger — it is the method of **dissoi logoi**, arguing opposed cases, that Protagoras is credited with. Second, a rhetorical skill left untaught does not disappear; it accrues to whoever picked it up informally. Third, in a debate the argument is answered in the room, which is more than can be said for most public persuasion.' },
        { t: 'callout', tone: 'note', title: 'Isocrates’ middle position', text: 'Isocrates argued that rhetoric trains judgement, because choosing what to say about a complex question *is* practical wisdom. This is the most defensible account of what a debating education is for, and it is the one competitive circuits implicitly rely on.' },
      ],
    },
    {
      id: 'figures',
      title: 'Figures worth having',
      blocks: [
        {
          t: 'table',
          head: ['Figure', 'What it is', 'Use it to'],
          rows: [
            ['Antithesis', 'Two contrasting clauses in parallel.', 'State a comparison so it is remembered: "they offer a choice to those who have one; we offer one to those who do not".'],
            ['Tricolon', 'Three parallel items.', 'Make a list writable. Three is the limit of what a listener holds.'],
            ['Anaphora', 'Repeating the opening of successive clauses.', 'Mark a sequence of impacts as one argument rather than three.'],
            ['Praeteritio', 'Naming what you will not dwell on.', 'Concede efficiently: "I will not pretend there is no cost here".'],
            ['Prolepsis', 'Answering an objection before it is made.', 'Pre-empt: see [winning tricks](@debate/winning/winning-tricks).'],
            ['Aporia', 'Professed doubt about how to proceed.', 'Set up a dilemma you then resolve against them.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Two or three per speech', text: 'Figures work because they are unusual. A speech made entirely of antitheses is a speech nobody can follow, and judges mark it as performance rather than argument.' },
      ],
    },
  ],
  sources: [
    'Aristotle, Rhetoric (trans. Kennedy, 2007).',
    'Cicero, De Inventione; Quintilian, Institutio Oratoria.',
    'Isocrates, Antidosis, on rhetoric as the training of judgement.',
    'Schiappa, E. (1999) The Beginnings of Rhetorical Theory in Classical Greece, on the sophists.',
  ],
  related: ['debate/techniques/framing-and-burdens', 'debate/techniques/delivery-and-style', 'debate/schools/dialectic-traditions'],
}

export default guide
