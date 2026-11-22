import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A test is only useful if its results mean what you think they mean. Poorly written questions measure reading ability, test-taking tricks or luck instead of the learning you care about. A few principles make questions far more trustworthy.',
  nutshell: [
    '**Validity**: does it measure what you intend? **Reliability**: would results be consistent?',
    'Multiple-choice questions can test deep thinking if the distractors are plausible and diagnostic.',
    'Avoid clues, tricks and ambiguous wording that reward test-wiseness.',
    'Use a blueprint to cover the important content at the right levels.',
  ],
  sections: [
    {
      id: 'principles',
      title: 'Validity and reliability',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Validity', def: 'The extent to which results support the conclusions you draw. A maths test full of complex reading may measure reading more than maths.' },
            { term: 'Reliability', def: 'Consistency. Would a similar test, a different day, or a different marker give a similar result? More questions and clear marking criteria increase reliability.' },
            { term: 'Construct-irrelevant difficulty', def: 'Anything that makes a question harder for reasons unrelated to the learning: complex wording, cultural references, confusing layout.' },
          ],
        },
      ],
    },
    {
      id: 'blueprint',
      title: 'Plan with a blueprint',
      blocks: [
        {
          t: 'table',
          head: ['Topic', 'Recall', 'Apply', 'Analyse / evaluate', 'Total marks'],
          rows: [
            ['Cells', '4', '4', '2', '10'],
            ['Tissues and organs', '3', '4', '3', '10'],
            ['Diffusion and osmosis', '3', '6', '6', '15'],
            ['Total', '10', '14', '11', '35'],
          ],
          caption: 'A test blueprint: rows are topics, columns are thinking levels. It makes sure the test reflects what was taught and at what depth.',
        },
      ],
    },
    {
      id: 'mcq',
      title: 'Writing multiple-choice questions',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Put the main question in the stem, so it can be answered before looking at options.',
            'Make every distractor plausible, ideally based on a common misconception.',
            'Keep options similar in length and grammar.',
            'Use three or four options; a weak fifth option adds nothing.',
            'Test understanding and application, not just recall, with scenarios and data.',
            'Vary the position of the correct answer.',
          ],
          dont: [
            'Use "all of the above" or "none of the above".',
            'Use negatives ("Which is NOT…") unless essential, and then bold them.',
            'Make the correct answer the longest or most detailed.',
            'Include grammatical clues ("an" before a vowel-starting answer).',
            'Write trick questions.',
          ],
        },
        {
          t: 'example',
          title: 'Improving a question',
          lines: [
            { label: 'Weak', text: 'Photosynthesis: A) happens in animals B) uses sunlight, water and carbon dioxide to make glucose and oxygen in plants C) is a type of music D) all of the above' },
            { label: 'Problems', text: 'No question in the stem; the correct answer is the long one; two options are absurd; "all of the above".' },
            { label: 'Better', text: 'A plant is kept in the dark for two days. Which process in its leaves will stop? A) Respiration B) Photosynthesis C) Transpiration D) Diffusion of oxygen' },
            { label: 'Why', text: 'Requires applying understanding; every option is a real process; A catches learners who think plants only photosynthesise and never respire.' },
          ],
        },
      ],
    },
    {
      id: 'constructed',
      title: 'Short answers and essays',
      blocks: [
        {
          t: 'list',
          items: [
            'Make the task clear: "Explain two reasons…" rather than "Discuss…" with no guidance.',
            'Write the mark scheme at the same time as the question.',
            'For essays, use a [rubric](@teaching/assessment/rubrics) and moderate with colleagues.',
            'Mark one question across all scripts before the next, and hide names, to reduce bias.',
            'Several shorter questions usually give more reliable information than one long one.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Haladyna, T. M., Downing, S. M., & Rodriguez, M. C. (2002). A review of multiple-choice item-writing guidelines for classroom assessment. *Applied Measurement in Education, 15*(3), 309–333.',
    'Christodoulou, D. (2017). *Making good progress? The future of assessment for learning*. Oxford University Press.',
    'Rodriguez, M. C. (2005). Three options are optimal for multiple-choice items: A meta-analysis of 80 years of research. *Educational Measurement: Issues and Practice, 24*(2), 3–13.',
  ],
  related: ['teaching/techniques/questioning/hinge-questions', 'teaching/taxonomies/dok', 'teaching/assessment/alignment'],
}

export default guide
