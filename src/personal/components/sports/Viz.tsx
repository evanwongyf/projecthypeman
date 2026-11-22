import { useState } from 'react'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat } from './shared'

const f1 = (n: number) => (Number.isFinite(n) ? n.toFixed(1) : '–')
const f2 = (n: number) => (Number.isFinite(n) ? n.toFixed(2) : '–')

// ── projectile motion ──────────────────────────────────────────────────────

const GRAVITY: Record<string, number> = { earth: 9.81, moon: 1.62, mars: 3.71 }

export function ProjectileExplorer({ color }: { color: string }) {
  const [angle, setAngle] = useState(45)
  const [speed, setSpeed] = useState(20)
  const [world, setWorld] = useState<'earth' | 'moon' | 'mars'>('earth')
  const g = GRAVITY[world]
  const rad = (angle * Math.PI) / 180
  const range = (speed * speed * Math.sin(2 * rad)) / g
  const height = (speed * speed * Math.sin(rad) ** 2) / (2 * g)
  const flightTime = (2 * speed * Math.sin(rad)) / g
  const y = (x: number) => {
    if (Math.cos(rad) < 1e-6) return x === 0 ? 0 : NaN
    const yv = x * Math.tan(rad) - (g * x * x) / (2 * speed * speed * Math.cos(rad) ** 2)
    return yv < -0.5 ? NaN : yv
  }
  const maxX = Math.max(range * 1.15, 5)
  return (
    <Card title="Projectile motion explorer" color={color} note="Change the launch angle and speed and watch the range, height and flight time update. With no air resistance, 45° always gives the longest range for a given speed, try it.">
      <Pills label="World" value={world} options={[['earth', 'Earth (g = 9.81)'], ['moon', 'Moon (g = 1.62)'], ['mars', 'Mars (g = 3.71)']]} onChange={setWorld} />
      <PlotChart
        block={{
          t: 'plot',
          x: [0, maxX],
          y: [0, Math.max(height * 1.3, 2)],
          xLabel: 'horizontal distance (m)',
          yLabel: 'height (m)',
          curves: [{ f: y, color }],
          points: [
            { x: range / 2, y: height, label: `peak: ${f1(height)} m` },
            { x: range, y: 0, label: `range: ${f1(range)} m` },
          ],
        }}
      />
      <div className="flex flex-wrap gap-3">
        <Slider label="launch angle (°)" value={angle} min={1} max={89} step={1} onChange={setAngle} />
        <Slider label="launch speed (m/s)" value={speed} min={2} max={40} step={1} onChange={setSpeed} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="range" value={`${f1(range)} m`} tone={color} />
        <Stat label="max height" value={`${f1(height)} m`} />
        <Stat label="flight time" value={`${f2(flightTime)} s`} />
        <Stat label="angle for max range" value="45°" />
      </div>
    </Card>
  )
}
