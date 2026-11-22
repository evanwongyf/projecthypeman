import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Three errors account for most broken sentences: the **fragment** (not enough sentence), the **run-on** or fused sentence (two sentences jammed together with nothing between them) and the **comma splice** (two sentences joined only by a comma). Each has a quick test and a small set of repairs.',
  nutshell: [
    'A **fragment** is a piece punctuated as a sentence but missing a subject, a finite verb, or independence.',
    'A **fused sentence** runs two independent clauses together with no punctuation: *It was late we left.*',
    'A **comma splice** joins two independent clauses with only a comma: *It was late, we left.*',
    'Five repairs for splices and run-ons: full stop, semicolon, comma + FANBOYS, subordinate one clause, or reduce one to a phrase.',
    '*However*, *therefore* and *then* are not conjunctions: *It rained, however we went* is still a splice.',
    'Fragments can be used on purpose in fiction and adverts, but in academic and formal writing avoid them.',
  ],
  sections: [
    {
      id: 'fragments',
      title: 'Fragments',
      blocks: [
        { t: 'p', text: 'A fragment starts with a capital and ends with a full stop but is not a complete independent clause. There are four common kinds.' },
        {
          t: 'table',
          head: ['Kind', 'Fragment', 'Fixed'],
          rows: [
            ['Dependent clause', 'Because the bus was late.', 'I missed the start **because the bus was late**.'],
            ['Missing subject', 'Went straight to bed.', '**She** went straight to bed.'],
            ['No finite verb (-ing)', 'The crowd cheering wildly.', 'The crowd **was** cheering wildly.'],
            ['Phrase on its own', 'For example, apples and pears.', 'Buy fruit, **for example apples and pears**.'],
            ['Relative clause', 'Which annoyed everyone.', 'He arrived late, **which annoyed everyone**.'],
            ['Afterthought list', 'Such as pens, rulers and glue.', 'Bring supplies, **such as pens, rulers and glue**.'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: '1. Find a finite verb', body: 'Is there a verb that shows tense? *cheering* alone does not; *was cheering* does.' },
            { title: '2. Find its subject', body: 'Who or what does the verb? If nobody, it is a fragment (unless it is a command).' },
            { title: '3. Check for a subordinator', body: 'If it opens with because, although, when, if, which, who, since, unless, it cannot stand alone.' },
            { title: '4. Repair', body: 'Attach it to the sentence before or after, add the missing subject or verb, or remove the subordinator.' },
          ],
        },
        {
          t: 'example',
          title: 'Fragment repairs, three ways',
          lines: [
            { label: 'Fragment', text: 'We cancelled the picnic. Although the sun came out later.' },
            { label: 'Attach', text: 'We cancelled the picnic, although the sun came out later.' },
            { label: 'Remove subordinator', text: 'We cancelled the picnic. The sun came out later, though.' },
            { label: 'Rewrite', text: 'We cancelled the picnic, and then, annoyingly, the sun came out.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Not fragments',
          text: 'Commands (*Sit down.*), answers in dialogue (*“Where?” “Upstairs.”*), and exclamations (*What a day!*) are acceptable minor sentences. Writers also use fragments deliberately for effect: *He opened the box. Empty.* Use them knowingly, and rarely in formal work.',
        },
      ],
    },
    {
      id: 'splices',
      title: 'Run-ons and comma splices',
      blocks: [
        {
          t: 'example',
          title: 'The two errors side by side',
          lines: [
            { label: 'Correct', text: 'The lights went out. Everyone screamed.' },
            { label: 'Fused (run-on)', text: 'The lights went out everyone screamed.' },
            { label: 'Comma splice', text: 'The lights went out, everyone screamed.' },
          ],
        },
        { t: 'p', text: 'Test: cover each half of the sentence. If both halves could stand alone as sentences and nothing stronger than a comma (or nothing at all) separates them, you have found a splice or a run-on.' },
        {
          t: 'table',
          head: ['Repair', 'Use when', 'Example'],
          rows: [
            ['Full stop', 'The ideas are separate, or the sentence is long', 'The lights went out. Everyone screamed.'],
            ['Semicolon', 'The ideas are closely linked and balanced', 'The lights went out; everyone screamed.'],
            ['Comma + FANBOYS', 'You want to show the link (and, but, so...)', 'The lights went out, **and** everyone screamed.'],
            ['Subordinate', 'One idea causes, explains or contrasts with the other', '**When** the lights went out, everyone screamed.'],
            ['Reduce to a phrase', 'One clause is minor', 'The lights went out, **sending** everyone into a panic.'],
            ['Colon', 'The second clause explains the first', 'There was one problem: the lights had gone out.'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The however trap',
          text: '*However*, *therefore*, *moreover*, *consequently*, *then*, *also*, *otherwise* and *thus* are **adverbs**, not conjunctions. They cannot join two clauses with only a comma. Wrong: *It was expensive, however we bought it.* Right: *It was expensive; however, we bought it.* Or: *It was expensive. However, we bought it.*',
        },
        {
          t: 'example',
          title: 'Before and after: everyday splices',
          lines: [
            { label: 'Splice', text: 'I love Singapore, the food is incredible.' },
            { label: 'Fixed', text: 'I love Singapore; the food is incredible.' },
            { label: 'Splice', text: 'She was tired, therefore she went home.' },
            { label: 'Fixed', text: 'She was tired; therefore, she went home. / She was tired, **so** she went home.' },
            { label: 'Splice', text: 'It’s not my fault, I wasn’t even there.' },
            { label: 'Fixed', text: 'It’s not my fault: I wasn’t even there.' },
            { label: 'Fused', text: 'My phone died I couldn’t call you.' },
            { label: 'Fixed', text: 'My phone died, **so** I couldn’t call you. / **Because** my phone died, I couldn’t call you.' },
            { label: 'Splice', text: 'The report is due Friday, then we can relax.' },
            { label: 'Fixed', text: 'The report is due Friday, **and** then we can relax.' },
            { label: 'Splice', text: 'He’s a great player, he scored twice last week.' },
            { label: 'Fixed', text: 'He’s a great player: he scored twice last week.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Is a long sentence a run-on?',
          text: 'No. “Run-on” is about structure, not length. A sixty-word sentence correctly joined is fine; a five-word fused sentence (*I came you left*) is a run-on. Some teachers use “run-on” loosely for a rambling sentence, but in grammar it means clauses joined without proper punctuation or a conjunction.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Accepted exceptions',
          text: 'Very short parallel clauses are often joined with commas, especially in literary writing: *I came, I saw, I conquered.* Some style guides also allow a comma before a tag: *It’s late, isn’t it?* Outside these, treat a comma between two sentences as an error.',
        },
      ],
    },
    {
      id: 'decide',
      title: 'Choosing the right repair',
      blocks: [
        {
          t: 'flow',
          title: 'Two independent clauses: how to join them',
          nodes: [
            { label: 'Two ICs found', sub: 'each could stand alone', tone: 'data' },
            { label: 'Is one less important?', sub: 'yes: subordinate it', tone: 'process' },
            { label: 'Want to show the link?', sub: 'yes: comma + FANBOYS', tone: 'process' },
            { label: 'Closely related, balanced?', sub: 'yes: semicolon', tone: 'process' },
            { label: 'Otherwise', sub: 'full stop', tone: 'output' },
          ],
        },
        {
          t: 'example',
          title: 'One splice, five repairs',
          lines: [
            { label: 'Splice', text: 'The museum was closed, we visited the gardens instead.' },
            { label: 'Full stop', text: 'The museum was closed. We visited the gardens instead.' },
            { label: 'Semicolon', text: 'The museum was closed; we visited the gardens instead.' },
            { label: 'Comma + so', text: 'The museum was closed, so we visited the gardens instead.' },
            { label: 'Subordinate', text: 'Because the museum was closed, we visited the gardens instead.' },
            { label: 'Phrase', text: 'With the museum closed, we visited the gardens instead.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Read your work aloud: a full stop is where your voice drops and pauses.',
            'Check every comma that sits between two clauses: is there a FANBOYS after it?',
            'Look out for sentences where the second half starts with *it, this, he, she, they* or *I*: classic splice territory.',
          ],
          dont: [
            'Fix a splice by deleting the comma (that makes a fused sentence).',
            'Use a semicolon before a dependent clause: *I stayed; because it rained* is wrong.',
            'Fix a fragment by adding a comma to a separate sentence when the ideas do not belong together.',
          ],
        },
      ],
    },
    {
      id: 'paragraph',
      title: 'Editing a paragraph',
      blocks: [
        {
          t: 'example',
          title: 'A student paragraph, corrected',
          lines: [
            { label: 'Original', text: 'Last year our class went to Kuala Lumpur, it was my first trip abroad. Which made me nervous. We visited the Petronas Towers the view was amazing. Also the Batu Caves. Climbing all those steps, however it was worth it.' },
            { label: 'Error 1', text: '*Kuala Lumpur, it was*: comma splice. Use a full stop or *, and it was*.' },
            { label: 'Error 2', text: '*Which made me nervous.*: relative-clause fragment. Attach it.' },
            { label: 'Error 3', text: '*Towers the view*: fused sentence. Add a semicolon or full stop.' },
            { label: 'Error 4', text: '*Also the Batu Caves.*: phrase fragment.' },
            { label: 'Error 5', text: '*Climbing all those steps, however it was worth it.*: dangling phrase plus a *however* splice.' },
            { label: 'Revised', text: 'Last year our class went to Kuala Lumpur. It was my first trip abroad, which made me nervous. We visited the Petronas Towers, where the view was amazing, and the Batu Caves. Climbing all those steps was exhausting; however, it was worth it.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        { t: 'p', text: 'Label each as correct, fragment, fused sentence or comma splice, and fix it.' },
        {
          t: 'example',
          title: 'Questions 1 to 6',
          lines: [
            { label: 'Q1', text: 'After the concert ended.' },
            { label: 'A1', text: '**Fragment** (dependent clause). *We went for supper after the concert ended.*' },
            { label: 'Q2', text: 'The printer jammed, I had to start again.' },
            { label: 'A2', text: '**Comma splice**. *The printer jammed, so I had to start again.*' },
            { label: 'Q3', text: 'She studied hard she passed easily.' },
            { label: 'A3', text: '**Fused**. *She studied hard; she passed easily.* Or *Because she studied hard, she passed easily.*' },
            { label: 'Q4', text: 'Although it was cold, we swam.' },
            { label: 'A4', text: '**Correct**: dependent clause + comma + independent clause.' },
            { label: 'Q5', text: 'The prices were high, nevertheless we stayed.' },
            { label: 'A5', text: '**Comma splice** (*nevertheless* is an adverb). *The prices were high; nevertheless, we stayed.*' },
            { label: 'Q6', text: 'A city full of history and great food.' },
            { label: 'A6', text: '**Fragment** (noun phrase, no verb). *Penang is a city full of history and great food.*' },
          ],
        },
        {
          t: 'example',
          title: 'Questions 7 to 11',
          lines: [
            { label: 'Q7', text: 'I was late, but the meeting had not started.' },
            { label: 'A7', text: '**Correct**: comma + FANBOYS joins two ICs.' },
            { label: 'Q8', text: 'Running down the stairs two at a time.' },
            { label: 'A8', text: '**Fragment** (participle phrase). *He came running down the stairs two at a time.*' },
            { label: 'Q9', text: 'This is the best book I have read this year, you should borrow it.' },
            { label: 'A9', text: '**Comma splice**. Full stop, or *; you should borrow it.*' },
            { label: 'Q10', text: 'Turn off the lights.' },
            { label: 'A10', text: '**Correct**: an imperative with understood *you*.' },
            { label: 'Q11', text: 'We waited for an hour then we gave up.' },
            { label: 'A11', text: '**Fused**. *We waited for an hour, and then we gave up.* / *We waited for an hour; then we gave up.*' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Lunsford, A. A. (2016) *The St. Martin’s Handbook*, 8th edn. Bedford/St. Martin’s.',
    'Truss, L. (2003) *Eats, Shoots and Leaves*. Profile Books.',
    'Butterfield, J. (ed.) (2015) *Fowler’s Dictionary of Modern English Usage*, 4th edn. Oxford University Press.',
  ],
  related: [
    'grammar/sentences/phrases-and-clauses',
    'grammar/sentences/sentence-structures',
    'grammar/punctuation/commas',
    'grammar/punctuation/semicolons-colons-dashes',
    'grammar/practice/proofreading-workshop',
  ],
}

export default guide
