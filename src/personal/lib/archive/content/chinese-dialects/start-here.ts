import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Hokkien, Cantonese, Hakka, Teochew and Hainanese are not accents of Mandarin. They are separate spoken languages in the Chinese family, as far apart from Mandarin and from each other as Portuguese is from French. Most of them are losing speakers fast, which is usually why people come looking for them: a grandparent speaks one and you do not. This page says what the five are, which to start with, what this shelf can and cannot teach you, and how the read-aloud tools work.',
  nutshell: [
    '**Five languages, three branches.** Hokkien, Teochew and Hainanese are Southern Min; Cantonese is Yue; Hakka is its own branch. Within Min, Hokkien and Teochew are close relatives; Hainanese is the odd one out.',
    '**They are not mutually intelligible.** A Cantonese speaker cannot follow Hokkien any more than an Italian can follow Romanian. Shared writing hides this, because the characters are read differently in each.',
    '**Tone does most of the work.** Cantonese has six tones, Hokkien seven, Teochew eight. Getting the tone wrong changes the word, not the mood.',
    '**Start with the one you will hear.** The best dialect to learn is the one spoken by someone who will talk to you weekly. Nothing else comes close as a predictor of progress.',
    '**The read-aloud is honest about its limits.** Devices have Mandarin and usually Cantonese voices. There is no browser voice for Hokkien, Teochew, Hakka or Hainanese, so for those the tool reads romanisation and meanings, and says plainly that the characters would come out in the wrong language.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What these five are',
      lead: 'A quick orientation before any vocabulary.',
      blocks: [
        {
          t: 'table',
          head: ['Dialect', 'Branch', 'Heartland', 'Also widely spoken in', 'Tones'],
          rows: [
            ['Hokkien 福建話', 'Southern Min (Minnan)', 'Quanzhou, Zhangzhou, Xiamen (Fujian)', 'Taiwan, Singapore, Penang and Medan, the Philippines', 'Seven in use'],
            ['Teochew 潮州話', 'Southern Min', 'Chaoshan: Chaozhou, Shantou, Jieyang', 'Bangkok, Singapore, Cambodia, Vietnam', 'Eight'],
            ['Hainanese 海南話', 'Southern Min (Qiongwen)', 'Hainan island', 'Singapore, Thailand, Malaysia', 'Usually five to seven described'],
            ['Cantonese 廣東話', 'Yue', 'Guangzhou, Hong Kong, Macau', 'Malaysia (Ipoh, KL), Vancouver, San Francisco, London', 'Six'],
            ['Hakka 客家話', 'Hakka', 'Meizhou, parts of Fujian, Jiangxi', 'Taiwan, Sabah, Calcutta, Mauritius', 'Six in Sixian'],
          ],
          caption: 'Speaker numbers for all five are falling in their heartlands as Mandarin dominates schooling and media.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '“They are just dialects, so they must be close”',
          text: 'The English word *dialect* does a lot of damage here. 方言 fāngyán means a regional speech variety, and in Chinese usage it covers languages that cannot understand each other. Linguists usually call Min, Yue, Hakka and Mandarin separate **languages** within Sinitic, and Min alone is more internally diverse than the whole Romance family. If you learn Hokkien you will not be able to follow Cantonese.',
        },
        {
          t: 'p',
          text: 'What they do share is vocabulary inherited from older stages of Chinese, and a common writing system. A Teochew speaker and a Hokkien speaker can often spot cognates once they know the sound correspondences: Hokkien **tsia̍h** and Teochew **ziah** are the same word for “eat”. That is why this shelf teaches sound correspondences rather than isolated words wherever it can.',
        },
      ],
    },
    {
      id: 'choose',
      title: 'Which one to learn first',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Someone will talk to you', body: 'If a grandparent, parent, in-law or colleague speaks one of these daily, learn that one. Weekly conversation beats any course.', tag: 'strongest reason' },
            { title: 'You want media to practise with', body: 'Cantonese wins by a distance: films, songs, news, dramas, podcasts, and a written colloquial form you can read. Hokkien is second through Taiwanese drama and song.', tag: 'Cantonese' },
            { title: 'You live in Singapore or Malaysia', body: 'Hokkien and Cantonese dominate the older generation, with Teochew and Hainanese common in food and family businesses. Hawker vocabulary is a good entry point.', tag: 'Hokkien' },
            { title: 'You are tracing family', body: 'Learn the one your family actually spoke, even if materials are thin. Record your elders first: that recording is worth more than any textbook, and it will not be available forever.', tag: 'urgent' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Record your elders this month',
          text: 'Phone voice memos are enough. Ask them to say the numbers, the family terms, a childhood story and a recipe. You will not be able to transcribe it at first, and that is fine; the recording keeps while your ear catches up. This is the single most valuable thing on this page.',
        },
      ],
    },
    {
      id: 'how',
      title: 'How to use this shelf',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the two foundation pages', body: '**How the dialects relate** gives you the map, and **Tones and intonation** gives you the single hardest skill. Do not skip the tone page: it is what separates “understood” from “politely confused looks”.' },
            { title: 'Learn to read one romanisation', body: 'Jyutping for Cantonese, Tâi-lô for Hokkien, Peng’im for Teochew, Pha̍k-fa-sṳ for Hakka. It takes an evening and it unlocks every dictionary and song lyric for that dialect.' },
            { title: 'Work one dialect’s pages in order', body: 'Basics, then tones, then phrases, then numbers. Say every line out loud; silent reading teaches you nothing about a tonal language.' },
            { title: 'Drill with the read-aloud lab', body: 'Set the speed to about 0.8×, play a phrase list, and shadow it: speak along a beat behind, copying the melody rather than the words.' },
            { title: 'Take it to a person', body: 'Use what you have with a speaker within the first week. Hokkien **食飽未** or Cantonese **食咗飯未** in the right place will get you a warmer response than a perfect accent learnt in private.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'What this shelf is not',
          text: 'It is written by a non-native learner’s reference standard: the varieties taught are the common teaching ones (Taiwanese/Amoy Hokkien, Hong Kong Cantonese, Sixian Hakka, Chaozhou Teochew, Wenchang/Haikou Hainanese). Your family’s village speech will differ in tone values, vocabulary and sometimes grammar, and **they are not wrong**. Where sources disagree, the pages say so. For Hainanese especially, treat the spellings as an approximation to check with a speaker.',
        },
      ],
    },
    {
      id: 'speech',
      title: 'The read-aloud tools',
      blocks: [
        {
          t: 'p',
          text: 'Every guide on this shelf has a **Read this guide aloud** control at the top, which uses the voices installed on your device. Phrase tables have their own player with a voice picker and a speed slider. Nothing is recorded, uploaded or stored.',
        },
        {
          t: 'table',
          head: ['Dialect', 'Browser voice?', 'What the player does'],
          rows: [
            ['Mandarin', 'Yes, almost everywhere (zh-CN)', 'Reads characters correctly in Mandarin. Useful as a reference reading.'],
            ['Cantonese', 'Usually (zh-HK)', 'Reads characters in Cantonese. Quality varies; tones are usually right.'],
            ['Hokkien', 'No', 'Offers the English meaning, and will read characters only with a warning that it is coming out in Mandarin.'],
            ['Teochew', 'No', 'Same as Hokkien.'],
            ['Hakka', 'No', 'Same. Taiwan’s Hakka Affairs Council publishes real recordings if you want audio.'],
            ['Hainanese', 'No', 'Same, and the spellings themselves are approximate.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'If nothing plays',
          text: 'Some browsers only allow speech after you have tapped something on the page, and some phones have no Chinese voice until you install one in the system language settings. The player lists the voices it can see, so if the list is short, that is a device setting rather than a bug here.',
        },
      ],
    },
  ],
}

export default guide
