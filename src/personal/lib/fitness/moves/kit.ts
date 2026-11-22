import type { Muscle } from '../figure'
import { mirror, pose } from '../pose'
import type { Key } from '../pose'
import type { Motion } from '../stage'

// Shared pieces for writing exercises. See pose.ts for what each angle means.

export type Exercise = Motion & {
  name: string
  muscles: Muscle[]
  // How to do it, in order.
  steps: string[]
  // Short things to think about while doing it.
  cues: string[]
  mistakes: string[]
  // A sensible starting amount.
  dose?: string
  easier?: string
  harder?: string
}

type P = Parameters<typeof pose>[0]

export const k = (at: number, p: P = {}): Key => ({ at, pose: pose(p) })

// The same key with the sides swapped, for the second half of an alternating exercise.
export const km = (at: number, p: P = {}): Key => ({ at, pose: mirror(pose(p)) })

// The ankle angle that keeps a foot flat on the floor for a given body tilt, hip and knee.
export const flat = (pitch: number, hip: number, knee: number) => pitch - hip + knee

// A pose held for a while: the same pose at two points in the cycle.
export const hold = (from: number, to: number, p: P): Key[] => [k(from, p), k(to, p)]

// Hands in a boxing guard, fists by the chin.
export const GUARD = { shoulder: [38, 18, 0], elbow: 138, grip: 1 }
