import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **determiner** comes before a noun and tells you which one, whose, or how many: **the** bus, **my** phone, **this** idea, **some** water, **three** cats. The most common determiners are the **articles** *a*, *an* and *the*. They are tiny words, but choosing between *a*, *the* and nothing at all is one of the hardest parts of English for learners and a frequent slip even for fluent writers.',
  nutshell: [
    '**A/an** = one of many, not yet identified (*a dog barked*); **the** = a specific one both reader and writer can identify (*the dog next door*).',
    '**A** before a consonant **sound**, **an** before a vowel **sound**: *a university*, *an hour*, *an MP*, *a one-way street*.',
    '**No article** (the zero article) for plural and uncountable nouns used in general: *Dogs are loyal*, *Water is essential*.',
    'Other determiners: demonstratives (*this, that*), possessives (*my, their*), quantifiers (*some, any, much, many, few, little*), numbers and *each, every, either, neither*.',
    'Usually only one central determiner goes before a noun: *my car* or *the car*, never *the my car*.',
  ],
  sections: [
    {
      id: 'types',
      title: 'The kinds of determiner',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Determiners', 'Examples'],
          rows: [
            ['Articles', 'a, an, the', 'a cat, an owl, the sun, a teacher, an apple, the answer, the moon, a week'],
            ['Demonstratives', 'this, that, these, those', 'this book, that house, these shoes, those people, this morning, that idea, these days, those years'],
            ['Possessives', 'my, your, his, her, its, our, their, whose', 'my bag, your turn, his name, her phone, its colour, our team, their house, whose coat'],
            ['Quantifiers', 'some, any, much, many, few, a few, little, a little, all, both, several, enough, no, more, most, less', 'some milk, any questions, much time, many friends, a few minutes, a little sugar, no idea, enough chairs'],
            ['Distributives', 'each, every, either, neither', 'each pupil, every day, either side, neither answer, each time, every word, either way, neither team'],
            ['Numbers', 'one, two, first, second, last, next', 'two dogs, first prize, the second day, last week, one reason, ten minutes, the next stop, a hundred people'],
            ['Interrogatives', 'which, what, whose', 'Which bus? What time? Whose idea? Which way? What colour? Whose turn?'],
          ],
          caption: 'Many of these words are pronouns when they stand alone: *this* book (determiner), *this* is mine (pronoun).',
        },
      ],
    },
    {
      id: 'a-an',
      title: 'A or an: it is the sound that counts',
      blocks: [
        {
          t: 'table',
          head: ['Use', 'Rule', 'Examples'],
          rows: [
            ['a', 'Before a consonant sound', 'a book, a car, a house, a university (you-), a European (you-), a one-off (wun-), a uniform, a useful tool, a eulogy'],
            ['an', 'Before a vowel sound', 'an apple, an egg, an idea, an orange, an umbrella, an hour (silent h), an honest man, an heir, an honour'],
            ['Abbreviations', 'Follow how the letters are said', 'an MP (em-), an FBI agent (eff-), an SOS (ess-), an X-ray (ex-), a UFO (you-), a BBC show (bee-), an NHS doctor (en-), a NATO summit (nay-)'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Historic and hotel',
          text: 'In modern British English the *h* in *historic*, *hotel* and *hypothesis* is pronounced, so the normal choice is **a historic** moment, **a hotel**. You may still see *an historic* in older or very formal writing; it is not wrong, but it is old-fashioned.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick',
          text: 'Say it aloud. If your mouth makes a vowel noise at the start of the next word, use *an*. “**An** hour” starts with “ow”; “**a** union” starts with “yoo”, a consonant sound.',
        },
      ],
    },
    {
      id: 'the',
      title: 'When to use the',
      blocks: [
        {
          t: 'table',
          head: ['Use the when...', 'Examples'],
          rows: [
            ['The reader already knows which one (mentioned before)', 'I saw **a** dog. **The** dog was huge. / She bought **a** coat and **a** hat. **The** hat was red.'],
            ['There is only one in the situation', 'Pass me **the** salt. Lock **the** door. Where is **the** teacher? Turn off **the** lights.'],
            ['There is only one in the world', '**the** sun, **the** moon, **the** sky, **the** internet, **the** Earth (also just *Earth*), **the** sea, **the** environment, **the** world'],
            ['A phrase or clause after the noun identifies it', '**the** man in the blue shirt, **the** book that I lent you, **the** capital of France, **the** end of the film'],
            ['Superlatives and ordinals', '**the** best day, **the** tallest building, **the** first time, **the** last train, **the** only one, **the** same answer, **the** next stop, **the** worst idea'],
            ['Some place names', '**the** Thames, **the** Alps, **the** Pacific, **the** Sahara, **the** United Kingdom, **the** USA, **the** Netherlands, **the** Philippines'],
            ['Instruments, and groups described by an adjective', 'She plays **the** piano. **the** rich, **the** elderly, **the** unemployed, **the** young, **the** British, **the** French'],
            ['Some institutions and the media', '**the** police, **the** army, **the** government, **the** news, **the** radio, **the** cinema, **the** theatre, **the** press'],
          ],
        },
        {
          t: 'example',
          title: 'A then the: a short story',
          lines: [
            { label: '1', text: 'Once there was **a** king who lived in **a** castle.' },
            { label: '2', text: '**The** king was lonely, and **the** castle was cold.' },
            { label: '3', text: 'One day **a** stranger arrived with **a** gift.' },
            { label: '4', text: '**The** stranger said that **the** gift would bring **the** king happiness.' },
            { label: 'Why', text: 'Each noun gets *a* when it first appears and *the* once the reader knows which one is meant.' },
          ],
        },
      ],
    },
    {
      id: 'zero',
      title: 'No article: the zero article',
      blocks: [
        {
          t: 'table',
          head: ['No article with...', 'Examples'],
          rows: [
            ['Plural nouns in general', '**Cats** are independent. I love **books**. **Teachers** work hard. **Phones** are expensive.'],
            ['Uncountable nouns in general', '**Water** boils at 100°C. **Music** relaxes me. **Information** is power. **Honesty** matters.'],
            ['Most names of people, cities, countries, continents, single mountains and lakes', '**Priya**, **London**, **France**, **Asia**, **Mount Fuji**, **Lake Geneva**, **Oxford Street**, **Hyde Park**'],
            ['Meals, sports, school subjects, languages', 'We had **lunch**. I play **football**. She studies **history**. He speaks **Spanish**.'],
            ['Institutions used for their main purpose', 'go to **school** (as a pupil), in **hospital** (as a patient), at **university**, in **prison**, go to **church** (to worship), at **work**, in **bed**, go **home**'],
            ['Transport with by', 'by **bus**, by **car**, by **train**, by **plane**, by **bike**, by **taxi**, by **sea**, by **air**'],
            ['Days, months and most holidays', 'on **Monday**, in **June**, at **Easter**, at **Christmas**, in **spring** (or in *the* spring)'],
          ],
        },
        {
          t: 'example',
          title: 'General versus specific',
          lines: [
            { label: 'General', text: '**Dogs** need exercise. (dogs in general: no article)' },
            { label: 'Specific', text: '**The dogs** next door bark all night. (particular dogs)' },
            { label: 'General', text: 'I don’t like **coffee**.' },
            { label: 'Specific', text: '**The coffee** in this café is excellent.' },
            { label: 'Institution', text: 'My aunt is in **hospital**. (a patient: British English)' },
            { label: 'Building', text: 'I went to **the hospital** to visit her. (the building)' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'British and American',
          text: 'British English says *in hospital*, *at university* and *at the weekend*; American English usually says *in the hospital*, *in college* and *on the weekend*. Both are correct in their own variety.',
        },
      ],
    },
    {
      id: 'quantifiers',
      title: 'Quantifiers: some, any, much, many, few, little',
      blocks: [
        {
          t: 'table',
          head: ['Quantifier', 'With', 'Examples'],
          rows: [
            ['some', 'Countable plural and uncountable; mostly positive statements, and offers', 'I have **some** friends here. There’s **some** milk. Would you like **some** tea?'],
            ['any', 'Questions and negatives; also “it doesn’t matter which”', 'Do you have **any** questions? I don’t have **any** money. Take **any** seat.'],
            ['many', 'Countable plural', '**many** people, **many** times, How **many** chairs? Not **many** students came.'],
            ['much', 'Uncountable; mostly questions and negatives', 'How **much** time? I don’t have **much** money. (In positive statements prefer *a lot of*: *I have a lot of time*.)'],
            ['a few / few', 'Countable plural', '**A few** friends came (some: positive). **Few** friends came (almost none: negative).'],
            ['a little / little', 'Uncountable', 'I have **a little** money (some). I have **little** money (hardly any).'],
            ['each / every', 'Singular countable', '**Each** student has a locker (one by one). **Every** student passed (all, as a group).'],
            ['no', 'Any noun', 'There is **no** milk. **No** students were late. I have **no** idea.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick: a few versus few',
          text: 'The little word *a* adds a little hope. “**A few** people came” sounds like a decent turnout; “**Few** people came” sounds disappointing. The same with *a little* and *little*.',
        },
        {
          t: 'p',
          text: 'For *fewer* versus *less* and *amount* versus *number*, see [Fewer or less, much or many](@grammar/usage/countable-fewer-less-much-many).',
        },
      ],
    },
    {
      id: 'errors',
      title: 'Common errors with corrections',
      blocks: [
        {
          t: 'table',
          head: ['Wrong', 'Right', 'Why'],
          rows: [
            ['She is engineer.', 'She is **an** engineer.', 'Singular countable jobs need *a/an*.'],
            ['I need an advice.', 'I need **some** advice / **a piece of** advice.', '*Advice* is uncountable.'],
            ['The life is short.', '**Life** is short.', 'Abstract noun in general: no article.'],
            ['I play the football on Saturdays.', 'I play **football** on Saturdays.', 'Sports take no article.'],
            ['He is the my brother.', 'He is **my** brother.', 'Only one central determiner.'],
            ['I live in the London.', 'I live in **London**.', 'Cities take no article.'],
            ['She is best student in class.', 'She is **the** best student in **the** class.', 'Superlatives need *the*; *the class* is a specific one.'],
            ['There isn’t some milk.', 'There isn’t **any** milk.', '*Any* in negatives.'],
            ['Every students passed.', 'Every **student** passed.', '*Every* and *each* take a singular noun.'],
            ['a hour, an university', '**an** hour, **a** university', 'Sound, not spelling, decides.'],
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Choose a, an, the, a quantifier, or nothing (–).',
      blocks: [
        {
          t: 'example',
          title: 'Twelve questions with answers',
          lines: [
            { label: 'Q1', text: 'It took ___ hour to get there.' },
            { label: 'A1', text: '**an**: *hour* starts with a vowel sound.' },
            { label: 'Q2', text: 'She’s studying at ___ university in Leeds.' },
            { label: 'A2', text: '**a**: *university* starts with a “you” sound.' },
            { label: 'Q3', text: '___ honesty is ___ best policy.' },
            { label: 'A3', text: '**–** Honesty is **the** best policy. Abstract noun in general, then a superlative.' },
            { label: 'Q4', text: 'I bought ___ jacket. ___ jacket was too small.' },
            { label: 'A4', text: '**a** jacket, then **The** jacket: first mention, then known.' },
            { label: 'Q5', text: 'She plays ___ violin and ___ tennis.' },
            { label: 'A5', text: '**the** violin (instrument), **–** tennis (sport).' },
            { label: 'Q6', text: 'We went to ___ Netherlands and then ___ Belgium.' },
            { label: 'A6', text: '**the** Netherlands (plural-type name), **–** Belgium.' },
            { label: 'Q7', text: 'Is there ___ (some / any) bread left?' },
            { label: 'A7', text: '**any**: a question.' },
            { label: 'Q8', text: 'How ___ (much / many) homework do you have?' },
            { label: 'A8', text: '**much**: *homework* is uncountable.' },
            { label: 'Q9', text: 'Only ___ (few / a few) people understood, so the lecture was a disaster.' },
            { label: 'A9', text: '**few**: almost none, a negative meaning.' },
            { label: 'Q10', text: 'He was sent to ___ prison for five years. His wife went to ___ prison to visit him.' },
            { label: 'A10', text: '**–** prison (as an inmate), **the** prison (the building).' },
            { label: 'Q11', text: 'She is ___ MP for a northern seat.' },
            { label: 'A11', text: '**an**: *MP* is said “em-pee”.' },
            { label: 'Q12', text: 'Correct: “Each of the players have a number.”' },
            { label: 'A12', text: '“Each of the players **has** a number.” *Each* is singular.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on articles, *some/any*, *few/a few* and *each/every*.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapter on noun phrases and determiners.',
    'Ritter, R. M. (2012). *New Hart’s Rules* (2nd ed.). Oxford University Press. On *a* and *an* before abbreviations and *h*.',
  ],
  related: [
    'grammar/parts-of-speech/nouns',
    'grammar/parts-of-speech/pronouns',
    'grammar/parts-of-speech/adjectives',
    'grammar/usage/countable-fewer-less-much-many',
    'grammar/usage/register-and-singapore-english',
  ],
}

export default guide
