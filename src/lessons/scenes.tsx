import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { CAST, Sprite, type CastId, type SpriteName } from './pixel'
import { Character, useSlide, type Scene } from './kit'
import { sfx } from './sfx'

/** Painted scenery behind a slide: sky, ground and a few pixel props. */
export function Backdrop({ scene, quiet }: { scene: Scene; quiet?: boolean }) {
  return (
    <div className={`lx-backdrop lx-bg-${scene} ${quiet ? 'is-quiet' : ''}`} aria-hidden>
      {(scene === 'pond' || scene === 'sky' || scene === 'rail' || scene === 'market') && (
        <>
          <div className="lx-cloud" style={{ left: '8%', top: '10%' }} />
          <div className="lx-cloud lx-cloud-2" style={{ left: '58%', top: '6%' }} />
          {!quiet && <Sprite name="sun" size={5} style={{ position: 'absolute', right: '6%', top: '6%' }} />}
        </>
      )}
      {scene === 'pond' && !quiet && (
        <>
          <Sprite name="tree" size={11} style={{ position: 'absolute', left: '2%', bottom: '30%' }} />
          <Sprite name="tree" size={8} style={{ position: 'absolute', right: '4%', bottom: '31%' }} />
          <div className="lx-pond" />
          <Sprite name="lily" size={1.6} style={{ position: 'absolute', left: '36%', bottom: '14%' }} />
          <Sprite name="lily" size={1.4} style={{ position: 'absolute', left: '58%', bottom: '19%' }} />
        </>
      )}
      {scene === 'rail' && <div className="lx-rails" />}
      {scene === 'market' && <div className="lx-awning" />}
      {(scene === 'night' || scene === 'space') && (
        <div className="lx-stars">
          {[...Array(40)].map((_, i) => (
            <span key={i} style={{ left: `${(i * 47) % 100}%`, top: `${(i * 29) % 70}%`, animationDelay: `${(i % 7) * 0.3}s` }} />
          ))}
        </div>
      )}
      {scene === 'class' && (
        <>
          <div className="lx-board" />
          <div className="lx-window" />
        </>
      )}
    </div>
  )
}

function Rich({ text }: { text: string }) {
  // *word* becomes a highlighted word.
  return (
    <>
      {text.split('*').map((part, i) =>
        i % 2 ? (
          <b key={i} className="lx-hl">
            {part}
          </b>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

export type CastSpot = { who: CastId; x: number; flip?: boolean; size?: number }
export type Prop = { sprite: SpriteName; x: number; y: number; size?: number; flip?: boolean }
export type Line = { who: CastId | null; text: string; show?: ReactNode }

/** A story beat: characters on a scene, speaking one line at a time. */
export function Story({ scene, cast, lines, props = [] }: { scene: Scene; cast: CastSpot[]; lines: Line[]; props?: Prop[] }) {
  const { active, onStep, next } = useSlide()
  const [i, setI] = useState(0)
  const [typed, setTyped] = useState(0)
  const line = lines[Math.min(i, lines.length - 1)]

  useEffect(() => {
    if (!active) return
    setTyped(0)
    const id = window.setInterval(() => {
      setTyped((t) => {
        if (t >= line.text.length) {
          window.clearInterval(id)
          return t
        }
        if (t % 3 === 0) sfx.tap(-6)
        return t + 1
      })
    }, 24)
    return () => window.clearInterval(id)
  }, [i, active, line.text])

  const step = useCallback(() => {
    if (typed < line.text.length) {
      setTyped(line.text.length)
      return true
    }
    if (i < lines.length - 1) {
      setI(i + 1)
      return true
    }
    return false
  }, [typed, line.text.length, i, lines.length])

  useEffect(() => {
    if (!active) return
    onStep(step)
    return () => onStep(null)
  }, [active, step, onStep])

  const shown = line.text.slice(0, typed)
  const done = typed >= line.text.length

  return (
    <div className="lx-story" onClick={() => !step() && next()}>
      <Backdrop scene={scene} />
      {props.map((p, k) => (
        <Sprite key={k} name={p.sprite} size={p.size ?? 2.5} flip={p.flip} className="lx-prop" style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${k * 0.2}s` }} />
      ))}
      {line.show && (
        <div className="lx-showcard" key={i}>
          {line.show}
        </div>
      )}
      <div className="lx-cast">
        {cast.map((c) => (
          <Character key={c.who} who={c.who} size={c.size ?? 9} flip={c.flip} talking={line.who === c.who && !done} style={{ left: `${c.x}%` }} />
        ))}
      </div>
      <div className="lx-dialogue">
        {line.who && (
          <span className="lx-dialogue-name" style={{ background: CAST[line.who].colour }}>
            {CAST[line.who].name}
          </span>
        )}
        <p>
          <Rich text={shown} />
          {done && <span className="lx-caret">▼</span>}
        </p>
        <span className="lx-dialogue-count">
          {i + 1}/{lines.length}
        </span>
      </div>
    </div>
  )
}

export function Title({ kicker, title, sub, scene = 'pond', cast = [] }: { kicker: string; title: string; sub?: string; scene?: Scene; cast?: CastSpot[] }) {
  return (
    <div className="lx-title-slide">
      <Backdrop scene={scene} />
      <div className="lx-title-block">
        <p className="lx-kicker">{kicker}</p>
        <h2 className="lx-title">{title}</h2>
        {sub && <p className="lx-sub">{sub}</p>}
        <p className="lx-press">press → or tap next to start</p>
      </div>
      <div className="lx-cast">
        {cast.map((c) => (
          <Character key={c.who} who={c.who} size={c.size ?? 10} flip={c.flip} style={{ left: `${c.x}%` }} />
        ))}
      </div>
    </div>
  )
}

export type TeachCard = { visual: ReactNode; head: string; body: string }

/** A concept slide whose cards appear one press at a time. */
export function Teach({ title, cards, scene = 'sky', guide }: { title: string; cards: TeachCard[]; scene?: Scene; guide?: { who: CastId; text: string } }) {
  const { active, onStep } = useSlide()
  const [n, setN] = useState(1)
  const step = useCallback(() => {
    if (n < cards.length) {
      setN(n + 1)
      sfx.flip()
      return true
    }
    return false
  }, [n, cards.length])
  useEffect(() => {
    if (!active) return
    onStep(step)
    return () => onStep(null)
  }, [active, step, onStep])

  return (
    <div className="lx-teach">
      <Backdrop scene={scene} quiet />
      <h2 className="lx-teach-title">{title}</h2>
      <div className="lx-teach-cards">
        {cards.map((c, i) => (
          <div key={i} className={`lx-teach-card ${i < n ? 'is-in' : ''}`} onClick={() => i >= n && step()}>
            <div className="lx-teach-visual">{c.visual}</div>
            <h3>{c.head}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      {guide && (
        <div className="lx-teach-guide">
          <Sprite name={CAST[guide.who].sprite} size={5} />
          <div className="lx-bubble lx-bubble-left">{guide.text}</div>
        </div>
      )}
    </div>
  )
}
