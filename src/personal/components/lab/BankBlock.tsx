import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Card, Phi, Pills, Slider, Stat, money } from './kit'

type BankBlockType = Extract<Block, { t: 'bank-viz' }>

export default function BankBlock({ block, color }: { block: BankBlockType; color: string }) {
  switch (block.viz) {
    case 'compound':
      return <Compound color={color} />
    case 'flat-rate':
      return <FlatRate color={color} />
    case 'amortisation':
      return <Amortisation color={color} />
    case 'money-multiplier':
      return <Multiplier color={color} />
    case 'leverage':
      return <Leverage color={color} />
    case 'bank-run':
      return <BankRun color={color} />
    case 'credit-risk':
      return <CreditRisk color={color} />
    case 'card-interest':
      return <CardInterest color={color} />
  }
}

const FREQ: [string, string, number][] = [['1', 'Yearly', 1], ['4', 'Quarterly', 4], ['12', 'Monthly', 12], ['365', 'Daily', 365]]

function Compound({ color }: { color: string }) {
  const [rate, setRate] = useState(3)
  const [freq, setFreq] = useState('12')
  const [years, setYears] = useState(10)
  const [p0, setP0] = useState(10000)
  const n = Number(freq)
  const ear = (1 + rate / 100 / n) ** n - 1
  const bal = (y: number, m: number) => p0 * (1 + rate / 100 / m) ** (m * y)
  return (
    <Card title="Interest rate, compounding and the effective annual rate" color={color} note="A quoted rate such as 3% a year means little until you know how often interest is added. Each time interest is credited, the next calculation earns interest on interest. The effective annual rate (EAR) is the yearly growth you actually get: EAR = (1 + r/n)^n − 1. The same nominal rate paid more often gives a slightly higher EAR, and the effect grows with the rate and the time.">
      <div className="flex flex-wrap gap-3">
        <Slider label="nominal rate (% a year)" value={rate} min={0.5} max={12} step={0.1} onChange={setRate} show={`${rate.toFixed(1)}%`} />
        <Slider label="years" value={years} min={1} max={40} step={1} onChange={setYears} />
        <Slider label="deposit" value={p0} min={1000} max={100000} step={1000} onChange={setP0} show={money(p0)} />
      </div>
      <Pills label="compounded" value={freq} onChange={setFreq} options={FREQ.map(([v, l]) => [v, l] as [string, string])} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="effective annual rate" value={`${(ear * 100).toFixed(3)}%`} tone={color} />
        <Stat label={`balance after ${years} years`} value={money(bal(years, n))} />
        <Stat label="interest earned" value={money(bal(years, n) - p0)} />
        <Stat label="continuous compounding limit" value={money(p0 * Math.exp((rate / 100) * years))} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Balance over time', x: [0, years], y: [p0 * 0.9, bal(years, 365) * 1.05], xLabel: 'years', yLabel: 'balance', curves: [{ f: (y: number) => bal(y, 1), color: '#8a8478', label: 'yearly', dashed: true }, { f: (y: number) => bal(y, n), color, label: 'chosen' }] }} />
    </Card>
  )
}

