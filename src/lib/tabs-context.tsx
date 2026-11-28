import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PROFILE_MODES, useProfile, type ProfileMode } from './profile-context'
import { clearTabDrafts } from './drafts'

/**
 * Browser-style tabs, one set per mode.
 *
 * The address bar always shows the active tab. Clicking a link navigates the
 * active tab, like a browser. Every tab that has been opened this session
 * stays mounted (hidden when not in front), so a half-filled form, an open
 * dialog or a scroll position survives switching tabs or modes. The tab list
 * itself is saved, so a reload or a later visit lands back where you were.
 */
export type Tab = { id: string; path: string }
type ModeTabs = { tabs: Tab[]; activeId: string | null }
export type TabsState = Record<ProfileMode, ModeTabs>

const STORAGE_KEY = 'hypeman.tabs.v1'
const MAX_TABS = 12

const MODES = PROFILE_MODES.map((m) => m.id)
const homeOf = (mode: ProfileMode) => PROFILE_MODES.find((m) => m.id === mode)?.home ?? '/students'

/** Which mode a page belongs to; null for pages every mode shares. */
export function modeForPath(pathname: string): ProfileMode | null {
  if (pathname.startsWith('/running')) return 'running'
  if (pathname.startsWith('/personal')) return 'personal'
  if (pathname.startsWith('/settings') || pathname === '/') return null
  return 'teaching'
}

function newId(): string {
  return Math.random().toString(36).slice(2, 10)
}

function empty(): TabsState {
  return Object.fromEntries(MODES.map((m) => [m, { tabs: [], activeId: null }])) as unknown as TabsState
}

function load(): TabsState {
  const state = empty()
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as Partial<TabsState> | null
    for (const m of MODES) {
      const saved = raw?.[m]
      if (!saved || !Array.isArray(saved.tabs)) continue
      const tabs = saved.tabs.filter((t): t is Tab => typeof t?.id === 'string' && typeof t?.path === 'string' && t.path.startsWith('/')).slice(0, MAX_TABS)
      state[m] = { tabs, activeId: tabs.some((t) => t.id === saved.activeId) ? saved.activeId! : (tabs[0]?.id ?? null) }
    }
  } catch {
    /* corrupt or blocked storage: start fresh */
  }
  return state
}

