import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { prepareImage } from './cards'
import type { CardDraft, Deck, Flashcard, Module, PathCategory, StudyPath, StudySession } from './types'

const CACHE_KEY = 'studytubby:cache:v2'

type CacheShape = {
  sessions: StudySession[]
  decks: Deck[]
  cards: Flashcard[]
  paths: StudyPath[]
  modules: Module[]
}

function readCache(): CacheShape | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? (JSON.parse(raw) as CacheShape) : null
  } catch {
    return null
  }
}

function writeCache(data: CacheShape) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch {
    // storage full or unavailable, the cache is a convenience, safe to skip
  }
}

export function clearStudyDataCache() {
  try {
    localStorage.removeItem(CACHE_KEY)
  } catch {
    // nothing to clear
  }
}

type AddResult = { ok: boolean; error?: string }

export type AddPathParams = {
  category: PathCategory
  level?: string
  courseName?: string
  school?: string
  startDate?: string
  endDate?: string
  interestName?: string
  interestCategory?: string
}

export type UpdatePathParams = Partial<{
  level: string
  courseName: string
  school: string
  startDate: string
  endDate: string
  interestName: string
  interestCategory: string
}>

export type AddModuleParams = {
  pathId: string
  name: string
  code?: string
  credits: number
  semester: string
  description?: string
}

export type UpdateModuleParams = Partial<{
  name: string
  code: string
  credits: number
  semester: string
  description: string
}>

export type CardResult = { ok: true } | { ok: false; error: string }

type StudyDataValue = CacheShape & {
  // there is something to show (possibly from the local cache)
  ready: boolean
  // the server has confirmed it, so "not found" is now true rather than a stale cache
  synced: boolean
  refresh: () => Promise<void>
  addSession: (moduleId: string, minutes: number, note?: string) => Promise<void>
  deleteSession: (id: string) => Promise<void>
  addDeck: (name: string, moduleId?: string) => Promise<void>
  deleteDeck: (id: string) => Promise<void>
  // `index` = position within the deck (0 = before the first card); omit to append.
  addCard: (deckId: string, draft: CardDraft, index?: number) => Promise<CardResult>
  updateCard: (id: string, draft: CardDraft) => Promise<CardResult>
  uploadCardImage: (file: File) => Promise<{ key: string; previewUrl: string }>
  deleteCard: (id: string) => Promise<void>
  addPath: (params: AddPathParams) => Promise<AddResult>
  updatePath: (id: string, params: UpdatePathParams) => Promise<void>
  deletePath: (id: string) => Promise<void>
  addModule: (params: AddModuleParams) => Promise<AddResult>
  updateModule: (id: string, params: UpdateModuleParams) => Promise<void>
  deleteModule: (id: string) => Promise<void>
}

const StudyDataContext = createContext<StudyDataValue | null>(null)

function initialState(): CacheShape & { ready: boolean; synced: boolean } {
  const cached = readCache()
  return {
    sessions: cached?.sessions ?? [],
    decks: cached?.decks ?? [],
    cards: cached?.cards ?? [],
    paths: cached?.paths ?? [],
    modules: cached?.modules ?? [],
    ready: !!cached,
    synced: false,
  }
}

