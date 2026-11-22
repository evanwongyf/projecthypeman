import { useSyncExternalStore } from 'react'

// How this viewer likes the exercise figure shown: skin tone, playback speed, and whether
// to light up the muscles worked. Kept in localStorage and shared by every player.

export type FitPrefs = { tone: number; speed: number; muscles: boolean }

const KEY = 'studytubby:fit-prefs'
const DEFAULTS: FitPrefs = { tone: 1, speed: 1, muscles: false }
const listeners = new Set<() => void>()
let cache: FitPrefs | null = null

function read(): FitPrefs {
  if (cache) return cache
  try {
    const raw = localStorage.getItem(KEY)
    cache = { ...DEFAULTS, ...(raw ? (JSON.parse(raw) as Partial<FitPrefs>) : {}) }
  } catch {
    cache = DEFAULTS
  }
  return cache
}

export function setFitPrefs(patch: Partial<FitPrefs>) {
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

export function useFitPrefs(): FitPrefs {
  return useSyncExternalStore(subscribe, read, () => DEFAULTS)
}
