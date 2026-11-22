import { useEffect, useId, useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { diagramSvg } from '../../lib/survival/rope'
import { KNOTS } from '../../lib/survival/knots'
import { Btn, Card } from '../sports/shared'

type KnotBlockT = Extract<Block, { t: 'knot' }>

export default function KnotBlock({ block, color }: { block: KnotBlockT; color: string }) {
  const knot = KNOTS[block.id]
  const uid = useId().replace(/:/g, '')
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const n = knot.steps.length

  useEffect(() => {
    if (!playing) return
    const t = window.setTimeout(() => {
      if (i >= n - 1) setPlaying(false)
      else setI(i + 1)
    }, 2800)
    return () => window.clearTimeout(t)
  }, [playing, i, n])

  const svgs = useMemo(() => knot.steps.map((s, k) => diagramSvg(s.diagram, [360, 240], `${uid}-${k}`)), [knot, uid])
  const step = knot.steps[i]

  return (
    <Card title={`${knot.name}: step ${i + 1} of ${n}`} color={color} note="A schematic. The dashed arrow shows where the rope moves next. Orange is the standing part, blue is the working end. Practise with a thick, soft rope.">
      <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Steps">
        {knot.steps.map((s, k) => (
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
      <div className="rounded-[var(--radius)] border p-2" style={{ borderColor: 'var(--line)', background: 'var(--surface)', maxWidth: 560 }} role="img" aria-label={`${knot.name}, step ${i + 1}: ${step.title}. ${step.text}`}>
        <div dangerouslySetInnerHTML={{ __html: svgs[i] }} />
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
          {playing ? 'Pause' : 'Play all'}
        </Btn>
      </div>
    </Card>
  )
}
