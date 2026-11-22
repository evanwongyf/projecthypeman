/**
 * Deeper material science for the Shoes and Apparel tabs: foam families,
 * shoe anatomy and fibre data used by the detail views and charts.
 */

export type FoamFamily = {
  id: 'peba' | 'tpee' | 'tpu' | 'scf-eva' | 'nitro-eva' | 'eva'
  name: string
  chemistry: string
  howMade: string
  feel: string
  durability: string
  examples: string
  /** Lower-case substrings that identify a shoe's foam as this family. */
  match: string[]
}

/** Ordered most-specific first: the first family whose `match` hits wins. */
export const FOAM_FAMILIES: FoamFamily[] = [
  {
    id: 'peba',
    name: 'PEBA (polyether block amide)',
    chemistry: 'A thermoplastic elastomer of alternating hard polyamide and soft polyether segments. The soft segments give stretch; the hard ones give spring-back.',
    howMade: 'Usually foamed with supercritical gas into very fine, closed cells, giving extremely low density.',
    feel: 'Very light, soft on landing and highly resilient — the most energy-returning mass-market foam.',
    durability: 'Loses some bounce sooner than EVA or TPU and scuffs easily, which is why racers use little outsole rubber.',
    examples: 'Nike ZoomX, ASICS FF Turbo+, Saucony PWRRUN PB / HG, New Balance FuelCell racers, Hoka PEBA racers.',
    match: ['peba', 'zoomx', 'ff turbo', 'pwrrun pb', 'pwrrun hg', 'fuelcell', 'dna gold'],
  },
  {
    id: 'tpee',
    name: 'TPEE (thermoplastic polyester elastomer)',
    chemistry: 'A polyester-based elastomer with a hard/soft segment structure similar to PEBA.',
    howMade: 'Supercritically foamed into a light, springy midsole.',
    feel: 'Light and bouncy, often a touch firmer than PEBA.',
    durability: 'Generally good; still a newer material in running shoes.',
    examples: 'Saucony IncrediRUN. Adidas Lightstrike Pro is widely reported to be an elastomer-based super foam.',
    match: ['tpee', 'incredirun', 'lightstrike pro'],
  },
  {
    id: 'tpu',
    name: 'TPU (thermoplastic polyurethane)',
    chemistry: 'Polyurethane elastomer, often expanded into beads (E-TPU) that are fused together.',
    howMade: 'Beads are expanded with gas, then steam-moulded into the midsole shape.',
    feel: 'Springy and lively, but heavier than PEBA or EVA for the same volume.',
    durability: 'Excellent — keeps its feel for many kilometres and in cold weather.',
    examples: 'Adidas Boost / Light Boost, Saucony PWRRUN+, Puma Nitro Elite (A-TPU).',
    match: ['tpu', 'boost', 'pwrrun+', 'nitro elite'],
  },
  {
    id: 'scf-eva',
    name: 'Supercritical EVA and blends',
    chemistry: 'EVA, sometimes blended with polymers such as olefin block copolymers (OBC), foamed with supercritical nitrogen or CO₂.',
    howMade: 'Gas dissolved under high pressure expands into a fine, even cell structure without chemical blowing agents.',
    feel: 'Lighter and bouncier than standard EVA, cheaper than PEBA.',
    durability: 'Good; between standard EVA and TPU.',
    examples: 'Hoka supercritical EVA, ASICS FF Blast / Blast+ / Blast Max, Nike ReactX, Adidas Dreamstrike+, Salomon Energy Foam.',
    match: ['supercritical', 'ff blast', 'reactx', 'dreamstrike', 'energy foam', 'obc', 'optifoam', 'helion', 'hyper burst'],
  },
  {
    id: 'nitro-eva',
    name: 'Nitrogen-infused foams',
    chemistry: 'Usually EVA- or olefin-based compounds foamed with nitrogen rather than chemical agents.',
    howMade: 'Nitrogen expands the compound, giving lighter, more resilient foam than conventional EVA.',
    feel: 'Light and responsive; character depends on the base polymer.',
    durability: 'Good.',
    examples: 'Brooks DNA Loft v3 and DNA Flash, Puma Nitro, Mizuno Enerzy NXT (brand-described blends).',
    match: ['dna', 'nitro', 'enerzy'],
  },
  {
    id: 'eva',
    name: 'EVA (ethylene-vinyl acetate)',
    chemistry: 'A copolymer of ethylene and vinyl acetate; more vinyl acetate makes it softer and more rubbery.',
    howMade: 'Foamed with chemical blowing agents, then often compression-moulded (CMEVA) for shape and consistency.',
    feel: 'Light, cushioned and stable; less bouncy than modern foams.',
    durability: 'Compresses and loses bounce over a few hundred kilometres.',
    examples: 'Hoka CMEVA, Altra EGO, New Balance Fresh Foam X, Topo ZipFoam, Nike Cushlon, Saucony PWRRUN, most budget shoes.',
    match: ['eva', 'ego', 'fresh foam', 'zipfoam', 'cushlon', 'pwrrun', 'floatpro', 'powerflow', 'react', 'lightstrike'],
  },
]

