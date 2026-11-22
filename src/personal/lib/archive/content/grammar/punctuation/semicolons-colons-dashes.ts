import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Semicolons, colons and dashes are the marks between a comma and a full stop. Each has a precise job: the **semicolon** joins equals, the **colon** introduces what follows, and the **dash** interrupts or adds emphasis. Brackets and the ellipsis complete the set.',
  nutshell: [
    '**Semicolon**: joins two closely related independent clauses, or separates list items that already contain commas.',
    '**Colon**: after a complete clause, introduces an explanation, a list, a quotation or an example: “here it is”.',
    '**Em dash** () or spaced **en dash** ( – ): sets off an interruption or a dramatic addition; more informal and emphatic than commas.',
    '**En dash** (–) also means “to” in ranges: 1914–18, pages 10–25, the London–Paris train.',
    '**Brackets** (parentheses) hold asides the sentence could do without; punctuation goes inside only if the whole sentence is inside.',
    'A semicolon needs a full sentence on **both** sides; a colon needs a full sentence **before** it.',
  ],
  sections: [
    {
      id: 'semicolon',
      title: 'The semicolon',
      blocks: [
        { t: 'p', text: 'A semicolon is stronger than a comma and weaker than a full stop. It has two jobs only.' },
        {
          t: 'example',
          title: 'Job 1. Joining two related independent clauses',
          lines: [
            { label: '1', text: 'The library was silent; even the clock seemed to tick quietly.' },
            { label: '2', text: 'I have a meeting at ten; I’ll call you afterwards.' },
            { label: '3', text: 'Some people love durian; others cannot stand the smell.' },
            { label: 'With a transition', text: 'The roads were icy; **therefore**, the school closed.' },
            { label: 'With a transition', text: 'She had trained for months; **however**, she lost in the first round.' },
          ],
        },
        {
          t: 'example',
          title: 'Job 2. Separating list items that contain commas',
          lines: [
            { label: '1', text: 'The tour visits Lisbon, Portugal; Seville, Spain; and Marseille, France.' },
            { label: '2', text: 'The panel included Dr Lim, a surgeon; Ms Patel, a lawyer; and Mr Hughes, a retired judge.' },
            { label: '3', text: 'We need three things: bread, which we can buy here; milk, which the farm sells; and eggs.' },
            { label: 'Note', text: 'Here a semicolon before the final *and* is normal in both British and American practice.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The full-stop test',
          text: 'If you could replace the semicolon with a full stop and both halves are full sentences, the semicolon is correct (as long as the ideas are closely linked). If either side is not a sentence, the semicolon is wrong.',
        },
        {
          t: 'example',
          title: 'Semicolon mistakes',
          lines: [
            { label: 'Wrong', text: 'Although it rained; we went out.' },
            { label: 'Right', text: 'Although it rained, we went out. (*Although it rained* is not a sentence.)' },
            { label: 'Wrong', text: 'I need three things; bread, milk and eggs.' },
            { label: 'Right', text: 'I need three things: bread, milk and eggs. (Introducing a list needs a colon.)' },
            { label: 'Wrong', text: 'She was tired; but she kept going.' },
            { label: 'Right', text: 'She was tired, but she kept going. (Use a comma with FANBOYS; a semicolon is possible only in long clauses with internal commas.)' },
          ],
        },
      ],
    },
    {
      id: 'colon',
      title: 'The colon',
      blocks: [
        { t: 'p', text: 'A colon says “here is what I mean” or “here it comes”. What comes before it must be a **complete clause**. What follows can be a word, a list, a clause or a quotation.' },
        {
          t: 'table',
          head: ['Use', 'Example'],
          rows: [
            ['Introduce a list', 'You will need three things: a torch, a map and a whistle.'],
            ['Explain or expand', 'The plan failed for one reason: nobody told the drivers.'],
            ['Give a single item for emphasis', 'There was only one word for it: chaos.'],
            ['Introduce a quotation', 'Her motto was simple: “Never give up.”'],
            ['Contrast or balance', 'Man proposes: God disposes.'],
            ['Conventions', 'Ratios 3:1; times in American style 10:30 (British often 10.30); titles *Grammar: A Guide*; Bible references John 3:16.'],
          ],
        },
        {
          t: 'example',
          title: 'Colon mistakes',
          lines: [
            { label: 'Wrong', text: 'The ingredients are: flour, eggs and milk.' },
            { label: 'Right', text: 'The ingredients are flour, eggs and milk. (No colon between a verb and its object or complement.)' },
            { label: 'Wrong', text: 'We visited cities such as: Rome, Paris and Berlin.' },
            { label: 'Right', text: 'We visited cities such as Rome, Paris and Berlin.' },
            { label: 'Right', text: 'We visited three cities: Rome, Paris and Berlin. (Complete clause before the colon.)' },
            { label: 'Wrong', text: 'The reason is: I forgot.' },
            { label: 'Right', text: 'The reason is simple: I forgot.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Capital after a colon?',
          text: 'British usage normally continues in **lower case** after a colon, unless the next word is a proper noun or the colon introduces a quoted sentence or a series of sentences. American style guides vary: Chicago and APA capitalise when a complete sentence follows; AP capitalises a complete sentence too.',
        },
      ],
    },
    {
      id: 'dashes',
      title: 'Dashes and hyphens',
      blocks: [
        {
          t: 'table',
          head: ['Mark', 'Looks like', 'Main jobs', 'Example'],
          rows: [
            ['Hyphen', '-', 'Joins words or parts of words', 'well-known, re-enter, twenty-one'],
            ['En dash', '–', 'Ranges and connections (“to”, “versus”); spaced en dash as a parenthetical dash in British style', '1939–45; pp. 12–20; the Liverpool–Arsenal game'],
            ['Em dash', '-', 'Parenthetical or dramatic dash, usually unspaced in American style', 'The answer, if there is one, is unclear.'],
          ],
          caption: 'British publishers mostly use a spaced en dash ( – ) where American ones use an unspaced em dash (). Both are correct; be consistent.',
        },
        {
          t: 'example',
          title: 'Dashes in pairs: interruptions',
          lines: [
            { label: 'British style', text: 'My uncle – a man who never lies – swore he saw it.' },
            { label: 'American style', text: 'My uncle, a man who never lies, swore he saw it.' },
            { label: 'Containing commas', text: 'The three colours – red, white and blue – appear on the flag.' },
            { label: 'Compare commas', text: 'My uncle, who never lies, swore he saw it. (Calmer.)' },
            { label: 'Compare brackets', text: 'My uncle (who never lies) swore he saw it. (Quieter, more of an aside.)' },
          ],
        },
        {
          t: 'example',
          title: 'A single dash: emphasis or a twist at the end',
          lines: [
            { label: '1', text: 'There was only one person who could help – her sister.' },
            { label: '2', text: 'He had everything planned – except the weather.' },
            { label: '3', text: 'Money, fame, power – none of it made him happy.' },
            { label: '4', text: '“I was just –” “Leaving? Yes, I know.” (An interrupted speech.)' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not overuse dashes',
          text: 'Dashes are lively but loose. A paragraph with several reads as breathless. In formal writing, prefer commas, colons or brackets, and keep dashes for genuine interruptions. Never use a hyphen with spaces ( - ) as a dash in finished work.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Typing them',
          text: 'Word processors often turn a spaced hyphen into an en dash automatically. On a Mac: Option + hyphen (en), Option + Shift + hyphen (em). On Windows: Alt + 0150 (en), Alt + 0151 (em) on the numeric keypad.',
        },
      ],
    },
    {
      id: 'brackets-ellipsis',
      title: 'Brackets and the ellipsis',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Round brackets ( )', def: 'Called *brackets* in British English and *parentheses* in American. Hold asides, abbreviations and references: *The World Health Organization (WHO) ...*' },
            { term: 'Square brackets [ ]', def: 'Show words you have added to a quotation: *“She [the minister] denied it.”* Also [sic] to mark an error in the original.' },
            { term: 'Ellipsis ( … )', def: 'Three dots show words left out of a quotation, or a trailing-off in speech. *“To be, or not to be … that is the question.”*' },
          ],
        },
        {
          t: 'example',
          title: 'Punctuation and brackets',
          lines: [
            { label: 'Part of a sentence', text: 'He arrived late (as usual).' },
            { label: 'Whole sentence', text: 'He arrived late. (He always does.)' },
            { label: 'Comma after, not before', text: 'When she arrived (late, of course), we started.' },
            { label: 'Wrong', text: 'When she arrived, (late, of course) we started.' },
          ],
        },
      ],
    },
    {
      id: 'choose',
      title: 'Choosing between them',
      blocks: [
        {
          t: 'example',
          title: 'Same words, different marks',
          lines: [
            { label: 'Full stop', text: 'The forecast was right. It snowed all day.' },
            { label: 'Semicolon', text: 'The forecast was right; it snowed all day. (Two equal, linked facts.)' },
            { label: 'Colon', text: 'The forecast was right: it snowed all day. (The second explains the first.)' },
            { label: 'Dash', text: 'The forecast was right – it snowed all day. (Informal, emphatic.)' },
            { label: 'Comma + so', text: 'The forecast said snow, so we stayed in. (Shows result.)' },
          ],
        },
        {
          t: 'flow',
          title: 'Which mark?',
          nodes: [
            { label: 'Full sentence before?', sub: 'no: comma or rewrite', tone: 'data' },
            { label: 'Introducing or explaining?', sub: 'yes: colon', tone: 'process' },
            { label: 'Two equal clauses?', sub: 'yes: semicolon', tone: 'process' },
            { label: 'Interruption or punch?', sub: 'dash; quieter aside: brackets', tone: 'process' },
            { label: 'Else', sub: 'full stop', tone: 'output' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Use a semicolon to show that two sentences belong together.',
            'Use a colon when the second part delivers on a promise made by the first.',
            'Choose one dash style (spaced en or closed em) and keep it.',
          ],
          dont: [
            'Use a semicolon before a list.',
            'Put a colon after *are*, *include*, *such as* or *for example*.',
            'Use a dash, a semicolon and a colon all in one sentence.',
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
          title: 'Choose the mark',
          lines: [
            { label: 'Q1', text: 'I have one rule ( ? ) never borrow money from friends.' },
            { label: 'A1', text: '**Colon**. A complete clause promises a rule; the rule follows.' },
            { label: 'Q2', text: 'The sun had set ( ? ) the beach was empty.' },
            { label: 'A2', text: '**Semicolon** (or full stop). Two independent, related clauses.' },
            { label: 'Q3', text: 'We met delegates from Ipoh, Malaysia ( ? ) Cebu, the Philippines ( ? ) and Hanoi, Vietnam.' },
            { label: 'A3', text: '**Semicolons**: items already contain commas.' },
            { label: 'Q4', text: 'The war lasted from 1914 ( ? ) 1918.' },
            { label: 'A4', text: 'Write **1914–18** with an en dash, or *from 1914 to 1918*. Do not mix *from* with a dash.' },
            { label: 'Q5', text: 'Correct: *My favourite subjects are: history and art.*' },
            { label: 'A5', text: 'Delete the colon: *My favourite subjects are history and art.*' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 6 to 10',
          lines: [
            { label: 'Q6', text: 'Correct: *Because the bridge was closed; we drove round.*' },
            { label: 'A6', text: '*Because the bridge was closed**,** we drove round.* The first part is a dependent clause.' },
            { label: 'Q7', text: 'Correct: *It was expensive, however it was worth it.*' },
            { label: 'A7', text: '*It was expensive**;** however**,** it was worth it.*' },
            { label: 'Q8', text: 'Add a pair of dashes: *The kitten all four kilos of her jumped onto the table.*' },
            { label: 'A8', text: '*The kitten – all four kilos of her – jumped onto the table.*' },
            { label: 'Q9', text: 'Fix the brackets: *He said he would come, (if he could) but he never did.*' },
            { label: 'A9', text: '*He said he would come (if he could), but he never did.* The comma goes after the closing bracket.' },
            { label: 'Q10', text: 'British or American? *There was one problem, money.*' },
            { label: 'A10', text: '**American** convention (closed em dash). British style: *There was one problem – money.*' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Ritter, R. M. (2012) *New Hart’s Rules*, 2nd edn. Oxford University Press.',
    'Trask, R. L. (1997) *The Penguin Guide to Punctuation*. Penguin.',
    'The University of Chicago Press (2017) *The Chicago Manual of Style*, 17th edn.',
    'Truss, L. (2003) *Eats, Shoots and Leaves*. Profile Books.',
  ],
  related: [
    'grammar/punctuation/commas',
    'grammar/punctuation/hyphens-capitals-numbers',
    'grammar/punctuation/quotation-marks-and-speech',
    'grammar/sentences/fragments-run-ons-splices',
    'grammar/sentences/sentence-structures',
  ],
}

export default guide
