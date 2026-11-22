import type { Guide } from '../../../guide'
import { ab, play } from '../../../../strudel/demo'

const guide: Guide = {
  intro:
    'Strudel is a free, open-source live-coding environment for music that runs in the browser. You describe a loop as a pattern in a line of JavaScript-flavoured code, press play, and change the code while it keeps playing. It is a JavaScript port of TidalCycles, the language used at algoraves, made by Felix Roos, Alex McLean and contributors.',
  nutshell: [
    'Music in Strudel is built from **patterns**: descriptions of events that repeat every **cycle** (by default one cycle lasts two seconds).',
    'A quoted string like **"bd sd"** is **mini-notation**: it squeezes its events evenly into one cycle.',
    'Sound is chosen with **s()** (samples and synths) or **note()** / **n()** (pitches), then shaped by chaining effects like **.lpf(800)** or **.room(.5)**.',
    'Every effect on this shelf is demonstrated twice: **▶ Without** plays a short phrase, **▶ With** plays the same phrase with the effect added (highlighted in the code).',
    'The **Strudel runner** in the Relax area is a full editor over animated pixel-art scenes, with a library of hundreds of community songs and drum patterns to open and remix.',
  ],
  sections: [
    {
      id: 'try',
      title: 'Try it: your first pattern',
      lead: 'Press play. The first click also loads Strudel and its sounds, which can take a few seconds.',
      blocks: [
        play('s("bd hh sd hh")', 'Four drum hits per cycle', 'A kick (bd), hi-hat (hh), snare (sd), hi-hat: the four sounds share one cycle equally, so each lasts half a second.'),
        { t: 'p', text: 'That is the whole idea. Everything else on this shelf adds to it: more sounds layered together, notes and chords, effects that shape the sound, and functions that change the pattern over time.' },
      ],
    },
    {
      id: 'demos',
      title: 'How the with / without demos work',
      blocks: [
        ab('Example: a low-pass filter', 'note("c2 eb2 g2 bb2").s("sawtooth")', '.lpf(400)', 'The highlighted part is the only difference. Play both and listen for what changes: here the bright buzz of the sawtooth is muffled.'),
        {
          t: 'list',
          items: [
            'Only one demo plays at a time; starting another stops the first, and **■ Stop** silences it.',
            '**Open in the runner** copies the code into the full editor so you can change numbers and hear the result.',
            'Headphones or decent speakers help: low basses and subtle stereo effects are hard to hear on a phone speaker.',
            'Sounds stream from GitHub the first time they are used, so the first play of a new sound can start a moment late.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Mind the volume', text: 'Some effects (distortion, resonance, feedback) can get loud. Start with your volume low and turn it up.' },
      ],
    },
    {
      id: 'cycles',
      title: 'The cycle: Strudel’s unit of time',
      blocks: [
        { t: 'p', text: 'Strudel measures time in **cycles** rather than beats or seconds. A pattern says what happens within one cycle, and it repeats. The tempo is how many cycles happen per second (**cps**, default 0.5) or per minute (**setcpm**). Most music in 4/4 treats one cycle as one bar, so **setcpm(120/4)** gives 120 beats per minute with four beats per bar.' },
        play('setcpm(120/4)\ns("bd*4, [~ hh]*4, ~ sd")', 'One cycle as one bar of 4/4 at 120 bpm'),
        {
          t: 'terms',
          items: [
            { term: 'Pattern', def: 'A description of events over time. Patterns can be combined, transformed and layered, and they repeat every cycle unless told otherwise.' },
            { term: 'Event (hap)', def: 'One thing that happens: a sound with a start time, a length and its settings (sound, note, gain, filter…).' },
            { term: 'Control / effect', def: 'A named setting attached to events, such as .gain(.8) or .lpf(500). Controls can themselves be patterns: .lpf("<300 3000>") changes the filter every cycle.' },
            { term: 'Mini-notation', def: 'The compact rhythm language inside double-quoted strings: "bd [sd sd] ~ hh*2".' },
            { term: 'Orbit', def: 'A group of patterns that share one delay and one reverb. Most of the time you can ignore it.' },
          ],
        },
      ],
    },
    {
      id: 'keys',
      title: 'Using the runner',
      blocks: [
        {
          t: 'table',
          head: ['Action', 'How'],
          rows: [
            ['Play, or apply your changes while playing', 'Ctrl+Enter (or the ▶ button)'],
            ['Stop', 'Ctrl+. (full stop) or ■'],
            ['Open a song', '♫ Song library, then Open (to read) or ▶ Play'],
            ['See the scene without the code', 'Hide code; Full screen for the whole display'],
            ['Share', 'Open this code on strudel.cc, or Copy code'],
          ],
        },
        { t: 'p', text: 'While a pattern plays, the editor highlights each part of the mini-notation as it sounds, and the pixel-art background pulses with the hits. Your own sketch is saved in the browser between visits.' },
      ],
    },
    {
      id: 'route',
      title: 'A route through this shelf',
      blocks: [
        {
          t: 'links',
          items: [
            { path: 'music/strudel/first-sounds', note: 'Samples, synths, tempo and layering' },
            { path: 'music/strudel/mini-notation', note: 'The rhythm language in the quotes' },
            { path: 'music/strudel/notes-scales-chords', note: 'Melody and harmony' },
            { path: 'music/strudel/sound-theory', note: 'Sound theory: waves, harmonics, decibels' },
            { path: 'music/strudel/fx-volume-envelope', note: 'Volume and envelopes' },
            { path: 'music/strudel/fx-filters', note: 'Filters' },
            { path: 'music/strudel/fx-filter-modulation', note: 'Filter envelopes and LFOs' },
            { path: 'music/strudel/fx-delay', note: 'Delay and echo' },
            { path: 'music/strudel/fx-reverb', note: 'Reverb' },
            { path: 'music/strudel/fx-stereo', note: 'Stereo and orbits' },
            { path: 'music/strudel/fx-modulation', note: 'Tremolo, vibrato, chorus, phaser, Leslie' },
            { path: 'music/strudel/fx-distortion', note: 'Distortion and lo-fi' },
            { path: 'music/strudel/fx-dynamics', note: 'Compression, transients, sidechain' },
            { path: 'music/strudel/fx-synthesis', note: 'Synthesis controls' },
            { path: 'music/strudel/fx-samples', note: 'Sampler, chopping and stretching' },
            { path: 'music/strudel/pattern-transformations', note: 'Making loops evolve' },
            { path: 'music/strudel/song-structure', note: 'From a loop to a whole track' },
            { path: 'music/strudel/effects-reference', note: 'Everything in one table' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Strudel documentation and workshop, strudel.cc (Felix Roos, Alex McLean and contributors; AGPL-3.0). The effect descriptions on this shelf follow the parameter documentation in the Strudel source.',
    'McLean, A. (2014). Making programming languages to dance to: live coding with Tidal. FARM workshop, ICFP.',
    'Roos, F. and McLean, A. (2023). Strudel: live coding patterns on the web. Proceedings of the International Conference on Live Coding.',
  ],
  related: ['music/strudel/first-sounds', 'music/strudel/sound-theory'],
}

export default guide
