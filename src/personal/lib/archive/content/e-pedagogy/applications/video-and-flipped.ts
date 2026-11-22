import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Video is the most common form of online teaching and one of the easiest to do badly. Research on what makes instructional video work is clear: short, focused, personal, segmented, with questions that make viewers think. The flipped classroom uses such videos to move first exposure out of class, freeing class time for practice and discussion.',
  nutshell: [
    'Guo, Kim and Rubin (2014): in 6.9 million edX sessions, median engagement time was **at most about 6 minutes** whatever the video length.',
    '**Embedded questions** reduce mind-wandering and improve learning (Szpunar et al., 2013).',
    'Informal, personal, enthusiastic videos beat polished studio lectures.',
    '**Flipped classrooms** show moderate gains when pre-class work is checked and class time is active.',
  ],
  sections: [
    {
      id: 'video',
      title: 'What makes video teach',
      blocks: [
        { t: 'dodont', do: [
          'Keep videos to about 6 minutes; split longer topics',
          'Show the teacher’s face at times, and handwriting or drawing',
          'Speak naturally and with enthusiasm',
          'Put a question in the middle and at the end',
          'Use captions and give a transcript',
          'Tell viewers what to look for before they start',
        ], dont: [
          'Record a full lecture and upload it unchanged',
          'Read slides aloud',
          'Add background music',
          'Expect learners to watch without a task',
        ] },
        { t: 'callout', tone: 'fact', title: 'Interpolated tests', text: 'In Szpunar, Khan and Schacter’s 2013 study, students watching a 21-minute lecture with brief tests between segments mind-wandered about half as often, took more notes, and did better on the final test than students who did not get the tests.' },
      ],
    },
    {
      id: 'flipped',
      title: 'The flipped classroom',
      blocks: [
        { t: 'cycle', items: [
          { name: 'Before class', body: 'Short videos or readings with a quick quiz.' },
          { name: 'Start of class', body: 'Review quiz results; address the common misconceptions.' },
          { name: 'In class', body: 'Problem solving, discussion, labs, peer instruction, with the teacher circulating.' },
          { name: 'After class', body: 'Spaced practice and reflection; preview of next topic.' },
        ] },
        { t: 'example', title: 'A flipped chemistry lesson on moles', lines: [
          { label: 'Home (15 min)', text: 'Two 5-minute videos (what a mole is; converting mass to moles) with an embedded question each; a 4-question quiz.' },
          { label: 'Class 0–10', text: 'Teacher shows quiz results: 40% confused molar mass with mass. Quick re-explanation with a worked example.' },
          { label: 'Class 10–40', text: 'Pairs work through graded problems at three levels of challenge; the teacher conferences with the struggling group.' },
          { label: 'Class 40–50', text: 'Exit ticket: one problem. Results set tomorrow’s groups.' },
        ] },
        { t: 'p', text: 'Meta-analyses (for example van Alten et al., 2019; Strelan et al., 2020) find average positive effects on achievement in the region of g = 0.3 to 0.5, larger when pre-class quizzes are used and when face-to-face time is not reduced. Gains depend on learners doing the pre-work; without checks, flipped classes become classes where the unprepared fall further behind.' },
      ],
    },
  ],
  sources: [
    'Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement: An empirical study of MOOC videos. L@S ’14.',
    'Szpunar, K. K., Khan, N. Y., & Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering and improve learning of online lectures. PNAS, 110(16), 6313–6317.',
    'van Alten, D. C. D. et al. (2019). Effects of flipping the classroom on learning outcomes and satisfaction: A meta-analysis. Educational Research Review, 28, 100281.',
    'Strelan, P., Osborn, A., & Palmer, E. (2020). The flipped classroom: A meta-analysis of effects on student performance across disciplines and education levels. Educational Research Review, 30, 100314.',
  ],
  related: ['teaching/techniques/active-learning/flipped', 'e-pedagogy/theory/multimedia-learning', 'attention/start-here'],
}

export default guide
