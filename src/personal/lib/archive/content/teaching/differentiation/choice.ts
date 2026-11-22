import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Choice boards, learning menus and RAFT tasks let learners choose how they practise or show their learning, within limits you set. Well-designed choice supports motivation and lets learners play to interests without lowering the standard.',
  nutshell: [
    'Every option must target the **same learning goal** at a similar level of challenge.',
    '**Tic-tac-toe boards**: nine tasks in a grid; learners complete three in a line.',
    '**Menus**: a required "main course", options for "sides", and an optional "dessert".',
    '**RAFT**: learners choose a **R**ole, **A**udience, **F**ormat and **T**opic for writing.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why offer choice',
      blocks: [
        {
          t: 'p',
          text: 'Choice supports **autonomy**, one of the three basic needs in [self-determination theory](@teaching/theories/motivation). A meta-analysis found that giving learners choices tends to increase intrinsic motivation and effort, especially when there are a moderate number of options (Patall, Cooper & Robinson, 2008). Too many options, or trivial ones, reduce the benefit.',
        },
      ],
    },
    {
      id: 'formats',
      title: 'Formats',
      blocks: [
        {
          t: 'example',
          title: 'Tic-tac-toe board: the water cycle',
          lines: [
            { label: 'Row 1', text: 'Draw and label a diagram of the cycle · Write a diary of a water drop · Explain the cycle to a younger learner in a 1-minute recording' },
            { label: 'Row 2', text: 'Make a flow chart of the four stages · **Centre (required): answer five questions explaining each stage** · Design a quiz with answers' },
            { label: 'Row 3', text: 'Explain how a local river fits into the cycle · Compare the cycle in a desert and a rainforest · Predict what happens to the cycle if temperatures rise' },
            { label: 'Rule', text: 'Complete any three in a line, including the centre square.' },
          ],
        },
        {
          t: 'cards',
          items: [
            { title: 'Learning menu', body: '**Main course**: required tasks everyone does. **Side dishes**: choose two of four. **Dessert**: optional extension. Works well for a week or a unit.' },
            { title: 'RAFT', body: '**Role**: a scientist, a historical figure, a river. **Audience**: a newspaper, a younger learner, a council. **Format**: letter, speech, advert. **Topic**: the content focus. *"As a drop of water (R), write a postcard (F) to a cloud (A) describing your journey through the water cycle (T)."*' },
            { title: 'Think-dots', body: 'Six tasks numbered 1–6. Learners roll a die to get their task, which adds fun and randomness while keeping options equivalent.' },
            { title: 'Choice of text', body: 'Learners choose between two or three texts on the same theme, at different reading levels or on different topics.' },
          ],
        },
      ],
    },
    {
      id: 'design',
      title: 'Designing good choices',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Every option practises the same key knowledge or skill.',
            'Options are of similar challenge; no "easy way out".',
            'Success criteria apply across all options.',
            'Creative formats still require the core thinking, not just decoration.',
            'There are only three to six meaningful options at a time.',
            'Learners know how and when they will be assessed.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          text: 'Watch out for options where most of the effort goes into making something look good (posters, models) rather than thinking about the content. As [cognitivism](@teaching/theories/cognitivism) reminds us, learners remember what they think about.',
        },
      ],
    },
  ],
  sources: [
    'Patall, E. A., Cooper, H., & Robinson, J. C. (2008). The effects of choice on intrinsic motivation and related outcomes: A meta-analysis. *Psychological Bulletin, 134*(2), 270–300.',
    'Tomlinson, C. A. (2014). *The differentiated classroom* (2nd ed.). ASCD.',
  ],
  related: ['teaching/differentiation/foundations', 'teaching/theories/motivation', 'teaching/differentiation/udl'],
}

export default guide
