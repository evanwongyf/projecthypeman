import type { Guide } from '../../../guide'

// Schematic shapes of the "dual systems" model (Steinberg): reward sensitivity peaks in
// mid-adolescence, cognitive control matures more slowly into the mid-twenties.
const reward = (a: number) => 0.35 + 0.65 * Math.exp(-(((a - 15.5) / 4.5) ** 2))
const control = (a: number) => 0.2 + 0.8 / (1 + Math.exp(-(a - 17) / 2.5))

const guide: Guide = {
  intro:
    'Two of the most consistent findings about offending are that it is tied to low self-control and that it peaks in adolescence. This guide connects them: what self-control theory claims, why the teenage brain is built for risk-taking, and how childhood adversity, abuse, neglect, household chaos, can set some young people on pathways towards offending, while most who experience it never offend at all.',
  nutshell: [
    'Gottfredson and Hirschi’s **general theory of crime** (1990): low self-control, formed in early childhood, is the key individual trait behind crime and many similar risky behaviours.',
    'Low self-control is **one of the strongest individual predictors** of offending in meta-analyses, but it is not the whole story, and it can change.',
    'In adolescence, **reward-seeking peaks before impulse control matures** (the dual systems model), and **peers** amplify risk-taking.',
    '**Adverse childhood experiences (ACEs)** are far more common among young people in the justice system than in the general population.',
    'Adversity raises risk **probabilistically**: most maltreated children do not become offenders.',
  ],
  sections: [
    {
      id: 'self-control',
      title: 'The general theory of crime',
      blocks: [
        { t: 'p', text: 'Michael Gottfredson and Travis Hirschi argued that crimes typically offer quick, easy, exciting rewards with costs that come later. People with **low self-control**, impulsive, risk-seeking, short-sighted, preferring physical to mental activity, self-centred and quick-tempered, find those trade-offs harder to resist. Crucially, they also tend to have more accidents, smoke more, and struggle more with school and work: crime is one expression of a wider pattern.' },
        {
          t: 'list',
          items: [
            '**Origin**: mainly ineffective early parenting, not monitoring behaviour, not recognising misbehaviour, not consistently correcting it.',
            '**Stability**: they argued self-control is relatively fixed by about age 8–10. Later research shows it is *relatively* stable in rank but can still improve.',
            '**Evidence**: a 2000 meta-analysis by Pratt and Cullen found low self-control was a robust predictor of crime across studies, though not strong enough to be “the” cause.',
            '**Dunedin study**: Moffitt and colleagues (2011) found childhood self-control predicted adult health, wealth and criminal convictions across a gradient, not just at the extreme.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The hopeful reading', text: 'If self-control is shaped by early experience, then early support can strengthen it. Programmes such as nurse home visiting for young mothers and good-quality early education have long-term follow-ups showing reductions in later arrests in some trials.' },
      ],
    },
    {
      id: 'adolescent-brain',
      title: 'The adolescent brain: accelerator before brakes',
      blocks: [
        {
          t: 'plot',
          title: 'The dual systems model (schematic)',
          x: [10, 30],
          y: [0, 1.1],
          xLabel: 'Age',
          yLabel: 'Relative strength',
          curves: [
            { f: reward, label: 'Reward sensitivity', color: 'var(--pink)' },
            { f: control, label: 'Cognitive control', color: 'var(--teal)' },
          ],
          shade: [{ from: 13, to: 18, label: 'Gap: peak risk-taking', color: 'var(--mustard)' }],
          caption: 'Curves are illustrative, not measured data. Reward-driven systems rise sharply at puberty; prefrontal control matures gradually into the mid-twenties.',
        },
        { t: 'p', text: 'Laurence Steinberg’s experiments showed the effect of peers: in a simulated driving game, adolescents took far more risks when friends were watching, while adults barely changed. Teenagers can reason about risk as well as adults in calm conditions (“cold” cognition) but are more swayed in emotional, social, in-the-moment situations (“hot” cognition).' },
        { t: 'callout', tone: 'fact', title: 'Science in the courtroom', text: 'Developmental research was cited when the US Supreme Court abolished the death penalty for crimes committed under 18 (*Roper v. Simmons*, 2005) and limited life without parole for juveniles. Many countries set separate youth justice systems for similar reasons.' },
      ],
    },
    {
      id: 'aces',
      title: 'Trauma, ACEs and pathways into offending',
      blocks: [
        { t: 'p', text: 'The original ACE study (Felitti and colleagues, 1998) asked adults about ten kinds of childhood adversity and found that higher counts predicted worse health decades later. Criminologists have found the same pattern for offending: a large Florida study of juvenile offenders found they reported many more ACEs than the general population sample from the original study.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Abuse', body: 'Physical, emotional, sexual.', tag: 'ACE' },
            { title: 'Neglect', body: 'Physical and emotional.', tag: 'ACE' },
            { title: 'Household challenges', body: 'Domestic violence, parental substance misuse, mental illness, separation, imprisonment of a family member.', tag: 'ACE' },
          ],
        },
        {
          t: 'flow',
          title: 'One common pathway (not the only one)',
          nodes: [
            { label: 'Early adversity', sub: 'abuse, chaos, loss', tone: 'data' },
            { label: 'Stress response shaped', sub: 'hypervigilance, poor regulation', tone: 'process' },
            { label: 'School and peer problems', sub: 'exclusion, deviant friends', tone: 'process' },
            { label: 'Coping through risk', sub: 'substances, running away', tone: 'human' },
            { label: 'Contact with justice system', tone: 'output' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Avoid determinism', text: 'Cathy Spatz Widom’s long-running “cycle of violence” study found that abused and neglected children had higher rates of later arrest than matched controls, but the majority never became offenders. ACE scores are useful for understanding populations and guiding trauma-informed services, not for predicting individuals.' },
        { t: 'p', text: 'Research on girls and women in the justice system describes a common **victimisation-to-offending pathway**: abuse leads to running away, survival offending, substance use and exploitative relationships. This has shaped “gender-responsive” approaches to rehabilitation.' },
      ],
    },
  ],
  sources: [
    'Gottfredson, M. R., & Hirschi, T. (1990). *A General Theory of Crime*. Stanford University Press.',
    'Pratt, T. C., & Cullen, F. T. (2000). The empirical status of Gottfredson and Hirschi’s general theory of crime: A meta-analysis. *Criminology*, 38(3), 931–964.',
    'Moffitt, T. E., et al. (2011). A gradient of childhood self-control predicts health, wealth, and public safety. *PNAS*, 108(7), 2693–2698.',
    'Steinberg, L. (2008). A social neuroscience perspective on adolescent risk-taking. *Developmental Review*, 28(1), 78–106.',
    'Gardner, M., & Steinberg, L. (2005). Peer influence on risk taking, risk preference, and risky decision making in adolescence and adulthood. *Developmental Psychology*, 41(4), 625–635.',
    'Felitti, V. J., et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. *American Journal of Preventive Medicine*, 14(4), 245–258.',
    'Baglivio, M. T., et al. (2014). The prevalence of adverse childhood experiences (ACE) in the lives of juvenile offenders. *OJJDP Journal of Juvenile Justice*, 3(2).',
    'Widom, C. S. (1989). The cycle of violence. *Science*, 244(4901), 160–166.',
  ],
  related: ['criminology/theories/choice-biology-life-course', 'criminology/criminal-mind/aggression-and-addiction', 'criminology/theories/social-theories'],
}

export default guide
