import { useEffect, useMemo, useState } from 'react'
import type { EChartsOption } from 'echarts'
import { formatNumber, palette } from '../../lib/analytics/chartOption'
import { EChart, useChartTheme } from '../analytics/EChart'

type ModelUsage = {
  requests: number
  inputTokens: number
  outputTokens: number
  cachedInputTokens: number
  cacheWriteTokens: number
  costUsd: number
  unpricedRequests: number
}

type KeyUsage = {
  provider: 'openai' | 'anthropic'
  keyHint: string
  firstUsedAt: string
  lastUsedAt: string
  models: Record<string, ModelUsage>
  days: Record<string, { requests: number; costUsd: number }>
}

type UsageResponse = {
  configured: { provider: 'openai' | 'anthropic'; env: string; keyId: string | null; keyHint: string | null }[]
  ledger: { keys: Record<string, KeyUsage> }
}

const PROVIDER = { openai: 'OpenAI', anthropic: 'Anthropic (Claude)' }

const usd = (n: number) => `$${n < 1 ? n.toFixed(4) : n.toFixed(2)}`
const int = (n: number) => n.toLocaleString('en-US')

function totals(k: KeyUsage | undefined) {
  const t = { requests: 0, input: 0, cached: 0, output: 0, cost: 0, unpriced: 0 }
  if (!k) return t
  for (const m of Object.values(k.models)) {
    t.requests += m.requests
    t.input += m.inputTokens + m.cacheWriteTokens
    t.cached += m.cachedInputTokens
    t.output += m.outputTokens
    t.cost += m.costUsd
    t.unpriced += m.unpricedRequests
  }
  return t
}

/** Settings → AI usage: what each API key has been used for, metered by Hypeman. */
export default function AiUsage() {
  const [data, setData] = useState<UsageResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = () =>
    fetch('/api/ai/usage')
      .then(async (r) => {
        if (!r.ok) throw new Error(((await r.json().catch(() => ({}))) as { error?: string }).error ?? `Request failed (${r.status})`)
        return r.json() as Promise<UsageResponse>
      })
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err.message : String(err)))

  useEffect(() => {
    void load()
  }, [])

  // Configured keys first (even unused), then retired keys that still have history.
  const rows = useMemo(() => {
    if (!data) return []
    const out: { id: string; provider: 'openai' | 'anthropic'; hint: string; env?: string; active: boolean; usage?: KeyUsage }[] = []
    for (const c of data.configured) {
      if (c.keyId && c.keyHint) out.push({ id: c.keyId, provider: c.provider, hint: c.keyHint, env: c.env, active: true, usage: data.ledger.keys[c.keyId] })
    }
    for (const [id, usage] of Object.entries(data.ledger.keys)) {
      if (!out.some((r) => r.id === id)) out.push({ id, provider: usage.provider, hint: usage.keyHint, active: false, usage })
    }
    return out
  }, [data])

  const missing = data?.configured.filter((c) => !c.keyId) ?? []
  const grand = rows.reduce(
    (s, r) => {
      const t = totals(r.usage)
      return { cost: s.cost + t.cost, requests: s.requests + t.requests, tokens: s.tokens + t.input + t.cached + t.output }
    },
    { cost: 0, requests: 0, tokens: 0 }
  )

  if (error) return <p className="p-5 font-mono text-xs sm:p-8" style={{ color: 'var(--overdue)' }}>{error}</p>
  if (!data) return <p className="label p-5 sm:p-8">loading usage…</p>

  return (
    <div className="space-y-6 p-5 sm:p-8">
      <div className="grid max-w-3xl grid-cols-3 gap-3">
        <Stat label="spent, all keys" value={usd(grand.cost)} />
        <Stat label="requests" value={int(grand.requests)} />
        <Stat label="tokens" value={formatNumber(grand.tokens)} />
      </div>

      {missing.map((m) => (
        <p key={m.env} className="panel max-w-3xl px-4 py-3 text-xs" style={{ color: 'var(--ink-soft)' }}>
          <span className="font-mono">{m.env}</span> is not set on the server, so {PROVIDER[m.provider]} models are unavailable in the copilot.
        </p>
      ))}

      {rows.map((r) => (
        <KeyCard key={r.id} {...r} />
      ))}

      <p className="max-w-3xl text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
        Hypeman meters every AI call it makes, from the token counts each provider reports, and prices them at list rates (OpenAI GPT-6.2 and Anthropic, November 2026).
        It covers usage through this app only. Provider APIs don't reveal a remaining credit balance to ordinary keys, so check the OpenAI and Anthropic consoles for
        your balance and for usage from other apps. Keys are identified by a fingerprint and never stored.
      </p>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="panel px-4 py-3">
      <p className="label">{label}</p>
      <p className="mono mt-1 text-xl font-semibold">{value}</p>
    </div>
  )
}

