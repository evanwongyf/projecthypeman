import { useMemo, useState } from 'react'
import { useData } from '../../lib/data-context'
import { sortBehaviours } from '../../lib/points'
import type { Behaviour, BehaviourKind } from '../../lib/types'
import { Modal } from '../Modal'
import { Select } from '../Select'

/**
 * Step one: choose the effect. Positives read as a reward sheet, negatives as
 * a plain list, the tone of each tab is deliberate, not decoration.
 */
type Sort = 'name' | 'points' | 'recent'

export function EffectPicker({
  title,
  subtitle,
  onPick,
  onClose,
}: {
  title: string
  subtitle: string
  onPick: (behaviour: Behaviour) => void
  onClose: () => void
}) {
  const { data } = useData()
  const [kind, setKind] = useState<BehaviourKind>('positive')
  const [sort, setSort] = useState<Sort>('name')

  const list = useMemo(() => {
    const base = sortBehaviours(data.behaviours, kind)
    if (sort === 'points') return [...base].sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
    if (sort === 'recent') return [...base].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    return base
  }, [data.behaviours, kind, sort])

  const positive = kind === 'positive'

  return (
    <Modal wide eyebrow={subtitle} title={title} onClose={onClose}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        {/* One control with two states, so the two sides read as opposites
            rather than as two unrelated buttons. */}
        <div className="toggle" role="tablist" aria-label="Reward or penalty">
          {(
            [
              ['positive', 'Reward', 'var(--collected)'],
              ['negative', 'Penalty', 'var(--overdue)'],
            ] as const
          ).map(([id, label, tone]) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={kind === id}
              onClick={() => setKind(id)}
              className="toggle-option"
              style={kind === id ? { color: tone, background: `color-mix(in srgb, ${tone} 16%, var(--bg))` } : undefined}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="shrink-0">
          <span className="label block">sort by</span>
          <Select
            className="mt-1.5"
            ariaLabel="Sort by"
            value={sort}
            onChange={(v) => setSort(v as Sort)}
            options={[
              { value: 'name', label: 'Name' },
              { value: 'points', label: 'Points' },
              { value: 'recent', label: 'Recently added' },
            ]}
          />
        </div>
      </div>

      {list.length === 0 ? (
        <p className="py-6 text-center text-sm" style={{ color: 'var(--ink-faint)' }}>
          No {positive ? 'reward' : 'penalty'} items yet. Add some in Settings → Effects.
        </p>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {list.map((b) => (
            <button key={b.id} type="button" className="pick" onClick={() => onPick(b)}>
              <span className="flex items-start justify-between gap-2">
                <span className="min-w-0">
                  <span className="block text-sm leading-snug font-semibold">{b.name}</span>
                  {b.note && (
                    <span className="mt-0.5 block text-[11px] leading-snug" style={{ color: 'var(--ink-faint)' }}>
                      {b.note}
                    </span>
                  )}
                </span>
                <span
                  className="mono shrink-0 text-sm font-semibold"
                  style={{ color: positive ? 'var(--collected)' : 'var(--overdue)' }}
                >
                  {positive ? '+' : '−'}
                  {b.points}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </Modal>
  )
}
