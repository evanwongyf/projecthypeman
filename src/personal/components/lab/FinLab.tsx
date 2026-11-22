import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Btn, Card, Pills, Slider, Stat, normal, rng, soft } from './kit'

type FinBlock = Extract<Block, { t: 'fin-lab' }>

export default function FinLab({ block, color }: { block: FinBlock; color: string }) {
  switch (block.viz) {
    case 'screener':
      return <Screener color={color} />
    case 'dca-lump':
      return <DcaLump color={color} />
    case 'alloc-growth':
      return <AllocGrowth color={color} />
    case 'pip-calc':
      return <PipCalc color={color} />
    case 'cross-rates':
      return <CrossRates color={color} />
    case 'carry':
      return <Carry color={color} />
    case 'amm':
      return <Amm color={color} />
    case 'supply':
      return <Supply color={color} />
    case 'vesting':
      return <Vesting color={color} />
    case 'fx-hedge':
      return <FxHedge color={color} />
    case 'metcalfe':
      return <Metcalfe color={color} />
    case 'mvrv':
      return <Mvrv color={color} />
  }
}

const money = (n: number, d = 0) => `${n < 0 ? '−' : ''}$${Math.abs(n).toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d })}`
const pct = (n: number, d = 1) => `${n.toFixed(d)}%`

// ---------------------------------------------------------------------------------------
// Stock screener on a synthetic universe
// ---------------------------------------------------------------------------------------

type Stock = { name: string; sector: string; pe: number; pb: number; roe: number; de: number; growth: number; yld: number; mom: number; cap: number; fwd: number }

function universe(seed: number): Stock[] {
  const r = rng(seed * 101 + 7)
  const sectors = ['Banks', 'Tech', 'Industrials', 'Consumer', 'Health', 'Energy', 'REITs', 'Utilities']
  return Array.from({ length: 80 }, (_, i) => {
    const sector = sectors[Math.floor(r() * sectors.length)]
    const pe = Math.max(4, 16 * Math.exp(0.5 * normal(r)))
    const roe = Math.max(-5, 12 + 7 * normal(r))
    const growth = 6 + 9 * normal(r)
    const de = Math.max(0, 0.7 + 0.5 * normal(r))
    const pb = Math.max(0.3, (pe * Math.max(roe, 2)) / 100 + 0.2 * normal(r))
    const yld = Math.max(0, 5 - pe / 6 + 1.2 * normal(r) + (sector === 'REITs' ? 2 : 0))
    const mom = 8 + 22 * normal(r)
    const cap = Math.exp(7 + 1.4 * normal(r))
    // forward return: a small value and quality tilt plus a lot of noise
    const value = clamp((16 - pe) / 10, -1, 1)
    const quality = clamp((roe - 12) / 10, -1, 1)
    const fwd = 7 + 2 * value + 1 * quality + 22 * normal(r)
    return { name: `${sector.slice(0, 3).toUpperCase()}${String(i + 1).padStart(2, '0')}`, sector, pe, pb, roe, de, growth, yld, mom, cap, fwd }
  })
}
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

