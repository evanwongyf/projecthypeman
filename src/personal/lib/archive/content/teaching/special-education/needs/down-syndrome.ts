import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Down syndrome is a genetic condition caused by an extra copy of chromosome 21. It usually brings some degree of intellectual disability, but also a recognisable learning profile that teachers can plan for. Every learner is an individual, and many make strong progress in inclusive classrooms with the right support.',
  nutshell: [
    'Common **strengths**: visual learning, visual memory, social understanding, learning from peers.',
    'Common **needs**: verbal short-term memory, expressive speech, processing time, fine motor skills.',
    'Hearing and vision difficulties are common; check they have been assessed.',
    'Reading can be a real strength, and it supports language development.',
  ],
  sections: [
    {
      id: 'profile',
      title: 'A typical learning profile',
      blocks: [
        {
          t: 'table',
          head: ['Often a relative strength', 'Often needs support'],
          rows: [
            ['Visual learning and visual memory', 'Verbal short-term memory (remembering spoken information)'],
            ['Understanding language (receptive)', 'Speaking clearly and in full sentences (expressive)'],
            ['Social skills and empathy', 'Processing speed; responding quickly'],
            ['Learning from watching others', 'Fine and gross motor skills (low muscle tone is common)'],
            ['Reading, especially sight words', 'Number and abstract maths concepts'],
          ],
          caption: 'Based on research summarised by Down Syndrome Education International. Individual profiles vary widely.',
        },
      ],
    },
    {
      id: 'strategies',
      title: 'Teaching strategies',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Show, don’t just tell', body: 'Pair every spoken instruction with a picture, gesture, demonstration or written word. See [visual supports](@teaching/special-education/strategies/visual-supports).' },
            { title: 'Keep instructions short', body: 'One step at a time, in the order things happen, with time to process.' },
            { title: 'Signing', body: 'Many learners use signing systems (such as Makaton in the UK) alongside speech. Learn the key signs.' },
            { title: 'Reading to support language', body: 'Printed words give a visual route into language. Sue Buckley’s research showed reading can boost speech and language development.' },
            { title: 'Small steps and practice', body: 'Break tasks down ([task analysis](@teaching/special-education/needs/intellectual)) and give plenty of repeated, successful practice.' },
            { title: 'Accept other ways to respond', body: 'Pointing, choosing from options, writing, or using a communication aid when speech is hard.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Health checks',
          text: 'Hearing loss (often fluctuating, from glue ear) and vision problems are much more common in people with Down syndrome. A learner who seems not to understand may simply not be hearing or seeing well. Check with the family and specialists.',
        },
      ],
    },
    {
      id: 'expectations',
      title: 'High expectations',
      blocks: [
        {
          t: 'p',
          text: 'Studies comparing teenagers with Down syndrome in mainstream and special schools found that those in inclusive education had significantly better spoken language and literacy (Buckley et al., 2006). Keep expectations high, teach the same core content where possible, and build friendships with peers, who are powerful models.',
        },
      ],
    },
  ],
  sources: [
    'Buckley, S., Bird, G., Sacks, B., & Archer, T. (2006). A comparison of mainstream and special education for teenagers with Down syndrome. *Down Syndrome Research and Practice, 9*(3), 54–67.',
    'Down Syndrome Education International. *Education and development resources*. dseinternational.org',
  ],
  related: ['teaching/special-education/needs/intellectual', 'teaching/special-education/strategies/visual-supports', 'teaching/special-education/needs/speech-language'],
}

export default guide
