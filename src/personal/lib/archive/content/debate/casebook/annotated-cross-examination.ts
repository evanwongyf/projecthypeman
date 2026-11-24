import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Three questioning periods on the same motion, transcribed in full: one that produced a quotable concession, one that gave the other side ninety seconds of free speech, and one that handed them an argument they had not thought of. Each is followed by the rebuilt version, so the fix is visible rather than described.',
  nutshell: [
    'The purpose of a question is a **quotable concession** you use in your own speech, not a win in the exchange.',
    'Closed questions with two answers; open questions are a platform for them.',
    'Build a **two-question trap**: the first establishes a commitment, the second applies it to a hard case.',
    'Stop when you have the answer. Arguing with it converts your quote into a contested exchange.',
    'When answering: one sentence, a qualification if you must, then back to your own structure.',
    'The commonest own goal is a question that introduces an argument they had not made.',
  ],
  sections: [
    {
      id: 'good',
      title: 'One: the two-question trap',
      lead: 'Three minutes of cross-examination after the first affirmative, on a motion to make voting compulsory.',
      blocks: [
        {
          t: 'example',
          title: 'Transcript',
          lines: [
            { label: 'Q', text: '"Your model fines non-voters. What is the fine?"' },
            { label: 'A', text: '"Twenty pounds, as in Australia, indexed, with exemptions on application."' },
            { label: '[note]', text: 'Opening with a factual question about their own model. It is almost impossible to refuse and it pins a number. The number is the hinge for everything that follows.' },
            { label: 'Q', text: '"And is the purpose of the fine to raise revenue, or to change behaviour?"' },
            { label: 'A', text: '"To change behaviour, obviously."' },
            { label: '[note]', text: 'The commitment. They cannot say revenue — it would make the policy look cynical — so the answer is forced, which is what a good question does.' },
            { label: 'Q', text: '"So the fine has to be large enough that someone who would not otherwise vote decides to vote. For a household on a median income, is twenty pounds that large?"' },
            { label: 'A', text: '"For some, yes. And for others the social expectation does the work."' },
            { label: '[note]', text: 'They have conceded that the fine does not bind for some, and introduced a second mechanism — social expectation — on the fly. Both are useful.' },
            { label: 'Q', text: '"Then take the two groups. For the household where twenty pounds matters, you have imposed a cost on the poorest non-voters. For the household where it does not, you have changed nothing. Which group is your policy for?"' },
            { label: 'A', text: '"It is for the system as a whole, and the revenue is recycled into electoral administration —"' },
            { label: 'Q', text: '"Thank you, that is the answer I needed."' },
            { label: '[note]', text: 'Stopped exactly on time. The answer drifted into revenue, which contradicts the earlier commitment, and the questioner did not argue with it — they banked it.' },
          ],
        },
        {
          t: 'example',
          title: 'What was done with it, in the next speech',
          lines: [
            { label: 'Speech', text: '"In cross-examination they told us the fine exists to change behaviour, not to raise money. Then they told us it is too small to bind for the comfortable and recycled as revenue when it does bind. Both cannot be true. Either the fine is a deterrent, in which case it is a deterrent aimed at the poorest non-voters, or it is a tax on not voting dressed as a civic duty."' },
            { label: '[note]', text: 'This is the whole value of the exchange: a dilemma built from their own words, delivered to the judge in forty seconds. The judge heard the original answers and can verify every clause.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'Question one: a fact about their model. Unrefusable, and it fixes a number.',
            'Question two: the purpose. Forces a commitment they cannot comfortably decline.',
            'Question three: apply the commitment to a hard case.',
            'Question four: the dilemma, stated as a question.',
            'Stop. Use it in the speech, with their words quoted.',
          ],
        },
      ],
    },
    {
      id: 'wasted',
      title: 'Two: the wasted period',
      lead: 'The same motion, the same three minutes, and nothing to show for it.',
      blocks: [
        {
          t: 'example',
          title: 'Transcript',
          lines: [
            { label: 'Q', text: '"How do you respond to the argument that compulsory voting is a violation of freedom of conscience?"' },
            { label: 'A', text: '"Thank you for the question. There are three answers. First, we compel jury service, tax and census returns, none of which anyone regards as tyranny. Second, our model permits a spoiled ballot, so nobody is compelled to endorse anyone. Third, the freedom to abstain is currently exercised overwhelmingly by the young and the poor, which means the status quo is not neutral between consciences — it is neutral between people with very different amounts of time."' },
            { label: '[note]', text: 'Ninety seconds of uninterrupted, well-organised speech, given to the other side for free. "How do you respond to" is an invitation to make their case, and they made it better than they would have in their own speech.' },
            { label: 'Q', text: '"But do you not agree that some people have genuine moral objections?"' },
            { label: 'A', text: '"Of course, and the spoiled ballot answers them completely."' },
            { label: '[note]', text: 'A yes/no question whose yes costs them nothing. The answer also repeats their strongest line a second time, so the judge has now heard it twice.' },
            { label: 'Q', text: '"And what about the cost of administering it?"' },
            { label: 'A', text: '"Marginal: the electoral roll already exists, and Australia runs this for the price of a stamp per elector."' },
            { label: '[note]', text: 'Third unrelated question. No sequence, no trap, no concession. The period produced one usable fact — the Australian comparison — and it was theirs, not the questioner’s.' },
          ],
        },
        {
          t: 'example',
          title: 'The rebuilt version',
          lines: [
            { label: 'Q', text: '"Your model permits a spoiled ballot. Is a spoiled ballot counted in your turnout figure?"' },
            { label: 'A', text: '"It is counted as attendance, yes."' },
            { label: 'Q', text: '"So the thing your policy guarantees is attendance, not participation?"' },
            { label: 'A', text: '"Attendance is the precondition for participation."' },
            { label: 'Q', text: '"And your argument about politicians responding to poorer voters — does that work on attendance, or on votes?"' },
            { label: 'A', text: '"On votes, but attendance raises votes —"' },
            { label: 'Q', text: '"Thank you."' },
            { label: '[note]', text: 'Same three minutes, same material. The difference is that each question is closed, each builds on the last answer, and the sequence drives at one target: the gap between the measure their policy moves and the mechanism their case needs.' },
          ],
        },
      ],
    },
    {
      id: 'backfired',
      title: 'Three: the own goal',
      lead: 'A questioning period that gave the other side a better case than the one they had.',
      blocks: [
        {
          t: 'example',
          title: 'Transcript',
          lines: [
            { label: 'Q', text: '"Is it not true that compulsory voting would just produce a flood of uninformed votes, which is worse for democracy than low turnout?"' },
            { label: 'A', text: '"That is an interesting objection and I am glad you raised it, because it concedes our central claim: that the people currently not voting are different from the people voting. You have just told the room that there is a large group whose preferences are absent from the result. We say absent preferences are a worse problem for a democracy than imperfectly informed ones — and note that nobody proposes a knowledge test for the voters we already have."' },
            { label: '[note]', text: 'The question handed them a turn. "Uninformed voters" is a known argument with a known answer, and asking it in cross-examination let them deliver that answer in front of the judge before the questioner had framed it in their own speech.' },
            { label: 'Q', text: '"But surely an uninformed vote is worse than no vote?"' },
            { label: 'A', text: '"Then the logic of your position is that fewer people should vote, and you should tell the panel which people."' },
            { label: '[note]', text: 'Now the questioner is defending a position they never intended to hold, in a period they are supposed to control. This is the characteristic failure mode: arguing in cross-examination.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Ask about their model, their mechanism, or their own words.',
            'Ask questions whose every answer is useful to you.',
            'Write the two or three questions down before you stand.',
            'Accept a short answer and move on; the speech is where you argue.',
          ],
          dont: [
            'Ask "how do you respond to …" — it is a request for a speech.',
            'Introduce an argument of theirs that they have not made.',
            'Ask a question you cannot quote in your next speech.',
            'Argue with the answer. You have one minute and they have the floor.',
          ],
        },
      ],
    },
    {
      id: 'answering',
      title: 'Answering: three replies to one hostile question',
      blocks: [
        {
          t: 'example',
          title: 'The question',
          lines: [
            { label: 'Q', text: '"Does your ban apply to the tradesperson who cannot work without a van?"' },
            { label: 'Weak', text: '"Well, that depends on a number of factors, and I think the honest answer is that there are difficult cases here, and we would need to look at —" The hesitation is what the judge records, not the content.' },
            { label: 'Also weak', text: '"No, never." An absolute you now have to defend for six speeches, and the first counterexample costs you the exchange.' },
            { label: 'Strong', text: '"Commercial vehicles are permitted, as we said in the model: the ban is on private cars, which is about 80% of the traffic and the part with substitutes." Answer, scope, back to the structure, in eleven seconds.' },
            { label: '[note]', text: 'Notice the pattern: direct answer, then a number that makes the answer load-bearing, then stop. Adding a fourth clause would invite a follow-up.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'If the question has a false premise', tag: 'Name it, then answer', body: '"That assumes the permit is discretionary. It is automatic for blue badges. On the version of the question that does apply —"' },
            { title: 'If you do not know', tag: 'Say what the case does not need', body: '"I do not have that figure. Our argument does not depend on it, because even at their number —" Never bluff a statistic; cross-examination is where bluffs are caught.' },
            { title: 'If it is a long speech disguised as a question', tag: 'Reclaim the floor', body: 'In parliamentary formats, sit them down after fifteen seconds: "I will take the question." In cross-examination, answer the first clause only.' },
            { title: 'If the answer hurts you', tag: 'Concede and shrink', body: '"Yes, and that group is about 4% of journeys, which is the cost we have accepted openly." A conceded cost with a number is much smaller than a dodged one.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The habit that fixes most questioning', text: 'Before you stand, write the sentence you want to say in your next speech: "In cross-examination they told us ___." Then ask the questions that fill in the blank. If you cannot write the sentence, you do not yet have a question worth asking.' },
      ],
    },
  ],
  related: ['debate/techniques/points-and-cross-examination', 'debate/casebook/annotated-round', 'debate/formats/other-formats'],
}

export default guide
