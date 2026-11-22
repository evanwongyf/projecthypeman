import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cognitive load theory, developed by John Sweller from the 1980s, starts from one fact: working memory can only handle a few new elements at a time. Digital learning adds its own loads: navigating an interface, switching windows, watching information that disappears, and resisting distractions. Good e-learning spends learners’ limited capacity on the content, not the container.',
  nutshell: [
    '**Intrinsic load**: the inherent complexity of the material for this learner.',
    '**Extraneous load**: load caused by poor design (clutter, split attention, confusing navigation).',
    '**Germane** processing: the effort of building understanding (in recent versions of the theory, part of intrinsic load that is well spent).',
    'Online-specific effects: **split attention**, **transient information**, **interface load** and **expertise reversal**.',
  ],
  sections: [
    {
      id: 'loads',
      title: 'Loads on a screen',
      blocks: [
        { t: 'table', head: ['Source of load', 'Example', 'Fix'], rows: [
          ['Split attention', 'A diagram on one slide, its explanation on the next', 'Integrate labels into the diagram'],
          ['Transient information', 'A long spoken explanation that cannot be replayed', 'Segment; allow pause and replay; keep key text on screen'],
          ['Interface load', 'Five tabs, three log-ins, buttons in different places each week', 'One consistent layout; one place for everything'],
          ['Redundant material', 'Slide text read word for word by the narrator', 'Narrate pictures; put only keywords on slides'],
          ['Seductive details', 'Fun but irrelevant animations or anecdotes', 'Cut or move to optional extras'],
          ['Searching', 'Instructions buried in a long announcement', 'One clear task list per lesson'],
          ['Self-regulation load', 'Unstructured self-paced modules for young learners', 'Checklists, deadlines, teacher check-ins'],
        ] },
      ],
    },
    {
      id: 'effects',
      title: 'Key effects',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Worked-example effect', body: 'Novices learn more from studying worked solutions than from solving equivalent problems unaided. Online, worked examples are cheap to provide and replay.' },
          { title: 'Completion and fading', body: 'Partially worked examples, with steps gradually removed, bridge to independent practice.' },
          { title: 'Transient information effect', body: 'Animations and audio disappear; for long or complex content, static pictures or learner control can work better (Leahy and Sweller, 2011).' },
          { title: 'Expertise reversal', body: 'As learners gain expertise, supports become redundant. Adaptive systems can fade supports automatically.' },
          { title: 'Guidance fading', body: 'Kirschner, Sweller and Clark (2006) argued that minimally guided discovery overloads novices; guidance should come first and fade later.' },
          { title: 'Collective working memory', body: 'Collaboration can share load across learners, if the task is complex enough to justify the coordination costs.' },
        ] },
      ],
    },
    {
      id: 'checklist',
      title: 'A low-load lesson page',
      blocks: [
        { t: 'checklist', items: [
          'One clear purpose and task list at the top',
          'Content chunked into short sections with headings',
          'Diagrams with integrated labels',
          'Videos short, segmented, with pause points',
          'Worked example before practice',
          'Practice with immediate feedback',
          'Optional extras clearly marked as optional',
          'The same layout every week',
        ] },
      ],
    },
  ],
  sources: [
    'Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. Educational Psychology Review, 31, 261–292.',
    'Leahy, W., & Sweller, J. (2011). Cognitive load theory, modality of presentation and the transient information effect. Applied Cognitive Psychology, 25, 943–951.',
    'Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work. Educational Psychologist, 41(2), 75–86.',
  ],
  related: ['teaching/theories/cognitive-load', 'e-pedagogy/theory/multimedia-learning', 'teaching/techniques/instruction/worked-examples'],
}

export default guide
