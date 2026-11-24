/**
 * Data for the debate shelf.
 *
 * Formats, their speech orders and times, motion types with each side's burden,
 * a worked argument in parts, a tracked clash for the flow sheet, and a bank of
 * fallacies with the answer a debater actually gives to each. Times are the
 * published rules of the major circuits; where a circuit varies (school versus
 * open, country to country) the note says so rather than pretending one number
 * is universal.
 */

export type Speech = {
  // How the speech is called on the ballot.
  name: string
  // Which bench it is on. 'prop' argues for the motion, 'opp' against it.
  side: 'prop' | 'opp'
  minutes: number
  // What this speech is for, in one line: the role the judge marks against.
  role: string
  // Whether questions from the other side are allowed during it.
  questions?: 'poi' | 'cx' | 'none'
  // New matter is barred in the last speech of most formats.
  noNewMatter?: boolean
}

export type Format = {
  id: string
  name: string
  short: string
  where: string
  // Teams in the room and speakers in each team.
  teams: number
  perTeam: number
  prep: string
  speeches: Speech[]
  // How the win is decided.
  judging: string
  // What the format rewards, and what it punishes.
  rewards: string
  punishes: string
  note: string
}

export const FORMATS: Format[] = [
  {
    id: 'bp',
    name: 'British Parliamentary',
    short: 'BP / WUDC',
    where: 'World Universities Debating Championship, European and most university circuits.',
    teams: 4,
    perTeam: 2,
    prep: '15 minutes, no internet, no pre-written cases.',
    speeches: [
      { name: 'Prime Minister', side: 'prop', minutes: 7, role: 'Define the motion, set the framework, run the opening government case.', questions: 'poi' },
      { name: 'Leader of Opposition', side: 'opp', minutes: 7, role: 'Accept or challenge the definition, rebut, run the opening opposition case.', questions: 'poi' },
      { name: 'Deputy Prime Minister', side: 'prop', minutes: 7, role: 'Rebuild the government case, rebut opposition, add the second half of the split.', questions: 'poi' },
      { name: 'Deputy Leader of Opposition', side: 'opp', minutes: 7, role: 'Rebuild, rebut, complete the opposition case.', questions: 'poi' },
      { name: 'Member for Government', side: 'prop', minutes: 7, role: 'Extend: new material that is consistent with the opening but theirs.', questions: 'poi' },
      { name: 'Member for Opposition', side: 'opp', minutes: 7, role: 'Extend on the opposition bench, and answer the government extension.', questions: 'poi' },
      { name: 'Government Whip', side: 'prop', minutes: 7, role: 'Summarise the debate as clash, show why government wins each one.', questions: 'poi', noNewMatter: true },
      { name: 'Opposition Whip', side: 'opp', minutes: 7, role: 'The same for opposition, and the last word in the room.', questions: 'poi', noNewMatter: true },
    ],
    judging: 'Four teams ranked 1st to 4th; each rank is worth team points, so the opening and closing half of your own side compete with each other.',
    rewards: 'Comparative, judge-facing analysis and a closing half that finds material the opening missed.',
    punishes: 'Repeating your opening half, knifing your own side, and whips who rebut line by line instead of summarising clash.',
    note: 'Points of information are offered between the first and last minute of each speech; speakers are expected to take one or two.',
  },
  {
    id: 'ap',
    name: 'Asian Parliamentary',
    short: 'AP',
    where: 'Asian universities, United Asian Debating Championship, and many school circuits in Asia.',
    teams: 2,
    perTeam: 3,
    prep: '30 minutes on most circuits, no internet.',
    speeches: [
      { name: 'First Government', side: 'prop', minutes: 7, role: 'Define, frame, and run the first two government arguments.', questions: 'poi' },
      { name: 'First Opposition', side: 'opp', minutes: 7, role: 'Accept or challenge the definition, rebut, run the opposition case.', questions: 'poi' },
      { name: 'Second Government', side: 'prop', minutes: 7, role: 'Rebut, rebuild, and add the rest of the government case.', questions: 'poi' },
      { name: 'Second Opposition', side: 'opp', minutes: 7, role: 'Rebut, rebuild, complete the opposition case.', questions: 'poi' },
      { name: 'Third Government', side: 'prop', minutes: 7, role: 'Whole-of-debate rebuttal; no new arguments.', questions: 'poi', noNewMatter: true },
      { name: 'Third Opposition', side: 'opp', minutes: 7, role: 'Whole-of-debate rebuttal; no new arguments.', questions: 'poi', noNewMatter: true },
      { name: 'Government Reply', side: 'prop', minutes: 4, role: 'A biased adjudication: the two or three issues, and why government won them.', questions: 'none', noNewMatter: true },
      { name: 'Opposition Reply', side: 'opp', minutes: 4, role: 'The same, delivered first on some circuits — check the rules.', questions: 'none', noNewMatter: true },
    ],
    judging: 'Two teams, one wins; team and individual speaker scores decide tournament standing.',
    rewards: 'Depth on a smaller number of arguments, and a reply speech that identifies the real clash.',
    punishes: 'Third speakers who smuggle in new arguments, and replies that are just a fourth substantive.',
    note: 'The opposition reply is delivered after the government reply in Australs-style rules; AP convention is usually the reverse. Confirm before the round.',
  },
  {
    id: 'wsdc',
    name: 'World Schools',
    short: 'WSDC',
    where: 'World Schools Debating Championship and most international school competitions.',
    teams: 2,
    perTeam: 3,
    prep: 'Prepared motions are researched in advance; impromptu motions get one hour with no internet.',
    speeches: [
      { name: 'First Proposition', side: 'prop', minutes: 8, role: 'Definition, model if the motion needs one, and the proposition case.', questions: 'poi' },
      { name: 'First Opposition', side: 'opp', minutes: 8, role: 'Engage the model, rebut, and run the opposition case or counter-model.', questions: 'poi' },
      { name: 'Second Proposition', side: 'prop', minutes: 8, role: 'Rebut, rebuild, extend the case.', questions: 'poi' },
      { name: 'Second Opposition', side: 'opp', minutes: 8, role: 'Rebut, rebuild, extend.', questions: 'poi' },
      { name: 'Third Proposition', side: 'prop', minutes: 8, role: 'Issue-by-issue rebuttal of the whole debate.', questions: 'poi', noNewMatter: true },
      { name: 'Third Opposition', side: 'opp', minutes: 8, role: 'The same for opposition.', questions: 'poi', noNewMatter: true },
      { name: 'Reply (either first or second speaker)', side: 'opp', minutes: 4, role: 'Opposition reply first, then proposition: a summary of the debate as issues.', questions: 'none', noNewMatter: true },
    ],
    judging: 'Scored on content, style and strategy, conventionally weighted 40 / 40 / 20, so delivery is marked rather than assumed.',
    rewards: 'A clear model, worked examples, and speakers who sound like they are talking to a room.',
    punishes: 'Jargon, speed, and cases that never say what the policy actually is.',
    note: 'The reply is given by the first or second speaker, never the third. Both replies are 4 minutes; the proposition reply closes the debate.',
  },
  {
    id: 'policy',
    name: 'Policy debate',
    short: 'CX / Policy',
    where: 'United States high school and college circuits (NSDA, NDT, CEDA).',
    teams: 2,
    perTeam: 2,
    prep: 'One topic for the whole season, researched into evidence files; 8 minutes of prep time per team to spend across the round.',
    speeches: [
      { name: '1st Affirmative Constructive', side: 'prop', minutes: 8, role: 'Read the plan: harms, inherency, solvency, advantages.', questions: 'cx' },
      { name: '1st Negative Constructive', side: 'opp', minutes: 8, role: 'Off-case positions: disadvantages, counterplan, topicality, kritik.', questions: 'cx' },
      { name: '2nd Affirmative Constructive', side: 'prop', minutes: 8, role: 'Answer every negative position and extend the case.', questions: 'cx' },
      { name: '2nd Negative Constructive', side: 'opp', minutes: 8, role: 'Deepen the strongest positions; the negative block begins.', questions: 'cx' },
      { name: '1st Negative Rebuttal', side: 'opp', minutes: 5, role: 'The second half of the block: close the case debate.', questions: 'none', noNewMatter: true },
      { name: '1st Affirmative Rebuttal', side: 'prop', minutes: 5, role: 'The hardest speech in debate: answer thirteen minutes in five.', questions: 'none', noNewMatter: true },
      { name: '2nd Negative Rebuttal', side: 'opp', minutes: 5, role: 'Choose the winning position and go for it.', questions: 'none', noNewMatter: true },
      { name: '2nd Affirmative Rebuttal', side: 'prop', minutes: 5, role: 'Final framing: why the plan outweighs.', questions: 'none', noNewMatter: true },
    ],
    judging: 'One winner, decided on the flow: an argument is won or lost by whether it was answered, and judges publish paradigms saying how they decide.',
    rewards: 'Evidence, technical coverage, and clean impact calculus.',
    punishes: 'Dropped arguments. Silence on the flow is a concession, however obviously wrong the argument was.',
    note: 'Three minutes of cross-examination follow each constructive. Speaking speed is a genuine skill here and a genuine barrier elsewhere.',
  },
  {
    id: 'ld',
    name: 'Lincoln–Douglas',
    short: 'LD',
    where: 'United States high school circuits; one-on-one, value-centred.',
    teams: 2,
    perTeam: 1,
    prep: 'A topic every one or two months, researched in advance; 4 minutes of prep time per debater in the round.',
    speeches: [
      { name: 'Affirmative Constructive', side: 'prop', minutes: 6, role: 'Value, criterion, and the case for the resolution.', questions: 'cx' },
      { name: 'Negative Constructive and Rebuttal', side: 'opp', minutes: 7, role: 'Own value and criterion, plus rebuttal of the affirmative.', questions: 'cx' },
      { name: '1st Affirmative Rebuttal', side: 'prop', minutes: 4, role: 'Answer the negative case and rebuild.', questions: 'none' },
      { name: 'Negative Rebuttal', side: 'opp', minutes: 6, role: 'Collapse to the winning issues.', questions: 'none', noNewMatter: true },
      { name: '2nd Affirmative Rebuttal', side: 'prop', minutes: 3, role: 'Crystallise: the voting issues and why they favour the affirmative.', questions: 'none', noNewMatter: true },
    ],
    judging: 'One judge, one winner, usually decided by whose value criterion the judge accepts and who better meets it.',
    rewards: 'Philosophical clarity: a criterion that tells the judge how to decide before the clash even starts.',
    punishes: 'Arguing impacts that your own criterion says do not matter.',
    note: 'Three minutes of cross-examination after each of the first two speeches.',
  },
  {
    id: 'pf',
    name: 'Public Forum',
    short: 'PF',
    where: 'United States high school circuits; written for a lay judge.',
    teams: 2,
    perTeam: 2,
    prep: 'A new topic each month, researched in advance; 3 minutes of prep time per team.',
    speeches: [
      { name: 'First speaker, team A', side: 'prop', minutes: 4, role: 'Constructive case. A coin toss, not the ballot, decides which side goes first.', questions: 'cx' },
      { name: 'First speaker, team B', side: 'opp', minutes: 4, role: 'Constructive case.', questions: 'cx' },
      { name: 'Second speaker, team A', side: 'prop', minutes: 4, role: 'Rebuttal of the opposing case.', questions: 'cx' },
      { name: 'Second speaker, team B', side: 'opp', minutes: 4, role: 'Rebuttal, and frontline the attacks on your own case.', questions: 'cx' },
      { name: 'Summary, team A', side: 'prop', minutes: 3, role: 'Narrow the debate to the issues you win.', questions: 'none' },
      { name: 'Summary, team B', side: 'opp', minutes: 3, role: 'The same.', questions: 'none' },
      { name: 'Final Focus, team A', side: 'prop', minutes: 2, role: 'One or two voting issues and the weighing.', questions: 'none', noNewMatter: true },
      { name: 'Final Focus, team B', side: 'opp', minutes: 2, role: 'The same, last word.', questions: 'none', noNewMatter: true },
    ],
    judging: 'Lay and flow judges both appear, so the same round may be marked on the flow or on which team sounded more convincing.',
    rewards: 'Short, plain, well-weighed cases, and the discipline to drop arguments early.',
    punishes: 'Trying to carry six contentions into a two-minute final focus.',
    note: 'A three-minute grand crossfire with all four debaters follows the summaries on most circuits.',
  },
  {
    id: 'karl-popper',
    name: 'Karl Popper',
    short: 'KP',
    where: 'Central and Eastern Europe, Central Asia, and many IDEA school programmes.',
    teams: 2,
    perTeam: 3,
    prep: 'Topics released in advance; teams prepare both sides.',
    speeches: [
      { name: 'Affirmative 1', side: 'prop', minutes: 6, role: 'Define and present the whole affirmative case.', questions: 'none' },
      { name: 'Cross-examination by Negative 3', side: 'opp', minutes: 3, role: 'Question the first affirmative.', questions: 'cx' },
      { name: 'Negative 1', side: 'opp', minutes: 6, role: 'The whole negative case, plus first rebuttal.', questions: 'none' },
      { name: 'Cross-examination by Affirmative 3', side: 'prop', minutes: 3, role: 'Question the first negative.', questions: 'cx' },
      { name: 'Affirmative 2', side: 'prop', minutes: 5, role: 'Rebuild and rebut.', questions: 'none' },
      { name: 'Cross-examination by Negative 1', side: 'opp', minutes: 3, role: 'Question the second affirmative.', questions: 'cx' },
      { name: 'Negative 2', side: 'opp', minutes: 5, role: 'Rebuild and rebut.', questions: 'none' },
      { name: 'Cross-examination by Affirmative 1', side: 'prop', minutes: 3, role: 'Question the second negative.', questions: 'cx' },
      { name: 'Affirmative 3', side: 'prop', minutes: 5, role: 'Summary; no new arguments.', questions: 'none', noNewMatter: true },
      { name: 'Negative 3', side: 'opp', minutes: 5, role: 'Summary; no new arguments.', questions: 'none', noNewMatter: true },
    ],
    judging: 'One winner, with written feedback expected; the format is explicitly educational.',
    rewards: 'Teamwork and cross-examination: the questioning is a scored part of the round, not a break.',
    punishes: 'Speakers who cannot answer for a case their teammate wrote.',
    note: 'Every speaker both speaks and cross-examines, which is why it is used for teaching.',
  },
]

