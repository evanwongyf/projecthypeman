import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Five short paragraphs, each seeded with the kinds of mistakes people really make: a school notice, a story, a council report, a book review and a job application. For each one you get the original, a numbered list of every error with its fix, the rule and a link to the guide, then the corrected text. After that come a reusable editing checklist and a step-by-step proofreading process, including reading backwards.',
  nutshell: [
    'Try each paragraph yourself before you look at the error list; the number of errors is given so you know when to stop hunting.',
    'Errors cluster: **agreement**, **tense**, **apostrophes**, **sound-alike words** and **clauses joined with a comma** cause most of them.',
    'Proofread in **separate passes**, each looking for one kind of problem. One read-through looking for everything finds very little.',
    '**Reading backwards**, sentence by sentence and then word by word, stops you from reading what you meant instead of what you wrote.',
    'Keep a list of your own repeat mistakes and search for them by name (*its, there, then, however*) before you send anything.',
  ],
  sections: [
    {
      id: 'how-to-work',
      title: 'How to work through the paragraphs',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Copy the original', body: 'Write or paste it somewhere you can mark up. Editing on the page beats editing in your head.' },
            { title: 'Hunt for the stated number of errors', body: 'Each paragraph says how many errors it contains. Use the checklist in the last section as you go.' },
            { title: 'Name the rule', body: 'For each fix, write the rule in a few words (*comma splice*, *plural possessive*). If you cannot name it, you guessed.' },
            { title: 'Compare with the list', body: 'Check your fixes against the numbered table, then read the corrected text aloud to hear the difference.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'What counts as an error here',
          text: 'Only things that are wrong in standard British written English are counted. Style choices that are equally correct (an Oxford comma, *who* or *that* for people, single or double quotation marks) are left alone, so every listed error has one clear fix.',
        },
      ],
    },
    {
      id: 'paragraph-1',
      title: 'Paragraph 1: a school notice (10 errors)',
      lead: 'Look for agreement, apostrophes, sound-alike words and clauses joined wrongly.',
      blocks: [
        {
          t: 'example',
          title: 'Original',
          lines: [
            { text: 'The school’s annual sports day will be held on Friday 14 June, it will start at 8.30 am. Each of the students need to bring a water bottle, a hat and sunscreen. Parents is welcome to watch from the stands, however we ask that you do not walk onto the track. Its important that children arrive on time. Lunch will be provided by the canteen but students with allergy’s should bring there own food. If it rain, the event will be moved to the hall. We look forward to see you there.' },
          ],
        },
        {
          t: 'table',
          head: ['#', 'Error', 'Fix', 'Rule'],
          rows: [
            ['1', '14 June, it will start', '14 June. It will start', 'Comma splice: two independent clauses need more than a comma. [Fragments, run-ons and comma splices](@grammar/sentences/fragments-run-ons-splices)'],
            ['2', 'Each of the students need', 'Each of the students needs', '*Each* is singular. [Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['3', 'Parents is welcome', 'Parents are welcome', 'Plural subject, plural verb. [Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['4', 'stands, however we ask', 'stands; however, we ask', '*However* cannot join clauses: semicolon before, comma after. [Semicolons, colons and dashes](@grammar/punctuation/semicolons-colons-dashes)'],
            ['5', 'Its important', 'It’s important', '*It’s* = *it is*. [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['6', 'canteen but students', 'canteen, but students', 'Comma before a conjunction joining two independent clauses. [Commas](@grammar/punctuation/commas)'],
            ['7', 'allergy’s', 'allergies', 'No apostrophe in a plain plural; *-y* after a consonant becomes *-ies*. [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['8', 'there own food', 'their own food', '*Their* shows belonging; *there* is a place. [Commonly confused words](@grammar/usage/commonly-confused-words)'],
            ['9', 'If it rain', 'If it rains', 'Third person singular present takes *-s*. [Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['10', 'look forward to see', 'look forward to seeing', 'In *look forward to*, *to* is a preposition, so it takes an *-ing* form. [Gerunds, infinitives and phrasal verbs](@grammar/verbs/verbals-and-phrasal-verbs)'],
          ],
        },
        {
          t: 'example',
          title: 'Corrected',
          lines: [
            { text: 'The school’s annual sports day will be held on Friday 14 June. It will start at 8.30 am. Each of the students needs to bring a water bottle, a hat and sunscreen. Parents are welcome to watch from the stands; however, we ask that you do not walk onto the track. It’s important that children arrive on time. Lunch will be provided by the canteen, but students with allergies should bring their own food. If it rains, the event will be moved to the hall. We look forward to seeing you there.' },
          ],
        },
      ],
    },
    {
      id: 'paragraph-2',
      title: 'Paragraph 2: a story in the past (10 errors)',
      lead: 'Look for pronoun case, tense consistency, irregular verbs and dialogue punctuation.',
      blocks: [
        {
          t: 'example',
          title: 'Original',
          lines: [
            { text: 'Last Saturday, me and my cousin decide to climb the hill behind our town. We had went there before, but this time we choose the steepest path. Halfway up, my cousin lied down on a bench and said “I can’t go on.” I laughed and told him to keep going. By the time we reached the top, we walked for nearly two hours. The view was amazing, we could see the whole town and the sea beyond it. On the way down, it begun to rain and soaked us completely. Neither of us were upset, though; it was the best day of the holiday.' },
          ],
        },
        {
          t: 'table',
          head: ['#', 'Error', 'Fix', 'Rule'],
          rows: [
            ['1', 'me and my cousin', 'my cousin and I', 'Subject position needs the subject pronoun *I* (test: *I decided*, not *me decided*). [Pronouns](@grammar/parts-of-speech/pronouns)'],
            ['2', 'decide', 'decided', 'A finished past event (*Last Saturday*) takes the past simple; keep the story in one time frame. [The past tenses](@grammar/verbs/past-tenses)'],
            ['3', 'had went', 'had been', 'After *had*, use the past participle (*been* or *gone*), never the past simple *went*. [Irregular verbs](@grammar/verbs/irregular-verbs)'],
            ['4', 'we choose', 'we chose', 'Past simple of *choose* is *chose*. [Irregular verbs](@grammar/verbs/irregular-verbs)'],
            ['5', 'lied down', 'lay down', '*Lie* (recline) has the past *lay*; *lied* means told an untruth. [Irregular verbs](@grammar/verbs/irregular-verbs)'],
            ['6', 'said “I can’t', 'said, “I can’t', 'A comma introduces direct speech after a reporting verb. [Quotation marks and dialogue](@grammar/punctuation/quotation-marks-and-speech)'],
            ['7', 'we walked for nearly two hours', 'we had been walking for nearly two hours', 'Duration up to a past point (*By the time we reached*) takes the past perfect continuous. [The past tenses](@grammar/verbs/past-tenses)'],
            ['8', 'amazing, we could see', 'amazing; we could see', 'Comma splice between two independent clauses. [Fragments, run-ons and comma splices](@grammar/sentences/fragments-run-ons-splices)'],
            ['9', 'it begun', 'it began', 'Past simple is *began*; *begun* is the participle (*had begun*). [Irregular verbs](@grammar/verbs/irregular-verbs)'],
            ['10', 'Neither of us were', 'Neither of us was', '*Neither* is singular in formal writing. [Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
          ],
        },
        {
          t: 'example',
          title: 'Corrected',
          lines: [
            { text: 'Last Saturday, my cousin and I decided to climb the hill behind our town. We had been there before, but this time we chose the steepest path. Halfway up, my cousin lay down on a bench and said, “I can’t go on.” I laughed and told him to keep going. By the time we reached the top, we had been walking for nearly two hours. The view was amazing; we could see the whole town and the sea beyond it. On the way down, it began to rain and soaked us completely. Neither of us was upset, though; it was the best day of the holiday.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Tense drift',
          text: 'Errors 2 and 4 are the same mistake: the writer slipped into the present halfway through a past story. When you proofread a narrative, underline every main verb in one colour and check they all sit in the same time frame.',
        },
      ],
    },
    {
      id: 'paragraph-3',
      title: 'Paragraph 3: a council report (8 errors)',
      lead: 'Look for relative pronouns, modifiers, quantity words, agreement, parallel lists and sound-alike words.',
      blocks: [
        {
          t: 'example',
          title: 'Original',
          lines: [
            { text: 'The survey was sent to 200 residents, who’s responses were analysed in March. Having read the results, the council’s decision surprised many people. Less people use the library than ten years ago, and the number of visitors have fallen every year since 2015. The main reasons given were lack of parking, opening hours that are too short, and because the building is old. The report also found that the closure of the café had a negative affect on visitor numbers. Residents, whom the council believes are the library’s most loyal users, asked for longer opening hours. The council will now consider weather to extend them.' },
          ],
        },
        {
          t: 'table',
          head: ['#', 'Error', 'Fix', 'Rule'],
          rows: [
            ['1', 'who’s responses', 'whose responses', '*Whose* shows belonging; *who’s* = *who is*. [Who, whom, that, which, whose](@grammar/usage/who-whom-that-which)'],
            ['2', 'Having read the results, the council’s decision surprised', 'Having read the results, the council made a decision that surprised', 'Dangling modifier: a decision cannot read results, so the doer must follow the comma. [Modifiers and parallelism](@grammar/usage/modifiers-and-parallelism)'],
            ['3', 'Less people', 'Fewer people', '*Fewer* for things you can count. [Fewer or less](@grammar/usage/countable-fewer-less-much-many)'],
            ['4', 'the number of visitors have fallen', 'the number of visitors has fallen', 'The head noun is *number* (singular). [Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['5', 'lack of parking, opening hours that are too short, and because the building is old', 'the lack of parking, the short opening hours and the age of the building', 'Items in a list must match in form: here, three noun phrases. [Modifiers and parallelism](@grammar/usage/modifiers-and-parallelism)'],
            ['6', 'a negative affect', 'a negative effect', '*Effect* is the noun (a result); *affect* is usually the verb. [Commonly confused words](@grammar/usage/commonly-confused-words)'],
            ['7', 'whom the council believes are', 'who the council believes are', 'The pronoun is the subject of *are*; *the council believes* is an inserted aside. [Who, whom, that, which, whose](@grammar/usage/who-whom-that-which)'],
            ['8', 'consider weather', 'consider whether', '*Whether* introduces alternatives; *weather* is rain and sun. [Commonly confused words](@grammar/usage/commonly-confused-words)'],
          ],
        },
        {
          t: 'example',
          title: 'Corrected',
          lines: [
            { text: 'The survey was sent to 200 residents, whose responses were analysed in March. Having read the results, the council made a decision that surprised many people. Fewer people use the library than ten years ago, and the number of visitors has fallen every year since 2015. The main reasons given were the lack of parking, the short opening hours and the age of the building. The report also found that the closure of the café had a negative effect on visitor numbers. Residents, who the council believes are the library’s most loyal users, asked for longer opening hours. The council will now consider whether to extend them.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The whom trap',
          text: 'Error 7 is a hypercorrection: the writer chose *whom* to sound formal. Cover the aside and test: *Residents, who are the library’s most loyal users*. Since *they are* works and *them are* does not, the pronoun is a subject and must be *who*.',
        },
      ],
    },
    {
      id: 'paragraph-4',
      title: 'Paragraph 4: a book review (12 errors)',
      lead: 'A punctuation-heavy paragraph: capitals, hyphens, apostrophes, colons and commas.',
      blocks: [
        {
          t: 'example',
          title: 'Original',
          lines: [
            { text: 'my favourite book is ‘the hobbit’ by J. R. R. Tolkien. I first read it when I was ten year old, and i have reread it every winter since. The story follows Bilbo Baggins, a comfort loving hobbit who is swept into an adventure with thirteen dwarves and a wizard called Gandalf. What I love most is the books humour. Tolkien include’s three things that every good adventure needs; danger, friendship and a map. The dwarves song in the first chapter, which I can still recite is my favourite part. If you have’nt read it yet you should start this weekend.' },
          ],
        },
        {
          t: 'table',
          head: ['#', 'Error', 'Fix', 'Rule'],
          rows: [
            ['1', 'my favourite', 'My favourite', 'Capital letter at the start of a sentence. [Hyphens, capitals, numbers](@grammar/punctuation/hyphens-capitals-numbers)'],
            ['2', '‘the hobbit’', '*The Hobbit*', 'Capitalise the main words of a title; book titles are usually set in italics. [Hyphens, capitals, numbers](@grammar/punctuation/hyphens-capitals-numbers)'],
            ['3', 'ten year old', 'ten years old', 'After a number above one, the noun is plural; *ten-year-old* (hyphenated, singular) is only used before a noun. [Nouns](@grammar/parts-of-speech/nouns)'],
            ['4', 'and i have', 'and I have', 'The pronoun *I* is always a capital. [Hyphens, capitals, numbers](@grammar/punctuation/hyphens-capitals-numbers)'],
            ['5', 'comfort loving hobbit', 'comfort-loving hobbit', 'Hyphenate a compound modifier before a noun. [Hyphens, capitals, numbers](@grammar/punctuation/hyphens-capitals-numbers)'],
            ['6', 'the books humour', 'the book’s humour', 'Singular possessive: *’s*. [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['7', 'include’s', 'includes', 'Verbs never take an apostrophe. [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['8', 'needs; danger', 'needs: danger', 'A colon, not a semicolon, introduces a list after a complete clause. [Semicolons, colons and dashes](@grammar/punctuation/semicolons-colons-dashes)'],
            ['9', 'The dwarves song', 'The dwarves’ song', 'Plural possessive ending in *s*: apostrophe after the *s*. [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['10', 'which I can still recite is', 'which I can still recite, is', 'A non-restrictive clause needs a comma at both ends. [Commas](@grammar/punctuation/commas)'],
            ['11', 'have’nt', 'haven’t', 'The apostrophe goes where the letter is missing: *have not*. [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['12', 'yet you should', 'yet, you should', 'Comma after an introductory *if* clause. [Commas](@grammar/punctuation/commas)'],
          ],
        },
        {
          t: 'example',
          title: 'Corrected',
          lines: [
            { text: 'My favourite book is *The Hobbit* by J. R. R. Tolkien. I first read it when I was ten years old, and I have reread it every winter since. The story follows Bilbo Baggins, a comfort-loving hobbit who is swept into an adventure with thirteen dwarves and a wizard called Gandalf. What I love most is the book’s humour. Tolkien includes three things that every good adventure needs: danger, friendship and a map. The dwarves’ song in the first chapter, which I can still recite, is my favourite part. If you haven’t read it yet, you should start this weekend.' },
          ],
        },
      ],
    },
    {
      id: 'paragraph-5',
      title: 'Paragraph 5: a job application (8 errors)',
      lead: 'Look for register, apostrophes in time expressions, parallel verbs, fragments and misused reflexives.',
      blocks: [
        {
          t: 'example',
          title: 'Original',
          lines: [
            { text: 'Hey there! I am writing to apply for the role of junior editor, which was advertised on your website last week. I have three years experience of proofreading, and I am more accurate then most of my colleagues. In my current job, I edit articles, write headlines and am managing a team of two. Each writer on my team submit their drafts to me by Friday. Which means I often work to tight deadlines. I would welcome the opportunity to discuss my application with yourself. I have attached my CV, I look forward to hearing from you.' },
          ],
        },
        {
          t: 'table',
          head: ['#', 'Error', 'Fix', 'Rule'],
          rows: [
            ['1', 'Hey there!', 'Dear Hiring Manager, (or the person’s name: *Dear Ms Lim,*)', 'A formal application needs a formal greeting. [Register, tone and Singapore English](@grammar/usage/register-and-singapore-english)'],
            ['2', 'three years experience', 'three years’ experience', 'Time expressions take a possessive apostrophe (*a week’s holiday*, *three years’ experience*). [Apostrophes](@grammar/punctuation/apostrophes)'],
            ['3', 'more accurate then', 'more accurate than', '*Than* compares; *then* is about time. [Commonly confused words](@grammar/usage/commonly-confused-words)'],
            ['4', 'edit articles, write headlines and am managing', 'edit articles, write headlines and manage', 'Verbs in a list share one form. [Modifiers and parallelism](@grammar/usage/modifiers-and-parallelism)'],
            ['5', 'Each writer ... submit', 'Each writer ... submits', '*Each writer* is singular. (*Their* is fine here as singular *they*.) [Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['6', 'Which means I often work', 'by Friday, which means I often work', 'A *which* clause cannot stand alone: join it to the sentence it comments on. [Fragments, run-ons and comma splices](@grammar/sentences/fragments-run-ons-splices)'],
            ['7', 'with yourself', 'with you', 'A reflexive needs a matching subject (*you*) in the same clause. [Pronouns](@grammar/parts-of-speech/pronouns)'],
            ['8', 'my CV, I look forward', 'my CV. I look forward', 'Comma splice. [Fragments, run-ons and comma splices](@grammar/sentences/fragments-run-ons-splices)'],
          ],
        },
        {
          t: 'example',
          title: 'Corrected',
          lines: [
            { text: 'Dear Hiring Manager, I am writing to apply for the role of junior editor, which was advertised on your website last week. I have three years’ experience of proofreading, and I am more accurate than most of my colleagues. In my current job, I edit articles, write headlines and manage a team of two. Each writer on my team submits their drafts to me by Friday, which means I often work to tight deadlines. I would welcome the opportunity to discuss my application with you. I have attached my CV. I look forward to hearing from you.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Not an error: singular they',
          text: '*Each writer ... submits their drafts* is correct. Singular *they* for an unspecified person is standard in modern British usage. See [Pronoun reference and agreement](@grammar/usage/pronoun-reference-and-agreement).',
        },
      ],
    },
    {
      id: 'patterns',
      title: 'What the five paragraphs have in common',
      blocks: [
        {
          t: 'table',
          head: ['Error type', 'How many', 'Where', 'Guide'],
          rows: [
            ['Apostrophes', '7', 'P1 (5, 7), P4 (6, 7, 9, 11), P5 (2)', '[Apostrophes](@grammar/punctuation/apostrophes)'],
            ['Tense and irregular forms', '6', 'P2 (2, 3, 4, 5, 7, 9)', '[Irregular verbs](@grammar/verbs/irregular-verbs)'],
            ['Subject-verb agreement', '6', 'P1 (2, 3, 9), P2 (10), P3 (4), P5 (5)', '[Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['Comma splices, fragments', '5', 'P1 (1, 4), P2 (8), P5 (6, 8)', '[Fragments, run-ons and comma splices](@grammar/sentences/fragments-run-ons-splices)'],
            ['Sound-alike words', '5', 'P1 (8), P3 (1, 6, 8), P5 (3)', '[Commonly confused words](@grammar/usage/commonly-confused-words)'],
            ['Commas (other)', '3', 'P1 (6), P4 (10, 12)', '[Commas](@grammar/punctuation/commas)'],
          ],
          caption: 'These six categories cover 32 of the 48 errors. The other 16 are capitals and hyphens, pronoun choice, modifiers and parallelism, a quantity word, a noun plural, dialogue and colon punctuation, a gerund and register. P1 error 4 is counted as a splice and P3 error 1 as a sound-alike.',
        },
        {
          t: 'p',
          text: 'Notice that almost every error is one of a small set. That is the usual picture: most writers repeat the same five or six mistakes. Learning to spot *your* set is worth more than learning every rule, which is why the checklist below ends with a personal list.',
        },
      ],
    },
    {
      id: 'process',
      title: 'A proofreading process: separate passes and reading backwards',
      lead: 'When you read your own writing normally, your brain supplies what you meant to write. These passes break that habit.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Put it away', body: 'Leave the draft for a few hours, or overnight if you can. Distance makes your own words look less familiar, and unfamiliar text is easier to check.' },
            { title: '2. Change how it looks', body: 'Print it, or change the font, size or column width on screen. A new layout stops you skimming by memory.' },
            { title: '3. Read forwards for meaning', body: 'One pass for sense only: does each sentence say what you mean, is anything missing, is the order clear? Fix big problems first; there is no point polishing a sentence you will delete.' },
            { title: '4. Read backwards, sentence by sentence', body: 'Start with the last sentence and work towards the first. Each sentence now arrives without its context, so you judge it on its own: does it have a subject and a finite verb, do they agree, is the tense right, are two clauses joined by only a comma?' },
            { title: '5. Read backwards, word by word', body: 'Point at each word from the end. With no meaning to carry you along, you see the words as spelt: *there* for *their*, *form* for *from*, a doubled *the the*.' },
            { title: '6. Search for your repeat offenders', body: 'Use find (Ctrl+F or Cmd+F) for *its, it’s, there, their, then, than, affect, effect, however, which* and every apostrophe. Check each hit against the rule.' },
            { title: '7. Read aloud, slowly', body: 'Your ear catches missing words, sentences that run on with no breath, and lists that do not match. Stop at every full stop.' },
          ],
        },
        {
          t: 'cycle',
          items: [
            { name: 'Meaning', body: 'Read forwards: is it clear and complete?' },
            { name: 'Sentences', body: 'Backwards by sentence: clause, agreement, tense.' },
            { name: 'Words', body: 'Backwards by word: spelling, sound-alikes, doubles.' },
            { name: 'Marks', body: 'Search: apostrophes, commas, semicolons, capitals.' },
            { name: 'Sound', body: 'Aloud: rhythm, missing words, parallel lists.' },
          ],
          caption: 'One problem type per pass. For a long piece, repeat the loop section by section.',
        },
        {
          t: 'dodont',
          do: [
            'Proofread on a different day, device or layout from the one you wrote on.',
            'Look for one kind of error at a time.',
            'Name the rule for each change, so you learn it rather than just fixing it.',
          ],
          dont: [
            'Rely on a spellchecker: *their*, *affect* and *weather* are all real words, and it will pass them.',
            'Proofread straight after writing, when you remember what each sentence is supposed to say.',
            'Edit content and proofread in the same pass; the content changes create new errors.',
          ],
        },
      ],
    },
    {
      id: 'checklist',
      title: 'The editing checklist',
      lead: 'A reusable list for any piece of your own writing. Tick each item once you have done a pass for it.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Every sentence has a subject and a finite verb; no dependent clause stands alone. ([Fragments](@grammar/sentences/fragments-run-ons-splices))',
            'No two independent clauses are joined by a comma alone, and *however* has a semicolon or full stop before it.',
            'Every verb agrees with the head noun of its subject, not the nearest noun. ([Agreement](@grammar/verbs/subject-verb-agreement))',
            'Tenses stay in one time frame unless the time really changes. ([Tenses](@grammar/verbs/tenses-overview))',
            'Irregular verbs use the right form: *had gone*, *began*, *lay down*. ([Irregular verbs](@grammar/verbs/irregular-verbs))',
            'Pronouns are in the right case (*my cousin and I* as subject, *for you and me* as object), and no reflexive appears without a matching subject. ([Pronouns](@grammar/parts-of-speech/pronouns))',
            'Each pronoun points clearly at one noun. ([Pronoun reference](@grammar/usage/pronoun-reference-and-agreement))',
            'Every opening phrase (*Having read ...*, *Walking home ...*) is followed by the person or thing doing it. ([Modifiers](@grammar/usage/modifiers-and-parallelism))',
            'Items in lists and pairs share the same form. ([Parallelism](@grammar/usage/modifiers-and-parallelism))',
            'Every apostrophe shows belonging or a missing letter; no plain plural has one; *its* and *it’s* are checked. ([Apostrophes](@grammar/punctuation/apostrophes))',
            'Commas follow introductory clauses, surround extra information and sit before *and/but/so* joining clauses; none separates a subject from its verb. ([Commas](@grammar/punctuation/commas))',
            'Colons introduce lists and explanations after a complete clause; semicolons join clauses or separate complex list items. ([Semicolons and colons](@grammar/punctuation/semicolons-colons-dashes))',
            'Sentences, titles, names and *I* are capitalised; compound modifiers before a noun are hyphenated. ([Capitals and hyphens](@grammar/punctuation/hyphens-capitals-numbers))',
            'Sound-alike words are checked by search: *their/there/they’re, then/than, affect/effect, whose/who’s, whether/weather*. ([Confused words](@grammar/usage/commonly-confused-words))',
            'The register suits the reader: greeting, contractions and vocabulary match a formal or informal purpose. ([Register](@grammar/usage/register-and-singapore-english))',
            'My personal list of repeat mistakes has been searched for, one by one.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Build your personal list',
          text: 'Each time a teacher, colleague or these drills catch a mistake of yours, add it to a short list. After a month you will usually see the same three to six entries. Search for those first in everything you write.',
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/practice/drills-parts-and-sentences', note: 'Fifty items on word classes, clauses and sentence errors.' },
            { path: 'grammar/practice/drills-verbs-and-punctuation', note: 'Fifty items on tenses, agreement, commas and apostrophes.' },
            { path: 'grammar/usage/commonly-confused-words', note: 'The sound-alike pairs a spellchecker will not catch.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Trask, R. L. (1997) *The Penguin Guide to Punctuation*. Penguin.',
    'Swan, M. (2016) *Practical English Usage*, 4th edn. Oxford University Press.',
    'Butterfield, J. (ed.) (2015) *Fowler’s Dictionary of Modern English Usage*, 4th edn. Oxford University Press.',
  ],
  related: [
    'grammar/practice/drills-parts-and-sentences',
    'grammar/practice/drills-verbs-and-punctuation',
    'grammar/usage/commonly-confused-words',
    'grammar/sentences/fragments-run-ons-splices',
    'grammar/punctuation/apostrophes',
    'grammar/usage/modifiers-and-parallelism',
  ],
}

export default guide
