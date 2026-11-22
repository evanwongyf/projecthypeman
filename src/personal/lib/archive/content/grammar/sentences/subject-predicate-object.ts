import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every English sentence, however long, hangs on a small skeleton: **someone or something** (the subject) **does or is something** (the verb), often **to something** (the object) or **described as something** (the complement). Find the skeleton first and most grammar questions, from agreement to commas, become easy to answer.',
  nutshell: [
    'A sentence splits into a **subject** (who or what the sentence is about) and a **predicate** (everything said about it, starting with the verb).',
    'Find the **verb** first, then ask “who or what + verb?” to find the subject.',
    'A **direct object** answers “verb + what or whom?”; an **indirect object** answers “to or for whom?”.',
    'A **complement** follows a linking verb (be, seem, become) and renames or describes the subject: it is not an object.',
    'English has seven basic clause patterns built from S, V, O, C and A (adverbial); almost every sentence is one of them plus extras.',
    'Default English order is **S V O**. Moving these parts changes meaning: *The dog bit the postman* is not *The postman bit the dog*.',
  ],
  sections: [
    {
      id: 'skeleton',
      title: 'The skeleton: subject and predicate',
      blocks: [
        { t: 'p', text: 'The **subject** is the person, thing or idea the sentence is about. The **predicate** is the rest: the verb plus anything that completes it. The **simple subject** is the key noun or pronoun; the **complete subject** is that word plus everything attached to it.' },
        {
          t: 'table',
          head: ['Sentence', 'Complete subject', 'Simple subject', 'Predicate'],
          rows: [
            ['Birds sing.', 'Birds', 'Birds', 'sing'],
            ['The old lighthouse on the cliff has been empty for years.', 'The old lighthouse on the cliff', 'lighthouse', 'has been empty for years'],
            ['My sister and her friend opened a bakery.', 'My sister and her friend', 'sister, friend (compound subject)', 'opened a bakery'],
            ['Swimming before breakfast wakes me up.', 'Swimming before breakfast', 'Swimming (a gerund)', 'wakes me up'],
            ['What she said surprised everyone.', 'What she said (a noun clause)', 'the whole clause', 'surprised everyone'],
            ['It is raining.', 'It (a dummy subject)', 'It', 'is raining'],
          ],
          caption: 'A subject can be one word, a long noun phrase, a gerund or a whole clause.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The pronoun test',
          text: 'If you can replace a chunk with **he, she, it** or **they** and the sentence still works, that chunk is the complete subject. *The old lighthouse on the cliff has been empty* becomes *It has been empty*.',
        },
        {
          t: 'steps',
          items: [
            { title: '1. Find the verb', body: 'Look for the word that changes with tense: *walks / walked / will walk*. Include helping verbs: *has been waiting*.' },
            { title: '2. Ask who or what', body: 'Put “who or what” in front of the verb: “Who or what has been waiting?” The answer is the subject.' },
            { title: '3. Strip the extras', body: 'Cross out prepositional phrases (*of the students*, *in the box*). The subject is never inside one.' },
            { title: '4. Check with a pronoun', body: 'Swap the subject for he, she, it or they. If it reads naturally, you have it.' },
          ],
        },
        {
          t: 'example',
          title: 'Finding the subject when it hides',
          lines: [
            { label: 'Sentence', text: 'One of the students in the back row was asleep.' },
            { label: 'Verb', text: 'was' },
            { label: 'Strip phrases', text: 'One (of the students) (in the back row) was asleep.' },
            { label: 'Subject', text: '**One** (singular, so *was*, not *were*)' },
          ],
        },
        {
          t: 'example',
          title: 'Subjects after the verb',
          lines: [
            { label: 'There-sentence', text: 'There **are** three **reasons**. (Subject: *reasons*; *there* is a placeholder.)' },
            { label: 'Question', text: 'Where **is** **the key**? (Subject: *the key*.)' },
            { label: 'Fronted place', text: 'Under the bridge **lived** **a troll**. (Subject: *a troll*.)' },
            { label: 'Imperative', text: 'Close the door. (Subject: an understood *you*.)' },
          ],
        },
      ],
    },
    {
      id: 'verbs',
      title: 'The verb: the heart of the predicate',
      blocks: [
        { t: 'p', text: 'The verb decides what else the sentence needs. A verb that needs an object is **transitive**; one that does not is **intransitive**; one that joins the subject to a description is a **linking** (copular) verb. Many verbs can be more than one, depending on the sentence. See [Verbs: the basics](@grammar/parts-of-speech/verbs-basics) for more.' },
        {
          t: 'table',
          head: ['Verb type', 'Needs', 'Examples'],
          rows: [
            ['Intransitive', 'Nothing more', 'The baby **slept**. Prices **rose**. She **arrived** late.'],
            ['Transitive', 'A direct object', 'She **wrote** *a letter*. We **need** *help*. He **lost** *his keys*.'],
            ['Ditransitive', 'Two objects', 'She **gave** *me* *a book*. They **sent** *us* *a card*.'],
            ['Linking', 'A complement', 'The soup **tastes** *salty*. He **became** *a nurse*. You **seem** *tired*.'],
            ['Complex transitive', 'Object + complement', 'They **elected** *her* *captain*. The news **made** *him* *happy*.'],
          ],
        },
        {
          t: 'example',
          title: 'One verb, three jobs',
          lines: [
            { label: 'Intransitive', text: 'The kettle **is boiling**.' },
            { label: 'Transitive', text: 'I **am boiling** *the kettle*.' },
            { label: 'Intransitive', text: 'The door **opened**.' },
            { label: 'Transitive', text: 'She **opened** *the door*.' },
            { label: 'Linking', text: 'The milk **turned** *sour*.' },
            { label: 'Transitive', text: 'He **turned** *the page*.' },
          ],
        },
      ],
    },
    {
      id: 'objects',
      title: 'Objects and complements',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Direct object (Od)', def: 'The thing or person directly affected by the action. Ask “subject + verb + what/whom?” *She kicked **the ball**.*' },
            { term: 'Indirect object (Oi)', def: 'The person or thing that receives the direct object. Ask “to/for whom?” *She passed **me** the salt.*' },
            { term: 'Subject complement (Cs)', def: 'After a linking verb, it renames or describes the subject. *Ravi is **a chef**. The room felt **cold**.*' },
            { term: 'Object complement (Co)', def: 'After the object, it renames or describes the object. *They painted the fence **green**. We call him **Bob**.*' },
            { term: 'Adverbial (A)', def: 'Tells how, when, where or why. Usually optional, but some verbs need one: *She put the cup **on the table**.*' },
          ],
        },
        {
          t: 'example',
          title: 'Indirect object or prepositional phrase',
          lines: [
            { label: 'Oi + Od', text: 'Sam gave **his mother** **flowers**.' },
            { label: 'Od + to-phrase', text: 'Sam gave **flowers** to his mother.' },
            { label: 'Oi + Od', text: 'Can you buy **me** **a coffee**?' },
            { label: 'Od + for-phrase', text: 'Can you buy **a coffee** for me?' },
            { label: 'Note', text: 'When the direct object is a pronoun, use the phrase: *Give it to her*, not *Give her it* (common in speech, but avoid in formal writing).' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Object or complement?',
          text: 'In *He became **a doctor***, “a doctor” is the same person as “he”: it is a **complement**. In *He saw **a doctor***, the doctor is someone else: it is an **object**. Test: can you put *=* between subject and noun? If yes, complement.',
        },
        {
          t: 'dodont',
          do: [
            'Use subject pronouns as complements in formal writing: *It was **she** who called.*',
            'Use object pronouns as objects: *They invited Priya and **me**.*',
            'Use an adjective, not an adverb, after a linking verb: *I feel **bad** about it.*',
          ],
          dont: [
            'Write *They invited Priya and **I***: remove “Priya and” and *invited I* is clearly wrong.',
            'Write *I feel **badly***, unless you mean your sense of touch is poor.',
            'Treat the object of a preposition as the subject: *The box of apples **is** heavy*, not *are*.',
          ],
        },
      ],
    },
    {
      id: 'patterns',
      title: 'The seven clause patterns',
      blocks: [
        { t: 'p', text: 'Grammarians (notably Quirk and colleagues) describe seven basic patterns. Everything else in a sentence, such as optional adverbials, adjectives and extra phrases, decorates one of these.' },
        {
          t: 'table',
          head: ['Pattern', 'Example', 'Notes'],
          rows: [
            ['S V', '**The guests** | **arrived**.', 'Intransitive verb'],
            ['S V O', '**Mira** | **plays** | **the cello**.', 'The most common pattern'],
            ['S V C', '**The film** | **was** | **dull**.', 'Linking verb + complement'],
            ['S V A', '**My keys** | **are** | **in the car**.', 'The adverbial is required'],
            ['S V O O', '**Dad** | **told** | **us** | **a story**.', 'Indirect then direct object'],
            ['S V O C', '**The jury** | **found** | **him** | **guilty**.', 'Complement describes the object'],
            ['S V O A', '**She** | **put** | **the vase** | **on the shelf**.', 'The adverbial is required'],
          ],
          caption: 'S subject, V verb, O object, C complement, A adverbial.',
        },
        {
          t: 'example',
          title: 'Labelling a longer sentence',
          lines: [
            { label: 'Sentence', text: 'Last summer, my grandparents in Penang sent the whole family a huge box of durian cakes.' },
            { label: 'A (optional)', text: 'Last summer' },
            { label: 'S', text: 'my grandparents in Penang' },
            { label: 'V', text: 'sent' },
            { label: 'Oi', text: 'the whole family' },
            { label: 'Od', text: 'a huge box of durian cakes' },
            { label: 'Pattern', text: 'S V O O, with an optional adverbial at the front' },
          ],
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Where the skeleton goes wrong',
      blocks: [
        {
          t: 'example',
          title: 'Before and after',
          lines: [
            { label: 'Wrong', text: 'The list of names are on the desk.' },
            { label: 'Right', text: 'The list of names **is** on the desk. (Subject: *list*.)' },
            { label: 'Wrong', text: 'Me and Tom went to the cinema.' },
            { label: 'Right', text: '**Tom and I** went to the cinema. (Subject position needs *I*.)' },
            { label: 'Wrong', text: 'Between you and I, it was awful.' },
            { label: 'Right', text: 'Between you and **me**, it was awful. (Object of a preposition.)' },
            { label: 'Wrong', text: 'She put the books.' },
            { label: 'Right', text: 'She put the books **on the trolley**. (*Put* needs an adverbial.)' },
            { label: 'Wrong', text: 'My brother he works in Dubai.' },
            { label: 'Right', text: 'My brother works in Dubai. (One subject, not two.)' },
            { label: 'Wrong', text: 'Is important to check.' },
            { label: 'Right', text: '**It** is important to check. (English needs a subject, even a dummy one.)' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Agreement starts here',
          text: 'Most subject–verb agreement errors are really subject-finding errors. Once you know the simple subject, the verb follows. See [Subject-verb agreement](@grammar/verbs/subject-verb-agreement).',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        { t: 'p', text: 'Identify the parts asked for. Answers and reasons follow each question.' },
        {
          t: 'example',
          title: 'Questions 1 to 5',
          lines: [
            { label: 'Q1', text: 'Find the simple subject: *The keys to the shed are missing.*' },
            { label: 'A1', text: '**keys**. “To the shed” is a prepositional phrase, so the verb is plural: *are*.' },
            { label: 'Q2', text: 'Object or complement? *Lena became captain.*' },
            { label: 'A2', text: '**Complement**. *Became* is a linking verb and “captain” is Lena.' },
            { label: 'Q3', text: 'Label the pattern: *The teacher gave the class a warning.*' },
            { label: 'A3', text: '**S V O O**: the class (Oi), a warning (Od).' },
            { label: 'Q4', text: 'Find the subject: *Here comes the bus.*' },
            { label: 'A4', text: '**the bus**. The subject follows the verb after a fronted *here*.' },
            { label: 'Q5', text: 'Correct it: *Him and his dad fixed the car.*' },
            { label: 'A5', text: '**He** and his dad fixed the car. Subject position takes *he*.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 6 to 10',
          lines: [
            { label: 'Q6', text: 'Transitive or intransitive? *The ice melted.*' },
            { label: 'A6', text: '**Intransitive**: nothing follows. In *The sun melted the ice* it is transitive.' },
            { label: 'Q7', text: 'Label the pattern: *Everyone considered the plan a failure.*' },
            { label: 'A7', text: '**S V O C**: “a failure” describes the plan, not everyone.' },
            { label: 'Q8', text: 'Find the complete subject: *Learning a second language takes patience.*' },
            { label: 'A8', text: '**Learning a second language**. A gerund phrase can be a subject; replace it with *It*.' },
            { label: 'Q9', text: 'Correct it: *I feel terribly about missing your party.*' },
            { label: 'A9', text: 'I feel **terrible**. After the linking verb *feel*, use an adjective complement.' },
            { label: 'Q10', text: 'What is the subject? *Tidy your room.*' },
            { label: 'A10', text: 'An **understood *you***. Imperatives drop the subject but still have one.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Quirk, R., Greenbaum, S., Leech, G. and Svartvik, J. (1985) *A Comprehensive Grammar of the English Language*. Longman.',
    'Huddleston, R. and Pullum, G. K. (2005) *A Student’s Introduction to English Grammar*. Cambridge University Press.',
    'Swan, M. (2016) *Practical English Usage*, 4th edn. Oxford University Press.',
  ],
  related: [
    'grammar/sentences/phrases-and-clauses',
    'grammar/sentences/sentence-structures',
    'grammar/verbs/subject-verb-agreement',
    'grammar/parts-of-speech/pronouns',
    'grammar/parts-of-speech/verbs-basics',
  ],
}

export default guide
