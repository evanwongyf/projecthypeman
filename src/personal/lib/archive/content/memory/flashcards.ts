import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Flashcards are one of the easiest ways to practise active recall, but badly made cards waste time. A good card asks one clear question with one short answer, and you understand what is on it before you try to memorise it.',
  nutshell: [
    '**Understand first, memorise second.** Cards are for holding what you already understand.',
    '**One fact per card** (the minimum information principle).',
    'Use **cloze deletions**, images and both directions for vocabulary.',
    'Avoid long lists on one card; break them up.',
    'Keep cards in rotation until you have got them right several times, spaced out.',
  ],
  sections: [
    {
      id: 'rules',
      title: 'Rules for good cards',
      lead: 'Adapted from Piotr Wozniak’s "twenty rules".',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Understand before memorising', body: 'A card about something you do not understand becomes meaningless words to memorise, and is quickly forgotten.' },
            { title: 'Keep it minimal', body: 'One fact or idea per card. Complex cards are hard to answer consistently and easy to half-know.' },
            { title: 'Cloze deletion', body: 'Take a sentence and hide one key part: "The mitochondria is the site of [...] respiration." Quick to make, and keeps context.' },
            { title: 'Use images', body: 'A diagram with one label hidden is often better than a text question.' },
            { title: 'Avoid lists', body: 'Instead of "List the 7 characteristics of living things", make seven cards or use a mnemonic.' },
            { title: 'Word it precisely', body: 'The question should have only one right answer. "What happened in 1066?" is vague; "Which battle in 1066 ended Anglo-Saxon rule?" is not.' },
            { title: 'Make it personal', body: 'Link to your own examples and experiences where you can.' },
            { title: 'Add the source', body: 'Note where the fact came from so you can check it.' },
          ],
        },
      ],
    },
    {
      id: 'examples',
      title: 'Before and after',
      blocks: [
        {
          t: 'table',
          head: ['Weak card', 'Better cards'],
          rows: [
            ['Q: Photosynthesis? A: (a paragraph)', 'Q: What gas do plants take in for photosynthesis? A: Carbon dioxide. / Q: Where in the cell does photosynthesis happen? A: Chloroplasts. / Q: What are the products of photosynthesis? A: Glucose and oxygen.'],
            ['Q: Causes of WW1? A: Militarism, alliances, imperialism, nationalism, assassination', 'Q: What does the "A" in MAIN stand for? A: Alliances. (Plus one card per cause asking how it contributed.)'],
            ['Q: Le chat A: The cat', 'Q: le chat → A: the cat, and a reverse card: the cat → le chat (with an image of a cat).'],
          ],
        },
      ],
    },
    {
      id: 'using',
      title: 'Using them well',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Say or write the answer before flipping.',
            'Shuffle the deck, so you do not learn the order.',
            'Keep cards you missed in the deck and come back to them soon.',
            'Review over several days: a card is not learned after one correct answer.',
            'Make your own cards where you can; creating them is itself learning.',
            'Use a spaced repetition app or a [Leitner box](@memory/spaced-repetition).',
          ],
          dont: [
            'Drop cards from the deck the first time you get them right. Learners do this too early (Kornell & Bjork, 2008).',
            'Make hundreds of cards the night before an exam.',
            'Use flashcards for everything. Essays, problem-solving and analysis need other practice too.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          text: 'Studytubby’s decks can hold your flashcards. Keep cards short, and review a few every day rather than a lot once a week.',
        },
      ],
    },
  ],
  sources: [
    'Wozniak, P. (1999). *Effective learning: Twenty rules of formulating knowledge*. supermemo.com',
    'Kornell, N., & Bjork, R. A. (2008). Optimising self-regulated study: The benefits, and costs, of dropping flashcards. *Memory, 16*(2), 125–136.',
    'Kornell, N. (2009). Optimising learning using flashcards: Spacing is more effective than cramming. *Applied Cognitive Psychology, 23*(9), 1297–1317.',
  ],
  related: ['memory/spaced-repetition', 'memory/active-recall', 'memory/vocabulary'],
}

export default guide
