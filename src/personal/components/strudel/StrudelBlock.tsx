import { useEffect, useId, useState } from 'react'
import { currentDemo, onDemoChange, playDemo, stopDemo, unlockAudio } from '../../lib/strudel/engine'
import { strudelCcLink } from '../../lib/strudel/share'
import { WaveGraphs } from './WaveGraphs'

type Block = { t: 'strudel'; code: string; with?: string; title?: string; caption?: string }

// The part of `b` that differs from `a` (common prefix and suffix trimmed), so the A/B code
// panes can highlight exactly what the effect adds.
function diffRange(a: string, b: string): [number, number] {
  let start = 0
  while (start < a.length && start < b.length && a[start] === b[start]) start++
  let endA = a.length
  let endB = b.length
  while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
    endA--
    endB--
  }
  return [start, endB]
}

function Code({ code, mark }: { code: string; mark?: [number, number] }) {
  const body =
    mark && mark[1] > mark[0] ? (
      <>
        {code.slice(0, mark[0])}
        <mark className="rounded px-0.5" style={{ background: 'color-mix(in srgb, var(--mustard) 70%, transparent)', color: 'inherit' }}>
          {code.slice(mark[0], mark[1])}
        </mark>
        {code.slice(mark[1])}
      </>
    ) : (
      code
    )
  return (
    <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-[var(--radius)] px-3 py-2 font-mono text-[12.5px] leading-relaxed" style={{ background: '#16142a', color: '#ece8ff' }}>
      {body}
    </pre>
  )
}

export default function StrudelBlock({ block, color }: { block: Block; color: string }) {
  const uid = useId()
  const idA = `${uid}-a`
  const idB = `${uid}-b`
  const [playing, setPlaying] = useState<string | null>(() => currentDemo())
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => onDemoChange(setPlaying), [])
  useEffect(() => () => {
    const p = currentDemo()
    if (p === idA || p === idB) stopDemo()
  }, [idA, idB])

  const play = async (id: string, code: string) => {
    unlockAudio()
    setError(null)
    setLoading(id)
    try {
      const err = await playDemo(id, code)
      if (err) setError(err)
    } catch (e) {
      setError(String((e as Error)?.message ?? e))
    } finally {
      setLoading(null)
    }
  }

  const ab = block.with !== undefined
  const mark = ab ? diffRange(block.code, block.with!) : undefined
  const mine = playing === idA || playing === idB

  const btn = (id: string, code: string, label: string, tone: string) => (
    <button
      type="button"
      onClick={() => (playing === id ? stopDemo() : play(id, code))}
      aria-pressed={playing === id}
      className="rounded-full border px-3 py-1 text-xs font-bold"
      style={{ borderColor: 'var(--line)', background: playing === id ? tone : 'var(--surface)', boxShadow: 'var(--shadow-card)' }}
    >
      {loading === id ? 'Loading…' : playing === id ? `■ Stop ${label.toLowerCase()}` : `▶ ${label}`}
    </button>
  )

  return (
    <figure className="flex flex-col gap-2 rounded-[var(--radius)] border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      {block.title && (
        <figcaption className="text-sm font-bold" style={{ color }}>
          {block.title}
        </figcaption>
      )}
      {ab ? (
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--ink-soft)' }}>
              Without
            </span>
            <Code code={block.code} />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--ink-soft)' }}>
              With
            </span>
            <Code code={block.with!} mark={mark} />
          </div>
        </div>
      ) : (
        <Code code={block.code} />
      )}
      <div className="flex flex-wrap items-center gap-2">
        {ab ? (
          <>
            {btn(idA, block.code, 'Without', 'var(--paper-2)')}
            {btn(idB, block.with!, 'With', 'var(--mint)')}
          </>
        ) : (
          btn(idA, block.code, 'Play', 'var(--mint)')
        )}
        {mine && (
          <span className="text-xs font-bold" style={{ color: 'var(--ink-soft)' }} role="status">
            ● playing {ab ? (playing === idB ? 'with' : 'without') : ''}
          </span>
        )}
        <a href={strudelCcLink(block.with ?? block.code)} target="_blank" rel="noreferrer" className="ml-auto text-xs font-bold underline">
          Open in Strudel ↗
        </a>
      </div>
      <WaveGraphs code={block.code} withCode={block.with} />
      {error && (
        <p className="rounded-[var(--radius)] px-2 py-1 font-mono text-xs text-white" style={{ background: '#a01e28' }} role="alert">
          {error}
        </p>
      )}
      {block.caption && (
        <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          {block.caption}
        </p>
      )}
    </figure>
  )
}
