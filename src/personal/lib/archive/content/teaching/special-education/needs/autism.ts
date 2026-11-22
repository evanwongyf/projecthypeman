import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Autism is a lifelong difference in how people communicate, interact, process sensory information and experience the world. Every autistic learner is different. Classrooms that are predictable, clear and sensory-aware help autistic learners, and often everyone else too.',
  nutshell: [
    'Autism involves differences in **social communication and interaction**, and **restricted or repetitive** patterns of behaviour, interests or sensory experience.',
    'It is a spectrum: needs range from very high support to very little.',
    'Many autistic people prefer identity-first language ("autistic learner"); others prefer "learner with autism". Ask, and follow the individual’s preference.',
    'Helpful: predictability, clear literal language, visual supports, sensory adjustments, processing time and respect for interests.',
  ],
  sections: [
    {
      id: 'what',
      title: 'Understanding autism',
      blocks: [
        {
          t: 'p',
          text: 'The World Health Organization estimates that about 1 in 100 children worldwide is autistic, with higher estimates in some countries where identification is more thorough. Autism is often diagnosed later, or missed, in girls and in learners who "mask" by copying social behaviour, at great effort.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Social communication', body: 'Differences in reading unspoken cues, taking turns in conversation, understanding implied meaning, or knowing unwritten social rules. Language may be taken literally.' },
            { title: 'Predictability', body: 'Change and uncertainty can be very stressful. Routines and knowing what comes next provide safety.' },
            { title: 'Sensory processing', body: 'Sounds, lights, smells, textures or touch may be overwhelming (or under-registered). A buzzing light or noisy corridor can make learning impossible.' },
            { title: 'Focused interests', body: 'Deep, intense interests are common and can be a source of joy, expertise and motivation.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The double empathy problem',
          text: 'Damian Milton (2012) argued that communication difficulties between autistic and non-autistic people run both ways: each group finds the other hard to read. This reframes "social deficits" as a mismatch, and puts some responsibility on non-autistic people to adapt too.',
        },
      ],
    },
    {
      id: 'predictable',
      title: 'Make it predictable',
      blocks: [
        {
          t: 'list',
          items: [
            'Display a visual timetable, and refer to it. See [visual supports](@teaching/special-education/strategies/visual-supports).',
            'Warn in advance about changes: a supply teacher, a fire drill, a trip. Explain what will happen.',
            'Give a clear start, middle and end to tasks: what to do, how much, and what happens when finished.',
            'Keep classroom routines consistent.',
            'Use "now and next" or "first, then" to show sequences.',
          ],
        },
      ],
    },
    {
      id: 'language',
      title: 'Make language clear',
      blocks: [
        {
          t: 'table',
          head: ['Instead of', 'Try'],
          rows: [
            ['"Can you get your books out?"', '"Get your maths book out and open it to page 12."'],
            ['"Pull your socks up."', '"You need to finish the next three questions before break."'],
            ['"Write a bit about the Romans."', '"Write five sentences about Roman roads. Include how they were built."'],
            ['"Everyone, sit down."', '"Everyone, including you, Sam, sit down." (Some learners may not realise a group instruction includes them.)'],
          ],
        },
        {
          t: 'list',
          items: [
            'Give processing time after questions and instructions; avoid repeating in different words too quickly.',
            'Explain idioms and figurative language explicitly when they come up.',
            'Do not insist on eye contact; many autistic people listen better without it.',
          ],
        },
      ],
    },
    {
      id: 'sensory',
      title: 'Sensory and emotional regulation',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Adjust the environment', body: 'Seat away from noisy doors or buzzing lights. Allow ear defenders. Reduce clutter on walls near the learner.' },
            { title: 'A calm space', body: 'An agreed place to go, and a way to ask (a card), when overwhelmed.' },
            { title: 'Know the signs', body: 'Learn the early signs of rising stress for each learner: pacing, covering ears, repetitive questions. Act early.' },
            { title: 'Meltdowns are not tantrums', body: 'A meltdown is an involuntary response to overwhelm, not a bid for control. Reduce demands, reduce sensory input, keep language minimal and calm, and keep everyone safe. Talk about it later, if at all.' },
          ],
        },
      ],
    },
    {
      id: 'learning',
      title: 'In learning tasks',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Use special interests as a way in: maths problems about trains, writing about a favourite topic.',
            'Make group work roles and expectations explicit.',
            'Teach social understanding directly where it helps the learner, with their agreement.',
            'Offer written or visual alternatives to open-ended verbal discussion.',
            'Ask the learner and family what helps; they are the experts.',
          ],
          dont: [
            'Assume a lack of expression means a lack of interest or feeling.',
            'Punish stimming (repetitive movements like rocking or hand-flapping) that is not harmful; it often helps regulation.',
            'Spring surprises or change plans without warning.',
            'Treat autism as something to be trained out of a learner.',
          ],
        },
      ],
    },
  ],
  sources: [
    'American Psychiatric Association. (2022). *Diagnostic and statistical manual of mental disorders* (5th ed., text rev.).',
    'World Health Organization. (2023). *Autism* (fact sheet).',
    'Milton, D. E. M. (2012). On the ontological status of autism: The "double empathy problem". *Disability & Society, 27*(6), 883–887.',
    'Kenny, L., et al. (2016). Which terms should be used to describe autism? Perspectives from the UK autism community. *Autism, 20*(4), 442–462.',
    'Hume, K., et al. (2021). Evidence-based practices for children, youth, and young adults with autism: Third generation review. *Journal of Autism and Developmental Disorders, 51*, 4013–4032.',
  ],
  related: ['teaching/special-education/strategies/visual-supports', 'teaching/special-education/needs/speech-language', 'teaching/special-education/needs/semh'],
}

export default guide
