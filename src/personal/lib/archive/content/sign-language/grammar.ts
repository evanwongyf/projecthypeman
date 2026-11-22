import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'ASL is not English on the hands. It has its own grammar, which uses word order, the space around the signer, and the face. You do not need it all to start, but a few basics make your signing much easier to follow.',
  nutshell: [
    '**Time first**: say when, then the rest. TOMORROW ME SCHOOL.',
    '**Topic first**: name what you are talking about, then say something about it. BOOK, ME READ FINISH.',
    '**Questions on the face**: brows down for wh- questions, up for yes/no.',
    '**Space**: put people and things at spots around you, then point to those spots.',
    '**Negatives**: shake your head while signing, or add NOT, or use a negative sign like DON’T-KNOW.',
    'Little words like *is*, *the* and *a* are not signed.',
  ],
  sections: [
    {
      id: 'gloss',
      title: 'How signing is written: gloss',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'CAPITALS', def: 'Each word in capitals stands for one sign, roughly translated: ME LEARN SIGN.' },
            { term: 'fs-WORD', def: 'A fingerspelled word: fs-SAM.' },
            { term: '#WORD', def: 'A lexicalised fingerspelling that has become a sign: #OK.' },
            { term: 'IX', def: 'A point (index) at a person or place: IX-there.' },
            { term: 'WORD-WORD', def: 'One sign that needs several English words: DON’T-KNOW.' },
            { term: 'line above', def: 'In books, a line over signs with a letter (like *q* or *wh*) shows a facial expression held over them. Here we write it in brackets.' },
          ],
        },
      ],
    },
    {
      id: 'order',
      title: 'Time first, topic first',
      blocks: [
        {
          t: 'example',
          title: 'English to ASL order',
          lines: [
            { label: 'English', text: 'I am going to school tomorrow.' },
            { label: 'ASL', text: 'TOMORROW ME GO SCHOOL.' },
            { label: 'English', text: 'I have finished the book.' },
            { label: 'ASL', text: 'BOOK, ME READ FINISH. (brows up on BOOK)' },
            { label: 'English', text: 'My sister is Deaf.' },
            { label: 'ASL', text: 'SISTER, DEAF.' },
          ],
        },
        {
          t: 'p',
          text: 'Raising your brows on the topic, with a tiny pause after it, marks it as the topic. Then you comment on it. Simple subject–verb–object order (ME LIKE BOOK) is also fine, especially for short sentences.',
        },
      ],
    },
    {
      id: 'questions',
      title: 'Questions',
      blocks: [
        { t: 'signs', words: ['what', 'understand'] },
        {
          t: 'table',
          head: ['Type', 'Face', 'Example'],
          rows: [
            ['Wh- question', 'Brows down and together', 'YOU LIVE WHERE?'],
            ['Yes/no question', 'Brows up, head forward, last sign held', 'YOU UNDERSTAND?'],
          ],
        },
      ],
    },
    {
      id: 'space',
      title: 'Using space',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set up', body: 'Name a person and point to a spot: "MOTHER IX-left". Now that spot on your left is your mother.' },
            { title: 'Refer back', body: 'Later, point to that spot to mean *she* or *her*. No need to sign MOTHER again.' },
            { title: 'Show who does what', body: 'Some verbs move between spots to show who does it to whom. HELP moved from you towards the spot means "I help her"; moved from the spot towards you means "she helps me".' },
          ],
        },
        { t: 'signs', words: ['he-she', 'help'] },
        { t: 'callout', tone: 'tip', title: 'Keep your map steady', text: 'Once you put someone on your left, keep them there for the rest of the conversation. Moving them around is confusing.' },
      ],
    },
    {
      id: 'negation',
      title: 'Saying no',
      blocks: [
        {
          t: 'list',
          items: [
            '**Shake your head** while signing: ME UNDERSTAND with a head shake means "I don’t understand".',
            'Add the sign **NOT** (a thumb flicked out from under the chin) before the verb.',
            'Some signs have their own negative form that twists away: KNOW → DON’T-KNOW, LIKE → DON’T-LIKE.',
          ],
        },
        { t: 'signs', words: ['know', 'dont-know'] },
      ],
    },
    {
      id: 'more',
      title: 'Other patterns you will see',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Plurals', body: 'Add a number or MANY, or repeat the sign in different places: TREE repeated across the space means a row of trees.' },
            { title: 'Noun and verb pairs', body: 'Some pairs differ in movement: the verb SIT moves once; the noun CHAIR taps twice.' },
            { title: 'Classifiers', body: 'Handshapes that stand for a kind of thing and can move to show what it does: a sideways 3 hand for a car, driving and parking.' },
            { title: 'No "be" verb', body: 'ASL does not sign *is*, *am* or *are*. ME TIRED is a complete sentence.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Neidle, C., Kegl, J., MacLaughlin, D., Bahan, B., & Lee, R. G. (2000). *The Syntax of American Sign Language*. MIT Press.',
    'Valli, C., Lucas, C., Mulrooney, K. J., & Villanueva, M. (2011). *Linguistics of American Sign Language* (5th ed.). Gallaudet University Press.',
    'Supalla, T., & Newport, E. (1978). How many seats in a chair? The derivation of nouns and verbs in American Sign Language. In P. Siple (Ed.), *Understanding Language through Sign Language Research*. Academic Press.',
  ],
  related: ['sign-language/how-signs-work', 'sign-language/everyday/questions', 'sign-language/everyday/time'],
}

export default guide
