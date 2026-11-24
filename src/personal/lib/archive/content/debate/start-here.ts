import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'A debate is not an argument with better manners. It is a game with a referee, and the referee is not asking who is right about the world — they are asking which team gave them more reason to decide their way, on the material actually said in the room. Everything on this shelf follows from that one fact.',
  nutshell: [
    'A debate is decided **comparatively**. You do not have to be right; you have to be more convincing than the other side on the issues that matter.',
    'The unit of winning is not the speech, it is the **clash**: an issue both sides fought over, which the judge has to call one way.',
    'An argument needs five parts: **claim, mechanism, evidence, impact, weighing**. Most lost arguments are missing one, not wrong.',
    'A **dropped** argument is a won argument. Silence counts as agreement, however foolish the point was.',
    'The **format** decides the game: how long you speak, who may interrupt, and whether the last speech can add anything new.',
    'Judges reward **comparison** above everything. "Our harm is bigger than theirs, and here is why" wins more rounds than any new argument.',
  ],
  sections: [
    {
      id: 'what',
      title: 'What is actually happening in the room',
      blocks: [
        {
          t: 'p',
          text: 'Two or four teams are given a **motion** — a sentence they must argue for or against — and a side they do not choose. They get prep time, sometimes fifteen minutes, sometimes a whole season. Then they speak in a fixed order for a fixed number of minutes, and a judge decides.',
        },
        {
          t: 'p',
          text: 'The thing to internalise early is that the judge is not scoring your beliefs, your research or your voice in isolation. They are holding a sheet of paper with the arguments of the round on it, and asking, issue by issue, who did more. That sheet is called the **flow**, and learning to picture it is most of what improvement consists of.',
        },
        {
          t: 'flow',
          title: 'The shape of a round',
          nodes: [
            { label: 'Motion released', sub: 'and your side assigned', tone: 'data' },
            { label: 'Prep', sub: 'burdens, case, split', tone: 'human' },
            { label: 'Constructive speeches', sub: 'cases built', tone: 'process' },
            { label: 'Rebuttal', sub: 'clashes fought', tone: 'process' },
            { label: 'Summary', sub: 'comparison made', tone: 'model' },
            { label: 'Decision', sub: 'issue by issue', tone: 'output' },
          ],
          caption: 'Every format in the world is a variation on this. What changes is how many minutes each stage gets and who may interrupt.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'The one sentence version',
          text: 'Debating is the skill of making it **easy for someone else to decide in your favour**. Not of being clever, and not of being right.',
        },
      ],
    },
    {
      id: 'vocabulary',
      title: 'The vocabulary, in one page',
      lead: 'Enough to survive your first round without nodding blankly.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Motion / resolution', def: 'The sentence being debated. "This House would ban X."' },
            { term: 'Proposition / government / affirmative', def: 'The side arguing for it. Names change by format, job does not.' },
            { term: 'Opposition / negative', def: 'The side arguing against.' },
            { term: 'Case', def: 'Your side’s set of arguments, plus the framing that holds them together.' },
            { term: 'Model', def: 'The specific version of the policy you are defending: who does what, when, with what enforcement.' },
            { term: 'Burden', def: 'What your side has to prove in order to win. Not always symmetrical.' },
            { term: 'Clash', def: 'An issue both sides engaged. Rounds are decided clash by clash.' },
            { term: 'Rebuttal', def: 'Attacking the other side’s argument. Distinct from rebuilding your own.' },
            { term: 'POI', def: 'Point of information: a fifteen-second interruption asking a question, in parliamentary formats.' },
            { term: 'Flow', def: 'The judge’s and your own written record of what was said and what happened to it.' },
            { term: 'Weighing', def: 'Comparing your impact against theirs and saying why yours decides the round.' },
            { term: 'Dropped', def: 'An argument nobody answered. It stands, whatever its merits.' },
            { term: 'Extension', def: 'In BP, new material from the closing half of a side.' },
            { term: 'Reply / final focus / crystallisation', def: 'The last speech: a summary that tells the judge how to decide.' },
          ],
        },
      ],
    },
    {
      id: 'judge',
      title: 'What judges actually reward',
      blocks: [
        {
          t: 'p',
          text: 'Ask any adjudicator what separates the top quarter of speakers from the rest and you will get the same answer in different words: **comparison and engagement**. Not more arguments, not better words, not more facts.',
        },
        {
          t: 'dodont',
          do: [
            'Tell the judge which issue decides the round, and win that one loudly.',
            'Answer the strongest version of the other side’s point, then say you have.',
            'Compare: "even if they are right about X, our Y is bigger because …".',
            'Signpost, so the judge can file what you say on the right line of the flow.',
            'Concede what is obviously true, and show it does not matter.',
          ],
          dont: [
            'Add a seventh argument when three are unanswered.',
            'Rebut a point they did not make because you prepared the rebuttal.',
            'Read evidence without saying what it proves.',
            'Rely on the judge connecting two of your points for you. They will not.',
            'Treat style as decoration; in most school formats it is marked.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The cheapest improvement available',
          text: 'In your next round, spend the final 60 seconds doing nothing but comparison: "there are two issues in this debate; we win the first because …, and even on the second …". Most novices never do this, and it is worth more than a month of extra reading.',
        },
      ],
    },
    {
      id: 'first',
      title: 'Your first round, step by step',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Read the motion twice', body: 'Once for what it says, once for what kind of claim it is. A policy motion and a value motion need different prep. See [motion types](@debate/systems/motions-and-burdens).' },
            { title: 'Write both sides’ best argument first', body: 'Three minutes. If you cannot state their best point, you cannot beat it, and you will build a case that ignores the real clash.' },
            { title: 'Pick two or three arguments, not six', body: 'Depth beats breadth in every format. Two developed arguments and real rebuttal outscore five assertions, every time.' },
            { title: 'Write taglines, not scripts', body: 'A five-word label per argument so you and the judge can find it again. Scripts collapse the moment the other side says something unexpected.' },
            { title: 'Decide the split', body: 'Who takes which argument, so neither of you repeats the other. See [building a case](@debate/structure/case-building).' },
            { title: 'Flow the other side', body: 'Take notes one argument per line, leaving space on the right for your answer. See [flowing](@debate/techniques/flowing-and-notes).' },
            { title: 'In the last speech, compare', body: 'Name the issues, say who won each, and why that ordering favours you.' },
          ],
        },
      ],
    },
    {
      id: 'labs',
      title: 'Try it now',
      lead: 'Two of the shelf’s tools do more work than any explanation of them.',
      blocks: [
        { t: 'p', text: 'Switch a part of a real argument off and read what the judge writes on the ballot. This is the single most useful diagnostic on the shelf, because almost every losing argument is a complete argument with one part missing.' },
        { t: 'debate-lab', viz: 'argument' },
        { t: 'p', text: 'Then watch what happens to an argument across a whole debate. Note the last column of the first track: the side that stopped talking about the issue lost it, regardless of whether they were right.' },
        { t: 'debate-lab', viz: 'flow' },
      ],
    },
    {
      id: 'route',
      title: 'How to use this shelf',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'You have a round this week', tag: 'Fast path', body: 'Read your format page, then [argument anatomy](@debate/structure/argument-anatomy), [rebuttal and clash](@debate/structure/rebuttal-and-clash) and [weighing](@debate/structure/weighing). That is enough to compete.' },
            { title: 'You keep losing close rounds', tag: 'Diagnosis', body: 'It is almost always weighing or time allocation. Read [weighing](@debate/structure/weighing) and [strategy and time](@debate/winning/strategy-and-time), then [winning tricks](@debate/winning/winning-tricks).' },
            { title: 'You want to judge', tag: 'Adjudication', body: 'Start at [judging](@debate/systems/judging), then the [policy paradigms](@debate/schools/policy-paradigms) to see how contested the question of a judge’s role really is.' },
            { title: 'You are here for the theory', tag: 'Schools', body: '[Classical rhetoric](@debate/schools/classical-rhetoric), [Toulmin](@debate/schools/toulmin-and-informal-logic), [pragma-dialectics](@debate/schools/pragma-dialectics) and the [dialectic traditions](@debate/schools/dialectic-traditions).' },
            { title: 'You are coaching novices', tag: 'Teaching', body: 'Use [drills](@debate/practice/drills) and the [motion bank](@debate/practice/motion-bank); the labs are built to be put on a screen in front of a class.' },
            { title: 'You came for the tricks', tag: 'Strategy', body: 'They are in [winning](@debate/winning/winning-tricks) and [dirty tricks](@debate/winning/dirty-tricks) — but they only work on top of structure.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'A warning about tricks',
          text: 'Every strategic move on this shelf is a multiplier on substance, never a substitute for it. A pre-empt with no argument behind it is a sentence; a turn on a point you have not understood hands them the round. Learn the structure first.',
        },
      ],
    },
  ],
  sources: [
    'Quinn, S. (2005) Debating. A widely used introduction written for the Australasian and World Schools circuits.',
    'World Universities Debating Championship, Debating and Judging Manual (current edition).',
    'van Eemeren, F. H. and Grootendorst, R. (2004) A Systematic Theory of Argumentation: The Pragma-Dialectical Approach. Cambridge University Press.',
    'Toulmin, S. (1958) The Uses of Argument. Cambridge University Press.',
  ],
  related: ['debate/structure/argument-anatomy', 'debate/formats/british-parliamentary', 'debate/structure/weighing', 'thinking/fallacies'],
}

export default guide
