import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most sessions that fail were lost before anyone entered the room, in a conversation that never happened. Contracting is that conversation: what the group is actually being asked to do, who decides afterwards, what happens to what they say, and what the facilitator will and will not do. It takes twenty minutes with the sponsor and three minutes with the group, and it is the highest-leverage time you will spend.',
  nutshell: [
    'Two contracts: one with the **sponsor** who commissioned the session, one with the **group** in the room.',
    'The sponsor contract settles **mandate**: advisory or decisive, and who decides if it is advisory.',
    'The group contract settles **process**: how we work, what is recorded, what is confidential, and what happens next.',
    'Say the decision rule out loud, in the first five minutes, in one sentence.',
    'A ground rule with no consequence is a wish. Agree what happens when one is broken.',
    'If the sponsor cannot answer "what will you do if the group recommends something you dislike?", you have found the risk in the session.',
  ],
  sections: [
    {
      id: 'sponsor',
      title: 'The sponsor conversation',
      blocks: [
        { t: 'p', text: 'Before the session, with whoever asked for it. The purpose is to find out whether the session you have been asked to run is the session that is needed — and, often, to discover that a decision has already been made and what is wanted is consent theatre.' },
        {
          t: 'steps',
          items: [
            { title: 'What is the question?', body: '"If this goes well, what question will have been answered by the end?" A sponsor who cannot answer this in a sentence has not finished thinking, and the session will drift.' },
            { title: 'Advisory or decisive?', body: '"Does the group decide, or recommend?" Then the follow-up that matters: "if they recommend something you do not like, what will you do?" The answer tells you what the session really is.' },
            { title: 'What is already decided?', body: '"What is not on the table?" Constraints are fine; hidden constraints are fatal. Groups detect a fixed decision within about twenty minutes and disengage for the rest of the day.' },
            { title: 'Who is in the room, and who is missing?', body: 'Named people, their stake, and anyone whose absence will invalidate the result.' },
            { title: 'What happens to the output?', body: 'Who writes it up, who sees it, by when, and who replies to the group. A session with no feedback loop teaches the group not to bother next time.' },
            { title: 'What is the sponsor’s role in the room?', body: 'Participant, observer, or opener-and-leaver. Each is workable; the unworkable version is participant-who-is-also-the-decision.' },
            { title: 'What would make this a failure?', body: 'Ask it directly. The answers are usually specific and useful, and they tell you what to protect.' },
          ],
        },
        {
          t: 'example',
          title: 'The question that saves the session',
          lines: [
            { label: 'You', text: '"If the group recommends keeping the current structure, what will you do?"' },
            { label: 'Sponsor A', text: '"Then we keep it. I genuinely do not know which is right." — A real consultation. Design for divergence.' },
            { label: 'Sponsor B', text: '"We cannot, the board has already agreed the restructure." — Not a decision session. Redesign as implementation: "given the restructure, how do we do it well?" and say so at the start.' },
            { label: 'Sponsor C', text: '"I would be very disappointed." — The dangerous answer. Push once: "so is this advisory with a steer, or a decision?" Then contract explicitly for whichever it is.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Refusing the brief', text: 'There is one brief worth declining: a session designed to produce apparent buy-in for a decision already taken, without telling the participants. It does not work, it costs the group’s trust in every future session, and the facilitator is the person it is spent on. Offer the honest alternative — a briefing plus a genuine conversation about implementation — and be prepared to be told no.' },
      ],
    },
    {
      id: 'group',
      title: 'The group contract',
      blocks: [
        { t: 'p', text: 'Three minutes at the start, not fifteen. Most ground-rule exercises are theatre: the group generates "respect" and "listen", nobody can enforce either, and the actual norms are set by what you let happen in the first twenty minutes.' },
        {
          t: 'example',
          title: 'A contracting script that fits in three minutes',
          lines: [
            { label: 'Purpose', text: '"We are here to choose between the three options on the wall and name the first step on the one we choose."' },
            { label: 'Mandate', text: '"This is a recommendation. Priya decides by Friday and will write to all of you with the decision and the reason, whichever way it goes."' },
            { label: 'Process', text: '"We will work mostly in threes, because a room of eighteen gives each of you two minutes and a three gives you fifteen."' },
            { label: 'Record', text: '"Everything on the walls gets photographed and circulated. Nothing is attributed to a person unless you ask for it to be."' },
            { label: 'My job', text: '"I am here for the process, not the content. I have no view on which option is right and I will not let the loudest version win by volume."' },
            { label: 'Their job', text: '"Say the thing you would say in the corridor afterwards. If you cannot, tell me and we will find a way."' },
            { label: 'One ask', text: '"One rule: no idea gets evaluated in the first ten minutes of any phase. I will interrupt that, including if it is me."' },
            { label: 'Check', text: '"What would you add, or what are you unsure about?" — then wait seven seconds.' },
          ],
        },
        {
          t: 'table',
          head: ['Element', 'Weak version', 'Strong version'],
          rows: [
            ['Purpose', '"To discuss the restructure."', '"To choose one of three options and name the first step."'],
            ['Mandate', 'Unstated.', '"Advisory; Priya decides Friday and explains."'],
            ['Confidentiality', '"What is said here stays here."', '"Content leaves, attribution does not. Priya gets the clusters, not who said what."'],
            ['Ground rules', 'Six words on a flipchart.', 'One behavioural rule with a stated consequence: "I will interrupt early evaluation."'],
            ['Facilitator role', 'Assumed.', '"Process, not content, and I will say when I am stepping out of that role."'],
            ['Output', '"We will write it up."', '"Photos by tonight, a one-page summary Wednesday, Priya’s decision Friday."'],
          ],
        },
      ],
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality, precisely',
      blocks: [
        { t: 'p', text: '"What is said here stays here" is almost always false — something is going to the sponsor — and a group that notices the false promise discounts everything else you said. Be precise instead, using the distinction between content and attribution.' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Content out, attribution in', tag: 'The usual setting', body: '"The themes go to the sponsor; who said what does not." Workable, honest, and the default for most organisational sessions.' },
            { title: 'Nothing out', tag: 'Rare', body: 'Only possible when the sponsor has no stake in the output — a team’s own retrospective. Say who, specifically, will not see it.' },
            { title: 'Everything out, attributed', tag: 'Sometimes required', body: 'Public consultations, governance meetings, anything minuted. Say so at the start and expect a different and more careful conversation.' },
            { title: 'Mixed, by phase', tag: 'Useful', body: '"The wall is shared; the anonymous cards at the end come to me only." Lets you collect the thing nobody will say in the room.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Say the exception out loud', text: 'There is normally one: safeguarding, or anything disclosing serious wrongdoing. Naming it costs nothing — "with one exception: if something is said that suggests someone is at risk, I have to pass it on" — and failing to name it is how a facilitator ends up breaking a promise they should never have made.' },
      ],
    },
    {
      id: 'rules',
      title: 'Ground rules that actually do something',
      blocks: [
        { t: 'p', text: 'A rule is only real if it has a mechanism. The test: can you say, in advance, what you will do when it is broken? If not, it is a value statement, and values are better demonstrated than posted.' },
        {
          t: 'table',
          head: ['Rule', 'Mechanism when broken'],
          rows: [
            ['No evaluation in the first ten minutes of a phase.', '"Hold that — park it on the sheet and we will come back at 11:15." Then actually come back.'],
            ['One conversation at a time.', 'Stop, name it neutrally: "two conversations — Sam first, then Jo."'],
            ['Everyone speaks before anyone speaks twice, in rounds.', 'Stack out loud and keep the order visible.'],
            ['Phones face down during small-group work.', 'Address the group, never the individual: "threes, phones down."'],
            ['Disagree with the idea, not the person.', 'Rephrase it for them: "so the objection is to the sequencing, not to Ana."'],
            ['Decisions are recorded with an owner and a date.', 'Refuse to move on without both; it takes ten seconds and saves the session’s value.'],
          ],
        },
        {
          t: 'checklist',
          items: [
            'Three rules at most, each with a mechanism.',
            'At least one rule constrains the facilitator, out loud. It is the cheapest way to make the rest credible.',
            'Enforce the first breach within the first twenty minutes. Norms are set by the first unenforced breach, not by the flipchart.',
            'Revisit once, at a natural break: "is the way we are working working?"',
          ],
        },
      ],
    },
    {
      id: 'recontract',
      title: 'Re-contracting mid-session',
      blocks: [
        { t: 'p', text: 'Contracts break. The group turns out to want something else, the sponsor intervenes, the real issue surfaces at 2pm and it is not the one on the agenda. Re-contracting — stopping, naming what has changed, and asking for a new agreement — is a normal move, not an admission of failure.' },
        {
          t: 'example',
          title: 'Three re-contracting scripts',
          lines: [
            { label: 'The real issue surfaces', text: '"We planned to spend the afternoon on the timetable. What I am hearing is that the question underneath is whether the team trusts the way these decisions get made. I can run either conversation. Which is the better use of your afternoon?"' },
            { label: 'The sponsor overrules the room', text: '"Let me stop us. Priya, I want to check something in front of everyone: is this still a recommendation, or has it become a decision? Either is workable and the group needs to know which."' },
            { label: 'The process is not working', text: '"I designed this as a whole-group discussion and three people have spoken. That is my design error, not yours. We are switching to threes for ten minutes, then coming back."' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Owning the design error', text: 'Saying "that was my design error" costs the facilitator nothing and buys a great deal. The group already knows the process is not working; what they are watching for is whether you will notice and adapt, or defend the agenda. More scripts for these moments are in [scripts for twenty hard moments](@facilitation/methods/facilitator-scripts).' },
      ],
    },
  ],
  sources: [
    'Schwarz, R. (2016) The Skilled Facilitator, 3rd edition, on contracting and the facilitator’s role.',
    'Block, P. (2011) Flawless Consulting, 3rd edition, on the contracting conversation with a sponsor.',
    'Kaner, S. et al. (2014) Facilitator’s Guide to Participatory Decision-Making, on decision rules.',
  ],
  related: ['facilitation/foundations/what-facilitation-is', 'facilitation/frameworks/session-design', 'facilitation/methods/facilitator-scripts', 'facilitation/frameworks/decision-making'],
}

export default guide
