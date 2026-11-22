import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Behaviour management is never neutral: how a school responds to the same misbehaviour varies by the learner\'s race and income more than almost any other schooling outcome measured, and harsh, exclusionary discipline falls hardest on the learners already furthest behind. This guide covers the behavioural-science frameworks that work, and the data on which approaches widen gaps instead of closing them.',
  nutshell: [
    '**PBIS (Positive Behavioural Interventions and Supports)** applies [behaviourism](@teaching/theories/behaviourism) at a whole-school level: teach expectations explicitly, reinforce them generously, and intervene with increasing intensity only where needed.',
    'Exclusionary discipline (suspension, expulsion) is applied at substantially higher rates to Black students, students with disabilities, and low-income students, for comparable behaviour, across large US datasets.',
    'Every lost day of suspension is also a lost day of instruction, exclusionary discipline can directly widen the achievement gap it is sometimes used to manage.',
    '**Restorative practices** reduce suspensions in large studies, though effects on academic outcomes are more mixed and depend heavily on implementation quality.',
  ],
  sections: [
    {
      id: 'pbis',
      title: 'PBIS: behaviourism at a school-wide scale',
      blocks: [
        {
          t: 'p',
          text: 'Positive Behavioural Interventions and Supports (PBIS) takes the behaviourist principles from [behaviourism](@teaching/theories/behaviourism), teach the desired behaviour explicitly, reinforce it reliably, respond to lapses calmly and consistently, and applies them as a tiered, whole-school system rather than one teacher\'s individual classroom rules.',
        },
        {
          t: 'levels',
          caption: 'The same three-tier logic as MTSS/RTI, applied to behaviour instead of academics, see [tiered support](@teaching/special-education/foundations/tiered-support).',
          items: [
            { name: 'Tier 1: universal (all learners)', body: 'Explicitly taught, posted, practised expectations; a predictable ratio of positive to corrective feedback (often cited around 4:1 or 5:1); consistent routines.' },
            { name: 'Tier 2: targeted (some learners, ~10–15%)', body: 'Small-group social skills instruction, check-in/check-out systems, more frequent feedback loops, for learners not responding to tier 1 alone.' },
            { name: 'Tier 3: intensive (a few learners, ~1–5%)', body: 'Individual functional behaviour assessment and a personalised support plan, see [positive behaviour support](@teaching/special-education/strategies/behaviour-support).' },
          ],
        },
        {
          t: 'metric',
          name: 'the reinforcement-to-correction ratio',
          shows: 'How many specific, genuine positive acknowledgements of good behaviour a teacher or school gives for every corrective or negative interaction, a simple, countable proxy for whether the overall classroom climate is predominantly encouraging or predominantly policing.',
          eli5: 'Think of a bank account of goodwill between a teacher and a class. Every specific, genuine "nice job staying on task" is a small deposit; every "stop that" is a small withdrawal. A healthy account needs far more deposits than withdrawals, or the relationship (and the behaviour) starts to run into the red.',
          higher: 'More positive, specific acknowledgement relative to correction, associated in classroom-observation research with lower rates of disruptive behaviour and better classroom climate; a commonly cited target from PBIS research is around 4–5 positive interactions for every 1 corrective one, though the exact ratio matters less than the general direction.',
          lower: 'More correction relative to encouragement, a classroom that is mostly or only reactive to misbehaviour, which research consistently links to worse classroom climate and, for learners already facing other stressors, a greater risk of disengagement and eventual exclusion.',
          typical: 'Many PBIS implementations explicitly coach and track this ratio for teachers as a concrete, low-cost first step, precisely because it is easy to notice in oneself, cheap to change, and has a plausible, well-evidenced mechanism (behaviourist reinforcement) behind it.',
        },
      ],
    },
    {
      id: 'discipline-gap',
      title: 'The discipline gap',
      blocks: [
        {
          t: 'p',
          text: 'US Department of Education Office for Civil Rights data, collected from virtually every public school every two years, has consistently found that Black students, students with disabilities, and (though less consistently tracked nationally) low-income students are suspended and expelled at substantially higher rates than their peers, even when researchers control for the specific infraction reported.',
        },
        {
          t: 'table',
          head: ['Finding', 'What large US studies generally report'],
          rows: [
            ['Suspension rate gap', 'Black students are suspended at roughly 2–4× the rate of white students nationally, a gap that has persisted across multiple Office for Civil Rights data collections over the past two decades'],
            ['Subjectivity of referrals', 'Studies find the gap is largest for more subjective, judgement-based infractions (disrespect, defiance) and smaller for objective ones (possessing a weapon), suggesting bias in interpretation plays a role, not only differences in behaviour'],
            ['Students with disabilities', 'Suspended and expelled at roughly double the rate of students without disabilities in national data'],
            ['Academic cost', 'Each day of out-of-school suspension is a lost day of instruction; studies associate higher suspension rates with lower subsequent achievement, both for the suspended student and, in some studies, for their classmates'],
          ],
          caption: 'Exact multiples vary by dataset and year; the consistent, replicated pattern across US national data collections (roughly 2000s–2020s) is a meaningful gap that is not fully explained by differences in reported behaviour.',
        },
        { t: 'callout', tone: 'warn', title: 'A system that can widen the gap it is meant to manage', text: 'If exclusionary discipline is applied unevenly, and lost instructional time predicts lower achievement, discipline policy becomes an active contributor to the achievement gap described in [the opportunity gap](@teaching/equity/opportunity-gap), not a neutral response to it. This is a central reason school discipline reform is treated as an equity issue, not only a safety or order issue.' },
      ],
    },
    {
      id: 'restorative',
      title: 'Restorative practices: an alternative model',
      blocks: [
        {
          t: 'flow',
          title: 'Exclusionary vs restorative response to the same incident',
          nodes: [
            { label: 'Rule broken / harm caused', tone: 'data' },
            { label: 'Exclusionary: remove the student', sub: 'suspension, no instruction, harm often unaddressed', tone: 'human' },
            { label: 'Restorative: structured conversation', sub: 'who was affected, what harm was done, what repairs it', tone: 'process' },
            { label: 'Student stays in instruction; relationship repaired', tone: 'output' },
          ],
          caption: 'Restorative practice does not mean "no consequences"it means the consequence is designed to repair harm and keep the student learning, rather than simply removing them.',
        },
        {
          t: 'p',
          text: 'Restorative practice borrows from restorative justice: structured conversations (often in a circle) where those affected by an incident discuss what happened, who was harmed, and what would repair it, rather than defaulting to removal from the room.',
        },
        {
          t: 'table',
          head: ['Evidence base', 'What it generally finds'],
          rows: [
            ['Suspension rates', 'Districts and schools adopting restorative practices at scale (e.g. large studies of Oakland, Denver and Pittsburgh school districts) have generally reported meaningful reductions in suspension rates, including reduced racial gaps in some studies'],
            ['Academic outcomes', 'Evidence on test scores is more mixed: some large-scale studies (e.g. a RAND evaluation of a major urban district) found suspensions fell but found no clear academic gains, and in one well-known study found a small negative effect on the academic growth of higher-achieving students in participating schools, likely tied to implementation and training quality'],
            ['Implementation matters', 'Reviews consistently stress that restorative practice requires real staff training and sustained buy-in; poorly implemented versions (dropping in a "circle" occasionally without a real whole-school shift) show much weaker effects'],
          ],
          caption: 'Restorative practice is promising and reduces exclusion, but, honestly reported, it is not a guaranteed academic fix on its own, and quality of implementation drives most of the variation in results.',
        },
        { t: 'callout', tone: 'tip', title: 'Pair structure with warmth', text: 'The strongest classroom-management research (see [classroom management](@teaching/guides/classroom/management)) consistently favours being simultaneously warm and demanding, high relational investment plus clear, consistently enforced expectations, over either permissiveness or pure control. Restorative and PBIS approaches work best as part of this same "warm-strict" stance, not as a replacement for having real expectations.' },
      ],
    },
  ],
  sources: [
    'Sugai, G., & Horner, R. H. (2009). Responsiveness-to-intervention and school-wide positive behavior supports. *Exceptionality*, 17(4), 223–237.',
    'U.S. Department of Education, Office for Civil Rights. *Civil Rights Data Collection* (biennial national data on school discipline).',
    'Losen, D. J., & Martinez, T. (2020). *Lost Opportunities: How Disparate School Discipline Continues to Drive Differences in Opportunity*. The Center for Civil Rights Remedies.',
    'Gregory, A., Skiba, R. J., & Noguera, P. A. (2010). The achievement gap and the discipline gap: Two sides of the same coin? *Educational Researcher*, 39(1), 59–68.',
    'Augustine, C. H., et al. (2018). *Can Restorative Practices Improve School Climate and Curb Suspensions?* RAND Corporation.',
  ],
  related: ['teaching/theories/behaviourism', 'teaching/special-education/strategies/behaviour-support', 'teaching/guides/classroom/restorative'],
}

export default guide
