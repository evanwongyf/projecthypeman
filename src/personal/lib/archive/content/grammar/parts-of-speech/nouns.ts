import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **noun** is a word that names something: a person, a place, a thing, an animal, an idea or a feeling. Nouns are the largest word class in English and the backbone of most sentences, because the subject and the object are usually nouns or built around them.',
  nutshell: [
    'A noun names a person, place, thing or idea: *teacher*, *Singapore*, *pencil*, *honesty*.',
    '**Proper nouns** name one particular thing and take a capital letter; **common nouns** name a general kind.',
    '**Countable** nouns have plurals (*one chair, two chairs*); **uncountable** nouns usually do not (*furniture*, *advice*).',
    'Most plurals add *-s* or *-es*, but many follow older patterns: *children*, *mice*, *criteria*, *sheep*.',
    'Possessives use an apostrophe: *the dog’s bowl* (one dog), *the dogs’ bowls* (several), *the children’s toys*.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What counts as a noun',
      blocks: [
        {
          t: 'p',
          text: 'In plain English, a noun is a **naming word**. A more reliable test is what a word can do: a noun can usually follow *the* or *a*, can usually be made plural, and can be the subject of a verb. If you can put *the* in front of it and it makes sense, it is very likely a noun.',
        },
        {
          t: 'example',
          title: 'Three quick tests',
          lines: [
            { label: 'The test', text: '*the* happiness, *the* river, *the* idea: all nouns. But *the quickly* makes no sense, so *quickly* is not a noun.' },
            { label: 'Plural test', text: 'one idea, two *ideas*; one box, two *boxes*. (Uncountable nouns fail this one, so use the other two as well.)' },
            { label: 'Subject test', text: '*Honesty* matters. *Rivers* flood. *Information* helps. Each can be the subject of a verb.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Ideas are nouns too',
          text: 'Pupils often think nouns must be things you can touch. *Freedom*, *anger*, *childhood* and *maths* are all nouns: they name something, even if it is abstract.',
        },
      ],
    },
    {
      id: 'types',
      title: 'The types of noun',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'What it names', 'Examples'],
          rows: [
            ['Common', 'A general kind of person, place or thing', 'teacher, city, river, phone, dog, school, car, mountain, song, doctor'],
            ['Proper', 'One particular person, place, organisation, day or title (capital letter)', 'Priya, London, the Thames, Monday, July, Google, the Bible, Mount Everest, Christmas, Hamlet'],
            ['Concrete', 'Something you can see, hear, touch, taste or smell', 'apple, music, smoke, table, rain, coffee, thunder, sand, brick, perfume'],
            ['Abstract', 'An idea, quality, feeling or state', 'love, courage, freedom, honesty, childhood, anger, knowledge, justice, patience, fear'],
            ['Collective', 'A group treated as one unit', 'team, family, class, committee, audience, flock, crew, government, jury, staff'],
            ['Countable', 'Things you can count; has a plural', 'chair, idea, student, apple, mistake, minute, coin, book, bottle, question'],
            ['Uncountable (mass)', 'Things seen as a mass, not separate units; usually no plural', 'water, advice, information, furniture, rice, luggage, homework, money, research, equipment'],
            ['Compound', 'Two or more words acting as one noun', 'toothbrush, bus stop, mother-in-law, football, ice cream, passer-by, swimming pool, haircut, washing machine, post office'],
          ],
          caption: 'The categories overlap: *dog* is common, concrete and countable all at once.',
        },
        {
          t: 'example',
          title: 'Labelling every noun in a sentence',
          lines: [
            { label: 'Sentence', text: 'On Monday, the team showed great courage in Manchester.' },
            { label: 'Monday', text: 'proper (a named day)' },
            { label: 'team', text: 'common, collective, countable' },
            { label: 'courage', text: 'common, abstract, uncountable' },
            { label: 'Manchester', text: 'proper (a named place)' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Same word, countable and uncountable',
          text: 'Many nouns switch depending on meaning. *Paper* (the material) is uncountable; *a paper* (a newspaper or an essay) is countable. Others: *coffee* / *two coffees* (cups), *experience* (knowledge) / *an experience* (an event), *light* / *the lights*, *time* / *three times*, *hair* (all of it) / *a hair* (one strand).',
        },
      ],
    },
    {
      id: 'plurals',
      title: 'Making plurals',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Singular → plural'],
          rows: [
            ['Most nouns: add -s', 'cat → cats, book → books, idea → ideas, road → roads, girl → girls, tree → trees, pen → pens, day → days'],
            ['Ending -s, -ss, -sh, -ch, -x, -z: add -es', 'bus → buses, glass → glasses, wish → wishes, church → churches, box → boxes, fox → foxes, quiz → quizzes, match → matches'],
            ['Consonant + y: change y to -ies', 'city → cities, baby → babies, party → parties, story → stories, lady → ladies, country → countries, fly → flies, study → studies'],
            ['Vowel + y: just add -s', 'boy → boys, day → days, key → keys, toy → toys, monkey → monkeys, valley → valleys, journey → journeys, tray → trays'],
            ['-f or -fe: often -ves', 'leaf → leaves, knife → knives, wife → wives, half → halves, wolf → wolves, shelf → shelves, life → lives, loaf → loaves (but roof → roofs, chief → chiefs, belief → beliefs)'],
            ['-o: some add -es, some -s', 'potato → potatoes, tomato → tomatoes, hero → heroes, echo → echoes; but photo → photos, piano → pianos, radio → radios, video → videos'],
            ['Irregular (old English patterns)', 'child → children, man → men, woman → women, foot → feet, tooth → teeth, mouse → mice, goose → geese, person → people, ox → oxen'],
            ['Same in both', 'sheep, deer, fish (usually), aircraft, series, species, salmon, means'],
            ['Latin and Greek', 'criterion → criteria, phenomenon → phenomena, cactus → cacti (or cactuses), analysis → analyses, crisis → crises, thesis → theses, datum → data, fungus → fungi'],
            ['Compounds: pluralise the main word', 'mother-in-law → mothers-in-law, passer-by → passers-by, runner-up → runners-up, but toothbrush → toothbrushes'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Data and media',
          text: 'Strictly, *data* is the plural of *datum*, so formal scientific writing often says “the data **are**”. In everyday and much professional English, *data* is treated as an uncountable noun: “the data **is** clear”. Both are accepted; pick one and be consistent.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick for -o plurals',
          text: '“My heroes ate potatoes and tomatoes” collects the most common -oes words. Words cut short from longer ones (*photo*graph, *piano*forte) and music or technology words (*radio*, *video*, *solo*) take just -s.',
        },
      ],
    },
    {
      id: 'possessive',
      title: 'Possessive nouns',
      blocks: [
        {
          t: 'p',
          text: 'To show that something belongs to a noun, add an apostrophe and *s*. The position of the apostrophe tells the reader whether there is one owner or several.',
        },
        {
          t: 'table',
          head: ['Owner', 'Rule', 'Examples'],
          rows: [
            ['One owner', 'Add ’s', 'the girl’s bag, the teacher’s desk, Sam’s phone, the city’s parks, my brother’s car, a week’s holiday, the dog’s lead, today’s news'],
            ['Plural ending in -s', 'Add only the apostrophe', 'the girls’ bags, the teachers’ room, the dogs’ leads, two weeks’ notice, the players’ shirts, the Smiths’ house, my parents’ wedding, the students’ results'],
            ['Plural not ending in -s', 'Add ’s', 'the children’s toys, the men’s team, women’s rights, the people’s choice, the mice’s nest, the geese’s pond, the media’s coverage, the staff’s views'],
            ['Singular ending in -s', 'Usually add ’s (style guides vary)', 'James’s book, the bus’s engine, the boss’s office, Chris’s idea, Thomas’s car, the class’s results (some writers prefer James’ for names)'],
            ['Shared ownership', 'Apostrophe on the last name only', 'Tom and Amy’s flat (one flat they share)'],
            ['Separate ownership', 'Apostrophe on each name', 'Tom’s and Amy’s flats (two different flats)'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Write *the students’ work* when several students own it.',
            'Write *the children’s* (never *childrens’*).',
            'Use *of* for most non-living things in formal writing: *the end of the road* rather than *the road’s end* (both are possible).',
          ],
          dont: [
            'Use an apostrophe for a plain plural: *apple’s for sale* → **apples for sale**.',
            'Write *it’s* for possession: *the cat licked it’s paw* → **its paw**.',
            'Write *womens’*: the plural is already *women*, so it is **women’s**.',
          ],
        },
      ],
    },
    {
      id: 'tricky',
      title: 'Tricky cases and common errors',
      blocks: [
        {
          t: 'table',
          head: ['Wrong', 'Right', 'Why'],
          rows: [
            ['I need some advices.', 'I need some **advice**. / I need **two pieces of** advice.', '*Advice* is uncountable.'],
            ['She gave me many informations.', 'She gave me **a lot of information**.', '*Information* is uncountable.'],
            ['We bought new furnitures.', 'We bought new **furniture**.', 'Uncountable; for one item say *a piece of furniture* or *a chair*.'],
            ['I have a lot of homeworks.', 'I have a lot of **homework**.', 'Uncountable; *assignments* is the countable alternative.'],
            ['The criterias are strict.', 'The **criteria** are strict.', '*Criteria* is already plural.'],
            ['Two sheeps escaped.', 'Two **sheep** escaped.', 'Same form in singular and plural.'],
            ['The peoples were angry.', 'The **people** were angry.', '*People* is the plural of *person*. (*Peoples* means nations: *the peoples of Asia*.)'],
            ['I live in london.', 'I live in **London**.', 'Proper nouns take capitals.'],
            ['We study History on monday.', 'We study **history** on **Monday**.', 'School subjects are common nouns (except languages: *English*, *French*); days are proper.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Collective nouns: singular or plural verb?',
          text: 'In British English a collective noun can take either verb: *the team **is** winning* (the team as one unit) or *the team **are** arguing among themselves* (the members as individuals). American English usually prefers the singular. Whichever you choose, keep the pronouns consistent. See [Subject-verb agreement](@grammar/verbs/subject-verb-agreement).',
        },
        {
          t: 'example',
          title: 'Nouns that look plural but are not',
          lines: [
            { label: 'Singular verb', text: '*News* **is** good. *Mathematics* **is** hard. *Physics* **is** fun. *Measles* **is** contagious.' },
            { label: 'Plural verb', text: '*Scissors* **are** sharp. My *trousers* **are** too long. Your *glasses* **are** on the table. (Use *a pair of* to count them.)' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Answer each one, then check the answer and reason below it.',
      blocks: [
        {
          t: 'example',
          title: 'Ten questions with answers',
          lines: [
            { label: 'Q1', text: 'Find the nouns: “The courage of the firefighters impressed the city.”' },
            { label: 'A1', text: '*courage* (abstract), *firefighters* (common, plural), *city* (common). Each can take *the*.' },
            { label: 'Q2', text: 'Plural of *wolf*, *roof* and *hero*?' },
            { label: 'A2', text: '*wolves*, *roofs*, *heroes*. *Roof* is an exception to the -f → -ves pattern.' },
            { label: 'Q3', text: 'Correct: “Can you give me an advice?”' },
            { label: 'A3', text: '“Can you give me **some advice** / **a piece of advice**?” *Advice* is uncountable, so it cannot take *an*.' },
            { label: 'Q4', text: 'One teacher owns the car. Several teachers share the staffroom. Write both possessives.' },
            { label: 'A4', text: '*the teacher’s car*; *the teachers’ staffroom*. Singular adds ’s; a plural in -s adds only ’.' },
            { label: 'Q5', text: 'Is *happiness* concrete or abstract?' },
            { label: 'A5', text: 'Abstract: you cannot see or touch it, but it names a state, so it is a noun.' },
            { label: 'Q6', text: 'Plural of *analysis* and *phenomenon*?' },
            { label: 'A6', text: '*analyses* and *phenomena*: Greek patterns (-is → -es, -on → -a).' },
            { label: 'Q7', text: 'Correct the capitals: “we visited the eiffel tower in july.”' },
            { label: 'A7', text: '“**We** visited the **Eiffel Tower** in **July**.” Sentence start, a named landmark and a month.' },
            { label: 'Q8', text: '“The childrens’ playground” or “the children’s playground”?' },
            { label: 'A8', text: '*the children’s playground*. *Children* is already plural and does not end in -s, so add ’s.' },
            { label: 'Q9', text: 'Countable or uncountable: *luggage*, *suitcase*, *money*, *coin*?' },
            { label: 'A9', text: 'Uncountable: *luggage*, *money*. Countable: *suitcase*, *coin* (two suitcases, three coins).' },
            { label: 'Q10', text: 'Choose: “The news *is* / *are* bad.”' },
            { label: 'A10', text: '*is*. *News* ends in -s but is an uncountable singular noun.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on countable and uncountable nouns, plurals and possessives.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapter on nouns and noun phrases.',
    'Ritter, R. M. (2012). *New Hart’s Rules* (2nd ed.). Oxford University Press. On possessives of names ending in -s.',
  ],
  related: [
    'grammar/parts-of-speech/pronouns',
    'grammar/parts-of-speech/determiners-and-articles',
    'grammar/punctuation/apostrophes',
    'grammar/usage/countable-fewer-less-much-many',
    'grammar/verbs/subject-verb-agreement',
  ],
}

export default guide
