import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1958 Stephen Toulmin pointed out that the arguments people actually make do not look like syllogisms, and that judging them by formal validity declares almost all real reasoning defective. His replacement model — six parts, including a step nobody had named — is the direct ancestor of the way debate is taught today.',
  nutshell: [
    'Six parts: **claim**, **grounds**, **warrant**, **backing**, **qualifier**, **rebuttal**.',
    'The **warrant** is the step from grounds to claim. It is what debate coaches call the mechanism, and the part novices omit.',
    'The **qualifier** ("usually", "probably") is part of the argument, not hedging: it states how strongly the claim is held.',
    'Toulmin’s **rebuttal** field names the conditions under which the argument fails — pre-empting, built into the model.',
    'Argument standards are **field-dependent**: what counts as sufficient support differs between law, medicine and policy.',
    'Informal logic — Hamblin, Johnson and Blair — grew from this into the standards of **relevance, sufficiency and acceptability**.',
  ],
  sections: [
    {
      id: 'model',
      title: 'The model',
      blocks: [
        {
          t: 'diagram',
          title: 'Toulmin’s layout of an argument',
          nodes: [
            { id: 'g', label: 'Grounds', sub: 'the data', col: 0, row: 1, tone: 'teal' },
            { id: 'q', label: 'Qualifier', sub: 'probably', col: 2, row: 0, shape: 'pill', tone: 'mint' },
            { id: 'c', label: 'Claim', sub: 'the conclusion', col: 3, row: 1, shape: 'pill', tone: 'ink' },
            { id: 'w', label: 'Warrant', sub: 'why grounds support claim', col: 1, row: 2, tone: 'mustard' },
            { id: 'b', label: 'Backing', sub: 'support for the warrant', col: 1, row: 3, tone: 'orange' },
            { id: 'r', label: 'Rebuttal', sub: 'unless …', col: 3, row: 3, shape: 'diamond', tone: 'pink' },
          ],
          edges: [
            { from: 'g', to: 'c' },
            { from: 'w', to: 'c', label: 'licenses' },
            { from: 'b', to: 'w', label: 'supports' },
            { from: 'q', to: 'c' },
            { from: 'r', to: 'c', label: 'defeats', dashed: true },
          ],
          caption: 'The grounds and the claim are what speakers say out loud. The warrant is usually left implicit, which is exactly where arguments break.',
        },
        {
          t: 'example',
          title: 'One argument, all six parts',
          lines: [
            { label: 'Grounds', text: 'Congestion charging in London cut traffic in the zone by about a fifth.' },
            { label: 'Claim', text: 'Pricing road access reduces car use in dense cities.' },
            { label: 'Warrant', text: 'Drivers respond to price when a substitute exists, and in dense cities public transport is a substitute.' },
            { label: 'Backing', text: 'A large body of transport-demand work finding non-trivial price elasticity for discretionary journeys.' },
            { label: 'Qualifier', text: 'Typically, in cities with usable public transport.' },
            { label: 'Rebuttal', text: 'Unless the city lacks alternatives, in which case the charge is a tax rather than a deterrent.' },
          ],
        },
      ],
    },
    {
      id: 'warrant',
      title: 'Why the warrant is the discovery',
      blocks: [
        { t: 'p', text: 'Before Toulmin, the step from evidence to conclusion was treated as either a formal entailment or nothing at all. Naming it as a separate component with its own support does two things for a debater: it tells you where to attack, and it tells you what your own argument is missing.' },
        {
          t: 'table',
          head: ['Attack on', 'Sounds like', 'Effect'],
          rows: [
            ['Grounds', '"That figure is from a different scheme."', 'Kills this instance; they may find other grounds.'],
            ['Warrant', '"Price only deters when there is an alternative, and here there is none."', 'Kills the argument, because the grounds no longer reach the claim.'],
            ['Backing', '"The elasticity literature is about fuel prices, not access charges."', 'Undermines the warrant indirectly; slower but effective.'],
            ['Qualifier', '"Their own claim is only about dense cities — ours is not one."', 'Shrinks the claim to irrelevance without denying it.'],
            ['Rebuttal conditions', '"Their own exception applies to the very case we are discussing."', 'The cleanest kill available: they conceded it in advance.'],
          ],
        },
        { t: 'debate-lab', viz: 'argument' },
        { t: 'p', text: 'The lab’s five parts map onto Toulmin with two changes made for competition: evidence is split from grounds because debaters cite sources, and weighing is added because debate is comparative in a way Toulmin’s single-argument model is not.' },
      ],
    },
    {
      id: 'fields',
      title: 'Field dependence',
      blocks: [
        { t: 'p', text: 'Toulmin’s second major claim: the *form* of argument is field-invariant, but the *standards* are field-dependent. What counts as sufficient evidence in a criminal court is not what counts in epidemiology, which is not what counts in policy under time pressure.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Law', tag: 'Standard', body: 'Beyond reasonable doubt, or balance of probabilities, with strict rules about what may be considered at all.' },
            { title: 'Science', tag: 'Standard', body: 'Replication and effect size; a single study supports a hypothesis, it does not establish it.' },
            { title: 'Policy', tag: 'Standard', body: 'Expected value under uncertainty, with the cost of delay counted against the cost of error.' },
            { title: 'Debate', tag: 'Standard', body: 'What persuades an [average reasonable person](@debate/systems/judging) on the material said in the room.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'A usable framing move', text: '"They are holding us to a scientific standard of proof in a policy debate where the counterfactual is also uncertain." This is field-dependence deployed as framing, and it is one of the most effective burden arguments available.' },
      ],
    },
    {
      id: 'informal',
      title: 'Informal logic after Toulmin',
      blocks: [
        { t: 'p', text: 'Toulmin opened a field. Hamblin’s work on fallacies, and Johnson and Blair’s *Logical Self-Defense*, turned it into a set of criteria that a non-formal argument can be assessed against — the "RSA" triad.' },
        {
          t: 'terms',
          items: [
            { term: 'Relevance', def: 'Do the grounds bear on the claim at all? Failures here are the relevance family of [fallacies](@debate/systems/fallacies).' },
            { term: 'Sufficiency', def: 'Is there enough support for a claim this strong? Most debate rebuttal is a sufficiency objection.' },
            { term: 'Acceptability', def: 'Would the audience grant the premises? This is where field dependence and framing live.' },
            { term: 'Defeasibility', def: 'An argument can be good and still be defeated by new information. Not a flaw: the normal condition of practical reasoning.' },
            { term: 'Dialectical tier', def: 'Johnson’s point that a complete argument must also answer known objections — pre-empting as a logical requirement, not a tactic.' },
          ],
        },
        { t: 'p', text: 'The next step historically is to treat argument as a *procedure* with rules rather than a product with parts: that is [pragma-dialectics](@debate/schools/pragma-dialectics), and the catalogue of recurring forms is [argumentation schemes](@debate/systems/argumentation-schemes).' },
      ],
    },
  ],
  sources: [
    'Toulmin, S. (1958) The Uses of Argument. Cambridge University Press.',
    'Hamblin, C. L. (1970) Fallacies. Methuen.',
    'Johnson, R. and Blair, J. A. (1977, 2006 ed.) Logical Self-Defense. IDEA.',
    'Johnson, R. (2000) Manifest Rationality, on the dialectical tier.',
  ],
  related: ['debate/structure/argument-anatomy', 'debate/systems/argumentation-schemes', 'debate/schools/pragma-dialectics'],
}

export default guide
