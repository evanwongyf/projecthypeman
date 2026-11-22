import type { Block } from '../../lib/archive/guide'
import { BoundingOverwatch, ImtSequence } from './FireMovement'
import { ContactDrillChoice, OverrunResponse } from './ContactDrills'
import { SitrepBuilder } from './Communications'
import { CasualtyTriage } from './Casualties'

type MilVizBlock = Extract<Block, { t: 'mil-viz' }>

export default function MilBlock({ block, color }: { block: MilVizBlock; color: string }) {
  switch (block.viz) {
    case 'fire-movement':
      return <BoundingOverwatch color={color} />
    case 'imt-sequence':
      return <ImtSequence color={color} />
    case 'contact-drill':
      return <ContactDrillChoice color={color} />
    case 'overrun-response':
      return <OverrunResponse color={color} />
    case 'sitrep-builder':
      return <SitrepBuilder color={color} />
    case 'casualty-triage':
      return <CasualtyTriage color={color} />
    default:
      return null
  }
}
