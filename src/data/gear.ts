/**
 * Gear archive: shoe types, midsole materials, models and apparel fabrics.
 *
 * Model specs are the brand-listed figures for the version named. Shoes are
 * updated often, and drop/stack are measured differently by different labs,
 * so treat the numbers as a guide and check the current version.
 */

export type ShoeType = {
  id: string
  name: string
  what: string
  goodFor: string
  watchOut: string
}

export const SHOE_TYPES: ShoeType[] = [
  {
    id: 'daily',
    name: 'Daily trainer',
    what: 'Balanced cushioning and durability for most of your weekly kilometres.',
    goodFor: 'Easy runs, long runs, the one shoe if you only own one.',
    watchOut: 'Can feel heavy for fast sessions.',
  },
  {
    id: 'max',
    name: 'Max cushion',
    what: 'Tall, soft stacks of foam that reduce impact feel.',
    goodFor: 'Recovery runs, long runs, high mileage, tired legs.',
    watchOut: 'Less ground feel and less stable on tight corners.',
  },
  {
    id: 'stability',
    name: 'Stability',
    what: 'Firmer foam, wider bases or guide rails to limit excessive inward roll.',
    goodFor: 'Runners who prefer more support or who feel unstable in neutral shoes.',
    watchOut: 'Comfort matters more than a "pronation" label — try before you buy.',
  },
  {
    id: 'tempo',
    name: 'Lightweight / tempo',
    what: 'Lighter, livelier shoes, sometimes with a nylon or partial plate.',
    goodFor: 'Tempo runs, intervals, shorter races, uptempo long runs.',
    watchOut: 'Usually less durable than daily trainers.',
  },
  {
    id: 'race',
    name: 'Plated "super shoe"',
    what: 'High-rebound foam (often PEBA-based) with a stiff carbon plate or rods and a rocker.',
    goodFor: 'Races and key race-pace sessions, 5K to marathon.',
    watchOut: 'Expensive, wear out faster, and can feel unstable at slow paces.',
  },
  {
    id: 'trail',
    name: 'Trail',
    what: 'Grippy lugged outsoles, tougher uppers and often rock plates.',
    goodFor: 'Dirt, mud, rocks and steep terrain.',
    watchOut: 'Lugs feel clunky and wear fast on roads.',
  },
  {
    id: 'minimal',
    name: 'Low or zero drop',
    what: 'Little or no height difference between heel and forefoot.',
    goodFor: 'Runners who like a more natural foot position; strengthening feet and calves.',
    watchOut: 'Transition slowly — it shifts load to the calves and Achilles.',
  },
]

export type Material = { name: string; kind: string; feel: string; notes: string }

export const MIDSOLE_FOAMS: Material[] = [
  {
    name: 'EVA',
    kind: 'Ethylene-vinyl acetate',
    feel: 'Light, cheap, moderately bouncy',
    notes: 'The classic midsole foam. Compresses and loses bounce over time. Most budget and older shoes.',
  },
  {
    name: 'Supercritical EVA',
    kind: 'EVA foamed with gas (nitrogen or CO₂)',
    feel: 'Lighter and bouncier than standard EVA',
    notes: 'Gas-injected processing makes finer, more uniform cells. Common in modern daily trainers.',
  },
  {
    name: 'TPU',
    kind: 'Thermoplastic polyurethane beads',
    feel: 'Very durable, springy, heavier',
    notes: 'Expanded TPU bead foams keep their feel over many kilometres and in cold weather, but weigh more.',
  },
  {
    name: 'PEBA',
    kind: 'Polyether block amide',
    feel: 'Extremely light, soft and high rebound',
    notes: 'The foam family behind most super shoes. Returns the most energy, but costs more and wears faster.',
  },
  {
    name: 'TPE / blends',
    kind: 'Thermoplastic elastomers, often blended with EVA',
    feel: 'Between EVA and PEBA',
    notes: 'Brands mix polymers to balance rebound, durability and cost.',
  },
]

