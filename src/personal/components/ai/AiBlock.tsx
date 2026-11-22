import type { Block } from '../../lib/archive/guide'
import { GradientDescentLab, KMeansLab, KnnLab, LinRegLab, OptimizerLab, OverfitLab, PcaLab, PerceptronLab, ForestLab, SvmLab, ThresholdLab, TreeLab } from './Classic'
import { BpeLab, DiffusionLab, QLearningLab, SamplingLab } from './Gen'
import { AttentionLab, BackpropLab, ConvLab, EmbeddingLab, NetworkLab, Playground } from './Neural'

export type AiBlockType = Extract<Block, { t: 'ai-viz' }>

// The artificial-intelligence diagrams and labs, in their own chunk.
export default function AiBlock({ block, color }: { block: AiBlockType; color: string }) {
  switch (block.viz) {
    case 'gradient-descent':
      return <GradientDescentLab color={color} />
    case 'optimizers':
      return <OptimizerLab color={color} />
    case 'linreg':
      return <LinRegLab color={color} />
    case 'overfit':
      return <OverfitLab color={color} />
    case 'perceptron':
      return <PerceptronLab color={color} />
    case 'knn':
      return <KnnLab color={color} />
    case 'kmeans':
      return <KMeansLab color={color} />
    case 'tree':
      return <TreeLab color={color} />
    case 'forest':
      return <ForestLab color={color} />
    case 'svm':
      return <SvmLab color={color} />
    case 'pca':
      return <PcaLab color={color} />
    case 'threshold':
      return <ThresholdLab color={color} />
    case 'network':
      return <NetworkLab color={color} />
    case 'playground':
      return <Playground color={color} />
    case 'backprop':
      return <BackpropLab color={color} />
    case 'conv':
      return <ConvLab color={color} />
    case 'attention':
      return <AttentionLab color={color} />
    case 'embedding':
      return <EmbeddingLab color={color} />
    case 'bpe':
      return <BpeLab color={color} />
    case 'sampling':
      return <SamplingLab color={color} />
    case 'diffusion':
      return <DiffusionLab color={color} />
    case 'qlearning':
      return <QLearningLab color={color} />
  }
}
