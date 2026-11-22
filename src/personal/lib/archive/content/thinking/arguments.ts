import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'In logic, an argument is not a quarrel. It is a set of statements, the **premises**, offered as reasons to accept another statement, the **conclusion**. Being able to pull an argument apart into these pieces is the first step to judging it.',
  nutshell: [
    'Find the **conclusion** first ("so", "therefore", "this shows"), then the **premises** ("because", "since", "given that").',
    'A **valid** deductive argument: if the premises are true, the conclusion must be true. **Sound**: valid, and the premises really are true.',
    'Inductive arguments make conclusions **probable**, not certain.',
    'Watch for **hidden premises**: unstated assumptions the argument depends on.',
  ],
  sections: [
    {
      id: 'parts',
      title: 'Premises and conclusions',
      blocks: [
        {
          t: 'example',
          title: 'Breaking down an argument',
          lines: [
            { label: 'Text', text: '"Since screens emit blue light, and blue light delays sleep hormones, phones should be kept out of bedrooms."' },
            { label: 'Premise 1', text: 'Screens emit blue light.' },
            { label: 'Premise 2', text: 'Blue light delays the release of sleep hormones.' },
            { label: 'Hidden premise', text: 'Delaying sleep hormones is bad enough to justify removing phones (and phones would be used in bed).' },
            { label: 'Conclusion', text: 'Phones should be kept out of bedrooms.' },
          ],
        },
        {
          t: 'table',
          head: ['Conclusion indicators', 'Premise indicators'],
          rows: [
            ['therefore, so, thus, hence', 'because, since, as'],
            ['this shows that, it follows that', 'given that, for the reason that'],
            ['consequently, we can conclude', 'as shown by, the evidence is'],
          ],
        },
      ],
    },
    {
      id: 'deductive',
      title: 'Deductive: validity and soundness',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Valid', body: 'The structure guarantees the conclusion if the premises are true. *All mammals breathe air. Whales are mammals. So whales breathe air.*' },
            { title: 'Valid but unsound', body: 'Good structure, false premise. *All birds can fly. Penguins are birds. So penguins can fly.* The logic works; premise 1 is false.' },
            { title: 'Invalid', body: 'The conclusion does not follow even if the premises are true. *All cats have tails. My dog has a tail. So my dog is a cat.*' },
            { title: 'Sound', body: 'Valid **and** all premises true. The gold standard: the conclusion must be true.' },
          ],
        },
      ],
    },
    {
      id: 'other',
      title: 'Inductive and abductive',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Inductive', def: 'From observations to a general conclusion that is probable, not certain. *Every swan I have seen is white, so all swans are probably white.* (Black swans exist.) Judge by how strong and representative the evidence is.' },
            { term: 'Abductive', def: 'Inference to the best explanation. *The grass is wet, so it probably rained* (but maybe the sprinkler was on). Judge by comparing alternative explanations.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Two ways to attack an argument',
          text: 'Challenge a **premise** ("that is not true") or challenge the **link** ("even if it is true, the conclusion does not follow"). Most real disagreements are about hidden premises.',
        },
      ],
    },
  ],
  sources: [
    'Copi, I. M., Cohen, C., & Rodych, V. (2019). *Introduction to logic* (15th ed.). Routledge.',
    'Warburton, N. (2007). *Thinking from A to Z* (3rd ed.). Routledge.',
  ],
  related: ['thinking/fallacies', 'writing/essentials/argument', 'thinking/critical-thinking'],
}

export default guide
