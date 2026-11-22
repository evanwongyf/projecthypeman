import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { adx, atr, bollinger, cci, donchian, ema, heikinAshi, ichimoku, keltner, macd, mfi, obv, parabolicSar, rsi, sma, stochastic, trueRange, williamsR } from '../../lib/finance/indicators'
import { anatomy, classify, forwardStats, nameInContext, scan } from '../../lib/finance/patterns'
import type { PatternName } from '../../lib/finance/patterns'
import { randomCandles } from '../../lib/finance/series'
import type { Candle } from '../../lib/finance/series'
import { altman, annuityFV, doublingTime, dcf, expectancy, futureValue, gordon, kelly, positionSize, ruleOf72 } from '../../lib/finance/valuation'
import { CandleChart } from './CandleChart'
import type { Overlay, Panel } from './CandleChart'
import { InlineTex } from './Tex'

const card = 'card-surface flex max-w-4xl flex-col gap-3 rounded-[var(--radius)] p-4'
const soft = { color: 'var(--ink-soft)' }
const f2 = (n: number) => (Number.isFinite(n) ? n.toFixed(2) : '–')
const money = (n: number) => (Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '–')
const pct = (n: number, d = 1) => (Number.isFinite(n) ? `${(n * 100).toFixed(d)}%` : '–')

