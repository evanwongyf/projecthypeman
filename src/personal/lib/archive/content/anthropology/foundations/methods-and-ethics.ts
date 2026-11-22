import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The signature method of cultural anthropology is long-term fieldwork: living among people, learning their language, taking part in daily life and writing about it. Bronisław Malinowski made it the standard when he spent two years in the Trobriand Islands during the First World War. But anthropology has also been entangled with colonial rule and scientific racism, and has argued about whether its famous studies were accurate. This guide covers how fieldwork is done, what thick description is, how ethics are now handled, and what the controversies teach.',
  nutshell: [
    '**Participant observation**: taking part in daily life while observing and taking notes, over months or years. It is combined with interviews, surveys and archives.',
    '**Thick description** (Geertz): describing not just what people do, but what it means in their context.',
    '**Ethics**: informed consent, avoiding harm, confidentiality, fair credit and benefit-sharing, and respect for communities’ control over their knowledge.',
    'Anthropology has been **entangled with colonialism**, and its classic studies have been criticised, re-examined, and sometimes refuted.',
    'Fieldwork is **inevitably shaped by the observer**; good work says so and cross-checks with other evidence.',
  ],
  sections: [
    {
      id: 'method',
      title: 'How fieldwork is done',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Prepare', body: 'Read the literature, learn what language you can, decide on a research question and get ethical approval.' },
            { title: 'Arrive and settle', body: 'Find a way to live and be accepted, explain your purpose honestly and begin to learn the language and daily routines.' },
            { title: 'Participate and observe', body: 'Take part in work, meals, ceremonies and conversations. Write detailed field notes every day.' },
            { title: 'Interview and map', body: 'Use structured and informal interviews, genealogies, maps and censuses to cross-check what you see.' },
            { title: 'Analyse as you go', body: 'Compare observations, test ideas, and revisit people to check your understanding.' },
            { title: 'Write up and return', body: 'Write an ethnography. Increasingly, researchers share results with the community and invite comment.' },
          ],
        },
        {
          t: 'table',
          head: ['Method', 'Strength', 'Limit'],
          rows: [
            ['Participant observation', 'Deep understanding of practice; catches what people do rather than what they say', 'Time-consuming; depends on one researcher’s perspective'],
            ['Interviews', 'Gets reasons and meanings', 'People may say what they think you want to hear'],
            ['Surveys and censuses', 'Allows comparison and numbers', 'Misses meaning and context'],
            ['Archives and documents', 'Adds history', 'May reflect the views of the powerful'],
            ['Digital and multi-sited ethnography', 'Follows people, objects and ideas across places and online', 'Harder to define “the field”'],
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Thick description',
          text: 'Clifford Geertz borrowed from the philosopher Gilbert Ryle the example of a twitch and a wink. A twitch is an involuntary movement. A wink is a deliberate signal to a friend, and a parody of a wink is a joke about someone who winks. Physically, the movements are the same. A “thin” description records the eyelid; a “thick” description explains the layers of meaning, and that is the aim of anthropology.',
        },
      ],
    },
    {
      id: 'history',
      title: 'History and its shadows',
      blocks: [
        { t: 'p', text: 'Early anthropology developed alongside European empires. Some anthropologists worked for colonial governments or relied on colonial order to do their research. Nineteenth-century theories ranked societies on a scale from “savage” to “civilised”, and nineteenth- and early twentieth-century science often linked physical features to supposed mental ability. Franz Boas and his students were central in refuting scientific racism and arguing that cultural differences are learned, not biological.' },
        {
          t: 'table',
          head: ['Case', 'The claim', 'The dispute'],
          rows: [
            ['Margaret Mead, Coming of Age in Samoa (1928)', 'Adolescence in Samoa was relatively free of the stress seen in the US, so culture shapes adolescence', 'Derek Freeman (1983) argued Mead was misled and that Samoa was more restrictive. Later scholars concluded that both over-simplified; debate continues'],
            ['Napoleon Chagnon, The Fierce People (Yanomami)', 'Violence among the Yanomami was high and violent men had more children', 'Critics disputed the data and the framing; Patrick Tierney’s Darkness in El Dorado (2000) made allegations about ethics, many of which were contested or refuted. The affair prompted a reform of research ethics'],
            ['Colonial anthropology', 'Descriptions that served administration', 'Postcolonial critiques (Talal Asad, 1973) examined the relationship between anthropology and empire'],
            ['Writing Culture (1986)', 'Ethnographies are literary texts shaped by the author’s position', 'Led to more reflexive writing and to debate about authority and truth'],
          ],
          caption: 'Summaries of long debates. Read the original works and responses before drawing a conclusion.',
        },
      ],
    },
    {
      id: 'ethics',
      title: 'Ethics today',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Get free, prior and informed consent, and explain the purpose, risks and uses of the research.',
            'Do no harm: protect the privacy, safety and dignity of participants, especially vulnerable ones. Use pseudonyms and take care with sensitive information.',
            'Be honest about who you are and who funds you.',
            'Respect communities’ ownership of knowledge, sacred sites and cultural property. Consult indigenous protocols.',
            'Share benefits, credit collaborators, and return results in useful forms.',
            'Handle human remains and artefacts responsibly. In the US, the Native American Graves Protection and Repatriation Act (1990) requires museums to consult with tribes and return certain remains and objects.',
            'Recognise your own positionality: your gender, nationality, wealth and politics affect what you see.',
          ],
        },
        { t: 'callout', tone: 'note', title: 'Professional codes', text: 'Bodies such as the American Anthropological Association and the Association of Social Anthropologists publish ethical codes. Universities also require ethical review. The principles apply to journalists, designers and market researchers who borrow ethnographic methods.' },
        { t: 'links', items: [{ path: 'anthropology/foundations/theories-of-culture', note: 'Theories of culture' }, { path: 'anthropology/foundations/what-is-anthropology', note: 'What anthropology is' }] },
      ],
    },
  ],
  sources: [
    'Malinowski, B. (1922). Argonauts of the Western Pacific. Routledge.',
    'Geertz, C. (1973). Thick description: toward an interpretive theory of culture. In The Interpretation of Cultures.',
    'Clifford, J., and Marcus, G. (eds.) (1986). Writing Culture. University of California Press.',
    'Asad, T. (ed.) (1973). Anthropology and the Colonial Encounter. Ithaca Press.',
    'Freeman, D. (1983). Margaret Mead and Samoa. Harvard University Press; Shankman, P. (2009). The Trashing of Margaret Mead. University of Wisconsin Press.',
    'American Anthropological Association (2012). Statement on Ethics: Principles of Professional Responsibility.',
  ],
  related: ['anthropology/foundations/what-is-anthropology', 'anthropology/foundations/theories-of-culture', 'anthropology/start-here'],
}

export default guide
