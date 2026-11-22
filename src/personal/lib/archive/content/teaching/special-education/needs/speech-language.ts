import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Language is the medium of almost all teaching. Learners with speech, language and communication needs may struggle to understand what is said, to find the words they need, to put sentences together or to speak clearly and fluently. These needs are common and often hidden.',
  nutshell: [
    '**Developmental language disorder (DLD)** affects around 7% of children: about two in every class of 30.',
    'Difficulties can be **receptive** (understanding), **expressive** (speaking), or both, and are easy to mistake for inattention or poor behaviour.',
    'Simplify the language, not the content: short sentences, key words, visuals, processing time.',
    'Teach vocabulary explicitly and often; it is the foundation of learning in every subject.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Kinds of need',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Receptive language', def: 'Understanding spoken language. The learner may miss parts of instructions, follow what others do instead, or answer a different question.' },
            { term: 'Expressive language', def: 'Using language: finding words, building sentences, telling a story in order, explaining.' },
            { term: 'Speech sounds', def: 'Producing sounds clearly. Speech may be hard for others to understand.' },
            { term: 'Fluency', def: 'Stammering (stuttering): repetitions, prolongations or blocks in speech.' },
            { term: 'Social communication', def: 'Using language in social situations: turn-taking, staying on topic, understanding implied meaning.' },
            { term: 'DLD', def: 'Developmental language disorder: persistent language difficulties with no known cause such as hearing loss or autism. Norbury et al. (2016) estimated about 7.6% of children starting school.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Easily misread',
          text: 'A learner who does not understand instructions may look defiant, lazy or distracted. Before assuming behaviour, check: did they understand what I asked?',
        },
      ],
    },
    {
      id: 'understanding',
      title: 'Supporting understanding',
      blocks: [
        {
          t: 'list',
          items: [
            'Get attention first: say the learner’s name before the instruction.',
            'Use short sentences, one instruction at a time, in the order things should happen.',
            'Emphasise key words, and back them up with visuals, gestures and written reminders.',
            'Give processing time: wait, and repeat using the **same** words before rephrasing.',
            'Check understanding by asking the learner to show or tell you what to do, not "do you understand?".',
            'Encourage learners to say when they have not understood, and praise them when they do.',
          ],
        },
      ],
    },
    {
      id: 'vocabulary',
      title: 'Teaching vocabulary',
      lead: 'Beck, McKeown and Kucan’s three tiers.',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'Tier 1: everyday words', body: 'Words most learners know from daily life: *happy, dog, run*. Usually not taught directly, but may need attention for language learners and learners with DLD.' },
            { name: 'Tier 2: academic words', body: 'High-use words across subjects: *analyse, significant, contrast, consequence*. The most valuable to teach explicitly, because they appear everywhere and are rarely explained.' },
            { name: 'Tier 3: subject words', body: 'Specialist terms: *photosynthesis, isotope, sonnet*. Taught when the topic needs them.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Say it', body: 'Say the word clearly; learners repeat it. Clap the syllables.' },
            { title: 'Show it', body: 'Write it, show a picture or example.' },
            { title: 'Explain it', body: 'A learner-friendly definition, not the dictionary one.' },
            { title: 'Link it', body: 'Related words, word parts, opposites: *transport, transfer, transatlantic*.' },
            { title: 'Use it', body: 'Learners use the word in their own sentences, several times, across lessons.' },
          ],
        },
      ],
    },
    {
      id: 'stammering',
      title: 'Supporting a learner who stammers',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Give the learner time to finish, and keep natural eye contact.',
            'Respond to what they say, not how they said it.',
            'Agree with the learner how they want to handle reading aloud or answering in class.',
            'Reduce time pressure on speaking.',
          ],
          dont: [
            'Finish their words or sentences.',
            'Tell them to "slow down" or "take a breath".',
            'Make them speak in front of others before they are ready.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          text: 'Speech and language therapists assess and plan support for these needs. Ask your SENCO about referral, and ask for the therapist’s targets so you can reinforce them in class.',
        },
      ],
    },
  ],
  sources: [
    'Norbury, C. F., et al. (2016). The impact of nonverbal ability on prevalence and clinical presentation of language disorder: Evidence from a population study. *Journal of Child Psychology and Psychiatry, 57*(11), 1247–1257.',
    'Bishop, D. V. M., et al. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development. *Journal of Child Psychology and Psychiatry, 58*(10), 1068–1080.',
    'Beck, I. L., McKeown, M. G., & Kucan, L. (2013). *Bringing words to life: Robust vocabulary instruction* (2nd ed.). Guilford.',
  ],
  related: ['teaching/differentiation/language-learners', 'teaching/special-education/strategies/visual-supports', 'teaching/special-education/needs/autism'],
}

export default guide
