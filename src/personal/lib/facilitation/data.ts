/**
 * Data for the facilitation labs.
 *
 * Agenda templates, voting preference profiles, station-rotation presets and a
 * worked project network for the critical-path lab. The numbers are either
 * arithmetic (which is exact) or published rules of thumb (which are labelled
 * as such in the labs that use them).
 */

// ── agenda design ──────────────────────────────────────────────────────────

/**
 * The four phases of a session arc. They map onto Kaner's diamond of
 * participation: open and explore are divergent, converge is the narrowing
 * side, and the groan zone sits at the join.
 */
export type Phase = 'open' | 'explore' | 'converge' | 'close'

export const PHASES: { key: Phase; name: string; role: string; share: [number, number] }[] = [
  { key: 'open', name: 'Open', role: 'Arrive, contract, frame the question, surface what people already think.', share: [0.1, 0.2] },
  { key: 'explore', name: 'Explore', role: 'Divergent work: generate, hear every voice, sit in the groan zone.', share: [0.3, 0.45] },
  { key: 'converge', name: 'Converge', role: 'Group, test, weigh, decide against the agreed decision rule.', share: [0.25, 0.4] },
  { key: 'close', name: 'Close', role: 'Actions with owners and dates, check-out, and the honest word about what is unresolved.', share: [0.1, 0.2] },
]

export type AgendaBlock = { name: string; minutes: number; phase: Phase; method?: string; note?: string }

export type AgendaTemplate = {
  id: string
  name: string
  minutes: number
  people: number
  purpose: string
  rule: string
  blocks: AgendaBlock[]
}

export const AGENDAS: AgendaTemplate[] = [
  {
    id: 'team-90',
    name: 'Team decision workshop',
    minutes: 90,
    people: 12,
    purpose: 'Choose one of four candidate projects to run next term, with the team owning the choice.',
    rule: 'Consent: the team recommends, the lead decides by Friday and explains.',
    blocks: [
      { name: 'Welcome, purpose, decision rule', minutes: 7, phase: 'open', note: 'Say out loud who decides and how. This prevents the commonest sense of betrayal.' },
      { name: 'Check-in round: one sentence each', minutes: 8, phase: 'open', method: 'Rounds', note: '12 people × ~35 s. Rounds are the cheapest way to make the first voice easy.' },
      { name: 'Frame: the four candidates, 90 seconds each', minutes: 8, phase: 'open' },
      { name: 'Silent writing: what matters in this choice', minutes: 5, phase: 'explore', method: 'Brainwriting', note: 'Silent first, always. It removes the anchoring effect of whoever speaks first.' },
      { name: '1-2-4-All on the criteria', minutes: 15, phase: 'explore', method: 'Liberating Structures', note: '1 min alone, 2 min pairs, 4 min fours, 8 min whole group.' },
      { name: 'Groan zone: where the criteria conflict', minutes: 12, phase: 'explore', note: 'Name it as expected. Groups that are told the groan zone is normal stay in it long enough to get through it.' },
      { name: 'Score the four against the agreed criteria', minutes: 12, phase: 'converge', method: 'Matrix' },
      { name: 'Dot vote, then test with fist-to-five', minutes: 10, phase: 'converge', method: 'Dot voting' },
      { name: 'Actions: owner and date per action', minutes: 8, phase: 'close' },
      { name: 'Check-out: one word, and what is still unresolved', minutes: 5, phase: 'close' },
    ],
  },
  {
    id: 'retreat-180',
    name: 'Half-day staff retreat',
    minutes: 180,
    people: 24,
    purpose: 'Agree three priorities for the year and the first concrete step on each.',
    rule: 'Consensus on the three priorities; delegation on the steps.',
    blocks: [
      { name: 'Arrival, purpose, agenda, ground rules', minutes: 12, phase: 'open' },
      { name: 'Impromptu networking: three rounds of pairs', minutes: 15, phase: 'open', method: 'Liberating Structures' },
      { name: 'Appreciative opening: what worked this year', minutes: 20, phase: 'explore', method: 'Appreciative inquiry' },
      { name: 'World Café: three rounds on three questions', minutes: 45, phase: 'explore', method: 'World Café', note: 'Six tables of four, 13 minutes a round plus 2 minutes of movement.' },
      { name: 'Break', minutes: 15, phase: 'explore', note: 'Not optional past 90 minutes; attention and goodwill both decay.' },
      { name: 'Affinity clustering of the café harvest', minutes: 20, phase: 'converge', method: 'Affinity diagram' },
      { name: 'Multi-vote to a shortlist of six', minutes: 12, phase: 'converge', method: 'N/3 dot voting' },
      { name: 'Gradients of agreement on the final three', minutes: 18, phase: 'converge', method: 'Gradients of agreement' },
      { name: '15% Solutions: the first step each person can take', minutes: 15, phase: 'close', method: 'Liberating Structures' },
      { name: 'Close: commitments read aloud', minutes: 8, phase: 'close' },
    ],
  },
  {
    id: 'class-45',
    name: 'Debrief after an activity (class or camp)',
    minutes: 45,
    people: 20,
    purpose: 'Turn a raft build that failed into something the group can carry home.',
    rule: 'No decision; the purpose is learning and repair.',
    blocks: [
      { name: 'Settle, water, sit in a circle', minutes: 4, phase: 'open', note: 'A circle with no table changes who speaks more than any question you ask.' },
      { name: 'Objective questions: what happened?', minutes: 8, phase: 'open', method: 'ORID' },
      { name: 'Reflective: how was that for you?', minutes: 8, phase: 'explore', method: 'ORID', note: 'Expect the blame phase here. Let it surface before redirecting it.' },
      { name: 'Interpretive: what does it tell us?', minutes: 10, phase: 'explore', method: 'ORID' },
      { name: 'Decisional: what will we do differently?', minutes: 8, phase: 'converge', method: 'ORID' },
      { name: 'Transfer: where else does this happen?', minutes: 5, phase: 'close', note: 'The step that decides whether the lesson leaves the field.' },
      { name: 'Close: one word round', minutes: 2, phase: 'close' },
    ],
  },
  {
    id: 'online-60',
    name: 'Online planning session',
    minutes: 60,
    people: 16,
    purpose: 'Produce a draft plan with named owners, with everyone contributing.',
    rule: 'Leader decides after consultation, stated at the start.',
    blocks: [
      { name: 'Join, audio check, purpose, how we will work', minutes: 6, phase: 'open', note: 'Online, say explicitly how to signal: hand up, chat, or unmute.' },
      { name: 'Chat storm: one line each in the chat', minutes: 5, phase: 'open', method: 'Chat waterfall', note: 'Everyone types, nobody sends until you say go. It avoids the anchoring of the first message.' },
      { name: 'Breakouts of 3 on the first question', minutes: 12, phase: 'explore', note: 'Threes online, not fives: airtime per person stays above two minutes.' },
      { name: 'Harvest to a shared board', minutes: 8, phase: 'explore', method: 'Shared whiteboard' },
      { name: 'Breakouts of 3 on options', minutes: 10, phase: 'converge' },
      { name: 'Whole group: test the draft, name objections', minutes: 10, phase: 'converge', method: 'Consent round' },
      { name: 'Owners, dates, and what happens if it slips', minutes: 6, phase: 'close' },
      { name: 'Check-out in chat', minutes: 3, phase: 'close' },
    ],
  },
]

