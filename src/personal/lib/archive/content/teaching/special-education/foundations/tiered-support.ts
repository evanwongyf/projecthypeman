import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Tiered support systems, known as MTSS or RTI in the United States and the graduated approach in England, organise help in layers. Everyone gets high-quality teaching; learners who need more get targeted help; a few get intensive, individual support. Data decides who moves between tiers.',
  nutshell: [
    '**Tier 1**: quality teaching for all. **Tier 2**: targeted small-group help. **Tier 3**: intensive, individual intervention.',
    'Universal screening finds learners who may need more; progress monitoring checks whether help is working.',
    'Intervene early, instead of waiting for learners to fall far behind.',
    'Tier 1 does most of the work: if many learners need Tier 2, fix Tier 1.',
  ],
  sections: [
    {
      id: 'tiers',
      title: 'Three tiers',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Tier 1: universal', body: 'High-quality, evidence-based teaching for every learner, with [differentiation](@teaching/differentiation/foundations) and [UDL](@teaching/differentiation/udl). Most learners (often cited as about 80%) should succeed here.' },
            { name: 'Tier 2: targeted', body: 'Extra small-group instruction for learners not making enough progress at Tier 1: for example, a phonics group three times a week for eight weeks. Often around 15% of learners.' },
            { name: 'Tier 3: intensive', body: 'Individual or very small-group intervention, more often and for longer, often with specialists. May lead to assessment for special education. Often around 5% of learners.' },
          ],
          caption: 'The percentages are rough targets, not rules. Tiers add to each other: a Tier 3 learner still receives Tier 1 teaching.',
        },
      ],
    },
    {
      id: 'data',
      title: 'Data-based decisions',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Universal screening', def: 'A short check of all learners, usually three times a year, to spot those at risk: for example, a one-minute reading fluency probe.' },
            { term: 'Progress monitoring', def: 'Frequent short checks (weekly or fortnightly) for learners receiving extra help, plotted on a graph against a goal line.' },
            { term: 'Decision rules', def: 'Agreed rules, such as "if four data points in a row fall below the goal line, change the intervention".' },
            { term: 'Fidelity', def: 'Checking the intervention is delivered as designed, so a lack of progress is not simply due to poor delivery.' },
          ],
        },
      ],
    },
    {
      id: 'graduated',
      title: 'The graduated approach',
      lead: 'England’s version.',
      blocks: [
        {
          t: 'cycle',
          items: [
            { name: 'Assess', body: 'Gather information about the learner’s needs from teachers, assessments, the learner and family.' },
            { name: 'Plan', body: 'Agree outcomes, support and a review date with the learner and family.' },
            { name: 'Do', body: 'The class teacher stays responsible, working with support staff and specialists to deliver the plan.' },
            { name: 'Review', body: 'Check progress against outcomes and decide the next step: continue, change, or seek more specialist help.' },
          ],
          caption: 'The SEND Code of Practice (2015) describes this cycle for learners on SEN support. Each round refines the next.',
        },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Pitfalls',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Strengthen Tier 1 first; it helps everyone and reduces demand on later tiers.',
            'Use interventions with evidence behind them, delivered by trained staff.',
            'Keep interventions time-limited with clear exit criteria.',
            'Make sure learners in intervention do not miss the core lesson they most need.',
          ],
          dont: [
            'Wait for learners to fail badly before offering help.',
            'Keep learners in the same intervention for years without checking it works.',
            'Treat tiers as labels for learners rather than levels of support.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Fuchs, D., & Fuchs, L. S. (2006). Introduction to response to intervention: What, why, and how valid is it? *Reading Research Quarterly, 41*(1), 93–99.',
    'Department for Education & Department of Health. (2015). *SEND code of practice: 0 to 25 years*, chapter 6.',
    'Education Endowment Foundation. (2020). *Special educational needs in mainstream schools: Guidance report*.',
  ],
  related: ['teaching/special-education/foundations/plans', 'teaching/techniques/instruction/mastery', 'teaching/differentiation/foundations'],
}

export default guide
