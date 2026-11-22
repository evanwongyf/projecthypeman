import { useMemo, useRef, useState } from 'react'
import type { PointerEvent as RPointerEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { api } from '../lib/api'
import { useData, useRoster } from '../lib/data-context'
import { displayName, formatStamp, initials } from '../lib/format'
import { RELATIONSHIP_LABELS, RELATIONSHIP_ORDER, RELATIONSHIP_TONE } from '../lib/relationships'
import { POSITIVE, TIE_STYLE, classTies, insights, layout, pairKey, partners, type Tie } from '../lib/sociogram'
import type { RelationshipKind, Student } from '../lib/types'
import { Field, FieldGroup } from '../components/Field'
import { IconPlus } from '../components/Icons'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { Modal } from '../components/Modal'
import { Select } from '../components/Select'

const W = 820
const H = 580

type Selection = { type: 'student'; id: string } | { type: 'tie'; id: string } | null

export function SociogramPage() {
  const { classId = '' } = useParams()
  const { data, loading } = useData()
  const roster = useRoster(classId)
  const cls = data.classes.find((c) => c.id === classId)

  const [shown, setShown] = useState<Set<RelationshipKind>>(() => new Set(RELATIONSHIP_ORDER))
  const [selected, setSelected] = useState<Selection>(null)
  const [hover, setHover] = useState<string | null>(null)
  const [moved, setMoved] = useState<Record<string, { x: number; y: number }>>({})
  const [adding, setAdding] = useState<{ from?: string } | null>(null)
  const svg = useRef<SVGSVGElement>(null)
  const drag = useRef<{ id: string; moved: boolean } | null>(null)

  const { ties, outside } = useMemo(() => classTies(roster), [roster])
  const ids = useMemo(() => roster.map((s) => s.id), [roster])
  const base = useMemo(() => layout(ids, ties, W, H), [ids, ties])
  const pos = (id: string) => moved[id] ?? base.get(id) ?? { x: W / 2, y: H / 2 }
  const byId = useMemo(() => new Map(roster.map((s) => [s.id, s])), [roster])
  const plans = useMemo(() => data.seatingPlans.filter((p) => p.classId === classId), [data.seatingPlans, classId])
  const info = useMemo(() => insights(roster, ties, plans, data.students), [roster, ties, plans, data.students])

  if (loading) return <p className="label p-8">loading class…</p>
  if (!cls) return <Navigate to="/classes" replace />

  const visible = ties.filter((t) => shown.has(t.kind))
  const counts = Object.fromEntries(RELATIONSHIP_ORDER.map((k) => [k, ties.filter((t) => t.kind === k).length])) as Record<RelationshipKind, number>
  const conflictsOf = partners(ties, ['conflict'])
  const focus = hover ?? (selected?.type === 'student' ? selected.id : null)
  const neighbours = focus ? new Set(visible.filter((t) => t.a === focus || t.b === focus).flatMap((t) => [t.a, t.b])) : null
  const name = (id: string) => (byId.get(id) ? displayName(byId.get(id)!) : 'Removed student')
  const short = (id: string) => {
    const s = byId.get(id)
    return s ? (s.preferredName?.trim() || s.fullName.split(/\s+/)[0]) : '?'
  }

  // Ties between the same two people are drawn as separate curves.
  const pairIndex = new Map<string, Tie[]>()
  for (const t of visible) {
    const key = pairKey(t.a, t.b)
    pairIndex.set(key, [...(pairIndex.get(key) ?? []), t])
  }

  function toSvg(e: RPointerEvent) {
    const r = svg.current!.getBoundingClientRect()
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H }
  }

  function edgePath(t: Tie) {
    const p = pos(t.a)
    const q = pos(t.b)
    const group = pairIndex.get(pairKey(t.a, t.b))!
    const i = group.indexOf(t)
    // Conflicts always bow outwards, so one never hides a friendship along the same line.
    const offset = (i - (group.length - 1) / 2) * 22 + (t.kind === 'conflict' ? Math.min(60, Math.hypot(pos(t.b).x - pos(t.a).x, pos(t.b).y - pos(t.a).y) * 0.18) : 0)
    const mx = (p.x + q.x) / 2
    const my = (p.y + q.y) / 2
    const dx = q.x - p.x
    const dy = q.y - p.y
    const len = Math.max(Math.hypot(dx, dy), 1)
    const sign = t.a < t.b ? 1 : -1
    const cxp = mx + (-dy / len) * offset * sign
    const cyp = my + (dx / len) * offset * sign
    return `M${p.x},${p.y} Q${cxp},${cyp} ${q.x},${q.y}`
  }

  const selectedTie = selected?.type === 'tie' ? ties.find((t) => t.id === selected.id) : undefined
  const selectedStudent = selected?.type === 'student' ? byId.get(selected.id) : undefined

  return (
    <>
      <PageHeader
        back={{ to: `/classes/${cls.id}`, label: cls.name }}
        eyebrow={[cls.name, cls.subject].filter(Boolean).join(' · ')}
        title="Sociogram"
        meta={
          <>
            <MetaItem label="students">{roster.length}</MetaItem>
            <MetaItem label="friendships">
              <span className="mono" style={{ color: 'var(--collected)' }}>
                {counts.friend + counts.close_friend}
              </span>
            </MetaItem>
            <MetaItem label="conflicts">
              <span className="mono" style={{ color: info.conflictPairs.length ? 'var(--overdue)' : undefined }}>
                {info.conflictPairs.length}
              </span>
            </MetaItem>
            <MetaItem label="no friendships recorded">{info.isolated.length}</MetaItem>
          </>
        }
        actions={
          <button type="button" className="btn btn-primary" onClick={() => setAdding({ from: selectedStudent?.id })} disabled={roster.length < 2}>
            <IconPlus />
            Add relationship
          </button>
        }
      />

      <div className="space-y-6 p-5 sm:p-8">
        {roster.length < 2 ? (
          <div className="panel px-4 py-8 text-center">
            <p className="label">add at least two students to this class to draw a sociogram</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Show relationship types">
              {RELATIONSHIP_ORDER.map((k) => {
                const on = shown.has(k)
                return (
                  <button
                    key={k}
                    type="button"
                    className="pick !inline-flex !w-auto items-center gap-2 !px-2.5 !py-1.5 text-xs"
                    aria-pressed={on}
                    onClick={() =>
                      setShown((prev) => {
                        const next = new Set(prev)
                        if (next.has(k)) next.delete(k)
                        else next.add(k)
                        return next
                      })
                    }
                    style={on ? { borderColor: RELATIONSHIP_TONE[k], background: 'var(--panel)' } : { opacity: 0.5 }}
                  >
                    <svg width="26" height="8" aria-hidden="true">
                      <line x1="1" x2="25" y1="4" y2="4" stroke={RELATIONSHIP_TONE[k]} strokeWidth={Math.min(TIE_STYLE[k].width, 4)} strokeDasharray={TIE_STYLE[k].dash} />
                    </svg>
                    {RELATIONSHIP_LABELS[k]}
                    <span className="mono" style={{ color: 'var(--ink-faint)' }}>
                      {counts[k]}
                    </span>
                  </button>
                )
              })}
              {Object.keys(moved).length > 0 && (
                <button type="button" className="btn btn-ghost !py-1.5 text-xs" onClick={() => setMoved({})}>
                  Reset layout
                </button>
              )}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
              <div className="panel overflow-hidden">
                <svg
                  ref={svg}
                  viewBox={`0 0 ${W} ${H}`}
                  className="block h-auto w-full touch-none select-none"
                  role="img"
                  aria-label={`Sociogram of ${cls.name}: ${ties.length} relationships among ${roster.length} students`}
                  onPointerMove={(e) => {
                    if (!drag.current) return
                    drag.current.moved = true
                    const p = toSvg(e)
                    setMoved((m) => ({ ...m, [drag.current!.id]: { x: Math.min(W - 30, Math.max(30, p.x)), y: Math.min(H - 30, Math.max(24, p.y)) } }))
                  }}
                  onPointerUp={() => {
                    if (drag.current && !drag.current.moved) {
                      const id = drag.current.id
                      setSelected((s) => (s?.type === 'student' && s.id === id ? null : { type: 'student', id }))
                    }
                    drag.current = null
                  }}
                  onPointerLeave={() => (drag.current = null)}
                  onClick={(e) => {
                    if (e.target === svg.current) setSelected(null)
                  }}
                >
                  {visible.map((t) => {
                    const st = TIE_STYLE[t.kind]
                    const dim = neighbours ? !(t.a === focus || t.b === focus) : false
                    const isSel = selectedTie?.id === t.id
                    const d = edgePath(t)
                    return (
                      <g key={t.id} style={{ cursor: 'pointer' }} onClick={() => setSelected({ type: 'tie', id: t.id })}>
                        <path d={d} fill="none" stroke="transparent" strokeWidth={14} />
                        <path
                          d={d}
                          fill="none"
                          stroke={RELATIONSHIP_TONE[t.kind]}
                          strokeWidth={isSel ? st.width + 2 : st.width}
                          strokeDasharray={st.dash}
                          strokeLinecap="round"
                          opacity={dim ? 0.12 : 0.9}
                        >
                          <title>
                            {name(t.a)} and {name(t.b)}: {RELATIONSHIP_LABELS[t.kind]}
                          </title>
                        </path>
                      </g>
                    )
                  })}
                  {roster.map((s) => {
                    const p = pos(s.id)
                    const dim = neighbours ? !neighbours.has(s.id) && s.id !== focus : false
                    const sel = selectedStudent?.id === s.id
                    const nConf = conflictsOf.get(s.id)?.size ?? 0
                    const isolated = info.isolated.includes(s.id)
                    return (
                      <g
                        key={s.id}
                        transform={`translate(${p.x},${p.y})`}
                        opacity={dim ? 0.25 : 1}
                        style={{ cursor: 'grab' }}
                        onPointerDown={(e) => {
                          e.stopPropagation()
                          drag.current = { id: s.id, moved: false }
                        }}
                        onPointerEnter={() => setHover(s.id)}
                        onPointerLeave={() => setHover(null)}
                      >
                        <circle
                          r={sel ? 21 : 18}
                          fill="var(--panel)"
                          stroke={sel ? 'var(--accent)' : isolated ? 'var(--ink-faint)' : 'var(--ink)'}
                          strokeWidth={sel ? 3 : 1.5}
                          strokeDasharray={isolated ? '3 3' : undefined}
                        />
                        <text textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={700} fill="var(--ink)" fontFamily="var(--font-mono)">
                          {initials(s.fullName)}
                        </text>
                        {nConf > 0 && (
                          <g transform="translate(13,-13)">
                            <circle r={7.5} fill="var(--overdue)" />
                            <text textAnchor="middle" dominantBaseline="central" fontSize={9} fontWeight={700} fill="#fff">
                              {nConf}
                            </text>
                          </g>
                        )}
                        <text
                          y={sel ? 34 : 31}
                          textAnchor="middle"
                          fontSize={11.5}
                          fontWeight={600}
                          fill="var(--ink)"
                          paintOrder="stroke"
                          stroke="var(--panel)"
                          strokeWidth={4}
                          strokeLinejoin="round"
                        >
                          {short(s.id)}
                        </text>
                        <title>{displayName(s)}</title>
                      </g>
                    )
                  })}
                </svg>
                <p className="border-t px-4 py-2 text-[11px]" style={{ borderColor: 'var(--line)', color: 'var(--ink-faint)' }}>
                  Click a student or a line for details; drag students to tidy the map. Friendships pull students together and conflicts push them apart. A red badge counts a
                  student’s conflicts; a dashed circle means no friendships are recorded.
                  {outside > 0 && ` ${outside} relationship${outside === 1 ? '' : 's'} with people outside this class ${outside === 1 ? 'is' : 'are'} not drawn.`}
                </p>
              </div>

              <aside className="space-y-4">
                {selectedStudent ? (
                  <StudentPanel student={selectedStudent} ties={ties} name={name} onAdd={() => setAdding({ from: selectedStudent.id })} onPick={(id) => setSelected({ type: 'tie', id })} />
                ) : selectedTie ? (
                  <TiePanel tie={selectedTie} name={name} onPick={(id) => setSelected({ type: 'student', id })} />
                ) : (
                  <InsightsPanel info={info} name={name} onPick={(id) => setSelected({ type: 'student', id })} />
                )}
                {selected && (
                  <button type="button" className="btn btn-ghost w-full justify-center" onClick={() => setSelected(null)}>
                    Back to class insights
                  </button>
                )}
              </aside>
            </div>

            <TieTable ties={ties} name={name} onPick={(id) => setSelected({ type: 'tie', id })} />
          </>
        )}
      </div>

      {adding && <AddTieModal roster={roster} from={adding.from} onClose={() => setAdding(null)} />}
    </>
  )
}