export function foamFamilyOf(foam: string): FoamFamily | null {
  const f = foam.toLowerCase()
  return FOAM_FAMILIES.find((fam) => fam.match.some((m) => f.includes(m))) ?? null
}

/** Mechanical energy return of three midsole foams, from Hoogkamer et al. (2018). */
export const FOAM_ENERGY_RETURN = [
  { label: 'PEBA (Vaporfly prototype)', value: 87 },
  { label: 'TPU (Adidas Boost)', value: 76 },
  { label: 'EVA (Nike Zoom Streak 6)', value: 66 },
]

/** Running Warehouse stack-height categories (heel stack, mm). */
export const STACK_BANDS = [
  { label: 'Barefoot', max: 13 },
  { label: 'Minimal', max: 18 },
  { label: 'Low', max: 23 },
  { label: 'Medium', max: 28 },
  { label: 'High', max: 34 },
  { label: 'Maximal', max: Infinity },
]

export function stackBand(heelMm: number) {
  return STACK_BANDS.find((b) => heelMm <= b.max)?.label ?? 'Maximal'
}

export type Part = { name: string; what: string; whyItMatters: string }

/** The anatomy of a running shoe, bottom to top. */
export const SHOE_ANATOMY: Part[] = [
  { name: 'Outsole', what: 'The rubber (or exposed foam) layer that touches the ground.', whyItMatters: 'Sets grip and durability. Carbon rubber wears best; blown rubber is lighter and softer; many racers leave foam exposed to save weight.' },
  { name: 'Lugs and tread', what: 'The pattern and depth of the outsole.', whyItMatters: 'Shallow, flat patterns suit roads; deep lugs (around 4–6 mm) bite into mud and loose trail but feel clunky on pavement.' },
  { name: 'Rock plate', what: 'A thin, stiff sheet (often TPU or composite) in trail shoes.', whyItMatters: 'Spreads the force of sharp rocks so they do not bruise the foot.' },
  { name: 'Midsole', what: 'The foam between outsole and foot — the engine of the shoe.', whyItMatters: 'Determines cushioning, energy return, stability and much of the weight. See the foam families.' },
  { name: 'Plate or rods', what: 'A stiff carbon, nylon, Pebax or glass-fibre insert in the midsole.', whyItMatters: 'Stiffens the forefoot and works with the rocker so the toes bend less, reducing energy lost at the joints and stabilising soft foam.' },
  { name: 'Rocker geometry', what: 'The curve of the sole from heel to toe.', whyItMatters: 'Helps the shoe roll forward, reducing ankle and toe work — useful on tired legs and in stiff, plated shoes.' },
  { name: 'Strobel board', what: 'The thin layer stitched to the bottom of the upper, between foot and midsole.', whyItMatters: 'Some shoes use a foam strobel for extra softness right under the foot.' },
  { name: 'Sockliner / insole', what: 'The removable layer you stand on.', whyItMatters: 'Adds step-in comfort and is part of the measured stack height.' },
  { name: 'Heel counter', what: 'A stiff or flexible cup around the back of the heel.', whyItMatters: 'Holds the heel in place; stiff counters add stability, flexible ones are kinder to the Achilles.' },
  { name: 'Upper', what: 'Everything above the sole: mesh, knit or woven fabric.', whyItMatters: 'Engineered mesh balances breathability and structure; knit stretches and hugs; race uppers are thin and less durable.' },
  { name: 'Toe box', what: 'The front of the upper around the toes.', whyItMatters: 'Wider toe boxes let toes splay; narrow ones lock the foot in for racing.' },
  { name: 'Drop (offset)', what: 'Heel stack minus forefoot stack.', whyItMatters: 'Lower drop loads the calf and Achilles more; higher drop loads the knee slightly more. Change it gradually.' },
]

/** Commercial moisture regain of fibres (ASTM D1909), % of dry mass. */
export const MOISTURE_REGAIN = [
  { label: 'Wool', value: 13.6 },
  { label: 'Cotton', value: 8.5 },
  { label: 'Nylon', value: 4.5 },
  { label: 'Elastane (spandex)', value: 1.3 },
  { label: 'Polyester', value: 0.4 },
  { label: 'Polypropylene', value: 0.0 },
]
