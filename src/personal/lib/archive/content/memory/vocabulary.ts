import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Whether it is French verbs or biology terms, learning vocabulary means linking a word’s form, its meaning and how it is used. The fastest progress comes from spaced flashcards combined with meeting and using words in real contexts.',
  nutshell: [
    'Learn high-frequency words first: a few thousand words cover most of everyday language.',
    'Use spaced flashcards in **both directions** (word → meaning and meaning → word).',
    'Learn words in **context**: an example sentence beats an isolated word.',
    'Make links: word families, roots, images, keyword mnemonics.',
    'Use new words in speaking and writing; recognising is not the same as producing.',
  ],
  sections: [
    {
      id: 'what-to-learn',
      title: 'What to learn first',
      blocks: [
        {
          t: 'p',
          text: 'In most languages, the most common 1,000–2,000 word families make up the large majority of words in everyday texts. Paul Nation’s research suggests learners need to know around 95–98% of the words in a text to understand it comfortably. So frequency lists are the best place to start, and specialist vocabulary comes later.',
        },
        {
          t: 'p',
          text: 'For subject vocabulary in your own language, prioritise the "academic" words used across topics (analyse, significant, factor) and the key terms of each unit. See [teaching vocabulary](@teaching/special-education/needs/speech-language).',
        },
      ],
    },
    {
      id: 'methods',
      title: 'Methods',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Spaced flashcards', body: 'The backbone. Include the word, meaning, an example sentence and audio if possible. See [spaced repetition](@memory/spaced-repetition).' },
            { title: 'Both directions', body: 'Recognising "le chat = the cat" is easier than producing "the cat = le chat". Practise both.' },
            { title: 'Keyword method', body: 'Link the sound of the word to a vivid image of its meaning. Spanish *caballo* (horse) → "cab": a horse driving a cab.' },
            { title: 'Word families', body: 'Learn related forms together: *decide, decision, decisive, indecisive*.' },
            { title: 'Roots and affixes', body: 'Many words share Latin and Greek parts: *bio* (life), *graph* (write), *-ology* (study of).' },
            { title: 'Reading and listening', body: 'Lots of easy reading and listening lets you meet words again and again in context.' },
            { title: 'Use them', body: 'Write sentences, speak with partners, keep a journal. Producing words cements them.' },
            { title: 'Pictures', body: 'For concrete words, link directly to an image instead of a translation.' },
          ],
        },
      ],
    },
    {
      id: 'routine',
      title: 'A daily routine',
      blocks: [
        {
          t: 'example',
          title: '20 minutes a day',
          lines: [
            { label: '10 min', text: 'Spaced repetition reviews, plus 5–10 new words.' },
            { label: '5 min', text: 'Read or listen to something short and easy in the language; note one or two new words.' },
            { label: '5 min', text: 'Write three sentences using words learned this week, or say them aloud.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Nation, I. S. P. (2013). *Learning vocabulary in another language* (2nd ed.). Cambridge University Press.',
    'Atkinson, R. C., & Raugh, M. R. (1975). An application of the mnemonic keyword method to the acquisition of a Russian vocabulary. *Journal of Experimental Psychology: Human Learning and Memory, 1*(2), 126–133.',
  ],
  related: ['memory/flashcards', 'memory/spaced-repetition', 'teaching/techniques/learning-strategies/mnemonics', 'teaching/subjects/languages'],
}

export default guide
