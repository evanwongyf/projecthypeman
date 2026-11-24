import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Some problems cannot be solved by better discussion technique because the disagreement is not about facts: the parties disagree about what the problem is. Horst Rittel called these **wicked problems**, and Jeff Conklin’s answer — mapping the conversation live on a shared display in IBIS notation — is the most useful single technique a facilitator can learn for them.',
  nutshell: [
    'A **wicked problem** has no definitive formulation, no stopping rule, and no right answer — only better and worse ones, and every attempt changes the problem.',
    '**IBIS** has four node types: **Question**, **Idea**, **Pro**, **Con**. That is the whole notation.',
    'The map goes on a **shared display** the group can see, built live, in their words.',
    'Fragmentation, not stupidity, is why meetings go round in circles: people hold different pieces and nobody holds the whole.',
    'The map’s job is **coherence**, not agreement. A group that can see its disagreement argues better.',
    'Capture in their words, never your paraphrase, and let them correct the map out loud.',
  ],
  sections: [
    {
      id: 'wicked',
      title: 'Wicked problems',
      blocks: [
        { t: 'p', text: 'Rittel and Webber distinguished *tame* problems, which can be stated and solved, from *wicked* ones, which cannot be stated independently of the solution being proposed. "How do we reduce knife crime", "what should our strategy be", "how do we handle hybrid working" are all wicked. The characteristic symptom is a meeting where everyone is reasonable, nobody is persuaded, and the same three points recur every twenty minutes.' },
        {
          t: 'table',
          head: ['Tame', 'Wicked'],
          rows: [
            ['Can be stated before it is solved.', 'The statement changes as solutions are proposed.'],
            ['Has a stopping rule: you know when you are done.', 'No stopping rule; you stop when time or money runs out.'],
            ['Solutions are right or wrong.', 'Solutions are better or worse, and the judgement is contested.'],
            ['Can be tried and retried.', 'Every attempt changes the situation; there are no free trials.'],
            ['Belongs to a discipline.', 'Spans disciplines and interests, which is why no expert owns it.'],
          ],
          caption: 'After Rittel and Webber (1973). The practical consequence: for a wicked problem, the facilitator’s goal is shared understanding, not a solution the room can be argued into.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Fragmentation',
          text: 'Conklin’s diagnosis is that the failure mode is **fragmentation**: the problem exists in pieces across people’s heads, each piece coherent on its own. Nobody is being difficult. The remedy is to externalise the pieces into one visible structure, which is what the map is for.',
        },
      ],
    },
    {
      id: 'notation',
      title: 'IBIS: four node types',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Question (?)', def: 'An issue to be resolved. Everything hangs off questions, and a map with one question is a map of an argument, not of a problem.' },
            { term: 'Idea (light bulb)', def: 'A possible answer to a question. Ideas respond only to questions, never to other ideas.' },
            { term: 'Pro (+)', def: 'An argument supporting an idea.' },
            { term: 'Con (−)', def: 'An argument against an idea.' },
            { term: 'Sub-question', def: 'A question that hangs off a pro or con, which is how the map deepens without becoming an argument tree.' },
          ],
        },
        {
          t: 'diagram',
          title: 'A map of twenty minutes of a real conversation',
          nodes: [
            { id: 'q1', label: '? How do we handle hybrid working', col: 0, row: 2, shape: 'diamond', tone: 'ink', w: 2 },
            { id: 'i1', label: 'Three fixed days in office', col: 2, row: 0, tone: 'teal' },
            { id: 'i2', label: 'Team-by-team choice', col: 2, row: 2, tone: 'teal' },
            { id: 'i3', label: 'Fully remote, quarterly meetups', col: 2, row: 4, tone: 'teal' },
            { id: 'p1', label: '+ Predictable for collaboration', col: 3, row: 0, tone: 'mint' },
            { id: 'c1', label: '− Commute cost falls on the lowest paid', col: 3, row: 1, tone: 'pink' },
            { id: 'q2', label: '? Who bears the cost of attendance', col: 4, row: 1, shape: 'diamond', tone: 'mustard', w: 2 },
            { id: 'c2', label: '− Teams diverge; onboarding breaks', col: 3, row: 2, tone: 'pink' },
            { id: 'p2', label: '+ Respects real differences in work', col: 3, row: 3, tone: 'mint' },
            { id: 'c3', label: '− Weak ties decay, measurably', col: 3, row: 4, tone: 'pink' },
          ],
          edges: [
            { from: 'q1', to: 'i1' },
            { from: 'q1', to: 'i2' },
            { from: 'q1', to: 'i3' },
            { from: 'i1', to: 'p1' },
            { from: 'i1', to: 'c1' },
            { from: 'c1', to: 'q2', label: 'opens' },
            { from: 'i2', to: 'c2' },
            { from: 'i2', to: 'p2' },
            { from: 'i3', to: 'c3' },
          ],
          caption: 'The valuable move here is the sub-question on the right. "Who bears the cost of attendance" was never on the agenda, and it is the question the room was actually arguing about.',
        },
        { t: 'p', text: 'The debating shelf has the other main mapping notation, which maps one argument’s internal structure rather than a conversation: [argument mapping](@debate/advanced/argument-mapping). The two are complementary — IBIS for a group with a problem, argument maps for a claim under attack.' },
      ],
    },
    {
      id: 'live',
      title: 'Mapping live',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Put the display where the group looks', body: 'Projector, large screen or a wall of paper. The map must be between the people, not in front of one of them.' },
            { title: 'Open with the question, in their words', body: 'Write it as a question. If the group has given you a topic rather than a question, ask them to convert it: "what is the question we are trying to answer?"' },
            { title: 'Capture, do not interpret', body: 'Their phrasing, abbreviated. If you must shorten, read it back: "I have written ‘commute cost falls on lowest paid’ — is that it?"' },
            { title: 'Place by type, out loud', body: '"That is an argument against the three-day idea" — naming the type teaches the group the notation in about ten minutes.' },
            { title: 'Promote recurring objections to questions', body: 'When the same con appears under three ideas, it is a question in disguise. Making it a node is the highest-value move in the technique.' },
            { title: 'Let them correct the map', body: 'Corrections are participation. A group that argues with the map has adopted it.' },
            { title: 'Close on the structure', body: '"We have one question, three ideas, and a second question nobody expected. Which of the two questions do we answer first?"' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Keep the map visible for the whole session, and refer to it by node: "the onboarding con".',
            'Leave the display scrappy; polish signals that it is yours.',
            'Record cons under your own preferred idea first. It is the cheapest credibility available.',
            'Photograph it and send it out within the day, as the record.',
          ],
          dont: [
            'Merge two people’s points to tidy the map. The merge is the moment they stop trusting it.',
            'Write solutions as questions or questions as solutions; the notation stops working.',
            'Map a tame problem. If the answer is knowable, find it out instead.',
            'Map while also chairing a heated exchange — use two facilitators, one on the map.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'The two-facilitator pattern', text: 'One person facilitates the conversation and one builds the map, with the mapper occasionally interrupting to check wording. It roughly doubles the quality of both jobs, and it is the standard configuration in the technique’s own literature. If you are alone, slow the conversation down to the speed of your typing and say that is what you are doing.' },
      ],
    },
    {
      id: 'failures',
      title: 'What goes wrong',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'The map becomes the facilitator’s essay', tag: 'Trust lost', body: 'Paraphrasing into your own categories. The group stops recognising their own words and the display becomes wallpaper.' },
            { title: 'All ideas, no questions', tag: 'Notation collapse', body: 'A list of proposals with pros and cons is not a map; the questions are what make the structure visible.' },
            { title: 'Too much detail', tag: 'Unusable', body: 'Sixty nodes nobody can read. Aim for one screen per question; roll up detail into sub-questions.' },
            { title: 'Mapping to win', tag: 'Fatal', body: 'If the group suspects the map is steering them, every node is contested. Record your own idea’s cons prominently to show it is not.' },
            { title: 'No decision rule', tag: 'Anticlimax', body: 'A beautifully mapped problem with no agreed way to choose. Agree the rule first: see [helping groups decide](@facilitation/frameworks/decision-making).' },
          ],
        },
      ],
    },
    {
      id: 'when',
      title: 'When to reach for it',
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Use IBIS?', 'Why'],
          rows: [
            ['A strategy conversation that keeps looping', 'Yes', 'Looping is the signature symptom of fragmentation.'],
            ['Two departments who each think the other is being unreasonable', 'Yes', 'The map makes each side’s coherence visible to the other.'],
            ['A decision between three costed options', 'No', 'That is tame: use a criteria matrix and a decision rule.'],
            ['A post-incident review', 'Partly', 'Map the causal questions; use a debrief model for the human side. See [debrief models](@facilitation/debriefing/debrief-models).'],
            ['A large group over 30', 'Not live', 'Map a plenary synthesis after small-group work; live mapping needs a conversation you can follow.'],
            ['A conversation that is really about trust', 'No', 'Notation cannot repair a relationship. See [working with conflict](@facilitation/unity/conflict).'],
          ],
        },
      ],
    },
  ],
  sources: [
    'Rittel, H. and Webber, M. (1973) Dilemmas in a General Theory of Planning, Policy Sciences.',
    'Conklin, J. (2005) Dialogue Mapping: Building Shared Understanding of Wicked Problems. Wiley.',
    'Kunz, W. and Rittel, H. (1970) Issues as Elements of Information Systems, the original IBIS paper.',
    'Culmsee, P. and Awati, K. (2013) The Heretic’s Guide to Best Practices.',
  ],
  related: ['facilitation/methods/question-design', 'facilitation/frameworks/decision-making', 'debate/advanced/argument-mapping', 'facilitation/unity/conflict'],
}

export default guide
