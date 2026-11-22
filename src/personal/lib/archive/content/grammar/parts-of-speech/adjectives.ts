import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An **adjective** describes or identifies a noun or pronoun: a **red** coat, the **tired** runners, she is **clever**. Adjectives answer questions like what kind?, which one?, how many? and whose?. Used well, they make writing precise; piled up carelessly, they make it heavy.',
  nutshell: [
    'Adjectives describe nouns: *tall*, *wooden*, *Italian*, *exciting*.',
    'They go **before** a noun (*a quiet room*: attributive) or **after** a linking verb (*the room is quiet*: predicative).',
    'Several adjectives follow an order: **opinion, size, age, shape, colour, origin, material, purpose**: *a lovely big old round red Italian wooden dining table* (but stop at two or three in real writing).',
    'Comparatives compare two (*taller*, *more careful*); superlatives pick out one from three or more (*tallest*, *most careful*).',
    'After linking verbs use the adjective: I feel **bad**, it smells **good**.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What adjectives do and where they go',
      blocks: [
        {
          t: 'table',
          head: ['Position', 'Pattern', 'Examples'],
          rows: [
            ['Attributive', 'Before the noun', 'a **cold** drink, the **old** bridge, **heavy** rain, a **brilliant** idea, **young** children, a **narrow** street, **fresh** bread, an **honest** answer'],
            ['Predicative', 'After a linking verb', 'The drink is **cold**. The bridge looks **old**. She seems **happy**. They became **famous**. It got **dark**. You sound **tired**. I feel **ready**. It remained **quiet**.'],
            ['Postpositive', 'Straight after the noun (fixed or formal uses)', 'something **strange**, someone **new**, nothing **important**, the people **present**, the president **elect**, the members **concerned**, the best seats **available**, a sum **sufficient** for the trip'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Only one position',
          text: 'Some adjectives work only in one place. *Afraid*, *asleep*, *alive*, *alone* and *awake* are predicative: “the child is **asleep**”, not *an asleep child* (say *a sleeping child*). *Main*, *chief*, *mere* and *utter* are attributive: “the **main** reason”, not *the reason is main*.',
        },
      ],
    },
    {
      id: 'types',
      title: 'Kinds of adjective',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Job', 'Examples'],
          rows: [
            ['Descriptive (qualitative)', 'Says what something is like; can usually be graded with *very*', 'big, kind, noisy, beautiful, cheap, brave, soft, bright, clever, dull'],
            ['Classifying', 'Puts something in a category; not usually graded', 'annual, chemical, electric, medical, wooden, daily, nuclear, political, digital, rural'],
            ['Proper', 'Made from a proper noun; takes a capital', 'French, Shakespearean, Victorian, Asian, Christian, Japanese, Martian, Elizabethan, Malaysian, Darwinian'],
            ['Participial (-ed / -ing)', 'Formed from verbs', 'bored / boring, excited / exciting, broken, frozen, tired / tiring, confused / confusing, interested / interesting, surprised / surprising'],
            ['Compound', 'Two or more words joined, usually hyphenated before a noun', 'well-known, part-time, blue-eyed, four-year-old, long-term, world-famous, up-to-date, high-speed, kind-hearted, last-minute'],
            ['Number and quantity (often treated as determiners)', 'How many or what position', 'three, first, second, last, several, few, many, dozen, tenth, single'],
            ['Absolute (ungradable)', 'Already the extreme; not normally used with *very*', 'unique, perfect, dead, impossible, freezing, enormous, essential, complete, final, excellent'],
          ],
        },
        {
          t: 'example',
          title: '-ed or -ing?',
          lines: [
            { label: 'Rule', text: '**-ed** describes how a person **feels**; **-ing** describes the thing that **causes** the feeling.' },
            { label: 'Right', text: 'I was **bored** because the lecture was **boring**.' },
            { label: 'Right', text: 'The fans were **excited**; it was an **exciting** final.' },
            { label: 'Right', text: 'She was **confused** by the **confusing** instructions.' },
            { label: 'Wrong', text: '*I am very interesting in history* → I am very **interested** in history.' },
            { label: 'Note', text: '“He is **boring**” is grammatical, but it means he bores other people.' },
          ],
        },
      ],
    },
    {
      id: 'order',
      title: 'The order of adjectives',
      blocks: [
        {
          t: 'p',
          text: 'Native speakers put multiple adjectives in a fairly fixed order without thinking about it. “A big red ball” sounds right; “a red big ball” sounds odd. The usual order is:',
        },
        {
          t: 'flow',
          title: 'Adjective order (OSASCOMP)',
          nodes: [
            { label: 'Opinion', sub: 'lovely, ugly' },
            { label: 'Size', sub: 'big, tiny' },
            { label: 'Age', sub: 'old, new' },
            { label: 'Shape', sub: 'round, square' },
            { label: 'Colour', sub: 'red, pale' },
            { label: 'Origin', sub: 'French, Indian' },
            { label: 'Material', sub: 'wooden, silk' },
            { label: 'Purpose', sub: 'dining, running' },
          ],
          caption: 'Then the noun. A “purpose” word such as *dining* or *running* is really a noun modifier and sits right next to the noun.',
        },
        {
          t: 'table',
          head: ['Muddled', 'Natural order'],
          rows: [
            ['a wooden old lovely table', 'a **lovely old wooden** table (opinion, age, material)'],
            ['a red big balloon', 'a **big red** balloon (size, colour)'],
            ['Italian delicious food', '**delicious Italian** food (opinion, origin)'],
            ['a leather black new jacket', 'a **new black leather** jacket (age, colour, material)'],
            ['a round small mirror', 'a **small round** mirror (size, shape)'],
            ['running expensive shoes', '**expensive running** shoes (opinion, purpose)'],
            ['a silk Chinese blue scarf', 'a **blue Chinese silk** scarf (colour, origin, material)'],
            ['an old ugly huge castle', 'an **ugly huge old** castle (opinion, size, age)'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick',
          text: '**OSASCOMP**: Opinion, Size, Age, Shape, Colour, Origin, Material, Purpose. Or remember one model phrase and fit other adjectives into it: “a **lovely little old rectangular green French silver whittling** knife”, a famous example from Mark Forsyth’s *The Elements of Eloquence* (2013).',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Commas between adjectives',
          text: 'Use a comma between **coordinate** adjectives: ones of the same kind that could be swapped or joined with *and* (“a **long, tiring** day” = long and tiring). Use no comma between **cumulative** adjectives from different slots (“a **big red** bus”, not *a big, red bus*). Test: if *and* sounds natural between them, use a comma.',
        },
      ],
    },
    {
      id: 'comparison',
      title: 'Comparatives and superlatives',
      blocks: [
        {
          t: 'table',
          head: ['Adjective', 'Rule', 'Comparative', 'Superlative'],
          rows: [
            ['One syllable', 'Add -er / -est', 'tall → taller, small → smaller, fast → faster, cheap → cheaper', 'tallest, smallest, fastest, cheapest'],
            ['One syllable ending in -e', 'Add -r / -st', 'wide → wider, late → later, safe → safer, nice → nicer', 'widest, latest, safest, nicest'],
            ['CVC: double the consonant', 'Double, then add', 'big → bigger, hot → hotter, thin → thinner, sad → sadder', 'biggest, hottest, thinnest, saddest'],
            ['Two syllables ending in -y', 'y → i, add -er / -est', 'happy → happier, easy → easier, busy → busier, funny → funnier', 'happiest, easiest, busiest, funniest'],
            ['Two or more syllables (most)', 'more / most', 'more careful, more modern, more expensive, more interesting', 'most careful, most modern, most expensive, most interesting'],
            ['Some two-syllable words', 'Either form', 'quieter / more quiet, cleverer / more clever, simpler / more simple, narrower / more narrow', 'quietest, cleverest, simplest, narrowest'],
            ['Irregular', 'Learn them', 'good → better, bad → worse, far → further / farther, little → less, many / much → more', 'best, worst, furthest / farthest, least, most'],
          ],
        },
        {
          t: 'example',
          title: 'Comparison patterns',
          lines: [
            { label: 'Two things', text: 'My brother is **taller than** me. This test was **easier than** the last.' },
            { label: 'Three or more', text: 'She is **the tallest** in the class. It was **the worst** film of the year.' },
            { label: 'Equal', text: 'He is **as tall as** his dad. It is **not as cold as** yesterday.' },
            { label: 'Growing', text: 'It is getting **colder and colder**. The questions got **more and more difficult**.' },
            { label: 'Linked change', text: '**The more** you practise, **the better** you get.' },
            { label: 'Less / least', text: 'This route is **less crowded**. It was **the least expensive** option.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Comparing two? Use the comparative',
          text: 'Strictly, with two things use the comparative: “Of the two sisters, Ana is the **taller**.” Saying “the tallest” for two is common in speech but is marked wrong in careful writing.',
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
            ['This one is more better.', 'This one is **better**.', 'Never use *more* with an -er form (double comparative).'],
            ['She is the most kindest person.', 'She is the **kindest** person.', 'Double superlative.'],
            ['It was the most unique design.', 'It was a **unique** design. / a **highly unusual** design.', '*Unique* means one of a kind: it cannot be graded in careful writing.'],
            ['I feel badly about it.', 'I feel **bad** about it.', 'After a linking verb, use the adjective.'],
            ['He drives careful.', 'He drives **carefully**.', 'Describing how he drives needs an adverb.'],
            ['She is more taller than me.', 'She is **taller** than me.', 'Double comparative.'],
            ['I was very exciting about the trip.', 'I was very **excited** about the trip.', '-ed for the person who feels it.'],
            ['a four-years-old child', 'a **four-year-old** child', 'Compound adjectives before a noun use the singular: *a ten-pound note*, *a two-hour film*.'],
            ['funner, beautifuller', '**more fun**, **more beautiful**', 'Long adjectives (and *fun*, in careful writing) use *more*.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Choose one precise adjective over three vague ones: *drenched* beats *very, very wet*.',
            'Hyphenate compound adjectives before a noun: *a well-known author* (but *the author is well known*).',
            'Capitalise proper adjectives: *French* bread, *Victorian* houses.',
          ],
          dont: [
            'Lean on *nice*, *good*, *bad* and *very* when a sharper word exists.',
            'Stack more than three adjectives before one noun in normal prose.',
            'Write *more* or *most* with *unique*, *perfect* or *dead* in formal writing.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Try each one before reading the answer.',
      blocks: [
        {
          t: 'example',
          title: 'Ten questions with answers',
          lines: [
            { label: 'Q1', text: 'Find the adjectives: “The old farmer sold three fat pigs at the busy market.”' },
            { label: 'A1', text: '*old*, *three* (number), *fat*, *busy*. Each describes or counts a noun.' },
            { label: 'Q2', text: 'Reorder: “a cotton white beautiful dress”.' },
            { label: 'A2', text: '“a **beautiful white cotton** dress”: opinion, colour, material.' },
            { label: 'Q3', text: 'Comparative and superlative of *bad*, *thin* and *famous*?' },
            { label: 'A3', text: '*worse, worst*; *thinner, thinnest* (double the n); *more famous, most famous*.' },
            { label: 'Q4', text: 'Choose: “The film was so (bored / boring) that I left.”' },
            { label: 'A4', text: '**boring**: the film causes the feeling.' },
            { label: 'Q5', text: 'Attributive or predicative? “The water felt **icy**.”' },
            { label: 'A5', text: 'Predicative: it follows the linking verb *felt*.' },
            { label: 'Q6', text: 'Comma or not? “a cold wet morning”.' },
            { label: 'A6', text: '“a **cold, wet** morning”: *cold and wet* sounds natural, so they are coordinate.' },
            { label: 'Q7', text: 'Correct: “This is the most easiest question.”' },
            { label: 'A7', text: '“This is the **easiest** question.” Do not combine *most* and *-est*.' },
            { label: 'Q8', text: 'Hyphens? “She is a well known writer.”' },
            { label: 'A8', text: '“a **well-known** writer”: a compound adjective before the noun takes a hyphen.' },
            { label: 'Q9', text: 'Which is right with two items: “the better of the two” or “the best of the two”?' },
            { label: 'A9', text: '**the better of the two**: comparative for two.' },
            { label: 'Q10', text: 'Correct: “The soup tastes wonderfully.”' },
            { label: 'A10', text: '“The soup tastes **wonderful**.” *Tastes* is a linking verb here, so it takes an adjective.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on adjective order, comparison and -ed/-ing adjectives.',
    'Forsyth, M. (2013). *The Elements of Eloquence*. Icon Books. Source of the knife example of adjective order.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapter on adjectives and adverbs.',
  ],
  related: [
    'grammar/parts-of-speech/adverbs',
    'grammar/parts-of-speech/nouns',
    'grammar/parts-of-speech/determiners-and-articles',
    'grammar/punctuation/commas',
    'grammar/punctuation/hyphens-capitals-numbers',
  ],
}

export default guide
