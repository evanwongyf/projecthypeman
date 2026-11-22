import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Not all strength training uses a barbell and a mirror. Calisthenics uses your own body as the weight, Olympic weightlifting turns strength into speed, kettlebells train the hips and the whole body with swinging movements, CrossFit mixes strength, gymnastics and cardio into short workouts, and hybrid racing such as HYROX combines running with simple functional stations. This guide explains how each works, how to progress safely, what the research says, and how to start.',
  nutshell: [
    '**Calisthenics** progresses by **leverage** (harder variations) rather than added weight: push-up → archer push-up → one-arm; row → pull-up → archer → muscle-up. Near-failure bodyweight sets build muscle as well as weights (Calatayud et al., 2016; Kotarsky et al., 2018).',
    '**Olympic weightlifting** (the snatch and the clean and jerk) builds power and technique; learn it with a coach and light weights first.',
    '**Kettlebell** training (the swing, goblet squat, Turkish get-up) trains hip power and conditioning together, with a small footprint.',
    '**CrossFit and functional fitness** vary workouts to build broad capacity; benefits come with a need to scale and watch fatigue and technique.',
    '**Hybrid racing** (HYROX: eight 1 km runs with a functional station after each) is an accessible competition that rewards both fitness and strength.',
  ],
  sections: [
    {
      id: 'cali',
      title: 'Calisthenics and bodyweight training',
      lead: 'Progress by leverage.',
      blocks: [
        { t: 'p', text: 'Bodyweight exercises can be made harder in four main ways: change the **leverage** (feet elevated, a more horizontal body, one arm or leg), add **range of motion**, slow the **tempo** or add pauses, or add **load** with a weighted vest. A "progression chain" arranges variations from easy to hard, and you move up when you can do about 8 to 12 clean reps (or a 30-second hold) of the current step.' },
        {
          t: 'table',
          head: ['Pattern', 'Beginner', 'Intermediate', 'Advanced'],
          rows: [
            ['Push (horizontal)', 'Incline push-up (hands on a bench)', 'Standard push-up, then decline or ring push-up', 'Archer push-up, pseudo planche, one-arm progressions'],
            ['Push (vertical)', 'Pike push-up', 'Feet-elevated pike, wall handstand push-up', 'Free handstand push-up'],
            ['Pull (vertical)', 'Dead hang, scapular pulls, assisted pull-up, negatives', 'Pull-up, chin-up, weighted pull-up', 'Archer pull-up, one-arm progressions, muscle-up'],
            ['Pull (horizontal)', 'Inverted row (high bar), band row', 'Inverted row (feet elevated), ring row', 'Front lever progressions'],
            ['Legs', 'Squat, lunge, glute bridge', 'Split squat, step-up, single-leg glute bridge', 'Pistol squat, shrimp squat, Nordic curl'],
            ['Core', 'Plank, dead bug, bird dog', 'Hollow body, hanging knee raise', 'Hanging leg raise, L-sit, dragon flag'],
          ],
        },
        { t: 'p', text: 'Research supports calisthenics for muscle and strength. Studies that match effort (sets to near failure) find similar hypertrophy for push-ups and bench pressing (Calatayud et al., 2016; Kotarsky et al., 2018). Limits: some muscles, such as hamstrings and the upper back, can be harder to load without equipment, and advanced skills (planche, front lever) demand long, careful tendon adaptation. A pull-up bar and a pair of rings or bars cover most needs.' },
      ],
    },
    {
      id: 'oly',
      title: 'Olympic weightlifting',
      lead: 'Power with technique.',
      blocks: [
        { t: 'p', text: 'Olympic weightlifting contains two lifts. In the **snatch** the bar goes from the floor to overhead in one movement; in the **clean and jerk** it is pulled to the shoulders (the clean) then driven overhead (the jerk). Both demand strength, speed, mobility (ankles, hips, thoracic spine, shoulders, wrists) and precise timing. The movements transfer to jumping and sprinting, and weightlifters have some of the highest power outputs measured in sport. They are technical: the best way to learn is with a qualified coach, starting with an empty bar or a broomstick and drills that break the lift into positions.' },
        {
          t: 'steps',
          items: [
            { title: 'Mobility and positions', body: 'Overhead squat, front squat, hang positions with a light bar, and a stable catch position before you add load.' },
            { title: 'Learn the pulls', body: 'Hang power cleans, power snatches and pulls from blocks to learn the extension and the path of the bar.' },
            { title: 'Full lifts, light', body: 'Build to full snatches and cleans with technique-first sets of 2 to 3 reps; stop when speed or form drops.' },
            { title: 'Strength base', body: 'Squats, pulls and presses build the force the lifts need. Technique work comes first in a session when you are fresh.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Do not do them tired, or for time with heavy weight', text: 'High-skill lifts performed under heavy fatigue (at the end of a conditioning workout) show higher injury rates. If you want power without the learning curve, jump squats, kettlebell swings, medicine-ball throws and sled pushes build the same quality more simply.' },
      ],
    },
    {
      id: 'kb',
      title: 'Kettlebells, CrossFit and hybrid racing',
      lead: 'Conditioning with strength.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Kettlebells', tag: 'hips and conditioning', body: 'The two-handed swing is a hip-hinge power exercise that raises heart rate sharply; a trial found 12 minutes of swings improved strength and aerobic capacity in a few weeks. Learn the hinge first with a goblet deadlift. The Turkish get-up builds shoulder stability and control.' },
            { title: 'CrossFit', tag: 'constantly varied', body: 'Workouts of the day mix weightlifting, gymnastics and cardio at high intensity for 5 to 30 minutes. It builds broad fitness and community, but intensity and technical lifts under fatigue are where injuries happen. Choose a gym with good coaching and learn to scale.' },
            { title: 'HYROX', tag: 'the standard race', body: 'Eight rounds of a 1 km run followed by a station: SkiErg 1,000 m, sled push 50 m, sled pull 50 m, burpee broad jumps 80 m, rowing 1,000 m, farmer’s carry 200 m, sandbag lunges 100 m and wall balls (100 reps). Divisions for singles, doubles and teams. It rewards steady running and tidy station technique.' },
            { title: 'Strongman', tag: 'heavy and awkward', body: 'Atlas stones, log press, yoke and farmer’s carries train grip, trunk and total-body strength. Start with heavy carries and sled work; progress to the implements with an experienced coach.' },
          ],
        },
        {
          t: 'table',
          head: ['Day', 'Session', 'Focus'],
          rows: [
            ['Mon', 'Strength: lower body (squat or leg press, hinge, lunge)', 'Strength for the legs'],
            ['Tue', 'Run intervals (for example 6 × 800 m) plus sled push or carry practice', 'Speed and stations'],
            ['Wed', 'Rest or easy cardio and mobility', 'Recovery'],
            ['Thu', 'Strength: upper body and trunk (press, pull-ups, rows)', 'Upper-body strength'],
            ['Fri', 'Easy run plus station circuit (wall balls, lunges, rowing)', 'Aerobic base and technique'],
            ['Sat', 'Long run or a race simulation (half distance)', 'Endurance and pacing'],
            ['Sun', 'Rest', 'Recovery'],
          ],
          caption: 'An example week for a hybrid-race beginner. See the endurance shelf for the running and fuelling principles.',
        },
      ],
    },
  ],
  sources: [
    'Kotarsky, C. J. et al. (2018). Effect of progressive calisthenic push-up training on muscle strength and thickness. *Journal of Strength and Conditioning Research*, 32(3).',
    'Calatayud, J. et al. (2016). Bench press and push-up at comparable levels of muscle activity results in similar strength gains. *Journal of Strength and Conditioning Research*, 30(1).',
    'Falatic, J. A. et al. (2015). Effects of kettlebell training on aerobic capacity. *Journal of Strength and Conditioning Research*, 29(7).',
    'Storey, A. & Smith, H. K. (2012). Unique aspects of competitive weightlifting: performance, training and physiology. *Sports Medicine*, 42(9).',
    'HYROX (hyrox.com): race format and station standards.',
  ],
  related: ['fitness/disciplines/disciplines-compared', 'fitness/strength/basics', 'fitness/circuits/hiit', 'fitness/running/start-running', 'fitness/endurance/stamina-plans'],
}

export default guide
