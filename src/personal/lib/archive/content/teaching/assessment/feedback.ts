import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Feedback is information about performance that helps close the gap between where a learner is and where they need to be. It can have a very large effect on learning, but not all feedback helps. Some makes things worse.',
  nutshell: [
    'Good feedback answers three questions: **Where am I going? How am I going? Where to next?**',
    'Feedback about the **task, process or self-regulation** helps; feedback about the **self** ("good girl", "you’re so clever") rarely does.',
    'Grades alongside comments can cause learners to ignore the comments.',
    'Feedback only works if learners **use** it. Build in time to act on it.',
  ],
  sections: [
    {
      id: 'model',
      title: 'Hattie and Timperley’s model',
      lead: 'Three questions and four levels.',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'feed up', title: 'Where am I going?', body: 'The goal and success criteria. Without a clear goal, feedback has nothing to point toward.' },
            { tag: 'feed back', title: 'How am I going?', body: 'Progress toward the goal: what is done well, what is missing, relative to the criteria.' },
            { tag: 'feed forward', title: 'Where to next?', body: 'What to do to improve. This is the most powerful part and often the most neglected.' },
          ],
        },
        {
          t: 'table',
          head: ['Level', 'Focus', 'Example', 'Effect'],
          rows: [
            ['Task', 'Is the work correct?', '"Your answer to question 3 is incorrect; check the units."', 'Useful, especially for novices and when errors are about knowledge.'],
            ['Process', 'The strategies used', '"You would find the error by checking each step against your formula sheet."', 'Powerful; helps transfer to other tasks.'],
            ['Self-regulation', 'Monitoring and directing own work', '"You know what a strong conclusion needs. Check yours against the criteria."', 'Powerful; builds independence.'],
            ['Self', 'The person', '"Well done, you’re a star."', 'Little effect on learning; can distract from the task.'],
          ],
          caption: 'Hattie and Timperley (2007).',
        },
      ],
    },
    {
      id: 'backfire',
      title: 'When feedback backfires',
      blocks: [
        {
          t: 'p',
          text: 'Kluger and DeNisi (1996) reviewed feedback studies and found that in about a third of cases, feedback actually **reduced** performance. Feedback that directed attention to the self, or threatened self-esteem, was most likely to harm.',
        },
        {
          t: 'p',
          text: 'Ruth Butler (1988) gave learners either grades, comments, or both. Comments alone produced the most improvement. With grades and comments together, learners focused on the grade and ignored the comment, and results were no better than grades alone.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Feedback should be more work for the recipient than the donor',
          text: 'Dylan Wiliam’s rule of thumb. If the teacher spends an hour writing corrections and the learner glances at them for ten seconds, little learning happens. Better: brief feedback that gives the learner something to do.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Feedback that works',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Link feedback to clear success criteria.',
            'Be specific: point to where and what.',
            'Give a next step the learner can act on now.',
            'Give time in lessons to act on feedback (sometimes called "DIRT": dedicated improvement and reflection time).',
            'Use whole-class feedback for common errors, and save individual comments for individual issues.',
            'Mix verbal feedback in the moment with written feedback on key pieces.',
          ],
          dont: [
            'Write "good work" or "try harder" with no specifics.',
            'Correct every error; learners will not process them all.',
            'Return a grade and a long comment together and move on.',
            'Give feedback on work learners cannot revise or apply anywhere.',
          ],
        },
        {
          t: 'example',
          title: 'Whole-class feedback sheet',
          lines: [
            { label: 'Strengths', text: 'Most of you used quotes well to support your points.' },
            { label: 'Common errors', text: 'Many answers describe what happens instead of explaining **how the writer creates the effect**.' },
            { label: 'Model', text: 'A short example paragraph showing the difference.' },
            { label: 'Action', text: 'Find one paragraph in your essay that describes, and rewrite it to explain a technique. 10 minutes.' },
            { label: 'Spelling', text: 'Words misspelled by several people: *metaphor, juxtaposition, suspense*.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research, 77*(1), 81–112.',
    'Kluger, A. N., & DeNisi, A. (1996). The effects of feedback interventions on performance. *Psychological Bulletin, 119*(2), 254–284.',
    'Butler, R. (1988). Enhancing and undermining intrinsic motivation: The effects of task-involving and ego-involving evaluation on interest and performance. *British Journal of Educational Psychology, 58*(1), 1–14.',
    'Education Endowment Foundation. (2021). *Teacher feedback to improve pupil learning: Guidance report*.',
  ],
  related: ['teaching/assessment/formative-summative', 'teaching/assessment/self-peer', 'teaching/theories/motivation', 'teaching/assessment/rubrics'],
}

export default guide
