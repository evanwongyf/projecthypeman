import type { Block } from '../../../lib/archive/guide'
import { AtlasTable, RankBars, Scatter, TrackGrid } from './Atlas'
import { MapLab, SectorLab, TraceStack } from './CircuitLab'
import { CorneringLimit, CurvatureLab, GGDiagram, LineDemo, PassesLab } from './MathLabs'
import { CornerTable, Explorer, SensitivityBars, SensitivityMatrix } from './Tables'

export type F1BlockType = Extract<Block, { t: 'f1-viz' }>

// The Formula 1 circuit atlas diagrams and labs, in their own chunk.
export default function F1Block({ block, color }: { block: F1BlockType; color: string }) {
  const id = block.circuit ?? 'monza'
  switch (block.viz) {
    case 'map':
      return <MapLab id={id} color={color} />
    case 'sector':
      return <SectorLab id={id} sector={block.sector ?? 1} color={color} />
    case 'traces':
      return <TraceStack id={id} color={color} />
    case 'corners':
      return <CornerTable id={id} color={color} />
    case 'explorer':
      return <Explorer id={id} color={color} />
    case 'sensitivity':
      return <SensitivityBars id={id} color={color} />
    case 'gg':
      return <GGDiagram id={id} color={color} />
    case 'atlas-rank':
      return <RankBars color={color} />
    case 'atlas-scatter':
      return <Scatter color={color} />
    case 'atlas-grid':
      return <TrackGrid color={color} />
    case 'atlas-table':
      return <AtlasTable color={color} />
    case 'atlas-sensitivity':
      return <SensitivityMatrix color={color} />
    case 'line-demo':
      return <LineDemo color={color} />
    case 'cornering-limit':
      return <CorneringLimit color={color} />
    case 'curvature':
      return <CurvatureLab color={color} initial={block.circuit} />
    case 'passes':
      return <PassesLab color={color} initial={block.circuit} />
  }
}
