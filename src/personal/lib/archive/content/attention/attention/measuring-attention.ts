import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Attention cannot be seen directly, so researchers infer it from behaviour: how fast people respond, how often they miss a target, how often they raise a false alarm, and what they say when asked at random moments. Signal detection theory is the key mathematical tool, because it separates how well someone can tell a signal from noise from how willing they are to say “yes”.',
  nutshell: [
    '**Reaction time** and its variability index alertness; slower and more variable responses suggest lapses.',
    '**Vigilance tasks** (spot rare targets over a long period) measure sustained attention.',
    '**Thought probes** ask people at random moments whether they were on task.',
    '**Signal detection**: sensitivity **d′ = z(hit rate) − z(false-alarm rate)**; the criterion c shows bias.',
  ],
  sections: [
    {
      id: 'methods',
      title: 'Methods',
      blocks: [
        { t: 'table', head: ['Method', 'What it measures', 'Example'], rows: [
          ['Simple reaction time', 'Alertness', 'Press when a light appears; the Psychomotor Vigilance Task used in sleep research'],
          ['Continuous performance tasks', 'Sustained attention and impulsivity', 'Press for every letter except X; used in ADHD assessment (alongside clinical judgement)'],
          ['Attention Network Test', 'Alerting, orienting and executive control', 'Arrow-flanker task with warning cues (Fan et al., 2002)'],
          ['Thought probes', 'Mind wandering', '“Were you thinking about the task just now?”'],
          ['Eye tracking', 'Where visual attention goes', 'Fixations on slides versus elsewhere'],
          ['EEG and pupil size', 'Arousal and engagement (indirect)', 'Research labs'],
        ] },
      ],
    },
    {
      id: 'sdt',
      title: 'Signal detection theory',
      blocks: [
        { t: 'table', head: ['', 'Responds “yes”', 'Responds “no”'], rows: [
          ['**Signal present**', 'Hit', 'Miss'],
          ['**Signal absent**', 'False alarm', 'Correct rejection'],
        ] },
        {
          t: 'math',
          tex: String.raw`d' = z(H) - z(F), \qquad c = -\tfrac12\big(z(H) + z(F)\big)`,
          caption: 'Sensitivity d′ and response criterion c from the hit rate H and false-alarm rate F.',
          plain: 'Someone who says “yes” to everything catches every signal but also raises every false alarm, so hit rate alone is misleading. Signal detection theory converts both rates into z-scores (how many standard deviations along a normal curve) and takes the difference: d′ measures how well the person separates signal from noise. The criterion c shows whether they lean towards “yes” (negative c) or “no” (positive c).',
          where: [
            { sym: 'H', def: 'hit rate: share of signals correctly detected' },
            { sym: 'F', def: 'false-alarm rate: share of non-signals wrongly called signals' },
            { sym: 'z(·)', def: 'the inverse normal: the z-score with that much area to its left' },
            { sym: "d′", def: 'sensitivity (0 = chance; 1 is moderate; 2 or more is good)' },
            { sym: 'c', def: 'criterion (bias); 0 is neutral' },
          ],
          syntax: [
            { sym: "d'", say: '“d prime”' },
            { sym: 'z(H)', say: '“z of H”: look up the z-score for probability H' },
          ],
          worked: {
            title: 'Two students on a 20-minute proofreading task',
            steps: [
              String.raw`Student A: \(H = 0.80\), \(F = 0.20\). \(z(0.80) = 0.842\), \(z(0.20) = -0.842\).`,
              String.raw`\(d'_A = 0.842 - (-0.842) = 1.68\); \(c_A = -\tfrac12(0.842 - 0.842) = 0\).`,
              String.raw`Student B: \(H = 0.95\), \(F = 0.50\). \(z(0.95) = 1.645\), \(z(0.50) = 0\).`,
              String.raw`\(d'_B = 1.645 - 0 = 1.645\); \(c_B = -\tfrac12(1.645 + 0) = -0.82\).`,
            ],
            why: [
              'convert both rates to z-scores with a normal table',
              'sensitivity is the gap; the criterion is neutral',
              'B catches more errors but also flags half the correct words',
              'almost the same sensitivity as A, but a strong lean towards saying “error”',
            ],
            answer: 'B’s higher hit rate (95% against 80%) is not better attention: both have d′ ≈ 1.65–1.68. B is just more liberal. In vigilance studies, d′ often falls over time (the vigilance decrement) while c may rise as people become more cautious.',
          },
        },
      ],
    },
  ],
  sources: [
    'Green, D. M., & Swets, J. A. (1966). Signal Detection Theory and Psychophysics. Wiley.',
    'Macmillan, N. A., & Creelman, C. D. (2005). Detection Theory: A User’s Guide (2nd ed.). Erlbaum.',
    'Fan, J. et al. (2002). Testing the efficiency and independence of attentional networks. Journal of Cognitive Neuroscience, 14(3), 340–347.',
    'Smallwood, J., & Schooler, J. W. (2015). The science of mind wandering. Annual Review of Psychology, 66, 487–518.',
  ],
  related: ['attention/attention/attention-span-myths', 'medicine/start-here', 'mathematics/start-here'],
}

export default guide
