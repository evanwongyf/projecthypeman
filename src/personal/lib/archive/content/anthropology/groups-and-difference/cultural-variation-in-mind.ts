import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Much of what psychology claims about “human nature” comes from experiments on university students in a few rich Western countries. In 2010 Joseph Henrich and colleagues called these participants WEIRD: Western, Educated, Industrialised, Rich and Democratic, and showed that on many measures, from visual illusions to fairness, they are unusual. Cross-cultural work finds real differences in how people think of themselves, honour, face and rules. But national averages hide enormous variation and can feed stereotypes. This guide covers the main frameworks and their limits.',
  nutshell: [
    '**WEIRD** samples are unrepresentative: findings from them should not be assumed to hold for all humans.',
    '**Independent vs interdependent selves** (Markus and Kitayama): some cultures emphasise the autonomous individual, others the self in relationships.',
    '**Honour, dignity and face** cultures differ in what protects reputation and when insults provoke a response.',
    '**Tight and loose** cultures differ in how strictly norms are enforced, linked to threat and history (Gelfand).',
    'Averages describe groups, not individuals, and **variation within a country** is usually larger than between countries.',
  ],
  sections: [
    {
      id: 'weird',
      title: 'The WEIRD problem',
      blocks: [
        { t: 'p', text: 'Henrich, Heine and Norenzayan (2010) reviewed studies in behavioural science and found that most participants come from Western, Educated, Industrialised, Rich, Democratic societies, which make up about 12 per cent of the world population. On many tasks, WEIRD people are at the extreme of the global distribution.' },
        {
          t: 'table',
          head: ['Domain', 'WEIRD finding versus elsewhere'],
          rows: [
            ['Visual illusions (Müller-Lyer)', 'Susceptibility varies across societies: people in some small-scale societies are much less fooled by the illusion (Segall and colleagues, 1966), perhaps due to differences in the visual environment (such as “carpentered” corners)'],
            ['Fairness and cooperation', 'In economic games, offers and rejections differ widely across societies (see the ultimatum game)'],
            ['Self-concept', 'Describing oneself by personal traits is more common in WEIRD samples; describing oneself by roles and relationships is more common elsewhere'],
            ['Analytic and holistic thinking', 'East Asian participants on average attend more to context and relationships, while Westerners attend more to focal objects (Nisbett)'],
            ['Moral reasoning', 'Concerns about purity, loyalty and authority are weighted differently across cultures and political groups (Haidt’s moral foundations; debated)'],
          ],
          caption: 'Many of these differences are averages with large overlap and some are contested or replicate weakly.',
        },
        { t: 'callout', tone: 'note', title: 'Why it matters', text: 'A theory of “human” cognition built on psychology students may be a theory of WEIRD people. The remedy is more diverse samples and cross-cultural replication, and caution about universal claims.' },
      ],
    },
    {
      id: 'self',
      title: 'Individualism, collectivism and the self',
      blocks: [
        {
          t: 'table',
          head: ['Framework', 'Idea', 'Caveat'],
          rows: [
            ['Individualism and collectivism (Hofstede; Triandis)', 'In individualist cultures, people are expected to look after themselves and their immediate family; in collectivist cultures, people belong to strong groups', 'Hofstede’s survey was done in one company (IBM). Dimensions are coarse and can reinforce stereotypes'],
            ['Independent and interdependent selves (Markus and Kitayama, 1991)', 'The self can be seen as a bounded individual, or as defined by relationships and roles', 'A spectrum, not a binary. Both selves exist everywhere'],
            ['High-context and low-context communication (Hall)', 'In high-context cultures, meaning relies on shared understanding and implication; in low-context, it is spoken explicitly', 'Useful in teaching, but oversimplified'],
            ['Power distance (Hofstede)', 'Acceptance of unequal distribution of power', 'Varies by organisation and setting'],
          ],
        },
        {
          t: 'dodont',
          do: ['Treat such dimensions as tendencies to be checked.', 'Expect variation by region, class, age and individual.', 'Ask, listen and adapt.'],
          dont: ['Predict an individual from a national score.', 'Use a model as a stereotype.', 'Ignore that cultures change fast, and that people live in several cultures at once.'],
        },
      ],
    },
    {
      id: 'honour',
      title: 'Honour, dignity and face',
      blocks: [
        {
          t: 'table',
          head: ['Culture type', 'Where reputation comes from', 'Response to insult'],
          rows: [
            ['Honour', 'Others’ view of your strength and willingness to defend yourself', 'Respond firmly; weakness invites exploitation'],
            ['Dignity', 'Inner worth that others cannot take away', 'Insults can be ignored; appeal to law'],
            ['Face', 'Social standing based on being treated with respect and fulfilling roles', 'Avoid public embarrassment; save face for oneself and others'],
          ],
          caption: 'Leung and Cohen (2011) distinguished these three systems. They are broad types, and many societies mix them.',
        },
        { t: 'p', text: 'Richard Nisbett and Dov Cohen (1996) proposed that a culture of honour in the southern United States grew out of herding economies, where livestock can be stolen and there is little state protection, so a reputation for toughness protects. In an experiment, white male students from the South insulted by a confederate showed greater rises in stress hormone (cortisol) and testosterone, and behaved more aggressively afterward, than those from the North. The ideas have been tested and discussed widely, with mixed support.' },
      ],
    },
    {
      id: 'tight',
      title: 'Tight and loose cultures',
      blocks: [
        { t: 'p', text: 'Michele Gelfand and colleagues (2011) compared 33 nations on how strongly norms are enforced and how much deviance is tolerated. Tight cultures have strong norms and little tolerance for deviation; loose ones have weaker norms and more tolerance. They found that tight societies tend to have faced more threats, such as dense populations, disease, famine, conflict and scarce resources, which makes order and coordination valuable. In their ranking, countries such as Singapore, Malaysia, Pakistan and South Korea scored as tight, and countries such as the Netherlands, Ukraine and Brazil as loose.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Tight', title: 'Order and self-control', body: 'Clear rules, strong punishment of deviance, high self-monitoring, more order and often lower crime.' },
            { tag: 'Loose', title: 'Openness and creativity', body: 'More tolerance for difference, more openness to change and often more creativity, but more disorder.' },
            { tag: 'Trade-off', title: 'Neither is better', body: 'Each is a solution to different conditions, with different strengths and costs.' },
            { tag: 'Within countries', title: 'Variation inside', body: 'Tightness varies between regions, organisations and families, and shifts after crises.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Use cross-cultural labels with care', text: 'Such labels can help to understand patterns, but easily slip into stereotyping. They describe averages among large groups, based on surveys with limitations, and they do not tell you what a particular person is like.' },
        { t: 'links', items: [{ path: 'anthropology/foundations/what-is-anthropology', note: 'The culture concept and its critics' }, { path: 'game-theory/dynamics/sequential-games', note: 'The ultimatum game across societies' }] },
      ],
    },
  ],
  sources: [
    'Henrich, J., Heine, S. J., and Norenzayan, A. (2010). The weirdest people in the world? Behavioral and Brain Sciences.',
    'Markus, H. R., and Kitayama, S. (1991). Culture and the self. Psychological Review.',
    'Nisbett, R. E., and Cohen, D. (1996). Culture of Honor. Westview Press.',
    'Leung, A. K.-Y., and Cohen, D. (2011). Within- and between-culture variation: individual differences and the cultural logics of honor, face, and dignity cultures. Journal of Personality and Social Psychology.',
    'Gelfand, M. J., et al. (2011). Differences between tight and loose cultures: a 33-nation study. Science.',
    'Hofstede, G. (2001). Culture’s Consequences, 2nd edition. Sage; and McSweeney, B. (2002) on its critique.',
    'Segall, M. H., Campbell, D. T., and Herskovits, M. J. (1966). The Influence of Culture on Visual Perception. Bobbs-Merrill.',
  ],
  related: ['anthropology/groups-and-difference/identity-and-in-groups', 'anthropology/foundations/what-is-anthropology', 'game-theory/dynamics/sequential-games'],
}

export default guide
