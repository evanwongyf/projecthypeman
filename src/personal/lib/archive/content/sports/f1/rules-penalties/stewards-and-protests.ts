import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Every penalty in Formula 1 comes from a small panel of stewards, not from the race director and not from the television replay. This guide explains who the stewards are, how an incident moves from "noted" to a published decision, and how teams can challenge rulings through protests, the right of review and appeals. It follows the FIA International Sporting Code and F1 Sporting Regulations as generally applied in 2022-2025. **Procedures, deadlines and fees change**, so check the current FIA documents before relying on any detail.',
  nutshell: [
    'The **race director** runs the event (flags, safety car, track limits notes); the **stewards** judge breaches and hand out penalties.',
    'A grand prix usually has four stewards: three FIA stewards, one of them chairing, and a former racing driver.',
    'Incidents move through stages: **noted**, **under investigation**, then a decision: no further action, a penalty, or "racing incident".',
    'A team can **protest** another competitor, ask for a **right of review** if there is a significant new element, and **appeal** some decisions to the FIA International Court of Appeal.',
    'Not every decision can be appealed: in-race time penalties and drive-throughs, for example, cannot.',
  ],
  sections: [
    {
      id: 'who',
      title: 'Who decides what',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Race director', body: 'Runs the session: starts and stops it, deploys the safety car, shows flags and issues event notes such as track-limits guidance. Can report incidents to the stewards but does not set penalties.', tag: 'operations' },
            { title: 'Stewards', body: 'An independent panel, usually four people including a former driver. They investigate, hold hearings and decide penalties. Their decisions are published as numbered documents.', tag: 'judges' },
            { title: 'Technical delegate', body: 'Leads scrutineering. Reports technical breaches, such as an underweight car or a worn plank, to the stewards for a decision.', tag: 'checks' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: "the FIA gave him a penalty mid-race"', text: 'Strictly, the stewards did. The race director’s office and the stewards sit separately, and the separation was strengthened in the reforms after the 2021 season, which also added remote support from an operations centre.' },
        {
          t: 'terms',
          items: [
            { term: 'Driver steward', def: 'A former racing driver on the panel who brings a competitor’s view of an incident.' },
            { term: 'Stewards’ decision', def: 'A published document naming the car, the facts, the breach, the penalty and the reasons.' },
            { term: 'Summons', def: 'A call for a driver or team representative to attend a hearing.' },
            { term: 'Racing incident', def: 'A finding that contact or an incident was nobody’s fault, or not mainly one driver’s.' },
          ],
        },
      ],
    },
    {
      id: 'investigation',
      title: 'How an incident is handled',
      blocks: [
        {
          t: 'flow',
          title: 'From incident to decision',
          nodes: [
            { label: 'Incident', sub: 'reported by race control, a team or the stewards themselves', tone: 'data' },
            { label: 'Noted', sub: 'logged for a look', tone: 'process' },
            { label: 'Under investigation', sub: 'now or after the session', tone: 'process' },
            { label: 'Evidence', sub: 'video, onboards, telemetry, radio, hearings', tone: 'human' },
            { label: 'Decision', sub: 'no action, racing incident, or penalty', tone: 'output' },
          ],
          caption: 'Messages on the timing screens follow these stages: "noted", "under investigation", "will be investigated after the race", then "no further action" or a penalty.',
        },
        {
          t: 'table',
          head: ['Evidence', 'What it shows'],
          rows: [
            ['Broadcast and CCTV footage', 'Positions, lines and timing from many angles'],
            ['Onboard cameras', 'Steering input, the driver’s view, mirror visibility'],
            ['Telemetry', 'Braking points, throttle, speed, steering angle, compared with normal laps'],
            ['GPS and timing data', 'Gaps, speeds under flags, delta times under the VSC'],
            ['Team radio', 'Instructions, warnings, admissions'],
            ['Hearings', 'Each driver’s account, with team representatives'],
          ],
        },
        {
          t: 'example',
          title: 'Worked example: a first-corner collision',
          lines: [
            { label: 'Lap 1', text: 'Car 1 brakes late on the inside of Turn 1 and hits Car 2, which spins.' },
            { label: 'Screen', text: '"Turn 1 incident involving cars 1 and 2: noted", then "under investigation".' },
            { label: 'Questions', text: 'Was Car 1 alongside? Did it lock up? Was there space? Could Car 2 have avoided it?' },
            { label: 'Decision', text: 'Lap-1 incidents are often treated more leniently because the field is bunched. A penalty would typically be 5 or 10 s plus penalty points; otherwise "racing incident".' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Driving standards guidelines', text: 'The FIA publishes guidelines for judging overtakes, setting out when a car on the inside or outside is entitled to room, based on where its axles are relative to the other car at the apex. They guide the stewards; they are not mechanical rules. See [overtaking and defending](@sports/f1/racecraft/overtaking-and-defending).' },
      ],
    },
    {
      id: 'challenges',
      title: 'Protests, right of review and appeals',
      blocks: [
        {
          t: 'table',
          head: ['Route', 'Who can use it', 'When', 'What it needs', 'Typical result'],
          rows: [
            ['Protest', 'A competitor (team) affected by another’s actions or car', 'Within a short deadline after the session, often 30 minutes after the provisional classification for results', 'A written protest and a fee', 'Upheld or rejected by the stewards'],
            ['Right of review', 'A party involved, or the stewards themselves', 'Within 14 days of the decision', 'A significant and relevant new element not available at the time', 'Often rejected because there is no new element'],
            ['Appeal', 'A competitor penalised (or the FIA)', 'Notice of intention within a short deadline, then a formal appeal', 'Grounds that the decision was wrong', 'Heard by the FIA International Court of Appeal'],
          ],
          caption: 'Deadlines and fees are set in the FIA International Sporting Code and Judicial and Disciplinary Rules, which are revised periodically.',
        },
        {
          t: 'flow',
          title: 'Can this decision be challenged?',
          nodes: [
            { label: 'Stewards’ decision', tone: 'data' },
            { label: 'New evidence?', sub: 'yes: request a right of review', tone: 'human' },
            { label: 'Appealable penalty?', sub: 'not in-race time penalties or drive-throughs', tone: 'human' },
            { label: 'Notice of appeal', tone: 'process' },
            { label: 'International Court of Appeal', tone: 'output' },
          ],
        },
        {
          t: 'table',
          head: ['Case', 'Route', 'Principle'],
          rows: [
            ['Renault v Racing Point, 2020', 'Protest over brake-duct design', 'Upheld: Racing Point was fined and lost Constructors’ points; protests can test whether a design follows the sporting rules'],
            ['Mercedes, Brazil 2021', 'Right of review after a defensive move', 'Rejected: new onboard footage was not judged a significant new element'],
            ['Mercedes, Abu Dhabi 2021', 'Two protests after the race', 'Rejected; an intention to appeal was later withdrawn and the FIA reviewed its race control processes'],
            ['Haas, United States 2023', 'Right of review over rivals’ track limits', 'Rejected: the evidence was not found to be a new element'],
          ],
          caption: 'Presented for the procedure only. The details of each case are in the published FIA decisions.',
        },
      ],
    },
    {
      id: 'thinking-like-a-steward',
      title: 'Thinking like a steward',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Establish the facts', body: 'Where were the cars, what were their speeds, what did each driver do?' },
            { title: 'Find the rule', body: 'Which article was breached, if any? Racing hard is not an offence.' },
            { title: 'Apportion blame', body: 'Was one driver wholly or predominantly to blame?' },
            { title: 'Weigh the circumstances', body: 'Lap 1, wet track, mechanical failure, consequence for others, past precedent.' },
            { title: 'Choose a penalty', body: 'From the menu, guided by the published penalty guidelines; add penalty points if appropriate.' },
            { title: 'Write it up', body: 'A decision document with reasons, so teams can see the logic.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Read the published decision document before judging a ruling',
            'Remember stewards see telemetry and angles that television does not',
            'Expect consistency to be argued over; panels change from race to race',
          ],
          dont: [
            'Treat a "noted" message as a penalty in waiting; many end in no action',
            'Expect a right of review to succeed just because a team disagrees',
            'Assume every penalty can be appealed',
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
            { label: 'Q1', text: 'Who deploys the safety car: the race director or the stewards? **A:** The race director.' },
            { label: 'Q2', text: 'A team finds new footage three days after a race. Which route? **A:** A right of review, if the footage is a significant and relevant new element.' },
            { label: 'Q3', text: 'Can a driver appeal a 5-second in-race time penalty? **A:** Generally no; such penalties are not open to appeal.' },
            { label: 'Q4', text: 'What does "no further action" mean? **A:** The stewards looked and found no breach worth penalising.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'sports/f1/rules-penalties/penalties-explained', note: 'What the stewards can hand out' },
            { path: 'sports/f1/rules-penalties/technical-and-financial-rules', note: 'Technical protests and disqualifications' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *International Sporting Code*, articles on stewards, protests, right of review and appeals.',
    'FIA. *Judicial and Disciplinary Rules* (International Court of Appeal).',
    'FIA. Stewards’ and International Court of Appeal decision documents, 2020-2023.',
  ],
  related: [
    'sports/f1/rules-penalties/penalties-explained',
    'sports/f1/rules-penalties/flags-and-safety-procedures',
    'sports/f1/rules-penalties/technical-and-financial-rules',
    'sports/f1/racecraft/overtaking-and-defending',
  ],
}

export default guide
