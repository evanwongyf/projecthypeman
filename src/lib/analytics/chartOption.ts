import type { EChartsOption, SeriesOption } from 'echarts'
import type { ChartSpec, QueryResult, Row } from './types'

/**
 * Chart spec + query result -> ECharts option, following the data-viz rules:
 * categorical hues in a fixed order (never cycled), extra series folded into
 * "Other", one y-axis only, a legend whenever there are two or more series,
 * thin marks, a recessive grid, and hover tooltips on everything.
 */

// Validated reference palette: light and dark are separate steps, not a flip.
const SERIES_LIGHT = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6', '#e34948']
const SERIES_DARK = ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#0ca30c', '#9085e9', '#e66767']
const SEQ_LIGHT = ['#e3eefb', '#a9c9f1', '#6ea2e6', '#2a78d6', '#1b5299', '#0f3363']
const SEQ_DARK = ['#16263b', '#1c3d66', '#2a5f9e', '#3987e5', '#7fb0ef', '#c4dbf8']

export type ChartTheme = {
  dark: boolean
  ink: string
  inkSoft: string
  inkFaint: string
  line: string
  panel: string
  font: string
  mono: string
}

export function readTheme(): ChartTheme {
  const root = document.documentElement
  const css = getComputedStyle(root)
  const v = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback
  return {
    dark: root.dataset.mode === 'dark',
    ink: v('--ink', '#111'),
    inkSoft: v('--ink-soft', '#555'),
    inkFaint: v('--ink-faint', '#888'),
    line: v('--line', '#ddd'),
    panel: v('--panel', '#fff'),
    font: v('--font-display', 'system-ui'),
    mono: v('--font-mono', 'monospace'),
  }
}

export function palette(theme: ChartTheme): string[] {
  return theme.dark ? SERIES_DARK : SERIES_LIGHT
}

export function formatNumber(n: unknown): string {
  if (typeof n !== 'number' || !Number.isFinite(n)) return n === null || n === undefined ? '-' : String(n)
  const a = Math.abs(n)
  if (a >= 1e12) return `${(n / 1e12).toFixed(1)}T`
  if (a >= 1e9) return `${(n / 1e9).toFixed(1)}B`
  if (a >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (a >= 1e4) return `${(n / 1e3).toFixed(1)}K`
  if (a >= 100) return n.toFixed(0)
  if (a >= 1) return n.toFixed(2).replace(/\.?0+$/, '')
  if (a === 0) return '0'
  return n.toPrecision(3)
}

function label(v: unknown): string {
  if (v === null || v === undefined) return '(blank)'
  if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T00:00:00(\.000)?Z$/.test(v)) return v.slice(0, 10)
  return String(v)
}

function num(v: unknown): number | null {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null
  if (typeof v === 'string' && v.trim() !== '' && Number.isFinite(Number(v))) return Number(v)
  return null
}

/** Throws a message the copilot (or the user) can act on. */
export function checkFields(spec: ChartSpec, result: QueryResult): void {
  const have = new Set(result.columns.map((c) => c.name))
  const list = result.columns.map((c) => c.name).join(', ')
  const need = (field: string | undefined, what: string) => {
    if (field && !have.has(field)) throw new Error(`The query returns no column "${field}" for ${what}. It returns: ${list}.`)
  }
  need(spec.x, 'x')
  need(spec.series, 'series')
  for (const y of spec.y ?? []) need(y, 'y')
  const needsX = ['bar', 'line', 'area', 'scatter', 'pie', 'heatmap']
  if (needsX.includes(spec.type) && !spec.x) throw new Error(`A ${spec.type} chart needs an x column.`)
  if (spec.type !== 'table' && !(spec.y?.length)) throw new Error(`A ${spec.type} chart needs at least one y column.`)
  if (spec.type === 'heatmap' && !spec.series) throw new Error('A heatmap needs a series column for its rows.')
}

/** Pivot long rows into one array per series, keeping first-seen order. */
function pivot(rows: Row[], x: string, ys: string[], series: string | undefined, cap: number) {
  const xs: string[] = []
  const xIndex = new Map<string, number>()
  for (const r of rows) {
    const k = label(r[x])
    if (!xIndex.has(k)) {
      xIndex.set(k, xs.length)
      xs.push(k)
    }
  }

  const groups = new Map<string, (number | null)[]>()
  const add = (name: string, i: number, v: number | null) => {
    if (!groups.has(name)) groups.set(name, xs.map(() => null))
    const arr = groups.get(name)!
    if (v !== null) arr[i] = (arr[i] ?? 0) + v
  }

  if (series) {
    // Largest series first, so the biggest gets the first colour; the tail folds into Other.
    const totals = new Map<string, number>()
    for (const r of rows) totals.set(label(r[series]), (totals.get(label(r[series])) ?? 0) + Math.abs(num(r[ys[0]]) ?? 0))
    const ranked = [...totals.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0])
    const keep = ranked.slice(0, ranked.length > cap ? cap - 1 : cap)
    for (const s of keep) groups.set(s, xs.map(() => null))
    const kept = new Set(keep)
    for (const r of rows) {
      const s = label(r[series])
      add(kept.has(s) ? s : 'Other', xIndex.get(label(r[x]))!, num(r[ys[0]]))
    }
  } else {
    for (const y of ys.slice(0, cap)) for (const r of rows) add(y, xIndex.get(label(r[x]))!, num(r[y]))
  }
  return { xs, groups }
}

