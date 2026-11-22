import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A grand prix is not just Sunday afternoon. It is a three-day programme of practice, qualifying and racing, held together by the FIA Formula 1 Sporting Regulations. This guide walks through a normal weekend and a sprint weekend, the knockout qualifying format, the grid, the race distance and how points become a championship. It describes the rules as they generally stood across 2022 to 2025. **The regulations are rewritten every year**, so check the current FIA Sporting Regulations before relying on any detail.',
  nutshell: [
    'A standard weekend has three one-hour practice sessions, knockout qualifying (Q1, Q2, Q3) on Saturday and the grand prix on Sunday.',
    'Qualifying cuts the field from 20 to 15 to 10; the ten fastest then fight for pole position in Q3.',
    'Points go to the top ten: **25-18-15-12-10-8-6-4-2-1**. The extra point for fastest lap ran from 2019 to 2024 and was dropped for 2025.',
    'Sprint weekends add a short race of about 100 km with points for the top eight (**8-7-6-5-4-3-2-1**) and their own sprint qualifying session.',
    '**Parc fermé** freezes the car’s set-up from qualifying to the race; breaking it normally means starting from the pit lane.',
    'A race is the fewest laps that exceed 305 km (Monaco is the exception), capped by time limits, with reduced points if it is cut short.',
  ],
  sections: [
    {
      id: 'standard-weekend',
      title: 'A standard weekend, hour by hour',
      lead: 'Most rounds follow the same shape. Exact start times vary with the time zone and the television schedule.',
      blocks: [
        {
          t: 'table',
          head: ['Day', 'Session', 'Length', 'What it is for'],
          rows: [
            ['Thursday', 'Media day, scrutineering, track walks', 'All day', 'Cars pass initial technical checks; engineers and drivers walk the circuit'],
            ['Friday', 'Free Practice 1 (FP1)', '60 min', 'Baseline set-up, aero measurements, testing new parts; teams must run rookies in some FP1 sessions each season'],
            ['Friday', 'Free Practice 2 (FP2)', '60 min', 'Long runs on high fuel to learn tyre wear, plus qualifying simulations'],
            ['Saturday', 'Free Practice 3 (FP3)', '60 min', 'Final set-up tweaks before parc fermé begins'],
            ['Saturday', 'Qualifying (Q1, Q2, Q3)', 'About 1 hour including breaks', 'Sets the starting grid'],
            ['Sunday', 'Grand prix', 'Up to 2 hours of racing', 'Points for the top ten'],
          ],
          caption: 'The standard (non-sprint) weekend, as generally run 2022-2025. Rookie FP1 running and session lengths are set by the regulations of each year.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Practice', body: 'No points and no grid consequence. Lap times can mislead: teams run different fuel loads, engine modes and tyre compounds.', tag: 'Fri-Sat' },
            { title: 'Qualifying', body: 'One fast lap at a time on low fuel. The order decides the grid, before any grid penalties are applied.', tag: 'Sat' },
            { title: 'Race', body: 'A standing start from the grid, a minimum of one pit stop in a dry race, points to the top ten.', tag: 'Sun' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Reading practice times', text: 'A car that tops FP2 by half a second may simply have run less fuel. Look at long-run averages over 8-10 laps on the same compound, not the single fastest lap.' },
      ],
    },
    {
      id: 'qualifying',
      title: 'Knockout qualifying: Q1, Q2 and Q3',
      blocks: [
        {
          t: 'flow',
          title: 'How 20 cars become a grid',
          nodes: [
            { label: 'Q1: 18 minutes', sub: 'all 20 cars run', tone: 'data' },
            { label: 'Slowest 5 out', sub: 'grid P16-P20', tone: 'process' },
            { label: 'Q2: 15 minutes', sub: '15 cars run', tone: 'data' },
            { label: 'Slowest 5 out', sub: 'grid P11-P15', tone: 'process' },
            { label: 'Q3: 12 minutes', sub: 'top 10 shootout', tone: 'model' },
            { label: 'Pole position', sub: 'fastest Q3 lap', tone: 'output' },
          ],
          caption: 'Only a driver’s best lap in each part counts. Times reset between parts, so a quick Q1 lap is no help in Q2.',
        },
        {
          t: 'terms',
          items: [
            { term: '107% rule', def: 'A driver whose best Q1 lap is slower than 107% of the fastest Q1 lap may be refused a start. The stewards can allow it in exceptional cases, for example if the driver set competitive times in practice.' },
            { term: 'Lap deleted', def: 'A lap on which the driver breaks track limits is deleted. In qualifying that can mean the difference between Q3 and an early exit.' },
            { term: 'Impeding', def: 'Getting in the way of a driver on a fast lap. The usual penalty is a grid drop, commonly three places.' },
            { term: 'Tyre rule', def: 'Until 2021 the top ten had to start on the tyres they used for their best Q2 lap. That rule was removed for 2022, so all drivers now choose their starting tyres freely.' },
          ],
        },
        {
          t: 'example',
          title: 'Worked example: the 107% rule',
          lines: [
            { label: 'Fastest Q1 lap', text: '1:20.000 (80.000 s)' },
            { label: '107% of that', text: '80.000 × 1.07 = 85.600 s, so the cut-off is 1:25.600' },
            { label: 'Driver A', text: '1:24.900: inside the limit, qualifies normally' },
            { label: 'Driver B', text: '1:26.100: outside the limit; needs the stewards’ permission to start, usually granted if practice pace was representative' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Qualifying sets the order, not always the grid', text: 'Grid penalties are applied after qualifying. A driver can qualify fourth and start fourteenth after a 10-place drop, while the cars behind move up. See [penalties explained](@sports/f1/rules-penalties/penalties-explained).' },
      ],
    },
    {
      id: 'sprint-weekends',
      title: 'Sprint weekends',
      lead: 'Since 2021 a handful of rounds each year have been sprint weekends; there were six a season from 2023 to 2025. The format has changed almost every season.',
      blocks: [
        {
          t: 'table',
          head: ['Season', 'Friday', 'Saturday', 'Sunday', 'Sprint points'],
          rows: [
            ['2021', 'FP1, qualifying (sets sprint grid)', 'FP2, sprint (sets grand prix grid)', 'Grand prix', 'Top 3: 3-2-1'],
            ['2022', 'FP1, qualifying (sets sprint grid)', 'FP2, sprint (sets grand prix grid)', 'Grand prix', 'Top 8: 8-7-6-5-4-3-2-1'],
            ['2023', 'FP1, qualifying (sets grand prix grid)', 'Sprint shootout, sprint', 'Grand prix', 'Top 8: 8-1'],
            ['2024-2025', 'FP1, sprint qualifying', 'Sprint, then grand prix qualifying', 'Grand prix', 'Top 8: 8-1'],
          ],
          caption: 'From 2023 the sprint stopped deciding the grand prix grid; it became a separate mini-event with its own qualifying session.',
        },
        {
          t: 'list',
          items: [
            '**Distance:** about 100 km, roughly a third of a grand prix, with no compulsory pit stop.',
            '**Sprint qualifying (SQ1, SQ2, SQ3):** a shorter knockout, around 12, 10 and 8 minutes. Teams have generally had to use new medium tyres in SQ1 and SQ2 and new softs in SQ3 (in the dry).',
            '**Parc fermé on sprint weekends:** in the 2024-2025 format the cars go into parc fermé for sprint qualifying and the sprint, and teams may then change set-up again before grand prix qualifying.',
            '**Only one hour of practice:** teams arrive with less time to tune the car, which tends to reward a good baseline set-up.',
          ],
        },
        {
          t: 'example',
          title: 'Worked example: a sprint weekend’s haul',
          lines: [
            { label: 'Sprint', text: 'Driver wins the sprint: 8 points' },
            { label: 'Grand prix', text: 'Finishes third: 15 points' },
            { label: 'Weekend total', text: '8 + 15 = 23 points, two fewer than winning a normal grand prix alone' },
          ],
        },
      ],
    },
    {
      id: 'parc-ferme',
      title: 'Parc fermé',
      blocks: [
        { t: 'p', text: '*Parc fermé* (French for "closed park") is the state the cars are held in between qualifying and the race. Once a car first leaves the pit lane in qualifying, teams may only do routine work: refuelling, bleeding brakes, changing tyres to the race allocation, fitting like-for-like parts, and small adjustments such as front-wing angle. Suspension, ride height and most other set-up changes are frozen.' },
        {
          t: 'dodont',
          do: [
            'Change the front-wing flap angle within the permitted range',
            'Replace a damaged part with an identical one, after telling the FIA technical delegate',
            'Adjust tyre pressures and fit the tyres for the race',
            'Make changes if the stewards declare a change in climatic conditions',
          ],
          dont: [
            'Change springs, dampers, ride height or wing specification',
            'Fit an upgraded floor or new aerodynamic parts',
            'Work on the car without FIA supervision during the overnight curfew window',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The price of breaking parc fermé', text: 'A team that changes the set-up under parc fermé conditions without permission normally has its car start from the **pit lane**. Some teams choose this deliberately after a poor qualifying, trading grid position for a new set-up or new parts.' },
      ],
    },
    {
      id: 'the-race',
      title: 'Grid, start and race distance',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pit exit opens', body: 'Cars leave the pit lane and may do reconnaissance laps before lining up on the grid.' },
            { title: 'Countdown', body: 'Signals at set minutes before the start; at the final signal the grid must be clear of team personnel.' },
            { title: 'Formation lap', body: 'One lap behind the pole sitter to warm tyres and brakes. No overtaking except to recover a position lost through a slow getaway.' },
            { title: 'Lights', body: 'Five red lights come on one by one. When they all go out, the race starts. Moving before that is a jump start.' },
            { title: 'Racing', body: 'In a dry race each driver must use at least two different dry compounds, which forces at least one pit stop.' },
            { title: 'Chequered flag', body: 'The leader takes the flag; everyone else finishes the lap they are on. A driver must normally complete 90% of the winner’s laps to be classified.' },
          ],
        },
        {
          t: 'table',
          head: ['Limit', 'Value', 'Example'],
          rows: [
            ['Race distance', 'Fewest whole laps exceeding 305 km', 'Silverstone (5.891 km): 52 laps ≈ 306 km'],
            ['Monaco exception', 'About 260 km', 'Monaco (3.337 km): 78 laps = 260.3 km'],
            ['Racing time limit', '2 hours', 'Slow, wet races can end on time before the scheduled distance'],
            ['Overall time limit', '3 hours including any red-flag suspension', 'Applies when a race is stopped and restarted'],
          ],
          caption: 'Distances use published lap lengths; small changes to a circuit change the lap count.',
        },
        { t: 'callout', tone: 'note', title: 'The grid', text: 'The grid is a staggered two-by-two formation, pole position on the side giving the better line into the first corner. Cars with back-of-grid penalties fill in behind the remaining qualifiers; pit-lane starters wait at pit exit and join after the field has passed.' },
      ],
    },
    {
      id: 'points',
      title: 'Points and the championships',
      blocks: [
        {
          t: 'table',
          head: ['Position', 'Grand prix', 'Sprint (2022-2025)'],
          rows: [
            ['1st', '25', '8'], ['2nd', '18', '7'], ['3rd', '15', '6'], ['4th', '12', '5'], ['5th', '10', '4'],
            ['6th', '8', '3'], ['7th', '6', '2'], ['8th', '4', '1'], ['9th', '2', '0'], ['10th', '1', '0'],
            ['Fastest lap', '1 point if in the top 10 (2019-2024 only)', 'None'],
          ],
          caption: 'There are two titles: the Drivers’ Championship and the Constructors’ Championship, in which a team scores the points of both its cars.',
        },
        {
          t: 'table',
          head: ['Share of scheduled distance completed', 'Points for 1st to 10th'],
          rows: [
            ['Fewer than 2 laps under green flag', 'No points'],
            ['2 laps up to 25%', '6-4-3-2-1 (top 5)'],
            ['25% up to 50%', '13-10-8-6-5-4-3-2-1 (top 9)'],
            ['50% up to 75%', '19-14-12-9-8-6-5-3-2-1'],
            ['75% or more', 'Full points'],
          ],
          caption: 'Scaled points for shortened races, introduced after the 2021 Belgian Grand Prix (where half points were given after only laps behind the safety car) and clarified for 2023 after confusion at the 2022 Japanese Grand Prix. Check the current regulations for exact thresholds.',
        },
        {
          t: 'example',
          title: 'Worked example: Constructors’ points',
          lines: [
            { label: 'Car 1', text: 'Wins: 25 points' },
            { label: 'Car 2', text: 'Finishes 6th: 8 points' },
            { label: 'Team', text: '25 + 8 = 33 Constructors’ points; a perfect one-two (25 + 18) is worth 43' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Tie-break', def: 'If drivers finish level on points, the one with more wins ranks higher; then more second places, and so on down the positions.' },
            { term: 'Classification', def: 'A driver who retires can still be classified (and score) if they completed at least 90% of the winner’s distance.' },
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
          title: 'Questions and answers',
          lines: [
            { label: 'Q1', text: 'A driver is 13th fastest in Q2. Where do they start, with no penalties? **A:** 13th. Q2 eliminations fill P11-P15 in order of Q2 time.' },
            { label: 'Q2', text: 'In 2024, a driver wins and sets the fastest lap. Points? **A:** 26. In 2025 the same result is worth 25, because the fastest-lap point was removed.' },
            { label: 'Q3', text: 'A team fits a new rear wing overnight after qualifying. Consequence? **A:** Breach of parc fermé; the car normally starts from the pit lane.' },
            { label: 'Q4', text: 'A race is stopped for good at 40% distance. Winner’s points? **A:** 13, under the scaled table.' },
            { label: 'Q5', text: 'Does the 2024-format sprint decide the grand prix grid? **A:** No. Grand prix qualifying on Saturday afternoon does.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/rules-penalties/flags-and-safety-procedures', note: 'What happens when the race is neutralised or stopped' },
            { path: 'sports/f1/rules-penalties/penalties-explained', note: 'Grid drops, time penalties and penalty points' },
            { path: 'sports/f1/racecraft/qualifying-and-one-lap-pace', note: 'How drivers build a qualifying lap' },
            { path: 'sports/f1/racecraft/race-strategy', note: 'Why the two-compound rule shapes strategy' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Sporting Regulations* (issues for 2022, 2023, 2024 and 2025), sections on practice, qualifying, sprint sessions, parc fermé, the start and points.',
    'Formula 1. Official explainer articles on the sprint format (formula1.com), 2021-2025.',
  ],
  related: [
    'sports/f1/start-here',
    'sports/f1/rules-penalties/flags-and-safety-procedures',
    'sports/f1/rules-penalties/penalties-explained',
    'sports/f1/racecraft/qualifying-and-one-lap-pace',
    'sports/f1/racecraft/race-strategy',
  ],
}

export default guide
