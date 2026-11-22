import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Scientific thinking is a set of habits for finding out what is true while guarding against fooling ourselves. It matters well beyond the lab: in judging health claims, news stories and our own beliefs.',
  nutshell: [
    'A good **hypothesis** makes a testable prediction that could turn out wrong.',
    '**Controls** and **fair tests** isolate the effect of one variable.',
    '**Replication**: one study is rarely enough; results must hold up when repeated.',
    'Science is **provisional**: it updates when better evidence arrives, which is a strength.',
  ],
  sections: [
    {
      id: 'hypotheses',
      title: 'Testable ideas',
      blocks: [
        {
          t: 'p',
          text: 'Karl Popper argued that what makes a claim scientific is that it could be **falsified**: there must be some possible observation that would show it wrong. "All swans are white" is testable (one black swan disproves it). "Everything happens for a reason" is not, because any event can be fitted to it.',
        },
        {
          t: 'table',
          head: ['Not testable', 'Testable'],
          rows: [
            ['Plants like music.', 'Tomato plants exposed to 2 hours of music a day grow taller over 6 weeks than identical plants kept in silence.'],
            ['This supplement boosts your energy.', 'People taking the supplement report less fatigue on a standard questionnaire than people taking an identical-looking placebo.'],
          ],
        },
      ],
    },
    {
      id: 'fair-tests',
      title: 'Fair tests',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Control group', body: 'A comparison group that does not get the treatment, so you can see what would have happened anyway.' },
            { title: 'Randomisation', body: 'Randomly assigning people to groups balances out other differences between them.' },
            { title: 'Blinding', body: 'If participants (and ideally researchers) do not know who got the treatment, expectations cannot bias the results. The placebo effect is real.' },
            { title: 'One variable at a time', body: 'Change only the thing you are testing; keep everything else the same.' },
            { title: 'Sample size', body: 'Small samples give noisy results; a surprising finding from 10 people may vanish with 1,000.' },
          ],
        },
      ],
    },
    {
      id: 'replication',
      title: 'Replication and consensus',
      blocks: [
        {
          t: 'p',
          text: 'In 2015, a large project attempted to repeat 100 published psychology studies and found that fewer than half produced clearly similar results (Open Science Collaboration, 2015). This does not mean science is broken; it shows science checking itself. It is a reminder to trust bodies of evidence and expert consensus more than single striking studies.',
        },
        {
          t: 'checklist',
          items: [
            'Is the claim testable?',
            'Was there a comparison or control group?',
            'Were people randomly assigned? Were they blinded?',
            'How many people or samples were involved?',
            'Has it been replicated by independent researchers?',
            'What do reviews of all the evidence conclude?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Popper, K. (1959). *The logic of scientific discovery*. Hutchinson.',
    'Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716.',
    'Goldacre, B. (2008). *Bad science*. Fourth Estate.',
  ],
  related: ['thinking/numbers', 'thinking/critical-thinking', 'teaching/guides/growth/research'],
}

export default guide
