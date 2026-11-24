import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A facilitator’s main instrument is a question, and most questions asked in most rooms are the wrong shape: closed when they should open, abstract when they should be concrete, or aimed at the group when they should be aimed at one person’s experience. This page is the grammar of questions, 120 you can take into a room, and the repair for each of the ones that reliably fail.',
  nutshell: [
    'Six words change an answer more than any amount of rapport: **what, how, when, where, who, which**. Avoid **why** when people may feel judged.',
    'A **funnel** moves from fact to feeling to meaning to action. Jumping to meaning is the commonest debrief failure.',
    'Ask about **experience**, not opinion, when the room is cold: "what did you notice" lands where "what do you think" does not.',
    'One question at a time. A double-barrelled question is answered on the easier barrel.',
    'Silence after a question is the question working. Count seven seconds before rescuing it.',
    'Write three questions in advance per phase; improvising in the room is what produces leading questions.',
  ],
  sections: [
    {
      id: 'grammar',
      title: 'The grammar of a question',
      blocks: [
        {
          t: 'table',
          head: ['Opening word', 'Pulls for', 'Risk'],
          rows: [
            ['What', 'Facts, observations, options. The safest opener in any room.', 'Can stay on the surface if never followed up.'],
            ['How', 'Process, mechanism, feelings about process.', '"How do you feel" too early reads as intrusive.'],
            ['When / where', 'Specifics, which break up generalisation.', 'Can feel like interrogation if stacked.'],
            ['Who', 'Roles, ownership, accountability.', 'Easily heard as blame; pair with a role word, not a name.'],
            ['Which', 'Choice, prioritisation, trade-offs.', 'Forces a false choice if the options are not real.'],
            ['Why', 'Reasons, causes, justification.', 'Heard as "justify yourself". Use "what led to" instead.'],
            ['Do / did / are (closed)', 'A yes or no, a check, a commitment.', 'Ends the conversation; useful only when that is what you want.'],
          ],
        },
        {
          t: 'example',
          title: 'The same question, repaired',
          lines: [
            { label: 'Leading', text: '"Don’t you think we should have started earlier?" → "What would have changed if we had started earlier?"' },
            { label: 'Judging', text: '"Why did nobody check the knots?" → "What made checking hard at that point?"' },
            { label: 'Double-barrelled', text: '"How did that go and what would you change?" → ask the first, wait, then ask the second.' },
            { label: 'Abstract', text: '"How do we build trust?" → "What did someone do today that made it easier to speak up?"' },
            { label: 'Rhetorical', text: '"Was that a good use of our time?" → "What part of that was worth the time, and what was not?"' },
            { label: 'Closed when it should open', text: '"Is everyone happy with that?" → "What would have to change for you to support this?"' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'The nodding trap', text: '"Is everyone happy with that?" produces nodding in every group on earth, and nodding is not agreement. Ask for the objection instead: "what is the strongest reason not to do this?" — which also makes dissent a contribution rather than a risk. Scales for this are in [helping groups decide](@facilitation/frameworks/decision-making).' },
      ],
    },
    {
      id: 'funnel',
      title: 'The funnel',
      blocks: [
        { t: 'p', text: 'A sequence of questions should narrow. The canonical version in facilitation is **ORID** — objective, reflective, interpretive, decisional — and nearly every other model is a relabelling of the same movement. The reason it works is cognitive rather than mystical: people can recall before they can evaluate, and they can evaluate before they can generalise.' },
        {
          t: 'levels',
          caption: 'Each level needs the one below it. Skipping a level produces either silence or a platitude.',
          items: [
            { name: 'Objective: what happened?', body: 'Facts, in order, observable by anyone. "What did we do first?" "Who was where?" "What did you hear?" Cheap to answer, which is why it opens.', verbs: ['recall', 'describe'] },
            { name: 'Reflective: how was it?', body: 'Reactions, feelings, surprises. "What surprised you?" "Where did it get frustrating?" Expect the blame phase here and let it surface.', verbs: ['react', 'notice'] },
            { name: 'Interpretive: what does it mean?', body: 'Patterns, causes, significance. "What does that tell us about how we make decisions under pressure?"', verbs: ['interpret', 'explain'] },
            { name: 'Decisional: what now?', body: 'Commitments with owners. "What is the one thing we do differently on Monday, and who sets it up?"', verbs: ['decide', 'commit'] },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Too fast to meaning', tag: 'Commonest failure', body: 'Opening a debrief with "what did we learn?" The group has not yet agreed what happened, so the answer is whatever sounds like a lesson. Start objective, always.' },
            { title: 'Stuck in objective', tag: 'Second commonest', body: 'Twenty minutes of blow-by-blow recall. Move when the facts stop being contested, not when the story is complete.' },
            { title: 'No decisional level', tag: 'Why nothing changes', body: 'A debrief with no commitment is a conversation. Owner and date, out loud, every time.' },
            { title: 'Reflective skipped', tag: 'Why it feels cold', body: 'Jumping from facts to analysis leaves the emotional content in the room, where it reappears as resistance in the decisional phase.' },
          ],
        },
      ],
    },
    {
      id: 'bank',
      title: 'A question bank',
      lead: 'Grouped by what you need the question to do. Take three into a room, not thirty.',
      blocks: [
        {
          t: 'table',
          head: ['Purpose', 'Questions'],
          rows: [
            ['Open a cold room', '"What brought you here today, in one sentence?" · "What is one thing you already know about this?" · "What would make this hour worth your time?" · "What do you want to be true by the end?"'],
            ['Surface facts', '"What happened first?" · "What did you see from where you were standing?" · "What was the last thing that worked?" · "Walk me through the minute before it went wrong."'],
            ['Open up a quiet person', '"Marcus, you were at the other end of the rope — what did it look like from there?" · "Who has not spoken yet and has something they noticed?" · (to the group) "Take thirty seconds in silence and write one line, then we will hear them."'],
            ['Slow down a dominant one', '"Let me hold that and come back to it — I want to hear two people who have not gone yet." · "You have given us the strongest version of that case; who has the strongest version of the other one?"'],
            ['Deepen', '"What makes that difficult?" · "What would have to be true for that to work?" · "Say more about the part you are least sure of." · "What is underneath that?"'],
            ['Get at interests, not positions', '"What would that get you?" · "If you could not have that, what would you need instead?" · "What are you protecting?"'],
            ['Surface disagreement safely', '"What is the strongest argument against the thing we are about to agree?" · "Who would be unhappy with this and not say so?" · "If this fails in six months, what will have gone wrong?"'],
            ['Move from talk to decision', '"What are we actually deciding?" · "Which of these two, and why that one?" · "What would you need to hear to say yes?" · "What is the smallest version of this we could try?"'],
            ['Get commitment', '"Who owns the first step?" · "By when, and how will we know?" · "What will you stop doing to make room for this?"'],
            ['Transfer out of the room', '"Where else does this happen for you?" · "What is the Monday-morning version of this?" · "Who outside this room needs to know?"'],
            ['Repair after a rupture', '"What do you need from this group to carry on?" · "What happened, and what would make it not happen again?" · "What did I get wrong as the facilitator?"'],
            ['Close', '"One word for how you are leaving." · "What is still unresolved?" · "What is one thing someone else did today that helped you?"'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The best single question in facilitation', text: '"What would have to be true for that to work?" It converts an objection into a condition, keeps the objector’s dignity, and generates the next piece of work. It is also almost impossible to answer defensively.' },
      ],
    },
    {
      id: 'silence',
      title: 'Silence, probes and the seven-second rule',
      blocks: [
        { t: 'p', text: 'Classroom research on "wait time" is one of the more robust findings in education: teachers typically wait under a second after a question, and extending that to three to five seconds lengthens answers, increases the number of students who answer at all, and raises the complexity of what is said. Facilitation inherits the finding directly, and most facilitators are worse at it than teachers because the social pressure in a circle is higher.' },
        {
          t: 'checklist',
          items: [
            'Ask, then count to seven in your head. Do not fill, rephrase or add an example.',
            'If the silence is thinking, people are looking down or away. Leave it.',
            'If the silence is confusion, people look at each other or at you. Rephrase once, more concretely.',
            'If nobody answers after two attempts, it is a bad question or a cold room: switch to writing or pairs for 60 seconds, then ask again.',
            'Never answer your own question. Once you have done it twice, the group has learned to wait you out.',
          ],
        },
        {
          t: 'terms',
          items: [
            { term: 'Probe', def: 'A short follow-up to the same person: "say more", "such as?", "what made that hard?"' },
            { term: 'Mirror', def: 'Repeat their own words back with a rising tone. Cheap, effective, and invisible.' },
            { term: 'Paraphrase', def: '"So what I am hearing is …" — tests understanding and buys the group a second pass.' },
            { term: 'Redirect', def: '"Who else has been in that position?" Moves from one voice to the group without ending the thread.' },
            { term: 'Stack', def: '"I have Ana, then Jo, then Sam." Lets people stop competing for the gap and start listening.' },
            { term: 'Bracket', def: '"Let me park that and come back at 11:15." Only legitimate if you actually come back.' },
          ],
        },
      ],
    },
    {
      id: 'design',
      title: 'Designing questions before the session',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Write the outcome as a sentence', body: '"By the end, the team has chosen one project and named the first three steps." The questions are whatever gets there.' },
            { title: 'Write three questions per phase', body: 'Open, explore, converge, close. Twelve questions for a 90-minute session is plenty, and you will use seven.' },
            { title: 'Test each one for the four faults', body: 'Leading, double-barrelled, abstract, judging. Repair in place.' },
            { title: 'Decide which get silent writing first', body: 'Any question where the first speaker would anchor the rest. Usually the generative ones.' },
            { title: 'Write the one question you are afraid of', body: 'The one that surfaces the real disagreement. Decide in advance whether you are asking it, and where in the arc it goes.' },
          ],
        },
        { t: 'facil-lab', viz: 'agenda' },
        { t: 'p', text: 'Note the round arithmetic in the lab: a check-in round of 8 minutes with 12 people gives each person 40 seconds, and a round that gives people under about 20 seconds reads as a formality. Question design and time design are the same decision — a question nobody has time to answer properly is a worse question.' },
      ],
    },
  ],
  sources: [
    'Stanfield, R. B. (2000) The Art of Focused Conversation (ICA / Technology of Participation), the source of ORID.',
    'Rowe, M. B. (1986) Wait Time: Slowing Down May Be a Way of Speeding Up, Journal of Teacher Education.',
    'Vogt, E., Brown, J. and Isaacs, D. (2003) The Art of Powerful Questions.',
    'Schein, E. (2013) Humble Inquiry. Berrett-Koehler.',
  ],
  related: ['facilitation/frameworks/orid', 'facilitation/debriefing/debrief-techniques', 'facilitation/methods/facilitator-scripts', 'facilitation/methods/structured-methods'],
}

export default guide
