import { useEffect, useMemo, useState } from 'react'
import { allMeds, classBlurb, classList, loadMeds, medsLoaded, PILL_ART } from '../../lib/medicine/meds'
import type { Medication } from '../../lib/medicine/meds'
import { Pills, soft } from '../sports/shared'
import { NativeSelect } from '../../../components/NativeSelect'

// A searchable browser over the medication reference, with real pill photos where the NIH
// Pillbox archive has one. `fixedClass` locks the browser to one drug class, for use inside
// that class's guide; the full browser (no fixedClass) lets you search everything.

const STATUS_COLOR: Record<string, string> = { OTC: 'var(--mint)', Rx: 'var(--teal)' }
const statusColor = (s: string) => STATUS_COLOR[s] ?? 'var(--pink)' // controlled schedules

function PillThumb({ m, size = 96 }: { m: Medication; size?: number }) {
  const [broken, setBroken] = useState(false)
  if (!m.pill || broken) {
    return (
      <div
        className="flex shrink-0 items-center justify-center rounded-full border text-2xl"
        style={{ width: size, height: size, borderColor: 'var(--line)', background: 'var(--paper-2)' }}
        aria-hidden
      >
        {m.forms[0] === 'Injection' ? '💉' : m.forms[0]?.includes('Cream') || m.forms[0]?.includes('Gel') || m.forms[0]?.includes('Ointment') ? '🧴' : m.forms[0] === 'Inhaler' ? '💨' : m.forms[0]?.includes('drops') ? '💧' : '💊'}
      </div>
    )
  }
  return (
    <img
      src={PILL_ART(m.pill.splimage, true)}
      alt={`${m.generic}, ${m.pill.color} ${m.pill.shape} ${m.pill.dosageForm}`}
      loading="lazy"
      decoding="async"
      onError={() => setBroken(true)}
      className="shrink-0 rounded-full border object-contain p-1"
      style={{ width: size, height: size, borderColor: 'var(--line)', background: 'var(--paper-2)' }}
    />
  )
}

function MedCard({ m, onClick, selected }: { m: Medication; onClick: () => void; selected?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="flex w-40 flex-col items-center gap-1.5 rounded-[var(--radius)] border p-2.5 text-center sm:w-44"
      style={{ borderColor: selected ? 'var(--orange)' : 'var(--ink)', background: 'var(--surface)', outline: selected ? '3px solid var(--orange)' : undefined, boxShadow: 'var(--shadow-card)' }}
    >
      <PillThumb m={m} />
      <span className="text-xs font-bold leading-snug">{m.generic}</span>
      <span className="text-[10px] leading-snug" style={soft}>
        {m.brands[0] ?? m.brandNote ?? ''}
      </span>
      <span className="rounded-full border px-1.5 py-0.5 text-[9px] font-bold uppercase" style={{ borderColor: 'var(--line)', background: statusColor(m.status) }}>
        {m.status}
      </span>
    </button>
  )
}

