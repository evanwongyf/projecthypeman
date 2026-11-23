import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'There is a second way to draw a sentence, and it has no phrases in it at all. In **dependency grammar** every word but one hangs off exactly one other word, and each link is labelled with the relationship. It is older than phrase structure, it suits languages with free word order better, and it is what the machines actually use.',
  nutshell: [
    'One word is the **root** of the sentence, normally the main verb. Every other word depends on exactly one **head**.',
    'Each link carries a **relation label**: subject, object, determiner, adverbial modifier and so on.',
    'There are **no phrase nodes**. A noun phrase is just a noun with things hanging off it, which is a claim, not a shortcut.',
    'The **Universal Dependencies** project gives one label set for all languages, which is why it has become the standard for treebanks and parsers.',
    'Dependency handles **free word order** gracefully, because the arcs do not care where the words sit.',
    'Constituency and dependency are largely **inter-translatable**. Neither is the truth; each makes different things easy to see.',
  ],
  sections: [
    {
      id: 'idea',
      title: 'The idea in one sentence',
      blocks: [
        {
          t: 'p',
          text: 'Lucien Tesnière, writing in the 1950s, put it like this: a sentence is an organised whole in which the words are connected, and the verb is the centre of the little drama that the clause stages. The verb calls for a certain cast, the **actants**, and the rest of the words attach to whichever word they modify. Draw a line from each word to the word it depends on, and you have the sentence.',
        },
        {
          t: 'p',
          text: 'Compare that with the [constituency](@grammar/systems/syntax-trees) account, which builds phrases out of words and bigger phrases out of phrases. Dependency skips the intermediate objects entirely. There is no NP node in a dependency parse. There is a noun, and there are words that depend on it.',
        },
        {
          t: 'diagram',
          title: 'The same sentence, two frameworks',
          nodes: [
            { id: 'c', label: 'Constituency', sub: 'words group into phrases', col: 0, row: 0, shape: 'pill', tone: 'teal' },
            { id: 'c1', label: 'nodes are phrases', sub: 'NP, VP, PP', col: 0, row: 1, tone: 'teal' },
            { id: 'c2', label: 'words are leaves', sub: 'only at the bottom', col: 0, row: 2, tone: 'teal' },
            { id: 'd', label: 'Dependency', sub: 'words link to words', col: 2, row: 0, shape: 'pill', tone: 'orange' },
            { id: 'd1', label: 'nodes are words', sub: 'nothing else exists', col: 2, row: 1, tone: 'orange' },
            { id: 'd2', label: 'arcs are relations', sub: 'nsubj, obj, det', col: 2, row: 2, tone: 'orange' },
            { id: 'both', label: 'Both are testable', sub: 'and largely convertible', col: 1, row: 3, shape: 'pill', tone: 'ink', w: 2 },
          ],
          edges: [
            { from: 'c', to: 'c1' },
            { from: 'c1', to: 'c2' },
            { from: 'd', to: 'd1' },
            { from: 'd1', to: 'd2' },
            { from: 'c2', to: 'both' },
            { from: 'd2', to: 'both' },
          ],
        },
      ],
    },
    {
      id: 'heads',
      title: 'What counts as the head',
      blocks: [
        {
          t: 'p',
          text: 'Everything in a dependency parse turns on choosing heads, and some of the choices are genuinely contested. The modern convention, set by Universal Dependencies, is that **content words are heads and function words depend on them**. That is a deliberate decision, taken because it makes parses comparable across languages where one language uses a preposition and another uses a case ending.',
        },
        {
          t: 'table',
          head: ['Structure', 'Head', 'Dependent', 'Why'],
          rows: [
            ['the papers', 'papers', 'the', 'The noun carries the content; the determiner is grammatical scaffolding.'],
            ['has been reading', 'reading', 'has, been', 'The lexical verb is the head. Both auxiliaries depend on it.'],
            ['in the hall', 'hall', 'in', 'The preposition is a case marker on the noun, not a head above it.'],
            ['is a failure', 'failure', 'is', 'A copula depends on its complement. The complement is what the clause is about.'],
            ['because the hall was full', 'full', 'because', 'The subordinator marks the clause; the clause’s own predicate heads it.'],
          ],
          caption: 'The last three are exactly where other dependency traditions disagree, and they disagree for reasons worth hearing.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why prepositions were demoted',
          text: 'In English *in the hall* looks like a preposition heading a phrase. In Finnish the same meaning is a case ending on the noun, with no separate word at all. If the preposition were the head, the two languages would get structurally different parses for the same meaning. Making the noun the head in both keeps them comparable, which is the whole point of a universal scheme.',
        },
      ],
    },
    {
      id: 'labels',
      title: 'The relation labels',
      blocks: [
        {
          t: 'p',
          text: 'An unlabelled arc says only that two words are connected. The label says what the connection is, and that is where the grammar lives. Universal Dependencies defines around forty, of which a dozen cover most sentences.',
        },
        { t: 'grammar-lab', viz: 'dependency' },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Read the labels, not the geometry',
          text: 'In the lab above, switch to the passive sentence and look at what changed. The words moved and the arcs redrew, but the labels tell you the real story: the thing that was *obj* in the active is *nsubj:pass* in the passive, and the doer has become *obl:agent*. A passive is a relabelling, and the labels make that visible in a way the words do not.',
        },
      ],
    },
    {
      id: 'wordorder',
      title: 'Why this suits most of the world better',
      blocks: [
        {
          t: 'p',
          text: 'English has rigid word order, so phrase structure feels natural: the words that belong together sit together. Now consider Latin, Russian, Warlpiri or classical Greek, where case endings mark who did what and the words can appear in almost any order for emphasis.',
        },
        {
          t: 'example',
          title: 'Latin, scrambled',
          lines: [
            { label: 'Neutral', text: '*Puella puerum amat.* The girl loves the boy.' },
            { label: 'Scrambled', text: '*Puerum amat puella.* Still the girl loves the boy.' },
            { label: 'Scrambled', text: '*Amat puella puerum.* Still the girl loves the boy.' },
            { label: 'Why', text: 'The *-a* ending marks the subject and the *-um* ending marks the object, so position is free for emphasis.' },
            { label: 'Consequence', text: 'A constituency tree has to allow almost any order, which makes it say very little. The dependency arcs are identical in all three: *puella* is nsubj and *puerum* is obj, wherever they sit.' },
          ],
        },
        {
          t: 'p',
          text: 'This is the structural argument for dependency, and it is a serious one. A framework that was invented from English and happens to fit English is less interesting than one that handles a language where word order carries almost no grammatical load.',
        },
      ],
    },
    {
      id: 'machines',
      title: 'What the machines do',
      blocks: [
        {
          t: 'p',
          text: 'If you have used a natural language processing library, you have used dependency parsing. spaCy, Stanza and the rest output exactly the arcs and labels above. There are two classical algorithm families, and knowing the difference explains most of the behaviour you will see.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Transition-based', tag: 'fast, greedy', body: 'Walk through the sentence once, deciding at each step to shift a word onto a stack or to attach two words with an arc. Linear time, and a wrong early decision cannot be undone unless the parser searches.' },
            { title: 'Graph-based', tag: 'slower, global', body: 'Score every possible arc between every pair of words, then find the highest-scoring tree that covers all of them. More accurate on long sentences, and more expensive.' },
          ],
        },
        {
          t: 'p',
          text: 'Both produce a tree that must satisfy two conditions: every word has exactly one head, and the arcs form no cycles. A third condition, **projectivity** (no arc crosses another when drawn above the sentence), holds in most English sentences and fails in plenty of others, which is why some parsers allow non-projective arcs and some do not.',
        },
        {
          t: 'example',
          title: 'A non-projective sentence',
          lines: [
            { label: 'Sentence', text: '*A hearing is scheduled on the issue today.*' },
            { label: 'Problem', text: '*on the issue* modifies *hearing*, but *is scheduled* sits between them.' },
            { label: 'Drawing', text: 'The arc from *hearing* to *issue* has to cross the arc from *scheduled* to *today*.' },
            { label: 'So what', text: 'Non-projective structures are rare in English and common in Czech, German and Hindi. A parser trained only on projective English will quietly mangle them.' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Why this is worth a teacher knowing',
          text: 'Grammar checkers, readability tools and the thing marking your students’ writing all run on parses like these. When a tool flags a correct sentence, it is usually because the parser attached one arc wrongly. Being able to see the arc is the difference between trusting the tool and using it.',
        },
      ],
    },
    {
      id: 'choosing',
      title: 'Which framework, and when',
      blocks: [
        {
          t: 'table',
          head: ['Question', 'Constituency', 'Dependency'],
          rows: [
            ['Where does this comma go?', 'Clearer: the clause boundary is a node.', 'Workable but indirect.'],
            ['Why is this sentence ambiguous?', 'Two trees, visibly different.', 'One arc moves. Arguably cleaner.'],
            ['What agrees with what?', 'Indirect: find the head of the subject.', 'Direct: follow the nsubj arc.'],
            ['Can this phrase be moved?', 'Natural: move a node.', 'Harder: movement is not a native idea here.'],
            ['Parsing a free word order language', 'Awkward.', 'Natural.'],
            ['Teaching a secondary class', 'Matches the phrase vocabulary they already have.', 'Fewer labels to learn, but unfamiliar.'],
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"One of them must be wrong"',
          text: 'They answer different questions. Ask what groups with what, and constituency is the better instrument. Ask what governs what, and dependency is. A good deal of syntax over the last forty years has consisted of each tradition borrowing the other’s better ideas.',
        },
        {
          t: 'checklist',
          items: [
            'Can you name the root of a sentence without hesitating?',
            'Can you say why *the* depends on *papers* rather than the other way round?',
            'Can you explain what changes in the labels when a clause goes passive?',
            'Can you convert a simple constituency tree into arcs by taking the head of each phrase?',
            'Can you spot a non-projective sentence by trying to draw it?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Lucien Tesnière, Éléments de syntaxe structurale (1959), the founding work, translated into English in 2015.',
    'de Marneffe et al., Universal Dependencies (Computational Linguistics, 2021), the current label scheme and its rationale.',
    'Joakim Nivre, Dependency Grammar and Dependency Parsing (2005), a clear technical introduction to both algorithm families.',
    'Jurafsky and Martin, Speech and Language Processing (3rd edn draft), chapter on dependency parsing.',
  ],
  related: [
    'grammar/systems/syntax-trees',
    'grammar/systems/typology',
    'grammar/sentences/subject-predicate-object',
    'grammar/verbs/active-and-passive',
  ],
}

export default guide
