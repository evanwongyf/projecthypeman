import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Spaced repetition systems schedule each flashcard for review just before you are likely to forget it. Cards you know well come back rarely; cards you struggle with come back often. It is one of the most efficient ways to remember large amounts of information for a long time.',
  nutshell: [
    'Each time you recall a card successfully, the gap before its next review grows: a day, a few days, a week, a month…',
    'Get it wrong, and the card comes back soon.',
    'Apps do the scheduling (Anki, and flashcard features in many apps). On paper, use a **Leitner box**.',
    'The key habit: do your reviews **every day**, even for ten minutes.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How it works',
      blocks: [
        {
          t: 'levels',
          items: [
            { name: 'New card', body: 'Seen for the first time. Reviewed again within minutes or the next day.' },
            { name: 'Correct once', body: 'Next review in a few days.' },
            { name: 'Correct twice', body: 'Next review in about a week or two.' },
            { name: 'Correct three times', body: 'Next review in a month or more.' },
            { name: 'Mature card', body: 'Reviewed every few months. Very little time spent on it.' },
          ],
          caption: 'A wrong answer at any stage sends the card back down to short intervals.',
        },
        {
          t: 'p',
          text: 'The idea comes from the [spacing effect](@teaching/techniques/learning-strategies/spaced-practice). Early software such as SuperMemo (from 1987) used an algorithm called SM-2, which Anki adapted. Newer algorithms such as FSRS model your memory more precisely from your review history.',
        },
      ],
    },
    {
      id: 'leitner',
      title: 'On paper: the Leitner box',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Make five boxes', body: 'Or five sections in a box, labelled 1 to 5.' },
            { title: 'Start in box 1', body: 'All new cards go in box 1.' },
            { title: 'Review on a schedule', body: 'Box 1 every day, box 2 every 2 days, box 3 every 4 days, box 4 every 9 days, box 5 every 14 days.' },
            { title: 'Move cards', body: 'Right answer: move up one box. Wrong answer: back to box 1.' },
          ],
        },
      ],
    },
    {
      id: 'habit',
      title: 'Making it a habit',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Review every day, at the same time (after breakfast, on the bus).',
            'Limit new cards per day (10–20 is plenty) so reviews stay manageable.',
            'Be honest when rating yourself.',
            'Delete or rewrite cards that are consistently confusing.',
            'Start weeks or months before exams.',
          ],
          dont: [
            'Skip days and let reviews pile up into hundreds.',
            'Add hundreds of new cards at once.',
            'Keep bad cards because you made them; fix them.',
            'Use it for cramming; the benefit comes from long gaps.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A day off is fine',
          text: 'If you miss days, do not try to clear the whole backlog at once. Stop adding new cards for a few days and work through reviews steadily.',
        },
      ],
    },
  ],
  sources: [
    'Leitner, S. (1972). *So lernt man lernen*. Herder.',
    'Wozniak, P. A., & Gorzelańczyk, E. J. (1994). Optimization of repetition spacing in the practice of learning. *Acta Neurobiologiae Experimentalis, 54*(1), 59–62.',
    'Cepeda, N. J., et al. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin, 132*(3), 354–380.',
  ],
  related: ['memory/flashcards', 'teaching/techniques/learning-strategies/spaced-practice', 'exams/revision-plan'],
}

export default guide
