import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Magnetic resonance imaging (MRI) makes pictures of soft tissue, the brain and the spine without any ionising radiation, by using a strong magnet and radio waves. One scan produces several sequences, each a differently weighted picture of the same slice, and the skill of reading an MRI begins with knowing which sequence you are looking at. This page explains how the pictures are made, how to tell T1, T2, FLAIR and DWI apart, and how to read a brain scan, with annotatable phantoms.',
  nutshell: [
    'An MRI uses a **strong magnet** and **radio pulses**. It uses **no X-rays**, so there is no ionising radiation.',
    'The brightness of a tissue depends on the **sequence**. The quickest way to identify a sequence is to look at the **fluid (CSF)**: **dark on T1 and FLAIR, bright on T2**.',
    '**T1** shows anatomy; **T2** is sensitive to fluid and disease; **FLAIR** is T2 with the CSF turned off, so lesions next to the ventricles stand out; **DWI** lights up an **acute infarct**.',
    'In an axial image, the patient’s **right is on the left of the picture** (radiological convention), as if you were looking up from the feet.',
    'Always screen for **metal** and implants before a scan: the magnet can move or heat some devices.',
  ],
  sections: [
    {
      id: 'how',
      title: 'How an MRI makes a picture',
      blocks: [
        {
          t: 'flow',
          title: 'From magnet to picture',
          nodes: [
            { label: 'Strong magnet', sub: 'hydrogen nuclei line up', tone: 'process' },
            { label: 'Radio pulse', sub: 'tips them over', tone: 'process' },
            { label: 'Relaxation', sub: 'they release the energy', tone: 'model' },
            { label: 'Signal', sub: 'received by coils', tone: 'data' },
            { label: 'Image', sub: 'computed slice by slice', tone: 'output' },
          ],
        },
        { t: 'p', text: 'The body is mostly water and fat, both rich in hydrogen. In a strong magnetic field (typically 1.5 or 3 tesla) the hydrogen nuclei line up. A pulse of radio waves knocks them out of line, and as they relax back they give off a signal. How fast they relax differs between tissues, and that difference is what makes the contrast. T1 and T2 are two different relaxation times; the technician chooses the timing (TR and TE) to emphasise one or the other.' },
      ],
    },
    {
      id: 'sequences',
      title: 'The four sequences to know',
      blocks: [
        {
          t: 'table',
          head: ['Sequence', 'CSF (fluid)', 'Fat', 'Grey vs white matter', 'Best for'],
          rows: [
            ['T1', 'Dark', 'Bright', 'White brighter than grey', 'Anatomy; contrast-enhanced scans'],
            ['T2', 'Bright', 'Bright (fast spin echo)', 'Grey brighter than white', 'Fluid and most disease'],
            ['FLAIR', 'Dark (suppressed)', 'Medium', 'Grey slightly brighter than white', 'Lesions next to CSF: MS, oedema, infarct'],
            ['DWI', 'Dark', 'Dark', 'Little difference', 'Acute stroke (bright) and abscess'],
          ],
          caption: 'To identify a sequence in a second: look at the fluid in the ventricles.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'T1', title: 'Fat bright, fluid dark', body: 'Good detail of anatomy. After gadolinium contrast, areas with a leaky blood-brain barrier (tumour, infection) brighten.' },
            { tag: 'T2', title: 'Fluid bright', body: 'Most pathology holds more water, so it is bright. A good all-round sequence for finding disease.' },
            { tag: 'FLAIR', title: 'T2 with CSF removed', body: 'The bright CSF is cancelled, so small lesions near the ventricles and cortex are not hidden. Used for MS, stroke and oedema.' },
            { tag: 'DWI', title: 'Restricted diffusion', body: 'Water cannot move freely in a recent infarct, so it is very bright, within minutes to hours of onset. A matching ADC map is dark.' },
          ],
        },
      ],
    },
    {
      id: 'normal',
      title: 'A normal brain on four sequences',
      lead: 'Switch between T1, T2, FLAIR and DWI above the image: watch the CSF in the ventricles change. In Quiz me, try to place each structure.',
      blocks: [{ t: 'med-chart', viz: 'imaging', case: 'mri-normal' }],
    },
    {
      id: 'approach',
      title: 'How to look at a brain scan',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Which sequence?', body: 'Look at the CSF. Dark ventricles with a bright scalp: T1. Bright ventricles: T2. Dark ventricles and a bright lesion: FLAIR. Dark everything with a bright spot: DWI.' },
            { title: 'Is it symmetrical?', body: 'The two hemispheres should look like mirror images. Compare left with right all the way through.' },
            { title: 'Ventricles and midline', body: 'Are the ventricles a normal size and the same size? Is the midline straight? A shift means something is pushing.' },
            { title: 'Grey and white matter', body: 'Is the boundary between cortex and white matter clear? Loss of the boundary is an early sign of a stroke.' },
            { title: 'Abnormal signal', body: 'Anything bright on T2 and FLAIR (more water), dark on T1, or bright on DWI. Where is it, how big is it, what shape, and is there oedema or mass effect?' },
            { title: 'Outside the brain', body: 'Skull, scalp, sinuses and the spaces around the brain.' },
          ],
        },
      ],
    },
    {
      id: 'cases',
      title: 'Three abnormal brains',
      lead: 'Explore a tumour with swelling, an acute stroke and hydrocephalus. Change the sequence to see which one shows each finding best.',
      blocks: [
        { t: 'med-chart', viz: 'imaging', set: 'mri-brain' },
        {
          t: 'table',
          head: ['Case', 'The clue', 'Sequence that shows it best'],
          rows: [
            ['Mass with oedema', 'A rounded lesion, a bright halo of oedema on T2 and FLAIR, midline pushed across', 'FLAIR and T2 for oedema, T1 for the mass'],
            ['Acute infarct', 'A bright wedge on DWI in a vascular territory', 'DWI (FLAIR may still be nearly normal early)'],
            ['Hydrocephalus', 'Large, rounded ventricles, squeezed sulci', 'T2'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Time is brain', text: 'In an acute stroke, millions of brain cells die every minute, so the treatments (clot-busting drugs and clot retrieval) are time-critical. Facial droop, arm weakness or speech difficulty need an emergency call (995 in Singapore). The FAST mnemonic (Face, Arms, Speech, Time) is a quick check.' },
      ],
    },
    {
      id: 'safety',
      title: 'MRI safety and comparison with CT',
      blocks: [
        {
          t: 'table',
          head: ['', 'CT', 'MRI'],
          rows: [
            ['Radiation', 'Uses X-rays (ionising)', 'None'],
            ['Speed', 'Seconds, so good in emergencies', '20 to 60 minutes'],
            ['Best at', 'Bone, acute bleeding, lungs, trauma', 'Soft tissue, brain, spinal cord, joints'],
            ['Cautions', 'Radiation dose; contrast allergy and kidneys', 'Metal and implants; claustrophobia; noise; cannot move'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Metal and the magnet', text: 'The magnet is always on. Never take metal near a scanner: ferromagnetic objects can fly. Patients are screened for pacemakers, some implants, metal fragments and other devices before a scan.' },
      ],
    },
  ],
  sources: [
    'Weissleder, R., Rieumont, M. J., and Wittenberg, J. (2007). Primer of Diagnostic Imaging (4th ed.). Mosby.',
    'Grainger and Allison’s Diagnostic Radiology (7th ed.). Elsevier.',
    'Radiopaedia.org. MRI sequences and brain MRI reading guides.',
  ],
  related: ['medicine/chart-reading/mri-spine', 'medicine/chart-reading/chest-xray', 'medicine/chart-reading/practice-workspace'],
}

export default guide
