import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two suspects are questioned separately. Each can stay silent or betray the other. Whatever the other does, betraying is better for you. Yet if both betray, both do worse than if both had stayed silent. This is the prisoner’s dilemma, the most studied game in the social sciences, because it captures a pattern found in arms races, pollution, doping in sport, price wars and the everyday temptation to free ride. This guide sets out the logic, the real-world versions, and the ways societies escape it.',
  nutshell: [
    'In the **prisoner’s dilemma**, defecting is a **dominant strategy**, so the equilibrium is mutual defection, yet mutual cooperation would be better for both.',
    'It is defined by the ordering of payoffs: **T > R > P > S** (temptation, reward, punishment, sucker) and usually **2R > T + S**.',
    'The dilemma is the **structure** of many social problems: individually rational, collectively harmful.',
    'The one-shot game predicts defection. In real life **repetition, reputation, punishment, communication, trust and institutions** change the payoffs, and cooperation is common.',
    'The lesson is not “people are selfish” but “**incentives and structure** decide whether cooperation is stable”.',
  ],
  sections: [
    {
      id: 'story',
      title: 'The story and the structure',
      blocks: [
        { t: 'p', text: 'The game was devised at the RAND Corporation in 1950 by Merrill Flood and Melvin Dresher, and given its prison story by Albert Tucker. Two suspects are held apart. If both stay silent (cooperate with each other) both get a light sentence. If one betrays and the other stays silent, the betrayer goes free and the other gets a heavy sentence. If both betray, both get a moderate sentence.' },
        { t: 'game-lab', viz: 'payoff', preset: 'pd' },
        {
          t: 'table',
          head: ['Symbol', 'Name', 'Meaning', 'In the lab'],
          rows: [
            ['T', 'Temptation', 'You defect, the other cooperates', '5'],
            ['R', 'Reward', 'Both cooperate', '3'],
            ['P', 'Punishment', 'Both defect', '1'],
            ['S', 'Sucker', 'You cooperate, the other defects', '0'],
          ],
          caption: 'A prisoner’s dilemma needs T > R > P > S. Many authors also require 2R > T + S, so that taking turns exploiting each other is not better than steady cooperation.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Why it bites',
          text: 'Whatever the other does, you do better by defecting: if they cooperate you get 5 instead of 3; if they defect you get 1 instead of 0. The other player reasons the same way. Both defect and both get 1, though both would get 3 from cooperating.',
        },
      ],
    },
    {
      id: 'world',
      title: 'Dilemmas in the world',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Cooperate', 'Defect', 'Why it is a dilemma'],
          rows: [
            ['Arms race', 'Both limit weapons', 'Arm', 'Each is safer if it arms, but both spend and are no safer'],
            ['Doping in sport', 'Compete clean', 'Dope', 'Doping helps a lone cheater, and when everyone dopes nobody gains and all take risks'],
            ['Overfishing', 'Fish moderately', 'Overfish', 'My extra catch is mine, the loss of fish stock is shared'],
            ['Price war', 'Keep prices high', 'Undercut', 'The undercutter gains customers; when all undercut, profits fall'],
            ['Climate agreements', 'Cut emissions', 'Carry on', 'The cost is local, the benefit is global'],
            ['Group project', 'Work hard', 'Slack', 'Slacking saves effort, everyone’s grade suffers'],
            ['Queue jumping or littering', 'Follow the rule', 'Break it', 'One violation gains, widespread violation hurts everyone'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Many players', text: 'With many players this becomes a public goods or commons problem: the incentive to free ride grows with group size. Those cases are covered in the society section.' },
      ],
    },
    {
      id: 'escape',
      title: 'How cooperation survives',
      blocks: [
        { t: 'p', text: 'In experiments, people in one-shot dilemmas cooperate more than the theory predicts, often around 30 to 50 per cent of the time. In real life the game is rarely one-shot or anonymous. Several mechanisms change the payoffs or the beliefs, and these are the building blocks of social order.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Repetition', title: 'The shadow of the future', body: 'If you will meet again, defection today invites retaliation tomorrow. Cooperation can be an equilibrium. See repeated games.' },
            { tag: 'Reputation', title: 'Being watched', body: 'Others observe and remember what you do and tell their friends. A good reputation is valuable and defection is costly.' },
            { tag: 'Punishment', title: 'Sanctions and enforcement', body: 'Fines, ostracism, contracts or law add a penalty to defection and change the payoffs, so cooperation becomes the best reply.' },
            { tag: 'Kinship', title: 'Shared interests', body: 'If you care about the other’s payoff (family, friends), the numbers you maximise change. Genes shared with relatives do the same in biology.' },
            { tag: 'Communication', title: 'Talking and promising', body: 'In experiments, face-to-face discussion greatly raises cooperation, though cheap talk is not binding.' },
            { tag: 'Structure', title: 'Who you meet', body: 'Cooperators who can choose to meet other cooperators (neighbourhoods, clubs, networks) do better than those mixed at random.' },
          ],
        },
        {
          t: 'dodont',
          do: ['Ask whether the situation really is a dilemma, or whether repetition and relationships have changed the payoffs.', 'Look for mechanisms that make defection costly or cooperation rewarding.', 'Make cooperation visible and defection detectable.'],
          dont: ['Assume cooperation will survive without any structure.', 'Blame character when incentives are the problem.', 'Assume incentives alone create trust. Norms and shared expectations matter too.'],
        },
        { t: 'links', items: [{ path: 'game-theory/dynamics/repeated-games', note: 'Repetition and the shadow of the future' }, { path: 'game-theory/society/social-dilemmas-and-the-commons', note: 'Many-player dilemmas' }, { path: 'game-theory/society/trust-reputation-and-punishment', note: 'Reputation and punishment' }] },
      ],
    },
  ],
  sources: [
    'Flood, M. M. (1952). Some experimental games. RAND Research Memorandum RM-789.',
    'Poundstone, W. (1992). Prisoner’s Dilemma. Doubleday.',
    'Axelrod, R. (1984). The Evolution of Cooperation. Basic Books.',
    'Sally, D. (1995). Conversation and cooperation in social dilemmas: a meta-analysis of experiments from 1958 to 1992. Rationality and Society.',
  ],
  related: ['game-theory/foundations/nash-equilibrium', 'game-theory/dynamics/repeated-games', 'game-theory/society/social-dilemmas-and-the-commons'],
}

export default guide
