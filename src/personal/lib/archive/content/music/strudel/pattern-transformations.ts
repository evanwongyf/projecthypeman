import type { Guide } from '../../../guide'
import { DRUMS, MELODY, ab, play } from '../../../../strudel/demo'

const MEL = 'n("0 2 4 7").scale("C4:minor").s("triangle").decay(.2).sustain(0)'

const guide: Guide = {
  intro:
    'Repetition is the starting point of live coding, and pattern functions are how a loop keeps changing. They work on the pattern itself, its timing, order and density, rather than on the sound. Most take a pattern of their own as an argument, so even the transformation can change from cycle to cycle.',
  nutshell: [
    'Time: **fast**, **slow**, **early / late**, **ply**, **hurry**, **swing**.',
    'Order: **rev**, **palindrome**, **iter**, **chunk**.',
    'Layering: **off**, **superimpose**, **echo**, **jux**.',
    'Change over cycles: **every** (firstOf), **lastOf**, **sometimes / often / rarely**, **degradeBy**, **someCyclesBy**.',
    'Rhythm from elsewhere: **struct**, **mask**, **euclid**, **beat**, **segment**; continuous signals **sine, saw, tri, square, rand, perlin** with **range**.',
  ],
  sections: [
    {
      id: 'time',
      title: 'Time',
      blocks: [
        ab('fast', DRUMS, '.fast(2)', 'fast(n) squeezes the pattern so it plays n times per cycle.'),
        ab('slow', MELODY, '.slow(2)', 'slow(n) stretches it over n cycles.'),
        ab('fast with a pattern', DRUMS, '.fast("<1 [2 4]>")', 'Every second cycle, the first half doubles and the second half quadruples, an instant fill.'),
        ab('ply: repeat each event', MEL, '.ply(2)', 'ply(n) repeats every event n times within its own slot.'),
        ab('hurry: faster and higher', 's("bd sd [~ bd] sd").bank("RolandTR909")', '.hurry("<1 2>")', 'hurry speeds up the pattern and the sample playback together, like speeding up a tape.'),
        ab('swing', 's("hh*8, bd ~ sd ~").bank("RolandTR909")', '.swing(4)', 'swing(n) delays every second event within n subdivisions per cycle, turning straight eighths into a shuffle; swingBy(amount, n) sets how much.'),
        ab('late: nudge a part', 's("bd*4").bank("RolandTR909").stack(s("hh*4").bank("RolandTR909"))', '.late("[0 .1]")', 'late (and early) shift events in time by a fraction of a cycle.'),
      ],
    },
    {
      id: 'order',
      title: 'Order',
      blocks: [
        ab('rev', MELODY, '.rev()', 'rev plays each cycle backwards (event order, not the audio).'),
        ab('palindrome', MEL, '.palindrome()', 'Forwards one cycle, backwards the next.'),
        ab('iter', MEL, '.iter(4)', 'iter(n) starts the pattern one quarter later each cycle, rotating through it.'),
        ab('chunk', 'n("0 1 2 3 4 5 6 7").scale("C4:minor").s("square").decay(.12).sustain(0)', '.chunk(4, x => x.add(7))', 'chunk(n, f) applies f to one part of the cycle, moving to the next part each cycle.'),
      ],
    },
    {
      id: 'layering',
      title: 'Layering copies',
      blocks: [
        ab('off: a shifted, changed copy', MEL, '.off(1/8, x => x.add(n(7)))', 'off(time, f) adds a copy shifted by time and transformed by f: here an echo a fifth higher, making a two-part canon.'),
        ab('superimpose', MEL, '.superimpose(x => x.add(n(2)).slow(2))', 'superimpose(f) plays the original with a transformed copy on top.'),
        ab('echo: repeated, fading copies', 's("cp ~ ~ ~").bank("RolandTR909")', '.echo(4, 1/8, .6)', 'echo(times, time, feedback) adds rhythmic repeats in the pattern itself (unlike the delay effect, each repeat is a real event).'),
        ab('jux: left and right', MEL, '.jux(rev)', 'jux(f) puts the original on the left and f applied to it on the right.'),
      ],
    },
    {
      id: 'variation',
      title: 'Variation over time',
      blocks: [
        ab('every / firstOf', DRUMS, '.firstOf(4, x => x.fast(2))', 'firstOf(n, f) (also every) applies f once every n cycles, on the first; lastOf(n, f) applies it on the last, which is the natural place for a fill.'),
        ab('sometimes', 's("hh*16").bank("RolandTR909")', '.sometimes(x => x.speed(2))', 'sometimes(f) applies f to about half the events at random. often (75%), rarely (25%), almostNever, almostAlways and sometimesBy(p, f) set other chances.'),
        ab('degradeBy', 's("hh*16").bank("RolandTR909")', '.degradeBy(.5)', 'degradeBy(p) drops events at random with probability p.'),
        ab('someCyclesBy', DRUMS, '.someCyclesBy(.3, x => x.speed(.5))', 'someCyclesBy(p, f) decides once per whole cycle instead of per event.'),
      ],
    },
    {
      id: 'rhythm',
      title: 'Borrowing rhythm: struct, mask, euclid, beat, segment',
      blocks: [
        ab('struct: impose a rhythm', 'note("c3 eb3 g3 bb3").s("sawtooth").lpf(1000)', '.struct("x ~ x x ~ x ~ x")', 'struct gives a pattern the rhythm of another: each x is an event, and the notes come from whatever was playing at that time.'),
        ab('mask: silence parts', DRUMS, '.mask("<1 [1 0] 1 [0 1]>")', 'mask keeps the pattern where the mask is 1 and silences it where it is 0, without changing the rhythm.'),
        ab('euclid', 'note("c3").s("square").decay(.1).sustain(0)', '.euclid(5, 8)', 'euclid(hits, steps) is the function form of the (3,8) mini-notation.'),
        ab('beat: hits by step number', 's("bd")', '.beat("0,3,6,10,13", 16)', 'beat(positions, steps) places hits on those step numbers out of a grid of steps.'),
        ab('segment: sample a continuous signal', 'n(sine.range(0, 7)).scale("C4:minor").s("triangle")', '.segment(8)', 'Without: a continuous signal has no individual events, so nothing plays at all. segment(n) samples it n times per cycle, turning it into notes.'),
      ],
    },
    {
      id: 'signals',
      title: 'Continuous signals',
      blocks: [
        { t: 'p', text: 'Signals are patterns that change smoothly: **sine**, **cosine**, **saw**, **tri**, **square**, **rand** (random), **perlin** (smooth random) and **irand(n)** (random whole numbers). They go from 0 to 1; **range(min, max)** rescales them and **.slow(n)** stretches them over n cycles. They are perfect for automating effects.' },
        ab('A filter that breathes with sine', 'note("c2*8").s("sawtooth").lpq(8)', '.lpf(sine.range(200, 3000).slow(4))', 'The cutoff follows a sine wave over four cycles.'),
        ab('Wandering gain with perlin', 's("hh*16").bank("RolandTR909")', '.gain(perlin.range(.3, 1))', 'Perlin noise drifts smoothly at random, like a human player’s dynamics.'),
        ab('Random notes with irand', 's("triangle*8").decay(.15).sustain(0)', '.n(irand(8)).scale("C4:minor:pentatonic")', 'irand(8) picks a random degree 0–7 for every event; the scale keeps it musical.'),
        play('n(saw.range(0, 14).segment(16)).scale("C3:minor").s("square").decay(.1).sustain(0).lpf(tri.range(500, 4000).slow(2))', 'Two signals at once: a rising saw melody and a triangle-shaped filter'),
      ],
    },
  ],
  sources: ['Strudel documentation, “Time modifiers”, “Signals”, “Random modifiers”, “Conditional modifiers” and “Accumulation” (strudel.cc).'],
  related: ['music/strudel/mini-notation', 'music/strudel/song-structure'],
}

export default guide
