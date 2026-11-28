import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { sfx } from './sfx'
import { CAST, Sprite, type CastId, type SpriteName } from './pixel'

export const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function rand(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

/** A repeatable random sequence, so a slide's layout is stable between renders. */
export function seeded(seed: number) {
  let s = seed % 2147483647 || 1
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

// ---------------------------------------------------------------------------
// Slide context: lets an activity talk to the player.
// ---------------------------------------------------------------------------

export type SlideApi = {
  /** Self-paced student package rather than a class presentation. */
  student: boolean
  /** The slide is the one on screen. */
  active: boolean
  /** Record a score from 0 to 1 for this slide (student packages). */
  report: (score: number) => void
  /** Let the slide take "next" presses first (a story stepping through lines). */
  onStep: (fn: (() => boolean) | null) => void
  /** Go to the next slide. */
  next: () => void
}

export const SlideCtx = createContext<SlideApi>({ student: false, active: true, report: () => {}, onStep: () => {}, next: () => {} })
export const useSlide = () => useContext(SlideCtx)

// ---------------------------------------------------------------------------
// Drag and drop on pointer events: mouse, touch, pen and interactive boards.
// ---------------------------------------------------------------------------

function zoneAt(x: number, y: number, self: HTMLElement | null): HTMLElement | null {
  for (const el of document.elementsFromPoint(x, y)) {
    if (self && self.contains(el)) continue
    const z = (el as HTMLElement).closest<HTMLElement>('[data-zone]')
    if (z && !(self && self.contains(z))) return z
  }
  return null
}

function markOver(z: HTMLElement | null) {
  document.querySelectorAll('[data-over]').forEach((el) => {
    if (el !== z) el.removeAttribute('data-over')
  })
  z?.setAttribute('data-over', '')
}

export function Draggable({
  id,
  onDrop,
  children,
  className = '',
  style,
  disabled,
  onTap,
}: {
  id: string
  onDrop: (id: string, zone: string | null) => void
  children: ReactNode
  className?: string
  style?: CSSProperties
  disabled?: boolean
  onTap?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const start = useRef<{ x: number; y: number; moved: boolean } | null>(null)
  const [d, setD] = useState<{ x: number; y: number } | null>(null)

  return (
    <div
      ref={ref}
      className={`lx-drag ${d ? 'is-dragging' : ''} ${disabled ? 'is-locked' : ''} ${className}`}
      style={{ ...style, transform: d ? `translate(${d.x}px, ${d.y}px) scale(1.1) rotate(-3deg)` : style?.transform }}
      onPointerDown={(e) => {
        if (disabled || e.button > 0) return
        e.preventDefault()
        e.stopPropagation()
        ref.current?.setPointerCapture(e.pointerId)
        start.current = { x: e.clientX, y: e.clientY, moved: false }
        setD({ x: 0, y: 0 })
        sfx.pick()
      }}
      onPointerMove={(e) => {
        const s = start.current
        if (!s) return
        const dx = e.clientX - s.x
        const dy = e.clientY - s.y
        if (Math.abs(dx) + Math.abs(dy) > 4) s.moved = true
        setD({ x: dx, y: dy })
        markOver(zoneAt(e.clientX, e.clientY, ref.current))
      }}
      onPointerUp={(e) => {
        const s = start.current
        if (!s) return
        start.current = null
        const z = zoneAt(e.clientX, e.clientY, ref.current)
        markOver(null)
        setD(null)
        if (!s.moved && onTap) onTap()
        else onDrop(id, z?.dataset.zone ?? null)
      }}
      onPointerCancel={() => {
        start.current = null
        markOver(null)
        setD(null)
      }}
    >
      {children}
    </div>
  )
}

export function Zone({ id, children, className = '', style }: { id: string; children?: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div data-zone={id} className={`lx-zone ${className}`} style={style}>
      {children}
    </div>
  )
}

/** A short-lived flag for a "wrong" wobble or a "right" glow. */
export function useFlash(): [string | null, (key: string) => void] {
  const [k, setK] = useState<string | null>(null)
  const t = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(t.current), [])
  return [
    k,
    (key: string) => {
      setK(key)
      window.clearTimeout(t.current)
      t.current = window.setTimeout(() => setK(null), 650)
    },
  ]
}

// ---------------------------------------------------------------------------
// Number pictures
// ---------------------------------------------------------------------------

const PATTERNS: [number, number][][] = [
  [],
  [[2, 2]],
  [[1, 1], [3, 3]],
  [[1, 1], [2, 2], [3, 3]],
  [[1, 1], [3, 1], [1, 3], [3, 3]],
  [[1, 1], [3, 1], [2, 2], [1, 3], [3, 3]],
  [[1, 1], [1, 2], [1, 3], [3, 1], [3, 2], [3, 3]],
  [[1, 1], [1, 2], [1, 3], [3, 1], [3, 2], [3, 3], [2, 2]],
  [[1, 1], [1, 2], [1, 3], [3, 1], [3, 2], [3, 3], [2, 1.5], [2, 2.5]],
  [[1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [1, 3], [2, 3], [3, 3]],
  [[1.4, 0.6], [1.4, 1.3], [1.4, 2], [1.4, 2.7], [1.4, 3.4], [2.6, 0.6], [2.6, 1.3], [2.6, 2], [2.6, 2.7], [2.6, 3.4]],
]

export function DotCard({ n, size = 6, scatter, colour = '#e8423f', className = '', style }: { n: number; size?: number; scatter?: number; colour?: string; className?: string; style?: CSSProperties }) {
  let pts = PATTERNS[n] ?? []
  if (scatter) {
    const r = seeded(scatter * 31 + n)
    const cells = shuffle([...Array(16).keys()].map((i) => [0.6 + (i % 4) * 0.93, 0.6 + Math.floor(i / 4) * 0.93] as [number, number]))
    pts = cells.slice(0, n).map(([x, y]) => [x + (r() - 0.5) * 0.3, y + (r() - 0.5) * 0.3])
  }
  return (
    <div className={`lx-card lx-dotcard ${className}`} style={{ width: `${size * 0.72}em`, height: `${size}em`, ...style }}>
      <svg viewBox="0 0 4 4" style={{ width: '100%', height: '100%' }} aria-label={`${n} dots`}>
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={0.32} fill={colour} stroke="#1d2238" strokeWidth={0.06} />
        ))}
      </svg>
    </div>
  )
}

