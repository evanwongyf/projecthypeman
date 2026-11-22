import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    "Cups are the suit of water: feeling, relationships and intuition. They ask what you feel and who you are connected to. Their shadow is moodiness, escapism and dependency. This guide gives the suit’s arc from Ace to King and a browser with all fourteen cards.",
  nutshell: [
    '**Cups** belong to the element **Water** and speak about emotion, love and connection.',
    'The suit runs **Ace to Ten**, then **Page, Knight, Queen and King**: from the seed of an idea to its mastery, then four people or ways of acting.',
    'The **shadow** of the suit is moodiness, escapism and dependency.',
    'Read every card by combining its **number** (the stage) with the **suit** (the area of life).',
    'Use the browser to see all 14 cards with upright and reversed meanings and a question to reflect on.',
  ],
  sections: [
    {
      id: 'cards',
      title: 'The 14 cards',
      blocks: [
        { t: 'tarot', mode: 'deck', suit: 'cups' },
      ],
    },
    {
      id: 'arc',
      title: 'The arc of the suit, card by card',
      blocks: [
        {
          t: 'table',
          head: ['Card', 'Stage', 'In the area of cups'],
          rows: [
            ["Ace", "Overflow", "A wave of feeling, love or creativity"],
            ["Two", "Union", "Mutual attraction, partnership, balance"],
            ["Three", "Celebration", "Friendship, community, shared joy"],
            ["Four", "Apathy", "Withdrawal, boredom, overlooked offers"],
            ["Five", "Loss", "Grief and regret, with something left"],
            ["Six", "Nostalgia", "Memory, kindness, childhood"],
            ["Seven", "Illusion", "Many tempting options, wishful thinking"],
            ["Eight", "Walking away", "Leaving what no longer satisfies"],
            ["Nine", "Contentment", "Satisfaction; the wish card"],
            ["Ten", "Harmony", "Emotional fulfilment, family, belonging"],
            ["Page, Knight, Queen, King", "The court", "Sensitivity, romance, compassion, emotional balance"],
          ],
        },
      ],
    },
    {
      id: 'use',
      title: 'Reading the suit well',
      blocks: [
        {
          t: 'list',
          items: ["Ask whose feelings are involved, and whether they are yours.", "Cups often point to relationships and mood, but also to creativity and intuition.", "Watch for escapism in Seven and Eight of Cups and for ruminating on loss in Five.", "When Cups dominate a spread, the question may be about emotion or connection rather than action."],
        },
        { t: 'callout', tone: 'note', title: 'A convention, not a rule', text: 'Meanings come from a tradition built over about two hundred years. They are a shared vocabulary for reflection. Another reader, or another deck, may emphasise different aspects.' },
        { t: 'links', items: [{ path: 'tarot/cards/major-arcana', note: 'The Major Arcana' }, { path: 'tarot/cards/court-cards', note: 'The court cards across all suits' }, { path: 'tarot/cards/swords', note: 'Next suit' }] },
      ],
    },
  ],
  sources: [
    'Waite, A. E. (1911). The Pictorial Key to the Tarot.',
    'Pollack, R. (1980). Seventy-Eight Degrees of Wisdom. Aquarian Press.',
    'Greer, M. K. (1984). Tarot for Your Self. Newcastle Publishing.',
  ],
  related: ['tarot/cards/major-arcana', 'tarot/cards/court-cards', 'tarot/reading/asking-and-spreads'],
}

export default guide
