import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Four tools for planning your running: work out a pace, predict race times and training paces from a recent result, estimate your VO2max, and set your heart-rate zones.',
  nutshell: [
    'Use a recent, all-out race or time trial for the most accurate predictions.',
    'Daniels’ VDOT gives both race predictions and training paces.',
    'Riegel’s formula is a simpler rule: time grows a little faster than distance.',
    'Predictions for longer races assume you have done the training for them.',
  ],
  sections: [
    { id: 'pace', title: 'Pace calculator', blocks: [{ t: 'fit-tool', tool: 'pace' }] },
    {
      id: 'race',
      title: 'Race predictor and training paces',
      blocks: [
        { t: 'fit-tool', tool: 'race' },
        {
          t: 'terms',
          items: [
            { term: 'Riegel’s formula', def: 'T2 = T1 × (D2 ÷ D1)^1.06. Published by Peter Riegel in 1981; a simple fit to race results across distances.' },
            { term: 'VDOT', def: 'From Jack Daniels and Jimmy Gilbert’s equations for the oxygen cost of running and the share of VO2max that can be held for a given time.' },
          ],
        },
      ],
    },
    { id: 'vo2', title: 'VO2max from a 12-minute run', blocks: [{ t: 'fit-tool', tool: 'vo2' }] },
    { id: 'hr', title: 'Heart-rate zones', blocks: [{ t: 'fit-tool', tool: 'hr' }] },
  ],
  sources: [
    'Riegel, P. S. (1981). Athletic records and human endurance. *American Scientist*, 69(3), 285–290.',
    'Daniels, J., & Gilbert, J. (1979). *Oxygen Power: Performance Tables for Distance Runners*. Self-published.',
    'Cooper, K. H. (1968). A means of assessing maximal oxygen intake. *JAMA*, 203(3), 201–204.',
  ],
  related: ['fitness/running/physiology', 'fitness/running/plans'],
}

export default guide
