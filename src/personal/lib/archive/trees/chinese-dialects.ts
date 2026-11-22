import type { ArchiveNode } from '../topics'

// Chinese dialects: the southern Chinese languages spoken across Southeast Asia and the
// diaspora. Hokkien, Teochew and Hainanese are Southern Min; Cantonese is Yue; Hakka is its
// own branch. The shelf teaches the sound system and tones first, because that is what makes
// these languages hard to pick up from writing alone, then builds a working phrasebook that
// reads itself aloud.

export const CHINESE_DIALECTS: ArchiveNode = {
  slug: 'chinese-dialects',
  title: 'Chinese dialects',
  blurb:
    'Hokkien, Cantonese, Hakka, Teochew and Hainanese: how they relate, how their tones work, and a spoken phrasebook for each with greetings, numbers, family, food and getting around. Every page can be read aloud with your device’s voices.',
  glyph: '話',
  color: 'color-mix(in srgb, var(--mustard) 65%, var(--pink))',
  tags: ['chinese', 'dialects', 'hokkien', 'minnan', 'cantonese', 'yue', 'hakka', 'teochew', 'chaozhou', 'hainanese', 'tones', 'jyutping', 'tai-lo', 'poj', 'peng-im', 'pha̍k-fa-sṳ', 'singapore', 'malaysia', 'diaspora', 'speech', 'pronunciation'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What these five languages are, why they are not accents of Mandarin, which one to learn first, and how to use the read-aloud tools on this shelf.',
      minutes: 8,
      glyph: '★',
      tags: ['overview', 'beginner', 'which dialect', 'roadmap'],
    },
    {
      slug: 'foundations',
      title: 'Foundations',
      blurb: 'The family tree, the sound systems, how tones work and how to read the romanisations.',
      glyph: '🌳',
      tags: ['family', 'history', 'tones', 'romanisation', 'phonology'],
      children: [
        {
          slug: 'family-and-history',
          title: 'How the dialects relate',
          blurb: 'Sinitic branches, which dialect belongs where, why they are mutually unintelligible, the layers of old Chinese they preserve, and where each is spoken today.',
          minutes: 12,
          tags: ['min nan', 'yue', 'hakka', 'family tree', 'history', 'migration', 'singapore', 'malaysia'],
        },
        {
          slug: 'tones-and-intonation',
          title: 'Tones and intonation',
          blurb: 'What a tone is, how to read Chao’s 1-5 pitch numbers, the tone charts for all five dialects, tone sandhi, and how intonation rides on top of tone in a real sentence.',
          minutes: 16,
          tags: ['tones', 'pitch', 'chao', 'sandhi', 'intonation', 'ear training'],
        },
        {
          slug: 'sounds-and-romanisation',
          title: 'Sounds and romanisation',
          blurb: 'Consonants and vowels these dialects have that Mandarin does not, the final -p, -t, -k stops, nasal vowels, and how to read Tâi-lô, POJ, Jyutping, Pha̍k-fa-sṳ and Peng’im without guessing.',
          minutes: 14,
          tags: ['romanisation', 'jyutping', 'tai-lo', 'poj', 'peng-im', 'consonants', 'vowels', 'checked syllables'],
        },
        {
          slug: 'shared-grammar',
          title: 'Grammar you can reuse',
          blurb: 'Word order, classifiers, aspect markers instead of tenses, comparison, questions, negation and the sentence-final particles that carry the mood. One pattern, five dialects.',
          minutes: 13,
          tags: ['grammar', 'classifiers', 'aspect', 'questions', 'particles', 'word order'],
        },
      ],
    },
    {
      slug: 'hokkien',
      title: 'Hokkien 福建話',
      group: 'The five dialects',
      blurb: 'Southern Min from Quanzhou, Zhangzhou and Xiamen, the dialect of much of Singapore, Penang, Taiwan and the Philippines.',
      glyph: '闽',
      tags: ['hokkien', 'minnan', 'amoy', 'taiwanese', 'penang', 'tai-lo', 'poj'],
      children: [
        { slug: 'basics', title: 'Hokkien basics', blurb: 'Where it is spoken, which variety you are hearing, the sounds, the eight-into-seven tone system, and the first twenty things to say.', minutes: 14, tags: ['hokkien', 'sounds', 'tones', 'greetings'] },
        { slug: 'tones-and-sandhi', title: 'Hokkien tones and the sandhi circle', blurb: 'The seven citation tones, the tone circle that changes nearly every non-final syllable, what it does to checked syllables, and how to practise it.', minutes: 12, tags: ['tones', 'sandhi', 'tone circle', 'tai-lo'] },
        { slug: 'phrases', title: 'Hokkien phrases', blurb: 'Greetings, politeness, family, food and hawker centre, shopping, directions and small talk, with audio controls and notes on Singapore and Penang usage.', minutes: 15, tags: ['phrases', 'phrasebook', 'food', 'family', 'shopping'] },
        { slug: 'numbers-and-counting', title: 'Hokkien numbers and counting', blurb: 'The two sets of numerals, when to use which, money, time, dates, age and the classifiers that go with them.', minutes: 10, tags: ['numbers', 'counting', 'money', 'time', 'classifiers'] },
      ],
    },
    {
      slug: 'cantonese',
      title: 'Cantonese 廣東話',
      blurb: 'Yue Chinese from Guangzhou, Hong Kong and Macau, with the largest body of film, song and written colloquial text of any dialect here.',
      glyph: '粤',
      tags: ['cantonese', 'yue', 'hong kong', 'guangzhou', 'jyutping'],
      children: [
        { slug: 'basics', title: 'Cantonese basics', blurb: 'The sound system, Jyutping, the six tones, written Cantonese versus written Chinese, and your first twenty phrases.', minutes: 14, tags: ['cantonese', 'jyutping', 'sounds', 'greetings'] },
        { slug: 'six-tones', title: 'The six tones in practice', blurb: 'Hearing high from low and level from moving, the three checked tones, the pairs that beginners merge, and drills that work.', minutes: 11, tags: ['tones', 'ear training', 'minimal pairs', 'checked'] },
        { slug: 'phrases', title: 'Cantonese phrases', blurb: 'Greetings, 唔該 versus 多謝, ordering food, yum cha, transport, shopping, bargaining and apologising, with audio.', minutes: 15, tags: ['phrases', 'phrasebook', 'yum cha', 'transport', 'politeness'] },
        { slug: 'particles-and-slang', title: 'Particles, grammar and slang', blurb: 'The sentence-final particles that carry tone of voice, verb aspect, comparison, and the everyday slang that textbooks leave out.', minutes: 12, tags: ['particles', 'grammar', 'slang', 'aspect'] },
      ],
    },
    {
      slug: 'hakka',
      title: 'Hakka 客家話',
      blurb: 'The language of the Hakka people, spread across Guangdong, Fujian, Taiwan, Sabah, Calcutta and beyond, and conservative in ways that help you read old poetry.',
      glyph: '客',
      tags: ['hakka', 'sixian', 'hailu', 'meixian', 'pha̍k-fa-sṳ'],
      children: [
        { slug: 'basics', title: 'Hakka basics', blurb: 'Who the Hakka are, Sixian versus Hailu versus Meixian, the sound system, Pha̍k-fa-sṳ spelling and the first phrases.', minutes: 13, tags: ['hakka', 'sounds', 'varieties', 'greetings'] },
        { slug: 'tones', title: 'Hakka tones', blurb: 'The six Sixian tones, how Hailu mirrors them, the checked tones, and what changes in connected speech.', minutes: 10, tags: ['tones', 'sixian', 'hailu', 'sandhi'] },
        { slug: 'phrases', title: 'Hakka phrases', blurb: 'Greetings, thanks in the Hakka way, family terms, food, directions and festival language, with audio.', minutes: 13, tags: ['phrases', 'phrasebook', 'family', 'food'] },
      ],
    },
    {
      slug: 'teochew',
      title: 'Teochew 潮州話',
      blurb: 'Southern Min from the Chaoshan region: close to Hokkien in origin, far enough apart that the two are not comfortably mutually intelligible.',
      glyph: '潮',
      tags: ['teochew', 'chaozhou', 'swatow', 'peng-im', 'minnan'],
      children: [
        { slug: 'basics', title: 'Teochew basics', blurb: 'Chaoshan and the diaspora, how Teochew differs from Hokkien, the sounds, Peng’im spelling and the first phrases.', minutes: 13, tags: ['teochew', 'sounds', 'peng-im', 'greetings'] },
        { slug: 'tones', title: 'Teochew tones', blurb: 'All eight tones, the heavy sandhi that reshapes nearly every compound, and why you should learn words rather than syllables.', minutes: 11, tags: ['tones', 'sandhi', 'peng-im'] },
        { slug: 'phrases', title: 'Teochew phrases', blurb: 'Greetings, kinship, food and tea culture, markets and everyday courtesy, with audio and Hokkien comparisons.', minutes: 13, tags: ['phrases', 'phrasebook', 'food', 'tea', 'family'] },
      ],
    },
    {
      slug: 'hainanese',
      title: 'Hainanese 海南話',
      blurb: 'The Min language of Hainan island, with implosive consonants no other dialect here has, and a strong presence in Singapore and Thailand.',
      glyph: '琼',
      tags: ['hainanese', 'qiongwen', 'wenchang', 'haikou', 'implosive'],
      children: [
        { slug: 'basics', title: 'Hainanese basics', blurb: 'Where it sits in the Min family, the implosive b and d, the sound shifts that hide its cognates, and what spelling to use when there is no standard.', minutes: 12, tags: ['hainanese', 'sounds', 'implosive', 'varieties'] },
        { slug: 'phrases', title: 'Hainanese phrases', blurb: 'Greetings, family, food including the chicken rice vocabulary, and everyday courtesy, with audio and an honest note on spelling.', minutes: 12, tags: ['phrases', 'phrasebook', 'family', 'food'] },
      ],
    },
    {
      slug: 'practice',
      title: 'Practice',
      group: 'Using it',
      blurb: 'Tools for drilling: the same phrase across all five dialects, a read-aloud lab, and a practice routine that fits around a week.',
      glyph: '🎧',
      tags: ['practice', 'drills', 'comparison', 'listening', 'speaking'],
      children: [
        { slug: 'compare-the-five', title: 'The same phrase in five dialects', blurb: 'Greetings, numbers, family and food lined up side by side, so you can hear what the Min dialects share and where Cantonese and Hakka go their own way.', minutes: 11, tags: ['comparison', 'cognates', 'numbers', 'greetings'] },
        { slug: 'read-aloud-lab', title: 'Read-aloud lab', blurb: 'The speech tool on its own: pick a voice, set the speed, and drill any phrase list. Includes what the browser voices can and cannot do for each dialect.', minutes: 8, tags: ['speech', 'text to speech', 'voices', 'drill'] },
        { slug: 'learning-plan', title: 'A plan that survives contact with life', blurb: 'How to learn a dialect with no classes and few materials: shadowing, family interviews, recording your elders, song and drama, and a realistic week.', minutes: 11, tags: ['plan', 'shadowing', 'listening', 'family', 'resources'] },
      ],
    },
  ],
}
