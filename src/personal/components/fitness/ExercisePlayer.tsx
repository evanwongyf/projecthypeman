import { useEffect, useRef, useState } from 'react'
import { SKIN_TONES } from '../../lib/fitness/figure'
import type { Exercise } from '../../lib/fitness/moves'
import { setFitPrefs, useFitPrefs } from '../../lib/fitness/prefs'
import { Stage, VIEWS } from '../../lib/fitness/stage'
import type { ViewName } from '../../lib/fitness/stage'
import { NativeSelect } from '../../../components/NativeSelect'

const VIEW_BUTTONS: [ViewName, string][] = [
  ['front', 'Front'],
  ['three', '¾'],
  ['side', 'Side'],
]

const SPEEDS = [0.1, 0.25, 0.5, 0.75, 1, 1.5, 2]

// A 3D exercise you can play, pause, scrub, slow down and swing the camera around.
// The canvas only draws while it is on screen.
export function ExercisePlayer({ ex, color }: { ex: Exercise; color: string }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const box = useRef<HTMLDivElement>(null)
  const stage = useRef<Stage | null>(null)
  const { tone, speed, muscles } = useFitPrefs()
  const [playing, setPlaying] = useState(() => !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
  const [phase, setPhase] = useState(0)
  const [reps, setReps] = useState(0)
  const [view, setView] = useState<ViewName | 'custom'>(ex.view ?? 'three')
  const [failed, setFailed] = useState(false)
  const live = useRef({ playing, speed, phase: 0, time: 0, visible: true, dirty: true })
  useEffect(() => {
    live.current.playing = playing
    live.current.speed = speed
  }, [playing, speed])

  // Build the stage once.
  useEffect(() => {
    if (!canvas.current) return
    let s: Stage
    try {
      s = new Stage(canvas.current, tone)
    } catch {
      setFailed(true)
      return
    }
    stage.current = s
    const fit = () => {
      const el = box.current
      if (!el) return
      s.resize(el.clientWidth, el.clientHeight)
      live.current.dirty = true
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(box.current!)
    const io = new IntersectionObserver(([e]) => {
      live.current.visible = e.isIntersecting
      live.current.dirty = true
    })
    io.observe(box.current!)

    let raf = 0
    let last = performance.now()
    let shown = -1
    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000)
      last = now
      const l = live.current
      if (l.visible && stage.current) {
        if (l.playing) {
          const before = l.phase
          l.phase = (l.phase + (dt * 1000 * l.speed) / s.cycleMs) % 1
          l.time += dt * l.speed
          if (l.phase < before) setReps((n) => n + 1)
          l.dirty = true
        }
        if (l.dirty) {
          s.draw(l.phase, l.time)
          l.dirty = false
          // Update the scrub bar a few times a second, not every frame.
          if (Math.abs(l.phase - shown) > 0.02 || !l.playing) {
            shown = l.phase
            setPhase(l.phase)
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      s.dispose()
      stage.current = null
    }
    // The stage is built once; tone and exercise are applied by the effects below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const s = stage.current
    if (!s) return
    s.setMotion(ex)
    s.setView({ ...VIEWS[ex.view ?? 'three'] })
    live.current.phase = 0
    live.current.time = 0
    live.current.dirty = true
    setView(ex.view ?? 'three')
    setReps(0)
  }, [ex])

  useEffect(() => {
    stage.current?.figure.setTone(tone)
    live.current.dirty = true
  }, [tone])

  useEffect(() => {
    stage.current?.highlight(muscles ? ex.muscles : [])
    live.current.dirty = true
  }, [muscles, ex])

  function pickView(v: ViewName) {
    setView(v)
    stage.current?.setView({ ...VIEWS[v] })
    live.current.dirty = true
  }

  // Drag to swing the camera round; drag up and down to look from higher or lower.
  const drag = useRef<{ x: number; y: number } | null>(null)
  function onDown(e: React.PointerEvent) {
    drag.current = { x: e.clientX, y: e.clientY }
    ;(e.target as Element).setPointerCapture(e.pointerId)
  }
  function onMove(e: React.PointerEvent) {
    const s = stage.current
    if (!drag.current || !s) return
    const dx = e.clientX - drag.current.x
    const dy = e.clientY - drag.current.y
    drag.current = { x: e.clientX, y: e.clientY }
    s.setView({ ...s.view, az: s.view.az - dx * 0.5, el: Math.max(-5, Math.min(70, s.view.el + dy * 0.3)) })
    setView('custom')
    live.current.dirty = true
  }
  function onWheel(e: React.WheelEvent) {
    const s = stage.current
    if (!s) return
    s.setView({ ...s.view, dist: Math.max(2, Math.min(8, s.view.dist + e.deltaY * 0.003)) })
    live.current.dirty = true
  }

  function scrub(v: number) {
    setPlaying(false)
    live.current.phase = v
    live.current.dirty = true
    setPhase(v)
  }

  const chip = (on: boolean) => ({ borderColor: 'var(--line)', background: on ? 'var(--ink)' : 'var(--surface)', color: on ? 'var(--surface)' : 'var(--ink)' })

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={box}
        className="relative aspect-[4/3] w-full touch-none overflow-hidden rounded-[var(--radius)] border select-none"
        style={{ borderColor: 'var(--line)', cursor: drag.current ? 'grabbing' : 'grab' }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
        onWheel={onWheel}
      >
        <canvas ref={canvas} className="block h-full w-full" role="img" aria-label={`3D animation: ${ex.name}`} />
        {failed && (
          <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm" style={{ background: 'var(--paper-2)' }}>
            3D graphics are not available in this browser, so the animation cannot be shown. The written steps below still describe the exercise.
          </p>
        )}
        <span className="eyebrow absolute top-2 left-2 rounded-full px-2 py-0.5 font-bold" style={{ background: 'color-mix(in srgb, var(--surface) 80%, transparent)' }}>
          {reps} {reps === 1 ? 'rep' : 'reps'}
        </span>
        <span className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[11px]" style={{ background: 'color-mix(in srgb, var(--surface) 80%, transparent)', color: 'var(--ink-soft)' }}>
          drag to turn
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setPlaying((p) => !p)} className="btn btn-primary px-3 py-1.5 text-sm" style={{ minWidth: 84 }} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '❚❚ Pause' : '▶ Play'}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.005}
          value={phase}
          onChange={(e) => scrub(Number(e.target.value))}
          aria-label="Position in the movement"
          className="min-w-24 flex-1"
          style={{ accentColor: color }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <label className="flex items-center gap-2 font-bold">
          Speed
          <NativeSelect value={speed} onChange={(e) => setFitPrefs({ speed: Number(e.target.value) })} className="input-field py-1 text-xs" style={{ width: 'auto' }}>
            {SPEEDS.map((s) => (
              <option key={s} value={s}>
                {s}×{s < 0.3 ? ' (slow motion)' : ''}
              </option>
            ))}
          </NativeSelect>
        </label>
        <div className="flex gap-1" role="group" aria-label="Camera">
          {VIEW_BUTTONS.map(([v, label]) => (
            <button key={v} type="button" onClick={() => pickView(v)} aria-pressed={view === v} className="rounded-full border px-2.5 py-1 font-bold pointer-coarse:min-h-10" style={chip(view === v)}>
              {label}
            </button>
          ))}
        </div>
        <label className="flex cursor-pointer items-center gap-1.5 font-bold pointer-coarse:min-h-10">
          <input type="checkbox" checked={muscles} onChange={(e) => setFitPrefs({ muscles: e.target.checked })} style={{ accentColor: '#ff5a1f' }} />
          Show muscles worked
        </label>
        <div className="flex items-center gap-1" role="radiogroup" aria-label="Skin tone">
          {SKIN_TONES.map((t, i) => (
            <button
              key={t}
              type="button"
              role="radio"
              aria-checked={tone === i}
              aria-label={`Skin tone ${i + 1}`}
              onClick={() => setFitPrefs({ tone: i })}
              className="h-5 w-5 rounded-full border pointer-coarse:h-8 pointer-coarse:w-8"
              style={{ background: t, borderColor: 'var(--line)', outline: tone === i ? '2px solid var(--ink)' : 'none', outlineOffset: 1 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
