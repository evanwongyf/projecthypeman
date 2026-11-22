import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'English is strict about word order. Statements go **subject, verb, object**; questions and negatives need an **auxiliary** verb in a fixed place, and when there is no auxiliary, English brings in **do**. Master this one mechanism and questions, negatives, question tags and inversion all follow.',
  nutshell: [
    'Questions put the **first auxiliary before the subject**: *She is coming* becomes *Is she coming?*',
    'No auxiliary? Use **do, does** or **did**, and put the main verb in the base form: *Did you see it?* not *Did you saw it?*',
    'Negatives put **not** after the first auxiliary: *She has not finished. He does not eat meat.*',
    'Wh-questions about the **subject** take no do: *Who called you?* not *Who did call you?*',
    'Question tags mirror the auxiliary and flip positive and negative: *It’s cold, isn’t it?*',
    'Indirect questions use **statement order**: *Can you tell me where the station is?*',
  ],
  sections: [
    {
      id: 'order',
      title: 'Basic word order',
      blocks: [
        { t: 'p', text: 'In a statement, the normal order is **subject + verb + object + manner + place + time**. Adverbials can move, but the S V O core rarely does, because English uses position (not word endings) to show who did what.' },
        {
          t: 'table',
          head: ['Subject', 'Verb', 'Object', 'Manner', 'Place', 'Time'],
          rows: [
            ['She', 'sang', 'the song', 'beautifully', 'at the concert', 'last night'],
            ['We', 'met', 'our cousins', '', 'in Ipoh', 'on Sunday'],
            ['The team', 'played', '', 'well', 'away', 'this season'],
          ],
          caption: 'Time often moves to the front for emphasis: *Last night, she sang the song beautifully at the concert.*',
        },
        {
          t: 'example',
          title: 'Word-order errors and fixes',
          lines: [
            { label: 'Wrong', text: 'I like very much football.' },
            { label: 'Right', text: 'I like football **very much**. (Do not split verb and object.)' },
            { label: 'Wrong', text: 'She speaks well English.' },
            { label: 'Right', text: 'She speaks English **well**.' },
            { label: 'Wrong', text: 'He always is late.' },
            { label: 'Right', text: 'He is **always** late. (Frequency adverbs go after *be*...)' },
            { label: 'Wrong', text: 'We go often to the beach.' },
            { label: 'Right', text: 'We **often** go to the beach. (...but before a main verb.)' },
            { label: 'Wrong', text: 'They have finished already the work.' },
            { label: 'Right', text: 'They have **already** finished the work. / They have finished the work **already**.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Adverbs of frequency: the rule',
          text: '*Always, usually, often, sometimes, rarely, never* go **after the first auxiliary or be**, and **before a main verb**: *I have never been. She is often tired. They usually walk.*',
        },
      ],
    },
    {
      id: 'questions',
      title: 'Yes/no questions and do-support',
      blocks: [
        { t: 'p', text: 'To make a yes/no question, move the **first auxiliary** (be, have, a modal) in front of the subject. If the verb phrase has no auxiliary, insert *do/does/did* and use the base form of the main verb. This is called **do-support**.' },
        {
          t: 'table',
          head: ['Statement', 'Auxiliary', 'Question'],
          rows: [
            ['She **is** working.', 'is', '**Is** she working?'],
            ['They **have** left.', 'have', '**Have** they left?'],
            ['He **can** swim.', 'can', '**Can** he swim?'],
            ['You **will** be there.', 'will', '**Will** you be there?'],
            ['It **has been** raining.', 'has (first one only)', '**Has** it been raining?'],
            ['You **like** tea.', 'none: add do', '**Do** you like tea?'],
            ['She **likes** tea.', 'none: add does', '**Does** she **like** tea?'],
            ['They **went** home.', 'none: add did', '**Did** they **go** home?'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Tense moves to do',
          text: 'With do-support, the auxiliary carries the tense and the person ending; the main verb goes back to its base form. *Does she likes?* and *Did you went?* both mark the tense twice. Say *Does she like?* and *Did you go?*',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Be as a main verb',
          text: '*Be* never takes do-support: *Are you ready?* not *Do you be ready?* British English sometimes inverts main-verb *have*: *Have you a pen?* (dated, formal). Everyday British and American both say *Do you have a pen?*; British also uses *Have you got a pen?*',
        },
      ],
    },
    {
      id: 'wh',
      title: 'Wh-questions: subject and object',
      blocks: [
        { t: 'p', text: 'Wh-questions (who, what, where, when, why, which, whose, how) follow the yes/no pattern after the wh-word: **Wh + auxiliary + subject + verb**. The exception: when the wh-word **is** the subject, there is no inversion and no do.' },
        {
          t: 'example',
          title: 'Object questions versus subject questions',
          lines: [
            { label: 'Statement', text: 'Maya called **Tom**.' },
            { label: 'Ask about the object', text: '**Who did** Maya **call**? (Answer: Tom.)' },
            { label: 'Ask about the subject', text: '**Who called** Tom? (Answer: Maya.)' },
            { label: 'Statement', text: '**The storm** damaged **the roof**.' },
            { label: 'Object question', text: '**What did** the storm **damage**?' },
            { label: 'Subject question', text: '**What damaged** the roof?' },
          ],
        },
        {
          t: 'example',
          title: 'More wh-questions',
          lines: [
            { label: 'Where', text: 'Where **do** you live? / Where **has** she gone?' },
            { label: 'Why', text: 'Why **did** they cancel the match?' },
            { label: 'How long', text: 'How long **have** you been waiting?' },
            { label: 'Which', text: 'Which bus **goes** to the airport? (subject: no do)' },
            { label: 'Whose', text: 'Whose phone **is ringing**? (subject)' },
            { label: 'Preposition at end', text: 'Who are you talking **to**? (Formal: *To whom are you talking?*)' },
          ],
        },
      ],
    },
    {
      id: 'negatives',
      title: 'Negatives',
      blocks: [
        { t: 'p', text: 'Put **not** (or *n’t*) after the first auxiliary. With no auxiliary, use *do not / does not / did not* + base form.' },
        {
          t: 'table',
          head: ['Positive', 'Negative', 'Contracted'],
          rows: [
            ['I am ready.', 'I am **not** ready.', 'I’m not ready. (no *amn’t* in standard English)'],
            ['She has finished.', 'She has **not** finished.', 'She hasn’t finished. / She’s not finished.'],
            ['They will come.', 'They will **not** come.', 'They won’t come.'],
            ['He can drive.', 'He **cannot** drive.', 'He can’t drive. (*cannot* is one word)'],
            ['You know him.', 'You **do not** know him.', 'You don’t know him.'],
            ['She lives here.', 'She **does not** live here.', 'She doesn’t live here.'],
            ['We saw it.', 'We **did not** see it.', 'We didn’t see it.'],
          ],
        },
        {
          t: 'example',
          title: 'Double negatives and their fixes',
          lines: [
            { label: 'Non-standard', text: 'I didn’t see nobody.' },
            { label: 'Standard', text: 'I didn’t see **anybody**. / I saw **nobody**.' },
            { label: 'Non-standard', text: 'She doesn’t know nothing about it.' },
            { label: 'Standard', text: 'She doesn’t know **anything** about it. / She knows **nothing** about it.' },
            { label: 'Non-standard', text: 'We can’t hardly hear you.' },
            { label: 'Standard', text: 'We can **hardly** hear you. (*Hardly, scarcely, barely* are already negative.)' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Transferred negative',
          text: 'With *think, believe, suppose, expect*, English normally negates the first verb: *I don’t think she’s coming* is more natural than *I think she isn’t coming*.',
        },
      ],
    },
    {
      id: 'tags',
      title: 'Question tags',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Find the first auxiliary', body: 'In *You’ve met Raj*, it is *have*. No auxiliary? Use do/does/did: *She lives here* → *does*.' },
            { title: '2. Flip the polarity', body: 'Positive statement, negative tag; negative statement, positive tag.' },
            { title: '3. Use a pronoun', body: 'The tag repeats the subject as a pronoun: *Raj* → *he*; *this* → *it*; *there* stays *there*.' },
            { title: '4. Add the comma and question mark', body: '*You’ve met Raj, haven’t you?*' },
          ],
        },
        {
          t: 'table',
          head: ['Statement', 'Tag', 'Note'],
          rows: [
            ['It’s cold', 'isn’t it?', 'be'],
            ['You haven’t eaten', 'have you?', 'negative statement, positive tag'],
            ['She plays the violin', 'doesn’t she?', 'do-support'],
            ['They went home', 'didn’t they?', 'past'],
            ['I’m late', 'aren’t I?', 'the irregular one'],
            ['Let’s go', 'shall we?', 'suggestions'],
            ['Close the window', 'will you? / would you?', 'requests'],
            ['Nobody called', 'did they?', '*nobody* is negative, so positive tag; *they* for people'],
            ['There’s a problem', 'isn’t there?', '*there* repeats'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Invariant tags',
          text: 'Many varieties use one fixed tag: *right?*, *yeah?*, and in Singapore and Malaysian colloquial English *is it?* or *isn’t it?* for every statement (*You’re coming, is it?*). In formal Standard English, use the matching tag. See [Register, tone and Singapore English](@grammar/usage/register-and-singapore-english).',
        },
      ],
    },
    {
      id: 'indirect',
      title: 'Indirect questions and inversion',
      blocks: [
        { t: 'p', text: 'When a question is inside another sentence, it goes back to **statement order** and loses do-support. Yes/no questions use *if* or *whether*.' },
        {
          t: 'example',
          title: 'Direct to indirect',
          lines: [
            { label: 'Direct', text: 'Where **is the station**?' },
            { label: 'Indirect', text: 'Could you tell me where **the station is**?' },
            { label: 'Direct', text: 'What time **does the film start**?' },
            { label: 'Indirect', text: 'Do you know what time **the film starts**?' },
            { label: 'Direct', text: '**Has she** replied?' },
            { label: 'Indirect', text: 'I wonder **whether she has** replied.' },
            { label: 'Wrong', text: 'Can you tell me where is the toilet?' },
            { label: 'Right', text: 'Can you tell me where **the toilet is**?' },
          ],
        },
        { t: 'p', text: 'Statement word order is inverted (auxiliary before subject) after some fronted negative or limiting words, mainly in formal or emphatic writing.' },
        {
          t: 'example',
          title: 'Negative inversion',
          lines: [
            { label: 'Never', text: '**Never have I** seen such a mess.' },
            { label: 'Rarely', text: '**Rarely does she** complain.' },
            { label: 'Not only', text: '**Not only did he** lie, but he also blamed me.' },
            { label: 'No sooner', text: '**No sooner had we** sat down than the phone rang.' },
            { label: 'Only then', text: '**Only then did I** understand.' },
            { label: 'Neither/nor', text: 'I don’t like it, and **neither does** she.' },
            { label: 'Conditional', text: '**Had I** known, I would have helped. (= If I had known)' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        {
          t: 'example',
          title: 'Correct or form as instructed',
          lines: [
            { label: 'Q1', text: 'Make a question: *She speaks Tamil.*' },
            { label: 'A1', text: '**Does she speak** Tamil? Do-support; *speak* goes to base form.' },
            { label: 'Q2', text: 'Correct: *Did you went to the party?*' },
            { label: 'A2', text: 'Did you **go**? *Did* already shows past.' },
            { label: 'Q3', text: 'Ask about the subject: *Something broke the window.*' },
            { label: 'A3', text: '**What broke** the window? Subject question: no do.' },
            { label: 'Q4', text: 'Make negative: *They understood the instructions.*' },
            { label: 'A4', text: 'They **did not understand** the instructions.' },
            { label: 'Q5', text: 'Add a tag: *You can swim, ...?*' },
            { label: 'A5', text: '**can’t you?** Same auxiliary, flipped polarity.' },
            { label: 'Q6', text: 'Add a tag: *I’m right, ...?*' },
            { label: 'A6', text: '**aren’t I?** The standard irregular form.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7 to 11',
          lines: [
            { label: 'Q7', text: 'Correct: *Do you know where does she live?*' },
            { label: 'A7', text: 'Do you know where **she lives**? Indirect question: statement order, no do.' },
            { label: 'Q8', text: 'Correct: *He plays always football on Saturdays.*' },
            { label: 'A8', text: 'He **always plays** football on Saturdays. Frequency adverb before the main verb.' },
            { label: 'Q9', text: 'Correct: *I don’t want no help.*' },
            { label: 'A9', text: 'I don’t want **any** help. One negative in standard English.' },
            { label: 'Q10', text: 'Rewrite starting with *Never*: *I have never felt so tired.*' },
            { label: 'A10', text: '**Never have I** felt so tired. Fronted negative triggers inversion.' },
            { label: 'Q11', text: 'Add a tag: *Nobody saw us, ...?*' },
            { label: 'A11', text: '**did they?** *Nobody* makes the statement negative, so the tag is positive.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016) *Practical English Usage*, 4th edn. Oxford University Press.',
    'Murphy, R. (2019) *English Grammar in Use*, 5th edn. Cambridge University Press.',
    'Huddleston, R. and Pullum, G. K. (2005) *A Student’s Introduction to English Grammar*. Cambridge University Press.',
  ],
  related: [
    'grammar/sentences/subject-predicate-object',
    'grammar/parts-of-speech/verbs-basics',
    'grammar/parts-of-speech/adverbs',
    'grammar/verbs/modal-verbs',
    'grammar/verbs/reported-speech',
    'grammar/usage/register-and-singapore-english',
  ],
}

export default guide
