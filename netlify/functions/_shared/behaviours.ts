import type { Behaviour } from './types.js'

/**
 * The starting catalogue, seeded once per account and fully editable after.
 *
 * Positives get celebratory names — they are meant to be fun to collect and to
 * be said out loud in front of the class. Negatives get plain, factual names
 * that describe the behaviour and nothing about the child, because those get
 * said out loud too.
 */
export const DEFAULT_BEHAVIOURS: Omit<Behaviour, 'id' | 'createdAt'>[] = [
  // ---- positive ----
  { name: 'Big Brain', kind: 'positive', points: 2, note: 'Cracked something hard' },
  { name: 'Clutch', kind: 'positive', points: 2, note: 'Came through when it counted' },
  { name: 'Trailblazer', kind: 'positive', points: 2, note: 'First to try a new approach' },
  { name: 'Powerhouse', kind: 'positive', points: 1, note: 'Kept going without being asked' },
  { name: 'Spark', kind: 'positive', points: 1, note: 'Asked a question that moved the lesson' },
  { name: 'Anchor', kind: 'positive', points: 1, note: 'Helped someone else get there' },
  { name: 'Ice Cold', kind: 'positive', points: 1, note: 'Stayed calm under pressure' },
  { name: 'Sharpshooter', kind: 'positive', points: 1, note: 'Accurate, careful work' },
  { name: 'Encore', kind: 'positive', points: 1, note: 'Prepared again, every time' },
  { name: 'Momentum', kind: 'positive', points: 2, note: 'Clearly improving' },

  // ---- negative ----
  { name: 'Off task', kind: 'negative', points: 1 },
  { name: 'Talking over others', kind: 'negative', points: 1 },
  { name: 'Homework not done', kind: 'negative', points: 1 },
  { name: 'Late to class', kind: 'negative', points: 1 },
  { name: 'Unprepared', kind: 'negative', points: 1 },
  { name: 'Disrupting the lesson', kind: 'negative', points: 2 },
  { name: 'Phone out', kind: 'negative', points: 1 },
  { name: 'Unkind remark', kind: 'negative', points: 2 },
]
