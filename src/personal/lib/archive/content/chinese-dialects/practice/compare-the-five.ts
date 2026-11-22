import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The fastest way to feel how these languages relate is to line up the same words in all five and say them in a row. Hokkien, Teochew and Hainanese will often rhyme with each other; Cantonese and Hakka will go their own way; and some words, tea, eat, water, are recognisably the same across all of them. This page puts the core vocabulary side by side, with the audio tools for the two dialects your device can actually speak.',
  nutshell: [
    '**Min sticks together**: Hokkien, Teochew and Hainanese share vocabulary and sound patterns.',
    '**Cantonese and Hakka often agree with each other** against Min, and both are closer to the Middle Chinese written tradition.',
    '**The numbers are the cleanest comparison**, because nobody borrows numbers.',
    '**Where a word is identical across all five**, it is usually old and basic; where it differs wildly, suspect a later borrowing or a local coinage.',
    '**Say the rows aloud.** The pattern is audible long before it is explainable.',
  ],
  sections: [
    {
      id: 'numbers',
      title: 'One to ten',
      blocks: [
        {
          t: 'table',
          head: ['', 'Hokkien', 'Teochew', 'Hainanese (approx.)', 'Cantonese', 'Hakka'],
          rows: [
            ['1', 'it / tsi̍t', 'ig4 / zêg8', 'zit', 'jat1', 'yit'],
            ['2', 'jī / nn̄g', 'no6', 'dzi', 'ji6', 'ngi'],
            ['3', 'sann', 'san1', 'ta', 'saam1', 'sâm'],
            ['4', 'sì', 'si3', 'ti', 'sei3', 'si'],
            ['5', 'gōo', 'ngou6', 'ngo', 'ng5', 'ńg'],
            ['6', 'la̍k', 'lag8', 'lak', 'luk6', 'liuk'],
            ['7', 'tshit', 'cig4', 'sat', 'cat1', 'chhit'],
            ['8', 'peh', 'boih4', 'boi', 'baat3', 'pat'],
            ['9', 'káu', 'gao2', 'gau', 'gau2', 'kiú'],
            ['10', 'tsa̍p', 'zab8', 'dzap', 'sap6', 'sṳ̍p'],
          ],
          caption: 'Hainanese forms are approximate: there is no standard spelling, and values differ by town. Notice how Hainanese “ta” for three reflects the s → t shift described on its basics page.',
        },
      ],
    },
    {
      id: 'core',
      title: 'Core words',
      blocks: [
        {
          t: 'table',
          head: ['Meaning', 'Hokkien', 'Teochew', 'Hainanese (approx.)', 'Cantonese', 'Hakka'],
          rows: [
            ['eat', 'tsia̍h', 'ziah8', 'dziak', 'sik6', 'sṳ̍t'],
            ['water', 'tsuí', 'zui2', 'dzui', 'seoi2', 'súi'],
            ['person', 'lâng', 'nang5', 'nang', 'jan4', 'ngìn'],
            ['tea', 'tê', 'dê5', 'de', 'caa4', 'chhà'],
            ['rice (cooked)', 'pn̄g', 'bung7', 'bui', 'faan6', 'fan'],
            ['good', 'hó', 'ho2', 'ho', 'hou2', 'hó'],
            ['I', 'guá', 'ua2', 'gua', 'ngo5', 'ngài'],
            ['you', 'lí', 'le2', 'li', 'nei5', 'ngì'],
            ['house', 'tshù', 'cu3', 'chu', 'uk1', 'vuk'],
            ['big', 'tuā', 'dua7', 'dua', 'daai6', 'thai'],
          ],
          caption: 'Read down each column and the family patterns appear: Min in the first three columns, then Cantonese and Hakka.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The “I” row is the giveaway',
          text: 'Hakka’s ngài, Cantonese’s ngo5, Min’s guá / ua2. If you hear someone say ngài, you are listening to Hakka, full stop. It is the fastest dialect identification trick there is.',
        },
      ],
    },
    {
      id: 'greetings',
      title: 'The same greeting, five ways',
      blocks: [
        {
          t: 'table',
          head: ['Dialect', '“Have you eaten?”', '“Thank you”', '“Sorry”'],
          rows: [
            ['Hokkien', '食飽未 tsia̍h-pá--buē', '多謝 to-siā', '歹勢 pháinn-sè'],
            ['Teochew', '食飽未 ziah8 ba2 bhuê7', '多謝 do1 sia7', '對唔住 dui3 m6 zu6'],
            ['Hainanese', '食未 dziak bhue (approx.)', '多謝 do dzia (approx.)', '-'],
            ['Cantonese', '食咗飯未 sik6 zo2 faan6 mei6', '唔該 m4 goi1 / 多謝 do1 ze6', '對唔住 deoi3 m4 zyu6'],
            ['Hakka', '食飽吂 sṳ̍t páu màng', '承蒙你 sṳ̀n-mùng ngì', '對唔住 dui-m̀-chhu'],
          ],
          caption: 'All five greet with food, which is not a coincidence: the phrase is a calque that spread across southern China.',
        },
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'Hear the Cantonese row',
          note: 'Cantonese is the dialect your device is most likely to speak properly, so use it as the anchor and compare the other rows by eye and by your own voice.',
          items: [
            { hz: '食咗飯未', rom: 'sik6 zo2 faan6 mei6', en: 'Have you eaten?' },
            { hz: '多謝', rom: 'do1 ze6', en: 'Thank you (for a gift)' },
            { hz: '唔該', rom: 'm4 goi1', en: 'Thank you (for a service)' },
            { hz: '對唔住', rom: 'deoi3 m4 zyu6', en: 'Sorry' },
            { hz: '一二三四五', rom: 'jat1 ji6 saam1 sei3 ng5', en: 'One to five' },
            { hz: '六七八九十', rom: 'luk6 cat1 baat3 gau2 sap6', en: 'Six to ten' },
          ],
        },
        {
          t: 'speak',
          lang: 'hokkien',
          title: 'And the Hokkien row',
          note: 'No device has a Hokkien voice, so read these yourself against the Cantonese audio above and listen for the Min pattern.',
          items: [
            { hz: '食飽未', rom: 'tsia̍h-pá--buē', en: 'Have you eaten?' },
            { hz: '多謝', rom: 'to-siā', en: 'Thank you' },
            { hz: '歹勢', rom: 'pháinn-sè', en: 'Sorry' },
            { hz: '一二三四五', rom: 'it jī sann sì gōo', en: 'One to five' },
            { hz: '六七八九十', rom: 'la̍k tshit peh káu tsa̍p', en: 'Six to ten' },
          ],
        },
      ],
    },
  ],
}

export default guide
