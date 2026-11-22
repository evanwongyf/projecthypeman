import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'ASL numbers are made with one hand. Zero to ten each have their own shape, shown animated below; bigger numbers follow a few patterns, so once you know 0 to 10 you can sign almost any number.',
  nutshell: [
    'When counting, **1 to 5** are usually shown with the palm towards you; **6 to 9** face out.',
    '6, 7, 8 and 9 touch the thumb to the little, ring, middle and index finger in turn.',
    '10 is a thumbs-up, shaken.',
    'Most two-digit numbers are just their digits in order: 47 is 4 then 7.',
    'Ages, money and clock times have their own small twists, covered below.',
  ],
  sections: [
    {
      id: 'zero-ten',
      title: 'Zero to ten',
      lead: 'Tap a number, then tap the big picture to play it.',
      blocks: [
        { t: 'sign-tool', tool: 'settings' },
        { t: 'handshapes', set: 'numbers' },
        {
          t: 'callout',
          tone: 'warn',
          title: '3 is not the same as W',
          text: 'ASL 3 is the **thumb, index and middle finger**. Holding up the index, middle and ring fingers (as many people do when counting) is W, which is also 6.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A trick for 6 to 9',
          text: 'Start with an open 5. The thumb touches the little finger for 6 and works its way across: ring finger 7, middle finger 8, index 9.',
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Bigger numbers',
      blocks: [
        {
          t: 'table',
          head: ['Numbers', 'How', 'Example'],
          rows: [
            ['11 to 15', 'Palm towards you; flick the fingers of the number up from the thumb, twice. 11 flicks one finger, 12 two, and so on; 13, 14 and 15 bend the fingers instead.', '12: the V fingers flick up twice'],
            ['16 to 19', 'Start with a 10 (thumbs-up) and twist the hand into 6, 7, 8 or 9.', '17: thumbs-up twisting into 7'],
            ['20', 'The thumb and index finger tap together, like a small G closing.', ''],
            ['21 to 99', 'Sign the two digits one after the other, palm forward, moving the hand slightly to the side for the second.', '47: 4, then 7'],
            ['22, 33, 44…', 'Bounce the same number slightly to the side.', '33: 3, bounced'],
            ['30, 40…', 'The digit, then 0.', '50: 5, then 0'],
            ['100', 'One (or any number), then a C.', '300: 3, then C'],
            ['1,000', '1, then the "thousand" sign: bent fingertips tapping the other palm.', ''],
          ],
          caption: 'There is regional variation, especially for 11 to 19. Copy the signers around you.',
        },
      ],
    },
    {
      id: 'everyday',
      title: 'Numbers in daily life',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Age', body: 'Start the number at the chin and move it out, combining "old" with the number. "I am 8" is ME, then 8 from the chin.' },
            { title: 'Time', body: 'Tap your wrist where a watch would be, then sign the hour: TIME 3 for "three o’clock".' },
            { title: 'Dollars', body: 'For 1 to 9 dollars, sign the number with a twist of the wrist. Larger amounts use the number and then the DOLLAR sign.' },
            { title: 'Cents', body: 'Touch the index finger to the temple, then sign the number: 25 cents is a touch at the temple, then 25.' },
            { title: 'Phone numbers', body: 'Sign the digits in the same groups people say them in, with a pause between groups.' },
            { title: 'Ordinals', body: 'First, second, third: sign the number with a twist of the wrist inwards.' },
          ],
        },
      ],
    },
  ],
  sources: ['Vicars, W. (n.d.). *Numbers*. Lifeprint ASL University. lifeprint.com.', 'Handspeak. (n.d.). *ASL numbers*. handspeak.com.'],
  related: ['sign-language/fingerspelling/alphabet', 'sign-language/everyday/time'],
}

export default guide
