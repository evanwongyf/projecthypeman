import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Many readers with dyslexia become accurate but stay slow: every word takes effort, leaving little attention for meaning. Fluency (reading accurately, at a reasonable rate, with expression) grows from enough practice on text at the right level, with feedback. This guide covers the methods and the numbers teachers use to set goals.',
  nutshell: [
    'Fluency is measured as **words correct per minute (WCPM)** plus accuracy and prosody (expression).',
    '**Repeated reading** of the same passage, with feedback, improves fluency on that passage and transfers modestly to new text (Therrien, 2004).',
    'Practise on text at about **95% accuracy** (instructional level) or higher.',
    'Fluency growth is slow for students with dyslexia; set realistic weekly growth goals and keep the decoding work going.',
  ],
  sections: [
    {
      id: 'wcpm',
      title: 'Words correct per minute and accuracy',
      blocks: [
        {
          t: 'math',
          tex: String.raw`WCPM = \frac{W - E}{t} \times 60, \qquad \text{Accuracy} = \frac{W - E}{W} \times 100\%`,
          caption: 'Words correct per minute and accuracy from W words read, E errors and t seconds.',
          plain: 'Have the student read aloud for a timed period (usually one minute). Count the words they attempted and the errors. Words correct per minute is the correct words scaled to a minute; accuracy is the share of words read correctly.',
          where: [
            { sym: 'W', def: 'words attempted' },
            { sym: 'E', def: 'errors (misreadings, omissions, substitutions; self-corrections count as correct)' },
            { sym: 't', def: 'reading time in seconds' },
          ],
          syntax: [
            { sym: String.raw`\times 60`, say: 'convert per second to per minute' },
          ],
          worked: {
            title: 'A Primary 3 reader',
            steps: [
              String.raw`Read 78 words in 60 seconds with 7 errors.`,
              String.raw`\(WCPM = (78 - 7)/60 \times 60 = 71\).`,
              String.raw`\(\text{Accuracy} = 71/78 \approx 91\%\).`,
              'Typical spring benchmarks for the equivalent US grade 3 are around 110 WCPM at the 50th percentile (Hasbrouck and Tindal, 2017).',
            ],
            why: [
              'collect counts from the timed reading',
              'correct words per minute',
              'share correct',
              'compare with norms for the age (approximate, and based on US data)',
            ],
            answer: '71 WCPM at 91% accuracy: below benchmark on rate, and below 95% accuracy, so this passage is too hard for independent fluency practice. Use easier text and keep working on decoding.',
          },
        },
      ],
    },
    {
      id: 'methods',
      title: 'Fluency methods',
      blocks: [
        { t: 'table', head: ['Method', 'How', 'Notes'], rows: [
          ['Repeated reading', 'Read the same 100–200 word passage 3–4 times with feedback; chart WCPM', 'Best-evidenced; use text at instructional level'],
          ['Paired reading', 'Read together with a more skilled reader; student signals to read alone', 'Good for home and peer tutoring'],
          ['Echo and choral reading', 'Teacher reads a phrase; students echo; or read together', 'Models prosody'],
          ['Phrase-cued text', 'Slashes mark phrase boundaries', 'Builds phrasing and expression'],
          ['Reader’s theatre', 'Rehearse and perform a script', 'Motivating reason to reread'],
          ['Word-level speed drills', 'Timed reading of word lists with taught patterns', 'Builds automaticity for specific patterns'],
          ['Assisted reading with audio', 'Read along with a recording', 'Supports access and modelling'],
        ] },
      ],
    },
    {
      id: 'goal',
      title: 'Setting a fluency goal',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{Goal} = \text{Baseline} + r \times w`,
          caption: 'A fluency goal from the current level, an expected weekly growth rate r and the number of weeks w.',
          plain: 'Start from the student’s current median WCPM, decide a realistic or ambitious weekly growth rate based on research on similar students, and multiply by the number of weeks until the review. That gives the target, and the line from baseline to target is the “aimline”.',
          where: [
            { sym: 'Baseline', def: 'median of three initial WCPM measures' },
            { sym: 'r', def: 'expected growth in WCPM per week' },
            { sym: 'w', def: 'weeks until the goal date' },
          ],
          syntax: [
            { sym: String.raw`r \times w`, say: 'growth rate times weeks' },
          ],
          worked: {
            title: 'A 12-week goal',
            steps: [
              'Baseline readings: 68, 71, 74 → median 71.',
              'Fuchs et al. (1993) suggest roughly 1.0 (realistic) to 1.5 (ambitious) WCPM a week for grade 3 readers; intensive intervention may justify the ambitious rate.',
              String.raw`Ambitious goal: \(71 + 1.5 \times 12 = 89\) WCPM.`,
              String.raw`Realistic goal: \(71 + 1.0 \times 12 = 83\) WCPM.`,
            ],
            why: [
              'the median resists one unusual reading',
              'use research rates as a guide, not a rule',
              'baseline plus growth',
              'compare with the more conservative rate',
            ],
            answer: 'Aim for about 89 WCPM in 12 weeks. If progress-monitoring data fall below the aimline, intensify (see Progress monitoring).',
          },
        },
      ],
    },
  ],
  sources: [
    'Therrien, W. J. (2004). Fluency and comprehension gains as a result of repeated reading: A meta-analysis. Remedial and Special Education, 25(4), 252–261.',
    'Hasbrouck, J., & Tindal, G. (2017). An update to compiled ORF norms (Technical Report No. 1702). Behavioral Research and Teaching, University of Oregon.',
    'Fuchs, L. S., Fuchs, D., Hamlett, C. L., Walz, L., & Germann, G. (1993). Formative evaluation of academic progress: How much growth can we expect? School Psychology Review, 22(1), 27–48.',
    'Rasinski, T. (2010). The Fluent Reader (2nd ed.). Scholastic.',
  ],
  related: ['teaching/special-education/dyslexia-remediation/progress-monitoring', 'teaching/special-education/dyslexia-remediation/decoding-routines', 'teaching/subjects/reading'],
}

export default guide
