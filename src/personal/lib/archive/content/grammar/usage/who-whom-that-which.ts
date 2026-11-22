import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Relative pronouns (*who*, *whom*, *whose*, *which*, *that*) join a describing clause to a noun: *the girl **who** won*, *the book **that** I lent you*. Choosing between them comes down to three questions: is it a person or a thing, is the pronoun a subject or an object, and is the clause essential or extra?',
  nutshell: [
    '**Who** is a subject (like *he*); **whom** is an object (like *him*). Test it by answering the question or rearranging the clause with *he/him*.',
    '**Whose** shows possession for people and things alike: *the author whose book*, *the car whose engine*.',
    'A **restrictive** clause identifies which one you mean and takes no commas. A **non-restrictive** clause adds extra information and is fenced off by commas.',
    '**That** introduces restrictive clauses only, never after a comma. **Which** introduces non-restrictive clauses, and in British English restrictive ones too.',
    'In everyday speech *who* has largely replaced *whom*; keep *whom* for formal writing and straight after a preposition (*to whom*, *with whom*).',
  ],
  sections: [
    {
      id: 'map',
      title: 'The relative pronouns at a glance',
      blocks: [
        {
          t: 'table',
          head: ['Word', 'Refers to', 'Job in its clause', 'Example'],
          rows: [
            ['who', 'people (and named animals)', 'subject', 'The nurse **who** treated me was kind.'],
            ['whom', 'people', 'object, or after a preposition', 'The nurse **whom** I thanked smiled. The nurse **to whom** I spoke.'],
            ['whose', 'people and things', 'possessive', 'The student **whose** essay won. A house **whose** roof leaks.'],
            ['which', 'things, animals, ideas, whole clauses', 'subject or object', 'The bus, **which** was late, was packed.'],
            ['that', 'things and people', 'subject or object, restrictive only', 'The bus **that** goes to the zoo is the 138.'],
            ['where / when / why', 'places, times, reasons', 'relative adverbs', 'The café **where** we met. The day **when** it snowed. The reason **why** I left.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Is *that* allowed for people?',
          text: 'Yes. *The man that sold me the car* is standard English and has been for centuries. Many style guides prefer *who* for people in formal writing, so *the man who sold me the car* is the safer exam choice.',
        },
      ],
    },
    {
      id: 'who-whom',
      title: 'Who or whom: the he/him test',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Isolate the clause', body: 'Find the clause the pronoun belongs to: *the man [who/whom] I met yesterday*.' },
            { title: 'Rearrange it as a statement', body: 'Rewrite the clause in normal order with *he* or *him*: *I met him yesterday*.' },
            { title: 'Match the ending', body: '*Him* and *whom* both end in **m**, so *him* means *whom*. *He* means *who*.' },
            { title: 'For questions, answer them', body: '*(Who/Whom) called?* answers as *He called*: *who*. *(Who/Whom) did you call?* answers as *I called him*: *whom*.' },
          ],
        },
        {
          t: 'example',
          title: 'Running the test',
          lines: [
            { label: 'Sentence', text: 'The candidate (who / whom) the panel chose was very young.' },
            { label: 'Clause', text: 'the panel chose (him)' },
            { label: 'Answer', text: '**whom**: the pronoun is the object of *chose*.' },
            { label: 'Sentence', text: 'The candidate (who / whom) impressed the panel was very young.' },
            { label: 'Clause', text: '(he) impressed the panel' },
            { label: 'Answer', text: '**who**: the pronoun is the subject of *impressed*.' },
          ],
        },
        {
          t: 'example',
          title: 'The trap: an interrupting clause',
          lines: [
            { label: 'Sentence', text: 'She is the student (who / whom) I think will win.' },
            { label: 'Remove the interrupter', text: 'She is the student (who / whom) … will win. (*I think* is just inserted.)' },
            { label: 'Test', text: '*He will win*, not *him will win*.' },
            { label: 'Answer', text: '**who**. *Whom I think will win* is a common hypercorrection.' },
          ],
        },
        {
          t: 'table',
          head: ['Sentence', 'Correct form', 'Why'],
          caption: 'Whoever and whomever follow the same test, inside their own clause',
          rows: [
            ['Give the prize to (whoever / whomever) finishes first.', 'whoever', 'The clause is *[he] finishes first*. The *to* governs the whole clause, not the pronoun.'],
            ['Invite (whoever / whomever) you like.', 'whomever (or *whoever* informally)', '*You like him*: the pronoun is the object of *like*.'],
            ['(Whoever / Whomever) wrote this should be proud.', 'whoever', '*He wrote this*.'],
            ['To (who / whom) should I address the letter?', 'whom', 'Directly after a preposition, always *whom*.'],
            ['(Who / Whom) do you think is responsible?', 'who', '*You think he is responsible*: *who* is the subject of *is*.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Register decides how strict to be',
          text: 'In conversation, *Who did you invite?* and *the person who I spoke to* are normal and accepted by modern usage guides. In formal essays, cover letters and exams, write *Whom did you invite?* and *the person to whom I spoke*. Wrong-way *whom* (*whom is coming?*) sounds worse than informal *who*, so when in real doubt, *who* is the safer error.',
        },
      ],
    },
    {
      id: 'restrictive',
      title: 'Restrictive and non-restrictive clauses',
      lead: 'The commas are not decoration: they change the meaning.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Restrictive (defining)', tag: 'no commas', body: 'Tells you *which one*. Remove it and the sentence loses its point. *Students **who** finish early may leave.* (Only those students.)' },
            { title: 'Non-restrictive (non-defining)', tag: 'commas', body: 'Adds extra information about something already identified. Remove it and the core meaning survives. *My mother, **who** finishes work at five, will collect us.*' },
          ],
        },
        {
          t: 'example',
          title: 'Same words, different meaning',
          lines: [
            { label: 'Restrictive', text: 'The students who had revised passed the test. (Some revised; only those passed.)' },
            { label: 'Non-restrictive', text: 'The students, who had revised, passed the test. (All the students revised, and all passed.)' },
            { label: 'Restrictive', text: 'My brother who lives in Perth is a teacher. (I have more than one brother; I mean the Perth one.)' },
            { label: 'Non-restrictive', text: 'My brother, who lives in Perth, is a teacher. (I have one brother; by the way, he lives in Perth.)' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Put commas on **both** sides of a non-restrictive clause in mid-sentence: *Mount Faber, which overlooks the harbour, is popular at sunset.*',
            'Use non-restrictive clauses after proper nouns and unique things: *the Sun, which is a star*.',
            'Read the sentence without the clause to check: if it still identifies the noun, use commas.',
          ],
          dont: [
            'Leave off the closing comma: *Mount Faber, which overlooks the harbour is popular.*',
            'Put commas round an identifying clause: *Students, who cheat, will be disqualified* (this says all students cheat).',
            'Write *that* after a comma: *My car, that is red, …*',
          ],
        },
      ],
    },
    {
      id: 'that-which',
      title: 'That or which',
      blocks: [
        {
          t: 'table',
          head: ['Clause type', 'American usage (most style guides)', 'British usage', 'Example'],
          rows: [
            ['Restrictive', '*that* (strongly preferred)', '*that* or *which*, both accepted', 'The phone **that/which** I bought last week has broken.'],
            ['Non-restrictive', '*which*, with commas', '*which*, with commas', 'My phone, **which** I bought last week, has broken.'],
            ['After a preposition', '*which* only', '*which* only', 'The drawer **in which** I keep it. (Not *in that*.)'],
            ['After *all, everything, nothing, anything, only, superlatives*', '*that* is usual', '*that* is usual', 'Everything **that** glitters. The best film **that** I have seen.'],
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"Which can never be restrictive"',
          text: 'This is a style preference popularised in American editing, not a rule of English. British writers and many classic authors use restrictive *which* freely (*the house which Jack built*). Choose one approach and be consistent; in American publications, follow *that* for restrictive clauses.',
        },
        {
          t: 'example',
          title: 'When which refers to a whole clause',
          lines: [
            { label: 'Sentence', text: 'He passed every exam, **which** surprised his teachers.' },
            { label: 'Meaning', text: '*Which* refers to the whole fact of passing, not to *exam*.' },
            { label: 'Ambiguous', text: 'She told her manager about the error, which was embarrassing.' },
            { label: 'Clearer', text: 'She told her manager about the error, and the conversation was embarrassing. / She told her manager about the embarrassing error.' },
          ],
        },
      ],
    },
    {
      id: 'whose-and-omitting',
      title: 'Whose, of which, and leaving the pronoun out',
      blocks: [
        {
          t: 'list',
          items: [
            '**Whose** works for things: *a company whose profits fell*. The alternative *a company the profits of which fell* is correct but stiff.',
            '**Whose** is not *who’s*: *Who’s* (who is/has) *the singer whose voice we heard?*',
            'You may drop an **object** relative pronoun in a restrictive clause: *the film (that) we watched*, *the woman (whom) I met*.',
            'You may not drop a **subject** relative pronoun in standard English: *the film that won* cannot become *the film won*.',
            'You never drop the pronoun in a non-restrictive clause: *My uncle, whom you met, …* keeps *whom*.',
          ],
        },
        {
          t: 'table',
          head: ['Faulty', 'Fixed', 'Problem'],
          rows: [
            ['The teacher which marked my paper.', 'The teacher **who** marked my paper.', '*Which* is not used for people.'],
            ['The boy who’s bike was stolen.', 'The boy **whose** bike was stolen.', 'Possessive, not *who is*.'],
            ['This is the place that I grew up.', 'This is the place **where** I grew up. / … the place (that) I grew up **in**.', 'A place needs *where*, or a preposition to finish the clause.'],
            ['The novel, that won the prize, is long.', 'The novel, **which** won the prize, is long.', '*That* cannot follow a comma.'],
            ['Whom shall I say is calling?', '**Who** shall I say is calling?', '*Who* is the subject of *is calling*.'],
            ['The singer who I admire her voice.', 'The singer **whose** voice I admire.', 'Doubled pronoun (*who … her*); use *whose*.'],
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set with answers',
      blocks: [
        {
          t: 'example',
          title: 'Choose, punctuate or correct',
          lines: [
            { label: 'Q1', text: 'The athlete (who / whom) won gold trains in Bishan.' },
            { label: 'A1', text: '**who**: *she won gold*, a subject.' },
            { label: 'Q2', text: 'The athlete (who / whom) the coach selected was only sixteen.' },
            { label: 'A2', text: '**whom**: *the coach selected her*, an object (informally *who* is also heard).' },
            { label: 'Q3', text: 'With (who / whom) did you travel?' },
            { label: 'A3', text: '**whom**: directly after a preposition.' },
            { label: 'Q4', text: 'Add commas if needed: *Changi Airport which opened in 1981 serves flights to cities around the world.*' },
            { label: 'A4', text: '*Changi Airport, which opened in 1981, serves …* The name already identifies the airport, so the clause is extra information.' },
            { label: 'Q5', text: 'Add commas if needed: *Candidates who arrive late will not be admitted.*' },
            { label: 'A5', text: 'No commas: the clause identifies which candidates.' },
            { label: 'Q6', text: 'Correct it: *The scientist, that discovered penicillin, was Alexander Fleming.*' },
            { label: 'A6', text: '*The scientist who discovered penicillin was Alexander Fleming.* The clause identifies the scientist, so no commas, and *who* suits a person.' },
            { label: 'Q7', text: 'Give the prize to (whoever / whomever) scores highest.' },
            { label: 'A7', text: '**whoever**: it is the subject of *scores*.' },
            { label: 'Q8', text: 'Fill the gap: *That is the man ___ car was towed.*' },
            { label: 'A8', text: '**whose**: possession.' },
            { label: 'Q9', text: 'Can the pronoun be left out? *The book that I borrowed is overdue.* / *The book that fell off the shelf is mine.*' },
            { label: 'A9', text: 'First: yes (*the book I borrowed*), it is an object. Second: no, *that* is the subject of *fell*.' },
            { label: 'Q10', text: 'Who or whom: *(Who / Whom) do you believe is telling the truth?*' },
            { label: 'A10', text: '**Who**: remove *do you believe* and you have *[he] is telling the truth*.' },
            { label: 'Q11', text: 'Explain the difference: *My sister who works in Seoul is visiting.* / *My sister, who works in Seoul, is visiting.*' },
            { label: 'A11', text: 'Without commas, I have more than one sister and mean the one in Seoul. With commas, I have one sister and am adding where she works.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/parts-of-speech/pronouns', note: 'Subject and object pronouns in general' },
            { path: 'grammar/sentences/phrases-and-clauses', note: 'Relative clauses as dependent clauses' },
            { path: 'grammar/punctuation/commas', note: 'The commas around non-restrictive clauses' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press, entries on relative clauses and who/whom.',
    'Huddleston, R., & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press.',
    'Garner, B. A. (2022). *Garner’s Modern English Usage* (5th ed.). Oxford University Press, entries on that/which and who/whom.',
  ],
  related: [
    'grammar/parts-of-speech/pronouns',
    'grammar/sentences/phrases-and-clauses',
    'grammar/punctuation/commas',
    'grammar/usage/pronoun-reference-and-agreement',
  ],
}

export default guide