// ── motions ────────────────────────────────────────────────────────────────

export type MotionType = {
  id: string
  name: string
  marker: string
  gist: string
  example: string
  propBurden: string
  oppBurden: string
  clash: string
  trap: string
}

export const MOTION_TYPES: MotionType[] = [
  {
    id: 'policy',
    name: 'Policy',
    marker: 'This House would …',
    gist: 'A change is proposed. The debate is about whether doing it beats not doing it.',
    example: 'This House would ban private cars from city centres.',
    propBurden: 'Show the harm now, that the policy fixes a meaningful part of it, and that the costs it creates are smaller than the harm it removes.',
    oppBurden: 'Either defend the status quo or offer a counter-model, then show the policy fails, backfires, or costs more than it saves.',
    clash: 'Usually mechanism against mechanism: does the change actually do what proposition says, and at what price.',
    trap: 'Proposition forgets to say what the policy is. A motion without a model is a wish, and opposition should say so in the first minute.',
  },
  {
    id: 'value',
    name: 'Value',
    marker: 'This House believes that …',
    gist: 'No policy is being enacted. A judgement is being asserted, and the clash is over the standard for judging.',
    example: 'This House believes that social media has done more harm than good.',
    propBurden: 'Offer the standard of judgement, show it is the right one, and show the balance falls your way on it.',
    oppBurden: 'Contest the standard or the balance. You do not need to defend the opposite extreme, only to break the comparison.',
    clash: 'The criterion first, the weighing second. Whoever owns the standard usually owns the debate.',
    trap: 'Both teams argue impacts without ever agreeing what "more harm than good" is measured in: lives, autonomy, money, or something else.',
  },
  {
    id: 'fact',
    name: 'Fact or prediction',
    marker: 'This House believes that X will / does …',
    gist: 'A claim about how the world is or will be. The clash is about evidence and mechanism, not values.',
    example: 'This House believes that artificial intelligence will reduce the total number of jobs.',
    propBurden: 'A causal story plus evidence, and an account of why the counter-trend does not dominate.',
    oppBurden: 'Break the causal chain at its weakest link, or show the opposite force is stronger.',
    clash: 'Mechanism and base rates. Analogies to past transitions do a lot of the work.',
    trap: 'Arguing whether the outcome would be good. The motion does not ask, and a judge will not reward it.',
  },
  {
    id: 'actor',
    name: 'Actor',
    marker: 'This House, as X, would …',
    gist: 'You argue as a named actor and are bound by that actor’s interests, not by the general good.',
    example: 'This House, as a teachers’ union, would accept performance-related pay.',
    propBurden: 'Show the action serves that actor’s own goals, on that actor’s own timeline and constraints.',
    oppBurden: 'Show a better option is available to the same actor, or that the action undermines its interests.',
    clash: 'Whose account of the actor’s interests is more realistic, including its internal politics.',
    trap: 'Drifting into general ethics. A union that argues "it is good for society" has stopped being the union.',
  },
  {
    id: 'debate-as',
    name: 'Counterfactual',
    marker: 'This House regrets / would rather …',
    gist: 'Comparing a world that happened with one that did not. Nothing is being proposed; two worlds are being weighed.',
    example: 'This House regrets the rise of the celebrity activist.',
    propBurden: 'Define the counterfactual world plausibly, then show it is better than the actual one.',
    oppBurden: 'Attack the counterfactual as unrealistic, or defend the actual world on the same measure.',
    clash: 'The counterfactual itself. Vague alternative worlds lose; specified ones can be attacked but can also win.',
    trap: 'Regret motions turned into policy debates. Nobody can act here; there is no "we should ban it" available.',
  },
]

