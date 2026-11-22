/* eslint-disable @typescript-eslint/no-explicit-any */
// Strudel (https://strudel.cc, AGPL-3.0) live-coding engine, loaded on demand. One shared setup,
// the evaluation scope, synths, soundfonts and sample banks, serves both the runner's editor
// and the guide's play-with/play-without demos. Sample banks mirror the official REPL's prebake
// (Dirt-Samples, the tidal drum machines, the Salamander piano, VCSL), so songs written for
// strudel.cc find the sounds they expect; the audio itself streams from GitHub on first use.

export type StrudelMods = {
  core: any
  mini: any
  tonal: any
  transpiler: any
  webaudio: any
  draw: any
}

let loading: Promise<StrudelMods> | null = null
let audioReady: Promise<unknown> | null = null
let soundsReady: Promise<unknown> | null = null
let webaudioMod: any = null

export function loadStrudel(): Promise<StrudelMods> {
  loading ??= (async () => {
    const [core, mini, tonal, transpiler, webaudio, draw, soundfonts] = await Promise.all([
      import('@strudel/core'),
      import('@strudel/mini'),
      import('@strudel/tonal'),
      import('@strudel/transpiler'),
      import('@strudel/webaudio'),
      import('@strudel/draw'),
      import('@strudel/soundfonts'),
    ])
    webaudioMod = webaudio
    // Browsers keep audio suspended until the page is interacted with. Strudel's own helper only
    // unlocks on a click that happens after it has loaded, which would leave the click that
    // loaded it unheard, so unlock on every play (see unlockAudio) and on any later interaction.
    audioReady = webaudio.initAudio()
    for (const ev of ['pointerdown', 'keydown']) document.addEventListener(ev, unlockAudio, { passive: true })
    installSongHelpers(core)
    await core.evalScope(core, mini, tonal, webaudio, draw, soundfonts, {
      // The official REPL's editor turns slider(...) into a draggable widget; without that
      // editor (the guide's demos) it is simply its starting value. The runner replaces these
      // with the real widgets.
      slider: (value: number) => core.pure(value),
      sliderWithID: (_id: string, value: number) => core.pure(value),
      // Songs often load the official site's sample maps by URL; serve the copies shipped here.
      samples: (map: unknown, ...rest: unknown[]) => webaudio.samples(localMap(map), ...rest),
      aliasBank: (map: unknown, ...rest: unknown[]) => webaudio.aliasBank(localMap(map), ...rest),
      // Editor-appearance settings on the official site (.theme("bluescreen")…); here they
      // leave the pattern unchanged.
      theme: core.register('theme', (_v: unknown, pat: unknown) => pat),
      fontFamily: core.register('fontFamily', (_v: unknown, pat: unknown) => pat),
      fontSize: core.register('fontSize', (_v: unknown, pat: unknown) => pat),
    })
    soundsReady = prebake(core, webaudio, soundfonts)
    return { core, mini, tonal, transpiler, webaudio, draw }
  })()
  return loading
}

// Call from a click or key handler (before any await) so browsers that need a fresh gesture
// (Safari) let the audio start.
export function unlockAudio() {
  const ctx = webaudioMod?.getAudioContext()
  if (ctx && ctx.state !== 'running') ctx.resume().catch(() => {})
}

// Resolves once the audio engine is initialised and the sample maps are registered. Individual
// sounds still download the first time they play.
export async function whenReady() {
  await loadStrudel()
  await Promise.all([audioReady, soundsReady])
}

const SAMPLE_BASE = '/strudel'
const LOCAL_MAPS = ['piano.json', 'vcsl.json', 'tidal-drum-machines.json', 'tidal-drum-machines-alias.json', 'EmuSP12.json', 'mridangam.json']

function localMap(map: unknown) {
  if (typeof map !== 'string') return map
  const m = map.match(/^https?:\/\/(?:www\.)?strudel\.cc\/([\w.-]+\.json)$/)
  return m && LOCAL_MAPS.includes(m[1]) ? `${SAMPLE_BASE}/${m[1]}` : map
}

// Helper code a song expects to have run first (for example a repo's own prebake file). It is
// plain JavaScript that registers functions, so it runs as-is rather than through the
// transpiler, which would read its double-quoted strings as mini-notation.
export async function runPrelude(code: string) {
  await loadStrudel()
  new Function(code)()
}

