import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some of the most popular ideas about learning have little or no evidence behind them. Surveys find that many teachers believe at least some of them (Dekker et al., 2012). Here are the most common, what the evidence actually says, and what to do instead.',
  nutshell: [
    'Matching teaching to a learner’s "learning style" (visual, auditory, kinaesthetic) does not improve learning.',
    'People do not use only 10% of their brains, and there are no "left-brained" or "right-brained" learners.',
    'The "learning pyramid" percentages were never measured.',
    'The fix is not to learn the right myth-free slogan but to ask: what is the evidence, and how good is it?',
  ],
  sections: [
    {
      id: 'styles',
      title: 'Learning styles',
      lead: 'The most widespread myth in education.',
      blocks: [
        {
          t: 'callout',
          tone: 'myth',
          title: 'The claim',
          text: 'Each learner has a preferred style (often visual, auditory or kinaesthetic, "VAK"), and teaching in that style helps them learn better.',
        },
        {
          t: 'p',
          text: 'People certainly have preferences. The question is whether matching instruction to them improves learning, which is called the **meshing hypothesis**. A major review by Pashler, McDaniel, Rohrer and Bjork (2008) found almost no studies with the right design to test it, and those that did found no benefit. Studies since have reached the same conclusion.',
        },
        {
          t: 'p',
          text: 'What does matter is matching the mode to the **content**: maps for geography, sound for music, hands-on for pottery. And combining words with visuals helps nearly everyone ([dual coding](@teaching/techniques/learning-strategies/dual-coding)).',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Instead',
          text: 'Use the best format for the material, combine words and pictures, and vary activities for interest. Do not label learners as "visual" or "kinaesthetic", which can limit what they believe they can do.',
        },
      ],
    },
    {
      id: 'brain',
      title: 'Brain myths',
      lead: 'Neuroscience ideas that got garbled on the way to the classroom.',
      blocks: [
        {
          t: 'table',
          head: ['Myth', 'What the evidence says'],
          rows: [
            ['We only use 10% of our brains.', 'Brain imaging shows activity across the whole brain; no area sits idle. Damage to almost any part has effects.'],
            ['Some people are left-brained (logical), others right-brained (creative).', 'Some functions lean to one hemisphere, but people do not differ in which half is "dominant" overall (Nielsen et al., 2013). Both halves work together on nearly every task.'],
            ['Brain Gym exercises improve learning.', 'Claims such as rubbing "brain buttons" to improve blood flow to the brain have no scientific basis. General physical activity is good for health and mood, but specific "brain exercises" are not.'],
            ['Listening to Mozart makes you smarter.', 'The original 1993 finding was a brief boost on one spatial task, likely due to arousal and mood. It does not raise intelligence.'],
            ['Sugar makes children hyperactive.', 'Controlled studies find no effect on behaviour; expectations of parents and teachers seem to shape what they see (Wolraich et al., 1995).'],
            ['Brain development stops in childhood.', 'The brain keeps changing throughout life, and the teenage brain is still developing into the mid-twenties.'],
          ],
        },
      ],
    },
    {
      id: 'pyramid',
      title: 'The learning pyramid',
      lead: '"We remember 10% of what we read, 20% of what we hear…"',
      blocks: [
        {
          t: 'p',
          text: 'The pyramid claiming learners retain 5% of lectures, 10% of reading and 90% of teaching others appears in countless training sessions, often credited to the National Training Laboratories. No study that produced these numbers has ever been found, and the neat round percentages are a warning sign in themselves. It is often wrongly mixed up with Edgar Dale’s "cone of experience" (1946), which had no percentages at all (Letrud & Hernes, 2018).',
        },
        {
          t: 'p',
          text: 'There is a real kernel: explaining to others ([the Feynman technique](@teaching/techniques/learning-strategies/feynman)) and actively retrieving information ([retrieval practice](@teaching/techniques/learning-strategies/retrieval-practice)) are powerful. But a well-designed lecture or reading can be very effective, and "teaching others" without the knowledge to teach is not.',
        },
      ],
    },
    {
      id: 'more',
      title: 'More ideas to handle with care',
      lead: 'Not all false, but often overstated.',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Multiple intelligences', body: 'Howard Gardner (1983) proposed several intelligences (linguistic, logical, musical, spatial and others). It is a theory of abilities, not learning styles, and Gardner himself has said it should not be used to label learners or to teach everything eight ways.' },
            { title: 'Digital natives', body: 'Young people who grew up with technology are not automatically better at learning with it, nor can they multitask effectively. Everyone learns worse when switching between tasks (Kirschner & De Bruyckere, 2017).' },
            { title: 'Attention span of X minutes', body: 'Claims that learners (or goldfish) have 8-second or 10-minute attention spans are not based on solid research. Attention depends heavily on the task, the teaching and the learner’s knowledge.' },
            { title: 'Discovery is always best', body: 'Beginners generally learn more from explicit teaching with practice than from minimally guided discovery. See [constructivism](@teaching/theories/constructivism).' },
            { title: 'Rereading and highlighting', body: 'Popular with learners, but weak for long-term learning compared with self-testing and spacing (Dunlosky et al., 2013).' },
            { title: 'Growth mindset fixes everything', body: 'Mindset effects are real but small. See [motivation](@teaching/theories/motivation).' },
          ],
        },
      ],
    },
    {
      id: 'spotting',
      title: 'Spotting a myth',
      lead: 'Questions to ask of any new idea.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Is there a named, findable study, or just "research shows"?',
            'Were learners actually tested on what they learned, or only asked if they liked it?',
            'Was there a comparison group taught another way?',
            'Are the numbers suspiciously round or neat?',
            'Is someone selling a product, course or certification based on it?',
            'Does it claim to work for everyone, in every subject, at every age?',
            'Has it been replicated by independent researchers?',
          ],
        },
        {
          t: 'p',
          text: 'For a deeper look at weighing evidence, see [using education research](@teaching/guides/growth/research).',
        },
      ],
    },
  ],
  sources: [
    'Pashler, H., McDaniel, M., Rohrer, D., & Bjork, R. (2008). Learning styles: Concepts and evidence. *Psychological Science in the Public Interest, 9*(3), 105–119.',
    'Dekker, S., Lee, N. C., Howard-Jones, P., & Jolles, J. (2012). Neuromyths in education. *Frontiers in Psychology, 3*, 429.',
    'Howard-Jones, P. A. (2014). Neuroscience and education: Myths and messages. *Nature Reviews Neuroscience, 15*(12), 817–824.',
    'Letrud, K., & Hernes, S. (2018). Excavating the origins of the learning pyramid myths. *Cogent Education, 5*(1).',
    'Kirschner, P. A., & De Bruyckere, P. (2017). The myths of the digital native and the multitasker. *Teaching and Teacher Education, 67*, 135–142.',
    'Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58.',
    'De Bruyckere, P., Kirschner, P. A., & Hulshof, C. D. (2015). *Urban myths about learning and education*. Academic Press.',
  ],
  related: ['teaching/guides/growth/research', 'teaching/techniques/learning-strategies/dual-coding', 'teaching/theories/cognitivism'],
}

export default guide
