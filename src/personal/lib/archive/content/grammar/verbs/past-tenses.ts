import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The past tenses are the storyteller’s toolkit. The past simple moves the plot forward, the past continuous paints the background, the past perfect reaches further back, and the past perfect continuous measures how long something had been going on. Add *used to* and *would* for past habits and you can tell any story.',
  nutshell: [
    '**Past simple** (*I walked, I went*): completed actions at a finished past time; the main events of a story.',
    '**Past continuous** (*I was walking*): an action in progress at a past moment, often interrupted by a past simple event.',
    '**Past perfect** (*I had walked*): an action completed before another past event or time: the “past of the past”.',
    '**Past perfect continuous** (*I had been walking*): an activity continuing up to a past moment, often explaining a past result.',
    '**Used to** works for past habits and past states; **would** only for repeated past actions, never states.',
  ],
  sections: [
    {
      id: 'simple',
      title: 'Past simple',
      blocks: [
        {
          t: 'table',
          head: ['', 'Regular (play)', 'Irregular (go)', 'be'],
          rows: [
            ['Affirmative', 'She **played**.', 'She **went**.', 'I / he / she / it **was**; you / we / they **were**'],
            ['Negative', 'She **didn’t play**.', 'She **didn’t go**.', 'I **wasn’t**; they **weren’t**'],
            ['Question', '**Did** she **play**?', '**Did** she **go**?', '**Was** he there? **Were** they there?'],
          ],
          caption: 'The same form for every person (except *be*). Negatives and questions use *did* + base form: never *didn’t went* or *did she went*.',
        },
        {
          t: 'table',
          head: ['-ed spelling', 'Examples'],
          rows: [
            ['most verbs: add -ed', 'walk → walked, open → opened'],
            ['ending in -e: add -d', 'live → lived, smile → smiled'],
            ['consonant + y: y → -ied', 'study → studied, carry → carried (but play → played)'],
            ['one stressed vowel + one consonant: double', 'stop → stopped, plan → planned, prefer → preferred (but visit → visited: stress on first syllable)'],
            ['British: -l doubles', 'travel → travelled, cancel → cancelled'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Finished actions, stated time', body: 'I **met** her **in 2012**. We **watched** a film **last night**. He **left** **two hours ago**.' },
            { title: 'A sequence of events', body: 'She **opened** the door, **switched on** the light and **screamed**.' },
            { title: 'Past states and habits', body: 'He **lived** in Cairo as a child. We **walked** to school every day.' },
            { title: 'People no longer alive, finished periods', body: 'Shakespeare **wrote** *Hamlet* around 1600. The Romans **built** roads across Britain.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Saying -ed',
          text: 'Three sounds: /t/ after voiceless sounds (*walked, stopped, washed*), /d/ after voiced sounds (*played, lived, opened*), and an extra syllable /ɪd/ after t or d (*wanted, needed, decided*).',
        },
      ],
    },
    {
      id: 'continuous',
      title: 'Past continuous',
      blocks: [
        {
          t: 'table',
          head: ['', 'Form', 'Example'],
          rows: [
            ['Affirmative', 'was / were + -ing', 'I **was sleeping**. They **were talking**.'],
            ['Negative', 'wasn’t / weren’t + -ing', 'She **wasn’t listening**.'],
            ['Question', 'Was / Were + subject + -ing?', 'What **were** you **doing** at midnight?'],
          ],
        },
        {
          t: 'flow',
          title: 'Timeline: an interrupted action',
          nodes: [
            { label: 'Longer action begins', sub: 'I was having a shower…', tone: 'data' },
            { label: 'Short event cuts in', sub: '…when the phone **rang**.', tone: 'process' },
            { label: 'Longer action may continue', sub: 'or stop', tone: 'output' },
          ],
          caption: 'Long background action: past continuous. Short interrupting event: past simple. *While* usually introduces the longer action, *when* the shorter one.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'In progress at a past time', body: 'At 9 pm yesterday I **was watching** the news.' },
            { title: 'Interrupted', body: 'We **were crossing** the road when a car **appeared**.' },
            { title: 'Two actions in parallel', body: 'While I **was cooking**, the kids **were doing** their homework.' },
            { title: 'Setting the scene', body: 'The sun **was shining** and birds **were singing**. Then she **saw** him.' },
          ],
        },
        {
          t: 'table',
          head: ['Sentence', 'What happened'],
          rows: [
            ['When she arrived, we **were having** dinner.', 'Dinner had started; she arrived in the middle.'],
            ['When she arrived, we **had** dinner.', 'She arrived, then we ate (a sequence).'],
            ['When she arrived, we **had had** dinner.', 'Dinner was over before she came.'],
          ],
          caption: 'Same *when*, three different stories: the tense, not the time word, sets the order.',
        },
      ],
    },
    {
      id: 'perfect',
      title: 'Past perfect and past perfect continuous',
      blocks: [
        {
          t: 'table',
          head: ['', 'Past perfect', 'Past perfect continuous'],
          rows: [
            ['Affirmative', 'had + past participle: They**’d left**.', 'had been + -ing: She**’d been crying**.'],
            ['Negative', 'hadn’t + past participle: I **hadn’t eaten**.', 'hadn’t been + -ing: He **hadn’t been sleeping**.'],
            ['Question', 'Had + subject + pp: **Had** you **met** before?', 'Had + subject + been + -ing: How long **had** they **been waiting**?'],
          ],
        },
        {
          t: 'flow',
          title: 'Timeline: two points in the past',
          nodes: [
            { label: 'Earlier past', sub: 'The film started (7.30).', tone: 'data' },
            { label: 'Later past', sub: 'We arrived (7.45).', tone: 'process' },
            { label: 'Now', sub: 'telling the story', tone: 'output' },
          ],
          caption: '→ When we arrived, the film **had** already **started**. The past perfect marks the earlier of two past events.',
        },
        {
          t: 'list',
          items: [
            '**Earlier past**: By the time the ambulance came, he **had stopped** breathing.',
            '**Explaining a past situation**: I wasn’t hungry because I**’d eaten** a big lunch.',
            '**Reported speech**: She said she **had lost** her passport. (direct: “I’ve lost my passport.”)',
            '**Third conditional and wishes**: If I **had known**, I would have come. I wish I **hadn’t said** that.',
            '**Duration up to a past point** (continuous): We**’d been driving** for six hours when the engine failed.',
            '**Cause of a past result** (continuous): The pitch was muddy: it **had been raining** all week.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'When the past perfect is optional',
          text: 'If *before* or *after* already makes the order clear, the past simple is fine: After she **finished** (or **had finished**) the exam, she went home. Do not overuse it: a story told entirely in the past perfect reads badly. Use it to step back, then return to the past simple.',
        },
      ],
    },
    {
      id: 'habits',
      title: 'Used to and would',
      blocks: [
        {
          t: 'table',
          head: ['', 'used to', 'would'],
          rows: [
            ['Past repeated actions', 'We **used to go** to Wales every summer.', 'We **would go** to Wales every summer.'],
            ['Past states', 'I **used to have** long hair. She **used to live** in Hull.', '*I would have long hair* is wrong: no states.'],
            ['Negative', 'I **didn’t use to** like olives.', 'rarely used for past habits'],
            ['Question', '**Did** you **use to** play rugby?', 'not used this way'],
            ['Needs context?', 'No: can open a story.', 'Usually yes: set the scene first, often with *used to*.'],
          ],
        },
        {
          t: 'example',
          title: 'A childhood memory using both',
          lines: [
            { text: 'When I was small, we **used to live** above my grandparents’ shop. (state: *used to* only)' },
            { text: 'Every Saturday my grandfather **would take** me to the market. (repeated action: *would* fine)' },
            { text: 'He **would buy** me a bag of sweets and we **would walk** home the long way.' },
            { text: 'One Saturday it **snowed** so heavily that the market **was** closed. (single event: past simple)' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Three look-alikes',
          text: '**used to do** = past habit (*I used to smoke*). **be used to doing** = be accustomed to (*I’m used to getting up early*). **get used to doing** = become accustomed (*You’ll get used to driving on the left*). After *be/get used to*, use *-ing* or a noun, not the base form.',
        },
      ],
    },
    {
      id: 'story',
      title: 'All four in one narrative',
      blocks: [
        {
          t: 'example',
          title: 'The missed flight',
          lines: [
            { label: 'Past continuous', text: 'It **was raining** and the taxi **was crawling** through traffic.' },
            { label: 'Past perfect cont.', text: 'I **had been checking** my watch every two minutes since we left the hotel.' },
            { label: 'Past simple', text: 'At last we **reached** the airport. I **ran** to the desk.' },
            { label: 'Past perfect', text: 'But the gate **had closed** ten minutes earlier.' },
            { label: 'Past simple', text: 'I **sat** down and **laughed**: I **didn’t know** what else to do.' },
          ],
        },
      ],
    },
    {
      id: 'errors-practice',
      title: 'Common errors and practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'I **didn’t see** her.',
            '**Did** you **go** out?',
            'I **was walking** home when I **saw** the accident.',
            'I **saw** that film **last year**.',
            'I **used to live** in Leeds.',
            'He **had already gone** when I arrived.',
          ],
          dont: [
            'I *didn’t saw* her.',
            '*Did you went* out?',
            'I *walked* home when I *was seeing* the accident.',
            'I *have seen* that film last year.',
            'I *would live* in Leeds.',
            'He *already went* when I arrived (when the order matters).',
          ],
        },
        {
          t: 'example',
          title: 'Practice with answers',
          lines: [
            { label: '1', text: '*We ___ (go) to Crete two years ago.* → **went**: finished time (*ago*).' },
            { label: '2', text: '*At 3 am I ___ still ___ (study).* → **was … studying**: in progress at a past moment.' },
            { label: '3', text: '*I ___ (cook) when the smoke alarm ___ (go) off.* → **was cooking … went**: long action interrupted.' },
            { label: '4', text: '*When I opened the fridge, someone ___ (eat) my cake.* → **had eaten**: earlier past.' },
            { label: '5', text: '*She was exhausted because she ___ (work) since dawn.* → **had been working**: duration up to a past point.' },
            { label: '6', text: '*I ___ (not / like) coffee when I was younger.* → **didn’t use to like** (or **didn’t like**): past state.' },
            { label: '7', text: 'Correct it: *My dad would have a beard.* → **My dad used to have a beard.** *Would* cannot describe states.' },
            { label: '8', text: 'Correct it: *Did you saw the match?* → **Did you see the match?**' },
            { label: '9', text: 'Correct it: *I’m not used to wake up so early.* → **I’m not used to waking up so early.**' },
            { label: '10', text: 'Explain the difference: *When the boss came in, we started / were starting / had started the meeting.* → **started**: he came, then we began. **were starting**: we were just beginning as he came. **had started**: we were already in it.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
  ],
  related: ['grammar/verbs/tenses-overview', 'grammar/verbs/present-tenses', 'grammar/verbs/irregular-verbs', 'grammar/verbs/reported-speech', 'grammar/verbs/conditionals-and-mood', 'grammar/verbs/future-forms'],
}

export default guide
