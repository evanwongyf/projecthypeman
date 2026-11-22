import { useEffect, useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Modal } from '../components/Modal'
import { Select } from '../components/Select'
import { THEORY, type TheoryArticle } from '../data/theory'
import { APPAREL, MIDSOLE_FOAMS, SHOE_PARTS, SHOE_TYPES, type Material } from '../data/gear'
import { SHOES, type Shoe } from '../data/shoes'
import { DISCIPLINES, type Discipline } from '../data/disciplines'
import { EconomyMath } from '../components/running/EconomyMath'
import { ESSENTIALS, IMAGE_BASE, loadExercises, videoSearchUrl, type Exercise } from '../data/exercises'

type Tab = 'theory' | 'disciplines' | 'economy' | 'training' | 'shoes' | 'apparel'

const TABS: { id: Tab; label: string }[] = [
  { id: 'theory', label: 'Theory' },
  { id: 'disciplines', label: 'Disciplines' },
  { id: 'economy', label: 'Economy maths' },
  { id: 'training', label: 'Strength & plyo' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'apparel', label: 'Apparel' },
]

export function ArchivePage() {
  const [tab, setTab] = useState<Tab>('theory')
  return (
    <>
      <PageHeader eyebrow="Running" title="Archive" />
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
      <div className="p-5 sm:p-8">
        {tab === 'theory' && <TheoryTab />}
        {tab === 'disciplines' && <DisciplinesTab />}
        {tab === 'economy' && <EconomyMath />}
        {tab === 'training' && <TrainingTab />}
        {tab === 'shoes' && <ShoesTab />}
        {tab === 'apparel' && <ApparelTab />}
      </div>
    </>
  )
}

// ---------- theory ----------

