import type { Block } from '../../lib/archive/guide'
import { DownforceExplorer, TyreStrategy } from './f1/Viz'
import { ProjectileExplorer } from './Viz'

export type SportsBlockType = Extract<Block, { t: 'sports-viz' }>

// The sports-science diagrams and labs, in their own chunk.
export default function SportsBlock({ block, color }: { block: SportsBlockType; color: string }) {
  switch (block.viz) {
    case 'projectile':
      return <ProjectileExplorer color={color} />
    case 'downforce':
      return <DownforceExplorer color={color} />
    case 'tyre-strategy':
      return <TyreStrategy color={color} />
  }
}
