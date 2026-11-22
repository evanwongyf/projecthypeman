import type { Guide } from '../../../guide'
import { ab, effect, pair } from '../../../../strudel/demo'

const KIT = 's("bd sd [~ bd] sd, hh*8").bank("RolandTR808")'
const SYNTH = 'n(run(8)).scale("c:minor:pentatonic").s("sawtooth").lpf(1800).delay(.5)'

const guide: Guide = {
  intro:
    'Dynamics processors control the difference between the loud and quiet parts of a sound. A compressor turns down whatever gets too loud; a transient shaper sharpens or softens the attack of each hit; sidechain ducking makes one part dip whenever another plays, the pumping heartbeat of dance music.',
  nutshell: [
    '**compressor("threshold:ratio:knee:attack:release")** reduces level above the threshold by the ratio.',
    '**postgain** restores the level afterwards (make-up gain).',
    '**transient** emphasises (+) or softens (−) attacks.',
    '**duckorbit** makes other orbits dip when this part plays; **duckdepth**, **duckonset** and **duckattack** shape the dip.',
  ],
  sections: [
    {
      id: 'theory',
      title: 'How a compressor works',
      blocks: [
        { t: 'p', text: 'A compressor watches the level of the signal. Below the **threshold** it does nothing. Above it, every extra decibel of input only produces 1/**ratio** dB of extra output. **Attack** is how quickly it reacts once the threshold is crossed; **release** how quickly it lets go. The **knee** smooths the transition around the threshold. Because it reduces the peaks, the overall level can then be raised (make-up gain), making quiet details louder relative to the peaks.' },
        { t: 'math', tex: 'L_{\\text{out}} = \\begin{cases} L_{\\text{in}} & L_{\\text{in}} \\le T \\\\ T + \\dfrac{L_{\\text{in}} - T}{R} & L_{\\text{in}} > T \\end{cases}', caption: 'Static compression curve (levels in dB)', where: [{ sym: 'T', def: 'threshold' }, { sym: 'R', def: 'ratio' }], plain: 'With threshold −20 dB and ratio 4:1, a peak at −8 dB (12 dB over) comes out at −17 dB (3 dB over).' },
        { t: 'table', head: ['Ratio', 'Character'], rows: [['1.5–2 : 1', 'Gentle glue on a mix or a vocal'], ['4 : 1', 'Firm control of drums and bass'], ['10 : 1 and above', 'Limiting: peaks are held hard at the threshold'], ['20 : 1, fast attack, high make-up', 'Squashed, pumping, “in your face” drums']] },
      ],
    },
    effect({
      id: 'compressor',
      title: 'compressor',
      sig: '.compressor("threshold:ratio:knee:attack:release")',
      lead: 'Even out the level.',
      simple: 'Automatically turns down the loudest moments so everything sits more evenly, making drums punchier and mixes more solid.',
      technical: 'A dynamics compressor (Web Audio DynamicsCompressor). **threshold** in dB (e.g. −20), **ratio** (e.g. 20 for 20:1), **knee** in dB, **attack** and **release** in seconds. Only the first values need to be given.',
      higher: 'A lower (more negative) threshold or higher ratio compresses more: flatter dynamics, more sustain, potentially pumping.',
      lower: 'Less compression; a threshold of 0 does almost nothing.',
      typical: '"-20:4:10:.01:.1" for punchy drums; "-30:20:6:.002:.05" for heavy squashing (follow with postgain).',
      listen: 'The waveform’s peaks shrink relative to the body; after postgain the whole thing is denser.',
      demo: ab('Compression plus make-up gain', KIT, '.compressor("-20:20:10:.002:.02").postgain(1.5)'),
      more: [ab('Long attack keeps the transient', KIT, '.compressor("-25:8:6:.03:.1").postgain(1.6)', 'A slower attack lets the first few milliseconds of each hit through before compressing: punchier drums.')],
    }),
    effect({
      id: 'transient',
      title: 'transient',
      sig: '.transient(amount)  or  .transient("attack:sustain")',
      lead: 'Sharpen or soften the attack.',
      simple: 'Makes drum hits snappier (more click at the start) or softer and rounder, without changing their volume overall.',
      technical: 'A transient shaper: it detects the onset of each sound and boosts (positive) or reduces (negative) the gain of the initial attack relative to the sustain portion, independently of level. A second value shapes the sustain part.',
      higher: 'Sharper, clickier attacks: drums cut through more.',
      lower: 'Negative values soften attacks: rounder, more distant.',
      typical: '0.3–1 for snappier drums; −0.5 to −1 for softer ones.',
      demo: ab('Snappier drums', 's("bd*4, ~ sd").bank("RolandTR909")', '.transient(1)'),
      more: [ab('Softer hats', 's("hh*16").bank("RolandTR909")', '.transient("-1:1")')],
    }),
    effect({
      id: 'duckorbit',
      title: 'duckorbit, sidechain ducking',
      sig: '.duckorbit(orbit)',
      aliases: '.duck(); several targets as "2:3"',
      lead: 'Make other parts dip when this one plays.',
      simple: 'Every time the kick hits, everything else briefly gets quieter and swells back, the breathing, pumping feel of house and EDM.',
      technical: 'Each event of this pattern triggers a gain reduction on the target orbit(s). In a studio this is a compressor whose detector (the sidechain) listens to the kick instead of the signal it compresses. Here it is a direct envelope: **duckdepth** sets how far the level drops, **duckonset** how fast it falls, **duckattack** how long it takes to recover.',
      higher: '-',
      lower: '-',
      typical: 'duckattack 0.1–0.3 (synced to the beat), duckdepth 0.6–1.',
      listen: 'In the with version the synth’s waveform has regular dips at every kick.',
      demo: pair('Sidechain pumping', `$: ${SYNTH}.orbit(2)\n$: s("bd:4!4").bank("RolandTR909")`, `$: ${SYNTH}.orbit(2)\n$: s("bd:4!4").bank("RolandTR909").duckorbit(2).duckattack(.2).duckdepth(1)`),
      more: [pair('Ducking two orbits, shallower', `$: ${SYNTH}.orbit(2)\n$: s("hh*16").orbit(3)\n$: s("bd:4!4").bank("RolandTR909")`, `$: ${SYNTH}.orbit(2)\n$: s("hh*16").orbit(3)\n$: s("bd:4!4").bank("RolandTR909").duckorbit("2:3").duckattack(.2).duckdepth("1:0.5")`)],
    }),
    effect({
      id: 'duckparams',
      title: 'duckdepth, duckonset, duckattack',
      sig: '.duckdepth(0–1) .duckonset(s) .duckattack(s)',
      aliases: '.duckons() .duckatt()',
      lead: 'The shape of the dip.',
      simple: 'How deep the dip is, how fast it drops and how fast the sound comes back.',
      technical: '**duckdepth** is the gain reduction (1 = full). **duckonset** is the time to reach the lowest level (very short to avoid clicks). **duckattack** is the recovery time, named after a compressor’s release; tie it to the tempo for a rhythmic pump.',
      higher: 'Deeper / slower dip / slower recovery.',
      lower: 'Shallower / faster.',
      typical: 'depth 0.7–1, onset 0.005–0.02, attack 0.1–0.3.',
      demo: ab('Changing the recovery time', `stack(${SYNTH}.orbit(2), s("bd:4!4").bank("RolandTR909").duckorbit(2).duckdepth(1))`, '.duckattack("<.05 .15 .3 .5>")'),
    }),
  ],
  sources: ['Giannoulis, D., Massberg, M. & Reiss, J. (2012). Digital dynamic range compressor design, a tutorial and analysis. J. Audio Eng. Soc. 60(6).', 'Strudel source, packages/core/controls.mjs (compressor, transient, duck), AGPL-3.0.'],
  related: ['music/strudel/fx-distortion', 'music/strudel/fx-volume-envelope'],
}

export default guide
