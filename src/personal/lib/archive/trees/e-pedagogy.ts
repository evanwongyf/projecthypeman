import type { ArchiveNode } from '../topics'

// E-pedagogy: teaching and learning with digital technology. The theory (multimedia learning,
// cognitive load online, communities of inquiry, online course design, learning analytics),
// positive and negative examples, applications from learning platforms to AI tutors, the
// effects of screens and digital media on the brain, and simulation-based learning.

export const E_PEDAGOGY: ArchiveNode = {
  slug: 'e-pedagogy',
  title: 'E-pedagogy',
  blurb: 'Teaching well with technology: multimedia and online-learning theory, examples that worked and ones that failed, applications from LMSs to AI tutors, what screens do to the brain, and simulation-based learning.',
  glyph: '⌨',
  color: 'color-mix(in srgb, var(--sky) 55%, var(--mint))',
  tags: ['e-learning', 'online learning', 'edtech', 'digital pedagogy', 'blended learning', 'multimedia learning', 'simulation', 'ai tutor', 'screens', 'elearning'],
  children: [
    { slug: 'start-here', title: 'Start here: what e-pedagogy is', glyph: '★', blurb: 'Pedagogy first, technology second; the shelf map; and routes for teachers, designers and learners.', minutes: 8, tags: ['overview', 'roadmap'] },
    {
      slug: 'theory',
      title: 'Theory',
      glyph: '◇',
      group: 'Theory',
      blurb: 'The research that explains when digital learning works: multimedia learning, cognitive load, online presence, course design and learning analytics.',
      children: [
        { slug: 'foundations', title: 'Foundations of e-pedagogy', blurb: 'Modes (online, blended, hybrid, flipped), synchronous and asynchronous learning, the media debate, TPACK and SAMR.', minutes: 12, tags: ['blended', 'synchronous', 'asynchronous', 'clark kozma', 'tpack', 'samr'] },
        { slug: 'multimedia-learning', title: 'Multimedia learning (Mayer)', blurb: 'The cognitive theory of multimedia learning and its twelve principles, with effect sizes and an audit tool.', minutes: 14, tags: ['mayer', 'multimedia principles', 'coherence', 'redundancy', 'modality', 'segmenting'] },
        { slug: 'cognitive-load-online', title: 'Cognitive load in digital learning', blurb: 'Intrinsic, extraneous and germane load on screens, split attention, transient information and the expertise reversal effect.', minutes: 11, tags: ['cognitive load', 'split attention', 'transient information', 'expertise reversal', 'sweller'] },
        { slug: 'community-of-inquiry', title: 'Presence and community online', blurb: 'The Community of Inquiry framework, Moore’s transactional distance, Salmon’s five-stage model and how to build presence.', minutes: 12, tags: ['community of inquiry', 'teaching presence', 'social presence', 'transactional distance', 'salmon', 'e-moderating'] },
        { slug: 'course-design', title: 'Designing online courses', blurb: 'Backward design, alignment, chunking, interaction types, accessibility, Quality Matters and a worked module plan.', minutes: 13, tags: ['course design', 'backward design', 'alignment', 'quality matters', 'accessibility', 'wcag'] },
        { slug: 'learning-analytics', title: 'Learning analytics', blurb: 'What platform data can and cannot show, engagement funnels, early-warning models with worked maths, and the ethics of tracking.', minutes: 13, tags: ['learning analytics', 'dashboards', 'early warning', 'logistic regression', 'privacy', 'completion rates'] },
      ],
    },
    {
      slug: 'examples',
      title: 'Positive and negative examples',
      glyph: '±',
      group: 'Practice',
      blurb: 'What has worked and what has failed in digital education, and the patterns behind both.',
      children: [
        { slug: 'what-worked', title: 'What worked', blurb: 'Intelligent tutors, mastery platforms, spaced-practice apps, PhET simulations, well-run flipped classrooms and Singapore’s SLS, with evidence.', minutes: 13, tags: ['positive examples', 'cognitive tutor', 'khan academy', 'phet', 'flipped', 'sls', 'evidence'] },
        { slug: 'what-failed', title: 'What failed', blurb: 'Emergency remote teaching, MOOC completion, one-laptop programmes without pedagogy, slide-reading videos, surveillance proctoring and more.', minutes: 13, tags: ['negative examples', 'learning loss', 'moocs', 'one laptop per child', 'proctoring', 'zoom'] },
        { slug: 'side-by-side', title: 'Same tool, good and bad use', blurb: 'Ten paired examples (video, quizzes, forums, slides, AI chat, games) showing how pedagogy, not technology, decides the outcome.', minutes: 12, tags: ['comparisons', 'good and bad', 'design'] },
      ],
    },
    {
      slug: 'applications',
      title: 'Applications',
      glyph: '▣',
      group: 'Practice',
      blurb: 'The tools and how to use them: learning platforms, video, quizzes and feedback, AI tutors and online assessment.',
      children: [
        { slug: 'tools', title: 'Tools and platforms', blurb: 'LMSs and Singapore’s Student Learning Space, video, quizzing, collaboration, adaptive platforms, AR and VR, matched to purposes.', minutes: 12, tags: ['lms', 'student learning space', 'video', 'quizzes', 'adaptive learning', 'ar', 'vr'] },
        { slug: 'video-and-flipped', title: 'Instructional video and flipped learning', blurb: 'What makes video teach (length, segmenting, embedded questions), the flipped-classroom evidence and a worked flipped lesson.', minutes: 12, tags: ['video', 'flipped classroom', 'embedded questions', 'engagement', 'guo'] },
        { slug: 'ai-in-education', title: 'AI tutors and generative AI in learning', blurb: 'Bloom’s two-sigma problem, what randomised studies of AI tutors found, guardrails that protect learning, and a classroom policy.', minutes: 14, tags: ['ai tutor', 'chatgpt', 'two sigma', 'generative ai', 'guardrails', 'policy'] },
        { slug: 'online-assessment', title: 'Online assessment and feedback', blurb: 'Retrieval quizzes, auto-marking, feedback at scale, integrity in an AI age and authentic tasks.', minutes: 12, tags: ['e-assessment', 'feedback', 'academic integrity', 'authentic assessment', 'quizzes'] },
      ],
    },
    {
      slug: 'brain',
      title: 'Effects on the brain',
      glyph: '◎',
      group: 'Science',
      blurb: 'What screens, multitasking, notifications and digital reading do to attention, memory and learning, and what the evidence really shows.',
      children: [
        { slug: 'reading-on-screens', title: 'Reading on screens versus paper', blurb: 'The screen inferiority effect, why it happens, when it disappears, and how to read well on a device.', minutes: 11, tags: ['screen reading', 'paper', 'comprehension', 'meta-analysis', 'skimming'] },
        { slug: 'multitasking-and-notifications', title: 'Multitasking, notifications and phones', blurb: 'Task switching costs, laptop multitasking in lectures, the effect of phones nearby and how to design for focus.', minutes: 12, tags: ['multitasking', 'task switching', 'notifications', 'phones', 'distraction', 'laptops'] },
        { slug: 'rewards-and-habits', title: 'Rewards, dopamine and digital habits', blurb: 'Reward prediction error, variable rewards, gamification’s upside and downside, and healthy habits.', minutes: 11, tags: ['dopamine', 'reward prediction error', 'gamification', 'variable reward', 'habits'] },
        { slug: 'screens-and-development', title: 'Screens, sleep and development', blurb: 'Screen time and children, sleep and blue light, what large studies find, and practical guidelines.', minutes: 11, tags: ['screen time', 'children', 'sleep', 'blue light', 'development', 'guidelines'] },
      ],
    },
    {
      slug: 'simulation',
      title: 'Simulation-based learning',
      glyph: '⟳',
      group: 'Science',
      blurb: 'Learning by doing in safe, simulated worlds: theory, evidence, design, debriefing, VR and an interactive example.',
      children: [
        { slug: 'why-simulation', title: 'Why simulations teach', blurb: 'Experiential and situated learning, fidelity, deliberate practice and the meta-analytic evidence across medicine, aviation and science.', minutes: 12, tags: ['simulation', 'fidelity', 'deliberate practice', 'flight simulator', 'medical simulation', 'meta-analysis'] },
        { slug: 'designing-simulations', title: 'Designing and running a simulation', blurb: 'Learning objectives, scenario design, pre-briefing, running, debriefing and assessment, with a worked classroom simulation.', minutes: 13, tags: ['scenario design', 'prebriefing', 'debriefing', 'role play', 'virtual lab'] },
        { slug: 'vr-and-virtual-labs', title: 'VR, AR and virtual labs', blurb: 'What immersive technology adds, the presence–learning paradox, virtual labs versus hands-on labs, and cybersickness.', minutes: 11, tags: ['virtual reality', 'augmented reality', 'virtual labs', 'presence', 'immersion', 'cybersickness'] },
        { slug: 'try-a-simulation', title: 'Try it: learning from simulated models', blurb: 'Use the site’s own interactive models (forgetting, attention, reliability) as simulations, with a predict-observe-explain worksheet.', minutes: 10, tags: ['interactive', 'predict observe explain', 'model', 'worksheet'] },
      ],
    },
  ],
}
