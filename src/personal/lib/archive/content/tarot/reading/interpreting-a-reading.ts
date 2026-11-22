import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Reading single cards is a vocabulary. Reading a spread is grammar: you combine cards, their positions and their relationships into something that makes sense for a question. This guide teaches the main techniques, such as looking at the balance of suits and numbers, repetition, the flow of a story, and the role of Majors versus Minors, and then works through two examples. The aim is a reading that is coherent, honest and useful, whether you hold tarot to be reflection or something more.',
  nutshell: [
    'Look at the **whole spread** first: how many Majors, which suit dominates, which numbers repeat, how many are reversed.',
    'Read cards **in position**, then **in pairs or runs**: does the story flow from card to card?',
    '**Majors** suggest big themes; **Minors** the everyday detail. A spread full of Majors may be about something significant; one full of Minors, about daily matters.',
    '**Repetition** of a suit, number or figure is worth noticing: it may stress a theme.',
    'End with **a summary and a step**: a few sentences, and one thing to do or think about.',
  ],
  sections: [
    {
      id: 'overview',
      title: 'Reading the whole before the parts',
      blocks: [
        {
          t: 'table',
          head: ['What to notice', 'What it suggests'],
          rows: [
            ['Many Majors', 'A significant, possibly life-shaping theme'],
            ['Mostly Minors', 'Everyday matters, within your control'],
            ['One suit dominates', 'Wands: action; Cups: feeling; Swords: thought and conflict; Pentacles: practical matters'],
            ['Missing suit', 'An area not engaged: for example no Cups may mean the emotional side is overlooked'],
            ['Many Aces', 'Beginnings; many Tens, an ending or overload; many Fives, disruption'],
            ['Many court cards', 'People, or roles you are playing, are central'],
            ['Many reversed cards', 'Blocked, internal or delayed energy (if you read reversals)'],
          ],
        },
      ],
    },
    {
      id: 'combine',
      title: 'Combining cards',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Flow', title: 'Read as a story', body: 'Cards drawn in sequence often form “this, so that, therefore this”. Try to link them with “because”, “but” and “so”.' },
            { tag: 'Pairs', title: 'Neighbouring cards', body: 'Read adjacent cards together. A Page of Cups next to the Seven of Swords reads differently from the same Page next to the Ten of Pentacles.' },
            { tag: 'Opposites', title: 'Tension', body: 'Cards in opposition (Five and Six, Tower and Star) may show what is being resolved.' },
            { tag: 'Gaze', title: 'Where figures look', body: 'In many decks, figures look toward or away from adjacent cards. Use it as a visual cue.' },
            { tag: 'Elements', title: 'Elemental dignities', body: 'Fire and air support each other, as do water and earth; fire and water, or air and earth, tend to clash.' },
            { tag: 'Honest', title: 'When it does not fit', body: 'Not every combination makes sense. Say so, and describe what stands out. A hesitant reading is better than a forced one.' },
          ],
        },
      ],
    },
    {
      id: 'example1',
      title: 'Worked example: a career question',
      blocks: [
        {
          t: 'example',
          title: 'Question: “I am thinking about changing careers. What do I need to understand?” (Situation, challenge, advice)',
          lines: [
            { label: 'Situation: Eight of Pentacles', text: 'A craftsperson works carefully on one coin after another. Diligence, skill, steady work. You have put effort into your current field and have real skill.' },
            { label: 'Challenge: Five of Swords', text: 'A figure gathers swords while others walk away. Conflict where winning costs something, or a sense of having “won” and lost relationships. The challenge may be an argument, with yourself or another, about whether staying is giving up.' },
            { label: 'Advice: The Star', text: 'A figure pours water under a night sky. Hope, renewal, honest openness. A suggestion to act from hope and calm rather than from a quarrel with your past.' },
            { label: 'Putting it together', text: 'You have built real skill. The tension is the internal argument about winning or losing by leaving. The advice is to decide from hope and clarity, not from a fight, perhaps by exploring the new field in small steps while keeping your skills.' },
            { label: 'One step', text: 'Write down what you want to move towards, not only away from, and talk to one person who works in the new field.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Notice what the reader did', text: 'The reading described each card, linked it to the position, and combined them into a story. The “prediction” is replaced by a suggestion about how to think. Nothing in it claims to know the future.' },
      ],
    },
    {
      id: 'example2',
      title: 'Worked example: a daily card',
      blocks: [
        {
          t: 'example',
          title: 'One card: the Three of Cups, drawn on a Monday morning',
          lines: [
            { label: 'Describe', text: 'Three figures raise their cups together, in a garden with fruit. Celebration, friendship.' },
            { label: 'Meaning', text: 'Community, shared joy, support from friends.' },
            { label: 'Relate', text: 'You have been working alone lately. Is there something worth celebrating, or someone to reach out to?' },
            { label: 'Reflect', text: 'A prompt to arrange a coffee or a call this week.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Keep it concrete and kind.', 'Offer more than one interpretation when unsure.', 'Write the reading down and review it later.'],
          dont: ['Make dramatic claims, such as “someone is going to betray you”.', 'Predict health outcomes, pregnancies or deaths.', 'Use a reading to pressure someone into a decision.'],
        },
        { t: 'links', items: [{ path: 'tarot/reading/practice-and-quiz', note: 'A plan for learning the deck' }, { path: 'tarot/psychology-and-evidence', note: 'Why readings feel accurate' }] },
      ],
    },
  ],
  sources: [
    'Greer, M. K. (1984). Tarot for Your Self.',
    'Pollack, R. (1980). Seventy-Eight Degrees of Wisdom.',
    'Banzhaf, H., and Hebrecht, B. Practical guides to reading and combining cards (various).',
  ],
  related: ['tarot/reading/asking-and-spreads', 'tarot/reading/practice-and-quiz', 'tarot/psychology-and-evidence'],
}

export default guide
