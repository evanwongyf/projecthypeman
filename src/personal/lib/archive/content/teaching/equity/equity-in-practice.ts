import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The rest of this section is research; this page is synthesis. Not every teacher controls school funding or district tracking policy, but every teacher controls an enormous amount inside their own four walls. This guide pulls the evidence from across the section into a single practical framework for what to actually do.',
  nutshell: [
    'The strongest single predictor of a teacher closing gaps rather than widening them: genuinely high expectations, paired with the instructional support to meet them, not high expectations alone.',
    'Relationships are not a "soft" add-on to the evidence in this section, belonging, self-efficacy and reduced stereotype threat (see [motivation frameworks](@teaching/equity/motivation-equity)) are all built or broken through specific relational practices.',
    'Small, cheap, well-evidenced moves (values affirmation, universal screening for advanced courses, a better praise-to-correction ratio) are worth doing even without system-level change.',
    'Track what you can measure: a teacher who does not know whether a specific group is falling behind cannot act on it.',
  ],
  sections: [
    {
      id: 'framework',
      title: 'A practical framework',
      blocks: [
        {
          t: 'flow',
          title: 'From research to classroom practice',
          nodes: [
            { label: 'High expectations for every learner', sub: 'explicit, not assumed', tone: 'human' },
            { label: 'Instruction strong enough to meet them', sub: 'see rosenshine, worked examples', tone: 'model' },
            { label: 'Relationships and belonging', sub: 'reduce stereotype threat, build self-efficacy', tone: 'process' },
            { label: 'Remove the barriers you control', sub: 'access, discipline, scheduling', tone: 'process' },
            { label: 'Measure by group, not just overall', tone: 'output' },
          ],
          loop: 'revisit and adjust as data comes in',
        },
        {
          t: 'p',
          text: 'This mirrors what [culturally responsive teaching](@teaching/guides/classroom/culturally-responsive) describes as combining high expectations with learners\' cultures and experiences treated as assets, not deficits to be corrected.',
        },
      ],
    },
    {
      id: 'checklist',
      title: 'A working checklist',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Am I praising and grading effort, strategy and growth, not only being right fastest? (achievement goals, see motivation frameworks)',
            'Is my ratio of positive, specific acknowledgement to correction high enough? (behavioural frameworks)',
            'Have I engineered an early, genuine success for learners with a history of struggle? (self-efficacy)',
            'Do assessments avoid unnecessary identity-salience right before high-stakes moments? (stereotype threat)',
            'Am I over-representing or under-representing any group in referrals, discipline, gifted, advanced courses? (structural equity)',
            'Is instructional quality equal across any groups I am teaching, tracked or not?',
            'Do I know, with actual data, whether a specific group of my students is behind, not just an overall average?',
            'Where I cannot fix a structural barrier myself, have I raised it with someone who can?',
          ],
        },
        {
          t: 'dodont',
          do: [
            'Treat an achievement gap as a prompt to investigate causes, not a fixed fact about a group',
            'Use the cheap, well-evidenced interventions (affirmation exercises, universal screening, ratio tracking) even without system-level change',
            'Combine high expectations with real instructional and relational support, either alone is weaker than both together',
          ],
          dont: [
            'Assume "closing the gap" means lowering the bar for anyone, the evidence favours raising support, not lowering expectations',
            'Rely on a single mindset poster or one-off assembly as a substitute for the structural and instructional work',
            'Ignore within-school data broken down by group because the overall average looks fine',
          ],
        },
      ],
    },
    {
      id: 'closing',
      title: 'What the evidence does and doesn\'t support',
      blocks: [
        {
          t: 'table',
          head: ['Claim', 'What the research in this section actually supports'],
          rows: [
            ['"Background determines outcomes"', 'Background strongly predicts average outcomes, but explains far less of any individual\'s outcome than headlines suggest, within-group variation dwarfs between-group averages'],
            ['"Nothing schools do matters, it\'s all family background"', 'Contradicted by the tutoring, early-years, class-size and funding-reform evidence in this section, all showing real, causal, measurable school-driven effects'],
            ['"One brief intervention (mindset talk, affirmation exercise) fixes the gap"', 'Contradicted by the honest reading of the belonging/mindset literature: real but typically small effects, that work best layered onto strong teaching, not instead of it'],
            ['"High expectations alone close gaps"', 'Contradicted by research showing high expectations without the instructional and relational support to meet them can increase stress without improving outcomes'],
          ],
          caption: 'The throughline across every guide in this section: credible, research-backed progress is possible, it is rarely from one silver bullet, and it compounds when the behavioural, motivational, instructional and structural layers are addressed together.',
        },
        { t: 'callout', tone: 'note', title: 'Where to go next', text: 'Revisit [the opportunity gap](@teaching/equity/opportunity-gap) for the scale of the problem, [behavioural frameworks](@teaching/equity/behavioural-frameworks) and [motivation frameworks](@teaching/equity/motivation-equity) for the psychological layer, [the evidence on interventions](@teaching/equity/interventions-evidence) for what to invest in, and [structural barriers](@teaching/equity/structural-equity) for what to advocate for beyond your own classroom.' },
      ],
    },
  ],
  sources: [
    'Ladson-Billings, G. (1995). But that\'s just good teaching! The case for culturally relevant pedagogy. *Theory Into Practice*, 34(3), 159–165.',
    'Hattie, J. (2009). *Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement*. Routledge.',
    'Gorski, P. C. (2018). *Reaching and Teaching Students in Poverty: Strategies for Erasing the Opportunity Gap* (2nd ed.). Teachers College Press.',
  ],
  related: ['teaching/equity/motivation-equity', 'teaching/equity/behavioural-frameworks', 'teaching/guides/classroom/culturally-responsive'],
}

export default guide
