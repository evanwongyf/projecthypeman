/** Tiny 8-bit sound effects made with WebAudio, no files. Muting is remembered. */
const KEY = 'hypeman.lessons.mute'
let ctx: AudioContext | null = null
let muted = (() => {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
})()

export function isMuted() {
  return muted
}

export function setMuted(m: boolean) {
  muted = m
  try {
    localStorage.setItem(KEY, m ? '1' : '0')
  } catch {
    /* fine */
  }
}

function tone(freq: number, at: number, dur: number, type: OscillatorType = 'square', vol = 0.06) {
  if (muted) return
  try {
    ctx ??= new AudioContext()
    const t = ctx.currentTime + at
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g).connect(ctx.destination)
    o.start(t)
    o.stop(t + dur + 0.02)
  } catch {
    /* audio blocked: silent */
  }
}

export const sfx = {
  pick: () => tone(520, 0, 0.06),
  drop: () => tone(330, 0, 0.08),
  tap: (n = 0) => tone(440 + n * 40, 0, 0.09, 'square', 0.05),
  yes: () => {
    tone(660, 0, 0.1)
    tone(880, 0.09, 0.1)
    tone(1320, 0.18, 0.16)
  },
  no: () => {
    tone(220, 0, 0.12, 'sawtooth', 0.04)
    tone(165, 0.1, 0.16, 'sawtooth', 0.04)
  },
  flip: () => tone(740, 0, 0.05, 'triangle', 0.08),
  whoosh: () => {
    for (let i = 0; i < 6; i++) tone(300 + i * 90, i * 0.03, 0.05, 'triangle', 0.04)
  },
  win: () => [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.1, 0.14)),
  toot: () => {
    tone(392, 0, 0.18, 'square', 0.05)
    tone(392, 0.24, 0.3, 'square', 0.05)
  },
  blip: () => tone(980, 0, 0.04, 'square', 0.04),
}
