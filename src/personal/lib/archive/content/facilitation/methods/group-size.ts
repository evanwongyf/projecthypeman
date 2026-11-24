import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Group size is the variable facilitators control most easily and think about least. It sets airtime per person by simple division, it determines how much of the group\u2019s potential is lost to coordination, and it decides whether a method that works for eight collapses at twenty. This page computes all of it, with the two classic results on process loss and the arithmetic of breakouts and report-backs.',
  nutshell: [
    'Airtime per person is session minutes ÷ people, minus whatever the facilitator takes. It is brutal and it is exact.',
    '**Ringelmann** and **Steiner**: actual productivity = potential − process losses, and losses grow with size.',
    '**Production blocking** is the dominant loss in discussion: only one person speaks at a time.',
    'Breakouts of **three** maximise airtime per person without losing the diversity benefit of a group.',
    'The **report-back tax** is the hidden cost: five groups at three minutes is fifteen minutes of plenary nobody listens to.',
    'The **first-voice rule**: whoever speaks first anchors the discussion, so write before you talk.',
  ],
  sections: [
    {
      id: 'airtime',
      title: 'The arithmetic of airtime',
      blocks: [
        {
          t: 'math',
          tex: 'a = \\frac{T(1 - f)}{n}',
          plain: 'Airtime per person is the session length, minus the facilitator\u2019s share, divided by the number of people. There is nothing else in it.',
          where: [
            { sym: 'T', def: 'session length in minutes' },
            { sym: 'f', def: 'the fraction of time the facilitator talks' },
            { sym: 'n', def: 'participants' },
          ],
          worked: {
            title: 'A sixty-minute meeting of sixteen',
            steps: ['Facilitator talks 25% of the time: \\(60 \\times 0.75 = 45\\) participant minutes.', '\\(45 / 16\\)', 'In groups of three instead: each person has \\(45/3\\) minutes of their group\u2019s time.'],
            why: ['framing, instructions, summarising', 'under three minutes each, for the whole hour', 'the same clock, fifteen minutes each'],
            answer: '2.8 minutes each in plenary against 15 minutes each in threes: a five-fold difference from one design decision, before any skill is applied.',
          },
        },
        { t: 'facil-lab', viz: 'airtime' },
        { t: 'p', text: 'The silence model in the lab is deliberately crude — turns handed out at random — and it still shows the shape: as the group grows, the chance that a given person never speaks rises steeply. Real rooms are worse than the model, because turns are not random: they go to the confident, the senior and the quick.' },
      ],
    },
    {
      id: 'losses',
      title: 'Process losses: Ringelmann and Steiner',
      blocks: [
        { t: 'p', text: 'In the 1910s the French agricultural engineer Maximilien Ringelmann measured men pulling on a rope and found that each additional puller added less than the one before: eight men pulled around half of eight times one man\u2019s force. Half a century later Ivo Steiner formalised the idea for any group task.' },
        {
          t: 'math',
          tex: 'AP = PP - PL',
          plain: 'What a group actually achieves is what it could achieve minus what it loses to coordinating and to motivation.',
          where: [
            { sym: 'AP', def: 'actual productivity' },
            { sym: 'PP', def: 'potential productivity: the best the members could do together in principle' },
            { sym: 'PL', def: 'process losses: coordination losses plus motivation losses' },
          ],
          caption: 'Steiner (1972). The value of the formula is that it separates two different problems with two different fixes.',
        },
        {
          t: 'table',
          head: ['Loss', 'Mechanism', 'Fix'],
          rows: [
            ['Coordination: production blocking', 'Only one person can talk at a time; others wait, rehearse and forget.', 'Parallel work: write, pairs, breakouts. See [structured methods](@facilitation/methods/structured-methods).'],
            ['Coordination: airtime scarcity', 'Division. Twenty people cannot each have ten minutes in an hour.', 'Smaller groups, or fewer agenda items.'],
            ['Motivation: social loafing', 'Individual effort is invisible in a group product.', 'Make contributions attributable or countable; assign roles.'],
            ['Motivation: free riding', 'Others will carry it, and I know who.', 'Smaller groups make free riding visible.'],
            ['Motivation: sucker effect', 'The conscientious reduce effort once they notice free riders.', 'Deal with free riding early; it is contagious.'],
            ['Evaluation apprehension', 'Risky ideas are withheld in front of seniors.', 'Anonymity, silent generation, or ask the senior person to speak last.'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'Against the fashionable version', text: 'The honest statement is that losses grow with size for *interdependent* tasks, not that big groups are useless. A group of thirty is excellent at surfacing variety and terrible at drafting a sentence. Design accordingly: diverge wide, converge small.' },
      ],
    },
    {
      id: 'breakouts',
      title: 'Breakout sizing',
      blocks: [
        {
          t: 'table',
          head: ['Size', 'Airtime', 'Behaviour', 'Use for'],
          rows: [
            ['Pairs', 'Highest', 'Nobody can hide; both must speak. Can get stuck if the pair disagrees or both are quiet.', 'Disclosure, practice, fast surfacing, online.'],
            ['Threes', 'Very high', 'The sweet spot: enough diversity to be a group, small enough that silence is conspicuous. A natural observer role appears.', 'Most things, and the default online.'],
            ['Fours', 'High', 'Good for a task with roles. Can split into two pairs if the task is unclear.', 'Structured tasks, 1-2-4-All.'],
            ['Fives to sixes', 'Moderate', 'A leader emerges, and one person usually goes quiet.', 'Café tables, design tasks with artefacts.'],
            ['Sevens to nines', 'Low', 'Two conversations start, or one person chairs. Needs a named facilitator per group.', 'Only with a role structure and a scribe.'],
            ['Ten plus', 'Very low', 'Plenary dynamics: a few voices, visible hierarchy.', 'Presentation, not discussion.'],
          ],
          caption: 'Online, shift every row down by one: a video call of five behaves like a room of seven, because turn-taking cues are weaker.',
        },
        { t: 'p', text: 'The commonly cited "ideal" of four to six for decision groups is reasonable for a *task* group with roles. For a *discussion* phase inside a facilitated session, three is usually better, and the arithmetic in the lab above says why.' },
      ],
    },
    {
      id: 'reportback',
      title: 'The report-back tax',
      blocks: [
        { t: 'p', text: 'Breakouts are nearly free; reporting back is not. The cost grows linearly with the number of groups while the information added per group falls, because later groups repeat earlier ones.' },
        {
          t: 'math',
          tex: 'R = g \\times m, \\qquad g = \\lceil n / k \\rceil',
          plain: 'Report-back time is the number of groups times minutes each, and the number of groups is the room divided by the breakout size, rounded up.',
          where: [
            { sym: 'n', def: 'participants' },
            { sym: 'k', def: 'breakout size' },
            { sym: 'm', def: 'minutes per report' },
          ],
          worked: {
            title: 'Thirty people in threes',
            steps: ['\\(g = \\lceil 30/3 \\rceil = 10\\) groups.', 'At 2 minutes each: \\(R = 20\\) minutes.', 'In a 60-minute session that is a third of the time.', 'Harvest to a shared surface instead: 6 minutes total.'],
            why: ['small groups mean many groups', 'the tax', 'and the last four reports add almost nothing', 'everyone writes at once; you read the clusters aloud'],
            answer: 'Fourteen minutes recovered, and better information, because written harvest does not reward whoever reports most fluently.',
          },
        },
        {
          t: 'checklist',
          items: [
            'Above four groups, do not round-robin. Harvest in writing, or sample two groups and ask the rest only for what has not been said.',
            'Ask for one line, not a summary: "the single thing your three disagreed about".',
            'Collect in parallel — sticky notes, shared board, a scribe per group writing straight onto the wall.',
            'If you must hear every group, cut the breakout time rather than the number of groups; a three-minute breakout with a two-minute report is a bad trade.',
          ],
        },
      ],
    },
    {
      id: 'firstvoice',
      title: 'The first-voice problem',
      blocks: [
        { t: 'p', text: 'Whoever speaks first sets the frame, the register and the acceptable range of answers. This is anchoring, and it is strongest exactly where you least want it: when the first speaker is the most senior person in the room.' },
        {
          t: 'dodont',
          do: [
            'Write before you talk. Sixty seconds of silent writing before any discussion removes most of the anchoring effect.',
            'Ask the senior person to speak last, explicitly and in front of everyone, so it reads as design rather than exclusion.',
            'Start rounds from a different place each time; the person to your left is always the practice volunteer.',
            'Use pairs for the first pass, so the first voice each person hears is a peer.',
          ],
          dont: [
            'Open a generative question with "who wants to start?" — the answer is always the same two people.',
            'Let the sponsor open with their view and then ask for honest input in the same breath.',
            'Use visible dot voting in a status-differentiated room; dots anchor exactly like voices.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The cheapest intervention in facilitation', text: 'Silent writing for sixty seconds, then pairs for two minutes, then the whole group. It costs three minutes, it quadruples airtime, it removes first-voice anchoring, and it is the first half of 1-2-4-All. If you learn one structural habit, learn this one.' },
      ],
    },
  ],
  sources: [
    'Ringelmann, M. (1913) Recherches sur les moteurs animés: Travail de l\u2019homme.',
    'Steiner, I. (1972) Group Process and Productivity. Academic Press.',
    'Diehl, M. and Stroebe, W. (1987) Productivity Loss in Brainstorming Groups, on production blocking.',
    'Karau, S. and Williams, K. (1993) Social Loafing: A Meta-Analytic Review, Journal of Personality and Social Psychology.',
  ],
  related: ['facilitation/methods/structured-methods', 'facilitation/frameworks/session-design', 'facilitation/toolkit/difficult-dynamics', 'facilitation/unity/cohesion'],
}

export default guide