export function NumCard({ n, size = 6, className = '', style }: { n: number; size?: number; className?: string; style?: CSSProperties }) {
  return (
    <div className={`lx-card lx-numcard ${className}`} style={{ width: `${size * 0.72}em`, height: `${size}em`, ...style }}>
      <span style={{ fontSize: `${size * (n >= 10 ? 0.24 : 0.34)}em` }}>{n}</span>
    </div>
  )
}

export function TenFrame({
  filled,
  size = 2.4,
  zonePrefix,
  render,
  colour = '#e8423f',
}: {
  filled: number | boolean[]
  size?: number
  zonePrefix?: string
  render?: (i: number) => ReactNode
  colour?: string
}) {
  const cells = Array.isArray(filled) ? filled : [...Array(10)].map((_, i) => i < filled)
  return (
    <div className="lx-tenframe" style={{ gridTemplateColumns: `repeat(5, ${size}em)`, gridAutoRows: `${size}em` }}>
      {cells.map((on, i) => {
        const body = render ? render(i) : on ? <span className="lx-counter" style={{ background: colour }} /> : null
        return zonePrefix ? (
          <Zone key={i} id={`${zonePrefix}${i}`} className="lx-tf-cell">
            {body}
          </Zone>
        ) : (
          <div key={i} className="lx-tf-cell">
            {body}
          </div>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Chrome inside the stage
// ---------------------------------------------------------------------------

export function Btn({
  children,
  onClick,
  tone = 'plain',
  disabled,
  className = '',
  big,
}: {
  children: ReactNode
  onClick?: () => void
  tone?: 'plain' | 'go' | 'warn' | 'blue' | 'pink'
  disabled?: boolean
  className?: string
  big?: boolean
}) {
  return (
    <button
      type="button"
      className={`lx-btn lx-btn-${tone} ${big ? 'lx-btn-big' : ''} ${className}`}
      onClick={(e) => {
        e.stopPropagation()
        sfx.blip()
        onClick?.()
      }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

/** The shared layout for an activity: a prompt banner, the play area, a toolbar. */
export function Act({
  tag,
  prompt,
  children,
  tools,
  scene = 'paper',
  status,
}: {
  tag?: string
  prompt: ReactNode
  children: ReactNode
  tools?: ReactNode
  scene?: Scene
  status?: ReactNode
}) {
  return (
    <div className={`lx-act lx-scene-${scene}`}>
      <div className="lx-prompt">
        {tag && <span className="lx-tag">{tag}</span>}
        <span className="lx-prompt-text">{prompt}</span>
      </div>
      <div className="lx-play">{children}</div>
      {(tools || status) && (
        <div className="lx-tools">
          <div className="lx-status">{status}</div>
          <div className="lx-toolbtns">{tools}</div>
        </div>
      )}
    </div>
  )
}

export type Scene = 'pond' | 'sky' | 'class' | 'rail' | 'night' | 'market' | 'paper' | 'space' | 'beach'

export function Bubble({ who, children, side = 'left', style }: { who?: CastId; children: ReactNode; side?: 'left' | 'right'; style?: CSSProperties }) {
  return (
    <div className={`lx-bubble lx-bubble-${side}`} style={style}>
      {who && (
        <span className="lx-bubble-who" style={{ background: CAST[who].colour }}>
          {CAST[who].name}
        </span>
      )}
      {children}
    </div>
  )
}

export function Character({ who, size = 9, talking, flip, style }: { who: CastId; size?: number; talking?: boolean; flip?: boolean; style?: CSSProperties }) {
  return (
    <div className={`lx-char ${talking ? 'is-talking' : ''}`} style={style}>
      <Sprite name={CAST[who].sprite} size={size} flip={flip} />
      <span className="lx-shadow" />
    </div>
  )
}

/** A burst of pixel confetti; remount it (change `key`) to fire again. */
export function Confetti({ n = 36 }: { n?: number }) {
  const colours = ['#ffd23f', '#ff8fb8', '#7ff3ff', '#4fc35a', '#e8423f', '#a565f0']
  return (
    <div className="lx-confetti" aria-hidden>
      {[...Array(n)].map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            background: colours[i % colours.length],
            animationDelay: `${(i % 9) * 0.05}s`,
            ['--dx' as string]: `${((i * 53) % 21) - 10}em`,
            ['--rot' as string]: `${(i * 97) % 720}deg`,
          }}
        />
      ))}
    </div>
  )
}

/** Big on-screen keypad for "write the number" in student packages. */
export function NumberPad({ value, onChange, max = 10 }: { value: number | null; onChange: (n: number | null) => void; max?: number }) {
  return (
    <div className="lx-pad">
      {[...Array(max + 1).keys()].map((n) => (
        <button
          type="button"
          key={n}
          className={`lx-pad-key ${value === n ? 'is-on' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            sfx.tap(n)
            onChange(value === n ? null : n)
          }}
        >
          {n}
        </button>
      ))}
    </div>
  )
}

export function Feedback({ state, right, wrong }: { state: 'idle' | 'right' | 'wrong'; right?: ReactNode; wrong?: ReactNode }) {
  if (state === 'idle') return null
  return (
    <div className={`lx-feedback lx-feedback-${state}`}>
      <Sprite name={state === 'right' ? 'star' : 'heart'} size={1.4} />
      <span>{state === 'right' ? (right ?? 'Well done!') : (wrong ?? 'Not yet. Try again!')}</span>
    </div>
  )
}

export function SpriteRow({ name, n, size = 2.2, gap = 0.4, wrap, pal }: { name: SpriteName; n: number; size?: number; gap?: number; wrap?: boolean; pal?: Record<string, string> }) {
  return (
    <div style={{ display: 'flex', gap: `${gap}em`, flexWrap: wrap ? 'wrap' : 'nowrap', justifyContent: 'center', alignItems: 'flex-end' }}>
      {[...Array(n)].map((_, i) => (
        <Sprite key={i} name={name} size={size} pal={pal} />
      ))}
    </div>
  )
}

/** Student check helper: the first try counts towards the score. */
export function useCheck() {
  const { report } = useSlide()
  const tries = useRef(0)
  const [v, setV] = useState<'idle' | 'right' | 'wrong'>('idle')
  return {
    v,
    reset: () => {
      tries.current = 0
      setV('idle')
    },
    check(ok: boolean) {
      tries.current++
      setV(ok ? 'right' : 'wrong')
      if (ok) {
        sfx.yes()
        report(tries.current === 1 ? 1 : tries.current === 2 ? 0.6 : 0.3)
      } else sfx.no()
      return ok
    },
  }
}

/** The three-circle number bond: two parts above, the whole below. */
export function BondDiagram({ a, b, whole, size = 1, colours = ['#ffd6d4', '#fff1b3'] }: { a: ReactNode; b: ReactNode; whole: ReactNode; size?: number; colours?: [string, string] | string[] }) {
  return (
    <div className="lx-bond" style={{ fontSize: `${size}em` }}>
      <svg viewBox="0 0 100 90" className="lx-bond-lines" aria-hidden>
        <line x1="22" y1="30" x2="50" y2="62" />
        <line x1="78" y1="30" x2="50" y2="62" />
      </svg>
      <span className="lx-bond-c lx-bond-a" style={{ background: colours[0] }}>{a}</span>
      <span className="lx-bond-c lx-bond-b" style={{ background: colours[1] }}>{b}</span>
      <span className="lx-bond-c lx-bond-w">{whole}</span>
    </div>
  )
}
