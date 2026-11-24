import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some tactics are designed to win without arguing. They work on inexperienced opponents, they almost never work on experienced judges, and the answer to each is the same in shape: name it, neutralise it in one sentence, and return to the substance. This page is defensive. None of it is a recommendation.',
  nutshell: [
    'Name the move out loud, briefly, then move on. Judges punish the trick far more reliably than they punish you for noticing it.',
    'A **squirrel** is a definition that dodges the intended debate. Answer it, and also debate the real motion.',
    '**Burden shifting** is answered by restating who asserted what. Do not accept the shift by arguing against it.',
    'A **shifting case** — a position that changes when attacked — is beaten by quoting the first version.',
    '**Time theft**, interruption and intimidation are equity matters, not strategy. Use the process, not retaliation.',
    'Never retaliate in kind. A round in which both teams misbehave is ranked on the arguments neither made.',
  ],
  sections: [
    {
      id: 'definitional',
      title: 'Definitional games',
      blocks: [
        {
          t: 'table',
          head: ['Move', 'What it looks like', 'The answer'],
          rows: [
            ['Squirrel', 'A definition that technically fits the words but dodges the debate everyone prepared.', '"That is not a reasonable reading. Here is the debate the motion sets up, and we will win it either way." Then debate both, briefly.'],
            ['Truism', 'A definition under which proposition cannot lose.', 'Name it as a truism, say what it leaves them with — nothing worth proving — and run the real clash.'],
            ['Shifting definition', 'The model changes once attacked.', 'Quote the first version. "They defined it as X; they now need it to be Y."'],
            ['Infinite model', 'Every objection is answered by adding another feature to the policy.', '"Each addition is a new cost. Let us weigh the whole package they have now built."'],
            ['Denying the info slide', 'Arguing against the supplied facts.', 'The slide is binding on both sides. Say so once; judges enforce it.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Do not spend the round on it', text: 'Thirty seconds on the definitional objection, then debate the motion as everyone understood it. Teams that spend four minutes on definitions win the definitional argument and lose the debate, because the judge has nothing substantive from them to weigh.' },
      ],
    },
    {
      id: 'structural',
      title: 'Structural tricks',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Burden shifting', tag: 'Most common', body: '"They have not proved it will not happen." Answer: restate the rule — whoever asserts, proves — then answer the strongest version anyway. See [pragma-dialectics](@debate/schools/pragma-dialectics).' },
            { title: 'Moving the goalposts', tag: 'Mid-round', body: 'Their test for success changes once you meet it. Quote the first test, show it was met, and make the shift itself the issue.' },
            { title: 'New matter in the last speech', tag: 'Procedural', body: 'Note it: "that is new in the final speech and cannot be answered". Judges strike it if you point it out.' },
            { title: 'The straw man', tag: 'Universal', body: 'Restate your actual case in one line, then show their rebuttal does not touch it. Two sentences, not two minutes.' },
            { title: 'The gish gallop', tag: 'Volume', body: 'Twenty weak claims to exhaust your time. Group them: "all twenty assume X, and X is false".' },
            { title: 'Spreading at a novice', tag: 'Accessibility', body: 'Legitimate in policy against a prepared opponent; a problem when used to make a round unusable. Ask them to slow down, on the record, and tell the judge you did.' },
          ],
        },
      ],
    },
    {
      id: 'conduct',
      title: 'Conduct, which is not strategy',
      blocks: [
        { t: 'p', text: 'There is a category difference between a sharp tactic and conduct that makes the round unsafe or unusable. The first is answered in the speech; the second goes through the tournament’s equity process, and should.' },
        {
          t: 'checklist',
          items: [
            'Persistent interruption, or barracking during protected time.',
            'Points of information offered continuously to break a speaker’s rhythm.',
            'Personal remarks about an opponent rather than their argument.',
            'Arguments that deny the standing or dignity of people in the room.',
            'Deliberately running over time repeatedly.',
            'Misquoting evidence in a way that cannot be checked in the round.',
          ],
        },
        {
          t: 'dodont',
          do: [
            'Note it once, calmly, in your speech if it affected the debate.',
            'Raise it with the chief adjudicator afterwards, through the stated process, promptly.',
            'Keep debating. A composed response to bad behaviour is itself persuasive.',
          ],
          dont: [
            'Retaliate. Two teams behaving badly is ranked on the arguments, and you will have fewer.',
            'Spend your speech on it. The judge saw it happen.',
            'Confront the other team in the room afterwards; that is what the process is for.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Evidence fabrication', text: 'Inventing or materially misrepresenting a source is the one thing that is treated as cheating rather than tactics, in every format. It is also easy to detect and follows people around a circuit. If you cannot source it, argue the mechanism instead.' },
      ],
    },
    {
      id: 'why',
      title: 'Why the honest line is also the winning one',
      blocks: [
        { t: 'p', text: 'There is a strategic argument for playing it straight, independent of the ethical one. Every trick on this page spends **credibility**, and credibility is what makes your weighing believable in the last two minutes. A team the judge has caught misrepresenting an argument does not get the benefit of the doubt on the close clash — and the close clash is where rounds are decided.' },
        { t: 'p', text: 'The line worth holding is the pragma-dialectical one: pursuing victory is legitimate until it breaks a rule that makes resolution possible. Collapse to your best issue, pre-empt, concede strategically, frame hard — and do not misdescribe what anyone said. Everything in [winning tricks](@debate/winning/winning-tricks) stays on the right side of that line, which is why it keeps working.' },
        { t: 'debate-lab', viz: 'fallacy' },
      ],
    },
  ],
  sources: [
    'van Eemeren, F. H. and Grootendorst, R. (2004), on fallacies as rule violations in a critical discussion.',
    'World Universities Debating Championship equity policy and Debating and Judging Manual, on reasonable definitions and conduct.',
  ],
  related: ['debate/winning/winning-tricks', 'debate/systems/fallacies', 'debate/schools/pragma-dialectics', 'debate/structure/case-building'],
}

export default guide
