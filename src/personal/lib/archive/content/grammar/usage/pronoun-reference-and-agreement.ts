import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A pronoun is a shortcut: *she*, *it*, *they* and *this* stand in for a noun the reader already knows, called the **antecedent**. The shortcut only works if the reader can tell at once which noun it points to, and if the pronoun matches that noun in number and person.',
  nutshell: [
    'Every pronoun should point at **one clear antecedent**. If two nouns could fit, repeat the noun or restructure.',
    'Do not let *this*, *that*, *which* or *it* point at a whole vague idea: add a noun (*this result*, *this delay*).',
    '*They* with no antecedent (*They say exams are easier now*) is fine in speech but vague in essays: name who.',
    '**Agreement**: singular antecedents take singular pronouns, plural take plural. *Each*, *everyone*, *either*, *neither* are grammatically singular.',
    '**Singular they** for a person of unknown or unspecified gender (*Someone left their umbrella*) is long established and accepted by major style guides.',
  ],
  sections: [
    {
      id: 'antecedent',
      title: 'Finding the antecedent',
      blocks: [
        {
          t: 'example',
          title: 'Pronouns and what they point at',
          lines: [
            { text: '**Priya** forgot **her** calculator, so **she** borrowed **mine**. (her, she → Priya; mine → my calculator)' },
            { text: 'The **students** handed in **their** projects. (their → students)' },
            { text: 'When **it** opened in 1981, **Changi Airport** had one terminal. (it → Changi Airport, an antecedent that comes after the pronoun; fine if it follows quickly)' },
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Antecedent', def: 'The noun or noun phrase a pronoun refers back to (or, occasionally, forward to).' },
            { term: 'Reference', def: 'The link between a pronoun and its antecedent. It can be clear, ambiguous, vague or missing.' },
            { term: 'Agreement', def: 'Matching the pronoun to its antecedent in number (singular/plural), person (I/you/he) and, where relevant, gender.' },
          ],
        },
      ],
    },
    {
      id: 'ambiguous',
      title: 'Ambiguous reference: two possible antecedents',
      blocks: [
        {
          t: 'table',
          head: ['Ambiguous', 'Why', 'Clear'],
          rows: [
            ['When Mei met Lin, she was nervous.', 'Who was nervous?', 'Mei was nervous when she met Lin. / When Mei met Lin, Lin was nervous.'],
            ['The teacher told Sarah that her essay was late.', 'Whose essay: the teacher’s or Sarah’s?', 'The teacher told Sarah, “Your essay is late.”'],
            ['Take the laptop out of the bag and clean it.', 'Clean the laptop or the bag?', 'Take the laptop out of the bag and clean the bag.'],
            ['Arjun told his father that he had crashed the car.', 'Who crashed it?', 'Arjun admitted to his father that he had crashed the car. / Arjun told his father, “You crashed the car.”'],
            ['The council rejected the developers’ plan because they thought it was too expensive.', '*They* could be the council or the developers.', 'The council rejected the plan because its members thought it too expensive.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Three repairs', text: '(1) Repeat the noun. (2) Rearrange so the intended antecedent is the nearest suitable noun or the subject. (3) Switch to direct speech, which forces *you* and *I* to do the pointing.' },
      ],
    },
    {
      id: 'vague',
      title: 'Vague and missing antecedents',
      blocks: [
        {
          t: 'table',
          head: ['Vague', 'Problem', 'Better'],
          rows: [
            ['Prices rose and wages fell. **This** worried economists.', '*This* = which fact? Both?', '**This combination** worried economists.'],
            ['She skipped revision, **which** was a mistake.', 'Usually understood, but *which* points at a whole clause.', 'She skipped revision, **a decision she regretted**.'],
            ['**They** say that sleep improves memory.', 'Who are *they*?', '**Sleep researchers** report that sleep improves memory.'],
            ['**It** says in the textbook that mitochondria produce energy.', '*It* has no antecedent.', '**The textbook says** that mitochondria produce energy.'],
            ['In **Orwell’s** novel, **he** describes a surveillance state.', '*He* points at a possessive (*Orwell’s*), not a noun phrase that can act.', 'In **his** novel *1984*, **Orwell** describes a surveillance state.'],
            ['I want to be a doctor because **it** helps people.', '*It* has no noun to point at (*doctor* is a person, *medicine* is not mentioned).', 'I want to be a doctor because **medicine** helps people.'],
            ['At the clinic, **they** told me to rest.', 'Acceptable in conversation; vague in a report.', '**The doctor** told me to rest.'],
          ],
        },
        {
          t: 'dodont',
          do: ['Follow *this* or *that* with a summarising noun in essays: *this trend*, *that argument*, *this finding*.', 'Name the source: *the article argues*, *the government announced*.'],
          dont: ['Begin a paragraph with a bare *This*, pointing back at the whole previous paragraph.', 'Use *it* or *they* for something only implied, never named.'],
        },
      ],
    },
    {
      id: 'agreement',
      title: 'Agreement in number',
      blocks: [
        {
          t: 'table',
          head: ['Antecedent', 'Number', 'Example'],
          rows: [
            ['each, every, either, neither, everyone, someone, anybody, nobody', 'singular (for verb); pronoun singular *he or she* or singular *they*', '**Everyone** has brought **their** lunch. **Each** of the boys has **his** own locker.'],
            ['both, few, many, several, others', 'plural', '**Both** players kept **their** places.'],
            ['some, all, most, none, any', 'depends on the noun after *of*', '**Some** of the cake has lost **its** icing. **Some** of the students lost **their** notes.'],
            ['A and B', 'plural', '**Ahmad and Ben** packed **their** bags.'],
            ['A or B / neither A nor B', 'agrees with the nearer one', 'Neither the manager nor **the staff** showed **their** faces. Neither the staff nor **the manager** showed **his** face.'],
            ['collective noun as one unit', 'singular', 'The **committee** has published **its** report.'],
            ['collective noun as individuals (common in British English)', 'plural', 'The **team** are arguing among **themselves**.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Stay consistent with collective nouns',
          text: 'Pick singular or plural and hold it: *The company has announced **its** results; **it** expects growth.* Not *The company has announced **their** results; **it** expects growth.* British English allows plural collectives, but mixing the two in one sentence reads as an error everywhere.',
        },
        {
          t: 'example',
          title: 'Neither … nor with mixed numbers',
          lines: [
            { label: 'Awkward', text: 'Neither the students nor the teacher remembered his umbrella.' },
            { label: 'Better', text: 'Neither the teacher nor **the students** remembered **their** umbrellas. (Put the plural second.)' },
          ],
        },
      ],
    },
    {
      id: 'singular-they',
      title: 'Singular they',
      blocks: [
        {
          t: 'p',
          text: 'English has used *they*, *them* and *their* for a single person since at least the 14th century, and writers from Shakespeare to Jane Austen used it. The older school rule that demanded *he* for everyone, or the clumsy *he or she*, has given way: *APA style* (7th edition) and the *Chicago Manual of Style* both now accept singular *they*, and dictionaries record it as standard.',
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Unknown person', body: '*Somebody left **their** phone on the bus.* The natural choice in every register.' },
            { title: 'General statement', body: '*A student should check **their** timetable.* Or recast in the plural: *Students should check **their** timetables.*' },
            { title: 'A named person', body: 'Use *they* for a specific person who uses it: *Alex said **they** would be late.* The verb stays plural: *they **are**, they **were***.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'If an examiner or editor objects', text: 'A plural rewrite avoids the question entirely: *Each applicant must submit their form* becomes *Applicants must submit their forms*. Note that *themself* is used by some for a named non-binary individual, while *themselves* remains the usual form otherwise.' },
      ],
    },
    {
      id: 'person-and-case',
      title: 'Agreement in person, and pronoun case',
      blocks: [
        {
          t: 'example',
          title: 'Do not shift person mid-sentence',
          lines: [
            { label: 'Shift', text: 'When **one** revises late at night, **you** forget more.' },
            { label: 'Fixed', text: 'When **you** revise late at night, **you** forget more. / When **one** revises late at night, **one** forgets more. (very formal)' },
            { label: 'Shift', text: '**Students** should bring a pen, or **you** will lose marks.' },
            { label: 'Fixed', text: '**Students** should bring a pen, or **they** will lose marks.' },
          ],
        },
        {
          t: 'table',
          head: ['Sentence', 'Right form', 'Test'],
          caption: 'Case: subject (I, he, she, we, they) versus object (me, him, her, us, them)',
          rows: [
            ['Wei Ling and (I / me) went to the library.', 'I', 'Remove *Wei Ling and*: *I went*.'],
            ['The coach praised Hana and (I / me).', 'me', '*The coach praised me*.'],
            ['Between you and (I / me), it was a disaster.', 'me', 'After a preposition, object form.'],
            ['(We / Us) students deserve a break.', 'We', 'Remove *students*: *We deserve*.'],
            ['She is taller than (I / me).', 'I (formal) or me (informal)', 'Finish it: *than I am*.'],
            ['Please contact Raj or (myself / me).', 'me', '*Myself* is reflexive: use it only when the subject is also *I* (*I hurt myself*).'],
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
          title: 'Fix the reference or agreement',
          lines: [
            { label: 'Q1', text: '*When Daniel phoned his brother, he was upset.*' },
            { label: 'A1', text: 'Ambiguous *he*. *Daniel was upset when he phoned his brother.*' },
            { label: 'Q2', text: '*Every student must bring (his or her / their) own lab coat.*' },
            { label: 'A2', text: 'Both are acceptable; **their** is now the more natural and widely accepted choice.' },
            { label: 'Q3', text: '*The company increased their profits, and it now plans to expand.*' },
            { label: 'A3', text: 'Inconsistent: *The company increased **its** profits, and **it** now plans to expand.*' },
            { label: 'Q4', text: '*It says on the website that the museum closes at six.*' },
            { label: 'A4', text: '*The website says that the museum closes at six.*' },
            { label: 'Q5', text: '*In Lee Kuan Yew’s memoir, he describes Singapore’s early years.*' },
            { label: 'A5', text: '*In his memoir, Lee Kuan Yew describes Singapore’s early years.* The pronoun cannot point at a possessive.' },
            { label: 'Q6', text: '*Neither Farah nor her sisters forgot (her / their) homework.*' },
            { label: 'A6', text: '**their**: agrees with the nearer antecedent, *sisters*.' },
            { label: 'Q7', text: '*The government cut fuel subsidies and raised taxes. This angered voters.* How could it be clearer?' },
            { label: 'A7', text: '*These two measures angered voters* (or name the one you mean: *The tax rise angered voters*).' },
            { label: 'Q8', text: '*If a person wants to succeed, you have to work hard.*' },
            { label: 'A8', text: 'Shift in person. *If you want to succeed, you have to work hard* / *People who want to succeed have to work hard.*' },
            { label: 'Q9', text: '*The manager asked Ken and myself to stay late.*' },
            { label: 'A9', text: '*Ken and **me***: object position, and no reflexive is needed.' },
            { label: 'Q10', text: '*Put the cake on the plate and cover it.* Is *it* clear?' },
            { label: 'A10', text: 'Probably the cake, but it could be the plate. *Put the cake on the plate and cover the cake.*' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/parts-of-speech/pronouns', note: 'Every kind of pronoun, and I versus me' },
            { path: 'grammar/verbs/subject-verb-agreement', note: 'Verb agreement with the same tricky subjects' },
            { path: 'grammar/usage/who-whom-that-which', note: 'Relative pronouns' },
          ],
        },
      ],
    },
  ],
  sources: [
    'American Psychological Association (2020). *Publication Manual of the American Psychological Association* (7th ed.), section on singular they.',
    'Baron, D. (2020). *What’s Your Pronoun? Beyond He and She*. Liveright.',
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press, entries on personal pronouns and they.',
    'Merriam-Webster (2019), entry and usage note on *they*.',
  ],
  related: [
    'grammar/parts-of-speech/pronouns',
    'grammar/verbs/subject-verb-agreement',
    'grammar/usage/who-whom-that-which',
    'grammar/usage/modifiers-and-parallelism',
  ],
}

export default guide
