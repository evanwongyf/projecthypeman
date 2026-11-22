import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Competitive drifting is judged, like figure skating or gymnastics, not timed. Drivers first earn a place with solo qualifying runs scored by judges, then race in head-to-head tandem battles where one car leads and one chases, and the pair swap roles. Knowing what the judges look for turns a cloud of tyre smoke into a contest you can read.',
  nutshell: [
    'Events have two stages: **solo qualifying** (scored runs) and **tandem battles** (knock-out pairs).',
    'Judges score **line** (hitting set clipping points and zones), **angle** (how sideways), and **style** or commitment (speed, smoothness, aggression); some series also measure speed and angle electronically.',
    'In tandem, the **lead** car must drive a qualifying-standard run; the **chase** car must copy it and stay as close as possible (**proximity**).',
    'Each battle has two runs with roles swapped; if the judges cannot separate the drivers they call **one more time** (OMT).',
    'Spins, straightening, leaving the course and causing contact lose most or all of the advantage.',
    'Major series include **Formula Drift** (USA), **D1 Grand Prix** (Japan), **Drift Masters** (Europe) and the FIA’s **Intercontinental Drifting Cup**.',
  ],
  sections: [
    {
      id: 'the-course',
      title: 'The course: clipping points and zones',
      blocks: [
        { t: 'p', text: 'Before an event the judges publish a map of the course with **clipping points** (spots a part of the car should pass as close as possible to) and **zones** (areas the car should pass through or over). **Inner clips** are on the inside of a corner, usually approached with the front of the car; **outer clips** and **outer zones** are on the outside, where drivers try to swing the rear bumper as close to the wall or line as they dare.' },
        {
          t: 'terms',
          items: [
            { term: 'Initiation zone', def: 'Where the drift must start; starting late or straight costs points.' },
            { term: 'Inner clip', def: 'A point on the inside of a corner the nose should pass close to.' },
            { term: 'Outer zone', def: 'An area on the outside of a corner the rear should swing through, often marked by a line or wall.' },
            { term: 'Transition', def: 'The swing from one direction to another between linked corners.' },
            { term: 'Straightening', def: 'Losing angle so the car briefly drives straight: a significant deduction.' },
            { term: 'Correction', def: 'A visible adjustment of steering or throttle to save the slide. Small corrections are normal; big ones cost style.' },
          ],
        },
      ],
    },
    {
      id: 'qualifying',
      title: 'Solo qualifying: the three criteria',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Line', body: 'Does the car hit the clips and zones the judges set, as close as possible, and follow the intended path from start to finish?', tag: 'where' },
            { title: 'Angle', body: 'How sideways is the car, and does it hold that angle throughout rather than only for a moment?', tag: 'how much' },
            { title: 'Style', body: 'Speed, commitment, aggression in the initiation, smoothness and fluid transitions. Big corrections and hesitations count against it.', tag: 'how' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`S = S_{\text{line}} + S_{\text{angle}} + S_{\text{style}} \;\le\; 100`,
          caption: 'A qualifying score as the sum of three criterion scores, out of 100. Series set their own weighting for each criterion in their rulebooks and revise it over time, so the split below is a hypothetical example.',
          where: [
            { sym: 'S', def: 'Total score for one run' },
            { sym: 'S_{\\text{line}}', def: 'Points awarded for line (here, out of 35)' },
            { sym: 'S_{\\text{angle}}', def: 'Points for angle (here, out of 35)' },
            { sym: 'S_{\\text{style}}', def: 'Points for style (here, out of 30)' },
          ],
          syntax: [
            { sym: 'S_{\\text{line}}', say: '“S line”: the score, with the subscript naming which criterion' },
            { sym: '\\le 100', say: '“at most 100”: the maximum possible total' },
          ],
          worked: {
            title: 'Scoring two runs with a hypothetical 35/35/30 split',
            steps: [
              String.raw`Run 1: line \(31/35\), angle \(30/35\), style \(26/30\). Total \(31 + 30 + 26 = 87\).`,
              String.raw`Run 2: the driver misses an outer zone (line \(24/35\)) but adds angle (\(33/35\)) and style (\(27/30\)). Total \(24 + 33 + 27 = 84\).`,
              String.raw`Only the better run usually counts towards qualifying: \(\max(87, 84) = 87\).`,
            ],
            answer: 'The driver qualifies on 87. Missing a single zone cost more than the extra angle gained, a typical lesson: line points are hard to recover.',
          },
        },
        { t: 'callout', tone: 'note', title: 'Electronic judging', text: 'D1 Grand Prix has used an electronic measuring system, known as DOSS, which records quantities such as speed, angle and the rate of rotation and turns them into a score alongside or in place of human judgement in parts of the event. Formula Drift and most other series rely on a panel of human judges, usually three.' },
      ],
    },
    {
      id: 'tandem',
      title: 'Tandem battles',
      blocks: [
        { t: 'p', text: 'The top qualifiers (in Formula Drift, the top 32) go into a knock-out bracket, seeded so that the highest qualifier meets the lowest. Each battle has two runs: Driver A leads and Driver B chases, then they swap. The judges compare the two runs together and award the battle.' },
        {
          t: 'table',
          head: ['Role', 'Job', 'What gains an advantage', 'What loses it'],
          rows: [
            ['Lead', 'Drive a clean, qualifying-standard run', 'Speed, angle and line good enough to pull away', 'Going slow to trap the chaser, missing clips, mistakes'],
            ['Chase', 'Copy the lead car and stay close', 'Proximity, matching angle, initiating at the same moment', 'Falling back, straightening, a different line, causing contact'],
          ],
        },
        {
          t: 'example',
          title: 'A tandem battle, judged',
          lines: [
            { label: 'Run 1', text: 'Driver A leads cleanly. Driver B chases close through the first corners but loses angle in the transition.' },
            { label: 'Judges after run 1', text: 'Advantage to Driver A.' },
            { label: 'Run 2', text: 'Driver B leads a strong run. Driver A chases very close, door to door, matching angle throughout.' },
            { label: 'Judges after run 2', text: 'Advantage to Driver A again, so A wins the battle.' },
            { label: 'Alternative', text: 'Had run 2 gone to B by the same margin, the judges could call one more time (OMT) and the pair would run again.' },
          ],
        },
        {
          t: 'list',
          items: [
            '**Spin or stopping:** the run is usually lost outright.',
            '**Two wheels off course:** a large deduction in most rulebooks.',
            '**Contact:** judged by who caused it; a chaser who hits a clean lead car is normally at fault, a lead car that brakes unexpectedly may be.',
            '**Competition timeout:** most series allow a short break once per event to repair a car between battles.',
          ],
          ordered: false,
        },
      ],
    },
    {
      id: 'series',
      title: 'The main series',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'D1 Grand Prix', body: 'Japan’s professional championship, founded around 2000–2001 by Keiichi Tsuchiya and Daijiro Inada. Known for electronic scoring and for introducing the professional tandem format to wide audiences.', tag: 'Japan' },
            { title: 'Formula Drift', body: 'The leading US series, first season 2004. Rounds at circuits and street-style venues; PRO class with a top-32 bracket, plus a development class.', tag: 'USA' },
            { title: 'Drift Masters', body: 'A pan-European championship running rounds in several countries.', tag: 'Europe' },
            { title: 'FIA Intercontinental Drifting Cup', body: 'An FIA-sanctioned event first held in 2017 in Tokyo, bringing drivers from many national series together.', tag: 'International' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Watch the clipping points: the best drivers put a bumper within centimetres of them.',
            'In tandem, watch the gap: the chaser who stays door-to-door through transitions usually wins.',
            'Listen for an initiation that is late or tentative; judges penalise it.',
          ],
          dont: [
            'Judge by smoke: lots of smoke does not mean lots of angle or a good line.',
            'Assume the faster car wins; a fast run that misses zones scores poorly.',
            'Assume the rules are identical between series; weighting and penalties differ.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Check yourself',
      blocks: [
        {
          t: 'example',
          title: 'Questions, with answers',
          lines: [
            { label: 'Q1', text: 'What are the two jobs of the chase car?' },
            { label: 'A1', text: 'Copy the lead car’s line and angle, and stay as close as possible (proximity).' },
            { label: 'Q2', text: 'What happens if judges cannot pick a winner after both runs?' },
            { label: 'A2', text: 'They call one more time (OMT) and the pair run both legs again.' },
            { label: 'Q3', text: 'A qualifying run scores 32 line, 28 angle, 24 style. What is the total?' },
            { label: 'A3', text: String.raw`\(32 + 28 + 24 = 84\).` },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'A closed-course sport', text: 'Professional drifting is run on closed courses with marshals, barriers and safety rules. Drifting on public roads is dangerous and illegal.' },
      ],
    },
  ],
  sources: [
    'Formula Drift. *Official Rulebook* and judging criteria (formulad.com).',
    'D1 Grand Prix official site (d1gp.co.jp).',
    'FIA. Intercontinental Drifting Cup event regulations.',
  ],
  related: [
    'sports/f1/drift/what-is-drifting',
    'sports/f1/drift/drift-technique-and-setup',
    'sports/f1/drift/drift-physics',
    'sports/f1/drift/f1-vs-drift',
  ],
}

export default guide
