import type { Guide } from '../../../guide'

// Reference tables list 150 common irregular verbs, grouped by the pattern of their three
// principal parts (base, past simple, past participle).

const guide: Guide = {
  intro:
    'Most English verbs make their past simple and past participle by adding *-ed* (*walk, walked, walked*). Around two hundred common verbs do not. They look chaotic, but most fall into a handful of sound patterns, and learning them in those groups is far easier than memorising an alphabetical list.',
  nutshell: [
    'Every verb has three **principal parts**: the base (*go*), the past simple (*went*) and the past participle (*gone*). Irregular verbs are the ones whose second or third part is not base + *-ed*.',
    'The **past simple** stands alone: I **went**. The **past participle** follows *have* (perfect) or *be* (passive): I have **gone**, It was **written**.',
    'Four shapes cover nearly everything: **A-A-A** (*cut, cut, cut*), **A-B-B** (*keep, kept, kept*), **A-B-C** (*sing, sang, sung*) and **A-B-A** (*come, came, come*).',
    'British English keeps some *-t* forms (*learnt, burnt, spelt*) alongside *-ed*; American English mostly uses *-ed*, and uses *gotten* where British uses *got*.',
    'The commonest real-world errors are mixing past simple and participle: *I have went*, *she has wrote*, *we swum*.',
  ],
  sections: [
    {
      id: 'parts',
      title: 'The three parts and where each goes',
      blocks: [
        {
          t: 'table',
          head: ['Part', 'Used in', 'Examples with write'],
          rows: [
            ['Base form', 'present simple, infinitive, after modals and do / did', 'I **write**. I want to **write**. She can **write**. Did you **write**?'],
            ['Past simple', 'past simple affirmative only', 'She **wrote** a letter.'],
            ['Past participle', 'perfect tenses (after have), passive (after be), as an adjective', 'She has **written**. It was **written** in 1850. a **written** test'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The have-test',
          text: 'Unsure which form you need? If the word *have / has / had* or a form of *be* comes before it, use the third column. If it stands alone as the past, use the second. I **saw** it / I have **seen** it; They **ate** / It was **eaten**.',
        },
      ],
    },
    {
      id: 'aaa-abb',
      title: 'Same past and participle: A-A-A and A-B-B',
      lead: 'These are the easy ones: learn two forms, not three.',
      blocks: [
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**bet**', 'bet', 'bet'], ['**broadcast**', 'broadcast', 'broadcast'], ['**burst**', 'burst', 'burst'],
            ['**cast**', 'cast', 'cast'], ['**cost**', 'cost', 'cost'], ['**cut**', 'cut', 'cut'],
            ['**hit**', 'hit', 'hit'], ['**hurt**', 'hurt', 'hurt'], ['**let**', 'let', 'let'],
            ['**put**', 'put', 'put'], ['**quit**', 'quit', 'quit'], ['**read**', 'read', 'read'],
            ['**set**', 'set', 'set'], ['**shed**', 'shed', 'shed'], ['**shut**', 'shut', 'shut'],
            ['**split**', 'split', 'split'], ['**spread**', 'spread', 'spread'], ['**upset**', 'upset', 'upset'],
          ],
          caption: 'A-A-A: all three forms identical, mostly short verbs ending in -t or -d. Read changes its sound: /riːd/, /rɛd/, /rɛd/.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**bring**', 'brought', 'brought'], ['**buy**', 'bought', 'bought'], ['**catch**', 'caught', 'caught'],
            ['**fight**', 'fought', 'fought'], ['**seek**', 'sought', 'sought'], ['**teach**', 'taught', 'taught'],
            ['**think**', 'thought', 'thought'],
          ],
          caption: 'A-B-B with -ought / -aught: rhymes help, so learn them as a set (brought, bought, fought, sought, thought; caught, taught).',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**bend**', 'bent', 'bent'], ['**build**', 'built', 'built'], ['**lend**', 'lent', 'lent'],
            ['**send**', 'sent', 'sent'], ['**spend**', 'spent', 'spent'],
          ],
          caption: 'A-B-B: -d at the end becomes -t.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**creep**', 'crept', 'crept'], ['**deal**', 'dealt', 'dealt'], ['**feel**', 'felt', 'felt'],
            ['**keep**', 'kept', 'kept'], ['**kneel**', 'knelt', 'knelt'], ['**leave**', 'left', 'left'],
            ['**mean**', 'meant', 'meant'], ['**meet**', 'met', 'met'], ['**sleep**', 'slept', 'slept'],
            ['**sweep**', 'swept', 'swept'], ['**weep**', 'wept', 'wept'],
          ],
          caption: 'A-B-B: a long vowel (ee, ea) shortens and -t is added. Also kneeled in American English.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**bleed**', 'bled', 'bled'], ['**breed**', 'bred', 'bred'], ['**feed**', 'fed', 'fed'],
            ['**flee**', 'fled', 'fled'], ['**lead**', 'led', 'led'], ['**speed**', 'sped', 'sped'],
          ],
          caption: 'A-B-B: the long vowel shortens to e, ending in d. Speed up is regular: speeded up.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**lay**', 'laid', 'laid'], ['**pay**', 'paid', 'paid'], ['**say**', 'said', 'said'],
            ['**sell**', 'sold', 'sold'], ['**tell**', 'told', 'told'],
          ],
          caption: 'A-B-B: -ay becomes -aid, -ell becomes -old. Note the spelling: laid, paid, said (not layed, payed).',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**cling**', 'clung', 'clung'], ['**dig**', 'dug', 'dug'], ['**fling**', 'flung', 'flung'],
            ['**hang**', 'hung', 'hung'], ['**sling**', 'slung', 'slung'], ['**spin**', 'spun', 'spun'],
            ['**stick**', 'stuck', 'stuck'], ['**sting**', 'stung', 'stung'], ['**strike**', 'struck', 'struck'],
            ['**swing**', 'swung', 'swung'], ['**win**', 'won', 'won'],
          ],
          caption: 'A-B-B with u: the vowel changes to u (won keeps the u sound with o spelling). Hang is regular (hanged) when it means to execute.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**bind**', 'bound', 'bound'], ['**find**', 'found', 'found'], ['**grind**', 'ground', 'ground'],
            ['**wind**', 'wound', 'wound'],
          ],
          caption: 'A-B-B: -ind becomes -ound. Wind (to turn, rhymes with find) is irregular; wind (air) is a noun.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**get**', 'got', 'got'], ['**have**', 'had', 'had'], ['**hear**', 'heard', 'heard'],
            ['**hold**', 'held', 'held'], ['**light**', 'lit', 'lit'], ['**lose**', 'lost', 'lost'],
            ['**make**', 'made', 'made'], ['**shine**', 'shone', 'shone'], ['**shoot**', 'shot', 'shot'],
            ['**sit**', 'sat', 'sat'], ['**slide**', 'slid', 'slid'], ['**spit**', 'spat', 'spat'],
            ['**stand**', 'stood', 'stood'], ['**understand**', 'understood', 'understood'],
          ],
          caption: 'A-B-B, other patterns. Got is the British participle; American English uses gotten for obtain or become. Lit and lighted, shone and shined (polished), spat and spit (American) also occur.',
        },
      ],
    },
    {
      id: 'abc',
      title: 'Three different forms: A-B-C',
      lead: 'The verbs to learn with most care, because the second and third forms are easy to swap.',
      blocks: [
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**begin**', 'began', 'begun'], ['**drink**', 'drank', 'drunk'], ['**ring**', 'rang', 'rung'],
            ['**shrink**', 'shrank', 'shrunk'], ['**sing**', 'sang', 'sung'], ['**sink**', 'sank', 'sunk'],
            ['**spring**', 'sprang', 'sprung'], ['**stink**', 'stank', 'stunk'], ['**swim**', 'swam', 'swum'],
          ],
          caption: 'i-a-u: the vowel goes i → a → u, like sing, sang, sung. Past simple a, participle u: I swam / I have swum.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**blow**', 'blew', 'blown'], ['**draw**', 'drew', 'drawn'], ['**fly**', 'flew', 'flown'],
            ['**grow**', 'grew', 'grown'], ['**know**', 'knew', 'known'], ['**throw**', 'threw', 'thrown'],
            ['**withdraw**', 'withdrew', 'withdrawn'],
          ],
          caption: '-ew / -own (or -awn): past simple ends -ew, participle -own or -awn.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**mow**', 'mowed', 'mown'], ['**sew**', 'sewed', 'sewn'], ['**show**', 'showed', 'shown'],
            ['**sow**', 'sowed', 'sown'], ['**swell**', 'swelled', 'swollen'],
          ],
          caption: 'Regular past, irregular participle in -n. The -ed participle (mowed, sowed, swelled) is also standard; swollen is usual as an adjective.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**break**', 'broke', 'broken'], ['**choose**', 'chose', 'chosen'], ['**forget**', 'forgot', 'forgotten'],
            ['**freeze**', 'froze', 'frozen'], ['**speak**', 'spoke', 'spoken'], ['**steal**', 'stole', 'stolen'],
            ['**tread**', 'trod', 'trodden'], ['**wake**', 'woke', 'woken'], ['**weave**', 'wove', 'woven'],
          ],
          caption: 'o in the past, -en participle. Trod and trodden are British; American English also uses trod as a participle.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**bear**', 'bore', 'borne'], ['**swear**', 'swore', 'sworn'], ['**tear**', 'tore', 'torn'],
            ['**wear**', 'wore', 'worn'],
          ],
          caption: '-ore / -orn. Bear has borne for most uses but born in the passive of birth: I was born in 1990.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**arise**', 'arose', 'arisen'], ['**drive**', 'drove', 'driven'], ['**ride**', 'rode', 'ridden'],
            ['**rise**', 'rose', 'risen'], ['**strive**', 'strove', 'striven'], ['**write**', 'wrote', 'written'],
            ['**bite**', 'bit', 'bitten'], ['**hide**', 'hid', 'hidden'],
          ],
          caption: 'Long i in the base, short i in the participle, plus -en. Strived is also used for strive.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**mistake**', 'mistook', 'mistaken'], ['**shake**', 'shook', 'shaken'], ['**take**', 'took', 'taken'],
          ],
          caption: '-ake / -ook / -aken.',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**forbid**', 'forbade', 'forbidden'], ['**forgive**', 'forgave', 'forgiven'], ['**give**', 'gave', 'given'],
          ],
          caption: '-ive / -ave / -iven (and forbid, forbade, forbidden).',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**be**', 'was / were', 'been'], ['**beat**', 'beat', 'beaten'], ['**do**', 'did', 'done'],
            ['**eat**', 'ate', 'eaten'], ['**fall**', 'fell', 'fallen'], ['**go**', 'went', 'gone'],
            ['**lie**', 'lay', 'lain'], ['**see**', 'saw', 'seen'],
          ],
          caption: 'A-B-C, unique patterns. Lie (recline) is irregular; lie (tell an untruth) is regular: lied, lied.',
        },
      ],
    },
    {
      id: 'aba-british',
      title: 'Back to the base (A-B-A) and British -t forms',
      blocks: [
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**become**', 'became', 'become'], ['**come**', 'came', 'come'], ['**overcome**', 'overcame', 'overcome'],
            ['**run**', 'ran', 'run'],
          ],
          caption: 'A-B-A: the participle is the same as the base. I came / I have come (not I have came).',
        },
        {
          t: 'table',
          head: ['Base', 'Past simple', 'Past participle'],
          rows: [
            ['**burn**', 'burnt / burned', 'burnt / burned'], ['**dream**', 'dreamt / dreamed', 'dreamt / dreamed'], ['**dwell**', 'dwelt / dwelled', 'dwelt / dwelled'],
            ['**lean**', 'leant / leaned', 'leant / leaned'], ['**leap**', 'leapt / leaped', 'leapt / leaped'], ['**learn**', 'learnt / learned', 'learnt / learned'],
            ['**smell**', 'smelt / smelled', 'smelt / smelled'], ['**spell**', 'spelt / spelled', 'spelt / spelled'], ['**spill**', 'spilt / spilled', 'spilt / spilled'],
            ['**spoil**', 'spoilt / spoiled', 'spoilt / spoiled'],
          ],
          caption: 'Both forms are standard in British English; American English generally prefers -ed. As adjectives, -t forms are common everywhere: burnt toast, spilt milk.',
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Dived or dove, fit or fitted?',
          text: 'A few verbs differ by variety. British English uses *dived* where American English often uses *dove*; British *fitted* (the suit fitted him) often appears as *fit* in American English. Neither is a mistake in its own variety; be consistent within one piece of writing.',
        },
      ],
    },
    {
      id: 'confusables',
      title: 'Lie and lay, and other pairs people mix up',
      blocks: [
        {
          t: 'table',
          head: ['Verb', 'Meaning', 'Past simple', 'Past participle', 'Example'],
          rows: [
            ['**lie**', 'be horizontal, recline (no object)', 'lay', 'lain', 'I **lay** on the sofa all afternoon. It has **lain** there for years.'],
            ['**lay**', 'put something down (takes an object)', 'laid', 'laid', 'She **laid** the baby in the cot. Hens have **laid** eggs.'],
            ['**lie**', 'say something untrue', 'lied', 'lied', 'He **lied** about his age.'],
            ['**rise**', 'go up (no object)', 'rose', 'risen', 'Prices have **risen**.'],
            ['**raise**', 'lift something (object)', 'raised', 'raised', 'They **raised** prices.'],
            ['**fall**', 'drop down', 'fell', 'fallen', 'The tree **fell**.'],
            ['**fell**', 'cut down a tree', 'felled', 'felled', 'They **felled** the tree.'],
            ['**find**', 'discover', 'found', 'found', 'I **found** my keys.'],
            ['**found**', 'establish', 'founded', 'founded', 'The school was **founded** in 1870.'],
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Memory trick for lie and lay',
          text: 'Lay needs a thing you lay: *lay* the table, *lay* a carpet. Lie has no object: you just *lie* down. The trap is that the past of *lie* is *lay*: Yesterday I **lay** in bed is correct.',
        },
      ],
    },
    {
      id: 'learning',
      title: 'How to learn them',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Learn by pattern, not alphabet', body: 'Say a whole group aloud as a chant: *sing sang sung, ring rang rung, drink drank drunk*. The rhythm does the remembering.' },
            { title: 'Start with the most frequent', body: '*be, have, do, say, go, get, make, know, think, take, see, come, give, find, tell, become, leave, feel, put, bring*: a handful of verbs cover a large share of everyday use.' },
            { title: 'Use the participle in a sentence', body: 'Practise with *I have…*: I have **eaten**, I have **flown**, I have **forgotten**. Most errors are in this third column.' },
            { title: 'Cover and test', body: 'Hide two columns of a table and fill them in; mark and repeat only the ones you got wrong a day later.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'I have **gone** / I **went**.',
            'She has **written** three books.',
            'We **swam** across the lake.',
            'The window was **broken**.',
            'He **brought** a cake.',
            'They have **begun**.',
          ],
          dont: [
            'I have *went*.',
            'She has *wrote* three books.',
            'We *swum* across the lake.',
            'The window was *broke*.',
            'He *brang* / *bringed* a cake.',
            'They have *began*.',
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
          title: 'Fill the gap with the right form',
          lines: [
            { label: '1', text: '*Have you ever ___ (ride) a camel?* → **ridden**: after *have*, participle.' },
            { label: '2', text: '*She ___ (throw) the ball over the fence.* → **threw**: past simple.' },
            { label: '3', text: '*The bell has already ___ (ring).* → **rung**: i-a-u, participle u.' },
            { label: '4', text: '*Who ___ (teach) you to drive?* → **taught**.' },
            { label: '5', text: '*The car was ___ (steal) last night.* → **stolen**: passive, participle.' },
            { label: '6', text: '*He ___ (lie) down because he felt dizzy.* → **lay**: past of *lie* (recline).' },
            { label: '7', text: '*Please ___ (lay) the plates on the table.* → **lay**: base form, it takes an object.' },
            { label: '8', text: '*I’ve ___ (forget) her name.* → **forgotten**.' },
            { label: '9', text: '*Prices have ___ (rise) by 4%.* → **risen**.' },
            { label: '10', text: '*They ___ (shut) the shop early yesterday.* → **shut**: A-A-A.' },
            { label: '11', text: 'Correct it: *I seen him at the station.* → **I saw him** or **I have seen him**. *Seen* needs *have*.' },
            { label: '12', text: 'Correct it: *She has came home.* → **She has come home.** A-B-A: the participle is *come*.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Swan, M. (2016). *Practical English Usage* (4th ed.). Oxford University Press, irregular verbs list.',
    'Murphy, R. (2019). *English Grammar in Use* (5th ed.). Cambridge University Press, appendix 1.',
    'Oxford Learner’s Dictionaries, verb entries (for British and American variants).',
  ],
  related: ['grammar/parts-of-speech/verbs-basics', 'grammar/verbs/past-tenses', 'grammar/verbs/present-tenses', 'grammar/verbs/tenses-overview', 'grammar/verbs/active-and-passive', 'grammar/usage/commonly-confused-words'],
}

export default guide
