import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A good warm-up takes 8–15 minutes and makes the session better and safer: muscles warmer, joints moving, nervous system switched on. The **RAMP** structure (raise, activate, mobilise, potentiate) works for almost any sport.',
  nutshell: [
    '**Raise**: a few minutes of easy movement to raise heart rate and temperature.',
    '**Activate and mobilise**: dynamic drills that move joints through the range you will use.',
    '**Potentiate**: a few short, fast efforts that match the session (strides before a race, light sets before heavy ones).',
    'Save long static stretches (over 60 seconds) for after training or a separate session.',
  ],
  sections: [
    {
      id: 'ramp',
      title: 'The RAMP warm-up',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Raise (3–5 min)', body: 'Easy jog, skipping, cycling or brisk walking. You should be slightly warm and breathing a bit harder.' },
            { title: 'Activate and mobilise (3–6 min)', body: 'Leg swings, arm circles, lunges with a reach, glute bridges: move the body through the ranges the session needs.' },
            { title: 'Potentiate (2–4 min)', body: 'Short sharp efforts: 3–4 strides before running, jumps before sprinting, lighter sets before a heavy lift.' },
          ],
        },
        { t: 'exercises', ids: ['arm-circles', 'leg-swings', 'walking-lunge', 'high-knees', 'butt-kicks', 'a-skip', 'jumping-jack'] },
      ],
    },
    {
      id: 'stretch',
      title: 'Stretches for after training',
      blocks: [
        {
          t: 'p',
          text: 'Static stretching improves flexibility over weeks. It does not prevent soreness, and long holds just before strength or sprint work can slightly reduce power. Stretch after training or in a separate session, holding each stretch for 20–45 seconds.',
        },
        { t: 'exercises', ids: ['hip-flexor-stretch', 'hamstring-stretch', 'quad-stretch', 'cat-cow'] },
      ],
    },
  ],
  sources: [
    'Jeffreys, I. (2007). Warm-up revisited: The ramp method of optimizing warm-ups. *Professional Strength and Conditioning*, 6, 12–18.',
    'Behm, D. G., Blazevich, A. J., Kay, A. D., & McHugh, M. (2016). Acute effects of muscle stretching on physical performance, range of motion, and injury incidence. *Applied Physiology, Nutrition, and Metabolism*, 41(1), 1–11.',
  ],
  related: ['fitness/recovery', 'fitness/running/form'],
}

export default guide
