import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The [twelve tenses](@grammar/verbs/tenses-overview) are a teaching device, and a good one. They are not a description of English. English has **two** inflected tenses, past and present, and everything else in that table is aspect, modality or voice stacked on top in a fixed order. Seeing the system underneath makes the table make sense, and explains the things the table cannot: why *will* is not a tense, why *I am going tomorrow* is grammatical, and why only the first word of a verb group ever shows tense.',
  nutshell: [
    'English has two **tenses**: past and non-past. Only one element of the verb group carries it, and it is always the first one.',
    '**Aspect** is not time but shape: whether a situation is viewed as complete, ongoing or relevant now.',
    '**Modality** is the speaker’s stance: how likely, how obligatory, how willing.',
    'The verb group assembles in a **fixed order**: modal, perfect *have*, progressive *be*, passive *be*, lexical verb.',
    'Each element determines the **form of the next**: a modal takes a bare infinitive, perfect *have* takes a past participle, progressive *be* takes *-ing*.',
    'There is **no future tense** in English. The future is built from modals and from present forms, which is why there are so many ways to say it.',
  ],
  sections: [
    {
      id: 'two-tenses',
      title: 'Two tenses, not twelve',
      blocks: [
        {
          t: 'p',
          text: 'A tense, strictly, is a change in the **form of the verb** that marks time. Apply that test to English and you find exactly two: *walk / walked*, *write / wrote*, *is / was*. There is no third form of any English verb meaning "will walk". The future is made with a separate word, and that word is a modal.',
        },
        {
          t: 'table',
          head: ['Form', 'Is it a tense?', 'Why'],
          rows: [
            ['walked', 'Yes', 'The verb itself changed.'],
            ['walks', 'Yes (non-past)', 'The verb itself changed, for person and number.'],
            ['will walk', 'No', 'The verb is unchanged. *Will* is a modal auxiliary, from the same set as *can* and *must*.'],
            ['is walking', 'No', 'Present tense on *is*, plus progressive aspect. Two separate choices.'],
            ['has walked', 'No', 'Present tense on *has*, plus perfect aspect.'],
            ['had been walking', 'Past tense on *had*, plus perfect, plus progressive', 'One tense, two aspects.'],
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"But we teach twelve tenses"',
          text: 'And you should keep doing it. The twelve-cell table is the right pedagogical tool for a learner who needs to produce the forms. This guide is not an argument for throwing it away, it is the explanation of what the table is a picture of, which is a three-by-four grid of tense crossed with aspect. Knowing that is what lets you answer the questions the table raises and cannot settle.',
        },
      ],
    },
    {
      id: 'aspect',
      title: 'Aspect: the shape of a situation',
      blocks: [
        {
          t: 'p',
          text: 'Tense locates a situation in time relative to now. **Aspect** says how you are looking at it: as a complete whole, as something ongoing, or as something whose relevance reaches into the present. Two sentences can share a tense and differ entirely in aspect.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Simple', tag: 'no aspect marked', body: '*I marked the papers.* A bounded whole. The default, and the one that carries narrative forward.' },
            { title: 'Progressive', tag: 'be + -ing', body: '*I was marking the papers.* Viewed from the inside, in progress, with no implication that it finished. This is why it makes such good background for another event.' },
            { title: 'Perfect', tag: 'have + past participle', body: '*I have marked the papers.* Not a past tense: a present state resulting from a past event. The relevance is now, which is why *I have marked them yesterday* is wrong.' },
            { title: 'Perfect progressive', tag: 'have been + -ing', body: '*I have been marking the papers.* Both at once: ongoing, and with present relevance. Often carries a sense of the activity leaving traces.' },
          ],
        },
        {
          t: 'example',
          title: 'Why aspect, not tense, is doing the work',
          lines: [
            { label: 'Both past', text: '*I was marking when the bell rang.*' },
            { label: 'Analysis', text: 'Both verbs are past tense. The progressive on the first makes it the frame; the simple on the second makes it the event inside the frame.' },
            { label: 'Swap them', text: '*I marked when the bell was ringing.* Same tense, aspects exchanged, and now the marking is the brief event and the ringing is the background.' },
            { label: 'Conclusion', text: 'Nothing about time changed. The relationship between the two situations changed, and aspect is what encoded it.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Aspect and verb meaning interact',
          text: 'Some verbs resist the progressive: *I am knowing the answer* is wrong, and *I am loving it* reads as deliberately informal. These are **stative** verbs, which describe states rather than activities, and a state has no internal progress to view. The rule is not arbitrary, it follows from what progressive aspect means.',
        },
      ],
    },
    {
      id: 'order',
      title: 'The verb group assembles in one order',
      blocks: [
        {
          t: 'p',
          text: 'This is the structural heart of the system, and it is completely rigid. Every element is optional, but those that appear must appear in this sequence.',
        },
        {
          t: 'flow',
          title: 'The order of the English verb group',
          nodes: [
            { label: 'Modal', sub: 'will, can, must', tone: 'human' },
            { label: 'Perfect', sub: 'have', tone: 'process' },
            { label: 'Progressive', sub: 'be ... -ing', tone: 'process' },
            { label: 'Passive', sub: 'be ... -ed/-en', tone: 'process' },
            { label: 'Lexical verb', sub: 'the actual verb', tone: 'output' },
          ],
          caption: 'Each element forces the form of the one after it. Only the first element is finite, so only the first one shows tense.',
        },
        {
          t: 'p',
          text: 'Run them all at once and you get the longest verb group English allows: *She **will have been being** interviewed.* Nobody says this, but the grammar permits it, and the order cannot be rearranged. *She has will been* is not awkward, it is impossible.',
        },
        {
          t: 'grammar-lab',
          viz: 'tam',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The thing to notice in the lab',
          text: 'Switch the modality on, then switch the tense to past. The sentence barely changes, because the modal has taken the finite slot and modals do not inflect. That is why *could*, *would* and *might* are only sometimes past forms of *can*, *will* and *may*, and more often something else entirely.',
        },
      ],
    },
    {
      id: 'modality',
      title: 'Modality: the speaker steps into the clause',
      blocks: [
        {
          t: 'p',
          text: 'Tense and aspect are about the situation. Modality is about the **speaker’s relationship to it**: how certain they are, what they think should happen, what they are prepared to allow. It is the point where the grammar stops describing the world and starts positioning the person talking.',
        },
        {
          t: 'table',
          head: ['Modal', 'Epistemic (how likely)', 'Deontic (what is permitted or required)'],
          rows: [
            ['must', 'He **must** be home, the light is on.', 'You **must** hand it in on Friday.'],
            ['may', 'It **may** rain later.', 'You **may** leave early.'],
            ['can', 'That **can** happen in winter.', 'You **can** borrow mine.'],
            ['should', 'The parcel **should** have arrived by now.', 'You **should** apologise.'],
            ['will', 'That **will** be the postman.', 'I **will** do it, I promise.'],
          ],
          caption: 'Every core modal is ambiguous between the two readings, and context does all the disambiguating. This is not sloppiness; the same ambiguity shows up in language after language.',
        },
        {
          t: 'p',
          text: 'Modality is a **cline**, not a set of boxes. Between a bare assertion and a flat denial sits a graded scale, and writers move along it constantly: *is*, *must be*, *will be*, *should be*, *may be*, *might be*, *is not*. Academic writing lives in the middle of that scale, which is why hedging is a skill rather than a weakness.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The past of a modal is usually not a past',
          text: '*Could*, *would*, *might* and *should* were historically the past tenses of *can*, *will*, *may* and *shall*. Today they mostly mark tentativeness or distance rather than past time: *Could you help?* is more polite than *Can you help?*, not earlier. Only *could* for past ability (*I could swim at five*) still behaves as a real past.',
        },
      ],
    },
    {
      id: 'future',
      title: 'The future, which is not a tense',
      blocks: [
        {
          t: 'p',
          text: 'Because there is no future inflection, English has to build futurity out of other machinery, and it ended up with at least five ways of doing it. They are not interchangeable, and the differences are about modality and aspect rather than about time.',
        },
        {
          t: 'levels',
          caption: 'Roughly from most detached to most immediate.',
          items: [
            { name: 'will + infinitive', verbs: ['prediction', 'decision now'], body: '*It will rain.* *I will get it.* Neutral prediction, or a decision made at the moment of speaking.' },
            { name: 'be going to', verbs: ['intention', 'present evidence'], body: '*It is going to rain* (look at those clouds). *I am going to resign* (already decided). Grounded in something already present.' },
            { name: 'present progressive', verbs: ['arrangement'], body: '*I am meeting her at four.* An arrangement already in place. The present form is not an error; the arrangement exists now.' },
            { name: 'present simple', verbs: ['timetable'], body: '*The train leaves at six.* Fixed by a schedule outside the speaker.' },
            { name: 'be about to / be due to', verbs: ['imminence'], body: '*We are about to start.* Immediate, and often used to interrupt.' },
          ],
        },
        {
          t: 'p',
          text: 'Notice that two of the five use present forms. That is not a quirk: if the future is grammatically just the non-past, then using a present form for a scheduled or arranged future is exactly what you would expect. The twelve-tense table, which gives *will* its own column labelled "future", cannot explain this at all.',
        },
      ],
    },
    {
      id: 'other-languages',
      title: 'How unusual is this?',
      blocks: [
        {
          t: 'p',
          text: 'Having two tenses and a rich aspect system is one option among several. Mandarin has no grammatical tense at all and marks aspect with particles. Spanish inflects for three tenses and distinguishes two past aspects by inflection rather than by auxiliary. Some languages grade the past by distance.',
        },
        {
          t: 'table',
          head: ['Language', 'Tenses marked on the verb', 'How aspect works'],
          rows: [
            ['English', 'Past, non-past', 'Auxiliaries: *have*, *be*'],
            ['Mandarin', 'None', 'Particles: 了 le (completion), 着 zhe (continuous), 过 guo (experienced)'],
            ['Spanish', 'Present, past, future, and more', 'Inflected: preterite against imperfect is a tense ending, not an auxiliary'],
            ['Russian', 'Past, non-past', 'Lexical: most verbs come in perfective and imperfective pairs'],
            ['Malay', 'None', 'Adverbs and particles: *sudah*, *sedang*, *akan*'],
          ],
          caption: 'See [how other languages build grammar](@grammar/systems/typology) for the wider picture.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Singapore English does something interesting here',
          text: 'Colloquial Singapore English marks aspect rather than tense, using *already* for completion and *always* for habitual: *I eat already*, *He always late*. That is not a failure to inflect, it is a system that looks a great deal like the Mandarin, Hokkien and Malay patterns it grew up beside. See [register and Singapore English](@grammar/usage/register-and-singapore-english).',
        },
      ],
    },
    {
      id: 'teaching',
      title: 'Teaching the system behind the table',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Keep the twelve-cell grid for production', body: 'Learners need to make the forms. The grid is the right scaffold for that and this guide does not replace it.' },
            { title: 'Introduce the two axes explicitly', body: 'Draw the grid as tense down the side and aspect across the top, rather than as twelve unrelated names. The same four shapes repeat in each row, and saying so halves the memory load.' },
            { title: 'Teach the order rule as a rule', body: 'Modal, perfect, progressive, passive, verb. Students who know the order stop producing impossible stacks, and can self-correct.' },
            { title: 'Separate the future from tense early', body: 'Teaching *will* as "the future tense" creates the misconception that *I am meeting her at four* is an error. It is not, and the only clean explanation is that the future is not a tense.' },
            { title: 'Use aspect to teach narrative', body: 'Background in the progressive, events in the simple past. This is a writing lesson disguised as a grammar lesson, and it is the one that transfers.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Say "two tenses, four aspects" once the class can produce the forms.',
            'Use the order rule to explain why a wrong stack sounds wrong.',
            'Point out that the perfect is about present relevance, which is why *yesterday* clashes with it.',
            'Show that modality is a scale, with examples from their own writing.',
          ],
          dont: [
            'Call *will* a tense and then be unable to explain *the train leaves at six*.',
            'Teach the perfect as "the past but further back". That is the past perfect, and conflating them causes years of trouble.',
            'Treat stative verbs in the progressive as simply wrong without saying why the rule exists.',
            'Introduce this analysis to a class that cannot yet form the tenses. The system explains the forms; it does not teach them.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Bernard Comrie, Tense (1985) and Aspect (1976), the two standard short monographs.',
    'Rodney Huddleston and Geoffrey Pullum, The Cambridge Grammar of the English Language (2002), chapter 3, for the two-tense analysis of English.',
    'Frank Palmer, Mood and Modality (2nd edn, 2001).',
    'Joan Bybee, Revere Perkins and William Pagliuca, The Evolution of Grammar (1994), on how tense, aspect and modality systems arise.',
  ],
  related: [
    'grammar/verbs/tenses-overview',
    'grammar/verbs/modal-verbs',
    'grammar/verbs/future-forms',
    'grammar/systems/typology',
  ],
}

export default guide
