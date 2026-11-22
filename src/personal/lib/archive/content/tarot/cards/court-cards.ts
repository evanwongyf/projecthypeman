import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The sixteen court cards, Page, Knight, Queen and King in each suit, are the hardest to learn and the most flexible to read. They can stand for people in your life, for aspects of yourself, for stages of development, or for ways of acting. There is no single rule, and good readers decide in context. This guide sets out the four ranks, a table of all sixteen with a short meaning each, and four ways of deciding how to read them.',
  nutshell: [
    'Each rank has a **character**: the **Page** is a learner, the **Knight** a pursuer, the **Queen** a master who nurtures inwardly, the **King** a master who rules outwardly.',
    'Each suit gives the **style**: fire (Wands) is energy, water (Cups) feeling, air (Swords) thought, earth (Pentacles) practicality.',
    'A court card can be **a person**, **a part of you**, **a stage** or **an approach**. Decide in context.',
    'Do not assume a court card means a specific real person. Use it as a description of a quality.',
    'Some decks rename them (Princess, Prince, Queen, King).',
  ],
  sections: [
    {
      id: 'ranks',
      title: 'The four ranks',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Page', title: 'The learner', body: 'Curiosity, a new message, beginner’s enthusiasm. The youngest rank: a student, a messenger, someone starting out.' },
            { tag: 'Knight', title: 'The seeker in motion', body: 'Action, pursuit of a goal, a quest. The strengths and excesses of the suit pushed to an extreme: fast, driven, sometimes rash.' },
            { tag: 'Queen', title: 'The inward master', body: 'Mastery expressed through care, intuition and presence. Authority felt rather than imposed.' },
            { tag: 'King', title: 'The outward master', body: 'Mastery expressed through leadership, decision and responsibility. Authority exercised.' },
          ],
        },
        { t: 'tarot', mode: 'deck', suit: 'wands' },
      ],
    },
    {
      id: 'all',
      title: 'All sixteen at a glance',
      blocks: [
        {
          t: 'table',
          head: ['', 'Wands (fire)', 'Cups (water)', 'Swords (air)', 'Pentacles (earth)'],
          rows: [
            ['Page', 'Enthusiastic explorer; a message of opportunity', 'Sensitive dreamer; a gentle message or creative spark', 'Curious questioner; a keen mind, vigilance', 'Diligent student; a practical opportunity'],
            ['Knight', 'Adventurer; passion and speed, sometimes reckless', 'Romantic; follows the heart, idealist', 'Charging thinker; direct, fast, tactless', 'Steady worker; reliable, slow, thorough'],
            ['Queen', 'Warm, confident, charismatic leader', 'Compassionate, intuitive, emotionally secure', 'Independent, honest, clear-sighted', 'Nurturing provider; practical, down-to-earth'],
            ['King', 'Visionary leader, bold and entrepreneurial', 'Emotionally balanced, diplomatic and wise', 'Intellectual authority; fair judgement', 'Successful, secure, disciplined provider'],
          ],
        },
        { t: 'tarot', mode: 'deck', suit: 'cups' },
      ],
    },
    {
      id: 'how',
      title: 'Four ways to read a court card',
      blocks: [
        {
          t: 'table',
          head: ['As…', 'Question to ask', 'Example: Queen of Swords'],
          rows: [
            ['A person in your life', 'Who has these qualities? (Describe the type, do not name someone and assume)', 'A direct, independent person whose honesty may help or sting'],
            ['A part of you', 'Which part of me is active in this situation?', 'My own honest, clear-sighted side'],
            ['A stage or role', 'What stage of mastery am I at?', 'Mastery of clear thinking, learnt through experience'],
            ['An approach to advice', 'How should I act here?', 'Act with candour and clear boundaries'],
          ],
        },
        {
          t: 'dodont',
          do: ['Describe the quality and let the querent decide if it applies.', 'Notice the gender-neutral ways of reading: any person can embody any court card.', 'Use the court card to describe style, then check the question.'],
          dont: ['Assume Queens are always women or Kings always men.', 'Use a court card to accuse a named person of something.', 'Insist on one reading. Offer more than one and see which resonates.'],
        },
        { t: 'tarot', mode: 'deck', suit: 'swords' },
        { t: 'links', items: [{ path: 'tarot/reading/asking-and-spreads', note: 'Next: asking questions and laying out spreads' }, { path: 'tarot/foundations/symbols-and-seeing', note: 'How to look at a card' }] },
      ],
    },
  ],
  sources: [
    'Waite, A. E. (1911). The Pictorial Key to the Tarot.',
    'Pollack, R. (1980). Seventy-Eight Degrees of Wisdom.',
    'Greer, M. K. (1984). Tarot for Your Self.',
  ],
  related: ['tarot/cards/wands', 'tarot/cards/cups', 'tarot/reading/asking-and-spreads'],
}

export default guide
