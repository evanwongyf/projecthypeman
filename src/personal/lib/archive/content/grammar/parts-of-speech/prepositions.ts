import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A **preposition** is a small word that links a noun or pronoun to the rest of the sentence, showing place, time, direction or some other relationship: *on* the table, *at* six, *into* the room, *because of* the rain. Prepositions are short and common, but which one a word takes is often a matter of convention rather than logic, so many simply have to be learnt.',
  nutshell: [
    'A preposition comes before a noun phrase or pronoun (its **object**): under **the bridge**, with **them**.',
    'For time: **at** for points (*at 6pm*), **on** for days and dates (*on Monday*), **in** for longer periods (*in July, in 2024*).',
    'For place: **at** a point (*at the door*), **on** a surface or line (*on the wall*), **in** an enclosed space or area (*in the box, in Paris*).',
    'Many verbs, adjectives and nouns need a fixed preposition: depend **on**, good **at**, interested **in**, reason **for**.',
    'Ending a sentence with a preposition is normal English: *Who are you talking to?*',
  ],
  sections: [
    {
      id: 'what',
      title: 'What prepositions are',
      blocks: [
        {
          t: 'p',
          text: 'A preposition always has something after it: a noun, a pronoun or a gerund (an -ing noun). The preposition and that object together make a **prepositional phrase**, which acts like an adjective or an adverb.',
        },
        {
          t: 'example',
          title: 'Prepositional phrases at work',
          lines: [
            { label: 'Like an adjective', text: 'The girl **with red hair** is my cousin. (Which girl?)' },
            { label: 'Like an adverb', text: 'We met **after lunch**. (When?) She lives **near the station**. (Where?)' },
            { label: 'Object is a pronoun', text: 'Come **with me**. This is **for them**. (Object forms: *me, him, her, us, them*.)' },
            { label: 'Object is a gerund', text: 'She is good **at swimming**. Thank you **for coming**. (After a preposition, use -ing, not *to*.)' },
          ],
        },
        {
          t: 'table',
          head: ['Kind', 'Examples'],
          rows: [
            ['Simple (one word)', 'in, on, at, by, for, with, from, to, of, about, under, over, between, among, during, since, through, without'],
            ['Complex (two or more words)', 'because of, according to, in front of, next to, instead of, due to, in spite of, on top of, apart from, as well as, out of, in addition to'],
          ],
        },
      ],
    },
    {
      id: 'time',
      title: 'Prepositions of time',
      blocks: [
        {
          t: 'table',
          head: ['Preposition', 'Use', 'Examples'],
          rows: [
            ['at', 'Clock times, points, festivals as a period, set phrases', 'at 7 o’clock, at noon, at midnight, at night, at the weekend (British), at Christmas, at the moment, at sunset, at lunchtime, at the end of the day'],
            ['on', 'Days, dates, particular days', 'on Monday, on 5 March, on my birthday, on Christmas Day, on Friday night, on the weekend (American), on time, on the first day, on New Year’s Eve, on weekdays'],
            ['in', 'Months, years, seasons, centuries, parts of the day, lengths of time from now', 'in May, in 2023, in winter, in the 1990s, in the 21st century, in the morning, in the evening, in ten minutes, in a week, in the past'],
            ['for', 'A length of time', 'for two hours, for ten years, for a week, for ages, for a while, for three days, for a long time, for the summer'],
            ['since', 'A starting point (with perfect tenses)', 'since 2019, since Monday, since 9am, since last year, since I was ten, since breakfast, since the war, since then'],
            ['during', 'Within a period, often an event', 'during the film, during the night, during the war, during lunch, during the holidays, during the match, during the 1960s, during my visit'],
            ['by', 'Not later than', 'by Friday, by 5pm, by the end of the week, by tomorrow, by then, by next year, by the time you arrive, by midnight'],
            ['until / till', 'Up to a point, then stops', 'until 6pm, until Monday, until further notice, until I return, until then, until the end, till late, until next week'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick: the time pyramid',
          text: 'Think of a pyramid from narrow to wide. **At** sits at the sharp point (*at 3pm*), **on** is the middle layer of days (*on Tuesday*), and **in** is the wide base of months, years and seasons (*in June, in 2030*). The narrower the time, the further up the pyramid.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'No preposition before these',
          text: 'Do not use *at*, *on* or *in* before *this*, *that*, *next*, *last*, *every*, *today*, *tomorrow* or *yesterday*: “I’ll see you **next Monday**” (not *on next Monday*), “We met **last year**”, “She calls **every day**”, “**This morning** I ran.”',
        },
        {
          t: 'example',
          title: 'For or since?',
          lines: [
            { label: 'for + length', text: 'I have lived here **for six years**.' },
            { label: 'since + start', text: 'I have lived here **since 2020**.' },
            { label: 'Wrong', text: '*I have lived here since six years* → **for** six years.' },
            { label: 'Test', text: 'Can you answer “how long?” with it? Use *for*. Can you answer “from when?” Use *since*.' },
          ],
        },
      ],
    },
    {
      id: 'place',
      title: 'Prepositions of place and movement',
      blocks: [
        {
          t: 'table',
          head: ['Preposition', 'Use', 'Examples'],
          rows: [
            ['at', 'A point or a place seen as a location for an activity', 'at the door, at the bus stop, at the corner, at school, at work, at home, at the cinema, at the top of the page, at a party, at 12 King Street'],
            ['on', 'A surface, a line, transport you can stand in', 'on the table, on the wall, on the floor, on the screen, on page 4, on the river, on the left, on the bus, on a train, on the second floor'],
            ['in', 'Inside an enclosed space, an area, a city or country', 'in the box, in the room, in the car, in a taxi, in the garden, in London, in Japan, in the water, in bed, in the photo'],
            ['Position', 'Where something is relative to something else', 'under the bed, above the door, below the line, behind the tree, in front of the house, next to me, beside the lake, between the two chairs, among the crowd, opposite the bank, near the station, inside the box'],
            ['Movement', 'Direction of travel', 'to the shop, into the room, out of the car, onto the stage, towards the exit, through the tunnel, across the road, along the river, past the church, up the hill, down the stairs, over the wall, around the corner, from Leeds'],
          ],
        },
        {
          t: 'example',
          title: 'Same place, different preposition',
          lines: [
            { label: 'at the cinema', text: 'the location of an activity: We were **at** the cinema last night.' },
            { label: 'in the cinema', text: 'inside the building: It was cold **in** the cinema.' },
            { label: 'on the bus', text: 'a vehicle you can walk around in: I read **on** the bus.' },
            { label: 'in the car', text: 'a small vehicle you sit in: I sat **in** the car.' },
            { label: 'in / into', text: 'She is **in** the pool (position). She jumped **into** the pool (movement).' },
            { label: 'between / among', text: '**between** two (or clearly separate) items; **among** a group: split **between** Sam and Ana; hidden **among** the trees.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Arrive at, arrive in, never arrive to',
          text: 'Use arrive **at** for a building or point (*arrive at the airport*) and arrive **in** for a city or country (*arrive in Singapore*). Never *arrive to*. With *home* use no preposition: *arrive home*, *go home*.',
        },
      ],
    },
    {
      id: 'dependent',
      title: 'Dependent prepositions',
      lead: 'These pairs are fixed by usage. Learn them as chunks.',
      blocks: [
        {
          t: 'table',
          head: ['Word type', 'Word + preposition'],
          rows: [
            ['Verbs', 'depend **on**, rely **on**, listen **to**, belong **to**, apologise **for**, wait **for**, agree **with** (a person), agree **on** (a decision), believe **in**, succeed **in**, insist **on**, consist **of**, approve **of**, complain **about**, worry **about**, concentrate **on**'],
            ['Adjectives', 'good **at**, bad **at**, interested **in**, afraid **of**, proud **of**, fond **of**, keen **on**, responsible **for**, famous **for**, similar **to**, different **from** (or *to*, British), married **to**, aware **of**, angry **with** (a person), angry **about** (a thing), capable **of**'],
            ['Nouns', 'reason **for**, cause **of**, solution **to**, answer **to**, increase **in**, demand **for**, interest **in**, effect **on**, advantage **of**, access **to**, damage **to**, attitude **to/towards**, relationship **with**, difference **between**, need **for**, example **of**'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Prepositions in phrasal verbs',
          text: 'In look **after**, give **up** or turn **down**, the small word combines with the verb to make a new meaning. Some of these are prepositions, some are adverb particles. They are covered in [Gerunds, infinitives, participles and phrasal verbs](@grammar/verbs/verbals-and-phrasal-verbs).',
        },
      ],
    },
    {
      id: 'ending',
      title: 'Ending a sentence with a preposition',
      blocks: [
        {
          t: 'p',
          text: 'The supposed rule against ending a sentence with a preposition was borrowed from Latin grammar in the seventeenth and eighteenth centuries. Modern grammars and usage guides agree that it is not a rule of English. Often the end position is the only natural one.',
        },
        {
          t: 'example',
          title: 'Natural versus forced',
          lines: [
            { label: 'Natural', text: 'What are you looking **at**? / Who did you go **with**? / This is the house I grew up **in**.' },
            { label: 'Forced', text: 'At what are you looking? / With whom did you go? / This is the house in which I grew up.' },
            { label: 'Phrasal verbs', text: 'The meeting was called **off**. Something to look forward **to**. She has nobody to talk **to**.' },
            { label: 'Note', text: 'The formal version (*in which I grew up*) is fine in very formal writing, but it is a choice of style, not correctness.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do drop the redundant ones',
          text: 'Cut a preposition that adds nothing: “Where is it **at**?” → “Where is it?”; “Where are you going **to**?” → “Where are you going?”; “**off of** the table” → “**off** the table”; “meet **up with**” is informal; *meet* alone is fine in writing.',
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
            ['I was born on 2008.', 'I was born **in** 2008.', 'Years take *in*.'],
            ['See you in Monday.', 'See you **on** Monday.', 'Days take *on*.'],
            ['The class starts on 9am.', 'The class starts **at** 9am.', 'Clock times take *at*.'],
            ['I’ve been waiting since two hours.', 'I’ve been waiting **for** two hours.', 'A length of time takes *for*.'],
            ['She is married with a doctor.', 'She is married **to** a doctor.', 'Fixed pair.'],
            ['It depends of the weather.', 'It depends **on** the weather.', 'Fixed pair.'],
            ['I’m interested on art.', 'I’m interested **in** art.', 'Fixed pair.'],
            ['We discussed about the plan.', 'We discussed the plan.', '*Discuss* takes a direct object (but *a discussion about*).'],
            ['I look forward to meet you.', 'I look forward to **meeting** you.', 'Here *to* is a preposition, so the -ing form follows.'],
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Fill each gap or fix the error, then check.',
      blocks: [
        {
          t: 'example',
          title: 'Twelve questions with answers',
          lines: [
            { label: 'Q1', text: 'We have a test ___ Thursday ___ 10am.' },
            { label: 'A1', text: '**on** Thursday **at** 10am: day, then clock time.' },
            { label: 'Q2', text: 'The shop opened ___ 1998.' },
            { label: 'A2', text: '**in** 1998: years take *in*.' },
            { label: 'Q3', text: 'I have known her ___ we were five.' },
            { label: 'A3', text: '**since**: a starting point.' },
            { label: 'Q4', text: 'Your keys are ___ the table, ___ the kitchen.' },
            { label: 'A4', text: '**on** the table (surface), **in** the kitchen (enclosed room).' },
            { label: 'Q5', text: 'Correct: “We arrived to Tokyo at midnight.”' },
            { label: 'A5', text: '“We arrived **in** Tokyo at midnight.” A city takes *in*.' },
            { label: 'Q6', text: 'She is very good ___ chess and keen ___ football.' },
            { label: 'A6', text: '**at** chess, **on** football.' },
            { label: 'Q7', text: 'Choose: “The prize was shared (between / among) the three winners.”' },
            { label: 'A7', text: 'Either is acceptable; *among* is the traditional choice for a group, while *between* is widely used for clearly separate individuals.' },
            { label: 'Q8', text: 'Correct: “Please hand in your essays until Friday.”' },
            { label: 'A8', text: '“...**by** Friday.” A deadline uses *by*; *until* means continuing up to then.' },
            { label: 'Q9', text: 'Is this acceptable? “That is the film I told you about.”' },
            { label: 'A9', text: 'Yes. Ending with a preposition is standard English.' },
            { label: 'Q10', text: 'Correct: “Thank you for help me.”' },
            { label: 'A10', text: '“Thank you for **helping** me.” After a preposition, use the -ing form.' },
            { label: 'Q11', text: 'The cat jumped ___ the box and hid. (movement)' },
            { label: 'A11', text: '**into**: movement from outside to inside.' },
            { label: 'Q12', text: 'I’ll see you ___ next week.' },
            { label: 'A12', text: 'No preposition: “I’ll see you next week.” *Next* replaces it.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on at/on/in, for/since, by/until and prepositions at the end of clauses.',
    'Butterfield, J. (ed.) (2015). *Fowler’s Dictionary of Modern English Usage* (4th ed.). Oxford University Press. On the preposition-at-the-end “rule”.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapter on prepositions.',
  ],
  related: [
    'grammar/verbs/verbals-and-phrasal-verbs',
    'grammar/parts-of-speech/pronouns',
    'grammar/parts-of-speech/conjunctions',
    'grammar/verbs/present-tenses',
    'grammar/sentences/phrases-and-clauses',
  ],
}

export default guide
