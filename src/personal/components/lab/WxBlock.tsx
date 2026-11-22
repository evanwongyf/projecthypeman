import { useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Card, Pills, Slider, Stat } from './kit'

type WxBlockType = Extract<Block, { t: 'wx-viz' }>

export default function WxBlock({ block, color }: { block: WxBlockType; color: string }) {
  switch (block.viz) {
    case 'dewpoint':
      return <DewPoint color={color} />
    case 'lapse-rate':
      return <LapseRate color={color} />
    case 'geostrophic':
      return <Geostrophic color={color} />
    case 'station-model':
      return <StationModel color={color} />
    case 'heat-stress':
      return <HeatStress color={color} />
    case 'brier':
      return <Brier color={color} />
  }
}

// Magnus formula for dew point (°C) from temperature (°C) and relative humidity (%).
const magnus = (t: number, rh: number) => {
  const a = 17.625
  const b = 243.04
  const g = Math.log(Math.max(rh, 0.1) / 100) + (a * t) / (b + t)
  return (b * g) / (a - g)
}

function DewPoint({ color }: { color: string }) {
  const [t, setT] = useState(31)
  const [rh, setRh] = useState(75)
  const td = magnus(t, rh)
  const spread = t - td
  const lcl = 125 * spread
  return (
    <Card title="Temperature, humidity and dew point" color={color} note="The dew point is the temperature to which air must be cooled, at constant pressure, for it to become saturated. It measures how much water vapour the air holds, regardless of how warm it is, so it is a better guide to how muggy it feels than relative humidity. The spread between temperature and dew point also tells you how far a rising parcel must climb before its water vapour condenses into cloud: about 125 m for every degree of spread.">
      <div className="flex flex-wrap gap-3">
        <Slider label="air temperature (°C)" value={t} min={15} max={38} step={0.5} onChange={setT} show={`${t} °C`} />
        <Slider label="relative humidity (%)" value={rh} min={20} max={100} step={1} onChange={setRh} show={`${rh}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="dew point" value={`${td.toFixed(1)} °C`} tone={color} />
        <Stat label="spread T − Td" value={`${spread.toFixed(1)} °C`} />
        <Stat label="cloud base of rising air ≈ 125 m × spread" value={`${Math.round(lcl)} m`} />
        <Stat label="feel" value={td >= 24 ? 'oppressive' : td >= 21 ? 'very humid' : td >= 16 ? 'humid' : td >= 10 ? 'comfortable' : 'dry'} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Dew point against relative humidity at this temperature', x: [20, 100], y: [-10, 40], xLabel: 'relative humidity (%)', yLabel: '°C', curves: [{ f: (x: number) => magnus(t, x), color, label: 'dew point' }], hlines: [{ y: t, label: 'air temperature' }], points: [{ x: rh, y: td, label: 'now' }] }} />
    </Card>
  )
}

function LapseRate({ color }: { color: string }) {
  const [gamma, setGamma] = useState(7)
  const [t0, setT0] = useState(30)
  const [lclKm, setLclKm] = useState(0.5)
  const dry = 9.8
  const moist = 5.5
  const envT = (z: number) => t0 - gamma * z
  const parcel = (z: number) => (z <= lclKm ? t0 - dry * z : t0 - dry * lclKm - moist * (z - lclKm))
  const state = gamma > dry ? 'absolutely unstable' : gamma > moist ? 'conditionally unstable: stable until lifted above the cloud base, then it rises freely' : 'absolutely stable'
  const top = 12
  return (
    <Card title="Atmospheric stability: the parcel method" color={color} note="Lift a parcel of air. While unsaturated it cools at the dry adiabatic rate, about 9.8 °C per km, because it expands as pressure falls. Once it saturates it cools more slowly, about 5 to 6 °C per km in the warm tropics, because condensation releases latent heat. If the parcel is warmer than its surroundings it keeps rising (unstable); if cooler it sinks back (stable). Tropical atmospheres sit between the two rates, which is why deep thunderstorms need a trigger and then run away.">
      <div className="flex flex-wrap gap-3">
        <Slider label="environment lapse rate (°C per km)" value={gamma} min={3} max={11} step={0.1} onChange={setGamma} show={`${gamma.toFixed(1)}`} />
        <Slider label="surface temperature (°C)" value={t0} min={20} max={36} step={0.5} onChange={setT0} />
        <Slider label="cloud base (km)" value={lclKm} min={0.2} max={2} step={0.1} onChange={setLclKm} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="dry adiabatic rate" value="9.8 °C/km" />
        <Stat label="moist rate used" value={`${moist} °C/km`} />
        <Stat label="verdict" value={state} tone={color} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Temperature with height: environment and a lifted parcel', x: [0, top], y: [-60, 40], xLabel: 'height (km)', yLabel: 'temperature (°C)', curves: [{ f: envT, color: '#8a8478', label: 'environment' }, { f: parcel, color, label: 'lifted parcel', dashed: true }], vlines: [{ x: lclKm, label: 'cloud base' }] }} />
    </Card>
  )
}

function Geostrophic({ color }: { color: string }) {
  const [grad, setGrad] = useState(2)
  const [lat, setLat] = useState(35)
  const omega = 7.292e-5
  const rho = 1.15
  const f = (l: number) => 2 * omega * Math.sin((l * Math.PI) / 180)
  const speed = (l: number) => {
    const ff = f(l)
    return Math.abs(ff) < 1e-9 ? NaN : ((grad * 100) / 100000 / (rho * ff))
  }
  const sp = speed(lat)
  return (
    <Card title="Geostrophic wind and why it fails at the equator" color={color} note="Away from the equator, air flowing from high to low pressure is deflected by the Earth’s rotation until the pressure-gradient force and the Coriolis force balance. The result is wind that blows along the isobars, and the closer the isobars the stronger the wind. The Coriolis parameter f is proportional to the sine of latitude, so it vanishes at the equator and the balance breaks down: near Singapore (1.3° N) air simply flows down the pressure gradient, which is why isobars are a poor guide to wind there and why the tropics rely on satellite imagery and wind observations instead.">
      <div className="flex flex-wrap gap-3">
        <Slider label="pressure gradient (hPa per 100 km)" value={grad} min={0.5} max={6} step={0.1} onChange={setGrad} show={grad.toFixed(1)} />
        <Slider label="latitude (°)" value={lat} min={1} max={70} step={0.5} onChange={setLat} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Coriolis parameter f" value={`${(f(lat) * 1e5).toFixed(2)} ×10⁻⁵ s⁻¹`} />
        <Stat label="geostrophic wind" value={Number.isFinite(sp) ? `${sp.toFixed(1)} m/s (${(sp * 1.944).toFixed(0)} kt)` : 'undefined'} tone={color} />
        <Stat label="at Singapore (1.3° N)" value={`${(speed(1.3)).toFixed(0)} m/s: not valid`} />
        <Stat label="rule of thumb" value="closer isobars, stronger wind" />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Geostrophic wind speed against latitude (same pressure gradient)', x: [1, 70], y: [0, 60], xLabel: 'latitude (°)', yLabel: 'geostrophic wind (m/s)', curves: [{ f: (l: number) => Math.min(speed(l), 60), color, label: 'v = (1/ρf) ∂p/∂n' }], vlines: [{ x: 1.3, label: 'Singapore' }] }} />
    </Card>
  )
}

function StationModel({ color }: { color: string }) {
  const [temp, setTemp] = useState(29)
  const [dew, setDew] = useState(24)
  const [dir, setDir] = useState(225)
  const [kt, setKt] = useState(15)
  const [okta, setOkta] = useState(6)
  const [pres, setPres] = useState(1009.4)
  const cx = 150
  const cy = 120
  const r = 16
  // Wind barb: shaft points toward the direction the wind is coming from; barbs at the far end.
  const rad = ((dir - 90) * Math.PI) / 180
  const ux = Math.cos(rad)
  const uy = Math.sin(rad)
  const len = 62
  const sx = cx + ux * r
  const sy = cy + uy * r
  const ex = cx + ux * (r + len)
  const ey = cy + uy * (r + len)
  const pennants = Math.floor(kt / 50)
  const full = Math.floor((kt - pennants * 50) / 10)
  const half = Math.round((kt - pennants * 50 - full * 10) / 5) >= 1 ? 1 : 0
  const marks: { x1: number; y1: number; x2: number; y2: number; tri?: boolean; tx?: number; ty?: number }[] = []
  let pos = 0
  const px = -uy
  const py = ux
  const at = (d: number) => [ex - ux * d, ey - uy * d]
  for (let i = 0; i < pennants; i++) {
    const [a, b] = at(pos)
    const [c, d] = at(pos + 7)
    marks.push({ x1: a, y1: b, x2: a + px * 14 - ux * 3, y2: b + py * 14 - uy * 3, tri: true, tx: c, ty: d })
    pos += 8
  }
  for (let i = 0; i < full; i++) {
    const [a, b] = at(pos)
    marks.push({ x1: a, y1: b, x2: a + px * 14 - ux * 5, y2: b + py * 14 - uy * 5 })
    pos += 6
  }
  if (half) {
    const [a, b] = at(pos + (full === 0 && pennants === 0 ? 6 : 0))
    marks.push({ x1: a, y1: b, x2: a + px * 7 - ux * 3, y2: b + py * 7 - uy * 3 })
  }
  const fillFrac = okta / 8
  const code = Math.round((pres * 10) % 1000)
    .toString()
    .padStart(3, '0')
  const compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.round(dir / 45) % 8]
  return (
    <Card title="The station model: one weather report, drawn" color={color} note="Surface charts show each observation as a compact symbol. The circle is the station, filled in proportion to cloud cover (in eighths, called oktas). The wind is a shaft pointing toward the direction the wind comes from, with feathers for speed: a half feather is 5 knots, a full one 10, a pennant 50. Temperature sits at top left, dew point at bottom left, and pressure at top right in tenths of hPa with the leading 9 or 10 dropped, so 1009.4 hPa is written 094.">
      <div className="flex flex-wrap gap-3">
        <Slider label="temperature (°C)" value={temp} min={20} max={36} step={1} onChange={(v) => { setTemp(v); if (dew > v) setDew(v) }} />
        <Slider label="dew point (°C)" value={dew} min={15} max={temp} step={1} onChange={setDew} />
        <Slider label="wind from (°)" value={dir} min={0} max={359} step={5} onChange={setDir} show={`${dir}° ${compass}`} />
        <Slider label="wind speed (knots)" value={kt} min={0} max={60} step={5} onChange={setKt} />
        <Slider label="cloud cover (oktas)" value={okta} min={0} max={8} step={1} onChange={setOkta} />
        <Slider label="pressure (hPa)" value={pres} min={995} max={1022} step={0.1} onChange={setPres} />
      </div>
      <svg viewBox="0 0 300 240" className="mx-auto block h-auto w-full max-w-md rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Station model">
        <circle cx={cx} cy={cy} r={r} fill="var(--surface)" stroke="var(--ink)" strokeWidth={2} />
        {okta === 8 ? <circle cx={cx} cy={cy} r={r} fill="var(--ink)" /> : okta > 0 ? <path d={`M${cx} ${cy - r} A${r} ${r} 0 ${fillFrac > 0.5 ? 1 : 0} 1 ${cx + r * Math.sin(2 * Math.PI * fillFrac)} ${cy - r * Math.cos(2 * Math.PI * fillFrac)} L${cx} ${cy}Z`} fill="var(--ink)" /> : null}
        {kt > 0 && <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="var(--ink)" strokeWidth={2} />}
        {kt > 0 && marks.map((m, i) => (m.tri ? <polygon key={i} points={`${m.x1},${m.y1} ${m.x2},${m.y2} ${m.tx},${m.ty}`} fill="var(--ink)" /> : <line key={i} x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2} stroke="var(--ink)" strokeWidth={2} />))}
        {kt === 0 && <circle cx={cx} cy={cy} r={r + 5} fill="none" stroke="var(--ink)" strokeWidth={2} />}
        <text x={cx - 38} y={cy - 22} fontSize={16} fontWeight={700} textAnchor="end" fill="#d9534f">{temp}</text>
        <text x={cx - 38} y={cy + 30} fontSize={16} fontWeight={700} textAnchor="end" fill="#2f9e6e">{dew}</text>
        <text x={cx + 38} y={cy - 22} fontSize={16} fontWeight={700} fill="var(--ink)">{code}</text>
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="reads as" value={`${temp} °C, dew ${dew} °C`} />
        <Stat label="wind" value={`${kt} kt from ${compass}`} />
        <Stat label="cloud" value={okta === 0 ? 'clear' : okta === 8 ? 'overcast' : `${okta}/8 covered`} />
        <Stat label="pressure" value={`${pres.toFixed(1)} hPa`} tone={color} />
      </div>
    </Card>
  )
}

// Stull (2011) wet-bulb temperature and the NWS (Rothfusz) heat index.
const wetBulb = (t: number, rh: number) =>
  t * Math.atan(0.151977 * Math.sqrt(rh + 8.313659)) + Math.atan(t + rh) - Math.atan(rh - 1.676331) + 0.00391838 * rh ** 1.5 * Math.atan(0.023101 * rh) - 4.686035
const heatIndexC = (tc: number, rh: number) => {
  const t = tc * 1.8 + 32
  let hi = 0.5 * (t + 61 + (t - 68) * 1.2 + rh * 0.094)
  if ((hi + t) / 2 >= 80) {
    hi = -42.379 + 2.04901523 * t + 10.14333127 * rh - 0.22475541 * t * rh - 0.00683783 * t * t - 0.05481717 * rh * rh + 0.00122874 * t * t * rh + 0.00085282 * t * rh * rh - 0.00000199 * t * t * rh * rh
  }
  return (hi - 32) / 1.8
}

function HeatStress({ color }: { color: string }) {
  const [t, setT] = useState(32)
  const [rh, setRh] = useState(75)
  const [sun, setSun] = useState<'shade' | 'sun'>('shade')
  const tw = wetBulb(t, rh)
  const tg = sun === 'sun' ? t + 8 : t
  const wbgt = sun === 'sun' ? 0.7 * tw + 0.2 * tg + 0.1 * t : 0.7 * tw + 0.3 * t
  const hi = heatIndexC(t, rh)
  const level = wbgt >= 32 ? 'extreme: avoid hard exertion' : wbgt >= 30 ? 'very high: limit and rest often' : wbgt >= 28 ? 'high: reduce intensity, drink often' : wbgt >= 25 ? 'moderate: take care' : 'lower'
  return (
    <Card title="Heat and humidity: wet-bulb, heat index and WBGT" color={color} note="Your body cools mainly by evaporating sweat, and the air’s humidity limits how fast that can happen. The wet-bulb temperature is the lowest temperature reachable by evaporative cooling, so it captures both heat and humidity. The heat index is a ‘feels like’ number from a regression; WBGT (wet-bulb globe temperature) weights wet-bulb 70%, globe 20% or 30% and air 10% or 0%, and is what sports and military guidelines use. The WBGT estimate here is simplified (the sun adds about 8 °C to the globe reading in strong sun) and is for learning, not safety decisions: use the official reading.">
      <div className="flex flex-wrap gap-3">
        <Slider label="air temperature (°C)" value={t} min={24} max={40} step={0.5} onChange={setT} />
        <Slider label="relative humidity (%)" value={rh} min={30} max={100} step={1} onChange={setRh} />
        <Pills label="exposure" value={sun} onChange={setSun} options={[['shade', 'Shade / indoors'], ['sun', 'Full sun']]} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="wet-bulb (Stull)" value={`${tw.toFixed(1)} °C`} />
        <Stat label="heat index (feels like)" value={`${hi.toFixed(1)} °C`} />
        <Stat label="WBGT (simplified)" value={`${wbgt.toFixed(1)} °C`} tone={color} />
        <Stat label="effort guidance" value={level} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Wet-bulb temperature against relative humidity at this air temperature', x: [30, 100], y: [15, 36], xLabel: 'relative humidity (%)', yLabel: '°C', curves: [{ f: (x: number) => wetBulb(t, x), color, label: 'wet-bulb' }], hlines: [{ y: t, label: 'air temperature' }], points: [{ x: rh, y: tw, label: 'now' }] }} />
    </Card>
  )
}

function Brier({ color }: { color: string }) {
  const [q, setQ] = useState(0.3)
  const [p, setP] = useState(0.3)
  const bs = (f: number) => q * (1 - f) ** 2 + (1 - q) * f ** 2
  const climo = bs(q)
  return (
    <Card title="Scoring a probability forecast: the Brier score" color={color} note="A forecast of ‘30% chance of rain’ is neither right nor wrong on a single day. It is judged over many days: it is reliable if it rained on about 30% of the days it was issued. The Brier score is the mean squared error between forecast probability and outcome (1 if it rained, 0 if not); lower is better. It is a proper scoring rule, meaning the best expected score comes from stating your honest probability. Here, q is how often it really rains on days like this.">
      <div className="flex flex-wrap gap-3">
        <Slider label="true chance of rain on such days (q)" value={q} min={0.05} max={0.95} step={0.01} onChange={setQ} show={`${Math.round(q * 100)}%`} />
        <Slider label="probability the forecaster states (p)" value={p} min={0} max={1} step={0.01} onChange={setP} show={`${Math.round(p * 100)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="expected Brier score" value={bs(p).toFixed(3)} tone={color} />
        <Stat label="best possible (p = q)" value={climo.toFixed(3)} />
        <Stat label="always saying 50%" value={bs(0.5).toFixed(3)} />
        <Stat label="overconfident extreme (p = 0 or 1)" value={Math.min(bs(0), bs(1)).toFixed(3)} />
      </div>
      <PlotChart block={{ t: 'plot', title: 'Expected Brier score against the stated probability', x: [0, 1], y: [0, 1], xLabel: 'stated probability p', yLabel: 'expected Brier score', curves: [{ f: bs, color, label: 'q(1−p)² + (1−q)p²' }], vlines: [{ x: q, label: 'honest p = q' }] }} />
    </Card>
  )
}
