import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { binomial, blackScholes, bondPrice, bondRisk, bondYield, forwardRate, futuresFair, impliedVol, payoffAt } from '../../lib/finance/derivatives'
import type { Leg } from '../../lib/finance/derivatives'
import { PlotChart } from './PlotChart'
import { InlineTex } from './Tex'

// Calculators for options, bonds, futures and currencies.

const card = 'card-surface flex max-w-4xl flex-col gap-3 rounded-[var(--radius)] p-4'
const soft = { color: 'var(--ink-soft)' }
const f2 = (n: number, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : '–')

function Num({ label, value, onChange, hint, step = 'any' }: { label: string; value: number; onChange: (n: number) => void; hint?: string; step?: string }) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-sm font-bold">
      {label}
      <input className="input-field" type="number" step={step} value={Number.isFinite(value) ? value : ''} onChange={(e) => onChange(Number(e.target.value))} />
      {hint && (
        <span className="text-xs font-normal" style={soft}>
          {hint}
        </span>
      )}
    </label>
  )
}

function Work({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[var(--radius)] px-2 py-1.5 sm:px-3 sm:py-2 text-sm" style={{ background: 'var(--paper-2)' }}>{children}</div>
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-[var(--radius)] p-2.5" style={{ background: color ? `color-mix(in srgb, ${color} 18%, var(--surface))` : 'var(--paper-2)' }}>
      <p className="text-xs" style={soft}>
        {label}
      </p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  )
}

// ── options strategy lab ────────────────────────────────────────────────────

type Shape = { kind: Leg['kind']; qty: number; k: number }
const STRATEGIES: Record<string, { legs: Shape[]; note: string }> = {
  'Long call': { legs: [{ kind: 'call', qty: 1, k: 1 }], note: 'Bullish. Risk limited to the premium; unlimited upside.' },
  'Long put': { legs: [{ kind: 'put', qty: 1, k: 1 }], note: 'Bearish, or insurance. Risk limited to the premium.' },
  'Covered call': { legs: [{ kind: 'stock', qty: 1, k: 1 }, { kind: 'call', qty: -1, k: 1.1 }], note: 'Own the stock, sell an upside call: income in exchange for capping gains.' },
  'Protective put': { legs: [{ kind: 'stock', qty: 1, k: 1 }, { kind: 'put', qty: 1, k: 0.9 }], note: 'Own the stock, buy a put: insurance below the strike.' },
  Collar: { legs: [{ kind: 'stock', qty: 1, k: 1 }, { kind: 'put', qty: 1, k: 0.9 }, { kind: 'call', qty: -1, k: 1.1 }], note: 'A protective put paid for by selling a call: a band of outcomes.' },
  'Cash-secured put': { legs: [{ kind: 'put', qty: -1, k: 0.95 }], note: 'Get paid to agree to buy the stock lower. Same payoff shape as a covered call.' },
  'Bull call spread': { legs: [{ kind: 'call', qty: 1, k: 1 }, { kind: 'call', qty: -1, k: 1.1 }], note: 'Cheaper bullish bet with capped profit and loss.' },
  'Bear put spread': { legs: [{ kind: 'put', qty: 1, k: 1 }, { kind: 'put', qty: -1, k: 0.9 }], note: 'Cheaper bearish bet with capped profit and loss.' },
  'Long straddle': { legs: [{ kind: 'call', qty: 1, k: 1 }, { kind: 'put', qty: 1, k: 1 }], note: 'Bet on a big move in either direction (or rising volatility).' },
  'Long strangle': { legs: [{ kind: 'call', qty: 1, k: 1.1 }, { kind: 'put', qty: 1, k: 0.9 }], note: 'A cheaper straddle that needs a bigger move.' },
  'Iron condor': {
    legs: [
      { kind: 'put', qty: 1, k: 0.85 },
      { kind: 'put', qty: -1, k: 0.92 },
      { kind: 'call', qty: -1, k: 1.08 },
      { kind: 'call', qty: 1, k: 1.15 },
    ],
    note: 'Bet that the price stays in a range: collect premium, with capped risk.',
  },
  'Long butterfly': { legs: [{ kind: 'call', qty: 1, k: 0.9 }, { kind: 'call', qty: -2, k: 1 }, { kind: 'call', qty: 1, k: 1.1 }], note: 'Bet that the price ends near the middle strike.' },
}