// ── voting ─────────────────────────────────────────────────────────────────

/**
 * A preference profile: blocs of voters, each with a full ranking of the
 * options. Profiles are chosen to show the cases where voting rules disagree,
 * which is the point of the lab — a facilitator who does not choose the rule
 * on purpose has chosen it by accident.
 */
export type VoteProfile = {
  id: string
  name: string
  options: string[]
  blocs: { count: number; ranking: number[]; who?: string }[]
  note: string
}

export const VOTE_PROFILES: VoteProfile[] = [
  {
    id: 'spoiler',
    name: 'The split field',
    options: ['Community garden', 'Repair café', 'Youth drop-in', 'Skate ramp'],
    blocs: [
      { count: 9, ranking: [0, 1, 2, 3], who: 'Gardeners' },
      { count: 8, ranking: [1, 0, 2, 3], who: 'Repairers' },
      { count: 10, ranking: [3, 2, 1, 0], who: 'Skaters' },
      { count: 4, ranking: [2, 1, 0, 3], who: 'Youth workers' },
    ],
    note: 'Plurality hands it to the skate ramp with 10 of 31 votes, while two thirds of the room rank it last. Every other rule gives a different answer.',
  },
  {
    id: 'compromise',
    name: 'The nobody-loves-it compromise',
    options: ['Early start', 'Late start', 'Split shift'],
    blocs: [
      { count: 7, ranking: [0, 2, 1], who: 'Morning people' },
      { count: 6, ranking: [1, 2, 0], who: 'Evening people' },
      { count: 2, ranking: [2, 0, 1], who: 'Undecided' },
    ],
    note: 'Split shift is almost nobody’s favourite and almost everybody’s acceptable second. Borda and Condorcet find it; plurality cannot see it at all.',
  },
  {
    id: 'cycle',
    name: 'A Condorcet cycle',
    options: ['Museum', 'Hike', 'Workshop'],
    blocs: [
      { count: 5, ranking: [0, 1, 2], who: 'Group A' },
      { count: 4, ranking: [1, 2, 0], who: 'Group B' },
      { count: 4, ranking: [2, 0, 1], who: 'Group C' },
    ],
    note: 'Museum beats Hike, Hike beats Workshop, and Workshop beats Museum. There is no Condorcet winner, and no voting rule can conjure one: the group’s preference is genuinely circular.',
  },
  {
    id: 'camp',
    name: 'Camp theme, four blocs',
    options: ['Service project', 'Expedition', 'Skills carnival', 'Film and media'],
    blocs: [
      { count: 11, ranking: [1, 0, 2, 3], who: 'Older scouts' },
      { count: 9, ranking: [2, 3, 0, 1], who: 'Younger scouts' },
      { count: 6, ranking: [0, 2, 1, 3], who: 'Leaders' },
      { count: 5, ranking: [3, 2, 0, 1], who: 'Media crew' },
    ],
    note: 'A realistic four-bloc field. Watch what approval voting does as you move the approval threshold: the winner changes with how generous people are, not with what they want.',
  },
]

