import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Running is a series of bounds from one leg to the other. Good form is mostly about not wasting energy and not braking: a tall posture, feet landing close to under the body, quick light steps and relaxed arms. Watch the animations from the side and at slow speed to see each phase.',
  nutshell: [
    'Each stride has a **stance phase** (foot on the ground) and a **swing phase**; running adds a **flight phase** with both feet off the ground.',
    '**Overstriding** (landing far ahead of the hips with a straight knee) is the most common fault; it acts like a brake.',
    'Raising cadence (steps per minute) by 5–10% shortens the stride and reduces load on the knees and hips.',
    'There is no single best foot strike. Where the foot lands, relative to the hips, matters more than which part lands first.',
    'Drills and short strides teach good mechanics better than thinking about form during every run.',
  ],
  sections: [
    {
      id: 'watch',
      title: 'Watch it in slow motion',
      lead: 'Set the speed to 0.25× and view from the side. Use the scrub bar to stop at each phase.',
      blocks: [{ t: 'exercises', ids: ['jog', 'sprint', 'overstride', 'walk'] }],
    },
    {
      id: 'gait',
      title: 'The gait cycle',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Initial contact', body: 'The foot touches down, ideally a little in front of the hips with the knee softly bent.' },
            { name: 'Midstance', body: 'The body passes over the foot; knee and ankle bend to absorb the load like a spring.' },
            { name: 'Toe-off', body: 'The hip extends and the calf pushes the body forward and up.' },
            { name: 'Flight and swing', body: 'Both feet leave the ground; the free leg folds and swings through, ready to land again.' },
          ],
          caption: 'Walking has no flight phase: one foot is always on the ground, and briefly both are.',
        },
        {
          t: 'table',
          head: ['', 'Walking', 'Easy running', 'Sprinting'],
          rows: [
            ['Time foot is on the ground', 'About 60% of the cycle', 'About 35–40%', 'About 20–25%'],
            ['Flight phase', 'None', 'Short', 'Long'],
            ['Knee lift', 'Low', 'Moderate', 'High'],
            ['Arm action', 'Relaxed swing', 'Elbows ~90°, forward and back', 'Powerful, cheek to hip'],
          ],
        },
      ],
    },
    {
      id: 'cues',
      title: 'Form cues that help',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Run tall', body: 'Imagine a string pulling the top of your head up. Lean slightly from the ankles, not by bending at the waist.' },
            { title: 'Land under you', body: 'Aim to land with the foot close to under the hips and the shin roughly vertical, not reaching out in front.' },
            { title: 'Quick, light steps', body: 'Many runners land around 160–180 steps a minute, but it varies with height and speed. If you overstride, try 5–10% more steps.' },
            { title: 'Relaxed arms', body: 'Elbows around 90°, hands loose, swinging forward and back rather than across the body.' },
            { title: 'Quiet feet', body: 'Loud slapping often means overstriding or heavy landings.' },
            { title: 'Look ahead', body: 'Eyes 10–20 m ahead keeps the neck and posture in line.' },
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Everyone should land on the forefoot',
          text: 'Studies have not found that switching foot strike prevents injury; forced changes often move the load from the knees to the calves and Achilles. Fix overstriding by changing step length and rate, and let the foot strike sort itself out.',
        },
      ],
    },
    {
      id: 'drills',
      title: 'Drills',
      lead: 'Do 2–3 of these once or twice a week after an easy warm-up, followed by 4–6 strides.',
      blocks: [{ t: 'exercises', ids: ['a-skip', 'high-knees', 'butt-kicks'] }],
    },
  ],
  sources: [
    'Heiderscheit, B. C., et al. (2011). Effects of step rate manipulation on joint mechanics during running. *Medicine & Science in Sports & Exercise*, 43(2), 296–302.',
    'Novacheck, T. F. (1998). The biomechanics of running. *Gait & Posture*, 7(1), 77–95.',
    'Anderson, L. M., Bonanno, D. R., Hart, H. F., & Barton, C. J. (2020). What are the benefits and risks associated with changing foot strike pattern during running? *Sports Medicine*, 50(5), 885–917.',
  ],
  related: ['fitness/running/workouts', 'fitness/running/injuries', 'fitness/warm-up'],
}

export default guide
