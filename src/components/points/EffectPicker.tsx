import { useMemo, useState } from 'react'
import { useData } from '../../lib/data-context'
import { sortBehaviours } from '../../lib/points'
import type { Behaviour, BehaviourKind } from '../../lib/types'
import { Modal } from '../Modal'

/**
 * Step one: choose the effect. Positives read as a reward sheet, negatives as
 * a plain list — the tone of each tab is deliberate, not decoration.
 */
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

  const list = useMemo(() => sortBehaviours(data.behaviours, kind), [data.behaviours, kind])
  const positive = kind === 'positive'

  return (
    <Modal wide eyebrow={subtitle} title={title} onClose={onClose}>
      <div className="mb-4 flex gap-1" role="tablist">
        {(
          [
            ['positive', 'Positive'],
            ['negative', 'Needs work'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={kind === id}
            onClick={() => setKind(id)}
            className="btn flex-1"
            style={
              kind === id
                ? {
                    borderColor: id === 'positive' ? 'var(--collected)' : 'var(--overdue)',
                    color: id === 'positive' ? 'var(--collected)' : 'var(--overdue)',
                    background: id === 'positive' ? 'var(--collected-dim)' : 'var(--overdue-dim)',
                  }
                : undefined
            }
          >
            {label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="py-6 text-center text-sm" style={{ color: 'var(--ink-faint)' }}>
          No {positive ? 'positive' : 'needs-work'} effects yet. Add some in Settings → Effects.
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