export const SHOE_PARTS: Material[] = [
  {
    name: 'Carbon plate',
    kind: 'Stiff full-length plate',
    feel: 'Snappy, propulsive at speed',
    notes: 'Works with soft foam and a rocker to reduce energy lost at the toes. Largest benefit at faster paces.',
  },
  {
    name: 'Nylon / composite plate',
    kind: 'Flexible plate',
    feel: 'Lively but forgiving',
    notes: 'Cheaper and more forgiving than carbon; common in tempo shoes.',
  },
  {
    name: 'Rocker geometry',
    kind: 'Curved sole shape',
    feel: 'Rolls you forward',
    notes: 'Reduces how much the ankle and toes have to work. Can help tired legs.',
  },
  {
    name: 'Heel-to-toe drop',
    kind: 'Heel height minus forefoot height',
    feel: 'High drop = more heel lift',
    notes: 'Lower drop loads the calves and Achilles more; higher drop loads the knees a little more. Change gradually.',
  },
  {
    name: 'Stack height',
    kind: 'Amount of material under the foot',
    feel: 'Taller = more cushioning, less ground feel',
    notes: 'World Athletics limits road racing shoes to 40 mm of sole thickness for elite competition.',
  },
  {
    name: 'Outsole rubber',
    kind: 'Carbon or blown rubber',
    feel: 'Grip and durability',
    notes: 'Carbon rubber lasts longer; blown rubber is lighter and softer. Super shoes often use very little.',
  },
]

export type ShoeModel = {
  brand: string
  model: string
  type: ShoeType['id']
  foam: string
  plate: string
  dropMm: number
}

export const SHOE_MODELS: ShoeModel[] = [
  { brand: 'Nike', model: 'Pegasus 41', type: 'daily', foam: 'ReactX + Air Zoom units', plate: 'None', dropMm: 10 },
  { brand: 'Nike', model: 'Vaporfly 3', type: 'race', foam: 'ZoomX (PEBA)', plate: 'Carbon', dropMm: 8 },
  { brand: 'Nike', model: 'Alphafly 3', type: 'race', foam: 'ZoomX (PEBA) + Air Zoom pods', plate: 'Carbon', dropMm: 8 },
  { brand: 'Adidas', model: 'Adizero Adios Pro 3', type: 'race', foam: 'Lightstrike Pro', plate: 'Carbon EnergyRods', dropMm: 6.5 },
  { brand: 'Adidas', model: 'Adizero Boston 12', type: 'tempo', foam: 'Lightstrike Pro + Lightstrike 2.0', plate: 'Glass-fibre EnergyRods', dropMm: 6.5 },
  { brand: 'ASICS', model: 'Novablast 4', type: 'daily', foam: 'FF Blast+ Eco', plate: 'None', dropMm: 8 },
  { brand: 'ASICS', model: 'Gel-Nimbus 26', type: 'max', foam: 'FF Blast+ Eco + PureGEL', plate: 'None', dropMm: 8 },
  { brand: 'ASICS', model: 'Gel-Kayano 31', type: 'stability', foam: 'FF Blast+ Eco', plate: 'None', dropMm: 10 },
  { brand: 'ASICS', model: 'Superblast 2', type: 'tempo', foam: 'FF Turbo+ / FF Blast+', plate: 'None', dropMm: 8 },
  { brand: 'ASICS', model: 'Metaspeed Sky Paris', type: 'race', foam: 'FF Turbo+', plate: 'Carbon', dropMm: 5 },
  { brand: 'Hoka', model: 'Clifton 9', type: 'daily', foam: 'Compression-moulded EVA', plate: 'None', dropMm: 5 },
  { brand: 'Hoka', model: 'Bondi 8', type: 'max', foam: 'Compression-moulded EVA', plate: 'None', dropMm: 4 },
  { brand: 'Hoka', model: 'Mach 6', type: 'tempo', foam: 'Supercritical EVA', plate: 'None', dropMm: 5 },
  { brand: 'Hoka', model: 'Speedgoat 6', type: 'trail', foam: 'Supercritical EVA', plate: 'None', dropMm: 5 },
  { brand: 'Brooks', model: 'Ghost 16', type: 'daily', foam: 'DNA Loft v3', plate: 'None', dropMm: 12 },
  { brand: 'Brooks', model: 'Glycerin 21', type: 'max', foam: 'DNA Loft v3', plate: 'None', dropMm: 10 },
  { brand: 'Brooks', model: 'Adrenaline GTS 24', type: 'stability', foam: 'DNA Loft v3 + GuideRails', plate: 'None', dropMm: 12 },
  { brand: 'Saucony', model: 'Triumph 22', type: 'max', foam: 'PWRRUN PB', plate: 'None', dropMm: 10 },
  { brand: 'Saucony', model: 'Kinvara 15', type: 'tempo', foam: 'PWRRUN', plate: 'None', dropMm: 4 },
  { brand: 'Saucony', model: 'Endorphin Speed 4', type: 'tempo', foam: 'PWRRUN PB', plate: 'Nylon', dropMm: 8 },
  { brand: 'Saucony', model: 'Endorphin Pro 4', type: 'race', foam: 'PWRRUN HG + PWRRUN PB', plate: 'Carbon', dropMm: 8 },
  { brand: 'New Balance', model: 'Fresh Foam X 1080v14', type: 'max', foam: 'Fresh Foam X', plate: 'None', dropMm: 6 },
  { brand: 'New Balance', model: 'FuelCell SC Elite v4', type: 'race', foam: 'FuelCell (PEBA blend)', plate: 'Carbon', dropMm: 4 },
  { brand: 'Altra', model: 'Torin 7', type: 'minimal', foam: 'Altra EGO MAX', plate: 'None', dropMm: 0 },
]

