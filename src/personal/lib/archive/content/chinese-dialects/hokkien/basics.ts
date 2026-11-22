import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hokkien is Southern Min, from the coast around Quanzhou, Zhangzhou and Xiamen, carried by emigration to Taiwan, Singapore, Penang, Medan and Manila. It has roughly 30 to 40 million speakers depending on how you count the varieties, a long written tradition in the church romanisation POJ, and more surviving media than any dialect here except Cantonese. This page covers which variety you are hearing, the sounds, the shape of the tone system, and the first twenty things worth being able to say.',
  nutshell: [
    '**Varieties differ, and all are valid.** Quanzhou, Zhangzhou, Amoy (a blend), Taiwanese (another blend), Penang (with heavy Malay borrowing) and Singapore Hokkien.',
    '**Seven tones in use**, from eight historical ones, plus a sandhi circle that changes almost every non-final syllable.',
    '**Voiced consonants exist**: b in 米 bí, g in 牛 gû, j in 熱 jua̍h. Mandarin has none of these.',
    '**Nasal vowels** are written nn in Tâi-lô: 三 sann, 圓 înn.',
    '**“Have you eaten?”** 食飽未 tsia̍h-pá--buē is the real greeting. 你好 lí-hó is a translation from Mandarin that older speakers rarely use.',
  ],
  sections: [
    {
      id: 'which',
      title: 'Which Hokkien are you learning?',
      blocks: [
        {
          t: 'table',
          head: ['Variety', 'Where', 'What stands out'],
          rows: [
            ['Quanzhou 泉州', 'Northern Minnan coast', 'Conservative vowels; the source of much Taiwanese and Philippine Hokkien.'],
            ['Zhangzhou 漳州', 'Southern Minnan coast', 'Different vowel set from Quanzhou; also feeds Taiwanese.'],
            ['Amoy 廈門 (Xiamen)', 'Xiamen', 'A blend of the two above; the variety most old dictionaries describe.'],
            ['Taiwanese 台語', 'Taiwan', 'A blend with Japanese loanwords; by far the best supplied with teaching material, drama and song.'],
            ['Penang Hokkien', 'Penang, north Malaysia', 'Zhangzhou-based, heavy Malay borrowing, distinctive intonation. Often written ad-hoc.'],
            ['Singapore Hokkien', 'Singapore', 'Mixed base with Malay and English loans; the source of much Singlish vocabulary.'],
            ['Philippine Hokkien 咱人話', 'Manila', 'Quanzhou-based with Spanish and Tagalog loans.'],
          ],
          caption: 'This shelf teaches the Taiwanese/Amoy standard in Tâi-lô, because that is what dictionaries, courses and recordings use. Your family’s speech may differ in tone values and vocabulary.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Hokkien, Minnan, Taiwanese, Hoklo',
          text: 'These names overlap. 閩南語 Minnan is the linguistic label for the branch; 福建話 Hokkien is what Southeast Asian communities call it; 台語 Taiwanese is the Taiwan variety; Hoklo refers to the people and the speech. If someone insists one of these is “the real name”, they are making a political point rather than a linguistic one.',
        },
      ],
    },
    {
      id: 'sounds',
      title: 'The sounds',
      blocks: [
        {
          t: 'table',
          head: ['Tâi-lô', 'Sounds like', 'Example'],
          rows: [
            ['p / ph', 'unaspirated p / aspirated p', '爸 pa / 拍 phah'],
            ['t / th', 'unaspirated t / aspirated t', '刀 to / 討 thó'],
            ['k / kh', 'unaspirated k / aspirated k', '家 ka / 去 khì'],
            ['ts / tsh', 'ts as in “cats” / the aspirated version', '這 tse / 手 tshiú'],
            ['b, g', 'truly voiced b and g, which Mandarin lacks', '米 bí, 牛 gû'],
            ['j', 'a voiced dz, or l in some varieties', '熱 jua̍h (lua̍h in parts of Taiwan)'],
            ['nn', 'the vowel is nasalised', '三 sann, 圓 înn'],
            ['-h', 'a glottal stop; the syllable is cut off in the throat', '鴨 ah, 食 tsia̍h'],
            ['m, ng alone', 'the nasal is the whole syllable', '毋 m̄, 黃 n̂g'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'POJ or Tâi-lô?',
          text: 'They spell the same language. POJ (Pe̍h-ōe-jī) is the older missionary system and still common in churches and older books; Tâi-lô is the current official Taiwanese standard and is used here. The main swaps: POJ ch/chh = Tâi-lô ts/tsh, POJ oe/oa = Tâi-lô ue/ua, POJ superscript ⁿ = Tâi-lô nn. Tone marks are identical, so you can read either after five minutes.',
        },
      ],
    },
    {
      id: 'tones',
      title: 'The tones at a glance',
      blocks: [
        { t: 'tones', dialect: 'hokkien' },
        {
          t: 'p',
          text: 'Tones 1 and 7 are the pair beginners swap: both are level, 1 high and 7 mid. Tones 4 and 8 are the short ones, ending in -p, -t, -k or -h. The full sandhi system, which changes these in connected speech, has its own page.',
        },
      ],
    },
    {
      id: 'first',
      title: 'The first twenty things to say',
      blocks: [
        {
          t: 'speak',
          lang: 'hokkien',
          title: 'Hokkien starter phrases (Tâi-lô)',
          note: 'Tone marks follow Tâi-lô; a double hyphen marks a neutral-tone ending. Singapore and Penang usage differs in places, noted where it matters.',
          items: [
            { hz: '食飽未', rom: 'tsia̍h-pá--buē?', en: 'Have you eaten?, the normal greeting', note: 'The expected answer is 食飽矣 tsia̍h-pá--ah (yes) or 猶未 iáu-buē (not yet).' },
            { hz: '你好', rom: 'lí-hó', en: 'Hello', note: 'A Mandarin-style greeting; fine with younger people, rare among elders.' },
            { hz: '早安', rom: 'tsá-an', en: 'Good morning', note: 'Formal. 𠢕早 gâu-tsá is the everyday one in Taiwan.' },
            { hz: '多謝', rom: 'to-siā', en: 'Thank you (for something given)' },
            { hz: '感謝', rom: 'kám-siā', en: 'Thank you (warmer, for help)' },
            { hz: '歹勢', rom: 'pháinn-sè', en: 'Sorry / excuse me, also “how embarrassing”' },
            { hz: '無要緊', rom: 'bô-iàu-kín', en: 'Never mind, it’s fine' },
            { hz: '請坐', rom: 'tshiánn tsē', en: 'Please sit' },
            { hz: '食茶', rom: 'tsia̍h tê', en: 'Have some tea', note: 'Hokkien “eats” tea rather than drinking it.' },
            { hz: '好食', rom: 'hó-tsia̍h', en: 'Tasty' },
            { hz: '真好', rom: 'tsin hó', en: 'Really good' },
            { hz: '是', rom: 'sī', en: 'Yes / it is' },
            { hz: '毋是', rom: 'm̄-sī', en: 'No / it is not' },
            { hz: '有', rom: 'ū', en: 'Have / there is, also used as “yes” to a 有無 question' },
            { hz: '無', rom: 'bô', en: 'Don’t have / there isn’t' },
            { hz: '我聽無', rom: 'guá thiann-bô', en: 'I don’t understand', note: 'Literally “I listen, nothing”.' },
            { hz: '你講較慢咧', rom: 'lí kóng khah bān--leh', en: 'Please speak more slowly' },
            { hz: '這是啥物', rom: 'tse sī siánn-mih?', en: 'What is this?' },
            { hz: '幾錢', rom: 'kuí tsînn?', en: 'How much is it?' },
            { hz: '再會', rom: 'tsài-huē', en: 'Goodbye' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Use 食飽未 the way it is meant',
          text: 'It is a greeting, not an invitation or a real enquiry into your diet. Answer 食飽矣 tsia̍h-pá--ah even if you have not eaten, unless you want to be fed, in which case 猶未 iáu-buē will produce food within minutes in most households.',
        },
      ],
    },
  ],
}

export default guide
