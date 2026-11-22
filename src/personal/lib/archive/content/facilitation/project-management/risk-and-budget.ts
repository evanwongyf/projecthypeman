import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Programmes that take people outdoors, overnight or into unfamiliar settings need a real risk assessment, not a form filled in after the plan is fixed. They also need a budget that survives contact with reality. This guide covers risk matrices, controls, contingency and simple budget tracking, with worked numbers.',
  nutshell: [
    'Risk score = **likelihood × severity**, each on a 1–5 scale.',
    'Control risks in order: **eliminate, substitute, engineer, administer, protect** (the hierarchy of controls).',
    'Set **contingency** from expected cost: probability × impact, summed over risks.',
    '**Earned value** compares what you have spent with what you have achieved.',
  ],
  sections: [
    {
      id: 'matrix',
      title: 'The risk matrix',
      blocks: [
        {
          t: 'math',
          tex: String.raw`R = L \times S`,
          caption: 'A risk score from likelihood and severity, each rated 1 (lowest) to 5 (highest).',
          plain: 'Rate how likely a hazard is to cause harm (1 rare to 5 almost certain) and how bad the harm would be (1 negligible to 5 catastrophic). Multiply. Scores from 1 to 25 are then banded: often 1–4 low, 5–9 medium, 10–16 high, 20–25 very high. You then add controls and score the residual risk again.',
          where: [
            { sym: 'R', def: 'risk score (1 to 25)' },
            { sym: 'L', def: 'likelihood rating (1 to 5)' },
            { sym: 'S', def: 'severity rating (1 to 5)' },
          ],
          syntax: [
            { sym: String.raw`\times`, say: '“times”' },
          ],
          worked: {
            title: 'Kayaking session for Secondary 1 students',
            steps: [
              'Hazard: capsize leading to a student in difficulty in water. Without controls: L = 3 (possible), S = 5 (could be fatal).',
              String.raw`\(R = 3 \times 5 = 15\): high.`,
              'Controls: buoyancy aids checked by instructors, swim test, a 1:8 instructor ratio with a rescue boat, calm-water site, capsize drill first.',
              String.raw`Residual: L = 1 (rare), S = 5. \(R = 1 \times 5 = 5\): medium, acceptable with controls monitored.`,
            ],
            why: [
              'rate the hazard as it would be with no controls',
              'multiply to place it in a band',
              'list specific controls, highest in the hierarchy first',
              'severity rarely changes; good controls reduce likelihood',
            ],
            answer: 'Go ahead with the controls in place, and record who is responsible for each one. A residual score still in the high band would mean redesigning the activity.',
          },
        },
        { t: 'levels', caption: 'The hierarchy of controls, most effective at the top.', items: [
          { name: 'Eliminate', body: 'Remove the hazard: cancel the night river crossing.' },
          { name: 'Substitute', body: 'Swap for something safer: a bridge instead of a ford.' },
          { name: 'Engineer', body: 'Physical safeguards: handrails, a fixed line.' },
          { name: 'Administrative', body: 'Rules, training, supervision ratios, briefings.' },
          { name: 'Personal protective equipment', body: 'Helmets, buoyancy aids, gloves.' },
        ] },
      ],
    },
    {
      id: 'contingency',
      title: 'Contingency from expected cost',
      blocks: [
        {
          t: 'math',
          tex: String.raw`C = \sum_{i} p_i \times I_i`,
          caption: 'Expected cost of risks: each risk’s probability times its cost if it happens, added up.',
          plain: 'For each cost risk, estimate the chance it happens and what it would cost. Multiply them to get its expected cost, then add over all the risks. That sum is a reasonable size for a contingency fund: enough on average, though not enough if several bad things happen at once.',
          where: [
            { sym: 'C', def: 'expected cost of the risks (the contingency)' },
            { sym: String.raw`p_i`, def: 'probability of risk i happening (0 to 1)' },
            { sym: String.raw`I_i`, def: 'cost if it happens (impact)' },
          ],
          syntax: [
            { sym: String.raw`\sum_i`, say: '“the sum over i”: add one term per risk' },
          ],
          worked: {
            title: 'A camp budget of $18,000',
            steps: [
              'Risk 1: rain forces an indoor hall hire. p = 0.3, cost $1,500. Expected $450.',
              'Risk 2: coach price rises. p = 0.5, cost $800. Expected $400.',
              'Risk 3: extra first aid staff required. p = 0.2, cost $1,000. Expected $200.',
              String.raw`\(C = 450 + 400 + 200 = \$1{,}050\).`,
              String.raw`As a share of the budget: \(1{,}050 / 18{,}000 \approx 5.8\%\).`,
            ],
            why: [
              'probability times impact for the first risk',
              'and for the second',
              'and for the third',
              'add the expected costs',
              'compare with the common rule of thumb of 5–10% contingency',
            ],
            answer: 'Hold about $1,050 (round to $1,100) as contingency. If the rain risk is likely to come together with others, hold more.',
          },
        },
      ],
    },
    {
      id: 'evm',
      title: 'Tracking spending: earned value',
      blocks: [
        {
          t: 'math',
          tex: String.raw`CPI = \frac{EV}{AC}, \qquad SPI = \frac{EV}{PV}`,
          caption: 'Cost and schedule performance indices from earned value management.',
          plain: 'Planned value (PV) is the budgeted cost of the work you planned to have done by now. Earned value (EV) is the budgeted cost of the work actually done. Actual cost (AC) is what you have really spent. EV ÷ AC below 1 means you are getting less work per dollar than planned; EV ÷ PV below 1 means you are behind schedule.',
          where: [
            { sym: 'PV', def: 'planned value: budget for work scheduled to date' },
            { sym: 'EV', def: 'earned value: budget for work actually completed' },
            { sym: 'AC', def: 'actual cost spent to date' },
            { sym: 'CPI', def: 'cost performance index (above 1 is under budget)' },
            { sym: 'SPI', def: 'schedule performance index (above 1 is ahead)' },
          ],
          syntax: [
            { sym: String.raw`\frac{EV}{AC}`, say: '“EV over AC”' },
          ],
          worked: {
            title: 'Halfway through a ten-session workshop series',
            steps: [
              'Budget $10,000 for 10 sessions ($1,000 each). By week 5, 5 sessions were planned: PV = $5,000.',
              'Only 4 sessions have run: EV = 4 × $1,000 = $4,000. Spent so far: AC = $4,800.',
              String.raw`\(CPI = 4{,}000 / 4{,}800 \approx 0.83\). \(SPI = 4{,}000 / 5{,}000 = 0.80\).`,
              String.raw`Forecast total cost at this efficiency: \(10{,}000 / 0.83 \approx \$12{,}000\).`,
            ],
            why: [
              'planned value is the budget for what should be done by now',
              'earned value counts only work actually done, at budgeted rates',
              'divide earned by actual, and earned by planned',
              'if efficiency stays the same, the whole budget is scaled up by 1 ÷ CPI',
            ],
            answer: 'The series is running about 20% behind schedule and costing about 20% more per session than planned: on track for about $12,000. Act now: renegotiate costs or cut scope.',
          },
        },
        { t: 'table', head: ['Per-head budget line', 'Example (120 students)'], rows: [
          ['Venue and meals', '$90 × 120 = $10,800'],
          ['Transport', '$3,000'],
          ['Equipment and materials', '$1,500'],
          ['Specialist instructors', '$1,600'],
          ['Contingency (about 6%)', '$1,100'],
          ['**Total**', '**$18,000 (= $150 per student)**'],
        ] },
      ],
    },
  ],
  sources: [
    'Health and Safety Executive (UK). Risk assessment: a brief guide to controlling risks in the workplace (INDG163).',
    'Ministry of Education Singapore. Guidelines on safety for outdoor activities (school circulars).',
    'Project Management Institute (2019). The Standard for Earned Value Management.',
  ],
  related: ['facilitation/project-management/scheduling', 'facilitation/unity/activities', 'first-aid/start-here'],
}

export default guide
