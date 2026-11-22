import type { Guide } from '../../../guide'


const guide: Guide = {
  intro:
    'Classroom signs are a great set to learn together, because many of them are built from each other: *learn* plus the person sign makes *student*, *teach* plus the person sign makes *teacher*.',
  nutshell: [
    '*School* is a teacher clapping for attention.',
    '*Learn* picks information up off a page and puts it in your head.',
    'Add the **person sign** (flat hands moving down the sides of the body) to a verb to name who does it.',
    '*Read* moves two "eyes" (a V hand) down a page; *write* scribbles with a pinched pen on the palm.',
    '*Sign* (as in sign language) is two index fingers circling.',
  ],
  sections: [
    {
      id: 'signs',
      title: 'The signs',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: ['school', 'learn', 'teacher', 'student'] },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Verb + person',
          text: 'TEACH + PERSON = teacher, LEARN + PERSON = student, WORK + PERSON = worker. Once you know the person sign, many job words come for free.',
        },
        { t: 'signs', words: ['book', 'read', 'write', 'study', 'practice', 'sign-language'] },
      ],
    },
    {
      id: 'sentences',
      title: 'In sentences',
      blocks: [
        {
          t: 'example',
          title: 'Talking about learning',
          lines: [
            { label: 'ASL', text: 'SIGN, ME LEARN.' },
            { label: 'English', text: 'I am learning sign language.' },
            { label: 'ASL', text: 'YOU STUDENT? (brows up)' },
            { label: 'English', text: 'Are you a student?' },
            { label: 'ASL', text: 'TEACHER, WHO? (brows down)' },
            { label: 'English', text: 'Who is the teacher?' },
            { label: 'ASL', text: 'ME PRACTICE SIGN EVERY-DAY.' },
            { label: 'English', text: 'I practise signing every day.' },
          ],
        },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *School vocabulary*. Lifeprint ASL University. lifeprint.com.'],
  related: ['sign-language/everyday/needs', 'sign-language/learning-plan'],
}

export default guide
