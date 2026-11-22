import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hakka is the language of a people defined by movement: 客家 means “guest families”, and Hakka communities settled across Guangdong, Fujian, Jiangxi, Taiwan, Sabah, Calcutta, Mauritius and the Caribbean. The language is conservative, keeping final stops and a clean six-tone system, and it is the one here where Taiwan has done the most organised preservation work. This page covers the main varieties, the sound system, Pha̍k-fa-sṳ spelling and the first phrases.',
  nutshell: [
    '**Sixian 四縣 and Hailu 海陸 are the two Taiwan varieties** taught most; Meixian 梅縣 is the mainland prestige form.',
    '**Six tones in Sixian**, four open and two short checked ones.',
    '**Distinctive sounds**: a real v (vuk 屋, house), the central vowel ṳ, and syllables ending -p, -t, -k.',
    '**Thanks has two common forms**: 承蒙你 sṳ̀n-mùng ngì and 恁仔細 an-é-se, the second literally “so considerate”.',
    '**Taiwan’s Hakka Affairs Council publishes dictionaries, exams and recordings**, which makes real audio easier to find than for Teochew or Hainanese.',
  ],
  sections: [
    {
      id: 'varieties',
      title: 'Which Hakka',
      blocks: [
        {
          t: 'table',
          head: ['Variety', 'Where', 'Notes'],
          rows: [
            ['Sixian 四縣', 'Taoyuan, Miaoli, Kaohsiung (Taiwan)', 'The most taught variety in Taiwan; six tones. This page follows it.'],
            ['Hailu 海陸', 'Hsinchu (Taiwan)', 'Seven tones, and its pitches are close to a mirror image of Sixian’s, which confuses learners who mix sources.'],
            ['Meixian 梅縣', 'Meizhou, Guangdong', 'The mainland prestige form, and the basis of most older descriptions.'],
            ['Dabu, Raoping, Zhao’an', 'Taiwan and Guangdong', 'Smaller varieties, some endangered.'],
            ['Sabah and overseas Hakka', 'Sabah, Calcutta, Mauritius', 'Often Meixian-derived with local borrowings.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not mix Sixian and Hailu material',
          text: 'Their tone values differ so much that learning a word from a Sixian source and a second word from a Hailu source will give you an accent that exists nowhere. Pick one variety, ideally the one your family speaks, and stay in it.',
        },
      ],
    },
    {
      id: 'sounds',
      title: 'Sounds and Pha̍k-fa-sṳ',
      blocks: [
        {
          t: 'table',
          head: ['PFS', 'Sounds like', 'Example'],
          rows: [
            ['p / ph, t / th, k / kh', 'unaspirated and aspirated pairs', 'pâ 爸, phâ 怕'],
            ['ch / chh', 'ts and its aspirated partner', 'chhà 茶 (tea)'],
            ['v', 'a real v, unlike Mandarin', 'vuk 屋 (house)'],
            ['ng-', 'ng at the start of a syllable', 'ngì 你 (you), ngìn 人 (person)'],
            ['ṳ', 'a central vowel, tongue mid and flat', 'sṳ̍t 食 (eat)'],
            ['-p, -t, -k', 'unreleased final stops', 'fuk 福, sṳ̍t 食'],
            ['Tone marks', 'â = 1, à = 2, á = 3, no mark = 4, a̍ = high checked', 'fû 夫, fù 扶, fú 府, fu 富'],
          ],
        },
        {
          t: 'p',
          text: 'Pha̍k-fa-sṳ was built by missionaries on the same principles as Hokkien’s POJ, so if you already read POJ or Tâi-lô the shapes will feel familiar. Taiwan also has an official Hakka romanisation closer to Pinyin, which you will meet in school materials.',
        },
      ],
    },
    {
      id: 'tones',
      title: 'The tones',
      blocks: [
        { t: 'tones', dialect: 'hakka' },
      ],
    },
    {
      id: 'first',
      title: 'First phrases',
      blocks: [
        {
          t: 'speak',
          lang: 'hakka',
          title: 'Hakka starter phrases (Sixian, Pha̍k-fa-sṳ)',
          note: 'No browser has a Hakka voice, so these buttons will read the characters in another language. Use the spellings and the tone chart, and find recordings from Taiwan’s Hakka Affairs Council for real audio.',
          items: [
            { hz: '你好', rom: 'ngì hó', en: 'Hello' },
            { hz: '食飽吂', rom: 'sṳ̍t páu màng?', en: 'Have you eaten? (the everyday greeting)' },
            { hz: '食飽了', rom: 'sṳ̍t páu lé', en: 'Yes, I’ve eaten' },
            { hz: '承蒙你', rom: 'sṳ̀n-mùng ngì', en: 'Thank you' },
            { hz: '恁仔細', rom: 'an-é-se', en: 'Thank you (literally “so considerate of you”)' },
            { hz: '對唔住', rom: 'dui-m̀-chhu', en: 'Sorry' },
            { hz: '係', rom: 'he', en: 'Yes / it is' },
            { hz: '唔係', rom: 'm̀ he', en: 'No / it is not' },
            { hz: '𠊎', rom: 'ngài', en: 'I, me, the famously Hakka pronoun' },
            { hz: '你', rom: 'ngì', en: 'You' },
            { hz: '佢', rom: 'kì', en: 'He / she' },
            { hz: '𠊎聽毋識', rom: 'ngài thâng m̀ sṳt', en: 'I don’t understand' },
            { hz: '請講慢兜', rom: 'chhiáng kóng man-têu', en: 'Please speak more slowly' },
            { hz: '幾多錢', rom: 'kí-tô chhièn?', en: 'How much?' },
            { hz: '慢慢行', rom: 'man-man hàng', en: 'Take care on your way' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The pronoun that gives it away',
          text: '𠊎 ngài for “I” is the single most recognisable Hakka word. Mandarin has 我 wǒ, Cantonese ngo5, Hokkien guá; Hakka’s ngài stands out immediately, and the character 𠊎 was created for it.',
        },
      ],
    },
  ],
}

export default guide
