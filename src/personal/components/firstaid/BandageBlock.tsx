import { useEffect, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { bandage } from '../../lib/firstaid/bandages'
import { Btn, Card, soft } from '../sports/shared'

type T = Extract<Block, { t: 'bandage' }>

export default function BandageBlock({ block, color }: { block: T; color: string }) {
  const tech = bandage(block.id)
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const n = tech.steps.length

  useEffect(() => {
    if (!playing) return
    const t = window.setTimeout(() => {
      if (i >= n - 1) setPlaying(false)
      else setI(i + 1)
    }, 3000)
    return () => window.clearTimeout(t)
  }, [playing, i, n])

  const step = tech.steps[i]

  return (
    <Card title={`${tech.name}: step ${i + 1} of ${n}`} color={color} note={`You will need: ${tech.equipment}. These are schematic diagrams, drawn to show the technique clearly, practise on a willing volunteer or a cushion before you need it for real.`}>
      <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Steps">
        {tech.steps.map((s, k) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={k === i}
            onClick={() => {
              setPlaying(false)
              setI(k)
            }}
            className="rounded-full border px-3 py-1 text-xs font-bold pointer-coarse:min-h-10"
            style={{ borderColor: 'var(--line)', background: k === i ? 'var(--ink)' : 'var(--surface)', color: k === i ? 'var(--surface)' : 'var(--ink)' }}
          >
            {k + 1}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--paper-2)' }}>
        {step.render()}
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold">{step.title}</p>
        <p className="text-sm leading-relaxed">{step.text}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn onClick={() => { setPlaying(false); setI(Math.max(0, i - 1)) }} disabled={i === 0}>
          Back
        </Btn>
        <Btn onClick={() => { setPlaying(false); setI(Math.min(n - 1, i + 1)) }} disabled={i === n - 1}>
          Next
        </Btn>
        <Btn
          onClick={() => {
            if (playing) setPlaying(false)
            else {
              if (i >= n - 1) setI(0)
              setPlaying(true)
            }
          }}
          active={playing}
        >
          {playing ? '❚❚ Pause' : '▶ Play through'}
        </Btn>
      </div>
      <p className="text-xs" style={soft}>
        Educational diagram, not medical advice. If an injury could be serious, get it properly assessed rather than relying on a home bandage alone.
      </p>
    </Card>
  )
}
