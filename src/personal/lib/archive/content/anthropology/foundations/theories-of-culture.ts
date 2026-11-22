import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anthropologists have offered many grand theories of why societies are as they are. Some, like the nineteenth-century stages from savagery to civilisation, are now rejected. Others remain productive, such as the idea that institutions serve social needs, that myths are structured like language, or that culture is a system of meaning. This guide summarises the main schools, with what each got right and what critics say, so you can recognise the ideas when you meet them.',
  nutshell: [
    '**Evolutionism** (Tylor, Morgan) ranked societies in stages. It was **ethnocentric** and **rejected**, though cultural evolution is studied in new ways today.',
    '**Boas’s historical particularism** insisted each culture has its own history, and attacked scientific racism.',
    '**Functionalism** (Malinowski, Radcliffe-Brown) explained institutions by what they do for individuals or society.',
    '**Structuralism** (Lévi-Strauss) looked for universal mental patterns, such as binary oppositions, beneath myths and kinship.',
    '**Interpretive** (Geertz) reads culture as meaning; **materialism** (Harris) looks to environment and technology; **practice theory** (Bourdieu) to habit and power.',
  ],
  sections: [
    {
      id: 'schools',
      title: 'The main schools',
      blocks: [
        {
          t: 'table',
          head: ['School', 'Key figures', 'Core idea', 'Strength', 'Criticism'],
          rows: [
            ['Unilineal evolutionism', 'Tylor, Morgan (19th century)', 'All societies pass through the same stages (savagery, barbarism, civilisation)', 'Brought comparison and deep time', 'Ethnocentric and unsupported; used to justify empire'],
            ['Historical particularism', 'Boas (early 20th century)', 'Each culture has a unique history; gather detailed facts first', 'Refuted scientific racism; promoted fieldwork', 'Reluctant to generalise'],
            ['Functionalism', 'Malinowski; Radcliffe-Brown', 'Institutions meet needs: individual (Malinowski) or social order (Radcliffe-Brown)', 'Showed how customs fit together', 'Weak on change and conflict; can explain anything after the fact'],
            ['Structuralism', 'Lévi-Strauss (1950s to 1970s)', 'Cultures share deep structures in the mind, seen in kinship, myth and classification, such as binary oppositions', 'Brought attention to patterns in symbolic systems', 'Hard to test; selective use of evidence'],
            ['Cultural materialism and ecology', 'Harris; Rappaport', 'Environment, technology and economy shape social life; beliefs often serve practical ends', 'Draws attention to material conditions', 'Reduces meaning to material benefit'],
            ['Interpretive anthropology', 'Geertz (1970s)', 'Culture is a system of meanings to be read like a text', 'Rich description of meaning', 'Hard to verify; may neglect power and history'],
            ['Practice theory', 'Bourdieu; Ortner', 'Culture is made and remade through everyday action, shaped by habitus and power', 'Links structure and agency', 'Abstract language'],
            ['Postcolonial and critical approaches', 'Asad; Said; Abu-Lughod', 'Anthropology’s categories reflect power; write against stereotypes', 'Exposed biases', 'Can slide into scepticism about all knowledge'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Newer directions', text: 'Recent work includes the “ontological turn” (taking seriously that other peoples’ worlds may be built on different assumptions about what exists), multispecies anthropology, digital anthropology and cultural evolution, which uses mathematical models to study how practices spread. Each is debated.' },
      ],
    },
    {
      id: 'details',
      title: 'Ideas in action',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Functionalism', title: 'Magic and anxiety', body: 'Malinowski noticed that Trobriand fishermen used magic for dangerous open-sea fishing but not for safe lagoon fishing. He argued that magic manages anxiety where outcomes are uncertain.' },
            { tag: 'Structuralism', title: 'Raw and cooked', body: 'Lévi-Strauss argued that myths about raw and cooked food, nature and culture express a basic human opposition worked out in many ways.' },
            { tag: 'Materialism', title: 'The sacred cow?', body: 'Marvin Harris argued that India’s cattle taboos make ecological sense (cows produce dung, traction and milk). Critics say the religious meanings matter too.' },
            { tag: 'Interpretive', title: 'The Balinese cockfight', body: 'Geertz read the cockfight as a story Balinese men tell about themselves, about status and rivalry, not merely a betting game.' },
            { tag: 'Practice', title: 'Habitus', body: 'Bourdieu used the word for the habits of body and mind a person learns from their class and upbringing, which shape taste and action without being noticed.' },
            { tag: 'Exchange', title: 'Marriage as exchange', body: 'Lévi-Strauss saw marriage rules as systems in which groups exchange women (a framing feminists criticised), making alliances.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Use theories as lenses, each highlighting something different.', 'Ask what each theory leaves out.', 'Test claims against ethnographic evidence.'],
          dont: ['Accept an elegant theory because it is neat.', 'Treat nineteenth-century stage theories as science.', 'Assume a theory explains everything.'],
        },
        { t: 'links', items: [{ path: 'anthropology/origins/human-evolution-and-behaviour', note: 'Biological anthropology' }, { path: 'anthropology/society/economies-and-exchange', note: 'Exchange and the gift' }] },
      ],
    },
  ],
  sources: [
    'Barnard, A. (2000). History and Theory in Anthropology. Cambridge University Press.',
    'Erickson, P. A., and Murphy, L. D. (2017). A History of Anthropological Theory, 5th edition. University of Toronto Press.',
    'Malinowski, B. (1948). Magic, Science and Religion. Beacon Press.',
    'Lévi-Strauss, C. (1969). The Raw and the Cooked. Harper and Row.',
    'Geertz, C. (1973). Deep play: notes on the Balinese cockfight. In The Interpretation of Cultures.',
    'Bourdieu, P. (1977). Outline of a Theory of Practice. Cambridge University Press.',
  ],
  related: ['anthropology/foundations/what-is-anthropology', 'anthropology/foundations/methods-and-ethics', 'anthropology/meaning/ritual-and-religion'],
}

export default guide
