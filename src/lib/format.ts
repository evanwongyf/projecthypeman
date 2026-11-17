/** Display name: preferred name when there is one, full name otherwise. */
export function displayName(student: { fullName: string; preferredName?: string }): string {
  return student.preferredName?.trim() || student.fullName
}

export function initials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

/** Surname-ish key for "sort by name" — last word, then the rest. */
export function nameKey(fullName: string): string {
  const parts = fullName.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (parts.length < 2) return fullName.trim().toLowerCase()
  return `${parts[parts.length - 1]} ${parts.slice(0, -1).join(' ')}`
}

const DATE_FMT = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
const STAMP_FMT = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

/** A plain YYYY-MM-DD, read as a local date. */
export function formatDate(iso: string): string {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return DATE_FMT.format(new Date(y, m - 1, d))
}

/** Full date + time, for note and incident entries. */
export function formatStamp(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return STAMP_FMT.format(date)
}

/** "in 3 days" / "2 days ago", relative to local midnight. */
export function dueRelative(dueDate: string, now: number = Date.now()): string {
  const [y, m, d] = dueDate.split('-').map(Number)
  if (!y || !m || !d) return ''
  const due = new Date(y, m - 1, d).setHours(0, 0, 0, 0)
  const today = new Date(now).setHours(0, 0, 0, 0)
  const days = Math.round((due - today) / 86_400_000)
  if (days === 0) return 'due today'
  if (days === 1) return 'due tomorrow'
  if (days === -1) return '1 day late'
  if (days > 1) return `in ${days} days`
  return `${Math.abs(days)} days late`
}

/** Age in whole years, or null when there's no birthday. */
export function age(birthday: string | undefined, now: number = Date.now()): number | null {
  if (!birthday) return null
  const [y, m, d] = birthday.split('-').map(Number)
  if (!y || !m || !d) return null
  const today = new Date(now)
  let years = today.getFullYear() - y
  const beforeBirthday = today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)
  if (beforeBirthday) years -= 1
  return years >= 0 && years < 150 ? years : null
}

export function todayIso(now: number = Date.now()): string {
  const date = new Date(now)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}
