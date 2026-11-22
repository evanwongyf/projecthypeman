import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Intervention without diagnosis is guessing. Before choosing a catch-up programme you need to know which part of reading or number is actually missing, and the answer is often narrower than "weak at reading" or "bad at maths". This guide gives two models that organise the search (the simple view of reading and a map of number prerequisites), the quick checks that locate a gap, how to analyse errors, and a worked example of working backwards to the true starting point.',
  nutshell: [
    '**Simple view of reading** (Gough and Tunmer, 1986): reading comprehension = **decoding × language comprehension**. If either is zero, comprehension is zero, so the fix depends on which is weak.',
    'In maths, find the **earliest broken link** in a chain of prerequisites (counting → place value → addition and subtraction → multiplication facts → fractions → ratio and algebra).',
    'Use **short, specific checks**, not long tests: a one-minute fluency probe, a nonword reading check, a number-line task, error analysis of recent work.',
    '**Error analysis** treats a wrong answer as information: a consistent error reveals a consistent misconception.',
    'Diagnosis suggests **possible** causes; persistent, unexplained difficulty after good teaching is a reason to involve specialists (see the graduated approach).',
  ],
  sections: [
    {
      id: 'svr',
      title: 'Reading: the simple view',
      lead: 'Two skills, multiplied.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`RC=D\times LC,\qquad 0\le D,\,LC\le1`,
          caption: 'The simple view of reading: reading comprehension (RC) is the product of decoding (D) and language comprehension (LC).',
          where: [{ sym: 'D', def: 'decoding: turning printed words into spoken words, scaled 0 to 1' }, { sym: 'LC', def: 'language comprehension: understanding spoken language (vocabulary, grammar, background knowledge), scaled 0 to 1' }],
          syntax: [
            { sym: '\\times', say: 'multiplication, not addition. Effect: if either factor is 0, the product is 0, however strong the other is. Why: a child who cannot decode cannot read the text however well they understand speech, and a child who decodes perfectly but does not understand the language cannot comprehend the text.' },
            { sym: '0\\le D,LC\\le1', say: 'each skill is a proportion of full proficiency. Effect: a moderate weakness in both (0.6 × 0.6 = 0.36) hurts more than a big weakness in one with strength in the other.' },
          ],
          worked: {
            title: 'Three children, the same low comprehension score',
            steps: ['Child A: D = 0.4, LC = 0.9 → RC = 0.36. Fluent understanding of speech; cannot decode. Needs systematic phonics.', 'Child B: D = 0.9, LC = 0.4 → RC = 0.36. Reads words aloud smoothly but does not understand: needs vocabulary, knowledge and oral language (a common profile for multilingual learners).', 'Child C: D = 0.6, LC = 0.6 → RC = 0.36. Both are weak; needs both, in order of what blocks most.'],
            answer: 'Identical test scores, three different interventions. A single "reading age" score cannot tell them apart.',
          },
        },
        {
          t: 'table',
          head: ['Component', 'Quick check', 'What a weakness looks like'],
          rows: [
            ['Phonics / decoding', 'Read a list of real and pseudo-words (a phonics screening check); note which letter-sound patterns fail', 'Guessing from the first letter; slow, effortful decoding; can read common words but not new ones'],
            ['Fluency', 'One-minute oral reading of an at-level passage; count words read correctly per minute', 'Word-by-word, expressionless reading, which uses up working memory for decoding'],
            ['Vocabulary', 'Ask for meanings of words from the text; picture-vocabulary tests', 'Can read the words but not explain them'],
            ['Background knowledge', 'Ask what they know about the topic before reading', 'Understands the sentences, misses the inference'],
            ['Language structure', 'Retell a story; ask questions requiring a "because" or "so"', 'Short, simple sentences; difficulty with connectives and pronouns'],
            ['Comprehension monitoring', 'Plant an inconsistency in a passage; see if the learner notices', 'Reads on without noticing that it makes no sense'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Dyslexia is one cause among many', text: 'Persistent difficulty with accurate and fluent word reading and spelling despite good teaching may point to dyslexia. Poor comprehension with good decoding is a different profile (sometimes called specific comprehension difficulty). See the dyslexia and speech-and-language guides.' },
      ],
    },
    {
      id: 'number',
      title: 'Maths: the prerequisite chain',
      lead: 'Find the first broken link.',
      blocks: [
        {
          t: 'flow',
          title: 'A simplified prerequisite chain for number',
          nodes: [
            { label: 'Counting and cardinality', sub: 'how many; one-to-one; subitising', tone: 'human' },
            { label: 'Place value', sub: 'tens and ones; 10 more, 10 less', tone: 'process' },
            { label: 'Add and subtract', sub: 'number bonds; strategies; fluency', tone: 'process' },
            { label: 'Multiply and divide', sub: 'facts; arrays; inverse', tone: 'model' },
            { label: 'Fractions and decimals', sub: 'equal parts; number line; equivalence', tone: 'data' },
            { label: 'Ratio, proportion, algebra', sub: 'multiplicative reasoning', tone: 'output' },
          ],
          caption: 'A learner struggling with a link near the right has often a gap two or three links to the left. Work back until the learner succeeds, then forward.',
        },
        { t: 'p', text: 'Number sense can be probed quickly: ask a learner to place 7, 15 and 82 on an empty 0 to 100 line, to say what is 10 more than 67, to compare 3/4 and 2/3 and explain, or to give 6 + 7 without counting. Number-line estimation accuracy is one of the better predictors of later maths performance. Fluency with single-digit facts (accuracy and speed) frees working memory for multi-step problems, so a pupil who counts on fingers for 7 × 8 is spending capacity needed for the method.' },
      ],
    },
    {
      id: 'errors',
      title: 'Error analysis',
      lead: 'A wrong answer is data.',
      blocks: [
        {
          t: 'table',
          head: ['Pupil’s work', 'Error pattern', 'Likely misconception'],
          rows: [
            ['52 − 38 = 26', 'Subtracts the smaller digit from the larger in each column', 'Does not understand regrouping (exchange) in subtraction'],
            ['0.35 > 0.5', 'Compares as whole numbers (35 > 5)', 'Decimal places treated as whole-number digits'],
            ['3/5 + 1/5 = 4/10', 'Adds the numerators and the denominators', 'Fractions treated as two separate numbers'],
            ['2(x + 3) = 2x + 3', 'Multiplies only the first term', 'Distributive law not understood'],
            ['"is" in the question: reads 7 × 8 as 7 + 8', 'Operation chosen from a word cue', 'Weak reading of problem language; keyword strategies'],
          ],
          caption: 'Collect five or six consistent mistakes on a short set of well-chosen questions, and the pattern becomes visible.',
        },
        {
          t: 'example',
          title: 'Working back: a Primary 5 pupil who "cannot do fractions"',
          lines: [
            { label: 'Presenting problem', text: 'Mei Ling gets 2/3 + 1/6 wrong and says "I hate fractions".' },
            { label: 'Probe 1', text: 'Can she find equivalent fractions (2/3 = ?/6)? She cannot: she writes 2/6.' },
            { label: 'Probe 2', text: 'Can she shade 2/3 of a rectangle divided into 3? Yes. Divided into 6? She shades 2.' },
            { label: 'Probe 3', text: 'Does she see that 1/3 = 2/6 on a number line? No: she thinks the larger denominator means a larger fraction.' },
            { label: 'Diagnosis', text: 'A conceptual gap in the meaning of equal parts and the size of unit fractions, not in the addition procedure. It began at the link before the one she was being taught.' },
            { label: 'Plan', text: 'Four short sessions using fraction strips and number lines on unit fractions and equivalence, then return to addition with unlike denominators, checking with a drawing each time.' },
          ],
        },
      ],
    },
    {
      id: 'when',
      title: 'When to go further',
      lead: 'Signs that call for a specialist.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Difficulty persists despite several terms of well-delivered, targeted teaching (a lack of response to intervention).',
            'A discrepancy: strong spoken language or reasoning with unexpectedly weak reading, spelling or number.',
            'A family history of dyslexia or other difficulties; speech and language delay in early years.',
            'Signs of hearing or vision problems; frequent headaches, squinting, or asking for repetition.',
            'Sudden decline, withdrawal or distress that suggests a wellbeing issue.',
          ],
        },
        { t: 'p', text: 'In Singapore, mainstream primary schools provide early identification and support through programmes such as the Learning Support Programme for English and Learning Support for Mathematics in the early primary years, and Allied Educators (Learning and Behavioural Support) work with teachers on learning and behaviour needs. Details of provision change, so check current MOE guidance and speak to your school’s learning support team.' },
      ],
    },
  ],
  sources: [
    'Gough, P. B. & Tunmer, W. E. (1986). Decoding, reading, and reading disability. *Remedial and Special Education*, 7(1), 6–10.',
    'Siegler, R. S. et al. (2012). Early predictors of high school mathematics achievement. *Psychological Science*, 23(7).',
    'Rose, J. (2006). *Independent Review of the Teaching of Early Reading*. DfES.',
    'Ashlock, R. B. (2010). *Error Patterns in Computation* (10th ed.). Pearson.',
    'Ministry of Education Singapore. Learning Support Programmes and support for students with special educational needs (moe.gov.sg).',
  ],
  related: ['teaching/inclusive-practice/why-learners-fall-behind', 'teaching/inclusive-practice/send-graduated-approach', 'teaching/subjects/reading', 'teaching/subjects/maths', 'teaching/special-education/needs/dyslexia', 'teaching/special-education/needs/dyscalculia'],
}

export default guide
