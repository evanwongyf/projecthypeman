import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Economics textbooks often start with markets and treat everything else as primitive. Anthropology starts from the opposite observation: for most of human history, and in much of life today, economic activity is woven into relationships. People give gifts that create obligations, share food because sharing is what kin do, and exchange for prestige as well as profit. This guide covers the main modes of exchange (reciprocity, redistribution, markets), Mauss’s theory of the gift, famous examples such as the kula ring and the potlatch, and how money and morality interact.',
  nutshell: [
    'Karl **Polanyi** distinguished three modes of integration: **reciprocity**, **redistribution** and **market exchange**. Most societies use all three.',
    'Marcel **Mauss** (The Gift, 1925) showed that gifts are not free: they create a cycle of **giving, receiving and returning** that binds people.',
    'Marshall **Sahlins** classed reciprocity as **generalised** (no accounting), **balanced** (equal return) and **negative** (getting something for nothing).',
    'Exchange can be about **prestige and relationships** as much as goods: the **kula** and the **potlatch**.',
    'Markets are **embedded** in social relations (trust, law, norms) everywhere; “pure markets” are rare.',
  ],
  sections: [
    {
      id: 'modes',
      title: 'Three modes of exchange',
      blocks: [
        {
          t: 'table',
          head: ['Mode', 'How it works', 'Examples'],
          rows: [
            ['Reciprocity', 'Mutual giving between people in lasting relationships, according to custom', 'Gift exchange; helping neighbours with a harvest; reciprocal hospitality'],
            ['Redistribution', 'Goods flow to a centre (a chief, a temple, a state) and are shared out', 'A chief’s feast; taxes and public services; the Inca storehouses'],
            ['Market exchange', 'Goods traded at prices set by supply and demand, between parties who need no relationship', 'Modern retail markets; stock exchanges; weekly village markets'],
          ],
          caption: 'Karl Polanyi, The Great Transformation (1944). Modern economies mix all three: families share, the state redistributes, firms trade.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Generalised', title: 'Give without keeping score', body: 'A parent feeding a child; sharing within a household. No expectation of equal return.' },
            { tag: 'Balanced', title: 'Return in kind, in time', body: 'Exchange of gifts of similar value at weddings, with an expectation that it will be reciprocated.' },
            { tag: 'Negative', title: 'Try to get ahead', body: 'Bargaining, theft, haggling: each side tries to gain at the other’s expense.' },
            { tag: 'Social distance', title: 'Closer means looser accounting', body: 'Sahlins argued that the closer the relationship, the more generalised the reciprocity; the more distant, the more negative.' },
          ],
        },
      ],
    },
    {
      id: 'gift',
      title: 'The gift',
      blocks: [
        { t: 'p', text: 'Marcel Mauss (1925) asked: why does a gift have to be returned? In many societies, he argued, a gift is not a free transfer of a thing. It carries something of the giver, and creates three obligations: to give, to receive and to reciprocate. Refusing a gift is an insult; failing to return it is shameful. Through such exchanges, groups make alliances and rank themselves.' },
        {
          t: 'table',
          head: ['Case', 'What happens', 'Why it matters'],
          rows: [
            ['The kula ring (Trobriand Islands and nearby)', 'Men travel by canoe to exchange red shell necklaces (soulava) clockwise and white armshells (mwali) counter-clockwise among islands. Valuables are never kept long. Ordinary trade goods are traded alongside', 'Malinowski showed that the exchange created trust and partnerships, with prestige for those with famous valuables, rather than being just barter'],
            ['The potlatch (Indigenous peoples of the Pacific Northwest coast)', 'Hosts hold feasts at which they give away or destroy wealth to establish rank, mark events and validate claims', 'Prestige by giving, not accumulating. Canada banned the potlatch under the Indian Act from 1885 to 1951, an example of colonial suppression of a core institution'],
            ['Christmas, weddings and birthdays', 'Gifts are expected and reciprocated, and their value is judged', 'Gift exchange continues to create and signal relationships'],
            ['Red envelopes (ang pow) at Chinese New Year', 'Money given in red packets, with expectations about amounts according to relationship and rank', 'A modern example of balanced reciprocity and the social meaning of money'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'A “pure gift”?', text: 'Jacques Derrida and others asked whether a gift with no return, even gratitude, can exist. Anthropologists suggest that expecting return does not make giving cynical: it makes giving a way of creating relationships.' },
      ],
    },
    {
      id: 'affluent',
      title: 'Scarcity, affluence and the economy of foragers',
      blocks: [
        { t: 'p', text: 'Marshall Sahlins (1966) proposed that hunter-gatherers were “the original affluent society”: because their wants were few and easily met, they enjoyed a lot of leisure. Studies of the Ju/’hoansi suggested that adults worked about 15 to 20 hours a week in food-getting. Critics note that the sample was small, that “work” was defined narrowly, and that foragers can also face hunger. The lasting insight is that scarcity is not a natural fact: it depends on how wants and sharing are organised.' },
        {
          t: 'list',
          items: [
            '**Demand sharing** among many foragers: people ask for what they need, and it is hard to refuse. It spreads risk and prevents accumulation.',
            '**Storage and surplus** change the picture: where food can be stored and defended, inequality can grow.',
            '**Markets in the village**: peasant markets are often social events as much as places of trade, with haggling, credit and personal ties.',
            '**Informal economies** (street vendors, remittances, rotating credit associations) make up a large part of work in many countries.',
          ],
        },
      ],
    },
    {
      id: 'money',
      title: 'Money, markets and morality',
      blocks: [
        { t: 'p', text: 'Money is not just a neutral tool. Anthropologists have studied how people sort money into moral categories: money for ritual, for everyday needs, for savings, and how mixing them can be offensive (a bride’s family refusing to “sell” a daughter, or workers refusing to be treated as a commodity). Economists such as Viviana Zelizer have shown that people “earmark” money by social meaning. David Graeber (Debt, 2011) argued that debt and moral obligation predate coins and markets, and that “baseline communism” (sharing according to need) underlies everyday life. His thesis is influential and contested.' },
        {
          t: 'dodont',
          do: ['Notice how relationships shape economic behaviour: trust, favours, gift obligations.', 'Ask what exchange means to people, not only what it moves.', 'Remember that markets rely on norms, law and trust to function.'],
          dont: ['Assume “economic” means “selfish” or “modern”.', 'Treat gift economies as primitive: they continue within modern societies.', 'Assume one mode of exchange is natural.'],
        },
        { t: 'links', items: [{ path: 'game-theory/dynamics/repeated-games', note: 'Reciprocity as repeated play' }, { path: 'game-theory/society/social-dilemmas-and-the-commons', note: 'Commons and shared resources' }, { path: 'finance/start-here', note: 'Modern finance' }] },
      ],
    },
  ],
  sources: [
    'Mauss, M. (1925/1990). The Gift. Routledge.',
    'Polanyi, K. (1944). The Great Transformation. Farrar and Rinehart.',
    'Malinowski, B. (1922). Argonauts of the Western Pacific. Routledge.',
    'Sahlins, M. (1972). Stone Age Economics. Aldine.',
    'Graeber, D. (2011). Debt: The First 5,000 Years. Melville House.',
    'Zelizer, V. (1994). The Social Meaning of Money. Basic Books.',
  ],
  related: ['anthropology/society/kinship-family-and-marriage', 'anthropology/society/power-status-and-hierarchy', 'game-theory/dynamics/repeated-games'],
}

export default guide
