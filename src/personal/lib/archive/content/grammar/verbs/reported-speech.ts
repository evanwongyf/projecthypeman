import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    '**Direct speech** quotes the exact words: *“I’m tired,” she said.* **Reported (indirect) speech** retells them in your own sentence: *She said (that) she was tired.* Moving from one to the other usually means three shifts: the **tense** steps back (backshift), **pronouns** change to fit the new speaker, and **time and place words** change to fit the new moment. On top of that, a good reporting verb (*admitted, warned, promised*) does more work than *said*.',
  nutshell: [
    'After a past reporting verb (*said, told*), tenses usually **step back**: *am → was, will → would, have done → had done*.',
    'Backshift is **optional** when the statement is still true or the reporting verb is present: *He says he’s busy. She said the Earth is round.*',
    '**Say** takes no person object (*said that…*); **tell** needs one (*told me that…*).',
    'Questions become statements in word order: *“Where do you live?” → She asked where I lived.* Yes/no questions use **if** or **whether**.',
    'Commands and requests use **tell / ask + someone + to-infinitive**: *She told me to sit down.*',
    'Time words shift: *now → then, today → that day, tomorrow → the next day, ago → before*.',
  ],
  sections: [
    {
      id: 'backshift',
      title: 'Tense backshift',
      blocks: [
        {
          t: 'table',
          head: ['Direct speech', 'Reported speech', 'Example'],
          rows: [
            ['present simple', 'past simple', '“I **live** in Leeds.” → He said he **lived** in Leeds.'],
            ['present continuous', 'past continuous', '“I’**m working**.” → She said she **was working**.'],
            ['present perfect', 'past perfect', '“I’**ve finished**.” → He said he **had finished**.'],
            ['present perfect continuous', 'past perfect continuous', '“I’**ve been waiting** for hours.” → She said she **had been waiting** for hours.'],
            ['past simple', 'past perfect (or unchanged)', '“I **saw** it.” → He said he **had seen** it / **saw** it.'],
            ['past continuous', 'past perfect continuous (or unchanged)', '“I **was sleeping**.” → She said she **had been sleeping**.'],
            ['past perfect', 'no change', '“I **had left**.” → He said he **had left**.'],
            ['will', 'would', '“I’**ll call** you.” → She said she **would call** me.'],
            ['am / is / are going to', 'was / were going to', '“We’**re going to** move.” → They said they **were going to** move.'],
          ],
          caption: 'Each tense takes one step back into the past. The past perfect has nowhere further to go.',
        },
        {
          t: 'table',
          head: ['Modal in direct speech', 'Reported', 'Example'],
          rows: [
            ['can', 'could', '“I **can** swim.” → He said he **could** swim.'],
            ['may (possibility)', 'might', '“It **may** rain.” → She said it **might** rain.'],
            ['may (permission)', 'could / might', '“You **may** go.” → He said I **could** go.'],
            ['must (obligation)', 'had to (or must)', '“I **must** leave.” → She said she **had to** leave.'],
            ['shall (offer)', 'should / offered to', '“**Shall** I help?” → He asked if he **should** help. / He **offered to** help.'],
            ['could, would, should, might, ought to', 'no change', '“You **should** rest.” → She said I **should** rest.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'When not to backshift',
          text: 'You may keep the original tense if the fact is **still true** (*She said she **has** two children*), if it is a general truth (*He said water **boils** at 100 °C*), or if the reporting verb is in the present (*Tom **says** he’**s** running late*). Backshifting is still correct in all of these.',
        },
      ],
    },
    {
      id: 'pronouns-time',
      title: 'Pronouns, time and place words',
      blocks: [
        {
          t: 'table',
          head: ['Direct', 'Reported', 'Example'],
          rows: [
            ['now', 'then / at that time', '“I’m busy **now**.” → She said she was busy **then**.'],
            ['today / tonight', 'that day / that night', '“I’ll do it **today**.” → He said he’d do it **that day**.'],
            ['yesterday', 'the day before / the previous day', '“I saw her **yesterday**.” → He said he had seen her **the day before**.'],
            ['tomorrow', 'the next day / the following day', '“See you **tomorrow**.” → She said she’d see me **the next day**.'],
            ['last week', 'the week before / the previous week', '“I moved **last week**.” → He said he had moved **the previous week**.'],
            ['next month', 'the following month', '“We’ll start **next month**.” → They said they would start **the following month**.'],
            ['ago', 'before / earlier', '“I left two hours **ago**.” → She said she’d left two hours **before**.'],
            ['here', 'there', '“Wait **here**.” → He told me to wait **there**.'],
            ['this / these', 'that / those', '“I like **this** one.” → She said she liked **that** one.'],
          ],
          caption: 'Only shift these if the time or place has really changed. Reported on the same day, *today* stays *today*.',
        },
        {
          t: 'example',
          title: 'Pronouns follow the new speaker',
          lines: [
            { label: 'Direct', text: 'Mia to Raj: “**I** will lend **you** **my** notes.”' },
            { label: 'Raj reports', text: 'Mia said **she** would lend **me** **her** notes.' },
            { label: 'Someone else reports', text: 'Mia said **she** would lend **Raj** **her** notes. (or *him*, if clear)' },
            { label: 'Mia reports herself', text: 'I said **I** would lend **him** **my** notes.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'She **said that** she was hungry.',
            'She **told me that** she was hungry.',
            'He **said to me** that he was late. (possible, less common)',
            'They **told us** a story.',
          ],
          dont: [
            'She said me that she was hungry.',
            'She told that she was hungry.',
            'He told to me that he was late.',
            'They said us a story.',
          ],
        },
      ],
    },
    {
      id: 'questions-commands',
      title: 'Reporting questions, commands and requests',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Direct', 'Reported'],
          rows: [
            ['Wh- question', '“Where **do you live**?”', 'She asked me where **I lived**.'],
            ['Wh- question', '“What time **is** it?”', 'He asked what time **it was**.'],
            ['Wh- question (subject)', '“Who **broke** the window?”', 'She asked who **had broken** the window.'],
            ['Yes/no question', '“**Are** you coming?”', 'He asked **if / whether** I was coming.'],
            ['Yes/no question', '“**Have** you **seen** Joe?”', 'She asked **if** I **had seen** Joe.'],
            ['Command', '“Sit down.”', 'The teacher **told us to sit** down.'],
            ['Negative command', '“Don’t be late.”', 'She **told me not to be** late.'],
            ['Request', '“Could you open the window, please?”', 'He **asked me to open** the window.'],
            ['Suggestion', '“Let’s take a break.”', 'She **suggested taking** a break. / She suggested **that we take** a break.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'No question order, no question mark, no do',
          text: 'Reported questions are statements: *She asked where **I lived**,* not *where did I live*. There is no question mark and no *do/does/did*. The same rule applies to polite indirect questions: *Could you tell me where **the station is**?*',
        },
        {
          t: 'example',
          title: 'The ‘not to’ position',
          lines: [
            { label: 'Right', text: 'He told me **not to** worry.' },
            { label: 'Informal', text: 'He told me to not worry. (common in speech; avoid in formal writing)' },
            { label: 'Different meaning', text: 'He didn’t tell me to worry. (= he gave no such instruction)' },
          ],
        },
      ],
    },
    {
      id: 'reporting-verbs',
      title: 'Reporting verbs beyond said',
      lead: 'The reporting verb summarises the *function* of what was said. Each has its own pattern after it.',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Verbs', 'Example'],
          rows: [
            ['verb + (that) clause', 'say, explain, admit, deny, claim, agree, complain, insist, announce, reply, mention', 'He **admitted that** he had lied.'],
            ['verb + person + (that) clause', 'tell, inform, remind, warn, assure, persuade', 'She **assured me that** it was safe.'],
            ['verb + to-infinitive', 'agree, offer, promise, refuse, threaten, decide', 'He **promised to call**. She **refused to answer**.'],
            ['verb + person + to-infinitive', 'tell, ask, advise, warn, remind, urge, order, invite, encourage, persuade, beg', 'They **advised me to wait**. She **warned us not to swim**.'],
            ['verb + -ing', 'admit, deny, suggest, recommend, mention', 'He **denied taking** the money.'],
            ['verb + preposition + -ing', 'apologise for, insist on, accuse (someone) of, blame (someone) for, congratulate (someone) on, thank (someone) for', 'She **apologised for being** late. They **accused him of cheating**.'],
          ],
        },
        {
          t: 'example',
          title: 'One reporting verb can replace a whole quote',
          lines: [
            { label: '“I’m sorry I’m late.”', text: 'She **apologised for being** late.' },
            { label: '“I’ll definitely pay you back.”', text: 'He **promised to pay** me back.' },
            { label: '“No, I won’t sign it.”', text: 'She **refused to sign** it.' },
            { label: '“You should see a lawyer.”', text: 'He **advised me to see** a lawyer.' },
            { label: '“I didn’t take your phone!”', text: 'She **denied taking** my phone.' },
            { label: '“Don’t forget to lock up.”', text: 'He **reminded me to lock** up.' },
            { label: '“Well done on your exam!”', text: 'They **congratulated me on passing** my exam.' },
            { label: '“Why don’t we eat out?”', text: 'She **suggested eating** out. (not *suggested me to eat*)' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Suggest and recommend',
          text: '*Suggest* and *recommend* do not take *person + to-infinitive*: write **He suggested that I apply** or **He suggested applying**, never *He suggested me to apply*.',
        },
      ],
    },
    {
      id: 'worked',
      title: 'A conversation, reported',
      blocks: [
        {
          t: 'example',
          title: 'Direct',
          lines: [
            { label: 'Lena', text: '“I’ve lost my keys. Have you seen them?”' },
            { label: 'Omar', text: '“No. When did you last have them?”' },
            { label: 'Lena', text: '“I had them here this morning. I’ll check the car.”' },
            { label: 'Omar', text: '“Don’t panic. I can drive you home if you can’t find them.”' },
          ],
        },
        {
          t: 'example',
          title: 'Reported the next day',
          lines: [
            { label: '1', text: 'Lena said she **had lost** her keys and asked Omar **if he had seen** them.' },
            { label: '2', text: 'He said he hadn’t, and asked when she **had last had** them.' },
            { label: '3', text: 'She said she **had had** them **there that morning** and that she **would check** the car.' },
            { label: '4', text: 'He **told her not to panic** and **offered to drive** her home if she **couldn’t** find them.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Report each sentence (assume it is reported later, in a different place). Answers follow.',
      blocks: [
        {
          t: 'example',
          title: 'Questions 1–5',
          lines: [
            { label: 'Q1', text: 'Sara: “I’m going to the cinema tonight.”' },
            { label: 'A1', text: '**Sara said (that) she was going to the cinema that night.** Present continuous → past continuous; *tonight* → *that night*.' },
            { label: 'Q2', text: 'Ben: “I’ve never been to Japan.”' },
            { label: 'A2', text: '**Ben said he had never been to Japan.** Present perfect → past perfect.' },
            { label: 'Q3', text: 'Teacher: “Where did you put your homework?”' },
            { label: 'A3', text: '**The teacher asked me where I had put my homework.** Statement order, no *did*, past → past perfect.' },
            { label: 'Q4', text: 'Kim: “Will you be at the meeting tomorrow?”' },
            { label: 'A4', text: '**Kim asked if / whether I would be at the meeting the next day.**' },
            { label: 'Q5', text: 'Mum: “Don’t leave your shoes in the hall.”' },
            { label: 'A5', text: '**Mum told me not to leave my shoes in the hall.** Negative command: *told + person + not to*.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 6–10',
          lines: [
            { label: 'Q6', text: 'Correct: *He said me that he was tired.*' },
            { label: 'A6', text: '**He told me that he was tired** or **He said that he was tired.** *Say* takes no person object.' },
            { label: 'Q7', text: 'Correct: *She asked me where did I work.*' },
            { label: 'A7', text: '**She asked me where I worked.** Reported questions use statement word order.' },
            { label: 'Q8', text: 'Use a reporting verb: “I broke the vase. Sorry!” said Leo.' },
            { label: 'A8', text: '**Leo admitted breaking (that he had broken) the vase** or **Leo apologised for breaking the vase.**' },
            { label: 'Q9', text: 'Use a reporting verb: “I won’t lend you any more money,” she said to me.' },
            { label: 'A9', text: '**She refused to lend me any more money.**' },
            { label: 'Q10', text: 'Must you backshift? Ana (yesterday): “Paris is the capital of France.”' },
            { label: 'A10', text: '**No.** *Ana said Paris is the capital of France* is fine because it is still true; *was* is also correct.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/punctuation/quotation-marks-and-speech', note: 'punctuating the direct speech you start from' },
            { path: 'grammar/verbs/past-tenses', note: 'the past perfect used in backshift' },
            { path: 'grammar/verbs/verbals-and-phrasal-verbs', note: 'verb + -ing and verb + to patterns' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
    'Huddleston, R., & Pullum, G. K. (2002). *The Cambridge Grammar of the English Language*. Cambridge University Press.',
    'Leech, G. (2004). *Meaning and the English Verb* (3rd ed.). Pearson Longman.',
  ],
  related: [
    'grammar/punctuation/quotation-marks-and-speech',
    'grammar/verbs/past-tenses',
    'grammar/verbs/modal-verbs',
    'grammar/verbs/verbals-and-phrasal-verbs',
    'grammar/sentences/questions-negatives-word-order',
  ],
}

export default guide
