import type { Guide } from '../../../guide'


const guide: Guide = {
  intro:
    'The first signs to learn are the ones you will use in your first conversation: saying hello, being polite, agreeing and disagreeing. Tap each picture to watch it, then copy it with your dominant hand.',
  nutshell: [
    '**Hello** is a small salute from the forehead; **goodbye** is a wave.',
    '**Thank you** and **good** both start at the chin and move out and down.',
    '**Please** and **sorry** both circle on the chest: flat hand for please, fist for sorry.',
    '**Yes** is a nodding fist; **no** snaps two fingers onto the thumb.',
    '"Nice to meet you" is NICE MEET YOU, three signs you will use in every introduction.',
  ],
  sections: [
    {
      id: 'settings',
      title: 'Your settings',
      blocks: [{ t: 'sign-tool', tool: 'settings' }],
    },
    {
      id: 'hello',
      title: 'Hello and goodbye',
      blocks: [{ t: 'signs', words: ['hello', 'goodbye', 'welcome'] }],
    },
    {
      id: 'manners',
      title: 'Please, thank you and sorry',
      blocks: [
        { t: 'signs', words: ['please', 'thank-you', 'sorry'] },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Let your face help',
          text: 'Sign *thank you* with a warm face and *sorry* with a sorry one. The expression is part of the sign.',
        },
      ],
    },
    {
      id: 'yes-no',
      title: 'Yes and no',
      blocks: [
        { t: 'signs', words: ['yes', 'no'] },
        { t: 'p', text: 'You will often see a signer just **nod** for yes or **shake their head** for no, without the hand sign at all. The head movement is a full answer on its own.' },
      ],
    },
    {
      id: 'meeting',
      title: 'Meeting someone',
      lead: 'NICE + MEET + YOU, and how you are feeling.',
      blocks: [
        { t: 'signs', words: ['nice', 'meet', 'fine', 'good', 'bad', 'i-love-you'] },
        {
          t: 'example',
          title: 'A first conversation',
          lines: [
            { label: 'A', text: 'HELLO. NICE MEET YOU.' },
            { label: 'B', text: 'NICE MEET YOU. YOU NAME WHAT?' },
            { label: 'A', text: 'ME NAME fs-SAM. YOU?' },
            { label: 'B', text: 'ME NAME fs-ALEX.' },
            { label: 'A', text: 'YOU DEAF? (brows up)' },
            { label: 'B', text: 'NO, HEARING. ME LEARN SIGN.' },
          ],
        },
        {
          t: 'p',
          text: 'Signs are written in CAPITALS (this is called **glossing**). *fs-* means the word is fingerspelled. Notice there is no "is", "am" or "the": ASL does not need them. See [grammar basics](@sign-language/grammar).',
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
            'Sign HELLO and GOODBYE to someone at home.',
            'Thank three people today in sign, as well as in words.',
            'Practise the first conversation above with a friend, swapping roles.',
            'Sign YES and NO with the head movement only, then with the hand too.',
          ],
        },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *ASL vocabulary*. Lifeprint ASL University. lifeprint.com.', 'Handspeak. (n.d.). *ASL dictionary*. handspeak.com.'],
  related: ['sign-language/everyday/questions', 'sign-language/everyday/people', 'sign-language/everyday/practice'],
}

export default guide
