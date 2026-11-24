import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The same speech wins in one room and loses in another, and this is not unfairness so much as a fact about who is listening. Adaptation is the skill of delivering your case in the form the person deciding can actually use — without changing the case itself, which is where adaptation turns into pandering.',
  nutshell: [
    'Identify the judge type in the first thirty seconds: **lay**, **flow**, **panel**, or **audience**.',
    'Adapt **presentation**, never substance. The arguments stay; the words, pace and signposting change.',
    'Lay judges need conclusions stated. Flow judges need labels kept consistent. Panels need both.',
    'Where paradigms are published, read them. Where they are not, watch what the judge writes.',
    'A judge who stops writing has stopped being persuaded. It is the most reliable live signal in the room.',
    'Never adapt by abandoning weighing: it works on every judge there is.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Reading the judge',
      blocks: [
        {
          t: 'table',
          head: ['Signal', 'Probably', 'Do'],
          rows: [
            ['Pre-printed flow sheet, pen moving constantly', 'Flow judge', 'Signpost by label, extend by name, pace can rise.'],
            ['Notebook, writes occasionally, watches you', 'Lay or persuasion-oriented', 'Slow down, no jargon, state conclusions explicitly.'],
            ['Asks about the format before the round', 'New judge', 'Explain structure as you go: "that was their case, now ours".'],
            ['Published paradigm on the tab site', 'Circuit judge', 'Read it. It tells you how to win.'],
            ['Panel of three, mixed', 'Mixed', 'Write for the most technical, speak for the least.'],
            ['Audience with a vote', 'Public debate', 'Narrative, early concession, one human example.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Ask', text: 'In most circuits it is entirely normal to ask a judge before the round how they prefer to be given the debate. The answer takes ten seconds and is worth more than any amount of inference.' },
      ],
    },
    {
      id: 'lay',
      title: 'Lay judges',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Say "this means" and then say what it means. Do not leave the inference to them.',
            'Use one concrete person or case and return to them.',
            'Number your points out loud, and repeat the number when you finish.',
            'Concede early and visibly; lay judges read refusal to concede as evasion.',
            'Close with one sentence they could repeat to a friend.',
          ],
          dont: [
            'Use "non-unique", "turn", "delink", "perm", "warrant" or any other circuit word.',
            'Rely on an argument being conceded. They weigh what convinced them, not the flow.',
            'Spread, or speak at your tournament pace.',
            'Argue about the rules of debate. It reads as not having an answer.',
          ],
        },
        { t: 'p', text: 'Lay judging is not a lower standard, it is a different one, and it is closer to the [average reasonable person](@debate/systems/judging) that parliamentary manuals describe than most circuit judging is.' },
      ],
    },
    {
      id: 'flow',
      title: 'Flow judges',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Use the same tagline every time an argument appears; your partner uses it too.',
            'Say where in the flow you are: "on their second contention, third response".',
            'Extend an argument in every speech, even in one sentence, so it stays live.',
            'Answer in the order they spoke if you are not grouping, and announce the order if you are.',
            'Signal the end of a section audibly, so their page breaks where your speech does.',
          ],
        },
        { t: 'p', text: 'The mechanics of the page a flow judge is keeping are in [flowing](@debate/techniques/flowing-and-notes); the more you write like them, the easier your argument is to record.' },
      ],
    },
    {
      id: 'limits',
      title: 'The limits of adaptation',
      blocks: [
        { t: 'p', text: 'There is a line, and it is worth stating plainly: adapt the *form*, not the *content*. Changing your characterisation of an actor because you think the judge has a political view is not adaptation, and it tends to fail anyway — trained adjudicators are explicitly instructed to decide on the material, and most are better at noticing pandering than debaters assume.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Legitimate', tag: 'Form', body: 'Slower pace, plainer words, more explicit conclusions, different ordering, more or less technical vocabulary.' },
            { title: 'Legitimate', tag: 'Emphasis', body: 'Choosing which of your true arguments to spend time on, given what this judge will find decisive.' },
            { title: 'Not', tag: 'Substance', body: 'Arguing something you have told other judges the opposite of, in the same tournament, on the same side.' },
            { title: 'Not', tag: 'Flattery', body: 'Appealing to the judge’s assumed politics or identity. It is both ineffective and, in most equity codes, a problem.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The universal adaptation', text: 'Weighing works on every judge type, in every format, at every level. If you are unsure how to adapt, spend the extra time on the comparison and you will not be wrong.' },
      ],
    },
  ],
  related: ['debate/systems/judging', 'debate/schools/policy-paradigms', 'debate/techniques/delivery-and-style', 'debate/structure/weighing'],
}

export default guide
