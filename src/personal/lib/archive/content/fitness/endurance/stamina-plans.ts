import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A good endurance plan is simple: a few easy sessions, one long session, one or two hard ones, a lighter week every few weeks, and a taper before the race. This guide gives a 12-week plan that takes you from running 5 km comfortably to racing 10 km (and extends to the half marathon), shows how the same structure applies to cycling and swimming, explains how to taper using the fitness–fatigue model, and gives a race-week checklist, with Singapore-specific adjustments for heat and race start times.',
  nutshell: [
    '**Structure of a week:** 2 to 3 easy sessions, 1 long session, 1 quality session (tempo or intervals), 1 to 2 rest or strength days.',
    '**Build for 3 weeks, then reduce** volume by 20 to 30% in the fourth; keep the **long session growing slowly** (about 5 to 10 min or 1 to 2 km a week).',
    '**Taper** in the last 1 to 3 weeks: cut volume by about 40 to 60% but keep some intensity and frequency; a 2-week taper improved performance by about 2% in a meta-analysis (Bosquet et al., 2007).',
    '**Cycling and swimming** follow the same pattern, using time rather than distance and using power, pace or perceived effort for intensity.',
    'In Singapore, **start early**, expect slower paces, and **practise your race-day fuelling** in training.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'A 12-week 10 km plan',
      lead: 'For someone who can run 5 km without stopping.',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Easy runs', 'Quality session', 'Long run', 'Easy + long km (quality session adds about 5)'],
          rows: [
            ['1', '3 × 4 km', 'none: strides 4 × 20 s', '6 km', '≈ 18'],
            ['2', '3 × 4 km', '4 × 3 min at "comfortably hard"', '7 km', '≈ 19'],
            ['3', '3 × 5 km', '5 × 3 min comfortably hard', '8 km', '≈ 23'],
            ['4 (lighter)', '2 × 4 km', '3 × 3 min', '6 km', '≈ 14'],
            ['5', '3 × 5 km', '3 × 8 min threshold', '9 km', '≈ 24'],
            ['6', '3 × 5 km', '4 × 4 min at 5 km pace', '10 km', '≈ 25'],
            ['7', '3 × 6 km', '3 × 10 min threshold', '11 km', '≈ 29'],
            ['8 (lighter)', '2 × 5 km', '4 × 3 min', '8 km', '≈ 18'],
            ['9', '3 × 6 km', '5 × 4 min at 5 km pace', '12 km', '≈ 30'],
            ['10', '3 × 6 km', '2 × 15 min threshold', '12 km', '≈ 30'],
            ['11 (taper)', '2 × 5 km', '3 × 3 min at race pace', '8 km', '≈ 18'],
            ['12 (race week)', '2 × 4 km + strides', '10 min race pace', 'Race: 10 km', '≈ 18'],
          ],
          caption: 'Run on the same days each week, with at least one rest day between hard sessions, and add two short strength sessions. Run easy at a pace where you can chat. For a half marathon, extend the long run by 1 to 2 km per week up to 18 km in week 10 and add a week to the build.',
        },
        {
          t: 'checklist',
          items: [
            'Can I run 5 km continuously (even slowly) before starting?',
            'Do I have a rest day after the long run?',
            'Have I planned strength and mobility twice a week?',
            'Do I have shoes with some wear but under 600 to 800 km, and socks that suit the humidity?',
            'Have I planned a time-trial or test race around week 6?',
          ],
        },
      ],
    },
    {
      id: 'other',
      title: 'Cycling and swimming',
      lead: 'The same structure in other sports.',
      blocks: [
        {
          t: 'table',
          head: ['Element', 'Cycling', 'Swimming'],
          rows: [
            ['Easy sessions', '2 × 60 to 90 min at a conversational effort (about 55 to 75% of functional threshold power)', '2 × 30 to 45 min with drills, focusing on technique and relaxed breathing'],
            ['Long session', '2 to 4 hours, progressing by 15 to 30 min a week', '1 to 1.5 km continuous or in blocks of 400 m'],
            ['Quality', '3 × 10 min at threshold (about 95 to 100% of FTP) or 5 × 4 min at 110 to 120%', 'Sets of 100 to 400 m at threshold pace with 10 to 20 s rest (critical swim speed sets)'],
            ['Measure intensity by', 'Power, heart rate or perceived effort', 'Pace per 100 m, stroke count, perceived effort'],
            ['Strength', 'Legs and trunk, twice a week', 'Shoulders, trunk, pull strength'],
          ],
        },
        { t: 'p', text: 'Cycling is non-weight-bearing and so tolerates higher weekly time with less injury risk; swimming demands technique above all, and sessions with a coach or video feedback produce faster gains than extra volume. Triathletes combine all three, and use easy sessions in one sport to recover from another.' },
      ],
    },
    {
      id: 'taper',
      title: 'Tapering',
      lead: 'Arrive fresh, not detrained.',
      blocks: [
        { t: 'fit-lab', viz: 'banister' },
        { t: 'p', text: 'The lab above shows why tapering works: fatigue decays in a week or so while fitness decays over weeks, so reducing training lets fatigue clear and leaves fitness almost intact. A meta-analysis of tapering studies (Bosquet et al., 2007) found the best results from a taper of about **2 weeks** with an **exponential or progressive reduction in volume of about 41 to 60%**, keeping **intensity** and **frequency** roughly the same. The average gain in performance was around 2%. Shorter races need shorter tapers (about 7 days for a 5 or 10 km) and marathons need 2 to 3 weeks.' },
        {
          t: 'steps',
          items: [
            { title: 'Reduce volume, not intensity', body: 'Keep a few race-pace efforts so that your legs remember the feel; cut the total distance by about half.' },
            { title: 'Keep the rhythm', body: 'Run on the same days and times; do not stop completely.' },
            { title: 'Sleep and fuel', body: 'Aim for the extra hours of sleep; eat enough carbohydrate in the last two days (see the fuelling guide).' },
            { title: 'Ignore taper "twinges"', body: 'Minor aches often appear as you rest. Check anything that is sharp or worsening, but expect restless legs.' },
          ],
        },
      ],
    },
    {
      id: 'race',
      title: 'Race week and race day in Singapore',
      lead: 'Practical points.',
      blocks: [
        {
          t: 'table',
          head: ['When', 'What'],
          rows: [
            ['A week before', 'Confirm the route, start time, bag drop, transport; check the weather forecast and the heat stress readings; no new shoes, food or kit'],
            ['2 to 3 days before', 'Higher-carbohydrate meals; keep fluids up; light jog with a few strides'],
            ['Night before', 'Familiar, low-fibre dinner (rice with chicken, noodles); lay out gear; sleep as well as you can (early nights matter more two days before)'],
            ['Morning', 'Breakfast 2 to 3 hours before the start; sip fluid; use the toilet; warm up for 10 to 15 minutes'],
            ['Start', 'Run the first 2 km slightly slower than goal pace, especially in humid pre-dawn heat; drink at every station in warm conditions'],
            ['After', 'Fluids, carbohydrate and protein within an hour; walk to cool down; shade and cool the body temperature'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Pacing in the heat', text: 'Most Singapore road races start before dawn, when temperatures are 26 to 28 °C and humidity can be 85% or more. Even so, expect your race pace to be a few per cent slower than in cool conditions. Pace by effort and heart rate, drink early, use sponges and cold water on the head and neck, and slow down if you feel dizzy or chilled.' },
      ],
    },
  ],
  sources: [
    'Bosquet, L., Montpetit, J., Arvisais, D. & Mujika, I. (2007). Effects of tapering on performance: a meta-analysis. *Medicine & Science in Sports & Exercise*, 39(8).',
    'Mujika, I. & Padilla, S. (2003). Scientific bases for precompetition tapering strategies. *Medicine & Science in Sports & Exercise*, 35(7).',
    'Pfitzinger, P. & Douglas, S. (2008). *Advanced Marathoning* (2nd ed.). Human Kinetics.',
    'Friel, J. (2016). *The Cyclist’s Training Bible* (5th ed.). VeloPress.',
    'Sport Singapore and race organisers’ guidelines for road races (activesg.gov.sg).',
  ],
  related: ['fitness/running/plans', 'fitness/endurance/building-aerobic-base', 'fitness/endurance/intervals-and-threshold', 'fitness/endurance/training-in-the-heat', 'fitness/endurance/fuelling-endurance'],
}

export default guide