type TabsContextValue = {
  state: TabsState
  mode: ProfileMode
  activeTab: Tab | null
  /** Tabs mounted this session; others mount when first shown. */
  mounted: Set<string>
  activate: (id: string) => void
  close: (id: string) => void
  /** Open a page in a new tab of the current mode (or the mode's home). */
  open: (path?: string) => void
  switchMode: (mode: ProfileMode) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

export function TabsProvider({ children }: { children: ReactNode }) {
  const { mode, setMode } = useProfile()
  const location = useLocation()
  const navigate = useNavigate()
  const here = location.pathname + location.search

  const [state, setState] = useState<TabsState>(load)
  const stateRef = useRef(state)
  stateRef.current = state
  const modeRef = useRef(mode)
  modeRef.current = mode

  const [mounted, setMounted] = useState<Set<string>>(() => new Set())
  /** Set while we navigate to a tab's page, so the location sync doesn't treat it as in-tab navigation. */
  const pending = useRef<string | null>(null)
  const scroll = useRef(new Map<string, number>())

  const commit = useCallback((next: TabsState) => {
    stateRef.current = next
    setState(next)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* the tabs still work for this visit */
    }
  }, [state])

  const activeOf = (s: TabsState, m: ProfileMode) => s[m].tabs.find((t) => t.id === s[m].activeId) ?? null

  const rememberScroll = useCallback(() => {
    const t = activeOf(stateRef.current, modeRef.current)
    if (t) scroll.current.set(t.id, window.scrollY)
  }, [])

  /** Bring a tab to the front: set it active, switch mode if needed, and show its page. */
  const show = useCallback(
    (m: ProfileMode, tab: Tab, next: TabsState) => {
      rememberScroll()
      commit({ ...next, [m]: { ...next[m], activeId: tab.id } })
      if (m !== modeRef.current) {
        modeRef.current = m
        setMode(m)
      }
      const current = window.location.pathname + window.location.search
      if (current !== tab.path) {
        pending.current = tab.path
        navigate(tab.path)
      }
    },
    [commit, navigate, rememberScroll, setMode]
  )

  const addTab = useCallback(
    (m: ProfileMode, path: string, base = stateRef.current): { tab: Tab; next: TabsState } => {
      const tab = { id: newId(), path }
      let tabs = [...base[m].tabs]
      const at = tabs.findIndex((t) => t.id === base[m].activeId)
      tabs.splice(at >= 0 ? at + 1 : tabs.length, 0, tab)
      // Past the cap, drop the oldest tab that isn't in front.
      if (tabs.length > MAX_TABS) {
        const drop = tabs.findIndex((x) => x.id !== tab.id && x.id !== base[m].activeId)
        tabs = tabs.filter((_, i) => i !== drop)
      }
      return { tab, next: { ...base, [m]: { tabs, activeId: base[m].activeId } } }
    },
    []
  )

  // Keep the active tab in step with the address bar: links, back/forward, typed URLs.
  useEffect(() => {
    if (pending.current) {
      if (here === pending.current) pending.current = null
      return
    }
    const s = stateRef.current
    const m = modeRef.current

    if (location.pathname === '/') {
      const t = activeOf(s, m)
      if (t) {
        pending.current = t.path
        navigate(t.path, { replace: true })
      } else {
        const { tab, next } = addTab(m, homeOf(m))
        commit({ ...next, [m]: { ...next[m], activeId: tab.id } })
        pending.current = tab.path
        navigate(tab.path, { replace: true })
      }
      return
    }

    // A page that belongs to another mode moves you to that mode, as its own tab.
    const target = modeForPath(location.pathname) ?? m
    if (target !== m) {
      const existing = s[target].tabs.find((t) => t.path === here)
      if (existing) {
        commit({ ...s, [target]: { ...s[target], activeId: existing.id } })
      } else {
        const { tab, next } = addTab(target, here)
        commit({ ...next, [target]: { ...next[target], activeId: tab.id } })
      }
      modeRef.current = target
      setMode(target)
      return
    }

    const active = activeOf(s, m)
    if (!active) {
      const { tab, next } = addTab(m, here)
      commit({ ...next, [m]: { ...next[m], activeId: tab.id } })
    } else if (active.path !== here) {
      commit({ ...s, [m]: { ...s[m], tabs: s[m].tabs.map((t) => (t.id === active.id ? { ...t, path: here } : t)) } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [here])

  const activeTab = activeOf(state, mode)

  // Mount the tab in front (it then stays mounted), and put its scroll back.
  useLayoutEffect(() => {
    if (!activeTab) return
    setMounted((prev) => (prev.has(activeTab.id) ? prev : new Set(prev).add(activeTab.id)))
    const y = scroll.current.get(activeTab.id) ?? 0
    requestAnimationFrame(() => window.scrollTo(0, y))
  }, [activeTab?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const activate = useCallback(
    (id: string) => {
      const s = stateRef.current
      const m = modeRef.current
      const tab = s[m].tabs.find((t) => t.id === id)
      if (tab && tab.id !== s[m].activeId) show(m, tab, s)
    },
    [show]
  )

  const open = useCallback(
    (path?: string) => {
      const m = modeRef.current
      const { tab, next } = addTab(m, path ?? homeOf(m))
      show(m, tab, next)
    },
    [addTab, show]
  )

  const close = useCallback(
    (id: string) => {
      const s = stateRef.current
      const m = modeRef.current
      const tabs = s[m].tabs
      const i = tabs.findIndex((t) => t.id === id)
      if (i < 0) return
      clearTabDrafts(id)
      scroll.current.delete(id)
      setMounted((prev) => {
        const n = new Set(prev)
        n.delete(id)
        return n
      })
      const rest = tabs.filter((t) => t.id !== id)
      const next: TabsState = { ...s, [m]: { tabs: rest, activeId: s[m].activeId === id ? null : s[m].activeId } }
      if (s[m].activeId !== id) {
        commit(next)
        return
      }
      // Closing the tab in front: show its right-hand neighbour, else the left, else a fresh home tab.
      const neighbour = rest[i] ?? rest[i - 1]
      if (neighbour) show(m, neighbour, next)
      else {
        const added = addTab(m, homeOf(m), next)
        show(m, added.tab, added.next)
      }
    },
    [addTab, commit, show]
  )

  const switchMode = useCallback(
    (target: ProfileMode) => {
      if (target === modeRef.current) return
      const s = stateRef.current
      const existing = activeOf(s, target) ?? s[target].tabs[0]
      if (existing) show(target, existing, s)
      else {
        const { tab, next } = addTab(target, homeOf(target))
        show(target, tab, next)
      }
    },
    [addTab, show]
  )

  const value = useMemo(
    () => ({ state, mode, activeTab, mounted, activate, close, open, switchMode }),
    [state, mode, activeTab, mounted, activate, close, open, switchMode]
  )

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
}

export function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('useTabs must be used within TabsProvider')
  return ctx
}

/** Whether the page reading this is in the tab in front. Hidden tabs stay mounted. */
export const TabVisibleContext = createContext(true)
export const useTabVisible = () => useContext(TabVisibleContext)
