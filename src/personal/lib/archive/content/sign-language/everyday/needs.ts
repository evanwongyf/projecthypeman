import type { Guide } from '../../../guide'


const guide: Guide = {
  intro:
    'These are the signs that get things done in a day: food and drink, the bathroom, asking for help, and checking that you understand. They are also among the first signs taught to babies and to children who are learning to communicate.',
  nutshell: [
    'Eating and drinking signs are made at the mouth.',
    '*Bathroom* is a shaken T, for toilet.',
    '*Help* lifts a fist on a flat palm; the base hand gives the other a lift.',
    '*More*, *finish* and *want* are some of the most useful signs in any classroom or home.',
    'Thinking signs (*know*, *understand*) are made at the forehead.',
  ],
  sections: [
    {
      id: 'food',
      title: 'Food and drink',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'signs', words: ['eat', 'drink', 'water', 'more', 'finish'] },
        {
          t: 'callout',
          tone: 'note',
          title: 'Signs for young children',
          text: 'MORE, EAT, DRINK, FINISH, HELP and BATHROOM are a common first set for babies and young children, hearing or Deaf, and for learners who find speech hard. See [speech and language needs](@teaching/special-education/needs/speech-language).',
        },
      ],
    },
    {
      id: 'help',
      title: 'Help and the bathroom',
      blocks: [{ t: 'signs', words: ['bathroom', 'help', 'want', 'need'] }],
    },
    {
      id: 'control',
      title: 'Stop, wait and again',
      blocks: [{ t: 'signs', words: ['stop', 'wait', 'again', 'sleep', 'home'] }],
    },
    {
      id: 'understanding',
      title: 'Checking understanding',
      blocks: [
        { t: 'signs', words: ['understand', 'know', 'dont-know'] },
        {
          t: 'example',
          title: 'Repair phrases for learners',
          lines: [
            { label: 'ASL', text: 'AGAIN, PLEASE.' },
            { label: 'English', text: 'Could you say that again?' },
            { label: 'ASL', text: 'SLOW, PLEASE.' },
            { label: 'English', text: 'Slower, please.' },
            { label: 'ASL', text: 'SORRY, ME DON’T-KNOW.' },
            { label: 'English', text: 'Sorry, I don’t know.' },
            { label: 'ASL', text: 'YOU UNDERSTAND? (brows up)' },
            { label: 'English', text: 'Do you understand?' },
          ],
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
            'At your next meal, sign EAT, DRINK, MORE and FINISH as you go.',
            'Practise the repair phrases until you can sign them without thinking; you will need them.',
            'Teach three of these signs to someone else (teaching is a great way to remember).',
          ],
        },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *ASL vocabulary*. Lifeprint ASL University. lifeprint.com.', 'Acredolo, L., & Goodwyn, S. (2002). *Baby Signs*. McGraw-Hill.'],
  related: ['sign-language/everyday/greetings', 'sign-language/everyday/practice'],
}

export default guide
