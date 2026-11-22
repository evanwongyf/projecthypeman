import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Anthropology asks what it means to be human, by comparing people across places and through time: how they raise children, share food, settle quarrels, honour the dead, and decide what is polite. Its characteristic method is to live among people and learn their world from the inside, then to compare what it finds with other worlds. That makes it unusually good at one task: showing that what feels natural and obvious in your own society is often a local convention. This shelf covers human behaviour broadly, including herd behaviour, conformity and conventions, along with kinship, exchange, power, ritual and belief, and life online.',
  nutshell: [
    'Anthropology studies **humans in all their variety**: our biology, our past, our languages and our cultures.',
    'Its habits of mind: **holism** (see the whole), **comparison**, **cultural relativism** (understand before judging) and **thick description** (what a behaviour means to those who do it).',
    'Much of human behaviour rests on **conventions**: shared expectations that are learnt, enforced by approval and disapproval, and sometimes arbitrary.',
    '**Herd behaviour** and **conformity** are powerful but not universal: they depend on information, incentives, identity and culture.',
    'The discipline has a **troubled history** (colonial links, racist theories) and has criticised itself. This shelf includes those critiques.',
  ],
  sections: [
    {
      id: 'route',
      title: 'A route through the shelf',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Foundations', body: 'What anthropology is, how fieldwork is done and why ethics matter, and the main theories of culture.' },
            { title: 'Human origins and nature', body: 'Evolution, the social brain, and why human cooperation and cumulative culture are so unusual.' },
            { title: 'Organising society', body: 'Kinship and marriage, exchange and gifts, power and hierarchy.' },
            { title: 'Meaning, belief and ritual', body: 'Ritual, religion and magic, and how language and symbols shape thought.' },
            { title: 'Conventions, conformity and the crowd', body: 'Norms, taboos and etiquette; conformity and obedience; herd behaviour; how customs spread and change.' },
            { title: 'Groups, identity and difference', body: 'In-groups and out-groups, cultural variation in values, and the anthropology of conflict and peacemaking.' },
            { title: 'Modern and digital life', body: 'Online communities, platforms, migration, cities and cultural change.' },
          ],
        },
        {
          t: 'links',
          items: [
            { path: 'anthropology/foundations/what-is-anthropology', note: 'Start here' },
            { path: 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', note: 'Norms and etiquette' },
            { path: 'anthropology/conventions-and-conformity/herd-behaviour', note: 'Herd behaviour, with a cascade lab' },
            { path: 'anthropology/groups-and-difference/cultural-variation-in-mind', note: 'WEIRD samples and cultural variation' },
          ],
        },
      ],
    },
    {
      id: 'habits',
      title: 'Habits of mind',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Defamiliarise', title: 'Make the familiar strange', body: 'Ask why you shake hands, queue, or wear shoes indoors. Seeing your own customs as one option among many is the first lesson.' },
            { tag: 'Relativism', title: 'Understand before judging', body: 'Methodological relativism means trying to understand a practice in its own context. It does not mean that all practices are equally good or that you give up your own values.' },
            { tag: 'Thick description', title: 'Meaning, not just behaviour', body: 'The same movement (an eyelid twitch or a wink) means different things. Anthropologists ask what the act means to the people involved.' },
            { tag: 'Comparison', title: 'Test the universal claim', body: 'Before saying “humans do X”, check how many societies were looked at. Many findings in psychology come from Western students.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Evidence and humility', text: 'Anthropology is full of famous claims that were later disputed: Margaret Mead’s Samoa, Napoleon Chagnon’s Yanomami, the “Eskimo words for snow”. The shelf flags where findings are contested, and prefers claims with several independent sources.' },
      ],
    },
  ],
  sources: [
    'Eriksen, T. H. (2015). Small Places, Large Issues: An Introduction to Social and Cultural Anthropology, 4th edition. Pluto Press.',
    'Kottak, C. P. (2017). Anthropology: Appreciating Human Diversity. McGraw-Hill.',
    'Geertz, C. (1973). The Interpretation of Cultures. Basic Books.',
    'Henrich, J. (2020). The WEIRDest People in the World. Farrar, Straus and Giroux.',
  ],
  related: ['anthropology/foundations/what-is-anthropology', 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', 'game-theory/society/norms-as-equilibria'],
}

export default guide
