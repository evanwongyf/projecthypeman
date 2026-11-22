// Waveform and spectrum data for the guide demos. Each demo's audio was rendered offline with
// the same engine and analysed (see the build notes in public/strudel/waves); the data is keyed
// by a hash of the demo's code, sharded by its first hex digit.

export type WaveData = {
  dur: number
  peak: number
  rms: number
  lo: number[]
  hi: number[]
  zt: number
  zoom: number[]
  spec: number[]
}

// FNV-1a over the UTF-8 bytes, plus the byte length in base 36.
export function waveKey(code: string): string {
  const bytes = new TextEncoder().encode(code)
  let h = 0x811c9dc5
  for (const b of bytes) {
    h ^= b
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return `${h.toString(16).padStart(8, '0')}-${bytes.length.toString(36)}`
}

const shards = new Map<string, Promise<Record<string, WaveData>>>()

export async function loadWave(code: string): Promise<WaveData | null> {
  const key = waveKey(code)
  const shard = key[0]
  if (!shards.has(shard)) shards.set(shard, fetch(`/strudel/waves/${shard}.json`).then((r) => (r.ok ? r.json() : {})).catch(() => ({})))
  return (await shards.get(shard)!)[key] ?? null
}

// The spectrum is 96 log-spaced bands from 30 Hz to 11 kHz.
export const SPEC_LO = 30
export const SPEC_HI = 11000
export const ZOOM_MS = (1024 / 22050) * 1000
