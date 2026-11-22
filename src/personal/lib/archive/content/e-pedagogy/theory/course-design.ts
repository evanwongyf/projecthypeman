import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An online course is a sequence of experiences, not a folder of files. Good online courses are designed backwards from what learners should be able to do, keep every element aligned to that, and build in the interaction, feedback and structure that a classroom provides automatically.',
  nutshell: [
    '**Backward design** (Wiggins and McTighe): outcomes, then evidence, then learning activities.',
    '**Constructive alignment** (Biggs): outcomes, activities and assessment must match.',
    'Plan for three **interactions** (Moore, 1989): learner–content, learner–teacher, learner–learner.',
    'Design for **accessibility** from the start (WCAG, UDL), and estimate **workload** honestly.',
  ],
  sections: [
    {
      id: 'backward',
      title: 'Backward design',
      blocks: [
        { t: 'steps', items: [
          { title: 'Identify desired results', body: 'What should learners know, understand and be able to do? Write measurable outcomes.' },
          { title: 'Determine acceptable evidence', body: 'How will they show it? Quizzes, projects, discussions, performances.' },
          { title: 'Plan learning experiences', body: 'What activities, resources and interactions will get them there?' },
        ] },
      ],
    },
    {
      id: 'module',
      title: 'A worked module plan',
      blocks: [
        { t: 'table', head: ['Element', 'Example: one week on photosynthesis (Secondary 3)'], rows: [
          ['Outcome', 'Explain how light intensity affects the rate of photosynthesis, using data.'],
          ['Overview', 'A 90-second teacher video: what this week is, why it matters, what to do and by when'],
          ['Content', 'Two 6-minute segmented videos with embedded questions; one annotated diagram'],
          ['Practice', 'A simulation (vary light, count bubbles) with a predict–observe–explain worksheet; a 10-question auto-marked quiz with feedback'],
          ['Interaction', 'Small-group forum: “Why might the rate stop rising at high light?” Reply to two peers'],
          ['Assessment', 'A short data-analysis task, marked with a rubric'],
          ['Support', 'Glossary, transcript and captions; live Q&A slot; a checklist of the week'],
        ] },
      ],
    },
    {
      id: 'workload',
      title: 'Estimating learner workload',
      blocks: [
        {
          t: 'math',
          tex: String.raw`W = \sum_{\text{videos}} \alpha\, v_i + \sum_{\text{readings}} \frac{w_j}{r} + \sum_{\text{tasks}} t_k`,
          caption: 'Total learner time for a module: video minutes scaled for pausing, reading time from word count and reading speed, plus task time.',
          plain: 'Teachers routinely underestimate how long online work takes. Learners pause and rewatch videos (so a video takes longer than its running time), read at a limited speed, and need time for every task. Add it up before publishing, and compare with the time learners actually have.',
          where: [
            { sym: 'W', def: 'estimated learner time (minutes)' },
            { sym: String.raw`v_i`, def: 'running time of video i (minutes)' },
            { sym: String.raw`\alpha`, def: 'pause and rewatch factor (often 1.5 to 2 for instructional video with questions)' },
            { sym: String.raw`w_j`, def: 'words in reading j' },
            { sym: 'r', def: 'reading speed for study (around 100–150 words per minute for dense text; faster for easy text)' },
            { sym: String.raw`t_k`, def: 'estimated time for task k' },
          ],
          syntax: [
            { sym: String.raw`\sum`, say: '“the sum of”: add up one term for each item' },
            { sym: String.raw`\alpha`, say: '“alpha”' },
          ],
          worked: {
            title: 'The photosynthesis week',
            steps: [
              String.raw`Videos: two of 6 minutes, \(\alpha = 1.75\): \(1.75 \times 12 = 21\) minutes.`,
              String.raw`Reading: one 900-word page at \(r = 120\): \(900/120 = 7.5\) minutes.`,
              'Tasks: simulation and worksheet 25, quiz 15, forum 20, data task 30: total 90 minutes.',
              String.raw`\(W = 21 + 7.5 + 90 = 118.5\) minutes, about 2 hours.`,
            ],
            why: [
              'learners pause, answer embedded questions and rewatch, so video time stretches',
              'study reading is slower than leisure reading',
              'list a time for every task',
              'add the three parts',
            ],
            answer: 'About two hours. If the timetable gives 90 minutes, cut a task or make the forum optional; overloaded modules are a main cause of online drop-out.',
          },
        },
      ],
    },
    {
      id: 'quality',
      title: 'Quality and accessibility checklist',
      blocks: [
        { t: 'checklist', items: [
          'Outcomes stated in each module, aligned to activities and assessment',
          'A “start here” page and the same weekly structure throughout',
          'All three interaction types in every module',
          'Feedback on practice within the module, not only at the end',
          'Captions and transcripts for video; alt text for images',
          'Colour contrast and readable fonts (WCAG 2.2 AA)',
          'Works on a phone and on a slow connection',
          'Workload estimated and stated',
          'Ways to contact the teacher and get help',
        ] },
        { t: 'p', text: 'Frameworks such as the Quality Matters rubric (used widely in US higher education) turn these into review standards; many schools use simpler internal checklists.' },
      ],
    },
  ],
  sources: [
    'Wiggins, G., & McTighe, J. (2005). Understanding by Design (2nd ed.). ASCD.',
    'Biggs, J., & Tang, C. (2011). Teaching for Quality Learning at University (4th ed.). Open University Press.',
    'Moore, M. G. (1989). Three types of interaction. American Journal of Distance Education, 3(2), 1–7.',
    'W3C (2023). Web Content Accessibility Guidelines (WCAG) 2.2.',
    'Quality Matters (2023). Higher Education Rubric (7th ed.).',
  ],
  related: ['e-pedagogy/theory/community-of-inquiry', 'teaching/differentiation/udl', 'e-pedagogy/applications/video-and-flipped'],
}

export default guide
