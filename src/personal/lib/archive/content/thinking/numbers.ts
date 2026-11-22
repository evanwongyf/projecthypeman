import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Numbers sound objective, but the same data can be presented to tell very different stories. A handful of ideas lets you see through most misleading statistics: averages, percentages, risk, correlation and the shape of a graph.',
  nutshell: [
    '**Mean or median?** One billionaire makes the mean income of a room huge; the median barely moves.',
    '**Relative vs absolute risk**: "doubles your risk" may mean from 1 in 10,000 to 2 in 10,000.',
    '**Correlation is not causation**: two things rising together may share a cause, or be coincidence.',
    'Check **sample size**, **who was measured**, and the **axes** on graphs.',
  ],
  sections: [
    {
      id: 'averages',
      title: 'Averages',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Mean', def: 'Add everything up and divide by how many. Pulled strongly by extreme values.' },
            { term: 'Median', def: 'The middle value when sorted. Not affected by a few extremes. Better for incomes and house prices.' },
            { term: 'Mode', def: 'The most common value.' },
          ],
        },
        {
          t: 'example',
          title: 'Five salaries: £20k, £22k, £25k, £28k, £400k',
          lines: [
            { label: 'Mean', text: '£99k. "The average worker earns nearly £100k!"' },
            { label: 'Median', text: '£25k. A far better picture of a typical worker.' },
          ],
        },
      ],
    },
    {
      id: 'percentages',
      title: 'Percentages and risk',
      blocks: [
        {
          t: 'table',
          head: ['Trap', 'Example', 'What to ask'],
          rows: [
            ['Relative risk without absolute risk', '"Eating X raises your risk of a disease by 50%." Risk goes from 2 in 1,000 to 3 in 1,000.', 'From what to what? How many people per 1,000?'],
            ['Percent vs percentage points', 'Interest rising from 2% to 3% is a 1 percentage point rise, but a 50% increase.', 'Which is being reported?'],
            ['Percent of what?', '"Sales up 200%!" From 1 to 3 units.', 'What is the starting number?'],
            ['Missing base rate', '"Most drivers in accidents were sober." Most drivers are sober.', 'What proportion of all drivers are sober?'],
          ],
        },
      ],
    },
    {
      id: 'correlation',
      title: 'Correlation and causation',
      blocks: [
        {
          t: 'p',
          text: 'When two things rise and fall together, there are several possible explanations, and "A causes B" is only one of them.',
        },
        {
          t: 'cards',
          items: [
            { title: 'A causes B', body: 'Smoking causes lung cancer (established by many kinds of evidence).' },
            { title: 'B causes A', body: 'Do tired people drink more coffee, or does coffee make people tired? Direction can run backwards.' },
            { title: 'A third factor causes both', body: 'Ice cream sales and drownings both rise in hot weather.' },
            { title: 'Coincidence', body: 'With enough data, some things correlate by chance. Websites collect absurd examples, like cheese consumption and deaths by bedsheet tangling.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Randomised experiments are the strongest way to show cause, because random assignment balances out third factors. See [using education research](@teaching/guides/growth/research).',
        },
      ],
    },
    {
      id: 'graphs',
      title: 'Misleading graphs',
      blocks: [
        {
          t: 'list',
          items: [
            '**Truncated y-axis**: starting the axis at 95 instead of 0 makes a small change look enormous.',
            '**Cherry-picked time range**: choosing start and end dates that show the trend you want.',
            '**Two y-axes**: can make any two lines look related.',
            '**3D or pictograms**: area and volume exaggerate differences.',
            '**Missing labels or units**: if you cannot tell what is measured, you cannot judge it.',
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Questions to ask of any statistic',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Who was measured, and how many? Are they representative?',
            'Compared with what?',
            'Is this an absolute number, a percentage, or a change in percentage?',
            'Is the average a mean or a median?',
            'Could a third factor explain it?',
            'Who produced it, and do they have an interest in the result?',
            'Does it seem too good (or bad) to be true?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Harford, T. (2020). *How to make the world add up*. The Bridge Street Press.',
    'Spiegelhalter, D. (2019). *The art of statistics: Learning from data*. Pelican.',
    'Huff, D. (1954). *How to lie with statistics*. W. W. Norton.',
  ],
  related: ['thinking/critical-thinking', 'research/evaluating-sources', 'teaching/guides/growth/research'],
}

export default guide
