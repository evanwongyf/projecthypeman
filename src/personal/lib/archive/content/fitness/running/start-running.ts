import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost anyone can build up to running 30 minutes without stopping in about two months. The secret is to start with walking breaks and to run slowly: much slower than feels like "proper" running.',
  nutshell: [
    'Use **run-walk** intervals and shrink the walks over the weeks.',
    'Run at a pace where you could hold a conversation (the **talk test**).',
    'Three sessions a week, with a rest or walking day between them.',
    'Repeat a week if it felt too hard. There is no rush.',
    'Any comfortable, well-fitting running shoe will do to start.',
  ],
  sections: [
    {
      id: 'watch',
      title: 'Walking and easy running',
      blocks: [{ t: 'exercises', ids: ['walk', 'jog'] }],
    },
    {
      id: 'plan',
      title: 'An eight-week run-walk plan',
      lead: 'Three sessions a week. Each starts and ends with 5 minutes of brisk walking.',
      blocks: [
        {
          t: 'table',
          head: ['Week', 'Main set (repeat for the time shown)', 'Total running'],
          rows: [
            ['1', 'Run 1 min, walk 2 min, for 21 min', '7 min'],
            ['2', 'Run 2 min, walk 2 min, for 20 min', '10 min'],
            ['3', 'Run 3 min, walk 2 min, for 20 min', '12 min'],
            ['4', 'Run 5 min, walk 2 min, for 21 min', '15 min'],
            ['5', 'Run 8 min, walk 2 min, for 20 min', '16 min'],
            ['6', 'Run 10 min, walk 2 min, run 10 min', '20 min'],
            ['7', 'Run 15 min, walk 2 min, run 10 min', '25 min'],
            ['8', 'Run 30 min', '30 min'],
          ],
          caption: 'A gentle progression in the spirit of programmes like the NHS Couch to 5K. Repeat any week that felt too hard.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Too slow is just right',
          text: 'If you cannot finish a run interval, you are going too fast. Slow down until you could chat. Fitness comes from time on your feet, not from suffering.',
        },
      ],
    },
    {
      id: 'kit',
      title: 'Shoes and kit',
      blocks: [
        {
          t: 'list',
          items: [
            'Choose shoes that feel comfortable straight away; comfort is a better guide than shoe categories.',
            'Replace shoes when they feel flat, usually after 500–800 km.',
            'Wear breathable, non-cotton clothes and avoid running in the hottest part of the day in the tropics.',
            'Carry water for runs over an hour, or in heat.',
          ],
        },
      ],
    },
  ],
  sources: ['NHS. (n.d.). *Couch to 5K: Week by week*. nhs.uk.', 'Galloway, J. (2007). *Galloway’s Book on Running* (2nd ed.). Shelter Publications.'],
  related: ['fitness/running/form', 'fitness/running/workouts', 'fitness/warm-up'],
}

export default guide
