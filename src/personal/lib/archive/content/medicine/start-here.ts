import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Medicine is, underneath all the Latin, a story about matter trying to kill other matter, and the body fighting back with a defence system more sophisticated than anything humans have engineered. This shelf builds that story from the ground up: how a drug gets its name, what a virus and a bacterium actually are, how your immune system responds to them, and how the heart and lungs keep the whole system running.',
  nutshell: [
    'A drug’s **generic name is not random**, standardised word stems (like -statin or -mab) encode its class and mechanism, once you know how to read them.',
    'A **virus and a bacterium are built completely differently**, which is exactly why antibiotics (which target bacteria) do nothing against a virus like the flu.',
    'The immune system has **two layers**: a fast, generic innate response within minutes, and a slower, precisely targeted adaptive response within days, vaccines work by training the second layer in advance.',
    'The **heart and lungs** are covered as working systems, not just labelled diagrams, animated diagrams show blood actually circulating and air actually moving.',
    'Every page is written for someone with no biology background, building toward real mechanistic understanding rather than lists of facts to memorise.',
  ],
  sections: [
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        { t: 'p', text: 'The shelf runs in a deliberate order: medicine basics (how drugs are named and work) first, then microbiology (what the body is actually fighting), then immunology (how it fights back), then the heart and lungs as the systems that keep everything supplied with oxygen. Each section builds on ideas from the one before it.' },
        {
          t: 'links',
          items: [
            { path: 'medicine/basics/drug-names-and-classes', note: 'Start here: how a drug’s name reveals its class' },
            { path: 'medicine/microbiology/virus-structure-and-types', note: 'What a virus actually is, structurally' },
            { path: 'medicine/immunology/innate-immunity', note: 'How the body responds to any threat, within minutes' },
            { path: 'medicine/body-systems/the-heart-and-circulation', note: 'The heart as a working pump, animated' },
            { path: 'medicine/chart-reading/ecg-basics', note: 'Reading an ECG, an X-ray and an MRI' },
            { path: 'medicine/neuroscience/brain-map', note: 'An interactive brain atlas: emotion, sense-making and intelligence' },
            { path: 'food-therapy/start-here', note: 'Food therapy: vitamins, minerals and what to eat for a goal' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A teaching shelf, not medical advice', text: 'This shelf explains how medicine, biology and the body work, for genuine understanding, it is not a diagnostic tool, a substitute for a doctor, or guidance for treating any real symptom or condition. If you are unwell, speak to an actual qualified clinician, not an archive page.' },
      ],
    },
  ],
  sources: [],
  related: ['medicine/basics/drug-names-and-classes', 'medicine/microbiology/virus-structure-and-types', 'medicine/body-systems/the-heart-and-circulation'],
}

export default guide
