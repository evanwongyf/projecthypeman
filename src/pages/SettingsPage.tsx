import { useState } from 'react'
import { useAuth } from '../lib/auth-context'
import { useData } from '../lib/data-context'
import { PageHeader } from '../components/PageHeader'
import { EffectsEditor } from '../components/points/EffectsEditor'

type Tab = 'effects' | 'account'

const TABS: { id: Tab; label: string }[] = [
  { id: 'effects', label: 'Effects' },
  { id: 'account', label: 'Account' },
]

export function SettingsPage() {
  const [tab, setTab] = useState<Tab>('effects')

  return (
    <>
      <PageHeader eyebrow="Settings" title="Settings" />

      <div className="border-b px-5 sm:px-8 hairline">
        <div role="tablist" className="-mb-px flex gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className="border-b-2 px-3 py-3 font-mono text-[11px] font-medium tracking-[0.1em] uppercase whitespace-nowrap transition-colors"
              style={{
                borderColor: tab === t.id ? 'var(--accent)' : 'transparent',
                color: tab === t.id ? 'var(--ink)' : 'var(--ink-soft)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'effects' ? <EffectsEditor /> : <AccountTab />}
    </>
  )
}

function AccountTab() {
  const { user } = useAuth()
  const { data } = useData()

  return (
    <div className="p-5 sm:p-8">
      <dl className="panel max-w-lg divide-y" style={{ borderColor: 'var(--line-soft)' }}>
        {(
          [
            ['name', user?.name ?? '-'],
            ['email', user?.email ?? '-'],
            ['username', user?.username ?? '-'],
            ['role', user?.role ?? '-'],
            ['classes', String(data.classes.length)],
            ['students', String(data.students.length)],
            ['homework set', String(data.homework.length)],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="px-5 py-3">
            <dt className="label">{k}</dt>
            <dd className="mt-1 truncate text-sm">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