function Num({ label, value, onChange, step = 'any', hint }: { label: string; value: number; onChange: (n: number) => void; step?: string; hint?: string }) {
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

// A worked formula: TeX with the numbers filled in.
function Work({ children }: { children: ReactNode }) {
  return <div className="overflow-x-auto rounded-[var(--radius)] px-2 py-1.5 sm:px-3 sm:py-2 text-sm" style={{ background: 'var(--paper-2)' }}>{children}</div>
}

function Pills<T extends string>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={label}>
      {options.map(([v, l]) => (
        <button
          key={v}
          type="button"
          role="radio"
          aria-checked={value === v}
          onClick={() => onChange(v)}
          className="rounded-full border px-3 py-1 text-xs font-bold pointer-coarse:min-h-10"
          style={{ borderColor: 'var(--line)', background: value === v ? 'var(--ink)' : 'var(--surface)', color: value === v ? 'var(--surface)' : 'var(--ink)' }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

// ── candle anatomy ─────────────────────────────────────────────────────────

const PRESETS: [string, Candle][] = [
  ['Hammer', { o: 104, h: 105, l: 92, c: 105, v: 0 }],
  ['Shooting star', { o: 101, h: 112, l: 100.5, c: 100, v: 0 }],
  ['Doji', { o: 100, h: 104, l: 96, c: 100.2, v: 0 }],
  ['Dragonfly', { o: 104.6, h: 105, l: 94, c: 104.8, v: 0 }],
  ['Gravestone', { o: 95.3, h: 106, l: 95, c: 95.2, v: 0 }],
  ['Marubozu', { o: 95, h: 105.1, l: 94.9, c: 105, v: 0 }],
  ['Spinning top', { o: 99, h: 105, l: 95, c: 101, v: 0 }],
]

export function AnatomyLab({ color }: { color: string }) {
  const [c, setC] = useState<Candle>(PRESETS[0][1])
  const [trend, setTrend] = useState<'down' | 'up' | 'none'>('down')
  const set = (k: 'o' | 'h' | 'l' | 'c', v: number) => {
    const n = { ...c, [k]: v }
    n.h = Math.max(n.h, n.o, n.c)
    n.l = Math.min(n.l, n.o, n.c)
    setC(n)
  }
  const a = anatomy(c)
  const shape = classify(c)
  const context: Candle[] = useMemo(() => {
    const base = c.l + (c.h - c.l) * 0.5
    const k = (c.h - c.l) / 8
    const prior = [0, 1, 2, 3, 4].map((i) => {
      const s = trend === 'down' ? 4 - i : trend === 'up' ? i - 4 : 0
      const mid = base + s * k * 2.4 + (trend === 'down' ? k * 2 : trend === 'up' ? -k * 2 : 0)
      const dir = trend === 'down' ? -1 : trend === 'up' ? 1 : i % 2 ? 1 : -1
      return { o: mid - (dir * k) / 1.2, c: mid + (dir * k) / 1.2, h: mid + k * 1.3, l: mid - k * 1.3, v: 0 }
    })
    return [...prior, c]
  }, [c, trend])
  return (
    <div className={card}>
      <p className="font-bold">Candle anatomy explorer</p>
      <div className="flex flex-wrap gap-1.5">
        {PRESETS.map(([name, p]) => (
          <button key={name} type="button" onClick={() => setC(p)} className="rounded-full border px-2.5 py-1 text-xs font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            {name}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
            <CandleChart candles={context} mark={[5]} height={260} label="The candle with the five before it" />
          </div>
          {(['o', 'h', 'l', 'c'] as const).map((k) => (
            <label key={k} className="grid grid-cols-[4.5rem_1fr_3.5rem] items-center gap-2 text-sm font-bold">
              {{ o: 'Open', h: 'High', l: 'Low', c: 'Close' }[k]}
              <input type="range" min={85} max={115} step={0.1} value={c[k]} onChange={(e) => set(k, Number(e.target.value))} style={{ accentColor: color }} />
              <span className="font-mono text-xs">{c[k].toFixed(1)}</span>
            </label>
          ))}
          <div className="flex items-center gap-2 text-sm font-bold">
            Trend before:
            <Pills value={trend} onChange={setTrend} label="Trend before" options={[['down', 'Down'], ['up', 'Up'], ['none', 'Sideways']]} />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Work>
            <InlineTex tex={String.raw`\displaystyle \text{range} = H - L = ${c.h.toFixed(1)} - ${c.l.toFixed(1)} = ${a.range.toFixed(2)}`} />
          </Work>
          <Work>
            <InlineTex tex={String.raw`\displaystyle \text{body} = |C - O| = |${c.c.toFixed(1)} - ${c.o.toFixed(1)}| = ${a.body.toFixed(2)} \;(${(a.bodyShare * 100).toFixed(0)}\%\text{ of range})`} />
          </Work>
          <Work>
            <InlineTex tex={String.raw`\displaystyle \text{upper shadow} = H - \max(O, C) = ${a.upper.toFixed(2)} \;(${(a.upperShare * 100).toFixed(0)}\%)`} />
          </Work>
          <Work>
            <InlineTex tex={String.raw`\displaystyle \text{lower shadow} = \min(O, C) - L = ${a.lower.toFixed(2)} \;(${(a.lowerShare * 100).toFixed(0)}\%)`} />
          </Work>
          <div className="rounded-[var(--radius)] p-3" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
            <p className="eyebrow font-bold">{a.bull ? 'bullish (close above open)' : a.body === 0 ? 'unchanged' : 'bearish (close below open)'}</p>
            <p className="text-lg font-bold">{nameInContext(shape, trend)}</p>
            <p className="mt-1 text-xs" style={soft}>
              Rules used: a doji has a body of at most 10% of the range; a hammer shape has a lower shadow at least twice the body and almost no upper shadow; a marubozu has shadows under 5% of the range.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── indicator lab ──────────────────────────────────────────────────────────

type Focus = 'ma' | 'bollinger' | 'rsi' | 'macd' | 'atr' | 'stochastic' | 'obv' | 'donchian' | 'keltner' | 'ichimoku' | 'adx' | 'williams' | 'cci' | 'psar' | 'mfi'
const SHOW = 120
const WARM = 160

export function IndicatorLab({ color, focus = 'ma' }: { color: string; focus?: Focus }) {
  const [seed, setSeed] = useState(11)
  const [ind, setInd] = useState<Focus>(focus)
  const [n1, setN1] = useState(focus === 'rsi' ? 14 : 20)
  const [n2, setN2] = useState(50)
  const all = useMemo(() => randomCandles(SHOW + WARM, seed), [seed])
  const close = all.map((c) => c.c)
  const view = all.slice(WARM)
  const cut = (xs: number[]) => xs.slice(WARM)
  const last = all.length - 1

  let overlays: Overlay[] = []
  let band: { upper: number[]; lower: number[]; color: string } | undefined
  let panel: Panel | undefined
  let mark: number[] = []
  let work: ReactNode = null

  if (ind === 'ma') {
    const s = sma(close, n1)
    const e = ema(close, n1)
    const slow = sma(close, n2)
    overlays = [
      { values: cut(s), color: '#3b6fd8', label: `SMA ${n1}` },
      { values: cut(e), color: '#e07b2a', label: `EMA ${n1}` },
      { values: cut(slow), color: '#7b4fc9', label: `SMA ${n2}`, dashed: true },
    ]
    mark = cut(s)
      .map((_, i) => i)
      .filter((i) => i > 0 && Math.sign(cut(s)[i] - cut(slow)[i]) !== Math.sign(cut(s)[i - 1] - cut(slow)[i - 1]))
    const a = 2 / (n1 + 1)
    work = (
      <>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \text{SMA}_{${n1}} = \frac{1}{${n1}}\sum_{i=0}^{${n1 - 1}} P_{t-i} = ${f2(s[last])}`} />
        </Work>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \alpha = \frac{2}{n+1} = \frac{2}{${n1 + 1}} = ${a.toFixed(4)},\quad \text{EMA}_t = \alpha P_t + (1-\alpha)\,\text{EMA}_{t-1} = ${a.toFixed(3)}(${f2(close[last])}) + ${(1 - a).toFixed(3)}(${f2(e[last - 1])}) = ${f2(e[last])}`} />
        </Work>
        <p className="text-xs" style={soft}>
          Highlighted candles: where SMA {n1} crosses SMA {n2} (a golden cross when the faster one crosses above, a death cross when it crosses below).
        </p>
      </>
    )
  } else if (ind === 'bollinger') {
    const b = bollinger(close, n1, 2)
    overlays = [{ values: cut(b.mid), color: '#3b6fd8', label: 'Middle band' }]
    band = { upper: cut(b.upper), lower: cut(b.lower), color: '#3b6fd8' }
    const pb = (close[last] - b.lower[last]) / (b.upper[last] - b.lower[last])
    work = (
      <>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \sigma = \sqrt{\tfrac{1}{${n1}}\textstyle\sum (P_i - \bar P)^2} = ${f2(b.sd[last])},\quad \text{upper} = ${f2(b.mid[last])} + 2(${f2(b.sd[last])}) = ${f2(b.upper[last])},\quad \text{lower} = ${f2(b.lower[last])}`} />
        </Work>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \%b = \frac{P - \text{lower}}{\text{upper} - \text{lower}} = ${pb.toFixed(2)},\qquad \text{bandwidth} = \frac{\text{upper}-\text{lower}}{\text{middle}} = ${((b.upper[last] - b.lower[last]) / b.mid[last]).toFixed(3)}`} />
        </Work>
      </>
    )
  } else if (ind === 'rsi') {
    const r = rsi(close, n1 > 50 ? 14 : n1)
    const n = n1 > 50 ? 14 : n1
    panel = { lines: [{ values: cut(r.rsi), color: '#7b4fc9', label: 'RSI' }], min: 0, max: 100, guides: [30, 70], label: `RSI (${n})` }
    const rs = r.avgGain[last] / r.avgLoss[last]
    work = (
      <>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \overline{G}_t = \frac{${n - 1}\,\overline{G}_{t-1} + G_t}{${n}} = ${r.avgGain[last].toFixed(3)},\qquad \overline{L}_t = \frac{${n - 1}\,\overline{L}_{t-1} + L_t}{${n}} = ${r.avgLoss[last].toFixed(3)}`} />
        </Work>
        <Work>
          <InlineTex tex={String.raw`\displaystyle RS = \frac{\overline{G}}{\overline{L}} = ${rs.toFixed(3)},\qquad RSI = 100 - \frac{100}{1 + RS} = ${f2(r.rsi[last])}`} />
        </Work>
      </>
    )
  } else if (ind === 'macd') {
    const m = macd(close)
    overlays = [
      { values: cut(m.fast), color: '#e07b2a', label: 'EMA 12' },
      { values: cut(m.slow), color: '#3b6fd8', label: 'EMA 26' },
    ]
    panel = {
      lines: [
        { values: cut(m.line), color: '#3b6fd8', label: 'MACD' },
        { values: cut(m.signal), color: '#e07b2a', label: 'Signal', dashed: true },
      ],
      bars: cut(m.hist),
      label: 'MACD (12, 26, 9)',
    }
    work = (
      <>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \text{MACD} = \text{EMA}_{12} - \text{EMA}_{26} = ${f2(m.fast[last])} - ${f2(m.slow[last])} = ${m.line[last].toFixed(3)}`} />
        </Work>
        <Work>
          <InlineTex tex={String.raw`\displaystyle \text{signal} = \text{EMA}_9(\text{MACD}) = ${m.signal[last].toFixed(3)},\qquad \text{histogram} = \text{MACD} - \text{signal} = ${m.hist[last].toFixed(3)}`} />
        </Work>
      </>
    )
  } else if (ind === 'atr') {
    const a = atr(all, 14)
    const tr = trueRange(all)
    panel = { lines: [{ values: cut(a), color: '#7b4fc9', label: 'ATR' }], label: 'ATR (14)' }
    const c = all[last]
    const p = all[last - 1]
    work = (
      <>
        <Work>
          <InlineTex tex={String.raw`\displaystyle TR = \max\big(H-L,\ |H-C_{t-1}|,\ |L-C_{t-1}|\big) = \max(${f2(c.h - c.l)},\ ${f2(Math.abs(c.h - p.c))},\ ${f2(Math.abs(c.l - p.c))}) = ${f2(tr[last])}`} />
        </Work>
        <Work>
          <InlineTex tex={String.raw`\displaystyle ATR_t = \frac{13\,ATR_{t-1} + TR_t}{14} = ${f2(a[last])}\quad(${((a[last] / close[last]) * 100).toFixed(1)}\%\text{ of price})`} />
        </Work>
      </>
    )
  } else if (ind === 'stochastic') {
    const s = stochastic(all, 14, 3)
    panel = {
      lines: [
        { values: cut(s.k), color: '#3b6fd8', label: '%K' },
        { values: cut(s.d), color: '#e07b2a', label: '%D', dashed: true },
      ],
      min: 0,
      max: 100,
      guides: [20, 80],
      label: 'Stochastic (14, 3)',
    }
    const w = all.slice(last - 13)
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle \%K = 100 \times \frac{C - L_{14}}{H_{14} - L_{14}} = 100 \times \frac{${f2(close[last])} - ${f2(Math.min(...w.map((x) => x.l)))}}{${f2(Math.max(...w.map((x) => x.h)))} - ${f2(Math.min(...w.map((x) => x.l)))}} = ${f2(s.k[last])}`} />
      </Work>
    )
  } else if (ind === 'donchian') {
    const d = donchian(all, 20)
    overlays = [
      { values: cut(d.upper), color: '#2f9e6e', label: '20-period high' },
      { values: cut(d.lower), color: '#d9534f', label: '20-period low' },
      { values: cut(d.mid), color: '#7b4fc9', label: 'Middle', dashed: true },
    ]
    mark = view.map((_, i) => i).filter((i) => i > 0 && view[i].c > cut(d.upper)[i - 1])
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{Upper} = \max(H_{t-19..t}) = ${f2(d.upper[last])},\quad \text{Lower} = \min(L_{t-19..t}) = ${f2(d.lower[last])}`} />
      </Work>
    )
  } else if (ind === 'keltner') {
    const k = keltner(all, 20, 2, 10)
    overlays = [{ values: cut(k.mid), color: '#3b6fd8', label: 'EMA 20' }]
    band = { upper: cut(k.upper), lower: cut(k.lower), color: '#e07b2a' }
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{Keltner} = \text{EMA}_{20} \pm 2\,ATR_{10} = ${f2(k.mid[last])} \pm ${f2((k.upper[last] - k.mid[last]))}`} />
      </Work>
    )
  } else if (ind === 'ichimoku') {
    const ic = ichimoku(all)
    overlays = [
      { values: cut(ic.tenkan), color: '#3b6fd8', label: 'Tenkan-sen (9)' },
      { values: cut(ic.kijun), color: '#d9534f', label: 'Kijun-sen (26)' },
      { values: cut(ic.spanA), color: '#2f9e6e', label: 'Senkou span A', dashed: true },
      { values: cut(ic.spanB), color: '#e07b2a', label: 'Senkou span B', dashed: true },
    ]
    band = { upper: cut(ic.spanA.map((a, i) => Math.max(a, ic.spanB[i]))), lower: cut(ic.spanA.map((a, i) => Math.min(a, ic.spanB[i]))), color: '#7b4fc9' }
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{Tenkan} = \tfrac{H_9 + L_9}{2} = ${f2(ic.tenkan[last])},\ \text{Kijun} = \tfrac{H_{26} + L_{26}}{2} = ${f2(ic.kijun[last])},\ \text{cloud now: } ${f2(Math.min(ic.spanA[last], ic.spanB[last]))}\text{–}${f2(Math.max(ic.spanA[last], ic.spanB[last]))}`} />
      </Work>
    )
  } else if (ind === 'adx') {
    const a = adx(all, 14)
    panel = {
      lines: [
        { values: cut(a.adx), color: '#1c1410', label: 'ADX' },
        { values: cut(a.plusDI), color: '#2f9e6e', label: '+DI' },
        { values: cut(a.minusDI), color: '#d9534f', label: '−DI', dashed: true },
      ],
      min: 0,
      max: 60,
      guides: [25],
      label: 'ADX / DMI (14)',
    }
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle DX = 100\,\frac{|{+DI} - {-DI}|}{{+DI} + {-DI}} = 100\,\frac{|${f2(a.plusDI[last])} - ${f2(a.minusDI[last])}|}{${f2(a.plusDI[last] + a.minusDI[last])}},\quad ADX = ${f2(a.adx[last])}\ ${a.adx[last] > 25 ? '(\\text{trending})' : '(\\text{weak trend})'}`} />
      </Work>
    )
  } else if (ind === 'williams') {
    const w = williamsR(all, 14)
    panel = { lines: [{ values: cut(w), color: '#7b4fc9', label: '%R' }], min: -100, max: 0, guides: [-20, -80], label: 'Williams %R (14)' }
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle \%R = -100 \times \frac{H_{14} - C}{H_{14} - L_{14}} = ${f2(w[last])}`} />
      </Work>
    )
  } else if (ind === 'cci') {
    const c = cci(all, 20)
    panel = { lines: [{ values: cut(c), color: '#7b4fc9', label: 'CCI' }], guides: [100, -100], label: 'CCI (20)' }
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle CCI = \frac{TP - \text{SMA}_{20}(TP)}{0.015 \times \text{MD}} = ${f2(c[last])},\quad TP = \tfrac{H + L + C}{3}`} />
      </Work>
    )
  } else if (ind === 'psar') {
    const ps = parabolicSar(all)
    overlays = [{ values: cut(ps), color: '#7b4fc9', label: 'Parabolic SAR', dashed: true }]
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle SAR_{t+1} = SAR_t + AF\,(EP - SAR_t),\quad AF: 0.02 \to 0.20\ \text{in steps of } 0.02;\quad SAR_t = ${f2(ps[last])}`} />
      </Work>
    )
  } else if (ind === 'mfi') {
    const m = mfi(all, 14)
    panel = { lines: [{ values: cut(m), color: '#7b4fc9', label: 'MFI' }], min: 0, max: 100, guides: [20, 80], label: 'Money flow index (14)' }
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle MFI = 100 - \frac{100}{1 + \dfrac{\sum \text{positive } TP \cdot V}{\sum \text{negative } TP \cdot V}} = ${f2(m[last])}`} />
      </Work>
    )
  } else {
    const o = obv(all)
    panel = { lines: [{ values: cut(o).map((v) => v / 1e6), color: '#7b4fc9', label: 'OBV' }], label: 'On-balance volume (millions)' }
    const up = close[last] > close[last - 1]
    work = (
      <Work>
        <InlineTex tex={String.raw`\displaystyle OBV_t = OBV_{t-1} ${up ? '+' : '-'} V_t = ${(o[last - 1] / 1e6).toFixed(2)}\text{M} ${up ? '+' : '-'} ${(all[last].v / 1e6).toFixed(2)}\text{M} = ${(o[last] / 1e6).toFixed(2)}\text{M}`} />
      </Work>
    )
  }

  return (
    <div className={card}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-bold">Indicator lab</p>
        <button type="button" onClick={() => setSeed((s) => s + 1)} className="btn btn-ghost px-3 py-1 text-xs">
          ↻ New random chart
        </button>
      </div>
      <Pills
        value={ind}
        onChange={setInd}
        label="Indicator"
        options={[
          ['ma', 'Moving averages'],
          ['bollinger', 'Bollinger Bands'],
          ['rsi', 'RSI'],
          ['macd', 'MACD'],
          ['stochastic', 'Stochastic'],
          ['atr', 'ATR'],
          ['obv', 'OBV'],
          ['donchian', 'Donchian'],
          ['keltner', 'Keltner'],
          ['ichimoku', 'Ichimoku'],
          ['adx', 'ADX'],
          ['psar', 'Parabolic SAR'],
          ['williams', 'Williams %R'],
          ['cci', 'CCI'],
          ['mfi', 'MFI'],
        ]}
      />
      {(ind === 'ma' || ind === 'bollinger' || ind === 'rsi') && (
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2 text-sm font-bold">
            Period
            <input type="range" min={3} max={50} value={n1} onChange={(e) => setN1(Number(e.target.value))} style={{ accentColor: color }} />
            <span className="font-mono">{n1}</span>
          </label>
          {ind === 'ma' && (
            <label className="flex items-center gap-2 text-sm font-bold">
              Slow
              <input type="range" min={20} max={150} value={n2} onChange={(e) => setN2(Number(e.target.value))} style={{ accentColor: color }} />
              <span className="font-mono">{n2}</span>
            </label>
          )}
        </div>
      )}
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <CandleChart candles={view} overlays={overlays} band={band} panel={panel} mark={mark} height={panel ? 420 : 320} label="Random price chart with an indicator" />
      </div>
      <div className="flex flex-wrap gap-3 text-xs">
        {[...overlays, ...(panel?.lines ?? [])].map((o) => (
          <span key={o.label} className="flex items-center gap-1.5 font-bold">
            <span className="inline-block h-1 w-5 rounded" style={{ background: o.color }} /> {o.label}
          </span>
        ))}
      </div>
      <p className="text-sm font-bold">The working, for the latest candle</p>
      {work}
      <p className="text-xs" style={soft}>
        Prices here are a random walk: no indicator can predict them, which is a useful thing to keep in mind when an indicator seems to "work" on a chart.
      </p>
    </div>
  )
}

// ── pattern lab ────────────────────────────────────────────────────────────

const SHORT: Partial<Record<PatternName, string>> = {
  Hammer: 'H',
  'Hanging man': 'HM',
  'Shooting star': 'SS',
  'Inverted hammer': 'IH',
  'Bullish engulfing': 'BE+',
  'Bearish engulfing': 'BE−',
  'Bullish harami': 'Hr+',
  'Bearish harami': 'Hr−',
  'Piercing line': 'PL',
  'Dark cloud cover': 'DC',
  'Morning star': 'MS',
  'Evening star': 'ES',
  'Three white soldiers': '3WS',
  'Three black crows': '3BC',
  Doji: 'D',
}

export function PatternLab({ color }: { color: string }) {
  const [seed, setSeed] = useState(5)
  const chart = useMemo(() => randomCandles(90, seed + 100), [seed])
  const hits = useMemo(() => scan(chart).filter((h) => h.name !== 'Doji'), [chart])
  const stats = useMemo(() => forwardStats(randomCandles(6000, seed), 5), [seed])
  const labels: Record<number, string> = {}
  for (const h of hits) labels[h.i] = labels[h.i] ? `${labels[h.i]},${SHORT[h.name]}` : (SHORT[h.name] ?? '')
  return (
    <div className={card}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-bold">Pattern lab</p>
        <button type="button" onClick={() => setSeed((s) => s + 1)} className="btn btn-ghost px-3 py-1 text-xs">
          ↻ New random data
        </button>
      </div>
      <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <CandleChart candles={chart} mark={hits.map((h) => h.i)} markLabels={labels} height={320} label="Random chart with candlestick patterns marked" />
      </div>
      <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs" style={soft}>
        {Object.entries(SHORT)
          .filter(([k]) => k !== 'Doji')
          .map(([k, v]) => (
            <span key={k}>
              <b style={{ color: 'var(--ink)' }}>{v}</b> {k.toLowerCase()}
            </span>
          ))}
      </p>
      <p className="text-sm font-bold">What happened next, on 6,000 random candles</p>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr style={{ background: `color-mix(in srgb, ${color} 30%, var(--surface))` }}>
              {['Pattern', 'Signal', 'Times found', 'Up 5 bars later', 'Average move'].map((h) => (
                <th key={h} className="border-b-2 px-2 py-1.5 sm:px-3 sm:py-2 font-bold" style={{ borderColor: 'var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: 'var(--paper-2)' }}>
              <td className="px-3 py-1.5 font-bold">Every candle (baseline)</td>
              <td className="px-3 py-1.5">–</td>
              <td className="px-3 py-1.5">{stats.base.n}</td>
              <td className="px-3 py-1.5">{pct(stats.base.up)}</td>
              <td className="px-3 py-1.5">{pct(stats.base.avg, 2)}</td>
            </tr>
            {stats.rows.map((r) => (
              <tr key={r.name}>
                <td className="px-3 py-1.5 font-bold">{r.name}</td>
                <td className="px-3 py-1.5">{r.name === 'Doji' ? 'Indecision' : r.bullish ? 'Bullish' : 'Bearish'}</td>
                <td className="px-3 py-1.5">{r.n}</td>
                <td className="px-3 py-1.5" style={{ opacity: r.n < 30 ? 0.55 : 1 }}>
                  {pct(r.up)}
                </td>
                <td className="px-3 py-1.5" style={{ opacity: r.n < 30 ? 0.55 : 1 }}>
                  {pct(r.avg, 2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs leading-relaxed" style={soft}>
        This data is random, so any pattern’s "success rate" is just noise around the baseline. Faded rows come from fewer than 30 cases, where noise is large. Press <b>new random data</b> and watch the numbers jump around: the same test on real markets needs thousands of cases, costs and careful statistics before it means anything.
      </p>
    </div>
  )
}

// ── Heikin-Ashi ────────────────────────────────────────────────────────────

export function HeikinAshiLab() {
  const [seed, setSeed] = useState(21)
  const cs = useMemo(() => randomCandles(70, seed), [seed])
  const ha = useMemo(() => heikinAshi(cs), [cs])
  const i = cs.length - 1
  return (
    <div className={card}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-bold">Regular candles and Heikin-Ashi</p>
        <button type="button" onClick={() => setSeed((s) => s + 1)} className="btn btn-ghost px-3 py-1 text-xs">
          ↻ New random chart
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {[
          ['Regular', cs],
          ['Heikin-Ashi', ha],
        ].map(([t, data]) => (
          <div key={t as string}>
            <p className="eyebrow mb-1 font-bold">{t as string}</p>
            <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
              <CandleChart candles={data as Candle[]} height={240} label={`${t} candles`} />
            </div>
          </div>
        ))}
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle C^{HA} = \tfrac{O+H+L+C}{4} = ${f2(ha[i].c)},\quad O^{HA} = \tfrac{O^{HA}_{t-1} + C^{HA}_{t-1}}{2} = ${f2(ha[i].o)},\quad H^{HA} = \max(H, O^{HA}, C^{HA}) = ${f2(ha[i].h)}`} />
      </Work>
    </div>
  )
}

