import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Spoken words are built from a small set of sounds. Signs are built the same way, from a small set of parts: the **shape** of the hand, **where** it is, how it **moves**, which way the **palm** faces, and what the **face** is doing. Change one part and you can get a different word.',
  nutshell: [
    'Every sign has five parts: handshape, location, movement, palm orientation and non-manual markers (face and body).',
    'Changing just one part can change the meaning, like *mother* and *father*, which differ only in location.',
    'Most signs are made in a "signing space" from the top of the head to the waist, about as wide as your elbows.',
    'One hand leads. Two-handed signs either mirror each other or use the other hand as a base.',
    'Learning to notice each part makes new signs much faster to pick up and remember.',
  ],
  sections: [
    {
      id: 'five',
      title: 'The five parts',
      blocks: [
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: '1', title: 'Handshape', body: 'The shape the fingers make: a fist, a flat hand, one finger pointing, a claw. ASL uses a few dozen handshapes, and most of them are letters or numbers.' },
            { tag: '2', title: 'Location', body: 'Where the sign is made: the forehead, the chin, the chest, the other hand, or the space in front of you.' },
            { tag: '3', title: 'Movement', body: 'What the hand does: taps, circles, slides, twists, opens or closes. Many signs repeat their movement.' },
            { tag: '4', title: 'Palm orientation', body: 'Which way the palm faces: towards you, away, up, down or to the side.' },
            { tag: '5', title: 'Non-manual markers', body: 'The face, head and body: raised or lowered eyebrows, a head shake, the shape of the mouth. They carry grammar and emotion.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Where this idea comes from',
          text: 'William Stokoe showed in 1960 that ASL signs break down into parts in the same way spoken words break down into sounds. This was strong evidence that ASL is a real language, not mime or gestures.',
        },
      ],
    },
    {
      id: 'pairs',
      title: 'One change, a new word',
      lead: 'Pairs of signs that differ in only one part are called minimal pairs. Play these to see the difference.',
      blocks: [
        { t: 'p', text: '**Location**: *father* and *mother* have the same handshape and movement. Father is at the forehead; mother is at the chin.' },
        { t: 'signs', words: ['father', 'mother'] },
        { t: 'p', text: '**Handshape**: *please* and *sorry* are both a circle on the chest. Please uses a flat hand; sorry uses a fist.' },
        { t: 'signs', words: ['please', 'sorry'] },
        { t: 'p', text: '**Movement**: *know* taps the forehead; *understand* flicks a finger up beside it.' },
        { t: 'signs', words: ['know', 'understand'] },
      ],
    },
    {
      id: 'space',
      title: 'Signing space and the dominant hand',
      blocks: [
        {
          t: 'list',
          items: [
            'Most signs happen in a box from just above your head to your waist, and from elbow to elbow. Keep signs inside it so they are easy to see.',
            'Choose your **dominant hand** (the one you write with) and keep it as the main hand. One-handed signs and fingerspelling use it.',
            'In **two-handed signs where both hands move**, they usually have the same shape and mirror each other (like *more* or *finish*).',
            'In **two-handed signs where one hand stays still**, the still hand is the base, often a flat hand or a simple shape (like *stop* or *school*).',
            'Signs are made at a relaxed, natural size. Bigger is not clearer; it is the signing equivalent of shouting.',
          ],
        },
        { t: 'signs', words: ['more', 'stop'] },
      ],
    },
    {
      id: 'face',
      title: 'The face is grammar',
      blocks: [
        {
          t: 'p',
          text: 'Your eyebrows mark the kind of sentence. For a question that asks for information (*what*, *where*, *who*), the brows go **down** and together. For a yes-or-no question, they go **up**. A head shake turns a sentence into a negative. This is covered in [grammar basics](@sign-language/grammar).',
        },
        { t: 'signs', words: ['where', 'yes'] },
        {
          t: 'dodont',
          do: ['Let your face match the meaning: a sad sign with a sad face.', 'Keep eye contact with the person you are signing to.', 'Mouth the English word quietly if it helps; many signers do for some signs.'],
          dont: ['Sign with a blank face; it can change or confuse the meaning.', 'Watch your own hands while you sign.', 'Exaggerate every movement.'],
        },
      ],
    },
    {
      id: 'learning',
      title: 'Using the five parts to learn',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Name the parts', body: 'For each new sign, say to yourself: shape, where, move, palm. The cards on these pages are laid out this way.' },
            { title: 'Look for links', body: 'Many signs share a location for a reason: signs about thinking are at the forehead, about feelings at the chest, about eating at the mouth.' },
            { title: 'Compare with signs you know', body: 'Ask "what is this like?" *Sorry* is *please* with a fist. Linking new signs to known ones is [elaboration](@teaching/techniques/learning-strategies/elaboration), and it makes memories stronger.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Stokoe, W. C. (1960). Sign language structure. *Studies in Linguistics: Occasional Papers*, 8.',
    'Battison, R. (1978). *Lexical Borrowing in American Sign Language*. Linstok Press.',
    'Valli, C., Lucas, C., Mulrooney, K. J., & Villanueva, M. (2011). *Linguistics of American Sign Language* (5th ed.). Gallaudet University Press.',
  ],
  related: ['sign-language/grammar', 'sign-language/fingerspelling/alphabet', 'sign-language/everyday/greetings'],
}

export default guide
