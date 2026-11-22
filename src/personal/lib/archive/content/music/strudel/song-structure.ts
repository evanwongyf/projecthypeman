import type { Guide } from '../../../guide'
import { pair, play } from '../../../../strudel/demo'

const guide: Guide = {
  intro:
    'A loop becomes a song when it changes in larger steps: an intro, a build, a drop, a breakdown. In live coding you can do this by hand, muting and unmuting parts as you play, or write the structure into the code with arrange, pick and masks so the track plays itself.',
  nutshell: [
    'Name parts with **$:** lines; mute with **_$:**, solo with **S$:**.',
    '**arrange([cycles, pattern], …)** plays sections one after another; **"<0 1 2>".pick([a, b, c])** switches by a pattern.',
    '**.mask("<0!4 1!12>/16")** brings a part in after a number of cycles, the simplest way to build a track.',
    '**all(x => …)** applies an effect to everything playing, handy for a master filter or a whole-track sweep.',
  ],
  sections: [
    {
      id: 'live',
      title: 'Performing: mute and solo',
      blocks: [
        pair('Muting a line with _', '$: s("bd*4, ~ cp").bank("RolandTR909")\n$: note("<c2 eb2>*8").s("sawtooth").lpf(600)\n$: n("0 2 4 7").scale("C4:minor").s("triangle")', '$: s("bd*4, ~ cp").bank("RolandTR909")\n_$: note("<c2 eb2>*8").s("sawtooth").lpf(600)\n$: n("0 2 4 7").scale("C4:minor").s("triangle")', 'An underscore before $: silences that part. In the runner, add or remove it and press Ctrl+Enter: the change lands on the next cycle, in time.'),
        pair('Soloing a line with S', '$: s("bd*4, ~ cp").bank("RolandTR909")\n$: note("<c2 eb2>*8").s("sawtooth").lpf(600)', '$: s("bd*4, ~ cp").bank("RolandTR909")\nS$: note("<c2 eb2>*8").s("sawtooth").lpf(600)', 'S$: plays only the soloed parts.'),
      ],
    },
    {
      id: 'arrange',
      title: 'Sections in order: arrange',
      blocks: [
        play(
          'let intro = s("hh*8").bank("RolandTR909")\nlet verse = stack(s("bd*2, ~ sd, hh*8").bank("RolandTR909"), note("<c2 ab1>*4").s("sawtooth").lpf(600))\nlet chorus = stack(verse, chord("<Cm Ab>").voicing().s("supersaw").lpf(2000).gain(.4))\narrange([2, intro], [4, verse], [4, chorus])',
          'Intro (2 cycles), verse (4), chorus (4), then repeat',
          'arrange takes [length in cycles, pattern] pairs and plays them in turn, looping back to the start.',
        ),
      ],
    },
    {
      id: 'pick',
      title: 'Switching by pattern: pick and inhabit',
      blocks: [
        play('"<0 0 1 2>".pick([\n  s("bd*4, hh*8").bank("RolandTR909"),\n  s("bd*4, ~ sd, hh*16").bank("RolandTR909"),\n  s("[bd sd]*4, oh*8").bank("RolandTR909"),\n])', 'Choosing a drum pattern per cycle with pick', 'The mini-notation pattern decides which of the listed patterns plays: a simple way to schedule fills.'),
        play('"<a b a c>".inhabit({\n  a: n("0 2 4 2").scale("C4:minor"),\n  b: n("4 5 7 9").scale("C4:minor"),\n  c: n("[7 6 5 4]*2").scale("C4:minor"),\n}).s("triangle")', 'Named sections with inhabit', 'inhabit is like pick with names, and squeezes each section into the step it occupies.'),
      ],
    },
    {
      id: 'build',
      title: 'Builds and drops with mask',
      blocks: [
        play(
          'setcpm(124/4)\n$: s("bd*4").bank("RolandTR909").mask("<0 1 1 1 1 1 1 0>/1")\n$: s("[~ hh]*4").bank("RolandTR909").mask("<0 0 1 1 1 1 1 1>")\n$: s("~ cp").bank("RolandTR909").mask("<0 0 0 0 1 1 1 1>")\n$: note("<c2 c2 eb2 bb1>*8").s("sawtooth").lpf("<300 400 600 900 1500 1500 1500 400>").mask("<0 0 1 1 1 1 1 1>")\n$: s("hh*16").bank("RolandTR909").gain(saw.range(.2, .9)).mask("<0 0 0 0 0 0 0 1>")',
          'An 8-cycle build',
          'Each $: line has its own mask, so parts enter one at a time, the bass filter opens, and the last cycle drops the kick for a riser before it loops.',
        ),
        pair(
          'A whole-track filter with all()',
          '$: s("bd*4, ~ cp, hh*8").bank("RolandTR909")\n$: note("<c2 eb2>*8").s("sawtooth").lpf(1200)',
          '$: s("bd*4, ~ cp, hh*8").bank("RolandTR909")\n$: note("<c2 eb2>*8").s("sawtooth").lpf(1200)\nall(x => x.lpf(sine.range(300, 6000).slow(8)))',
          'all(f) applies f to every playing part: here a slow low-pass sweep over the whole mix.',
        ),
      ],
    },
    {
      id: 'track',
      title: 'A complete short track',
      blocks: [
        play(
          `// "Pixel Rain"a small lofi track built from this shelf's pieces
setcpm(78/4)
let chords = chord("<Am9 Dm9 G13 C^9>")

$: s("bd ~ ~ bd, ~ sd").bank("RolandTR808").lpf(4000)
  .swing(4).mask("<0 1!15>/16")
$: s("hh*8").bank("RolandTR808").gain(perlin.range(.2, .5))
  .swing(4).mask("<0!2 1!14>/16")
$: chords.voicing().s("gm_epiano1").room(.5).roomsize(3)
  .lpf(2200).gain(.5).phaser(.3)
$: n("0 ~ ~ [0 ~ 2]").set(chords).mode("root:g2").voicing()
  .s("triangle").lpf(500).gain(.9).mask("<0!4 1!12>/16")
$: n("<4 [2 ~] 5 [4 2]>*2").set(chords).voicing().s("triangle")
  .decay(.25).sustain(.2).delay(.4).delaysync(3/16).delayfeedback(.5)
  .room(.6).gain(.35).mask("<0!8 1!8>/16")
$: s("crackle*4").density(.05).gain(.25)`,
          'Putting everything together',
          'Drums enter after one cycle, the bass after four and the melody after eight; chords, crackle and effects from the earlier guides do the rest. Open it in the runner and change anything.',
        ),
        { t: 'callout', tone: 'tip', title: 'Learn from real songs', text: 'The song library in the runner has hundreds of community tracks, covers, originals and nearly 500 drum patterns. Open one, read how it is built, and change things until it becomes yours.' },
      ],
    },
  ],
  sources: ['Strudel documentation, “Pattern composition: arrange, pick, inhabit” (strudel.cc).'],
  related: ['music/strudel/pattern-transformations', 'music/strudel/effects-reference'],
}

export default guide
