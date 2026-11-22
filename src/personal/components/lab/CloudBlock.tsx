import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Btn, Card, Hist, Pills, Select, Slider, Stat, fmt, normal, quantile, rng, soft } from './kit'

type CloudBlockType = Extract<Block, { t: 'cloud-viz' }>

export default function CloudBlock({ block, color }: { block: CloudBlockType; color: string }) {
  switch (block.viz) {
    case 'nines':
      return <Nines color={color} />
    case 'queue':
      return <Queue color={color} />
    case 'autoscale':
      return <Autoscale color={color} />
    case 'cost':
      return <Cost color={color} />
    case 'ring':
      return <Ring color={color} />
    case 'cache':
      return <CacheLab color={color} />
    case 'quorum':
      return <Quorum color={color} />
    case 'cidr':
      return <Cidr color={color} />
    case 'percentiles':
      return <Percentiles color={color} />
    case 'latency':
      return <Latency color={color} />
  }
}

const dur = (secs: number) => {
  if (secs < 1) return `${(secs * 1000).toFixed(0)} ms`
  if (secs < 120) return `${secs.toFixed(1)} s`
  if (secs < 7200) return `${(secs / 60).toFixed(1)} min`
  if (secs < 172800) return `${(secs / 3600).toFixed(1)} h`
  return `${(secs / 86400).toFixed(1)} days`
}

// ── availability ───────────────────────────────────────────────────────────