function Screener({ color }: { color: string }) {
  const [seed, setSeed] = useState(1)
  const [peMax, setPeMax] = useState(40)
  const [pbMax, setPbMax] = useState(6)
  const [roeMin, setRoeMin] = useState(0)
  const [deMax, setDeMax] = useState(2)
  const [growthMin, setGrowthMin] = useState(-10)
  const [yldMin, setYldMin] = useState(0)
  const [momMin, setMomMin] = useState(-50)
  const u = useMemo(() => universe(seed), [seed])
  const passes = u.filter((s) => s.pe <= peMax && s.pb <= pbMax && s.roe >= roeMin && s.de <= deMax && s.growth >= growthMin && s.yld >= yldMin && s.mom >= momMin)
  const avg = (xs: Stock[], f: (s: Stock) => number) => (xs.length ? xs.reduce((t, s) => t + f(s), 0) / xs.length : NaN)
  const sd = (xs: Stock[]) => {
    if (xs.length < 2) return NaN
    const m = avg(xs, (s) => s.fwd)
    return Math.sqrt(xs.reduce((t, s) => t + (s.fwd - m) ** 2, 0) / (xs.length - 1))
  }
  const se = sd(passes) / Math.sqrt(passes.length)
  const preset = (p: string) => {
    setPeMax(40); setPbMax(6); setRoeMin(0); setDeMax(2); setGrowthMin(-10); setYldMin(0); setMomMin(-50)
    if (p === 'value') { setPeMax(14); setPbMax(1.5); setDeMax(1) }
    if (p === 'quality') { setRoeMin(15); setDeMax(0.8); setGrowthMin(5) }
    if (p === 'growth') { setGrowthMin(15); setPeMax(40) }
    if (p === 'dividend') { setYldMin(4); setDeMax(1.2) }
    if (p === 'momentum') { setMomMin(25) }
  }
  const shown = [...passes].sort((a, b) => a.pe - b.pe).slice(0, 12)
  return (
    <Card title="Stock screener: filters on a synthetic market" color={color} note="A screen is a set of filters that narrows a universe of stocks to a short list for research. This universe of 80 stocks is invented (random numbers with realistic ranges): its forward returns contain only a faint real value and quality tilt and a great deal of noise, as in real markets. Apply a screen, look at the average forward return of the stocks that pass, and then press ‘new market’ a few times: a screen that ‘worked’ in one draw often fails in the next. That is the danger of back-tested screens, and the reason a screen should be the start of research and not the end.">
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => preset('all')}>Reset</Btn>
        <Btn onClick={() => preset('value')}>Value</Btn>
        <Btn onClick={() => preset('quality')}>Quality</Btn>
        <Btn onClick={() => preset('growth')}>Growth</Btn>
        <Btn onClick={() => preset('dividend')}>Dividend</Btn>
        <Btn onClick={() => preset('momentum')}>Momentum</Btn>
        <Btn onClick={() => setSeed((s) => s + 1)}>New market</Btn>
      </div>
      <div className="flex flex-wrap gap-3">
        <Slider label="P/E at most" value={peMax} min={5} max={40} step={1} onChange={setPeMax} />
        <Slider label="P/B at most" value={pbMax} min={0.5} max={6} step={0.1} onChange={setPbMax} show={pbMax.toFixed(1)} />
        <Slider label="ROE at least (%)" value={roeMin} min={0} max={25} step={1} onChange={setRoeMin} />
        <Slider label="debt/equity at most" value={deMax} min={0.2} max={2} step={0.1} onChange={setDeMax} show={deMax.toFixed(1)} />
        <Slider label="revenue growth at least (%)" value={growthMin} min={-10} max={25} step={1} onChange={setGrowthMin} />
        <Slider label="dividend yield at least (%)" value={yldMin} min={0} max={8} step={0.5} onChange={setYldMin} show={yldMin.toFixed(1)} />
        <Slider label="12-month momentum at least (%)" value={momMin} min={-50} max={50} step={5} onChange={setMomMin} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="stocks passing" value={`${passes.length} of ${u.length}`} tone={color} />
        <Stat label="average forward return, passing" value={passes.length ? pct(avg(passes, (s) => s.fwd)) : '–'} />
        <Stat label="average forward return, all" value={pct(avg(u, (s) => s.fwd))} />
        <Stat label="standard error of the passing average" value={passes.length > 1 ? `± ${se.toFixed(1)} pts` : '–'} />
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <table className="w-full tabular-nums">
          <thead>
            <tr className="text-left"><th>Stock</th><th>Sector</th><th className="text-right">P/E</th><th className="text-right">P/B</th><th className="text-right">ROE %</th><th className="text-right">D/E</th><th className="text-right">Growth %</th><th className="text-right">Yield %</th><th className="text-right">12m %</th></tr>
          </thead>
          <tbody>
            {shown.map((s) => (
              <tr key={s.name}><td>{s.name}</td><td>{s.sector}</td><td className="text-right">{s.pe.toFixed(1)}</td><td className="text-right">{s.pb.toFixed(1)}</td><td className="text-right">{s.roe.toFixed(0)}</td><td className="text-right">{s.de.toFixed(1)}</td><td className="text-right">{s.growth.toFixed(0)}</td><td className="text-right">{s.yld.toFixed(1)}</td><td className="text-right">{s.mom.toFixed(0)}</td></tr>
            ))}
          </tbody>
        </table>
        {passes.length > shown.length && <p className="mt-1" style={soft}>…and {passes.length - shown.length} more, sorted by P/E.</p>}
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Lump sum or dollar-cost averaging
// ---------------------------------------------------------------------------------------

function DcaLump({ color }: { color: string }) {
  const [mu, setMu] = useState(7)
  const [vol, setVol] = useState(16)
  const [months, setMonths] = useState(12)
  const [seed, setSeed] = useState(1)
  const sim = useMemo(() => {
    const r = rng(seed * 13 + 5)
    const total = 12000
    const T = 24
    const paths = 400
    let lumpWins = 0
    const diffs: number[] = []
    let sample: { lump: number[]; dca: number[] } = { lump: [], dca: [] }
    for (let p = 0; p < paths; p++) {
      const price = [1]
      for (let t = 1; t <= T; t++) {
        const m = mu / 100 / 12
        const s = vol / 100 / Math.sqrt(12)
        price.push(price[t - 1] * Math.exp(m - 0.5 * s * s + s * normal(r)))
      }
      const lumpUnits = total / price[0]
      // DCA: equal instalments at the start of each of the first n months, the rest in cash (no interest)
      let dcaUnits = 0
      for (let k = 0; k < months; k++) dcaUnits += total / months / price[k]
      const lumpV = lumpUnits * price[T]
      const dcaV = dcaUnits * price[T]
      if (lumpV > dcaV) lumpWins++
      diffs.push((lumpV - dcaV) / total)
      if (p === 0) sample = { lump: price.map((x) => lumpUnits * x), dca: price.map((x, t) => { let u = 0; for (let k = 0; k < Math.min(t + 1, months); k++) u += total / months / price[k]; const cash = total * (1 - Math.min(t + 1, months) / months); return u * x + cash }) }
    }
    diffs.sort((a, b) => a - b)
    return { winRate: lumpWins / paths, median: diffs[Math.floor(paths / 2)], p5: diffs[Math.floor(paths * 0.05)], p95: diffs[Math.floor(paths * 0.95)], sample }
  }, [mu, vol, months, seed])
  return (
    <Card title="Lump sum or dollar-cost averaging? A simulation" color={color} note="You have $12,000 to invest. Lump sum puts it all in at once; dollar-cost averaging (DCA) invests equal amounts over the chosen number of months and holds the rest in cash. The simulation runs 400 random two-year price paths. When the expected return is positive, the lump sum wins more often because it spends more time invested, but DCA narrows the range of outcomes and the regret of investing just before a fall. Neither is better in every case: the question is whether you value the higher expected value or the lower regret.">
      <div className="flex flex-wrap gap-3">
        <Slider label="expected return (% a year)" value={mu} min={-5} max={15} step={1} onChange={setMu} />
        <Slider label="volatility (% a year)" value={vol} min={5} max={40} step={1} onChange={setVol} />
        <Slider label="DCA spread over (months)" value={months} min={3} max={24} step={1} onChange={setMonths} />
        <Btn onClick={() => setSeed((s) => s + 1)}>New simulation</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="lump sum beats DCA in" value={`${(sim.winRate * 100).toFixed(0)}% of paths`} tone={color} />
        <Stat label="median difference (lump − DCA)" value={`${(sim.median * 100).toFixed(1)}% of the amount`} />
        <Stat label="5th percentile (lump much worse)" value={`${(sim.p5 * 100).toFixed(1)}%`} />
        <Stat label="95th percentile (lump much better)" value={`${(sim.p95 * 100).toFixed(1)}%`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'One simulated path: value of each strategy over 24 months', x: [0, 24], y: [Math.min(...sim.sample.lump, ...sim.sample.dca) * 0.95, Math.max(...sim.sample.lump, ...sim.sample.dca) * 1.05], xLabel: 'months', yLabel: 'value ($)', data: [{ pts: sim.sample.lump.map((v, i) => [i, v] as [number, number]), color, label: 'lump sum' }, { pts: sim.sample.dca.map((v, i) => [i, v] as [number, number]), color: '#d9534f', label: 'DCA', dashed: true }] }} />
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Asset allocation growth bands
// ---------------------------------------------------------------------------------------

function AllocGrowth({ color }: { color: string }) {
  const [stocks, setStocks] = useState(60)
  const [years, setYears] = useState(20)
  const [save, setSave] = useState(1000)
  const [start, setStart] = useState(20000)
  const res = useMemo(() => {
    const w = stocks / 100
    const muS = 0.07
    const sdS = 0.16
    const muB = 0.035
    const sdB = 0.06
    const corr = 0.1
    const mu = w * muS + (1 - w) * muB
    const sd = Math.sqrt(w * w * sdS * sdS + (1 - w) * (1 - w) * sdB * sdB + 2 * w * (1 - w) * corr * sdS * sdB)
    const r = rng(77)
    const N = 500
    const paths: number[][] = []
    for (let n = 0; n < N; n++) {
      const v = [start]
      for (let y = 1; y <= years; y++) {
        const g = Math.exp(mu - 0.5 * sd * sd + sd * normal(r))
        v.push(v[y - 1] * g + save * 12)
      }
      paths.push(v)
    }
    const q = (y: number, p: number) => {
      const col = paths.map((v) => v[y]).sort((a, b) => a - b)
      return col[Math.floor(p * (N - 1))]
    }
    const invested = start + save * 12 * years
    const bands = [0.05, 0.5, 0.95].map((p) => Array.from({ length: years + 1 }, (_, y) => [y, q(y, p)] as [number, number]))
    const lossProb = paths.filter((v) => v[years] < invested).length / N
    return { mu, sd, bands, invested, lossProb, p5: q(years, 0.05), p50: q(years, 0.5), p95: q(years, 0.95) }
  }, [stocks, years, save, start])
  return (
    <Card title="Asset allocation: the range of outcomes, not one number" color={color} note="A stylised portfolio of stocks (7% expected return, 16% volatility) and bonds (3.5%, 6%) with a correlation of 0.1, with yearly contributions, simulated 500 times. The bands show the 5th, 50th and 95th percentile of wealth. A higher stock weight raises the median but widens the band and the chance of ending below what you put in. The numbers are assumptions chosen for illustration, not forecasts; real returns are not normally distributed and vary with the starting valuation.">
      <div className="flex flex-wrap gap-3">
        <Slider label="stocks (%), the rest bonds" value={stocks} min={0} max={100} step={5} onChange={setStocks} />
        <Slider label="years" value={years} min={5} max={40} step={1} onChange={setYears} />
        <Slider label="saved each month ($)" value={save} min={0} max={5000} step={100} onChange={setSave} show={money(save)} />
        <Slider label="starting amount ($)" value={start} min={0} max={200000} step={5000} onChange={setStart} show={money(start)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Wealth over time: 5th, median and 95th percentile', x: [0, years], y: [0, Math.max(res.p95 * 1.05, 1)], xLabel: 'years', yLabel: 'wealth ($)', data: [{ pts: res.bands[2], color: '#2ca02c', label: '95th percentile', dashed: true }, { pts: res.bands[1], color, label: 'median' }, { pts: res.bands[0], color: '#d9534f', label: '5th percentile', dashed: true }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="portfolio expected return · volatility" value={`${(res.mu * 100).toFixed(1)}% · ${(res.sd * 100).toFixed(1)}%`} tone={color} />
        <Stat label="total paid in" value={money(res.invested)} />
        <Stat label="5th · median · 95th percentile" value={`${money(res.p5)} · ${money(res.p50)} · ${money(res.p95)}`} />
        <Stat label="chance of ending below what you paid in" value={`${(res.lossProb * 100).toFixed(0)}%`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Forex: pips, lots, leverage
// ---------------------------------------------------------------------------------------

const PAIRS: Record<string, { price: number; pip: number; quoteUsd: number; label: string; baseUsd: number }> = {
  EURUSD: { price: 1.085, pip: 0.0001, quoteUsd: 1, label: 'EUR/USD', baseUsd: 1.085 },
  GBPUSD: { price: 1.27, pip: 0.0001, quoteUsd: 1, label: 'GBP/USD', baseUsd: 1.27 },
  AUDUSD: { price: 0.66, pip: 0.0001, quoteUsd: 1, label: 'AUD/USD', baseUsd: 0.66 },
  USDJPY: { price: 150, pip: 0.01, quoteUsd: 1 / 150, label: 'USD/JPY', baseUsd: 1 },
  USDSGD: { price: 1.34, pip: 0.0001, quoteUsd: 1 / 1.34, label: 'USD/SGD', baseUsd: 1 },
  USDCAD: { price: 1.36, pip: 0.0001, quoteUsd: 1 / 1.36, label: 'USD/CAD', baseUsd: 1 },
}

function PipCalc({ color }: { color: string }) {
  const [pair, setPair] = useState('EURUSD')
  const [balance, setBalance] = useState(10000)
  const [riskPct, setRiskPct] = useState(1)
  const [stop, setStop] = useState(30)
  const [lev, setLev] = useState(20)
  const p = PAIRS[pair]
  const pipPerUnitUsd = p.pip * p.quoteUsd // value of one pip for one unit of base currency, in USD
  const riskUsd = (balance * riskPct) / 100
  const units = riskUsd / (stop * pipPerUnitUsd)
  const lots = units / 100000
  const notional = units * p.baseUsd
  const margin = notional / lev
  return (
    <Card title="Pips, lots and position size" color={color} note="A pip is the standard unit of price change: 0.0001 for most pairs and 0.01 for pairs quoted in yen. A standard lot is 100,000 units of the base currency. The size of a position follows from how much you are willing to lose, not from how much you want to make: risk in dollars divided by (stop distance in pips × value of a pip per unit). Leverage only determines how much margin is tied up; it does not change the risk of the trade. Prices are rounded illustrative levels, not live quotes.">
      <Pills label="pair" value={pair} onChange={setPair} options={Object.entries(PAIRS).map(([k, v]) => [k, v.label] as [string, string])} />
      <div className="flex flex-wrap gap-3">
        <Slider label="account balance ($)" value={balance} min={1000} max={100000} step={1000} onChange={setBalance} show={money(balance)} />
        <Slider label="risk per trade (% of balance)" value={riskPct} min={0.25} max={5} step={0.25} onChange={setRiskPct} show={`${riskPct}%`} />
        <Slider label="stop-loss distance (pips)" value={stop} min={5} max={200} step={5} onChange={setStop} />
        <Slider label="leverage (×)" value={lev} min={1} max={100} step={1} onChange={setLev} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="value of 1 pip per standard lot" value={money(pipPerUnitUsd * 100000, 2)} />
        <Stat label="money at risk" value={money(riskUsd)} tone={color} />
        <Stat label="position size" value={`${units.toFixed(0)} units (${lots.toFixed(2)} lots)`} />
        <Stat label="notional value · margin needed" value={`${money(notional)} · ${money(margin)}`} />
        <Stat label="margin as % of the account" value={pct((margin / balance) * 100)} />
        <Stat label="price move that would wipe out the margin" value={`${(100 / lev).toFixed(1)}% (${((p.price * 100) / lev / (p.pip * 100) / 100).toFixed(0)} pips)`} />
        <Stat label="pips to double the risk (2R target)" value={`${stop * 2} pips`} />
        <Stat label="reward at 2R" value={money(riskUsd * 2)} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Cross rates and triangular arbitrage
// ---------------------------------------------------------------------------------------

function CrossRates({ color }: { color: string }) {
  const [eurusd, setEurusd] = useState(1.085)
  const [usdjpy, setUsdjpy] = useState(150)
  const [quoted, setQuoted] = useState(163.1)
  const [spread, setSpread] = useState(0.01)
  const implied = eurusd * usdjpy
  const gapPct = ((quoted - implied) / implied) * 100
  // A loop through three currencies earns the gap (in either direction) and pays the spread on each of the three legs.
  const gross = Math.abs(gapPct)
  const cost = 3 * spread
  const net = gross - cost
  return (
    <Card title="Cross rates and triangular arbitrage" color={color} note="Two currencies not involving the dollar, such as EUR/JPY, are quoted as a cross: it should equal EUR/USD × USD/JPY. If the market’s quoted cross differs from that product, a loop through three currencies (euro to dollar to yen to euro, or the reverse) would make a profit equal to the gap, less the cost of crossing the spread three times. In practice dealers’ computers close such gaps within milliseconds; for anyone else the spread usually exceeds the gap. The lab shows the implied cross, the mispricing and the profit on €1 million after costs. Prices are illustrative.">
      <div className="flex flex-wrap gap-3">
        <Slider label="EUR/USD" value={eurusd} min={0.9} max={1.3} step={0.001} onChange={setEurusd} show={eurusd.toFixed(3)} />
        <Slider label="USD/JPY" value={usdjpy} min={100} max={170} step={0.1} onChange={setUsdjpy} show={usdjpy.toFixed(1)} />
        <Slider label="quoted EUR/JPY" value={quoted} min={120} max={190} step={0.05} onChange={setQuoted} show={quoted.toFixed(2)} />
        <Slider label="spread cost per leg (% of the amount traded)" value={spread} min={0} max={0.05} step={0.005} onChange={setSpread} show={`${spread.toFixed(3)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="implied EUR/JPY = EUR/USD × USD/JPY" value={implied.toFixed(2)} tone={color} />
        <Stat label="quoted − implied" value={`${(quoted - implied).toFixed(2)} yen (${gapPct.toFixed(3)}%)`} />
        <Stat label="gross profit on €1 million" value={`€${(gross * 10000).toLocaleString('en-US', { maximumFractionDigits: 0 })}`} />
        <Stat label="after the cost of three legs" value={`${net >= 0 ? '' : '−'}€${Math.abs(net * 10000).toLocaleString('en-US', { maximumFractionDigits: 0 })}`} tone={net > 0 ? '#2ca02c' : '#d9534f'} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        {gross < 0.005 ? 'The quoted cross is within half a basis point of the implied cross: no arbitrage.' : net > 0 ? `The gap (${gross.toFixed(3)}%) is larger than the cost of three legs (${cost.toFixed(3)}%): a profit exists on paper. Real markets close such gaps almost at once.` : `The gap (${gross.toFixed(3)}%) is smaller than the cost of trading three legs (${cost.toFixed(3)}%): no profit after costs.`}
      </p>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Carry trade and covered interest parity
// ---------------------------------------------------------------------------------------

function Carry({ color }: { color: string }) {
  const [high, setHigh] = useState(5)
  const [low, setLow] = useState(0.5)
  const [vol, setVol] = useState(10)
  const [lev, setLev] = useState(5)
  const [move, setMove] = useState(0)
  const spot = 100
  const diff = high - low
  const fwd = spot * (1 + low / 100) / (1 + high / 100) // forward price of the high-yield currency in the low-yield currency terms (CIP)
  const net = (diff + move) * lev
  const pts: [number, number][] = Array.from({ length: 41 }, (_, i) => {
    const m = -20 + i
    return [m, (diff + m) * lev] as [number, number]
  })
  const sharpe = diff / vol
  const probLoss = 0.5 * (1 + erf((-diff / (vol * Math.SQRT2))))
  return (
    <Card title="Carry trade: earning the interest-rate difference" color={color} note="In a carry trade you borrow a low-yielding currency and hold a high-yielding one, collecting the interest difference while the exchange rate moves. Uncovered interest parity says the high-yielding currency should depreciate by the same amount, leaving no profit; in practice it often does not, which is the carry premium, but the return is earned in small amounts and lost in occasional large falls (‘picking up pennies in front of a steamroller’). Covered interest parity, which uses a forward contract to lock the exchange rate, does hold closely: the forward price of the high-yield currency is lower by about the interest difference.">
      <div className="flex flex-wrap gap-3">
        <Slider label="interest rate of the currency you hold (%)" value={high} min={0} max={12} step={0.25} onChange={setHigh} show={`${high}%`} />
        <Slider label="interest rate of the funding currency (%)" value={low} min={-1} max={6} step={0.25} onChange={setLow} show={`${low}%`} />
        <Slider label="annual volatility of the exchange rate (%)" value={vol} min={4} max={25} step={1} onChange={setVol} />
        <Slider label="leverage (×)" value={lev} min={1} max={10} step={1} onChange={setLev} />
        <Slider label="change in the exchange rate over the year (%)" value={move} min={-20} max={20} step={1} onChange={setMove} show={`${move >= 0 ? '+' : ''}${move}%`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Return on equity against the year’s exchange-rate move', x: [-20, 20], y: [-120, 120], xLabel: 'exchange-rate change over the year (%)', yLabel: 'return on equity (%)', data: [{ pts, color, label: 'carry trade return' }], hlines: [{ y: 0, label: 'break-even' }], vlines: [{ x: -diff, label: 'break-even move' }], points: [{ x: move, y: net, label: 'this year' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="interest difference (carry)" value={pct(diff, 2)} tone={color} />
        <Stat label="break-even depreciation" value={pct(-diff, 2)} />
        <Stat label="return on equity this year" value={pct(net)} tone={net >= 0 ? '#2ca02c' : '#d9534f'} />
        <Stat label="forward price (CIP) per 100 of spot" value={fwd.toFixed(2)} />
        <Stat label="carry ÷ volatility (Sharpe-like)" value={sharpe.toFixed(2)} />
        <Stat label="chance of a losing year if the rate is a random walk" value={pct(probLoss * 100, 0)} />
        <Stat label="a 1-in-20 bad year (−1.65σ) costs" value={pct((diff - 1.65 * vol) * lev, 0)} />
        <Stat label="leverage multiplies both" value={`${lev}×`} />
      </div>
    </Card>
  )
}

function erf(x: number) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x))
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)
  return x >= 0 ? y : -y
}

// ---------------------------------------------------------------------------------------
// Constant-product AMM
// ---------------------------------------------------------------------------------------

function Amm({ color }: { color: string }) {
  const [x0, setX0] = useState(1000)
  const [price0, setPrice0] = useState(3000)
  const [trade, setTrade] = useState(50)
  const [fee, setFee] = useState(0.3)
  const [ratio, setRatio] = useState(2)
  const y0 = x0 * price0
  const k = x0 * y0
  const dx = trade
  const dxFee = dx * (1 - fee / 100)
  const out = y0 - k / (x0 + dxFee)
  const execPrice = out / dx
  const slip = (1 - execPrice / price0) * 100
  const il = ((2 * Math.sqrt(ratio)) / (1 + ratio) - 1) * 100
  const curve: [number, number][] = Array.from({ length: 80 }, (_, i) => {
    const xx = x0 * (0.4 + i * 0.03)
    return [xx, k / xx] as [number, number]
  })
  const newX = x0 + dx
  const newY = y0 - out
  return (
    <Card title="An automated market maker: x × y = k" color={color} note="A constant-product pool holds two assets, here ETH (x) and a dollar stablecoin (y), and keeps their product constant: x × y = k. The price is the ratio of reserves, y/x. A trade moves the reserves along the curve, so the larger the trade relative to the pool, the worse the price you get (slippage). Liquidity providers earn the fee but suffer impermanent loss: when the price moves by a factor r, the pool’s value is lower than simply holding the two assets by 2√r/(1+r) − 1.">
      <div className="flex flex-wrap gap-3">
        <Slider label="pool ETH (x)" value={x0} min={100} max={10000} step={100} onChange={setX0} />
        <Slider label="starting ETH price ($)" value={price0} min={500} max={6000} step={100} onChange={setPrice0} show={money(price0)} />
        <Slider label="you sell this much ETH into the pool" value={trade} min={1} max={2000} step={1} onChange={setTrade} />
        <Slider label="pool fee (%)" value={fee} min={0} max={1} step={0.05} onChange={setFee} show={`${fee.toFixed(2)}%`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'The pool’s curve: y = k / x', x: [x0 * 0.4, x0 * 2.8], y: [0, (k / (x0 * 0.4)) * 1.05], xLabel: 'ETH in the pool', yLabel: 'dollars in the pool', data: [{ pts: curve, color, label: 'x·y = k' }], points: [{ x: x0, y: y0, label: 'before' }, { x: newX, y: newY, label: 'after your trade' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="you receive" value={money(out)} tone={color} />
        <Stat label="average price you got" value={money(execPrice)} />
        <Stat label="slippage against the starting price" value={pct(slip, 2)} />
        <Stat label="price in the pool after the trade" value={money(newY / newX)} />
      </div>
      <Slider label="price change for the impermanent-loss estimate (factor r)" value={ratio} min={0.2} max={5} step={0.1} onChange={setRatio} show={`×${ratio.toFixed(1)}`} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="impermanent loss for a liquidity provider" value={pct(il, 2)} tone={il < -5 ? '#d9534f' : color} />
        <Stat label="fee income needed to break even" value={`${Math.abs(il).toFixed(2)}% of the pool value`} />
        <Stat label="value of 100 deposited, in the pool vs holding" value={`${(100 + il).toFixed(1)} vs 100`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Bitcoin-style issuance schedule
// ---------------------------------------------------------------------------------------

function supplyAt(year: number) {
  // Halvings every 210,000 blocks (about four years): the first in late 2012.
  const t = Math.max(0, year - 2009)
  const perEraYears = 210000 / 52560
  let supply = 0
  let subsidy = 50
  let remaining = t
  let era = 0
  while (remaining > 0 && era < 33) {
    const years = Math.min(remaining, perEraYears)
    supply += (years / perEraYears) * 210000 * subsidy
    remaining -= years
    if (remaining > 0) {
      subsidy /= 2
      era++
    }
  }
  const perYear = subsidy * 52560
  return { supply, subsidy, perYear, inflation: supply > 0 ? (perYear / supply) * 100 : 0, era }
}

function Supply({ color }: { color: string }) {
  const [year, setYear] = useState(2026)
  const s = supplyAt(year)
  const pts: [number, number][] = Array.from({ length: 62 }, (_, i) => [2009 + i * 2, supplyAt(2009 + i * 2).supply / 1e6] as [number, number])
  const infl: [number, number][] = Array.from({ length: 30 }, (_, i) => [2013 + i * 2, supplyAt(2013 + i * 2).inflation] as [number, number])
  return (
    <Card title="Issuance schedules: Bitcoin’s halvings" color={color} note="Bitcoin creates new coins in each block, and the reward is cut in half every 210,000 blocks (about four years): 50 coins at the start, 25 after late 2012, 12.5 after mid-2016, 6.25 after May 2020 and 3.125 after April 2024, with the next halving expected around 2028. The total approaches, but never exceeds, 21 million. The annual inflation rate of the supply therefore falls in steps, from over 100% in the first years to under 1% today, and towards zero. Dates here are approximate: halvings are tied to block heights, not to calendar dates.">
      <Slider label="year" value={year} min={2009} max={2140} step={1} onChange={setYear} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="block reward (coins)" value={s.subsidy.toFixed(s.subsidy >= 1 ? 3 : 6)} tone={color} />
        <Stat label="supply" value={`${(s.supply / 1e6).toFixed(2)} million`} />
        <Stat label="new coins per year" value={`${(s.perYear).toLocaleString('en-US', { maximumFractionDigits: 0 })}`} />
        <Stat label="annual supply inflation" value={pct(s.inflation, 2)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Total supply (millions of coins)', x: [2009, 2140], y: [0, 21.5], xLabel: 'year', yLabel: 'million coins', data: [{ pts, color, label: 'supply' }], hlines: [{ y: 21, label: '21 million cap' }], vlines: [{ x: year, label: String(year) }] }} />
      <PlotChart block={{ t: 'plot', title: 'Annual supply inflation (%) after the first halving', x: [2013, 2072], y: [0, 14], xLabel: 'year', yLabel: '% per year', data: [{ pts: infl, color: '#d9534f', label: 'inflation' }] }} />
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Token vesting and fully diluted valuation
// ---------------------------------------------------------------------------------------

function Vesting({ color }: { color: string }) {
  const [float, setFloat] = useState(10)
  const [cliff, setCliff] = useState(12)
  const [vest, setVest] = useState(36)
  const [fdv, setFdv] = useState(2000)
  const total = 1000 // million tokens
  const locked = total * (1 - float / 100)
  const circ = (m: number) => total * (float / 100) + (m < cliff ? 0 : Math.min(1, (m - cliff) / Math.max(vest, 1)) * locked)
  const pts: [number, number][] = Array.from({ length: 61 }, (_, m) => [m, circ(m)] as [number, number])
  const price = fdv / total
  const mcapNow = circ(0) * price
  const monthlyUnlock = locked / Math.max(vest, 1)
  const unlockUsd = monthlyUnlock * price
  return (
    <Card title="Token unlocks and fully diluted valuation" color={color} note="Many new tokens launch with only a small part of the supply in circulation; the rest is locked for the team, investors and ecosystem and released on a schedule after a cliff. The fully diluted valuation (FDV) is the price times the total supply, while the market capitalisation uses only the circulating supply, so a token with a 10% float looks ten times smaller than its FDV. If the price is held constant, each unlock puts more tokens up for sale: the ‘overhang’. Figures are an illustration with 1,000 million tokens.">
      <div className="flex flex-wrap gap-3">
        <Slider label="initial float (% of supply in circulation)" value={float} min={2} max={100} step={1} onChange={setFloat} show={`${float}%`} />
        <Slider label="cliff (months before unlocks start)" value={cliff} min={0} max={24} step={1} onChange={setCliff} />
        <Slider label="linear unlock after the cliff (months)" value={vest} min={6} max={60} step={1} onChange={setVest} />
        <Slider label="fully diluted valuation ($ million)" value={fdv} min={100} max={20000} step={100} onChange={setFdv} show={`$${fdv.toLocaleString()}m`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Circulating supply (million tokens) over five years', x: [0, 60], y: [0, 1050], xLabel: 'months after launch', yLabel: 'million tokens', data: [{ pts, color, label: 'circulating supply' }], hlines: [{ y: total, label: 'total supply' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="market cap at launch" value={`$${mcapNow.toLocaleString('en-US', { maximumFractionDigits: 0 })}m`} tone={color} />
        <Stat label="FDV ÷ market cap" value={`${(fdv / Math.max(mcapNow, 1)).toFixed(1)}×`} />
        <Stat label="monthly unlock after the cliff" value={`${monthlyUnlock.toFixed(1)}m tokens (${((monthlyUnlock / circ(cliff)) * 100).toFixed(1)}% of supply then)`} />
        <Stat label="value unlocked each month at the launch price" value={`$${unlockUsd.toFixed(0)}m`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Hedging a foreign-currency receivable
// ---------------------------------------------------------------------------------------

function FxHedge({ color }: { color: string }) {
  const [h, setH] = useState(50)
  const [vol, setVol] = useState(9)
  const [months, setMonths] = useState(6)
  const [diff, setDiff] = useState(1.5)
  const exposure = 1_000_000
  const spot = 1.34
  const T = months / 12
  const fwd = spot * (1 - (diff / 100) * T)
  const sd = vol / 100 * Math.sqrt(T)
  const hedge = h / 100
  const pts = (hh: number): [number, number][] => Array.from({ length: 41 }, (_, i) => {
    const m = -0.2 + i * 0.01
    const s = spot * (1 + m)
    return [s, exposure * (hh * fwd + (1 - hh) * s)] as [number, number]
  })
  const expected = exposure * (hedge * fwd + (1 - hedge) * spot)
  const sdOut = exposure * spot * sd * (1 - hedge)
  const worst = exposure * (hedge * fwd + (1 - hedge) * spot * (1 - 1.65 * sd))
  return (
    <Card title="Hedging a US-dollar receivable with a forward contract" color={color} note="A Singapore exporter will receive US$1 million in a few months and worries that the dollar will weaken against the Singapore dollar. Selling the dollars forward fixes the rate today: the forward price already reflects the interest-rate difference between the two currencies (here the dollar trades at a forward discount). A hedge ratio of 100% removes the exchange-rate risk and leaves the cost or benefit in the forward points; a partial hedge keeps some of the risk. The chart shows the Singapore-dollar proceeds against the exchange rate on the day the money arrives.">
      <div className="flex flex-wrap gap-3">
        <Slider label="hedge ratio (% sold forward)" value={h} min={0} max={100} step={5} onChange={setH} show={`${h}%`} />
        <Slider label="annual volatility of USD/SGD (%)" value={vol} min={3} max={20} step={1} onChange={setVol} />
        <Slider label="months until the money arrives" value={months} min={1} max={12} step={1} onChange={setMonths} />
        <Slider label="USD interest rate above SGD (% a year; sets the forward discount)" value={diff} min={-2} max={5} step={0.25} onChange={setDiff} show={`${diff}%`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'SGD proceeds against the USD/SGD rate when the money arrives', x: [spot * 0.8, spot * 1.2], y: [exposure * spot * 0.75, exposure * spot * 1.25], xLabel: 'USD/SGD at maturity', yLabel: 'SGD received', data: [{ pts: pts(0), color: '#d9534f', label: 'unhedged', dashed: true }, { pts: pts(hedge), color, label: `hedged ${h}%` }, { pts: pts(1), color: '#2ca02c', label: 'fully hedged', dashed: true }], vlines: [{ x: spot, label: 'spot today' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="forward rate for the maturity" value={fwd.toFixed(4)} tone={color} />
        <Stat label="expected proceeds" value={`S$${expected.toLocaleString('en-US', { maximumFractionDigits: 0 })}`} />
        <Stat label="standard deviation of proceeds" value={`S$${sdOut.toLocaleString('en-US', { maximumFractionDigits: 0 })}`} />
        <Stat label="a bad outcome (5th percentile)" value={`S$${worst.toLocaleString('en-US', { maximumFractionDigits: 0 })}`} />
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// Metcalfe's law and network value
// ---------------------------------------------------------------------------------------

function Metcalfe({ color }: { color: string }) {
  const [users, setUsers] = useState(50)
  const [k, setK] = useState(2)
  const n = users
  const val = (f: (x: number) => number) => Array.from({ length: 60 }, (_, i) => [1 + i * 2, f(1 + i * 2)] as [number, number])
  const metcalfe = (x: number) => (k * x * x) / 100
  const odlyzko = (x: number) => (k * 10 * x * Math.log(Math.max(x, 1.1))) / 100
  return (
    <Card title="Network value: Metcalfe, Odlyzko and the others" color={color} note="Metcalfe’s law says that the value of a network grows with the square of its users, because the number of possible connections is n(n − 1)/2. Odlyzko and Tilly argued that not all connections are equally valuable and the growth is closer to n log n. These are rules of thumb, not laws: they are used in crypto valuation by plotting a network’s market value against its active addresses. The shape of the relationship matters: if value grows faster than users, the ratio of value to users rises as a network matures; if not, a rising price with flat usage signals speculation.">
      <div className="flex flex-wrap gap-3">
        <Slider label="users (millions)" value={users} min={2} max={120} step={1} onChange={setUsers} />
        <Slider label="value per connection constant" value={k} min={0.5} max={5} step={0.5} onChange={setK} show={k.toFixed(1)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Network value against users under three rules', x: [1, 120], y: [0, 300], xLabel: 'users (millions)', yLabel: 'value (arbitrary units)', data: [{ pts: val(metcalfe), color, label: 'Metcalfe: n²' }, { pts: val(odlyzko), color: '#e07b00', label: 'Odlyzko: n log n' }, { pts: val((x) => (k * 2 * x) / 10), color: '#2ca02c', label: 'linear' }], vlines: [{ x: n, label: `${n}m` }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="possible connections n(n−1)/2" value={`${((n * 1e6 * (n * 1e6 - 1)) / 2).toExponential(2)}`} tone={color} />
        <Stat label="Metcalfe value" value={metcalfe(n).toFixed(0)} />
        <Stat label="Odlyzko value" value={odlyzko(n).toFixed(0)} />
        <Stat label="value per user (Metcalfe) and (Odlyzko)" value={`${(metcalfe(n) / n).toFixed(1)} · ${(odlyzko(n) / n).toFixed(1)}`} />
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        Reed’s law (value grows with the number of possible groups, 2ⁿ) is the most extreme claim and is rarely supported by data; it is mainly useful as a warning about unbounded valuation arguments.
      </p>
    </Card>
  )
}

// ---------------------------------------------------------------------------------------
// MVRV on a synthetic price path
// ---------------------------------------------------------------------------------------

function Mvrv({ color }: { color: string }) {
  const [turn, setTurn] = useState(0.06)
  const [seed, setSeed] = useState(2)
  const d = useMemo(() => {
    const r = rng(seed * 31 + 3)
    const months = 96
    const price: number[] = [100]
    for (let t = 1; t <= months; t++) {
      // a four-year cycle plus noise: rises, a blow-off, then a deep drawdown
      const cyc = Math.sin(((t - 6) / 48) * 2 * Math.PI) * 0.05
      price.push(price[t - 1] * Math.exp(cyc + 0.01 + 0.11 * normal(r)))
    }
    const rp: number[] = [100]
    for (let t = 1; t <= months; t++) rp.push(rp[t - 1] * (1 - turn) + price[t] * turn)
    return { price, rp, mvrv: price.map((p, t) => p / rp[t]) }
  }, [seed, turn])
  const last = d.mvrv[d.mvrv.length - 1]
  const hi = Math.max(...d.mvrv)
  const lo = Math.min(...d.mvrv)
  const pts = (a: number[]) => a.map((v, i) => [i, v] as [number, number])
  return (
    <Card title="On-chain valuation: market value to realised value (MVRV)" color={color} note="Realised value values each coin at the price when it last moved on the blockchain, so it estimates the aggregate cost basis of holders. MVRV is the market value divided by the realised value: above 1 the average holder is in profit, below 1 they are at a loss. Historically very high readings (above about 3 for bitcoin) have coincided with euphoric tops and readings below 1 with capitulation lows, but the thresholds drift as the market matures. This is a synthetic price path with realised price modelled as a moving cost basis; the ‘turnover’ is the monthly share of coins that move.">
      <div className="flex flex-wrap gap-3">
        <Slider label="monthly turnover of coins (cost-basis update speed)" value={turn} min={0.02} max={0.2} step={0.01} onChange={setTurn} show={`${(turn * 100).toFixed(0)}%`} />
        <Btn onClick={() => setSeed((s) => s + 1)}>New price path</Btn>
      </div>
      <PlotChart block={{ t: 'plot', title: 'Price and realised price (cost basis)', x: [0, 96], y: [0, Math.max(...d.price) * 1.1], xLabel: 'months', yLabel: 'price', data: [{ pts: pts(d.price), color, label: 'market price' }, { pts: pts(d.rp), color: '#e07b00', label: 'realised price', dashed: true }] }} />
      <PlotChart block={{ t: 'plot', title: 'MVRV ratio', x: [0, 96], y: [0, Math.max(hi * 1.1, 2)], xLabel: 'months', yLabel: 'MVRV', data: [{ pts: pts(d.mvrv), color: '#7a2fa8', label: 'MVRV' }], hlines: [{ y: 1, label: 'average holder at break-even' }, { y: 3, label: 'overheated?' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="latest MVRV" value={last.toFixed(2)} tone={color} />
        <Stat label="highest · lowest in the path" value={`${hi.toFixed(2)} · ${lo.toFixed(2)}`} />
        <Stat label="reading" value={last > 3 ? 'holders deep in profit' : last > 1.5 ? 'holders in profit' : last > 1 ? 'near cost basis' : 'holders at a loss'} />
      </div>
    </Card>
  )
}
