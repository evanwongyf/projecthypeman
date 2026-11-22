import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A tarot card is a small picture crowded with clues: a number, a colour, a figure’s posture, a landscape, an object in the hand. Beginners often memorise a one-line meaning and stop. Skilled readers look. This guide gives you a method for looking at a card: what the number says, what the suit and element add, what the figures are doing and how to treat reversals. Then you will practise it on a single card before moving to spreads.',
  nutshell: [
    '**Number** tells you the stage of a process: Aces are beginnings, Fives are conflict, Tens are completion (or excess).',
    '**Suit** tells you the area of life: Wands (action), Cups (feeling), Swords (thought), Pentacles (the material).',
    '**Imagery** supplies the story: what is the figure doing, looking at, holding or turning away from?',
    '**Reversed** cards are optional. They can be read as the opposite, as a blocked or internal version of the upright meaning, or as an excess.',
    'A good habit: **describe before interpreting**. Say what you see, then what it might mean for the question.',
  ],
  sections: [
    {
      id: 'numbers',
      title: 'The numbers',
      blocks: [
        {
          t: 'table',
          head: ['Number', 'Theme', 'In practice'],
          rows: [
            ['Ace (1)', 'Seed, opportunity', 'A new beginning in the suit’s area, offered but not yet developed'],
            ['Two', 'Duality, choice, balance', 'A decision, a pairing, a pause between options'],
            ['Three', 'Growth, collaboration', 'Early results, a team, something takes shape'],
            ['Four', 'Stability, structure', 'A foundation, rest, or stagnation'],
            ['Five', 'Conflict, loss, change', 'Disruption that tests the structure'],
            ['Six', 'Harmony, passage', 'Recovery, generosity, a move to calmer waters'],
            ['Seven', 'Assessment, challenge', 'Testing, reflection, defending a position'],
            ['Eight', 'Movement, mastery', 'Speed, work, change of direction'],
            ['Nine', 'Near completion, solitude', 'The last stretch, resilience or isolation'],
            ['Ten', 'Completion, culmination', 'A cycle ends: fulfilment, or overload and burden'],
          ],
          caption: 'A simplified numerology. It gives a pattern across suits, so you can derive many meanings from two rules: suit plus number.',
        },
        { t: 'callout', tone: 'tip', title: 'A shortcut that works', text: 'Combine suit and number. The Five of Cups is “conflict or loss” (Five) in the area of “emotion” (Cups): grief or disappointment. The Three of Pentacles is “collaboration” (Three) in “work” (Pentacles): teamwork or craft.' },
      ],
    },
    {
      id: 'elements',
      title: 'Suits and elements',
      blocks: [
        {
          t: 'table',
          head: ['Suit', 'Element', 'Ask about', 'Strengths', 'Shadow'],
          rows: [
            ['Wands', 'Fire', 'What drives me? What do I want to make happen?', 'Enthusiasm, courage, creativity', 'Impatience, burnout, ego'],
            ['Cups', 'Water', 'How do I feel? Who am I connected to?', 'Empathy, intuition, love', 'Moodiness, escapism, dependency'],
            ['Swords', 'Air', 'What do I think? What is true?', 'Clarity, honesty, analysis', 'Overthinking, harshness, anxiety'],
            ['Pentacles', 'Earth', 'What do I have? What am I building?', 'Reliability, practicality, patience', 'Rigidity, materialism, stagnation'],
          ],
        },
        { t: 'p', text: 'Some readers also use **elemental dignities**: cards of friendly elements (fire and air, water and earth) strengthen each other, while hostile elements (fire and water, air and earth) weaken or complicate each other. It is a tool for reading cards that sit next to each other, and many readers ignore it.' },
      ],
    },
    {
      id: 'look',
      title: 'How to look at a card',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Describe it neutrally', body: 'Say out loud what you see: “A person stands on a cliff with a small dog and a bag, looking up.” Do not interpret yet.' },
            { title: '2. Notice the focus', body: 'Where do the figures look? What are they doing? What is in the foreground and what is behind them?' },
            { title: '3. Read the number and suit', body: 'What stage and what area of life does the card point to?' },
            { title: '4. Colour and mood', body: 'Is it warm or cold, bright or dark, calm or tense? Colour changes the feeling of a card.' },
            { title: '5. Check the traditional meaning', body: 'Compare your reading with the upright (or reversed) keywords and question. They are a reference, not a cage.' },
            { title: '6. Relate it to the question', body: 'How does this card speak to what you asked? What does it make you think about?' },
          ],
        },
        { t: 'tarot', mode: 'deck', suit: 'major' },
      ],
    },
    {
      id: 'rev',
      title: 'Reversed cards',
      blocks: [
        { t: 'p', text: 'When a card lands upside down it is reversed. Many readers do not use reversals at all and read every card upright; others find them useful. There is no single rule.' },
        {
          t: 'table',
          head: ['Approach', 'How it works', 'Example: The Sun reversed'],
          rows: [
            ['Opposite meaning', 'The reversed card means the reverse of the upright one', 'Gloom, sadness'],
            ['Blocked or delayed', 'The energy is present but held up', 'Joy that is delayed or hard to feel'],
            ['Internal or private', 'The energy is working inside rather than outwardly', 'Quiet, private contentment'],
            ['Excess or shadow', 'The upright quality taken too far', 'Overconfidence or naivety'],
            ['Ignore reversals', 'Read every card upright', 'Joy, success'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Choose one approach and stay with it', text: 'Consistency makes your readings easier to compare and learn from. If you are new, start without reversals and add them when the upright meanings feel familiar.' },
        { t: 'links', items: [{ path: 'tarot/cards/major-arcana', note: 'Next: the Major Arcana' }, { path: 'tarot/reading/practice-and-quiz', note: 'Practise with a one-card draw' }] },
      ],
    },
  ],
  sources: [
    'Waite, A. E. (1911). The Pictorial Key to the Tarot.',
    'Greer, M. K. (1984). Tarot for Your Self. Newcastle Publishing (a reflective, psychological approach).',
    'Pollack, R. (1980). Seventy-Eight Degrees of Wisdom. Aquarian Press.',
    'Place, R. M. (2005). The Tarot: History, Symbolism, and Divination. Tarcher/Penguin.',
  ],
  related: ['tarot/foundations/history-and-structure', 'tarot/cards/major-arcana', 'tarot/reading/asking-and-spreads'],
}

export default guide