export type MotionCase = {
  motion: string
  type: string
  // The first thing a good team says about it in prep.
  read: string
  propSketch: string[]
  oppSketch: string[]
}

export const MOTION_BANK: MotionCase[] = [
  {
    motion: 'This House would ban political advertising on social media.',
    type: 'policy',
    read: 'The fight is over the counterfactual: what fills the space the adverts leave. Name it before opposition does.',
    propSketch: [
      'Micro-targeting lets a campaign tell different voters incompatible things with no public record, so no one can hold it to account.',
      'Cheap reach rewards outrage, because engagement is the thing being bought.',
      'Removing paid reach pushes campaigns back to journalism and broadcast, which are at least checkable.',
    ],
    oppSketch: [
      'The ban hits challengers hardest: incumbents already have name recognition and press access.',
      'Organic disinformation is unregulated and worse; adverts at least carry a payer label.',
      'Enforcement is a line-drawing nightmare, so the ban either leaks or sweeps in advocacy groups.',
    ],
  },
  {
    motion: 'This House believes that universities should abolish grades in the first year.',
    type: 'policy',
    read: 'Who is the marginal student? Both sides should name whose first year they are talking about.',
    propSketch: [
      'First-year grades mostly measure the school you came from, so they entrench an existing gap.',
      'Pass/fail shifts effort from mark-chasing to risk-taking: harder modules, more help-seeking.',
      'Signalling is preserved: later years and references still carry the information employers want.',
    ],
    oppSketch: [
      'Feedback is what grades carry; remove them and weak students learn too late that they are behind.',
      'Scholarships and selective majors need a first-year signal, so the burden moves to hidden proxies.',
      'The students most helped by structure are the ones least able to replace it themselves.',
    ],
  },
  {
    motion: 'This House regrets the gig economy.',
    type: 'debate-as',
    read: 'A regret motion needs a named counterfactual. Decide early whether the alternative is 2005 part-time work or a regulated platform world.',
    propSketch: [
      'Risk has been moved from firms to individuals without the pay rise that compensates for it.',
      'Flexibility is real but unequally distributed: a choice for some, the only option for others.',
      'The model outcompetes employers who do bear those costs, so it spreads beyond where it was wanted.',
    ],
    oppSketch: [
      'For carers, students and the formerly unemployed, the counterfactual is not a good job but no job.',
      'It made a genuinely illiquid labour market liquid: entry takes days, not months.',
      'The harms are regulable and are being regulated, which does not require regretting the model itself.',
    ],
  },
  {
    motion: 'This House, as a developing state, would refuse foreign aid tied to governance reform.',
    type: 'actor',
    read: 'You are the state, with an electorate, a treasury and a term of office. Interests, not ethics.',
    propSketch: [
      'Tied aid buys conditionality that outlasts the money and hollows out domestic policy capacity.',
      'Refusal creates bargaining power with other lenders, and domestic legitimacy at home.',
      'Conditions are set to the donor’s electoral cycle, not the recipient’s development horizon.',
    ],
    oppSketch: [
      'Refusal costs real budget now in exchange for sovereignty gains that are diffuse and later.',
      'Reform conditions are often what reformers inside government need to defeat domestic veto players.',
      'Alternative lenders impose conditions too, just less visible ones.',
    ],
  },
  {
    motion: 'This House believes that artificial intelligence will widen inequality.',
    type: 'fact',
    read: 'Prediction motion: this is about mechanisms and base rates, not whether inequality is bad.',
    propSketch: [
      'The technology complements capital and high-skill labour and substitutes for routine labour, so returns concentrate.',
      'Diffusion needs data, compute and complementary management capacity, all of which the already-large have.',
      'Historical analogue: computerisation raised the skill premium for decades before any levelling.',
    ],
    oppSketch: [
      'The tools raise low performers most, because they compress the gap to the expert on routine tasks.',
      'Cheap expertise is a substitute for professional gatekeeping: law, medicine and tutoring get cheaper at the bottom.',
      'Inequality is set by institutions — tax, unions, education — far more than by any single technology.',
    ],
  },
]

