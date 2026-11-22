import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The good news after the tone page: the grammar of all five dialects is broadly the same, and simpler than most European languages. No verb conjugation, no plurals, no gender, no tenses. What you do need is word order, classifiers, the little aspect words that say whether something is finished or ongoing, how to make a question without raising your pitch, and the particles that carry politeness and mood. Learn these patterns once and you can reuse them in every dialect on this shelf.',
  nutshell: [
    '**Subject–verb–object**, like English, with time and place usually before the verb rather than after it.',
    '**No tenses.** Aspect words and time words do the work: “yesterday I go” is a complete, correct past tense.',
    '**Classifiers** sit between a number and a noun: one *piece* person, three *cups* tea. Each noun has a usual one.',
    '**Questions** use a question word, a yes-no particle, or the A-not-A pattern (“good not good?”). Never a rising pitch.',
    '**Negation differs by dialect**: Cantonese 唔 m4 and 冇 mou5, Hokkien 毋 m̄ and 無 bô, Hakka 唔 m̀ and 無 mò.',
    '**Particles at the end of the sentence** carry mood. They are not optional decoration; leaving them out sounds blunt.',
  ],
  sections: [
    {
      id: 'order',
      title: 'Word order and the missing machinery',
      blocks: [
        {
          t: 'table',
          head: ['English grammar', 'What these dialects do instead'],
          rows: [
            ['Verb tenses (walk / walked / will walk)', 'One verb form plus a time word or an aspect marker: 昨日 / 琴日 “yesterday”, 咗 / 了 for completion.'],
            ['Plural -s', 'Nothing, or a number plus a classifier. Context carries it.'],
            ['Articles a / the', 'Nothing, or a demonstrative: this, that.'],
            ['Verb “to be” before adjectives', 'Dropped. “He tall” is correct; the adjective works as the verb.'],
            ['Agreement (he walks / they walk)', 'Nothing to agree. The verb never changes.'],
            ['Prepositions after the verb', 'Usually before: “at the market buy things”, not “buy things at the market”.'],
          ],
        },
        {
          t: 'example',
          title: 'One sentence, four dialects',
          lines: [
            { label: 'English', text: 'I have already eaten.' },
            { label: 'Cantonese', text: '我食咗喇 ngo5 sik6 zo2 laa3, literally “I eat -finished -already”.' },
            { label: 'Hokkien', text: '我食飽矣 guá tsia̍h-pá--ah, “I eat-full -already”.' },
            { label: 'Hakka', text: '𠊎食飽了 ngài sṳ̍t-páu lé, same shape.' },
            { label: 'Teochew', text: '我食飽了 ua2 ziah8 ba2 liao2, same shape again.' },
          ],
        },
      ],
    },
    {
      id: 'classifiers',
      title: 'Classifiers',
      blocks: [
        {
          t: 'p',
          text: 'You cannot say “three books” directly. You say “three **volume** book”, using a measure word chosen to suit the noun. English does this with mass nouns, three *sheets* of paper, two *cups* of tea, and these dialects extend it to everything countable.',
        },
        {
          t: 'table',
          head: ['Use it for', 'Cantonese', 'Hokkien', 'Example'],
          rows: [
            ['People (neutral)', '個 go3', '个 ê', 'Cantonese 三個人 saam1 go3 jan4, three people'],
            ['Flat things (paper, tickets)', '張 zoeng1', '張 tiunn', 'Cantonese 一張櫈 jat1 zoeng1 dang3, one chair'],
            ['Long thin things', '條 tiu4', '條 tiâu', 'Cantonese 一條魚 jat1 tiu4 jyu2, one fish'],
            ['Machines, vehicles', '部 bou6 / 架 gaa3', '台 tâi', 'Cantonese 一部電話 jat1 bou6 din6 waa2, one phone'],
            ['Cups and bowls of something', '杯 bui1 / 碗 wun2', '杯 pue / 碗 uánn', 'Hokkien 一杯茶 tsi̍t pue tê, one cup of tea'],
            ['The general-purpose one', '個 go3', '个 ê', 'When you are stuck, this is the least wrong choice.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'When you forget the classifier',
          text: 'Use the general one (個 / 个) and carry on. Native speakers will notice and understand. Freezing mid-sentence is worse than a wrong classifier, and the right ones stick faster from being corrected in conversation than from a table.',
        },
      ],
    },
    {
      id: 'aspect',
      title: 'Aspect instead of tense',
      blocks: [
        {
          t: 'table',
          head: ['Meaning', 'Cantonese', 'Hokkien', 'Note'],
          rows: [
            ['Completed', '咗 zo2, 食咗 sik6 zo2 “have eaten”', '矣 --ah / 了 liáu, 食矣 tsia̍h--ah', 'Not a past tense: it marks that the action is finished.'],
            ['Ongoing', '緊 gan2, 食緊 sik6 gan2 “eating”', '咧 teh, 咧食 teh tsia̍h', 'Like English “-ing”.'],
            ['Experienced before', '過 gwo3, 去過 heoi3 gwo3 “have been”', '過 kuè, 去過 khì-kuè', 'Ever done it at least once.'],
            ['About to', '就 zau6 … 喇 laa3', '欲 beh, 欲去 beh khì', 'Hokkien 欲 beh also means “want to”.'],
            ['Not yet', '未 mei6, 未食 mei6 sik6', '猶未 iáu-buē', 'The standard answer to “have you eaten?” when you have not.'],
          ],
        },
      ],
    },
    {
      id: 'questions',
      title: 'Asking questions',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'A-not-A', body: 'Repeat the verb with the negative in the middle: Cantonese 好唔好 hou2 m4 hou2 “good not good?”, Hokkien 好無 hó bô. The most common everyday yes-no question.', tag: 'most used' },
            { title: 'Sentence particle', body: 'Cantonese 呀 aa3 or 咩 me1 at the end; Hokkien 無 bô or 未 buē. Hokkien 食飽未 tsia̍h-pá--buē is literally “eaten full not-yet?”.', tag: 'easy' },
            { title: 'Question word in place', body: 'The question word sits where the answer would: Cantonese 你食乜嘢 nei5 sik6 mat1 je5 “you eat what”, not “what do you eat”.', tag: 'no movement' },
            { title: 'Never by pitch', body: 'An English-style rise at the end changes the final word into another word. Use one of the three patterns above instead.', tag: 'important' },
          ],
        },
        {
          t: 'table',
          head: ['Question word', 'Cantonese', 'Hokkien', 'Hakka'],
          rows: [
            ['what', '乜嘢 mat1 je5', '啥物 siánn-mih', '麼个 mak-ke'],
            ['who', '邊個 bin1 go3', '啥人 siánn-lâng', '麼人 mak-ngìn'],
            ['where', '邊度 bin1 dou6', '佗位 tó-uī', '哪位 nai-vi'],
            ['when', '幾時 gei2 si4', '當時 tang-sî', '幾時 kí-sṳ̀'],
            ['how much', '幾多 gei2 do1', '偌濟 juā-tsē / 幾 kuí', '幾多 kí-tô'],
            ['why', '點解 dim2 gaai2', '是按怎 sī án-tsuánn', '做麼个 cho-mak-ke'],
          ],
          caption: 'Hakka and Teochew forms vary by locality more than the Cantonese and Hokkien ones; check with a speaker.',
        },
      ],
    },
    {
      id: 'particles',
      title: 'Particles: where the politeness lives',
      blocks: [
        {
          t: 'p',
          text: 'These dialects put mood at the end of the sentence. A bare statement without a particle can sound curt or abrupt, which is why learners who speak “textbook correctly” often come across as cold. Cantonese has the richest set; Hokkien’s 啦 lah, 喔 oh and 嘛 mah are the ones that crossed into Singlish and Manglish.',
        },
        {
          t: 'terms',
          items: [
            { term: '啦 laa1 / lah', def: 'Softens a suggestion or closes a matter: “come on then”, “just do it”.' },
            { term: '呀 aa3', def: 'Makes a question gentle, or a statement friendly rather than blunt.' },
            { term: '咩 me1', def: 'Surprised disbelief: “really? is it?”' },
            { term: '囉 lo1', def: 'Obviousness or resignation: “well, that’s how it is”.' },
            { term: '喎 wo3', def: 'Reporting something, or mild surprise at news.' },
            { term: '嘛 maa3 / mah', def: 'States the obvious, slightly argumentatively: “but it is, isn’t it”.' },
            { term: '添 tim1', def: '“as well, on top of that”, often with a hint of complaint or delight.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Learn them by copying, not by rule',
          text: 'Particle meanings resist clean definitions; two dictionaries will give you two different glosses. The reliable method is to notice which particle a speaker uses in a situation and reuse it in the same situation. Singlish and Manglish speakers already have most of this intuition from Hokkien and Cantonese without knowing it.',
        },
      ],
    },
  ],
}

export default guide