function Nines({ color }: { color: string }) {
  const [nines, setNines] = useState(3)
  const [replicas, setReplicas] = useState(2)
  const [deps, setDeps] = useState(4)
  const a = 1 - 10 ** -nines
  const tier = 1 - (1 - a) ** replicas // replicas in parallel: all must fail
  const total = tier ** deps // dependencies in series: all must work
  const year = 365.25 * 86400
  const nine = (x: number) => (x >= 1 ? Infinity : -Math.log10(1 - x))
  const curves = [1, 2, 3, 5].map((r, i) => ({ f: (n: number) => (1 - (1 - (1 - 10 ** -n)) ** r) ** deps, color: ['#d9534f', '#e07b2a', '#2f9e6e', '#3b6fd8'][i], label: `${r} replica${r > 1 ? 's' : ''} per tier` }))
  return (
    <Card title="Availability: series, parallel and the nines" color={color} note="Availability is the fraction of time a service works. Things that must all work (a chain of dependencies, in series) multiply their availabilities, so every extra dependency lowers the total. Things that can stand in for each other (replicas, in parallel) fail only if all fail, so unavailability multiplies instead. Redundancy therefore helps enormously, but only if failures are independent: a shared dependency or a bad deploy takes every replica down together, which is why real systems fall short of these ideal numbers.">
      <div className="flex flex-wrap gap-3">
        <Slider label="availability of one instance (number of nines)" value={nines} min={1} max={5} step={0.5} onChange={setNines} show={`${(a * 100).toFixed(nines >= 4 ? 3 : 2)}%`} />
        <Slider label="replicas per tier (parallel)" value={replicas} min={1} max={5} step={1} onChange={setReplicas} />
        <Slider label="tiers the request must pass (series)" value={deps} min={1} max={10} step={1} onChange={setDeps} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="one tier with replicas: 1 − (1−a)^n" value={`${(tier * 100).toFixed(5)}%`} />
        <Stat label="whole chain: tier^k" value={`${(total * 100).toFixed(4)}%`} tone={color} />
        <Stat label="equivalent nines" value={Number.isFinite(nine(total)) ? nine(total).toFixed(2) : '∞'} />
        <Stat label="downtime per year" value={dur((1 - total) * year)} />
      </div>
      <PlotChart block={{ t: 'plot', x: [1, 5], y: [0.9, 1], xLabel: 'nines of one instance', yLabel: 'availability of the whole chain', curves }} />
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[28rem] text-left text-xs">
          <thead><tr style={{ background: 'var(--paper-2)' }}>{['Availability', 'Nines', 'Downtime per year', 'per month', 'per day'].map((h) => <th key={h} className="px-2 py-1.5 font-bold">{h}</th>)}</tr></thead>
          <tbody>
            {[0.99, 0.999, 0.9999, 0.99999, 0.999999].map((x) => (
              <tr key={x} className="border-t" style={{ borderColor: 'var(--line)' }}>
                <td className="px-2 py-1 font-mono">{(x * 100).toFixed(4).replace(/0+$/, '')}%</td>
                <td className="px-2 py-1">{Math.round(nine(x))}</td>
                <td className="px-2 py-1">{dur((1 - x) * year)}</td>
                <td className="px-2 py-1">{dur(((1 - x) * year) / 12)}</td>
                <td className="px-2 py-1">{dur((1 - x) * 86400)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

// ── queues ─────────────────────────────────────────────────────────────────

function erlang(lambda: number, mu: number, c: number) {
  const a = lambda / mu
  const rho = a / c
  if (rho >= 1) return { rho, pWait: 1, wq: Infinity, w: Infinity }
  let sum = 0
  let term = 1
  for (let k = 0; k < c; k++) {
    sum += term
    term *= a / (k + 1)
  }
  const last = term / (1 - rho)
  const pWait = last / (sum + last)
  const wq = pWait / (c * mu - lambda)
  return { rho, pWait, wq, w: wq + 1 / mu }
}

function Queue({ color }: { color: string }) {
  const [mu, setMu] = useState(100) // requests per second one server handles
  const [servers, setServers] = useState(1)
  const [load, setLoad] = useState(0.7) // utilisation
  const lambda = load * servers * mu
  const r = erlang(lambda, mu, servers)
  const curves = [1, 2, 4, 8].map((c, i) => ({ f: (u: number) => { const e = erlang(u * c * mu, mu, c); return Math.min(e.w * 1000, 400) }, color: ['#d9534f', '#e07b2a', '#2f9e6e', '#3b6fd8'][i], label: `${c} server${c > 1 ? 's' : ''}` }))
  return (
    <Card title="Queues: why latency explodes near full utilisation" color={color} note="Requests arrive at random and a server handles one at a time. Even when the servers are on average less than fully busy, bursts make a queue, and the queue grows without limit as utilisation approaches 100%. For one server (M/M/1) the mean time in the system is 1/(μ−λ). Little's law, L = λW, ties the number of requests in the system to the arrival rate and the time each spends there. Many servers sharing a queue (M/M/c, Erlang C) stay responsive at higher utilisation than one big server running at the same load, which is why a shared pool beats dedicated machines.">
      <div className="flex flex-wrap gap-3">
        <Slider label="requests/second one server handles (μ)" value={mu} min={10} max={500} step={10} onChange={setMu} />
        <Slider label="servers in the pool (c)" value={servers} min={1} max={16} step={1} onChange={setServers} />
        <Slider label="utilisation (ρ = λ / cμ)" value={load} min={0.05} max={0.99} step={0.01} onChange={setLoad} show={`${Math.round(load * 100)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="arrival rate λ" value={`${fmt(lambda, 0)} req/s`} />
        <Stat label="chance a request waits" value={`${fmt(r.pWait * 100, 0)}%`} />
        <Stat label="mean time in system W" value={`${fmt(r.w * 1000, 1)} ms`} tone={color} />
        <Stat label="requests in system L = λW" value={fmt(lambda * r.w, 1)} />
      </div>
      <PlotChart block={{ t: 'plot', x: [0, 1], y: [0, 400], xLabel: 'utilisation', yLabel: 'mean latency, ms (μ = ' + mu + '/s, capped at 400)', curves, vlines: [{ x: load, label: 'now' }] }} />
    </Card>
  )
}

// ── autoscaling ────────────────────────────────────────────────────────────

function Autoscale({ color }: { color: string }) {
  const [target, setTarget] = useState(0.6)
  const [delay, setDelay] = useState(5)
  const [spike, setSpike] = useState(900)
  const sim = useMemo(() => {
    const per = 100 // requests/second per instance
    const minutes = 24 * 60
    const load: number[] = []
    const cap: number[] = []
    const inst: number[] = []
    const pending: { at: number; n: number }[] = []
    let n = 4
    let coolUntil = 0
    let over = 0
    let hours = 0
    for (let t = 0; t < minutes; t++) {
      const diurnal = 500 + 350 * Math.sin(((t - 9 * 60) / 1440) * 2 * Math.PI)
      const burst = t >= 14 * 60 && t < 14 * 60 + 25 ? spike * Math.min(1, (t - 14 * 60) / 3) : 0
      const l = diurnal + burst
      for (const p of pending.filter((q) => q.at === t)) n += p.n
      const want = Math.max(2, Math.min(60, Math.ceil(l / (per * target))))
      const inflight = pending.reduce((s, q) => s + q.n, 0)
      if (want > n + inflight) pending.push({ at: t + delay, n: want - n - inflight })
      else if (want < n && t >= coolUntil) {
        n = Math.max(want, n - 2)
        coolUntil = t + 5
      }
      load.push(l)
      cap.push(n * per)
      inst.push(n)
      if (l > n * per) over++
      hours += n / 60
    }
    return { load, cap, inst, over, hours, per }
  }, [target, delay, spike])
  const pts = (arr: number[]) => arr.filter((_, i) => i % 6 === 0).map((v, i) => [(i * 6) / 60, v] as [number, number])
  return (
    <Card title="Autoscaling: a day of traffic and a spike" color={color} note="A target-tracking autoscaler adds instances when utilisation exceeds a target and removes them (slowly) when it falls. Instances take minutes to start, so a sudden spike outruns capacity however clever the rule: the delay and the target headroom set how long the overload lasts. A lower target buys safety at the price of idle, paid-for capacity. Try a fast spike with a slow start-up.">
      <PlotChart block={{ t: 'plot', x: [0, 24], y: [0, 2000], xLabel: 'hour of day', yLabel: 'requests per second', data: [{ pts: pts(sim.load), label: 'traffic', color: '#d9534f' }, { pts: pts(sim.cap), label: 'capacity', color }] }} />
      <div className="flex flex-wrap gap-3">
        <Slider label="target utilisation" value={target} min={0.3} max={0.9} step={0.05} onChange={setTarget} show={`${Math.round(target * 100)}%`} />
        <Slider label="instance start-up delay (minutes)" value={delay} min={0} max={15} step={1} onChange={setDelay} />
        <Slider label="spike size at 14:00 (req/s)" value={spike} min={0} max={1500} step={50} onChange={setSpike} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="minutes overloaded" value={String(sim.over)} tone={sim.over > 0 ? '#d9534f' : '#2f9e6e'} />
        <Stat label="instance-hours (cost)" value={fmt(sim.hours, 0)} tone={color} />
        <Stat label="peak instances" value={String(Math.max(...sim.inst))} />
      </div>
    </Card>
  )
}

// ── pricing models ─────────────────────────────────────────────────────────

function Cost({ color }: { color: string }) {
  const [rate, setRate] = useState(0.1)
  const [commit, setCommit] = useState(0.4)
  const [spot, setSpot] = useState(0.7)
  const [use, setUse] = useState(0.5)
  const hours = 24 * 365
  const od = (u: number) => rate * hours * u
  const res = () => rate * (1 - commit) * hours
  const spotCost = (u: number) => rate * (1 - spot) * hours * u * 1.08 // some work is redone after interruptions
  const be = 1 - commit
  return (
    <Card title="On-demand, committed and spot: where the break-even is" color={color} note="On-demand capacity is paid for only while it runs. A commitment (a reserved instance or savings plan) gives a discount in exchange for paying for every hour whether you use it or not, so it wins only above a break-even utilisation of 1 − discount. Spot or preemptible capacity is deeply discounted but can be reclaimed at short notice, so it suits interruptible work; the 8% here stands for work repeated after interruptions. The cheapest option depends on how steady your load is.">
      <div className="flex flex-wrap gap-3">
        <Slider label="on-demand price ($/hour)" value={rate} min={0.01} max={2} step={0.01} onChange={setRate} show={`$${rate.toFixed(2)}`} />
        <Slider label="commitment discount" value={commit} min={0.1} max={0.7} step={0.05} onChange={setCommit} show={`${Math.round(commit * 100)}%`} />
        <Slider label="spot discount" value={spot} min={0.3} max={0.9} step={0.05} onChange={setSpot} show={`${Math.round(spot * 100)}%`} />
        <Slider label="share of the year the workload runs" value={use} min={0.05} max={1} step={0.05} onChange={setUse} show={`${Math.round(use * 100)}%`} />
      </div>
      <PlotChart block={{ t: 'plot', x: [0, 1], y: [0, od(1) * 1.05], xLabel: 'share of the year the workload runs', yLabel: 'annual cost ($)', curves: [{ f: od, color: '#d9534f', label: 'on-demand' }, { f: res, color, label: 'committed (always on)' }, { f: spotCost, color: '#2f9e6e', label: 'spot' }], vlines: [{ x: be, label: 'break-even' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="on-demand" value={`$${Math.round(od(use)).toLocaleString('en-US')}`} />
        <Stat label="committed" value={`$${Math.round(res()).toLocaleString('en-US')}`} tone={color} />
        <Stat label="spot (interruptible)" value={`$${Math.round(spotCost(use)).toLocaleString('en-US')}`} />
        <Stat label="commitment break-even" value={`${Math.round(be * 100)}% utilisation`} />
      </div>
    </Card>
  )
}

// ── consistent hashing ─────────────────────────────────────────────────────

function fnv(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  h ^= h >>> 13
  h = Math.imul(h, 0x5bd1e995)
  h ^= h >>> 15
  return h >>> 0
}

function Ring({ color }: { color: string }) {
  const [nodes, setNodes] = useState(4)
  const [vnodes, setVnodes] = useState(1)
  const keys = 2000
  const colors = ['#3b6fd8', '#e07b2a', '#2f9e6e', '#7b4fc9', '#d9534f', '#8a6d1e', '#0e9aa7', '#c2410c', '#6d28d9', '#15803d', '#a16207', '#be185d']
  const build = (n: number) => {
    const ring: { pos: number; node: number }[] = []
    for (let i = 0; i < n; i++) for (let v = 0; v < vnodes; v++) ring.push({ pos: fnv(`node-${i}#${v}`), node: i })
    return ring.sort((a, b) => a.pos - b.pos)
  }
  const owner = (ring: { pos: number; node: number }[], k: number) => {
    const h = fnv(`key-${k}`)
    return (ring.find((r) => r.pos >= h) ?? ring[0]).node
  }
  const ring = useMemo(() => build(nodes), [nodes, vnodes]) // eslint-disable-line react-hooks/exhaustive-deps
  const bigger = useMemo(() => build(nodes + 1), [nodes, vnodes]) // eslint-disable-line react-hooks/exhaustive-deps
  const load = new Array(nodes).fill(0)
  let moved = 0
  for (let k = 0; k < keys; k++) {
    const o = owner(ring, k)
    load[o]++
    if (owner(bigger, k) !== o) moved++
  }
  let modMoved = 0
  for (let k = 0; k < keys; k++) if (fnv(`key-${k}`) % nodes !== fnv(`key-${k}`) % (nodes + 1)) modMoved++
  const ideal = keys / nodes
  const worst = Math.max(...load) / ideal
  const R = 120
  const pt = (pos: number, r = R) => [150 + r * Math.cos((pos / 4294967296) * 2 * Math.PI - Math.PI / 2), 150 + r * Math.sin((pos / 4294967296) * 2 * Math.PI - Math.PI / 2)]
  return (
    <Card title="Consistent hashing: adding a server without reshuffling everything" color={color} note="Spreading keys over servers with hash(key) mod N works until N changes: then almost every key lands on a different server and the cache or shard is wiped. Consistent hashing places servers and keys on a ring and gives each key to the next server clockwise, so adding a server only takes keys from its neighbour. With a single point per server the shares are lopsided; many virtual nodes per server even them out.">
      <div className="flex flex-wrap gap-3">
        <Slider label="servers" value={nodes} min={2} max={10} step={1} onChange={setNodes} />
        <Slider label="virtual nodes per server" value={vnodes} min={1} max={64} step={1} onChange={setVnodes} />
      </div>
      <div className="grid gap-3 sm:grid-cols-[300px_1fr]">
        <svg viewBox="0 0 300 300" className="mx-auto block h-auto w-full max-w-[300px] rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="A hash ring with servers">
          <circle cx={150} cy={150} r={R} fill="none" stroke="var(--line)" strokeWidth={10} />
          {ring.map((r, i) => {
            const [x, y] = pt(r.pos)
            return <circle key={i} cx={x} cy={y} r={vnodes > 16 ? 3 : 6} fill={colors[r.node % colors.length]} stroke="var(--surface)" strokeWidth={1} />
          })}
          {Array.from({ length: 120 }, (_, k) => {
            const [x, y] = pt(fnv(`key-${k}`), R + 16)
            return <circle key={k} cx={x} cy={y} r={1.6} fill={colors[owner(ring, k) % colors.length]} />
          })}
        </svg>
        <div className="flex flex-col gap-1.5">
          {load.map((l, i) => (
            <div key={i} className="grid grid-cols-[4rem_1fr_3rem] items-center gap-2 text-xs">
              <span className="font-bold">server {i + 1}</span>
              <span className="h-3.5 rounded-sm" style={{ background: 'var(--paper-2)' }}><span className="block h-full rounded-sm" style={{ width: `${Math.min(100, (l / (ideal * 2.2)) * 100)}%`, background: colors[i % colors.length] }} /></span>
              <span className="text-right font-mono">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="busiest server vs fair share" value={`${fmt(worst, 2)}×`} tone={color} />
        <Stat label="keys moved by adding a server (ring)" value={`${fmt((moved / keys) * 100, 0)}%`} tone="#2f9e6e" />
        <Stat label="keys moved with hash mod N" value={`${fmt((modMoved / keys) * 100, 0)}%`} tone="#d9534f" />
        <Stat label="ideal move: 1/(N+1)" value={`${fmt(100 / (nodes + 1), 0)}%`} />
      </div>
    </Card>
  )
}

// ── caching ────────────────────────────────────────────────────────────────

function CacheLab({ color }: { color: string }) {
  const [cacheMs, setCacheMs] = useState(1)
  const [backMs, setBackMs] = useState(80)
  const [skew, setSkew] = useState(1)
  const [cacheShare, setCacheShare] = useState(0.1)
  const items = 100000
  const H = (n: number, s: number) => {
    // Generalised harmonic number, via an integral approximation for large n.
    if (Math.abs(s - 1) < 1e-9) return Math.log(n) + 0.5772 + 1 / (2 * n)
    return (n ** (1 - s) - 1) / (1 - s) + 0.5 * (1 + n ** -s) + 0.5
  }
  const hit = (frac: number) => Math.min(1, H(Math.max(1, frac * items), skew) / H(items, skew))
  const h = hit(cacheShare)
  const eff = h * cacheMs + (1 - h) * (cacheMs + backMs)
  return (
    <Card title="Caching: hit ratio and the latency you actually get" color={color} note="Effective latency = hit ratio × cache time + miss ratio × (cache time + backend time). Because request popularity is heavily skewed (a Zipf law, where the k-th most popular item is requested in proportion to 1/k^s), a small cache catches a large share of requests: the first few percent of items matter most. The flatter the popularity (small s), the less a cache helps.">
      <div className="flex flex-wrap gap-3">
        <Slider label="cache holds this share of all items" value={cacheShare} min={0.001} max={1} step={0.001} onChange={setCacheShare} show={`${(cacheShare * 100).toFixed(1)}%`} />
        <Slider label="popularity skew (Zipf s)" value={skew} min={0.4} max={1.6} step={0.05} onChange={setSkew} show={skew.toFixed(2)} />
        <Slider label="cache latency (ms)" value={cacheMs} min={0.2} max={10} step={0.2} onChange={setCacheMs} />
        <Slider label="backend latency (ms)" value={backMs} min={5} max={500} step={5} onChange={setBackMs} />
      </div>
      <PlotChart block={{ t: 'plot', x: [0, 1], y: [0, 1], xLabel: 'cache size as a share of all items', yLabel: 'hit ratio', curves: [0.6, 1, 1.4].map((s, i) => ({ f: (x: number) => Math.min(1, (() => { const n = Math.max(1, x * items); const HH = (m: number) => (Math.abs(s - 1) < 1e-9 ? Math.log(m) + 0.5772 + 1 / (2 * m) : (m ** (1 - s) - 1) / (1 - s) + 0.5 * (1 + m ** -s) + 0.5); return HH(n) / HH(items) })()), color: ['#d9534f', color, '#2f9e6e'][i], label: `s = ${s}` })), vlines: [{ x: cacheShare, label: 'now' }] }} />
      <div className="grid grid-cols-3 gap-2">
        <Stat label="hit ratio" value={`${fmt(h * 100, 1)}%`} tone={color} />
        <Stat label="effective latency" value={`${fmt(eff, 1)} ms`} />
        <Stat label="speed-up over no cache" value={`${fmt((cacheMs + backMs) / eff, 1)}×`} />
      </div>
    </Card>
  )
}

// ── quorums ────────────────────────────────────────────────────────────────

function Quorum({ color }: { color: string }) {
  const [n, setN] = useState(5)
  const [w, setW] = useState(3)
  const [r, setR] = useState(3)
  const [down, setDown] = useState(1)
  const W = Math.min(w, n)
  const R = Math.min(r, n)
  const strong = R + W > n
  const up = n - down
  return (
    <Card title="Quorums: how many replicas must agree?" color={color} note="With N replicas, a write that waits for W acknowledgements and a read that asks R replicas are guaranteed to overlap in at least one replica when R + W > N, so a read always sees the latest write (strong consistency). Raising W or R tightens consistency but means an operation fails once fewer than that many replicas are reachable. Consensus protocols such as Raft and Paxos use a majority quorum, W = R = ⌊N/2⌋ + 1, so a group of N survives ⌊(N−1)/2⌋ failures and can never split into two groups that both believe they are in charge.">
      <div className="flex flex-wrap gap-3">
        <Slider label="replicas N" value={n} min={1} max={9} step={1} onChange={setN} />
        <Slider label="write quorum W" value={W} min={1} max={n} step={1} onChange={setW} />
        <Slider label="read quorum R" value={R} min={1} max={n} step={1} onChange={setR} />
        <Slider label="replicas currently down" value={Math.min(down, n)} min={0} max={n} step={1} onChange={setDown} />
      </div>
      <div className="flex flex-wrap gap-1.5" aria-label="replicas">
        {Array.from({ length: n }, (_, i) => (
          <span key={i} className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border text-xs font-bold" style={{ borderColor: 'var(--line)', background: i < up ? color : 'var(--paper-2)', color: i < up ? 'var(--surface)' : 'var(--ink-soft)', textDecoration: i < up ? 'none' : 'line-through' }}>{i + 1}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="R + W > N ?" value={strong ? `yes (${R}+${W} > ${n}): strongly consistent` : `no (${R}+${W} ≤ ${n}): stale reads possible`} tone={strong ? '#2f9e6e' : '#d9534f'} />
        <Stat label="writes available?" value={up >= W ? 'yes' : 'no'} tone={up >= W ? '#2f9e6e' : '#d9534f'} />
        <Stat label="reads available?" value={up >= R ? 'yes' : 'no'} tone={up >= R ? '#2f9e6e' : '#d9534f'} />
        <Stat label="majority quorum survives" value={`${Math.floor((n - 1) / 2)} failure${Math.floor((n - 1) / 2) === 1 ? '' : 's'}`} />
      </div>
    </Card>
  )
}

// ── subnetting ─────────────────────────────────────────────────────────────

function Cidr({ color }: { color: string }) {
  const [ip, setIp] = useState('10.0.12.77')
  const [prefix, setPrefix] = useState(22)
  const parts = ip.split('.').map(Number)
  const valid = parts.length === 4 && parts.every((x) => Number.isInteger(x) && x >= 0 && x <= 255)
  const addr = valid ? ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0 : 0
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0
  const net = (addr & mask) >>> 0
  const bc = (net | (~mask >>> 0)) >>> 0
  const str = (x: number) => [x >>> 24, (x >>> 16) & 255, (x >>> 8) & 255, x & 255].join('.')
  const total = 2 ** (32 - prefix)
  const bits = (x: number) => x.toString(2).padStart(32, '0')
  return (
    <Card title="CIDR and subnet arithmetic" color={color} note="An address like 10.0.12.77/22 means the first 22 bits are the network and the last 10 are the host. The mask has 22 ones; AND-ing the address with the mask gives the network address, and setting all host bits to one gives the broadcast address. A /n network holds 2^(32−n) addresses. Cloud providers reserve a few in every subnet (for example five in AWS), so a /28 gives 11 usable addresses, not 14. Choosing prefix lengths up front matters because VPCs and subnets are hard to resize later.">
      <div className="flex flex-wrap gap-3">
        <label className="flex min-w-40 flex-1 flex-col gap-1 text-xs font-bold">
          IPv4 address
          <input value={ip} onChange={(e) => setIp(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 font-mono text-sm" style={{ borderColor: valid ? 'var(--ink)' : '#d9534f', background: 'var(--surface)' }} />
        </label>
        <Slider label="prefix length /n" value={prefix} min={8} max={30} step={1} onChange={setPrefix} />
      </div>
      {valid && (
        <>
          <p className="font-mono text-[11px] break-all">
            {bits(addr).split('').map((b, i) => (
              <span key={i} style={{ color: i < prefix ? color : 'var(--ink-soft)', fontWeight: i < prefix ? 700 : 400 }}>{b}{(i + 1) % 8 === 0 && i < 31 ? '.' : ''}</span>
            ))}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Stat label="network address" value={`${str(net)}/${prefix}`} tone={color} />
            <Stat label="subnet mask" value={str(mask)} />
            <Stat label="broadcast address" value={str(bc)} />
            <Stat label="first and last host" value={prefix >= 31 ? '–' : `${str(net + 1)} – ${str(bc - 1)}`} />
            <Stat label="addresses in the block" value={total.toLocaleString('en-US')} />
            <Stat label="usable (minus 2 classic, 5 cloud)" value={`${Math.max(total - 2, 0).toLocaleString('en-US')} / ${Math.max(total - 5, 0).toLocaleString('en-US')}`} />
          </div>
        </>
      )}
      {!valid && <p className="text-sm" style={{ color: '#d9534f' }}>Enter four numbers from 0 to 255 separated by dots.</p>}
    </Card>
  )
}

// ── percentiles ────────────────────────────────────────────────────────────

function Percentiles({ color }: { color: string }) {
  const [slow, setSlow] = useState(0.02)
  const [fan, setFan] = useState(20)
  const [seed, setSeed] = useState(7)
  const data = useMemo(() => {
    const rand = rng(seed)
    const out = new Float64Array(20000)
    for (let i = 0; i < out.length; i++) {
      const base = Math.exp(Math.log(40) + 0.35 * normal(rand)) // typical request: about 40 ms
      out[i] = rand() < slow ? base * (8 + 12 * rand()) : base // occasional slow outlier
    }
    return out
  }, [slow, seed])
  const sorted = useMemo(() => Float64Array.from(data).sort(), [data])
  const mean = data.reduce((a, b) => a + b, 0) / data.length
  const p50 = quantile(sorted, 0.5)
  const p95 = quantile(sorted, 0.95)
  const p99 = quantile(sorted, 0.99)
  const pAny = 1 - (1 - slow) ** fan
  return (
    <Card title="Why averages lie: percentiles and fan-out" color={color} note="Latency distributions have a long tail: most requests are quick and a few are very slow. The mean hides the tail, so services are judged on percentiles: p50 is the typical request, p99 is the slowest 1%. The tail matters more than it looks, because a page that calls many backends is as slow as its slowest call: if each call is slow 2% of the time, a page that makes 20 calls is slow 1 − 0.98²⁰ ≈ 33% of the time.">
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="share of requests that hit a slow path" value={slow} min={0} max={0.1} step={0.0025} onChange={setSlow} show={`${(slow * 100).toFixed(2)}%`} />
        <Slider label="backend calls per page (fan-out)" value={fan} min={1} max={100} step={1} onChange={setFan} />
        <Btn onClick={() => setSeed(seed + 1)}>New sample</Btn>
      </div>
      <Hist values={data} lo={0} hi={400} bins={50} color={color} marks={[{ at: p50, label: 'p50', color: '#2f9e6e' }, { at: Math.min(mean, 399), label: 'mean', color: '#8a6d1e' }, { at: Math.min(p99, 399), label: 'p99' }]} xLabel="latency (ms)" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <Stat label="mean" value={`${fmt(mean, 0)} ms`} />
        <Stat label="p50" value={`${fmt(p50, 0)} ms`} tone="#2f9e6e" />
        <Stat label="p95" value={`${fmt(p95, 0)} ms`} />
        <Stat label="p99" value={`${fmt(p99, 0)} ms`} tone="#d9534f" />
        <Stat label={`pages with at least one slow call (${fan} calls)`} value={`${fmt(pAny * 100, 0)}%`} tone={color} />
      </div>
    </Card>
  )
}

// ── the speed of light between regions ─────────────────────────────────────

const CITIES: Record<string, [number, number]> = { Singapore: [1.35, 103.82], Sydney: [-33.87, 151.21], Tokyo: [35.68, 139.69], Mumbai: [19.08, 72.88], Frankfurt: [50.11, 8.68], London: [51.51, -0.13], 'São Paulo': [-23.55, -46.63], 'N. Virginia': [38.95, -77.45], 'Oregon': [45.84, -119.7], 'Cape Town': [-33.92, 18.42] }

function Latency({ color }: { color: string }) {
  const [from, setFrom] = useState('Singapore')
  const [to, setTo] = useState('Frankfurt')
  const km = (a: [number, number], b: [number, number]) => {
    const r = Math.PI / 180
    const dLat = (b[0] - a[0]) * r
    const dLon = (b[1] - a[1]) * r
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLon / 2) ** 2
    return 2 * 6371 * Math.asin(Math.sqrt(h))
  }
  const d = km(CITIES[from], CITIES[to])
  const vacuum = (d / 299792) * 2 * 1000
  const fibre = (d / 200000) * 2 * 1000
  const opts = Object.keys(CITIES).map((c) => [c, c] as [string, string])
  return (
    <Card title="The speed of light sets a floor on latency" color={color} note="Light in optical fibre travels at about two thirds of its speed in a vacuum, roughly 200 km per millisecond. The round-trip time between two places can therefore never be below 2 × distance ÷ 200 km/ms, whatever the hardware. Real routes are longer than the great-circle line and add switching delays, so measured times are typically 1.5 to 2 times the floor. This is why you put servers near users, why a chatty protocol that needs 10 round trips feels slow across an ocean, and why no amount of money buys a faster answer from the other side of the planet.">
      <div className="flex flex-wrap gap-3">
        <Select label="from" value={from} onChange={setFrom} options={opts} />
        <Select label="to" value={to} onChange={setTo} options={opts} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="great-circle distance" value={`${Math.round(d).toLocaleString('en-US')} km`} />
        <Stat label="floor, light in a vacuum (round trip)" value={`${fmt(vacuum, 0)} ms`} />
        <Stat label="floor, light in fibre (round trip)" value={`${fmt(fibre, 0)} ms`} tone={color} />
        <Stat label="a realistic route (×1.7)" value={`${fmt(fibre * 1.7, 0)} ms`} />
      </div>
      <p className="text-sm" style={soft}>A protocol that needs 4 round trips to set up a connection (TCP plus a TLS handshake) spends about {fmt(fibre * 1.7 * 4, 0)} ms before a single byte of your page arrives. Pairs: try Singapore to Sydney, London to N. Virginia and São Paulo to Tokyo.</p>
      <Pills label="Quick pair" value={`${from}-${to}`} options={[['Singapore-Sydney', 'SG ↔ Sydney'], ['London-N. Virginia', 'London ↔ Virginia'], ['São Paulo-Tokyo', 'São Paulo ↔ Tokyo']]} onChange={(v) => { const [a, b] = v.split('-'); setFrom(a); setTo(b) }} />
    </Card>
  )
}
