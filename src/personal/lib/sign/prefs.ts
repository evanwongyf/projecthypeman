import { useSyncExternalStore } from 'react'

// How this viewer likes signs shown: the skin tone of the cartoon hands, whether to mirror
// everything for a left-handed signer, and playback speed. Kept in localStorage and shared
// by every player on the page, so changing it once changes them all.

export type SignPrefs = { tone: number; lefty: boolean; speed: number }

const KEY = 'studytubby:sign-prefs'
const DEFAULTS: SignPrefs = { tone: 1, lefty: false, speed: 1 }
const listeners = new Set<() => void>()
let cache: SignPrefs | null = null

function read(): SignPrefs {
  if (cache) return cache
  try {
    const raw = localStorage.getItem(KEY)
    cache = { ...DEFAULTS, ...(raw ? (JSON.parse(raw) as Partial<SignPrefs>) : {}) }
  } catch {
    cache = DEFAULTS
  }
  return cache
}

export function setSignPrefs(patch: Partial<SignPrefs>) {
  cache = { ...read(), ...patch }
  try {
    localStorage.setItem(KEY, JSON.stringify(cache))
  } catch {
    // storage unavailable; keep the in-memory copy for this session
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useSignPrefs(): SignPrefs {
  return useSyncExternalStore(subscribe, read, () => DEFAULTS)
}
