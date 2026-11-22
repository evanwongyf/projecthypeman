import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The spine is a stack of bone blocks (vertebrae) separated by cushions (discs), wrapped round a canal that holds the spinal cord and the nerve roots in a bath of cerebrospinal fluid. A sagittal MRI, a slice seen from the side, shows all of these at once. This page teaches how to read a lumbar spine scan and what a disc herniation looks like, with a phantom you can label and mark up.',
  nutshell: [
    'On a **sagittal T2** scan, the **CSF is bright**, the **cord is grey** and a **healthy disc has a bright, water-rich centre**.',
    'The spinal cord ends in the **conus medullaris** around **L1 to L2**; below it the nerve roots hang like a horse’s tail: the **cauda equina**.',
    'Count the vertebrae, then look at **each disc** for height and brightness, then the **canal** for the CSF all around the cord or roots.',
    'A **herniated disc** bulges backwards into the canal, usually at **L4/5 or L5/S1**, and may press on a nerve root.',
    'Scans are interpreted **with the symptoms**: many people have disc bulges on MRI without any pain.',
  ],
  sections: [
    {
      id: 'anatomy',
      title: 'The anatomy in a side view',
      blocks: [
        {
          t: 'table',
          head: ['Structure', 'Where', 'On T2'],
          rows: [
            ['Vertebral body', 'The front block of each vertebra', 'Grey, with a darker rim'],
            ['Intervertebral disc', 'Between the bodies', 'Bright centre (nucleus pulposus), darker outer ring (annulus)'],
            ['Spinal canal / CSF', 'Behind the bodies', 'Bright'],
            ['Spinal cord', 'Inside the canal, down to L1 to L2', 'Grey band in bright CSF'],
            ['Conus medullaris', 'The tip of the cord', 'Tapering grey end'],
            ['Cauda equina', 'Below the conus', 'Thin dark threads in bright CSF'],
            ['Spinous process', 'The bony ridge at the back', 'Grey, with dark fat and ligaments around it'],
          ],
        },
      ],
    },
    {
      id: 'normal',
      title: 'A normal lumbar spine',
      lead: 'Anterior is on the left. Click each structure, or switch to Quiz me.',
      blocks: [{ t: 'med-chart', viz: 'imaging', case: 'spine-normal' }],
    },
    {
      id: 'approach',
      title: 'How to read it',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Alignment: do the front edges of the vertebral bodies form a smooth line?',
            'Marrow: is the signal even, or are there lesions?',
            'Each disc: its height, and is the bright centre still bright (a dark disc has lost water)?',
            'Canal: is CSF visible all round the cord or roots, or has it been squeezed out?',
            'Cord: its level, shape and signal; where is the conus?',
            'Soft tissues behind and in front of the spine.',
          ],
        },
      ],
    },
    {
      id: 'herniation',
      title: 'A disc herniation',
      lead: 'Compare the L4/5 disc with the others: it is darker, flatter and pushes back into the canal.',
      blocks: [
        { t: 'med-chart', viz: 'imaging', case: 'spine-herniation' },
        {
          t: 'levels',
          caption: 'A rough ladder of disc change, from mild to severe.',
          items: [
            { name: 'Degeneration', body: 'The disc dries out: lower, darker on T2.' },
            { name: 'Bulge', body: 'The disc spreads evenly beyond its edge, over much of its rim.' },
            { name: 'Protrusion', body: 'A focal lump pushes out, with a base wider than its depth.' },
            { name: 'Extrusion', body: 'Disc material breaks through the outer ring and lies beyond it.' },
            { name: 'Sequestration', body: 'A fragment separates and may migrate in the canal.' },
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Red flags', text: 'Back pain with numbness around the groin or saddle area, trouble passing urine or opening the bowels, or weakness in both legs can mean pressure on the cauda equina and is an emergency. Seek urgent medical care.' },
      ],
    },
  ],
  sources: [
    'Fardon, D. F., et al. (2014). Lumbar disc nomenclature version 2.0. Spine Journal.',
    'Grainger and Allison’s Diagnostic Radiology (7th ed.). Elsevier.',
    'Radiopaedia.org. Lumbar spine MRI reading guide.',
  ],
  related: ['medicine/chart-reading/mri-basics', 'medicine/chart-reading/bone-xray', 'medicine/chart-reading/practice-workspace'],
}

export default guide
