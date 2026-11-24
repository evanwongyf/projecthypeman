import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A cohesive group sticks together: members want to stay, work for each other and recover from setbacks. Cohesion is not the same as everyone liking each other, and too much of the wrong kind produces groupthink. This guide covers what cohesion is, what builds it, and why group size matters so much.',
  nutshell: [
    '**Task cohesion** (commitment to a shared goal) predicts performance more reliably than **social cohesion** (liking each other).',
    '**Superordinate goals**, which no subgroup can reach alone, reduced hostility between groups in Sherif’s Robbers Cave study.',
    'Shared identity grows from **shared challenge, rituals, symbols and stories**.',
    'Communication links grow as **n(n − 1)/2**, so big groups need structure; individual effort tends to drop as groups grow (the **Ringelmann effect**).',
  ],
  sections: [
    {
      id: 'kinds',
      title: 'Kinds of cohesion',
      blocks: [
        { t: 'cards', cols: 2, items: [
          { title: 'Task cohesion', body: 'Members share and commit to the group’s goal and how to achieve it. Meta-analyses (Mullen and Copper, 1994; Beal et al., 2003) find this link to performance is the strongest.' },
          { title: 'Social cohesion', body: 'Members like each other and enjoy being together. Helpful for retention and wellbeing; on its own it can mean a friendly group that gets little done.' },
          { title: 'Group pride', body: 'Members value belonging to the group and its identity. Rituals, names and symbols build it.' },
          { title: 'Too much, of the wrong kind', body: 'High social cohesion plus pressure to agree, an isolated group and a directive leader are Janis’s classic conditions for groupthink.' },
        ] },
      ],
    },
    {
      id: 'robbers-cave',
      title: 'Robbers Cave and superordinate goals',
      blocks: [
        { t: 'p', text: 'In 1954 Muzafer Sherif and colleagues ran a summer camp for 22 eleven-year-old boys in Robbers Cave State Park, Oklahoma. Two groups, the Rattlers and the Eagles, were formed separately, then made to compete. Hostility grew fast: name-calling, flag burning, raids. Contact alone (shared meals, films) did not fix it. What did was a series of **superordinate goals**: a broken water supply, a truck that needed everyone to pull it, a film they could only afford by pooling money.' },
        { t: 'callout', tone: 'warn', title: 'Read it critically', text: 'Later archival work (Perry, 2018) shows the staff manipulated events heavily, and an earlier 1953 camp where the boys refused to turn on each other was left out of the famous account. The superordinate-goal idea is supported by later research on intergroup contact (Allport; Pettigrew and Tropp, 2006), but treat Robbers Cave as a story, not proof.' },
        { t: 'table', head: ['Superordinate goal in a programme', 'Why it works'], rows: [
          ['Build one shelter big enough for the whole class', 'Needs every subgroup’s materials and skills'],
          ['A class challenge score combining all teams', 'Removes the incentive to undermine others'],
          ['Cook a meal for the whole camp with split ingredients', 'Interdependence is built into the resources'],
        ] },
      ],
    },
    {
      id: 'size',
      title: 'The maths of group size',
      blocks: [
        {
          t: 'math',
          tex: String.raw`L = \frac{n(n-1)}{2}`,
          caption: 'The number of one-to-one communication links in a group of n people.',
          plain: 'Every pair of people in a group is a relationship that needs some attention. Each of the n people can pair with the n − 1 others, but that counts every pair twice (Ann–Ben and Ben–Ann), so divide by 2. The number of links grows much faster than the number of people.',
          where: [
            { sym: 'L', def: 'number of pairs (links)' },
            { sym: 'n', def: 'number of people in the group' },
          ],
          syntax: [
            { sym: 'n(n − 1)', say: '“n times n minus one”: each person times everyone else' },
            { sym: '÷ 2', say: 'each pair was counted twice, once from each end' },
          ],
          worked: {
            title: 'Groups of 4, 8 and 30',
            steps: [
              String.raw`\(n = 4\): \(L = 4 \times 3 / 2 = 6\).`,
              String.raw`\(n = 8\): \(L = 8 \times 7 / 2 = 28\).`,
              String.raw`\(n = 30\): \(L = 30 \times 29 / 2 = 435\).`,
              String.raw`Doubling from 4 to 8 people: \(28 / 6 \approx 4.7\) times the links.`,
            ],
            why: [
              'a group of four has six possible pairs',
              'twice the people',
              'a whole class',
              'links grow roughly with the square of the group size',
            ],
            answer: 'A class of 30 has 435 pairs, which is why whole-class discussion is shallow and why groups of 4–6 are the workhorse of facilitation.',
          },
        },
        {
          t: 'math',
          tex: String.raw`E_n \approx E_1 \times (1 - c)^{\,n-1}`,
          caption: 'A simple model of the Ringelmann effect: average effort per person falls as the group grows.',
          plain: 'Max Ringelmann found in the 1910s that people pulling a rope together each pulled less hard than they did alone. A simple way to model this is that every extra person makes each member’s effort drop by a small fraction c. The real cause is a mix of coordination losses and social loafing (people hiding in the crowd).',
          where: [
            { sym: String.raw`E_n`, def: 'average effort per person in a group of n' },
            { sym: String.raw`E_1`, def: 'effort when working alone' },
            { sym: 'c', def: 'fraction lost per extra member (illustrative; around 0.07 fits Ringelmann’s rope data roughly)' },
          ],
          syntax: [
            { sym: String.raw`(1 - c)^{n-1}`, say: '“one minus c, to the power n minus one”: multiply by (1 − c) once for each person after the first' },
            { sym: String.raw`\approx`, say: '“is approximately”' },
          ],
          worked: {
            title: 'Effort in a tug-of-war team of 8',
            steps: [
              String.raw`Let \(E_1 = 100\%\) and \(c = 0.07\).`,
              String.raw`\(n - 1 = 7\), so compute \(0.93^7\).`,
              String.raw`\(0.93^7 \approx 0.60\).`,
              String.raw`\(E_8 \approx 100\% \times 0.60 = 60\%\).`,
            ],
            why: [
              'start from full individual effort and an illustrative loss rate',
              'seven extra people beyond the first',
              'multiply 0.93 by itself seven times',
              'scale the solo effort by that factor',
            ],
            answer: 'Each member gives around 60% of their solo effort, in this simple model. Make individual contributions visible and meaningful (roles, named tasks) to counter loafing.',
          },
        },
      ],
    },
    {
      id: 'builders',
      title: 'Building unity',
      blocks: [
        { t: 'checklist', items: [
          'A clear, shared goal that matters to members',
          'Interdependence: tasks that need everyone',
          'Group identity: a name, a chant, a flag, a story of “us”',
          'Rituals: daily check-ins, a closing circle, a celebration',
          'Visible individual contribution so nobody hides',
          'Shared hardship, chosen and survivable (a long hike, a rainy night)',
          'Inclusive norms that welcome difference',
          'Dissent protected, to avoid groupthink',
        ] },
      ],
    },
    {
      id: 'airtime-lab',
      title: 'The airtime lab',
      lead: 'The first number every facilitator should compute, and almost nobody does.',
      blocks: [
        { t: 'p', text: 'Cohesion is built by people speaking to each other, and group size decides how much of that is arithmetically possible. A 60-minute meeting of 16 gives each person under three minutes even if the facilitator says nothing at all.' },
        { t: 'facil-lab', viz: 'airtime' },
        { t: 'p', text: 'Note the multiplier when you break into threes, and then note the report-back tax underneath it: five groups reporting for three minutes each is fifteen minutes of plenary that nobody is listening to. The process-loss research behind this — Ringelmann, Steiner and production blocking — is in [group size, airtime and process losses](@facilitation/methods/group-size).' },
      ],
    },
  ],
  sources: [
    'Sherif, M. et al. (1961). Intergroup Conflict and Cooperation: The Robbers Cave Experiment. University of Oklahoma.',
    'Perry, G. (2018). The Lost Boys: Inside Muzafer Sherif’s Robbers Cave Experiment. Scribe.',
    'Beal, D. J. et al. (2003). Cohesion and performance in groups: A meta-analytic clarification. Journal of Applied Psychology, 88(6), 989–1004.',
    'Karau, S. J., & Williams, K. D. (1993). Social loafing: A meta-analytic review. Journal of Personality and Social Psychology, 65(4), 681–706.',
    'Janis, I. L. (1982). Groupthink (2nd ed.). Houghton Mifflin.',
  ],
  related: ['facilitation/unity/activities', 'facilitation/unity/team-roles', 'anthropology/start-here'],
}

export default guide
