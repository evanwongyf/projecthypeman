import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **conjunction** joins words, phrases or clauses: *bread **and** butter*, *slow **but** steady*, *we stayed in **because** it rained*. Conjunctions are what let you build longer sentences that show how ideas relate: addition, contrast, cause, time or condition. Choosing the right one, and punctuating it correctly, is one of the quickest ways to improve your writing.',
  nutshell: [
    '**Coordinating** conjunctions join equal parts: **FANBOYS** = *for, and, nor, but, or, yet, so*.',
    '**Subordinating** conjunctions start a dependent clause: *because, although, when, if, while, since, unless, after...*',
    '**Correlative** conjunctions come in pairs: *either...or*, *neither...nor*, *both...and*, *not only...but also*, *whether...or*.',
    'Two full sentences joined by a FANBOYS word usually take a **comma before** it: *It rained, **so** we stayed in.*',
    'A dependent clause on its own is a **fragment**: *Because it rained.* needs a main clause.',
    'Words like *however* and *therefore* are **adverbs**, not conjunctions: they need a semicolon or full stop before them.',
  ],
  sections: [
    {
      id: 'coordinating',
      title: 'Coordinating conjunctions: FANBOYS',
      blocks: [
        {
          t: 'table',
          head: ['Conjunction', 'Meaning', 'Examples'],
          rows: [
            ['for', 'because (formal, literary)', 'She smiled, **for** she knew the answer. He hurried, **for** it was late.'],
            ['and', 'addition', 'tea **and** cake; I cooked, **and** Sam washed up; tired **and** hungry; slowly **and** carefully'],
            ['nor', 'and not (after a negative)', 'He doesn’t eat meat, **nor** does he drink milk. Not a word, **nor** a sign.'],
            ['but', 'contrast', 'small **but** strong; I called, **but** nobody answered; cheap **but** good'],
            ['or', 'alternative', 'tea **or** coffee; hurry, **or** you’ll miss it; now **or** never'],
            ['yet', 'contrast, “but surprisingly”', 'simple **yet** effective; She was ill, **yet** she won.'],
            ['so', 'result', 'It was cold, **so** I wore a coat. The shop was shut, **so** we went home.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick: FANBOYS',
          text: '**F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o. These seven are the only words that can join two independent clauses with just a comma.',
        },
        {
          t: 'example',
          title: 'The comma rule with FANBOYS',
          lines: [
            { label: 'Two full clauses: comma', text: 'The bell rang**, and** the pupils left.' },
            { label: 'Shared subject: usually no comma', text: 'The bell rang **and** stopped. (*stopped* has no new subject)' },
            { label: 'Short clauses: comma optional', text: 'I knocked **but** nobody came. / I knocked**, but** nobody came.' },
            { label: 'Two words or phrases: no comma', text: 'apples **and** pears; in the morning **or** at night' },
            { label: 'Nor and inversion', text: 'She didn’t call**, nor did she** write. (*nor* is followed by auxiliary + subject)' },
          ],
        },
        {
          t: 'callout',
          tone: 'myth',
          title: 'Myth: never start a sentence with and or but',
          text: 'Starting a sentence with *And* or *But* is grammatical and has been done by good writers for centuries. It adds emphasis. Use it sparingly in formal essays, where some teachers and examiners still prefer *However* or *In addition*.',
        },
      ],
    },
    {
      id: 'subordinating',
      title: 'Subordinating conjunctions',
      blocks: [
        {
          t: 'p',
          text: 'A **subordinating conjunction** starts a dependent (subordinate) clause and shows how it relates to the main clause. The dependent clause cannot stand alone; it needs a main clause to complete it.',
        },
        {
          t: 'table',
          head: ['Meaning', 'Conjunctions', 'Examples'],
          rows: [
            ['Time', 'when, while, before, after, since, until, as, as soon as, once, whenever', '**When** the film ended, we left. Wait **until** I call. **After** she ate, she slept. I’ve worked here **since** I left school. **As soon as** you arrive, text me. **Once** you start, don’t stop. **Before** you go, sign here. **While** I cooked, he cleaned.'],
            ['Cause', 'because, since, as, now that', 'We stayed in **because** it rained. **Since** you’re here, help me. **As** it was late, we took a taxi. **Now that** exams are over, relax. I left early **because** I was tired. **As** nobody objected, we started. **Since** it’s free, why not? He passed **because** he revised.'],
            ['Contrast and concession', 'although, though, even though, while, whereas, even if', '**Although** it was cold, we swam. She stayed calm **even though** she was scared. I like tea, **whereas** my sister prefers coffee. **While** I agree, I have doubts. **Though** small, it was strong. **Even if** you hurry, you’ll be late. He went out **although** he was ill. **Whereas** Leo is tall, Max is short.'],
            ['Condition', 'if, unless, provided (that), as long as, in case', '**If** it rains, we’ll cancel. You’ll fail **unless** you revise. **As long as** you’re careful, it’s safe. Take a coat **in case** it gets cold. **Provided that** you pay, you can come. **If** I were you, I’d go. **Unless** you object, I’ll start. You can borrow it **as long as** you return it.'],
            ['Purpose and result', 'so that, in order that, so...that, such...that', 'Speak up **so that** everyone can hear. It was **so** hot **that** we stayed inside. It was **such** a good film **that** I saw it twice. She saved **so that** she could travel. Leave early **so that** you’re not late. He spoke **so** fast **that** no one understood. It was **such** a mess **that** we left. We whispered **so that** the baby slept.'],
            ['Place and manner', 'where, wherever, as if, as though', 'Sit **wherever** you like. Stay **where** I can see you. He acted **as if** nothing had happened. It looks **as though** it will rain. Go **where** you want. She spoke **as if** she knew. **Wherever** you go, call me. It felt **as though** time had stopped.'],
          ],
        },
        {
          t: 'example',
          title: 'Where the comma goes',
          lines: [
            { label: 'Dependent clause first: comma', text: '**Although** it was raining**,** we played.' },
            { label: 'Dependent clause second: usually no comma', text: 'We played **although** it was raining.' },
            { label: 'Contrast words often keep it', text: 'I like tea**, whereas** my sister likes coffee.' },
            { label: 'Fragment (wrong)', text: '*Because it was raining.* (no main clause)' },
            { label: 'Fixed', text: 'We stayed inside **because** it was raining.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Same word, different class',
          text: '*Before*, *after*, *since* and *until* are **conjunctions** when a clause follows (after **she left**) and **prepositions** when only a noun follows (after **lunch**). *So* can be a conjunction (*it rained, so we left*) or an adverb (*it was **so** hot*). See [Interjections, and telling word classes apart](@grammar/parts-of-speech/interjections-and-word-class-test).',
        },
      ],
    },
    {
      id: 'correlative',
      title: 'Correlative conjunctions',
      blocks: [
        {
          t: 'table',
          head: ['Pair', 'Examples'],
          rows: [
            ['either ... or', '**Either** you apologise **or** you leave. We can go **either** today **or** tomorrow.'],
            ['neither ... nor', '**Neither** Sam **nor** Ana came. It is **neither** cheap **nor** good.'],
            ['both ... and', '**Both** my parents **and** my aunt were there. She is **both** clever **and** kind.'],
            ['not only ... but also', 'He is **not only** a singer **but also** a pianist. **Not only** did it rain, **but** it **also** snowed.'],
            ['whether ... or', 'I’ll go **whether** you like it **or** not. Tell me **whether** it’s true **or** false.'],
            ['not ... but', 'It is **not** red **but** orange. The problem is **not** time **but** money.'],
            ['as ... as', 'She is **as** tall **as** her brother. It’s **as** easy **as** that.'],
            ['no sooner ... than', '**No sooner** had I sat down **than** the phone rang.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Keep the halves parallel',
          text: 'Whatever follows the first word must match what follows the second. “She **either** wants to stay **or** to leave” is unbalanced; write “She wants **either** to stay **or** to leave.” “**Not only** is he fast **but also** strong” → “He is **not only** fast **but also** strong.” See [Modifiers and parallelism](@grammar/usage/modifiers-and-parallelism).',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Which verb after either/or and neither/nor?',
          text: 'The verb agrees with the nearer subject: “**Neither** the teacher **nor** the pupils **were** ready.” “**Either** the pupils **or** the teacher **is** wrong.” If the singular-near version sounds awkward, put the plural second. See [Subject-verb agreement](@grammar/verbs/subject-verb-agreement).',
        },
      ],
    },
    {
      id: 'adverbs-not-conjunctions',
      title: 'However, therefore and other linking adverbs',
      blocks: [
        {
          t: 'p',
          text: 'Words such as *however, therefore, moreover, nevertheless, consequently, otherwise, meanwhile, besides* and *instead* link ideas, but grammatically they are **adverbs**. They cannot join two clauses with a comma alone; doing so creates a **comma splice**.',
        },
        {
          t: 'example',
          title: 'Three correct ways',
          lines: [
            { label: 'Wrong (comma splice)', text: '*The tickets sold out, however we got in.*' },
            { label: 'Full stop', text: 'The tickets sold out. **However,** we got in.' },
            { label: 'Semicolon', text: 'The tickets sold out**; however,** we got in.' },
            { label: 'Use a conjunction instead', text: 'The tickets sold out**, but** we got in.' },
          ],
        },
        {
          t: 'table',
          head: ['Meaning', 'Conjunction (joins with a comma)', 'Linking adverb (needs ; or .)'],
          rows: [
            ['Contrast', 'but, yet, although', 'however, nevertheless, nonetheless, on the other hand'],
            ['Result', 'so', 'therefore, consequently, as a result, thus, hence'],
            ['Addition', 'and', 'moreover, furthermore, in addition, also, besides'],
            ['Alternative', 'or', 'otherwise, alternatively, instead'],
            ['Time', 'while, when', 'meanwhile, then, afterwards, subsequently'],
          ],
          caption: 'In a hurry, ask: is it one of the seven FANBOYS? If not, and it is not a subordinating conjunction, it cannot join two sentences with just a comma.',
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
            ['I was tired, I went to bed.', 'I was tired, **so** I went to bed.', 'Comma splice: two clauses need a conjunction, semicolon or full stop.'],
            ['Because I missed the bus.', 'I was late **because** I missed the bus.', 'A dependent clause alone is a fragment.'],
            ['Although it was late, but we stayed.', '**Although** it was late, we stayed.', 'Use one contrast word, not two.'],
            ['Even it was cold, we swam.', '**Even though** it was cold, we swam.', '*Even* alone is not a conjunction.'],
            ['Neither Sam or Ana knew.', 'Neither Sam **nor** Ana knew.', '*Neither* pairs with *nor*.'],
            ['The reason is because he was ill.', 'The reason is **that** he was ill. / He was absent **because** he was ill.', '*Reason* already means *because*; acceptable in speech, avoided in careful writing.'],
            ['Despite it rained, we went.', '**Although** it rained, we went. / **Despite the rain**, we went.', '*Despite* is a preposition: it takes a noun or -ing, not a clause.'],
            ['I like both swimming and to run.', 'I like **both** swimming **and** running.', 'Parallel forms after a correlative pair.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Choose the conjunction that shows the real link: *because* (cause), *although* (contrast), *so* (result).',
            'Put a comma after a dependent clause that opens a sentence.',
            'Vary sentence openings by starting some with a subordinate clause.',
          ],
          dont: [
            'String clauses together with *and* ... *and* ... *and*: choose a stronger link or split the sentence.',
            'Use *however* like *but* with only a comma before it.',
            'Use both *although* and *but* for the same contrast.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Join, choose or fix, then check the reason.',
      blocks: [
        {
          t: 'example',
          title: 'Ten questions with answers',
          lines: [
            { label: 'Q1', text: 'Join with a FANBOYS word: “The road was icy. We drove slowly.”' },
            { label: 'A1', text: '“The road was icy, **so** we drove slowly.” Result, with a comma before *so*.' },
            { label: 'Q2', text: 'Coordinating or subordinating? *unless*' },
            { label: 'A2', text: 'Subordinating: it starts a dependent condition clause (*unless you hurry*).' },
            { label: 'Q3', text: 'Add the comma: “When the alarm rang we left the building.”' },
            { label: 'A3', text: '“When the alarm rang**,** we left the building.” Introductory dependent clause.' },
            { label: 'Q4', text: 'Fix: “She practised every day, therefore she improved.”' },
            { label: 'A4', text: '“She practised every day**; therefore,** she improved.” or use *so*: “..., **so** she improved.”' },
            { label: 'Q5', text: 'Complete: “Neither the manager ___ the staff ___ (was/were) told.”' },
            { label: 'A5', text: '**nor**, **were**: the verb agrees with the nearer subject, *staff* (plural here).' },
            { label: 'Q6', text: 'Is this a sentence? “Although we trained hard all season.”' },
            { label: 'A6', text: 'No: a fragment. Add a main clause: “Although we trained hard all season, we lost the final.”' },
            { label: 'Q7', text: 'Choose: “I’ll lend it to you (if / unless) you promise to return it.”' },
            { label: 'A7', text: '**if**: the lending depends on the promise. *Unless* would mean “except if”.' },
            { label: 'Q8', text: 'Fix the parallelism: “He is not only rude but also he is lazy.”' },
            { label: 'A8', text: '“He is not only rude but also lazy.” Adjective after each half.' },
            { label: 'Q9', text: 'Name the meaning of *whereas* in “Cats sleep a lot, whereas dogs need walks.”' },
            { label: 'A9', text: 'Contrast: it sets two facts side by side.' },
            { label: 'Q10', text: 'Fix: “Despite he was injured, he finished.”' },
            { label: 'A10', text: '“**Although** he was injured, he finished.” or “**Despite being** injured, he finished.”' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on conjunctions, *although/despite*, and *either/neither*.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapters on coordination and subordination (which classify some subordinators as prepositions).',
    'Butterfield, J. (ed.) (2015). *Fowler’s Dictionary of Modern English Usage* (4th ed.). Oxford University Press. On beginning sentences with *and* and *but*.',
  ],
  related: [
    'grammar/sentences/sentence-structures',
    'grammar/sentences/fragments-run-ons-splices',
    'grammar/punctuation/commas',
    'grammar/punctuation/semicolons-colons-dashes',
    'grammar/sentences/phrases-and-clauses',
  ],
}

export default guide
