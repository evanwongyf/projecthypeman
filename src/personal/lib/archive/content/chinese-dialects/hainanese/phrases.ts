import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A short, deliberately cautious Hainanese phrasebook: greetings, family, food and courtesy. The characters are the reliable part; the spellings are an approximation of Wenchang-style pronunciation, because Hainanese has no standard romanisation and sources disagree. Use this to start a conversation with a speaker, and let them correct you, that correction is the real lesson.',
  nutshell: [
    '**Characters first, spelling second.** Where they disagree, trust the character and the speaker.',
    '**Greet with food**, as in the other Min dialects: have you eaten?',
    '**Food vocabulary survives best**, especially around chicken rice, coffee and the kopitiam.',
    '**No device voice exists**, so the player will read characters in another Chinese language if you press it.',
    '**Record your elders.** For this dialect, that recording may be the best source you will ever have.',
  ],
  sections: [
    {
      id: 'courtesy',
      title: 'Greetings and courtesy',
      blocks: [
        {
          t: 'speak',
          lang: 'hainanese',
          title: 'Hainanese courtesy (approximate spelling)',
          note: 'Spellings are a guide to the sound, not a system. Tones are not marked, because sources do not agree on a numbering for them.',
          items: [
            { hz: '你好', rom: 'li ho', en: 'Hello' },
            { hz: '食未', rom: 'dziak bhue', en: 'Have you eaten?' },
            { hz: '食了', rom: 'dziak liao', en: 'I’ve eaten' },
            { hz: '多謝', rom: 'do dzia', en: 'Thank you' },
            { hz: '無要緊', rom: 'bho iau gin', en: 'It doesn’t matter' },
            { hz: '是', rom: 'si', en: 'Yes / it is' },
            { hz: '毋是', rom: 'm si', en: 'No / it is not' },
            { hz: '請坐', rom: 'chia dzo', en: 'Please sit' },
            { hz: '再會', rom: 'dzai hue', en: 'Goodbye' },
          ],
        },
      ],
    },
    {
      id: 'family',
      title: 'Family',
      blocks: [
        {
          t: 'speak',
          lang: 'hainanese',
          title: 'Family terms',
          items: [
            { hz: '阿公', rom: 'a gong', en: 'Grandfather' },
            { hz: '阿婆', rom: 'a bo', en: 'Grandmother' },
            { hz: '阿爸', rom: 'a ba', en: 'Father' },
            { hz: '阿媽', rom: 'a ma', en: 'Mother' },
            { hz: '阿兄', rom: 'a hia', en: 'Elder brother' },
            { hz: '阿姐', rom: 'a dze', en: 'Elder sister' },
            { hz: '囝', rom: 'kia', en: 'Child' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Kinship terms travel best',
          text: 'Even in families where the language has otherwise been lost, the words for grandparents and parents usually survive. If you can only keep ten Hainanese words, keep these: they are the ones you will use, and the ones that mean the most to the person you use them on.',
        },
      ],
    },
    {
      id: 'food',
      title: 'Food and the coffee shop',
      blocks: [
        {
          t: 'speak',
          lang: 'hainanese',
          title: 'Eating and drinking',
          items: [
            { hz: '食飯', rom: 'dziak bui', en: 'To eat a meal' },
            { hz: '好食', rom: 'ho dziak', en: 'Tasty' },
            { hz: '茶', rom: 'de', en: 'Tea' },
            { hz: '水', rom: 'dzui', en: 'Water' },
            { hz: '雞飯', rom: 'goi bui', en: 'Chicken rice' },
            { hz: '肉', rom: 'nek', en: 'Meat' },
            { hz: '魚', rom: 'hu', en: 'Fish' },
            { hz: '菜', rom: 'chai', en: 'Vegetables, a dish' },
            { hz: '飽了', rom: 'ba liao', en: 'I’m full' },
          ],
        },
        {
          t: 'p',
          text: 'The Southeast Asian coffee-shop words most people know, *kopi*, *kopi-o*, *kopi-c*, are Malay and Hokkien rather than Hainanese, even though Hainanese families ran many of the shops. The Hainanese contribution is in the cooking: chicken rice, the pork chop, the bakery and the catering traditions of colonial households.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Verify before you rely on it',
          text: 'This is the shortest phrase list on the shelf on purpose. Hainanese is under-documented in English, spellings vary between sources, and some entries you find online are reconstructions rather than records. Take these to a speaker, ask them to say each one, record it, and correct the list to match them.',
        },
      ],
    },
  ],
}

export default guide
