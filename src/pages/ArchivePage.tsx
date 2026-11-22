import { useEffect, useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Modal } from '../components/Modal'
import { Select } from '../components/Select'
import { APPAREL, type Material } from '../data/gear'
import { DISCIPLINES, type Discipline } from '../data/disciplines'
import { EconomyMath } from '../components/running/EconomyMath'
import { TheoryTab } from '../components/running/TheoryTab'
import { ShoesTab } from '../components/running/ShoeSection'
import { BarChart, ChartFrame } from '../components/charts/Charts'
import { MOISTURE_REGAIN } from '../data/materials'
import { DISCIPLINE_DETAILS } from '../data/disciplineDetails'
import { GLOSSARY } from '../data/glossary'
import { ESSENTIALS, IMAGE_BASE, loadExercises, videoSearchUrl, type Exercise } from '../data/exercises'

type Tab = 'theory' | 'disciplines' | 'economy' | 'training' | 'shoes' | 'apparel' | 'glossary'

const TABS: { id: Tab; label: string }[] = [
  { id: 'theory', label: 'Theory' },
  { id: 'disciplines', label: 'Disciplines' },
  { id: 'economy', label: 'Economy maths' },
  { id: 'training', label: 'Strength & plyo' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'apparel', label: 'Apparel' },
  { id: 'glossary', label: 'Glossary' },
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
        {tab === 'glossary' && <GlossaryTab />}
      </div>
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

      <StrengthProgramming />

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
          <dd className="mt-1 text-sm">{ex.secondary.length ? ex.secondary.map(cap).join(', ') : '-'}</dd>
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
      <div className="mb-6">
        <IntensitySpread />
      </div>
      <p className="label mb-3">{list.length} disciplines</p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((d) => (
          <button key={d.id} type="button" className="pick" onClick={() => setOpen(d)}>
            <span className="label block">
              {d.family} · {d.fame}
              {DISCIPLINE_DETAILS[d.id] ? ` · ${DISCIPLINE_DETAILS[d.id].intensity}` : ''}
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
          {DISCIPLINE_DETAILS[open.id] && (
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              {(
                [
                  ['intensity', DISCIPLINE_DETAILS[open.id].intensity],
                  ['who it suits', DISCIPLINE_DETAILS[open.id].forWhom],
                  ['why it works', DISCIPLINE_DETAILS[open.id].physiology],
                  ['how to progress', DISCIPLINE_DETAILS[open.id].progression],
                  ['common mistakes', DISCIPLINE_DETAILS[open.id].mistakes],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className={k === 'why it works' ? 'sm:col-span-2' : ''}>
                  <dt className="label">{k}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="panel mt-5 p-4" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)' }}>
            <p className="label">example session</p>
            <p className="mt-1.5 text-sm">{open.example}</p>
          </div>
          <h3 className="label mt-5">benefits</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            {open.benefits.map((b) => (
              <li key={b} className="flex gap-2">
                <span style={{ color: 'var(--accent)' }}>-</span>
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
      <ChartFrame
        title="How much water each fibre holds"
        subtitle="Commercial moisture regain, % of dry fibre mass at standard conditions"
        table={{ head: ['fibre', 'moisture regain %'], rows: MOISTURE_REGAIN.map((m) => [m.label, m.value]) }}
        interpretation={
          <p>
            Moisture regain is how much water a fibre takes up from humid air. Polyester ({MOISTURE_REGAIN[4].value}%) and
            polypropylene (≈0%) barely absorb water, so sweat stays on the surface where it can wick and evaporate, that is
            why they dry fast. Cotton ({MOISTURE_REGAIN[1].value}%) soaks it up, gets heavy and chafes. Wool absorbs the most (
            {MOISTURE_REGAIN[0].value}%) yet still feels dry and stays warm when wet, because water is held inside the fibre,
            great for socks and cold runs, less ideal for tropical heat.
          </p>
        }
        source="Values: ASTM D1909, Standard Table of Commercial Moisture Regains for Textile Fibers."
      >
        <BarChart rows={MOISTURE_REGAIN} unit="%" />
      </ChartFrame>
      <section className="panel max-w-3xl p-5">
        <h2 className="text-base font-semibold">Fabric terms</h2>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {(
            [
              ['Wicking', 'Capillary action pulling sweat along yarns to spread it out for evaporation. Works best in low-regain synthetics.'],
              ['Denier / gsm', 'Yarn thickness (denier) and fabric weight in grams per square metre (gsm). Lower numbers mean lighter, airier fabric.'],
              ['Knit vs woven', 'Knits stretch and breathe (tees, tights); wovens are stable and wind-resistant (shorts shells, jackets).'],
              ['Flatlock seams', 'Seams sewn flat against the fabric to reduce chafing.'],
              ['DWR', 'Durable water repellent, a surface finish that beads light rain without a membrane.'],
              ['Anti-odour finishes', 'Silver or zinc treatments that slow bacteria growth on synthetics, which otherwise hold smell.'],
            ] as const
          ).map(([k, v]) => (
            <div key={k}>
              <dt className="text-sm font-semibold">{k}</dt>
              <dd className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="panel max-w-3xl p-5">
        <h2 className="text-base font-semibold">Hot and humid runs</h2>
        <ul className="mt-3 space-y-1.5 text-sm">
          {[
            'Light colours and loose singlets or vented tees.',
            'Synthetic or merino socks, never cotton, to cut blisters.',
            'Split or short-inseam shorts with a liner; anti-chafe balm on long runs.',
            'A cap or visor for sun; sunglasses on bright days.',
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span style={{ color: 'var(--accent)' }}>-</span>
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

// ---------- added depth ----------

function IntensitySpread() {
  const order = ['Easy', 'Steady', 'Threshold', 'VO₂max', 'Speed', 'Mixed'] as const
  const rows = order
    .map((k) => ({ label: k, value: DISCIPLINES.filter((d) => DISCIPLINE_DETAILS[d.id]?.intensity === k).length }))
    .filter((r) => r.value > 0)
  return (
    <ChartFrame
      title="Where these methods sit on the intensity scale"
      subtitle={`Number of the ${DISCIPLINES.length} disciplines by main intensity`}
      table={{ head: ['intensity', 'disciplines'], rows: rows.map((r) => [r.label, r.value]) }}
      interpretation={
        <p>
          Most named workouts are hard sessions, because that is what gets names, but most of your running should be easy.
          Pick one or two quality sessions a week from the threshold, VO₂max and mixed groups, and fill the rest of the week
          with the easy methods.
        </p>
      }
    >
      <BarChart rows={rows} unit="methods" />
    </ChartFrame>
  )
}

function StrengthProgramming() {
  const phases = [
    ['Foundation', 'Weeks 1–4', '2 × week', '2–3 sets × 8–12 reps, moderate load (3–4 reps in reserve)', 'Learn technique; build tendon tolerance'],
    ['Strength', 'Weeks 5–10', '2 × week', '3–4 sets × 4–6 reps, heavy (1–2 in reserve)', 'Neuromuscular gains and tendon stiffness that improve economy'],
    ['Power', 'Weeks 11–14', '1–2 × week', '3 sets × 3–5 reps heavy + explosive jumps', 'Convert strength to rate of force development'],
    ['Race season', 'Ongoing', '1 × week', '2 sets × 3–5 reps heavy, low volume', 'Maintain gains without fatigue'],
  ]
  const plyo = [
    ['Weeks 1–2', '40–60', 'Pogo hops, ankle hops, low skips'],
    ['Weeks 3–4', '60–80', 'Add lateral hops and short bounds'],
    ['Weeks 5–8', '80–100', 'Single-leg hops, hurdle hops'],
    ['Weeks 9+', '80–120', 'Bounding, box jumps; depth jumps only if well adapted'],
  ]
  return (
    <section className="mt-10 space-y-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">How to programme it</h2>
        <p className="mt-1 max-w-3xl text-sm" style={{ color: 'var(--ink-soft)' }}>
          A sensible template drawn from the studies in the Theory tab: start moderate, go heavy, then keep a little in race
          season. Lift on hard-run days (after the run) so easy days stay easy.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="panel w-full text-left text-sm">
          <thead>
            <tr>
              {['phase', 'when', 'frequency', 'sets × reps', 'aim'].map((h) => (
                <th key={h} className="label px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {phases.map((r) => (
              <tr key={r[0]} className="border-t hairline">
                {r.map((c, i) => (
                  <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-semibold' : ''}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="panel w-full text-left text-sm">
          <thead>
            <tr>
              {['plyometric block', 'foot contacts / session', 'exercises'].map((h) => (
                <th key={h} className="label px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plyo.map((r) => (
              <tr key={r[0]} className="border-t hairline">
                {r.map((c, i) => (
                  <td key={i} className={`px-4 py-3 ${i === 1 ? 'mono' : ''}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            ['1RM', 'One-rep max, the heaviest load you can lift once with good form.'],
            ['Reps in reserve', 'How many more reps you could have done. 1–2 RIR is heavy but safe.'],
            ['Eccentric', 'The lengthening phase of a lift (lowering). Strong eccentrics protect tendons.'],
            ['Rate of force development', 'How fast you can produce force, what plyometrics train.'],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="panel p-3">
            <dt className="text-sm font-semibold">{k}</dt>
            <dd className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function GlossaryTab() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const list = GLOSSARY.filter((g) => !q || g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q))
  return (
    <>
      <div className="mb-5 flex flex-wrap items-end gap-4">
        <div className="w-full max-w-sm">
          <span className="label block">search terms</span>
          <input className="field mt-1.5" placeholder="lactate, drop, VDOT…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <p className="label pb-2.5">{list.length} terms</p>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((g) => (
          <div key={g.term} className="panel p-4">
            <p className="label">{g.area}</p>
            <dt className="mt-1 text-sm font-semibold">{g.term}</dt>
            <dd className="mt-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
              {g.def}
            </dd>
          </div>
        ))}
      </dl>
    </>
  )
}
