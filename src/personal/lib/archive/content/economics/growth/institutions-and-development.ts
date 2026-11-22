import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The Solow model explains why countries with more capital and better technology are richer, but it leaves the deeper question open: why do some countries accumulate capital, educate their people and adopt new technology, while others do not? Economists distinguish proximate causes of growth (capital, skills, technology) from fundamental ones (geography, culture and, above all, institutions: the rules that decide whether people can keep what they earn). This guide reviews the evidence for institutions, from the Korean peninsula to the colonial experiments studied by the 2024 Nobel laureates, explains why ideas make long-run growth possible, and looks at how East Asia, Singapore included, achieved some of the fastest growth in history.',
  nutshell: [
    '**Proximate causes** of income differences: physical capital, human capital and productivity. **Fundamental causes**: geography, culture and **institutions**.',
    '**Inclusive institutions** (secure property, rule of law, open markets, constraints on rulers) encourage investment; **extractive** ones discourage it.',
    'Natural experiments such as **North and South Korea** and **colonial settlement patterns** suggest institutions matter most (Acemoglu, Johnson and Robinson, Nobel 2024).',
    'Long-run growth comes from **ideas**, which are **non-rival**: one person’s use does not stop another’s, so they escape diminishing returns (Romer).',
    'The **East Asian miracle** combined high saving, education, export orientation and capable states; the challenge now is the **middle-income trap**.',
  ],
  sections: [
    {
      id: 'proximate',
      title: 'Proximate and fundamental causes',
      lead: 'Layers of explanation.',
      blocks: [
        {
          t: 'flow',
          title: 'Why are some countries rich?',
          nodes: [
            { label: 'Fundamental causes', sub: 'geography, culture, institutions', tone: 'human' },
            { label: 'Incentives and policies', sub: 'secure property, open markets, schooling, infrastructure', tone: 'process' },
            { label: 'Proximate causes', sub: 'capital, human capital, technology', tone: 'model' },
            { label: 'Output per person', sub: 'income, consumption, health', tone: 'output' },
          ],
          caption: 'Capital and skills explain income differences in an accounting sense, but they are themselves outcomes that need explaining.',
        },
        {
          t: 'math',
          tex: String.raw`\frac{y_{rich}}{y_{poor}} = \underbrace{\left(\frac{K/Y_{rich}}{K/Y_{poor}}\right)^{\frac{\alpha}{1-\alpha}}}_{\text{capital intensity}} \times \underbrace{\frac{h_{rich}}{h_{poor}}}_{\text{human capital}} \times \underbrace{\frac{A_{rich}}{A_{poor}}}_{\text{productivity}}`,
          plain: 'Development accounting splits the income gap between two countries into three multiplied parts: capital per unit of output, education and skills per worker, and productivity. Studies find productivity is usually the biggest part, so "rich countries are rich because they have more machines" is far from the whole story.',
          syntax: [
            { sym: String.raw`K/Y`, say: 'The capital–output ratio.' },
            { sym: String.raw`h`, say: 'Human capital per worker, built from years of schooling and their returns.' },
            { sym: String.raw`A`, say: 'Total factor productivity.' },
          ],
          worked: {
            steps: [
              String.raw`Suppose a rich country has 30 times the output per worker of a poor one.`,
              String.raw`Capital–output ratios 3.0 against 1.5, \(\alpha = 1/3\): capital intensity contributes \(2^{0.5} \approx 1.4\).`,
              String.raw`Human capital: average schooling 13 years against 5, at 10% a year: \(e^{0.8} \approx 2.2\).`,
              String.raw`Productivity must contribute \(30 / (1.4 \times 2.2) \approx 9.7\).`,
            ],
            why: ['the gap to explain', 'capital matters, but with diminishing returns', 'schooling multiplies effective labour', 'the residual'],
            answer: 'In this illustration productivity explains a factor of nearly 10 out of 30. Hall and Jones (1999) found similar patterns across 127 countries and linked productivity to "social infrastructure": institutions and government policies.',
          },
        },
      ],
    },
    {
      id: 'institutions',
      title: 'Institutions: the evidence',
      lead: 'Natural experiments of history.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Inclusive institutions', 'Extractive institutions'],
          rows: [
            ['Property rights', 'Secure for most people', 'Insecure, or reserved for an elite'],
            ['Law', 'Applied equally, by independent courts', 'Applied selectively; rulers above the law'],
            ['Markets', 'Open entry, competition', 'Monopolies and licences for insiders'],
            ['Political power', 'Constrained and broadly shared', 'Concentrated and unchecked'],
            ['Incentive to invest and innovate', 'Strong: you keep the returns', 'Weak: returns may be taken'],
          ],
          caption: 'The framework of Daron Acemoglu and James Robinson in *Why Nations Fail* (2012).',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'North and South Korea', tag: 'one people, two systems', body: 'Divided in 1945 with similar culture, geography and income. Under a market economy with eventually democratic institutions, South Korea became one of the world’s richest countries; under central planning and one-family rule, North Korea remains among the poorest. Estimates put South Korean income per person at more than twenty times the North’s.' },
            { title: 'Colonial origins', tag: 'Acemoglu, Johnson and Robinson, 2001', body: 'Where early European settlers faced low mortality, they settled and built institutions protecting their own property (the US, Canada, Australia). Where mortality was high, they set up extractive regimes to ship out resources. Settler mortality predicts today’s institutions, which in turn predict today’s incomes. The three shared the 2024 Nobel Prize.' },
            { title: 'Reversal of fortune', tag: 'rich became poor', body: 'Among former colonies, places that were richest and most densely populated in 1500 (the Aztec and Inca lands, Mughal India) are relatively poorer today, while sparsely populated places became richer: consistent with extractive institutions being imposed where there was most to extract.' },
            { title: 'Nogales', tag: 'one town, two countries', body: 'The town is split by the US–Mexico border. Same climate, same ancestry, similar culture: households on the US side are far richer, with better health and schooling.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Geography and culture still matter',
          text: 'Jeffrey Sachs and others argue that tropical disease, being landlocked and poor soils hold countries back directly. Cultural traits such as trust also correlate with income. Most economists now see institutions as the most important single factor but not the only one, and recognise that institutions can change, sometimes quickly.',
        },
      ],
    },
    {
      id: 'ideas',
      title: 'Ideas and endogenous growth',
      lead: 'Why growth need not stop.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Rival good', def: 'One person’s use prevents another’s: a machine, a worker’s hour.' },
            { term: 'Non-rival good', def: 'Can be used by any number of people at once: a recipe, a formula, software code, a vaccine design.' },
            { term: 'Excludability of ideas', def: 'Patents, copyright and trade secrets let inventors exclude others for a time, which gives them a reason to invent.' },
            { term: 'Endogenous growth', def: 'Models in which technological progress is the result of economic decisions (research, investment, learning), not an outside force.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\frac{\Delta A}{A} = z\,L_A \qquad\Rightarrow\qquad g_y = z\,L_A`,
          plain: 'In Paul Romer’s model the stock of ideas A grows in proportion to the number of researchers L_A. Because ideas are non-rival, each new idea raises the productivity of every worker in the economy, and building on a larger stock of ideas does not get harder. Growth of income per person then depends on how many people work on ideas.',
          syntax: [
            { sym: String.raw`L_A`, say: 'The number of workers producing ideas (researchers, engineers, entrepreneurs).' },
            { sym: String.raw`z`, say: 'Research productivity: how many new ideas each researcher produces.' },
          ],
          worked: {
            steps: [
              String.raw`Suppose \(z L_A = 2\%\): income per person grows 2% a year indefinitely.`,
              String.raw`Doubling the research workforce doubles growth to 4% in this simple version.`,
              String.raw`Charles Jones (1995) noted that US researchers multiplied several times over since 1950 without growth rising, so ideas must be getting harder to find; in his version growth depends on the growth of research effort.`,
            ],
            why: ['the scale of research', 'a strong scale effect', 'the evidence pushes back'],
            answer: 'Ideas explain why growth has not run into diminishing returns, but sustaining it requires ever-growing research effort. Romer shared the 2018 Nobel Prize; the 2025 prize went to Joel Mokyr, Philippe Aghion and Peter Howitt for explaining innovation-driven growth and creative destruction.',
          },
        },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Creative destruction', body: 'New firms with better products replace old ones (Aghion and Howitt, after Schumpeter). Growth requires letting incumbents fail.' },
            { title: 'Technology adoption', body: 'Most countries grow by adopting ideas invented elsewhere. The speed of adoption, not invention, explains much of the gap between countries.' },
            { title: 'Human capital and ideas', body: 'Educated workers both produce and absorb ideas, which is why schooling has larger effects than the Solow model alone implies.' },
          ],
        },
      ],
    },
    {
      id: 'east-asia',
      title: 'The East Asian miracle and Singapore',
      lead: 'Growth at record speed.',
      blocks: [
        {
          t: 'mindmap',
          center: 'Ingredients of East Asian growth',
          branches: [
            { label: 'High saving and investment', tone: 'teal', items: ['national saving above 30% of GDP', 'CPF in Singapore'] },
            { label: 'Education', tone: 'mint', items: ['rapid rise in schooling', 'technical and vocational training'] },
            { label: 'Export orientation', tone: 'orange', items: ['world markets impose discipline', 'learning from foreign buyers'] },
            { label: 'Macro stability', tone: 'mustard', items: ['low inflation', 'prudent budgets'] },
            { label: 'Capable states', tone: 'lavender', items: ['meritocratic civil service', 'industrial policy, with mixed results'] },
            { label: 'Openness to FDI', tone: 'pink', items: ['multinationals bring technology', 'Singapore’s EDB from 1961'] },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: '1961: the Economic Development Board', body: 'Set up to attract foreign manufacturers with infrastructure, tax incentives and industrial estates such as Jurong.' },
            { title: '1965 onwards: export-led industrialisation', body: 'With no hinterland after separation from Malaysia, Singapore bet on multinationals producing for world markets rather than protecting local industry.' },
            { title: 'Institutions as a competitive advantage', body: 'Rule of law, a strong anti-corruption agency (the CPIB, dating from 1952), a meritocratic civil service and English as the working language made Singapore attractive to investors.' },
            { title: 'Saving and housing', body: 'CPF funded both retirement saving and, through HDB, mass home ownership, giving households a stake in the economy.' },
            { title: 'Moving up the value chain', body: 'From assembly to wafer fabrication, petrochemicals, finance, biomedical sciences and logistics, through repeated investment in skills.' },
          ],
        },
        {
          t: 'metric',
          name: 'the middle-income trap',
          shows: 'The pattern in which many countries grow quickly to middle income and then stall, unable to compete on low wages any more but not yet productive enough to compete with rich economies on innovation.',
          eli5: 'Cheap labour gets a country to the middle. To get to the top, it has to start inventing and improving things, not just making things more cheaply.',
          higher: 'Countries that escape (South Korea, Taiwan, Singapore) typically invest heavily in education and research, keep markets competitive and maintain strong institutions as wages rise.',
          lower: 'Countries that stall often have weak education systems, insider-protected industries, or institutions that block new entrants.',
          typical: 'The World Bank has noted that of about 100 economies classed as middle income in 1960, only around 13 had become high income by 2008.',
        },
        { t: 'callout', tone: 'fact', title: 'Extreme poverty', text: 'Rapid growth, first in East Asia and then in South Asia, drove the largest fall in extreme poverty in history: by World Bank estimates, the share of the world’s population living in extreme poverty fell from over a third in 1990 to under a tenth by 2019. Growth is not the only thing that matters for wellbeing, but no country has escaped mass poverty without it.' },
      ],
    },
  ],
  sources: [
    'Acemoglu, D., Johnson, S., and Robinson, J. A. (2001). The colonial origins of comparative development. *American Economic Review*, 91(5), 1369–1401.',
    'Acemoglu, D., and Robinson, J. A. (2012). *Why Nations Fail*. Crown.',
    'Hall, R. E., and Jones, C. I. (1999). Why do some countries produce so much more output per worker than others? *Quarterly Journal of Economics*, 114(1), 83–116.',
    'Romer, P. M. (1990). Endogenous technological change. *Journal of Political Economy*, 98(5), S71–S102.',
    'Jones, C. I. (1995). R&D-based models of economic growth. *Journal of Political Economy*, 103(4), 759–784.',
    'Aghion, P., and Howitt, P. (1992). A model of growth through creative destruction. *Econometrica*, 60(2), 323–351.',
    'World Bank (1993). *The East Asian Miracle: Economic Growth and Public Policy*. Oxford University Press.',
    'World Bank (2013). *China 2030: Building a Modern, Harmonious, and Creative Society*.',
  ],
  related: ['economics/growth/solow-model', 'economics/growth/inequality', 'economics/trade/comparative-advantage'],
}

export default guide
