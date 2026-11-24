import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Almost no argument is lost for being wrong. Arguments are lost for being incomplete: a claim with no mechanism, a mechanism with no impact, an impact with no comparison. This page is the anatomy — the five parts, what each part is for, and the exact sentence a judge writes when one is missing.',
  nutshell: [
    'An argument has five parts: **claim**, **mechanism**, **evidence**, **impact**, **weighing**.',
    'The claim says what to believe. The **mechanism** says why it follows — this is the part novices skip and the part judges reward.',
    'Evidence **supports** a mechanism; it never replaces one. A statistic with no causal story is a coincidence.',
    'An impact says **who it happens to and how much it matters**. Without it, a true argument is irrelevant.',
    'Weighing compares your impact with theirs. It is the only part that can win a round you are otherwise losing.',
    'Academically this is [Toulmin’s model](@debate/schools/toulmin-and-informal-logic) in competition dress: claim, grounds, warrant, backing, qualifier, rebuttal.',
  ],
  sections: [
    {
      id: 'parts',
      title: 'The five parts',
      blocks: [
        {
          t: 'levels',
          caption: 'Each level is worthless without the one below it, and invisible to the judge without the one above.',
          items: [
            { name: 'Claim', body: 'The sentence you want the judge to write down. One line, no hedging, no sub-clauses.', verbs: ['assert'] },
            { name: 'Mechanism', body: 'The chain of steps that makes the claim true. Each step should be something an opponent could deny, which is how you know it is a step and not a restatement.', verbs: ['explain', 'derive'] },
            { name: 'Evidence', body: 'A case, a study, a historical parallel, a number. It makes a step of the mechanism hard to deny.', verbs: ['support', 'illustrate'] },
            { name: 'Impact', body: 'Who this happens to, how many of them, how badly, how soon. The step from true to important.', verbs: ['quantify', 'locate'] },
            { name: 'Weighing', body: 'Why your impact decides the round even granting theirs. The comparative.', verbs: ['compare', 'decide'] },
          ],
        },
        { t: 'debate-lab', viz: 'argument' },
      ],
    },
    {
      id: 'mechanism',
      title: 'The mechanism is the argument',
      blocks: [
        { t: 'p', text: 'Here is the same argument three times, at three levels of completeness. Read them as a judge: at which version do you stop being able to deny it?' },
        {
          t: 'example',
          title: 'One claim, three depths',
          lines: [
            { label: 'Assertion', text: '"Minimum wage rises cause unemployment."' },
            { label: 'One step', text: '"Minimum wage rises cause unemployment, because employers facing higher costs hire fewer people."' },
            { label: 'A real mechanism', text: '"A firm hires a worker while the revenue that worker brings in exceeds their cost. Raise the cost above that line and the marginal hire stops being profitable — not every hire, only the marginal one. So the effect concentrates where margins are thinnest: small firms, in low-wage regions, hiring the least experienced workers."' },
            { label: 'What changed', text: 'The third version names who is affected and why, which also tells you what evidence would test it. It is harder to rebut because it has conceded the easy objections in advance.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The "because … which means … which matters because" test', text: 'Say your claim, then force yourself through three connectives: *because* (mechanism), *which means* (impact), *which matters because* (weighing). If you cannot complete the sentence, you do not yet have an argument — you have a topic.' },
      ],
    },
    {
      id: 'evidence',
      title: 'What evidence can and cannot do',
      blocks: [
        { t: 'p', text: 'Evidence is support for a step in your mechanism. It cannot be the mechanism, because any number is consistent with many stories. The discipline is to say what the evidence is evidence *of*.' },
        {
          t: 'dodont',
          do: [
            'Name the step the evidence supports: "this is why the behavioural response is real, not theoretical".',
            'Give the comparison: a number without a baseline tells a judge nothing.',
            'Use a case study to show the mechanism running in the world at least once.',
            'Concede the limits of your own evidence before they do; it costs almost nothing and buys credibility.',
          ],
          dont: [
            'Pile up three statistics for the same uncontested point.',
            'Cite an authority’s conclusion in place of their reasoning.',
            'Treat a single study as settling a contested empirical question.',
            'Read a card you cannot paraphrase; judges ask, and crossfire punishes.',
          ],
        },
        { t: 'p', text: 'The deeper problem is that debate evidence is usually contested and rarely checkable in the room. That is why mechanism dominates: a judge who cannot verify your number can still verify your reasoning. Fallacies of evidence — base rates, cherry picking, anecdote as data — are catalogued in [fallacies](@debate/systems/fallacies).' },
      ],
    },
    {
      id: 'impact',
      title: 'Impacts: from true to important',
      blocks: [
        { t: 'p', text: 'An impact answers "so what". The useful habit is to ask it three times in a row, because the first answer is usually still a mechanism.' },
        {
          t: 'example',
          title: 'So what, three times',
          lines: [
            { label: 'Claim', text: 'Removing cars from the city centre frees road space.' },
            { label: 'So what?', text: 'Buses move faster.' },
            { label: 'So what?', text: 'Journeys become predictable, so people can rely on them.' },
            { label: 'So what?', text: 'The people who gain are those without a car — poorer, older, and with fewer alternatives — and reliability is what determines whether they can take a job across town.' },
            { label: 'Stop here', text: 'This is an impact: a named group, a described harm, and a reason it matters to them specifically.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Impact inflation', text: 'Escalating every impact to extinction or war is a recognisable habit, and experienced judges discount it. A modest impact with a solid mechanism beats a catastrophic one with three speculative links, because the probability multiplies down the chain.' },
      ],
    },
    {
      id: 'weighing',
      title: 'Weighing, briefly',
      blocks: [
        { t: 'p', text: 'Both sides usually prove something. The round is decided by the comparison, which is why [weighing](@debate/structure/weighing) gets a page of its own. The short version: name the axis — magnitude, probability, scope, timeframe, reversibility — on which you win, and say why that axis is the one that should decide.' },
        { t: 'debate-lab', viz: 'weighing' },
      ],
    },
    {
      id: 'diagnose',
      title: 'Diagnosing your own arguments',
      blocks: [
        {
          t: 'table',
          head: ['Symptom in feedback', 'Missing part', 'Fix'],
          rows: [
            ['"Assertion", "you needed to explain why"', 'Mechanism', 'Add two steps between claim and conclusion, each deniable.'],
            ['"I was not sure what the argument was"', 'Claim', 'Open with a one-line tagline and repeat it when you finish.'],
            ['"Both sides said this, I had to pick"', 'Evidence or mechanism depth', 'Make one step undeniable rather than all of them plausible.'],
            ['"True but I did not see why it mattered"', 'Impact', 'Name the group and the size of the effect on them.'],
            ['"You were ahead here but did not tell me"', 'Weighing', 'In the summary, say which issue decides the round and why it is yours.'],
            ['"Your impact was too speculative"', 'Probability', 'Shorten the causal chain, or argue a smaller impact you can defend.'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The usual distribution', text: 'In novice rounds, the missing part is almost always mechanism. In intermediate rounds it is almost always weighing. Very few rounds at any level are lost because someone did not know enough facts.' },
      ],
    },
  ],
  sources: [
    'Toulmin, S. (1958) The Uses of Argument. Cambridge University Press.',
    'Walton, D. (2006) Fundamentals of Critical Argumentation. Cambridge University Press.',
    'World Universities Debating Championship Debating and Judging Manual, on the assessment of analysis.',
  ],
  related: ['debate/structure/weighing', 'debate/schools/toulmin-and-informal-logic', 'debate/structure/rebuttal-and-clash', 'debate/systems/argumentation-schemes'],
}

export default guide
