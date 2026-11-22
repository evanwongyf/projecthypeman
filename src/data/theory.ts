/**
 * Running theory for the Archive.
 *
 * Plain-language summaries of mainstream coaching and sports-science
 * consensus, each with the technical terms explained, the maths where there
 * is any, and the studies it leans on. A starting point, not medical advice.
 *
 * `visual` names an interactive chart or calculator rendered by
 * components/running/TheoryVisuals.tsx.
 */

export type Topic = 'Physiology' | 'Training' | 'Racing' | 'Strength' | 'Biomechanics' | 'Nutrition' | 'Recovery' | 'Health'

export type TheoryArticle = {
  id: string
  title: string
  topic: Topic
  summary: string
  sections: { heading: string; body: string[] }[]
  terms: { term: string; def: string }[]
  maths?: { title: string; lines: string[]; note?: string }[]
  visual?: 'hr-zones' | 'ramp' | 'taper' | 'carbs' | 'sweat' | 'cadence' | 'energy-availability'
  keyPoints: string[]
  tryThis: string
  references: string[]
}

export const THEORY: TheoryArticle[] = [
  // ------------------------------------------------------------------ Physiology
  {
    id: 'energy-systems',
    title: 'Energy systems: where running fuel comes from',
    topic: 'Physiology',
    summary: 'Three pathways make ATP. How long and how hard you run decides which one leads.',
    sections: [
      {
        heading: 'ATP is the only currency',
        body: [
          'Muscles can only contract by splitting adenosine triphosphate (ATP). The body stores just a few seconds\' worth, so it has to rebuild ATP continuously. Three systems do this, and they all run at once — what changes is the share each one supplies.',
        ],
      },
      {
        heading: 'The three systems',
        body: [
          'Phosphocreatine (PCr): creatine phosphate donates its phosphate to rebuild ATP almost instantly. It is the most powerful system but empties in roughly 10 seconds of all-out effort — the energy behind a sprint start or a hill sprint.',
          'Anaerobic glycolysis: glucose is broken down to pyruvate without needing oxygen, yielding ATP fast but in small amounts. When pyruvate is produced faster than mitochondria can take it, it is converted to lactate. Dominant from roughly 10 seconds to 2 minutes of hard effort.',
          'Aerobic (oxidative) metabolism: carbohydrate and fat are fully oxidised in the mitochondria using oxygen. It is slower to ramp up but yields far more ATP per molecule and can run for hours. Even in an 800 m race it supplies over half the energy; in a 5K it is around 90% or more; in a marathon almost all of it.',
        ],
      },
      {
        heading: 'Why this matters for training',
        body: [
          'Because distance running is overwhelmingly aerobic, most training targets the aerobic system: its capacity (VO₂max), how much of it you can use (threshold), and how efficiently you use it (economy). Short sprints and strides keep the PCr system and neuromuscular power sharp without much fatigue.',
        ],
      },
    ],
    terms: [
      { term: 'ATP', def: 'Adenosine triphosphate — the molecule whose breakdown powers muscle contraction.' },
      { term: 'Mitochondria', def: 'Structures inside cells where aerobic metabolism happens. Endurance training increases their number and size.' },
      { term: 'Glycolysis', def: 'The breakdown of glucose to pyruvate, releasing a little ATP quickly.' },
      { term: 'Lactate', def: 'Produced from pyruvate when glycolysis outpaces the mitochondria. It is a fuel, not a waste product, and is not the cause of next-day soreness.' },
    ],
    maths: [
      {
        title: 'ATP yield per glucose',
        lines: ['Anaerobic glycolysis: ~2 ATP per glucose', 'Full aerobic oxidation: ~30–32 ATP per glucose'],
        note: 'That roughly fifteen-fold difference is why the aerobic system dominates anything longer than a couple of minutes.',
      },
    ],
    keyPoints: ['All three systems work together; intensity and duration shift the mix.', 'Races of 5K and longer are about 90%+ aerobic.', 'Lactate is a fuel and a signal, not a poison.'],
    tryThis: 'Add 6 × 10-second hill sprints with full recovery to one easy run a week — that trains the PCr system with almost no fatigue.',
    references: [
      'Gastin PB (2001). Energy system interaction and relative contribution during maximal exercise. Sports Medicine.',
      'Holloszy JO, Coyle EF (1984). Adaptations of skeletal muscle to endurance exercise and their metabolic consequences. Journal of Applied Physiology.',
    ],
  },
  {
    id: 'aerobic-base',
    title: 'The aerobic base and easy running',
    topic: 'Physiology',
    summary: 'Most of your running should feel easy. That is where the engine is built.',
    sections: [
      {
        heading: 'What easy running builds',
        body: [
          'Easy running grows the structures that deliver and use oxygen: more capillaries around each muscle fibre, more and larger mitochondria, higher activity of aerobic enzymes, more stored glycogen, and a heart that pumps more blood per beat (a larger stroke volume). These changes accumulate over months and years.',
          'Because the stimulus is volume rather than intensity, the way to get more of it is to run more easy kilometres — not to run easy days faster.',
        ],
      },
      {
        heading: 'The cost of running easy days too hard',
        body: [
          'Running "moderately hard" every day adds fatigue without adding much extra aerobic stimulus. The fatigue then blunts the quality of the genuinely hard sessions that build threshold and VO₂max. This is the "grey zone" problem described in intensity-distribution research.',
        ],
      },
      {
        heading: 'How easy is easy?',
        body: [
          'A practical test is the talk test: you can speak in full sentences. Physiologically this is below the first ventilatory or lactate threshold (VT1/LT1), typically under about 75–80% of maximum heart rate for most runners.',
        ],
      },
    ],
    terms: [
      { term: 'Stroke volume', def: 'The amount of blood the heart pumps with each beat. Endurance training increases it.' },
      { term: 'Capillary density', def: 'How many tiny blood vessels surround each muscle fibre; more capillaries means better oxygen delivery.' },
      { term: 'VT1 / LT1', def: 'The first ventilatory or lactate threshold — the upper edge of truly easy running, where breathing and lactate first rise.' },
    ],
    keyPoints: ['Easy = full sentences.', 'Aerobic adaptations come from volume at low intensity.', 'Keep easy days easy so hard days can be hard.'],
    tryThis: 'Run your next easy day purely by the talk test and note the pace. It is probably slower than you expected — that is normal.',
    references: [
      'Seiler S (2010). What is best practice for training intensity and duration distribution in endurance athletes? International Journal of Sports Physiology and Performance.',
      'Holloszy JO, Coyle EF (1984). Adaptations of skeletal muscle to endurance exercise and their metabolic consequences. Journal of Applied Physiology.',
    ],
  },
  {
    id: 'heart-rate',
    title: 'Heart rate and training zones',
    topic: 'Physiology',
    summary: 'Heart rate is a window into effort. Zones turn it into a training language.',
    sections: [
      {
        heading: 'Why heart rate tracks effort',
        body: [
          'Your heart rate rises with oxygen demand, so for steady running it is a decent proxy for intensity. It lags behind sudden changes by 30–60 seconds, so it is better for steady runs than for short intervals.',
          'Heat, dehydration, poor sleep, illness and caffeine all raise heart rate at the same pace. Over a long run it also drifts upward ("cardiac drift") as you warm up and lose fluid.',
        ],
      },
      {
        heading: 'Maximum heart rate',
        body: [
          'The old "220 minus age" formula is a rough guess with a large spread. The Tanaka formula fits population data better, but any individual can be 10+ beats above or below it. A hard race or an all-out hill effort near the end of a session gives a better personal estimate.',
        ],
      },
      {
        heading: 'Heart-rate reserve (Karvonen)',
        body: [
          'Heart-rate reserve is the gap between resting and maximum. Expressing zones as a percentage of reserve, rather than of maximum, accounts for differences in resting heart rate and usually matches effort better.',
        ],
      },
    ],
    terms: [
      { term: 'HRmax', def: 'The highest heart rate you can reach. Largely genetic and declines with age; training barely changes it.' },
      { term: 'HRrest', def: 'Heart rate at complete rest, best measured on waking. It falls as fitness rises.' },
      { term: 'HRR', def: 'Heart-rate reserve: HRmax − HRrest.' },
      { term: 'Cardiac drift', def: 'The slow rise in heart rate at a constant pace over a long run, mostly from heat and fluid loss.' },
    ],
    maths: [
      { title: 'Maximum heart rate (Tanaka)', lines: ['HRmax ≈ 208 − 0.7 × age'] },
      { title: 'Target heart rate (Karvonen)', lines: ['Target = HRrest + intensity × (HRmax − HRrest)'], note: 'Example: age 30, resting 55 → HRmax ≈ 187, HRR = 132. At 70% intensity: 55 + 0.7 × 132 ≈ 147 bpm.' },
    ],
    visual: 'hr-zones',
    keyPoints: ['Use HRR (Karvonen) zones rather than % of max where you can.', 'Formulas only estimate HRmax; measure it if you can.', 'Expect heart rate to read higher in heat.'],
    tryThis: 'Measure your resting heart rate on waking for five days and use the average in the zone calculator.',
    references: [
      'Tanaka H, Monahan KD, Seals DR (2001). Age-predicted maximal heart rate revisited. Journal of the American College of Cardiology.',
      'Karvonen MJ, Kentala E, Mustala O (1957). The effects of training on heart rate; a longitudinal study. Annales Medicinae Experimentalis et Biologiae Fenniae.',
    ],
  },
  {
    id: 'threshold',
    title: 'Lactate threshold and tempo running',
    topic: 'Physiology',
    summary: 'Threshold is the fastest pace you can hold before fatigue starts snowballing.',
    sections: [
      {
        heading: 'Two thresholds',
        body: [
          'Physiologists describe two turn points. The first (LT1/VT1) is where lactate first rises above resting levels — the top of easy running. The second (LT2/VT2, often just called "the threshold") is the highest intensity at which lactate production and clearance stay in balance. Above it, lactate and the associated acidosis climb steadily until you must slow down.',
          'Closely related ideas include the maximal lactate steady state (MLSS) and critical speed. They are measured differently but all mark the boundary between sustainable and unsustainable effort.',
        ],
      },
      {
        heading: 'What it feels like and where it sits',
        body: [
          'For trained runners threshold pace is roughly what they could race for about an hour — between 10K and half-marathon pace for many. It feels "comfortably hard": you can say a few words, not sentences.',
          'In blood terms it is often around 2–4 mmol/L of lactate, but the exact value varies a lot between people, which is why fixed numbers like "4 mmol" are only a rough guide.',
        ],
      },
      {
        heading: 'Training it',
        body: [
          'Continuous tempo runs (20–40 minutes) and cruise intervals (e.g. 5 × 6 minutes with a 1-minute jog) accumulate time near threshold. Over weeks, the threshold shifts to a faster pace and a higher fraction of VO₂max, which is a main driver of improvement from 10K to marathon.',
        ],
      },
    ],
    terms: [
      { term: 'LT2 / VT2', def: 'Second lactate or ventilatory threshold; the boundary between sustainable and unsustainable effort.' },
      { term: 'MLSS', def: 'Maximal lactate steady state — the highest intensity at which blood lactate stays stable over 30 minutes.' },
      { term: 'Critical speed', def: 'The asymptote of the speed–duration relationship; above it, fatigue accumulates to exhaustion.' },
      { term: 'mmol/L', def: 'Millimoles per litre — the unit for blood lactate concentration.' },
    ],
    keyPoints: ['Threshold ≈ one-hour race effort, "comfortably hard".', 'Train it with tempos and cruise intervals.', 'Thresholds vary between people; use feel and pace, not fixed lactate numbers.'],
    tryThis: 'After a warm-up, run 3 × 10 minutes at comfortably-hard effort with 2 minutes easy jogging between.',
    references: [
      'Faude O, Kindermann W, Meyer T (2009). Lactate threshold concepts: how valid are they? Sports Medicine.',
      'Jones AM, Vanhatalo A, Burnley M, Morton RH, Poole DC (2010). Critical power: implications for determination of VO₂max and exercise tolerance. Medicine & Science in Sports & Exercise.',
    ],
  },
  {
    id: 'vo2max',
    title: 'VO₂max and intervals',
    topic: 'Physiology',
    summary: 'VO₂max is your ceiling for using oxygen. Hard intervals lift it.',
    sections: [
      {
        heading: 'What VO₂max is',
        body: [
          'VO₂max is the maximum rate at which your body takes up and uses oxygen, usually expressed in millilitres per kilogram of body mass per minute (ml/kg/min). Untrained adults are often 30–45; trained recreational runners 50–60; elite distance runners 70–85.',
          'It is limited mostly by how much oxygen-rich blood the heart can pump (cardiac output), with smaller contributions from blood haemoglobin and the muscles\' ability to extract oxygen.',
        ],
      },
      {
        heading: 'Training it',
        body: [
          'Intervals of about 2–5 minutes at 3K–5K race effort, with recoveries about equal to the work, spend a lot of time near VO₂max. Shorter formats like 30/30s (30 seconds hard, 30 easy) do the same with less discomfort per rep.',
          'VO₂max responds fairly quickly (weeks) but plateaus; after that, threshold and economy usually drive further gains.',
        ],
      },
      {
        heading: 'Estimating it without a lab',
        body: [
          'Field estimates are rough but useful for tracking change: the Cooper 12-minute test, the heart-rate ratio method, or VDOT from a recent race (see the Economy maths tab).',
        ],
      },
    ],
    terms: [
      { term: 'ml/kg/min', def: 'Millilitres of oxygen per kilogram of body mass per minute — the standard VO₂ unit.' },
      { term: 'Cardiac output', def: 'Heart rate × stroke volume: litres of blood pumped per minute.' },
      { term: 'vVO₂max', def: 'The slowest speed that elicits VO₂max — roughly 3K race pace for trained runners.' },
    ],
    maths: [
      { title: 'Cooper 12-minute test', lines: ['VO₂max ≈ (d − 504.9) ÷ 44.73', 'd = metres covered in 12 minutes'], note: 'Example: 2,800 m → (2800 − 504.9) ÷ 44.73 ≈ 51 ml/kg/min.' },
      { title: 'Heart-rate ratio method (Uth)', lines: ['VO₂max ≈ 15.3 × HRmax ÷ HRrest'], note: 'Example: HRmax 190, HRrest 50 → 15.3 × 3.8 ≈ 58 ml/kg/min. Accuracy is about ±10%.' },
    ],
    keyPoints: ['VO₂max is mainly limited by the heart.', 'Intervals at 3K–5K effort raise it.', 'Once it plateaus, threshold and economy matter more.'],
    tryThis: '5 × 3 minutes at 5K effort with 2–3 minutes of jogging, once a week for six weeks.',
    references: [
      'Bassett DR, Howley ET (2000). Limiting factors for maximum oxygen uptake and determinants of endurance performance. Medicine & Science in Sports & Exercise.',
      'Cooper KH (1968). A means of assessing maximal oxygen intake. JAMA.',
      'Uth N, Sørensen H, Overgaard K, Pedersen PK (2004). Estimation of VO₂max from the ratio between HRmax and HRrest – the Heart Rate Ratio Method. European Journal of Applied Physiology.',
      'Billat LV (2001). Interval training for performance: a scientific and empirical practice. Sports Medicine.',
    ],
  },
  {
    id: 'economy',
    title: 'Running economy',
    topic: 'Physiology',
    summary: 'How much oxygen it costs you to run at a given pace — the third pillar of performance.',
    sections: [
      {
        heading: 'Definition',
        body: [
          'Running economy is the steady-state oxygen cost of running at a given speed. Trained runners use roughly 180–220 ml of O₂ per kg per km. A runner who uses less at the same speed has more "room" below their VO₂max and threshold.',
          'Economy explains why runners with similar VO₂max values can race very differently. Some elite East African runners have been measured with notably good economy, which helps explain world-class times with VO₂max values that are high but not extreme.',
        ],
      },
      {
        heading: 'What improves it',
        body: [
          'Years of consistent running; heavy strength and plyometric training (stiffer, springier tendons return more elastic energy); running more at race pace; reduced body mass where appropriate; and footwear — lighter shoes with high-rebound foam and stiff plates measurably lower the cost of running.',
          'The full maths, with calculators, is in the Economy maths tab.',
        ],
      },
    ],
    terms: [
      { term: 'Steady state', def: 'A constant effort where oxygen uptake has levelled off, usually after 3–4 minutes.' },
      { term: 'Elastic energy return', def: 'Energy stored in stretched tendons (especially the Achilles) and released at push-off, reducing the work muscles must do.' },
    ],
    maths: [{ title: 'Joyner\'s model', lines: ['Race speed ≈ VO₂max × fraction sustained ÷ cost per metre'] }],
    keyPoints: ['Economy is oxygen cost per distance.', 'Strength, plyometrics, race-pace running and shoes improve it.', 'It is as important as VO₂max.'],
    tryThis: 'Open the Economy maths tab and see what a 3% economy gain would do to your current race time.',
    references: [
      'Barnes KR, Kilding AE (2015). Running economy: measurement, norms, and determining factors. Sports Medicine – Open.',
      'Joyner MJ (1991). Modeling: optimal marathon performance on the basis of physiological factors. Journal of Applied Physiology.',
    ],
  },

  // ------------------------------------------------------------------ Training
  {
    id: 'intensity-distribution',
    title: 'Training intensity distribution (80/20)',
    topic: 'Training',
    summary: 'How elite endurance athletes split their time between easy, moderate and hard.',
    sections: [
      {
        heading: 'The three-zone model',
        body: [
          'Researchers often divide intensity into three zones using the two thresholds: Zone 1 below LT1 (easy), Zone 2 between LT1 and LT2 (moderate, "threshold-ish"), and Zone 3 above LT2 (hard). Note this differs from five-zone heart-rate systems, where "Zone 2" means easy.',
        ],
      },
      {
        heading: 'What elites do',
        body: [
          'Studies of elite runners, rowers, skiers and cyclists find they spend roughly 75–80% of sessions in Zone 1, with the rest split between Zones 2 and 3. Some follow a "polarised" pattern (very little Zone 2); others a "pyramidal" one (more Zone 2 than Zone 3, as with threshold-heavy approaches such as the Norwegian model). Both share a large easy base.',
          'Recreational runners often do the opposite — most runs at a moderate effort — which limits both recovery and quality.',
        ],
      },
    ],
    terms: [
      { term: 'Polarised', def: 'Mostly easy plus some hard, with little moderate work.' },
      { term: 'Pyramidal', def: 'Mostly easy, a moderate amount of threshold, and a little very hard work.' },
      { term: 'Grey zone', def: 'Moderate efforts that are too hard to recover from easily but not hard enough to be quality sessions.' },
    ],
    keyPoints: ['About 80% easy is the common thread.', 'Polarised and pyramidal both work.', 'Beware the grey zone on easy days.'],
    tryThis: 'Tag every run in your log this week as easy, moderate or hard and count the split.',
    references: [
      'Seiler S (2010). What is best practice for training intensity and duration distribution in endurance athletes? International Journal of Sports Physiology and Performance.',
      'Stöggl T, Sperlich B (2014). Polarized training has greater impact on key endurance variables than threshold, high intensity, or high volume training. Frontiers in Physiology.',
    ],
  },
  {
    id: 'long-run',
    title: 'The long run',
    topic: 'Training',
    summary: 'The weekly long run builds endurance, fuel storage and the mental side of distance.',
    sections: [
      {
        heading: 'What it does',
        body: [
          'Long runs extend time on feet, stimulate mitochondrial and capillary growth, deplete glycogen (which signals the body to store more), strengthen muscles, tendons and bones against fatigue, and teach you to keep form when tired. They also build fat-oxidation capacity, sparing glycogen at race pace.',
        ],
      },
      {
        heading: 'How long and how fast',
        body: [
          'A common guideline is 20–30% of weekly distance, mostly at easy effort. Marathon builds often add segments at goal pace in the final 6–8 weeks. Beyond about 2.5–3 hours, the extra benefit shrinks while recovery cost rises, which is why many plans cap long runs by time rather than distance.',
          'For runs over about 90 minutes, practise race fuelling: the gut adapts to absorbing carbohydrate on the move.',
        ],
      },
    ],
    terms: [
      { term: 'Glycogen', def: 'Stored carbohydrate in muscle and liver; the main fuel at race pace.' },
      { term: 'Fat oxidation', def: 'Burning fat for energy; higher capacity spares glycogen.' },
    ],
    keyPoints: ['Mostly easy, 20–30% of weekly distance.', 'Cap by time (≈2.5–3 h) for most runners.', 'Practise fuelling on long runs.'],
    tryThis: 'Finish your next long run with the last 15 minutes at goal race pace and practise your race-day gels.',
    references: ['Midgley AW, McNaughton LR, Jones AM (2007). Training to enhance the physiological determinants of long-distance running performance. Sports Medicine.'],
  },
  {
    id: 'overload',
    title: 'Progressive overload and building mileage',
    topic: 'Training',
    summary: 'Build gradually, and build in easier weeks.',
    sections: [
      {
        heading: 'Stress, recovery, adaptation',
        body: [
          'Fitness comes from applying a stress and recovering from it (sometimes called supercompensation). Increase load gradually so tissues — especially tendons and bones, which adapt more slowly than heart and lungs — can keep up.',
        ],
      },
      {
        heading: 'The 10% rule and what research says',
        body: [
          'The "10% rule" (don\'t raise weekly distance more than 10%) is a convention, not a proven law: a trial in novice runners found a gentler 10% programme did not reduce injuries compared with a faster one. However, a cohort study found novices who increased weekly distance by more than 30% over two weeks were more prone to certain injuries. Sudden spikes are the consistent warning sign.',
          'The acute:chronic workload ratio (ACWR) compares the last week\'s load with the average of the last four. Ratios well above about 1.5 were linked to injury in team sports, though the method has been heavily criticised statistically, so treat it as a rough check, not a predictor.',
        ],
      },
      {
        heading: 'Down weeks',
        body: ['A simple pattern is three weeks building then one lighter week (around 20–30% less) to absorb the work.'],
      },
    ],
    terms: [
      { term: 'Supercompensation', def: 'The idea that, after recovery, the body rebounds to a slightly higher capacity than before the stress.' },
      { term: 'ACWR', def: 'Acute:chronic workload ratio — last 7 days\' load ÷ the 28-day weekly average.' },
      { term: 'Down week', def: 'A planned lower-volume week to consolidate adaptation.' },
    ],
    maths: [
      { title: 'Compounding growth', lines: ['Week n distance = start × 1.10ⁿ'], note: '30 km rising 10% a week reaches ≈ 78 km after 10 weeks — which is why down weeks and plateaus matter.' },
      { title: 'Acute:chronic ratio', lines: ['ACWR = this week\'s distance ÷ average of last 4 weeks'] },
    ],
    visual: 'ramp',
    keyPoints: ['Avoid sudden spikes in load.', 'Tendons and bones adapt slower than fitness.', 'Plan a lighter week every 3–4 weeks.'],
    tryThis: 'Compare this week\'s distance with the average of your last four weeks. If it is far above 1.3–1.5×, smooth the next block.',
    references: [
      'Buist I et al. (2008). No effect of a graded training program on the number of running-related injuries in novice runners. American Journal of Sports Medicine.',
      'Nielsen RO et al. (2014). Excessive progression in weekly running distance and risk of running-related injuries. Journal of Orthopaedic & Sports Physical Therapy.',
      'Gabbett TJ (2016). The training–injury prevention paradox. British Journal of Sports Medicine.',
      'Impellizzeri FM et al. (2020). Acute:chronic workload ratio: conceptual issues and fundamental pitfalls. International Journal of Sports Physiology and Performance.',
    ],
  },
  {
    id: 'periodisation',
    title: 'Periodisation: organising a season',
    topic: 'Training',
    summary: 'Arrange training in phases so fitness peaks when it matters.',
    sections: [
      {
        heading: 'Cycles within cycles',
        body: [
          'A macrocycle is the whole season or year. It is divided into mesocycles of 3–6 weeks with a particular focus, which are made of microcycles — usually a week.',
          'Traditional (linear) periodisation moves from high volume and low intensity to lower volume and higher intensity. Arthur Lydiard\'s model is the classic running version: aerobic base → hills → anaerobic and track work → sharpening → taper and racing.',
        ],
      },
      {
        heading: 'Block periodisation',
        body: [
          'Block periodisation concentrates on a few qualities at a time in shorter blocks, which suits advanced athletes who need a bigger stimulus to keep adapting. Most recreational runners do well with a simple base–build–peak–taper structure.',
        ],
      },
    ],
    terms: [
      { term: 'Macrocycle', def: 'A season or training year.' },
      { term: 'Mesocycle', def: 'A training block of a few weeks with one main aim.' },
      { term: 'Microcycle', def: 'A short repeating unit, usually one week.' },
    ],
    keyPoints: ['Base, build, peak, taper.', 'Each block has one or two main aims.', 'Down weeks sit between blocks.'],
    tryThis: 'Count back from your goal race: 2–3 weeks of taper, 6–8 of race-specific work, and the rest as base.',
    references: ['Issurin VB (2010). New horizons for the methodology and physiology of training periodization. Sports Medicine.'],
  },

  // ------------------------------------------------------------------ Biomechanics
  {
    id: 'biomechanics',
    title: 'Running biomechanics, cadence and form',
    topic: 'Biomechanics',
    summary: 'Speed is cadence × stride length. Small changes in step rate can reduce overstriding.',
    sections: [
      {
        heading: 'The two levers of speed',
        body: [
          'Every running speed is the product of how many steps you take per minute (cadence) and how far each step travels (step length). Runners speed up mostly by lengthening the step at slower paces and by increasing cadence at faster ones.',
        ],
      },
      {
        heading: 'Ground contact and leg stiffness',
        body: [
          'The leg behaves much like a spring: it compresses on landing and recoils at push-off. Ground contact time (GCT) is typically 200–300 ms for recreational runners and under 200 ms for fast runners at speed. Stiffer, quicker contacts — trained by plyometrics — return more elastic energy.',
          'Vertical oscillation is how much your centre of mass rises and falls each step. Some bounce is necessary; excessive bounce wastes energy.',
        ],
      },
      {
        heading: 'Overstriding and cadence',
        body: [
          'Overstriding means landing with the foot well ahead of the body and a straight knee, which increases braking and loading at the knee. Increasing cadence by 5–10% shortens the step and has been shown to reduce loads at the knee and hip.',
          'There is no universal ideal cadence — the often-quoted 180 steps per minute came from observing elite runners at race pace. Taller runners and slower paces naturally have lower cadences.',
        ],
      },
      {
        heading: 'Foot strike',
        body: [
          'Heel, midfoot and forefoot strikes shift load around the body rather than eliminating it: forefoot striking loads the calf and Achilles more; heel striking loads the knee more. There is no strong evidence that changing strike pattern on its own prevents injury or improves economy, so most runners should leave it alone.',
        ],
      },
    ],
    terms: [
      { term: 'Cadence', def: 'Steps per minute (both feet counted).' },
      { term: 'Step length', def: 'Distance from one foot contact to the next foot\'s contact.' },
      { term: 'GCT', def: 'Ground contact time — how long the foot is on the ground each step.' },
      { term: 'Vertical oscillation', def: 'The up-and-down movement of the body\'s centre of mass per step.' },
      { term: 'Leg stiffness', def: 'Peak force ÷ how much the leg compresses; higher stiffness means a springier stride.' },
    ],
    maths: [
      { title: 'Speed from cadence and step length', lines: ['Speed (m/min) = cadence (steps/min) × step length (m)', 'Pace (min/km) = 1000 ÷ speed'], note: 'Example: 170 steps/min × 1.10 m = 187 m/min → 5:21 per km.' },
    ],
    visual: 'cadence',
    keyPoints: ['Speed = cadence × step length.', 'A 5–10% cadence increase can fix overstriding.', 'Do not force a change of foot strike.'],
    tryThis: 'Count your steps for 30 seconds on an easy run, double it, then try 5% more using a metronome app for a few minutes.',
    references: [
      'Heiderscheit BC et al. (2011). Effects of step rate manipulation on joint mechanics during running. Medicine & Science in Sports & Exercise.',
      'Daoud AI et al. (2012). Foot strike and injury rates in endurance runners: a retrospective study. Medicine & Science in Sports & Exercise.',
    ],
  },

  // ------------------------------------------------------------------ Racing
  {
    id: 'pacing',
    title: 'Pacing a race',
    topic: 'Racing',
    summary: 'Even or slightly negative splits are usually fastest.',
    sections: [
      {
        heading: 'Why a fast start costs you',
        body: [
          'Above threshold, fatigue accumulates rapidly and non-linearly. Banking time early pushes you above your sustainable intensity, so the slow-down later costs more than the time gained. Analyses of marathon world records show remarkably even pacing, often with a slightly faster second half (a negative split).',
        ],
      },
      {
        heading: 'Hills, wind and heat',
        body: [
          'On hilly courses aim for even effort, not even pace — slower uphill, a little faster downhill. Into a headwind, tuck in behind other runners: drafting reduces air resistance. In heat, start more conservatively.',
        ],
      },
    ],
    terms: [
      { term: 'Split', def: 'Time for a section of a race.' },
      { term: 'Negative split', def: 'The second half is faster than the first.' },
      { term: 'Positive split', def: 'The second half is slower than the first.' },
    ],
    maths: [{ title: 'Split ratio', lines: ['Split ratio = second-half time ÷ first-half time', '< 1 negative split · = 1 even · > 1 positive'] }],
    keyPoints: ['Even effort beats a fast start.', 'Pace hills by effort.', 'Plan splits in the Race Lab before race day.'],
    tryThis: 'Build a Race Lab projection with the first segment 5 s/km slower than goal pace and see what the rest needs.',
    references: [
      'Abbiss CR, Laursen PB (2008). Describing and understanding pacing strategies during athletic competition. Sports Medicine.',
      'Díaz JJ, Fernández-Ozcorta EJ, Santos-Concejero J (2018). The influence of pacing strategy on marathon world records. European Journal of Sport Science.',
    ],
  },
  {
    id: 'taper',
    title: 'Tapering',
    topic: 'Racing',
    summary: 'Cut volume, keep some intensity, arrive fresh.',
    sections: [
      {
        heading: 'What the evidence says',
        body: [
          'A meta-analysis of tapering studies found the best results came from a taper of about two weeks with training volume cut by roughly 41–60%, while keeping intensity and session frequency. Cutting intensity, or cutting frequency too much, tended to blunt the benefit.',
          'A well-executed taper typically improves performance by around 2–3% compared with racing without one — fatigue clears faster than fitness fades.',
        ],
      },
      {
        heading: 'Practical shape',
        body: [
          'Shorter races need shorter tapers (about a week for 5K–10K); marathons usually get two to three weeks. Keep short race-pace sessions, cut the long run and total distance, and prioritise sleep and carbohydrate.',
        ],
      },
    ],
    terms: [
      { term: 'Taper', def: 'A planned reduction in training before a key race.' },
      { term: 'Detraining', def: 'Loss of fitness from reduced training — much slower than fatigue recovery over 1–3 weeks.' },
    ],
    visual: 'taper',
    keyPoints: ['Cut volume 40–60%, keep intensity.', 'About 2 weeks for most races; up to 3 for a marathon.', 'Feeling sluggish in a taper is normal.'],
    tryThis: 'For your next race, halve the final week\'s distance but keep one short session at race pace.',
    references: ['Bosquet L, Montpetit J, Arvisais D, Mujika I (2007). Effects of tapering on performance: a meta-analysis. Medicine & Science in Sports & Exercise.'],
  },
  {
    id: 'race-prediction',
    title: 'Predicting race times',
    topic: 'Racing',
    summary: 'How Riegel and VDOT turn one result into a forecast — and where they break down.',
    sections: [
      {
        heading: 'Why prediction is possible',
        body: [
          'Speed falls predictably as race duration rises because the fraction of VO₂max you can sustain falls with time. Both the Riegel formula and Daniels\' VDOT tables model that curve.',
        ],
      },
      {
        heading: 'Where predictions fail',
        body: [
          'Predictions assume you are equally trained for both distances. A runner with a strong 5K but little long-run training will usually run slower than predicted in a marathon, because endurance and fuelling limit the longer race. Heat, hills and pacing errors also break predictions.',
        ],
      },
    ],
    terms: [
      { term: 'VDOT', def: 'Daniels\' "effective VO₂max" derived from a race time; it bundles in economy.' },
      { term: 'Riegel exponent', def: 'The 1.06 in Riegel\'s formula, describing how much you slow as distance grows.' },
    ],
    maths: [{ title: 'Riegel', lines: ['T₂ = T₁ × (D₂ ÷ D₁)^1.06'], note: 'A 25:00 5K predicts 25 × (21.0975 ÷ 5)^1.06 ≈ 1:55:00 for a half marathon.' }],
    keyPoints: ['Predictions need matching training.', 'Marathon predictions from short races are usually optimistic.', 'Use them to set paces, not promises.'],
    tryThis: 'Enter a recent race in the VDOT calculator in Economy maths and compare its marathon prediction with Riegel\'s.',
    references: [
      'Riegel PS (1981). Athletic records and human endurance. American Scientist.',
      'Daniels J, Gilbert J (1979). Oxygen Power: Performance Tables for Distance Runners.',
    ],
  },
  {
    id: 'mental',
    title: 'The mental side of endurance',
    topic: 'Racing',
    summary: 'Perceived effort limits performance — and it can be trained.',
    sections: [
      {
        heading: 'Effort is a perception',
        body: [
          'The psychobiological model of endurance argues that you usually stop or slow because perceived effort reaches the maximum you are willing to tolerate, rather than because muscles physically cannot continue. Anything that lowers perceived effort at the same pace can improve performance.',
        ],
      },
      {
        heading: 'Tools with evidence',
        body: [
          'Motivational self-talk: in one study, two weeks of practising self-talk lowered perceived effort and extended time to exhaustion in a cycling test. Other useful tools include breaking a race into segments, rehearsing difficult moments, and attentional strategies (focusing on form or rhythm when it hurts).',
        ],
      },
    ],
    terms: [
      { term: 'RPE', def: 'Rating of perceived exertion — how hard an effort feels, often on a 6–20 or 1–10 scale.' },
      { term: 'Self-talk', def: 'Deliberate phrases you say to yourself to manage effort and focus.' },
    ],
    keyPoints: ['Perceived effort is a key limiter.', 'Practise self-talk in training, not just on race day.', 'Chunk races into manageable pieces.'],
    tryThis: 'Pick two short phrases ("relax and roll", "strong and smooth") and use them in the hardest rep of your next workout.',
    references: [
      'Marcora SM, Staiano W (2010). The limit to exercise tolerance in humans: mind over muscle? European Journal of Applied Physiology.',
      'Blanchfield AW et al. (2014). Talking yourself out of exhaustion: the effects of self-talk on endurance performance. Medicine & Science in Sports & Exercise.',
    ],
  },

  // ------------------------------------------------------------------ Strength
  {
    id: 'strength-for-runners',
    title: 'Why runners should lift',
    topic: 'Strength',
    summary: 'Heavy strength and plyometrics improve economy and resilience without extra kilometres.',
    sections: [
      {
        heading: 'The evidence',
        body: [
          'In a controlled study, eight weeks of heavy half-squats (4 × 4 at a heavy load, three times a week) improved running economy by about 5% and time to exhaustion at maximal aerobic speed, with no change in body mass. Another study replaced part of runners\' training with explosive strength work and found 5K times and economy improved.',
          'A systematic review concluded that strength training — heavy, explosive or plyometric — generally improves running economy and time-trial performance in middle- and long-distance runners.',
        ],
      },
      {
        heading: 'How it works',
        body: [
          'Heavier lifting improves the nervous system\'s ability to recruit muscle quickly (neuromuscular adaptations) and increases tendon stiffness, so each stride returns more elastic energy. Stronger tissue also tolerates the repetitive loading of running better.',
        ],
      },
      {
        heading: 'How to programme it',
        body: [
          'Two sessions a week of 20–40 minutes is enough. Early on, use moderate loads to learn technique; then progress to heavy sets of 3–6 reps (leaving one or two in reserve). Prioritise single-leg work, the posterior chain (glutes, hamstrings), calves and trunk stability. In race weeks, keep a short maintenance session.',
        ],
      },
    ],
    terms: [
      { term: 'Neuromuscular adaptation', def: 'Improvements in how the nervous system recruits and coordinates muscle, often before muscles grow.' },
      { term: 'Reps in reserve (RIR)', def: 'How many more reps you could have done at the end of a set.' },
      { term: 'Posterior chain', def: 'The muscles on the back of the body — glutes, hamstrings, calves and back.' },
    ],
    keyPoints: ['2 sessions a week.', 'Heavy-ish loads, 3–6 reps once technique is solid.', 'Single-leg, calves, glutes, hamstrings, trunk.'],
    tryThis: 'Start with the "Runner essentials" in the Strength & plyo tab.',
    references: [
      'Støren Ø, Helgerud J, Støa EM, Hoff J (2008). Maximal strength training improves running economy in distance runners. Medicine & Science in Sports & Exercise.',
      'Paavolainen L et al. (1999). Explosive-strength training improves 5-km running time by improving running economy and muscle power. Journal of Applied Physiology.',
      'Blagrove RC, Howatson G, Hayes PR (2018). Effects of strength training on the physiological determinants of middle- and long-distance running performance: a systematic review. Sports Medicine.',
    ],
  },
  {
    id: 'plyometrics',
    title: 'Plyometrics basics',
    topic: 'Strength',
    summary: 'Short, springy jumps that train tendons to store and return energy.',
    sections: [
      {
        heading: 'The stretch-shortening cycle',
        body: [
          'When a muscle–tendon unit is stretched quickly and then shortened (landing then push-off), it produces more force than a shortening alone. This stretch-shortening cycle (SSC) is the basis of every running stride. Plyometrics train it to be faster and stiffer.',
        ],
      },
      {
        heading: 'Dosing',
        body: [
          'Count foot contacts, not time. Beginners might start around 40–60 contacts a session and build gradually; rest fully between sets so each contact is high quality. Progress from two-footed low hops to bounds, single-leg hops, then depth jumps.',
          'Do plyometrics fresh, after a warm-up and not after a hard run. Land softly and quietly.',
        ],
      },
    ],
    terms: [
      { term: 'SSC', def: 'Stretch-shortening cycle — a rapid stretch followed by a contraction, as in running.' },
      { term: 'Foot contact', def: 'One landing; the unit for counting plyometric volume.' },
      { term: 'Reactive strength', def: 'The ability to produce force quickly after landing; often measured as jump height ÷ contact time.' },
    ],
    maths: [{ title: 'Reactive strength index', lines: ['RSI = jump height (m) ÷ ground contact time (s)'], note: 'Higher is springier: 0.30 m in 0.20 s gives RSI 1.5.' }],
    keyPoints: ['Count contacts, not minutes.', 'Two-footed → single-leg → depth jumps.', 'Fresh legs, full rest, quiet landings.'],
    tryThis: '3 × 10 low, quick two-footed hops, then 3 × 6 lateral bounds each way, twice a week.',
    references: ['Blagrove RC, Howatson G, Hayes PR (2018). Effects of strength training on the physiological determinants of middle- and long-distance running performance. Sports Medicine.'],
  },
  {
    id: 'warm-up',
    title: 'Warming up and cooling down',
    topic: 'Strength',
    summary: 'A warm-up measurably helps performance. A cool-down mostly helps you feel better.',
    sections: [
      {
        heading: 'Why warm up',
        body: [
          'Warming up raises muscle temperature, speeds nerve conduction and gets oxygen delivery up to speed, so the first hard minutes cost less. A meta-analysis found warming up improved performance in most of the studies it examined.',
          'For hard sessions and races: 10–15 minutes easy, some dynamic drills (leg swings, skips, high knees), and 3–4 strides building to race pace.',
        ],
      },
      {
        heading: 'Static stretching',
        body: [
          'Long static stretches right before fast running can slightly reduce power. Save them for after running or separate mobility sessions.',
        ],
      },
    ],
    terms: [
      { term: 'Dynamic drills', def: 'Movement-based exercises that take joints through running-like ranges.' },
      { term: 'Strides', def: 'Short accelerations to near race pace with full recovery.' },
    ],
    keyPoints: ['Warm up longer for shorter, faster races.', 'Use drills and strides, not long static stretches, before running fast.', 'A cool-down jog is optional but pleasant.'],
    tryThis: 'Before your next workout: 12 minutes easy, 5 drills, 4 × 20 s strides.',
    references: [
      'Fradkin AJ, Zazryn TR, Smoliga JM (2010). Effects of warming-up on physical performance: a systematic review with meta-analysis. Journal of Strength and Conditioning Research.',
      'Behm DG, Chaouachi A (2011). A review of the acute effects of static and dynamic stretching on performance. European Journal of Applied Physiology.',
    ],
  },

  // ------------------------------------------------------------------ Nutrition
  {
    id: 'fuelling',
    title: 'Fuelling: carbohydrate for training and racing',
    topic: 'Nutrition',
    summary: 'Glycogen is limited. Carbohydrate during long efforts delays fatigue.',
    sections: [
      {
        heading: 'How much fuel you carry',
        body: [
          'A trained runner stores roughly 400–500 g of glycogen in muscle and around 100 g in the liver — about 2,000 kcal. At marathon pace that runs low around the 30 km mark for many runners, which is one cause of "hitting the wall".',
          'Higher-carbohydrate diets increase stored glycogen and extend how long you can work hard — a finding going back to classic studies in the 1960s.',
        ],
      },
      {
        heading: 'Carbohydrate during exercise',
        body: [
          'Guidelines scale with duration: under about 45 minutes, nothing is needed; 1–2 hours, around 30 g per hour; 2–3 hours, up to 60 g per hour; beyond 2.5 hours, up to 90 g per hour using glucose-plus-fructose mixtures, because the two sugars use different gut transporters.',
          'The gut can be trained: practising race fuelling in long runs improves absorption and reduces stomach problems.',
        ],
      },
      {
        heading: 'Carbohydrate loading',
        body: ['For races over about 90 minutes, eating around 10–12 g of carbohydrate per kg of body mass per day for 36–48 hours beforehand maximises glycogen stores.'],
      },
    ],
    terms: [
      { term: 'Glycogen', def: 'Stored carbohydrate in muscle and liver.' },
      { term: 'Hitting the wall', def: 'A sudden, severe slowdown when glycogen runs low.' },
      { term: 'Multiple transportable carbohydrates', def: 'Glucose plus fructose, absorbed via different routes so more can be used per hour.' },
    ],
    maths: [{ title: 'Carb-loading target', lines: ['Daily carbohydrate (g) = body mass (kg) × 10–12'], note: '65 kg → 650–780 g a day for the 36–48 hours before a marathon.' }],
    visual: 'carbs',
    keyPoints: ['~30 g/h for 1–2 h, ~60 g/h for 2–3 h, up to 90 g/h beyond.', 'Train the gut on long runs.', 'Carb-load for races over 90 minutes.'],
    tryThis: 'On your next long run over 90 minutes, take 30–60 g of carbohydrate per hour and note how you feel late in the run.',
    references: [
      'Jeukendrup A (2014). A step towards personalized sports nutrition: carbohydrate intake during exercise. Sports Medicine.',
      'Burke LM, Hawley JA, Wong SHS, Jeukendrup AE (2011). Carbohydrates for training and competition. Journal of Sports Sciences.',
      'Bergström J, Hermansen L, Hultman E, Saltin B (1967). Diet, muscle glycogen and physical performance. Acta Physiologica Scandinavica.',
    ],
  },
  {
    id: 'hydration',
    title: 'Hydration and sweat rate',
    topic: 'Nutrition',
    summary: 'Know your sweat rate. Aim to limit losses, not to drink as much as possible.',
    sections: [
      {
        heading: 'Why it matters',
        body: [
          'Losing more than about 2% of body mass through sweat can impair endurance performance, especially in heat. But drinking far more than you sweat can cause exercise-associated hyponatraemia (low blood sodium), which is dangerous. The goal is to replace a good part of losses, not all of them.',
        ],
      },
      {
        heading: 'Measuring sweat rate',
        body: [
          'Weigh yourself before and after a run (in minimal clothing, towelled dry), add the fluid you drank, subtract any urine, and divide by the hours run. Sweat rates commonly range from 0.5 to over 2 litres per hour and rise sharply in heat and humidity.',
          'Heavy, salty sweaters (white residue on kit) may benefit from sodium in their drinks on long runs.',
        ],
      },
    ],
    terms: [
      { term: 'Hyponatraemia', def: 'Abnormally low blood sodium, often from drinking much more than you sweat.' },
      { term: 'Sweat rate', def: 'Litres of sweat lost per hour.' },
    ],
    maths: [{ title: 'Sweat rate', lines: ['Sweat rate (L/h) = (mass before − mass after + fluid drunk − urine) ÷ hours'], note: '1 kg of mass lost ≈ 1 L of sweat.' }],
    visual: 'sweat',
    keyPoints: ['Keep losses under ~2% of body mass on long runs.', 'Don\'t drink more than you sweat.', 'Measure your sweat rate in your race conditions.'],
    tryThis: 'Do the before/after weigh-in on your next 60-minute run and use the calculator.',
    references: ['Sawka MN et al. (2007). American College of Sports Medicine position stand: Exercise and fluid replacement. Medicine & Science in Sports & Exercise.'],
  },
  {
    id: 'energy-availability',
    title: 'Energy availability and RED-S',
    topic: 'Health',
    summary: 'Under-fuelling harms bones, hormones and performance — in all genders.',
    sections: [
      {
        heading: 'Energy availability',
        body: [
          'Energy availability (EA) is the energy left for the body\'s basic functions after exercise, per kilogram of fat-free mass. When it stays low — from eating too little, training a lot, or both — the body down-regulates "non-essential" systems.',
        ],
      },
      {
        heading: 'RED-S',
        body: [
          'Relative Energy Deficiency in Sport (RED-S) describes the consequences: disrupted hormones (including menstrual dysfunction), poorer bone health and stress fractures, weakened immunity, impaired recovery and lower performance. It affects men as well as women.',
          'Laboratory studies found hormonal disruption in women at energy availability below about 30 kcal per kg of fat-free mass per day; around 45 is considered adequate for most active adults.',
        ],
      },
    ],
    terms: [
      { term: 'EA', def: 'Energy availability: (energy in − exercise energy) ÷ fat-free mass.' },
      { term: 'FFM', def: 'Fat-free mass — body mass minus fat mass.' },
      { term: 'RED-S', def: 'Relative Energy Deficiency in Sport.' },
    ],
    maths: [{ title: 'Energy availability', lines: ['EA = (energy intake − exercise energy expenditure) ÷ FFM'], note: 'Example: (2,400 − 700) kcal ÷ 52 kg FFM ≈ 33 kcal/kg FFM/day — on the low side.' }],
    visual: 'energy-availability',
    keyPoints: ['~45 kcal/kg FFM/day is adequate; under ~30 is low.', 'Missed periods, frequent illness and bone stress injuries are warning signs.', 'Speak to a doctor or sports dietitian if worried.'],
    tryThis: 'If you\'re often tired, ill or injured, track food intake against training for a week — or see a professional.',
    references: [
      'Mountjoy M et al. (2018). IOC consensus statement on relative energy deficiency in sport (RED-S): 2018 update. British Journal of Sports Medicine.',
      'Loucks AB, Thuma JR (2003). Luteinizing hormone pulsatility is disrupted at a threshold of energy availability in regularly menstruating women. Journal of Clinical Endocrinology & Metabolism.',
    ],
  },

  // ------------------------------------------------------------------ Recovery / environment
  {
    id: 'recovery',
    title: 'Recovery and sleep',
    topic: 'Recovery',
    summary: 'Adaptation happens between sessions, mostly while you sleep.',
    sections: [
      {
        heading: 'Sleep',
        body: [
          'Sleep is when much of the hormonal and tissue repair after training happens. In a study of college basketball players, extending sleep toward 10 hours a night improved sprint times and shooting accuracy. Chronically short sleep is associated with more injuries in young athletes.',
        ],
      },
      {
        heading: 'Food and the rest',
        body: [
          'After hard sessions, carbohydrate refills glycogen and around 20–40 g of protein supports muscle repair. Recovery tools such as massage, compression and cold water can help you feel better, but none replaces sleep, food and sensible load.',
        ],
      },
    ],
    terms: [{ term: 'Recovery', def: 'The process of returning to (and above) baseline after training stress.' }],
    keyPoints: ['7–9 hours of sleep; more in heavy blocks.', 'Carbohydrate and protein after hard days.', 'Rest days are training.'],
    tryThis: 'Log your sleep the night before your next three hard sessions and compare how they went.',
    references: [
      'Mah CD, Mah KE, Kezirian EJ, Dement WC (2011). The effects of sleep extension on the athletic performance of collegiate basketball players. Sleep.',
      'Milewski MD et al. (2014). Chronic lack of sleep is associated with increased sports injuries in adolescent athletes. Journal of Pediatric Orthopaedics.',
    ],
  },
  {
    id: 'heat',
    title: 'Running in heat and humidity',
    topic: 'Recovery',
    summary: 'Hot, humid conditions slow everyone. Adjust pace, hydrate and acclimatise.',
    sections: [
      {
        heading: 'Why heat slows you',
        body: [
          'In heat, blood is shared between working muscles and the skin for cooling, so the heart must pump harder at the same pace and core temperature rises. Humidity makes it worse because sweat evaporates less and cools you less.',
          'An analysis of seven major marathons found that finishing times slowed progressively as the heat-stress index (WBGT) rose above roughly 5–10 °C, and that slower runners were affected proportionally more than the fastest.',
        ],
      },
      {
        heading: 'Acclimatisation',
        body: [
          'Regular exercise in the heat for about 1–2 weeks (60–90 minutes a day) increases plasma volume, starts sweating earlier and lowers heart rate and core temperature at a given effort. Most of the benefit appears within the first week.',
        ],
      },
      {
        heading: 'WBGT',
        body: [
          'Wet-bulb globe temperature (WBGT) combines temperature, humidity, sun and wind into one heat-stress index. Race organisers use it to set warnings; tropical mornings often already sit in the moderate-risk range.',
        ],
      },
    ],
    terms: [
      { term: 'Plasma volume', def: 'The liquid part of blood; it expands with heat acclimatisation.' },
      { term: 'WBGT', def: 'Wet-bulb globe temperature — a combined heat-stress index.' },
      { term: 'Core temperature', def: 'Internal body temperature, normally about 37 °C.' },
    ],
    keyPoints: ['Run by effort or heart rate in heat.', 'Acclimatise over 1–2 weeks before a hot race.', 'Start conservatively and drink to plan.'],
    tryThis: 'Compare your easy pace at the same heart rate on a cool morning and a hot afternoon.',
    references: [
      'Ely MR, Cheuvront SN, Roberts WO, Montain SJ (2007). Impact of weather on marathon-running performance. Medicine & Science in Sports & Exercise.',
      'Racinais S et al. (2015). Consensus recommendations on training and competing in the heat. Scandinavian Journal of Medicine & Science in Sports.',
    ],
  },
  {
    id: 'altitude',
    title: 'Altitude training',
    topic: 'Recovery',
    summary: 'Thin air stimulates more red blood cells. "Live high, train low" is the classic method.',
    sections: [
      {
        heading: 'What altitude does',
        body: [
          'At altitude each breath carries less oxygen, so the kidneys release more erythropoietin (EPO), which stimulates red blood cell production over weeks. More red cells means more oxygen-carrying capacity back at sea level.',
          'The catch: you can\'t train as fast at altitude. "Live high, train low" — living at about 2,000–2,500 m while doing hard sessions lower down — improved sea-level 5,000 m performance in a landmark study.',
        ],
      },
    ],
    terms: [
      { term: 'EPO', def: 'Erythropoietin — the hormone that stimulates red blood cell production.' },
      { term: 'Haemoglobin', def: 'The oxygen-carrying protein in red blood cells.' },
    ],
    keyPoints: ['3–4 weeks at moderate altitude are needed for blood changes.', 'Keep hard sessions fast (train low).', 'Iron status matters for the response.'],
    tryThis: 'If you travel to altitude, expect slower paces for the first week and run by effort.',
    references: ['Levine BD, Stray-Gundersen J (1997). "Living high–training low": effect of moderate-altitude acclimatization with low-altitude training on performance. Journal of Applied Physiology.'],
  },
  {
    id: 'injuries',
    title: 'Common running injuries and load',
    topic: 'Health',
    summary: 'Most running injuries are overuse injuries — too much, too soon, for the tissue.',
    sections: [
      {
        heading: 'How common',
        body: [
          'A systematic review reported yearly injury incidence among distance runners ranging from about 19% to 79% across studies, with the knee the most common site. Most are overuse injuries: tissue loading outpaces its capacity to adapt.',
        ],
      },
      {
        heading: 'The usual suspects',
        body: [
          'Patellofemoral pain (around the kneecap), Achilles tendinopathy, plantar heel pain, iliotibial band syndrome (outside of the knee), medial tibial stress syndrome ("shin splints") and bone stress injuries. Each relates to a tissue that was asked to do more than it was ready for.',
        ],
      },
      {
        heading: 'What helps',
        body: [
          'Gradual load progression, strength training (especially calves, hips and quads), adequate sleep and energy availability, and rotating shoes. Pain that changes how you run, is sharp, or is worse the next morning is a reason to back off and seek advice.',
        ],
      },
    ],
    terms: [
      { term: 'Tendinopathy', def: 'Pain and impaired function of a tendon from overload.' },
      { term: 'Bone stress injury', def: 'A spectrum from bone stress reaction to stress fracture.' },
      { term: 'Overuse injury', def: 'Damage from repeated loading without enough recovery or adaptation.' },
    ],
    keyPoints: ['Load beats biomechanics as the main injury lever.', 'Strength work builds tissue capacity.', 'Sharp or worsening pain = back off and get advice.'],
    tryThis: 'Add two sets of slow single-leg calf raises (15 each side) to your routine three times a week.',
    references: [
      'van Gent RN et al. (2007). Incidence and determinants of lower extremity running injuries in long distance runners: a systematic review. British Journal of Sports Medicine.',
      'Bertelsen ML et al. (2017). A framework for the etiology of running-related injuries. Scandinavian Journal of Medicine & Science in Sports.',
    ],
  },
]
