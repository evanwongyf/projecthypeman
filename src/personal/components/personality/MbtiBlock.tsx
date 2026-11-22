import { useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { CODES, pair } from '../../lib/personality/compat'
import { FUNCTIONS, TYPE_BY_CODE } from '../../lib/personality/types'
import type { PairResult } from '../../lib/personality/compat'
import { Card, soft } from '../sports/shared'
import { NativeSelect } from '../../../components/NativeSelect'

type MbtiT = Extract<Block, { t: 'mbti' }>

const TEMP_COLOR: Record<string, string> = { NT: '#7b4fc9', NF: '#2f9e6e', SJ: '#3b6fd8', SP: '#e07b2a' }

// Ease 20..100 mapped onto a cool-to-warm ramp that reads in both themes.
function heat(v: number) {
  const t = Math.max(0, Math.min(1, (v - 30) / 70))
  if (t < 0.5) return `color-mix(in srgb, #e0a526 ${Math.round(t * 200)}%, #d9534f)`
  return `color-mix(in srgb, #2f9e6e ${Math.round((t - 0.5) * 200)}%, #e0a526)`
}

function Select({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm font-bold">
      {label}
      <NativeSelect value={value} onChange={(e) => onChange(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1 text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)', color: 'var(--ink)' }}>
        {CODES.map((c) => (
          <option key={c} value={c}>{c} · {TYPE_BY_CODE[c].name}</option>
        ))}
      </NativeSelect>
    </label>
  )
}

function Meter({ label, value, note }: { label: string; value: number; note: string }) {
  return (
    <div className="flex-1">
      <div className="flex items-baseline justify-between text-sm"><strong>{label}</strong><span className="font-bold tabular-nums">{value}/100</span></div>
      <div className="mt-1 h-2.5 overflow-hidden rounded-full" style={{ background: 'var(--paper-2)' }}>
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: label === 'Ease' ? heat(value) : '#7b4fc9' }} />
      </div>
      <p className="mt-1 text-xs" style={soft}>{note}</p>
    </div>
  )
}

function Stack({ code }: { code: string }) {
  const t = TYPE_BY_CODE[code]
  const roles = ['Dominant', 'Auxiliary', 'Tertiary', 'Inferior']
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-bold" style={{ color: TEMP_COLOR[t.temperament] }}>{t.code} · {t.name}</p>
      {t.stack.map((f, i) => (
        <div key={f} className="flex items-center gap-2 text-xs">
          <span className="w-16 shrink-0" style={soft}>{roles[i]}</span>
          <span className="rounded px-1.5 py-0.5 font-mono font-bold" style={{ background: 'var(--paper-2)', opacity: 1 - i * 0.18 }}>{f}</span>
          <span style={soft}>{FUNCTIONS[f].short}</span>
        </div>
      ))}
    </div>
  )
}

function PairDetail({ r }: { r: PairResult }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-lg font-bold">{r.a.code} + {r.b.code}</span>
        <span className="rounded-full border px-2 py-0.5 text-xs font-bold" style={{ borderColor: 'var(--line)' }}>{r.relation.name}</span>
      </div>
      <p className="text-sm leading-relaxed">{r.relation.body}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Meter label="Ease" value={r.ease} note="How naturally you understand each other" />
        <Meter label="Stretch" value={r.stretch} note="How much each covers the other’s blind spots" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Stack code={r.a.code} />
        <Stack code={r.b.code} />
      </div>
      <p className="text-sm leading-relaxed"><strong>Dominant functions: </strong>{r.dominant}</p>
      <p className="text-sm leading-relaxed"><strong>Function overlap: </strong>{r.functions}</p>
      {r.blind && <p className="text-sm leading-relaxed"><strong>Blind spots: </strong>{r.blind}</p>}
      <p className="text-sm leading-relaxed"><strong>Temperaments: </strong>{r.temperament}</p>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: '#2f9e6e' }}>Where you click</p>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed">{r.click.length ? r.click.map((c) => <li key={c}>{c}</li>) : <li>No shared letters, the common ground has to be built, which is not the same as impossible.</li>}</ul>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: '#d9534f' }}>Where you clash</p>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed">{r.clash.length ? r.clash.map((c) => <li key={c}>{c}</li>) : <li>Few built-in differences; your clashes come from shared blind spots and competing in the same arena.</li>}</ul>
        </div>
      </div>
      {r.tips.length > 0 && (
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={soft}>Making it work</p>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed">{r.tips.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      )}
    </div>
  )
}

