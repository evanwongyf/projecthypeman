import { COMBAT } from './combat'
import { CONDITIONING } from './conditioning'
import type { Exercise } from './kit'
import { MOBILITY } from './mobility'
import { RUNNING } from './running'
import { STRENGTH } from './strength'

export type { Exercise } from './kit'

export const EXERCISES: Record<string, Exercise> = { ...RUNNING, ...STRENGTH, ...CONDITIONING, ...COMBAT, ...MOBILITY }
