import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The apostrophe has two jobs only: it shows **possession** (*the cat’s bowl*) and **contraction**, where letters are missing (*don’t*). It almost never makes a plural. Most apostrophe errors come from forgetting those two rules or from the handful of possessive words, such as *its*, *yours* and *theirs*, that never take one.',
  nutshell: [
    'Singular owner: add **’s**: *the dog’s lead*, *James’s car* (or *James’ car*).',
    'Plural owner ending in s: add **’** only: *the dogs’ leads*, *the Smiths’ house*.',
    'Plural owner not ending in s: add **’s**: *the children’s toys*, *women’s rights*.',
    '**It’s** = it is / it has. **Its** = belonging to it. The same goes for *who’s / whose*, *you’re / your*, *they’re / their*.',
    'Plurals do **not** take apostrophes: *two coffees*, *the 1990s*, *CDs*. (The “greengrocer’s apostrophe”, *banana’s £1*, is an error.)',
    'Possessive pronouns never take an apostrophe: *hers, its, ours, yours, theirs*.',
  ],
  sections: [
    {
      id: 'possession',
      title: 'Possession',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Write the owner', body: 'Write the noun that owns, in the form you mean: singular or plural. *girl*, *girls*, *child*, *children*.' },
            { title: '2. Add the apostrophe', body: 'Put the apostrophe directly after that word: *girl’*, *girls’*, *child’*, *children’*.' },
            { title: '3. Add s if you would say it', body: 'If the owner already ends in s and is plural, stop: *girls’*. Otherwise add s: *girl’s*, *child’s*, *children’s*.' },
          ],
        },
        {
          t: 'table',
          head: ['Owner', 'Possessive', 'Example'],
          rows: [
            ['one girl', 'girl’s', 'the girl’s bike (one girl)'],
            ['several girls', 'girls’', 'the girls’ bikes (more than one girl)'],
            ['one child', 'child’s', 'a child’s drawing'],
            ['children', 'children’s', 'the children’s playground'],
            ['one person', 'person’s', 'each person’s vote'],
            ['people', 'people’s', 'the people’s choice'],
            ['one boss', 'boss’s', 'my boss’s office'],
            ['bosses', 'bosses’', 'the bosses’ meeting'],
            ['the Patels (family)', 'Patels’', 'the Patels’ garden'],
            ['sheep (plural)', 'sheep’s', 'the sheep’s wool'],
          ],
        },
        {
          t: 'example',
          title: 'The apostrophe’s position changes the meaning',
          lines: [
            { label: 'One sister', text: 'My **sister’s** friends are coming. (One sister, several friends.)' },
            { label: 'Several sisters', text: 'My **sisters’** friends are coming. (Two or more sisters.)' },
            { label: 'One student', text: 'The **student’s** results. (One student.)' },
            { label: 'Several students', text: 'The **students’** results. (A whole class.)' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Names ending in s',
          text: 'Both *James’s* and *James’* are accepted. Most modern British and American guides (Oxford, Chicago) prefer **’s** for singular names, matching speech: *James’s, Chris’s, Thomas’s*. Some styles (AP) add only an apostrophe. Classical and biblical names are often left as *Jesus’*, *Socrates’*, *Achilles’*. Pick one approach and keep to it.',
        },
      ],
    },
    {
      id: 'joint',
      title: 'Joint, separate and special possession',
      blocks: [
        {
          t: 'example',
          title: 'Shared or separate ownership',
          lines: [
            { label: 'Shared', text: '**Ana and Leo’s** flat. (One flat, owned by both: apostrophe on the last name only.)' },
            { label: 'Separate', text: '**Ana’s and Leo’s** phones. (Each has a phone.)' },
            { label: 'Shared', text: '**Marks and Spencer’s** profits.' },
            { label: 'With a pronoun', text: '**Ana’s and my** flat. (Pronoun takes its own possessive form; *me and Ana’s* is informal.)' },
          ],
        },
        {
          t: 'example',
          title: 'Time, compound nouns and places',
          lines: [
            { label: 'Time', text: 'a **day’s** work; two **weeks’** notice; in three **years’** time; **yesterday’s** news' },
            { label: 'Compound noun', text: 'my **mother-in-law’s** car; the **Secretary of State’s** decision' },
            { label: 'Shops and homes', text: 'I’m going to the **dentist’s** / the **butcher’s** / **Mia’s**. (= the dentist’s surgery, Mia’s house)' },
            { label: 'Organisation names', text: 'Some drop it by choice: *Barclays*, *Harrods*, *Waterstones*. Follow the brand.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Expressions of time',
          text: '*Two weeks’ notice* and *five years’ experience* need the apostrophe after the s; *a week’s holiday* has it before. Many writers forget it here, but formal British usage expects it.',
        },
      ],
    },
    {
      id: 'contraction',
      title: 'Contractions',
      blocks: [
        { t: 'p', text: 'In a contraction the apostrophe goes where the missing letters were, not where the two words meet.' },
        {
          t: 'table',
          head: ['Full form', 'Contraction', 'Note'],
          rows: [
            ['do not', 'don’t', 'not *do’nt*'],
            ['does not', 'doesn’t', ''],
            ['cannot', 'can’t', ''],
            ['will not', 'won’t', 'irregular'],
            ['I am', 'I’m', ''],
            ['it is / it has', 'it’s', 'never possessive'],
            ['they are', 'they’re', ''],
            ['who is / who has', 'who’s', ''],
            ['you are', 'you’re', ''],
            ['would have', 'would’ve', 'never *would of*'],
            ['let us', 'let’s', 'compare *lets* = allows'],
            ['of the clock', 'o’clock', ''],
            ['1990s, 1960s', '’90s, ’60s', 'apostrophe for the missing century'],
            ['rock and roll, fish and chips', 'rock ’n’ roll, fish ’n’ chips', 'both letters missing'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Would of, could of, should of',
          text: 'In speech *would’ve* sounds like *would of*, but the word is *have*. Write *would have*, *could’ve*, *should have*: never *would of*.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Formal writing',
          text: 'Many academic and formal styles avoid contractions altogether. Write *do not*, *it is*, *cannot* in essays and reports unless your style guide or teacher says otherwise.',
        },
      ],
    },
    {
      id: 'its',
      title: 'Its, it’s and the other pairs',
      blocks: [
        {
          t: 'table',
          head: ['Possessive (no apostrophe)', 'Contraction (apostrophe)', 'Test'],
          rows: [
            ['its: *The dog wagged its tail.*', 'it’s: *It’s raining.*', 'Can you say *it is* or *it has*? Then *it’s*.'],
            ['whose: *Whose bag is this?*', 'who’s: *Who’s coming?*', '*who is / who has*?'],
            ['your: *Is this your coat?*', 'you’re: *You’re late.*', '*you are*?'],
            ['their: *Their house is blue.*', 'they’re: *They’re here.*', '*they are*?'],
            ['theirs, yours, hers, ours', '(none)', 'Possessive pronouns: never an apostrophe.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick',
          text: '*His*, *hers* and *its* belong together: none of them has an apostrophe. If *his* has no apostrophe, neither does *its*.',
        },
        {
          t: 'example',
          title: 'Before and after',
          lines: [
            { label: 'Wrong', text: 'The company changed it’s logo.' },
            { label: 'Right', text: 'The company changed **its** logo.' },
            { label: 'Wrong', text: 'Its been a long day.' },
            { label: 'Right', text: '**It’s** been a long day. (it has)' },
            { label: 'Wrong', text: 'Is this book your’s?' },
            { label: 'Right', text: 'Is this book **yours**?' },
            { label: 'Wrong', text: 'Who’s turn is it?' },
            { label: 'Right', text: '**Whose** turn is it?' },
          ],
        },
      ],
    },
    {
      id: 'plurals',
      title: 'Apostrophes and plurals',
      blocks: [
        {
          t: 'example',
          title: 'The greengrocer’s apostrophe',
          lines: [
            { label: 'Wrong', text: 'Fresh tomato’s £2 a kilo.' },
            { label: 'Right', text: 'Fresh **tomatoes** £2 a kilo.' },
            { label: 'Wrong', text: 'We sell DVD’s and CD’s.' },
            { label: 'Right', text: 'We sell **DVDs** and **CDs**.' },
            { label: 'Wrong', text: 'The 1980’s were loud.' },
            { label: 'Right', text: 'The **1980s** were loud. (Or *the ’80s*.)' },
            { label: 'Wrong', text: 'The Wong’s are coming to dinner.' },
            { label: 'Right', text: 'The **Wongs** are coming to dinner.' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The one exception: single letters',
          text: 'Lower-case letters and some short words can take an apostrophe in the plural to avoid misreading: *Mind your p’s and q’s*, *dot the i’s*, *There are three a’s in “banana”*. Capital letters and numbers usually do not need one: *three As at A level*, *the 1990s*, *in twos and threes*. Style guides differ; aim for clarity.',
        },
        {
          t: 'dodont',
          do: [
            'Ask “who owns?” before reaching for an apostrophe.',
            'Write *the Joneses’ dog* for the family Jones (plural *Joneses*, then the apostrophe).',
            'Use *its* for belonging, every time.',
          ],
          dont: [
            'Add an apostrophe to make a plural: *pizza’s*, *MP’s*, *1970’s*.',
            'Put an apostrophe in possessive pronouns: *her’s*, *our’s*, *their’s*.',
            'Write *childrens’* or *peoples’*: the plurals already lack an s, so it is *children’s*, *people’s*.',
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
          title: 'Correct each sentence',
          lines: [
            { label: 'Q1', text: 'The cat licked it’s paw.' },
            { label: 'A1', text: 'The cat licked **its** paw. Possessive; *it is paw* makes no sense.' },
            { label: 'Q2', text: 'The childrens’ coats are in the hall.' },
            { label: 'A2', text: 'The **children’s** coats. *Children* is already plural and has no s.' },
            { label: 'Q3', text: 'I need three weeks notice.' },
            { label: 'A3', text: 'three **weeks’** notice. Plural time expression.' },
            { label: 'Q4', text: 'Theyre bringing there own food.' },
            { label: 'A4', text: '**They’re** bringing **their** own food.' },
            { label: 'Q5', text: 'Apple’s and pear’s for sale.' },
            { label: 'A5', text: '**Apples** and **pears** for sale. Plurals take no apostrophe.' },
            { label: 'Q6', text: 'Raj and Mei’s cars are both red. (They have one each.)' },
            { label: 'A6', text: '**Raj’s and Mei’s** cars. Separate ownership: both names take ’s.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7 to 12',
          lines: [
            { label: 'Q7', text: 'The teachers staffroom is upstairs. (Many teachers.)' },
            { label: 'A7', text: 'The **teachers’** staffroom. Plural ending in s: apostrophe only.' },
            { label: 'Q8', text: 'I should of called you.' },
            { label: 'A8', text: 'I **should have** (should’ve) called you.' },
            { label: 'Q9', text: 'Is this umbrella your’s or her’s?' },
            { label: 'A9', text: '**yours** or **hers**. Possessive pronouns never take an apostrophe.' },
            { label: 'Q10', text: 'My boss car is new.' },
            { label: 'A10', text: 'My **boss’s** car. Singular owner: ’s even after s.' },
            { label: 'Q11', text: 'Whos left the door open?' },
            { label: 'A11', text: '**Who’s** left the door open? (*who has*)' },
            { label: 'Q12', text: 'She grew up in the 1970’s.' },
            { label: 'A12', text: 'the **1970s** (or *the ’70s*). Decades are plurals.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Truss, L. (2003) *Eats, Shoots and Leaves*. Profile Books.',
    'Ritter, R. M. (2012) *New Hart’s Rules*, 2nd edn. Oxford University Press.',
    'Trask, R. L. (1997) *The Penguin Guide to Punctuation*. Penguin.',
    'The University of Chicago Press (2017) *The Chicago Manual of Style*, 17th edn.',
  ],
  related: [
    'grammar/parts-of-speech/nouns',
    'grammar/parts-of-speech/pronouns',
    'grammar/usage/commonly-confused-words',
    'grammar/punctuation/hyphens-capitals-numbers',
    'grammar/practice/drills-verbs-and-punctuation',
  ],
}

export default guide
