import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A literature review is not a list of summaries. It is an argument about what is known on a topic: where researchers agree, where they disagree, and where the gaps are. The key skill is **synthesis**: organising sources by idea rather than one at a time.',
  nutshell: [
    'Organise by **theme, debate or method**, not source by source.',
    'A **synthesis matrix** (sources in rows, themes in columns) makes connections visible.',
    'Each paragraph should make a point about the literature, supported by several sources.',
    'End by showing the **gap** your own work addresses, or the question that remains open.',
  ],
  sections: [
    {
      id: 'summary-vs-synthesis',
      title: 'Summary versus synthesis',
      blocks: [
        {
          t: 'example',
          title: 'The same three sources, two ways',
          lines: [
            { label: 'Summary ✕', text: 'Smith (2018) studied phone use and sleep in 500 teenagers and found a link. Jones (2020) did an experiment and found that removing phones improved sleep. Lee (2021) found no link in younger children.' },
            { label: 'Synthesis ✓', text: 'Evidence that evening phone use shortens sleep comes both from large surveys of teenagers (Smith, 2018) and from experiments in which removing phones lengthened sleep (Jones, 2020). The effect may depend on age, however, as studies of younger children have not found the same link (Lee, 2021).' },
          ],
        },
        {
          t: 'p',
          text: 'The synthesis makes a claim about the research as a whole, groups sources that agree, contrasts those that differ, and suggests why.',
        },
      ],
    },
    {
      id: 'matrix',
      title: 'The synthesis matrix',
      blocks: [
        {
          t: 'table',
          head: ['Source', 'Sample', 'Method', 'Finding on sleep', 'Notes'],
          rows: [
            ['Smith (2018)', '500 teens, UK', 'Survey', 'More evening phone use, less sleep', 'Correlational; self-report'],
            ['Jones (2020)', '60 teens, US', 'Experiment', 'No phone in bedroom: +21 min sleep', 'Small sample; 2 weeks'],
            ['Lee (2021)', '300 children aged 8–11', 'Survey', 'No clear link', 'Younger group; parents set bedtimes'],
          ],
          caption: 'Fill in a row for each source as you read. Read down each column to see patterns across sources.',
        },
      ],
    },
    {
      id: 'structure',
      title: 'Structuring the review',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Thematic', body: 'Sections on each main theme or factor. The most common and flexible structure.' },
            { title: 'Debate', body: 'Organised around competing positions: evidence for, evidence against, attempts to reconcile.' },
            { title: 'Methodological', body: 'Grouped by method (surveys, experiments, interviews), useful when methods give different answers.' },
            { title: 'Chronological', body: 'How thinking developed over time. Use carefully; it tends to slide into summary.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Introduction', body: 'Define the topic, its importance and the scope of the review.' },
            { title: 'Body', body: 'Thematic sections, each starting with a topic sentence that makes a claim about the literature.' },
            { title: 'Conclusion', body: 'Summarise what is known, the main disagreements, the gaps, and how your work fits.' },
          ],
        },
      ],
    },
    {
      id: 'phrases',
      title: 'Useful phrases',
      blocks: [
        {
          t: 'table',
          head: ['To…', 'Try…'],
          rows: [
            ['Show agreement', 'Several studies have found… (A; B; C). / Consistent with this, …'],
            ['Show disagreement', 'In contrast, … / However, other research suggests…'],
            ['Explain differences', 'This discrepancy may reflect differences in… / One explanation is…'],
            ['Evaluate', 'A limitation of this work is… / The strongest evidence comes from…'],
            ['Identify a gap', 'Little research has examined… / It remains unclear whether…'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Galvan, J. L., & Galvan, M. C. (2017). *Writing literature reviews* (7th ed.). Routledge.',
    'Ridley, D. (2012). *The literature review: A step-by-step guide for students* (2nd ed.). Sage.',
  ],
  related: ['research/reading-papers', 'research/avoiding-plagiarism', 'writing/essentials/paragraphs'],
}

export default guide
