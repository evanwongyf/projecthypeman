import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Modern poker strategy is built on game theory, not psychology, the question is not "can I read my opponent’s face" but "what mix of hands should I bet, such that no matter what my opponent does, they cannot profit by exploiting my pattern?" That question has a precise mathematical answer.',
  nutshell: [
    'A **game-theory optimal (GTO)** strategy is one that cannot be exploited, an opponent who knew your exact strategy in advance still could not beat it by changing their own play.',
    'The core tool is the **indifference principle**: a correctly balanced strategy makes the opponent’s decision a breakeven coin flip, so it no longer matters which choice they make.',
    'A bettor’s **optimal bluffing frequency** and a caller’s **minimum defence frequency (MDF)** are two sides of the same equation, both derived directly from the size of the bet relative to the pot.',
    'Bigger bets require (and permit) a **higher bluff percentage** in the bettor’s range, but also let the opponent **fold more often** and still not be exploitable.',
    'GTO is a defensive, unexploitable baseline, in practice, strong players deliberately deviate from it ("exploitative play") whenever an opponent is known to play in a predictable, suboptimal way.',
  ],
  sections: [
    {
      id: 'the-indifference-principle',
      title: 'The indifference principle',
      blocks: [
        { t: 'p', text: 'Consider a river bet, where no more cards are coming. The bettor’s hand is either genuinely the best hand ("value") or not ("a bluff"). If the bettor only ever bet with the best hand, an observant opponent would simply fold every time they faced a bet, losing nothing to bluffs but also never paying off value bets with a worse hand. If the bettor bluffed too often, the opponent could profitably call every time. The correct mix sits exactly at the point where the opponent is indifferent between calling and folding, neither choice is better than the other, so their decision stops mattering.' },
        {
          t: 'proof',
          claim: 'For a pot P and a bet b, the bettor’s range should contain bluffs at a fraction x = b / (P + 2b) for the caller to be exactly indifferent between calling and folding.',
          given: ['The bettor’s range consists only of hands that always win when called (value) and hands that always lose when called (bluffs), in fraction x bluffs.', 'The caller must decide fold (EV = 0) or call.'],
          steps: [
            { statement: 'If the caller calls: with probability x the bettor was bluffing, and the caller wins the pot plus the bet, +(P+b).', reason: 'A called bluff always loses for the bettor, so the caller collects everything in front of them.' },
            { statement: 'With probability (1−x) the bettor has value, and the caller loses their call, −b.', reason: 'A called value bet always loses for the caller.' },
            { statement: 'EV(call) = x(P+b) − (1−x)b', reason: 'Weighted average of the two outcomes.' },
            { statement: 'Expand: EV(call) = xP + xb − b + xb = xP + 2xb − b', reason: 'Algebraic expansion.' },
            { statement: 'Set EV(call) = 0 for indifference: xP + 2xb − b = 0, so x(P + 2b) = b', reason: 'Indifference means calling and folding are equally good (both worth 0), the defining condition of a balanced strategy.' },
            { statement: 'x = b / (P + 2b)', reason: 'Solve for x.' },
          ],
          method: 'direct',
          note: 'This is the same algebra behind both the bettor’s optimal bluffing frequency and (from the caller’s side of the same equation) the minimum defence frequency below.',
        },
      ],
    },
    {
      id: 'the-numbers',
      title: 'What the numbers actually look like',
      blocks: [
        { t: 'games-viz', viz: 'poker-bluff' },
        {
          t: 'table',
          head: ['Bet size', "Bettor's optimal bluff share of their betting range", "Caller's minimum defence frequency"],
          rows: [
            ['1/4 pot', '≈16.7%', '80%'],
            ['1/2 pot', '25%', '≈66.7%'],
            ['Pot-sized bet', '≈33.3%', '50%'],
            ['2× pot (overbet)', '40%', '33.3%'],
          ],
          caption: 'Minimum defence frequency (MDF) uses the simpler ratio pot/(pot+bet), it tells the caller the minimum percentage of their range they must continue with (call or raise) to avoid being profitably bluffed into folding too often. Note the two numbers move in opposite directions as bet size grows: bigger bets want more bluffs in absolute percentage terms, but demand less defence from the caller as a fraction of their range.',
        },
        { t: 'callout', tone: 'tip', title: 'Why bigger bets can bluff more and still be sound', text: 'It feels counterintuitive that betting bigger lets you bluff a higher percentage of the time, but a bigger bet also makes folding more attractive for the opponent (the MDF drops), so the two effects balance. Neither extreme is automatically better; bet sizing in practice also depends on what hands are actually in each player’s realistic range, not just this baseline formula.' },
      ],
    },
    {
      id: 'gto-vs-exploitative',
      title: 'GTO as a baseline, not a finish line',
      blocks: [
        { t: 'p', text: 'A perfectly balanced, game-theory-optimal strategy guarantees you cannot be exploited, but it also does not maximise winnings against an opponent who is making mistakes. If an opponent folds far more than their minimum defence frequency, the maximally profitable response is to bluff them even more than GTO calls for, deliberately becoming exploitable in return for extracting more value from a specific, known weakness.' },
        {
          t: 'dodont',
          do: ['Use GTO concepts as the unexploitable default when you do not have reliable information about an opponent', 'Deviate deliberately and specifically when you have good evidence an opponent plays in an exploitable pattern (folds too much, calls too much, never bluffs)', 'Remember MDF and bluffing-frequency numbers are baselines derived for a simplified river spot, real hands have ranges, blockers and multiple streets that shift the exact numbers'],
          dont: ['Treat "I read a GTO percentage" as a substitute for actually having a strong hand or a credible bluff, the maths tells you the right ratio across your whole range, not what to do with any one specific hand', 'Assume every opponent plays close to game-theory optimal, most human opponents, especially at lower stakes, deviate substantially, which is exactly what makes exploitative adjustments profitable'],
        },
        { t: 'callout', tone: 'fact', title: 'Solved by computers, not by hand', text: 'Modern "solvers"software that computes near-exact GTO strategies for specific situations, only became widely accessible to serious players in the 2010s. Before that, players approximated these concepts with rules of thumb; the underlying game theory itself (extending work on imperfect-information games originally formalised by John von Neumann and later John Nash) is much older than its practical application at the poker table.' },
      ],
    },
  ],
  sources: [
    'Chen, B., & Ankenman, J. (2006). *The Mathematics of Poker*. ConJelCo.',
    'Sklansky, D. (1999). *The Theory of Poker* (4th ed.). Two Plus Two Publishing.',
    'Janda, T. (2019). *Applications of No-Limit Hold’em*. TPC Poker.',
  ],
  related: ['games/poker/pot-odds-and-outs', 'games/poker/variance-and-bankroll', 'ai/algorithms/logistic-regression'],
}

export default guide
