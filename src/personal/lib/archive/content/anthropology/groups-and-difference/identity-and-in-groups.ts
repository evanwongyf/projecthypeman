import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'People sort themselves, and one another, into groups: family, village, team, nation, religion, ethnicity, class, fan club. These identities give meaning and belonging, and make cooperation easy within the group. They can also license suspicion and hostility towards outsiders. Social psychology and anthropology have studied how little it takes to produce favouritism, how intergroup conflict arises and what reduces it. This guide covers the minimal group studies, Robbers Cave, the anthropology of ethnicity and nationalism, and the evidence on contact, with care about what is and is not established.',
  nutshell: [
    '**Social identity** (Tajfel): people derive part of their self-worth from the groups they belong to, and favour their own.',
    'In the **minimal group paradigm**, even **arbitrary** labels produce in-group favouritism. Favouritism is easy; hostility needs more.',
    '**Realistic conflict** (Sherif’s Robbers Cave): competition over scarce goals increases hostility; **shared goals** reduce it.',
    '**Ethnicity** is a matter of **boundaries** and belonging (Barth), not a fixed list of traits. **Nations** are “imagined communities” (Anderson).',
    '**Contact** under the right conditions reduces prejudice (Allport; confirmed in a large meta-analysis).',
  ],
  sections: [
    {
      id: 'minimal',
      title: 'How easily groups form',
      blocks: [
        { t: 'p', text: 'Henri Tajfel and colleagues (1971) assigned schoolboys to groups on a trivial basis, for example by claimed preference for paintings by Klee or Kandinsky (actually assigned at random). The boys never met, and had no stake. Asked to divide small sums of money between two anonymous people, they favoured members of their own group, even when it meant giving up a larger joint amount. Social identity theory explains this as the wish for a positive self-image through one’s group.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Categorise', title: 'We sort people', body: 'Putting people into groups is a basic mental economy, and it exaggerates differences between groups and similarities within.' },
            { tag: 'Identify', title: 'We adopt a group', body: 'We take on the group’s identity as part of ourselves, which gives belonging and self-esteem.' },
            { tag: 'Compare', title: 'We favour our own', body: 'We compare our group with others, and are motivated to see it positively.' },
            { tag: 'Limit', title: 'Favouritism is not hatred', body: 'Research finds that in-group love is stronger and more common than out-group hate, though it can easily be turned into hostility.' },
          ],
        },
      ],
    },
    {
      id: 'robbers',
      title: 'Robbers Cave: competition and cooperation',
      blocks: [
        { t: 'p', text: 'In 1954 Muzafer Sherif and colleagues ran a summer camp at Robbers Cave State Park, Oklahoma, for 22 boys aged about eleven. The boys formed two groups, later calling themselves the Eagles and the Rattlers. When the groups competed for prizes, hostility grew quickly: name-calling, raids and fights. To reduce it, the researchers introduced goals that required both groups to work together: fixing a water supply, pooling money to hire a film, and pulling a stuck truck. Hostility eased and friendships formed across groups.' },
        {
          t: 'table',
          head: ['Stage', 'What happened', 'Lesson'],
          rows: [
            ['Group formation', 'Each group built its own norms, names and leaders', 'Groups form quickly around shared activity'],
            ['Competition', 'Tournaments for a trophy produced insults and aggression', 'Competition over scarce rewards fuels conflict'],
            ['Contact alone', 'Meals and shared activities did not reduce hostility', 'Mere contact is not enough'],
            ['Superordinate goals', 'Tasks that both groups needed to complete cooperatively reduced hostility', 'Common goals bring people together'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Read with care', text: 'Gina Perry (The Lost Boys, 2018) found in the archives that Sherif had run an earlier version of the experiment in 1953 where the groups did not turn hostile as expected, and that the researchers shaped events more than the published account suggests. The study is best taken as an illustration of ideas, not conclusive proof.' },
      ],
    },
    {
      id: 'ethnicity',
      title: 'Ethnicity, nations and boundaries',
      blocks: [
        {
          t: 'table',
          head: ['Idea', 'Source', 'Meaning'],
          rows: [
            ['Ethnic boundaries', 'Fredrik Barth (1969)', 'Ethnic groups are defined by the boundary they maintain with others, not by a fixed cultural content. People can change customs and keep the identity'],
            ['Imagined communities', 'Benedict Anderson (1983)', 'A nation is imagined because members will never know most of their fellow members, yet feel a bond. Print, maps and censuses helped create it'],
            ['Invented traditions', 'Hobsbawm and Ranger (1983)', 'Many “ancient” traditions were created recently, such as Scottish clan tartans'],
            ['Primordialism versus constructivism', 'Debate', 'Are ethnic identities deep and given (primordial) or made and remade (constructed)? Most scholars emphasise construction, while recognising that they feel real and deep to those who hold them'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Race', title: 'A social category, not a biological one', body: 'Human genetic variation is real but continuous, and does not divide into clear racial groups. Race as a category is a social construction with real consequences.' },
            { tag: 'Scapegoating', title: 'Blaming outsiders', body: 'Groups under stress often blame a minority. Persecution and violence have followed, and anthropologists study how rumours and stereotypes spread.' },
            { tag: 'Dehumanisation', title: 'Denying humanity', body: 'Language that likens people to animals or vermin precedes violence. Recognising it is a safeguard.' },
            { tag: 'Multiple identities', title: 'We belong to many groups', body: 'A person can be a parent, an engineer, a Singaporean and a supporter of a football club. Which identity matters depends on context.' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      title: 'What reduces prejudice? The contact hypothesis',
      blocks: [
        { t: 'p', text: 'Gordon Allport (1954) proposed that contact between groups reduces prejudice under four conditions: equal status within the situation, common goals, intergroup cooperation (not competition), and support from authorities, laws or customs. A meta-analysis of over 500 studies (Pettigrew and Tropp, 2006) found that intergroup contact is associated with lower prejudice, with an average correlation of about −0.2, and that the conditions help but are not strictly necessary.' },
        {
          t: 'dodont',
          do: ['Create shared, cooperative goals: teams, joint projects, mixed housing and schools with real interaction.', 'Support equal status and institutional backing.', 'Encourage friendships across groups: the effect is stronger when contact becomes friendship.'],
          dont: ['Expect contact alone to work in a competitive or unequal setting.', 'Treat prejudice as only an individual flaw: structures matter.', 'Tell people to “just get along” without changing the conditions.'],
        },
        { t: 'callout', tone: 'note', title: 'A Singapore example', text: 'Singapore’s Housing Board uses ethnic integration quotas in public housing so that blocks and neighbourhoods remain mixed, and schools and national service bring young people of different backgrounds into shared activity. Scholars debate the effects and trade-offs, but the design reflects the idea that everyday contact in a common setting supports harmony.' },
        { t: 'links', items: [{ path: 'game-theory/society/trust-reputation-and-punishment', note: 'Trust and cooperation across groups' }, { path: 'anthropology/groups-and-difference/cultural-variation-in-mind', note: 'Cultural variation' }, { path: 'teaching/singapore/ostracism-and-exclusion', note: 'Exclusion in schools' }] },
      ],
    },
  ],
  sources: [
    'Tajfel, H., Billig, M., Bundy, R. P., and Flament, C. (1971). Social categorization and intergroup behaviour. European Journal of Social Psychology.',
    'Sherif, M., et al. (1961). Intergroup Conflict and Cooperation: The Robbers Cave Experiment. University of Oklahoma.',
    'Perry, G. (2018). The Lost Boys: Inside Muzafer Sherif’s Robbers Cave Experiment. Scribe.',
    'Barth, F. (1969). Ethnic Groups and Boundaries. Little, Brown.',
    'Anderson, B. (1983). Imagined Communities. Verso.',
    'Allport, G. W. (1954). The Nature of Prejudice. Addison-Wesley.',
    'Pettigrew, T. F., and Tropp, L. R. (2006). A meta-analytic test of intergroup contact theory. Journal of Personality and Social Psychology.',
  ],
  related: ['anthropology/groups-and-difference/cultural-variation-in-mind', 'anthropology/groups-and-difference/conflict-and-peacemaking', 'teaching/singapore/ostracism-and-exclusion'],
}

export default guide
