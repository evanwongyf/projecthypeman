import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Tarot is a language, and like any language it is learnt by using it: a little every day beats a long weekend. This guide gives a four-week plan that takes you from your first card to a Celtic Cross, a way to keep a journal that records what you actually think, and a quiz to test your memory of the cards. The quiz is below.',
  nutshell: [
    'Learn **a few cards at a time**, in a sequence, and use them in **readings** soon.',
    'Draw a **daily card** and write three sentences: what you see, what it might mean, how it relates to your day.',
    'Keep a **journal** of readings. Review it after a month to see what you noticed and where your readings were vague.',
    'Use the **quiz** to build recall: the same retrieval-practice principle that works for any learning.',
    'Do not worry about being “right”. The skill is in **observing, interpreting and explaining**.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'A four-week plan',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Focus', 'Daily routine (10 to 15 minutes)', 'End of week'],
          rows: [
            ['1', 'The Major Arcana, 0 to VII', 'Draw one card from the first eight Majors, describe it, and read its meaning', 'Quiz: Major Arcana. Write one paragraph on the Fool’s first act'],
            ['2', 'The Major Arcana, VIII to XXI', 'Draw one card from the rest of the Majors', 'Quiz: all Majors. Try a three-card spread'],
            ['3', 'The four suits', 'Draw one card from a single suit each day, thinking suit plus number', 'Quiz: a suit of your choice. Try a decision spread'],
            ['4', 'Court cards and combining', 'Draw a three-card spread and write a short reading', 'A Celtic Cross, written up. Review your journal'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Keep it short and regular', text: 'Ten minutes a day for four weeks gives you more than hours in one go. Spaced practice is how people learn languages, and it works for symbol systems too.' },
      ],
    },
    {
      id: 'journal',
      title: 'A reading journal',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Date, question and spread.',
            'The cards in order, including whether reversed.',
            'What you saw before consulting any meaning.',
            'Your interpretation in a few sentences.',
            'One action or thought to carry forward.',
            'A review a few weeks later: what happened? What did you notice? Was anything vague enough to fit anything?',
          ],
        },
        { t: 'p', text: 'The last item is the most useful. Reviewing past readings, honestly, trains you to separate observations from interpretations that would fit any outcome. It makes you a better reader and a more critical one.' },
      ],
    },
    {
      id: 'quiz',
      title: 'Quiz: which card is this?',
      blocks: [
        { t: 'tarot', mode: 'quiz' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Tip', title: 'Say it aloud', body: 'Before picking an answer, say in your own words what the card means. Retrieval is stronger when you produce the answer.' },
            { tag: 'Tip', title: 'Use the suits', body: 'Practise by suit; the same ranks echo across suits, which helps memory.' },
            { tag: 'Tip', title: 'Revisit the ones you miss', body: 'Make a short list of cards that trip you up and draw them in your daily practice.' },
            { tag: 'Tip', title: 'Mix it up', body: 'When you are ready, use the “All 78” set.' },
          ],
        },
        { t: 'links', items: [{ path: 'memory/spaced-repetition', note: 'Spaced repetition for any learning' }, { path: 'memory/active-recall', note: 'Active recall' }, { path: 'tarot/reading/asking-and-spreads', note: 'Back to spreads' }] },
      ],
    },
  ],
  sources: [
    'Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science.',
    'Greer, M. K. (1984). Tarot for Your Self.',
    'Cepeda, N. J., et al. (2006). Distributed practice in verbal recall tasks: a review and quantitative synthesis. Psychological Bulletin.',
  ],
  related: ['tarot/reading/asking-and-spreads', 'memory/active-recall', 'tarot/psychology-and-evidence'],
}

export default guide
