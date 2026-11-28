import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Prep time is short and almost always spent in the wrong order. Teams start writing arguments, run out of time, and walk in without a definition, a model, a split or a line. This page is the order that works, and the four documents you should leave prep with.',
  nutshell: [
    'Start with the **motion type and the burdens**, not with arguments. See [motion types](@debate/systems/motions-and-burdens).',
    'Write **their** best case before your own; you will build a case that engages instead of one that avoids.',
    'A policy motion needs a **model**: actor, mechanism, funding, enforcement, timeline, exemptions.',
    'A **team line** is one sentence both speakers can say: the thing your side believes that the other side must deny.',
    'The **split** allocates arguments so nobody repeats, and rebuttal so nobody is surprised.',
    'Two or three developed arguments beat five assertions in every format and at every level.',
  ],
  sections: [
    {
      id: 'order',
      title: 'The order of prep',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the motion for its type', body: 'Policy, value, fact, actor or counterfactual. Each sets different burdens, and getting this wrong wastes the whole prep.' },
            { title: 'Write the comparison in one line', body: '"Our world has X; theirs has Y." Everything you argue afterwards must be a difference between those two worlds.' },
            { title: 'Write their three best arguments', body: 'Three minutes, honestly. If you cannot, you will discover their case mid-round instead.' },
            { title: 'Write your team line', body: 'One sentence that they must deny. It becomes the first and last thing your team says.' },
            { title: 'Generate arguments against a list of lenses', body: 'Stakeholders, timeframes, principle versus practice, second-order effects. See the matrix below.' },
            { title: 'Choose two or three and cut the rest', body: 'Ruthlessly. The cut arguments become rebuttal and POI material, not speech material.' },
            { title: 'Build the model, if the motion needs one', body: 'Six fields, written down, so both speakers describe the same policy.' },
            { title: 'Split and assign rebuttal', body: 'Who speaks on what, and who answers which predicted attack.' },
            { title: 'Write the weighing sentence', body: 'Why you win even if both sides prove their case. This is the spine of your last speech.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Fifteen minutes is enough', text: 'The order above fits into fifteen minutes with practice because most of it is one-line writing. What does not fit is writing speeches, which is also what you should not be doing: a scripted case cannot adapt, and adaptation is what is marked.' },
      ],
    },
    {
      id: 'generate',
      title: 'Generating arguments on purpose',
      lead: 'Not brainstorming. A matrix, so you notice what you would otherwise miss.',
      blocks: [
        {
          t: 'table',
          head: ['Lens', 'The question', 'What it tends to find'],
          rows: [
            ['Stakeholders', 'Who is affected, including people outside the obvious group?', 'The regulator, the next market over, the people in other countries, the future.'],
            ['Timeframes', 'What happens in a year, and in a decade?', 'Short-run costs against long-run norm change — the classic clash.'],
            ['Principle', 'Who has the right to decide this, regardless of outcome?', 'Autonomy, consent, legitimacy, the state’s standing to act.'],
            ['Practice', 'Will it actually work, given the people who run it?', 'Implementation, incentives, circumvention, enforcement.'],
            ['Second order', 'What does the policy teach people to do next?', 'Precedent, moral hazard, substitution, chilling effects.'],
            ['Counterfactual', 'What happens anyway without us?', 'The alternative causal path — the most under-used argument in debate.'],
            ['Comparative', 'Who does this best, and why them?', 'Counter-models, and the argument that someone else should act instead.'],
          ],
        },
        { t: 'debate-lab', viz: 'motion' },
      ],
    },
    {
      id: 'definition',
      title: 'Definitions and models',
      blocks: [
        { t: 'p', text: 'A definition says what the words of the motion mean. A model says what you are actually going to do. Proposition owns both, and the standard is **reasonableness**: the definition an informed person reading the motion would expect. Anything else invites a definitional challenge, which almost always makes the round worse for everyone.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Definition', tag: 'What the words mean', body: 'Short. Only define terms that are genuinely ambiguous or do real work. Defining "the" is a tell.' },
            { title: 'Model', tag: 'What we would do', body: 'Actor, mechanism, funding, enforcement, timeline, exemptions. Thirty seconds of speech, and it pre-empts a third of opposition’s case.' },
            { title: 'Counter-model', tag: 'Opposition’s option', body: 'A different solution to the same problem. Takes on a burden in exchange for conceding the harm.' },
            { title: 'Status quo', tag: 'Opposition’s other option', body: 'Defend what exists, including the reforms already happening without the motion.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Squirrelling', text: 'A definition that technically fits the words but obviously dodges the intended debate is a **squirrel**. Judges punish it, and you also lose the round you prepared for. How to answer one is in [dirty tricks](@debate/winning/dirty-tricks).' },
      ],
    },
    {
      id: 'line',
      title: 'The team line',
      blocks: [
        { t: 'p', text: 'A team line is not a slogan; it is the proposition your case stands on, phrased so that the other side has to deny it. It keeps two speakers consistent, and it gives the judge a single thing to remember.' },
        {
          t: 'example',
          title: 'Three motions, three lines',
          lines: [
            { label: 'Compulsory voting (Prop)', text: '"A vote is not only a right but a duty we owe each other, and turnout that tracks wealth makes democracy answer only to the wealthy."' },
            { label: 'Compulsory voting (Opp)', text: '"A coerced vote is not information: it tells the state nothing about what people want, and buys legitimacy by force."' },
            { label: 'Banning cars in city centres (Prop)', text: '"Road space is a scarce public good, and we currently allocate it to its lowest-value user."' },
          ],
        },
        { t: 'p', text: 'Test it by asking: could the other side say this sentence too? If they could, it is a platitude, not a line.' },
      ],
    },
    {
      id: 'split',
      title: 'The split',
      blocks: [
        { t: 'p', text: 'A split allocates material. Done badly, two speakers make the same argument twice and the judge marks it once. Done well, the second speaker arrives with a clear job and the time to do it.' },
        {
          t: 'table',
          head: ['Format', 'Conventional split'],
          rows: [
            ['BP opening half', 'PM: framing, model, argument 1 (and 2 if short). DPM: rebuttal, rebuild, argument 2 or 3.'],
            ['BP closing half', 'Member: the extension. Whip: clash-based summary, with the extension carried through.'],
            ['AP / WSDC', 'First: definition, model, arguments 1–2. Second: rebuttal plus argument 3. Third: whole-debate rebuttal. Reply: issues.'],
            ['Policy', '1AC reads the case; 2AC answers everything; rebuttals collapse to the winning positions.'],
            ['Public Forum', 'First speaker: case and summary. Second: rebuttal and final focus — the "second speaker carries the back half" convention.'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Each argument belongs to exactly one speaker.',
            'Rebuttal is assigned by predicted argument, not left to whoever gets there first.',
            'The second speaker knows which of the first speaker’s points to rebuild if attacked.',
            'Both speakers can state the model and the line identically.',
            'Somebody owns the weighing, and it is written down before the round starts.',
          ],
        },
      ],
    },
    {
      id: 'opp',
      title: 'Prepping as opposition',
      blocks: [
        { t: 'p', text: 'Opposition prep is harder because you are preparing against a case you have not heard. The remedy is to prepare against the two or three cases they are most likely to run, and to prepare *structures* rather than scripts.' },
        {
          t: 'steps',
          items: [
            { title: 'Predict their model', body: 'There are usually only two or three sensible ones. Write a line of rebuttal for each.' },
            { title: 'Decide your stance', body: 'Status quo or counter-model. Commit, because switching mid-round concedes incoherence.' },
            { title: 'Separate principle from practice', body: 'Even if the policy works, may they do it? Even if they may, does it work? Two independent routes to the win.' },
            { title: 'Find the harm they must concede', body: 'The cost their own mechanism creates. This becomes your strongest POI.' },
            { title: 'Prepare the even-if', body: '"Even if the policy does what they say, here is the cost that still decides the round."' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Quinn, S. (2005) Debating.',
    'World Schools Debating Championships Rules and Judging Guide, on definitions and models.',
    'World Universities Debating Championship Debating and Judging Manual, on reasonable definitions.',
  ],
  related: ['debate/systems/motions-and-burdens', 'debate/structure/speaker-roles', 'debate/techniques/framing-and-burdens', 'debate/practice/motion-bank'],
}

export default guide