const CAVEAT = 'Scores are a reading of type theory, not a prediction: no good study shows that type matching predicts relationship or team success. Use them to start conversations.'

export default function MbtiBlock({ block, color }: { block: MbtiT; color: string }) {
  const [a, setA] = useState(block.a ?? 'INTJ')
  const [b, setB] = useState(block.b ?? 'ENFP')
  const [sel, setSel] = useState<[string, string] | null>(null)

  if (block.viz === 'stack') {
    return (
      <Card title="Function stacks of all sixteen types" color={color} note="Dominant at the top, inferior at the bottom. Colours mark Keirsey’s temperaments: purple NT, green NF, blue SJ, orange SP.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CODES.map((c) => <Stack key={c} code={c} />)}
        </div>
      </Card>
    )
  }

  if (block.viz === 'matrix') {
    const r = sel ? pair(sel[0], sel[1]) : null
    return (
      <Card title="Ease of understanding, all 136 pairs" color={color} note={CAVEAT}>
        <p className="text-sm" style={soft}>Green is easier, red is harder. Tap a square to read that pair.</p>
        <div className="overflow-x-auto">
          <table className="border-separate text-[10px] sm:text-xs" style={{ borderSpacing: 2 }}>
            <thead>
              <tr>
                <th />
                {CODES.map((c) => (
                  <th key={c} className="px-0.5 font-mono font-bold" style={{ writingMode: 'vertical-rl', color: TEMP_COLOR[TYPE_BY_CODE[c].temperament] }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CODES.map((row) => (
                <tr key={row}>
                  <th className="pr-1 text-right font-mono font-bold" style={{ color: TEMP_COLOR[TYPE_BY_CODE[row].temperament] }}>{row}</th>
                  {CODES.map((col) => {
                    const p = pair(row, col)
                    const on = sel && ((sel[0] === row && sel[1] === col) || (sel[0] === col && sel[1] === row))
                    return (
                      <td key={col} className="p-0">
                        <button
                          type="button"
                          aria-label={`${row} and ${col}: ease ${p.ease}`}
                          title={`${row} + ${col}: ${p.relation.name}, ease ${p.ease}`}
                          onClick={() => setSel([row, col])}
                          className="block h-5 w-5 rounded-sm sm:h-6 sm:w-6"
                          style={{ background: heat(p.ease), outline: on ? '2px solid var(--ink)' : undefined, outlineOffset: 1 }}
                        />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {r ? <PairDetail r={r} /> : <p className="text-sm" style={soft}>No pair selected yet.</p>}
      </Card>
    )
  }

  if (block.viz === 'type-table' && block.a) {
    const me = block.a
    return (
      <Card title={`${me} with every type`} color={color} note={CAVEAT}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide" style={soft}>
                <th className="py-1 pr-2">With</th><th className="py-1 pr-2">Pattern</th><th className="py-1 pr-2">Ease</th><th className="py-1 pr-2">Stretch</th>
              </tr>
            </thead>
            <tbody>
              {CODES.map((c) => {
                const p = pair(me, c)
                return (
                  <tr key={c} className="cursor-pointer border-t" style={{ borderColor: 'var(--paper-2)' }} onClick={() => setSel([me, c])}>
                    <td className="py-1 pr-2 font-mono font-bold" style={{ color: TEMP_COLOR[TYPE_BY_CODE[c].temperament] }}>{c}</td>
                    <td className="py-1 pr-2">{p.relation.name}</td>
                    <td className="py-1 pr-2"><span className="inline-block rounded px-1.5 font-bold tabular-nums text-white" style={{ background: heat(p.ease) }}>{p.ease}</span></td>
                    <td className="py-1 pr-2 tabular-nums">{p.stretch}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm" style={soft}>Tap a row for the full reading.</p>
        {sel && <PairDetail r={pair(sel[0], sel[1])} />}
      </Card>
    )
  }

  return (
    <Card title="Pair explorer" color={color} note={CAVEAT}>
      <div className="flex flex-wrap gap-3">
        <Select value={a} onChange={setA} label="You" />
        <Select value={b} onChange={setB} label="Them" />
      </div>
      <PairDetail r={pair(a, b)} />
    </Card>
  )
}
