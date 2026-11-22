import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hainanese, known in Chinese as 瓊文話 Qiongwen or 海南話, is the Min language of Hainan island. It is the most distinctive of the three Min dialects on this shelf: its consonants shifted in ways that hide cognates, it has implosive sounds no other Chinese language here uses, and it has no standard romanisation at all. In Singapore, Malaysia and Thailand it is strongly associated with coffee shops and catering, which is why chicken rice and kopitiam culture carry Hainanese words. This page is honest about what is well documented and what is not.',
  nutshell: [
    '**Min, but far from Hokkien.** Shared ancestry, heavily diverged sound system.',
    '**Implosive b and d**: made by pulling air inwards, giving a hollow pop. Unique here.',
    '**Sound shifts hide cognates**: many words that start with s- elsewhere start with t- here, and some h- initials vanish.',
    '**No standard spelling.** Published materials disagree; treat every romanisation, including this page’s, as approximate.',
    '**Record a speaker.** For Hainanese this is not a nice extra; it is the only reliable source most learners will have.',
  ],
  sections: [
    {
      id: 'place',
      title: 'Where it sits',
      blocks: [
        {
          t: 'table',
          head: ['Question', 'Answer'],
          rows: [
            ['Family', 'Min, usually classed with Southern Min but divergent enough that some treat Qiongwen as its own branch.'],
            ['Main varieties', 'Wenchang 文昌 (often treated as the prestige form), Haikou 海口, Qionghai, Wanning and others.'],
            ['Where spoken', 'Hainan island, plus Singapore, Malaysia, Thailand and Vietnam.'],
            ['Speakers', 'Several million on the island; far fewer in the diaspora, where transmission has largely stopped.'],
            ['Written tradition', 'Very little. No widely used romanisation, few teaching materials in English.'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Why Hainanese is in every kopitiam',
          text: 'Hainanese arrived later in Singapore and Malaya than the Hokkien, Teochew and Cantonese communities, and found work in European and Peranakan households and in catering. That history produced Hainanese chicken rice, Hainanese pork chop, and the kopitiam coffee trade. The food is the most visible survival of the language in Southeast Asia.',
        },
      ],
    },
    {
      id: 'sounds',
      title: 'The sounds that make it distinctive',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Implosive b and d', body: 'Air is drawn inward as the closure releases, giving a hollow, slightly popping quality. English has nothing like it; Vietnamese and Sindhi do.', tag: 'the signature' },
            { title: 's → t', body: 'Many words with s- in other Min dialects appear with a t-like initial in Hainanese, which is why cognates can be hard to recognise by ear.', tag: 'cognate hider' },
            { title: 'Lost initials', body: 'Some h- and k- initials weaken or disappear, leaving a bare vowel where other dialects have a consonant.', tag: 'cognate hider' },
            { title: 'Tones', body: 'Usually described as five to seven distinct tones from eight historical categories, with values differing by town.', tag: 'unsettled' },
          ],
        },
        { t: 'tones', dialect: 'hainanese' },
      ],
    },
    {
      id: 'spelling',
      title: 'Spelling, honestly',
      blocks: [
        {
          t: 'p',
          text: 'There is no Jyutping or Tâi-lô for Hainanese. Academic work uses IPA; community materials use ad-hoc spellings based on English, Mandarin Pinyin or Malay conventions, and they disagree with each other. This shelf therefore gives Hainanese words in a plain approximate spelling with the characters alongside, and does not pretend to a system.',
        },
        {
          t: 'dodont',
          do: [
            'Use the characters as the stable reference, and the spelling as a hint.',
            'Record a speaker saying each word, and keep the recording with your notes.',
            'Ask which town your speaker’s Hainanese comes from; it genuinely changes the answers.',
            'Accept that you are documenting as much as learning.',
          ],
          dont: [
            'Do not assume a spelling you find online is authoritative; check who wrote it and for which variety.',
            'Do not read Hainanese words with Hokkien sound values; the shifts are too large.',
            'Do not rely on the read-aloud buttons for this dialect. No device has a Hainanese voice, and the fallback is a different language entirely.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'What this page cannot give you',
          text: 'Of the five dialects here, Hainanese is the one where a careful written source is hardest to verify, and the material in English is thinnest. The vocabulary on the phrases page is limited to items that recur consistently across sources, and it is still worth checking with a speaker before you rely on any of it.',
        },
      ],
    },
  ],
}

export default guide
