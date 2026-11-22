import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Register is the level of formality you choose for a reader and a situation. Good writers do not have one *correct* English; they have several and switch between them. Singapore is a clear example: most Singaporeans move between Standard Singapore English for school, work and public life and colloquial Singapore English, or Singlish, among friends and family.',
  nutshell: [
    'Register depends on **audience, purpose and medium**: a message to a friend, an email to a teacher and an exam essay call for different words and grammar.',
    'Formal English uses full forms, precise vocabulary and complete sentences; informal English uses contractions, phrasal verbs and shortcuts. Neither is better: each fits a context.',
    '**Standard Singapore English** shares its grammar with other standard Englishes, with local vocabulary (*HDB flat*, *hawker centre*, *void deck*) and a local accent.',
    '**Singlish** (colloquial Singapore English) is a rule-governed contact variety shaped by Hokkien, Cantonese, Teochew, Malay, Tamil and Mandarin, with features such as discourse particles (*lah, lor, leh*), *already* as a completion marker and topic-first sentences.',
    'The skill is **switching**: knowing which features are colloquial so you can keep them for casual settings and use standard forms in exams, applications and international communication.',
  ],
  sections: [
    {
      id: 'register',
      title: 'What register is',
      blocks: [
        {
          t: 'levels',
          caption: 'A continuum of formality, from most relaxed to most fixed (after Martin Joos, *The Five Clocks*, 1961)',
          items: [
            { name: 'Intimate', body: 'Close family and partners: private words, nicknames, half-sentences.', verbs: ['Eaten?', 'Love you, bye'] },
            { name: 'Casual', body: 'Friends and peers: slang, contractions, dropped words, local forms.', verbs: ['Wanna grab lunch?'] },
            { name: 'Consultative', body: 'Polite everyday exchanges with people you do not know well: a shop, a tutor, a colleague.', verbs: ['Could you tell me where the library is?'] },
            { name: 'Formal', body: 'Essays, reports, speeches, job applications: full sentences, careful vocabulary, no slang.', verbs: ['I am writing to apply for the position of…'] },
            { name: 'Frozen', body: 'Fixed wording that does not change: oaths, pledges, legal formulas, ceremonies.', verbs: ['Do you solemnly swear…'] },
          ],
        },
        {
          t: 'table',
          head: ['Feature', 'Informal', 'Formal'],
          rows: [
            ['Contractions', 'It’s, don’t, we’ll', 'It is, do not, we will'],
            ['Verbs', 'find out, put up with, get', 'discover, tolerate, obtain / receive'],
            ['Vocabulary', 'a lot of, kids, stuff, really big', 'many / considerable, children, materials, substantial'],
            ['Addressing the reader', 'you, hey, guys', 'impersonal or *the reader*; *Dear Ms Tan*'],
            ['Sentence shape', 'Short, fragments allowed: *Great news!*', 'Complete sentences, linked by connectives: *however*, *therefore*'],
            ['Certainty', 'This is totally wrong.', 'This argument appears to overlook…'],
            ['Punctuation', 'Exclamation marks, dashes, emoji (in messages)', 'Restrained: full stops, commas, colons'],
          ],
        },
        {
          t: 'example',
          title: 'One request, four registers',
          lines: [
            { label: 'Casual', text: 'Send me the notes when you can?' },
            { label: 'Neutral', text: 'Could you send me the notes when you have a moment?' },
            { label: 'Formal', text: 'I would be grateful if you could send me the lecture notes at your convenience.' },
            { label: 'Too formal for the context', text: 'It is respectfully requested that the aforementioned notes be forwarded. (stiff, even in a work email)' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Formal does not mean complicated',
          text: 'Plain English is formal enough for almost every professional purpose. Prefer *use* to *utilise*, *start* to *commence*, *because* to *due to the fact that*, and *about* to *with regard to*. Short words in complete, correct sentences read as confident, not casual.',
        },
      ],
    },
    {
      id: 'sse-and-singlish',
      title: 'Standard Singapore English and Singlish',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Standard Singapore English (SSE)', tag: 'school, work, media, public life', body: 'The variety used in education, government, the courts, news and business. Its grammar is that of international standard English, it generally follows British spelling, and it includes vocabulary for local life: *HDB flat*, *void deck*, *hawker centre*, *wet market*, *MRT*. It is spoken with a recognisably Singaporean accent, as Australian or Scottish standard English has its own.' },
            { title: 'Colloquial Singapore English (Singlish)', tag: 'friends, family, casual talk', body: 'A contact variety that grew from English alongside Hokkien, Cantonese, Teochew, Malay, Tamil and later Mandarin. It has its own consistent grammar, particles and vocabulary, and for many Singaporeans of every background it is a marker of shared identity and warmth.' },
          ],
        },
        {
          t: 'p',
          text: 'Linguists describe the two as ends of a range rather than two sealed boxes. Many Singaporeans command both and shift along the range depending on who they are talking to, sometimes within a single conversation. Using Singlish with friends says nothing about a speaker’s command of standard English, just as a Glaswegian’s Scots with family says nothing about their formal English.',
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '"Singlish is just broken English"',
          text: 'Singlish has regular, learnable rules. Its particles are not interchangeable (*Go lah* and *Go lor* mean different things), *already* goes after the verb or adjective it marks, and speakers judge some Singlish sentences as wrong. That is the mark of a real grammar. The practical issue is not whether Singlish is valid but whether it suits the reader, and in exams and formal writing it does not.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Public debate',
          text: 'Singlish has been the subject of long public discussion in Singapore. The government launched the Speak Good English Movement in 2000 to promote standard English, while writers, comedians and many citizens celebrate Singlish as part of national culture. The Oxford English Dictionary also records a number of Singapore English words, such as *kiasu* and *hawker centre*.',
        },
      ],
    },
    {
      id: 'singlish-features',
      title: 'Key features of Singlish, described',
      lead: 'These descriptions are approximate: much of the meaning of a particle lives in its intonation and the situation.',
      blocks: [
        {
          t: 'table',
          head: ['Particle', 'Typical function', 'Example', 'Rough standard equivalent'],
          caption: 'Discourse particles come at the end of a phrase or sentence and add attitude, not content',
          rows: [
            ['lah', 'Asserts, urges or reassures; often adds friendliness or solidarity', 'Come **lah**, join us. / Don’t worry **lah**, sure can pass.', 'Come on, join us. / Don’t worry, you’ll definitely pass.'],
            ['lor', 'Resignation or obviousness: that is just how it is', 'No bus, walk **lor**. / Like that **lor**.', 'There’s no bus, so we’ll just have to walk. / That’s how it is.'],
            ['leh', 'Softens a request or a mild objection; tentative', 'Help me carry this **leh**. / This one quite expensive **leh**.', 'Could you help me carry this? / This is rather expensive, though.'],
            ['meh', 'Surprise or doubt in a question', 'He passed **meh**?', 'Did he really pass?'],
            ['hor', 'Seeks agreement, or adds emphasis to a point', 'The food here nice **hor**?', 'The food here is nice, isn’t it?'],
            ['ah', 'Marks a topic, or a question', 'This one **ah**, very hard to find.', 'As for this one, it’s very hard to find.'],
          ],
        },
        {
          t: 'table',
          head: ['Feature', 'Singlish', 'Standard English', 'Note'],
          rows: [
            ['*can* / *cannot* as a full answer', 'A: Can you finish by Friday? B: **Can.** / **Cannot.**', 'Yes, I can. / No, I can’t.', 'Also as a question tag: *Tomorrow can or not?* (Is tomorrow possible?)'],
            ['*already* as a completion (perfective) marker', 'I eat **already**. / The bus come **already**.', 'I have eaten. / The bus has arrived.', 'Marks that an action is complete, doing the job of *have* + past participle.'],
            ['*already* for change of state', 'She tall **already**.', 'She has grown tall.', 'Marks that a new state has been reached.'],
            ['Topic first, comment after (topic-prominence)', '**This book**, I read already. / **Durian**, my mother don’t like.', 'I have read this book. / My mother doesn’t like durian.', 'The topic is announced, then something is said about it; similar to patterns in Chinese varieties.'],
            ['Reduplication of verbs (casual, a little)', 'Let’s go **walk-walk**. / Just **see-see** only.', 'Let’s go for a stroll. / I’m only browsing.', 'Doubling a verb suggests a relaxed, light or brief activity.'],
            ['Reduplication of adjectives (intensifying)', 'The room **dark-dark**, I cannot see.', 'The room was really dark.', 'Tripling (*red-red-red*) intensifies further.'],
            ['Subject or object left out', '**Eat already?** / Don’t know.', 'Have you eaten? / I don’t know.', 'Understood from context, as in many Asian languages.'],
            ['No *be* before adjectives', 'This one very nice.', 'This one is very nice.', 'Common with adjectives and *-ing* forms.'],
            ['*got* for existence or possession', '**Got** many people at the event.', 'There were many people at the event.', 'Also experience: *You got go Japan before?* (Have you been to Japan?)'],
            ['*never* for a single past negative', 'He **never** come yesterday.', 'He didn’t come yesterday.', 'In standard English *never* means *at no time*, so this reads differently.'],
            ['Verb forms often unmarked for tense or *-s*', 'Yesterday I go there. / He like durian.', 'Yesterday I went there. / He likes durian.', 'Time is shown by words like *yesterday* or *already* instead.'],
          ],
        },
        {
          t: 'table',
          head: ['Word', 'Meaning', 'Origin', 'Example'],
          caption: 'A few common Singlish words',
          rows: [
            ['makan', 'eat, or food', 'Malay', 'Let’s go **makan**.'],
            ['kiasu', 'afraid of losing out, overly competitive', 'Hokkien', 'He queued at 6 a.m., so **kiasu**.'],
            ['paiseh', 'embarrassed, sorry to impose', 'Hokkien', '**Paiseh**, I’m late.'],
            ['shiok', 'wonderful, very satisfying', 'commonly traced to Malay; origin debated', 'This laksa very **shiok**.'],
            ['chope', 'reserve a seat or place, often with a packet of tissues', 'from English *chop* (a stamp or seal)', 'I **chope** this table already.'],
            ['blur', 'confused, slow to understand', 'English word, local sense', 'Sorry, I was **blur** just now.'],
            ['alamak', 'oh no!', 'Malay', '**Alamak**, I forgot my wallet!'],
          ],
        },
      ],
    },
    {
      id: 'when',
      title: 'When each register suits',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Best choice', 'Why'],
          rows: [
            ['O-level or A-level essay, comprehension answers', 'Formal SSE', 'Marked against standard English grammar.'],
            ['Email to a teacher, lecturer or employer', 'Neutral to formal SSE', 'The reader expects courtesy and clarity.'],
            ['Job interview, scholarship interview', 'SSE, with a relaxed and natural tone', 'Shows command of the standard; a few local words for local things are fine.'],
            ['Presentation to an international audience', 'SSE, local terms explained', 'Visitors may not know *void deck* or *chope*.'],
            ['Chat with friends, family, at the kopitiam', 'Singlish or casual SSE, as you like', 'Signals warmth and belonging; very formal English can sound distant.'],
            ['Creative writing: dialogue', 'Whatever the character would really say', 'Singlish in dialogue can make characters authentic; narration in an exam essay is usually standard.'],
            ['Customer service with locals', 'Neutral SSE, possibly with a light local touch', 'Polite and clear first, friendly second.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Forms that slip into formal writing',
          text: 'Some local usages are common even in Singapore office English but may confuse international readers: *Please **revert*** (meaning *reply*: write *Please reply*), *discuss **about*** (write *discuss*), ***borrow** me your pen* (write *lend me*), ***on/off** the light* (write *switch on / turn off*), and *I **stay** in Tampines* (fine locally; *live* is clearer abroad, where *stay* suggests a short visit).',
        },
      ],
    },
    {
      id: 'switching',
      title: 'How to switch to Standard English',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Every sentence has a **subject** and a full **verb**: add *is/are/was* before adjectives (*The food **is** expensive*).',
            'Show **tense** in the verb: *went*, *have eaten*, *will go*, rather than relying on *already* or *yesterday*.',
            'Add **third-person -s**: *He like**s***, *She do**es**n’t*.',
            'Remove **particles** (*lah, lor, leh, meh, hor*) and express the attitude with words: *please*, *unfortunately*, *isn’t it?*, *really?*',
            'Use **there is / there are** instead of existential *got*.',
            'Put **subject before verb** in questions: *Where are you going?* not *You go where?*',
            'Replace **local words** with standard ones, or gloss them for outsiders: *a hawker centre (a large open-air food court)*.',
            'Check **articles**: *I bought **a** new phone*, *She is **the** best in **the** class*.',
          ],
        },
        {
          t: 'table',
          head: ['Singlish', 'Standard Singapore English'],
          caption: 'Converting casual sentences',
          rows: [
            ['Can help me or not?', 'Could you help me, please?'],
            ['I finish my homework already.', 'I have finished my homework.'],
            ['You go where?', 'Where are you going?'],
            ['Got a lot of people queueing.', 'There are a lot of people queueing.'],
            ['He never come to school yesterday.', 'He did not come to school yesterday.'],
            ['This exam very hard lor.', 'This exam was very hard, unfortunately.'],
            ['Don’t play play, this one serious.', 'Don’t fool around; this is serious.'],
            ['The teacher say we must submit by Monday.', 'The teacher said we must submit it by Monday.'],
            ['Why you so like that?', 'Why are you behaving like that?'],
            ['This weekend you free or not?', 'Are you free this weekend?'],
          ],
        },
        {
          t: 'example',
          title: 'Same story, two registers',
          lines: [
            { label: 'To a friend', text: 'Wah, yesterday the MRT break down, I wait one hour lor. Reach school already the exam start liao.' },
            { label: 'To a teacher', text: 'I apologise for arriving late yesterday. The MRT broke down and I waited for an hour, so by the time I reached school the exam had already started.' },
            { label: 'Changes', text: 'Past tenses (*broke, waited, had started*), subject restored (*I reached*), particles and *liao* (already) removed, an apology added for the formal reader.' },
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
          title: 'Register and switching',
          lines: [
            { label: 'Q1', text: 'Rewrite in Standard English: *I eat already, you go first.*' },
            { label: 'A1', text: '*I have already eaten; you go ahead.* (*already* becomes present perfect)' },
            { label: 'Q2', text: 'Rewrite: *Tomorrow can or not?*' },
            { label: 'A2', text: '*Is tomorrow all right for you?* / *Can you make it tomorrow?*' },
            { label: 'Q3', text: 'What attitude does *lor* add in *No more seats, stand lor*?' },
            { label: 'A3', text: 'Resignation: there is no choice, so we will just have to stand.' },
            { label: 'Q4', text: 'Rewrite: *This one ah, very hard to find.*' },
            { label: 'A4', text: '*This one is very hard to find.* Drop the topic particle and add *is*.' },
            { label: 'Q5', text: 'Which register suits a scholarship application? (a) casual (b) formal (c) frozen' },
            { label: 'A5', text: '**(b) formal**: courteous, complete sentences; *frozen* is for fixed texts like oaths.' },
            { label: 'Q6', text: 'Rewrite for an international colleague: *Let’s meet at the void deck after lunch.*' },
            { label: 'A6', text: '*Let’s meet at the void deck (the open ground floor of the apartment block) after lunch.* Keep the local term, but explain it.' },
            { label: 'Q7', text: 'Make this email line standard: *Please revert by Friday.*' },
            { label: 'A7', text: '*Please reply by Friday.*' },
            { label: 'Q8', text: 'Rewrite: *Got many students absent today.*' },
            { label: 'A8', text: '*There are many students absent today* / *Many students are absent today.*' },
            { label: 'Q9', text: 'Make this less formal for a chat with a friend: *I would be most grateful if you could accompany me to the cinema.*' },
            { label: 'A9', text: 'Something like *Want to come to the cinema with me?*' },
            { label: 'Q10', text: 'True or false: using Singlish with friends means a speaker cannot write good standard English.' },
            { label: 'A10', text: '**False.** Most Singaporeans switch between the two; the skill is matching the register to the situation.' },
            { label: 'Q11', text: 'Rewrite: *He never submit his project last week.*' },
            { label: 'A11', text: '*He did not submit his project last week.* In standard English, *never* means *at no time*.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/usage/commonly-confused-words', note: 'Borrow/lend and other pairs that slip' },
            { path: 'grammar/verbs/present-tenses', note: 'The present perfect that replaces *already*' },
            { path: 'grammar/sentences/questions-negatives-word-order', note: 'Standard question and negative forms' },
            { path: 'grammar/parts-of-speech/determiners-and-articles', note: 'Articles, often dropped in casual speech' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Deterding, D. (2007). *Singapore English*. Edinburgh University Press.',
    'Leimgruber, J. R. E. (2013). *Singapore English: Structure, Variation and Usage*. Cambridge University Press.',
    'Lim, L. (ed.) (2004). *Singapore English: A Grammatical Description*. John Benjamins.',
    'Wee, L. (2018). *The Singlish Controversy: Language, Culture and Identity in a Globalizing World*. Cambridge University Press.',
    'Gupta, A. F. (1994). *The Step-Tongue: Children’s English in Singapore*. Multilingual Matters.',
    'Joos, M. (1961). *The Five Clocks*. Harcourt, Brace & World.',
  ],
  related: [
    'grammar/usage/commonly-confused-words',
    'grammar/verbs/present-tenses',
    'grammar/sentences/questions-negatives-word-order',
    'grammar/start-here',
  ],
}

export default guide
