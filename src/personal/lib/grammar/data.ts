/**
 * Data for the grammar labs.
 *
 * Every sentence here is analysed twice, as a constituency tree and as a set of
 * dependency arcs, so the two frameworks can be shown side by side on the same
 * words. That comparison is the point: a grammar is a model of a sentence, not
 * the sentence itself, and seeing one sentence drawn two defensible ways is
 * what makes that land.
 *
 * Labels follow the usual conventions: Penn-style phrase labels for the trees
 * and Universal Dependencies relation names for the arcs.
 */

// ---------------------------------------------------------------- constituency

/** A node in a phrase structure tree. A leaf carries `word`; a phrase carries `kids`. */
export type TreeNode = {
  label: string
  word?: string
  kids?: TreeNode[]
}

export type ConstituencyTest = {
  name: string
  /** What the test does to the string, in plain words. */
  how: string
  /** The sentence after the test is applied. */
  result: string
  passes: boolean
  /** Why the result settles the question. */
  note: string
}

export type TreeSentence = {
  id: string
  text: string
  note: string
  tree: TreeNode
  /** A second reading, where the sentence is structurally ambiguous. */
  alt?: { tree: TreeNode; reading: string }
  altReading?: string
  tests?: ConstituencyTest[]
}

const leaf = (label: string, word: string): TreeNode => ({ label, word })

