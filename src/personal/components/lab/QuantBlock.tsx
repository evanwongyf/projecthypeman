import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Btn, Card, Hist, Slider, Stat, fmt, mean, money, normal, Phi, quantile, rng, sd, soft } from './kit'

type QuantBlockType = Extract<Block, { t: 'quant-viz' }>

export default function QuantBlock({ block, color }: { block: QuantBlockType; color: string }) {
  switch (block.viz) {
    case 'gbm':
      return <Gbm color={color} />
    case 'returns-dist':
      return <ReturnsDist color={color} />
    case 'var':
      return <VarLab color={color} />
    case 'frontier':
      return <Frontier color={color} />
    case 'kelly':
      return <Kelly color={color} />
    case 'trade-sim':
      return <TradeSim color={color} />
    case 'ou':
      return <OuLab color={color} />
    case 'binomial':
      return <Binomial color={color} />
    case 'overfit':
      return <Overfit color={color} />
    case 'random-entry':
      return <RandomEntry color={color} />
    case 'impact':
      return <Impact color={color} />
    case 'factor-regression':
      return <FactorRegression color={color} />
  }
}

const SERIES = ['#3b6fd8', '#e07b2a', '#2f9e6e', '#7b4fc9', '#d9534f', '#8a6d1e']

// A student-t draw with df degrees of freedom, scaled to unit variance.
function tDraw(rand: () => number, df: number) {
  let chi = 0
  for (let i = 0; i < df; i++) chi += normal(rand) ** 2
  const t = normal(rand) / Math.sqrt(chi / df)
  return df > 2 ? t / Math.sqrt(df / (df - 2)) : t
}

// ── geometric Brownian motion ──────────────────────────────────────────────

function Gbm({ color }: { color: string }) {
  const [mu, setMu] = useState(0.08)
  const [sigma, setSigma] = useState(0.25)
  const [years, setYears] = useState(5)
  const [seed, setSeed] = useState(1)
  const paths = 40
  const steps = 60
  const sim = useMemo(() => {
    const rand = rng(seed)
    const dt = years / steps
    const out: [number, number][][] = []
    const terminal: number[] = []
    for (let p = 0; p < 2000; p++) {
      let s = 100
      const line: [number, number][] = [[0, s]]
      for (let k = 1; k <= steps; k++) {
        s *= Math.exp((mu - 0.5 * sigma * sigma) * dt + sigma * Math.sqrt(dt) * normal(rand))
        if (p < paths) line.push([k * dt, s])
      }
      if (p < paths) out.push(line)
      terminal.push(s)
    }
    return { out, terminal }
  }, [mu, sigma, years, seed])
  const sorted = useMemo(() => Float64Array.from(sim.terminal).sort(), [sim])
  const median = quantile(sorted, 0.5)
  const m = mean(sim.terminal)
  const lossP = sim.terminal.filter((x) => x < 100).length / sim.terminal.length
  const top = Math.min(quantile(sorted, 0.97), 600)
  return (
    <Card title="Geometric Brownian motion: simulating a price" color={color} note="The standard model of a stock price: each small step multiplies the price by a random factor, S(t) = S₀·exp((μ − σ²/2)t + σW(t)), where W is a Brownian motion. Prices stay positive and returns are roughly normal. Note the −σ²/2: the average outcome grows at μ, but the typical (median) path grows more slowly, at μ − σ²/2, because volatility drags down compounded returns. This is synthetic data from a model, not a forecast.">
      <PlotChart block={{ t: 'plot', x: [0, years], y: [0, Math.max(200, Math.min(top, 500))], xLabel: 'years', yLabel: 'price (start at 100)', data: sim.out.map((pts, i) => ({ pts, color: SERIES[i % SERIES.length] })), hlines: [{ y: 100, label: 'start' }] }} />
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="expected return μ (per year)" value={mu} min={-0.1} max={0.3} step={0.01} onChange={setMu} show={`${Math.round(mu * 100)}%`} />
        <Slider label="volatility σ (per year)" value={sigma} min={0.05} max={0.8} step={0.01} onChange={setSigma} show={`${Math.round(sigma * 100)}%`} />
        <Slider label="horizon (years)" value={years} min={1} max={20} step={1} onChange={setYears} />
        <Btn onClick={() => setSeed(seed + 1)}>New paths</Btn>
      </div>
      <Hist values={sim.terminal} lo={0} hi={Math.max(250, top)} bins={50} color={color} marks={[{ at: median, label: 'median', color: '#2f9e6e' }, { at: Math.min(m, top), label: 'mean', color: '#8a6d1e' }]} xLabel="price at the horizon" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="mean outcome (theory 100·e^{μT})" value={fmt(100 * Math.exp(mu * years), 0)} />
        <Stat label="median outcome (theory 100·e^{(μ−σ²/2)T})" value={fmt(100 * Math.exp((mu - 0.5 * sigma * sigma) * years), 0)} tone={color} />
        <Stat label="simulated mean / median" value={`${fmt(m, 0)} / ${fmt(median, 0)}`} />
        <Stat label="chance of ending below the start" value={`${fmt(lossP * 100, 0)}%`} tone="#d9534f" />
      </div>
    </Card>
  )
}

// ── fat tails ──────────────────────────────────────────────────────────────

