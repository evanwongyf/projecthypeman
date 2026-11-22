import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Flags are the oldest communication system in motor racing and they still carry the law. Today the same messages also arrive as coloured light panels round the circuit and on each car’s steering-wheel display, but the meanings are the ones marshals have waved for decades. This guide covers every flag, then the three ways of neutralising a race: the safety car, the virtual safety car and the red flag. It reflects the FIA rules as generally applied 2022-2025; **procedures are revised most seasons**, so check the current FIA Sporting Regulations and International Sporting Code for exact wording.',
  nutshell: [
    '**Yellow** means danger: slow down and do not overtake. **Double yellow** means slow right down and be ready to stop.',
    '**Blue** tells a driver a faster car is about to lap them and they must let it by.',
    '**Black** disqualifies; **black-and-white** is a warning; **black with an orange disc** orders a damaged car into the pits.',
    'A **safety car** physically bunches the field behind a road car; a **virtual safety car** makes every driver slow to a set lap-time delta without bunching.',
    'A **red flag** stops the session. Cars return slowly to the pit lane, and in a race may change tyres before a standing restart.',
  ],
  sections: [
    {
      id: 'every-flag',
      title: 'Every flag at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Flag', 'Meaning', 'What the driver must do', 'If ignored (typical)', 'Example situation'],
          rows: [
            ['Green', 'Track clear; hazard over', 'Resume racing speed; overtaking allowed again after the green', 'Not applicable', 'Shown after the last yellow-flag zone round a stranded car'],
            ['Single yellow (waved)', 'Danger beside or near the track', 'Slow down, no overtaking, be ready to change direction', 'Time penalty in a race; grid drop or deleted lap in qualifying', 'A car parked in a run-off area'],
            ['Double yellow (waved)', 'Danger on or partly on the track', 'Slow significantly, no overtaking, be ready to stop; marshals may be on track', 'Stronger penalties; in qualifying a fast lap under double yellow is usually not allowed to stand', 'A crashed car stopped on the racing line'],
            ['Yellow with red stripes', 'Slippery surface ahead', 'Expect reduced grip: oil, water, gravel or debris', 'Not usually penalised in itself', 'Gravel dragged onto the track after an off'],
            ['Blue', 'A faster car is close behind (race: about to lap you)', 'Let it past at the first opportunity', 'Usually a 5-second time penalty', 'A backmarker being caught by the leader'],
            ['White', 'Slow-moving vehicle ahead', 'Expect a much slower vehicle on the track', 'Not usually penalised in itself', 'A recovery truck or marshals’ car in the next sector'],
            ['Red', 'Session suspended', 'Slow down, no overtaking, return to the pit lane', 'Severe: grid or time penalty, possible disqualification', 'A heavy crash needing barrier repairs'],
            ['Black (with car number)', 'Disqualified', 'Return to the pits within a set number of laps and stop', 'Further sanctions', 'Very rare; usually after a serious breach'],
            ['Black and white diagonal (with number)', 'Warning for unsporting behaviour or repeated track limits', 'Treat as a final warning', 'Next offence reported to the stewards', 'Shown after a driver’s third track-limits breach'],
            ['Black with orange disc (with number)', 'Car has a mechanical problem that endangers others', 'Pit next lap to fix it', 'Disqualification if ignored', 'A loose front-wing endplate flapping on a straight'],
            ['Chequered', 'End of the session', 'Complete the lap and return to the pits', 'Not applicable', 'Shown to the race winner and then every car behind'],
            ['SC board (with waved yellows)', 'Safety car deployed', 'Slow down, no overtaking, form up behind the safety car', 'Time penalty or more', 'A crash needing marshals on track'],
            ['VSC board', 'Virtual safety car', 'Keep above the minimum delta time; no overtaking', '5-second penalty or more for speeding under VSC', 'Debris to clear at one corner'],
          ],
          caption: 'Panels and dashboard lights now duplicate flags, but a flag waved by a marshal is still binding. Penalties are decided by the stewards case by case.',
        },
        { t: 'callout', tone: 'tip', title: 'A memory trick', text: '**Colour = situation, black = you personally.** Green, yellow, red, white and blue describe the track. The three black flags are only ever shown alongside one car’s number and concern that driver alone.' },
      ],
    },
    {
      id: 'yellow-in-depth',
      title: 'Yellow flags in practice and qualifying',
      blocks: [
        { t: 'p', text: 'Yellows are the most common flags and the most argued over. In a race, overtaking under yellow is penalised unless the car passed has clearly slowed with a problem. In qualifying the issue is speed: a driver who sets a personal best through a double-yellow zone has visibly not slowed enough, and the stewards investigate.' },
        {
          t: 'example',
          title: 'Qualifying: what slowing means',
          lines: [
            { label: 'Situation', text: 'A car spins and stops on the track in sector 2 while others are on fast laps. Double yellows are waved.' },
            { label: 'Expected', text: 'Drivers lift clearly; their sector time is well down and the lap is effectively abandoned.' },
            { label: 'Investigated', text: 'A driver who sets a green or purple sector through the zone. Grid drops of several places have been given for this.' },
            { label: 'Knock-on', text: 'A late yellow can also end the session for everyone behind, freezing the order. This is why track position on the final run matters.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Marshalling sectors', text: 'The lap is divided into many small marshalling sectors, each with its own post and light panel. Yellow applies only to the affected sectors; drivers must respond from the first yellow until the green.' },
      ],
    },
    {
      id: 'blue-and-black',
      title: 'Blue flags and the three black flags',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Blue in a race', body: 'Shown to a driver about to be lapped. They must let the faster car by at the first opportunity. Ignoring several blue flags is a common source of 5-second penalties.', tag: 'race' },
            { title: 'Blue in practice', body: 'Tells a slower driver that a car on a fast lap is closing. Blocking it is impeding, which in qualifying usually earns a grid drop.', tag: 'practice' },
            { title: 'Black and white', body: 'A formal warning. Most often seen for track limits: in recent seasons the race director’s notes have set a black-and-white flag after three breaches, with the next reported to the stewards.', tag: 'warning' },
            { title: 'Black with orange disc', body: 'Nicknamed the "meatball". It orders a car in to repair damage such as a loose wing or bodywork. The team may fix it and rejoin.', tag: 'damage' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: the black flag is common', text: 'Outright black flags are rare in modern F1, because most offences are dealt with by time penalties. The black-and-white and black-with-orange-disc flags are far more often seen.' },
      ],
    },
    {
      id: 'neutralisation',
      title: 'Safety car, virtual safety car or red flag?',
      lead: 'Race control has three tools for slowing a race. The choice depends on how serious the hazard is and how long it will take to clear.',
      blocks: [
        {
          t: 'flow',
          title: 'How race control escalates',
          nodes: [
            { label: 'Incident', sub: 'car stopped or debris', tone: 'data' },
            { label: 'Local yellows', sub: 'hazard off the line, quickly cleared', tone: 'process' },
            { label: 'Virtual safety car', sub: 'brief track work needed', tone: 'process' },
            { label: 'Safety car', sub: 'longer work, recovery vehicles', tone: 'model' },
            { label: 'Red flag', sub: 'unsafe to continue: barrier damage, heavy rain', tone: 'output' },
          ],
          caption: 'A simplification: race control can go straight to a safety car or red flag, and can upgrade a VSC to a full safety car.',
        },
        {
          t: 'table',
          head: ['Aspect', 'Virtual safety car (VSC)', 'Safety car (SC)', 'Red flag'],
          rows: [
            ['What happens', 'Every driver slows to a set delta; no physical car', 'A road car leads the field at reduced speed', 'Session stopped; cars go to the pit lane'],
            ['Gaps between cars', 'Roughly preserved', 'Erased: the field bunches up', 'Frozen in order; gaps lost at the restart'],
            ['Overtaking', 'Not allowed', 'Not allowed (lapped cars may be told to pass)', 'Not allowed'],
            ['Pit stops', 'Allowed; time lost is reduced', 'Allowed; time lost is much reduced', 'Tyre changes and repairs allowed in the pit lane'],
            ['Laps count?', 'Yes', 'Yes', 'No racing laps while suspended'],
            ['Restart', 'Green flag when "VSC ending" period finishes', 'Rolling: leader sets the pace, then green at the line', 'Normally a standing start from the grid'],
          ],
        },
      ],
    },
    {
      id: 'safety-car',
      title: 'The safety car procedure',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Deployment', body: '"SC" boards and waved yellows appear at every post; dashboards show the safety car. Drivers must slow and may not overtake.' },
            { title: 'Pick-up', body: 'The safety car leaves pit exit and picks up the race leader. Everyone else forms up behind, keeping within ten car lengths of the car ahead.' },
            { title: 'Pit window', body: 'The pit lane usually stays open; many teams stop because the cost of a stop is much smaller with the field slowed.' },
            { title: 'Lapped cars', body: 'When race control judges it safe, lapped cars may be told to overtake and rejoin the back of the queue. The handling of this step was reviewed after the 2021 Abu Dhabi finale.' },
            { title: '"Safety car in this lap"', body: 'The lights on the safety car go out. The leader now controls the pace and may accelerate when they choose.' },
            { title: 'Restart', body: 'No overtaking until the control line. Green flags and lights show the race is live again.' },
          ],
        },
        {
          t: 'example',
          title: 'Why a safety car can make or break a race',
          lines: [
            { label: 'Before', text: 'Leader 15 s ahead of second place, both on 20-lap-old tyres.' },
            { label: 'Safety car', text: 'Both pit for fresh tyres. The 15 s lead shrinks to about a car length.' },
            { label: 'Restart', text: 'Second place can now attack on equal tyres. The safety car has handed back the gap the leader built.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Laps behind the safety car count', text: 'Laps behind the safety car are race laps. A race can finish under the safety car, with the cars crossing the line in order behind it.' },
      ],
    },
    {
      id: 'vsc-and-red',
      title: 'The virtual safety car and red flags',
      blocks: [
        { t: 'p', text: 'The VSC was introduced in 2015. Each driver’s dashboard shows a delta against a minimum time; staying positive means driving slowly enough. Because everyone slows by about the same proportion, gaps are roughly kept. When "VSC ending" is shown, drivers have a short period before the green, which arrives at a moment they cannot predict exactly, so nobody can gain by timing the restart.' },
        {
          t: 'steps',
          items: [
            { title: 'Red flag shown', body: 'Red flags at every post and red lights on the panels. All cars slow and go to the pit lane, no overtaking.' },
            { title: 'In the pit lane', body: 'Cars line up in order. Teams may change tyres and make many repairs, so a red flag can act as a free pit stop.' },
            { title: 'Order for the restart', body: 'Generally the order at the last point all cars could be placed, often the end of the previous lap or the timing line before the stoppage.' },
            { title: 'Restart', body: 'In recent seasons, normally a standing start from the grid after a countdown, unless conditions call for a start behind the safety car.' },
            { title: 'Not resumed', body: 'If the race cannot restart, the result is taken from the classification before the stoppage, with points scaled by distance completed.' },
          ],
        },
        {
          t: 'table',
          head: ['Race', 'What happened', 'Principle it shows'],
          rows: [
            ['Belgium 2021', 'Heavy rain; only laps behind the safety car, then the race was not resumed; half points given', 'Led to the rule that two green-flag laps are needed for points, and to scaled points'],
            ['Abu Dhabi 2021', 'Late safety car and the handling of lapped cars decided the title', 'Prompted an FIA review and changes to how race control is organised'],
            ['Australia 2023', 'Three red flags in one race', 'Each restart is a standing start, and each can reshuffle the order'],
            ['Monaco 2024', 'Red flag on the first lap', 'Most drivers changed tyres under the red flag and so met the two-compound rule without a pit stop'],
          ],
          caption: 'Described neutrally for the procedure involved, not to reopen the controversies.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Check yourself',
      blocks: [
        {
          t: 'example',
          title: 'Questions and answers',
          lines: [
            { label: 'Q1', text: 'A driver passes a slower car under single yellows. The other car had a puncture and was crawling. Penalty? **A:** Normally not; passing a car that has clearly slowed with a problem is allowed.' },
            { label: 'Q2', text: 'Black flag with an orange disc and your number. What now? **A:** Pit and get the damage fixed; you may rejoin.' },
            { label: 'Q3', text: 'Which neutralisation keeps the gaps? **A:** The virtual safety car.' },
            { label: 'Q4', text: 'Under a red flag, may teams fit new tyres? **A:** Yes, which is why red flags can transform strategy.' },
            { label: 'Q5', text: 'When may drivers overtake after a safety-car restart? **A:** After crossing the control line.' },
          ],
        },
        { t: 'dodont', do: ['Treat any flag waved by a marshal as binding', 'Watch for the car number with any black flag'], dont: ['Assume a yellow only matters in races', 'Confuse the white flag (slow vehicle) with the chequered flag'] },
      ],
    },
  ],
  sources: [
    'FIA. *International Sporting Code*, Appendix H (signalling and flag meanings).',
    'FIA. *Formula 1 Sporting Regulations* 2022-2025, sections on the safety car, virtual safety car and suspending a race.',
  ],
  related: [
    'sports/f1/rules-penalties/penalties-explained',
    'sports/f1/rules-penalties/race-weekend-and-points',
    'sports/f1/racecraft/race-strategy',
    'sports/f1/physics-theory/g-forces-safety',
    'sports/f1/circuits/circuit-anatomy',
  ],
}

export default guide
