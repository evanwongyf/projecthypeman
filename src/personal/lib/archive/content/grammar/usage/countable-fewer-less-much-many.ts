import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Whether you write *fewer* or *less*, *many* or *much*, *number* or *amount* depends on one property of the noun: can you count it? Get that right and a whole family of quantity words falls into place.',
  nutshell: [
    '**Countable** nouns have a plural and take *a/an* and numbers: *a chair, three chairs*. **Uncountable** nouns do not: *furniture*, never *a furniture* or *furnitures*.',
    'Countable takes **many, few, fewer, a number of**. Uncountable takes **much, little, less, an amount of**.',
    'Some words work with both: **some, any, a lot of, lots of, plenty of, more, most, enough, no**.',
    '*Less* is normal with numbers that measure time, money, distance and weight: *less than ten minutes*, *less than $20*.',
    '*A few* and *a little* are positive (some); *few* and *little* without *a* are negative (hardly any).',
  ],
  sections: [
    {
      id: 'count-test',
      title: 'Countable or uncountable?',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Try a number', body: 'Can you say *three ___s*? *Three apples* yes; *three advices* no.' },
            { title: 'Try a/an', body: 'Can you say *a ___*? *An idea* yes; *an information* no.' },
            { title: 'Try a unit word', body: 'If not, you need a unit noun to count it: *a piece of advice*, *an item of news*, *a grain of rice*, *a bar of soap*.' },
          ],
        },
        {
          t: 'table',
          head: ['Uncountable noun', 'Wrong', 'Right', 'To count it'],
          caption: 'Nouns that are uncountable in English even when they are countable in other languages',
          rows: [
            ['advice', 'She gave me many advices.', 'She gave me a lot of advice.', 'a piece of advice, two tips'],
            ['information', 'I need some informations.', 'I need some information.', 'a piece of information, a fact, a detail'],
            ['furniture', 'We bought new furnitures.', 'We bought new furniture.', 'a piece of furniture, a chair'],
            ['equipment', 'The lab has many equipments.', 'The lab has a lot of equipment.', 'a piece of equipment, an instrument'],
            ['luggage / baggage', 'Two luggages, please.', 'Two pieces of luggage, please.', 'a bag, a suitcase'],
            ['homework', 'I have three homeworks.', 'I have three pieces of homework / three assignments.', 'an assignment, a worksheet'],
            ['news', 'The news are bad.', 'The news **is** bad.', 'a piece of news, a news item'],
            ['research', 'She did many researches.', 'She did a lot of research.', 'a study, a research project'],
            ['evidence', 'There are many evidences.', 'There is a lot of evidence.', 'a piece of evidence, a clue'],
            ['knowledge', 'He has good knowledges of maths.', 'He has a good knowledge of maths.', '(*a good knowledge of* is an accepted set phrase)'],
            ['feedback', 'Thanks for the feedbacks.', 'Thanks for the feedback.', 'a comment, a suggestion'],
            ['traffic', 'There were many traffics.', 'There was a lot of traffic.', 'a car, a jam'],
            ['progress', 'We made many progresses.', 'We made a lot of progress.', 'a step forward'],
            ['accommodation (British)', 'Cheap accommodations.', 'Cheap accommodation.', 'a room, a flat. (American English often uses *accommodations*.)'],
            ['weather', 'We had a good weather.', 'We had good weather.', 'a sunny day, a storm'],
          ],
        },
        {
          t: 'table',
          head: ['Noun', 'Uncountable sense', 'Countable sense'],
          caption: 'Nouns that change meaning when they become countable',
          rows: [
            ['paper', 'Print it on recycled **paper**.', 'I read **a paper** on climate. Buy **a paper** (newspaper).'],
            ['time', 'We don’t have much **time**.', 'I’ve been there three **times**. Those were hard **times**.'],
            ['experience', 'She has **experience** in sales.', 'The trip was **an** unforgettable **experience**.'],
            ['coffee / tea', 'I drink too much **coffee**.', 'Two **coffees**, please. (two cups)'],
            ['hair', 'She has long **hair**.', 'There’s **a hair** in my soup.'],
            ['room', 'Is there **room** for one more?', 'The flat has three **rooms**.'],
            ['light', 'Plants need **light**.', 'Turn off **the lights**.'],
            ['business', '**Business** is good this year.', 'She runs two **businesses**.'],
            ['chicken', 'I had **chicken** for lunch. (meat)', 'The farm keeps forty **chickens**. (birds)'],
          ],
        },
      ],
    },
    {
      id: 'quantity-words',
      title: 'Which quantity word goes with which noun',
      blocks: [
        {
          t: 'table',
          head: ['With countable (plural) nouns', 'With uncountable nouns', 'With both'],
          rows: [
            ['many questions', 'much time', 'some / any'],
            ['few friends, a few friends', 'little money, a little money', 'a lot of / lots of'],
            ['fewer mistakes', 'less noise', 'plenty of'],
            ['a number of reasons', 'an amount of rain', 'more / most'],
            ['several options', 'a great deal of effort', 'enough'],
            ['a couple of days', 'a bit of luck', 'no / all'],
            ['each / every student (singular noun)', 'a large quantity of sand', 'not any, hardly any'],
          ],
        },
        {
          t: 'example',
          title: 'The pairs side by side',
          lines: [
            { label: 'many / much', text: 'How **many** people came? How **much** food is left?' },
            { label: 'fewer / less', text: '**Fewer** cars means **less** pollution.' },
            { label: 'number / amount', text: 'A large **number** of students complained about the **amount** of homework.' },
            { label: 'few / little', text: 'There are **few** buses after midnight, and **little** chance of a taxi.' },
            { label: 'several / a great deal of', text: '**Several** volunteers put in **a great deal of** work.' },
          ],
        },
      ],
    },
    {
      id: 'fewer-less',
      title: 'Fewer or less',
      blocks: [
        {
          t: 'dodont',
          do: [
            '**Fewer** people, calories, mistakes, words, items.',
            '**Less** sugar, time, stress, water, money.',
            '**Less than** 10 kilometres, 30 minutes, $50, 2 kilograms (one measured quantity).',
            '*One less thing to worry about* (a fixed idiom).',
          ],
          dont: [
            '*Less people came this year* (write *fewer people*).',
            '*There were less mistakes* (write *fewer mistakes*).',
            '*Fewer than five minutes* in most contexts (time is treated as an amount: *less than five minutes*).',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why money and time take less',
          text: 'In *less than $50* or *less than an hour* you are not counting dollar coins or individual minutes; you are measuring one amount on a scale. The same goes for *less than 5 per cent*, *less than 18 years old* and *in less than three weeks*. Compare *fewer than 50 coins*, where you do count each one.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The supermarket sign',
          text: 'Signs reading *10 items or less* attract complaints from usage-minded shoppers, and some UK supermarkets reworded theirs to *Up to 10 items*. Usage dictionaries note that *or less* after a number is idiomatic and long established, but *fewer* remains the expected form in formal writing.',
        },
      ],
    },
    {
      id: 'much-many-few-little',
      title: 'Much and many in real sentences; few versus a few',
      blocks: [
        {
          t: 'p',
          text: '*Much* and *many* are most natural in **questions** and **negatives** and after *too*, *so*, *as* and *how*. In plain positive statements, especially with *much*, English usually prefers *a lot of*.',
        },
        {
          t: 'table',
          head: ['Sentence type', 'Natural', 'Sounds stiff or odd'],
          rows: [
            ['Question', 'How **much** does it cost? Were there **many** people?', '(both natural)'],
            ['Negative', 'I don’t have **much** time. There aren’t **many** seats.', '(both natural)'],
            ['Positive', 'I have **a lot of** homework. We saw **lots of** birds.', 'I have much homework.'],
            ['With too / so / as', 'You eat **too much** sugar. **So many** choices!', '(both natural)'],
            ['Formal positive', '**Much** research has been done on this.', 'Fine in academic writing, where *much* in positive statements is normal.'],
          ],
        },
        {
          t: 'example',
          title: 'A few versus few, a little versus little',
          lines: [
            { label: 'a few (positive)', text: 'I have **a few** friends in Penang, so I won’t be lonely.' },
            { label: 'few (negative)', text: '**Few** people understood the lecture. (hardly anyone)' },
            { label: 'a little (positive)', text: 'Add **a little** salt.' },
            { label: 'little (negative)', text: 'There is **little** hope of finding them now. (almost none)' },
            { label: 'quite a few', text: '**Quite a few** students stayed late. (a fairly large number)' },
          ],
        },
      ],
    },
    {
      id: 'agreement',
      title: 'Agreement with quantities',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Verb', 'Example'],
          rows: [
            ['*a number of* + plural noun', 'plural', '**A number of** students **are** absent.'],
            ['*the number of* + plural noun', 'singular', '**The number of** students **is** rising.'],
            ['*the amount of* + uncountable', 'singular', '**The amount of** rubbish **is** shocking.'],
            ['percentage / fraction + uncountable or singular', 'singular', '**Forty per cent of the class is** absent. **Half the cake has** gone.'],
            ['percentage / fraction + plural', 'plural', '**Forty per cent of students are** absent. **Half the cakes have** gone.'],
            ['*a lot of / plenty of* + noun', 'agrees with the noun', '**A lot of** water **was** wasted. **A lot of** people **were** late.'],
            ['*none of* + plural', 'singular (formal) or plural (common)', '**None of** the answers **is/are** correct.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Let the noun decide', text: 'With *a lot of*, *half of*, *some of* and percentages, look at the noun after *of*: an uncountable or singular noun takes a singular verb, a plural noun takes a plural verb. More on this in [subject-verb agreement](@grammar/verbs/subject-verb-agreement).' },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set with answers',
      blocks: [
        {
          t: 'example',
          title: 'Choose or correct',
          lines: [
            { label: 'Q1', text: 'There were (fewer / less) applicants this year.' },
            { label: 'A1', text: '**fewer**: applicants can be counted.' },
            { label: 'Q2', text: 'The journey takes (fewer / less) than forty minutes.' },
            { label: 'A2', text: '**less**: forty minutes is a single measured amount of time.' },
            { label: 'Q3', text: 'Correct it: *Can you give me some informations about the course?*' },
            { label: 'A3', text: '*some **information***: uncountable, no plural.' },
            { label: 'Q4', text: 'How (much / many) luggage are you bringing?' },
            { label: 'A4', text: '**much**: *luggage* is uncountable. (Or: *How many bags*.)' },
            { label: 'Q5', text: '(A number / An amount) of complaints (was / were) received.' },
            { label: 'A5', text: '**A number** … **were**: complaints are countable, and *a number of* takes a plural verb.' },
            { label: 'Q6', text: 'Which sentence is more hopeful? *(a) Few students passed. (b) A few students passed.*' },
            { label: 'A6', text: '**(b)**: *a few* means some; *few* means hardly any.' },
            { label: 'Q7', text: 'Correct it: *The lab bought many new equipments.*' },
            { label: 'A7', text: '*The lab bought **a lot of** new **equipment*** (or *many new instruments*).' },
            { label: 'Q8', text: 'Choose: *Sixty per cent of the budget (has / have) been spent.*' },
            { label: 'A8', text: '**has**: *budget* is singular.' },
            { label: 'Q9', text: 'Is *I had two coffees this morning* correct?' },
            { label: 'A9', text: 'Yes: *coffee* becomes countable when it means cups of coffee.' },
            { label: 'Q10', text: 'Correct it: *The news are on at seven.*' },
            { label: 'A10', text: '*The news **is** on at seven*: *news* is uncountable and singular despite the -s.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/parts-of-speech/nouns', note: 'Countable, uncountable and collective nouns' },
            { path: 'grammar/parts-of-speech/determiners-and-articles', note: 'Some, any and the other quantifiers' },
            { path: 'grammar/verbs/subject-verb-agreement', note: 'Verbs after quantities and collective nouns' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press, entries on countable and uncountable nouns, fewer and less, much and many.',
    'Merriam-Webster’s Dictionary of English Usage (1994), entry on less, fewer.',
    'Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). *Longman Grammar of Spoken and Written English*. Longman.',
  ],
  related: [
    'grammar/parts-of-speech/nouns',
    'grammar/parts-of-speech/determiners-and-articles',
    'grammar/verbs/subject-verb-agreement',
    'grammar/usage/commonly-confused-words',
  ],
}

export default guide