function prebake(core: any, webaudio: any, soundfonts: any) {
  const { samples, registerSynthSounds, registerZZFXSounds, aliasBank } = webaudio
  return Promise.all([
    registerSynthSounds(),
    registerZZFXSounds(),
    soundfonts.registerSoundfonts(),
    // Salamander Grand Piano V3 by Alexander Holm, CC BY 3.0.
    samples(`${SAMPLE_BASE}/piano.json`, undefined, { prebake: true }),
    // VCSL (Versilian Community Sample Library), CC0.
    samples(`${SAMPLE_BASE}/vcsl.json`, 'github:sgossner/VCSL/master/', { prebake: true }),
    samples(`${SAMPLE_BASE}/tidal-drum-machines.json`, 'github:ritchse/tidal-drum-machines/main/machines/', { prebake: true, tag: 'drum-machines' }),
    samples(`${SAMPLE_BASE}/EmuSP12.json`, undefined, { prebake: true, tag: 'drum-machines' }),
    samples(`${SAMPLE_BASE}/mridangam.json`, undefined, { prebake: true, tag: 'drum-machines' }),
    // The full Dirt-Samples set (bd, sd, hh, cp, arpy, casio...), the TidalCycles classics.
    samples('github:tidalcycles/dirt-samples', undefined, { prebake: true }),
  ])
    .then(() => {
      // Strudel's drum-pattern library (from lvm/tidal-drum-patterns) names a cymbal "cy", a
      // shaker "sh" and accents "ac", none of which are in Dirt-Samples: point the first two at
      // real samples and let accent markers pass silently.
      samples({ cy: ['808cy/CY0010.WAV', '808cy/CY0050.WAV', '808cy/CY2510.WAV'] }, 'github:tidalcycles/dirt-samples', { prebake: true })
      samples({ sh: ['Idiophones/Struck%20Idiophones/Shaker%2C%20Small/Mid_ShakerDouble_Down_rr1.wav', 'Idiophones/Struck%20Idiophones/Shaker%2C%20Small/Mid_ShakerDouble_Up_rr1.wav'] }, 'github:sgossner/VCSL/master/', { prebake: true })
      webaudio.registerSound('ac', () => undefined)
      return aliasBank(`${SAMPLE_BASE}/tidal-drum-machines-alias.json`)
    })
    .catch((err: unknown) => core.logger?.(`[strudel] some sounds failed to load: ${String(err)}`))
}

// `.piano()` comes from the official site rather than a package; many published songs use it.
function installSongHelpers(core: any) {
  const { Pattern, noteToMidi, valueToMidi } = core
  // Inline visuals (._pianoroll(), ._scope()...) are editor widgets. The runner's editor provides
  // them; elsewhere they quietly pass the pattern through so songs that use them still play.
  for (const w of ['_pianoroll', '_punchcard', '_spiral', '_scope', '_pitchwheel', '_spectrum']) {
    if (!Pattern.prototype[w]) Pattern.prototype[w] = function () {
      return this
    }
  }
  if (Pattern.prototype.piano) return
  const maxPan = noteToMidi('C8')
  const panwidth = (pan: number, width: number) => pan * width + (1 - width) / 2
  Pattern.prototype.piano = function () {
    return this.fmap((v: any) => ({ ...v, clip: v.clip ?? 1 }))
      .s('piano')
      .release(0.1)
      .fmap((value: any) => {
        const midi = valueToMidi(value)
        const pan = panwidth(Math.min(Math.round(midi) / maxPan, 1), 0.5)
        return { ...value, pan: (value.pan || 1) * pan }
      })
  }
}

// A headless player (no editor) for short demos: evaluating new code replaces whatever this
// player was playing, and starting it stops the runner's editor via the shared 'start-repl' event.
let demoRepl: any = null
const demoListeners = new Set<(playingId: string | null) => void>()
let demoPlaying: string | null = null

function setDemoPlaying(id: string | null) {
  demoPlaying = id
  demoListeners.forEach((fn) => fn(id))
}

export function onDemoChange(fn: (playingId: string | null) => void) {
  demoListeners.add(fn)
  return () => {
    demoListeners.delete(fn)
  }
}

export function currentDemo() {
  return demoPlaying
}

export async function playDemo(id: string, code: string): Promise<string | null> {
  const mods = await loadStrudel()
  if (!demoRepl) {
    let lastError: string | null = null
    demoRepl = mods.webaudio.webaudioRepl({
      transpiler: mods.transpiler.transpiler,
      onEvalError: (err: Error) => {
        lastError = err?.message ?? String(err)
      },
      onToggle: (started: boolean) => {
        if (!started) setDemoPlaying(null)
      },
    })
    demoRepl.getLastError = () => {
      const e = lastError
      lastError = null
      return e
    }
    document.addEventListener('start-repl', (e) => {
      if ((e as CustomEvent).detail !== 'demo') demoRepl?.stop()
    })
  }
  await whenReady()
  unlockAudio()
  document.dispatchEvent(new CustomEvent('start-repl', { detail: 'demo' }))
  await demoRepl.evaluate(code)
  const err = demoRepl.getLastError()
  if (err) {
    setDemoPlaying(null)
    return err
  }
  setDemoPlaying(id)
  return null
}

export function stopDemo() {
  demoRepl?.stop()
  setDemoPlaying(null)
}
