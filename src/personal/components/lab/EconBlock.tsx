import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat, fmt, money } from './kit'

// Economics labs. Every model here is the textbook one, with linear curves where a guide
// works the same numbers by hand, so what you see in a lab matches the worked examples.

type EconBlockType = Extract<Block, { t: 'econ-viz' }>
type PlotBlock = Extract<Block, { t: 'plot' }>

const BLUE = '#3b6fd8'
const ORANGE = '#e07b2a'
const GREEN = '#2f9e6e'
const PURPLE = '#7b4fc9'
const RED = '#d9534f'
const GREY = '#8a8478'

const Plot = (b: Omit<PlotBlock, 't'>) => <PlotChart block={{ t: 'plot', ...b }} />
const pct = (n: number, d = 1) => `${(n * 100).toFixed(d)}%`

export default function EconBlock({ block, color }: { block: EconBlockType; color: string }) {
  switch (block.viz) {
    case 'tax-wedge':
      return <TaxWedge color={color} />
    case 'price-control':
      return <PriceControl color={color} />
    case 'cost-curves':
      return <CostCurves color={color} />
    case 'cournot':
      return <Cournot color={color} />
    case 'externality':
      return <Externality color={color} />
    case 'lemons':
      return <Lemons color={color} />
    case 'monopsony':
      return <Monopsony color={color} />
    case 'multiplier':
      return <Multiplier color={color} />
    case 'ad-as':
      return <AdAs color={color} />
    case 'debt-path':
      return <DebtPath color={color} />
    case 'comparative-advantage':
      return <ComparativeAdvantage color={color} />
    case 'tariff':
      return <Tariff color={color} />
    case 'solow':
      return <Solow color={color} />
    case 'lorenz':
      return <Lorenz color={color} />
    case 'prospect':
      return <Prospect color={color} />
    case 'discounting':
      return <Discounting color={color} />
  }
}

// ── markets and welfare ─────────────────────────────────────────────────────