// ── argument anatomy ───────────────────────────────────────────────────────

export type ArgParts = {
  id: string
  motion: string
  side: 'Proposition' | 'Opposition'
  label: string
  claim: string
  mechanism: string[]
  evidence: string
  impact: string
  weighing: string
  // What a judge writes if the part is missing.
  judge: { claim: string; mechanism: string; evidence: string; impact: string; weighing: string }
}

export const ARGUMENTS: ArgParts[] = [
  {
    id: 'cars',
    motion: 'This House would ban private cars from city centres.',
    side: 'Proposition',
    label: 'Road space is a zero-sum good',
    claim: 'Removing private cars from the centre makes everyone else’s journey faster, including the journeys that cannot be made any other way.',
    mechanism: [
      'A city street has a fixed capacity, and a car carries on average well under two people.',
      'Buses, delivery vans and ambulances compete for that same space, and each is delayed by every car ahead of it.',
      'Take out the lowest-value user of a scarce good and the remaining users all gain, without adding any capacity.',
    ],
    evidence: 'Central London’s charge cut traffic in the zone by around a fifth in its first years, and bus reliability rose in step.',
    impact: 'The people who gain are bus passengers, tradespeople and emergency services: a group both larger and poorer than the drivers displaced.',
    weighing: 'Opposition’s harm falls on a minority who have substitutes. Ours falls on a majority who largely do not. Same currency, bigger number, more certain.',
    judge: {
      claim: 'I could not tell what you wanted me to believe, so I had nothing to compare.',
      mechanism: 'You asserted it. Without the why, opposition only had to assert the opposite and we were even.',
      evidence: 'Plausible, but a story. One real case would have made it hard to deny.',
      impact: 'True, perhaps, but you never told me who it happens to or how much it matters.',
      weighing: 'Both sides had a harm. Nobody told me which was bigger, so I had to decide for you.',
    },
  },
  {
    id: 'grades',
    motion: 'This House would abolish grades in the first year of university.',
    side: 'Opposition',
    label: 'Grades are the feedback channel',
    claim: 'Removing first-year grades hurts exactly the students the policy is meant to help, because it removes the only early signal that they are behind.',
    mechanism: [
      'Students cannot tell good work from bad in a new discipline; the mark is how they calibrate.',
      'Weak signals are discovered late, and by second year the gap compounds into a failed module.',
      'Students with family in the system get the missing calibration privately; first-generation students do not.',
    ],
    evidence: 'Pass/fail trials report fewer hours studied and later help-seeking, with the drop concentrated among students entering with weaker preparation.',
    impact: 'A policy sold as equalising removes a public signal and leaves a private one, which is the definition of a regressive change.',
    weighing: 'Proposition’s benefit is reduced anxiety, which is real but recoverable. Ours is a failed year, which is not.',
    judge: {
      claim: 'There was material here but no claim I could write on the ballot.',
      mechanism: 'I believed the harm existed but not why it followed from their policy.',
      evidence: 'Contested assertion against contested assertion; I defaulted to whoever explained the mechanism better.',
      impact: 'You told me a mechanism and stopped. I did not know what it did to anyone.',
      weighing: 'You were ahead on this issue and never told me it was the biggest one.',
    },
  },
]