function KeyCard({ provider, hint, env, active, usage }: { provider: 'openai' | 'anthropic'; hint: string; env?: string; active: boolean; usage?: KeyUsage }) {
  const theme = useChartTheme()
  const t = totals(usage)

  const option = useMemo<EChartsOption>(() => {
    const days: string[] = []
    const today = new Date()
    for (let i = 29; i >= 0; i--) days.push(new Date(today.getTime() - i * 86_400_000).toISOString().slice(0, 10))
    const values = days.map((d) => usage?.days[d]?.costUsd ?? 0)
    return {
      animationDuration: 300,
      color: palette(theme),
      textStyle: { fontFamily: theme.font, color: theme.inkSoft },
      grid: { left: 4, right: 8, top: 8, bottom: 4, containLabel: true },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: theme.panel,
        borderColor: theme.line,
        textStyle: { color: theme.ink, fontSize: 12, fontFamily: theme.mono },
        valueFormatter: (v) => usd(Number(v)),
      },
      xAxis: {
        type: 'category',
        data: days.map((d) => d.slice(5)),
        axisLine: { lineStyle: { color: theme.line } },
        axisTick: { show: false },
        axisLabel: { color: theme.inkFaint, fontSize: 10, hideOverlap: true },
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: theme.inkFaint, fontSize: 10, formatter: (v: number) => `$${formatNumber(v)}` },
        splitLine: { lineStyle: { color: theme.line, opacity: 0.5 } },
      },
      series: [{ type: 'bar', name: 'Spend', data: values, barMaxWidth: 14, itemStyle: { borderRadius: [3, 3, 0, 0] } }],
    }
  }, [usage, theme])

  const models = Object.entries(usage?.models ?? {}).sort((a, b) => b[1].costUsd - a[1].costUsd)

  return (
    <section className="panel max-w-3xl">
      <header className="flex flex-wrap items-start justify-between gap-3 border-b px-5 py-4 hairline">
        <div>
          <p className="text-sm font-semibold">{PROVIDER[provider]}</p>
          <p className="mt-1 font-mono text-xs" style={{ color: 'var(--ink-soft)' }}>
            {hint}
            {env ? ` · ${env}` : ''}
          </p>
        </div>
        <span className={`chip ${active ? 'chip-collected' : 'chip-neutral'}`}>
          <span className="chip-dot" />
          {active ? 'active' : 'retired key'}
        </span>
      </header>

      <div className="grid grid-cols-2 gap-4 px-5 py-4 sm:grid-cols-4">
        <Mini label="spent" value={usd(t.cost)} note={t.unpriced ? `+${t.unpriced} unpriced calls` : undefined} />
        <Mini label="requests" value={int(t.requests)} />
        <Mini label="input tokens" value={formatNumber(t.input)} note={t.cached ? `+${formatNumber(t.cached)} cached` : undefined} />
        <Mini label="output tokens" value={formatNumber(t.output)} />
      </div>

      {usage ? (
        <>
          <div className="px-5">
            <p className="label mb-1">daily spend, last 30 days</p>
            <EChart option={option} className="h-36 w-full" ariaLabel={`Daily spend for ${PROVIDER[provider]} key ${hint}`} />
          </div>
          <div className="overflow-x-auto px-5 pt-2 pb-4">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr>
                  {['model', 'requests', 'input', 'cached', 'output', 'cost'].map((h, i) => (
                    <th key={h} className={`label border-b py-2 hairline ${i ? 'text-right' : ''}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {models.map(([model, m]) => (
                  <tr key={model}>
                    <td className="border-b py-2 font-mono" style={{ borderColor: 'var(--line-soft)' }}>{model}</td>
                    <td className="mono border-b py-2 text-right" style={{ borderColor: 'var(--line-soft)' }}>{int(m.requests)}</td>
                    <td className="mono border-b py-2 text-right" style={{ borderColor: 'var(--line-soft)' }}>{int(m.inputTokens + m.cacheWriteTokens)}</td>
                    <td className="mono border-b py-2 text-right" style={{ borderColor: 'var(--line-soft)' }}>{int(m.cachedInputTokens)}</td>
                    <td className="mono border-b py-2 text-right" style={{ borderColor: 'var(--line-soft)' }}>{int(m.outputTokens)}</td>
                    <td className="mono border-b py-2 text-right" style={{ borderColor: 'var(--line-soft)' }}>
                      {m.unpricedRequests === m.requests ? 'no price' : usd(m.costUsd)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="label mt-3">
              first used {usage.firstUsedAt.slice(0, 10)} · last used {usage.lastUsedAt.slice(0, 16).replace('T', ' ')} UTC
            </p>
          </div>
        </>
      ) : (
        <p className="px-5 pb-4 text-xs" style={{ color: 'var(--ink-faint)' }}>
          No calls yet. Usage appears here after the copilot uses this key.
        </p>
      )}
    </section>
  )
}

function Mini({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div>
      <p className="label">{label}</p>
      <p className="mono mt-1 text-base font-semibold">{value}</p>
      {note && <p className="text-[11px]" style={{ color: 'var(--ink-faint)' }}>{note}</p>}
    </div>
  )
}