// ── station rotations ──────────────────────────────────────────────────────

export type RotationPreset = { id: string; name: string; people: number; stations: number; rounds: number; roundMinutes: number; moveMinutes: number; note: string }

export const ROTATIONS: RotationPreset[] = [
  { id: 'cafe', name: 'World Café, 24 people', people: 24, stations: 6, rounds: 3, roundMinutes: 13, moveMinutes: 2, note: 'Classic café: three rounds, a host who stays, and a harvest at the end. Nobody sees every table, which is the design, not a flaw.' },
  { id: 'carnival', name: 'Skills carnival, 60 people', people: 60, stations: 10, rounds: 10, roundMinutes: 8, moveMinutes: 2, note: 'Everyone sees every station. Total time is the constraint: ten rounds of ten minutes is 100 minutes before a single debrief.' },
  { id: 'gallery', name: 'Gallery walk, 30 people', people: 30, stations: 5, rounds: 5, roundMinutes: 6, moveMinutes: 1, note: 'Short rounds, full coverage, and a written harvest left at each poster.' },
  { id: 'speed', name: 'Speed consulting, 18 people', people: 18, stations: 9, rounds: 4, roundMinutes: 10, moveMinutes: 1, note: 'Pairs consult, then rotate. The useful number here is how many distinct people each participant meets.' },
]

// ── critical path ──────────────────────────────────────────────────────────

export type Task = { id: string; name: string; days: number; pre: string[]; opt?: number; pess?: number }

export type Network = { id: string; name: string; note: string; tasks: Task[] }

export const NETWORKS: Network[] = [
  {
    id: 'camp',
    name: 'Three-day residential camp',
    note: 'A real planning network for a 60-person camp. Note that catering and risk assessment are not on the critical path, which is exactly why they are the things that get left to the last week and then go wrong.',
    tasks: [
      { id: 'A', name: 'Agree aims and dates with the school', days: 5, pre: [], opt: 3, pess: 12 },
      { id: 'B', name: 'Book the venue', days: 10, pre: ['A'], opt: 5, pess: 25 },
      { id: 'C', name: 'Recruit and vet the leader team', days: 20, pre: ['A'], opt: 14, pess: 40 },
      { id: 'D', name: 'Design the programme', days: 12, pre: ['B', 'C'], opt: 8, pess: 20 },
      { id: 'E', name: 'Risk assessment and RAMS', days: 6, pre: ['D'], opt: 4, pess: 15 },
      { id: 'F', name: 'Parent consent and medical forms', days: 15, pre: ['B'], opt: 10, pess: 30 },
      { id: 'G', name: 'Catering plan and order', days: 7, pre: ['F'], opt: 4, pess: 14 },
      { id: 'H', name: 'Transport booking', days: 4, pre: ['B'], opt: 2, pess: 10 },
      { id: 'I', name: 'Leader training weekend', days: 3, pre: ['D', 'E'], opt: 3, pess: 6 },
      { id: 'J', name: 'Final briefing and kit check', days: 2, pre: ['G', 'H', 'I'], opt: 1, pess: 5 },
    ],
  },
  {
    id: 'workshop',
    name: 'Commissioned one-day workshop',
    note: 'A short consulting network. The pre-work survey is the hidden critical item: everything downstream waits on responses you do not control.',
    tasks: [
      { id: 'A', name: 'Scoping call and contracting', days: 2, pre: [], opt: 1, pess: 5 },
      { id: 'B', name: 'Stakeholder interviews', days: 6, pre: ['A'], opt: 4, pess: 12 },
      { id: 'C', name: 'Pre-work survey out and back', days: 10, pre: ['A'], opt: 7, pess: 21 },
      { id: 'D', name: 'Design the session', days: 4, pre: ['B', 'C'], opt: 2, pess: 9 },
      { id: 'E', name: 'Materials and shared board build', days: 3, pre: ['D'], opt: 2, pess: 6 },
      { id: 'F', name: 'Dry run with a colleague', days: 1, pre: ['E'], opt: 1, pess: 3 },
      { id: 'G', name: 'Client sign-off on the plan', days: 3, pre: ['D'], opt: 1, pess: 10 },
      { id: 'H', name: 'Deliver', days: 1, pre: ['F', 'G'], opt: 1, pess: 1 },
    ],
  },
]
