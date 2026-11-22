import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost every known society has ritual, and nearly all have beliefs about powers beyond the everyday world. Anthropologists have asked what rituals do, why people believe, how beliefs relate to society, and how to study religion without either mocking or endorsing it. This guide covers the classic theories (Durkheim, Malinowski, Evans-Pritchard, van Gennep and Turner), modern cognitive and evolutionary approaches, and why “belief” is not always the best way to understand religion.',
  nutshell: [
    '**Durkheim**: religion is about the **sacred**, and rituals create **collective effervescence**, a shared emotion that binds the group.',
    '**Malinowski**: magic appears where outcomes are **uncertain** and dangerous, and manages **anxiety**.',
    '**Evans-Pritchard**: Azande witchcraft beliefs form a **coherent system** that explains misfortune; they are rational within their assumptions.',
    '**Van Gennep** and **Turner**: **rites of passage** have three stages (separation, liminality, incorporation); the middle is a time of ambiguity and **communitas**.',
    '**Cognitive science of religion**: religious ideas are **natural** products of ordinary mental tools, such as detecting agents, and are memorable when slightly counterintuitive.',
  ],
  sections: [
    {
      id: 'classic',
      title: 'Classic theories',
      blocks: [
        {
          t: 'table',
          head: ['Thinker', 'Main idea', 'Example'],
          rows: [
            ['Émile Durkheim (1912)', 'Religion divides the world into sacred and profane; worship expresses and renews the society itself. Shared ritual creates “collective effervescence”', 'Australian Aboriginal totemic clans, as Durkheim understood them from secondary sources; football crowds and national ceremonies as modern analogues'],
            ['Bronisław Malinowski (1925)', 'Magic is used where outcomes are uncertain; it reduces anxiety and gives confidence to act', 'Trobriand fishermen used magic for open-sea fishing but not for the safe lagoon'],
            ['E. E. Evans-Pritchard (1937)', 'Azande explained misfortune by witchcraft; their system is logical and consistent within its assumptions', 'A granary collapses and kills someone: it fell because of termites, but why on that person at that time? Witchcraft answers “why me?”'],
            ['Arnold van Gennep (1909)', 'Life changes are marked by rites with three phases: separation, transition (liminality), incorporation', 'Initiation rites, weddings, funerals, graduations'],
            ['Victor Turner (1969)', 'The liminal stage is a time “betwixt and between”; participants form an egalitarian bond (communitas)', 'Initiates in a Ndembu rite; pilgrims; recruits in training'],
            ['Clifford Geertz (1966)', 'Religion is a system of symbols that shapes moods and motivations and gives a sense of order', 'Balinese ritual as the enactment of a worldview'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Separation', body: 'The person leaves their old status: shaved heads, new clothes, removal from the group.' },
            { title: 'Liminality', body: 'A period in between. Rules are loosened or reversed, identities are suspended, and everyone in the same stage is treated alike.' },
            { title: 'Incorporation', body: 'The person returns with a new status, and the community recognises it: a ceremony, a new name, a gift.' },
          ],
        },
      ],
    },
    {
      id: 'what',
      title: 'What do rituals do?',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Bind', title: 'Create solidarity', body: 'Synchronised action, such as singing, marching or dancing, increases feelings of closeness and cooperation in experiments.' },
            { tag: 'Signal', title: 'Costly commitment', body: 'Rituals that are costly, such as fasting and painful initiations, can signal commitment and screen out free riders. Richard Sosis found that communes with more demanding rituals lasted longer.' },
            { tag: 'Mark', title: 'Mark transitions', body: 'Rites of passage make changes of status public, so everyone knows who is now an adult, married or a leader.' },
            { tag: 'Cope', title: 'Handle uncertainty and grief', body: 'Funerals and healing rites give structure to loss and fear. Evidence from studies of rituals in stress suggests they can reduce anxiety.' },
            { tag: 'Communicate', title: 'Say things that cannot be said', body: 'Ritual speaks in symbol and action: a handshake, a toast, a vow.' },
            { tag: 'Order', title: 'Keep the social order', body: 'Ceremonies reinforce roles and authority, and can also dramatise resistance, as in carnival.' },
          ],
        },
      ],
    },
    {
      id: 'belief',
      title: 'Why do people believe? Cognitive and evolutionary approaches',
      blocks: [
        { t: 'p', text: 'Since the 1990s, researchers such as Pascal Boyer and Scott Atran have argued that religious ideas draw on ordinary mental tools. We are quick to detect agents (a rustle in the grass might be a predator), to think in terms of purposes and minds, and to remember ideas that are mostly ordinary but with one violation of expectations, such as a talking tree or a ghost who walks through walls. These “minimally counterintuitive” ideas are memorable and easily spread.' },
        {
          t: 'table',
          head: ['Idea', 'Claim', 'Status'],
          rows: [
            ['Hyperactive agency detection', 'We over-detect minds and intentions, a useful bias that makes gods and spirits easy to imagine', 'Influential; evidence is mixed'],
            ['Minimally counterintuitive concepts', 'Concepts that break a few expectations are most memorable', 'Supported by experiments'],
            ['Moralising high gods and large societies', 'Gods who watch and punish wrongdoing promote cooperation among strangers (Norenzayan)', 'Debated; a large database of historical societies (Seshat, 2019) found that moralising gods tended to appear after societies became large and complex, not before'],
            ['Religion as costly signalling', 'Demanding practice signals commitment', 'Supported in studies of communes and some groups'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Is belief the point?', text: 'Many anthropologists argue that “belief” (a mental state of assent to propositions) is a Western, Christian-shaped way of understanding religion. In many societies, participating in rituals, following customs and belonging matter more than affirming doctrine. Talal Asad and others have criticised the idea that religion is a universal category of private belief.' },
      ],
    },
    {
      id: 'myth',
      title: 'Myth, magic and the modern world',
      blocks: [
        {
          t: 'list',
          items: [
            '**Myth** is a story that explains or sanctions something important: the origins of the world, a custom or a people. Lévi-Strauss looked for the patterns beneath them; Malinowski saw them as a “charter” for social institutions.',
            '**Magic and religion**: Frazer distinguished them (magic compels; religion appeals), but ethnographic cases blur the line.',
            '**Witchcraft accusations** often occur during tension and misfortune and can lead to persecution. Anthropologists study them as a way societies handle conflict and suspicion.',
            '**Secularisation and new religion**: modern societies have rituals around nations, sport, music and wellness. New religious movements and revivals continue worldwide.',
            '**Study religion with respect**: take people’s experience seriously, without needing to share it, and without assuming that it is irrational.',
          ],
        },
        { t: 'links', items: [{ path: 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', note: 'Taboo, purity and norms' }, { path: 'tarot/psychology-and-evidence', note: 'Divination, belief and psychology' }, { path: 'anthropology/meaning/language-thought-and-symbol', note: 'Symbols and language' }] },
      ],
    },
  ],
  sources: [
    'Durkheim, É. (1912/1995). The Elementary Forms of Religious Life. Free Press.',
    'Evans-Pritchard, E. E. (1937). Witchcraft, Oracles and Magic among the Azande. Clarendon Press.',
    'van Gennep, A. (1909/1960). The Rites of Passage. University of Chicago Press.',
    'Turner, V. (1969). The Ritual Process. Aldine.',
    'Boyer, P. (2001). Religion Explained. Basic Books.',
    'Whitehouse, H., et al. (2019). Complex societies precede moralizing gods throughout world history. Nature.',
    'Sosis, R., and Bressler, E. R. (2003). Cooperation and commune longevity: a test of the costly signaling theory of religion. Cross-Cultural Research.',
  ],
  related: ['anthropology/meaning/language-thought-and-symbol', 'anthropology/conventions-and-conformity/norms-taboos-and-etiquette', 'tarot/psychology-and-evidence'],
}

export default guide
