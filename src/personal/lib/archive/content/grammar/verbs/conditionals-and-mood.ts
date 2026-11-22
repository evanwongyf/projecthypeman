import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **conditional** sentence links a condition (the *if*-clause) to its result: *If it rains, we’ll stay in.* English has four main patterns, numbered zero to three, plus **mixed** conditionals that cross time. Closely related is **mood**: the *subjunctive* (*If I were you*, *I suggest that he be told*) and the forms used for wishes and regrets. Once you see that each type is really about **how real** the situation is and **when** it happens, the tenses fall into place.',
  nutshell: [
    '**Zero**: always true. *If you heat ice, it melts.* (present + present)',
    '**First**: real and possible in the future. *If it rains, we’ll cancel.* (present + will)',
    '**Second**: unreal now or unlikely future. *If I had more time, I’d learn Japanese.* (past + would)',
    '**Third**: unreal past, too late to change. *If we’d left earlier, we wouldn’t have missed it.* (past perfect + would have)',
    '**Mixed**: past condition, present result (or the reverse). *If I’d studied medicine, I’d be a doctor now.*',
    'The **subjunctive** uses *were* for unreal situations and the base form after *suggest, insist, demand*: *I insist that she come.*',
  ],
  sections: [
    {
      id: 'map',
      title: 'The four types on one page',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'If-clause', 'Main clause', 'Reality and time', 'Example'],
          rows: [
            ['Zero', 'present simple', 'present simple', 'Always true: facts, habits', 'If you **mix** red and blue, you **get** purple.'],
            ['First', 'present simple', 'will / can / may + base', 'Real possibility, future', 'If you **hurry**, you’**ll catch** the bus.'],
            ['Second', 'past simple (were)', 'would / could / might + base', 'Unreal or unlikely, present or future', 'If I **won** the lottery, I’**d travel**.'],
            ['Third', 'past perfect', 'would / could / might + have + -ed', 'Unreal, past (did not happen)', 'If she **had asked**, I **would have helped**.'],
          ],
          caption: 'The clauses can swap order: *We’ll stay in if it rains.* Use a comma only when the if-clause comes first.',
        },
        {
          t: 'levels',
          caption: 'From most real to least real',
          items: [
            { name: 'Zero: always', body: 'If water reaches 100 °C at sea level, it boils.' },
            { name: 'First: likely', body: 'If the train is late, I’ll text you.' },
            { name: 'Second: imagined now', body: 'If I lived nearer, I’d visit more often. (I don’t live nearer)' },
            { name: 'Third: imagined past', body: 'If I had seen the sign, I would have stopped. (I didn’t see it)' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'No will in the if-clause',
          text: 'In standard conditionals, *will* goes in the result clause, not the condition: **If it rains tomorrow**, not *If it will rain tomorrow*. The exception is when *will* means willingness or insistence: *If you’ll wait here, I’ll fetch the manager.* (= if you are willing to wait)',
        },
      ],
    },
    {
      id: 'zero-first',
      title: 'Zero and first conditionals',
      blocks: [
        {
          t: 'example',
          title: 'Zero conditional: facts and routines',
          lines: [
            { label: 'Science', text: 'If you **heat** iron, it **expands**.' },
            { label: 'Habit', text: 'If I **drink** coffee after 4 p.m., I **can’t** sleep.' },
            { label: 'Instruction', text: 'If the alarm **sounds**, **leave** by the nearest exit. (imperative)' },
            { label: 'With when', text: '**When** you **press** this button, the light **comes on**. (*if* and *when* mean almost the same here)' },
          ],
        },
        {
          t: 'example',
          title: 'First conditional: real future possibilities',
          lines: [
            { label: 'Promise', text: 'If you **finish** your homework, you **can** watch TV.' },
            { label: 'Warning', text: 'If you **touch** that wire, you’**ll get** a shock.' },
            { label: 'Plan', text: 'If the weather **is** good, we’**re going to** have a picnic.' },
            { label: 'Possibility', text: 'If we **leave** now, we **might** beat the traffic.' },
            { label: 'Unless', text: '**Unless** you **book** soon, there **won’t** be any seats. (= if you don’t book)' },
          ],
        },
        {
          t: 'table',
          head: ['Alternative to if', 'Meaning', 'Example'],
          rows: [
            ['unless', 'if not', 'I won’t go **unless** you come too.'],
            ['as long as / provided (that)', 'only on this condition', 'You can borrow it **as long as** you return it.'],
            ['in case', 'as a precaution', 'Take an umbrella **in case** it rains. (not = *if*)'],
            ['when', 'certain to happen', '**When** I get home, I’ll call. (I will get home)'],
            ['otherwise', 'if not, result follows', 'Hurry, **otherwise** we’ll be late.'],
          ],
          caption: '*In case* is not a synonym of *if*: *I’ll take a map in case I get lost* means I take it anyway, before anything happens.',
        },
      ],
    },
    {
      id: 'second-third',
      title: 'Second and third conditionals',
      blocks: [
        {
          t: 'example',
          title: 'Second conditional: unreal now, or unlikely',
          lines: [
            { label: 'Unreal present', text: 'If I **knew** her number, I **would call** her. (I don’t know it)' },
            { label: 'Unlikely future', text: 'If a meteor **hit** London, what **would** you **do**?' },
            { label: 'Advice', text: 'If I **were** you, I’**d apologise**.' },
            { label: 'Ability', text: 'If he **practised** more, he **could** play professionally.' },
            { label: 'Polite request', text: 'It **would** help a lot if you **could** send it today.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'First or second?', body: 'The choice shows how likely *you* think it is. *If I get the job, I’ll move* (a real chance). *If I got the job, I’d move* (I doubt I will).' },
            { title: 'Past form, not past time', body: 'In the second conditional, *knew* and *had* refer to **now**. The past tense signals distance from reality, not past time.' },
          ],
        },
        {
          t: 'example',
          title: 'Third conditional: imagining a different past',
          lines: [
            { label: 'Regret', text: 'If I **had studied** harder, I **would have passed**. (I didn’t study; I failed)' },
            { label: 'Relief', text: 'If we **hadn’t left** early, we **would have been caught** in the storm.' },
            { label: 'Possibility', text: 'If you’**d asked** me, I **might have said** yes.' },
            { label: 'Ability', text: 'If she **had had** a map, she **could have found** the way.' },
            { label: 'Contractions', text: '*If I’d known, I’d have come.* The first *’d* = *had*, the second = *would*.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Would have in both halves',
          text: 'A very common error: *If I would have known, I would have come.* Standard English puts the **past perfect** in the if-clause: **If I had known, I would have come.** The same goes for the second conditional: *If I would be rich* should be **If I were rich**.',
        },
      ],
    },
    {
      id: 'mixed',
      title: 'Mixed conditionals and inversion',
      blocks: [
        {
          t: 'table',
          head: ['Mix', 'If-clause', 'Main clause', 'Example'],
          rows: [
            ['Past condition → present result', 'past perfect', 'would + base', 'If I **had taken** that job, I **would be** rich now.'],
            ['Present condition → past result', 'past simple', 'would have + -ed', 'If I **were** braver, I **would have spoken** up yesterday.'],
          ],
        },
        {
          t: 'example',
          title: 'More mixed conditionals',
          lines: [
            { label: 'Past → present', text: 'If she **hadn’t missed** the flight, she **would be** in Paris now.' },
            { label: 'Past → present', text: 'If you’**d eaten** breakfast, you **wouldn’t be** hungry.' },
            { label: 'Present → past', text: 'If he **didn’t** speak Spanish, he **wouldn’t have got** the job. (he does speak it, and he got it)' },
            { label: 'Present → past', text: 'If I **weren’t** so tired, I **would have gone** to the party.' },
          ],
        },
        {
          t: 'table',
          head: ['Formal inversion (no if)', 'Equivalent'],
          rows: [
            ['**Should** you need help, call this number.', 'If you need help…'],
            ['**Were** I in your position, I would resign.', 'If I were in your position…'],
            ['**Had** I known, I would have come.', 'If I had known…'],
            ['**Were** it not for his help, we’d be lost.', 'If it were not for his help…'],
            ['**Had** it not been for the rain, we’d have won.', 'If it hadn’t been for the rain…'],
          ],
          caption: 'Inversion is formal and common in business letters and literature. Negatives do not contract: *Had I not known*, not *Hadn’t I known*.',
        },
      ],
    },
    {
      id: 'mood',
      title: 'The subjunctive, wishes and regrets',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Indicative mood', def: 'Statements of fact and questions: *She is here. Is she here?*' },
            { term: 'Imperative mood', def: 'Commands: *Sit down. Don’t touch.*' },
            { term: 'Subjunctive mood', def: 'Unreal, wished-for or demanded situations. In modern English it shows only in a few forms: *were* for all persons, and the bare base form after verbs of demand.' },
          ],
        },
        {
          t: 'table',
          head: ['Subjunctive form', 'Where it appears', 'Example'],
          rows: [
            ['were (all persons)', 'Unreal conditions and wishes', 'If she **were** here… / I wish it **were** Friday.'],
            ['base form (mandative)', 'After suggest, recommend, insist, demand, request, propose, ask, require', 'I suggest that he **be** told. / They insisted that she **leave**.'],
            ['base form', 'After it is essential / vital / important that', 'It is essential that every student **attend**.'],
            ['fixed phrases', 'Old survivals', '**God save** the King. **Be that as it may**. **Come what may**. **So be it**.'],
          ],
          caption: 'In the mandative subjunctive there is no -s: *that he attend*, not *attends*. British English often uses *should* instead: *I suggest that he **should be** told.* Informal British English also allows the indicative: *I suggest he tells them.*',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'If I was or if I were?',
          text: '*If I were you* is the fixed advice phrase. In other unreal conditions, *was* is common in informal speech (*If I was rich…*) but *were* is preferred in formal writing. For a **real** past possibility, *was* is correct: *If he was at the party, I didn’t see him.*',
        },
        {
          t: 'table',
          head: ['Wish about…', 'Form', 'Example'],
          rows: [
            ['The present (unreal now)', 'wish + past simple', 'I wish I **had** a car. I wish I **were** taller.'],
            ['The past (regret)', 'wish + past perfect', 'I wish I **hadn’t said** that.'],
            ['Someone else’s annoying habit', 'wish + would', 'I wish you **would stop** interrupting.'],
            ['Ability', 'wish + could', 'I wish I **could** swim.'],
            ['Stronger: if only', 'same patterns', '**If only** I **had** listened!'],
            ['It’s time / would rather', 'past simple for the present', 'It’s time we **went**. I’d rather you **didn’t** smoke.'],
          ],
          caption: 'Do not use *wish + would* about yourself: *I wish I would be taller* is wrong; write **I wish I were taller.**',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Complete with the right forms. Answers and reasons follow each item.',
      blocks: [
        {
          t: 'example',
          title: 'Questions 1–6',
          lines: [
            { label: 'Q1', text: 'If you ___ (freeze) water, it ___ (turn) to ice.' },
            { label: 'A1', text: '**freeze, turns**: zero conditional, a general fact.' },
            { label: 'Q2', text: 'If it ___ (rain) tomorrow, we ___ (stay) at home.' },
            { label: 'A2', text: '**rains, will stay**: first conditional; no *will* in the if-clause.' },
            { label: 'Q3', text: 'If I ___ (be) you, I ___ (not / sign) that contract.' },
            { label: 'A3', text: '**were, wouldn’t sign**: second conditional advice with subjunctive *were*.' },
            { label: 'Q4', text: 'If they ___ (leave) on time, they ___ (not / miss) the ferry.' },
            { label: 'A4', text: '**had left, wouldn’t have missed**: third conditional, unreal past.' },
            { label: 'Q5', text: 'If I ___ (go) to bed earlier last night, I ___ (not / be) so tired now.' },
            { label: 'A5', text: '**had gone, wouldn’t be**: mixed, past condition with present result.' },
            { label: 'Q6', text: 'Correct: *If I would have seen him, I would have said hello.*' },
            { label: 'A6', text: '**If I had seen him, I would have said hello.** Past perfect in the if-clause.' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7–12',
          lines: [
            { label: 'Q7', text: 'The doctor recommended that he ___ (rest) for a week.' },
            { label: 'A7', text: '**rest**: mandative subjunctive, bare form with no -s (or British *should rest*).' },
            { label: 'Q8', text: 'I wish I ___ (not / eat) that last slice of cake.' },
            { label: 'A8', text: '**hadn’t eaten**: regret about the past takes the past perfect.' },
            { label: 'Q9', text: 'Rewrite formally with inversion: *If you should have any questions, contact us.*' },
            { label: 'A9', text: '**Should you have any questions, contact us.**' },
            { label: 'Q10', text: '___ you wear a helmet, you could get badly hurt. (If / Unless)' },
            { label: 'A10', text: '**Unless**: = if you don’t wear a helmet.' },
            { label: 'Q11', text: 'I wish my neighbour ___ (stop) playing loud music at midnight.' },
            { label: 'A11', text: '**would stop**: *wish + would* for someone else’s irritating behaviour.' },
            { label: 'Q12', text: 'Which is more confident: *If I pass, I’ll celebrate* or *If I passed, I’d celebrate*?' },
            { label: 'A12', text: '**If I pass, I’ll celebrate.** The first conditional treats passing as a real possibility.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/verbs/modal-verbs', note: '*would, could, might* and *should* in depth' },
            { path: 'grammar/verbs/past-tenses', note: 'the past perfect used in the third conditional' },
            { path: 'grammar/verbs/reported-speech', note: 'what happens to conditionals when reported' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press.',
    'Huddleston, R., & Pullum, G. K. (2002). *The Cambridge Grammar of the English Language*. Cambridge University Press.',
    'Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). *A Comprehensive Grammar of the English Language*. Longman.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press.',
  ],
  related: [
    'grammar/verbs/modal-verbs',
    'grammar/verbs/past-tenses',
    'grammar/verbs/future-forms',
    'grammar/verbs/reported-speech',
    'grammar/punctuation/commas',
  ],
}

export default guide
