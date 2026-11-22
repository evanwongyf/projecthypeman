import { useSyncExternalStore } from 'react'

// Which archive guides this device has marked as read, by archive path
// ("teaching/theories/behaviourism"). Kept in localStorage: it is a convenience, so losing
// it (private mode, cleared storage) only resets the ticks.

// The Formula 1 shelf moved under Sports, so ticks and recents saved against its old
// address (f1/...) are carried over to the new one (sports/f1/...).
const moved = (path: string) => (path === 'f1' || path.startsWith('f1/') ? `sports/${path}` : path)

const KEY = 'studytubby:archive-read'
const listeners = new Set<() => void>()
let cache: Set<string> | null = null

function read(): Set<string> {
  if (cache) return cache
  try {
    const raw = localStorage.getItem(KEY)
    cache = new Set(raw ? (JSON.parse(raw) as string[]).map(moved) : [])
  } catch {
    cache = new Set()
  }
  return cache
}

function write(next: Set<string>) {
  cache = next
  try {
    localStorage.setItem(KEY, JSON.stringify([...next]))
  } catch {
    // storage unavailable; keep the in-memory copy for this session
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return
    cache = null
    listener()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function useReadGuides() {
  return useSyncExternalStore(subscribe, read, read)
}

export function setGuideRead(path: string, isRead: boolean) {
  const next = new Set(read())
  if (isRead) next.add(path)
  else next.delete(path)
  write(next)
}

// The last few guides opened on this device, newest first, for "continue reading".
const RECENT_KEY = 'studytubby:archive-recent'
const RECENT_MAX = 4
const recentListeners = new Set<() => void>()
let recentCache: string[] | null = null

function readRecent(): string[] {
  if (recentCache) return recentCache
  try {
    const raw = localStorage.getItem(RECENT_KEY)
    const parsed = raw ? (JSON.parse(raw) as unknown) : []
    recentCache = Array.isArray(parsed) ? parsed.filter((p): p is string => typeof p === 'string').map(moved) : []
  } catch {
    recentCache = []
  }
  return recentCache
}

function subscribeRecent(listener: () => void) {
  recentListeners.add(listener)
  return () => {
    recentListeners.delete(listener)
  }
}

export function useRecentGuides() {
  return useSyncExternalStore(subscribeRecent, readRecent, readRecent)
}

export function noteGuideOpened(path: string) {
  const next = [path, ...readRecent().filter((p) => p !== path)].slice(0, RECENT_MAX)
  recentCache = next
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(next))
  } catch {
    // not remembering recent guides is fine
  }
  recentListeners.forEach((l) => l())
}
