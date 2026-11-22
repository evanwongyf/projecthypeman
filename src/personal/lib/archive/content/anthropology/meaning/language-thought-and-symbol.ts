import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Language is the most characteristic human behaviour, and the main vehicle of culture. Linguistic anthropologists study how people actually talk: how speech marks status, builds relationships, makes things happen (“I now pronounce you…”) and relates to how people think. They have also examined the famous Sapir-Whorf hypothesis, the claim that the language you speak shapes the way you think. The strong version has been rejected, but a weaker version has real support. This guide explains what is known, corrects some popular myths, and introduces signs and symbols.',
  nutshell: [
    '**Language is social action**: speech does things (promising, naming, insulting), and varies with context, status and audience.',
    'The **strong** Sapir-Whorf hypothesis (language **determines** thought) is rejected. The **weak** version (language **influences** some habits of thought) has support in some areas.',
    '**Colour terms** follow universal patterns (**Berlin and Kay**), yet naming differences affect how fast people distinguish some colours.',
    '**Spatial language** matters: speakers of languages that use compass directions keep track of orientation differently.',
    'The “**Eskimo words for snow**” story is mostly a **myth**. Be careful with sweeping claims about language and thought.',
  ],
  sections: [
    {
      id: 'social',
      title: 'Language as social life',
      blocks: [
        {
          t: 'table',
          head: ['Topic', 'Idea', 'Example'],
          rows: [
            ['Speech acts', 'Words can perform actions (J. L. Austin)', '“I promise”, “I name this ship”, “I apologise”'],
            ['Register and style', 'People speak differently to different audiences', 'Formal and informal speech; talking to a child or a boss'],
            ['Code-switching', 'Moving between languages or varieties in one conversation', 'Singapore English and Singlish; Spanglish; Hindi-English mixes'],
            ['Honorifics', 'Grammar encodes relative status and respect', 'Japanese keigo; Javanese speech levels; Korean honorific endings'],
            ['Politeness', 'Ways of managing “face”: showing respect and avoiding imposition', 'Indirect requests (“Could you possibly…?”)'],
            ['Language ideology', 'Beliefs about which varieties are “correct” or “prestigious”', 'Treating a standard dialect as better, and accents as signals of class'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Language and identity', text: 'People use language to signal who they are and who they belong with. In Singapore, for example, shifts between standard English and colloquial Singlish can mark formality, solidarity and national identity. The same speaker may use both within a day.' },
      ],
    },
    {
      id: 'whorf',
      title: 'Does language shape thought? The Sapir-Whorf debate',
      blocks: [
        { t: 'p', text: 'Edward Sapir and Benjamin Lee Whorf suggested in the 1930s that speakers of different languages experience the world differently. Whorf’s claims about the Hopi language and “time” were later criticised as unsupported. Today researchers distinguish two versions.' },
        {
          t: 'table',
          head: ['Version', 'Claim', 'Status'],
          rows: [
            ['Linguistic determinism (strong)', 'Language limits what you can think', 'Rejected: speakers can think about things their language does not label, and learn new words and concepts'],
            ['Linguistic relativity (weak)', 'Language can influence perception, memory and habits of attention', 'Supported in certain domains with small to moderate effects'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Colour', title: 'Berlin and Kay (1969)', body: 'Across languages, colour names are added in a fairly consistent order (black and white, then red, then green or yellow, then blue…), suggesting universal tendencies. Russian has two basic words for blue, and Russian speakers are slightly faster at discriminating light and dark blues (Winawer and colleagues, 2007).' },
            { tag: 'Space', title: 'Absolute directions', body: 'Speakers of Guugu Yimithirr (Australia) and some Mayan languages use compass directions (“the cup is to the north of the plate”) instead of left and right. They tend to keep better track of orientation (Levinson, 2003).' },
            { tag: 'Number', title: 'Counting', body: 'Speakers of Pirahã (Amazonia) have no exact number words and perform poorly on tasks requiring exact quantity matching (Gordon, 2004). Claims about other Pirahã features, such as lack of recursion (Everett), remain contested.' },
            { tag: 'Gender', title: 'Grammatical gender', body: 'Experiments suggest that grammatical gender of nouns can slightly shift the attributes people associate with objects, though effects are small and contested.' },
          ],
        },
        { t: 'callout', tone: 'myth', title: 'The Eskimo snow words', text: 'The claim that “Eskimos have 100 words for snow” is a long-lived exaggeration. Inuit and Yupik languages build long words from roots, so counts depend on how you define a word. English also has snow, sleet, slush, blizzard and more. Geoffrey Pullum called it “the great Eskimo vocabulary hoax”. The real point is more modest: people elaborate vocabulary for what matters to them.' },
      ],
    },
    {
      id: 'sign',
      title: 'Signs and symbols',
      blocks: [
        {
          t: 'table',
          head: ['Type of sign (Peirce)', 'Relation to what it stands for', 'Example'],
          rows: [
            ['Icon', 'Resembles it', 'A photograph, a map, a toilet pictogram'],
            ['Index', 'Is physically or causally linked to it', 'Smoke (fire), a footprint, a pointing finger'],
            ['Symbol', 'Linked by convention or agreement', 'Words, a wedding ring, a flag'],
          ],
          caption: 'Charles Sanders Peirce’s classification. Most words are symbols: the link between the sound and the meaning is arbitrary (Saussure).',
        },
        {
          t: 'list',
          items: [
            '**Gesture** varies: the “thumbs up” or the “OK” sign is friendly in some places and rude in others. A head shake may mean “no” or “yes”.',
            '**Metaphor** (Lakoff and Johnson) structures thought: “time is money”, “argument is war”. Different cultures use different root metaphors.',
            '**Sign languages** are full languages with their own grammar, and show that language is not tied to speech. See the sign language shelf.',
            '**Naming practices**: personal names, kin terms and addresses carry social information about relationships.',
          ],
        },
        { t: 'links', items: [{ path: 'sign-language/start-here', note: 'Sign language' }, { path: 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', note: 'Politeness and etiquette' }, { path: 'grammar/start-here', note: 'Grammar' }] },
      ],
    },
  ],
  sources: [
    'Austin, J. L. (1962). How to Do Things with Words. Oxford University Press.',
    'Berlin, B., and Kay, P. (1969). Basic Color Terms. University of California Press.',
    'Winawer, J., et al. (2007). Russian blues reveal effects of language on color discrimination. PNAS.',
    'Levinson, S. C. (2003). Space in Language and Cognition. Cambridge University Press.',
    'Gordon, P. (2004). Numerical cognition without words: evidence from Amazonia. Science.',
    'Pullum, G. K. (1991). The Great Eskimo Vocabulary Hoax. University of Chicago Press.',
    'Lakoff, G., and Johnson, M. (1980). Metaphors We Live By. University of Chicago Press.',
  ],
  related: ['anthropology/meaning/ritual-and-religion', 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', 'sign-language/start-here'],
}

export default guide
