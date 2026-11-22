import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Teochew comes from the Chaoshan region of eastern Guangdong, Chaozhou, Shantou (Swatow) and Jieyang, and travelled with traders and migrants to Bangkok, Saigon, Phnom Penh and Singapore. It is Southern Min, like Hokkien, and the two share a large vocabulary; they are still far enough apart that speakers do not understand each other comfortably. This page covers the varieties, the sounds, Peng’im spelling and the first phrases.',
  nutshell: [
    '**Southern Min, like Hokkien**, with many shared words but different vowels and a different tone system.',
    '**Eight tones**, all kept, with heavy sandhi in compounds.',
    '**Peng’im is the romanisation** to use; several older missionary systems also exist.',
    '**Thailand has the largest Teochew diaspora**, and Thai borrowed heavily from it, including everyday food words.',
    '**Spelling varies.** Treat the forms here as the common teaching ones and check with a speaker.',
  ],
  sections: [
    {
      id: 'where',
      title: 'Where Teochew lives',
      blocks: [
        {
          t: 'table',
          head: ['Place', 'Note'],
          rows: [
            ['Chaozhou, Shantou, Jieyang', 'The heartland. Chaozhou and Shantou speech differ noticeably.'],
            ['Bangkok and central Thailand', 'The largest overseas community; Thai has borrowed Teochew food and business vocabulary.'],
            ['Singapore', 'Second-largest Chinese dialect group after Hokkien, strong in food and trade.'],
            ['Cambodia and Vietnam', 'Long-established communities, often trilingual.'],
            ['Hong Kong and Shantou diaspora', 'Smaller but visible, with their own associations.'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'How close is it to Hokkien?',
          text: 'Close enough that 食 is tsia̍h in Hokkien and ziah in Teochew, 水 is tsuí and zui, 人 is lâng and nang. Far enough that a conversation between a Hokkien speaker and a Teochew speaker, each using their own language, breaks down quickly. Think Spanish and Portuguese: lots of shared words, different enough to need learning.',
        },
      ],
    },
    {
      id: 'sounds',
      title: 'Sounds and Peng’im',
      blocks: [
        {
          t: 'table',
          head: ['Peng’im', 'Sounds like', 'Example'],
          rows: [
            ['b, g, z', 'unaspirated, as in Pinyin b, g, z', 'bung1 分, gao2 九'],
            ['bh, gh', 'voiced fricatives, no Mandarin equivalent', 'bhak8 目 (eye)'],
            ['p, t, k, c', 'aspirated', 'pag4 扑, cig4 七'],
            ['-h', 'glottal stop ending, short', 'ziah8 食 (eat)'],
            ['-p, -t, -k', 'unreleased stops', 'bag8 縛'],
            ['nn / ñ', 'nasalised vowel, written differently by different sources', ''],
            ['Tone numbers', '1 to 8 after the syllable', 'ziah8, ho2, le2'],
          ],
        },
        {
          t: 'p',
          text: 'Teochew keeps vowel distinctions that Hokkien merged and merges others that Hokkien keeps, which is why cognates often look close but never identical. If you already speak Hokkien, expect to relearn the vowels rather than translate them.',
        },
      ],
    },
    {
      id: 'tones',
      title: 'The tones',
      blocks: [
        { t: 'tones', dialect: 'teochew' },
      ],
    },
    {
      id: 'first',
      title: 'First phrases',
      blocks: [
        {
          t: 'speak',
          lang: 'teochew',
          title: 'Teochew starter phrases (Peng’im)',
          note: 'No browser voice exists for Teochew. Numbers after syllables are tones; where sources differ on a spelling, the commoner teaching form is used here.',
          items: [
            { hz: '你好', rom: 'le2 ho2', en: 'Hello' },
            { hz: '食飽未', rom: 'ziah8 ba2 bhuê7?', en: 'Have you eaten?' },
            { hz: '食飽了', rom: 'ziah8 ba2 liao2', en: 'Yes, I’ve eaten' },
            { hz: '多謝', rom: 'do1 sia7', en: 'Thank you' },
            { hz: '感謝', rom: 'gam2 sia7', en: 'Thank you (warmer)' },
            { hz: '無要緊', rom: 'bho5 iou3 geng2', en: 'It doesn’t matter' },
            { hz: '是', rom: 'si6', en: 'Yes / it is' },
            { hz: '毋是', rom: 'm6 si6', en: 'No / it is not' },
            { hz: '我', rom: 'ua2', en: 'I, me' },
            { hz: '你', rom: 'le2', en: 'You' },
            { hz: '伊', rom: 'i1', en: 'He / she' },
            { hz: '好食', rom: 'ho2 ziah8', en: 'Tasty' },
            { hz: '食茶', rom: 'ziah8 dê5', en: 'Drink tea' },
            { hz: '請坐', rom: 'ciang2 zo6', en: 'Please sit' },
            { hz: '再會', rom: 'zai3 huê7', en: 'Goodbye' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'An honest note on spelling',
          text: 'Teochew romanisation is less settled than Jyutping or Tâi-lô, and published sources disagree on both spellings and tone numbers for some everyday words. The forms here follow common Peng’im teaching materials, but if a speaker tells you otherwise, they are the better authority.',
        },
      ],
    },
  ],
}

export default guide
