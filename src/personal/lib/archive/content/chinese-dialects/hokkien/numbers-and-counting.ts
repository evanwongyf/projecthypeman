import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hokkien has two sets of numbers, and knowing which to use is most of the battle: a literary set for reading numbers out and for compounds, and a colloquial set for counting actual things. This page covers both, the classifiers that go with them, money, time, dates and age, and the counting habits that trip up Mandarin speakers.',
  nutshell: [
    '**Two words for one and two**: literary it 一 and jī 二, colloquial tsi̍t 一 and nn̄g 兩.',
    '**Counting things uses the colloquial set with a classifier**: 兩个人 nn̄g ê lâng, two people.',
    '**Reading a number aloud uses the literary set**: a phone number, a bus number, a year.',
    '**Money** is 箍 khoo for dollars, 角 kak for ten cents, 占 tsiam for cents in older usage.',
    '**Time** uses 點 tiám for the hour and 分 hun for minutes, with 半 puànn for half past.',
  ],
  sections: [
    {
      id: 'numbers',
      title: 'The numbers',
      blocks: [
        {
          t: 'speak',
          lang: 'hokkien',
          title: 'One to ten, and beyond',
          note: 'Where two forms are given, the first is literary (for reading numbers aloud) and the second colloquial (for counting things).',
          items: [
            { hz: '一', rom: 'it / tsi̍t', en: 'one' },
            { hz: '二 / 兩', rom: 'jī / nn̄g', en: 'two, 兩 nn̄g is used before a classifier' },
            { hz: '三', rom: 'sann', en: 'three' },
            { hz: '四', rom: 'sì', en: 'four' },
            { hz: '五', rom: 'gōo', en: 'five' },
            { hz: '六', rom: 'la̍k', en: 'six' },
            { hz: '七', rom: 'tshit', en: 'seven' },
            { hz: '八', rom: 'peh', en: 'eight' },
            { hz: '九', rom: 'káu', en: 'nine' },
            { hz: '十', rom: 'tsa̍p', en: 'ten' },
            { hz: '十一', rom: 'tsa̍p-it', en: 'eleven' },
            { hz: '二十', rom: 'jī-tsa̍p', en: 'twenty' },
            { hz: '一百', rom: 'tsi̍t-pah', en: 'one hundred' },
            { hz: '一千', rom: 'tsi̍t-tshing', en: 'one thousand' },
            { hz: '一萬', rom: 'tsi̍t-bān', en: 'ten thousand, Chinese counts in units of 10,000' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The 10,000 habit',
          text: 'Chinese numbers group in four digits, not three. 10,000 is 一萬 tsi̍t-bān, 100,000 is 十萬 tsa̍p-bān, and a million is 一百萬 tsi̍t-pah-bān. Converting on the fly from English thousands is the part that stays slow longest, so practise saying prices and populations aloud.',
        },
      ],
    },
    {
      id: 'classifiers',
      title: 'Counting things',
      blocks: [
        {
          t: 'table',
          head: ['Classifier', 'Used for', 'Example'],
          rows: [
            ['个 ê', 'people and the general case', '兩个人 nn̄g ê lâng, two people'],
            ['隻 tsiah', 'animals, and some objects', '一隻狗 tsi̍t tsiah káu, one dog'],
            ['條 tiâu', 'long thin things', '一條魚 tsi̍t tiâu hî, one fish'],
            ['張 tiunn', 'flat things', '一張紙 tsi̍t tiunn tsuá, one sheet of paper'],
            ['碗 uánn', 'bowls of something', '兩碗飯 nn̄g uánn pn̄g, two bowls of rice'],
            ['杯 pue', 'cups of something', '一杯茶 tsi̍t pue tê, one cup of tea'],
            ['台 tâi', 'machines and vehicles', '一台車 tsi̍t tâi tshia, one car'],
            ['本 pún', 'books', '三本冊 sann pún tsheh, three books'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not use 二 jī before a classifier',
          text: 'For “two of something” use 兩 nn̄g: 兩个 nn̄g ê, not 二个. 二 jī is for reading the digit, for ordinals and in compounds like 二月 jī-gue̍h (February). Mandarin has the same split between 二 èr and 两 liǎng, so if you know Mandarin the habit transfers.',
        },
      ],
    },
    {
      id: 'money-time',
      title: 'Money, time, dates and age',
      blocks: [
        {
          t: 'speak',
          lang: 'hokkien',
          title: 'Prices and the clock',
          items: [
            { hz: '幾錢', rom: 'kuí tsînn?', en: 'How much?' },
            { hz: '十箍', rom: 'tsa̍p khoo', en: 'Ten dollars' },
            { hz: '五角', rom: 'gōo kak', en: 'Fifty cents (five ten-cent units)' },
            { hz: '一百五', rom: 'tsi̍t-pah-gōo', en: 'A hundred and fifty' },
            { hz: '幾點', rom: 'kuí tiám?', en: 'What time is it?' },
            { hz: '三點', rom: 'sann tiám', en: 'Three o’clock' },
            { hz: '三點半', rom: 'sann tiám puànn', en: 'Half past three' },
            { hz: '三點十分', rom: 'sann tiám tsa̍p hun', en: 'Ten past three' },
            { hz: '今仔日', rom: 'kin-á-ji̍t', en: 'Today' },
            { hz: '明仔載', rom: 'bîn-á-tsài', en: 'Tomorrow' },
            { hz: '昨昏', rom: 'tsa-hng', en: 'Yesterday' },
            { hz: '禮拜一', rom: 'lé-pài-it', en: 'Monday' },
            { hz: '一月', rom: 'tsi̍t-gue̍h', en: 'January', note: 'Months use the literary numbers: 二月 jī-gue̍h, 十月 tsa̍p-gue̍h.' },
            { hz: '你幾歲', rom: 'lí kuí huè?', en: 'How old are you?' },
            { hz: '我三十歲', rom: 'guá sann-tsa̍p huè', en: 'I am thirty' },
          ],
        },
        {
          t: 'list',
          items: [
            'Days of the week are 禮拜 lé-pài plus a literary number; Sunday is 禮拜日 lé-pài-ji̍t.',
            'Prices often drop the final unit: 一百五 tsi̍t-pah-gōo means 150, not 105.',
            'Ages of children are often given with 歲 huè and of adults with the number alone in casual speech.',
            'Phone numbers and bus numbers are read digit by digit with the literary set, and 1 is usually read as it.',
          ],
        },
      ],
    },
  ],
}

export default guide