function KindChip({ kind }: { kind: RelationshipKind }) {
  return (
    <span className="chip" style={{ color: RELATIONSHIP_TONE[kind], borderColor: RELATIONSHIP_TONE[kind] }}>
      {RELATIONSHIP_LABELS[kind]}
    </span>
  )
}

function InsightsPanel({ info, name, onPick }: { info: ReturnType<typeof insights>; name: (id: string) => string; onPick: (id: string) => void }) {
  const Person = ({ id, extra }: { id: string; extra?: string }) => (
    <button type="button" className="font-medium underline-offset-2 hover:underline" onClick={() => onPick(id)}>
      {name(id)}
      {extra && <span style={{ color: 'var(--ink-faint)' }}> {extra}</span>}
    </button>
  )
  const join = (ids: string[], extra?: (id: string) => string) =>
    ids.map((id, i) => (
      <span key={id}>
        {i > 0 && ', '}
        <Person id={id} extra={extra?.(id)} />
      </span>
    ))

  return (
    <div className="panel space-y-4 p-4 text-sm">
      <p className="label">class insights</p>

      <Insight title="Conflicts" tone="var(--overdue)" empty="No conflicts recorded.">
        {info.conflictPairs.length > 0 && (
          <ul className="space-y-1">
            {info.conflictPairs.map(([a, b]) => (
              <li key={pairKey(a, b)}>
                <Person id={a} /> and <Person id={b} />
              </li>
            ))}
          </ul>
        )}
      </Insight>

      {info.seating.length > 0 && (
        <Insight title="Seated next to a conflict" tone="var(--overdue)">
          <ul className="space-y-1">
            {info.seating.map(({ plan, pairs }) => (
              <li key={plan.id}>
                <Link to={`/classes/${plan.classId}/seating/${plan.id}`} className="underline">
                  {plan.name}
                </Link>
                : {pairs.map(([a, b]) => `${name(a)} and ${name(b)}`).join('; ')}
              </li>
            ))}
          </ul>
        </Insight>
      )}

      {info.caughtBetween.length > 0 && (
        <Insight title="Caught in the middle" tone="var(--assigned)">
          <ul className="space-y-1">
            {info.caughtBetween.map(({ friend, pair }) => (
              <li key={friend + pair.join()}>
                <Person id={friend} /> is friends with both {name(pair[0])} and {name(pair[1])}, who are in conflict.
              </li>
            ))}
          </ul>
        </Insight>
      )}

      {info.conflictHeavy.length > 0 && (
        <Insight title="In several conflicts" tone="var(--overdue)">
          <p>{join(info.conflictHeavy.map((x) => x.id), (id) => `(${info.conflictHeavy.find((x) => x.id === id)!.count})`)}</p>
        </Insight>
      )}

      <Insight title="No friendships recorded" tone="var(--assigned)" empty="Everyone has at least one friendship recorded.">
        {info.isolated.length > 0 && (
          <>
            <p>{join(info.isolated)}</p>
            <p className="mt-1 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
              It may only mean nothing has been noted yet; worth a quiet check-in.
            </p>
          </>
        )}
      </Insight>

      <Insight title="Most connected" tone="var(--collected)" empty="No friendships recorded yet.">
        {info.mostConnected.length > 0 && <p>{join(info.mostConnected.map((x) => x.id), (id) => `(${info.mostConnected.find((x) => x.id === id)!.count})`)}</p>}
      </Insight>

      {info.groups.length > 0 && (
        <Insight title="Friendship groups" tone="var(--collected)">
          <ul className="space-y-1.5">
            {info.groups.map((g, i) => (
              <li key={i}>
                <span className="mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                  {g.length} ·{' '}
                </span>
                {g.map(name).join(', ')}
              </li>
            ))}
          </ul>
        </Insight>
      )}
    </div>
  )
}