// Solve the monthly rate i of an instalment loan: P = M * (1 - (1+i)^-n) / i.
function monthlyRate(P: number, M: number, n: number) {
  let lo = 1e-9
  let hi = 1
  for (let k = 0; k < 80; k++) {
    const mid = (lo + hi) / 2
    const pv = (M * (1 - (1 + mid) ** -n)) / mid
    if (pv > P) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

function FlatRate({ color }: { color: string }) {
  const [P, setP] = useState(30000)
  const [flat, setFlat] = useState(2.5)
  const [years, setYears] = useState(5)
  const n = years * 12
  const M = (P * (1 + (flat / 100) * years)) / n
  const i = monthlyRate(P, M, n)
  const eir = i * 12
  const reducing = (P * eir) / 12 / (1 - (1 + eir / 12) ** -n)
  return (
    <Card title="Flat rate versus effective interest rate" color={color} note="Some loans, such as car and personal instalment loans, are quoted at a flat rate: interest is charged on the original amount for the whole term, even though you repay the principal gradually. Because you owe less each month, the true cost is higher than the flat rate suggests. The effective interest rate (EIR) is the rate on the reducing balance that gives the same instalments, and a useful rule of thumb is that it is a little under twice the flat rate for longer loans.">
      <div className="flex flex-wrap gap-3">
        <Slider label="loan amount" value={P} min={5000} max={150000} step={1000} onChange={setP} show={money(P)} />
        <Slider label="flat rate (% a year)" value={flat} min={0.5} max={8} step={0.05} onChange={setFlat} show={`${flat.toFixed(2)}%`} />
        <Slider label="term (years)" value={years} min={1} max={10} step={1} onChange={setYears} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="monthly instalment" value={money(M)} />
        <Stat label="total interest" value={money(M * n - P)} />
        <Stat label="effective interest rate" value={`${(eir * 100).toFixed(2)}%`} tone={color} />
        <Stat label="EIR ÷ flat rate" value={(eir / (flat / 100)).toFixed(2)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Effective interest rate against flat rate (this term)', x: [0.5, 8], y: [0, 16], xLabel: 'flat rate (%)', yLabel: 'EIR (%)', curves: [{ f: (x: number) => { const m = (P * (1 + (x / 100) * years)) / n; return monthlyRate(P, m, n) * 1200 }, color, label: 'EIR' }, { f: (x: number) => x, color: '#8a8478', label: 'flat = EIR', dashed: true }] }} />
      <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>Check: repaying at an effective {(eir * 100).toFixed(2)}% on the reducing balance gives instalments of {money(reducing)}, the same as the flat-rate figure.</p>
    </Card>
  )
}

function Amortisation({ color }: { color: string }) {
  const [P, setP] = useState(800000)
  const [rate, setRate] = useState(3.5)
  const [years, setYears] = useState(25)
  const [income, setIncome] = useState(9000)
  const [debts, setDebts] = useState(500)
  const n = years * 12
  const i = rate / 1200
  const M = i === 0 ? P / n : (P * i) / (1 - (1 + i) ** -n)
  const sched = useMemo(() => {
    const out: [number, number][] = []
    const interest: [number, number][] = []
    let bal = P
    for (let m = 1; m <= n; m++) {
      const it = bal * i
      bal -= M - it
      if (m % 6 === 0) {
        out.push([m / 12, Math.max(bal, 0)])
        interest.push([m / 12, it])
      }
    }
    return { out, interest }
  }, [P, i, M, n])
  const tdsr = ((M + debts) / income) * 100
  return (
    <Card title="Loan amortisation and the debt-servicing check" color={color} note="Each instalment pays that month’s interest first, and the rest reduces the principal. Early on most of the payment is interest; late in the loan most is principal. In Singapore, banks must also check the total debt servicing ratio (TDSR): all monthly debt repayments, including the new loan, may not exceed 55% of gross monthly income, a rule set by MAS to stop households over-borrowing. Housing loans from banks for HDB flats and executive condominiums have a separate 30% mortgage servicing ratio.">
      <div className="flex flex-wrap gap-3">
        <Slider label="loan amount" value={P} min={100000} max={2000000} step={10000} onChange={setP} show={money(P)} />
        <Slider label="interest rate (% a year)" value={rate} min={0.5} max={8} step={0.05} onChange={setRate} show={`${rate.toFixed(2)}%`} />
        <Slider label="term (years)" value={years} min={5} max={35} step={1} onChange={setYears} />
        <Slider label="gross monthly income" value={income} min={2000} max={40000} step={500} onChange={setIncome} show={money(income)} />
        <Slider label="other monthly debt repayments" value={debts} min={0} max={5000} step={50} onChange={setDebts} show={money(debts)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="monthly instalment" value={money(M)} tone={color} />
        <Stat label="total interest over the loan" value={money(M * n - P)} />
        <Stat label="first month: interest share" value={`${Math.round(((P * i) / M) * 100)}%`} />
        <Stat label="TDSR (limit 55%)" value={`${tdsr.toFixed(1)}% ${tdsr <= 55 ? '✓' : '✗ exceeds'}`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Outstanding balance and monthly interest', x: [0, years], y: [0, P], xLabel: 'years', yLabel: 'amount', data: [{ pts: sched.out, color, label: 'balance remaining' }, { pts: sched.interest.map(([x, y]) => [x, y * 12] as [number, number]), color: '#d9534f', label: 'interest per year at that point', dashed: true }] }} />
    </Card>
  )
}

function Multiplier({ color }: { color: string }) {
  const [dep, setDep] = useState(1000)
  const [rr, setRr] = useState(10)
  const [leak, setLeak] = useState(0)
  const r = rr / 100
  const keep = r + leak / 100
  const rounds = 12
  const rows: [number, number][] = []
  let cum = 0
  let x = dep
  for (let k = 0; k <= rounds; k++) {
    cum += x
    rows.push([k, cum])
    x *= 1 - keep
  }
  const max = dep / keep
  return (
    <Card title="The textbook money multiplier" color={color} note="In the simple story, a bank keeps a fraction of each deposit in reserve and lends the rest; the loan is spent and ends up as a deposit at another bank, which lends most of it, and so on. The deposits sum to a geometric series with total D / r. In reality banks create deposits when they lend and then find the reserves (the Bank of England’s 2014 explanation), so the multiplier is a limiting description, not a recipe; Singapore does not use a textbook reserve requirement either, but MAS requires banks to hold a minimum cash balance of about 3% of their liabilities. Leakages (cash people hold, funds that are not re-lent) reduce the total.">
      <div className="flex flex-wrap gap-3">
        <Slider label="initial deposit" value={dep} min={100} max={10000} step={100} onChange={setDep} show={money(dep)} />
        <Slider label="reserve ratio (%)" value={rr} min={1} max={40} step={1} onChange={setRr} />
        <Slider label="extra leakage: cash held outside the banks (%)" value={leak} min={0} max={30} step={1} onChange={setLeak} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="multiplier 1 / (r + leakage)" value={(1 / keep).toFixed(1)} tone={color} />
        <Stat label="maximum total deposits" value={money(max)} />
        <Stat label="new money created" value={money(max - dep)} />
        <Stat label={`after ${rounds} rounds`} value={money(cum)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Total deposits as lending rounds repeat', x: [0, rounds], y: [0, max * 1.05], xLabel: 'round of lending', yLabel: 'total deposits', data: [{ pts: rows, color, label: 'cumulative deposits', dots: true }], hlines: [{ y: max, label: 'limit D / r' }] }} />
    </Card>
  )
}

function Leverage({ color }: { color: string }) {
  const [e, setE] = useState(8)
  const [roa, setRoa] = useState(1)
  const [loss, setLoss] = useState(3)
  const lev = 100 / e
  const roe = roa * lev
  const left = e - loss
  return (
    <Card title="Bank leverage: return on equity and loss absorption" color={color} note="A bank is financed mostly by deposits and other debt, with a thin layer of shareholders’ equity. That leverage multiplies returns: return on equity = return on assets × (assets ÷ equity). It also multiplies losses: a loss larger than the equity ratio makes the bank insolvent. Capital rules exist to keep that cushion thick enough that depositors, and the public, are not the ones who absorb losses.">
      <div className="flex flex-wrap gap-3">
        <Slider label="equity as % of assets" value={e} min={2} max={20} step={0.5} onChange={setE} show={`${e}%`} />
        <Slider label="return on assets (%)" value={roa} min={0.2} max={2.5} step={0.1} onChange={setRoa} show={`${roa.toFixed(1)}%`} />
        <Slider label="loss on assets (%)" value={loss} min={0} max={15} step={0.5} onChange={setLoss} show={`${loss}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="leverage (assets ÷ equity)" value={`${lev.toFixed(1)}×`} />
        <Stat label="return on equity" value={`${roe.toFixed(1)}%`} tone={color} />
        <Stat label="equity left after the loss" value={`${left.toFixed(1)}% of assets`} />
        <Stat label="status" value={left > 0 ? `solvent (${((left / e) * 100).toFixed(0)}% of equity kept)` : 'insolvent: depositors lose'} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Return on equity against the equity ratio', x: [2, 20], y: [0, 40], xLabel: 'equity ratio (% of assets)', yLabel: 'return on equity (%)', curves: [{ f: (x: number) => (roa * 100) / x, color, label: 'ROE = ROA ÷ equity ratio' }], vlines: [{ x: e, label: 'chosen' }] }} />
    </Card>
  )
}

function BankRun({ color }: { color: string }) {
  const [liq, setLiq] = useState(0.15)
  const [disc, setDisc] = useState(0.25)
  const [cap, setCap] = useState(0.08)
  const [w, setW] = useState(0.3)
  const assets = 1 + cap
  const illiquid = assets - liq
  const outcome = (wd: number) => {
    const short = Math.max(0, wd - liq)
    const need = short / (1 - disc)
    if (need > illiquid) return { ok: false, cover: 0 }
    const remAssets = illiquid - need + Math.max(0, liq - wd)
    return { ok: true, cover: remAssets / (1 - wd) }
  }
  const o = outcome(w)
  const crit = (() => {
    for (let x = 0; x <= 1; x += 0.005) if (!outcome(x).ok || outcome(x).cover < 1) return x
    return 1
  })()
  return (
    <Card title="A bank run: liquidity against solvency" color={color} note="A bank on paper may be solvent (assets worth more than deposits) and still fail, because deposits can be withdrawn at once while loans cannot be called in. If depositors rush, the bank must sell illiquid assets quickly at a discount, which erodes the value left for those still waiting, and that in turn gives them reason to run too (Diamond and Dybvig, 1983). Holding liquid assets, having capital, and deposit insurance each reduce the point at which a run becomes self-fulfilling.">
      <div className="flex flex-wrap gap-3">
        <Slider label="liquid assets (% of deposits)" value={liq} min={0} max={0.5} step={0.01} onChange={setLiq} show={`${Math.round(liq * 100)}%`} />
        <Slider label="fire-sale discount on other assets" value={disc} min={0} max={0.6} step={0.01} onChange={setDisc} show={`${Math.round(disc * 100)}%`} />
        <Slider label="capital (% of deposits)" value={cap} min={0} max={0.2} step={0.01} onChange={setCap} show={`${Math.round(cap * 100)}%`} />
        <Slider label="share of deposits withdrawn" value={w} min={0} max={1} step={0.01} onChange={setW} show={`${Math.round(w * 100)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="can pay the withdrawals?" value={o.ok ? 'yes' : 'no: out of assets'} />
        <Stat label="assets per $1 owed to remaining depositors" value={o.ok ? o.cover.toFixed(2) : '–'} tone={color} />
        <Stat label="remaining depositors fully covered?" value={o.ok && o.cover >= 1 ? 'yes' : 'no'} />
        <Stat label="run size at which cover falls below $1" value={`${Math.round(crit * 100)}% of deposits`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Assets per dollar owed to remaining depositors, by size of the run', x: [0, 0.99], y: [0, 1.4], xLabel: 'share of deposits withdrawn', yLabel: 'cover ratio', curves: [{ f: (x: number) => (outcome(x).ok ? outcome(x).cover : 0), color, label: 'cover ratio' }], hlines: [{ y: 1, label: 'fully covered' }], vlines: [{ x: w, label: 'chosen' }] }} />
    </Card>
  )
}

// Inverse of the standard normal CDF, by bisection.
function invPhi(p: number) {
  let lo = -8
  let hi = 8
  for (let k = 0; k < 60; k++) {
    const mid = (lo + hi) / 2
    if (Phi(mid) < p) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

function CreditRisk({ color }: { color: string }) {
  const [pd, setPd] = useState(2)
  const [lgd, setLgd] = useState(45)
  const [ead, setEad] = useState(1000000)
  const [rho, setRho] = useState(15)
  const p = pd / 100
  const r = rho / 100
  const el = p * (lgd / 100) * ead
  const q = Phi((invPhi(p) + Math.sqrt(r) * invPhi(0.999)) / Math.sqrt(1 - r))
  const k = (lgd / 100) * (q - p)
  return (
    <Card title="Credit risk: expected loss and unexpected loss" color={color} note="Expected loss is the average loss a lender should price in: EL = PD × LGD × EAD, the probability of default, the share lost if it happens, and the exposure at that time. It is covered by pricing and provisions. The risk that matters for capital is the bad year when many borrowers default together. Basel’s internal-ratings formula (the Vasicek model) estimates the loss in a 1-in-1,000 year given the correlation between borrowers; capital must cover the difference between that and the expected loss.">
      <div className="flex flex-wrap gap-3">
        <Slider label="probability of default, 1 year (%)" value={pd} min={0.05} max={15} step={0.05} onChange={setPd} show={`${pd.toFixed(2)}%`} />
        <Slider label="loss given default (%)" value={lgd} min={5} max={90} step={1} onChange={setLgd} show={`${lgd}%`} />
        <Slider label="exposure at default" value={ead} min={100000} max={10000000} step={100000} onChange={setEad} show={money(ead)} />
        <Slider label="asset correlation ρ (%)" value={rho} min={1} max={30} step={1} onChange={setRho} show={`${rho}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="expected loss" value={money(el)} />
        <Stat label="1-in-1,000-year default rate" value={`${(q * 100).toFixed(1)}%`} />
        <Stat label="capital requirement K (of exposure)" value={`${(k * 100).toFixed(2)}%`} tone={color} />
        <Stat label="capital in dollars" value={money(k * ead)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Capital requirement against default probability', x: [0.05, 15], y: [0, 0.4], xLabel: 'PD (%)', yLabel: 'K (fraction of exposure)', curves: [{ f: (x: number) => (lgd / 100) * (Phi((invPhi(x / 100) + Math.sqrt(r) * invPhi(0.999)) / Math.sqrt(1 - r)) - x / 100), color, label: 'K' }], points: [{ x: pd, y: k, label: 'now' }] }} />
    </Card>
  )
}

function CardInterest({ color }: { color: string }) {
  const [bal, setBal] = useState(5000)
  const [apr, setApr] = useState(26.9)
  const [mode, setMode] = useState<'min' | 'fixed'>('min')
  const [minPct, setMinPct] = useState(3)
  const [fixed, setFixed] = useState(300)
  const sim = useMemo(() => {
    let b = bal
    let paid = 0
    const pts: [number, number][] = [[0, b]]
    let m = 0
    while (b > 0.5 && m < 600) {
      b += (b * apr) / 1200
      const pay = Math.min(b, mode === 'min' ? Math.max(b * (minPct / 100), 50) : fixed)
      b -= pay
      paid += pay
      m++
      if (m % 3 === 0) pts.push([m / 12, b])
      if (mode === 'fixed' && fixed <= (bal * apr) / 1200) {
        return { months: Infinity, paid: Infinity, pts }
      }
    }
    pts.push([m / 12, 0])
    return { months: m, paid, pts }
  }, [bal, apr, mode, minPct, fixed])
  return (
    <Card title="Credit card revolving balance" color={color} note="Paying only the minimum keeps a card balance alive for years, because interest of roughly 2% a month is added before each payment and the minimum may barely exceed it. Most Singapore cards charge interest from the transaction date once the full statement balance is not paid by the due date, so there is no interest-free period on a revolved balance. The effective annual rate on a 26.9% nominal card with monthly compounding is about 30.5%.">
      <div className="flex flex-wrap gap-3">
        <Slider label="balance" value={bal} min={500} max={30000} step={500} onChange={setBal} show={money(bal)} />
        <Slider label="interest rate (% a year)" value={apr} min={0} max={36} step={0.1} onChange={setApr} show={`${apr.toFixed(1)}%`} />
        <Pills label="repayment" value={mode} onChange={setMode} options={[['min', 'Minimum payment'], ['fixed', 'Fixed amount']]} />
        {mode === 'min' ? <Slider label="minimum payment (% of balance, at least $50)" value={minPct} min={1} max={10} step={0.5} onChange={setMinPct} show={`${minPct}%`} /> : <Slider label="fixed monthly payment" value={fixed} min={50} max={2000} step={25} onChange={setFixed} show={money(fixed)} />}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="time to clear" value={Number.isFinite(sim.months) ? `${(sim.months / 12).toFixed(1)} years` : 'never: payment below interest'} tone={color} />
        <Stat label="total paid" value={Number.isFinite(sim.paid) ? money(sim.paid) : '–'} />
        <Stat label="interest paid" value={Number.isFinite(sim.paid) ? money(sim.paid - bal) : '–'} />
        <Stat label="effective annual rate" value={`${(((1 + apr / 1200) ** 12 - 1) * 100).toFixed(1)}%`} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Balance over time', x: [0, Math.max(1, Math.min(Number.isFinite(sim.months) ? sim.months / 12 : 10, 40))], y: [0, bal * 1.05], xLabel: 'years', yLabel: 'balance', data: [{ pts: sim.pts, color, label: 'balance' }] }} />
    </Card>
  )
}
