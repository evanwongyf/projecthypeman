/**
 * Exercise library for runners, filtered from free-exercise-db
 * (https://github.com/yuhonas/free-exercise-db, public domain / Unlicense).
 * Only lower-body, trunk, plyometric and mobility work is kept. The JSON is
 * loaded on demand so it stays out of the main bundle.
 */

export type Exercise = {
  id: string
  name: string
  group: 'strength' | 'plyometrics' | 'mobility' | 'conditioning'
  level: 'beginner' | 'intermediate' | 'expert'
  equipment: string
  primary: string[]
  secondary: string[]
  steps: string[]
  images: string[]
}

export const IMAGE_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/'

export async function loadExercises(): Promise<Exercise[]> {
  const mod = await import('./exercises.json')
  return mod.default as Exercise[]
}

/** A search on YouTube for a form demo — the dataset itself has no videos. */
export function videoSearchUrl(name: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} exercise how to`)}`
}

/** A short starter set, with why each one matters for running. */
export const ESSENTIALS: { id: string; why: string }[] = [
  { id: 'Split_Squat_with_Dumbbells', why: 'Single-leg strength for every stride; loads quads and glutes.' },
  { id: 'Kettlebell_One-Legged_Deadlift', why: 'Hamstrings, glutes and balance on one leg — mirrors stance phase.' },
  { id: 'Romanian_Deadlift', why: 'Heavy posterior-chain strength for power and hamstring resilience.' },
  { id: 'Dumbbell_Step_Ups', why: 'Hill strength and knee-over-toe control.' },
  { id: 'Calf_Raise_On_A_Dumbbell', why: 'Calves take several times body weight each step; strong calves protect the Achilles.' },
  { id: 'Single_Leg_Glute_Bridge', why: 'Glute activation and hip extension.' },
  { id: 'Side_Bridge', why: 'Lateral trunk stability so the pelvis stays level.' },
  { id: 'Plank', why: 'Trunk stiffness to transfer force.' },
  { id: 'Lateral_Bound', why: 'Plyometric: side-to-side power and ankle stability.' },
  { id: 'Front_Cone_Hops_or_hurdle_hops', why: 'Plyometric: quick, stiff two-footed contacts.' },
  { id: 'Single-Leg_Hop_Progression', why: 'Plyometric: single-leg reactive strength, the running pattern.' },
  { id: 'Fast_Skipping', why: 'Drill: rhythm, knee drive and quick contacts.' },
]
