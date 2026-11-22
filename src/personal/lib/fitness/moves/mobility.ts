import type { Exercise } from './kit'
import { flat, hold, k, km } from './kit'

// Warm-up drills and stretches.

const QUAD = { pitch: 90 }

export const MOBILITY: Record<string, Exercise> = {
  'arm-circles': {
    name: 'Arm circles',
    ms: 1000,
    view: 'three',
    keys: [k(0, { both: { shoulder: [0, 84, 0], elbow: 4 } }), k(0.25, { both: { shoulder: [22, 92, 0], elbow: 4 } }), k(0.5, { both: { shoulder: [0, 100, 0], elbow: 4 } }), k(0.75, { both: { shoulder: [-22, 92, 0], elbow: 4 } })],
    muscles: ['shoulders'],
    steps: ['Hold the arms out to the sides.', 'Draw small circles, gradually making them bigger.', 'Reverse direction after 10–15.'],
    cues: ['Shoulders relaxed', 'Small to big'],
    mistakes: ['Shrugging up to the ears'],
    dose: '10–15 each direction.',
  },
  'leg-swings': {
    name: 'Leg swings',
    ms: 1400,
    view: 'side',
    keys: [
      k(0, { L: { shoulder: [10, 60, 0], elbow: 10 }, R: { hip: [-28, 2, 4], knee: 10, ankle: -10, shoulder: [10, 30, 0] } }),
      k(0.5, { pitch: -4, L: { shoulder: [10, 60, 0], elbow: 10 }, R: { hip: [68, 2, 4], knee: 8, ankle: 6, shoulder: [10, 30, 0] } }),
    ],
    muscles: ['legs', 'glutes'],
    steps: ['Stand side-on to a wall, holding it for balance.', 'Swing the outside leg forward and back, relaxed.', 'Let the range grow with each swing. Swap legs.'],
    cues: ['Tall torso', 'Relaxed, not kicking'],
    mistakes: ['Leaning back to swing higher'],
    dose: '10–15 each leg before running.',
  },
  'hip-flexor-stretch': {
    name: 'Kneeling hip flexor stretch',
    ms: 4000,
    view: 'side',
    keys: [
      k(0, { L: { hip: [88, 4, 4], knee: 88, ankle: flat(0, 88, 88), shoulder: [4, 8, 0] }, R: { hip: [-18, 4, 2], knee: 92, ankle: -40, shoulder: [4, 8, 0] } }),
      ...hold(0.4, 0.8, { z: 0.06, L: { hip: [80, 4, 4], knee: 100, ankle: flat(0, 80, 100), shoulder: [170, 10, 0], elbow: 8 }, R: { hip: [-30, 4, 2], knee: 92, ankle: -40, shoulder: [4, 8, 0] } }),
    ],
    muscles: ['legs', 'glutes'],
    steps: ['Kneel on one knee, the other foot flat in front.', 'Squeeze the glute of the kneeling leg and tuck your pelvis under.', 'Shift your hips gently forward until you feel a stretch at the front of the hip. Reach the arm on that side up.'],
    cues: ['Tuck the pelvis', 'Squeeze the glute'],
    mistakes: ['Arching the lower back instead of stretching the hip'],
    dose: '2 × 30–45 seconds each side.',
  },
  'hamstring-stretch': {
    name: 'Standing hamstring stretch',
    ms: 4000,
    view: 'side',
    keys: [...hold(0, 0.15, {}), ...hold(0.45, 0.85, { pitch: 70, spine: [14], neck: [10], both: { hip: [86, 4, 4], knee: 6, ankle: flat(70, 86, 6), shoulder: [84, 8, 0], elbow: 6 } })],
    muscles: ['legs'],
    steps: ['Stand with feet hip-width, knees soft.', 'Hinge forward from the hips and let your arms hang.', 'Breathe and relax down. Roll up slowly.'],
    cues: ['Hinge from the hips', 'Relax the neck'],
    mistakes: ['Bouncing'],
    dose: '2 × 30 seconds, after training.',
  },
  'quad-stretch': {
    name: 'Standing quad stretch',
    ms: 4000,
    view: 'side',
    keys: [k(0, {}), ...hold(0.3, 0.85, { L: { shoulder: [10, 45, 0], elbow: 10 }, R: { hip: [-6, 2, 0], knee: 150, ankle: -40, shoulder: [-38, 14, 0], elbow: 22, grip: 0.8 } })],
    muscles: ['legs'],
    steps: ['Stand on one leg, holding something for balance if needed.', 'Bend the other knee and hold the ankle behind you.', 'Keep the knees together and push the hip slightly forward.'],
    cues: ['Knees together', 'Stand tall'],
    mistakes: ['Pulling the knee out to the side', 'Arching the back'],
    dose: '2 × 30 seconds each side, after training.',
  },
  'cat-cow': {
    name: 'Cat-cow',
    ms: 4000,
    view: 'side',
    keys: [
      ...hold(0, 0.15, { ...QUAD, spine: [28], neck: [30], both: { hip: [90, 6, 0], knee: 90, ankle: -60, shoulder: [90, 8, 0], elbow: 0, grip: 0 } }),
      ...hold(0.5, 0.65, { ...QUAD, spine: [-24], neck: [-30], both: { hip: [90, 6, 0], knee: 90, ankle: -60, shoulder: [90, 8, 0], elbow: 0, grip: 0 } }),
    ],
    muscles: ['back', 'core'],
    steps: ['Start on hands and knees, hands under shoulders, knees under hips.', 'Breathe out and round your back up towards the ceiling (cat).', 'Breathe in and let the stomach drop, lifting the chest and tailbone (cow).'],
    cues: ['Move with the breath', 'Slow'],
    mistakes: ['Rushing through it'],
    dose: '8–10 slow breaths.',
  },
  'walking-lunge': {
    name: 'Lunge with reach',
    ms: 4200,
    view: 'three',
    keys: [
      k(0, {}),
      ...hold(0.2, 0.32, { spine: [0, 0, 25], L: { hip: [86, 4, 4], knee: 92, ankle: flat(0, 86, 92), shoulder: [150, 30, 0], elbow: 10 }, R: { hip: [-14, 2, 2], knee: 100, ankle: 26, shoulder: [150, 30, 0], elbow: 10 } }),
      k(0.5, {}),
      ...[0.7, 0.82].map((at) => km(at, { spine: [0, 0, 25], L: { hip: [86, 4, 4], knee: 92, ankle: flat(0, 86, 92), shoulder: [150, 30, 0], elbow: 10 }, R: { hip: [-14, 2, 2], knee: 100, ankle: 26, shoulder: [150, 30, 0], elbow: 10 } })),
    ],
    muscles: ['legs', 'glutes', 'core'],
    steps: ['Step into a lunge.', 'Reach both arms up and turn your chest towards the front leg.', 'Step through to the other side.'],
    cues: ['Tall torso', 'Turn from the upper back'],
    mistakes: ['Front knee collapsing inwards'],
    dose: '5 each side in a warm-up.',
  },
}
