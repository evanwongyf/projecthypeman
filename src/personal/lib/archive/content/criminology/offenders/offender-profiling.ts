import type { Guide } from '../../../guide'

// Relative likelihood of offending at distance d (km) from an offender's base. The plain
// negative-exponential curve uses beta = 0.5; the buffered curve is an illustrative shape
// that is low very close to home, peaks around 1 km and then decays.
const decay = (d: number) => Math.exp(-0.5 * d)
const buffered = (d: number) => d * Math.exp(1 - d)

const guide: Guide = {
  intro:
    'In films, a profiler studies a crime scene and announces the killer’s age, job and childhood. Real offender profiling is far more modest. Its most useful forms are statistical and geographic: estimating what kind of person usually commits a type of offence, and where an offender probably lives, to help investigators prioritise. This guide sets out what the evidence supports, what it does not, and why the maths of base rates limits any profile.',
  nutshell: [
    'The FBI’s **organised/disorganised** typology was built from interviews with 36 imprisoned offenders and has **weak empirical support**.',
    'Studies find profiles are often vague enough to fit many people (a **Barnum effect**), and that trained profilers do not consistently outperform others.',
    'Modern practice in the UK and elsewhere favours **behavioural investigative advice**: evidence-based, cautious, and used to prioritise, never to identify a suspect on its own.',
    '**Geographic profiling** uses **distance decay**, most offences happen near an offender’s home base, and has better evidence than personality profiling.',
    'Because offenders are a tiny fraction of any population, even an accurate profile **matches far more innocent people than guilty ones**.',
  ],
  sections: [
    {
      id: 'fbi',
      title: 'The FBI approach and its critics',
      blocks: [
        { t: 'p', text: 'In the late 1970s and 1980s, agents at the FBI’s Behavioral Science Unit (including Robert Ressler and John Douglas, with researcher Ann Burgess) interviewed 36 convicted sexual murderers and sorted crime scenes into two types.' },
        {
          t: 'table',
          head: ['', '“Organised”', '“Disorganised”'],
          rows: [
            ['Crime scene', 'Planned, controlled, evidence removed', 'Spontaneous, chaotic, evidence left'],
            ['Inferred offender', 'Socially competent, employed, intelligent', 'Socially inadequate, lives alone, lower intelligence'],
          ],
          caption: 'The original typology (Ressler, Burgess and Douglas, 1988).',
        },
        {
          t: 'list',
          items: [
            '**Tiny, unrepresentative sample**: 36 volunteers, mostly convicted, interviewed without a structured protocol.',
            '**Not two types**: when Canter and colleagues (2004) analysed 100 US serial killings statistically, organised features were common to almost all crimes and disorganised features did not form a distinct type.',
            '**Circular logic**: a scene is “organised” if it looks planned, and the offender is inferred to be a planner because the scene is organised.',
            '**Little validation**: reviews (e.g. Snook and colleagues, 2007, 2008) concluded that claims about profiling’s accuracy rested mostly on anecdotes and testimonials.',
          ],
        },
        { t: 'callout', tone: 'myth', title: 'Myth: profilers solve cases', text: 'Surveys of police who used profiles found they often rated them as “useful”, but rarely said the profile led to the identification of the offender. Alison and colleagues showed that officers rated the *same* vague profile as accurate for different offenders, a classic Barnum effect.' },
      ],
    },
    {
      id: 'bia',
      title: 'Behavioural investigative advice',
      blocks: [
        { t: 'p', text: 'David Canter’s **investigative psychology** (from the 1980s) pushed profiling towards statistics: comparing crime behaviours across large databases rather than relying on intuition. The UK now uses accredited **behavioural investigative advisers** whose advice must be transparent, grounded in research and limited in its claims.' },
        {
          t: 'steps',
          items: [
            { title: 'Crime analysis', body: 'Describe the behaviours in the offence and how common each is in similar cases.' },
            { title: 'Linkage', body: 'Assess whether separate offences are likely by the same person, based on consistent, distinctive behaviour.' },
            { title: 'Prioritisation', body: 'Suggest which lines of enquiry or suspect pools to examine first, for example, by likely age range or area.' },
            { title: 'Interview and strategy advice', body: 'Advise on interviewing, media strategy and DNA screening priorities.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Advice is not evidence', text: 'Behavioural advice can direct an investigation, but it must never become the reason a person is suspected. Investigations that fixed on a person because they “fitted the profile” have led to serious miscarriages of justice; the courts in England and Wales have been strongly critical of profile-driven approaches.' },
      ],
    },
    {
      id: 'geographic',
      title: 'Geographic profiling and distance decay',
      blocks: [
        { t: 'p', text: 'Offenders, like everyone, have **activity spaces**, home, work, friends’ homes and the routes between them. They tend to offend where they are familiar, which links geographic profiling to [routine activity theory](@criminology/foundations/routine-activity). Kim Rossmo’s method, developed in the 1990s, scores every point on a map for how likely it is to be the offender’s base, given where linked offences occurred.' },
        {
          t: 'math',
          tex: String.raw`P(d) = A\,e^{-\beta d}`,
          caption: 'Distance decay in its simplest, negative-exponential form: the further a place is from an offender’s base, the less likely it is to be chosen. Real methods (such as Rossmo’s formula) also include a buffer zone very close to home where offending is less likely, to avoid being recognised.',
          where: [
            { sym: 'P(d)', def: 'Relative likelihood of an offence at distance d from the base' },
            { sym: 'A', def: 'A scaling constant (here 1, so values are relative)' },
            { sym: String.raw`\beta`, def: 'Decay rate: how quickly likelihood falls with distance (fitted from past cases)' },
            { sym: 'd', def: 'Distance from the base, here in kilometres' },
          ],
          syntax: [
            { sym: 'e', say: '“e”, Euler’s number ≈ 2.718, the base of natural exponential growth and decay' },
            { sym: String.raw`e^{-\beta d}`, say: '“e to the minus beta d”: raise e to a negative power, which gives a number between 0 and 1 that shrinks as d grows' },
            { sym: String.raw`A\,e^{\dots}`, say: 'The small space means multiply: A times the exponential' },
          ],
          worked: {
            title: 'Compare 1 km and 4 km from the base, with β = 0.5 per km and A = 1',
            steps: [
              String.raw`At 1 km: \(P(1) = e^{-0.5 \times 1} = e^{-0.5} \approx 0.607\)`,
              String.raw`At 4 km: \(P(4) = e^{-0.5 \times 4} = e^{-2} \approx 0.135\)`,
              String.raw`Ratio: \(0.607 \div 0.135 \approx 4.5\)`,
            ],
            answer: 'A place 1 km from the base is about 4.5 times as likely to be chosen as a place 4 km away',
          },
        },
        {
          t: 'plot',
          title: 'Distance decay, with and without a buffer zone',
          x: [0, 8],
          y: [0, 1.1],
          xLabel: 'Distance from base (km)',
          yLabel: 'Relative likelihood',
          curves: [
            { f: decay, label: 'Negative exponential (β = 0.5)', color: 'var(--teal)' },
            { f: buffered, label: 'With buffer zone (illustrative)', color: 'var(--lavender)', dashed: true },
          ],
          points: [
            { x: 1, y: decay(1), label: '0.61' },
            { x: 4, y: decay(4), label: '0.14' },
          ],
          shade: [{ from: 0, to: 0.7, label: 'buffer', color: 'var(--mustard)' }],
        },
        { t: 'p', text: 'Canter and Larkin’s **circle hypothesis** adds a simple rule: draw a circle whose diameter joins the two offences furthest apart. Many serial offenders (“marauders”) live inside it; others (“commuters”) travel into an area to offend. Snook and colleagues found that people taught simple rules like this could predict home locations roughly as well as specialist software, a reminder that the core insight is distance decay itself.' },
      ],
    },
    {
      id: 'base-rates',
      title: 'The base-rate trap',
      blocks: [
        {
          t: 'math',
          tex: String.raw`P(O \mid M) = \frac{P(M \mid O)\,P(O)}{P(M \mid O)\,P(O) + P(M \mid \neg O)\,P(\neg O)}`,
          caption: 'Bayes’ theorem: the chance a person who matches a profile is actually the offender depends heavily on how rare offenders are in the pool, not just on how well the profile fits offenders.',
          where: [
            { sym: 'O', def: 'The person is the offender' },
            { sym: 'M', def: 'The person matches the profile' },
            { sym: String.raw`P(M \mid O)`, def: 'Sensitivity: how often the real offender would match' },
            { sym: String.raw`P(M \mid \neg O)`, def: 'False-positive rate: how often an innocent person matches' },
          ],
          syntax: [
            { sym: String.raw`P(A \mid B)`, say: '“the probability of A given B”: how likely A is once you know B is true' },
            { sym: String.raw`\neg O`, say: '“not O”: the person is not the offender' },
          ],
          worked: {
            title: 'A suspect pool of 1,000 people containing one offender; the profile fits 90% of such offenders and 20% of innocent people',
            steps: [
              String.raw`Prior: \(P(O) = 1/1{,}000 = 0.001\), so \(P(\neg O) = 0.999\)`,
              String.raw`Numerator: \(0.9 \times 0.001 = 0.0009\)`,
              String.raw`Innocent matches: \(0.2 \times 0.999 = 0.1998\)`,
              String.raw`Denominator: \(0.0009 + 0.1998 = 0.2007\)`,
              String.raw`Divide: \(0.0009 \div 0.2007 \approx 0.0045\)`,
            ],
            answer: 'A matching person has only about a 0.45% chance of being the offender, roughly 200 people in the pool would match, and almost all are innocent',
          },
        },
        { t: 'p', text: 'This is why a profile can help *order* enquiries (the match raised the probability about fourfold, from 0.1% to 0.45%) but can never justify treating someone as a suspect. For more on this reasoning see [Bayes’ theorem](@mathematics/probability/probability-rules).' },
      ],
    },
  ],
  sources: [
    'Ressler, R. K., Burgess, A. W., & Douglas, J. E. (1988). *Sexual Homicide: Patterns and Motives*. Lexington Books.',
    'Canter, D. V., Alison, L. J., Alison, E., & Wentink, N. (2004). The organized/disorganized typology of serial murder: Myth or model? *Psychology, Public Policy, and Law*, 10(3), 293–320.',
    'Snook, B., Eastwood, J., Gendreau, P., Goggin, C., & Cullen, R. M. (2007). Taking stock of criminal profiling: A narrative review and meta-analysis. *Criminal Justice and Behavior*, 34(4), 437–453.',
    'Alison, L., Smith, M. D., & Morgan, K. (2003). Interpreting the accuracy of offender profiles. *Psychology, Crime & Law*, 9(2), 185–195.',
    'Rossmo, D. K. (2000). *Geographic Profiling*. CRC Press.',
    'Canter, D., & Larkin, P. (1993). The environmental range of serial rapists. *Journal of Environmental Psychology*, 13(1), 63–69.',
    'Snook, B., Taylor, P. J., & Bennell, C. (2004). Geographic profiling: The fast, frugal, and accurate way. *Applied Cognitive Psychology*, 18(1), 105–121.',
  ],
  related: ['criminology/foundations/routine-activity', 'criminology/methods/reading-crime-research', 'mathematics/probability/probability-rules'],
}

export default guide
