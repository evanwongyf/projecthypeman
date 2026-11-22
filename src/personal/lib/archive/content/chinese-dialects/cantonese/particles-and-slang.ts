import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Cantonese puts an unusual amount of meaning in the little words at the end of a sentence. Textbooks teach the grammar and skip the particles, which is why a learner can be grammatically correct and still sound abrupt, or sarcastic, or oddly formal. This page covers the particles that do the real work, the verb endings around them, comparison and negation, and the everyday slang that will not be in a course book.',
  nutshell: [
    '**The final particle sets the mood**: 啦 laa1 softens, 咩 me1 doubts, 囉 lo1 resigns, 喎 wo3 reports, 添 tim1 adds.',
    '**Verb endings carry aspect**: 咗 zo2 finished, 緊 gan2 ongoing, 過 gwo3 ever, 晒 saai3 all of it, 返 faan1 back.',
    '**Two negatives**: 唔 m4 for “not”, 冇 mou5 for “have not / did not”.',
    '**Comparison** is X 過 gwo3 Y: 佢高過我 keoi5 gou1 gwo3 ngo5, he is taller than me.',
    '**Slang moves fast.** Learn it from people and media, and check before repeating anything you do not fully understand.',
  ],
  sections: [
    {
      id: 'particles',
      title: 'The particles',
      blocks: [
        {
          t: 'table',
          head: ['Particle', 'What it does', 'Example'],
          rows: [
            ['啦 laa1', 'Softens a suggestion, or closes a matter', '走啦 zau2 laa1, let’s go then'],
            ['喇 laa3', 'Marks a change of state: now it is so', '食咗喇 sik6 zo2 laa3, I’ve eaten now'],
            ['呀 aa3', 'Friendly; makes a question gentle', '你好呀 nei5 hou2 aa3'],
            ['咩 me1', 'Surprised disbelief', '真係咩 zan1 hai6 me1?, really?'],
            ['囉 lo1', 'Obvious, or resigned', '係囉 hai6 lo1, well, yes, obviously'],
            ['喎 wo3', 'Reporting, or mild surprise at news', '佢唔嚟喎 keoi5 m4 lai4 wo3, apparently he’s not coming'],
            ['嘅 ge3', 'Asserts a fact, or marks possession', '我嘅 ngo5 ge3, mine'],
            ['添 tim1', '“as well, on top of that”', '仲落雨添 zung6 lok6 jyu5 tim1, and it’s raining too'],
            ['啫 ze1', '“only, just that much”', '十蚊啫 sap6 man1 ze1, it’s only ten dollars'],
            ['嘛 maa3', 'States the obvious, slightly argumentative', '係嘛 hai6 maa3, well it is, isn’t it'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Learn them in pairs with a situation',
          text: 'Particles resist definition but not imitation. When you hear one, note the situation rather than the gloss: “she used 囉 when stating something everyone already knew”. Three such notes teach you more than a dictionary entry.',
        },
      ],
    },
    {
      id: 'verbs',
      title: 'Verb endings',
      blocks: [
        {
          t: 'table',
          head: ['Ending', 'Meaning', 'Example'],
          rows: [
            ['咗 zo2', 'Completed', '我食咗 ngo5 sik6 zo2, I’ve eaten'],
            ['緊 gan2', 'In progress', '我食緊 ngo5 sik6 gan2, I’m eating'],
            ['過 gwo3', 'Have ever done', '我去過 ngo5 heoi3 gwo3, I’ve been there'],
            ['晒 saai3', 'All of it, completely', '食晒 sik6 saai3, ate the lot'],
            ['返 faan1', 'Back, again, or restoring', '返工 faan1 gung1, go to work; 食返啲 sik6 faan1 di1, eat a bit (to recover)'],
            ['住 zyu6', 'For now, hold off', '等住 dang2 zyu6, wait for now'],
            ['吓 haa5', 'A little, briefly', '睇吓 tai2 haa5, have a quick look'],
          ],
        },
        {
          t: 'example',
          title: 'Stacking them',
          lines: [
            { label: 'Base', text: '食 sik6, eat' },
            { label: 'Finished', text: '食咗 sik6 zo2, have eaten' },
            { label: 'Finished all of it', text: '食晒 sik6 saai3, ate it all' },
            { label: 'Finished all of it, and I am telling you now', text: '食晒喇 sik6 saai3 laa3' },
            { label: 'Finished all of it, which is a shame', text: '食晒喇喎 sik6 saai3 laa3 wo3' },
          ],
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Patterns worth memorising',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Use', 'Example'],
          rows: [
            ['A 唔 A', 'Yes-no question', '好唔好 hou2 m4 hou2?, is it good?'],
            ['有冇', 'Do you have / did you', '有冇食 jau5 mou5 sik6?, have you eaten?'],
            ['X 過 Y', 'Comparison', '佢高過我 keoi5 gou1 gwo3 ngo5, he’s taller than me'],
            ['最 X', 'Superlative', '最平 zeoi3 peng4, the cheapest'],
            ['同 X 一齊', 'Together with', '同我一齊去 tung4 ngo5 jat1 cai4 heoi3, come with me'],
            ['唔好 + verb', 'Don’t do it', '唔好行 m4 hou2 haang4, don’t walk'],
            ['可唔可以', 'May I / can you', '可唔可以幫我 ho2 m4 ho2 ji5 bong1 ngo5?, can you help me?'],
          ],
        },
      ],
    },
    {
      id: 'slang',
      title: 'Everyday slang',
      blocks: [
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'Words you will hear but not find in a textbook',
          note: 'All mild. Cantonese has a famous set of vulgar expressions that this shelf leaves out; if you hear a word that gets a reaction, ask what it means before repeating it.',
          items: [
            { hz: '犀利', rom: 'sai1 lei6', en: 'Impressive, formidable' },
            { hz: '好正', rom: 'hou2 zeng3', en: 'Excellent, exactly right' },
            { hz: '麻麻哋', rom: 'maa4 maa2 dei2', en: 'So-so, not great' },
            { hz: '搞掂', rom: 'gaau2 dim6', en: 'Sorted, done' },
            { hz: '唔使急', rom: 'm4 sai2 gap1', en: 'No rush' },
            { hz: '慢慢嚟', rom: 'maan6 maan2 lai4', en: 'Take it slowly' },
            { hz: '執生', rom: 'zap1 saang1', en: 'Improvise, deal with it as it comes' },
            { hz: '食咗飯未', rom: 'sik6 zo2 faan6 mei6', en: 'Have you eaten? (also just a greeting)' },
            { hz: '返工', rom: 'faan1 gung1', en: 'Go to work' },
            { hz: '收工', rom: 'sau1 gung1', en: 'Knock off work' },
            { hz: '唔好意思，借借', rom: 'm4 hou2 ji3 si1, ze3 ze3', en: 'Excuse me, let me through' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Register matters more than vocabulary',
          text: 'Slang used by a learner lands differently from slang used by a native speaker. Start with the neutral forms, add slang only after you have heard it used by someone in your situation, and never deploy a phrase whose strength you are unsure of.',
        },
      ],
    },
  ],
}

export default guide
