import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Six tones sounds worse than it is. They come in two registers of three, and most of the work is deciding whether a syllable sits high or low before you worry about its shape. This page gives the chart, the pairs that learners actually confuse, the three checked tones, the small amount of tone change Cantonese really has, and drills that work.',
  nutshell: [
    '**Upper register: 1, 2, 3. Lower register: 4, 5, 6.** Decide register first, contour second.',
    '**Level tones: 1 high, 3 mid, 6 low.** Rising tones: 2 from mid, 5 from low. Falling: 4.',
    '**Checked syllables** ending -p, -t, -k take tone 1, 3 or 6 and are short.',
    '**The hard pairs** are 3 against 6, 2 against 5, and 4 against 6.',
    '**Merging is happening** in younger speakers’ speech, especially 4/6 and n-/l-. Learn the distinctions anyway; you will understand more.',
  ],
  sections: [
    {
      id: 'chart',
      title: 'The chart',
      blocks: [
        { t: 'tones', dialect: 'cantonese' },
        {
          t: 'p',
          text: 'The classic teaching set is 詩 si1, 史 si2, 試 si3, 時 si4, 市 si5, 事 si6, poem, history, try, time, market, matter. Six words that differ only in pitch. Learn to say the set in order, then in random order, then to identify them played back to you.',
        },
      ],
    },
    {
      id: 'pairs',
      title: 'The pairs that matter',
      blocks: [
        {
          t: 'table',
          head: ['Pair', 'Difference', 'Minimal pair to drill'],
          rows: [
            ['1 vs 3', 'Both level; 1 is high, 3 is mid', '詩 si1 (poem) / 試 si3 (try)'],
            ['3 vs 6', 'Both level; 3 is mid, 6 is low', '試 si3 (try) / 事 si6 (matter)'],
            ['2 vs 5', 'Both rise; 2 starts and ends higher', '史 si2 (history) / 市 si5 (market)'],
            ['4 vs 6', 'Both low; 4 falls, 6 is level', '時 si4 (time) / 事 si6 (matter)'],
            ['1 vs 4', 'Register test: high level against low falling', '詩 si1 / 時 si4'],
          ],
        },
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'The six-tone drill set',
          note: 'Play these in order, then try to say them without listening, then check. If your device has a Cantonese voice this is the most useful drill on the shelf.',
          items: [
            { hz: '詩', rom: 'si1', en: 'poem, high level' },
            { hz: '史', rom: 'si2', en: 'history, rising from mid' },
            { hz: '試', rom: 'si3', en: 'to try, mid level' },
            { hz: '時', rom: 'si4', en: 'time, low falling' },
            { hz: '市', rom: 'si5', en: 'market, rising from low' },
            { hz: '事', rom: 'si6', en: 'matter, low level' },
            { hz: '色', rom: 'sik1', en: 'colour, short, high' },
            { hz: '錫', rom: 'sek3', en: 'tin, short, mid' },
            { hz: '食', rom: 'sik6', en: 'to eat, short, low' },
          ],
        },
      ],
    },
    {
      id: 'changed',
      title: 'Changed tones',
      blocks: [
        {
          t: 'p',
          text: 'Cantonese has almost no sandhi, but it does have a **changed tone** (變調): certain syllables are raised to tone 2 or tone 1 in particular contexts. It is a list to learn rather than a rule to apply.',
        },
        {
          t: 'list',
          items: [
            'Nicknames and familiar address: 陳 can4 becomes 阿陳 with a raised tone in casual naming.',
            'Some nouns raise their last syllable to tone 2: 魚 jyu4 alone, but 黃魚 with a raised final in some compounds.',
            'Verb repetition for “a little”: 睇睇 tai2 tai2, “have a quick look”.',
            'Numbers in prices and phone numbers can shift in rapid speech.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Do not chase this early',
          text: 'Changed tones are a late-stage polish. If you say the citation tone you will be understood everywhere. Pick them up by imitation from speech you hear, not from a rule table.',
        },
      ],
    },
    {
      id: 'drills',
      title: 'Drills that work',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Register sorting', body: 'Have someone say random syllables and only say “high” or “low”. Nothing else. Get to 90% before adding contour.' },
            { title: 'The si set, forwards and backwards', body: 'Say 詩史試時市事 in order, then in reverse, then shuffled, with no model playing. Record yourself and check against the player.' },
            { title: 'Two-syllable combinations', body: 'Words are mostly two syllables, so drill tone pairs: 1-1 今天, 2-3 好試, 4-6 時事. The transitions are where learners slip.' },
            { title: 'Shadowing', body: 'Play a line of Cantonese dialogue and speak along one beat behind. Copy the melody before you understand the words.' },
            { title: 'Sing', body: 'Cantopop melodies are famously written to follow the tones of the lyrics. Singing a song you know teaches you tone sequences without any theory.' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Why Cantopop lyrics fit the tones',
          text: 'Cantonese lyricists traditionally match the melody’s rising and falling shape to the lyric’s tones, so the words stay intelligible when sung. Mandarin pop largely gave this up. It means a Cantonese song is also a tone exercise, which is a gift for learners.',
        },
      ],
    },
  ],
}

export default guide
