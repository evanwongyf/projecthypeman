import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Assistive technology (AT) is any tool that helps a learner do something they otherwise could not, or could only with great difficulty. It ranges from a pencil grip to a speech-generating device. The best AT removes a barrier so the learner can get on with learning.',
  nutshell: [
    'AT ranges from **low-tech** (pencil grips, picture cards) to **high-tech** (text-to-speech, communication devices).',
    'Many tools are now built into ordinary phones, tablets and computers.',
    'Choose AT by starting with the learner, the environment and the task, not the gadget (the **SETT** framework).',
    'Teach learners to use it, and use it every day, not only in exams.',
  ],
  sections: [
    {
      id: 'tools',
      title: 'Common tools',
      blocks: [
        {
          t: 'table',
          head: ['Barrier', 'Tools'],
          rows: [
            ['Reading', 'Text-to-speech, audiobooks, reading pens, screen readers, adjustable fonts and spacing, immersive readers.'],
            ['Writing', 'Speech-to-text (dictation), word prediction, spell and grammar checkers, keyboards instead of handwriting, graphic organiser apps.'],
            ['Maths', 'Talking calculators, digital manipulatives, graph paper templates, equation editors.'],
            ['Seeing', 'Screen magnification, high-contrast settings, screen readers, braille displays, video magnifiers.'],
            ['Hearing', 'Captions, transcription apps, radio aids, soundfield systems.'],
            ['Communicating', 'AAC: picture boards, communication books, speech-generating devices and apps.'],
            ['Organising', 'Digital calendars, reminders, visual timers, task-list apps.'],
            ['Sensory regulation', 'Noise-cancelling headphones, fidget tools, weighted items where advised by a therapist.'],
          ],
        },
      ],
    },
    {
      id: 'aac',
      title: 'AAC: augmentative and alternative communication',
      blocks: [
        {
          t: 'p',
          text: 'AAC supports or replaces speech for learners who cannot rely on it. It includes sign and gesture, picture exchange systems such as PECS (Bondy & Frost, 1994), and speech-generating devices where a learner taps symbols or types to produce spoken words.',
        },
        {
          t: 'list',
          items: [
            'AAC does not stop speech developing. Research suggests it tends to support it.',
            'Model the AAC system yourself: point to symbols as you speak, so the learner sees it used.',
            'Make sure the device is always available, charged and has the vocabulary for your lesson.',
            'Give time for the learner to compose a message; do not finish it for them.',
          ],
        },
      ],
    },
    {
      id: 'sett',
      title: 'Choosing AT: the SETT framework',
      lead: 'Joy Zabala’s four questions.',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: 'S', title: 'Student', body: 'What are the learner’s strengths, needs and preferences? What do they need to be able to do?' },
            { tag: 'E', title: 'Environment', body: 'Where will they use it? What is available? Who will support them? What are the noise, space and connectivity like?' },
            { tag: 'T', title: 'Tasks', body: 'What specific tasks, in which lessons, does the learner need to do but currently cannot?' },
            { tag: 'T', title: 'Tools', body: 'Only now: which tools would help this learner do these tasks in these places? Try them, and evaluate.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Built in and free',
          text: 'Before buying anything, check what is already built into school devices: dictation, read-aloud, magnifiers, captions, colour filters and focus modes are included in most operating systems and browsers.',
        },
      ],
    },
  ],
  sources: [
    'Zabala, J. S. (2005). *Ready, SETT, go! Getting started with the SETT framework*. Closing the Gap.',
    'Bondy, A. S., & Frost, L. A. (1994). The Picture Exchange Communication System. *Focus on Autistic Behavior, 9*(3), 1–19.',
    'Millar, D. C., Light, J. C., & Schlosser, R. W. (2006). The impact of augmentative and alternative communication intervention on the speech production of individuals with developmental disabilities. *Journal of Speech, Language, and Hearing Research, 49*(2), 248–264.',
  ],
  related: ['teaching/special-education/foundations/accommodations', 'teaching/special-education/needs/dyslexia', 'teaching/differentiation/udl'],
}

export default guide
