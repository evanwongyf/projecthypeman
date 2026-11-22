import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Grammar is the set of patterns that lets a reader rebuild exactly what you meant from the words on the page. This shelf teaches those patterns from the ground up, with a lot of real sentences, the mistakes people actually make, and practice with answers. Start with the 20-question self-test below to find out where to begin.',
  nutshell: [
    'Grammar is not a list of fussy prohibitions: it is the **shared code** that makes writing unambiguous when you are not there to explain it.',
    'The shelf runs in six groups: **parts of speech**, **building sentences**, **verbs in depth**, **punctuation**, **usage and style**, and **practice**.',
    'Most errors in real writing come from a small number of causes: agreement, tense consistency, comma splices, apostrophes, pronoun reference and confused words.',
    'Take the **diagnostic**: every question is keyed to the guide that explains it, so each miss tells you exactly what to read.',
    'Learn a rule, see it in many examples, then test yourself: reading alone does not make the pattern stick.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why grammar matters',
      blocks: [
        {
          t: 'p',
          text: 'When you speak, your listener can see your face, hear your stress and ask “what do you mean?”. A reader has none of that. Grammar and punctuation do the work your voice would do: they show which words belong together, who did what to whom, and when it happened.',
        },
        {
          t: 'example',
          title: 'Same words, different meanings',
          lines: [
            { label: 'A', text: '“Let’s eat, Grandma.” (an invitation to Grandma)' },
            { label: 'B', text: '“Let’s eat Grandma.” (a rather different plan)' },
            { label: 'A', text: '“The students who revised passed.” (only the ones who revised passed)' },
            { label: 'B', text: '“The students, who revised, passed.” (all of them revised, and all passed)' },
            { label: 'A', text: '“She only told him the answer.” (she did nothing else)' },
            { label: 'B', text: '“She told only him the answer.” (nobody else was told)' },
            { label: 'A', text: '“I have lived here for ten years.” (and I still do)' },
            { label: 'B', text: '“I lived here for ten years.” (but not any more)' },
          ],
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Clarity', body: 'Readers understand you first time, without rereading or guessing.' },
            { title: 'Credibility', body: 'Examiners, employers and editors judge content partly by its surface. Errors make good ideas look careless.' },
            { title: 'Control', body: 'Knowing the options (passive or active, short or long sentences, semicolon or full stop) lets you choose the effect you want.' },
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Myth: grammar is about never splitting infinitives',
          text: 'Several famous “rules” (never split an infinitive, never end a sentence with a preposition, never start with *and* or *but*) are style preferences, not rules of English grammar. This shelf points them out where they come up and focuses on the patterns that actually affect meaning and correctness.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Which English?',
          text: 'The guides use **British spelling** and standard British usage, and note where American English differs. The usage group includes a guide on register and Singapore English, because standard English is one variety among several, and knowing when to use it is part of the skill.',
        },
      ],
    },
    {
      id: 'map',
      title: 'How the shelf is organised',
      blocks: [
        {
          t: 'levels',
          caption: 'Each group builds on the one below it.',
          items: [
            { name: 'Parts of speech', body: 'The word classes: what a noun, verb, adjective, preposition or determiner is and does.', verbs: ['identify', 'classify'] },
            { name: 'Building sentences', body: 'Subjects, objects, phrases and clauses, and how they combine into the four sentence types.', verbs: ['parse', 'combine'] },
            { name: 'Verbs in depth', body: 'Tenses, agreement, modals, passive, conditionals and reported speech: the engine of the sentence.', verbs: ['conjugate', 'choose'] },
            { name: 'Punctuation', body: 'The marks that show the reader the structure you built.', verbs: ['punctuate', 'separate'] },
            { name: 'Usage and style', body: 'Confused words, modifiers, parallelism, spelling and register: writing that is correct and reads well.', verbs: ['edit', 'refine'] },
            { name: 'Practice', body: 'Drills with answers and a proofreading workshop to make it automatic.', verbs: ['apply', 'check'] },
          ],
        },
        {
          t: 'p',
          text: 'You can read straight through, or use the self-test below to jump to the guides you need. If you are new to grammar terms, read [Nouns](@grammar/parts-of-speech/nouns), [Verbs: the basics](@grammar/parts-of-speech/verbs-basics) and [Subjects, predicates and objects](@grammar/sentences/subject-predicate-object) first: almost every other guide uses those words.',
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/parts-of-speech/nouns', note: 'Parts of speech: start here for the word classes.' },
            { path: 'grammar/parts-of-speech/interjections-and-word-class-test', note: 'Parts of speech: the test for telling word classes apart.' },
            { path: 'grammar/sentences/subject-predicate-object', note: 'Building sentences: the skeleton of every sentence.' },
            { path: 'grammar/sentences/fragments-run-ons-splices', note: 'Building sentences: the most common sentence-level errors.' },
            { path: 'grammar/verbs/tenses-overview', note: 'Verbs in depth: all twelve tenses on one map.' },
            { path: 'grammar/verbs/subject-verb-agreement', note: 'Verbs in depth: making the verb match its subject.' },
            { path: 'grammar/punctuation/commas', note: 'Punctuation: the eight comma rules.' },
            { path: 'grammar/punctuation/apostrophes', note: 'Punctuation: possession, contraction and its versus it’s.' },
            { path: 'grammar/usage/commonly-confused-words', note: 'Usage and style: their/there, affect/effect and many more.' },
            { path: 'grammar/usage/modifiers-and-parallelism', note: 'Usage and style: dangling modifiers and matching lists.' },
            { path: 'grammar/practice/drills-parts-and-sentences', note: 'Practice: fifty items with answers.' },
            { path: 'grammar/practice/proofreading-workshop', note: 'Practice: correct real paragraphs step by step.' },
          ],
        },
      ],
    },
    {
      id: 'how-to-study',
      title: 'How to study grammar so it sticks',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Find your gaps', body: 'Take the diagnostic honestly, without looking anything up. Note every miss and the guide it points to.' },
            { title: 'Read one guide at a time', body: 'Read the rule, then spend most of your time on the examples. Say the corrected sentences aloud.' },
            { title: 'Do the practice set before checking', body: 'Cover the answers. Write your answer and your reason, then compare. The reason matters more than the answer.' },
            { title: 'Hunt the pattern in your own writing', body: 'Take an old essay and search for the error you just studied. Finding it in your own work is what changes habits.' },
            { title: 'Come back after a gap', body: 'Retake the relevant drill a few days later. Spaced retrieval beats rereading.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Learn the names of the parts of a sentence: they make every explanation shorter.',
            'Keep a personal list of your three most frequent errors and check for them every time you edit.',
            'Read your work aloud: many grammar slips (missing words, agreement, run-ons) are easier to hear than see.',
          ],
          dont: [
            'Memorise rules without examples: you will not recognise the rule when you meet it in a real sentence.',
            'Trust a grammar checker blindly: it misses many errors and flags correct sentences as wrong.',
            'Try to fix everything at once: one error pattern a week is plenty.',
          ],
        },
      ],
    },
    {
      id: 'diagnostic',
      title: 'The diagnostic: 20 questions',
      lead: 'Write your answers down before you look at the key in the next section.',
      blocks: [
        {
          t: 'list',
          ordered: true,
          items: [
            'What part of speech is *fast* in “She runs fast”?',
            'Which is correct: “Between you and *I*” or “Between you and *me*”?',
            'Plural of *criterion*?',
            'Correct the adjective order: “a wooden old lovely table”.',
            'Fill the gap with *a*, *an* or *the*: “She is ___ honest person.”',
            'Which is correct: “I’m good at *in* maths”, “good *at* maths” or “good *on* maths”?',
            'Is this a full sentence? “Because the train was late.”',
            'Fix: “It was raining, we stayed inside.”',
            'Subject or object? Find the direct object in “The teacher gave the class a test.”',
            'Choose: “The list of items *is* / *are* on the desk.”',
            'Choose: “I *have seen* / *saw* that film yesterday.”',
            'Past participle of *lie* (meaning to recline)?',
            'Make it passive: “The committee approved the plan.”',
            'Complete the third conditional: “If I had known, I ___ (tell) you.”',
            'Report it: She said, “I am tired.” → She said that she ___.',
            'Add the missing comma, if any: “After the match ended we went home.”',
            'Choose: “The dog wagged *its* / *it’s* tail.”',
            'Choose: “There are *fewer* / *less* students this year.”',
            'Fix: “Walking into the room, the lights came on.”',
            'Choose: “The man *who* / *whom* I met was kind.”',
          ],
        },
      ],
    },
    {
      id: 'answers',
      title: 'Answer key: what to read for each miss',
      blocks: [
        {
          t: 'table',
          head: ['#', 'Answer', 'Why', 'If you missed it, read'],
          rows: [
            ['1', 'Adverb', 'It tells you how she runs. *Fast* is an adjective in “a fast car”.', '[Adverbs](@grammar/parts-of-speech/adverbs)'],
            ['2', 'Between you and **me**', '*Between* is a preposition and takes object pronouns.', '[Pronouns](@grammar/parts-of-speech/pronouns)'],
            ['3', '**Criteria**', 'A Greek plural; *criterias* is wrong.', '[Nouns](@grammar/parts-of-speech/nouns)'],
            ['4', 'a lovely old wooden table', 'Opinion, then age, then material.', '[Adjectives](@grammar/parts-of-speech/adjectives)'],
            ['5', '**an** honest person', '*Honest* begins with a vowel sound (the h is silent).', '[Determiners and articles](@grammar/parts-of-speech/determiners-and-articles)'],
            ['6', 'good **at** maths', '*Good* is followed by *at* for skills.', '[Prepositions](@grammar/parts-of-speech/prepositions)'],
            ['7', 'No, a fragment', 'A dependent clause cannot stand alone.', '[Fragments, run-ons and comma splices](@grammar/sentences/fragments-run-ons-splices)'],
            ['8', 'It was raining, **so** we stayed inside. (or a full stop or semicolon)', 'Two independent clauses joined by only a comma make a comma splice.', '[Conjunctions](@grammar/parts-of-speech/conjunctions)'],
            ['9', '*a test*', 'The thing given is the direct object; *the class* is the indirect object.', '[Subjects, predicates and objects](@grammar/sentences/subject-predicate-object)'],
            ['10', '**is**', 'The subject is *list* (singular), not *items*.', '[Subject-verb agreement](@grammar/verbs/subject-verb-agreement)'],
            ['11', '**saw**', 'A finished past time (*yesterday*) needs the past simple.', '[The present tenses](@grammar/verbs/present-tenses)'],
            ['12', '**lain**', 'lie, lay, lain; do not confuse with *lay, laid, laid*.', '[Irregular verbs](@grammar/verbs/irregular-verbs)'],
            ['13', 'The plan was approved (by the committee).', 'Object becomes subject; *be* + past participle.', '[Active and passive voice](@grammar/verbs/active-and-passive)'],
            ['14', '**would have told**', 'Third conditional: if + past perfect, would have + past participle.', '[Conditionals and the subjunctive](@grammar/verbs/conditionals-and-mood)'],
            ['15', '**was tired**', 'Backshift: present becomes past after a past reporting verb.', '[Reported speech](@grammar/verbs/reported-speech)'],
            ['16', 'After the match ended**,** we went home.', 'A comma follows an introductory dependent clause.', '[Commas](@grammar/punctuation/commas)'],
            ['17', '**its**', '*It’s* only ever means *it is* or *it has*.', '[Apostrophes](@grammar/punctuation/apostrophes)'],
            ['18', '**fewer**', '*Students* are countable.', '[Fewer or less, much or many](@grammar/usage/countable-fewer-less-much-many)'],
            ['19', 'As I walked into the room, the lights came on.', 'The lights were not walking: a dangling modifier.', '[Modifiers and parallelism](@grammar/usage/modifiers-and-parallelism)'],
            ['20', '**whom** (or *who*, informally; or just “The man I met”)', '*Whom* is the object of *met*: I met him.', '[Who, whom, that, which, whose](@grammar/usage/who-whom-that-which)'],
          ],
        },
        {
          t: 'table',
          head: ['Score', 'Where to start'],
          rows: [
            ['0 to 7', 'Begin at [Nouns](@grammar/parts-of-speech/nouns) and work through the parts of speech in order, then building sentences.'],
            ['8 to 14', 'Read the guide for each miss, then do [Drills: parts of speech and sentences](@grammar/practice/drills-parts-and-sentences).'],
            ['15 to 18', 'Read only the guides for your misses, then try [Drills: verbs and punctuation](@grammar/practice/drills-verbs-and-punctuation).'],
            ['19 to 20', 'Go to the [Proofreading workshop](@grammar/practice/proofreading-workshop) and the [Register guide](@grammar/usage/register-and-singapore-english) to polish style.'],
          ],
          caption: 'A rough guide only: one miss in an area is worth a quick read even if your total is high.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Look at the pattern of misses, not just the score',
          text: 'Three misses in questions 10 to 15 point to verbs; misses in 16 and 17 point to punctuation. Group your misses by section of the shelf and start with the group that has the most.',
        },
      ],
    },
    {
      id: 'vocabulary',
      title: 'Ten terms you will meet everywhere',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Word class (part of speech)', def: 'The job a word does: noun, verb, adjective, adverb, pronoun, preposition, conjunction, determiner or interjection.' },
            { term: 'Subject', def: 'Who or what the sentence is about, usually before the verb: *The cat* slept.' },
            { term: 'Verb', def: 'The action or state: The cat *slept*.' },
            { term: 'Object', def: 'Who or what receives the action: She read *the book*.' },
            { term: 'Phrase', def: 'A group of words without its own subject-verb pair: *in the morning*.' },
            { term: 'Clause', def: 'A group of words with a subject and a verb: *when the bell rang*.' },
            { term: 'Independent clause', def: 'A clause that can stand alone as a sentence: *The bell rang.*' },
            { term: 'Tense', def: 'The verb form that shows time: *walk*, *walked*, *will walk*.' },
            { term: 'Agreement', def: 'Matching forms: a singular subject takes a singular verb (*she walks*).' },
            { term: 'Modifier', def: 'A word or phrase that describes another: *very* tall, a girl *with red hair*.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press.',
    'Crystal, D. (2004). *Rediscover Grammar* (3rd ed.). Longman.',
    'Butterfield, J. (ed.) (2015). *Fowler’s Dictionary of Modern English Usage* (4th ed.). Oxford University Press.',
  ],
  related: [
    'grammar/parts-of-speech/nouns',
    'grammar/sentences/subject-predicate-object',
    'grammar/verbs/tenses-overview',
    'grammar/punctuation/commas',
    'grammar/usage/commonly-confused-words',
    'grammar/practice/drills-parts-and-sentences',
  ],
}

export default guide
