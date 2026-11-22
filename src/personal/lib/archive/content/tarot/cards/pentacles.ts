import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    "Pentacles are the suit of earth: work, money, the body and the practical world. They ask what you have, what you are building and what you value. Their shadow is rigidity and over-attachment to security. This guide gives the suit’s arc from Ace to King and a browser with all fourteen cards.",
  nutshell: [
    '**Pentacles** belong to the element **Earth** and speak about work, money and the material world.',
    'The suit runs **Ace to Ten**, then **Page, Knight, Queen and King**: from the seed of an idea to its mastery, then four people or ways of acting.',
    'The **shadow** of the suit is rigidity, materialism and stagnation.',
    'Read every card by combining its **number** (the stage) with the **suit** (the area of life).',
    'Use the browser to see all 14 cards with upright and reversed meanings and a question to reflect on.',
  ],
  sections: [
    {
      id: 'cards',
      title: 'The 14 cards',
      blocks: [
        { t: 'tarot', mode: 'deck', suit: 'pentacles' },
      ],
    },
    {
      id: 'arc',
      title: 'The arc of the suit, card by card',
      blocks: [
        {
          t: 'table',
          head: ['Card', 'Stage', 'In the area of pentacles'],
          rows: [
            ["Ace", "Opportunity", "A material seed: a job, project or resource"],
            ["Two", "Balance", "Juggling priorities, adaptability"],
            ["Three", "Craft", "Teamwork, skill, learning"],
            ["Four", "Security", "Saving, control, holding on"],
            ["Five", "Hardship", "Loss, need, isolation"],
            ["Six", "Giving", "Generosity and fair exchange"],
            ["Seven", "Patience", "Assessing growth, waiting for the harvest"],
            ["Eight", "Diligence", "Skill, dedicated practice"],
            ["Nine", "Abundance", "Self-sufficiency, reward"],
            ["Ten", "Legacy", "Long-term wealth, family, stability"],
            ["Page, Knight, Queen, King", "The court", "Study, steadiness, nurture, abundance and discipline"],
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
          items: ["Ask what is practical and what is long-term. Pentacles value patience.", "The suit covers work and money, but also health, home and the body.", "Watch for clinging in the Four of Pentacles and for isolation in the Five.", "When Pentacles dominate a spread, the question may be about work, resources or practical steps."],
        },
        { t: 'callout', tone: 'note', title: 'A convention, not a rule', text: 'Meanings come from a tradition built over about two hundred years. They are a shared vocabulary for reflection. Another reader, or another deck, may emphasise different aspects.' },
        { t: 'links', items: [{ path: 'tarot/cards/major-arcana', note: 'The Major Arcana' }, { path: 'tarot/cards/court-cards', note: 'The court cards across all suits' }, { path: 'tarot/cards/court-cards', note: 'Next suit' }] },
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
