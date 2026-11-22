import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Immersive virtual reality puts learners inside a simulated world; augmented reality overlays digital objects on the real one; virtual labs replace or supplement physical experiments. These technologies are compelling and increasingly cheap, but more immersion does not automatically mean more learning.',
  nutshell: [
    '**The presence–learning paradox**: Makransky, Terkildsen and Mayer (2019) found immersive VR gave a stronger sense of presence but **less learning** and **higher cognitive load** than the same lesson on a desktop.',
    'VR works best for **spatial, procedural and experiential** learning (anatomy, safety drills, perspective-taking), less for conceptual text-heavy content.',
    '**Virtual and physical labs** each have strengths; combining them often works best (de Jong, Linn and Zacharia, 2013).',
    'Watch for **cybersickness**, cost, accessibility and short sessions.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Kinds of immersive and virtual learning',
      blocks: [
        { t: 'table', head: ['Technology', 'Good for', 'Limits'], rows: [
          ['Head-mounted VR', 'Spatial understanding, rehearsal of procedures, empathy and perspective-taking, field trips', 'Cost, cybersickness, isolation, high load'],
          ['Desktop 3D / virtual worlds', 'Exploration and collaboration at lower cost', 'Less immersive'],
          ['Augmented reality', 'Labelling real objects (anatomy on a body, parts of an engine), location-based learning', 'Device limits, distraction'],
          ['Virtual labs', 'Safe, repeatable, cheap experiments; idealised conditions; invisible processes', 'No hands-on skills or real messiness'],
          ['Physical labs', 'Manual skills, real data and error, tacit knowledge', 'Cost, safety, time'],
        ] },
      ],
    },
    {
      id: 'paradox',
      title: 'More immersion, less learning?',
      blocks: [
        { t: 'p', text: 'In Makransky and colleagues’ 2019 study, students learned about a science lab procedure either in immersive VR or on a desktop computer. The VR group reported more presence and enjoyment, but learned less, and EEG suggested higher cognitive load. Novelty, controls and the richness of the environment competed with the content for working memory. Later studies found VR helps more when the lesson is designed with generative tasks (summarising, explaining) and when learners are familiar with the headset.' },
        { t: 'callout', tone: 'tip', title: 'Design rules for VR lessons', text: 'Keep sessions short (10–20 minutes); give a familiarisation session first; signal what to attend to; add a generative task after (summarise, draw, explain); debrief out of the headset.' },
      ],
    },
    {
      id: 'labs',
      title: 'Virtual versus physical labs',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Virtual strengths', body: 'Try many variations quickly; change impossible variables (gravity, friction off); see invisible processes; no risk; works at home.' },
          { title: 'Physical strengths', body: 'Measurement error and messy data; manual skills; awareness of real-world constraints; sensory experience.' },
          { title: 'Combined', body: 'Virtual first to build concepts and plan; physical to test and experience reality; virtual again to explore beyond.' },
          { title: 'Evidence', body: 'de Jong, Linn and Zacharia’s Science review (2013) concluded neither is superior in general; the combination and the inquiry design matter most.' },
        ] },
      ],
    },
  ],
  sources: [
    'Makransky, G., Terkildsen, T. S., & Mayer, R. E. (2019). Adding immersive virtual reality to a science lab simulation causes more presence but less learning. Learning and Instruction, 60, 225–236.',
    'de Jong, T., Linn, M. C., & Zacharia, Z. C. (2013). Physical and virtual laboratories in science and engineering education. Science, 340(6130), 305–308.',
    'Radianti, J. et al. (2020). A systematic review of immersive virtual reality applications for higher education. Computers & Education, 147, 103778.',
  ],
  related: ['e-pedagogy/simulation/why-simulation', 'e-pedagogy/theory/cognitive-load-online', 'e-pedagogy/theory/multimedia-learning'],
}

export default guide