function TheoryTab() {
  const [topic, setTopic] = useState('')
  const [open, setOpen] = useState<TheoryArticle | null>(null)
  const topics = [...new Set(THEORY.map((a) => a.topic))]
  const list = THEORY.filter((a) => !topic || a.topic === topic)

  return (
    <>
      <div className="mb-5 max-w-xs">
        <span className="label block">topic</span>
        <Select
          className="mt-1.5"
          ariaLabel="Topic"
          value={topic}
          onChange={setTopic}
          options={[{ value: '', label: 'All topics' }, ...topics.map((t) => ({ value: t, label: t }))]}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((a) => (
          <button key={a.id} type="button" className="pick" onClick={() => setOpen(a)}>
            <span className="label block">{a.topic}</span>
            <span className="mt-1.5 block text-base leading-snug font-semibold">{a.title}</span>
            <span className="mt-1.5 block text-sm" style={{ color: 'var(--ink-soft)' }}>
              {a.summary}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs" style={{ color: 'var(--ink-faint)' }}>
        Plain-language summaries of mainstream coaching and sports-science consensus. A starting point, not medical advice.
      </p>

      {open && (
        <Modal eyebrow={open.topic} title={open.title} onClose={() => setOpen(null)} wide>
          <div className="space-y-3 text-sm leading-relaxed">
            {open.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <h3 className="label mt-6">key points</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            {open.keyPoints.map((k) => (
              <li key={k} className="flex gap-2">
                <span style={{ color: 'var(--accent)' }}>—</span>
                {k}
              </li>
            ))}
          </ul>
          <div className="panel mt-6 p-4" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)' }}>
            <p className="label">try this</p>
            <p className="mt-1.5 text-sm">{open.tryThis}</p>
          </div>
        </Modal>
      )}
    </>
  )
}

// ---------- strength & plyometrics ----------

const GROUPS = [
  { value: '', label: 'All types' },
  { value: 'strength', label: 'Strength' },
  { value: 'plyometrics', label: 'Plyometrics' },
  { value: 'mobility', label: 'Mobility & stretching' },
  { value: 'conditioning', label: 'Conditioning' },
]

function TrainingTab() {
  const [all, setAll] = useState<Exercise[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('')
  const [muscle, setMuscle] = useState('')
  const [level, setLevel] = useState('')
  const [equipment, setEquipment] = useState('')
  const [open, setOpen] = useState<Exercise | null>(null)

  useEffect(() => {
    loadExercises()
      .then(setAll)
      .catch(() => setError('Could not load the exercise library.'))
  }, [])

  const byId = useMemo(() => new Map((all ?? []).map((e) => [e.id, e])), [all])
  const muscles = useMemo(() => [...new Set((all ?? []).flatMap((e) => e.primary))].sort(), [all])
  const equipments = useMemo(() => [...new Set((all ?? []).map((e) => e.equipment))].sort(), [all])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (all ?? []).filter(
      (e) =>
        (!q || e.name.toLowerCase().includes(q)) &&
        (!group || e.group === group) &&
        (!muscle || e.primary.includes(muscle)) &&
        (!level || e.level === level) &&
        (!equipment || e.equipment === equipment)
    )
  }, [all, query, group, muscle, level, equipment])

  if (error) return <p className="font-mono text-xs" style={{ color: 'var(--overdue)' }}>{error}</p>
  if (!all) return <p className="label">loading exercises…</p>

  return (
    <>
      <section>
        <h2 className="text-lg font-semibold tracking-tight">Runner essentials</h2>
        <p className="mt-1 max-w-2xl text-sm" style={{ color: 'var(--ink-soft)' }}>
          A starter set. Two sessions a week: pick 3–4 strength moves (3 × 5–8, heavy-ish) and 2 plyometrics (40–60 total contacts), after a warm-up and not after a hard run.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ESSENTIALS.map(({ id, why }) => {
            const ex = byId.get(id)
            return ex ? <ExerciseCard key={id} ex={ex} note={why} onOpen={() => setOpen(ex)} /> : null
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Library</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <span className="label block">search</span>
            <input className="field mt-1.5" placeholder="lunge, hop, calf…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div>
            <span className="label block">type</span>
            <Select className="mt-1.5" ariaLabel="Type" value={group} onChange={setGroup} options={GROUPS} />
          </div>
          <div>
            <span className="label block">muscle</span>
            <Select
              className="mt-1.5"
              ariaLabel="Muscle"
              value={muscle}
              onChange={setMuscle}
              options={[{ value: '', label: 'All muscles' }, ...muscles.map((m) => ({ value: m, label: cap(m) }))]}
            />
          </div>
          <div>
            <span className="label block">level</span>
            <Select
              className="mt-1.5"
              ariaLabel="Level"
              value={level}
              onChange={setLevel}
              options={[
                { value: '', label: 'All levels' },
                { value: 'beginner', label: 'Beginner' },
                { value: 'intermediate', label: 'Intermediate' },
                { value: 'expert', label: 'Expert' },
              ]}
            />
          </div>
          <div>
            <span className="label block">equipment</span>
            <Select
              className="mt-1.5"
              ariaLabel="Equipment"
              value={equipment}
              onChange={setEquipment}
              options={[{ value: '', label: 'Any equipment' }, ...equipments.map((m) => ({ value: m, label: cap(m) }))]}
            />
          </div>
        </div>
        <p className="label mt-4">{list.length} exercises</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((ex) => (
            <ExerciseCard key={ex.id} ex={ex} onOpen={() => setOpen(ex)} />
          ))}
        </div>
        <p className="mt-6 text-xs" style={{ color: 'var(--ink-faint)' }}>
          Exercises and photos from{' '}
          <a className="underline" href="https://github.com/yuhonas/free-exercise-db" target="_blank" rel="noreferrer">
            free-exercise-db
          </a>{' '}
          (public domain). Video links open a YouTube search for form demos.
        </p>
      </section>

      {open && <ExerciseModal ex={open} onClose={() => setOpen(null)} />}
    </>
  )
}

function ExerciseCard({ ex, note, onOpen }: { ex: Exercise; note?: string; onOpen: () => void }) {
  return (
    <button type="button" className="pick !p-0 overflow-hidden" onClick={onOpen}>
      {ex.images[0] && (
        <img
          src={IMAGE_BASE + ex.images[0]}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
          style={{ background: 'var(--panel-2)' }}
        />
      )}
      <span className="block p-3">
        <span className="label block">{ex.group}</span>
        <span className="mt-1 block text-sm leading-snug font-semibold">{ex.name}</span>
        <span className="mono mt-1 block text-[10px]" style={{ color: 'var(--ink-faint)' }}>
          {ex.primary.join(', ')} · {ex.level}
        </span>
        {note && (
          <span className="mt-2 block text-xs" style={{ color: 'var(--ink-soft)' }}>
            {note}
          </span>
        )}
      </span>
    </button>
  )
}

/** Flips between the start and end photos so the movement reads like a short clip. */
function ExerciseModal({ ex, onClose }: { ex: Exercise; onClose: () => void }) {
  const [frame, setFrame] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing || ex.images.length < 2) return
    const t = setInterval(() => setFrame((f) => (f + 1) % ex.images.length), 900)
    return () => clearInterval(t)
  }, [playing, ex.images.length])

  return (
    <Modal eyebrow={`${ex.group} · ${ex.level}`} title={ex.name} onClose={onClose} wide>
      {ex.images.length > 0 && (
        <div className="relative">
          <img src={IMAGE_BASE + ex.images[frame]} alt={`${ex.name}, position ${frame + 1}`} className="frame aspect-[4/3] w-full object-contain" />
          {ex.images.length > 1 && (
            <button type="button" className="btn absolute right-2 bottom-2" onClick={() => setPlaying((p) => !p)}>
              {playing ? 'Pause' : 'Play'}
            </button>
          )}
        </div>
      )}

      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div>
          <dt className="label">primary</dt>
          <dd className="mt-1 text-sm">{ex.primary.map(cap).join(', ')}</dd>
        </div>
        <div>
          <dt className="label">secondary</dt>
          <dd className="mt-1 text-sm">{ex.secondary.length ? ex.secondary.map(cap).join(', ') : '—'}</dd>
        </div>
        <div>
          <dt className="label">equipment</dt>
          <dd className="mt-1 text-sm">{cap(ex.equipment)}</dd>
        </div>
      </dl>

      <h3 className="label mt-5">how to</h3>
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed">
        {ex.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <a className="btn btn-primary mt-5" href={videoSearchUrl(ex.name)} target="_blank" rel="noreferrer">
        Watch form videos
      </a>
    </Modal>
  )
}

