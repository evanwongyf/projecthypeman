import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anthropologists once travelled to remote villages to record “traditional” cultures before they vanished. Today they know there are no isolated cultures, and that people everywhere have been trading, migrating and borrowing for millennia. Globalisation has sped this up: goods, people, images and money move faster than ever. The result is not one world culture, but new mixtures, local reinterpretations and new inequalities. This guide covers migration and diaspora, hybridity and “glocalisation”, cities, consumption, heritage, development and language loss.',
  nutshell: [
    'Cultures have always **mixed**. Globalisation intensifies flows of **people, goods, images, money and ideas** (Appadurai’s five “scapes”).',
    'Global products get **localised**: McDonald’s in East Asia became part of local life (Watson). **Glocalisation** and **hybridity** are common.',
    '**Migration** and **diaspora** create transnational families and communities living across borders.',
    '**Cities** are laboratories of difference, where strangers must learn to live together.',
    '**Heritage** is chosen and made: UNESCO lists, museums and festivals decide what counts as tradition, and Singapore’s hawker culture is a recent example.',
  ],
  sections: [
    {
      id: 'flows',
      title: 'Global flows',
      blocks: [
        { t: 'p', text: 'Arjun Appadurai (Modernity at Large, 1996) proposed five dimensions of global flow, each moving at its own speed and in its own direction: the ethnoscape (people), technoscape (technology), financescape (money), mediascape (images and information) and ideoscape (political and cultural ideas). The disjunctures between them, such as migrants moving where jobs are while capital moves elsewhere, create the tensions of the global age.' },
        {
          t: 'table',
          head: ['“Scape”', 'What flows', 'Example'],
          rows: [
            ['Ethnoscape', 'Migrants, workers, refugees, tourists, students', 'Domestic workers sending money home; students abroad'],
            ['Technoscape', 'Machinery, software, know-how', 'Factories and data centres located across countries'],
            ['Financescape', 'Money, investment, remittances', 'Global financial markets; mobile money transfers'],
            ['Mediascape', 'Images, news, entertainment', 'Korean dramas watched worldwide; global news'],
            ['Ideoscape', 'Political ideas and ideologies', 'Human rights, nationalism, democracy movements'],
          ],
        },
      ],
    },
    {
      id: 'hybrid',
      title: 'Homogenisation or hybridity?',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Worry', title: 'Cultural imperialism', body: 'The fear that a few powerful cultures (often US media and brands) overwhelm others, leading to sameness.' },
            { tag: 'Reality', title: 'Localisation', body: 'James Watson (Golden Arches East, 1997) found that McDonald’s in East Asia was adapted by local customers: it became a place for children’s parties, students’ studying and meeting, and menus were adapted to local tastes.' },
            { tag: 'Mix', title: 'Hybridity and glocalisation', body: 'Cultures blend, from Singlish to fusion food to Bollywood hip-hop. Roland Robertson’s “glocalisation” stresses how global products are tailored to local conditions.' },
            { tag: 'Power', title: 'Still unequal', body: 'Mixing is not symmetrical. Some languages, brands and states have far more reach, and some local practices are lost.' },
          ],
        },
      ],
    },
    {
      id: 'migration',
      title: 'Migration, diaspora and the city',
      blocks: [
        {
          t: 'list',
          items: [
            '**Transnational families** live across borders: parents working abroad, children raised by relatives, communication by video call, remittances sent home.',
            '**Diaspora communities** maintain ties to a homeland, through food, religion, language and politics, while adapting to new places.',
            '**Remittances** (money sent home by migrants) exceed development aid in many countries and are a major lifeline.',
            '**Cities** bring together strangers of many backgrounds. Urban anthropologists study neighbourhoods, markets, migrants’ networks, informal housing and public space.',
            '**Work and class** change as economies move from farming to factories to services, reshaping families and identities.',
          ],
        },
        { t: 'callout', tone: 'note', title: 'Cities and strangers', text: 'Sociologists such as Jane Jacobs (The Death and Life of Great American Cities, 1961) argued that busy streets and local shops create informal “eyes on the street” and trust among strangers. Ray Oldenburg’s “third places”, such as cafés, markets and community clubs, serve a similar role. Hawker centres in Singapore are often described in this way.' },
      ],
    },
    {
      id: 'heritage',
      title: 'Heritage, tradition and development',
      blocks: [
        { t: 'p', text: 'What counts as heritage is decided by people and institutions. UNESCO’s Convention for the Safeguarding of the Intangible Cultural Heritage (2003) lists living practices, such as festivals, crafts, music and foodways. In 2020 UNESCO inscribed “Hawker culture in Singapore: community dining and culinary practices in a multicultural urban context”. Heritage listing can bring pride, funding and tourism, and it can also freeze, commercialise or politicise tradition.' },
        {
          t: 'table',
          head: ['Topic', 'Issue'],
          rows: [
            ['Heritage and tourism', 'Practices may be adapted for visitors (“staged authenticity”), providing income but changing meaning'],
            ['Development projects', 'James Ferguson (The Anti-Politics Machine, 1990) showed how a development project in Lesotho failed on its own terms yet expanded state power, because it treated political problems as technical'],
            ['Indigenous rights', 'Land, language and cultural property claims; consultation and consent; repatriation of remains and objects'],
            ['Language loss', 'Roughly 7,000 languages are spoken today, and a large share (often estimated at around 40 per cent) are endangered; revitalisation efforts include language nests, schools and media'],
            ['Cultural appropriation', 'Debates over borrowing from marginalised groups without credit or benefit versus normal cultural exchange'],
          ],
        },
        {
          t: 'dodont',
          do: ['See cultures as dynamic: borrowing and change are normal.', 'Ask who gains and who decides in heritage and development projects.', 'Look at how people use the global in local ways.'],
          dont: ['Assume that change means loss of authenticity.', 'Assume that globalisation affects everyone the same way.', 'Treat “tradition” as unchanging.'],
        },
        { t: 'links', items: [{ path: 'anthropology/modern-life/online-communities-and-technology', note: 'Online life' }, { path: 'anthropology/groups-and-difference/cultural-variation-in-mind', note: 'Cultural variation' }, { path: 'anthropology/start-here', note: 'Back to the start' }] },
      ],
    },
  ],
  sources: [
    'Appadurai, A. (1996). Modernity at Large: Cultural Dimensions of Globalization. University of Minnesota Press.',
    'Watson, J. L. (ed.) (1997). Golden Arches East: McDonald’s in East Asia. Stanford University Press.',
    'Ferguson, J. (1990). The Anti-Politics Machine. Cambridge University Press.',
    'Jacobs, J. (1961). The Death and Life of Great American Cities. Random House.',
    'UNESCO (2020). Hawker culture in Singapore. Representative List of the Intangible Cultural Heritage of Humanity.',
    'Eberhard, D. M., Simons, G. F., and Fennig, C. D. (eds.) Ethnologue: Languages of the World (annual).',
  ],
  related: ['anthropology/modern-life/online-communities-and-technology', 'anthropology/groups-and-difference/cultural-variation-in-mind', 'anthropology/start-here'],
}

export default guide