// ── calculators ────────────────────────────────────────────────────────────

export function CompoundCalc({ color }: { color: string }) {
  const [pv, setPv] = useState(10000)
  const [monthly, setMonthly] = useState(200)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(30)
  const r = rate / 100
  const lump = futureValue(pv, r, years, 12)
  const contrib = annuityFV(monthly, r / 12, years * 12)
  const total = lump + contrib
  const paid = pv + monthly * 12 * years
  const points = Array.from({ length: years + 1 }, (_, y) => futureValue(pv, r, y, 12) + annuityFV(monthly, r / 12, y * 12))
  const paidAt = (y: number) => pv + monthly * 12 * y
  const max = Math.max(...points, 1)
  return (
    <div className={card}>
      <p className="font-bold">Compound growth calculator</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <Num label="Starting amount" value={pv} onChange={setPv} />
        <Num label="Added each month" value={monthly} onChange={setMonthly} />
        <Num label="Yearly return (%)" value={rate} onChange={setRate} />
        <Num label="Years" value={years} onChange={(n) => setYears(Math.max(1, Math.min(60, Math.round(n))))} />
      </div>
      <svg viewBox="0 0 600 180" className="w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Growth over time">
        {points.map((v, y) => {
          const w = 560 / points.length
          const h = (v / max) * 160
          const hp = (Math.min(paidAt(y), v) / max) * 160
          return (
            <g key={y}>
              <rect x={20 + y * w} y={170 - h} width={w * 0.8} height={h} fill={color} />
              <rect x={20 + y * w} y={170 - hp} width={w * 0.8} height={hp} fill="var(--ink)" opacity={0.35} />
            </g>
          )
        })}
      </svg>
      <p className="text-xs" style={soft}>
        Dark: money you put in. Coloured: growth on top.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {[
          ['Final value', money(total)],
          ['You put in', money(paid)],
          ['Growth', money(total - paid)],
        ].map(([k, v]) => (
          <div key={k} className="rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
            <p className="text-xs" style={soft}>
              {k}
            </p>
            <p className="text-xl font-bold">{v}</p>
          </div>
        ))}
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle FV = PV\left(1+\tfrac{r}{12}\right)^{12n} + PMT\cdot\frac{\left(1+\tfrac{r}{12}\right)^{12n}-1}{r/12} = ${money(lump)} + ${money(contrib)}`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{Doubling time: } \frac{\ln 2}{\ln(1+r)} = ${doublingTime(r).toFixed(2)}\text{ years};\quad \text{rule of 72: } \frac{72}{${rate}} = ${ruleOf72(r).toFixed(2)}\text{ years}`} />
      </Work>
    </div>
  )
}

