import { quoteIdent } from './duck'
import type { ChartSize, ChartType, ColumnProfile, TableProfile } from './types'

/**
 * Rule-based chart recommender. It only proposes charts that are valid for
 * the data (a time column for a trend, few enough categories for a pie, two
 * measures for a scatter), each with SQL ready to run. The copilot uses it as
 * a starting point; the data panel shows it as one-click suggestions.
 */
export type Goal = 'overview' | 'trend' | 'compare' | 'share' | 'distribution' | 'relationship'

export type Suggestion = {
  title: string
  type: ChartType
  sql: string
  x?: string
  y?: string[]
  series?: string
  size: ChartSize
  reason: string
  goal: Goal
  score: number
}

const q = quoteIdent

/** Revenue-like names first, then whatever has the widest spread. */
function rankMeasures(cols: ColumnProfile[]): ColumnProfile[] {
  const money = /(revenue|sales|amount|total|price|cost|profit|value|spend|income|score|count|qty|quantity)/i
  return [...cols].sort((a, b) => Number(money.test(b.name)) - Number(money.test(a.name)) || b.distinct - a.distinct)
}

function aggFor(c: ColumnProfile): string {
  return /(rate|pct|percent|ratio|avg|average|mean|score|price|age|temperature)/i.test(c.name) ? 'AVG' : 'SUM'
}

/** Truncate dates to a grain that gives a readable number of points. */
function timeExpr(c: ColumnProfile): { expr: string; grain: string } {
  if (!/^(date|timestamp)/i.test(c.type)) return { expr: q(c.name), grain: '' }
  const min = c.min ? Date.parse(c.min) : NaN
  const max = c.max ? Date.parse(c.max) : NaN
  const days = Number.isFinite(min) && Number.isFinite(max) ? (max - min) / 86_400_000 : 365
  const grain = days > 365 * 3 ? 'year' : days > 120 ? 'month' : days > 21 ? 'week' : 'day'
  return { expr: `date_trunc('${grain}', ${q(c.name)})`, grain }
}

