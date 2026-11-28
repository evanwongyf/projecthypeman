import { buildOption, checkFields, readTheme } from './chartOption'
import { checkReadOnly, query } from './duck'
import { profileForPrompt } from './profile'
import { recommendCharts, type Goal } from './recommend'
import { CHART_TYPES, type ChartSize, type ChartSpec, type ChartType, type CopilotMessage, type Dashboard, type TableProfile, type ToolCall } from './types'

/**
 * The browser half of the copilot. The server makes one model call per
 * request; this file runs the loop around it: send the conversation, stream
 * the reply, execute any tool calls against DuckDB and the dashboard, send
 * the results back, and repeat until the model answers in plain text.
 */

export type CopilotEnv = {
  profiles: () => TableProfile[]
  dashboard: () => Dashboard
  addChart: (spec: Omit<ChartSpec, 'id' | 'updatedAt'>) => ChartSpec
  updateChart: (id: string, patch: Partial<ChartSpec>) => ChartSpec | null
  removeChart: (id: string) => boolean
  renameDashboard: (title: string) => void
}

export type TurnInfo = { model: string; costUsd: number | null; stopReason: string }

const MAX_STEPS = 16
const MAX_TOOL_OUTPUT = 12_000

// ------------------------------------------------------------ system prompt

/**
 * Frozen for the whole conversation. Anything that changes later (a new
 * table, the dashboard's state) is told to the model in the user's message or
 * through tools, never by editing this, so the prompt cache holds and Claude's
 * replayed thinking stays valid.
 */
export function buildSystemPrompt(profiles: TableProfile[], shareSamples: boolean): string {
  const tables = profiles.length
    ? profiles.map((p) => profileForPrompt(p, shareSamples)).join('\n\n')
    : 'No tables are loaded yet. Ask the user to upload a CSV, Parquet, JSON or Excel file in the Data panel.'

  return `You are the analytics copilot in Hypeman, a dashboard builder. You work like a senior data analyst: you understand the business question behind a request, check the data before you speak, and build clear, honest dashboards.

## How you work
- The data is in DuckDB, running in the user's browser. You see table profiles below, not the raw rows. To learn anything else, call run_sql or describe_table.
- Never state a number you have not got from a query in this conversation. If you estimate or infer, say so.
- Before building charts for a vague request, take a quick look (one or two queries) to understand the shape of the data, then build.
- Use DuckDB SQL. Quote identifiers that contain spaces, capitals or symbols with double quotes. Use date_trunc for time grains, and CAST(... AS VARCHAR) for category labels. Aggregate in SQL; charts should get tens or hundreds of rows, not thousands.
- When a query fails, read the error, fix the SQL and retry. Don't give up after one error.
- recommend_charts gives valid starting points with ready SQL. Adapt them to the question.

## Chart rules
- Pick the form from the job: change over time is a line (or area for a cumulative total); comparing categories is a bar, sorted largest first; part of a whole is a pie only with 6 parts or fewer; the spread of one measure is a histogram; two measures together is a scatter; two categories against a measure is a heatmap; one headline figure is a kpi; exact values for reading are a table.
- One y-axis only. Measures on very different scales go in separate charts.
- Keep categories to about 12; fold the rest into 'Other'. Keep coloured series to 8 or fewer (3 for scatter).
- Titles state what the chart shows in plain words ("Monthly revenue, 2023 to 2024"), not "Chart 1".
- Sizes: kpi and pie are usually s, most charts m, long time series l. A good overview dashboard is a row of 2 to 4 KPIs followed by 3 to 6 charts.
- Check get_dashboard before editing an existing dashboard, and update charts rather than duplicating them.

## Answering
- Be concise and concrete. Lead with the answer, then the evidence: key figures with their units, and what they mean for the user.
- After building or changing charts, say in a sentence or two what you added and the main thing each one shows.
- Point out data quality problems you notice (nulls, duplicates, odd outliers, mixed units) when they affect the answer.
- Some columns are marked as personal data; their values are hidden from you. Don't try to reveal them.
- Write in plain text with short paragraphs or bullet lists. No tables in your reply; build a table chart instead.

## Tables
${tables}`
}

/** What changed since the conversation started, prefixed to the user's message. */
export function contextNote(env: CopilotEnv, knownTables: Set<string>): string {
  const lines: string[] = []
  for (const p of env.profiles()) {
    if (!knownTables.has(p.table)) {
      lines.push(`New table loaded since this chat began:\n${profileForPrompt(p, false)}`)
      knownTables.add(p.table)
    }
  }
  const d = env.dashboard()
  lines.push(
    d.charts.length
      ? `Dashboard "${d.title}" has ${d.charts.length} chart(s): ${d.charts.map((c) => `${c.title} [${c.type}, id ${c.id}]`).join('; ')}.`
      : `Dashboard "${d.title}" is empty.`
  )
  return `[Context: ${lines.join('\n')}]`
}

