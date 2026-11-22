import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Ten minutes a day of the right practice will take you further than an hour once a week. Here is a four-week plan using the pages on this shelf, how to review signs so they stick, and where to go next, which should always include real Deaf signers.',
  nutshell: [
    'Practise a little every day; spread reviews out over days and weeks.',
    'Test yourself (sign it before you look), do not just re-watch.',
    'Learn signs in short phrases, not as a word list.',
    'Practise **reading** signs as much as making them.',
    'Take a class taught by a Deaf teacher, and go to Deaf events when you can.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'A four-week starter plan',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Learn', 'Practise'],
          rows: [
            ['1', '[The alphabet](@sign-language/fingerspelling/alphabet), [greetings](@sign-language/everyday/greetings)', 'Spell your name and 5 words a day. Greet people in sign.'],
            ['2', '[Look-alike letters](@sign-language/fingerspelling/look-alikes), [numbers](@sign-language/numbers), [questions](@sign-language/everyday/questions)', 'Watch and read spelled words daily. Ask and answer YOU NAME WHAT?'],
            ['3', '[People](@sign-language/everyday/people), [feelings](@sign-language/everyday/feelings), [needs](@sign-language/everyday/needs)', 'Describe your family. Sign through one meal.'],
            ['4', '[Grammar basics](@sign-language/grammar), [time](@sign-language/everyday/time), [school](@sign-language/everyday/school), [colours](@sign-language/everyday/colours)', 'The [phrase player](@sign-language/everyday/practice). Find a class or Deaf event.'],
          ],
        },
      ],
    },
    {
      id: 'method',
      title: 'How to practise',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Sign first, then check', body: 'Read the English word, sign it from memory, then play the animation to check. That is [active recall](@memory/active-recall), and it beats watching.' },
            { title: 'Space it out', body: 'Review new signs the next day, a few days later, then a week later. Make flashcards from any page with the button at the bottom. See [spaced repetition](@memory/spaced-repetition).' },
            { title: 'Use a mirror or a camera', body: 'Film yourself signing a phrase and compare it with the animation: hand shape, place, movement, palm, face.' },
            { title: 'Practise watching', body: 'Use the [fingerspeller](@sign-language/fingerspelling/spelling-words) and real signers on video: watch first, then check. Understanding others is usually the harder half.' },
            { title: 'Sign to someone', body: 'A study partner, family member or classmate makes practice real. Teach them what you learned.' },
          ],
        },
      ],
    },
    {
      id: 'next',
      title: 'Where to go next',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: 'Free lessons', title: 'Lifeprint (ASL University)', body: 'Free ASL lessons and a large dictionary by Deaf educator Dr Bill Vicars. [lifeprint.com](https://www.lifeprint.com)' },
            { tag: 'Dictionary', title: 'Handspeak', body: 'An ASL dictionary with videos, plus articles on grammar and Deaf culture. [handspeak.com](https://www.handspeak.com)' },
            { tag: 'Dictionary', title: 'SignASL', body: 'Video dictionary showing several signers for each word. [signasl.org](https://www.signasl.org)' },
            { tag: 'Singapore', title: 'Singapore Association for the Deaf', body: 'Classes in Singapore Sign Language (SgSL) and Deaf community events. [sadeaf.org.sg](https://sadeaf.org.sg)' },
            { tag: 'Malaysia', title: 'Malaysian Federation of the Deaf', body: 'Information on Bahasa Isyarat Malaysia (BIM) and local classes. [mfd.org.my](https://www.mfd.org.my)' },
            { tag: 'UK', title: 'British Deaf Association', body: 'BSL, which differs from ASL, and how to find classes. [bda.org.uk](https://bda.org.uk)' },
          ],
          cols: 3,
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Learn from Deaf people',
          text: 'Videos and animations are a fine start, but a language lives in its community. Classes taught by Deaf teachers, Deaf clubs, and community events are where you will really learn to sign.',
        },
      ],
    },
    {
      id: 'checklist',
      title: 'Weekly checklist',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Practised on at least five days this week.',
            'Reviewed last week’s signs before learning new ones.',
            'Read at least ten fingerspelled words.',
            'Signed a whole phrase to another person.',
            'Watched a real signer (video or in person) for ten minutes.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin*, 132(3), 354–380.',
    'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17(3), 249–255.',
  ],
  related: ['memory/spaced-repetition', 'memory/active-recall', 'sign-language/everyday/practice'],
}

export default guide
