import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Style is marked. In World Schools it is worth as much as content; everywhere else it decides how much of your content survives the trip to the judge’s page. None of what follows is about charisma — it is a short list of mechanical habits that make a speech easier to follow, and they are all trainable in a week.',
  nutshell: [
    'Speak **slightly slower than feels natural**: roughly 140 to 160 words a minute for a listener who is writing.',
    'Pause at structure. Half a second before a new argument does the work of a paragraph break.',
    'Vary emphasis on the **claim**, not on every sentence. Constant emphasis reads as none.',
    'Notes should be a page of taglines, not a script. Reading a script is audible and penalised.',
    'Look at the judge, not at the opposition. They are the audience that matters.',
    'Nerves are a physiological event with physiological fixes: breathe out longer than in, stand still, start slow.',
  ],
  sections: [
    {
      id: 'pace',
      title: 'Pace',
      blocks: [
        { t: 'p', text: 'There is an optimum, and it is slower than most competitive debaters use. A judge taking notes can process roughly 150 words a minute with comprehension; conversational speech is 120 to 150, and anxious speech is 190 and up. The arithmetic of the trade is brutal: words you deliver past the judge’s processing speed are not fewer arguments, they are *zero* arguments.' },
        {
          t: 'table',
          head: ['Rate', 'What happens'],
          rows: [
            ['Under 120 wpm', 'You will not fill the time with substance; judges read it as thin.'],
            ['140–160 wpm', 'The working range: followable and dense. Aim here.'],
            ['170–200 wpm', 'Mechanisms start to be lost. Acceptable in short bursts on familiar material.'],
            ['Over 200 wpm', 'Policy-circuit speed. Technically legitimate there, and a wasted speech anywhere else.'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Measure it once', text: 'Record a practice speech, count the words in one minute, and you will know your real rate rather than your imagined one. Most people are 20 to 30 wpm faster than they think, and all of the excess is in the first ninety seconds.' },
      ],
    },
    {
      id: 'voice',
      title: 'Voice and emphasis',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Drop your pitch at the end of a claim: a rising end makes a statement sound like a question.',
            'Emphasise the claim and the comparison; leave the mechanism level, so the contrast carries the structure.',
            'Pause after the tagline, not after every clause.',
            'Project from the chest, not the throat: volume from the throat is audible as strain within two minutes.',
            'Breathe at punctuation, deliberately. Running out of air is why speakers accelerate.',
          ],
        },
        { t: 'p', text: 'Rhetorical figures — the triad, the contrast, the repeated opening — work because they are memorable, which in debate means writable. Use two or three in a speech, at the points you most want the judge to record verbatim, and nowhere else. The classical catalogue is in [classical rhetoric](@debate/schools/classical-rhetoric).' },
      ],
    },
    {
      id: 'body',
      title: 'Body, hands and notes',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Stand still, feet planted. Movement should be deliberate, once per argument at most.',
            'Hold one page, or use a lectern; holding a stack invites fidgeting.',
            'Gesture at chest height, open palms, and let the hand rest between gestures.',
            'Make eye contact with each judge for a full sentence, not a sweep of the room.',
            'Write taglines in large print so you can find your place at a glance.',
          ],
          dont: [
            'Pace. It reads as anxiety and it breaks the judge’s concentration.',
            'Read sentences off a page. Even a well-written script sounds like a script.',
            'Point at the opposition, or address them directly for long. You are speaking to the judge.',
            'Fill pauses with "um" — silence is better and sounds deliberate.',
          ],
        },
      ],
    },
    {
      id: 'nerves',
      title: 'Nerves',
      blocks: [
        { t: 'p', text: 'Pre-speech anxiety is adrenaline, and adrenaline has predictable effects: shallow breathing, fast speech, dry mouth, shaking hands, tunnel attention. Each one has a mechanical counter, and none of them requires feeling calm first.' },
        {
          t: 'table',
          head: ['Symptom', 'Counter'],
          rows: [
            ['Racing speech', 'Say your first sentence at deliberately half speed. The rest of the speech anchors to it.'],
            ['Shallow breath', 'Breathe out for twice as long as you breathe in, four times, before standing.'],
            ['Shaking hands', 'Hold one page with both hands, or rest them on the lectern. Do not hide them.'],
            ['Blank mind', 'Read your tagline aloud. The structure restarts the content.'],
            ['Tunnel vision', 'Name three objects in the room while prepping. It resets peripheral attention.'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Reappraisal works better than suppression', text: 'Experimental work on anxiety reappraisal finds that telling yourself "I am excited" outperforms trying to calm down, because the physiological state is the same and only its interpretation changes. Practically: do not aim for calm, aim for useful.' },
      ],
    },
    {
      id: 'audience',
      title: 'Adapting to who is listening',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Flow judge', tag: 'Technical', body: 'Signpost ruthlessly, name arguments consistently, extend by label. Pace can rise; jargon is acceptable.' },
            { title: 'Lay judge', tag: 'Persuasion', body: 'No jargon, one story, slower pace, explicit conclusions. Say "this means" constantly.' },
            { title: 'Panel', tag: 'Mixed', body: 'Write for the most technical, speak for the least: full structure, plain words.' },
            { title: 'Audience vote', tag: 'Public', body: 'Narrative, concession and a named human being in the first thirty seconds. See [other formats](@debate/formats/other-formats).' },
          ],
        },
        { t: 'p', text: 'More on reading the judge and the limits of adaptation in [judge adaptation](@debate/winning/judge-adaptation).' },
      ],
    },
  ],
  sources: [
    'World Schools Debating Championships Rules and Judging Guide, on the style criterion.',
    'Brooks, A. W. (2014) Get Excited: Reappraising Pre-Performance Anxiety as Excitement, Journal of Experimental Psychology: General.',
    'Lucas, S. (2019) The Art of Public Speaking, 13th edition, on rate, projection and delivery.',
  ],
  related: ['debate/structure/signposting-and-structure-of-a-speech', 'debate/winning/judge-adaptation', 'debate/schools/classical-rhetoric'],
}

export default guide
