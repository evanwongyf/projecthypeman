import type { Block } from '../../lib/archive/guide'
import { ExerciseLibrary } from './ExerciseLibrary'
import { HeartZones, IntervalTimer, OneRepMax, PaceCalculator, PlanBuilder, RacePredictor, Vo2Estimator } from './FitTools'

export type FitBlockType = Extract<Block, { t: 'exercises' } | { t: 'fit-tool' }>

// The fitness blocks, in their own chunk so only fitness pages download three.js.
export default function FitBlock({ block, color }: { block: FitBlockType; color: string }) {
  if (block.t === 'exercises') return <ExerciseLibrary ids={block.ids} color={color} />
  switch (block.tool) {
    case 'pace':
      return <PaceCalculator color={color} />
    case 'race':
      return <RacePredictor color={color} />
    case 'vo2':
      return <Vo2Estimator color={color} />
    case 'hr':
      return <HeartZones color={color} />
    case 'plan':
      return <PlanBuilder color={color} />
    case 'one-rep-max':
      return <OneRepMax color={color} />
    case 'timer':
      return <IntervalTimer color={color} />
  }
}
