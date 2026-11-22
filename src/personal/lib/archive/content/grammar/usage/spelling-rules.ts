import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'English spelling looks chaotic, but most everyday words follow a handful of patterns: when to double a consonant, when to drop a silent *e*, when *y* turns into *i*, and how to form plurals. Learn the patterns, then memorise the short list of words that break them.',
  nutshell: [
    '**Doubling**: one syllable, one vowel, one final consonant, plus a vowel suffix: *hop → hopping*, *big → bigger*. In longer words, double only if the stress is on the last syllable: *begin → beginning*, but *visit → visited*.',
    '**Silent e**: drop it before a vowel suffix (*make → making*), keep it before a consonant suffix (*hope → hopeful*).',
    '**Consonant + y** becomes *i* (*happy → happiness*, *carry → carried*) except before *-ing* (*carrying*).',
    '**I before e except after c**, when the sound is *ee*: *believe, field, receive, ceiling*. There are exceptions (*seize, weird, protein*).',
    'British English doubles final *l* (*travelled*) and keeps *-our*, *-re*, *-ce*; American English does not (*traveled, color, center, defense*). Singapore schools and government generally follow British spelling.',
  ],
  sections: [
    {
      id: 'doubling',
      title: 'Doubling the final consonant',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Is the suffix a vowel suffix?', body: '*-ing, -ed, -er, -est, -able, -ence* start with a vowel. *-ful, -ly, -ment, -ness* start with a consonant and never trigger doubling: *sad → sadness*, *ship → shipment*.' },
            { title: 'Does the word end in one vowel + one consonant?', body: '*stop* (o + p): yes. *rain* (two vowels): no, so *raining*. *help* (two consonants): no, so *helping*.' },
            { title: 'Is the last syllable stressed?', body: 'One-syllable words always count as stressed. *be-GIN → beginning*, *re-FER → referred*, but *VIS-it → visited*, *O-pen → opened*, *BEN-e-fit → benefited*.' },
            { title: 'If all three are yes, double', body: '*stop → stopped*, *occur → occurred*, *forget → forgetting*, *regret → regrettable*.' },
          ],
        },
        {
          t: 'table',
          head: ['Base', 'Doubles?', 'Result', 'Reason'],
          rows: [
            ['run', 'yes', 'running, runner', 'one syllable, one vowel, one consonant'],
            ['swim', 'yes', 'swimming, swimmer', 'same'],
            ['rain', 'no', 'raining, rained', 'two vowels before the *n*'],
            ['jump', 'no', 'jumping, jumped', 'two final consonants'],
            ['fix, snow, play', 'no', 'fixing, snowing, playing', '*w, x, y* are never doubled'],
            ['admit', 'yes', 'admitted, admitting', 'stress on *-MIT*'],
            ['prefer', 'yes / no', 'preferred, preferring, but preference', 'stress moves to *PREF-* in *preference*'],
            ['offer', 'no', 'offered, offering', 'stress on *OF-*'],
            ['target', 'no', 'targeted, targeting', 'stress on *TAR-*'],
            ['focus', 'no (usually)', 'focused, focusing', '*focussed* is also seen in British English, but *focused* is more common'],
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'The British l rule',
          text: 'British English doubles a final *l* after a single vowel whatever the stress: *travel → travelled, traveller*; *cancel → cancelled*; *model → modelling*; *label → labelled*. American English follows the stress rule: *traveled, canceled, modeling*. *Parallel → paralleled* is an exception in both.',
        },
      ],
    },
    {
      id: 'silent-e',
      title: 'Dropping or keeping the silent e',
      blocks: [
        {
          t: 'table',
          head: ['Base', 'Vowel suffix (drop e)', 'Consonant suffix (keep e)'],
          rows: [
            ['hope', 'hoping, hoped', 'hopeful, hopeless'],
            ['care', 'caring, cared', 'careful, careless'],
            ['move', 'moving, movable', 'movement'],
            ['use', 'using, usable', 'useful, useless'],
            ['write', 'writing', '(no consonant suffix)'],
            ['excite', 'exciting', 'excitement'],
            ['love', 'loving, lovable', 'lovely'],
          ],
        },
        {
          t: 'table',
          head: ['Exception', 'Examples', 'Why'],
          rows: [
            ['Keep *e* after soft *c* or *g* before *a* or *o*', 'notic**e**able, manag**e**able, chang**e**able, courag**e**ous, outrag**e**ous', 'Without the *e*, *c* and *g* would sound hard: *noticable* would suggest a *k* sound.'],
            ['Drop *e* before a consonant suffix', 'argue → argument, true → truly, nine → ninth, whole → wholly, due → duly', 'Historical spellings: learn them as a list.'],
            ['Keep *e* to avoid confusion', 'dye → dyeing (colouring) vs die → dying; singe → singeing vs sing → singing', 'Prevents a clash with another word.'],
            ['Words ending *-ee, -oe, -ye*', 'agree → agreeing, see → seeing, canoe → canoeing', 'Keep the *e* to keep the sound.'],
            ['Both spellings accepted (British)', 'judgement / judgment, acknowledgement / acknowledgment, ageing / aging', '*Judgment* is the usual form in legal contexts.'],
            ['*-ie* before *-ing*', 'die → dying, lie → lying, tie → tying', '*ie* changes to *y* so you do not get *-iing*.'],
          ],
        },
      ],
    },
    {
      id: 'y-to-i',
      title: 'When y changes to i',
      blocks: [
        {
          t: 'example',
          title: 'Consonant + y versus vowel + y',
          lines: [
            { label: 'Consonant + y', text: 'happy → happ**i**er, happ**i**ness, happ**i**ly; carry → carr**i**ed, carr**i**es; study → stud**i**ed; beauty → beaut**i**ful' },
            { label: 'But before -ing', text: 'carr**y**ing, stud**y**ing, worr**y**ing, cop**y**ing (no double *i*)' },
            { label: 'Vowel + y (keep y)', text: 'play → pla**y**ed, pla**y**er; enjoy → enjo**y**ment; obey → obe**y**ed; key → ke**y**s' },
            { label: 'Exceptions', text: 'day → daily; pay → paid; say → said; lay → laid; shy → shyly, dry → dryness (both *drily* and *dryly* exist)' },
          ],
        },
      ],
    },
    {
      id: 'ie-ei',
      title: 'I before e',
      blocks: [
        {
          t: 'quote',
          text: 'I before e, except after c, when the sound is *ee*. Or when sounded like *ay*, as in *neighbour* and *weigh*.',
          by: 'Traditional rhyme, with its useful second half',
        },
        {
          t: 'table',
          head: ['Pattern', 'Examples'],
          rows: [
            ['*ie* for the *ee* sound', 'believe, achieve, field, piece, chief, niece, relief, grief, shield, yield'],
            ['*ei* after *c* for *ee*', 'receive, ceiling, deceive, conceit, perceive, receipt'],
            ['*ei* for the *ay* sound', 'eight, weigh, neighbour, vein, reign, freight, sleigh'],
            ['Exceptions to learn', 'seize, weird, protein, caffeine, either, neither, leisure, height, foreign, forfeit'],
            ['*cie* where the sound is not *ee*', 'science, species, ancient, efficient, sufficient, society'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A sentence for the exceptions', text: '*Neither foreign scientist seized the weird protein at their leisure.* Seven exceptions in one line (neither, foreign, seized, weird, protein, their, leisure), easy to repeat before an exam.' },
      ],
    },
    {
      id: 'plurals-prefixes',
      title: 'Plurals, prefixes and suffixes',
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Examples', 'Exceptions'],
          rows: [
            ['Add *-es* after *s, x, z, ch, sh*', 'buses, boxes, quizzes, churches, wishes', '*stomachs* (*ch* sounds like *k*)'],
            ['Consonant + *y* → *-ies*', 'city → cities, baby → babies, party → parties', 'Proper names: *the Kennedys*'],
            ['*-f / -fe* → *-ves*', 'knife → knives, leaf → leaves, half → halves, wolf → wolves, shelf → shelves', 'roofs, chiefs, beliefs, cliffs; *scarfs* and *scarves*, *hoofs* and *hooves* both exist'],
            ['*-o* → *-oes* for many common words', 'potatoes, tomatoes, heroes, echoes, vetoes', 'photos, pianos, radios, videos, zoos, kilos'],
            ['Irregular', 'children, men, women, feet, teeth, mice, geese, people', 'sheep, fish, deer, series, species do not change'],
            ['Greek and Latin plurals', 'criterion → criteria, phenomenon → phenomena, analysis → analyses, crisis → crises, thesis → theses', 'formulae / formulas and cacti / cactuses both accepted; *data* is now widely used as singular'],
          ],
        },
        {
          t: 'table',
          head: ['Rule', 'Examples'],
          rows: [
            ['A prefix never changes the base: double letters appear naturally', 'dis + satisfied = di**ss**atisfied; mis + spell = mi**ss**pell; un + necessary = u**nn**ecessary; im + mature = i**mm**ature; il + legal = i**ll**egal; ir + regular = i**rr**egular'],
            ['*-ly* added to a word ending in *l* gives *-lly*', 'real → rea**lly**, final → fina**lly**, careful → carefu**lly**, usual → usua**lly**'],
            ['*-ic* words take *-ally*', 'basic → basic**ally**, dramatic → dramatic**ally**, tragic → tragic**ally** (exception: public → public**ly**)'],
            ['*full* as a suffix has one *l*', 'careful, hopeful, spoonful, beautiful; British *fulfil* and *skilful*, American *fulfill* and *skillful*'],
            ['*-able* vs *-ible*', 'Usually *-able* if the base is a whole word (*readable, washable, acceptable*); *-ible* often follows a non-word root (*visible, edible, possible, terrible*). Many exceptions: check a dictionary.'],
          ],
        },
      ],
    },
    {
      id: 'british-american',
      title: 'British versus American spelling, and -ise versus -ize',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'British', 'American'],
          rows: [
            ['-our / -or', 'colour, favour, behaviour, neighbour, honour', 'color, favor, behavior, neighbor, honor'],
            ['-re / -er', 'centre, metre, theatre, fibre', 'center, meter, theater, fiber'],
            ['-ce / -se (nouns)', 'defence, offence, licence, practice (noun)', 'defense, offense, license, practice'],
            ['-ll- / -l-', 'travelled, cancelled, jewellery', 'traveled, canceled, jewelry'],
            ['-l / -ll', 'enrol, fulfil, skilful, instalment', 'enroll, fulfill, skillful, installment'],
            ['-yse / -yze', 'analyse, paralyse, catalyse', 'analyze, paralyze, catalyze'],
            ['-ogue / -og', 'catalogue, dialogue, analogue', 'catalog (dialogue is common in both)'],
            ['ae, oe / e', 'paediatric, encyclopaedia, manoeuvre, oestrogen', 'pediatric, encyclopedia, maneuver, estrogen'],
            ['Single words', 'programme (TV), cheque, tyre, grey, aluminium, plough, mould, sceptical, pyjamas, ageing', 'program, check, tire, gray, aluminum, plow, mold, skeptical, pajamas, aging'],
          ],
        },
        {
          t: 'list',
          items: [
            '**-ise or -ize?** In British English both are correct: *organise* and *organize*, *realise* and *realize*. *-ize* is the house style of Oxford University Press (sometimes called Oxford spelling); *-ise* is more common in British newspapers. American English uses *-ize*.',
            'Some words are **always -ise** because *-ise* is part of the root, not a suffix: *advertise, advise, comprise, compromise, despise, devise, exercise, improvise, revise, supervise, surprise, televise*.',
            'Even in Oxford spelling, British English keeps **-yse**: *analyse*, *paralyse*.',
            'In British English, *program* is standard for computer programs, and *programme* for television, events and courses.',
            '**Be consistent**: choose one system for a whole document. If your school or employer has a style guide, follow it.',
          ],
        },
      ],
    },
    {
      id: 'tricky-words',
      title: 'Words most often misspelt',
      blocks: [
        {
          t: 'table',
          head: ['Correct', 'Common mistake', 'Memory trick'],
          rows: [
            ['accommodate', 'accomodate', 'It is big enough to accommodate two c’s and two m’s.'],
            ['definitely', 'definately', 'It contains *finite*.'],
            ['separate', 'seperate', 'There is *a rat* in sep*a*r*a*te.'],
            ['necessary', 'neccessary, necesary', 'One collar (c), two sleeves (ss).'],
            ['embarrass', 'embarass', 'Two r’s and two s’s: you go really red and smile shyly.'],
            ['occurred', 'occured', 'Stress on *-CUR*, so double the r (and occ- has two c’s).'],
            ['beginning', 'begining', 'be-GIN-ning: stressed final syllable, so double the n.'],
            ['receive', 'recieve', '*e* before *i* after *c*.'],
            ['believe', 'beleive', 'Never be*lie*ve a *lie*.'],
            ['government', 'goverment', 'People *govern*; then add *-ment*.'],
            ['environment', 'enviroment', 'Iron is in the env*iron*ment.'],
            ['February', 'Febuary', 'Feb-*ru*-ary: say the first r.'],
            ['Wednesday', 'Wensday', 'Say it as spelt in your head: *Wed-nes-day*.'],
            ['rhythm', 'rythm', '**R**hythm **H**elps **Y**our **T**wo **H**ips **M**ove.'],
            ['privilege', 'priviledge', 'No *d*: it is not like *knowledge*.'],
            ['committee', 'commitee', 'Double m, double t, double e.'],
            ['questionnaire', 'questionaire', '*Question* ends in *n* and *-naire* begins with one: keep both.'],
            ['liaison', 'liason', 'Two i’s: *li-ai-son*.'],
            ['maintenance', 'maintainance', '*Maintain* drops its second *i*: *main-ten-ance*.'],
            ['until', 'untill', 'One l, though *till* has two.'],
            ['tomorrow', 'tommorrow', 'One m, two r’s.'],
            ['harass', 'harrass', 'One r, two s’s (compare *embarrass*: two of each).'],
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
          title: 'Add the suffix or correct the spelling',
          lines: [
            { label: 'Q1', text: 'hop + ing' },
            { label: 'A1', text: '**hopping**: one syllable, one vowel, one consonant. (Compare *hope → hoping*.)' },
            { label: 'Q2', text: 'visit + ed' },
            { label: 'A2', text: '**visited**: stress on *VIS-*, so no doubling.' },
            { label: 'Q3', text: 'refer + ed, and refer + ence' },
            { label: 'A3', text: '**referred** (stress on *-FER*), **reference** (stress moves to *REF-*).' },
            { label: 'Q4', text: 'manage + able' },
            { label: 'A4', text: '**manageable**: keep the *e* to keep the *g* soft.' },
            { label: 'Q5', text: 'study + ing, and study + ed' },
            { label: 'A5', text: '**studying** (keep *y* before *-ing*), **studied** (consonant + *y* → *i*).' },
            { label: 'Q6', text: 'travel + ed (British English)' },
            { label: 'A6', text: '**travelled**: British English doubles a final *l*.' },
            { label: 'Q7', text: 'Correct: *I definately recieved the seperate letter.*' },
            { label: 'A7', text: '*I **definitely received** the **separate** letter.*' },
            { label: 'Q8', text: 'Plural of *leaf*, *roof*, *potato*, *photo*.' },
            { label: 'A8', text: '**leaves, roofs, potatoes, photos**.' },
            { label: 'Q9', text: 'dis + appear, and mis + spell' },
            { label: 'A9', text: '**disappear** (one s: the base starts with *a*), **misspell** (two s’s: *mis* + *spell*).' },
            { label: 'Q10', text: 'Is *organize* wrong in a British essay?' },
            { label: 'A10', text: 'No. Both *organise* and *organize* are correct British spellings; just be consistent. (*Analyze*, though, is American; British is *analyse*.)' },
            { label: 'Q11', text: 'happy + ly, basic + ly, public + ly' },
            { label: 'A11', text: '**happily, basically, publicly**.' },
            { label: 'Q12', text: 'die + ing, and dye + ing' },
            { label: 'A12', text: '**dying** (*ie* → *y*), **dyeing** (keep *e* to avoid confusion with *dying*).' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'grammar/usage/commonly-confused-words', note: 'Words that are spelt right but used wrong' },
            { path: 'grammar/parts-of-speech/nouns', note: 'Plural forms in more depth' },
            { path: 'grammar/punctuation/hyphens-capitals-numbers', note: 'Hyphenated compounds and capitals' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Carney, E. (1994). *A Survey of English Spelling*. Routledge.',
    'Crystal, D. (2012). *Spell It Out: The Singular Story of English Spelling*. Profile Books.',
    'Oxford English Dictionary and Merriam-Webster, for British and American variants.',
    'Butterfield, J. (ed.) (2015). *Fowler’s Dictionary of Modern English Usage* (4th ed.). Oxford University Press, entry on -ise, -ize.',
  ],
  related: [
    'grammar/usage/commonly-confused-words',
    'grammar/parts-of-speech/nouns',
    'grammar/punctuation/hyphens-capitals-numbers',
    'grammar/usage/register-and-singapore-english',
  ],
}

export default guide
