/**
 * Running theory for the Archive. Written as plain-language summaries of the
 * mainstream coaching and sports-science consensus — a starting point, not
 * medical advice.
 */

export type TheoryArticle = {
  id: string
  title: string
  topic: 'Physiology' | 'Training' | 'Racing' | 'Strength' | 'Recovery'
  summary: string
  body: string[]
  keyPoints: string[]
  tryThis: string
}

export const THEORY: TheoryArticle[] = [
  {
    id: 'aerobic-base',
    title: 'The aerobic base and easy running',
    topic: 'Physiology',
    summary: 'Most of your running should feel easy. That is where the engine is built.',
    body: [
      'Distance running is overwhelmingly aerobic — even a 5K draws most of its energy from oxygen-using metabolism. Easy running grows the things that make that system bigger: more capillaries around muscle fibres, more and larger mitochondria, more stored glycogen, a stronger heart that pumps more blood per beat.',
      'These adaptations come from time on your feet at low intensity, and they come slowly — over months and years. Running easy days too hard does not speed them up; it just adds fatigue that steals quality from the hard days.',
      'Many successful programmes follow a roughly 80/20 split: around 80% of running at easy, conversational effort and around 20% at moderate-to-hard effort.',
    ],
    keyPoints: [
      'Easy = you can speak in full sentences.',
      'Volume at easy effort drives most aerobic adaptation.',
      'Keep easy days easy so hard days can be hard.',
    ],
    tryThis: 'Run your next easy day by feel and check you could hold a conversation the whole way. Note the pace — it is probably slower than you think.',
  },
  {
    id: 'threshold',
    title: 'Lactate threshold and tempo running',
    topic: 'Physiology',
    summary: 'Threshold is the fastest pace you can hold before fatigue starts snowballing.',
    body: [
      'As you run faster, your muscles produce lactate faster. Up to a point your body clears it about as fast as it is made. Past that point — the lactate threshold — it accumulates, and the effort becomes unsustainable within tens of minutes.',
      'For trained runners threshold pace is roughly what they could race for about an hour. It feels "comfortably hard": you can speak a few words but not hold a conversation.',
      'Training at or near threshold (tempo runs, cruise intervals) pushes that point to a faster pace, which directly raises the speed you can sustain in races from 10K to the marathon.',
    ],
    keyPoints: [
      'Threshold ≈ one-hour race effort.',
      'Comfortably hard — a few words at a time.',
      'Tempo runs and cruise intervals raise it.',
    ],
    tryThis: 'After a warm-up, run 3 × 8 minutes at comfortably-hard effort with 2 minutes easy jogging between.',
  },
  {
    id: 'vo2max',
    title: 'VO₂max and intervals',
    topic: 'Physiology',
    summary: 'VO₂max is your ceiling for using oxygen; hard intervals lift it.',
    body: [
      'VO₂max is the maximum rate at which your body can take in and use oxygen. It sets the upper limit of your aerobic engine. The pace you can run at VO₂max is close to what you could race for roughly 6–10 minutes.',
      'Intervals of about 2–5 minutes at 3K–5K race effort, with recoveries shorter than or equal to the work, spend lots of time near VO₂max and are the classic way to raise it.',
      'VO₂max is only one piece. Two runners with the same VO₂max can race very differently because of threshold and running economy.',
    ],
    keyPoints: [
      'Interval effort ≈ 3K–5K race pace.',
      'Reps of 2–5 minutes, recoveries ≤ work.',
      'One session a week is plenty for most runners.',
    ],
    tryThis: '5 × 3 minutes at 5K effort with 2 minutes jogging recovery.',
  },
  {
    id: 'economy',
    title: 'Running economy',
    topic: 'Physiology',
    summary: 'How much oxygen it costs you to run at a given pace — the hidden third pillar.',
    body: [
      'Running economy is the energy cost of running at a given speed. A more economical runner uses less oxygen at the same pace, so the same engine goes faster.',
      'Economy improves with years of running, with strength and plyometric training (stiffer, springier tendons return more energy), with good mechanics, and with footwear — modern plated, high-rebound shoes measurably lower the cost of running for many athletes.',
      'Economy is why strength training belongs in a runner\'s week: it is one of the few things that reliably improves it without adding running mileage.',
    ],
    keyPoints: [
      'Lower oxygen cost at the same pace = faster for the same effort.',
      'Heavy strength + plyometrics improve it.',
      'Shoes can improve it too.',
    ],
    tryThis: 'Add two short strength sessions a week for 8 weeks and see whether your easy pace drifts faster at the same heart rate.',
  },
  {
    id: 'cadence-form',
    title: 'Cadence and form',
    topic: 'Training',
    summary: 'Small changes in step rate can reduce overstriding; forcing a "perfect" form rarely helps.',
    body: [
      'Cadence is steps per minute. There is no magic number — it rises naturally with speed and varies with height and leg length.',
      'If you overstride (your foot lands well ahead of your body with a straight knee), nudging cadence up by about 5–10% often shortens the stride and reduces loading at the knee and hip.',
      'Beyond that, most form changes are best left to time and strength. Tall posture, relaxed shoulders and a quick, light contact cover most of it.',
    ],
    keyPoints: [
      'No single ideal cadence.',
      'A 5–10% increase can fix overstriding.',
      'Strength and drills shape form better than cues alone.',
    ],
    tryThis: 'Count steps for 30 seconds on an easy run, double it, then try 5% more using a metronome app for a few minutes.',
  },
  {
    id: 'long-run',
    title: 'The long run',
    topic: 'Training',
    summary: 'The weekly long run builds endurance, fuel storage and the mental side of distance.',
    body: [
      'Long runs extend time on feet, deplete and then rebuild glycogen stores, strengthen muscles and connective tissue against fatigue, and teach you to keep form when tired.',
      'A common guideline is for the long run to be around 20–30% of weekly mileage and mostly easy. Marathon builds often add sections at goal pace in the later weeks.',
      'For runs over about 90 minutes, practise fuelling — the gut adapts to taking in carbohydrate on the move.',
    ],
    keyPoints: [
      'Mostly easy effort.',
      'Roughly 20–30% of weekly distance.',
      'Practise race-day fuelling on long runs.',
    ],
    tryThis: 'Finish your next long run with the last 15 minutes at goal race pace.',
  },
  {
    id: 'overload',
    title: 'Progressive overload and building mileage',
    topic: 'Training',
    summary: 'Build gradually, and build in easier weeks.',
    body: [
      'Fitness comes from stress followed by recovery. Increase load gradually so tissues — especially tendons and bones, which adapt more slowly than heart and lungs — can keep up.',
      'The "10% rule" (do not raise weekly mileage more than 10%) is a rough guide rather than a proven law, but sudden spikes in load are consistently linked to injury.',
      'A simple pattern is three weeks building, then one lighter "down" week to absorb the work.',
    ],
    keyPoints: [
      'Avoid sudden spikes in weekly load.',
      'Tendons and bones adapt slower than fitness.',
      'Plan a lighter week every 3–4 weeks.',
    ],
    tryThis: 'Look at your last 4 weeks in the log. If any week jumped far above the others, smooth out the next block.',
  },
  {
    id: 'pacing',
    title: 'Pacing a race',
    topic: 'Racing',
    summary: 'Even or slightly negative splits are usually fastest.',
    body: [
      'Going out too fast costs more later than it saves early, because fatigue builds non-linearly once you pass threshold. Most fast races from 5K to the marathon are run at close to even effort, often with a slightly quicker second half (a negative split).',
      'On hilly courses aim for even effort, not even pace — slower uphill, faster downhill.',
      'Planning splits ahead (which is what the Race Lab is for) stops race-day adrenaline making the decision for you.',
    ],
    keyPoints: [
      'Even effort beats a fast start.',
      'Negative splits are common in fast races.',
      'Plan by effort on hills.',
    ],
    tryThis: 'Build a projection in the Race Lab with the first segment 5 seconds per km slower than goal pace and see what the second half needs.',
  },
  {
    id: 'taper',
    title: 'Tapering',
    topic: 'Racing',
    summary: 'Cut volume, keep some intensity, arrive fresh.',
    body: [
      'A taper reduces training load before a race so accumulated fatigue clears while fitness stays. Research and practice point to cutting volume substantially (often 40–60%) over 1–3 weeks while keeping some short, race-pace work so you stay sharp.',
      'Shorter races need shorter tapers; a marathon usually gets two to three weeks.',
      'Feeling sluggish or restless during a taper is normal.',
    ],
    keyPoints: [
      'Cut volume, not all intensity.',
      '1 week for 5K–10K, 2–3 weeks for a marathon.',
      'Don\'t try to "catch up" on fitness in the taper.',
    ],
    tryThis: 'For your next race, cut the final week\'s distance by about half but keep one short session at race pace.',
  },
  {
    id: 'strength-for-runners',
    title: 'Why runners should lift',
    topic: 'Strength',
    summary: 'Heavy strength and plyometrics improve economy and resilience without extra miles.',
    body: [
      'Studies on trained runners repeatedly find that adding heavy strength work (low reps, heavy loads) and plyometrics improves running economy and late-race performance, usually without weight gain.',
      'Strength also builds tissue capacity: calves, hips and the posterior chain absorb several times body weight with each step. Stronger tissue tolerates mileage better.',
      'Two sessions a week of 20–40 minutes is enough. Prioritise single-leg work, the posterior chain, calves and trunk stability.',
    ],
    keyPoints: [
      '2 sessions a week, 20–40 minutes.',
      'Heavy-ish loads, 3–6 reps for strength.',
      'Single-leg, calves, glutes, hamstrings, trunk.',
    ],
    tryThis: 'Start with the "Runner essentials" in the Training tab: split squats, single-leg deadlifts, calf raises, glute bridges and side bridges.',
  },
  {
    id: 'plyometrics',
    title: 'Plyometrics basics',
    topic: 'Strength',
    summary: 'Short, springy jumps that train tendons to store and return energy.',
    body: [
      'Plyometrics use the stretch-shortening cycle: a muscle-tendon unit is loaded quickly and then rebounds. Running is a chain of these. Training them makes contacts shorter and stiffer, returning more elastic energy.',
      'Quality matters more than quantity. Count foot contacts — beginners might start around 40–60 contacts per session, building gradually. Rest fully between sets.',
      'Progress from two-footed, low-amplitude hops (pogo-style) to bounds, single-leg hops and finally depth jumps. Do them fresh, after a warm-up, not after a hard run.',
    ],
    keyPoints: [
      'Count contacts, not minutes.',
      'Two-footed → single-leg → depth jumps.',
      'Fresh legs, full rest, soft quiet landings.',
    ],
    tryThis: '3 × 10 low, quick two-footed hops, then 3 × 6 lateral bounds each way, twice a week.',
  },
  {
    id: 'recovery',
    title: 'Recovery and sleep',
    topic: 'Recovery',
    summary: 'Adaptation happens between sessions, mostly while you sleep.',
    body: [
      'Training is the stimulus; recovery is when you get fitter. Sleep is the most powerful recovery tool — consistently short sleep is linked to worse performance and higher injury risk.',
      'Eating enough, especially carbohydrate and protein around hard sessions, matters more than gadgets. Chronic under-fuelling harms bones, hormones and performance.',
      'Easy days, rest days and down weeks are part of the plan, not a break from it.',
    ],
    keyPoints: [
      'Aim for 7–9 hours of sleep.',
      'Fuel hard days; don\'t chronically under-eat.',
      'Rest days are training.',
    ],
    tryThis: 'Log how you slept the night before your next three hard sessions and compare how they went.',
  },
  {
    id: 'heat',
    title: 'Running in heat and humidity',
    topic: 'Recovery',
    summary: 'Hot, humid conditions slow everyone. Adjust pace, hydrate and acclimatise.',
    body: [
      'In heat, blood is shared between working muscles and the skin for cooling, so the same pace costs more. Humidity makes it worse because sweat evaporates less and cools you less.',
      'Expect slower paces at the same effort and run by effort or heart rate. Run early or late, drink to thirst on shorter runs and plan fluids and electrolytes for longer ones.',
      'Heat acclimatisation takes roughly 1–2 weeks of regular exposure and improves sweating and blood volume.',
    ],
    keyPoints: [
      'Run by effort in heat.',
      'Early mornings are your friend.',
      'Plan fluids and salt for long runs.',
    ],
    tryThis: 'Compare your easy pace on a cool morning with a hot afternoon at the same effort.',
  },
]
