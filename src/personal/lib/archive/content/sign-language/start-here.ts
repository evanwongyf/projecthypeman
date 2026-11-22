import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Sign languages are full languages, with their own words and grammar, used by Deaf communities around the world. This shelf teaches the basics of **American Sign Language (ASL)**: the alphabet, numbers, about 80 everyday signs and the grammar that ties them together, with animated hands you can replay as often as you need.',
  nutshell: [
    'There is no single, universal sign language. There are hundreds, and most countries have their own.',
    'These pages teach **ASL**, whose one-handed alphabet is also used in Singapore, Malaysia, the Philippines, much of West Africa and beyond.',
    'Every sign here is animated. Tap a picture to play it, tap again to replay, and slow it down with the speed setting.',
    'The pictures show a signer facing you. Use your dominant hand; if you are left-handed, tick the box below and everything mirrors.',
    'A screen is a start, not the whole thing. Learn with Deaf signers as soon as you can.',
  ],
  sections: [
    {
      id: 'settings',
      title: 'Set up the hands',
      lead: 'These settings apply to every sign on this shelf and are remembered on this device.',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: ['hello', 'i-love-you'] },
      ],
    },
    {
      id: 'which',
      title: 'Which sign language is this?',
      blocks: [
        {
          t: 'p',
          text: 'Sign languages grew up in Deaf communities, not from the spoken language around them, so they do not follow national borders the way you might expect. The United States and the United Kingdom both speak English, but **ASL and British Sign Language (BSL) are unrelated**: a BSL signer and an ASL signer cannot easily understand each other. ASL is in fact related to French Sign Language, because a Deaf French teacher, Laurent Clerc, helped found the first American school for the deaf in 1817.',
        },
        {
          t: 'table',
          head: ['Language', 'Where', 'Alphabet'],
          rows: [
            ['ASL', 'USA, English-speaking Canada; used or influential in parts of West Africa and Southeast Asia', 'One-handed'],
            ['SgSL (Singapore Sign Language)', 'Singapore; shaped by ASL, Signing Exact English and Shanghai Sign Language', 'One-handed, the same as ASL'],
            ['BIM (Bahasa Isyarat Malaysia)', 'Malaysia; influenced by ASL', 'One-handed, very close to ASL'],
            ['FSL (Filipino Sign Language)', 'The Philippines; developed from contact with ASL', 'One-handed'],
            ['BSL, Auslan, NZSL', 'UK, Australia, New Zealand; one family of related languages', 'Two-handed'],
            ['LSF (French Sign Language)', 'France; the ancestor of ASL', 'One-handed'],
          ],
          caption: 'A few of the world’s sign languages. The World Federation of the Deaf counts more than 300.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'If you live outside the USA',
          text: 'The alphabet and numbers here will serve you well in many countries, and many signs overlap. But everyday vocabulary differs from country to country, and even from region to region. Check signs with a local Deaf teacher, and look up your own national sign language association (see [how to keep learning](@sign-language/learning-plan)).',
        },
      ],
    },
    {
      id: 'reading',
      title: 'How to read the pictures',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'You are watching someone facing you', body: 'The signer’s right hand is on your left, exactly as it would be in real life. To copy, use your own right hand (or left, if you are left-handed) and mirror what you see, as if looking in a mirror.' },
            { title: 'Tap to play, tap again to replay', body: 'Each animation starts and ends with a pause so you can see the first and last position. The speed buttons in the settings slow every sign down.' },
            { title: 'Read the four lines under each sign', body: 'Shape, where, move and palm describe the sign in words. Together with the animation, they tell you everything you need. See [how a sign is built](@sign-language/how-signs-work).' },
            { title: 'Watch the face too', body: 'The signer’s eyebrows and mouth change on some signs. In sign languages, the face is part of the grammar, not decoration.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'A cartoon is a simplification',
          text: 'The hands here are drawn from a simple model, so small details of a real hand (the exact bend of a knuckle, how much the wrist turns) are approximate. Use the written description as the reference, and copy real signers when you can.',
        },
      ],
    },
    {
      id: 'path',
      title: 'A path through the shelf',
      lead: 'Read in this order, a few pages a day.',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'sign-language/how-signs-work', note: 'The five parts every sign is made of.' },
            { path: 'sign-language/fingerspelling/alphabet', note: 'All 26 letters. Learn to spell your own name first.' },
            { path: 'sign-language/fingerspelling/look-alikes' },
            { path: 'sign-language/everyday/greetings', note: 'Hello, thank you, please and the other first signs.' },
            { path: 'sign-language/numbers' },
            { path: 'sign-language/everyday/questions' },
            { path: 'sign-language/everyday/people' },
            { path: 'sign-language/grammar', note: 'How signs combine into sentences.' },
            { path: 'sign-language/deaf-culture', note: 'Read this before you meet Deaf signers.' },
            { path: 'sign-language/everyday/practice', note: 'Short sentences, signed in ASL order.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'World Federation of the Deaf. (2023). *Our work*. wfdeaf.org.',
    'Lane, H., Hoffmeister, R., & Bahan, B. (1996). *A Journey into the Deaf-World*. DawnSignPress.',
    'Valli, C., Lucas, C., Mulrooney, K. J., & Villanueva, M. (2011). *Linguistics of American Sign Language* (5th ed.). Gallaudet University Press.',
  ],
  related: ['sign-language/how-signs-work', 'sign-language/deaf-culture', 'teaching/special-education/needs/sensory'],
}

export default guide