export function recommendCharts(p: TableProfile, goal: Goal = 'overview'): Suggestion[] {
  const t = q(p.table)
  const usable = p.columns.filter((c) => c.nullPct < 90)
  const measures = rankMeasures(usable.filter((c) => c.role === 'measure'))
  const times = usable.filter((c) => c.role === 'time')
  const cats = usable
    .filter((c) => (c.role === 'category' || c.role === 'geo' || c.role === 'boolean') && c.distinct >= 2)
    .sort((a, b) => a.distinct - b.distinct)
  const out: Suggestion[] = []
  const m0 = measures[0]

  // Headline number.
  if (m0) {
    const agg = aggFor(m0)
    out.push({
      title: `${agg === 'SUM' ? 'Total' : 'Average'} ${m0.name}`,
      type: 'kpi',
      sql: `SELECT ${agg}(${q(m0.name)}) AS ${q(m0.name)} FROM ${t}`,
      y: [m0.name],
      size: 's',
      reason: 'One headline figure reads faster than a chart.',
      goal: 'overview',
      score: 60,
    })
  }

  // Trend over time.
  for (const tc of times.slice(0, 1)) {
    const { expr, grain } = timeExpr(tc)
    const label = grain ? `${tc.name}_${grain}` : tc.name
    if (m0) {
      const agg = aggFor(m0)
      out.push({
        title: `${m0.name} by ${grain || tc.name}`,
        type: 'line',
        sql: `SELECT ${expr} AS ${q(label)}, ${agg}(${q(m0.name)}) AS ${q(m0.name)} FROM ${t} WHERE ${q(tc.name)} IS NOT NULL GROUP BY 1 ORDER BY 1`,
        x: label,
        y: [m0.name],
        size: 'l',
        reason: `A time column (${tc.name}) and a measure: change over time is a line.`,
        goal: 'trend',
        score: 95,
      })
      const split = cats.find((c) => c.distinct <= 6)
      if (split) {
        out.push({
          title: `${m0.name} by ${grain || tc.name} and ${split.name}`,
          type: 'line',
          sql: `SELECT ${expr} AS ${q(label)}, ${q(split.name)}, ${agg}(${q(m0.name)}) AS ${q(m0.name)} FROM ${t} WHERE ${q(tc.name)} IS NOT NULL GROUP BY 1, 2 ORDER BY 1`,
          x: label,
          y: [m0.name],
          series: split.name,
          size: 'l',
          reason: `${split.name} has ${split.distinct} values, few enough to compare as separate lines.`,
          goal: 'trend',
          score: 80,
        })
      }
    } else {
      out.push({
        title: `Rows by ${grain || tc.name}`,
        type: 'bar',
        sql: `SELECT ${expr} AS ${q(label)}, COUNT(*) AS rows FROM ${t} WHERE ${q(tc.name)} IS NOT NULL GROUP BY 1 ORDER BY 1`,
        x: label,
        y: ['rows'],
        size: 'l',
        reason: 'No measure column, so the count of records over time.',
        goal: 'trend',
        score: 70,
      })
    }
  }

  // Compare categories.
  for (const c of cats.slice(0, 2)) {
    const yExpr = m0 ? `${aggFor(m0)}(${q(m0.name)})` : 'COUNT(*)'
    const yName = m0 ? m0.name : 'rows'
    const top = c.distinct > 12
    out.push({
      title: `${yName} by ${c.name}${top ? ' (top 12)' : ''}`,
      type: 'bar',
      sql: top
        ? `WITH g AS (SELECT CAST(${q(c.name)} AS VARCHAR) AS k, ${yExpr} AS v FROM ${t} GROUP BY 1), r AS (SELECT *, ROW_NUMBER() OVER (ORDER BY v DESC) AS rn FROM g) SELECT CASE WHEN rn <= 11 THEN k ELSE 'Other' END AS ${q(c.name)}, SUM(v) AS ${q(yName)} FROM r GROUP BY 1 ORDER BY (${q(c.name)} = 'Other'), 2 DESC`
        : `SELECT CAST(${q(c.name)} AS VARCHAR) AS ${q(c.name)}, ${yExpr} AS ${q(yName)} FROM ${t} GROUP BY 1 ORDER BY 2 DESC`,
      x: c.name,
      y: [yName],
      size: 'm',
      reason: top ? `${c.distinct} categories, so the top 11 plus Other.` : `${c.distinct} categories, sorted largest first.`,
      goal: 'compare',
      score: 85 - out.filter((s) => s.goal === 'compare').length * 10,
    })
  }

  // Share of a whole.
  const pieCat = cats.find((c) => c.distinct >= 2 && c.distinct <= 6)
  if (pieCat) {
    const yExpr = m0 && aggFor(m0) === 'SUM' ? `SUM(${q(m0.name)})` : 'COUNT(*)'
    const yName = m0 && aggFor(m0) === 'SUM' ? m0.name : 'rows'
    out.push({
      title: `Share of ${yName} by ${pieCat.name}`,
      type: 'pie',
      sql: `SELECT CAST(${q(pieCat.name)} AS VARCHAR) AS ${q(pieCat.name)}, ${yExpr} AS ${q(yName)} FROM ${t} GROUP BY 1 ORDER BY 2 DESC`,
      x: pieCat.name,
      y: [yName],
      size: 's',
      reason: `Only ${pieCat.distinct} parts, few enough for a pie to stay readable.`,
      goal: 'share',
      score: 55,
    })
  }

  // Distribution.
  for (const m of measures.slice(0, 1)) {
    out.push({
      title: `Distribution of ${m.name}`,
      type: 'histogram',
      sql: `SELECT ${q(m.name)} FROM ${t} WHERE ${q(m.name)} IS NOT NULL`,
      y: [m.name],
      size: 'm',
      reason: 'Shows the spread, skew and outliers of a single measure.',
      goal: 'distribution',
      score: 65,
    })
  }

  // Relationship between two measures.
  if (measures.length >= 2) {
    const [a, b] = measures
    const split = cats.find((c) => c.distinct <= 3)
    out.push({
      title: `${b.name} against ${a.name}`,
      type: 'scatter',
      sql: `SELECT ${q(a.name)}, ${q(b.name)}${split ? `, CAST(${q(split.name)} AS VARCHAR) AS ${q(split.name)}` : ''} FROM ${t} WHERE ${q(a.name)} IS NOT NULL AND ${q(b.name)} IS NOT NULL USING SAMPLE 2000 ROWS`,
      x: a.name,
      y: [b.name],
      series: split?.name,
      size: 'm',
      reason: 'Two measures: a scatter shows whether they move together.',
      goal: 'relationship',
      score: 60,
    })
  }

  // Two categories against each other.
  if (cats.length >= 2 && cats[0].distinct <= 12 && cats[1].distinct <= 12) {
    const [a, b] = cats
    const yExpr = m0 ? `${aggFor(m0)}(${q(m0.name)})` : 'COUNT(*)'
    const yName = m0 ? m0.name : 'rows'
    out.push({
      title: `${yName} by ${a.name} and ${b.name}`,
      type: 'heatmap',
      sql: `SELECT CAST(${q(a.name)} AS VARCHAR) AS ${q(a.name)}, CAST(${q(b.name)} AS VARCHAR) AS ${q(b.name)}, ${yExpr} AS ${q(yName)} FROM ${t} GROUP BY 1, 2`,
      x: a.name,
      y: [yName],
      series: b.name,
      size: 'm',
      reason: 'Two small categories: a heatmap shows every combination at once.',
      goal: 'compare',
      score: 50,
    })
  }

  const boost = (s: Suggestion) => s.score + (goal !== 'overview' && s.goal === goal ? 100 : 0)
  return out.sort((a, b) => boost(b) - boost(a))
}
