import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost every rule on this shelf is a decision English made, and most of them could have gone another way. **Typology** is the study of how languages vary and what limits that variation. It is worth a teacher’s time for one reason above all: it turns "that is just how English works" into an answer with content, and it takes the sting out of a student whose first language works differently.',
  nutshell: [
    'All six logically possible orders of subject, object and verb exist, but **SOV** and **SVO** account for about three quarters of languages.',
    'Word order and **case marking** trade off: the more a language marks roles on the noun, the freer its order can be.',
    '**Alignment** decides what counts as a subject. The ergative pattern groups the arguments differently and is not rare.',
    'Many languages require a **classifier** to count, and about a quarter grammatically require you to say **how you know**.',
    'English looks the way it does because it **lost its case endings**, and almost everything distinctive about its grammar follows from that.',
    'Typology is the strongest cure for the assumption that English grammar is logic.',
  ],
  sections: [
    {
      id: 'variation',
      title: 'The space of possible grammars',
      blocks: [
        {
          t: 'p',
          text: 'Start with a fact that surprises most people: there are around seven thousand living languages, and the structural differences between them are far larger than the differences between English and the European languages taught alongside it. A grammar built only on English and French is a sample of two.',
        },
        {
          t: 'p',
          text: 'Typologists work from large samples, most famously the **World Atlas of Language Structures**, which maps a few hundred features across more than two thousand languages. The point is not to collect curiosities but to find out which combinations occur and which never do. The gaps are the interesting part, because a gap suggests a constraint.',
        },
        { t: 'grammar-lab', viz: 'typology' },
      ],
    },
    {
      id: 'word-order',
      title: 'Word order, and what hangs off it',
      blocks: [
        {
          t: 'p',
          text: 'English is rigidly subject-verb-object, and about a third of languages agree. Slightly more are subject-object-verb, putting the verb at the end. Between them those two cover roughly three quarters of the sample, and the shared feature is that the subject comes first.',
        },
        {
          t: 'p',
          text: 'What makes order worth studying is that it **correlates with other things**. Joseph Greenberg noticed in 1963 that verb-final languages tend to have postpositions rather than prepositions, to put genitives before nouns, and to put auxiliaries after main verbs. The whole package tends to travel together, which suggests languages prefer to be consistent about whether heads come before or after their dependents.',
        },
        {
          t: 'table',
          head: ['Feature', 'Head-initial (English, Thai)', 'Head-final (Japanese, Turkish)'],
          rows: [
            ['Verb and object', 'eat rice', 'rice eat'],
            ['Adposition', 'preposition: *in the house*', 'postposition: *house in*'],
            ['Noun and relative clause', 'the book **that I read**', '**I read** book'],
            ['Auxiliary and verb', '*has eaten*', '*eaten has*'],
            ['Possessor', 'the roof **of the house**', '**house-of** roof'],
          ],
          caption: 'The tendency is strong but not absolute. Mandarin is famously inconsistent, which is itself a well-studied puzzle.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Useful in a Singapore classroom',
          text: 'A student whose home language is Mandarin, Malay or Tamil is not making random errors. Mandarin puts relative clauses before the noun, Malay puts adjectives after it, and Tamil is verb-final with postpositions. Errors in English that look careless often turn out to be a faithful transfer of a perfectly regular rule from another system.',
        },
      ],
    },
    {
      id: 'case',
      title: 'Case, and the bargain English made',
      blocks: [
        {
          t: 'p',
          text: 'A case system marks a noun’s role on the noun itself. If the ending tells you who did what, position does not have to, and the words can be rearranged for emphasis. Latin is the familiar example; Finnish, with fifteen cases, is the more impressive one.',
        },
        {
          t: 'example',
          title: 'What the endings buy you',
          lines: [
            { label: 'Latin', text: '*Puella puerum amat* / *Puerum puella amat* / *Amat puerum puella*.' },
            { label: 'All three', text: 'The girl loves the boy. The *-a* marks the subject, the *-um* marks the object.' },
            { label: 'English', text: '*The girl loves the boy* and *The boy loves the girl* are different sentences, because position is all we have.' },
            { label: 'Except', text: 'English kept case in the pronouns: *she / her*, *he / him*, *who / whom*. That is why *Him I like* is possible and *The boy I like* is harder to parse.' },
          ],
        },
        {
          t: 'p',
          text: 'Old English had four or five cases and much freer word order. Over several centuries the unstressed endings wore away, partly through ordinary sound change and partly, on the usual account, through intensive contact with Old Norse, where the roots were similar and the endings were not. As the endings went, word order had to harden to carry the information, and it did.',
        },
        {
          t: 'diagram',
          title: 'One loss, many consequences',
          nodes: [
            { id: 'loss', label: 'Case endings erode', sub: 'c. 1000 to 1400', col: 1, row: 0, shape: 'pill', tone: 'ink', w: 2 },
            { id: 'order', label: 'Word order fixes', sub: 'SVO becomes obligatory', col: 0, row: 1, tone: 'orange' },
            { id: 'prep', label: 'Prepositions take over', sub: 'of, to, by do the old work', col: 2, row: 1, tone: 'teal' },
            { id: 'dummy', label: 'Dummy subjects appear', sub: '*it* rains, *there* is', col: 0, row: 2, tone: 'orange' },
            { id: 'do', label: 'do-support', sub: 'did you go?', col: 1, row: 2, tone: 'mustard' },
            { id: 'whom', label: '*whom* becomes fragile', sub: 'the last case ending standing', col: 2, row: 2, tone: 'teal' },
          ],
          edges: [
            { from: 'loss', to: 'order' },
            { from: 'loss', to: 'prep' },
            { from: 'order', to: 'dummy' },
            { from: 'order', to: 'do' },
            { from: 'prep', to: 'whom' },
          ],
          caption: 'Several rules that look unrelated in a school grammar are the same event seen from different angles.',
        },
      ],
    },
    {
      id: 'alignment',
      title: 'Alignment: what a subject even is',
      blocks: [
        {
          t: 'p',
          text: 'This is the one that genuinely unsettles people, and it is worth sitting with. Take three roles: **S**, the single argument of an intransitive verb (*she **ran***); **A**, the agent of a transitive verb (***she** saw him*); and **P**, the patient (*she saw **him***). A language has to decide which of these to treat alike.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Nominative-accusative', tag: 'English, Japanese, Latin', body: 'S and A are marked the same way and called the subject; P is marked differently. *She* ran, *she* saw *him*. This feels inevitable if it is the only system you know.' },
            { title: 'Ergative-absolutive', tag: 'Basque, Inuktitut, Dyirbal', body: 'S and P are marked the same way; A gets a special ergative marking. The man who came and the boy who was seen take the same form, and the seer is the odd one out.' },
          ],
        },
        {
          t: 'p',
          text: 'Roughly a quarter of the world’s languages have ergative features. Some are split: Hindi is ergative in the perfective and accusative elsewhere, so the same speaker uses both patterns depending on the aspect of the verb. There is no sense in which one alignment is more logical. They are different answers to the question of which arguments pattern together.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Why this matters beyond trivia',
          text: '"The subject" is one of the most fundamental ideas in school grammar, and it is not a universal category. It is the name a nominative-accusative language gives to the grouping it happens to make. Knowing that is a considerable protection against teaching a language-particular fact as though it were a fact about thinking.',
        },
      ],
    },
    {
      id: 'other',
      title: 'Three more things English does not do',
      blocks: [
        {
          t: 'levels',
          caption: 'Each of these is obligatory somewhere, and each is something English speakers do optionally with words rather than grammar.',
          items: [
            {
              name: 'Classifiers',
              verbs: ['Mandarin', 'Thai', 'Japanese', 'Malay'],
              body: 'You cannot just count a noun. You need a classifier chosen by the kind of thing: 三本书 *sān běn shū*, three volume-classifier book. English does the same thing for uncountables (*two slices of bread*, *three head of cattle*) without noticing it is a system.',
            },
            {
              name: 'Evidentiality',
              verbs: ['Turkish', 'Quechua', 'Tariana'],
              body: 'The verb must say how you know: seen, heard, inferred or reported. Turkish *geldi* means he came and I saw it; *gelmiş* means he came, apparently. Leaving it out is ungrammatical, not merely vague. English has *apparently* and *I heard*, and they are optional.',
            },
            {
              name: 'Honorific marking',
              verbs: ['Japanese', 'Korean', 'Javanese'],
              body: 'The relative status of speaker, listener and referent is marked in the verb and the vocabulary. You cannot form a sentence without taking a position on the relationship. English does this with register, which is a choice rather than an inflection.',
            },
          ],
        },
        {
          t: 'p',
          text: 'The common thread is that every language forces you to specify some things and lets you leave others vague, and languages disagree about which. Roman Jakobson put it well: languages differ essentially in what they **must** convey, not in what they may convey.',
        },
      ],
    },
    {
      id: 'universals',
      title: 'What is actually universal',
      blocks: [
        {
          t: 'p',
          text: 'After all that variation, is anything shared? Some things look very close to universal, though the field argues about every item and about whether the apparent universals are facts about grammar or about communication.',
        },
        {
          t: 'checklist',
          items: [
            'Every language has nouns and verbs, or at least a distinction doing that work.',
            'Every language can form questions, negate a statement and give a command.',
            'Every language has a way of embedding one clause inside another, though the mechanism varies widely.',
            'Every language has pronouns distinguishing speaker from listener.',
            'No language relies on counting words to mark grammar (there is no language where the fifth word is the object).',
            'Implicational universals hold widely: if a language has a dual number, it has a plural; if it has reflexive marking on the object, it has it on the subject.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Treat universals carefully',
          text: 'Several famous candidates have fallen. Recursion was long claimed as a defining universal until the Pirahã controversy; the universality of colour term hierarchies and of the noun-verb distinction has both been challenged. The honest position is that the sample is thin, biased towards written and European languages, and that most of the reliable findings are **tendencies with explanations** rather than laws.',
        },
      ],
    },
    {
      id: 'classroom',
      title: 'Bringing this into a classroom',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start from the languages in the room', body: 'In most Singapore classrooms there are speakers of Mandarin, Malay, Tamil and at least one dialect. Ask how each marks plural, or past, or a question. The comparison does itself.' },
            { title: 'Reframe interference as transfer', body: 'A student who writes *he go yesterday* may be applying a perfectly regular rule from a language that marks time with adverbs. Naming that is more useful, and more respectful, than marking it careless.' },
            { title: 'Use one feature, not the whole field', body: 'Word order alone is enough for a lesson. Alignment is fascinating and will lose a secondary class in four minutes.' },
            { title: 'Let it explain an English oddity', body: 'Why *whom* is dying, why English needs *do* in questions, why we say *the roof of the house* rather than *the house roof*. All of these have historical typological answers.' },
            { title: 'Finish with the point', body: 'English grammar is not logic, and it is not superior. It is one coherent system among thousands, with a history that explains its shape.' },
          ],
        },
        {
          t: 'quote',
          text: 'Languages differ essentially in what they must convey and not in what they may convey.',
          by: 'Roman Jakobson, 1959',
        },
      ],
    },
  ],
  sources: [
    'Dryer and Haspelmath (eds), The World Atlas of Language Structures Online (wals.info), the standard reference for the distributions cited here.',
    'Joseph Greenberg, Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements (1963).',
    'Lindsay Whaley, Introduction to Typology (1997), a readable survey.',
    'Nicholas Evans and Stephen Levinson, The Myth of Language Universals (Behavioral and Brain Sciences, 2009), for the sceptical case.',
    'Guy Deutscher, Through the Language Glass (2010), for the popular treatment of what languages oblige you to say.',
  ],
  related: [
    'grammar/systems/dependency',
    'grammar/systems/tense-aspect-mood',
    'grammar/usage/register-and-singapore-english',
    'grammar/systems/morphology',
  ],
}

export default guide
