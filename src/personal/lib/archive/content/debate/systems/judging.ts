import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Debaters who understand how a decision is reached debate differently: they stop trying to be impressive and start trying to be easy to decide for. This page is the inside of the ballot — the standard judges are told to apply, how they actually apply it, what speaker scores mean, and how to give or receive a decision.',
  nutshell: [
    'The standard in most parliamentary formats is the **average reasonable person**: an intelligent, informed, non-specialist voter with no prior stake.',
    'Judges assess **comparatively**, on the material said in the room, and are told not to supply arguments themselves.',
    'Decisions are reached **clash by clash**, not speech by speech.',
    '**Speaker points** measure individual performance and decide tournament standing even when your team loses.',
    'A dropped argument is weighted by whether it was ever **extended**, not by whether the judge finds it convincing.',
    'An oral adjudication should be able to name the issue the round turned on in one sentence.',
  ],
  sections: [
    {
      id: 'standard',
      title: 'The average reasonable person',
      blocks: [
        { t: 'p', text: 'Judging manuals in the parliamentary tradition tell adjudicators to imagine a particular listener: reasonably intelligent, generally informed, without specialist knowledge of the topic, and with no prior commitment on the motion. The job is to decide which case that person would find more convincing on the material presented.' },
        {
          t: 'checklist',
          items: [
            'They do not know the literature, so unexplained jargon and uncited expertise do not persuade them.',
            'They do not fill gaps, so an argument with a missing step stays missing.',
            'They are not partisan, so appeals to assumed values fail unless the value is argued for.',
            'They do not reward effort, speed, or confidence in themselves.',
            'They can be persuaded of something the judge personally believes is false.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Judge intervention', text: 'Supplying an argument neither team made, or deciding on specialist knowledge the room did not hear, is the cardinal error of adjudication. It is also the most common complaint in feedback from strong teams, because it makes the result unlearnable.' },
      ],
    },
    {
      id: 'how',
      title: 'How a decision is actually reached',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Identify the clashes', body: 'Two to four issues both sides engaged. If the teams named them, the judge usually uses their names — which is why third speakers who name clashes have such leverage.' },
            { title: 'Resolve each clash', body: 'Who had the better analysis on that issue, given what was actually said and answered?' },
            { title: 'Weigh the clashes', body: 'Which issue matters more, and did either team argue for that ordering? See [weighing](@debate/structure/weighing).' },
            { title: 'Assemble the decision', body: 'The result follows from the clashes; the reasoning is written before the winner is announced, not after.' },
            { title: 'Allocate speaker points', body: 'Individually, against the scale, after the team decision.' },
          ],
        },
        { t: 'debate-lab', viz: 'flow' },
        { t: 'p', text: 'The flow tool shows the unit of decision: a row, with a verdict. Notice that the verdict on a row depends on what the last speech on it did, not on the intrinsic merit of the opening claim.' },
      ],
    },
    {
      id: 'points',
      title: 'Speaker points',
      blocks: [
        { t: 'p', text: 'Most circuits use a scale clustered tightly around the middle. The numbers themselves differ by circuit, but their behaviour does not: the band, not the digit, carries the information, and tournament standing is decided by team points first and speaker points second.' },
        {
          t: 'table',
          head: ['Band', 'What it means', 'Typical feedback'],
          rows: [
            ['Top', 'Would be competitive at the final table of a major.', 'Framed the debate; weighed without being asked.'],
            ['Upper middle', 'Clear contribution, good engagement, one gap.', 'Strong material, needed to compare it with theirs.'],
            ['Middle', 'Fulfilled the role; arguments asserted more than built.', 'Needed mechanisms, not more claims.'],
            ['Lower middle', 'Role partly fulfilled; structure unclear.', 'Signpost; rebuttal arrived too late to matter.'],
            ['Bottom', 'Did not engage, or spoke well under time.', 'Needed to answer the other side at all.'],
          ],
          caption: 'Read your own feedback against this: the band tells you which single thing to fix next.',
        },
        { t: 'callout', tone: 'note', title: 'Why points matter even in a loss', text: 'In most tournaments the break is decided on team points with speaker points as the tiebreak. A fourth place with high speaks is a materially better outcome than a fourth with low speaks, and in close brackets it decides who advances.' },
      ],
    },
    {
      id: 'oral',
      title: 'Giving an oral adjudication',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Announce the result first', body: 'Teams cannot listen to reasoning while waiting for the verdict.' },
            { title: 'Name the issues', body: '"This debate came down to two questions …" in neutral words.' },
            { title: 'Resolve each, with evidence from the round', body: 'Quote what was said. "You said X; they answered Y; nobody returned to it."' },
            { title: 'Say what would have changed it', body: 'The single most useful sentence a judge can offer, and the hardest.' },
            { title: 'Individual feedback briefly', body: 'One thing to keep, one thing to fix, per speaker.' },
          ],
        },
        {
          t: 'dodont',
          do: [
            'Decide on what was said, and be able to point to where.',
            'Admit when a clash was genuinely close, and say what tipped it.',
            'Separate your personal view of the motion from the decision — out loud, if it was a motion you have opinions about.',
          ],
          dont: [
            'Rebuild an argument a team made badly and then credit them with it.',
            'Decide on style in a format that marks content, or vice versa.',
            'Give a decision you cannot explain in one sentence. If you cannot, you have not finished deciding.',
          ],
        },
      ],
    },
    {
      id: 'receiving',
      title: 'Receiving a decision',
      blocks: [
        { t: 'p', text: 'The useful question is never "was that right". It is "what did the judge see, and what could I have said that would have changed it". Those are answerable, and they transfer to the next round.' },
        {
          t: 'checklist',
          items: [
            'Write down the issue the judge said the round turned on, in their words.',
            'Ask what the winning team said on that issue that you did not.',
            'Ask one specific question, not "why did we lose".',
            'Record it: three rounds of notes usually reveal the same recurring gap.',
            'Do not argue the decision. You will not change it, and the judge will stop telling you useful things.',
          ],
        },
        { t: 'p', text: 'Different formats answer the question "what is a judge for" very differently. The explicit versions of that argument are in [the policy paradigms](@debate/schools/policy-paradigms).' },
      ],
    },
  ],
  sources: [
    'World Universities Debating Championship Debating and Judging Manual (current edition), on the average reasonable person and comparative assessment.',
    'World Schools Debating Championships Rules and Judging Guide, on the content / style / strategy scales.',
    'National Speech and Debate Association judge training materials, and published circuit judge paradigms.',
  ],
  related: ['debate/structure/weighing', 'debate/schools/policy-paradigms', 'debate/winning/judge-adaptation', 'debate/systems/tournaments'],
}

export default guide