export function StudyDataProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState(initialState)
  const { sessions, decks, cards, paths, modules, ready, synced } = store
  const latest = useRef(0)

  // Reloads everything. A failed or malformed reply never replaces what is on screen, and a
  // slow reply can't overwrite a newer one, so pages don't flicker into "not found".
  const refresh = useCallback(async () => {
    const ticket = ++latest.current
    const get = async (url: string) => {
      const r = await fetch(url)
      if (!r.ok) throw new Error(`${url} ${r.status}`)
      return r.json()
    }
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const [sessionsRes, decksRes, pathsRes] = await Promise.all([get('/api/study-sessions'), get('/api/decks'), get('/api/study-paths')])
        if (!Array.isArray(sessionsRes) || !Array.isArray(decksRes?.decks) || !Array.isArray(decksRes?.cards) || !Array.isArray(pathsRes?.paths) || !Array.isArray(pathsRes?.modules)) {
          throw new Error('unexpected reply')
        }
        if (ticket !== latest.current) return // a newer refresh is on its way
        const next: CacheShape = { sessions: sessionsRes, decks: decksRes.decks, cards: decksRes.cards, paths: pathsRes.paths, modules: pathsRes.modules }
        setStore({ ...next, ready: true, synced: true })
        writeCache(next)
        return
      } catch {
        if (attempt === 0) await new Promise((r) => setTimeout(r, 1200))
      }
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const addSession = useCallback(
    async (moduleId: string, minutes: number, note?: string) => {
      await fetch('/api/study-sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleId, minutes, note }),
      })
      await refresh()
    },
    [refresh],
  )

  const deleteSession = useCallback(
    async (id: string) => {
      await fetch(`/api/study-sessions/${id}`, { method: 'DELETE' })
      await refresh()
    },
    [refresh],
  )

  const addDeck = useCallback(
    async (name: string, moduleId?: string) => {
      await fetch('/api/decks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, moduleId }),
      })
      await refresh()
    },
    [refresh],
  )

  const deleteDeck = useCallback(
    async (id: string) => {
      await fetch(`/api/decks/${id}`, { method: 'DELETE' })
      await refresh()
    },
    [refresh],
  )

  const addCard = useCallback(
    async (deckId: string, draft: CardDraft, index?: number): Promise<CardResult> => {
      const res = await fetch('/api/flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...draft, deckId, index }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        return { ok: false, error: body.error ?? "Couldn't save the card." }
      }
      await refresh()
      return { ok: true }
    },
    [refresh],
  )

  const updateCard = useCallback(
    async (id: string, draft: CardDraft): Promise<CardResult> => {
      const res = await fetch(`/api/flashcards/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        return { ok: false, error: body.error ?? "Couldn't save the card." }
      }
      await refresh()
      return { ok: true }
    },
    [refresh],
  )

  // Downscales the image, uploads it straight to storage and returns its key
  // (to save on the card) plus a local URL to preview it with until then.
  const uploadCardImage = useCallback(async (file: File) => {
    const { blob, mimeType } = await prepareImage(file)
    const res = await fetch('/api/card-images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mimeType, size: blob.size }),
    })
    const created = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(created.error ?? "Couldn't upload that image.")
    const put = await fetch(created.uploadUrl, { method: 'PUT', headers: { 'Content-Type': mimeType }, body: blob })
    if (!put.ok) throw new Error("Couldn't upload that image.")
    return { key: created.key as string, previewUrl: URL.createObjectURL(blob) }
  }, [])

  const deleteCard = useCallback(
    async (id: string) => {
      await fetch(`/api/flashcards/${id}`, { method: 'DELETE' })
      await refresh()
    },
    [refresh],
  )

  const addPath = useCallback(
    async (params: AddPathParams): Promise<AddResult> => {
      const res = await fetch('/api/study-paths', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        return { ok: false, error: body.error ?? 'Something went wrong.' }
      }
      await refresh()
      return { ok: true }
    },
    [refresh],
  )

  const updatePath = useCallback(
    async (id: string, params: UpdatePathParams) => {
      await fetch(`/api/study-paths/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
      await refresh()
    },
    [refresh],
  )

  const deletePath = useCallback(
    async (id: string) => {
      await fetch(`/api/study-paths/${id}`, { method: 'DELETE' })
      await refresh()
    },
    [refresh],
  )

  const addModule = useCallback(
    async (params: AddModuleParams): Promise<AddResult> => {
      const res = await fetch('/api/modules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        return { ok: false, error: body.error ?? 'Something went wrong.' }
      }
      await refresh()
      return { ok: true }
    },
    [refresh],
  )

  const updateModule = useCallback(
    async (id: string, params: UpdateModuleParams) => {
      await fetch(`/api/modules/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
      await refresh()
    },
    [refresh],
  )

  const deleteModule = useCallback(
    async (id: string) => {
      await fetch(`/api/modules/${id}`, { method: 'DELETE' })
      await refresh()
    },
    [refresh],
  )

  const value = useMemo<StudyDataValue>(
    () => ({
      sessions,
      decks,
      cards,
      paths,
      modules,
      ready,
      synced,
      refresh,
      addSession,
      deleteSession,
      addDeck,
      deleteDeck,
      addCard,
      updateCard,
      uploadCardImage,
      deleteCard,
      addPath,
      updatePath,
      deletePath,
      addModule,
      updateModule,
      deleteModule,
    }),
    [
      sessions,
      decks,
      cards,
      paths,
      modules,
      ready,
      synced,
      refresh,
      addSession,
      deleteSession,
      addDeck,
      deleteDeck,
      addCard,
      updateCard,
      uploadCardImage,
      deleteCard,
      addPath,
      updatePath,
      deletePath,
      addModule,
      updateModule,
      deleteModule,
    ],
  )

  return <StudyDataContext.Provider value={value}>{children}</StudyDataContext.Provider>
}

export function useStudyData() {
  const ctx = useContext(StudyDataContext)
  if (!ctx) throw new Error('useStudyData must be used within a StudyDataProvider')
  return ctx
}
