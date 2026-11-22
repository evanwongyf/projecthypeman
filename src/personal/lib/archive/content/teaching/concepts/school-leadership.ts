import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Principals do not teach the lessons, yet they are among the most important influences on a school. What they do affects who is hired, how teachers work together, what is taught, how behaviour is handled and what the school believes about its students. But not all leadership is equal: a landmark review found that some leadership practices have several times the effect on student outcomes of others. This page explains instructional and transformational leadership, the effect sizes found in the Robinson, Lloyd and Rowe meta-analysis, and what school leaders do that changes learning, with notes on how Singapore prepares its school leaders.',
  nutshell: [
    '**Instructional leadership** focuses on **teaching and learning**; **transformational leadership** focuses on **vision, motivation and relationships**.',
    'A meta-analysis (Robinson, Lloyd and Rowe, 2008) found the effect of **instructional leadership** on student outcomes was **about four times** that of transformational leadership.',
    'The **single biggest** leadership practice was **promoting and participating in teacher learning and development**.',
    'Other effective practices: **setting goals and expectations**, **using resources strategically**, **planning and evaluating teaching**, and **ensuring an orderly environment**.',
    'Leaders influence learning **indirectly**, through **teachers** and the **school conditions**; their effect is real but mediated.',
  ],
  sections: [
    {
      id: 'models',
      title: 'Two models of leadership',
      blocks: [
        {
          t: 'table',
          head: ['', 'Instructional leadership', 'Transformational leadership'],
          rows: [
            ['Focus', 'Teaching, learning, curriculum and assessment', 'Vision, motivation, relationships, change'],
            ['The leader…', 'Sets goals, observes lessons, gives feedback, develops teachers, protects teaching time', 'Inspires, builds commitment, develops a shared mission, looks after staff'],
            ['Risk', 'Can become over-managerial; may neglect culture', 'Can be inspiring but vague about teaching'],
            ['Evidence of effect on student outcomes', 'Larger (average effect size about 0.42)', 'Smaller (average effect size about 0.11)'],
          ],
          caption: 'From Robinson, Lloyd and Rowe (2008). The two overlap in practice: good leaders do both.',
        },
      ],
    },
    {
      id: 'robinson',
      title: 'Five leadership dimensions and their effects',
      blocks: [
        { t: 'p', text: 'Viviane Robinson and colleagues analysed 27 studies relating school leadership to student outcomes, and grouped leadership practices into five dimensions. The effect sizes are averages across studies and varied considerably, but the ordering is striking.' },
        {
          t: 'bars',
          title: 'Average effect size of leadership dimension on student outcomes',
          unit: '',
          min: 0,
          max: 1,
          decimals: 2,
          items: [
            { label: 'Promoting and participating in teacher learning and development', value: 0.84 },
            { label: 'Establishing goals and expectations', value: 0.42 },
            { label: 'Planning, coordinating and evaluating teaching and the curriculum', value: 0.42 },
            { label: 'Strategic resourcing', value: 0.34 },
            { label: 'Ensuring an orderly and supportive environment', value: 0.27 },
          ],
          refs: [{ at: 0.4, label: 'Typical “worth having” effect' }],
          caption: 'Robinson, Lloyd and Rowe (2008), Educational Administration Quarterly. Effect sizes are in standard deviations.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Largest', title: 'Teacher learning and development', body: 'The leader takes part in professional learning with staff: observing, discussing, learning alongside them. It creates a culture where improving teaching is normal.' },
            { tag: 'Goals', title: 'Goals and expectations', body: 'Clear, shared and measurable goals for student learning, with high expectations communicated and followed up.' },
            { tag: 'Teaching', title: 'Coordinating and evaluating teaching', body: 'Visiting classrooms, giving feedback, ensuring a coherent curriculum and tracking student progress.' },
            { tag: 'Resources', title: 'Strategic resourcing', body: 'Matching staff, time and money to the school’s teaching priorities, and recruiting the right people.' },
            { tag: 'Environment', title: 'An orderly and supportive environment', body: 'Protecting teaching time from interruptions, fair and consistent behaviour policy, and a safe school.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'How to read effect sizes', text: 'These are average associations from observational studies, so some of the effect may reflect other factors. And leadership effects work indirectly, by changing what teachers do. The pattern across studies is consistent, however: leaders who are close to teaching and learning have more impact.' },
      ],
    },
    {
      id: 'practice',
      title: 'What leaders do that changes learning',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Know the teaching', body: 'Visit classrooms often, with a focus on learning, not inspection. Know what good teaching looks like in each subject.' },
            { title: 'Learn alongside staff', body: 'Join professional learning sessions, try the new approach and share your own difficulties.' },
            { title: 'Set a small number of clear goals', body: 'Tied to student learning, understood by everyone and reviewed regularly.' },
            { title: 'Protect teaching time', body: 'Reduce interruptions, meetings and paperwork that do not help learning.' },
            { title: 'Hire and develop the best teachers', body: 'Invest in induction, mentoring and coaching.' },
            { title: 'Use data to ask questions', body: 'Look at student work and results to learn what is working, not only to judge.' },
            { title: 'Build a fair, orderly school', body: 'Consistent behaviour systems, support for teachers and respect for students.' },
          ],
        },
      ],
    },
    {
      id: 'singapore',
      title: 'Preparing school leaders in Singapore',
      blocks: [
        { t: 'p', text: 'Singapore selects and prepares school leaders carefully. Teachers identified as having potential are assigned to a leadership track, with roles such as head of department and vice-principal, and the Leaders in Education Programme at the National Institute of Education prepares those chosen to be principals. Principals are rotated between schools, and the Ministry has emphasised that school leaders should be instructional leaders as well as managers. Researchers often cite this system, along with a strong teacher career structure, as part of the explanation for Singapore’s results.' },
        { t: 'callout', tone: 'tip', title: 'Leadership is shared', text: 'Subject heads, year heads, senior teachers and teacher-leaders also lead. Distributed leadership, where several people take responsibility for improving teaching, is common in strong schools.' },
        { t: 'links', items: [{ path: 'teaching/concepts/school-climate-and-culture', note: 'Climate and culture' }, { path: 'teaching/guides/growth/coaching', note: 'Observation and coaching' }, { path: 'teaching/case-studies/singapore-system', note: 'Singapore’s system' }] },
      ],
    },
  ],
  sources: [
    'Robinson, V. M. J., Lloyd, C. A., and Rowe, K. J. (2008). The impact of leadership on student outcomes: an analysis of the differential effects of leadership types. Educational Administration Quarterly.',
    'Leithwood, K., Harris, A., and Hopkins, D. (2008). Seven strong claims about successful school leadership. School Leadership and Management.',
    'Hallinger, P. (2003). Leading educational change: reflections on the practice of instructional and transformational leadership. Cambridge Journal of Education.',
    'Hargreaves, A., and Fink, D. (2006). Sustainable Leadership. Jossey-Bass.',
  ],
  related: ['teaching/concepts/school-climate-and-culture', 'teaching/guides/growth/coaching', 'teaching/case-studies/singapore-system'],
}

export default guide