// ------------------------------------------------------------ tools

function str(v: unknown): string | undefined {
  return typeof v === 'string' && v.trim() ? v.trim() : undefined
}

function strArr(v: unknown): string[] | undefined {
  if (Array.isArray(v)) return v.filter((s): s is string => typeof s === 'string' && s.trim() !== '').map((s) => s.trim())
  if (typeof v === 'string' && v.trim()) return [v.trim()]
  return undefined
}

function asType(v: unknown): ChartType | undefined {
  return CHART_TYPES.includes(v as ChartType) ? (v as ChartType) : undefined
}

function asSize(v: unknown, type: ChartType): ChartSize {
  if (v === 's' || v === 'm' || v === 'l') return v
  return type === 'kpi' || type === 'pie' ? 's' : 'm'
}

/** Run a chart's SQL and draw it in memory, so a broken chart never reaches the dashboard. */
async function validateChart(spec: ChartSpec): Promise<string> {
  const guard = checkReadOnly(spec.sql)
  if (guard) throw new Error(guard)
  const result = await query(spec.sql)
  if (!result.rows.length) throw new Error('The query returned no rows, so the chart would be empty.')
  checkFields(spec, result)
  if (spec.type !== 'kpi' && spec.type !== 'table') buildOption(spec, result, readTheme())
  const preview = toJson(result.rows.slice(0, 5))
  return `${result.rows.length}${result.truncated ? '+' : ''} rows. First rows: ${preview}`
}

async function execute(call: ToolCall, env: CopilotEnv): Promise<string> {
  const input = (call.input && typeof call.input === 'object' ? call.input : {}) as Record<string, unknown>
  if ('__invalid_json' in input) throw new Error('The tool arguments were not valid JSON. Send them again.')

  switch (call.name) {
    case 'run_sql': {
      const sql = str(input.sql)
      if (!sql) throw new Error('sql is required.')
      const guard = checkReadOnly(sql)
      if (guard) throw new Error(guard)
      const r = await query(sql.replace(/;+\s*$/, ''), 100)
      return toJson({ columns: r.columns, rows: r.rows, rowCount: r.rows.length, truncated: r.truncated, ms: r.ms })
    }
    case 'describe_table': {
      const p = env.profiles().find((t) => t.table === str(input.table))
      if (!p) throw new Error(`No table "${String(input.table)}". Tables: ${env.profiles().map((t) => t.table).join(', ') || 'none'}.`)
      return JSON.stringify({ table: p.table, rowCount: p.rowCount, columns: p.columns })
    }
    case 'recommend_charts': {
      const p = env.profiles().find((t) => t.table === str(input.table))
      if (!p) throw new Error(`No table "${String(input.table)}".`)
      const goal = (str(input.goal) ?? 'overview') as Goal
      return JSON.stringify(recommendCharts(p, goal).slice(0, 8).map(({ score: _s, ...s }) => s))
    }
    case 'get_dashboard': {
      const d = env.dashboard()
      return JSON.stringify({
        title: d.title,
        charts: d.charts.map(({ id, title, type, sql, x, y, series, size }) => ({ id, title, type, sql, x, y, series, size })),
      })
    }
    case 'create_chart': {
      const type = asType(input.type)
      const title = str(input.title)
      const sql = str(input.sql)?.replace(/;+\s*$/, '')
      if (!type) throw new Error(`type must be one of ${CHART_TYPES.join(', ')}.`)
      if (!title || !sql) throw new Error('title and sql are required.')
      const draft: ChartSpec = {
        id: 'draft',
        title,
        type,
        sql,
        x: str(input.x),
        y: strArr(input.y),
        series: str(input.series),
        size: asSize(input.size, type),
        description: str(input.description),
        createdBy: 'ai',
        updatedAt: '',
      }
      const preview = await validateChart(draft)
      const { id: _i, updatedAt: _u, ...rest } = draft
      const chart = env.addChart(rest)
      return `Added chart ${chart.id}. ${preview}`
    }
    case 'update_chart': {
      const id = str(input.id)
      const current = env.dashboard().charts.find((c) => c.id === id)
      if (!current) throw new Error(`No chart with id "${String(input.id)}". Call get_dashboard for the ids.`)
      const patch: Partial<ChartSpec> = {}
      if (str(input.title)) patch.title = str(input.title)
      if (input.type !== undefined) {
        const t = asType(input.type)
        if (!t) throw new Error(`type must be one of ${CHART_TYPES.join(', ')}.`)
        patch.type = t
      }
      if (str(input.sql)) patch.sql = str(input.sql)!.replace(/;+\s*$/, '')
      if (input.x !== undefined) patch.x = str(input.x)
      if (input.y !== undefined) patch.y = strArr(input.y)
      if (input.series !== undefined) patch.series = str(input.series)
      if (input.size !== undefined) patch.size = asSize(input.size, patch.type ?? current.type)
      if (input.description !== undefined) patch.description = str(input.description)
      const preview = await validateChart({ ...current, ...patch })
      env.updateChart(current.id, { ...patch, createdBy: 'ai' })
      return `Updated chart ${current.id}. ${preview}`
    }
    case 'remove_chart': {
      const id = str(input.id)
      if (!id || !env.removeChart(id)) throw new Error(`No chart with id "${String(input.id)}".`)
      return `Removed chart ${id}.`
    }
    case 'rename_dashboard': {
      const title = str(input.title)
      if (!title) throw new Error('title is required.')
      env.renameDashboard(title.slice(0, 120))
      return `Dashboard renamed to "${title}".`
    }
    default:
      throw new Error(`Unknown tool "${call.name}".`)
  }
}

