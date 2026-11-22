import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Teochew keeps all eight historical tones, which sounds daunting, and then changes most of them whenever two syllables sit together, which sounds worse. In practice the fix is simple: learn words as whole melodies rather than building them from citation tones. This page gives the chart, explains the sandhi, and shows why Teochew tone numbers cannot be read across from Hokkien ones.',
  nutshell: [
    '**Eight tones**, including two short checked ones.',
    '**Sandhi is pervasive**: in a two-syllable word the first syllable almost always changes.',
    '**The last syllable usually keeps its citation tone**, as in Hokkien.',
    '**Tone numbers do not transfer from Hokkien.** Teochew 1 is a mid level; Hokkien 1 is high.',
    '**Learn compounds whole.** Dictionaries give citation tones; speech gives melodies.',
  ],
  sections: [
    {
      id: 'chart',
      title: 'The eight tones',
      blocks: [
        { t: 'tones', dialect: 'teochew' },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Same numbers, different pitches',
          text: 'Hokkien tone 1 is high level (55); Teochew tone 1 is mid level (33). Hokkien tone 5 rises; Teochew tone 5 is high level. The numbering follows the historical categories 陰平, 陽平 and so on, not the pitches. If you know Hokkien, read the chart rather than assuming.',
        },
      ],
    },
    {
      id: 'sandhi',
      title: 'Sandhi: why words sound different from their parts',
      blocks: [
        {
          t: 'p',
          text: 'In Teochew, the non-final syllables of a phrase shift tone according to regular patterns, and the shifts are extensive enough that a two-syllable word can sound as though neither syllable is what the dictionary promised. Native speakers apply this automatically and are generally unaware of it until a learner asks.',
        },
        {
          t: 'list',
          items: [
            'The last syllable of a phrase is the reliable one: it keeps its citation tone.',
            'Checked tones change too, and the glottal stop can weaken in non-final position.',
            'Published sandhi tables differ between Chaozhou and Shantou descriptions.',
            'Practical rule for learners: never assemble a compound from two dictionary entries. Learn it as heard.',
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Collect whole phrases', body: 'Record or note multi-syllable words as units: 食飽未, 多謝你, 好食. Say them as tunes.' },
            { title: 'Compare the tune to the citation tones', body: 'Only afterwards, look up the citation tones and see what changed. This builds intuition without paralysis.' },
            { title: 'Keep the final syllable honest', body: 'When you are unsure, at least get the last syllable right; it carries the most information.' },
            { title: 'Ask a speaker to say it alone and in a sentence', body: 'The contrast is the lesson. Most speakers find this request interesting rather than odd.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      blocks: [
        {
          t: 'speak',
          lang: 'teochew',
          title: 'Hear the citation tones',
          note: 'Said alone, each of these has its dictionary tone. In a sentence, the non-final ones will shift.',
          items: [
            { hz: '分', rom: 'bung1', en: 'to divide, tone 1, mid level' },
            { hz: '粉', rom: 'bung2', en: 'powder, tone 2, high falling' },
            { hz: '訓', rom: 'bung3', en: 'to instruct, tone 3, dipping' },
            { hz: '扑', rom: 'pag4', en: 'to hit, tone 4, short and low' },
            { hz: '雲', rom: 'hung5', en: 'cloud, tone 5, high level' },
            { hz: '混', rom: 'hung6', en: 'to mix, tone 6, rising' },
            { hz: '份', rom: 'hung7', en: 'a share, tone 7, low level' },
            { hz: '縛', rom: 'bag8', en: 'to tie, tone 8, short and high' },
          ],
        },
      ],
    },
  ],
}

export default guide
