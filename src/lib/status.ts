import type { DisplayState, Homework } from './types'

/** Local midnight today, so a due date is only overdue once the day has fully passed. */
function endOfDueDay(dueDate: string): number {
  const [y, m, d] = dueDate.split('-').map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1, 23, 59, 59, 999).getTime()
}

/**
 * Assigned (yellow) until collected (green); once the due date has passed and it
 * still isn't in, it reads overdue (red).
 */
export function displayState(hw: Homework, studentId: string, now: number = Date.now()): DisplayState {
  if (hw.submissions[studentId] === 'collected') return 'collected'
  return now > endOfDueDay(hw.dueDate) ? 'overdue' : 'assigned'
}

export const STATE_LABEL: Record<DisplayState, string> = {
  assigned: 'Assigned',
  overdue: 'Overdue',
  collected: 'Collected',
}

export const STATE_CHIP: Record<DisplayState, string> = {
  assigned: 'chip chip-assigned',
  overdue: 'chip chip-overdue',
  collected: 'chip chip-collected',
}

/** Sort weight for "sort by completion": outstanding work floats to the top. */
export const STATE_WEIGHT: Record<DisplayState, number> = {
  overdue: 0,
  assigned: 1,
  collected: 2,
}

export function isOverdue(hw: Homework, now: number = Date.now()): boolean {
  return now > endOfDueDay(hw.dueDate)
}

/** Count of collected vs. total for a homework across a roster. */
export function tally(hw: Homework, studentIds: string[], now: number = Date.now()) {
  let collected = 0
  let overdue = 0
  for (const id of studentIds) {
    const state = displayState(hw, id, now)
    if (state === 'collected') collected += 1
    else if (state === 'overdue') overdue += 1
  }
  return { collected, overdue, total: studentIds.length, outstanding: studentIds.length - collected }
}
