import type { Guide } from '../../../guide'


const guide: Guide = {
  intro:
    'ASL pronouns are pointing: point to yourself for *me*, at someone for *you*, and to the side for *he*, *she* or *they*. Family signs follow a neat pattern too: male signs are made near the forehead and female signs near the chin.',
  nutshell: [
    'Pronouns are points. Pointing at people is polite and normal in ASL.',
    'One point covers he, she, they and it; ASL pronouns do not mark gender.',
    'Male relatives: forehead. Female relatives: chin. *Father* and *mother* differ only in location.',
    '*Brother* and *sister* add the sign for "same": two matching L hands.',
    '*Deaf* and *hearing* are identity signs you will use early on.',
  ],
  sections: [
    {
      id: 'pronouns',
      title: 'Me, you, them, us',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: ['me', 'you', 'he-she', 'we'] },
        {
          t: 'p',
          text: 'To talk about someone who is not there, signers point to a spot in space and "put" that person there. Every later point to that spot means them. See [pointing and space](@sign-language/grammar).',
        },
      ],
    },
    {
      id: 'family',
      title: 'Family',
      blocks: [
        { t: 'signs', words: ['mother', 'father', 'brother', 'sister', 'baby', 'family'] },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The forehead and chin rule',
          text: 'Forehead for male (*father, brother, man, boy*), chin for female (*mother, sister, woman, girl*). Learn one of each pair and you know where the other goes.',
        },
      ],
    },
    {
      id: 'others',
      title: 'Friends and other people',
      blocks: [{ t: 'signs', words: ['friend', 'man', 'woman', 'name'] }],
    },
    {
      id: 'identity',
      title: 'Deaf and hearing',
      blocks: [
        { t: 'signs', words: ['deaf', 'hearing'] },
        {
          t: 'p',
          text: 'In the Deaf community, *hearing* is simply the word for people who are not Deaf. Many Deaf people prefer *Deaf* or *hard of hearing* to "hearing impaired". More in [Deaf culture and etiquette](@sign-language/deaf-culture).',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practise',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Sign your family: MOTHER, FATHER, BROTHER, SISTER, pointing to a photo of each.',
            'Say who is Deaf or hearing in a short sentence: MOTHER DEAF. ME HEARING.',
            'Introduce a friend: FRIEND, NAME, then fingerspell their name.',
          ],
        },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *Family signs*. Lifeprint ASL University. lifeprint.com.', 'Padden, C., & Humphries, T. (1988). *Deaf in America: Voices from a Culture*. Harvard University Press.'],
  related: ['sign-language/everyday/greetings', 'sign-language/deaf-culture', 'sign-language/grammar'],
}

export default guide