// ── the flow sheet ─────────────────────────────────────────────────────────

export type FlowMove = {
  speech: string
  side: 'prop' | 'opp'
  // The technical name of what this speech did to the argument.
  move: 'claim' | 'rebut' | 'rebuild' | 'extend' | 'weigh' | 'drop'
  text: string
  // What a judge notes in the margin.
  note: string
}

export type FlowTrack = { argument: string; moves: FlowMove[] }

export const FLOW: FlowTrack[] = [
  {
    argument: 'Bus passengers gain from removing cars',
    moves: [
      { speech: '1st Prop', side: 'prop', move: 'claim', text: 'Fixed road space; cars are the lowest-occupancy user, so removing them speeds up buses.', note: 'Claim with a mechanism. On the flow.' },
      { speech: '1st Opp', side: 'opp', move: 'rebut', text: 'Buses are slow because of boarding and signals, not congestion.', note: 'Alternative cause. Live unless answered.' },
      { speech: '2nd Prop', side: 'prop', move: 'rebuild', text: 'Dwell time is fixed per stop; variance between a good and bad journey is traffic, and that is what passengers plan around.', note: 'Answered, and narrowed to variance. Prop ahead.' },
      { speech: '2nd Opp', side: 'opp', move: 'rebut', text: 'Displaced cars circle the ring road, so the bus is late at the edges instead.', note: 'Displacement. A real cost, not yet quantified.' },
      { speech: '3rd Prop', side: 'prop', move: 'weigh', text: 'Even granting displacement, the trip that gets worse is the one with a substitute; the trip that improves is the one without.', note: 'Comparative. Takes the sting out of displacement.' },
      { speech: '3rd Opp', side: 'opp', move: 'drop', text: '(not mentioned)', note: 'Dropped. Prop wins this clash by default, whatever I personally think.' },
    ],
  },
  {
    argument: 'Enforcement will be unworkable',
    moves: [
      { speech: '1st Opp', side: 'opp', move: 'claim', text: 'Exemptions for disability, trade and residents swallow the ban or the ban swallows them.', note: 'Strong line-drawing argument.' },
      { speech: '2nd Prop', side: 'prop', move: 'rebut', text: 'Cameras and a permit list already run this in several cities; the hard cases are a known, small set.', note: 'Answered by example. Needs the comparison to land.' },
      { speech: '2nd Opp', side: 'opp', move: 'rebuild', text: 'Those cities phased in over years; the motion acts now, so the failure modes arrive first.', note: 'Timeline point. Good rebuild.' },
      { speech: '3rd Prop', side: 'prop', move: 'rebut', text: 'Nothing in the motion forbids phasing; a model can include it.', note: 'Fair, but late. Opp got two speeches of value here.' },
      { speech: '3rd Opp', side: 'opp', move: 'weigh', text: 'Even if phasing works eventually, the first two years fall on traders with no reserve.', note: 'Narrowed but preserved. Opp keeps a smaller version.' },
    ],
  },
]

