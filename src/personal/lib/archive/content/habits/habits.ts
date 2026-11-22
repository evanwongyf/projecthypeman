import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Habits are actions you do automatically in response to a cue, without having to decide each time. Turning studying into a habit takes the daily battle with willpower out of it. It takes longer than people think, but missing a day does not ruin it.',
  nutshell: [
    'A habit links a **cue** (a time, place or preceding action) to a **routine**.',
    'In one study, habits took a median of about **66 days** to become automatic, with a wide range (Lally et al., 2010).',
    'Attach new habits to existing ones: "After dinner, I open my flashcards."',
    'Make it easy to start and hard to skip. Missing one day occasionally does not matter much.',
  ],
  sections: [
    {
      id: 'loop',
      title: 'How habits form',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Cue', body: 'A reliable trigger: a time, place, feeling or previous action. "After I get home and make a drink…"' },
            { name: 'Routine', body: 'The behaviour. "…I sit at my desk and review flashcards for 10 minutes."' },
            { name: 'Reward', body: 'Something that makes it satisfying: ticking a streak, a feeling of progress, a snack.' },
          ],
          caption: 'Repeated in the same context, the cue starts to trigger the routine automatically.',
        },
        {
          t: 'p',
          text: 'Wendy Wood’s research shows that a large share of daily behaviour is habitual, driven by context rather than conscious choice. Changing the context (where you study, what is on your desk) is often more effective than relying on willpower.',
        },
      ],
    },
    {
      id: 'build',
      title: 'Building a study habit',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start small', body: 'Five or ten minutes a day is enough to build the habit. You can grow it once it is automatic.' },
            { title: 'Choose a stable cue', body: 'Same time and place each day, or after something you already do every day (habit stacking).' },
            { title: 'Prepare the environment', body: 'Books out, app open, phone away. Reduce the steps between cue and action.' },
            { title: 'Track it', body: 'A calendar tick or a streak makes progress visible and satisfying.' },
            { title: 'Be patient', body: 'Expect weeks or months, not days. Automaticity grows gradually.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Never miss twice',
          text: 'Lally and colleagues found that missing a single day did not significantly affect habit formation. What matters is getting back on track. A good rule: missing once is normal; try not to miss twice in a row.',
        },
      ],
    },
  ],
  sources: [
    'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998–1009.',
    'Wood, W. (2019). *Good habits, bad habits*. Farrar, Straus and Giroux.',
    'Clear, J. (2018). *Atomic habits*. Avery.',
  ],
  related: ['habits/goals', 'memory/spaced-repetition', 'habits/procrastination'],
}

export default guide
