import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'English has no single future tense. Instead it has a family of future forms (*will*, *going to*, the present continuous, the present simple, and the future continuous, perfect and perfect continuous), and the choice between them says how certain, planned or spontaneous the future event is.',
  nutshell: [
    '**will**: predictions based on opinion, instant decisions, offers, promises, requests and facts about the future.',
    '**be going to**: intentions already decided, and predictions based on present evidence.',
    '**Present continuous**: fixed arrangements with other people, usually with a time. **Present simple**: timetables and schedules.',
    '**Future continuous** (*will be doing*): in progress at a future moment. **Future perfect** (*will have done*): completed before a future point.',
    'After *when, if, as soon as, before, after, until* referring to the future, use a **present** tense, not *will*.',
  ],
  sections: [
    {
      id: 'will-going-to',
      title: 'Will versus going to',
      blocks: [
        {
          t: 'table',
          head: ['', 'will', 'be going to'],
          rows: [
            ['Affirmative', 'I**’ll** help. She **will** win.', 'I**’m going to** help. She**’s going to** win.'],
            ['Negative', 'I **won’t** help.', 'I**’m not going to** help.'],
            ['Question', '**Will** she win?', '**Is** she **going to** win?'],
          ],
        },
        {
          t: 'table',
          head: ['Use', 'Form', 'Example'],
          rows: [
            ['Decision made at the moment of speaking', 'will', 'The phone’s ringing. ~ I**’ll get** it.'],
            ['Plan or intention decided before', 'going to', 'I**’m going to paint** the bedroom this weekend: I’ve bought the paint.'],
            ['Prediction from opinion or belief', 'will', 'I think Spain **will win** the cup. You**’ll love** this book.'],
            ['Prediction from present evidence', 'going to', 'Look at those clouds. It**’s going to rain**. Watch out, he**’s going to fall**!'],
            ['Offers', 'will', 'I**’ll carry** your bag. **Shall** I open the window? (*shall* with I / we)'],
            ['Promises and threats', 'will', 'I**’ll call** you tonight, I promise. I**’ll tell** Mum!'],
            ['Requests and refusals', 'will', '**Will** you **help** me? The car **won’t start**.'],
            ['Future facts', 'will', 'The sun **will rise** at 6.12 tomorrow. I**’ll be** 30 next May.'],
          ],
        },
        {
          t: 'example',
          title: 'Decision versus plan in one conversation',
          lines: [
            { label: 'A', text: 'We’ve run out of milk.' },
            { label: 'B', text: 'Oh, I**’ll get** some on my way home. (decides now)' },
            { label: 'A', text: 'Later: Why have you got two bottles of milk?' },
            { label: 'B', text: 'One’s for my mum. I**’m going to make** her a rice pudding. (plan already made)' },
          ],
        },
      ],
    },
    {
      id: 'present-forms',
      title: 'Present forms with future meaning',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Present continuous: arrangements', body: 'I**’m seeing** the dentist on Thursday. We**’re having** a party on Saturday. Are you **doing** anything tonight? (It is in the diary; other people are involved.)' },
            { title: 'Present simple: timetables', body: 'The film **starts** at 8. Our flight **leaves** at 06.40. Term **ends** on 19 July.' },
            { title: 'Present simple in time clauses', body: 'I’ll call you **when I get** home. **As soon as** she **arrives**, we’ll eat. Don’t go **until** I **say** so.' },
            { title: 'Present perfect in time clauses', body: 'I’ll lend you the book **when I’ve finished** it. (completion first)' },
          ],
        },
        {
          t: 'table',
          head: ['Going to (intention)', 'Present continuous (arrangement)'],
          rows: [
            ['I**’m going to see** a doctor about my back. (I intend to)', 'I**’m seeing** the doctor at 10.30 on Monday. (appointment booked)'],
            ['We**’re going to get** married one day.', 'We**’re getting** married on 14 June.'],
          ],
          caption: 'Often both are possible. The continuous sounds more fixed and is usually used with a time or date.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'No will after when and if (in time and condition clauses)',
          text: 'I’ll text you when I **arrive** (not *when I will arrive*). If it **rains**, we’ll cancel (not *If it will rain*). This applies to *when, if, unless, as soon as, before, after, until, by the time, once* referring to the future. Exception: *if … will* is possible for willingness or a polite request: If you **will** wait here, I’ll fetch the manager.',
        },
      ],
    },
    {
      id: 'continuous-perfect',
      title: 'Future continuous, perfect and perfect continuous',
      blocks: [
        {
          t: 'table',
          head: ['Form', 'Build', 'Use', 'Example'],
          rows: [
            ['Future continuous', 'will be + -ing', 'in progress at a future moment', 'This time next week I**’ll be lying** on a beach.'],
            ['Future continuous', 'will be + -ing', 'events in the normal course of things; polite enquiries', 'I**’ll be passing** the post office anyway. **Will** you **be using** the car tonight?'],
            ['Future perfect', 'will have + past participle', 'completed by a future time', 'By 2030 they **will have built** the new line.'],
            ['Future perfect continuous', 'will have been + -ing', 'duration up to a future point', 'By Friday I**’ll have been working** here for a year.'],
          ],
        },
        {
          t: 'flow',
          title: 'Timeline: future continuous',
          nodes: [
            { label: 'Now', sub: 'Wednesday', tone: 'data' },
            { label: 'Saturday 3 pm', sub: 'I**’ll be playing** football.', tone: 'process' },
            { label: 'Saturday 4.30 pm', sub: 'match over', tone: 'output' },
          ],
          caption: 'Don’t phone at three: I**’ll be playing** (the match will be in progress at that moment).',
        },
        {
          t: 'flow',
          title: 'Timeline: future perfect',
          nodes: [
            { label: 'Now', sub: 'October', tone: 'data' },
            { label: 'Finish thesis', sub: 'some time before June', tone: 'process' },
            { label: 'Deadline', sub: 'By June I **will have finished** it.', tone: 'output' },
          ],
          caption: '*By* means “at or before”; the exact moment of finishing is not stated.',
        },
        {
          t: 'list',
          items: [
            'Negatives: I **won’t be working** tomorrow. They **won’t have finished** by noon.',
            'Questions: **Will** you **be coming** to the party? **Will** he **have arrived** by then?',
            'Deduction about now (future perfect): Don’t ring: she**’ll have gone** to bed by now. (= I’m sure she has)',
          ],
        },
      ],
    },
    {
      id: 'other',
      title: 'Other ways to talk about the future',
      blocks: [
        {
          t: 'table',
          head: ['Form', 'Meaning', 'Example'],
          rows: [
            ['be about to + base', 'very near future', 'Hurry, the train **is about to leave**.'],
            ['be on the point of + -ing', 'extremely near', 'She was **on the point of giving up** when the call came.'],
            ['be to + base', 'formal plans, official arrangements, orders', 'The President **is to visit** Ghana next month. You **are to report** at 9.'],
            ['be due to + base', 'scheduled', 'The plane **is due to land** at 11.15.'],
            ['be bound to / be sure to', 'certain', 'You**’re bound to pass**: you’ve worked so hard.'],
            ['be likely to', 'probable', 'Prices **are likely to rise**.'],
            ['shall (I / we)', 'offers and suggestions (British)', '**Shall** we go? **Shall** I help?'],
          ],
        },
        {
          t: 'table',
          head: ['Future in the past', 'Example'],
          rows: [
            ['was / were going to', 'I **was going to call** you, but I forgot.'],
            ['would', 'She said she **would** be late.'],
            ['was / were + -ing', 'We **were leaving** the next day, so we packed.'],
          ],
          caption: 'For plans or predictions seen from a point in the past, often ones that did not happen.',
        },
      ],
    },
    {
      id: 'errors-practice',
      title: 'Common errors and practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'I**’ll phone** you when I **get** there.',
            'I**’m meeting** Jo at six. (arranged)',
            'Look out! You**’re going to drop** it.',
            'I**’ll have finished** by Monday.',
            '**Shall** I close the door?',
          ],
          dont: [
            'I’ll phone you when I *will get* there.',
            'I *meet* Jo at six. (sounds like a timetable)',
            'Look out! You *will drop* it. (possible, but less natural with visible evidence)',
            'I *will finish* by Monday *already*.',
            '*Will I* close the door? (for an offer)',
          ],
        },
        {
          t: 'example',
          title: 'Practice with answers',
          lines: [
            { label: '1', text: '*It’s cold in here. ~ I ___ (close) the window.* → **’ll close**: decision now.' },
            { label: '2', text: '*She’s bought a guitar. She ___ (learn) to play.* → **’s going to learn**: intention already decided.' },
            { label: '3', text: '*The match ___ (kick off) at 3 pm on Saturday.* → **kicks off**: timetable.' },
            { label: '4', text: '*We ___ (have) dinner with Leo’s parents on Friday.* → **’re having**: arrangement.' },
            { label: '5', text: '*Call me as soon as you ___ (hear) the results.* → **hear**: present in a future time clause.' },
            { label: '6', text: '*This time tomorrow we ___ (drive) through France.* → **’ll be driving**: in progress at a future moment.' },
            { label: '7', text: '*By the end of the year I ___ (save) £2,000.* → **will have saved**: completed by a future point.' },
            { label: '8', text: '*In July they ___ (live) here for twenty years.* → **will have been living** (or **will have lived**): duration up to a future point.' },
            { label: '9', text: '*Watch out, that ladder ___ (fall)!* → **’s going to fall**: present evidence.' },
            { label: '10', text: 'Correct it: *If he will come, I will tell him.* → **If he comes, I’ll tell him.**' },
            { label: '11', text: 'Which sounds more certain? *I’m flying to Oslo on Monday* or *I think I’ll fly to Oslo*. → The **present continuous**: it is arranged; *I think I’ll* is a tentative decision.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
  ],
  related: ['grammar/verbs/tenses-overview', 'grammar/verbs/present-tenses', 'grammar/verbs/modal-verbs', 'grammar/verbs/conditionals-and-mood', 'grammar/verbs/past-tenses'],
}

export default guide
