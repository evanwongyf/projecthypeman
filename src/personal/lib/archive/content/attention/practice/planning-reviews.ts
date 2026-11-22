import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Spacing and retrieval work, but they take time, and the time adds up in ways that surprise people. A little arithmetic lets you plan how many new items a day you can sustain, how many reviews that will create, and when to start for an exam.',
  nutshell: [
    'Each new card creates **several future reviews**, so daily reviews grow for weeks and then level off.',
    'Steady-state reviews per day ≈ **new cards per day × reviews per card in the window**, plus extra for lapses.',
    'For an exam, **finish first learning early enough** that the last scheduled review lands before the exam.',
  ],
  sections: [
    {
      id: 'steady',
      title: 'How many reviews a day?',
      blocks: [
        {
          t: 'math',
          tex: String.raw`D \approx n \times k \times (1 + \lambda)`,
          caption: 'Steady-state daily reviews D from n new cards a day, k scheduled reviews per card within the window, and a lapse rate λ.',
          plain: 'If you add n new cards every day and each is reviewed k times over the following weeks, then once the habit has run longer than the longest gap, on any given day you are reviewing cards introduced on k different earlier days: about n × k reviews. Failed reviews (lapses) add extra re-reviews, roughly a fraction λ more.',
          where: [
            { sym: 'D', def: 'reviews per day once things settle' },
            { sym: 'n', def: 'new cards per day' },
            { sym: 'k', def: 'reviews per card within the planning window' },
            { sym: String.raw`\lambda`, def: 'extra reviews from lapses, as a fraction (e.g. 0.1)' },
          ],
          syntax: [
            { sym: String.raw`\lambda`, say: '“lambda”' },
          ],
          worked: {
            title: 'Twenty new cards a day',
            steps: [
              'Schedule: reviews on days 1, 4, 10, 25 and 64 after learning, so k = 5 within the first two months.',
              String.raw`\(D \approx 20 \times 5 = 100\).`,
              String.raw`With 10% lapses: \(100 \times 1.1 = 110\) reviews.`,
              'Time: 110 reviews at about 8 seconds = 880 seconds ≈ 15 minutes, plus 20 new cards at about 30 seconds = 10 minutes.',
            ],
            why: [
              'count the reviews each card gets in the window',
              'each day you see cards from five earlier days',
              'failed cards come back sooner',
              'convert to minutes to see if it fits your day',
            ],
            answer: 'About 25 minutes a day after the first two months. If that is too much, add fewer new cards; reviews follow automatically.',
          },
        },
      ],
    },
    {
      id: 'exam',
      title: 'Working back from an exam',
      blocks: [
        {
          t: 'math',
          tex: String.raw`d_{\text{last new}} \le T_{\text{exam}} - G_{\text{last}}, \qquad n = \left\lceil \frac{N}{d_{\text{last new}}} \right\rceil`,
          caption: 'The last day you can introduce new material, and the daily rate needed to cover everything.',
          plain: 'If an item’s last scheduled review is G days after you first learn it, then new items must be learned at least G days before the exam. Divide the total number of items by the days available for first learning to get the daily rate.',
          where: [
            { sym: String.raw`T_{\text{exam}}`, def: 'days until the exam' },
            { sym: String.raw`G_{\text{last}}`, def: 'days from first learning to the last review before the exam' },
            { sym: String.raw`d_{\text{last new}}`, def: 'the last day for new material' },
            { sym: 'N', def: 'total items to learn' },
            { sym: 'n', def: 'new items per day' },
          ],
          syntax: [
            { sym: String.raw`\lceil x \rceil`, say: '“round x up”' },
          ],
          worked: {
            title: '300 history facts, exam in 30 days',
            steps: [
              String.raw`Reviews at +1, +4 and +10 days after learning, so \(G_{\text{last}} = 10\).`,
              String.raw`\(d_{\text{last new}} \le 30 - 10 = 20\).`,
              String.raw`\(n = \lceil 300/20 \rceil = 15\) new facts a day for days 1–20.`,
              String.raw`Peak load around day 11–20: 15 new + 3 × 15 reviews = 60 items a day.`,
              'Days 21–30: only reviews, plus mixed practice papers.',
            ],
            why: [
              'choose a short schedule that fits a month',
              'leave room for the last review',
              'spread the facts over the days available',
              'once all three review slots are filling, each day has new items plus three batches of reviews',
              'the final stretch consolidates and practises exam questions',
            ],
            answer: 'Learn 15 new facts a day for the first 20 days; expect about 60 items a day at the peak. Starting a week later would mean 22 a day and a heavier peak.',
          },
        },
      ],
    },
    {
      id: 'template',
      title: 'A weekly revision template',
      blocks: [
        { t: 'table', head: ['Day', 'New learning', 'Retrieval', 'Mixed practice'], rows: [
          ['Mon', 'Topic A (45 min)', 'Flashcards (15 min)', '-'],
          ['Tue', 'Topic B (45 min)', 'Flashcards; brain dump on A', '-'],
          ['Wed', 'Topic C (45 min)', 'Flashcards; quiz on B', '-'],
          ['Thu', '-', 'Flashcards', 'Mixed questions on A–C (45 min)'],
          ['Fri', 'Topic D (45 min)', 'Flashcards; brain dump on C', '-'],
          ['Sat', '-', 'Flashcards', 'Past-paper section, timed'],
          ['Sun', 'Rest', 'Light flashcards', '-'],
        ] },
      ],
    },
  ],
  sources: [
    'Kang, S. H. K. (2016). Spaced repetition promotes efficient and effective learning. Policy Insights from the Behavioral and Brain Sciences, 3(1), 12–19.',
    'Cepeda, N. J. et al. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. Psychological Science, 19(11), 1095–1102.',
  ],
  related: ['attention/practice/spaced-repetition-algorithms', 'exams/revision-plan', 'attention/retention/spacing'],
}

export default guide
