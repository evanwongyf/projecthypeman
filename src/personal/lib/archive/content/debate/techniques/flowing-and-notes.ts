import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Flowing is note-taking built for one job: letting you answer eight minutes of material in two, and letting you see, at a glance, which arguments nobody has answered. It is the most mechanical skill in debate and the one that most reliably separates teams at the same level of knowledge.',
  nutshell: [
    'One **column per speech**, one **row per argument**. An unanswered row is visible as a gap.',
    'Flow the **structure**, not the words: tagline, mechanism in three words, impact.',
    'Leave the right-hand side of each row for **your** answer, written while they speak.',
    'Use a fixed shorthand. Inventing abbreviations mid-round costs you the next sentence.',
    'Two colours: theirs and yours. The eye finds unanswered arguments instantly.',
    'A **dropped** row is a won argument, in every format — and your flow is how you prove it.',
  ],
  sections: [
    {
      id: 'layout',
      title: 'The layout',
      blocks: [
        { t: 'p', text: 'Landscape paper, or a wide screen. Columns across the top in speech order; arguments down the left. Each argument keeps its row for the whole debate, so what happened to it is one horizontal line.' },
        {
          t: 'table',
          head: ['Argument', '1st Prop', '1st Opp', '2nd Prop', '2nd Opp', '3rd'],
          rows: [
            ['Road space zero-sum', 'claim + mech', 'alt cause: signals', 'dwell fixed; variance = traffic', 'displacement to ring rd', 'weigh: substitutes'],
            ['Enforcement unworkable', '—', 'exemptions swallow ban', 'cameras + permits exist', 'phased ≠ now', 'phasing in model'],
            ['Consent / legitimacy', 'brief', 'dropped', 'dropped', 'dropped', 'dropped'],
          ],
          caption: 'Row three is the point of the whole exercise: an argument that was made once and never mentioned again. Whoever notices it first owns it.',
        },
        { t: 'debate-lab', viz: 'flow' },
      ],
    },
    {
      id: 'shorthand',
      title: 'A shorthand you can learn in ten minutes',
      blocks: [
        {
          t: 'table',
          head: ['Symbol', 'Means'],
          rows: [
            ['→', 'leads to / causes'],
            ['↑ ↓', 'increases / decreases'],
            ['∵ ∴', 'because / therefore'],
            ['✗', 'rebutted'],
            ['○', 'unanswered so far'],
            ['!', 'impact'],
            ['⊕', 'turn (their mechanism, our conclusion)'],
            ['CF', 'counterfactual'],
            ['NU', 'non-unique: happens in both worlds'],
            ['EI', 'even-if'],
            ['w/', 'with; w/o: without'],
            ['govt / opp / 1P / 2O', 'sides and speakers'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Drop all vowels in long words: "enforcement" becomes "enfrcmnt".',
            'Never write a sentence. Three words per line, maximum.',
            'Write their tagline exactly as they said it; you will quote it back.',
            'Circle anything you intend to answer, so your eye finds it under pressure.',
            'Mark the time you heard it, so you can say "in their third minute they conceded …".',
          ],
        },
      ],
    },
    {
      id: 'answering',
      title: 'Flowing so that you can answer',
      blocks: [
        { t: 'p', text: 'The flow is not a transcript, it is a to-do list. The habit that makes it one: as they speak, write your response in the margin of the same row, in your own colour. By the end of their speech your rebuttal already exists in note form and is in the right order.' },
        {
          t: 'steps',
          items: [
            { title: 'Hear the claim', body: 'Write the tagline on a new row. Nothing else yet.' },
            { title: 'Hear the mechanism', body: 'Three words. Mark the step you intend to attack with a circle.' },
            { title: 'Write your answer immediately', body: 'In the margin: "alt cause?", "non-unique", "EI reversible". One of the ten tools from [refutation techniques](@debate/techniques/refutation-techniques).' },
            { title: 'Hear the impact', body: 'Mark with !, and note the axis it is strongest on for [weighing](@debate/structure/weighing).' },
            { title: 'Before you stand', body: 'Number the rows in the order you will take them, grouping two or three into each clash.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Group on the page', text: 'Draw a bracket around rows that belong to one clash and give the bracket a name. That bracket is your speech structure, and it is also exactly what the judge is going to write in their own notes.' },
      ],
    },
    {
      id: 'mistakes',
      title: 'What goes wrong',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Transcribing', tag: 'Most common', body: 'Trying to catch the words. You fall behind inside a minute and lose the structure, which is the part you needed.' },
            { title: 'No columns', tag: 'Fatal', body: 'One long list means you cannot see what was answered. The whole value of a flow is the horizontal reading.' },
            { title: 'Flowing only them', tag: 'Half a flow', body: 'You need your own case on the page too, or you will not notice which of your arguments was attacked and left undefended.' },
            { title: 'One colour', tag: 'Slow', body: 'Two colours turn "find the dropped argument" from a reading task into a glance.' },
            { title: 'Flowing on a laptop badly', tag: 'Tooling', body: 'A spreadsheet with one column per speech works; a document that scrolls does not. Whatever you use must show all columns at once.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Judges flow too', text: 'Your flow should resemble the judge’s. When you say "they dropped our second argument entirely", the judge checks their own page — and if your claim is accurate, you have just been handed an uncontested issue. If it is not accurate, you have spent credibility you will need later.' },
      ],
    },
  ],
  related: ['debate/structure/rebuttal-and-clash', 'debate/formats/american-formats', 'debate/practice/drills', 'note-taking/methods/cornell'],
}

export default guide
