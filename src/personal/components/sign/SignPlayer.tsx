import { useEffect, useRef, useState } from 'react'
import type { Clip } from '../../lib/sign/clip'
import { useSignPrefs } from '../../lib/sign/prefs'
import { SignSvg } from './SignSvg'

type Props = {
  clip: Clip
  label: string
  // The moment shown before playing (ms).
  still?: number
  // Changing this number starts the clip from the beginning.
  play?: number
  onTime?: (t: number) => void
  onEnd?: () => void
  // Show the play button (off when something else drives playback).
  controls?: boolean
  background?: string
}

export function SignPlayer({ clip, label, still = 0, play, onTime, onEnd, controls = true, background = 'var(--paper-2)' }: Props) {
  const { tone, lefty, speed } = useSignPrefs()
  const [t, setT] = useState(still)
  const [playing, setPlaying] = useState(false)
  const [played, setPlayed] = useState(false)
  const raf = useRef(0)
  const cb = useRef({ onTime, onEnd, speed })
  cb.current = { onTime, onEnd, speed }

  function start() {
    cancelAnimationFrame(raf.current)
    setPlaying(true)
    setPlayed(true)
    let last = performance.now()
    let time = 0
    const step = (now: number) => {
      time += (now - last) * cb.current.speed
      last = now
      if (time >= clip.duration) {
        setT(clip.duration)
        setPlaying(false)
        cb.current.onTime?.(clip.duration)
        cb.current.onEnd?.()
        return
      }
      setT(time)
      cb.current.onTime?.(time)
      raf.current = requestAnimationFrame(step)
    }
    setT(0)
    raf.current = requestAnimationFrame(step)
  }

  // A new clip (another word, say) goes back to its still frame. This runs before the
  // effect below, so a new clip and a play request together still play.
  useEffect(() => {
    cancelAnimationFrame(raf.current)
    setPlaying(false)
    setPlayed(false)
    setT(still)
  }, [clip, still])

  useEffect(() => {
    if (play) start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const { items, box } = clip.frame(Math.min(t, clip.duration), { mirror: lefty })

  return (
    <div className="relative overflow-hidden rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background }}>
      <button
        type="button"
        onClick={start}
        className="block w-full cursor-pointer"
        aria-label={`${played ? 'Replay' : 'Play'} the sign for ${label}`}
        disabled={!controls}
      >
        <SignSvg items={items} box={box} tone={tone} label={label} />
      </button>
      {controls && (
        <button
          type="button"
          onClick={start}
          tabIndex={-1}
          aria-hidden
          className="absolute right-2 bottom-2 flex h-9 items-center gap-1 rounded-full border px-3 text-xs font-bold"
          style={{ borderColor: 'var(--line)', background: playing ? 'var(--mint)' : 'var(--surface)', boxShadow: 'var(--shadow-card)' }}
        >
          <span aria-hidden>{played ? '↻' : '▶'}</span>
          {playing ? 'playing' : played ? 'replay' : 'play'}
        </button>
      )}
    </div>
  )
}
