import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { readTheme, type ChartTheme } from '../../lib/analytics/chartOption'

/** Re-read the theme whenever the app switches mode or palette. */
export function useChartTheme(): ChartTheme {
  const [theme, setTheme] = useState<ChartTheme>(() => readTheme())
  useEffect(() => {
    const obs = new MutationObserver(() => setTheme(readTheme()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-theme', 'data-accent', 'data-type'] })
    return () => obs.disconnect()
  }, [])
  return theme
}

export function EChart({ option, className, ariaLabel }: { option: EChartsOption; className?: string; ariaLabel: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const chart = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const instance = echarts.init(ref.current, undefined, { renderer: 'svg' })
    chart.current = instance
    const ro = new ResizeObserver(() => instance.resize())
    ro.observe(ref.current)
    return () => {
      ro.disconnect()
      instance.dispose()
      chart.current = null
    }
  }, [])

  useEffect(() => {
    chart.current?.setOption(option, true)
  }, [option])

  return <div ref={ref} className={className} role="img" aria-label={ariaLabel} />
}
