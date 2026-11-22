import type { Block } from '../../lib/archive/guide'
import ImagingViewer from './ImagingViewer'
import { Ecg12Lead, EcgAnatomy, EcgQuiz, EcgStripLab } from './EcgLab'

type MedChart = Extract<Block, { t: 'med-chart' }>

export default function MedChartBlock({ block, color }: { block: MedChart; color: string }) {
  switch (block.viz) {
    case 'ecg-anatomy':
      return <EcgAnatomy color={color} />
    case 'ecg-lab':
      return <EcgStripLab color={color} rhythm={block.rhythm} />
    case 'ecg-12lead':
      return <Ecg12Lead color={color} pattern={block.rhythm} />
    case 'ecg-quiz':
      return <EcgQuiz color={color} />
    case 'imaging':
      return <ImagingViewer set={block.set} caseId={block.case} color={color} />
  }
}
