import type { TerminalData } from '../../lib/types'
import { useData } from '../../lib/data-context'
import { hasDraft } from '../../lib/drafts'
import { useTabs, type Tab } from '../../lib/tabs-context'
import { IconClose, IconPlus } from '../Icons'
import { LESSON_TITLES } from '../../lessons/titles'

function humanise(slug: string): string {
  const s = decodeURIComponent(slug).replace(/[-_]+/g, ' ').trim()
  return s ? s[0].toUpperCase() + s.slice(1) : s
}

/** A short name for a tab, from its address and the records it points at. */
export function tabTitle(path: string, data: TerminalData): string {
  const [pathname] = path.split('?')
  const parts = pathname.split('/').filter(Boolean)
  const [a, b, c] = parts
  if (a === 'students') {
    if (!b) return 'Students'
    const s = data.students.find((x) => x.id === b)
    return s ? s.preferredName || s.fullName : 'Student'
  }
  if (a === 'classes') {
    if (!b) return 'Classes'
    const name = data.classes.find((x) => x.id === b)?.name ?? 'Class'
    return c ? `${name} · ${humanise(c)}` : name
  }
  if (a === 'homework') return b ? (data.homework.find((x) => x.id === b)?.title ?? 'Homework') : 'Homework'
  if (a === 'lessons') return b ? (LESSON_TITLES[b] ?? 'Lesson') : 'Lessons'
  if (a === 'documents') return b ? 'Document' : 'Documents'
  if (a === 'running') return b === 'race-lab' ? 'Race Lab' : b === 'archive' ? 'Running archive' : 'Runs'
  if (a === 'personal') return parts.length > 2 ? humanise(parts[parts.length - 1]) : 'Archive'
  if (a === 'settings') return 'Settings'
  return 'Page'
}

/** The tab strip above the page: switch, close (× or middle-click), or open a new tab. */
export function TabBar() {
  const { state, mode, activate, close, open } = useTabs()
  const { data } = useData()
  const { tabs, activeId } = state[mode]

  return (
    <div className="tabbar sticky top-0 z-30 flex items-end gap-0.5 overflow-x-auto border-b px-2 pt-2 hairline" role="tablist" aria-label="Open pages">
      {tabs.map((t: Tab) => {
        const active = t.id === activeId
        const title = tabTitle(t.path, data)
        const unsaved = hasDraft(t.id, t.path)
        return (
          <div
            key={t.id}
            role="tab"
            aria-selected={active}
            data-active={active}
            className="tab group flex max-w-[13rem] min-w-[7rem] shrink-0 items-center gap-1.5 pr-1 pl-3"
            title={`${title}${unsaved ? ' · unsaved changes' : ''}\n${t.path}`}
            onMouseDown={(e) => {
              if (e.button === 1) {
                e.preventDefault()
                close(t.id)
              }
            }}
          >
            <button type="button" className="min-w-0 flex-1 truncate py-2 text-left font-mono text-[11px]" onClick={() => activate(t.id)}>
              {title}
            </button>
            {unsaved && <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--assigned)' }} aria-label="unsaved changes" />}
            <button
              type="button"
              className="tab-close shrink-0 p-1"
              onClick={() => close(t.id)}
              aria-label={`Close ${title}`}
              title="Close tab"
            >
              <IconClose className="h-3 w-3" />
            </button>
          </div>
        )
      })}
      <button type="button" className="btn btn-ghost mb-1 !px-2 !py-1" onClick={() => open()} aria-label="New tab" title="New tab (Ctrl+click a link to open it in one)">
        <IconPlus className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
