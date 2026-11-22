import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Assessment has two main jobs. **Summative** assessment sums up what has been learned, usually at the end. **Formative** assessment gathers evidence during learning so teaching can be adjusted. The same test can serve either purpose; what matters is how the information is used.',
  nutshell: [
    'Summative: assessment **of** learning. Formative: assessment **for** learning.',
    'Assessment is formative only if the evidence is used to change what happens next.',
    'Black and Wiliam’s review (1998) found that strengthening formative assessment produced significant learning gains.',
    'Wiliam’s five strategies: clarify goals, elicit evidence, give feedback that moves learning forward, activate peers, activate learners as owners of their learning.',
  ],
  sections: [
    {
      id: 'compare',
      title: 'Two purposes',
      blocks: [
        {
          t: 'table',
          head: ['', 'Formative', 'Summative'],
          rows: [
            ['Purpose', 'Improve learning while it is happening', 'Measure learning at a point in time'],
            ['When', 'During teaching, often daily', 'End of a unit, term or course'],
            ['Stakes', 'Low; usually ungraded', 'Often higher; graded or reported'],
            ['Examples', 'Exit tickets, hinge questions, mini whiteboards, drafts with feedback', 'End-of-unit tests, exams, final projects'],
            ['Who acts on it', 'Teacher and learner, immediately', 'Teachers, schools, parents, institutions'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'A mock exam is summative if it is only used to give a grade, and formative if the results are analysed and used to plan revision and reteaching. The label depends on use, not format.',
        },
      ],
    },
    {
      id: 'black-box',
      title: 'Inside the black box',
      blocks: [
        {
          t: 'p',
          text: 'In 1998 Paul Black and Dylan Wiliam reviewed around 250 studies and concluded that improving formative assessment raises standards, with particularly strong effects for lower attainers. Their short booklet *Inside the Black Box* argued that classrooms were a black box: governments set inputs and measured outputs but paid little attention to what happened inside. Many later reviews have debated the size of the effect, but the core finding, that responsive teaching based on evidence of learning helps, has held up.',
        },
      ],
    },
    {
      id: 'strategies',
      title: 'Five key strategies',
      lead: 'Wiliam and Thompson (2007).',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Clarify, share and understand learning intentions and success criteria', body: 'Learners need to know where they are going. See [objectives and success criteria](@teaching/assessment/objectives).' },
            { title: 'Engineer effective discussions, tasks and activities that elicit evidence of learning', body: 'Questions and tasks that reveal thinking. See [checking for understanding](@teaching/techniques/questioning/checking-understanding) and [hinge questions](@teaching/techniques/questioning/hinge-questions).' },
            { title: 'Provide feedback that moves learning forward', body: 'Feedback that tells learners what to do next, and gives them time to do it. See [effective feedback](@teaching/assessment/feedback).' },
            { title: 'Activate learners as instructional resources for one another', body: 'Peer assessment and collaborative learning. See [self and peer assessment](@teaching/assessment/self-peer).' },
            { title: 'Activate learners as the owners of their own learning', body: 'Self-assessment and [metacognition](@teaching/techniques/learning-strategies/metacognition).' },
          ],
        },
      ],
    },
    {
      id: 'summative',
      title: 'Good summative assessment',
      blocks: [
        {
          t: 'list',
          items: [
            '**Valid**: it measures what it claims to measure, covering the important goals ([alignment](@teaching/assessment/alignment)).',
            '**Reliable**: results would be similar if a different marker or a similar test were used.',
            '**Fair**: accessible to all learners, with appropriate [accommodations](@teaching/special-education/foundations/accommodations).',
            '**Proportionate**: not so frequent that it crowds out teaching.',
          ],
        },
        {
          t: 'p',
          text: 'Summative results can still feed forward: use them to plan the next unit, spot topics to revisit, and help learners see their progress over time. For writing good tests, see [writing good test questions](@teaching/assessment/test-design).',
        },
      ],
    },
  ],
  sources: [
    'Black, P., & Wiliam, D. (1998). Assessment and classroom learning. *Assessment in Education, 5*(1), 7–74.',
    'Black, P., & Wiliam, D. (1998). *Inside the black box: Raising standards through classroom assessment*. King’s College London.',
    'Wiliam, D., & Thompson, M. (2007). Integrating assessment with instruction: What will it take to make it work? In C. A. Dwyer (Ed.), *The future of assessment* (pp. 53–82). Erlbaum.',
    'Wiliam, D. (2011). *Embedded formative assessment*. Solution Tree.',
  ],
  related: ['teaching/assessment/feedback', 'teaching/techniques/questioning/checking-understanding', 'teaching/assessment/objectives'],
}

export default guide
