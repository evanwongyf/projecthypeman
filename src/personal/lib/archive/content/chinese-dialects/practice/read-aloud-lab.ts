import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'This page is the speech tool on its own, plus an honest account of what browser voices can and cannot do for each dialect. Use it as a drill room: pick a list, set the speed, play it on a loop and shadow it. Everything runs on your device; nothing is recorded or sent anywhere.',
  nutshell: [
    '**Cantonese and Mandarin voices are real.** Most phones and desktops have them.',
    '**Hokkien, Teochew, Hakka and Hainanese have no browser voice.** Nothing on this page can fix that.',
    '**Shadowing beats listening.** Play at 0.75–0.85×, speak along one beat behind, repeat the same list for a week.',
    '**Use the English button** to drill meaning without the wrong-language problem.',
    '**Every guide has a “Read this guide aloud” control** at the top for the prose.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What the voices can do',
      blocks: [
        {
          t: 'table',
          head: ['Dialect', 'Voice on a typical device', 'What you get', 'What to do instead'],
          rows: [
            ['Mandarin', 'Yes (zh-CN, zh-TW)', 'Correct Mandarin readings of the characters', 'Use as a reference reading, not as the dialect'],
            ['Cantonese', 'Usually (zh-HK)', 'Real Cantonese with usable tones', 'Drill freely; this is the one that works'],
            ['Hokkien', 'No', 'A Mandarin voice reading the characters: a different language', 'Use the romanisation, the tone circle, and Taiwanese media'],
            ['Teochew', 'No', 'Same', 'Find recordings from community associations'],
            ['Hakka', 'No', 'Same', 'Taiwan’s Hakka Affairs Council publishes real audio'],
            ['Hainanese', 'No', 'Same, and the spellings are approximate too', 'Record a speaker; there is no substitute'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Why we do not fake it',
          text: 'It would be easy to pipe Hokkien text to a Mandarin voice and call it audio. That would teach you the wrong pronunciation of every word while sounding authoritative, which is worse than silence. The player says what it is doing, every time.',
        },
      ],
    },
    {
      id: 'drill',
      title: 'Drill sets',
      blocks: [
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'Cantonese tone drill',
          note: 'The six-tone set on one syllable. Play all, then say them yourself with the audio off, then check.',
          items: [
            { hz: '詩', rom: 'si1', en: 'poem' },
            { hz: '史', rom: 'si2', en: 'history' },
            { hz: '試', rom: 'si3', en: 'to try' },
            { hz: '時', rom: 'si4', en: 'time' },
            { hz: '市', rom: 'si5', en: 'market' },
            { hz: '事', rom: 'si6', en: 'matter' },
          ],
        },
        {
          t: 'speak',
          lang: 'cantonese',
          title: 'Cantonese survival set',
          note: 'The twelve lines that cover most daily interactions. Drill until they come out without thinking.',
          items: [
            { hz: '你好', rom: 'nei5 hou2', en: 'Hello' },
            { hz: '唔該', rom: 'm4 goi1', en: 'Thanks / excuse me' },
            { hz: '多謝', rom: 'do1 ze6', en: 'Thank you (for a gift)' },
            { hz: '對唔住', rom: 'deoi3 m4 zyu6', en: 'Sorry' },
            { hz: '我唔明', rom: 'ngo5 m4 ming4', en: 'I don’t understand' },
            { hz: '請講慢啲', rom: 'cing2 gong2 maan6 di1', en: 'Please speak more slowly' },
            { hz: '幾多錢', rom: 'gei2 do1 cin2', en: 'How much?' },
            { hz: '洗手間喺邊度', rom: 'sai2 sau2 gaan1 hai2 bin1 dou6', en: 'Where is the toilet?' },
            { hz: '唔該埋單', rom: 'm4 goi1 maai4 daan1', en: 'The bill, please' },
            { hz: '好好食', rom: 'hou2 hou2 sik6', en: 'Very tasty' },
            { hz: '冇問題', rom: 'mou5 man6 tai4', en: 'No problem' },
            { hz: '拜拜', rom: 'baai1 baai3', en: 'Bye' },
          ],
        },
        {
          t: 'speak',
          lang: 'hokkien',
          title: 'Hokkien survival set',
          note: 'Read these yourself; the buttons cannot speak Hokkien. Use the English button to check meaning, and hum the melody from the tone page.',
          items: [
            { hz: '食飽未', rom: 'tsia̍h-pá--buē', en: 'Have you eaten?' },
            { hz: '多謝', rom: 'to-siā', en: 'Thank you' },
            { hz: '歹勢', rom: 'pháinn-sè', en: 'Sorry / excuse me' },
            { hz: '我聽無', rom: 'guá thiann-bô', en: 'I don’t understand' },
            { hz: '較慢咧', rom: 'khah bān--leh', en: 'A bit slower, please' },
            { hz: '幾錢', rom: 'kuí tsînn', en: 'How much?' },
            { hz: '好食', rom: 'hó-tsia̍h', en: 'Tasty' },
            { hz: '無要緊', rom: 'bô-iàu-kín', en: 'Never mind' },
            { hz: '再會', rom: 'tsài-huē', en: 'Goodbye' },
          ],
        },
      ],
    },
    {
      id: 'how',
      title: 'How to drill',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Set the speed to 0.8×', body: 'Slow enough to hear the tone shape, fast enough to keep the rhythm of real speech.' },
            { title: 'Listen through once with your eyes closed', body: 'No reading. Just the melody.' },
            { title: 'Shadow it', body: 'Play again and speak along a beat behind, copying the pitch before the meaning.' },
            { title: 'Record yourself', body: 'Phone voice memo. Play your version and the model back to back. The gap is always bigger than it feels live.' },
            { title: 'Use one list for a week', body: 'Ten phrases drilled daily beat a hundred read once. Add a new list only when the old one is automatic.' },
            { title: 'Then take it to a person', body: 'Everything above is preparation. The only test that counts is being understood by a speaker.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'If no voices appear',
          text: 'Some browsers only speak after you tap the page, and some phones ship with no Chinese voice until you add one in system settings (look for text-to-speech or speech output). The voice list in the player shows exactly what your device has; a short list is a device setting, not a fault on this page.',
        },
      ],
    },
  ],
}

export default guide
