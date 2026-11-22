import { useMemo, useState } from 'react'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { BarChart, ChartFrame, ScatterChart } from '../charts/Charts'
import { SHOES, type Shoe } from '../../data/shoes'
import { SHOE_SPECS, type ShoeSpec } from '../../data/shoeSpecs'
import { MIDSOLE_FOAMS, SHOE_PARTS, SHOE_TYPES, type Material } from '../../data/gear'
import { FOAM_FAMILIES, SHOE_ANATOMY, foamFamilyOf, stackBand } from '../../data/materials'

const KIND_LABEL: Record<Shoe['kind'], string> = {
  daily: 'Daily trainer',
  max: 'Max cushion',
  stability: 'Stability',
  tempo: 'Tempo / speed',
  race: 'Plated racer',
  trail: 'Trail',
  minimal: 'Low / zero drop',
}

type Merged = Shoe & { spec: ShoeSpec | null; drop: number | null }

/** Catalogue entry plus measured specs, preferring the brand-stated drop from the spec page when present. */
const MERGED: Merged[] = SHOES.map((s) => {
  const spec = SHOE_SPECS[`${s.brand} ${s.model}`] ?? null
  return {
    ...s,
    spec,
    drop: spec?.brandDropMm ?? s.dropMm,
    outsole: spec?.outsole ?? s.outsole,
    upper: spec?.upper ?? s.upper,
  }
})

