import type { Guide } from '../../../guide'
import { ab, pair, play } from '../../../../strudel/demo'

const guide: Guide = {
  intro:
    'Every sound in Strudel is either a recorded sample (a drum hit, a piano note, a vocal) or a synthesiser that generates the waveform on the fly. This guide covers picking sounds, choosing drum machines, the basic synth waves, setting the tempo and stacking several parts into one groove.',
  nutshell: [
    '**s("bd sd")** (or **sound()**) plays sounds by name. Drum names follow the classic abbreviations: bd kick, sd snare, hh hi-hat, oh open hat, cp clap, rim, lt/mt/ht toms, cr crash, rd ride.',
    '**.bank("RolandTR909")** picks a drum machine; **"hh:3"** or **.n(3)** picks the fourth sample of a set.',
    'The synths are waveforms: **sine**, **triangle**, **square**, **sawtooth**, plus **supersaw**, **pulse** and noise. Give them pitches with **note()**.',
    'Layer parts with **$:** on each line (or **stack(a, b, c)**), and set the speed with **setcpm(bpm/4)**.',
  ],
  sections: [
    {
      id: 'samples',
      title: 'Samples by name',
      blocks: [
        play('s("bd hh sd hh")', 'Drum samples'),
        { t: 'p', text: 'Strudel here loads the same sound libraries as the official site: the classic **Dirt-Samples** set from TidalCycles, over 60 vintage **drum machines**, a sampled grand piano, the **VCSL** orchestral and folk instrument library and the General MIDI instruments (names starting with **gm_**).' },
        play('s("arpy casio jvbass east crow metal tabla sitar")', 'A tour of other Dirt-Samples sets'),
        ab('Picking a different sample from a set', 's("hh*8")', '.n("0 1 2 3 4 5 6 7")', 'Most names are folders of several recordings. n chooses which one (counting from 0); you can also write it inline as "hh:3".'),
      ],
    },
    {
      id: 'banks',
      title: 'Drum machines with .bank()',
      blocks: [
        ab('Same pattern, a Roland TR-909', 's("bd*2, ~ sd, hh*8, ~ ~ ~ oh")', '.bank("RolandTR909")'),
        ab('… or a TR-808', 's("bd*2, ~ sd, hh*8, ~ ~ ~ oh")', '.bank("RolandTR808")'),
        ab('… or a Linn LM-1', 's("bd*2, ~ sd, hh*8, ~ ~ ~ oh")', '.bank("LinnLM1")'),
        { t: 'p', text: 'A bank simply prefixes the sound name (bd becomes RolandTR909_bd). Short aliases work too, such as **"tr909"** and **"tr808"**. Other banks to try: **AkaiMPC60**, **BossDR110**, **CasioRZ1**, **EmuSP12**, **KorgMinipops**, **LinnLM1**, **OberheimDMX**, **RolandCompurhythm78**, **RolandTR707**, **YamahaRX5**.' },
      ],
    },
    {
      id: 'synths',
      title: 'Synth waveforms',
      blocks: [
        { t: 'p', text: 'Synths need a pitch. **note("c3 e3 g3")** gives note names (or MIDI numbers), and **s()** chooses the waveform. Each shape has a different set of harmonics, which is what you hear as its colour.' },
        play('note("c3 e3 g3 c4").s("<sine triangle square sawtooth>")', 'Sine, triangle, square, sawtooth (one per cycle)', 'Sine is pure and round; triangle is soft; square is hollow and reedy; sawtooth is bright and buzzy (it has every harmonic).'),
        play('note("c3 e3 g3 c4").s("<supersaw pulse>")', 'supersaw and pulse', 'supersaw stacks several detuned saws into one thick sound; pulse is a square wave whose width you can change (see the synthesis guide).'),
        play('s("<white pink brown crackle>")', 'Noise: white, pink, brown and crackle', 'Noise has no pitch. White is the brightest; pink and brown are progressively darker; crackle is sparse vinyl-like clicks.'),
        play('note("c4 e4 g4 c5").s("<piano gm_electric_guitar_clean gm_flute vibraphone>")', 'Sampled instruments', 'piano and vibraphone are multi-sampled instruments; gm_ names are General MIDI soundfonts, loaded on first use.'),
      ],
    },
    {
      id: 'packs',
      title: 'Community sample packs',
      blocks: [
        { t: 'p', text: 'Anyone can publish sounds for Strudel by putting a **strudel.json** file in a GitHub repository, and one line loads the whole pack: **samples(\'github:user/repo\')**. The runner’s **🥁 Sounds** button lists over 200 such packs found on GitHub, breakbeats, drum kits, vocals, field recordings, synth one-shots, with a play button for every sound. Each pack keeps its own licence, so check it before publishing music made with it.' },
        { t: 'strudel', title: 'Loading a community pack of breakbeats', code: "samples('github:switchangel/breaks/13784b105c6f55eb20653a510f70e6df1f1b6e32')\ns(\"breaks:<0 1 2 3>\").fit().chop(16)", caption: 'switchangel/breaks, pinned to the commit that was indexed. The first play downloads the pack’s index and each break.' },
      ],
    },
    {
      id: 'tempo',
      title: 'Tempo',
      blocks: [
        { t: 'p', text: 'By default one cycle takes two seconds (0.5 cycles per second). **setcpm(bpm/4)** sets cycles per minute so that one cycle is one bar of four beats; **setcps()** sets cycles per second directly.' },
        pair('The same groove at two tempos', 'setcpm(90/4)\ns("bd*4, ~ sd, hh*8").bank("RolandTR909")', 'setcpm(140/4)\ns("bd*4, ~ sd, hh*8").bank("RolandTR909")', 'Without: 90 bpm. With: 140 bpm. The pattern is untouched; only the length of the cycle changes.'),
      ],
    },
    {
      id: 'layers',
      title: 'Layering parts',
      blocks: [
        { t: 'p', text: 'Start each line with **$:** to make it its own part; all of them play together. Put an underscore in front (**_$:**) to mute a line without deleting it. **stack(a, b)** does the same thing inside one expression.' },
        pair(
          'A groove, then the same groove with bass and chords',
          '$: s("bd*2, ~ sd, hh*8").bank("RolandTR909")',
          '$: s("bd*2, ~ sd, hh*8").bank("RolandTR909")\n$: note("<c2 ab1 bb1 g1>*4").s("sawtooth").lpf(600)\n$: chord("<Cm Ab Bb G>").voicing().s("triangle").gain(.5)',
        ),
        play('stack(\n  s("bd*2, ~ sd, hh*8").bank("RolandTR909"),\n  note("<c2 ab1 bb1 g1>*4").s("sawtooth").lpf(600)\n)', 'The same idea with stack()'),
        { t: 'callout', tone: 'tip', title: 'Comma = stack', text: 'Inside the quotes, a comma does the same job: "bd*2, ~ sd, hh*8" is three rhythms played at once.' },
      ],
    },
  ],
  related: ['music/strudel/mini-notation', 'music/strudel/notes-scales-chords'],
}

export default guide
