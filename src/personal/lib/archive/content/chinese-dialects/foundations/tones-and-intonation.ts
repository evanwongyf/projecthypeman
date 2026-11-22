import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Tone is the part of these languages that cannot be skipped and cannot be faked. In English, pitch carries attitude: you raise it at the end of a question. In Cantonese or Hokkien, pitch carries the word itself, and attitude has to ride on top of it. This page explains what a tone is, how to read the 1-to-5 pitch numbers every description uses, how to hear and produce the tones of all five dialects, what tone sandhi does to them in real speech, and how intonation still works once tone has taken the pitch.',
  nutshell: [
    '**A tone is a pitch shape attached to a syllable**, as much part of the word as a consonant. Change it and you change the word, not the feeling.',
    '**Chao numbers: 1 is the bottom of your range, 5 the top.** “55” is high and level, “21” low and falling, “213” dips and rises.',
    '**Learn tones in contrasting pairs**, not as a list. High-level against mid-level, and rising against low-falling, are the pairs people actually confuse.',
    '**Checked syllables** ending in -p, -t, -k or a glottal stop are short and carry their own tones. Shortness is the main cue.',
    '**Tone sandhi** changes tones in connected speech. Hokkien and Teochew change almost every non-final syllable; Cantonese barely changes at all.',
    '**Intonation still exists.** It works by widening or raising the whole pitch range, adding particles, or lengthening a syllable, rather than by bending a word’s tone.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What a tone actually is',
      blocks: [
        {
          t: 'p',
          text: 'Say the English word “really” three ways: flat and bored, rising as a question, falling as a correction. The word stays the same. Now take Cantonese **si**: at a high level pitch it is 詩 “poem”, rising it is 史 “history”, mid level it is 試 “to try”, low falling it is 時 “time”, low rising it is 市 “market”, low level it is 事 “matter”. Six different words, one set of consonants and vowels. That is a tone language.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The pitch is relative, not absolute',
          text: 'A child and a man with a deep voice say the same tone at completely different frequencies. What matters is where the pitch sits **inside that speaker’s own range**, and how it moves. So do not try to match a recording’s pitch; match its shape, inside your own voice.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Chao tone letters', def: 'The 1-5 pitch scale used in every serious description: 5 is the top of the speaker’s comfortable range, 1 the bottom. A tone is written as its start and end points, sometimes with a middle point: 55, 21, 213.' },
            { term: 'Register', def: 'Whether a tone sits in the upper or lower half of the range. Historically, upper (陰) tones followed voiceless consonants and lower (陽) tones followed voiced ones. It is why Cantonese tones 1-3 are high and 4-6 low.' },
            { term: 'Contour', def: 'The movement: level, rising, falling, or dipping. Hear the register first, then the contour.' },
            { term: 'Checked tone 入聲', def: 'A syllable ending in -p, -t, -k or a glottal stop. It is cut short. Mandarin lost these entirely, which is why it has no checked tones and the southern dialects do.' },
            { term: 'Sandhi', def: 'Tone change caused by neighbouring syllables. The citation tone is what a syllable has alone; sandhi is what it becomes in a phrase.' },
          ],
        },
      ],
    },
    {
      id: 'charts',
      title: 'The five tone systems',
      lead: 'Each chart draws the pitch shape and gives an example word. Where your family’s speech differs, follow your family.',
      blocks: [
        { t: 'tones', dialect: 'cantonese' },
        { t: 'tones', dialect: 'hokkien' },
        { t: 'tones', dialect: 'teochew' },
        { t: 'tones', dialect: 'hakka' },
        { t: 'tones', dialect: 'hainanese' },
      ],
    },
    {
      id: 'hearing',
      title: 'Learning to hear them',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Split high from low first', body: 'Before worrying about shape, decide whether the syllable sits in the top half or the bottom half of the speaker’s range. In Cantonese that already halves the problem: 1, 2, 3 are upper, 4, 5, 6 lower.' },
            { title: 'Then level against moving', body: 'Is the pitch staying put, going up, or coming down? Most learner errors are a moving tone said level, or a level tone said with a drift.' },
            { title: 'Drill minimal pairs, not lists', body: 'Say 詩 si1 and 試 si3 back to back twenty times. Then 時 si4 and 市 si5. Pairs train the contrast; lists train nothing.' },
            { title: 'Hum before you speak', body: 'Hum the melody of a two-syllable word with no consonants or vowels at all, then add the syllables back. If you cannot hum it, you do not know it yet.' },
            { title: 'Record and compare', body: 'Record yourself saying a word, then the model, then yourself again. The gap you hear in playback is far bigger than the one you hear live.' },
            { title: 'Use your hand', body: 'Trace the contour in the air as you say it. It feels silly and it works: it links an abstract pitch pattern to a motion you can repeat.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Learn each new word together with its tone number from day one.',
            'Practise tones inside real words and phrases, where you will actually need them.',
            'Exaggerate at first. A learner’s tones are usually too flat, never too strong.',
            'Treat the checked tones as “short” before you worry about their pitch.',
          ],
          dont: [
            'Do not learn a vocabulary list with the tones left off, planning to add them later. They will not go back on.',
            'Do not use English question intonation on the last word of a sentence; it will change the word.',
            'Do not trust your own ear early on. Record yourself: the two often disagree.',
            'Do not assume one dialect’s tone 2 behaves like another’s. The numbers are labels, not shared pitches.',
          ],
        },
      ],
    },
    {
      id: 'sandhi',
      title: 'Tone sandhi: when tones change',
      blocks: [
        {
          t: 'p',
          text: 'In Hokkien, almost every syllable that is not the last one in a phrase changes its tone, in a fixed circle. This sounds brutal and is actually a relief: the rule is mechanical, and the final syllable keeps its original tone, so the citation tone you learnt is always audible somewhere.',
        },
        {
          t: 'table',
          head: ['Dialect', 'How much sandhi', 'What to do about it'],
          rows: [
            ['Hokkien', 'Heavy. All non-final syllables shift around a circle: 1→7, 7→3, 3→2, 2→1, and 5→7 in Taiwan (5→3 in parts of Fujian). Checked tones swap: 4↔8.', 'Learn whole words and phrases with their melody. The sandhi page for Hokkien has the circle drawn out.'],
            ['Teochew', 'Heavy, and the system differs from Hokkien’s.', 'Learn two-syllable words as single units. Do not build compounds from citation tones.'],
            ['Cantonese', 'Very light. Mostly a “changed tone” that raises some syllables to tone 2 in nicknames, in some compounds and in a few noun uses.', 'Learn the citation tones properly; they nearly always survive.'],
            ['Hakka', 'Moderate. Sixian changes tone 1 before certain tones; patterns differ by variety.', 'Pick up common compounds by ear rather than rule.'],
            ['Hainanese', 'Present, and poorly documented in English sources.', 'Rely on whole phrases from a speaker.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why sandhi is not a disaster',
          text: 'It is regular, it only affects non-final syllables, and native speakers apply it automatically. Learners who memorise phrases as **melodies** rather than as strings of citation tones get it for free. Learners who assemble sentences syllable by syllable from a dictionary sound robotic in exactly the way sandhi explains.',
        },
      ],
    },
    {
      id: 'intonation',
      title: 'Intonation on top of tone',
      blocks: [
        {
          t: 'p',
          text: 'If pitch is already busy carrying words, how do you sound surprised, doubtful or polite? These languages use four other channels, and learning them is what makes you sound like a person rather than a textbook.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Range, not direction', body: 'Excitement widens the whole pitch range and raises the baseline; boredom flattens it. The tones keep their relative shapes inside the stretched or squashed range.', tag: 'all five' },
            { title: 'Sentence-final particles', body: 'Cantonese does most of its mood work here: 啦 laa1, 囉 lo1, 喎 wo3, 咩 me1, 嘅 ge3, 添 tim1. Hokkien has 啦 lah, 喔 ooh, 嘛 mah, which is where Singlish got them.', tag: 'grammar does the work' },
            { title: 'Length and loudness', body: 'Dragging a syllable out, or hitting it harder, adds emphasis without touching its tone. This is the safest tool for a learner.', tag: 'safe' },
            { title: 'Question words, not question pitch', body: 'A yes-no question is formed with 係唔係 / 有無 / 未 or a particle, not by raising the final pitch. Raising it changes the word instead.', tag: 'important' },
          ],
        },
        {
          t: 'example',
          title: 'The same sentence, three moods (Cantonese)',
          lines: [
            { label: 'Neutral', text: '佢走咗喇 keoi5 zau2 zo2 laa3, “He has left.”' },
            { label: 'Surprised', text: '佢走咗喇咩？ keoi5 zau2 zo2 laa3 me1, the particle 咩 me1 makes it an incredulous question. The tones of 走咗 do not change.' },
            { label: 'Resigned', text: '佢走咗囉 keoi5 zau2 zo2 lo1, 囉 lo1 adds “well, what can you do”.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The classic learner mistake',
          text: 'Ending a Cantonese sentence with an English-style rising question pitch turns the final word into a different word. If you want a question, add 呀 aa3 or 咩 me1, or use 係唔係, and keep the tones flat and correct. This single habit is the most common giveaway of an English-speaking learner.',
        },
      ],
    },
  ],
}

export default guide
