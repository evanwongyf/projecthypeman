import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Strength and fitness training splits into traditions, each with its own goal, vocabulary and way of training. Bodybuilders train for muscle size and shape, powerlifters for the heaviest squat, bench and deadlift, Olympic weightlifters for explosive lifts, calisthenics athletes for bodyweight skills, strongmen for carrying and lifting awkward objects, CrossFit and hybrid racers for broad all-round capacity. Choosing one is mostly a question of what you want to be good at and what you enjoy enough to keep doing. This guide compares them side by side and offers a way to choose.',
  nutshell: [
    '**Bodybuilding**: muscle size and proportions. **Powerlifting**: maximal strength in three lifts. **Olympic weightlifting**: speed-strength and technique in two lifts. **Calisthenics**: control of your own body. **CrossFit / functional fitness**: broad fitness across many modes. **Hybrid racing** (for example HYROX): running plus functional stations. **Strongman**: heavy, awkward implements.',
    'All of them share the same foundations (progressive overload, enough recovery, protein and sleep), so skills transfer between them.',
    'The differences that matter for you: **learning curve**, **equipment**, **injury profile**, **time per week**, and **whether there is a competition** that gives structure.',
    'Many people mix: a bodybuilding or powerlifting base with some conditioning, or calisthenics with weights.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'Side by side',
      lead: 'What each one is about.',
      blocks: [
        {
          t: 'table',
          head: ['Discipline', 'Goal', 'Core training', 'Learning curve', 'Equipment', 'Notes'],
          rows: [
            ['Bodybuilding', 'Muscle size, symmetry, conditioning', '8 to 30 rep sets near failure; many exercises; 4 to 6 days; split routines', 'Gentle: most lifts are simple', 'Gym with dumbbells, cables, machines', 'Judged sport; contest prep needs a long, careful diet'],
            ['Powerlifting', 'Heaviest squat, bench press and deadlift (the total)', 'Heavy sets of 1 to 6 reps; frequent practice of the three lifts; peak for meets', 'Moderate: three lifts, technique matters', 'Barbell, rack, bench, plates', 'Weight classes; scored with points formulas such as IPF GL or Dots'],
            ['Olympic weightlifting', 'Heaviest snatch and clean and jerk', 'Technique drills, pulls, squats, many sets of 1 to 3 reps', 'Steep: needs coaching and mobility', 'Barbell, bumper plates, platform, coach', 'Olympic sport; strong link to athletic power'],
            ['Calisthenics', 'Strength and skills with bodyweight (pull-ups, dips, handstands, levers)', 'Progressive variations; static holds; skill practice', 'Moderate to steep for advanced skills', 'Pull-up bar, parallel bars, rings, floor', 'Cheap and portable; progress by leverage, not added load'],
            ['Strongman', 'Lift and carry heavy awkward objects', 'Stones, logs, yoke, farmer’s walk, deadlift variations', 'Moderate', 'Specialist implements', 'Fewer gyms equipped; high injury risk if rushed'],
            ['CrossFit / functional fitness', 'Broad fitness: strength, gymnastics, conditioning', 'Varied workouts of the day; lifts, gymnastics and cardio in short intense bouts', 'Varied: Olympic lifts and gymnastics are technical', 'Boxes (specialised gyms)', 'Class-based; coaching quality varies; fast pace'],
            ['Hybrid racing (e.g. HYROX)', 'Fast time over running plus functional stations', 'Running, sled work, carries, rowing, ski-erg, wall balls', 'Gentle: moves are simple, fitness is the limit', 'Running routes plus a gym or functional area', 'Standard race format worldwide, popular in Singapore'],
          ],
        },
        {
          t: 'levels',
          caption: 'Rough emphasis, from lower to higher, of each quality across the disciplines (one coach’s generalisation; individuals vary).',
          items: [
            { name: 'Muscle size', body: 'Highest in bodybuilding; high in powerlifting and strongman; moderate in calisthenics and CrossFit; lower in hybrid racing.' },
            { name: 'Maximal strength', body: 'Highest in powerlifting and strongman; very high in weightlifting; moderate in bodybuilding; lower in endurance-leaning hybrid training.' },
            { name: 'Power', body: 'Highest in Olympic weightlifting; high in CrossFit and strongman; low in bodybuilding.' },
            { name: 'Aerobic capacity', body: 'Highest in hybrid racing; moderate in CrossFit; low in bodybuilding and powerlifting unless added on purpose.' },
            { name: 'Skill and body control', body: 'Highest in calisthenics and weightlifting; moderate in CrossFit; lower in bodybuilding.' },
          ],
        },
      ],
    },
    {
      id: 'safety',
      title: 'Injury profile and how to reduce risk',
      lead: 'Every discipline has its common problems.',
      blocks: [
        { t: 'p', text: 'Reported injury rates in resistance sports are lower than in most team and contact sports: roughly 1 to 5 injuries per 1,000 hours of training in weightlifting and powerlifting, similar to or below those in many popular sports. The most common sites are the shoulder, lower back and knee. Risk rises with fatigue, rushed progressions, ego lifting and poor technique under load; it falls with sensible progression, coaching and enough rest. Data on specific programmes is limited and varies by study.' },
        {
          t: 'table',
          head: ['Discipline', 'Common problem areas', 'How to lower risk'],
          rows: [
            ['Bodybuilding', 'Shoulders (pressing volume), elbows, lower back', 'Vary exercises, control the lowering phase, avoid constant failure on joint-heavy lifts'],
            ['Powerlifting', 'Lower back, shoulder, hip and knee', 'Technique coaching, planned deloads, enough accessory work'],
            ['Olympic lifting', 'Wrists, knees, lower back, shoulders', 'Coaching from the start, progress from light technique work'],
            ['Calisthenics', 'Elbows, wrists, shoulders (from high-volume skills)', 'Gradual progression of static holds; wrist and scapular preparation'],
            ['CrossFit', 'Shoulders, lower back, knees', 'Scale the workout, prioritise technique over time on the clock, skip fatigued high-skill movements'],
            ['Hybrid racing', 'Knees, shins, hamstrings (running load)', 'Build running volume gradually, include strength work for the legs and trunk'],
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing one',
      lead: 'Questions to ask yourself.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'What do you want?', body: 'Look a certain way? Lift a heavy number? Do a handstand? Finish a race? Feel generally fitter? The goal points to a discipline.' },
            { title: 'What will you enjoy?', body: 'You will keep doing what you like. Try a free class, a seminar or a session with a friend before committing.' },
            { title: 'What do you have?', body: 'Equipment, time per week, access to a coach, budget. Calisthenics and kettlebells need little; Olympic lifting needs space, plates and a coach.' },
            { title: 'What is your health history?', body: 'If you have joint problems, previous injuries or conditions, discuss with a doctor or physiotherapist. In Singapore, the PAR-Q+ and Healthier SG health screenings are a good first step.' },
            { title: 'Plan a trial period', body: 'Commit for 8 to 12 weeks, log your training, and review: are you progressing, enjoying it and recovering?' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A practical hybrid', text: 'A common, effective combination: lift weights 3 to 4 days a week (a split from the plans shelf) for strength and muscle, add 2 easy cardio sessions for the heart, and one skill session (a handstand, pull-up progression or a sport). It covers the main health guidelines and lets you drift towards a specialty later.' },
      ],
    },
  ],
  sources: [
    'Keogh, J. W. L. & Winwood, P. W. (2017). The epidemiology of injuries across the weight-training sports. *Sports Medicine*, 47(3).',
    'Aasa, U. et al. (2017). Injuries among weightlifters and powerlifters: a systematic review. *British Journal of Sports Medicine*, 51(4).',
    'Glassman, G. (2002). What is fitness? *The CrossFit Journal*; and Hak, P. T. et al. (2013). Injuries during CrossFit training. *Journal of Strength and Conditioning Research*, 27(10).',
    'International Powerlifting Federation (2020). *IPF GL Points*; International Weightlifting Federation technical rules.',
    'HYROX (hyrox.com): official race format.',
  ],
  related: ['fitness/disciplines/powerlifting-and-bodybuilding', 'fitness/disciplines/calisthenics-olympic-and-functional', 'fitness/start-here', 'fitness/principles', 'fitness/plans/choosing-a-split'],
}

export default guide
