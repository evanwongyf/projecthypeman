import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A Teochew phrasebook for family, food and the market, with Hokkien comparisons so you can see the family resemblance. Teochew food culture, tea, porridge, braises, fish balls, supplies some of the most-used vocabulary in Singapore and Bangkok, and it is a good place to start.',
  nutshell: [
    '**Greet with 食飽未 ziah8 ba2 bhuê7**, the Min greeting, same idea as Hokkien.',
    '**Tea is 茶 dê5** and gongfu tea culture is central to Chaoshan hospitality.',
    '**糜 môi5 is rice porridge**, the everyday meal, and the word behind the Singapore *muay*.',
    '**Compare with Hokkien** as you go: the cognates are close enough to help your memory.',
    '**Spellings vary.** Where Peng’im sources disagree, the more common teaching form is used.',
  ],
  sections: [
    {
      id: 'courtesy',
      title: 'Greetings and family',
      blocks: [
        {
          t: 'speak',
          lang: 'teochew',
          title: 'Courtesy and kinship',
          items: [
            { hz: '你好', rom: 'le2 ho2', en: 'Hello' },
            { hz: '食飽未', rom: 'ziah8 ba2 bhuê7?', en: 'Have you eaten?' },
            { hz: '多謝', rom: 'do1 sia7', en: 'Thank you' },
            { hz: '對唔住', rom: 'dui3 m6 zu6', en: 'Sorry' },
            { hz: '阿公', rom: 'a1 gong1', en: 'Grandfather' },
            { hz: '阿嬤', rom: 'a1 ma2', en: 'Grandmother' },
            { hz: '阿爸', rom: 'a1 bê6', en: 'Father' },
            { hz: '阿娘', rom: 'a1 nio5', en: 'Mother' },
            { hz: '阿兄', rom: 'a1 hian1', en: 'Elder brother' },
            { hz: '阿姐', rom: 'a1 zê2', en: 'Elder sister' },
            { hz: '孥仔', rom: 'nou5 gian2', en: 'Child' },
            { hz: '朋友', rom: 'pêng5 iu2', en: 'Friend' },
          ],
        },
      ],
    },
    {
      id: 'food',
      title: 'Food and tea',
      blocks: [
        {
          t: 'speak',
          lang: 'teochew',
          title: 'Eating and drinking',
          items: [
            { hz: '食飯', rom: 'ziah8 bung7', en: 'To eat a meal' },
            { hz: '食糜', rom: 'ziah8 môi5', en: 'To eat porridge, the everyday Teochew meal' },
            { hz: '好食', rom: 'ho2 ziah8', en: 'Tasty' },
            { hz: '茶', rom: 'dê5', en: 'Tea' },
            { hz: '工夫茶', rom: 'gang1 hu1 dê5', en: 'Gongfu tea, the small-cup ritual' },
            { hz: '水', rom: 'zui2', en: 'Water' },
            { hz: '魚', rom: 'hng5', en: 'Fish' },
            { hz: '肉', rom: 'nek8', en: 'Meat' },
            { hz: '菜', rom: 'cai3', en: 'Vegetables, a dish' },
            { hz: '鹹', rom: 'giam5', en: 'Salty' },
            { hz: '甜', rom: 'ting1', en: 'Sweet' },
            { hz: '飽了', rom: 'ba2 liao2', en: 'I’m full' },
          ],
        },
        {
          t: 'table',
          head: ['Meaning', 'Teochew', 'Hokkien', 'How close'],
          rows: [
            ['eat', 'ziah8', 'tsia̍h', 'Same word, different vowel and initial'],
            ['water', 'zui2', 'tsuí', 'Same word'],
            ['person', 'nang5', 'lâng', 'Same word, n against l'],
            ['tea', 'dê5', 'tê', 'Same word'],
            ['rice (cooked)', 'bung7', 'pn̄g', 'Same word, different vowel'],
            ['good', 'ho2', 'hó', 'Same word'],
          ],
          caption: 'Learning these correspondences turns Hokkien vocabulary into a head start rather than a source of confusion.',
        },
      ],
    },
    {
      id: 'market',
      title: 'Market and everyday',
      blocks: [
        {
          t: 'speak',
          lang: 'teochew',
          title: 'Out and about',
          items: [
            { hz: '幾多錢', rom: 'gui2 zoi7 zin5?', en: 'How much?' },
            { hz: '傷貴', rom: 'sion1 gui3', en: 'Too expensive' },
            { hz: '有無', rom: 'u6 bho5?', en: 'Do you have any?' },
            { hz: '在底', rom: 'do6 di2?', en: 'Where is it?' },
            { hz: '等一下', rom: 'dang2 zêg8 ê7', en: 'Wait a moment' },
            { hz: '我唔知', rom: 'ua2 m6 zai1', en: 'I don’t know' },
            { hz: '我聽無', rom: 'ua2 tian1 bho5', en: 'I don’t understand' },
            { hz: '慢慢講', rom: 'mang7 mang7 gang2', en: 'Speak slowly' },
            { hz: '好', rom: 'ho2', en: 'Good, OK' },
            { hz: '無問題', rom: 'bho5 mung7 tôi5', en: 'No problem' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'If your family says it differently',
          text: 'Chaozhou, Shantou and diaspora Teochew differ in vocabulary and tone, and Peng’im sources are not fully consistent. Where this page and your family disagree, your family is the living language and this page is a reference. Record them.',
        },
      ],
    },
  ],
}

export default guide
