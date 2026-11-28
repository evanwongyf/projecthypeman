import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Questioning is the only part of a debate where the other side cannot control what is said about their case. A good question forces a choice between two answers that both cost them something. A bad one hands them thirty seconds of free speech, which is why most questions asked in most rounds are a gift.',
  nutshell: [
    'A **point of information** is a fifteen-second interruption, offered between the first and last minute, which the speaker may decline.',
    '**Cross-examination** and **crossfire** are dedicated questioning periods, scored in some formats.',
    'The purpose is never to win the exchange. It is to create a **quotable concession** you use in your own speech.',
    'Ask closed questions; open questions are a platform for them.',
    'Build a **two-question trap**: the first establishes a commitment, the second applies it.',
    'Answering: answer in one sentence, then return to your structure. Do not debate from the chair.',
  ],
  sections: [
    {
      id: 'poi',
      title: 'Points of information',
      blocks: [
        { t: 'p', text: 'In parliamentary formats, anyone on the opposing side may stand during the unprotected middle of a speech and offer a point. The speaker takes it or waves it away. Convention expects a speaker to take one or two, and expects everyone to offer several — an entire bench that never stands reads as disengaged, and adjudicators mark it.' },
        { t: 'debate-lab', viz: 'timer' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'When to offer', tag: 'Timing', body: 'Just after they state a claim and before they support it: the point lands in the gap. Offering during their rebuttal of someone else is wasted.' },
            { title: 'When to take', tag: 'Control', body: 'Between arguments, never mid-mechanism. Take one in the third minute and one in the fifth; that is a structure, not a surrender.' },
            { title: 'Form', tag: 'Fifteen seconds', body: 'One sentence of setup, one question. If you have not asked by the second sentence, you are making a speech and will be sat down.' },
            { title: 'What makes it good', tag: 'The dilemma', body: 'Both answers hurt. "Does your model exempt small traders?" — yes, and the ban leaks; no, and you have just named your own harm.' },
          ],
        },
      ],
    },
    {
      id: 'cx',
      title: 'Cross-examination',
      blocks: [
        { t: 'p', text: 'Three minutes, one questioner, one answerer, in policy, LD and Karl Popper. In Karl Popper it is explicitly scored. Unlike a POI there is time to build a sequence, which changes the technique completely: you are not looking for one dilemma, you are walking them into a position.' },
        {
          t: 'steps',
          items: [
            { title: 'Start with agreement', body: 'Two questions they must answer yes to. It establishes the premise you will use and makes a later refusal look evasive.' },
            { title: 'Pin the commitment', body: '"So your model applies to all firms, including the small ones?" Get it on the record in their words.' },
            { title: 'Apply it to the hard case', body: '"And a one-van delivery business pays the same charge as a fleet?"' },
            { title: 'Stop', body: 'Do not argue with the answer. You now have a quote. Arguing turns your quote into a contested exchange.' },
            { title: 'Use it in your speech', body: 'Repeat their words: "they told us in cross-examination that …". This is where the value is realised, not in the exchange itself.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The commonest cross-examination error', text: 'Winning the argument in the questioning period. Judges rarely credit it, time runs out, and you have shown them exactly what you intend to say next. Collect the concession and sit down.' },
      ],
    },
    {
      id: 'asking',
      title: 'Questions that work',
      blocks: [
        {
          t: 'table',
          head: ['Type', 'Shape', 'Why it works'],
          rows: [
            ['The dilemma', 'Does your model do A or B?', 'Both answers carry a cost you have already prepared for.'],
            ['The specification', 'Who exactly enforces this, and with what penalty?', 'Unspecified models collapse under one direct question.'],
            ['The concession', 'Do you accept that some group loses out?', 'A yes is quotable; a no is implausible and costs them credibility.'],
            ['The consistency', 'You said X earlier — does that apply here too?', 'Forces a choice between abandoning the principle and accepting your case.'],
            ['The counterfactual', 'What happens in your world if the problem gets worse?', 'Tests whether they have a mechanism or a hope.'],
            ['The number', 'How many people does your own evidence cover?', 'Scope answers are usually smaller than their rhetoric implied.'],
          ],
        },
        {
          t: 'dodont',
          do: [
            'Ask closed questions with two possible answers.',
            'Write the question down before you stand; improvised points ramble.',
            'Ask about their model, their mechanism, or their own words. Never about general knowledge.',
            'Accept a short answer and move on.',
          ],
          dont: [
            'Ask "how do you respond to …" — that is an invitation to speak.',
            'Ask a question whose best answer helps them.',
            'Ask a question you cannot use in your next speech.',
            'Ask three questions in one; they will answer the easiest.',
          ],
        },
      ],
    },
    {
      id: 'answering',
      title: 'Answering well',
      blocks: [
        { t: 'p', text: 'The job when answering is damage control and nothing else. Answer, qualify if you must, and get back to your own structure within two sentences.' },
        {
          t: 'example',
          title: 'Three answers to the same hostile question',
          lines: [
            { label: 'Question', text: '"Does your ban apply to tradespeople who cannot work without a van?"' },
            { label: 'Weak', text: '"Well, that is a complicated issue, and I think there are many factors …" — the hesitation is the answer the judge records.' },
            { label: 'Weak the other way', text: '"No, never" — an absolute you will have to defend for the rest of the round.' },
            { label: 'Strong', text: '"Permits for commercial vehicles, as we said: the ban is on private cars, which is 80% of the traffic and the part with substitutes." Answer, scope, return.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Answer the question actually asked, in the first sentence.',
            'If the question contains a false premise, name it, then answer the fair version.',
            'If you genuinely do not know, say what your case does not depend on, and move.',
            'Never say "I will come to that" more than once in a speech.',
            'Take the point, answer it, and resume your sentence — do not restart your argument.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Accepting a point is a strategy', text: 'A speaker who takes a hard point in the fourth minute, answers it in fifteen seconds and carries on has demonstrated command of their own case more convincingly than any amount of assertion. Declining everything has the opposite effect, and adjudicators write it down.' },
      ],
    },
  ],
  sources: [
    'IDEA Karl Popper format rules, on scored cross-examination.',
    'World Universities Debating Championship Debating and Judging Manual, on points of information.',
    'National Speech and Debate Association, Competition Events Guide, on crossfire.',
  ],
  related: ['debate/techniques/refutation-techniques', 'debate/formats/other-formats', 'debate/techniques/delivery-and-style'],
}

export default guide
