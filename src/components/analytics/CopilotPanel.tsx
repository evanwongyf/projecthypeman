import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { buildSystemPrompt, contextNote, runCopilot, type CopilotEnv } from '../../lib/analytics/copilot'
import type { CopilotMessage, ModelOption, TableProfile, ToolCall } from '../../lib/analytics/types'
import { IconCheck, IconClose, IconPlus, IconSend, IconSpark, IconStop } from '../Icons'
import { Select } from '../Select'

const MODEL_KEY = 'hypeman.analytics.model'
const SAMPLE_KEY = 'hypeman.analytics.shareSamples'

const STARTERS = [
  'Build me an overview dashboard of this data',
  'What are the main trends over time?',
  'Which categories drive the most value?',
  'Check the data quality: nulls, duplicates, outliers',
]

type Status = { provider: 'openai' | 'anthropic'; keyHint: string | null }

function readPref(key: string, fallback: string): string {
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function writePref(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* blocked storage: the choice lasts for this visit */
  }
}

export function CopilotPanel({ env, profiles }: { env: CopilotEnv; profiles: TableProfile[] }) {
  const [models, setModels] = useState<ModelOption[]>([])
  const [keys, setKeys] = useState<Status[]>([])
  const [model, setModel] = useState(() => readPref(MODEL_KEY, 'gpt-6.2-astra'))
  const [shareSamples, setShareSamples] = useState(() => readPref(SAMPLE_KEY, '1') === '1')
  const [messages, setMessages] = useState<CopilotMessage[]>([])
  const [streaming, setStreaming] = useState('')
  const [running, setRunning] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [spend, setSpend] = useState(0)
  const [input, setInput] = useState('')
  const system = useRef<string | null>(null)
  const knownTables = useRef(new Set<string>())
  const abort = useRef<AbortController | null>(null)
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/ai/usage')
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { models: ModelOption[]; configured: Status[] } | null) => {
        if (!d) return
        setModels(d.models)
        setKeys(d.configured)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight })
  }, [messages, streaming])

  const available = (m: ModelOption) => keys.some((k) => k.provider === m.provider && k.keyHint)
  const current = models.find((m) => m.id === model)

  function reset() {
    abort.current?.abort()
    setMessages([])
    setStreaming('')
    setError(null)
    system.current = null
    knownTables.current = new Set()
  }

  async function send(text: string) {
    const question = text.trim()
    if (!question || running) return
    if (!profiles.length) {
      setError('Upload a data file first, then ask away.')
      return
    }
    setError(null)
    setInput('')

    // Freeze the system prompt at the start of each conversation.
    if (!system.current) {
      system.current = buildSystemPrompt(profiles, shareSamples)
      knownTables.current = new Set(profiles.map((p) => p.table))
    }
    const note = contextNote(env, knownTables.current)
    const start: CopilotMessage[] = [...messages, { role: 'user', text: `${note}\n\n${question}` }]
    setMessages(start)
    setRunning(true)
    const controller = new AbortController()
    abort.current = controller

    try {
      await runCopilot(
        env,
        model,
        system.current,
        start,
        {
          onMessages: setMessages,
          onStreaming: setStreaming,
          onTurn: (t) => setSpend((s) => s + (t.costUsd ?? 0)),
        },
        controller.signal
      )
    } catch (err) {
      if (!(err instanceof DOMException && err.name === 'AbortError')) setError(err instanceof Error ? err.message : String(err))
    } finally {
      setRunning(false)
      setStreaming('')
      abort.current = null
    }
  }

  // Pair each tool call with its result for display.
  const results = useMemo(() => {
    const map = new Map<string, { output: string; isError?: boolean }>()
    for (const m of messages) if (m.role === 'tool') for (const r of m.results) map.set(r.id, r)
    return map
  }, [messages])

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-wrap items-center gap-2 border-b px-4 py-3 hairline">
        <IconSpark className="h-4 w-4" />
        <span className="text-sm font-semibold">Copilot</span>
        <span className="label ml-auto" title="Estimated cost of this session's AI calls">
          ${spend.toFixed(spend < 1 ? 4 : 2)}
        </span>
        <button type="button" className="btn btn-ghost !px-2 !py-1" onClick={reset} title="New chat" disabled={!messages.length && !error}>
          <IconPlus className="h-3.5 w-3.5" /> New
        </button>
      </div>

      <div className="space-y-2 border-b px-4 py-3 hairline">
        <Select
          value={model}
          ariaLabel="Model"
          onChange={(v) => {
            if (v === model) return
            setModel(v)
            writePref(MODEL_KEY, v)
            // A conversation is tied to the provider that started it.
            if (messages.length) reset()
          }}
          options={(models.length ? models : [{ id: model, label: model, hint: '', provider: 'openai' as const }]).map((m) => ({
            value: m.id,
            label: `${m.label}${models.length && !available(m) ? ' (no key)' : ''}`,
          }))}
        />
        <label className="flex cursor-pointer items-center gap-2 text-[11px]" style={{ color: 'var(--ink-soft)' }}>
          <input
            type="checkbox"
            checked={shareSamples}
            onChange={(e) => {
              setShareSamples(e.target.checked)
              writePref(SAMPLE_KEY, e.target.checked ? '1' : '0')
            }}
          />
          Share 5 sample rows per table (personal data masked)
        </label>
        {current && !available(current) && models.length > 0 && (
          <p className="text-[11px]" style={{ color: 'var(--overdue)' }}>
            No {current.provider === 'openai' ? 'OPENAI_API_KEY' : 'ANTHROPIC_API_KEY'} on the server.
          </p>
        )}
      </div>

      <div ref={scroller} className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {!messages.length && !running && (
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
              Ask about your data in plain words. The copilot queries the tables with real SQL, explains what it finds and builds charts on the dashboard.
            </p>
            <div className="flex flex-col gap-1.5">
              {STARTERS.map((s) => (
                <button key={s} type="button" className="pick !py-2 text-left text-xs" onClick={() => void send(s)} disabled={!profiles.length}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <Fragment key={i}>
            {m.role === 'user' && <UserBubble text={m.text} />}
            {m.role === 'assistant' && (
              <div className="space-y-2">
                {m.toolCalls.map((c) => (
                  <ToolLine key={c.id} call={c} result={results.get(c.id)} />
                ))}
                {m.text && <Prose text={m.text} />}
              </div>
            )}
          </Fragment>
        ))}

        {running && (streaming ? <Prose text={streaming} /> : <p className="label animate-pulse">thinking…</p>)}

        {error && (
          <p className="panel px-3 py-2.5 font-mono text-xs leading-relaxed" style={{ borderColor: 'var(--overdue)', color: 'var(--overdue)' }}>
            {error}
          </p>
        )}
      </div>

      <form
        className="border-t p-3 hairline"
        onSubmit={(e) => {
          e.preventDefault()
          void send(input)
        }}
      >
        <div className="flex items-end gap-2">
          <textarea
            className="field min-h-11 flex-1 resize-none text-sm"
            rows={2}
            value={input}
            placeholder={profiles.length ? 'Ask a question or ask for a chart…' : 'Upload data to start'}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                void send(input)
              }
            }}
          />
          {running ? (
            <button type="button" className="btn" onClick={() => abort.current?.abort()} title="Stop">
              <IconStop className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={!input.trim() || !profiles.length} title="Send">
              <IconSend className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

function UserBubble({ text }: { text: string }) {
  // Hide the context note the copilot gets with each message.
  const shown = text.replace(/^\[Context:[\s\S]*?\]\n\n/, '')
  return (
    <div className="ml-6 px-3 py-2 text-sm" style={{ background: 'var(--accent-dim)', borderRadius: 'var(--radius-sm, var(--radius))' }}>
      {shown}
    </div>
  )
}

const TOOL_LABEL: Record<string, string> = {
  run_sql: 'Ran a query',
  describe_table: 'Read the table profile',
  recommend_charts: 'Asked the recommender',
  get_dashboard: 'Checked the dashboard',
  create_chart: 'Added a chart',
  update_chart: 'Updated a chart',
  remove_chart: 'Removed a chart',
  rename_dashboard: 'Renamed the dashboard',
}

function ToolLine({ call, result }: { call: ToolCall; result?: { output: string; isError?: boolean } }) {
  const [open, setOpen] = useState(false)
  const input = (call.input ?? {}) as Record<string, unknown>
  const detail = typeof input.purpose === 'string' ? input.purpose : typeof input.title === 'string' ? input.title : typeof input.table === 'string' ? input.table : ''
  const tone = !result ? 'var(--ink-faint)' : result.isError ? 'var(--overdue)' : 'var(--collected)'
  return (
    <div className="text-xs">
      <button type="button" className="flex w-full items-center gap-2 text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span style={{ color: tone }} className="shrink-0">
          {!result ? '…' : result.isError ? <IconClose className="h-3 w-3" /> : <IconCheck className="h-3 w-3" />}
        </span>
        <span className="font-medium">{TOOL_LABEL[call.name] ?? call.name}</span>
        {detail && (
          <span className="truncate" style={{ color: 'var(--ink-faint)' }}>
            {detail}
          </span>
        )}
      </button>
      {open && (
        <div className="mt-1.5 ml-5 space-y-1.5">
          {typeof input.sql === 'string' && (
            <pre className="overflow-x-auto px-2 py-1.5 font-mono text-[11px] whitespace-pre-wrap" style={{ background: 'var(--panel-2)', color: 'var(--ink-soft)' }}>
              {input.sql}
            </pre>
          )}
          {result && (
            <pre
              className="max-h-40 overflow-auto px-2 py-1.5 font-mono text-[11px] whitespace-pre-wrap"
              style={{ background: 'var(--panel-2)', color: result.isError ? 'var(--overdue)' : 'var(--ink-faint)' }}
            >
              {result.output.slice(0, 2000)}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}

/** Paragraphs, bullet lists and **bold**: all the formatting the copilot is asked to use. */
function Prose({ text }: { text: string }) {
  const blocks = text.trim().split(/\n{2,}/)
  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {blocks.map((b, i) => {
        const lines = b.split('\n')
        // Models sometimes answer with a markdown table despite being asked not to.
        if (lines.length >= 2 && lines.every((l) => /^\s*\|.*\|\s*$/.test(l)) && /^\s*\|[\s:|-]+\|\s*$/.test(lines[1])) {
          const cells = (l: string) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
          const [head, , ...body] = lines
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr>
                    {cells(head).map((c, j) => (
                      <th key={j} className="label border-b px-2 py-1.5 hairline">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, r) => (
                    <tr key={r}>
                      {cells(row).map((c, j) => (
                        <td key={j} className="border-b px-2 py-1" style={{ borderColor: 'var(--line-soft)' }}>{inline(c)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        if (lines.every((l) => /^\s*([-*•]|\d+\.)\s+/.test(l))) {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {lines.map((l, j) => (
                <li key={j}>{inline(l.replace(/^\s*([-*•]|\d+\.)\s+/, ''))}</li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="whitespace-pre-wrap">
            {inline(b.replace(/^#+\s*/gm, ''))}
          </p>
        )
      })}
    </div>
  )
}

function inline(s: string) {
  return s.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : part.startsWith('`') && part.endsWith('`') ? (
      <code key={i} className="font-mono text-[0.9em]" style={{ background: 'var(--panel-2)' }}>
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  )
}
