import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A verb must agree with its subject in number and person: a singular subject takes a singular verb, a plural subject a plural one. The rule is simple; finding the real subject is the hard part, especially when phrases, collective nouns or words like *each*, *none* and *either* get in the way.',
  nutshell: [
    'In the present tense, agreement mostly shows in one place: the **-s** on third-person singular verbs (*she walks*, *it has*, *he is*). *Be* also agrees in the past (*was / were*).',
    'Find the **head noun** of the subject and ignore phrases between it and the verb: The box **of chocolates** is on the table.',
    '**And** usually makes a plural subject; **or / nor** agree with the nearer subject.',
    '*Each, every, everyone, somebody, nothing* are singular. *None, all, some, most* depend on the noun they refer to.',
    'Collective nouns (*team, family, government*) take a singular verb when seen as one unit; British English also allows a plural verb when thinking of the members.',
  ],
  sections: [
    {
      id: 'basics',
      title: 'The basic pattern',
      blocks: [
        {
          t: 'table',
          head: ['Subject', 'be (present)', 'be (past)', 'have', 'regular verb'],
          rows: [
            ['I', 'am', 'was', 'have', 'walk'],
            ['you (singular or plural)', 'are', 'were', 'have', 'walk'],
            ['he / she / it / one noun', '**is**', '**was**', '**has**', '**walks**'],
            ['we / they / plural noun', 'are', 'were', 'have', 'walk'],
          ],
          caption: 'Modal verbs (*can, will, must*) and the past simple of every verb except *be* have one form for all persons: *she can*, *they walked*.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The “one -s” rule of thumb',
          text: 'In a simple present sentence, the -s usually appears on the noun *or* the verb, not both: *The dog barks* / *The dogs bark*. It is only a memory aid (it fails for plurals like *children* or *people*), but it catches many slips.',
        },
      ],
    },
    {
      id: 'finding-subject',
      title: 'Finding the real subject',
      blocks: [
        {
          t: 'table',
          head: ['Trap', 'Correct', 'Why'],
          rows: [
            ['Prepositional phrase in between', 'The **quality** of the photos **is** poor.', 'Head noun: *quality*, not *photos*.'],
            ['Long modifier', 'The **list** of items that we need for the trip **is** on the fridge.', 'Head noun: *list*.'],
            ['Relative clause', 'One of the students who **live** in halls **is** ill.', '*who* refers to *students* (plural); the main subject *one* is singular.'],
            ['as well as / along with / together with', 'The **manager**, as well as her staff, **was** praised.', 'These phrases do not join subjects the way *and* does.'],
            ['Inverted order', 'On the wall **hang** two **portraits**.', 'The subject comes after the verb: *portraits*.'],
            ['There is / there are', 'There **is** a problem. There **are** two problems.', 'The verb agrees with the noun after it.'],
            ['Questions', 'Where **are** my **keys**? **Does** your **brother** drive?', 'Agree with the subject after the auxiliary.'],
            ['Gerund or clause as subject', '**Swimming** every day **keeps** me fit. What we need **is** more time.', 'An *-ing* phrase or a *what* clause is singular.'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Find the verb', body: 'Underline the main verb in the clause.' },
            { title: 'Ask “who or what?”', body: 'Ask *who or what is / does…?* to find the subject.' },
            { title: 'Strip the extras', body: 'Cross out prepositional phrases, *as well as* phrases and relative clauses.' },
            { title: 'Count the head noun', body: 'One thing → singular verb. More than one → plural verb.' },
          ],
        },
      ],
    },
    {
      id: 'compound',
      title: 'And, or, nor, either, neither',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Rule', 'Example'],
          rows: [
            ['A **and** B', 'plural', 'Tom **and** Ana **are** coming.'],
            ['A and B as one idea', 'singular', 'Fish **and** chips **is** my favourite meal. Bread and butter **was** all we had.'],
            ['**each / every** + A and B', 'singular', 'Every boy and girl **has** a seat.'],
            ['A **or** B / **either** A **or** B', 'nearer subject', 'Either the teacher or the **pupils are** wrong. Either the pupils or the **teacher is** wrong.'],
            ['**neither** A **nor** B', 'nearer subject', 'Neither my parents nor my **sister knows**.'],
            ['**neither / either** alone', 'singular in formal writing', '**Neither** of the answers **is** correct. (*are* is common in speech)'],
            ['**not only** A **but also** B', 'nearer subject', 'Not only the players but also the **coach was** fined.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Make it sound natural',
          text: 'With *or / nor* and a mix of singular and plural, put the plural subject last so the verb is plural: Neither the captain nor the **players were** happy sounds smoother than *…nor the captain was*.',
        },
      ],
    },
    {
      id: 'pronouns-quantities',
      title: 'Indefinite pronouns and quantity words',
      blocks: [
        {
          t: 'table',
          head: ['Always singular', 'Always plural', 'Singular or plural (depends on the noun)'],
          rows: [
            ['each, every, either, neither', 'both, few, many, several', 'all, any, more, most, none, some, half'],
            ['everyone, everybody, everything', 'others', 'a lot of, lots of, plenty of'],
            ['someone, somebody, something', '', 'the majority of, a number of (see below)'],
            ['anyone, anybody, anything', '', 'percentages and fractions'],
            ['no one, nobody, nothing, one', '', ''],
          ],
          caption: '*A number of* + plural takes a plural verb (A number of people **have** complained); *the number of* is singular (The number of complaints **has** risen).',
        },
        {
          t: 'example',
          title: 'Depends on the noun',
          lines: [
            { label: 'some', text: 'Some of the cake **is** left. / Some of the biscuits **are** left.' },
            { label: 'most', text: 'Most of the money **was** spent. / Most of the tickets **were** sold.' },
            { label: 'half', text: 'Half of the class **is** absent. / Half of the students **are** absent.' },
            { label: '%', text: 'Sixty per cent of the land **is** forest. / Sixty per cent of voters **were** undecided.' },
            { label: 'none', text: 'None of the milk **is** fresh. / None of the guests **has** (or **have**) arrived.' },
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '“None must always be singular”',
          text: 'Not so. None of them **is** and None of them **are** are both standard; the plural has been used for centuries and is more common in everyday English. The singular is preferred by some style guides for formal writing.',
        },
      ],
    },
    {
      id: 'tricky-nouns',
      title: 'Collective nouns and other tricky nouns',
      blocks: [
        {
          t: 'table',
          head: ['Noun type', 'Example', 'Note'],
          rows: [
            ['Collective (one unit)', 'The **team is** top of the league.', 'Singular everywhere.'],
            ['Collective (the members)', 'The **team are** arguing among themselves.', 'Common in British English; American English prefers *is* or *the team members are*.'],
            ['Always plural', 'The **police are** investigating. **People are** angry. **Cattle are** grazing.', 'Never *the police is*.'],
            ['Look plural, are singular', '**Mathematics is** hard. The **news is** good. **Physics is** fun. **Measles is** contagious.', 'Subjects, *news*, many illnesses.'],
            ['Pair nouns', 'My **trousers are** torn. These **scissors are** blunt.', 'But: This **pair** of trousers **is** torn.'],
            ['Amounts as one quantity', '**Ten pounds is** too much. **Three hours is** a long wait. **Five miles is** a long way.', 'Money, time and distance as a single amount.'],
            ['Titles and names', '*The Simpsons* **is** still on air. **The United States has** fifty states.', 'One work or one country.'],
            ['Latin / Greek plurals', 'The **data are** (or **is**) clear. The **criteria are** strict. The **phenomenon is** rare.', '*Data* as a mass noun with *is* is now widely accepted; *criteria* and *phenomena* are plural.'],
          ],
        },
      ],
    },
    {
      id: 'errors-practice',
      title: 'Common errors and practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'The results of the survey **are** surprising.',
            '**Everyone has** finished.',
            'There **are** lots of reasons.',
            'He **doesn’t** care.',
            'Neither of them **is** ready.',
            'The news **is** bad.',
          ],
          dont: [
            'The results of the survey *is* surprising.',
            'Everyone *have* finished.',
            'There*’s* lots of reasons. (common in speech, avoid in writing)',
            'He *don’t* care.',
            'Neither of them *are* ready. (fine in speech, avoid in formal writing)',
            'The news *are* bad.',
          ],
        },
        {
          t: 'example',
          title: 'Practice with answers',
          lines: [
            { label: '1', text: '*The price of these shoes (is / are) ridiculous.* → **is**: head noun *price*.' },
            { label: '2', text: '*My brother and his wife (live / lives) in Perth.* → **live**: *and* joins two subjects.' },
            { label: '3', text: '*Either the cats or the dog (has / have) knocked over the vase.* → **has**: nearer subject *dog*.' },
            { label: '4', text: '*Each of the rooms (has / have) a balcony.* → **has**: *each* is singular.' },
            { label: '5', text: '*There (is / are) a pen and two pencils on the desk.* → **is** (agreeing with the nearer *a pen*) is the usual choice; *are* is also used. Rewrite to avoid doubt: *On the desk are a pen and two pencils.*' },
            { label: '6', text: '*Economics (is / are) my best subject.* → **is**.' },
            { label: '7', text: '*A number of students (has / have) asked for extensions.* → **have**.' },
            { label: '8', text: '*The number of applicants (has / have) doubled.* → **has**.' },
            { label: '9', text: '*Twenty minutes (is / are) not enough.* → **is**: one period of time.' },
            { label: '10', text: '*The teacher, together with her pupils, (was / were) at the museum.* → **was**: *together with* does not make a plural subject.' },
            { label: '11', text: '*Most of the furniture (is / are) new.* → **is**: *furniture* is uncountable.' },
            { label: '12', text: 'Correct it: *One of my friends live in Seoul.* → **One of my friends lives in Seoul.** The subject is *one*.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Huddleston, R., & Pullum, G. K. (2002). *The Cambridge Grammar of the English Language*. Cambridge University Press.',
    'Merriam-Webster’s *Dictionary of English Usage* (1994), entry on *none*.',
  ],
  related: ['grammar/sentences/subject-predicate-object', 'grammar/parts-of-speech/nouns', 'grammar/parts-of-speech/pronouns', 'grammar/usage/pronoun-reference-and-agreement', 'grammar/usage/countable-fewer-less-much-many', 'grammar/verbs/present-tenses'],
}

export default guide