export const APPAREL: Material[] = [
  {
    name: 'Polyester',
    kind: 'Synthetic',
    feel: 'Light, quick-drying, wicks sweat',
    notes: 'The default for running tops and shorts. Holds odour more than natural fibres.',
  },
  {
    name: 'Nylon',
    kind: 'Synthetic',
    feel: 'Strong, smooth, abrasion resistant',
    notes: 'Common in shorts, jackets and tights. Slightly slower drying than polyester.',
  },
  {
    name: 'Elastane (Spandex / Lycra)',
    kind: 'Stretch fibre blended in',
    feel: 'Stretch and recovery',
    notes: 'Small percentages give tights, liners and compression gear their fit.',
  },
  {
    name: 'Merino wool',
    kind: 'Natural',
    feel: 'Soft, warm when wet, resists odour',
    notes: 'Great for socks and cool-weather layers. Pricier and less durable than synthetics.',
  },
  {
    name: 'Polypropylene',
    kind: 'Synthetic',
    feel: 'Very light, hydrophobic',
    notes: 'Used in base layers to move sweat away from skin.',
  },
  {
    name: 'Cotton',
    kind: 'Natural',
    feel: 'Soft but absorbs and holds water',
    notes: 'Gets heavy and causes chafing when wet. Best avoided for running, especially in humidity.',
  },
  {
    name: 'Mesh panels',
    kind: 'Construction',
    feel: 'Ventilation',
    notes: 'Open-knit zones under the arms and on the back dump heat — valuable in hot climates.',
  },
  {
    name: 'Compression',
    kind: 'Construction',
    feel: 'Snug, supportive',
    notes: 'Evidence for performance gains is weak; some runners find calf sleeves or shorts comfortable and reduce soreness.',
  },
  {
    name: 'Waterproof membranes',
    kind: 'Laminated layer',
    feel: 'Keeps rain out, traps some heat',
    notes: 'Useful for cold rain. In tropical heat a light windproof or nothing is usually better.',
  },
  {
    name: 'UPF fabrics',
    kind: 'Sun-protective weave',
    feel: 'Blocks UV',
    notes: 'Light colours plus UPF help on long sunny runs; a cap shades the face.',
  },
]
