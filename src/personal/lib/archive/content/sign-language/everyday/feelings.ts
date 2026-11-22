import type { Guide } from '../../../guide'

const GROUP = ['happy', 'sad', 'love', 'like', 'angry', 'tired', 'scared']

const guide: Guide = {
  intro:
    'Feeling signs are mostly made on the chest and the face, where we feel and show emotion. Your facial expression matters more here than anywhere: *happy* signed with a flat face does not look happy.',
  nutshell: [
    'Many feeling signs are made on the chest, around the heart.',
    'Show the feeling on your face as you sign it.',
    'The size and speed of a sign can show how strong the feeling is: a slow, heavy SAD is very sad.',
    '*Love* crosses the arms over the heart; *like* pulls a feeling out from the chest.',
  ],
  sections: [
    {
      id: 'signs',
      title: 'The signs',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: GROUP },
      ],
    },
    {
      id: 'degree',
      title: 'Showing how much',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Bigger and stronger', body: 'Make the sign larger, tenser or held longer: VERY HAPPY can be a bigger, bouncier HAPPY with a big smile.' },
            { title: 'Smaller and softer', body: 'A small, quick sign with a mild expression means "a bit".' },
            { title: 'Repeat for "keep feeling"', body: 'Repeating a sign in slow circles can mean the feeling went on for a long time.' },
          ],
        },
        {
          t: 'example',
          title: 'Feelings in sentences',
          lines: [
            { label: 'ASL', text: 'ME TIRED. (heavy face)' },
            { label: 'English', text: 'I’m tired.' },
            { label: 'ASL', text: 'YOU HAPPY? (brows up)' },
            { label: 'English', text: 'Are you happy?' },
            { label: 'ASL', text: 'ME LOVE FAMILY.' },
            { label: 'English', text: 'I love my family.' },
          ],
        },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *Emotions*. Lifeprint ASL University. lifeprint.com.'],
  related: ['sign-language/everyday/people', 'sign-language/grammar'],
}

export default guide
