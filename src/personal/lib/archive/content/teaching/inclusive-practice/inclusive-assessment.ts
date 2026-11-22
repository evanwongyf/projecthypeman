import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An assessment is fair when a learner’s score reflects what they know about the thing being measured, and not their handwriting speed, reading level, anxiety, hearing or unfamiliarity with the format. Making assessment inclusive means removing barriers that are irrelevant to the construct without lowering the standard. This guide explains construct-irrelevant variance, access arrangements and when they are appropriate, universal design for assessment, how to make classroom tests and feedback more accessible, and the principle that accommodations should make scores more valid, not just higher.',
  nutshell: [
    '**Validity** is about the inferences drawn from a score. **Construct-irrelevant variance** is anything that changes scores for reasons unrelated to the skill being measured (reading load in a maths problem, handwriting speed in a history essay).',
    '**Access arrangements** (extra time, a reader, a scribe, a separate room, rest breaks, assistive technology) remove barriers while keeping the same standard. They should reflect the learner’s **normal way of working**.',
    'The aim is **comparable meaning**: the arrangement should *remove* a disadvantage, not give an advantage; it should help learners who need it more than those who do not.',
    '**Design for everyone**: plain language, clear layout, varied formats and the choice of response make assessments more accessible to all, and reduce the number of special arrangements needed.',
  ],
  sections: [
    {
      id: 'valid',
      title: 'Validity and barriers that are not the point',
      lead: 'What are we really measuring?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\sigma^2_{\text{observed}}=\sigma^2_{\text{construct}}+\sigma^2_{\text{irrelevant}}+\sigma^2_{\text{random}}`,
          caption: 'A simple decomposition of score variance: the intended skill, systematic influences that are not the skill, and random error.',
          where: [{ sym: '\\sigma^2_{\\text{construct}}', def: 'variance due to genuine differences in the skill being measured' }, { sym: '\\sigma^2_{\\text{irrelevant}}', def: 'variance due to other systematic factors: reading level, speed, anxiety, format familiarity' }, { sym: '\\sigma^2_{\\text{random}}', def: 'unsystematic noise, such as luck on the day' }],
          syntax: [{ sym: '\\sigma^2_{\\text{irrelevant}}', say: 'the part we want to shrink for fairness. Effect: for a learner with dyslexia, a long reading passage in a science test adds irrelevant variance, pulling the score below their scientific understanding. Why: the test measures reading as well as science, for that learner.' }, { sym: '\\sigma^2_{\\text{construct}}/\\sigma^2_{\\text{observed}}', say: 'the share of score differences that are meaningful (validity-like). Effect: raising it makes the score more interpretable. Why: an accommodation that reduces the irrelevant term, without changing the construct, helps this share.' }],
          worked: {
            title: 'A word problem',
            steps: ['A maths test item: a four-sentence word problem with a simple calculation.', 'For fluent readers, the score reflects the maths. For a learner who reads two years below age, a share of the score reflects decoding and language.', 'Reading the question aloud (a reader), or simplifying the language without changing the mathematics, removes the irrelevant factor.'],
            answer: 'Whether a reader is appropriate depends on the construct: for a reading test, it would change what is measured and is not allowed; for a maths test, it is usually permitted. Always ask what the test claims to measure.',
          },
        },
        {
          t: 'table',
          head: ['Barrier', 'What it distorts', 'Possible arrangement (if the construct allows)'],
          rows: [
            ['Reading demand in a non-reading test', 'Subject knowledge', 'Plain language; reader; bilingual glossary; read-aloud'],
            ['Writing speed or legibility', 'Content knowledge, ideas', 'Extra time; word processor; scribe; oral response'],
            ['Processing speed', 'Depth of understanding', 'Extra time (often 25%, commonly); rest breaks'],
            ['Anxiety, attention, sensory overload', 'Performance on the day', 'Separate room; breaks; reduced distractions; clear instructions'],
            ['Hearing or vision', 'Access to the question', 'Large print, braille, sign interpreter, captioning, assistive technology'],
            ['Unfamiliar format or culture-specific context', 'Skill in the domain', 'Practice with the format; neutral contexts; varied examples'],
          ],
        },
      ],
    },
    {
      id: 'arrangements',
      title: 'Access arrangements in practice',
      lead: 'Principles and process.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify the need from evidence', body: 'Use classroom observation, work samples, assessments by specialists, and the learner’s history. A diagnosis can support but should not be the only route.' },
            { title: 'Link to the normal way of working', body: 'Arrangements for formal exams should match what the learner uses day to day and in school assessments. A new arrangement on the exam day is unlikely to help.' },
            { title: 'Check the construct', body: 'Does the arrangement alter what the exam is measuring (a reader for a reading test, a calculator for mental arithmetic)? If so, it is a modification and may change how results are reported.' },
            { title: 'Apply for approval early', body: 'National examinations (for example those run by SEAB in Singapore for PSLE and GCE) have their own application procedures and deadlines for access arrangements, usually supported by professional reports. Learn the process and dates well in advance.' },
            { title: 'Train and practise', body: 'Readers and scribes need training; learners need practice using the arrangement, so it helps rather than distracts.' },
            { title: 'Review and fade', body: 'Reassess as the learner develops and as technology improves; some arrangements become unnecessary and others should be added.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Fairness cuts both ways', text: 'Evidence on extra time is mixed: it often helps learners with identified needs more than others, but studies show that other learners can benefit as well on speeded tests. That is a reason to design assessments so that speed is not part of what is measured unless it should be, and to allocate arrangements by need, not by demand from confident families.' },
      ],
    },
    {
      id: 'uda',
      title: 'Universal design for assessment',
      lead: 'Build it accessible from the start.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Plain language', tag: 'wording', body: 'Short sentences, familiar words, active voice, one idea per sentence; define necessary technical terms; avoid idioms and culturally specific contexts. Plain language benefits every learner and is essential for multilingual ones.' },
            { title: 'Clear layout', tag: 'format', body: 'Uncluttered pages, sans-serif font of 12 point or more, generous spacing, numbered questions, the diagram next to the question, a clear marks scheme.' },
            { title: 'Multiple means of response', tag: 'choice', body: 'Where the construct allows, offer a written answer, a diagram, an oral explanation or a short recording; let learners choose.' },
            { title: 'Pitch for access and challenge', tag: 'range', body: 'Start with accessible items and build up to demanding ones, so that every learner can show something and the strongest are stretched (avoiding floor and ceiling effects).' },
            { title: 'Low-stakes and varied', tag: 'frequency', body: 'Frequent, low-stakes retrieval quizzes reduce test anxiety and give more reliable evidence than one big test.' },
            { title: 'Accessible feedback', tag: 'after the test', body: 'Feedback in forms a learner can use: spoken, with a worked model, with one or two targets, with time to act on it.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Could a learner who knows the content but struggles with reading, writing, speed or attention still show what they know?',
            'Is the language as simple as the construct allows?',
            'Have I named what each question measures, so that I can tell what an arrangement would change?',
            'Is there a variety of tasks (short, extended, practical, oral)?',
            'Have learners practised the format?',
            'Do I look at results by group (for example EAL, SEN, disadvantaged) to see whether the assessment is working equally well?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Messick, S. (1989). Validity. In R. L. Linn (Ed.), *Educational Measurement* (3rd ed.). American Council on Education.',
    'Thompson, S. J., Johnstone, C. J. & Thurlow, M. L. (2002). *Universal Design Applied to Large Scale Assessments*. NCEO Synthesis Report 44.',
    'Sireci, S. G., Scarpati, S. E. & Li, S. (2005). Test accommodations for students with disabilities: an analysis of the interaction hypothesis. *Review of Educational Research*, 75(4).',
    'Joint Council for Qualifications (annual). *Access Arrangements and Reasonable Adjustments*.',
    'Singapore Examinations and Assessment Board (SEAB). Special arrangements for candidates with special educational needs (seab.gov.sg).',
  ],
  related: ['teaching/inclusive-practice/adaptive-teaching-toolkit', 'teaching/assessment/test-design', 'teaching/special-education/foundations/accommodations', 'teaching/differentiation/udl', 'teaching/inclusive-practice/measuring-progress-fairly'],
}

export default guide
