import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Tarot is a deck of 78 illustrated cards with a long history, first as a card game in fifteenth-century Italy and, from the late eighteenth century, as a tool for divination and, more recently, for reflection. This shelf teaches the deck properly: how it is built, what each card traditionally means, how to lay out and interpret a spread, and what psychology says about why readings feel so accurate. It treats tarot as a cultural tradition and a structured way to think about your own life, not as a way of knowing the future.',
  nutshell: [
    'The deck has **22 Major Arcana** (big life themes, from the Fool to the World) and **56 Minor Arcana** in four suits: **Wands, Cups, Swords and Pentacles**.',
    'Every card has an **upright** and a **reversed** meaning in the tradition. They are **prompts**, not verdicts.',
    'A **spread** gives each card a position, so a draw becomes a small story: situation, challenge, advice.',
    'There is **no good evidence that tarot predicts events**. Readings feel accurate because of well-studied psychological effects (Barnum, confirmation bias, cold reading).',
    'Used as **reflection**, tarot can help you notice what you think and feel. Used as **prediction**, it can mislead or exploit. The last guide covers ethics.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What this shelf does',
      blocks: [
        {
          t: 'table',
          head: ['You will learn', 'Where'],
          rows: [
            ['How the deck is organised, and where it came from', 'Foundations'],
            ['How to look at a card: symbols, numbers, elements, reversals', 'Foundations'],
            ['What all 78 cards mean, upright and reversed, with a question for each', 'The cards'],
            ['How to ask good questions and lay out spreads, including the Celtic Cross', 'Reading'],
            ['How to combine cards into a coherent story, with worked examples', 'Reading'],
            ['What psychology says, and how to practise ethically', 'Psychology, evidence and ethics'],
          ],
        },
        { t: 'tarot', mode: 'deck' },
      ],
    },
    {
      id: 'stance',
      title: 'A way to hold the practice',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'As culture', title: 'A symbolic language', body: 'The cards are a vocabulary of images and ideas: journeys, relationships, conflicts, work. Learning it is like learning the symbols of any tradition.' },
            { tag: 'As reflection', title: 'A prompt for thinking', body: 'A random card gives you something to react to. What you say about it often reveals what you were already thinking.' },
            { tag: 'As storytelling', title: 'A structure for a story', body: 'A spread forces you to build a narrative from separate images, a creative and analytic exercise.' },
            { tag: 'Not as proof', title: 'Not a forecast', body: 'The cards do not contain information about your future, and nothing in this shelf requires you to believe they do.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Please be careful', text: 'Do not use tarot to make medical, legal or financial decisions, to judge another person’s secret thoughts, or in place of professional help. If you are in distress, talk to a doctor, counsellor or someone you trust.' },
      ],
    },
    {
      id: 'plan',
      title: 'A route',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'tarot/foundations/history-and-structure', note: 'Where the deck comes from and how it is built' },
            { path: 'tarot/cards/major-arcana', note: 'Start with the 22 Major Arcana' },
            { path: 'tarot/reading/asking-and-spreads', note: 'Draw a spread' },
            { path: 'tarot/reading/practice-and-quiz', note: 'A four-week plan and a quiz' },
            { path: 'tarot/psychology-and-evidence', note: 'The sceptical view, and ethics' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Dummett, M. (1980). The Game of Tarot. Duckworth.',
    'Decker, R., and Dummett, M. (2002). A History of the Occult Tarot, 1870–1970. Duckworth.',
    'Waite, A. E. (1911). The Pictorial Key to the Tarot.',
    'Place, R. M. (2005). The Tarot: History, Symbolism, and Divination. Tarcher/Penguin.',
  ],
  related: ['tarot/foundations/history-and-structure', 'tarot/cards/major-arcana', 'tarot/psychology-and-evidence'],
}

export default guide
