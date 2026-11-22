import type { ArchiveNode } from '../topics'

// Anthropology: what humans do, think and believe, and why, across cultures and through
// time. Covers the four-field discipline, human evolution and cooperation, kinship and
// economies, power, ritual and belief, norms and etiquette, conformity and herd behaviour,
// group conflict, and modern and digital life. Presented with its history and critiques,
// including colonial roots and discredited stage theories.

export const ANTHROPOLOGY: ArchiveNode = {
  slug: 'anthropology',
  title: 'Anthropology: human behaviour & culture',
  blurb: 'What people do and believe, and why, across cultures and through time: evolution and cooperation, kinship, exchange, power, ritual, conventions and etiquette, conformity and herd behaviour, group conflict, and life online, with a herd-cascade lab.',
  glyph: '🌍',
  color: 'color-mix(in srgb, var(--mustard) 55%, var(--orange))',
  tags: ['anthropology', 'culture', 'human behaviour', 'herd behaviour', 'conformity', 'norms', 'ritual', 'kinship', 'ethnography', 'evolution', 'social psychology'],
  children: [
    { slug: 'start-here', title: 'Start here', blurb: 'What anthropology is, how to read the shelf, and a few habits of mind (cultural relativism, comparison, thick description) that make everything else clearer.', minutes: 7, glyph: '★', tags: ['beginner', 'overview', 'roadmap'] },
    {
      slug: 'foundations',
      title: 'Foundations',
      group: 'The discipline',
      blurb: 'The four fields, the culture concept, how anthropologists work, and the discipline’s history and ethics.',
      glyph: '🧭',
      tags: ['four fields', 'culture', 'ethnography', 'fieldwork', 'relativism', 'history'],
      children: [
        { slug: 'what-is-anthropology', title: 'What anthropology is', blurb: 'Biological, cultural, archaeological and linguistic anthropology; holism, comparison, the culture concept and its critics.', minutes: 12, tags: ['four fields', 'holism', 'culture concept', 'comparison', 'emic etic'] },
        { slug: 'methods-and-ethics', title: 'Fieldwork, ethnography and ethics', blurb: 'Participant observation, thick description, interviews and surveys, reflexivity, informed consent and the lessons of colonial anthropology.', minutes: 12, tags: ['fieldwork', 'ethnography', 'participant observation', 'thick description', 'ethics', 'colonialism'] },
        { slug: 'theories-of-culture', title: 'Big theories: from evolutionism to interpretation', blurb: 'Evolutionism, Boas and cultural relativism, functionalism, structuralism, interpretive anthropology, materialism and practice theory, and what each got right and wrong.', minutes: 13, tags: ['boas', 'malinowski', 'levi-strauss', 'geertz', 'functionalism', 'structuralism', 'theory'] },
      ],
    },
    {
      slug: 'origins',
      title: 'Human origins and nature',
      blurb: 'What evolution made us: bodies, brains, language, cooperation, cumulative culture and the limits of “human nature”.',
      glyph: '🦴',
      tags: ['human evolution', 'cooperation', 'cumulative culture', 'dunbar', 'gene-culture', 'hunter-gatherers'],
      children: [
        { slug: 'human-evolution-and-behaviour', title: 'Human evolution and behaviour', blurb: 'From the last common ancestor to Homo sapiens, the social brain, hunter-gatherer life, sex and parenting, and what evolutionary explanations can and cannot show.', minutes: 13, tags: ['human evolution', 'hunter-gatherer', 'social brain', 'dunbar', 'life history'] },
        { slug: 'cooperation-and-cumulative-culture', title: 'Cooperation and cumulative culture', blurb: 'Why humans cooperate beyond kin, social learning, cumulative culture, gene-culture coevolution and the cultural niche.', minutes: 12, tags: ['cooperation', 'cumulative culture', 'social learning', 'gene-culture', 'henrich', 'reciprocity'] },
      ],
    },
    {
      slug: 'society',
      title: 'Organising society',
      group: 'How societies work',
      blurb: 'Kinship and family, economies and exchange, and power, status and hierarchy.',
      glyph: '👪',
      tags: ['kinship', 'marriage', 'exchange', 'gift', 'reciprocity', 'status', 'egalitarian', 'hierarchy'],
      children: [
        { slug: 'kinship-family-and-marriage', title: 'Kinship, family and marriage', blurb: 'Descent, kin terms, marriage systems, households and care, and how kinship organises obligation across the world.', minutes: 12, tags: ['kinship', 'descent', 'marriage', 'household', 'lineage', 'incest taboo'] },
        { slug: 'economies-and-exchange', title: 'Economies, gifts and exchange', blurb: 'Reciprocity, redistribution and markets (Polanyi), Mauss and the gift, Sahlins on the original affluent society, money and morality.', minutes: 13, tags: ['gift', 'reciprocity', 'polanyi', 'mauss', 'sahlins', 'market', 'money'] },
        { slug: 'power-status-and-hierarchy', title: 'Power, status and hierarchy', blurb: 'Egalitarian and ranked societies, reverse dominance, prestige and dominance, big men and chiefs, states, inequality and legitimacy.', minutes: 13, tags: ['power', 'status', 'egalitarian', 'big man', 'chiefdom', 'state', 'inequality', 'boehm'] },
      ],
    },
    {
      slug: 'meaning',
      title: 'Meaning, belief and ritual',
      blurb: 'Ritual and rites of passage, religion and magic, myth, symbols, language and thought.',
      glyph: '🕯',
      tags: ['ritual', 'religion', 'myth', 'rites of passage', 'symbols', 'language', 'sapir-whorf', 'taboo'],
      children: [
        { slug: 'ritual-and-religion', title: 'Ritual, religion and magic', blurb: 'What rituals do, Durkheim’s collective effervescence, van Gennep and Turner on rites of passage, myth, magic and witchcraft, and why belief is not the whole story.', minutes: 14, tags: ['ritual', 'durkheim', 'van gennep', 'turner', 'liminality', 'myth', 'magic', 'religion'] },
        { slug: 'language-thought-and-symbol', title: 'Language, thought and symbols', blurb: 'How language shapes social life, the Sapir-Whorf debate, colour and kinship terms, metaphor, gesture, and signs and symbols.', minutes: 11, tags: ['language', 'sapir-whorf', 'metaphor', 'symbol', 'gesture', 'linguistic relativity'] },
      ],
    },
    {
      slug: 'conventions-and-conformity',
      title: 'Conventions, conformity and the crowd',
      group: 'Human behaviour',
      blurb: 'Norms and taboos, etiquette and face, social proof, conformity experiments, herd behaviour, fashion and bubbles, with the herd-cascade lab.',
      glyph: '🐑',
      color: 'color-mix(in srgb, var(--pink) 40%, var(--mustard))',
      tags: ['norms', 'taboo', 'etiquette', 'face', 'conformity', 'asch', 'herd behaviour', 'social proof', 'fashion', 'bubbles', 'crowds'],
      children: [
        { slug: 'norms-taboos-and-etiquette', title: 'Norms, taboos and etiquette', blurb: 'What norms are, how they are learned and enforced, taboo and pollution, politeness and face, Goffman’s interaction order, gift-giving and manners across cultures.', minutes: 14, tags: ['norms', 'taboo', 'etiquette', 'politeness', 'face', 'goffman', 'manners', 'douglas'] },
        { slug: 'conformity-and-obedience', title: 'Conformity, obedience and social proof', blurb: 'Sherif, Asch, Milgram and Zimbardo (and the criticisms), Cialdini’s social proof, why we conform and when we do not.', minutes: 14, tags: ['conformity', 'asch', 'milgram', 'zimbardo', 'social proof', 'cialdini', 'obedience'] },
        { slug: 'herd-behaviour', title: 'Herd behaviour: cascades, crowds, fashion and bubbles', blurb: 'Information cascades, bank runs, financial bubbles, fashion and fads, panics, wisdom and madness of crowds, with the cascade lab.', minutes: 14, tags: ['herd behaviour', 'information cascade', 'bubble', 'bank run', 'fashion', 'fads', 'crowd', 'panic', 'wisdom of crowds'] },
        { slug: 'cultural-transmission', title: 'How conventions spread and change', blurb: 'Social learning biases (copy the majority, the successful, kin), memes and their limits, cultural evolution, diffusion of innovations and why customs persist or vanish.', minutes: 12, tags: ['cultural evolution', 'social learning', 'diffusion', 'memes', 'innovation', 'tradition'] },
      ],
    },
    {
      slug: 'groups-and-difference',
      title: 'Groups, identity and difference',
      blurb: 'How people sort into us and them, how cultures differ in values and selfhood, and how conflicts form and settle.',
      glyph: '🤝',
      tags: ['identity', 'in-group', 'ethnicity', 'nationalism', 'individualism', 'collectivism', 'weird', 'conflict'],
      children: [
        { slug: 'identity-and-in-groups', title: 'Identity, in-groups and out-groups', blurb: 'Minimal groups, Robbers Cave, ethnicity as a social boundary, nationalism, scapegoating and how contact and superordinate goals reduce prejudice.', minutes: 13, tags: ['identity', 'in-group', 'tajfel', 'robbers cave', 'ethnicity', 'prejudice', 'contact hypothesis'] },
        { slug: 'cultural-variation-in-mind', title: 'Cultural variation in values and selfhood', blurb: 'WEIRD samples, individualism and collectivism, honour, dignity and face cultures, tight and loose cultures, and the pitfalls of national stereotypes.', minutes: 13, tags: ['weird', 'individualism', 'collectivism', 'honour culture', 'face', 'tight loose', 'hofstede', 'stereotypes'] },
        { slug: 'conflict-and-peacemaking', title: 'Conflict, violence and peacemaking', blurb: 'What anthropology says about feuds, war and violence, restraint and reconciliation, mediation and customary law, and why “human nature” is a poor guide.', minutes: 12, tags: ['conflict', 'feud', 'war', 'peacemaking', 'mediation', 'reconciliation', 'customary law'] },
      ],
    },
    {
      slug: 'modern-life',
      title: 'Modern and digital life',
      group: 'Now',
      blurb: 'Anthropology of cities, work, technology and online communities, globalisation and change.',
      glyph: '📱',
      tags: ['digital anthropology', 'online communities', 'globalisation', 'urban', 'work', 'technology', 'consumption'],
      children: [
        { slug: 'online-communities-and-technology', title: 'Online communities, platforms and technology', blurb: 'Norms and tribes online, memes, attention economies, virtual worlds, how platforms shape behaviour, and anthropology of everyday tech.', minutes: 12, tags: ['online', 'platforms', 'digital', 'memes', 'attention', 'social media', 'communities'] },
        { slug: 'globalisation-and-change', title: 'Globalisation, cities and cultural change', blurb: 'Migration, urban life, consumption, hybridity, heritage and tradition, development, and how cultures change without disappearing.', minutes: 11, tags: ['globalisation', 'migration', 'urban', 'hybridity', 'heritage', 'development', 'cultural change'] },
      ],
    },
  ],
}
