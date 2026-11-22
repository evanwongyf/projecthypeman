import type { Guide } from '../../../guide'
import { pair, play } from '../../../../strudel/demo'

const guide: Guide = {
  intro:
    'Every effect in Strudel changes one of a few basic properties of sound: how loud it is, how its loudness changes over time, which frequencies it contains, when it happens and where it sits in stereo. This guide explains those properties once, with real waveform and spectrum pictures of each sound, so the effect guides can build on them.',
  nutshell: [
    'Sound is a fast change in air pressure. A **waveform** plots that pressure over time; a **spectrum** shows how much of each frequency the sound contains.',
    '**Frequency** (hertz, cycles per second) is heard as pitch. Doubling it raises the pitch an octave. People hear roughly 20 Hz to 20 000 Hz.',
    '**Amplitude** is heard as loudness and measured in **decibels** (dB): every −6 dB halves the amplitude, and −20 dB is a tenth.',
    'Real sounds contain many frequencies at once: a **fundamental** (the pitch) and **harmonics** above it. Their balance is the **timbre**, why a flute and a violin playing the same note sound different.',
    'An **envelope** is how loudness (or anything else) changes during a note. Filters change the spectrum; distortion adds new frequencies; delay and reverb add copies over time.',
  ],
  sections: [
    {
      id: 'reading',
      title: 'How to read the sound graphs',
      lead: 'Each demo on this shelf comes with pictures rendered from its actual audio.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Waveform (whole clip)', def: 'Loudness over the first couple of cycles. Tall means loud; each spike is a hit or the start of a note. Gaps are silence; long smooth tails are reverb, delay or long releases.' },
            { term: 'Close-up', def: 'About 46 milliseconds of the wave itself, taken from the loudest moment. Here you can see the shape of the vibration, smooth curves for pure tones, sharp corners for buzzy ones, jagged noise for cymbals.' },
            { term: 'Spectrum', def: 'How much energy the sound has at each frequency, averaged over the clip, from low (left, 30 Hz) to high (right, 11 kHz). Height is in decibels. Bass instruments are tall on the left; bright sounds and cymbals reach far to the right.' },
            { term: 'Without vs with', def: 'In an A/B demo both clips are drawn on the same scale, and their spectra are overlaid (grey = without, colour = with), so you can see exactly what the effect changed.' },
          ],
        },
        play('note("c3").s("sine").release(.2)', 'A single sine note', 'A sine wave is the simplest possible sound: one frequency and nothing else. Its close-up is a smooth curve and its spectrum is a single peak.'),
      ],
    },
    {
      id: 'frequency',
      title: 'Frequency and pitch',
      blocks: [
        { t: 'p', text: 'A vibration repeating 110 times a second has a frequency of 110 Hz and sounds like the note A2. Musical pitch is logarithmic: each **octave** doubles the frequency, and each of the 12 **semitones** in an octave multiplies it by the twelfth root of two.' },
        { t: 'math', tex: 'f = 440 \\cdot 2^{(m-69)/12}', caption: 'The frequency of MIDI note m in standard tuning', where: [{ sym: 'f', def: 'frequency in hertz' }, { sym: 'm', def: 'MIDI note number (60 = middle C, 69 = A4)' }], plain: 'Start from A above middle C at 440 Hz; every semitone up multiplies the frequency by about 1.0595, and every twelve semitones doubles it.' },
        pair('An octave apart', 'note("a2").s("sine").release(.3)', 'note("a3").s("sine").release(.3)', 'A2 is 110 Hz and A3 is 220 Hz. In the close-up, the second wave cycles twice as fast; in the spectrum, its peak moves one octave to the right.'),
        { t: 'table', head: ['Range', 'Frequencies', 'What lives there'], rows: [['Sub bass', '20–60 Hz', 'Felt more than heard: the body of kicks and sub basses'], ['Bass', '60–250 Hz', 'Bass guitar, the fundamental of most bass notes, kick thump'], ['Low mids', '250–500 Hz', 'Warmth and “mud”; the body of guitars and voices'], ['Mids', '500 Hz–2 kHz', 'Where most melodies and the character of instruments sit'], ['Upper mids', '2–4 kHz', 'Presence and bite; the ear is most sensitive here'], ['Highs', '4–20 kHz', 'Air, sizzle, cymbals, the “s” of speech'], ] },
      ],
    },
    {
      id: 'harmonics',
      title: 'Harmonics and timbre: the four basic waves',
      blocks: [
        { t: 'p', text: 'A note on a real instrument vibrates at its fundamental frequency and, at the same time, at whole-number multiples of it: 2×, 3×, 4×… These **harmonics** (or overtones) are what make it sound like that instrument. Synthesiser waveforms are defined by which harmonics they contain.' },
        {
          t: 'table',
          head: ['Wave', 'Harmonics', 'Sound', 'Shape'],
          rows: [
            ['sine', 'Only the fundamental', 'Pure, round, flute-like', 'Smooth curve'],
            ['triangle', 'Odd harmonics, falling off fast (1/n²)', 'Soft, hollow, mellow', 'Straight ramps up and down'],
            ['square', 'Odd harmonics (1/n)', 'Hollow, reedy, clarinet-like, “8-bit”', 'Jumps between two levels'],
            ['sawtooth', 'All harmonics (1/n)', 'Bright, buzzy, brassy, string-like', 'Ramp then a sudden drop'],
          ],
        },
        { t: 'math', tex: 'x_{\\text{saw}}(t) = \\frac{2}{\\pi}\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}\\,\\sin(2\\pi n f t)', caption: 'A sawtooth is a sum of sine waves at every multiple of the fundamental', where: [{ sym: 'n', def: 'harmonic number (1 = fundamental)' }, { sym: 'f', def: 'fundamental frequency' }], plain: 'Add a sine at the note’s frequency, one at twice the frequency at half the strength, one at three times at a third of the strength, and so on: the result converges to a sawtooth.' },
        play('note("a2").s("sine").release(.3)', 'sine', 'One peak in the spectrum.'),
        play('note("a2").s("triangle").release(.3)', 'triangle', 'Peaks at 1×, 3×, 5×… the fundamental, dropping away quickly.'),
        play('note("a2").s("square").release(.3)', 'square', 'Odd harmonics only, falling more slowly: a picket fence with gaps.'),
        play('note("a2").s("sawtooth").release(.3)', 'sawtooth', 'Every harmonic: the densest spectrum, which is why filters have so much to work with on a saw.'),
        play('s("white pink brown")', 'Noise', 'Noise has energy at all frequencies at once and no pitch. White noise is equal per hertz (bright); pink falls 3 dB per octave (balanced); brown falls 6 dB per octave (dark rumble).'),
      ],
    },
    {
      id: 'loudness',
      title: 'Amplitude, loudness and decibels',
      blocks: [
        { t: 'p', text: 'Amplitude is how far the wave swings. Digital audio represents it as numbers between −1 and +1; anything beyond that **clips** (is chopped flat), which sounds harsh. Because hearing is roughly logarithmic, levels are given in **decibels** relative to that maximum (dBFS, decibels full scale).' },
        { t: 'math', tex: 'L_{\\text{dB}} = 20\\log_{10}\\!\\left(\\frac{A}{A_{\\text{ref}}}\\right)', caption: 'Converting an amplitude ratio to decibels', where: [{ sym: 'A', def: 'amplitude' }, { sym: 'A_{\\text{ref}}', def: 'reference amplitude (1.0 for dBFS)' }], plain: 'Half the amplitude is −6 dB, a quarter is −12 dB, a tenth is −20 dB, a hundredth −40 dB. A difference of about 10 dB sounds roughly “twice as loud”.' },
        pair('Gain: the same beat at two levels', 's("bd*2, hh*8").bank("RolandTR909").gain(1)', 's("bd*2, hh*8").bank("RolandTR909").gain(.5)', 'The waveform shrinks; the spectrum keeps its shape but moves down. Changing volume does not change timbre.'),
        { t: 'p', text: '**Peak** level is the highest instant; **RMS** (root mean square) is the average energy and tracks perceived loudness better. Drums have high peaks but modest RMS; a sustained pad is the opposite. Compressors (see the dynamics guide) work on that difference.' },
      ],
    },
    {
      id: 'envelope',
      title: 'Envelopes: sound over time',
      blocks: [
        { t: 'p', text: 'Almost nothing in music has a constant volume. A plucked string jumps to full loudness and fades; a bowed string swells in. The curve of loudness over a note is its **envelope**, and in synthesisers it is usually drawn with four stages: attack, decay, sustain, release (ADSR).' },
        pair('Plucked vs bowed', 'note("c3 g3").s("sawtooth").lpf(1500).decay(.2).sustain(0)', 'note("c3 g3").s("sawtooth").lpf(1500).attack(.4).release(.6)', 'Same notes, different envelopes: compare the spiky waveform of the pluck with the slow swells of the bowed version.'),
        { t: 'links', items: [{ path: 'music/strudel/fx-volume-envelope', note: 'The envelope controls, one by one' }] },
      ],
    },
    {
      id: 'digital',
      title: 'Digital audio: sample rate and bit depth',
      blocks: [
        { t: 'p', text: 'Computers store sound as a list of numbers measured many times a second. The **sample rate** (typically 44 100 or 48 000 per second) limits the highest frequency that can be stored to half of it, the **Nyquist frequency**. The **bit depth** sets how finely each number is stored: 16 bits gives 65 536 levels and about 96 dB between the quietest and loudest sound.' },
        { t: 'math', tex: 'f_{\\max} = \\frac{f_s}{2}, \\qquad \\text{dynamic range} \\approx 6.02\\,b \\ \\text{dB}', caption: 'The Nyquist limit and the dynamic range of b-bit audio', where: [{ sym: 'f_s', def: 'sample rate' }, { sym: 'b', def: 'bits per sample' }] },
        { t: 'p', text: 'Lowering either one on purpose is a classic lo-fi effect: **coarse** reduces the effective sample rate (adding metallic aliasing) and **crush** reduces the bit depth (adding grainy quantisation noise). Both are covered in the distortion guide.' },
      ],
    },
    {
      id: 'space',
      title: 'Time, space and stereo',
      blocks: [
        { t: 'p', text: 'We judge the size of a space by its echoes. A single clear repeat is heard as an **echo** (delay); thousands of overlapping reflections blur into **reverberation**. We judge direction mostly from the difference between the two ears, which stereo **panning** imitates by changing the level in each speaker.' },
        pair('Dry vs in a room', 's("cp ~ ~ ~").bank("RolandTR909")', 's("cp ~ ~ ~").bank("RolandTR909").room(.8).roomsize(6)', 'The reverb adds a long decaying tail after each clap in the waveform.'),
        { t: 'links', items: [{ path: 'music/strudel/fx-delay', note: 'Delay' }, { path: 'music/strudel/fx-reverb', note: 'Reverb' }, { path: 'music/strudel/fx-stereo', note: 'Stereo' }] },
      ],
    },
  ],
  sources: ['Roads, C. (1996). The Computer Music Tutorial. MIT Press.', 'Puckette, M. (2007). The Theory and Technique of Electronic Music. World Scientific (free online).', 'Smith, J. O. Mathematics of the Discrete Fourier Transform; Introduction to Digital Filters (CCRMA, Stanford; free online).'],
  related: ['music/strudel/fx-volume-envelope', 'music/strudel/fx-filters'],
}

export default guide
