import { useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Btn, Card, Pills, Select, Slider, Stat, money } from './kit'

type AcctBlockType = Extract<Block, { t: 'acct-viz' }>

export default function AcctBlock({ block, color }: { block: AcctBlockType; color: string }) {
  switch (block.viz) {
    case 'ledger':
      return <Ledger color={color} />
    case 'depreciation':
      return <Depreciation color={color} />
    case 'inventory':
      return <Inventory color={color} />
    case 'cvp':
      return <Cvp color={color} />
    case 'income-tax':
      return <IncomeTax color={color} />
    case 'gst':
      return <Gst color={color} />
    case 'corp-tax':
      return <CorpTax color={color} />
  }
}

type Kind = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
const ACCOUNTS: Record<string, Kind> = {
  Cash: 'asset',
  'Accounts receivable': 'asset',
  Inventory: 'asset',
  Equipment: 'asset',
  'Accumulated depreciation': 'asset',
  'Accounts payable': 'liability',
  'Bank loan': 'liability',
  'Owner capital': 'equity',
  'Owner drawings': 'equity',
  Revenue: 'revenue',
  'Cost of goods sold': 'expense',
  'Rent expense': 'expense',
  'Depreciation expense': 'expense',
}
type Entry = { text: string; lines: [string, number, number][] }
const TX: Record<string, Entry> = {
  invest: { text: 'The owner invests $10,000 cash in the business', lines: [['Cash', 10000, 0], ['Owner capital', 0, 10000]] },
  equip: { text: 'Buy equipment for $4,000 cash', lines: [['Equipment', 4000, 0], ['Cash', 0, 4000]] },
  stock: { text: 'Buy inventory for $2,500 on credit', lines: [['Inventory', 2500, 0], ['Accounts payable', 0, 2500]] },
  sale: { text: 'Sell goods for $3,000 on credit (they cost $1,800)', lines: [['Accounts receivable', 3000, 0], ['Revenue', 0, 3000], ['Cost of goods sold', 1800, 0], ['Inventory', 0, 1800]] },
  collect: { text: 'A customer pays $3,000 owed', lines: [['Cash', 3000, 0], ['Accounts receivable', 0, 3000]] },
  paysup: { text: 'Pay the supplier $2,500', lines: [['Accounts payable', 2500, 0], ['Cash', 0, 2500]] },
  rent: { text: 'Pay $800 rent', lines: [['Rent expense', 800, 0], ['Cash', 0, 800]] },
  loan: { text: 'Borrow $5,000 from the bank', lines: [['Cash', 5000, 0], ['Bank loan', 0, 5000]] },
  dep: { text: 'Record $400 depreciation on the equipment', lines: [['Depreciation expense', 400, 0], ['Accumulated depreciation', 0, 400]] },
  draw: { text: 'The owner withdraws $500 for personal use', lines: [['Owner drawings', 500, 0], ['Cash', 0, 500]] },
}

