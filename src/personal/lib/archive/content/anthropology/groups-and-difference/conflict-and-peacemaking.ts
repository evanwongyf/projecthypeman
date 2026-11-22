import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Is violence in our nature? Are small-scale societies peaceful, or constantly at war? And how do societies without police or courts settle disputes? Anthropology offers evidence on all of these, and the answers are less tidy than either the “noble savage” or the “brutal state of nature”. Rates of violence vary enormously between societies and over time. Peacemaking is also a skill, practised through mediation, compensation and ritual. This guide presents the debates fairly, covers feuds and segmentary opposition, and describes customary and restorative ways of settling disputes.',
  nutshell: [
    'Estimates of **prehistoric and small-scale violence** vary widely and are **debated**: Keeley and Pinker argue that violence was common; Fry and others argue that war was rare among nomadic foragers.',
    'Violence is **shaped by conditions**: resources, population density, state presence, identity, and norms, not a fixed human trait.',
    'In societies without a state, **feuds** are limited by **kin alliances** (segmentary opposition) and by **mediation and compensation**.',
    '**Restorative** and **customary** approaches (sulha, ho’oponopono, community mediation) emphasise repairing relationships.',
    'Societies can move towards peace: **institutions**, **trade**, **shared identity** and **norms of restraint** all help.',
  ],
  sections: [
    {
      id: 'debate',
      title: 'Is war ancient? A debate',
      blocks: [
        {
          t: 'table',
          head: ['Position', 'Main claims', 'Critique'],
          rows: [
            ['War is ancient and common', 'Lawrence Keeley (War Before Civilization, 1996) argued that archaeology and ethnography show that warfare and killing were frequent among prehistoric and small-scale societies. Steven Pinker (2011) argued that violence has declined over history', 'Critics say it counts all forms of violence together, over-samples violent societies and dates, and misreads some skeletal evidence'],
            ['War is rare in the simplest societies', 'Douglas Fry (2006) argued that mobile foragers with no property to defend seldom engaged in group warfare, and that war became common with settled, hierarchical societies', 'Critics point to evidence of massacres in some hunter-gatherer sites (such as Nataruk, Kenya, about 10,000 years ago, though its interpretation is debated)'],
            ['It depends', 'Brian Ferguson and others stress that war depends on conditions (resources, population pressure, contact with states, trade)', 'A middle view with wide support'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'The Yanomami debate', text: 'Napoleon Chagnon (1968, 1988) argued that violent Yanomami men had more children, suggesting evolutionary benefits to violence. Critics (Marshall Sahlins, Brian Ferguson, and others) questioned his data and interpretation, pointing to the effects of outside contact, and to ethical problems. The debate shows how hard it is to infer “human nature” from a single society.' },
      ],
    },
    {
      id: 'feud',
      title: 'Feuds, kinship and balance',
      blocks: [
        { t: 'p', text: 'E. E. Evans-Pritchard (1940) described the Nuer of South Sudan, a pastoral people without chiefs or courts. Disputes were handled by a system of segmentary opposition: groups nested within larger groups, and in a conflict, people joined the side that matched their closest relationship. A well-known summary is “me against my brother; my brother and me against our cousin; my cousin, my brother and me against the village…”. Because everyone knew the alliances would form in response, there was a strong reason to avoid escalation.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Deterrence', title: 'Balance of alliances', body: 'The fear of a wide alliance holds back individuals, as in international deterrence. See the game theory guide on deterrence.' },
            { tag: 'Mediators', title: 'Neutral go-betweens', body: 'Among the Nuer, the “leopard-skin chief” was a ritual specialist who mediated killings, urging acceptance of cattle compensation instead of revenge.' },
            { tag: 'Compensation', title: 'Blood money', body: 'In many societies a killing is settled by payment to the victim’s kin (such as the Islamic diya and Germanic wergild). The price expresses the harm and ends the feud.' },
            { tag: 'Ritual', title: 'Peace ceremonies', body: 'Shared meals, gifts and public oaths restore relationships and mark the end of a dispute.' },
          ],
        },
      ],
    },
    {
      id: 'peace',
      title: 'Making peace',
      blocks: [
        {
          t: 'table',
          head: ['Practice', 'Where', 'Idea'],
          rows: [
            ['Sulha', 'Arab communities in the Middle East', 'Respected elders mediate; the offender asks forgiveness, the victim’s family grants it, and a shared meal seals peace'],
            ['Ho’oponopono', 'Hawaii (traditional practice, adapted today)', 'Family meetings guided by an elder to talk through wrongs, apologise and restore relationships'],
            ['Truth and Reconciliation Commission', 'South Africa (1996 to 2002)', 'Offenders could receive amnesty for political crimes by full public disclosure; aimed at truth and national healing. Evaluations are mixed'],
            ['Gacaca courts', 'Rwanda (2002 to 2012)', 'Community courts tried hundreds of thousands of cases after the 1994 genocide; praised for speed and participation, criticised for lack of fair-trial safeguards'],
            ['Restorative justice conferences', 'New Zealand family group conferences, Canada, many others', 'Offender, victim and community meet to agree how to repair harm. Often associated with lower reoffending in some studies and high victim satisfaction'],
            ['Community mediation', 'Many countries, including Singapore’s community mediation centres', 'Trained volunteers help neighbours resolve disputes without court'],
          ],
          caption: 'Brief summaries. Effects depend on context and implementation.',
        },
        {
          t: 'dodont',
          do: ['Use mediation and restoration alongside, not instead of, protection for victims of serious harm.', 'Involve the community in repairing relationships.', 'Provide face-saving exits so that both sides can agree.'],
          dont: ['Pressure victims to forgive.', 'Assume customary processes are always fair, as they can reproduce unequal power.', 'Assume formal courts are always better.'],
        },
      ],
    },
    {
      id: 'lessons',
      title: 'Lessons',
      blocks: [
        {
          t: 'list',
          items: [
            '**Violence is not a constant**: it rises and falls with conditions, institutions and beliefs.',
            '**Restraint is cultural**: many societies have rules and rituals that limit violence and end feuds.',
            '**Third parties matter**: mediators, elders, courts and neutral states make peace cheaper.',
            '**Identity can be reshaped**: shared goals, trade, intermarriage and common institutions can widen the circle of “us”.',
            '**Beware of simple stories**: both “peaceful savages” and “brutal savages” are stereotypes.',
          ],
        },
        { t: 'links', items: [{ path: 'game-theory/applications/politics-war-and-deterrence', note: 'Deterrence and war' }, { path: 'teaching/singapore/conflict-resolution', note: 'Conflict resolution in schools' }, { path: 'criminology/start-here', note: 'Criminology' }] },
      ],
    },
  ],
  sources: [
    'Keeley, L. H. (1996). War Before Civilization. Oxford University Press.',
    'Fry, D. P. (2006). The Human Potential for Peace. Oxford University Press.',
    'Pinker, S. (2011). The Better Angels of Our Nature. Viking.',
    'Evans-Pritchard, E. E. (1940). The Nuer. Clarendon Press.',
    'Chagnon, N. A. (1988). Life histories, blood revenge, and warfare in a tribal population. Science; Ferguson, R. B. (1995). Yanomami Warfare. School of American Research Press.',
    'Braithwaite, J. (2002). Restorative Justice and Responsive Regulation. Oxford University Press.',
    'Lahr, M. M., et al. (2016). Inter-group violence among early Holocene hunter-gatherers of West Turkana, Kenya. Nature.',
  ],
  related: ['anthropology/groups-and-difference/identity-and-in-groups', 'game-theory/applications/politics-war-and-deterrence', 'teaching/singapore/conflict-resolution'],
}

export default guide
