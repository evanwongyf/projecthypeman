import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cantonese is the Yue language of Guangzhou, Hong Kong and Macau, and the one dialect on this shelf with a full public life: news, film, song, government, and a written colloquial form you can read in a newspaper. It also has the best tooling for learners, including voices on most phones. This page covers Jyutping, the sound system, the six tones in outline, written Cantonese versus written Chinese, and your first twenty phrases.',
  nutshell: [
    '**Six tones**, three upper and three lower, plus three checked tones on syllables ending -p, -t, -k.',
    '**Jyutping is the romanisation to learn.** Yale appears in older books; both are readable in an evening.',
    '**Written Cantonese is a real written language**: 係, 唔, 嘅, 咗, 喺, 睇, 嘢. Standard written Chinese is a different register that Cantonese speakers read aloud in Cantonese.',
    '**唔該 m4 goi1 and 多謝 do1 ze6 are both “thank you”** and are not interchangeable.',
    '**Most devices have a Cantonese voice**, so the read-aloud buttons on this shelf genuinely work for this dialect.',
  ],
  sections: [
    {
      id: 'jyutping',
      title: 'Jyutping in ten minutes',
      blocks: [
        {
          t: 'table',
          head: ['Jyutping', 'Sounds like', 'Example'],
          rows: [
            ['z / c / s', 'like Pinyin z/c/s but used for both the j- and z- series', '姐 ze2, 茶 caa4, 食 sik6'],
            ['j', 'English y', '一 jat1, 人 jan4'],
            ['gw / kw', 'gw as in “Gwen”, kw as in “quick”', '國 gwok3, 規 kwai1'],
            ['aa vs a', 'long aa against short a, a real contrast', '三 saam1 against 心 sam1'],
            ['eo / oe', 'rounded central vowels, like French œ', '香 hoeng1, 出 ceot1'],
            ['yu', 'like German ü', '書 syu1'],
            ['-p -t -k', 'unreleased final stops', '十 sap6, 一 jat1, 六 luk6'],
            ['-m', 'a full m ending', '心 sam1'],
            ['m / ng alone', 'the nasal is the whole syllable', '唔 m4, 五 ng5'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Jyutping against Yale',
          text: 'Yale writes tones with marks and the letters differ (Yale j where Jyutping has z, Yale y where Jyutping has j). Jyutping is the standard in modern dictionaries, input methods and apps, so learn it first; you will still be able to read a Yale textbook with a conversion table beside you.',
        },
      ],
    },
    {
      id: 'tones',
      title: 'The six tones',
      blocks: [
        { t: 'tones', dialect: 'cantonese' },
        {
          t: 'p',
          text: 'Cantonese barely uses tone sandhi, which makes it the friendliest of these five for a beginner: the tone you learn with a word is the tone you say. There is a “changed tone” that raises some syllables to tone 2 in nicknames and certain nouns, but it is a small list rather than a system.',
        },
      ],
    },
    {
      id: 'written',
      title: 'Written Cantonese versus written Chinese',
      blocks: [
        {
          t: 'table',
          head: ['Meaning', 'Standard written Chinese', 'Written Cantonese', 'Cantonese reading'],
          rows: [
            ['to be', '是', '係', 'hai6'],
            ['not', '不', '唔', 'm4'],
            ['have not', '沒有', '冇', 'mou5'],
            ['’s (possessive)', '的', '嘅', 'ge3'],
            ['at, in', '在', '喺', 'hai2'],
            ['to look, watch', '看', '睇', 'tai2'],
            ['thing', '東西', '嘢', 'je5'],
            ['completed action', '了', '咗', 'zo2'],
            ['they', '他們', '佢哋', 'keoi5 dei6'],
          ],
          caption: 'Newspapers mix the two registers: hard news in standard written Chinese, columns and entertainment in written Cantonese.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Reading aloud is translation',
          text: 'When a Hong Kong newsreader reads standard written Chinese aloud, they pronounce every character in Cantonese but the grammar on the page is not spoken Cantonese. Native speakers switch between the two without noticing. As a learner, learn the spoken forms first and treat the written-Chinese register as a second step.',
        },
      ],
    },
    {
      id: 'first',
      title: 'The first twenty phrases',
      blocks: [
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'Cantonese starter phrases (Jyutping)',
          note: 'Most devices have a Cantonese voice, so these buttons should really speak Cantonese. If the warning above the table appears, your device is falling back to Mandarin.',
          items: [
            { hz: '你好', rom: 'nei5 hou2', en: 'Hello' },
            { hz: '早晨', rom: 'zou2 san4', en: 'Good morning' },
            { hz: '你食咗飯未呀', rom: 'nei5 sik6 zo2 faan6 mei6 aa3', en: 'Have you eaten? (a friendly greeting)' },
            { hz: '唔該', rom: 'm4 goi1', en: 'Thank you (for a service) / excuse me' },
            { hz: '多謝', rom: 'do1 ze6', en: 'Thank you (for a gift or compliment)' },
            { hz: '對唔住', rom: 'deoi3 m4 zyu6', en: 'I’m sorry (a real apology)' },
            { hz: '唔好意思', rom: 'm4 hou2 ji3 si1', en: 'Excuse me / sorry (mild)' },
            { hz: '冇問題', rom: 'mou5 man6 tai4', en: 'No problem' },
            { hz: '係', rom: 'hai6', en: 'Yes / it is' },
            { hz: '唔係', rom: 'm4 hai6', en: 'No / it is not' },
            { hz: '我唔明', rom: 'ngo5 m4 ming4', en: 'I don’t understand' },
            { hz: '請你講慢啲', rom: 'cing2 nei5 gong2 maan6 di1', en: 'Please speak more slowly' },
            { hz: '你識唔識講英文', rom: 'nei5 sik1 m4 sik1 gong2 jing1 man2?', en: 'Do you speak English?' },
            { hz: '呢個係乜嘢', rom: 'ni1 go3 hai6 mat1 je5?', en: 'What is this?' },
            { hz: '幾多錢', rom: 'gei2 do1 cin2?', en: 'How much is it?' },
            { hz: '請問', rom: 'cing2 man6', en: 'Excuse me, may I ask…' },
            { hz: '洗手間喺邊度', rom: 'sai2 sau2 gaan1 hai2 bin1 dou6?', en: 'Where is the toilet?' },
            { hz: '我叫…', rom: 'ngo5 giu3 …', en: 'My name is …' },
            { hz: '好好食', rom: 'hou2 hou2 sik6', en: 'Very tasty' },
            { hz: '再見', rom: 'zoi3 gin3', en: 'Goodbye', note: 'Casually, 拜拜 baai1 baai3.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: '唔該 and 多謝 are not the same',
          text: 'Use **唔該 m4 goi1** when someone does something for you: passes the soy sauce, holds a door, brings your food. Use **多謝 do1 ze6** when you receive something: a gift, a red packet, a compliment. Getting this backwards is the most common learner slip in Hong Kong, and locals notice it instantly.',
        },
      ],
    },
  ],
}

export default guide
