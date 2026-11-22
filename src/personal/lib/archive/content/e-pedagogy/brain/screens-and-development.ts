import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Few topics generate more alarm than children and screens. The research is more nuanced than headlines: total screen time has only small average links with wellbeing, while what children do on screens, when, and what screens displace (sleep, play, conversation, exercise) matters much more. Very young children are a special case.',
  nutshell: [
    'Large studies find **small average associations** between adolescents’ digital technology use and wellbeing (Orben and Przybylski, 2019: about 0.4% of the variance).',
    '**Content and context matter**: educational, social and creative use differ from passive scrolling, and harms concentrate in heavy users and vulnerable young people.',
    'Screens before bed **delay sleep**; reading on a light-emitting device delayed melatonin and sleepiness in a lab study (Chang et al., 2015).',
    'For **under-2s**, guidelines advise little or no screen time apart from video calls; language grows from live interaction.',
  ],
  sections: [
    {
      id: 'size',
      title: 'How big are the effects?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`r = \sqrt{R^2}`,
          caption: 'Converting “share of variance explained” to a correlation.',
          plain: 'Studies often report how much of the variation in wellbeing is explained by screen use (R²). Taking the square root gives the correlation r. Small R² values correspond to weak correlations, meaning screen time alone tells you very little about any individual child.',
          where: [
            { sym: 'R²', def: 'share of variance in the outcome explained by the predictor' },
            { sym: 'r', def: 'correlation coefficient (−1 to 1)' },
          ],
          syntax: [
            { sym: String.raw`\sqrt{\;}`, say: '“square root of”' },
          ],
          worked: {
            title: 'Orben and Przybylski’s estimate',
            steps: [
              String.raw`\(R^2 \approx 0.004\) (0.4%).`,
              String.raw`\(r = \sqrt{0.004} \approx 0.063\).`,
              'For comparison, in the same data wearing glasses and eating potatoes had associations of similar size, while being bullied and getting enough sleep had much larger ones.',
            ],
            why: [
              'the reported share of variance',
              'square root gives the correlation, negative here (more use, slightly lower wellbeing)',
              'put the number in context with other factors in the same dataset',
            ],
            answer: 'A correlation of about −0.06: real but tiny on average. That does not rule out serious harm for some children with some uses; it means total hours is a poor measure.',
          },
        },
      ],
    },
    {
      id: 'what-matters',
      title: 'What matters more than hours',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Displacement', body: 'Screens that replace sleep, outdoor play, homework or family conversation cause problems even when the content is harmless.' },
          { title: 'Content', body: 'Age-appropriate, educational and creative content differs from violent, sexual or manipulative content and endless short-form feeds.' },
          { title: 'Co-use', body: 'Young children learn more from screens when an adult watches and talks with them.' },
          { title: 'Timing', body: 'Screens in the hour before sleep, and in bedrooms overnight, are most consistently linked to poorer sleep.' },
          { title: 'Vulnerability', body: 'Young people who are already anxious, depressed or isolated may be more affected by harmful content and comparison.' },
          { title: 'Problematic use', body: 'Loss of control, conflict and withdrawal symptoms are better warning signs than hours alone.' },
        ] },
      ],
    },
    {
      id: 'guidelines',
      title: 'Guidelines',
      blocks: [
        { t: 'table', head: ['Age', 'Common guidance (WHO 2019; AAP; Singapore’s Grow Well SG)'], rows: [
          ['Under 18 months to 2 years', 'Avoid screens other than video calls with family'],
          ['2 to 5 years', 'No more than about 1 hour a day of high-quality content, ideally watched with an adult'],
          ['6 to 12 years', 'Limit recreational screen time (often under 2 hours a day); protect sleep, homework and activity'],
          ['Teenagers', 'Agree family rules; no devices in bedrooms overnight; focus on content and wellbeing, not only hours'],
        ], caption: 'Guidelines differ in detail; check the latest local advice.' },
        { t: 'checklist', items: [
          'Screen-free meals and the hour before bed',
          'Devices charged outside bedrooms at night',
          'Watch and talk together with young children',
          'Prefer active, creative and social uses over passive scrolling',
          'Model the habits you want to see',
        ] },
      ],
    },
  ],
  sources: [
    'Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3, 173–182.',
    'Chang, A.-M. et al. (2015). Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS, 112(4), 1232–1237.',
    'World Health Organization (2019). Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age.',
    'Health Promotion Board and Ministry of Health Singapore (2025). Grow Well SG guidance on screen use.',
    'Hale, L., & Guan, S. (2015). Screen time and sleep among school-aged children and adolescents. Sleep Medicine Reviews, 21, 50–58.',
  ],
  related: ['parenting/gifted/nurturing-by-age', 'memory/sleep-and-body', 'e-pedagogy/brain/rewards-and-habits'],
}

export default guide
