import type { Block } from '../../lib/archive/guide'
import { DrugNames, DoseResponse } from './Pharmacology'
import { VirusStructure } from './Microbiology'
import { ImmuneResponse, AntibodyBinding } from './Immunology'
import { HeartFlow, BloodPressureChart, LungAirflow } from './BodySystems'

type MedVizBlock = Extract<Block, { t: 'med-viz' }>

export default function MedBlock({ block, color }: { block: MedVizBlock; color: string }) {
  switch (block.viz) {
    case 'drug-names':
      return <DrugNames color={color} />
    case 'dose-response':
      return <DoseResponse color={color} />
    case 'virus-structure':
      return <VirusStructure color={color} />
    case 'immune-response':
      return <ImmuneResponse color={color} />
    case 'antibody-binding':
      return <AntibodyBinding color={color} />
    case 'heart-flow':
      return <HeartFlow color={color} />
    case 'blood-pressure':
      return <BloodPressureChart color={color} />
    case 'lung-airflow':
      return <LungAirflow color={color} />
    default:
      return null
  }
}
