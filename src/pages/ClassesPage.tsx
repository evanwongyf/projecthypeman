import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../lib/data-context'
import { isOverdue, tally } from '../lib/status'
import { useNow } from '../lib/useNow'
import { ClassFormModal } from '../components/ClassFormModal'
import { Empty } from '../components/Empty'
import { IconClass, IconPlus } from '../components/Icons'
import { MetaItem, PageHeader } from '../components/PageHeader'

export function ClassesPage() {
  const { data, loading } = useData()
  const [adding, setAdding] = useState(false)
  const now = useNow()

  const rows = useMemo(
    () =>
      [...data.classes]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((cls) => {
          const roster = data.students.filter((s) => s.classId === cls.id)
          const homework = data.homework.filter((h) => h.classId === cls.id)
          const ids = roster.map((s) => s.id)
          const outstanding = homework.reduce((sum, hw) => sum + tally(hw, ids, now).outstanding, 0)
          const overdue = homework.filter((hw) => isOverdue(hw, now) && tally(hw, ids, now).outstanding > 0).length
          return { cls, roster: roster.length, homework: homework.length, outstanding, overdue }
        }),
    [data, now]
  )

  return (
    <>
      <PageHeader
        eyebrow="Classes"
        title="Classes"
        meta={!loading && <MetaItem label="total">{data.classes.length}</MetaItem>}
        actions={
          <button type="button" className="btn btn-primary" onClick={() => setAdding(true)}>
            <IconPlus />
            New class
          </button>
        }
      />

      <div className="p-5 sm:p-8">
        {loading ? (
          <p className="label">loading classes…</p>
        ) : rows.length === 0 ? (
          <Empty
            title="no classes yet"
            body="A class carries a school and a subject, holds its own roster, and is where you set homework."
            action={
              <button type="button" className="btn btn-primary" onClick={() => setAdding(true)}>
                <IconClass />
                Create a class
              </button>
            }
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {rows.map(({ cls, roster, homework, outstanding, overdue }) => (
              <Link
                key={cls.id}
                to={`/classes/${cls.id}`}
                className="panel row-hover flex flex-col gap-4 p-5 transition-colors"
              >
                <div>
                  <p className="label">{cls.school || 'no school set'}</p>
                  <h2 className="mt-1.5 text-lg font-semibold tracking-tight">{cls.name}</h2>
                  <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                    {cls.subject || 'no subject set'}
                  </p>
                </div>

                <dl className="mt-auto grid grid-cols-3 gap-3 border-t pt-4 hairline">
                  <Stat label="roster" value={roster} />
                  <Stat label="homework" value={homework} />
                  <Stat
                    label="outstanding"
                    value={outstanding}
                    tone={overdue > 0 ? 'var(--overdue)' : outstanding > 0 ? 'var(--assigned)' : undefined}
                  />
                </dl>
              </Link>
            ))}
          </div>
        )}
      </div>

      {adding && <ClassFormModal onClose={() => setAdding(false)} />}
    </>
  )
}

function Stat({ label, value, tone }: { label: string; value: number; tone?: string }) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="mono mt-1 text-xl font-semibold" style={{ color: tone ?? 'var(--ink)' }}>
        {value}
      </dd>
    </div>
  )
}
