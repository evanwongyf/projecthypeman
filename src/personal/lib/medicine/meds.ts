// The medication reference: real US prescription data (generic/brand names, drug class,
// dosage forms, strength, and real pill photos from the NIH National Library of Medicine's
// Pillbox programme, public domain). The clinical text (uses, mechanism, side effects,
// warnings) is written for this reference and is educational, not medical advice: always
// follow the label and a pharmacist or doctor's instructions for an actual medicine.

export type PillPhoto = {
  splimage: string
  color: string
  shape: string
  dosageForm: string
  imprint: string
  strength: string
  manufacturer: string
}

export type Medication = {
  id: string
  class: string
  generic: string
  brands: string[]
  brandNote: string | null
  forms: string[]
  uses: string
  mechanism: string
  commonSE: string[]
  seriousSE: string[]
  warning: string
  status: string // OTC | Rx | C-II..C-V
  pregnancy: string
  pill?: PillPhoto
}

export const MEDS_URL = '/medicine/meds.json'
export const CLASSES_URL = '/medicine/classes.json'
export const PILL_ART = (splimage: string, nobg = false) => `/medicine/pills/${splimage}${nobg ? '_nobg' : ''}.webp`

let meds: Medication[] = []
let classBlurbs: Record<string, string> = {}
let loading: Promise<Medication[]> | null = null

export function loadMeds(): Promise<Medication[]> {
  loading ??= Promise.all([fetch(MEDS_URL).then((r) => r.json()), fetch(CLASSES_URL).then((r) => r.json())]).then(([m, c]) => {
    meds = m as Medication[]
    classBlurbs = c as Record<string, string>
    return meds
  })
  return loading
}

export function allMeds(): Medication[] {
  return meds
}
export function medsLoaded(): boolean {
  return meds.length > 0
}
export function classList(): string[] {
  return [...new Set(meds.map((m) => m.class))]
}
export function classBlurb(name: string): string {
  return classBlurbs[name] ?? ''
}
export function lookupMed(id: string): Medication | undefined {
  return meds.find((m) => m.id === id)
}
export function medsForClass(name: string): Medication[] {
  return meds.filter((m) => m.class === name)
}
