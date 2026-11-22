import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Hyphens, capital letters, numbers and abbreviations are matters of **convention** more than logic, which is why style guides differ. This guide gives the rules most British publishers follow, notes where American practice differs, and shows the cases where a hyphen or a capital changes the meaning.',
  nutshell: [
    'Hyphenate a **compound modifier before a noun**: *a well-known writer*, but *the writer is well known*.',
    'Do not hyphenate after an **-ly adverb**: *a highly paid job*, not *highly-paid*.',
    'Capitalise **proper nouns**, the first word of a sentence, *I*, days and months, but not seasons or ordinary job titles.',
    'In general prose, write **one to nine** (or up to one hundred, depending on the style guide) in words and larger numbers in figures; never start a sentence with a figure.',
    'British dates: **26 October 2026**; American: **October 26, 2026**. Avoid all-number dates when readers are international.',
    'British style drops the full stop in abbreviations ending in the word’s last letter (*Mr, Dr, St*); American keeps it (*Mr., Dr.*).',
  ],
  sections: [
    {
      id: 'hyphens',
      title: 'Hyphens',
      blocks: [
        {
          t: 'example',
          title: 'Compound modifiers before a noun',
          lines: [
            { label: 'Before noun', text: 'a **well-known** actor; a **part-time** job; an **up-to-date** map; a **five-year-old** girl' },
            { label: 'After verb', text: 'The actor is **well known**. The job is **part time**. The map is **up to date**. She is **five years old**.' },
            { label: 'Meaning', text: 'a **man-eating** shark (it eats people) versus a **man eating** shark (a man having dinner)' },
            { label: 'Meaning', text: 'twenty-**odd** students (about twenty) versus twenty **odd** students (twenty strange ones)' },
            { label: 'Meaning', text: 'a **small-business** owner (owns a small business) versus a **small business owner** (ambiguous: is the business small, or the owner?)' },
          ],
        },
        {
          t: 'table',
          head: ['Hyphenate', 'Do not hyphenate'],
          rows: [
            ['a well-paid job', 'a highly paid job (-ly adverb)'],
            ['a long-term plan', 'in the long term (noun phrase, not a modifier)'],
            ['a first-class ticket', 'travelling first class (after the verb)'],
            ['a 10-page report', 'a report of 10 pages'],
            ['a three-hour meeting', 'a meeting of three hours'],
            ['an English-speaking country', 'they speak English'],
          ],
        },
        {
          t: 'table',
          head: ['Other hyphen jobs', 'Examples'],
          rows: [
            ['Numbers 21 to 99 in words', 'twenty-one, forty-five, ninety-nine'],
            ['Fractions as modifiers', 'a two-thirds majority (as a noun: *two thirds of the class*, British; US often *two-thirds*)'],
            ['Prefixes before a capital or number', 'pre-war, post-1945, un-British, mid-July'],
            ['ex-, self-, all-', 'ex-husband, self-esteem, all-inclusive'],
            ['To avoid a double vowel or confusion', 're-enter, co-operate (British; US often *cooperate*), anti-inflammatory'],
            ['To separate meanings', 're-cover a sofa / recover from flu; re-sign a contract / resign from a job'],
            ['Suspended hyphen', 'two- and three-bedroom flats; pre- and post-war Britain'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Open, hyphenated or closed?',
          text: 'Compounds tend to drift from open (*e mail*) to hyphenated (*e-mail*) to closed (*email*) as they become familiar. British English often keeps hyphens longer than American (*co-ordinate* versus *coordinate*). When unsure, check a current dictionary and stay consistent.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Hyphen is not a dash',
          text: 'A hyphen (-) joins words. An en dash (–) shows ranges (1990–99) and is the spaced dash in British style. See [Semicolons, colons and dashes](@grammar/punctuation/semicolons-colons-dashes).',
        },
      ],
    },
    {
      id: 'capitals',
      title: 'Capital letters',
      blocks: [
        {
          t: 'table',
          head: ['Capitalise', 'Do not capitalise'],
          rows: [
            ['Names of people, places, organisations: *Lee Kuan Yew, Ipoh, the United Nations*', 'Common nouns: *a city, a prime minister, a river*'],
            ['Days, months, festivals: *Monday, March, Diwali, Christmas*', 'Seasons: *spring, summer, autumn, winter*'],
            ['Nationalities, languages, religions: *French, Malay, Buddhist*', 'School subjects that are not languages: *maths, history, biology*'],
            ['Titles before a name: *President Lincoln, Dr Ng, Aunt Sue*', 'Titles used generally: *the president, a doctor, my aunt*'],
            ['Named regions: *the Middle East, the North of England (as a region)*', 'Compass directions: *drive north, the north side of town*'],
            ['Brand names: *Google, Lego*', 'Generic verbs from brands, increasingly: *to google something*'],
            ['Historical periods and events: *the Renaissance, the Second World War*', 'General periods: *the twentieth century, the medieval period* (styles vary)'],
            ['The pronoun *I*', '*me*, *my*'],
          ],
        },
        {
          t: 'example',
          title: 'Capitals that change meaning',
          lines: [
            { label: '1', text: 'We flew to **Turkey** / we ate **turkey**. (The country versus the bird.)' },
            { label: '2', text: 'She works for the **Government** (in the UK, the particular government) / every **government** has a budget.' },
            { label: '3', text: '**Polish** the silver / **polish** your shoes / a **Polish** city.' },
            { label: '4', text: 'He is a **democrat** (supports democracy) / a **Democrat** (a member of the US party).' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Headings and titles',
          text: '**Title case** capitalises the main words: *The Lord of the Rings*. **Sentence case** capitalises only the first word and proper nouns: *How to write a good essay*. Book and film titles use title case everywhere. For headings, many British publishers and websites (including GOV.UK) prefer sentence case; American style guides more often use title case.',
        },
      ],
    },
    {
      id: 'numbers',
      title: 'Numbers, dates and times',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Example'],
          rows: [
            ['Small numbers in words in general prose (one to nine is common; some styles go to one hundred)', 'three apples, nine days, then 12 weeks'],
            ['Figures for 10 and above (in the one-to-nine system)', '15 students, 240 pages'],
            ['Never start a sentence with a figure', '**Twenty-two** people came. / *22 people came* (wrong).'],
            ['Figures for measurements, money, percentages, scores', '5 km, £3.50, 40 per cent (British) / 40 percent (US) / 40%, a 2–1 win'],
            ['Be consistent within a sentence', '*between 8 and 12 hours*, not *between eight and 12 hours*'],
            ['Large round numbers', '3 million, £2.5 billion'],
            ['Centuries', 'the twenty-first century (noun); twenty-first-century technology (modifier); in figures, the 21st century'],
          ],
        },
        {
          t: 'table',
          head: ['Item', 'British', 'American'],
          rows: [
            ['Full date', '26 October 2026', 'October 26, 2026'],
            ['Short date', '26/10/2026', '10/26/2026'],
            ['International (ISO 8601)', '2026-10-26', '2026-10-26'],
            ['Time', '10.30 am, or 10:30 (24-hour clock common)', '10:30 a.m.'],
            ['Decades', 'the 1990s, the ’90s', 'the 1990s, the ’90s'],
            ['Ordinals in dates', 'Usually none in writing: 4 July', '“July 4” written; “the Fourth of July” for the holiday'],
          ],
          caption: 'Writing *03/04/2026* means 3 April to a British reader and March 4 to an American one. Spell the month out.',
        },
        {
          t: 'example',
          title: 'Before and after',
          lines: [
            { label: 'Wrong', text: '15 people attended the meeting.' },
            { label: 'Right', text: '**Fifteen** people attended the meeting. / The meeting was attended by 15 people.' },
            { label: 'Wrong', text: 'She has 3 brothers and twelve cousins.' },
            { label: 'Right', text: 'She has **three** brothers and **12** cousins. (or follow one system consistently)' },
            { label: 'Wrong', text: 'The 4th of july, 2026' },
            { label: 'Right', text: '4 July 2026 (British) / July 4, 2026 (American)' },
          ],
        },
      ],
    },
    {
      id: 'abbreviations',
      title: 'Abbreviations and acronyms',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Abbreviation', def: 'Any shortened form: *Prof.*, *etc.*, *approx.*' },
            { term: 'Contraction (in this sense)', def: 'An abbreviation that keeps the first and last letters: *Mr, Mrs, Dr, St, Ltd*. British style: no full stop.' },
            { term: 'Initialism', def: 'Said letter by letter: *BBC, UK, CEO, FAQ*.' },
            { term: 'Acronym', def: 'Said as a word: *NASA, NATO, UNESCO, laser, scuba*. Some style guides write longer ones as *Nato, Unesco*.' },
          ],
        },
        {
          t: 'table',
          head: ['Convention', 'British', 'American'],
          rows: [
            ['Titles', 'Mr Tan, Dr Wilson, St Paul’s', 'Mr. Tan, Dr. Wilson, St. Paul’s'],
            ['Latin abbreviations', 'e.g., i.e., etc. (often with stops; some styles drop them: eg, ie)', 'e.g., i.e., etc. (with stops, usually followed by a comma)'],
            ['Initialisms', 'BBC, UK, USA', 'BBC, U.K. or UK, U.S. or US (AP uses U.S.)'],
          ],
        },
        {
          t: 'example',
          title: 'Using abbreviations well',
          lines: [
            { label: 'Define on first use', text: 'The World Health Organization (WHO) issued guidance. Later, the WHO said ...' },
            { label: 'Plurals', text: 'three **MPs**, two **CEOs**, many **FAQs** (no apostrophe)' },
            { label: 'a or an by sound', text: '**an** MP (“em”), **an** FAQ (“eff”), **a** UN report (“you”), **a** NATO base (“nay”)' },
            { label: 'e.g. versus i.e.', text: '*e.g.* = for example (some of many): *citrus fruits, e.g. lemons*. *i.e.* = that is (the only one): *the capital, i.e. London*.' },
            { label: 'etc.', text: 'Do not use *etc.* after *such as* or *e.g.*: they already signal an incomplete list.' },
            { label: 'Sentence end', text: 'If a sentence ends with *etc.*, do not add a second full stop.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        {
          t: 'example',
          title: 'Questions 1 to 6',
          lines: [
            { label: 'Q1', text: 'Hyphen or not? *She is a well respected teacher.*' },
            { label: 'A1', text: 'a **well-respected** teacher. Compound modifier before the noun.' },
            { label: 'Q2', text: 'Hyphen or not? *It was a beautifully-written letter.*' },
            { label: 'A2', text: '**beautifully written**. No hyphen after an -ly adverb.' },
            { label: 'Q3', text: 'Correct the capitals: *we visited paris in the Spring and studied French and History.*' },
            { label: 'A3', text: '**We** visited **Paris** in the **spring** and studied French and **history**.' },
            { label: 'Q4', text: 'Correct: *The President of France met president Lee.*' },
            { label: 'A4', text: 'The **president** of France met **President** Lee. Capital only before a name (styles vary for heads of state; be consistent).' },
            { label: 'Q5', text: 'Correct: *12 students failed.*' },
            { label: 'A5', text: '**Twelve** students failed. Do not start a sentence with a figure.' },
            { label: 'Q6', text: 'a or an? *___ FBI agent; ___ university; ___ hour; ___ MBA.*' },
            { label: 'A6', text: '**an** FBI agent, **a** university, **an** hour, **an** MBA. Choose by the sound.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7 to 12',
          lines: [
            { label: 'Q7', text: 'Write in British style: *Mr. Smith arrived on May 3, 2025.*' },
            { label: 'A7', text: '**Mr Smith arrived on 3 May 2025.**' },
            { label: 'Q8', text: 'Recover or re-cover? *We need to ___ the old armchair.*' },
            { label: 'A8', text: '**re-cover**: put a new cover on. *Recover* means get back or get better.' },
            { label: 'Q9', text: 'Correct: *a two and three year contract.*' },
            { label: 'A9', text: 'a **two- or three-year** contract. Suspended hyphen.' },
            { label: 'Q10', text: 'e.g. or i.e.? *Bring a warm layer, ___ a fleece or jumper.*' },
            { label: 'A10', text: '**e.g.**: these are examples, not the only option.' },
            { label: 'Q11', text: 'Correct: *She works in the twenty first century technology sector.*' },
            { label: 'A11', text: '**twenty-first-century** technology sector. Hyphens as a compound modifier.' },
            { label: 'Q12', text: 'Correct: *We drove North to visit the Lake District.*' },
            { label: 'A12', text: 'We drove **north**. A direction, not a region name.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Ritter, R. M. (2012) *New Hart’s Rules*, 2nd edn. Oxford University Press.',
    'The Economist (2018) *The Economist Style Guide*, 12th edn. Profile Books.',
    'The University of Chicago Press (2017) *The Chicago Manual of Style*, 17th edn.',
    'Government Digital Service, *GOV.UK style guide* (online).',
  ],
  related: [
    'grammar/punctuation/semicolons-colons-dashes',
    'grammar/punctuation/apostrophes',
    'grammar/parts-of-speech/determiners-and-articles',
    'grammar/parts-of-speech/adjectives',
    'grammar/usage/spelling-rules',
  ],
}

export default guide
