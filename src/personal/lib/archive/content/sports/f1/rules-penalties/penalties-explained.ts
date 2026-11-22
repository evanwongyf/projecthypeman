import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'When a driver breaks the rules, the stewards choose from a fixed menu of penalties, from a reprimand to disqualification. Knowing what each one costs in seconds, places or race bans explains a lot of strategy calls and pit-wall radio. This guide covers every penalty type, the usual triggers and the super-licence penalty-point system, as generally applied in 2022-2025. The penalty list sits in the FIA Formula 1 Sporting Regulations and the stewards also publish guidelines, but **both are revised every year and every case is judged on its facts**, so check the current FIA documents before relying on any figure.',
  nutshell: [
    '**Time penalties** of 5 or 10 seconds are served at the next pit stop, before any work is done, or added to race time if the driver does not stop again.',
    'A **drive-through** costs a full trip down the pit lane at the speed limit; a **10-second stop-and-go** adds a stationary 10 seconds on top.',
    '**Grid penalties** push a driver back for the next start. They are given for some driving offences and, most often, for using more power-unit parts than the season’s allocation.',
    '**Penalty points** go on the driver’s super licence. **12 points in 12 months means a one-race ban.**',
    'Common triggers: causing a collision, forcing another driver off, leaving the track and gaining an advantage, track limits, unsafe release, jump starts and speeding in the pit lane.',
  ],
  sections: [
    {
      id: 'menu',
      title: 'The penalty menu',
      lead: 'Listed roughly from lightest to heaviest. The stewards may combine them, for example a 10-second penalty plus two penalty points.',
      blocks: [
        {
          t: 'table',
          head: ['Penalty', 'How it is served', 'Approximate cost', 'Typical trigger'],
          rows: [
            ['Reprimand', 'Recorded only', 'Nothing immediately; five in a season (at least four for driving) trigger a 10-place grid drop', 'Minor breaches: unsafe driving in practice, procedural slips'],
            ['Fine', 'Paid by team or driver', 'Money only', 'Pit-lane speeding in practice, team procedural breaches'],
            ['Lap time deleted', 'Lap removed from the classification', 'Can cost a place in Q2 or Q3', 'Track limits in qualifying'],
            ['5-second time penalty', 'Stationary 5 s at next stop before any work, or added to race time', 'About 5 s', 'Causing a collision, forcing off, track limits after warnings'],
            ['10-second time penalty', 'As above, 10 s', 'About 10 s', 'Serious collision, gaining a lasting advantage, repeat offences'],
            ['Drive-through', 'Drive through the pit lane without stopping, usually within three laps of being told', 'The pit-lane loss, often 15-25 s depending on the circuit', 'Serious breaches, some safety-car offences'],
            ['10-second stop-and-go', 'Stop in the pit box for 10 s with no work, usually within three laps', 'Pit-lane loss plus 10 s', 'Very serious breaches; rare'],
            ['Grid drop (e.g. 3, 5 or 10 places)', 'Applied to the next start', 'Places, not seconds', 'Impeding in qualifying, causing a collision in a previous race, extra power-unit parts'],
            ['Back of grid / pit-lane start', 'Next start', 'Usually many places', 'Too many grid-drop places, parc fermé breach'],
            ['Disqualification', 'Removed from results', 'All points from the session', 'Technical breach, serious misconduct'],
            ['Race ban (suspension)', 'Miss the next event', 'All points from that event', '12 penalty points in 12 months, or very serious misconduct'],
          ],
          caption: 'If a drive-through or stop-and-go cannot be served (for example in the last laps), it is converted into time added to the result; recent regulations set 20 s for a drive-through and 30 s for a 10-second stop-and-go.',
        },
        {
          t: 'example',
          title: 'Worked example: serving a 5-second penalty',
          lines: [
            { label: 'Normal stop', text: 'Car stops, tyres changed in about 2.5 s.' },
            { label: 'With penalty', text: 'Car stops, crew waits 5.0 s, then changes tyres in 2.5 s: stationary 7.5 s.' },
            { label: 'Cost', text: 'About 5 s extra, plus a little lost rhythm.' },
            { label: 'Trap', text: 'If the crew touches the car before the 5 s have passed, the stewards add a further penalty.' },
          ],
        },
        {
          t: 'example',
          title: 'Worked example: penalty added after the flag',
          lines: [
            { label: 'Finish', text: 'Driver A crosses the line 3.2 s ahead of Driver B, with an unserved 5-second penalty.' },
            { label: 'Adjustment', text: 'A’s time + 5.0 s, so A is now 1.8 s behind B.' },
            { label: 'Result', text: 'B is classified ahead. Drivers with a pending penalty often push to build a gap larger than the penalty.' },
          ],
        },
      ],
    },
    {
      id: 'offences',
      title: 'Common offences and what they usually cost',
      blocks: [
        {
          t: 'table',
          head: ['Offence', 'What it means', 'Typical penalty', 'Severity', 'Example situation'],
          rows: [
            ['Causing a collision', 'A driver is wholly or mainly to blame for contact', '5 or 10 s, plus about 2 penalty points', 'Medium-high', 'Locking up into a hairpin and hitting the car ahead'],
            ['Forcing another driver off', 'Leaving no room, pushing a rival off the track', '5 s, plus penalty points', 'Medium', 'Running a car alongside off the track at a corner exit'],
            ['Leaving the track and gaining an advantage', 'Overtaking or keeping a place by going off', 'Give the place back; otherwise 5 or 10 s', 'Medium', 'Passing a rival around the outside with all four wheels off'],
            ['Track limits', 'All four wheels beyond the white line (no part of the car on track)', 'Lap deleted; warnings, then a black-and-white flag, then penalties (often 5 s, rising for repeats)', 'Low per offence', 'Running wide at a fast exit kerb lap after lap'],
            ['Unsafe release', 'Car sent from the pit box into the path of another car, or with a loose wheel', '5 or 10 s in the race; team fine; grid drop if a wheel comes off in some cases', 'Medium-high', 'Released into a car arriving in the fast lane'],
            ['Jump start', 'Moving before the lights go out, detected by sensors', 'Usually 5 or 10 s, or a drive-through', 'Medium-high', 'Creeping forward on the grid'],
            ['Wrong grid position', 'Stopping outside your grid box', 'Usually 5 s', 'Low', 'Stopping too far to one side of the box'],
            ['Pit-lane speeding (race)', 'Over the limit (often 80 km/h) in the pit lane', 'Usually 5 s', 'Low-medium', 'Pressing the limiter too late on entry'],
            ['Crossing the pit-exit line', 'Crossing the white line after pit exit', 'Usually 5 s', 'Low', 'Cutting the line rejoining the track'],
            ['Ignoring blue flags', 'Not letting a faster car lap you', 'Usually 5 s', 'Low', 'Backmarker holding up the leader for several corners'],
            ['Impeding in qualifying', 'Slowing a driver on a fast lap', 'Usually 3-place grid drop', 'Medium', 'Cruising on the racing line in the final sector'],
            ['Not slowing for yellows', 'Insufficient lift in a yellow zone', 'Grid drop in qualifying; time penalty in races', 'Medium-high', 'A personal best sector under double yellow'],
            ['Safety car / red flag breaches', 'Overtaking, or more than ten car lengths behind', '5 s upwards; red-flag breaches can be severe', 'Medium-high', 'Passing under the safety car before the control line'],
          ],
          caption: 'Values are typical, based on stewards’ published decisions and guidelines. They are not fixed tariffs; mitigating and aggravating factors change the outcome.',
        },
        {
          t: 'flow',
          title: 'How the stewards size a penalty',
          nodes: [
            { label: 'Incident noted', tone: 'data' },
            { label: 'Was it a breach?', sub: 'or a racing incident', tone: 'human' },
            { label: 'Who was wholly or mainly to blame?', tone: 'human' },
            { label: 'Consequence', sub: 'positions gained, damage, safety', tone: 'model' },
            { label: 'Penalty and points', sub: 'guidelines plus precedent', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Give the place back', text: 'If a driver gains a position by leaving the track, the team often tells them to give it back straight away. Stewards usually take no further action if the advantage is fully returned, but they can still act if it was not.' },
      ],
    },
    {
      id: 'grid-penalties',
      title: 'Grid penalties and power-unit allocation',
      blocks: [
        { t: 'p', text: 'Each driver has a seasonal allocation of power-unit elements: the engine (ICE), turbocharger (TC), MGU-H, MGU-K, energy store (ES) and control electronics (CE), plus exhaust systems and gearbox parts. In 2022-2025 the allocation was typically three or four of each major element and two or three of the battery and electronics, depending on the season and the number of races. Using one more than allowed brings a grid penalty, as explained in [power units and energy recovery](@sports/f1/physics-theory/power-units-and-ers).' },
        {
          t: 'table',
          head: ['Event', 'Grid penalty (generally)'],
          rows: [
            ['First extra element of a type', '10 places'],
            ['Each further extra element of that type', '5 places'],
            ['More than 15 places in total', 'Start from the back of the grid'],
            ['Extra gearbox or drivetrain parts beyond the allocation', 'Grid drop, often 5 places'],
            ['Changes made under parc fermé', 'Pit-lane start'],
          ],
          caption: 'If several drivers have back-of-grid penalties, the regulations set their order, generally by the order in which the penalties were incurred.',
        },
        {
          t: 'example',
          title: 'Worked example: stacking a grid drop',
          lines: [
            { label: 'Qualifying', text: 'Driver qualifies 6th.' },
            { label: 'Change', text: 'Takes a 4th ICE (first over the allocation of 3): 10 places. Also a 4th MGU-K: 10 more.' },
            { label: 'Total', text: '20 places, more than 15, so the driver starts from the back.' },
            { label: 'Why do it?', text: 'Once at the back anyway, teams often fit several new parts at once, building a pool of fresh engines for later rounds.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Tactical engine changes', text: 'Teams prefer to take power-unit penalties at circuits where overtaking is easy, such as Monza or Spa, and avoid them at Monaco, where starting at the back is almost hopeless.' },
      ],
    },
    {
      id: 'penalty-points',
      title: 'Super licence penalty points',
      blocks: [
        { t: 'p', text: 'Every F1 driver needs an FIA **super licence**. Since 2014, stewards can add penalty points to it alongside other penalties. Points expire 12 months after they were given.' },
        {
          t: 'levels',
          items: [
            { name: '1 point', body: 'Minor driving offences, such as some track-limits or procedural breaches' },
            { name: '2 points', body: 'Common for causing a collision or forcing another driver off' },
            { name: '3 points', body: 'More serious offences, such as dangerous driving or ignoring flags' },
            { name: '12 points in 12 months', body: 'Automatic one-event ban, then the total is reset' },
          ],
          caption: 'Point values come from each decision; these are typical bands.',
        },
        {
          t: 'example',
          title: 'Worked example: the rolling 12 months',
          lines: [
            { label: 'March last year', text: '2 points' },
            { label: 'June last year', text: '3 points' },
            { label: 'October last year', text: '4 points (several incidents)' },
            { label: 'April this year', text: 'March’s 2 points have expired. Total now 3 + 4 = 7, plus any new points' },
            { label: 'May this year', text: 'A 2-point penalty: 9. Two more 2-pointers before June’s expire would reach 13 and a ban' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The first ban', text: 'The first race ban under the system came in 2024, when Kevin Magnussen reached 12 points and missed the Azerbaijan Grand Prix. The case fed a wider debate about whether minor offences should carry points.' },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common misunderstandings',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Remember a 5-second penalty can be served during a stop',
            'Check whether penalty points were added as well as a time penalty',
            'Apply grid drops after qualifying, in order',
            'Treat a "racing incident" ruling as a deliberate decision, not a failure to act',
          ],
          dont: [
            'Assume penalties are fixed tariffs; context changes them',
            'Assume a reprimand is meaningless; five in a season cost 10 places',
            'Confuse a drive-through (no stop) with a stop-and-go (10 s stationary)',
            'Forget that converted penalties after the race are 20 s or 30 s, not 5 s',
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
            { label: 'Q1', text: 'A driver with a 10-second penalty finishes 8 s ahead of the next car. Final position? **A:** One place lower, 2 s behind.' },
            { label: 'Q2', text: 'A driver qualifies 3rd with a 5-place drop. Start position? **A:** 8th, with drivers 4th to 8th each moving up one place.' },
            { label: 'Q3', text: 'Ten penalty points, then a 2-point penalty. Result? **A:** 12 points within 12 months: a one-race ban.' },
            { label: 'Q4', text: 'A drive-through is given with two laps to go. What happens? **A:** It is converted into time added after the race, 20 s under recent rules.' },
            { label: 'Q5', text: 'A driver passes off-track but hands the place straight back. Penalty likely? **A:** Usually no further action.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/rules-penalties/stewards-and-protests', note: 'Who decides, and how to challenge a decision' },
            { path: 'sports/f1/rules-penalties/flags-and-safety-procedures', note: 'Flag offences in context' },
            { path: 'sports/f1/racecraft/overtaking-and-defending', note: 'Where hard racing ends and forcing off begins' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *Formula 1 Sporting Regulations* 2022-2025, articles on penalties, power-unit allocation and super licence penalty points.',
    'FIA. *International Sporting Code*, Appendix L (super licence and penalty points).',
    'FIA. Stewards’ decision documents, published for each grand prix.',
  ],
  related: [
    'sports/f1/rules-penalties/stewards-and-protests',
    'sports/f1/rules-penalties/flags-and-safety-procedures',
    'sports/f1/rules-penalties/technical-and-financial-rules',
    'sports/f1/physics-theory/power-units-and-ers',
    'sports/f1/racecraft/overtaking-and-defending',
  ],
}

export default guide
