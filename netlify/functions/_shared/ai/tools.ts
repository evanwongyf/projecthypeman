import type { ToolDef } from './providers.js'

/**
 * The copilot's whole tool surface. It can read data with SQL and edit the
 * dashboard; it cannot reach anything else. Every tool runs in the browser,
 * against DuckDB, so numbers always come from a query rather than the model.
 *
 * Kept fixed and in one order for the life of a conversation: changing the
 * tool list mid-conversation would invalidate the prompt cache and, on Claude,
 * the replayed thinking blocks.
 */
const CHART_TYPES = ['bar', 'line', 'area', 'scatter', 'pie', 'histogram', 'heatmap', 'kpi', 'table']

export const COPILOT_TOOLS: ToolDef[] = [
  {
    name: 'run_sql',
    description:
      'Run one read-only DuckDB SQL query (SELECT, WITH, SUMMARIZE, DESCRIBE) over the loaded tables and get up to 100 rows back. Use it before stating any number. Quote identifiers that have spaces or capitals with double quotes.',
    parameters: {
      type: 'object',
      properties: {
        sql: { type: 'string', description: 'A single read-only query, no trailing semicolon.' },
        purpose: { type: 'string', description: 'One short line on what this query checks, shown to the user.' },
      },
      required: ['sql'],
      additionalProperties: false,
    },
  },
  {
    name: 'describe_table',
    description:
      'Get the full profile of one table: every column with its type, role (time, measure, category, id, text, geo, boolean), null share, distinct count, range and most common values.',
    parameters: {
      type: 'object',
      properties: { table: { type: 'string' } },
      required: ['table'],
      additionalProperties: false,
    },
  },
  {
    name: 'recommend_charts',
    description:
      'Get chart suggestions for a table from the rule-based recommender. Each one is valid for the data and comes with ready SQL. Use it as a starting point, then pick or adapt what fits the question.',
    parameters: {
      type: 'object',
      properties: {
        table: { type: 'string' },
        goal: {
          type: 'string',
          enum: ['overview', 'trend', 'compare', 'share', 'distribution', 'relationship'],
          description: 'What the user wants to see. Defaults to overview.',
        },
      },
      required: ['table'],
      additionalProperties: false,
    },
  },
  {
    name: 'get_dashboard',
    description: 'List the charts currently on the dashboard, with their ids, types, SQL and fields.',
    parameters: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'create_chart',
    description: `Add a chart to the dashboard. The SQL is run first; if it fails or does not return the named columns you get the error back, so fix it and retry. Types: ${CHART_TYPES.join(', ')}. Rules: bar/line/area/scatter need x and at least one y; one y-axis only, so measures on very different scales go in separate charts; pie needs x (labels) and one y and at most 6 slices; histogram needs one numeric y; heatmap needs x, series and one y; kpi needs one y and its query should return a single row; table shows the query result as is. Aggregate in SQL and keep categories to about 12, folding the rest into 'Other'.`,
    parameters: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'A plain statement of what the chart shows.' },
        type: { type: 'string', enum: CHART_TYPES },
        sql: { type: 'string' },
        x: { type: 'string', description: 'Column for the x axis, slices or rows. Omit for kpi and histogram.' },
        y: { type: 'array', items: { type: 'string' }, description: 'Measure column(s).' },
        series: {
          type: 'string',
          description: 'Optional column whose values split the data into coloured series (or the rows of a heatmap).',
        },
        size: { type: 'string', enum: ['s', 'm', 'l'], description: 's = a third, m = half, l = full width.' },
        description: { type: 'string', description: 'One or two sentences on what the chart reveals.' },
      },
      required: ['title', 'type', 'sql'],
      additionalProperties: false,
    },
  },
  {
    name: 'update_chart',
    description: 'Change a chart already on the dashboard. Send only the fields that change; SQL changes are re-checked.',
    parameters: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        type: { type: 'string', enum: CHART_TYPES },
        sql: { type: 'string' },
        x: { type: 'string' },
        y: { type: 'array', items: { type: 'string' } },
        series: { type: 'string' },
        size: { type: 'string', enum: ['s', 'm', 'l'] },
        description: { type: 'string' },
      },
      required: ['id'],
      additionalProperties: false,
    },
  },
  {
    name: 'remove_chart',
    description: 'Remove a chart from the dashboard.',
    parameters: {
      type: 'object',
      properties: { id: { type: 'string' } },
      required: ['id'],
      additionalProperties: false,
    },
  },
  {
    name: 'rename_dashboard',
    description: 'Set the dashboard title.',
    parameters: {
      type: 'object',
      properties: { title: { type: 'string' } },
      required: ['title'],
      additionalProperties: false,
    },
  },
]
