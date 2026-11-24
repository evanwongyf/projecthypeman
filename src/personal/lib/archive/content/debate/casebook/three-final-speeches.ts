import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The same closing speech, on the same round, written three ways: the version most debaters give, the version that is competent, and the version that wins. All three are about four minutes. The only difference is what they spend the time on, and the difference in result is most of what separates teams at the same level.',
  nutshell: [
    'Weak closings **re-argue**. Competent closings **summarise**. Winning closings **decide**.',
    'The winning version spends almost all its time on comparison, which is never new matter.',
    'Name two issues, not five. The arithmetic of a four-minute speech allows two properly.',
    'Quote the round: "they said X and never returned to it" is checkable and therefore credible.',
    'Build an **even-if** so that losing one issue does not lose the round.',
    'Finish with the sentence you want written on the ballot.',
  ],
  sections: [
    {
      id: 'round',
      title: 'The round being closed',
      blocks: [
        { t: 'p', text: 'Motion: *This House would abolish grades in the first year of university.* Proposition ran reduced anxiety and more academic risk-taking, plus a claim that first-year grades mostly measure prior schooling. Opposition ran feedback loss, selection for scholarships, and a distributional argument that removing a public signal leaves a private one. Both sides have something. This is the normal state of a debate, and it is why the closing speech matters.' },
        {
          t: 'table',
          head: ['Issue', 'Proposition had', 'Opposition had'],
          rows: [
            ['Does the signal measure learning?', 'First-year marks track prior schooling; evidence of the gap at entry.', 'They also track effort and feedback uptake; the gap narrows across the year.'],
            ['What replaces the signal?', 'Formative feedback, which is what good teaching does anyway.', 'Formative feedback is unevenly delivered; the mark is the one students actually read.'],
            ['Who is helped and who is hurt?', 'Anxious and first-generation students gain most.', 'The same students lose the earliest warning that they are behind.'],
            ['Reversibility', 'A policy that can be reversed next year.', 'A failed second year cannot.'],
          ],
        },
      ],
    },
    {
      id: 'weak',
      title: 'Version one: the speech most people give',
      blocks: [
        {
          t: 'example',
          title: 'Transcript, with margin notes',
          lines: [
            { label: '0:00', text: '"I want to go back over why our arguments were right. Our first argument was about anxiety. Mental health in universities is at a crisis point, and it is well documented that assessment is a major driver —"' },
            { label: '[judge]', text: 'This is a fourth substantive, not a closing. Re-arguing material I already have, and adding a new claim about a crisis point that was not in the round.' },
            { label: '1:10', text: '"Our second argument was about risk-taking. Students choose easy modules because they are afraid of their average, and that is a real cost to their education."' },
            { label: '[judge]', text: 'Repetition without comparison. I already had this and had already weighed it against their feedback argument. Nothing has changed on my page.' },
            { label: '2:20', text: '"They said that students need feedback. But we said feedback can be formative, and good universities already do that, so their argument does not stand."' },
            { label: '[judge]', text: '"We said X, so their argument falls" is assertion, not resolution. Their second speaker gave a specific answer — formative feedback is unevenly delivered — and it has not been engaged with here.' },
            { label: '3:30', text: '"For all these reasons, we are proud to propose."' },
            { label: '[judge]', text: 'Four minutes, no comparison, one piece of new material I have to strike. I now have to weigh the round myself, which means my own instincts decide it rather than anything they said.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Why this version feels productive', text: 'It is the only version that lets you talk about your own best material for four minutes, and your own material is what you understand best. That is exactly why it is a trap: the judge has already heard it, and the thing they have not heard is the comparison.' },
      ],
    },
    {
      id: 'competent',
      title: 'Version two: competent',
      blocks: [
        {
          t: 'example',
          title: 'Transcript, with margin notes',
          lines: [
            { label: '0:00', text: '"Three issues in this debate: what the grade measures, what replaces it, and who bears the cost. I will take them in that order."' },
            { label: '[judge]', text: 'Proper roadmap. Three headings, and I am writing them down. Already far better than version one.' },
            { label: '0:20', text: '"On what the grade measures: we showed first-year marks track the school you came from. Their answer was that they also track effort. Both are true, and we say the prior-schooling component is larger in first year specifically, which is the only year the motion touches."' },
            { label: '[judge]', text: 'Fair summary of both sides and a reason to prefer theirs. Good.' },
            { label: '1:30', text: '"On what replaces it: they said feedback is unevenly delivered. We accept that and say the answer is to fix feedback, not to keep a signal that does the wrong job."' },
            { label: '[judge]', text: 'Engages, but "fix feedback" is a cost they have not costed. Opposition is still slightly ahead here on my page.' },
            { label: '2:40', text: '"On who bears the cost: they said weak students lose the early warning. We said anxious and first-generation students gain most. Both groups are real and we think ours is larger."' },
            { label: '[judge]', text: '"We think ours is larger" is an assertion of weighing rather than weighing. Why larger? On what axis? This is the sentence that decides the round and it has been left as a claim.' },
            { label: '3:40', text: '"Across all three issues we are ahead, and we urge you to propose."' },
            { label: '[judge]', text: 'A genuinely competent speech: structured, honest about both sides, engaged. It loses because the third issue — the one that decides — was summarised rather than resolved.' },
          ],
        },
      ],
    },
    {
      id: 'winning',
      title: 'Version three: the one that wins',
      blocks: [
        {
          t: 'example',
          title: 'Transcript, with margin notes',
          lines: [
            { label: '0:00', text: '"Two questions decide this debate. First, is the first-year grade a signal worth keeping. Second, if we are wrong, who pays for it. I will give you the second one first, because it is the one they win most of, and I want to show you that we win the round even on their version of it."' },
            { label: '[judge]', text: 'Two issues rather than three, the weaker one taken first, and an even-if announced in advance. This is a speech that knows where it is losing.' },
            { label: '0:35', text: '"Their strongest argument in this round — and it is stronger than ours on this issue — is that a weak student finds out too late. Take it at its full strength: a student who would have had a warning in December instead discovers in June. That is their case and we are not going to pretend it away."' },
            { label: '[judge]', text: 'Stating their case at full strength. Credibility just went up, and anything that follows is read more generously.' },
            { label: '1:15', text: '"Here is why it does not decide the round. Their harm requires that the grade is the only warning available, and they conceded in their second speech that tutorials, formative work and attendance data all exist — their argument was that these are unevenly delivered. So their harm is not the absence of a warning; it is the unevenness of one. Ours is the presence of a signal that measures the wrong thing for everyone, every time. One is an implementation problem with a known fix; the other is a design problem with none."' },
          ],
        },
        {
          t: 'example',
          title: 'Continued',
          lines: [
            { label: '[judge]', text: 'That is resolution rather than summary: it uses their own concession, names the asymmetry between an implementation problem and a design problem, and prices both. This is the moment the round moved.' },
            { label: '2:10', text: '"And on reversibility, which they raised last: we accept a failed second year cannot be undone. But note what their own model requires — that the warning arrives *and* is acted on *and* the student has the support to act. Three steps. Ours requires one: that the signal stops misdirecting effort. When they ask you to prefer certainty, they are asking you to prefer a three-step mechanism over a one-step one."' },
            { label: '[judge]', text: 'Turns the reversibility argument into a probability argument by counting links. Neat, and it is the first time anyone in the round has done it.' },
            { label: '2:55', text: '"The first question, briefly, because we are clearly ahead on it: nobody contested that first-year marks track prior schooling. They said marks also track effort. That is a reason to think the signal is noisy, which is our case, not an answer to it."' },
            { label: '[judge]', text: 'Correct characterisation and efficient: thirty seconds on the issue they are winning, rather than two minutes.' },
            { label: '3:30', text: '"So: if you think the early warning matters most, we win, because their warning is uneven by their own admission and fixable without keeping the grade. If you think the signal matters most, we win, because nobody denied it measures the wrong thing. You only vote opposition if you believe both that the warning is reliable and that the signal is accurate — and their own speakers conceded one of those in the second speech."' },
            { label: '[judge]', text: 'There is the ballot sentence, and it is a conjunction: opposition needs two things, proposition needs either. I am copying this onto the ballot nearly verbatim.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Version 1', 'Version 2', 'Version 3'],
          rows: [
            ['Time on own material', '~3:30', '~1:30', '~0:40'],
            ['Issues named', '0', '3', '2'],
            ['Comparisons made', '0', '1, asserted', '3, each with an axis'],
            ['Their best argument stated fairly', 'No', 'Yes', 'Yes, at full strength'],
            ['Even-if structure', 'No', 'No', 'Yes, announced at 0:00'],
            ['Quoted the round', 'No', 'Loosely', 'Yes, a specific concession'],
            ['New matter', 'Yes (struck)', 'No', 'No'],
            ['Judge has to weigh it themselves', 'Entirely', 'On the decisive issue', 'No'],
          ],
          caption: 'All three speeches are the same length and the same side of the same round.',
        },
      ],
    },
    {
      id: 'template',
      title: 'The template',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '0:00–0:20  Name two issues and announce the even-if', body: '"Two questions decide this. I will take the one they win first, and show we win anyway."' },
            { title: '0:20–1:15  Their best argument, at full strength', body: 'Stated fairly. This buys the credibility for everything that follows.' },
            { title: '1:15–2:15  Resolve it, with an axis', body: 'Not "ours is bigger" but "theirs is an implementation problem and ours is a design problem". Use their concessions, quoted.' },
            { title: '2:15–3:00  The issue you are winning, briefly', body: 'Thirty to forty seconds. Spending longer here is the commonest misallocation in closing speeches.' },
            { title: '3:00–3:45  The conjunction', body: '"You vote for them only if you believe both X and Y. They conceded X." Make their path narrow and yours wide.' },
            { title: '3:45–4:00  The ballot sentence', body: 'One line, accurate, copyable.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Practise the first twenty seconds', text: 'Everything above follows from the opening: two issues, weaker first, even-if announced. Drill that sentence on ten motions and the rest of the speech organises itself. The drill set is in [drills](@debate/practice/drills), and the strategic logic is in [winning tricks](@debate/winning/winning-tricks).' },
      ],
    },
  ],
  related: ['debate/structure/weighing', 'debate/winning/winning-tricks', 'debate/casebook/annotated-round', 'debate/structure/speaker-roles'],
}

export default guide
