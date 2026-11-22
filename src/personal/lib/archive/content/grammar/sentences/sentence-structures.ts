import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'By structure, every sentence is one of four types, decided by how many **independent** and **dependent** clauses it has. Knowing them lets you vary your writing on purpose: short punches, balanced pairs, and long sentences that subordinate the less important idea.',
  nutshell: [
    '**Simple**: one independent clause. *The rain stopped.*',
    '**Compound**: two or more independent clauses joined by a coordinator (and, but, or, so...) or a semicolon.',
    '**Complex**: one independent clause plus at least one dependent clause.',
    '**Compound-complex**: two or more independent clauses plus at least one dependent clause.',
    'Length does not decide the type: a simple sentence can be long, a complex one short.',
    'Good prose mixes all four. Put the main idea in the main clause and the background in a dependent one.',
  ],
  sections: [
    {
      id: 'four',
      title: 'The four structures',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Independent clauses', 'Dependent clauses', 'Example'],
          rows: [
            ['Simple', '1', '0', 'The ferry left at noon.'],
            ['Compound', '2+', '0', 'The ferry left at noon, **but** we missed it.'],
            ['Complex', '1', '1+', 'We missed the ferry **because the taxi was late**.'],
            ['Compound-complex', '2+', '1+', 'We missed the ferry **because the taxi was late**, **so** we caught the next one.'],
          ],
        },
        {
          t: 'levels',
          caption: 'From one clause to many',
          items: [
            { name: 'Simple', body: 'One subject–verb core. It can still have compound subjects, compound verbs and many phrases.' },
            { name: 'Compound', body: 'Equal ideas side by side, joined by FANBOYS (for, and, nor, but, or, yet, so) or a semicolon.' },
            { name: 'Complex', body: 'One main idea plus subordinate ones introduced by because, although, when, if, who, which, that...' },
            { name: 'Compound-complex', body: 'Two or more main ideas, at least one with a subordinate clause attached.' },
          ],
        },
      ],
    },
    {
      id: 'simple',
      title: 'Simple sentences',
      blocks: [
        { t: 'p', text: 'A simple sentence has **one** independent clause. It may contain a compound subject, a compound verb, or many phrases, and still be simple.' },
        {
          t: 'example',
          title: 'Still simple',
          lines: [
            { label: 'Basic', text: 'Dogs bark.' },
            { label: 'Compound subject', text: '**Ali and his sister** run a food stall.' },
            { label: 'Compound verb', text: 'She **washed, dried and folded** the laundry.' },
            { label: 'Many phrases', text: 'After a long day at the office, the exhausted manager walked slowly home through the park in the rain.' },
            { label: 'Both compound', text: '**My parents and I** **packed the car and drove** to Melaka.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Compound verb is not a compound sentence',
          text: '*She locked the door and went to bed* has one subject doing two things: it is **simple**, and needs no comma before *and*. *She locked the door, and **he** went to bed* has two subjects and two clauses: it is **compound**.',
        },
      ],
    },
    {
      id: 'compound',
      title: 'Compound sentences',
      blocks: [
        { t: 'p', text: 'A compound sentence joins clauses of **equal** weight. There are three correct ways to do it.' },
        {
          t: 'table',
          head: ['Method', 'Pattern', 'Example'],
          rows: [
            ['Comma + coordinator', 'IC, and/but/or/so/yet/for/nor IC', 'The shop was shut, **so** we went home.'],
            ['Semicolon', 'IC; IC', 'The shop was shut; we went home.'],
            ['Semicolon + conjunctive adverb', 'IC; however, IC', 'The shop was shut; **however**, the café was open.'],
          ],
          caption: 'IC = independent clause. A comma alone between two ICs is a comma splice.',
        },
        {
          t: 'example',
          title: 'Each coordinator says something different',
          lines: [
            { label: 'and (addition)', text: 'I cooked, and Sam washed up.' },
            { label: 'but (contrast)', text: 'The flat is small, but the view is superb.' },
            { label: 'or (alternative)', text: 'Pay now, or the price will rise.' },
            { label: 'so (result)', text: 'It was late, so we took a taxi.' },
            { label: 'yet (surprise)', text: 'He trained hard, yet he lost.' },
            { label: 'for (reason, formal)', text: 'She hesitated, for the ice looked thin.' },
            { label: 'nor (negative addition)', text: 'He did not call, nor did he write. (Note the inversion: *did he*.)' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Short clauses',
          text: 'With very short, closely linked clauses many editors drop the comma: *I came and I saw.* It is never wrong to keep it with two independent clauses, and it helps the reader in longer sentences.',
        },
      ],
    },
    {
      id: 'complex',
      title: 'Complex and compound-complex sentences',
      blocks: [
        { t: 'p', text: 'A complex sentence puts one idea in charge and makes the others depend on it. The dependent clause can come first (usually followed by a comma) or after the main clause (usually no comma, except with contrast words like *although* and *whereas*).' },
        {
          t: 'example',
          title: 'Complex: dependent clause first or last',
          lines: [
            { label: 'First', text: '**When the film ended**, the audience clapped.' },
            { label: 'Last', text: 'The audience clapped **when the film ended**.' },
            { label: 'First', text: '**If you need help**, call me.' },
            { label: 'Last', text: 'Call me **if you need help**.' },
            { label: 'Middle (relative)', text: 'The woman **who sold me the bike** has moved to Ipoh.' },
            { label: 'Noun clause', text: 'I believe **that honesty matters**.' },
          ],
        },
        {
          t: 'example',
          title: 'Compound-complex',
          lines: [
            { label: '1', text: '**Although it was raining**, we went out, and we got soaked.' },
            { label: '2', text: 'The essay **that I submitted** got a B, but my friend got an A.' },
            { label: '3', text: 'I will cook **if you buy the ingredients**, and Mei will bring dessert.' },
            { label: 'Analysis of 1', text: 'Dependent: *Although it was raining*. Independent: *we went out*; *we got soaked*.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: '1. Count the finite verbs', body: 'Each finite verb with its own subject marks a clause. *She laughed when he fell, but he was fine* has three: laughed, fell, was.' },
            { title: '2. Mark the subordinators', body: 'Underline because, although, when, if, who, which, that and similar. Each starts a dependent clause.' },
            { title: '3. Count what is left', body: 'Clauses without a subordinator are independent.' },
            { title: '4. Name the type', body: '1 IC + 0 DC simple; 2+ IC + 0 DC compound; 1 IC + 1+ DC complex; 2+ IC + 1+ DC compound-complex.' },
          ],
        },
      ],
    },
    {
      id: 'variety',
      title: 'Using structure for rhythm and emphasis',
      blocks: [
        { t: 'p', text: 'Readers tire of any single pattern. Strings of simple sentences sound childish; strings of long complex ones exhaust. Vary them, and use the main clause for the idea you want remembered.' },
        {
          t: 'example',
          title: 'Revising for variety',
          lines: [
            { label: 'Before (all simple)', text: 'The storm arrived at six. The power went out. We lit candles. We played cards. It was fun.' },
            { label: 'After (mixed)', text: 'When the storm arrived at six, the power went out. We lit candles and played cards. It was fun.' },
            { label: 'Before (all long)', text: 'Although the council had promised to repair the road, which had been damaged in the floods, nothing had happened by March, and residents, who were increasingly angry, began a petition that gathered two thousand signatures.' },
            { label: 'After (mixed)', text: 'The council had promised to repair the flood-damaged road. By March, nothing had happened. Angry residents began a petition, and it soon gathered two thousand signatures.' },
          ],
        },
        {
          t: 'example',
          title: 'Subordination shifts emphasis',
          lines: [
            { label: 'Emphasis on the win', text: 'Although she was injured, **she won the race**.' },
            { label: 'Emphasis on the injury', text: 'Although she won the race, **she was injured**.' },
            { label: 'Equal weight', text: 'She was injured, but she won the race.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'End a paragraph on a short simple sentence for punch.',
            'Use complex sentences to show cause, condition and contrast explicitly.',
            'Read your paragraph aloud and change any run of three sentences with the same opening.',
          ],
          dont: [
            'Join unrelated ideas with *and* just to make a sentence longer.',
            'Bury the main point in a dependent clause: *Although the patient died, the operation was a success.*',
            'Start every sentence with a dependent clause: it becomes a tic.',
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice with answers',
      blocks: [
        {
          t: 'example',
          title: 'Name the structure',
          lines: [
            { label: 'Q1', text: 'The children laughed and shouted in the playground.' },
            { label: 'A1', text: '**Simple**: one subject, a compound verb.' },
            { label: 'Q2', text: 'I wanted to go, but I had too much homework.' },
            { label: 'A2', text: '**Compound**: two ICs joined by *, but*.' },
            { label: 'Q3', text: 'Because the road was flooded, the bus took a detour.' },
            { label: 'A3', text: '**Complex**: one DC (*Because...*) and one IC.' },
            { label: 'Q4', text: 'The man who fixed our roof was cheap, and he was quick.' },
            { label: 'A4', text: '**Compound-complex**: two ICs and a relative clause.' },
            { label: 'Q5', text: 'Exhausted after the long flight from London, Priya fell asleep on the sofa.' },
            { label: 'A5', text: '**Simple**: long, but only one finite verb with a subject (*fell*).' },
            { label: 'Q6', text: 'Whoever finishes first wins a prize.' },
            { label: 'A6', text: '**Complex**: the noun clause *Whoever finishes first* is the subject.' },
          ],
        },
        {
          t: 'example',
          title: 'Combine as instructed',
          lines: [
            { label: 'Q7', text: 'Make compound: *The café was full. We ate in the park.*' },
            { label: 'A7', text: 'The café was full, **so** we ate in the park. (Or a semicolon.)' },
            { label: 'Q8', text: 'Make complex: *The café was full. We ate in the park.*' },
            { label: 'A8', text: '**Because** the café was full, we ate in the park.' },
            { label: 'Q9', text: 'Make compound-complex: *It rained. The match continued. The crowd went home.*' },
            { label: 'A9', text: '**Although** it rained, the match continued, **but** the crowd went home.' },
            { label: 'Q10', text: 'Which sentence stresses the delay? (a) Although the train was late, we arrived on time. (b) Although we arrived on time, the train was late.' },
            { label: 'A10', text: '**(b)**: the main clause carries the emphasis, and there it is *the train was late*.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016) *Practical English Usage*, 4th edn. Oxford University Press.',
    'Crystal, D. (2004) *Rediscover Grammar*, 3rd edn. Longman.',
    'Strunk, W. and White, E. B. (2000) *The Elements of Style*, 4th edn. Longman.',
  ],
  related: [
    'grammar/sentences/phrases-and-clauses',
    'grammar/sentences/fragments-run-ons-splices',
    'grammar/parts-of-speech/conjunctions',
    'grammar/punctuation/commas',
    'grammar/punctuation/semicolons-colons-dashes',
  ],
}

export default guide