// ── fallacies ──────────────────────────────────────────────────────────────

export type Fallacy = {
  id: string
  name: string
  family: 'relevance' | 'causal' | 'structure' | 'language' | 'statistics'
  gist: string
  example: string
  // The sentence you actually say in the round.
  answer: string
}

export const FALLACIES: Fallacy[] = [
  { id: 'strawman', name: 'Straw man', family: 'relevance', gist: 'Rebutting a weaker version of the argument than the one that was made.', example: '"They want open borders" — when the motion was a visa route for one profession.', answer: 'Name the swap: "that is not our case; our case is X, and here is why their rebuttal does not touch it."' },
  { id: 'ad-hominem', name: 'Ad hominem', family: 'relevance', gist: 'Attacking the speaker or their motives instead of the claim.', example: '"Of course a private school debater thinks fees are fine."', answer: 'Concede the irrelevant and demand the relevant: "who says it changes nothing about whether it is true."' },
  { id: 'authority', name: 'Appeal to authority', family: 'relevance', gist: 'Treating a source’s status as a substitute for its reasoning.', example: '"Three Nobel laureates signed a letter against it."', answer: 'Ask for the mechanism behind the name: experts are evidence about facts in their field, not about value trade-offs.' },
  { id: 'popularity', name: 'Appeal to popularity', family: 'relevance', gist: 'Many people believe it, therefore it is true or right.', example: '"Seventy per cent of the public supports this."', answer: 'Separate legitimacy from correctness: popularity may matter for feasibility, never for truth.' },
  { id: 'post-hoc', name: 'Post hoc', family: 'causal', gist: 'Treating sequence as cause.', example: '"Crime fell after the law passed, so the law cut crime."', answer: 'Offer the common cause or the pre-existing trend, then ask what the counterfactual was.' },
  { id: 'slippery-slope', name: 'Slippery slope', family: 'causal', gist: 'A chain of steps asserted without any step being defended.', example: '"Allow this and within ten years nothing is private."', answer: 'Attack the weakest link by name and ask them to defend that single step.' },
  { id: 'single-cause', name: 'Single cause', family: 'causal', gist: 'Treating a many-caused outcome as having one cause, usually the convenient one.', example: '"Test scores fell because of phones."', answer: 'List two other live causes and ask them to show theirs dominates.' },
  { id: 'false-dilemma', name: 'False dilemma', family: 'structure', gist: 'Offering two options when more exist, usually to make a bad option look necessary.', example: '"Either we ban it or we accept the harm."', answer: 'Name the third option out loud; a dilemma dies the moment a third door is described.' },
  { id: 'circular', name: 'Begging the question', family: 'structure', gist: 'The conclusion is smuggled into the premise.', example: '"It is unjust because it violates rights" — where the right is the thing in dispute.', answer: 'Show the premise and the conclusion are the same sentence, then ask for independent support.' },
  { id: 'burden-shift', name: 'Shifting the burden', family: 'structure', gist: 'Demanding the other side disprove a claim that was never supported.', example: '"You have not shown it will not work."', answer: 'Restate the burdens: whoever asserts, proves. An unsupported claim needs no answer.' },
  { id: 'moving-goalposts', name: 'Moving the goalposts', family: 'structure', gist: 'Changing what would count as success once the original test is met.', example: 'The policy is defended on cost, then on fairness once the costing lands.', answer: 'Quote their first standard, show it was met, and make the shift itself the issue.' },
  { id: 'equivocation', name: 'Equivocation', family: 'language', gist: 'One word doing two jobs in the same argument.', example: '"Free" meaning both unpriced and unconstrained.', answer: 'Separate the senses and ask which one their argument needs; usually it needs both and can have only one.' },
  { id: 'loaded', name: 'Loaded language', family: 'language', gist: 'The conclusion carried in the choice of words rather than argued for.', example: '"This scheme" versus "this reform" for the same policy.', answer: 'Translate both into neutral terms and show the argument survives on neither.' },
  { id: 'anecdote', name: 'Anecdote as data', family: 'statistics', gist: 'A vivid case standing in for a rate.', example: '"I know someone whose business closed."', answer: 'Accept the case, deny the rate: "how often, compared to what."' },
  { id: 'base-rate', name: 'Base rate neglect', family: 'statistics', gist: 'A striking proportion quoted without the underlying frequency.', example: '"The test is 99% accurate, so a positive means you almost certainly have it."', answer: 'Supply the base rate and redo the arithmetic out loud; the number usually reverses.' },
  { id: 'cherry-pick', name: 'Cherry picking', family: 'statistics', gist: 'Choosing the window or the subgroup that shows the result.', example: 'A trend measured from the one unusual year that makes it work.', answer: 'Ask why that start date, and give the number over the full period.' },
  { id: 'correlation', name: 'Correlation as cause', family: 'causal', gist: 'Co-movement treated as evidence of direction.', example: '"Cities with more police have more crime."', answer: 'Name the reverse-causation story; it is usually more plausible than theirs.' },
  { id: 'nirvana', name: 'Perfect solution fallacy', family: 'structure', gist: 'Rejecting an improvement because it is not a cure.', example: '"It would not stop all of it, so it is pointless."', answer: 'Restate the comparison: the test is better than the status quo, not perfect.' },
]

export const FALLACY_FAMILIES: [Fallacy['family'], string][] = [
  ['relevance', 'Relevance'],
  ['causal', 'Causation'],
  ['structure', 'Structure'],
  ['language', 'Language'],
  ['statistics', 'Statistics'],
]

// ── weighing ───────────────────────────────────────────────────────────────

