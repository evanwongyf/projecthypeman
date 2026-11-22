import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Your core is everything between your ribs and hips: the abdominals, obliques, back muscles and more. Its main job is less about bending and more about **resisting** movement: keeping the trunk stable while the arms and legs do the work.',
  nutshell: [
    'Train the core to resist extension (plank, dead bug), resist side bending (side plank) and resist and control rotation (twists).',
    'Big lifts like squats and deadlifts train the core too.',
    '**You cannot burn fat from your belly with sit-ups**: visible abs are mostly about overall body fat.',
    'Quality over quantity: a 30-second plank done well beats a sagging 3-minute one.',
  ],
  sections: [
    {
      id: 'exercises',
      title: 'Core exercises',
      blocks: [{ t: 'exercises', ids: ['plank', 'side-plank', 'dead-bug', 'crunch', 'russian-twist', 'mountain-climber'] }],
    },
    {
      id: 'myths',
      title: 'Core myths',
      blocks: [
        { t: 'callout', tone: 'myth', title: 'Crunches burn belly fat', text: 'Spot reduction does not work: in one study, six weeks of abdominal exercise did not reduce belly fat compared with doing none. Fat loss comes from overall energy balance.' },
        { t: 'callout', tone: 'myth', title: 'Longer planks are always better', text: 'Once you can hold a good plank for about a minute, make it harder (lift a leg, add load) rather than longer.' },
      ],
    },
    {
      id: 'routine',
      title: 'A 10-minute core routine',
      blocks: [
        {
          t: 'table',
          head: ['Exercise', 'Amount'],
          rows: [
            ['Dead bug', '2 × 8 each side'],
            ['Plank', '2 × 30–45 s'],
            ['Side plank', '2 × 20–30 s each side'],
            ['Glute bridge', '2 × 12'],
          ],
          caption: 'Inspired by back-health research (Stuart McGill’s "big three" are the curl-up, side plank and bird dog).',
        },
      ],
    },
  ],
  sources: [
    'Vispute, S. S., et al. (2011). The effect of abdominal exercise on abdominal fat. *Journal of Strength and Conditioning Research*, 25(9), 2559–2564.',
    'McGill, S. (2015). *Low Back Disorders* (3rd ed.). Human Kinetics.',
  ],
  related: ['fitness/strength/basics', 'fitness/circuits/circuit-training'],
}

export default guide
