import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../lib/data-context'
import { dueRelative, formatDate } from '../lib/format'
import { isOverdue, tally } from '../lib/status'
import { useNow } from '../lib/useNow'
import { Empty } from '../components/Empty'
import { MetaItem, PageHeader } from '../components/PageHeader'
import { Select } from '../components/Select'

type Sort = 'due' | 'outstanding'

/** Every homework across every class, newest due date first. */
export function HomeworkPage() {
  const { data, loading } = useData()
  const [sort, setSort] = useState<Sort>('due')
  const [classFilter, setClassFilter] = useState('')
  const now = useNow()

  const classes = useMemo(() => [...data.classes].sort((a, b) => a.name.localeCompare(b.name)), [data.classes])

  const rows = useMemo(() => {
    const list = data.homework
      .filter((hw) => !classFilter || hw.classId === classFilter)
      .map((hw) => {
        const ids = data.students.filter((s) => s.classId === hw.classId).map((s) => s.id)
        return { hw, t: tally(hw, ids, now), cls: data.classes.find((c) => c.id === hw.classId), late: isOverdue(hw, now) }
      })
    return list.sort((a, b) =>
      sort === 'due'
        ? b.hw.dueDate.localeCompare(a.hw.dueDate)
        : b.t.outstanding - a.t.outstanding || b.hw.dueDate.localeCompare(a.hw.dueDate)
    )
  }, [data, sort, classFilter, now])

  const totalOutstanding = rows.reduce((sum, r) => sum + r.t.outstanding, 0)

  return (
    <>
      <PageHeader
        eyebrow="Homework"
        title="Homework"
        meta={
          !loading && (
            <>
              <MetaItem label="set">{rows.length}</MetaItem>
              <MetaItem label="outstanding">{totalOutstanding}</MetaItem>
            </>
          )
        }
      />

      <div className="p-5 sm:p-8">
        {loading ? (
          <p className="label">loading homework…</p>
        ) : data.homework.length === 0 ? (
          <Empty
            title="nothing set yet"
            body="Homework belongs to a class. Open a class and set the title, description and due date there."
            action={
              <Link to="/classes" className="btn btn-primary">
                Go to classes
              </Link>
            }
          />
        ) : (
          <>
            <div className="mb-6 flex flex-wrap items-end gap-3">
              <div>
                <span className="label block">class</span>
                <Select
                  className="mt-1.5"
                  ariaLabel="Class"
                  value={classFilter}
                  onChange={setClassFilter}
                  options={[{ value: '', label: 'All classes' }, ...classes.map((c) => ({ value: c.id, label: c.name }))]}
                />
              </div>
              <div>
                <span className="label block">sort by</span>
                <Select
                  className="mt-1.5"
                  ariaLabel="Sort by"
                  value={sort}
                  onChange={(v) => setSort(v as Sort)}
                  options={[
                    { value: 'due', label: 'Due date' },
                    { value: 'outstanding', label: 'Outstanding' },
                  ]}
                />
              </div>
            </div>

            <ul className="panel divide-y" style={{ borderColor: 'var(--line-soft)' }}>
              {rows.map(({ hw, t, cls, late }) => {
                const allIn = t.total > 0 && t.outstanding === 0
                return (
                  <li key={hw.id} className="row-hover">
                    <Link to={`/homework/${hw.id}`} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3.5">
                      <div className="min-w-48 flex-1">
                        <p className="label">{cls?.name ?? 'class removed'}</p>
                        <p className="mt-1 font-medium">{hw.title}</p>
                      </div>
                      <div className="mono text-xs" style={{ color: 'var(--ink-soft)' }}>
                        {formatDate(hw.dueDate)}
                        <span
                          className="ml-2"
                          style={{ color: late && t.outstanding > 0 ? 'var(--overdue)' : 'var(--ink-faint)' }}
                        >
                          {dueRelative(hw.dueDate, now)}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 ${allIn ? 'chip chip-collected' : late ? 'chip chip-overdue' : 'chip chip-assigned'}`}
                      >
                        <span className="chip-dot" />
                        {allIn ? 'All in' : `${t.collected}/${t.total}`}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </div>
    </>
  )
}
