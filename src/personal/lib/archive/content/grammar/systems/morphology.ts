import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'School grammar starts at the word and works upwards. **Morphology** is the level below: how words themselves are built, out of pieces that carry meaning. It explains why *unhelpfulness* is four morphemes and *mice* is one, why English has only eight inflections left, and why teaching vocabulary in families beats teaching it in lists.',
  nutshell: [
    'A **morpheme** is the smallest unit that carries meaning. *Cats* is two: *cat* and plural *-s*.',
    '**Free** morphemes can stand alone (*help*); **bound** ones cannot (*un-*, *-ness*).',
    '**Derivation** makes a new word, often changing word class: *help* to *helpful* to *unhelpful*.',
    '**Inflection** does not make a new word, it fits the word into its sentence. Modern English has only **eight** inflections.',
    'A morpheme can have several shapes (**allomorphs**): the plural is written *-s* but said three different ways.',
    'Not every word can be cut up. *Mice* fuses root and plural; *cranberry* contains a root that exists nowhere else.',
  ],
  sections: [
    {
      id: 'morpheme',
      title: 'The smallest piece that means something',
      blocks: [
        {
          t: 'p',
          text: 'Take *unhelpfulness*. It is one word, and it has four pieces, each of which contributes something you can state: *un-* reverses, *help* is the core, *-ful* makes an adjective out of a noun, *-ness* makes a noun out of an adjective. Remove any one and the meaning changes predictably. That is the test for a morpheme: it recurs across words with a consistent contribution.',
        },
        {
          t: 'p',
          text: 'Contrast the syllables, which are *un-help-ful-ness* here but need not line up at all. *Mice* is one syllable and carries two meanings; *banana* is three syllables and one morpheme. Syllables are units of sound, morphemes are units of meaning, and confusing them is the most common mistake in this topic.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Free morpheme', def: 'Can stand alone as a word: *help*, *book*, *run*.' },
            { term: 'Bound morpheme', def: 'Must attach to something: *un-*, *-ness*, *-ed*, *-s*.' },
            { term: 'Root', def: 'The core that carries the lexical meaning. Usually free in English, sometimes not.' },
            { term: 'Stem', def: 'Whatever an affix attaches to, which may already contain affixes. In *unhelpfulness*, *helpful* is the stem for *-ness*.' },
            { term: 'Affix', def: 'A bound morpheme attached to a stem: prefix before, suffix after.' },
            { term: 'Allomorph', def: 'One of the variant forms of a single morpheme, chosen by its environment.' },
          ],
        },
        { t: 'grammar-lab', viz: 'morphology' },
      ],
    },
    {
      id: 'two-kinds',
      title: 'Derivation and inflection',
      lead: 'The single most useful distinction in the whole topic.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Derivation', 'Inflection'],
          rows: [
            ['Makes a new word?', 'Yes. *Teach* and *teacher* are separate dictionary entries.', 'No. *Teacher* and *teachers* are one word, two forms.'],
            ['Changes word class?', 'Often: verb to noun, noun to adjective.', 'Never.'],
            ['Meaning', 'Can be unpredictable: a *transmission* is not simply "the act of transmitting".', 'Always regular: plural means more than one, every time.'],
            ['How many in English?', 'Hundreds, and still growing.', 'Exactly eight.'],
            ['Position', 'Closer to the root.', 'Always outermost. Nothing follows an inflection.'],
            ['Optional?', 'Yes. You need not derive anything.', 'No. The grammar demands it: *three cat* is ungrammatical.'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The eight survivors',
          text: 'Plural *-s*, possessive *-’s*, third person singular *-s*, past tense *-ed*, past participle *-en*, progressive *-ing*, comparative *-er*, superlative *-est*. That is the complete inflectional system of modern English. Old English had dozens; see [why English grammar is like this](@grammar/systems/typology) for where they went.',
        },
        {
          t: 'p',
          text: 'The ordering rule follows from the table and is worth stating on its own: **derivation happens first, inflection last**. You can have *teach + er + s* but never *teach + s + er*. Inflection closes the word, which is why a plural is always at the end and never in the middle.',
        },
        {
          t: 'example',
          title: 'Reading a long word from the inside out',
          lines: [
            { label: 'Word', text: 'denationalisations' },
            { label: 'Root', text: '*nation*, a free morpheme.' },
            { label: 'Step 1', text: '*nation + al* makes an adjective: relating to a nation.' },
            { label: 'Step 2', text: '*national + ise* makes a verb: make into a nation’s.' },
            { label: 'Step 3', text: '*de + nationalise* reverses it.' },
            { label: 'Step 4', text: '*denationalise + ation* makes a noun: the act of reversing it.' },
            { label: 'Step 5', text: '*+ s*, the inflection, last as always.' },
          ],
        },
      ],
    },
    {
      id: 'allomorphy',
      title: 'One morpheme, several shapes',
      blocks: [
        {
          t: 'p',
          text: 'Say these out loud: *cats*, *dogs*, *horses*. The spelling suggests one ending. Your mouth produces three: /s/, /z/ and /ɪz/. These are **allomorphs** of the plural morpheme, and the choice is entirely automatic, governed by the sound before it.',
        },
        {
          t: 'table',
          head: ['Preceding sound', 'Allomorph', 'Examples'],
          rows: [
            ['Voiceless consonant (p, t, k, f, θ)', '/s/', 'cats, books, cliffs'],
            ['Voiced sound (b, d, g, vowels, l, m, n, r)', '/z/', 'dogs, cars, days, bills'],
            ['Sibilant (s, z, ʃ, tʃ, dʒ)', '/ɪz/', 'horses, buzzes, churches, bridges'],
          ],
          caption: 'The same three-way split governs the past tense: *walked* /t/, *played* /d/, *wanted* /ɪd/.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Why this helps a teacher',
          text: 'Students who are learning English, and young writers generally, often drop the plural or past ending exactly where it is least audible. Knowing that the ending has three pronunciations, and that the hard case is the sibilant one, turns "careless" into a specific and teachable thing.',
        },
        {
          t: 'p',
          text: 'Allomorphy also runs in the other direction. The negative prefix is *in-* before most roots, but *im-* before *p* and *b* (*impossible*, *imbalance*), *il-* before *l* (*illegal*), and *ir-* before *r* (*irregular*). One morpheme, four shapes, chosen by the sound that follows. Nobody is taught this and almost everyone gets it right.',
        },
      ],
    },
    {
      id: 'building',
      title: 'How English makes new words',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Affixation', tag: 'the main route', body: 'Add a prefix or suffix: *unfriend*, *deplatform*, *bingeable*. Productive and endless.' },
            { title: 'Compounding', tag: 'very common', body: 'Join two free roots: *laptop*, *homework*, *greenhouse*. Stress usually shifts to the first element, which is how you hear *bláckbird* (a species) against *black bírd* (any dark bird).' },
            { title: 'Conversion', tag: 'no change at all', body: 'Move a word to a new class without touching it: *to google*, *to text*, *a read*, *to chair a meeting*. English does this constantly and other languages find it strange.' },
            { title: 'Clipping', tag: 'shortening', body: '*Exam*, *maths*, *fridge*, *app*. The clipped form often outlives the full one.' },
            { title: 'Blending', tag: 'portmanteau', body: '*Brunch*, *smog*, *motel*, *podcast*. Two words overlapped rather than joined.' },
            { title: 'Acronym and initialism', tag: 'from letters', body: '*NASA* and *laser* are said as words; *BBC* and *HDB* are spelled out. Some go further: *laser* and *radar* are now ordinary nouns nobody expands.' },
            { title: 'Backformation', tag: 'running the rule backwards', body: '*Editor* existed first, so *edit* was invented by removing an ending that was never there. Also *burgle* from *burglar*, *donate* from *donation*.' },
            { title: 'Borrowing', tag: 'from other languages', body: 'English is roughly 60% borrowed. In Singapore English, *kiasu*, *makan* and *shiok* are the live edge of the same process.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Productivity',
          text: 'Some affixes are **productive**, meaning they attach freely to new words: *-ness*, *un-*, *-able*. Others are frozen: *-th* made *warmth* and *width* centuries ago and will not make *coolth* today. A student coining *unfriendable* has correctly identified two productive affixes, which is worth saying before correcting anything.',
        },
      ],
    },
    {
      id: 'awkward',
      title: 'Words that will not divide',
      blocks: [
        {
          t: 'p',
          text: 'Morphology is tidy until it is not. Several kinds of word resist being cut into morphemes, and each resistance is informative.',
        },
        {
          t: 'levels',
          caption: 'Roughly in order of how badly each one breaks the neat picture.',
          items: [
            { name: 'Fusion', verbs: ['mice', 'feet', 'sang'], body: 'Root and inflection are fused into one indivisible form. The plural of *mouse* is not *mouse* plus anything; the vowel simply changes. Linguists call this a **portmanteau morph**.' },
            { name: 'Zero marking', verbs: ['sheep', 'cut'], body: 'The plural of *sheep* is *sheep*, and the past of *cut* is *cut*. The morpheme is present in the grammar and absent from the sound, which is awkward for a theory built on pieces you can point at.' },
            { name: 'Bound roots', verbs: ['cranberry', 'receive'], body: '*Cran-* occurs in exactly one word. *-ceive* occurs in *receive*, *deceive*, *conceive* and nowhere free, and nobody can say what it means on its own.' },
            { name: 'Suppletion', verbs: ['go / went', 'good / better'], body: 'The forms come from unrelated roots entirely. *Went* was originally the past tense of *wend*. The grammar relates them; the morphology cannot.' },
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"Every word can be broken into morphemes"',
          text: 'It cannot, and the exceptions are not failures of analysis. They are what happens to a language over a thousand years of sound change: the pieces wear down and fuse. The fact that the irregular verbs are also the most frequent ones is not a coincidence, it is the mechanism. High frequency protects an irregular form from being regularised.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'Why this is worth classroom time',
      blocks: [
        {
          t: 'p',
          text: 'Morphology is the highest-leverage vocabulary teaching there is, because affixes are a finite set that does the same job every time. A student who knows thirty prefixes and suffixes can take a reasonable guess at thousands of words they have never seen, which is exactly the skill an unseen comprehension passage tests.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Teach families, not lists', body: '*Act, action, active, activate, activity, react, reaction, inactive* is one lesson, not eight. The word builder above is doing this deliberately.' },
            { title: 'Teach the twenty affixes that pay', body: 'A small number of prefixes (*un-, re-, in-, dis-, pre-, mis-*) and suffixes (*-tion, -ity, -ness, -able, -ment, -ful*) cover an enormous share of academic vocabulary.' },
            { title: 'Use the class-changing suffixes for writing', body: '*-tion*, *-ment* and *-ity* are the machinery of nominalisation. Teaching them here and then meeting them again in [functional grammar](@grammar/systems/functional) makes both lessons land.' },
            { title: 'Make spelling rules follow from morphology', body: '*Hoping* and *hopping* differ because of what the suffix does to the stem, not because of an arbitrary rule. See [spelling rules and patterns](@grammar/usage/spelling-rules).' },
            { title: 'Let them coin words', body: 'Asking students to invent a word and justify its pieces tests the understanding better than any identification exercise.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Can you say how many morphemes are in *unbelievably* and name each one?',
            'Can you explain why *teachers* cannot be *teachser*?',
            'Can you give the three pronunciations of the plural and say what picks each?',
            'Can you name four ways English makes a new word without using an affix?',
            'Can you say why *went* is a problem for morphology?',
          ],
        },
      ],
    },
  ],
  sources: [
    'Andrew Carstairs-McCarthy, An Introduction to English Morphology (2002), short and very clear.',
    'Laurie Bauer, English Word-Formation (1983), the standard treatment of productivity and word-formation processes.',
    'Rochelle Lieber, Introducing Morphology (2nd edn, 2015), a current undergraduate introduction.',
    'Nagy and Anderson, How Many Words Are There in Printed School English? (1984), the evidence behind teaching word families.',
  ],
  related: [
    'grammar/parts-of-speech/nouns',
    'grammar/usage/spelling-rules',
    'grammar/systems/tense-aspect-mood',
    'grammar/systems/functional',
  ],
}

export default guide
