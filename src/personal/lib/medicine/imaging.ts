// Teaching cases for the image-reading tools. The pictures in public/medical/ are
// computer-generated phantoms (see scripts/medical-phantoms), not patient images.

export type ImagingFinding = {
  id: string
  label: string
  // [x, y, width, height] as fractions of the image.
  box: [number, number, number, number]
  detail: string
  // 'structure' is normal anatomy to identify, 'finding' is an abnormality.
  kind: 'structure' | 'finding'
  // Sequences (variant ids) on which this is clearly visible; all if omitted.
  seq?: string[]
}

export type ImagingCase = {
  id: string
  set: 'cxr' | 'bone' | 'mri-brain' | 'mri-spine'
  title: string
  modality: string
  summary: string
  variants: { id: string; label: string; src: string }[]
  findings: ImagingFinding[]
  // A systematic reading order for the normal case.
  approach: string[]
}

export const IMAGING_SETS: Record<ImagingCase['set'], string> = {
  cxr: 'Chest X-ray',
  bone: 'Bone X-ray',
  'mri-brain': 'MRI brain',
  'mri-spine': 'MRI spine',
}