export type WeighPreset = {
  id: string
  name: string
  prop: { label: string; magnitude: number; probability: number; scope: number; time: number; reversible: number }
  opp: { label: string; magnitude: number; probability: number; scope: number; time: number; reversible: number }
  note: string
}

export const WEIGH_PRESETS: WeighPreset[] = [
  {
    id: 'cars',
    name: 'Banning cars in city centres',
    prop: { label: 'Faster buses and emergency vehicles', magnitude: 5, probability: 8, scope: 8, time: 9, reversible: 9 },
    opp: { label: 'Suburban commuters with no alternative', magnitude: 7, probability: 7, scope: 3, time: 9, reversible: 9 },
    note: 'A small gain for many against a large loss for few: the classic shape, and the one where scope decides it.',
  },
  {
    id: 'ai',
    name: 'Pausing frontier AI deployment',
    prop: { label: 'Avoided tail risk from an untested system', magnitude: 10, probability: 2, scope: 10, time: 3, reversible: 1 },
    opp: { label: 'Delayed medical and productivity gains', magnitude: 6, probability: 8, scope: 7, time: 8, reversible: 8 },
    note: 'Low-probability, irreversible, enormous against likely, reversible, large. Irreversibility is doing the work.',
  },
  {
    id: 'grades',
    name: 'Abolishing first-year grades',
    prop: { label: 'Less anxiety, more academic risk-taking', magnitude: 5, probability: 7, scope: 7, time: 8, reversible: 9 },
    opp: { label: 'Weak students find out too late', magnitude: 7, probability: 6, scope: 4, time: 6, reversible: 3 },
    note: 'Close on every axis but reversibility. When the axes split, say which one the judge should use and why.',
  },
]

export const WEIGH_AXES: { key: 'magnitude' | 'probability' | 'scope' | 'time' | 'reversible'; name: string; ask: string }[] = [
  { key: 'magnitude', name: 'Magnitude', ask: 'How bad or good is it for one person it happens to?' },
  { key: 'probability', name: 'Probability', ask: 'How likely is the chain of events to actually run?' },
  { key: 'scope', name: 'Scope', ask: 'How many people, and are they the worst off?' },
  { key: 'time', name: 'Timeframe', ask: 'How soon, and how long does it last?' },
  { key: 'reversible', name: 'Reversibility', ask: 'If we are wrong, can it be undone? High means easily undone.' },
]

// ── argument maps ──────────────────────────────────────────────────────────

/**
 * An argument map as a graph, for the propagation lab. A node is a claim; its
 * `needs` are the nodes it depends on, and `mode` says how.
 *
 * - 'linked': every input is required, so killing any one kills this node.
 *   (Toulmin's grounds plus warrant: neither works alone.)
 * - 'convergent': each input independently supports it, so it survives while
 *   at least one input stands, but weakens as inputs fall.
 *
 * This distinction is the single most useful thing argument mapping gives a
 * debater, because it tells you where one answer is worth four.
 */
export type MapNode = {
  id: string
  text: string
  kind: 'premise' | 'inference' | 'conclusion'
  mode?: 'linked' | 'convergent'
  needs?: string[]
  // What a speaker actually says to attack this node.
  attack?: string
  col: number
  row: number
}

export type ArgMap = { id: string; name: string; motion: string; side: string; note: string; nodes: MapNode[] }

export const ARG_MAPS: ArgMap[] = [
  {
    id: 'cars',
    name: 'Road space is zero-sum',
    motion: 'This House would ban private cars from city centres.',
    side: 'Proposition',
    note: 'A linked spine with convergent support at the bottom. Notice what happens when you kill the substitution premise: three pieces of evidence survive and the conclusion still dies, because the spine is linked. That is the difference between answering the evidence and answering the argument.',
    nodes: [
      { id: 'p1', text: 'A city street has fixed capacity', kind: 'premise', col: 0, row: 0, attack: 'Capacity is not fixed: signal timing, bus lanes and kerb rules change effective capacity without removing cars.' },
      { id: 'p2', text: 'Cars carry under two people on average', kind: 'premise', col: 0, row: 1, attack: 'Occupancy is higher for the journeys that remain after the discretionary ones are priced out.' },
      { id: 'p3', text: 'Buses, vans and ambulances share that capacity', kind: 'premise', col: 0, row: 2 },
      { id: 'i1', text: 'Cars are the lowest-value user of the scarce good', kind: 'inference', mode: 'linked', needs: ['p1', 'p2', 'p3'], col: 1, row: 1, attack: 'Value per vehicle is not value per journey: a tradesperson’s van and a commuter’s car are not comparable.' },
      { id: 'p4', text: 'Displaced drivers have substitutes: bus, rail, park and ride', kind: 'premise', col: 0, row: 3, attack: 'Not in low-density suburbs, where the alternative is a 90-minute journey or none.' },
      { id: 'i2', text: 'Removing them raises throughput for everyone else', kind: 'inference', mode: 'linked', needs: ['i1', 'p4'], col: 2, row: 2, attack: 'Displacement, not removal: the traffic reappears on the ring road and the bus is late at the edges.' },
      { id: 'e1', text: 'London’s charge cut zone traffic by about a fifth', kind: 'premise', col: 0, row: 5, attack: 'A charge is not a ban, and the comparison city had a usable tube network.' },
      { id: 'e2', text: 'Bus reliability rose in step', kind: 'premise', col: 0, row: 6 },
      { id: 'e3', text: 'Ambulance response times improved in pedestrianised centres', kind: 'premise', col: 0, row: 7 },
      { id: 'i3', text: 'The mechanism has run in the real world', kind: 'inference', mode: 'convergent', needs: ['e1', 'e2', 'e3'], col: 1, row: 6 },
      { id: 'c1', text: 'The gain falls on a larger and poorer group than the loss', kind: 'conclusion', mode: 'linked', needs: ['i2', 'i3'], col: 3, row: 4, attack: 'Even granting the throughput gain, the loss falls on people whose jobs depend on the car; scope is not the only axis.' },
    ],
  },
  {
    id: 'ai',
    name: 'Pausing frontier deployment',
    motion: 'This House would pause the deployment of frontier AI systems.',
    side: 'Proposition',
    note: 'A long convergent chain with one linked joint. Long chains are where probability multiplies away: kill the single linked node — that a pause is enforceable — and everything above it is unreachable regardless of how good the rest is.',
    nodes: [
      { id: 'p1', text: 'Capability is rising faster than evaluation methods', kind: 'premise', col: 0, row: 0, attack: 'Evaluation has scaled with capability: red-teaming, evals and third-party audits all postdate the systems they test.' },
      { id: 'p2', text: 'Some failure modes appear only at deployment scale', kind: 'premise', col: 0, row: 1 },
      { id: 'i1', text: 'There is a window where harm is discovered too late', kind: 'inference', mode: 'convergent', needs: ['p1', 'p2'], col: 1, row: 0 },
      { id: 'p3', text: 'A pause is enforceable across the handful of frontier labs', kind: 'premise', col: 0, row: 3, attack: 'Enforcement is the whole argument: compute moves, jurisdictions differ, and an unenforced pause only slows the labs that comply.' },
      { id: 'i2', text: 'A pause buys evaluation time without being evaded', kind: 'inference', mode: 'linked', needs: ['i1', 'p3'], col: 2, row: 2, attack: 'Even if enforceable, the time is only useful if the evaluation work is ready to use it.' },
      { id: 'p4', text: 'Delay costs are reversible; an uncontained failure may not be', kind: 'premise', col: 0, row: 5, attack: 'Delayed medical and productivity gains are themselves irreversible for the people who die waiting.' },
      { id: 'c1', text: 'Under irreversibility, the burden sits on deployment', kind: 'conclusion', mode: 'linked', needs: ['i2', 'p4'], col: 3, row: 4 },
    ],
  },
]

