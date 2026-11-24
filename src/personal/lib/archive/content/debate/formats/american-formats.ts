import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The three American formats answer the same question three different ways: what should a debate test? Policy debate says technical argumentation and evidence. Lincoln–Douglas says moral philosophy. Public Forum says whether an ordinary adult would be convinced. Each has produced a distinct culture, and each is misread by debaters from the other two.',
  nutshell: [
    '**Policy (CX)**: two-on-two, one resolution per season, evidence files, 8-minute constructives and 5-minute rebuttals, 3 minutes of cross-examination after each constructive.',
    '**Lincoln–Douglas**: one-on-one, value and criterion, a monthly resolution, speeches from 3 to 7 minutes.',
    '**Public Forum**: two-on-two, a monthly topic, 4-minute cases, summaries and a 2-minute final focus, written for a lay judge.',
    'All three are decided on the **flow**: an argument that is not answered is conceded, which makes coverage a technical skill.',
    'Policy’s **speed** ("spreading") is a real adaptation to the time-versus-coverage problem, and a real barrier to new debaters.',
    'Judges publish **paradigms** saying how they decide, and adapting to them is an explicit, expected skill.',
  ],
  sections: [
    {
      id: 'policy',
      title: 'Policy debate',
      lead: 'One resolution, a season of research, and the most technical argumentation in competitive debate.',
      blocks: [
        { t: 'p', text: 'The affirmative proposes a **plan** under the year’s resolution and defends it; the negative attacks it from any direction the rules allow. Because the topic lasts a season, both sides arrive with files of evidence — "cards" — and the round is partly a contest of research.' },
        { t: 'debate-lab', viz: 'formats' },
        {
          t: 'terms',
          items: [
            { term: 'Stock issues', def: 'The affirmative’s traditional burdens: harms, inherency, solvency, and significance. See [the policy paradigms](@debate/schools/policy-paradigms).' },
            { term: 'Disadvantage (DA)', def: 'A bad consequence of the plan: uniqueness, link, internal link, impact.' },
            { term: 'Counterplan (CP)', def: 'A different policy that is competitive with the plan and solves better.' },
            { term: 'Topicality (T)', def: 'An argument that the plan is not an example of the resolution. A procedural objection, debated before the substance.' },
            { term: 'Kritik (K)', def: 'A challenge to an assumption behind the plan or the debate itself, borrowed from critical theory.' },
            { term: 'Theory', def: 'Arguments about what the rules of debate should be, run inside the round.' },
            { term: 'The block', def: 'The negative’s 2NC and 1NR together: thirteen minutes that the 1AR must answer in five.' },
            { term: 'Perm', def: 'Permutation: a test of whether the counterplan is really competitive with the plan.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'Why they speak so fast',
          text: 'Coverage is a scored requirement: every argument left unanswered is lost. Words per minute therefore buy arguments per minute, and the equilibrium settled far above conversational speed. It is a rational response to the incentive, which is also exactly why other formats cap it — see [dirty tricks](@debate/winning/dirty-tricks) on spreading against an unprepared opponent.',
        },
        { t: 'p', text: 'The hardest speech in debate is the **1AR**: five minutes to answer thirteen. The skill is triage, not speed — grouping the block’s arguments and answering families of them at once. The arithmetic of that choice is in [strategy and time](@debate/winning/strategy-and-time).' },
      ],
    },
    {
      id: 'ld',
      title: 'Lincoln–Douglas',
      lead: 'One against one, on a question of value.',
      blocks: [
        { t: 'p', text: 'An LD resolution asks whether something is just, moral or desirable. The debater offers a **value** (justice, autonomy, wellbeing) and a **criterion** — also called a value criterion or standard — which tells the judge how to measure progress toward that value. The rest of the case shows that the resolution meets the criterion better than its negation.' },
        {
          t: 'flow',
          title: 'The logic of an LD case',
          nodes: [
            { label: 'Value', sub: 'what ultimately matters', tone: 'model' },
            { label: 'Criterion', sub: 'how we measure it', tone: 'model' },
            { label: 'Contentions', sub: 'the resolution meets it', tone: 'process' },
            { label: 'Impacts', sub: 'measured in the criterion', tone: 'output' },
          ],
          caption: 'Impacts that the criterion says do not matter are worthless, however large. Choosing the criterion is therefore most of the strategy.',
        },
        { t: 'p', text: 'The common novice failure is arguing a strong impact that the criterion cannot register: a utilitarian harm in a round where you have asked the judge to use a deontological standard. If your criterion is rights-based, lives saved only count once you have explained why saving them is a rights matter.' },
        { t: 'callout', tone: 'tip', title: 'The clash is usually above the arguments', text: 'Most LD rounds are decided by which framework the judge adopts, not by who wins more contentions. Spend time on the framework debate, and when you win it, say out loud which of their impacts the framework excludes.' },
      ],
    },
    {
      id: 'pf',
      title: 'Public Forum',
      lead: 'Written to be judged by someone who has never seen a debate.',
      blocks: [
        { t: 'p', text: 'PF was designed as a reaction against the technicality of policy debate. A coin toss decides which side speaks first, speeches are short, and the stated standard is whether an intelligent adult off the street is convinced. In practice, circuits range from fully lay to very nearly as technical as policy, and adapting to the judge in front of you is the format’s defining skill.' },
        {
          t: 'table',
          head: ['Speech', 'Time', 'Job'],
          rows: [
            ['Constructive ×2', '4 min', 'Your case: two or three contentions with evidence.'],
            ['Rebuttal ×2', '4 min', 'Attack their case; the second rebuttal also frontlines your own.'],
            ['Summary ×2', '3 min', 'Narrow to the issues you win and begin weighing.'],
            ['Final Focus ×2', '2 min', 'One or two voting issues, weighed. No new matter.'],
          ],
          caption: 'Crossfire — open questioning between speakers — follows each pair of speeches, with a grand crossfire after the summaries on most circuits.',
        },
        { t: 'p', text: 'The structural squeeze is obvious from the times: four minutes of case has to survive into two minutes of final focus. Teams that try to carry everything say nothing; teams that **collapse** early — pick the one contention they are winning and spend the back half on it — win. The habit to build is deciding what to drop, deliberately, in the summary.' },
        { t: 'debate-lab', viz: 'weighing' },
      ],
    },
    {
      id: 'flow',
      title: 'The flow culture',
      blocks: [
        { t: 'p', text: 'All three formats share an assumption that parliamentary debaters often find strange: the ballot is a technical document. An argument is won by being extended and unanswered, not by being right. This has a famous consequence — a plainly absurd argument that goes unanswered can decide a round — and a less famous virtue: it makes the decision auditable, because the judge can show you on their flow where the round was lost.' },
        { t: 'debate-lab', viz: 'flow' },
        {
          t: 'dodont',
          do: [
            'Flow in columns, one per speech, so an unanswered line is visible.',
            'Extend your arguments by name in every speech, even in a sentence.',
            'Frontline: answer the attacks on your own case before extending it.',
            'Read the judge’s paradigm before the round if it is published.',
          ],
          dont: [
            'Assume the judge remembers an argument you have not mentioned for two speeches.',
            'Answer a new argument in the final focus; most judges will strike it.',
            'Read a card without saying what it proves and what it answers.',
            'Spread in front of a lay judge. You will win the flow and lose the ballot.',
          ],
        },
      ],
    },
    {
      id: 'crossing',
      title: 'Crossing over from parliamentary debate',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'What transfers', tag: 'Keep', body: 'Weighing, framing, and the ability to speak without a script. Parliamentary debaters usually weigh better than their American counterparts and should lean on it.' },
            { title: 'What breaks', tag: 'Relearn', body: 'Coverage. In BP a weak argument can be safely ignored; on the flow it must be answered or it is conceded, however silly it is.' },
            { title: 'Evidence', tag: 'New work', body: 'Cards matter. Analytical assertion is weaker here than you are used to, and "they have no evidence" is a live argument.' },
            { title: 'Procedure', tag: 'New work', body: 'Topicality and theory are real arguments that can win rounds on their own. Learn to answer them before your first tournament.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The common core', text: 'Underneath the cultures, the same two skills decide rounds in all six formats on this shelf: say which issue decides the debate, and compare the two sides on it. Everything else is local convention.' },
      ],
    },
  ],
  sources: [
    'National Speech and Debate Association, Competition Events Guide and High School Unified Manual (current edition).',
    'Snider, A. and Schnurer, M. (2006) Many Sides: Debate Across the Curriculum. IDEA.',
    'Herbeck, D. and Katsulas, J., standard texts on policy debate argumentation; and published judge paradigms on circuit tabulation sites.',
  ],
  related: ['debate/schools/policy-paradigms', 'debate/techniques/flowing-and-notes', 'debate/winning/strategy-and-time', 'debate/systems/judging'],
}

export default guide
