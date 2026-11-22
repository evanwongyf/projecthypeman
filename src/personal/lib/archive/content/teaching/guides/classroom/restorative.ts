import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Restorative practice responds to wrongdoing by focusing on the harm done and how to repair it, rather than only on punishment. It uses structured conversations to help people understand the effects of their actions and make things right, and it can also be used proactively to build community.',
  nutshell: [
    'Core questions: **What happened? Who has been affected? What needs to happen to put it right?**',
    'A continuum from quick **affective statements** to formal **conferences**.',
    '**Circles** can build relationships before problems arise.',
    'Evidence is mixed: it can reduce exclusions and improve relationships, but effects on achievement are unclear. Implementation quality matters.',
  ],
  sections: [
    {
      id: 'questions',
      title: 'Restorative questions',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'For the person who caused harm', body: 'What happened? What were you thinking at the time? What have you thought about since? Who has been affected, and how? What do you need to do to make things right?' },
            { title: 'For the person harmed', body: 'What did you think when you realised what had happened? What impact has this had on you and others? What has been the hardest thing for you? What do you think needs to happen to make things right?' },
          ],
        },
        {
          t: 'p',
          text: 'These questions are adapted from those used by the International Institute for Restorative Practices. The goal is understanding and repair, not a forced apology.',
        },
      ],
    },
    {
      id: 'continuum',
      title: 'A continuum',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Affective statements', body: '"I felt frustrated when the lesson was interrupted, because others were trying to learn." Naming feelings and effects.' },
            { name: 'Affective questions', body: 'A quick private conversation using the restorative questions.' },
            { name: 'Small impromptu conference', body: 'A few minutes with those involved to talk it through and agree next steps.' },
            { name: 'Circle', body: 'A group discussion, often used for class issues or to build community, with everyone having a turn.' },
            { name: 'Formal conference', body: 'A planned meeting with the people involved and sometimes families, led by a trained facilitator, for serious incidents.' },
          ],
          caption: 'Most restorative work happens informally at the lower levels.',
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        {
          t: 'p',
          text: 'A randomised trial across Pittsburgh schools (Augustine et al., 2018) found that restorative practices reduced suspensions and improved teachers’ views of school climate, but academic outcomes for middle school students did not improve and may have slightly worsened. Other trials have found mixed results. Restorative practice works best as part of a clear, consistent behaviour system, not as a replacement for boundaries and consequences.',
        },
        {
          t: 'dodont',
          do: [
            'Use it alongside clear expectations and consequences.',
            'Wait until everyone is calm (see [SEMH](@teaching/special-education/needs/semh)).',
            'Train staff and give conversations enough time.',
            'Use circles proactively to build relationships.',
          ],
          dont: [
            'Force the person harmed to meet the person who harmed them.',
            'Treat it as a way to avoid any consequence.',
            'Rush a script without genuine listening.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Wachtel, T. (2016). *Defining restorative*. International Institute for Restorative Practices.',
    'Augustine, C. H., et al. (2018). *Can restorative practices improve school climate and curb suspensions? An evaluation of the impact of restorative practices in a mid-sized urban school district*. RAND Corporation.',
  ],
  related: ['teaching/guides/classroom/management', 'teaching/special-education/strategies/behaviour-support', 'teaching/guides/classroom/relationships'],
}

export default guide
