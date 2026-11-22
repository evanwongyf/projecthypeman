import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every one of these dialects has sounds Mandarin does not, and every one has at least one romanisation system competing with two others. This page covers the sounds first, final stops, nasal vowels, the m and ng that work as whole syllables, Hainanese implosives, and then teaches you to read Jyutping, Tâi-lô, POJ, Pha̍k-fa-sṳ and Peng’im well enough to use a dictionary without guessing.',
  nutshell: [
    '**Final -p, -t, -k are real consonants** that stop the syllable dead. Mandarin lost them; the southern dialects kept them.',
    '**m and ng can be whole syllables**: Cantonese 唔 m4 “not”, 五 ng5 “five”; Hokkien 毋 m̄, 黃 n̂g.',
    '**Hokkien has nasal vowels**, written with a trailing nn in Tâi-lô (sann 三) or a superscript n in POJ (saⁿ).',
    '**Hainanese has implosives**: the b and d are made by pulling air inward, a sound no other dialect here uses.',
    '**One romanisation per dialect is enough**: Jyutping, Tâi-lô, Pha̍k-fa-sṳ, Peng’im. Learn to read it, and every dictionary opens.',
  ],
  sections: [
    {
      id: 'stops',
      title: 'The final stops, and why they matter',
      blocks: [
        {
          t: 'p',
          text: 'Say English “stop” and hold the final p without releasing it. That unreleased p is exactly the Cantonese final -p in 十 sap6 or the Hokkien -p in 十 tsa̍p. The syllable is cut short; the sound is never released into a vowel. Mandarin has no such syllables at all, which is why 十 is shí: an open syllable with nothing to stop it.',
        },
        {
          t: 'table',
          head: ['Ending', 'Cantonese example', 'Hokkien example', 'What it feels like'],
          rows: [
            ['-p', '十 sap6 (ten)', '十 tsa̍p', 'Lips close and stay closed.'],
            ['-t', '一 jat1 (one)', '一 it', 'Tongue tip on the ridge, stays there.'],
            ['-k', '六 luk6 (six)', '六 la̍k', 'Back of tongue against the soft palate, stays there.'],
            ['-h (Hokkien only)', '-', '鴨 ah (duck)', 'A glottal catch: the throat closes. Written -h in Tâi-lô and POJ.'],
            ['-m', '心 sam1 (heart)', '心 sim', 'A full m ending. Mandarin lost this too.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Do not release the stop',
          text: 'English speakers want to add a tiny vowel after the final consonant: *sap-uh*. Practise by saying the syllable and then freezing your mouth in the closing position. Holding it silently for a beat is the right feeling.',
        },
      ],
    },
    {
      id: 'sounds',
      title: 'Sounds that surprise Mandarin speakers',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Syllabic m and ng', body: 'Cantonese 唔 m4 “not” and 五 ng5 “five” have no vowel at all; the nasal itself is the syllable. Hokkien has 毋 m̄ “not” and 黃 n̂g “yellow”. Hum them.', tag: 'Cantonese, Hokkien' },
            { title: 'Nasal vowels', body: 'Hokkien 三 sann, 圓 înn: the vowel is said through the nose with no final n. In Tâi-lô it is written nn, in POJ a superscript ⁿ.', tag: 'Hokkien, Teochew' },
            { title: 'Voiced b, g, j', body: 'Hokkien and Teochew have real voiced consonants: 米 bí, 牛 gû, 熱 jua̍h. Mandarin’s b and g are voiceless and unaspirated; these are not.', tag: 'Min' },
            { title: 'Implosive b and d', body: 'Hainanese pulls air inwards to make its b and d, giving them a hollow, popping quality. No other dialect here has this.', tag: 'Hainanese' },
            { title: 'Long and short vowel pairs', body: 'Cantonese distinguishes aa from a: 三 saam1 against 心 sam1. Getting this wrong is as bad as a tone error.', tag: 'Cantonese' },
            { title: 'No retroflex', body: 'None of these five has Mandarin’s zh, ch, sh, r. If you are coming from Mandarin, flatten them.', tag: 'all five' },
          ],
        },
      ],
    },
    {
      id: 'systems',
      title: 'The romanisations, one per dialect',
      blocks: [
        {
          t: 'table',
          head: ['Dialect', 'Use this', 'Also seen', 'Tone marking'],
          rows: [
            ['Cantonese', 'Jyutping 粵拼', 'Yale (used in older textbooks), Sidney Lau, ad-hoc Hong Kong spellings', 'A number after the syllable: si1 … si6'],
            ['Hokkien', 'Tâi-lô 臺羅', 'POJ / Pe̍h-ōe-jī (the missionary church spelling, still widely used)', 'Marks over the vowel: á à â ā a̍'],
            ['Hakka', 'Pha̍k-fa-sṳ (PFS)', 'Taiwanese Hakka Romanization System, Hanyu-Pinyin-style schemes', 'Marks over the vowel: â à á a̍'],
            ['Teochew', 'Peng’im 潮州話拼音', 'Several older missionary systems', 'A number after the syllable: 1 to 8'],
            ['Hainanese', 'No standard', 'Ad-hoc spellings, IPA in academic work', 'Usually none, which is part of the problem'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Jyutping in one sitting', body: 'Initials are close to Pinyin with no retroflex: z, c, s are like Pinyin j/q/x and z/c/s combined; j is English y, and the letter for the w sound is w. Finals to watch: aa (long) against a (short), eo and oe, and the -p, -t, -k endings. Tones are the numbers 1-6.' },
            { title: 'Tâi-lô in one sitting', body: 'ts and tsh are the “ts” sounds; j is a voiced z or dz; nn means a nasal vowel; a final h is a glottal stop. Tone marks: no mark = 1, á = 2, à = 3, â = 5, ā = 7, a̍ = 8; a plain stop with no mark = 4.' },
            { title: 'POJ, if you read church materials', body: 'Same language, older spelling: POJ ch/chh where Tâi-lô has ts/tsh, POJ oe/oa where Tâi-lô has ue/ua, and a superscript ⁿ where Tâi-lô writes nn. The tone marks are the same.' },
            { title: 'Pha̍k-fa-sṳ', body: 'Built for Hakka by missionaries: ṳ is a central vowel, v is a real v sound, and the tone marks work like POJ’s.' },
            { title: 'Peng’im', body: 'Teochew’s official scheme: b, g, z are voiced or unaspirated, bh and gh are the voiced fricatives, and tones are the numbers 1-8 after the syllable.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Street spellings are not systems',
          text: 'Names on shopfronts and in surnames, Tan, Teo, Chan, Ng, Ooi, Khoo, Lim, come from a century of improvised transcription by clerks in different colonies. Tan, Chen, Chan and Tân are the same surname 陳 in Hokkien, Mandarin, Cantonese and Tâi-lô. These spellings are historical evidence, not a pronunciation guide.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practising the sounds',
      blocks: [
        { t: 'tones', dialect: 'cantonese' },
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'Hearing the final stops and the long-short vowel pair',
          note: 'Cantonese is the one dialect here most devices can really say, so use it to train your ear for the endings. The contrast in the last two rows is vowel length, not tone.',
          items: [
            { hz: '十', rom: 'sap6', en: 'ten, ends with the lips closed' },
            { hz: '一', rom: 'jat1', en: 'one, ends with the tongue tip stopped' },
            { hz: '六', rom: 'luk6', en: 'six, ends at the back of the mouth' },
            { hz: '心', rom: 'sam1', en: 'heart, a full m ending' },
            { hz: '三', rom: 'saam1', en: 'three, long aa' },
            { hz: '心', rom: 'sam1', en: 'heart, short a, same tone' },
            { hz: '唔', rom: 'm4', en: 'not, a syllable with no vowel at all' },
            { hz: '五', rom: 'ng5', en: 'five, a hummed ng as the whole syllable' },
          ],
        },
      ],
    },
  ],
}

export default guide
