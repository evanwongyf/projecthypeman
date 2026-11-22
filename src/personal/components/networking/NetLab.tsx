import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { Card, Pills, Slider, Stat, soft } from '../sports/shared'

type NL = Extract<Block, { t: 'net-lab' }>

export default function NetLab({ block, color }: { block: NL; color: string }) {
  switch (block.viz) {
    case 'mqtt':
      return <MqttLab color={color} />
    case 'link-budget':
      return <LinkBudget color={color} />
    case 'battery':
      return <BatteryLab color={color} />
    case 'tcp':
      return <TcpLab color={color} />
  }
}

// ---------------------------------------------------------------- MQTT topic filters
function mqttMatch(filter: string, topic: string): boolean {
  const f = filter.split('/')
  const t = topic.split('/')
  if (topic.startsWith('$') && (f[0] === '+' || f[0] === '#')) return false
  for (let i = 0; i < f.length; i++) {
    if (f[i] === '#') return i === f.length - 1
    if (i >= t.length) return false
    if (f[i] !== '+' && f[i] !== t[i]) return false
  }
  return f.length === t.length
}
function mqttValid(filter: string): string | null {
  if (!filter) return 'A filter cannot be empty.'
  const parts = filter.split('/')
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    if (p.includes('#') && (p !== '#' || i !== parts.length - 1)) return '# must stand alone as the last level.'
    if (p.includes('+') && p !== '+') return '+ must fill a whole level.'
  }
  return null
}
const TOPICS = ['home/livingroom/temperature', 'home/livingroom/humidity', 'home/kitchen/temperature', 'home/kitchen/light/state', 'home/garage/door', 'factory/line1/motor3/vibration', 'factory/line2/motor1/vibration', 'factory/line1/status', 'home', '$SYS/broker/uptime']
const FILTERS = ['home/+/temperature', 'home/#', 'home/livingroom/+', '+/+/status', 'factory/+/+/vibration', '#', '+/livingroom/#', 'home/kitchen/light/state']

