import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Education has no shortage of interventions claiming to help disadvantaged learners catch up. Relatively few have been tested with the kind of evidence, randomised controlled trials, long-term follow-up, that lets you trust the claim. This guide covers the handful that have, measured by **effect size**, so you can compare genuinely different interventions on the same scale.',
  nutshell: [
    '**Effect size (Cohen\'s d)** measures an intervention\'s impact in standard deviations, letting you compare a tutoring programme with a class-size change on one scale.',
    '**High-dosage tutoring** (frequent, small-group, by trained tutors) has among the largest and most consistently replicated effects of any education intervention studied.',
    'High-quality **early-childhood programmes** show smaller or fading effects on test scores over time, but strikingly durable effects on adult outcomes like earnings, employment and crime, the Perry Preschool and Abecedarian studies tracked participants for decades.',
    '**Reducing class size** has a real but modest average effect, and is expensive per point of gain compared with tutoring.',
    '**Summer learning loss** falls disproportionately on lower-income students, and summer programmes show real but more variable effects depending on quality and dosage.',
  ],
  sections: [
    {
      id: 'effect-size',
      title: 'Reading an effect size',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d = \frac{\bar{x}_{\text{treatment}} - \bar{x}_{\text{control}}}{s_{\text{pooled}}}`,
          where: [
            { sym: 's_{\\text{pooled}}', def: 'The pooled standard deviation of both groups, the natural "unit" of spread for this outcome' },
          ],
          caption: 'Cohen\'s d: how many standard deviations apart the treatment and control group averages are. It lets wildly different interventions, measured on different tests with different scales, be compared on one common yardstick.',
        },
        {
          t: 'metric',
          name: 'effect size (Cohen\'s d)',
          shows: 'How large an intervention\'s impact is, in a unit-free way that lets you compare a reading programme measured on one test with a maths programme measured on a completely different one. It answers "how big a difference did this actually make?", separate from whether the difference was statistically significant (see [statistical inference](@mathematics/probability/inference) for why "significant" alone can be misleading).',
          eli5: 'Imagine two classes took the same spelling test. If you could stand in the room and, just by eyeballing where most of each class\'s scores cluster, clearly see the two clumps barely overlapping, that is a large effect size. If the two groups\' scores are mixed together so thoroughly you could not easily tell which class a given score came from, that is a small one.',
          higher: 'A bigger practical difference between the groups, not just a "real" (statistically significant) one, John Hattie\'s influential synthesis of education research used d = 0.40 as a rough benchmark for "a typical year of schooling\'s worth of progress", so effects noticeably above that are unusually strong for an education intervention.',
          lower: 'A smaller practical difference, even a statistically significant small effect (common with very large sample sizes) may have limited real-world value, which is why effect size, not just significance, is the number worth asking about when evaluating a claimed intervention.',
          typical: 'Rough, widely cited benchmarks (Cohen, 1988; adapted for education by Hattie): around 0.2 is considered small, 0.4 medium (roughly a year\'s expected progress), 0.8 and above large, but these are rules of thumb, not laws, and the best comparison for any single study is against the *typical* effect size for similar interventions and outcomes, not an abstract universal scale.',
        },
      ],
    },
    {
      id: 'tutoring',
      title: 'High-dosage tutoring',
      blocks: [
        {
          t: 'p',
          text: '"High-dosage" (or "high-intensity") tutoring means frequent, ideally 3+ sessions a week, small-group (1-to-1 to 1-to-4) tutoring, during the school day, by consistent, at least modestly trained tutors, closely tied to classroom content. This is a much more intensive model than occasional after-school help.',
        },
        {
          t: 'plot',
          title: 'Effect sizes of well-studied education interventions (illustrative, after Nickow, Oreopoulos & Quan 2020; Fryer 2017)',
          x: [0, 6],
          y: [0, 0.4],
          xLabel: 'intervention',
          yLabel: 'typical effect size (Cohen\'s d)',
          data: [
            { pts: [[1, 0], [1, 0.37]], label: 'high-dosage tutoring (maths, avg.)' },
            { pts: [[2, 0], [2, 0.23]], label: 'high-dosage tutoring (reading, avg.)' },
            { pts: [[3, 0], [3, 0.1]], label: 'class size reduction (avg.)' },
            { pts: [[4, 0], [4, 0.09]], label: 'summer programmes (avg., reading)' },
            { pts: [[5, 0], [5, 0.06]], label: 'extended school day/year (avg.)' },
          ],
          caption: 'Illustrative averages drawn from the ranges reported in large meta-analyses; individual studies within each category vary substantially, tutoring in particular ranges from near-zero to over 0.5 depending on dosage and quality.',
        },
        {
          t: 'table',
          head: ['Review', 'Finding'],
          rows: [
            ['Nickow, Oreopoulos & Quan (2020) meta-analysis, 96 RCTs', 'Average effect size of about 0.37 standard deviations on maths and reading combined, among the largest average effects of any widely studied education intervention'],
            ['Fryer (2017), large-scale US urban tutoring studies', 'Found some of the largest effects came from structured, teacher-led small-group tutoring embedded in the school day, rather than unstructured homework help'],
            ['Dosage dependence', 'Reviews consistently find effects scale with dosage: 3+ sessions a week outperform once-weekly tutoring by a wide margin, and effects fade without sustained dosage'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The pandemic\'s silver lining for this research', text: 'Large-scale school closures and subsequent learning loss during 2020–22 led many US school districts to fund high-dosage tutoring at unprecedented scale, generating a wave of new, often randomised, real-world evaluations that have largely reinforced the earlier, smaller-scale findings: well-implemented high-dosage tutoring remains one of the most reliably effective tools available.' },
      ],
    },
    {
      id: 'early-years',
      title: 'Early-childhood programmes: small test-score gains, large life gains',
      blocks: [
        {
          t: 'p',
          text: 'The Perry Preschool Project (Michigan, 1962–67) and the Abecedarian Project (North Carolina, 1972–77) are two of the longest-running randomised trials in social science: both randomly assigned low-income children to an intensive early-childhood programme or a control group, and tracked participants for decades, Perry\'s follow-up continued into participants\' 50s.',
        },
        {
          t: 'table',
          head: ['Outcome by participants\' adulthood', 'Perry Preschool finding'],
          rows: [
            ['IQ and test scores', 'Initial gains largely faded by elementary school, the famous "fade-out" pattern that worried early researchers'],
            ['High school graduation', 'Significantly higher among the programme group than control'],
            ['Employment and earnings in adulthood', 'Significantly higher among the programme group, persisting into their 40s–50s'],
            ['Arrests and incarceration', 'Significantly lower among the programme group'],
            ['Estimated return on investment', 'Economist James Heckman\'s re-analyses estimate returns in the range of several dollars per dollar invested, driven mostly by reduced crime and welfare costs and higher lifetime earnings, not test scores'],
          ],
          caption: 'The "fade-out" of test-score gains alongside durable gains in life outcomes is one of the most discussed and debated patterns in education economics, the leading explanation is that these programmes build non-cognitive skills (self-regulation, persistence, social skills) that matter enormously for life outcomes but are not well captured by IQ or achievement tests.',
        },
        { t: 'callout', tone: 'warn', title: 'A genuine caveat', text: 'Perry and Abecedarian were small (123 and 111 children respectively), intensive, expensive-per-child programmes run by highly trained staff in a specific era, they are not proof that any pre-school programme produces these results. Larger, more representative studies of real-world universal pre-K programmes (e.g. some evaluations of Head Start) generally find smaller effects, with more fade-out and more mixed longer-run evidence, which is actively debated among researchers. The honest summary: early, high-quality, well-resourced intervention clearly *can* produce large, durable gains, but quality and intensity, not early-childhood education in general, appear to be what drives the biggest results.' },
      ],
    },
    {
      id: 'class-size',
      title: 'Class size: Tennessee STAR',
      blocks: [
        {
          t: 'p',
          text: 'Project STAR (Student/Teacher Achievement Ratio), run in Tennessee from 1985–89, randomly assigned over 11,000 students and their teachers to small classes (13–17 students), regular classes (22–25), or regular classes with a teaching aide, from kindergarten through third grade, a rare, genuinely large-scale randomised class-size experiment.',
        },
        {
          t: 'table',
          head: ['Finding', 'Detail'],
          rows: [
            ['Short-term test scores', 'Small classes produced statistically significant gains, roughly 0.2 standard deviations, concentrated mostly in kindergarten and first grade'],
            ['Which students benefited most', 'Gains were larger for Black students and for students qualifying for free lunch, one of the clearer findings that class-size reduction can specifically narrow gaps, not just lift everyone equally'],
            ['Long-run follow-up (Chetty et al., 2011)', 'Using later tax records, found small-class participants had modestly higher earnings and college attendance in adulthood, even though the direct test-score advantage had mostly faded by middle school'],
            ['Cost-effectiveness', 'Because class-size reduction requires proportionally more teachers and classrooms district-wide, its cost per point of effect is generally estimated as higher than high-dosage tutoring\'s'],
          ],
        },
      ],
    },
    {
      id: 'summer',
      title: 'Summer learning loss',
      blocks: [
        {
          t: 'p',
          text: 'Multiple US studies (beginning with Heyns, 1978, and replicated many times since) find that achievement gaps between higher- and lower-income students widen disproportionately over summer vacation, when school is not equalising access to books, structured activities and enrichment, then narrow again somewhat during the school year.',
        },
        {
          t: 'plot',
          title: 'A stylised picture of summer learning loss by income (illustrative)',
          x: [0, 4],
          y: [0, 100],
          xLabel: 'school years (gaps between years are summer breaks)',
          yLabel: 'cumulative reading skill (illustrative scale)',
          curves: [
            { f: (t: number) => 20 + 22 * t, label: 'higher-income trajectory (illustrative)', color: '#3b6fd8' },
            { f: (t: number) => 18 + 16 * t - 2 * Math.max(0, Math.sin(Math.PI * t)), label: 'lower-income trajectory (illustrative)', color: '#e07b2a' },
          ],
          caption: 'A simplified illustration of the broad pattern reported across decades of US research: both groups gain during the school year at more similar rates than during summer, when access to books, enrichment and structured activity diverges most by family income.',
        },
        {
          t: 'metric',
          name: 'summer learning loss',
          shows: 'How much of a student\'s achieved skill level erodes, stalls, or simply fails to grow during school holidays, compared with the school-year rate of progress, and specifically whether that erosion differs by family income or access to enrichment.',
          eli5: 'Think of reading skill like a garden. During the school year, everyone has roughly the same gardener (the school) tending it. Over summer, that shared gardener goes away, and now it depends on what each family can provide at home: a house full of books and trips to the library and camps, or none of that. The garden that still gets tended keeps growing; the one that doesn\'t can quietly go to weeds.',
          higher: 'More skill erosion or stalling over the break, associated in research with less access over summer to books, structured enrichment, and consistent routines, which correlates strongly with family income, though not perfectly (access to community programmes, libraries and relatives can offset income differences).',
          lower: 'Skill is maintained or even continues to grow over the break, associated with continued access to reading material, structured activities, and engaged adults, which well-designed summer programmes aim to replicate for students who would not otherwise have it.',
          typical: 'Effects are consistently found but their exact size is debated and varies by study design and subject (reading losses tend to be more consistently found than maths losses); summer programmes that are voluntary, short, and low-dosage show weaker effects than those that are more sustained, academically focused and well-staffed, the same dosage lesson as tutoring applies here too.',
        },
      ],
    },
    {
      id: 'comparing',
      title: 'Putting it together',
      blocks: [
        {
          t: 'table',
          head: ['Intervention', 'Typical effect size', 'Relative cost per student', 'Best-evidenced for'],
          rows: [
            ['High-dosage tutoring', 'Large (often 0.2–0.4+)', 'Moderate', 'Closing specific skill gaps quickly, at any age'],
            ['High-quality early years (intensive model)', 'Small on tests, large on life outcomes', 'High per child, but very long-run payback in the strongest studies', 'Long-run life outcomes, non-cognitive skills'],
            ['Class size reduction', 'Small–moderate (~0.2 in STAR)', 'High (ongoing, system-wide)', 'Early grades, especially for disadvantaged students'],
            ['Summer programmes', 'Small–moderate, variable', 'Moderate', 'Reading maintenance for lower-income students'],
          ],
          caption: 'No single intervention is a complete answer, the strongest real-world results generally come from combining several of these with the structural and classroom-level changes covered in [structural barriers](@teaching/equity/structural-equity) and [an equitable classroom](@teaching/equity/equity-in-practice).',
        },
      ],
    },
  ],
  sources: [
    'Nickow, A., Oreopoulos, P., & Quan, V. (2020). The impressive effects of tutoring on PreK-12 learning: A systematic review and meta-analysis. *NBER Working Paper 27476*.',
    'Fryer, R. G. (2017). The production of human capital in developed countries. In *Handbook of Economic Field Experiments*. Elsevier.',
    'Schweinhart, L. J., et al. (2005). *Lifetime Effects: The High/Scope Perry Preschool Study Through Age 40*. High/Scope Press.',
    'Campbell, F., et al. (2014). Early childhood investments substantially boost adult health. *Science*, 343(6178), 1478–1485.',
    'Chetty, R., et al. (2011). How does your kindergarten classroom affect your earnings? Evidence from Project STAR. *Quarterly Journal of Economics*, 126(4), 1593–1660.',
    'Heyns, B. (1978). *Summer Learning and the Effects of Schooling*. Academic Press.',
    'Cooper, H., et al. (1996). The effects of summer vacation on achievement test scores: A narrative and meta-analytic review. *Review of Educational Research*, 66(3), 227–268.',
  ],
  related: ['teaching/equity/opportunity-gap', 'teaching/equity/structural-equity', 'teaching/guides/growth/research'],
}

export default guide
