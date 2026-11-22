import type { Guide } from '../../../guide'
import { ab, effect, pair, play } from '../../../../strudel/demo'

const LEAD = 'n("0 ~ 4 ~ 7 ~ 4 2").scale("D4:minor").s("square").decay(.15).sustain(0).gain(.7)'

const guide: Guide = {
  intro:
    'Stereo places sounds between two speakers. It does not change a sound’s tone, so the spectrum pictures here look alike with and without, the difference is between your ears. Use headphones for this guide. It also covers orbits, which decide which parts share a delay and a reverb.',
  nutshell: [
    '**pan** places a sound from 0 (left) to 1 (right); patterns and signals make it move.',
    '**jux(f)** plays the original on the left and f applied to it on the right; **juxBy(w, f)** narrows the spread.',
    '**orbit** sends a part to its own delay and reverb bus.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'How we hear direction',
      blocks: [
        { t: 'p', text: 'The brain locates sounds mainly from the **level difference** between the ears (strong at high frequencies, because the head shadows one ear) and the **time difference** (under a millisecond, important at low frequencies). Stereo panning reproduces the level difference by sending more of a sound to one speaker. A **pan law** keeps the perceived loudness constant as a sound moves across the middle.' },
        { t: 'math', tex: 'L = \\cos\\!\\left(\\tfrac{\\pi}{2}p\\right),\\quad R = \\sin\\!\\left(\\tfrac{\\pi}{2}p\\right)', caption: 'Equal-power panning for a pan position p from 0 (left) to 1 (right)', plain: 'At the centre both speakers get 0.71 of the signal (−3 dB each), which adds up to the same power as one speaker at full level.' },
        { t: 'p', text: 'Low frequencies are hard to locate, so basses and kicks are usually kept in the centre; hi-hats, percussion, echoes and pads are spread to the sides.' },
      ],
    },
    effect({
      id: 'pan',
      title: 'pan',
      sig: '.pan(0–1)',
      lead: 'Left, centre or right.',
      simple: 'Moves a sound towards the left or right speaker.',
      technical: 'Stereo position: 0 hard left, 0.5 centre, 1 hard right, using an equal-power law. Patterns pan each event separately; continuous signals sweep it.',
      higher: 'Further right.',
      lower: 'Further left.',
      typical: 'Hats 0.3–0.7, percussion spread left and right, bass and kick 0.5.',
      demo: ab('Stepping across the field', 's("[bd hh]*4").bank("RolandTR909")', '.pan("<0 .25 .5 .75 1>")'),
      more: [ab('Smooth autopan with a signal', 's("hh*16").bank("RolandTR909")', '.pan(sine.slow(2))'), play('s("hh*8, ~ rim, [~ cp]*2").bank("RolandTR909").pan("<.2 .8>*8")', 'Alternating hits left and right')],
    }),
    effect({
      id: 'jux',
      title: 'jux and juxBy',
      sig: '.jux(f)  ·  .juxBy(width, f)',
      lead: 'Original left, transformed right.',
      simple: 'Splits a part in two: the normal version in your left ear and a changed version in your right ear.',
      technical: '**jux(f)** stacks the pattern panned hard left with f applied to it panned hard right. Because the two halves differ, the result has width and movement. **juxBy(w, f)** does the same with the two halves closer together (w from 0 to 1).',
      higher: 'For juxBy: wider separation.',
      lower: 'For juxBy: closer to mono.',
      typical: 'jux(rev), jux(x => x.fast(2)), jux(x => x.add(note(12))), juxBy(.5, …).',
      demo: ab('jux(rev)', LEAD, '.jux(rev)'),
      more: [ab('juxBy with a transposed copy', LEAD, '.juxBy(.6, x => x.add(note(7)).late(1/8))'), play(`${LEAD}.jux(x => x.iter(4))`, 'A slowly rotating right channel')],
    }),
    effect({
      id: 'orbit',
      title: 'orbit, effect buses',
      sig: '.orbit(n)',
      aliases: '.o()',
      lead: 'Give a part its own delay and reverb.',
      simple: 'Like putting parts in separate rooms: each orbit has its own echo and reverb, so different parts can use different settings.',
      technical: 'Strudel routes every event to an orbit (default 1). Each orbit owns one delay and one reverb, configured by the most recent events on it. Different orbits are also what sidechain ducking (duckorbit) targets.',
      higher: '-',
      lower: '-',
      typical: 'Drums on 1, melody with long delay on 2, pads with big reverb on 3.',
      demo: pair('Two delays: shared orbit vs separate orbits', 'stack(\n  s("hh*6").delay(.5).delaytime(.25),\n  s("~ sd ~ sd").delay(.5).delaytime(.125)\n)', 'stack(\n  s("hh*6").delay(.5).delaytime(.25).orbit(1),\n  s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)\n)', 'On one orbit the two delay times fight; on two orbits each part keeps its own echo.'),
    }),
  ],
  sources: ['Blauert, J. (1997). Spatial Hearing. MIT Press.', 'Strudel documentation, “Orbits” (strudel.cc).'],
  related: ['music/strudel/fx-delay', 'music/strudel/fx-reverb', 'music/strudel/fx-modulation'],
}

export default guide
