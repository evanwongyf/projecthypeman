import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Formal syntax asks how a sentence is built. **Systemic functional grammar** asks what it is for. Michael Halliday’s claim is that every clause does three jobs at once: it represents something going on, it enacts a relationship with the listener, and it organises itself as a message. Analyse those three layers and you can say why a text feels bureaucratic, evasive or persuasive, which is exactly what text analysis in an English classroom is trying to do.',
  nutshell: [
    'Three **metafunctions** run simultaneously in every clause: **experiential** (what is going on), **interpersonal** (the exchange between speaker and listener), **textual** (how the message is organised).',
    '**Transitivity** analyses the first: a Process, its Participants and any Circumstances.',
    'There are six process types. **Material**, **mental** and **relational** do most of the work; **verbal**, **behavioural** and **existential** fill the gaps.',
    '**Mood** analyses the second: the Subject and the Finite are the part of the clause you argue with.',
    '**Theme** analyses the third: whatever comes first is what the clause is about, and moving it changes the angle without changing the facts.',
    '**Nominalisation** turns processes into things, which is how writing becomes abstract, dense and quietly agentless.',
  ],
  sections: [
    {
      id: 'why',
      title: 'A grammar built to explain texts',
      blocks: [
        {
          t: 'p',
          text: 'Consider two sentences that report the same event. *The company polluted the river* and *Pollution of the river occurred*. A phrase structure tree will tell you that the second has a noun phrase subject and an intransitive verb, which is true and unhelpful. What you want to say is that the second sentence has deleted the agent, turned an action into a thing, and thereby made it nobody’s fault.',
        },
        {
          t: 'p',
          text: 'That is what this framework is for. It is a grammar of **choices**: at every point the speaker selects from a system, and the selections carry meaning. The question is never only "is this grammatical" but "what did choosing this rather than that accomplish".',
        },
        {
          t: 'mindmap',
          center: 'Every clause, at once',
          caption: 'The three metafunctions are not stages. They are three readings of the same words.',
          branches: [
            { label: 'Experiential', tone: 'orange', items: ['What is going on', 'Process, Participants, Circumstances', 'Answers: who did what to whom'] },
            { label: 'Interpersonal', tone: 'teal', items: ['The exchange', 'Mood, Subject, Finite, modality', 'Answers: what is the speaker doing to me'] },
            { label: 'Textual', tone: 'mustard', items: ['The message', 'Theme and Rheme, given and new', 'Answers: what is this clause about'] },
          ],
        },
      ],
    },
    {
      id: 'transitivity',
      title: 'Transitivity: what is going on',
      lead: 'Not the same "transitive" as in school grammar. Here it means the whole system of process types.',
      blocks: [
        {
          t: 'p',
          text: 'Every clause has a **Process**, realised by the verb group, plus one or more **Participants**, realised by noun groups, and optionally some **Circumstances** of time, place, manner or cause. The process type determines what the participants are called, and the names are not decoration: they say what kind of involvement each participant has.',
        },
        {
          t: 'table',
          head: ['Process type', 'Meaning', 'Participants', 'Example'],
          rows: [
            ['Material', 'doing, happening', 'Actor, Goal', 'The students **built** a bridge.'],
            ['Mental', 'sensing: thinking, feeling, perceiving, wanting', 'Senser, Phenomenon', 'She **remembered** the answer.'],
            ['Relational', 'being, having', 'Carrier + Attribute, or Token + Value', 'The experiment **was** a failure.'],
            ['Verbal', 'saying', 'Sayer, Receiver, Verbiage', 'The principal **told** the parents.'],
            ['Behavioural', 'physiological, between material and mental', 'Behaver', 'She **sighed**. He **watched**.'],
            ['Existential', 'there is, there exists', 'Existent', '**There was** a delay.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A quick test for the process type',
          text: 'Ask what the clause could be probed with. A material process answers *What did X do?* A mental process can project a whole clause (*She remembered that it was Tuesday*) and takes a conscious Senser. A relational process can usually be rewritten with *be* and does not answer *what did X do* at all.',
        },
        { t: 'grammar-lab', viz: 'functional' },
        {
          t: 'p',
          text: 'The pay-off comes when you count process types across a whole text. A recount is mostly material. A science explanation is mostly relational and material with the agent removed. A character study is mostly mental. A student who writes a narrative entirely in relational processes has produced a description rather than a story, and now you can say so precisely rather than writing "needs more action" in the margin.',
        },
      ],
    },
    {
      id: 'mood',
      title: 'Mood: what the speaker is doing to you',
      blocks: [
        {
          t: 'p',
          text: 'The interpersonal layer treats the clause as an exchange. You are either giving or demanding, and what is exchanged is either information or goods and services. Those two choices produce the four basic speech functions.',
        },
        {
          t: 'table',
          head: ['', 'Giving', 'Demanding'],
          rows: [
            ['Information', 'Statement (declarative): *The hall is full.*', 'Question (interrogative): *Is the hall full?*'],
            ['Goods and services', 'Offer: *Shall I open the hall?*', 'Command (imperative): *Open the hall.*'],
          ],
          caption: 'Mood is the grammatical realisation; speech function is the thing being done. They line up by default and come apart deliberately.',
        },
        {
          t: 'p',
          text: 'Inside the clause, the **Mood element** is the Subject plus the **Finite** (the part of the verb group that carries tense or modality). Everything else is the **Residue**. The reason to care is that the Mood element is what you argue with: tag a clause and you will find yourself repeating exactly the Subject and the Finite.',
        },
        {
          t: 'example',
          title: 'The tag test',
          lines: [
            { label: 'Clause', text: 'The students **have** finished the model, **haven’t they**?' },
            { label: 'What recurs', text: '*have* (Finite) and *they* (standing for the Subject). Nothing from the Residue appears in the tag.' },
            { label: 'Why it matters', text: 'The Subject is the element the speaker is holding responsible for the validity of the clause. That is a claim about meaning, and the tag test is its evidence.' },
          ],
        },
        {
          t: 'p',
          text: 'Mismatches between mood and speech function are where politeness lives. *Could you close the door?* is interrogative in form and a command in function. *You might want to check your spelling* is a declarative with a modal doing the work of an instruction. Students reading for tone are reading exactly this gap, and most of them can feel it long before they can name it.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Modality is a cline, not a switch',
          text: 'Between *yes* and *no* sits a whole scale: *must*, *should*, *will*, *may*, *might*, *could*. Halliday splits it into **modalisation** (degrees of probability and usuality) and **modulation** (degrees of obligation and inclination). A text’s modality profile is a good measure of how much its writer is hedging.',
        },
      ],
    },
    {
      id: 'theme',
      title: 'Theme: what the clause is about',
      blocks: [
        {
          t: 'p',
          text: 'The textual layer is the simplest to state and the most immediately useful in teaching writing. Whatever comes first in the clause is the **Theme**: the point of departure. The rest is the **Rheme**, where the new information lands.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Unmarked Theme', tag: 'the default', body: 'In a declarative, the Theme is the Subject: *The students built a bridge in the hall.* Nothing is being foregrounded.' },
            { title: 'Marked Theme', tag: 'a choice', body: 'Something else has been moved to the front: *In the hall, the students built a bridge.* Same facts; the clause is now about the place.' },
          ],
        },
        {
          t: 'p',
          text: 'Across a paragraph, the pattern of Themes is what makes writing feel like it is going somewhere. Linguists call the common patterns **thematic progression**, and students can be taught them directly.',
        },
        {
          t: 'levels',
          caption: 'Three patterns of thematic progression, each doing a different job.',
          items: [
            { name: 'Constant theme', verbs: ['describing', 'characterising'], body: 'Every clause starts with the same Theme: *The Mekong rises in Tibet. It flows through six countries. It supports sixty million people.* Steady, and dull if overused.' },
            { name: 'Linear progression', verbs: ['explaining', 'reasoning'], body: 'The Rheme of one clause becomes the Theme of the next: *The river floods each year. The flooding deposits silt. The silt makes the delta fertile.* This is what a good explanation feels like from the inside.' },
            { name: 'Derived themes', verbs: ['analysing', 'comparing'], body: 'Themes are successive parts of a whole announced earlier: *Three factors matter. The first is rainfall. The second is...* Signposted and easy to follow.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'A marking move worth stealing',
          text: 'Ask a student to underline the first few words of every sentence in a paragraph and read only those. If the list is incoherent, the paragraph will feel disjointed however good the individual sentences are. This takes two minutes and fixes more writing than a comma lesson.',
        },
      ],
    },
    {
      id: 'nominalisation',
      title: 'Nominalisation and grammatical metaphor',
      blocks: [
        {
          t: 'p',
          text: 'The single most consequential thing this framework describes is what Halliday called **grammatical metaphor**: encoding a process as a thing. *The company polluted the river* becomes *river pollution*. A verb becomes a noun, and once it is a noun it can be counted, modified, made the subject of another clause, and discussed without ever mentioning who did it.',
        },
        {
          t: 'example',
          title: 'Watching a clause congeal',
          lines: [
            { label: 'Congruent', text: 'The company polluted the river, so the fish died.' },
            { label: 'One step', text: 'The company’s pollution of the river caused the fish to die.' },
            { label: 'Two steps', text: 'River pollution caused fish mortality.' },
            { label: 'Three steps', text: 'The relationship between river pollution and fish mortality is well established.' },
            { label: 'What happened', text: 'Two processes became two nouns, the agent disappeared, and the clause is now about a relationship rather than about anything that occurred. Every step is more abstract, denser, and harder for a weak reader.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Teach nominalisation as a tool students gain, not a sin they commit: it is how academic registers work.',
            'Show the congruent version first, then the packed one, so the packing is visible.',
            'Use it to explain why textbooks are hard: they are three steps down this ladder on every page.',
            'Ask who disappeared. It is the fastest way into critical reading of a news report or a policy document.',
          ],
          dont: [
            'Tell students to "use more nouns" or "avoid nominalisation" as a blanket rule. Both are wrong half the time.',
            'Confuse it with the passive. They often travel together but they are different operations.',
            'Mark abstraction as sophistication by itself. Dense is not the same as good.',
          ],
        },
        {
          t: 'p',
          text: 'This connects directly to the [active and passive](@grammar/verbs/active-and-passive) guide. The passive hides the agent while keeping the process a verb. Nominalisation goes further: it hides the agent **and** dissolves the process. *Mistakes were made* is the passive. *There were failings in the process* has nominalised its way out of the sentence altogether.',
        },
      ],
    },
    {
      id: 'using',
      title: 'What to do with it',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Pick one layer at a time', body: 'Trying to teach all three metafunctions at once is the usual reason this framework feels overwhelming. Theme is the easiest to start with and gives results in one lesson.' },
            { title: 'Analyse texts students already have', body: 'A page of their own writing, a news report and a textbook paragraph, compared on process types, will show register differences they can see rather than be told about.' },
            { title: 'Count, do not just label', body: 'The insight is usually in the proportions. Eighty per cent relational processes is a finding; one relational process is a label.' },
            { title: 'Keep the terminology light', body: 'Actor and Goal earn their keep. Circumstance of Angle probably does not, in a secondary classroom.' },
            { title: 'Connect it back to a writing decision', body: 'Every analysis should end with "so if you wanted the opposite effect, you would change this". Otherwise it is taxonomy.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Where it is weakest',
          text: 'The boundaries between process types are genuinely fuzzy, especially behavioural against material and mental. Different analysts label the same clause differently and the framework has no procedure for settling it. Treat the categories as useful groupings rather than natural kinds, and do not build an assessment rubric that depends on a single disputed label.',
        },
      ],
    },
  ],
  sources: [
    'M. A. K. Halliday and Christian Matthiessen, Halliday’s Introduction to Functional Grammar (4th edn, 2014), the standard reference.',
    'Geoff Thompson, Introducing Functional Grammar (3rd edn, 2013), the most teachable introduction.',
    'J. R. Martin and David Rose, Working with Discourse (2nd edn, 2007), for applying it to whole texts.',
    'Len Unsworth (ed.), Researching Language in Schools and Communities (2000), for the classroom tradition this grammar grew out of.',
  ],
  related: [
    'grammar/systems/syntax-trees',
    'grammar/verbs/active-and-passive',
    'grammar/usage/register-and-singapore-english',
    'grammar/systems/tense-aspect-mood',
  ],
}

export default guide
