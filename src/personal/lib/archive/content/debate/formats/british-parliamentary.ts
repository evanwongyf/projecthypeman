import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'British Parliamentary is the format of the world university circuit, and it is not two-team debate with more people. Four teams compete, two on each side, and the judge ranks them first to fourth. That single rule — you are competing with your own side as well as against the other — changes every strategic decision in the room.',
  nutshell: [
    'Four teams of two: **Opening Government**, **Opening Opposition**, **Closing Government**, **Closing Opposition**. Eight speeches of seven minutes.',
    'Teams are **ranked 1 to 4**, so beating the other side is not enough; you must beat the team sitting next to you.',
    'The closing half wins by **extension**: new material consistent with their opening but not already made.',
    '**Points of information** may be offered between the first and last minute; good speakers take one or two.',
    'The **whip speeches** summarise the debate as clashes. New matter is barred, and line-by-line rebuttal in a whip is a wasted speech.',
    '15 minutes prep, no internet, no pre-written cases: the format rewards structured thinking under pressure above research.',
  ],
  sections: [
    {
      id: 'room',
      title: 'The room',
      blocks: [
        { t: 'p', text: 'Government argues for the motion, Opposition against, and each side is split into an opening half and a closing half who prep separately and cannot speak to each other. The speeches alternate, so by the time the closing half speaks, four speeches of material already exist.' },
        { t: 'debate-lab', viz: 'formats' },
        {
          t: 'table',
          head: ['Speech', 'Speaker', 'Job in one line'],
          rows: [
            ['1', 'Prime Minister', 'Define the motion, set the framework, make the government case.'],
            ['2', 'Leader of Opposition', 'Engage the definition, rebut, make the opposition case.'],
            ['3', 'Deputy Prime Minister', 'Rebut the LO, rebuild, complete the opening government case.'],
            ['4', 'Deputy Leader of Opposition', 'Rebut, rebuild, complete the opening opposition case.'],
            ['5', 'Member for Government', 'Extension: new, consistent government material.'],
            ['6', 'Member for Opposition', 'Extension, plus the answer to speech 5.'],
            ['7', 'Government Whip', 'Summarise the debate as clashes; no new matter.'],
            ['8', 'Opposition Whip', 'The same, and the last word in the room.'],
          ],
          caption: 'Fifty-six minutes of speaking. The judge is tracking perhaps four issues across all of it.',
        },
      ],
    },
    {
      id: 'ranking',
      title: 'Why ranking changes everything',
      blocks: [
        { t: 'p', text: 'In a two-team debate your only opponent is across the room. In BP, the team you are most likely to lose to is on your own side, arguing for the same conclusion. A judge who thinks Government clearly won the debate still has to decide which government team contributed more.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Opening half', tag: 'Own the framing', body: 'You set the definition, the model and the terms of the debate. Your protection against the closing half is to occupy the obvious ground so completely that nothing important is left for them.' },
            { title: 'Closing half', tag: 'Own the depth', body: 'You cannot contradict your opening, so you win by finding the argument, stakeholder or mechanism they missed, and by being the team that finally compares the two sides properly.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Knifing',
          text: 'Contradicting your own opening half — arguing against their definition or their model — is **knifing**, and it is punished severely: you have conceded the debate to the other side while also betraying your own. If your opening made a bad case, your job is to make the best version of their case, not a better case of your own.',
        },
        {
          t: 'levels',
          caption: 'Roughly how adjudicators separate the four teams.',
          items: [
            { name: 'Fourth', body: 'Repeated their own side, or contributed nothing the debate needed. Often a closing half with no extension, or an opening that died after speech one.', verbs: ['repeats', 'asserts'] },
            { name: 'Third', body: 'Real but thin contribution: arguments that were made better elsewhere, or rebuttal without weighing.', verbs: ['engages', 'answers'] },
            { name: 'Second', body: 'Clear contribution and genuine engagement, losing on one decisive clash or on comparison.', verbs: ['develops', 'compares'] },
            { name: 'First', body: 'Owned the issue the debate turned on and told the judge why it was the issue. Usually the team that weighed.', verbs: ['frames', 'weighs', 'decides'] },
          ],
        },
      ],
    },
    {
      id: 'extension',
      title: 'The extension',
      lead: 'The one skill unique to BP, and the thing closing teams most often get wrong.',
      blocks: [
        { t: 'p', text: 'An extension is new material from the closing half of a side. It must be **consistent** with the opening (you are on the same side) and **new** (otherwise there is nothing to rank you above them for). The best extensions are not exotic; they are the obvious thing the opening half skipped.' },
        {
          t: 'checklist',
          items: [
            'A stakeholder nobody has spoken about: the regulator, the second-order market, the people outside the country.',
            'A mechanism: the opening said the policy helps, you explain the step that makes it work or fail.',
            'A different timeframe: the opening argued short run, you argue what happens in ten years.',
            'A principled argument where the opening ran only practical ones, or the reverse.',
            'A characterisation of the actor that changes what the policy means for them.',
            'A comparison the opening never made, developed into its own case.',
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"An extension must be a brand new argument"',
          text: 'It must be a new **contribution**, which is not the same thing. Taking the opening’s weakest-supported claim and proving it properly, with a mechanism and an impact the opening never supplied, is a perfectly good extension — and safer than inventing something the motion does not support.',
        },
        { t: 'p', text: 'How to build one in the three minutes before you speak: write the four arguments already in the debate in a column, then ask what each one assumes and who it ignores. The extension is almost always in that second list. Then develop it with the five parts from [argument anatomy](@debate/structure/argument-anatomy).' },
      ],
    },
    {
      id: 'whip',
      title: 'The whip speech',
      blocks: [
        { t: 'p', text: 'The whip is the hardest speech to do well and the easiest to do badly, because the badly version feels productive. A whip who rebuts speech by speech for seven minutes has given the judge a transcript. A whip who divides the debate into three named clashes and wins each one has given the judge a decision.' },
        {
          t: 'example',
          title: 'The two whip openings',
          lines: [
            { label: 'Weak', text: '"I will begin with the Member for Government’s first point, then their second point, then return to the Deputy Prime Minister …"' },
            { label: 'Strong', text: '"There are three questions in this debate: does the policy work, who bears the cost, and what it says about the state’s relationship with its citizens. We win all three, and even if you give them the first, the second decides the round."' },
            { label: 'Why', text: 'The second version hands the judge the structure of their own decision, with your side’s name on each line of it.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Name two to four clashes and label them in words the judge can write down.',
            'Within each clash, state both cases fairly, then say why yours wins.',
            'Spend real time on your own half’s material: the judge is ranking you, not just your side.',
            'Use the "even if" structure to make your win robust to one loss.',
          ],
          dont: [
            'Introduce new arguments. It is barred, and the judge will strike it.',
            'Give equal time to every point made in 49 minutes of speeches.',
            'Forget your own extension; whips who never mention it lose their team the rank.',
            'Rebut your own side.',
          ],
        },
      ],
    },
    {
      id: 'pois',
      title: 'Points of information in BP',
      blocks: [
        { t: 'p', text: 'Between the first and last minute of every speech, anyone on the opposing side may stand and offer a fifteen-second point. The speaker chooses whether to take it. Conventionally you take one or two per speech; refusing all of them reads as evasion, and taking four destroys your structure.' },
        { t: 'debate-lab', viz: 'timer' },
        { t: 'p', text: 'The timer above marks the protected minutes. The practical skill is knowing where you are in your own speech without looking: take a point in the middle of an argument you have finished, never in the middle of the one you are still building. Full technique in [points and cross-examination](@debate/techniques/points-and-cross-examination).' },
      ],
    },
    {
      id: 'prep',
      title: 'Fifteen minutes, no internet',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '0–2 min: the motion', body: 'What type is it, what is the actor, what is the comparison? Write the counterfactual world in one line.' },
            { title: '2–5 min: both sides', body: 'Their three best arguments before your own. This is counter-intuitive and it is what good teams do.' },
            { title: '5–10 min: your case', body: 'Two or three arguments with mechanisms. Opening halves also write the definition and model here.' },
            { title: '10–13 min: the split', body: 'Who takes what, and which rebuttal each of you owns.' },
            { title: '13–15 min: the weighing', body: 'One sentence: why, if the judge believes both sides, you still win. Write it down; it is your whip’s spine.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Closing halves', text: 'Prep as if you were opening — you may need to rebuild a case the opening botched — but reserve the last three minutes for a list of likely gaps. Your extension is chosen from the debate, not from prep, so what you prepare is the raw material, not the speech.' },
      ],
    },
  ],
  sources: [
    'World Universities Debating Championship Debating and Judging Manual (current edition).',
    'European Universities Debating Championship adjudication guides.',
    'Johnson, A. (2009) Jumpstart! A widely circulated BP training manual used across the university circuit.',
  ],
  related: ['debate/formats/asian-and-world-schools', 'debate/structure/speaker-roles', 'debate/systems/judging', 'debate/winning/strategy-and-time'],
}

export default guide
