import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Effective remediation starts with knowing exactly where a reader’s difficulty lies. Two readers with “dyslexia” may need very different things: one cannot yet hear the sounds in words, another decodes accurately but painfully slowly, a third reads words well but has weak vocabulary. This guide shows how to build a reader’s profile and turn it into a plan.',
  nutshell: [
    '**Simple view of reading** (Gough and Tunmer, 1986): reading comprehension = decoding × language comprehension.',
    '**Scarborough’s rope**: word recognition strands (phonological awareness, decoding, sight recognition) and language strands (vocabulary, background knowledge, syntax, verbal reasoning, literacy knowledge).',
    'Assess **phonological awareness, decoding (real and nonsense words), fluency, spelling, vocabulary and comprehension**.',
    'Standardised scores show where a learner stands relative to peers; progress monitoring shows whether teaching is working.',
  ],
  sections: [
    {
      id: 'simple-view',
      title: 'The simple view of reading',
      blocks: [
        {
          t: 'math',
          tex: String.raw`RC = D \times LC`,
          caption: 'Gough and Tunmer’s simple view: reading comprehension is the product of decoding and language comprehension, each from 0 to 1.',
          plain: 'To understand a written text you must both turn the print into words (decoding) and understand the language those words make (language comprehension, the same skill you use for listening). Because the two multiply, if either is zero, reading comprehension is zero, however strong the other is. That tells you which one to fix.',
          where: [
            { sym: 'RC', def: 'reading comprehension' },
            { sym: 'D', def: 'decoding (word recognition), as a proportion of full skill' },
            { sym: 'LC', def: 'language (listening) comprehension, as a proportion' },
          ],
          syntax: [
            { sym: String.raw`\times`, say: '“times”: both are needed' },
          ],
          worked: {
            title: 'Three readers',
            steps: [
              String.raw`Reader A (dyslexia profile): \(D = 0.4\), \(LC = 0.9\). \(RC = 0.36\).`,
              String.raw`Reader B (language comprehension difficulty): \(D = 0.9\), \(LC = 0.4\). \(RC = 0.36\).`,
              String.raw`Reader C (mixed): \(D = 0.5\), \(LC = 0.5\). \(RC = 0.25\).`,
              String.raw`If A’s decoding rises to 0.8: \(RC = 0.8 \times 0.9 = 0.72\).`,
            ],
            why: [
              'strong listening, weak decoding: the classic dyslexia pattern',
              'the same reading score for the opposite reason',
              'both weak',
              'fixing the weak factor doubles comprehension',
            ],
            answer: 'A and B have identical reading comprehension scores but need opposite interventions: A needs decoding, B needs vocabulary and language. Assess both factors before planning.',
          },
        },
      ],
    },
    {
      id: 'battery',
      title: 'What to assess',
      blocks: [
        { t: 'table', head: ['Skill', 'Example tasks', 'What a weak result suggests'], rows: [
          ['Phonological awareness', 'Blend /k/ /a/ /t/; say “smile” without /s/', 'Teach sound-level skills first'],
          ['Letter–sound knowledge', 'Sounds for letters and digraphs', 'Fill gaps in the code'],
          ['Decoding real words', 'Word lists by difficulty', 'Phonics and word reading'],
          ['Decoding nonsense words', '“blim”, “strod”', 'Pure decoding without memorised words; the clearest dyslexia marker'],
          ['Fluency', 'Words correct per minute on connected text', 'Automaticity practice'],
          ['Rapid automatised naming', 'Name rows of letters or colours quickly', 'Slow naming predicts fluency difficulty'],
          ['Spelling', 'Dictated words and sentences', 'Orthographic and phonological gaps'],
          ['Vocabulary and listening comprehension', 'Definitions; questions on a passage read aloud', 'Language intervention needed too'],
          ['Reading comprehension', 'Questions on a passage read silently', 'Compare with listening comprehension'],
        ] },
      ],
    },
    {
      id: 'scores',
      title: 'Reading standardised scores',
      blocks: [
        {
          t: 'math',
          tex: String.raw`SS = 100 + 15z, \qquad z = \frac{x - \mu}{\sigma}, \qquad \text{percentile} = \Phi(z) \times 100`,
          caption: 'Converting between raw scores, z-scores, standard scores and percentiles.',
          plain: 'Tests compare a child’s raw score with an age group. The z-score says how many standard deviations above or below the age average the child is. Standard scores rescale that so the average is 100 and the standard deviation is 15. Percentiles say what share of the age group scored lower.',
          where: [
            { sym: 'x', def: 'the child’s raw score' },
            { sym: String.raw`\mu, \sigma`, def: 'the age group’s mean and standard deviation' },
            { sym: 'z', def: 'z-score' },
            { sym: 'SS', def: 'standard score (mean 100, SD 15)' },
            { sym: String.raw`\Phi`, def: 'the normal cumulative distribution' },
          ],
          syntax: [
            { sym: String.raw`\mu`, say: '“mu”: mean' },
            { sym: String.raw`\sigma`, say: '“sigma”: standard deviation' },
          ],
          worked: {
            title: 'A nonsense-word reading score',
            steps: [
              String.raw`Raw score 18; age mean 30, SD 8.`,
              String.raw`\(z = (18 - 30)/8 = -1.5\).`,
              String.raw`\(SS = 100 + 15 \times (-1.5) = 77.5\).`,
              String.raw`\(\Phi(-1.5) \approx 0.067\): about the 7th percentile.`,
            ],
            why: [
              'collect the norms for the child’s age',
              'distance from the mean in SD units',
              'rescale to mean 100, SD 15',
              'look up the percentile',
            ],
            answer: 'Standard score about 78, around the 7th percentile: well below average and a priority for intervention. Scores below about 85 (16th percentile) commonly trigger support.',
          },
        },
      ],
    },
  ],
  sources: [
    'Gough, P. B., & Tunmer, W. E. (1986). Decoding, reading, and reading disability. Remedial and Special Education, 7(1), 6–10.',
    'Scarborough, H. S. (2001). Connecting early language and literacy to later reading (dis)abilities. In Handbook of Early Literacy Research. Guilford.',
    'Kilpatrick, D. A. (2015). Essentials of Assessing, Preventing, and Overcoming Reading Difficulties. Wiley.',
  ],
  related: ['teaching/special-education/needs/dyslexia', 'teaching/special-education/dyslexia-remediation/progress-monitoring', 'teaching/subjects/reading'],
}

export default guide
