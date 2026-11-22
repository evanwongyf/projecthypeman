import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A rubric sets out the criteria for a piece of work and describes what different levels of quality look like. Good rubrics make marking more consistent, make expectations clear to learners and make feedback faster.',
  nutshell: [
    '**Analytic** rubrics score each criterion separately. **Holistic** rubrics give one overall judgement. **Single-point** rubrics describe only the target standard.',
    'Describe the **quality** of work at each level, not just "excellent, good, poor".',
    'Share and use rubrics with learners before and during the task, not only when marking.',
    'Keep criteria few and focused on what matters most.',
  ],
  sections: [
    {
      id: 'types',
      title: 'Three types',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Analytic', body: 'A grid: criteria down the side, levels across the top, a description in each cell. Gives detailed feedback on each criterion. Takes longer to use.' },
            { title: 'Holistic', body: 'One scale with a description of the whole piece at each level. Quick, good for overall judgement, but gives less specific feedback.' },
            { title: 'Single-point', body: 'Lists the criteria and describes only the "meets expectations" level, with space either side for "areas for growth" and "evidence of exceeding". Simple, and forces specific written feedback.' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'An analytic rubric',
      blocks: [
        {
          t: 'table',
          head: ['Criterion', 'Beginning', 'Developing', 'Secure', 'Excellent'],
          rows: [
            ['Argument', 'No clear position.', 'Position stated but not consistently argued.', 'Clear position argued throughout.', 'Clear, nuanced position that anticipates objections.'],
            ['Evidence', 'Little or no evidence.', 'Some evidence, not always relevant or explained.', 'Relevant evidence for each main point, explained.', 'Well-chosen evidence from varied sources, analysed critically.'],
            ['Organisation', 'Ideas are hard to follow.', 'Some structure; paragraphs not always focused.', 'Logical structure with focused paragraphs and links.', 'Structure builds the argument; transitions are purposeful.'],
            ['Style and accuracy', 'Frequent errors impede meaning.', 'Some errors; style inconsistent.', 'Few errors; clear, appropriate style.', 'Precise, fluent and virtually error-free.'],
          ],
          caption: 'A persuasive essay rubric. Levels describe quality, and each level can be distinguished from the next.',
        },
      ],
    },
    {
      id: 'writing',
      title: 'Writing good descriptors',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Base criteria on the learning outcomes ([alignment](@teaching/assessment/alignment)).',
            'Describe observable features of the work at each level.',
            'Make adjacent levels clearly different.',
            'Use [SOLO](@teaching/taxonomies/solo) to describe increasing quality of connections.',
            'Test the rubric on real samples of work, and refine it.',
            'Write a learner-friendly version.',
          ],
          dont: [
            'Use vague words that only change the adverb ("some", "good", "very good").',
            'Count features instead of judging quality ("uses 3 quotes" vs "uses quotes that support the argument").',
            'Include criteria that have nothing to do with the goal (neatness, colour) unless they matter.',
            'Have so many criteria that the rubric becomes a tick-box exercise.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Rubrics have limits',
          text: 'Rubrics can narrow work to what is listed, and markers can still disagree on what "clear" means. Moderating with colleagues using real examples, or trying comparative judgement (ranking pairs of work), can improve consistency.',
        },
      ],
    },
  ],
  sources: [
    'Brookhart, S. M. (2013). *How to create and use rubrics for formative assessment and grading*. ASCD.',
    'Fluckiger, J. (2010). Single point rubric: A tool for responsible student self-assessment. *Delta Kappa Gamma Bulletin, 76*(4), 18–25.',
    'Jonsson, A., & Svingby, G. (2007). The use of scoring rubrics: Reliability, validity and educational consequences. *Educational Research Review, 2*(2), 130–144.',
  ],
  related: ['teaching/assessment/objectives', 'teaching/taxonomies/solo', 'teaching/assessment/self-peer', 'teaching/assessment/feedback'],
}

export default guide
