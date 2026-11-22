import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An **adverb** adds information to a verb, an adjective, another adverb or a whole sentence. It usually answers **how?**, **when?**, **where?**, **how often?** or **how much?**: she sang *beautifully*, we left *early*, come *here*, I *often* cycle, it is *very* hot. Adverbs are the most mobile words in English, and where you put one can change the meaning.',
  nutshell: [
    'Adverbs modify verbs (ran **quickly**), adjectives (**very** tall), other adverbs (**quite** slowly) and whole sentences (**Luckily**, no one was hurt).',
    'Many end in *-ly*, but many do not (*fast, well, soon, often, here, very*), and some -ly words are adjectives (*friendly, lovely, lonely*).',
    'Main kinds: **manner** (how), **time** (when), **place** (where), **frequency** (how often), **degree** (how much) and **sentence** adverbs (comment).',
    'Frequency adverbs go **before** the main verb but **after** *be*: *I **always** walk*; *I am **always** late*.',
    'Position matters: *only*, *just*, *even* and *almost* change meaning depending on which word they sit next to.',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'The kinds of adverb',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Answers', 'Examples'],
          rows: [
            ['Manner', 'How?', 'quickly, carefully, well, badly, loudly, slowly, happily, fast, hard, gently'],
            ['Time', 'When?', 'now, then, today, yesterday, soon, later, already, yet, recently, still'],
            ['Place', 'Where?', 'here, there, everywhere, outside, upstairs, abroad, nearby, away, home, downstairs'],
            ['Frequency', 'How often?', 'always, usually, often, sometimes, occasionally, rarely, seldom, never, daily, weekly'],
            ['Degree', 'How much? To what extent?', 'very, quite, rather, too, extremely, almost, nearly, completely, fairly, enough'],
            ['Sentence (comment)', 'What does the speaker think of it?', 'luckily, frankly, sadly, obviously, clearly, surprisingly, hopefully, fortunately, honestly, apparently'],
            ['Linking (conjunctive)', 'How does this connect to the last sentence?', 'however, therefore, meanwhile, moreover, nevertheless, consequently, furthermore, instead, otherwise, also'],
            ['Focusing', 'Which part are we highlighting?', 'only, just, even, also, especially, mainly, particularly, simply, merely, too'],
          ],
        },
        {
          t: 'example',
          title: 'One sentence, many adverbs',
          lines: [
            { label: 'Sentence', text: '**Luckily**, she **nearly always** drives **very carefully** **here**.' },
            { label: 'Luckily', text: 'sentence adverb: the speaker’s comment' },
            { label: 'nearly', text: 'degree, modifying *always*' },
            { label: 'always', text: 'frequency, modifying *drives*' },
            { label: 'very', text: 'degree, modifying *carefully*' },
            { label: 'carefully', text: 'manner, modifying *drives*' },
            { label: 'here', text: 'place, modifying *drives*' },
          ],
        },
      ],
    },
    {
      id: 'forms',
      title: 'Forming adverbs, and words that fool you',
      blocks: [
        {
          t: 'table',
          head: ['Adjective', 'Rule', 'Adverb'],
          rows: [
            ['Most adjectives', 'Add -ly', 'quick → quickly, slow → slowly, sad → sadly, careful → carefully, real → really, brave → bravely, loud → loudly, polite → politely'],
            ['Ending in consonant + y', 'y → ily', 'happy → happily, easy → easily, lucky → luckily, angry → angrily, busy → busily, heavy → heavily, noisy → noisily, lazy → lazily'],
            ['Ending in -le', 'Drop e, add y', 'gentle → gently, simple → simply, possible → possibly, terrible → terribly, comfortable → comfortably, humble → humbly, probable → probably, idle → idly'],
            ['Ending in -ic', 'Add -ally', 'basic → basically, tragic → tragically, dramatic → dramatically, automatic → automatically, scientific → scientifically, enthusiastic → enthusiastically, realistic → realistically (exception: public → publicly)'],
            ['Ending in -ue or -ll', 'Small spelling changes', 'true → truly, due → duly, full → fully, dull → dully'],
            ['Irregular', 'Different word', 'good → **well**'],
            ['Same form as adjective (flat adverbs)', 'No change', 'fast, hard, late, early, high, low, straight, daily, far, long'],
          ],
        },
        {
          t: 'example',
          title: 'Same form, different jobs',
          lines: [
            { label: 'fast', text: 'a **fast** car (adjective) / she drives **fast** (adverb). *Fastly* is not a word.' },
            { label: 'hard', text: 'a **hard** test (adjective) / they worked **hard** (adverb). *Hardly* means “almost not”: I **hardly** slept.' },
            { label: 'late', text: 'a **late** train (adjective) / he arrived **late** (adverb). *Lately* means “recently”.' },
            { label: 'early', text: 'an **early** start (adjective) / we left **early** (adverb).' },
            { label: 'well', text: 'She sings **well** (adverb). I don’t feel **well** (adjective meaning healthy).' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Not every -ly word is an adverb',
          text: '*Friendly*, *lovely*, *lonely*, *lively*, *ugly*, *silly*, *elderly*, *costly* and *likely* are adjectives: “a **friendly** dog”. There is no *friendlily*; say “in a **friendly way**”: “She smiled at me in a friendly way.”',
        },
      ],
    },
    {
      id: 'placement',
      title: 'Where adverbs go',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Usual position', 'Examples'],
          rows: [
            ['Frequency', 'Before the main verb; after *be*; after the first auxiliary', 'I **often** walk to school. She is **never** late. We have **always** lived here. They don’t **usually** call. He can **rarely** sleep. You should **always** check. I **sometimes** forget. It is **usually** quiet.'],
            ['Manner', 'After the verb, or after the object', 'She spoke **softly**. He read the letter **carefully**. They played **well**. Close the door **quietly**. He answered **politely**. We drove **slowly**. She sang the song **beautifully**. Speak **clearly**.'],
            ['Place and time', 'At the end, usually place before time', 'I’ll see you **here tomorrow**. We met **at the station at six**. She went **home early**. They stayed **there all week**. He arrived **in London yesterday**. I worked **upstairs this morning**. We ate **outside last night**. Come **here now**.'],
            ['Sentence and linking', 'At the start, with a comma (or mid-sentence between commas)', '**Fortunately**, the bus waited. **However**, nobody came. The plan, **however**, failed. **Honestly**, I don’t mind. **Sadly**, the shop closed. **Meanwhile**, Sam cooked. **Clearly**, it worked. **Therefore**, we must act.'],
            ['Degree', 'Right before the word it modifies', '**very** cold, **quite** quickly, **too** expensive, **extremely** well, **almost** finished, **rather** good, **completely** wrong, **fairly** easy'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Do not split a verb from its object',
          text: '“She speaks **very well** English” is wrong: a manner adverb does not usually go between a verb and its direct object. Write “She speaks English **very well**.” Likewise “I like **very much** football” → “I like football **very much**.”',
        },
        {
          t: 'example',
          title: 'Only: one word, five meanings',
          lines: [
            { label: '1', text: '**Only** I told her the news. (Nobody else told her.)' },
            { label: '2', text: 'I **only** told her the news. (I did nothing more than tell her; or, loosely, I told only her.)' },
            { label: '3', text: 'I told **only** her the news. (She was the only one I told.)' },
            { label: '4', text: 'I told her **only** the news. (I told her nothing else.)' },
            { label: '5', text: 'I told her the news **only** yesterday. (It was as recent as yesterday.)' },
            { label: 'Rule', text: 'In careful writing, put *only* right before the word or phrase it limits.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Starting with a negative adverb',
          text: 'When *never*, *rarely*, *seldom*, *hardly* or *not only* start a sentence for emphasis, the subject and auxiliary swap: “**Never have I** seen such rain.” “**Rarely does she** complain.” “**Not only did he** win, but he set a record.” This is formal and dramatic; normal order (“I have never seen...”) is fine in most writing.',
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
            ['She did good in the test.', 'She did **well** in the test.', '*Good* is an adjective; the adverb is *well*.'],
            ['Drive safe!', 'Drive **safely**!', 'Accepted in casual speech and signs, but write *safely* in formal English.'],
            ['He runs very quick.', 'He runs very **quickly**.', 'Manner needs the adverb form.'],
            ['I always am late.', 'I am **always** late.', 'Frequency adverbs come after *be*.'],
            ['I can’t hardly hear you.', 'I can **hardly** hear you.', '*Hardly* is already negative: no double negative.'],
            ['We worked hardly all day.', 'We worked **hard** all day.', '*Hardly* means *almost not*.'],
            ['She speaks fluently French.', 'She speaks French **fluently**.', 'Do not separate verb and object.'],
            ['It was real good.', 'It was **really** good.', 'Modifying an adjective needs the adverb *really* (or *very*).'],
            ['I have been there lately yesterday.', 'I was there **yesterday**. / I have been there **lately**.', '*Lately* (recently) goes with the present perfect, not a finished time.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Prefer a strong verb to a weak verb plus adverb: *sprinted* beats *ran very quickly*; *whispered* beats *said quietly*.',
            'Put *only*, *just* and *even* next to the word they limit.',
            'Use a comma after a linking adverb that starts a sentence: *However, ...*.',
          ],
          dont: [
            'Join two sentences with *however* and only a comma: *It rained, however we played* is a comma splice. Use a semicolon or full stop.',
            'Pile up intensifiers: *really very extremely* tired.',
            'Write *fastly*, *hardly* (for *hard*) or *goodly* (for *well*).',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick: good versus well',
          text: '“You do **well**; you are **good**.” *Well* goes with action verbs (did well, plays well); *good* goes with nouns and linking verbs (a good game, it looks good). The one exception: *well* as an adjective means healthy (*I feel well*).',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice set',
      lead: 'Answer, then read the reason.',
      blocks: [
        {
          t: 'example',
          title: 'Ten questions with answers',
          lines: [
            { label: 'Q1', text: 'Find the adverbs and say what each modifies: “The extremely nervous actor spoke too quietly.”' },
            { label: 'A1', text: '*extremely* (degree, modifies the adjective *nervous*), *too* (degree, modifies *quietly*), *quietly* (manner, modifies *spoke*).' },
            { label: 'Q2', text: 'Place the adverb: “She is late. (never)”' },
            { label: 'A2', text: '“She is **never** late.” After *be*.' },
            { label: 'Q3', text: 'Place the adverb: “We go to the cinema. (sometimes)”' },
            { label: 'A3', text: '“We **sometimes** go to the cinema.” Before the main verb. (*Sometimes* can also start or end the sentence.)' },
            { label: 'Q4', text: 'Adverb of *gentle*, *automatic* and *true*?' },
            { label: 'A4', text: '*gently*, *automatically*, *truly* (no e).' },
            { label: 'Q5', text: 'Adjective or adverb? “He has a **daily** routine.” / “He trains **daily**.”' },
            { label: 'A5', text: 'Adjective (describes *routine*), then adverb (says how often he trains).' },
            { label: 'Q6', text: 'Correct: “The team played very good yesterday.”' },
            { label: 'A6', text: '“The team played very **well** yesterday.” *Played* is an action verb.' },
            { label: 'Q7', text: 'What does “I **hardly** studied” mean?' },
            { label: 'A7', text: 'I studied very little. (Compare “I studied **hard**”: a lot.)' },
            { label: 'Q8', text: 'Correct the word order: “He reads every night quietly books.”' },
            { label: 'A8', text: '“He reads books quietly every night.” Object after verb, then manner, then time.' },
            { label: 'Q9', text: 'Fix the comma splice: “The forecast was good, however it rained.”' },
            { label: 'A9', text: '“The forecast was good**; however,** it rained.” or “...good. **However,** it rained.” *However* is an adverb, not a conjunction.' },
            { label: 'Q10', text: 'Is *friendly* an adverb in “She waved in a friendly manner”?' },
            { label: 'A10', text: 'No: *friendly* is an adjective describing *manner*. The phrase *in a friendly manner* does the adverb’s job.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press. Entries on adverb position, *only*, and adverbs without -ly.',
    'Huddleston, R. & Pullum, G. K. (2005). *A Student’s Introduction to English Grammar*. Cambridge University Press. Chapter on adjectives and adverbs.',
    'Biber, D., Johansson, S., Leech, G., Conrad, S. & Finegan, E. (1999). *Longman Grammar of Spoken and Written English*. Longman. On adverbials and their positions.',
  ],
  related: [
    'grammar/parts-of-speech/adjectives',
    'grammar/parts-of-speech/verbs-basics',
    'grammar/parts-of-speech/conjunctions',
    'grammar/usage/modifiers-and-parallelism',
    'grammar/sentences/fragments-run-ons-splices',
  ],
}

export default guide
