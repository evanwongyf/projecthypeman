import type { Guide } from '../../../guide'
import { ab, pair, play } from '../../../../strudel/demo'

const guide: Guide = {
  intro:
    'Strudel knows music theory. You can write raw note names, but it is usually easier to write scale degrees and chord symbols and let Strudel work out the actual pitches. Then changing key, scale or harmony is a one-word edit.',
  nutshell: [
    '**note("c3 eb3 g3")** plays named pitches (a–g, # or b, octave number); numbers are MIDI notes (60 = middle C).',
    '**n("0 2 4").scale("C4:minor")** plays scale degrees: 0 is the root, 2 the third, 4 the fifth. Change the scale and the melody follows.',
    '**chord("<Cm7 F7>").voicing()** turns chord symbols into well-spaced notes; **.arp()** plays them one at a time.',
    '**.add()** and **.transpose()** shift pitches; **.rootNotes(2)** gives a bassline from the chord roots.',
  ],
  sections: [
    {
      id: 'notes',
      title: 'Notes',
      blocks: [
        play('note("c3 d3 e3 f3 g3 a3 b3 c4").s("triangle")', 'A C major scale written as note names'),
        pair('Names or MIDI numbers', 'note("c4 e4 g4").s("triangle")', 'note("60 64 67").s("triangle")', 'Both lines play the same three notes. Numbers are handy for arithmetic.'),
        ab('Shifting with add', 'note("c3 e3 g3 c4").s("square").decay(.2).sustain(0)', '.add(note("<0 5 7 3>"))', 'add() adds semitones; with a pattern it moves the phrase up to a new chord each cycle.'),
      ],
    },
    {
      id: 'scales',
      title: 'Scale degrees with n() and scale()',
      blocks: [
        play('n("0 1 2 3 4 5 6 7").scale("C4:major").s("triangle")', 'Degrees 0–7 of C major'),
        pair('The same melody in another scale', 'n("0 2 4 [5 4] 2 0").scale("C4:major").s("triangle")', 'n("0 2 4 [5 4] 2 0").scale("C4:minor").s("triangle")', 'Only the scale name changes. Other names to try: dorian, phrygian, lydian, mixolydian, harmonic minor, minor pentatonic, major pentatonic, whole tone, chromatic, blues.'),
        play('n("0 2 4 6 4 2").scale("<C4:major A3:minor F4:lydian G3:mixolydian>").s("triangle")', 'A pattern of scales: one per cycle'),
        ab('Negative and large degrees', 'n("0 2 4 7").scale("D4:minor:pentatonic").s("sawtooth").lpf(1500)', '.add(n("<0 -3 2 5>"))', 'Degrees wrap into other octaves, so -3 is below the root and 7 is the root an octave up (in a seven-note scale).'),
      ],
    },
    {
      id: 'chords',
      title: 'Chords and voicings',
      blocks: [
        pair('Chord symbols vs. hand-written notes', 'note("<[c3,eb3,g3,bb3] [f3,ab3,c4,eb4]>").s("triangle")', 'chord("<Cm7 Fm7>").voicing().s("triangle")', 'voicing() chooses an inversion of each chord close to the previous one, as a pianist would, instead of always stacking from the root.'),
        play('chord("<C^7 A7b13 Dm7 G7>").voicing().s("piano").room(.3)', 'A jazz turnaround with extensions'),
        { t: 'p', text: 'Chord symbols follow the usual lead-sheet style: **C** major, **Cm** minor, **C7** dominant seventh, **C^7** major seventh, **Cm7**, **Cm7b5** half-diminished, **Co7** diminished, **C9**, **C13**, **Csus**, **C6** and altered tones like **b9**, **#11**, **b13**. **.anchor("G4")** sets the top note the voicings gather around, and **.dict("ireal")** picks a different voicing dictionary.' },
        ab('Arpeggios', 'chord("<Cm7 Fm7 Ab^7 G7>").voicing().s("square").decay(.15).sustain(0)', '.arp("0 1 2 3 2 1")', 'arp() plays the chord’s notes one by one in the order given (0 is the lowest).'),
        ab('Strumming with n over a chord', 'chord("<Cm7 Fm7 Ab^7 G7>").voicing().s("triangle")', '.struct("x ~ x x")', 'struct gives the chord a rhythm; "x" marks where it plays.'),
      ],
    },
    {
      id: 'bass',
      title: 'Basslines from chords',
      blocks: [
        pair(
          'Chords alone vs. chords with a root bass',
          '$: chord("<Cm7 Fm7 Ab^7 G7>").voicing().s("triangle").gain(.6)',
          'let chords = chord("<Cm7 Fm7 Ab^7 G7>")\n$: chords.voicing().s("triangle").gain(.6)\n$: n("0 ~ 0 [~ 0]").set(chords).mode("root:g2").voicing().s("sawtooth").lpf(400)',
          'mode("root:g2") turns a chord into its root note placed below G2; n picks which chord tone, so the bass always follows the harmony.',
        ),
        ab('Transpose a whole part', 'chord("<Cm7 Fm7>").voicing().s("triangle")', '.transpose(5)', 'transpose moves notes and chords by semitones: +5 here goes from C minor up to F minor.'),
      ],
    },
  ],
  sources: ['Strudel documentation, “Tonal functions” (strudel.cc), built on the Tonal.js music theory library.'],
  related: ['music/strudel/mini-notation', 'music/strudel/fx-filters'],
}

export default guide