function ReturnsDist({ color }: { color: string }) {
  const [df, setDf] = useState(3)
  const [seed, setSeed] = useState(3)
  const days = 6300 // about 25 years
  const r = useMemo(() => {
    const rand = rng(seed)
    return { fat: Float64Array.from({ length: days }, () => tDraw(rand, df)), norm: Float64Array.from({ length: days }, () => normal(rand)) }
  }, [df, seed])
  const count = (x: Float64Array, k: number) => x.filter((v) => Math.abs(v) > k).length
  const kurt = (x: Float64Array) => {
    const m = mean(x)
    const s = sd(x)
    return x.reduce((a, v) => a + ((v - m) / s) ** 4, 0) / x.length - 3
  }
  const expect4 = days * 2 * (1 - Phi(4))
  return (
    <Card title="Fat tails: returns are not normal" color={color} note="Both samples below have the same standard deviation. The normal distribution says a move of four standard deviations or more should happen about once in 16,000 days (0.006% of days, so roughly 0.4 times in 25 years). Real markets produce several such days a decade: October 1987 was a move of over 20 standard deviations under a normal model. A Student-t distribution with few degrees of freedom has the same spread but much fatter tails, and is a better first model. Models that assume normality understate the chance of extreme losses.">
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="degrees of freedom of the fat-tailed sample (fewer = fatter)" value={df} min={3} max={30} step={1} onChange={setDf} />
        <Btn onClick={() => setSeed(seed + 1)}>New sample</Btn>
      </div>
      <p className="text-xs font-bold">Normal sample</p>
      <Hist values={r.norm} lo={-8} hi={8} bins={64} color="#8a8478" xLabel="return, in standard deviations" height={120} />
      <p className="text-xs font-bold">Fat-tailed sample (Student-t, {df} degrees of freedom)</p>
      <Hist values={r.fat} lo={-8} hi={8} bins={64} color={color} xLabel="return, in standard deviations" height={120} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label={`days beyond ±4σ in ${days.toLocaleString('en-US')} days: normal`} value={`${count(r.norm, 4)} (theory ${fmt(expect4, 1)})`} />
        <Stat label="days beyond ±4σ: fat-tailed" value={String(count(r.fat, 4))} tone={color} />
        <Stat label="excess kurtosis: normal" value={fmt(kurt(r.norm), 1)} />
        <Stat label="excess kurtosis: fat-tailed" value={fmt(kurt(r.fat), 1)} tone={color} />
      </div>
    </Card>
  )
}

// ── value at risk ──────────────────────────────────────────────────────────

function VarLab({ color }: { color: string }) {
  const [value, setValue] = useState(1_000_000)
  const [vol, setVol] = useState(0.012)
  const [conf, setConf] = useState(0.99)
  const [days, setDays] = useState(1)
  const [df, setDf] = useState(4)
  const [seed, setSeed] = useState(5)
  const sims = useMemo(() => {
    const rand = rng(seed)
    return Float64Array.from({ length: 20000 }, () => {
      let r = 0
      for (let d = 0; d < days; d++) r += vol * tDraw(rand, df)
      return r * value
    })
  }, [vol, days, df, seed, value])
  const sorted = useMemo(() => Float64Array.from(sims).sort(), [sims])
  const z = (c: number) => {
    // Inverse normal CDF by bisection.
    let lo = -8
    let hi = 8
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2
      if (Phi(mid) < c) lo = mid
      else hi = mid
    }
    return (lo + hi) / 2
  }
  const paramVar = z(conf) * vol * Math.sqrt(days) * value
  const histVar = -quantile(sorted, 1 - conf)
  const cut = Math.floor(sorted.length * (1 - conf))
  const cvar = -mean(sorted.slice(0, Math.max(cut, 1)))
  const lim = value * vol * Math.sqrt(days) * 6
  return (
    <Card title="Value at risk and expected shortfall" color={color} note="Value at risk (VaR) at 99% over one day is the loss that should be exceeded on only 1 day in 100: the cut-off of the left tail. The parametric version assumes normal returns and uses VaR = z·σ·√T·V. The historical version reads the percentile off simulated or past returns, so it picks up fat tails. VaR says nothing about how bad the bad days are; expected shortfall (CVaR) averages the losses beyond the cut-off and is the more honest measure of tail risk. Returns here are drawn from a fat-tailed Student-t distribution (synthetic).">
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="portfolio value" value={value} min={100000} max={10_000_000} step={100000} onChange={setValue} show={money(value)} />
        <Slider label="daily volatility" value={vol} min={0.002} max={0.04} step={0.001} onChange={setVol} show={`${(vol * 100).toFixed(1)}%`} />
        <Slider label="confidence" value={conf} min={0.9} max={0.999} step={0.001} onChange={setConf} show={`${(conf * 100).toFixed(1)}%`} />
        <Slider label="horizon (days)" value={days} min={1} max={20} step={1} onChange={setDays} />
        <Slider label="tail fatness (t degrees of freedom)" value={df} min={3} max={30} step={1} onChange={setDf} />
        <Btn onClick={() => setSeed(seed + 1)}>New sample</Btn>
      </div>
      <Hist values={sims} lo={-lim} hi={lim} bins={60} color={color} marks={[{ at: -histVar, label: 'historical VaR' }, { at: -paramVar, label: 'normal VaR', color: '#8a6d1e' }]} xLabel="profit or loss ($)" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="parametric (normal) VaR" value={money(paramVar)} />
        <Stat label="historical VaR (from the sample)" value={money(histVar)} tone={color} />
        <Stat label="expected shortfall (CVaR)" value={money(cvar)} tone="#d9534f" />
        <Stat label="CVaR ÷ VaR" value={fmt(cvar / histVar, 2)} />
      </div>
    </Card>
  )
}

// ── portfolio theory ───────────────────────────────────────────────────────

