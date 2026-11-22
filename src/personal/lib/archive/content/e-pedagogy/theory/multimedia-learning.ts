import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Richard Mayer and colleagues spent over thirty years running experiments on how people learn from words and pictures together: slides, animations, narrated videos, e-learning modules. The result is the cognitive theory of multimedia learning and a set of design principles, each backed by multiple experiments. They are the most directly useful research for anyone making digital learning material.',
  nutshell: [
    'People have **two channels** (visual/pictorial and auditory/verbal), each with **limited capacity**.',
    'Learning needs **active processing**: selecting, organising and integrating words and pictures with prior knowledge.',
    'Principles fall into three groups: **reduce extraneous processing**, **manage essential processing**, **foster generative processing**.',
    'Effects are largest for **novices**; for experts some principles reverse.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'The theory',
      blocks: [
        { t: 'flow', title: 'From screen to long-term memory', nodes: [
          { label: 'Words and pictures', sub: 'on screen or spoken', tone: 'data' },
          { label: 'Sensory memory', sub: 'eyes and ears', tone: 'process' },
          { label: 'Select', sub: 'attend to relevant parts', tone: 'model' },
          { label: 'Organise', sub: 'verbal model + pictorial model', tone: 'model' },
          { label: 'Integrate', sub: 'link with prior knowledge', tone: 'output' },
        ] },
        { t: 'cards', cols: 3, items: [
          { title: 'Dual channels', body: 'Verbal and visual information are processed partly separately (Paivio’s dual coding; Baddeley’s working memory).' },
          { title: 'Limited capacity', body: 'Each channel can hold only a few pieces at once.' },
          { title: 'Active processing', body: 'Learning requires the learner to build connections, not just receive.' },
        ] },
      ],
    },
    {
      id: 'principles',
      title: 'The twelve principles',
      blocks: [
        { t: 'table', head: ['Principle', 'Do this', 'Why'], rows: [
          ['**Reduce extraneous processing**', '', ''],
          ['Coherence', 'Cut interesting-but-irrelevant words, pictures, music and “seductive details”', 'They use up capacity and prime the wrong schema'],
          ['Signalling', 'Highlight the key ideas and structure (headings, arrows, bold)', 'Guides selection'],
          ['Redundancy', 'Narration plus graphics beats narration plus graphics plus identical on-screen text', 'Reading and listening to the same words overloads the visual channel'],
          ['Spatial contiguity', 'Put words next to the parts of the picture they describe', 'Avoids split attention and searching'],
          ['Temporal contiguity', 'Present corresponding words and pictures at the same time', 'Both are in working memory together'],
          ['**Manage essential processing**', '', ''],
          ['Segmenting', 'Break a complex lesson into learner-paced parts', 'Time to process each part'],
          ['Pre-training', 'Teach names and characteristics of key parts first', 'Reduces load during the main explanation'],
          ['Modality', 'Explain graphics with spoken rather than printed words', 'Spreads load across both channels'],
          ['**Foster generative processing**', '', ''],
          ['Multimedia', 'Use words and pictures rather than words alone', 'Two linked representations'],
          ['Personalisation', 'Use a conversational style (“you”, “let’s”)', 'Feels like a social partner, increases effort'],
          ['Voice', 'Use a natural human voice', 'Same social cue'],
          ['Embodiment', 'On-screen agents should gesture and look at the content', 'Social cues and guidance of attention'],
        ] },
        { t: 'p', text: 'Mayer reports that most principles were supported in the large majority of the experiments testing them, with median effect sizes mostly between about 0.4 and 1.4 standard deviations on transfer tests. These are mostly short, lab-based lessons with novice adults, so effects in long, real courses are usually smaller.' },
        { t: 'learn-lab', viz: 'multimedia-audit' },
      ],
    },
    {
      id: 'boundaries',
      title: 'Boundary conditions',
      blocks: [
        { t: 'list', items: [
          '**Expertise reversal** (Kalyuga et al., 2003): supports that help novices (worked examples, integrated text) can hinder experts, who must then process redundant information.',
          '**Captions for access**: the redundancy principle does not mean removing captions for deaf or hard-of-hearing learners or for language learners; accessibility comes first, and for second-language learners on-screen text can help.',
          '**Pace**: modality and redundancy effects are strongest when the lesson runs at a fixed pace; with learner control, printed text costs less.',
          '**Complexity**: many principles matter most for complex material; for simple content the differences shrink.',
        ] },
      ],
    },
  ],
  sources: [
    'Mayer, R. E. (2020). Multimedia Learning (3rd ed.). Cambridge University Press.',
    'Mayer, R. E., & Fiorella, L. (Eds.) (2022). The Cambridge Handbook of Multimedia Learning (3rd ed.).',
    'Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. Educational Psychologist, 38(1), 23–31.',
    'Clark, R. C., & Mayer, R. E. (2016). e-Learning and the Science of Instruction (4th ed.). Wiley.',
  ],
  related: ['e-pedagogy/theory/cognitive-load-online', 'teaching/theories/cognitive-load', 'teaching/techniques/learning-strategies/dual-coding'],
}

export default guide
