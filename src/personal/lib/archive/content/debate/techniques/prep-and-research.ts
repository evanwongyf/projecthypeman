import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Two completely different kinds of preparation go by the same name. Fifteen minutes with no internet is a thinking exercise, and the skill is generating structure fast. A season on one resolution is a research exercise, and the skill is building files you can find something in under pressure. Preparing for one as if it were the other is a common and expensive mistake.',
  nutshell: [
    'Impromptu prep is **structure generation**: burdens, comparison, two arguments, a split, a weighing sentence.',
    'Long-form prep is **file building**: blocks, frontlines and evidence organised by the argument it answers, not by topic.',
    'General knowledge beats specific knowledge: a few deep **models** of how the world works serve more motions than a hundred facts.',
    'Prepare the other side’s case first. It is the only reliable way to find your own weak link.',
    'Keep a **matter file** of recurring examples: five or six cases you understand properly are worth more than fifty you half-remember.',
  ],
  sections: [
    {
      id: 'impromptu',
      title: 'Fifteen minutes, no internet',
      blocks: [
        { t: 'p', text: 'The order matters more than the content, because the first two minutes determine whether you spend the next thirteen on the real debate. The full sequence is in [case building](@debate/structure/case-building); what follows is the part people get wrong.' },
        {
          t: 'dodont',
          do: [
            'Write the comparison of the two worlds in one line before anything else.',
            'Spend three minutes on their case. This feels like a waste and is the highest-value part of prep.',
            'Cut to two or three arguments and give the rest to your rebuttal notes.',
            'Write the weighing sentence while you still have time to think about it.',
            'Agree taglines out loud so both speakers use the same words.',
          ],
          dont: [
            'Write sentences you intend to say. Scripts break on contact.',
            'Chase a statistic you half-remember; a mechanism you can explain beats a number you cannot source.',
            'Prepare a fourth argument instead of a model.',
            'Spend the last two minutes adding material rather than ordering it.',
          ],
        },
        { t: 'debate-lab', viz: 'motion' },
      ],
    },
    {
      id: 'models',
      title: 'Build models, not fact lists',
      blocks: [
        { t: 'p', text: 'Motions recycle mechanisms far more than they recycle topics. A debater who genuinely understands how incentives, principal-agent problems, collective action and legitimacy work can speak on a motion they have never seen. A debater with a thousand facts and no models cannot.' },
        {
          t: 'table',
          head: ['Model', 'The question it answers', 'Motions it serves'],
          rows: [
            ['Incentives and substitution', 'What do people do instead?', 'Bans, taxes, prohibition, regulation of anything.'],
            ['Collective action', 'Why does no one act when everyone benefits?', 'Climate, unions, public goods, vaccination.'],
            ['Principal and agent', 'Who acts for whom, and with whose information?', 'Governance, corporations, representation, medicine.'],
            ['Legitimacy and consent', 'Why would anyone comply?', 'State power, policing, international law, courts.'],
            ['Signalling', 'What does the policy teach people?', 'Criminal law, education, norms, apologies.'],
            ['Distribution', 'Who gains, who pays, who is worst off?', 'Almost everything economic.'],
            ['Second-best', 'What if the ideal option is unavailable?', 'Aid, harm reduction, negotiation with bad actors.'],
          ],
        },
        { t: 'p', text: 'Related economics and game-theory shelves are directly useful here: see [game theory](@game-theory/foundations/dominance-and-equilibrium) for collective action, and the economics shelf for distribution and incentives.' },
      ],
    },
    {
      id: 'files',
      title: 'Long-form research and files',
      blocks: [
        { t: 'p', text: 'In formats with a season-long topic the constraint is retrieval, not acquisition. A file you cannot search during a round is a file you do not have.' },
        {
          t: 'checklist',
          items: [
            'Organise by argument, not by source: one page per position, with its evidence under it.',
            'Write a **frontline** for every argument of your own: the three attacks it will face and your answers, already drafted.',
            'Tag each piece of evidence with what it proves, in your own words, in one line.',
            'Keep a one-page index. The index is the file; the rest is storage.',
            'Date everything. An out-of-date card that gets called is worse than no card.',
            'Record the full citation, including the author’s qualification: both are quoted in rounds.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Quoting honestly', text: 'Cutting a quotation so that it says something its author did not is the one offence that follows a debater around. Keep the sentence before and after in the file, and read enough that the meaning survives. If the evidence needs trimming to help you, it does not help you.' },
      ],
    },
    {
      id: 'matter',
      title: 'A matter file worth having',
      blocks: [
        { t: 'p', text: 'Six examples you understand properly, each usable on many motions, beats a long list. "Understand properly" means you can state what happened, what caused it, what the counterfactual was, and what it does *not* show.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'A policy that worked', tag: 'Mechanism', body: 'Know why it worked and what conditions it needed — the conditions are what the other side will attack.' },
            { title: 'A policy that backfired', tag: 'Unintended effects', body: 'Your standard answer to "the mechanism will obviously work".' },
            { title: 'An institution that failed slowly', tag: 'Legitimacy', body: 'Useful for every motion about consent and trust.' },
            { title: 'A technological transition', tag: 'Prediction', body: 'The base rate for "this time it is different" claims.' },
            { title: 'A rights case', tag: 'Principle', body: 'One well-understood court case is worth a dozen half-remembered ones.' },
            { title: 'A local example', tag: 'Credibility', body: 'Something from where you live that judges will not have heard framed your way.' },
          ],
        },
      ],
    },
  ],
  related: ['debate/structure/case-building', 'debate/practice/motion-bank', 'debate/formats/american-formats', 'research/sources/evaluating-sources'],
}

export default guide
