import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every parent believes that smaller classes are better, every teacher’s union demands them and every finance minister knows how expensive they are. What does the evidence say? The best study of the question is Project STAR, a randomised experiment run in Tennessee in the 1980s, one of the few large experiments in education. Its results have been followed up for decades, and a famous attempt to copy it in California shows how a good finding can go wrong at scale. This case study explains the design, what it found in the short and long run, and why class size is harder than it looks.',
  nutshell: [
    'Project STAR (Student/Teacher Achievement Ratio) **randomly assigned** about 11,600 children in Tennessee, from kindergarten to grade 3 (1985 to 1989), to **small classes (13 to 17)**, **regular classes (22 to 25)** or regular classes with a teacher’s aide.',
    'Pupils in **small classes** gained about **a fifth to a quarter of a standard deviation**, with **larger gains for Black and low-income pupils**.',
    'Follow-up work found **more college attendance** for small-class pupils (Chetty and colleagues, 2011), and long-run benefits linked to **good kindergarten teachers and classmates**.',
    'California’s **class-size reduction (1996)** cost more than a billion dollars a year and produced **modest gains**, partly because it **diluted teacher quality** and ran short of classrooms.',
    'Class size is **expensive**, and the money may do **more good** in other uses, such as better teaching or targeted tutoring; the benefits are **largest for young, disadvantaged pupils**.',
  ],
  sections: [
    {
      id: 'design',
      title: 'The experiment',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'Detail'],
          rows: [
            ['Place and time', 'Tennessee, USA; pupils entered in kindergarten in 1985 and were followed to the end of grade 3 in 1989'],
            ['Schools and pupils', 'About 79 schools; about 6,300 pupils in the first year, and about 11,600 across the four years'],
            ['Conditions', 'Small class (13 to 17 pupils), regular class (22 to 25), regular class with a full-time teacher aide'],
            ['Random assignment', 'Within each school, pupils and teachers were randomly assigned to classes of each type, which controls for differences between schools and pupils'],
            ['Outcomes', 'Standardised tests of reading and maths; later, college attendance, earnings and other adult outcomes'],
          ],
          caption: 'Design from Finn and Achilles (1990) and Krueger (1999).',
        },
      ],
    },
    {
      id: 'results',
      title: 'What it found',
      blocks: [
        {
          t: 'bars',
          title: 'Approximate effect of small classes on test scores (standard deviations)',
          unit: ' SD',
          min: 0,
          max: 0.4,
          decimals: 2,
          items: [
            { label: 'All pupils (K to grade 3)', value: 0.2 },
            { label: 'Black and low-income pupils (largest in the first year)', value: 0.3 },
            { label: 'Regular class plus aide', value: 0.0 },
          ],
          caption: 'Rounded, indicative figures based on Krueger (1999) and Finn and Achilles (1999); the original papers give exact estimates and their uncertainty.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Short run', title: 'Higher test scores in small classes', body: 'Small-class pupils did better in reading and maths in every year, and most of the gain was made in the first year (kindergarten or grade 1), then roughly held.' },
            { tag: 'Subgroups', title: 'Larger gains for disadvantaged pupils', body: 'Effects were larger for Black pupils and for those eligible for free lunch.' },
            { tag: 'Aides', title: 'No clear benefit from an extra adult', body: 'Classes with a teacher’s aide did not do better than regular classes, so the smaller group seems to matter, not the extra adult.' },
            { tag: 'Long run', title: 'More college, with caveats', body: 'Chetty and colleagues (2011) found that pupils in small classes were somewhat more likely to attend college and, more clearly, that high-quality kindergarten classes (including peers and teachers) were linked to higher earnings.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'A rare, strong study', text: 'Random assignment makes STAR much more convincing than correlational studies, which tend to find no effect because schools put weaker pupils into smaller classes. It is also one of the few studies to follow children for decades.' },
      ],
    },
    {
      id: 'california',
      title: 'California tries to copy it',
      blocks: [
        { t: 'p', text: 'In 1996 California, encouraged by STAR, paid schools to reduce classes in kindergarten to grade 3 to 20 or fewer, at a cost of well over a billion dollars a year. The result was a shortage of qualified teachers and classrooms. Many new teachers were hired without credentials, and many were hired from poorer schools by wealthier ones, so the gains were modest and unequally distributed. Studies (Jepsen and Rivkin, 2009) found small gains in achievement offset by a decline in teacher quality in some schools.' },
        {
          t: 'table',
          head: ['STAR', 'California'],
          rows: [
            ['Small experiment, schools that volunteered, with the teachers they had', 'A statewide mandate that needed many new teachers and classrooms at once'],
            ['Random assignment: teachers were not drawn from a new pool', 'Teacher quality fell in schools that were short of qualified staff'],
            ['Effects strongest for disadvantaged pupils', 'Disadvantaged schools lost experienced teachers to richer schools'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The lesson', text: 'A result from a well-run experiment may not hold when the policy is scaled up, because the conditions that made it work (teachers, space, selection) change. Always ask what would be different at scale.' },
      ],
    },
    {
      id: 'broader',
      title: 'The wider evidence, and cost',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Source'],
          rows: [
            ['Reducing class size has small-to-moderate positive effects on average, largest for the youngest and most disadvantaged pupils', 'Reviews of experimental and quasi-experimental studies'],
            ['Effects of moving from 30 to 25 may be small; the biggest effects were seen from about 22 to 15', 'Evidence from STAR and others'],
            ['In the EEF Toolkit, reducing class size has about 2 months’ additional progress for high cost', 'Education Endowment Foundation'],
            ['Many high-performing systems, such as Singapore, Korea and Shanghai, have relatively large classes and invest in teacher quality and time for preparation', 'International comparisons'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The opportunity cost', text: 'Money spent halving class size could instead pay for much better teacher salaries, coaching, tutoring or special-needs support. For some purposes (young children, struggling readers) smaller groups for part of the day (tutoring) may be more cost-effective than smaller classes all day.' },
        { t: 'links', items: [{ path: 'teaching/equity/interventions-evidence', note: 'What actually closes the gap' }, { path: 'teaching/guides/growth/research', note: 'Using education research' }] },
      ],
    },
  ],
  sources: [
    'Finn, J. D., and Achilles, C. M. (1990). Answers and questions about class size: a statewide experiment. American Educational Research Journal.',
    'Krueger, A. B. (1999). Experimental estimates of education production functions. Quarterly Journal of Economics.',
    'Chetty, R., et al. (2011). How does your kindergarten classroom affect your earnings? Quarterly Journal of Economics.',
    'Jepsen, C., and Rivkin, S. (2009). Class size reduction and student achievement: the potential tradeoff between teacher quality and class size. Journal of Human Resources.',
    'Education Endowment Foundation. Reducing class size: Teaching and Learning Toolkit.',
  ],
  related: ['teaching/equity/interventions-evidence', 'teaching/guides/growth/research', 'teaching/case-studies/perry-preschool'],
}

export default guide
