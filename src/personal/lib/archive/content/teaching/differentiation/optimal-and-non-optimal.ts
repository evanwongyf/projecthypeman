import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Differentiation is one of the most recommended and most misunderstood ideas in teaching. Done well, it keeps high expectations for everyone while adjusting the route. Done badly, it sorts children into permanent tracks, lowers goals for some, exhausts teachers and is justified by myths. This guide sets out what the evidence supports, the common failure modes, and a self-audit.',
  nutshell: [
    'Reviews find **small to moderate positive effects** of within-class differentiation, with large variation (Deunk et al., 2018; Smale-Jacobse et al., 2019).',
    'The effective core is **formative assessment + flexible responsive teaching + high expectations for all**.',
    'Non-optimal DI: **fixed ability groups**, **lowered goals**, **learning-styles matching**, **too many versions**, **busy work for fast finishers**.',
    'Grouping by attainment **across classes** (streaming) shows little benefit on average and tends to harm lower groups; flexible **within-class** grouping and **acceleration** for advanced learners have better evidence.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'What the evidence says',
      blocks: [
        { t: 'table', head: ['Practice', 'Evidence (summarised)'], rows: [
          ['Within-class differentiation (primary)', 'Small positive average effect (Deunk et al., 2018 meta-analysis, d ≈ 0.15), larger for some programmes'],
          ['Differentiation in secondary', 'Mixed, small-to-moderate positive effects; few rigorous studies (Smale-Jacobse et al., 2019)'],
          ['Mastery learning', 'Moderate positive effects (Kulik, Kulik and Bangert-Drowns, 1990: about 0.5)'],
          ['Formative assessment', 'Positive effects, highly dependent on implementation (Black and Wiliam, 1998; later reviews smaller)'],
          ['Between-class ability grouping (streaming)', 'Near-zero average effect; lower groups tend to lose (Steenbergen-Hu et al., 2016; EEF)'],
          ['Within-class flexible grouping', 'Small positive effects'],
          ['Acceleration for advanced learners', 'Positive effects (Steenbergen-Hu et al., 2016)'],
          ['Matching to learning styles', 'No supporting evidence (Pashler et al., 2008)'],
        ] },
        { t: 'callout', tone: 'note', title: 'Why effects are hard to measure', text: '“Differentiation” covers everything from a hint card to an individual curriculum. Studies that define it tightly (for example, regular assessment followed by targeted small-group teaching) find clearer effects than studies of “differentiation” in general.' },
      ],
    },
    {
      id: 'compare',
      title: 'Optimal versus non-optimal',
      blocks: [
        { t: 'table', head: ['Aspect', 'Optimal', 'Non-optimal'], rows: [
          ['Goals', 'Same rigorous goal for all; routes differ', 'Different, lower goals for “low” learners'],
          ['Grouping', 'Flexible, based on recent evidence, changes often', 'Fixed ability tables for the year'],
          ['Basis', 'Formative assessment of the skill at hand', 'Labels, last year’s grades, learning styles'],
          ['Tasks', 'Respectful: equally engaging and important', '“Fun” tasks for some, worksheets for others'],
          ['Support', 'Scaffolds that fade; available to all', 'Permanent simplification; learned helplessness'],
          ['Fast finishers', 'Deeper, meaningful extension', 'More of the same, or “help the others”'],
          ['Teacher time', 'Targeted to where it is most needed, including the strongest', 'Spent mostly on behaviour or on the weakest only'],
          ['Workload', 'Few, reusable structures', 'Many bespoke worksheets every night'],
          ['Learner view', '“Everyone gets what they need”', '“I’m in the dumb group”'],
        ] },
      ],
    },
    {
      id: 'failures',
      title: 'Six ways DI goes wrong',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: '1. Lowered ceilings', body: 'A learner who always gets the easy version never meets the harder content and falls further behind. Support the route, not the destination.' },
          { title: '2. Fixed groups', body: 'Groups set in week one become identities. Low-group learners hear lower expectations and get less rich discussion.' },
          { title: '3. Learning styles', body: 'Time spent making visual, auditory and kinaesthetic versions buys nothing and can misdirect support.' },
          { title: '4. Worksheet overload', body: 'Three or more versions of everything exhausts teachers and the quality of all versions drops.' },
          { title: '5. Busy work for the fast', body: 'Advanced learners get more of the same, or become unpaid teaching assistants.' },
          { title: '6. Differentiating instead of teaching', body: 'Splitting the class too early, before a strong shared explanation and modelling, leaves everyone with less teacher input.' },
        ] },
      ],
    },
    {
      id: 'audit',
      title: 'A self-audit',
      blocks: [
        { t: 'checklist', items: [
          'Did I teach the core idea well to everyone first?',
          'Do all learners work towards the same success criteria?',
          'Were today’s groups based on evidence from the last few days?',
          'Will groups change next week?',
          'Does every task require real thinking?',
          'Do scaffolds have a plan to fade?',
          'Do my strongest learners get genuine challenge, and some of my time?',
          'Can I sustain this preparation every week?',
          'Would a learner in any group describe their work as interesting?',
        ] },
      ],
    },
  ],
  sources: [
    'Deunk, M. I. et al. (2018). Effective differentiation practices: A systematic review and meta-analysis of studies on the cognitive effects of differentiation practices in primary education. Educational Research Review, 24, 31–54.',
    'Smale-Jacobse, A. E. et al. (2019). Differentiated instruction in secondary education: A systematic review of research evidence. Frontiers in Psychology, 10, 2366.',
    'Steenbergen-Hu, S., Makel, M. C., & Olszewski-Kubilius, P. (2016). What one hundred years of research says about the effects of ability grouping and acceleration on K–12 students’ academic achievement. Review of Educational Research, 86(4), 849–899.',
    'Kulik, C.-L. C., Kulik, J. A., & Bangert-Drowns, R. L. (1990). Effectiveness of mastery learning programs: A meta-analysis. Review of Educational Research, 60(2), 265–299.',
    'Education Endowment Foundation. Teaching and Learning Toolkit: Setting and streaming; Within-class attainment grouping.',
    'Pashler, H. et al. (2008). Learning styles: Concepts and evidence. Psychological Science in the Public Interest, 9(3), 105–119.',
  ],
  related: ['teaching/differentiation/case-studies', 'teaching/differentiation/grouping', 'teaching/equity/structural-equity'],
}

export default guide
