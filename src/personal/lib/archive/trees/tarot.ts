import type { ArchiveNode } from '../topics'

// Tarot: how the deck is built, what each of the 78 cards traditionally means, how to read
// a spread, and, as a counterweight, what psychology says about why readings feel accurate.
// Presented as a cultural tradition and a reflective practice, not as a way of predicting the
// future.

export const TAROT: ArchiveNode = {
  slug: 'tarot',
  title: 'Tarot: reading the cards',
  blurb: 'The 78-card deck, its history and symbols, every card and what it traditionally means, how to read spreads, and an honest look at what tarot can and cannot do, with an interactive deck, spread drawer and quiz.',
  glyph: '🔮',
  color: 'color-mix(in srgb, var(--lavender) 60%, var(--pink))',
  tags: ['tarot', 'cards', 'divination', 'major arcana', 'minor arcana', 'spreads', 'celtic cross', 'reading', 'symbolism', 'jung'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What tarot is, what it is not, how to use this shelf, and a way to learn the deck in a few weeks.', minutes: 6, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'foundations',
      title: 'Foundations',
      blurb: 'Where tarot comes from, how the deck is organised, and how to look at a card.',
      glyph: '🂠',
      tags: ['history', 'structure', 'rider-waite', 'marseille', 'symbols'],
      children: [
        { slug: 'history-and-structure', title: 'History and structure of the deck', blurb: 'From Italian card game (tarocchi) to occult tool: the 15th-century origins, Etteilla, the Golden Dawn, Rider-Waite-Smith and Marseille decks, and how the 78 cards are arranged.', minutes: 12, tags: ['history', 'tarocchi', 'golden dawn', 'rider-waite', 'marseille', 'structure'] },
        { slug: 'symbols-and-seeing', title: 'Symbols, numbers, elements and how to look at a card', blurb: 'Suits and elements, numerology of the ranks, colour, figures and gesture, reversals, and a step-by-step method for reading a single card.', minutes: 11, tags: ['symbols', 'numerology', 'elements', 'reversed', 'imagery'] },
      ],
    },
    {
      slug: 'cards',
      title: 'The cards',
      group: 'The 78 cards',
      blurb: 'The Major Arcana (the Fool’s journey) and the four suits of the Minor Arcana, with each card’s upright and reversed meanings, a question to reflect on and a deck browser.',
      glyph: '🃏',
      tags: ['major arcana', 'wands', 'cups', 'swords', 'pentacles', 'court cards', 'fool', 'meanings'],
      children: [
        { slug: 'major-arcana', title: 'The Major Arcana: the Fool’s journey', blurb: 'All 22 cards, from the Fool to the World, read as a story of growth, with meanings, reversals and reflective questions.', minutes: 18, tags: ['major arcana', 'fool', 'magician', 'tower', 'star', 'world', 'journey'] },
        { slug: 'wands', title: 'Wands: fire, will and ambition', blurb: 'The suit of energy, creativity and drive. All 14 cards, Ace to King, with meanings and questions.', minutes: 10, tags: ['wands', 'fire', 'ambition', 'creativity'] },
        { slug: 'cups', title: 'Cups: water, feeling and relationship', blurb: 'The suit of emotion, intuition and connection. All 14 cards, Ace to King.', minutes: 10, tags: ['cups', 'water', 'emotion', 'love'] },
        { slug: 'swords', title: 'Swords: air, thought and conflict', blurb: 'The suit of mind, truth and struggle. All 14 cards, Ace to King.', minutes: 10, tags: ['swords', 'air', 'mind', 'conflict'] },
        { slug: 'pentacles', title: 'Pentacles: earth, work and the material world', blurb: 'The suit of money, craft, health and the physical world. All 14 cards, Ace to King.', minutes: 10, tags: ['pentacles', 'earth', 'money', 'work'] },
        { slug: 'court-cards', title: 'The court cards: people and personalities', blurb: 'Pages, Knights, Queens and Kings across the four suits: how to read them as people, as stages of growth or as ways of acting.', minutes: 10, tags: ['court cards', 'page', 'knight', 'queen', 'king', 'personality'] },
      ],
    },
    {
      slug: 'reading',
      title: 'Reading',
      group: 'The practice',
      blurb: 'How to ask a question, shuffle and draw, lay out a spread, read cards together and write it up, with a spread drawer and a quiz.',
      glyph: '✨',
      tags: ['spread', 'celtic cross', 'three card', 'questions', 'interpretation', 'practice', 'journal'],
      children: [
        { slug: 'asking-and-spreads', title: 'Asking questions and laying out spreads', blurb: 'Good questions, ethical limits, the one-card, three-card, decision and Celtic Cross spreads, with a spread you can draw.', minutes: 13, tags: ['questions', 'spreads', 'celtic cross', 'three card', 'decision'] },
        { slug: 'interpreting-a-reading', title: 'Interpreting a reading: combining cards into a story', blurb: 'Reading cards in relation: dignities, repetition, suits and numbers in a spread, major versus minor, and writing a coherent reading. Worked examples.', minutes: 13, tags: ['interpretation', 'story', 'combinations', 'worked example', 'suits', 'numbers'] },
        { slug: 'practice-and-quiz', title: 'Practice: learning the deck', blurb: 'A four-week plan to learn the cards, a daily-card journal and a quiz.', minutes: 8, tags: ['practice', 'quiz', 'journal', 'daily card', 'learning plan'] },
      ],
    },
    {
      slug: 'psychology-and-evidence',
      title: 'Psychology, evidence and ethics',
      group: 'Thinking clearly',
      blurb: 'Does tarot predict anything? The Barnum effect, cold reading and confirmation bias, tarot as a tool for reflection (and Jung’s ideas), and ethical practice.',
      glyph: '⚖',
      minutes: 14,
      tags: ['barnum effect', 'cold reading', 'confirmation bias', 'jung', 'skepticism', 'ethics', 'pseudoscience', 'projection'],
    },
  ],
}
