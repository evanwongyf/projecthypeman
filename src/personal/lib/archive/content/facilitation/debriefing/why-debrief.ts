import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A debrief is a structured conversation after an experience that helps people work out what happened, why, and what to do next time. It is one of the best-evidenced practices in team learning: militaries, hospitals, airlines and sports teams all debrief, and the research shows why.',
  nutshell: [
    'Tannenbaum and Cerasoli’s 2013 meta-analysis of 46 samples found well-run debriefs improved performance by about **25%** (an effect size of d ≈ 0.67).',
    'The benefit was similar for individuals and teams, and in real and simulated settings.',
    'Debriefs work best when they are **facilitated**, **structured**, focus on **learning rather than blame**, and lead to **specific changes**.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'The evidence',
      blocks: [
        { t: 'p', text: 'Across the 46 samples, debriefs improved performance by about two-thirds of a standard deviation. The authors also found that debriefs worked better when they were **facilitated** and **structured** (aligned with explicit objectives) than when they were unfacilitated chats. The formula below shows what an effect size of that size means.' },
        {
          t: 'math',
          tex: String.raw`d = \frac{\bar x_{\text{debrief}} - \bar x_{\text{control}}}{s_{\text{pooled}}}`,
          caption: 'Cohen’s d: the difference between two group averages measured in standard deviations.',
          plain: 'To compare studies that used different scoring scales, researchers turn each difference into “how many standard deviations apart are the two groups?” A d of 0.67 means the average debriefed team scored two-thirds of a standard deviation above the average team that did not debrief.',
          where: [
            { sym: String.raw`\bar x_{\text{debrief}}`, def: 'average score of the group that debriefed' },
            { sym: String.raw`\bar x_{\text{control}}`, def: 'average score of the group that did not' },
            { sym: String.raw`s_{\text{pooled}}`, def: 'the typical spread of scores (standard deviation) in both groups combined' },
          ],
          syntax: [
            { sym: String.raw`\bar x`, say: '“x bar”: the average (mean)' },
            { sym: 'd', say: 'the effect size, in standard deviation units' },
          ],
          worked: {
            title: 'What d = 0.67 means in practice',
            steps: [
              'Suppose control teams average 60 points on a task, with a standard deviation of 15.',
              String.raw`Debriefed teams are \(0.67\) SD higher: \(0.67 \times 15 \approx 10\) points.`,
              'So debriefed teams average about 70.',
              'In a normal distribution, a score 0.67 SD above the mean beats about 75% of the control group.',
            ],
            why: [
              'pick a concrete scale to translate the effect into',
              'd times the SD gives the difference in points',
              'add the difference to the control average',
              'the normal table gives the share of scores below z = 0.67',
            ],
            answer: 'The average debriefed team outscores about three-quarters of teams that did not debrief, roughly a 25% performance improvement.',
          },
        },
      ],
    },
    {
      id: 'purposes',
      title: 'What a debrief is for',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Make sense', body: 'Build a shared account of what happened, since everyone saw a different part.' },
          { title: 'Learn', body: 'Find the causes of success and failure, and the general lessons.' },
          { title: 'Process emotion', body: 'Let fear, frustration or pride be named so it does not leak out later.' },
          { title: 'Plan', body: 'Agree specific changes and who will make them.' },
        ] },
        { t: 'callout', tone: 'note', title: 'After-action review', text: 'The US Army’s after-action review asks four questions: What was supposed to happen? What actually happened? Why was there a difference? What will we sustain or improve? Its rule is “no rank in the room”: the private’s view of the event counts as much as the general’s.' },
      ],
    },
    {
      id: 'shape',
      title: 'The shape of a good debrief',
      blocks: [
        { t: 'steps', items: [
          { title: 'Set up', body: 'Circle up, make sure everyone can see and hear, restate the purpose (“learning, not blame”).' },
          { title: 'Reactions', body: 'Let feelings out first: a quick round of one word or a thumb rating.' },
          { title: 'Description', body: 'Build the shared story: what happened, in order.' },
          { title: 'Analysis', body: 'What helped, what hindered, why? Link to the learning focus.' },
          { title: 'Application', body: 'What will we keep, change or try? Make it specific.' },
          { title: 'Summary', body: 'The facilitator or a participant summarises two or three key take-aways.' },
        ] },
      ],
    },
  ],
  sources: [
    'Tannenbaum, S. I., & Cerasoli, C. P. (2013). Do team and individual debriefs enhance performance? A meta-analysis. Human Factors, 55(1), 231–245.',
    'Darling, M., Parry, C., & Moore, J. (2005). Learning in the thick of it. Harvard Business Review, 83(7), 84–92.',
  ],
  related: ['facilitation/debriefing/debrief-models', 'facilitation/debriefing/debrief-techniques', 'facilitation/growth/measuring-growth'],
}

export default guide
