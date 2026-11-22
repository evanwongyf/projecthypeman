import type { Guide } from '../../../guide'
import { DRUMS, ab, effect, pair } from '../../../../strudel/demo'

const LEAD = 'n("0 ~ 4 ~ 7 ~ 4 2").scale("D4:minor").s("square").decay(.15).sustain(0).gain(.7)'
const CLAP = 's("cp ~ ~ ~").bank("RolandTR909")'

const guide: Guide = {
  intro:
    'Reverb is the sound of a space: the thousands of reflections off walls, floor and ceiling that arrive after the direct sound and blur into a decaying tail. It tells the ear how big the room is and how far away the source sits. Strudel’s reverb is generated per orbit, with controls for its level, size, fade time and tone, and it can also use any sample as an impulse response.',
  nutshell: [
    '**room** sets the reverb level; **roomsize** the size of the space; **roomfade** the decay time; **roomlp** and **roomdim** how dark the tail is.',
    '**iresponse** (ir) uses any sample as the room, convolution reverb; **dry** sets how much original sound remains.',
    'Like delay, reverb is per **orbit**.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'How reverb works',
      blocks: [
        { t: 'p', text: 'After a sound starts, the ear first hears the **direct sound**, then a handful of distinct **early reflections** (which tell us the room’s shape), then a dense **late reverberation** that decays roughly exponentially. The standard measure is **RT60**, the time for the reverb to fall by 60 dB: about 0.3 s in a living room, 1.5–2 s in a concert hall, over 5 s in a cathedral.' },
        { t: 'math', tex: 'RT_{60} \\approx 0.161\\,\\frac{V}{A}', caption: 'Sabine’s formula for reverberation time', where: [{ sym: 'V', def: 'room volume in cubic metres' }, { sym: 'A', def: 'total absorption (surface area × absorption coefficient, in m²)' }], plain: 'Bigger rooms and harder surfaces ring longer; soft furnishings and people absorb sound and shorten the tail.' },
        { t: 'p', text: 'Digital reverbs either simulate this with networks of delays and filters (algorithmic reverb) or **convolve** the sound with a recording of a real space’s response to a click (an impulse response). Strudel generates a synthetic impulse response from roomsize, roomfade and the damping settings, and can load a sample as the impulse response instead.' },
      ],
    },
    effect({
      id: 'room',
      title: 'room, reverb level',
      sig: '.room(level)',
      lead: 'Send the sound into the reverb.',
      simple: 'Puts the sound in a room. The number is how much room you hear.',
      technical: 'Send level (0–1) to the orbit’s reverb. The dry signal is unchanged and the reverb’s output is added. "level:size" sets roomsize too.',
      higher: 'More distant, washier, more ambient.',
      lower: 'Closer and drier; 0 is off.',
      typical: '0.1–0.3 for drums and basses (or none), 0.3–0.6 for leads and keys, 0.7–1 for pads and effects.',
      listen: 'The waveform gains a smooth, decaying tail after each hit.',
      demo: ab('Drums in a room', DRUMS, '.room(.6)'),
    }),
    effect({
      id: 'roomsize',
      title: 'roomsize, size of the space',
      sig: '.roomsize(size)',
      aliases: '.size(), .sz(), .rsize()',
      lead: 'From a booth to a cathedral.',
      simple: 'How big the imaginary room is: small rooms give a short, tight ambience; huge ones a long, cavernous wash.',
      technical: 'Scales the length of the generated impulse response, so larger values give a longer reverb tail (larger RT60).',
      higher: 'Longer tail, bigger space.',
      lower: 'Shorter, tighter ambience.',
      typical: '0.5–2 small rooms, 2–5 halls, 6–10 cathedrals.',
      demo: ab('A bigger space', `${DRUMS}.room(.7)`, '.roomsize(6)'),
    }),
    effect({
      id: 'roomfade',
      title: 'roomfade, decay time',
      sig: '.roomfade(seconds)',
      aliases: '.rfade()',
      lead: 'How long the tail lasts.',
      simple: 'How long it takes for the echo of the room to die away.',
      technical: 'The fade time of the reverb’s impulse response in seconds, closely related to RT60.',
      higher: 'A longer, lingering tail.',
      lower: 'A short tail that clears quickly.',
      typical: '0.5–1.5 for natural rooms, 3–8 for ambient washes.',
      demo: ab('A longer fade', `${LEAD}.room(.6)`, '.roomfade(4)'),
    }),
    effect({
      id: 'roomlp',
      title: 'roomlp and roomdim, damping',
      sig: '.roomlp(hz)  ·  .roomdim(hz)',
      aliases: '.rlp(), .rdim()',
      lead: 'Darker, more natural reverb.',
      simple: 'Makes the reverb tail less bright, the way real rooms soak up high frequencies.',
      technical: '**roomlp** is the low-pass frequency at the start of the reverb tail; **roomdim** is the low-pass frequency it reaches at −60 dB. Real surfaces absorb highs more than lows, so natural reverbs darken as they decay.',
      higher: 'Brighter, more metallic, airy tail.',
      lower: 'Darker, warmer, more distant tail.',
      typical: 'roomlp 3000–8000, roomdim 300–1000.',
      demo: ab('A darker tail', `${LEAD}.room(.8).roomsize(4)`, '.roomlp(1500).roomdim(400)'),
    }),
    effect({
      id: 'iresponse',
      title: 'iresponse, convolution with a sample',
      sig: '.iresponse("sample")',
      aliases: '.ir(); .irspeed(), .irbegin()',
      lead: 'Use any sound as the room.',
      simple: 'Instead of an imaginary room, uses a recording as the shape of the echo, real spaces, or strange textures from any sound.',
      technical: 'Convolution reverb: the signal is convolved with the given sample as its impulse response, imposing the sample’s spectrum and decay on everything. **irspeed** plays the response faster or slower; **irbegin** starts it part-way through.',
      higher: '-',
      lower: '-',
      typical: 'A recording of a real room’s response for realism; any long, textured sample for sound design.',
      math: { tex: 'y(t) = (x * h)(t) = \\int x(\\tau)\\,h(t-\\tau)\\,d\\tau', caption: 'Convolution of the signal x with an impulse response h', plain: 'Every instant of the input triggers a copy of the impulse response scaled by its level; the output is all those copies added up.' },
      demo: ab('A sample as the room', `${DRUMS}.room(.7)`, '.iresponse("space:4")'),
    }),
    effect({
      id: 'dry',
      title: 'dry, only the reverb',
      sig: '.dry(level)',
      lead: 'Turn down the original sound.',
      simple: 'Keeps the echo of the room but removes the original sound, leaving a ghostly, distant version.',
      technical: 'Level of the unprocessed (dry) signal alongside the reverb send. dry(0) gives a 100%-wet sound.',
      higher: 'More direct sound.',
      lower: 'Only the reverb remains.',
      typical: '0 for ghostly textures; 1 normally.',
      demo: ab('All wet', `${LEAD}.room(.9).roomsize(5)`, '.dry(0)'),
    }),
    {
      id: 'techniques',
      title: 'Reverb techniques',
      blocks: [
        pair('Pre-delay feel with orbits', `$: ${CLAP}.room(.8).roomsize(6)`, `$: ${CLAP}.room(.8).roomsize(6).orbit(2).late(.04)\n$: ${CLAP}`, 'Playing a dry clap plus a slightly late, reverb-only copy on its own orbit separates the hit from its tail, like pre-delay on a studio reverb.'),
        pair('Reverb as an instrument: a pad from one hit', 's("~ ~ cp ~").bank("RolandTR909")', 's("~ ~ cp ~").bank("RolandTR909").room(1).roomsize(9).roomfade(6).dry(0).hpf(400)', 'A huge, wet, filtered reverb turns a clap into an atmosphere.'),
        { t: 'callout', tone: 'tip', title: 'Keep the low end dry', text: 'Reverb on kicks and basses muddies a mix. Keep them dry (or on their own orbit with little reverb) and give space to leads, snares and pads.' },
      ],
    },
  ],
  sources: ['Sabine, W. C. (1922). Collected Papers on Acoustics. Harvard University Press.', 'Strudel source, superdough reverb.mjs and reverbGen.mjs (AGPL-3.0).', 'Valimaki, V. et al. (2012). Fifty years of artificial reverberation. IEEE Trans. Audio, Speech, and Language Processing 20(5).'],
  related: ['music/strudel/fx-delay', 'music/strudel/fx-stereo'],
}

export default guide
