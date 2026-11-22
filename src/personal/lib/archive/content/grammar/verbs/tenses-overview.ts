import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'English has three time frames (past, present, future) and four aspects (simple, continuous, perfect, perfect continuous). Cross them and you get the twelve “tenses” that grammar books and exams talk about. This page is the single map: how each one is built, what it is for, and how to choose between them.',
  nutshell: [
    '**Time** says *when* (past, present, future); **aspect** says *how the speaker views the action*: as a whole, in progress, completed before a point, or ongoing up to a point.',
    'Every tense is built from a small kit: **be** + *-ing* (continuous), **have** + past participle (perfect), **will** (future), and the base or past form of the main verb.',
    'Only the first auxiliary changes for person and time; the main verb’s form is fixed by the aspect. *She has been working*: **has** carries the person and present time, *been working* never changes.',
    'Questions and negatives always work through that first auxiliary. When there is none (present and past simple), English adds **do / does / did**.',
    'Strictly, English has only two inflected tenses (present and past); “future” is made with modals and other forms. Teaching grammars still call all twelve combinations tenses, and so does this shelf.',
  ],
  sections: [
    {
      id: 'grid',
      title: 'The grid: all twelve in one table',
      lead: 'One verb, *work*, with the subject *she*, in every combination.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Simple', 'Continuous', 'Perfect', 'Perfect continuous'],
          rows: [
            ['**Past**', 'she worked', 'she was working', 'she had worked', 'she had been working'],
            ['**Present**', 'she works', 'she is working', 'she has worked', 'she has been working'],
            ['**Future**', 'she will work', 'she will be working', 'she will have worked', 'she will have been working'],
          ],
          caption: 'Read across a row and the time stays the same while the view of the action changes; read down a column and the view stays the same while the time moves.',
        },
        {
          t: 'table',
          head: ['Aspect', 'Building kit', 'What it shows'],
          rows: [
            ['Simple', 'base / past form (+ *will* for future)', 'The action as a complete fact, habit or state'],
            ['Continuous (progressive)', '**be** + verb-*ing*', 'The action in progress, temporary or unfinished at that moment'],
            ['Perfect', '**have** + past participle', 'The action completed *before* a reference point, with a link to that point'],
            ['Perfect continuous', '**have been** + verb-*ing*', 'An activity in progress over a period *up to* a reference point'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The stacking order never changes',
          text: 'Auxiliaries always line up in the same order: **modal → have → be → main verb**. *She will have been working*: modal (*will*), perfect (*have*), continuous (*been*), main verb (*working*). Each auxiliary decides the form of the word after it: a modal takes the base form, *have* takes a past participle, *be* takes *-ing*.',
        },
      ],
    },
    {
      id: 'timelines',
      title: 'Timelines for each aspect',
      blocks: [
        {
          t: 'flow',
          title: 'Simple: a whole event or a fact',
          nodes: [
            { label: 'Past', sub: 'I **walked** home.', tone: 'data' },
            { label: 'Now', sub: 'I **walk** home every day.', tone: 'process' },
            { label: 'Future', sub: 'I **will walk** home.', tone: 'output' },
          ],
          caption: 'Each event is seen from the outside, as one complete dot on the line, or as a repeated pattern of dots (a habit).',
        },
        {
          t: 'flow',
          title: 'Continuous: inside the action at a moment',
          nodes: [
            { label: 'Action starts', sub: 'before the moment', tone: 'data' },
            { label: 'Reference moment', sub: 'At 8 pm I **was cooking**.', tone: 'process' },
            { label: 'Action goes on', sub: 'after the moment', tone: 'output' },
          ],
          caption: 'The reference moment sits in the middle of the action. Present: *now*. Past: *at 8 pm yesterday*. Future: *at 8 pm tomorrow I will be cooking*.',
        },
        {
          t: 'flow',
          title: 'Perfect: completed before a point, still relevant at it',
          nodes: [
            { label: 'Earlier event', sub: 'The film started.', tone: 'data' },
            { label: 'Reference point', sub: 'When we arrived, the film **had started**.', tone: 'process' },
          ],
          caption: 'The perfect looks *back* from a reference point. Present perfect looks back from now; past perfect from a past moment; future perfect from a future one.',
        },
        {
          t: 'flow',
          title: 'Perfect continuous: an activity stretching up to a point',
          nodes: [
            { label: 'Start', sub: 'nine o’clock', tone: 'data' },
            { label: 'Ongoing activity', sub: 'waiting… waiting…', tone: 'process' },
            { label: 'Reference point', sub: 'By noon I **had been waiting** for three hours.', tone: 'output' },
          ],
          caption: 'Focus on duration and on the activity itself, often with *for*, *since* or *how long*.',
        },
      ],
    },
    {
      id: 'formation',
      title: 'Affirmative, negative and question for all twelve',
      lead: 'The pattern: put **not** after the first auxiliary; for a question, move the first auxiliary in front of the subject.',
      blocks: [
        {
          t: 'table',
          head: ['Tense', 'Affirmative', 'Negative', 'Question'],
          rows: [
            ['Present simple', 'He plays.', 'He doesn’t play.', 'Does he play?'],
            ['Present continuous', 'He is playing.', 'He isn’t playing.', 'Is he playing?'],
            ['Present perfect', 'He has played.', 'He hasn’t played.', 'Has he played?'],
            ['Present perfect continuous', 'He has been playing.', 'He hasn’t been playing.', 'Has he been playing?'],
            ['Past simple', 'He played.', 'He didn’t play.', 'Did he play?'],
            ['Past continuous', 'He was playing.', 'He wasn’t playing.', 'Was he playing?'],
            ['Past perfect', 'He had played.', 'He hadn’t played.', 'Had he played?'],
            ['Past perfect continuous', 'He had been playing.', 'He hadn’t been playing.', 'Had he been playing?'],
            ['Future simple', 'He will play.', 'He won’t play.', 'Will he play?'],
            ['Future continuous', 'He will be playing.', 'He won’t be playing.', 'Will he be playing?'],
            ['Future perfect', 'He will have played.', 'He won’t have played.', 'Will he have played?'],
            ['Future perfect continuous', 'He will have been playing.', 'He won’t have been playing.', 'Will he have been playing?'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do-support takes the tense away from the main verb',
          text: 'In the simple present and past, the tense moves onto *do*, and the main verb goes back to its base form: She went → She didn’t **go** (not *didn’t went*); He likes it → Does he **like** it? (not *Does he likes*).',
        },
      ],
    },
    {
      id: 'uses',
      title: 'What each tense is for, with time signals',
      blocks: [
        {
          t: 'table',
          head: ['Tense', 'Core uses', 'Typical time signals', 'Example'],
          rows: [
            ['Present simple', 'habits, facts, timetables, states', 'always, usually, every day, on Mondays', 'Water **boils** at 100 °C.'],
            ['Present continuous', 'now, temporary situations, fixed plans', 'now, at the moment, this week, currently', 'I**’m staying** with my aunt this month.'],
            ['Present perfect', 'past with a present link: experience, result, unfinished period', 'ever, never, already, yet, just, so far, since', 'I**’ve lost** my keys (and I still can’t find them).'],
            ['Present perfect continuous', 'activity from past up to now, often with visible results', 'for, since, how long, all day, lately', 'She**’s been running**: she’s out of breath.'],
            ['Past simple', 'finished actions at a stated or known past time', 'yesterday, last year, in 2019, ago, when', 'We **moved** to Leeds in 2015.'],
            ['Past continuous', 'background in progress, interrupted actions', 'while, when, at 6 pm yesterday, all evening', 'I **was reading** when the lights went out.'],
            ['Past perfect', 'earlier past, before another past event', 'before, after, by the time, already, when', 'The train **had left** when we got there.'],
            ['Past perfect continuous', 'duration up to a past point, cause of a past result', 'for, since, how long, before', 'His eyes were red: he **had been crying**.'],
            ['Future simple (*will*)', 'predictions, instant decisions, promises, offers', 'tomorrow, next week, I think, probably', 'I**’ll carry** that for you.'],
            ['Future continuous', 'in progress at a future moment, polite enquiries', 'this time tomorrow, at 9 pm tonight', 'This time tomorrow I**’ll be flying** to Rome.'],
            ['Future perfect', 'completed before a future point', 'by, by the time, before, by then', 'By June she **will have finished** her degree.'],
            ['Future perfect continuous', 'duration up to a future point', 'for … by, by the time', 'In May I **will have been teaching** for ten years.'],
          ],
        },
        {
          t: 'p',
          text: 'Time signals help but do not decide by themselves. *When* works with past simple, past continuous and past perfect alike: the choice depends on the order and shape of the events, not on the word.',
        },
      ],
    },
    {
      id: 'one-story',
      title: 'Twelve tenses in one story',
      blocks: [
        {
          t: 'example',
          title: 'Maya and the marathon',
          lines: [
            { label: 'Present simple', text: 'Maya **runs** every morning.' },
            { label: 'Present continuous', text: 'Right now she **is training** for the London Marathon.' },
            { label: 'Present perfect', text: 'She **has run** two half-marathons.' },
            { label: 'Present perfect cont.', text: 'She **has been training** since January.' },
            { label: 'Past simple', text: 'Last week she **ran** 30 kilometres.' },
            { label: 'Past continuous', text: 'She **was running** along the canal when it started to rain.' },
            { label: 'Past perfect', text: 'She **had forgotten** her jacket, so she got soaked.' },
            { label: 'Past perfect cont.', text: 'She **had been running** for two hours by the time she got home.' },
            { label: 'Future simple', text: 'She thinks she **will finish** in under four hours.' },
            { label: 'Future continuous', text: 'At ten on race day she **will be running** past Tower Bridge.' },
            { label: 'Future perfect', text: 'By lunchtime she **will have crossed** the line.' },
            { label: 'Future perfect cont.', text: 'By race day she **will have been training** for four months.' },
          ],
        },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing a tense, and common errors',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Fix the time', body: 'Is the reference point now, a past moment, or a future moment?' },
            { title: 'Is it in progress at that point?', body: 'If you are inside the action, use a continuous form (unless the verb is a state verb such as *know*, *like*, *own*).' },
            { title: 'Does it look back from that point?', body: 'If the action is finished before the point but matters at it, or you are measuring how long up to it, use a perfect form.' },
            { title: 'Both?', body: 'Duration of an activity up to the point: perfect continuous.' },
            { title: 'Neither?', body: 'A plain fact, habit or completed event: simple.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'I **have lived** here for five years (and still do).',
            'I **know** the answer. (state verb: no continuous)',
            'When I **arrived**, they **had eaten**. (two pasts, earlier one in past perfect)',
            'If it **rains** tomorrow, we**’ll stay** in. (present after *if* for the future)',
            'I**’ve been waiting** for an hour.',
          ],
          dont: [
            'I *am living* here since five years.',
            'I *am knowing* the answer.',
            'When I arrived, they *ate* already.',
            'If it *will rain* tomorrow, we’ll stay in.',
            'I *wait* for an hour.',
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'State verbs',
          text: 'Verbs of knowing, liking, owning and being (*know, believe, understand, like, love, hate, want, need, own, belong, seem, contain*) are normally not used in continuous forms. Some have an action meaning that can be: I **have** a car (state) but I**’m having** lunch (action); She **thinks** it’s fine (opinion) but She**’s thinking** about it (mental activity).',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice: name the tense, then check',
      blocks: [
        {
          t: 'example',
          title: 'Questions and answers',
          lines: [
            { label: '1', text: '*They had been arguing for hours.* → **Past perfect continuous**: *had been* + *-ing*, duration up to a past point.' },
            { label: '2', text: '*I’ll be working late tonight.* → **Future continuous**: *will be* + *-ing*, in progress at a future time.' },
            { label: '3', text: '*Has the parcel arrived yet?* → **Present perfect** question: *has* + past participle, with *yet*.' },
            { label: '4', text: '*She didn’t call.* → **Past simple** negative: *did not* + base form.' },
            { label: '5', text: 'Correct it: *I am owning this flat since 2020.* → **I have owned this flat since 2020.** *Own* is a state verb, and *since* needs a perfect.' },
            { label: '6', text: 'Fill the gap: *By 2030 the bridge ___ (complete).* → **will have been completed** (future perfect passive), or *will be complete* using the adjective.' },
            { label: '7', text: 'Fill the gap: *Look! It ___ (snow).* → **is snowing**: happening now.' },
            { label: '8', text: 'Fill the gap: *When I got to the station, the train ___ (already / leave).* → **had already left**: earlier past.' },
            { label: '9', text: 'Make a question: *He works in Dublin.* → **Does he work in Dublin?** (*does* takes the -s; *work* goes back to base).' },
            { label: '10', text: 'Which is better? *I ___ (read) your report. It’s excellent.* → **have read**: finished action with a present result, no past time stated.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
    'Huddleston, R., & Pullum, G. K. (2002). *The Cambridge Grammar of the English Language*. Cambridge University Press.',
  ],
  related: ['grammar/verbs/present-tenses', 'grammar/verbs/past-tenses', 'grammar/verbs/future-forms', 'grammar/verbs/irregular-verbs', 'grammar/parts-of-speech/verbs-basics', 'grammar/verbs/active-and-passive'],
}

export default guide
