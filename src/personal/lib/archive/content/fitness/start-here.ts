import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'This shelf covers training for fitness: running, strength, circuits and combat sports. Most exercises come with a **3D animation** you can play, pause, slow right down, scrub through and turn around to see from any side, plus the written steps, cues and common mistakes.',
  nutshell: [
    'Adults should aim for **150–300 minutes** of moderate activity a week (or 75–150 vigorous), plus **strength training on two or more days** (WHO, 2020).',
    'Something is far better than nothing. Start small and build.',
    'Drag any animation to turn the camera; use the speed menu for slow motion and the scrub bar to stop at any point.',
    'Tick **show muscles worked** to light up the muscles each exercise trains.',
    'If you have a health condition, are pregnant, or get chest pain, dizziness or unusual breathlessness, check with a doctor first.',
  ],
  sections: [
    {
      id: 'try',
      title: 'Try the player',
      lead: 'Drag to turn the figure, change the speed, and scrub through a rep.',
      blocks: [{ t: 'exercises', ids: ['squat', 'jog', 'push-up', 'jab'] }],
    },
    {
      id: 'goal',
      title: 'Where to start for your goal',
      blocks: [
        {
          t: 'table',
          head: ['If you want to…', 'Start with'],
          rows: [
            ['Get fitter from scratch', '[Starting to run](@fitness/running/start-running) or a [beginner circuit](@fitness/circuits/circuit-training), plus [strength basics](@fitness/strength/basics).'],
            ['Run a 5K, 10K or marathon', '[Types of run](@fitness/running/workouts), then [training plans](@fitness/running/plans).'],
            ['Get stronger or build muscle', '[Strength basics](@fitness/strength/basics), then a [programme](@fitness/strength/programmes).'],
            ['Train efficiently in little time', '[HIIT and Tabata](@fitness/circuits/hiit).'],
            ['Box or kickbox for fitness', '[Boxing fitness](@fitness/combat/boxing).'],
            ['Pass a military fitness test', '[Military fitness tests](@fitness/combat/military).'],
          ],
        },
      ],
    },
    {
      id: 'safe',
      title: 'Staying safe',
      blocks: [
        {
          t: 'checklist',
          items: [
            'If you answer yes to any question on a pre-exercise questionnaire such as the PAR-Q+ (heart condition, chest pain, dizziness, bone or joint problems, medication for blood pressure), get medical advice first.',
            'Warm up before hard sessions; see [warm-up and mobility](@fitness/warm-up).',
            'Learn movements with light loads and good form before adding weight or speed.',
            'Increase training gradually; big jumps in load are the most common cause of injury.',
            'Stop if you feel sharp pain, chest pain, faintness or unusual breathlessness.',
            'Sleep, eat and rest enough: fitness is built during recovery, not just during training.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'About the animations',
          text: 'The figure is a 3D mannequin moved by joint angles: it shows the shape and rhythm of each movement well, but it is not a real athlete. Use the written cues as the reference, and get coaching for heavy lifts.',
        },
      ],
    },
    {
      id: 'path',
      title: 'A path through the shelf',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'fitness/principles', note: 'The rules behind every good plan.' },
            { path: 'fitness/warm-up' },
            { path: 'fitness/running/form' },
            { path: 'fitness/running/workouts' },
            { path: 'fitness/strength/basics' },
            { path: 'fitness/strength/lower-body' },
            { path: 'fitness/circuits/hiit' },
            { path: 'fitness/recovery' },
          ],
        },
      ],
    },
  ],
  sources: [
    'World Health Organization. (2020). *WHO guidelines on physical activity and sedentary behaviour*. WHO.',
    'Warburton, D. E. R., Jamnik, V., Bredin, S. S. D., & Gledhill, N. (2011). The Physical Activity Readiness Questionnaire for Everyone (PAR-Q+). *Health & Fitness Journal of Canada*, 4(2), 3–23.',
  ],
  related: ['fitness/principles', 'habits/wellbeing'],
}

export default guide
