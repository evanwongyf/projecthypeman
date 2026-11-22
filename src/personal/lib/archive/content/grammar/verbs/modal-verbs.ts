import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Modal verbs (**can, could, may, might, must, shall, should, will, would**, plus **ought to**) sit in front of a main verb and change its *mood*: whether something is possible, allowed, necessary, advisable or likely. They are small words that carry a lot of meaning, and the same modal often does several jobs, so this guide works through them **by function**, contrasting the near-synonyms side by side.',
  nutshell: [
    'A modal is followed by the **bare infinitive**: *She can swim*, never *She can to swim* or *She cans swim*.',
    'Modals have **no -s, no -ing, no -ed** and form questions and negatives without *do*: *Can I go? You mustn’t smoke.*',
    'One modal, many jobs: *must* is both obligation (*You must sign here*) and deduction (*You must be tired*).',
    'For the **past**, use a replacement (*had to, was able to*) or **modal + have + past participle** (*might have left, should have called*).',
    '**Semi-modals** fill the gaps: *have to, need to, be able to, be allowed to, be supposed to, had better, used to*.',
    'The key contrasts: *must* versus *have to*, *mustn’t* versus *don’t have to*, *could* versus *was able to*, *may* versus *might*.',
  ],
  sections: [
    {
      id: 'form',
      title: 'How modals behave',
      lead: 'Modals are auxiliary verbs with their own rules. Get the form right first and the meanings are easier.',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Right', 'Wrong'],
          rows: [
            ['Bare infinitive after a modal', 'You should **go**.', 'You should to go.'],
            ['No -s in the third person', 'She **can** drive.', 'She cans drive.'],
            ['Negative with *not* directly', 'He **mustn’t** be late. / It **won’t** work.', 'He doesn’t must be late.'],
            ['Questions by inversion', '**Could** you help me?', 'Do you could help me?'],
            ['No two modals together (standard English)', 'You **will be able to** come.', 'You will can come.'],
            ['No infinitive or -ing form', 'I’d like **to be able to** ski.', 'I’d like to can ski.'],
          ],
          caption: '*Ought to* is the exception that takes *to*: *You ought to rest.* Its negative is *ought not to*.',
        },
        {
          t: 'terms',
          items: [
            { term: 'Core modals', def: 'can, could, may, might, must, shall, should, will, would (and ought to).' },
            { term: 'Semi-modals', def: 'Ordinary verbs or phrases that do modal jobs and do have tenses: have to, need to, be able to, be allowed to, be supposed to, had better, used to.' },
            { term: 'Modal perfect', def: 'Modal + *have* + past participle, for the past or for things that did not happen: *She may have forgotten. You should have told me.*' },
            { term: 'Modal continuous', def: 'Modal + *be* + -ing, for something in progress: *He must be working late. They might be sleeping.*' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Could of, should of, would of',
          text: 'These are mishearings of the contraction *’ve*. Write **could have** or **could’ve**, never *could of*: *I should’ve (should have) known.*',
        },
      ],
    },
    {
      id: 'ability-permission',
      title: 'Ability and permission',
      blocks: [
        {
          t: 'table',
          head: ['Meaning', 'Present', 'Past', 'Future / other forms'],
          rows: [
            ['General ability', 'I **can** speak French.', 'I **could** read at four.', 'I **will be able to** drive next year.'],
            ['Ability on one occasion (managed)', 'I **can** see the bus.', 'I **was able to** / **managed to** get a ticket.', 'Have you **been able to** reach her?'],
            ['Asking permission', '**Can / Could / May** I sit here?', 'Were you **allowed to** stay up?', 'Will we **be allowed to** take photos?'],
            ['Giving permission', 'You **can / may** leave now.', 'We **were allowed to** use calculators.', 'You **will be allowed to** vote at 21.'],
            ['Refusing permission', 'You **can’t / may not** park here.', 'We **weren’t allowed to** talk.', 'You **won’t be allowed to** enter.'],
          ],
        },
        {
          t: 'example',
          title: 'Could versus was able to',
          lines: [
            { label: 'General past ability', text: 'My grandmother **could** sew anything. (*was able to* also fine)' },
            { label: 'One success', text: 'The fire spread fast, but everyone **was able to** escape. (not *could escape*)' },
            { label: 'Negative: both fine', text: 'I **couldn’t / wasn’t able to** open the jar.' },
            { label: 'Senses: could is fine', text: 'We **could** hear the sea from our room.' },
            { label: 'Why', text: '*Could* says the ability existed; *was able to* says it was actually used on that occasion.' },
          ],
        },
        {
          t: 'table',
          head: ['Asking permission', 'Tone', 'Example'],
          rows: [
            ['Can I…?', 'Neutral, everyday', '**Can** I borrow your pen?'],
            ['Could I…?', 'Politer, softer', '**Could** I ask you something?'],
            ['May I…?', 'Formal, polite', '**May** I come in?'],
            ['Might I…?', 'Very formal, rare', '**Might** I suggest an alternative?'],
            ['Do you mind if I…? / Would it be OK if I…?', 'Polite, indirect', '**Would it be OK if I** left early?'],
          ],
          caption: 'The old classroom rule that *can* is only for ability is a myth: *can* for permission is standard English. *May* is simply more formal.',
        },
      ],
    },
    {
      id: 'possibility-probability',
      title: 'Possibility, probability and deduction',
      lead: 'How sure are you? English grades certainty with modals, from *must* (nearly certain) down to *can’t* (nearly certain it is not).',
      blocks: [
        {
          t: 'levels',
          caption: 'Certainty scale about the present: “Where is Sam?”',
          items: [
            { name: 'Certain it is not true', body: 'He **can’t** be at work: it’s Sunday.', verbs: ['can’t', 'couldn’t'] },
            { name: 'Possible (weak)', body: 'He **might / could** be at the gym.', verbs: ['might', 'could'] },
            { name: 'Possible (a little stronger)', body: 'He **may** be at his mother’s.', verbs: ['may'] },
            { name: 'Probable', body: 'He **should** be home by now: he left at five. / He’**ll** be stuck in traffic.', verbs: ['should', 'will'] },
            { name: 'Almost certain', body: 'He **must** be asleep: the lights are off.', verbs: ['must'] },
          ],
        },
        {
          t: 'table',
          head: ['Degree', 'Present', 'Past (modal + have + -ed)'],
          rows: [
            ['Almost certain', 'She **must be** exhausted.', 'She **must have been** exhausted.'],
            ['Probable', 'They **should be** there now.', 'They **should have arrived** by now.'],
            ['Possible', 'It **may / might / could be** true.', 'It **may / might / could have been** a mistake.'],
            ['Almost certainly not', 'That **can’t be** right.', 'He **can’t / couldn’t have seen** us.'],
          ],
          caption: 'The opposite of deductive *must* is **can’t**, not *mustn’t*. *She mustn’t be ill* is wrong for “I’m sure she isn’t ill”.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'may vs might', body: 'Mostly interchangeable for possibility today. *Might* sounds slightly less likely or more tentative: *It may rain* / *It might rain*. Use *might* in reported speech and second conditionals: *She said she might come. If you asked, he might agree.*' },
            { title: 'could for possibility', body: '*It could be a virus.* Positive *could* = possible. But negative *couldn’t* = impossible: *It couldn’t be a virus* (= I’m sure it isn’t).' },
            { title: 'may not vs can’t', body: '*He may not know* (= perhaps he doesn’t know). *He can’t know* (= it’s impossible that he knows).' },
            { title: 'might have vs could have', body: '*He might have won* (= perhaps he won; we don’t know). *He could have won* (= he had the chance but did not), or a possibility, depending on context.' },
          ],
        },
        {
          t: 'example',
          title: 'Deduction from evidence',
          lines: [
            { label: 'Evidence', text: 'The ground is wet and people are carrying umbrellas.' },
            { label: 'Past deduction', text: 'It **must have rained** in the night.' },
            { label: 'Evidence', text: 'Her phone is on the table and her coat is here.' },
            { label: 'Negative deduction', text: 'She **can’t have gone** far.' },
            { label: 'Evidence', text: 'I don’t know why the train stopped.' },
            { label: 'Open possibility', text: 'There **might have been** a signal failure.' },
          ],
        },
      ],
    },
    {
      id: 'obligation',
      title: 'Obligation, necessity and prohibition',
      blocks: [
        {
          t: 'table',
          head: ['Form', 'Meaning', 'Example'],
          rows: [
            ['must', 'Obligation from the speaker, or a written rule', 'I **must** call my mum tonight. / Passengers **must** wear seat belts.'],
            ['have to / have got to', 'Obligation from outside (rules, circumstances)', 'I **have to** wear a uniform at school.'],
            ['need to', 'Necessity, often practical', 'You **need to** renew your passport.'],
            ['mustn’t', 'Prohibition: it is not allowed', 'You **mustn’t** use your phone in the exam.'],
            ['don’t have to / don’t need to / needn’t', 'No obligation: it is optional', 'You **don’t have to** come; it’s optional.'],
            ['be supposed to', 'Expected by rule or arrangement (often broken)', 'We’re **supposed to** check in by noon.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'mustn’t is not the opposite of must',
          text: '*You mustn’t tell him* = do not tell him (prohibited). *You don’t have to tell him* = telling him is optional. Mixing these up changes the meaning completely.',
        },
        {
          t: 'table',
          head: ['Time', 'Obligation', 'No obligation'],
          rows: [
            ['Present', 'I **must / have to** go.', 'I **don’t have to** go.'],
            ['Past', 'I **had to** go. (not *musted*)', 'I **didn’t have to** go.'],
            ['Future', 'I’**ll have to** go.', 'I **won’t have to** go.'],
            ['Perfect', 'I’ve **had to** go twice this week.', 'I **haven’t had to** go yet.'],
          ],
          caption: '*Must* has no past form for obligation, so *had to* does the job.',
        },
        {
          t: 'example',
          title: 'didn’t need to versus needn’t have',
          lines: [
            { label: 'didn’t need to', text: 'I **didn’t need to** take a taxi, so I walked. (unnecessary, and I didn’t do it)' },
            { label: 'needn’t have', text: 'I **needn’t have** taken a taxi: the station was round the corner. (unnecessary, but I did it)' },
          ],
        },
      ],
    },
    {
      id: 'advice',
      title: 'Advice, suggestions, offers and requests',
      blocks: [
        {
          t: 'table',
          head: ['Form', 'Strength', 'Example'],
          rows: [
            ['could', 'Gentle suggestion, one option of several', 'You **could** try the library.'],
            ['might want to', 'Polite, tentative advice', 'You **might want to** check the date.'],
            ['should / ought to', 'Advice: the right thing to do', 'You **should / ought to** see a doctor.'],
            ['had better (’d better)', 'Strong advice with a warning', 'You’**d better** leave now or you’ll miss it.'],
            ['must', 'Very strong, or enthusiastic', 'You **must** try the laksa here.'],
          ],
          caption: '*Had better* refers to now or the future despite *had*: *We’d better go* (not *We’d better to go*; negative *We’d better not*).',
        },
        {
          t: 'example',
          title: 'Criticism and regret about the past',
          lines: [
            { label: 'should have', text: 'You **should have** told me earlier. (you didn’t: criticism)' },
            { label: 'shouldn’t have', text: 'I **shouldn’t have** eaten so much. (I did: regret)' },
            { label: 'could have', text: 'You **could have** asked for help! (the option was there)' },
            { label: 'ought to have', text: 'They **ought to have** checked the figures.' },
          ],
        },
        {
          t: 'table',
          head: ['Function', 'Examples'],
          rows: [
            ['Requests', '**Can** you pass the salt? **Could** you send me the file? **Would** you mind closing the door?'],
            ['Offers', '**Shall** I carry that? **Can** I help? I’**ll** do it.'],
            ['Suggestions', '**Shall** we go? We **could** get a takeaway.'],
            ['Willingness / refusal', 'I **will** help. The car **won’t** start. She **wouldn’t** listen.'],
            ['Past habit', 'As kids, we **would** play outside for hours. (= used to)'],
          ],
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common mistakes and memory tricks',
      blocks: [
        {
          t: 'dodont',
          do: [
            'You **must be** joking. (deduction)',
            'She **can’t have** known. (negative deduction)',
            'I **had to** leave early yesterday.',
            'You **don’t have to** pay; it’s free.',
            'We **were able to** finish on time.',
            'He **might have** missed the train.',
          ],
          dont: [
            'You must to be joking.',
            'She mustn’t have known. (for “I’m sure she didn’t”)',
            'I musted leave early yesterday.',
            'You mustn’t pay; it’s free. (means you are forbidden)',
            'We could finish on time. (for one achievement)',
            'He might of missed the train.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick: a ruler for certainty',
          text: 'Picture a ruler: **must** at 95%, **should/will** at 80%, **may** at 50%, **might/could** at 30–40%, **can’t** at 5%. When you deduce, pick the mark that matches your evidence.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Shall',
          text: 'In modern British English *shall* survives mainly in offers and suggestions with *I* and *we* (*Shall I open the window?*) and in legal or formal rules (*The tenant shall pay…*). Elsewhere *will* is normal.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Choose or supply the best modal. Answers and reasons follow each item.',
      blocks: [
        {
          t: 'example',
          title: 'Questions 1–6',
          lines: [
            { label: 'Q1', text: 'You ___ smoke in here; it’s a hospital. (mustn’t / don’t have to)' },
            { label: 'A1', text: '**mustn’t**: it is prohibited, not optional.' },
            { label: 'Q2', text: 'The lights are off. They ___ be out.' },
            { label: 'A2', text: '**must**: a confident deduction from evidence.' },
            { label: 'Q3', text: 'That ___ be Anna; she’s in Tokyo this week.' },
            { label: 'A3', text: '**can’t**: the negative of deductive *must*.' },
            { label: 'Q4', text: 'After hours of trying, I ___ fix the leak. (could / was able to)' },
            { label: 'A4', text: '**was able to**: a single achievement in the past.' },
            { label: 'Q5', text: 'I ___ wear a tie at my last job, but now I don’t.' },
            { label: 'A5', text: '**had to**: past obligation (*must* has no past).' },
            { label: 'Q6', text: 'You ___ bring food; there’ll be plenty. (needn’t / mustn’t)' },
            { label: 'A6', text: '**needn’t** (or *don’t have to*): it is unnecessary, not forbidden.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7–10',
          lines: [
            { label: 'Q7', text: 'Correct this: *He should of called first.*' },
            { label: 'A7', text: '**He should have called first.** *Of* is a mishearing of *’ve*.' },
            { label: 'Q8', text: 'I’m not sure where my keys are. I ___ (leave) them at work.' },
            { label: 'A8', text: '**might / may / could have left**: uncertain past possibility.' },
            { label: 'Q9', text: 'It’s getting dark. We ___ go home. (had better / had better to)' },
            { label: 'A9', text: '**had better**: followed by the bare infinitive.' },
            { label: 'Q10', text: 'Which is politer to a stranger: *Can you help me?* or *Could you possibly help me?*' },
            { label: 'A10', text: '**Could you possibly help me?** *Could* plus *possibly* softens the request.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/verbs/conditionals-and-mood', note: '*would*, *could* and *might* in conditionals' },
            { path: 'grammar/verbs/reported-speech', note: 'how modals change in reported speech' },
            { path: 'grammar/parts-of-speech/verbs-basics', note: 'auxiliary verbs and verb forms' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
    'Huddleston, R., & Pullum, G. K. (2002). *The Cambridge Grammar of the English Language*. Cambridge University Press.',
    'Palmer, F. R. (2001). *Mood and Modality* (2nd ed.). Cambridge University Press.',
  ],
  related: [
    'grammar/verbs/conditionals-and-mood',
    'grammar/verbs/reported-speech',
    'grammar/parts-of-speech/verbs-basics',
    'grammar/verbs/future-forms',
    'grammar/sentences/questions-negatives-word-order',
  ],
}

export default guide