function Frontier({ color }: { color: string }) {
  const [rho, setRho] = useState(0.3)
  const [rf, setRf] = useState(0.02)
  const assets = [
    { name: 'Bonds', mu: 0.04, sig: 0.06 },
    { name: 'Global stocks', mu: 0.08, sig: 0.16 },
    { name: 'Emerging markets', mu: 0.1, sig: 0.24 },
  ]
  const corr = (i: number, j: number) => (i === j ? 1 : j === 0 || i === 0 ? rho * 0.3 : rho)
  const cov = (i: number, j: number) => corr(i, j) * assets[i].sig * assets[j].sig
  const pts = useMemo(() => {
    const out: { w: number[]; r: number; s: number }[] = []
    const n = 40
    for (let a = 0; a <= n; a++)
      for (let b = 0; a + b <= n; b++) {
        const w = [a / n, b / n, (n - a - b) / n]
        const r = w.reduce((s, x, i) => s + x * assets[i].mu, 0)
        let v = 0
        for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) v += w[i] * w[j] * cov(i, j)
        out.push({ w, r, s: Math.sqrt(v) })
      }
    return out
  }, [rho]) // eslint-disable-line react-hooks/exhaustive-deps
  const minVar = pts.reduce((m, p) => (p.s < m.s ? p : m))
  const best = pts.reduce((m, p) => ((p.r - rf) / p.s > (m.r - rf) / m.s ? p : m))
  const W = 640
  const H = 340
  const M = { l: 52, r: 14, t: 12, b: 40 }
  const sx = (v: number) => M.l + (v / 0.28) * (W - M.l - M.r)
  const sy = (v: number) => H - M.b - ((v - 0.02) / 0.1) * (H - M.t - M.b)
  const front = pts.filter((p) => !pts.some((q) => q.s <= p.s && q.r > p.r + 1e-9 && q !== p)).sort((a, b) => a.s - b.s)
  return (
    <Card title="Portfolio theory: the efficient frontier" color={color} note="Each dot is one way to split money among three assets. Because assets do not move in lockstep, mixing them can give less risk than any single holding: the leftmost point (minimum variance) is less volatile than the safest asset when correlations are low. The upper edge of the cloud, the efficient frontier, gives the highest expected return for each level of risk; the portfolio with the steepest line from the risk-free rate (the highest Sharpe ratio) is the 'tangency' portfolio. Lower the correlation and the cloud bulges further left: that is the free lunch of diversification. Inputs are illustrative; expected returns are the hardest thing to estimate.">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Risk and return of portfolios of three assets">
        {[0.04, 0.06, 0.08, 0.1, 0.12].map((t) => (
          <g key={t}><line x1={M.l} x2={W - M.r} y1={sy(t)} y2={sy(t)} stroke="var(--line)" /><text x={M.l - 6} y={sy(t) + 4} fontSize={10.5} textAnchor="end" fill="var(--ink-soft)">{Math.round(t * 100)}%</text></g>
        ))}
        {[0.05, 0.1, 0.15, 0.2, 0.25].map((t) => (
          <g key={t}><line x1={sx(t)} x2={sx(t)} y1={M.t} y2={H - M.b} stroke="var(--line)" /><text x={sx(t)} y={H - M.b + 15} fontSize={10.5} textAnchor="middle" fill="var(--ink-soft)">{Math.round(t * 100)}%</text></g>
        ))}
        {pts.map((p, i) => <circle key={i} cx={sx(p.s)} cy={sy(p.r)} r={2} fill={color} opacity={0.35} />)}
        <path d={front.map((p, i) => `${i ? 'L' : 'M'}${sx(p.s)} ${sy(p.r)}`).join('')} fill="none" stroke={color} strokeWidth={2.5} />
        <line x1={sx(0)} y1={sy(rf)} x2={sx(0.28)} y2={sy(rf + ((best.r - rf) / best.s) * 0.28)} stroke="#2f9e6e" strokeWidth={1.5} strokeDasharray="5 4" />
        {assets.map((a) => (
          <g key={a.name}><circle cx={sx(a.sig)} cy={sy(a.mu)} r={6} fill="var(--ink)" /><text x={sx(a.sig) + 9} y={sy(a.mu) + 4} fontSize={11.5} fontWeight={700} fill="var(--ink)" paintOrder="stroke" stroke="var(--surface)" strokeWidth={3}>{a.name}</text></g>
        ))}
        <circle cx={sx(minVar.s)} cy={sy(minVar.r)} r={6} fill="#d9534f" stroke="var(--surface)" strokeWidth={1.5} />
        <circle cx={sx(best.s)} cy={sy(best.r)} r={6} fill="#2f9e6e" stroke="var(--surface)" strokeWidth={1.5} />
        <text x={(M.l + W - M.r) / 2} y={H - 4} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--ink)">risk (volatility)</text>
        <text x={12} y={H / 2} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--ink)" transform={`rotate(-90 12 ${H / 2})`}>expected return</text>
      </svg>
      <div className="flex flex-wrap gap-3">
        <Slider label="correlation between stocks and emerging markets" value={rho} min={-0.2} max={0.95} step={0.05} onChange={setRho} show={rho.toFixed(2)} />
        <Slider label="risk-free rate" value={rf} min={0} max={0.05} step={0.005} onChange={setRf} show={`${(rf * 100).toFixed(1)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="minimum-variance mix (bonds/stocks/EM)" value={minVar.w.map((x) => `${Math.round(x * 100)}`).join(' / ') + '%'} tone="#d9534f" />
        <Stat label="its risk and return" value={`${fmt(minVar.s * 100, 1)}% / ${fmt(minVar.r * 100, 1)}%`} />
        <Stat label="max-Sharpe mix" value={best.w.map((x) => `${Math.round(x * 100)}`).join(' / ') + '%'} tone="#2f9e6e" />
        <Stat label="its Sharpe ratio" value={fmt((best.r - rf) / best.s, 2)} />
      </div>
    </Card>
  )
}

// ── Kelly ──────────────────────────────────────────────────────────────────

function Kelly({ color }: { color: string }) {
  const [p, setP] = useState(0.55)
  const [b, setB] = useState(1)
  const fStar = Math.max(0, p - (1 - p) / b)
  const g = (f: number) => p * Math.log(1 + b * f) + (1 - p) * Math.log(Math.max(1 - f, 1e-9))
  const edge = p * b - (1 - p)
  return (
    <Card title="The Kelly criterion: how much to bet" color={color} note="Betting a fraction f of your capital on a bet that wins b times the stake with probability p, your capital grows at an average log rate g(f) = p·ln(1 + bf) + (1 − p)·ln(1 − f) per bet. This curve peaks at the Kelly fraction f* = p − (1 − p)/b, rises slowly on the left and falls steeply on the right: betting twice Kelly gives zero long-run growth, and more than that shrinks your capital even with a positive edge. Because the edge is never known exactly, most practitioners bet half Kelly or less, which gives about three quarters of the growth with far smaller swings.">
      <div className="flex flex-wrap gap-3">
        <Slider label="probability of winning p" value={p} min={0.3} max={0.9} step={0.01} onChange={setP} show={`${Math.round(p * 100)}%`} />
        <Slider label="payoff b (win b× the stake)" value={b} min={0.5} max={5} step={0.1} onChange={setB} show={b.toFixed(1)} />
      </div>
      <PlotChart block={{ t: 'plot', x: [0, 1], y: [-0.15, Math.max(0.05, g(fStar) * 1.6)], xLabel: 'fraction of capital bet, f', yLabel: 'expected log growth per bet', curves: [{ f: g, color }], vlines: [{ x: fStar, label: 'Kelly f*' }, { x: fStar / 2, label: 'half Kelly' }], hlines: [{ y: 0, label: 'no growth' }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="edge per unit staked (pb − (1−p))" value={fmt(edge, 3)} tone={edge > 0 ? '#2f9e6e' : '#d9534f'} />
        <Stat label="Kelly fraction f*" value={`${fmt(fStar * 100, 1)}%`} tone={color} />
        <Stat label="growth per bet at f* / at f*/2" value={`${fmt(g(fStar) * 100, 2)}% / ${fmt(g(fStar / 2) * 100, 2)}%`} />
        <Stat label="growth at 2f*" value={`${fmt(g(Math.min(2 * fStar, 0.999)) * 100, 2)}%`} tone="#d9534f" />
      </div>
    </Card>
  )
}

// ── trading expectancy and ruin ────────────────────────────────────────────

function TradeSim({ color }: { color: string }) {
  const [win, setWin] = useState(0.4)
  const [reward, setReward] = useState(2)
  const [risk, setRisk] = useState(0.02)
  const [trades, setTrades] = useState(200)
  const [seed, setSeed] = useState(11)
  const expectancy = win * reward - (1 - win) * 1
  const sim = useMemo(() => {
    const rand = rng(seed)
    const paths: [number, number][][] = []
    let ruined = 0
    const finals: number[] = []
    const dds: number[] = []
    const runs = 300
    for (let k = 0; k < runs; k++) {
      let eq = 100
      let peak = 100
      let dd = 0
      let dead = false
      const line: [number, number][] = [[0, eq]]
      for (let t = 1; t <= trades; t++) {
        eq *= 1 + risk * (rand() < win ? reward : -1)
        peak = Math.max(peak, eq)
        dd = Math.max(dd, 1 - eq / peak)
        if (eq < 50) dead = true
        if (k < 25) line.push([t, eq])
      }
      if (k < 25) paths.push(line)
      if (dead) ruined++
      finals.push(eq)
      dds.push(dd)
    }
    return { paths, ruined: ruined / runs, finals, dds }
  }, [win, reward, risk, trades, seed])
  const fs = Float64Array.from(sim.finals).sort()
  const ds = Float64Array.from(sim.dds).sort()
  return (
    <Card title="Expectancy, risk per trade and the road to ruin" color={color} note="A strategy's expectancy per trade, in units of the amount risked (R), is win rate × average win − loss rate × average loss. A 40% win rate with winners twice the size of losers earns 0.2R per trade, so being right less than half the time is fine. But the result of a finite run depends on the order of wins and losses, and the fraction of capital risked each trade sets how violent the ride is. The paths below risk the same fraction every trade (so wins and losses compound); the share of paths that lose half the account is the 'risk of ruin' at your settings. Synthetic wins and losses, not market data.">
      <PlotChart block={{ t: 'plot', x: [0, trades], y: [0, Math.max(200, Math.min(quantile(fs, 0.9) * 1.1, 800))], xLabel: 'trade number', yLabel: 'account value (start 100)', data: sim.paths.map((pts, i) => ({ pts, color: SERIES[i % SERIES.length] })), hlines: [{ y: 50, label: 'lose half' }] }} />
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="win rate" value={win} min={0.2} max={0.8} step={0.01} onChange={setWin} show={`${Math.round(win * 100)}%`} />
        <Slider label="average win ÷ average loss (reward : risk)" value={reward} min={0.5} max={5} step={0.1} onChange={setReward} show={`${reward.toFixed(1)} : 1`} />
        <Slider label="capital risked per trade" value={risk} min={0.005} max={0.15} step={0.005} onChange={setRisk} show={`${(risk * 100).toFixed(1)}%`} />
        <Slider label="number of trades" value={trades} min={20} max={500} step={10} onChange={setTrades} />
        <Btn onClick={() => setSeed(seed + 1)}>New paths</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="expectancy per trade (R)" value={`${expectancy >= 0 ? '+' : ''}${fmt(expectancy, 2)}R`} tone={expectancy > 0 ? '#2f9e6e' : '#d9534f'} />
        <Stat label="median final account" value={fmt(quantile(fs, 0.5), 0)} tone={color} />
        <Stat label="chance of losing half" value={`${fmt(sim.ruined * 100, 0)}%`} tone="#d9534f" />
        <Stat label="median worst drawdown" value={`${fmt(quantile(ds, 0.5) * 100, 0)}%`} />
      </div>
    </Card>
  )
}

// ── mean reversion ─────────────────────────────────────────────────────────

function OuLab({ color }: { color: string }) {
  const [theta, setTheta] = useState(0.15)
  const [sigma, setSigma] = useState(1)
  const [zin, setZin] = useState(1.5)
  const [seed, setSeed] = useState(4)
  const n = 400
  const sim = useMemo(() => {
    const rand = rng(seed)
    const x: number[] = [0]
    const walk: number[] = [0]
    for (let t = 1; t <= n; t++) {
      x.push(x[t - 1] + theta * (0 - x[t - 1]) + sigma * normal(rand))
      walk.push(walk[t - 1] + sigma * normal(rand))
    }
    const sdev = sigma / Math.sqrt(1 - (1 - theta) ** 2) // stationary standard deviation
    // Enter short when z > zin and long when z < -zin; exit at the mean.
    let pos = 0
    let entry = 0
    let pnl = 0
    const marks: { t: number; v: number; kind: string }[] = []
    const eq: [number, number][] = [[0, 0]]
    let trades = 0
    for (let t = 1; t <= n; t++) {
      const z = x[t] / sdev
      if (pos === 0 && Math.abs(z) > zin) {
        pos = z > 0 ? -1 : 1
        entry = x[t]
        marks.push({ t, v: x[t], kind: pos === 1 ? 'long' : 'short' })
      } else if (pos !== 0 && (pos === 1 ? x[t] >= 0 : x[t] <= 0)) {
        pnl += pos * (x[t] - entry)
        marks.push({ t, v: x[t], kind: 'exit' })
        trades++
        pos = 0
      }
      eq.push([t, pnl + (pos !== 0 ? pos * (x[t] - entry) : 0)])
    }
    return { x, walk, sdev, marks, eq, pnl, trades }
  }, [theta, sigma, seed, zin])
  const pts = (a: number[]) => a.map((v, t) => [t, v] as [number, number])
  const half = Math.log(2) / -Math.log(1 - theta)
  const ext = Math.max(4 * sim.sdev, ...sim.x.map(Math.abs)) * 1.1
  return (
    <Card title="Mean reversion: the Ornstein–Uhlenbeck process and a z-score rule" color={color} note="A mean-reverting series (a spread between two related prices, say) is pulled back toward its mean at rate θ each step: x(t+1) = x(t) + θ(μ − x(t)) + σε. The pull gives it a stable range (standard deviation σ/√(1 − (1−θ)²)) and a half-life ln 2 ÷ −ln(1−θ): the time for a deviation to halve. A simple rule is to sell when the z-score (deviation in standard deviations) is above an entry threshold and buy back at the mean. A random walk has no pull, so the same rule loses money there: its deviations just keep growing. Synthetic data.">
      <PlotChart block={{ t: 'plot', x: [0, n], y: [-ext, ext], xLabel: 'time step', yLabel: 'deviation from the mean', data: [{ pts: pts(sim.walk), color: '#8a8478', label: 'random walk (no pull)', dashed: true }, { pts: pts(sim.x), color, label: 'mean-reverting' }], hlines: [{ y: zin * sim.sdev, label: 'sell above' }, { y: -zin * sim.sdev, label: 'buy below' }] }} />
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="speed of reversion θ" value={theta} min={0.01} max={0.5} step={0.01} onChange={setTheta} />
        <Slider label="noise σ" value={sigma} min={0.2} max={3} step={0.1} onChange={setSigma} />
        <Slider label="entry threshold (z-score)" value={zin} min={0.5} max={3} step={0.1} onChange={setZin} show={zin.toFixed(1)} />
        <Btn onClick={() => setSeed(seed + 1)}>New path</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="half-life" value={`${fmt(half, 1)} steps`} tone={color} />
        <Stat label="stationary std deviation" value={fmt(sim.sdev, 2)} />
        <Stat label="rule: trades completed" value={String(sim.trades)} />
        <Stat label="rule: profit (in x units)" value={fmt(sim.pnl, 1)} tone={sim.pnl >= 0 ? '#2f9e6e' : '#d9534f'} />
      </div>
    </Card>
  )
}

// ── binomial trees ─────────────────────────────────────────────────────────

function Binomial({ color }: { color: string }) {
  const [S, setS] = useState(100)
  const [K, setK] = useState(100)
  const [sig, setSig] = useState(0.25)
  const [r, setR] = useState(0.03)
  const [T, setT] = useState(1)
  const crr = (n: number) => {
    const dt = T / n
    const u = Math.exp(sig * Math.sqrt(dt))
    const d = 1 / u
    const p = (Math.exp(r * dt) - d) / (u - d)
    let v = Array.from({ length: n + 1 }, (_, j) => Math.max(S * u ** j * d ** (n - j) - K, 0))
    for (let i = n - 1; i >= 0; i--) v = v.slice(0, i + 1).map((_, j) => Math.exp(-r * dt) * (p * v[j + 1] + (1 - p) * v[j]))
    return v[0]
  }
  const d1 = (Math.log(S / K) + (r + 0.5 * sig * sig) * T) / (sig * Math.sqrt(T))
  const d2 = d1 - sig * Math.sqrt(T)
  const bs = S * Phi(d1) - K * Math.exp(-r * T) * Phi(d2)
  const pts = Array.from({ length: 60 }, (_, i) => [i + 1, crr(i + 1)] as [number, number])
  return (
    <Card title="Pricing an option on a binomial tree" color={color} note="Split the option's life into n steps. At each step the price moves up by a factor u = e^(σ√Δt) or down by 1/u, with risk-neutral up-probability p = (e^(rΔt) − d)/(u − d). Work backwards from the payoffs at expiry, discounting the expected value at each node. With more steps the tree price converges to the Black–Scholes formula. The same backward induction handles American options and exotic payoffs where there is no closed formula, which is why trees and their cousins (finite differences, Monte Carlo) are the workhorses of derivatives pricing. Synthetic inputs.">
      <PlotChart block={{ t: 'plot', x: [1, 60], y: [Math.max(0, bs - 3), bs + 3], xLabel: 'number of steps in the tree', yLabel: 'European call price', data: [{ pts, color, label: 'binomial tree' }], hlines: [{ y: bs, label: `Black–Scholes ${bs.toFixed(3)}` }] }} />
      <div className="flex flex-wrap gap-3">
        <Slider label="spot price S" value={S} min={50} max={150} step={1} onChange={setS} />
        <Slider label="strike K" value={K} min={50} max={150} step={1} onChange={setK} />
        <Slider label="volatility σ" value={sig} min={0.05} max={0.8} step={0.01} onChange={setSig} show={`${Math.round(sig * 100)}%`} />
        <Slider label="rate r" value={r} min={0} max={0.08} step={0.005} onChange={setR} show={`${(r * 100).toFixed(1)}%`} />
        <Slider label="years to expiry" value={T} min={0.1} max={3} step={0.1} onChange={setT} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="Black–Scholes" value={bs.toFixed(3)} tone={color} />
        <Stat label="tree, 5 steps" value={crr(5).toFixed(3)} />
        <Stat label="tree, 60 steps" value={crr(60).toFixed(3)} />
      </div>
    </Card>
  )
}

// ── overfitting and multiple testing ───────────────────────────────────────

function Overfit({ color }: { color: string }) {
  const [N, setN] = useState(200)
  const [seed, setSeed] = useState(2)
  const days = 252
  const sim = useMemo(() => {
    const rand = rng(seed)
    let best = -1e9
    let bestR: number[] = []
    for (let k = 0; k < N; k++) {
      const r = Array.from({ length: days }, () => 0.01 * normal(rand))
      const s = (mean(r) / sd(r)) * Math.sqrt(252)
      if (s > best) {
        best = s
        bestR = r
      }
    }
    const oos = Array.from({ length: days }, () => 0.01 * normal(rand))
    const sharpe = (r: number[]) => (mean(r) / sd(r)) * Math.sqrt(252)
    const eq = (r: number[], start: number, t0: number) => {
      let v = start
      return r.map((x, i) => [t0 + i + 1, (v *= 1 + x)] as [number, number])
    }
    const a = eq(bestR, 100, 0)
    const b = eq(oos, a[a.length - 1][1], days)
    return { best, oosS: sharpe(oos), a, b }
  }, [N, seed])
  const expMax = Math.sqrt(2 * Math.log(Math.max(N, 2)))
  const curve = (n: number) => Math.sqrt(2 * Math.log(Math.max(n, 2)))
  return (
    <Card title="Overfitting: the best of N random strategies" color={color} note="Every 'strategy' below is pure noise: random daily returns with a true Sharpe ratio of zero. Test enough of them and the best looks brilliant by luck alone: the expected best annualised Sharpe from N noise strategies over one year is about √(2 ln N). Trade the winner after the selection and its out-of-sample returns revert to nothing. This is the multiple-testing problem behind much of what passes for a discovered edge, and why backtests must be judged against how many variants were tried, with held-out data used only once.">
      <PlotChart block={{ t: 'plot', x: [0, days * 2], y: [60, 220], xLabel: 'trading days (selection period, then live)', yLabel: 'account value (start 100)', data: [{ pts: sim.a, color: '#2f9e6e', label: 'best strategy, in-sample' }, { pts: sim.b, color: '#d9534f', label: 'same strategy, afterwards' }], vlines: [{ x: days, label: 'went live' }] }} />
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="number of random strategies tried (N)" value={N} min={1} max={2000} step={1} onChange={setN} />
        <Btn onClick={() => setSeed(seed + 1)}>Try again</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="best in-sample Sharpe" value={fmt(sim.best, 2)} tone="#2f9e6e" />
        <Stat label="its out-of-sample Sharpe" value={fmt(sim.oosS, 2)} tone="#d9534f" />
        <Stat label="theory: best of N ≈ √(2 ln N)" value={fmt(expMax, 2)} />
        <Stat label="for N = 10 / 100 / 1000" value={`${fmt(curve(10), 1)} / ${fmt(curve(100), 1)} / ${fmt(curve(1000), 1)}`} />
      </div>
    </Card>
  )
}

// ── entries versus exits ───────────────────────────────────────────────────

type ExitRule = { name: string; run: (px: number[], i: number, sig: number) => { exit: number; risk: number } }

function RandomEntry({ color }: { color: string }) {
  const [drift, setDrift] = useState(0.0004)
  const [trend, setTrend] = useState(0.1)
  const [cost, setCost] = useState(0.05)
  const [seed, setSeed] = useState(9)
  const rules: ExitRule[] = [
    { name: 'Hold 10 days, then sell', run: (px, i) => ({ exit: Math.min(i + 10, px.length - 1), risk: 0 }) },
    { name: 'Stop 2 ATR below, target 3 ATR above', run: (px, i, s) => ({ exit: (() => { for (let j = i + 1; j < px.length; j++) { if (px[j] <= px[i] * (1 - 2 * s) || px[j] >= px[i] * (1 + 3 * s)) return j } return px.length - 1 })(), risk: 2 * s }) },
    { name: 'Trailing stop 3 ATR below the high', run: (px, i, s) => ({ exit: (() => { let hi = px[i]; for (let j = i + 1; j < px.length; j++) { hi = Math.max(hi, px[j]); if (px[j] <= hi * (1 - 3 * s)) return j } return px.length - 1 })(), risk: 3 * s }) },
    { name: 'Stop 1 ATR, no target, max 60 days', run: (px, i, s) => ({ exit: (() => { for (let j = i + 1; j < Math.min(px.length, i + 61); j++) { if (px[j] <= px[i] * (1 - s)) return j } return Math.min(px.length - 1, i + 60) })(), risk: s }) },
  ]
  const res = useMemo(() => {
    const rand = rng(seed)
    const n = 40000
    const sigma = 0.015
    const px = [100]
    let last = 0
    for (let t = 1; t < n; t++) {
      const r = drift + trend * last + sigma * normal(rand)
      last = r
      px.push(px[t - 1] * Math.exp(r))
      if (px[t] > 1e6 || px[t] < 1e-3) px[t] = 100
    }
    const entries: number[] = []
    const erand = rng(seed + 100)
    for (let i = 0; i < n - 200; i++) if (erand() < 0.01) entries.push(i)
    return rules.map((rule) => {
      const rs: number[] = []
      for (const i of entries) {
        const { exit, risk } = rule.run(px, i, sigma)
        const risked = risk || 2 * sigma // the hold rule is measured against a notional 2 ATR risk
        rs.push((px[exit] / px[i] - 1 - cost / 100) / risked)
      }
      const wins = rs.filter((x) => x > 0)
      const losses = rs.filter((x) => x <= 0)
      const gw = wins.reduce((a, b) => a + b, 0)
      const gl = -losses.reduce((a, b) => a + b, 0)
      return { name: rule.name, exp: mean(rs), win: wins.length / rs.length, pf: gl > 0 ? gw / gl : Infinity, n: rs.length }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drift, trend, cost, seed])
  const hi = Math.max(...res.map((r) => Math.abs(r.exp)), 0.05)
  return (
    <Card title="Random entries, different exits" color={color} note="Every trade here is entered at a random moment: no signal at all. Only the exit rule differs. On a series with no drift and no trend, no exit rule can create an edge and costs make them all lose; with a little upward drift or trend (a tendency for moves to persist), rules that let winners run and cut losers short earn a positive expectancy even with random entries. The point is not that entries are irrelevant but that exits and risk control shape the outcome more than most people expect. Results are in R (multiples of the initial risk), averaged over about 400 trades on a synthetic 40,000-day series.">
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="daily drift of the market" value={drift} min={-0.0005} max={0.001} step={0.0001} onChange={setDrift} show={`${(drift * 100).toFixed(2)}% / day`} />
        <Slider label="trendiness (day-to-day return persistence)" value={trend} min={-0.1} max={0.25} step={0.01} onChange={setTrend} show={trend.toFixed(2)} />
        <Slider label="round-trip cost (% of price)" value={cost} min={0} max={0.3} step={0.01} onChange={setCost} show={`${cost.toFixed(2)}%`} />
        <Btn onClick={() => setSeed(seed + 1)}>New series</Btn>
      </div>
      <div className="flex flex-col gap-1.5">
        {res.map((r) => (
          <div key={r.name} className="grid grid-cols-[minmax(7rem,14rem)_1fr_4.6rem] items-center gap-2 text-xs">
            <span className="font-bold leading-tight">{r.name}</span>
            <span className="relative h-5 rounded-sm" style={{ background: 'var(--paper-2)' }}>
              <span className="absolute top-0 bottom-0 left-1/2 w-0.5" style={{ background: 'var(--ink)' }} />
              <span className="absolute top-0.5 bottom-0.5 rounded-sm" style={{ background: r.exp >= 0 ? color : '#d9534f', width: `${(Math.abs(r.exp) / hi) * 50}%`, [r.exp >= 0 ? 'left' : 'right']: '50%' }} />
            </span>
            <span className="text-right font-mono font-bold">{r.exp >= 0 ? '+' : ''}{fmt(r.exp, 2)}R</span>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[26rem] text-left text-xs">
          <thead><tr style={{ background: 'var(--paper-2)' }}>{['Exit rule', 'Win rate', 'Profit factor', 'Expectancy', 'Trades'].map((h) => <th key={h} className="px-2 py-1.5 font-bold">{h}</th>)}</tr></thead>
          <tbody>{res.map((r) => <tr key={r.name} className="border-t" style={{ borderColor: 'var(--line)' }}><td className="px-2 py-1">{r.name}</td><td className="px-2 py-1">{fmt(r.win * 100, 0)}%</td><td className="px-2 py-1">{Number.isFinite(r.pf) ? fmt(r.pf, 2) : '∞'}</td><td className="px-2 py-1 font-bold">{fmt(r.exp, 3)}R</td><td className="px-2 py-1">{r.n}</td></tr>)}</tbody>
        </table>
      </div>
    </Card>
  )
}

// ── market impact ──────────────────────────────────────────────────────────

function Impact({ color }: { color: string }) {
  const [vol, setVol] = useState(0.02)
  const [share, setShare] = useState(0.05)
  const [spread, setSpread] = useState(5)
  const [risk, setRisk] = useState(1)
  const Y = 0.8
  const impact = (q: number) => Y * vol * Math.sqrt(q) * 1e4 // basis points
  const total = (q: number) => spread / 2 + impact(q)
  // Execution horizon: spreading an order over more time lowers impact but exposes you to price risk.
  const impactT = (T: number) => impact(share) / Math.sqrt(T)
  const timing = (T: number) => risk * vol * 1e4 * Math.sqrt(T / 390) * 0.35
  const totalT = (T: number) => impactT(T) + timing(T)
  let bestT = 1
  for (let T = 1; T <= 390; T++) if (totalT(T) < totalT(bestT)) bestT = T
  return (
    <Card title="The cost of trading: spread, impact and timing risk" color={color} note="Trading is not free at the quoted price. You pay half the bid-ask spread to cross it, and a large order moves the price against you. Empirically, impact grows with the square root of the order size as a share of daily volume: impact ≈ Y·σ·√(Q/V), with Y of order 1. Splitting a big order into slices over a longer time lowers impact but leaves you exposed to the price drifting while you wait (timing risk, which grows with the square root of the time). Execution algorithms balance the two, the idea behind the Almgren–Chriss model. Illustrative constants, not a calibrated model.">
      <PlotChart block={{ t: 'plot', x: [0, 0.3], y: [0, Math.max(60, total(0.3) * 1.05)], xLabel: 'order size as a share of daily volume', yLabel: 'cost (basis points of the price)', curves: [{ f: () => spread / 2, color: '#8a8478', label: 'half-spread', dashed: true }, { f: impact, color: '#e07b2a', label: 'impact ≈ Yσ√(Q/V)', dashed: true }, { f: total, color, label: 'total' }], vlines: [{ x: share, label: 'your order' }] }} />
      <PlotChart block={{ t: 'plot', x: [1, 390], y: [0, Math.max(60, impactT(1) * 0.6)], xLabel: 'minutes over which the order is worked', yLabel: 'cost (basis points)', curves: [{ f: impactT, color: '#e07b2a', label: 'impact falls with time' }, { f: timing, color: '#d9534f', label: 'timing risk rises with time' }, { f: totalT, color, label: 'total' }], vlines: [{ x: bestT, label: `best ≈ ${bestT} min` }] }} />
      <div className="flex flex-wrap gap-3">
        <Slider label="daily volatility" value={vol} min={0.005} max={0.05} step={0.001} onChange={setVol} show={`${(vol * 100).toFixed(1)}%`} />
        <Slider label="order as a share of daily volume" value={share} min={0.005} max={0.3} step={0.005} onChange={setShare} show={`${(share * 100).toFixed(1)}%`} />
        <Slider label="bid-ask spread (bp)" value={spread} min={1} max={30} step={1} onChange={setSpread} />
        <Slider label="aversion to price risk" value={risk} min={0.2} max={4} step={0.1} onChange={setRisk} show={risk.toFixed(1)} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="impact of this order" value={`${fmt(impact(share), 1)} bp`} tone="#e07b2a" />
        <Stat label="spread + impact" value={`${fmt(total(share), 1)} bp`} tone={color} />
        <Stat label="best horizon (illustrative)" value={`${bestT} min`} />
      </div>
    </Card>
  )
}

// ── beta and alpha estimation ──────────────────────────────────────────────

function FactorRegression({ color }: { color: string }) {
  const [beta, setBeta] = useState(1.2)
  const [alpha, setAlpha] = useState(0.002)
  const [noise, setNoise] = useState(0.04)
  const [months, setMonths] = useState(60)
  const [seed, setSeed] = useState(6)
  const fit = useMemo(() => {
    const rand = rng(seed)
    const xs = Array.from({ length: months }, () => 0.006 + 0.045 * normal(rand))
    const ys = xs.map((x) => alpha + beta * x + noise * normal(rand))
    const mx = mean(xs)
    const my = mean(ys)
    let sxx = 0
    let sxy = 0
    for (let i = 0; i < months; i++) {
      sxx += (xs[i] - mx) ** 2
      sxy += (xs[i] - mx) * (ys[i] - my)
    }
    const b = sxy / sxx
    const a = my - b * mx
    const res = ys.map((y, i) => y - a - b * xs[i])
    const s2 = res.reduce((q, e) => q + e * e, 0) / (months - 2)
    const seA = Math.sqrt(s2 * (1 / months + (mx * mx) / sxx))
    const seB = Math.sqrt(s2 / sxx)
    const ssTot = ys.reduce((q, y) => q + (y - my) ** 2, 0)
    return { xs, ys, a, b, tA: a / seA, tB: b / seB, seB, r2: 1 - res.reduce((q, e) => q + e * e, 0) / ssTot }
  }, [beta, alpha, noise, months, seed])
  const W = 520
  const H = 320
  const lim = 0.14
  const sx = (v: number) => 44 + ((v + lim) / (2 * lim)) * (W - 60)
  const sy = (v: number) => H - 32 - ((v + lim * 1.4) / (2.8 * lim)) * (H - 50)
  return (
    <Card title="Estimating beta and alpha from returns" color={color} note="The market model regresses a stock's excess return on the market's: r = α + β·r_market + ε. Beta is the slope (sensitivity to the market), alpha the intercept (return not explained by the market). With a few years of monthly data, beta can be estimated reasonably well but alpha cannot: its standard error is large compared to any plausible true alpha, so the t-statistic is usually inside ±2 and the 'significant alpha' you find is often noise. Sample again and watch the estimates jump. Synthetic data with a known truth.">
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-xl rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Scatter of stock returns against market returns with a fitted line">
        <line x1={sx(-lim)} x2={sx(lim)} y1={sy(0)} y2={sy(0)} stroke="var(--line)" />
        <line x1={sx(0)} x2={sx(0)} y1={sy(-lim * 1.4)} y2={sy(lim * 1.4)} stroke="var(--line)" />
        {fit.xs.map((x, i) => <circle key={i} cx={sx(x)} cy={sy(fit.ys[i])} r={3.5} fill={color} opacity={0.75} />)}
        <line x1={sx(-lim)} y1={sy(alpha + beta * -lim)} x2={sx(lim)} y2={sy(alpha + beta * lim)} stroke="#2f9e6e" strokeWidth={2} strokeDasharray="6 4" />
        <line x1={sx(-lim)} y1={sy(fit.a + fit.b * -lim)} x2={sx(lim)} y2={sy(fit.a + fit.b * lim)} stroke="#d9534f" strokeWidth={2.2} />
        <text x={W / 2} y={H - 6} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--ink)">market return (monthly)</text>
        <text x={12} y={H / 2} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--ink)" transform={`rotate(-90 12 ${H / 2})`}>stock return (monthly)</text>
        <text x={56} y={18} fontSize={11} fontWeight={700} fill="#2f9e6e">- - true line</text>
        <text x={140} y={18} fontSize={11} fontWeight={700} fill="#d9534f">fitted line</text>
      </svg>
      <div className="flex flex-wrap items-end gap-3">
        <Slider label="true beta" value={beta} min={0} max={2} step={0.05} onChange={setBeta} show={beta.toFixed(2)} />
        <Slider label="true alpha (per month)" value={alpha} min={-0.01} max={0.01} step={0.0005} onChange={setAlpha} show={`${(alpha * 100).toFixed(2)}%`} />
        <Slider label="stock-specific noise (monthly)" value={noise} min={0.005} max={0.1} step={0.005} onChange={setNoise} show={`${(noise * 100).toFixed(1)}%`} />
        <Slider label="months of data" value={months} min={12} max={240} step={6} onChange={setMonths} />
        <Btn onClick={() => setSeed(seed + 1)}>Resample</Btn>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="estimated beta (± 1 s.e.)" value={`${fmt(fit.b, 2)} ± ${fmt(fit.seB, 2)}`} tone={color} />
        <Stat label="estimated alpha per month" value={`${fmt(fit.a * 100, 2)}%`} />
        <Stat label="t-statistic of alpha" value={fmt(fit.tA, 2)} tone={Math.abs(fit.tA) > 2 ? '#e07b2a' : undefined} />
        <Stat label="R² (share explained by the market)" value={fmt(fit.r2, 2)} />
      </div>
      <p className="text-xs" style={soft}>Rule of thumb: |t| above about 2 is conventionally called significant. Try a true alpha of zero and resample many times: you will see |t| above 2 about one time in twenty by chance alone.</p>
    </Card>
  )
}