export function DcfCalc({ color }: { color: string }) {
  const [x, setX] = useState({ fcf: 100, growth: 8, years: 5, discount: 9, terminalGrowth: 2.5, netDebt: 200, shares: 100, price: 16 })
  const set = (k: keyof typeof x) => (n: number) => setX((s) => ({ ...s, [k]: n }))
  const run = (d: number, g: number) => dcf({ fcf: x.fcf, growth: x.growth / 100, years: Math.max(1, Math.round(x.years)), discount: d / 100, terminalGrowth: g / 100, netDebt: x.netDebt, shares: x.shares })
  const r = run(x.discount, x.terminalGrowth)
  const ds = [x.discount - 1, x.discount, x.discount + 1]
  const gs = [x.terminalGrowth - 0.5, x.terminalGrowth, x.terminalGrowth + 0.5]
  return (
    <div className={card}>
      <p className="font-bold">Discounted cash flow (DCF) calculator</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <Num label="Free cash flow now" value={x.fcf} onChange={set('fcf')} hint="Millions" />
        <Num label="Growth for now (%/yr)" value={x.growth} onChange={set('growth')} />
        <Num label="Years of that growth" value={x.years} onChange={set('years')} />
        <Num label="Discount rate (%)" value={x.discount} onChange={set('discount')} hint="Your required return, or WACC" />
        <Num label="Growth after (%/yr)" value={x.terminalGrowth} onChange={set('terminalGrowth')} hint="Forever; keep it below economic growth" />
        <Num label="Net debt" value={x.netDebt} onChange={set('netDebt')} hint="Debt minus cash, millions" />
        <Num label="Shares (millions)" value={x.shares} onChange={set('shares')} />
        <Num label="Share price now" value={x.price} onChange={set('price')} />
      </div>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr style={{ background: `color-mix(in srgb, ${color} 30%, var(--surface))` }}>
              {['Year', 'Free cash flow', 'Discount factor', 'Present value'].map((h) => (
                <th key={h} className="border-b-2 px-2 py-1.5 sm:px-3 sm:py-2" style={{ borderColor: 'var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {r.rows.map((row) => (
              <tr key={row.year}>
                <td className="px-3 py-1.5 font-bold">{row.year}</td>
                <td className="px-3 py-1.5">{money(row.fcf)}</td>
                <td className="px-3 py-1.5">{row.factor.toFixed(4)}</td>
                <td className="px-3 py-1.5">{money(row.pv)}</td>
              </tr>
            ))}
            <tr style={{ background: 'var(--paper-2)' }}>
              <td className="px-3 py-1.5 font-bold">Terminal</td>
              <td className="px-3 py-1.5">{money(r.terminal)}</td>
              <td className="px-3 py-1.5">{r.rows.at(-1)?.factor.toFixed(4)}</td>
              <td className="px-3 py-1.5">{money(r.pvTerminal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle EV = \sum_{t=1}^{${Math.round(x.years)}} \frac{FCF_t}{(1+r)^t} + \frac{TV}{(1+r)^{${Math.round(x.years)}}} = ${money(r.sumPv)} + ${money(r.pvTerminal)} = ${money(r.ev)}`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{Value per share} = \frac{EV - \text{net debt}}{\text{shares}} = \frac{${money(r.ev)} - ${money(x.netDebt)}}{${money(x.shares)}} = ${f2(r.perShare)}`} />
      </Work>
      <div className="grid gap-2 sm:grid-cols-3">
        <div className="rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
          <p className="text-xs" style={soft}>
            Value per share
          </p>
          <p className="text-xl font-bold">{f2(r.perShare)}</p>
        </div>
        <div className="rounded-[var(--radius)] p-2.5" style={{ background: 'var(--paper-2)' }}>
          <p className="text-xs" style={soft}>
            Margin of safety at {x.price}
          </p>
          <p className="text-xl font-bold">{pct(1 - x.price / r.perShare, 0)}</p>
        </div>
        <div className="rounded-[var(--radius)] p-2.5" style={{ background: 'var(--paper-2)' }}>
          <p className="text-xs" style={soft}>
            Share of value from the terminal value
          </p>
          <p className="text-xl font-bold">{pct(r.terminalShare, 0)}</p>
        </div>
      </div>
      <p className="text-sm font-bold">Sensitivity: value per share</p>
      <div className="overflow-x-auto rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full border-collapse text-center text-xs sm:text-sm">
          <thead>
            <tr style={{ background: 'var(--paper-2)' }}>
              <th className="px-3 py-1.5 text-left">Discount ↓ / terminal growth →</th>
              {gs.map((g) => (
                <th key={g} className="px-3 py-1.5">
                  {g.toFixed(1)}%
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ds.map((d) => (
              <tr key={d}>
                <th className="px-3 py-1.5 text-left">{d.toFixed(1)}%</th>
                {gs.map((g) => (
                  <td key={g} className="px-3 py-1.5" style={{ fontWeight: d === x.discount && g === x.terminalGrowth ? 700 : 400 }}>
                    {f2(run(d, g).perShare)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs" style={soft}>
        Small changes in the discount rate and terminal growth move the answer a lot. That is why careful analysts give a range, not a single number.
      </p>
    </div>
  )
}

export function DdmCalc({ color }: { color: string }) {
  const [d0, setD0] = useState(2)
  const [g, setG] = useState(4)
  const [r, setR] = useState(8)
  const d1 = d0 * (1 + g / 100)
  const v = gordon(d1, r / 100, g / 100)
  return (
    <div className={card}>
      <p className="font-bold">Dividend discount model (Gordon growth)</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Num label="Dividend just paid (D₀)" value={d0} onChange={setD0} />
        <Num label="Dividend growth g (%)" value={g} onChange={setG} />
        <Num label="Required return r (%)" value={r} onChange={setR} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle P_0 = \frac{D_1}{r - g} = \frac{D_0(1+g)}{r-g} = \frac{${d0}\times ${(1 + g / 100).toFixed(3)}}{${(r / 100).toFixed(3)} - ${(g / 100).toFixed(3)}} = ${Number.isFinite(v) ? f2(v) : '\\text{undefined (needs } r > g)'}`} />
      </Work>
      <div className="rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
        <p className="text-xs" style={soft}>
          Value per share
        </p>
        <p className="text-xl font-bold">{Number.isFinite(v) ? f2(v) : 'The model needs r > g'}</p>
      </div>
    </div>
  )
}

export function AltmanCalc() {
  const [x, setX] = useState({ workingCapital: 120, retained: 300, ebit: 90, marketEquity: 800, sales: 1100, assets: 1000, liabilities: 450 })
  const set = (k: keyof typeof x) => (n: number) => setX((s) => ({ ...s, [k]: n }))
  const a = altman(x)
  const zoneColor = a.zone === 'Safe' ? 'var(--mint)' : a.zone === 'Grey' ? 'var(--mustard)' : 'var(--orange)'
  return (
    <div className={card}>
      <p className="font-bold">Altman Z-score</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <Num label="Working capital" value={x.workingCapital} onChange={set('workingCapital')} />
        <Num label="Retained earnings" value={x.retained} onChange={set('retained')} />
        <Num label="EBIT" value={x.ebit} onChange={set('ebit')} />
        <Num label="Market value of equity" value={x.marketEquity} onChange={set('marketEquity')} />
        <Num label="Sales" value={x.sales} onChange={set('sales')} />
        <Num label="Total assets" value={x.assets} onChange={set('assets')} />
        <Num label="Total liabilities" value={x.liabilities} onChange={set('liabilities')} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle Z = 1.2(${a.A.toFixed(3)}) + 1.4(${a.B.toFixed(3)}) + 3.3(${a.C.toFixed(3)}) + 0.6(${a.D.toFixed(3)}) + 1.0(${a.E.toFixed(3)}) = ${a.z.toFixed(2)}`} />
      </Work>
      <div className="rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${zoneColor} 35%, var(--surface))` }}>
        <p className="text-xl font-bold">
          Z = {a.z.toFixed(2)}: {a.zone} zone
        </p>
        <p className="text-xs" style={soft}>
          Above 2.99 safe; 1.81 to 2.99 grey; below 1.81 distress (original 1968 model for listed manufacturers).
        </p>
      </div>
    </div>
  )
}

export function PositionCalc({ color }: { color: string }) {
  const [acct, setAcct] = useState(20000)
  const [risk, setRisk] = useState(1)
  const [entry, setEntry] = useState(50)
  const [stop, setStop] = useState(47)
  const [target, setTarget] = useState(57)
  const [win, setWin] = useState(45)
  const p = positionSize(acct, risk / 100, entry, stop)
  const rr = Math.abs(target - entry) / p.perShare
  const e = expectancy(win / 100, rr, 1)
  const k = kelly(win / 100, rr)
  return (
    <div className={card}>
      <p className="font-bold">Position size, reward-to-risk and expectancy</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Num label="Account size" value={acct} onChange={setAcct} />
        <Num label="Risk per trade (%)" value={risk} onChange={setRisk} hint="Often 0.5–2%" />
        <Num label="Win rate (%)" value={win} onChange={setWin} hint="From your own records" />
        <Num label="Entry price" value={entry} onChange={setEntry} />
        <Num label="Stop-loss price" value={stop} onChange={setStop} />
        <Num label="Target price" value={target} onChange={setTarget} />
      </div>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \text{shares} = \left\lfloor \frac{\text{account} \times \text{risk}}{|\text{entry} - \text{stop}|} \right\rfloor = \left\lfloor \frac{${money(acct)} \times ${(risk / 100).toFixed(3)}}{${f2(p.perShare)}} \right\rfloor = ${p.shares}`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle \tfrac{R}{R} = \frac{|\text{target}-\text{entry}|}{|\text{entry}-\text{stop}|} = ${rr.toFixed(2)},\quad E = pW - (1-p)L = ${(win / 100).toFixed(2)}(${rr.toFixed(2)}) - ${(1 - win / 100).toFixed(2)}(1) = ${e.toFixed(2)}R`} />
      </Work>
      <Work>
        <InlineTex tex={String.raw`\displaystyle f^* = p - \frac{1-p}{b} = ${(win / 100).toFixed(2)} - \frac{${(1 - win / 100).toFixed(2)}}{${rr.toFixed(2)}} = ${pct(k)}\ \text{(Kelly fraction of capital at risk)}`} />
      </Work>
      <div className="grid gap-2 sm:grid-cols-3">
        {[
          ['Shares to buy', String(p.shares)],
          ['Position value', `${money(p.value)} (${pct(p.valueShare, 0)} of account)`],
          ['Expectancy per trade', `${e.toFixed(2)} R ≈ ${money(e * p.risk)}`],
        ].map(([kk, v]) => (
          <div key={kk} className="rounded-[var(--radius)] p-2.5" style={{ background: `color-mix(in srgb, ${color} 18%, var(--surface))` }}>
            <p className="text-xs" style={soft}>
              {kk}
            </p>
            <p className="text-lg font-bold">{v}</p>
          </div>
        ))}
      </div>
      <p className="text-xs" style={soft}>
        {e > 0 ? 'Positive expectancy: over many trades this system would make money, if the win rate is real.' : 'Negative expectancy: over many trades this loses money, however good individual trades feel.'} Most professionals bet well under full Kelly.
      </p>
    </div>
  )
}

