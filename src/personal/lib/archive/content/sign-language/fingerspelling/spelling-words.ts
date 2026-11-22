import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Knowing the letters is the start. Spelling a word so someone can read it is about **rhythm**: a steady flow from one shape to the next, with the hand held still. Type any word into the fingerspeller to watch it spelled, then copy it.',
  nutshell: [
    'Keep the hand in one place; only the fingers change.',
    'Aim for an even rhythm, not speed. Clear and steady beats fast and messy.',
    'Do not bounce or "punch" each letter.',
    'For a double letter, slide the hand a little to the side (or give a small bounce for closed letters).',
    'Pause briefly between words, and mouth the word if it helps the watcher.',
  ],
  sections: [
    {
      id: 'tool',
      title: 'The fingerspeller',
      lead: 'Type a word or a name, choose a pace, and press spell. The letter being made lights up.',
      blocks: [{ t: 'sign-tool', tool: 'fingerspeller' }],
    },
    {
      id: 'technique',
      title: 'Good technique',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Hold the hand beside your shoulder, palm forward, elbow relaxed.',
            'Move smoothly from one shape straight into the next.',
            'Keep a steady beat, like saying the letters at an even pace.',
            'Look at the person, not at your hand.',
          ],
          dont: [
            'Bounce or push the hand forward on each letter.',
            'Drop your hand between letters or wave it about.',
            'Rush. Speed comes by itself with practice.',
            'Spell in front of your face, where it hides your expression.',
          ],
        },
        {
          t: 'cards',
          items: [
            { title: 'Double letters', body: 'In HELLO or BOOK, slide the hand slightly sideways (away from your body) for the second letter. The fingerspeller shows this.' },
            { title: 'Between words', body: 'Hold the last letter for a moment, then start the next word. A tiny pause works like a space.' },
            { title: 'Mouthing', body: 'Many signers silently mouth the word while spelling. It helps the watcher, especially with names.' },
            { title: 'Capitals and punctuation', body: 'There are no capital letters in fingerspelling. Numbers use number signs, not spelled words.' },
          ],
        },
      ],
    },
    {
      id: 'lexical',
      title: 'Spellings that became signs',
      blocks: [
        {
          t: 'p',
          text: 'Some short words are fingerspelled so often that they have worn down into signs of their own, with letters blended and a special movement. Signers call these **lexicalised fingerspellings** and write them with a # sign. Common ones include #OK, #JOB, #BUS, #BACK, #NO and #WHAT. Once you can spell the word, watch for the shortcut version in fluent signing.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'When to spell and when to sign',
          text: 'Spell names of people, places and brands, and words that have no common sign. If a sign exists, use it: spelling *house* or *happy* every time is slow and marks you as a beginner.',
        },
      ],
    },
    {
      id: 'drill',
      title: 'A ten-minute drill',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Two minutes: the alphabet', body: 'A to Z at a slow, even beat. Then Z to A.' },
            { title: 'Three minutes: your name', body: 'Spell your full name until it flows. You will spell it in every introduction.' },
            { title: 'Three minutes: word families', body: 'Words that share letters train the movements between them: cat, hat, mat, bat; sing, ring, king.' },
            { title: 'Two minutes: watch and copy', body: 'Type a word into the fingerspeller at the fluent pace, watch it once, then spell it yourself and compare.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Padden, C. (1998). The ASL lexicon. *Sign Language & Linguistics*, 1(1), 39–60.',
    'Battison, R. (1978). *Lexical Borrowing in American Sign Language*. Linstok Press.',
  ],
  related: ['sign-language/fingerspelling/alphabet', 'sign-language/fingerspelling/reading'],
}

export default guide