// ---------- shoes ----------

function ShoesTab() {
  return (
    <div className="space-y-10">
      <ShoeCatalogue />

      <section>
        <h2 className="text-lg font-semibold tracking-tight">Shoe types</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {SHOE_TYPES.map((t) => (
            <div key={t.id} className="panel p-4">
              <h3 className="text-base font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                {t.what}
              </p>
              <p className="label mt-3">good for</p>
              <p className="mt-1 text-sm">{t.goodFor}</p>
              <p className="label mt-3">watch out</p>
              <p className="mt-1 text-sm">{t.watchOut}</p>
            </div>
          ))}
        </div>
      </section>

      <MaterialGrid title="Midsole foams" items={MIDSOLE_FOAMS} />
      <MaterialGrid title="Plates, geometry and outsoles" items={SHOE_PARTS} />
    </div>
  )
}

const KIND_LABEL: Record<Shoe['kind'], string> = {
  daily: 'Daily trainer',
  max: 'Max cushion',
  stability: 'Stability',
  tempo: 'Tempo / speed',
  race: 'Plated racer',
  trail: 'Trail',
  minimal: 'Low / zero drop',
}

function ShoeCatalogue() {
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState('')
  const [brand, setBrand] = useState('')
  const [plate, setPlate] = useState('')
  const [drop, setDrop] = useState('')
  const [open, setOpen] = useState<Shoe | null>(null)
  const brands = [...new Set(SHOES.map((s) => s.brand))].sort()

  const q = query.trim().toLowerCase()
  const list = SHOES.filter((s) => {
    if (q && !`${s.brand} ${s.model} ${s.foam} ${s.description}`.toLowerCase().includes(q)) return false
    if (kind && s.kind !== kind) return false
    if (brand && s.brand !== brand) return false
    if (plate === 'carbon' && !/carbon/i.test(s.plate)) return false
    if (plate === 'any' && s.plate === 'None') return false
    if (plate === 'none' && s.plate !== 'None') return false
    if (drop === 'low' && !(s.dropMm !== null && s.dropMm <= 4)) return false
    if (drop === 'mid' && !(s.dropMm !== null && s.dropMm > 4 && s.dropMm <= 8)) return false
    if (drop === 'high' && !(s.dropMm !== null && s.dropMm > 8)) return false
    return true
  })

  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">Shoe catalogue</h2>
      <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
        {SHOES.length} popular models across {brands.length} brands.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <span className="label block">search</span>
          <input className="field mt-1.5" placeholder="model, foam…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div>
          <span className="label block">type</span>
          <Select
            className="mt-1.5"
            ariaLabel="Shoe type"
            value={kind}
            onChange={setKind}
            options={[{ value: '', label: 'All types' }, ...Object.entries(KIND_LABEL).map(([value, label]) => ({ value, label }))]}
          />
        </div>
        <div>
          <span className="label block">brand</span>
          <Select
            className="mt-1.5"
            ariaLabel="Brand"
            value={brand}
            onChange={setBrand}
            options={[{ value: '', label: 'All brands' }, ...brands.map((b) => ({ value: b, label: b }))]}
          />
        </div>
        <div>
          <span className="label block">plate</span>
          <Select
            className="mt-1.5"
            ariaLabel="Plate"
            value={plate}
            onChange={setPlate}
            options={[
              { value: '', label: 'Any' },
              { value: 'carbon', label: 'Carbon' },
              { value: 'any', label: 'Any plate or rods' },
              { value: 'none', label: 'No plate' },
            ]}
          />
        </div>
        <div>
          <span className="label block">drop</span>
          <Select
            className="mt-1.5"
            ariaLabel="Drop"
            value={drop}
            onChange={setDrop}
            options={[
              { value: '', label: 'Any drop' },
              { value: 'low', label: 'Low (0–4 mm)' },
              { value: 'mid', label: 'Mid (5–8 mm)' },
              { value: 'high', label: 'High (9 mm+)' },
            ]}
          />
        </div>
      </div>
      <p className="label mt-4">{list.length} shoes</p>

      <ul className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((s) => (
          <li key={s.brand + s.model}>
            <button type="button" className="pick h-full" onClick={() => setOpen(s)}>
              <span className="label block">
                {s.brand} · {KIND_LABEL[s.kind]}
              </span>
              <span className="mt-1 block text-base font-semibold">{s.model}</span>
              <span className="mt-1.5 block text-sm" style={{ color: 'var(--ink-soft)' }}>
                {s.description}
              </span>
              <span className="mt-3 grid grid-cols-3 gap-2">
                <MiniSpec label="foam" value={s.foam} />
                <MiniSpec label="plate" value={s.plate} />
                <MiniSpec label="drop" value={s.dropMm === null ? '—' : `${s.dropMm} mm`} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-2xl text-xs" style={{ color: 'var(--ink-faint)' }}>
        Compiled from brand-published information for the version named. Drop is left blank where it was not certain. Shoes
        are revised often and labs measure drop and stack differently — check the current version before buying.
      </p>

      {open && <ShoeModal shoe={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

function MiniSpec({ label, value }: { label: string; value: string }) {
  return (
    <span className="block min-w-0">
      <span className="label block">{label}</span>
      <span className="mt-0.5 block truncate text-xs">{value}</span>
    </span>
  )
}

function ShoeModal({ shoe, onClose }: { shoe: Shoe; onClose: () => void }) {
  const specs: [string, string][] = [
    ['surface', shoe.surface === 'road' ? 'Road' : 'Trail'],
    ['midsole foam', shoe.foam],
    ['plate', shoe.plate],
    ['heel-to-toe drop', shoe.dropMm === null ? 'Not listed here' : `${shoe.dropMm} mm`],
    ['upper', shoe.upper],
    ['outsole', shoe.outsole],
  ]
  return (
    <Modal eyebrow={`${shoe.brand} · ${KIND_LABEL[shoe.kind]}`} title={shoe.model} onClose={onClose} wide>
      <p className="text-sm leading-relaxed">{shoe.description}</p>
      <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {specs.map(([k, v]) => (
          <div key={k}>
            <dt className="label">{k}</dt>
            <dd className="mt-1 text-sm">{v}</dd>
          </div>
        ))}
      </dl>
      <h3 className="label mt-5">best for</h3>
      <p className="mt-1 text-sm">{shoe.bestFor}</p>
      <h3 className="label mt-5">features</h3>
      <ul className="mt-2 space-y-1.5 text-sm">
        {shoe.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span style={{ color: 'var(--accent)' }}>—</span>
            {f}
          </li>
        ))}
      </ul>
    </Modal>
  )
}

// ---------- disciplines ----------

function DisciplinesTab() {
  const [family, setFamily] = useState('')
  const [fame, setFame] = useState('')
  const [open, setOpen] = useState<Discipline | null>(null)
  const families = [...new Set(DISCIPLINES.map((d) => d.family))]
  const list = DISCIPLINES.filter((d) => (!family || d.family === family) && (!fame || d.fame === fame))

  return (
    <>
      <div className="mb-5 grid max-w-xl gap-3 sm:grid-cols-2">
        <div>
          <span className="label block">family</span>
          <Select
            className="mt-1.5"
            ariaLabel="Family"
            value={family}
            onChange={setFamily}
            options={[{ value: '', label: 'All families' }, ...families.map((f) => ({ value: f, label: f }))]}
          />
        </div>
        <div>
          <span className="label block">how well known</span>
          <Select
            className="mt-1.5"
            ariaLabel="How well known"
            value={fame}
            onChange={setFame}
            options={[
              { value: '', label: 'All' },
              { value: 'Classic', label: 'Classics' },
              { value: 'Well known', label: 'Well known' },
              { value: 'Deep cut', label: 'Deep cuts' },
            ]}
          />
        </div>
      </div>
      <p className="label mb-3">{list.length} disciplines</p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((d) => (
          <button key={d.id} type="button" className="pick" onClick={() => setOpen(d)}>
            <span className="label block">
              {d.family} · {d.fame}
            </span>
            <span className="mt-1.5 block text-base leading-snug font-semibold">{d.name}</span>
            <span className="mt-1.5 block text-sm" style={{ color: 'var(--ink-soft)' }}>
              {d.how}
            </span>
          </button>
        ))}
      </div>

      {open && (
        <Modal eyebrow={`${open.family} · ${open.fame}`} title={open.name} onClose={() => setOpen(null)} wide>
          <h3 className="label">origin</h3>
          <p className="mt-1 text-sm">{open.origin}</p>
          <h3 className="label mt-5">how it works</h3>
          <p className="mt-1 text-sm leading-relaxed">{open.how}</p>
          <div className="panel mt-5 p-4" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)' }}>
            <p className="label">example session</p>
            <p className="mt-1.5 text-sm">{open.example}</p>
          </div>
          <h3 className="label mt-5">benefits</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            {open.benefits.map((b) => (
              <li key={b} className="flex gap-2">
                <span style={{ color: 'var(--accent)' }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  )
}

// ---------- apparel ----------

function ApparelTab() {
  return (
    <div className="space-y-10">
      <MaterialGrid title="Fabrics and construction" items={APPAREL} />
      <section className="panel max-w-3xl p-5">
        <h2 className="text-base font-semibold">Hot and humid runs</h2>
        <ul className="mt-3 space-y-1.5 text-sm">
          {[
            'Light colours and loose singlets or vented tees.',
            'Synthetic or merino socks — never cotton — to cut blisters.',
            'Split or short-inseam shorts with a liner; anti-chafe balm on long runs.',
            'A cap or visor for sun; sunglasses on bright days.',
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span style={{ color: 'var(--accent)' }}>—</span>
              {t}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function MaterialGrid({ title, items }: { title: string; items: Material[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((m) => (
          <div key={m.name} className="panel p-4">
            <h3 className="text-base font-semibold">{m.name}</h3>
            <p className="label mt-1">{m.kind}</p>
            <p className="label mt-3">feel</p>
            <p className="mt-1 text-sm">{m.feel}</p>
            <p className="label mt-3">notes</p>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
              {m.notes}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