export function OptionsLab({ color }: { color: string }) {
  const [name, setName] = useState('Long call')
  const [S, setS] = useState(100)
  const [vol, setVol] = useState(25)
  const [days, setDays] = useState(45)
  const [r, setR] = useState(4)
  const T = Math.max(1, days) / 365
  const legs: (Leg & { greeks?: ReturnType<typeof blackScholes> })[] = useMemo(
    () =>
      STRATEGIES[name].legs.map((l) => {
        const K = Math.round(S * l.k * 100) / 100
        if (l.kind === 'stock') return { kind: 'stock', qty: l.qty, strike: S, premium: 0 }
        const g = blackScholes(l.kind, S, K, T, r / 100, vol / 100)
        return { kind: l.kind, qty: l.qty, strike: K, premium: g.price, greeks: g }
      }),
    [name, S, vol, T, r],
  )
  const lo = S * 0.6
  const hi = S * 1.4
  const grid = Array.from({ length: 401 }, (_, i) => lo + ((hi - lo) * i) / 400)
  const pay = grid.map((x) => payoffAt(legs, x))
  const maxP = Math.max(...pay)
  const minP = Math.min(...pay)
  const breakevens = grid.filter((_, i) => i > 0 && Math.sign(pay[i]) !== Math.sign(pay[i - 1]))
  const today = (x: number) =>
    legs.reduce((sum, l) => {
      if (l.kind === 'stock') return sum + l.qty * (x - l.strike)
      return sum + l.qty * (blackScholes(l.kind, x, l.strike, T, r / 100, vol / 100).price - l.premium)
    }, 0)
  const net = legs.reduce((s, l) => s + (l.kind === 'stock' ? 0 : -l.qty * l.premium), 0)
  const sum = (k: 'delta' | 'gamma' | 'vega' | 'theta') => legs.reduce((s, l) => s + (l.kind === 'stock' ? (k === 'delta' ? l.qty : 0) : l.qty * (l.greeks?.[k] ?? 0)), 0)
  const unlimitedUp = pay[pay.length - 1] > pay[pay.length - 2] + 1e-9 && pay[pay.length - 1] === maxP
  const unlimitedDown = pay[pay.length - 1] < pay[pay.length - 2] - 1e-9
  const pad = (maxP - minP) * 0.15 || 5
  return (
    <div className={card}>
      <p className="font-bold">Options strategy lab</p>
      <div className="flex flex-wrap gap-1.5">
        {Object.keys(STRATEGIES).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setName(k)}
            className="rounded-full border px-2.5 py-1 text-xs font-bold pointer-coarse:min-h-10"
            style={{ borderColor: 'var(--line)', background: k === name ? 'var(--ink)' : 'var(--surface)', color: k === name ? 'var(--surface)' : 'var(--ink)' }}
          >
            {k}
          </button>
        ))}
      </div>
      <p className="text-sm">{STRATEGIES[name].note}</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <Num label="Stock price" value={S} onChange={(n) => setS(Math.max(1, n))} />
        <Num label="Volatility (%)" value={vol} onChange={(n) => setVol(Math.max(1, n))} />
        <Num label="Days to expiry" value={days} onChange={setDays} />
        <Num label="Interest rate (%)" value={r} onChange={setR} />
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr style={{ background: `color-mix(in srgb, ${color} 30%, var(--surface))` }}>
              {['Leg', 'Strike', 'Premium (Black–Scholes)', 'Delta'].map((h) => (
                <th key={h} className="border-b-2 px-3 py-1.5" style={{ borderColor: 'var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {legs.map((l, i) => (
              <tr key={i}>
                <td className="px-3 py-1.5 font-bold">
                  {l.qty > 0 ? 'Buy' : 'Sell'} {Math.abs(l.qty)} {l.kind}
                </td>
                <td className="px-3 py-1.5">{l.kind === 'stock' ? `at ${f2(l.strike)}` : f2(l.strike)}</td>
                <td className="px-3 py-1.5">{l.kind === 'stock' ? '–' : f2(l.premium)}</td>
                <td className="px-3 py-1.5">{l.kind === 'stock' ? f2(l.qty) : f2(l.qty * (l.greeks?.delta ?? 0))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PlotChart
        block={{
          t: 'plot',
          title: `${name}: profit or loss per share`,
          x: [lo, hi],
          y: [minP - pad, maxP + pad],
          xLabel: 'Stock price',
          yLabel: 'Profit / loss',
          curves: [
            { f: (x: number) => payoffAt(legs, x), label: 'At expiry' },
            { f: today, label: `Today (${days} days left)`, dashed: true },
          ],
          vlines: [{ x: S, label: 'Now' }],
          hlines: [{ y: 0 }],
        }}
      />
      <div className="grid gap-2 sm:grid-cols-4">
        <Stat label={net >= 0 ? 'Net credit received' : 'Net cost (debit)'} value={f2(Math.abs(net))} color={color} />
        <Stat label="Max profit" value={unlimitedUp ? 'Unlimited' : f2(maxP)} />
        <Stat label="Max loss" value={unlimitedDown ? 'Unlimited' : f2(minP)} />
        <Stat label="Breakeven(s)" value={breakevens.length ? breakevens.map((b) => f2(b)).join(', ') : '–'} />
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        <Stat label="Position delta" value={f2(sum('delta'), 3)} />
        <Stat label="Gamma" value={f2(sum('gamma'), 4)} />
        <Stat label="Vega (per 1% vol)" value={f2(sum('vega'), 3)} />
        <Stat label="Theta (per day)" value={f2(sum('theta'), 3)} />
      </div>
      <p className="text-xs" style={soft}>
        One contract usually covers 100 shares, so multiply by 100 for real amounts. Premiums are theoretical Black–Scholes values; real prices include a bid–ask spread and the market’s own implied volatility.
      </p>
    </div>
  )
}

// ── Black–Scholes calculator ───────────────────────────────────────────────

export function BlackScholesCalc({ color }: { color: string }) {
  const [S, setS] = useState(100)
  const [K, setK] = useState(100)
  const [days, setDays] = useState(365)
  const [r, setR] = useState(5)
  const [vol, setVol] = useState(20)
  const [q, setQ] = useState(0)
  const [market, setMarket] = useState(10.45)
  const T = Math.max(1, days) / 365
  const c = blackScholes('call', S, K, T, r / 100, vol / 100, q / 100)
  const p = blackScholes('put', S, K, T, r / 100, vol / 100, q / 100)
  const amer = binomial('put', S, K, T, r / 100, vol / 100, 300, true)
  const iv = impliedVol('call', market, S, K, T, r / 100, q / 100)
  return (
    <div className={card}>
      <p className="font-bold">Black–Scholes calculator</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Num label="Stock price S" value={S} onChange={setS} />
        <Num label="Strike K" value={K} onChange={setK} />
        <Num label="Days to expiry" value={days} onChange={setDays} />
        <Num label="Risk-free rate r (%)" value={r} onChange={setR} />
        <Num label="Volatility σ (%)" value={vol} onChange={setVol} />
        <Num label="Dividend yield q (%)" value={q} onChange={setQ} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle d_1 = \frac{\ln(S/K) + (r - q + \sigma^2/2)T}{\sigma\sqrt T} = ${f2(c.d1, 4)},\qquad d_2 = d_1 - \sigma\sqrt T = ${f2(c.d2, 4)}`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle C = S e^{-qT}N(d_1) - K e^{-rT}N(d_2) = ${f2(c.price, 4)},\qquad P = K e^{-rT}N(-d_2) - S e^{-qT}N(-d_1) = ${f2(p.price, 4)}`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{Put–call parity: } C - P = S e^{-qT} - K e^{-rT}:\quad ${f2(c.price - p.price, 4)} = ${f2(S * Math.exp((-q / 100) * T) - K * Math.exp((-r / 100) * T), 4)}\ \checkmark`} />
      </Work>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr style={{ background: `color-mix(in srgb, ${color} 30%, var(--surface))` }}>
              {['', 'Call', 'Put', 'Meaning'].map((h) => (
                <th key={h} className="border-b-2 px-3 py-1.5" style={{ borderColor: 'var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(
              [
                ['Price', c.price, p.price, 'Theoretical value'],
                ['Delta Δ', c.delta, p.delta, 'Change in option price per $1 move in the stock'],
                ['Gamma Γ', c.gamma, p.gamma, 'Change in delta per $1 move'],
                ['Vega ν', c.vega, p.vega, 'Change in price per 1-point rise in volatility'],
                ['Theta Θ', c.theta, p.theta, 'Change in price per day that passes'],
                ['Rho ρ', c.rho, p.rho, 'Change in price per 1-point rise in interest rates'],
                ['N(d₂)', c.probITM, p.probITM, 'Risk-neutral probability of finishing in the money'],
              ] as const
            ).map(([k, a, b, m]) => (
              <tr key={k}>
                <td className="px-3 py-1.5 font-bold">{k}</td>
                <td className="px-3 py-1.5">{f2(a, 4)}</td>
                <td className="px-3 py-1.5">{f2(b, 4)}</td>
                <td className="px-3 py-1.5 text-xs" style={soft}>
                  {m}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm">
        American put (binomial tree, early exercise allowed): <b>{f2(amer.price, 4)}</b>, versus European <b>{f2(p.price, 4)}</b>. The difference is the value of being able to exercise early.
      </p>
      <div className="grid items-end gap-3 sm:grid-cols-2">
        <Num label="Market price of the call" value={market} onChange={setMarket} hint="Find the volatility that explains it" />
        <Stat label="Implied volatility" value={`${f2(iv * 100)}%`} color={color} />
      </div>
    </div>
  )
}

// ── bonds ──────────────────────────────────────────────────────────────────

export function BondCalc({ color }: { color: string }) {
  const [face, setFace] = useState(1000)
  const [coupon, setCoupon] = useState(4)
  const [years, setYears] = useState(10)
  const [ytm, setYtm] = useState(5)
  const [shock, setShock] = useState(1)
  const risk = bondRisk(face, coupon / 100, ytm / 100, years, 2)
  const after = bondPrice(face, coupon / 100, (ytm + shock) / 100, years, 2)
  const dy = shock / 100
  const est = risk.price * (-risk.modified * dy + 0.5 * risk.convexity * dy * dy)
  const check = bondYield(risk.price, face, coupon / 100, years, 2)
  return (
    <div className={card}>
      <p className="font-bold">Bond calculator (semi-annual coupons)</p>
      <div className="grid gap-3 sm:grid-cols-5">
        <Num label="Face value" value={face} onChange={setFace} />
        <Num label="Coupon (%/yr)" value={coupon} onChange={setCoupon} />
        <Num label="Years to maturity" value={years} onChange={(n) => setYears(Math.max(0.5, n))} />
        <Num label="Yield to maturity (%)" value={ytm} onChange={setYtm} />
        <Num label="Rate change (points)" value={shock} onChange={setShock} />
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        <Stat label="Price" value={f2(risk.price)} color={color} />
        <Stat label="Current yield" value={`${f2(((coupon / 100) * face * 100) / risk.price)}%`} />
        <Stat label="Macaulay / modified duration" value={`${f2(risk.macaulay)} / ${f2(risk.modified)} yrs`} />
        <Stat label="Convexity" value={f2(risk.convexity, 1)} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle P = \sum_{t=1}^{${Math.round(years * 2)}} \frac{${f2((coupon / 100) * face / 2)}}{(1 + ${f2(ytm / 200, 4)})^t} + \frac{${face}}{(1 + ${f2(ytm / 200, 4)})^{${Math.round(years * 2)}}} = ${f2(risk.price)}\quad(\text{solving back: } y = ${f2(check * 100, 3)}\%)`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \frac{\Delta P}{P} \approx -D_{mod}\,\Delta y + \tfrac12 C\,(\Delta y)^2 = -${f2(risk.modified)}(${f2(dy, 3)}) + \tfrac12(${f2(risk.convexity, 1)})(${f2(dy, 3)})^2 \Rightarrow \Delta P \approx ${f2(est)};\ \text{actual } ${f2(after - risk.price)}`} />
      </Work>
    </div>
  )
}

// ── futures ────────────────────────────────────────────────────────────────

export function FuturesCalc({ color }: { color: string }) {
  const [spot, setSpot] = useState(5000)
  const [r, setR] = useState(4.5)
  const [q, setQ] = useState(1.5)
  const [u, setU] = useState(0)
  const [days, setDays] = useState(90)
  const [mult, setMult] = useState(50)
  const [marginPct, setMarginPct] = useState(6)
  const [move, setMove] = useState(-3)
  const T = days / 365
  const fair = futuresFair(spot, r / 100, T, q / 100, u / 100)
  const notional = fair * mult
  const margin = (notional * marginPct) / 100
  const pnl = notional * (move / 100)
  return (
    <div className={card}>
      <p className="font-bold">Futures: fair value and leverage</p>
      <div className="grid gap-3 sm:grid-cols-5">
        <Num label="Spot price" value={spot} onChange={setSpot} />
        <Num label="Interest rate (%)" value={r} onChange={setR} />
        <Num label="Income yield (%)" value={q} onChange={setQ} hint="Dividends, coupons, convenience" />
        <Num label="Storage cost (%)" value={u} onChange={setU} hint="For commodities" />
        <Num label="Days to delivery" value={days} onChange={setDays} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle F_0 = S_0\,e^{(r + u - q)T} = ${spot}\,e^{(${f2(r / 100, 3)} + ${f2(u / 100, 3)} - ${f2(q / 100, 3)})(${f2(T, 3)})} = ${f2(fair)},\qquad \text{basis} = S - F = ${f2(spot - fair)}`} />
      </Work>
      <p className="text-sm">{fair > spot ? 'Futures above spot: contango (carry costs exceed income).' : 'Futures below spot: backwardation (income or convenience yield exceeds carry costs).'}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Num label="Contract multiplier" value={mult} onChange={setMult} hint="$ per index point" />
        <Num label="Initial margin (%)" value={marginPct} onChange={setMarginPct} />
        <Num label="Price move (%)" value={move} onChange={setMove} />
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        <Stat label="Contract value" value={notional.toLocaleString(undefined, { maximumFractionDigits: 0 })} color={color} />
        <Stat label="Margin posted" value={margin.toLocaleString(undefined, { maximumFractionDigits: 0 })} />
        <Stat label="Profit / loss" value={pnl.toLocaleString(undefined, { maximumFractionDigits: 0 })} />
        <Stat label="Return on margin" value={`${f2((pnl / margin) * 100, 1)}%`} />
      </div>
      <p className="text-xs" style={soft}>
        Leverage = 1 / margin = {f2(100 / marginPct, 1)}×. A {Math.abs(move)}% price move becomes a {f2(Math.abs((pnl / margin) * 100), 0)}% {pnl < 0 ? 'loss' : 'gain'} on the money you put up.
      </p>
    </div>
  )
}

// ── forex ──────────────────────────────────────────────────────────────────

export function ForexCalc({ color }: { color: string }) {
  const [eurusd, setEurusd] = useState(1.08)
  const [usdsgd, setUsdsgd] = useState(1.34)
  const [rUsd, setRUsd] = useState(4.5)
  const [rSgd, setRSgd] = useState(3)
  const [units, setUnits] = useState(100000)
  const cross = eurusd * usdsgd
  const fwd = forwardRate(usdsgd, rSgd / 100, rUsd / 100, 1)
  const pipUsd = (units * 0.0001) / usdsgd
  return (
    <div className={card}>
      <p className="font-bold">Currency calculator</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Num label="EUR/USD" value={eurusd} onChange={setEurusd} hint="US dollars per euro" />
        <Num label="USD/SGD" value={usdsgd} onChange={setUsdsgd} hint="Singapore dollars per US dollar" />
        <Num label="Position size (base units)" value={units} onChange={setUnits} hint="100,000 = 1 standard lot" />
        <Num label="US interest rate (%)" value={rUsd} onChange={setRUsd} />
        <Num label="SGD interest rate (%)" value={rSgd} onChange={setRSgd} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{EUR/SGD} = \text{EUR/USD} \times \text{USD/SGD} = ${eurusd} \times ${usdsgd} = ${f2(cross, 4)}`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle F = S\cdot\frac{1 + r_{SGD}}{1 + r_{USD}} = ${usdsgd}\cdot\frac{${f2(1 + rSgd / 100, 4)}}{${f2(1 + rUsd / 100, 4)}} = ${f2(fwd, 4)}\quad(\text{1-year forward; } ${f2((fwd - usdsgd) * 10000, 0)}\text{ points})`} />
      </Work>
      <div className="grid gap-2 sm:grid-cols-3">
        <Stat label="EUR/SGD cross rate" value={f2(cross, 4)} color={color} />
        <Stat label="1-year USD/SGD forward" value={f2(fwd, 4)} />
        <Stat label="Value of 1 pip on USD/SGD" value={`S$${f2(units * 0.0001)} ≈ US$${f2(pipUsd)}`} />
      </div>
      <p className="text-xs" style={soft}>
        The currency with the higher interest rate trades at a forward discount, so that locking in the forward rate cancels the interest advantage: covered interest parity.
      </p>
    </div>
  )
}
