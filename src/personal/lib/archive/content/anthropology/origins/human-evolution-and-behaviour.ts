import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Humans are apes with unusual habits: upright walking, huge brains, a long childhood, language, cooking, cooperation in large groups and a reliance on learned culture. Understanding how these evolved helps explain what is distinctive about human behaviour, and warns against two errors: treating present-day customs as eternal “human nature”, and treating evolution as a story that justifies how things are. This guide gives the outline of human evolution, the social brain idea, what we know about hunter-gatherer life, and the limits of evolutionary explanation.',
  nutshell: [
    'Our lineage split from chimpanzees about **6 to 7 million years ago**. Upright walking came early; big brains later.',
    '**Homo sapiens** appeared in Africa roughly **300,000 years ago**; for most of that time, people lived as **mobile foragers** in small, egalitarian bands.',
    'The **social brain hypothesis** links brain size in primates to group size and social complexity. Humans live in uniquely large, cooperative groups.',
    'Distinctive human traits: **cooking**, **long childhood**, **cooperative breeding** (help from grandmothers and others), **language** and **cumulative culture**.',
    'Evolution explains how traits can arise. It does not tell us what is right, and **culture and history** shape behaviour as much as biology.',
  ],
  sections: [
    {
      id: 'timeline',
      title: 'A short timeline',
      blocks: [
        {
          t: 'table',
          head: ['When (approximate)', 'Event', 'Note'],
          rows: [
            ['6 to 7 million years ago', 'Human and chimpanzee lineages diverge', 'Estimated from genetic and fossil evidence'],
            ['4 to 2 million years ago', 'Australopithecines (such as “Lucy”, about 3.2 million years ago) walk upright but have small brains', 'Bipedalism came before big brains'],
            ['2.5 to 2 million years ago', 'Earliest stone tools; the genus Homo appears', 'Meat-eating and tool use increase'],
            ['About 1.9 million years ago', 'Homo erectus appears and spreads from Africa', 'Larger body and brain; evidence of controlled fire is clearer from several hundred thousand years ago'],
            ['About 300,000 years ago', 'Earliest known Homo sapiens fossils (such as Jebel Irhoud, Morocco)', 'Modern anatomy emerged gradually across Africa'],
            ['About 50,000 to 100,000 years ago', 'Expansion out of Africa; symbolic art and ornaments', 'Meetings with Neanderthals and Denisovans; people of non-African ancestry carry about 1 to 2 per cent Neanderthal DNA'],
            ['About 11,000 to 12,000 years ago', 'Farming begins in several regions', 'Settled life, storage, larger and more unequal societies'],
          ],
          caption: 'Dates are approximate and revised as new fossils and DNA are found.',
        },
        { t: 'callout', tone: 'note', title: 'Not a ladder', text: 'Human evolution was a branching bush, not a line. Several kinds of human lived at the same time, and Homo sapiens is the only survivor. Popular “march of progress” pictures are misleading.' },
      ],
    },
    {
      id: 'brain',
      title: 'The social brain',
      blocks: [
        { t: 'p', text: 'Primates have unusually large brains for their size. Robin Dunbar proposed that this is because social life is cognitively demanding: tracking who is allied with whom, who owes what, and who can be trusted. Across primate species, the size of the neocortex relates to typical group size. Extrapolating to humans gives a natural group size of about 150, known as Dunbar’s number, the rough size of a village, a military company or a person’s active social network.' },
        {
          t: 'table',
          head: ['Layer of social network', 'Approximate size', 'Meaning'],
          rows: [
            ['Support clique', '3 to 5', 'Closest confidants'],
            ['Sympathy group', 'about 15', 'People you would be upset to lose'],
            ['Band or active network', 'about 50', 'Good friends and family'],
            ['Dunbar’s number', 'about 150', 'People you know personally and have a relationship with'],
            ['Larger layers', '500 to 1,500', 'Acquaintances and people you can put a name to'],
          ],
          caption: 'Layers roughly scale by a factor of three. The numbers are estimates, and the specific value of 150 has been debated; ranges of 100 to 250 are often quoted.',
        },
      ],
    },
    {
      id: 'forager',
      title: 'Life as a forager',
      blocks: [
        { t: 'p', text: 'For almost all of our species’ history, people lived by hunting, gathering and fishing in small, mobile groups. Present-day foragers such as the Hadza of Tanzania, the Ju/’hoansi of southern Africa and the Aché of Paraguay are not “living fossils”: they have their own history and are affected by their neighbours. But they show the range of ways of life in societies without farming, and recurring features appear.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Sharing', title: 'Food is shared', body: 'Big game is widely shared, and norms (and teasing) discourage hoarding and boasting.' },
            { tag: 'Equality', title: 'Active levelling', body: 'Groups often prevent any individual from dominating, by mockery, ostracism or in extreme cases removal. See power and hierarchy.' },
            { tag: 'Mobility', title: 'Move and fission', body: 'Camps are fluid. Disputes are often settled by moving away.' },
            { tag: 'Kin and beyond', title: 'Cooperation beyond family', body: 'Alliances through marriage, trade and exchange link bands across wide areas.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Childhood', title: 'A long childhood', body: 'Human children depend on adults for many years, unlike other apes. This allows a long period of learning.' },
            { tag: 'Cooperative breeding', title: 'It takes more than a mother', body: 'Sarah Hrdy argued that help from fathers, grandmothers and others (“alloparents”) was key to raising costly children, and shaped our cooperative, empathetic psychology.' },
            { tag: 'Cooking', title: 'Fire and food', body: 'Richard Wrangham proposed that cooking increased the energy available from food and allowed the growth of large brains. The timing is debated.' },
            { tag: 'Grandmothers', title: 'Post-menopausal life', body: 'The grandmother hypothesis suggests that older women who help raise grandchildren increased their genetic success. Evidence from the Hadza and other groups supports parts of it.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: 'What evolutionary explanations can and cannot do',
      blocks: [
        {
          t: 'dodont',
          do: ['Ask how a trait could be useful, and test the idea with evidence from many societies.', 'Remember that variation between cultures is as much a product of evolution (the ability to learn) as similarity.', 'Distinguish “can be explained by” from “is justified by”.'],
          dont: ['Assume that because something is old or “natural”, it is good or unchangeable.', 'Tell “just so” stories without testing them.', 'Draw conclusions about differences between groups of people from evolutionary arguments.'],
        },
        { t: 'callout', tone: 'warn', title: 'Be sceptical of easy claims', text: 'Popular claims about “what men and women evolved to want”, or about “the Stone Age brain in a modern world”, often go far beyond the evidence. Variation within and between societies is large, and culture shapes behaviour deeply. Treat strong claims about natural differences with care.' },
        { t: 'links', items: [{ path: 'anthropology/origins/cooperation-and-cumulative-culture', note: 'Next: cooperation and cumulative culture' }, { path: 'game-theory/dynamics/evolutionary-game-theory', note: 'Evolutionary game theory' }] },
      ],
    },
  ],
  sources: [
    'Dunbar, R. I. M. (1992). Neocortex size as a constraint on group size in primates. Journal of Human Evolution.',
    'Hublin, J.-J., et al. (2017). New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens. Nature.',
    'Hrdy, S. B. (2009). Mothers and Others: The Evolutionary Origins of Mutual Understanding. Harvard University Press.',
    'Wrangham, R. (2009). Catching Fire: How Cooking Made Us Human. Basic Books.',
    'Green, R. E., et al. (2010). A draft sequence of the Neandertal genome. Science.',
    'Marlowe, F. W. (2010). The Hadza: Hunter-Gatherers of Tanzania. University of California Press.',
  ],
  related: ['anthropology/origins/cooperation-and-cumulative-culture', 'anthropology/society/power-status-and-hierarchy', 'game-theory/dynamics/evolutionary-game-theory'],
}

export default guide
