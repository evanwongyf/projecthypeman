import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every speech has a job, and judges mark whether you did it. Role fulfilment is the cheapest score in debate: a speaker who does the ordinary duties of their position in order, on time, usually beats a more talented speaker who gave the wrong speech.',
  nutshell: [
    'First speakers own **framing**: definition, model, burdens and the opening case.',
    'Second speakers own **engagement**: rebuttal, rebuilding, and the rest of the case.',
    'Third speakers and whips own **the shape of the debate**: grouping it into clashes, with no new arguments.',
    'Reply and final-focus speakers own **the decision**: two or three issues and the comparison.',
    'In BP, the closing half owes an **extension** — a contribution, not a repetition.',
    'Role fulfilment is marked explicitly in WSDC strategy and implicitly everywhere else.',
  ],
  sections: [
    {
      id: 'first',
      title: 'First speakers',
      blocks: [
        { t: 'p', text: 'You are speaking into silence, which is both an advantage and a trap. The advantage is that you choose the terms. The trap is that having nothing to rebut tempts you to fill the time with a fourth argument instead of building the first three properly.' },
        {
          t: 'steps',
          items: [
            { title: 'Why this debate matters (20 s)', body: 'One sentence of context. Not a history lesson.' },
            { title: 'Definition and model (30–60 s)', body: 'Only what is genuinely needed. The model is the valuable part.' },
            { title: 'The team line (10 s)', body: 'One sentence the other side must deny.' },
            { title: 'Signpost (10 s)', body: '"I will make two arguments: the first about X, the second about Y."' },
            { title: 'Arguments (the rest)', body: 'Two or three, each with the five parts from [argument anatomy](@debate/structure/argument-anatomy).' },
            { title: 'Close on the line (15 s)', body: 'Return to the sentence you opened with.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Opposition first speakers', text: 'Spend 60 to 90 seconds on rebuttal, then build. The temptation is to rebut for four minutes and arrive at your own case with no time; the temptation in the other direction is to ignore their case entirely. The judge needs both, and the ratio is roughly one to three.' },
      ],
    },
    {
      id: 'second',
      title: 'Second speakers',
      blocks: [
        { t: 'p', text: 'The engagement speech, and usually the most valuable one in the round. Three jobs, in this order: rebut their case, rebuild yours where it was attacked, then add your own material.' },
        {
          t: 'table',
          head: ['Section', 'Share of the speech', 'Why'],
          rows: [
            ['Rebuttal of their case', '~40%', 'Grouped by argument, not by sentence. Hit the mechanism, not the example.'],
            ['Rebuilding your own', '~20%', 'Answer their attacks on your first speaker explicitly, by name.'],
            ['Your new material', '~40%', 'The second half of the split: usually one developed argument.'],
          ],
          caption: 'Shares shift with the round: if your case has been dismantled, rebuilding takes priority over new material.',
        },
        { t: 'callout', tone: 'warn', title: 'The commonest second-speaker error', text: 'Rebutting line by line in the order they spoke. It eats time, it is unfollowable, and it leaves the judge with twelve small answers instead of three won issues. Group first: "they made three claims about cost; all three assume …".' },
      ],
    },
    {
      id: 'third',
      title: 'Third speakers and whips',
      blocks: [
        { t: 'p', text: 'This speech converts a transcript into a decision. No new arguments are permitted. What is permitted — and rewarded — is grouping, comparison, and new *analysis* in defence of existing material.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Do', tag: 'Clashes', body: 'Name two to four issues in words the judge can write down, then fight each one through: their best version, your answer, your material, the comparison.' },
            { title: 'Do', tag: 'Your own side', body: 'In BP especially, carry your half’s contribution through the summary. Judges rank teams, and a whip who never mentions their own extension sinks it.' },
            { title: 'Avoid', tag: 'New matter', body: 'A fourth independent reason the motion is right will be struck, and costs strategy marks. Framing it as an answer to an attack is the legitimate route.' },
            { title: 'Avoid', tag: 'Even time', body: 'The issue that decides the round deserves half the speech. Giving every point ninety seconds says you do not know which one matters.' },
          ],
        },
        { t: 'debate-lab', viz: 'flow' },
      ],
    },
    {
      id: 'reply',
      title: 'Reply, summary and final focus',
      blocks: [
        { t: 'p', text: 'The last speech in every format is a comparison, and the only speech whose content is decided entirely by what happened in the round. The classic description is a **biased adjudication**: the speech a judge would give if they had already decided for you.' },
        {
          t: 'example',
          title: 'A final-focus skeleton that works in any format',
          lines: [
            { label: '1', text: '"There are two questions in this debate: whether the policy works, and who bears its cost."' },
            { label: '2', text: '"On the first, their case rests on X, which was never supported after our second speaker showed Y."' },
            { label: '3', text: '"Even if you give them the first, the second decides it: our harm is larger in scope and cannot be undone, theirs is reversible."' },
            { label: '4', text: '"So even on their own framing, you vote for us."' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'No new matter, strictly', text: 'In PF, policy and LD a new argument in the final rebuttal is usually struck outright. In parliamentary formats the same rule holds for replies and whips. Weighing existing material is never new matter, which is why weighing is the one thing the last speech can always safely do.' },
      ],
    },
    {
      id: 'byformat',
      title: 'Roles by format',
      blocks: [
        { t: 'debate-lab', viz: 'formats' },
        { t: 'p', text: 'Switch the tool above to "One format" and read the role column: it is the same four jobs — frame, engage, group, decide — redistributed across a different number of speeches. In BP they are spread across four teams, which is why the extension exists; in PF two speakers do all four in under thirteen minutes each.' },
      ],
    },
  ],
  sources: [
    'World Schools Debating Championships Rules and Judging Guide, on strategy and role fulfilment.',
    'World Universities Debating Championship Debating and Judging Manual, on whip speeches and extensions.',
    'National Speech and Debate Association, Competition Events Guide, on summary and final focus.',
  ],
  related: ['debate/structure/rebuttal-and-clash', 'debate/structure/signposting-and-structure-of-a-speech', 'debate/formats/british-parliamentary'],
}

export default guide