function Insight({ title, tone, empty, children }: { title: string; tone: string; empty?: string; children?: React.ReactNode }) {
  const has = Array.isArray(children) ? children.some(Boolean) : !!children
  return (
    <div className="border-l-2 pl-3" style={{ borderColor: tone }}>
      <p className="mb-1 text-xs font-semibold">{title}</p>
      {has ? children : <p style={{ color: 'var(--ink-faint)' }}>{empty}</p>}
    </div>
  )
}

function StudentPanel({
  student,
  ties,
  name,
  onAdd,
  onPick,
}: {
  student: Student
  ties: Tie[]
  name: (id: string) => string
  onAdd: () => void
  onPick: (tieId: string) => void
}) {
  const mine = ties
    .filter((t) => t.a === student.id || t.b === student.id)
    .sort((a, b) => RELATIONSHIP_ORDER.indexOf(a.kind) - RELATIONSHIP_ORDER.indexOf(b.kind))
  const friends = new Set(mine.filter((t) => POSITIVE.includes(t.kind)).map((t) => (t.a === student.id ? t.b : t.a)))
  const conflicts = new Set(mine.filter((t) => t.kind === 'conflict').map((t) => (t.a === student.id ? t.b : t.a)))
  return (
    <div className="panel space-y-3 p-4 text-sm">
      <div>
        <p className="label">student</p>
        <Link to={`/students/${student.id}`} className="mt-1 block text-base font-semibold hover:underline">
          {displayName(student)}
        </Link>
        <p className="mono mt-0.5 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
          {friends.size} friend{friends.size === 1 ? '' : 's'} · {conflicts.size} conflict{conflicts.size === 1 ? '' : 's'} in this class
        </p>
      </div>
      {mine.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No relationships with classmates recorded.</p>
      ) : (
        <ul className="space-y-2">
          {mine.map((t) => (
            <li key={t.id}>
              <button type="button" className="row-hover block w-full rounded-[var(--radius-sm,var(--radius))] p-2 text-left" onClick={() => onPick(t.id)}>
                <span className="flex items-center justify-between gap-2">
                  <span className="font-medium">{name(t.a === student.id ? t.b : t.a)}</span>
                  <KindChip kind={t.kind} />
                </span>
                {t.notes[0] && (
                  <span className="mt-1 line-clamp-2 block text-xs" style={{ color: 'var(--ink-soft)' }}>
                    {t.notes[0].text}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
      <button type="button" className="btn w-full justify-center" onClick={onAdd}>
        <IconPlus />
        Add a relationship for {displayName(student)}
      </button>
    </div>
  )
}

function TiePanel({ tie, name, onPick }: { tie: Tie; name: (id: string) => string; onPick: (studentId: string) => void }) {
  const { reload } = useData()
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const notes = [...tie.notes].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  async function addNote(e: React.FormEvent) {
    e.preventDefault()
    if (!draft.trim()) return
    setBusy(true)
    setError(null)
    try {
      await api.addRelationshipNote(tie.id, draft.trim())
      setDraft('')
      await reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save the note.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="panel space-y-3 p-4 text-sm">
      <div className="flex items-center justify-between gap-2">
        <p className="label">relationship</p>
        <KindChip kind={tie.kind} />
      </div>
      <p className="text-base font-semibold">
        <button type="button" className="hover:underline" onClick={() => onPick(tie.a)}>
          {name(tie.a)}
        </button>{' '}
        and{' '}
        <button type="button" className="hover:underline" onClick={() => onPick(tie.b)}>
          {name(tie.b)}
        </button>
      </p>
      <ul className="space-y-2">
        {notes.map((n) => (
          <li key={n.id} className="border-l-2 pl-3" style={{ borderColor: 'var(--line)' }}>
            <p className="whitespace-pre-wrap">{n.text}</p>
            <p className="mono mt-0.5 text-[10px]" style={{ color: 'var(--ink-faint)' }}>
              {formatStamp(n.createdAt)}
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={addNote} className="space-y-2">
        <textarea className="field" rows={2} value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Add a note: what you noticed, what changed" />
        <button type="submit" className="btn w-full justify-center" disabled={busy || !draft.trim()}>
          {busy ? 'Saving…' : 'Add note'}
        </button>
        {error && <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>{error}</p>}
      </form>
      <p className="text-[11px]" style={{ color: 'var(--ink-faint)' }}>
        Change the type or delete it from{' '}
        <Link to={`/students/${tie.a}`} className="underline">
          {name(tie.a)}’s profile
        </Link>
        .
      </p>
    </div>
  )
}

function TieTable({ ties, name, onPick }: { ties: Tie[]; name: (id: string) => string; onPick: (tieId: string) => void }) {
  if (!ties.length) {
    return (
      <div className="panel px-4 py-8 text-center">
        <p className="label">no relationships between classmates recorded yet</p>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Add one with the button above, or from a student’s profile, and it appears on the map.
        </p>
      </div>
    )
  }
  return (
    <section>
      <h2 className="label mb-3">all relationships in this class</h2>
      <div className="panel overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left" style={{ borderColor: 'var(--line)' }}>
              <th className="label px-3 py-2">type</th>
              <th className="label px-3 py-2">between</th>
              <th className="label px-3 py-2">latest note</th>
            </tr>
          </thead>
          <tbody>
            {[...ties]
              .sort((a, b) => RELATIONSHIP_ORDER.indexOf(a.kind) - RELATIONSHIP_ORDER.indexOf(b.kind) || name(a.a).localeCompare(name(b.a)))
              .map((t) => {
                const latest = [...t.notes].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0]
                return (
                  <tr key={t.id} className="row-hover cursor-pointer border-b" style={{ borderColor: 'var(--line-soft)' }} onClick={() => onPick(t.id)}>
                    <td className="px-3 py-2">
                      <KindChip kind={t.kind} />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {name(t.a)} and {name(t.b)}
                    </td>
                    <td className="max-w-[28rem] truncate px-3 py-2" style={{ color: 'var(--ink-soft)' }}>
                      {latest?.text ?? '-'}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function AddTieModal({ roster, from, onClose }: { roster: Student[]; from?: string; onClose: () => void }) {
  const { reload } = useData()
  const [a, setA] = useState(from ?? '')
  const [b, setB] = useState('')
  const [kind, setKind] = useState<RelationshipKind>('friend')
  const [note, setNote] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const options = roster.map((s) => ({ value: s.id, label: displayName(s) }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!a || !b) return setError('Pick both students.')
    if (a === b) return setError('Pick two different students.')
    if (!note.trim()) return setError('Add a first note about this relationship.')
    setBusy(true)
    setError(null)
    try {
      await api.addRelationship({ studentId: a, kind, otherStudentId: b, note: note.trim() })
      await reload()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
      setBusy(false)
    }
  }

  return (
    <Modal
      eyebrow="Sociogram"
      title="Add a relationship"
      onClose={onClose}
      footer={
        <>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="tie-form" className="btn btn-primary" disabled={busy}>
            {busy ? 'Saving…' : 'Add relationship'}
          </button>
        </>
      }
    >
      <form id="tie-form" onSubmit={submit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Student" required>
            <Select value={a} onChange={setA} options={[{ value: '', label: 'choose a student' }, ...options]} ariaLabel="Student" />
          </Field>
          <Field label="And" required>
            <Select value={b} onChange={setB} options={[{ value: '', label: 'choose a student' }, ...options.filter((o) => o.value !== a)]} ariaLabel="Other student" />
          </Field>
        </div>
        <FieldGroup label="Type" required>
          <div className="grid grid-cols-3 gap-2">
            {RELATIONSHIP_ORDER.map((k) => (
              <button
                key={k}
                type="button"
                className="pick !py-2 text-center"
                aria-pressed={kind === k}
                onClick={() => setKind(k)}
                style={kind === k ? { borderColor: RELATIONSHIP_TONE[k], color: RELATIONSHIP_TONE[k] } : undefined}
              >
                <span className="block text-xs leading-snug font-medium">{RELATIONSHIP_LABELS[k]}</span>
              </button>
            ))}
          </div>
        </FieldGroup>
        <Field label="First note" required hint="what happened, or what you noticed">
          <textarea className="field" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Argued during group work on 12 Nov; kept apart since." />
        </Field>
        <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
          It is saved on both students’ profiles, and shows up in the seating plan’s conflict warnings.
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
