import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'For most learners, reading someone else’s fingerspelling is much harder than spelling. Fluent signers spell fast and blend letters together, so the trick is to stop reading letter by letter and start seeing the **shape of the whole word**.',
  nutshell: [
    'Watch the hand from a little distance, with soft eyes, not a stare at the fingers.',
    'Catch the first letter, the last letter and the length; your brain fills in the middle.',
    'Use context: a spelled word in "my name is…" is a name.',
    'Do not try to "say" each letter in your head; it is too slow.',
    'It is fine to ask for a repeat: sign AGAIN or spell it slowly yourself back.',
  ],
  sections: [
    {
      id: 'practise',
      title: 'Practise reading',
      lead: 'Ask a friend to type words into the fingerspeller while you look away, then watch and read them. Start slow, then move up to the fluent pace.',
      blocks: [{ t: 'sign-tool', tool: 'fingerspeller' }],
    },
    {
      id: 'how',
      title: 'How good readers read',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Whole-word shapes', body: 'Experienced readers recognise common words by their overall movement, the same way you read a familiar word without spelling it out.' },
            { title: 'First and last', body: 'Focus on the first letter and the final held letter. With the length and the context, that is often enough.' },
            { title: 'Context first', body: 'Think about what the word is likely to be before it is spelled. Names, places and brands are the most common.' },
            { title: 'Let it go', body: 'If you miss a letter, keep watching to the end rather than stopping at the gap.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Practise little and often',
          text: 'Reading speed builds with lots of short practice. Five minutes a day watching fingerspelled words will do more than one long session a week. See [spaced practice](@teaching/techniques/learning-strategies/spaced-practice).',
        },
      ],
    },
    {
      id: 'stuck',
      title: 'When you do not catch it',
      blocks: [
        { t: 'p', text: 'Missing a word is normal, even for fluent signers with unfamiliar names. Ask for it again, or spell what you think you saw and let them confirm.' },
        { t: 'signs', words: ['again', 'dont-know'] },
      ],
    },
  ],
  sources: ['Padden, C., & Gunsauls, D. C. (2003). How the alphabet came to be used in a sign language. *Sign Language Studies*, 4(1), 10–33.', 'Vicars, W. (n.d.). *Fingerspelling: Receptive practice*. Lifeprint ASL University. lifeprint.com.'],
  related: ['sign-language/fingerspelling/spelling-words', 'sign-language/fingerspelling/look-alikes', 'memory/active-recall'],
}

export default guide