function median(xs: number[]) {
  if (!xs.length) return NaN
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

/** Median lab weight per kind, for "lighter/heavier than typical" notes. */
const MEDIAN_WEIGHT: Record<string, number> = Object.fromEntries(
  (Object.keys(KIND_LABEL) as Shoe['kind'][]).map((k) => [k, median(MERGED.filter((m) => m.kind === k && m.spec).map((m) => m.spec!.weightG))])
)

export function ShoesTab() {
  return (
    <div className="space-y-12">
      <ShoeCatalogue />
      <ShoeInsights />
      <Anatomy />
      <FoamFamilies />

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

      <MaterialGrid title="Midsole foams at a glance" items={MIDSOLE_FOAMS} />
      <MaterialGrid title="Plates, geometry and outsoles" items={SHOE_PARTS} />
    </div>
  )
}

// ---------- catalogue ----------

function ShoeCatalogue() {
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState('')
  const [brand, setBrand] = useState('')
  const [plate, setPlate] = useState('')
  const [drop, setDrop] = useState('')
  const [sort, setSort] = useState('brand')
  const [open, setOpen] = useState<Merged | null>(null)
  const brands = [...new Set(MERGED.map((s) => s.brand))].sort()

  const q = query.trim().toLowerCase()
  const list = MERGED.filter((s) => {
    if (q && !`${s.brand} ${s.model} ${s.foam} ${s.description} ${s.outsole}`.toLowerCase().includes(q)) return false
    if (kind && s.kind !== kind) return false
    if (brand && s.brand !== brand) return false
    if (plate === 'carbon' && !/carbon/i.test(s.plate)) return false
    if (plate === 'any' && s.plate === 'None') return false
    if (plate === 'none' && s.plate !== 'None') return false
    if (drop === 'low' && !(s.drop !== null && s.drop <= 4)) return false
    if (drop === 'mid' && !(s.drop !== null && s.drop > 4 && s.drop <= 8)) return false
    if (drop === 'high' && !(s.drop !== null && s.drop > 8)) return false
    return true
  }).sort((a, b) => {
    if (sort === 'weight') return (a.spec?.weightG ?? 1e9) - (b.spec?.weightG ?? 1e9)
    if (sort === 'stack') return (b.spec?.heelMm ?? -1) - (a.spec?.heelMm ?? -1)
    if (sort === 'price') return (a.spec?.msrpUsd ?? 1e9) - (b.spec?.msrpUsd ?? 1e9)
    return `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`)
  })

  const measured = MERGED.filter((m) => m.spec).length

  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">Shoe catalogue</h2>
      <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
        {MERGED.length} popular models across {brands.length} brands · {measured} with lab-measured weight and stack.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <div className="sm:col-span-3 lg:col-span-1">
          <span className="label block">search</span>
          <input className="field mt-1.5" placeholder="model, foam, rubber…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <Filter label="type" value={kind} onChange={setKind} options={[{ value: '', label: 'All types' }, ...Object.entries(KIND_LABEL).map(([value, label]) => ({ value, label }))]} />
        <Filter label="brand" value={brand} onChange={setBrand} options={[{ value: '', label: 'All brands' }, ...brands.map((b) => ({ value: b, label: b }))]} />
        <Filter
          label="plate"
          value={plate}
          onChange={setPlate}
          options={[
            { value: '', label: 'Any' },
            { value: 'carbon', label: 'Carbon' },
            { value: 'any', label: 'Any plate or rods' },
            { value: 'none', label: 'No plate' },
          ]}
        />
        <Filter
          label="drop"
          value={drop}
          onChange={setDrop}
          options={[
            { value: '', label: 'Any drop' },
            { value: 'low', label: 'Low (0–4 mm)' },
            { value: 'mid', label: 'Mid (5–8 mm)' },
            { value: 'high', label: 'High (9 mm+)' },
          ]}
        />
        <Filter
          label="sort"
          value={sort}
          onChange={setSort}
          options={[
            { value: 'brand', label: 'Brand A–Z' },
            { value: 'weight', label: 'Lightest first' },
            { value: 'stack', label: 'Tallest stack first' },
            { value: 'price', label: 'Cheapest first' },
          ]}
        />
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
              <span className="mt-3 grid grid-cols-4 gap-2">
                <MiniSpec label="weight" value={s.spec ? `${s.spec.weightG} g` : '-'} />
                <MiniSpec label="heel" value={s.spec ? `${s.spec.heelMm} mm` : '-'} />
                <MiniSpec label="drop" value={s.drop === null ? '-' : `${s.drop} mm`} />
                <MiniSpec label="foam" value={s.foam} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-3xl text-xs" style={{ color: 'var(--ink-faint)' }}>
        Weight, stack and lab drop are RunRepeat lab measurements (men&apos;s sample) where a review exists; drop on cards is
        the brand-stated figure. Descriptions and features are compiled from brand information. Shoes are revised often,
        check the current version before buying.
      </p>

      {open && <ShoeModal shoe={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <span className="label block">{label}</span>
      <Select className="mt-1.5" ariaLabel={label} value={value} onChange={onChange} options={options} />
    </div>
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

function ShoeModal({ shoe, onClose }: { shoe: Merged; onClose: () => void }) {
  const spec = shoe.spec
  const family = foamFamilyOf(shoe.foam)
  const typical = MEDIAN_WEIGHT[shoe.kind]
  const weightNote =
    spec && Number.isFinite(typical)
      ? Math.abs(spec.weightG - typical) < 8
        ? `about typical for a ${KIND_LABEL[shoe.kind].toLowerCase()} in this catalogue (median ${Math.round(typical)} g)`
        : `${Math.abs(spec.weightG - Math.round(typical))} g ${spec.weightG < typical ? 'lighter' : 'heavier'} than the median ${KIND_LABEL[shoe.kind].toLowerCase()} here (${Math.round(typical)} g)`
      : null
  const dropGap = spec && spec.brandDropMm !== null ? spec.labDropMm - spec.brandDropMm : null

  const specs: [string, string][] = [
    ['surface', shoe.surface === 'road' ? 'Road' : 'Trail'],
    ['midsole foam', shoe.foam],
    ['plate', shoe.plate],
    ['upper', shoe.upper],
    ['outsole', shoe.outsole],
    ['drop (brand)', shoe.drop === null ? '-' : `${shoe.drop} mm`],
  ]
  if (spec) {
    specs.push(
      ['weight (lab)', `${spec.weightG} g`],
      ['heel stack (lab)', `${spec.heelMm} mm · ${stackBand(spec.heelMm)}`],
      ['forefoot stack (lab)', `${spec.foreMm} mm`],
      ['drop (lab)', `${spec.labDropMm} mm`],
      ['list price', spec.msrpUsd ? `US$${spec.msrpUsd}` : '-']
    )
  }

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

      {spec && (
        <div className="panel mt-5 p-4">
          <p className="label">what the numbers mean</p>
          <ul className="mt-2 space-y-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
            {weightNote && <li>Weight: {weightNote}. Each extra 100 g per shoe costs roughly 1% more energy.</li>}
            <li>
              Stack: {spec.heelMm} mm at the heel puts it in the <b>{stackBand(spec.heelMm).toLowerCase()}</b> band.{' '}
              {spec.heelMm > 40
                ? 'That is above the 40 mm World Athletics limit for road racing shoes, although official measurement differs from lab measurement, check the approved list before elite competition.'
                : 'More stack means more cushioning and less ground feel.'}
            </li>
            {dropGap !== null && (
              <li>
                Drop: the brand states {spec.brandDropMm} mm; the lab measured {spec.labDropMm} mm
                {Math.abs(dropGap) >= 2 ? `, a ${Math.abs(dropGap).toFixed(1)} mm difference, so it may feel ${dropGap > 0 ? 'higher' : 'lower'}-dropped than listed.` : ', close to the listed figure.'}
              </li>
            )}
            <li>
              Forefoot: {spec.foreMm} mm under the ball of the foot, where most runners push off.
            </li>
          </ul>
        </div>
      )}

      {family && (
        <div className="mt-5">
          <p className="label">midsole material · {family.name}</p>
          <dl className="mt-2 grid gap-3 sm:grid-cols-2">
            {(
              [
                ['chemistry', family.chemistry],
                ['how it is made', family.howMade],
                ['feel', family.feel],
                ['durability', family.durability],
              ] as const
            ).map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <h3 className="label mt-5">best for</h3>
      <p className="mt-1 text-sm">{shoe.bestFor}</p>
      <h3 className="label mt-5">features</h3>
      <ul className="mt-2 space-y-1.5 text-sm">
        {shoe.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span style={{ color: 'var(--accent)' }}>-</span>
            {f}
          </li>
        ))}
      </ul>

      {spec && (
        <p className="mt-5 text-xs" style={{ color: 'var(--ink-faint)' }}>
          Measurements:{' '}
          <a className="underline" href={spec.url} target="_blank" rel="noreferrer">
            RunRepeat lab review
          </a>
          .
        </p>
      )}
    </Modal>
  )
}

// ---------- insights (charts from the measured data) ----------

const GROUPS: { name: string; kinds: Shoe['kind'][] }[] = [
  { name: 'Racers & speed shoes', kinds: ['race', 'tempo'] },
  { name: 'Road trainers', kinds: ['daily', 'max', 'stability', 'minimal'] },
  { name: 'Trail', kinds: ['trail'] },
]

function pearson(xs: number[], ys: number[]) {
  const n = xs.length
  const mx = xs.reduce((a, b) => a + b, 0) / n
  const my = ys.reduce((a, b) => a + b, 0) / n
  let num = 0
  let dx = 0
  let dy = 0
  for (let i = 0; i < n; i++) {
    num += (xs[i] - mx) * (ys[i] - my)
    dx += (xs[i] - mx) ** 2
    dy += (ys[i] - my) ** 2
  }
  return num / Math.sqrt(dx * dy)
}

function ShoeInsights() {
  const data = useMemo(() => {
    const withSpec = MERGED.filter((m) => m.spec)
    const series = GROUPS.map((g) => ({
      name: g.name,
      points: withSpec.filter((m) => g.kinds.includes(m.kind)).map((m) => ({ x: m.spec!.heelMm, y: m.spec!.weightG, label: `${m.brand} ${m.model}` })),
    }))
    const groupMedian = GROUPS.map((g, i) => ({ name: g.name, weight: median(series[i].points.map((p) => p.y)), stack: median(series[i].points.map((p) => p.x)) }))
    const r = pearson(
      withSpec.filter((m) => m.kind !== 'trail').map((m) => m.spec!.heelMm),
      withSpec.filter((m) => m.kind !== 'trail').map((m) => m.spec!.weightG)
    )
    const over40 = withSpec.filter((m) => m.spec!.heelMm > 40).length

    const kindRows = (Object.keys(KIND_LABEL) as Shoe['kind'][])
      .map((k) => ({ label: KIND_LABEL[k], value: Math.round(MEDIAN_WEIGHT[k]), n: withSpec.filter((m) => m.kind === k).length }))
      .filter((r) => Number.isFinite(r.value))
      .sort((a, b) => a.value - b.value)

    const drops = withSpec
      .filter((m) => m.spec!.brandDropMm !== null)
      .map((m) => ({ label: `${m.brand} ${m.model}`, value: Math.round((m.spec!.labDropMm - m.spec!.brandDropMm!) * 10) / 10 }))
    const meanAbs = drops.reduce((s, d) => s + Math.abs(d.value), 0) / drops.length
    const within2 = drops.filter((d) => Math.abs(d.value) <= 2).length
    const higher = drops.filter((d) => d.value > 0).length
    const topDrops = [...drops].sort((a, b) => Math.abs(b.value) - Math.abs(a.value)).slice(0, 12)

    return { series, groupMedian, r, over40, total: withSpec.length, kindRows, drops, meanAbs, within2, higher, topDrops }
  }, [])

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">What the measurements show</h2>
        <p className="mt-1 max-w-3xl text-sm" style={{ color: 'var(--ink-soft)' }}>
          Charts built from the {data.total} shoes in this catalogue with lab measurements. They describe this set of
          popular shoes, not the whole market.
        </p>
      </div>

      <ChartFrame
        title="Weight against heel stack"
        subtitle="Each mark is one shoe · grams (men's sample) vs heel stack in mm"
        legend={data.series.map((s) => s.name)}
        table={{
          head: ['shoe', 'group', 'heel stack mm', 'weight g'],
          rows: data.series.flatMap((s) => s.points.map((p) => [p.label ?? '', s.name, p.x, p.y])),
        }}
        interpretation={
          <p>
            Racers sit low on the chart: their median weight is <b>{Math.round(data.groupMedian[0].weight)} g</b> against{' '}
            <b>{Math.round(data.groupMedian[1].weight)} g</b> for road trainers, despite a similar or taller median heel stack (
            {data.groupMedian[0].stack.toFixed(1)} vs {data.groupMedian[1].stack.toFixed(1)} mm). That is the point of PEBA-class
            foams: more height for less mass. Across road shoes, stack and weight are only {Math.abs(data.r) < 0.3 ? 'weakly' : Math.abs(data.r) < 0.6 ? 'moderately' : 'strongly'}{' '}
            related (r = {data.r.toFixed(2)}), foam type matters more than height. {data.over40} shoes measure above 40 mm at
            the heel.
          </p>
        }
        source="Data: RunRepeat lab measurements, retrieved November 2026."
      >
        <ScatterChart series={data.series} xLabel="heel stack (mm)" yLabel="weight (g)" />
      </ChartFrame>

      <ChartFrame
        title="Median weight by shoe type"
        subtitle="Grams, men's sample, the middle shoe of each type"
        table={{ head: ['type', 'median g', 'shoes'], rows: data.kindRows.map((r) => [r.label, r.value, r.n]) }}
        interpretation={
          <p>
            The lightest type, {data.kindRows[0].label.toLowerCase()} ({data.kindRows[0].value} g), is about{' '}
            {data.kindRows[data.kindRows.length - 1].value - data.kindRows[0].value} g per shoe lighter than the heaviest,{' '}
            {data.kindRows[data.kindRows.length - 1].label.toLowerCase()} ({data.kindRows[data.kindRows.length - 1].value} g). Using
            the rule of thumb of about 1% more energy per 100 g per shoe, that gap alone is worth roughly{' '}
            {((data.kindRows[data.kindRows.length - 1].value - data.kindRows[0].value) / 100).toFixed(1)}% in running cost,
            before any difference in foam or plate.
          </p>
        }
        source="Shoe-mass rule of thumb: Hoogkamer, Kipp, Spiering & Kram (2016), Medicine & Science in Sports & Exercise."
      >
        <BarChart rows={data.kindRows.map((r) => ({ label: r.label, value: r.value, note: `${r.n} shoes` }))} unit="g" />
      </ChartFrame>

      <ChartFrame
        title="Measured drop vs the brand's number"
        subtitle="Lab drop minus brand-stated drop, mm, the 12 largest gaps"
        table={{ head: ['shoe', 'lab − brand (mm)'], rows: [...data.drops].sort((a, b) => b.value - a.value).map((d) => [d.label, d.value]) }}
        interpretation={
          <p>
            On average the lab figure differs from the brand&apos;s by <b>{data.meanAbs.toFixed(1)} mm</b>, and {data.within2} of{' '}
            {data.drops.length} shoes are within 2 mm. In {data.higher} cases the lab measured more drop than stated. Part of
            the gap is method, brands measure the midsole alone, often unloaded, while the lab measures the whole shoe
            including insole at set points, and part is soft heels compressing differently. Treat any drop figure as ±2 mm.
          </p>
        }
        source="Data: RunRepeat lab measurements vs manufacturer specifications."
      >
        <BarChart rows={data.topDrops} format={(v) => (v > 0 ? `+${v}` : String(v))} unit="mm" />
      </ChartFrame>
    </section>
  )
}

// ---------- anatomy & foams ----------

function Anatomy() {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">Anatomy of a running shoe</h2>
      <p className="mt-1 max-w-3xl text-sm" style={{ color: 'var(--ink-soft)' }}>
        From the ground up, what each part is and why it matters.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {SHOE_ANATOMY.map((p, i) => (
          <div key={p.name} className="panel p-4">
            <p className="label">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="mt-1 text-base font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm">{p.what}</p>
            <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
              {p.whyItMatters}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FoamFamilies() {
  const counts = FOAM_FAMILIES.map((f) => ({ label: f.name.split(' (')[0], value: MERGED.filter((m) => foamFamilyOf(m.foam)?.id === f.id).length }))
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">Midsole foam families</h2>
        <p className="mt-1 max-w-3xl text-sm" style={{ color: 'var(--ink-soft)' }}>
          Brand names hide a handful of polymer families. Every shoe in the catalogue is matched to one.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {FOAM_FAMILIES.map((f) => (
          <div key={f.id} className="panel p-4">
            <h3 className="text-base font-semibold">{f.name}</h3>
            <p className="mt-2 text-sm">{f.chemistry}</p>
            <p className="label mt-3">how it is made</p>
            <p className="mt-1 text-sm">{f.howMade}</p>
            <p className="label mt-3">feel</p>
            <p className="mt-1 text-sm">{f.feel}</p>
            <p className="label mt-3">durability</p>
            <p className="mt-1 text-sm">{f.durability}</p>
            <p className="label mt-3">examples</p>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
              {f.examples}
            </p>
          </div>
        ))}
      </div>
      <ChartFrame
        title="Foam families in this catalogue"
        subtitle="Number of shoes whose main midsole foam falls in each family"
        table={{ head: ['family', 'shoes'], rows: counts.map((c) => [c.label, c.value]) }}
        interpretation={
          <p>
            Classification is by the main foam named for each shoe; dual-foam shoes count under the first-listed foam. PEBA
            dominates racers, while supercritical and nitrogen-infused EVA blends have become the default for daily
            trainers, cheaper than PEBA, lighter and bouncier than old-style EVA.
          </p>
        }
      >
        <BarChart rows={counts} unit="shoes" />
      </ChartFrame>
    </section>
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
