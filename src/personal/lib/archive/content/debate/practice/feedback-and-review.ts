import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Most debaters receive a great deal of feedback and act on almost none of it, because an oral adjudication arrives at the worst possible moment — immediately after a result, in a form nobody writes down. A five-minute routine after each round fixes this, and it is the difference between debating for three years and improving for three years.',
  nutshell: [
    'Record the **issue the judge said the round turned on**, in their words, within five minutes.',
    'Ask one specific question, not "why did we lose".',
    'Look for the **recurring** note across three rounds. That is your actual weakness; a single round is noise.',
    'Separate what you can change (structure, weighing, time) from what you cannot (the draw, the judge).',
    'Keep one page per tournament. Three tournaments of pages beats any amount of remembered advice.',
  ],
  sections: [
    {
      id: 'after',
      title: 'The five minutes after a round',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Write the clash', body: 'The issue the judge named as decisive, in their phrasing, not your translation of it.' },
            { title: 'Write what the winning team said on it', body: 'Specifically. "They weighed on irreversibility and we did not" is usable; "they were better" is not.' },
            { title: 'Write one thing you will do differently', body: 'One. A list of six is a list you will not read.' },
            { title: 'Ask one question', body: '"What would our third speaker have needed to say on the second issue for you to flip it?" Judges answer this well; they answer "why did we lose" badly.' },
            { title: 'Note your own speech honestly', body: 'Did you finish on time, did you weigh, did you answer their best point? Three yes-or-no questions.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Do not argue the decision', text: 'You will not change it, and you will stop the judge telling you the useful part. If you genuinely think there was an error of process, that is a conversation with the chief adjudicator afterwards, not with the panel in the room.' },
      ],
    },
    {
      id: 'reading',
      title: 'Reading an adjudication for what is in it',
      blocks: [
        {
          t: 'table',
          head: ['They said', 'They mean', 'Fix'],
          rows: [
            ['"I needed you to explain why"', 'Missing mechanism.', 'Two deniable steps between claim and conclusion. [Argument anatomy](@debate/structure/argument-anatomy).'],
            ['"It was close and I had to choose"', 'Nobody weighed.', 'Name an axis and justify it. [Weighing](@debate/structure/weighing).'],
            ['"You did not engage"', 'Rebuttal missed the mechanism, or arrived too late.', 'Group and answer early. [Rebuttal and clash](@debate/structure/rebuttal-and-clash).'],
            ['"I lost you in the middle"', 'Signposting.', 'Roadmap, taglines, audible transitions.'],
            ['"Your extension was not new"', 'BP-specific: repetition of the opening.', 'Find the stakeholder or mechanism they skipped. [British Parliamentary](@debate/formats/british-parliamentary).'],
            ['"You ran out of time"', 'Allocation, not speed.', 'Minute marks in the margin. [Strategy and time](@debate/winning/strategy-and-time).'],
            ['"Role fulfilment"', 'You gave the wrong speech for your position.', '[Speaker roles](@debate/structure/speaker-roles).'],
          ],
        },
      ],
    },
    {
      id: 'patterns',
      title: 'Finding the pattern',
      blocks: [
        { t: 'p', text: 'One round tells you about one round. Three tell you about you. After a tournament, lay the pages side by side and count the notes — the one that appears three times is the thing to drill, regardless of how minor it sounds.' },
        {
          t: 'checklist',
          items: [
            'Count how often "mechanism" or "explain why" appears. If it is most rounds, that is your whole training programme for a month.',
            'Count how often the decisive clash was one you never mentioned. That is a prep problem, not a speaking one.',
            'Note whether you lose more as opening or closing, proposition or opposition. A consistent split is diagnostic.',
            'Note your speaker points against the room strength, not in absolute terms.',
            'Write the one drill that addresses the recurring note, and do it before the next tournament.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Expect the same note twice', text: 'The recurring feedback is almost always weighing or mechanism, at every level from novice to open final. This is not a failure of imagination on the part of judges; it is what debating is hard at.' },
      ],
    },
    {
      id: 'giving',
      title: 'Giving feedback to someone else',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Name one thing to keep and one thing to change. Two items, not ten.',
            'Quote what they actually said; "in your third minute you said X" is actionable.',
            'Say what the better version would have sounded like, in words.',
            'Separate the decision from the advice: "you lost on X, and separately, your structure cost you clarity".',
          ],
          dont: [
            'Give feedback that is really about the motion rather than the speech.',
            'Rebuild their argument for them and then praise it.',
            'List everything. The third item is already past what anyone acts on.',
          ],
        },
        { t: 'p', text: 'The adjudicator’s side of this, including how to structure an oral, is in [judging](@debate/systems/judging).' },
      ],
    },
  ],
  related: ['debate/systems/judging', 'debate/practice/drills', 'debate/structure/weighing'],
}

export default guide
