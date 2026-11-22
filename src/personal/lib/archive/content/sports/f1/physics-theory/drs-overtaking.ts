import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'For years, F1 cars following closely behind another car lost so much downforce in the leader\'s turbulent wake that overtaking became extremely difficult, a problem serious enough that the sport introduced a rule explicitly letting the chasing car open a flap in its rear wing. This is the physics behind "dirty air" and the Drag Reduction System (DRS) built to fight it.',
  nutshell: [
    'A car moving through air leaves a **turbulent wake** behind it, the "dirty air"which disrupts the clean airflow a following car\'s wings need to generate downforce.',
    'A car following too closely loses a significant share of its front-wing downforce, making it harder to follow closely enough to overtake, especially through corners.',
    '**DRS (Drag Reduction System)** lets a trailing car (within one second of the car ahead, at designated points) open a flap in the rear wing, cutting drag for extra straight-line speed.',
    'The 2022 regulation overhaul specifically redesigned the cars\' aerodynamics to produce a "cleaner" wake, reducing (not eliminating) the dirty-air problem that DRS was originally built to patch over.',
  ],
  sections: [
    {
      id: 'dirty-air',
      title: 'The dirty-air problem',
      blocks: [
        {
          t: 'flow',
          title: 'Why following closely used to be so hard',
          nodes: [
            { label: 'Leading car disturbs the air behind it', tone: 'data' },
            { label: 'Turbulent, lower-energy "dirty air" wake forms', tone: 'process' },
            { label: 'Following car\'s wings work in this disturbed air', tone: 'process' },
            { label: 'Front wing loses a large share of its downforce', tone: 'model' },
            { label: 'Following car understeers, can\'t follow closely through corners', tone: 'output' },
          ],
        },
        {
          t: 'p',
          text: 'Older-generation F1 cars (pre-2022) relied heavily on front and rear wings for downforce, and wing-generated airflow is especially sensitive to being disrupted by a car ahead. Research and team data cited around the 2021 regulation changes suggested a following car could lose a large share, sometimes over a third, of its downforce at racing distances of a second or two behind, making it extremely difficult to carry enough speed into a corner to attempt a pass.',
        },
      ],
    },
    {
      id: 'drs',
      title: 'DRS: the engineered fix',
      blocks: [
        {
          t: 'p',
          text: 'Introduced in 2011, DRS lets a trailing car, within one second of the car ahead at a measurement point, and only in designated "DRS zones", usually on long straights, open a flap in the rear wing\'s main element, reducing drag for a genuine top-speed boost on that straight.',
        },
        { t: 'sports-viz', viz: 'downforce' },
        {
          t: 'table',
          head: ['Rule', 'Why'],
          rows: [
            ['Must be within 1 second at the detection point', 'Only helps a car genuinely close enough to realistically attempt an overtake, not any car further back'],
            ['Only in designated zones (usually straights before a braking zone)', 'Keeps the system from being usable mid-corner, where the lost rear downforce could be dangerous'],
            ['Only available in races after a set number of laps, and disabled behind a safety car restart', 'Prevents a first-lap pile-up risk and keeps early laps more genuinely competitive'],
            ['Automatically disabled if a driver is defending (not attacking) within the gap', 'Prevents the leading car also gaining a drag-reduction benefit it did not earn'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Controversial by design', text: 'DRS has been debated since its introduction, critics argue it can make some overtakes feel artificially easy rather than earned through genuine racecraft, while supporters note that before 2011, many circuits produced historically very few on-track overtakes at all. The system was an explicit, deliberate regulatory intervention to solve a specific, measured physics problem, which makes it a useful case study in how a sport can engineer around an aerodynamic limitation.' },
      ],
    },
    {
      id: '2022-fix',
      title: 'The 2022 redesign: fixing the cause, not just the symptom',
      blocks: [
        {
          t: 'p',
          text: 'DRS treats a symptom (not enough straight-line speed to pass) rather than the underlying cause (dirty air disrupting the following car\'s wings in corners). F1\'s 2022 technical regulations were explicitly designed, using extensive computational fluid dynamics modelling by the sport\'s own technical team, to reduce reliance on wing-generated downforce in favour of floor-generated "ground effect" downforce (see [downforce and aerodynamics](@sports/f1/physics-theory/downforce-aerodynamics)), because underbody airflow was found to be meaningfully less disrupted by a car ahead than wing-generated airflow.',
        },
        {
          t: 'table',
          head: ['Measure', 'Pre-2022 generation (illustrative)', '2022+ generation (illustrative)'],
          rows: [
            ['Downforce lost following at ~1 car length', 'Commonly cited estimates around 35–50%', 'F1\'s own published modelling targeted roughly halving that loss'],
            ['Typical on-track overtakes per race (broad, multi-year trend)', 'Lower in the immediately preceding regulation era', 'Higher in the seasons immediately following the 2022 change, though many factors beyond aerodynamics affect this count'],
          ],
          caption: 'Figures are illustrative of the direction and rough scale reported around the regulation change, not a precise year-by-year dataset, overtaking numbers are also affected by tyre rules, track layouts and a given season\'s competitive balance, so attributing the full change to aerodynamics alone would overstate the case.',
        },
      ],
    },
  ],
  sources: ['FIA. (2021). *2022 F1 Technical Regulations: Overview and Rationale*.', 'Formula 1 Technical Working Group. (2019). Aerodynamic research summary on car-following performance.'],
  related: ['sports/f1/physics-theory/downforce-aerodynamics', 'sports/f1/circuits/tracks-racing-line', 'sports/f1/racecraft/race-strategy'],
}

export default guide