/** JSON for the model, without float noise like 361825.16999999987. */
function toJson(value: unknown): string {
  return JSON.stringify(value, (_k, v) => (typeof v === 'number' && !Number.isInteger(v) ? Number(v.toPrecision(10)) : v))
}

function clip(s: string): string {
  return s.length > MAX_TOOL_OUTPUT ? `${s.slice(0, MAX_TOOL_OUTPUT)}… [cut at ${MAX_TOOL_OUTPUT} characters; aggregate or LIMIT the query]` : s
}

// ------------------------------------------------------------ the loop

type DoneEvent = {
  t: 'done'
  text: string
  toolCalls: ToolCall[]
  raw: unknown
  stopReason: string
  model: string
  costUsd: number | null
}

async function streamTurn(
  model: string,
  system: string,
  messages: CopilotMessage[],
  onText: (delta: string) => void,
  signal: AbortSignal
): Promise<DoneEvent> {
  const res = await fetch('/api/analytics/copilot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, system, messages }),
    signal,
  })
  if (!res.ok || !res.body) {
    let msg = `The copilot request failed (${res.status}).`
    try {
      const body = (await res.json()) as { error?: string }
      if (body.error) msg = body.error
    } catch {
      /* keep the generic message */
    }
    throw new Error(msg)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let done: DoneEvent | null = null
  for (;;) {
    const { value, done: end } = await reader.read()
    if (value) buffer += decoder.decode(value, { stream: true })
    let nl: number
    while ((nl = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, nl).trim()
      buffer = buffer.slice(nl + 1)
      if (!line) continue
      const ev = JSON.parse(line) as { t: string; d?: string; message?: string }
      if (ev.t === 'text' && ev.d) onText(ev.d)
      else if (ev.t === 'error') throw new Error(ev.message ?? 'The copilot failed.')
      else if (ev.t === 'done') done = ev as DoneEvent
    }
    if (end) break
  }
  if (!done) throw new Error('The connection closed before the copilot finished. Try again.')
  return done
}

export type LoopCallbacks = {
  /** The conversation grew (assistant turn or tool results appended). */
  onMessages: (messages: CopilotMessage[]) => void
  /** Live text of the turn being written. */
  onStreaming: (text: string) => void
  onTurn: (info: TurnInfo) => void
}

/** Run the copilot until it answers without calling a tool. */
export async function runCopilot(
  env: CopilotEnv,
  model: string,
  system: string,
  start: CopilotMessage[],
  cb: LoopCallbacks,
  signal: AbortSignal
): Promise<CopilotMessage[]> {
  let messages = start
  for (let step = 0; step < MAX_STEPS; step++) {
    let live = ''
    cb.onStreaming('')
    const turn = await streamTurn(model, system, messages, (d) => cb.onStreaming((live += d)), signal)
    cb.onStreaming('')
    cb.onTurn({ model: turn.model, costUsd: turn.costUsd, stopReason: turn.stopReason })

    messages = [...messages, { role: 'assistant', text: turn.text, toolCalls: turn.toolCalls, raw: turn.raw }]
    cb.onMessages(messages)

    if (turn.stopReason === 'refusal') throw new Error('The model declined this request.')
    if (turn.stopReason === 'max_tokens') throw new Error('The reply hit the length limit. Ask for something smaller.')
    if (!turn.toolCalls.length) return messages

    const results = []
    for (const call of turn.toolCalls) {
      if (signal.aborted) throw new DOMException('Stopped', 'AbortError')
      try {
        results.push({ id: call.id, name: call.name, output: clip(await execute(call, env)) })
      } catch (err) {
        results.push({ id: call.id, name: call.name, output: `Error: ${err instanceof Error ? err.message : String(err)}`, isError: true })
      }
    }
    messages = [...messages, { role: 'tool', results }]
    cb.onMessages(messages)
  }
  throw new Error(`Stopped after ${MAX_STEPS} steps without a final answer.`)
}
