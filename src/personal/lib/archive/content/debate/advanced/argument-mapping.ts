import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An argument is a graph, and almost nobody draws it. Drawn, it answers the question that decides rebuttal time: which single answer kills the most? The technique is twenty minutes to learn, it is used in intelligence analysis, software architecture and appellate law, and in debate it converts a vague sense that something is weak into a named node with a dependency count.',
  nutshell: [
    'A map has three node types: **premises** (what they assert), **inferences** (what the premises license) and the **conclusion**.',
    'Joints come in two kinds. A **linked** joint needs every input: kill one and the joint dies. A **convergent** joint needs only one: kill all but one and it survives.',
    'A **serial** chain multiplies probability. Each extra link costs more than the extra magnitude buys.',
    'The right attack is the live node with the highest **dependency count** that you can actually break.',
    'Three examples supporting one claim is convergent, so answering one example achieves almost nothing — a mistake made in every novice round.',
    'Mapping is also a prep tool: build your own map and the holes are visible before the other side finds them.',
  ],
  sections: [
    {
      id: 'why',
      title: 'Why draw it',
      blocks: [
        { t: 'p', text: 'Two speakers hear the same seven-minute case. The first writes a list of seven things to answer and gets through four. The second notices that five of the seven depend on one claim about enforcement, answers that claim for ninety seconds, and spends the rest of the speech on weighing. The second speaker has not worked harder; they have seen the shape.' },
        { t: 'p', text: 'This is the practical payoff of mapping. The academic payoff is that it forces you to state the **warrant** — the step from grounds to claim that [Toulmin](@debate/schools/toulmin-and-informal-logic) named — because a map with a missing arrow is visibly incomplete in a way that a paragraph is not.' },
        {
          t: 'callout',
          tone: 'fact',
          title: 'What the research says about teaching it',
          text: 'Studies of argument-mapping instruction (van Gelder and colleagues, using the Rationale software with undergraduates) report unusually large gains on critical-thinking tests over a semester — around 0.7 to 0.8 standard deviations, against roughly 0.1 for a conventional course. Treat the exact number with the caution any single programme’s results deserve, but the direction is consistent: making structure visible teaches structure.',
        },
      ],
    },
    {
      id: 'notation',
      title: 'The notation',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Premise', def: 'A claim offered without further support in this argument. A leaf of the graph. If it is contested and unsupported, say so: an unsupported premise is a free attack.' },
            { term: 'Inference', def: 'An intermediate claim derived from premises. Where the real work happens, and where novices never look.' },
            { term: 'Conclusion', def: 'What the argument is for. In debate, what the speaker wants the judge to weigh.' },
            { term: 'Linked joint', def: 'Inputs that work only together. Grounds plus warrant; a policy’s mechanism plus its enforceability. Kill any one input and the joint falls.' },
            { term: 'Convergent joint', def: 'Independent inputs each sufficient. Three case studies for one claim; two separate reasons for a policy. Killing one leaves the others.' },
            { term: 'Serial chain', def: 'A → B → C, each step required. The probability of the whole is the product; the weakest link sets the value.' },
            { term: 'Rebutting defeater', def: 'An attack on the claim itself: the conclusion is false.' },
            { term: 'Undercutting defeater', def: 'An attack on the inference: the premises may be true but they do not support the claim. Usually the cheaper kill.' },
            { term: 'Dependency count', def: 'How many live nodes fall if this node falls. The number you want before choosing where to spend ninety seconds.' },
          ],
        },
        {
          t: 'diagram',
          title: 'Linked and convergent, side by side',
          nodes: [
            { id: 'l1', label: 'Mechanism works', sub: 'premise', col: 0, row: 0, tone: 'teal' },
            { id: 'l2', label: 'Policy is enforceable', sub: 'premise', col: 0, row: 1, tone: 'teal' },
            { id: 'lj', label: 'The policy produces the gain', sub: 'LINKED: needs both', col: 1, row: 0.5, tone: 'orange' },
            { id: 'c1', label: 'Case study A', sub: 'premise', col: 0, row: 3, tone: 'mint' },
            { id: 'c2', label: 'Case study B', sub: 'premise', col: 0, row: 4, tone: 'mint' },
            { id: 'c3', label: 'Case study C', sub: 'premise', col: 0, row: 5, tone: 'mint' },
            { id: 'cj', label: 'It has worked somewhere', sub: 'CONVERGENT: needs one', col: 1, row: 4, tone: 'mustard' },
            { id: 'top', label: 'Vote proposition', sub: 'conclusion', col: 2, row: 2, shape: 'pill', tone: 'ink' },
          ],
          edges: [
            { from: 'l1', to: 'lj' },
            { from: 'l2', to: 'lj' },
            { from: 'c1', to: 'cj', dashed: true },
            { from: 'c2', to: 'cj', dashed: true },
            { from: 'c3', to: 'cj', dashed: true },
            { from: 'lj', to: 'top' },
            { from: 'cj', to: 'top' },
          ],
          caption: 'Solid arrows into a linked joint, dashed into a convergent one. One answer at the linked joint beats three at the case studies, and takes a third of the time.',
        },
      ],
    },
    {
      id: 'lab',
      title: 'Try the propagation',
      blocks: [
        { t: 'p', text: 'Tap nodes to answer them and watch what falls. The first map is the city-cars argument used throughout this shelf; the second is a long chain on AI deployment, which shows the other lesson — a single linked node low in a long chain makes everything above it unreachable.' },
        { t: 'debate-lab', viz: 'map' },
        {
          t: 'checklist',
          items: [
            'Kill the substitution premise in the first map and note that three pieces of evidence survive while the conclusion still dies.',
            'Now kill one case study instead. Nothing happens. That is the convergent joint.',
            'In the AI map, kill enforceability and read how much of the map greys out from one answer.',
            'Count, for each node, how many others depend on it. That ranking is your rebuttal order.',
          ],
        },
      ],
    },
    {
      id: 'building',
      title: 'Building a map in ninety seconds',
      lead: 'Fast enough to do live, in the margin of your flow.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Write the conclusion on the right', body: 'In their words. If you cannot state it, flow it again before mapping.' },
            { title: 'Ask what it rests on', body: 'Two or three claims, written to its left. Use their taglines where they gave them.' },
            { title: 'Mark each joint L or C', body: 'One letter per joint. This is the whole technique; everything else is drawing.' },
            { title: 'Circle any node with nothing beneath it', body: 'Unsupported premises. Free attacks, and the first thing to say.' },
            { title: 'Number nodes by dependency count', body: 'How many live nodes fall with it. Answer in that order until your time runs out.' },
          ],
        },
        {
          t: 'example',
          title: 'A live map, drawn in the margin',
          lines: [
            { label: 'Heard', text: '"Compulsory voting raises turnout, turnout tracks wealth, so compulsory voting makes government answer to the poor as well as the rich."' },
            { label: 'Conclusion', text: 'Government becomes more responsive to poorer voters.' },
            { label: 'Rests on (L)', text: '(a) turnout rises; (b) the new voters are disproportionately poor; (c) politicians respond to votes rather than to money.' },
            { label: 'Unsupported', text: '(c) was asserted with nothing beneath it.' },
            { label: 'Dependency count', text: '(c) carries the conclusion alone, since the joint is linked. One ninety-second answer on (c) ends the argument; three minutes on turnout statistics ends nothing, because they can concede (a) and still win.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The cheapest version of this habit', text: 'You do not need boxes. Write their conclusion, then write "needs:" and list what it needs, with L or C. Under pressure, that one line does most of the work a full map does.' },
      ],
    },
    {
      id: 'attacking',
      title: 'Choosing the attack from the map',
      blocks: [
        {
          t: 'table',
          head: ['What the map shows', 'The attack to run', 'Why'],
          rows: [
            ['A linked joint with an unsupported input', 'Deny that input', 'Highest payoff available: one answer, whole branch gone, and they have no support to fall back on.'],
            ['A linked joint with well-supported inputs', 'Undercut the inference', 'Grant the premises and deny that they license the step. Cheaper than fighting the evidence.'],
            ['A convergent joint with three examples', 'Attack the shared feature, not the examples', '"All three had a funded treatment programme we are not funding." One answer instead of three.'],
            ['A long serial chain', 'Name the weakest link and demand it be defended', 'Probability multiplies; see [probability and evidence](@debate/advanced/probability-and-evidence).'],
            ['Two independent branches to one conclusion', 'Weigh, do not rebut both', 'If you cannot kill both, your time is better spent making the conclusion matter less. See [weighing](@debate/structure/weighing).'],
            ['Your own map with a thin node', 'Pre-empt it', 'You have found the attack before they did; answer it in your own speech. See [winning tricks](@debate/winning/winning-tricks).'],
          ],
        },
        { t: 'p', text: 'The deeper point is about where arguments really fail. Debaters attack premises because premises are what gets said out loud. Maps show that most cases fail at the **inference**, which is the part nobody said at all — so the undercutting defeater is both the commonest opportunity and the least used.' },
      ],
    },
    {
      id: 'ibis',
      title: 'IBIS: mapping a disagreement rather than an argument',
      blocks: [
        { t: 'p', text: 'There is a second mapping notation worth knowing, from a different tradition. **IBIS** — issue-based information system, devised by Horst Rittel and developed into Dialogue Mapping by Jeff Conklin — maps a conversation rather than one person’s argument. It has three node types: Questions, Ideas that answer them, and Arguments that support or object to those ideas.' },
        {
          t: 'table',
          head: ['Toulmin / argument maps', 'IBIS / dialogue maps'],
          rows: [
            ['Maps one argument’s structure.', 'Maps a group’s disagreement as it unfolds.'],
            ['Nodes: premise, inference, conclusion.', 'Nodes: question, idea, pro, con.'],
            ['Used to test or attack a case.', 'Used to keep a conversation coherent and visible.'],
            ['Good for debate prep and rebuttal.', 'Good for facilitation and wicked problems.'],
          ],
          caption: 'The facilitation side of this notation, including how to map live on a shared display, is on the facilitation shelf: [dialogue mapping](@facilitation/methods/dialogue-mapping).',
        },
        { t: 'p', text: 'For a debater the use is narrower but real: in a multi-issue round, an IBIS sketch of the *debate* rather than of one case tells you which questions have ideas with no objections attached — which is to say, which issues are being conceded without anyone noticing.' },
      ],
    },
    {
      id: 'drills',
      title: 'Drills',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Map an op-ed', tag: '10 min', body: 'One newspaper column, mapped. Mark every joint L or C and circle unsupported premises. Most columns turn out to be one linked joint with a decorative convergent cloud beneath it.' },
            { title: 'Map your own case', tag: 'Prep habit', body: 'Before every practice round. The node you least want to defend is the one the other side will find; pre-empt it.' },
            { title: 'Dependency ranking', tag: '5 min', body: 'Given a map, rank the nodes by how many others fall with them. Then compare with where you actually spent time in the last round.' },
            { title: 'Undercut only', tag: '10 min', body: 'Answer ten arguments without denying a single premise. Forces the inference attack, which is the one nobody practises.' },
            { title: 'Convergent trap', tag: '5 min', body: 'Partner gives three examples for one claim; you must answer all three with one sentence by naming the shared assumption.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'van Gelder, T. (2005) Teaching Critical Thinking: Some Lessons from Cognitive Science, College Teaching.',
    'Twardy, C. (2004) Argument Maps Improve Critical Thinking, Teaching Philosophy.',
    'Walton, D., Reed, C. and Macagno, F. (2008) Argumentation Schemes. Cambridge University Press, on linked and convergent structure.',
    'Conklin, J. (2005) Dialogue Mapping: Building Shared Understanding of Wicked Problems. Wiley.',
    'Pollock, J. (1987) Defeasible Reasoning, Cognitive Science, on rebutting versus undercutting defeaters.',
  ],
  related: ['debate/structure/argument-anatomy', 'debate/schools/toulmin-and-informal-logic', 'debate/advanced/probability-and-evidence', 'facilitation/methods/dialogue-mapping'],
}

export default guide
