import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'A lesson plan is a thinking tool, not a form to fill in. The most important part is deciding what learners will learn and how you will know. This page gives a structure that works for most lessons, and a template to fill in.',
  nutshell: [
    'Start with the objective and how you will check it. Plan backward from there.',
    'A reliable shape: **review → explain and model → guided practice → check → independent practice → exit check**.',
    'Plan your key questions, likely misconceptions and how you will respond.',
    'Keep the written plan short enough to use. Detail goes where you need it: explanations and questions.',
  ],
  sections: [
    {
      id: 'think',
      title: 'Six questions before you plan',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'What will learners learn?', body: 'One clear objective. See [objectives and success criteria](@teaching/assessment/objectives).' },
            { title: 'How will I know they have learned it?', body: 'The exit task or check that shows success.' },
            { title: 'What do they need to know already?', body: 'Prerequisites to review at the start.' },
            { title: 'What will they find hard?', body: 'Misconceptions and sticking points, and how you will address them.' },
            { title: 'What will they think hard about?', body: 'The tasks that make them think about the content. See [cognitivism](@teaching/theories/cognitivism).' },
            { title: 'Who will need something different?', body: 'Supports and stretch for specific learners. See [differentiation](@teaching/differentiation/foundations).' },
          ],
        },
      ],
    },
    {
      id: 'structure',
      title: 'A lesson structure',
      lead: 'Built on Rosenshine’s principles.',
      blocks: [
        {
          t: 'table',
          head: ['Phase', 'Purpose', 'Typical time (60 min)'],
          rows: [
            ['Do now / retrieval', 'Settle the class; review prior learning and prerequisites.', '5–10 min'],
            ['Introduce', 'Share the objective and why it matters; hook interest.', '2–3 min'],
            ['Explain and model', 'Teach new content in small steps, with worked examples and think-alouds.', '10–15 min'],
            ['Guided practice', 'Learners practise with support; teacher checks and corrects.', '10–15 min'],
            ['Check for understanding', 'Hinge question or whiteboards to decide whether to move on.', '3–5 min'],
            ['Independent practice', 'Learners work alone to build fluency, with teacher circulating.', '10–15 min'],
            ['Exit check / plenary', 'Short task showing whether the objective was met; plan next lesson from it.', '3–5 min'],
          ],
          caption: 'Adapt freely. Some lessons are mostly practice; some are mostly discussion. See [Rosenshine’s principles](@teaching/techniques/instruction/rosenshine) and [lesson models](@teaching/guides/planning/models).',
        },
      ],
    },
    {
      id: 'template',
      title: 'A fill-in template',
      blocks: [
        {
          t: 'example',
          title: 'One-page lesson plan',
          lines: [
            { label: 'Class / date', text: '________' },
            { label: 'Objective', text: 'Learners will be able to ________.' },
            { label: 'Success criteria', text: '1. ________ 2. ________ 3. ________' },
            { label: 'Prior knowledge', text: 'They need to know ________. Check with ________.' },
            { label: 'Do now', text: '3–5 retrieval questions: ________' },
            { label: 'Key explanation', text: 'Main points, examples, non-examples, analogy: ________' },
            { label: 'Model', text: 'Worked example I will do aloud: ________' },
            { label: 'Key questions', text: '1. ________ (recall) 2. ________ (why/how) 3. ________ (hinge)' },
            { label: 'Misconceptions', text: '________ → how I will address it: ________' },
            { label: 'Guided practice', text: '________' },
            { label: 'Independent task', text: '________ Stretch: ________' },
            { label: 'Support', text: 'For ________: ________' },
            { label: 'Exit check', text: '________' },
            { label: 'After the lesson', text: 'What worked? What to revisit next lesson?' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Script the parts that matter most: the key explanation, the first worked example and your key questions. Everything else can be a few words.',
        },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Common pitfalls',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Plan the learning first and the activity second.',
            'Leave time for practice; most lessons need more than planned.',
            'Plan what to cut if time runs short.',
            'Reflect briefly after the lesson and adjust the next one.',
          ],
          dont: [
            'Pack in too many new ideas.',
            'Plan an activity because it is fun, with no clear link to the objective.',
            'Skip checks for understanding and discover at the end that most did not get it.',
            'Write pages of plan you will never look at while teaching.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Rosenshine, B. (2012). Principles of instruction. *American Educator, 36*(1), 12–19.',
    'Lemov, D. (2021). *Teach like a champion 3.0*. Jossey-Bass.',
    'Wiggins, G., & McTighe, J. (2005). *Understanding by design* (2nd ed.). ASCD.',
  ],
  related: ['teaching/guides/planning/models', 'teaching/techniques/instruction/rosenshine', 'teaching/guides/planning/backward-design', 'teaching/differentiation/in-practice'],
}

export default guide
