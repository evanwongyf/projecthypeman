import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Can you make yourself smarter? The honest answer is that you can improve how well your brain works, protect it for decades and learn much more efficiently, but there are no shortcuts, and many popular promises (brain-training games, miracle supplements) have little evidence behind them. This guide ranks the options by the strength of the evidence, starting with the unglamorous basics that matter most, and finishes with what to be sceptical of.',
  nutshell: [
    'The **big levers** are sleep, regular exercise, learning demanding new things, managing stress, a healthy diet and staying socially connected. They are cheap, safe and have the best evidence.',
    '**How you learn** matters as much as how much: retrieval practice, spacing and deliberate practice beat rereading and cramming.',
    'Protect the brain: control **blood pressure, hearing, vision, blood sugar** and avoid head injury, smoking and heavy drinking. Roughly **40 to 45 per cent** of dementia cases may be preventable or delayable through such factors.',
    '**Brain-training apps** improve the trained tasks but show little transfer to everyday thinking. Most **supplements** do not help healthy people. **Caffeine** helps alertness.',
    'Prescription stimulants (such as methylphenidate and modafinil) are **medicines with risks**; using them without a prescription is illegal in most places and not recommended.',
  ],
  sections: [
    {
      id: 'ranking',
      title: 'The evidence-ranked list',
      blocks: [
        {
          t: 'table',
          head: ['Lever', 'Evidence', 'What to do'],
          rows: [
            ['Sleep', 'Strong. Sleep supports memory consolidation, attention and mood; poor sleep impairs all of them', 'Aim for about seven to nine hours as an adult, a regular schedule, and a dark, cool room'],
            ['Aerobic exercise', 'Good. Linked to better memory and executive function and lower dementia risk; trials show modest cognitive benefits', 'About 150 minutes a week of moderate activity, plus some strength work'],
            ['Learning and practice', 'Strong. Education and mentally demanding activities build skill and cognitive reserve', 'Keep learning new, challenging things; practise deliberately'],
            ['Managing stress', 'Good. Chronic stress impairs prefrontal function, sleep and memory', 'Use the regulation tools; build recovery into the week'],
            ['Diet', 'Moderate. Mediterranean-style and similar patterns are linked to better brain health; effects of single foods are small', 'Plenty of vegetables, fruit, whole grains, fish, nuts and legumes; limit ultra-processed food and excess alcohol'],
            ['Social connection', 'Good. Isolation is a risk factor for decline; engagement is protective', 'Keep up friendships and group activities'],
            ['Vascular and sensory health', 'Strong. Hypertension, diabetes, hearing loss and vision loss all raise risk of cognitive decline', 'Have blood pressure, blood sugar, hearing and eyes checked and treated'],
            ['Mindfulness and meditation', 'Modest. Small benefits for attention, stress and mood', 'Try a structured course if you find it useful'],
          ],
          caption: 'Evidence ratings are broad judgements from reviews. Individual results vary.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Prevention of dementia',
          text: 'The Lancet Commission on dementia reported that around 40 to 45 per cent of dementia cases worldwide may be linked to modifiable risk factors, including less education, hearing and vision loss, high blood pressure, high cholesterol, diabetes, obesity, smoking, heavy drinking, physical inactivity, depression, social isolation, head injury and air pollution. The exact figure changes with each update, and it does not mean that dementia can always be prevented.',
        },
      ],
    },
    {
      id: 'learn',
      title: 'Learn in ways that stick',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Recall', title: 'Test yourself', body: 'Closing the book and recalling is far more effective than rereading.' },
            { tag: 'Space', title: 'Spread it out', body: 'Reviews spaced over days and weeks beat the same time in one block.' },
            { tag: 'Mix', title: 'Interleave', body: 'Mix different problem types in one session. It feels harder and works better.' },
            { tag: 'Stretch', title: 'Deliberate practice', body: 'Work at the edge of your ability with immediate feedback, focusing on the weakest parts.' },
            { tag: 'Explain', title: 'Teach it', body: 'Explaining an idea in your own words exposes gaps and builds understanding.' },
            { tag: 'Build', title: 'Knowledge compounds', body: 'The more you know, the easier it is to learn more, because new facts have more to attach to. Reading widely pays off.' },
          ],
        },
        { t: 'links', items: [{ path: 'memory/active-recall', note: 'Active recall' }, { path: 'memory/spaced-repetition', note: 'Spaced repetition' }, { path: 'teaching/techniques/learning-strategies/retrieval-practice', note: 'Retrieval practice' }] },
      ],
    },
    {
      id: 'daily',
      title: 'A sample week',
      blocks: [
        {
          t: 'table',
          head: ['Habit', 'Frequency', 'Notes'],
          rows: [
            ['Sleep window', 'Every night', 'Same wake time seven days a week, screens off before bed'],
            ['Aerobic exercise', '3 to 5 times a week', 'Brisk walking, cycling, swimming, running, sport'],
            ['Strength training', '2 times a week', 'Also linked to better function with age'],
            ['Deliberate learning', '30 to 60 minutes most days', 'A language, instrument, maths, coding, or a new skill'],
            ['Retrieval and review', '10 to 20 minutes most days', 'Flashcards, self-testing, summarising from memory'],
            ['Social time', 'Several times a week', 'In person where possible'],
            ['Downtime', 'Daily', 'A short walk, a pause, a break from screens'],
          ],
        },
      ],
    },
    {
      id: 'sceptic',
      title: 'Where to be sceptical',
      blocks: [
        {
          t: 'table',
          head: ['Claim', 'What the evidence says'],
          rows: [
            ['Brain-training games make you smarter', 'People improve at the games, but reviews find little transfer to other tasks or everyday life'],
            ['Supplements for memory (ginkgo, most “nootropic” blends)', 'Trials in healthy adults mostly show no meaningful benefit. If you are deficient (for example in vitamin B12 or iron), correcting that helps'],
            ['Omega-3 fish oil for healthy adults', 'Mixed and small effects; eating fish regularly is a better-supported pattern'],
            ['Caffeine', 'Reliably improves alertness and reaction time and modestly improves some cognitive tasks; too much disrupts sleep and raises anxiety. Moderate use is generally considered safe for most adults'],
            ['Creatine', 'Some evidence for small benefits in memory, especially with sleep loss or low dietary intake; the evidence is not yet strong'],
            ['Prescription stimulants for study', 'For people without ADHD, effects on thinking are small and inconsistent, with risks. Not recommended without medical supervision'],
            ['Listening to classical music makes babies smarter (the “Mozart effect”)', 'Not supported. Brief effects on mood and arousal at best'],
            ['We use only 10 per cent of our brains', 'False. Imaging shows activity throughout the brain over the course of a day'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'If you are worried about your memory', text: 'Everyone forgets things. If memory or thinking problems are new, getting worse, or interfering with daily life, see a doctor. Many causes (sleep, depression, medicines, thyroid, B12, hearing) are treatable.' },
        { t: 'links', items: [{ path: 'medicine/neuroscience/memory-and-learning', note: 'The biology of learning' }, { path: 'medicine/neuroscience/intelligence', note: 'What intelligence is' }, { path: 'food-therapy/food-for-goals/brain-and-focus', note: 'Foods for the brain' }] },
      ],
    },
  ],
  sources: [
    'Livingston, G., et al. (2020 and 2024). Dementia prevention, intervention, and care: Report of the Lancet Standing Commission. The Lancet.',
    'Simons, D. J., et al. (2016). Do “brain-training” programs work? Psychological Science in the Public Interest.',
    'Owen, A. M., et al. (2010). Putting brain training to the test. Nature.',
    'Erickson, K. I., et al. (2019). Physical Activity, Cognition, and Brain Outcomes: a review of the 2018 Physical Activity Guidelines. Medicine and Science in Sports and Exercise.',
    'Dunlosky, J., et al. (2013). Improving students’ learning with effective learning techniques. Psychological Science in the Public Interest.',
    'Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review.',
  ],
  related: ['medicine/neuroscience/intelligence', 'medicine/neuroscience/memory-and-learning', 'memory/sleep-and-body'],
}

export default guide
