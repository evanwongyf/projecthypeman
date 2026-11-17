import { useMemo, useState } from 'react'
import { api } from '../../lib/api'
import { useData } from '../../lib/data-context'
import { sortBehaviours } from '../../lib/points'
import type { Behaviour, BehaviourKind } from '../../lib/types'
import { Field } from '../Field'
import { IconPlus, IconTrash } from '../Icons'
import { Modal } from '../Modal'

/** Manage the effect catalogue: rename, re-point, add and retire. */
export function EffectsEditor() {
  const { data, reload } = useData()
  const [adding, setAdding] = useState<BehaviourKind | null>(null)
  const [editing, setEditing] = useState<Behaviour | null>(null)
  const [removing, setRemoving] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const positives = useMemo(() => sortBehaviours(data.behaviours, 'positive'), [data.behaviours])
  const negatives = useMemo(() => sortBehaviours(data.behaviours, 'negative'), [data.behaviours])

  async function remove(id: string) {
    setRemoving(id)
    setError(null)
    try {
      await api.deleteBehaviour(id)
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not remove that effect.')
    } finally {
      setRemoving(null)
    }
  }

  const columns: { kind: BehaviourKind; title: string; blurb: string; list: Behaviour[]; tone: string }[] = [
    {
      kind: 'positive',
      title: 'Rewards',
      blurb: 'Said out loud and collected — give these names worth earning.',
      list: positives,
      tone: 'var(--collected)',
    },
    {
      kind: 'negative',
      title: 'Penalties',
      blurb: 'Said out loud too. Keep these plain and about the behaviour, not the child.',
      list: negatives,
      tone: 'var(--overdue)',
    },
  ]

  return (
    <div className="p-5 sm:p-8">
      {error && (
        <p className="panel mb-4 px-4 py-3 font-mono text-xs" style={{ color: 'var(--overdue)', borderColor: 'var(--overdue)' }}>
          {error}
        </p>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        {columns.map((col) => (
          <section key={col.kind} className="min-w-0">
            <div className="mb-1 flex items-baseline justify-between gap-3">
              <h2 className="label" style={{ color: col.tone }}>
                {col.title}
              </h2>
              <button type="button" className="btn btn-ghost !px-2" onClick={() => setAdding(col.kind)} aria-label={`Add a ${col.kind === 'positive' ? 'reward' : 'penalty'}`}>
                <IconPlus />
              </button>
            </div>
            <p className="mb-3 text-xs" style={{ color: 'var(--ink-faint)' }}>
              {col.blurb}
            </p>

            {col.list.length === 0 ? (
              <div className="panel px-4 py-6">
                <p className="label">none yet</p>
              </div>
            ) : (
              <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
                {col.list.map((b) => (
                  <li key={b.id} className="group flex items-center gap-3 px-4 py-3">
                    <span
                      className="mono w-[3.5ch] shrink-0 text-sm font-semibold"
                      style={{ color: col.tone }}
                    >
                      {col.kind === 'positive' ? '+' : '−'}
                      {b.points}
                    </span>
                    <button
                      type="button"
                      className="min-w-0 flex-1 text-left"
                      onClick={() => setEditing(b)}
                    >
                      <span className="block truncate text-sm font-medium">{b.name}</span>
                      {b.note && (
                        <span className="block truncate text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                          {b.note}
                        </span>
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-danger shrink-0 !px-2 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                      onClick={() => remove(b.id)}
                      disabled={removing === b.id}
                      aria-label={`Remove ${b.name}`}
                    >
                      <IconTrash className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <p className="mt-6 max-w-xl text-xs" style={{ color: 'var(--ink-faint)' }}>
        Retiring an effect leaves awarded points alone — each entry keeps the name and value it
        was given, so totals and history never shift under you.
      </p>

      {adding && <EffectForm kind={adding} onClose={() => setAdding(null)} />}
      {editing && <EffectForm behaviour={editing} kind={editing.kind} onClose={() => setEditing(null)} />}
    </div>
  )
}

function EffectForm({
  behaviour,
  kind,
  onClose,
}: {
  behaviour?: Behaviour
  kind: BehaviourKind
  onClose: () => void
}) {
  const { reload } = useData()
  const [name, setName] = useState(behaviour?.name ?? '')
  const [note, setNote] = useState(behaviour?.note ?? '')
  const [points, setPoints] = useState(behaviour?.points ?? 1)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const positive = kind === 'positive'

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return setError('A name is required.')
    setBusy(true)
    setError(null)
    try {
      if (behaviour) await api.updateBehaviour(behaviour.id, { name: name.trim(), points, note: note.trim() })
      else await api.createBehaviour({ name: name.trim(), kind, points, note: note.trim() || undefined })
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow={positive ? 'Reward' : 'Penalty'}
      title={behaviour ? behaviour.name : positive ? 'New reward' : 'New penalty'}
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="effect-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : behaviour ? 'Save' : 'Add effect'}
          </button>
        </>
      }
    >
      <form id="effect-form" onSubmit={submit} className="space-y-4">
        <Field label="Name" required hint={positive ? 'make it worth earning' : 'plain and factual'}>
          <input
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={positive ? 'e.g. Big Brain' : 'e.g. Off task'}
            autoFocus
            required
          />
        </Field>
        <Field label="Description" hint="optional">
          <input
            className="field"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={positive ? 'Cracked something hard' : ''}
          />
        </Field>
        <Field label={`Default points to ${positive ? 'add' : 'deduct'}`} required>
          <input
            className="field mono"
            type="number"
            min={1}
            max={100}
            value={points}
            onChange={(e) => setPoints(Math.max(1, Math.min(100, Math.round(Number(e.target.value) || 1))))}
            required
          />
        </Field>
        <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
          This is only the starting value — you can dial it up or down each time you activate it.
        </p>
        {error && (
          <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>
            {error}
          </p>
        )}
      </form>
    </Modal>
  )
}
