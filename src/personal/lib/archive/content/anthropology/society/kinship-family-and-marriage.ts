import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In most societies, through most of history, kinship has been the main way of organising life: who you live with, who you can marry, who inherits, who owes you help and whom you owe. Anthropologists study kinship because it varies so widely, from systems that trace descent through the mother’s line to those that treat a household as the main unit, and because it reveals how societies think about relationships. This guide covers descent, kin terms, marriage and household, and the main critiques of the classical approach.',
  nutshell: [
    '**Descent** can be traced through the father (**patrilineal**), the mother (**matrilineal**), both (**bilateral** or cognatic), or in other ways.',
    '**Kin terms** classify relatives differently: some languages use one word for father and father’s brother, others distinguish them.',
    'Marriage is almost always **regulated**: rules of who may or may not marry (**exogamy**, **endogamy**), and exchanges such as **bridewealth** or **dowry**.',
    'Most societies permit **polygyny**, but most marriages in them are **monogamous**. **Polyandry** is rare.',
    'Classical kinship theory assumed biology as the base. Later critics (**Schneider**) argued that kinship is a **cultural** idea, which has expanded to include adoption, friendship and new family forms.',
  ],
  sections: [
    {
      id: 'descent',
      title: 'Descent and kin groups',
      blocks: [
        {
          t: 'table',
          head: ['System', 'How descent is traced', 'Examples and notes'],
          rows: [
            ['Patrilineal', 'Through fathers to children of both sexes', 'Many societies in Africa, South and East Asia; a lineage forms with a common male ancestor'],
            ['Matrilineal', 'Through mothers to children of both sexes', 'Minangkabau (Indonesia), Akan (Ghana), Navajo; property and group membership pass through women; men often have power as the mother’s brother'],
            ['Bilateral (cognatic)', 'Through both parents; everyone has a network of relatives', 'Much of Europe and North America; Southeast Asia in many regions'],
            ['Double descent', 'Some things through the father, others through the mother', 'Some African societies, such as the Yakö'],
          ],
          caption: 'Matrilineal does not mean matriarchal: in most matrilineal societies, men still hold much of the formal authority.',
        },
        { t: 'p', text: 'A **lineage** is a group tracing descent from a known ancestor; a **clan** traces descent from a more distant, often mythical, ancestor. Lineages can own land, regulate marriage, and mobilise support in disputes. In societies without states, they can be the main framework of order.' },
      ],
    },
    {
      id: 'terms',
      title: 'Kin terms',
      blocks: [
        { t: 'p', text: 'Lewis Henry Morgan (1871) noticed that kin terms differ strikingly: some societies call all father’s brothers “father”; others use separate words. Later anthropologists classed systems by which relatives are lumped together or separated. The names come from example societies.' },
        {
          t: 'table',
          head: ['System', 'Feature', 'Example'],
          rows: [
            ['Eskimo (Inuit) / lineal', 'Separates parents and siblings from aunts, uncles and cousins; common in the modern West', 'English: “uncle” and “cousin” cover many relatives'],
            ['Hawaiian / generational', 'Uses the same term for all relatives of a generation', 'All people of my parents’ generation are “mother” or “father”'],
            ['Iroquois', 'Merges father and father’s brother, but separates mother’s brother; distinguishes parallel from cross cousins', 'Cross cousins are marriageable, parallel cousins like siblings'],
            ['Sudanese / descriptive', 'Gives a different term to nearly every relative', 'Arabic has separate terms for father’s brother and mother’s brother'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Why terms matter', text: 'Kin terms often signal behaviour: obligations, respect, joking relations and marriage rules. Calling someone “mother” can mean they have a mother’s duties and authority.' },
      ],
    },
    {
      id: 'marriage',
      title: 'Marriage, exchange and household',
      blocks: [
        {
          t: 'table',
          head: ['Topic', 'Patterns'],
          rows: [
            ['Whom you may marry', 'Exogamy (marry outside your group, such as the clan) and endogamy (marry within it, such as caste or ethnic group). Rules against close kin marriage (the incest taboo) are nearly universal, though what counts as “close” differs'],
            ['Marital payments', 'Bridewealth (the groom’s family gives goods to the bride’s family), dowry (the bride’s family gives goods or money to the couple or groom), or brideservice (the groom works for the bride’s family)'],
            ['Number of spouses', 'Monogamy; polygyny (more than one wife), found in a majority of societies in cross-cultural samples but with most marriages monogamous because few men can afford several wives; polyandry (more than one husband), rare, such as fraternal polyandry in parts of Tibet and Nepal'],
            ['Residence after marriage', 'Patrilocal (with the husband’s family), matrilocal (wife’s), neolocal (a new home), and others'],
            ['Household and family form', 'Nuclear families, extended families, joint families, single-parent households, and many arrangements such as grandparents raising children'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Incest taboo', title: 'Why the near-universal rule?', body: 'Explanations include inbreeding avoidance and the Westermarck effect (people raised together lose sexual interest in each other), and Lévi-Strauss’s alliance theory: banning marriage within the group forces exchange between groups, building alliances.' },
            { tag: 'Alliance', title: 'Marriage connects groups', body: 'In many societies marriage is less about two individuals than about two families, with exchanges of goods and obligations.' },
            { tag: 'Care', title: 'Kinship as care', body: 'Kinship organises who looks after children, the sick and the old. In societies with weak states, it is the social safety net.' },
            { tag: 'Change', title: 'Families change', body: 'Industrialisation, migration, education, and new laws have changed family forms everywhere. Cohabitation, later marriage, fewer children and same-sex marriage are examples.' },
          ],
        },
      ],
    },
    {
      id: 'critique',
      title: 'Is kinship biology?',
      blocks: [
        { t: 'p', text: 'Classical kinship studies assumed that kinship is built on biological reproduction: “genealogical” relations of blood and marriage. David Schneider (1972, 1984) argued that this assumption comes from the anthropologist’s own culture, and that many societies define kinship through living together, feeding, and shared substance, not through genealogy. Later work on “relatedness” covers adoption, fostering, milk kinship, godparenthood, and chosen families.' },
        {
          t: 'list',
          items: [
            '**Milk kinship** in some Muslim societies: those who were breastfed by the same woman count as kin for some purposes, such as marriage prohibitions.',
            '**Fictive kin**: godparents, “aunties” and “uncles” who are not relatives but are treated as such.',
            '**Adoption** is widespread and has been important to inheritance and alliance: in Japan, adult adoption has long been used to continue family businesses.',
            '**Assisted reproduction** and new families raise fresh questions about what makes a parent.',
          ],
        },
        { t: 'links', items: [{ path: 'anthropology/society/economies-and-exchange', note: 'Exchange and obligation' }, { path: 'game-theory/dynamics/evolutionary-game-theory', note: 'Kin selection and Hamilton’s rule' }] },
      ],
    },
  ],
  sources: [
    'Morgan, L. H. (1871). Systems of Consanguinity and Affinity of the Human Family. Smithsonian.',
    'Lévi-Strauss, C. (1969). The Elementary Structures of Kinship. Beacon Press.',
    'Schneider, D. M. (1984). A Critique of the Study of Kinship. University of Michigan Press.',
    'Carsten, J. (2004). After Kinship. Cambridge University Press.',
    'Murdock, G. P. (1967). Ethnographic Atlas (data on marriage and descent).',
    'Fox, R. (1967). Kinship and Marriage. Penguin.',
  ],
  related: ['anthropology/society/economies-and-exchange', 'anthropology/society/power-status-and-hierarchy', 'game-theory/dynamics/evolutionary-game-theory'],
}

export default guide
