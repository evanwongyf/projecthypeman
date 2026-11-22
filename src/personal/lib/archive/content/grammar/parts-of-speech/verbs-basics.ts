import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **verb** tells you what happens or what is: an action (*run, write*), a state (*know, belong*) or a link between a subject and a description (*is, seems*). Every complete sentence needs at least one verb that has a subject and shows tense. This guide covers the kinds of verb and the forms each verb takes; the tenses themselves have their own section of the shelf.',
  nutshell: [
    '**Action verbs** show something being done; **state verbs** show a condition (*know, love, own*); **linking verbs** join the subject to a description (*She **is** tired*).',
    '**Auxiliary (helping) verbs** *be, have, do* and the **modals** (*can, will, must...*) combine with a main verb: *has been waiting*.',
    '**Transitive** verbs take an object (she **wrote** a letter); **intransitive** verbs do not (he **slept**). Many verbs can be both.',
    'Every verb has five forms: base (*go*), -s (*goes*), past (*went*), past participle (*gone*) and -ing (*going*).',
    'Regular verbs add *-ed* for past and past participle; **irregular** verbs do not (*sing, sang, sung*).',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Action, state and linking verbs',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'What it does', 'Examples'],
          rows: [
            ['Action (dynamic)', 'Something physical or mental is done', 'run, write, jump, think, build, shout, eat, decide, throw, read'],
            ['State (stative)', 'A condition, feeling, possession or belief that lasts', 'know, believe, love, hate, own, belong, contain, prefer, understand, need'],
            ['Linking (copular)', 'Joins the subject to a word that describes or renames it', 'be, seem, appear, become, look, feel, sound, taste, smell, remain, grow, get'],
          ],
        },
        {
          t: 'example',
          title: 'Linking verbs at work',
          lines: [
            { label: 'be', text: 'The soup **is** hot. My brother **is** a nurse.' },
            { label: 'seem / appear', text: 'She **seems** calm. The results **appear** accurate.' },
            { label: 'become / grow / get', text: 'He **became** a pilot. It **grew** dark. I **got** tired.' },
            { label: 'Sense verbs', text: 'You **look** happy. This **smells** strange. The music **sounds** loud. The cake **tastes** sweet. I **feel** ill.' },
            { label: 'remain / stay', text: 'The shop **remained** open. Please **stay** calm.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The “is” test for linking verbs',
          text: 'Swap the verb for *is* (or *was*). If the sentence still makes sense, it is probably a linking verb. “The milk **smells** sour” → “The milk **is** sour”: linking. “The dog **smells** the food” → “The dog **is** the food”: nonsense, so here *smells* is an action verb.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Feel bad, not feel badly',
          text: 'After a linking verb you need an **adjective**, not an adverb, because the word describes the subject: “I feel **bad**”, “It tastes **good**”, “She looks **beautiful**”. “I feel *badly*” would describe how you perform the act of feeling, as with numb fingers. See [Adverbs](@grammar/parts-of-speech/adverbs).',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'State verbs and -ing',
          text: 'State verbs are not usually used in continuous tenses: “I **know** the answer” (not *I am knowing*), “This bag **belongs** to me” (not *is belonging*). Some have an action meaning too, and then -ing is fine: “I **have** a car” (state) but “I **am having** lunch” (action); “I **think** you are right” (opinion) but “I **am thinking** about it” (process).',
        },
      ],
    },
    {
      id: 'auxiliary',
      title: 'Main verbs and auxiliary verbs',
      blocks: [
        {
          t: 'p',
          text: 'A **main verb** carries the meaning. An **auxiliary** (helping) verb comes before it to add tense, aspect, voice, mood, questions or negatives. A string of auxiliaries plus a main verb is a **verb phrase**: *might **have been** going*.',
        },
        {
          t: 'table',
          head: ['Auxiliary', 'Job', 'Examples'],
          rows: [
            ['be', 'Continuous tenses and the passive', 'She **is** reading. They **were** playing. It **was** built in 1890. The match **is being** shown live. I **am** leaving. We **were** told. You **are** making progress. It **will be** finished.'],
            ['have', 'Perfect tenses', 'I **have** finished. She **had** left. They **will have** arrived. He **has** been working. We **have** eaten. You **had** forgotten. It **has** stopped. They **have** gone.'],
            ['do', 'Questions, negatives and emphasis in simple tenses', '**Do** you agree? She **does** not eat meat. **Did** they call? I **did** lock it! He **doesn’t** know. **Does** it matter? We **didn’t** see. I **do** like it.'],
            ['Modals', 'Ability, possibility, obligation, permission, prediction', 'I **can** swim. It **might** rain. You **must** stop. **May** I sit? She **will** help. You **should** rest. He **could** be right. We **would** go.'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Be, have and do can be main verbs too',
          text: '“She **is** a doctor” (main verb *be*). “I **have** two sisters” (main verb *have*). “He **does** his homework” (main verb *do*). In “**Did** you **do** it?”, the first *did* is an auxiliary and *do* is the main verb.',
        },
        {
          t: 'p',
          text: 'Modals behave differently from other verbs: they have no -s form (*she can*, not *she cans*), they are followed by the bare base form (*must go*, not *must to go*), and they have no -ing or past participle. The full story is in [Modal verbs](@grammar/verbs/modal-verbs).',
        },
      ],
    },
    {
      id: 'transitive',
      title: 'Transitive and intransitive',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Pattern', 'Examples'],
          rows: [
            ['Transitive', 'Verb + object (ask “what?” or “whom?”)', 'She **wrote** a letter. I **need** help. They **built** a bridge. He **kicked** the ball. We **love** music. You **broke** my pen. The cat **caught** a mouse. Sam **bought** bread.'],
            ['Intransitive', 'No object possible', 'He **slept**. The baby **cried**. They **arrived** late. Prices **rose**. She **laughed**. The guests **left**. It **happened** yesterday. We **waited**.'],
            ['Both', 'Same verb, with or without an object', 'She **sings** (well) / She **sings** jazz. I **read** every night / I **read** the paper. The door **opened** / He **opened** the door. The ice **melted** / The sun **melted** the ice.'],
            ['Ditransitive', 'Two objects: indirect + direct', 'She **gave** me a pen. He **sent** his mum flowers. **Show** us the photo. I **told** them the truth. They **offered** her a job. **Pass** me the salt. We **bought** Dad a gift. **Lend** me a pound.'],
          ],
        },
        {
          t: 'example',
          title: 'Lie and lay: the famous pair',
          lines: [
            { label: 'lie (intransitive)', text: 'to recline: I **lie** down, I **lay** down yesterday, I have **lain** here all day.' },
            { label: 'lay (transitive)', text: 'to put something down: I **lay** the book on the table, I **laid** it there yesterday, I have **laid** the table.' },
            { label: 'lie (tell untruths)', text: 'regular: he **lies**, he **lied**, he has **lied**.' },
            { label: 'Test', text: 'If you could add *something* (lay *something* down), use *lay*. Hens **lay** eggs; people **lie** on beaches.' },
          ],
        },
        {
          t: 'p',
          text: 'The same distinction separates *rise* (intransitive: prices **rise**) from *raise* (transitive: they **raise** prices), and *sit* (I **sit**) from *set* (I **set** the table).',
        },
      ],
    },
    {
      id: 'forms',
      title: 'The five verb forms, regular and irregular',
      blocks: [
        {
          t: 'table',
          head: ['Base', '-s form', 'Past', 'Past participle', '-ing form'],
          rows: [
            ['walk', 'walks', 'walked', 'walked', 'walking'],
            ['play', 'plays', 'played', 'played', 'playing'],
            ['study', 'studies', 'studied', 'studied', 'studying'],
            ['stop', 'stops', 'stopped', 'stopped', 'stopping'],
            ['go', 'goes', 'went', 'gone', 'going'],
            ['take', 'takes', 'took', 'taken', 'taking'],
            ['write', 'writes', 'wrote', 'written', 'writing'],
            ['sing', 'sings', 'sang', 'sung', 'singing'],
            ['put', 'puts', 'put', 'put', 'putting'],
            ['be', 'is (am, are)', 'was / were', 'been', 'being'],
          ],
          caption: 'The first four rows are regular; the rest are irregular. *Be* is the most irregular verb in English.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Base form', def: 'The dictionary form: used after *to*, after modals and in the present (*I walk*, *to walk*, *can walk*).' },
            { term: '-s form', def: 'Present tense with *he, she, it* or a singular noun: *she walks*, *the dog barks*.' },
            { term: 'Past', def: 'Finished past time on its own: *I walked*, *she went*.' },
            { term: 'Past participle', def: 'Used after *have* (perfect) and *be* (passive): *I have walked*, *it was taken*.' },
            { term: '-ing form (present participle or gerund)', def: 'Continuous tenses (*is walking*), or as a noun (*Walking is good exercise*).' },
          ],
        },
        {
          t: 'table',
          head: ['Spelling rule for -ed and -ing', 'Examples'],
          rows: [
            ['Ends in -e: drop it before -ing, add -d for past', 'make → making; hope → hoped, hoping; dance → danced, dancing (but see → seeing, be → being)'],
            ['One syllable, consonant-vowel-consonant: double the last letter', 'stop → stopped, stopping; plan → planned; run → running; sit → sitting'],
            ['Stressed final syllable, CVC: double', 'prefer → preferred; begin → beginning; admit → admitted (but visit → visited: stress is on the first syllable)'],
            ['Consonant + y: y → i for -ed, keep y for -ing', 'cry → cried, crying; study → studied, studying (but play → played: vowel + y)'],
            ['British English doubles a final -l after one vowel', 'travel → travelled, travelling; cancel → cancelled (American: traveled, canceled)'],
          ],
        },
        {
          t: 'p',
          text: 'For a full table of irregular verbs grouped by pattern, see [Irregular verbs](@grammar/verbs/irregular-verbs). For how these forms combine into tenses, see [The twelve tenses at a glance](@grammar/verbs/tenses-overview).',
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
            ['I have went there before.', 'I have **gone** there before.', 'After *have* use the past participle, not the past.'],
            ['She seen it yesterday.', 'She **saw** it yesterday. / She **has seen** it.', '*Seen* needs an auxiliary.'],
            ['He don’t like football.', 'He **doesn’t** like football.', 'Third person singular takes *does*.'],
            ['You should of told me.', 'You should **have** told me.', '*Should’ve* sounds like “should of” but the word is *have*.'],
            ['I was laying on the sofa.', 'I was **lying** on the sofa.', 'Reclining is *lie*; *lay* needs an object.'],
            ['They can to swim.', 'They can **swim**.', 'Modals take the bare base form.'],
            ['I am knowing the answer.', 'I **know** the answer.', 'State verbs are not normally continuous.'],
            ['The price has raised.', 'The price has **risen**.', 'Intransitive *rise, rose, risen*.'],
            ['She speaks good English, and she sings good.', 'She speaks good English, and she sings **well**.', 'Describing how she sings needs the adverb.'],
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Answer first, then check.',
      blocks: [
        {
          t: 'example',
          title: 'Ten questions with answers',
          lines: [
            { label: 'Q1', text: 'Action, state or linking? “The pie **smells** delicious.”' },
            { label: 'A1', text: 'Linking: “The pie is delicious” works, and *delicious* describes the pie.' },
            { label: 'Q2', text: 'Find the auxiliary and main verb: “They have been training all week.”' },
            { label: 'A2', text: 'Auxiliaries: *have*, *been*. Main verb: *training*.' },
            { label: 'Q3', text: 'Transitive or intransitive? “The guests **arrived** at eight.”' },
            { label: 'A3', text: 'Intransitive: nothing is arrived; *at eight* is a time phrase, not an object.' },
            { label: 'Q4', text: 'Give the past and past participle of *write*, *begin* and *bring*.' },
            { label: 'A4', text: '*wrote, written*; *began, begun*; *brought, brought*.' },
            { label: 'Q5', text: 'Choose: “Please (lie / lay) the files on my desk.”' },
            { label: 'A5', text: '**lay**: the files are the object being put down.' },
            { label: 'Q6', text: 'Correct: “I could of finished it if I’d had time.”' },
            { label: 'A6', text: '“I could **have** finished it”. Modal + *have* + past participle.' },
            { label: 'Q7', text: 'Spell the -ing form of *swim*, *write* and *visit*.' },
            { label: 'A7', text: '*swimming* (double after CVC), *writing* (drop -e), *visiting* (stress on first syllable, no doubling).' },
            { label: 'Q8', text: 'Is *have* auxiliary or main in “We **have** a dog”?' },
            { label: 'A8', text: 'Main verb: it means *own* and there is no other verb.' },
            { label: 'Q9', text: 'Correct: “She is owning three bikes.”' },
            { label: 'A9', text: '“She **owns** three bikes.” *Own* is a state verb.' },
            { label: 'Q10', text: 'Name the two objects: “Dad gave the dog a bone.”' },
            { label: 'A10', text: 'Indirect object: *the dog* (receives). Direct object: *a bone* (the thing given).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on auxiliary verbs, linking verbs, lie/lay and spelling of -ed and -ing.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapters on verbs and complements.',
    'Leech, G. (2004). *Meaning and the English Verb* (3rd ed.). Longman. On state and dynamic verbs.',
  ],
  related: [
    'grammar/verbs/tenses-overview',
    'grammar/verbs/irregular-verbs',
    'grammar/verbs/modal-verbs',
    'grammar/sentences/subject-predicate-object',
    'grammar/verbs/verbals-and-phrasal-verbs',
  ],
}

export default guide