function base(theme: ChartTheme, showLegend: boolean): EChartsOption {
  return {
    animationDuration: 300,
    textStyle: { fontFamily: theme.font, color: theme.inkSoft },
    color: palette(theme),
    grid: { left: 8, right: 16, top: showLegend ? 36 : 12, bottom: 8, containLabel: true },
    legend: showLegend
      ? { top: 0, left: 0, type: 'scroll', icon: 'roundRect', itemWidth: 10, itemHeight: 10, textStyle: { color: theme.inkSoft, fontSize: 11 } }
      : { show: false },
    tooltip: {
      confine: true,
      backgroundColor: theme.panel,
      borderColor: theme.line,
      textStyle: { color: theme.ink, fontSize: 12, fontFamily: theme.mono },
      valueFormatter: (v) => formatNumber(v as number),
    },
  }
}

function axisStyle(theme: ChartTheme) {
  return {
    axisLine: { lineStyle: { color: theme.line } },
    axisTick: { show: false },
    axisLabel: { color: theme.inkFaint, fontSize: 11, hideOverlap: true },
    splitLine: { lineStyle: { color: theme.line, opacity: 0.5 } },
    nameTextStyle: { color: theme.inkFaint, fontSize: 11 },
  }
}

export function buildOption(spec: ChartSpec, result: QueryResult, theme: ChartTheme): EChartsOption {
  checkFields(spec, result)
  const rows = result.rows
  const ys = spec.y ?? []
  const ax = axisStyle(theme)

  if (spec.type === 'bar' || spec.type === 'line' || spec.type === 'area') {
    const { xs, groups } = pivot(rows, spec.x!, ys, spec.series, 8)
    const multi = groups.size > 1
    const horizontal = spec.type === 'bar' && !multi && xs.length > 8 && xs.some((x) => x.length > 10)
    const series: SeriesOption[] = [...groups.entries()].map(([name, data]) =>
      spec.type === 'bar'
        ? {
            type: 'bar',
            name,
            data,
            barMaxWidth: 36,
            itemStyle: { borderRadius: horizontal ? [0, 4, 4, 0] : [4, 4, 0, 0], borderColor: theme.panel, borderWidth: multi ? 1 : 0 },
          }
        : {
            type: 'line',
            name,
            data,
            showSymbol: xs.length <= 24,
            symbolSize: 6,
            lineStyle: { width: 2 },
            connectNulls: false,
            areaStyle: spec.type === 'area' ? { opacity: multi ? 0.12 : 0.18 } : undefined,
            stack: spec.type === 'area' && multi ? 'total' : undefined,
          }
    )
    const catAxis = { type: 'category' as const, data: xs, ...ax, splitLine: { show: false } }
    const valAxis = { type: 'value' as const, ...ax, axisLabel: { ...ax.axisLabel, formatter: (v: number) => formatNumber(v) } }
    return {
      ...base(theme, multi),
      tooltip: { ...base(theme, multi).tooltip, trigger: 'axis', axisPointer: { type: spec.type === 'bar' ? 'shadow' : 'line' } },
      xAxis: horizontal ? valAxis : catAxis,
      yAxis: horizontal ? { ...catAxis, inverse: true } : valAxis,
      series,
    }
  }

  if (spec.type === 'scatter') {
    const x = spec.x!
    const y = ys[0]
    const groups = new Map<string, [number, number][]>()
    const counts = new Map<string, number>()
    if (spec.series) for (const r of rows) counts.set(label(r[spec.series]), (counts.get(label(r[spec.series])) ?? 0) + 1)
    // Scatter compares every pair of colours, so it carries at most three.
    const keep = new Set([...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, counts.size > 3 ? 2 : 3).map((e) => e[0]))
    for (const r of rows) {
      const xv = num(r[x])
      const yv = num(r[y])
      if (xv === null || yv === null) continue
      const s = spec.series ? (keep.has(label(r[spec.series])) ? label(r[spec.series]) : 'Other') : y
      if (!groups.has(s)) groups.set(s, [])
      groups.get(s)!.push([xv, yv])
    }
    const multi = groups.size > 1
    return {
      ...base(theme, multi),
      tooltip: {
        ...base(theme, multi).tooltip,
        trigger: 'item',
        formatter: (p: unknown) => {
          const d = p as { seriesName: string; value: [number, number] }
          return `${multi ? `${d.seriesName}<br/>` : ''}${x}: ${formatNumber(d.value[0])}<br/>${y}: ${formatNumber(d.value[1])}`
        },
      },
      xAxis: { type: 'value', name: x, nameLocation: 'middle', nameGap: 26, scale: true, ...ax, axisLabel: { ...ax.axisLabel, formatter: (v: number) => formatNumber(v) } },
      yAxis: { type: 'value', name: y, scale: true, ...ax, axisLabel: { ...ax.axisLabel, formatter: (v: number) => formatNumber(v) } },
      series: [...groups.entries()].map(([name, data]) => ({
        type: 'scatter',
        name,
        data,
        symbolSize: 8,
        itemStyle: { opacity: 0.75, borderColor: theme.panel, borderWidth: 1 },
      })),
    }
  }

  if (spec.type === 'pie') {
    const pairs = rows
      .map((r) => ({ name: label(r[spec.x!]), value: num(r[ys[0]]) ?? 0 }))
      .filter((d) => d.value > 0)
      .sort((a, b) => b.value - a.value)
    const data = pairs.length > 6 ? [...pairs.slice(0, 5), { name: 'Other', value: pairs.slice(5).reduce((s, d) => s + d.value, 0) }] : pairs
    return {
      ...base(theme, true),
      tooltip: { ...base(theme, true).tooltip, trigger: 'item', formatter: '{b}: {c} ({d}%)', valueFormatter: undefined },
      series: [
        {
          type: 'pie',
          radius: ['45%', '72%'],
          center: ['50%', '56%'],
          data,
          itemStyle: { borderColor: theme.panel, borderWidth: 2 },
          label: { color: theme.inkSoft, fontSize: 11, formatter: '{b}\n{d}%' },
          labelLine: { lineStyle: { color: theme.line } },
        },
      ],
    }
  }

  if (spec.type === 'histogram') {
    const values = rows.map((r) => num(r[ys[0]])).filter((v): v is number => v !== null)
    if (!values.length) throw new Error(`"${ys[0]}" has no numeric values to bin.`)
    values.sort((a, b) => a - b)
    const min = values[0]
    const max = values[values.length - 1]
    const iqr = values[Math.floor(values.length * 0.75)] - values[Math.floor(values.length * 0.25)]
    let width = iqr > 0 ? (2 * iqr) / Math.cbrt(values.length) : (max - min) / 10 || 1
    let bins = Math.ceil((max - min) / width) || 1
    if (bins > 40) {
      bins = 40
      width = (max - min) / bins
    }
    const counts = new Array(bins).fill(0)
    for (const v of values) counts[Math.min(bins - 1, Math.floor((v - min) / width))]++
    const labels = counts.map((_, i) => `${formatNumber(min + i * width)} to ${formatNumber(min + (i + 1) * width)}`)
    return {
      ...base(theme, false),
      tooltip: { ...base(theme, false).tooltip, trigger: 'axis', axisPointer: { type: 'shadow' }, valueFormatter: (v) => `${v} rows` },
      xAxis: { type: 'category', data: labels, ...ax, splitLine: { show: false }, axisLabel: { ...ax.axisLabel, interval: 'auto' } },
      yAxis: { type: 'value', ...ax, name: 'rows' },
      series: [{ type: 'bar', name: ys[0], data: counts, barCategoryGap: '2%', itemStyle: { borderRadius: [4, 4, 0, 0] } }],
    }
  }

  if (spec.type === 'heatmap') {
    const xs = [...new Set(rows.map((r) => label(r[spec.x!])))]
    const ss = [...new Set(rows.map((r) => label(r[spec.series!])))]
    const data = rows.map((r) => [xs.indexOf(label(r[spec.x!])), ss.indexOf(label(r[spec.series!])), num(r[ys[0]])])
    const vals = data.map((d) => d[2]).filter((v): v is number => v !== null)
    return {
      ...base(theme, false),
      tooltip: {
        ...base(theme, false).tooltip,
        trigger: 'item',
        formatter: (p: unknown) => {
          const d = (p as { value: [number, number, number] }).value
          return `${xs[d[0]]} × ${ss[d[1]]}<br/>${ys[0]}: ${formatNumber(d[2])}`
        },
      },
      grid: { left: 8, right: 16, top: 12, bottom: 44, containLabel: true },
      xAxis: { type: 'category', data: xs, ...ax, splitLine: { show: false } },
      yAxis: { type: 'category', data: ss, ...ax, splitLine: { show: false } },
      visualMap: {
        min: Math.min(...vals),
        max: Math.max(...vals),
        calculable: false,
        orient: 'horizontal',
        left: 'center',
        bottom: 0,
        itemHeight: 120,
        itemWidth: 10,
        textStyle: { color: theme.inkFaint, fontSize: 10 },
        formatter: (v: unknown) => formatNumber(v as number),
        inRange: { color: theme.dark ? SEQ_DARK : SEQ_LIGHT },
      },
      series: [{ type: 'heatmap', data, itemStyle: { borderColor: theme.panel, borderWidth: 2 } }],
    }
  }

  throw new Error(`"${spec.type}" is not drawn with ECharts.`)
}
