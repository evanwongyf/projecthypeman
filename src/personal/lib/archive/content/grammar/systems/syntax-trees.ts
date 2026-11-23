import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'School grammar names the parts of a sentence. Syntax draws the picture of how they fit together. A **constituency tree** says which words group into units, which units group into bigger ones, and which groupings the sentence will not allow. The claim is testable, which is what makes it grammar rather than opinion.',
  nutshell: [
    'A **constituent** is a group of words that behaves as a single unit. *The man in the grey coat* is one; *man in the* is not.',
    'Sentences are **hierarchical**, not flat. Words group into phrases, phrases into bigger phrases, and the tree records that nesting.',
    'Four tests give you evidence: **substitution**, **movement**, **coordination** and **ellipsis**. A real constituent passes them; an arbitrary string fails.',
    'Every phrase has a **head** that gives it its name and its class: a noun phrase is built around a noun.',
    'Structural **ambiguity** is two trees over one string of words. The words cannot tell you which reading is meant; only the structure can.',
    'Trees are a **model**, not a photograph. [Dependency grammar](@grammar/systems/dependency) draws the same sentence another way and is equally defensible.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why a flat sentence is not enough',
      blocks: [
        {
          t: 'p',
          text: 'Read this sentence: *The old men and women left*. Who is old? If *old* belongs to *men* alone, then old men and women of any age left. If *old* belongs to the whole coordinated phrase, everyone who left was old. The words are identical in both readings, in the same order. Nothing about a list of word classes can tell the two apart, because the difference is not in the words, it is in how they are grouped.',
        },
        {
          t: 'p',
          text: 'That is the argument for structure. A sentence is not a line of words, it is a nest of units. Once you can draw the nest, a surprising number of things that looked like separate rules in [parts of speech](@grammar/parts-of-speech/nouns) and [phrases and clauses](@grammar/sentences/phrases-and-clauses) turn out to be the same fact seen from different sides.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'What a tree is for',
          text: 'A tree is not decoration and it is not a diagramming exercise for its own sake. It is a **prediction**: it says which operations the sentence will tolerate. If the tree is right, the tests below will come out a particular way. If they do not, the tree is wrong.',
        },
      ],
    },
    {
      id: 'reading',
      title: 'Reading a tree',
      blocks: [
        {
          t: 'p',
          text: 'A tree is drawn top down. The whole sentence (**S**) sits at the top. Below it are its immediate parts, usually a noun phrase (**NP**) and a verb phrase (**VP**). Each of those splits again, until you reach the words themselves at the bottom, each hanging under its word class.',
        },
        {
          t: 'diagram',
          title: 'The skeleton of a simple sentence',
          nodes: [
            { id: 's', label: 'S', sub: 'sentence', col: 2, row: 0, shape: 'pill', tone: 'ink' },
            { id: 'np', label: 'NP', sub: 'the teacher', col: 1, row: 1, tone: 'teal' },
            { id: 'vp', label: 'VP', sub: 'marked the papers', col: 3, row: 1, tone: 'orange' },
            { id: 'v', label: 'V', sub: 'marked', col: 2, row: 2, tone: 'orange' },
            { id: 'np2', label: 'NP', sub: 'the papers', col: 4, row: 2, tone: 'teal' },
          ],
          edges: [
            { from: 's', to: 'np' },
            { from: 's', to: 'vp' },
            { from: 'vp', to: 'v' },
            { from: 'vp', to: 'np2' },
          ],
          caption: 'The object noun phrase sits inside the verb phrase, not beside it. That one detail does a lot of work later.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Node', def: 'Any point in the tree: a phrase label, a word class, or a word.' },
            { term: 'Mother and daughter', def: 'A node immediately above another is its mother. S is the mother of NP and VP.' },
            { term: 'Sister', def: 'Two nodes with the same mother. In the diagram above, V and the object NP are sisters.' },
            { term: 'Dominates', def: 'A node dominates everything below it. The VP dominates *marked*, *the* and *papers*.' },
            { term: 'Head', def: 'The word a phrase is built around, and which gives the phrase its name. The head of *the papers* is *papers*.' },
            { term: 'Constituent', def: 'Any node together with everything it dominates. The test is whether the grammar treats it as a unit.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Bracketing says the same thing',
          text: 'A tree can be written on one line with labelled brackets: [S [NP The teacher] [VP marked [NP the papers]]]. This is how treebanks store trees, and it is quicker to write in notes. The two notations carry exactly the same information.',
        },
      ],
    },
    {
      id: 'tests',
      title: 'The four tests',
      lead: 'How you know a grouping is real rather than convenient.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            {
              title: 'Substitution',
              tag: 'strongest',
              body: 'Can the group be replaced by a single word, usually a pronoun or *do so* or *there*? *The student who sat at the back* becomes *she*. Seven words to one is strong evidence of a unit.',
            },
            {
              title: 'Movement',
              tag: 'fronting, clefting',
              body: 'Can the group be moved as a block? *It was the papers that she marked.* Only constituents can be fronted or put in a cleft.',
            },
            {
              title: 'Coordination',
              tag: 'and, or',
              body: 'Can the group be joined to something similar with *and*? *She marked the papers and the registers.* Coordination joins constituents of the same type.',
            },
            {
              title: 'Ellipsis',
              tag: 'leaving it out',
              body: 'Can the group be left out and understood? *She has been marking, and he has too.* What *too* stands for is a constituent.',
            },
          ],
        },
        {
          t: 'example',
          title: 'Running the tests on a real string',
          lines: [
            { label: 'Candidate', text: 'Is *marked the* a constituent in *The teacher marked the papers*?' },
            { label: 'Substitution', text: '*The teacher **it** papers.* Fails. There is no word that can stand in for it.' },
            { label: 'Movement', text: '**Marked the**, the teacher papers.* Fails. It cannot be fronted.' },
            { label: 'Coordination', text: '*The teacher **marked the and filed the** papers.* Fails.' },
            { label: 'Verdict', text: 'Not a constituent, which is why no tree draws a node over it. The string is adjacent, and adjacency is not structure.' },
          ],
        },
        { t: 'grammar-lab', viz: 'tree' },
        {
          t: 'callout',
          tone: 'warn',
          title: 'A failed test is not always decisive',
          text: 'Tests can fail for reasons that have nothing to do with structure: a sentence can be hard to parse, or just odd. Treat them as converging evidence. If three tests agree and one is awkward, trust the three.',
        },
      ],
    },
    {
      id: 'phrases',
      title: 'Every phrase has a head',
      blocks: [
        {
          t: 'p',
          text: 'A phrase is named after the word at its centre. That is not a labelling convention, it is a claim: the head determines what the phrase can do, and the rest is optional material hanging off it.',
        },
        {
          t: 'table',
          head: ['Phrase', 'Head', 'Example', 'Strip it back to the head'],
          rows: [
            ['Noun phrase (NP)', 'noun', 'the three very old maps of Singapore', 'maps'],
            ['Verb phrase (VP)', 'verb', 'marked the papers carefully', 'marked'],
            ['Adjective phrase (AdjP)', 'adjective', 'extremely proud of her', 'proud'],
            ['Adverb phrase (AdvP)', 'adverb', 'much more carefully', 'carefully'],
            ['Prepositional phrase (PP)', 'preposition', 'in spite of the rain', 'in spite of'],
          ],
          caption: 'Remove everything except the head and the phrase still works grammatically, though it says less. Remove the head and nothing is left standing.',
        },
        {
          t: 'p',
          text: 'This is why *the three very old maps of Singapore* and *maps* can appear in exactly the same slots. They are the same kind of object as far as the grammar is concerned: one is just carrying more luggage.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Recursion',
          text: 'A noun phrase can contain a prepositional phrase, which contains a noun phrase, which contains another prepositional phrase: *the lid of the jar on the shelf in the cupboard*. There is no longest sentence, and that unboundedness is produced by a handful of rules applying to their own output.',
        },
      ],
    },
    {
      id: 'ambiguity',
      title: 'One string, two trees',
      blocks: [
        {
          t: 'p',
          text: 'Structural ambiguity is the clearest demonstration that trees are doing real work. *I saw the man with the telescope* has two readings, and they correspond exactly to two places the prepositional phrase can attach.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Attach to the VP', tag: 'you had the telescope', body: 'The PP is a sister of the verb and the object: it tells you how the seeing was done. Replace *the man* with *him* and the telescope stays behind.' },
            { title: 'Attach to the NP', tag: 'he had the telescope', body: 'The PP is inside the object noun phrase: it tells you which man. Replace the whole phrase with *him* and the telescope goes too.' },
          ],
        },
        {
          t: 'p',
          text: 'Notice that the substitution test does not merely describe the ambiguity, it **distinguishes** the readings. That is a model earning its keep.',
        },
        {
          t: 'example',
          title: 'More ambiguities worth collecting',
          lines: [
            { label: 'Attachment', text: '*She told the class on Monday to revise.* Did she tell them on Monday, or are they to revise on Monday?' },
            { label: 'Coordination scope', text: '*old men and women*: does *old* take scope over the whole coordination or only the first conjunct?' },
            { label: 'Compounding', text: '*English teacher*: a teacher of English, or a teacher who is English? Two structures inside the compound.' },
            { label: 'Gapping', text: '*Visiting relatives can be tiresome.* Is *visiting* a participle modifying *relatives*, or a gerund heading the subject?' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A use in the classroom',
          text: 'Ambiguity is the best way in to this topic with students. Give them *I saw the man with the telescope*, let them find both readings, then show that the disagreement has a shape. They will accept a tree much faster once it has settled an argument for them.',
        },
      ],
    },
    {
      id: 'rules',
      title: 'Writing the rules down',
      blocks: [
        {
          t: 'p',
          text: 'The groupings can be written as **phrase structure rules**, each one saying what a phrase may consist of. Round brackets mark optional material.',
        },
        {
          t: 'code',
          lang: 'text',
          title: 'A small grammar of English',
          code: `S   ->  NP VP
NP  ->  (Det) (AdjP) N (PP)
VP  ->  V (NP) (PP) (AdvP)
PP  ->  P NP
AdjP -> (Adv) Adj`,
          caption: 'Five rules. Because NP can contain PP and PP contains NP, the grammar is recursive and generates infinitely many sentences.',
        },
        {
          t: 'p',
          text: 'This is a toy, and it over-generates: it will happily produce sentences nobody would say. Real grammars constrain it heavily. But the shape is right, and it is the shape every parser, every treebank and every syntax textbook builds on.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"There is one correct tree"',
          text: 'There is not. Different frameworks draw different trees for the same sentence, and argue about it at length: whether the sentence node should be an inflection phrase, whether the subject starts inside the VP, whether determiners head their own phrases. What is not in dispute is that there is **structure**. The tests are more robust than any particular notation for recording them.',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Using this with students',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start with ambiguity, not with notation', body: 'A sentence with two readings makes students want an explanation. Opening with node labels makes them want to leave.' },
            { title: 'Teach substitution first', body: 'It is the easiest test to apply and the hardest to argue with. "Can you say it with one word instead?" needs no metalanguage at all.' },
            { title: 'Use brackets before trees', body: 'Brackets can be written in a notebook at speed and revised. Trees are easier to read but slower to draw, so save them for the final answer.' },
            { title: 'Let the tree explain a comma', body: 'Why does *the man, who lives next door, is here* take commas and *the man who lives next door* not? The structure is different, and the punctuation follows from it rather than being a separate rule to memorise.' },
            { title: 'Stop before the theory wars', body: 'X-bar theory, movement and empty categories are a university course. Constituency, heads and the four tests are enough to make a secondary classroom sharper.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Prove a grouping with a test rather than asserting it.',
            'Draw the same sentence two ways when it is genuinely ambiguous.',
            'Connect the tree to something the student already cares about: a comma, a pronoun, a dangling modifier.',
            'Accept a different but defensible tree if the student can test it.',
          ],
          dont: [
            'Grade trees on neatness rather than on whether the groupings survive testing.',
            'Introduce more labels than the sentence needs.',
            'Claim the tree is how the brain stores the sentence. It is a model of the grammar, not a scan.',
            'Treat a tree as an end in itself. If it explains nothing, it has done nothing.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Noam Chomsky, Syntactic Structures (1957), the short book that started the formal study of phrase structure.',
    'Andrew Radford, Analysing English Sentences (2nd edn, 2016), a standard and readable university introduction.',
    'Rodney Huddleston and Geoffrey Pullum, The Cambridge Grammar of the English Language (2002), the reference description of English structure.',
    'Marcus et al., Building a Large Annotated Corpus of English: The Penn Treebank (1993), the source of the phrase labels used here.',
  ],
  related: [
    'grammar/sentences/phrases-and-clauses',
    'grammar/systems/dependency',
    'grammar/sentences/sentence-structures',
    'grammar/systems/functional',
  ],
}

export default guide
