import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Sentences are built from units inside units. A **phrase** is a group of words that works as one part of speech but has no subject–verb pair of its own. A **clause** has a subject and a finite verb. Knowing the difference tells you where commas go, why some “sentences” are fragments, and how to combine ideas cleanly.',
  nutshell: [
    '**Phrase** = a word group without its own subject + finite verb: *in the morning*, *the tall woman*, *having finished*.',
    '**Clause** = subject + finite verb: *she left*, *because it rained*, *who lives next door*.',
    'An **independent** (main) clause can stand alone as a sentence. A **dependent** (subordinate) clause cannot.',
    'Dependent clauses come in three kinds by job: **noun** clauses, **relative** (adjective) clauses and **adverbial** clauses.',
    'Phrases are named after their head word: noun, verb, adjective, adverb and prepositional phrases, plus participle, gerund and infinitive phrases.',
    'Test for a clause: can you find a subject and a verb that shows tense? If yes, it is a clause.',
  ],
  sections: [
    {
      id: 'difference',
      title: 'Phrase or clause?',
      blocks: [
        {
          t: 'table',
          head: ['Word group', 'Subject?', 'Finite verb?', 'Verdict'],
          rows: [
            ['after the match', 'No', 'No', 'Phrase (prepositional)'],
            ['after the match ended', '*the match*', '*ended*', 'Clause (dependent)'],
            ['running for the bus', 'No', 'No (*running* has no tense here)', 'Phrase (participle)'],
            ['she was running for the bus', '*she*', '*was running*', 'Clause (independent)'],
            ['to win the cup', 'No', 'No (infinitive)', 'Phrase (infinitive)'],
            ['that they would win the cup', '*they*', '*would win*', 'Clause (noun clause)'],
            ['the man in the grey coat', 'No', 'No', 'Phrase (noun)'],
            ['the man who wore the grey coat', '*who*', '*wore*', 'Phrase containing a relative clause'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The finite verb test',
          text: 'A **finite** verb shows tense or agrees with a subject: *walks, walked, is walking, has walked, will walk*. Non-finite forms (*to walk, walking, walked* used alone as a modifier) do not make a clause by themselves. Put *yesterday* or *tomorrow* in front: if the verb has to change, it is finite.',
        },
      ],
    },
    {
      id: 'phrases',
      title: 'The kinds of phrase',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Noun phrase', tag: 'head: noun', body: '*the cat*, *a very old map of Singapore*, *those three red buses*. Works as a subject, object or complement.' },
            { title: 'Verb phrase', tag: 'head: verb', body: '*has been sleeping*, *might have gone*, *will be told*. The main verb plus its auxiliaries.' },
            { title: 'Adjective phrase', tag: 'head: adjective', body: '*extremely proud of her*, *too hot to drink*, *very keen on football*.' },
            { title: 'Adverb phrase', tag: 'head: adverb', body: '*quite slowly*, *much more carefully*, *very often indeed*.' },
            { title: 'Prepositional phrase', tag: 'head: preposition', body: '*on the roof*, *after lunch*, *in spite of the rain*. Works like an adjective or an adverb.' },
            { title: 'Participle phrase', tag: 'non-finite', body: '*Exhausted by the climb*, we stopped. *Walking home*, I saw a fox. Describes a noun.' },
            { title: 'Gerund phrase', tag: 'non-finite', body: '*Cooking for twenty people* is hard work. Acts as a noun.' },
            { title: 'Infinitive phrase', tag: 'non-finite', body: 'She wants *to study medicine*. *To be honest*, I forgot. Acts as a noun, adjective or adverb.' },
          ],
        },
        {
          t: 'example',
          title: 'Prepositional phrases doing two jobs',
          lines: [
            { label: 'Like an adjective', text: 'The house **on the corner** is for sale. (Which house?)' },
            { label: 'Like an adverb', text: 'We met **on the corner**. (Where did we meet?)' },
            { label: 'Like an adjective', text: 'A book **about sharks** fell off the shelf.' },
            { label: 'Like an adverb', text: 'She talked **about sharks** for an hour.' },
          ],
        },
        {
          t: 'example',
          title: 'Same -ing word, different phrase',
          lines: [
            { label: 'Participle (describes)', text: '**Singing loudly**, the children marched in. (Describes *the children*.)' },
            { label: 'Gerund (a noun)', text: '**Singing loudly** annoys the neighbours. (Subject of *annoys*.)' },
            { label: 'Part of a verb phrase', text: 'The children **were singing** loudly. (Finite: *were* shows tense.)' },
          ],
        },
      ],
    },
    {
      id: 'clauses',
      title: 'Independent and dependent clauses',
      blocks: [
        { t: 'p', text: 'An **independent clause** is a complete thought: *The shop closed.* A **dependent clause** has a subject and verb but begins with a word that makes it lean on something else: *because the shop closed*, *when the shop closed*, *which the shop closed*. On its own, a dependent clause is a [fragment](@grammar/sentences/fragments-run-ons-splices).' },
        {
          t: 'table',
          head: ['Type', 'Job', 'Starts with', 'Example'],
          rows: [
            ['Noun clause', 'Subject, object or complement', 'that, what, whether, if, how, why, who', 'I know **that you tried**. **What he wants** is a nap.'],
            ['Relative (adjective) clause', 'Describes a noun', 'who, whom, whose, which, that, where, when', 'The girl **who won** is my cousin.'],
            ['Adverbial clause', 'Says when, why, how, if, despite what', 'because, although, when, if, unless, since, while, so that', 'We stayed in **because it was pouring**.'],
          ],
        },
        {
          t: 'example',
          title: 'Noun clauses in every noun slot',
          lines: [
            { label: 'Subject', text: '**Whether we go** depends on the weather.' },
            { label: 'Direct object', text: 'Nobody knows **why the bridge collapsed**.' },
            { label: 'Complement', text: 'The problem is **that we have no money**.' },
            { label: 'Object of a preposition', text: 'She was surprised by **what she found**.' },
          ],
        },
        {
          t: 'example',
          title: 'Adverbial clauses and their meanings',
          lines: [
            { label: 'Time', text: '**When the bell rang**, everyone stood up.' },
            { label: 'Reason', text: 'He apologised **because he had been rude**.' },
            { label: 'Condition', text: '**If you heat ice**, it melts.' },
            { label: 'Contrast', text: '**Although she was tired**, she finished the essay.' },
            { label: 'Purpose', text: 'Speak up **so that everyone can hear**.' },
            { label: 'Result', text: 'It was so cold **that the pipes froze**.' },
          ],
        },
      ],
    },
    {
      id: 'relative',
      title: 'Relative clauses: defining and non-defining',
      blocks: [
        { t: 'p', text: 'A **defining** (restrictive) relative clause tells you which one and is not marked off with commas. A **non-defining** (non-restrictive) clause adds extra information and is marked off with commas. The full rules are in [Who, whom, that, which, whose](@grammar/usage/who-whom-that-which).' },
        {
          t: 'example',
          title: 'Commas change the meaning',
          lines: [
            { label: 'Defining', text: 'My brother **who lives in Perth** is a pilot. (I have more than one brother; this one.)' },
            { label: 'Non-defining', text: 'My brother, **who lives in Perth**, is a pilot. (I have one brother; by the way, he lives in Perth.)' },
            { label: 'Defining', text: 'Students **who finish early** may leave. (Only those students.)' },
            { label: 'Non-defining', text: 'The students, **who finished early**, left. (All of them finished early.)' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Use *which* or *who* (never *that*) in non-defining clauses: *The Thames, which flows through London, ...*',
            'Drop the relative pronoun when it is the object: *the book (that) I read*.',
            'Put the relative clause right after the noun it describes.',
          ],
          dont: [
            'Write *The Thames, that flows through London, ...*: *that* cannot follow a comma here.',
            'Drop the pronoun when it is the subject: *the man lives next door is a vet* needs *who*.',
            'Leave a clause hanging far from its noun: *I bought a dog for my son **that bites*** suggests the son bites.',
          ],
        },
      ],
    },
    {
      id: 'diagnose',
      title: 'Diagnosing a sentence step by step',
      blocks: [
        {
          t: 'flow',
          title: 'Is this word group a clause?',
          nodes: [
            { label: 'Find a verb', sub: 'Any verb form', tone: 'data' },
            { label: 'Does it show tense?', sub: 'Try yesterday / tomorrow', tone: 'process' },
            { label: 'Find its subject', sub: 'Who or what + verb?', tone: 'process' },
            { label: 'Starts with a subordinator?', sub: 'because, if, who, that...', tone: 'process' },
            { label: 'Verdict', sub: 'Phrase, dependent or independent clause', tone: 'output' },
          ],
          caption: 'No finite verb: phrase. Finite verb + subject + subordinator: dependent clause. No subordinator: independent clause.',
        },
        {
          t: 'example',
          title: 'Breaking down a long sentence',
          lines: [
            { label: 'Sentence', text: 'Although the forecast was grim, the team that had trained all winter set off at dawn, hoping to reach the summit before noon.' },
            { label: 'Dependent (adverbial)', text: 'Although the forecast was grim' },
            { label: 'Independent', text: 'the team ... set off at dawn' },
            { label: 'Dependent (relative)', text: 'that had trained all winter (inside the subject)' },
            { label: 'Participle phrase', text: 'hoping to reach the summit before noon' },
            { label: 'Infinitive phrase', text: 'to reach the summit' },
            { label: 'Prepositional phrases', text: 'at dawn, before noon' },
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
          title: 'Phrase or clause? Name the type.',
          lines: [
            { label: 'Q1', text: '*under the old bridge*' },
            { label: 'A1', text: '**Prepositional phrase**: no subject, no verb.' },
            { label: 'Q2', text: '*because the train was late*' },
            { label: 'A2', text: '**Dependent adverbial clause** (reason): subject *the train*, verb *was*, opened by *because*.' },
            { label: 'Q3', text: '*having eaten too much*' },
            { label: 'A3', text: '**Participle phrase**: *having eaten* has no tense or subject of its own.' },
            { label: 'Q4', text: '*what you said yesterday*' },
            { label: 'A4', text: '**Noun clause**: subject *you*, verb *said*; it could be the object of *I remember*.' },
            { label: 'Q5', text: '*the dog barked*' },
            { label: 'A5', text: '**Independent clause**: subject + finite verb, no subordinator.' },
          ],
        },
        {
          t: 'example',
          title: 'Identify and correct',
          lines: [
            { label: 'Q6', text: 'Defining or non-defining? *Singapore, which is an island, has a hot climate.*' },
            { label: 'A6', text: '**Non-defining**: there is only one Singapore, so the clause adds extra information.' },
            { label: 'Q7', text: 'Correct it: *The phone that I bought it last week is broken.*' },
            { label: 'A7', text: 'The phone that I bought **last week** is broken. *That* already stands for the object; *it* repeats it.' },
            { label: 'Q8', text: 'What job does the clause do? *I wonder whether she will come.*' },
            { label: 'A8', text: '**Noun clause, direct object** of *wonder*.' },
            { label: 'Q9', text: 'Gerund or participle? *Reading in dim light strains your eyes.*' },
            { label: 'A9', text: '**Gerund phrase**: it is the subject of *strains*.' },
            { label: 'Q10', text: 'Is this a sentence? *Which was a surprise to everyone.*' },
            { label: 'A10', text: '**No**: it is a relative clause fragment. Attach it: *He resigned, which was a surprise to everyone.*' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Huddleston, R. and Pullum, G. K. (2005) *A Student’s Introduction to English Grammar*. Cambridge University Press.',
    'Swan, M. (2016) *Practical English Usage*, 4th edn. Oxford University Press.',
    'Crystal, D. (2004) *Rediscover Grammar*, 3rd edn. Longman.',
  ],
  related: [
    'grammar/sentences/subject-predicate-object',
    'grammar/sentences/sentence-structures',
    'grammar/sentences/fragments-run-ons-splices',
    'grammar/usage/who-whom-that-which',
    'grammar/parts-of-speech/conjunctions',
    'grammar/verbs/verbals-and-phrasal-verbs',
  ],
}

export default guide
