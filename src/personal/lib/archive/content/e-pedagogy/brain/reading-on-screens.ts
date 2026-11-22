import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Do we understand less when we read on a screen? Dozens of experiments say: somewhat, for some kinds of reading, under some conditions. The effect is real but modest, it is larger under time pressure and for informational texts, and good reading habits reduce it.',
  nutshell: [
    'Delgado et al.’s 2018 meta-analysis (54 studies, over 170,000 participants) found comprehension was lower on screens, **g ≈ −0.21**: the **screen inferiority effect**.',
    'The gap was larger **under time limits** and for **informational** (not narrative) texts, and it **did not shrink** in more recent studies or with younger “digital native” readers.',
    'A likely cause is **shallower processing**: on screens people skim more and judge their understanding too generously.',
    'Fixes: slow down, set a purpose, annotate, summarise, and print long or difficult texts when it matters.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'The evidence',
      blocks: [
        { t: 'bars', title: 'Screen versus paper reading comprehension (negative = worse on screen)', unit: 'g', decimals: 2, zero: true, min: -0.5, max: 0.2, items: [
          { label: 'Delgado et al. (2018), overall', value: -0.21 },
          { label: 'Clinton (2019), overall', value: -0.25 },
          { label: 'Narrative texts (Clinton)', value: -0.04, group: 'By text type' },
          { label: 'Informational texts (Clinton)', value: -0.32 },
        ], caption: 'Approximate effect sizes from two meta-analyses. Clinton (2019) also found readers were more overconfident about their understanding on screen.' },
        {
          t: 'math',
          tex: String.raw`\Delta\text{percentile} = 100\big(\Phi(d) - 0.5\big)`,
          caption: 'How far the average reader in one condition moves in the other condition’s distribution.',
          plain: 'An effect size of −0.21 sounds abstract. Turn it into percentiles: the average screen reader’s comprehension sits where Φ(−0.21) of paper readers are below. Subtracting 0.5 gives the shift from the middle.',
          where: [
            { sym: 'd', def: 'effect size (here negative: screens worse)' },
            { sym: String.raw`\Phi(d)`, def: 'the standard normal cumulative distribution at d' },
          ],
          syntax: [
            { sym: String.raw`\Phi`, say: '“capital phi”, looked up in a z-table' },
            { sym: String.raw`\Delta`, say: '“delta”: a change' },
          ],
          worked: {
            title: 'What g = −0.21 means',
            steps: [
              String.raw`\(\Phi(-0.21) \approx 0.417\).`,
              String.raw`\(0.417 - 0.5 = -0.083\).`,
              String.raw`\(100 \times (-0.083) \approx -8\) percentile points.`,
            ],
            why: [
              'read the z-table at −0.21',
              'compare with the median',
              'express as percentile points',
            ],
            answer: 'The average screen reader understands about as well as a paper reader at the 42nd percentile: a small but consistent cost, worth managing for important reading.',
          },
        },
      ],
    },
    {
      id: 'why',
      title: 'Why it happens',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'The shallowing hypothesis', body: 'Screens are associated with fast, light reading (messages, feeds), so we carry that mindset into study texts.' },
          { title: 'Overconfidence', body: 'Readers on screens predict their comprehension less accurately and stop studying too soon (Ackerman and Goldsmith, 2011).' },
          { title: 'Navigation and spatial memory', body: 'Paper gives a physical sense of where things are (“top left, near the end”); scrolling weakens this map.' },
          { title: 'Distraction', body: 'Devices carry notifications and links; even unused, they invite switching.' },
        ] },
      ],
    },
    {
      id: 'tips',
      title: 'Reading well on a screen',
      blocks: [
        { t: 'checklist', items: [
          'Turn off notifications and close other tabs',
          'Set a purpose: what question must this text answer?',
          'Use paginated view rather than endless scrolling for long texts',
          'Highlight and annotate; write a summary at the end of each section',
          'Self-test before deciding you understand',
          'Allow more time than you think; time pressure widens the gap',
          'Print the most important or difficult texts',
        ] },
      ],
    },
  ],
  sources: [
    'Delgado, P. et al. (2018). Don’t throw away your printed books: A meta-analysis on the effects of reading media on reading comprehension. Educational Research Review, 25, 23–38.',
    'Clinton, V. (2019). Reading from paper compared to screens: A systematic review and meta-analysis. Journal of Research in Reading, 42(2), 288–325.',
    'Ackerman, R., & Goldsmith, M. (2011). Metacognitive regulation of text learning: On screen versus on paper. Journal of Experimental Psychology: Applied, 17(1), 18–32.',
    'Wolf, M. (2018). Reader, Come Home. Harper.',
  ],
  related: ['e-pedagogy/brain/multitasking-and-notifications', 'teaching/techniques/learning-strategies/sq3r', 'attention/start-here'],
}

export default guide
