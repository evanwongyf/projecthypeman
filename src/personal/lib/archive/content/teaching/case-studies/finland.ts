import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 2001 the first results of the OECD’s PISA study showed that Finland’s fifteen-year-olds led the world in reading, and Finland went on to top the tables in the early rounds. Education ministers began to visit Helsinki. What they found surprised them: shorter school days, little homework, almost no national testing and teachers with master’s degrees who were trusted to teach as they saw fit. This case study sets out what Finland did, what drove the rise, what happened to its scores later, and what the case does and does not show, with an eye to how different it is from Singapore’s route to similar results.',
  nutshell: [
    'Finland’s rise came from a **long, coherent reform** from the 1970s: a **comprehensive school** for all, **highly selective, research-based teacher education** and a **culture of trust**.',
    'Features: **no national tests** until the matriculation exam at 18, **little homework**, a **short school day**, **free meals** and strong **support for learning difficulties**.',
    'Finland had **small gaps between schools**: a child’s results depend little on which school they attend.',
    'Scores **declined** from the late 2000s; by PISA 2022, mathematics was **roughly 60 points lower** than in 2006, though still above the OECD average.',
    'The case suggests that **teacher quality, equity and trust** matter, but **cannot be transplanted**, and the causes of the decline are **debated**.',
  ],
  sections: [
    {
      id: 'story',
      title: 'What Finland did',
      blocks: [
        {
          t: 'levels',
          caption: 'A rough timeline of the reforms that built the system.',
          items: [
            { name: '1970s: One school for all', body: 'The old system, which sorted children into academic and civic schools at ten or eleven, was replaced by a nine-year comprehensive school (*peruskoulu*) for everyone, phased in during the 1970s. Streaming and tracking were later abolished.' },
            { name: '1979: Teachers to master’s level', body: 'All teachers were required to hold a master’s degree, with research-based training in universities. Primary teacher programmes became very selective, with only a small fraction of applicants admitted.' },
            { name: '1980s to 1990s: Decentralise and trust', body: 'The national inspectorate was abolished in the early 1990s, textbooks were no longer approved centrally and schools and teachers gained wide freedom over methods.' },
            { name: '2000: PISA', body: 'Finland ranked first in reading and among the best in maths and science, with small variation between schools.' },
            { name: '2016: A new curriculum', body: 'A national core curriculum emphasised transversal competencies and phenomenon-based learning, giving schools more scope to design integrated units.' },
          ],
        },
      ],
    },
    {
      id: 'features',
      title: 'Features of the system',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Teachers', title: 'A respected, selective profession', body: 'Teaching is a high-status career, with competitive entry to a master’s degree. Teachers design their own lessons and assessments within a broad national curriculum.' },
            { tag: 'Trust', title: 'No high-stakes testing', body: 'No national tests until the end of upper secondary. Teachers’ grades are trusted. Sample-based testing monitors the system.' },
            { tag: 'Equity', title: 'Special support built in', body: 'Early and intensive help for children who struggle, often through part-time special teachers; about a third of pupils receive some support in a year.' },
            { tag: 'Welfare', title: 'Free meals and health care', body: 'Every pupil gets a free school lunch and has access to health, dental and counselling services.' },
            { tag: 'Time', title: 'Short days, little homework', body: 'Children start school at seven, and spend fewer hours in class than most OECD countries, with frequent breaks.' },
            { tag: 'Culture', title: 'Cooperation, not competition', body: 'Schools are not ranked publicly. Teachers collaborate and share, and school choice is limited by neighbourhood catchment.' },
          ],
        },
      ],
    },
    {
      id: 'decline',
      title: 'Then the scores fell',
      blocks: [
        {
          t: 'table',
          head: ['PISA round', 'Mathematics', 'Reading', 'Science'],
          rows: [
            ['2006', 'about 548', 'about 547', 'about 563'],
            ['2018', 'about 507', 'about 520', 'about 522'],
            ['2022', 'about 484', 'about 490', 'about 511'],
          ],
          caption: 'Approximate PISA mean scores for Finland, rounded; check the OECD tables for exact values. Mathematics fell by roughly 60 points between 2006 and 2022, a large drop, though Finland remains above the OECD average.',
        },
        {
          t: 'table',
          head: ['Explanation proposed', 'Comment'],
          rows: [
            ['Declining reading habits and more screen time, especially among boys', 'Plausible, and seen elsewhere, but not unique to Finland'],
            ['Increasing share of students with an immigrant background', 'Real, but the decline also appears among native-born students, so it is not a full explanation'],
            ['Reduced resources and larger classes after budget cuts', 'Some support from teachers’ unions and analysts'],
            ['Shifts to less structured, student-led teaching in the 2000s and 2010s', 'Argued by critics; contested by Finnish educators, and hard to prove'],
            ['A decline in teachers’ status and the supply of strong applicants', 'Some evidence of changes in applicant numbers'],
            ['Other countries improved, and Finland’s relative position fell', 'True for some countries, but the absolute drop is real'],
          ],
          caption: 'The causes are debated and probably several. Cause and effect are hard to establish from country-level data.',
        },
      ],
    },
    {
      id: 'lessons',
      title: 'What the case does and does not show',
      blocks: [
        {
          t: 'table',
          head: ['What it suggests', 'Cautions'],
          rows: [
            ['Equity and strong teachers can go together with high average results', 'Finland is small and relatively homogeneous, with a strong welfare state'],
            ['Teacher quality is a central lever', 'Selectivity depends on status and pay that took decades to build'],
            ['High-stakes testing is not necessary for high performance', 'Other systems, such as Singapore, reach high results with extensive testing; so the test is not the cause either way'],
            ['Trust and professional autonomy can work', 'They depend on a prior supply of well-prepared teachers'],
            ['A strong system can decline', 'The reasons are unclear, and the case is a reminder that success is not permanent'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Compare with Singapore', text: 'Both systems select and train teachers carefully and treat teaching as a respected career. They differ on testing (Singapore has high-stakes national exams), on homework and tuition (heavier in Singapore) and on grouping. The common factor appears to be teacher quality and coherence over decades.' },
        { t: 'links', items: [{ path: 'teaching/case-studies/singapore-system', note: 'Singapore’s system' }, { path: 'teaching/philosophies/progressivism', note: 'Progressive ideas in Finnish education' }, { path: 'teaching/concepts/streaming-and-tracking', note: 'Why Finland abolished tracking' }] },
      ],
    },
  ],
  sources: [
    'Sahlberg, P. (2015). Finnish Lessons 2.0: What Can the World Learn from Educational Change in Finland? Teachers College Press.',
    'OECD (2023). PISA 2022 Results (Volume I): The State of Learning and Equity in Education.',
    'OECD (2019). PISA 2018 Results. Country note: Finland.',
    'Hargreaves, A., and Shirley, D. (2009). The Fourth Way. Corwin.',
  ],
  related: ['teaching/case-studies/singapore-system', 'teaching/concepts/streaming-and-tracking', 'teaching/concepts/school-leadership'],
}

export default guide
