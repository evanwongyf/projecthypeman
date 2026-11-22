import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The internet did not suspend human nature or social norms; it gave them new stages. People form communities, develop in-jokes and etiquette, fight over status, spread rumours, gift attention, and build entire economies online. Digital anthropology applies ethnographic methods to these spaces, and to the everyday use of phones and platforms. This guide covers what it finds: how online communities create norms, how platform design shapes behaviour, how memes and attention work, what social media does to social ties, and where the evidence is weaker than the headlines.',
  nutshell: [
    '**Online communities** have norms, roles, rituals and sanctions like any group. Moderators and community rules enforce them.',
    '**Platform affordances** (what the design makes easy) shape behaviour: likes, shares, anonymity, permanence, visibility.',
    '**Context collapse**: people address several audiences at once (friends, family, boss), which changes how they present themselves.',
    '**Attention** is the scarce resource; platforms compete for it. Content that triggers emotion or novelty spreads.',
    '**Effects on well-being, polarisation and “echo chambers”** are debated; evidence is mixed and depends on use, age and context.',
  ],
  sections: [
    {
      id: 'comm',
      title: 'Communities and norms online',
      blocks: [
        { t: 'p', text: 'Howard Rheingold (The Virtual Community, 1993) described early online forums, such as the WELL, in which members supported one another through illness and loss. Tom Boellstorff (Coming of Age in Second Life, 2008) did ethnographic fieldwork inside a virtual world, treating it as a society with its own customs. Gabriella Coleman studied hacker culture and the Anonymous collective (2014), showing how ritual, humour and ethics operate among people who rarely meet.' },
        {
          t: 'table',
          head: ['Feature', 'Online example', 'Offline parallel'],
          rows: [
            ['Entry rituals and jargon', 'Newcomer posts, in-jokes, abbreviations', 'Initiation, slang'],
            ['Norms and sanctions', 'Rules, downvotes, blocking, bans', 'Gossip, ostracism'],
            ['Status', 'Followers, karma, badges, reputation scores', 'Rank, prestige'],
            ['Roles', 'Moderators, lurkers, regulars, trolls', 'Elders, bystanders, troublemakers'],
            ['Gift economies', 'Open-source software, wikis, answers on question sites', 'Reciprocity and gifts'],
            ['Conflict', 'Flame wars, pile-ons, forum splits', 'Feuds and factions'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Online etiquette is an equilibrium too', text: 'Norms such as “do not post in capitals” or “read the rules before posting” are conventions that help strangers coordinate. Communities with clear rules and active moderators tend to last longer, as Ostrom’s design principles for commons suggest.' },
      ],
    },
    {
      id: 'design',
      title: 'How platform design shapes behaviour',
      blocks: [
        {
          t: 'table',
          head: ['Design feature', 'Effect on behaviour'],
          rows: [
            ['Like and share counts', 'Make social proof visible; encourage content that earns approval'],
            ['Infinite scroll and notifications', 'Lower the effort to continue and create variable rewards, which keep people engaged'],
            ['Anonymity or pseudonymity', 'Lowers inhibition: this can help candid support and also encourage hostility'],
            ['Persistence and searchability', 'Words last and can be retrieved years later, raising the stakes of reputation'],
            ['Recommendation algorithms', 'Choose what people see, shaping which ideas spread'],
            ['Friction (reporting tools, rate limits)', 'Can slow harmful spread and give moderators tools'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Context collapse', title: 'One post, many audiences', body: 'danah boyd and Alice Marwick (2011) described how social media merges audiences (friends, family, colleagues), so people craft posts for an imagined mix. Many keep several accounts or use private groups to separate them.' },
            { tag: 'Presentation', title: 'Goffman online', body: 'Profiles are front-stage performances. People curate how they appear, and often compare themselves with others’ highlights.' },
            { tag: 'Memes', title: 'Units of play', body: 'Memes are shared templates that people adapt, a form of cultural play that signals belonging to a group.' },
            { tag: 'Attention', title: 'Competing for it', body: 'Platforms earn by capturing attention, so content that stirs emotion, novelty or outrage tends to travel faster.' },
          ],
        },
      ],
    },
    {
      id: 'ethno',
      title: 'Everyday technology across cultures',
      blocks: [
        { t: 'p', text: 'The Why We Post project (Daniel Miller and colleagues, 2016) studied social media use through long fieldwork in nine communities, from rural China to south-east Turkey to southern India to Trinidad. They found that the same platform is used in very different ways, shaped by local norms of family, class, gender and privacy: it works as a place to show off in one town and as a way to keep things within the extended family in another. People did not simply adopt a global culture: they brought their existing social worlds into the platforms.' },
        {
          t: 'list',
          items: [
            'Smartphones are used for **remittances and money transfer**, farming prices and health information in many countries.',
            '**Messaging groups** (WhatsApp, WeChat, LINE) act as digital extended families, workplaces and neighbourhoods.',
            '**Digital divides** persist: access, skills and language shape who benefits.',
            '**Technology is shaped by users**: people repurpose tools, such as using voice notes as a substitute for writing.',
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence does and does not say',
      blocks: [
        {
          t: 'table',
          head: ['Claim', 'State of the evidence'],
          rows: [
            ['Social media harms mental health', 'Studies find small average associations that depend on how it is used; effects may be larger for some groups (such as heavy users and certain teenagers). Causation is hard to establish and debated'],
            ['Echo chambers cause polarisation', 'Evidence is mixed: many people encounter diverse content, but algorithmic recommendation and selective following can intensify exposure to like-minded content. Findings differ by country and platform'],
            ['Online rumours spread faster than truth', 'A large Twitter study (Vosoughi, Roy and Aral, 2018) found false news spread farther and faster than true news, driven by humans more than bots; replicability across platforms is debated'],
            ['Anonymity makes people cruel', 'It can increase hostility in some settings, but identity-linked platforms also see abuse. Design and moderation matter'],
            ['People have many more friends online', 'Online networks are larger, but the number of close relationships is similar to before (consistent with Dunbar’s layers)'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Treat headlines about “what the internet does to us” sceptically: look for the study design.',
            'Notice how a platform’s design nudges you, and adjust settings and habits.',
            'Treat online communities as real groups with norms: read the rules, and be a good guest.',
            'Check before sharing: copying without thinking is the digital version of herding.',
            'Protect privacy and children: reflect on what is permanent.',
          ],
        },
        { t: 'links', items: [{ path: 'anthropology/conventions-and-conformity/herd-behaviour', note: 'Cascades and viral spread' }, { path: 'cybersecurity/attack-surface/social-engineering', note: 'Phishing and social engineering' }, { path: 'game-theory/society/social-dilemmas-and-the-commons', note: 'Commons and moderation' }] },
      ],
    },
  ],
  sources: [
    'Rheingold, H. (1993). The Virtual Community. Addison-Wesley.',
    'Boellstorff, T. (2008). Coming of Age in Second Life. Princeton University Press.',
    'Coleman, G. (2014). Hacker, Hoaxer, Whistleblower, Spy: The Many Faces of Anonymous. Verso.',
    'Miller, D., et al. (2016). How the World Changed Social Media. UCL Press.',
    'Marwick, A. E., and boyd, d. (2011). I tweet honestly, I tweet passionately: Twitter users, context collapse, and the imagined audience. New Media and Society.',
    'Vosoughi, S., Roy, D., and Aral, S. (2018). The spread of true and false news online. Science.',
    'Orben, A., and Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour.',
  ],
  related: ['anthropology/conventions-and-conformity/herd-behaviour', 'anthropology/modern-life/globalisation-and-change', 'cybersecurity/attack-surface/social-engineering'],
}

export default guide
