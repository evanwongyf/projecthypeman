import type { Guide } from '../../../guide'
import { pair, play } from '../../../../strudel/demo'

const guide: Guide = {
  intro:
    'Mini-notation is the little rhythm language inside Strudel’s double-quoted strings. A handful of symbols, spaces, brackets, angle brackets, commas, stars, describe almost any rhythm in a few characters. Each symbol below is shown on its own, played without and with it.',
  nutshell: [
    'Space-separated steps share the cycle equally: **"a b c d"**.',
    '**[ ]** squeezes several steps into one; **< >** plays one step per cycle in turn; **,** plays things at the same time.',
    '**~** (or **-**) is a rest; **\\*n** repeats faster; **/n** slows down; **!n** repeats a step; **@n** makes a step longer.',
    '**?** randomly drops a step, **|** picks randomly between options, and **(3,8)** spreads 3 hits over 8 slots (a Euclidean rhythm).',
    '**{ }** lines up patterns step by step regardless of length (polymeter), and **:** picks a sample number or attaches a value.',
  ],
  sections: [
    {
      id: 'sequence',
      title: 'Sequences and rests',
      blocks: [
        pair('Four steps vs. eight steps', 's("bd sd bd sd")', 's("bd sd bd sd bd sd bd sd")', 'More steps in the same cycle means each step is shorter: the cycle length never changes.'),
        pair('Rests: ~', 's("bd sd bd sd")', 's("bd ~ ~ sd")', 'A tilde (or a dash) is a silent step that still takes up its share of time.'),
      ],
    },
    {
      id: 'brackets',
      title: 'Subdivision: [ ]',
      blocks: [
        pair('Square brackets fit several steps into one', 's("bd sd bd sd")', 's("bd [sd sd] bd [sd sd sd]")', 'The second and fourth steps are split into two and three faster hits. Brackets can nest: "bd [sd [hh hh]]".'),
        pair('The dot: an alternative to brackets', 's("bd [hh hh] sd [hh hh hh]")', 's("bd . hh hh . sd . hh hh hh")', 'Dots separate groups, so you do not have to type the brackets. Both lines sound identical.'),
      ],
    },
    {
      id: 'alternation',
      title: 'One per cycle: < >',
      blocks: [
        pair('Angle brackets alternate', 's("bd sd hh cp")', 's("bd <sd cp> hh <cp sd oh rim>").bank("RolandTR909")', 'Each cycle takes the next item from every <...> group, so a short pattern can vary over several bars.'),
        play('note("<c3 eb3 g3 bb3>").s("sawtooth").lpf(800)', 'A one-note-per-cycle bassline'),
      ],
    },
    {
      id: 'stack',
      title: 'At the same time: ,',
      blocks: [
        pair('Commas stack rhythms', 's("bd*4")', 's("bd*4, [~ hh]*4, ~ sd")', 'Three rhythms of different density played together: a four-on-the-floor kick, offbeat hats and a backbeat snare.'),
        pair('…and notes into chords', 'note("c3 e3 g3").s("triangle")', 'note("[c3,e3,g3]").s("triangle")', 'Inside brackets, commas make chords.'),
      ],
    },
    {
      id: 'speed',
      title: 'Faster, slower, repeated: * / !',
      blocks: [
        pair('* repeats a step faster', 's("bd hh sd hh")', 's("bd hh*2 sd hh*4")'),
        pair('/ spreads a step over several cycles', 'note("[c3 e3 g3 b3]").s("square").decay(.2).sustain(0)', 'note("[c3 e3 g3 b3]/2").s("square").decay(.2).sustain(0)', 'With /2 the four notes take two cycles, so you hear two per cycle.'),
        pair('! repeats a step without squeezing it', 's("bd sd")', 's("bd!3 sd")', '"bd!3 sd" is the same as "bd bd bd sd": the copies are new steps, unlike * which squeezes copies into one step.'),
      ],
    },
    {
      id: 'elongate',
      title: 'Longer steps: @ and _',
      blocks: [
        pair('@ gives a step more weight', 'note("c3 e3 g3").s("sawtooth").lpf(1200)', 'note("c3@3 e3 g3").s("sawtooth").lpf(1200)', 'c3@3 lasts three times as long as the other steps: 3 + 1 + 1 = five slots in the cycle.'),
        pair('_ continues the previous note', 'note("c3 e3 g3 b3").s("triangle")', 'note("c3 _ _ e3").s("triangle")', 'Each underscore extends the step before it, which reads nicely for long held notes.'),
      ],
    },
    {
      id: 'chance',
      title: 'Randomness: ? and |',
      blocks: [
        pair('? drops a step half the time', 's("hh*16").bank("RolandTR909")', 's("hh*16?").bank("RolandTR909")', 'Add a number for a different probability: hh*16?0.2 drops 20% of the hits.'),
        pair('| picks one option at random each cycle', 's("bd*2, ~ sd")', 's("bd*2, ~ [sd|cp|[sd sd]]").bank("RolandTR909")'),
      ],
    },
    {
      id: 'euclid',
      title: 'Euclidean rhythms: (hits, steps, rotation)',
      blocks: [
        { t: 'p', text: 'Writing **bd(3,8)** spreads 3 hits as evenly as possible over 8 steps. This algorithm, described by Godfried Toussaint, produces many of the world’s traditional rhythms: (3,8) is the Cuban tresillo, (5,8) the cinquillo, (7,12) a West African bell pattern. A third number rotates the pattern.' },
        pair('Straight vs. Euclidean', 's("bd*4")', 's("bd(3,8)")'),
        pair('Layered Euclidean rhythms', 's("bd(3,8)")', 's("bd(3,8), hh(7,16), rim(5,8,2)").bank("RolandTR909")', 'Three Euclidean rhythms over each other already sound like a groove.'),
      ],
    },
    {
      id: 'polymeter',
      title: 'Polymeter: { } and %',
      blocks: [
        pair(
          'Curly braces line patterns up step by step',
          'note("[c3 e3 g3, c4 d4 e4 g4]").s("square").decay(.12).sustain(0)',
          'note("{c3 e3 g3, c4 d4 e4 g4}").s("square").decay(.12).sustain(0)',
          'With [ , ] both parts fit one cycle, so 3 and 4 notes have different lengths. With { , } every step is the same length (set by the first part), so the 3-note and 4-note lines drift against each other and only line up every 12 steps.',
        ),
        play('note("{c3 eb3 g3 bb3 f3}%8").s("sawtooth").lpf(900).decay(.15).sustain(0)', 'A 5-note phrase played 8 steps per cycle with %8'),
      ],
    },
    {
      id: 'values',
      title: 'Sample numbers and values: :',
      blocks: [
        pair('The colon picks a sample', 's("bd*4")', 's("bd:0 bd:3 bd:6 bd:9")', 'bd:3 is the fourth kick in the bd folder.'),
        play('s("bd*2, hh*8").gain("1 .5 .8 .5")', 'Mini-notation works for numbers too', 'Any control accepts a pattern string: here the hats get a pattern of volumes.'),
      ],
    },
    {
      id: 'summary',
      title: 'Cheat sheet',
      blocks: [
        {
          t: 'table',
          head: ['Symbol', 'Meaning', 'Example'],
          rows: [
            ['space', 'Steps in sequence, sharing the cycle', '"bd sd hh"'],
            ['~ or -', 'Rest', '"bd ~ sd ~"'],
            ['[ ]', 'Subdivide one step', '"bd [sd sd]"'],
            ['.', 'Separate groups (like brackets)', '"bd . sd sd"'],
            ['< >', 'One item per cycle, in turn', '"bd <sd cp>"'],
            [',', 'Play together (layers, chords)', '"bd*2, hh*8" / "[c3,e3,g3]"'],
            ['*n', 'Repeat faster inside the step', '"hh*4"'],
            ['/n', 'Slow down over n cycles', '"[c d e f]/2"'],
            ['!n', 'Repeat the step n times', '"bd!3 sd"'],
            ['@n', 'Make the step n times longer', '"c@3 e g"'],
            ['_', 'Continue the previous step', '"c _ _ e"'],
            ['?', 'Drop randomly (50% or ?p)', '"hh*8?"'],
            ['|', 'Choose randomly', '"[bd|cp]"'],
            ['(k,n,r)', 'Euclidean rhythm', '"bd(3,8,2)"'],
            ['{ }', 'Polymeter: align steps', '"{a b c, d e}"'],
            ['%n', 'Steps per cycle for { }', '"{a b c}%4"'],
            [':', 'Sample number or extra value', '"bd:3"'],
          ],
        },
      ],
    },
  ],
  sources: ['Strudel documentation, “Mini-notation” (strudel.cc).', 'Toussaint, G. (2005). The Euclidean algorithm generates traditional musical rhythms. Proceedings of BRIDGES.'],
  related: ['music/strudel/first-sounds', 'music/strudel/pattern-transformations'],
}

export default guide
