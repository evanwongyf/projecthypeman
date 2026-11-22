import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hakka tones are the friendliest system on this shelf after Cantonese: six in Sixian, with clear shapes and moderate sandhi. The catch is that the other main Taiwan variety, Hailu, uses nearly the opposite pitches for the same tone categories, so material has to be kept apart. This page gives the Sixian chart, the Hailu comparison, the checked tones and what changes in connected speech.',
  nutshell: [
    '**Sixian has six tones**: rising 24, low level 11, falling 31, high level 55, and two short checked ones.',
    '**Hailu has seven**, and its pitch values are roughly the reverse of Sixian’s for the same categories.',
    '**Checked tones** end in -p, -t, -k and are short; Sixian’s low checked is 2 and high checked is 5.',
    '**Sandhi is light but real**: in Sixian a tone 1 before certain tones lowers, and reduplicated adjectives shift.',
    '**Tone marks in Pha̍k-fa-sṳ** tell you everything: â, à, á, no mark, and the a̍ of the high checked tone.',
  ],
  sections: [
    {
      id: 'chart',
      title: 'The Sixian tones',
      blocks: [
        { t: 'tones', dialect: 'hakka' },
        {
          t: 'speak',
          lang: 'hakka',
          title: 'The four open tones on one syllable',
          note: 'The classic teaching set. Say them in order until the shapes are automatic.',
          items: [
            { hz: '夫', rom: 'fû', en: 'husband, tone 1, rising 24' },
            { hz: '扶', rom: 'fù', en: 'to support, tone 2, low level 11' },
            { hz: '府', rom: 'fú', en: 'government office, tone 3, falling 31' },
            { hz: '富', rom: 'fu', en: 'rich, tone 4, high level 55' },
            { hz: '福', rom: 'fuk', en: 'blessing, low checked, short' },
            { hz: '服', rom: 'fu̍k', en: 'clothing, high checked, short' },
          ],
        },
      ],
    },
    {
      id: 'hailu',
      title: 'Sixian against Hailu',
      blocks: [
        {
          t: 'table',
          head: ['Category', 'Sixian', 'Hailu'],
          rows: [
            ['陰平', '24 (rising)', '53 (falling)'],
            ['陽平', '11 (low level)', '55 (high level)'],
            ['上聲', '31 (falling)', '24 (rising)'],
            ['陰去', '55 (high level)', '11 (low level)'],
            ['陽去', 'merged into 陰去', '33 (mid level), Hailu keeps it separate, giving seven tones'],
            ['陰入', '2 (short low)', '5 (short high)'],
            ['陽入', '5 (short high)', '2 (short low)'],
          ],
          caption: 'Values as commonly taught in Taiwan. The near-reversal is why mixing sources produces an accent from nowhere.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'How to tell which you are hearing',
          text: 'Listen to a speaker say 人 ngìn or 食 sṳ̍t in isolation and compare it against both charts, or simply ask: “四縣定係海陸?” Most speakers know exactly which they speak and are pleased to be asked.',
        },
      ],
    },
    {
      id: 'sandhi',
      title: 'Connected speech',
      blocks: [
        {
          t: 'list',
          items: [
            'Sixian tone 1 (24) lowers before certain tones in a compound, so a word learnt alone can sound different inside a phrase.',
            'Reduplicated adjectives, common in Hakka for intensity, often shift the first syllable’s tone.',
            'Checked syllables keep their shortness in all positions; that is the cue to rely on.',
            'Compared with Hokkien or Teochew, you can get a long way in Hakka by saying citation tones and being understood.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Where to find real audio',
          text: 'Taiwan runs a Hakka proficiency examination and publishes the syllabus, word lists and recordings; Hakka TV broadcasts news and drama. That is the best audio available for any dialect on this shelf except Cantonese, and it is free.',
        },
      ],
    },
  ],
}

export default guide
