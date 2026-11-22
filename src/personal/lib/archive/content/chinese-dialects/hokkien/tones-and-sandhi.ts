import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hokkien tone sandhi is the feature that makes learners give up, and it should not be. The rule is mechanical: every syllable except the last one in a phrase shifts its tone around a fixed circle. Once you know the circle, you stop hearing “random” pitches and start hearing a system. This page gives the seven citation tones, the circle, what happens to the short checked syllables, where the phrase boundaries fall, and how to drill it.',
  nutshell: [
    '**The last syllable of a phrase keeps its citation tone.** Everything before it changes.',
    '**The circle: 1→7, 7→3, 3→2, 2→1.** Tone 5 goes to 7 in Taiwan and to 3 in much of Fujian.',
    '**Checked syllables swap**: -p, -t, -k endings go 4→8 and 8→4; glottal -h endings go 4→2 and 8→3, and the stop is dropped.',
    '**A phrase, not a word**, sets the boundary: the unit is roughly a noun phrase or verb phrase, so the same word changes depending on what follows it.',
    '**Learn melodies, not syllables.** Memorise 食飽未 as one tune and the sandhi comes for free.',
  ],
  sections: [
    {
      id: 'citation',
      title: 'The seven citation tones',
      blocks: [
        { t: 'tones', dialect: 'hokkien' },
        {
          t: 'p',
          text: 'These are the tones a syllable has when said **alone**, and the ones written in dictionaries and in Tâi-lô spelling. In running speech you will rarely hear most of them in a non-final position, which is exactly why reading a dictionary aloud sounds foreign.',
        },
      ],
    },
    {
      id: 'circle',
      title: 'The sandhi circle',
      blocks: [
        {
          t: 'cycle',
          caption: 'Read it as: a syllable with this tone, when it is not last in its phrase, is said with the next tone round the circle.',
          items: [
            { name: 'Tone 1 (55) → 7', body: 'High level becomes mid level. 山 suann (1) in 山頂 suann-tíng is said at tone 7.' },
            { name: 'Tone 7 (33) → 3', body: 'Mid level becomes low falling. 是 sī (7) in 是按怎 drops.' },
            { name: 'Tone 3 (21) → 2', body: 'Low falling becomes high falling. 四 sì (3) in 四十 sì-tsa̍p rises first.' },
            { name: 'Tone 2 (51) → 1', body: 'High falling becomes high level, closing the circle.' },
            { name: 'Tone 5 (24) → 7 or 3', body: 'Rising becomes mid level in Taiwan, low falling in much of Fujian. This is the main regional split.' },
          ],
        },
        {
          t: 'table',
          head: ['Checked ending', 'Citation', 'In sandhi position', 'Example'],
          rows: [
            ['-p, -t, -k', 'Tone 4 (low, short)', 'Becomes tone 8 (high, short); the stop stays', '法 huat (4) in 法度 huat-tōo'],
            ['-p, -t, -k', 'Tone 8 (high, short)', 'Becomes tone 4 (low, short); the stop stays', '食 tsia̍h (8) before another word'],
            ['-h (glottal)', 'Tone 4', 'Becomes tone 2 and the glottal stop is dropped', '鴨 ah (4) in 鴨肉 ah-bah'],
            ['-h (glottal)', 'Tone 8', 'Becomes tone 3 and the glottal stop is dropped', '白 pe̍h (8) in 白色 pe̍h-sik'],
          ],
          caption: 'The dropping of the glottal stop in sandhi is why some words seem to lose a consonant in compounds.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Spelling does not change',
          text: 'Tâi-lô and POJ always write the **citation** tone, never the sandhi one. The reader is expected to apply the circle. So the written 山頂 suann-tíng has a tone-1 mark on suann even though it is said at tone 7. Do not try to “correct” the spelling to what you hear.',
        },
      ],
    },
    {
      id: 'boundaries',
      title: 'Where a phrase ends',
      blocks: [
        {
          t: 'p',
          text: 'The sandhi domain is roughly a syntactic phrase. The final syllable of that phrase keeps its citation tone; everything earlier shifts. Learning where these boundaries fall is as important as the circle itself, because the same word is said differently depending on its position.',
        },
        {
          t: 'example',
          title: 'The same word in three positions',
          lines: [
            { label: 'Alone', text: '山 suann, tone 1, said high and level.' },
            { label: 'Inside a compound', text: '山頂 suann-tíng “mountain top”, suann shifts to tone 7, 頂 keeps tone 2.' },
            { label: 'Inside a longer phrase', text: '山頂的人 suann-tíng ê lâng, 頂 is now non-final and shifts too; only 人 keeps its citation tone.' },
          ],
        },
        {
          t: 'list',
          items: [
            'Possessive 的 ê and most grammatical particles attach to the phrase before them and do not break the domain.',
            'A verb and its object are usually separate domains, so a verb at the end of its own phrase can keep its citation tone.',
            'Neutral-tone endings, written with a double hyphen in Tâi-lô (食飽--矣), make the syllable before them keep its citation tone. This is why 食飽--矣 sounds different from 食飽矣 in careful speech.',
          ],
        },
      ],
    },
    {
      id: 'drill',
      title: 'Drilling it without going mad',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Learn fixed phrases as tunes', body: 'Take 食飽未, 多謝你, 真好食 and hum each as a melody. Your mouth will apply the sandhi without you computing it.' },
            { title: 'Then check the tune against the circle', body: 'Work out on paper what the circle predicts, and compare it to the tune you already learnt. Two routes to the same answer fixes it in memory.' },
            { title: 'Build pairs deliberately', body: 'Take a tone-1 word and put it before another word. Say it alone, then in the pair. 山 → 山頂. 車 → 車頭. Feel the drop to mid level.' },
            { title: 'Shadow real speech', body: 'Taiwanese drama and song give you hours of natural sandhi. Speak along a beat behind, copying melody before words.' },
            { title: 'Accept a transition period', body: 'For a few weeks you will apply the circle consciously and slowly. Then it goes automatic. Every learner of Hokkien goes through this, including native-speaker children.' },
          ],
        },
        {
          t: 'speak',
          lang: 'hokkien',
          title: 'Sandhi practice pairs',
          note: 'Say each word alone first, then inside the phrase, and listen for the first syllable dropping or rising.',
          items: [
            { hz: '山 / 山頂', rom: 'suann / suann-tíng', en: 'mountain / mountain top, tone 1 becomes tone 7' },
            { hz: '是 / 是按怎', rom: 'sī / sī án-tsuánn', en: 'is / why is that, tone 7 becomes tone 3' },
            { hz: '四 / 四十', rom: 'sì / sì-tsa̍p', en: 'four / forty, tone 3 becomes tone 2' },
            { hz: '好 / 好食', rom: 'hó / hó-tsia̍h', en: 'good / tasty, tone 2 becomes tone 1' },
            { hz: '時 / 時間', rom: 'sî / sî-kan', en: 'time / duration, tone 5 becomes tone 7 in Taiwan' },
            { hz: '白 / 白色', rom: 'pe̍h / pe̍h-sik', en: 'white / white colour, the glottal stop drops in sandhi' },
          ],
        },
      ],
    },
  ],
}

export default guide
