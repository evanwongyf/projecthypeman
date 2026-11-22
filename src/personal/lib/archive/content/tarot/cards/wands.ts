import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    "Wands are the suit of fire: energy, ambition, creativity and will. They ask what you want to make happen and whether your energy is pointed at something worthwhile. Their shadow is burnout and ego. This guide gives the suit’s arc from Ace to King and a browser with all fourteen cards.",
  nutshell: [
    '**Wands** belong to the element **Fire** and speak about drive, work and creative energy.',
    'The suit runs **Ace to Ten**, then **Page, Knight, Queen and King**: from the seed of an idea to its mastery, then four people or ways of acting.',
    'The **shadow** of the suit is burnout, impatience and pride.',
    'Read every card by combining its **number** (the stage) with the **suit** (the area of life).',
    'Use the browser to see all 14 cards with upright and reversed meanings and a question to reflect on.',
  ],
  sections: [
    {
      id: 'cards',
      title: 'The 14 cards',
      blocks: [
        { t: 'tarot', mode: 'deck', suit: 'wands' },
      ],
    },
    {
      id: 'arc',
      title: 'The arc of the suit, card by card',
      blocks: [
        {
          t: 'table',
          head: ['Card', 'Stage', 'In the area of wands'],
          rows: [
            ["Ace", "Spark", "A new impulse or project, full of potential"],
            ["Two", "Plan", "Choosing a direction; vision and risk"],
            ["Three", "Expansion", "Early momentum; waiting for results"],
            ["Four", "Celebration", "A milestone, shared joy, home"],
            ["Five", "Competition", "Clashing wills; healthy rivalry or chaos"],
            ["Six", "Victory", "Recognition; success in public"],
            ["Seven", "Defence", "Holding your position under pressure"],
            ["Eight", "Speed", "Fast movement, messages, travel"],
            ["Nine", "Resilience", "Nearly there, wary and tired"],
            ["Ten", "Burden", "Overload; the cost of too much responsibility"],
            ["Page, Knight, Queen, King", "The court", "Enthusiasm, adventure, charisma, vision"],
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
          items: ["Ask whether the energy is directed or scattered.", "Notice where fire is burning out: Nine and Ten of Wands warn of exhaustion.", "Wands often point to work, projects, passion and ambition, but also to anger and impatience.", "When Wands dominate a spread, the question may be about action more than feeling or thought."],
        },
        { t: 'callout', tone: 'note', title: 'A convention, not a rule', text: 'Meanings come from a tradition built over about two hundred years. They are a shared vocabulary for reflection. Another reader, or another deck, may emphasise different aspects.' },
        { t: 'links', items: [{ path: 'tarot/cards/major-arcana', note: 'The Major Arcana' }, { path: 'tarot/cards/court-cards', note: 'The court cards across all suits' }, { path: 'tarot/cards/cups', note: 'Next suit' }] },
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