function MedDetail({ m }: { m: Medication }) {
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius)] border p-3 sm:p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="flex flex-wrap items-start gap-3">
        <PillThumb m={m} size={120} />
        <div className="min-w-0 flex-1">
          <p className="text-lg font-bold leading-tight">{m.generic}</p>
          <p className="text-sm" style={soft}>
            {m.brands.length ? m.brands.join(', ') : m.brandNote ?? 'generic'}
          </p>
          <div className="mt-1 flex flex-wrap gap-1">
            <span className="rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase" style={{ borderColor: 'var(--line)', background: statusColor(m.status) }}>
              {m.status}
            </span>
            <span className="rounded-full border px-2 py-0.5 text-[10px] font-bold" style={{ borderColor: 'var(--line)' }}>
              {m.class}
            </span>
            {m.forms.map((f) => (
              <span key={f} className="rounded-full border px-2 py-0.5 text-[10px]" style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
      {m.pill && (
        <p className="text-xs" style={soft}>
          Photographed tablet/capsule on file: {m.pill.color.toLowerCase()}, {m.pill.shape.toLowerCase()}
          {m.pill.dosageForm ? `, ${m.pill.dosageForm.toLowerCase()}` : ''}
          {m.pill.imprint ? `, imprinted “${m.pill.imprint}”` : ''}. One example appearance among many manufacturers; your tablet may look different. Source: NIH National Library of Medicine Pillbox archive (public domain).
        </p>
      )}
      <dl className="flex flex-col gap-2 text-sm leading-relaxed">
        <div>
          <dt className="font-bold">Used for</dt>
          <dd>{m.uses}</dd>
        </div>
        <div>
          <dt className="font-bold">How it works</dt>
          <dd>{m.mechanism}</dd>
        </div>
        <div>
          <dt className="font-bold">Common side effects</dt>
          <dd>{m.commonSE.join(', ') || 'none typically noted'}</dd>
        </div>
        <div>
          <dt className="font-bold" style={{ color: '#b3331f' }}>
            Serious, seek care for
          </dt>
          <dd>{m.seriousSE.join('; ') || 'none specifically noted'}</dd>
        </div>
        <div>
          <dt className="font-bold">Good to know</dt>
          <dd>{m.warning}</dd>
        </div>
        <div>
          <dt className="font-bold">Pregnancy</dt>
          <dd>{m.pregnancy}</dd>
        </div>
      </dl>
    </div>
  )
}

export default function MedBrowser({ fixedClass }: { fixedClass?: string }) {
  const [ready, setReady] = useState(medsLoaded())
  useEffect(() => {
    if (!ready) loadMeds().then(() => setReady(true))
  }, [ready])
  const [cls, setCls] = useState<string>(fixedClass ?? 'all')
  const [status, setStatus] = useState<string>('all')
  const [q, setQ] = useState('')
  const [sel, setSel] = useState<string | null>(null)

  const classes = useMemo(() => classList(), [ready])
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return allMeds().filter(
      (m) =>
        (fixedClass ? m.class === fixedClass : cls === 'all' || m.class === cls) &&
        (status === 'all' || m.status === status) &&
        (!needle || m.generic.toLowerCase().includes(needle) || m.brands.some((b) => b.toLowerCase().includes(needle)) || m.uses.toLowerCase().includes(needle)),
    )
  }, [cls, status, q, ready, fixedClass])
  const cur = list.find((m) => m.id === sel) ?? list[0]

  if (!ready) {
    return <div className="h-72 w-full max-w-4xl animate-pulse rounded-[var(--radius)]" style={{ background: 'var(--paper-2)' }} aria-busy />
  }

  return (
    <div className="flex max-w-4xl flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {!fixedClass && (
          <NativeSelect value={cls} onChange={(e) => setCls(e.target.value)} className="max-w-full rounded-[var(--radius)] border px-2 py-1 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper)', color: 'var(--ink)' }} aria-label="Drug class">
            <option value="all">All classes</option>
            {classes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </NativeSelect>
        )}
        <Pills<string> value={status} options={[['all', 'All'], ['OTC', 'OTC'], ['Rx', 'Rx'], ['C-II', 'C-II'], ['C-III', 'C-III'], ['C-IV', 'C-IV']]} onChange={setStatus} label="Status" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name or use" className="rounded-[var(--radius)] border px-2 py-1 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper)', color: 'var(--ink)' }} aria-label="Search medications" />
        <span className="text-xs" style={soft}>
          {list.length} of {allMeds().length}
        </span>
      </div>
      {!fixedClass && cls !== 'all' && <p className="text-xs leading-relaxed" style={soft}>{classBlurb(cls)}</p>}
      <div className="flex flex-wrap gap-5">
        <div className="flex min-w-72 flex-[2] flex-wrap gap-2.5">
          {list.map((m) => (
            <MedCard key={m.id} m={m} onClick={() => setSel(m.id)} selected={cur?.id === m.id} />
          ))}
          {!list.length && (
            <p className="text-sm" style={soft}>
              No medication matches that.
            </p>
          )}
        </div>
        <div className="min-w-72 flex-1">{cur && <MedDetail m={cur} />}</div>
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Educational reference only, not medical advice. Dosing, interactions and suitability depend on your health history; always follow the label and your pharmacist or doctor. Pill photos are from the NIH National Library of Medicine’s Pillbox archive (public domain, frozen August 2020) and show one example appearance; the same medicine looks different by manufacturer, and some forms (injections, inhalers, patches) are not photographed this way.
      </p>
    </div>
  )
}
