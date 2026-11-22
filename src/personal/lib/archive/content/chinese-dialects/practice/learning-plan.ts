import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Learning a dialect is not like learning French. There is no syllabus, no exam to aim at, often no class, and in some cases no dictionary you can trust. What there is, usually, is a person: a parent, a grandparent, an aunt, a neighbour, a stall holder. This page is a realistic plan built around that person, plus what to do when there is no such person left.',
  nutshell: [
    '**Record first, study second.** Recordings are perishable in a way that your study time is not.',
    '**Ten minutes daily beats two hours weekly.** Tone memory is built by repetition, not by sittings.',
    '**Use it in week one.** A learner who waits until they are “ready” never starts speaking.',
    '**Shadow real speech**: drama, song, family conversation. Melody before meaning.',
    '**Expect to sound foreign for months.** Everyone does, including heritage speakers returning to a language they heard as a child.',
  ],
  sections: [
    {
      id: 'record',
      title: 'Record your elders, this month',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Ask properly', body: 'Explain that you want to learn and that you want their voice, not a lesson. Most people are flattered; some are embarrassed about their “village” speech. Reassure them that is exactly what you want.' },
            { title: 'Record the basics first', body: 'Numbers one to ten, family terms, days, the greeting, how they answer the phone. These are the words you will use most and the ones most likely to be lost.' },
            { title: 'Then record stories', body: 'A childhood memory, how they came to the country they live in, a recipe made step by step. Stories give you natural speech with sandhi and particles that no word list has.' },
            { title: 'Ask for the same thing twice', body: 'Once at speed, once slowly. The slow version teaches you the citation tones; the fast one teaches you how it really sounds.' },
            { title: 'Keep the files safe and labelled', body: 'Name, dialect, town of origin, date, topic. In ten years this will be a family archive, not just study material.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The window closes',
          text: 'In most diaspora families, fluent dialect speech is held by people over seventy. Vocabulary and whole speech styles disappear with each one. Recording takes an afternoon and cannot be done later.',
        },
      ],
    },
    {
      id: 'week',
      title: 'A week that works',
      blocks: [
        {
          t: 'table',
          head: ['When', 'What', 'How long'],
          rows: [
            ['Every day', 'Tone drill: one set of syllables, spoken aloud', '3 minutes'],
            ['Every day', 'Phrase list: shadow ten phrases at 0.8× speed', '5 minutes'],
            ['Every day', 'Use one phrase with a real person', 'as long as it takes'],
            ['Three times a week', 'Listen to drama, song or a recording of your family with no reading', '10 minutes'],
            ['Once a week', 'Record yourself saying the week’s list; compare with the model', '10 minutes'],
            ['Once a week', 'Add ten new words, chosen from what you actually wanted to say that week', '15 minutes'],
          ],
          caption: 'About twelve minutes a day, with two slightly longer sessions. That is enough to get conversational in a year.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Choose vocabulary from your own failures',
          text: 'Keep a note of the moments you wanted to say something and could not. Those words, learnt that evening, stick. A pre-made frequency list is a poor second: it is somebody else’s life.',
        },
      ],
    },
    {
      id: 'noperson',
      title: 'When there is nobody to practise with',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Cantonese', body: 'Films, TVB drama, Cantopop, news, podcasts, YouTube channels, and a large written colloquial corpus. The richest option by far.', tag: 'abundant' },
            { title: 'Hokkien', body: 'Taiwanese drama and song, church POJ materials, Taiwan’s Ministry of Education dictionary, Penang and Singapore community videos.', tag: 'good' },
            { title: 'Hakka', body: 'Hakka TV in Taiwan, the government proficiency exam syllabus and recordings, folk song archives.', tag: 'decent' },
            { title: 'Teochew', body: 'Opera, community association recordings, some dictionaries. Thin in English.', tag: 'thin' },
            { title: 'Hainanese', body: 'Very little published. Community associations and family recordings are the realistic sources.', tag: 'very thin' },
            { title: 'Any of them', body: 'Online communities of heritage learners exist for all five and are usually generous with corrections. Post a recording, not a transcription.', tag: 'underrated' },
          ],
        },
      ],
    },
    {
      id: 'expect',
      title: 'What to expect',
      blocks: [
        {
          t: 'levels',
          caption: 'Rough milestones for about fifteen minutes a day with occasional conversation.',
          items: [
            { name: 'Weeks 1–4', body: 'You can greet, thank, apologise, order food and count. Your tones are wrong often and people still understand you from context.' },
            { name: 'Months 2–4', body: 'You can hold a short exchange about food, family and where you live. You start hearing tone errors in your own speech, which feels like getting worse and is not.' },
            { name: 'Months 5–9', body: 'You follow family conversation in outline and catch whole sentences. You can ask for what you need and understand the answer about half the time.' },
            { name: 'Year 1 and beyond', body: 'Conversational within familiar topics. Drama and song become comprehensible with effort. Your elders start talking to you in the dialect by default, which is the real finish line.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Heritage learners have it both harder and easier',
          text: 'If you heard the language as a child, your ear is already tuned and your tones will come back faster than you expect. The harder part is social: speaking badly in front of family you have always understood but never answered. Nearly every heritage learner describes that first month as embarrassing and the family reaction as delighted.',
        },
      ],
    },
  ],
}

export default guide
