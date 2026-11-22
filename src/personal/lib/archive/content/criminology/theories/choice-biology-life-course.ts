import type { Guide } from '../../../guide'

// Illustrative shapes only (not fitted to a dataset): adolescence-limited offending rises
// sharply in the teens and fades by the late twenties; life-course-persistent offending is
// rarer but starts early and lasts.
const al = (a: number) => {
  if (a < 10) return 0
  const x = (a - 10) / 7
  return x * x * Math.exp(2 - 2 * x)
}
const lcp = (a: number) => (a < 8 ? 0 : 0.16 * Math.exp(-(a - 8) / 40))

const guide: Guide = {
  intro:
    'Some theories treat offending as a decision, weighed in the moment. Others ask how biology and development make some people more likely to offend, and when in life that risk rises and falls. Together they explain one of the most reliable facts in criminology, the age–crime curve, and the finding that a small group of people offends for very different reasons from everyone else.',
  nutshell: [
    '**Rational choice**: offenders make (boundedly) rational decisions about effort, risk and reward in specific situations.',
    '**Biosocial** research finds genes, brain function and prenatal factors shift risk, always **in interaction with environment**, never as destiny.',
    'Offending **peaks in the late teens** and declines steeply, the **age–crime curve**.',
    '**Moffitt’s taxonomy**: most teenage offending is *adolescence-limited*; a small *life-course-persistent* group starts early and continues.',
    '**Desistance** is the normal outcome; jobs, relationships and a new identity help it along.',
  ],
  sections: [
    {
      id: 'rational-choice',
      title: 'Rational choice: decisions in situations',
      blocks: [
        { t: 'p', text: 'Derek Cornish and Ronald Clarke’s **rational choice perspective** (1986) does not claim offenders calculate carefully. It claims they make *bounded* choices, quick, imperfect, influenced by drink, peers and emotion, that still respond to perceived effort, risk and reward. That makes crime **crime-specific**: the decision to burgle a particular house is different from the decision to shoplift.' },
        {
          t: 'terms',
          items: [
            { term: 'Involvement decisions', def: 'Whether to get involved in a type of crime at all, and later whether to continue or stop.' },
            { term: 'Event decisions', def: 'Choices about a particular offence, this target, now, or not.' },
            { term: 'Bounded rationality', def: 'Reasoning limited by time, information and emotional state; “good enough” rather than optimal.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'A theory built for prevention', text: 'If decisions respond to effort and risk, changing the situation can prevent crime even when motivation is unchanged. This is the foundation of [situational crime prevention](@criminology/prevention/victims-and-prevention).' },
      ],
    },
    {
      id: 'biosocial',
      title: 'Biosocial criminology, honestly stated',
      blocks: [
        { t: 'p', text: 'Twin and adoption studies suggest antisocial behaviour is moderately heritable, roughly 40–50% of the variation in some meta-analyses. Researchers have also linked offending risk to low resting heart rate, prenatal exposure to alcohol and lead, head injury, and differences in brain regions involved in emotion and self-regulation. These findings are real but routinely overstated.' },
        {
          t: 'list',
          items: [
            '**Heritability is about populations, not individuals**: it describes variation in a group in a given environment, and it changes when environments change.',
            '**Gene × environment**: in a widely cited 2002 study, a common variant of the MAOA gene was associated with antisocial outcomes mainly among boys who had been maltreated. Later replications have been mixed, so treat it as an illustration of the principle, not settled fact.',
            '**No “crime gene” or “criminal brain” exists**. Effects are small, probabilistic and spread across many factors.',
            '**Biology is not destiny, and environment can change it**: removing lead from petrol and paint is one of the more plausible (though debated) contributors to falling crime.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Remember Lombroso', text: 'Biological explanations have a history of misuse. Responsible biosocial researchers stress that risk factors call for support (prenatal care, early childhood programmes, reducing toxin exposure), not labelling or punishment of individuals. See [what went wrong with Lombroso](@criminology/foundations/what-is-criminology).' },
      ],
    },
    {
      id: 'age-crime',
      title: 'The age–crime curve and Moffitt’s two groups',
      blocks: [
        {
          t: 'plot',
          title: 'Two trajectories behind the age–crime curve (illustrative)',
          x: [5, 50],
          y: [0, 1.2],
          xLabel: 'Age',
          yLabel: 'Offending rate (relative)',
          curves: [
            { f: (a: number) => al(a) + lcp(a), label: 'Overall', color: 'var(--lavender)' },
            { f: al, label: 'Adolescence-limited', color: 'var(--teal)', dashed: true },
            { f: lcp, label: 'Life-course-persistent', color: 'var(--orange)', dashed: true },
          ],
          vlines: [{ x: 17, label: 'Typical peak' }],
          caption: 'Shapes are schematic, not fitted to data. The overall curve is dominated by the large adolescence-limited group; the small persistent group explains why offending never falls to zero.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Adolescence-limited', body: 'Common, starts in the teens, mostly minor offences. Moffitt explains it as a “maturity gap”: teenagers are biologically adult but denied adult status, and some mimic risk-taking peers. Most stop by their twenties as real adult roles open up.', tag: 'most offenders' },
            { title: 'Life-course-persistent', body: 'Rare (about 5–10% of males in her New Zealand cohort), with early childhood difficulties such as neuropsychological problems and harsh or chaotic environments. Antisocial behaviour shows up early and continues into adulthood across many settings.', tag: 'small group' },
          ],
        },
        { t: 'p', text: 'Follow-ups of the Dunedin cohort found the picture is not purely two groups: some “adolescence-limited” people still had problems at age 32, and other researchers find more trajectories. But the core idea, that the same offence at age 15 can mean very different things for different people, is widely accepted.' },
      ],
    },
    {
      id: 'desistance',
      title: 'Desistance: how people stop',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Maturation', body: 'Self-control and emotional regulation improve into the mid-twenties.' },
            { title: 'Turning points', body: 'Sampson and Laub found stable work, marriage and military service could redirect lives, by adding structure and something to lose.' },
            { title: 'New identity', body: 'Shadd Maruna’s interviews found people who desisted told a “redemption script”: the past self was not the real me, and I want to give something back.' },
            { title: 'Being given a chance', body: 'Desistance depends on others accepting the change, employers, families, communities.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Cornish, D. B., & Clarke, R. V. (Eds.). (1986). *The Reasoning Criminal*. Springer.',
    'Moffitt, T. E. (1993). Adolescence-limited and life-course-persistent antisocial behavior: A developmental taxonomy. *Psychological Review*, 100(4), 674–701.',
    'Caspi, A., et al. (2002). Role of genotype in the cycle of violence in maltreated children. *Science*, 297(5582), 851–854.',
    'Rhee, S. H., & Waldman, I. D. (2002). Genetic and environmental influences on antisocial behavior: A meta-analysis. *Psychological Bulletin*, 128(3), 490–529.',
    'Sampson, R. J., & Laub, J. H. (1993). *Crime in the Making*. Harvard University Press.',
    'Maruna, S. (2001). *Making Good: How Ex-Convicts Reform and Rebuild Their Lives*. American Psychological Association.',
  ],
  related: ['criminology/criminal-mind/self-control-and-development', 'criminology/theories/social-theories', 'criminology/justice/sentencing-and-rehabilitation'],
}

export default guide
