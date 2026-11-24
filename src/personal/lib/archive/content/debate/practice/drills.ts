import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Debating improves through drills, not through more rounds. A round gives you one piece of feedback an hour; a drill gives you twenty repetitions of the specific thing you are bad at. Each drill below names what it fixes, how long it takes, and how to mark it, because an unmarked drill is just talking.',
  nutshell: [
    'Drill the **component**, not the whole speech: mechanisms, weighing, rebuttal shapes, time control.',
    'Most drills are 3 to 6 minutes and need one partner, or none.',
    'Mark every drill against one criterion. "That was better" is not marking.',
    'Three drills, three times a week, beats one extra practice round.',
    'Record yourself once a month. It is unpleasant and it is the fastest single improvement available.',
  ],
  sections: [
    {
      id: 'solo',
      title: 'Alone',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The because drill', tag: 'Fixes: assertion', body: 'Take any headline. State a claim, then say "because" three times, each one a further step. 2 minutes per claim, ten claims. Mark: did every step get more specific, or did you restate?' },
            { title: 'So-what laddering', tag: 'Fixes: missing impacts', body: 'One mechanism; ask "so what" until you reach a named group and a size. Mark: can you name who, how many, and how badly?' },
            { title: 'One-minute impromptu', tag: 'Fixes: fluency', body: 'Random motion, 30 seconds prep, 60 seconds speech, one argument with all five parts. Mark: did you finish the mechanism before the time?' },
            { title: 'The weighing sentence', tag: 'Fixes: no comparison', body: 'For ten motions, write only the sentence "we win even if they are right, because …". Mark: does it name an axis?' },
            { title: 'Record and flow yourself', tag: 'Fixes: everything', body: 'Give a speech, then flow your own recording as a judge. Mark: every argument you cannot find on your own flow is one the judge also lost.' },
            { title: 'Rate control', tag: 'Fixes: speed', body: 'Read 150 words aloud against a timer until a minute is reliable. Mark: within five seconds, three times running.' },
          ],
        },
        { t: 'debate-lab', viz: 'timer' },
      ],
    },
    {
      id: 'pairs',
      title: 'In pairs',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Ten shapes', tag: 'Fixes: narrow rebuttal', body: 'One argument; the partner answers it ten times, once with each tool from [refutation techniques](@debate/techniques/refutation-techniques). Mark: which three shapes do you never reach for?' },
            { title: 'The three-answer rule', tag: 'Fixes: evasion', body: 'Borrowed from [Tibetan monastic debate](@debate/schools/dialectic-traditions). The defender may say only "accepted", "why", or "that reason is not established". Mark: where did the chain actually break?' },
            { title: 'Even-if ladder', tag: 'Fixes: brittleness', body: 'Concede their whole argument, then win the round in two sentences. Four rounds of escalating concession. Mark: did the last version still win?' },
            { title: 'POI pressure', tag: 'Fixes: composure', body: 'Speak for three minutes while your partner offers a point every twenty seconds. Take two. Mark: did your structure survive?' },
            { title: 'Flow race', tag: 'Fixes: note-taking', body: 'Flow a recorded speech, then compare pages with your partner. Mark: count the arguments one of you has and the other does not.' },
            { title: 'Swap sides mid-prep', tag: 'Fixes: one-sidedness', body: 'Prep seven minutes for proposition, then swap and speak for opposition. Mark: how much of your own prep did you have to abandon?' },
          ],
        },
      ],
    },
    {
      id: 'group',
      title: 'In a club',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Whip-only rounds', tag: 'Fixes: summarising', body: 'Play a recorded debate, then four people give the whip speech. Mark: who named the same clashes the judge did?' },
            { title: 'Clash naming', tag: 'Fixes: structure', body: 'After four speeches, everyone writes the two clashes on paper and compares. Mark: agreement rate; low agreement means the round was badly structured by the speakers.' },
            { title: 'Weighing-only final speech', tag: 'Fixes: comparison', body: 'Two-minute closing speeches with no new argument permitted — only comparison. Mark: did they name an axis and justify it?' },
            { title: 'Judge the judges', tag: 'Fixes: adjudication', body: 'Three people judge the same round independently, then compare reasons. Mark: did anyone decide on something nobody said?' },
            { title: 'Lay-judge round', tag: 'Fixes: jargon', body: 'Recruit someone who has never seen a debate to judge. Mark: ask them afterwards what each team argued. The gap is your jargon.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The highest-value club exercise', text: 'Flowing the same round as a group and comparing pages. It makes visible, in a way nothing else does, that different listeners hear different debates — and that the speaker, not the listener, is responsible for the difference.' },
      ],
    },
    {
      id: 'programme',
      title: 'A four-week programme',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Focus', 'Drills'],
          rows: [
            ['1', 'Mechanisms', 'Because drill daily; so-what laddering; one practice round.'],
            ['2', 'Rebuttal', 'Ten shapes; three-answer rule; flow race; one practice round.'],
            ['3', 'Weighing', 'Weighing sentence daily; even-if ladder; weighing-only speeches.'],
            ['4', 'Delivery and time', 'Rate control; POI pressure; record and flow yourself; two rounds.'],
          ],
          caption: 'Thirty to forty minutes a day. Most of the measurable gain in a novice’s first season comes from weeks one and three.',
        },
        { t: 'p', text: 'Motions to run these on are in the [motion bank](@debate/practice/motion-bank); how to turn a judge’s feedback into next week’s focus is in [feedback and review](@debate/practice/feedback-and-review).' },
      ],
    },
  ],
  related: ['debate/practice/motion-bank', 'debate/techniques/refutation-techniques', 'debate/practice/feedback-and-review'],
}

export default guide
