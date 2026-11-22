import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Boxing training is one of the most complete workouts there is: skipping for footwork and conditioning, shadowboxing for skill and cardio, and rounds that mix short bursts with active recovery. You do not need to spar to get fit like a boxer.',
  nutshell: [
    'Everything starts from a balanced **stance** with hands up and chin down.',
    'The four punches: **jab** (lead straight), **cross** (rear straight), **hook**, **uppercut**.',
    'Power comes from the legs and hips turning, not the arm.',
    'Train in **rounds**: professional rounds are 3 minutes with 1 minute of rest.',
    'Wrap your hands and use gloves for bag work; never hit a person without proper supervision.',
  ],
  sections: [
    {
      id: 'stance',
      title: 'Stance and punches',
      lead: 'Watch each punch at slow speed and from the front and side. Notice how the hips and back foot turn.',
      blocks: [{ t: 'exercises', ids: ['stance', 'jab', 'cross', 'hook', 'uppercut', 'jab-cross-hook'] }],
    },
    {
      id: 'numbers',
      title: 'The number system',
      blocks: [
        {
          t: 'table',
          head: ['Number', 'Punch', 'Hand (orthodox)'],
          rows: [
            ['1', 'Jab', 'Left (lead)'],
            ['2', 'Cross', 'Right (rear)'],
            ['3', 'Lead hook', 'Left'],
            ['4', 'Rear hook', 'Right'],
            ['5', 'Lead uppercut', 'Left'],
            ['6', 'Rear uppercut', 'Right'],
          ],
          caption: 'Coaches call combinations by number: "1-2" is jab-cross, "1-2-3" is jab-cross-hook. Left-handers (southpaws) swap sides.',
        },
      ],
    },
    {
      id: 'defence',
      title: 'Defence and footwork',
      blocks: [
        { t: 'exercises', ids: ['bob-weave', 'jump-rope'] },
        {
          t: 'list',
          items: [
            'Move with small steps; the foot nearest the direction you are going moves first.',
            'Never cross your feet.',
            'After punching, move: step back, to the side, or slip.',
          ],
        },
      ],
    },
    {
      id: 'workout',
      title: 'A 30-minute boxing workout',
      blocks: [
        {
          t: 'table',
          head: ['Block', 'What to do'],
          rows: [
            ['Warm-up (5 min)', 'Skipping, arm circles, light shadowboxing'],
            ['Round 1 (3 min)', 'Shadowbox: jabs and movement only'],
            ['Round 2 (3 min)', 'Shadowbox: 1-2 and 1-2-3, moving between combinations'],
            ['Round 3 (3 min)', 'Add defence: slip or bob and weave after each combination'],
            ['Round 4 (3 min)', '20 s fast punches, 10 s bounce, repeat'],
            ['Conditioning (6 min)', '3 rounds of: 1 min skipping, 30 s burpees, 30 s mountain climbers'],
            ['Cool-down (5 min)', 'Easy walking and stretching'],
          ],
          caption: 'Take 1 minute of rest between rounds. Use the interval timer below on "Boxing rounds".',
        },
        { t: 'fit-tool', tool: 'timer' },
      ],
    },
  ],
  sources: ['Chaabène, H., et al. (2015). Amateur boxing: Physical and physiological attributes. *Sports Medicine*, 45(3), 337–352.'],
  related: ['fitness/combat/kickboxing', 'fitness/circuits/hiit', 'fitness/warm-up'],
}

export default guide
