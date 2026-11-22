// Tone systems for the Chinese dialects on this shelf, written in Chao tone letters: a pitch
// scale from 1 (lowest) to 5 (highest), so "24" means "start low-mid and rise".
//
// Honest caveats, because tone values are the part people get wrong most often:
// - Values differ by town, by generation and by source. The numbers here are the ones most
//   commonly taught for the variety named in `basis`; your grandmother may differ, and she is
//   not wrong.
// - Checked (entering) tones end in -p, -t, -k or a glottal stop and are short; their pitch
//   matters less than their abruptness.
// - Citation tones are what a syllable does on its own. In running speech most of these
//   dialects change tone (sandhi), which is covered on the tone guides.

import type { Dialect } from './tts'

export type Tone = {
  /** The number used by the dialect's own romanisation. */
  n: string
  /** Traditional name, e.g. 陰平. */
  name: string
  /** Chao contour digits, e.g. "55" or "213". */
  contour: string
  /** Pitch points 1-5 to draw. */
  shape: number[]
  checked?: boolean
  hz?: string
  rom?: string
  gloss?: string
}

export type ToneSet = {
  dialect: Dialect
  title: string
  basis: string
  count: string
  tones: Tone[]
  notes: string[]
}

export const TONE_SETS: Record<string, ToneSet> = {
  cantonese: {
    dialect: 'cantonese',
    title: 'Cantonese: six tones',
    basis: 'Hong Kong Cantonese, written in Jyutping',
    count: 'Six tones on open syllables. Syllables that end in -p, -t or -k are short and take tone 1, 3 or 6.',
    tones: [
      { n: '1', name: '陰平', contour: '55 (or 53)', shape: [5, 5], hz: '詩', rom: 'si1', gloss: 'poem' },
      { n: '2', name: '陰上', contour: '35', shape: [3, 5], hz: '史', rom: 'si2', gloss: 'history' },
      { n: '3', name: '陰去', contour: '33', shape: [3, 3], hz: '試', rom: 'si3', gloss: 'to try' },
      { n: '4', name: '陽平', contour: '21 (or 11)', shape: [2, 1], hz: '時', rom: 'si4', gloss: 'time' },
      { n: '5', name: '陽上', contour: '23', shape: [2, 3], hz: '市', rom: 'si5', gloss: 'market' },
      { n: '6', name: '陽去', contour: '22', shape: [2, 2], hz: '事', rom: 'si6', gloss: 'matter' },
      { n: '1', name: '上陰入', contour: '5 (short)', shape: [5, 5], checked: true, hz: '色', rom: 'sik1', gloss: 'colour' },
      { n: '3', name: '下陰入', contour: '3 (short)', shape: [3, 3], checked: true, hz: '錫', rom: 'sek3', gloss: 'tin' },
      { n: '6', name: '陽入', contour: '2 (short)', shape: [2, 2], checked: true, hz: '食', rom: 'sik6', gloss: 'to eat' },
    ],
    notes: [
      'Tones 1, 2, 3 sit in the upper half of your range and 4, 5, 6 in the lower half. Hear the pair first (high or low), then the movement (level, rising, falling).',
      'Tones 2 and 5 both rise; 2 starts higher and ends higher. Tones 3 and 6 are both level; 6 is lower.',
      'Many speakers have merged 4 and 6, or 2 and 5, in casual speech. You will be understood either way, but learn them apart.',
    ],
  },
  hokkien: {
    dialect: 'hokkien',
    title: 'Hokkien: seven working tones',
    basis: 'Taiwanese and Amoy Hokkien, written in Tâi-lô (POJ marks the same tones)',
    count: 'Eight historical tones, of which 6 merged into 7, so you learn seven: 1, 2, 3, 4, 5, 7, 8.',
    tones: [
      { n: '1', name: '陰平', contour: '55', shape: [5, 5], hz: '獅', rom: 'sai', gloss: 'lion' },
      { n: '2', name: '陰上', contour: '51', shape: [5, 1], hz: '死', rom: 'sí', gloss: 'to die' },
      { n: '3', name: '陰去', contour: '21', shape: [2, 1], hz: '四', rom: 'sì', gloss: 'four' },
      { n: '4', name: '陰入', contour: '32 (short)', shape: [3, 2], checked: true, hz: '薛', rom: 'sih', gloss: 'a surname' },
      { n: '5', name: '陽平', contour: '24', shape: [2, 4], hz: '時', rom: 'sî', gloss: 'time' },
      { n: '7', name: '陽去', contour: '33', shape: [3, 3], hz: '是', rom: 'sī', gloss: 'to be' },
      { n: '8', name: '陽入', contour: '4 (short)', shape: [4, 4], checked: true, hz: '蝕', rom: 'si̍h', gloss: 'to erode' },
    ],
    notes: [
      'Tone 1 is high and flat; tone 7 is mid and flat. Those two are the ones beginners swap.',
      'Tones 4 and 8 are the short ones: the syllable stops dead on -p, -t, -k or -h. Tone 8 is higher than tone 4.',
      'In Tâi-lô the mark over the vowel tells you the tone: no mark = 1, á = 2, à = 3, â = 5, ā = 7, a̍ = 8; a plain stop ending with no mark = 4.',
    ],
  },
  teochew: {
    dialect: 'teochew',
    title: 'Teochew: eight tones',
    basis: 'Chaozhou / Swatow, written in Peng’im',
    count: 'All eight historical tones are kept, including both checked tones.',
    tones: [
      { n: '1', name: '陰平', contour: '33', shape: [3, 3], hz: '分', rom: 'bung1', gloss: 'to divide' },
      { n: '2', name: '陰上', contour: '53', shape: [5, 3], hz: '粉', rom: 'bung2', gloss: 'powder' },
      { n: '3', name: '陰去', contour: '213', shape: [2, 1, 3], hz: '訓', rom: 'bung3', gloss: 'to instruct' },
      { n: '4', name: '陰入', contour: '2 (short)', shape: [2, 2], checked: true, hz: '扑', rom: 'pag4', gloss: 'to hit' },
      { n: '5', name: '陽平', contour: '55', shape: [5, 5], hz: '雲', rom: 'hung5', gloss: 'cloud' },
      { n: '6', name: '陽上', contour: '35', shape: [3, 5], hz: '混', rom: 'hung6', gloss: 'to mix' },
      { n: '7', name: '陽去', contour: '11', shape: [1, 1], hz: '份', rom: 'hung7', gloss: 'a share' },
      { n: '8', name: '陽入', contour: '4 (short)', shape: [4, 4], checked: true, hz: '縛', rom: 'bag8', gloss: 'to tie' },
    ],
    notes: [
      'Teochew is a Southern Min language like Hokkien, but the tone numbers do not line up with Hokkien’s: the same number means a different pitch.',
      'Sandhi is heavy: in a two-syllable word the first syllable almost always changes tone, so learn words as whole units rather than syllable by syllable.',
      'Published tone values differ between Chaozhou, Swatow and overseas communities. Treat these as the common teaching values.',
    ],
  },
  hakka: {
    dialect: 'hakka',
    title: 'Hakka: six tones',
    basis: 'Sixian Hakka (Taiwan), written in Pha̍k-fa-sṳ',
    count: 'Four tones on open syllables plus two short checked tones.',
    tones: [
      { n: '1', name: '陰平', contour: '24', shape: [2, 4], hz: '夫', rom: 'fû', gloss: 'husband' },
      { n: '2', name: '陽平', contour: '11', shape: [1, 1], hz: '扶', rom: 'fù', gloss: 'to support' },
      { n: '3', name: '上聲', contour: '31', shape: [3, 1], hz: '府', rom: 'fú', gloss: 'government office' },
      { n: '4', name: '去聲', contour: '55', shape: [5, 5], hz: '富', rom: 'fu', gloss: 'rich' },
      { n: '5', name: '陰入', contour: '2 (short)', shape: [2, 2], checked: true, hz: '福', rom: 'fuk', gloss: 'blessing' },
      { n: '6', name: '陽入', contour: '5 (short)', shape: [5, 5], checked: true, hz: '服', rom: 'fu̍k', gloss: 'clothing' },
    ],
    notes: [
      'Sixian (四縣) is the variety taught most in Taiwan. Hailu (海陸) Hakka has seven tones and often the mirror image of Sixian’s pitches, and Meixian Hakka in Guangdong differs again.',
      'In Pha̍k-fa-sṳ the circumflex (â) is tone 1, the grave (à) tone 2, the acute (á) tone 3, no mark tone 4, and the vertical line (a̍) marks the high checked tone.',
    ],
  },
  hainanese: {
    dialect: 'hainanese',
    title: 'Hainanese: the tones, with a warning',
    basis: 'Wenchang / Haikou speech; values differ by town',
    count: 'Usually described as five to seven distinct tones, from eight historical categories.',
    tones: [
      { n: '1', name: '陰平', contour: '23', shape: [2, 3] },
      { n: '2', name: '陽平', contour: '21', shape: [2, 1] },
      { n: '3', name: '上聲', contour: '213', shape: [2, 1, 3] },
      { n: '4', name: '陰去', contour: '35', shape: [3, 5] },
      { n: '5', name: '陽去', contour: '33', shape: [3, 3] },
      { n: '6', name: '陰入', contour: '5 (short)', shape: [5, 5], checked: true },
      { n: '7', name: '陽入', contour: '3 (short)', shape: [3, 3], checked: true },
    ],
    notes: [
      'Hainanese has no widely used romanisation and no agreed tone numbering, so published descriptions disagree more than for the other four. Learn it by ear from a speaker where you can.',
      'Its most striking sounds are the implosive consonants: the b in “bui” and the d in “dua” are made by pulling air inward, which no other dialect here does.',
      'Many Hainanese words that start with s elsewhere start with a t sound here, and some h sounds become a plain vowel, so cognates can be hard to spot at first.',
    ],
  },
}
