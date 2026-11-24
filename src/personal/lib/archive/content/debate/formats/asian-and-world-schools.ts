import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Asian Parliamentary, Australs and World Schools are the three-speaker, two-team formats that most school and Asian university circuits run. They share a shape — two teams, three speakers each, a third speaker who may not add new arguments, and a short reply speech — and they differ in what they mark you on. World Schools, almost uniquely, puts a published number on style.',
  nutshell: [
    'Two teams of three. Substantives are **7 minutes** (AP, Australs) or **8 minutes** (WSDC); the reply is **4**.',
    'The **third speaker** rebuts the whole debate and may not introduce new arguments. Breaking that rule gets the material struck.',
    'The **reply speech** is a biased adjudication: two or three issues, and why your side won them. No new matter.',
    'WSDC marks **content, style and strategy**, conventionally 40 / 40 / 20, so delivery is scored rather than assumed.',
    'Policy motions in WSDC are expected to come with a **model**: who acts, how, when, with what enforcement and funding.',
    'Half of WSDC motions are **prepared** and researched for weeks; the impromptu half gets one hour with no internet.',
  ],
  sections: [
    {
      id: 'shape',
      title: 'The shape of the round',
      blocks: [
        { t: 'p', text: 'Both formats alternate sides through six substantive speeches, then close with replies. Nothing about the order is arbitrary: the third speaker exists so that the debate is narrowed to clashes before the reply, and the reply exists so the judge hears a summary rather than a seventh case.' },
        { t: 'debate-lab', viz: 'formats' },
        {
          t: 'table',
          head: ['Speech', 'Mainly', 'Also', 'Barred'],
          rows: [
            ['First', 'Definition, framing, the first arguments', 'A model, on policy motions', '—'],
            ['Second', 'Rebuttal, rebuilding, the rest of the case', 'The bulk of the engagement', '—'],
            ['Third', 'Whole-of-debate rebuttal, grouped as issues', 'Defending your own case', 'New arguments'],
            ['Reply', 'The two or three issues and who won them', 'Comparative weighing', 'New matter of any kind'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Who gives the reply', text: 'In WSDC and Australs the reply is given by the **first or second** speaker, never the third. The opposition reply is delivered first, so proposition has the final word. In some AP rules the order is reversed. Check the rules before the round; it changes what your reply has to pre-empt.' },
      ],
    },
    {
      id: 'model',
      title: 'The model',
      lead: 'The single most common reason school teams lose policy debates.',
      blocks: [
        { t: 'p', text: 'A motion like "This House would make voting compulsory" is not a policy until someone says whose voting, enforced how, with what penalty, from when, with what exemptions. That specification is the **model**, and it is the proposition’s job. Without it, every argument you make is about a different policy from the one your opponents attack, and the judge cannot tell who is right because nobody has said what "it" is.' },
        {
          t: 'checklist',
          items: [
            'Actor: who implements it — a state, a group of states, a regulator, a school?',
            'Mechanism: the actual steps, in order.',
            'Funding: where the money comes from, if it costs money.',
            'Enforcement: what happens when someone does not comply.',
            'Timeline: immediately, phased, or on a trigger?',
            'Exemptions: the hard cases you have already thought about.',
          ],
        },
        { t: 'p', text: 'Opposition has a choice: defend the **status quo**, or run a **counter-model** — a different policy that solves the same problem. A counter-model takes on a burden (you now have to defend a mechanism too) in exchange for the ability to concede the harm entirely. Decide in prep, never mid-round.' },
        { t: 'callout', tone: 'warn', title: 'Model abuse', text: 'A model that smuggles the whole debate into itself — "we would ban cars, and also fund free buses, and also build light rail" — invites the charge that you are not defending the motion. The test is whether your model is a reasonable reading of the motion, not whether it makes your case easy.' },
      ],
    },
    {
      id: 'third',
      title: 'The third speaker',
      blocks: [
        { t: 'p', text: 'Third speakers lose rounds in two ways: by making new arguments (struck, and a strategy penalty), or by rebutting line by line for eight minutes so that the judge hears a list instead of a decision. The fix is grouping: take 49 minutes of material and reduce it to three named issues.' },
        {
          t: 'example',
          title: 'Grouping in practice',
          lines: [
            { label: 'The debate had', text: 'seven arguments and about twenty pieces of rebuttal.' },
            { label: 'Third speaker says', text: '"This debate comes down to three questions: will the policy change behaviour, who pays for it, and is the state entitled to do it at all."' },
            { label: 'Then, per issue', text: 'their best version, your answer, your own material on that issue, and one sentence of comparison.' },
            { label: 'Result', text: 'The judge’s notes now have three headings instead of twenty lines — and your side’s name under each heading.' },
          ],
        },
        { t: 'p', text: 'Is defending your own case "new matter"? Rebuilding is allowed; **new arguments** are not. A new example or a new piece of analysis that answers an attack is rebuilding. A fourth independent reason the motion is right is new matter. If in doubt, frame it explicitly as an answer to their attack and the judge will take it as such.' },
      ],
    },
    {
      id: 'reply',
      title: 'The reply speech',
      blocks: [
        { t: 'p', text: 'The conventional description is a **biased adjudication**: give the speech a judge would give if they had decided for you. Four minutes, two or three issues, no new matter, no line-by-line.' },
        {
          t: 'steps',
          items: [
            { title: 'Name the issues', body: 'Two or three, in the words you want the judge to use. This is the whole speech’s structure.' },
            { title: 'For each, state the clash fairly', body: 'A reply that misrepresents their case loses credibility exactly when it matters most.' },
            { title: 'Say who won it and why', body: 'Not "we proved X" but "on this issue, their case rested on Y, which was never supported, while ours …".' },
            { title: 'Weigh across the issues', body: 'If you lose one, say why the others still decide the round. This is the even-if structure; see [winning tricks](@debate/winning/winning-tricks).' },
            { title: 'Close on the comparison', body: 'One sentence the judge could copy onto the ballot.' },
          ],
        },
        { t: 'debate-lab', viz: 'weighing' },
      ],
    },
    {
      id: 'style',
      title: 'Style, because it is marked',
      blocks: [
        { t: 'p', text: 'WSDC marks style at the same weight as content. This is not a quirk; it is a claim about what debating is for. A speech nobody can follow has not persuaded anyone, and the format refuses to pretend otherwise.' },
        {
          t: 'table',
          head: ['Dimension', 'Weight', 'What is being marked'],
          rows: [
            ['Content', '40', 'The arguments, their support, and the rebuttal.'],
            ['Style', '40', 'Delivery: clarity, pace, emphasis, eye contact, use of notes, presence.'],
            ['Strategy', '20', 'Structure, role fulfilment, time allocation, prioritisation of issues.'],
          ],
          caption: 'The conventional WSDC weighting. Scores cluster tightly around the mid-point of each scale, so small differences matter.',
        },
        { t: 'p', text: 'The practical consequence: speaking fast enough to fit in a fourth argument is a bad trade, because you lose style marks to gain content marks and the content marks were going to be contested anyway. Delivery technique is in [delivery and style](@debate/techniques/delivery-and-style).' },
      ],
    },
    {
      id: 'differences',
      title: 'AP, Australs and WSDC: what actually differs',
      blocks: [
        {
          t: 'table',
          head: ['', 'Asian Parliamentary', 'Australs', 'World Schools'],
          rows: [
            ['Speech length', '7 min', '8 min', '8 min'],
            ['Reply', '4 min, government first by convention', '4 min, opposition first', '4 min, opposition first'],
            ['Prep', '30 min typical', '30 min typical', '1 hour impromptu, or weeks for prepared'],
            ['Marking', 'Matter, manner, method', 'Matter, manner, method', 'Content, style, strategy (40/40/20)'],
            ['Model expected', 'Often', 'Often', 'Yes, on policy motions'],
            ['POIs', 'Yes', 'Yes', 'Yes'],
          ],
          caption: 'Treat this as orientation, not as a rulebook: national circuits vary, and the tournament invitation governs.',
        },
        { t: 'callout', tone: 'tip', title: 'Coming from BP', text: 'Three things break: you now have eight minutes to fill with depth rather than seven to fill with contribution; there is no extension to hunt for, so originality is worth less than thoroughness; and in WSDC the judge may be a schoolteacher rather than a circuit adjudicator. Slow down by about a fifth.' },
      ],
    },
  ],
  sources: [
    'World Schools Debating Championships Rules and Judging Guide (current edition).',
    'Australasian Intervarsity Debating Association rules and adjudication guide.',
    'Quinn, S. (2005) Debating, and the accompanying Debating in the World Schools Style manual (IDEA, 2009).',
  ],
  related: ['debate/formats/british-parliamentary', 'debate/structure/case-building', 'debate/structure/speaker-roles', 'debate/techniques/delivery-and-style'],
}

export default guide