function MqttLab({ color }: { color: string }) {
  const [f, setF] = useState('home/+/temperature')
  const err = mqttValid(f)
  return (
    <Card title="MQTT topic filter matcher" color={color} note="Publishers send to a topic such as home/kitchen/temperature. Subscribers ask the broker for a filter. + matches exactly one level; # matches everything below, and must be last. Topics beginning with $ are reserved for the broker and are not matched by a leading wildcard.">
      <label className="flex flex-col gap-1 text-sm font-bold">
        Subscription filter
        <input value={f} onChange={(e) => setF(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 font-mono text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }} spellCheck={false} />
      </label>
      <Pills<string> value={FILTERS.includes(f) ? f : ''} options={FILTERS.map((x) => [x, x] as [string, string])} onChange={setF} label="Example filters" />
      {err && <p className="text-sm font-bold" style={{ color: '#d9534f' }}>{err}</p>}
      <ul className="flex flex-col gap-1" aria-label="Published topics">
        {TOPICS.map((t) => {
          const m = !err && mqttMatch(f, t)
          return (
            <li key={t} className="flex items-center gap-2 rounded-[var(--radius)] border px-2 py-1 font-mono text-xs sm:text-sm" style={{ borderColor: 'var(--line)', background: m ? 'color-mix(in srgb, var(--mint) 45%, var(--surface))' : 'var(--surface)', opacity: m ? 1 : 0.7 }}>
              <span aria-hidden>{m ? '✓' : '·'}</span>
              <span className="flex-1 break-all">{t}</span>
              <span className="font-sans text-xs font-bold">{m ? 'delivered' : 'not delivered'}</span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

// ---------------------------------------------------------------- link budget
const RADIOS: Record<string, { name: string; f: number; tx: number; gt: number; gr: number; sens: number; n: number }> = {
  ble: { name: 'Bluetooth LE', f: 2440, tx: 0, gt: 0, gr: 0, sens: -95, n: 3 },
  zigbee: { name: 'Zigbee / Thread', f: 2440, tx: 4, gt: 0, gr: 0, sens: -100, n: 3 },
  wifi: { name: 'Wi-Fi 2.4 GHz', f: 2437, tx: 17, gt: 2, gr: 2, sens: -82, n: 3.5 },
  lora: { name: 'LoRa (868/915 MHz, slow)', f: 868, tx: 14, gt: 2, gr: 2, sens: -137, n: 3 },
  nb: { name: 'NB-IoT (sub-GHz)', f: 800, tx: 23, gt: 0, gr: 5, sens: -128, n: 3 },
}
function LinkBudget({ color }: { color: string }) {
  const [k, setK] = useState('lora')
  const r = RADIOS[k]
  const [f, setF] = useState(r.f)
  const [tx, setTx] = useState(r.tx)
  const [gt, setGt] = useState(r.gt)
  const [gr, setGr] = useState(r.gr)
  const [sens, setSens] = useState(r.sens)
  const [margin, setMargin] = useState(10)
  const [n, setN] = useState(r.n)
  const pick = (v: string) => { const q = RADIOS[v]; setK(v); setF(q.f); setTx(q.tx); setGt(q.gt); setGr(q.gr); setSens(q.sens); setN(q.n) }
  const maxLoss = tx + gt + gr - sens - margin
  const pl1 = 20 * Math.log10(f) - 27.56 // free-space loss at 1 metre
  const dFree = Math.pow(10, (maxLoss - pl1) / 20)
  const dReal = Math.pow(10, (maxLoss - pl1) / (10 * n))
  const fmt = (m: number) => (m >= 1000 ? `${(m / 1000).toFixed(m > 20000 ? 0 : 1)} km` : `${Math.round(m)} m`)
  return (
    <Card title="Wireless link budget" color={color} note="The link works while the signal at the receiver stays above its sensitivity. Maximum path loss = transmit power + antenna gains − receiver sensitivity − fade margin. Free-space loss grows with 20 log10 of distance; walls and clutter make it grow faster, modelled here by a path-loss exponent n. Values are typical figures, so check your datasheet.">
      <Pills<string> value={k} options={Object.entries(RADIOS).map(([x, v]) => [x, v.name] as [string, string])} onChange={pick} label="Radio" />
      <div className="flex flex-wrap gap-4">
        <Slider label="Frequency (MHz)" value={f} min={400} max={5800} step={10} onChange={setF} />
        <Slider label="Transmit power (dBm)" value={tx} min={-20} max={30} step={1} onChange={setTx} />
        <Slider label="Antenna gains, each end (dBi)" value={gt} min={0} max={12} step={1} onChange={(v) => { setGt(v); setGr(v) }} />
        <Slider label="Receiver sensitivity (dBm)" value={sens} min={-140} max={-60} step={1} onChange={setSens} />
        <Slider label="Fade margin (dB)" value={margin} min={0} max={30} step={1} onChange={setMargin} />
        <Slider label="Environment exponent n (2 open air, 3 to 4 buildings)" value={n} min={2} max={5} step={0.1} onChange={setN} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Stat label="Max path loss" value={`${maxLoss.toFixed(0)} dB`} />
        <Stat label="Range in free space" value={fmt(dFree)} tone="var(--mustard)" />
        <Stat label={`Range with n = ${n.toFixed(1)}`} value={fmt(dReal)} tone={color} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>Rule of thumb: every 6 dB gained doubles free-space range. Doubling frequency costs 6 dB, which is one reason sub-gigahertz radios reach further than 2.4 GHz ones.</p>
    </Card>
  )
}

// ---------------------------------------------------------------- battery life
const BATS: Record<string, { name: string; mah: number; sleep: number; act: number; ms: number; every: number }> = {
  coin: { name: 'Coin cell BLE sensor', mah: 225, sleep: 3, act: 8, ms: 30, every: 60 },
  lora: { name: '2×AA LoRa node', mah: 2400, sleep: 8, act: 45, ms: 400, every: 900 },
  wifi: { name: '18650 Wi-Fi sensor', mah: 3000, sleep: 20, act: 120, ms: 3000, every: 600 },
}
function BatteryLab({ color }: { color: string }) {
  const [k, setK] = useState('lora')
  const b = BATS[k]
  const [mah, setMah] = useState(b.mah)
  const [sleep, setSleep] = useState(b.sleep)
  const [act, setAct] = useState(b.act)
  const [ms, setMs] = useState(b.ms)
  const [every, setEvery] = useState(b.every)
  const pick = (v: string) => { const q = BATS[v]; setK(v); setMah(q.mah); setSleep(q.sleep); setAct(q.act); setMs(q.ms); setEvery(q.every) }
  const res = useMemo(() => {
    const T = every * 1000
    const active = Math.min(ms, T)
    const avgMa = (act * active + (sleep / 1000) * (T - active)) / T
    const usable = mah * 0.8
    const hours = usable / avgMa
    const sleepShare = ((sleep / 1000) * (T - active)) / (act * active + (sleep / 1000) * (T - active))
    return { avgMa, years: hours / 8760, sleepShare }
  }, [mah, sleep, act, ms, every])
  return (
    <Card title="Battery life of a sleeping sensor" color={color} note="A duty-cycled device sleeps almost all the time and wakes briefly to measure and transmit. Average current is the time-weighted mean of the two states. 20 per cent of the rated capacity is held back for cold, ageing and self-discharge. Real devices also have sensor warm-up, retries and regulator losses.">
      <Pills<string> value={k} options={Object.entries(BATS).map(([x, v]) => [x, v.name] as [string, string])} onChange={pick} label="Example" />
      <div className="flex flex-wrap gap-4">
        <Slider label="Battery capacity (mAh)" value={mah} min={50} max={6000} step={25} onChange={setMah} />
        <Slider label="Sleep current (µA)" value={sleep} min={1} max={200} step={1} onChange={setSleep} />
        <Slider label="Active current (mA)" value={act} min={1} max={300} step={1} onChange={setAct} />
        <Slider label="Awake time per wake-up (ms)" value={ms} min={5} max={10000} step={5} onChange={setMs} />
        <Slider label="Wake-up interval (s)" value={every} min={1} max={3600} step={1} onChange={setEvery} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Stat label="Average current" value={`${(res.avgMa * 1000).toFixed(1)} µA`} />
        <Stat label="Battery life" value={res.years >= 1 ? `${res.years.toFixed(1)} years` : `${(res.years * 365).toFixed(0)} days`} tone={color} />
        <Stat label="Share of energy used while asleep" value={`${Math.round(res.sleepShare * 100)}%`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>{res.sleepShare > 0.5 ? 'Sleep current dominates: the biggest saving is a lower-power sleep mode or a better regulator.' : 'Active bursts dominate: send less often, send less data, or shorten the time the radio is on.'}</p>
    </Card>
  )
}

// ---------------------------------------------------------------- TCP congestion window
function TcpLab({ color }: { color: string }) {
  const [every, setEvery] = useState(40)
  const [rtt, setRtt] = useState(50)
  const [mode, setMode] = useState<'reno' | 'tahoe'>('reno')
  const data = useMemo(() => {
    let cwnd = 1
    let ss = 64
    const out: { c: number; s: number }[] = []
    for (let t = 0; t < 160; t++) {
      out.push({ c: cwnd, s: ss })
      if (t > 0 && t % every === 0) {
        ss = Math.max(cwnd / 2, 2)
        cwnd = mode === 'reno' ? ss : 1
      } else if (cwnd < ss) cwnd = Math.min(cwnd * 2, ss)
      else cwnd += 1
    }
    return out
  }, [every, mode])
  const W = 480
  const H = 220
  const max = Math.max(...data.map((d) => d.c)) * 1.1
  const px = (i: number) => 38 + (i / (data.length - 1)) * (W - 48)
  const py = (v: number) => 10 + (1 - v / max) * (H - 34)
  const avg = data.reduce((a, d) => a + d.c, 0) / data.length
  const mbps = (avg * 1460 * 8) / (rtt / 1000) / 1e6
  return (
    <Card title="TCP congestion window" color={color} note="Each step is one round-trip time. The window doubles in slow start until it reaches the slow-start threshold, then grows by one segment per round trip (additive increase). A loss halves the threshold (multiplicative decrease). Reno resumes at half the window; Tahoe restarts from one segment. This is a simplified classic model; modern stacks such as CUBIC and BBR differ.">
      <Pills<'reno' | 'tahoe'> value={mode} options={[['reno', 'Reno (fast recovery)'], ['tahoe', 'Tahoe (restart)']]} onChange={setMode} label="Algorithm" />
      <div className="flex flex-wrap gap-4">
        <Slider label="A loss every N round trips" value={every} min={10} max={80} step={5} onChange={setEvery} />
        <Slider label="Round-trip time (ms)" value={rtt} min={5} max={300} step={5} onChange={setRtt} />
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: 540 }} role="img" aria-label="Congestion window over time">
        <rect x={38} y={10} width={W - 48} height={H - 34} fill="var(--surface)" stroke="var(--ink)" />
        <polyline fill="none" stroke={color} strokeWidth={2.5} points={data.map((d, i) => `${px(i)},${py(d.c)}`).join(' ')} />
        <polyline fill="none" stroke="#e0449a" strokeWidth={1.5} strokeDasharray="4 3" points={data.map((d, i) => `${px(i)},${py(d.s)}`).join(' ')} />
        <text x={W / 2} y={H - 4} fontSize={10} textAnchor="middle" fill="var(--ink-soft)">round trips</text>
        <text x={4} y={H / 2} fontSize={10} fill="var(--ink-soft)" transform={`rotate(-90 8 ${H / 2})`}>segments in flight</text>
        <text x={44} y={22} fontSize={10} fill={color}>cwnd</text>
        <text x={80} y={22} fontSize={10} fill="#e0449a">ssthresh</text>
      </svg>
      <div className="flex flex-wrap gap-2">
        <Stat label="Average window" value={`${avg.toFixed(1)} segments`} />
        <Stat label={`Throughput at ${rtt} ms RTT`} value={`${mbps.toFixed(1)} Mbit/s`} tone={color} />
      </div>
    </Card>
  )
}
