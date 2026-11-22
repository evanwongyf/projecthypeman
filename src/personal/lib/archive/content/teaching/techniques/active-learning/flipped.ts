import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'In a flipped classroom, learners meet new content before class, usually through a short video or reading, and class time is used for practice, problem solving and discussion with the teacher on hand. The explaining moves out; the hard thinking moves in.',
  nutshell: [
    'Before class: short content (video, reading) plus a quick check. In class: active work with support.',
    'The point is to spend precious face-to-face time where learners most need help.',
    'Meta-analyses find small to moderate gains on average, especially when there is a pre-class quiz.',
    'The biggest risk: learners who do not do the pre-work. Plan for them.',
  ],
  sections: [
    {
      id: 'what',
      title: 'How it works',
      blocks: [
        {
          t: 'table',
          head: ['', 'Traditional', 'Flipped'],
          rows: [
            ['In class', 'Teacher explains new content', 'Practice, problems, discussion, projects'],
            ['At home', 'Homework: practice alone', 'Watch or read new content, answer a few questions'],
            ['When learners get stuck', 'At home, alone', 'In class, with teacher and peers'],
          ],
        },
        {
          t: 'p',
          text: 'Jonathan Bergmann and Aaron Sams, two chemistry teachers in Colorado, popularised the approach around 2007 by recording lessons for absent learners, then realising all learners could use them.',
        },
      ],
    },
    {
      id: 'design',
      title: 'Designing it well',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Keep pre-class content short', body: 'Videos of 5–10 minutes on one idea. Use [cognitive load](@teaching/theories/cognitive-load) principles: talk over visuals, cut decoration.' },
            { title: 'Add a pre-class check', body: 'Two or three questions at the end, which also tell you what to address in class. Pre-class quizzes are linked to bigger learning gains (van Alten et al., 2019).' },
            { title: 'Start class with a quick review', body: 'Address common errors from the check, and a short retrieval task.' },
            { title: 'Use class for the hard part', body: 'Guided practice, problem solving, [peer instruction](@teaching/techniques/active-learning/peer-instruction), discussion.' },
            { title: 'Have a plan for non-watchers', body: 'A corner where they watch the video first, or a quick summary, so they can still join in.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Equity',
          text: 'Not every learner has a device, internet access or a quiet place at home. Offer alternatives: printed readings, time in the library, downloadable videos.',
        },
      ],
    },
  ],
  sources: [
    'Bergmann, J., & Sams, A. (2012). *Flip your classroom*. ISTE.',
    'van Alten, D. C. D., Phielix, C., Janssen, J., & Kester, L. (2019). Effects of flipping the classroom on learning outcomes and satisfaction: A meta-analysis. *Educational Research Review, 28*, 100281.',
  ],
  related: ['teaching/techniques/active-learning/peer-instruction', 'teaching/guides/contexts/online', 'teaching/theories/cognitive-load'],
}

export default guide
