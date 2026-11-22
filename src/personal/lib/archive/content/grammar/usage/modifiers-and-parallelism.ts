import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A modifier is any word, phrase or clause that describes something else, and English mostly works out what it describes by position. Put it in the wrong place, or leave out the thing it describes, and the sentence says something you never meant. Parallelism is the companion skill: making items that do the same job take the same grammatical shape.',
  nutshell: [
    'Put a modifier **next to** what it modifies: *She served cakes on paper plates to the children*, not *She served cakes to the children on paper plates*.',
    'A **dangling modifier** has nothing in the sentence to attach to: *Walking home, the rain started* (the rain was not walking).',
    'An opening phrase like *Having finished*, *To win* or *After eating* must describe the **subject** that follows the comma.',
    'Limiting words such as *only, just, almost, even, nearly* change the meaning depending on where they sit.',
    '**Parallelism**: items in a list, a pair or a comparison should share one form: *to read, to write and to speak*, not *to read, writing and speak*.',
  ],
  sections: [
    {
      id: 'misplaced',
      title: 'Misplaced modifiers',
      blocks: [
        {
          t: 'example',
          title: 'Misplaced modifiers and their fixes',
          lines: [
            { label: 'Misplaced', text: 'The museum displayed a dress worn by the queen **in a glass case**.' },
            { label: 'Reads as', text: 'The queen wore the dress inside a glass case.' },
            { label: 'Fixed', text: 'In a glass case, the museum displayed a dress worn by the queen.' },
            { label: 'Misplaced', text: 'I saw a lorry **with my binoculars** carrying ten elephants.' },
            { label: 'Fixed', text: 'With my binoculars, I saw a lorry carrying ten elephants.' },
            { label: 'Misplaced', text: 'For sale: a piano by a lady **with carved legs**.' },
            { label: 'Fixed', text: 'For sale: a piano with carved legs, owned by a lady.' },
            { label: 'Misplaced', text: 'He bought a phone from a shop in Orchard Road **that kept crashing**.' },
            { label: 'Fixed', text: 'From a shop in Orchard Road, he bought a phone that kept crashing.' },
          ],
        },
        {
          t: 'table',
          head: ['Sentence', 'What it means'],
          caption: 'One word, five meanings: where *only* goes matters',
          rows: [
            ['**Only** I ate two biscuits.', 'Nobody else ate any.'],
            ['I **only** ate two biscuits.', 'In speech, usually *just two*; strictly, I ate them and did nothing else with them.'],
            ['I ate **only** two biscuits.', 'Not three or four. (The clearest written form.)'],
            ['I ate two **only** biscuits.', 'Ungrammatical.'],
            ['I ate two biscuits **only**.', 'Biscuits and nothing else (formal, emphatic).'],
          ],
        },
        {
          t: 'list',
          items: [
            '*She **almost** failed every test* (she passed them all, narrowly) versus *She failed **almost** every test* (she failed most of them).',
            '*He **nearly** spent $500* (he decided not to) versus *He spent **nearly** $500* (he spent about $490).',
            '***Even** Ali passed the test* (surprising that Ali did) versus *Ali **even** passed the test* (on top of everything else).',
            '*I **just** told her* (a moment ago) versus *I told **just** her* (no one else).',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The rule of thumb', text: 'In writing, put *only, just, almost, nearly, even, hardly* **immediately before** the word or phrase they limit. Speech tolerates *I only have five dollars*; formal writing prefers *I have only five dollars*.' },
      ],
    },
    {
      id: 'dangling',
      title: 'Dangling modifiers',
      lead: 'The modifier is in a sensible place, but the person or thing it describes never appears.',
      blocks: [
        {
          t: 'table',
          head: ['Dangling', 'Problem', 'Fixed by naming the doer', 'Fixed by turning it into a clause'],
          rows: [
            ['Walking to school, the rain started.', 'The rain was walking.', 'Walking to school, **I** got caught in the rain.', '**As I was walking** to school, the rain started.'],
            ['After finishing the exam, the papers were collected.', 'The papers finished the exam.', 'After finishing the exam, **the candidates** handed in their papers.', '**After the candidates had finished**, the papers were collected.'],
            ['To pass the test, revision is essential.', 'Revision wants to pass.', 'To pass the test, **you** need to revise.', '**If you want to pass**, revision is essential.'],
            ['Having eaten, the dishes were washed.', 'The dishes had eaten.', 'Having eaten, **we** washed the dishes.', '**When we had eaten**, we washed the dishes.'],
            ['At the age of six, my family moved to Johor Bahru.', 'The whole family was six.', 'At the age of six, **I** moved with my family to Johor Bahru.', '**When I was six**, my family moved to Johor Bahru.'],
            ['Being a rainy day, we stayed in.', 'We were a rainy day.', '(no doer to name: use a clause)', '**Because it was a rainy day**, we stayed in. / **It being** a rainy day, we stayed in.'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Spot the opening phrase', body: 'Look for a sentence that begins with an *-ing* phrase, an *-ed* phrase, a *to* phrase or *after/before/while + -ing*, followed by a comma.' },
            { title: 'Ask who is doing it', body: 'Who is walking, finishing, eating? Write that answer down.' },
            { title: 'Check the subject', body: 'Is the first noun after the comma the same person or thing? If yes, it is fine. If no, the modifier dangles.' },
            { title: 'Repair', body: 'Make the doer the subject of the main clause, or rewrite the phrase as a full clause with its own subject.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Accepted exceptions',
          text: 'Some participles have become fixed linking expressions and do not dangle: *Considering the cost, the trip was good value. Generally speaking, prices rose. Given the weather, the match was cancelled. Judging by the results, the method works.* These are standard in formal writing.',
        },
      ],
    },
    {
      id: 'squinting',
      title: 'Squinting modifiers',
      blocks: [
        { t: 'p', text: 'A squinting modifier sits between two things and could describe either. The reader cannot tell which way it looks.' },
        {
          t: 'example',
          title: 'Two readings, two fixes',
          lines: [
            { label: 'Squinting', text: 'Students who revise **often** score higher.' },
            { label: 'Fix 1', text: 'Students who **often** revise score higher. (frequent revision)' },
            { label: 'Fix 2', text: 'Students who revise score higher **more often**. (frequent high scores)' },
            { label: 'Squinting', text: 'The coach told the players **before the match** to rest.' },
            { label: 'Fix 1', text: 'Before the match, the coach told the players to rest.' },
            { label: 'Fix 2', text: 'The coach told the players to rest before the match.' },
            { label: 'Squinting', text: 'Eating vegetables **regularly** improves your health.' },
            { label: 'Fix', text: 'Regularly eating vegetables improves your health.' },
          ],
        },
      ],
    },
    {
      id: 'parallelism',
      title: 'Parallelism in lists and pairs',
      blocks: [
        {
          t: 'table',
          head: ['Not parallel', 'Parallel', 'Pattern'],
          rows: [
            ['She likes swimming, to cycle and runs.', 'She likes **swimming, cycling and running**.', 'all -ing'],
            ['The job involves answering calls, data entry and to file reports.', 'The job involves **answering calls, entering data and filing reports**.', 'all -ing phrases'],
            ['He was tall, strong and had confidence.', 'He was **tall, strong and confident**.', 'all adjectives'],
            ['We came, we saw, and it was conquered by us.', '**We came, we saw, we conquered.**', 'all active clauses'],
            ['The plan is cheap, quickly and works well.', 'The plan is **cheap, quick and effective**.', 'all adjectives'],
            ['I would rather walk than taking the bus.', 'I would rather **walk** than **take** the bus.', 'base form both sides'],
            ['She is good at maths but not in essays.', 'She is good **at maths** but not **at essays**.', 'same preposition'],
          ],
        },
        {
          t: 'table',
          head: ['Correlative pair', 'Faulty', 'Fixed'],
          caption: 'With correlative conjunctions, what follows each half must match',
          rows: [
            ['either … or', 'You can either pay now or at the door.', 'You can pay **either now or at the door**.'],
            ['neither … nor', 'He neither called nor was he writing.', 'He **neither called nor wrote**.'],
            ['not only … but also', 'She not only sings but also the piano.', 'She **not only sings but also plays** the piano.'],
            ['both … and', 'The course is both useful and it is fun.', 'The course is **both useful and fun**.'],
            ['whether … or', 'Whether by bus or taking the MRT, allow an hour.', '**Whether by bus or by MRT**, allow an hour.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Start every bullet in a list the same way: all verbs (*Plan the essay*, *Draft it*, *Edit it*) or all nouns.',
            'Repeat a preposition or article when it helps clarity: *in the morning and in the evening*.',
            'Read a list aloud, saying the shared opening before each item: *She likes … swimming. She likes … to cycle?* The odd one out jumps out.',
          ],
          dont: [
            'Mix forms in headings: *Introduction*, *How the Method Works*, *Analysing results*.',
            'Let *not only* sit before the verb when the contrast is between two nouns: *She not only speaks French but also German* (write *She speaks not only French but also German*).',
          ],
        },
      ],
    },
    {
      id: 'comparisons',
      title: 'Faulty comparisons',
      blocks: [
        {
          t: 'example',
          title: 'Compare like with like',
          lines: [
            { label: 'Faulty', text: 'The climate of Singapore is hotter than London.' },
            { label: 'Problem', text: 'It compares a climate with a city.' },
            { label: 'Fixed', text: 'The climate of Singapore is hotter than **that of** London. / Singapore’s climate is hotter than **London’s**.' },
            { label: 'Faulty', text: 'Her results were better than the rest of the class.' },
            { label: 'Fixed', text: 'Her results were better than **those of** the rest of the class.' },
            { label: 'Ambiguous', text: 'I like Mei more than Raj.' },
            { label: 'Fixed', text: 'I like Mei more than **Raj does**. / I like Mei more than **I like** Raj.' },
            { label: 'Incomplete', text: 'This phone is faster.' },
            { label: 'Fixed', text: 'This phone is faster **than last year’s model**.' },
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
          title: 'Identify and fix the problem',
          lines: [
            { label: 'Q1', text: '*Running for the bus, my bag split open.*' },
            { label: 'A1', text: 'Dangling: the bag was not running. *Running for the bus, **I** felt my bag split open* / *As I was running for the bus, my bag split open.*' },
            { label: 'Q2', text: '*She only has three days to finish the project.* (formal)' },
            { label: 'A2', text: '*She has **only three days** to finish the project.* Place *only* before what it limits.' },
            { label: 'Q3', text: '*The report was long, detailed and it was persuasive.*' },
            { label: 'A3', text: 'Not parallel: *The report was **long, detailed and persuasive**.*' },
            { label: 'Q4', text: '*To get a good seat, the doors should be reached early.*' },
            { label: 'A4', text: 'Dangling: *To get a good seat, **you** should reach the doors early.*' },
            { label: 'Q5', text: '*He not only plays football but also tennis.*' },
            { label: 'A5', text: '*He plays **not only football but also tennis**.* Both halves now follow *plays*.' },
            { label: 'Q6', text: '*I almost read the whole book in one night.*' },
            { label: 'A6', text: 'If you mean you read nearly all of it: *I read **almost the whole book** in one night.*' },
            { label: 'Q7', text: '*Lee’s essay was more original than Tan.*' },
            { label: 'A7', text: 'Faulty comparison: *Lee’s essay was more original than **Tan’s***.' },
            { label: 'Q8', text: '*Having been repaired twice, I decided to replace the printer.*' },
            { label: 'A8', text: 'Dangling (I was not repaired): *Because the printer had been repaired twice, I decided to replace it.*' },
            { label: 'Q9', text: '*Our goals are to increase sales, reducing costs and improvement of morale.*' },
            { label: 'A9', text: '*Our goals are **to increase** sales, **reduce** costs and **improve** morale.*' },
            { label: 'Q10', text: '*People who exercise frequently live longer.* What is the problem?' },
            { label: 'A10', text: 'Squinting: *frequently* could describe *exercise* or *live longer*. Write *People who frequently exercise live longer.*' },
            { label: 'Q11', text: 'Is this correct? *Considering the traffic, we arrived quite early.*' },
            { label: 'A11', text: 'Yes. *Considering* is an accepted fixed expression and does not dangle.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/sentences/phrases-and-clauses', note: 'Participial phrases and how clauses attach' },
            { path: 'grammar/parts-of-speech/adverbs', note: 'Where adverbs go in a sentence' },
            { path: 'grammar/parts-of-speech/conjunctions', note: 'Correlative conjunctions' },
            { path: 'grammar/verbs/verbals-and-phrasal-verbs', note: 'Gerunds, infinitives and participles' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Strunk, W., & White, E. B. (2000). *The Elements of Style* (4th ed.). Longman, on placing modifiers and parallel construction.',
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press, entries on participle clauses and *only*.',
    'Williams, J. M., & Bizup, J. (2017). *Style: Lessons in Clarity and Grace* (12th ed.). Pearson.',
  ],
  related: [
    'grammar/sentences/phrases-and-clauses',
    'grammar/sentences/sentence-structures',
    'grammar/parts-of-speech/adverbs',
    'grammar/parts-of-speech/conjunctions',
    'grammar/verbs/verbals-and-phrasal-verbs',
  ],
}

export default guide
