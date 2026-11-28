/** Shapes for the analytics workspace. The copilot wire types mirror netlify/functions/_shared/ai/providers.ts. */

export const CHART_TYPES = ['bar', 'line', 'area', 'scatter', 'pie', 'histogram', 'heatmap', 'kpi', 'table'] as const
export type ChartType = (typeof CHART_TYPES)[number]
export type ChartSize = 's' | 'm' | 'l'

export type ChartSpec = {
  id: string
  title: string
  type: ChartType
  sql: string
  x?: string
  y?: string[]
  series?: string
  size: ChartSize
  description?: string
  createdBy: 'ai' | 'user'
  updatedAt: string
}

export type Dashboard = {
  id: string
  title: string
  charts: ChartSpec[]
  updatedAt: string
}

export type Workspace = { dashboards: Dashboard[] }

// ---- data ----

export type Column = { name: string; type: string }
export type Row = Record<string, unknown>
export type QueryResult = { columns: Column[]; rows: Row[]; truncated: boolean; ms: number }

export type ColumnRole = 'time' | 'measure' | 'category' | 'id' | 'text' | 'geo' | 'boolean'

export type ColumnProfile = {
  name: string
  type: string
  role: ColumnRole
  nullPct: number
  distinct: number
  min?: string
  max?: string
  mean?: number
  topValues?: { value: string; count: number }[]
  /** Looks like personal data; masked in anything sent to the AI. */
  pii?: boolean
}

export type TableProfile = {
  table: string
  fileName: string
  rowCount: number
  columns: ColumnProfile[]
  sample: Row[]
}

// ---- copilot ----

export type ToolCall = { id: string; name: string; input: unknown }

export type CopilotMessage =
  | { role: 'user'; text: string }
  | { role: 'assistant'; text: string; toolCalls: ToolCall[]; raw: unknown }
  | { role: 'tool'; results: { id: string; name: string; output: string; isError?: boolean }[] }

export type ModelOption = { id: string; provider: 'openai' | 'anthropic'; label: string; hint: string }
