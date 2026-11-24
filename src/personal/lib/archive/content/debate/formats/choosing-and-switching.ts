import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most debaters change format at least once: school to university, parliamentary to American, competitive to public. The transition is rarely about new knowledge. It is about unlearning habits that were rewarded in the old format and are penalised in the new one.',
  nutshell: [
    'What transfers everywhere: **weighing**, **framing**, structure, and the discipline of answering the strongest version of an argument.',
    'What is format-specific: **coverage** rules, speed, how much evidence is expected, and what the last speech may contain.',
    'Switching costs about two tournaments of adjustment, and most of it is **time allocation**, not content.',
    'The fastest way in is to judge or watch three rounds before you speak in one.',
  ],
  sections: [
    {
      id: 'diagnose',
      title: 'Diagnose the new format with five questions',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Who decides, and how?', body: 'One judge or a panel; a winner or a ranking; flow-centred or persuasion-centred. This determines everything else.' },
            { title: 'Is silence a concession?', body: 'In American formats, yes, strictly. In parliamentary formats, a weak argument may be left alone at little cost.' },
            { title: 'Who may interrupt, and when?', body: 'Points of information, cross-examination, crossfire, or nothing at all.' },
            { title: 'What may the last speech contain?', body: 'No format allows new arguments at the end. They differ on what counts as new.' },
            { title: 'How much evidence is expected?', body: 'A season-long topic implies files; fifteen minutes of prep implies analysis. Mismatching this is the clearest novice tell.' },
          ],
        },
        { t: 'debate-lab', viz: 'formats' },
      ],
    },
    {
      id: 'habits',
      title: 'The habits that break',
      blocks: [
        {
          t: 'table',
          head: ['Coming from', 'Going to', 'The habit to drop'],
          rows: [
            ['BP', 'WSDC / AP', 'Hunting for an original contribution. Thoroughness now beats novelty, and there is no extension to find.'],
            ['BP', 'Policy / PF', 'Ignoring bad arguments. On the flow they must be answered.'],
            ['WSDC', 'BP', 'Even pacing across eight minutes. Seven minutes with four teams means ruthless prioritisation.'],
            ['Policy', 'Any parliamentary format', 'Speed and jargon. Both are penalised, and judges will say so.'],
            ['LD', 'Policy / BP', 'Framework-first speeches. You still need the practical clash.'],
            ['PF', 'BP / WSDC', 'Two-contention cases. Seven or eight minutes need real depth per argument.'],
            ['Competitive', 'Public / audience', 'Refusing to concede. An audience reads it as evasion.'],
          ],
        },
      ],
    },
    {
      id: 'week',
      title: 'Retooling in a week',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Read the rulebook and the judging guide, not a summary of them. Twenty minutes.',
            'Watch two recorded finals at normal speed and flow them as if judging.',
            'Write out the speech you will give, by minute, with time targets for each section.',
            'Do one drill per day from [drills](@debate/practice/drills), chosen for the new format’s pressure point.',
            'Find one person who debates it and ask what novices from your old format get wrong. The answer is usually consistent.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Judge first if you can', text: 'Three rounds in the back of the room with a flow in front of you teaches more about a format than any amount of reading, because you see what the decision actually turns on rather than what the rules say it should.' },
      ],
    },
  ],
  related: ['debate/formats/british-parliamentary', 'debate/formats/american-formats', 'debate/practice/drills'],
}

export default guide
