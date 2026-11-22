import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Digital education comes in many forms, from a fully online degree to a single quiz in a face-to-face lesson. Before choosing tools, it helps to know the vocabulary, the long-running debate about whether media themselves matter, and the frameworks teachers use to plan technology use.',
  nutshell: [
    'Modes: **face-to-face with technology**, **blended**, **flipped**, **hybrid (HyFlex)** and **fully online**.',
    '**Synchronous** (live, together) and **asynchronous** (any time) learning each have strengths.',
    '**Clark versus Kozma**: media are “mere vehicles” (Clark, 1983) versus media enable methods that would otherwise be impossible (Kozma, 1994). Both are partly right.',
    'A US Department of Education meta-analysis (Means et al., 2010) found **blended** learning outperformed face-to-face on average; fully online was about equal.',
  ],
  sections: [
    {
      id: 'modes',
      title: 'Modes of digital learning',
      blocks: [
        { t: 'table', head: ['Mode', 'What it is', 'Strength', 'Risk'], rows: [
          ['Technology-enhanced', 'Face-to-face with digital tools (quizzes, simulations)', 'Easy to start; teacher present', 'Tools as decoration'],
          ['Blended', 'A planned mix of online and in-person learning', 'Best of both; flexible pacing', 'Disconnected halves'],
          ['Flipped', 'First exposure online, practice in class', 'Class time for active learning', 'Learners skip the pre-work'],
          ['Hybrid / HyFlex', 'Some learners in the room, some online, at once', 'Access and flexibility', 'Remote learners neglected'],
          ['Fully online', 'All learning online', 'Reach; scale; flexibility', 'Isolation, drop-out, self-regulation demands'],
          ['Emergency remote teaching', 'Rapid shift online in a crisis', 'Continuity', 'Not designed; usually weaker (Hodges et al., 2020)'],
        ] },
        { t: 'table', head: ['', 'Synchronous', 'Asynchronous'], rows: [
          ['Examples', 'Live video lesson, chat, live quiz', 'Recorded video, forum, self-paced module'],
          ['Good for', 'Discussion, community, quick feedback, motivation', 'Reflection, flexibility, different paces and time zones'],
          ['Watch for', 'Fatigue, connectivity, fixed times', 'Procrastination, isolation, delayed feedback'],
        ] },
      ],
    },
    {
      id: 'debate',
      title: 'Do media matter? Clark versus Kozma',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Clark (1983, 1994)', body: '“Media are mere vehicles that deliver instruction but do not influence student achievement any more than the truck that delivers our groceries causes changes in our nutrition.” Differences in studies come from differences in method, not medium.' },
          { title: 'Kozma (1991, 1994)', body: 'Some media make methods possible that others cannot: a simulation lets learners manipulate a virtual circuit, an adaptive system gives instant individual feedback. Medium and method are entangled.' },
        ] },
        { t: 'callout', tone: 'tip', title: 'The practical upshot', text: 'Ask “What learning activity does this tool make possible, cheaper or better?” If the answer is “the same lecture, on a screen”, expect the same (or worse) results.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What large reviews find',
      blocks: [
        { t: 'bars', title: 'Average effects compared with face-to-face (Means et al., 2010)', unit: 'g', decimals: 2, zero: true, items: [
          { label: 'Blended learning', value: 0.35 },
          { label: 'Fully online', value: 0.05 },
        ], caption: 'From the US Department of Education meta-analysis of 45 studies. Blended conditions often also gave more learning time and extra materials, so the advantage reflects pedagogy and time as well as medium.' },
        { t: 'p', text: 'Later reviews support the same picture: well-designed online and blended courses can match or beat face-to-face teaching; poorly designed ones, and those for younger or less self-regulated learners, often do worse. Hattie’s syntheses put most technology interventions in the small-to-moderate range, with the biggest gains when technology supports practice and feedback.' },
      ],
    },
    {
      id: 'frameworks',
      title: 'Planning frameworks',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'TPACK (Mishra and Koehler, 2006)', body: 'Good technology use needs technological, pedagogical and content knowledge together: knowing which tool supports which way of teaching which topic.' },
          { title: 'SAMR (Puentedura)', body: 'Substitution, augmentation, modification, redefinition: how much a tool changes the task. Higher is not automatically better; substitution is fine if it saves time.' },
          { title: 'ICAP (Chi and Wylie, 2014)', body: 'Passive < active < constructive < interactive engagement. Use technology to move learners up the ladder.' },
          { title: 'The digital Bloom’s taxonomy', body: 'Churches’ mapping of digital activities to thinking levels, from bookmarking to designing.' },
        ] },
        { t: 'links', items: [
          { path: 'teaching/taxonomies/samr', note: 'SAMR and TPACK in detail' },
          { path: 'teaching/taxonomies/icap', note: 'ICAP modes of engagement' },
          { path: 'teaching/taxonomies/digital-blooms', note: 'Bloom’s digital taxonomy' },
        ] },
      ],
    },
  ],
  sources: [
    'Clark, R. E. (1983). Reconsidering research on learning from media. Review of Educational Research, 53(4), 445–459.',
    'Kozma, R. B. (1994). Will media influence learning? Reframing the debate. ETR&D, 42(2), 7–19.',
    'Means, B. et al. (2010). Evaluation of Evidence-Based Practices in Online Learning. US Department of Education.',
    'Hodges, C. et al. (2020). The difference between emergency remote teaching and online learning. EDUCAUSE Review.',
    'Mishra, P., & Koehler, M. J. (2006). Technological pedagogical content knowledge. Teachers College Record, 108(6), 1017–1054.',
  ],
  related: ['e-pedagogy/theory/multimedia-learning', 'e-pedagogy/examples/what-worked', 'teaching/taxonomies/samr'],
}

export default guide
