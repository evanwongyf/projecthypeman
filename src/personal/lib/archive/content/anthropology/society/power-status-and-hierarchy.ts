import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every human group has to decide who has a say. Some societies are fiercely egalitarian: they police anyone who tries to boss others. Others have chiefs, nobles, castes or states, with inequalities that are justified by tradition or religion. Anthropology looks at how status is won and kept, how power is exercised and resisted, and why human societies show such a range, from nearly egalitarian foragers to ranked societies and states. This guide covers egalitarianism and levelling, big men and chiefs, prestige and dominance, and the question of legitimacy.',
  nutshell: [
    'Many **hunter-gatherer** societies are **egalitarian** by design: groups actively **level** would-be dominators (Boehm’s **reverse dominance hierarchy**).',
    'Anthropologists once classed societies as **bands, tribes, chiefdoms and states** (Service). The typology is useful as a rough guide but oversimplifies.',
    '**Big men** (Melanesia) win status by generosity and persuasion; **chiefs** (Polynesia) often inherit rank.',
    'Humans gain status in two ways: **dominance** (force and intimidation) and **prestige** (respect for skill and knowledge, freely given).',
    '**Legitimacy** (Weber): power lasts when people accept it as rightful, whether through tradition, charisma or law.',
  ],
  sections: [
    {
      id: 'egal',
      title: 'Egalitarian societies and levelling',
      blocks: [
        { t: 'p', text: 'Christopher Boehm (1999) argued that the egalitarianism of mobile foragers is not an absence of ambition. Individuals try to dominate, as in other primates; the group, however, forms coalitions to stop them. He called this a reverse dominance hierarchy: the many dominate the would-be dominant few. Techniques include teasing, ridicule, ostracism, and, as a last resort, expulsion or killing.' },
        {
          t: 'example',
          title: 'Insulting the meat (Richard Lee among the Ju/’hoansi)',
          lines: [
            { label: 'Scene', text: 'A hunter returns with a large animal. Custom requires him to be modest and to say he has brought only something small and thin.' },
            { label: 'Response', text: 'The others jokingly insult the meat and the hunter’s skill: “you have dragged us here for this bag of bones”.' },
            { label: 'Purpose', text: 'As Lee’s informant explained, it is to “cool his heart”, to prevent pride that could lead to arrogance and killing.' },
            { label: 'Lesson', text: 'Humour is a levelling device that keeps status differences small.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Tools', title: 'Ridicule, gossip, ostracism', body: 'Mild sanctions usually suffice. Their effectiveness depends on a small group where everyone depends on everyone else.' },
            { tag: 'Sharing norms', title: 'Prevent accumulation', body: 'Strong norms of sharing make it hard for anyone to build wealth or power.' },
            { tag: 'Mobility', title: 'Voting with your feet', body: 'If someone becomes overbearing, others can leave to join another band.' },
            { tag: 'Limits', title: 'Not perfectly equal', body: 'Age, sex and skill still give differences in influence. Egalitarian means no formal rulers and strong resistance to domination.' },
          ],
        },
      ],
    },
    {
      id: 'ranks',
      title: 'Big men, chiefs and states',
      blocks: [
        {
          t: 'table',
          head: ['Type (Service, 1962)', 'Features', 'Comments'],
          rows: [
            ['Band', 'Small, mobile, egalitarian; leadership by respected individuals', 'Typical of foragers'],
            ['Tribe', 'Kin-based, larger; leaders with limited authority; often farmers or herders', 'Big men in Melanesia gain followers by generosity and oratory but cannot command'],
            ['Chiefdom', 'Ranked kin groups; a chief with hereditary status; redistribution through the chief', 'Many Polynesian societies; some chiefs held real power'],
            ['State', 'Centralised government, specialised offices, taxation, laws and a monopoly on legitimate force', 'Emerged independently in several regions (Mesopotamia, Egypt, China, Mesoamerica, Andes)'],
          ],
          caption: 'The typology is a simplification. Many societies fit poorly, change over time, and move between forms.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Big man', title: 'Status by generosity', body: 'Sahlins (1963) described Melanesian big men who build followings by organising feasts and exchanges and must constantly give to keep support. Power is personal and fragile.' },
            { tag: 'Chief', title: 'Rank by birth', body: 'Polynesian chiefs often inherited rank and sacred authority, with elaborate rules of deference (tapu).' },
            { tag: 'State', title: 'Specialised power', body: 'States concentrate force and administration. They bring order and public goods, and also taxation, conscription and inequality.' },
            { tag: 'Inequality', title: 'Why does it grow?', body: 'Storable surpluses, defensible resources, warfare, and inheritance of wealth create conditions for hierarchy. Theories differ, and evidence suggests it was not a one-way path.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Not an upward ladder', text: 'Evidence from archaeology and anthropology shows that societies have moved in both directions: some seasonal groups changed between egalitarian and hierarchical arrangements through the year, and early cities sometimes lacked obvious rulers. David Graeber and David Wengrow (The Dawn of Everything, 2021) argued this at length, and their claims are debated.' },
      ],
    },
    {
      id: 'status',
      title: 'Dominance and prestige',
      blocks: [
        { t: 'p', text: 'Joseph Henrich and Francisco Gil-White (2001) distinguished two routes to status. **Dominance** relies on intimidation and force, and others defer from fear. **Prestige** is freely conferred respect for skill, knowledge or success, and followers copy and defer because they want to learn. Prestige is a product of cultural learning: it makes sense to attend to and imitate skilled individuals.' },
        {
          t: 'table',
          head: ['', 'Dominance', 'Prestige'],
          rows: [
            ['Basis', 'Fear, coercion', 'Admiration, skill'],
            ['Followers', 'Defer, avoid, resent', 'Approach, imitate, seek advice'],
            ['Signals', 'Aggression, size, intimidation', 'Competence, generosity, humility'],
            ['Examples', 'A bullying boss', 'A respected master craftsperson or elder'],
            ['Stability', 'Fragile if the dominated can unite', 'More stable, based on consent'],
          ],
        },
      ],
    },
    {
      id: 'legit',
      title: 'Legitimacy and resistance',
      blocks: [
        { t: 'p', text: 'Max Weber distinguished three sources of legitimate authority: traditional (“it has always been so”), charismatic (extraordinary personal qualities) and legal-rational (rules and offices). Power based on legitimacy is cheaper to maintain than power based on force. James C. Scott studied how subordinate groups resist without open revolt, through foot-dragging, gossip, evasion and “hidden transcripts” spoken only among themselves, which shows that obedience is often partial.' },
        {
          t: 'dodont',
          do: ['Ask who benefits from an arrangement and how it is justified.', 'Look for how people resist in small ways.', 'Compare how different societies handle the same problems of leadership.'],
          dont: ['Treat hierarchy as either inevitable or unnatural.', 'Treat egalitarian societies as perfect.', 'Equate “simple” technology with simple politics.'],
        },
        { t: 'links', items: [{ path: 'game-theory/society/institutions-and-the-state', note: 'Institutions and the state' }, { path: 'anthropology/origins/human-evolution-and-behaviour', note: 'Forager life' }, { path: 'game-theory/society/trust-reputation-and-punishment', note: 'Punishment and cooperation' }] },
      ],
    },
  ],
  sources: [
    'Boehm, C. (1999). Hierarchy in the Forest. Harvard University Press.',
    'Service, E. R. (1962). Primitive Social Organization. Random House.',
    'Sahlins, M. (1963). Poor man, rich man, big-man, chief. Comparative Studies in Society and History.',
    'Henrich, J., and Gil-White, F. J. (2001). The evolution of prestige. Evolution and Human Behavior.',
    'Scott, J. C. (1990). Domination and the Arts of Resistance. Yale University Press.',
    'Lee, R. B. (1979). The !Kung San. Cambridge University Press.',
    'Graeber, D., and Wengrow, D. (2021). The Dawn of Everything. Farrar, Straus and Giroux.',
  ],
  related: ['anthropology/society/economies-and-exchange', 'game-theory/society/institutions-and-the-state', 'anthropology/origins/human-evolution-and-behaviour'],
}

export default guide