function Ledger({ color }: { color: string }) {
  const [posted, setPosted] = useState<string[]>([])
  const [pick, setPick] = useState('invest')
  const bal = useMemo(() => {
    const b: Record<string, number> = Object.fromEntries(Object.keys(ACCOUNTS).map((a) => [a, 0]))
    for (const k of posted) for (const [a, d, c] of TX[k].lines) b[a] += d - c // debit-positive
    return b
  }, [posted])
  const sum = (kinds: Kind[], sign: number, skip: string[] = []) => Object.entries(ACCOUNTS).filter(([a, k]) => kinds.includes(k) && !skip.includes(a)).reduce((s, [a]) => s + sign * bal[a], 0)
  const assets = sum(['asset'], 1)
  const liab = sum(['liability'], -1)
  const equity = sum(['equity'], -1) + sum(['revenue'], -1) - sum(['expense'], 1)
  const profit = -sum(['revenue'], 1) - sum(['expense'], 1)
  const last = posted.length ? TX[posted[posted.length - 1]] : null
  return (
    <Card title="Double-entry bookkeeping: post a transaction" color={color} note="Every transaction is recorded twice, as equal debits and credits, so the accounting equation Assets = Liabilities + Equity always holds. Debits increase assets and expenses and decrease liabilities, equity and revenue; credits do the opposite. Pick a transaction and post it, and watch which accounts move and that the two sides of the equation stay equal.">
      <div className="flex flex-wrap items-end gap-3">
        <Select label="transaction" value={pick} onChange={setPick} options={Object.entries(TX).map(([k, v]) => [k, v.text] as [string, string])} />
        <Btn onClick={() => setPosted([...posted, pick])}>Post it</Btn>
        <Btn onClick={() => setPosted([])}>Reset</Btn>
      </div>
      {last && (
        <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <b>Last entry: {last.text}</b>
          <table className="mt-1 w-full">
            <tbody>
              {last.lines.map(([a, d, c], i) => (
                <tr key={i}>
                  <td className="py-0.5" style={{ paddingLeft: c ? 24 : 0 }}>{a}</td>
                  <td className="text-right tabular-nums">{d ? `Dr ${d.toLocaleString()}` : ''}</td>
                  <td className="text-right tabular-nums">{c ? `Cr ${c.toLocaleString()}` : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Assets" value={money(assets)} tone={color} />
        <Stat label="Liabilities" value={money(liab)} />
        <Stat label="Equity (capital − drawings + profit)" value={money(equity)} />
        <Stat label="Assets = Liabilities + Equity?" value={Math.abs(assets - liab - equity) < 0.01 ? `yes (${money(liab + equity)})` : 'NO'} />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <b>Trial balance</b>
          <table className="mt-1 w-full">
            <tbody>
              {Object.keys(ACCOUNTS).map((a) => (
                <tr key={a}>
                  <td className="py-0.5">{a}</td>
                  <td className="text-right tabular-nums">{bal[a] > 0 ? bal[a].toLocaleString() : ''}</td>
                  <td className="text-right tabular-nums">{bal[a] < 0 ? (-bal[a]).toLocaleString() : ''}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td>Totals (debits = credits)</td>
                <td className="text-right tabular-nums">{Object.values(bal).filter((v) => v > 0).reduce((s, v) => s + v, 0).toLocaleString()}</td>
                <td className="text-right tabular-nums">{(-Object.values(bal).filter((v) => v < 0).reduce((s, v) => s + v, 0)).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          <b>Income statement so far</b>
          <p className="mt-1">Revenue {money(-bal.Revenue)}</p>
          <p>Cost of goods sold {money(bal['Cost of goods sold'])}</p>
          <p>Rent and depreciation {money(bal['Rent expense'] + bal['Depreciation expense'])}</p>
          <p className="mt-1 font-bold">Profit {money(profit)}</p>
          <p className="mt-2" style={{ color: 'var(--ink-soft)' }}>Profit is not cash: a sale on credit raises profit and receivables but not cash, until the customer pays.</p>
        </div>
      </div>
    </Card>
  )
}

function Depreciation({ color }: { color: string }) {
  const [cost, setCost] = useState(50000)
  const [res, setRes] = useState(5000)
  const [life, setLife] = useState(5)
  const [method, setMethod] = useState<'sl' | 'db' | 'syd'>('sl')
  const sched = useMemo(() => {
    const out: { dep: number; nbv: number }[] = []
    let nbv = cost
    const syd = (life * (life + 1)) / 2
    for (let y = 1; y <= life; y++) {
      let d = 0
      if (method === 'sl') d = (cost - res) / life
      else if (method === 'db') d = Math.max(0, Math.min(nbv * (2 / life), nbv - res))
      else d = ((cost - res) * (life - y + 1)) / syd
      if (method === 'db' && y === life) d = nbv - res
      nbv -= d
      out.push({ dep: d, nbv })
    }
    return out
  }, [cost, res, life, method])
  return (
    <Card title="Depreciation methods" color={color} note="Depreciation spreads the cost of an asset over the years it is expected to be useful, instead of charging all of it when it is bought. Straight-line charges the same each year. Declining balance charges a fixed percentage of the remaining book value, so it front-loads the expense. Sum-of-the-years’-digits front-loads in a different way. The total over the life is the same: cost minus residual value; only the timing differs, and so does reported profit and tax in each year.">
      <div className="flex flex-wrap gap-3">
        <Slider label="cost" value={cost} min={5000} max={200000} step={5000} onChange={setCost} show={money(cost)} />
        <Slider label="residual value" value={res} min={0} max={20000} step={1000} onChange={setRes} show={money(res)} />
        <Slider label="useful life (years)" value={life} min={2} max={10} step={1} onChange={setLife} />
      </div>
      <Pills label="method" value={method} onChange={setMethod} options={[['sl', 'Straight-line'], ['db', 'Double-declining balance'], ['syd', 'Sum of years’ digits']]} />
      <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <table className="w-full tabular-nums">
          <thead><tr className="text-left"><th>Year</th><th className="text-right">Depreciation</th><th className="text-right">Net book value</th></tr></thead>
          <tbody>{sched.map((r, i) => <tr key={i}><td>{i + 1}</td><td className="text-right">{money(r.dep)}</td><td className="text-right">{money(r.nbv)}</td></tr>)}</tbody>
        </table>
      </div>
      <PlotChart block={{ t: 'plot', title: 'Net book value over the asset’s life', x: [0, life], y: [0, cost], xLabel: 'years', yLabel: 'net book value', data: [{ pts: [[0, cost] as [number, number], ...sched.map((r, i) => [i + 1, r.nbv] as [number, number])], color, label: 'book value', dots: true }] }} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="total depreciation" value={money(cost - res)} />
        <Stat label="year-1 charge" value={money(sched[0].dep)} tone={color} />
        <Stat label="year-1 rate on cost" value={`${((sched[0].dep / cost) * 100).toFixed(1)}%`} />
      </div>
    </Card>
  )
}

function Inventory({ color }: { color: string }) {
  const [p1, setP1] = useState(10)
  const [p2, setP2] = useState(12)
  const [p3, setP3] = useState(15)
  const [sold, setSold] = useState(150)
  const [price, setPrice] = useState(25)
  const layers: [number, number][] = [[100, p1], [100, p2], [100, p3]]
  const total = layers.reduce((s, [q, p]) => s + q * p, 0)
  const take = (order: [number, number][]) => {
    let need = sold
    let cost = 0
    for (const [q, p] of order) {
      const t = Math.min(q, need)
      cost += t * p
      need -= t
    }
    return cost
  }
  const fifo = take(layers)
  const lifo = take([...layers].reverse())
  const avg = (total / 300) * sold
  const rev = sold * price
  const rows: [string, number][] = [['FIFO (first in, first out)', fifo], ['Weighted average cost', avg], ['LIFO (not allowed under IFRS/SFRS)', lifo]]
  return (
    <Card title="Inventory costing: FIFO, weighted average and LIFO" color={color} note="When the unit cost of stock changes, which units count as sold? FIFO assumes the oldest were sold first, so in rising prices it gives lower cost of goods sold, higher profit and a closing inventory near current cost. Weighted average blends costs. LIFO assumes the newest were sold first, giving the opposite effect, and is permitted in the US but not under IFRS or Singapore’s SFRS(I). Total cost is identical in the end; the methods only split it between expense now and inventory still on the shelf.">
      <div className="flex flex-wrap gap-3">
        <Slider label="batch 1: 100 units at" value={p1} min={5} max={30} step={1} onChange={setP1} show={`$${p1}`} />
        <Slider label="batch 2: 100 units at" value={p2} min={5} max={30} step={1} onChange={setP2} show={`$${p2}`} />
        <Slider label="batch 3: 100 units at" value={p3} min={5} max={30} step={1} onChange={setP3} show={`$${p3}`} />
        <Slider label="units sold" value={sold} min={0} max={300} step={10} onChange={setSold} />
        <Slider label="selling price per unit" value={price} min={10} max={40} step={1} onChange={setPrice} show={`$${price}`} />
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <table className="w-full tabular-nums">
          <thead><tr className="text-left"><th>Method</th><th className="text-right">Cost of goods sold</th><th className="text-right">Gross profit</th><th className="text-right">Closing inventory</th></tr></thead>
          <tbody>{rows.map(([n, c]) => <tr key={n}><td>{n}</td><td className="text-right">{money(c)}</td><td className="text-right">{money(rev - c)}</td><td className="text-right">{money(total - c)}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="sales revenue" value={money(rev)} />
        <Stat label="total purchase cost (300 units)" value={money(total)} />
        <Stat label="FIFO − LIFO profit difference" value={money(lifo - fifo)} tone={color} />
      </div>
    </Card>
  )
}

function Cvp({ color }: { color: string }) {
  const [price, setPrice] = useState(25)
  const [vc, setVc] = useState(10)
  const [fc, setFc] = useState(30000)
  const [units, setUnits] = useState(3000)
  const cm = price - vc
  const be = cm > 0 ? fc / cm : Infinity
  const profit = cm * units - fc
  return (
    <Card title="Cost–volume–profit and the break-even point" color={color} note="Costs split into those that vary with each unit (materials, commission) and those that do not (rent, salaries). Each sale contributes its price minus variable cost toward covering fixed costs. The break-even volume is fixed costs divided by that contribution per unit; beyond it every extra sale adds the contribution to profit. The margin of safety says how far sales can fall before the business loses money.">
      <div className="flex flex-wrap gap-3">
        <Slider label="price per unit" value={price} min={5} max={60} step={1} onChange={setPrice} show={`$${price}`} />
        <Slider label="variable cost per unit" value={vc} min={1} max={50} step={1} onChange={setVc} show={`$${vc}`} />
        <Slider label="fixed costs per period" value={fc} min={5000} max={100000} step={1000} onChange={setFc} show={money(fc)} />
        <Slider label="units sold" value={units} min={0} max={10000} step={100} onChange={setUnits} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="contribution per unit" value={`$${cm}`} />
        <Stat label="break-even units" value={Number.isFinite(be) ? Math.ceil(be).toLocaleString() : 'never'} tone={color} />
        <Stat label="profit at this volume" value={money(profit)} />
        <Stat label="margin of safety" value={Number.isFinite(be) && units > 0 ? `${(((units - be) / units) * 100).toFixed(0)}%` : '–'} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Profit against units sold', x: [0, 10000], y: [-fc, Math.max(10000 * cm - fc, 1000)], xLabel: 'units', yLabel: 'profit', curves: [{ f: (x: number) => cm * x - fc, color, label: 'profit' }], hlines: [{ y: 0, label: 'break-even' }], points: [{ x: units, y: profit, label: 'now' }] }} />
    </Card>
  )
}

// Singapore resident individual income tax, YA 2024 onward: [width of band, rate]. Illustrative: check IRAS for the current schedule.
const BANDS: [number, number][] = [[20000, 0], [10000, 0.02], [10000, 0.035], [40000, 0.07], [40000, 0.115], [40000, 0.15], [40000, 0.18], [40000, 0.19], [40000, 0.195], [40000, 0.2], [180000, 0.22], [500000, 0.23], [Infinity, 0.24]]
const sgTax = (income: number) => {
  let left = Math.max(0, income)
  let tax = 0
  for (const [w, r] of BANDS) {
    const t = Math.min(left, w)
    tax += t * r
    left -= t
    if (left <= 0) break
  }
  return tax
}

function IncomeTax({ color }: { color: string }) {
  const [gross, setGross] = useState(90000)
  const [relief, setRelief] = useState(10000)
  const ci = Math.max(0, gross - relief)
  const tax = sgTax(ci)
  const rows = BANDS.map(([w, r], i) => {
    const lower = BANDS.slice(0, i).reduce((a, [bw]) => a + bw, 0)
    const slice = Math.max(0, Math.min(ci - lower, w))
    return { from: lower, w, r, slice, tax: slice * r }
  }).filter((r) => r.slice > 0)
  const marginal = BANDS.reduce<[number, number | null]>((acc, [w, r]) => (acc[1] === null && ci <= acc[0] + w ? [acc[0], r] : [acc[0] + w, acc[1]]), [0, null])[1] ?? 0.24
  return (
    <Card title="Singapore resident income tax: a progressive schedule" color={color} note="Tax is charged in bands. Each band’s rate applies only to the slice of chargeable income that falls inside it, so earning more never reduces your take-home pay: the marginal rate applies only to the extra dollars. Chargeable income is income after allowable deductions and personal reliefs (such as earned income relief, CPF relief and parent relief). The schedule shown is the resident rate table from Year of Assessment 2024 and is illustrative: check IRAS for the current year, rebates and reliefs.">
      <div className="flex flex-wrap gap-3">
        <Slider label="annual income" value={gross} min={20000} max={1200000} step={5000} onChange={setGross} show={money(gross)} />
        <Slider label="total deductions and reliefs" value={relief} min={0} max={100000} step={1000} onChange={setRelief} show={money(relief)} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="chargeable income" value={money(ci)} />
        <Stat label="tax payable" value={money(tax)} tone={color} />
        <Stat label="average rate (tax ÷ chargeable)" value={ci > 0 ? `${((tax / ci) * 100).toFixed(1)}%` : '0%'} />
        <Stat label="marginal rate on the next dollar" value={`${(marginal * 100).toFixed(1)}%`} />
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <table className="w-full tabular-nums">
          <thead><tr className="text-left"><th>Slice of chargeable income</th><th className="text-right">Rate</th><th className="text-right">Amount in slice</th><th className="text-right">Tax</th></tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}><td>{money(r.from)} – {Number.isFinite(r.w) ? money(r.from + r.w) : 'above'}</td><td className="text-right">{(r.r * 100).toFixed(1)}%</td><td className="text-right">{money(r.slice)}</td><td className="text-right">{money(r.tax)}</td></tr>)}</tbody>
        </table>
      </div>
      <PlotChart block={{ t: 'plot', title: 'Average and marginal rate against chargeable income', x: [0, 1000000], y: [0, 0.26], xLabel: 'chargeable income', yLabel: 'rate', curves: [{ f: (x: number) => (x > 0 ? sgTax(x) / x : 0), color, label: 'average rate' }, { f: (x: number) => { let lo = 0; for (const [w, r] of BANDS) { if (x <= lo + w) return r; lo += w } return 0.24 }, color: '#d9534f', label: 'marginal rate', dashed: true }], vlines: [{ x: ci, label: 'you' }] }} />
    </Card>
  )
}

function Gst({ color }: { color: string }) {
  const [rate, setRate] = useState(9)
  const [wholesale, setWholesale] = useState(60)
  const [retail, setRetail] = useState(100)
  const g = rate / 100
  const stage1 = { out: wholesale * g, inn: 0 }
  const stage2 = { out: retail * g, inn: wholesale * g }
  return (
    <Card title="GST through a supply chain" color={color} note="GST is a tax on value added at each stage, collected by registered businesses. A business charges GST on its sales (output tax) and deducts the GST it paid on its purchases (input tax), remitting only the difference. So the tax a business collects and pays is neutral to it; the final consumer, who cannot claim input tax, bears the full tax, and the total collected equals the rate times the final price. Singapore’s GST rate has been 9% since 1 January 2024.">
      <div className="flex flex-wrap gap-3">
        <Slider label="GST rate (%)" value={rate} min={0} max={15} step={1} onChange={setRate} />
        <Slider label="wholesaler’s price to the retailer, before GST" value={wholesale} min={10} max={200} step={5} onChange={setWholesale} show={`$${wholesale}`} />
        <Slider label="retailer’s price to the consumer, before GST" value={retail} min={20} max={400} step={5} onChange={setRetail} show={`$${retail}`} />
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border p-2 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <table className="w-full tabular-nums">
          <thead><tr className="text-left"><th>Stage</th><th className="text-right">Price before GST</th><th className="text-right">Output tax</th><th className="text-right">Input tax</th><th className="text-right">Paid to IRAS</th></tr></thead>
          <tbody>
            <tr><td>Wholesaler sells to retailer</td><td className="text-right">{money(wholesale)}</td><td className="text-right">{money(stage1.out)}</td><td className="text-right">$0</td><td className="text-right">{money(stage1.out)}</td></tr>
            <tr><td>Retailer sells to consumer</td><td className="text-right">{money(retail)}</td><td className="text-right">{money(stage2.out)}</td><td className="text-right">{money(stage2.inn)}</td><td className="text-right">{money(stage2.out - stage2.inn)}</td></tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="consumer pays" value={money(retail * (1 + g))} tone={color} />
        <Stat label="total GST collected" value={money(stage1.out + stage2.out - stage2.inn)} />
        <Stat label="rate × final price" value={money(retail * g)} />
        <Stat label="retailer’s own net cost of GST" value="$0" />
      </div>
    </Card>
  )
}

function CorpTax({ color }: { color: string }) {
  const [income, setIncome] = useState(150000)
  const [mode, setMode] = useState<'normal' | 'startup'>('normal')
  const exempt = (ci: number) => (mode === 'normal' ? 0.75 * Math.min(ci, 10000) + 0.5 * Math.max(0, Math.min(ci - 10000, 190000)) : 0.75 * Math.min(ci, 100000) + 0.5 * Math.max(0, Math.min(ci - 100000, 100000)))
  const tax = (ci: number) => Math.max(0, ci - exempt(ci)) * 0.17
  return (
    <Card title="Singapore corporate income tax with partial exemptions" color={color} note="Companies pay tax at a flat 17% of chargeable income, but partial tax exemptions mean the effective rate is much lower on the first S$200,000, and a new company’s first three years can qualify for a larger start-up exemption. This tool uses the normal partial exemption (75% of the first S$10,000 and 50% of the next S$190,000) and the start-up exemption (75% of the first S$100,000 and 50% of the next S$100,000). It ignores rebates, which vary by year, and eligibility conditions: check IRAS for the current rules.">
      <div className="flex flex-wrap gap-3">
        <Slider label="chargeable income" value={income} min={0} max={1000000} step={5000} onChange={setIncome} show={money(income)} />
        <Pills label="exemption" value={mode} onChange={setMode} options={[['normal', 'Partial exemption'], ['startup', 'Start-up exemption (first 3 years)']]} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="exempt amount" value={money(exempt(income))} />
        <Stat label="taxable after exemption" value={money(income - exempt(income))} />
        <Stat label="tax at 17%" value={money(tax(income))} tone={color} />
        <Stat label="effective rate" value={income > 0 ? `${((tax(income) / income) * 100).toFixed(1)}%` : '0%'} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Effective tax rate against chargeable income', x: [10000, 1000000], y: [0, 0.18], xLabel: 'chargeable income', yLabel: 'effective rate', curves: [{ f: (x: number) => tax(x) / x, color, label: 'effective rate' }], hlines: [{ y: 0.17, label: 'headline 17%' }], vlines: [{ x: income, label: 'now' }] }} />
    </Card>
  )
}
