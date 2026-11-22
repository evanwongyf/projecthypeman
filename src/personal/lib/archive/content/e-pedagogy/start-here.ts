import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'E-pedagogy is the art and science of teaching with digital technology: online courses, blended classrooms, learning platforms, videos, simulations and AI tutors. Its first lesson, repeated in decades of research, is that technology rarely improves learning by itself. What matters is the pedagogy the technology makes possible: more practice, faster feedback, better explanations, richer simulation, wider reach.',
  nutshell: [
    '**Pedagogy first**: decide what learners must do to learn, then choose the tool.',
    'Digital learning works when it adds **retrieval practice, feedback, worked examples, spacing, interaction and simulation**.',
    'It fails when it adds **distraction, isolation, passive watching and extraneous load**.',
    'Screens change how we read and attend; good design and good habits manage the costs.',
  ],
  sections: [
    {
      id: 'map',
      title: 'What is on this shelf',
      blocks: [
        { t: 'mindmap', center: 'E-pedagogy', branches: [
          { label: 'Theory', tone: 'teal', items: ['Foundations', 'Mayer’s multimedia', 'Cognitive load online', 'Community of inquiry', 'Course design', 'Learning analytics'] },
          { label: 'Examples', tone: 'mint', items: ['What worked', 'What failed', 'Same tool, two uses'] },
          { label: 'Applications', tone: 'orange', items: ['Tools and SLS', 'Video and flipped', 'AI tutors', 'Online assessment'] },
          { label: 'Brain', tone: 'pink', items: ['Screen reading', 'Multitasking', 'Rewards and habits', 'Sleep, development'] },
          { label: 'Simulation', tone: 'lavender', items: ['Why it teaches', 'Designing one', 'VR and virtual labs', 'Try it'] },
        ] },
      ],
    },
    {
      id: 'routes',
      title: 'Reading routes',
      blocks: [
        { t: 'table', head: ['If you are…', 'Start with'], rows: [
          ['A teacher using SLS or an LMS', '[Foundations](@e-pedagogy/theory/foundations), [Multimedia learning](@e-pedagogy/theory/multimedia-learning), [Side by side](@e-pedagogy/examples/side-by-side)'],
          ['Designing an online course', '[Course design](@e-pedagogy/theory/course-design), [Presence and community](@e-pedagogy/theory/community-of-inquiry), [Video and flipped](@e-pedagogy/applications/video-and-flipped)'],
          ['Thinking about AI in class', '[AI tutors](@e-pedagogy/applications/ai-in-education), [Online assessment](@e-pedagogy/applications/online-assessment)'],
          ['Worried about screens', '[Reading on screens](@e-pedagogy/brain/reading-on-screens), [Multitasking](@e-pedagogy/brain/multitasking-and-notifications), [Screens and development](@e-pedagogy/brain/screens-and-development)'],
          ['Using simulations', '[Why simulations teach](@e-pedagogy/simulation/why-simulation), [Try a simulation](@e-pedagogy/simulation/try-a-simulation)'],
        ] },
        { t: 'callout', tone: 'note', title: 'Related shelves', text: 'For attention spans, memory and spacing see [Attention and retention](@attention/start-here). For facilitating online sessions see [Online and hybrid facilitation](@facilitation/toolkit/online-and-hybrid). For how AI agents work, see [Agentic AI](@agentic-ai/start-here).' },
      ],
    },
  ],
  related: ['teaching/taxonomies/samr', 'teaching/taxonomies/digital-blooms', 'teaching/techniques/active-learning/flipped'],
}

export default guide
