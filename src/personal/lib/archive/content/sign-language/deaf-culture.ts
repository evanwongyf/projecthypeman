import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Learning a sign language means joining, as a guest, a community with its own culture, history and manners. These are the basics that hearing learners most often get wrong, and that Deaf signers most appreciate.',
  nutshell: [
    'Many Deaf people see themselves as a cultural and language group, written with a capital **D**.',
    'Get attention with a tap on the shoulder or arm, a wave, or by flicking the lights.',
    'Keep eye contact while someone signs to you; looking away is like walking off mid-sentence.',
    'Name signs are given by Deaf people. Do not invent your own.',
    'Talk to the Deaf person, not to their interpreter.',
  ],
  sections: [
    {
      id: 'deaf',
      title: 'deaf and Deaf',
      blocks: [
        {
          t: 'p',
          text: 'Lower-case *deaf* describes not hearing. Capital-D *Deaf* describes belonging to the Deaf community, with sign language as a first or main language and a shared culture. Many Deaf people do not see deafness as something to be fixed, and prefer *Deaf* or *hard of hearing* to "hearing impaired".',
        },
        { t: 'signs', words: ['deaf', 'hearing'] },
      ],
    },
    {
      id: 'manners',
      title: 'Everyday manners',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Tap a shoulder or arm lightly, wave within their view, or tap the table to get attention.',
            'Face the person, with light on your face, and keep your hands away from your mouth.',
            'Keep eye contact while they sign, and nod to show you are following.',
            'Use gesture, writing or typing when signs fail. Any communication beats none.',
            'Say if you are a learner. Most Deaf signers will happily slow down.',
          ],
          dont: [
            'Walk between two people who are signing (if you must, go quickly, without stopping).',
            'Shout or exaggerate your lip movements; it makes lip-reading harder.',
            'Grab someone’s hands to stop them signing. It is like covering their mouth.',
            'Say "never mind" or "it’s not important" when someone misses something. Repeat or rephrase.',
            'Read a private signed conversation across the room.',
          ],
        },
      ],
    },
    {
      id: 'names',
      title: 'Name signs',
      blocks: [
        {
          t: 'p',
          text: 'Many Deaf people have a **name sign**, a short sign used instead of spelling their name. It is given by members of the Deaf community, often based on the first letter of the name or a personal feature. As a learner, introduce yourself by fingerspelling your name. If you become part of a Deaf community, someone may give you a name sign; that is an honour.',
        },
      ],
    },
    {
      id: 'interpreters',
      title: 'Working with interpreters',
      blocks: [
        {
          t: 'list',
          items: [
            'Look at and talk to the Deaf person: say "How are you?", not "Ask her how she is."',
            'Speak at a normal pace and pause now and then; interpreting lags a few seconds behind.',
            'Give the interpreter slides, names and technical words in advance.',
            'Interpreters translate everything said in the room, including side comments.',
          ],
        },
      ],
    },
    {
      id: 'myths',
      title: 'Myths to drop',
      blocks: [
        { t: 'callout', tone: 'myth', title: 'Sign language is universal', text: 'There are hundreds of sign languages. ASL and BSL are not even related.' },
        { t: 'callout', tone: 'myth', title: 'ASL is English on the hands', text: 'ASL has its own vocabulary and grammar. Systems that follow English word by word (like Signing Exact English) exist, but they are codes for English, not natural languages.' },
        { t: 'callout', tone: 'myth', title: 'Deaf people can lip-read everything', text: 'Only a fraction of English sounds can be seen on the lips, so lip-readers have to guess a lot. It is exhausting and unreliable.' },
        { t: 'callout', tone: 'myth', title: 'Signing holds back speech', text: 'Research on Deaf and hearing children finds that a strong first language, signed or spoken, supports later learning, including literacy in a second language.' },
      ],
    },
  ],
  sources: [
    'Padden, C., & Humphries, T. (1988). *Deaf in America: Voices from a Culture*. Harvard University Press.',
    'Lane, H., Hoffmeister, R., & Bahan, B. (1996). *A Journey into the Deaf-World*. DawnSignPress.',
    'Humphries, T., et al. (2012). Language acquisition for deaf children: Reducing the harms of zero tolerance to the use of alternative approaches. *Harm Reduction Journal*, 9, 16.',
  ],
  related: ['sign-language/start-here', 'teaching/special-education/needs/sensory', 'sign-language/everyday/people'],
}

export default guide
