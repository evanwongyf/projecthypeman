import type { Block } from '../../lib/archive/guide'
import { DerivativeExplorer, FunctionExplorer, LimitExplorer, RiemannSum } from './Functions'
import { MatrixTransform, VectorOps } from './Vectors'

export type MathBlockType = Extract<Block, { t: 'math-viz' }>

// The mathematics diagrams and labs, in their own chunk.
export default function MathBlock({ block, color }: { block: MathBlockType; color: string }) {
  switch (block.viz) {
    case 'function-explorer':
      return <FunctionExplorer color={color} />
    case 'limit-explorer':
      return <LimitExplorer color={color} />
    case 'derivative-explorer':
      return <DerivativeExplorer color={color} />
    case 'riemann-sum':
      return <RiemannSum color={color} />
    case 'vector-ops':
      return <VectorOps color={color} />
    case 'matrix-transform':
      return <MatrixTransform color={color} />
  }
}
