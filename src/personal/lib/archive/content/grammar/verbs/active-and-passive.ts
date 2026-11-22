import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In the **active voice** the subject does the action: *The chef cooked the meal.* In the **passive voice** the subject receives it: *The meal was cooked (by the chef).* The passive is not wrong or weak in itself; it is a tool for putting the important thing first, for when the doer is unknown or obvious, and for formal and scientific writing. This guide shows how to form it in every tense and when it helps or hides.',
  nutshell: [
    'Passive = a form of **be** + **past participle**: *is made, was made, has been made, will be made*.',
    'Only **transitive** verbs (verbs with an object) can normally go passive: *arrive* and *happen* cannot.',
    'The doer, if mentioned, goes in a **by-phrase**: *The window was broken by a ball.* Most passives leave it out.',
    'Use the passive when the doer is **unknown, unimportant, obvious** or better kept in the background, or to keep the topic as subject.',
    'The **get-passive** (*got stolen, got promoted*) is informal and often stresses something happening to someone.',
    'Overused, the passive can hide responsibility: *Mistakes were made.* Ask: who did it?',
  ],
  sections: [
    {
      id: 'form',
      title: 'Turning active into passive',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Find the object', body: 'Active: *The council **closed** the library.* The object is *the library*.' },
            { title: '2. Make it the subject', body: '*The library…*' },
            { title: '3. Use be in the same tense as the active verb', body: '*closed* is past simple, so use *was*: *The library was…*' },
            { title: '4. Add the past participle of the main verb', body: '*The library was closed…*' },
            { title: '5. Add by + doer only if it matters', body: '*The library was closed (by the council).*' },
          ],
        },
        {
          t: 'flow',
          title: 'What moves where',
          nodes: [
            { label: 'Active subject', sub: 'the council', tone: 'human' },
            { label: 'Verb', sub: 'closed → was closed', tone: 'process' },
            { label: 'Active object', sub: 'the library → new subject', tone: 'data' },
            { label: 'Optional by-phrase', sub: 'by the council', tone: 'output' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The tense lives in be',
          text: 'The main verb is always a past participle in the passive; the tense is carried entirely by *be*. So learning the passive means learning *be* in every tense.',
        },
      ],
    },
    {
      id: 'tenses',
      title: 'The passive in every tense',
      blocks: [
        {
          t: 'table',
          head: ['Tense', 'Active', 'Passive'],
          rows: [
            ['Present simple', 'They **clean** the room daily.', 'The room **is cleaned** daily.'],
            ['Present continuous', 'They **are cleaning** the room.', 'The room **is being cleaned**.'],
            ['Present perfect', 'They **have cleaned** the room.', 'The room **has been cleaned**.'],
            ['Past simple', 'They **cleaned** the room.', 'The room **was cleaned**.'],
            ['Past continuous', 'They **were cleaning** the room.', 'The room **was being cleaned**.'],
            ['Past perfect', 'They **had cleaned** the room.', 'The room **had been cleaned**.'],
            ['Future (will)', 'They **will clean** the room.', 'The room **will be cleaned**.'],
            ['Future (going to)', 'They **are going to clean** the room.', 'The room **is going to be cleaned**.'],
            ['Future perfect', 'They **will have cleaned** the room.', 'The room **will have been cleaned**.'],
            ['Modal', 'They **should clean** the room.', 'The room **should be cleaned**.'],
            ['Modal perfect', 'They **must have cleaned** the room.', 'The room **must have been cleaned**.'],
            ['Infinitive', 'I want them **to clean** it.', 'I want it **to be cleaned**.'],
            ['-ing form', 'I hate people **watching** me.', 'I hate **being watched**.'],
          ],
          caption: 'The perfect continuous passives (*has been being cleaned*) are grammatical but so awkward that writers almost always rephrase.',
        },
        {
          t: 'example',
          title: 'One news story, many tenses',
          lines: [
            { label: 'Present perfect', text: 'A rare painting **has been found** in a farmhouse attic.' },
            { label: 'Past simple', text: 'It **was discovered** last week by a builder.' },
            { label: 'Past perfect', text: 'Experts believe it **had been hidden** there for over a century.' },
            { label: 'Present continuous', text: 'It **is being examined** by specialists.' },
            { label: 'Future', text: 'It **will be displayed** at the city museum next year.' },
            { label: 'Modal', text: 'Its value **could be estimated** in the millions.' },
          ],
        },
        {
          t: 'table',
          head: ['Questions and negatives', 'Example'],
          rows: [
            ['Question, present', '**Is** English **spoken** here?'],
            ['Question, past', 'When **was** the bridge **built**?'],
            ['Question, perfect', '**Has** the parcel **been delivered** yet?'],
            ['Negative', 'The results **haven’t been published**. / Cash **is not accepted**.'],
          ],
        },
      ],
    },
    {
      id: 'when',
      title: 'When the passive is the right choice',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Doer unknown', body: '*My bike **was stolen** last night.* (no idea who)' },
            { title: 'Doer obvious', body: '*He **was arrested** for speeding.* (the police, obviously)' },
            { title: 'Doer unimportant', body: '*Rice **is grown** in many parts of Asia.* (the process matters, not the farmers)' },
            { title: 'Keeping the topic in front', body: '*The Eiffel Tower is in Paris. It **was completed** in 1889.* The topic *It* stays as subject.' },
            { title: 'Scientific and technical writing', body: '*The solution **was heated** to 80 °C and **filtered**.* The method matters, not who did it.' },
            { title: 'Rules and notices', body: '*Visitors **are requested** to sign in. Photography **is not permitted**.*' },
            { title: 'Putting new information last', body: '*The play **was written by Shakespeare**.* The by-phrase puts the key name at the end, where stress falls.' },
            { title: 'Tact', body: '*Your application **has not been successful**.* Softer than *We rejected you.*' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The responsibility-dodging passive',
          text: '*Mistakes were made. The decision was taken to close the ward.* These hide who made the mistake or the decision. In reports, journalism and apologies, readers often want to know: **by whom?** If the doer matters, name them.',
        },
        {
          t: 'example',
          title: 'Active or passive? Same facts, different focus',
          lines: [
            { label: 'Active', text: 'Fleming **discovered** penicillin in 1928. (a story about Fleming)' },
            { label: 'Passive', text: 'Penicillin **was discovered** in 1928 by Fleming. (a story about penicillin)' },
            { label: 'Active, clearer', text: 'The committee **approved** the budget.' },
            { label: 'Passive, wordier', text: 'The budget **was approved** by the committee.' },
          ],
        },
      ],
    },
    {
      id: 'special',
      title: 'Special passive patterns',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'Active', 'Passive'],
          rows: [
            ['Two objects (give, send, offer, show, tell)', 'They gave **her** **a prize**.', '**She** was given a prize. / **A prize** was given to her.'],
            ['Reporting: It is said that…', 'People say that he is rich.', '**It is said that** he is rich.'],
            ['Reporting: subject + be said to', 'People believe she lives abroad.', 'She **is believed to live** abroad.'],
            ['Reporting about the past', 'People think the thief escaped by car.', 'The thief **is thought to have escaped** by car.'],
            ['Make / see + infinitive', 'They made him **wait**.', 'He was made **to wait**. (*to* returns)'],
            ['Prepositional verbs', 'Someone looked **after** the kids.', 'The kids were looked **after**. (preposition stays)'],
            ['get-passive', '(informal)', 'He **got fired**. Our flight **got cancelled**.'],
            ['Causative have / get something done', 'A mechanic serviced my car.', 'I **had my car serviced**. / I **got my hair cut**.'],
          ],
        },
        {
          t: 'example',
          title: 'Causative: arranging for someone to do it',
          lines: [
            { label: 'Do it yourself', text: 'I cut my hair. (I did it)' },
            { label: 'Causative', text: 'I **had my hair cut**. (a hairdresser did it)' },
            { label: 'Bad experience', text: 'She **had her phone stolen** on the train. (not arranged: it happened to her)' },
            { label: 'Future', text: 'We’re **getting the kitchen repainted** next week.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Verbs that cannot go passive',
          text: 'Intransitive verbs have no object: *happen, arrive, die, sleep, occur, disappear, seem*. *The accident was happened* is wrong; write **The accident happened.** Some transitive verbs of state also resist the passive: *have* (own), *fit*, *suit*, *lack*, *resemble*. *He has two cars* cannot become *Two cars are had by him*.',
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common mistakes',
      blocks: [
        {
          t: 'dodont',
          do: [
            'The letter **was written** yesterday.',
            'The report **is being checked** now.',
            'The suspect **was seen** leaving.',
            'It **happened** at noon.',
            'English **is spoken** worldwide.',
            'I was **given** a refund.',
          ],
          dont: [
            'The letter was wrote yesterday. (wrong participle)',
            'The report is checking now. (active form, wrong meaning)',
            'The suspect was saw leaving.',
            'It was happened at noon.',
            'English is speak worldwide.',
            'I was give a refund.',
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: '“Never use the passive”',
          text: 'Style guides warn against *overusing* the passive, and active sentences are often shorter and clearer. But the passive is standard in science, law and news, and some of the most famous sentences use it. Choose it when the receiver of the action is your topic. Also note: not every sentence with *was* is passive. *She was tired* and *He was running* are not passives.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Test: add “by zombies”',
          text: 'A popular trick: if you can add *by zombies* after the verb and it still makes sense, it is passive. *The door was opened (by zombies).* Passive. *The door was open (by zombies).* Not passive: *open* is an adjective.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Rewrite or identify. Answers and reasons follow each item.',
      blocks: [
        {
          t: 'example',
          title: 'Questions 1–6: make these passive',
          lines: [
            { label: 'Q1', text: 'Someone is following us.' },
            { label: 'A1', text: '**We are being followed.** Present continuous: *is/are being* + participle.' },
            { label: 'Q2', text: 'They have cancelled the match.' },
            { label: 'A2', text: '**The match has been cancelled.** Present perfect: *has been* + participle.' },
            { label: 'Q3', text: 'The storm will damage many houses.' },
            { label: 'A3', text: '**Many houses will be damaged by the storm.** The by-phrase is worth keeping: the storm is new information.' },
            { label: 'Q4', text: 'Nobody told me about the meeting.' },
            { label: 'A4', text: '**I wasn’t told about the meeting.** The negative moves to *be*.' },
            { label: 'Q5', text: 'People say that the house is haunted. (two ways)' },
            { label: 'A5', text: '**It is said that the house is haunted. / The house is said to be haunted.**' },
            { label: 'Q6', text: 'You must switch off all phones.' },
            { label: 'A6', text: '**All phones must be switched off.** Modal + *be* + participle.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7–10: active or passive, and fix',
          lines: [
            { label: 'Q7', text: 'Is *The shop was closed when I arrived* passive?' },
            { label: 'A7', text: '**Probably not.** Here *closed* describes a state (adjective), not an action someone did then. Compare *The shop was closed by the police at 6 p.m.*, which is passive.' },
            { label: 'Q8', text: 'Correct: *The thief was catched last night.*' },
            { label: 'A8', text: '**The thief was caught last night.** *Catch* is irregular: *catch, caught, caught*.' },
            { label: 'Q9', text: 'Correct: *A strange thing was happened.*' },
            { label: 'A9', text: '**A strange thing happened.** *Happen* is intransitive, so it has no passive.' },
            { label: 'Q10', text: 'Make it active and name the doer: *Errors were made in the accounts (by the finance team).*' },
            { label: 'A10', text: '**The finance team made errors in the accounts.** Active is clearer when responsibility matters.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/verbs/irregular-verbs', note: 'past participles you need for the passive' },
            { path: 'grammar/parts-of-speech/verbs-basics', note: 'transitive and intransitive verbs' },
            { path: 'grammar/verbs/tenses-overview', note: 'the twelve tenses the passive mirrors' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). *Longman Grammar of Spoken and Written English*. Longman.',
    'Pullum, G. K. (2014). Fear and loathing of the English passive. *Language & Communication*, 37, 60–74.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
  ],
  related: [
    'grammar/verbs/irregular-verbs',
    'grammar/verbs/tenses-overview',
    'grammar/parts-of-speech/verbs-basics',
    'grammar/sentences/subject-predicate-object',
    'grammar/usage/register-and-singapore-english',
  ],
}

export default guide
