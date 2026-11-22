import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A reading starts before any card is drawn, with the question. A good question is open, concerns you and points towards something you can act on. A spread then gives each card a place and a role, so that the draw becomes a small story. This guide explains how to ask well, what to avoid, and how the common spreads work, from a single card to the ten-card Celtic Cross. Below you can draw each spread and write down your own reading, saved in this browser.',
  nutshell: [
    'Ask **open questions about you and your choices** (“What do I need to understand about…?”) rather than **yes or no** or **prediction** questions.',
    'Do not ask about **other people’s private thoughts or secrets**, and do not use tarot for **medical, legal or financial** decisions.',
    'A **spread** assigns each card a **position** (past, challenge, advice…). The position gives the card its job.',
    '**Shuffle**, draw, and read the cards in the order of the positions. Give each card a minute before combining them.',
    'Write down your reading. Reflection is where the value lies.',
  ],
  sections: [
    {
      id: 'questions',
      title: 'Asking a good question',
      blocks: [
        {
          t: 'table',
          head: ['Weak question', 'Why', 'Better question'],
          rows: [
            ['Will I get the job?', 'Yes or no, about the future; nothing to reflect on', 'What strengths should I bring to this interview, and what should I be ready for?'],
            ['Does he love me?', 'About another person’s inner life', 'What do I want from this relationship, and what is getting in the way?'],
            ['When will I be rich?', 'A prediction with a date', 'What attitudes towards money are shaping my choices?'],
            ['Should I leave my job?', 'Hands the decision to the cards', 'What does staying offer me, what does leaving offer me, and what am I not seeing?'],
            ['What is wrong with me?', 'Harsh and vague', 'What would help me feel more settled at the moment?'],
          ],
        },
        {
          t: 'dodont',
          do: ['Start with “what”, “how” or “what would help”.', 'Focus on your own attitudes and choices.', 'Keep the question short and specific.', 'Be willing to hear things you did not expect.'],
          dont: ['Ask the same question again and again until you like the answer.', 'Ask about the secret behaviour of another person.', 'Treat a card as an order.', 'Read when you are in acute distress and need real help instead.'],
        },
      ],
    },
    {
      id: 'method',
      title: 'The method',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Settle', body: 'Take a minute. Put your phone away. Decide the question and write it down.' },
            { title: 'Choose a spread', body: 'Match the spread to the question: one card for a daily prompt, three for a situation, five for a decision, ten for a detailed review.' },
            { title: 'Shuffle and draw', body: 'Shuffle for as long as you like, then draw the number of cards the spread needs. Place them in order, face down, then turn them over one at a time.' },
            { title: 'Read each card in its position', body: 'Describe the card, then say what it suggests for that position.' },
            { title: 'Look at the whole', body: 'How do the cards relate? Is there a theme? What is missing?' },
            { title: 'Write and reflect', body: 'Summarise in a few sentences and write one thing you will do or think about.' },
          ],
        },
      ],
    },
    {
      id: 'lab',
      title: 'Draw a spread',
      blocks: [
        { t: 'tarot', mode: 'spread' },
        {
          t: 'table',
          head: ['Spread', 'Cards', 'Positions', 'Use'],
          rows: [
            ['One card', '1', 'Focus', 'A daily prompt, a quick check-in'],
            ['Past, present, future', '3', 'What shaped this; where you are; what is emerging', 'A short timeline of a situation'],
            ['Situation, challenge, advice', '3', 'The heart of the matter; what blocks it; a suggested approach', 'A practical question'],
            ['Decision', '5', 'Where you stand; Path A; Path B; hidden factor; guidance', 'Weighing two options'],
            ['Celtic Cross', '10', 'Present, challenge, foundation, recent past, crown, near future, you, surroundings, hopes and fears, outcome', 'A thorough review of a complex situation'],
          ],
        },
      ],
    },
    {
      id: 'celtic',
      title: 'Reading the Celtic Cross',
      blocks: [
        { t: 'p', text: 'The Celtic Cross is the best-known spread. It has two parts: the cross (positions 1 to 6) shows the heart of the matter and the forces around it, and the staff (positions 7 to 10) shows you, your environment, your hopes and fears and where things may lead.' },
        {
          t: 'steps',
          items: [
            { title: '1. The present', body: 'The central card: the heart of the matter.' },
            { title: '2. The challenge', body: 'Laid across the first. It crosses or complicates it. Read it as a tension rather than as a villain.' },
            { title: '3 to 6. Foundation, recent past, crown, near future', body: 'Below, behind, above and ahead: the roots, what is just passing, the best you might hope for, and what is coming next.' },
            { title: '7 to 10. You, surroundings, hopes and fears, outcome', body: 'Your attitude, outside influences, what you wish for and fear (often the same thing), and where this might lead if nothing changes.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The “outcome” is not a prediction', text: 'Read the tenth card as “where this pattern leads if it continues unchanged”. You can change the pattern.' },
        { t: 'links', items: [{ path: 'tarot/reading/interpreting-a-reading', note: 'Combining cards into a story' }, { path: 'tarot/psychology-and-evidence', note: 'What the evidence says' }] },
      ],
    },
  ],
  sources: [
    'Waite, A. E. (1911). The Pictorial Key to the Tarot (Celtic Cross method).',
    'Greer, M. K. (1984). Tarot for Your Self.',
    'Pollack, R. (1980). Seventy-Eight Degrees of Wisdom.',
  ],
  related: ['tarot/cards/court-cards', 'tarot/reading/interpreting-a-reading', 'tarot/psychology-and-evidence'],
}

export default guide
