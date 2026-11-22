import type { ArchiveNode } from '../topics'

// A beginner's course in American Sign Language, with animated hands for the alphabet,
// numbers and everyday signs.

export const SIGN_LANGUAGE: ArchiveNode = {
  slug: 'sign-language',
  title: 'Sign language',
  blurb: 'Learn to fingerspell, count and sign everyday words in ASL, with animated hands you can replay and slow down.',
  glyph: '✋',
  color: 'color-mix(in srgb, var(--mint) 55%, var(--teal))',
  tags: ['asl', 'sign language', 'deaf', 'signing', 'fingerspelling', 'hand signs', 'sgsl', 'bsl'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What sign languages are, which one these pages teach, and how to use the animations.', minutes: 6, glyph: '★', tags: ['beginner', 'introduction', 'which sign language', 'asl vs bsl'] },
    { slug: 'how-signs-work', title: 'How a sign is built', blurb: 'Handshape, location, movement, palm and face: the five parts of every sign.', minutes: 8, tags: ['parameters', 'handshape', 'location', 'movement', 'orientation', 'non-manual markers', 'phonology'] },
    {
      slug: 'fingerspelling',
      title: 'Fingerspelling',
      blurb: 'The one-handed alphabet: every letter, the ones that look alike, and spelling and reading whole words.',
      glyph: 'Aa',
      tags: ['alphabet', 'abc', 'letters', 'manual alphabet', 'spell'],
      children: [
        { slug: 'alphabet', title: 'The alphabet, A to Z', blurb: 'All 26 handshapes, animated, with how to make each one and a printable chart.', minutes: 12, tags: ['abc', 'letters', 'chart', 'pdf', 'printable'] },
        { slug: 'look-alikes', title: 'Letters that look alike', blurb: 'A, S, T, M, N and E; U, V, R, H and K; and the other groups beginners mix up.', minutes: 8, tags: ['confusing letters', 'mistakes', 'similar'] },
        { slug: 'spelling-words', title: 'Spelling words smoothly', blurb: 'Hand position, rhythm, double letters and the fingerspeller: type any word and watch it.', minutes: 8, tags: ['name', 'spell my name', 'double letters', 'rhythm', 'fingerspeller'] },
        { slug: 'reading', title: 'Reading fingerspelling', blurb: 'Read shapes, not letters: how fluent signers read fingerspelling.', minutes: 5, tags: ['receptive', 'comprehension', 'practice'] },
      ],
    },
    { slug: 'numbers', title: 'Numbers', blurb: 'Zero to ten animated, then the patterns for teens, tens, hundreds, age and money.', minutes: 9, tags: ['counting', 'numbers', 'age', 'money', 'time', 'digits'] },
    {
      slug: 'everyday',
      title: 'Everyday signs',
      blurb: 'Around 80 essential signs, in groups, each animated with step-by-step instructions.',
      glyph: '☺',
      tags: ['vocabulary', 'words', 'basic signs', 'common signs'],
      children: [
        { slug: 'greetings', title: 'Greetings and manners', blurb: 'Hello, goodbye, please, thank you, sorry, yes, no and more.', minutes: 8, tags: ['hello', 'thank you', 'please', 'sorry', 'yes', 'no', 'i love you'] },
        { slug: 'questions', title: 'Question words', blurb: 'What, where, who, why, when, how and which, and the face that goes with them.', minutes: 7, tags: ['what', 'where', 'who', 'why', 'when', 'how', 'wh questions'] },
        { slug: 'people', title: 'People and family', blurb: 'Me, you, family members, friends, and Deaf and hearing.', minutes: 8, tags: ['mother', 'father', 'family', 'friend', 'pronouns', 'deaf'] },
        { slug: 'feelings', title: 'Feelings', blurb: 'Happy, sad, love, like, angry, tired and scared, and why your face matters.', minutes: 6, tags: ['emotions', 'happy', 'sad', 'love'] },
        { slug: 'needs', title: 'Everyday needs', blurb: 'Eat, drink, bathroom, help, more, stop, wait, understand and other signs you will use daily.', minutes: 9, tags: ['eat', 'drink', 'bathroom', 'toilet', 'help', 'more', 'finish', 'understand'] },
        { slug: 'school', title: 'At school', blurb: 'School, teacher, student, learn, read, write, study and practise.', minutes: 7, tags: ['classroom', 'teacher', 'student', 'learn', 'book'] },
        { slug: 'time', title: 'Time', blurb: 'Now, tomorrow, yesterday, morning, night and later, and the time line around your body.', minutes: 6, tags: ['tomorrow', 'yesterday', 'morning', 'night', 'time line'] },
        { slug: 'colours', title: 'Colours', blurb: 'Red, blue, green, yellow and six more.', minutes: 5, tags: ['colors', 'red', 'blue', 'green'] },
        { slug: 'practice', title: 'Practice: phrases', blurb: 'Watch short sentences signed in ASL order and build your own.', minutes: 6, tags: ['sentences', 'phrases', 'practice'] },
      ],
    },
    { slug: 'grammar', title: 'Grammar basics', blurb: 'Topic first, time first, questions on the face, pointing in space and saying no.', minutes: 10, tags: ['word order', 'topic comment', 'facial grammar', 'gloss', 'syntax'] },
    { slug: 'deaf-culture', title: 'Deaf culture and etiquette', blurb: 'Getting attention, eye contact, name signs, interpreters and the myths to drop.', minutes: 8, tags: ['deaf community', 'etiquette', 'name sign', 'interpreter', 'capital d'] },
    { slug: 'learning-plan', title: 'How to keep learning', blurb: 'A four-week plan, how to practise with spaced repetition, and where to find classes and Deaf signers.', minutes: 7, tags: ['plan', 'resources', 'classes', 'practice', 'lifeprint', 'handspeak'] },
  ],
}
