import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A judge is writing while you talk. If they cannot tell which line of the page an argument belongs on, it may as well not have been said. Signposting is the set of verbal cues that lets a listener file what they hear in real time, and it is the cheapest structural improvement available to any speaker.',
  nutshell: [
    'Open with a **roadmap**: what you will do, in order, in one sentence.',
    'Label every argument with a **tagline** of three to six words, and repeat the tagline when you return to it.',
    'Signal transitions audibly: "that was their case; now my own".',
    'Allocate time **before** you speak, in minutes, and track it.',
    'Rebuttal is filed under *their* argument’s name, not under a number only you can see.',
    'Clarity is not a style preference: in most formats the judge’s notes are the ballot.',
  ],
  sections: [
    {
      id: 'roadmap',
      title: 'The roadmap',
      blocks: [
        { t: 'p', text: 'Ten seconds, at the top, before anything else. It does two things: it tells the judge how to lay out the page, and it commits you to a structure you then have to keep, which is a useful discipline under pressure.' },
        {
          t: 'example',
          title: 'Roadmaps',
          lines: [
            { label: 'Second speaker', text: '"Three things: first, their claim that the policy changes behaviour; second, rebuilding our argument on cost; third, my own argument about who is left out."' },
            { label: 'Third speaker', text: '"Two issues in this debate: does it work, and who pays. I will take them in that order."' },
            { label: 'Too vague', text: '"I will be rebutting and then making some arguments." This tells the judge nothing they could not assume.' },
          ],
        },
      ],
    },
    {
      id: 'taglines',
      title: 'Taglines',
      blocks: [
        { t: 'p', text: 'A tagline is a handle. It should be short enough to write, specific enough to distinguish, and repeated identically every time the argument comes up — including by your teammate.' },
        {
          t: 'table',
          head: ['Weak', 'Strong', 'Why'],
          rows: [
            ['"My first argument"', '"Road space is zero-sum"', 'The second can be written down and referred back to three speeches later.'],
            ['"The economic point"', '"Who bears the cost of transition"', 'Names the clash rather than the discipline.'],
            ['"Rights"', '"Consent cannot be retrospective"', 'A claim, not a category.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Agree taglines in prep', text: 'If the first speaker calls it "the access argument" and the second calls it "the fairness point", the judge records two half-developed arguments instead of one developed one.' },
      ],
    },
    {
      id: 'time',
      title: 'Time allocation inside a speech',
      blocks: [
        { t: 'p', text: 'Decide the minutes before you stand up and write them in the margin. Speakers who do not run out of time on the last argument, which is usually the one they most wanted to make.' },
        {
          t: 'table',
          head: ['Speech', 'Rough allocation'],
          rows: [
            ['First (prop)', '0:20 context · 0:40 definition and model · 0:10 line · 2:30 argument 1 · 2:30 argument 2 · 0:20 close'],
            ['First (opp)', '1:00–1:30 rebuttal · 0:20 line · 2:30 argument 1 · 2:00 argument 2 · 0:20 close'],
            ['Second', '2:30 rebuttal · 1:30 rebuild · 2:30 own material · 0:20 close'],
            ['Third / whip', '0:15 roadmap · three clashes at roughly 2:00 each · 0:30 comparison'],
            ['Reply / final focus', '0:15 issues named · 1:00–1:30 per issue · 0:20 the even-if'],
          ],
          caption: 'Scaled to a seven- or eight-minute speech; compress proportionally for shorter formats.',
        },
        { t: 'debate-lab', viz: 'timer' },
      ],
    },
    {
      id: 'followable',
      title: 'Being followable at speed',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Pause for half a second before a new argument. It is the audible equivalent of a paragraph break.',
            'Number things out loud, and keep the numbers consistent.',
            'Say the tagline, then the analysis — never the reverse.',
            'Repeat the claim after the mechanism, so the judge can finish writing it.',
            'Say "this answers their point about X" so the rebuttal lands on the right line.',
          ],
          dont: [
            'Change the order you promised in the roadmap without announcing it.',
            'Use a pronoun for an argument: "that point" is unfileable three speeches later.',
            'Hide the claim at the end of a two-minute build.',
            'Read a prepared paragraph at a pace nobody can transcribe.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Test it on a friend', text: 'Give a speech and have someone flow it who does not know the motion. Then compare their page with your intended structure. Every mismatch is a signposting failure, and the exercise takes four minutes.' },
      ],
    },
  ],
  related: ['debate/techniques/delivery-and-style', 'debate/techniques/flowing-and-notes', 'debate/structure/speaker-roles'],
}

export default guide
