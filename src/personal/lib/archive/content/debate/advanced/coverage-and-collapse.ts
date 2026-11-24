import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every rebuttal speech is one division problem: seconds available, divided by seconds per answer, multiplied by how many arguments each answer disposes of. Most debaters try to fix the first term by speaking faster. The arithmetic says the third term — grouping — is where the leverage is, and this page does the sums for four real speeches.',
  nutshell: [
    'Coverage = (rebuttal seconds ÷ seconds per answer) × arguments per answer, capped at the number on the flow.',
    'Speaking faster buys **words per answer**, not more answers. It raises depth, not coverage.',
    '**Grouping** multiplies coverage directly and costs nothing but preparation.',
    'Under about 60 words, an "answer" is an acknowledgement; judges mark it as one.',
    'When coverage cannot reach 100%, **collapse deliberately** and say which arguments you are conceding and why they do not matter.',
    'A dropped argument you named is cheap; one you ran out of time for is expensive.',
  ],
  sections: [
    {
      id: 'arithmetic',
      title: 'The arithmetic',
      blocks: [
        {
          t: 'math',
          tex: 'C = \\min\\!\\left(\\frac{T \\cdot s}{d} \\cdot g,\; N\\right)',
          plain: 'What you can cover is the time you spend on rebuttal, divided by how long each answer takes, times how many of their arguments each answer kills — and you cannot cover more than they made.',
          where: [
            { sym: 'T', def: 'speech length in seconds' },
            { sym: 's', def: 'the share of the speech spent on rebuttal' },
            { sym: 'd', def: 'seconds per answer (depth)' },
            { sym: 'g', def: 'arguments disposed of per answer (grouping)' },
            { sym: 'N', def: 'arguments on the flow' },
          ],
          worked: {
            title: 'A BP whip speech',
            steps: [
              '\\(T = 420\\) s, \\(s = 0.85\\), so 357 seconds of rebuttal.',
              'Answering individually at \\(d = 35\\), \\(g = 1\\): \\(357/35 = 10\\) answers.',
              'Sixteen arguments on the flow: coverage \\(10/16 = 63\\%\\).',
              'Now group three at a time: \\(10 \\times 3 = 30\\), capped at 16.',
            ],
            why: ['most of a whip is rebuttal and summary', 'ten answers, each a line long', 'six arguments left untouched', 'full coverage, with time left for weighing'],
            answer: 'Grouping takes the same speech from 63% coverage to 100% with roughly two minutes spare. No speed increase was required.',
          },
        },
        { t: 'debate-lab', viz: 'coverage' },
        { t: 'p', text: 'Move the seconds-per-answer slider and watch the curve. It is a hyperbola: the first few seconds of extra depth are cheap in coverage, and past about 45 seconds per answer you are paying for depth with whole arguments. The useful region, for most speeches, is 25 to 40 seconds with grouping of two or three.' },
      ],
    },
    {
      id: 'speed',
      title: 'What speed actually buys',
      blocks: [
        { t: 'p', text: 'This is the most commonly misunderstood trade in competitive debate, and it is settled by looking at the units. Words per minute multiplies words, and words are what fill an answer. The number of answers is set by seconds, which speed does not change.' },
        {
          t: 'table',
          head: ['Rate', 'Words in a 35-second answer', 'What that is enough for'],
          rows: [
            ['140 wpm', '82', 'Claim, one reason, one consequence. Followable by any judge.'],
            ['170 wpm', '99', 'Claim, reason, example, and a comparative clause.'],
            ['220 wpm', '128', 'The same with a second reason — if the judge can still transcribe it.'],
            ['300 wpm', '175', 'Policy-circuit density. Only in front of a judge who flows at that speed.'],
          ],
          caption: 'Same number of answers in every row. Speed changed the depth of each, not how many you got through.',
        },
        { t: 'callout', tone: 'warn', title: 'And speed has a ceiling that grouping does not', text: 'Comprehension falls off above roughly 150 to 180 words a minute for a listener who is writing, which is why [delivery and style](@debate/techniques/delivery-and-style) puts the working range there. Grouping has no such ceiling: three arguments answered by one shared assumption is just as followable as one, and often more so.' },
      ],
    },
    {
      id: 'grouping',
      title: 'How to raise the grouping multiplier',
      blocks: [
        { t: 'p', text: 'Grouping is not a rhetorical trick; it is a claim that several of their arguments share a dependency. The claim has to be true, and when it is, one answer legitimately kills all of them. [Argument mapping](@debate/advanced/argument-mapping) is the tool for finding the shared node.' },
        {
          t: 'steps',
          items: [
            { title: 'List their arguments in your margin', body: 'Taglines only. Six to twenty lines.' },
            { title: 'Ask what each one assumes', body: 'One word per line: enforcement, substitution, elasticity, consent, timeline.' },
            { title: 'Find the repeated word', body: 'Almost always there are two or three clusters. These are your clashes.' },
            { title: 'Answer the assumption, then name the casualties', body: '"That answers their first, third and fifth arguments, all of which assume an enforcement capacity they never defended."' },
            { title: 'Say the count out loud', body: 'Judges credit grouping when they notice it. "Three arguments, one answer" is worth saying.' },
          ],
        },
        {
          t: 'example',
          title: 'A grouping that doubles coverage',
          lines: [
            { label: 'Their flow', text: '1. Black market. 2. Enforcement costs. 3. Police discretion abused. 4. Rural areas can\u2019t comply. 5. Small traders ruined. 6. Scheme gamed by large firms.' },
            { label: 'Shared assumption', text: 'All six assume immediate, uniform, nationwide implementation.' },
            { label: 'One answer', text: '"Every one of those six is an argument against a flat national rollout on day one. Our model phases by city with a permit register, which is how the cities already doing this handle precisely these six problems — and they never engaged with the phasing, which was in our first speech."' },
            { label: 'Cost', text: 'Forty seconds for six arguments: a grouping multiplier of six, against the fifteen seconds each they would otherwise have had.' },
          ],
        },
      ],
    },
    {
      id: 'collapse',
      title: 'When coverage cannot reach 100%',
      blocks: [
        { t: 'p', text: 'Sometimes the arithmetic simply does not close — the PF final focus at two minutes, the 1AR at five against thirteen. Then the decision is not how to cover everything but what to concede, and the difference between a conceded argument and a dropped one is whether you said the word.' },
        {
          t: 'table',
          head: ['Move', 'What the judge records', 'Cost'],
          rows: [
            ['Answered', 'Contested; decided on the analysis.', 'Time.'],
            ['Grouped', 'Contested, efficiently.', 'Less time; requires a true shared assumption.'],
            ['Conceded explicitly, with a reason', '"They gave it up and said why it does not matter."', 'Low — often zero if the weighing holds.'],
            ['Dropped silently', '"Unanswered. It stands."', 'The issue, and in flow formats sometimes the round.'],
            ['Half-answered', '"Gestured at. I gave it partial weight."', 'Worse per second than either alternative.'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Rank their arguments by what they win if conceded. Only the top two or three are must-answers.',
            'Concede the rest in one sentence, as a set: "we are not contesting their points on cost, because even at their figures …".',
            'Protect thirty seconds for weighing. It is the highest-value half minute in any closing speech.',
            'Never spend your last minute on an argument that cannot change the result.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The explicit-concession sentence', text: '"We will give them X entirely. Here is why the round still goes to us." Said once, early in the final speech, it buys you two minutes and makes the rest of the speech sound like a decision rather than a scramble. The strategy behind choosing what to drop is in [strategy and time](@debate/winning/strategy-and-time).' },
      ],
    },
    {
      id: 'byspeech',
      title: 'Four speeches, worked',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Policy 1AR', tag: '5 min v 13', body: 'Twenty-plus arguments, 300 seconds, perhaps 250 of them usable. Individually that is 12 seconds each. Only grouping makes the speech possible: answer the block\u2019s positions by their shared link, and collapse the rest explicitly.' },
            { title: 'BP whip', tag: '7 min', body: 'Sixteen arguments, three clashes. Coverage is not the problem; prioritisation is. Spend half the speech on the clash that decides it and say that is what you are doing.' },
            { title: 'PF final focus', tag: '2 min', body: 'Eight arguments, 120 seconds. Mathematically you can win two. Name them, weigh them, concede the rest in one sentence.' },
            { title: 'WSDC second', tag: '8 min', body: 'Ten arguments but only about 40% of the speech is rebuttal. That is 190 seconds: five grouped answers, then rebuild and your own material.' },
          ],
        },
        { t: 'p', text: 'Run each of these in the lab above with the preset and your own numbers. The habit worth building is doing this division in prep, before the round, so that when the flow has sixteen lines on it you already know how many of them you can afford.' },
      ],
    },
  ],
  related: ['debate/winning/strategy-and-time', 'debate/structure/rebuttal-and-clash', 'debate/advanced/argument-mapping', 'debate/formats/american-formats'],
}

export default guide
