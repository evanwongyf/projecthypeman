import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A learning objective says what learners should know or be able to do by the end. Success criteria say how you and they will recognise it. Written well, together they make planning easier, keep lessons focused and let learners judge their own progress.',
  nutshell: [
    'Objectives describe **learning**, not activities: "explain why…", not "make a poster about…".',
    'Use observable verbs. Avoid "know", "understand" and "appreciate", which cannot be seen.',
    'Mager’s **ABCD**: Audience, Behaviour, Condition, Degree.',
    'Success criteria break the objective into checkable features, ideally co-constructed with learners from examples.',
  ],
  sections: [
    {
      id: 'learning-not-doing',
      title: 'Learning, not doing',
      blocks: [
        {
          t: 'table',
          head: ['Activity (what they do)', 'Learning objective (what they learn)'],
          rows: [
            ['Make a poster about volcanoes.', 'Explain how tectonic plate movement causes volcanic eruptions.'],
            ['Watch a video on the Tudors.', 'Describe two ways Henry VIII changed religion in England, and why.'],
            ['Complete the fractions worksheet.', 'Add fractions with different denominators by finding a common denominator.'],
            ['Read chapter 3.', 'Identify how the author builds tension in chapter 3, using two quotations.'],
          ],
        },
      ],
    },
    {
      id: 'abcd',
      title: 'The ABCD format',
      lead: 'Robert Mager’s four parts.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Audience', def: 'Who? *Learners*, *Year 9*, *trainees*.' },
            { term: 'Behaviour', def: 'What they will do, with an observable verb. *Calculate*, *compare*, *design*. See [Bloom’s taxonomy](@teaching/taxonomies/blooms) for verbs.' },
            { term: 'Condition', def: 'Under what circumstances. *Given a data table*, *without notes*, *using a calculator*.' },
            { term: 'Degree', def: 'How well. *With 90% accuracy*, *in at least three sentences*, *within 10 minutes*.' },
          ],
        },
        {
          t: 'example',
          title: 'Building an objective',
          lines: [
            { label: 'A', text: 'Learners' },
            { label: 'B', text: 'will calculate the mean, median and mode' },
            { label: 'C', text: 'of a data set of up to 15 numbers, without a calculator,' },
            { label: 'D', text: 'with at least 4 of 5 sets correct.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'In everyday lesson planning, a full ABCD objective can feel heavy. The Condition and Degree often live in the success criteria instead. The essential part is a clear, observable Behaviour.',
        },
        { t: 'tool', tool: 'objective-builder' },
      ],
    },
    {
      id: 'criteria',
      title: 'Success criteria',
      blocks: [
        {
          t: 'p',
          text: 'Success criteria break the objective into the features of a successful answer. Shirley Clarke popularised sharing them with learners, sometimes as "WALT" (we are learning to) and "WILF" (what I’m looking for).',
        },
        {
          t: 'example',
          title: 'Objective: write a persuasive paragraph',
          lines: [
            { label: '✓', text: 'Opens with a clear claim.' },
            { label: '✓', text: 'Gives at least two reasons.' },
            { label: '✓', text: 'Supports each reason with a fact or example.' },
            { label: '✓', text: 'Uses at least one rhetorical technique (question, rule of three, emotive language).' },
            { label: '✓', text: 'Ends with a call to action.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Show examples', body: 'Show two or three pieces of work of varying quality.' },
            { title: 'Compare', body: 'Ask learners what makes the strongest one better.' },
            { title: 'Co-construct the criteria', body: 'Turn their observations into a checklist.' },
            { title: 'Use them', body: 'Learners check their own and peers’ work against the criteria before handing it in.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Mager, R. F. (1997). *Preparing instructional objectives* (3rd ed.). Center for Effective Performance. (Original work published 1962)',
    'Clarke, S. (2014). *Outstanding formative assessment: Culture and practice*. Hodder Education.',
    'Wiliam, D. (2011). *Embedded formative assessment*. Solution Tree.',
  ],
  related: ['teaching/taxonomies/blooms', 'teaching/assessment/alignment', 'teaching/assessment/rubrics', 'teaching/guides/planning/lesson-plan'],
}

export default guide
