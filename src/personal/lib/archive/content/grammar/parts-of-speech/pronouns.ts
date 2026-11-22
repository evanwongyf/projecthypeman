import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **pronoun** stands in for a noun so you do not have to keep repeating it. Instead of “Maya said Maya would bring Maya’s laptop”, you write “Maya said **she** would bring **her** laptop”. Pronouns are a small, closed set of words, but they cause a large share of real errors, especially *I* versus *me*.',
  nutshell: [
    'A pronoun replaces a noun (its **antecedent**): *Maya* → *she*, *the books* → *them*.',
    'Personal pronouns change form by job: **subject** (*I, he, they*) before the verb, **object** (*me, him, them*) after verbs and prepositions.',
    'The **take-the-other-person-out test** settles *I* or *me*: “Sam and *me* went” → “*me* went”? No: **Sam and I went**.',
    'Possessive pronouns never take an apostrophe: *hers*, *its*, *ours*, *yours*, *theirs*.',
    'Reflexives (*myself*, *themselves*) are for when subject and object are the same person, or for emphasis, not as a polite *me*.',
    '*They* can refer to one person whose gender is unknown or not binary; this use goes back centuries.',
  ],
  sections: [
    {
      id: 'personal',
      title: 'Personal pronouns: subject and object',
      blocks: [
        {
          t: 'table',
          head: ['Person', 'Subject', 'Object', 'Possessive determiner', 'Possessive pronoun', 'Reflexive'],
          rows: [
            ['1st singular', 'I', 'me', 'my', 'mine', 'myself'],
            ['2nd singular', 'you', 'you', 'your', 'yours', 'yourself'],
            ['3rd singular (male)', 'he', 'him', 'his', 'his', 'himself'],
            ['3rd singular (female)', 'she', 'her', 'her', 'hers', 'herself'],
            ['3rd singular (thing)', 'it', 'it', 'its', '(rare)', 'itself'],
            ['3rd singular (unknown or non-binary)', 'they', 'them', 'their', 'theirs', 'themself / themselves'],
            ['1st plural', 'we', 'us', 'our', 'ours', 'ourselves'],
            ['2nd plural', 'you', 'you', 'your', 'yours', 'yourselves'],
            ['3rd plural', 'they', 'them', 'their', 'theirs', 'themselves'],
          ],
          caption: 'Possessive determiners come before a noun (*my* bag); possessive pronouns stand alone (the bag is *mine*).',
        },
        {
          t: 'example',
          title: 'Subject versus object in action',
          lines: [
            { label: 'Subject', text: '**She** called. **We** left early. **They** won. **I** agree. **He** is late.' },
            { label: 'Object of a verb', text: 'Call **her**. The teacher praised **us**. I saw **them**. Tell **me**. Ask **him**.' },
            { label: 'Object of a preposition', text: 'with **me**, for **him**, between **us**, to **them**, about **her**, without **you**.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Spot the pair', body: '“My sister and (I / me) went to the cinema.”' },
            { title: 'Remove the other person', body: '“(I / me) went to the cinema.” Only *I* works.' },
            { title: 'Put them back', body: '“My sister and **I** went to the cinema.”' },
            { title: 'Try an object case', body: '“The film scared my sister and (I / me).” → “The film scared **me**.” So: “scared my sister and **me**.”' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Between you and me',
          text: '*Between* is a preposition, so it takes object pronouns: **between you and me**, never *between you and I*. The same goes for *for you and me*, *with Sam and me*, *to my friends and me*. People often over-correct to *I* because they were told off for “me and Sam went”, but *I* is only right as a subject.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Comparisons with than and as',
          text: '“She is taller than **I**” is formal and treats the sentence as “taller than I *am*”. “She is taller than **me**” is normal in everyday English. Sometimes the choice changes the meaning: “I like her more than **he**” (more than he likes her) versus “I like her more than **him**” (more than I like him). Adding the verb removes all doubt: “than he does”.',
        },
      ],
    },
    {
      id: 'other-types',
      title: 'The other kinds of pronoun',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Job', 'Examples in sentences'],
          rows: [
            ['Possessive', 'Shows ownership, standing alone', 'That seat is **mine**. Is this **yours**? The idea was **hers**. The house is **theirs**. **Ours** is the blue one. The fault is **his**. Which is **yours**? The decision was **ours**.'],
            ['Reflexive', 'Object is the same person as the subject', 'I cut **myself**. She taught **herself** Spanish. They enjoyed **themselves**. We blamed **ourselves**. The cat washed **itself**. Help **yourself**. He introduced **himself**. You should be proud of **yourselves**.'],
            ['Intensive (emphatic)', 'Same form as reflexive, adds emphasis; can be removed', 'I made it **myself**. The head teacher **herself** came. They built the shed **themselves**. You said so **yourself**. The Queen **herself** visited. We painted it **ourselves**. The author **himself** replied. Did you write this **yourself**?'],
            ['Demonstrative', 'Points at something', '**This** is mine. **That** was close. **These** are fresh. **Those** belong to Sam. I don’t like **this**. **That**’s the one. Take **these**. Are **those** yours?'],
            ['Relative', 'Starts a relative clause about a noun', 'the girl **who** won, the book **which** I read, the film **that** we saw, the man **whose** car broke down, the person **whom** I asked, the place **where** we met (relative adverb), the day **when** it snowed (relative adverb), everything **that** matters'],
            ['Interrogative', 'Asks a question', '**Who** called? **What** happened? **Which** is better? **Whose** is this? **Whom** did you invite? **What** do you want? **Who** is next? **Which** did she choose?'],
            ['Indefinite', 'Refers to people or things in general', '**Someone** knocked. **Everyone** agreed. **Nobody** came. **Anything** is possible. **Each** has a role. **Both** were late. **Many** tried. **None** of them knew. **Something** is wrong. **All** is well.'],
            ['Reciprocal', 'Two-way action between people', 'They helped **each other**. We respect **one another**. The two teams congratulated **each other**. The pupils interviewed **one another**. Sam and Priya text **each other** daily. The neighbours ignore **each other**. They kept **each other** awake. Friends support **one another**.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Pronoun or determiner?',
          text: 'Many words are pronouns when they stand alone and **determiners** when they come before a noun. “**This** is good” (pronoun) versus “**This** book is good” (determiner). “**Some** arrived” versus “**Some** guests arrived”. The same applies to *that, these, those, each, all, both, many, which, whose*. See [Determiners and articles](@grammar/parts-of-speech/determiners-and-articles).',
        },
        {
          t: 'p',
          text: 'Choosing between *who*, *whom*, *that* and *which* has its own guide: [Who, whom, that, which, whose](@grammar/usage/who-whom-that-which). The short version: *who* for people as subjects, *whom* for people as objects (formal), *which* for things, and *that* for either in a defining clause.',
        },
      ],
    },
    {
      id: 'tricky',
      title: 'Tricky cases',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Its or it’s', def: '*Its* is possessive (the dog wagged **its** tail). *It’s* means *it is* or *it has* (**it’s** raining; **it’s** been ages). Test: if *it is* fits, use the apostrophe.' },
            { term: 'Their, there, they’re', def: '*Their* = belonging to them; *there* = a place or “there is”; *they’re* = they are. “**They’re** leaving **their** bags over **there**.”' },
            { term: 'Whose or who’s', def: '*Whose* = belonging to whom (**whose** coat is this?); *who’s* = who is or who has (**who’s** coming?).' },
            { term: 'Your or you’re', def: '*Your* = belonging to you; *you’re* = you are. “**You’re** going to need **your** coat.”' },
            { term: 'Singular they', def: '“Someone left **their** umbrella. I hope **they** come back for it.” Used for an unknown person, or for a person who uses *they*. Standard in modern British and American style guides.' },
            { term: 'Indefinites and agreement', def: '*Everyone*, *each*, *nobody* and *someone* take a singular verb: “Everyone **is** here.” But they are often followed by *their*: “Everyone brought **their** lunch.”' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Unclear antecedents',
          text: '“When Sam met Leo, **he** was nervous.” Who was nervous? A pronoun must point clearly at one noun. Fix it by naming: “Sam was nervous when he met Leo.” See [Pronoun reference and agreement](@grammar/usage/pronoun-reference-and-agreement).',
        },
      ],
    },
    {
      id: 'errors',
      title: 'Common errors with corrections',
      blocks: [
        {
          t: 'table',
          head: ['Wrong', 'Right', 'Why'],
          rows: [
            ['Me and Sam went to the park.', '**Sam and I** went to the park.', 'Subject position needs *I*; putting yourself last is the polite convention.'],
            ['Please send the file to Priya or I.', 'Please send the file to Priya or **me**.', 'After *to* (a preposition) use the object form.'],
            ['Please contact myself with questions.', 'Please contact **me** with questions.', 'A reflexive needs the same person as the subject earlier in the clause.'],
            ['Him and his brother are twins.', '**He** and his brother are twins.', 'Subject form: *He is a twin*, not *Him is*.'],
            ['The committee made it’s decision.', 'The committee made **its** decision.', 'Possessive *its* has no apostrophe.'],
            ['Is this pen your’s?', 'Is this pen **yours**?', 'No possessive pronoun takes an apostrophe.'],
            ['They done it theirselves.', 'They did it **themselves**.', '*Theirselves* and *hisself* are non-standard.'],
            ['Us students want a longer break.', '**We** students want a longer break.', 'Remove *students*: “We want” not “Us want”.'],
            ['The teacher gave we a test.', 'The teacher gave **us** a test.', 'Object position needs *us*.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Test *I/me*, *we/us*, *he/him* by removing the other person or the noun.',
            'Use the reflexive when the same person is subject and object: *She prepared herself*.',
            'Rewrite any sentence where *he*, *she*, *it* or *they* could point at two nouns.',
          ],
          dont: [
            'Use *myself* because *me* feels too blunt.',
            'Write *it’s*, *your’s*, *her’s* or *their’s* for possession.',
            'Start a long paragraph with *this* or *it* when the reader cannot tell what it refers to.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick',
          text: '**His** and **hers** never take apostrophes, and nor do **its**, **ours**, **yours** or **theirs**. If *his* does not need one, none of its family do.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Choose or correct, then read the reason.',
      blocks: [
        {
          t: 'example',
          title: 'Ten questions with answers',
          lines: [
            { label: 'Q1', text: '“The coach picked Ravi and (I / me) for the team.”' },
            { label: 'A1', text: '**me**. Remove Ravi: “picked me”. It is the object of *picked*.' },
            { label: 'Q2', text: '“(We / Us) Year 10s have exams next week.”' },
            { label: 'A2', text: '**We**. Remove *Year 10s*: “We have exams”.' },
            { label: 'Q3', text: '“The company changed (its / it’s) logo.”' },
            { label: 'A3', text: '**its**. Possessive; “it is logo” makes no sense.' },
            { label: 'Q4', text: 'Correct: “If you have questions, ask John or myself.”' },
            { label: 'A4', text: '“ask John or **me**.” The subject is *you*, so *myself* has nothing to reflect.' },
            { label: 'Q5', text: 'Name the type of pronoun in bold: “**Nobody** knew the answer.”' },
            { label: 'A5', text: 'Indefinite: it refers to no particular person.' },
            { label: 'Q6', text: '“(Who / Whose) bag is this?”' },
            { label: 'A6', text: '**Whose**: asks who owns it. *Who’s* would mean “who is”.' },
            { label: 'Q7', text: 'Is *themselves* reflexive or intensive in “They wrote the play themselves”?' },
            { label: 'A7', text: 'Intensive: remove it and the sentence still works (“They wrote the play”); it only adds emphasis.' },
            { label: 'Q8', text: 'Fix the ambiguity: “Mum told Aunt Jo that she had won.”' },
            { label: 'A8', text: 'For example: “Mum said to Aunt Jo, ‘You have won.’” or “Mum told Aunt Jo that Mum had won.” Name the person so *she* cannot point both ways.' },
            { label: 'Q9', text: '“A student left (his / their) phone in the hall.” Which is acceptable?' },
            { label: 'A9', text: '**their** is the usual modern choice when the student is unknown. *his or her* is also correct but clumsy if repeated.' },
            { label: 'Q10', text: '“That decision was (their’s / theirs).”' },
            { label: 'A10', text: '**theirs**. Possessive pronouns never have apostrophes.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on personal pronouns, reflexives and *they*.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapter on pronouns and case.',
    'Merriam-Webster and the *Chicago Manual of Style* (17th ed., 2017) both discuss and accept singular *they* in many contexts.',
  ],
  related: [
    'grammar/parts-of-speech/nouns',
    'grammar/parts-of-speech/determiners-and-articles',
    'grammar/usage/who-whom-that-which',
    'grammar/usage/pronoun-reference-and-agreement',
    'grammar/punctuation/apostrophes',
  ],
}

export default guide