export const TREE_SENTENCES: TreeSentence[] = [
  {
    id: 'simple',
    text: 'The teacher marked the papers.',
    note: 'The basic shape: a noun phrase subject, then a verb phrase holding the verb and its object.',
    tree: {
      label: 'S',
      kids: [
        { label: 'NP', kids: [leaf('Det', 'The'), leaf('N', 'teacher')] },
        {
          label: 'VP',
          kids: [leaf('V', 'marked'), { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'papers')] }],
        },
      ],
    },
    tests: [
      {
        name: 'Substitution',
        how: 'Replace the candidate with a single pronoun.',
        result: 'The teacher marked them.',
        passes: true,
        note: '*the papers* can be swapped for one word, so it is behaving as a single unit.',
      },
      {
        name: 'Movement',
        how: 'Move the candidate to the front.',
        result: 'The papers, the teacher marked.',
        passes: true,
        note: 'Awkward but grammatical. Only constituents move as a block.',
      },
      {
        name: 'Substitution on a non-constituent',
        how: 'Try the same with *marked the*.',
        result: '*The teacher it papers.',
        passes: false,
        note: '*marked the* cannot be replaced or moved, because it is not a unit in the tree.',
      },
    ],
  },
  {
    id: 'ambiguous',
    text: 'I saw the man with the telescope.',
    note: 'The famous attachment ambiguity. The words do not change; the tree does.',
    tree: {
      label: 'S',
      kids: [
        { label: 'NP', kids: [leaf('Pro', 'I')] },
        {
          label: 'VP',
          kids: [
            leaf('V', 'saw'),
            { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'man')] },
            {
              label: 'PP',
              kids: [leaf('P', 'with'), { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'telescope')] }],
            },
          ],
        },
      ],
    },
    altReading: 'The man was holding the telescope: the PP hangs off the noun phrase.',
    alt: {
      reading: 'The man was holding the telescope.',
      tree: {
        label: 'S',
        kids: [
          { label: 'NP', kids: [leaf('Pro', 'I')] },
          {
            label: 'VP',
            kids: [
              leaf('V', 'saw'),
              {
                label: 'NP',
                kids: [
                  { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'man')] },
                  {
                    label: 'PP',
                    kids: [leaf('P', 'with'), { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'telescope')] }],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    tests: [
      {
        name: 'Substitution (reading 1)',
        how: 'Replace *the man* alone with a pronoun.',
        result: 'I saw him with the telescope.',
        passes: true,
        note: 'The telescope stays behind, so it was never part of that noun phrase: you looked through it.',
      },
      {
        name: 'Substitution (reading 2)',
        how: 'Replace *the man with the telescope* with a pronoun.',
        result: 'I saw him.',
        passes: true,
        note: 'The whole thing goes at once, so it is one noun phrase: he was carrying it.',
      },
    ],
  },
  {
    id: 'relative',
    text: 'The student who sat at the back answered first.',
    note: 'A relative clause inside the subject. The subject is long, but it is still one constituent.',
    tree: {
      label: 'S',
      kids: [
        {
          label: 'NP',
          kids: [
            leaf('Det', 'The'),
            leaf('N', 'student'),
            {
              label: 'SBAR',
              kids: [
                leaf('WP', 'who'),
                {
                  label: 'S',
                  kids: [
                    {
                      label: 'VP',
                      kids: [
                        leaf('V', 'sat'),
                        {
                          label: 'PP',
                          kids: [leaf('P', 'at'), { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'back')] }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { label: 'VP', kids: [leaf('V', 'answered'), leaf('Adv', 'first')] },
      ],
    },
    tests: [
      {
        name: 'Substitution',
        how: 'Replace the whole subject with *she*.',
        result: 'She answered first.',
        passes: true,
        note: 'Seven words collapse to one, which is the clearest possible evidence that they form a unit.',
      },
      {
        name: 'Agreement',
        how: 'Check which word the verb agrees with.',
        result: 'The student ... answered (not *the back answered*).',
        passes: true,
        note: 'The verb agrees with the head of the subject noun phrase, not with the nearest noun.',
      },
    ],
  },
  {
    id: 'auxiliary',
    text: 'She has been reading the report.',
    note: 'A stack of auxiliaries. Each one takes the phrase below it as its complement.',
    tree: {
      label: 'S',
      kids: [
        { label: 'NP', kids: [leaf('Pro', 'She')] },
        {
          label: 'VP',
          kids: [
            leaf('Aux', 'has'),
            {
              label: 'VP',
              kids: [
                leaf('Aux', 'been'),
                {
                  label: 'VP',
                  kids: [leaf('V', 'reading'), { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'report')] }],
                },
              ],
            },
          ],
        },
      ],
    },
    tests: [
      {
        name: 'Ellipsis',
        how: 'Leave out everything after the first auxiliary.',
        result: 'She has been reading the report, and he has too.',
        passes: true,
        note: 'What *too* stands in for is exactly the VP under *has*, so that VP is a unit.',
      },
      {
        name: 'Question formation',
        how: 'Form a question.',
        result: 'Has she been reading the report?',
        passes: true,
        note: 'Only the first auxiliary moves. The rest of the verb phrase stays put as a block.',
      },
    ],
  },
  {
    id: 'coordination',
    text: 'Marks and comments go into the system.',
    note: 'Coordination joins two constituents of the same kind, which is itself a test.',
    tree: {
      label: 'S',
      kids: [
        {
          label: 'NP',
          kids: [
            { label: 'NP', kids: [leaf('N', 'Marks')] },
            leaf('Conj', 'and'),
            { label: 'NP', kids: [leaf('N', 'comments')] },
          ],
        },
        {
          label: 'VP',
          kids: [
            leaf('V', 'go'),
            {
              label: 'PP',
              kids: [leaf('P', 'into'), { label: 'NP', kids: [leaf('Det', 'the'), leaf('N', 'system')] }],
            },
          ],
        },
      ],
    },
    tests: [
      {
        name: 'Coordination',
        how: 'Join the candidate to something with *and*.',
        result: 'Marks and comments go into the system.',
        passes: true,
        note: 'Two noun phrases coordinate cleanly, which is evidence that each is a noun phrase.',
      },
      {
        name: 'Agreement check',
        how: 'See what the coordinated subject does to the verb.',
        result: 'go, not goes',
        passes: true,
        note: 'The coordinated phrase is plural as a whole, so the verb agrees with the unit, not with *comments*.',
      },
    ],
  },
]

// ---------------------------------------------------------------- dependency

/** head = index of the governing word, or -1 for the root. */
export type DepToken = { word: string; pos: string; head: number; rel: string }

export type DepSentence = { id: string; text: string; note: string; tokens: DepToken[] }

export const DEP_SENTENCES: DepSentence[] = [
  {
    id: 'simple',
    text: 'The teacher marked the papers.',
    note: 'The verb is the root. Everything else hangs off it, directly or through another word.',
    tokens: [
      { word: 'The', pos: 'DET', head: 1, rel: 'det' },
      { word: 'teacher', pos: 'NOUN', head: 2, rel: 'nsubj' },
      { word: 'marked', pos: 'VERB', head: -1, rel: 'root' },
      { word: 'the', pos: 'DET', head: 4, rel: 'det' },
      { word: 'papers', pos: 'NOUN', head: 2, rel: 'obj' },
    ],
  },
  {
    id: 'ambiguous',
    text: 'I saw the man with the telescope.',
    note: 'The ambiguity shows up as a single arc moving: *with* attaches either to *saw* or to *man*.',
    tokens: [
      { word: 'I', pos: 'PRON', head: 1, rel: 'nsubj' },
      { word: 'saw', pos: 'VERB', head: -1, rel: 'root' },
      { word: 'the', pos: 'DET', head: 3, rel: 'det' },
      { word: 'man', pos: 'NOUN', head: 1, rel: 'obj' },
      { word: 'with', pos: 'ADP', head: 6, rel: 'case' },
      { word: 'the', pos: 'DET', head: 6, rel: 'det' },
      { word: 'telescope', pos: 'NOUN', head: 1, rel: 'obl' },
    ],
  },
  {
    id: 'passive',
    text: 'The papers were marked by the teacher.',
    note: 'The passive is visible in the labels: the grammatical subject carries nsubj:pass, and the doer is an oblique.',
    tokens: [
      { word: 'The', pos: 'DET', head: 1, rel: 'det' },
      { word: 'papers', pos: 'NOUN', head: 3, rel: 'nsubj:pass' },
      { word: 'were', pos: 'AUX', head: 3, rel: 'aux:pass' },
      { word: 'marked', pos: 'VERB', head: -1, rel: 'root' },
      { word: 'by', pos: 'ADP', head: 6, rel: 'case' },
      { word: 'the', pos: 'DET', head: 6, rel: 'det' },
      { word: 'teacher', pos: 'NOUN', head: 3, rel: 'obl:agent' },
    ],
  },
  {
    id: 'auxiliary',
    text: 'She has been reading the report.',
    note: 'Both auxiliaries depend on the main verb. In dependency grammar the lexical verb is the head, not the first auxiliary.',
    tokens: [
      { word: 'She', pos: 'PRON', head: 3, rel: 'nsubj' },
      { word: 'has', pos: 'AUX', head: 3, rel: 'aux' },
      { word: 'been', pos: 'AUX', head: 3, rel: 'aux' },
      { word: 'reading', pos: 'VERB', head: -1, rel: 'root' },
      { word: 'the', pos: 'DET', head: 5, rel: 'det' },
      { word: 'report', pos: 'NOUN', head: 3, rel: 'obj' },
    ],
  },
  {
    id: 'subordinate',
    text: 'We left early because the hall was full.',
    note: 'A subordinate clause is one arc: its own verb hangs off the main verb with the relation advcl.',
    tokens: [
      { word: 'We', pos: 'PRON', head: 1, rel: 'nsubj' },
      { word: 'left', pos: 'VERB', head: -1, rel: 'root' },
      { word: 'early', pos: 'ADV', head: 1, rel: 'advmod' },
      { word: 'because', pos: 'SCONJ', head: 7, rel: 'mark' },
      { word: 'the', pos: 'DET', head: 5, rel: 'det' },
      { word: 'hall', pos: 'NOUN', head: 7, rel: 'nsubj' },
      { word: 'was', pos: 'AUX', head: 7, rel: 'cop' },
      { word: 'full', pos: 'ADJ', head: 1, rel: 'advcl' },
    ],
  },
]

export const DEP_RELATIONS: { rel: string; name: string; gloss: string }[] = [
  { rel: 'root', name: 'Root', gloss: 'The head of the whole sentence, normally the main verb.' },
  { rel: 'nsubj', name: 'Nominal subject', gloss: 'The subject of a clause.' },
  { rel: 'nsubj:pass', name: 'Passive subject', gloss: 'The subject of a passive clause, which is the thing affected.' },
  { rel: 'obj', name: 'Object', gloss: 'The direct object of a verb.' },
  { rel: 'iobj', name: 'Indirect object', gloss: 'The recipient, where there is one.' },
  { rel: 'obl', name: 'Oblique', gloss: 'A noun phrase attached through a preposition, giving time, place or manner.' },
  { rel: 'obl:agent', name: 'Agent', gloss: 'The doer in a passive clause, in the *by* phrase.' },
  { rel: 'det', name: 'Determiner', gloss: 'An article or demonstrative attached to its noun.' },
  { rel: 'case', name: 'Case marker', gloss: 'A preposition, attached to the noun it marks rather than to the verb.' },
  { rel: 'aux', name: 'Auxiliary', gloss: 'A helping verb, attached to the lexical verb.' },
  { rel: 'aux:pass', name: 'Passive auxiliary', gloss: 'The *be* that forms a passive.' },
  { rel: 'cop', name: 'Copula', gloss: 'A linking *be*, which depends on its complement rather than heading the clause.' },
  { rel: 'advmod', name: 'Adverbial modifier', gloss: 'An adverb modifying a verb, adjective or another adverb.' },
  { rel: 'advcl', name: 'Adverbial clause', gloss: 'A subordinate clause working as an adverbial.' },
  { rel: 'mark', name: 'Marker', gloss: 'The subordinating conjunction introducing a clause.' },
  { rel: 'amod', name: 'Adjectival modifier', gloss: 'An adjective modifying a noun.' },
]

// ---------------------------------------------------------------- functional (SFG)

export type FuncSpan = {
  text: string
  /** Experiential: what the clause is about. */
  transitivity: string
  /** Interpersonal: the mood structure. */
  mood: string
  /** Textual: theme or rheme. */
  textual: 'Theme' | 'Rheme'
}

export type FuncClause = {
  id: string
  text: string
  process: string
  processNote: string
  moodType: string
  themeNote: string
  spans: FuncSpan[]
}

export const FUNC_CLAUSES: FuncClause[] = [
  {
    id: 'material',
    text: 'The students built a model bridge in the hall.',
    process: 'Material',
    processNote: 'A process of doing. Someone acts, and something is usually brought about or affected.',
    moodType: 'Declarative',
    themeNote: 'The Theme is the subject, which is the unmarked choice in a declarative. Nothing is being foregrounded.',
    spans: [
      { text: 'The students', transitivity: 'Actor', mood: 'Subject', textual: 'Theme' },
      { text: 'built', transitivity: 'Process: material', mood: 'Finite + Predicator', textual: 'Rheme' },
      { text: 'a model bridge', transitivity: 'Goal', mood: 'Complement', textual: 'Rheme' },
      { text: 'in the hall', transitivity: 'Circumstance: location', mood: 'Adjunct', textual: 'Rheme' },
    ],
  },
  {
    id: 'mental',
    text: 'She remembered the answer immediately.',
    process: 'Mental',
    processNote: 'A process of sensing: thinking, feeling, perceiving or wanting. The one who senses is conscious.',
    moodType: 'Declarative',
    themeNote: 'Unmarked Theme again. The adverb sits in the Rheme, where new information belongs.',
    spans: [
      { text: 'She', transitivity: 'Senser', mood: 'Subject', textual: 'Theme' },
      { text: 'remembered', transitivity: 'Process: mental', mood: 'Finite + Predicator', textual: 'Rheme' },
      { text: 'the answer', transitivity: 'Phenomenon', mood: 'Complement', textual: 'Rheme' },
      { text: 'immediately', transitivity: 'Circumstance: manner', mood: 'Adjunct', textual: 'Rheme' },
    ],
  },
  {
    id: 'relational',
    text: 'The experiment was a failure.',
    process: 'Relational',
    processNote: 'A process of being: identifying or attributing. Nothing happens; something is characterised.',
    moodType: 'Declarative',
    themeNote: 'Relational clauses are how definitions and judgements get made, which is why they fill textbooks and reports.',
    spans: [
      { text: 'The experiment', transitivity: 'Carrier', mood: 'Subject', textual: 'Theme' },
      { text: 'was', transitivity: 'Process: relational', mood: 'Finite + Predicator', textual: 'Rheme' },
      { text: 'a failure', transitivity: 'Attribute', mood: 'Complement', textual: 'Rheme' },
    ],
  },
  {
    id: 'verbal',
    text: 'The principal told the parents the news.',
    process: 'Verbal',
    processNote: 'A process of saying. It projects what was said, which is why reported speech hangs off these verbs.',
    moodType: 'Declarative',
    themeNote: 'Who speaks is Theme, so the clause is organised around the authority of the speaker.',
    spans: [
      { text: 'The principal', transitivity: 'Sayer', mood: 'Subject', textual: 'Theme' },
      { text: 'told', transitivity: 'Process: verbal', mood: 'Finite + Predicator', textual: 'Rheme' },
      { text: 'the parents', transitivity: 'Receiver', mood: 'Complement', textual: 'Rheme' },
      { text: 'the news', transitivity: 'Verbiage', mood: 'Complement', textual: 'Rheme' },
    ],
  },
  {
    id: 'marked',
    text: 'In the hall, the students built a model bridge.',
    process: 'Material',
    processNote: 'The same process as the first clause. The experiential meaning has not changed at all.',
    moodType: 'Declarative',
    themeNote: 'A marked Theme: the circumstance has been moved to the front, so the clause is now about the place. Same facts, different angle.',
    spans: [
      { text: 'In the hall', transitivity: 'Circumstance: location', mood: 'Adjunct', textual: 'Theme' },
      { text: 'the students', transitivity: 'Actor', mood: 'Subject', textual: 'Rheme' },
      { text: 'built', transitivity: 'Process: material', mood: 'Finite + Predicator', textual: 'Rheme' },
      { text: 'a model bridge', transitivity: 'Goal', mood: 'Complement', textual: 'Rheme' },
    ],
  },
  {
    id: 'interrogative',
    text: 'Did the students build a model bridge?',
    process: 'Material',
    processNote: 'Still material. Changing the mood does not change what the clause is about.',
    moodType: 'Interrogative (yes/no)',
    themeNote: 'The Finite comes first, which is what makes it a question. Theme runs up to and includes the subject.',
    spans: [
      { text: 'Did', transitivity: 'Process: material (part)', mood: 'Finite', textual: 'Theme' },
      { text: 'the students', transitivity: 'Actor', mood: 'Subject', textual: 'Theme' },
      { text: 'build', transitivity: 'Process: material', mood: 'Predicator', textual: 'Rheme' },
      { text: 'a model bridge', transitivity: 'Goal', mood: 'Complement', textual: 'Rheme' },
    ],
  },
  {
    id: 'passive-agentless',
    text: 'Mistakes were made.',
    process: 'Material',
    processNote: 'A material process with the Actor deleted. Something was done, and the grammar declines to say by whom.',
    moodType: 'Declarative',
    themeNote: 'The Goal has been made Theme and Subject, and the Actor has vanished entirely. This is the clause politicians reach for.',
    spans: [
      { text: 'Mistakes', transitivity: 'Goal', mood: 'Subject', textual: 'Theme' },
      { text: 'were made', transitivity: 'Process: material', mood: 'Finite + Predicator', textual: 'Rheme' },
    ],
  },
]

// ---------------------------------------------------------------- morphology

export type Morph = {
  form: string
  kind: 'prefix' | 'root' | 'suffix' | 'infix'
  type: 'derivational' | 'inflectional' | 'lexical'
  gloss: string
}

export type MorphWord = { word: string; note: string; parts: Morph[] }

export const MORPH_WORDS: MorphWord[] = [
  {
    word: 'unhelpfulness',
    note: 'Four morphemes and not one inflection: every piece here builds a new word rather than fitting this one into a sentence. Read it from the inside out and each layer changes the word class or the meaning.',
    parts: [
      { form: 'un', kind: 'prefix', type: 'derivational', gloss: 'not' },
      { form: 'help', kind: 'root', type: 'lexical', gloss: 'the core meaning, a free morpheme' },
      { form: 'ful', kind: 'suffix', type: 'derivational', gloss: 'full of: makes an adjective from a noun' },
      { form: 'ness', kind: 'suffix', type: 'derivational', gloss: 'the state of: makes a noun from an adjective' },
    ],
  },
  {
    word: 'teachers',
    note: 'Derivation first, then inflection. The plural -s is always last, because inflection closes the word.',
    parts: [
      { form: 'teach', kind: 'root', type: 'lexical', gloss: 'the core meaning' },
      { form: 'er', kind: 'suffix', type: 'derivational', gloss: 'one who does: makes a noun from a verb' },
      { form: 's', kind: 'suffix', type: 'inflectional', gloss: 'plural' },
    ],
  },
  {
    word: 'rewritten',
    note: 'A prefix that modifies meaning, and a participle ending that is inflectional: it tells you where the verb sits in the grammar, not what it means.',
    parts: [
      { form: 're', kind: 'prefix', type: 'derivational', gloss: 'again' },
      { form: 'writt', kind: 'root', type: 'lexical', gloss: 'write, with its vowel changed' },
      { form: 'en', kind: 'suffix', type: 'inflectional', gloss: 'past participle' },
    ],
  },
  {
    word: 'denationalisation',
    note: 'Five morphemes stacked. Read it from the inside out and the meaning assembles itself.',
    parts: [
      { form: 'de', kind: 'prefix', type: 'derivational', gloss: 'reverse, remove' },
      { form: 'nation', kind: 'root', type: 'lexical', gloss: 'the core meaning' },
      { form: 'al', kind: 'suffix', type: 'derivational', gloss: 'relating to: makes an adjective' },
      { form: 'ise', kind: 'suffix', type: 'derivational', gloss: 'make into: makes a verb' },
      { form: 'ation', kind: 'suffix', type: 'derivational', gloss: 'the act of: makes a noun' },
    ],
  },
  {
    word: 'mice',
    note: 'One morpheme, two meanings. The plural is carried by a vowel change rather than an ending, which is why you cannot cut this word into pieces.',
    parts: [{ form: 'mice', kind: 'root', type: 'lexical', gloss: 'mouse + plural, fused into one form' }],
  },
  {
    word: 'cranberry',
    note: 'A bound root that occurs in exactly one word. Linguists named the whole phenomenon after it.',
    parts: [
      { form: 'cran', kind: 'root', type: 'lexical', gloss: 'a bound root with no meaning of its own anywhere else' },
      { form: 'berry', kind: 'root', type: 'lexical', gloss: 'a free root' },
    ],
  },
]

/** The word-building machine: a root plus the affixes that will actually attach to it. */
export type BuildRoot = {
  root: string
  pos: string
  forms: { affixes: string[]; word: string; pos: string; gloss: string }[]
}

export const BUILD_ROOTS: BuildRoot[] = [
  {
    root: 'act',
    pos: 'verb',
    forms: [
      { affixes: [], word: 'act', pos: 'verb', gloss: 'to do something' },
      { affixes: ['-ion'], word: 'action', pos: 'noun', gloss: 'the doing of it' },
      { affixes: ['-ive'], word: 'active', pos: 'adjective', gloss: 'doing things' },
      { affixes: ['-ive', '-ate'], word: 'activate', pos: 'verb', gloss: 'make active' },
      { affixes: ['-ive', '-ity'], word: 'activity', pos: 'noun', gloss: 'the state of being active' },
      { affixes: ['re-'], word: 'react', pos: 'verb', gloss: 'act back' },
      { affixes: ['re-', '-ion'], word: 'reaction', pos: 'noun', gloss: 'the acting back' },
      { affixes: ['in-', '-ive'], word: 'inactive', pos: 'adjective', gloss: 'not doing things' },
    ],
  },
  {
    root: 'form',
    pos: 'noun/verb',
    forms: [
      { affixes: [], word: 'form', pos: 'noun/verb', gloss: 'a shape, or to shape' },
      { affixes: ['-al'], word: 'formal', pos: 'adjective', gloss: 'according to form' },
      { affixes: ['-al', '-ity'], word: 'formality', pos: 'noun', gloss: 'the quality of being formal' },
      { affixes: ['in-', '-al'], word: 'informal', pos: 'adjective', gloss: 'not formal' },
      { affixes: ['trans-'], word: 'transform', pos: 'verb', gloss: 'change the shape of' },
      { affixes: ['trans-', '-ation'], word: 'transformation', pos: 'noun', gloss: 'the changing of shape' },
      { affixes: ['re-'], word: 'reform', pos: 'verb', gloss: 'shape again' },
      { affixes: ['uni-'], word: 'uniform', pos: 'adjective', gloss: 'of one shape' },
    ],
  },
  {
    root: 'read',
    pos: 'verb',
    forms: [
      { affixes: [], word: 'read', pos: 'verb', gloss: 'to read' },
      { affixes: ['-er'], word: 'reader', pos: 'noun', gloss: 'one who reads' },
      { affixes: ['-able'], word: 'readable', pos: 'adjective', gloss: 'able to be read' },
      { affixes: ['un-', '-able'], word: 'unreadable', pos: 'adjective', gloss: 'not able to be read' },
      { affixes: ['-able', '-ity'], word: 'readability', pos: 'noun', gloss: 'how readable something is' },
      { affixes: ['re-'], word: 'reread', pos: 'verb', gloss: 'read again' },
      { affixes: ['mis-'], word: 'misread', pos: 'verb', gloss: 'read wrongly' },
      { affixes: ['-ing'], word: 'reading', pos: 'noun/verb', gloss: 'the activity, or the ongoing verb' },
    ],
  },
]

// ---------------------------------------------------------------- tense, aspect, modality

export type TamChoice = {
  tense: 'past' | 'present'
  aspect: 'simple' | 'progressive' | 'perfect' | 'perfect-progressive'
  modal: string
  voice: 'active' | 'passive'
}

export const TAM_MODALS = ['none', 'will', 'would', 'can', 'could', 'may', 'might', 'must', 'should']

export const TAM_VERBS: { base: string; past: string; participle: string; ing: string; third: string }[] = [
  { base: 'write', past: 'wrote', participle: 'written', ing: 'writing', third: 'writes' },
  { base: 'mark', past: 'marked', participle: 'marked', ing: 'marking', third: 'marks' },
  { base: 'go', past: 'went', participle: 'gone', ing: 'going', third: 'goes' },
  { base: 'eat', past: 'ate', participle: 'eaten', ing: 'eating', third: 'eats' },
]

// ---------------------------------------------------------------- typology

export type TypologyFeature = {
  id: string
  name: string
  question: string
  explain: string
  values: { value: string; share: string; languages: string; example?: string; gloss?: string }[]
  englishNote: string
}

export const TYPOLOGY_FEATURES: TypologyFeature[] = [
  {
    id: 'word-order',
    name: 'Basic word order',
    question: 'In what order do subject, object and verb normally appear?',
    explain:
      'Six orders are logically possible and all six are attested, but two of them account for the large majority of languages. Both of the common ones put the subject first, which is the nearest thing to a universal here.',
    values: [
      { value: 'SOV', share: 'about 41%', languages: 'Japanese, Korean, Turkish, Hindi, Latin', example: 'Taro-ga ringo-o tabeta', gloss: 'Taro-SUBJ apple-OBJ ate' },
      { value: 'SVO', share: 'about 35%', languages: 'English, Mandarin, Malay, Swahili, French', example: '\u592a\u90ce \u5403\u4e86 \u82f9\u679c', gloss: 'Taro ate apple' },
      { value: 'VSO', share: 'about 7%', languages: 'Irish, Welsh, Classical Arabic, Tagalog', example: 'D’ith Seán úll', gloss: 'ate Sean apple' },
      { value: 'VOS', share: 'about 2%', languages: 'Malagasy, Fijian' },
      { value: 'OVS', share: 'under 1%', languages: 'Hixkaryana' },
      { value: 'OSV', share: 'vanishingly rare', languages: 'Warao, Nad\u00ebb, and famously Yoda' },
      { value: 'No dominant order', share: 'about 14%', languages: 'German, Russian, Dyirbal: order is free because case marks the roles' },
    ],
    englishNote:
      'English is rigidly SVO, and that rigidity is a consequence of losing case endings: when the ending stopped telling you who did what, position had to.',
  },
  {
    id: 'case',
    name: 'Case marking',
    question: 'Does the noun change shape to show its job in the clause?',
    explain:
      'A case system marks grammatical role on the noun itself. The more a language marks, the freer its word order can be, because the information is carried by the word rather than by its position.',
    values: [
      { value: 'No case', share: 'about 46%', languages: 'Mandarin, Vietnamese, Thai, Yoruba' },
      { value: '2 cases', share: 'about 11%', languages: 'Modern English pronouns, Hindi' },
      { value: '3 to 7 cases', share: 'about 28%', languages: 'German (4), Latin (6), Russian (6), Polish (7)' },
      { value: '8 or more', share: 'about 15%', languages: 'Finnish (15), Hungarian (18), Tsez (64)' },
    ],
    englishNote:
      'English has case only in the pronouns: *I / me / my*, *he / him / his*, *who / whom*. Everywhere else it is gone, which is why *whom* feels precarious.',
  },
  {
    id: 'alignment',
    name: 'Alignment',
    question: 'Which arguments does the grammar treat as the same?',
    explain:
      'Take the single argument of an intransitive verb (S), the agent of a transitive one (A), and the patient (P). Languages differ in how they group them, and the grouping decides what the subject even is.',
    values: [
      { value: 'Nominative-accusative', share: 'most languages', languages: 'English, Latin, Japanese: S and A are treated alike, P differently', example: 'She ran. She saw him.', gloss: 'same form for the runner and the seer' },
      { value: 'Ergative-absolutive', share: 'about a quarter', languages: 'Basque, Dyirbal, Inuktitut, Georgian (in part): S and P are treated alike, A differently', example: 'Gizona etorri da. Gizonak mutila ikusi du.', gloss: 'man-ABS came. man-ERG boy-ABS saw' },
      { value: 'Split systems', share: 'common', languages: 'Hindi is ergative in the perfective and accusative elsewhere' },
      { value: 'Active-stative', share: 'rare', languages: 'Guaraní: the marking depends on whether the subject is acting on purpose' },
    ],
    englishNote:
      'English is thoroughly accusative, which is so familiar that "the subject" feels like a fact about thought rather than a choice a grammar makes.',
  },
  {
    id: 'classifiers',
    name: 'Classifiers and number',
    question: 'How does the language count things?',
    explain:
      'Some languages require a classifier between a number and a noun, chosen by the shape or kind of thing being counted. Others mark plural on the noun and leave counting alone.',
    values: [
      { value: 'Obligatory classifiers', share: 'East and Southeast Asia', languages: 'Mandarin, Cantonese, Thai, Japanese, Malay', example: '三本书 sān běn shū', gloss: 'three CLASSIFIER(volume) book' },
      { value: 'Plural marking, no classifiers', share: 'Europe, much of Africa', languages: 'English, Russian, Swahili' },
      { value: 'Optional plural', share: 'widespread', languages: 'Mandarin marks plural only on human nouns, and only sometimes' },
    ],
    englishNote:
      'English has classifiers but does not notice them: *two slices of bread*, *three head of cattle*, *a pack of cards*. They are obligatory for uncountables, which is the same rule wearing a different hat.',
  },
  {
    id: 'evidentiality',
    name: 'Evidentiality',
    question: 'Must the speaker say how they know?',
    explain:
      'In roughly a quarter of the world’s languages the verb carries a marker saying whether you saw it, heard it, inferred it or were told. It is not optional, and leaving it out is ungrammatical rather than merely vague.',
    values: [
      { value: 'No grammatical evidentials', share: 'about 75%', languages: 'English, French, Mandarin: you can say *apparently*, but you need not' },
      { value: 'Two-way (direct vs indirect)', share: 'common', languages: 'Turkish: *geldi* (I saw him come) versus *gelmiş* (apparently he came)' },
      { value: 'Three or four-way', share: 'Amazonia, the Andes', languages: 'Quechua, Tariana: seen, heard, inferred, reported, each with its own marker' },
    ],
    englishNote:
      'English does this lexically and optionally, with *apparently*, *I heard*, *must have*. A Tariana speaker who used the wrong marker would not be impolite, they would be ungrammatical.',
  },
  {
    id: 'tense-marking',
    name: 'Tense marking',
    question: 'Does the verb have to say when?',
    explain:
      'Tense feels obligatory to an English speaker, but plenty of languages leave time to context and particles, and some mark distance in the past with several different forms.',
    values: [
      { value: 'No grammatical tense', share: 'widespread', languages: 'Mandarin, Malay, Yoruba: time comes from adverbs and aspect particles' },
      { value: 'Past / non-past', share: 'common', languages: 'English, Japanese: two tenses, with the future built from modals' },
      { value: 'Past / present / future', share: 'common', languages: 'Spanish, French, Swahili: three inflected tenses' },
      { value: 'Graded past', share: 'rare', languages: 'Yagua, Bamileke: different forms for earlier today, yesterday, and long ago' },
    ],
    englishNote:
      'English has two inflected tenses, past and non-past. Everything else in the twelve-tense table is aspect, modality or a periphrastic construction wearing the word "tense".',
  },
]
