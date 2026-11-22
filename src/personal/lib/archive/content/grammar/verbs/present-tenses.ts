import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The four present tenses all have *now* as their reference point, but they look at it differently: as a general truth, as something in progress, as the result of the past, or as an activity that has been going on up to this moment.',
  nutshell: [
    '**Present simple** (*she works*): habits, facts, permanent states, timetables and the commentary of stories and sport.',
    '**Present continuous** (*she is working*): happening now or around now, temporary situations, changes in progress and arranged future plans.',
    '**Present perfect** (*she has worked*): a past action with a link to now: experience, recent news with a result, or an unfinished period.',
    '**Present perfect continuous** (*she has been working*): an activity that started in the past and has continued up to now, focusing on duration or visible effects.',
    'Use **for** with a length of time (*for three weeks*) and **since** with a starting point (*since Monday*).',
  ],
  sections: [
    {
      id: 'simple',
      title: 'Present simple',
      blocks: [
        {
          t: 'table',
          head: ['', 'I / you / we / they', 'he / she / it'],
          rows: [
            ['Affirmative', 'I **work**.', 'She **works**.'],
            ['Negative', 'I **don’t work**.', 'She **doesn’t work**.'],
            ['Question', '**Do** you **work**?', '**Does** she **work**?'],
            ['Short answers', 'Yes, I do. / No, I don’t.', 'Yes, she does. / No, she doesn’t.'],
          ],
        },
        {
          t: 'table',
          head: ['Spelling of the -s form', 'Rule', 'Examples'],
          rows: [
            ['most verbs', 'add -s', 'play → plays, read → reads'],
            ['-s, -sh, -ch, -x, -z, -o', 'add -es', 'pass → passes, wash → washes, watch → watches, fix → fixes, go → goes, do → does'],
            ['consonant + y', 'y → -ies', 'study → studies, cry → cries (but play → plays: vowel + y)'],
            ['irregular', '', 'have → has, be → is'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Habits and routines', body: 'I **get up** at seven. She **never drinks** coffee. We **go** swimming on Fridays.' },
            { title: 'Facts and general truths', body: 'The sun **rises** in the east. Penguins **don’t fly**. Light **travels** faster than sound.' },
            { title: 'Permanent states', body: 'He **lives** in Glasgow. I **don’t like** horror films. This box **contains** books.' },
            { title: 'Timetables and schedules', body: 'The train **leaves** at 6.15. The term **starts** on 4 September.' },
            { title: 'Instructions and recipes', body: 'You **turn** left at the lights. First you **chop** the onions.' },
            { title: 'Commentary, headlines, jokes', body: 'Kane **shoots**… and **scores**! A man **walks** into a bar…' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Adverbs of frequency',
          text: 'They go **before** the main verb but **after** *be*: She **often** works late; She is **often** late. Scale: always, usually, often, sometimes, rarely, never.',
        },
      ],
    },
    {
      id: 'continuous',
      title: 'Present continuous',
      blocks: [
        {
          t: 'table',
          head: ['', 'Form', 'Example'],
          rows: [
            ['Affirmative', 'am / is / are + -ing', 'I**’m reading**. They**’re eating**.'],
            ['Negative', 'am not / isn’t / aren’t + -ing', 'He **isn’t listening**.'],
            ['Question', 'Am / Is / Are + subject + -ing?', '**Are** you **coming**?'],
          ],
        },
        {
          t: 'table',
          head: ['-ing spelling', 'Examples'],
          rows: [
            ['most verbs: add -ing', 'read → reading, go → going'],
            ['silent -e: drop it', 'make → making, write → writing (but see → seeing, be → being)'],
            ['-ie → -ying', 'lie → lying, die → dying, tie → tying'],
            ['one vowel + one consonant, stressed: double', 'run → running, sit → sitting, begin → beginning'],
            ['British: -l doubles after one vowel', 'travel → travelling, cancel → cancelling (American: traveling)'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Happening now', body: 'Be quiet, the baby **is sleeping**. What **are** you **doing**?' },
            { title: 'Around now, temporary', body: 'I**’m reading** a great book this week. She**’s working** from home until Friday.' },
            { title: 'Changing situations', body: 'Prices **are rising**. Your English **is getting** better.' },
            { title: 'Fixed future arrangements', body: 'We**’re flying** to Lisbon on Saturday. I**’m meeting** Sam at six.' },
            { title: 'Annoying habits (with always)', body: 'He**’s always leaving** his socks on the floor!' },
          ],
        },
        {
          t: 'table',
          head: ['Present simple (permanent / habit)', 'Present continuous (temporary / now)'],
          rows: [
            ['I **live** in Manchester.', 'I**’m living** with friends until I find a flat.'],
            ['He **plays** the guitar.', 'He**’s playing** the guitar (listen!).'],
            ['She **works** in a bank.', 'She**’s working** in the Paris office this month.'],
            ['I **think** you’re right. (opinion: state)', 'I**’m thinking** about moving. (mental activity)'],
            ['This soup **tastes** good. (state)', 'He**’s tasting** the soup. (action)'],
          ],
        },
      ],
    },
    {
      id: 'perfect',
      title: 'Present perfect',
      blocks: [
        {
          t: 'table',
          head: ['', 'Form', 'Example'],
          rows: [
            ['Affirmative', 'have / has + past participle', 'I**’ve finished**. She**’s gone** out.'],
            ['Negative', 'haven’t / hasn’t + past participle', 'We **haven’t seen** it.'],
            ['Question', 'Have / Has + subject + past participle?', '**Have** you ever **been** to Japan?'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Life experience (time unstated)', body: 'I**’ve been** to Peru. **Have** you ever **eaten** durian? She**’s never driven** a car.' },
            { title: 'Recent action, present result', body: 'I**’ve lost** my phone (I don’t have it now). Someone**’s broken** the window.' },
            { title: 'News', body: 'The Prime Minister **has resigned**. Scientists **have discovered** a new species.' },
            { title: 'Unfinished period up to now', body: 'I**’ve known** her for years. He**’s lived** here since 2018. I**’ve drunk** three coffees today.' },
            { title: 'With just, already, yet', body: 'I**’ve just** eaten. She**’s already** left. **Have** they arrived **yet**? I **haven’t** decided **yet**.' },
            { title: 'Superlatives and first time', body: 'It’s the best film I**’ve ever seen**. This is the first time I**’ve flown** alone.' },
          ],
        },
        {
          t: 'flow',
          title: 'Timeline: unfinished period',
          nodes: [
            { label: '2018', sub: 'He moved here.', tone: 'data' },
            { label: 'All the years since', sub: 'still living here', tone: 'process' },
            { label: 'Now', sub: 'He**’s lived** here since 2018.', tone: 'output' },
          ],
          caption: 'The period runs right up to the present, so the past simple (*He lived here*) would wrongly suggest he has left.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Been or gone?',
          text: 'She**’s been** to Rome = she went and came back (experience). She**’s gone** to Rome = she is there now, or on the way.',
        },
      ],
    },
    {
      id: 'perfect-continuous',
      title: 'Present perfect continuous',
      blocks: [
        {
          t: 'table',
          head: ['', 'Form', 'Example'],
          rows: [
            ['Affirmative', 'have / has been + -ing', 'I**’ve been waiting** for ages.'],
            ['Negative', 'haven’t / hasn’t been + -ing', 'She **hasn’t been sleeping** well.'],
            ['Question', 'Have / Has + subject + been + -ing?', 'How long **have** you **been learning** Korean?'],
          ],
        },
        {
          t: 'list',
          items: [
            '**Duration up to now**: It**’s been raining** since this morning. We**’ve been queuing** for forty minutes.',
            '**Visible effects of a recent activity**: Your hands are dirty. What **have** you **been doing**? I**’m** tired because I**’ve been gardening**.',
            '**Repeated activity over a period**: She**’s been calling** me all week.',
          ],
        },
        {
          t: 'table',
          head: ['Present perfect (result, how much / how many)', 'Present perfect continuous (activity, how long)'],
          rows: [
            ['I**’ve painted** the kitchen. (it’s finished)', 'I**’ve been painting** the kitchen. (maybe not finished; there’s paint on me)'],
            ['She**’s written** three emails.', 'She**’s been writing** emails all morning.'],
            ['I**’ve read** your book. (all of it)', 'I**’ve been reading** your book. (some of it)'],
            ['I**’ve known** him for years. (state verb: no continuous)', '*I’ve been knowing him* is wrong.'],
          ],
        },
      ],
    },
    {
      id: 'contrasts',
      title: 'Present perfect versus past simple, and for versus since',
      blocks: [
        {
          t: 'table',
          head: ['Past simple: finished time', 'Present perfect: time up to now or unstated'],
          rows: [
            ['I **saw** that film **last week**.', 'I**’ve seen** that film. (some time in my life)'],
            ['She **lived** in Rome **for two years** (she doesn’t now).', 'She**’s lived** in Rome **for two years** (she still does).'],
            ['I **lost** my keys yesterday, but I **found** them.', 'I**’ve lost** my keys. (still lost)'],
            ['**Did** you **finish** the report **this morning**? (asked in the afternoon)', '**Have** you **finished** the report **this morning**? (asked while it’s still morning)'],
            ['**When did** you **arrive**?', '*When have you arrived?* is wrong: *when* asks for a finished time.'],
          ],
          caption: 'Any finished-time word (yesterday, ago, last year, in 2010, when?) forces the past simple in British English.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'American usage',
          text: 'American English often uses the past simple with *just, already* and *yet*: *Did you eat yet?* *I just saw him.* British English prefers *Have you eaten yet?* and *I’ve just seen him*. Both are standard in their own variety.',
        },
        {
          t: 'table',
          head: ['for + a length of time', 'since + a starting point'],
          rows: [
            ['for ten minutes', 'since 9 o’clock'],
            ['for three days', 'since Monday'],
            ['for six months', 'since March'],
            ['for years / for ages', 'since 2015 / since I was a child'],
            ['for a long time', 'since the last election'],
          ],
          caption: 'Test: ask “how long?” (for) or “since when?” (since). *I’ve been here for an hour* = *I’ve been here since 3 pm* if it is now 4 pm.',
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
            'She **lives** in Paris.',
            '**Does** he **speak** French?',
            'I**’ve worked** here **since** 2019.',
            'I **saw** him **yesterday**.',
            'I **understand** now.',
            'I**’ve been** here for two hours.',
          ],
          dont: [
            'She *live* in Paris.',
            '*Does he speaks* French?',
            'I *work* here since 2019.',
            'I *have seen* him yesterday.',
            'I *am understanding* now.',
            'I *am here since* two hours.',
          ],
        },
        {
          t: 'example',
          title: 'Practice with answers',
          lines: [
            { label: '1', text: '*Water ___ (freeze) at 0 °C.* → **freezes**: a scientific fact.' },
            { label: '2', text: '*Shh! I ___ (try) to concentrate.* → **’m trying**: happening now.' },
            { label: '3', text: '*I ___ (know) Ali since primary school.* → **have known**: state verb, unfinished period.' },
            { label: '4', text: '*She ___ (break) her arm last summer.* → **broke**: finished time (*last summer*).' },
            { label: '5', text: '*Why are you wet? ~ I ___ (swim).* → **’ve been swimming**: recent activity, visible result.' },
            { label: '6', text: '*How many cups of tea ___ you ___ (have) today?* → **have … had**: *today* is unfinished, counting a quantity.' },
            { label: '7', text: '*We ___ (meet) the landlord tomorrow at ten.* → **’re meeting**: fixed arrangement.' },
            { label: '8', text: 'Correct it: *He don’t like football.* → **He doesn’t like football.**' },
            { label: '9', text: 'Correct it: *I’m waiting here since 4 pm.* → **I’ve been waiting here since 4 pm.**' },
            { label: '10', text: '*for* or *since*? *She’s been ill ___ last Tuesday / ___ a week.* → **since** last Tuesday, **for** a week.' },
            { label: '11', text: '*___ you ever ___ (try) sushi?* → **Have … tried**: life experience.' },
            { label: '12', text: '*The bus ___ (leave) at 7.40 every morning.* → **leaves**: timetable.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press, units 1–20.',
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
  ],
  related: ['grammar/verbs/tenses-overview', 'grammar/verbs/past-tenses', 'grammar/verbs/future-forms', 'grammar/verbs/subject-verb-agreement', 'grammar/sentences/questions-negatives-word-order', 'grammar/parts-of-speech/adverbs'],
}

export default guide