function TaxWedge({ color }: { color: string }) {
  const a = 100
  const c = 10
  const [b, setB] = useState(1)
  const [d, setD] = useState(1)
  const [t, setT] = useState(20)
  const q0 = (a - c) / (b + d)
  const p0 = a - b * q0
  const tt = Math.min(t, a - c)
  const qt = (a - c - tt) / (b + d)
  const pb = a - b * qt
  const ps = pb - tt
  const revenue = tt * qt
  const dwl = 0.5 * tt * (q0 - qt)
  const cs = 0.5 * (a - pb) * qt
  const ps_ = 0.5 * (ps - c) * qt
  const buyerShare = tt ? (pb - p0) / tt : d / (b + d)
  return (
    <Card
      title="A per-unit tax: who pays, what it raises, what it destroys"
      color={color}
      note="The tax drives a wedge between the price buyers pay (Pb) and the price sellers keep (Ps). The share each side bears depends only on the slopes, never on who hands the money to the government: the steeper (less responsive) side carries more. Revenue is the rectangle; the triangle is the deadweight loss, trades that were worth making and no longer happen. Make one curve steep and watch both the burden and the loss move."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="tax per unit" value={t} min={0} max={60} step={1} onChange={setT} show={`$${t}`} />
        <Slider label="demand slope (steeper = less responsive)" value={b} min={0.2} max={3} step={0.1} onChange={setB} show={b.toFixed(1)} />
        <Slider label="supply slope" value={d} min={0.2} max={3} step={0.1} onChange={setD} show={d.toFixed(1)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="buyers pay" value={`$${fmt(pb, 1)} (was $${fmt(p0, 1)})`} />
        <Stat label="sellers keep" value={`$${fmt(ps, 1)}`} />
        <Stat label="buyers' share of the tax" value={pct(buyerShare, 0)} tone={color} />
        <Stat label="quantity traded" value={`${fmt(qt, 1)} (was ${fmt(q0, 1)})`} />
        <Stat label="tax revenue" value={money(revenue)} />
        <Stat label="deadweight loss" value={money(dwl)} tone={RED} />
        <Stat label="loss per $ raised" value={revenue > 0 ? `$${fmt(dwl / revenue, 2)}` : '–'} />
        <Stat label="consumer + producer surplus" value={money(cs + ps_)} />
      </div>
      <Plot
        title="The tax wedge"
        x={[0, Math.max(q0 * 1.35, 10)]}
        y={[0, a]}
        xLabel="quantity"
        yLabel="price"
        curves={[
          { f: (q) => a - b * q, label: 'demand', color: BLUE },
          { f: (q) => c + d * q, label: 'supply', color: ORANGE },
        ]}
        areas={[
          { pts: [[0, a], [0, pb], [qt, pb]], label: 'CS', color: BLUE },
          { pts: [[0, ps], [0, c], [qt, ps]], label: 'PS', color: ORANGE },
          ...(tt > 0 ? [{ pts: [[0, ps], [qt, ps], [qt, pb], [0, pb]] as [number, number][], label: 'revenue', color: GREEN }, { pts: [[qt, pb], [qt, ps], [q0, p0]] as [number, number][], label: 'DWL', color: RED, at: [qt + (q0 - qt) * 0.62, p0] as [number, number] }] : []),
        ]}
        segments={[
          { from: [qt, 0], to: [qt, pb], dashed: true },
          { from: [q0, 0], to: [q0, p0], dashed: true },
        ]}
        points={[
          { x: q0, y: p0, label: 'no tax' },
          ...(tt > 0 ? [{ x: qt, y: pb, label: 'Pb' }, { x: qt, y: ps, label: 'Ps' }] : []),
        ]}
      />
    </Card>
  )
}

function PriceControl({ color }: { color: string }) {
  const [kind, setKind] = useState<'ceiling' | 'floor'>('ceiling')
  const [level, setLevel] = useState(40)
  const a = 100
  const c = 10
  const q0 = 45
  const p0 = 55
  const Qd = (p: number) => Math.max(a - p, 0)
  const Qs = (p: number) => Math.max(p - c, 0)
  const binding = kind === 'ceiling' ? level < p0 : level > p0
  const traded = binding ? Math.min(Qd(level), Qs(level)) : q0
  const gap = binding ? Math.abs(Qd(level) - Qs(level)) : 0
  const dwl = 0.5 * (q0 - traded) * ((a - traded) - (c + traded))
  const csOf = (q: number, p: number) => q * (a - p) - 0.5 * q * q
  const psOf = (q: number, p: number) => q * (p - c) - 0.5 * q * q
  const price = binding ? level : p0
  const cs = csOf(traded, price)
  const ps = psOf(traded, price)
  return (
    <Card
      title="Price ceilings and floors"
      color={color}
      note="A ceiling only matters below the market price, a floor only above it. Either way the quantity traded falls to the short side of the market (whichever of buyers or sellers wants less), so some mutually beneficial trades vanish: the red triangle. The numbers assume the scarce units go to the buyers who value them most; if they are handed out by queue or lottery, the real loss is larger, and queuing time eats into what buyers gain."
    >
      <Pills label="control" value={kind} onChange={(v) => { setKind(v); setLevel(v === 'ceiling' ? 40 : 70) }} options={[['ceiling', 'Price ceiling (rent control)'], ['floor', 'Price floor (minimum price)']]} />
      <Slider label={kind === 'ceiling' ? 'ceiling price' : 'floor price'} value={level} min={15} max={95} step={1} onChange={setLevel} show={`$${level}`} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="binding?" value={binding ? 'yes' : 'no, the market price applies'} tone={binding ? color : undefined} />
        <Stat label="quantity traded" value={`${fmt(traded, 0)} (free market ${q0})`} />
        <Stat label={kind === 'ceiling' ? 'shortage' : 'unsold surplus'} value={fmt(gap, 0)} />
        <Stat label="deadweight loss" value={money(dwl)} tone={RED} />
        <Stat label="consumer surplus" value={`${money(cs)} (was ${money(csOf(q0, p0))})`} />
        <Stat label="producer surplus" value={`${money(ps)} (was ${money(psOf(q0, p0))})`} />
      </div>
      <Plot
        x={[0, 90]}
        y={[0, 100]}
        xLabel="quantity"
        yLabel="price"
        curves={[
          { f: (q) => a - q, label: 'demand', color: BLUE },
          { f: (q) => c + q, label: 'supply', color: ORANGE },
        ]}
        hlines={[{ y: level, label: kind === 'ceiling' ? `ceiling $${level}` : `floor $${level}` }]}
        areas={binding ? [{ pts: [[traded, a - traded], [traded, c + traded], [q0, p0]], label: 'DWL', color: RED, at: [traded + (q0 - traded) * 0.65, p0] }] : []}
        segments={binding ? [{ from: [Qs(level), level], to: [Qd(level), level], color: PURPLE, label: kind === 'ceiling' ? 'shortage' : 'surplus' }] : []}
        points={[{ x: q0, y: p0, label: 'market E' }]}
      />
    </Card>
  )
}

// ── firms and competition ──────────────────────────────────────────────────

function CostCurves({ color }: { color: string }) {
  // TC = F + 20q − 3q² + 0.25q³
  const [F, setF] = useState(60)
  const [P, setP] = useState(24)
  const tc = (q: number) => F + 20 * q - 3 * q * q + 0.25 * q ** 3
  const mc = (q: number) => 20 - 6 * q + 0.75 * q * q
  const avc = (q: number) => 20 - 3 * q + 0.25 * q * q
  const atc = (q: number) => avc(q) + F / q
  const shutdown = avc(6)
  // the rising branch of MC = P
  const disc = 36 - 3 * (20 - P)
  const qStar = P >= shutdown && disc >= 0 ? (6 + Math.sqrt(disc)) / 1.5 : 0
  const profit = qStar > 0 ? P * qStar - tc(qStar) : -F
  // break-even: minimum ATC, found numerically
  let qMinAtc = 1
  for (let q = 1; q <= 16; q += 0.01) if (atc(q) < atc(qMinAtc)) qMinAtc = q
  return (
    <Card
      title="A firm's cost curves and its supply decision"
      color={color}
      note="Total cost here is TC = F + 20q − 3q² + 0.25q³. A price-taking firm produces where price equals marginal cost on the rising part of MC. If price is above average total cost (ATC) it makes a profit (green); between ATC and average variable cost (AVC) it makes a loss but keeps producing, because it covers its variable costs and some of the fixed cost it must pay anyway; below the minimum of AVC it shuts down. Raising the fixed cost moves ATC but not MC, so it changes profit but not the output decision."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="market price" value={P} min={5} max={50} step={0.5} onChange={setP} show={`$${P.toFixed(1)}`} />
        <Slider label="fixed cost F" value={F} min={0} max={200} step={5} onChange={setF} show={`$${F}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="output (P = MC)" value={qStar ? fmt(qStar, 2) : 'shut down'} tone={color} />
        <Stat label="profit" value={money(profit)} tone={profit >= 0 ? GREEN : RED} />
        <Stat label="shutdown price (min AVC)" value={`$${fmt(shutdown, 2)}`} />
        <Stat label="break-even price (min ATC)" value={`$${fmt(atc(qMinAtc), 2)} at q = ${fmt(qMinAtc, 1)}`} />
      </div>
      <Plot
        x={[0, 14]}
        y={[0, 60]}
        xLabel="quantity q"
        yLabel="$ per unit"
        curves={[
          { f: mc, label: 'MC', color: RED },
          { f: avc, label: 'AVC', color: BLUE, from: 0.3 },
          { f: atc, label: 'ATC', color: PURPLE, from: 0.8 },
        ]}
        hlines={[{ y: P, label: `price $${P.toFixed(1)}` }]}
        areas={qStar ? [{ pts: [[0, atc(qStar)], [qStar, atc(qStar)], [qStar, P], [0, P]], label: profit >= 0 ? 'profit' : 'loss', color: profit >= 0 ? GREEN : RED }] : []}
        points={[{ x: 6, y: shutdown, label: 'shutdown' }, ...(qStar ? [{ x: qStar, y: P, label: 'P = MC' }] : [])]}
      />
    </Card>
  )
}

function Cournot({ color }: { color: string }) {
  const a = 100
  const [c, setC] = useState(20)
  const [n, setN] = useState(2)
  const Q = (k: number) => (k * (a - c)) / (k + 1)
  const P = (k: number) => (a + k * c) / (k + 1)
  const q = Q(n)
  const p = P(n)
  const qc = a - c
  const dwl = 0.5 * (qc - q) * (p - c)
  const pts = Array.from({ length: 20 }, (_, i) => [i + 1, P(i + 1)] as [number, number])
  return (
    <Card
      title="From monopoly to competition: Cournot with n firms"
      color={color}
      note="Each firm picks its quantity, taking the others' as given, against the market demand P = 100 − Q with marginal cost c. One firm is a monopoly; two is a duopoly; as n grows the price falls towards marginal cost and the deadweight loss disappears. Each firm's markup, measured by the Lerner index (P − MC)/P, equals the market share divided by the elasticity of demand, which is why concentration (the HHI) is a first screen for market power."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="number of firms n" value={n} min={1} max={20} step={1} onChange={setN} />
        <Slider label="marginal cost c" value={c} min={0} max={80} step={1} onChange={setC} show={`$${c}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="market price" value={`$${fmt(p, 2)}`} tone={color} />
        <Stat label="market quantity" value={`${fmt(q, 1)} of ${qc} competitive`} />
        <Stat label="output per firm" value={fmt(q / n, 2)} />
        <Stat label="Lerner index (P − c)/P" value={fmt((p - c) / p, 3)} />
        <Stat label="profit per firm" value={money(((p - c) * q) / n)} />
        <Stat label="consumer surplus" value={money(0.5 * q * (a - p))} />
        <Stat label="deadweight loss" value={money(dwl)} tone={RED} />
        <Stat label="HHI (equal shares)" value={Math.round(10000 / n).toLocaleString()} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Plot
          title="The market at this n"
          x={[0, 100]}
          y={[0, 100]}
          xLabel="total quantity Q"
          yLabel="price"
          curves={[{ f: (x) => a - x, label: 'demand', color: BLUE }]}
          hlines={[{ y: c, label: 'MC' }]}
          areas={[
            { pts: [[0, a], [0, p], [q, p]], label: 'CS', color: BLUE },
            { pts: [[0, p], [q, p], [q, c], [0, c]], label: 'profit', color: GREEN },
            { pts: [[q, p], [q, c], [qc, c]], label: 'DWL', color: RED, at: [q + (qc - q) * 0.3, c + (p - c) * 0.3] },
          ]}
          points={[{ x: q, y: p, label: `n = ${n}` }]}
        />
        <Plot title="Price against the number of firms" x={[1, 20]} y={[c - 2, a / 2 + c / 2 + 4]} xLabel="firms" yLabel="price" data={[{ pts, color, dots: true, label: 'Cournot price' }]} hlines={[{ y: c, label: 'competitive price = MC' }]} points={[{ x: n, y: p, label: `$${fmt(p, 1)}` }]} />
      </div>
    </Card>
  )
}

// ── market failure ─────────────────────────────────────────────────────────

function Externality({ color }: { color: string }) {
  const [e, setE] = useState(20)
  const [tax, setTax] = useState(0)
  const a = 100
  const c = 10
  const qm = (a - c - tax) / 2
  const pm = a - qm
  const qs = (a - c - e) / 2
  const ps = a - qs
  // welfare loss relative to the optimum, with a tax of any size
  const lossAt = (q: number) => 0.5 * Math.abs(q - qs) * Math.abs(c + q + e - (a - q))
  return (
    <Card
      title="A negative externality and the Pigouvian tax"
      color={color}
      note="Each unit produced harms bystanders by a constant amount e (pollution, noise, congestion). The market ignores it and produces where demand meets private cost; society's optimum is where demand meets the social cost, private cost plus e. The gap is overproduction, and the red triangle is the harm not worth the benefit. A tax equal to the external cost per unit makes the market produce the optimum without the government needing to know anyone's demand: the price system does the rest."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="external cost per unit e" value={e} min={0} max={60} step={1} onChange={(v) => setE(v)} show={`$${e}`} />
        <Slider label="tax per unit" value={tax} min={0} max={60} step={1} onChange={setTax} show={`$${tax}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="market output" value={fmt(qm, 1)} />
        <Stat label="social optimum" value={fmt(qs, 1)} tone={color} />
        <Stat label="welfare loss" value={money(lossAt(qm))} tone={RED} />
        <Stat label="Pigouvian tax" value={`$${e} (set the slider to match)`} />
      </div>
      <Plot
        x={[0, 60]}
        y={[0, 100]}
        xLabel="quantity"
        yLabel="$ per unit"
        curves={[
          { f: (q) => a - q, label: 'demand = marginal benefit', color: BLUE },
          { f: (q) => c + q, label: 'private marginal cost', color: ORANGE },
          { f: (q) => c + q + e, label: 'social marginal cost', color: RED, dashed: true },
          ...(tax ? [{ f: (q: number) => c + q + tax, label: 'private cost + tax', color: PURPLE, dashed: true }] : []),
        ]}
        areas={Math.abs(qm - qs) > 0.05 ? [{ pts: [[qs, ps], [qm, c + qm + e], [qm, pm]], label: 'DWL', color: RED }] : []}
        points={[{ x: (a - c) / 2, y: a - (a - c) / 2, label: 'market (no tax)' }, { x: qs, y: ps, label: 'optimum' }]}
      />
    </Card>
  )
}

function Lemons({ color }: { color: string }) {
  const [k, setK] = useState(1.5)
  const [inspected, setInspected] = useState(0)
  // Quality is uniform on [0, 100]; a seller values a car at its quality q, a buyer at k·q.
  // Buyers see only the average quality of the cars that are offered at the going price.
  // A share of cars is inspected, so their quality is known and they trade at k·q.
  const rounds = useMemo(() => {
    const out: [number, number][] = []
    let p = k * 50
    for (let r = 0; r <= 12; r++) {
      out.push([r, p])
      const cap = Math.min(p, 100)
      p = k * (cap / 2)
    }
    return out
  }, [k])
  const final = rounds[rounds.length - 1][1]
  const traded = Math.min(final, 100) / 100
  const gainsPossible = (k - 1) * 50
  const gainsRealised = (1 - inspected) * ((k - 1) * (Math.min(final, 100) ** 2) / 200) + inspected * gainsPossible
  return (
    <Card
      title="The market for lemons: how hidden quality unravels a market"
      color={color}
      note="Used cars vary in quality from 0 to 100. Every buyer values a car at k times its quality, so every trade would make someone better off. But only sellers know quality. At a price p, only owners of cars worth less than p will sell, so the average car on offer is worth p/2 to its owner and k·p/2 to a buyer. Unless k is at least 2, that is less than p, buyers lower their offer, the best remaining cars leave, and the market shrinks round by round. Inspections, warranties and reputations are ways of making quality visible."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="buyers value quality at k ×" value={k} min={1} max={2.4} step={0.05} onChange={setK} show={k.toFixed(2)} />
        <Slider label="share of cars independently inspected" value={inspected} min={0} max={1} step={0.05} onChange={setInspected} show={pct(inspected, 0)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="opening price (average car)" value={`$${fmt(k * 50, 1)}k`} />
        <Stat label="price after 12 rounds" value={`$${fmt(final, 2)}k`} tone={color} />
        <Stat label="uninspected cars still traded" value={pct(traded, 1)} />
        <Stat label="gains from trade realised" value={pct(gainsPossible > 0 ? gainsRealised / gainsPossible : 1, 0)} />
      </div>
      <Plot title="Price offered, round by round (thousands)" x={[0, 12]} y={[0, Math.max(k * 50, 100) * 1.05]} xLabel="round" yLabel="price ($k)" data={[{ pts: rounds, color, dots: true, label: 'price buyers will pay' }]} hlines={[{ y: 50, label: 'average quality of all cars' }]} />
    </Card>
  )
}

// ── labour ─────────────────────────────────────────────────────────────────

function Monopsony({ color }: { color: string }) {
  const [kind, setKind] = useState<'competitive' | 'monopsony'>('monopsony')
  const [mw, setMw] = useState(13)
  // Labour supply w = 5 + 0.1L, marginal revenue product w = 25 − 0.1L.
  const Ls = (w: number) => Math.max((w - 5) / 0.1, 0)
  const Ld = (w: number) => Math.max((25 - w) / 0.1, 0)
  const wComp = 15
  const LComp = 100
  const LMono = 20 / 0.3
  const wMono = 5 + 0.1 * LMono
  const employment = (m: number) => {
    if (kind === 'competitive') return m <= wComp ? LComp : Ld(m)
    if (m <= wMono) return LMono
    return Math.min(Ls(m), Ld(m))
  }
  const wageAt = (m: number) => (kind === 'competitive' ? Math.max(m, wComp) : Math.max(m, wMono))
  const curve = Array.from({ length: 81 }, (_, i) => { const m = 5 + i * 0.25; return [m, employment(m)] as [number, number] })
  return (
    <Card
      title="Minimum wages under competition and under monopsony"
      color={color}
      note="In a competitive labour market a minimum wage above the market wage moves employers up their labour demand curve, so jobs fall. A monopsony employer (one big buyer of labour, or a market where workers cannot easily switch) holds wages below the value of what workers produce, because hiring one more worker means raising pay for everyone. There, a minimum wage between the monopsony wage and the competitive wage raises both pay and employment, until it passes the competitive wage. Which world you are in is an empirical question, which is why the research is fought over."
    >
      <Pills label="market" value={kind} onChange={setKind} options={[['competitive', 'Competitive'], ['monopsony', 'Monopsony']]} />
      <Slider label="minimum wage" value={mw} min={5} max={25} step={0.25} onChange={setMw} show={`$${mw.toFixed(2)}`} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="wage paid" value={`$${fmt(wageAt(mw), 2)}`} />
        <Stat label="employment" value={fmt(employment(mw), 1)} tone={color} />
        <Stat label="without a minimum" value={kind === 'competitive' ? `${LComp} at $${wComp}` : `${fmt(LMono, 1)} at $${fmt(wMono, 2)}`} />
        <Stat label="wage bill" value={money(wageAt(mw) * employment(mw))} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Plot
          title="The labour market"
          x={[0, 200]}
          y={[0, 30]}
          xLabel="workers L"
          yLabel="hourly wage"
          curves={[
            { f: (L) => 5 + 0.1 * L, label: 'labour supply', color: ORANGE },
            { f: (L) => 25 - 0.1 * L, label: 'MRP (labour demand)', color: BLUE },
            ...(kind === 'monopsony' ? [{ f: (L: number) => 5 + 0.2 * L, label: 'marginal cost of labour', color: RED, dashed: true }] : []),
          ]}
          hlines={[{ y: mw, label: `minimum $${mw.toFixed(2)}` }]}
          points={[{ x: employment(mw), y: wageAt(mw), label: 'outcome' }]}
        />
        <Plot title="Employment as the minimum wage rises" x={[5, 25]} y={[0, 110]} xLabel="minimum wage" yLabel="employment" data={[{ pts: curve, color }]} vlines={[{ x: mw }]} />
      </div>
    </Card>
  )
}

// ── macroeconomics ─────────────────────────────────────────────────────────

const ECONOMIES: [string, string, number, number, number][] = [
  ['closed', 'Closed, no taxes', 0.8, 0, 0],
  ['large', 'Large economy (US-like)', 0.9, 0.25, 0.15],
  ['small', 'Small open (Singapore-like)', 0.6, 0.15, 0.6],
]

function Multiplier({ color }: { color: string }) {
  const [mpc, setMpc] = useState(0.8)
  const [tax, setTax] = useState(0.2)
  const [imp, setImp] = useState(0.2)
  const [dG, setDG] = useState(100)
  const r = mpc * (1 - tax) * (1 - imp)
  const k = 1 / (1 - r)
  const rounds = Array.from({ length: 12 }, (_, i) => dG * r ** i)
  const cum = rounds.reduce<[number, number][]>((acc, v, i) => [...acc, [i + 1, (acc[i - 1]?.[1] ?? 0) + v]], [])
  return (
    <Card
      title="The spending multiplier and its leaks"
      color={color}
      note="The government spends $100 more. Whoever receives it pays tax, spends a share (the marginal propensity to consume, MPC) of what is left, and some of that spending buys imports, which is income for another country. Each round re-spends the fraction r = MPC × (1 − tax) × (1 − import share), so the total is the geometric series 1 + r + r² + … = 1/(1 − r). Taxes, saving and imports are leaks; a small, very open economy leaks fast, which is why its multipliers are small."
    >
      <Pills label="preset" value="" onChange={(v) => { const e = ECONOMIES.find((x) => x[0] === v); if (e) { setMpc(e[2]); setTax(e[3]); setImp(e[4]) } }} options={ECONOMIES.map((e) => [e[0], e[1]] as [string, string])} />
      <div className="flex flex-wrap gap-3">
        <Slider label="marginal propensity to consume" value={mpc} min={0.3} max={0.95} step={0.01} onChange={setMpc} show={mpc.toFixed(2)} />
        <Slider label="tax rate" value={tax} min={0} max={0.5} step={0.01} onChange={setTax} show={pct(tax, 0)} />
        <Slider label="import share of spending" value={imp} min={0} max={0.8} step={0.01} onChange={setImp} show={pct(imp, 0)} />
        <Slider label="extra government spending" value={dG} min={10} max={500} step={10} onChange={setDG} show={money(dG)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="re-spent each round r" value={fmt(r, 3)} />
        <Stat label="multiplier 1/(1 − r)" value={fmt(k, 2)} tone={color} />
        <Stat label="total rise in income" value={money(dG * k)} />
        <Stat label="after 3 rounds" value={`${pct(cum[2][1] / (dG * k), 0)} of the total`} />
      </div>
      <Plot title="Cumulative rise in income, round by round" x={[1, 12]} y={[0, dG * k * 1.1]} xLabel="round of spending" yLabel="$" data={[{ pts: cum, color, dots: true, label: 'cumulative' }, { pts: rounds.map((v, i) => [i + 1, v] as [number, number]), color: GREY, dots: true, label: 'this round' }]} hlines={[{ y: dG * k, label: `limit ${money(dG * k)}` }]} />
    </Card>
  )
}

function AdAs({ color }: { color: string }) {
  const [ad, setAd] = useState(0)
  const [as, setAs] = useState(0)
  const Y = (200 + ad - as) / 2
  const P = Y + as
  const gap = (Y - 100) / 100
  const PLR = 100 + ad
  return (
    <Card
      title="Aggregate demand and aggregate supply"
      color={color}
      note="Shift demand (spending: confidence, interest rates, government budgets, exports) and supply (costs: oil prices, wages, productivity). A demand shock moves output and prices the same way; a supply shock moves them in opposite directions, which is stagflation when costs jump. Potential output (the vertical line) is set by labour, capital and technology. Over time wages and prices adjust, the short-run supply curve shifts, and output returns to potential at the long-run point."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="demand shift (+ boom, − slump)" value={ad} min={-30} max={30} step={1} onChange={setAd} show={`${ad > 0 ? '+' : ''}${ad}`} />
        <Slider label="cost shock (+ oil spike, − productivity gain)" value={as} min={-20} max={30} step={1} onChange={setAs} show={`${as > 0 ? '+' : ''}${as}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="output (potential = 100)" value={fmt(Y, 1)} />
        <Stat label="output gap" value={`${gap >= 0 ? '+' : ''}${pct(gap)}`} tone={color} />
        <Stat label="price level (was 100)" value={fmt(P, 1)} />
        <Stat label="diagnosis" value={ad === 0 && as === 0 ? 'at potential' : as > 0 && Y < 100 ? 'stagflation' : Y > 100 ? 'overheating' : Y < 100 ? 'recession' : 'prices moved, output at potential'} />
      </div>
      <Plot
        x={[60, 140]}
        y={[60, 150]}
        xLabel="real output Y"
        yLabel="price level P"
        curves={[
          { f: (y) => 200 - y, label: 'AD before', color: BLUE, dashed: ad !== 0 },
          ...(ad ? [{ f: (y: number) => 200 - y + ad, label: 'AD after', color: BLUE }] : []),
          { f: (y) => y, label: 'SRAS before', color: ORANGE, dashed: as !== 0 },
          ...(as ? [{ f: (y: number) => y + as, label: 'SRAS after', color: ORANGE }] : []),
        ]}
        vlines={[{ x: 100, label: 'LRAS: potential' }]}
        points={[{ x: Y, y: P, label: 'short run' }, ...(ad ? [{ x: 100, y: PLR, label: 'long run' }] : [])]}
      />
    </Card>
  )
}

function DebtPath({ color }: { color: string }) {
  const [b0, setB0] = useState(100)
  const [r, setR] = useState(3)
  const [g, setG] = useState(4)
  const [pb, setPb] = useState(-2)
  const years = 40
  const path = useMemo(() => {
    const out: [number, number][] = [[0, b0]]
    let b = b0
    for (let t = 1; t <= years; t++) {
      b = (b * (1 + r / 100)) / (1 + g / 100) - pb
      out.push([t, b])
    }
    return out
  }, [b0, r, g, pb])
  const end = path[path.length - 1][1]
  const stabilise = (b0 * (r - g)) / (100 + g)
  const limit = r < g ? (-pb * (1 + g / 100)) / ((g - r) / 100) : NaN
  const top = Math.max(...path.map((p) => p[1]), b0, 50)
  const bottom = Math.min(...path.map((p) => p[1]), 0)
  return (
    <Card
      title="Public debt dynamics: the r − g rule"
      color={color}
      note="Debt as a share of GDP grows with the interest rate (r) and shrinks with nominal growth (g), and the primary balance (the budget before interest; positive is a surplus) pays it down. When r is below g a country can run a modest primary deficit forever and the debt ratio still settles; when r is above g, debt snowballs unless the government runs a surplus. The line in the stats is the primary balance that holds today's ratio steady."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="starting debt (% of GDP)" value={b0} min={0} max={250} step={5} onChange={setB0} show={`${b0}%`} />
        <Slider label="interest rate on debt r" value={r} min={-1} max={10} step={0.25} onChange={setR} show={`${r.toFixed(2)}%`} />
        <Slider label="nominal GDP growth g" value={g} min={-2} max={10} step={0.25} onChange={setG} show={`${g.toFixed(2)}%`} />
        <Slider label="primary balance (% of GDP)" value={pb} min={-8} max={6} step={0.25} onChange={setPb} show={`${pb > 0 ? '+' : ''}${pb.toFixed(2)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="r − g" value={`${(r - g).toFixed(2)} pts`} tone={r > g ? RED : GREEN} />
        <Stat label={`debt after ${years} years`} value={`${fmt(end, 0)}% of GDP`} tone={color} />
        <Stat label="primary balance that holds debt steady" value={`${stabilise > 0 ? '+' : ''}${fmt(stabilise, 2)}% of GDP`} />
        <Stat label="where it settles" value={Number.isFinite(limit) ? `${fmt(limit, 0)}% of GDP` : r === g ? 'drifts by the balance' : 'no ceiling: it explodes or vanishes'} />
      </div>
      <Plot title="Debt to GDP" x={[0, years]} y={[bottom, top * 1.08]} xLabel="years" yLabel="% of GDP" data={[{ pts: path, color, label: 'debt ratio' }]} hlines={[{ y: b0, label: 'start' }]} />
    </Card>
  )
}

// ── trade ──────────────────────────────────────────────────────────────────

function ComparativeAdvantage({ color }: { color: string }) {
  // Ricardo's hours per unit; labour so each makes one of each in autarky.
  const [eC, setEC] = useState(100)
  const [eW, setEW] = useState(120)
  const [pC, setPC] = useState(90)
  const [pW, setPW] = useState(80)
  const LE = eC + eW
  const LP = pC + pW
  const ocE = eC / eW
  const ocP = pC / pW
  const [tot, setTot] = useState(1)
  const lo = Math.min(ocE, ocP)
  const hi = Math.max(ocE, ocP)
  const terms = Math.min(Math.max(tot, lo), hi)
  const eExportsCloth = ocE < ocP
  const worldCloth = eExportsCloth ? LE / eC : LP / pC
  const worldWine = eExportsCloth ? LP / pW : LE / eW
  return (
    <Card
      title="Comparative advantage: Ricardo's England and Portugal"
      color={color}
      note="Each country has a fixed number of labour hours. Portugal may be better at everything (absolute advantage), but what matters is opportunity cost: how much wine a country gives up to make one more unit of cloth. The country with the lower opportunity cost of cloth should make cloth, the other wine, and any terms of trade between the two opportunity costs leaves both better off. Change the hours and see who should specialise in what."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="England: hours per cloth" value={eC} min={40} max={200} step={5} onChange={setEC} />
        <Slider label="England: hours per wine" value={eW} min={40} max={200} step={5} onChange={setEW} />
        <Slider label="Portugal: hours per cloth" value={pC} min={40} max={200} step={5} onChange={setPC} />
        <Slider label="Portugal: hours per wine" value={pW} min={40} max={200} step={5} onChange={setPW} />
        <Slider label="terms of trade (wine per cloth)" value={tot} min={0.3} max={3} step={0.01} onChange={setTot} show={terms.toFixed(2)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="England: cost of 1 cloth" value={`${fmt(ocE, 3)} wine`} />
        <Stat label="Portugal: cost of 1 cloth" value={`${fmt(ocP, 3)} wine`} />
        <Stat label="pattern" value={ocE === ocP ? 'no gain from trade' : eExportsCloth ? 'England cloth, Portugal wine' : 'England wine, Portugal cloth'} tone={color} />
        <Stat label="world output: autarky → specialised" value={ocE === ocP ? '2 + 2' : `2 + 2 → ${fmt(worldCloth, 2)} cloth + ${fmt(worldWine, 2)} wine`} />
      </div>
      <Plot
        title="Production possibilities (and England's trade line)"
        x={[0, Math.max(LE / eC, LP / pC) * 1.3]}
        y={[0, Math.max(LE / eW, LP / pW) * 1.3]}
        xLabel="cloth"
        yLabel="wine"
        curves={[
          { f: (x) => (LE - eC * x) / eW, to: LE / eC, label: 'England PPF', color: BLUE },
          { f: (x) => (LP - pC * x) / pW, to: LP / pC, label: 'Portugal PPF', color: ORANGE },
          ...(ocE !== ocP ? [{ f: (x: number) => (eExportsCloth ? (LE / eC - x) * terms : LE / eW - x * terms), to: eExportsCloth ? LE / eC : (LE / eW) / terms, label: 'England consumes along this line after trade', color: GREEN, dashed: true }] : []),
        ]}
        points={[{ x: 1, y: 1, label: 'autarky (1, 1)' }]}
      />
    </Card>
  )
}

function Tariff({ color }: { color: string }) {
  const [pw, setPw] = useState(30)
  const [t, setT] = useState(10)
  // Domestic demand P = 100 − Q, domestic supply P = 10 + Q.
  const p = Math.min(pw + t, 55)
  const qd = (x: number) => 100 - x
  const qs = (x: number) => Math.max(x - 10, 0)
  const qd0 = qd(pw)
  const qs0 = qs(pw)
  const qd1 = qd(p)
  const qs1 = qs(p)
  const imports0 = qd0 - qs0
  const imports1 = Math.max(qd1 - qs1, 0)
  const csLoss = (p - pw) * (qd1 + qd0) / 2
  const psGain = (p - pw) * (qs1 + qs0) / 2
  const revenue = (p - pw) * imports1
  const dwl = csLoss - psGain - revenue
  return (
    <Card
      title="A tariff in a small open economy"
      color={color}
      note="The country is too small to move the world price, so a tariff raises the domestic price by the full tariff. Domestic producers gain (area a), the government collects revenue on the remaining imports (c), and consumers lose all of that plus two triangles: b, the extra cost of producing at home what was cheaper abroad, and d, purchases that no longer happen. A large country can push the world price down and claw some of this back from foreign exporters, which is the only standard case where a tariff can raise national welfare, and only if others do not retaliate."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="world price" value={pw} min={12} max={54} step={1} onChange={setPw} show={`$${pw}`} />
        <Slider label="tariff per unit" value={t} min={0} max={40} step={1} onChange={setT} show={`$${t}`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="domestic price" value={`$${fmt(p, 0)}`} />
        <Stat label="imports" value={`${fmt(imports1, 0)} (was ${fmt(imports0, 0)})`} />
        <Stat label="consumers lose" value={money(csLoss)} tone={BLUE} />
        <Stat label="producers gain (a)" value={money(psGain)} tone={ORANGE} />
        <Stat label="tariff revenue (c)" value={money(revenue)} tone={GREEN} />
        <Stat label="net loss (b + d)" value={money(dwl)} tone={RED} />
        <Stat label="net loss per $ of producer gain" value={psGain > 0 ? `$${fmt(dwl / psGain, 2)}` : '–'} />
        <Stat label="prohibitive?" value={imports1 <= 0 ? 'yes: no imports remain' : 'no'} />
      </div>
      <Plot
        x={[0, 95]}
        y={[0, 100]}
        xLabel="quantity"
        yLabel="price"
        curves={[
          { f: (q) => 100 - q, label: 'domestic demand', color: BLUE },
          { f: (q) => 10 + q, label: 'domestic supply', color: ORANGE },
        ]}
        hlines={[{ y: pw, label: `world price $${pw}` }, ...(t ? [{ y: p, label: `with tariff $${fmt(p, 0)}` }] : [])]}
        areas={
          p > pw
            ? [
                { pts: [[0, pw], [qs0, pw], [qs1, p], [0, p]], label: 'a', color: ORANGE },
                { pts: [[qs0, pw], [qs1, pw], [qs1, p]], label: 'b', color: RED },
                ...(imports1 > 0 ? [{ pts: [[qs1, pw], [qd1, pw], [qd1, p], [qs1, p]] as [number, number][], label: 'c', color: GREEN }] : []),
                { pts: [[qd1, p], [qd1, pw], [qd0, pw]], label: 'd', color: RED },
              ]
            : []
        }
        segments={[{ from: [qs1, 2], to: [qd1, 2], label: 'imports', color: PURPLE }]}
      />
    </Card>
  )
}

// ── growth and inequality ──────────────────────────────────────────────────

function Solow({ color }: { color: string }) {
  const [s, setS] = useState(0.25)
  const [alpha, setAlpha] = useState(0.33)
  const [delta, setDelta] = useState(0.05)
  const [n, setN] = useState(0.01)
  const [k0, setK0] = useState(0.2)
  const kStar = (s / (n + delta)) ** (1 / (1 - alpha))
  const yStar = kStar ** alpha
  const cStar = (1 - s) * yStar
  const kGold = (alpha / (n + delta)) ** (1 / (1 - alpha))
  const cGold = (1 - alpha) * kGold ** alpha
  const path = useMemo(() => {
    const out: [number, number][] = []
    let k = k0 * kStar
    for (let t = 0; t <= 100; t++) {
      out.push([t, k ** alpha])
      k = (s * k ** alpha + (1 - delta) * k) / (1 + n)
    }
    return out
  }, [s, alpha, delta, n, k0, kStar])
  const growth0 = Math.log(path[1][1] / path[0][1])
  const halfway = path.findIndex(([, y]) => Math.log(y / path[0][1]) >= 0.5 * Math.log(yStar / path[0][1]))
  const kMax = Math.max(kStar, kGold) * 1.6
  return (
    <Card
      title="The Solow growth model"
      color={color}
      note="Output per worker is y = k^α. Each year a share s of output is saved and becomes new capital, while (n + δ)k is needed just to equip new workers and replace worn-out machines. Where the two lines cross is the steady state: capital stops growing, and so does income per worker, unless technology improves. A poor economy starting below its steady state grows fast and slows as it approaches it (convergence). The golden-rule saving rate, s = α, maximises consumption, not output."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="saving rate s" value={s} min={0.05} max={0.6} step={0.01} onChange={setS} show={pct(s, 0)} />
        <Slider label="capital share α" value={alpha} min={0.2} max={0.6} step={0.01} onChange={setAlpha} show={alpha.toFixed(2)} />
        <Slider label="depreciation δ" value={delta} min={0.02} max={0.12} step={0.005} onChange={setDelta} show={pct(delta)} />
        <Slider label="population growth n" value={n} min={0} max={0.04} step={0.0025} onChange={setN} show={pct(n, 2)} />
        <Slider label="starting capital (× steady state)" value={k0} min={0.05} max={2} step={0.05} onChange={setK0} show={`${k0.toFixed(2)}×`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="steady-state capital k*" value={fmt(kStar, 2)} />
        <Stat label="steady-state income y*" value={fmt(yStar, 3)} tone={color} />
        <Stat label="consumption per worker c*" value={`${fmt(cStar, 3)} (golden rule ${fmt(cGold, 3)})`} />
        <Stat label="first-year growth / half-way" value={`${pct(growth0)} / ${halfway > 0 ? `${halfway} yrs` : '–'}`} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Plot
          title="Saving against break-even investment"
          x={[0, kMax]}
          y={[0, Math.max(kMax ** alpha, 0.1) * 1.05]}
          xLabel="capital per worker k"
          yLabel="per worker"
          curves={[
            { f: (k) => k ** alpha, label: 'output y = k^α', color: GREY },
            { f: (k) => s * k ** alpha, label: 'saving s·y', color },
            { f: (k) => (n + delta) * k, label: '(n + δ)k', color: RED, dashed: true },
          ]}
          points={[{ x: kStar, y: s * yStar, label: 'k*' }]}
        />
        <Plot title="Income per worker over time" x={[0, 100]} y={[0, Math.max(yStar, path[0][1]) * 1.15]} xLabel="years" yLabel="y" data={[{ pts: path, color, label: 'y(t)' }]} hlines={[{ y: yStar, label: 'steady state' }]} />
      </div>
    </Card>
  )
}

function Lorenz({ color }: { color: string }) {
  const [kk, setK] = useState(2.4)
  const [tau, setTau] = useState(0.15)
  // Lorenz curve L(p) = p^k has Gini (k − 1)/(k + 1). A flat tax τ shared out equally
  // gives L'(p) = (1 − τ)L(p) + τp, whose Gini is (1 − τ) times the original.
  const L = (p: number) => p ** kk
  const L2 = (p: number) => (1 - tau) * L(p) + tau * p
  const gini = (kk - 1) / (kk + 1)
  const gini2 = (1 - tau) * gini
  const share = (f: (p: number) => number, i: number) => f((i + 1) / 5) - f(i / 5)
  return (
    <Card
      title="Lorenz curves, the Gini coefficient and redistribution"
      color={color}
      note="Line everyone up from poorest to richest. The Lorenz curve shows what share of all income the bottom p of people receive. Perfect equality is the diagonal; the Gini coefficient is the area between the diagonal and the curve, doubled, so it runs from 0 (equal) to 1 (one person has everything). A flat tax whose revenue is shared out equally pulls the curve towards the diagonal and cuts the Gini in proportion to the tax rate."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="inequality before taxes" value={kk} min={1} max={5} step={0.05} onChange={setK} show={`Gini ${gini.toFixed(3)}`} />
        <Slider label="flat tax shared out equally" value={tau} min={0} max={0.6} step={0.01} onChange={setTau} show={pct(tau, 0)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Gini before" value={fmt(gini, 3)} />
        <Stat label="Gini after" value={fmt(gini2, 3)} tone={color} />
        <Stat label="bottom 20% share" value={`${pct(share(L, 0))} → ${pct(share(L2, 0))}`} />
        <Stat label="top 20% share" value={`${pct(share(L, 4))} → ${pct(share(L2, 4))}`} />
      </div>
      <Plot
        x={[0, 1]}
        y={[0, 1]}
        xLabel="share of people, poorest first"
        yLabel="share of income"
        curves={[
          { f: (p) => p, label: 'perfect equality', color: GREY, dashed: true },
          { f: L, label: 'before', color: RED },
          ...(tau ? [{ f: L2, label: 'after tax and transfer', color }] : []),
        ]}
        areas={[{ pts: [...Array.from({ length: 41 }, (_, i) => [i / 40, L(i / 40)] as [number, number]), [1, 1], [0, 0]], label: 'Gini area', color: RED, at: [0.62, 0.42] }]}
      />
      <table className="w-full text-xs">
        <thead>
          <tr style={{ color: 'var(--ink-soft)' }}>
            <th className="text-left">quintile</th>
            {['bottom', '2nd', '3rd', '4th', 'top'].map((q) => <th key={q} className="text-right">{q}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr><td>before</td>{[0, 1, 2, 3, 4].map((i) => <td key={i} className="text-right font-mono">{pct(share(L, i))}</td>)}</tr>
          <tr><td>after</td>{[0, 1, 2, 3, 4].map((i) => <td key={i} className="text-right font-mono">{pct(share(L2, i))}</td>)}</tr>
        </tbody>
      </table>
    </Card>
  )
}

// ── behavioural ────────────────────────────────────────────────────────────

function Prospect({ color }: { color: string }) {
  const [lambda, setLambda] = useState(2.25)
  const [alpha, setAlpha] = useState(0.88)
  const [gamma, setGamma] = useState(0.61)
  const v = (x: number) => (x >= 0 ? x ** alpha : -lambda * (-x) ** alpha)
  const w = (p: number) => p ** gamma / (p ** gamma + (1 - p) ** gamma) ** (1 / gamma)
  const breakEven = lambda ** (1 / alpha) * 100
  return (
    <Card
      title="Prospect theory: the value function and probability weights"
      color={color}
      note="Kahneman and Tversky's model of choices under risk. Outcomes are judged as gains or losses from a reference point, not as final wealth. The value curve is concave for gains, convex for losses and steeper for losses by the loss-aversion factor λ, so a loss hurts about twice as much as an equal gain pleases. Probabilities are weighted too: small chances loom larger than they are (lotteries, insurance) and near-certainties count for less. Defaults are their 1992 estimates."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="loss aversion λ" value={lambda} min={1} max={4} step={0.05} onChange={setLambda} show={lambda.toFixed(2)} />
        <Slider label="curvature α" value={alpha} min={0.4} max={1} step={0.01} onChange={setAlpha} show={alpha.toFixed(2)} />
        <Slider label="probability weighting γ" value={gamma} min={0.3} max={1} step={0.01} onChange={setGamma} show={gamma.toFixed(2)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="value of +$100" value={fmt(v(100), 1)} />
        <Stat label="value of −$100" value={fmt(v(-100), 1)} />
        <Stat label="win needed to accept a 50:50 bet losing $100" value={`$${fmt(breakEven, 0)}`} tone={color} />
        <Stat label="a 1% chance feels like" value={pct(w(0.01))} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Plot title="Value function" x={[-100, 100]} y={[-lambda * 100 ** alpha * 1.05, 100 ** alpha * 1.6]} xLabel="gain or loss ($)" yLabel="felt value" curves={[{ f: v, color, label: 'v(x)' }, { f: (x) => x ** 1 * (100 ** alpha / 100), color: GREY, dashed: true, label: 'neutral (straight line)' }]} />
        <Plot title="Probability weighting" x={[0, 1]} y={[0, 1]} xLabel="stated probability" yLabel="decision weight" curves={[{ f: (p) => p, color: GREY, dashed: true, label: 'w = p' }, { f: (p) => (p <= 0 ? 0 : p >= 1 ? 1 : w(p)), color, label: 'w(p)' }]} />
      </div>
    </Card>
  )
}

function Discounting({ color }: { color: string }) {
  const [beta, setBeta] = useState(0.7)
  const [delta, setDelta] = useState(0.999)
  const [small, setSmall] = useState(100)
  const [large, setLarge] = useState(110)
  // Smaller reward after t weeks, larger one a week later. Quasi-hyperbolic: anything not
  // today is discounted by β once, then by δ per week.
  const D = (t: number) => (t < 0.5 ? 1 : beta * delta ** t)
  const S = (t: number) => small * D(t)
  const B = (t: number) => large * D(t + 1)
  let flip = -1
  for (let t = 0; t <= 52; t++) if (B(t) > S(t)) { flip = t; break }
  const pts = (f: (t: number) => number) => Array.from({ length: 53 }, (_, t) => [t, f(t)] as [number, number])
  return (
    <Card
      title="Present bias: why plans and choices disagree"
      color={color}
      note="Choose between a smaller reward sooner and a larger one a week later. With ordinary (exponential) discounting, set β = 1, waiting a week costs the same at any distance, so your choice never changes. With present bias (β below 1), anything not available right now takes an extra cut. Viewed from a distance you prefer to wait for the larger reward; when the sooner one becomes 'now', you grab it. That flip is the gap between the gym membership you buy and the gym you skip."
    >
      <div className="flex flex-wrap gap-3">
        <Slider label="present bias β (1 = none)" value={beta} min={0.4} max={1} step={0.01} onChange={setBeta} show={beta.toFixed(2)} />
        <Slider label="weekly discount δ" value={delta} min={0.95} max={1} step={0.001} onChange={setDelta} show={delta.toFixed(3)} />
        <Slider label="sooner reward" value={small} min={50} max={150} step={5} onChange={setSmall} show={money(small)} />
        <Slider label="later reward (a week after)" value={large} min={55} max={200} step={5} onChange={setLarge} show={money(large)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="choice if the sooner reward is today" value={S(0) >= B(0) ? 'take the sooner' : 'wait for the larger'} tone={color} />
        <Stat label="choice if it is 10 weeks away" value={S(10) >= B(10) ? 'take the sooner' : 'wait for the larger'} />
        <Stat label="preference reversal?" value={S(0) >= B(0) && S(10) < B(10) ? 'yes' : 'no'} tone={S(0) >= B(0) && S(10) < B(10) ? RED : undefined} />
        <Stat label="waits once the gap is" value={flip >= 0 ? `${flip} week${flip === 1 ? '' : 's'} away` : 'never within a year'} />
      </div>
      <Plot title="Value today of each option, by how far away the sooner one is" x={[0, 52]} y={[0, large * 1.08]} xLabel="weeks until the sooner reward" yLabel="present value ($)" data={[{ pts: pts(S), color: ORANGE, label: 'sooner, smaller' }, { pts: pts(B), color, label: 'a week later, larger' }]} />
    </Card>
  )
}
