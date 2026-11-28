import { useEffect, useRef } from 'react'
import { Routes } from 'react-router-dom'
import { applyValue, clearDraftFields, fieldKey, getDraft, isDraftable, setDraftField, valueOf, type Field } from '../../lib/drafts'
import { TabVisibleContext, type Tab } from '../../lib/tabs-context'
import { pageRoutes } from '../../routes'

/**
 * One tab's page. It renders the routes against the tab's own address, stays
 * mounted while hidden, and keeps a draft of anything typed into it so a
 * reload doesn't lose it.
 */
export function TabPane({ tab, visible, onDraftChange }: { tab: Tab; visible: boolean; onDraftChange: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const path = useRef(tab.path)
  path.current = tab.path
  const notify = useRef(onDraftChange)
  notify.current = onDraftChange

  // Record typing; clear when the page saves.
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const keysIn = (scope: Element) =>
      [...scope.querySelectorAll<Field>('input, textarea, select')].filter(isDraftable).map((f) => fieldKey(f, root))

    const onField = (e: Event) => {
      if (!isDraftable(e.target)) return
      setDraftField(tab.id, path.current, fieldKey(e.target, root), valueOf(e.target))
      notify.current()
    }
    const onSubmit = (e: Event) => {
      if (e.target instanceof Element) clearDraftFields(tab.id, keysIn(e.target))
      notify.current()
    }
    // Most pages save from a primary button rather than a form submit.
    const onClick = (e: Event) => {
      const button = e.target instanceof Element ? e.target.closest('.btn-primary, .btn-collect, button[type="submit"]') : null
      if (!button || !root.contains(button)) return
      const keys = keysIn(button.closest('form, [role="dialog"], section, article') ?? root)
      setTimeout(() => {
        clearDraftFields(tab.id, keys)
        notify.current()
      }, 0)
    }

    root.addEventListener('input', onField, true)
    root.addEventListener('change', onField, true)
    root.addEventListener('submit', onSubmit, true)
    root.addEventListener('click', onClick, true)
    return () => {
      root.removeEventListener('input', onField, true)
      root.removeEventListener('change', onField, true)
      root.removeEventListener('submit', onSubmit, true)
      root.removeEventListener('click', onClick, true)
    }
  }, [tab.id])

  // On first mount (a reload, or coming back later), write the draft back into empty fields.
  useEffect(() => {
    const draft = getDraft(tab.id, tab.path)
    if (!draft) return
    const done = new Set<string>()
    const restore = () => {
      const root = ref.current
      if (!root) return
      for (const f of root.querySelectorAll<Field>('input, textarea, select')) {
        if (!isDraftable(f)) continue
        const key = fieldKey(f, root)
        if (done.has(key) || !(key in draft)) continue
        const current = valueOf(f)
        if (current !== '' && current !== false) continue // never overwrite what's already there
        applyValue(f, draft[key])
        done.add(key)
      }
    }
    // Pages fill in as their data loads, so try a few times.
    const timers = [250, 900, 2500].map((ms) => setTimeout(restore, ms))
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab.id])

  return (
    <div ref={ref} hidden={!visible} data-tab={tab.id}>
      <TabVisibleContext.Provider value={visible}>
        <Routes location={tab.path}>{pageRoutes}</Routes>
      </TabVisibleContext.Provider>
    </div>
  )
}