// ── probability and evidence ───────────────────────────────────────────────

/** Claims a debate round actually argues about, with the numbers to argue them. */
export type BayesCase = {
  id: string
  name: string
  claim: string
  prior: number
  // Each piece of evidence, with how much more likely it is if the claim is true.
  evidence: { label: string; lrTrue: number; lrFalse: number; note: string }[]
  note: string
}

export const BAYES_CASES: BayesCase[] = [
  {
    id: 'screening',
    name: 'Screening and false positives',
    claim: 'This person has the condition the programme screens for.',
    prior: 0.002,
    evidence: [
      { label: 'Positive screening test (99% sensitive, 2% false positive)', lrTrue: 0.99, lrFalse: 0.02, note: 'The number quoted in every speech about screening. On its own it moves a 1-in-500 prior to about 1 in 11.' },
      { label: 'Second, independent positive test', lrTrue: 0.95, lrFalse: 0.05, note: 'Independence is the assumption doing the work here, and real tests correlate: they often share the mechanism that produced the first false positive.' },
      { label: 'Clinical risk factor present', lrTrue: 0.4, lrFalse: 0.1, note: 'A weak-sounding factor that is actually worth a lot, because it is four times more common among cases.' },
    ],
    note: 'The case for and against mass screening lives entirely in this arithmetic. Opposition’s best line is not that the test is bad; it is that at a low base rate most positives are false, so the programme’s main output is anxiety and follow-up procedures.',
  },
  {
    id: 'deterrence',
    name: 'Did the policy cause the fall?',
    claim: 'The new enforcement policy caused the fall in offences.',
    prior: 0.3,
    evidence: [
      { label: 'Offences fell after the policy', lrTrue: 0.9, lrFalse: 0.6, note: 'Weak evidence: offences also fall after policies that do nothing, because they were already falling.' },
      { label: 'The fall was concentrated in the targeted offence', lrTrue: 0.8, lrFalse: 0.2, note: 'Much stronger. A general trend would not pick out one offence type.' },
      { label: 'Neighbouring areas without the policy did not fall', lrTrue: 0.75, lrFalse: 0.15, note: 'This is the comparison group doing the work, and it is what turns a story into evidence.' },
      { label: 'The fall began two months before implementation', lrTrue: 0.1, lrFalse: 0.5, note: 'Evidence against: anticipation effects exist but are usually smaller than this.' },
    ],
    note: 'Use this in a round to show why one correlation is worth little and three specific ones are worth a lot. The move is not "correlation is not causation" — it is naming which observation would distinguish the two stories.',
  },
  {
    id: 'prediction',
    name: 'Will the technology displace the jobs?',
    claim: 'This technology will reduce total employment in the sector within a decade.',
    prior: 0.35,
    evidence: [
      { label: 'The tasks automated are the sector’s core tasks', lrTrue: 0.7, lrFalse: 0.3, note: 'Task-level exposure studies are the best available evidence and are still only exposure, not outcome.' },
      { label: 'Historical analogues saw employment rise, not fall', lrTrue: 0.25, lrFalse: 0.7, note: 'The strongest single piece of evidence against, and the one proposition must answer rather than ignore.' },
      { label: 'Firms report hiring fewer entry-level staff already', lrTrue: 0.6, lrFalse: 0.35, note: 'Survey evidence about intentions, which runs ahead of behaviour and overstates it.' },
    ],
    note: 'Prediction motions are won on base rates and mechanism, not on vividness. Setting the prior out loud — "most automation waves have raised employment, so we start sceptical" — is itself a framing move.',
  },
]
