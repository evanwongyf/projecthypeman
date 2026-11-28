import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every speech is a budget. You cannot say everything, so the only question is what to cut — and most debaters cut by accident, running out of time on the argument they most wanted to make. This page is the arithmetic of that choice, which turns out to be more decisive than any individual argument.',
  nutshell: [
    'Allocate minutes **before** you speak, and treat the allocation as binding.',
    'Depth beats coverage, except where the rules make silence a concession. Know which format you are in.',
    'An argument is worth time in proportion to **how much it is contested** and **how much it decides**.',
    '**Group** before you answer: three attacks sharing an assumption cost one answer, not three.',
    'Spend disproportionately on the clash you intend to win, and say that is what you are doing.',
    'The last speech is the one place where spending all your time on one issue is almost always correct.',
  ],
  sections: [
    {
      id: 'budget',
      title: 'The budget',
      blocks: [
        { t: 'p', text: 'Write the minute marks in your margin before standing up: "2:00 rebuttal done, 3:30 rebuild done, 6:30 own material done". Then check the clock at each mark. Speakers who do this finish; speakers who do not lose their last argument, every time.' },
        { t: 'debate-lab', viz: 'timer' },
        {
          t: 'table',
          head: ['Speech', 'Spend most on', 'Spend least on'],
          rows: [
            ['First', 'Two arguments, deeply, plus the model.', 'Context, definitions, and the third argument you do not need.'],
            ['Second', 'The clash you intend to own, and rebuilding what was attacked.', 'Points neither side has developed.'],
            ['Third / whip', 'The two clashes that decide it.', 'Anything the other side already dropped — note it and move on.'],
            ['Reply / final focus', 'One or two issues and the comparison.', 'Everything else, deliberately and audibly.'],
          ],
        },
      ],
    },
    {
      id: 'worth',
      title: 'What an argument is worth',
      blocks: [
        { t: 'p', text: 'Time should follow two multiplied factors: how contested the point is, and how much it would decide if you won it. An uncontested point needs fifteen seconds. A contested point that decides the round deserves three minutes. A contested point that decides nothing deserves none.' },
        {
          t: 'diagram',
          title: 'The time-allocation grid',
          nodes: [
            { id: 'a', label: 'Contested + decisive', sub: 'spend heavily', col: 0, row: 0, tone: 'orange' },
            { id: 'b', label: 'Uncontested + decisive', sub: 'name it, bank it, move', col: 2, row: 0, tone: 'mint' },
            { id: 'c', label: 'Contested + minor', sub: 'one sentence', col: 0, row: 1, tone: 'mustard' },
            { id: 'd', label: 'Uncontested + minor', sub: 'ignore', col: 2, row: 1, tone: 'ink' },
          ],
          edges: [],
          caption: 'The common error is spending in the bottom-left box because the clash feels urgent while you are in it.',
        },
        { t: 'callout', tone: 'tip', title: 'The uncontested-and-decisive box', text: 'This is free money and teams routinely leave it. If they dropped the issue that decides the round, say so in fifteen seconds — "they said nothing about X, which decides this debate" — and spend the rest of your time on the contested one. Do not re-argue what nobody is denying.' },
      ],
    },
    {
      id: 'grouping',
      title: 'Grouping to buy time',
      blocks: [
        { t: 'p', text: 'The single biggest time saving available in rebuttal: find the assumption shared by several of their attacks and answer the assumption.' },
        {
          t: 'example',
          title: 'Four attacks, one answer',
          lines: [
            { label: 'They said', text: 'Enforcement will fail; exemptions will be abused; the scheme will be gamed; small traders will lose out.' },
            { label: 'Shared assumption', text: 'All four assume the scheme is implemented all at once, with no monitoring.' },
            { label: 'One answer', text: '"Every one of those four points assumes a flat, immediate rollout. Our model is phased with a permit register, which is how the cities already running this handle exactly these four problems."' },
            { label: 'Saved', text: 'Roughly ninety seconds, now available for the clash that decides the round.' },
          ],
        },
      ],
    },
    {
      id: 'triage',
      title: 'Triage under real pressure',
      blocks: [
        { t: 'p', text: 'The 1AR in policy debate — five minutes against thirteen — is the extreme case, but every format produces a version of it. The procedure is the same.' },
        {
          t: 'steps',
          items: [
            { title: 'List what must be answered', body: 'Anything that wins them the round outright if dropped. Usually two or three things, not ten.' },
            { title: 'Group everything else', body: 'Families of arguments that share an assumption, answered together.' },
            { title: 'Decide what to concede', body: 'Explicitly and out loud: "we are not contesting their third argument; here is why it does not matter."' },
            { title: 'Spend the remainder on the decisive clash', body: 'And say that it is decisive.' },
            { title: 'Leave 30 seconds for weighing', body: 'Always. It is the highest-value half-minute in the speech.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Silent dropping is the expensive kind', text: 'An argument you concede deliberately, with a reason, costs you almost nothing. The same argument left unmentioned costs you the issue, and in flow-centred formats it may cost you the round. Conceding out loud is a strategy; running out of time is not.' },
      ],
    },
  ],
  related: ['debate/winning/winning-tricks', 'debate/structure/signposting-and-structure-of-a-speech', 'debate/formats/american-formats'],
}

export default guide
