import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A Hakka phrasebook in Sixian Pha̍k-fa-sṳ: greeting, thanking, family, food, directions and the festival language you will hear at a family gathering. Hakka courtesy has its own flavour, thanks is “you were so considerate” rather than “much thanks”, and the food vocabulary is worth knowing even if you learn nothing else.',
  nutshell: [
    '**Greet with 食飽吂 sṳ̍t páu màng?**, have you eaten yet.',
    '**Two thank-yous**: 承蒙你 sṳ̀n-mùng ngì (warm, general) and 恁仔細 an-é-se (for someone’s trouble).',
    '**𠊎 ngài is “I”**, and 你 ngì is “you”: both start with ng-, unlike every other dialect here.',
    '**Hakka food words**, 粄 pán, 擂茶 lùi-chhà, 鹹菜 hàm-chhoi, name dishes you will not find under those names elsewhere.',
    '**Spellings follow Sixian.** Hailu and Meixian differ; your family wins.',
  ],
  sections: [
    {
      id: 'courtesy',
      title: 'Greetings and courtesy',
      blocks: [
        {
          t: 'speak',
          lang: 'hakka',
          title: 'Everyday courtesy',
          items: [
            { hz: '你好', rom: 'ngì hó', en: 'Hello' },
            { hz: '大家好', rom: 'thai-kâ hó', en: 'Hello everyone' },
            { hz: '食飽吂', rom: 'sṳ̍t páu màng?', en: 'Have you eaten?' },
            { hz: '吂食', rom: 'màng sṳ̍t', en: 'Not yet' },
            { hz: '承蒙你', rom: 'sṳ̀n-mùng ngì', en: 'Thank you' },
            { hz: '恁仔細', rom: 'an-é-se', en: 'Thank you for your trouble' },
            { hz: '毋使細義', rom: 'm̀-sṳ́ se-ngi', en: 'You’re welcome, don’t mention it' },
            { hz: '對唔住', rom: 'dui-m̀-chhu', en: 'Sorry' },
            { hz: '請', rom: 'chhiáng', en: 'Please' },
            { hz: '慢慢行', rom: 'man-man hàng', en: 'Take care going (to a guest leaving)' },
            { hz: '再見', rom: 'chai-kien', en: 'Goodbye' },
          ],
        },
      ],
    },
    {
      id: 'family',
      title: 'Family and people',
      blocks: [
        {
          t: 'speak',
          lang: 'hakka',
          title: 'Family terms',
          items: [
            { hz: '阿公', rom: 'â-kûng', en: 'Grandfather' },
            { hz: '阿婆', rom: 'â-phò', en: 'Grandmother' },
            { hz: '阿爸', rom: 'â-pâ', en: 'Father' },
            { hz: '阿姆', rom: 'â-mê', en: 'Mother' },
            { hz: '阿哥', rom: 'â-kô', en: 'Elder brother' },
            { hz: '阿姊', rom: 'â-chí', en: 'Elder sister' },
            { hz: '老弟', rom: 'ló-thâi', en: 'Younger brother' },
            { hz: '老妹', rom: 'ló-moi', en: 'Younger sister' },
            { hz: '細人仔', rom: 'se-ngìn-é', en: 'Child' },
            { hz: '朋友', rom: 'phèn-yû', en: 'Friend' },
            { hz: '客家人', rom: 'hak-kâ-ngìn', en: 'A Hakka person' },
          ],
        },
      ],
    },
    {
      id: 'food',
      title: 'Food',
      blocks: [
        {
          t: 'speak',
          lang: 'hakka',
          title: 'Eating',
          note: 'Hakka cooking is salty, preserved and fatty by reputation: food for people doing hard work far from home.',
          items: [
            { hz: '食飯', rom: 'sṳ̍t fan', en: 'To eat a meal' },
            { hz: '好食', rom: 'hó-sṳ̍t', en: 'Tasty' },
            { hz: '茶', rom: 'chhà', en: 'Tea' },
            { hz: '擂茶', rom: 'lùi-chhà', en: 'Lei cha, the pounded tea-and-herb meal' },
            { hz: '粄', rom: 'pán', en: 'Steamed rice cake, in many forms' },
            { hz: '鹹菜', rom: 'hàm-chhoi', en: 'Pickled mustard greens' },
            { hz: '水', rom: 'súi', en: 'Water' },
            { hz: '飯', rom: 'fan', en: 'Rice (cooked)' },
            { hz: '肉', rom: 'ngiuk', en: 'Meat' },
            { hz: '魚', rom: 'ǹg', en: 'Fish' },
            { hz: '菜', rom: 'chhoi', en: 'Vegetables, a dish' },
            { hz: '食茶', rom: 'sṳ̍t chhà', en: 'Drink tea' },
            { hz: '飽了', rom: 'páu lé', en: 'I’m full' },
          ],
        },
      ],
    },
    {
      id: 'around',
      title: 'Out and about',
      blocks: [
        {
          t: 'speak',
          lang: 'hakka',
          title: 'Getting around and buying',
          items: [
            { hz: '幾多錢', rom: 'kí-tô chhièn?', en: 'How much?' },
            { hz: '太貴了', rom: 'thai kui lé', en: 'Too expensive' },
            { hz: '便宜兜', rom: 'phièn-ngì têu', en: 'A bit cheaper' },
            { hz: '在哪位', rom: 'chhai nai-vi?', en: 'Where is it?' },
            { hz: '仰般去', rom: 'ngióng-pân hi?', en: 'How do I get there?' },
            { hz: '屋下', rom: 'vuk-hâ', en: 'Home, the house' },
            { hz: '出去', rom: 'chhut-hi', en: 'Go out' },
            { hz: '等一下', rom: 'tén yit-ha', en: 'Wait a moment' },
            { hz: '做麼个', rom: 'cho-mak-ke?', en: 'Why? / what are you doing?' },
            { hz: '無閒', rom: 'mò-hàn', en: 'Busy' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Spelling caution',
          text: 'Hakka dictionaries differ in how they write some finals and in which tone they assign to a few common words, and Sixian, Hailu and Meixian genuinely differ. If a form here does not match what you hear at home, follow home, and if you can, record it.',
        },
      ],
    },
  ],
}

export default guide
