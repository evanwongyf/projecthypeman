import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Quotation marks (also called **inverted commas** in British English) show the exact words someone said or wrote. The rules for dialogue are fixed and learnable: where the comma goes, when to use a capital, how to start a new speaker. The main choice is between **British** style (single quotes, logical punctuation) and **American** style (double quotes, commas and full stops always inside).',
  nutshell: [
    'Use quotation marks for **direct speech** and exact quotations, not for reported speech: *She said that she was tired.*',
    'British publishing usually uses **single** quotes ‘ ’ with double inside; American uses **double** “ ” with single inside.',
    'A spoken sentence ending before a tag takes a **comma**, not a full stop: ‘I’m tired,’ she said.',
    '**New speaker, new paragraph.**',
    'American style puts commas and full stops **inside** the closing quote always; British style puts them inside only if they belong to the quotation.',
    'Use quotation marks for short-work titles (songs, articles, chapters); use *italics* for long works (books, films, albums).',
  ],
  sections: [
    {
      id: 'styles',
      title: 'British and American styles',
      blocks: [
        {
          t: 'table',
          head: ['Feature', 'British (typical)', 'American'],
          rows: [
            ['Main quotes', '‘single’', '“double”'],
            ['Quote inside a quote', '‘He said “no”.’', '“He said ‘no.’”'],
            ['Comma or full stop at end of a quoted fragment', 'Outside: She called it ‘a disaster’.', 'Inside: She called it “a disaster.”'],
            ['Full spoken sentence', 'Inside: ‘It’s late.’', 'Inside: “It’s late.”'],
            ['Question or exclamation mark', 'Where it logically belongs', 'Where it logically belongs (same rule)'],
            ['Colons and semicolons', 'Outside', 'Outside'],
          ],
          caption: 'Many British newspapers use double quotes; what matters most is consistency within one piece of writing.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Logical punctuation',
          text: 'British style is often called **logical**: a full stop or comma goes inside the quotes only if it is part of the material quoted. American style is **typographical**: commas and full stops always go inside, whatever the logic. For **question marks and exclamation marks**, both styles follow logic: *Did she really say ‘never’?* versus *She asked, ‘Are you sure?’*',
        },
        {
          t: 'example',
          title: 'The same sentences in both styles',
          lines: [
            { label: 'British', text: 'The sign said ‘Keep Out’, so we left.' },
            { label: 'American', text: 'The sign said “Keep Out,” so we left.' },
            { label: 'British', text: 'Her favourite word is ‘serendipity’.' },
            { label: 'American', text: 'Her favourite word is “serendipity.”' },
            { label: 'British', text: '‘Did he say “tomorrow”?’ asked Mum.' },
            { label: 'American', text: '“Did he say ‘tomorrow’?” asked Mum.' },
          ],
        },
      ],
    },
    {
      id: 'dialogue',
      title: 'Punctuating dialogue',
      blocks: [
        { t: 'p', text: 'There are four basic patterns. In each, the punctuation that ends the spoken words goes **inside** the closing quotation mark. Examples below use British single quotes.' },
        {
          t: 'example',
          title: 'Pattern 1. Tag after the speech',
          lines: [
            { label: 'Statement', text: '‘I’ll be late tonight,’ said Dad. (Comma replaces the full stop.)' },
            { label: 'Question', text: '‘Are you coming?’ she asked. (Lower-case *she*: the sentence continues.)' },
            { label: 'Exclamation', text: '‘Watch out!’ he shouted.' },
            { label: 'Wrong', text: '‘I’ll be late tonight.’ Said Dad.' },
          ],
        },
        {
          t: 'example',
          title: 'Pattern 2. Tag before the speech',
          lines: [
            { label: '1', text: 'Dad said, ‘I’ll be late tonight.’' },
            { label: '2', text: 'She asked, ‘Are you coming?’' },
            { label: '3', text: 'The coach shouted: ‘Everyone back!’ (A colon is also used, especially before longer speech.)' },
          ],
        },
        {
          t: 'example',
          title: 'Pattern 3. Tag in the middle of one sentence',
          lines: [
            { label: '1', text: '‘If you leave now,’ said Amira, ‘you’ll catch the train.’' },
            { label: '2', text: '‘The trouble is,’ he admitted, ‘I never read the instructions.’' },
            { label: 'Note', text: 'The second part starts in lower case (*you’ll*) because the spoken sentence simply continues; only a word that always takes a capital, such as *I*, keeps one.' },
          ],
        },
        {
          t: 'example',
          title: 'Pattern 4. Tag between two sentences',
          lines: [
            { label: '1', text: '‘I’m leaving,’ said Amira. ‘The train goes at six.’' },
            { label: '2', text: '‘That’s enough,’ said the teacher. ‘Sit down, all of you.’' },
            { label: 'Note', text: 'Full stop after the tag, capital to start the second spoken sentence.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: '1. Open the quote', body: 'Start the spoken words with a capital letter.' },
            { title: '2. End the spoken part inside', body: 'Comma (if a tag follows), question mark or exclamation mark goes inside the closing quote.' },
            { title: '3. Write the tag in lower case', body: '*she said*, *he asked*: even after ? or !, because the sentence is not finished.' },
            { title: '4. New speaker, new line', body: 'Start a new paragraph every time the speaker changes, even for one word.' },
          ],
        },
        {
          t: 'example',
          title: 'A short scene laid out correctly',
          lines: [
            { text: '‘Have you seen my keys?’ asked Jun.' },
            { text: '‘Which ones?’' },
            { text: '‘The car keys. I left them on the table.’' },
            { text: 'Mei shrugged. ‘Try your coat pocket.’' },
            { text: '‘Found them,’ he said, sheepishly.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Long speeches',
          text: 'If one speaker talks for several paragraphs, put an opening quotation mark at the start of each paragraph but a closing one only at the end of the last.',
        },
      ],
    },
    {
      id: 'reported',
      title: 'Direct versus reported speech',
      blocks: [
        {
          t: 'example',
          title: 'No quotation marks for reported speech',
          lines: [
            { label: 'Direct', text: 'He said, ‘I’m hungry.’' },
            { label: 'Reported', text: 'He said that he was hungry.' },
            { label: 'Wrong', text: 'He said that ‘he was hungry’.' },
            { label: 'Direct question', text: 'She asked, ‘Where is the exit?’' },
            { label: 'Reported question', text: 'She asked where the exit was. (No question mark.)' },
          ],
        },
        { t: 'p', text: 'The tense and pronoun changes are covered in [Reported speech](@grammar/verbs/reported-speech).' },
      ],
    },
    {
      id: 'other-uses',
      title: 'Titles, words as words and scare quotes',
      blocks: [
        {
          t: 'table',
          head: ['Use', 'Example'],
          rows: [
            ['Short works: songs, poems, articles, chapters, episodes', 'The chapter ‘Commas’ in *Eats, Shoots and Leaves*; the song ‘Yesterday’'],
            ['Long works: books, films, albums, newspapers (italics, not quotes)', '*Pride and Prejudice*, *The Guardian*, *Abbey Road*'],
            ['A word discussed as a word (quotes or italics)', 'The word ‘set’ has hundreds of meanings.'],
            ['A translation or meaning', '*Merci* means ‘thank you’.'],
            ['Scare quotes: distancing yourself from a term', 'The ‘free’ gift cost £30 in postage.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Quotes are not emphasis',
          text: 'Signs like *‘Fresh’ fish* or *We are ‘open’ on Sunday* suggest sarcasm or doubt. Use bold or italics for emphasis, never quotation marks.',
        },
        {
          t: 'example',
          title: 'Quoting in essays',
          lines: [
            { label: 'Woven in', text: 'Macbeth calls life ‘a tale / Told by an idiot’. (A slash marks a line break in verse.)' },
            { label: 'Introduced with a colon', text: 'Austen opens with a famous claim: ‘It is a truth universally acknowledged ...’' },
            { label: 'Changed word', text: '‘[H]e was never seen again.’ (Square brackets show the capital was changed.)' },
            { label: 'Long quotation', text: 'Quotations over about forty words (or three lines) are usually set as an indented block without quotation marks.' },
          ],
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common mistakes',
      blocks: [
        {
          t: 'example',
          title: 'Before and after (British style)',
          lines: [
            { label: 'Wrong', text: '‘I don’t know.’ She said.' },
            { label: 'Right', text: '‘I don’t know,’ she said.' },
            { label: 'Wrong', text: '‘Where are you going’? he asked.' },
            { label: 'Right', text: '‘Where are you going?’ he asked.' },
            { label: 'Wrong', text: '‘Stop!’ He shouted.' },
            { label: 'Right', text: '‘Stop!’ he shouted.' },
            { label: 'Wrong', text: '‘Hello,’ said Tom, ‘How are you?’' },
            { label: 'Right', text: '‘Hello,’ said Tom. ‘How are you?’ (Two separate sentences.)' },
            { label: 'Wrong', text: 'She said ‘That’s fine.’' },
            { label: 'Right', text: 'She said, ‘That’s fine.’' },
            { label: 'Wrong', text: '‘Are you okay?,’ she asked.' },
            { label: 'Right', text: '‘Are you okay?’ she asked. (Never a question mark and a comma together.)' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Choose single or double quotes for the whole piece and keep to it.',
            'Use curly (typographic) quotes in finished work: ‘ ’ “ ”.',
            'Vary tags sparingly: *said* is almost invisible and usually best.',
          ],
          dont: [
            'Mix ‘single’ and “double” at random.',
            'Put a full stop inside the quote before a tag: *‘Yes.’ she said*.',
            'Use quotes for emphasis or for reported speech.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        { t: 'p', text: 'Punctuate in British style unless told otherwise.' },
        {
          t: 'example',
          title: 'Questions 1 to 5',
          lines: [
            { label: 'Q1', text: 'its raining said Ben' },
            { label: 'A1', text: '‘It’s raining,’ said Ben. Comma inside, lower-case tag.' },
            { label: 'Q2', text: 'Priya asked can I borrow your pen' },
            { label: 'A2', text: 'Priya asked, ‘Can I borrow your pen?’' },
            { label: 'Q3', text: 'if we hurry said Mum we might still make it' },
            { label: 'A3', text: '‘If we hurry,’ said Mum, ‘we might still make it.’ One sentence split by the tag.' },
            { label: 'Q4', text: 'I’m off said Kai see you tomorrow' },
            { label: 'A4', text: '‘I’m off,’ said Kai. ‘See you tomorrow.’ Two sentences.' },
            { label: 'Q5', text: 'Rewrite in American style: She called it ‘a triumph’.' },
            { label: 'A5', text: 'She called it “a triumph.” Double quotes, full stop inside.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 6 to 10',
          lines: [
            { label: 'Q6', text: 'Correct: ‘Help!’ She screamed.' },
            { label: 'A6', text: '‘Help!’ **she** screamed. The tag continues the sentence.' },
            { label: 'Q7', text: 'Correct: He told me that ‘he would be late’.' },
            { label: 'A7', text: 'He told me that he would be late. Reported speech: no quotes.' },
            { label: 'Q8', text: 'Where does the question mark go? Did she really say I quit' },
            { label: 'A8', text: 'Did she really say ‘I quit’? The whole sentence is the question, so the mark goes outside.' },
            { label: 'Q9', text: 'Quote inside a quote (British): Tom said the sign says no entry' },
            { label: 'A9', text: '‘The sign says “No entry”,’ said Tom. Double quotes inside single.' },
            { label: 'Q10', text: 'Quotes or italics? The film Spirited Away; the poem Daffodils.' },
            { label: 'A10', text: '*Spirited Away* in italics (a long work); ‘Daffodils’ in quotes (a short poem).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Ritter, R. M. (2012) *New Hart’s Rules*, 2nd edn. Oxford University Press.',
    'The University of Chicago Press (2017) *The Chicago Manual of Style*, 17th edn.',
    'Trask, R. L. (1997) *The Penguin Guide to Punctuation*. Penguin.',
  ],
  related: [
    'grammar/verbs/reported-speech',
    'grammar/punctuation/commas',
    'grammar/punctuation/apostrophes',
    'grammar/punctuation/semicolons-colons-dashes',
    'grammar/practice/proofreading-workshop',
  ],
}

export default guide
