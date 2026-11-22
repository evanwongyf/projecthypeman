import type { Guide } from '../../../guide'

const GROUP = ['what', 'where', 'who', 'why', 'when', 'how', 'which']

const guide: Guide = {
  intro:
    'Question words in ASL come with a face: for every *what, where, who, why, when, how* or *which* question, the eyebrows come **down and together**, and the head often tilts forward a little. Without that face, the question can look like a statement.',
  nutshell: [
    'For wh- questions, lower and draw in your brows for the whole question, not just the question sign.',
    'The question word usually comes **at the end**: YOU NAME WHAT?',
    'It can also come at the start and the end: WHERE BATHROOM WHERE?',
    'Yes/no questions are different: brows go **up**, and there is no question word.',
    'Hold the last sign of a question for a moment, looking at the person, to hand them the turn.',
  ],
  sections: [
    {
      id: 'signs',
      title: 'The question words',
      lead: 'Watch the signer’s eyebrows as well as the hands.',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: GROUP },
      ],
    },
    {
      id: 'face',
      title: 'Two kinds of question face',
      blocks: [
        {
          t: 'table',
          head: ['Kind of question', 'Eyebrows', 'Example'],
          rows: [
            ['Wh- question (asks for information)', 'Down and together; head forward', 'YOU NAME WHAT?'],
            ['Yes/no question', 'Up; head forward; hold the last sign', 'YOU DEAF?'],
            ['Rhetorical question (asked and answered by you)', 'Up, then answer', 'ME TIRED. WHY? WORK.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Lowered brows are not anger',
          text: 'To hearing people, lowered brows can look cross. In ASL they simply mark a wh- question. Keep the rest of your face relaxed and friendly.',
        },
      ],
    },
    {
      id: 'order',
      title: 'Where the question word goes',
      blocks: [
        {
          t: 'example',
          title: 'Common questions',
          lines: [
            { label: 'English', text: 'What is your name?' },
            { label: 'ASL', text: 'YOU NAME WHAT?' },
            { label: 'English', text: 'Where is the bathroom?' },
            { label: 'ASL', text: 'BATHROOM WHERE?' },
            { label: 'English', text: 'Who is your teacher?' },
            { label: 'ASL', text: 'YOU TEACHER WHO?' },
            { label: 'English', text: 'How are you?' },
            { label: 'ASL', text: 'HOW YOU?' },
          ],
        },
      ],
    },
  ],
  sources: ['Neidle, C., Kegl, J., MacLaughlin, D., Bahan, B., & Lee, R. G. (2000). *The Syntax of American Sign Language*. MIT Press.', 'Vicars, W. (n.d.). *Questions*. Lifeprint ASL University. lifeprint.com.'],
  related: ['sign-language/grammar', 'sign-language/everyday/greetings'],
}

export default guide
