import type { Guide } from '../../../guide'

const sc = (title: string, lines: [string, string][]) => ({ t: 'example' as const, title, lines: lines.map(([label, text]) => ({ label, text })) })

const guide: Guide = {
  intro:
    'Most type clashes come down to one of four differences. Each section shows what the clash looks like in practice, in a couple, at work and between parent and child, what each side is thinking, and words that help.',
  sections: [
    {
      id: 'ei',
      title: 'E versus I: talk now or think first',
      blocks: [
        { t: 'table', head: ['Situation', 'The Extravert feels', 'The Introvert feels'], rows: [
          ['After work', '“Let’s go out, I need to unwind with people.”', '“I need an hour of silence first.”'],
          ['An argument', '“Talk it out now, or it festers.”', '“I need to think before I can say anything useful.”'],
          ['A party', '“Why do you always want to leave early?”', '“I’ve been ‘on’ for three hours; I’m empty.”'],
          ['Meetings', '“Why didn’t you say anything?”', '“You didn’t leave a gap.”'],
        ] },
        sc('Script that helps', [['Introvert', '“I want to talk about this. Give me until after dinner to sort my thoughts.”'], ['Extravert', '“Can I think out loud for five minutes? You don’t have to answer yet.”']]),
        { t: 'p', text: '**Parent and child**: an introverted child after school may need quiet before questions; an extraverted child may need to talk through the day immediately to an introverted parent who is drained. Agree a pattern: snack and silence, then chat.' },
      ],
    },
    {
      id: 'sn',
      title: 'S versus N: facts or possibilities',
      blocks: [
        { t: 'table', head: ['Situation', 'The Sensor says', 'The Intuitive says'], rows: [
          ['Planning a holiday', '“What’s the budget, where are we staying, what time is the flight?”', '“Imagine the vibe, let’s see where it takes us.”'],
          ['Giving directions', '“Turn left at the bakery, 200 metres, blue door.”', '“It’s kind of north-east of the station, you’ll see.”'],
          ['A new idea at work', '“Has this worked anywhere before?”', '“It hasn’t been done, that’s the point.”'],
          ['A story', '“Get to the point, what actually happened?”', '“It reminded me of…”'],
        ] },
        sc('Script that helps', [['Intuitive', '“Here’s the big idea, and here are two concrete examples.”'], ['Sensor', '“I’m with you on the direction. What would the first step look like on Monday?”']]),
        { t: 'p', text: '**Parent and child**: an intuitive parent may find a sensing child “unimaginative”; a sensing parent may find an intuitive child “dreamy”. Both are learning styles. Give sensing children hands-on, step-by-step learning and intuitive children the big picture and “why”.' },
      ],
    },
    {
      id: 'tf',
      title: 'T versus F: logic or values',
      blocks: [
        { t: 'table', head: ['Situation', 'The Thinker hears', 'The Feeler hears'], rows: [
          ['Feedback', '“Here are three problems with your report.” (Helpful)', '“Here are three problems with your report.” (You don’t value me)'],
          ['Upset partner', '“Let’s fix the problem.”', '“I just want you to listen.”'],
          ['A team decision', '“Fair means same rule for everyone.”', '“Fair means considering each person.”'],
          ['An apology', '“I explained why it happened.”', '“You never said sorry.”'],
        ] },
        sc('Script that helps', [['Thinker', '“That sounds really frustrating. Do you want ideas, or just to vent?”'], ['Feeler', '“This matters to me because… Can we look at the facts too?”']]),
      ],
    },
    {
      id: 'jp',
      title: 'J versus P: plan or keep options open',
      blocks: [
        { t: 'table', head: ['Situation', 'The Judger', 'The Perceiver'], rows: [
          ['Weekend', 'Wants a plan by Thursday', 'Wants to see how they feel on Saturday'],
          ['Homework', 'Starts early, finishes before fun', 'Plays first, works in a rush near the deadline'],
          ['Housework', 'Tidies as they go', 'Tidies in big bursts'],
          ['Decisions', 'Decide, then relax', 'Keep options open, then decide'],
        ] },
        sc('Script that helps', [['Judger', '“Let’s lock in Saturday dinner and leave Sunday open.”'], ['Perceiver', '“I’ll commit to the deadline; let me choose how I get there.”']]),
      ],
    },
  ],
  sources: ['Kroeger, O. & Thuesen, J. M. (1988). Type Talk. Delacorte.', 'Tieger, P. D. & Barron-Tieger, B. (1997). Nurture by Nature: Understand Your Child’s Personality Type. Little, Brown.'],
  related: ['personality/compatibility/function-clashes', 'personality/compatibility/teams-and-families'],
}

export default guide
