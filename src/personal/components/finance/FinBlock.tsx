import type { Block } from '../../lib/archive/guide'
import { sma } from '../../lib/finance/indicators'
import { fromRows } from '../../lib/finance/series'
import { CandleChart } from './CandleChart'
import { BlackScholesCalc, BondCalc, ForexCalc, FuturesCalc, OptionsLab } from './DerivTools'
import { PlotChart } from './PlotChart'
import { AltmanCalc, AnatomyLab, CompoundCalc, DcfCalc, DdmCalc, HeikinAshiLab, IndicatorLab, PatternLab, PositionCalc } from './FinTools'

export type FinBlockType = Extract<Block, { t: 'candles' } | { t: 'fin-tool' } | { t: 'plot' }>

const MA_COLORS = ['#3b6fd8', '#e07b2a', '#7b4fc9']

// The finance blocks: candlestick diagrams and the calculators and labs, in their own chunk.
export default function FinBlock({ block, color }: { block: FinBlockType; color: string }) {
  if (block.t === 'plot') return <PlotChart block={block} />
  if (block.t === 'candles') {
    const candles = fromRows(block.rows)
    const closes = candles.map((c) => c.c)
    const overlays = (block.sma ?? []).map((n, i) => ({ values: sma(closes, n), color: MA_COLORS[i % MA_COLORS.length], label: `${n}-period SMA` }))
    return (
      <figure className="flex max-w-3xl flex-col gap-1.5">
        <div className="overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          {block.title && <p className="px-3 pt-2 text-sm font-bold">{block.title}</p>}
          <CandleChart
            candles={candles}
            mark={block.mark}
            lines={block.lines}
            overlays={overlays}
            boxes={block.boxes}
            points={block.points}
            segments={block.segments}
            arrows={block.arrows}
            height={block.height ?? Math.max(260, Math.min(340, 200 + candles.length * 5))}
            label={block.title ?? block.caption ?? 'Candlestick chart'}
          />
          {overlays.length > 0 && (
            <div className="flex flex-wrap gap-3 px-3 pb-2 text-xs">
              {overlays.map((o) => (
                <span key={o.label} className="flex items-center gap-1.5 font-bold">
                  <span className="inline-block h-1 w-5 rounded" style={{ background: o.color }} /> {o.label}
                </span>
              ))}
            </div>
          )}
        </div>
        {block.caption && (
          <figcaption className="text-xs" style={{ color: 'var(--ink-soft)' }}>
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }
  switch (block.tool) {
    case 'anatomy':
      return <AnatomyLab color={color} />
    case 'indicators':
      return <IndicatorLab color={color} focus={block.focus} />
    case 'patterns':
      return <PatternLab color={color} />
    case 'heikin-ashi':
      return <HeikinAshiLab />
    case 'compound':
      return <CompoundCalc color={color} />
    case 'dcf':
      return <DcfCalc color={color} />
    case 'ddm':
      return <DdmCalc color={color} />
    case 'altman':
      return <AltmanCalc />
    case 'position':
      return <PositionCalc color={color} />
    case 'options':
      return <OptionsLab color={color} />
    case 'black-scholes':
      return <BlackScholesCalc color={color} />
    case 'bond':
      return <BondCalc color={color} />
    case 'futures':
      return <FuturesCalc color={color} />
    case 'forex':
      return <ForexCalc color={color} />
  }
}
