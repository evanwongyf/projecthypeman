import type { ArchiveNode } from '../topics'

// Competitive and public debate: the formats and their rules, how an argument and a case are
// built, the techniques that win clashes, the systems that decide rounds, the schools of
// thought behind all of it, and the strategic moves that separate a correct speech from a
// winning one.

export const DEBATE: ArchiveNode = {
  slug: 'debate',
  title: 'Debate',
  blurb:
    'Competitive and public debate from the ground up: every major format and its rules, how arguments and cases are built, refutation and weighing, judging and adjudication systems, the schools of thought from Aristotle to pragma-dialectics, and the strategic tricks that actually win rounds.',
  glyph: '⚖',
  color: 'color-mix(in srgb, var(--pink) 50%, var(--teal))',
  tags: ['debate', 'debating', 'argument', 'rhetoric', 'persuasion', 'bp', 'wsdc', 'policy debate', 'rebuttal', 'adjudication', 'public speaking', 'logic'],
  children: [
    {
      slug: 'start-here',
      title: 'Start here',
      blurb: 'What a debate actually is, what judges reward, the vocabulary in one page, and a route through this shelf depending on which format you have walked into.',
      minutes: 10,
      glyph: '★',
      tags: ['beginner', 'overview', 'roadmap', 'glossary', 'first debate'],
    },
    {
      slug: 'formats',
      title: 'Formats',
      blurb: 'The rulebooks: who speaks, for how long, who may interrupt, and what each format quietly rewards.',
      glyph: '⏱',
      tags: ['formats', 'rules', 'speech times', 'speaker order'],
      children: [
        { slug: 'british-parliamentary', title: 'British Parliamentary', blurb: 'Four teams, eight speeches, two halves per side and a ranking rather than a winner: why BP is a different game from two-team debate.', minutes: 16, tags: ['bp', 'wudc', 'worlds', 'four teams', 'extension', 'whip', 'knifing', 'ranking'] },
        { slug: 'asian-and-world-schools', title: 'Asian Parliamentary and World Schools', blurb: 'Two teams, three speakers, a reply speech and a model: the formats most school and Asian university circuits run.', minutes: 15, tags: ['asian parliamentary', 'wsdc', 'australs', 'reply speech', 'third speaker', 'model', 'content style strategy'] },
        { slug: 'american-formats', title: 'Policy, Lincoln–Douglas and Public Forum', blurb: 'Evidence files, value criteria and lay judges: the three American formats, what each is really testing, and why they speak the way they do.', minutes: 17, tags: ['policy debate', 'cx', 'lincoln douglas', 'public forum', 'flow', 'spreading', 'cards', 'kritik', 'value criterion'] },
        { slug: 'other-formats', title: 'Karl Popper, Oxford-style, moots and Model UN', blurb: 'The formats built for teaching, for audiences, and for law: cross-examination rounds, audience votes, moot courts and committee debate.', minutes: 13, tags: ['karl popper', 'oxford style', 'moot court', 'model un', 'mace', 'audience vote', 'idea'] },
        { slug: 'choosing-and-switching', title: 'Switching formats without starting again', blurb: 'What transfers between formats, what actively hurts you in the next one, and how to retool in a week.', minutes: 11, tags: ['switching', 'transfer', 'adapting', 'crossover', 'habits'] },
      ],
    },
    {
      slug: 'structure',
      title: 'Structure',
      blurb: 'The architecture: an argument, a case, a speech, a clash, and the comparison that decides the round.',
      glyph: '◱',
      tags: ['structure', 'case', 'argument', 'speech', 'signposting'],
      children: [
        { slug: 'argument-anatomy', title: 'The anatomy of an argument', blurb: 'Claim, mechanism, evidence, impact, weighing: the five parts, what each is for, and what a judge writes when one is missing.', minutes: 15, tags: ['claim', 'warrant', 'mechanism', 'evidence', 'impact', 'are', 'assertion', 'analysis'] },
        { slug: 'case-building', title: 'Building a case', blurb: 'From motion to case in fifteen minutes: burdens, definitions, models, the team line and the split.', minutes: 16, tags: ['case', 'definition', 'model', 'burden', 'team line', 'split', 'prep time', 'characterisation'] },
        { slug: 'speaker-roles', title: 'Speaker roles', blurb: 'What each speech is for, in every major format, and the role fulfilment marks that go with it.', minutes: 14, tags: ['speaker roles', 'first speaker', 'third speaker', 'whip', 'reply', 'role fulfilment', 'summary'] },
        { slug: 'rebuttal-and-clash', title: 'Rebuttal and clash', blurb: 'Four-step refutation, grouping the debate into clashes, and the difference between answering a speech and winning an issue.', minutes: 15, tags: ['rebuttal', 'refutation', 'clash', 'grouping', 'line by line', 'engagement', 'frontlining'] },
        { slug: 'weighing', title: 'Weighing and impact calculus', blurb: 'Magnitude, probability, scope, timeframe and reversibility: how judges compare two harms, and how to do the comparison for them.', minutes: 14, tags: ['weighing', 'impact calculus', 'magnitude', 'probability', 'scope', 'timeframe', 'reversibility', 'comparative'] },
        { slug: 'signposting-and-structure-of-a-speech', title: 'Structuring the speech itself', blurb: 'Roadmaps, signposts, time allocation inside a speech, and how to be followable at speed.', minutes: 11, tags: ['signposting', 'roadmap', 'structure', 'time allocation', 'taglines', 'clarity'] },
      ],
    },
    {
      slug: 'techniques',
      title: 'Techniques',
      blurb: 'The moves: refutation patterns, questioning, framing, delivery, and keeping a usable record of the round.',
      glyph: '✦',
      tags: ['techniques', 'skills', 'refutation', 'delivery', 'questions'],
      children: [
        { slug: 'refutation-techniques', title: 'Refutation techniques', blurb: 'Mitigate, turn, even-if, dilemma, counterexample, reductio and the comparative: a named toolkit, with when each one is the right tool.', minutes: 16, tags: ['refutation', 'turn', 'even if', 'mitigation', 'dilemma', 'counterexample', 'reductio', 'concession'] },
        { slug: 'points-and-cross-examination', title: 'Points of information and cross-examination', blurb: 'Asking the question that cannot be answered safely, and answering the one that was asked badly.', minutes: 14, tags: ['poi', 'point of information', 'cross examination', 'crossfire', 'questions', 'heckle', 'protected time'] },
        { slug: 'framing-and-burdens', title: 'Framing and burdens', blurb: 'Setting the standard the debate is judged by, allocating burdens, and the honest limits of a framing move.', minutes: 14, tags: ['framing', 'burden of proof', 'criterion', 'standard', 'characterisation', 'definitional', 'stasis'] },
        { slug: 'delivery-and-style', title: 'Delivery and style', blurb: 'Rate, emphasis, pausing, hands, nerves and the audience: the part that is marked and rarely taught.', minutes: 13, tags: ['delivery', 'style', 'voice', 'pace', 'nerves', 'eye contact', 'public speaking', 'rhetoric'] },
        { slug: 'flowing-and-notes', title: 'Flowing: keeping the record', blurb: 'How to take notes that let you answer eight minutes of material in two, with a worked flow sheet.', minutes: 12, tags: ['flow', 'flowing', 'notes', 'shorthand', 'dropped argument', 'tracking'] },
        { slug: 'prep-and-research', title: 'Prep time and research', blurb: 'Fifteen minutes with no internet, or a season with a topic: how to prepare for both, and how to build a usable file.', minutes: 13, tags: ['prep time', 'research', 'evidence', 'briefs', 'blocks', 'cards', 'matter files', 'current affairs'] },
      ],
    },
    {
      slug: 'systems',
      title: 'Systems',
      blurb: 'The machinery around the round: motions, judging, scoring, tournaments and the formal study of argument.',
      glyph: '⌗',
      tags: ['systems', 'judging', 'adjudication', 'tournaments', 'motions', 'argumentation theory'],
      children: [
        { slug: 'motions-and-burdens', title: 'Motion types and what they ask', blurb: 'Policy, value, fact, actor and counterfactual motions, info slides, and the burdens that follow from each.', minutes: 14, tags: ['motion', 'resolution', 'policy', 'value', 'fact', 'actor', 'regret', 'info slide', 'burden'] },
        { slug: 'judging', title: 'Judging and adjudication', blurb: 'How a decision is actually reached: the average reasonable person, comparative assessment, speaker scales and oral adjudications.', minutes: 16, tags: ['judging', 'adjudication', 'ballot', 'speaker points', 'reasonable person', 'rfd', 'oral adjudication', 'chair panel'] },
        { slug: 'argumentation-schemes', title: 'Argumentation schemes', blurb: 'The recurring argument forms — expert opinion, analogy, consequences, slippery slope — each with the critical questions that test it.', minutes: 15, tags: ['argumentation schemes', 'walton', 'critical questions', 'presumption', 'defeasible', 'analogy', 'practical reasoning'] },
        { slug: 'fallacies', title: 'Fallacies, and what to say instead', blurb: 'Eighteen fallacies grouped by what goes wrong, with the answer you actually give in a round rather than the Latin name.', minutes: 14, tags: ['fallacy', 'fallacies', 'straw man', 'ad hominem', 'slippery slope', 'base rate', 'equivocation', 'logic'] },
        { slug: 'tournaments', title: 'Tournaments: tabs, breaks and power pairing', blurb: 'How rounds are drawn, how teams break, what speaker points really do, and the side bias nobody mentions.', minutes: 12, tags: ['tournament', 'tab', 'power pairing', 'break', 'speaker points', 'side bias', 'draw', 'swing team'] },
      ],
    },
    {
      slug: 'schools',
      title: 'Schools of thought',
      blurb: 'Where the rules came from: classical rhetoric, informal logic, pragma-dialectics, the policy paradigms, and the dialectical traditions outside the Western canon.',
      glyph: '⌘',
      tags: ['schools of thought', 'theory', 'rhetoric', 'dialectic', 'philosophy', 'history'],
      children: [
        { slug: 'classical-rhetoric', title: 'Classical rhetoric', blurb: 'Aristotle’s three appeals, the five canons, stasis theory and the sophists: the oldest technology in the room, and still the most used.', minutes: 16, tags: ['aristotle', 'rhetoric', 'ethos', 'pathos', 'logos', 'stasis theory', 'sophists', 'cicero', 'canons', 'enthymeme'] },
        { slug: 'toulmin-and-informal-logic', title: 'Toulmin and informal logic', blurb: 'Claim, grounds, warrant, backing, qualifier, rebuttal: the model that replaced the syllogism for real arguments, and the field that grew from it.', minutes: 15, tags: ['toulmin', 'warrant', 'backing', 'qualifier', 'informal logic', 'hamblin', 'johnson blair', 'field dependence'] },
        { slug: 'pragma-dialectics', title: 'Pragma-dialectics', blurb: 'Argument as a regulated discussion: the four stages, the ten rules, and what a fallacy becomes when you define it as a broken rule.', minutes: 15, tags: ['pragma dialectics', 'van eemeren', 'grootendorst', 'critical discussion', 'ten rules', 'strategic manoeuvring', 'burden of proof'] },
        { slug: 'policy-paradigms', title: 'The policy paradigms', blurb: 'Stock issues, hypothesis testing, tabula rasa, games playing and the kritik: five answers to the question of what a judge is for.', minutes: 15, tags: ['paradigm', 'stock issues', 'tabula rasa', 'hypothesis testing', 'games playing', 'kritik', 'policymaker', 'theory debate'] },
        { slug: 'dialectic-traditions', title: 'Dialectic beyond the Western canon', blurb: 'Socratic elenchus, Talmudic argument, Nyāya and Tibetan monastic debate, and the Chinese school of names: other answers to how disagreement is conducted.', minutes: 14, tags: ['socratic', 'elenchus', 'talmud', 'nyaya', 'tibetan debate', 'mingjia', 'school of names', 'dialectic', 'buddhist logic'] },
        { slug: 'persuasion-science', title: 'What the evidence says about persuasion', blurb: 'Elaboration likelihood, inoculation, two-sided messages and the backfire effect: where the psychology supports debate practice and where it does not.', minutes: 13, tags: ['persuasion', 'elaboration likelihood', 'inoculation', 'backfire effect', 'two sided message', 'psychology', 'evidence'] },
      ],
    },
    {
      slug: 'winning',
      title: 'Winning',
      blurb: 'Strategy rather than content: the moves that win close rounds, how to spend your time, judge adaptation, and the tricks played on you.',
      glyph: '♛',
      tags: ['strategy', 'tricks', 'tactics', 'winning', 'close rounds'],
      children: [
        { slug: 'winning-tricks', title: 'Twelve moves that win close rounds', blurb: 'Even-if, the pre-empt, the strategic concession, the turn, owning the comparison: the repertoire, with the risk attached to each.', minutes: 16, tags: ['tricks', 'tactics', 'even if', 'pre empt', 'concession', 'turn', 'comparative', 'crystallisation', 'strategy'] },
        { slug: 'strategy-and-time', title: 'Strategy and time allocation', blurb: 'What to drop, when to collapse, how long an argument is worth, and the arithmetic of a two-minute final speech.', minutes: 14, tags: ['strategy', 'time allocation', 'collapsing', 'dropping arguments', 'triage', 'coverage', 'depth'] },
        { slug: 'judge-adaptation', title: 'Reading and adapting to the judge', blurb: 'Lay judge, flow judge, panel: what each actually rewards, and how to adapt without abandoning your case.', minutes: 12, tags: ['judge adaptation', 'lay judge', 'flow judge', 'panel', 'paradigm', 'persuasion', 'ballot'] },
        { slug: 'dirty-tricks', title: 'Dirty tricks, and how to answer them', blurb: 'Squirrels, definitional games, shifting cases, time theft and bullying: recognising them, and beating them in front of a judge.', minutes: 14, tags: ['dirty tricks', 'squirrel', 'definitional challenge', 'shifting case', 'time theft', 'equity', 'bullying', 'spreading'] },
      ],
    },
    {
      slug: 'advanced',
      title: 'Advanced argumentation',
      blurb: 'The technical layer: mapping an argument as a graph, probability and evidence done properly, expected value under uncertainty, and the arithmetic of coverage.',
      glyph: '\u2211',
      tags: ['advanced', 'technical', 'argument mapping', 'probability', 'statistics', 'expected value', 'coverage'],
      children: [
        { slug: 'argument-mapping', title: 'Argument mapping', blurb: 'Drawing an argument as a graph: linked and convergent joints, serial chains, and why one answer at the right node is worth four at the wrong one.', minutes: 18, tags: ['argument mapping', 'linked', 'convergent', 'serial', 'ibis', 'rationale', 'graph', 'premise', 'inference'] },
        { slug: 'probability-and-evidence', title: 'Probability, base rates and evidence', blurb: 'Likelihood ratios, base rates, chained probabilities and calibration: how to argue about numbers without pretending to be a statistician.', minutes: 20, tags: ['probability', 'bayes', 'base rate', 'likelihood ratio', 'calibration', 'evidence', 'statistics', 'uncertainty'] },
        { slug: 'expected-value-and-risk', title: 'Expected value, risk and irreversibility', blurb: 'Expected value, risk aversion, discounting, tail risks and the precautionary principle, and when each of them is the right standard to argue for.', minutes: 19, tags: ['expected value', 'risk aversion', 'discounting', 'tail risk', 'precautionary principle', 'irreversibility', 'pascal', 'utility'] },
        { slug: 'reading-studies', title: 'Reading and attacking a study', blurb: 'Design, sample, effect size, confidence intervals, p-values and publication bias: how to use a study in a round, and the six ways to break one.', minutes: 20, tags: ['study design', 'rct', 'effect size', 'confidence interval', 'p value', 'publication bias', 'meta-analysis', 'external validity'] },
        { slug: 'coverage-and-collapse', title: 'The arithmetic of coverage', blurb: 'Seconds per answer, grouping multipliers, words per minute and the exact trade between depth and coverage, worked through four real speeches.', minutes: 16, tags: ['coverage', 'collapse', 'grouping', 'words per minute', 'triage', '1ar', 'time allocation', 'flow'] },
      ],
    },
    {
      slug: 'casebook',
      title: 'Casebook',
      blurb: 'Annotated rounds: full speeches, questioning and final speeches with a judge\u2019s margin notes, plus the same speech done three ways.',
      glyph: '\u2338',
      tags: ['casebook', 'annotated', 'transcript', 'examples', 'worked round', 'model speeches'],
      children: [
        { slug: 'annotated-round', title: 'An annotated round, speech by speech', blurb: 'A full policy debate from first speech to reply, in transcript, with what the judge wrote in the margin at every turn.', minutes: 24, tags: ['annotated round', 'transcript', 'worked example', 'judge notes', 'clash', 'flow'] },
        { slug: 'annotated-cross-examination', title: 'Three cross-examinations, annotated', blurb: 'One good, one wasted and one that backfired, line by line, with the rebuilt version of each.', minutes: 16, tags: ['cross examination', 'poi', 'transcript', 'questioning', 'annotated', 'crossfire'] },
        { slug: 'three-final-speeches', title: 'The same final speech, three ways', blurb: 'A weak, a competent and a winning closing speech on one motion, marked against what judges actually reward.', minutes: 15, tags: ['final focus', 'reply', 'whip', 'crystallisation', 'summary', 'annotated', 'weighing'] },
      ],
    },
    {
      slug: 'practice',
      title: 'Practice',
      blurb: 'Drills, motions and feedback: the part that turns the rest of the shelf into a skill.',
      glyph: '✎',
      tags: ['practice', 'drills', 'training', 'feedback', 'motions'],
      children: [
        { slug: 'drills', title: 'Drills', blurb: 'Fifteen drills from one-minute impromptus to full flow exercises, each with what it fixes and how to mark it.', minutes: 14, tags: ['drills', 'practice', 'impromptu', 'rebuttal drill', 'training', 'exercises', 'solo practice'] },
        { slug: 'motion-bank', title: 'Motion bank with case sketches', blurb: 'Motions across policy, value, fact, actor and regret, each with the first thing to notice and three lines of case for both sides.', minutes: 15, tags: ['motions', 'motion bank', 'practice motions', 'case sketch', 'burdens', 'prep'] },
        { slug: 'feedback-and-review', title: 'Feedback and self-review', blurb: 'How to read an adjudication, what to record after a round, and a review checklist that improves the next one.', minutes: 11, tags: ['feedback', 'review', 'adjudication', 'self assessment', 'improvement', 'checklist', 'coaching'] },
      ],
    },
  ],
}
