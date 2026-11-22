import type { ArchiveNode } from '../topics'

// Music: live-coding music with Strudel, from the first drum beat to every audio effect, each
// effect demonstrated by playing the same phrase without it and with it. The guides' code runs in
// the browser; the Strudel runner in the Relax area is where to keep playing with it.

export const MUSIC: ArchiveNode = {
  slug: 'music',
  title: 'Music & live coding',
  blurb: 'Make music with code using Strudel: patterns, mini-notation, notes and chords, and every audio effect, each demonstrated with a short phrase you can play with and without it.',
  glyph: '♪',
  color: 'color-mix(in srgb, var(--lavender) 70%, var(--pink))',
  tags: ['music', 'strudel', 'live coding', 'tidalcycles', 'algorave', 'synth', 'effects', 'sound design', 'drums', 'beat'],
  children: [
    {
      slug: 'strudel',
      title: 'Strudel',
      blurb: 'Live-code music in the browser: the basics, mini-notation, harmony, all the audio effects (filters, envelopes, delay, reverb, distortion, modulation, FM, sidechain…) and the pattern tricks that turn a loop into a song.',
      glyph: '🎛️',
      tags: ['strudel', 'tidal', 'pattern', 'mini-notation', 'effects', 'audio'],
      children: [
        { slug: 'start-here', title: 'Start here: what Strudel is and how these demos work', blurb: 'Cycles, patterns and the play-with / play-without demos used through this shelf, plus where the runner and song library are.', minutes: 6, tags: ['beginner', 'cycle', 'overview'] },
        { slug: 'first-sounds', title: 'First sounds: samples, synths and layers', blurb: 'Playing drum samples and drum machines, synth waveforms, sample numbers, tempo, and stacking several parts with $:.', minutes: 10, tags: ['s', 'sound', 'bank', 'synth', 'stack', 'tempo', 'setcpm'] },
        { slug: 'mini-notation', title: 'Mini-notation: rhythm in a string', blurb: 'Sequences, rests, subdivision, alternation, chords, speed-ups, elongation, randomness and Euclidean rhythms, the little language inside the quotes.', minutes: 12, tags: ['mini-notation', 'rhythm', 'euclidean', 'polymeter'] },
        { slug: 'notes-scales-chords', title: 'Notes, scales and chords', blurb: 'Note names and numbers, scale degrees, chord symbols and voicings, arpeggios, transposition and basslines from chord roots.', minutes: 11, tags: ['note', 'scale', 'chord', 'voicing', 'arp', 'harmony'] },
        { slug: 'sound-theory', title: 'Sound theory: waves, harmonics, decibels', blurb: 'Frequency and pitch, harmonics and the four basic waves, amplitude and decibels, envelopes, sample rate and bit depth, echoes and stereo, with real waveform and spectrum pictures of every sound.', minutes: 14, tags: ['frequency', 'harmonics', 'timbre', 'decibel', 'spectrum', 'waveform', 'envelope', 'nyquist'] },
        { slug: 'fx-volume-envelope', title: 'Effects: volume and envelopes', blurb: 'gain, velocity, postgain and amp; attack, decay, sustain, release and adsr; clip and duration, each explained plainly and technically, with waveforms with and without.', minutes: 14, tags: ['gain', 'velocity', 'postgain', 'attack', 'decay', 'sustain', 'release', 'adsr', 'clip', 'legato'] },
        { slug: 'fx-filters', title: 'Effects: filters', blurb: 'How filters work, then low-pass, resonance, high-pass, band-pass, filter types, drive, the DJ filter and vowel formants, with spectra before and after.', minutes: 16, tags: ['lpf', 'hpf', 'bpf', 'resonance', 'cutoff', 'ftype', 'ladder', 'drive', 'djf', 'vowel', 'formant'] },
        { slug: 'fx-filter-modulation', title: 'Effects: filter envelopes and LFOs', blurb: 'Filter envelopes (lpenv and its stages, fanchor, hpenv, bpenv) and filter LFOs (lprate, lpsync, depth, shape) for sweeps, plucks and wobbles.', minutes: 12, tags: ['lpenv', 'filter envelope', 'lfo', 'lprate', 'lpsync', 'wobble', 'fanchor'] },
        { slug: 'fx-delay', title: 'Effects: delay and echo', blurb: 'How feedback delay works (with the maths of decaying echoes), then delay level, time, sync, feedback and tape speed, plus ping-pong, dub throws and echo().', minutes: 13, tags: ['delay', 'echo', 'delaytime', 'delayfeedback', 'delaysync', 'ping-pong', 'dub'] },
        { slug: 'fx-reverb', title: 'Effects: reverb', blurb: 'Early reflections, RT60 and Sabine’s formula, then room, size, fade, damping, convolution with impulse responses and dry/wet techniques.', minutes: 12, tags: ['reverb', 'room', 'roomsize', 'roomfade', 'convolution', 'impulse response', 'rt60'] },
        { slug: 'fx-stereo', title: 'Effects: stereo and orbits', blurb: 'How we hear direction, equal-power panning, pan, jux and juxBy, and orbits as effect buses.', minutes: 8, tags: ['pan', 'jux', 'stereo', 'orbit', 'pan law'] },
        { slug: 'fx-modulation', title: 'Effects: tremolo, vibrato, chorus, phaser, Leslie', blurb: 'LFOs on volume, pitch, delay time and phase: tremolo (and trance gates), vibrato, chorus, phaser and the rotating Leslie speaker.', minutes: 14, tags: ['tremolo', 'vibrato', 'chorus', 'phaser', 'leslie', 'trance gate'] },
        { slug: 'fx-distortion', title: 'Effects: distortion and lo-fi', blurb: 'Why nonlinear effects create new harmonics, then distort and its six curve types, shape, bit crushing, sample-rate reduction and aliasing, and squiz.', minutes: 13, tags: ['distort', 'distortion', 'waveshaper', 'crush', 'bitcrush', 'coarse', 'aliasing', 'shape', 'squiz'] },
        { slug: 'fx-dynamics', title: 'Effects: compression, transients and sidechain', blurb: 'The compressor’s threshold, ratio, knee, attack and release, transient shaping, and sidechain ducking for pumping dance mixes.', minutes: 12, tags: ['compressor', 'compression', 'transient', 'sidechain', 'duck', 'pumping'] },
        { slug: 'fx-synthesis', title: 'Effects: synthesis controls', blurb: 'Pitch envelopes and how to build a kick, FM synthesis (index, ratio, envelopes, Bessel sidebands), pulse-width modulation, supersaw unison and noise.', minutes: 15, tags: ['pitch envelope', 'kick', 'fm', 'fm synthesis', 'pulse width', 'pwm', 'supersaw', 'unison', 'detune', 'noise'] },
        { slug: 'fx-samples', title: 'Effects: sampler, chopping and stretching', blurb: 'Playback speed and pitch, accelerate, begin and end, looping, choke groups, fit and loopAt, and the breakbeat tools chop, striate, slice, splice and scrub.', minutes: 13, tags: ['speed', 'accelerate', 'begin', 'end', 'loop', 'cut', 'fit', 'loopAt', 'chop', 'slice', 'splice', 'scrub', 'breakbeat'] },
        { slug: 'pattern-transformations', title: 'Pattern transformations: making loops evolve', blurb: 'fast and slow, rev, ply, off and superimpose, echo, every, sometimes and degrade, struct and mask, iter and chunk, swing and nudging, and continuous signals like sine and perlin.', minutes: 15, tags: ['fast', 'slow', 'rev', 'every', 'sometimes', 'off', 'jux', 'swing', 'signals', 'sine', 'perlin'] },
        { slug: 'song-structure', title: 'From loop to song: arrangement', blurb: 'Tempo, muting and soloing parts, arrange and pick for sections, builds and drops with mask, and a whole short track assembled step by step.', minutes: 12, tags: ['arrange', 'pick', 'structure', 'mute', 'solo', 'build', 'drop'] },
        { slug: 'effects-reference', title: 'Effect and function reference', blurb: 'Every audio effect and the main pattern functions in one table: what it does, its short names, and a typical value.', minutes: 8, tags: ['reference', 'cheat sheet', 'controls', 'parameters'] },
      ],
    },
  ],
}
