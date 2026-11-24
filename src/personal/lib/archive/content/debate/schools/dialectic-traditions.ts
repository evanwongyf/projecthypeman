import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Competitive debate is one answer to the question of how disagreement should be conducted, and it is not the only one that has been formalised. Socratic questioning, Talmudic study, the Nyāya tradition, Tibetan monastic debate and the Chinese school of names each built a procedure with its own idea of what a good argument is — and several of them do things the modern circuit does not.',
  nutshell: [
    'The **Socratic elenchus** wins by refutation alone: the questioner advances nothing and the answerer’s own commitments defeat them.',
    '**Talmudic** argument preserves the losing position in the record, because the reasoning has value independent of the result.',
    '**Nyāya** specifies a five-member inference and a long taxonomy of defeat conditions, centuries before Toulmin.',
    'Tibetan monastic debate is formal, physical and public, and is a required part of the curriculum rather than an extracurricular contest.',
    'The **Mingjia** — the Chinese school of names — worked on paradox and definition, and were criticised in terms strikingly like the charges against the sophists.',
    'The common thread: every tradition had to solve the problem of distinguishing honest argument from winning at any cost.',
  ],
  sections: [
    {
      id: 'socratic',
      title: 'Socratic elenchus',
      blocks: [
        { t: 'p', text: 'The elenchus is a method of refutation by question. The questioner asserts nothing. They secure agreement to a definition, then produce a case the definition cannot handle, and the answerer abandons or revises it. The outcome is often **aporia** — acknowledged confusion — which is treated as progress rather than failure.' },
        {
          t: 'steps',
          items: [
            { title: 'Elicit a definition', body: '"Courage is standing firm in battle."' },
            { title: 'Secure a general principle', body: '"And a definition should cover every case of the thing defined?"' },
            { title: 'Produce the counterexample', body: '"What of the soldier who retreats in order to win later?"' },
            { title: 'Draw the contradiction', body: 'The definition excludes a case they accept as courage.' },
            { title: 'Invite revision', body: 'The answerer must narrow, widen or abandon. Each move is progress.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The debating use', text: 'This is cross-examination technique in its purest form: the two-question trap in [points and cross-examination](@debate/techniques/points-and-cross-examination) is a compressed elenchus. Note what Socrates never does — argue. He makes their own commitments do the work.' },
      ],
    },
    {
      id: 'talmud',
      title: 'Talmudic argument',
      blocks: [
        { t: 'p', text: 'Talmudic study is built around recorded disagreement. A page sets a proposition, an objection, a reply, a counter-case, and often ends without resolution; the minority opinion stays in the text. Several of its moves have no equivalent in competitive debate and are useful anyway.' },
        {
          t: 'terms',
          items: [
            { term: 'Kushya', def: 'A difficulty raised against a position: the objection stated as sharply as possible before any answer is attempted.' },
            { term: 'Teyku', def: 'The question stands unresolved. Recorded as an outcome, not an embarrassment.' },
            { term: 'Chavruta', def: 'Study in pairs, arguing opposed readings aloud — the ancestor of partner practice and the strongest study method in this shelf.' },
            { term: 'Preserving the minority', def: 'The defeated reasoning is kept because the question may return under different conditions.' },
            { term: 'Pilpul', def: 'Fine-grained distinction-drawing; admired as rigour and criticised, by the tradition itself, when it becomes cleverness for its own sake.' },
          ],
        },
        { t: 'p', text: 'The contrast with a tournament is sharp and worth sitting with: a format that produces a winner discards the losing reasoning entirely, and a format that produces a record keeps it. Each serves a different purpose, and neither is the general case.' },
      ],
    },
    {
      id: 'nyaya',
      title: 'Nyāya and Indian debate theory',
      blocks: [
        { t: 'p', text: 'The Nyāya school developed a formal theory of inference and of debate from roughly the second century CE. Its five-member inference is a complete argument layout, and its catalogue of **defeat conditions** anticipates informal logic by a very long way.' },
        {
          t: 'table',
          head: ['Member', 'Sanskrit', 'Modern equivalent'],
          rows: [
            ['The claim', 'pratijñā', 'Claim'],
            ['The reason', 'hetu', 'Grounds'],
            ['The general rule with example', 'udāharaṇa', 'Warrant plus backing'],
            ['The application to this case', 'upanayana', 'The inference step'],
            ['The conclusion', 'nigamana', 'Restated claim'],
          ],
          caption: 'Compare Toulmin’s six-part layout, which separates the warrant from its backing and adds a qualifier.',
        },
        { t: 'p', text: 'The tradition also distinguishes kinds of debate by their purpose: **vāda**, honest inquiry between parties seeking the truth; **jalpa**, disputation aimed at winning; and **vitaṇḍā**, mere destructive refutation that advances no position of its own. Any modern debater will recognise all three, and the judgement implied by the ordering.' },
      ],
    },
    {
      id: 'tibetan',
      title: 'Tibetan monastic debate',
      blocks: [
        { t: 'p', text: 'In the Geluk monastic curriculum, debate is a daily, examined discipline. The format is strict: the challenger stands and the defender sits; the challenger claps to mark the stages of an argument; propositions are advanced in a consequence form, and the defender answers from a fixed set of permitted replies — "I accept", "why", or "the reason is not established".' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Constrained answers', tag: 'Design feature', body: 'Restricting the defender to three replies makes evasion visible. Nobody can change the subject, because there is no move for it.' },
            { title: 'Consequence form', tag: 'Precision', body: 'Arguments are advanced as conditional consequences, so where exactly a chain breaks is identified rather than argued about.' },
            { title: 'Physical and public', tag: 'Culture', body: 'The clap and the standing posture make the structure of the exchange visible to onlookers, who are also learning.' },
            { title: 'Curricular, not extracurricular', tag: 'Purpose', body: 'The debate *is* the examination. Argument is treated as the method of study rather than a competition beside it.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Worth stealing', text: 'The three-answer rule is an excellent drill. Give a partner a case and allow yourself only "accepted", "why", or "that reason is not established". It is remarkable how quickly it exposes an argument with a missing step.' },
      ],
    },
    {
      id: 'mingjia',
      title: 'The Chinese school of names',
      blocks: [
        { t: 'p', text: 'The Mingjia, working in the Warring States period, studied names, definitions and paradoxes — Hui Shi and Gongsun Long are the figures usually named, and the "white horse is not a horse" dialogue is the famous example. Later Chinese thought largely rejected them, and the terms of the rejection are familiar: that disputation detached from conduct produces cleverness rather than wisdom.' },
        { t: 'p', text: 'The Mohists, by contrast, built an explicit method of argument and distinction in service of practical and ethical conclusions, which makes them a closer parallel to the dialectical traditions above. The pattern across cultures is consistent: formal argument gets developed, it gets detached from its purpose, and someone writes the complaint that we now call the case against competitive debate.' },
        { t: 'quote', text: 'Those who dispute about names without regard to conduct are skilled, but not wise.', by: 'The recurring charge, in many traditions, against argument pursued for its own sake' },
      ],
    },
    {
      id: 'lessons',
      title: 'What a modern debater can take from this',
      blocks: [
        {
          t: 'checklist',
          items: [
            'The elenchus: refute from their commitments, assert nothing of your own.',
            'Chavruta: argue aloud with a partner, taking opposed sides, before you believe either.',
            'Teyku: record which questions you could not resolve, rather than pretending you did.',
            'The three-answer rule: drill answering only "accepted", "why", or "that reason is not established".',
            'The vāda / jalpa distinction: know, in each argument, which one you are actually having.',
          ],
        },
        { t: 'p', text: 'Drills built on these are in [drills](@debate/practice/drills). The Western version of the same arguments about honesty and skill is in [classical rhetoric](@debate/schools/classical-rhetoric).' },
      ],
    },
  ],
  sources: [
    'Vlastos, G. (1983) The Socratic Elenchus, Oxford Studies in Ancient Philosophy.',
    'Matilal, B. K. (1998) The Character of Logic in India. SUNY Press.',
    'Perdue, D. (1992) Debate in Tibetan Buddhism. Snow Lion.',
    'Boyarin, D. (2003) Sparks of the Logos, on Talmudic argument structure.',
    'Graham, A. C. (1989) Disputers of the Tao. Open Court, on the Mingjia and Mohists.',
  ],
  related: ['debate/schools/classical-rhetoric', 'debate/techniques/points-and-cross-examination', 'debate/practice/drills'],
}

export default guide
