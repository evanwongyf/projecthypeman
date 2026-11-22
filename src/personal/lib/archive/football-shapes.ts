// Shared helpers for the football pitch diagrams: build a team's shape from its lines of
// players. Coordinates run 0 to 100 along the pitch (attacking to the right) and 0 to 100
// across it. A mirrored team defends the right-hand goal and attacks left.

export type P = { x: number; y: number; label?: string; team?: 'a' | 'b' | 'gk' | 'ball' }

const ROWS: Record<number, number[]> = { 1: [50], 2: [36, 64], 3: [24, 50, 76], 4: [14, 38, 62, 86], 5: [10, 30, 50, 70, 90] }

export function shape(lines: number[], opts: { team?: 'a' | 'b'; mirror?: boolean; wb?: boolean; gk?: boolean; numbers?: boolean; shift?: number } = {}): P[] {
  const { team = 'a', mirror = false, wb = false, gk = true, numbers = false, shift = 0 } = opts
  const out: P[] = []
  if (gk) out.push({ x: 6, y: 50, team: 'gk', label: numbers ? '1' : undefined })
  let n = 2
  lines.forEach((count, i) => {
    const x = (lines.length === 1 ? 40 : 22 + (i * 48) / (lines.length - 1)) + shift
    ROWS[count].forEach((y, j) => {
      const wide = wb && count === 5 && (j === 0 || j === 4)
      out.push({ x: x + (wide ? 8 : 0), y, team, label: numbers ? String(n) : undefined })
      n++
    })
  })
  return mirror ? out.map((p) => ({ ...p, x: 100 - p.x, y: 100 - p.y, team: p.team === 'gk' ? 'gk' : p.team })) : out
}

export const a = (x: number, y: number, label?: string): P => ({ x, y, label, team: 'a' })
export const b = (x: number, y: number, label?: string): P => ({ x, y, label, team: 'b' })
export const gk = (x: number, y: number, label?: string): P => ({ x, y, label: label ?? 'GK', team: 'gk' })
export const ball = (x: number, y: number): P => ({ x, y, team: 'ball' })
