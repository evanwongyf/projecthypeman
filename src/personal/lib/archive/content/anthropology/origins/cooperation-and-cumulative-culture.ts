import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'What makes humans ecologically successful is not individual brilliance. Left alone, most of us could not survive in the Arctic or the Australian desert. What lets people live there is a vast body of knowledge, tools and techniques accumulated over generations and passed on by learning. This is cumulative culture, and together with an unusual level of cooperation among non-relatives, it is the human specialty. This guide explains social learning, cumulative culture, the ways we choose whom to copy, and how culture and genes co-evolve.',
  nutshell: [
    '**Social learning** (copying others) is cheaper and often more reliable than trial and error. Humans are exceptionally good at it.',
    '**Cumulative culture**: improvements build on previous ones, so no one needs to reinvent. It makes knowledge too complex for any one person to discover.',
    'We use **learning biases**: copy the **majority**, the **successful**, the **prestigious**, and **kin**.',
    '**Gene-culture coevolution**: culture changes the selection pressures on genes (for example, dairying and lactase persistence).',
    'Human **cooperation with non-kin** is supported by norms, reputation, punishment and **shared intentionality**: the ability to share goals and attention.',
  ],
  sections: [
    {
      id: 'social',
      title: 'Social learning and cumulative culture',
      blocks: [
        { t: 'p', text: 'Joseph Henrich’s The Secret of Our Success (2016) argued that humans are “cultural species”. He retells the story of the Burke and Wills expedition (1860 to 1861), whose well-equipped explorers died in central Australia, partly because they did not know how to use local food (nardoo seeds need careful processing), while Aboriginal people lived there for tens of thousands of years. The difference was not intelligence, but the knowledge their culture had accumulated.' },
        {
          t: 'table',
          head: ['Feature', 'Detail'],
          rows: [
            ['Teaching', 'Humans actively teach, with gestures, pointing and language. Few other species do'],
            ['Imitation and over-imitation', 'Children copy even unnecessary steps in an action, which suggests a strong tendency to copy faithfully'],
            ['Ratchet effect', 'Tomasello’s term for knowledge that is kept and improved, never losing ground'],
            ['Collective brain', 'Larger, better-connected populations can sustain more complex technology, as models by Henrich and others suggest'],
            ['Loss', 'Where populations shrink or become isolated, skills can be lost, a pattern argued for by Henrich in the case of Tasmania, though the evidence is debated'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Debate: how much does population size matter?', text: 'The idea that larger populations produce more complex technology has support from models and some case studies, but empirical tests give mixed results (for example, studies of Pacific islands). The principle that culture accumulates is better supported than any single formula about population size.' },
      ],
    },
    {
      id: 'biases',
      title: 'Whom do we copy?',
      blocks: [
        { t: 'p', text: 'Robert Boyd and Peter Richerson proposed that humans have evolved rules of thumb for social learning, because blind copying is unreliable.' },
        {
          t: 'table',
          head: ['Bias', 'Rule', 'Example'],
          rows: [
            ['Conformist', 'Copy what most people do', 'Adopting local customs, language and dress'],
            ['Success', 'Copy those who are doing well', 'Imitating a successful farmer’s methods'],
            ['Prestige', 'Copy those who are admired by others, in all areas', 'Following a respected leader or celebrity on many matters'],
            ['Kin and similarity', 'Copy relatives and people like you', 'Learning a trade from a parent'],
            ['Content', 'Favour memorable, emotionally salient or useful ideas', 'Stories with vivid details spread more than dull ones'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Useful', title: 'Cheap and often accurate', body: 'If many people succeed doing something, copying them is a good bet.' },
            { tag: 'Costs', title: 'Can spread errors', body: 'Prestige bias means people copy celebrities on topics beyond their expertise. Conformity can spread fads, bubbles and harmful customs. See herd behaviour.' },
          ],
        },
      ],
    },
    {
      id: 'gene',
      title: 'Genes and culture together',
      blocks: [
        {
          t: 'table',
          head: ['Case', 'Culture', 'Biological effect'],
          rows: [
            ['Lactase persistence', 'Dairying: keeping cattle for milk', 'In several populations, mutations that let adults digest milk became common; it evolved independently in Europe and Africa'],
            ['Starch digestion', 'Diets high in starch', 'People from high-starch cultures tend to have more copies of the amylase gene'],
            ['Sickle-cell and malaria', 'Yam farming increased mosquito breeding in parts of West Africa (proposed)', 'The sickle-cell allele protects against malaria in carriers; the cultural link is debated'],
            ['Fire and cooking', 'Cooked food', 'Smaller guts and teeth (proposed)'],
          ],
          caption: 'Examples of gene-culture coevolution: culture changes the environment that genes are selected in.',
        },
      ],
    },
    {
      id: 'coop',
      title: 'Why cooperate beyond family?',
      blocks: [
        { t: 'p', text: 'Most animals cooperate with kin or with partners in repeated exchanges. Humans also cooperate with strangers, in large groups, for shared goals. Michael Tomasello’s work with children and apes suggests that humans have a distinctive capacity for shared intentionality: forming joint goals and sharing attention. Children as young as 14 months help others with tasks, and by three they share goals and protest when a partner leaves a joint game. Add norms, reputation and punishment, and the cooperative group becomes the unit of survival.' },
        {
          t: 'list',
          items: [
            '**Reciprocity and reputation** let people cooperate with non-kin (see the game theory guides).',
            '**Norms and sanctions** define what is expected and punish cheats.',
            '**Group markers** (language, dress, ritual) help to identify who shares the rules.',
            '**Institutions** (markets, courts, religions) scale up cooperation across millions.',
            'Cooperation within groups often goes along with competition between groups, a double-edged feature.',
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/society/trust-reputation-and-punishment', note: 'Trust, reputation and punishment' }, { path: 'anthropology/conventions-and-conformity/cultural-transmission', note: 'How conventions spread' }] },
      ],
    },
  ],
  sources: [
    'Henrich, J. (2016). The Secret of Our Success. Princeton University Press.',
    'Boyd, R., and Richerson, P. J. (1985). Culture and the Evolutionary Process. University of Chicago Press.',
    'Tomasello, M. (1999). The Cultural Origins of Human Cognition. Harvard University Press.',
    'Tomasello, M., et al. (2005). Understanding and sharing intentions: the origins of cultural cognition. Behavioral and Brain Sciences.',
    'Richerson, P. J., and Boyd, R. (2005). Not by Genes Alone. University of Chicago Press.',
    'Collard, M., et al. (2013). Population size and cultural evolution in nonindustrial food-producing societies. PLoS ONE.',
  ],
  related: ['anthropology/origins/human-evolution-and-behaviour', 'anthropology/conventions-and-conformity/cultural-transmission', 'game-theory/society/trust-reputation-and-punishment'],
}

export default guide
