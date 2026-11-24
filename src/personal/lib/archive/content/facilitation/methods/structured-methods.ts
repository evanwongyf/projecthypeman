import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Open brainstorming is the default method in almost every room and it is one of the few facilitation techniques with a genuinely negative evidence base: groups shouting ideas produce fewer and less original ideas than the same people working alone and pooling afterwards. The structured methods below exist to fix the three specific mechanisms behind that result, and each of them has timings you can run from a watch.',
  nutshell: [
    'Open brainstorming loses to **nominal groups** — same people, working silently then pooling — in most controlled comparisons.',
    'Three mechanisms: **production blocking** (one person talks at a time), **evaluation apprehension**, and **social loafing**.',
    '**Nominal group technique**: silent generation, round-robin, clarify, vote. Four phases, about 60 to 90 minutes.',
    '**Brainwriting 6-3-5**: six people, three ideas, five rounds — 108 ideas in 30 minutes, on paper.',
    '**Delphi**: anonymous rounds with feedback between them, for expert estimates and for rooms with a power imbalance.',
    'Every method here follows one rule: **silent and individual first, visible and shared second**.',
  ],
  sections: [
    {
      id: 'evidence',
      title: 'Why open brainstorming underperforms',
      blocks: [
        { t: 'p', text: 'Osborn’s brainstorming rules (defer judgement, go for quantity, welcome wild ideas, build on others) are sensible and the group format they were packaged in is not. The comparison that matters is against a **nominal group**: the same number of people generating alone and pooling without duplication. Nominal groups usually win on both number and quality of ideas, and the gap widens with group size.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'Production blocking', tag: 'Mechanical', body: 'Only one person can speak at a time, so everyone else waits, and while waiting they rehearse, forget or abandon their idea. This is the largest single effect and it is pure arithmetic — see [group size](@facilitation/methods/group-size).' },
            { title: 'Evaluation apprehension', tag: 'Social', body: 'People withhold the half-formed or risky idea because it will be heard by their manager. Anonymity removes most of it.' },
            { title: 'Social loafing', tag: 'Motivational', body: 'Individual contribution is invisible in a group total, so effort falls. Making contributions attributable — or countable — reverses it.' },
          ],
        },
        { t: 'callout', tone: 'myth', title: '"But our brainstorms feel productive"', text: 'They do, reliably, and that is part of the finding: participants in group brainstorms rate their own output *higher* than nominal-group participants while producing less. The feeling comes from the social experience and from hearing other people’s ideas, both of which are real benefits — so the design answer is not to abolish the group phase but to put it second.' },
      ],
    },
    {
      id: 'ngt',
      title: 'Nominal group technique',
      lead: 'The best-evidenced structured method, and the one to default to for "we need ideas and a shortlist in one session".',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Frame the question (5 min)', body: 'One question, written up, specific enough to answer in a sentence. "What stops us delivering on time?" not "how do we improve?"' },
            { title: 'Silent generation (10 min)', body: 'Everyone writes privately. No talking, no phones. This phase does most of the work and facilitators routinely cut it short.' },
            { title: 'Round-robin (20–30 min)', body: 'One idea per person per turn, recorded verbatim, no discussion. Pass when you have nothing new. Continue until all lists are empty.' },
            { title: 'Clarify (15 min)', body: 'Questions of meaning only, not of merit. Merge genuine duplicates with the authors’ consent.' },
            { title: 'Rank or rate (10 min)', body: 'Each person privately ranks their top five, or scores items 1–10. Sum publicly. Ties are resolved by a second round on the tied items only.' },
            { title: 'Discuss the result (10 min)', body: 'Now, and only now, open discussion — on the shortlist, which is a far better use of the group’s time than generation was.' },
          ],
        },
        {
          t: 'table',
          head: ['Design choice', 'Effect'],
          rows: [
            ['Round-robin rather than open sharing', 'Equalises airtime and removes the first-speaker anchoring effect.'],
            ['Verbatim recording', 'Protects authorship, which is what makes people put the risky idea on the list.'],
            ['Private ranking', 'Removes conformity to the loudest voice and to the manager.'],
            ['Clarification separated from evaluation', 'Stops the first critical comment from freezing the room.'],
            ['Discussion last', 'The group spends its scarcest resource — collective attention — on the items that survived.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The 60-minute version', text: 'Frame 3, silent 8, round-robin 20, clarify 10, rank 8, discuss 11. It fits an hour with twelve people if, and only if, you hold the round-robin to one idea per turn.' },
      ],
    },
    {
      id: 'brainwriting',
      title: 'Brainwriting and 6-3-5',
      blocks: [
        { t: 'p', text: 'Brainwriting removes production blocking entirely by letting everyone "speak" at once, on paper. The formalised version, **6-3-5** (Rohrbach’s *Methode 635*), is worth running once just to see the arithmetic land.' },
        {
          t: 'math',
          tex: 'N = p \\times i \\times r',
          plain: 'The number of ideas is just people times ideas per round times rounds. Nothing about the method depends on inspiration.',
          where: [
            { sym: 'p', def: 'participants' },
            { sym: 'i', def: 'ideas written per person per round' },
            { sym: 'r', def: 'rounds' },
          ],
          worked: {
            title: 'Classic 6-3-5',
            steps: ['6 people × 3 ideas × 5 rounds', '= 90 ideas in 5 × 5 = 25 minutes', 'With 6 rounds (one per other participant): 6 × 3 × 6 = 108'],
            why: ['the canonical setup', 'five minutes a round', 'the full rotation, where every sheet passes every person'],
            answer: 'Around 90 to 108 raw ideas in half an hour, with heavy duplication — expect perhaps 25 to 40 distinct ones, which is still far more than an open brainstorm of the same length.',
          },
        },
        {
          t: 'steps',
          items: [
            { title: 'Set up', body: 'Six people, one sheet each, a grid of three columns and six rows. The question at the top of every sheet.' },
            { title: 'Round one (5 min)', body: 'Each person writes three ideas in the top row. Silence.' },
            { title: 'Pass', body: 'Sheets move one place clockwise.' },
            { title: 'Rounds two to six (5 min each)', body: 'Read what is above, then add three ideas — building on, varying or contradicting what you read. Building is the point: this is where brainwriting beats pure nominal generation.' },
            { title: 'Harvest', body: 'Affinity-cluster the sheets on a wall. Twenty minutes with the whole group, standing.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Brainwriting pool', tag: 'Looser variant', body: 'Sheets go into a pile in the middle; when you stall, swap your sheet for another. Better for uneven groups because nobody is paced by the slowest writer.' },
            { title: 'Silent sticky storm', tag: 'The 10-minute version', body: 'Everyone writes one idea per sticky note for 5 minutes, then posts and clusters in silence for 5. Crude, fast, and still beats open shouting.' },
            { title: 'Online', tag: 'Shared board', body: 'Everyone types into a shared board with their cursor hidden for the first three minutes. Removes anchoring; the hidden phase matters.' },
            { title: 'Chat waterfall', tag: 'Video calls', body: 'Everyone types an answer and nobody presses send until you say go. The simplest anti-anchoring device in online facilitation.' },
          ],
        },
      ],
    },
    {
      id: 'delphi',
      title: 'Delphi: anonymous rounds with feedback',
      blocks: [
        { t: 'p', text: 'Delphi was developed at RAND for expert forecasting, and its facilitation value is wider: it is the method for rooms where status differences would otherwise decide the answer. Participants never meet; they respond, see a summary of everyone’s responses with the reasoning, and respond again.' },
        {
          t: 'steps',
          items: [
            { title: 'Round one', body: 'A question to each participant privately. Often open, to generate the item list.' },
            { title: 'Analyse', body: 'The facilitator groups responses and prepares an anonymous summary: distribution, and the arguments at each end.' },
            { title: 'Round two', body: 'Participants see the summary and revise. Outliers are asked to explain rather than to conform — this is the step people get wrong.' },
            { title: 'Repeat until stable', body: 'Usually two to four rounds. Stop when the distribution stops moving, not when it narrows to a point.' },
            { title: 'Report the spread, not just the median', body: 'A Delphi that reports consensus it did not achieve has destroyed the information it was run to collect.' },
          ],
        },
        {
          t: 'table',
          head: ['Use it when', 'Do not use it when'],
          rows: [
            ['Status differences would silence people.', 'The group needs to build a relationship.'],
            ['The question is an estimate or a prioritisation.', 'The question is a values dispute.'],
            ['Participants are geographically scattered.', 'You need a decision in one meeting.'],
            ['You need the reasoning, not just the vote.', 'Anonymity would let people avoid accountability for a decision they must own.'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Manufactured consensus', text: 'The known failure of Delphi is pressure to converge: people move toward the median because it is the median, not because they were persuaded. The safeguards are to ask outliers for reasons rather than revisions, to publish the arguments and not only the numbers, and to report the final spread honestly. A tight Delphi result with no reasoning attached is worth very little.' },
      ],
    },
    {
      id: 'affinity',
      title: 'Affinity diagramming, done properly',
      blocks: [
        { t: 'p', text: 'Every method above produces a pile of raw items, and the clustering step is where facilitators quietly impose their own categories. The discipline that prevents it comes from the KJ method: cluster in silence, name the clusters last, and let anyone move anything.' },
        {
          t: 'steps',
          items: [
            { title: 'Post everything, unsorted', body: 'One idea per note, legible, on a wall the whole group can reach.' },
            { title: 'Silent clustering (10 min)', body: 'Everyone moves notes at once, without talking. Disagreement is expressed by moving a note back, which is both faster and less personal than arguing.' },
            { title: 'Stop and look', body: 'When movement slows, stop. Orphans are allowed; forcing an orphan into a cluster is how information is lost.' },
            { title: 'Name the clusters last', body: 'A name written before the cluster is stable determines what goes into it. Name with a phrase, not a word: "deadlines set by people who do not do the work".' },
            { title: 'Rank clusters, not items', body: 'Dot-vote the clusters. See [voting systems](@facilitation/methods/voting-systems) for which rule to use and why it matters.' },
          ],
        },
        { t: 'facil-lab', viz: 'voting' },
      ],
    },
    {
      id: 'choosing',
      title: 'Choosing between them',
      blocks: [
        {
          t: 'table',
          head: ['Method', 'Time', 'People', 'Best for', 'Weakness'],
          rows: [
            ['Nominal group technique', '60–90 min', '6–12', 'Ideas plus a ranked shortlist in one session.', 'Round-robin drags above 12 people.'],
            ['Brainwriting 6-3-5', '30 min', '5–7 per table', 'Volume, and building on others without blocking.', 'Heavy duplication; needs a real harvest.'],
            ['Silent sticky storm', '10 min', 'Any', 'A fast divergent phase inside a longer session.', 'Shallow; no clarification phase.'],
            ['Delphi', 'Days to weeks', '8–30', 'Estimates and prioritisation across status differences.', 'Slow; convergence pressure.'],
            ['1-2-4-All', '12 min', 'Any', 'Everyone speaks, fast, with escalating group size.', 'Not a generation method on its own; it surfaces, it does not catalogue.'],
            ['Open brainstorm', '20 min', '4–8', 'Energy, and building a sense of a shared problem.', 'Produces fewer and less original ideas than the alternatives.'],
          ],
          caption: '1-2-4-All and the other Liberating Structures are covered in [Liberating Structures](@facilitation/frameworks/liberating-structures); they combine well as the "pool" phase after silent generation.',
        },
        { t: 'callout', tone: 'fact', title: 'The one-line summary', text: 'Silent and individual first, visible and shared second. Every method on this page is a different implementation of that sentence, and a facilitator who only remembers the sentence will still out-perform the room that shouts.' },
      ],
    },
  ],
  sources: [
    'Diehl, M. and Stroebe, W. (1987) Productivity Loss in Brainstorming Groups, Journal of Personality and Social Psychology.',
    'Mullen, B., Johnson, C. and Salas, E. (1991) Productivity Loss in Brainstorming Groups: A Meta-Analytic Integration, Basic and Applied Social Psychology.',
    'Delbecq, A., Van de Ven, A. and Gustafson, D. (1975) Group Techniques for Program Planning, the standard NGT reference.',
    'Dalkey, N. and Helmer, O. (1963) An Experimental Application of the Delphi Method, Management Science.',
    'Rohrbach, B. (1969) Kreativ nach Regeln: Methode 635.',
  ],
  related: ['facilitation/methods/voting-systems', 'facilitation/methods/group-size', 'facilitation/frameworks/liberating-structures', 'facilitation/toolkit/techniques'],
}

export default guide
