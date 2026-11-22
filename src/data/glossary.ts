import { THEORY } from './theory'

/**
 * The glossary is every term defined in the theory articles, plus the shoe,
 * apparel and maths terms that live outside them. De-duplicated by term.
 */
const EXTRA: { term: string; def: string; area: string }[] = [
  { term: 'VO₂', def: 'Oxygen uptake, the rate the body uses oxygen, in ml/kg/min.', area: 'Maths' },
  { term: 'ACSM equation', def: 'VO₂ = 0.2·v + 0.9·v·grade + 3.5, the American College of Sports Medicine estimate of running oxygen cost.', area: 'Maths' },
  { term: 'Daniels–Gilbert equations', def: 'Two fitted curves for the oxygen cost of speed and the sustainable fraction of VO₂max over time; the basis of VDOT.', area: 'Maths' },
  { term: 'Metabolic power', def: 'Energy used per second per kg, in W/kg, roughly cost per metre × speed.', area: 'Maths' },
  { term: 'Drafting', def: 'Running behind others to reduce air resistance.', area: 'Maths' },
  { term: 'Stack height', def: 'The thickness of material under the foot, usually measured at the heel and forefoot.', area: 'Shoes' },
  { term: 'Drop (offset)', def: 'Heel stack minus forefoot stack, in millimetres.', area: 'Shoes' },
  { term: 'Midsole', def: 'The foam layer of a shoe between outsole and foot.', area: 'Shoes' },
  { term: 'Outsole', def: 'The ground-contact layer, usually rubber.', area: 'Shoes' },
  { term: 'Energy return', def: 'The share of energy put into a foam during compression that it gives back on rebound.', area: 'Shoes' },
  { term: 'Super shoe', def: 'A shoe combining high-rebound foam, a stiff plate and a rocker, shown to reduce the energy cost of running.', area: 'Shoes' },
  { term: 'Rocker', def: 'A curved sole that helps the foot roll forward.', area: 'Shoes' },
  { term: 'Supercritical foaming', def: 'Foaming a polymer with gas held above its critical point, producing fine, even cells.', area: 'Shoes' },
  { term: 'PEBA', def: 'Polyether block amide, the light, high-rebound foam in most super shoes.', area: 'Shoes' },
  { term: 'EVA', def: 'Ethylene-vinyl acetate, the classic midsole foam.', area: 'Shoes' },
  { term: 'TPU', def: 'Thermoplastic polyurethane, durable, springy, used in bead foams like Boost.', area: 'Shoes' },
  { term: 'Pronation', def: 'The natural inward roll of the foot after landing. "Overpronation" is a loosely defined label for more of it.', area: 'Shoes' },
  { term: 'Moisture regain', def: 'How much water a fibre absorbs from the air, as a % of its dry mass. Low regain fibres dry faster.', area: 'Apparel' },
  { term: 'Wicking', def: 'Moving sweat along a fabric by capillary action so it can evaporate.', area: 'Apparel' },
  { term: 'UPF', def: 'Ultraviolet protection factor, how much UV a fabric blocks.', area: 'Apparel' },
  { term: 'Foot contact', def: 'One landing, the unit used to count plyometric volume.', area: 'Strength' },
]

export type GlossaryEntry = { term: string; def: string; area: string }

export const GLOSSARY: GlossaryEntry[] = (() => {
  const seen = new Map<string, GlossaryEntry>()
  for (const a of THEORY) for (const t of a.terms) if (!seen.has(t.term.toLowerCase())) seen.set(t.term.toLowerCase(), { ...t, area: a.topic })
  for (const t of EXTRA) if (!seen.has(t.term.toLowerCase())) seen.set(t.term.toLowerCase(), t)
  return [...seen.values()].sort((a, b) => a.term.localeCompare(b.term))
})()
