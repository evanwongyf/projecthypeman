import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The same tool can help or harm learning depending on how it is used. These ten pairs show a positive and a negative use of common technologies, with the principle that makes the difference.',
  nutshell: [
    'Ask of any digital activity: **what are learners thinking about while they do it?**',
    'Good uses make learners **retrieve, explain, apply or create**; poor uses let them **copy, click or watch passively**.',
  ],
  sections: [
    {
      id: 'pairs',
      title: 'Ten pairs',
      blocks: [
        { t: 'table', head: ['Tool', 'Positive use', 'Negative use', 'Principle'], rows: [
          ['Video', 'Six-minute segments with embedded questions and a pause to predict', 'A 60-minute recorded lecture assigned with no task', 'Segmenting; active processing; retrieval'],
          ['Slides', 'A labelled diagram the teacher talks through', 'Dense bullet points read aloud', 'Redundancy and coherence principles'],
          ['Online quiz', 'Low-stakes retrieval with feedback, retaken later', 'A high-stakes test given once, results never discussed', 'Testing effect; feedback'],
          ['Discussion forum', 'A dilemma prompt; reply to two peers by building on their ideas', '“Post your thoughts on chapter 3”', 'Cognitive presence; structured interaction'],
          ['AI chatbot', 'Set up as a tutor that asks questions and gives hints, not answers', 'Unrestricted use on homework', 'Desirable difficulty; guardrails (Bastani et al., 2025)'],
          ['Simulation', 'Predict, then run, then explain the difference', 'Free play with no question to investigate', 'Guided inquiry; predict–observe–explain'],
          ['Game', 'Practice that adapts to the learner and rewards mastery', 'Points for logging in and clicking', 'Rewards tied to learning, not activity'],
          ['Shared document', 'Groups co-write with assigned roles and visible contributions', 'One student does the work while others watch', 'Individual accountability'],
          ['Learning analytics', 'Teacher reviews which questions were missed and reteaches', 'Automated warnings sent to parents for low log-ins', 'Data for help, not surveillance'],
          ['Personal devices', 'Used for specific tasks; put away otherwise', 'Always open during lessons with notifications on', 'Attention and task-switching costs'],
        ] },
      ],
    },
    {
      id: 'example',
      title: 'One lesson, two designs',
      blocks: [
        { t: 'example', title: 'Poor: a home-based learning day on fractions', lines: [
          { label: '9:00', text: 'Watch a 25-minute video of the teacher explaining fractions.' },
          { label: '9:30', text: 'Complete worksheet pages 4–7 and upload a photo.' },
          { label: 'Result', text: 'Half the class skip the video; the worksheet is copied; no feedback until next week.' },
        ] },
        { t: 'example', title: 'Better: the same day redesigned', lines: [
          { label: '9:00', text: 'A two-question warm-up quiz on yesterday’s topic (auto-marked).' },
          { label: '9:05', text: 'Two 5-minute videos, each with a worked example and an embedded question.' },
          { label: '9:20', text: 'Ten practice questions with instant feedback and a hint button; mastery at 8/10.' },
          { label: '9:45', text: 'Post one question you still have; reply to a classmate’s.' },
          { label: 'Next day', text: 'Teacher opens with the three most-missed questions from the data.' },
        ] },
      ],
    },
  ],
  sources: [
    'Mayer, R. E. (2020). Multimedia Learning (3rd ed.). Cambridge University Press.',
    'Chi, M. T. H., & Wylie, R. (2014). The ICAP framework. Educational Psychologist, 49(4), 219–243.',
    'Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. PNAS.',
  ],
  related: ['e-pedagogy/examples/what-worked', 'e-pedagogy/examples/what-failed', 'teaching/taxonomies/icap'],
}

export default guide
