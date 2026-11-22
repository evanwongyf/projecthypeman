import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The comma is the most used and most misused mark in English. It does not mark “where you breathe”; it marks **structure**: items in a list, the boundary between clauses, the start and end of extra information. Eight rules cover almost every comma you will need, and a short list of **commas to leave out** prevents most errors.',
  nutshell: [
    'Commas separate **list items**, **independent clauses before FANBOYS**, and **coordinate adjectives**.',
    'Commas follow **introductory** words, phrases and clauses.',
    'Commas come in **pairs** around extra (non-essential) information in mid-sentence: both or neither.',
    'Commas set off **names in direct address**, *yes/no*, tags and interjections.',
    'The **Oxford (serial) comma** before the final *and* is optional in British usage and standard in most American style guides; whichever you choose, be consistent.',
    'Never put a single comma between a subject and its verb, or a verb and its object.',
  ],
  sections: [
    {
      id: 'rules-1-3',
      title: 'Rules 1 to 3: lists, clauses, openers',
      blocks: [
        {
          t: 'example',
          title: 'Rule 1. Separate items in a list of three or more',
          lines: [
            { label: 'Words', text: 'We need eggs, flour, sugar and butter.' },
            { label: 'Phrases', text: 'She ran down the stairs, out of the door and across the road.' },
            { label: 'Clauses', text: 'He washed the car, she mowed the lawn and the children painted the fence.' },
            { label: 'With Oxford comma', text: 'We need eggs, flour, sugar, and butter.' },
            { label: 'Two items only', text: 'We need eggs and flour. (No comma: there is no list.)' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The Oxford comma: British and American practice',
          text: 'The **Oxford** or **serial** comma is the comma before the final *and* or *or* in a list. Oxford University Press, Chicago, APA and MLA use it; much British journalism (and the AP style used by many US newspapers) leaves it out. It is not wrong either way, but use it when the last two items could blur together: *I thanked my parents, Ayesha and God* can read as if your parents are Ayesha and God; *my parents, Ayesha, and God* cannot. Sometimes it creates ambiguity instead (*my mother, a doctor, and ...*), so rewrite rather than trust the comma.',
        },
        {
          t: 'example',
          title: 'Rule 2. Comma before a FANBOYS joining two independent clauses',
          lines: [
            { label: 'and', text: 'The shop opened at nine, **and** a queue had already formed.' },
            { label: 'but', text: 'I like the design, **but** the price is too high.' },
            { label: 'so', text: 'It was raining, **so** the match was postponed.' },
            { label: 'yet', text: 'He had never sailed, **yet** he crossed the strait alone.' },
            { label: 'or', text: 'You can pay by card, **or** you can transfer the money.' },
            { label: 'No comma', text: 'She opened the box **and** took out a key. (One subject, two verbs: not two clauses.)' },
          ],
        },
        {
          t: 'example',
          title: 'Rule 3. Comma after an introductory element',
          lines: [
            { label: 'Clause', text: '**When the alarm rang**, everyone left the building.' },
            { label: 'Clause', text: '**If you are cold**, close the window.' },
            { label: 'Participle phrase', text: '**Having read the report**, the minister resigned.' },
            { label: 'Long prepositional phrase', text: '**After a long and tiring journey across the desert**, we reached the oasis.' },
            { label: 'Transition word', text: '**However**, the results were inconclusive.' },
            { label: 'Short opener (optional)', text: '**In 2019** the factory closed. / **In 2019,** the factory closed. Both acceptable.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The reversal check',
          text: 'Move the dependent clause to the end and the comma usually disappears: *Everyone left the building when the alarm rang.* Exception: contrast clauses with *although, though, whereas, while* (meaning “whereas”) usually keep it: *She stayed, although she was tired.*',
        },
      ],
    },
    {
      id: 'rules-4-5',
      title: 'Rules 4 and 5: extra information and interrupters',
      blocks: [
        { t: 'p', text: 'Information that could be lifted out without changing the core meaning is **non-essential** (non-restrictive). Mark it off with commas, a pair in mid-sentence or one at the start or end. Essential information gets no commas.' },
        {
          t: 'example',
          title: 'Rule 4. Commas around non-essential clauses and appositives',
          lines: [
            { label: 'Relative clause', text: 'My laptop, **which is six years old**, still works perfectly.' },
            { label: 'Relative clause', text: 'Dr Tan, **who has worked here for decades**, is retiring.' },
            { label: 'Appositive', text: 'Kuala Lumpur, **the capital of Malaysia**, is growing fast.' },
            { label: 'Appositive', text: 'Our coach, **Mrs Okafor**, called a meeting.' },
            { label: 'At the end', text: 'We visited Edinburgh, **where my grandmother was born**.' },
          ],
        },
        {
          t: 'table',
          head: ['Essential (no commas)', 'Non-essential (commas)'],
          rows: [
            ['The students **who failed** must resit. (only those)', 'The students, **who failed**, must resit. (all of them failed)'],
            ['My friend **Ravi** is coming. (I have several friends)', 'My best friend, **Ravi**, is coming. (only one best friend)'],
            ['The film **that won the award** was French.', 'The film, **which won the award**, was French.'],
            ['The novelist **Zadie Smith** wrote it.', 'Zadie Smith, **the novelist**, wrote it.'],
          ],
          caption: 'Ask: does the information identify which one? If yes, no commas.',
        },
        {
          t: 'example',
          title: 'Rule 5. Commas around interrupters, transitions and contrasts',
          lines: [
            { label: 'Transition', text: 'The plan, **however**, has one flaw.' },
            { label: 'Comment', text: 'The answer, **of course**, is no.' },
            { label: 'Aside', text: 'The meeting, **I think**, starts at ten.' },
            { label: 'Contrast', text: 'It was the manager, **not the owner**, who apologised.' },
            { label: 'Absolute phrase', text: 'The race over, **the runners collapsed on the grass**. / She stood, **arms folded**, at the door.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Pairs, not singles',
          text: 'A mid-sentence interruption needs a comma on **both** sides. Wrong: *My brother, who lives in Leeds is a nurse.* Right: *My brother, who lives in Leeds, is a nurse.* Test: delete the part between the commas; the sentence that remains must still be correct.',
        },
      ],
    },
    {
      id: 'rules-6-8',
      title: 'Rules 6 to 8: adjectives, address, conventions',
      blocks: [
        {
          t: 'example',
          title: 'Rule 6. Comma between coordinate adjectives',
          lines: [
            { label: 'Coordinate', text: 'It was a **long, boring** meeting.' },
            { label: 'Coordinate', text: 'She has a **warm, generous** nature.' },
            { label: 'Coordinate', text: 'A **cold, wet, miserable** afternoon.' },
            { label: 'Cumulative (no comma)', text: 'a **beautiful old wooden** table / **three large brown** dogs / a **bright red sports** car' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The *and* test for adjectives',
          text: 'If you can put *and* between the adjectives and swap their order (*a boring and long meeting*), they are coordinate: use a comma. If not (*a big and red bus* sounds odd, and *a red big bus* is wrong), they are cumulative: no comma. Numbers, colours and materials are usually cumulative.',
        },
        {
          t: 'example',
          title: 'Rule 7. Direct address, yes/no, tags and interjections',
          lines: [
            { label: 'Address', text: 'Let’s eat, **Grandma**. (Compare *Let’s eat Grandma*.)' },
            { label: 'Address', text: '**Sarah**, could you come here? / Thank you, **sir**.' },
            { label: 'Yes/no', text: '**Yes**, I’ll be there. / **No**, thank you.' },
            { label: 'Tag', text: 'You’re coming, **aren’t you**?' },
            { label: 'Interjection', text: '**Well**, that was unexpected. / **Oh**, I see.' },
          ],
        },
        {
          t: 'example',
          title: 'Rule 8. Conventions: dates, places, numbers, speech and letters',
          lines: [
            { label: 'Date (British)', text: 'She was born on 4 July 1990 in Leeds. (No comma needed.)' },
            { label: 'Date (American)', text: 'She was born on July 4, 1990, in Leeds. (Commas around the year.)' },
            { label: 'Place', text: 'They moved to Perth, Western Australia, in 2015.' },
            { label: 'Numbers', text: '12,500 people; £1,250,000. (Many styles omit the comma in four-digit numbers: 2500.)' },
            { label: 'Speech', text: '“I’m tired,” she said. / He said, “Let’s go.”' },
            { label: 'Letters', text: 'Dear Mr Lee, ... Yours sincerely,' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Decimal commas',
          text: 'English uses a full stop for decimals (3.5) and commas for thousands (3,500). Much of Europe does the reverse (3,5 and 3.500), and international scientific style (SI) uses a thin space for thousands (3 500) to avoid confusion.',
        },
      ],
    },
    {
      id: 'leave-out',
      title: 'Commas to leave out',
      blocks: [
        { t: 'p', text: 'Most comma errors are **extra** commas. Delete any comma that does one of these things.' },
        {
          t: 'table',
          head: ['Wrong comma', 'Example (wrong)', 'Corrected'],
          rows: [
            ['Between subject and verb', 'The man in the blue coat, is my uncle.', 'The man in the blue coat is my uncle.'],
            ['Between verb and object', 'She said, that she was tired.', 'She said that she was tired.'],
            ['Before a that-clause', 'I think, that you are right.', 'I think that you are right.'],
            ['Between compound verbs', 'He opened the door, and walked in.', 'He opened the door and walked in.'],
            ['Around essential clauses', 'People, who smoke, risk cancer.', 'People who smoke risk cancer.'],
            ['After a FANBOYS', 'I wanted to go but, I was ill.', 'I wanted to go, but I was ill.'],
            ['Before the first list item', 'We visited, Rome, Florence and Venice.', 'We visited Rome, Florence and Venice.'],
            ['Between cumulative adjectives', 'a big, red, bus', 'a big red bus'],
            ['Before a dependent clause at the end (usually)', 'I left early, because I was ill.', 'I left early because I was ill.'],
            ['Joining two sentences (splice)', 'It was late, we went home.', 'It was late, so we went home.'],
            ['Before *than* in a comparison','He is taller, than his brother.', 'He is taller than his brother.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The long-subject trap',
          text: 'Long subjects tempt writers to pause: *Everyone who has ever tried to assemble flat-pack furniture without the instructions, knows the feeling.* The comma is wrong however long the subject. If it feels too long, rewrite the sentence.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Myth: put a comma wherever you pause',
          text: 'Speech pauses and commas often coincide, but not always. People pause before long objects and after long subjects, where commas are wrong; and some commas (in dates, after *Yes*) mark no real pause. Use the rules.',
        },
      ],
    },
    {
      id: 'decide',
      title: 'Deciding on a comma',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Is it a list of three or more?', body: 'Comma between items (Rule 1). Decide on the Oxford comma once for the whole document.' },
            { title: '2. Are there two independent clauses?', body: 'Joined by FANBOYS: comma before it (Rule 2). No FANBOYS: you need a semicolon or full stop, not a comma.' },
            { title: '3. Is there an opener before the main clause?', body: 'Comma after it (Rule 3), optional for very short ones.' },
            { title: '4. Could a chunk be lifted out?', body: 'Non-essential: commas round it, both sides (Rules 4 and 5). Essential: no commas.' },
            { title: '5. Is someone addressed, or is there a yes, no, tag or interjection?', body: 'Comma (Rule 7).' },
            { title: '6. Otherwise', body: 'Probably no comma. Check the leave-out table.' },
          ],
        },
        {
          t: 'example',
          title: 'Commas that change meaning',
          lines: [
            { label: 'A', text: 'The panda eats, shoots and leaves. (It eats, fires a gun, and leaves.)' },
            { label: 'B', text: 'The panda eats shoots and leaves. (It eats bamboo shoots and leaves.)' },
            { label: 'A', text: 'Most of the time, travellers worry about their luggage.' },
            { label: 'B', text: 'Most of the time travellers worry about their luggage. (Reads first as “time travellers”.)' },
            { label: 'A', text: 'The teacher said, “The head is a fool.”' },
            { label: 'B', text: '“The teacher,” said the head, “is a fool.”' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        { t: 'p', text: 'Add or remove commas as needed. Answers give the rule.' },
        {
          t: 'example',
          title: 'Questions 1 to 6',
          lines: [
            { label: 'Q1', text: 'After the film we went for noodles.' },
            { label: 'A1', text: 'After the film**,** we went for noodles. Rule 3 (optional with a short opener, but helpful).' },
            { label: 'Q2', text: 'My sister who lives in Hong Kong is visiting. (I have one sister.)' },
            { label: 'A2', text: 'My sister**,** who lives in Hong Kong**,** is visiting. Rule 4: non-essential, so a pair of commas.' },
            { label: 'Q3', text: 'The results were good, however we need more data.' },
            { label: 'A3', text: 'The results were good**;** however**,** we need more data. A comma cannot join two clauses with *however*.' },
            { label: 'Q4', text: 'The book that I lent you, is overdue.' },
            { label: 'A4', text: 'The book that I lent you is overdue. Never put a comma between subject and verb.' },
            { label: 'Q5', text: 'I bought apples oranges and bananas.' },
            { label: 'A5', text: 'I bought apples**,** oranges and bananas. Rule 1 (an Oxford comma after *oranges* is also fine).' },
            { label: 'Q6', text: 'Thank you Ms Chen for your help.' },
            { label: 'A6', text: 'Thank you**,** Ms Chen**,** for your help. Rule 7: direct address, a pair.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7 to 12',
          lines: [
            { label: 'Q7', text: 'She trained every day and she won the gold medal.' },
            { label: 'A7', text: 'She trained every day**,** and she won the gold medal. Rule 2: two independent clauses.' },
            { label: 'Q8', text: 'He walked into the room, and sat down.' },
            { label: 'A8', text: 'He walked into the room and sat down. One subject, two verbs: no comma.' },
            { label: 'Q9', text: 'It was a dark stormy night.' },
            { label: 'A9', text: 'It was a dark**,** stormy night. Rule 6: coordinate adjectives (*dark and stormy*).' },
            { label: 'Q10', text: 'She bought a new, leather, handbag.' },
            { label: 'A10', text: 'She bought a new leather handbag. Cumulative adjectives: no commas.' },
            { label: 'Q11', text: 'Yes I have finished.' },
            { label: 'A11', text: 'Yes**,** I have finished. Rule 7.' },
            { label: 'Q12', text: 'Students, who cheat, will be disqualified.' },
            { label: 'A12', text: 'Students who cheat will be disqualified. Essential clause: it says which students.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Truss, L. (2003) *Eats, Shoots and Leaves*. Profile Books.',
    'Ritter, R. M. (2012) *New Hart’s Rules*, 2nd edn. Oxford University Press.',
    'The University of Chicago Press (2017) *The Chicago Manual of Style*, 17th edn.',
    'Trask, R. L. (1997) *The Penguin Guide to Punctuation*. Penguin.',
  ],
  related: [
    'grammar/punctuation/semicolons-colons-dashes',
    'grammar/sentences/fragments-run-ons-splices',
    'grammar/sentences/phrases-and-clauses',
    'grammar/usage/who-whom-that-which',
    'grammar/parts-of-speech/adjectives',
    'grammar/practice/drills-verbs-and-punctuation',
  ],
}

export default guide
