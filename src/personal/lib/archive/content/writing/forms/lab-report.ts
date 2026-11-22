import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A lab report tells the story of an experiment so clearly that someone else could repeat it and judge your conclusions. It follows a fixed structure, the same one used in scientific papers.',
  nutshell: [
    'Structure: **title, aim or hypothesis, method, results, discussion, conclusion** (plus an abstract and references for longer reports).',
    'Method: detailed enough for someone else to repeat.',
    'Results: present data clearly (tables, graphs) without interpreting it.',
    'Discussion: explain what the results mean, compare with your hypothesis and theory, and evaluate errors.',
  ],
  sections: [
    {
      id: 'sections',
      title: 'The sections',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Title', def: 'Specific: *The effect of temperature on the rate of catalase activity*, not *Enzyme experiment*.' },
            { term: 'Introduction / aim', def: 'Background theory, the aim and a testable **hypothesis**: *As temperature increases to 40°C, the rate of reaction will increase.*' },
            { term: 'Method', def: 'Equipment, variables (independent, dependent, controlled), and step-by-step procedure in past tense. Include safety precautions.' },
            { term: 'Results', def: 'Tables with units in headings, repeats and means. Graphs with labelled axes, units and a title. Describe trends briefly without explaining them.' },
            { term: 'Discussion', def: 'Explain the results using theory. Was the hypothesis supported? Identify anomalies, sources of error and how reliable and valid the data are. Suggest improvements.' },
            { term: 'Conclusion', def: 'A short answer to the aim, backed by the key data.' },
            { term: 'References', def: 'Sources of theory or methods, in the required [style](@research/references).' },
          ],
        },
      ],
    },
    {
      id: 'variables',
      title: 'Variables',
      blocks: [
        {
          t: 'table',
          head: ['Variable', 'Definition', 'Example (catalase and temperature)'],
          rows: [
            ['Independent', 'What you change', 'Temperature (20, 30, 40, 50, 60°C)'],
            ['Dependent', 'What you measure', 'Volume of oxygen produced in 60 seconds'],
            ['Controlled', 'What you keep the same', 'Volume and concentration of hydrogen peroxide; mass of potato; pH'],
          ],
        },
      ],
    },
    {
      id: 'discussion',
      title: 'Writing a strong discussion',
      blocks: [
        {
          t: 'checklist',
          items: [
            'I state whether the results support the hypothesis, with specific data.',
            'I explain the trend using scientific theory.',
            'I identify anomalous results and suggest why they happened.',
            'I distinguish random errors (scatter) from systematic errors (consistent bias).',
            'I comment on reliability (repeats) and validity (was it a fair test?).',
            'I suggest specific, realistic improvements.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          text: '"Human error" on its own is not an evaluation. Say what error, how it affected the results, and how to reduce it: "Starting the stopwatch by hand may have added up to 0.5 s of error; a data logger would remove this."',
        },
      ],
    },
  ],
  related: ['research/reading-papers', 'thinking/numbers', 'writing/style/clarity'],
}

export default guide
