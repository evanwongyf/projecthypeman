import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Chinese is not one language. It is a family, and the five dialects on this shelf sit on three different branches of it. This page gives you the family tree, the migrations that carried these languages across Southeast Asia, the layers of older Chinese they preserve, and the sound correspondences that let you spot the same word in Hokkien, Teochew and Cantonese once you know what to look for.',
  nutshell: [
    '**Sinitic splits into about seven to ten branches.** Mandarin is one. Yue (Cantonese), Min (Hokkien, Teochew, Hainanese) and Hakka are others.',
    '**Min split off earliest** and is the most internally diverse branch, which is why Hokkien, Teochew and Hainanese differ so much despite being cousins.',
    '**Southern dialects kept the final stops** -p, -t and -k that Mandarin lost, which is why Tang poetry rhymes better in Cantonese than in Mandarin.',
    '**Migration shaped the map**: Hokkien to Taiwan, Singapore, Penang and Manila; Teochew to Bangkok and Saigon; Cantonese to Hong Kong and the western diaspora; Hakka wherever land was poor and people moved.',
    '**Sound correspondences are learnable.** Mandarin *x-*, Cantonese *h-*, Hokkien *h-* or *kh-*; Mandarin *r-*, Cantonese *j-*, Hokkien *j-* or *l-*. Patterns, not coincidences.',
  ],
  sections: [
    {
      id: 'tree',
      title: 'The family tree',
      blocks: [
        {
          t: 'levels',
          caption: 'A simplified tree. Branch boundaries are debated, and Min is usually agreed to have separated first.',
          items: [
            { name: 'Sino-Tibetan', body: 'The top family, including Chinese, Burmese and Tibetan.' },
            { name: 'Sinitic (Chinese)', body: 'All the “dialects”. Written Chinese sits above them all, which hides how different the spoken forms are.' },
            { name: 'Min 閩', body: 'The oldest split, from Fujian. Divides into Southern Min (Hokkien, Teochew), Eastern Min (Fuzhou), Hainanese and others. Not one language.' },
            { name: 'Yue 粵', body: 'Guangdong and Guangxi. Cantonese is its prestige form; Taishanese and others sit under it.' },
            { name: 'Hakka 客家', body: 'Spoken by communities spread across many provinces rather than one contiguous region, which is the Hakka story in one line.' },
            { name: 'Mandarin 官話', body: 'The northern branch, the basis of Putonghua, Guoyu and Huayu. The dialects on this shelf are not forms of it.' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'How different is “different”?',
          text: 'Linguists often compare Sinitic diversity to Romance. Mandarin and Cantonese are roughly as far apart as French and Spanish; Hokkien and Hainanese, both Min, are further apart than Spanish and Portuguese. Within Hokkien itself, Quanzhou and Zhangzhou speech differ enough to be noticed immediately by locals, and Taiwanese Hokkien is a blend of both.',
        },
      ],
    },
    {
      id: 'history',
      title: 'Where they came from, and where they went',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Han settlement of the south', body: 'Waves of migration from the north from the Han dynasty onward carried Chinese speech into Fujian, Guangdong and Guangxi, where it mixed with the languages already there. Min in particular preserves features from before the Middle Chinese period.' },
            { title: 'Middle Chinese as a common ancestor', body: 'Most modern readings descend from the speech recorded in rhyme dictionaries around the 7th century. Cantonese and Hakka keep its final stops almost intact; Mandarin lost them entirely.' },
            { title: 'Coastal trade and emigration', body: 'From the 16th century, and heavily in the 19th, people left Fujian, Chaoshan, Hainan and the Pearl River Delta for Southeast Asia and the Americas, taking their dialect with them. That is why Hokkien is a Singapore and Penang language, Teochew a Bangkok one, and Cantonese a San Francisco one.' },
            { title: 'Standardisation at home', body: 'Through the 20th century Mandarin became the language of school and broadcast across China, Taiwan and Singapore. Singapore’s Speak Mandarin Campaign from 1979 actively discouraged dialects. Transmission to children broke in two generations.' },
            { title: 'Revival, partial', body: 'Taiwan now teaches Hokkien and Hakka in schools, Hong Kong Cantonese remains a full public language with its own written form, and interest in the others is mostly heritage-driven. Hainanese and Teochew are the most at risk in the diaspora.' },
          ],
        },
        {
          t: 'table',
          head: ['Dialect', 'Diaspora destination', 'Trade they are associated with'],
          rows: [
            ['Hokkien', 'Taiwan, Singapore, Penang, Medan, Manila', 'Shipping, trade, rubber, banking'],
            ['Teochew', 'Bangkok, Saigon, Singapore, Phnom Penh', 'Rice, gambier and pepper, textiles, finance'],
            ['Hainanese', 'Singapore, Bangkok, Malaysia', 'Coffee shops, catering, domestic service, hence Hainanese chicken rice and kopitiam coffee'],
            ['Cantonese', 'Hong Kong, Vancouver, San Francisco, Sydney, London', 'Gold rush and railway labour, restaurants, film'],
            ['Hakka', 'Taiwan, Sabah, Calcutta, Jamaica, Mauritius', 'Farming, tanning, mining, shopkeeping'],
          ],
        },
      ],
    },
    {
      id: 'layers',
      title: 'Literary and colloquial readings',
      blocks: [
        {
          t: 'p',
          text: 'Min dialects, and Hokkien in particular, keep **two readings of many characters**: a literary one borrowed from a prestige standard for reading and formal compounds, and a colloquial one inherited from the spoken language. This is the single most confusing feature for beginners, because the same character has two pronunciations that are not interchangeable.',
        },
        {
          t: 'table',
          head: ['Character', 'Hokkien literary', 'Hokkien colloquial', 'Where each is used'],
          rows: [
            ['人', 'jîn', 'lâng', 'jîn in compounds like 人民 jîn-bîn; lâng for “a person”'],
            ['生', 'sing', 'senn / sinn', 'sing in 先生 sian-sinn; senn for “to be born”'],
            ['十', 'si̍p', 'tsa̍p', 'si̍p in literary compounds; tsa̍p for counting'],
            ['二', 'jī', 'nn̄g', 'jī in 二月 jī-gue̍h (February); nn̄g for “two of something”'],
            ['大', 'tāi', 'tuā', 'tāi in 大學 tāi-ha̍k; tuā for “big”'],
          ],
          caption: 'Cantonese and Hakka have far fewer doublets; Mandarin has almost none.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Why old poems rhyme better in the south',
          text: 'Tang poems were written for a sound system with final -p, -t, -k and a tone category (入聲, the checked tone) that Mandarin lost. Read 《靜夜思》 or 《春曉》 in Cantonese or Hokkien and rhymes that look broken in Mandarin snap back into place. If you ever wondered why older Chinese literature “sounds wrong” read aloud in Mandarin, that is why.',
        },
      ],
    },
    {
      id: 'correspondence',
      title: 'Spotting the same word across dialects',
      lead: 'Once you know a few regular correspondences you stop memorising words one by one.',
      blocks: [
        {
          t: 'table',
          head: ['Meaning', 'Mandarin', 'Cantonese (Jyutping)', 'Hokkien (Tâi-lô)', 'Teochew (Peng’im)', 'Hakka (PFS)'],
          rows: [
            ['one', 'yī', 'jat1', 'it / tsi̍t', 'ig4 / zêg8', 'yit'],
            ['two', 'èr', 'ji6', 'jī / nn̄g', 'no6', 'ngi'],
            ['three', 'sān', 'saam1', 'sann', 'san1', 'sâm'],
            ['person', 'rén', 'jan4', 'lâng', 'nang5', 'ngìn'],
            ['eat', 'chī', 'sik6', 'tsia̍h', 'ziah8', 'sṳ̍t'],
            ['water', 'shuǐ', 'seoi2', 'tsuí', 'zui2', 'súi'],
            ['house', 'wū / fáng', 'uk1', 'tshù', 'cu3', 'vuk'],
            ['tea', 'chá', 'caa4', 'tê', 'dê5', 'chhà'],
          ],
          caption: 'Tea is the classic example: the Min **tê** travelled by sea and gave English *tea*, Dutch *thee* and French *thé*, while the Mandarin-Cantonese **chá** went overland and gave Russian *chai*, Hindi *chāi* and Portuguese *chá*.',
        },
        {
          t: 'list',
          items: [
            'Mandarin **x-** often matches Cantonese **h-** and Hokkien **h-**: 香 xiāng / hoeng1 / hiunn.',
            'Mandarin **r-** matches Cantonese **j-** and Hokkien **j-** or **l-**: 人 rén / jan4 / lâng.',
            'Mandarin **-n** and **-ng** endings often appear as Hokkien nasal vowels written with a double n in Tâi-lô: 三 sān / sann.',
            'Where Mandarin has an open syllable, the southern dialects may keep a stop: 一 yī / jat1 / it, 六 liù / luk6 / la̍k, 十 shí / sap6 / tsa̍p.',
            'Min keeps an older **t-** where Mandarin has **zh-** or **ch-**: 知 zhī / Hokkien tsai, 茶 chá / Hokkien tê.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Correspondences are tendencies',
          text: 'Every rule above has exceptions, because borrowing between dialects has been going on for centuries and the literary layer cuts across the colloquial one. Use them to make a guess and to remember a word you have heard, not to invent words you have never heard.',
        },
      ],
    },
  ],
}

export default guide
