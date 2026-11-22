import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    "Swords are the suit of air: thought, truth, communication and conflict. They cut through confusion, and sometimes wound. They ask what you think and what is true. Their shadow is overthinking, harshness and anxiety. This guide gives the suit’s arc from Ace to King and a browser with all fourteen cards.",
  nutshell: [
    '**Swords** belong to the element **Air** and speak about mind, truth and conflict.',
    'The suit runs **Ace to Ten**, then **Page, Knight, Queen and King**: from the seed of an idea to its mastery, then four people or ways of acting.',
    'The **shadow** of the suit is overthinking, harshness and anxiety.',
    'Read every card by combining its **number** (the stage) with the **suit** (the area of life).',
    'Use the browser to see all 14 cards with upright and reversed meanings and a question to reflect on.',
  ],
  sections: [
    {
      id: 'cards',
      title: 'The 14 cards',
      blocks: [
        { t: 'tarot', mode: 'deck', suit: 'swords' },
      ],
    },
    {
      id: 'arc',
      title: 'The arc of the suit, card by card',
      blocks: [
        {
          t: 'table',
          head: ['Card', 'Stage', 'In the area of swords'],
          rows: [
            ["Ace", "Clarity", "A truth seen clearly; a breakthrough"],
            ["Two", "Stalemate", "A hard choice avoided"],
            ["Three", "Heartbreak", "Painful truth; grief"],
            ["Four", "Rest", "Recovery, retreat, contemplation"],
            ["Five", "Defeat", "Conflict; winning at a cost"],
            ["Six", "Transition", "Leaving trouble; calmer water"],
            ["Seven", "Strategy", "Cunning, stealth, going alone"],
            ["Eight", "Restriction", "Feeling trapped by your own thinking"],
            ["Nine", "Anxiety", "Worry, sleeplessness"],
            ["Ten", "Ending", "A painful finish and the only way is up"],
            ["Page, Knight, Queen, King", "The court", "Curiosity, drive, clear perception, authority"],
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
          items: ["Notice whether a Sword shows a problem in the world or in the mind. Many are about thought itself.", "Swords are often the hardest cards to receive: they are honest, not cruel.", "Look for the way out in the card: the Ten ends, the Nine can be shared, the Eight is loosely tied.", "When Swords dominate a spread, the question may involve worry, conflict or a difficult conversation."],
        },
        { t: 'callout', tone: 'note', title: 'A convention, not a rule', text: 'Meanings come from a tradition built over about two hundred years. They are a shared vocabulary for reflection. Another reader, or another deck, may emphasise different aspects.' },
        { t: 'links', items: [{ path: 'tarot/cards/major-arcana', note: 'The Major Arcana' }, { path: 'tarot/cards/court-cards', note: 'The court cards across all suits' }, { path: 'tarot/cards/pentacles', note: 'Next suit' }] },
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
